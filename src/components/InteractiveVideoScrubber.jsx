"use client";

import React, { useState } from 'react';

export default function InteractiveVideoScrubber() {
  const [sliderPos, setSliderPos] = useState(65);
  const [activePreset, setActivePreset] = useState('rec709');

  const presets = [
    { id: 'rec709', name: 'Rec.709 Master + Audio Lab', tag: 'FINAL MASTER' },
    { id: 'kinetic', name: 'Kinetic Type & Sound FX', tag: 'VIRAL RETENTION' },
    { id: 'raw', name: 'Raw Flat S-Log3 Ingest', tag: 'CAMERA RAW' }
  ];

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 35px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>INTERACTIVE POST-PRODUCTION LAB</span>
          </div>

          <h2 className="section-title" style={{ fontSize: '2.8rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '12px', color: '#FFFFFF' }}>
            From Raw Log Footage to <span className="combination-font">Broadcast Perfection</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
            Drag the interactive split-slider below to witness the difference between unedited camera feeds and our proprietary audio-visual mastering suite.
          </p>
        </div>

        {/* Interactive Split-Scrubber Frame */}
        <div 
          className="glass-card"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: '#080C14',
            boxShadow: '0 30px 90px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)',
            position: 'relative'
          }}
        >
          {/* Top Window Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 18px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(255, 255, 255, 0.02)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }}></span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }}></span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
              <span className="mono-spec" style={{ marginLeft: '6px', fontSize: '0.7rem' }}>DAVINCI_RESOLVE_STUDIO_SPLIT.TIMELINE</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {presets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePreset(p.id)}
                  style={{
                    background: activePreset === p.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: activePreset === p.id ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.06)',
                    color: activePreset === p.id ? '#38BDF8' : 'var(--text-muted)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer'
                  }}
                >
                  {p.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Scrubber Canvas Surface */}
          <div 
            style={{ position: 'relative', aspectRatio: '21/9', cursor: 'ew-resize', overflow: 'hidden', userSelect: 'none' }}
            onMouseMove={handleSliderMove}
            onTouchMove={(e) => {
              if (e.touches[0]) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                setSliderPos(Math.max(5, Math.min(95, (x / rect.width) * 100)));
              }
            }}
          >
            {/* Background Layer: Mastered Color Graded Footage */}
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80" 
              alt="Final Mastered 4K Video"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Foreground Clipped Layer: Raw Log Video (Flat Grey) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPos}%`,
              overflow: 'hidden',
              borderRight: '2px solid #FFFFFF',
              boxShadow: '4px 0 20px rgba(0,0,0,0.8)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80" 
                alt="Raw S-Log Ingest"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(75%) contrast(75%) brightness(110%)',
                  minWidth: '100%'
                }}
              />

              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(0,0,0,0.7)',
                color: '#94A3B8',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                RAW S-LOG3 INGEST (BEFORE)
              </div>
            </div>

            {/* Right Side Master Label */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              padding: '4px 10px',
              borderRadius: '4px',
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38BDF8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}>
              MASTERED REC.709 + -14 LUFS (AFTER)
            </div>

            {/* Scrubber Handle Cursor */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: `${sliderPos}%`,
              transform: 'translate(-50%, -50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              color: '#090E1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.82rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
              pointerEvents: 'none',
              zIndex: 10
            }}>
              <i className="fa-solid fa-arrows-left-right"></i>
            </div>
          </div>

          {/* Bottom Audio Frequency Waveform Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#10B981' }}>
                AUDIO LAB STATUS: DE-NOISED (-14 LUFS INTEGRATED)
              </span>
            </div>

            <div className="mono-spec" style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
              DRAG SLIDER TO REVEAL FULL POST-PRODUCTION GRADE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
