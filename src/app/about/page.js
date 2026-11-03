"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkflowExplainerVideo from "@/components/WorkflowExplainerVideo";
import LogoMarquee from "@/components/LogoMarquee";
import { useClientLogos } from "@/lib/useClientLogos";
import { client } from "@/sanity/client";

const pipelineSteps = [
  {
    step: "01",
    label: "INGEST",
    title: "We make the raw material usable.",
    desc: "Footage, audio, notes, references, and brand rules arrive in one clean workspace. Nothing gets lost between a camera card and the edit.",
  },
  {
    step: "02",
    label: "SHAPE",
    title: "We find the story before the style.",
    desc: "Editors and strategists identify the strongest premise, hook, rhythm, and structure before adding motion or polish.",
  },
  {
    step: "03",
    label: "CRAFT",
    title: "We build attention with intention.",
    desc: "Sound design, captions, pacing, color, and motion are composed as one system—never as a pile of disconnected effects.",
  },
  {
    step: "04",
    label: "RELEASE",
    title: "We deliver a publish-ready asset.",
    desc: "A senior review catches the details, then the final export lands in the format, aspect ratio, and channel your team needs.",
  },
];

const principles = [
  {
    index: "01",
    title: "Clarity over clutter",
    desc: "The edit should make the idea easier to understand, not compete with it. Every cut, title, and sound has a job.",
  },
  {
    index: "02",
    title: "Retention is a design problem",
    desc: "We use pacing, contrast, structure, and visual hierarchy to earn the next second without resorting to noise.",
  },
  {
    index: "03",
    title: "Systems create consistency",
    desc: "A repeatable creative operating system lets your team publish more without lowering the bar.",
  },
];

const capabilities = [
  "Founder-led content",
  "Podcast and interview edits",
  "Short-form repurposing",
  "Motion graphics systems",
  "Brand and campaign films",
  "Social-first post production",
];

const globalHubs = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    desc: "Production, editing, and finishing",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    desc: "Strategy and client partnerships",
  },
  {
    city: "New York",
    country: "United States",
    desc: "Growth and media relationships",
  },
];

const team = [
  {
    initials: "MR",
    name: "Maya Rahman",
    role: "Lead Editor",
    focus: "Story, pacing, and long-form structure",
    index: "01",
  },
  {
    initials: "AH",
    name: "Arif Hasan",
    role: "Motion Designer",
    focus: "Motion systems, titles, and product films",
    index: "02",
  },
  {
    initials: "NA",
    name: "Nadia Ahmed",
    role: "Creative Producer",
    focus: "Briefs, reviews, and production rhythm",
    index: "03",
  },
  {
    initials: "SK",
    name: "Sami Karim",
    role: "Finishing Artist",
    focus: "Sound, color, and final delivery",
    index: "04",
  },
  {
    initials: "TF",
    name: "Tariq Faisal",
    role: "Editor",
    focus: "YouTube, podcasts, and founder-led content",
    index: "05",
  },
  {
    initials: "LM",
    name: "Lina Mahmud",
    role: "Art Director",
    focus: "Visual language, references, and campaign systems",
    index: "06",
  },
  {
    initials: "RJ",
    name: "Rafi Javed",
    role: "Content Operator",
    focus: "Repurposing, publishing, and delivery systems",
    index: "07",
  },
  {
    initials: "PS",
    name: "Priya Sen",
    role: "Sound Designer",
    focus: "Dialogue, music, and sonic identity",
    index: "08",
  },
];

