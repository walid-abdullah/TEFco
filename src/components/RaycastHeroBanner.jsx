"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RaycastHeroBanner() {
  const [activeWorkflow, setActiveWorkflow] = useState('reels');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [aspectMode, setAspectMode] = useState('16:9'); // '16:9' or '9:16'
  const [timecode, setTimecode] = useState('00:04:18:12');

  const workflows = {
    reels: {
      id: 'reels',
      name: 'Shorts & Reels',
      tag: '9:16 VIRAL',
      hotkey: '1',
      title: 'Viral 9:16 Retention Engine',
      desc: 'Pattern interrupts in the first 3 seconds, kinetic typography, dynamic sound risers, and pacing tuned for 85%+ audience retention on TikTok & Reels.',
      specs: 'PRORES 422 • DAVINCI COLOR • 48H SLA',
      kpi: '+85% AVG RETENTION',
      videoEmbed: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      action: '/services/reels-shorts'
    },
    podcasts: {
      id: 'podcasts',
      name: 'Multi-Cam Podcasts',
      tag: '1-TO-30 ENGINE',
      hotkey: '2',
      title: 'Multi-Cam Podcast 1-to-30 Engine',
      desc: 'Sub-frame multi-camera switching, studio audio de-noising (-14 LUFS), and automatic extraction of 14+ high-retention viral micro clips per episode.',
      specs: 'IZOTOPE RX • MULTI-CAM DCI • 72H SLA',
      kpi: '30 ASSETS / EPISODE',
      videoEmbed: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
      action: '/services/podcasts'
    },
    youtube: {
      id: 'youtube',
      name: 'YouTube Authority',
      tag: 'LONG-FORM',
      hotkey: '3',
      title: 'YouTube Thought Leadership Films',
      desc: 'Documentary narrative pacing, animated custom data charts, high-impact J-cuts, and CTR-tested custom 3D thumbnails built to scale high-ticket brands.',
      specs: 'S-LOG3 GRADE • 4K MASTER • 48H SLA',
      kpi: '4.2X LONGER WATCH TIME',
      videoEmbed: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1200&q=80',
      action: '/services/talking-head'
    },
    ugc: {
      id: 'ugc',
      name: 'High-ROAS Video Ads',
      tag: 'DIRECT RESPONSE',
      hotkey: '4',
      title: 'Performance Video Ad Variations',
      desc: '5x split-test hook variations, dynamic UGC editing, problem-solution arcs, and conversion-focused call-to-actions engineered for Meta & TikTok ad spend.',
      specs: 'SPLIT-TEST VARIATIONS • 48H SLA',
      kpi: '3.8X ROAS MULTIPLIER',
      videoEmbed: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      action: '/services/ugc-ads'
    },
    saas: {
      id: 'saas',
      name: '3D SaaS Motion',
      tag: 'APPLE-GRADE',
      hotkey: '5',
      title: 'Apple-Grade 3D SaaS & UI Demos',
      desc: 'Pixel-perfect vector UI reconstruction, 60FPS Bézier cursor motion physics, 3D viewport mockups, and high-converting Product Hunt launch films.',
      specs: 'FIGMA VECTOR • 60FPS PHYSICS • 72H SLA',
      kpi: '60FPS VECTOR ACCURACY',
      videoEmbed: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      action: '/services/saas-motion'
    }
  };

  const workflowKeys = Object.keys(workflows);
  const current = workflows[activeWorkflow] || workflows.reels;

  // Keyboard shortcut listener for tabs 1-5
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If user is typing in an input, don't trigger
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === '1') setActiveWorkflow('reels');
      if (e.key === '2') setActiveWorkflow('podcasts');
      if (e.key === '3') setActiveWorkflow('youtube');
      if (e.key === '4') setActiveWorkflow('ugc');
      if (e.key === '5') setActiveWorkflow('saas');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Timecode animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const frames = Math.floor(Math.random() * 24).toString().padStart(2, '0');
      const seconds = Math.floor(Math.random() * 59).toString().padStart(2, '0');
      setTimecode(`00:04:${seconds}:${frames}`);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (key) => {
    setActiveWorkflow(key);
    setIsPlayingVideo(false);
  };

  return (
    <section 
      className="hero-section" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '92vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '130px 20px 70px', 
        overflow: 'hidden', 
        background: '#05070B' 
      }}
    >
      {/* Darkroom Ambient Background Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, rgba(5, 7, 11, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Hero Wrapper */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1120px', width: '100%', margin: '0 auto' }}>
        
        {/* Top Operational Status HUD Pill */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '10px', 
          padding: '6px 16px', 
          borderRadius: '999px', 
          background: 'rgba(255, 255, 255, 0.04)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          marginBottom: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          <span style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: '#22C55E',
            boxShadow: '0 0 8px #22C55E',
            display: 'inline-block'
          }}></span>
          <span className="mono-spec" style={{ color: '#FFFFFF', fontSize: '0.74rem', letterSpacing: '0.06em', fontWeight: '600' }}>
            STUDIO PIPELINE // 48H SPRINT SLA
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>|</span>
          <span className="mono-spec" style={{ color: '#94A3B8', fontSize: '0.72rem' }}>
            2 SLOTS OPEN
          </span>
        </div>

        {/* Hero Editorial Headline */}
        <h1 style={{ 
          fontSize: 'clamp(2.7rem, 6vw, 4.9rem)', 
          lineHeight: '1.05', 
          fontWeight: '800', 
          letterSpacing: '-0.04em', 
          color: '#FFFFFF',
          marginBottom: '20px',
          fontFamily: 'var(--font-heading)'
        }}>
          Elevate Your Video Projects. <br />
          <span 
            className="serif-accent"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 20%, #CBD5E1 65%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontWeight: '400',
              paddingRight: '6px'
            }}
          >
            Dominate Every Feed.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
          color: '#94A3B8',
          maxWidth: '720px',
          margin: '0 auto 34px',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          High-retention post-production lab engineered for scaling creators, venture-backed SaaS, and high-ticket brands. 48-hour delivery SLA with Frame.io real-time collaboration.
        </p>

        {/* Primary CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link
            href="/book-a-call"
            className="btn btn-primary pop-btn"
            style={{ 
              padding: '14px 32px', 
              borderRadius: '10px', 
              fontSize: '0.92rem', 
              fontWeight: '800', 
              background: '#FFFFFF', 
              color: '#05070B',
              border: '1px solid #FFFFFF',
              boxShadow: '0 8px 30px rgba(255, 255, 255, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Book 15-Min Strategy Audit</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.78rem' }}></i>
          </Link>

          <Link
            href="/work"
            className="btn btn-outline pop-btn"
            style={{ 
              padding: '14px 28px', 
              borderRadius: '10px', 
              fontSize: '0.92rem', 
              fontWeight: '600', 
              background: 'rgba(255, 255, 255, 0.04)', 
              borderColor: 'rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Explore 4K Work Vault</span>
            <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#94A3B8', background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: '4px' }}>
              24
            </span>
          </Link>
        </div>

        {/* 
          ========================================================================
          RAYCAST COMMAND CENTER 2.0 INTERACTIVE SHOWCASE DOCK
          ======================================================================== 
        */}
        <div 
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: '16px',
            background: 'rgba(7, 10, 18, 0.9)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            textAlign: 'left'
          }}
        >
          {/* Top Switcher Bar with Keyboard Hotkeys */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 10px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            overflowX: 'auto',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              {workflowKeys.map((key) => {
                const item = workflows[key];
                const isSelected = activeWorkflow === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTabChange(key)}
                    style={{
                      padding: '9px 14px',
                      borderRadius: '8px',
                      border: isSelected ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
                      background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#94A3B8',
                      fontSize: '0.84rem',
                      fontWeight: isSelected ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="mono-spec" style={{ 
                      fontSize: '0.62rem', 
                      padding: '1px 5px', 
                      borderRadius: '3px',
                      background: isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                      color: isSelected ? '#05070B' : '#64748B',
                      fontWeight: '700'
                    }}>
                      [{item.hotkey}]
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Timecode & Aspect Toggle on the right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, paddingRight: '8px' }}>
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'none' /* Show on md up */ }}>
                TC: <span style={{ color: '#FFFFFF' }}>{timecode}</span>
              </span>
              <div style={{
                display: 'inline-flex',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '6px',
                padding: '2px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <button
                  type="button"
                  onClick={() => setAspectMode('16:9')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: aspectMode === '16:9' ? 'rgba(255,255,255,0.15)' : 'transparent',
                    border: 'none',
                    color: aspectMode === '16:9' ? '#FFFFFF' : '#64748B',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  16:9
                </button>
                <button
                  type="button"
                  onClick={() => setAspectMode('9:16')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: aspectMode === '9:16' ? 'rgba(255,255,255,0.15)' : 'transparent',
                    border: 'none',
                    color: aspectMode === '9:16' ? '#FFFFFF' : '#64748B',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  9:16
                </button>
              </div>
            </div>
          </div>

          {/* Service Details & Interactive Screen Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 42%) 1fr',
            alignItems: 'center',
            gap: '24px',
            padding: '24px'
          }}>
            
            {/* Left Column: Scope Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="mono-spec" style={{ 
                  fontSize: '0.68rem', 
                  color: '#FFFFFF', 
                  background: 'rgba(255,255,255,0.08)', 
                  border: '1px solid rgba(255,255,255,0.12)', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontWeight: '700' 
                }}>
                  {current.specs}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', lineHeight: '1.25' }}>
                {current.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: '#94A3B8', margin: '0 0 18px', lineHeight: '1.55' }}>
                {current.desc}
              </p>

              {/* KPI Stat Tag */}
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 12px', 
                borderRadius: '6px', 
                background: 'rgba(255, 255, 255, 0.04)', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '22px',
                width: 'fit-content'
              }}>
                <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#64748B' }}>BENCHMARK METRIC:</span>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '800' }}>{current.kpi}</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href={current.action}
                  className="btn btn-primary pop-btn"
                  style={{
                    padding: '9px 18px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: '800',
                    background: '#FFFFFF',
                    color: '#05070B',
                    border: '1px solid #FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Explore Service Pipeline</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.72rem' }}></i>
                </Link>

                <Link
                  href="/book-a-call"
                  style={{
                    color: '#94A3B8',
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  Lock Retainer →
                </Link>
              </div>
            </div>

            {/* Right Column: Video Terminal Preview Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: aspectMode === '9:16' ? '9/14' : '16/9',
              maxHeight: aspectMode === '9:16' ? '360px' : 'none',
              margin: aspectMode === '9:16' ? '0 auto' : '0',
              background: '#04060A',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              transition: 'aspect-ratio 0.3s ease, max-height 0.3s ease'
            }}>
              {isPlayingVideo ? (
                <iframe
                  src={current.videoEmbed}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block'
                  }}
                />
              ) : (
                <div 
                  onClick={() => setIsPlayingVideo(true)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={current.thumbnail}
                    alt={current.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 7, 11, 0.4)', backdropFilter: 'blur(1px)' }}></div>

                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#05070B',
                    fontSize: '1.15rem',
                    boxShadow: '0 0 35px rgba(255, 255, 255, 0.35)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
                  </div>

                  {/* Live HUD Badges on screen */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E' }}></span>
                    <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700' }}>
                      4K MASTER // {current.tag}
                    </span>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#FFFFFF', fontWeight: '600' }}>
                      CLICK TO PREVIEW WORKFLOW
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
