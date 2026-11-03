"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES_WITH_THEIR_OWN_BOOKING = ['/work', '/contact', '/book-a-call'];
const LIGHT_FOOTER_PAGES = ['/about', '/workflow', '/career', '/brand-assets'];
const GRID_FOOTER_PAGES = ['/pricing', '/calculator'];
const TILES = Array.from({ length: 70 }, (_, index) => ((index * 37) % 11) / 10);

// Each group of pages closes with its own visual.
function footerStyleFor(pathname) {
  if (PAGES_WITH_THEIR_OWN_BOOKING.includes(pathname)) return 'plain';
  if (LIGHT_FOOTER_PAGES.includes(pathname)) return 'light';
  if (GRID_FOOTER_PAGES.includes(pathname)) return 'grid';
  if (pathname.startsWith('/services') || pathname.startsWith('/case-studies')) return 'mark';
  return 'wordmark';
}

function EFMark() {
  return (
    <svg viewBox="50 60 200 136" fill="none" aria-hidden="true">
      <path d="M63 74H168M63 128H141M63 182H168M63 74V182" stroke="currentColor" strokeWidth="19" strokeLinecap="round" />
      <path d="M195 74V182M195 74H238M195 128H230" stroke="currentColor" strokeOpacity=".6" strokeWidth="17" strokeLinecap="round" />
    </svg>
  );
}

const socials = [
  { href: 'https://www.facebook.com/editly.foundry/', label: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  { href: 'https://www.instagram.com/theeditly_foundry/', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { href: 'https://www.linkedin.com/in/walid-abdullah/', label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in' },
  { href: 'https://wa.me/8801886755888', label: 'WhatsApp', icon: 'fa-brands fa-whatsapp' },
];

const columns = [
  {
    title: 'Services',
    links: [
      ['/services/reels-shorts', 'Reels & Shorts'],
      ['/services/podcasts', 'Podcasts'],
      ['/services/talking-head', 'Talking Head'],
      ['/services/ugc-ads', 'UGC Ads'],
      ['/services/motion-graphics', 'Motion Graphics'],
    ],
  },
  {
    title: 'Studio',
    links: [
      ['/work', 'Work'],
      ['/workflow', 'Workflow'],
      ['/pricing', 'Pricing'],
      ['/calculator', 'Calculator'],
      ['/about', 'About'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['/case-studies', 'Case studies'],
      ['/blogs', 'Blog'],
      ['/career', 'Careers'],
      ['/brand-assets', 'Brand assets'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['/contact', 'Contact us'],
      ['/book-a-call', 'Book a call'],
      ['mailto:theeditlyfoundry@gmail.com', 'Email'],
      ['https://wa.me/8801886755888', 'WhatsApp'],
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const style = footerStyleFor(pathname);
  const isLight = style === 'light';

  return (
    <footer className={`sg-footer is-${style}${isLight ? '' : ' on-ink'}`}>
      {style === 'wordmark' && (
        <div className="sg-footer-cta on-iris sg-band-reveal">
          <div className="container">
            <h2>Have footage waiting?<br /><span className="combination-font">Let&apos;s make it worth watching.</span></h2>
            <Link href="/book-a-call" className="btn btn-primary">Book a call <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      )}

      {style === 'grid' && (
        <div className="sg-fgrid">
          <div className="sg-fgrid-tiles" aria-hidden="true">
            {TILES.map((level, index) => <i key={index} style={{ '--level': level }} />)}
          </div>
          <div className="container">
            <div className="sg-fgrid-mark"><EFMark /></div>
            <h2>Not sure which<br />package fits?</h2>
            <p>Tell us what you publish and your budget. We will suggest the simplest way to do it.</p>
            <Link href="/book-a-call" className="sg-book-cta">Talk it through <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      )}

      {style === 'mark' && (
        <div className="sg-fmark">
          <div className="container">
            <h2>Your next video<br />starts here.</h2>
            <p>Send the footage. We take it from there.</p>
            <Link href="/book-a-call" className="btn btn-primary">Start a project <span aria-hidden="true">→</span></Link>
          </div>
          <div className="sg-fmark-art" aria-hidden="true"><EFMark /></div>
          <div className="sg-fmark-socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                <span><i className={social.icon} aria-hidden="true" />{social.label}</span>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        </div>
      )}

      {isLight && (
        <div className="sg-flight">
          <div className="container">
            <p className="sg-flight-line">Bring us the raw footage. Leave with <strong>videos people finish watching.</strong></p>
            <Link href="/book-a-call" className="sg-flight-pill">
              <img src="/Picture/square.png" alt="" width="44" height="44" loading="lazy" style={{ borderRadius: '50%' }} />
              <span><b>Book a call <i aria-hidden="true">→</i></b><small>Talk to Walid about your project</small></span>
            </Link>
          </div>
        </div>
      )}

      <div className="sg-footer-main">
      <div className="container">
        <div className="sg-footer-grid">
          <div className="sg-footer-about">
            <strong>The Editly Foundry Co.</strong>
            <p>Video editing partner for SaaS teams, YouTube creators and growing brands.</p>
            <div className="sg-footer-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map(([href, label]) => (
                  <li key={href}>
                    {href.startsWith('/') ? <Link href={href}>{label}</Link> : <a href={href}>{label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sg-footer-legal">
          <Link href="/legal/terms">Terms &amp; Conditions</Link>
          <span>© {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.</span>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      {(style === 'wordmark' || style === 'plain') && (
        <>
          <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
            <filter id="sg-streak"><feGaussianBlur stdDeviation="46 1.5" /></filter>
          </svg>
          <div className="sg-wordmark" role="img" aria-label="Editly Foundry">
            <span aria-hidden="true">Editly Foundry</span>
            <span aria-hidden="true" className="sg-wordmark-streak">Editly Foundry</span>
          </div>
        </>
      )}
      {isLight && <div className="sg-flight-word" aria-hidden="true">Editly/Foundry</div>}
      </div>
    </footer>
  );
}
