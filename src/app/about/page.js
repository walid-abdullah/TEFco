"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CinematicFounderVideo from "@/components/CinematicFounderVideo";

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

const clientLogos = [
  "NORTHSTAR",
  "LUMA",
  "ORBIT",
  "KINETIC",
  "MOMENT",
  "ARC",
  "VANTA",
  "FIELDNOTE",
  "NOVA",
  "MAKERHOUSE",
];

export default function AboutPage() {
  return (
    <main className="about-page-wrapper" style={{ paddingTop: "112px", paddingBottom: "96px" }}>
      <div className="about-page-grid" aria-hidden="true" />
      <div className="container about-container">
        <section className="about-hero reveal-on-scroll">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="mono-spec">THE EDITLY FOUNDRY / ABOUT</span>
          </div>
          <h1 className="about-hero-title">
            <span>We turn raw ideas into</span>
            <br />
            <span className="combination-font">finished momentum.</span>
          </h1>
          <p className="about-hero-copy">
            The Editly Foundry is a post-production studio for people building
            something worth paying attention to. We combine editorial judgment,
            design discipline, and a dependable production system to help teams
            publish with confidence.
          </p>
          <div className="about-hero-actions">
            <Link href="/work" className="btn btn-primary">
              <span>See the work</span>
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </Link>
            <Link href="/book-a-call" className="about-text-link">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="about-signal" aria-label="Studio status">
            <span className="about-signal-dot" />
            <span className="mono-spec">BUILDING / ALWAYS ON</span>
            <span className="about-signal-rule" />
            <span className="mono-spec">REMOTE-FIRST / GLOBAL</span>
          </div>
        </section>

        <section className="about-client-logos reveal-on-scroll" aria-label="Selected clients">
          <div className="about-client-logos-heading">
            <span className="section-subtitle">Selected collaborators</span>
            <span className="mono-spec">TRUSTED IN THE ROOM</span>
          </div>
          <div className="about-client-marquee">
            <div className="about-client-row about-client-row-forward">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <span className="about-client-logo" key={`forward-${logo}-${index}`}>
                  {logo}
                </span>
              ))}
            </div>
            <div className="about-client-row about-client-row-reverse">
              {[...clientLogos.slice(5), ...clientLogos.slice(0, 5), ...clientLogos.slice(5), ...clientLogos.slice(0, 5)].map((logo, index) => (
                <span className="about-client-logo" key={`reverse-${logo}-${index}`}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="about-metrics reveal-on-scroll" aria-label="Studio overview">
          <div>
            <strong>01</strong>
            <span>creative partner, not a hand-off desk</span>
          </div>
          <div>
            <strong>48h</strong>
            <span>target turnaround for recurring edits</span>
          </div>
          <div>
            <strong>01 → ∞</strong>
            <span>source conversation into a content system</span>
          </div>
        </section>

        <section className="about-intro-grid">
          <div className="about-section-heading reveal-on-scroll">
            <span className="section-subtitle">A studio with a point of view</span>
            <h2>
              More than editing.
              <span className="combination-font"> Less friction.</span>
            </h2>
          </div>
          <div className="about-intro-copy reveal-on-scroll">
            <p>
              Most teams do not need more footage. They need a clearer path
              from what they know to what their audience can feel, understand,
              and remember.
            </p>
            <p>
              We sit inside that gap. From the first rough recording to the
              final platform export, our job is to make the creative process
              feel considered, fast, and repeatable.
            </p>
          </div>
        </section>

        <section className="about-principles-grid">
          {principles.map((principle, index) => (
            <article
              className="about-principle-card glass-card reveal-on-scroll"
              key={principle.index}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="mono-spec">{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.desc}</p>
            </article>
          ))}
        </section>

        <section className="about-process glass-card reveal-on-scroll">
          <div className="about-process-heading">
            <div>
              <span className="section-subtitle">The operating system</span>
              <h2>
                A calm process for
                <span className="combination-font"> ambitious output.</span>
              </h2>
            </div>
            <p>
              One team, one source of truth, and a visible path from raw
              material to final delivery.
            </p>
          </div>
          <div className="about-process-list">
            {pipelineSteps.map((step, index) => (
              <article className="about-process-step" key={step.step}>
                <div className="about-process-number">
                  <span>{step.step}</span>
                  {index < pipelineSteps.length - 1 && <i aria-hidden="true" />}
                </div>
                <div>
                  <span className="mono-spec">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-founder-video-section reveal-on-scroll">
          <div className="about-section-heading">
            <span className="section-subtitle">Founder note</span>
            <h2>
              The thinking behind
              <span className="combination-font"> the work.</span>
            </h2>
            <p>
              Walid shares the editorial principles, retention thinking, and
              production rhythm behind The Editly Foundry.
            </p>
          </div>
          <CinematicFounderVideo
            videoUrl={process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || ""}
            posterUrl="/Picture/square.png"
            title="Walid Abdullah explains the Editly Foundry system"
          />
        </section>

        <section className="about-founder-grid">
          <div className="about-founder-image reveal-on-scroll">
            <Image
              src="/Picture/square.png"
              alt="Walid Abdullah, founder of The Editly Foundry"
              loading="lazy"
              width="720"
              height="720"
            />
            <div className="about-image-caption mono-spec">
              <span>WALID ABDULLAH</span>
              <span>FOUNDER / EXECUTIVE PRODUCER</span>
            </div>
          </div>
          <div className="about-founder-copy reveal-on-scroll">
            <span className="section-subtitle">The person behind the system</span>
            <h2>
              Built for the space between
              <span className="combination-font"> vision and velocity.</span>
            </h2>
            <p>
              Walid founded The Editly Foundry around a simple observation:
              ambitious teams often have the ideas and the footage, but not
              the production rhythm to turn both into consistent momentum.
            </p>
            <p>
              Today, the studio brings together editors, motion designers, and
              creative operators who care about the same things—sharp thinking,
              clean craft, and work that earns its place in the feed.
            </p>
            <div className="about-founder-links">
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noreferrer">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="about-team-heading reveal-on-scroll">
            <div>
              <span className="section-subtitle">The people in the room</span>
              <h2>
                Small team.
                <span className="combination-font"> Serious craft.</span>
              </h2>
            </div>
            <p>
              A focused crew of editors, designers, and operators. The roster
              grows around the work, never between you and it.
            </p>
          </div>
          <div className="about-team-viewport">
            <div className="about-team-track">
              {[...team, ...team].map((member, index) => (
                <article
                  className="about-team-card glass-card reveal-on-scroll"
                  key={`${member.name}-${index}`}
                  aria-hidden={index >= team.length}
                  style={{ transitionDelay: `${(index % team.length) * 70}ms` }}
                >
                  <div className="about-team-card-top">
                    <span className="mono-spec">{member.index} / STUDIO</span>
                    <span className="about-team-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="about-team-avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <div className="about-team-content">
                    <h3>{member.name}</h3>
                    <span className="about-team-role">{member.role}</span>
                    <p>{member.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-capabilities">
          <div className="about-section-heading reveal-on-scroll">
            <span className="section-subtitle">What we make possible</span>
            <h2>
              One creative partner for
              <span className="combination-font"> the whole cut.</span>
            </h2>
          </div>
          <div className="about-capability-list reveal-on-scroll">
            {capabilities.map((capability, index) => (
              <div className="about-capability" key={capability}>
                <span className="mono-spec">0{index + 1}</span>
                <span>{capability}</span>
                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-presence">
          <div className="about-section-heading reveal-on-scroll">
            <span className="section-subtitle">Designed to work anywhere</span>
            <h2>
              Local attention.
              <span className="combination-font"> Global reach.</span>
            </h2>
          </div>
          <div className="about-hubs-grid">
            {globalHubs.map((hub, index) => (
              <article className="about-hub glass-card reveal-on-scroll" key={hub.city}>
                <span className="mono-spec">0{index + 1} / HUB</span>
                <h3>{hub.city}</h3>
                <p>{hub.country}</p>
                <span>{hub.desc}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-faq reveal-on-scroll">
          <div className="about-section-heading">
            <span className="section-subtitle">The useful details</span>
            <h2>
              A few answers
              <span className="combination-font"> before we start.</span>
            </h2>
          </div>
          <div className="about-faq-list">
            {aboutFaqs.map((faq, index) => (
              <details className="about-faq-item" key={faq.question}>
                <summary>
                  <span className="mono-spec">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="about-faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="about-cta reveal-on-scroll">
          <span className="section-subtitle">Next frame</span>
          <h2>
            Bring us the raw.
            <span className="combination-font"> We&apos;ll find the signal.</span>
          </h2>
          <p>
            Tell us what you are building, where the bottleneck is, and what
            needs to move next.
          </p>
          <div className="about-hero-actions">
            <Link href="/book-a-call" className="btn btn-primary">
              <span>Book a strategy call</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link href="/services" className="about-text-link">
              Explore capabilities <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
    </main>
  );
}
