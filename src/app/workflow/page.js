"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const contentBodyRef = useRef(null);

  const steps = [
    {
      num: '01',
      code: 'STAGE_MOD_01',
      time: 'HOUR 00 — 04',
      name: 'INGEST & SYNC',
      status: 'POD ACTIVE',
      progressPercent: '10%',
      title: 'Automated Cloud Ingest & Multi-Cam Sync',
      headline: 'Zero-loss asset ingestion with automated sub-frame waveform alignment.',
      desc: 'Simply drop your raw camera cards into your dedicated Frame.io or Cloud Pod. Our pipeline instantly extracts camera LUT metadata (Sony S-Log3, RED IPP2, ProRes 422), auto-aligns multi-cam angles, and generates lightweight proxy files for immediate editing.',
      specs: [
        { label: 'INGEST SPEED', val: '1.2 GB/S SYNC' },
        { label: 'COLOR SPACE', val: 'S-LOG3 / RED IPP2' },
        { label: 'AUDIO ALIGN', val: 'SUB-FRAME AUTO' },
        { label: 'SECURITY', val: 'ENCRYPTED VAULT' }
      ]
    },
    {
      num: '02',
      code: 'STAGE_MOD_02',
      time: 'HOUR 04 — 12',
      name: 'HOOK ARCHITECTURE',
      status: 'HOOK LOCKED',
      progressPercent: '28%',
      title: 'Script Doctor & Retention Hook Architecture',
      headline: 'Engineering scroll-stopping 3-second pattern interrupts to conquer feed algorithms.',
      desc: 'Our Lead Editor and Creative Director dissect your raw footage. We isolate the most electrifying 3-second hook to prevent viewer drop-off, architect kinetic vector accents, and establish dynamic narrative pacing before locking the rough cut.',
      specs: [
        { label: 'HOOK RETENTION', val: '+84% WATCH-TIME' },
        { label: 'PATTERN INTERRUPT', val: '00:03s LOCK' },
        { label: 'KINETIC TITLES', val: 'FRAME-BY-FRAME' },
        { label: 'PACING CURVE', val: 'ALGORITHM NATIVE' }
      ]
    },
    {
      num: '03',
      code: 'STAGE_MOD_03',
      time: 'HOUR 12 — 24',
      name: 'NLE PRECISION CUT',
      status: 'ASSEMBLY LOCK',
      progressPercent: '50%',
      title: 'A-Roll & B-Roll Precision Assembly',
      headline: 'Eliminating filler words, micro-pauses, and breaths to create hypnotic pacing.',
      desc: 'Using DaVinci Resolve Studio & Premiere Pro, we execute sub-frame jump cuts, multi-angle camera punches, and visual B-roll placement to ensure every second moves the viewer toward taking action with zero dead air.',
      specs: [
        { label: 'BREATH REMOVAL', val: '100% CLEANSED' },
        { label: 'CAMERA SWITCH', val: 'SUB-FRAME CUTS' },
        { label: 'B-ROLL SYNC', val: 'CONTEXTUAL 4K' },
        { label: 'NARRATIVE SPEED', val: 'HIGH-VELOCITY' }
      ]
    },
    {
      num: '04',
      code: 'STAGE_MOD_04',
      time: 'HOUR 24 — 38',
      name: 'STUDIO MASTERING',
      status: 'ACEScc MASTERED',
      progressPercent: '78%',
      title: 'Studio Color Science & Spectral Audio Sweetening',
      headline: 'Hollywood ACEScc broadcast grading combined with -14.0 LUFS vocal sweetening.',
      desc: 'Every frame is color-graded on calibrated OLED monitors using ACEScc 1.3 color management. In parallel, vocal stems undergo spectral isolation and de-noising in iZotope RX for broadcast-grade acoustic clarity across mobile and studio speakers.',
      specs: [
        { label: 'COLOR STANDARD', val: 'ACEScc 1.3 OLED' },
        { label: 'AUDIO LEVEL', val: '-14.0 LUFS MASTER' },
        { label: 'DE-NOISING', val: 'iZOTOPE RX SUITE' },
        { label: 'BIT DEPTH', val: '10-BIT 4:2:2 PRORES' }
      ]
    },
    {
      num: '05',
      code: 'STAGE_MOD_05',
      time: 'HOUR 38 — 48',
      name: 'MULTI-PLATFORM DISPATCH',
      status: 'DISPATCH READY',
      progressPercent: '100%',
      title: '48-Hour Multi-Platform Delivery & 1-Click Review',
      headline: 'Master deliverables formatted for TikTok, Reels, YouTube 4K, and paid ad channels.',
      desc: 'Your finished 4K master is uploaded to your private Frame.io review pod. Click directly on any video frame to leave timecoded notes or approve with a single click. Receive all source .AEP files, fonts, and multi-aspect ratio renders.',
      specs: [
        { label: 'VERTICAL 9:16', val: 'TIKTOK / REELS' },
        { label: 'HORIZONTAL 16:9', val: 'YOUTUBE 4K PRORES' },
        { label: 'CLIENT REVIEW', val: '1-CLICK FRAME.IO' },
        { label: 'SLA GUARANTEE', val: 'UNDER 48 HOURS' }
      ]
    }
  ];

  // GSAP Kinetic Slide-In Animation on Active Step Change
  useEffect(() => {
    if (contentBodyRef.current) {
      gsap.fromTo(
        contentBodyRef.current.children,
        {
          x: 40,
          opacity: 0,
          filter: 'blur(4px)'
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out'
        }
      );
    }
  }, [activeStep]);

  const current = steps[activeStep];

  return (
    <div className="workflow-page" style={{ minHeight: '100vh', padding: '140px 0 110px', background: '#05070B', position: 'relative', overflow: 'hidden' }}>
      
      {/* Ambient Backdrop Radiance */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.04) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1220px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '840px', margin: '0 auto 75px' }}>
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
          CYBER-HUD STUDIO CONTROL RAIL & DYNAMIC KINETIC SLIDE CANVAS
          ======================================================================== 
        */}
        <div 
          className="workflow-hud-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) minmax(460px, 1fr)',
            gap: '40px',
            alignItems: 'stretch',
            maxWidth: '1180px',
            margin: '0 auto 85px'
          }}
        >
          
          {/* 
            ----------------------------------------------------------------------
            LEFT COLUMN: FUTURISTIC STUDIO STAGE TRACKER (HUD RAIL)
            ----------------------------------------------------------------------
          */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;

              return (
                <div 
                  key={st.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: isActive 
                      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    border: isActive 
                      ? '1px solid rgba(56, 189, 248, 0.4)' 
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: isActive 
                      ? '0 10px 30px rgba(0,0,0,0.8), 0 0 25px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(255,255,255,0.15)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    
                    {/* Glowing Live State Dot */}
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: isActive ? '#38BDF8' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isActive ? '0 0 12px #38BDF8' : 'none',
                      transition: 'all 0.3s ease'
                    }}></div>

                    {/* Step Title & Index */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: isActive ? '#38BDF8' : '#64748B', fontWeight: '700' }}>
                          {st.code}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem' }}>/</span>
                        <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#94A3B8' }}>
                          {st.time}
                        </span>
                      </div>
                      <span style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: '700', 
                        color: isActive ? '#FFFFFF' : '#64748B',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.01em',
                        transition: 'color 0.3s ease'
                      }}>
                        {st.name}
                      </span>
                    </div>

                  </div>

                  {/* Active Indicator Arrow */}
                  <i 
                    className="fa-solid fa-chevron-right" 
                    style={{ 
                      color: isActive ? '#38BDF8' : 'transparent', 
                      fontSize: '0.75rem',
                      transform: isActive ? 'translateX(0)' : 'translateX(-6px)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* 
            ----------------------------------------------------------------------
            RIGHT COLUMN: DYNAMIC GSAP KINETIC SLIDE CANVAS (FULL BODY ANIMATION)
            ----------------------------------------------------------------------
          */}
          <div 
            style={{
              position: 'relative',
              background: '#070A14',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.08)',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Spotlight Behind Active Canvas */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '80%',
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%)',
                filter: 'blur(45px)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* GSAP Animated Content Container */}
            <div ref={contentBodyRef} style={{ position: 'relative', zIndex: 1 }}>
              
              {/* Telemetry Header Badge Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="mono-spec" style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: '800', letterSpacing: '0.08em' }}>
                    {current.stage}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>—</span>
                  <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                    ⏱️ {current.time}
                  </span>
                </div>

                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: '800', letterSpacing: '0.06em' }}>
                  ● {current.status}
                </span>
              </div>

              {/* Title in Syne */}
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
                fontWeight: '800', 
                color: '#FFFFFF', 
                margin: '0 0 12px', 
                letterSpacing: '-0.025em', 
                lineHeight: '1.2',
                fontFamily: 'var(--font-heading)'
              }}>
                {current.title}
              </h2>

              {/* Headline */}
              <p style={{ fontSize: '1.02rem', fontWeight: '600', color: '#38BDF8', margin: '0 0 14px', lineHeight: '1.45' }}>
                "{current.headline}"
              </p>

              {/* Detailed Breakdown */}
              <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: '1.65', margin: '0 0 28px', maxWidth: '640px' }}>
                {current.desc}
              </p>

              {/* 4 Telemetry Spec Blocks (Sliding from Right) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                {current.specs.map((sp, i) => (
                  <div 
                    key={i}
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#64748B', display: 'block', marginBottom: '4px', letterSpacing: '0.04em' }}>
                      {sp.label}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#FFFFFF', fontWeight: '700' }}>
                      {sp.val}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom 48H Timeline Progress Meter */}
            <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', color: '#94A3B8', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                  <span>PIPELINE VELOCITY</span>
                  <span style={{ color: '#38BDF8', fontWeight: '700' }}>{current.progressPercent} OF 48H SLA</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: current.progressPercent, height: '100%', background: 'linear-gradient(90deg, #6366F1, #38BDF8)', transition: 'width 0.5s ease' }}></div>
                </div>
              </div>

              <Link
                href="/book-a-call"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  color: '#05070B',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}
              >
                Onboard Pod ➔
              </Link>
            </div>

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
            padding: '55px 30px',
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
        @media (max-width: 900px) {
          .workflow-hud-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
