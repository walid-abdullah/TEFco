"use client";

import { useState } from "react";
import Link from "next/link";
import WorkflowExplainerVideo from "@/components/WorkflowExplainerVideo";

const steps = [
  {
    number: "01",
    label: "BRIEF",
    timing: "SAME DAY",
    title: "Start with the signal.",
    summary: "We learn what the piece needs to make people stop, understand, and care.",
    description:
      "Send the footage, references, and one clear outcome. We turn the context into a focused creative direction before anyone touches the timeline.",
    output: "Creative direction",
  },
  {
    number: "02",
    label: "ORGANIZE",
    timing: "DAY 01",
    title: "Everything in its place.",
    summary: "Your footage, notes, and references become one clear working system.",
    description:
      "We sort the material, sync the angles, check the audio, and prepare a clean project space so the edit moves without friction.",
    output: "Organized project",
  },
  {
    number: "03",
    label: "EDIT",
    timing: "DAY 01–02",
    title: "Shape the story.",
    summary: "The first cut finds the right pace, structure, and visual language.",
    description:
      "Our editors build the narrative, tighten the rhythm, and place the moments that earn the next second—without adding noise for its own sake.",
    output: "First cut",
  },
  {
    number: "04",
    label: "REVIEW",
    timing: "WITHIN 24H",
    title: "Make feedback easy.",
    summary: "Timecoded notes keep every decision visible and every revision focused.",
    description:
      "Review in one shared space, leave notes on the exact frame, and see changes clearly. One calm feedback loop replaces scattered messages.",
    output: "Approved master",
  },
  {
    number: "05",
    label: "DELIVER",
    timing: "READY TO PUBLISH",
    title: "Leave with momentum.",
    summary: "Your final assets arrive ready for the platforms and people they are for.",
    description:
      "We export the right formats, aspect ratios, captions, and source files—so the finished piece can move straight into your publishing rhythm.",
    output: "Platform-ready files",
  },
];

const principles = [
  ["01", "Clear before clever", "The idea leads. Every cut, title, and sound earns its place."],
  ["02", "Visible by default", "Files, feedback, and delivery windows stay easy to find."],
  ["03", "Built to repeat", "The next edit should get faster because the system gets smarter."],
];

const expectations = [
  "A dedicated project space for every engagement",
  "Clear delivery windows before work begins",
  "Timecoded review and focused revisions",
  "Platform-ready exports when you need them",
];

