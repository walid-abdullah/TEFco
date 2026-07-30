import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import InlineVideoPlayer from '@/components/InlineVideoPlayer';
import LogoMarquee from '@/components/LogoMarquee';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const query = `*[_type == "servicePage" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });

  if (!page) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `The Editly Foundry | ${page.title}`,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  // Fetch the service page and expand references for portfolioItems and pricingPackages
  const query = `*[_type == "servicePage" && slug.current == $slug][0]{
    ...,
    portfolioItems[]->,
    pricingPackages[]->
  }`;
  const page = await client.fetch(query, { slug });
  
  const logoQuery = `*[_type == "clientLogo"] | order(order asc)`;
  const logoData = await client.fetch(logoQuery);

  if (!page) {
    notFound();
  }

  return (
    <>
      {/* Service Hero Section */}
      <section className="hero section-target" style={{"padding": "160px 0 60px"}}>
        <div className="hero-bg-glow" style={{"width": "600px", "height": "600px", "top": "0"}}></div>
        <div className="container hero-container text-center">
          {page.heroBadgeText && (
            <div className="badge glow-badge reveal-on-scroll">
              {page.heroBadgeIcon && <i className={`${page.heroBadgeIcon}`}></i>} {page.heroBadgeText}
            </div>
          )}
          
          <h1 className="hero-title reveal-on-scroll" style={{"fontSize": "3.5rem"}} dangerouslySetInnerHTML={{ 
            __html: page.heroTitle ? page.heroTitle.replace(/\*(.*?)\*/g, '<span class="combination-font">$1</span>') : page.title 
          }} />
          
          {page.heroSubtitle && (
            <p className="hero-subtitle reveal-on-scroll" style={{"margin": "0 auto 30px"}}>
              {page.heroSubtitle}
            </p>
          )}

          <div className="hero-cta-group reveal-on-scroll">
            <a href="#portfolio" className="btn btn-primary btn-lg pop-btn">
              <span>View Examples</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Service Details */}
      {(page.aboutTitle || page.aboutDescription || page.aboutHighlights) && (
        <section className="services section-padding">
          <div className="container">
            <div className="about-video-grid">
              <div className="about-video-container reveal-on-scroll glass-card">
                <img src={page.aboutImage ? urlFor(page.aboutImage).url() : "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"} alt={page.title} className="about-thumb" />
              </div>
              <div className="about-video-info reveal-on-scroll">
                {page.aboutTitle && (
                  <h2 style={{"fontSize": "2.2rem", "marginBottom": "20px"}} dangerouslySetInnerHTML={{ 
                    __html: page.aboutTitle.replace(/\*(.*?)\*/g, '<span class="combination-font">$1</span>') 
                  }} />
                )}
                {page.aboutDescription && (
                  <p style={{"color": "var(--text-secondary)", "marginBottom": "30px", "fontSize": "1.05rem"}}>
                    {page.aboutDescription}
                  </p>
                )}
                
                {page.aboutHighlights?.length > 0 && (
                  <div className="about-highlights">
                    {page.aboutHighlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        {highlight.icon && <i className={highlight.icon}></i>} 
                        <span>{highlight.title && <strong>{highlight.title}: </strong>}{highlight.description}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Specific */}
      {page.portfolioItems?.length > 0 && (
        <section className="portfolio section-padding" id="portfolio">
          <div className="container">
            <div className="section-header text-center reveal-on-scroll">
              <span className="section-subtitle">{page.portfolioSubtitle || "Case Studies"}</span>
              <h2 className="section-title" dangerouslySetInnerHTML={{ 
                __html: page.portfolioTitle ? page.portfolioTitle.replace(/\*(.*?)\*/g, '<span class="combination-font">$1</span>') : "Recent <span class='combination-font'>Projects</span>" 
              }} />
            </div>

            <div className="portfolio-grid">
              {page.portfolioItems.map((item) => (
                <div key={item._id} className="portfolio-card glass-card reveal-on-scroll pop-hover">
                  <div className="portfolio-thumb-wrapper" style={{"position": "relative", "aspectRatio": "16/9", "borderRadius": "12px", "overflow": "hidden", "background": "#000"}}>
                    <InlineVideoPlayer 
                      videoUrl={item.videoUrl} 
                      thumbnailUrl={item.thumbnail ? urlFor(item.thumbnail).url() : null}
                      altText={item.title}
                    />
                  </div>
                  <div className="portfolio-info">
                    <span className="client-tag">{item.client}</span>
                    <h4>{item.title}</h4>
                    <div className="meta-row">
                      <span><i className="fa-solid fa-eye"></i> {item.stats || 'High Engagement'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {logoData?.length > 0 && (
            <div style={{"marginTop": "50px"}}>
              <LogoMarquee logos={logoData} />
            </div>
          )}
        </section>
      )}

      {/* Pricing & Packages */}
      {page.pricingPackages?.length > 0 && (
        <section className="pricing section-padding section-target" id="pricing" style={{"background": "var(--bg-secondary)"}}>
          <div className="container">
            <div className="section-header text-center reveal-on-scroll">
              <span className="section-subtitle">Transparent Pricing</span>
              <h2 className="section-title">Service <span className="combination-font">Packages</span></h2>
            </div>

            <div className="pricing-grid" style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))", "gap": "30px", "maxWidth": "900px", "margin": "0 auto"}}>
              {page.pricingPackages.map((pkg) => (
                <div key={pkg._id} className="pricing-card glass-card reveal-on-scroll pop-hover" style={{
                  padding: "40px", 
                  textAlign: "center",
                  border: pkg.isPopular ? "2px solid var(--accent-blue-primary)" : "none",
                  position: "relative"
                }}>
                  {pkg.isPopular && (
                    <div className="popular-badge" style={{"position": "absolute", "top": "-15px", "left": "50%", "transform": "translateX(-50%)", "background": "var(--accent-blue-primary)", "color": "white", "padding": "5px 15px", "borderRadius": "20px", "fontSize": "0.8rem", "fontWeight": "bold"}}>MOST POPULAR</div>
                  )}
                  <h3 style={{"fontSize": "1.5rem", "color": "var(--accent-blue-light)"}}>{pkg.title}</h3>
                  <div className="price" style={{"fontSize": "3rem", "fontFamily": "'Halenoir', sans-serif", "margin": "20px 0"}}>{pkg.price}</div>
                  <ul className="pricing-features" style={{"textAlign": "left", "marginBottom": "30px"}}>
                    {pkg.features?.map((feature, i) => (
                      <li key={i} style={{"marginBottom": "10px"}}>
                        <i className="fa-solid fa-check" style={{"color": "var(--accent-green)", "marginRight": "10px"}}></i> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact" className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-outline'} pop-btn`} style={{"width": "100%"}}>Select Package</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
