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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    category: "CONVERSATION",
    title: "Podcasts & Interviews",
    outcome: "For conversations worth extending.",
    description: "Multi-camera edits, clean audio, and cutdowns from every episode.",
    deliverables: ["Multi-cam", "Audio cleanup", "Episode packaging", "Clip system"],
    slug: "podcasts",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    category: "AUTHORITY",
    title: "YouTube & Talking Head",
    outcome: "For trust built one frame at a time.",
    description: "Long-form storytelling for founders, educators, and brands.",
    deliverables: ["Story structure", "B-roll", "Color finishing", "Chapters"],
    slug: "talking-head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    category: "PERFORMANCE",
    title: "UGC & Video Ads",
    outcome: "For creative that has something to prove.",
    description: "Direct-response edits built for testing, learning, and conversion.",
    deliverables: ["Hook variations", "Offer callouts", "A/B versions", "Paid-social formats"],
    slug: "ugc-ads",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    category: "MOTION",
    title: "Motion Graphics",
    outcome: "For products that deserve to feel simple.",
    description: "Animated explainers, product films and launch videos that clarify complexity.",
    deliverables: ["UI recreation", "Walkthroughs", "Feature callouts", "Launch films"],
    slug: "motion-graphics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
];

const faqs = Object.values(SERVICE_FAQS).flat().slice(0, 6);

export default function ServicesHubPage() {
  return (
    <main className="sg-page">
      <section className="sg-phero hero-ink on-ink">
        <div className="container">
          <span className="section-subtitle">Services</span>
          <h1>Five formats. <span className="combination-font">One editing team.</span></h1>
          <div className="sg-phero-foot">
            <p>Different goals need different cuts. Choose what you are making and we will handle the edit.</p>
          </div>
        </div>
      </section>

      <section className="sg-band">
        <div className="container sg-sv-list">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} className="sg-sv-row" key={service.number} data-rise>
              <span className="sg-sv-num">{service.number}</span>
              <div className="sg-sv-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                <b>Explore service <span aria-hidden="true">→</span></b>
              </div>
              <div className="sg-sv-img" style={{ backgroundImage: `url(${service.image})` }} />
            </Link>
          ))}
        </div>
      </section>

      <section className="sg-band band-iris on-iris sg-band-reveal">
        <div className="container">
          <p className="sg-statement">The best service is not more output. It is the right piece, made clear enough to do its job.</p>
        </div>
      </section>

      <section className="sg-faq">
        <div className="container sg-faq-grid">
          <div>
            <span className="section-subtitle">Before we begin</span>
            <h2>Useful answers.<br /><span className="combination-font">No sales talk.</span></h2>
          </div>
          <div className="sg-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FAQSchema faqs={faqs} />
    </main>
  );
}
