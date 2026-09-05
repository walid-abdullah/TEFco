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
        padding: '110px 0', 
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
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '840px', margin: '0 auto 60px' }}>
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
          INTERACTIVE 5-DISCIPLINE SHOWCASE (TIGHT & FULL COMPOSITION)
          ======================================================================== 
        */}
        <div 
          className="interactive-showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(330px, 1fr) 24px minmax(420px, 1.35fr)',
            gap: '24px',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                    padding: '12px 0',
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
                      margin: '0 0 8px',
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
            RIGHT COLUMN: BESPOKE COHESIVE ARTBOARDS (UNIFIED TITANIUM/INDIGO/CYAN)
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
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '22px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 30px 70px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
            >
              {/* Unified Cohesive Ambient Backlight Glow (Indigo / Electric Blue) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '85%',
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* 
                ------------------------------------------------------------------
                VISUAL 01: SHORTS & REELS (9:16 Kinetic Phone & Rich Retention Panel)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 0 && (
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '125px 1fr', gap: '16px', alignItems: 'center' }}>
                  
                  {/* Left: 9:16 Smartphone Frame */}
                  <div style={{
                    width: '125px',
                    height: '210px',
                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '18px',
                    background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}>
                    {/* Top Notch */}
                    <div style={{ width: '32px', height: '4px', background: 'rgba(255,255,255,0.25)', borderRadius: '999px', margin: '0 auto' }}></div>

                    {/* Center TikTok Play Bubble */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.4)' }}>
                        <i className="fa-brands fa-tiktok" style={{ color: '#FFF', fontSize: '0.95rem' }}></i>
                      </div>
                      <span style={{ fontSize: '0.62rem', color: '#FFF', fontWeight: '700', display: 'block' }}>Kinetic Hook</span>
                    </div>

                    {/* Bottom Progress Bar */}
                    <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #6366F1, #38BDF8)' }}></div>
                    </div>
                  </div>

                  {/* Right: Rich Stacked Analytics Modules (No Empty Space) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '210px', justifyContent: 'space-between' }}>
                    
                    {/* Retention Curve Card */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 12px', backdropFilter: 'blur(16px)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#94A3B8', marginBottom: '4px' }}>
                        <span>3-SEC HOOK RETENTION</span>
                        <span style={{ color: '#38BDF8', fontWeight: '700' }}>+84% PASS</span>
                      </div>
                      <svg width="100%" height="28" viewBox="0 0 200 28" fill="none">
                        <path d="M0 24C35 24 60 4 100 8C145 12 170 4 200 2" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Subtitle Sync Card */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(16px)' }}>
                      <i className="fa-solid fa-bolt" style={{ color: '#38BDF8', fontSize: '0.8rem' }}></i>
                      <div>
                        <span style={{ fontSize: '0.68rem', color: '#FFF', fontWeight: '700', display: 'block' }}>Word-by-Word Kinetic VFX</span>
                        <span className="mono-spec" style={{ fontSize: '0.55rem', color: '#94A3B8' }}>AUTO-SYNCED CAPTIONS</span>
                      </div>
                    </div>

                    {/* Platform Chips */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ flex: 1, textAlign: 'center', fontSize: '0.58rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 6px', borderRadius: '6px', color: '#E2E8F0' }}>Instagram Reels</span>
                      <span style={{ flex: 1, textAlign: 'center', fontSize: '0.58rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 6px', borderRadius: '6px', color: '#E2E8F0' }}>YouTube Shorts</span>
                    </div>

                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 02: MULTI-CAM PODCASTS (Full Multi-Cam Switcher Rack)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 1 && (
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Top: 2 Live Feeds (CAM A / CAM B) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    
                    {/* CAM A Host */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1.5px solid #38BDF8', borderRadius: '12px', padding: '10px 12px', backdropFilter: 'blur(16px)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.25)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#38BDF8', fontWeight: '700' }}>CAM A // HOST</span>
                        <span style={{ fontSize: '0.52rem', background: '#38BDF8', color: '#000', padding: '1px 5px', borderRadius: '3px', fontWeight: '800' }}>LIVE</span>
                      </div>
                      <div style={{ height: '48px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-microphone-lines" style={{ color: '#38BDF8', fontSize: '1.1rem' }}></i>
                        <span style={{ fontSize: '0.65rem', color: '#E2E8F0', fontWeight: '600' }}>Speaker Tracked</span>
                      </div>
                    </div>

                    {/* CAM B Guest */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 12px', backdropFilter: 'blur(16px)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: '700' }}>CAM B // GUEST</span>
                        <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.1)', color: '#CBD5E1', padding: '1px 5px', borderRadius: '3px' }}>SYNCED</span>
                      </div>
                      <div style={{ height: '48px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-user-group" style={{ color: '#94A3B8', fontSize: '1rem' }}></i>
                        <span style={{ fontSize: '0.65rem', color: '#94A3B8' }}>Sub-Frame Cut</span>
                      </div>
                    </div>

                  </div>

                  {/* Middle: Live Audio Waveform Rack */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backdropFilter: 'blur(16px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fa-solid fa-sliders" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: '#FFF', fontWeight: '700', display: 'block' }}>iZotope RX Studio De-Noise</span>
                        <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#94A3B8' }}>SPECTRAL VOCAL ISOLATION</span>
                      </div>
                    </div>
                    <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                      -14.0 LUFS
                    </span>
                  </div>

                  {/* Bottom: Batch Output Extract Card */}
                  <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '10px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: '600' }}>1-to-30 Viral Content Engine</span>
                    <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#38BDF8', fontWeight: '700' }}>10–20 CLIPS EXTRACTED ✓</span>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 03: YOUTUBE MASTERCLASS (Full Cinema Monitor Suite)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 2 && (
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Top Monitor Frame (Occupies Full Upper Area) */}
                  <div style={{
                    width: '100%',
                    height: '145px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}>
                    {/* Top Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#38BDF8', fontWeight: '700' }}>4K PRORES MASTER</span>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#CBD5E1' }}>ACEScc 1.3 D65 OLED</span>
                    </div>

                    {/* Center Play Button with Glow */}
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)' }}>
                      <i className="fa-solid fa-play" style={{ color: '#FFF', fontSize: '0.95rem', marginLeft: '3px' }}></i>
                    </div>

                    {/* Scrubber Progress Bar */}
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.12)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '68%', height: '100%', background: 'linear-gradient(90deg, #6366F1, #38BDF8)' }}></div>
                    </div>
                  </div>

                  {/* Bottom: J-Cut Chapters & Timeline Tracks */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(16px)' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#FFF', fontWeight: '700', display: 'block' }}>J-Cut Narrative & Custom 3D Thumbnails</span>
                      <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#94A3B8' }}>00:04:18 (HOOK) — 00:18:42 (OUTRO)</span>
                    </div>
                    <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: '700' }}>LOCKED ✓</span>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 04: PERFORMANCE ADS (Rich 5x Hook Matrix & Conversion Curve)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 3 && (
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Top: 5x Hook Variations (Fills Top Area) */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#FFFFFF', fontWeight: '700' }}>5X HOOK SPLIT-TEST BATCH</span>
                      <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: '700' }}>3.8X ROAS</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                      {['H1 (Winner)', 'H2', 'H3', 'H4', 'H5'].map((h, i) => (
                        <div key={i} style={{
                          background: i === 0 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.88)',
                          border: i === 0 ? '1.5px solid #38BDF8' : '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          padding: '10px 4px',
                          textAlign: 'center',
                          backdropFilter: 'blur(16px)',
                          boxShadow: i === 0 ? '0 0 15px rgba(56, 189, 248, 0.35)' : 'none'
                        }}>
                          <span style={{ fontSize: '0.58rem', color: i === 0 ? '#38BDF8' : '#E2E8F0', fontWeight: '700', display: 'block' }}>H{i + 1}</span>
                          <span className="mono-spec" style={{ fontSize: '0.52rem', color: i === 0 ? '#FFFFFF' : '#64748B' }}>
                            {i === 0 ? '94%' : `${80 - i * 5}%`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Middle: Conversion Graph */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px', backdropFilter: 'blur(16px)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#94A3B8', marginBottom: '6px' }}>
                      <span>Direct-Response Conversion Scaling</span>
                      <span style={{ color: '#38BDF8', fontWeight: '700' }}>Meta & TikTok Paid Feeds</span>
                    </div>
                    <svg width="100%" height="32" viewBox="0 0 280 32" fill="none">
                      <path d="M0 28C50 28 90 18 140 10C190 2 230 4 280 2" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Bottom: Dynamic Formats Row */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ flex: 1, textAlign: 'center', fontSize: '0.6rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '6px', color: '#E2E8F0' }}>9:16 Vertical Video</span>
                    <span style={{ flex: 1, textAlign: 'center', fontSize: '0.6rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '6px', color: '#E2E8F0' }}>4:5 Feed Format</span>
                    <span style={{ flex: 1, textAlign: 'center', fontSize: '0.6rem', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '4px 8px', borderRadius: '6px', color: '#38BDF8', fontWeight: '700' }}>Dynamic Popups</span>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                VISUAL 05: 3D SAAS & MOTION (Full 3D Vector Dashboard & 60FPS Track)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 4 && (
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Top: 3D SaaS Window UI (Fills Upper Area) */}
                  <div style={{
                    width: '100%',
                    height: '145px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}>
                    {/* Window Control Dots */}
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></div>
                    </div>

                    {/* Wireframe Mockup Rows */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '10px' }}>
                      <div style={{ height: '65px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ height: '30px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(56, 189, 248, 0.2))', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                        <div style={{ height: '30px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px' }}></div>
                      </div>
                    </div>

                    {/* Floating 60FPS Cursor Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      background: '#0F172A',
                      border: '1px solid #38BDF8',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                        <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679v-20.8z"/>
                      </svg>
                      <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#38BDF8', fontWeight: '700' }}>60FPS BEZIER</span>
                    </div>
                  </div>

                  {/* Bottom: Deliverables Bar */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(16px)' }}>
                    <span style={{ fontSize: '0.72rem', color: '#FFF', fontWeight: '700' }}>Pixel-Perfect Vector Reconstruction</span>
                    <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#38BDF8', fontWeight: '700' }}>SOURCE .AEP INCLUDED ✓</span>
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
