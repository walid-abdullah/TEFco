"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function PricingCalculator() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Calculator State
  const [videoCount, setVideoCount] = useState(15);
  const [selectedFormats, setSelectedFormats] = useState(['short-form', 'podcasts']);
  const [turnaround, setTurnaround] = useState('standard'); // 'standard' (48h) or 'express' (24h)
  const [motionGraphics, setMotionGraphics] = useState(true);

  const formats = [
    { id: 'short-form', name: 'Short-Form Reels / TikToks', basePrice: 60, icon: 'fa-solid fa-mobile-screen' },
    { id: 'podcasts', name: 'YouTube Podcasts / Long-Form', basePrice: 120, icon: 'fa-solid fa-microphone' },
    { id: 'saas-ads', name: '3D SaaS & Product Demos', basePrice: 180, icon: 'fa-solid fa-cube' },
    { id: 'ugc-ads', name: 'High-Converting UGC & VSL Ads', basePrice: 90, icon: 'fa-solid fa-bullhorn' }
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

  // Pricing Calculation Engine: ~ $60/video base, so 25 videos = ~$1,500
  const avgFormatPrice = selectedFormats.reduce((acc, fId) => {
    const f = formats.find(item => item.id === fId);
    return acc + (f ? f.basePrice : 60);
  }, 0) / selectedFormats.length;

  let monthlyFoundryPrice = Math.round(videoCount * avgFormatPrice);
  if (turnaround === 'express') monthlyFoundryPrice += 300;
  if (motionGraphics) monthlyFoundryPrice += 150;

  // In-House Cost Comparison: Senior Editor ($6,500/mo) + Motion Designer ($4,000/mo) + Taxes/Software ($1,500) = $12,000/mo
  const inHouseCost = 11500;
  const monthlySavings = Math.max(0, inHouseCost - monthlyFoundryPrice);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '50px' }}>
          <span className="section-subtitle">
            <i className="fa-solid fa-calculator" style={{ marginRight: '8px' }}></i>
            Interactive ROI & Retainer Estimator
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', marginBottom: '14px' }}>
            Calculate Your Output & <span className="combination-font">Annual Savings</span>
          </h2>
          <p className="section-description" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            See exactly how much you save with The Editly Foundry Co.'s dedicated post-production pod compared to hiring full-time in-house editors.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '35px',
          alignItems: 'start'
        }}>

          {/* LEFT: Controls & Sliders Card */}
          <div 
            className="glass-card" 
            style={{
              padding: '35px 30px',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 18, 38, 0.72)'
            }}
          >
            {/* Control 1: Video Volume Slider */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Estimated Monthly Videos Needed:
                </label>
                <span style={{
                  padding: '5px 14px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #2563EB, #0284C7)',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}>
                  {videoCount} Videos/mo
                </span>
              </div>

              <input 
                type="range" 
                min="4" 
                max="60" 
                step="1"
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '5px',
                  accentColor: '#2563EB',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                <span>4 Videos (Boutique)</span>
                <span>30 Videos (Creator Pro)</span>
                <span>60+ Videos (Enterprise)</span>
              </div>
            </div>

            {/* Control 2: Format Multi-Select */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontWeight: '800', fontSize: '1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Target Content Formats:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {formats.map(fmt => {
                  const isSelected = selectedFormats.includes(fmt.id);
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => toggleFormat(fmt.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '14px',
                        border: isSelected ? '1.5px solid #2563EB' : '1px solid var(--input-border)',
                        background: isSelected ? 'rgba(37, 99, 235, 0.12)' : 'var(--input-bg)',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <i className={fmt.icon} style={{ color: isSelected ? '#38BDF8' : 'var(--text-muted)', fontSize: '1.1rem' }}></i>
                      <span style={{ fontSize: '0.85rem', fontWeight: isSelected ? '700' : '500', lineHeight: '1.2' }}>
                        {fmt.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Turnaround Speed */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '800', fontSize: '1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Turnaround Requirement:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setTurnaround('standard')}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: turnaround === 'standard' ? '1.5px solid #2563EB' : '1px solid var(--input-border)',
                    background: turnaround === 'standard' ? 'rgba(37, 99, 235, 0.12)' : 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.88rem' }}>Standard Delivery</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>24 - 48 Hours Avg</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTurnaround('express')}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: turnaround === 'express' ? '1.5px solid #2563EB' : '1px solid var(--input-border)',
                    background: turnaround === 'express' ? 'rgba(37, 99, 235, 0.12)' : 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.88rem', color: '#F59E0B' }}>⚡ Same-Day Express</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Under 24 Hours</span>
                </button>
              </div>
            </div>

            {/* Control 4: Advanced Motion Graphics Add-on Toggle */}
            <div style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Custom 3D / Motion UI Leads</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Includes custom Cinema4D / After Effects assets</div>
              </div>
              <input 
                type="checkbox" 
                checked={motionGraphics}
                onChange={(e) => setMotionGraphics(e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2563EB' }}
              />
            </div>

          </div>

          {/* RIGHT: Live ROI & Cost Savings Display Card */}
          <div 
            className="glass-card" 
            style={{
              padding: '40px 30px',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              background: isLight 
                ? 'linear-gradient(135deg, rgba(240, 249, 255, 0.95), rgba(255, 255, 255, 0.95))' 
                : 'linear-gradient(135deg, rgba(13, 27, 62, 0.85), rgba(7, 13, 24, 0.95))',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
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
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                Estimated Foundry Retainer:
              </div>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: '1.1' }}>
                ${monthlyFoundryPrice.toLocaleString()}
                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-secondary)' }}> / month</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Includes dedicated Senior Editor, Motion Designer & Producer Pod.
              </div>
            </div>

            {/* In-House vs Foundry Savings Comparison Box */}
            <div style={{
              background: isLight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--glass-border)',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Full-Time In-House Team:</span>
                <span style={{ fontWeight: '700', textDecoration: 'line-through', color: '#EF4444' }}>${inHouseCost.toLocaleString()}/mo</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>The Editly Foundry Pod:</span>
                <span style={{ fontWeight: '800', color: '#22C55E' }}>${monthlyFoundryPrice.toLocaleString()}/mo</span>
              </div>
              <div style={{
                borderTop: '1px dashed var(--glass-border)',
                paddingTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Estimated Annual Savings:</span>
                <span style={{ fontWeight: '900', fontSize: '1.4rem', color: '#22C55E' }}>
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link 
                href="/contact" 
                className="btn btn-primary btn-lg"
                style={{ width: '100%', textAlign: 'center', borderRadius: '12px', padding: '14px', fontWeight: '800', fontSize: '0.95rem' }}
              >
                <span>Lock In This Retainer ➔</span>
              </Link>
              
              <a 
                href="https://wa.me/8801886755888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
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
