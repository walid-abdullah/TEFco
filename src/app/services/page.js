"use client";

import Link from "next/link";
import FAQSchema from "@/components/FAQSchema";
import { SERVICE_FAQS } from "@/lib/seoData";

const services = [
  {
    number: "01",
    category: "SHORT-FORM",
    title: "Reels & Shorts",
    outcome: "For ideas that need to move fast.",
    description: "Retention-first edits for Reels, TikTok, and YouTube Shorts.",
    deliverables: ["Hooks", "Captions", "Pattern interrupts", "9:16 exports"],
    slug: "reels-shorts",
  },
  {
    number: "02",
    category: "CONVERSATION",
    title: "Podcasts & Interviews",
    outcome: "For conversations worth extending.",
    description: "Multi-camera edits, clean audio, and cutdowns from every episode.",
    deliverables: ["Multi-cam", "Audio cleanup", "Episode packaging", "Clip system"],
    slug: "podcasts",
  },
  {
    number: "03",
    category: "AUTHORITY",
    title: "YouTube & Talking Head",
    outcome: "For trust built one frame at a time.",
    description: "Long-form storytelling for founders, educators, and brands.",
    deliverables: ["Story structure", "B-roll", "Color finishing", "Chapters"],
    slug: "talking-head",
  },
  {
    number: "04",
    category: "PERFORMANCE",
    title: "UGC & Video Ads",
    outcome: "For creative that has something to prove.",
    description: "Direct-response edits built for testing, learning, and conversion.",
    deliverables: ["Hook variations", "Offer callouts", "A/B versions", "Paid-social formats"],
    slug: "ugc-ads",
  },
  {
    number: "05",
    category: "PRODUCT",
    title: "SaaS Motion & Demos",
    outcome: "For products that deserve to feel simple.",
    description: "UI demos, product films, and motion systems that clarify complexity.",
    deliverables: ["UI recreation", "Walkthroughs", "Feature callouts", "Launch films"],
    slug: "saas-motion",
  },
];

const faqs = Object.values(SERVICE_FAQS).flat().slice(0, 6);

export default function ServicesHubPage() {
  return (
    <main className="services-atlas-page">
      <div className="services-atlas-glow" aria-hidden="true" />
      <div className="container services-atlas-container">
        <section className="services-atlas-hero reveal-on-scroll">
          <div className="services-atlas-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="mono-spec">THE EDITLY FOUNDRY / CAPABILITIES</span>
          </div>
          <h1>
            What should your
            <span className="combination-font"> next piece do?</span>
          </h1>
          <p>
            Different goals need different cuts. Choose the outcome, then let
            the craft follow.
          </p>
          <div className="services-atlas-rule">
            <span className="mono-spec">05 CAPABILITIES</span>
            <span className="mono-spec">BUILT AROUND THE OUTCOME</span>
          </div>
        </section>

        <section className="services-atlas-list reveal-on-scroll" aria-label="Our services">
          {services.map((service) => (
            <article className="services-atlas-row" key={service.number}>
              <div className="services-atlas-row-main">
                <span className="services-atlas-number">{service.number}</span>
                <div className="services-atlas-title">
                  <span className="mono-spec">{service.category}</span>
                  <h2>{service.title}</h2>
                </div>
                <p>{service.outcome}</p>
                <span className="services-atlas-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="services-atlas-row-detail">
                <p>{service.description}</p>
                <div className="services-atlas-deliverables">
                  {service.deliverables.map((deliverable) => (
                    <span key={deliverable}>{deliverable}</span>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`}>
                  Explore service <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="services-atlas-statement reveal-on-scroll">
          <span className="services-atlas-statement-mark" aria-hidden="true">“</span>
          <p>
            The best service is not more output. It is the right piece, made
            clear enough to do its job.
          </p>
          <span className="mono-spec">THE FOUNDRY PRINCIPLE / 01</span>
        </section>

        <section className="services-atlas-faq reveal-on-scroll">
          <div className="workflow-section-heading">
            <span className="section-subtitle">Before we begin</span>
            <h2>Useful answers.<span className="combination-font"> No sales theatre.</span></h2>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq, index) => (
              <details className="about-faq-item" key={faq.question}>
                <summary><span className="mono-spec">0{index + 1}</span><span>{faq.question}</span><span className="about-faq-plus" aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="services-atlas-contact reveal-on-scroll">
          <div>
            <span className="section-subtitle">Start with the outcome</span>
            <h2>Bring the raw.<span className="combination-font"> We&apos;ll find the signal.</span></h2>
          </div>
          <div className="services-atlas-contact-links">
            <Link href="/book-a-call">Start a project <span aria-hidden="true">↗</span></Link>
            <a href="mailto:theeditlyfoundry@gmail.com">Email the studio <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
      <FAQSchema faqs={faqs} />
    </main>
  );
}
