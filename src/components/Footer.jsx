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
        padding: '80px 0 35px',
        borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
        background: isLight ? 'rgba(255, 255, 255, 0.92)' : '#05070B',
        color: isLight ? '#090E1A' : '#FFFFFF',
        position: 'relative',
        zIndex: 1,
        transition: 'background 0.25s ease, border-color 0.25s ease'
      }}
    >
      <div className="container">
        
        {/* Top Spec Banner */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          paddingBottom: '40px',
          marginBottom: '45px',
          borderBottom: isLight ? '1px solid rgba(15,23,42,0.06)' : '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
            <span className="mono-spec" style={{ color: isLight ? '#090E1A' : '#F8FAFC', fontWeight: '700' }}>
              GLOBAL POST-PRODUCTION PIPELINE ACTIVE
            </span>
          </div>

          <div className="mono-spec" style={{ color: 'var(--text-muted)' }}>
            DISPATCH LATENCY: &lt;48H SLA • PRORES 422 HQ • -14 LUFS AUDIO
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px', textAlign: 'left' }}>
          
          {/* Col 1: Brand & Identity */}
          <div>
            <Link href="/" style={{ fontSize: '1.4rem', fontWeight: 800, color: isLight ? '#090E1A' : '#FFFFFF', textDecoration: 'none', display: 'inline-block', marginBottom: '14px', letterSpacing: '-0.03em' }}>
              Editly<span style={{ color: '#38BDF8' }}>Foundry</span>
            </Link>
            <p style={{ color: isLight ? '#64748B' : '#94A3B8', fontSize: '0.88rem', marginBottom: '22px', maxWidth: '300px', lineHeight: '1.6' }}>
              Post-production engineering platform crafting high-retention video content, SaaS launch motion, and creator authority systems.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-facebook-f"></i> FB</a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-instagram"></i> IG</a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noopener noreferrer" className="mono-tag" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-linkedin-in"></i> IN</a>
            </div>
          </div>
          
          {/* Col 2: Navigation & Services */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.78rem', marginBottom: '18px', color: isLight ? '#090E1A' : '#F8FAFC', fontWeight: '800' }}>DISCIPLINES</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/services/reels-shorts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>Reels & Shorts Retention</Link></li>
              <li><Link href="/services/podcasts" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>Multi-Cam Podcasts</Link></li>
              <li><Link href="/services/talking-head" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>YouTube Authority Films</Link></li>
              <li><Link href="/services/ugc-ads" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>Performance UGC Ads</Link></li>
              <li><Link href="/services/saas-motion" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>3D SaaS UI Demos</Link></li>
            </ul>
          </div>
          
          {/* Col 3: Direct Studio Operations */}
          <div>
            <h4 className="mono-spec" style={{ fontSize: '0.78rem', marginBottom: '18px', color: isLight ? '#090E1A' : '#F8FAFC', fontWeight: '800' }}>STUDIO HUBS</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>
                <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: '#38BDF8', fontSize: '0.8rem' }}></i>
                <a href="mailto:theeditlyfoundry@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>theeditlyfoundry@gmail.com</a>
              </li>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem' }}>
                <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px', color: '#22c55e', fontSize: '0.85rem' }}></i>
                <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+880 1886 755 888</a>
              </li>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.88rem', marginTop: '4px' }}>
                <i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: '#F59E0B', fontSize: '0.8rem' }}></i>
                Dhaka • Dubai • New York
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Legal Copyright */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: isLight ? '1px solid rgba(15,23,42,0.06)' : '1px solid rgba(255,255,255,0.08)', 
          paddingTop: '25px', 
          color: isLight ? '#94A3B8' : '#64748B', 
          fontSize: '0.82rem' 
        }}>
          <div>
            © {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.
          </div>
          <div className="mono-spec" style={{ fontSize: '0.72rem' }}>
            ENGINEERED WITH NEXT.JS &amp; TURBOPACK
          </div>
        </div>
      </div>
    </footer>
  );
}
