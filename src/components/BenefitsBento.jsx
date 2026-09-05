"use client";

import React, { useState, useEffect } from 'react';

export default function BenefitsBento() {
  const [eqHeights, setEqHeights] = useState([45, 80, 60, 95, 70, 85, 40, 90, 65, 100, 50, 75, 90, 60, 85]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEqHeights(prev => prev.map(() => Math.floor(Math.random() * 65) + 35));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 'step-01',
      title: 'Ingest & Sync',
      num: '01',
      desc: 'Upload your raw camera cards to your dedicated Frame.io or Cloud Pod. Our pipeline automatically organizes multi-cam angles and extracts camera LUT metadata.',
      visualType: 'ingest',
      align: 'left' // Text Left, Visual Right
    },
    {
      id: 'step-02',
      title: 'Hook Engineering',
      num: '02',
      desc: 'We architect scroll-stopping 3-second pattern interrupts, retention pacing curves, and kinetic vector titles tailored to feed algorithms before locking the rough cut.',
      visualType: 'retention',
      align: 'right' // Visual Left, Text Right
    },
    {
      id: 'step-03',
      title: 'Studio Mastering',
      num: '03',
      desc: 'ACEScc broadcast color grading in DaVinci Studio paired with spectral de-noising and -14.0 LUFS audio sweetening in iZotope RX for crisp multi-device playback.',
      visualType: 'mastering',
      align: 'left' // Text Left, Visual Right
    },
    {
      id: 'step-04',
      title: '48H Dispatch',
      num: '04',
      desc: 'Receive master ProRes deliverables formatted in 9:16 vertical and 16:9 widescreen with instant Frame.io timecoded review and full project archive files.',
      visualType: 'dispatch',
      align: 'right' // Visual Left, Text Right
    }
  ];

  return (
    <section style={{ position: 'relative', background: '#05070B', padding: '130px 0', overflow: 'hidden' }}>
      
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

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '820px', margin: '0 auto 80px' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', margin: '0 0 16px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Systematic Velocity. <br />
            <span 
              className="serif-accent"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 20%, #CBD5E1 65%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '400',
                paddingRight: '6px'
              }}
            >
              Mastered in 48 Hours.
            </span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto', maxWidth: '640px' }}>
            An illustrated breakdown of our battle-tested video post-production infrastructure.
          </p>
        </div>

        {/* 
          ========================================================================
          ALTERNATING (LEFT / RIGHT) CONNECTED WORKFLOW ROADMAP
          ======================================================================== 
        */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '90px', position: 'relative' }}>
          
          {steps.map((step, idx) => {
            const isTextLeft = step.align === 'left';

            return (
              <div 
                key={step.id}
                className="alternating-step-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                
                {/* 
                  ----------------------------------------------------------------
                  TEXT CONTENT BLOCK (Dynamically Ordered)
                  ----------------------------------------------------------------
                */}
                <div 
                  style={{
                    order: isTextLeft ? 1 : 2,
                    textAlign: 'left',
                    position: 'relative',
                    paddingLeft: '32px'
                  }}
                >
                  {/* Glowing Square Node Marker */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '14px',
                      height: '14px',
                      background: '#FFFFFF',
                      borderRadius: '2px',
                      boxShadow: '0 0 16px rgba(255,255,255,0.7)',
                      zIndex: 2
                    }}
                  />

                  {/* Title with Step Number in Syne Font */}
                  <h3 style={{ 
                    fontSize: 'clamp(2rem, 3vw, 2.6rem)', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    margin: '0 0 16px', 
                    letterSpacing: '-0.035em', 
                    lineHeight: '1.15',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '14px'
                  }}>
                    <span>{step.title}</span>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: '500', 
                      color: 'rgba(255, 255, 255, 0.4)',
                      letterSpacing: '0.04em'
                    }}>
                      {step.num}
                    </span>
                  </h3>

                  {/* Clean 2-Line Editorial Description */}
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '1rem', 
                    lineHeight: '1.65', 
                    margin: 0,
                    maxWidth: '460px',
                    fontWeight: '400'
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* 
                  ----------------------------------------------------------------
                  BESPOKE ANIMATED VISUAL ARTBOARD
                  ----------------------------------------------------------------
                */}
                <div 
                  style={{
                    order: isTextLeft ? 2 : 1,
                    position: 'relative',
                    width: '100%',
                    maxWidth: '520px',
                    justifySelf: 'center'
                  }}
                >
                  {/* Ambient Radiant Glow Under Visual */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '85%',
                      height: '75%',
                      background: idx === 0 
                        ? 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%)'
                        : idx === 1 
                        ? 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 75%)'
                        : idx === 2 
                        ? 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.35) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)'
                        : 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 75%)',
                      filter: 'blur(45px)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* 
                    ==============================================================
                    VISUAL 1: CLOUD INGEST & CODEC SYNC ARTBOARD (Animated)
                    ============================================================== 
                  */}
                  {step.visualType === 'ingest' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="pulsing-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }}></span>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>FRAME.IO CLOUD POD</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '3px 8px', borderRadius: '4px' }}>
                          1.2 GB/S SYNC
                        </span>
                      </div>

                      {/* Animated Ingest Stream Box */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fa-solid fa-hard-drive" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#FFFFFF' }}>A_CAM_SONY_FX3_RAW.mov</span>
                          </div>
                          <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#22C55E', fontWeight: '700' }}>100% INGESTED</span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden', position: 'relative' }}>
                          <div className="animated-progress-fill" style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #38BDF8, #22C55E)' }}></div>
                        </div>
                      </div>

                      {/* Codec Meta Tags */}
                      <div style={{ display: 'flex', gap: '8px', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E2E8F0' }}>
                          SONY S-LOG3
                        </span>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E2E8F0' }}>
                          RED IPP2
                        </span>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 8px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8' }}>
                          10-BIT 4:2:2 PRORES
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: HOOK RETENTION & PACING MATRIX (Animated)
                    ============================================================== 
                  */}
                  {step.visualType === 'retention' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-bolt" style={{ color: '#F43F5E', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>3-SEC HOOK RETENTION CURVE</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#EC4899', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          +84% WATCH-TIME
                        </span>
                      </div>

                      {/* Retention Graph Visualization */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#64748B', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                          <span>00:00 (Hook Intro)</span>
                          <span>00:03 (Pattern Interrupt)</span>
                          <span>00:45 (Payoff)</span>
                        </div>

                        {/* Animated SVG Curve */}
                        <svg width="100%" height="45" viewBox="0 0 280 45" fill="none">
                          <path d="M0 38C40 38 70 8 120 12C180 16 220 6 280 4" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M0 42C40 42 70 28 120 30C180 34 220 22 280 20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                        </svg>
                      </div>

                      {/* Hook Variation Chips */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>HOOK A</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#22C55E' }}>92% PASS</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>HOOK B</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#38BDF8' }}>88% PASS</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>PACING</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#EC4899' }}>DYNAMIC</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: DAVINCI COLOR & IZOTOPE AUDIO SUITE (Live EQ Bars)
                    ============================================================== 
                  */}
                  {step.visualType === 'mastering' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-sliders" style={{ color: '#22C55E', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>DAVINCI + iZOTOPE RX MASTER</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#22C55E', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          -14.0 LUFS
                        </span>
                      </div>

                      {/* Live Animated Audio Waveform EQ */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#94A3B8', marginBottom: '8px' }}>
                          <span>SPECTRAL VOCAL CLARITY</span>
                          <span className="mono-spec" style={{ color: '#22C55E' }}>DE-NOISE APPLIED</span>
                        </div>

                        {/* Animated Multi-Bar EQ Spectrum */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '36px' }}>
                          {eqHeights.map((h, i) => (
                            <div 
                              key={i} 
                              style={{ 
                                flex: 1, 
                                height: `${h}%`, 
                                background: h > 80 ? '#22C55E' : h > 60 ? '#38BDF8' : 'rgba(255,255,255,0.4)', 
                                borderRadius: '2px',
                                transition: 'height 0.4s ease'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Color Gamut Readout */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C084FC' }}></span>
                          <span style={{ fontSize: '0.74rem', color: '#E2E8F0' }}>ACEScc 1.3 D65 OLED Calibrated</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#C084FC', fontWeight: '700' }}>10-BIT PRORES</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: MULTI-PLATFORM 4K DISPATCH & 1-CLICK APPROVAL
                    ============================================================== 
                  */}
                  {step.visualType === 'dispatch' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-cloud-arrow-down" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>4K MULTI-PLATFORM DISPATCH</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#22C55E', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          READY &lt; 48H
                        </span>
                      </div>

                      {/* Multi-Format Render Previews */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', position: 'relative', zIndex: 1 }}>
                        
                        {/* 9:16 Reel Asset */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(16px)' }}>
                          <div style={{ width: '22px', height: '36px', background: 'linear-gradient(180deg, #6366F1, #38BDF8)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-mobile-screen" style={{ color: '#FFF', fontSize: '0.6rem' }}></i>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>9:16 Vertical</span>
                            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8' }}>TikTok / Reels / Shorts</span>
                          </div>
                        </div>

                        {/* 16:9 Master Asset */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(16px)' }}>
                          <div style={{ width: '36px', height: '22px', background: 'linear-gradient(180deg, #EC4899, #8B5CF6)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-brands fa-youtube" style={{ color: '#FFF', fontSize: '0.65rem' }}></i>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>16:9 Master</span>
                            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8' }}>YouTube 4K ProRes</span>
                          </div>
                        </div>

                      </div>

                      {/* 1-Click Frame.io Instant Review Pin */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.25)', padding: '10px 14px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: '#22C55E', fontSize: '0.85rem' }}></i>
                          <span style={{ fontSize: '0.74rem', color: '#FFFFFF', fontWeight: '600' }}>1-Click Client Approval Pod</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#22C55E', fontWeight: '700' }}>DISPATCHED ✓</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Global CSS for Animations and Responsive Mobile Layout */}
      <style jsx>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .pulsing-dot {
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes fillStream {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animated-progress-fill {
          background-size: 200% 200%;
          animation: fillStream 3s ease infinite;
        }

        @media (max-width: 880px) {
          .alternating-step-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .alternating-step-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}


