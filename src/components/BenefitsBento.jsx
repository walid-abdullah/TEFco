"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function BenefitsBento() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'sla',
      num: '01',
      tag: '48H SPRINT SLA',
      title: 'Ultra-Fast 24 to 48-Hour Turnarounds',
      desc: 'Never wait weeks for a rough cut. Upload raw footage to your dedicated Frame.io or Drive pod and receive broadcast-ready masters in under 48 hours.',
      metricLabel: 'GUARANTEED DISPATCH',
      metricVal: '< 48 HOURS SLA',
      link: '/workflow',
      linkText: 'Explore Turnaround Pipeline →',
      visualType: 'turnaround'
    },
    {
      id: 'color',
      num: '02',
      tag: 'ACEScc & REC.709',
      title: 'Broadcast Color Science',
      desc: 'Every camera profile (Sony S-Log3, Canon C-Log, RED IPP2, Blackmagic RAW) is color-matched and calibrated for crisp skin tones on OLED screens.',
      metricLabel: 'COLOR ACCURACY',
      metricVal: '10-BIT 4:2:2 PRORES',
      link: '/services/talking-head',
      linkText: 'Explore Color Suite →',
      visualType: 'color'
    },
    {
      id: 'audio',
      num: '03',
      tag: 'EBU R128 AUDIO MASTER',
      title: 'Sub-Frame Sound Engineering',
      desc: 'Room echo elimination, spectral background de-noise via iZotope RX, and dynamic voice sidechaining for crystal-clear playback on all speaker types.',
      metricLabel: 'LOUDNESS BENCHMARK',
      metricVal: '-14.0 LUFS BROADCAST',
      link: '/services/podcasts',
      linkText: 'Explore Audio Mastering →',
      visualType: 'audio'
    },
    {
      id: 'collab',
      num: '04',
      tag: 'DIRECT COLLABORATION POD',
      title: 'Zero Bloated Email Threads',
      desc: 'Drop timecoded notes directly inside Frame.io and communicate with your dedicated Creative Director on a private Slack or WhatsApp channel.',
      metricLabel: 'CLIENT CHANNEL',
      metricVal: 'SLACK + FRAME.IO',
      link: '/workflow',
      linkText: 'Explore Collaboration SLA →',
      visualType: 'collab'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', padding: '110px 0' }}>
      {/* Background Ambient Darkroom Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          maxWidth: '100vw',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.035) 0%, rgba(5, 7, 11, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '820px', margin: '0 auto 64px' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', margin: '0 0 16px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Engineered for Velocity. <br />
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
              Built for Scale.
            </span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, maxWidth: '680px', margin: '0 auto' }}>
            Every step of our post-production pipeline is standardized for speed, broadcast color science, and zero-friction client collaboration.
          </p>
        </div>

        {/* 
          ========================================================================
          VERTICAL CONNECTED WORKFLOW ROADMAP (MZ MEDIA SPLIT-VIEW STYLE)
          ======================================================================== 
        */}
        <div className="pipeline-timeline-wrapper" style={{ position: 'relative', maxWidth: '1120px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                className="pipeline-step-row pop-hover"
                onMouseEnter={() => setActiveStep(idx)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1.15fr)',
                  gap: '40px',
                  alignItems: 'center',
                  background: 'rgba(8, 12, 20, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '36px',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
                  position: 'relative',
                  transition: 'all 0.25s ease'
                }}
              >
                
                {/* 
                  ----------------------------------------------------------------
                  LEFT SIDE: EDITORIAL & METADATA COLUMN
                  ----------------------------------------------------------------
                */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                  
                  {/* Step Header with Monogram Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      color: '#FFFFFF'
                    }}>
                      {step.num}
                    </div>

                    <span className="mono-spec" style={{ 
                      fontSize: '0.7rem', 
                      color: '#E2E8F0', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '3px 8px', 
                      borderRadius: '4px', 
                      fontWeight: '700' 
                    }}>
                      {step.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    margin: '0 0 14px', 
                    letterSpacing: '-0.025em', 
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: '1.6', margin: '0 0 24px', maxWidth: '440px' }}>
                    {step.desc}
                  </p>

                  {/* Bottom Metric & Action Link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '18px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    flexWrap: 'wrap',
                    gap: '14px'
                  }}>
                    <div>
                      <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#64748B', display: 'block' }}>{step.metricLabel}</span>
                      <span className="mono-spec" style={{ fontSize: '0.78rem', color: '#FFFFFF', fontWeight: '800' }}>{step.metricVal}</span>
                    </div>

                    <Link
                      href={step.link}
                      style={{
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '7px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.color = '#05070B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                    >
                      <span>{step.linkText}</span>
                    </Link>
                  </div>
                </div>

                {/* 
                  ----------------------------------------------------------------
                  RIGHT SIDE: CUSTOM ILLUSTRATED UI ARTBOARD
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', width: '100%' }}>
                  
                  {/* Ambient Radiant Glow Under Artboard */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '85%',
                      height: '75%',
                      background: idx === 0 
                        ? 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.18) 0%, transparent 70%)'
                        : idx === 1 
                        ? 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.18) 0%, transparent 70%)'
                        : idx === 2 
                        ? 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.18) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
                      filter: 'blur(35px)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* Visual 1: Turnaround & Ingest Hub */}
                  {step.visualType === 'turnaround' && (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      background: '#070A10',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                    }}>
                      {/* Top Window Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></span>
                          <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: '700' }}>FRAME.IO POD // LIVE INGEST</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          4K PRORES
                        </span>
                      </div>

                      {/* Ingest Progress Card */}
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '14px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fa-solid fa-file-video" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#FFFFFF' }}>SonyFX3_SLog3_A01.mov</span>
                          </div>
                          <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#22C55E' }}>100% SYNCED</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #38BDF8, #22C55E)' }}></div>
                        </div>
                      </div>

                      {/* 48H Sprint Milestone Indicator */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 6px' }}>
                          <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#64748B', display: 'block' }}>STAGE 01</span>
                          <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#22C55E' }}>Ingest [✓]</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 6px' }}>
                          <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#64748B', display: 'block' }}>STAGE 02</span>
                          <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#22C55E' }}>Pacing [✓]</span>
                        </div>
                        <div style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '8px', padding: '10px 6px' }}>
                          <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#22C55E', display: 'block' }}>STAGE 03</span>
                          <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#FFFFFF' }}>Master ⚡</span>
                        </div>
                      </div>

                      {/* Output Tag */}
                      <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem' }}>
                        <span style={{ color: '#94A3B8' }}>Guaranteed Dispatch SLA:</span>
                        <span className="mono-spec" style={{ color: '#22C55E', fontWeight: '700' }}>&lt; 24H ESTIMATED</span>
                      </div>
                    </div>
                  )}

                  {/* Visual 2: Broadcast Color Science */}
                  {step.visualType === 'color' && (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      background: '#070A10',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                    }}>
                      {/* Top Window Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-palette" style={{ color: '#C084FC', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: '700' }}>DAVINCI ACEScc // COLOR SUITE</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#C084FC', background: 'rgba(192, 132, 252, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          DCI-P3 / REC.709
                        </span>
                      </div>

                      {/* Split Gamut Inspector */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                        
                        {/* Flat LOG Box */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                          <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>INPUT: RAW S-LOG3</span>
                          <div style={{ height: '36px', borderRadius: '6px', background: 'linear-gradient(90deg, #475569, #64748B, #94A3B8)', opacity: 0.6, marginBottom: '6px' }}></div>
                          <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Flat Dynamic Range</span>
                        </div>

                        {/* Master 10-Bit Box */}
                        <div style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                          <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#C084FC', display: 'block', marginBottom: '6px' }}>OUTPUT: 10-BIT GRADE</span>
                          <div style={{ height: '36px', borderRadius: '6px', background: 'linear-gradient(90deg, #38BDF8, #818CF8, #C084FC, #F43F5E)', marginBottom: '6px' }}></div>
                          <span style={{ fontSize: '0.68rem', color: '#FFFFFF', fontWeight: '700' }}>OLED Calibrated</span>
                        </div>
                      </div>

                      {/* Floating Gamut Specs Chips */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', color: '#E2E8F0' }}>
                          <i className="fa-solid fa-check" style={{ color: '#22C55E', fontSize: '0.65rem' }}></i>
                          <span>Skin-Tone Hue Vectors</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', color: '#E2E8F0' }}>
                          <i className="fa-solid fa-check" style={{ color: '#22C55E', fontSize: '0.65rem' }}></i>
                          <span>Zero Color Banding</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual 3: Sub-Frame Sound Engineering */}
                  {step.visualType === 'audio' && (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      background: '#070A10',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                    }}>
                      {/* Top Window Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-sliders" style={{ color: '#22C55E', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: '700' }}>iZOTOPE RX // SOUND MASTER</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#22C55E', background: 'rgba(34, 197, 94, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          -14.0 LUFS
                        </span>
                      </div>

                      {/* Live Audio Waveform Track Simulation */}
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '14px', marginBottom: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '8px', color: '#94A3B8' }}>
                          <span>TRACK 01: VOICE DIALOGUE</span>
                          <span className="mono-spec" style={{ color: '#22C55E' }}>DE-NOISE APPLIED</span>
                        </div>

                        {/* Animated Multi-Bar Waveform */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '38px', padding: '4px 0' }}>
                          {[40, 65, 85, 30, 95, 75, 45, 90, 60, 80, 100, 50, 70, 85, 40, 60, 95, 80, 55, 75, 90, 45, 65, 85, 30, 95, 70, 85, 60].map((h, i) => (
                            <div 
                              key={i} 
                              style={{ 
                                flex: 1, 
                                height: `${h}%`, 
                                background: h > 85 ? '#22C55E' : 'rgba(255,255,255,0.4)', 
                                borderRadius: '2px',
                                transition: 'height 0.3s ease'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Loudness & Sidechain Meter */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }}></span>
                          <span style={{ fontSize: '0.74rem', color: '#E2E8F0' }}>Echo Elimination: -34dB</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#22C55E', fontWeight: '700' }}>PASSED EBU R128</span>
                      </div>
                    </div>
                  )}

                  {/* Visual 4: Frictionless Slack & Frame.io Pod */}
                  {step.visualType === 'collab' && (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      background: '#070A10',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
                    }}>
                      {/* Top Window Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-brands fa-slack" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: '700' }}>SLACK POD // #tefco-direct</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          SYNCED
                        </span>
                      </div>

                      {/* Chat Bubbles */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
                        
                        {/* Client Message */}
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', color: '#94A3B8', fontWeight: '700' }}>
                            U
                          </div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 12px', maxWidth: '85%' }}>
                            <span style={{ fontSize: '0.76rem', color: '#E2E8F0', display: 'block' }}>
                              "Love the hook! Can we add a subtle camera whip-zoom at 00:24?"
                            </span>
                          </div>
                        </div>

                        {/* Editor Response */}
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', color: '#FFFFFF', fontWeight: '700' }}>
                            T
                          </div>
                          <div style={{ background: 'rgba(37, 99, 235, 0.12)', border: '1px solid rgba(37, 99, 235, 0.3)', borderRadius: '10px', padding: '8px 12px', maxWidth: '85%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                              <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#38BDF8', fontWeight: '700' }}>FRAME.IO TIMECODE: 00:24.08</span>
                            </div>
                            <span style={{ fontSize: '0.76rem', color: '#FFFFFF', display: 'block' }}>
                              "Done! Whip-zoom applied and sound design matched. Ready to export."
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Instant 1-Click Approval Chip */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '8px 12px', borderRadius: '8px' }}>
                        <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '600' }}>1-Click Frame.io Approval</span>
                        <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#22C55E', fontWeight: '700' }}>APPROVED FOR DISPATCH ✓</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
