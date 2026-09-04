"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function RaycastHeroBanner() {
  const [activeWorkflow, setActiveWorkflow] = useState('reels');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const workflows = {
    reels: {
      id: 'reels',
      name: 'Shorts & Reels',
      title: 'Viral Shorts & Reels Pipeline',
      desc: 'Pattern interrupts in the first 3 seconds, kinetic Hormozi typography, dynamic sound risers, and pacing tuned for 85%+ audience retention.',
      specs: '4K 60FPS • DaVinci Color • 48h SLA',
      videoEmbed: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      action: '/services/reels-shorts'
    },
    podcasts: {
      id: 'podcasts',
      name: 'Multi-Cam Podcasts',
      title: 'Multi-Cam Podcast 1-to-30 Engine',
      desc: 'Sub-frame multi-camera switching, studio audio de-noising (-14 LUFS), and automatic extraction of 14+ high-retention viral micro clips per episode.',
      specs: 'iZotope RX • Multi-Cam DCI • 72h SLA',
      videoEmbed: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
      action: '/services/podcasts'
    },
    saas: {
      id: 'saas',
      name: '3D SaaS Motion',
      title: 'Apple-Grade 3D SaaS & UI Demos',
      desc: 'Pixel-perfect vector UI reconstruction, 60FPS Bézier cursor motion physics, 3D viewport mockups, and high-converting Product Hunt launch films.',
      specs: 'Figma Vector • 60FPS Physics • 72h SLA',
      videoEmbed: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      action: '/services/saas-motion'
    },
    youtube: {
      id: 'youtube',
      name: 'YouTube Long-Form',
      title: 'YouTube Authority Thought Leadership',
      desc: 'Documentary narrative pacing, animated custom data charts, high-impact J-cuts, and CTR-tested custom 3D thumbnails built to scale high-ticket brands.',
      specs: 'S-Log3 Film Grade • 4K Master • 48h SLA',
      videoEmbed: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=0',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1200&q=80',
      action: '/services/talking-head'
    }
  };

  const current = workflows[activeWorkflow] || workflows.reels;

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
        minHeight: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '120px 24px 80px', 
        overflow: 'hidden', 
        background: '#05070B' 
      }}
    >
      {/* Subtle Studio Top Ambient Light */}
      <div className="hero-ambient-glow" />

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1040px', width: '100%', margin: '0 auto' }}>
        
        {/* Top Minimal Pill Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 16px', 
          borderRadius: '999px', 
          background: 'rgba(255, 255, 255, 0.04)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(20px)', 
          marginBottom: '22px' 
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
          <span className="mono-spec" style={{ color: '#E2E8F0', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
            POST-PRODUCTION STUDIO // 2026
          </span>
        </div>

        {/* Clean, Bold Headline */}
        <h1 style={{ 
          fontSize: 'clamp(2.6rem, 5.8vw, 4.8rem)', 
          lineHeight: '1.06', 
          fontWeight: '900', 
          letterSpacing: '-0.04em', 
          color: '#FFFFFF',
          marginBottom: '18px',
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
          fontSize: 'clamp(1.02rem, 1.8vw, 1.2rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '680px',
          margin: '0 auto 32px',
          lineHeight: '1.55',
          fontWeight: '400'
        }}>
          High-retention post-production engineered for scaling creators, SaaS, and high-growth brands. 48-hour delivery SLA.
        </p>

        {/* Primary CTA Buttons */}
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
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.12)'
            }}
          >
            <span>Explore 4K Work Vault</span>
          </Link>
        </div>

        {/* 
          ========================================================================
          CLEAN INTERACTIVE SERVICE & FULL VIDEO SHOWCASE
          ======================================================================== 
        */}
        <div 
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '16px',
            background: 'rgba(10, 14, 22, 0.85)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1)',
            overflow: 'hidden',
            textAlign: 'left'
          }}
        >
          {/* Clean Tabs Header (Without the extra noisy tags) */}
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
                  onClick={() => handleTabChange(key)}
                  style={{
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid transparent',
                    background: isSelected ? 'rgba(239, 68, 68, 0.12)' : 'transparent',
                    color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                    fontSize: '0.88rem',
                    fontWeight: isSelected ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Service Details & Full Video Section Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 42%) 1fr',
            alignItems: 'center',
            gap: '24px',
            padding: '24px'
          }}>
            
            {/* Left Column: Scope Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#EF4444', background: 'rgba(239,68,68,0.1)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  {current.specs}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', lineHeight: '1.3' }}>
                {current.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 22px', lineHeight: '1.55' }}>
                {current.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href={current.action}
                  className="btn btn-primary"
                  style={{
                    padding: '9px 18px',
                    borderRadius: '8px',
                    fontSize: '0.86rem',
                    fontWeight: '700',
                    background: '#EF4444',
                    borderColor: '#EF4444',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>View Service Scope</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </Link>

                <Link
                  href="/book-a-call"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Book Retainer
                </Link>
              </div>
            </div>

            {/* Right Column: Full Interactive Video Section (Service Intro) */}
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              background: '#04060A',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8)'
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
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(1px)' }}></div>

                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(239, 68, 68, 0.92)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.7)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
                  </div>

                  {/* Live Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                    <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#FFFFFF', fontWeight: '600' }}>
                      CLICK TO WATCH INTRO PREVIEW
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


