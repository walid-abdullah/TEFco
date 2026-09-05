"use client";

import React from 'react';

export default function ServicesMatrix() {
  const serviceCategories = [
    {
      title: "Short-Form Video",
      icon: "fa-brands fa-tiktok",
      items: [
        "TikTok & Reels Editing",
        "YouTube Shorts Optimization",
        "Kinetic Typography Captions",
        "Sound FX & Trending Audio",
        "Retention Hook Engineering",
        "Pattern Interrupt Transitions"
      ]
    },
    {
      title: "Long-Form & Podcasts",
      icon: "fa-solid fa-microphone-lines",
      items: [
        "Full-Length Podcast Mastering",
        "Multi-Camera Angle Switching",
        "Talking Head Video YouTube",
        "Audio Cleaning & Sweetening",
        "Documentary Style Visuals",
        "Color Correction & LUTs"
      ]
    },
    {
      title: "Ads & E-Commerce",
      icon: "fa-solid fa-chart-line",
      items: [
        "High-Converting UGC Video Ads",
        "Meta & TikTok Direct-Response Ads",
        "Product Walkthrough Videos",
        "Hook Variation Split-Testing",
        "Dynamic Price Tag Callouts",
        "Story & Carousel Video Ads"
      ]
    },
    {
      title: "Motion & Branding",
      icon: "fa-solid fa-wand-magic-sparkles",
      items: [
        "High-CTR YouTube Thumbnails",
        "SaaS Animated UI Demonstrations",
        "Custom Animated Brand Logos",
        "2D Vector Explainer Motion",
        "Subtitles & Closed Captions (.SRT)",
        "Raw Project Source Files (.PRPROJ)"
      ]
    }
  ];

  return (
    <section className="section-padding section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          <h2 className="section-title" style={{ fontSize: '2.6rem', marginBottom: '15px' }}>
            All Creative Editing Services <span className="combination-font">Included in Every Retainer</span>
          </h2>
          <p className="section-description" style={{ color: 'var(--text-secondary)' }}>
            One subscription unlocks our entire multi-disciplinary post-production stack. Request anything, anytime.
          </p>
        </div>

        {/* 4-Column Mega Grid (Musemind Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {serviceCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card reveal-on-scroll"
              style={{
                padding: '30px 25px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${idx * 100}ms`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue-light)',
                  fontSize: '1.1rem'
                }}>
                  <i className={category.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {category.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-blue-light)',
                      display: 'inline-block',
                      flexShrink: 0
                    }}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
