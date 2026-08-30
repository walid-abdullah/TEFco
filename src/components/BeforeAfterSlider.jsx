"use client";

import React, { useState, useRef, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function BeforeAfterSlider({ 
  beforeLabel = "Raw Uncut Footage (Phone / Webcam)", 
  afterLabel = "Editly Viral Transformation (Sound + Color + Motion)",
  beforeBg = "#0F172A",
  afterBg = "linear-gradient(135deg, #1E1B4B 0%, #030712 100%)",
  aspectRatio = "16/9"
}) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => handleMove(e.clientX)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
        background: '#000000'
      }}
    >
      {/* AFTER (BOTTOM LAYER - FULL WIDTH) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: afterBg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          color: '#FFFFFF'
        }}
      >
        {/* Cinematic Asset Visual Simulation */}
        <div style={{ textAlign: 'center', maxWidth: '420px', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', color: '#10B981', fontWeight: '800', fontSize: '0.8rem', marginBottom: '14px' }}>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>THE EDITLY TRANSFORMATION</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: '900', color: '#FFFFFF', marginBottom: '8px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Hook Engineered & <span style={{ color: '#38BDF8' }}>Color Graded</span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
            <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '0.78rem', color: '#E2E8F0' }}>✨ 3s Retention Hook</span>
            <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '0.78rem', color: '#E2E8F0' }}>🎧 Custom Foley SFX</span>
            <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '0.78rem', color: '#E2E8F0' }}>🎨 Film LUT Grade</span>
          </div>
        </div>

        {/* Bottom Right After Tag */}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(16, 185, 129, 0.9)', color: '#FFFFFF', fontWeight: '800', fontSize: '0.78rem', backdropFilter: 'blur(10px)' }}>
          AFTER: 4K Viral Asset
        </div>
      </div>

      {/* BEFORE (TOP LAYER - CLIPPED WITH SLIDER POSITION) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${sliderPosition}%`,
          overflow: 'hidden',
          background: beforeBg,
          borderRight: '2px solid #FFFFFF',
          transition: isDragging ? 'none' : 'width 0.1s ease-out'
        }}
      >
        <div
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '1000px',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            color: '#94A3B8',
            filter: 'grayscale(60%) contrast(0.9)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #EF4444', color: '#EF4444', fontWeight: '800', fontSize: '0.8rem', marginBottom: '14px' }}>
              <i className="fa-solid fa-video"></i>
              <span>RAW CAMERA RECORDING</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: '800', color: '#CBD5E1', marginBottom: '8px' }}>
              Uncut, Flat & Stuttering
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
              Raw webcam footage with background hiss, flat profile colors, and zero hook retention.
            </p>
          </div>

          {/* Bottom Left Before Tag */}
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(239, 68, 68, 0.85)', color: '#FFFFFF', fontWeight: '800', fontSize: '0.78rem', backdropFilter: 'blur(10px)' }}>
            BEFORE: Raw Footage
          </div>
        </div>
      </div>

      {/* DRAGGABLE SLIDER HANDLE */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${sliderPosition}%`,
          transform: 'translate(-50%, -50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#090E1A',
          fontSize: '1rem',
          pointerEvents: 'none',
          zIndex: 10
        }}
      >
        <i className="fa-solid fa-arrows-left-right"></i>
      </div>
    </div>
  );
}
