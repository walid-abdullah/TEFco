import Link from "next/link";
import { client } from "@/sanity/client";
import { mergeClientLogos } from "@/sanity/content";
import { urlFor } from "@/sanity/image";
import AudienceSection from "@/components/AudienceSection";
import CompareSection from "@/components/CompareSection";
import PricingPreview from "@/components/PricingPreview";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import DesignMonksContact from "@/components/DesignMonksContact";
import HomepageFoundryHero from "@/components/HomepageFoundryHero";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import HomepageMetrics from "@/components/HomepageMetrics";
import HomepageGSAPOrchestrator from "@/components/HomepageGSAPOrchestrator";

// Changes made in Sanity appear within a minute.
export const revalidate = 60;

// One request for the whole page, with only the fields it uses.
const HOME_QUERY = `{
  "homepage": *[_type == "homepage"][0]{ founderVideoUrl, founderVideoThumbnail },
  "logos": *[_type == "clientLogo" && defined(logo.asset)] | order(order asc){ _id, name, logo },
  "faqs": *[_type == "faq"] | order(order asc)[0...4]{ _id, question, answer },
  "work": *[_type == "portfolio" && defined(videoUrl) && videoUrl != ""] | order(order asc, _createdAt desc)[0...3]{ _id, title, category, orientation, thumbnail, videoUrl },
  "reviews": *[_type == "testimonial"] | order(_createdAt desc){ _id, clientName, clientRole, clientImage, isVideo, videoUrl, videoThumbnail, review, rating }
}`;

export const metadata = { alternates: { canonical: "/" } };

const CATEGORY_LABELS = { reels: "Reels & Shorts", saas: "Motion Graphics", podcast: "Podcast", "talking-head": "Talking Head", promo: "Paid Creative" };
const formatLabel = (category) => CATEGORY_LABELS[category] || category || "Selected work";

