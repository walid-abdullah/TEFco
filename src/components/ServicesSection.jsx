"use client";

import React from 'react';
import Link from 'next/link';

export default function ServicesSection({ subtitle, title1, title2, description }) {
  const services = [
    {
      id: 'reels',
      slug: 'reels-shorts',
      index: '01',
      tag: '9:16 VIRAL RETENTION',
      title: 'Shorts & Reels Viral Engineering',
      desc: '3-second hook psychology, kinetic word-by-word typography, and pattern interrupts engineered to capture feed algorithms.',
      deliverables: ['3-Sec Pattern Interrupts', 'Hormozi Kinetic Captions', 'Sound Design & Pops', '48-Hour SLA Batching'],
      icon: 'fa-brands fa-tiktok',
      badgeColor: '#EC4899'
    },
    {
      id: 'podcasts',
      slug: 'podcasts',
      index: '02',
      tag: '1-TO-30 CONTENT ENGINE',
      title: 'Multi-Cam Podcasts & Highlights',
      desc: 'Sub-frame multi-camera switching, studio audio de-noising (-14 LUFS), and extraction of 10–20 viral micro clips per episode.',
      deliverables: ['Intelligent Speaker Tracking', 'iZotope RX Sound Mastering', 'Rec.709 Color Harmonization', '10-20 Viral Reels Extracted'],
      icon: 'fa-solid fa-microphone-lines',
      badgeColor: '#8B5CF6'
    },
    {
      id: 'talking-head',
      slug: 'talking-head',
      index: '03',
      tag: 'LONG-FORM AUTHORITY',
      title: 'YouTube Thought Leadership',
      desc: 'Documentary story pacing, bespoke animated diagrams, and high-CTR custom thumbnails built for high-ticket trust.',
      deliverables: ['J-Cut Narrative Pacing', 'Custom 2D Vector Diagrams', 'High-CTR YouTube Thumbnails', 'Full SEO Chapters & Tags'],
      icon: 'fa-brands fa-youtube',
      badgeColor: '#EF4444'
    },
    {
      id: 'ugc-ads',
      slug: 'ugc-ads',
      index: '04',
      tag: 'DIRECT RESPONSE ROAS',
      title: 'High-Converting Performance Ads',
      desc: 'Direct-response video creatives with 5x split-test hook variations for rapid media buying scalability on Meta & TikTok.',
      deliverables: ['5x Hook Split-Testing', 'Dynamic Pricing Popups', '9:16, 1:1, 4:5 Formats', 'Fast Campaign Turnaround'],
      icon: 'fa-solid fa-chart-line',
      badgeColor: '#10B981'
    },
    {
      id: 'saas-motion',
      slug: 'saas-motion',
      index: '05',
      tag: 'APPLE-GRADE MOTION',
      title: '3D SaaS & Product Demos',
      desc: 'Pixel-perfect vector UI reconstruction, 60FPS dynamic cursor kinetics, and high-converting Product Hunt launch videos.',
      deliverables: ['Vector UI Reconstruction', '60FPS Bezier Cursor Motion', '3D Isometric Device Mockups', 'Full Source .AEP Files'],
      icon: 'fa-solid fa-wand-magic-sparkles',
      badgeColor: '#38BDF8'
    }
  ];

  return (
    <section className="services section-padding" id="services" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ marginBottom: '45px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>CORE PRODUCTION DISCIPLINES</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '2.8rem', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Bespoke Post-Production <span className="combination-font">Infrastructure</span>
          </h2>
          <p className="section-description" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
            We do not use cookie-cutter templates. Every video discipline is engineered with platform-native algorithms and conversion psychology.
          </p>
        </div>

        {/* Linear Hardware Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="glass-card pop-hover"
              style={{
                borderRadius: '16px',
                padding: '28px',
                background: '#080C14',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gridColumn: idx === 4 ? 'span 2' : 'auto'
              }}
            >
              <div>
                {/* Top Module Metadata Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span className="mono-tag" style={{ color: srv.badgeColor, background: 'rgba(255,255,255,0.03)' }}>
                    {srv.tag}
                  </span>
                  <span className="mono-spec" style={{ color: 'var(--text-muted)' }}>
                    SYS_MOD_{srv.index}
                  </span>
                </div>

                {/* Service Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '0 0 10px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  {srv.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0 0 20px' }}>
                  {srv.desc}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
                  {srv.deliverables.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#E2E8F0' }}>
                      <i className="fa-solid fa-check" style={{ color: srv.badgeColor, fontSize: '0.72rem' }}></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Link
                  href={`/services/${srv.slug}`}
                  className="btn btn-outline"
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '700', flex: 1, textAlign: 'center' }}
                >
                  <span>Explore Details</span>
                  <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px', fontSize: '0.72rem' }}></i>
                </Link>
                <Link
                  href={`/book-a-call?service=${encodeURIComponent(srv.title)}`}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '700' }}
                >
                  <span>Book</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
