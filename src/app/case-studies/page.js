import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export const metadata = {
  title: 'Case Studies | The Editly Foundry Co.',
  description: 'Explore our deep-dive video editing case studies with interactive before & after transformations, organic view spikes, and audience retention metrics.'
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'alex-hormozi-style-saas-reels',
      client: 'ScaleFlow AI (B2B SaaS)',
      title: 'How We Scaled A SaaS Founder To 4.8M Organic Views in 60 Days',
      category: 'Short-Form Viral',
      metrics: [
        { label: 'Organic Views', value: '+4.8M', icon: 'fa-solid fa-eye' },
        { label: 'Hook Retention', value: '74.2%', icon: 'fa-solid fa-chart-line' },
        { label: 'Qualified Pipeline', value: '$380K', icon: 'fa-solid fa-dollar-sign' }
      ],
      description: 'We took the founder’s raw Loom and webcam recordings, re-engineered the first 3-second hooks with dynamic 3D pop-ins, kinetic sound design, and studio color grading.',
      turnaround: '36 Hours',
      deliverables: '30 Vertical Reels & YouTube Shorts'
    },
    {
      slug: 'the-growth-podcast-rebrand',
      client: 'The Modern Creator Podcast',
      title: 'Transforming a Flat 2-Hour Podcast into 45 High-Converting Clips',
      category: 'Long-Form & Repurposing',
      metrics: [
        { label: 'Episode Downloads', value: '+240%', icon: 'fa-solid fa-podcast' },
        { label: 'Average Watch Time', value: '18:42 min', icon: 'fa-solid fa-clock' },
        { label: 'Subscriber Growth', value: '+85K', icon: 'fa-solid fa-user-plus' }
      ],
      description: 'Multi-cam audio-synced editing, dynamic zoom pacing to eliminate dead air, professional broadcast audio mastering, and 15 viral micro-clips delivered every Monday.',
      turnaround: '48 Hours',
      deliverables: '4 Full Episodes + 60 Micro Clips / mo'
    },
    {
      slug: 'hypercharge-ecommerce-ad-campaign',
      client: 'Aura Athletics (DTC Fitness)',
      title: '3.8x ROAS Meta & TikTok Ad Campaign Transformation',
      category: 'High-Converting Paid Ads',
      metrics: [
        { label: 'Paid ROAS Spike', value: '3.8x', icon: 'fa-solid fa-arrow-trend-up' },
        { label: 'Click-Through Rate', value: '4.6%', icon: 'fa-solid fa-hand-pointer' },
        { label: 'Ad Spend Scaled', value: '$120K+', icon: 'fa-solid fa-coins' }
      ],
      description: 'Engineered 12 high-converting UGC variants with hook variations, split-screen comparisons, and fast-paced sound design tested against baseline ad creatives.',
      turnaround: '24 Hours Express',
      deliverables: '12 Dynamic Paid Ad Creatives'
    }
  ];

  return (
    <div className="case-studies-page" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '60px' }}>
          <span className="section-subtitle">
            <i className="fa-solid fa-chart-simple" style={{ marginRight: '8px' }}></i>
            Proven Production Results
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '20px' }}>
            Raw Footage In. <span className="combination-font">Viral Impact Out.</span>
          </h1>
          <p className="section-description" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Explore how our dedicated post-production pods engineer viral hooks, elevate retention curves, and scale revenue for top brands.
          </p>
        </div>

        {/* Case Studies Deep Dive Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.slug}
              className="glass-card reveal-on-scroll"
              style={{
                borderRadius: '32px',
                padding: '45px',
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                gap: '45px',
                alignItems: 'center',
                border: '1px solid var(--glass-border)'
              }}
            >
              {/* Left Column: Interactive Before/After Drag Slider */}
              <div>
                <BeforeAfterSlider />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <span><i className="fa-solid fa-arrows-left-right" style={{ marginRight: '6px' }}></i>Drag slider to compare raw vs final edit</span>
                  <span style={{ color: '#10B981', fontWeight: '700' }}><i className="fa-solid fa-check" style={{ marginRight: '4px' }}></i>48h Turnaround</span>
                </div>
              </div>

              {/* Right Column: Case Study Data, Story & Metrics */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ padding: '6px 14px', borderRadius: '50px', background: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', fontWeight: '800', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {cs.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cs.client}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
                  {cs.title}
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '25px' }}>
                  {cs.description}
                </p>

                {/* Metrics Badges Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '14px',
                  marginBottom: '30px'
                }}>
                  {cs.metrics.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px 12px',
                        borderRadius: '16px',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--glass-border)',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#38BDF8', marginBottom: '4px' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="btn btn-primary pop-btn"
                    style={{ padding: '14px 28px', fontSize: '0.95rem' }}
                  >
                    <span>Read Full Breakdown</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href="/book-a-call"
                    className="btn btn-outline"
                    style={{ padding: '14px 24px', fontSize: '0.95rem' }}
                  >
                    <span>Book intro Call</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
