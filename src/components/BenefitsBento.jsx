"use client";

import React from 'react';

export default function BenefitsBento() {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#E2E8F0', letterSpacing: '0.05em' }}>
              AGENCY INFRASTRUCTURE & SLA
            </span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 14px', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Engineered for Velocity. <br />
            <span className="combination-font" style={{ color: '#EF4444' }}>Built for Scale.</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.68)', fontSize: '1.02rem', lineHeight: '1.6', margin: 0 }}>
            Every step of our post-production pipeline is standardized for speed, broadcast color science, and zero-friction client collaboration.
          </p>
        </div>

        {/* 
          ========================================================================
          RAYCAST HARDWARE BENTO GRID (Asymmetric Luxury Hierarchy)
          ======================================================================== 
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '20px'
        }}>

          {/* Bento Card 1: 48H SLA Turnaround Engine (Spans 7 cols) */}
          <div 
            className="glass-card pop-hover"
            style={{
              gridColumn: 'span 7',
              borderRadius: '20px',
              padding: '32px',
              background: 'rgba(10, 14, 22, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#EF4444', background: 'rgba(239,68,68,0.12)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  GUARANTEED SLA // 48H
                </span>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#10B981' }}>
                  ● 99.4% ON-TIME DISPATCH
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                Ultra-Fast 24 to 48-Hour Turnarounds
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.92rem', lineHeight: '1.55', margin: 0 }}>
                Never wait weeks for a rough cut. Upload raw footage to your shared Drive or Frame.io pod, and receive mastered edits in under 48 hours.
              </p>
            </div>

            {/* Live Pipeline Stepper Simulation */}
            <div style={{
              marginTop: '24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '16px 18px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '10px', right: '10px', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', top: '50%', left: '10px', width: '75%', height: '2px', background: '#EF4444', zIndex: 0 }}></div>

                {[
                  { label: 'Ingest & Sync', time: '00:00', done: true },
                  { label: 'Hook & Cuts', time: '14:00', done: true },
                  { label: 'Color & Sound', time: '28:00', done: true },
                  { label: '4K Dispatch', time: '48:00', done: false }
                ].map((step, i) => (
                  <div key={i} style={{ position: 'relative', zIndex: 1, textAlign: 'center', background: '#0A0E16', padding: '0 6px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: step.done ? '#EF4444' : 'rgba(255,255,255,0.2)',
                      margin: '0 auto 4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: step.done ? '0 0 10px rgba(239,68,68,0.8)' : 'none'
                    }}>
                      {step.done && <i className="fa-solid fa-check" style={{ fontSize: '0.55rem', color: '#FFF' }}></i>}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#FFFFFF', fontWeight: '600' }}>{step.label}</div>
                    <div className="mono-spec" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{step.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: DaVinci Resolve Color Science (Spans 5 cols) */}
          <div 
            className="glass-card pop-hover"
            style={{
              gridColumn: 'span 5',
              borderRadius: '20px',
              padding: '32px',
              background: 'rgba(10, 14, 22, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8', background: 'rgba(56,189,248,0.12)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  ACEScc & REC.709
                </span>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  DAVINCI STUDIO
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                Broadcast Color Science
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.9rem', lineHeight: '1.55', margin: 0 }}>
                Every camera profile (Sony S-Log3, Canon C-Log, RED IPP2, Blackmagic RAW) is color-matched and calibrated for crisp skin tones on OLED screens.
              </p>
            </div>

            {/* Color Scope Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              marginTop: '20px'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '10px 12px' }}>
                <div className="mono-spec" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>GAMUT TARGET</div>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFFFFF' }}>DCI-P3 / Rec.709</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '10px 12px' }}>
                <div className="mono-spec" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>BIT-DEPTH</div>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#38BDF8' }}>10-Bit 4:2:2 ProRes</div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: -14 LUFS Audio Precision & iZotope RX (Spans 5 cols) */}
          <div 
            className="glass-card pop-hover"
            style={{
              gridColumn: 'span 5',
              borderRadius: '20px',
              padding: '32px',
              background: 'rgba(10, 14, 22, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#10B981', background: 'rgba(16,185,129,0.12)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  EBU R128 AUDIO MASTER
                </span>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#10B981' }}>
                  -14 LUFS
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                Sub-Frame Sound Engineering
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.9rem', lineHeight: '1.55', margin: 0 }}>
                Room echo elimination, spectral background de-noise via iZotope RX, and dynamic voice sidechaining for crystal-clear playback.
              </p>
            </div>

            {/* Audio Meter Visualizer Mockup */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '12px 14px',
              marginTop: '18px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="mono-spec" style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>INTEGRATED LOUDNESS</span>
                <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: '700' }}>-14.1 LUFS (SPOTIFY/YT NORM)</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                <div style={{ width: '70%', background: '#10B981' }}></div>
                <div style={{ width: '15%', background: '#F59E0B' }}></div>
                <div style={{ width: '15%', background: 'transparent' }}></div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Direct Slack & Frame.io Retainer Pod (Spans 7 cols) */}
          <div 
            className="glass-card pop-hover"
            style={{
              gridColumn: 'span 7',
              borderRadius: '20px',
              padding: '32px',
              background: 'rgba(10, 14, 22, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#F59E0B', background: 'rgba(245,158,11,0.12)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  DIRECT COLLABORATION POD
                </span>
                <span className="mono-spec" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  SLACK • WHATSAPP • FRAME.IO
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                Zero Bloated Email Threads
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.92rem', lineHeight: '1.55', margin: 0 }}>
                Drop timecoded notes directly inside Frame.io and communicate with your dedicated Creative Director on a private Slack or WhatsApp channel.
              </p>
            </div>

            {/* Collab Badges */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 14px' }}>
                <i className="fa-brands fa-slack" style={{ color: '#F59E0B', fontSize: '0.9rem' }}></i>
                <span style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: '600' }}>Dedicated Slack Connect</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 14px' }}>
                <i className="fa-solid fa-film" style={{ color: '#38BDF8', fontSize: '0.9rem' }}></i>
                <span style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: '600' }}>Frame.io Timecode Reviews</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

