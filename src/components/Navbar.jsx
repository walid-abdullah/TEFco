"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar({ menu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCommandPalette = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const serviceItems = [
    { 
      title: 'Reels & Shorts Retention', 
      tag: '9:16 VIRAL',
      desc: '3-second hook psychology, kinetic typography & sound design',
      slug: 'reels-shorts',
      icon: 'fa-brands fa-tiktok'
    },
    { 
      title: 'Multi-Cam Podcasts & Audio', 
      tag: '1-TO-30 ENGINE',
      desc: 'Multi-track audio cleanup, dynamic 4K angle cuts & viral extraction',
      slug: 'podcasts',
      icon: 'fa-solid fa-microphone-lines'
    },
    { 
      title: 'YouTube Authority Films', 
      tag: 'LONG-FORM',
      desc: 'Documentary pacing, custom B-roll, J-cuts & retention hooks',
      slug: 'talking-head',
      icon: 'fa-brands fa-youtube'
    },
    { 
      title: 'High-ROAS UGC & Paid Ads', 
      tag: 'DIRECT RESPONSE',
      desc: '5x split-test hook variations for Meta, TikTok & YouTube Ads',
      slug: 'ugc-ads',
      icon: 'fa-solid fa-chart-line'
    },
    { 
      title: '3D SaaS & Product Demos', 
      tag: 'APPLE-GRADE',
      desc: 'Vector UI kinetics, 60fps cursor motion & feature walkthroughs',
      slug: 'saas-motion',
      icon: 'fa-solid fa-wand-magic-sparkles'
    }
  ];

  return (
    <header className="navbar" id="navbar">
      <div 
        className="navbar-container"
        style={{
          boxShadow: isScrolled 
            ? (isLight ? '0 20px 45px rgba(0,0,0,0.1)' : '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)')
            : undefined
        }}
      >
        
        {/* Brand Logo with Darkroom Monogram */}
        <Link 
          href="/" 
          className="brand-logo" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div className="logo-icon">
            <i className="fa-solid fa-layer-group" style={{ fontSize: '0.9rem' }}></i>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: '800', 
              fontSize: '1.15rem', 
              letterSpacing: '-0.03em', 
              lineHeight: '1.1',
              color: isLight ? '#05070B' : '#FFFFFF' 
            }}>
              TEFco<span style={{ color: '#94A3B8' }}>.</span>
            </span>
            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#64748B', letterSpacing: '0.08em', marginTop: '1px' }}>
              FOUNDRY // LAB
            </span>
          </div>
        </Link>

        {/* Central Floating Navigation Bar */}
        <nav 
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} 
          id="navMenu"
        >
          <Link 
            href="/work" 
            className={`nav-link ${pathname === '/work' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Work</span>
            <span className="mono-spec" style={{ 
              fontSize: '0.65rem', 
              padding: '1px 5px', 
              borderRadius: '4px', 
              background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)',
              color: isLight ? '#475569' : '#94A3B8' 
            }}>
              24
            </span>
          </Link>

          {/* Raycast-style 5-Card Precision Services Dropdown */}
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className={`nav-link ${pathname?.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px',
                cursor: 'pointer' 
              }}
            >
              <span>Services</span>
              <i 
                className="fa-solid fa-chevron-down" 
                style={{ 
                  fontSize: '0.6rem', 
                  transition: 'transform 0.2s ease', 
                  opacity: 0.6,
                  transform: isServicesOpen ? 'rotate(180deg)' : 'none'
                }}
              ></i>
            </Link>

            {/* Mega Dropdown Panel */}
            <div 
              className="nav-dropdown-menu"
              style={{
                display: isServicesOpen ? 'grid' : 'none',
                position: 'absolute',
                top: 'calc(100% + 12px)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '580px',
                background: isLight ? 'rgba(255, 255, 255, 0.98)' : '#070A12',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '14px',
                boxShadow: isLight ? '0 25px 60px rgba(0,0,0,0.12)' : '0 30px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)',
                zIndex: 10000,
                gridTemplateColumns: '1fr 1fr',
                gap: '10px'
              }}
            >
              {serviceItems.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/services/${srv.slug}`}
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: isLight ? '#0F172A' : '#FFFFFF',
                    transition: 'all 0.15s ease',
                    background: isLight ? 'rgba(15, 23, 42, 0.02)' : 'rgba(255, 255, 255, 0.03)',
                    border: isLight ? '1px solid rgba(15, 23, 42, 0.04)' : '1px solid rgba(255, 255, 255, 0.05)',
                    textAlign: 'left',
                    gridColumn: sIdx === 4 ? 'span 2' : 'auto',
                    cursor: 'pointer'
                  }}
                  className="dropdown-item-hover"
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.06)',
                    border: isLight ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.1)',
                    color: isLight ? '#0F172A' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className={srv.icon}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: '700' }}>{srv.title}</span>
                      <span className="mono-spec" style={{ 
                        fontSize: '0.58rem', 
                        color: isLight ? '#475569' : '#94A3B8', 
                        background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)', 
                        padding: '1px 5px', 
                        borderRadius: '3px' 
                      }}>
                        {srv.tag}
                      </span>
                    </div>
                    <p style={{ margin: '3px 0 0', fontSize: '0.73rem', color: isLight ? '#64748B' : '#94A3B8', lineHeight: '1.3' }}>
                      {srv.desc}
                    </p>
                  </div>
                </Link>
              ))}

              {/* Mega Dropdown Bottom Bar */}
              <div style={{
                gridColumn: 'span 2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                marginTop: '4px',
                borderTop: isLight ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '6px',
                background: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'
              }}>
                <span className="mono-spec" style={{ fontSize: '0.68rem', color: isLight ? '#64748B' : '#94A3B8' }}>
                  CUSTOM RETINAGE PIPELINE
                </span>
                <Link 
                  href="/workflow"
                  onClick={() => setIsServicesOpen(false)}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    color: isLight ? '#05070B' : '#FFFFFF',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Explore Workflow</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/workflow" 
            className={`nav-link ${pathname === '/workflow' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Workflow
          </Link>

          <Link 
            href="/pricing" 
            className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link 
            href="/about" 
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Only Links inside Drawer */}
          {isMobileMenuOpen && (
            <div style={{ width: '100%', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCommandPalette();
                }}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Command Center</span>
                <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#94A3B8' }}>⌘K</span>
              </button>

              <Link 
                href="/book-a-call" 
                className="btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginTop: '8px'
                }}
              >
                Book a Call →
              </Link>
            </div>
          )}
        </nav>

        {/* Right Action Controls: ⌘K Pill + Capacity Radar + Theme + CTA */}
        <div className="nav-actions">
          
          {/* Raycast ⌘K Search Pill Button */}
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Open Command Center"
            style={{
              background: isLight ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.04)',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
              padding: '6px 10px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              color: isLight ? '#475569' : '#94A3B8',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = isLight ? '#05070B' : '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = isLight ? '#475569' : '#94A3B8';
            }}
          >
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '0.72rem' }}></i>
            <span className="mono-spec" style={{ 
              fontSize: '0.65rem', 
              background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', 
              padding: '2px 5px', 
              borderRadius: '4px',
              color: isLight ? '#05070B' : '#FFFFFF' 
            }}>
              ⌘K
            </span>
          </button>

          {/* Live Studio Capacity Radar Indicator */}
          <div 
            className="mono-tag" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 8px',
              borderRadius: '6px',
              background: isLight ? 'rgba(34, 197, 94, 0.08)' : 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              fontSize: '0.65rem',
              fontWeight: '700',
              color: '#22C55E'
            }}
          >
            <span style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: '#22C55E', 
              display: 'inline-block',
              boxShadow: '0 0 8px #22C55E',
              animation: 'pulseGlow 2s infinite'
            }}></span>
            <span style={{ letterSpacing: '0.04em' }}>2 SLOTS</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {isLight ? (
              <i className="fa-solid fa-moon" style={{ fontSize: '0.82rem', color: '#0F172A' }}></i>
            ) : (
              <i className="fa-solid fa-sun" style={{ fontSize: '0.82rem', color: '#FFFFFF' }}></i>
            )}
          </button>

          {/* Solid Titanium White Primary CTA */}
          <Link 
            href="/book-a-call" 
            className="btn btn-primary nav-cta pop-btn"
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Book a Call</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            id="mobileToggle" 
            aria-label="Toggle Menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isLight ? '#05070B' : '#FFFFFF' }}
          >
            <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}></i>
          </button>
        </div>

      </div>
    </header>
  );
}

