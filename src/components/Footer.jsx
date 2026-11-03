"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES_WITH_THEIR_OWN_BOOKING = ['/work', '/contact', '/book-a-call'];

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
  const showCta = !PAGES_WITH_THEIR_OWN_BOOKING.includes(pathname);

  return (
    <footer className="sg-footer on-ink">
      {showCta && (
        <div className="sg-footer-cta on-iris sg-band-reveal">
          <div className="container">
            <h2>Have footage waiting?<br /><span className="combination-font">Let&apos;s make it worth watching.</span></h2>
            <Link href="/book-a-call" className="btn btn-primary">Book a 15-minute call <span aria-hidden="true">→</span></Link>
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

      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <filter id="sg-streak"><feGaussianBlur stdDeviation="46 1.5" /></filter>
      </svg>
      <div className="sg-wordmark" role="img" aria-label="Editly Foundry">
        <span aria-hidden="true">Editly Foundry</span>
        <span aria-hidden="true" className="sg-wordmark-streak">Editly Foundry</span>
      </div>
      </div>
    </footer>
  );
}
