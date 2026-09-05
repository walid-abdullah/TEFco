"use client";

import React from 'react';

export default function BenefitsBento() {
  const steps = [
    {
      id: 'step-01',
      title: 'Questionnaire',
      num: '01',
      desc: 'You fill out a short brief that takes about five minutes. From your answers, we learn what your product does, who buys it, and why anyone should care.',
      visualType: 'chat'
    },
    {
      id: 'step-02',
      title: 'Storyboarding',
      num: '02',
      desc: 'Before we start editing, you see exactly what the video will say and how every frame will look. Once you give your notes, we lock the whole thing in.',
      visualType: 'moodboard'
    },
    {
      id: 'step-03',
      title: 'Final Animation',
      num: '03',
      desc: 'Custom animation, sound design, and color grading all come from the same in-house team, working on your project from the first day to the last.',
      visualType: 'timeline'
    },
    {
      id: 'step-04',
      title: 'Delivery',
      num: '04',
      desc: 'You get the variations for every platform you post on, usually delivered in full 4K masters within 48 hours from kickoff.',
      visualType: 'delivery'
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
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.035) 0%, rgba(56, 189, 248, 0.02) 50%, transparent 75%)',
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
          CONNECTED VERTICAL TIMELINE CONTAINER
          ======================================================================== 
        */}
        <div style={{ position: 'relative' }}>
          
          {/* Vertical Connecting Hairline Rail */}
          <div 
            className="timeline-vertical-rail"
            style={{
              position: 'absolute',
              top: '28px',
              bottom: '140px',
              left: '7px',
              width: '1px',
              background: 'rgba(255, 255, 255, 0.12)',
              zIndex: 0
            }}
          />

          {/* 4 Connected Step Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                className="step-timeline-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.25fr)',
                  gap: '60px',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                
                {/* 
                  ----------------------------------------------------------------
                  LEFT: NODE & CLEAN EDITORIAL TEXT
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', paddingLeft: '36px', textAlign: 'left' }}>
                  
                  {/* Square Node Marker */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '15px',
                      height: '15px',
                      background: '#FFFFFF',
                      borderRadius: '2px',
                      boxShadow: '0 0 16px rgba(255,255,255,0.7)',
                      zIndex: 2
                    }}
                  />

                  {/* Title & Number in Syne */}
                  <h3 style={{ 
                    fontSize: 'clamp(1.9rem, 2.8vw, 2.5rem)', 
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
                      color: 'rgba(255, 255, 255, 0.35)',
                      letterSpacing: '0.04em'
                    }}>
                      {step.num}
                    </span>
                  </h3>

                  {/* Clean 2-Line Description */}
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '1.02rem', 
                    lineHeight: '1.65', 
                    margin: 0,
                    maxWidth: '440px',
                    fontWeight: '400'
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* 
                  ----------------------------------------------------------------
                  RIGHT: HIGH-END REFINED VISUAL ARTBOARD
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
                      background: idx === 0 
                        ? 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 75%)'
                        : idx === 1 
                        ? 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 75%)'
                        : idx === 2 
                        ? 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)'
                        : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
                      filter: 'blur(50px)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* 
                    ==============================================================
                    VISUAL 1: QUESTIONNAIRE & CHAT INTERVIEW ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'chat' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
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
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }}></span>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>CREATIVE BRIEF & INGEST</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '3px 8px', borderRadius: '4px' }}>
                          5 MIN ONBOARDING
                        </span>
                      </div>

                      {/* Main Speech Card */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px', backdropFilter: 'blur(16px)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '700', fontSize: '0.8rem', color: '#FFF' }}>
                            T
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#FFFFFF' }}>Target Audience & Core Offer</span>
                              <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Just now</span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: '#CBD5E1', margin: 0, lineHeight: '1.45' }}>
                              "Direct-to-consumer founders looking for high-retention 4K organic hooks and paid ads."
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Voice Note & Meta Tags */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-microphone-lines" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                          <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: '600' }}>Audio Memo Ingested</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#22C55E', fontWeight: '700' }}>SYNCED ✓</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: STORYBOARDING & MOODBOARD 4-GRID ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'moodboard' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
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
                          <i className="fa-solid fa-layer-group" style={{ color: '#EC4899', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>FRAME-BY-FRAME STORYBOARD</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#EC4899', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          SCENE LOCK
                        </span>
                      </div>

                      {/* 4-Card Scene Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', position: 'relative', zIndex: 1 }}>
                        
                        {/* Scene 1 */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                          <div style={{ height: '40px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))', borderRadius: '6px', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-bolt" style={{ color: '#EC4899', fontSize: '0.75rem' }}></i>
                          </div>
                          <span style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>Hook 01</span>
                          <span className="mono-spec" style={{ fontSize: '0.55rem', color: '#94A3B8' }}>00:03s</span>
                        </div>

                        {/* Scene 2 (Selected) */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1.5px solid #EC4899', borderRadius: '10px', padding: '8px', textAlign: 'center', position: 'relative', boxShadow: '0 0 15px rgba(236, 72, 153, 0.3)' }}>
                          <div style={{ height: '40px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(99, 102, 241, 0.3))', borderRadius: '6px', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-eye" style={{ color: '#FFF', fontSize: '0.75rem' }}></i>
                          </div>
                          <span style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>Pitch 02</span>
                          <span className="mono-spec" style={{ fontSize: '0.55rem', color: '#EC4899' }}>Locked</span>
                        </div>

                        {/* Scene 3 */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                          <div style={{ height: '40px', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(99, 102, 241, 0.2))', borderRadius: '6px', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-chart-line" style={{ color: '#38BDF8', fontSize: '0.75rem' }}></i>
                          </div>
                          <span style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>Value 03</span>
                          <span className="mono-spec" style={{ fontSize: '0.55rem', color: '#94A3B8' }}>00:28s</span>
                        </div>

                        {/* Scene 4 */}
                        <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                          <div style={{ height: '40px', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(56, 189, 248, 0.2))', borderRadius: '6px', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa-solid fa-bullhorn" style={{ color: '#22C55E', fontSize: '0.75rem' }}></i>
                          </div>
                          <span style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700', display: 'block' }}>CTA 04</span>
                          <span className="mono-spec" style={{ fontSize: '0.55rem', color: '#94A3B8' }}>00:45s</span>
                        </div>

                      </div>

                      {/* Approval Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.72rem', color: '#E2E8F0' }}>Visual Pacing & Shotlist Approved</span>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#EC4899', fontWeight: '700' }}>PROCEED TO EDIT</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: TIMELINE / POST-PRODUCTION NLE ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'timeline' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
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
                          <i className="fa-solid fa-sliders" style={{ color: '#6366F1', fontSize: '0.8rem' }}></i>
                          <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '700' }}>DAVINCI + AFTER EFFECTS SUITE</span>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.66rem', color: '#6366F1', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '3px 8px', borderRadius: '4px' }}>
                          00:01:24:18
                        </span>
                      </div>

                      {/* Multi-Track NLE Timeline View */}
                      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px', backdropFilter: 'blur(16px)' }}>
                        
                        {/* Track Header Labels */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                          <span>V2 // MOTION VFX</span>
                          <span>V1 // 4K PRORES</span>
                          <span>A1 // MASTER AUDIO</span>
                        </div>

                        {/* Tracks */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {/* V2 Motion */}
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '20%', background: 'rgba(236, 72, 153, 0.5)', borderRadius: '3px' }}></div>
                            <div style={{ width: '45%', background: 'rgba(236, 72, 153, 0.7)', borderRadius: '3px', border: '1px solid rgba(236, 72, 153, 0.6)' }}></div>
                            <div style={{ width: '30%', background: 'rgba(236, 72, 153, 0.5)', borderRadius: '3px' }}></div>
                          </div>

                          {/* V1 Video Master */}
                          <div style={{ display: 'flex', gap: '4px', height: '18px' }}>
                            <div style={{ width: '35%', background: 'rgba(99, 102, 241, 0.65)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '35%', background: 'rgba(99, 102, 241, 0.65)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '26%', background: 'rgba(168, 85, 247, 0.65)', borderRadius: '4px', border: '1px solid rgba(192, 132, 252, 0.5)' }}></div>
                          </div>

                          {/* A1 Audio Spectrum */}
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                          </div>
                        </div>

                      </div>

                      {/* Color Science Readout */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.72rem', color: '#E2E8F0' }}>ACEScc Color Science + -14 LUFS Audio</span>
                        <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#6366F1', fontWeight: '700' }}>MASTERED</span>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: DELIVERY / 3D FROSTED FOLDER ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'delivery' && (
                    <div 
                      className="artboard-box pop-hover"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '290px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* 3D Frosted Glass Delivery Folder Structure */}
                      <div style={{ position: 'relative', width: '220px', height: '150px', zIndex: 1 }}>
                        
                        {/* Folder Backing Tab */}
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '75px',
                          height: '24px',
                          background: 'rgba(99, 102, 241, 0.4)',
                          borderRadius: '10px 10px 0 0',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderBottom: 'none'
                        }}></div>

                        {/* Folder Main Body with Frosted Glass */}
                        <div style={{
                          position: 'absolute',
                          top: '18px',
                          left: '0',
                          width: '100%',
                          height: '132px',
                          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)',
                          border: '1.5px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0 16px 16px 16px',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {/* Inner Media Sheets Preview */}
                          <div style={{
                            position: 'absolute',
                            top: '-8px',
                            left: '20px',
                            right: '20px',
                            height: '45px',
                            background: 'rgba(255, 255, 255, 0.12)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            zIndex: 0
                          }}></div>

                          {/* Center Dispatch Circle Button */}
                          <div style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                            position: 'relative',
                            zIndex: 2
                          }}>
                            <i className="fa-solid fa-share" style={{ color: '#FFFFFF', fontSize: '1rem' }}></i>
                          </div>

                          {/* "Final touch" Badge with Cursor */}
                          <div style={{
                            position: 'absolute',
                            bottom: '14px',
                            right: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            zIndex: 3
                          }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                              <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679v-20.8z"/>
                            </svg>
                            <span style={{
                              fontSize: '0.68rem',
                              fontWeight: '600',
                              color: '#FFFFFF',
                              background: 'rgba(0, 0, 0, 0.75)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backdropFilter: 'blur(8px)'
                            }}>
                              Final touch
                            </span>
                          </div>

                        </div>

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
