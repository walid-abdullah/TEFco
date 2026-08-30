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
        padding: '70px 0 35px',
        borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
        background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(5, 8, 17, 0.85)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        color: isLight ? '#090E1A' : '#FFFFFF',
        position: 'relative',
        zIndex: 1,
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px', textAlign: 'left' }}>
          
          {/* Col 1 */}
          <div>
            <Link href="/" style={{ fontSize: '1.8rem', fontWeight: 700, color: isLight ? '#090E1A' : '#FFFFFF', textDecoration: 'none', fontFamily: '"Playfair Display", serif', display: 'inline-block', marginBottom: '20px' }}>
              Editly<span style={{ color: '#38BDF8' }}>Foundry</span>
            </Link>
            <p style={{ color: isLight ? '#64748B' : '#94A3B8', fontSize: '0.95rem', marginBottom: '20px', maxWidth: '300px', lineHeight: '1.6' }}>
              Premium video editing agency engineering viral hooks and high-retention content for creators and brands.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 600, color: isLight ? '#090E1A' : '#FFFFFF' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/work" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>Work & Case Studies</Link></li>
              <li><Link href="/services" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>Services</Link></li>
              <li><Link href="/pricing" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>Pricing Plans</Link></li>
              <li><Link href="/about" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>About Us</Link></li>
              <li><Link href="/career" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>Careers</Link></li>
              <li><Link href="/contact" className="footer-link" style={{ color: isLight ? '#475569' : '#94A3B8' }}>Contact</Link></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 600, color: isLight ? '#090E1A' : '#FFFFFF' }}>Contact & Locations</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.95rem' }}><i className="fa-solid fa-envelope" style={{ marginRight: '10px', width: '16px', color: '#38BDF8' }}></i> <a href="mailto:theeditlyfoundry@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>theeditlyfoundry@gmail.com</a></li>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.95rem' }}><i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', width: '16px', color: '#22c55e' }}></i> <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+880 1886 755 888</a></li>
              <li style={{ color: isLight ? '#475569' : '#94A3B8', fontSize: '0.95rem', marginTop: '6px' }}><i className="fa-solid fa-location-dot" style={{ marginRight: '10px', width: '16px', color: '#F59E0B' }}></i> Dhaka • Dubai • New York</li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', borderTop: isLight ? '1px solid rgba(15,23,42,0.06)' : '1px solid rgba(255,255,255,0.08)', paddingTop: '25px', color: isLight ? '#94A3B8' : '#64748B', fontSize: '0.88rem' }}>
          © {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
