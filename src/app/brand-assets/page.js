import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/brand-assets' },
  title: 'Brand Assets & Media Kit | The Editly Foundry Co.',
  description: 'Download official media kit assets, logos, brand guidelines, and executive bios for The Editly Foundry Co.'
};

export default function BrandAssetsPage() {
  const brandColors = [
    { name: 'Iris (main brand colour)', hex: '#5B2EFF' },
    { name: 'Deep Iris', hex: '#2C12B8' },
    { name: 'Light Iris (mark on black)', hex: '#BFAFFF' },
    { name: 'Ink', hex: '#0B0B14' },
    { name: 'White', hex: '#FFFFFF' }
  ];

  const logoFiles = [
    { label: 'Colour, for white backgrounds', file: 'the-editly-foundry-co-horizontal-color-on-white.svg', tone: 'white' },
    { label: 'Gradient, for large uses on white', file: 'the-editly-foundry-co-horizontal-gradient-on-white.svg', tone: 'white' },
    { label: 'Colour, for black backgrounds', file: 'the-editly-foundry-co-horizontal-color-on-dark.svg', tone: 'ink' },
    { label: 'For the brand colour', file: 'the-editly-foundry-co-horizontal-color-on-violet.svg', tone: 'iris' },
    { label: 'One colour, black', file: 'the-editly-foundry-co-horizontal-black.svg', tone: 'white' },
    { label: 'One colour, white', file: 'the-editly-foundry-co-horizontal-white.svg', tone: 'ink' },
    { label: 'Profile picture and app icon', file: 'the-editly-foundry-co-profile-picture.png', tone: 'white', square: true },
    { label: 'Mark only, violet', file: 'the-editly-foundry-co-mark-violet.svg', tone: 'white', square: true },
    { label: 'Mark only, white', file: 'the-editly-foundry-co-mark-white.svg', tone: 'iris', square: true }
  ];

  return (
    <div className="brand-assets-page" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="hero-white sg-page-hero reveal-on-scroll">
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
                <a href="#logo-files" className="btn btn-primary pop-btn" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                  <i className="fa-solid fa-download"></i>
                  <span>Download the logo</span>
                </a>
              </div>
            </div>

            {/* Logo Preview Box */}
            <div className="sg-logo-preview">
              <img src="/Logo/the-editly-foundry-co-horizontal-color-on-violet.svg" alt="The Editly Foundry Co. logo" width="1019" height="381" />
            </div>
          </div>
        </div>

        {/* Logo Files */}
        <div id="logo-files" style={{ marginBottom: '60px', scrollMarginTop: '110px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px' }}>
            Logo files
          </h2>
          <div className="sg-logo-files">
            {logoFiles.map((logo) => (
              <a key={logo.file} href={`/Logo/${logo.file}`} download>
                <span className={`sg-logo-file is-${logo.tone}${logo.square ? ' is-square' : ''}`}>
                  <img src={`/Logo/${logo.file}`} alt="" loading="lazy" />
                </span>
                <strong>{logo.label}</strong>
                <small>{logo.file.endsWith('.png') ? 'PNG' : 'SVG'} · Download</small>
              </a>
            ))}
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
          <a href="mailto:theeditlyfoundry@gmail.com" className="btn btn-outline" style={{ padding: '12px 28px' }}>
            <i className="fa-solid fa-envelope"></i>
            <span>theeditlyfoundry@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
