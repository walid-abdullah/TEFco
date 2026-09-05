import Link from 'next/link';
import DesignMonksContact from '@/components/DesignMonksContact';
import FAQSection from '@/components/FAQSection';
import LogoMarquee from '@/components/LogoMarquee';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ServicesMatrix from '@/components/ServicesMatrix';
import ComparisonSection from '@/components/ComparisonSection';
import BenefitsBento from '@/components/BenefitsBento';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import InlineVideoPlayer from '@/components/InlineVideoPlayer';
import RaycastHeroBanner from '@/components/RaycastHeroBanner';
import InteractiveVideoScrubber from '@/components/InteractiveVideoScrubber';
import ReelsTestimonialsMarquee from '@/components/ReelsTestimonialsMarquee';
import DynamicPortfolioSection from '@/components/DynamicPortfolioSection';

export const dynamic = 'force-dynamic';

function getEmbedUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com') && parsed.searchParams.has('v')) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get('v')}`;
    }
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }
  } catch (e) {
    return url;
  }
  return url;
}

export default async function Home() {
  let data = null;
  let postData = [];
  let faqData = [];
  let logoData = [];
  let teamData = [];
  let pricingData = [];
  let servicesData = [];
  let portfolioData = [];
  let testimonialData = [];

  try {
    const query = `*[_type == "homepage"][0]`;
    data = await client.fetch(query);
    
    const postQuery = `*[_type == "post"] | order(publishedAt desc)[0...3]`;
    postData = await client.fetch(postQuery);

    const faqQuery = `*[_type == "faq"] | order(order asc)`;
    faqData = await client.fetch(faqQuery);

    const logoQuery = `*[_type == "clientLogo"] | order(order asc)`;
    logoData = await client.fetch(logoQuery);
    
    const teamQuery = `*[_type == "team"] | order(order asc)`;
    teamData = await client.fetch(teamQuery);
    
    const pricingQuery = `*[_type == "pricing"] | order(order asc)`;
    pricingData = await client.fetch(pricingQuery);
    
    const servicesQuery = `*[_type == "service"]`;
    servicesData = await client.fetch(servicesQuery);
    
    const portfolioQuery = `*[_type == "portfolio"]`;
    portfolioData = await client.fetch(portfolioQuery);
    
    const testimonialQuery = `*[_type == "testimonial"]`;
    testimonialData = await client.fetch(testimonialQuery);
  } catch (err) {
    console.error("Sanity fetch error (using resilient defaults):", err);
  }
  
  if (!faqData || faqData.length === 0) {
    faqData = [
      {
        _id: 'default-1',
        question: 'What is your typical turnaround time for video editing?',
        answer: 'For standard videos like Talking Head or Reels, our turnaround time is usually 24-48 hours. For more complex projects like Long-form Documentaries or Podcasts, it typically takes 3-5 business days.'
      },
      {
        _id: 'default-2',
        question: 'Do you offer revisions if I am not satisfied?',
        answer: 'Yes, absolutely! We include up to 2 rounds of free revisions for every project to ensure the final video perfectly matches your vision and brand style.'
      },
      {
        _id: 'default-3',
        question: 'How do I send my raw video files to you?',
        answer: 'We use seamless cloud collaboration! Once you book a service, we will provide a dedicated Google Drive or Dropbox folder where you can securely upload all your raw footage and assets.'
      },
      {
        _id: 'default-4',
        question: 'Can you edit videos for multiple social media platforms?',
        answer: 'Yes! We specialize in repurposing long-form content (like YouTube videos or Podcasts) into short, highly engaging clips optimized for TikTok, Instagram Reels, and YouTube Shorts.'
      }
    ];
  }
  
  const foundersData = (teamData || []).filter(member => member.isFounder);
  const regularTeamData = (teamData || []).filter(member => !member.isFounder);
  
  const videoTestimonials = (testimonialData || []).filter(t => t.isVideo);
  const textTestimonials = (testimonialData || []).filter(t => !t.isVideo);
  
  const {
    heroBadge = 'Premium Video Production Agency',
    heroTitle1 = 'Elevate Your Video Projects.',
    heroTitle2 = 'Dominate Every Feed.',
    heroDescription = 'We craft high-retention Reels, podcasts, UGC ads, and SaaS animations that capture attention, build authority, and multiply your revenue. Experience true cinematic quality.',
    aboutSubtitle = 'About Editly Foundry',
    aboutTitle1 = 'Where Vision Meets',
    aboutTitle2 = 'Flawless Execution',
    aboutDescription = 'We are a specialized video editing agency engineered to transform raw footage into high-retention visual assets that build authority, drive conversions, and dominate algorithms.',
    founderVideoTitle1 = 'Hear Our Founder Explain',
    founderVideoTitle2 = 'The Secret to Viral Content',
    founderVideoDesc = 'In this video, Walid Abdullah (Founder & Executive Producer) breaks down our entire editing pipeline, retention framework, and how we deliver studio-grade videos in under 48 hours.',
    founderVideoUrl,
    founderVideoThumbnail,
    viewsCount = '500',
    deliveredCount = '1500',
    onTimeRate = '99',
    rating = '4.9',
    servicesSubtitle = 'What We Do',
    servicesTitle1 = 'Premium Video Services',
    servicesTitle2 = 'Built For Scale',
    servicesDescription = "We don't just cut clips — we engineer viral hooks, retain audience attention, and drive action. Click on a service to see full portfolio and details.",
    portfolioSubtitle = 'Our Work',
    portfolioTitle1 = 'Recent Work That',
    portfolioTitle2 = 'Produced Results',
    portfolioDescription = 'Filter through our recent video production and editing projects across different formats.',
    pricingSubtitle = 'Transparent Pricing',
    pricingTitle1 = 'Investment In',
    pricingTitle2 = 'Quality',
    pricingDescription = 'Slide through our comprehensive pricing packages across all video editing services.',
    teamSubtitle = 'Leadership',
    teamTitle1 = 'The Vision Behind',
    teamTitle2 = 'Editly Foundry',
    teamDescription = 'Led by industry experts who understand the nuances of audience retention and viral growth.',
    blogsSubtitle = 'Resources & Insights',
    blogsTitle1 = 'The Content',
    blogsTitle2 = 'Playbook',
    blogsDescription = 'Explore our latest strategies, editing breakdowns, and industry insights to scale your brand.',
    testimonialsSubtitle = 'Client Feedback',
    testimonialsTitle1 = 'What Creators & Brands',
    testimonialsTitle2 = 'Say About Us'
  } = data || {};

  return (
    <>
      {/* PURE RAYCAST RED KINETIC HERO BANNER */}
      <RaycastHeroBanner />

      {/* BASEMENT STUDIO INTERACTIVE VIDEO SCRUBBER LAB */}
      <InteractiveVideoScrubber />

      {/* ABOUT & FOUNDER VIDEO SECTION */}
      <section className="about section-padding section-target" id="about" style={{ position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1180px" }}>
          <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
            <span className="section-subtitle">{aboutSubtitle}</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", margin: "0 0 14px" }}>
              {aboutTitle1} <span className="combination-font">{aboutTitle2}</span>
            </h2>
            <p className="section-description" style={{ color: "rgba(255,255,255,0.7)" }}>{aboutDescription}</p>
          </div>

          {/* About Founder Explainer Video Card */}
          <div 
            className="about-video-card glass-card reveal-on-scroll pop-hover" 
            style={{
              maxWidth: "1100px", 
              margin: "0 auto", 
              padding: "0", 
              overflow: "hidden",
              borderRadius: "20px",
              background: "rgba(10, 14, 22, 0.88)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.9)"
            }}
          >
            <div className="about-video-grid" style={{ gridTemplateColumns: "40% 60%", alignItems: "center", gap: "30px" }}>
              <div className="about-content" style={{ padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontSize: "1.8rem", marginTop: "10px", fontWeight: "800", color: "#FFFFFF" }}>
                  {founderVideoTitle1}<br />
                  <span className="combination-font" style={{ color: "#EF4444" }}>{founderVideoTitle2}</span>
                </h3>
                <p style={{ marginBottom: "22px", color: "rgba(255,255,255,0.7)", fontSize: "0.92rem", lineHeight: "1.55" }}>
                  {founderVideoDesc}
                </p>
                <div className="about-highlights" style={{ marginBottom: "26px" }}>
                  <div className="highlight-item" style={{ color: "#FFFFFF", fontSize: "0.88rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="fa-solid fa-check" style={{ color: "#EF4444", fontSize: "0.8rem" }}></i> Retention-Engineered Hook Systems
                  </div>
                  <div className="highlight-item" style={{ color: "#FFFFFF", fontSize: "0.88rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="fa-solid fa-check" style={{ color: "#EF4444", fontSize: "0.8rem" }}></i> Direct Slack & WhatsApp Channels
                  </div>
                  <div className="highlight-item" style={{ color: "#FFFFFF", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="fa-solid fa-check" style={{ color: "#EF4444", fontSize: "0.8rem" }}></i> Unlimited Edit Revision Guarantee
                  </div>
                </div>
                <a href="#" id="founder-video-play-btn" className="btn btn-primary pop-btn" style={{ display: "inline-flex", alignSelf: "flex-start", padding: "10px 22px", borderRadius: "8px", fontSize: "0.88rem", fontWeight: "700", background: "#EF4444", borderColor: "#EF4444" }}>
                  <span>Watch Full Overview</span>
                  <i className="fa-solid fa-play" style={{ marginLeft: "8px", fontSize: "0.75rem" }}></i>
                </a>
              </div>

              <div className="about-video-wrapper" style={{ position: "relative", width: "100%", padding: "20px 20px 20px 0" }}>
                <div className="about-video-container" style={{ position: "relative", width: "100%", borderRadius: "14px", overflow: "hidden", background: "transparent", aspectRatio: "16/9", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 40px rgba(0,0,0,0.8)", display: "block" }}>
                  <InlineVideoPlayer 
                    videoUrl={founderVideoUrl} 
                    thumbnailUrl={founderVideoThumbnail ? urlFor(founderVideoThumbnail).url() : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"}
                    altText="Founder Explainer Video Thumbnail"
                    playButtonId="founder-video-play-btn"
                    badge={
                      <div className="badge" style={{ position: "absolute", top: "12px", left: "12px", zIndex: "15", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#EF4444" }}></span>
                        <span style={{ fontWeight: "700", color: "#FFFFFF" }}>THE STUDIO PIPELINE</span>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metrics-bar section-padding-sm" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="metrics-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            background: 'rgba(10, 14, 22, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
          }}>
            <div className="metric-item" style={{ textAlign: 'center' }}>
              <div className="metric-number-wrapper" style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFFFFF' }}>
                <span className="metric-number" data-target={viewsCount}>{viewsCount}</span><span style={{ color: '#EF4444' }}>M+</span>
              </div>
              <div className="metric-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '4px' }}>Total Views Generated</div>
            </div>
            <div className="metric-item" style={{ textAlign: 'center' }}>
              <div className="metric-number-wrapper" style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFFFFF' }}>
                <span className="metric-number" data-target={deliveredCount}>{deliveredCount}</span><span style={{ color: '#EF4444' }}>+</span>
              </div>
              <div className="metric-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '4px' }}>Videos Delivered</div>
            </div>
            <div className="metric-item" style={{ textAlign: 'center' }}>
              <div className="metric-number-wrapper" style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFFFFF' }}>
                <span className="metric-number" data-target={onTimeRate}>{onTimeRate}</span><span style={{ color: '#EF4444' }}>%</span>
              </div>
              <div className="metric-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '4px' }}>On-Time SLA Dispatch</div>
            </div>
            <div className="metric-item" style={{ textAlign: 'center' }}>
              <div className="metric-number-wrapper" style={{ fontSize: '2.4rem', fontWeight: '900', color: '#FFFFFF' }}>
                <span className="metric-number" data-target={rating}>{rating}</span><span style={{ color: '#EF4444' }}>★</span>
              </div>
              <div className="metric-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '4px' }}>Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection 
        subtitle={servicesSubtitle} 
        title1={servicesTitle1} 
        title2={servicesTitle2} 
        description={servicesDescription} 
      />

      {/* DYNAMIC REACT FILTERABLE PORTFOLIO SECTION */}
      <DynamicPortfolioSection 
        subtitle={portfolioSubtitle}
        title1={portfolioTitle1}
        title2={portfolioTitle2}
        description={portfolioDescription}
        initialProjects={portfolioData?.length > 0 ? portfolioData : []}
      />

      {logoData?.length > 0 && (
        <div style={{ marginTop: '50px' }}>
          <LogoMarquee logos={logoData} />
        </div>
      )}

      {/* PRICING, MATRIX, COMPARISON & BENEFITS */}
      <PricingSection 
        subtitle={pricingSubtitle} 
        title1={pricingTitle1} 
        title2={pricingTitle2} 
        description={pricingDescription}
      />
      <ServicesMatrix />
      <ComparisonSection />
      <BenefitsBento />

      {/* TESTIMONIALS REELS MARQUEE SECTION */}
      <section className="testimonials section-target" id="testimonials" style={{ position: "relative", overflow: "hidden", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1380px" }}>
          <div className="section-header text-center" style={{ marginBottom: "28px" }}>
            <span className="section-subtitle">{testimonialsSubtitle}</span>
            <h2 className="section-title" style={{ fontSize: "2.8rem", margin: "6px 0 16px" }}>{testimonialsTitle1} <span className="combination-font">{testimonialsTitle2}</span></h2>
          </div>

          {/* Dynamic 9:16 Animated Reels Marquee */}
          <ReelsTestimonialsMarquee videoTestimonials={videoTestimonials} />
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqs={faqData} />

      {/* CONTACT SECTION */}
      <section className="contact section-padding section-target" id="contact" style={{"position": "relative"}}>
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <DesignMonksContact />
        </div>
      </section>
    </>
  );
}
