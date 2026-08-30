"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function GlassMeshBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0, normX: 0, normY: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const targetMouse = useRef({ x: 0, y: 0, normX: 0, normY: 0 });
  const currentMouse = useRef({ x: 0, y: 0, normX: 0, normY: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetMouse.current = {
        x: e.clientX,
        y: e.clientY,
        normX: normX,
        normY: normY
      };
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    const loop = () => {
      currentMouse.current.normX += (targetMouse.current.normX - currentMouse.current.normX) * 0.05;
      currentMouse.current.normY += (targetMouse.current.normY - currentMouse.current.normY) * 0.05;
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.05;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.05;

      setMouse({
        x: currentMouse.current.x,
        y: currentMouse.current.y,
        normX: currentMouse.current.normX,
        normY: currentMouse.current.normY
      });

      animRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (!mounted) return null;

  // 3D Perspective Angles for the Sculptures
  const rotateY = mouse.normX * 14;
  const rotateX = -mouse.normY * 10;
  const transX = mouse.normX * 20;
  const transY = mouse.normY * 15 - scrollProgress * 90;

  return (
    <div 
      className="apple-glass-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        perspective: '1300px',
        background: isLight 
          ? 'radial-gradient(ellipse at 70% 25%, #FFFFFF 0%, #F1F6FD 45%, #E5EFFB 100%)'
          : 'radial-gradient(ellipse at 70% 25%, #0C1736 0%, #060E22 45%, #030610 100%)',
        transition: 'background 0.5s ease'
      }}
      aria-hidden="true"
    >

      {/* SVG Shaders & Iridescent Rainbow Dispersion Gradients */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {/* Custom Chromatic Iridescent Rainbow Dispersion Gradient */}
          <linearGradient id="efPrismRainbowBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#FB923C" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FACC15" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#34D399" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="efPrismRainbowRev" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#34D399" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#FACC15" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FB923C" stopOpacity="0.9" />
          </linearGradient>

          {/* Frosted Glass Face (Light Mode) */}
          <linearGradient id="efGlassFaceLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.78)" />
            <stop offset="50%" stopColor="rgba(240, 248, 255, 0.48)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.65)" />
          </linearGradient>

          {/* Frosted Glass Face (Dark Mode) */}
          <linearGradient id="efGlassFaceDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="50%" stopColor="rgba(15, 26, 56, 0.5)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.15)" />
          </linearGradient>

          {/* Specular White Glint Ridge */}
          <linearGradient id="efSpecularRidge" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.95)" />
          </linearGradient>

          {/* Architectural Soft Drop Shadow */}
          <filter id="efSculptureShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
            <feOffset dx="15" dy="25" result="offsetblur" />
            <feFlood floodColor={isLight ? "rgba(15, 23, 42, 0.12)" : "rgba(0, 0, 0, 0.7)"} />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Atmospheric Soft Light Radiance */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: isLight
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(244, 63, 94, 0.06) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(139, 92, 246, 0.14) 45%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* =========================================================================
          CUSTOM 3D IRIDESCENT GLASS SCULPTURE (Signature EF Foundry Geometry)
          ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '2%',
          width: '620px',
          height: '540px',
          transform: `translate3d(${transX}px, ${transY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        <svg
          viewBox="0 0 600 520"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
          filter="url(#efSculptureShadow)"
        >
          {/* -------------------------------------------------------------
              FACET 1: Upper Kinetic Glass Wing (Foundry Ascent Slab)
              ------------------------------------------------------------- */}
          {/* 3D Extrusion Side Bevel */}
          <polygon
            points="180,60 160,85 460,185 480,160"
            fill="url(#efPrismRainbowBevel)"
          />
          <polygon
            points="480,160 460,185 540,310 560,285"
            fill="url(#efPrismRainbowRev)"
          />

          {/* Front Main Glass Face */}
          <polygon
            points="180,60 480,160 560,285 420,240"
            fill={isLight ? "url(#efGlassFaceLight)" : "url(#efGlassFaceDark)"}
            stroke={isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.4)"}
            strokeWidth="1.5"
          />

          {/* Specular White Rim Highlight Line */}
          <line
            x1="180"
            y1="60"
            x2="560"
            y2="285"
            stroke="url(#efSpecularRidge)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* -------------------------------------------------------------
              FACET 2: Central Interlocking Rhombus Prism (The Foundry Core)
              ------------------------------------------------------------- */}
          {/* 3D Extrusion Bottom Bevel with Rainbow Dispersion */}
          <polygon
            points="280,240 260,265 420,445 440,420"
            fill="url(#efPrismRainbowBevel)"
          />
          <polygon
            points="140,240 120,265 280,445 300,420"
            fill="url(#efPrismRainbowRev)"
          />

          {/* Front Main Glass Face */}
          <polygon
            points="140,240 300,160 440,340 280,420"
            fill={isLight ? "url(#efGlassFaceLight)" : "url(#efGlassFaceDark)"}
            stroke={isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.4)"}
            strokeWidth="1.5"
          />

          {/* Specular White Highlight Ridge */}
          <line
            x1="300"
            y1="160"
            x2="440"
            y2="340"
            stroke="url(#efSpecularRidge)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* -------------------------------------------------------------
              FACET 3: Dynamic Lower Horizon Blade (Anchor Facet)
              ------------------------------------------------------------- */}
          <polygon
            points="320,380 300,405 480,465 500,440"
            fill="url(#efPrismRainbowBevel)"
          />

          {/* Front Face */}
          <polygon
            points="320,380 500,440 420,490 260,430"
            fill={isLight ? "url(#efGlassFaceLight)" : "url(#efGlassFaceDark)"}
            stroke={isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.4)"}
            strokeWidth="1.5"
          />

          {/* Specular Ridge */}
          <line
            x1="320"
            y1="380"
            x2="500"
            y2="440"
            stroke="url(#efSpecularRidge)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Focal Specular Star Points */}
          <circle cx="180" cy="60" r="3.5" fill="#FFFFFF" opacity="0.95" />
          <circle cx="560" cy="285" r="4" fill="#FFFFFF" opacity="0.95" />
          <circle cx="300" cy="160" r="3.5" fill="#38BDF8" opacity="0.9" />
          <circle cx="440" cy="340" r="3.5" fill="#F43F5E" opacity="0.9" />
        </svg>
      </div>

      {/* Luminous Bottom Horizon Reflection Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: isLight
            ? 'linear-gradient(90deg, transparent 0%, rgba(37, 99, 235, 0.2) 30%, rgba(139, 92, 246, 0.25) 70%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.3) 30%, rgba(139, 92, 246, 0.3) 70%, transparent 100%)'
        }}
      />

    </div>
  );
}
