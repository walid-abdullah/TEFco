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
      
      {/* Ambient Backdrop */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.035) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '820px', margin: '0 auto 85px' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '95px' }}>
            {steps.map((step) => (
              <div 
                key={step.id}
                className="step-timeline-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 1.25fr)',
                  gap: '64px',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                
                {/* 
                  ----------------------------------------------------------------
                  LEFT: NODE & CLEAN EDITORIAL TEXT
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', paddingLeft: '38px', textAlign: 'left' }}>
                  
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
                  RIGHT: EXACT SCREENSHOT 2 ARTBOARD REPLICAS
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '520px', justifySelf: 'center' }}>
                  
                  {/* 
                    ==============================================================
                    VISUAL 1: CHAT CONVERSATION DIALOGUE (Exact Match)
                    ============================================================== 
                  */}
                  {step.visualType === 'chat' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#090D18',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px 22px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '12px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Ambient Bottom Blue Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-15%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '85%',
                          height: '65%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)',
                          filter: 'blur(40px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Row 1: Question (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.8) 0%, rgba(59, 130, 246, 0.7) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '7px 14px',
                          borderRadius: '12px 12px 2px 12px',
                          color: '#FFFFFF',
                          fontSize: '0.74rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                          What does your product do?
                        </div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', flexShrink: 0 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                      {/* Row 2: Answer (Left Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ color: '#E2E8F0', fontSize: '0.65rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(30, 41, 59, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(12px)',
                          padding: '7px 14px',
                          borderRadius: '12px 12px 12px 2px',
                          color: '#E2E8F0',
                          fontSize: '0.74rem',
                          lineHeight: '1.35',
                          maxWidth: '250px'
                        }}>
                          SaaS project management tool for startups
                        </div>
                      </div>

                      {/* Row 3: Question 2 (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.8) 0%, rgba(59, 130, 246, 0.7) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '7px 14px',
                          borderRadius: '12px 12px 2px 12px',
                          color: '#FFFFFF',
                          fontSize: '0.74rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                          Who is your ideal customer?
                        </div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', flexShrink: 0 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                      {/* Row 4: Answer 2 (Left Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ color: '#E2E8F0', fontSize: '0.65rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(30, 41, 59, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(12px)',
                          padding: '7px 14px',
                          borderRadius: '12px 12px 12px 2px',
                          color: '#E2E8F0',
                          fontSize: '0.74rem',
                          lineHeight: '1.35',
                          maxWidth: '260px'
                        }}>
                          Founders & operation teams at early-stage startups
                        </div>
                      </div>

                      {/* Row 5: Typing Bubble (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.6) 0%, rgba(59, 130, 246, 0.5) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          padding: '6px 14px',
                          borderRadius: '12px 12px 2px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.7 }}></span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.9 }}></span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.7 }}></span>
                        </div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: 5 FLOATING MOODBOARD CARDS (Exact Match)
                    ============================================================== 
                  */}
                  {step.visualType === 'moodboard' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#090D18',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Radiant Center Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '80%',
                          height: '70%',
                          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.5) 0%, rgba(56, 189, 248, 0.25) 40%, transparent 75%)',
                          filter: 'blur(35px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* 5 Floating Perspective Layout Container */}
                      <div style={{ position: 'relative', width: '100%', maxWidth: '380px', height: '220px', zIndex: 1 }}>
                        
                        {/* 1. MOTION STYLE (Top Left) */}
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '6px',
                          width: '105px',
                          background: 'rgba(15, 20, 35, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
                        }}>
                          <span style={{ fontSize: '0.52rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>MOTION STYLE</span>
                          <svg width="100%" height="16" viewBox="0 0 90 16" fill="none">
                            <path d="M0 8C15 2 30 14 45 8C60 2 75 14 90 8" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M0 12C15 6 30 18 45 12C60 6 75 18 90 12" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                          </svg>
                          <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                            <span style={{ fontSize: '0.46rem', background: 'rgba(255,255,255,0.06)', padding: '2px 4px', borderRadius: '3px', color: '#CBD5E1' }}>Fast</span>
                            <span style={{ fontSize: '0.46rem', background: 'rgba(255,255,255,0.06)', padding: '2px 4px', borderRadius: '3px', color: '#CBD5E1' }}>Clean</span>
                          </div>
                        </div>

                        {/* 2. COLOR PALETTE (Top Center) */}
                        <div style={{
                          position: 'absolute',
                          top: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          background: 'rgba(15, 20, 35, 0.92)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.7)',
                          zIndex: 2
                        }}>
                          <span style={{ fontSize: '0.52rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '8px', textAlign: 'center' }}>COLOR PALETTE</span>
                          <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                            <div style={{ width: '15px', height: '20px', background: '#FFFFFF', borderRadius: '3px' }}></div>
                            <div style={{ width: '15px', height: '20px', background: '#BAE6FD', borderRadius: '3px' }}></div>
                            <div style={{ width: '15px', height: '20px', background: '#60A5FA', borderRadius: '3px' }}></div>
                            <div style={{ width: '15px', height: '20px', background: '#6366F1', borderRadius: '3px' }}></div>
                            <div style={{ width: '15px', height: '20px', background: '#1E1B4B', borderRadius: '3px' }}></div>
                          </div>
                        </div>

                        {/* 3. TONE & VOICE (Top Right) */}
                        <div style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          width: '115px',
                          background: 'rgba(15, 20, 35, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
                        }}>
                          <span style={{ fontSize: '0.52rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>TONE & VOICE</span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            <span style={{ fontSize: '0.46rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '8px', color: '#E2E8F0' }}>Bold</span>
                            <span style={{ fontSize: '0.46rem', background: 'rgba(99, 102, 241, 0.25)', border: '1px solid rgba(99, 102, 241, 0.4)', padding: '2px 6px', borderRadius: '8px', color: '#A5B4FC' }}>Direct</span>
                            <span style={{ fontSize: '0.46rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '8px', color: '#E2E8F0' }}>Punchy</span>
                          </div>
                        </div>

                        {/* 4. SCENE DIRECTION (Bottom Left) */}
                        <div style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '26px',
                          width: '110px',
                          background: 'rgba(15, 20, 35, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
                        }}>
                          <span style={{ fontSize: '0.52rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>SCENE DIRECTION</span>
                          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '22px' }}>
                            <div style={{ width: '8px', height: '10px', background: '#64748B', borderRadius: '2px' }}></div>
                            <div style={{ width: '8px', height: '18px', background: '#A855F7', borderRadius: '2px' }}></div>
                            <div style={{ width: '8px', height: '24px', background: '#C084FC', borderRadius: '2px' }}></div>
                            <div style={{ width: '8px', height: '14px', background: '#818CF8', borderRadius: '2px' }}></div>
                            <div style={{ width: '8px', height: '8px', background: '#64748B', borderRadius: '2px' }}></div>
                          </div>
                        </div>

                        {/* 5. VISUAL REFERENCE (Bottom Right) */}
                        <div style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '26px',
                          width: '110px',
                          background: 'rgba(15, 20, 35, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
                        }}>
                          <span style={{ fontSize: '0.52rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>VISUAL REFERENCE</span>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', gap: '6px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38BDF8' }}></div>
                            <div style={{ width: '8px', height: '8px', background: '#A855F7', transform: 'rotate(45deg)' }}></div>
                            <div style={{ width: '8px', height: '8px', background: '#818CF8' }}></div>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: SPECTRUM & NLE TIMELINE UI (Exact Match)
                    ============================================================== 
                  */}
                  {step.visualType === 'timeline' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#090D18',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: '24px',
                        padding: '24px 20px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '14px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)'
                      }}
                    >
                      {/* Ambient Blue Radiant Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '30%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '85%',
                          height: '65%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
                          filter: 'blur(35px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Top Box: Spectrum Bars */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(15, 20, 35, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '14px',
                        padding: '16px 20px',
                        backdropFilter: 'blur(16px)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        height: '95px'
                      }}>
                        {/* Spectrum Bars */}
                        {[35, 75, 45, 90, 60, 40, 85, 30, 95, 70, 45, 80, 50, 65].map((val, i) => (
                          <div 
                            key={i}
                            style={{
                              width: '8px',
                              height: `${val}%`,
                              background: i === 3 || i === 8 ? 'linear-gradient(180deg, #FFFFFF 0%, #93C5FD 100%)' : 'linear-gradient(180deg, #93C5FD 0%, #3B82F6 100%)',
                              borderRadius: '3px 3px 0 0',
                              opacity: val > 60 ? 0.95 : 0.65
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom Box: NLE Multi-Track Timeline & Playhead */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(15, 20, 35, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '14px',
                        padding: '12px 16px',
                        backdropFilter: 'blur(16px)'
                      }}>
                        {/* Timeline Ruler Tick Marks */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                          height: '8px',
                          marginBottom: '8px',
                          opacity: 0.35,
                          borderBottom: '1px solid rgba(255,255,255,0.2)',
                          paddingBottom: '2px'
                        }}>
                          {Array.from({ length: 22 }).map((_, i) => (
                            <div key={i} style={{ width: '1px', height: i % 4 === 0 ? '6px' : '3px', background: '#FFFFFF' }}></div>
                          ))}
                        </div>

                        {/* Tracks Container with Playhead Line */}
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          
                          {/* Vertical Glowing Playhead Line */}
                          <div style={{
                            position: 'absolute',
                            top: '-12px',
                            bottom: '0',
                            left: '32%',
                            width: '2px',
                            background: '#FFFFFF',
                            boxShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(56,189,248,0.8)',
                            zIndex: 3
                          }}>
                            {/* Playhead Top Handle */}
                            <div style={{
                              position: 'absolute',
                              top: '-2px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '6px',
                              height: '6px',
                              background: '#FFFFFF',
                              borderRadius: '1px'
                            }}></div>
                          </div>

                          {/* Track 1: Purple Blocks */}
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '30%', background: 'rgba(129, 140, 248, 0.65)', borderRadius: '3px', border: '1px solid rgba(165, 180, 252, 0.4)' }}></div>
                            <div style={{ width: '38%', background: 'rgba(129, 140, 248, 0.65)', borderRadius: '3px', border: '1px solid rgba(165, 180, 252, 0.4)' }}></div>
                            <div style={{ width: '28%', background: 'rgba(168, 85, 247, 0.65)', borderRadius: '3px', border: '1px solid rgba(192, 132, 252, 0.4)' }}></div>
                          </div>

                          {/* Track 2: Blue Blocks */}
                          <div style={{ display: 'flex', gap: '4px', height: '14px' }}>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.5)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                            <div style={{ width: '32%', background: 'rgba(56, 189, 248, 0.5)', borderRadius: '3px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                            <div style={{ width: '16%', background: 'rgba(129, 140, 248, 0.4)', borderRadius: '3px', border: '1px solid rgba(129, 140, 248, 0.3)' }}></div>
                          </div>

                        </div>

                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: 3D FROSTED FOLDER & DISPATCH (Exact Match)
                    ============================================================== 
                  */}
                  {step.visualType === 'delivery' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#090D18',
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
                      {/* Ambient Bottom-Left Blue Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-15%',
                          left: '10%',
                          width: '75%',
                          height: '75%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)',
                          filter: 'blur(45px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Subtle Background Vector Accent Curve */}
                      <div style={{ position: 'absolute', right: '14px', bottom: '14px', width: '90px', height: '90px', borderRight: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', borderRadius: '0 0 20px 0', pointerEvents: 'none' }}></div>

                      {/* 3D Frosted Glass Delivery Folder Structure */}
                      <div style={{ position: 'relative', width: '230px', height: '160px', zIndex: 1 }}>
                        
                        {/* Folder Backing Tab */}
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '80px',
                          height: '24px',
                          background: 'rgba(99, 102, 241, 0.5)',
                          borderRadius: '10px 10px 0 0',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderBottom: 'none'
                        }}></div>

                        {/* Folder Main Body with Frosted Glass */}
                        <div style={{
                          position: 'absolute',
                          top: '18px',
                          left: '0',
                          width: '100%',
                          height: '142px',
                          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.85) 100%)',
                          border: '1.5px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0 18px 18px 18px',
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
                            top: '-10px',
                            left: '22px',
                            right: '22px',
                            height: '50px',
                            background: 'rgba(255, 255, 255, 0.12)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            zIndex: 0
                          }}></div>

                          {/* Center Dispatch Circle Button */}
                          <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.16)',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                            position: 'relative',
                            zIndex: 2
                          }}>
                            <i className="fa-solid fa-share" style={{ color: '#FFFFFF', fontSize: '1.05rem' }}></i>
                          </div>

                          {/* "Final touch" Badge with Cursor */}
                          <div style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            zIndex: 3
                          }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                              <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679v-20.8z"/>
                            </svg>
                            <span style={{
                              fontSize: '0.66rem',
                              fontWeight: '600',
                              color: '#FFFFFF',
                              background: 'rgba(0, 0, 0, 0.8)',
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
