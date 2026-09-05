"use client";

import React, { useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    label: "INGEST",
    title: "Everything in one place.",
    desc: "Raw footage, audio, and references become an organized edit.",
    visual: "ingest",
  },
  {
    id: "02",
    label: "SHAPE",
    title: "The idea gets sharper.",
    desc: "We find the hook, rhythm, and story before adding the polish.",
    visual: "shape",
  },
  {
    id: "03",
    label: "CRAFT",
    title: "Every frame earns attention.",
    desc: "Motion, sound, color, and captions work as one visual language.",
    visual: "craft",
  },
  {
    id: "04",
    label: "RELEASE",
    title: "Ready for every channel.",
    desc: "A finished master, shaped for the places your audience watches.",
    visual: "release",
  },
];

function StageVisual({ type }) {
  if (type === "ingest") {
    return (
      <div className="workflow-visual workflow-visual-ingest" aria-hidden="true">
        <div className="workflow-folder">
          <i className="fa-solid fa-folder-open" />
          <span>RAW FOOTAGE</span>
        </div>
        <div className="workflow-file workflow-file-one" />
        <div className="workflow-file workflow-file-two" />
        <div className="workflow-file workflow-file-three" />
        <div className="workflow-beam" />
      </div>
    );
  }

  if (type === "shape") {
    return (
      <div className="workflow-visual workflow-visual-shape" aria-hidden="true">
        <div className="workflow-wave">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="workflow-playhead" />
        <div className="workflow-caption-line" />
      </div>
    );
  }

  if (type === "craft") {
    return (
      <div className="workflow-visual workflow-visual-craft" aria-hidden="true">
        <div className="workflow-color-orb workflow-color-orb-one" />
        <div className="workflow-color-orb workflow-color-orb-two" />
        <div className="workflow-color-orb workflow-color-orb-three" />
        <div className="workflow-craft-frame">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div className="workflow-visual workflow-visual-release" aria-hidden="true">
      <div className="workflow-device workflow-device-vertical" />
      <div className="workflow-device workflow-device-wide" />
      <div className="workflow-release-arrow">↗</div>
    </div>
  );
}

export default function BenefitsBento() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      section.classList.add("workflow-is-active");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("workflow-is-active");
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="benefits-bento-section">
      <div className="container benefits-bento-container">
        <div className="benefits-bento-heading reveal-on-scroll">
          <span className="section-subtitle">The production system</span>
          <h2>
            From raw to
            <span className="combination-font"> remarkable.</span>
          </h2>
          <p>
            A clear four-step system that keeps the creative work moving
            without filling the screen with noise.
          </p>
        </div>

        <div className="benefits-bento-grid">
          {steps.map((step, index) => (
            <article
              className="workflow-card glass-card reveal-on-scroll"
              key={step.id}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="workflow-card-heading">
                <span className="workflow-step-number">{step.id}</span>
                <span className="mono-spec">{step.label}</span>
              </div>
              <StageVisual type={step.visual} />
              <div className="workflow-card-copy">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
