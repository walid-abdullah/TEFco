import Link from 'next/link';

export const metadata = {
  title: 'Brand Assets & Media Kit | The Editly Foundry Co.',
  description: 'Download official media kit assets, logos, brand guidelines, and executive bios for The Editly Foundry Co.'
};

export default function BrandAssetsPage() {
  const brandColors = [
    { name: 'Midnight Sapphire (Dark BG)', hex: '#040711', rgb: 'rgb(4, 7, 17)' },
    { name: 'Electric Cyan (Primary Accent)', hex: '#38BDF8', rgb: 'rgb(56, 189, 248)' },
    { name: 'Royal Cobalt (Core Blue)', hex: '#2563EB', rgb: 'rgb(37, 99, 235)' },
    { name: 'Amethyst Violet (Motion Glow)', hex: '#8B5CF6', rgb: 'rgb(139, 92, 246)' },
    { name: 'Ceramic Ice (Light Mode BG)', hex: '#F8FAFC', rgb: 'rgb(248, 250, 252)' }
  ];

  return (
    <div className="brand-assets-page" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '60px' }}>
          <span className="section-subtitle">
            <i className="fa-solid fa-photo-film" style={{ marginRight: '8px' }}></i>
            Official Agency Media Kit
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '20px' }}>
            Brand Assets & <span className="combination-font">Press Kit</span>
          </h1>
          <p className="section-description" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Official design resources, vector logo files, typography guidelines, and executive headshots for partners and media outlets.
          </p>
        </div>

        {/* Brand Overview Card */}
        <div 
          className="glass-card reveal-on-scroll" 
          style={{
            padding: '45px',
            borderRadius: '28px',
            marginBottom: '50px',
            border: '1px solid var(--glass-border)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '14px' }}>
                The Editly Foundry Co.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
                We are a specialized post-production video editing agency engineered to transform raw client footage into high-retention visual assets that build authority, drive conversions, and dominate algorithms.
              </p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a 
                  href="/Picture/Thumbnail.png" 
                  download="Editly-Foundry-Media-Kit.png"
                  className="btn btn-primary pop-btn"
                  style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                >
                  <i className="fa-solid fa-download"></i>
                  <span>Download Pitch Deck (PDF)</span>
                </a>
              </div>
            </div>

            {/* Logo Preview Box */}
            <div style={{
              background: 'linear-gradient(135deg, #0B1736 0%, #030610 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: "'Halenoir', sans-serif", color: '#FFFFFF', marginBottom: '8px' }}>
                Editly<span style={{ color: '#38BDF8' }}>Foundry</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Official Wordmark (Dark & Light)
              </div>
            </div>
          </div>
        </div>

        {/* Brand Palette Colors */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px' }}>
            Official Color Palette
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '16px' }}>
            {brandColors.map((color, i) => (
              <div 
                key={i}
                className="glass-card"
                style={{ padding: '16px', borderRadius: '18px', border: '1px solid var(--glass-border)' }}
              >
                <div style={{ width: '100%', height: '70px', borderRadius: '12px', background: color.hex, border: '1px solid rgba(255,255,255,0.1)', marginBottom: '12px' }} />
                <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{color.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-blue-light)', fontFamily: 'monospace' }}>{color.hex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Inquiries Contact Box */}
        <div 
          className="glass-card text-center" 
          style={{
            padding: '50px 30px',
            borderRadius: '24px',
            border: '1px solid var(--glass-border)'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>
            Media & Press Inquiries
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            For interviews, guest podcast appearances, or joint studio partnerships, contact our press desk.
          </p>
          <a href="mailto:press@editlyfoundry.com" className="btn btn-outline" style={{ padding: '12px 28px' }}>
            <i className="fa-solid fa-envelope"></i>
            <span>press@editlyfoundry.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
