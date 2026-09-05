"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function CalculatorPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Calculator State
  const [videoCount, setVideoCount] = useState(15);
  const [selectedFormats, setSelectedFormats] = useState(['short-form', 'podcasts']);
  const [turnaround, setTurnaround] = useState('standard'); // 'standard' (48h) or 'express' (24h)
  const [motionGraphics, setMotionGraphics] = useState(true);

  const formats = [
    { id: 'short-form', name: 'Short-Form Reels / TikToks', basePrice: 120, icon: 'fa-solid fa-mobile-screen' },
    { id: 'podcasts', name: 'YouTube Podcasts / Long-Form', basePrice: 280, icon: 'fa-solid fa-microphone' },
    { id: 'saas-ads', name: '3D SaaS & Product Demos', basePrice: 450, icon: 'fa-solid fa-cube' },
    { id: 'ugc-ads', name: 'High-Converting UGC & VSL Ads', basePrice: 220, icon: 'fa-solid fa-bullhorn' }
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

  // Pricing Calculation Engine
  const avgFormatPrice = selectedFormats.reduce((acc, fId) => {
    const f = formats.find(item => item.id === fId);
    return acc + (f ? f.basePrice : 150);
  }, 0) / selectedFormats.length;

  let monthlyFoundryPrice = Math.round(videoCount * avgFormatPrice * 0.75); // 25% retainer volume discount
  if (turnaround === 'express') monthlyFoundryPrice += 600;
  if (motionGraphics) monthlyFoundryPrice += 350;

  // In-House Cost Comparison: Senior Editor ($6,500/mo) + Motion Designer ($4,000/mo) + Taxes/Software ($1,500) = $12,000/mo
  const inHouseCost = 11500;
  const monthlySavings = Math.max(0, inHouseCost - monthlyFoundryPrice);
  const annualSavings = monthlySavings * 12;

  return (
    <div className="calculator-page-wrapper" style={{ minHeight: '100vh', padding: '140px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '60px' }}>
          <span className="section-subtitle">
            <i className="fa-solid fa-calculator" style={{ marginRight: '8px' }}></i>
            Interactive Retainer & ROI Estimator
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '20px' }}>
            Calculate Your Video Output & <span className="combination-font">Annual Savings</span>
          </h1>
          <p className="section-description" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            See exactly how much you save with The Editly Foundry Co.&apos;s dedicated post-production pod compared to hiring full-time in-house editors.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.95fr',
          gap: '40px',
          alignItems: 'start'
        }}>

          {/* LEFT: Controls & Sliders Card */}
          <div 
            className="glass-card" 
            style={{
              padding: '45px 40px',
              borderRadius: '28px',
              border: '1px solid var(--glass-border)',
              background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 18, 38, 0.72)'
            }}
          >
            {/* Control 1: Video Volume Slider */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <label style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Estimated Monthly Videos Needed:
                </label>
                <span style={{
                  padding: '6px 18px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #2563EB, #0284C7)',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}>
                  {videoCount} Videos/mo
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="45"
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#2563EB',
                  cursor: 'pointer',
                  height: '8px',
                  borderRadius: '4px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '8px' }}>
                <span>4 videos (Starter)</span>
                <span>15 videos (Growth Scale)</span>
                <span>45 videos (Dominance)</span>
              </div>
            </div>

            {/* Control 2: Formats Selector */}
            <div style={{ marginBottom: '36px' }}>
              <label style={{ display: 'block', fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
                Select Video Formats Required:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {formats.map((f) => {
                  const active = selectedFormats.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFormat(f.id)}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '16px',
                        border: active 
                          ? (isLight ? '2px solid #2563EB' : '2px solid #38BDF8')
                          : '1px solid var(--glass-border)',
                        background: active
                          ? (isLight ? 'rgba(37, 99, 235, 0.08)' : 'rgba(56, 189, 248, 0.14)')
                          : 'var(--input-bg)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <i className={f.icon} style={{ color: active ? '#2563EB' : 'var(--text-muted)', fontSize: '1.2rem' }}></i>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '0.92rem' }}>{f.name}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Turnaround & Polish Options */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Turnaround Speed:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setTurnaround('standard')}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '12px',
                      border: turnaround === 'standard' ? '2px solid #2563EB' : '1px solid var(--glass-border)',
                      background: turnaround === 'standard' ? 'rgba(37, 99, 235, 0.12)' : 'var(--input-bg)',
                      color: 'var(--text-primary)',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    48h Standard
                  </button>
                  <button
                    type="button"
                    onClick={() => setTurnaround('express')}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '12px',
                      border: turnaround === 'express' ? '2px solid #2563EB' : '1px solid var(--glass-border)',
                      background: turnaround === 'express' ? 'rgba(37, 99, 235, 0.12)' : 'var(--input-bg)',
                      color: 'var(--text-primary)',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    ⚡ 24h Express
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  3D & Motion FX Lead:
                </label>
                <button
                  type="button"
                  onClick={() => setMotionGraphics(!motionGraphics)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    border: motionGraphics ? '2px solid #10B981' : '1px solid var(--glass-border)',
                    background: motionGraphics ? 'rgba(16, 185, 129, 0.12)' : 'var(--input-bg)',
                    color: motionGraphics ? '#10B981' : 'var(--text-secondary)',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <i className={`fa-solid ${motionGraphics ? 'fa-check' : 'fa-plus'}`}></i>
                  <span>{motionGraphics ? 'Motion Lead Included' : 'Standard Cut Only'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Live ROI & Savings Summary Card */}
          <div 
            className="glass-card reveal-on-scroll" 
            style={{
              padding: '45px 36px',
              borderRadius: '28px',
              border: isLight ? '2px solid rgba(37, 99, 235, 0.3)' : '2px solid rgba(56, 189, 248, 0.35)',
              background: isLight 
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.95) 100%)' 
                : 'linear-gradient(135deg, rgba(13, 22, 48, 0.9) 0%, rgba(7, 13, 29, 0.9) 100%)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
              position: 'sticky',
              top: '120px'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', fontWeight: '800', fontSize: '0.82rem', marginBottom: '20px' }}>
              <i className="fa-solid fa-shield-halved"></i>
              <span>Guaranteed 48h Turnaround</span>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>
                Estimated Foundry Retainer:
              </div>
              <div style={{ fontSize: '3.2rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: '1' }}>
                ${monthlyFoundryPrice.toLocaleString()}
                <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '600' }}> / month</span>
              </div>
            </div>

            {/* Savings Comparison Breakdown */}
            <div style={{
              background: isLight ? 'rgba(37, 99, 235, 0.05)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Traditional In-House Team:</span>
                <span style={{ fontWeight: '700', color: '#EF4444', textDecoration: 'line-through' }}>${inHouseCost.toLocaleString()}/mo</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>The Editly Foundry Co.:</span>
                <span style={{ fontWeight: '700', color: '#10B981' }}>${monthlyFoundryPrice.toLocaleString()}/mo</span>
              </div>

              <div style={{ height: '1px', background: 'var(--glass-border)', margin: '12px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Annual Savings</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10B981' }}>
                    ${annualSavings.toLocaleString()} / year
                  </div>
                </div>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  <i className="fa-solid fa-piggy-bank"></i>
                </div>
              </div>
            </div>

            {/* Retainer Features Included */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10B981' }}></i>
                <span>Dedicated Senior Video Editor + Motion Lead</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10B981' }}></i>
                <span>Unlimited Revisions until 100% satisfied</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10B981' }}></i>
                <span>Pause or cancel retainer anytime</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link 
                href="/book-a-call"
                className="btn btn-primary pop-btn"
                style={{ width: '100%', padding: '16px', borderRadius: '14px', fontSize: '1.05rem', textAlign: 'center' }}
              >
                <span>Lock This Retainer Rate ➔</span>
              </Link>
              <Link 
                href="/contact"
                className="btn btn-outline"
                style={{ width: '100%', padding: '14px', borderRadius: '14px', fontSize: '0.95rem', textAlign: 'center' }}
              >
                <span>Send Custom Scope Brief</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
