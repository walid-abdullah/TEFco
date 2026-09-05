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
    <section style={{ position: 'relative', background: '#05070B', padding: '120px 0', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '85px' }}>
            {steps.map((step) => (
              <div 
                key={step.id}
                className="step-timeline-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 1.3fr)',
                  gap: '50px',
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
                  RIGHT: HIGH-IMPACT VIBRANT VISUAL ARTBOARD (Tight & Rich Glow)
                  ----------------------------------------------------------------
                */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '540px', justifySelf: 'center' }}>
                  
                  {/* 
                    ==============================================================
                    VISUAL 1: CHAT CONVERSATION DIALOGUE (Tighter & Vibrant Blue)
                    ============================================================== 
                  */}
                  {step.visualType === 'chat' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '310px',
                        background: '#070B16',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        padding: '28px 24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.12)'
                      }}
                    >
                      {/* Rich Bottom Radiant Blue/Indigo Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-10%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '90%',
                          height: '75%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.55) 0%, rgba(99, 102, 241, 0.35) 45%, transparent 75%)',
                          filter: 'blur(35px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Row 1: Question 1 (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          padding: '10px 18px',
                          borderRadius: '16px 16px 4px 16px',
                          color: '#FFFFFF',
                          fontSize: '0.82rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)'
                        }}>
                          What does your product do?
                        </div>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(56, 189, 248, 0.4)', flexShrink: 0 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                      {/* Row 2: Answer 1 (Left Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ color: '#E2E8F0', fontSize: '0.75rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(20, 28, 48, 0.85)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          backdropFilter: 'blur(16px)',
                          padding: '10px 18px',
                          borderRadius: '16px 16px 16px 4px',
                          color: '#E2E8F0',
                          fontSize: '0.82rem',
                          lineHeight: '1.4',
                          maxWidth: '320px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                        }}>
                          SaaS project management tool for startups
                        </div>
                      </div>

                      {/* Row 3: Question 2 (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          padding: '10px 18px',
                          borderRadius: '16px 16px 4px 16px',
                          color: '#FFFFFF',
                          fontSize: '0.82rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)'
                        }}>
                          Who is your ideal customer?
                        </div>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(56, 189, 248, 0.4)', flexShrink: 0 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                      {/* Row 4: Answer 2 (Left Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ color: '#E2E8F0', fontSize: '0.75rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(20, 28, 48, 0.85)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          backdropFilter: 'blur(16px)',
                          padding: '10px 18px',
                          borderRadius: '16px 16px 16px 4px',
                          color: '#E2E8F0',
                          fontSize: '0.82rem',
                          lineHeight: '1.4',
                          maxWidth: '340px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                        }}>
                          Founders & operation teams at early-stage startups
                        </div>
                      </div>

                      {/* Row 5: Typing Bubble (Right Aligned) */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.8) 0%, rgba(59, 130, 246, 0.7) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '8px 18px',
                          borderRadius: '14px 14px 4px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.7 }}></span>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFFFFF', opacity: 1 }}></span>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.7 }}></span>
                        </div>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #818CF8, #38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: 5 FLOATING MOODBOARD CARDS (Fill Space & Rich Glow)
                    ============================================================== 
                  */}
                  {step.visualType === 'moodboard' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '310px',
                        background: '#070B16',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        padding: '24px 20px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.12)'
                      }}
                    >
                      {/* Rich Center Intense Radiant Spotlight Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '90%',
                          height: '80%',
                          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.65) 0%, rgba(56, 189, 248, 0.35) 40%, transparent 75%)',
                          filter: 'blur(35px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* 5 Floating Perspective Layout Container (Expanded to fill canvas) */}
                      <div style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '245px', zIndex: 1 }}>
                        
                        {/* 1. MOTION STYLE (Top Left) */}
                        <div style={{
                          position: 'absolute',
                          top: '0px',
                          left: '4px',
                          width: '128px',
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '14px',
                          padding: '12px 10px',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)'
                        }}>
                          <span style={{ fontSize: '0.58rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>MOTION STYLE</span>
                          <svg width="100%" height="20" viewBox="0 0 100 20" fill="none">
                            <path d="M0 10C18 3 35 17 52 10C70 3 85 17 100 10" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
                            <path d="M0 15C18 8 35 22 52 15C70 8 85 22 100 15" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
                          </svg>
                          <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
                            <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.08)', padding: '3px 6px', borderRadius: '4px', color: '#CBD5E1' }}>Fast</span>
                            <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.08)', padding: '3px 6px', borderRadius: '4px', color: '#CBD5E1' }}>Clean</span>
                          </div>
                        </div>

                        {/* 2. COLOR PALETTE (Top Center) */}
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '146px',
                          background: 'rgba(15, 23, 42, 0.95)',
                          border: '1.5px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '14px',
                          padding: '12px 10px',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 25px rgba(99, 102, 241, 0.4)',
                          zIndex: 2
                        }}>
                          <span style={{ fontSize: '0.58rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '10px', textAlign: 'center' }}>COLOR PALETTE</span>
                          <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                            <div style={{ width: '18px', height: '24px', background: '#FFFFFF', borderRadius: '4px' }}></div>
                            <div style={{ width: '18px', height: '24px', background: '#BAE6FD', borderRadius: '4px' }}></div>
                            <div style={{ width: '18px', height: '24px', background: '#60A5FA', borderRadius: '4px' }}></div>
                            <div style={{ width: '18px', height: '24px', background: '#6366F1', borderRadius: '4px' }}></div>
                            <div style={{ width: '18px', height: '24px', background: '#1E1B4B', borderRadius: '4px' }}></div>
                          </div>
                        </div>

                        {/* 3. TONE & VOICE (Top Right) */}
                        <div style={{
                          position: 'absolute',
                          top: '0px',
                          right: '4px',
                          width: '136px',
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '14px',
                          padding: '12px 10px',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)'
                        }}>
                          <span style={{ fontSize: '0.58rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>TONE & VOICE</span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '3px 7px', borderRadius: '999px', color: '#E2E8F0' }}>Bold</span>
                            <span style={{ fontSize: '0.52rem', background: 'rgba(99, 102, 241, 0.3)', border: '1px solid rgba(99, 102, 241, 0.5)', padding: '3px 7px', borderRadius: '999px', color: '#C7D2FE' }}>Direct</span>
                            <span style={{ fontSize: '0.52rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '3px 7px', borderRadius: '999px', color: '#E2E8F0' }}>Punchy</span>
                          </div>
                        </div>

                        {/* 4. SCENE DIRECTION (Bottom Left) */}
                        <div style={{
                          position: 'absolute',
                          bottom: '6px',
                          left: '32px',
                          width: '135px',
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '14px',
                          padding: '12px 10px',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.7)'
                        }}>
                          <span style={{ fontSize: '0.58rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>SCENE DIRECTION</span>
                          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '26px' }}>
                            <div style={{ width: '10px', height: '12px', background: '#64748B', borderRadius: '2px' }}></div>
                            <div style={{ width: '10px', height: '20px', background: '#A855F7', borderRadius: '2px' }}></div>
                            <div style={{ width: '10px', height: '26px', background: '#C084FC', borderRadius: '2px' }}></div>
                            <div style={{ width: '10px', height: '16px', background: '#818CF8', borderRadius: '2px' }}></div>
                            <div style={{ width: '10px', height: '10px', background: '#64748B', borderRadius: '2px' }}></div>
                          </div>
                        </div>

                        {/* 5. VISUAL REFERENCE (Bottom Right) */}
                        <div style={{
                          position: 'absolute',
                          bottom: '6px',
                          right: '32px',
                          width: '135px',
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '14px',
                          padding: '12px 10px',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.7)'
                        }}>
                          <span style={{ fontSize: '0.58rem', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>VISUAL REFERENCE</span>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '26px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', gap: '8px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#38BDF8' }}></div>
                            <div style={{ width: '10px', height: '10px', background: '#A855F7', transform: 'rotate(45deg)' }}></div>
                            <div style={{ width: '10px', height: '10px', background: '#818CF8' }}></div>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: SPECTRUM & NLE TIMELINE UI (Fuller & Rich Blue Glow)
                    ============================================================== 
                  */}
                  {step.visualType === 'timeline' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '310px',
                        background: '#070B16',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        padding: '24px 22px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '16px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.12)'
                      }}
                    >
                      {/* Rich Ambient Blue Radiant Spotlight */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '35%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '90%',
                          height: '75%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.55) 0%, rgba(99, 102, 241, 0.3) 45%, transparent 75%)',
                          filter: 'blur(35px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Top Box: Spectrum Bars (Expanded Height & Glow) */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(15, 23, 42, 0.88)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '16px',
                        padding: '18px 24px',
                        backdropFilter: 'blur(20px)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        height: '110px',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.6)'
                      }}>
                        {/* Spectrum Bars */}
                        {[35, 75, 45, 90, 60, 40, 85, 30, 95, 70, 45, 80, 50, 65].map((val, i) => (
                          <div 
                            key={i}
                            style={{
                              width: '10px',
                              height: `${val}%`,
                              background: i === 3 || i === 8 
                                ? 'linear-gradient(180deg, #FFFFFF 0%, #93C5FD 100%)' 
                                : 'linear-gradient(180deg, #93C5FD 0%, #3B82F6 100%)',
                              borderRadius: '4px 4px 0 0',
                              boxShadow: i === 3 || i === 8 ? '0 0 12px rgba(255,255,255,0.8)' : 'none',
                              opacity: val > 60 ? 1 : 0.75
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom Box: NLE Multi-Track Timeline & Playhead */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(15, 23, 42, 0.88)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '16px',
                        padding: '14px 20px',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.6)'
                      }}>
                        {/* Timeline Ruler Tick Marks */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                          height: '10px',
                          marginBottom: '10px',
                          opacity: 0.45,
                          borderBottom: '1px solid rgba(255,255,255,0.25)',
                          paddingBottom: '3px'
                        }}>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} style={{ width: '1px', height: i % 4 === 0 ? '8px' : '4px', background: '#FFFFFF' }}></div>
                          ))}
                        </div>

                        {/* Tracks Container with Playhead Line */}
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          
                          {/* Vertical Glowing Playhead Line */}
                          <div style={{
                            position: 'absolute',
                            top: '-16px',
                            bottom: '0',
                            left: '34%',
                            width: '2px',
                            background: '#FFFFFF',
                            boxShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(56,189,248,0.9)',
                            zIndex: 3
                          }}>
                            {/* Playhead Top Handle */}
                            <div style={{
                              position: 'absolute',
                              top: '-3px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '7px',
                              height: '7px',
                              background: '#FFFFFF',
                              borderRadius: '2px'
                            }}></div>
                          </div>

                          {/* Track 1: Purple Blocks */}
                          <div style={{ display: 'flex', gap: '6px', height: '16px' }}>
                            <div style={{ width: '30%', background: 'rgba(129, 140, 248, 0.7)', borderRadius: '4px', border: '1px solid rgba(165, 180, 252, 0.5)' }}></div>
                            <div style={{ width: '38%', background: 'rgba(129, 140, 248, 0.7)', borderRadius: '4px', border: '1px solid rgba(165, 180, 252, 0.5)' }}></div>
                            <div style={{ width: '28%', background: 'rgba(168, 85, 247, 0.7)', borderRadius: '4px', border: '1px solid rgba(192, 132, 252, 0.5)' }}></div>
                          </div>

                          {/* Track 2: Blue Blocks */}
                          <div style={{ display: 'flex', gap: '6px', height: '16px' }}>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.55)', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.45)' }}></div>
                            <div style={{ width: '32%', background: 'rgba(56, 189, 248, 0.55)', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.45)' }}></div>
                            <div style={{ width: '16%', background: 'rgba(129, 140, 248, 0.45)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.35)' }}></div>
                          </div>

                        </div>

                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: 3D FROSTED FOLDER & DISPATCH (Larger & Deep Blue Glow)
                    ============================================================== 
                  */}
                  {step.visualType === 'delivery' && (
                    <div 
                      className="artboard-box"
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '310px',
                        background: '#070B16',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.12)'
                      }}
                    >
                      {/* Deep Bottom-Left Blue Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-15%',
                          left: '10%',
                          width: '85%',
                          height: '85%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 75%)',
                          filter: 'blur(40px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Subtle Background Vector Accent Curve */}
                      <div style={{ position: 'absolute', right: '14px', bottom: '14px', width: '110px', height: '110px', borderRight: '1.5px solid rgba(255,255,255,0.1)', borderBottom: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '0 0 24px 0', pointerEvents: 'none' }}></div>

                      {/* 3D Frosted Glass Delivery Folder Structure (Larger Dimensions) */}
                      <div style={{ position: 'relative', width: '270px', height: '185px', zIndex: 1 }}>
                        
                        {/* Folder Backing Tab */}
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '95px',
                          height: '28px',
                          background: 'rgba(99, 102, 241, 0.55)',
                          borderRadius: '12px 12px 0 0',
                          border: '1.5px solid rgba(255, 255, 255, 0.25)',
                          borderBottom: 'none'
                        }}></div>

                        {/* Folder Main Body with Frosted Glass */}
                        <div style={{
                          position: 'absolute',
                          top: '22px',
                          left: '0',
                          width: '100%',
                          height: '162px',
                          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%)',
                          border: '1.5px solid rgba(255, 255, 255, 0.25)',
                          borderRadius: '0 20px 20px 20px',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          boxShadow: '0 25px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {/* Inner Media Sheets Preview */}
                          <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '26px',
                            right: '26px',
                            height: '58px',
                            background: 'rgba(255, 255, 255, 0.14)',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            zIndex: 0
                          }}></div>

                          {/* Center Dispatch Circle Button */}
                          <div style={{
                            width: '54px',
                            height: '54px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.18)',
                            border: '1.5px solid rgba(255, 255, 255, 0.4)',
                            backdropFilter: 'blur(12px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                            position: 'relative',
                            zIndex: 2
                          }}>
                            <i className="fa-solid fa-share" style={{ color: '#FFFFFF', fontSize: '1.2rem' }}></i>
                          </div>

                          {/* "Final touch" Badge with Cursor */}
                          <div style={{
                            position: 'absolute',
                            bottom: '16px',
                            right: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            zIndex: 3
                          }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                              <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.679v-20.8z"/>
                            </svg>
                            <span style={{
                              fontSize: '0.74rem',
                              fontWeight: '600',
                              color: '#FFFFFF',
                              background: 'rgba(0, 0, 0, 0.85)',
                              border: '1px solid rgba(255, 255, 255, 0.25)',
                              padding: '4px 10px',
                              borderRadius: '8px',
                              backdropFilter: 'blur(10px)',
                              boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
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
