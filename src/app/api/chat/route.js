import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chatKnowledge";
import { clip, isEmail } from "@/lib/requestSafety";
import { POST as sendLead } from "../contact/route";

// Tried in order. A model that is out of quota or overloaded hands over to the next.
const MODELS = ["gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite"];
const MAX_HISTORY = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_TOOL_ROUNDS = 3;
const OVERLOAD_RETRY_MS = 1000;
const OVERLOADED_STATUS = new Set([500, 503]);
const OUT_OF_QUOTA_STATUS = 429;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 30;

const SHORT_STRING = { type: "string" };

const TOOLS = [{
  functionDeclarations: [
    {
      name: "prepare_meeting_link",
      description: "Create a button that opens the booking calendar, filled in with what the visitor has shared. The visitor still chooses the time. Use when the visitor wants a meeting or call.",
      parametersJsonSchema: {
        type: "object",
        properties: {
          service: { type: "string", description: "The service they are interested in, in English, if known." },
          budget: { type: "string", description: "Their stated budget, if any." },
          name: SHORT_STRING,
          email: SHORT_STRING,
          notes: { type: "string", description: "A one-sentence summary of what they need, in English." },
        },
      },
    },
    {
      name: "send_details_to_team",
      description: "Send the visitor's details to the team, who are alerted, and email the visitor a confirmation. Use only after the visitor gave their email address and agreed to send their details.",
      parametersJsonSchema: {
        type: "object",
        properties: {
          name: SHORT_STRING,
          email: SHORT_STRING,
          whatsapp: SHORT_STRING,
          service: SHORT_STRING,
          budget: SHORT_STRING,
          message: { type: "string", description: "What the visitor needs, in their own words." },
        },
        required: ["name", "email", "message"],
      },
    },
  ],
}];

const hits = new Map();
function isChatRateLimited(ip) {
  const now = Date.now();
  for (const [key, entry] of hits) if (entry.reset < now) hits.delete(key);
  const entry = hits.get(ip) || { count: 0, reset: now + WINDOW_MS };
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

// Keep only well-formed text turns from the browser, ending on the visitor's message.
function cleanHistory(raw) {
  if (!Array.isArray(raw)) return null;
  const messages = raw
    .slice(-MAX_HISTORY)
    .filter((turn) => (turn?.role === "user" || turn?.role === "assistant") && typeof turn.content === "string" && turn.content.trim())
    .map((turn) => ({ role: turn.role === "assistant" ? "model" : "user", parts: [{ text: clip(turn.content, MAX_MESSAGE_LENGTH) }] }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  return messages.length && messages[messages.length - 1].role === "user" ? messages : null;
}

const toStringFields = (input, keys) =>
  Object.fromEntries(keys.map((key) => [key, typeof input?.[key] === "string" ? clip(input[key], 500) : ""]));

function buildMeetingPath(input) {
  const fields = toStringFields(input, ["service", "budget", "name", "email", "notes"]);
  const params = new URLSearchParams();
  if (fields.service) params.set("service", fields.service);
  if (fields.budget) params.set("budget", fields.budget);
  if (fields.name) params.set("name", fields.name);
  if (isEmail(fields.email)) params.set("email", fields.email);
  if (fields.notes) params.set("note", fields.notes);
  const query = params.toString();
  return `/book-a-call${query ? `?${query}` : ""}`;
}

async function runTool(tool, ip, send) {
  if (tool.name === "prepare_meeting_link") {
    send({ type: "meeting", url: buildMeetingPath(tool.args) });
    return { result: "The button is now showing in the chat. Ask the visitor to click it and choose a time. The meeting is not booked until they do." };
  }

  if (tool.name === "send_details_to_team") {
    const fields = toStringFields(tool.args, ["name", "email", "whatsapp", "service", "budget", "message"]);
    if (!fields.name || !fields.message || !isEmail(fields.email)) {
      return { error: "A name, a valid email address and a message are required. Ask the visitor for what is missing." };
    }
    const response = await sendLead(new Request("http://internal/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": ip },
      body: JSON.stringify(fields),
    }));
    if (!response.ok) {
      return { error: "Sending failed. Apologise and share the email address and WhatsApp number so the visitor can contact the team directly." };
    }
    send({ type: "sent" });
    return { result: "Sent. The team has been alerted and the visitor will get a confirmation email." };
  }

  return { error: `Unknown tool: ${tool.name}` };
}

// These errors arrive before any text, so moving to another model is invisible to the visitor.
async function startStream(client, request) {
  let lastError;
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        return await client.models.generateContentStream({ ...request, model });
      } catch (error) {
        lastError = error;
        if (error?.status === OUT_OF_QUOTA_STATUS) break;
        if (!OVERLOADED_STATUS.has(error?.status)) throw error;
        if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, OVERLOAD_RETRY_MS));
      }
    }
  }
  throw lastError;
}

async function runConversation(client, contents, ip, send) {
  for (let round = 0; round <= MAX_TOOL_ROUNDS; round += 1) {
    const stream = await startStream(client, {
      contents,
      config: {
        systemInstruction: CHAT_SYSTEM_PROMPT,
        maxOutputTokens: 2048,
        // No tools on the last round, so a turn always ends with an answer.
        ...(round === MAX_TOOL_ROUNDS ? {} : { tools: TOOLS }),
      },
    });

    // Parts go back unchanged on the next round, because they can carry thought signatures.
    const modelParts = [];
    for await (const chunk of stream) {
      modelParts.push(...(chunk.candidates?.[0]?.content?.parts || []));
      if (chunk.text) send({ type: "text", text: chunk.text });
    }

    const calls = modelParts.filter((part) => part.functionCall).map((part) => part.functionCall);
    if (calls.length === 0) {
      if (!modelParts.some((part) => part.text)) send({ type: "error", reason: "empty" });
      return;
    }

    contents.push({ role: "model", parts: modelParts });
    const responses = [];
    for (const call of calls) {
      responses.push({ functionResponse: { id: call.id, name: call.name, response: await runTool(call, ip, send) } });
    }
    contents.push({ role: "user", parts: responses });
  }
}

export async function POST(request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (isChatRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const messages = cleanHistory(body?.messages);
  if (!messages) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const encoder = new TextEncoder();
  const responseStream = new ReadableStream({
    async start(controller) {
      const send = (event) => controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`));
      try {
        await runConversation(client, messages, ip, send);
      } catch (error) {
        console.error("Chat request failed:", error?.status, error?.message);
        send({ type: "error", reason: "failed" });
      }
      send({ type: "done" });
      controller.close();
    },
  });

  return new Response(responseStream, {
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" },
  });
}
