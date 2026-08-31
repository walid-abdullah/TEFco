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
      {/* HERO SECTION */}
      <section className="hero section-padding section-target" id="hero" style={{"paddingTop": "140px", "position": "relative", "overflow": "hidden"}}>
        <div className="container text-center" style={{position: "relative", zIndex: 1}}>
          <div className="badge glass-badge reveal-on-scroll">
            <i className="fa-solid fa-sparkles"></i> <span>{heroBadge}</span>
          </div>

          <h1 className="hero-title reveal-on-scroll" style={{"fontSize": "3.8rem", "lineHeight": "1.15", "margin": "20px 0 25px"}}>
            {heroTitle1} <br />
            <span className="combination-font">{heroTitle2}</span>
          </h1>

          <p className="hero-description reveal-on-scroll" style={{"maxWidth": "750px", "margin": "0 auto 35px", "fontSize": "1.15rem", "color": "var(--text-secondary)"}}>
            {heroDescription}
          </p>

          <div className="hero-cta-group reveal-on-scroll" style={{"display": "flex", "justifyContent": "center", "gap": "20px", "marginBottom": "40px"}}>
            <Link href="/work" className="btn btn-primary pop-btn" style={{"padding": "16px 36px", "fontSize": "1.05rem", "borderRadius": "14px"}}>Explore Portfolio ▶</Link>
            <Link href="/services" className="btn btn-outline pop-btn" style={{"padding": "16px 36px", "fontSize": "1.05rem", "borderRadius": "14px"}}>View Services ✨</Link>
          </div>
        </div>
      </section>

      {/* ABOUT & FOUNDER VIDEO SECTION */}
      <section className="about section-padding section-target" id="about" style={{"position": "relative"}}>
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-subtitle">{aboutSubtitle}</span>
            <h2 className="section-title" style={{fontSize: "3rem"}}>{aboutTitle1} <span className="combination-font">{aboutTitle2}</span></h2>
            <p className="section-description">{aboutDescription}</p>
          </div>

          {/* About Founder Explainer Video Card */}
          <div className="about-video-card glow-border-card glass-card reveal-on-scroll pop-hover" style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "0", "overflow": "hidden"}}>
            <div className="about-video-grid" style={{"gridTemplateColumns": "40% 60%", "alignItems": "center", "gap": "40px"}}>
              <div className="about-content" style={{"padding": "20px 20px 20px 40px", "display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
                <h3 style={{"fontSize": "2rem", "marginTop": "10px"}}>{founderVideoTitle1}<br /><span className="combination-font" style={{"color": "var(--accent-blue-light)"}}>{founderVideoTitle2}</span></h3>
                <p style={{"marginBottom": "25px"}}>{founderVideoDesc}</p>
                <div className="about-highlights" style={{"marginBottom": "30px"}}>
                  <div className="highlight-item"><i className="fa-solid fa-check-circle" style={{"color": "var(--primary)"}}></i> Retention-Engineered Hook Systems</div>
                  <div className="highlight-item"><i className="fa-solid fa-check-circle" style={{"color": "var(--primary)"}}></i> Direct Slack & WhatsApp Channels</div>
                  <div className="highlight-item"><i className="fa-solid fa-check-circle" style={{"color": "var(--primary)"}}></i> Unlimited Edit Revision Guarantee</div>
                </div>
                <a href="#" id="founder-video-play-btn" className="btn btn-primary pop-btn" style={{"display": "inline-flex", "alignSelf": "flex-start"}}>Watch Full Overview <i className="fa-solid fa-play-circle"></i></a>
              </div>

              <div className="about-video-wrapper" style={{"position": "relative", "width": "100%", "padding": "0"}}>
                <div className="about-video-container" style={{"position": "relative", "width": "100%", "borderRadius": "20px", "overflow": "hidden", "background": "transparent", "aspectRatio": "16/9", "border": "2px solid rgba(255,255,255,0.4)", "boxShadow": "0 20px 40px rgba(0,0,0,0.1)", "display": "block"}}>
                  <InlineVideoPlayer 
                    videoUrl={founderVideoUrl} 
                    thumbnailUrl={founderVideoThumbnail ? urlFor(founderVideoThumbnail).url() : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"}
                    altText="Founder Explainer Video Thumbnail"
                    playButtonId="founder-video-play-btn"
                    badge={
                      <div className="badge glass-badge-blue" style={{"position": "absolute", "top": "15px", "left": "15px", "zIndex": "15", "fontSize": "0.85rem", "padding": "6px 16px", "margin": "0", "borderRadius": "30px", "whiteSpace": "nowrap", "display": "flex", "alignItems": "center", "pointerEvents": "none"}}>
                        <i className="fa-solid fa-bolt" style={{"marginRight": "8px", "color": "#F59E0B", "fontSize": "0.9rem"}}></i> <span style={{"fontWeight": "600"}}>The Studio Pipeline</span>
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
      <section className="metrics-bar section-padding-sm" style={{position: 'relative'}}>
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-icon"><i className="fa-solid fa-play"></i></div>
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target={viewsCount}>{viewsCount}</span><span className="metric-suffix">M+</span>
              </div>
              <div className="metric-label">Total Views Generated</div>
            </div>
            <div className="metric-item">
              <div className="metric-icon"><i className="fa-solid fa-film"></i></div>
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target={deliveredCount}>{deliveredCount}</span><span className="metric-suffix">+</span>
              </div>
              <div className="metric-label">Videos Delivered</div>
            </div>
            <div className="metric-item">
              <div className="metric-icon"><i className="fa-solid fa-clock-rotate-left"></i></div>
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target={onTimeRate}>{onTimeRate}</span><span className="metric-suffix">%</span>
              </div>
              <div className="metric-label">On-Time Turnaround</div>
            </div>
            <div className="metric-item">
              <div className="metric-icon"><i className="fa-solid fa-star"></i></div>
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target={rating}>{rating}</span><span className="metric-suffix">/5</span>
              </div>
              <div className="metric-label">Client Satisfaction</div>
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

      {/* PORTFOLIO SECTION */}
      <section className="portfolio section-padding section-target section-alt" id="portfolio" style={{"position": "relative"}}>
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-subtitle">{portfolioSubtitle}</span>
            <h2 className="section-title" style={{fontSize: "3rem"}}>{portfolioTitle1} <span className="combination-font">{portfolioTitle2}</span></h2>
            <p className="section-description">{portfolioDescription}</p>
          </div>

          <div className="portfolio-tabs">
            <button className="tab-btn active" data-filter="all">All Projects</button>
            <button className="tab-btn" data-filter="reels">Reels & Shorts</button>
            <button className="tab-btn" data-filter="podcast">Podcasts</button>
            <button className="tab-btn" data-filter="talking-head">Talking Head</button>
            <button className="tab-btn" data-filter="ugc">UGC Ads</button>
            <button className="tab-btn" data-filter="saas">SaaS Motion</button>
          </div>

          <div className="portfolio-grid">
            {portfolioData?.length > 0 ? portfolioData.map((project) => (
              <div key={project._id} className="portfolio-card glass-card" data-category={project.category || 'reels'}>
                <div className="portfolio-thumb-wrapper" style={{"position": "relative", "aspectRatio": "16/9", "borderRadius": "12px", "overflow": "hidden", "background": "#000"}}>
                  <InlineVideoPlayer 
                    videoUrl={project.videoUrl} 
                    thumbnailUrl={project.thumbnail ? urlFor(project.thumbnail).url() : null}
                    altText={project.title}
                  />
                </div>
                <div className="portfolio-info">
                  <span className="client-tag">{project.clientName}</span>
                  <h4>{project.title}</h4>
                  <div className="meta-row">
                    {project.metric1Text && <span><i className={project.metric1Icon || 'fa-solid fa-star'}></i> {project.metric1Text}</span>}
                    {project.metric2Text && <span><i className={project.metric2Icon || 'fa-solid fa-star'}></i> {project.metric2Text}</span>}
                  </div>
                </div>
              </div>
            )) : (
              <div className="portfolio-card glass-card" data-category="reels">
                <div className="portfolio-thumb-wrapper">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="Tech Reel" />
                  <div className="portfolio-badge">Reels</div>
                </div>
                <div className="portfolio-info">
                  <span className="client-tag">Alex Rivera (SaaS Founder)</span>
                  <h4>Viral Tech Founder Reel</h4>
                  <div className="meta-row">
                    <span><i className="fa-solid fa-eye"></i> 2.4M Views</span>
                    <span><i className="fa-solid fa-heart"></i> 180K Likes</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {logoData?.length > 0 && (
          <div style={{"marginTop": "50px"}}>
            <LogoMarquee logos={logoData} />
          </div>
        )}
      </section>

      {/* PRICING, MATRIX, COMPARISON & BENEFITS */}
      <PricingSection 
        subtitle={pricingSubtitle} 
        title1={pricingTitle1} 
        title2={pricingTitle2} 
        description={pricingDescription}
        pricingData={pricingData}
      />
      <ServicesMatrix />
      <ComparisonSection />
      <BenefitsBento />

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials section-padding section-target" id="testimonials" style={{"position": "relative"}}>
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="section-header text-center">
            <span className="section-subtitle">{testimonialsSubtitle}</span>
            <h2 className="section-title" style={{fontSize: "3rem"}}>{testimonialsTitle1} <span className="combination-font">{testimonialsTitle2}</span></h2>
          </div>

          <div className="testimonials-grid" style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "30px"}}>
            {textTestimonials?.length > 0 ? textTestimonials.map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card glass-card">
                <div className="testimonial-header" style={{"display": "flex", "alignItems": "center", "gap": "15px", "marginBottom": "20px"}}>
                  <div className="avatar-placeholder" style={{"width": "50px", "height": "50px", "borderRadius": "50%", "background": "rgba(37,99,235,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--primary)", "fontWeight": "bold"}}>
                    {testimonial.author ? testimonial.author.charAt(0) : 'U'}
                  </div>
                  <div>
                    <h4 style={{"margin": "0 0 4px 0", "fontSize": "1.1rem"}}>{testimonial.author}</h4>
                    <p style={{"margin": "0", "fontSize": "0.85rem", "color": "var(--text-secondary)"}}>{testimonial.role} - <span style={{"color": "var(--primary)"}}>{testimonial.company}</span></p>
                  </div>
                </div>
                <div className="testimonial-stars" style={{"color": "#F59E0B", "marginBottom": "15px"}}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p style={{"color": "var(--text-primary)", "fontStyle": "italic", "lineHeight": "1.6"}}>
                  "{testimonial.quote || testimonial.content}"
                </p>
              </div>
            )) : (
              <div className="testimonial-card glass-card">
                <div className="testimonial-header" style={{"display": "flex", "alignItems": "center", "gap": "15px", "marginBottom": "20px"}}>
                  <div className="avatar-placeholder" style={{"width": "50px", "height": "50px", "borderRadius": "50%", "background": "rgba(37,99,235,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--primary)", "fontWeight": "bold"}}>D</div>
                  <div>
                    <h4 style={{"margin": "0 0 4px 0", "fontSize": "1.1rem"}}>David Miller</h4>
                    <p style={{"margin": "0", "fontSize": "0.85rem", "color": "var(--text-secondary)"}}>Co-Founder - <span style={{"color": "var(--primary)"}}>NexusAI</span></p>
                  </div>
                </div>
                <div className="testimonial-stars" style={{"color": "#F59E0B", "marginBottom": "15px"}}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p style={{"color": "var(--text-primary)", "fontStyle": "italic", "lineHeight": "1.6"}}>
                  "Editly Foundry completely transformed our social presence. Our short-form retention went from 40% to 78% in just 3 weeks!"
                </p>
              </div>
            )}
          </div>
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
