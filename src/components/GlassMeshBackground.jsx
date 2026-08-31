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

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!isTouch && window.innerWidth > 768) {
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
      animRef.current = requestAnimationFrame(loop);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        if (animRef.current) cancelAnimationFrame(animRef.current);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const paletteMix = Math.min(1, scrollProgress * 1.4);
  const lightBackground = isLight
    ? `radial-gradient(ellipse at ${32 + mouse.normX * 18}% ${18 + mouse.normY * 16}%, rgba(255,255,255,0.94) 0%, rgba(227,240,255,0.88) 28%, rgba(241,246,253,0.82) 55%, rgba(248,250,252,0.92) 100%)`
    : `radial-gradient(ellipse at ${52 + mouse.normX * 18}% ${20 + mouse.normY * 16}%, rgba(14, 116, 144, 0.26) 0%, rgba(15, 23, 42, 0.8) 28%, rgba(3, 7, 18, 0.96) 60%, rgba(2, 6, 23, 1) 100%)`;

  const cyanPulse = isLight ? `rgba(59, 130, 246, ${0.15 + paletteMix * 0.2})` : `rgba(34, 211, 238, ${0.2 + paletteMix * 0.30})`;
  const violetPulse = isLight ? `rgba(124, 58, 237, ${0.12 + paletteMix * 0.18})` : `rgba(168, 85, 247, ${0.18 + paletteMix * 0.22})`;

  // 3D Perspective Angles for the Sculptures
  const rotateY = mouse.normX * 14;
  const rotateX = -mouse.normY * 10;
  const transX = mouse.normX * 20 + (scrollProgress - 0.5) * 40;
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
        background: lightBackground,
        transition: 'background 0.5s ease, opacity 0.25s ease',
        opacity: 1,
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
          background: `radial-gradient(circle, ${cyanPulse} 0%, ${violetPulse} 38%, transparent 72%)`,
          filter: 'blur(90px)',
          transform: `translate3d(${mouse.normX * 18}px, ${mouse.normY * 14}px, 0) scale(${1 + paletteMix * 0.12})`,
          transition: 'background 0.5s ease, transform 0.35s ease-out'
        }}
      />



      {/* Luminous Bottom Horizon Reflection Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: isLight
            ? `linear-gradient(90deg, transparent 0%, rgba(37, 99, 235, ${0.12 + paletteMix * 0.18}) 20%, rgba(124, 58, 237, ${0.16 + paletteMix * 0.18}) 60%, transparent 100%)`
            : `linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, ${0.2 + paletteMix * 0.20}) 20%, rgba(139, 92, 246, ${0.22 + paletteMix * 0.18}) 60%, transparent 100%)`
        }}
      />

    </div>
  );
}
