"use client";

import Link from "next/link";
import ServicePricing from "@/components/ServicePricing";
import WorkflowExplainerVideo from "@/components/WorkflowExplainerVideo";

const CATEGORY_LABELS = (text = "") => text.charAt(0) + text.slice(1).toLowerCase();

export default function ServiceLandingPage({ service }) {
  const isPortrait = service.mediaMode === "portrait";
  const bookingHref = `/book-a-call?service=${encodeURIComponent(service.serviceName)}`;

  return (
    <main className="sg-page">
      <section className="sg-phero hero-ink on-ink">
        <div className="container">
          <span className="section-subtitle">{CATEGORY_LABELS(service.category)}</span>
          <h1>{service.title}</h1>
          <div className="sg-phero-foot">
            <div>
              <p className="sg-phero-lead">{service.statement}</p>
              <p>{service.description}</p>
            </div>
            <div className="sg-phero-actions">
              <Link href={bookingHref} className="btn btn-primary">Start a project <span aria-hidden="true">→</span></Link>
              <Link href="/work" className="sg-link">See the work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="sg-stat-row">
            {service.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      {service.videoUrl && <section className={`sg-band sg-sv-video${isPortrait ? " is-portrait" : ""}`}>
        <div className="container">
          <div className="sg-sv-video-head">
            <span className="section-subtitle">Inside the service</span>
            <h2>See how we <span className="combination-font">approach it.</span></h2>
          </div>
          <WorkflowExplainerVideo
            videoUrl={service.videoUrl}
            posterUrl={service.videoPoster}
            ariaLabel={`${service.title} introduction`}
            aspectRatio={service.videoAspect || "16 / 9"}
          />
        </div>
      </section>}

      <section className="sg-band">
        <div className="container">
          <div className="home-foundry-section-head">
            <div>
              <span className="section-subtitle">Selected work</span>
              <h2>Proof in the <span className="combination-font">details.</span></h2>
            </div>
            <Link href="/work" className="sg-link">All work <span aria-hidden="true">→</span></Link>
          </div>
          <div className={`sg-sv-work${isPortrait ? " is-portrait" : ""}`}>
            {service.portfolio.map((item) => (
              <Link href="/work" key={item.title} data-rise>
                <div className="sg-sv-work-media" style={{ backgroundImage: `url(${item.image})` }}>
                  <span className="sg-play" aria-hidden="true">▶</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band band-ink on-ink sg-band-reveal">
        <div className="container">
          <span className="section-subtitle">The approach</span>
          <h2 className="sg-narrow">{service.frameworkTitle}</h2>
          <div className="sg-columns">
            {service.framework.map(([number, title, text]) => (
              <article key={number} data-rise>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">What you receive</span>
            <h2>Built to be used.<br /><span className="combination-font">Ready to move.</span></h2>
            <p className="sg-split-note">{service.cta}</p>
            <Link href={bookingHref} className="btn btn-primary">Book a call <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="sg-checklist">
            {service.deliverables.map((item) => <li key={item} data-rise>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="sg-band band-iris on-iris sg-band-reveal">
        <div className="container">
          <span className="section-subtitle">How it runs</span>
          <h2>Four simple <span className="combination-font">steps.</span></h2>
          <ol className="sg-process">
            {service.process.map(([number, title]) => (
              <li key={number} data-rise><span>{number}</span><strong>{title}</strong></li>
            ))}
          </ol>
        </div>
      </section>

      <ServicePricing service={service.serviceName} />

      <section className="sg-faq">
        <div className="container sg-faq-grid">
          <div>
            <span className="section-subtitle">Before we begin</span>
            <h2>Good questions.<br /><span className="combination-font">Clear answers.</span></h2>
          </div>
          <div className="sg-faq-list">
            {service.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
