"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar({ menu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === 'light';
  
  const serviceItems = [
    { 
      title: 'Reels & Shorts Retention', 
      tag: '9:16 VIRAL',
      desc: '3-second hook psychology & kinetic type',
      slug: 'reels-shorts',
      icon: 'fa-brands fa-tiktok'
    },
    { 
      title: 'Multi-Cam Podcasts & Audio', 
      tag: '1-TO-30 ENGINE',
      desc: 'Multitrack audio clean & 4K switching',
      slug: 'podcasts',
      icon: 'fa-solid fa-microphone-lines'
    },
    { 
      title: 'YouTube Authority Films', 
      tag: 'LONG-FORM',
      desc: 'Documentary pacing, J-cuts & bespoke B-roll',
      slug: 'talking-head',
      icon: 'fa-brands fa-youtube'
    },
    { 
      title: 'High-ROAS UGC & Paid Ads', 
      tag: 'DIRECT RESPONSE',
      desc: '5x split-test hooks for Meta & TikTok',
      slug: 'ugc-ads',
      icon: 'fa-solid fa-chart-line'
    },
    { 
      title: '3D SaaS & Product Demos', 
      tag: 'APPLE-GRADE',
      desc: 'Vector UI kinetics & 60fps cursor motion',
      slug: 'saas-motion',
      icon: 'fa-solid fa-wand-magic-sparkles'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="navbar" 
      id="navbar"
      style={{
        background: isLight ? 'rgba(255, 255, 255, 0.88)' : 'rgba(5, 7, 11, 0.85)',
        borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: 'background 0.25s ease, border-color 0.25s ease'
      }}
    >
      <div className="nav-container navbar-container" style={{ height: '72px' }}>
        
        {/* Brand Logo with Monospace Studio Tag */}
        <Link 
          href="/" 
          className="brand-logo" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)'
          }}>
            <i className="fa-solid fa-layer-group"></i>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: '800', 
              fontSize: '1.25rem', 
              letterSpacing: '-0.03em', 
              lineHeight: '1',
              color: isLight ? '#090E1A' : '#F8FAFC' 
            }}>
              Editly<span style={{ color: '#38BDF8' }}>Foundry</span>
            </span>
            <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#64748B', marginTop: '2px', letterSpacing: '0.08em' }}>
              POST-PRODUCTION LAB
            </span>
          </div>
        </Link>

        {/* Linear Floating Menu Bar */}
        <nav 
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} 
          id="navMenu"
          style={{
            background: isMobileMenuOpen ? (isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(5, 7, 11, 0.98)') : 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Link 
            href="/" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            Home
          </Link>

          <Link 
            href="/work" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            Work
          </Link>

          {/* Raycast-style 2-Column Precision Services Dropdown */}
          <div 
            className="nav-dropdown-wrapper"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <Link 
              href="/services" 
              className="nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: isLight ? '#475569' : '#94A3B8', 
                padding: '7px 14px', 
                borderRadius: '6px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '0.88rem', 
                fontWeight: '600',
                cursor: 'pointer' 
              }}
            >
              <span>Services</span>
              <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.62rem', transition: 'transform 0.2s ease', opacity: 0.7 }}></i>
            </Link>

            <div 
              className="nav-dropdown-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '560px',
                background: isLight ? 'rgba(255, 255, 255, 0.98)' : '#080C14',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
                zIndex: 10000,
                display: 'none',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px'
              }}
            >
              {serviceItems.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/services/${srv.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: isLight ? '#0F172A' : '#F8FAFC',
                    transition: 'all 0.15s ease',
                    background: isLight ? 'rgba(15, 23, 42, 0.02)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid transparent',
                    textAlign: 'left',
                    gridColumn: sIdx === 4 ? 'span 2' : 'auto',
                    cursor: 'pointer'
                  }}
                  className="dropdown-item-hover"
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className={srv.icon}></i>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: '700' }}>{srv.title}</span>
                      <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#38BDF8', background: 'rgba(56,189,248,0.12)', padding: '1px 5px', borderRadius: '4px' }}>
                        {srv.tag}
                      </span>
                    </div>
                    <p style={{ margin: '2px 0 0', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                      {srv.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/pricing" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            Pricing
          </Link>

          <Link 
            href="/about" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            About
          </Link>

          <Link 
            href="/blogs" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            Blogs
          </Link>

          <Link 
            href="/contact" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              color: isLight ? '#475569' : '#94A3B8', 
              padding: '7px 14px', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: '600' 
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls: Live Monospace Studio Pill + Theme Toggle + CTA */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Live System Availability Indicator */}
          <div className="mono-tag" style={{ display: 'none' /* Show on desktop */ }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
            <span>STUDIO ONLINE</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: isLight ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.05)',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isLight ? '#0F172A' : '#F8FAFC',
              transition: 'all 0.2s ease'
            }}
          >
            {isLight ? (
              <i className="fa-solid fa-moon" style={{ fontSize: '0.9rem', color: '#2563EB' }}></i>
            ) : (
              <i className="fa-solid fa-sun" style={{ fontSize: '0.9rem', color: '#38BDF8' }}></i>
            )}
          </button>

          {/* Linear Metallic Primary CTA */}
          <Link 
            href="/book-a-call" 
            className="btn btn-primary nav-cta pop-btn"
            style={{
              padding: '9px 18px',
              borderRadius: '8px',
              fontSize: '0.86rem',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Book a Call</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            id="mobileToggle" 
            aria-label="Toggle Menu" 
            onClick={toggleMobileMenu}
            style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>

      </div>
    </header>
  );
}
