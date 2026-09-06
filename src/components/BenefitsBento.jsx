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
  const textGroupRef = useRef(null);
  const cardDeckRef = useRef(null);
  const trackerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const section = sectionRef.current;
    const textGroup = textGroupRef.current;
    const cardDeck = cardDeckRef.current;
    const tracker = trackerRef.current;
    if (!section || !textGroup || !cardDeck) return;

    const textItems = textGroup.querySelectorAll(".pinned-text-pane");
    const cardItems = cardDeck.querySelectorAll(".pinned-deck-card");
    if (textItems.length < 4 || cardItems.length < 4) return;

    const mm = gsap.matchMedia();

    // DESKTOP: Snapped Discrete Stage Deck (Never stuck half-way, 1 step per scroll)
    mm.add("(min-width: 961px)", () => {
      // 1. Initial State
      gsap.set(textItems, { opacity: 0, y: 24, filter: "blur(5px)", pointerEvents: "none" });
      gsap.set(textItems[0], { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" });

      gsap.set(cardItems, { yPercent: 100, zIndex: (i) => i + 1 });
      gsap.set(cardItems[0], { yPercent: 0, zIndex: 1 });

      // 2. Master Timeline with Mandatory Step Snapping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2100", // Generous track so 1 scroll moves exactly 1 card
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: [0, 1 / 3, 2 / 3, 1], // Snaps cleanly to each stage, never stopping midway
            duration: { min: 0.2, max: 0.45 },
            delay: 0.05,
            ease: "power2.out",
          },
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const currentIdx = Math.min(3, Math.round(p * 3));
            setActiveStepIndex(currentIdx);

            if (tracker) {
              const btns = tracker.querySelectorAll(".industrial-tracker-btn");
              btns.forEach((btn, bIdx) => {
                if (bIdx === currentIdx) {
                  btn.classList.add("active");
                  btn.setAttribute("aria-selected", "true");
                } else {
                  btn.classList.remove("active");
                  btn.setAttribute("aria-selected", "false");
                }
              });
            }
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger;

      // 3. Timeline with generous rest zones:
      // t = 0.0 to 0.15: Rest at Stage 0
      // t = 0.15 to 0.85: Transition Stage 0 -> 1
      // t = 0.85 to 1.15: Rest at Stage 1
      // t = 1.15 to 1.85: Transition Stage 1 -> 2
      // t = 1.85 to 2.15: Rest at Stage 2
      // t = 2.15 to 2.85: Transition Stage 2 -> 3
      // t = 2.85 to 3.0: Rest at Stage 3

      // Transition 0 -> 1
      tl.to(textItems[0], { opacity: 0, y: -20, filter: "blur(5px)", pointerEvents: "none", ease: "power2.inOut", duration: 0.35 }, 0.2)
        .fromTo(textItems[1], { opacity: 0, y: 20, filter: "blur(5px)", pointerEvents: "none" }, { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", ease: "power2.out", duration: 0.4 }, 0.45)
        .fromTo(cardItems[1], { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 0.7 }, 0.2)
        .to(cardItems[0], { scale: 0.95, opacity: 0.35, ease: "power2.inOut", duration: 0.7 }, 0.2);

      // Transition 1 -> 2
      tl.to(textItems[1], { opacity: 0, y: -20, filter: "blur(5px)", pointerEvents: "none", ease: "power2.inOut", duration: 0.35 }, 1.2)
        .fromTo(textItems[2], { opacity: 0, y: 20, filter: "blur(5px)", pointerEvents: "none" }, { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", ease: "power2.out", duration: 0.4 }, 1.45)
        .fromTo(cardItems[2], { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 0.7 }, 1.2)
        .to(cardItems[1], { scale: 0.95, opacity: 0.35, ease: "power2.inOut", duration: 0.7 }, 1.2);

      // Transition 2 -> 3
      tl.to(textItems[2], { opacity: 0, y: -20, filter: "blur(5px)", pointerEvents: "none", ease: "power2.inOut", duration: 0.35 }, 2.2)
        .fromTo(textItems[3], { opacity: 0, y: 20, filter: "blur(5px)", pointerEvents: "none" }, { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto", ease: "power2.out", duration: 0.4 }, 2.45)
        .fromTo(cardItems[3], { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 0.7 }, 2.2)
        .to(cardItems[2], { scale: 0.95, opacity: 0.35, ease: "power2.inOut", duration: 0.7 }, 2.2);

      // Buffer settle at end
      tl.to({}, { duration: 0.2 }, 3.0);
    });

    // MOBILE / TABLET (< 961px): Non-pinned Interactive Tabs
    mm.add("(max-width: 960px)", () => {
      textItems.forEach((item, idx) => {
        gsap.set(item, {
          opacity: idx === 0 ? 1 : 0,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: idx === 0 ? "auto" : "none",
        });
      });
      cardItems.forEach((card, idx) => {
        gsap.set(card, {
          yPercent: idx === 0 ? 0 : 100,
          zIndex: idx === 0 ? 2 : 1,
          opacity: idx === 0 ? 1 : 0,
        });
      });
    });

    return () => mm.revert();
  }, []);

  const handleStepClick = (idx) => {
    setActiveStepIndex(idx);
    const st = scrollTriggerRef.current;
    if (st && window.innerWidth > 960) {
      const targetProgress = idx / 3;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else {
      // Mobile direct toggle
      const textGroup = textGroupRef.current;
      const cardDeck = cardDeckRef.current;
      if (textGroup && cardDeck) {
        const textItems = textGroup.querySelectorAll(".pinned-text-pane");
        const cardItems = cardDeck.querySelectorAll(".pinned-deck-card");
        textItems.forEach((item, i) => {
          gsap.to(item, { opacity: i === idx ? 1 : 0, duration: 0.3 });
          item.style.pointerEvents = i === idx ? "auto" : "none";
        });
        cardItems.forEach((card, i) => {
          gsap.to(card, {
            yPercent: i === idx ? 0 : 100,
            opacity: i === idx ? 1 : 0,
            duration: 0.35,
          });
        });
      }
    }
  };

  return (
    <section ref={sectionRef} className="benefits-pinned-section">
      <div className="container benefits-pinned-container">
        
        {/* Top Header Row with Industrial Step Navigator */}
        <div className="benefits-pinned-header">
          <div className="benefits-pinned-header-left">
            <span className="section-subtitle">The Production Pipeline</span>
            <h2 className="benefits-pinned-main-title">
              From raw to <span className="combination-font">remarkable.</span>
            </h2>
          </div>

          {/* Industrial Step Tracker (12px container, 8px inner buttons) */}
          <div
            ref={trackerRef}
            className="benefits-industrial-tracker"
            role="tablist"
            aria-label="Pipeline Stages"
          >
            {steps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={activeStepIndex === idx}
                className={`industrial-tracker-btn ${activeStepIndex === idx ? "active" : ""}`}
                onClick={() => handleStepClick(idx)}
              >
                <span className="tracker-num">{step.id}</span>
                <span className="tracker-label">{step.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Master Pinned Viewport Stage */}
        <div className="benefits-pinned-stage">
          
          {/* LEFT COLUMN: Clean Narrative (Outside the Card) */}
          <div className="pinned-narrative-col">
            <div ref={textGroupRef} className="pinned-text-panes-wrapper">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className={`pinned-text-pane ${activeStepIndex === idx ? "is-active" : ""}`}
                  aria-hidden={activeStepIndex !== idx}
                >
                  <div className="pinned-meta-row">
                    <span className="pinned-stage-badge">
                      STAGE {step.id}{" // "}{step.badge}
                    </span>
                    <span className="mono-spec pinned-tagline">{step.tagline}</span>
                  </div>

                  <h3 className="pinned-step-headline">{step.title}</h3>
                  <p className="pinned-step-description">{step.desc}</p>

                  <div className="pinned-chips-grid">
                    {step.chips.map((chip) => (
                      <div key={chip} className="pinned-chip">
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        <span>{chip}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pinned-progress-indicator">
                    <span className="progress-step-text">STEP 0{idx + 1} OF 04</span>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${((idx + 1) / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Large, Clean Cinema Cards (Each smoothly covers previous) */}
          <div className="pinned-visual-col">
            <div className="pinned-deck-frame">
              <div ref={cardDeckRef} className="pinned-deck-cards-wrapper">
                {steps.map((step) => (
                  <article
                    key={step.id}
                    className="pinned-deck-card glass-card"
                  >
                    <div className="deck-card-cinema-body">
                      <StageVisual type={step.visual} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
