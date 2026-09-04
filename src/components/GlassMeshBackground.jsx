"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function GlassMeshBackground() {
  const pathname = usePathname();

  // Highlight specific page atmospheres (e.g. Work, Services, Pricing, Book a Call)
  const isServicePage = pathname?.startsWith('/services');
  const isWorkPage = pathname === '/work';
  const isPricingPage = pathname === '/pricing';
  const isBookingPage = pathname?.includes('book') || pathname?.includes('booking');

  return (
    <div 
      aria-hidden="true" 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {/* 
        ========================================================================
        1. PRECISION ARCHITECTURAL STUDIO GRID (Clean, Subtle, Luxury Foundry Texture)
        ======================================================================== 
      */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 15%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 15%, black 40%, transparent 85%)',
          opacity: 0.8
        }}
      />

      {/* 
        ========================================================================
        2. TOP AMBIENT STUDIO HALO (Soft Luxury Glow)
        ======================================================================== 
      */}
      <div 
        style={{
          position: 'absolute',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          maxWidth: '100vw',
          height: '650px',
          background: isServicePage
            ? 'radial-gradient(ellipse 60% 45% at 50% 20%, rgba(239, 68, 68, 0.08), rgba(56, 189, 248, 0.04) 50%, transparent 75%)'
            : isWorkPage
            ? 'radial-gradient(ellipse 60% 45% at 50% 20%, rgba(56, 189, 248, 0.08), rgba(239, 68, 68, 0.03) 50%, transparent 75%)'
            : isPricingPage
            ? 'radial-gradient(ellipse 60% 45% at 50% 20%, rgba(16, 185, 129, 0.08), rgba(239, 68, 68, 0.03) 50%, transparent 75%)'
            : isBookingPage
            ? 'radial-gradient(ellipse 60% 45% at 50% 20%, rgba(239, 68, 68, 0.09), rgba(245, 158, 11, 0.04) 50%, transparent 75%)'
            : 'radial-gradient(ellipse 60% 45% at 50% 20%, rgba(239, 68, 68, 0.07), rgba(56, 189, 248, 0.03) 50%, transparent 75%)',
          filter: 'blur(50px)',
          opacity: 0.9
        }}
      />

      {/* 
        ========================================================================
        3. MID-PAGE RE-ENGAGEMENT AMBIENT CONE (Subtle depth on long scroll)
        ======================================================================== 
      */}
      <div 
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1400px',
          maxWidth: '100vw',
          height: '800px',
          background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(255, 255, 255, 0.015), transparent 70%)',
          filter: 'blur(70px)'
        }}
      />

      {/* 
        ========================================================================
        4. BOTTOM FOOTER ANCHOR GLOW
        ======================================================================== 
      */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          maxWidth: '100vw',
          height: '400px',
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(239, 68, 68, 0.04), transparent 75%)',
          filter: 'blur(60px)'
        }}
      />
    </div>
  );
}

