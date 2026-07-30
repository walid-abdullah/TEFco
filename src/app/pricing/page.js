import Link from 'next/link';

export const metadata = {
  title: "The Editly Foundry | Pricing",
};

export default function PricingPage() {
  return (
    <>


  <section className="pricing-page section-padding" style={{"paddingTop": "150px", "minHeight": "80vh"}}>
    <div className="container">
      <div className="section-header text-center reveal-on-scroll" style={{"marginBottom": "60px"}}>
        <span className="section-subtitle">Transparent Pricing</span>
        <h2 className="section-title" style={{"fontSize": "3rem"}}>Investment In <span className="combination-font">Quality</span></h2>
        <p className="section-description">Slide through our comprehensive pricing packages across all video editing services.</p>
      </div>

      <div className="slider-container" style={{"marginTop": "40px"}}>
        <button className="slider-btn prev" aria-label="Previous"><i className="fa-solid fa-chevron-left"></i></button>
        <button className="slider-btn next" aria-label="Next"><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slider-track" style={{"paddingBottom": "40px", "alignItems": "stretch"}}>

          {/* Podcast Packages */}
          <div className="pricing-card slider-item glass-card reveal-on-scroll">
            <div className="pricing-header">
              <h3>Podcast: Standard</h3>
              <p>For clean, professional episodes</p>
            </div>
            <div className="price-amount">$499<span>/episode</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> Up to 60 Mins Raw Footage</li>
              <li><i className="fa-solid fa-check"></i> Color Grading & Audio Eq</li>
              <li><i className="fa-solid fa-check"></i> 2 Revisions</li>
              <li><i className="fa-solid fa-check"></i> 72-Hour Turnaround</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>

          <div className="pricing-card highlight-card slider-item glass-card reveal-on-scroll">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Podcast: Growth</h3>
              <p>Maximize organic reach</p>
            </div>
            <div className="price-amount">$899<span>/episode</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> Up to 90 Mins Raw Footage</li>
              <li><i className="fa-solid fa-check"></i> 10 Extracted Viral Reels</li>
              <li><i className="fa-solid fa-check"></i> Unlimited Revisions</li>
              <li><i className="fa-solid fa-check"></i> 48-Hour Turnaround</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>

          {/* Reels Packages */}
          <div className="pricing-card slider-item glass-card reveal-on-scroll">
            <div className="pricing-header">
              <h3>Reels: Creator</h3>
              <p>Consistent daily posts</p>
            </div>
            <div className="price-amount">$999<span>/month</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> 15 Custom Edited Reels</li>
              <li><i className="fa-solid fa-check"></i> Dynamic Captions</li>
              <li><i className="fa-solid fa-check"></i> Trending Audio Selection</li>
              <li><i className="fa-solid fa-check"></i> Dedicated Slack Channel</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>

          <div className="pricing-card highlight-card slider-item glass-card reveal-on-scroll">
            <div className="pricing-header">
              <h3>Reels: Agency</h3>
              <p>Full scale short-form</p>
            </div>
            <div className="price-amount">$1999<span>/month</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> 30 Custom Edited Reels</li>
              <li><i className="fa-solid fa-check"></i> Advanced Motion Graphics</li>
              <li><i className="fa-solid fa-check"></i> Weekly Strategy Calls</li>
              <li><i className="fa-solid fa-check"></i> 24-Hour Turnaround Time</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>

          {/* YouTube Packages */}
          <div className="pricing-card slider-item glass-card reveal-on-scroll">
            <div className="pricing-header">
              <h3>YouTube: Single</h3>
              <p>Per video editing</p>
            </div>
            <div className="price-amount">$350<span>/video</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> Up to 15 Mins Final Length</li>
              <li><i className="fa-solid fa-check"></i> Custom Thumbnail</li>
              <li><i className="fa-solid fa-check"></i> Sound Design & SFX</li>
              <li><i className="fa-solid fa-check"></i> Color Grading</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>
          
          <div className="pricing-card slider-item glass-card reveal-on-scroll">
            <div className="pricing-header">
              <h3>SaaS Explainer</h3>
              <p>Premium software demo</p>
            </div>
            <div className="price-amount">$1500<span>/project</span></div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> 2-Minute App Demo</li>
              <li><i className="fa-solid fa-check"></i> Vector UI Animations</li>
              <li><i className="fa-solid fa-check"></i> Voiceover Sourcing</li>
              <li><i className="fa-solid fa-check"></i> Unlimited Revisions</li>
            </ul>
            <a href="index.html#contact" className="btn btn-primary pop-btn">Book Now</a>
          </div>

        </div>
      </div>
    </div>
  </section>


    </>
  );
}
