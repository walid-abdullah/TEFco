"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from './BrandLogo';

const EMAIL = 'theeditlyfoundry@gmail.com';

// The big closing line on pages that end on a sentence.
const CLOSING_LINES = {
  '/work': 'Yours could be next.',
  '/contact': 'Tell us everything.',
  '/book-a-call': 'Talk soon.',
  '/about': 'Bring the footage.',
  '/workflow': 'Send the first file.',
  '/career': 'Cut with us.',
  '/brand-assets': 'Use it well.',
};
const DEFAULT_CLOSING_LINE = 'Your footage, finished.';

// The big word on pages that end on what the visitor came to see.
const CLOSING_WORDS = {
  '/services/reels-shorts': 'Reels',
  '/services/podcasts': 'Podcasts',
  '/services/talking-head': 'Talking Head',
  '/services/ugc-ads': 'UGC Ads',
  '/services/motion-graphics': 'Motion',
};

const LIGHT_PAGES = ['/about', '/workflow', '/career', '/brand-assets'];

const BEAM_COPY = {
  '/pricing': { title: <>Not sure which<br />package fits?</>, text: 'Tell us what you publish and your budget. We will suggest the simplest way to do it.' },
  '/calculator': { title: <>Want a real<br />number?</>, text: 'Send us what you publish each month. We will come back with an exact price.' },
};

function footerFor(pathname) {
  if (pathname === '/') return { style: 'logo' };
  if (BEAM_COPY[pathname]) return { style: 'beam', copy: BEAM_COPY[pathname] };
  if (pathname.startsWith('/case-studies')) return { style: 'word', word: 'Results' };
  if (pathname.startsWith('/services')) return { style: 'word', word: CLOSING_WORDS[pathname] || 'Services' };
  return {
    style: 'line',
    line: CLOSING_LINES[pathname] || DEFAULT_CLOSING_LINE,
    isLight: LIGHT_PAGES.includes(pathname),
  };
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
      [`mailto:${EMAIL}`, 'Email'],
      ['https://wa.me/8801886755888', 'WhatsApp'],
    ],
  },
];

function Socials() {
  return (
    <div className="sg-footer-socials">
      {socials.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
          <i className={social.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function Columns() {
  return columns.map((column) => (
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
  ));
}

function Legal() {
  return (
    <div className="sg-footer-legal">
      <Link href="/legal/terms">Terms &amp; Conditions</Link>
      <span>© {new Date().getFullYear()} The Editly Foundry Co. All rights reserved.</span>
      <Link href="/legal/privacy-policy">Privacy Policy</Link>
    </div>
  );
}

function FullFooter() {
  return (
    <div className="container">
      <div className="sg-footer-grid">
        <div className="sg-footer-about">
          <BrandLogo variant="color-on-dark" className="sg-footer-logo" />
          <p>Video editing partner for SaaS teams, YouTube creators and growing brands.</p>
          <Socials />
        </div>
        <Columns />
      </div>
      <Legal />
    </div>
  );
}

// Home: the whole logo, sharp at the top and melting into brand light.
function LogoFooter() {
  return (
    <>
      <div className="sg-footer-cta on-iris sg-band-reveal">
        <div className="container">
          <h2>Have footage waiting?<br /><span className="combination-font">Let&apos;s make it worth watching.</span></h2>
          <Link href="/book-a-call" className="btn btn-primary">Book a call <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="sg-footer-main">
        <FullFooter />
        <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
          <filter id="sg-streak" x="-20%" y="-5%" width="140%" height="110%"><feGaussianBlur stdDeviation="46 1.5" /></filter>
        </svg>
        <div className="sg-wordmark" aria-hidden="true">
          <BrandLogo variant="white" alt="" />
          <BrandLogo variant="white" alt="" className="sg-wordmark-streak" />
        </div>
      </div>
    </>
  );
}

// Pricing and calculator: a beam of light landing on the logo's D.
function BeamFooter({ copy }) {
  return (
    <>
      <div className="sg-fbeam">
        <div className="container">
          <h2>{copy.title}</h2>
          <p>{copy.text}</p>
          <Link href="/book-a-call" className="sg-book-cta">Talk it through <span aria-hidden="true">→</span></Link>
        </div>
        <div className="sg-fbeam-art" aria-hidden="true">
          <i className="sg-fbeam-ring" />
          <i className="sg-fbeam-dome" />
          <i className="sg-fbeam-column" />
          <i className="sg-fbeam-mark" />
        </div>
      </div>
      <div className="sg-footer-main"><FullFooter /></div>
    </>
  );
}

// Services and case studies: a card with one large word lit from below.
function WordFooter({ word }) {
  return (
    <div className="sg-fword">
      <div className="sg-fword-card">
        <div className="sg-fword-top">
          <Columns />
          <div className="sg-fword-side">
            <BrandLogo variant="color-on-dark" className="sg-footer-logo" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <Socials />
            <Link href="/book-a-call" className="sg-link">Start a project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="sg-fword-big" style={{ '--chars': word.length }} aria-hidden="true">
          <span>{word}</span>
          <span className="sg-fword-blur">{word}</span>
        </div>
      </div>
      <div className="container"><Legal /></div>
    </div>
  );
}

// Everything else: small logo and contact, then one large sentence.
function LineFooter({ line, isLight, pathname }) {
  return (
    <div className="sg-fline">
      <div className="sg-fline-smoke" aria-hidden="true" />
      <div className="container">
        <div className="sg-fline-top">
          <BrandLogo variant={isLight ? 'color-on-white' : 'color-on-dark'} className="sg-footer-logo" />
          <div className="sg-fline-contact">
            <span>For queries</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <Socials />
          </div>
        </div>
        <div className="sg-fline-links"><Columns /></div>
      </div>
      <div className="sg-fline-big">
        <Link href={pathname === '/book-a-call' ? '/contact' : '/book-a-call'} style={{ '--chars': line.length }}>{line}</Link>
      </div>
      <div className="container"><Legal /></div>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const { style, copy, word, line, isLight } = footerFor(pathname);

  return (
    <footer className={`sg-footer is-${style}${isLight ? ' is-light' : ' on-ink'}`}>
      {style === 'logo' && <LogoFooter />}
      {style === 'beam' && <BeamFooter copy={copy} />}
      {style === 'word' && <WordFooter word={word} />}
      {style === 'line' && <LineFooter line={line} isLight={isLight} pathname={pathname} />}
    </footer>
  );
}
