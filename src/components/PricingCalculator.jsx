"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingCalculator() {
  const [videoCount, setVideoCount] = useState(16);
  const [selectedFormats, setSelectedFormats] = useState(['short-form', 'podcasts']);
  const [turnaround, setTurnaround] = useState('standard'); // 'standard' (48h) or 'express' (24h)

  const formats = [
    { id: 'short-form', name: 'Shorts & Reels (9:16)', baseRate: 50 },
    { id: 'podcasts', name: 'Podcasts & Long-Form', baseRate: 75 },
    { id: 'saas-ads', name: 'Motion Graphics', baseRate: 110 },
    { id: 'ugc-ads', name: 'Performance UGC Ads', baseRate: 65 }
  ];

  const toggleFormat = (id) => {
    if (selectedFormats.includes(id)) {
      if (selectedFormats.length > 1) {
        setSelectedFormats(selectedFormats.filter(f => f !== id));
      }
    } else {
      setSelectedFormats([...selectedFormats, id]);
    }
  };

  // Dynamic pricing calculation:
  // Base 12 videos = ~$999
  // 24 videos = ~$1,499
  // 40+ videos = ~$2,499
  const avgRate = selectedFormats.reduce((acc, fId) => {
    const f = formats.find(item => item.id === fId);
    return acc + (f ? f.baseRate : 60);
  }, 0) / selectedFormats.length;

  let computedPrice = Math.round(500 + (videoCount * avgRate * 0.75));
  if (computedPrice < 999) computedPrice = 999;
  if (turnaround === 'express') computedPrice += 350;

  // In-House comparison (Senior Editor $7,000 + Motion Designer $4,500 = $11,500/mo)
  const inHouseCost = 11500;
  const monthlySavings = Math.max(0, inHouseCost - computedPrice);
  const annualSavings = monthlySavings * 12;

  const serviceSummary = selectedFormats
    .map((formatId) => formats.find((item) => item.id === formatId)?.name)
    .filter(Boolean)
    .join(', ') || 'Post-Production';

  const bookCallHref = `/book-a-call?source=calculator&service=${encodeURIComponent(serviceSummary)}&volume=${videoCount}&turnaround=${turnaround}&budget=${encodeURIComponent(`$${computedPrice.toLocaleString()}/mo`)}`;

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto 44px' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', letterSpacing: '-0.03em', margin: '0 0 14px' }}>
            Calculate Output & <span className="combination-font" style={{ color: 'var(--theme-danger)' }}>Monthly Investment</span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', color: 'var(--theme-contrast-muted)', lineHeight: '1.6' }}>
            Slide to estimate your video requirements. See instant monthly retainer pricing and annual savings vs. in-house hiring.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '24px',
          alignItems: 'start'
        }}>

          {/* LEFT: Clean Controls Card */}
          <div 
            className="glass-card" 
            style={{
              padding: '36px 32px',
              borderRadius: '20px',
              border: '1px solid var(--theme-border)',
              background: 'var(--theme-surface)',
              boxShadow: 'var(--glass-shadow)'
            }}
          >
            {/* Control 1: Video Volume Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <label style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  Monthly Videos Needed:
                </label>
                <span className="mono-spec" style={{
                  padding: '4px 14px',
                  borderRadius: '999px',
                  background: 'var(--theme-danger-soft)',
                  border: '1px solid var(--theme-danger-border)',
                  color: 'var(--theme-danger)',
                  fontWeight: '800',
                  fontSize: '1rem'
                }}>
                  {videoCount} Videos / mo
                </span>
              </div>

              <input 
                type="range" 
                min="6" 
                max="50" 
                step="1"
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  accentColor: 'var(--theme-danger)',
                  cursor: 'pointer',
                  background: 'var(--theme-border-soft)'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '8px' }} className="mono-spec">
                <span>Starter (6-12)</span>
                <span>Growth (24)</span>
                <span>Scale (50+)</span>
              </div>
            </div>

            {/* Control 2: Target Formats */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Select Content Formats:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {formats.map(fmt => {
                  const isSelected = selectedFormats.includes(fmt.id);
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => toggleFormat(fmt.id)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: isSelected ? '1px solid var(--theme-danger-border)' : '1px solid var(--theme-border-soft)',
                        background: isSelected ? 'var(--theme-danger-soft)' : 'var(--theme-surface-soft)',
                        color: isSelected ? 'var(--theme-on-accent)' : 'var(--theme-contrast-muted)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.14s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', fontWeight: isSelected ? '700' : '500' }}>
                        {fmt.name}
                      </span>
                      {isSelected && <i className="fa-solid fa-check" style={{ color: 'var(--theme-danger)', fontSize: '0.72rem' }}></i>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Turnaround SLA */}
            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.98rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Turnaround SLA Speed:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setTurnaround('standard')}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    border: turnaround === 'standard' ? '1px solid var(--theme-danger-border)' : '1px solid var(--theme-border-soft)',
                    background: turnaround === 'standard' ? 'var(--theme-danger-soft)' : 'var(--theme-surface-soft)',
                    color: turnaround === 'standard' ? 'var(--theme-on-accent)' : 'var(--theme-contrast-muted)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.14s ease'
                  }}
                >
                  <div style={{ fontSize: '0.86rem', fontWeight: '700' }}>Standard SLA</div>
                  <div className="mono-spec" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>24-48 Hours</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTurnaround('express')}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    border: turnaround === 'express' ? '1px solid var(--theme-danger-border)' : '1px solid var(--theme-border-soft)',
                    background: turnaround === 'express' ? 'var(--theme-danger-soft)' : 'var(--theme-surface-soft)',
                    color: turnaround === 'express' ? 'var(--theme-on-accent)' : 'var(--theme-contrast-muted)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.14s ease'
                  }}
                >
                  <div style={{ fontSize: '0.86rem', fontWeight: '700' }}>Express Priority</div>
                  <div className="mono-spec" style={{ fontSize: '0.68rem', color: 'var(--theme-danger)', marginTop: '2px' }}>Same-Day / 24H</div>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Price & ROI Output Card */}
          <div 
            className="glass-card" 
            style={{
              padding: '36px 32px',
              borderRadius: '20px',
              border: '1px solid var(--theme-danger-border)',
              background: 'var(--theme-surface-strong)',
              boxShadow: 'var(--glass-shadow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '30px',
              background: 'var(--theme-positive-soft)',
              color: 'var(--theme-positive)',
              fontWeight: '800',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px',
              border: '1px solid var(--theme-positive-border)'
            }}>
              ★ Guaranteed High ROI
            </div>

            {/* Estimated Retainer */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                Estimated Foundry Retainer:
              </div>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: '1.1' }}>
                ${computedPrice.toLocaleString()}
                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-secondary)' }}> / month</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Includes dedicated Senior Editor, Motion Designer & Producer Pod.
              </div>
            </div>

            {/* In-House vs Foundry Savings Comparison Box */}
            <div style={{
              background: 'var(--theme-surface-soft)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--theme-border-soft)',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Full-Time In-House Team:</span>
                <span style={{ fontWeight: '700', textDecoration: 'line-through', color: 'var(--theme-danger)' }}>${inHouseCost.toLocaleString()}/mo</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>The Editly Foundry Pod:</span>
                <span style={{ fontWeight: '800', color: 'var(--theme-positive)' }}>${computedPrice.toLocaleString()}/mo</span>
              </div>
              <div style={{
                borderTop: '1px dashed var(--theme-border)',
                paddingTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Estimated Annual Savings:</span>
                <span style={{ fontWeight: '900', fontSize: '1.4rem', color: 'var(--theme-positive)' }}>
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link 
                href={bookCallHref}
                className="btn btn-primary btn-lg"
                data-analytics-id="pricing_calculator_cta"
                data-analytics-label="Lock In This Retainer"
                data-analytics-location="pricing_calculator"
                data-analytics-value={computedPrice}
                style={{ width: '100%', textAlign: 'center', borderRadius: '12px', padding: '14px', fontWeight: '800', fontSize: '0.95rem' }}
              >
                <span>Lock In This Retainer ➔</span>
              </Link>
              
              <a 
                href="https://wa.me/8801886755888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                data-analytics-id="pricing_whatsapp_cta"
                data-analytics-label="Discuss Custom Budget with Walid"
                data-analytics-location="pricing_calculator"
                data-analytics-value={computedPrice}
                style={{ width: '100%', textAlign: 'center', borderRadius: '12px', padding: '12px', color: 'var(--theme-positive)', borderColor: 'var(--theme-positive-border)', fontSize: '0.88rem' }}
              >
                <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>
                <span>Discuss Custom Budget with Walid</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
