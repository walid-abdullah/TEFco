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
    tagline: "FRAME.IO & NAS CENTRALIZED",
    title: "Everything in one place.",
    desc: "Raw 4K/6K footage, multi-cam audio sync, project briefs, and creative references are structured into an organized edit tree within hours of upload.",
    metrics: ["Auto Proxy Generation", "Multi-Track Sound Sync", "Zero Media Bottlenecks"],
    visual: "ingest",
  },
  {
    id: "02",
    label: "SHAPE",
    badge: "RETENTION HOOKS",
    tagline: "ALGORITHMIC PACING",
    title: "The idea gets sharper.",
    desc: "We engineer first-3-second visual hooks, pattern interrupts, and rhythmic narrative cuts that lock viewers past the 70% retention mark.",
    metrics: ["Pattern Interrupts", "Hook Architecture", "Pacing & Story Flow"],
    visual: "shape",
  },
  {
    id: "03",
    label: "CRAFT",
    badge: "CINEMA FINISHING",
    tagline: "STUDIO AUDIO & 3D MOTION",
    title: "Every frame earns attention.",
    desc: "Custom Hollywood film LUTs, multi-band mastered audio foley, dynamic subtitles, and kinetic motion graphics synchronize into a distinctive visual brand language.",
    metrics: ["Hollywood Color LUTs", "Vocal Clarity Master", "Kinetic Motion Design"],
    visual: "craft",
  },
  {
    id: "04",
    label: "RELEASE",
    badge: "OMNI-CHANNEL MASTER",
    tagline: "48-HOUR FINAL DELIVERABLE",
    title: "Ready for every channel.",
    desc: "Delivered in pristine 4K ProRes and bit-perfect aspect ratios formatted specifically for YouTube widescreen, TikTok, Instagram Reels, and high-CTR paid ads.",
    metrics: ["4K ProRes Master", "Multi-Format Renders", "48h Fast Turnaround"],
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
  const hudRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep] || steps[0];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const section = sectionRef.current;
    const grid = gridRef.current;
    const hud = hudRef.current;
    if (!section || !grid) return;

    const cards = grid.querySelectorAll(".visual-stage-card");
    if (cards.length < 4) return;

    // 4-Corner Launch Positions: [Top-Left, Top-Right, Bottom-Left, Bottom-Right]
    const launchPositions = [
      { x: -180, y: -140, rotation: -15 }, // Card 01: Top-Left
      { x: 180, y: -140, rotation: 15 },   // Card 02: Top-Right
      { x: -180, y: 140, rotation: 12 },   // Card 03: Bottom-Left
      { x: 180, y: 140, rotation: -12 },   // Card 04: Bottom-Right
    ];

    const ctx = gsap.context(() => {
      // Master entrance timeline triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Heading Fade-Up
      const heading = section.querySelector(".benefits-bento-heading");
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // 2. Central HUD Entrance
      if (hud) {
        tl.fromTo(
          hud,
          { opacity: 0, y: 35, scale: 0.95, filter: "blur(8px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.85, ease: "power4.out" },
          "-=0.5"
        );
      }

      // 3. 4-Corner Fly-In with Spring Bounce Lock
      cards.forEach((card, index) => {
        const pos = launchPositions[index] || { x: 0, y: 100, rotation: 0 };
        tl.fromTo(
          card,
          {
            opacity: 0,
            xPercent: pos.x,
            yPercent: pos.y,
            rotation: pos.rotation,
            scale: 0.62,
            filter: "blur(14px)",
          },
          {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.18,
            ease: "back.out(1.55)",
          },
          "-=0.9"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth HUD text transition on step switch
  useEffect(() => {
    if (!hudRef.current) return;
    const hudContent = hudRef.current.querySelector(".hud-dynamic-body");
    if (hudContent) {
      gsap.fromTo(
        hudContent,
        { opacity: 0.2, y: 8, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.35, ease: "power2.out" }
      );
    }
  }, [activeStep]);

  return (
    <section ref={sectionRef} className="benefits-bento-section">
      <div className="container benefits-bento-container">
        
        {/* Section Header */}
        <div className="benefits-bento-heading">
          <span className="section-subtitle">The Production System</span>
          <h2>
            From raw to <span className="combination-font">remarkable.</span>
          </h2>
          <p>
            A high-velocity, four-step post-production pipeline engineered for viral retention and cinematic conversion.
          </p>
        </div>

        {/* IDEA 1: CENTRAL INTERACTIVE HUD / STAGE DISPLAY */}
        <div ref={hudRef} className="benefits-central-hud glass-card">
          <div className="hud-top-telemetry">
            <div className="hud-status-indicator">
              <span className="hud-beacon-pulse" />
              <span className="mono-spec hud-status-text">STAGE [ {current.id} / 04 ] // {current.label} MODULE</span>
            </div>

            {/* Quick Interactive Stage Switcher Tabs */}
            <div className="hud-stage-tabs">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  type="button"
                  className={`hud-tab-btn ${activeStep === idx ? "hud-tab-active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <span className="hud-tab-num">{step.id}</span>
                  <span className="hud-tab-label">{step.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Stage Info Body */}
          <div className="hud-dynamic-body">
            <div className="hud-copy-main">
              <div className="hud-badge-row">
                <span className="hud-pill-accent">{current.badge}</span>
                <span className="mono-spec hud-tagline">{current.tagline}</span>
              </div>
              <h3 className="hud-headline">{current.title}</h3>
              <p className="hud-description">{current.desc}</p>
            </div>

            {/* Metrics Chips */}
            <div className="hud-metrics-list">
              {current.metrics.map((metric) => (
                <div key={metric} className="hud-metric-chip">
                  <i className="fa-solid fa-check" style={{ color: "var(--accent-blue)", fontSize: "0.75rem" }} />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2x2 Dedicated Visual Cinema Monitors (4-Corner Flying Bounce Target) */}
        <div ref={gridRef} className="benefits-bento-grid benefits-visual-only-grid">
          {steps.map((step, index) => {
            const isHovered = activeStep === index;
            return (
              <article
                className={`visual-stage-card glass-card ${isHovered ? "card-stage-active" : ""}`}
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <div className="workflow-card-heading">
                  <div className="workflow-step-badge">
                    <span className="workflow-step-number">{step.id}</span>
                    <span className={`workflow-live-dot ${isHovered ? "dot-active" : ""}`} />
                  </div>
                  <span className="mono-spec">{step.label}</span>
                </div>

                {/* Pure Interactive Visual */}
                <div className="workflow-stage-media-wrapper">
                  <StageVisual type={step.visual} isActive={isHovered} />
                </div>

                {/* Card Footer Chip */}
                <div className="workflow-card-footer-pill">
                  <span className="stage-pill-tag">{step.badge}</span>
                  <span className="stage-pill-arrow">{isHovered ? "● ACTIVE" : "↗ VIEW"}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
