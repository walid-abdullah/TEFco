"use client";

import Link from "next/link";
import WorkflowExplainerVideo from "@/components/WorkflowExplainerVideo";

export default function ServiceLandingPage({ service }) {
  return (
    <main className={`service-detail-page service-detail-page--${service.mediaMode || "landscape"}`}>
      <div className="service-detail-glow" aria-hidden="true" />
      <div className="container service-detail-container">
        <section className="service-detail-hero reveal-on-scroll">
          <div className="service-detail-hero-copy">
            <div className="service-detail-eyebrow">
              <span className="about-eyebrow-line" />
              <span className="mono-spec">THE EDITLY FOUNDRY / {service.category}</span>
            </div>
            <span className="service-detail-number">{service.number}</span>
            <h1>{service.title}</h1>
            <p className="service-detail-hero-statement">{service.statement}</p>
            <p className="service-detail-hero-description">{service.description}</p>
            <div className="service-detail-actions">
              <Link href={`/book-a-call?service=${encodeURIComponent(service.title)}`} className="btn btn-primary">
                Start a project <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/work" className="about-text-link">See the work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="service-detail-signal" aria-hidden="true">
            <span className="service-detail-signal-index">{service.number}</span>
            <span className="service-detail-signal-line service-detail-signal-line-one" />
            <span className="service-detail-signal-line service-detail-signal-line-two" />
            <span className="service-detail-signal-dot" />
            <span className="service-detail-signal-label">{service.signal}</span>
          </div>
        </section>

        <section className="service-detail-video-section reveal-on-scroll">
          <div className="service-detail-video-heading">
            <span className="section-subtitle">Inside the service</span>
            <span className="mono-spec">INTRO / {service.number}</span>
          </div>
          <WorkflowExplainerVideo
            videoUrl={service.videoUrl}
            posterUrl={service.videoPoster}
            ariaLabel={`${service.title} introduction`}
            aspectRatio={service.videoAspect || "16 / 9"}
          />
        </section>

        <section className="service-detail-stats reveal-on-scroll">
          {service.stats.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>

        <section className="service-detail-portfolio reveal-on-scroll">
          <div className="service-detail-section-heading">
            <span className="section-subtitle">Selected work</span>
            <h2>Proof in the <span className="combination-font">details.</span></h2>
          </div>
          <div className="service-detail-portfolio-grid">
            {service.portfolio.map((item, index) => (
              <article className={`service-detail-portfolio-card portfolio-card-${index + 1}`} key={item.title}>
                <div
                  className="service-detail-portfolio-art"
                  style={{ "--portfolio-ratio": item.ratio, backgroundImage: `url(${item.image})` }}
                  data-portfolio-ratio={(item.ratio || "16 / 9").replace(/\s/g, "")}
                >
                  <span className="mono-spec">{item.format}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="service-detail-portfolio-meta">
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-framework reveal-on-scroll">
          <div className="service-detail-section-heading">
            <span className="section-subtitle">The approach</span>
            <h2>{service.frameworkTitle}</h2>
          </div>
          <div className="service-detail-framework-list">
            {service.framework.map(([number, title, text]) => (
              <article key={number}>
                <span className="mono-spec">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-deliverables reveal-on-scroll">
          <div className="service-detail-section-heading">
            <span className="section-subtitle">What leaves the studio</span>
            <h2>Built to be used.<span className="combination-font"> Ready to move.</span></h2>
          </div>
          <div className="service-detail-deliverable-list">
            {service.deliverables.map((item, index) => (
              <div key={item}><span className="mono-spec">0{index + 1}</span><span>{item}</span><span aria-hidden="true">↗</span></div>
            ))}
          </div>
        </section>

        <section className="service-detail-process reveal-on-scroll">
          <span className="section-subtitle">A visible production rhythm</span>
          <div className="service-detail-process-line">
            {service.process.map(([number, title]) => (
              <div key={number}><span>{number}</span><strong>{title}</strong></div>
            ))}
          </div>
        </section>

        <section className="service-detail-faq reveal-on-scroll">
          <div className="service-detail-section-heading">
            <span className="section-subtitle">Before we begin</span>
            <h2>Good questions.<span className="combination-font"> Clear answers.</span></h2>
          </div>
          <div className="about-faq-list">
            {service.faqs.map(([question, answer], index) => (
              <details className="about-faq-item" key={question}>
                <summary><span className="mono-spec">0{index + 1}</span><span>{question}</span><span className="about-faq-plus" aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-detail-contact reveal-on-scroll">
          <span className="section-subtitle">Next frame</span>
          <h2>Bring us the raw.<span className="combination-font"> We&apos;ll find the signal.</span></h2>
          <p>{service.cta}</p>
          <Link href={`/book-a-call?service=${encodeURIComponent(service.title)}`} className="btn btn-primary">
            Book a strategy call <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
