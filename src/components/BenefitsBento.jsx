"use client";

import React, { useState, useEffect, useRef } from "react";
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
    title: "Everything in one place.",
    desc: "Raw footage, multi-cam audio, project briefs, and references become an ultra-organized Frame.io & NAS edit tree.",
    visual: "ingest",
  },
  {
    id: "02",
    label: "SHAPE",
    badge: "RETENTION HOOKS",
    title: "The idea gets sharper.",
    desc: "We engineer first-3-second hooks, algorithmic rhythm, pacing cuts, and retention loops before layering visual polish.",
    visual: "shape",
  },
  {
    id: "03",
    label: "CRAFT",
    badge: "CINEMA FINISHING",
    title: "Every frame earns attention.",
    desc: "Custom Hollywood LUTs, sound design foley, 3D kinetic typography, and motion graphics synchronize into a single visual language.",
    visual: "craft",
  },
  {
    id: "04",
    label: "RELEASE",
    badge: "OMNI-CHANNEL MASTER",
    title: "Ready for every channel.",
    desc: "Exported in pristine 4K ProRes & bit-perfect renders tailored specifically for YouTube, TikTok, Reels, and paid ad networks.",
    visual: "release",
  },
];

function StageVisual({ type, isActive }) {
  if (type === "ingest") {
    return (
      <div className={`workflow-visual workflow-visual-ingest ${isActive ? "active-glow" : ""}`} aria-hidden="true">
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
      <div className={`workflow-visual workflow-visual-shape ${isActive ? "active-glow" : ""}`} aria-hidden="true">
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
      <div className={`workflow-visual workflow-visual-craft ${isActive ? "active-glow" : ""}`} aria-hidden="true">
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
    <div className={`workflow-visual workflow-visual-release ${isActive ? "active-glow" : ""}`} aria-hidden="true">
      <div className="workflow-device workflow-device-vertical" />
      <div className="workflow-device workflow-device-wide" />
      <div className="workflow-release-arrow">↗</div>
    </div>
  );
}

export default function BenefitsBento() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const section = sectionRef.current;
    const grid = gridRef.current;
    const timeline = timelineRef.current;
    if (!section || !grid) return;

    const cards = grid.querySelectorAll(".workflow-card");
    if (cards.length < 4) return;

    // 4-Corner Launch Vectors: [Top-Left, Top-Right, Bottom-Left, Bottom-Right]
    const launchPositions = [
      { x: -180, y: -140, rotation: -14 }, // Card 01: Top-Left
      { x: 180, y: -140, rotation: 14 },   // Card 02: Top-Right
      { x: -180, y: 140, rotation: 10 },   // Card 03: Bottom-Left
      { x: 180, y: 140, rotation: -10 },   // Card 04: Bottom-Right
    ];

    const ctx = gsap.context(() => {
      // Create master entrance timeline triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Animate Section Heading
      const heading = section.querySelector(".benefits-bento-heading");
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // 2. Animate 4 Cards flying from 4 Corners with Spring Bounce Physics
      cards.forEach((card, index) => {
        const pos = launchPositions[index] || { x: 0, y: 100, rotation: 0 };
        tl.fromTo(
          card,
          {
            opacity: 0,
            xPercent: pos.x,
            yPercent: pos.y,
            rotation: pos.rotation,
            scale: 0.65,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "back.out(1.55)",
          },
          "-=0.9"
        );
      });

      // 3. Animate Bottom 4-Step Interactive Timeline Strip
      if (timeline) {
        tl.fromTo(
          timeline,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, ease: "power4.out" },
          "-=0.5"
        );

        const timelineItems = timeline.querySelectorAll(".benefits-timeline-item");
        if (timelineItems.length > 0) {
          tl.fromTo(
            timelineItems,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" },
            "-=0.6"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="benefits-bento-section">
      <div className="container benefits-bento-container">
        
        {/* Section Heading */}
        <div className="benefits-bento-heading">
          <span className="section-subtitle">The Production System</span>
          <h2>
            From raw to <span className="combination-font">remarkable.</span>
          </h2>
          <p>
            A high-velocity, four-step post-production pipeline engineered for viral retention and cinematic conversion.
          </p>
        </div>

        {/* 2x2 Dedicated Visual Cinema Grid */}
        <div ref={gridRef} className="benefits-bento-grid benefits-visual-only-grid">
          {steps.map((step, index) => {
            const isHovered = activeStep === index;
            return (
              <article
                className={`workflow-card glass-card visual-stage-card ${isHovered ? "card-stage-active" : ""}`}
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="workflow-card-heading">
                  <div className="workflow-step-badge">
                    <span className="workflow-step-number">{step.id}</span>
                    <span className="workflow-live-dot" />
                  </div>
                  <span className="mono-spec">{step.label}</span>
                </div>

                {/* Rich Animated Stage Visual */}
                <div className="workflow-stage-media-wrapper">
                  <StageVisual type={step.visual} isActive={isHovered} />
                </div>

                {/* Minimalist Bottom Status Chip */}
                <div className="workflow-card-footer-pill">
                  <span className="stage-pill-tag">{step.badge}</span>
                  <span className="stage-pill-arrow">✦</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4-Step Interactive Horizontal Timeline Strip (Option 3) */}
        <div ref={timelineRef} className="benefits-timeline-strip glass-card">
          <div className="timeline-strip-header">
            <span className="mono-spec" style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "var(--accent-blue)" }}>
              INTERACTIVE PIPELINE BREAKDOWN
            </span>
            <span className="mono-spec" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              HOVER STEP TO PREVIEW STAGE
            </span>
          </div>

          <div className="benefits-timeline-track">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  className={`benefits-timeline-item ${isActive ? "timeline-item-active" : ""}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="timeline-item-indicator">
                    <span className="timeline-item-number">{step.id}</span>
                    <div className="timeline-item-line" />
                  </div>
                  
                  <div className="timeline-item-content">
                    <div className="timeline-item-meta">
                      <span className="timeline-item-label">{step.label}</span>
                      <span className="timeline-item-badge">{step.badge}</span>
                    </div>
                    <h4 className="timeline-item-title">{step.title}</h4>
                    <p className="timeline-item-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
