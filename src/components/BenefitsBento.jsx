"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: "01",
    label: "INGEST",
    badge: "MEDIA ARCHITECTURE",
    tagline: "FRAME.IO & NAS CENTRALIZED",
    title: "Everything in one place.",
    desc: "Raw 4K/6K footage, multi-cam audio sync, project briefs, and creative references are structured into an organized Frame.io & NAS edit tree within hours of upload.",
    chips: ["Auto Proxy Generation", "Multi-Track Sound Sync", "Zero Bottlenecks"],
    visual: "ingest",
  },
  {
    id: "02",
    label: "SHAPE",
    badge: "RETENTION HOOKS",
    tagline: "ALGORITHMIC PACING",
    title: "The idea gets sharper.",
    desc: "We engineer first-3-second visual hooks, pattern interrupts, and rhythmic narrative cuts that lock viewers past the 70% retention mark.",
    chips: ["Pattern Interrupts", "Hook Architecture", "Pacing & Story Flow"],
    visual: "shape",
  },
  {
    id: "03",
    label: "CRAFT",
    badge: "CINEMA FINISHING",
    tagline: "STUDIO AUDIO & 3D MOTION",
    title: "Every frame earns attention.",
    desc: "Custom Hollywood film LUTs, multi-band mastered audio foley, dynamic subtitles, and kinetic motion graphics synchronize into a distinctive visual brand language.",
    chips: ["Hollywood Color LUTs", "Mastered Vocal Clarity", "3D Kinetic Motion"],
    visual: "craft",
  },
  {
    id: "04",
    label: "RELEASE",
    badge: "OMNI-CHANNEL MASTER",
    tagline: "48-HOUR FINAL DELIVERABLE",
    title: "Ready for every channel.",
    desc: "Exported in pristine 4K ProRes and bit-perfect aspect ratios formatted specifically for YouTube widescreen, TikTok, Instagram Reels, and high-CTR paid ads.",
    chips: ["4K ProRes Master", "Multi-Format Renders", "48h Fast Turnaround"],
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
  const stackContainerRef = useRef(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const section = sectionRef.current;
    const stackContainer = stackContainerRef.current;
    if (!section || !stackContainer) return;

    const cards = stackContainer.querySelectorAll(".benefits-stack-card");
    if (cards.length < 4) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation for the Section Header
      const heading = section.querySelector(".benefits-bento-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Sticky Stacking Cards Animation (Option A)
      cards.forEach((card, i) => {
        // Initial soft reveal when entering view
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              onEnter: () => setActiveStepIndex(i),
              onEnterBack: () => setActiveStepIndex(i),
            },
          }
        );

        // Scale down preceding cards when next card scrolls over them
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.94 - i * 0.015,
            opacity: 0.4,
            filter: "blur(3px)",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToCard = (index) => {
    if (!stackContainerRef.current) return;
    const cards = stackContainerRef.current.querySelectorAll(".benefits-stack-card");
    if (cards[index]) {
      const topOffset = cards[index].getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="benefits-bento-section">
      <div className="container benefits-bento-container">
        
        {/* Section Header */}
        <div className="benefits-bento-heading text-center">
          <span className="section-subtitle">The Production System</span>
          <h2>
            From raw to <span className="combination-font">remarkable.</span>
          </h2>
          <p>
            A high-velocity, four-step post-production pipeline engineered for viral retention and cinematic conversion.
          </p>

          {/* Minimalist Titanium Step Tracker Pills */}
          <div className="benefits-stack-tracker">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`stack-tracker-btn ${activeStepIndex === idx ? "tracker-btn-active" : ""}`}
                onClick={() => scrollToCard(idx)}
              >
                <span className="tracker-num">{step.id}</span>
                <span className="tracker-label">{step.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* STICKY STACKING CARDS CONTAINER (OPTION A) */}
        <div ref={stackContainerRef} className="benefits-stack-container">
          {steps.map((step, index) => {
            return (
              <article
                key={step.id}
                className="benefits-stack-card glass-card"
                style={{
                  top: `calc(110px + ${index * 18}px)`,
                  zIndex: index + 1,
                }}
              >
                {/* LEFT COLUMN: 45% Typography & Copy */}
                <div className="stack-card-left">
                  <div className="stack-card-meta">
                    <div className="stack-pill-tag">
                      <span className="stack-step-num">{step.id}</span>
                      <span className="stack-step-label">{step.label}</span>
                    </div>
                    <span className="mono-spec stack-tagline">{step.tagline}</span>
                  </div>

                  <h3 className="stack-card-title">{step.title}</h3>
                  <p className="stack-card-desc">{step.desc}</p>

                  {/* Production Chips */}
                  <div className="stack-chips-grid">
                    {step.chips.map((chip) => (
                      <div key={chip} className="stack-chip">
                        <i className="fa-solid fa-check" />
                        <span>{chip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN: 55% Large Interactive Cinema Visual Stage */}
                <div className="stack-card-right">
                  <div className="stack-visual-cinema-box">
                    <div className="cinema-box-top-bar">
                      <span className="cinema-box-dot red" />
                      <span className="cinema-box-dot yellow" />
                      <span className="cinema-box-dot green" />
                      <span className="mono-spec cinema-box-tag">MODULE // {step.badge}</span>
                    </div>
                    <div className="cinema-visual-content">
                      <StageVisual type={step.visual} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
