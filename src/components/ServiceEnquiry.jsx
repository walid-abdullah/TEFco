"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP = "8801886755888";
const EMAIL = "theeditlyfoundry@gmail.com";
const MESSENGER = "editly.foundry";

const buildDraft = (service) => `Hi Editly Foundry team,

I saw your ${service} work and would like something similar.

Brand or channel:
Videos per month:
When I want to start:

Thanks!`;

// A ready-to-edit message for the service being viewed, which opens in whichever channel the visitor picks.
export default function ServiceEnquiry({ service }) {
  const [edited, setEdited] = useState(null);
  const [copied, setCopied] = useState(false);

  // An edited message keeps its wording. Only the service name follows the filter.
  const message = edited ? edited.text.replaceAll(edited.service, service) : buildDraft(service);
  const encoded = encodeURIComponent(message);
  const subject = encodeURIComponent(`${service} project enquiry`);

  const copyForMessenger = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="sg-enquiry on-iris" aria-label={`Ask about ${service}`}>
      <div className="container sg-enquiry-grid">
        <div>
          <span className="section-subtitle">Like what you see?</span>
          <h2>Get your <span className="combination-font">{service}</span> edited.</h2>
          <p>We have written the message for you. Change anything, then send it wherever you prefer.</p>
        </div>
        <div className="sg-enquiry-box">
          <label htmlFor="sg-enquiry-message">Your message</label>
          <textarea
            id="sg-enquiry-message"
            rows={9}
            value={message}
            onChange={(event) => setEdited({ text: event.target.value, service })}
          />
          <div className="sg-enquiry-actions">
            <a href={`https://wa.me/${WHATSAPP}?text=${encoded}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" />WhatsApp</a>
            <a href={`mailto:${EMAIL}?subject=${subject}&body=${encoded}`}><i className="fa-solid fa-envelope" aria-hidden="true" />Email</a>
            <a href={`https://m.me/${MESSENGER}?text=${encoded}`} target="_blank" rel="noopener noreferrer" onClick={copyForMessenger}><i className="fa-brands fa-facebook-messenger" aria-hidden="true" />Messenger</a>
            <Link href={`/book-a-call?service=${encodeURIComponent(service)}&note=${encodeURIComponent(message.slice(0, 1000))}`}><i className="fa-solid fa-calendar" aria-hidden="true" />Book a call</Link>
          </div>
          <p className="sg-enquiry-hint" aria-live="polite">{copied ? "Message copied. If Messenger opens empty, paste it there." : " "}</p>
        </div>
      </div>
    </section>
  );
}
