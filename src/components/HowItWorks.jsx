"use client";

import { useEffect, useRef } from "react";

const steps = [
  { title: "Send your footage", text: "Upload everything to one shared folder. That is the only setup." },
  { title: "We edit it", text: "Your dedicated team delivers the first cut within 24–48 hours." },
  { title: "You review it", text: "Comment right on the video. Revisions are unlimited." },
  { title: "You post it", text: "Get final files ready for every platform you publish on." },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="sg-section sg-how">
      <div className="container">
        <span className="section-subtitle">How it works</span>
        <h2>Send raw footage.<br /><span className="combination-font">Get videos ready to post.</span></h2>
        <ol className="sg-how-steps">
          {steps.map((step, index) => (
            <li key={step.title} style={{ "--step": index }}>
              <b>{index + 1}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
