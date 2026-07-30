"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar({ menu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Initialize theme from HTML tag on mount
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <Link href="/" className="brand-logo">
          <span className="logo-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
          <span className="logo-text">Editly<span className="highlight">Foundry</span></span>
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          {menu && menu.length > 0 ? (
            menu.map((item, idx) => (
              <Link key={idx} href={item.link || '#'} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))
          ) : (
            <>
              <Link href="/#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/#portfolio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
              <Link href="/#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/#team" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
              <Link href="/#blogs" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
              <Link href="/#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </>
          )}
        </nav>

        <div className="nav-actions">
          {/* Single Click Quick Theme Toggle Button */}
          <button className="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle Theme" onClick={toggleTheme}>
            <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25rem', height: '1.25rem' }}>
              <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M4.93 4.93l1.41 1.41"></path>
              <path d="M17.66 17.66l1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M6.34 17.66l-1.41 1.41"></path>
              <path d="M19.07 4.93l-1.41 1.41"></path>
            </svg>
            <i className="fa-solid fa-moon icon-moon"></i>
          </button>

          <Link href="/book-a-call" className="btn btn-primary nav-cta">
            <span>Book a Call</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
