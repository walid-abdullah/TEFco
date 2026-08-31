"use client";

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export const CHAPTER_DATA = [
  {
    id: "01",
    tag: "01 / RECORD",
    title: "We capture conversations that matter.",
    description: "Every standout brand begins with pure, uncompressed narrative capture. High-fidelity acoustic clarity meets bespoke visual direction.",
    cta: "Explore Recording",
    link: "/services/podcasts"
  },
  {
    id: "02",
    tag: "02 / TRANSFORM",
    title: "Raw ideas become creative possibilities.",
    description: "Through our proprietary ingest architecture, raw footage is cataloged, organized, and prepared for high-velocity post-production.",
    cta: "View Our Process",
    link: "/workflow"
  },
  {
    id: "03",
    tag: "03 / CAPTURE",
    title: "Where visuals are built with intention.",
    description: "Cinema-grade optics, calibrated lighting, and multi-cam precision tailored for executive talking heads and commercial reels.",
    cta: "See Camera Work",
    link: "/services/talking-head"
  },
  {
    id: "04",
    tag: "04 / CREATE",
    title: "One source. Infinite content outputs.",
    description: "Repurpose long-form discussions into viral short-form micro-hooks, animated SaaS teasers, and high-converting performance ads.",
    cta: "Repurposing Engine",
    link: "/services/reels-shorts"
  },
  {
    id: "05",
    tag: "05 / REFINE",
    title: "Sculpted in high-end post-production.",
    description: "Industry-grade DaVinci color grading, spatial sound design, and broadcast-ready typography finishing.",
    cta: "Post-Production Suite",
    link: "/services"
  },
  {
    id: "06",
    tag: "06 / UNIVERSE",
    title: "The Content Universe.",
    description: "A boundless ecosystem of interconnected media assets engineered to scale your audience across YouTube, LinkedIn, and Instagram.",
    cta: "Explore Universe",
    link: "/work"
  },
  {
    id: "07",
    tag: "07 / THE FOUNDRY",
    title: "The Editing Foundry.",
    description: "Our dedicated creative engine delivering turnaround in under 48 hours without compromising editorial excellence.",
    cta: "Our Pricing",
    link: "/pricing"
  },
  {
    id: "08",
    tag: "08 / EDITING ROOM",
    title: "Master Suite Finishing.",
    description: "Precision frame-by-frame trimming, custom sound beds, and dynamic motion graphics designed to retain viewer attention.",
    cta: "Case Studies",
    link: "/case-studies"
  }
];

export default function CinematicChapters() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <div className="relative w-full text-white pointer-events-auto">
      {CHAPTER_DATA.map((ch, idx) => (
        <section
          key={ch.id}
          id={`chapter-${idx}`}
          className="relative w-full min-h-screen flex items-center justify-start px-6 md:px-16 lg:px-24 py-24 select-none"
        >
          {/* Chapter Content Container: 60/40 left-biased composition leaving right 40% open for 3D Sculpture */}
          <div className="max-w-xl z-10 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest text-sky-300 uppercase">
                {ch.tag}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {ch.title}
            </h1>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
              {ch.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={ch.link}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                {ch.cta} →
              </a>
              <a
                href="/book-a-call"
                className="px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all backdrop-blur-md"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
