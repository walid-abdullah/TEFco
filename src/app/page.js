import DesignMonksContact from '@/components/DesignMonksContact';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import { client } from '@/sanity/client';
import HomepageHeroExperiment from '@/components/HomepageHeroExperiment';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let data = null;

  try {
    data = await client.fetch(`*[_type == "homepage"][0]`);
  } catch (err) {
    console.error('Sanity fetch error (using resilient defaults):', err);
  }

  const {
    heroBadge = 'Premium Video Production Agency',
    heroTitle1 = 'Elevate Your Video Projects.',
    heroTitle2 = 'Dominate Every Feed.',
    heroDescription = 'We craft high-retention Reels, podcasts, UGC ads, and SaaS animations that capture attention, build authority, and multiply your revenue.',
    servicesSubtitle = 'What We Do',
    servicesTitle1 = 'Premium Video Services',
    servicesTitle2 = 'Built For Scale',
    servicesDescription = "We don't just cut clips — we engineer viral hooks, retain audience attention, and drive action.",
    pricingSubtitle = 'Transparent Pricing',
    pricingTitle1 = 'Investment In',
    pricingTitle2 = 'Quality',
    pricingDescription = 'Clear monthly pricing, no hidden costs, and fast turnarounds built for scale.'
  } = data || {};

  return (
    <>
      <section className="luxury-hero-section section-target" id="home">
        <div className="container luxury-hero-container">
          <HomepageHeroExperiment
            heroBadge={heroBadge}
            heroTitle1={heroTitle1}
            heroTitle2={heroTitle2}
            heroDescription={heroDescription}
          />
        </div>
      </section>

      <section className="metrics-bar section-padding-sm" style={{ position: 'relative' }}>
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target="500">500</span>
                <span className="metric-suffix">M+</span>
              </div>
              <div className="metric-label">Total Views Generated</div>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target="1500">1500</span>
                <span className="metric-suffix">+</span>
              </div>
              <div className="metric-label">Videos Delivered</div>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target="99">99</span>
                <span className="metric-suffix">%</span>
              </div>
              <div className="metric-label">On-Time Turnaround</div>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrapper">
                <span className="metric-number" data-target="4.9">4.9</span>
              </div>
              <div className="metric-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection
        subtitle={servicesSubtitle}
        title1={servicesTitle1}
        title2={servicesTitle2}
        description={servicesDescription}
      />

      <PricingSection
        subtitle={pricingSubtitle}
        title1={pricingTitle1}
        title2={pricingTitle2}
        description={pricingDescription}
      />

      <section className="contact section-padding section-target" id="contact" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <DesignMonksContact />
        </div>
      </section>
    </>
  );
}
