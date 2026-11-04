"use client";

import { useEffect, useState } from "react";
import WorkflowExplainerVideo from "@/components/WorkflowExplainerVideo";

const steps = [
  {
    number: "01",
    label: "Brief",
    timing: "Same day",
    title: "Start with what matters.",
    description: "Send the footage, references and one clear outcome. We turn that context into a focused creative direction before anyone touches the timeline.",
    you: "Share your footage, references and one clear goal.",
    us: "Turn it into a creative direction for the edit.",
    output: "Creative direction",
  },
  {
    number: "02",
    label: "Organize",
    timing: "Day 1",
    title: "Everything in its place.",
    description: "We sort the material, sync the angles, check the audio and prepare a clean project space, so the edit moves without friction.",
    you: "Nothing. We take it from here.",
    us: "Sort files, sync camera angles and check the audio.",
    output: "Organized project",
  },
  {
    number: "03",
    label: "Edit",
    timing: "Day 1–2",
    title: "Shape the story.",
    description: "Our editors build the narrative, tighten the rhythm and place the moments that earn the next second, without adding noise for its own sake.",
    you: "Wait for your review link.",
    us: "Build the story, pacing, captions and sound.",
    output: "First cut",
  },
  {
    number: "04",
    label: "Review",
    timing: "Within 24 hours",
    title: "Make feedback easy.",
    description: "Review in one shared space, leave notes on the exact frame and see changes clearly. One calm feedback loop replaces scattered messages.",
    you: "Leave notes on the exact frame you want changed.",
    us: "Apply every note and show you what changed.",
    output: "Approved master",
  },
  {
    number: "05",
    label: "Deliver",
    timing: "Ready to publish",
    title: "Publish with confidence.",
    description: "We export the right formats, aspect ratios, captions and source files, so the finished piece moves straight into your publishing schedule.",
    you: "Download your files and publish.",
    us: "Export every format and aspect ratio you need.",
    output: "Platform-ready files",
  },
];

const principles = [
  ["Clear before clever", "The idea leads. Every cut, title and sound earns its place."],
  ["Visible by default", "Files, feedback and delivery windows stay easy to find."],
  ["Built to repeat", "The next edit gets faster because the system gets smarter."],
];

const expectations = [
  "A dedicated project space for every engagement",
  "Clear delivery windows before work begins",
  "Timecoded review and focused revisions",
  "Platform-ready exports when you need them",
];

const WORKFLOW_VIDEO_URL = process.env.NEXT_PUBLIC_WORKFLOW_VIDEO_URL;
const tools = ["Frame.io", "Google Drive", "Dropbox", "Slack", "WhatsApp", "Premiere Pro", "After Effects", "DaVinci Resolve"];

const faqs = [
  ["How fast is the first edit?", "Recurring edits typically receive a first cut within 24–48 hours, depending on the brief and footage volume."],
  ["How do we send footage?", "Use your dedicated Drive, Dropbox or Frame.io project space. We will guide you through the cleanest setup."],
  ["Can you handle long-form and short-form?", "Yes. One source conversation can become a long-form cut, short-form clips, captions and platform-specific exports."],
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveStep(Number(entry.target.dataset.step));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".sg-wf-step").forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="sg-page">
      <section className="sg-phero">
        <div className="container">
          <span className="section-subtitle">How we work</span>
          <h1>From raw footage to <span className="combination-font">ready to post.</span></h1>
          <div className="sg-phero-foot">
            <p>Five clear steps. You always know what is happening, who is doing it and what you get next.</p>
          </div>
        </div>
      </section>

      <section className="sg-stages on-ink" aria-label="The five steps">
        <div className="sg-stages-art" aria-hidden="true">
          <b>Five steps</b>
          <em>Raw to ready</em>
        </div>
        <ol className="sg-stages-cards">
          {steps.map((step) => (
            <li key={step.number}>
              <a href={`#step-${step.number}`}>
                <span>{step.number}</span>
                <strong>{step.label}</strong>
                <small>{step.timing}</small>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="sg-wf">
        <div className="container sg-wf-grid">
          <nav className="sg-wf-index" aria-label="Workflow steps">
            <span>The process</span>
            {steps.map((step, index) => (
              <a key={step.number} href={`#step-${step.number}`} className={activeStep === index ? "is-active" : ""}>
                <b>{step.number}</b>{step.label}
              </a>
            ))}
          </nav>

          <div className="sg-wf-steps">
            {steps.map((step, index) => (
              <article className="sg-wf-step" id={`step-${step.number}`} data-step={index} key={step.number}>
                <div className="sg-wf-step-head">
                  <span>Step {step.number}</span>
                  <em>{step.timing}</em>
                </div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <dl>
                  <div><dt>You</dt><dd>{step.you}</dd></div>
                  <div><dt>We</dt><dd>{step.us}</dd></div>
                  <div><dt>You receive</dt><dd><strong>{step.output}</strong></dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band band-ink on-ink sg-band-reveal">
        <div className="container">
          {WORKFLOW_VIDEO_URL && (
            <>
              <div className="home-foundry-section-head">
                <div>
                  <span className="section-subtitle">See it in action</span>
                  <h2>Watch how a project <span className="combination-font">moves.</span></h2>
                </div>
              </div>
              <WorkflowExplainerVideo videoUrl={WORKFLOW_VIDEO_URL} ariaLabel="Workflow overview" aspectRatio="16 / 9" />
            </>
          )}
          <span className="section-subtitle">Tools we work in</span>
          <h2 className="sg-narrow">Everything stays in tools <span className="combination-font">you already know.</span></h2>
          <div className="sg-tools">
            <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </div>
        </div>
      </section>

      <div className="sg-group sg-group-iris on-iris sg-band-reveal">
      <section className="sg-band">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">What stays true</span>
            <h2>Less chasing.<br /><span className="combination-font">More making.</span></h2>
          </div>
          <div className="sg-lines">
            {principles.map(([title, text]) => (
              <div key={title} data-rise><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">On every project</span>
            <h2>What you can <span className="combination-font">always expect.</span></h2>
          </div>
          <ul className="sg-checklist">
            {expectations.map((item) => <li key={item} data-rise>{item}</li>)}
          </ul>
        </div>
      </section>

      </div>

      <section className="sg-faq">
        <div className="container sg-faq-grid">
          <div>
            <span className="section-subtitle">Before we begin</span>
            <h2>Good questions.<br /><span className="combination-font">Clear answers.</span></h2>
          </div>
          <div className="sg-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