const faqs = [
  ["How fast is the first edit?", "Recurring edits typically receive a first cut within 24–48 hours, depending on the brief and footage volume."],
  ["How do we send footage?", "Use your dedicated Drive, Dropbox, or Frame.io project space. We will guide you through the cleanest setup."],
  ["Can you handle long-form and short-form?", "Yes. One source conversation can become a long-form cut, short-form clips, captions, and platform-specific exports."],
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <main className="workflow-page">
      <div className="workflow-page-glow" aria-hidden="true" />
      <div className="container workflow-container">
        <section className="workflow-hero reveal-on-scroll">
          <div className="workflow-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="mono-spec">THE EDITLY FOUNDRY / HOW WE WORK</span>
          </div>
          <h1>
            A clear path from raw
            {" "}
            <span className="combination-font">to ready.</span>
          </h1>
          <p>
            A calm, visible process for turning footage into work your audience
            can understand, remember, and act on.
          </p>
        </section>

        <section className="workflow-console reveal-on-scroll" aria-label="Interactive production process">
          <div className="workflow-console-rail">
            <div className="workflow-rail-header">
              <span className="section-subtitle">The production path</span>
              <span className="mono-spec">01 → 05 / ONE SYSTEM</span>
            </div>
            <div className="workflow-step-list" role="tablist" aria-label="Workflow stages">
              {steps.map((step, index) => (
                <button
                  className={`workflow-step-button ${index === activeStep ? "is-active" : ""}`}
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  role="tab"
                  aria-selected={index === activeStep}
                  aria-controls={`workflow-stage-${step.number}`}
                >
                  <span className="workflow-step-button-number">{step.number}</span>
                  <span><strong>{step.label}</strong><small>{step.timing}</small></span>
                  <i aria-hidden="true">↗</i>
                </button>
              ))}
            </div>
            <div className="workflow-rail-actions">
              <span className="mono-spec">READY WHEN YOU ARE</span>
              <Link href="/book-a-call">Start a project <span aria-hidden="true">↗</span></Link>
              <Link href="/work">See our work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <article className="workflow-featured-stage" id={`workflow-stage-${current.number}`} key={current.number} role="tabpanel">
            <div className="workflow-stage-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="workflow-stage-topline">
              <span className="workflow-stage-live">● IN PROGRESS</span>
              <span className="mono-spec">{current.timing}</span>
            </div>
            <div className="workflow-stage-number">{current.number}</div>
            <span className="mono-spec">{current.label}</span>
            <h2>{current.title}</h2>
            <p className="workflow-stage-summary">{current.summary}</p>
            <p className="workflow-stage-description">{current.description}</p>
            <div className="workflow-stage-specs">
              <div><span className="mono-spec">YOU RECEIVE</span><strong>{current.output}</strong></div>
              <div><span className="mono-spec">PROJECT VELOCITY</span><strong>{current.timing}</strong></div>
            </div>
            {current.label === "DELIVER" && (
              <div className="workflow-delivery-visual" aria-hidden="true">
                <div className="workflow-delivery-lanes">
                  <span /><span /><span />
                </div>
                <div className="workflow-delivery-chips">
                  <span>9:16</span>
                  <span>16:9</span>
                  <span>CC</span>
                  <span>4K</span>
                </div>
              </div>
            )}
            <div className="workflow-stage-progress">
              <div><span className="mono-spec">WORKFLOW PROGRESS</span><span className="mono-spec">{current.number} / 05</span></div>
              <span><i style={{ width: `${(activeStep + 1) * 20}%` }} /></span>
            </div>
          </article>
        </section>

        <WorkflowExplainerVideo videoUrl={process.env.NEXT_PUBLIC_WORKFLOW_VIDEO_URL} />

        <section className="workflow-principles reveal-on-scroll">
          <div className="workflow-section-heading">
            <span className="section-subtitle">What stays true</span>
            <h2>Less chasing.{" "}<span className="combination-font">More making.</span></h2>
          </div>
          <div className="workflow-principles-grid">
            {principles.map(([number, title, description]) => (
              <article className="workflow-principle" key={number}>
                <span className="mono-spec">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-expectations reveal-on-scroll">
          <div>
            <span className="section-subtitle">From first upload to final export</span>
            <h2>Everything you need.<span className="combination-font"> Nothing you don&apos;t.</span></h2>
          </div>
          <div className="workflow-expectation-list">
            {expectations.map((item) => <p key={item}><i aria-hidden="true">↗</i>{item}</p>)}
          </div>
        </section>

        <section className="workflow-faq reveal-on-scroll">
          <div className="workflow-section-heading">
            <span className="section-subtitle">Before we begin</span>
            <h2>Good questions.<span className="combination-font"> Clear answers.</span></h2>
          </div>
          <div className="about-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="about-faq-item" key={question}>
                <summary><span className="mono-spec">0{index + 1}</span><span>{question}</span><span className="about-faq-plus" aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="workflow-contact reveal-on-scroll">
          <div>
            <span className="section-subtitle">The next frame</span>
            <h2>Have footage waiting for <span className="combination-font">direction?</span></h2>
            <p>Send a brief, ask a question, or book a short introduction with the studio.</p>
          </div>
          <div className="workflow-contact-actions">
            <Link href="/book-a-call">Book a 15-minute call <i aria-hidden="true">↗</i></Link>
            <a href="mailto:theeditlyfoundry@gmail.com">theeditlyfoundry@gmail.com <i aria-hidden="true">↗</i></a>
            <a href="https://wa.me/8801886755888">WhatsApp the studio <i aria-hidden="true">↗</i></a>
          </div>
        </section>
      </div>
    </main>
  );
}
