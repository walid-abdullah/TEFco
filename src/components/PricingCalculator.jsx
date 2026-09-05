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
    { id: 'saas-ads', name: '3D SaaS UI & Demos', baseRate: 110 },
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#E2E8F0', letterSpacing: '0.05em' }}>
              RETAINER SIMULATOR // ROI CALCULATOR
            </span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', letterSpacing: '-0.03em', margin: '0 0 14px' }}>
            Calculate Output & <span className="combination-font" style={{ color: '#EF4444' }}>Monthly Investment</span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', color: 'rgba(255,255,255,0.68)', lineHeight: '1.6' }}>
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
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(10, 14, 22, 0.88)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Control 1: Video Volume Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <label style={{ fontWeight: '700', fontSize: '0.98rem', color: '#FFFFFF' }}>
                  Monthly Videos Needed:
                </label>
                <span className="mono-spec" style={{
                  padding: '4px 14px',
                  borderRadius: '999px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#EF4444',
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
                  accentColor: '#EF4444',
                  cursor: 'pointer',
                  background: 'rgba(255,255,255,0.1)'
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
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.98rem', marginBottom: '12px', color: '#FFFFFF' }}>
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
                        border: isSelected ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                        background: isSelected ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                        color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
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
                      {isSelected && <i className="fa-solid fa-check" style={{ color: '#EF4444', fontSize: '0.72rem' }}></i>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Turnaround SLA */}
            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.98rem', marginBottom: '12px', color: '#FFFFFF' }}>
                Turnaround SLA Speed:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setTurnaround('standard')}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    border: turnaround === 'standard' ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: turnaround === 'standard' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    color: turnaround === 'standard' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
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
                    border: turnaround === 'express' ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: turnaround === 'express' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    color: turnaround === 'express' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.14s ease'
                  }}
                >
                  <div style={{ fontSize: '0.86rem', fontWeight: '700' }}>Express Priority</div>
                  <div className="mono-spec" style={{ fontSize: '0.68rem', color: '#EF4444', marginTop: '2px' }}>Same-Day / 24H</div>
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
              border: '1px solid rgba(239, 68, 68, 0.35)',
              background: 'rgba(10, 14, 22, 0.94)',
              boxShadow: '0 25px 80px rgba(239, 68, 68, 0.12), inset 0 1px 0 rgba(255,255,255,0.15)',
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
              background: 'rgba(34, 197, 94, 0.15)',
              color: '#22C55E',
              fontWeight: '800',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              ★ Guaranteed High ROI
            </div>

            {/* Estimated Retainer */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', fontWeight: '600' }}>
                Estimated Foundry Retainer:
              </div>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: '#FFFFFF', lineHeight: '1.1' }}>
                ${computedPrice.toLocaleString()}
                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#94A3B8' }}> / month</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                Includes dedicated Senior Editor, Motion Designer & Producer Pod.
              </div>
            </div>

            {/* In-House vs Foundry Savings Comparison Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: '#94A3B8' }}>Full-Time In-House Team:</span>
                <span style={{ fontWeight: '700', textDecoration: 'line-through', color: '#EF4444' }}>${inHouseCost.toLocaleString()}/mo</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.9rem' }}>
                <span style={{ color: '#94A3B8' }}>The Editly Foundry Pod:</span>
                <span style={{ fontWeight: '800', color: '#22C55E' }}>${computedPrice.toLocaleString()}/mo</span>
              </div>
              <div style={{
                borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                paddingTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#FFFFFF' }}>Estimated Annual Savings:</span>
                <span style={{ fontWeight: '900', fontSize: '1.4rem', color: '#22C55E' }}>
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
                style={{ width: '100%', textAlign: 'center', borderRadius: '12px', padding: '12px', color: '#22C55E', borderColor: 'rgba(34, 197, 94, 0.4)', fontSize: '0.88rem' }}
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
