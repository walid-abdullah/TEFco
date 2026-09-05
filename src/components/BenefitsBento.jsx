"use client";

import React from 'react';

export default function BenefitsBento() {
  const steps = [
    {
      id: 'step-01',
      num: '01',
      indexLabel: 'STAGE // 01',
      title: 'Ingest & Sync',
      tag: 'FRAME.IO VAULT',
      desc: 'Upload raw camera cards to your dedicated cloud pod. Multi-cam angles auto-sync and camera LUT metadata is extracted within minutes.',
      visualType: 'ingest'
    },
    {
      id: 'step-02',
      num: '02',
      indexLabel: 'STAGE // 02',
      title: 'Hook Architecture',
      tag: 'RETENTION PSYCHOLOGY',
      desc: 'We engineer scroll-stopping 3-second pattern interrupts, pacing curves, and kinetic typography before locking the rough cut.',
      visualType: 'hook'
    },
    {
      id: 'step-03',
      num: '03',
      indexLabel: 'STAGE // 03',
      title: 'Studio Mastering',
      tag: 'DAVINCI + iZOTOPE RX',
      desc: 'ACEScc broadcast color grading in DaVinci Studio paired with spectral de-noising and -14.0 LUFS audio sweetening for crisp playback.',
      visualType: 'mastering'
    },
    {
      id: 'step-04',
      num: '04',
      indexLabel: 'STAGE // 04',
      title: '48H Dispatch',
      tag: 'MULTI-PLATFORM 4K',
      desc: 'Receive master ProRes deliverables formatted in 9:16 vertical and 16:9 widescreen with instant Frame.io client review and source archives.',
      visualType: 'dispatch'
    }
  ];

  return (
    <section style={{ position: 'relative', background: '#05070B', padding: '120px 0', overflow: 'hidden' }}>
      
      {/* Background Subtle Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.03) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '820px', margin: '0 auto 85px' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)', margin: '0 0 14px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
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
          <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: '1.6', margin: '0 auto', maxWidth: '600px' }}>
            An illustrated breakdown of our battle-tested video post-production infrastructure.
          </p>
        </div>

        {/* 
          ========================================================================
          ULTRA-MINIMAL CONNECTED WORKFLOW TIMELINE
          ======================================================================== 
        */}
        <div style={{ position: 'relative' }}>
          
          {/* Vertical Connecting Hairline Rail */}
          <div 
            className="timeline-vertical-rail"
            style={{
              position: 'absolute',
              top: '24px',
              bottom: '120px',
              left: '7px',
              width: '1px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(56,189,248,0.3) 50%, rgba(255,255,255,0.1) 100%)',
              zIndex: 0
            }}
          />

          {/* 4 Connected Step Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '85px' }}>
            {steps.map((step) => (
              <div 
                key={step.id}
                className="step-timeline-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 1.25fr)',
                  gap: '50px',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                
                {/* 
                  ----------------------------------------------------------------
                  LEFT: MINIMAL EDITORIAL NODE & TEXT
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', paddingLeft: '36px', textAlign: 'left' }}>
                  
                  {/* Glowing Square Marker */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '15px',
                      height: '15px',
                      background: '#FFFFFF',
                      borderRadius: '2px',
                      boxShadow: '0 0 16px rgba(255,255,255,0.8)',
                      zIndex: 2
                    }}
                  />

                  {/* Stage Meta Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', fontWeight: '700', letterSpacing: '0.06em' }}>
                      {step.indexLabel}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>—</span>
                    <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#94A3B8' }}>
                      {step.tag}
                    </span>
                  </div>

                  {/* Title in Syne */}
                  <h3 style={{ 
                    fontSize: 'clamp(1.9rem, 2.6vw, 2.4rem)', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    margin: '0 0 14px', 
                    letterSpacing: '-0.03em', 
                    lineHeight: '1.15',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {step.title}
                  </h3>

                  {/* Clean 2-Line Editorial Description */}
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '0.98rem', 
                    lineHeight: '1.65', 
                    margin: 0,
                    maxWidth: '420px',
                    fontWeight: '400'
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* 
                  ----------------------------------------------------------------
                  RIGHT: ULTRA-MINIMAL BESPOKE POST-PRODUCTION VISUAL ARTBOARD
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '520px', justifySelf: 'center' }}>
                  
                  {/* Radiant Ambient Spotlight Backlight */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '90%',
                      height: '80%',
                      background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
                      filter: 'blur(35px)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* 
                    ==============================================================
                    VISUAL 1: INGEST & RAW SYNC (Ultra-Minimalist Pod)
                    ============================================================== 
                  */}
                  {step.visualType === 'ingest' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A14',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38BDF8', boxShadow: '0 0 10px #38BDF8' }}></span>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>FRAME.IO CLOUD POD</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '3px 8px', borderRadius: '4px' }}>
                          1.2 GB/S SYNC
                        </span>
                      </div>

                      {/* Center Ingest Stream Card */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fa-solid fa-hard-drive" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#FFFFFF' }}>A_CAM_SONY_FX3_RAW.mov</span>
                          </div>
                          <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#38BDF8', fontWeight: '700' }}>INGESTED ✓</span>
                        </div>

                        {/* Progress Bar */}
                        <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #6366F1, #38BDF8)' }}></div>
                        </div>
                      </div>

                      {/* Codec Meta Tags */}
                      <div style={{ display: 'flex', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E2E8F0' }}>
                          SONY S-LOG3
                        </span>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E2E8F0' }}>
                          RED IPP2
                        </span>
                        <span className="mono-spec" style={{ fontSize: '0.64rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8' }}>
                          10-BIT PRORES
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: HOOK ARCHITECTURE (Clean Retention Curve & Scene Lock)
                    ============================================================== 
                  */}
                  {step.visualType === 'hook' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A14',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-bolt" style={{ color: '#38BDF8', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>3-SEC HOOK RETENTION CURVE</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          +84% WATCH-TIME
                        </span>
                      </div>

                      {/* Retention Graph Visualization */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                          <span>00:00 (Hook Intro)</span>
                          <span>00:03 (Pattern Interrupt)</span>
                          <span>00:45 (Payoff)</span>
                        </div>

                        {/* Clean SVG Curve */}
                        <svg width="100%" height="45" viewBox="0 0 280 45" fill="none">
                          <path d="M0 38C40 38 70 8 120 12C180 16 220 6 280 4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M0 42C40 42 70 28 120 30C180 34 220 22 280 20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                        </svg>
                      </div>

                      {/* Hook Variation Chips */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>HOOK A</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#38BDF8' }}>92% PASS</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>HOOK B</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#38BDF8' }}>88% PASS</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}>
                          <span style={{ fontSize: '0.62rem', color: '#E2E8F0', fontWeight: '700', display: 'block' }}>PACING</span>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#A5B4FC' }}>DYNAMIC</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: STUDIO MASTERING (Audio Spectrum & Color Science)
                    ============================================================== 
                  */}
                  {step.visualType === 'mastering' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A14',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-sliders" style={{ color: '#38BDF8', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>DAVINCI + iZOTOPE RX MASTER</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          -14.0 LUFS
                        </span>
                      </div>

                      {/* Spectrum EQ Box */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#94A3B8', marginBottom: '8px' }}>
                          <span>SPECTRAL VOCAL CLARITY</span>
                          <span className="mono-spec" style={{ color: '#38BDF8' }}>DE-NOISE APPLIED</span>
                        </div>

                        {/* Multi-Bar Spectrum */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '38px' }}>
                          {[45, 80, 60, 95, 70, 85, 40, 90, 65, 100, 50, 75, 90, 60].map((val, i) => (
                            <div 
                              key={i} 
                              style={{ 
                                flex: 1, 
                                height: `${val}%`, 
                                background: val > 75 ? 'linear-gradient(180deg, #FFFFFF, #38BDF8)' : 'linear-gradient(180deg, #38BDF8, #6366F1)', 
                                borderRadius: '2px'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Color Gamut Scope */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A5B4FC' }}></span>
                          <span style={{ fontSize: '0.74rem', color: '#E2E8F0' }}>ACEScc 1.3 D65 OLED Calibrated</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: '700' }}>10-BIT PRORES</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: 48H DISPATCH (Multi-Format Previews & Client Approval)
                    ============================================================== 
                  */}
                  {step.visualType === 'dispatch' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A14',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-cloud-arrow-down" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>4K MULTI-PLATFORM DISPATCH</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          READY &lt; 48H
                        </span>
                      </div>

                      {/* Multi-Format Render Previews */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', position: 'relative', zIndex: 1 }}>
                        
                        {/* 9:16 Reel Asset */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(16px)' }}>
                          <div style={{ width: '22px', height: '36px', background: 'linear-gradient(180deg, #6366F1, #38BDF8)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-mobile-screen" style={{ color: '#FFF', fontSize: '0.6rem' }}></i>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>9:16 Vertical</span>
                            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8' }}>TikTok / Reels / Shorts</span>
                          </div>
                        </div>

                        {/* 16:9 Master Asset */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(16px)' }}>
                          <div style={{ width: '36px', height: '22px', background: 'linear-gradient(180deg, #38BDF8, #818CF8)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-brands fa-youtube" style={{ color: '#FFF', fontSize: '0.65rem' }}></i>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>16:9 Master</span>
                            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8' }}>YouTube 4K ProRes</span>
                          </div>
                        </div>

                      </div>

                      {/* 1-Click Client Approval Pod */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '10px 14px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                          <span style={{ fontSize: '0.74rem', color: '#FFFFFF', fontWeight: '600' }}>1-Click Client Approval Pod</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#38BDF8', fontWeight: '700' }}>DISPATCHED ✓</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Responsive Media Query */}
      <style jsx>{`
        @media (max-width: 880px) {
          .step-timeline-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .timeline-vertical-rail {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
