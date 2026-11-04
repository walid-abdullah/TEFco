"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandLogo";

const STORAGE_KEY = "editly-chat";
const WELCOME = "Hi! Ask me anything about our editing, prices or process, in English, বাংলা or Español.";
const FALLBACK = "I can't answer right now. Please reach us on WhatsApp at +880 1886 755 888 or at theeditlyfoundry@gmail.com.";
const SUGGESTIONS = ["What are your prices?", "ভিডিও এডিট করতে কত সময় লাগে?", "Quiero reservar una reunión"];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [turns, setTurns] = useState([]);
  const [draft, setDraft] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved)) setTurns(saved);
    } catch {
      // A blocked or empty store just means a fresh chat.
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(turns));
    } catch {
      // The chat still works without saving.
    }
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [turns, isOpen]);

  const updateReply = (change) => setTurns((current) => {
    const next = [...current];
    next[next.length - 1] = change(next[next.length - 1]);
    return next;
  });

  const ask = async (text) => {
    const question = text.trim();
    if (!question || isBusy) return;
    const history = [...turns, { role: "user", content: question }];
    setTurns([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setIsBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }),
      });
      if (!response.ok || !response.body) throw new Error(`Chat returned ${response.status}`);

      const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += value;
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines.filter(Boolean)) {
          const event = JSON.parse(line);
          if (event.type === "text") updateReply((reply) => ({ ...reply, content: reply.content + event.text }));
          if (event.type === "meeting") updateReply((reply) => ({ ...reply, meetingUrl: event.url }));
          if (event.type === "sent") updateReply((reply) => ({ ...reply, sent: true }));
          if (event.type === "error") throw new Error(event.reason);
        }
      }
    } catch {
      // The finally block shows contact details whenever no answer arrived.
    } finally {
      updateReply((reply) => ({ ...reply, content: reply.content || FALLBACK }));
      setIsBusy(false);
    }
  };

  return (
    <div className="sg-chat">
      {isOpen && (
        <section className="sg-chat-panel" aria-label="Chat with the Editly assistant">
          <div className="sg-chat-head">
            <i className="sg-chat-mark"><BrandMark /></i>
            <div>
              <strong>Editly assistant</strong>
              <span>AI · English, বাংলা, Español</span>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
          </div>

          <div className="sg-chat-log" ref={logRef} role="log" aria-live="polite">
            <p className="is-bot">{WELCOME}</p>
            {turns.map((turn, index) => (
              <div key={index} className={turn.role === "user" ? "sg-chat-turn is-user" : "sg-chat-turn"}>
                <p className={turn.role === "user" ? "is-user" : "is-bot"}>
                  {turn.content || <span className="sg-chat-typing" aria-label="Typing"><i /><i /><i /></span>}
                </p>
                {turn.meetingUrl && <Link href={turn.meetingUrl} className="sg-chat-action" onClick={() => setIsOpen(false)}>Choose a time <span aria-hidden="true">→</span></Link>}
                {turn.sent && <span className="sg-chat-sent">✓ Details sent to the team</span>}
              </div>
            ))}
            {turns.length === 0 && (
              <div className="sg-chat-suggestions">
                {SUGGESTIONS.map((item) => <button type="button" key={item} onClick={() => ask(item)}>{item}</button>)}
              </div>
            )}
          </div>

          <form className="sg-chat-form" onSubmit={(event) => { event.preventDefault(); ask(draft); }}>
            <label htmlFor="sg-chat-input" className="sr-only">Your message</label>
            <input id="sg-chat-input" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={2000} placeholder="Type your message..." autoComplete="off" />
            <button type="submit" disabled={isBusy || !draft.trim()} aria-label="Send message">→</button>
          </form>
        </section>
      )}

      <button type="button" className="sg-chat-launcher" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? "Close chat" : "Open chat"}>
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-comment"}`} aria-hidden="true" />
      </button>
    </div>
  );
}
