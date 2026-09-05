"use client";

import React from 'react';
import Link from 'next/link';

export default function WorkflowPage() {
  const pipeline = [
    {
      num: '01',
      stage: 'STAGE // 01',
      time: 'HOUR 00 – 04',
      title: 'Automated Cloud Ingest & Sync',
      tag: 'FRAME.IO VAULT',
      desc: 'Drag and drop camera cards to your private cloud pod. Multi-cam angles auto-align and camera LUT metadata (S-Log3, RED IPP2, ProRes) is extracted instantly.',
      visualType: 'ingest'
    },
    {
      num: '02',
      stage: 'STAGE // 02',
      time: 'HOUR 04 – 12',
      title: 'Retention Hook Architecture',
      tag: 'ALGORITHM PACING',
      desc: 'We dissect narrative pacing to construct scroll-stopping 3-second pattern interrupts, kinetic vector titles, and retention curves before locking the rough cut.',
      visualType: 'hook'
    },
    {
      num: '03',
      stage: 'STAGE // 03',
      time: 'HOUR 12 – 24',
      title: 'A-Roll Precision Assembly',
      tag: 'NLE TIMELINE CUT',
      desc: 'Sub-frame jump cuts, multi-angle punches, and audio breath removal in Premiere & DaVinci to build an airtight narrative rhythm with zero filler.',
      visualType: 'assembly'
    },
    {
      num: '04',
      stage: 'STAGE // 04',
      time: 'HOUR 24 – 38',
      title: 'Studio Color & Audio Mastering',
      tag: 'ACEScc + iZOTOPE RX',
      desc: 'DaVinci Studio broadcast color grading calibrated to ACEScc OLED standards, paired with spectral de-noising and -14.0 LUFS audio sweetening.',
      visualType: 'mastering'
    },
    {
      num: '05',
      stage: 'STAGE // 05',
      time: 'HOUR 38 – 48',
      title: '48H Multi-Platform Dispatch',
      tag: 'FRAME.IO APPROVAL',
      desc: 'Receive master ProRes deliverables formatted in 9:16 vertical and 16:9 widescreen with timecoded review pins and full project source archive files.',
      visualType: 'dispatch'
    }
  ];

  return (
    <div className="workflow-page" style={{ minHeight: '100vh', padding: '140px 0 110px', background: '#05070B', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Subtle Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.035) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '840px', margin: '0 auto 85px' }}>
          <h1 
            className="section-title" 
            style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
              fontWeight: '800', 
              letterSpacing: '-0.03em', 
              marginBottom: '16px',
              color: '#FFFFFF',
              fontFamily: 'var(--font-heading)'
            }}
          >
            From Raw Footage to <br />
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
              Viral Asset in 48 Hours.
            </span>
          </h1>
          <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: '1.05rem', color: '#94A3B8', lineHeight: '1.65' }}>
            No freelancer delays. No endless back-and-forth. Discover our battle-tested 48-hour video post-production pipeline.
          </p>
        </div>

        {/* 
          ========================================================================
          ULTRA-MINIMAL CONNECTED 48-HOUR WORKFLOW ROADMAP
          ======================================================================== 
        */}
        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto 90px' }}>
          
          {/* Vertical Connecting Hairline Rail */}
          <div 
            className="timeline-vertical-rail"
            style={{
              position: 'absolute',
              top: '28px',
              bottom: '120px',
              left: '7px',
              width: '1px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(56,189,248,0.4) 50%, rgba(255,255,255,0.1) 100%)',
              zIndex: 0
            }}
          />

          {/* Connected Step Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '85px' }}>
            {pipeline.map((step) => (
              <div 
                key={step.num}
                className="workflow-step-row"
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
                  LEFT: PROGRESS NODE & EDITORIAL COPY
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', paddingLeft: '38px', textAlign: 'left' }}>
                  
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
                      boxShadow: '0 0 16px rgba(255,255,255,0.85)',
                      zIndex: 2
                    }}
                  />

                  {/* Stage Timecode & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', fontWeight: '700', letterSpacing: '0.06em' }}>
                      {step.stage}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>—</span>
                    <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#94A3B8', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                      ⏱️ {step.time}
                    </span>
                  </div>

                  {/* Title in Syne */}
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    margin: '0 0 14px', 
                    letterSpacing: '-0.03em', 
                    lineHeight: '1.15',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {step.title}
                  </h2>

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
                  RIGHT: ULTRA-MINIMAL BESPOKE POST-PRODUCTION VISUAL ARTBOARDS
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '520px', justifySelf: 'center' }}>
                  
                  {/* Ambient Radiant Glow Under Visual */}
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
                    VISUAL 1: RAW INGEST & CODEC SYNC
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

                      {/* Ingest Stream Box */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fa-solid fa-hard-drive" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#FFFFFF' }}>A_CAM_SONY_FX3_RAW.mov</span>
                          </div>
                          <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#38BDF8', fontWeight: '700' }}>INGESTED ✓</span>
                        </div>
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
                    VISUAL 2: RETENTION HOOK ARCHITECTURE
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
                    VISUAL 3: A-ROLL & B-ROLL NLE ASSEMBLY
                    ============================================================== 
                  */}
                  {step.visualType === 'assembly' && (
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
                          <i className="fa-solid fa-scissors" style={{ color: '#38BDF8', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>NLE MULTI-TRACK ASSEMBLY</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          00:01:24:18
                        </span>
                      </div>

                      {/* Multi-Track NLE Tracks View */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                          <span>V2 // B-ROLL CUTS</span>
                          <span>V1 // A-ROLL SYNC</span>
                          <span>A1 // DIALOGUE STEMS</span>
                        </div>

                        {/* Tracks */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '25%', background: 'rgba(56, 189, 248, 0.4)', borderRadius: '3px' }}></div>
                            <div style={{ width: '45%', background: 'rgba(56, 189, 248, 0.7)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.6)' }}></div>
                            <div style={{ width: '25%', background: 'rgba(56, 189, 248, 0.4)', borderRadius: '3px' }}></div>
                          </div>
                          <div style={{ display: 'flex', gap: '4px', height: '16px' }}>
                            <div style={{ width: '35%', background: 'rgba(99, 102, 241, 0.65)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '35%', background: 'rgba(99, 102, 241, 0.65)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '26%', background: 'rgba(168, 85, 247, 0.65)', borderRadius: '4px' }}></div>
                          </div>
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                          </div>
                        </div>
                      </div>

                      {/* Jump Cut Readout */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.72rem', color: '#E2E8F0' }}>Breath Removal & Multi-Angle Punch-Ins</span>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#38BDF8', fontWeight: '700' }}>TIGHT RHYTHM</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: STUDIO MASTERING (Audio Spectrum & Color Science)
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
                    VISUAL 5: 48H DISPATCH & 1-CLICK APPROVAL
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

                      {/* Multi-Format Previews */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', position: 'relative', zIndex: 1 }}>
                        
                        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(16px)' }}>
                          <div style={{ width: '22px', height: '36px', background: 'linear-gradient(180deg, #6366F1, #38BDF8)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-mobile-screen" style={{ color: '#FFF', fontSize: '0.6rem' }}></i>
                          </div>
                          <div>
                            <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>9:16 Vertical</span>
                            <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#94A3B8' }}>TikTok / Reels / Shorts</span>
                          </div>
                        </div>

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

        {/* 
          ========================================================================
          BOTTOM CALL-TO-ACTION VAULT CARD
          ======================================================================== 
        */}
        <div 
          className="text-center reveal-on-scroll"
          style={{
            padding: '50px 30px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(7, 10, 20, 0.95) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.1)',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '12px', color: '#FFFFFF', letterSpacing: '-0.025em', fontFamily: 'var(--font-heading)' }}>
            Experience 48-Hour Turnaround On Your Next Video
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.02rem', maxWidth: '580px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Book a 15-minute intro call with Executive Producer Walid Abdullah to onboard your dedicated post-production pod.
          </p>
          <Link 
            href="/book-a-call" 
            className="btn btn-primary pop-btn"
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              fontSize: '0.92rem',
              fontWeight: '800',
              background: '#FFFFFF',
              color: '#05070B',
              border: '1px solid #FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 0 25px rgba(255,255,255,0.4)'
            }}
          >
            <span>Book Founder Call</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
          </Link>
        </div>

      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 880px) {
          .workflow-step-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .timeline-vertical-rail {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
