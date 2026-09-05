"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'reels',
      slug: 'reels-shorts',
      num: '01',
      tag: '9:16 VIRAL RETENTION',
      title: 'Shorts & Reels Viral Engineering',
      shortTitle: 'Shorts & Reels',
      icon: 'fa-brands fa-tiktok',
      desc: '3-second hook psychology, kinetic word-by-word typography, and pattern interrupts engineered to capture organic feed algorithms.'
    },
    {
      id: 'podcasts',
      slug: 'podcasts',
      num: '02',
      tag: '1-TO-30 CONTENT ENGINE',
      title: 'Multi-Cam Podcasts & Highlights',
      shortTitle: 'Multi-Cam Podcasts',
      icon: 'fa-solid fa-microphone-lines',
      desc: 'Sub-frame multi-camera switching, studio audio de-noising (-14 LUFS in iZotope RX), and automatic extraction of 10–20 viral micro clips per episode.'
    },
    {
      id: 'talking-head',
      slug: 'talking-head',
      num: '03',
      tag: 'LONG-FORM AUTHORITY',
      title: 'YouTube Thought Leadership',
      shortTitle: 'YouTube Masterclass',
      icon: 'fa-brands fa-youtube',
      desc: 'Documentary story pacing, bespoke animated 2D vector diagrams, and high-CTR custom 3D thumbnails built for high-ticket brand trust.'
    },
    {
      id: 'ugc-ads',
      slug: 'ugc-ads',
      num: '04',
      tag: 'DIRECT RESPONSE ROAS',
      title: 'High-Converting Performance Ads',
      shortTitle: 'Performance Paid Ads',
      icon: 'fa-solid fa-chart-line',
      desc: 'Direct-response video creatives with 5x split-test hook variations for rapid media buying scalability on Meta & TikTok.'
    },
    {
      id: 'saas-motion',
      slug: 'saas-motion',
      num: '05',
      tag: 'APPLE-GRADE MOTION',
      title: '3D SaaS & Product Demos',
      shortTitle: '3D SaaS & Product Films',
      icon: 'fa-solid fa-wand-magic-sparkles',
      desc: 'Pixel-perfect vector UI reconstruction, 60FPS dynamic bezier cursor kinetics, and high-converting Product Hunt launch films.'
    }
  ];

  return (
    <section 
      className="services section-padding" 
      id="services" 
      style={{ 
        position: 'relative', 
        background: '#05070B', 
        padding: '120px 0', 
        overflow: 'hidden' 
      }}
    >
      
      {/* Background Subtle Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.035) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '840px', margin: '0 auto 65px' }}>
          <h2 
            className="section-title" 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', 
              letterSpacing: '-0.03em', 
              marginBottom: '14px', 
              color: '#FFFFFF', 
              fontWeight: '800',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Bespoke Post-Production <span className="serif-accent" style={{ color: '#FFFFFF', fontWeight: '400' }}>Infrastructure</span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', color: '#94A3B8', lineHeight: '1.6' }}>
            We do not use cookie-cutter templates. Every video discipline is engineered with platform-native algorithms and conversion psychology.
          </p>
        </div>

        {/* 
          ========================================================================
          INTERACTIVE 5-DISCIPLINE STUDIO SHOWCASE GRID
          ======================================================================== 
        */}
        <div 
          className="interactive-showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(330px, 1fr) 30px minmax(380px, 1.25fr)',
            gap: '30px',
            alignItems: 'center',
            maxWidth: '1160px',
            margin: '0 auto'
          }}
        >
          
          {/* 
            ======================================================================
            LEFT COLUMN: INTERACTIVE ACCORDION (5 POST-PRODUCTION DISCIPLINES)
            ====================================================================== 
          */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((srv, idx) => {
              const isActive = activeTab === idx;

              return (
                <div 
                  key={srv.id}
                  onMouseEnter={() => setActiveTab(idx)}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '14px 0',
                    borderBottom: idx !== services.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Row Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    
                    {/* Glowing Active Square Marker */}
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '1px',
                      boxShadow: isActive ? '0 0 10px rgba(255,255,255,0.9)' : 'none',
                      transition: 'all 0.3s ease'
                    }}></div>

                    {/* Frosted Icon Box */}
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(224, 231, 255, 0.95) 0%, rgba(165, 180, 252, 0.9) 100%)' 
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isActive 
                        ? '1px solid rgba(255, 255, 255, 0.8)' 
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 0 25px rgba(165, 180, 252, 0.45)' : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}>
                      <i 
                        className={srv.icon} 
                        style={{ 
                          color: isActive ? '#1E1B4B' : '#64748B', 
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Number & Title in Syne */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="mono-spec" style={{ 
                        fontSize: '0.74rem', 
                        color: isActive ? '#94A3B8' : '#475569',
                        fontWeight: '600'
                      }}>
                        ■ {srv.num}
                      </span>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '700', 
                        margin: 0, 
                        color: isActive ? '#FFFFFF' : '#64748B',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-heading)',
                        transition: 'color 0.3s ease'
                      }}>
                        {srv.shortTitle}
                      </h3>
                    </div>

                  </div>

                  {/* Expanded Description & Link (When Active) */}
                  <div style={{
                    maxHeight: isActive ? '130px' : '0px',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    paddingLeft: '58px',
                    paddingTop: isActive ? '10px' : '0px'
                  }}>
                    <p style={{
                      fontSize: '0.86rem',
                      color: '#94A3B8',
                      lineHeight: '1.55',
                      margin: '0 0 10px',
                      maxWidth: '380px'
                    }}>
                      {srv.desc}
                    </p>
                    <Link
                      href={`/services/${srv.slug}`}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: '700',
                        color: '#38BDF8',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Explore Discipline</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

          {/* 
            ======================================================================
            CENTER DIVIDER: GLOWING VERTICAL LASER LINE WITH LENS FLARE
            ====================================================================== 
          */}
          <div 
            className="center-laser-divider"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '380px', 
              position: 'relative' 
            }}
          >
            {/* Hairline Laser */}
            <div style={{
              width: '1px',
              height: '100%',
              background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.3) 25%, #38BDF8 50%, rgba(99, 102, 241, 0.3) 75%, transparent 100%)',
              position: 'relative'
            }}>
              {/* Center Flare */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '18px',
                height: '18px',
                background: 'radial-gradient(circle, #FFFFFF 0%, #38BDF8 40%, transparent 75%)',
                filter: 'blur(1px)',
                boxShadow: '0 0 18px #38BDF8, 0 0 35px #6366F1'
              }} />
            </div>
          </div>

          {/* 
            ======================================================================
            RIGHT COLUMN: BESPOKE POST-PRODUCTION VISUAL ARTBOARDS (5 DISCIPLINES)
            ====================================================================== 
          */}
          <div style={{ position: 'relative', width: '100%', justifySelf: 'center' }}>
            <div 
              className="artboard-display-container"
              style={{
                position: 'relative',
                aspectRatio: '16/11',
                minHeight: '360px',
                background: '#070A14',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '24px',
                padding: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 30px 70px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
            >
              
              {/* 
                ------------------------------------------------------------------
                VISUAL 01: SHORTS & REELS (9:16 Kinetic Phone & Hook Curve)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 0 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
                  
                  {/* Radiant Ambient Spotlight */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }} />

                  {/* 9:16 Smartphone Mockup on Left */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '110px',
                    height: '195px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}>
                    {/* Top Notch */}
                    <div style={{ width: '32px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '999px', margin: '0 auto' }}></div>

                    {/* Center TikTok/Reel Play Icon */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', boxShadow: '0 4px 15px rgba(236,72,153,0.5)' }}>
                        <i className="fa-brands fa-tiktok" style={{ color: '#FFF', fontSize: '0.9rem' }}></i>
                      </div>
                      <span style={{ fontSize: '0.55rem', color: '#FFF', fontWeight: '700', display: 'block' }}>Kinetic Hook</span>
                    </div>

                    {/* Bottom Progress Bar */}
                    <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #EC4899, #38BDF8)' }}></div>
                    </div>
                  </div>

                  {/* Right Side Retention Analytics */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '10px', width: '180px' }}>
                    
                    {/* Retention Curve Card */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px', backdropFilter: 'blur(16px)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.58rem', color: '#94A3B8', marginBottom: '6px' }}>
                        <span>3-SEC HOOK</span>
                        <span style={{ color: '#22C55E', fontWeight: '700' }}>+84% PASS</span>
                      </div>
                      <svg width="100%" height="28" viewBox="0 0 160 28" fill="none">
                        <path d="M0 24C30 24 50 4 80 8C120 12 140 4 160 2" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Platform Badges */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ fontSize: '0.55rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '6px', color: '#E2E8F0' }}>Instagram Reels</span>
                      <span style={{ fontSize: '0.55rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '6px', color: '#E2E8F0' }}>YouTube Shorts</span>
                    </div>

                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 02: MULTI-CAM PODCASTS (A/B Switcher & Audio Spectrum)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 1 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Radiant Center Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top: Multi-Cam Feeds (CAM A / CAM B) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', position: 'relative', zIndex: 2 }}>
                    
                    {/* CAM A Host */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1.5px solid #38BDF8', borderRadius: '12px', padding: '10px', backdropFilter: 'blur(16px)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#38BDF8', fontWeight: '700' }}>CAM A // HOST</span>
                        <span style={{ fontSize: '0.52rem', background: '#22C55E', color: '#000', padding: '1px 5px', borderRadius: '3px', fontWeight: '800' }}>ON AIR</span>
                      </div>
                      <div style={{ height: '42px', background: 'rgba(56, 189, 248, 0.12)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-solid fa-microphone-lines" style={{ color: '#38BDF8', fontSize: '1.1rem' }}></i>
                      </div>
                    </div>

                    {/* CAM B Guest */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px', backdropFilter: 'blur(16px)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8', fontWeight: '700' }}>CAM B // GUEST</span>
                        <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.1)', color: '#CBD5E1', padding: '1px 5px', borderRadius: '3px' }}>SYNCED</span>
                      </div>
                      <div style={{ height: '42px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-solid fa-user-group" style={{ color: '#94A3B8', fontSize: '1rem' }}></i>
                      </div>
                    </div>

                  </div>

                  {/* Bottom: iZotope RX Mastering & Micro Clip Output */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px', position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(16px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-sliders" style={{ color: '#22C55E', fontSize: '0.85rem' }}></i>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#FFF', fontWeight: '700', display: 'block' }}>iZotope RX Studio De-Noise</span>
                        <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#94A3B8' }}>-14.0 LUFS BROADCAST</span>
                      </div>
                    </div>
                    <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                      10-20 CLIPS EXTRACTED
                    </span>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 03: YOUTUBE MASTERCLASS (16:9 Cinema Widescreen Player)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 2 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  
                  {/* Radiant Ambient Spotlight */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }} />

                  {/* 16:9 Widescreen Cinema Frame */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: '310px',
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.25)'
                  }}>
                    {/* Top Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#EF4444', fontWeight: '700' }}>4K PRORES MASTER</span>
                      <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#CBD5E1' }}>ACEScc 1.3 D65</span>
                    </div>

                    {/* Center Play Button */}
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #EF4444, #F43F5E)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 6px 20px rgba(239, 68, 68, 0.6)' }}>
                      <i className="fa-solid fa-play" style={{ color: '#FFF', fontSize: '0.95rem', marginLeft: '3px' }}></i>
                    </div>

                    {/* Bottom Scrubber with Chapter Markers */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', color: '#94A3B8', marginBottom: '4px' }}>
                        <span>00:04:18 (J-Cut Hook)</span>
                        <span>00:18:42 (Outro CTA)</span>
                      </div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #EF4444, #F43F5E)' }}></div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 04: PERFORMANCE ADS (5x Split Test Matrix & ROAS Curve)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 3 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Radiant Ambient Spotlight */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top: 5x Hook Variation Cards */}
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700' }}>5X HOOK SPLIT-TEST BATCH</span>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#22C55E', fontWeight: '700' }}>3.8X ROAS</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                      {['H1 (Winner)', 'H2', 'H3', 'H4', 'H5'].map((h, i) => (
                        <div key={i} style={{
                          background: i === 0 ? 'rgba(34, 197, 94, 0.25)' : 'rgba(15, 23, 42, 0.85)',
                          border: i === 0 ? '1.5px solid #22C55E' : '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          padding: '8px 4px',
                          textAlign: 'center',
                          backdropFilter: 'blur(16px)',
                          boxShadow: i === 0 ? '0 0 15px rgba(34,197,94,0.4)' : 'none'
                        }}>
                          <span style={{ fontSize: '0.55rem', color: i === 0 ? '#22C55E' : '#E2E8F0', fontWeight: '700', display: 'block' }}>H{i + 1}</span>
                          <span className="mono-spec" style={{ fontSize: '0.5rem', color: i === 0 ? '#FFFFFF' : '#64748B' }}>
                            {i === 0 ? '94%' : `${80 - i * 5}%`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: ROAS Growth Chart */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '12px 14px', position: 'relative', zIndex: 2, backdropFilter: 'blur(16px)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#94A3B8', marginBottom: '6px' }}>
                      <span>Direct-Response Paid Ads</span>
                      <span style={{ color: '#22C55E', fontWeight: '700' }}>Scaling Meta & TikTok</span>
                    </div>
                    <svg width="100%" height="30" viewBox="0 0 280 30" fill="none">
                      <path d="M0 26C50 26 90 18 140 10C190 2 230 4 280 2" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 05: 3D SAAS & MOTION (Isometric Vector UI & 60FPS Cursor)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 4 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  
                  {/* Radiant Ambient Spotlight */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }} />

                  {/* 3D Isometric SaaS Window Card */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '260px',
                    height: '160px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.22)',
                    borderRadius: '16px',
                    padding: '12px',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: 'perspective(600px) rotateY(-8deg) rotateX(6deg)'
                  }}>
                    {/* Top Window Dots */}
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></div>
                    </div>

                    {/* Internal UI Wireframe Blocks */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px' }}>
                      <div style={{ height: '70px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ height: '32px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(56, 189, 248, 0.2))', borderRadius: '6px', border: '1px solid rgba(168, 85, 247, 0.4)' }}></div>
                        <div style={{ height: '32px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px' }}></div>
                      </div>
                    </div>

                    {/* Floating 60FPS Bezier Cursor Pill */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: '#1E1B4B',
                      border: '1px solid #A855F7',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                        <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679v-20.8z"/>
                      </svg>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#C084FC', fontWeight: '700' }}>60FPS BEZIER</span>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 920px) {
          .interactive-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .center-laser-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
