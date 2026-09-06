import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import LogoMarquee from "@/components/LogoMarquee";
import BenefitsBento from "@/components/BenefitsBento";
import FAQSection from "@/components/FAQSection";
import DesignMonksContact from "@/components/DesignMonksContact";
import HomepageFoundryHero from "@/components/HomepageFoundryHero";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import HomepageMetrics from "@/components/HomepageMetrics";
import HomepageGSAPOrchestrator from "@/components/HomepageGSAPOrchestrator";

export const dynamic = "force-dynamic";

export default async function Home() {
  let homepageData = null;
  let logoData = [];
  let faqData = [];
  let portfolioData = [];
  let testimonialData = [];

  try {
    [homepageData, logoData, faqData, portfolioData, testimonialData] = await Promise.all([
      client.fetch(`*[_type == "homepage"][0]`),
      client.fetch(`*[_type == "clientLogo"] | order(order asc)`),
      client.fetch(`*[_type == "faq"] | order(order asc)`),
      client.fetch(`*[_type == "portfolio"] | order(_createdAt desc)[0...6]`),
      client.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`),
    ]);
  } catch (error) {
    console.error("Homepage content fetch failed:", error);
  }

  const heroVideoUrl = homepageData?.founderVideoUrl || process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || process.env.NEXT_PUBLIC_HOME_SHOWREEL_URL || "";
  const heroPosterUrl = homepageData?.founderVideoThumbnail?.asset 
    ? urlFor(homepageData.founderVideoThumbnail).url() 
    : "/Picture/square.png";

  const faqs = faqData?.length ? faqData.slice(0, 4) : [
    { _id: "home-faq-1", question: "How quickly can we start?", answer: "Most projects begin within a few working days, with a first cut typically delivered within 24–48 hours." },
    { _id: "home-faq-2", question: "What do you edit?", answer: "Reels, podcasts, talking-head films, UGC ads, and SaaS motion—built around the format and audience." },
    { _id: "home-faq-3", question: "How do reviews work?", answer: "You receive a review-ready cut through a simple shared workflow, with clear rounds and direct communication." },
    { _id: "home-faq-4", question: "Do you work on retainers?", answer: "Yes. Ongoing creative pods are available for teams that need a consistent publishing rhythm." },
  ];

  const work = portfolioData?.length ? portfolioData : [
    { _id: "home-work-1", title: "Podcast edit", category: "Podcast", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85" },
    { _id: "home-work-2", title: "Short-form system", category: "Reels", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85" },
    { _id: "home-work-3", title: "Product motion", category: "SaaS", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85" },
    { _id: "home-work-4", title: "Authority film", category: "Talking head", image: "https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1200&q=85" },
  ];

  const services = [
    ["01", "Reels & Shorts", "Retention-led cuts for the feed.", "/services/reels-shorts"],
    ["02", "Podcasts", "Long-form conversations with a pulse.", "/services/podcasts"],
    ["03", "Talking Head", "Authority films that feel immediate.", "/services/talking-head"],
    ["04", "UGC Ads", "Performance creative with a human hook.", "/services/ugc-ads"],
    ["05", "SaaS Motion", "Product stories made obvious.", "/services/saas-motion"],
  ];

  return (
    <HomepageGSAPOrchestrator>
      <main className="home-foundry-page">
        <HomepageFoundryHero
          videoUrl={heroVideoUrl}
          posterUrl={heroPosterUrl}
        />

        <HomepageMetrics />

        {logoData?.length > 0 && (
          <section className="home-foundry-logos" aria-label="Selected clients">
            <LogoMarquee logos={logoData} />
          </section>
        )}

        <section className="home-foundry-positioning reveal-on-scroll">
          <div className="container">
            <span className="section-subtitle">The point of the edit</span>
            <h2>Less content noise.<br /><span className="combination-font">More signal.</span></h2>
            <div className="home-foundry-proof-grid">
              <div><strong>01</strong><span>Retention-led editing</span></div>
              <div><strong>02</strong><span>Dedicated creative pod</span></div>
              <div><strong>03</strong><span>Consistent delivery rhythm</span></div>
            </div>
          </div>
        </section>

        <section className="home-foundry-work section-padding reveal-on-scroll">
          <div className="container">
            <div className="home-foundry-section-head"><div><span className="section-subtitle">Selected work</span><h2>Made to be <span className="combination-font">watched.</span></h2></div><Link href="/work" className="about-text-link">Explore all work <span aria-hidden="true">↗</span></Link></div>
            <div className="home-foundry-work-grid">
              {work.slice(0, 4).map((item, index) => {
                const image = item.image?.asset ? urlFor(item.image).url() : item.image;
                return <Link href="/work" className={`home-foundry-work-card card-${index + 1}`} key={item._id}><div style={{ backgroundImage: `url(${image})` }}><span>{item.category || "Selected work"}</span><span aria-hidden="true">↗</span></div></Link>;
              })}
            </div>
          </div>
        </section>

        <section className="home-foundry-services section-padding reveal-on-scroll">
          <div className="container">
            <div className="home-foundry-section-head"><div><span className="section-subtitle">What we make</span><h2>One studio.<br /><span className="combination-font">Every useful format.</span></h2></div><Link href="/services" className="about-text-link">See services <span aria-hidden="true">↗</span></Link></div>
            <div className="home-foundry-service-list">{services.map(([number, title, text, href]) => <Link href={href} key={number}><span className="mono-spec">{number}</span><strong>{title}</strong><span>{text}</span><b aria-hidden="true">↗</b></Link>)}</div>
          </div>
        </section>

        <BenefitsBento />

        <ClientReviewsSection reviews={testimonialData} />

        <FAQSection faqs={faqs} />

        <section className="home-foundry-contact section-padding"><div className="container"><DesignMonksContact /></div></section>
      </main>
    </HomepageGSAPOrchestrator>
  );
}