const aboutFaqs = [
  {
    question: "What does The Editly Foundry do?",
    answer:
      "We are a video editing and post-production studio helping founders, SaaS teams, creators, and brands turn raw footage into clear, high-retention content.",
  },
  {
    question: "What type of video content do you edit?",
    answer:
      "Our team edits short-form social videos, podcasts, YouTube films, founder-led content, performance ads, product demos, and motion graphics.",
  },
  {
    question: "Where is The Editly Foundry based?",
    answer:
      "We work remote-first across Dhaka, Dubai, New York, and wherever our clients are building.",
  },
];

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About The Editly Foundry",
      description:
        "Learn how The Editly Foundry helps ambitious teams turn raw footage into strategic, publish-ready video content.",
      url: "/about",
      mainEntity: {
        "@type": "Organization",
        name: "The Editly Foundry Co.",
        description:
          "A remote-first video editing and post-production studio for founders, creators, SaaS teams, and high-growth brands.",
        knowsAbout: [
          "Video editing",
          "Short-form video",
          "Podcast editing",
          "Motion graphics",
          "Video post-production",
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function AboutPage() {
  const logos = useClientLogos();
  const [founderVideoUrl, setFounderVideoUrl] = useState(process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || "");

  useEffect(() => {
    if (founderVideoUrl) return;
    client.fetch(`*[_type == "homepage"][0].founderVideoUrl`).then((url) => url && setFounderVideoUrl(url)).catch(() => {});
  }, [founderVideoUrl]);

  return (
    <main className="sg-page">
      <section className="sg-phero sg-ab-hero">
        <div className="container">
          <span className="section-subtitle">About the studio</span>
          <h1>We turn raw ideas into <span className="combination-font">finished momentum.</span></h1>
          <div className="sg-phero-foot">
            <p>The Editly Foundry is a post-production studio for people building something worth paying attention to. We combine editorial judgment, design discipline and a dependable production system so teams can publish with confidence.</p>
            <div className="sg-phero-actions">
              <Link href="/work" className="btn btn-primary">See the work <span aria-hidden="true">→</span></Link>
              <Link href="/book-a-call" className="sg-link">Start a conversation <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-ab-names band-ink on-ink" aria-label="Selected clients">
        <LogoMarquee logos={logos} />
      </section>

      <section className="sg-band">
        <div className="container">
          <span className="section-subtitle">Our point of view</span>
          <p className="sg-manifesto">Most teams do not need more footage. They need a clearer path from what they know to what their audience can <span className="combination-font">feel, understand and remember.</span></p>
          <div className="sg-ab-metrics">
            <div data-rise><strong>01</strong><span>creative partner, not a hand-off desk</span></div>
            <div data-rise><strong>24–48h</strong><span>turnaround for recurring edits</span></div>
            <div data-rise><strong>1 → ∞</strong><span>one source conversation, a whole content system</span></div>
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">What we believe</span>
            <h2>More than editing.<br /><span className="combination-font">Less friction.</span></h2>
            <p className="sg-split-note">From the first rough recording to the final platform export, our job is to make the creative process feel considered, fast and repeatable.</p>
          </div>
          <div className="sg-lines">
            {principles.map((principle) => (
              <div key={principle.index} data-rise><h3>{principle.title}</h3><p>{principle.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band band-ink on-ink sg-band-reveal">
        <div className="container">
          <div className="home-foundry-section-head">
            <div>
              <span className="section-subtitle">How we operate</span>
              <h2>A calm process for<br /><span className="combination-font">ambitious output.</span></h2>
            </div>
            <Link href="/workflow" className="sg-link">See the full workflow <span aria-hidden="true">→</span></Link>
          </div>
          <div className="sg-columns is-four">
            {pipelineSteps.map((step) => (
              <article key={step.step} data-rise>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-ab-founder">
        <div className="sg-ab-founder-img">
          <Image src="/Picture/square.png" alt="Walid Abdullah, founder of The Editly Foundry" loading="lazy" width="1000" height="1000" />
        </div>
        <div className="sg-ab-founder-copy">
          <span className="section-subtitle">The founder</span>
          <h2>Built for the space between <span className="combination-font">vision and velocity.</span></h2>
          <p>Walid founded The Editly Foundry around a simple observation: ambitious teams often have the ideas and the footage, but not the production rhythm to turn both into consistent momentum.</p>
          <p>Today, the studio brings together editors, motion designers and creative operators who care about the same things: sharp thinking, clean craft and work that earns its place in the feed.</p>
          <div className="sg-ab-sign">
            <strong>Walid Abdullah</strong>
            <span>Founder &amp; Executive Producer</span>
          </div>
          <div className="sg-cn-socials is-dark">
            <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        </div>
      </section>

      {founderVideoUrl && (
        <section className="sg-band sg-ab-video">
          <div className="container">
            <div className="sg-ab-video-head">
              <span className="section-subtitle">Founder note</span>
              <h2>The thinking behind <span className="combination-font">the work.</span></h2>
            </div>
            <WorkflowExplainerVideo
              videoUrl={founderVideoUrl}
              posterUrl="/Picture/square.png"
              ariaLabel="Walid Abdullah explains the Editly Foundry system"
            />
          </div>
        </section>
      )}

      <section className="sg-band">
        <div className="container">
          <div className="home-foundry-section-head">
            <div>
              <span className="section-subtitle">The team</span>
              <h2>Small team.<br /><span className="combination-font">Serious craft.</span></h2>
            </div>
          </div>
          <div className="sg-ab-team">
            {team.map((member) => (
              <article key={member.name} data-rise>
                <div className="sg-ab-initials" aria-hidden="true">{member.initials}</div>
                <h3>{member.name}</h3>
                <em>{member.role}</em>
                <p>{member.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band band-iris on-iris sg-band-reveal">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">What we cover</span>
            <h2>One creative partner for <span className="combination-font">the whole cut.</span></h2>
          </div>
          <ul className="sg-checklist">
            {capabilities.map((capability) => <li key={capability} data-rise>{capability}</li>)}
          </ul>
        </div>
      </section>

      <section className="sg-band">
        <div className="container">
          <span className="section-subtitle">Where we work</span>
          <h2>Local attention. <span className="combination-font">Global reach.</span></h2>
          <div className="sg-columns">
            {globalHubs.map((hub) => (
              <article key={hub.city} data-rise>
                <span>{hub.country}</span>
                <h3>{hub.city}</h3>
                <p>{hub.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-faq">
        <div className="container sg-faq-grid">
          <div>
            <span className="section-subtitle">The useful details</span>
            <h2>A few answers<br /><span className="combination-font">before we start.</span></h2>
          </div>
          <div className="sg-faq-list">
            {aboutFaqs.map((faq) => (
              <details key={faq.question}>
                <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
    </main>
  );
}
