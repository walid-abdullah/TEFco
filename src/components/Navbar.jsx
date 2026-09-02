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
    { title: 'Reels & Shorts Viral Editing', slug: 'reels-shorts' },
    { title: 'Multi-Cam Podcasts, Audio & Highlights Clips', slug: 'podcasts' },
    { title: 'YouTube Long-Form & Talking Head', slug: 'talking-head' },
    { title: 'High-Converting UGC & Ads', slug: 'ugc-ads' },
    { title: '3D SaaS & Product Demos', slug: 'saas-motion' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="navbar" 
      id="navbar"
      style={{
        background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(5, 8, 17, 0.78)',
        borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}
    >
      <div className="nav-container navbar-container">
        <Link 
          href="/" 
          className="brand-logo" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ cursor: 'pointer', zIndex: 10 }}
        >
          <span className="logo-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
          <span className="logo-text" style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}>
            Editly<span className="highlight" style={{ color: '#38BDF8' }}>Foundry</span>
          </span>
        </Link>

        <nav 
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} 
          id="navMenu"
          style={{
            background: isMobileMenuOpen ? (isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(5, 8, 17, 0.98)') : 'transparent'
          }}
        >
          {/* Always render Home button first */}
          <Link 
            href="/" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            Home
          </Link>

          {/* Work / Portfolio */}
          <Link 
            href="/work" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            Work
          </Link>

          {/* 2-Column Luxury Services Dropdown */}
          <div 
            className="nav-dropdown-wrapper"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <Link 
              href="/services" 
              className="nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: isLight ? '#475569' : '#94A3B8', display: 'inline-flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
            >
              <span>Services</span>
              <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.65rem', transition: 'transform 0.2s ease' }}></i>
            </Link>

            <div 
              className="nav-dropdown-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '520px',
                background: isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(10, 16, 32, 0.97)',
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '20px',
                padding: '16px',
                boxShadow: isLight ? '0 20px 45px rgba(0,0,0,0.12)' : '0 25px 60px rgba(0,0,0,0.7)',
                zIndex: 10000,
                display: 'none',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px'
              }}
            >
              {serviceItems.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/services#${srv.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: isLight ? '#0F172A' : '#F8FAFC',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    lineHeight: '1.35',
                    transition: 'all 0.18s ease',
                    background: isLight ? 'rgba(15, 23, 42, 0.03)' : 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid transparent',
                    textAlign: 'left',
                    gridColumn: sIdx === 4 ? 'span 2' : 'auto',
                    cursor: 'pointer'
                  }}
                  className="dropdown-item-hover"
                >
                  <span>{srv.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mobile-services-accordion" style={{ display: 'none' }}>
            <button
              type="button"
              className="mobile-services-toggle"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'transparent',
                border: 'none',
                color: isLight ? '#475569' : '#94A3B8',
                padding: '10px 0',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              <span>Services</span>
              <span style={{ fontSize: '1.1rem' }}>{isServicesOpen ? '−' : '+'}</span>
            </button>
            {isServicesOpen && (
              <div className="mobile-services-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '6px' }}>
                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services#${service.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      color: isLight ? '#0F172A' : '#F8FAFC',
                      padding: '10px 12px',
                      background: isLight ? 'rgba(15, 23, 42, 0.03)' : 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link 
            href="/pricing" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            Pricing
          </Link>

          {/* About */}
          <Link 
            href="/about" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            About
          </Link>

          {/* Blogs */}
          <Link 
            href="/blogs" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            Blogs
          </Link>

          {/* Contact */}
          <Link 
            href="/contact" 
            className="nav-link" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: isLight ? '#475569' : '#94A3B8', cursor: 'pointer' }}
          >
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          {/* Apple Glass Luxury Theme Switcher (Sun / Moon) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: isLight ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.08)',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.05rem',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.04)' : '0 4px 15px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {isLight ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Direct CTA (Design Monks Style) */}
          <Link href="/book-a-call" className="btn btn-primary nav-cta">
            <span>Book a Call</span>
            <i className="fa-solid fa-arrow-right"></i>
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
