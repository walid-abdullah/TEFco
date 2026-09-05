import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function CaseStudyDetailPage({ params }) {
  return (
    <div className="case-study-detail-page" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Breadcrumb Back Link */}
        <div style={{ marginBottom: '30px' }}>
          <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '0.95rem' }}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Title Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ padding: '6px 16px', borderRadius: '50px', background: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              B2B SaaS Growth Case Study
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>48-Hour Turnaround Cycle</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>
            Scaling Video Output to <span className="combination-font">+4.8M Organic Views</span> in 60 Days
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '850px' }}>
            How we partnered with the founding team to transform low-retention Loom walkthroughs and webcam recordings into an algorithmic powerhouse across TikTok, YouTube Shorts, and Instagram Reels.
          </p>
        </div>

        {/* Interactive Before/After Drag Showcase */}
        <div style={{ marginBottom: '60px' }}>
          <BeforeAfterSlider />
          <div style={{ textAlign: 'center', marginTop: '14px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            <i className="fa-solid fa-arrows-left-right" style={{ marginRight: '8px' }}></i>
            Drag the handle to see the exact difference between raw founder recording and our 48h final asset.
          </div>
        </div>

        {/* Deep Breakdown Metrics Grid */}
        <div 
          className="glass-card" 
          style={{
            borderRadius: '28px',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
            border: '1px solid var(--glass-border)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#38BDF8', marginBottom: '4px' }}>+4.8M</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Organic Impressions</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#10B981', marginBottom: '4px' }}>74.2%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Hook Retention Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#8B5CF6', marginBottom: '4px' }}>$380K</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Attributed Pipeline</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#F59E0B', marginBottom: '4px' }}>36 Hours</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Avg Draft Delivery</div>
          </div>
        </div>

        {/* Execution Strategy: 3-Step Hook Engineering */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>
            The 3-Step <span className="combination-font">Foundry Retention Framework</span>
          </h2>

          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#38BDF8', marginBottom: '10px' }}>
              1. The 3-Second Scroll Stopper (Visual Pattern Interrupt)
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
              We analyzed viewer drop-off analytics and replaced standard conversational intros with dynamic kinetic typography, 3D icon pop-ins, and high-frequency sound effects that force users to stop scrolling immediately.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#10B981', marginBottom: '10px' }}>
              2. Pacing Rhythm & Dead Air Elimination
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
              Every hesitation, breath, and silence was trimmed to maintain a relentless narrative pace. We layered subtle background ambient risers and B-roll visuals to sustain viewer engagement through the middle 30 seconds.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#8B5CF6', marginBottom: '10px' }}>
              3. Hollywood Film LUT Color Grading & Mastered Audio
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
              We took flat camera sensor colors and applied custom cinematic LUTs tailored to the founder&apos;s brand palette, combined with multi-band compression to ensure studio-grade vocal clarity.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div 
          className="glass-card text-center" 
          style={{
            padding: '60px 40px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '14px' }}>
            Ready to Re-Engineer Your Video Content?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Book a 15-minute intro call to see how our dedicated post-production pod scales your output in 48 hours.
          </p>
          <Link href="/book-a-call" className="btn btn-primary btn-lg pop-btn">
            <span>Book a 15-Min Intro Call ➔</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