export default async function Home() {
  let content = {};
  try {
    content = await client.fetch(HOME_QUERY);
  } catch (error) {
    console.error("Homepage content fetch failed:", error);
  }
  const { homepage: homepageData, logos: logoData, faqs: faqData, work: portfolioData, reviews: testimonialData = [] } = content;

  const heroVideoUrl = homepageData?.founderVideoUrl || process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || process.env.NEXT_PUBLIC_HOME_SHOWREEL_URL || "";
  const heroPosterUrl = homepageData?.founderVideoThumbnail?.asset 
    ? urlFor(homepageData.founderVideoThumbnail).width(1600).auto("format").url() 
    : "/Picture/square.png";

  const faqs = faqData?.length ? faqData.slice(0, 4) : [
    { _id: "home-faq-1", question: "How quickly can we start?", answer: "Most projects begin within a few working days, with a first cut typically delivered within 24–48 hours." },
    { _id: "home-faq-2", question: "What do you edit?", answer: "Reels, podcasts, talking-head films, UGC ads, and SaaS motion—built around the format and audience." },
    { _id: "home-faq-3", question: "How do reviews work?", answer: "You receive a review-ready cut through a simple shared workflow, with clear rounds and direct communication." },
    { _id: "home-faq-4", question: "Do you work on retainers?", answer: "Yes. Ongoing creative pods are available for teams that need a consistent publishing rhythm." },
  ];

  const sampleWork = [
    { _id: "home-work-1", title: "Podcast edit", category: "Podcast", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85" },
    { _id: "home-work-2", title: "Short-form system", category: "Reels", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85" },
    { _id: "home-work-3", title: "Product motion", category: "SaaS", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85" },
    { _id: "home-work-4", title: "Authority film", category: "Talking head", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" },
  ];
  // Real videos come first. Samples fill any empty places until there are three.
  const work = [...(portfolioData || []), ...sampleWork].slice(0, 3);

  const services = [
    { number: "01", title: "Reels & Shorts", text: "Retention-led cuts for the feed, built around the first three seconds.", href: "/services/reels-shorts", tone: "1", tags: ["Hooks", "Kinetic captions", "9:16"], image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85" },
    { number: "02", title: "Podcasts", text: "Long-form conversations with a pulse, and clips from every episode.", href: "/services/podcasts", tone: "2", tags: ["Multi-cam", "Audio cleanup", "Clip system"], image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=85" },
    { number: "03", title: "Talking Head", text: "Authority films that feel immediate, for founders and educators.", href: "/services/talking-head", tone: "3", tags: ["Story structure", "B-roll", "Color finishing"], image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" },
    { number: "04", title: "UGC Ads", text: "Performance creative with a human hook, ready to test and scale.", href: "/services/ugc-ads", tone: "4", tags: ["Hook variations", "A/B versions", "Paid social"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85" },
    { number: "05", title: "Motion Graphics", text: "Ideas and products made obvious, from explainers to launch films.", href: "/services/motion-graphics", tone: "5", tags: ["Explainers", "UI motion", "Launch films"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85" },
  ];

  const toImage = (item) => {
    const source = item.thumbnail || item.image;
    return source?.asset ? urlFor(source).width(1000).auto("format").url() : source;
  };
  const logos = mergeClientLogos(logoData);

  return (
    <HomepageGSAPOrchestrator>
      <main className="home-foundry-page">
        <HomepageFoundryHero videoUrl={heroVideoUrl} posterUrl={heroPosterUrl} logos={logos} />

        <section className="sg-section sg-signal reveal-on-scroll">
          <div className="container">
            <div className="sg-signal-head">
              <div>
                <span className="section-subtitle">Why teams hire us</span>
                <h2>You keep creating.<br /><span className="combination-font">We handle the edit.</span></h2>
              </div>
              <div className="home-foundry-proof-grid">
                <div><strong>01</strong><span>Edits built to hold attention</span></div>
                <div><strong>02</strong><span>One team that learns your style</span></div>
                <div><strong>03</strong><span>Videos delivered on schedule</span></div>
              </div>
            </div>
            <HomepageMetrics />
          </div>
        </section>

        <AudienceSection />

        <div className="sg-group sg-group-ink on-ink sg-band-reveal">
        <section className="sg-section sg-work">
          <div className="container">
            <div className="home-foundry-section-head reveal-on-scroll">
              <div><span className="section-subtitle">Our work</span><h2>Videos made to be <span className="combination-font">watched.</span></h2></div>
              <Link href="/work" className="sg-link">Explore all work <span aria-hidden="true">→</span></Link>
            </div>
            <div className="sg-work-grid">
              {work.slice(0, 3).map((item) => {
                const image = toImage(item);
                return (
                  <Link href="/work" className={`sg-work-card${(item.orientation ? item.orientation === "portrait" : item.category === "reels") ? " is-portrait" : ""}`} key={item._id}>
                    <div className="sg-work-media" style={image ? { backgroundImage: `url(${image})` } : undefined}><span className="sg-play" aria-hidden="true">▶</span></div>
                    <div className="sg-work-meta"><strong>{item.title}</strong><em>{formatLabel(item.category)}</em></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sg-section sg-services">
          <div className="container">
            <div className="home-foundry-section-head reveal-on-scroll">
              <div><span className="section-subtitle">What we edit</span><h2>One team.<br /><span className="combination-font">Every video format.</span></h2></div>
              <Link href="/services" className="sg-link">See services <span aria-hidden="true">→</span></Link>
            </div>
            <div className="sg-stack">
              {services.map((service, index) => (
                <Link href={service.href} className={`sg-stack-card tone-${service.tone}`} key={service.number} style={{ "--stack-index": index }}>
                  <div className="sg-stack-copy">
                    <span className="sg-stack-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <div className="sg-stack-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <b>Explore {service.title} <span aria-hidden="true">→</span></b>
                  </div>
                  <div className="sg-stack-media" style={{ backgroundImage: `url(${service.image})` }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        </div>

        <HowItWorks />
        <CompareSection />

        <div className="sg-group sg-group-iris on-iris sg-band-reveal">
          <ClientReviewsSection reviews={testimonialData} />
          <PricingPreview />
        </div>

        <FAQSection faqs={faqs} />

        <section className="sg-section sg-contact"><div className="container"><DesignMonksContact /></div></section>
      </main>
    </HomepageGSAPOrchestrator>
  );
}
