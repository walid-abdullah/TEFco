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
        padding: '90px 0 30px',
        borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
        background: isLight ? 'rgba(255, 255, 255, 0.95)' : '#05070B',
        color: isLight ? '#090E1A' : '#FFFFFF',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        transition: 'background 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* Subtle Bottom Ambient Mesh Glow behind the giant brand text */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '240px',
          background: isLight 
            ? 'radial-gradient(ellipse at bottom, rgba(15, 23, 42, 0.03) 0%, rgba(255, 255, 255, 0) 70%)'
            : 'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.05) 0%, rgba(5, 7, 11, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* Top Status & SLA Header Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          paddingBottom: '36px',
          marginBottom: '50px',
          borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ 
              width: '7px', 
              height: '7px', 
              borderRadius: '50%', 
              background: '#22C55E', 
              boxShadow: '0 0 8px #22C55E',
              display: 'inline-block' 
            }}></span>
            <span className="mono-spec" style={{ color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '700', fontSize: '0.78rem' }}>
              GLOBAL POST-PRODUCTION PIPELINE ACTIVE
            </span>
          </div>

          <div className="mono-spec" style={{ color: isLight ? '#64748B' : '#94A3B8', fontSize: '0.72rem' }}>
            DISPATCH LATENCY: &lt;48H SLA • PRORES 422 HQ • -14 LUFS AUDIO
          </div>
        </div>

        {/* 4-Column Structured Agency Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '40px', 
          marginBottom: '60px', 
          textAlign: 'left' 
        }}>
          
          {/* Col 1: Brand & Identity */}
          <div style={{ maxWidth: '320px' }}>
            <Link 
              href="/" 
              style={{ 
                fontSize: '1.35rem', 
                fontWeight: 800, 
                color: isLight ? '#090E1A' : '#FFFFFF', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px', 
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)'
              }}
            >
              <span>EditlyFoundry</span>
              <span className="mono-spec" style={{ 
                fontSize: '0.62rem', 
                color: isLight ? '#475569' : '#94A3B8', 
                background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}>
                LAB
              </span>
            </Link>
            <p style={{ color: isLight ? '#64748B' : '#94A3B8', fontSize: '0.86rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Post-production engineering studio crafting high-retention video content, SaaS launch motion, and creator authority systems.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>FB</a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>IG</a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>IN</a>
              <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.72rem', padding: '4px 8px' }}>WA</a>
            </div>
          </div>
          
          {/* Col 2: Disciplines & Services */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.75rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
              DISCIPLINES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/services/reels-shorts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Reels &amp; Shorts Retention</Link></li>
              <li><Link href="/services/podcasts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Multi-Cam Podcasts (1-to-30)</Link></li>
              <li><Link href="/services/talking-head" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>YouTube Authority Films</Link></li>
              <li><Link href="/services/ugc-ads" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Performance UGC Ads</Link></li>
              <li><Link href="/services/saas-motion" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>3D SaaS UI &amp; Product Demos</Link></li>
            </ul>
          </div>

          {/* Col 3: Platform & Pipeline */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.75rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
              PIPELINE &amp; OS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/work" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>4K Work Vault (24)</Link></li>
              <li><Link href="/workflow" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Production SLA &amp; Workflow</Link></li>
              <li><Link href="/pricing" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Transparent Retainer Vault</Link></li>
              <li><Link href="/calculator" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>In-House Savings Calculator</Link></li>
              <li><Link href="/book-a-call" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.86rem', textDecoration: 'none' }}>Book Strategy Audit</Link></li>
            </ul>
          </div>
          
          {/* Col 4: Studio Operations */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.75rem', marginBottom: '16px', color: isLight ? '#090E1A' : '#FFFFFF', fontWeight: '800', letterSpacing: '0.06em' }}>
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
        
        {/* Bottom Legal Copyright & Meta */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)', 
          paddingTop: '25px', 
          paddingBottom: '40px',
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
            ENGINEERED WITH NEXT.JS &amp; TURBOPACK
          </div>
        </div>

        {/* 
          ========================================================================
          GIANT MONUMENTAL BRAND TYPOGRAPHY WATERMARK (Design Monks / Momkai / MzMedia)
          ======================================================================== 
        */}
        <div 
          style={{
            width: '100%',
            textAlign: 'center',
            paddingTop: '20px',
            paddingBottom: '10px',
            overflow: 'hidden',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.4rem, 12.2vw, 11.5rem)',
              fontWeight: '900',
              letterSpacing: '-0.05em',
              lineHeight: '0.88',
              whiteSpace: 'nowrap',
              background: isLight 
                ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.14) 0%, rgba(15, 23, 42, 0.03) 100%)'
                : 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.01) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'lowercase',
              transition: 'opacity 0.3s ease'
            }}
          >
            editlyfoundry
          </span>
        </div>

      </div>
    </footer>
  );
}

