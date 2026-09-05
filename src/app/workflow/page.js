"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      stage: 'STAGE // 01',
      time: 'HOUR 00 — 04',
      status: 'AUTO-SYNCED ✓',
      title: 'Automated Cloud Ingest & Multi-Cam Sync',
      desc: 'Drag and drop raw camera cards to your private cloud pod. Multi-cam angles auto-align, proxy files generate, and camera LUT metadata is extracted within minutes.',
      tags: [
        'Sony S-Log3 / RED IPP2 / ProRes 422',
        'Frame.io Dedicated Cloud Vault',
        'Sub-Frame Audio Waveform Auto-Align',
        'Automated Asset Ingestion Pipeline'
      ]
    },
    {
      num: '02',
      stage: 'STAGE // 02',
      time: 'HOUR 04 — 12',
      status: 'HOOK LOCKED ✓',
      title: 'Script Doctor & Retention Hook Architecture',
      desc: 'Our Lead Editor dissects the narrative to construct scroll-stopping 3-second pattern interrupts, retention pacing curves, and kinetic vector titles before cutting a single frame.',
      tags: [
        '3-Second Scroll-Stop Pattern Interrupt',
        'Retention Drop-Off Prevention Curve',
        'Kinetic Typography & Vector Accents',
        'Rough Cut Storyboard Lock'
      ]
    },
    {
      num: '03',
      stage: 'STAGE // 03',
      time: 'HOUR 12 — 24',
      status: 'NLE ASSEMBLED ✓',
      title: 'A-Roll & B-Roll Precision Assembly',
      desc: 'Using DaVinci Resolve Studio & Premiere Pro, we eliminate filler words, breaths, and micro-pauses. Dynamic jump-cuts and visual B-roll are placed to sustain narrative velocity.',
      tags: [
        'Filler Words & Micro-Breath Removal',
        'Dynamic Multi-Angle Punch-Ins',
        'Curated Contextual B-Roll Placement',
        'Airtight Narrative Rhythm'
      ]
    },
    {
      num: '04',
      stage: 'STAGE // 04',
      time: 'HOUR 24 — 38',
      status: 'STUDIO MASTERED ✓',
      title: 'Studio Color Science & Spectral Audio Sweetening',
      desc: 'DaVinci Studio broadcast color grading calibrated to ACEScc OLED standards, paired with spectral vocal isolation and -14.0 LUFS audio sweetening in iZotope RX.',
      tags: [
        'ACEScc 1.3 D65 OLED Color Calibration',
        'iZotope RX Spectral Vocal Clarity',
        '-14.0 LUFS Broadcast Audio Standards',
        '3D Motion Tracking & Custom Sound FX'
      ]
    },
    {
      num: '05',
      stage: 'STAGE // 05',
      time: 'HOUR 38 — 48',
      status: 'DISPATCHED ✓',
      title: '48H Multi-Platform Master Delivery',
      desc: 'Your finished 4K master is uploaded to Frame.io. Click directly on any video frame to leave timecoded notes or approve for instant cross-platform distribution.',
      tags: [
        '9:16 Vertical (Reels / TikTok / Shorts)',
        '16:9 Cinema 4K ProRes Master',
        '1-Click Frame.io Timecoded Review Pod',
        'Full Project Source Archive Files'
      ]
    }
  ];

  return (
    <div className="workflow-page" style={{ minHeight: '100vh', padding: '140px 0 110px', background: '#05070B', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Subtle Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
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

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        
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
          CONCEPT 3: VERTICAL LASER STEP-BY-STEP FLOW WITH KINETIC HOVER
          ======================================================================== 
        */}
        <div style={{ position: 'relative', margin: '0 auto 90px' }}>
          
          {/* Vertical Connecting Laser Rail */}
          <div 
            className="timeline-laser-rail"
            style={{
              position: 'absolute',
              top: '32px',
              bottom: '100px',
              left: '9px',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(56,189,248,0.6) 50%, rgba(99,102,241,0.2) 100%)',
              boxShadow: '0 0 12px rgba(56,189,248,0.4)',
              zIndex: 0
            }}
          />

          {/* 5 Connected Step Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div 
                  key={step.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`workflow-interactive-card ${isActive ? 'active-step' : ''}`}
                  style={{
                    position: 'relative',
                    paddingLeft: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  
                  {/* Glowing Laser Node Marker */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '24px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      background: isActive 
                        ? '#FFFFFF' 
                        : 'rgba(15, 23, 42, 0.9)',
                      border: isActive 
                        ? '2px solid #38BDF8' 
                        : '1.5px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: isActive 
                        ? '0 0 25px rgba(56, 189, 248, 0.9), 0 0 40px rgba(255, 255, 255, 0.6)' 
                        : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 2
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '1px',
                      background: isActive ? '#05070B' : 'rgba(255,255,255,0.4)'
                    }}></span>
                  </div>

                  {/* Step Card Container with Pure Negative Space & Spotlight Glow */}
                  <div 
                    style={{
                      position: 'relative',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(7, 10, 20, 0.9) 100%)' 
                        : 'rgba(7, 10, 20, 0.3)',
                      border: isActive 
                        ? '1px solid rgba(56, 189, 248, 0.35)' 
                        : '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '20px',
                      padding: '28px 32px',
                      backdropFilter: 'blur(16px)',
                      boxShadow: isActive 
                        ? '0 20px 50px rgba(0,0,0,0.85), 0 0 40px rgba(56,189,248,0.1), inset 0 1px 0 rgba(255,255,255,0.15)' 
                        : 'none',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      overflow: 'hidden'
                    }}
                  >
                    
                    {/* Top Telemetry Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="mono-spec" style={{ 
                          fontSize: '0.72rem', 
                          color: isActive ? '#38BDF8' : '#64748B', 
                          fontWeight: '700', 
                          letterSpacing: '0.06em',
                          transition: 'color 0.3s ease'
                        }}>
                          {step.stage}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>/</span>
                        <span className="mono-spec" style={{ 
                          fontSize: '0.68rem', 
                          color: isActive ? '#FFFFFF' : '#94A3B8', 
                          background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255,255,255,0.04)',
                          border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255,255,255,0.08)',
                          padding: '3px 8px', 
                          borderRadius: '4px',
                          fontWeight: '600'
                        }}>
                          ⏱️ {step.time}
                        </span>
                      </div>

                      <span className="mono-spec telemetry-badge" style={{ 
                        fontSize: '0.68rem', 
                        color: isActive ? '#38BDF8' : '#475569', 
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        transition: 'all 0.3s ease'
                      }}>
                        {step.status}
                      </span>
                    </div>

                    {/* Step Title with Kinetic Slide */}
                    <h2 
                      className="step-title-text"
                      style={{ 
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', 
                        fontWeight: '800', 
                        color: isActive ? '#FFFFFF' : '#94A3B8', 
                        margin: '0 0 12px', 
                        letterSpacing: '-0.025em', 
                        lineHeight: '1.2',
                        fontFamily: 'var(--font-heading)',
                        transition: 'all 0.35s ease'
                      }}
                    >
                      {step.title}
                    </h2>

                    {/* Editorial Description */}
                    <p style={{ 
                      color: isActive ? '#CBD5E1' : '#64748B', 
                      fontSize: '0.96rem', 
                      lineHeight: '1.65', 
                      margin: '0 0 20px', 
                      maxWidth: '780px',
                      fontWeight: '400',
                      transition: 'color 0.3s ease'
                    }}>
                      {step.desc}
                    </p>

                    {/* Kinetic Capability Tag Chips (Glide from Corner) */}
                    <div 
                      className="tags-container"
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px' 
                      }}
                    >
                      {step.tags.map((tag, i) => (
                        <div 
                          key={i}
                          className="kinetic-tag"
                          style={{
                            fontSize: '0.74rem',
                            color: isActive ? '#E2E8F0' : '#64748B',
                            background: isActive ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                            border: isActive ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.04)',
                            padding: '5px 12px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: `all 0.3s ease ${i * 0.05}s`
                          }}
                        >
                          <span style={{ 
                            width: '4px', 
                            height: '4px', 
                            borderRadius: '50%', 
                            background: isActive ? '#38BDF8' : '#475569' 
                          }}></span>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
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

      {/* Global CSS for Kinetic Hover Glides & Micro-Transitions */}
      <style jsx>{`
        .workflow-interactive-card.active-step .step-title-text {
          transform: translateX(4px);
        }
        .workflow-interactive-card.active-step .kinetic-tag {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.35) !important;
        }
        .workflow-interactive-card.active-step .telemetry-badge {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .workflow-interactive-card {
            padding-left: 36px !important;
          }
          .timeline-laser-rail {
            left: 6px !important;
          }
        }
      `}</style>
    </div>
  );
}
