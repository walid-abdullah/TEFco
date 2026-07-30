import Link from 'next/link';

export const metadata = {
  title: "The Editly Foundry | Blogs",
};

export default function BlogsPage() {
  return (
    <>


  <section className="blogs-page section-padding" style={{"paddingTop": "150px", "minHeight": "80vh"}}>
    <div className="container">
      <div className="section-header text-center reveal-on-scroll" style={{"marginBottom": "60px"}}>
        <span className="section-subtitle">Insights & Articles</span>
        <h2 className="section-title" style={{"fontSize": "3rem"}}>Mastering <span className="combination-font">Content</span></h2>
        <p className="section-description">Deep dives into video editing strategy, algorithm hacks, and content creation.</p>
      </div>

      <div className="slider-container" style={{"marginTop": "40px"}}>
        <button className="slider-btn prev" aria-label="Previous"><i className="fa-solid fa-chevron-left"></i></button>
        <button className="slider-btn next" aria-label="Next"><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slider-track" style={{"paddingBottom": "40px", "alignItems": "stretch"}}>

          {/* Article 1 */}
          <div className="service-card slider-item reveal-on-scroll" style={{"display": "flex", "flexDirection": "column"}}>
            <div className="service-img-wrapper" style={{"height": "250px"}}>
              <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80" alt="Article Thumbnail" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="service-content" style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
              <h3>3-Second Hooks That Stop the Scroll</h3>
              <p style={{"flex": "1"}}>The secret to viral content on TikTok and Instagram Reels lies in the first 3 seconds. Combine pattern interrupts with intriguing statements.</p>
              <a href="article.html" className="btn btn-outline pop-btn" style={{"marginTop": "16px"}}>
                <span>Read More</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="service-card slider-item reveal-on-scroll" style={{"display": "flex", "flexDirection": "column"}}>
            <div className="service-img-wrapper" style={{"height": "250px"}}>
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80" alt="Article Thumbnail" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="service-content" style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
              <h3>Repurposing Podcast Clips</h3>
              <p style={{"flex": "1"}}>Long-form podcasts are goldmines. Learn how to highlight key debates and story climaxes to extract high-performing shorts.</p>
              <a href="article.html" className="btn btn-outline pop-btn" style={{"marginTop": "16px"}}>
                <span>Read More</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          {/* Article 3 */}
          <div className="service-card slider-item reveal-on-scroll" style={{"display": "flex", "flexDirection": "column"}}>
            <div className="service-img-wrapper" style={{"height": "250px"}}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Article Thumbnail" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="service-content" style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
              <h3>High-Converting SaaS Demos</h3>
              <p style={{"flex": "1"}}>SaaS launch videos require silky smooth cursor movements, clean UI mockups, and highlighted feature callouts.</p>
              <a href="article.html" className="btn btn-outline pop-btn" style={{"marginTop": "16px"}}>
                <span>Read More</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          {/* Article 4 */}
          <div className="service-card slider-item reveal-on-scroll" style={{"display": "flex", "flexDirection": "column"}}>
            <div className="service-img-wrapper" style={{"height": "250px"}}>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" alt="Article Thumbnail" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
            </div>
            <div className="service-content" style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
              <h3>The Color Grading Checklist</h3>
              <p style={{"flex": "1"}}>Achieve cinematic looks using our specialized agency color grading workflow for DaVinci Resolve.</p>
              <a href="article.html" className="btn btn-outline pop-btn" style={{"marginTop": "16px"}}>
                <span>Read More</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


    </>
  );
}
