"use client";

import Link from 'next/link';
import { useExperiment } from '@/lib/experiments';

const heroConfigs = {
  control: {
    primary: { href: '/work', label: 'Explore Portfolio', analytics: 'homepage_hero_portfolio' },
    secondary: { href: '/services', label: 'View Services', analytics: 'homepage_hero_services' },
    eyebrow: 'Premium Video Production Agency',
  },
  risk_reversal: {
    primary: { href: '/book-a-call', label: 'Book a 15-Min Growth Audit', analytics: 'homepage_hero_audit' },
    secondary: { href: '/work', label: 'See Our Work', analytics: 'homepage_hero_work' },
    eyebrow: 'Guaranteed to improve conversion',
  },
  proof_first: {
    primary: { href: '/book-a-call', label: 'Get My Free Strategy Call', analytics: 'homepage_hero_strategy' },
    secondary: { href: '/services', label: 'Compare Service Plans', analytics: 'homepage_hero_compare' },
    eyebrow: 'Trusted by fast-scaling brands',
  },
};

export default function HomepageHeroExperiment({ heroBadge, heroTitle1, heroTitle2, heroDescription }) {
  const variant = useExperiment('homepage_hero_variant', ['control', 'risk_reversal', 'proof_first'], 'control');
  const config = heroConfigs[variant] || heroConfigs.control;

  return (
    <div className="luxury-hero-shell">
      <div className="luxury-hero-badge badge glow-badge">
        <span className="pulse-radar" aria-hidden="true"></span>
        <span>{config.eyebrow || heroBadge}</span>
      </div>

      <div className="luxury-hero-kicker">Performance creative engineered to convert scrolls into pipeline.</div>

      <h1 className="hero-title">
        <span className="luxury-word-line">Elevate Your</span>
        <span className="luxury-word-line">Video Projects.</span>
        <span className="luxury-word-line luxury-word-line--accent">Dominate Every Feed.</span>
      </h1>

      <p className="hero-description">
        {heroDescription}
      </p>

      {/* Clean Minimal Studio Feature Line */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        flexWrap: 'wrap',
        fontSize: '0.84rem',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        marginBottom: '22px'
      }}>
        <span>48h Fast Turnaround</span>
        <span style={{ color: 'var(--accent-blue-light)', opacity: 0.6 }}>•</span>
        <span>Frame.io Workflow</span>
        <span style={{ color: 'var(--accent-blue-light)', opacity: 0.6 }}>•</span>
        <span>Conversion-First Creative</span>
      </div>

      <div className="luxury-cta-group">
        <Link
          href={config.primary.href}
          className="btn btn-primary pop-btn luxury-cta luxury-cta--primary"
          data-analytics-id={config.primary.analytics}
          data-analytics-label={config.primary.label}
          data-analytics-location="homepage_hero"
        >
          <span>{config.primary.label}</span>
          <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.88rem' }}></i>
        </Link>

        <Link
          href={config.secondary.href}
          className="btn btn-outline pop-btn luxury-cta luxury-cta--secondary"
          data-analytics-id={config.secondary.analytics}
          data-analytics-label={config.secondary.label}
          data-analytics-location="homepage_hero"
        >
          <span>{config.secondary.label}</span>
        </Link>
      </div>
    </div>
  );
}
