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

export const revalidate = 60;

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
    <div className="homepage-wrapper" style={{ minHeight: '100vh', position: 'relative' }}>
<section className="hero section-target" id="hero">
    <div className="hero-bg-glow"></div>
    <div className="container hero-container">
      <div className="badge glow-badge reveal-on-scroll" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        <span className="pulse-radar"></span>
        <i className="fa-solid fa-bolt" style={{ color: '#F59E0B' }}></i> {heroBadge}
      </div>
      
      <h1 className="hero-title reveal-on-scroll">
        {heroTitle1} <br />
        <span className="combination-font">{heroTitle2}</span>
      </h1>
      
      <p className="hero-subtitle reveal-on-scroll">
        {heroDescription}
      </p>

      <div className="hero-cta-group reveal-on-scroll">
        <a href="/work" className="btn btn-primary btn-lg pop-btn">
          <span>Explore Portfolio</span>
          <i className="fa-solid fa-play"></i>
        </a>
        <a href="/services" className="btn btn-outline btn-lg pop-btn">
          <span>View Services</span>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </a>
      </div>

      {/* Pro Post-Production Tool Stack Ecosystem Bar (Design Studio UI/UX Style) */}
      <div 
        className="reveal-on-scroll" 
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <div style={{
          fontSize: '0.78rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)'
        }}>
          Industry-Standard Post-Production Stack
        </div>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '850px'
          }}
        >
          {[
            { name: 'Premiere Pro', icon: 'fa-solid fa-film', color: '#9999FF', desc: 'Precision NLE' },
            { name: 'After Effects', icon: 'fa-solid fa-wand-magic-sparkles', color: '#D946EF', desc: 'Motion Graphics' },
            { name: 'DaVinci Resolve', icon: 'fa-solid fa-palette', color: '#F97316', desc: 'Color & Mastering' },
            { name: 'Blender 3D', icon: 'fa-solid fa-cube', color: '#EA580C', desc: '3D VFX' },
            { name: 'Cinema 4D', icon: 'fa-solid fa-shapes', color: '#0284C7', desc: 'Commercial 3D' },
            { name: 'Frame.io', icon: 'fa-solid fa-cloud-arrow-up', color: '#06B6D4', desc: 'Real-Time Review' }
          ].map((tool, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1px solid var(--glass-border)',
                background: 'var(--input-bg)'
              }}
            >
              <i className={tool.icon} style={{ color: tool.color, fontSize: '0.9rem' }}></i>
              <span style={{ color: 'var(--text-primary)' }}>{tool.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: '500' }}>• {tool.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* ABOUT US SECTION (Now 2nd Section) */}
  <section className="about section-target section-alt" style={{"padding": "40px 0"}} id="about">
    <div className="bg-glow-orb glow-cyan" style={{top: "-10%", left: "-10%"}}></div>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div className="section-header text-center reveal-on-scroll" style={{"marginBottom": "40px"}}>
        <span className="section-subtitle" style={{"fontSize": "0.9rem", "fontWeight": "700", "display": "block", "marginBottom": "5px", "textTransform": "uppercase", "letterSpacing": "2px", "color": "var(--accent-blue)"}}>{aboutSubtitle}</span>
        <h2 className="section-title" style={{"fontSize": "2rem", "fontWeight": "500", "marginBottom": "15px"}}>{aboutTitle1} <span className="combination-font" style={{"fontWeight": "600"}}>{aboutTitle2}</span></h2>
        <p className="section-description" style={{"maxWidth": "700px", "margin": "0 auto", "textWrap": "normal"}}>{aboutDescription}</p>
      </div>

      {/* About Founder Explainer Video Card */}
      <div className="about-video-card glow-border-card glass-card reveal-on-scroll pop-hover" style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "0", "overflow": "hidden"}}>
        <div className="about-video-grid" style={{"gridTemplateColumns": "40% 60%", "alignItems": "center", "gap": "40px"}}>
          <div className="about-content" style={{"padding": "20px 20px 20px 40px", "display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
            
            <h3 className="reveal-on-scroll" style={{"fontSize": "2rem", "marginTop": "10px"}}>{founderVideoTitle1}<br /><span className="combination-font" style={{"color": "var(--accent-blue-light)"}}>{founderVideoTitle2}</span></h3>
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

  {/* Metrics / Counter Bar (Moved below About per user request) */}
  <section className="metrics-bar" style={{"padding": "40px 0"}}>
    <div className="container metrics-grid">
      <div className="metric-item reveal-on-scroll">
        <h3 className="metric-number" data-target={viewsCount} style={{"color": "var(--primary)"}}>0</h3><span className="unit" style={{"color": "var(--primary)"}}>M+</span>
        <p className="metric-label">Total Video Views</p>
      </div>
      <div className="metric-item reveal-on-scroll">
        <h3 className="metric-number" data-target={deliveredCount} style={{"color": "var(--primary)"}}>0</h3><span className="unit" style={{"color": "var(--primary)"}}>+</span>
        <p className="metric-label">Videos Delivered</p>
      </div>
      <div className="metric-item reveal-on-scroll">
        <h3 className="metric-number" data-target={onTimeRate} style={{"color": "var(--primary)"}}>0</h3><span className="unit" style={{"color": "var(--primary)"}}>%</span>
        <p className="metric-label">On-Time Delivery Rate</p>
      </div>
      <div className="metric-item reveal-on-scroll">
        <h3 className="metric-number" data-target={rating.replace('.','')} style={{"color": "var(--primary)"}}>0</h3><span className="unit" style={{"color": "var(--primary)"}}>{rating.includes('.') ? `.${rating.split('.')[1]}★` : '★'}</span>
        <p className="metric-label">Average Client Rating</p>
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

      <div className="portfolio-tabs reveal-on-scroll">
        <button className="tab-btn active" data-filter="all">All Projects</button>
        <button className="tab-btn" data-filter="reels">Reels & Shorts</button>
        <button className="tab-btn" data-filter="podcast">Podcasts</button>
        <button className="tab-btn" data-filter="talking-head">Talking Head</button>
        <button className="tab-btn" data-filter="ugc">UGC Ads</button>
        <button className="tab-btn" data-filter="saas">SaaS Motion</button>
      </div>

      <div className="portfolio-grid">
        {portfolioData?.length > 0 ? portfolioData.map((project) => (
          <div key={project._id} className="portfolio-card glass-card reveal-on-scroll pop-hover" data-category={project.category || 'reels'}>
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
          <div className="portfolio-card glass-card reveal-on-scroll pop-hover" data-category="reels">
            <div className="portfolio-thumb-wrapper">
              <img loading="lazy" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="Tech Reel" />
              <div className="portfolio-badge">Reels</div>
              <button className="play-btn-sm" data-video-title="Viral Tech Founder Reel" data-video-desc="Generated 2.4M views on Instagram Reels with kinetic subtitles."><i className="fa-solid fa-play"></i></button>
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

  {/* MUSEMIND ARCHITECTURE: PRICING, MATRIX, COMPARISON & BENEFITS */}
  <PricingSection 
    subtitle={pricingSubtitle}
    title1={pricingTitle1}
    title2={pricingTitle2}
    description={pricingDescription}
  />

  <ServicesMatrix />

  <ComparisonSection />

  <BenefitsBento />

  {/* TEAM SECTION */}
  <section className="team-section section-padding section-target section-alt" id="team" style={{"position": "relative"}}>
    <div className="bg-glow-orb glow-cyan" style={{top: "20%", left: "-5%"}}></div>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div className="section-header text-center reveal-on-scroll">
        <span className="section-subtitle" style={{fontSize: "1.2rem", fontWeight: "700", display: "block", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "2px", color: "var(--accent-blue)"}}>{teamSubtitle}</span>
        <h2 className="section-title" style={{fontSize: "2.5rem", marginBottom: "15px", fontWeight: "500"}}>{teamTitle1} <span className="combination-font" style={{fontWeight: "600"}}>{teamTitle2}</span></h2>
        <p className="section-description" style={{maxWidth: "600px", margin: "0 auto"}}>{teamDescription}</p>
      </div>

      {/* Founder Highlight */}
      <div className="founder-highlight reveal-on-scroll" style={{"maxWidth": "850px", "margin": "40px auto 25px"}}>
        <style dangerouslySetInnerHTML={{__html: `
          .founder-landscape { display: flex; flex-direction: row-reverse; align-items: center; text-align: left; }
          .founder-landscape .team-img-wrap { width: 45%; flex-shrink: 0; }
          .founder-landscape .team-info { padding: 40px; flex-grow: 1; }
          @media (max-width: 768px) {
            .founder-landscape { flex-direction: column; text-align: center; }
            .founder-landscape .team-img-wrap { width: 100%; }
            .founder-landscape .social-links { justify-content: center !important; }
            .founder-landscape .team-info { padding: 30px; }
          }
        `}} />
        
        {foundersData?.length > 0 ? foundersData.map((member, index) => (
          <div key={member._id} className="team-card glass-card pop-hover founder-landscape" style={{"padding": "0", "overflow": "hidden", "border": "1px solid rgba(25, 118, 210, 0.3)", "boxShadow": "0 10px 40px rgba(25, 118, 210, 0.15)", "marginBottom": "40px", flexDirection: index % 2 !== 0 ? 'row' : 'row-reverse'}}>
            <div className="team-img-wrap" style={{"position": "relative", "aspectRatio": "1/1", "overflow": "hidden"}}>
              <img loading="lazy" src={member.image ? urlFor(member.image).url() : "Picture/square.png"} alt={member.name} style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
            </div>
            <div className="team-info">
              <h3 style={{"fontSize": "2rem", "marginBottom": "5px"}}>{member.name}</h3>
              <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "1.1rem", "display": "block", "marginBottom": "20px"}}>{member.role}</span>
              <p style={{"color": "var(--text-muted)", "fontSize": "1.05rem", "lineHeight": "1.6", "marginBottom": "30px"}}>{member.bio}</p>
              <div className="social-links" style={{"display": "flex", "justifyContent": "flex-start", "gap": "20px"}}>
                {member.facebookUrl && <a href={member.facebookUrl} target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-facebook-f"></i></a>}
                {member.linkedinUrl && <a href={member.linkedinUrl} target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-linkedin-in"></i></a>}
                {member.instagramUrl && <a href={member.instagramUrl} target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-instagram"></i></a>}
              </div>
            </div>
          </div>
        )) : (
          <div className="team-card glass-card pop-hover founder-landscape" style={{"padding": "0", "overflow": "hidden", "border": "1px solid rgba(25, 118, 210, 0.3)", "boxShadow": "0 10px 40px rgba(25, 118, 210, 0.15)"}}>
            <div className="team-img-wrap" style={{"position": "relative", "aspectRatio": "1/1", "overflow": "hidden"}}>
              <img loading="lazy" src="Picture/square.png" alt="Walid Abdullah" style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
            </div>
            <div className="team-info">
              <h3 style={{"fontSize": "2rem", "marginBottom": "5px"}}>Walid Abdullah</h3>
              <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "1.1rem", "display": "block", "marginBottom": "20px"}}>Founder & CEO</span>
              <p style={{"color": "var(--text-muted)", "fontSize": "1.05rem", "lineHeight": "1.6", "marginBottom": "30px"}}>Walid leads the strategic vision at Editly Foundry, bringing years of expertise in digital media, algorithm growth, and high-retention video production.</p>
              <div className="social-links" style={{"display": "flex", "justifyContent": "flex-start", "gap": "20px"}}>
                <a href="https://www.facebook.com/editly.foundry/" target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" style={{"color": "var(--text-secondary)", "fontSize": "1.3rem", "transition": "color 0.3s"}}><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="marquee-container reveal-on-scroll" style={{"maxWidth": "1200px", "margin": "0 auto"}}>
        <div className="marquee-content">
          {regularTeamData?.length > 0 ? regularTeamData.map((member) => (
            <div key={member._id} className="team-card glass-card pop-hover" style={{"padding": "0", "overflow": "hidden", "textAlign": "center", "width": "160px", "minWidth": "160px", "flex": "0 0 auto"}}>
              <div className="team-img-wrap" style={{"position": "relative", "width": "100%", "aspectRatio": "1/1", "overflow": "hidden"}}>
                <img loading="lazy" src={member.image ? urlFor(member.image).url() : "Picture/square.png"} alt={member.name} style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
              </div>
              <div className="team-info" style={{"padding": "12px"}}>
                <h3 style={{"fontSize": "0.95rem", "marginBottom": "3px", "fontWeight": "700"}}>{member.name}</h3>
                <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.75rem", "display": "block"}}>{member.role}</span>
              </div>
            </div>
          )) : (
            <>
              {/* Card 1 */}
              <div className="team-card glass-card pop-hover" style={{"padding": "0", "overflow": "hidden", "textAlign": "center", "width": "160px", "minWidth": "160px", "flex": "0 0 auto"}}>
                <div className="team-img-wrap" style={{"position": "relative", "width": "100%", "aspectRatio": "1/1", "overflow": "hidden"}}>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="David Chen" style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
                </div>
                <div className="team-info" style={{"padding": "12px"}}>
                  <h3 style={{"fontSize": "0.95rem", "marginBottom": "3px", "fontWeight": "700"}}>David Chen</h3>
                  <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.75rem", "display": "block"}}>Senior Editor</span>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="team-card glass-card pop-hover" style={{"padding": "0", "overflow": "hidden", "textAlign": "center", "width": "160px", "minWidth": "160px", "flex": "0 0 auto"}}>
                <div className="team-img-wrap" style={{"position": "relative", "width": "100%", "aspectRatio": "1/1", "overflow": "hidden"}}>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="James W." style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
                </div>
                <div className="team-info" style={{"padding": "12px"}}>
                  <h3 style={{"fontSize": "0.95rem", "marginBottom": "3px", "fontWeight": "700"}}>James W.</h3>
                  <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.75rem", "display": "block"}}>Creative Director</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="team-card glass-card pop-hover" style={{"padding": "0", "overflow": "hidden", "textAlign": "center", "width": "160px", "minWidth": "160px", "flex": "0 0 auto"}}>
                <div className="team-img-wrap" style={{"position": "relative", "width": "100%", "aspectRatio": "1/1", "overflow": "hidden"}}>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="Michael R." style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
                </div>
                <div className="team-info" style={{"padding": "12px"}}>
                  <h3 style={{"fontSize": "0.95rem", "marginBottom": "3px", "fontWeight": "700"}}>Michael R.</h3>
                  <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.75rem", "display": "block"}}>Operations Manager</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="team-card glass-card pop-hover" style={{"padding": "0", "overflow": "hidden", "textAlign": "center", "width": "160px", "minWidth": "160px", "flex": "0 0 auto"}}>
                <div className="team-img-wrap" style={{"position": "relative", "width": "100%", "aspectRatio": "1/1", "overflow": "hidden"}}>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Daniel T." style={{"width": "100%", "height": "100%", "objectFit": "cover", "transition": "transform 0.5s ease"}} />
                </div>
                <div className="team-info" style={{"padding": "12px"}}>
                  <h3 style={{"fontSize": "0.95rem", "marginBottom": "3px", "fontWeight": "700"}}>Daniel T.</h3>
                  <span style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.75rem", "display": "block"}}>Content Strategist</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </section>

  {/* BLOGS SECTION */}
  <section className="blogs-page section-padding section-target" id="blogs" style={{"position": "relative"}}>
    <div className="bg-glow-orb glow-purple" style={{bottom: "0%", right: "-5%"}}></div>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div className="section-header text-center reveal-on-scroll">
        <span className="section-subtitle">{blogsSubtitle}</span>
        <h2 className="section-title" style={{fontSize: "3rem", marginBottom: "15px"}}>{blogsTitle1} <span className="combination-font">{blogsTitle2}</span></h2>
        <p className="section-description" style={{maxWidth: "600px", margin: "0 auto"}}>{blogsDescription}</p>
      </div>
      
      <div className="slider-container" style={{"marginTop": "40px", "position": "relative", "maxWidth": "1200px", "marginLeft": "auto", "marginRight": "auto"}}>
        <button className="slider-btn prev" aria-label="Previous" style={{"left": "-20px", "zIndex": "100"}}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="slider-btn next" aria-label="Next" style={{"right": "-20px", "zIndex": "100"}}><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slider-track" style={{"padding": "20px 0", "alignItems": "stretch", "gap": "30px"}}>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" alt="How to Craft 3-Second Hooks That Stop the Scroll" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Strategy</span>
              <h3 style={{"fontSize": "1.5rem", "marginBottom": "15px", "lineHeight": "1.4", "fontWeight": "700"}}>How to Craft 3-Second Hooks That Stop the Scroll</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>The secret to viral content on TikTok and Instagram Reels lies in the first 3 seconds...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" alt="Repurposing 1 Podcast Episode into 20 Micro-Clips" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Production</span>
              <h3 style={{"fontSize": "1.5rem", "marginBottom": "15px", "lineHeight": "1.4", "fontWeight": "700"}}>Repurposing 1 Podcast Episode into 20 Micro-Clips</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>Long-form podcasts are goldmines for content creation. Discover how we extract clips...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="The Anatomy of a High-Converting SaaS Product Demo" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Design</span>
              <h3 style={{"fontSize": "1.5rem", "marginBottom": "15px", "lineHeight": "1.4", "fontWeight": "700"}}>The Anatomy of a High-Converting SaaS Product Demo</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>SaaS launch videos require silky smooth cursor movements and clean UI mockups...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="Mastering YouTube Algorithm in 2026" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Strategy</span>
              <h3 style={{"fontSize": "1.25rem", "marginBottom": "15px", "lineHeight": "1.4"}}>Mastering YouTube Algorithm in 2026</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>A deep dive into click-through rates, retention graphs, and thumbnail testing...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80" alt="Lighting Setup for Professional Talking Head" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Production</span>
              <h3 style={{"fontSize": "1.25rem", "marginBottom": "15px", "lineHeight": "1.4"}}>Lighting Setup for Professional Talking Head</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>You don't need a RED camera. You just need to understand basic 3-point lighting...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>

          <article className="blog-card glass-card slider-item reveal-on-scroll" style={{"padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column", "minWidth": "320px", "maxWidth": "380px"}}>
            <div className="blog-img" style={{"aspectRatio": "16/9", "overflow": "hidden"}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Why Your UGC Ads Are Failing on Meta" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="blog-content" style={{"padding": "30px", "flex": "1", "display": "flex", "flexDirection": "column"}}>
              <span className="blog-category" style={{"color": "var(--accent-blue)", "fontWeight": "600", "fontSize": "0.85rem", "textTransform": "uppercase", "letterSpacing": "1px", "marginBottom": "10px", "display": "block"}}>Ads</span>
              <h3 style={{"fontSize": "1.25rem", "marginBottom": "15px", "lineHeight": "1.4"}}>Why Your UGC Ads Are Failing on Meta</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "marginBottom": "20px", "flex": "1"}}>Consumers are blind to traditional ads. Learn the native-first approach to UGC...</p>
              <Link href="/article" className="btn btn-outline" style={{"width": "100%", "justifyContent": "center"}}>Read More</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>


  {/* CLIENT FEEDBACK / TESTIMONIALS SECTION */}
    {/* CLIENT FEEDBACK / TESTIMONIALS SECTION */}
  <section className="testimonials section-padding section-alt" id="testimonials" style={{"position": "relative"}}>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div className="section-header text-center reveal-on-scroll">
        <span className="section-subtitle" style={{fontSize: "1.2rem", fontWeight: "700", display: "block", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "2px", color: "var(--accent-blue)"}}>{testimonialsSubtitle}</span>
        <h2 className="section-title" style={{fontSize: "2.5rem", marginBottom: "15px", fontWeight: "500"}}>{testimonialsTitle1} <span className="combination-font" style={{fontWeight: "600"}}>{testimonialsTitle2}</span></h2>
      </div>

      <div className="slider-container" style={{"marginTop": "40px", "position": "relative"}}>
        <button className="slider-btn prev" aria-label="Previous"><i className="fa-solid fa-chevron-left"></i></button>
        <button className="slider-btn next" aria-label="Next"><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slider-track" style={{"paddingBottom": "40px", "alignItems": "stretch"}}>
          
          {videoTestimonials?.length > 0 ? videoTestimonials.map((testimonial) => (
            <div key={testimonial._id} className="testimonial-card glass-card slider-item reveal-on-scroll" style={{"padding": "30px", "display": "flex", "flexDirection": "column"}}>
              <div style={{"position": "relative", "aspectRatio": "9/16", "borderRadius": "10px", "background": "#000", "overflow": "hidden", "marginBottom": "20px"}}>
                <InlineVideoPlayer 
                  videoUrl={testimonial.videoUrl} 
                  thumbnailUrl={testimonial.videoThumbnail ? urlFor(testimonial.videoThumbnail).url() : null}
                  altText="Video Testimonial"
                />
              </div>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "15px", "marginTop": "auto"}}>
                <img loading="lazy" src={testimonial.clientImage ? urlFor(testimonial.clientImage).url() : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"} alt={testimonial.clientName} style={{"width": "50px", "height": "50px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1.1rem"}}>{testimonial.clientName}</h4>
                  <span style={{"fontSize": "0.9rem", "color": "var(--text-muted)"}}>{testimonial.clientRole}</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="testimonial-card glass-card slider-item reveal-on-scroll" style={{"padding": "30px", "display": "flex", "flexDirection": "column"}}>
              <div style={{"position": "relative", "aspectRatio": "9/16", "borderRadius": "10px", "background": "#000", "overflow": "hidden", "marginBottom": "20px"}}>
                <img loading="lazy" src="Picture/Thumbnail.png" alt="Video Testimonial" style={{"width": "100%", "height": "100%", "objectFit": "cover", "opacity": "0.8"}} />
                <button className="apple-glass-play-btn" style={{"position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)"}}>
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "15px", "marginTop": "auto"}}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" alt="Client" style={{"width": "50px", "height": "50px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1.1rem"}}>David Chen</h4>
                  <span style={{"fontSize": "0.9rem", "color": "var(--text-muted)"}}>Founder, TechFlow</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Text Reviews Marquee (Moved from Grid to continuous marquee) */}
      <div className="marquee-container reveal-on-scroll" style={{"marginTop": "60px"}}>
        <div className="review-marquee-content">
          {textTestimonials?.length > 0 ? textTestimonials.map((testimonial) => (
            <div key={testimonial._id} className="review-card glass-card pop-hover" style={{"padding": "20px", "display": "flex", "flexDirection": "column", "width": "280px", "minWidth": "280px", "flex": "0 0 auto"}}>
              <div className="stars" style={{"color": "#F2C94C", "fontSize": "1rem", "marginBottom": "10px", "display": "flex", "alignItems": "center", "gap": "2px"}}>
                {Array.from({ length: Math.floor(testimonial.rating || 5) }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                {(testimonial.rating % 1 !== 0) && <i className="fa-solid fa-star-half-stroke"></i>}
                {testimonial.rating && testimonial.rating < 5 && <span style={{"fontSize": "0.85rem", "marginLeft": "4px", "fontWeight": "600", "color": "#F2C94C"}}>{testimonial.rating}</span>}
              </div>
              <p style={{"fontSize": "0.95rem", "lineHeight": "1.5", "color": "var(--text-secondary)", "marginBottom": "15px", "flexGrow": "1"}}>
                "{testimonial.review}"
              </p>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <img loading="lazy" src={testimonial.clientImage ? urlFor(testimonial.clientImage).url() : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"} alt={testimonial.clientName} style={{"width": "40px", "height": "40px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1rem"}}>{testimonial.clientName}</h4>
                  <span style={{"fontSize": "0.8rem", "color": "var(--text-muted)"}}>{testimonial.clientRole}</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="review-card glass-card pop-hover" style={{"padding": "20px", "display": "flex", "flexDirection": "column", "width": "280px", "minWidth": "280px", "flex": "0 0 auto"}}>
              <div className="stars" style={{"color": "#F2C94C", "fontSize": "1rem", "marginBottom": "10px"}}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{"fontSize": "0.95rem", "lineHeight": "1.5", "color": "var(--text-secondary)", "marginBottom": "15px", "flexGrow": "1"}}>
                "Working with Editly Foundry changed the game for our agency. Their turnaround time is insane and the quality is unmatched."
              </p>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Marcus T." style={{"width": "40px", "height": "40px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1rem"}}>Marcus T.</h4>
                  <span style={{"fontSize": "0.8rem", "color": "var(--text-muted)"}}>Marketing Agency Owner</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Duplicate Content Div for Seamless Infinite Loop */}
        <div className="review-marquee-content" aria-hidden="true">
          {textTestimonials?.length > 0 ? textTestimonials.map((testimonial) => (
            <div key={testimonial._id + "_dup"} className="review-card glass-card pop-hover" style={{"padding": "20px", "display": "flex", "flexDirection": "column", "width": "280px", "minWidth": "280px", "flex": "0 0 auto"}}>
              <div className="stars" style={{"color": "#F2C94C", "fontSize": "1rem", "marginBottom": "10px", "display": "flex", "alignItems": "center", "gap": "2px"}}>
                {Array.from({ length: Math.floor(testimonial.rating || 5) }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                {(testimonial.rating % 1 !== 0) && <i className="fa-solid fa-star-half-stroke"></i>}
                {testimonial.rating && testimonial.rating < 5 && <span style={{"fontSize": "0.85rem", "marginLeft": "4px", "fontWeight": "600", "color": "#F2C94C"}}>{testimonial.rating}</span>}
              </div>
              <p style={{"fontSize": "0.95rem", "lineHeight": "1.5", "color": "var(--text-secondary)", "marginBottom": "15px", "flexGrow": "1"}}>
                "{testimonial.review}"
              </p>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <img loading="lazy" src={testimonial.clientImage ? urlFor(testimonial.clientImage).url() : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"} alt={testimonial.clientName} style={{"width": "40px", "height": "40px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1rem"}}>{testimonial.clientName}</h4>
                  <span style={{"fontSize": "0.8rem", "color": "var(--text-muted)"}}>{testimonial.clientRole}</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="review-card glass-card pop-hover" style={{"padding": "20px", "display": "flex", "flexDirection": "column", "width": "280px", "minWidth": "280px", "flex": "0 0 auto"}}>
              <div className="stars" style={{"color": "#F2C94C", "fontSize": "1rem", "marginBottom": "10px"}}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{"fontSize": "0.95rem", "lineHeight": "1.5", "color": "var(--text-secondary)", "marginBottom": "15px", "flexGrow": "1"}}>
                "Working with Editly Foundry changed the game for our agency. Their turnaround time is insane and the quality is unmatched."
              </p>
              <div className="client-profile" style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Marcus T." style={{"width": "40px", "height": "40px", "borderRadius": "50%", "objectFit": "cover"}} />
                <div className="client-info">
                  <h4 style={{"fontWeight": "600", "margin": "0", "fontSize": "1rem"}}>Marcus T.</h4>
                  <span style={{"fontSize": "0.8rem", "color": "var(--text-muted)"}}>Marketing Agency Owner</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>

  

  
  {/* FAQ Section */}
  <FAQSection faqs={faqData} />

  {/* Design Monks Style Project Inquiry Section */}
  <DesignMonksContact />

    </div>
  );
}
