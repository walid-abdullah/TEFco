"use client";

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Footer({ menu }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer 
      className="footer" 
      style={{
        padding: '100px 0 40px',
        borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
        background: isLight ? 'rgba(255, 255, 255, 0.96)' : '#05070B',
        color: isLight ? '#090E1A' : '#FFFFFF',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        transition: 'background 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* Background Ambient Darkroom Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '400px',
          background: isLight 
            ? 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.03) 0%, rgba(255, 255, 255, 0) 70%)'
            : 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.04) 0%, rgba(5, 7, 11, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* 
          ========================================================================
          1. MUSEMIND-STYLE BIG CALL-TO-ACTION HEADER
          ======================================================================== 
        */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '30px',
          paddingBottom: '60px',
          marginBottom: '50px',
          borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              lineHeight: '1.1',
              fontWeight: '800',
              color: isLight ? '#05070B' : '#FFFFFF',
              letterSpacing: '-0.04em',
              margin: '0 0 16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Have a Project in Mind? <br />
              <span 
                className="serif-accent"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 20%, #CBD5E1 65%, #94A3B8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: isLight ? '#0F172A' : 'transparent',
                  fontWeight: '400',
                  paddingRight: '6px'
                }}
              >
                Let’s Build Something Iconic.
              </span>
            </h2>

            <p style={{
              fontSize: '0.96rem',
              color: isLight ? '#64748B' : '#94A3B8',
              lineHeight: '1.6',
              margin: 0
            }}>
              Venture-backed post-production lab. 48-hour delivery SLA, Frame.io instant review sync, and dedicated creative pods.
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <Link
              href="/book-a-call"
              className="btn btn-primary pop-btn"
              style={{
                padding: '14px 30px',
                borderRadius: '10px',
                fontSize: '0.92rem',
                fontWeight: '800',
                background: '#FFFFFF',
                color: '#05070B',
                border: '1px solid #FFFFFF',
                boxShadow: '0 8px 30px rgba(255, 255, 255, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Book 15-Min Strategy Audit</span>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.78rem' }}></i>
            </Link>

            <a
              href="mailto:theeditlyfoundry@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                background: isLight ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.04)',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
                color: isLight ? '#0F172A' : '#E2E8F0',
                fontSize: '0.86rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.color = isLight ? '#000000' : '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = isLight ? '#0F172A' : '#E2E8F0';
              }}
            >
              <i className="fa-solid fa-envelope" style={{ fontSize: '0.8rem', color: isLight ? '#05070B' : '#94A3B8' }}></i>
              <span>theeditlyfoundry@gmail.com</span>
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem', opacity: 0.6 }}></i>
            </a>
          </div>
        </div>

        {/* 
          ========================================================================
          2. ELEVATED MONUMENTAL BRAND WORDMARK (Auto-Scaling Responsive SVG)
          ======================================================================== 
        */}
        <div 
          style={{
            width: '100%',
            maxWidth: '1240px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '10px 0 45px',
            userSelect: 'none'
          }}
        >
          <svg 
            viewBox="0 0 1100 135" 
            width="100%" 
            height="auto" 
            style={{ 
              display: 'block', 
              width: '100%', 
              maxHeight: '150px',
              overflow: 'visible' 
            }}
          >
            <defs>
              <linearGradient id="footerWordmarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isLight ? "#090E1A" : "#FFFFFF"} stopOpacity="1" />
                <stop offset="45%" stopColor={isLight ? "#334155" : "#E2E8F0"} stopOpacity="0.85" />
                <stop offset="85%" stopColor={isLight ? "#64748B" : "#94A3B8"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={isLight ? "#94A3B8" : "#94A3B8"} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <text 
              x="50%" 
              y="62%" 
              textAnchor="middle" 
              dominantBaseline="middle"
              fill="url(#footerWordmarkGrad)" 
              style={{ 
                fontFamily: "'Syne', var(--font-display), sans-serif", 
                fontWeight: '900', 
                fontSize: '118px', 
                letterSpacing: '-0.04em'
              }}
            >
              EditlyFoundry
            </text>
          </svg>
        </div>

        {/* 
          ========================================================================
          3. STRUCTURED 4-COLUMN AGENCY DIRECTORY GRID
          ======================================================================== 
        */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '40px', 
          paddingTop: '30px',
          marginBottom: '50px', 
          borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'left' 
        }}>
          
          {/* Col 1: Studio Identity & Socials */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1rem', fontWeight: '800', color: isLight ? '#05070B' : '#FFFFFF' }}>
                The Editly Foundry Co.
              </span>
            </div>
            <p style={{ color: isLight ? '#64748B' : '#94A3B8', fontSize: '0.85rem', marginBottom: '18px', lineHeight: '1.55' }}>
              Specialized post-production partner for venture-backed SaaS, YouTube creators, and high-growth brands.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>FB</a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>IG</a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>IN</a>
              <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>WA</a>
            </div>
          </div>
          
          {/* Col 2: Disciplines */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.74rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
              DISCIPLINES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/services/reels-shorts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Reels &amp; Shorts Retention (9:16)</Link></li>
              <li><Link href="/services/podcasts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Multi-Cam Podcasts (1-to-30)</Link></li>
              <li><Link href="/services/talking-head" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>YouTube Authority Films</Link></li>
              <li><Link href="/services/ugc-ads" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Performance Video Ads</Link></li>
              <li><Link href="/services/saas-motion" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>3D SaaS UI &amp; Product Demos</Link></li>
            </ul>
          </div>

          {/* Col 3: Platform & OS */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.74rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
              PIPELINE &amp; OS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/work" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Work</Link></li>
              <li><Link href="/workflow" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Production SLA &amp; Workflow</Link></li>
              <li><Link href="/pricing" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Transparent Retainer Vault</Link></li>
              <li><Link href="/calculator" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>In-House Savings Calculator</Link></li>
              <li><Link href="/book-a-call" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Book Strategy Audit</Link></li>
            </ul>
          </div>
          
          {/* Col 4: Studio Hubs */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.74rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
              STUDIO HUBS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem' }}>
                <a href="mailto:theeditlyfoundry@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>theeditlyfoundry@gmail.com</a>
              </li>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem' }}>
                <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+880 1886 755 888</a>
              </li>
              <li style={{ color: isLight ? '#64748B' : '#64748B', fontSize: '0.82rem', marginTop: '4px' }}>
                Dhaka • Dubai • New York
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* 
          ========================================================================
          4. BOTTOM LEGAL COPYRIGHT & META
          ======================================================================== 
        */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)', 
          paddingTop: '25px', 
          color: isLight ? '#94A3B8' : '#64748B', 
          fontSize: '0.8rem' 
        }}>
          <div>
            © {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/legal/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms &amp; Conditions</Link>
            <Link href="/legal/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
          <div className="mono-spec" style={{ fontSize: '0.7rem' }}>
            ENGINEERED WITH NEXT.JS 16 &amp; TURBOPACK
          </div>
        </div>

      </div>
    </footer>
  );
}

