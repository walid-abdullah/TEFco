"use client";

import React from 'react';

export default function BenefitsBento() {
  const steps = [
    {
      id: 'step-01',
      title: 'Questionnaire',
      num: '01',
      desc: 'You fill out a short form that takes about five minutes, and from your answers we learn what your product does, who buys it, and why anyone should care.',
      visualType: 'chat'
    },
    {
      id: 'step-02',
      title: 'Story boarding',
      num: '02',
      desc: 'Before we start editing, you see exactly what the video will say and how every frame will look, and once you give your notes we lock the whole thing in.',
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
      
      {/* Background Subtle Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Timeline Container */}
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
              background: 'rgba(255, 255, 255, 0.15)',
              zIndex: 0
            }}
          />

          {/* 4 Connected Step Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
            {steps.map((step) => (
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
                
                {/* LEFT: Node & Clean Text */}
                <div style={{ position: 'relative', paddingLeft: '40px', textAlign: 'left' }}>
                  
                  {/* Square Node Marker */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '4px',
                      width: '15px',
                      height: '15px',
                      background: '#FFFFFF',
                      borderRadius: '2px',
                      boxShadow: '0 0 12px rgba(255,255,255,0.6)',
                      zIndex: 2
                    }}
                  />

                  {/* Title & Number */}
                  <h3 style={{ 
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', 
                    fontWeight: '800', 
                    color: '#FFFFFF', 
                    margin: '0 0 16px', 
                    letterSpacing: '-0.03em', 
                    lineHeight: '1.15',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px'
                  }}>
                    <span>{step.title}</span>
                    <span style={{ 
                      fontSize: '0.95rem', 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: '500', 
                      color: 'rgba(255, 255, 255, 0.45)',
                      letterSpacing: '0.02em'
                    }}>
                      {step.num}
                    </span>
                  </h3>

                  {/* Clean 2-Line Description */}
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.65)', 
                    fontSize: '1rem', 
                    lineHeight: '1.65', 
                    margin: 0,
                    maxWidth: '420px',
                    fontWeight: '400'
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* RIGHT: Square-Form UI Artboard with Vibrant Ambient Glow */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '540px', justifySelf: 'center' }}>
                  
                  {/* 
                    ==============================================================
                    VISUAL 1: QUESTIONNAIRE / CHAT DIALOGUE ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'chat' && (
                    <div 
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '12px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)'
                      }}
                    >
                      {/* Ambient Bottom Backlight Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-25%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '90%',
                          height: '65%',
                          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.55) 0%, rgba(59, 130, 246, 0.3) 45%, transparent 75%)',
                          filter: 'blur(40px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Chat Bubble 1: Agency Question */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'rgba(99, 102, 241, 0.28)',
                          border: '1px solid rgba(129, 140, 248, 0.45)',
                          borderRadius: '12px 12px 2px 12px',
                          padding: '8px 14px',
                          fontSize: '0.8rem',
                          color: '#F8FAFC',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                          What does your product do?
                        </div>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: '800', color: '#FFFFFF', flexShrink: 0 }}>
                          M
                        </div>
                      </div>

                      {/* Chat Bubble 2: Client Answer */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#94A3B8', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ fontSize: '0.6rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.07)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px 12px 12px 2px',
                          padding: '8px 14px',
                          fontSize: '0.8rem',
                          color: '#CBD5E1',
                          backdropFilter: 'blur(10px)'
                        }}>
                          SaaS project management tool for startups
                        </div>
                      </div>

                      {/* Chat Bubble 3: Agency Question */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'rgba(99, 102, 241, 0.28)',
                          border: '1px solid rgba(129, 140, 248, 0.45)',
                          borderRadius: '12px 12px 2px 12px',
                          padding: '8px 14px',
                          fontSize: '0.8rem',
                          color: '#F8FAFC',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}>
                          Who is your ideal customer?
                        </div>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: '800', color: '#FFFFFF', flexShrink: 0 }}>
                          M
                        </div>
                      </div>

                      {/* Chat Bubble 4: Client Answer */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#94A3B8', flexShrink: 0 }}>
                          <i className="fa-solid fa-user" style={{ fontSize: '0.6rem' }}></i>
                        </div>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.07)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px 12px 12px 2px',
                          padding: '8px 14px',
                          fontSize: '0.78rem',
                          color: '#CBD5E1',
                          backdropFilter: 'blur(10px)'
                        }}>
                          Founders &amp; operation teams at early-stage startups
                        </div>
                      </div>

                      {/* Chat Bubble 5: Typing Indicator */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          background: 'rgba(99, 102, 241, 0.28)',
                          border: '1px solid rgba(129, 140, 248, 0.45)',
                          borderRadius: '12px',
                          padding: '6px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.8 }}></span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.8 }}></span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.8 }}></span>
                        </div>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: '800', color: '#FFFFFF', flexShrink: 0 }}>
                          M
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 2: STORYBOARDING / FLOATING FAN CARDS ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'moodboard' && (
                    <div 
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)'
                      }}
                    >
                      {/* Ambient Center Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '90%',
                          height: '70%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.55) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 75%)',
                          filter: 'blur(45px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* 5 Floating Moodboard Cards Container */}
                      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
                        
                        {/* Top Left: MOTION STYLE Card */}
                        <div style={{
                          position: 'absolute',
                          top: '12%',
                          left: '3%',
                          transform: 'rotate(-8deg)',
                          background: 'rgba(11, 15, 25, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '12px',
                          padding: '10px 14px',
                          width: '135px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                        }}>
                          <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                            MOTION STYLE
                          </span>
                          <svg width="100%" height="16" viewBox="0 0 100 16" fill="none">
                            <path d="M0 12C20 12 30 4 50 4C70 4 80 12 100 12" stroke="#60A5FA" strokeWidth="1.5" />
                            <path d="M0 6C25 6 35 14 55 14C75 14 85 6 100 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                          </svg>
                        </div>

                        {/* Top Center: COLOR PALETTE Card */}
                        <div style={{
                          position: 'absolute',
                          top: '6%',
                          left: '34%',
                          background: 'rgba(11, 15, 25, 0.92)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          padding: '10px 16px',
                          width: '145px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                          zIndex: 3
                        }}>
                          <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                            COLOR PALETTE
                          </span>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: '#FFFFFF' }}></div>
                            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: '#93C5FD' }}></div>
                            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: '#3B82F6' }}></div>
                            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: '#1D4ED8' }}></div>
                            <div style={{ flex: 1, height: '14px', borderRadius: '3px', background: '#1E293B' }}></div>
                          </div>
                        </div>

                        {/* Top Right: TONE & VOICE Card */}
                        <div style={{
                          position: 'absolute',
                          top: '12%',
                          right: '3%',
                          transform: 'rotate(8deg)',
                          background: 'rgba(11, 15, 25, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '12px',
                          padding: '10px 14px',
                          width: '135px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                        }}>
                          <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                            TONE &amp; VOICE
                          </span>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.52rem', padding: '2px 5px', borderRadius: '3px', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}>BOLD</span>
                            <span style={{ fontSize: '0.52rem', padding: '2px 5px', borderRadius: '3px', background: 'rgba(59,130,246,0.3)', color: '#93C5FD' }}>FAST-PACED</span>
                          </div>
                        </div>

                        {/* Bottom Left: SCENE DIRECTION Card */}
                        <div style={{
                          position: 'absolute',
                          bottom: '12%',
                          left: '12%',
                          transform: 'rotate(-4deg)',
                          background: 'rgba(11, 15, 25, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '12px',
                          padding: '10px 16px',
                          width: '140px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                          zIndex: 2
                        }}>
                          <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                            SCENE DIRECTION
                          </span>
                          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '18px' }}>
                            <div style={{ width: '6px', height: '60%', background: '#60A5FA', borderRadius: '2px' }}></div>
                            <div style={{ width: '6px', height: '90%', background: '#818CF8', borderRadius: '2px' }}></div>
                            <div style={{ width: '6px', height: '100%', background: '#A855F7', borderRadius: '2px' }}></div>
                            <div style={{ width: '6px', height: '70%', background: '#818CF8', borderRadius: '2px' }}></div>
                            <div style={{ width: '6px', height: '40%', background: '#60A5FA', borderRadius: '2px' }}></div>
                          </div>
                        </div>

                        {/* Bottom Right: VISUAL REFERENCE Card */}
                        <div style={{
                          position: 'absolute',
                          bottom: '12%',
                          right: '12%',
                          transform: 'rotate(4deg)',
                          background: 'rgba(11, 15, 25, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '12px',
                          padding: '10px 16px',
                          width: '140px',
                          backdropFilter: 'blur(16px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                          zIndex: 2
                        }}>
                          <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                            VISUAL REFERENCE
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#A855F7', opacity: 0.8 }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38BDF8', opacity: 0.8 }}></div>
                            <div style={{ width: '10px', height: '10px', background: '#FFFFFF', opacity: 0.8 }}></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 3: FINAL ANIMATION / TIMELINE SEQUENCER ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'timeline' && (
                    <div 
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '24px',
                        padding: '22px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)'
                      }}
                    >
                      {/* Ambient Top Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '-15%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '90%',
                          height: '65%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 75%)',
                          filter: 'blur(40px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* Top Box: Preview & Retention Curve */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(11, 15, 25, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '14px',
                        padding: '14px',
                        display: 'grid',
                        gridTemplateColumns: '70px 1fr',
                        gap: '14px',
                        alignItems: 'center',
                        backdropFilter: 'blur(12px)'
                      }}>
                        {/* Video Thumbnail Placeholder */}
                        <div style={{
                          height: '65px',
                          background: 'rgba(255,255,255,0.06)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <i className="fa-solid fa-play" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}></i>
                        </div>

                        {/* Smooth Retention Curve */}
                        <div style={{ height: '65px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <svg width="100%" height="40" viewBox="0 0 200 40" fill="none">
                            <path d="M0 32C40 32 60 10 100 18C140 26 160 8 200 6" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0 38C40 38 60 22 100 28C140 34 160 18 200 16" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Box: Video Editor Multi-Track Sequencer */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(11, 15, 25, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '14px',
                        padding: '14px',
                        backdropFilter: 'blur(12px)'
                      }}>
                        {/* Timecode Ruler */}
                        <div style={{ position: 'relative', height: '12px', borderBottom: '1px solid rgba(255,255,255,0.12)', marginBottom: '10px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                            <span>00:00</span>
                            <span>00:15</span>
                            <span>00:30</span>
                            <span>00:45</span>
                            <span>01:00</span>
                          </div>

                          {/* Blue Playhead Line */}
                          <div style={{ position: 'absolute', top: '-4px', left: '62%', width: '2px', height: '64px', background: '#60A5FA', boxShadow: '0 0 8px #60A5FA', zIndex: 3 }}>
                            <div style={{ position: 'absolute', top: '0', left: '-3px', width: '8px', height: '6px', background: '#60A5FA', clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
                          </div>
                        </div>

                        {/* Multi-Track Clips */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {/* Track 1: Video */}
                          <div style={{ display: 'flex', gap: '6px', height: '16px' }}>
                            <div style={{ width: '24%', background: 'rgba(99, 102, 241, 0.6)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '38%', background: 'rgba(99, 102, 241, 0.6)', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.5)' }}></div>
                            <div style={{ width: '34%', background: 'rgba(168, 85, 247, 0.6)', borderRadius: '4px', border: '1px solid rgba(192, 132, 252, 0.5)' }}></div>
                          </div>

                          {/* Track 2: Audio */}
                          <div style={{ display: 'flex', gap: '6px', height: '14px' }}>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                            <div style={{ width: '48%', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.4)' }}></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* 
                    ==============================================================
                    VISUAL 4: DELIVERY / 3D FROSTED FOLDER & FINAL TOUCH ARTBOARD
                    ============================================================== 
                  */}
                  {step.visualType === 'delivery' && (
                    <div 
                      style={{
                        position: 'relative',
                        aspectRatio: '16/11',
                        minHeight: '300px',
                        background: '#070A12',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '24px',
                        padding: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)'
                      }}
                    >
                      {/* Ambient Bottom Blue Glow */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '-20%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '90%',
                          height: '70%',
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 75%)',
                          filter: 'blur(45px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* 3D Frosted Glass Delivery Folder Structure */}
                      <div style={{ position: 'relative', width: '220px', height: '160px', zIndex: 1 }}>
                        
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
                          height: '140px',
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
                            top: '-10px',
                            left: '20px',
                            right: '20px',
                            height: '50px',
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
                              fontSize: '0.68rem',
                              fontWeight: '600',
                              color: '#FFFFFF',
                              background: 'rgba(0, 0, 0, 0.65)',
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

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 860px) {
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

