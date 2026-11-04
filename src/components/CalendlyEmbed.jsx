"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/w-abdullah5588/30min";
const STARTING_HEIGHT = 760;
const SMALLEST_REAL_HEIGHT = 400; // Ignore the tiny size Calendly reports while it is still loading.

// Calendly reports its content height to the page, so the frame grows to fit and never scrolls inside.
export default function CalendlyEmbed({ note = "", name = "", email = "", title = "Book a call with Walid Abdullah" }) {
  const frameRef = useRef(null);
  const [height, setHeight] = useState(STARTING_HEIGHT);
  const [host, setHost] = useState(null);

  useEffect(() => {
    setHost(window.location.hostname);
    const handleMessage = (event) => {
      if (event.origin !== "https://calendly.com" || event.source !== frameRef.current?.contentWindow) return;
      if (event.data?.event !== "calendly.page_height") return;
      const reported = parseInt(event.data.payload?.height, 10);
      if (reported >= SMALLEST_REAL_HEIGHT) setHeight(reported);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const params = new URLSearchParams({
    embed_domain: host || "",
    embed_type: "Inline",
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "0b0b14",
    primary_color: "5b2eff",
  });
  if (note) params.set("a1", note);
  if (name) params.set("name", name);
  if (email) params.set("email", email);

  return (
    <div className="sg-calendly" style={{ height }}>
      {host && (
        <iframe
          ref={frameRef}
          src={`${CALENDLY_URL}?${params}`}
          title={title}
          scrolling="no"
        />
      )}
    </div>
  );
}
