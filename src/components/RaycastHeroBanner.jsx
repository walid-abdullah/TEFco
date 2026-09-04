"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function RaycastHeroBanner() {
  const [activeWorkflow, setActiveWorkflow] = useState('reels');
  const [searchVal, setSearchVal] = useState('');

  const workflows = {
    reels: {
      id: 'reels',
      name: 'Viral Reels & Shorts',
      tag: '9:16 Retention',
      badge: '0-3s Hook Engineering',
      desc: 'Pattern interrupts, kinetic typography, dynamic sound design, and pacing tuned for 85%+ retention.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80',
      action: '/services/reels-shorts',
      meta: '4K 60FPS • DaVinci Color • 48h SLA'
    },
    podcasts: {
      id: 'podcasts',
      name: 'Multi-Cam Podcasts',
      tag: '1-to-30 Multiplication',
      badge: 'Audio-Driven Switching',
      desc: 'Automated speaker switching, studio sound mastering, and 14+ high-retention viral micro-cuts per episode.',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=80',
      action: '/services/podcasts',
      meta: '-14 LUFS Audio • Multi-Cam DCI • 72h SLA'
    },
    saas: {
      id: 'saas',
      name: '3D SaaS & Product Demos',
      tag: 'Vector Motion',
      badge: 'Bézier 60fps Physics',
      desc: 'Apple-grade vector UI animation, 3D viewport kinetics, and high-converting product launch trailers.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      action: '/services/saas-motion',
      meta: 'Figma Vector • 4K 60FPS • 72h SLA'
    },
    youtube: {
      id: 'youtube',
      name: 'YouTube Long-Form',
      tag: 'Thought Leadership',
      badge: 'Documentary Pacing',
      desc: 'Cinematic J-cuts, animated data charts, visual storytelling, and high-CTR custom 3D thumbnails.',
      image: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1400&q=80',
      action: '/services/talking-head',
      meta: 'S-Log3 Film Grade • 4K UHD • 48h SLA'
    }
  };

  const current = workflows[activeWorkflow] || workflows.reels;

  return (
    <section 
      className="raycast-hero-section" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '130px 24px 70px', 
        overflow: 'hidden', 
        background: '#05070B' 
      }}
    >
      {/* 
        ========================================================================
        RAYCAST SIGNATURE RED DIAGONAL KINETIC AURORA BEAMS
        ======================================================================== 
      */}
      <div 
        className="raycast-red-beam-wrapper"
        style={{
          position: 'absolute',
          top: '-18%',
          left: '50%',
          transform: 'translateX(-50%) rotate(-25deg)',
          width: '1500px',
          height: '850px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.85,
          overflow: 'hidden'
        }}
      >
        <div className="raycast-beam beam-1"></div>
        <div className="raycast-beam beam-2"></div>
        <div className="raycast-beam beam-3"></div>
        <div className="raycast-beam beam-4"></div>
        <div className="raycast-beam beam-5"></div>
      </div>

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '920px', width: '100%', margin: '0 auto' }}>
        
        {/* Top Minimal Pill Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 16px', 
          borderRadius: '999px', 
          background: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.12)', 
          backdropFilter: 'blur(20px)', 
          marginBottom: '24px' 
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }}></span>
          <span className="mono-spec" style={{ color: '#F1F5F9', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
            POST-PRODUCTION OPERATING SYSTEM
          </span>
        </div>

        {/* Clean, Monumental Headline */}
        <h1 style={{ 
          fontSize: 'clamp(2.7rem, 6vw, 4.8rem)', 
          lineHeight: '1.06', 
          fontWeight: '900', 
          letterSpacing: '-0.04em', 
          color: '#FFFFFF',
          marginBottom: '20px',
          fontFamily: 'var(--font-display)'
        }}>
          Elevate Your Video Projects. <br />
          <span style={{
            background: 'linear-gradient(180deg, #FFFFFF 20%, #EF4444 85%, #991B1B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Dominate Every Feed.
          </span>
        </h1>

        {/* Crisp Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
          color: 'rgba(255, 255, 255, 0.72)',
          maxWidth: '680px',
          margin: '0 auto 34px',
          lineHeight: '1.55',
          fontWeight: '400'
        }}>
          Studio-grade post-production for fast-scaling creators, SaaS, and brands. Engineered for high retention, delivered in 48 hours.
        </p>

        {/* Clean Primary Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
          <Link
            href="/book-a-call"
            className="btn btn-primary"
            style={{ 
              padding: '12px 28px', 
              borderRadius: '999px', 
              fontSize: '0.94rem', 
              fontWeight: '700', 
              background: '#EF4444', 
              borderColor: '#EF4444',
              boxShadow: '0 8px 24px rgba(239, 68, 68, 0.35)'
            }}
          >
            <span>Book 15-Min Growth Audit</span>
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.8rem' }}></i>
          </Link>

          <Link
            href="/work"
            className="btn btn-outline"
            style={{ 
              padding: '12px 24px', 
              borderRadius: '999px', 
              fontSize: '0.94rem', 
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.04)',
              borderColor: 'rgba(255, 255, 255, 0.15)'
            }}
          >
            <span>Explore 4K Work Vault</span>
          </Link>
        </div>

        {/* 
          ========================================================================
          SLEEK MINIMAL RAYCAST LAUNCHER DOCK (Clean, Spacious, Uncluttered)
          ======================================================================== 
        */}
        <div 
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            borderRadius: '16px',
            background: 'rgba(10, 14, 22, 0.88)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.12)',
            overflow: 'hidden',
            textAlign: 'left'
          }}
        >
          {/* Top Search Line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            gap: '12px'
          }}>
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              background: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: '800'
            }}>
              ⌘
            </div>

            <input 
              type="text"
              placeholder="Search post-production workflows..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '0.96rem',
                fontFamily: 'inherit'
              }}
            />

            <span className="mono-spec" style={{ 
              background: 'rgba(255,255,255,0.06)', 
              padding: '3px 8px', 
              borderRadius: '4px', 
              fontSize: '0.7rem', 
              color: '#94A3B8' 
            }}>
              ⌘K
            </span>
          </div>

          {/* Workflow Selection Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '8px',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            {Object.keys(workflows).map((key) => {
              const item = workflows[key];
              const isSelected = activeWorkflow === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveWorkflow(key)}
                  style={{
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid transparent',
                    background: isSelected ? 'rgba(239, 68, 68, 0.12)' : 'transparent',
                    color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                >
                  <div className="mono-spec" style={{ fontSize: '0.65rem', color: isSelected ? '#EF4444' : 'var(--text-muted)' }}>
                    {item.tag}
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: '700', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Clean Active Preview Card */}
          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#EF4444', background: 'rgba(239,68,68,0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                  {current.badge}
                </span>
                <span className="mono-spec" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
                  {current.meta}
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '1.45' }}>
                {current.desc}
              </p>
            </div>

            <Link
              href={current.action}
              className="btn btn-primary"
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '700',
                background: '#EF4444',
                borderColor: '#EF4444',
                whiteSpace: 'nowrap'
              }}
            >
              <span>View Service Scope</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px', fontSize: '0.72rem' }}></i>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}

