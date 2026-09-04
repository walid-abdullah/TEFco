"use client";

import React from 'react';

export default function GlassMeshBackground() {
  // Completely cleaned Raycast true dark minimal canvas - Zero blur orbs or AI glow blobs
  return (
    <div 
      aria-hidden="true" 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    >
      {/* Top subtle Raycast spotlight cone */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1200px',
        height: '600px',
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 99, 71, 0.07), rgba(56, 189, 248, 0.05) 45%, transparent 75%)',
        filter: 'blur(30px)'
      }} />
    </div>
  );
}
