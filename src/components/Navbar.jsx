"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const serviceItems = [
  { title: 'Reels & Shorts', slug: 'reels-shorts' },
  { title: 'Podcasts', slug: 'podcasts' },
  { title: 'Talking Head', slug: 'talking-head' },
  { title: 'UGC Ads', slug: 'ugc-ads' },
  { title: 'Motion Graphics', slug: 'motion-graphics' },
];

const links = [
  { href: '/work', label: 'Work' },
  { href: '/workflow', label: 'Workflow' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const linkClass = (active) => `sg-nav-link${active ? ' is-active' : ''}`;

  return (
    <header className={`sg-nav${isScrolled ? ' is-scrolled' : ''}`} id="navbar">
      <div className="sg-nav-bar">
        <Link href="/" className="sg-brand" onClick={closeMenus} aria-label="The Editly Foundry Co. home">
          <img src="/Logo/editly-foundry-mark.svg" alt="" width="34" height="34" />
          <span>TEFco<b>.</b></span>
        </Link>

        <nav className="sg-nav-links" aria-label="Main">
          <Link href="/work" className={linkClass(pathname === '/work')}>Work</Link>
          <div
            className={`sg-nav-services${isServicesOpen ? ' is-open' : ''}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocus={() => setIsServicesOpen(true)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsServicesOpen(false); }}
          >
            <Link href="/services" className={linkClass(pathname?.startsWith('/services'))} onClick={closeMenus} aria-haspopup="true" aria-expanded={isServicesOpen}>
              Services <i className="fa-solid fa-chevron-down" aria-hidden="true" />
            </Link>
            <div className="sg-mega">
              <div className="sg-mega-grid">
                {serviceItems.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`} className="sg-mega-item" onClick={closeMenus}>{item.title}</Link>
                ))}
                <Link href="/services" className="sg-mega-all" onClick={closeMenus}>All services <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>{link.label}</Link>
          ))}
        </nav>

        <div className="sg-nav-actions">
          <Link href="/book-a-call" className="btn btn-primary sg-nav-cta">Book a call</Link>
          <button
            type="button"
            className="sg-nav-toggle"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'} aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sg-mobile-menu">
          <nav aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenus}>{link.label}</Link>
            ))}
            <Link href="/services" onClick={closeMenus}>Services</Link>
          </nav>
          <div className="sg-mobile-services">
            {serviceItems.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} onClick={closeMenus}>{item.title}</Link>
            ))}
          </div>
          <Link href="/book-a-call" className="btn btn-primary" onClick={closeMenus}>Book a call</Link>
        </div>
      )}
    </header>
  );
}
