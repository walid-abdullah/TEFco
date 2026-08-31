"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveDynamicMesh() {
  const canvasRef = useRef(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const updateTheme = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light' ||
        document.body.classList.contains('light-theme');
      setTheme(isLight ? 'light' : 'dark');
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 48 : 120;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const pointer = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2, vx: 0, vy: 0 };
    const handleMouseMove = (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0] || event.changedTouches[0];
      if (!touch) return;
      pointer.tx = touch.clientX;
      pointer.ty = touch.clientY;
    };

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.2 + 1.1,
      alpha: Math.random() * 0.75 + 0.25,
      hue: 190 + Math.random() * 140,
    }));

    const ribbons = [
      { phase: 0.2, amplitude: 60, speed: 0.0009, color: 'rgba(56, 189, 248, 0.38)', glow: 'rgba(56, 189, 248, 0.65)' },
      { phase: 1.4, amplitude: 78, speed: 0.0011, color: 'rgba(99, 102, 241, 0.35)', glow: 'rgba(129, 140, 248, 0.7)' },
      { phase: 2.9, amplitude: 94, speed: 0.0014, color: 'rgba(45, 212, 191, 0.28)', glow: 'rgba(45, 212, 191, 0.6)' },
    ];

    let time = 0;

    const getThemePalette = (isLight) => ({
      base: isLight ? '#f6f9ff' : '#030712',
      glowA: isLight ? 'rgba(37, 99, 235, 0.24)' : 'rgba(56, 189, 248, 0.28)',
      glowB: isLight ? 'rgba(124, 58, 237, 0.16)' : 'rgba(168, 85, 247, 0.2)',
      particle: isLight ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255,255,255,0.75)',
      border: isLight ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255,255,255,0.18)',
    });

    const render = () => {
      time += 0.012;
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      pointer.vx += (pointer.tx - pointer.x) * 0.02;
      pointer.vy += (pointer.ty - pointer.y) * 0.02;
      pointer.vx *= 0.9;
      pointer.vy *= 0.9;

      const isLight = theme === 'light';
      const palette = getThemePalette(isLight);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      const hueShift = 200 + scrollProgress * 120;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(
        width * 0.72 + (pointer.x - width / 2) * 0.3,
        height * 0.20 + (pointer.y - height / 2) * 0.1,
        50,
        width * 0.72,
        height * 0.20,
        width * 0.9,
      );
      bg.addColorStop(0, isLight ? `hsla(${hueShift}, 78%, 88%, 0.9)` : `hsla(${hueShift}, 92%, 10%, 0.96)`);
      bg.addColorStop(0.5, isLight ? '#ffffff' : '#040914');
      bg.addColorStop(1, isLight ? '#f5f8ff' : '#02060d');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const orbA = ctx.createRadialGradient(
        width * 0.78 + (pointer.x - width / 2) * 0.45,
        height * 0.2 + (pointer.y - height / 2) * 0.3,
        0,
        width * 0.78 + (pointer.x - width / 2) * 0.45,
        height * 0.2 + (pointer.y - height / 2) * 0.3,
        420,
      );
      orbA.addColorStop(0, isLight ? 'rgba(37, 99, 235, 0.18)' : 'rgba(56,189,248,0.18)');
      orbA.addColorStop(0.38, isLight ? 'rgba(59,130,246,0.10)' : 'rgba(99,102,241,0.14)');
      orbA.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = orbA;
      ctx.fillRect(0, 0, width, height);

      const orbB = ctx.createRadialGradient(
        width * 0.20,
        height * 0.82 + scrollY * 0.08,
        0,
        width * 0.20,
        height * 0.82 + scrollY * 0.08,
        520,
      );
      orbB.addColorStop(0, isLight ? 'rgba(168,85,247,0.16)' : 'rgba(168,85,247,0.12)');
      orbB.addColorStop(0.5, isLight ? 'rgba(103,80,255,0.08)' : 'rgba(14,165,233,0.08)');
      orbB.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = orbB;
      ctx.fillRect(0, 0, width, height);

      ribbons.forEach((ribbon, ribbonIndex) => {
        ctx.beginPath();
        for (let x = 0; x <= width + 30; x += 22) {
          const waveA = Math.sin(x * 0.0105 + time * 0.9 + ribbon.phase) * ribbon.amplitude;
          const waveB = Math.cos((x + ribbonIndex * 100) * 0.018 + time * 1.3) * (ribbon.amplitude * 0.45);
          const drift = (pointer.x - width / 2) * 0.08;
          const y = height * (0.3 + ribbonIndex * 0.2) + waveA + waveB + drift + scrollY * 0.04 * (ribbonIndex + 1);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = ribbon.color;
        ctx.lineWidth = isMobile ? 1.2 : 1.8;
        ctx.shadowBlur = isMobile ? 14 : 26;
        ctx.shadowColor = ribbon.glow;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      particles.forEach((particle, index) => {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy) || 1;
        const influence = distance < 220 ? (220 - distance) / 220 : 0;

        particle.vx += ((Math.random() - 0.5) * 0.15) + (dx / distance) * influence * 0.24;
        particle.vy += ((Math.random() - 0.5) * 0.15) + (dy / distance) * influence * 0.24;
        particle.x += particle.vx + pointer.vx * 0.04;
        particle.y += particle.vy + pointer.vy * 0.04;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        particle.vx *= 0.985;
        particle.vy *= 0.985;

        const alpha = particle.alpha * (0.4 + influence * 1.2);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius + influence * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 95%, ${isLight ? 35 : 75}%, ${alpha})`;
        ctx.fill();

        if (index % 3 === 0) {
          for (let j = index + 1; j < particles.length; j += 1) {
            const other = particles[j];
            const nx = other.x - particle.x;
            const ny = other.y - particle.y;
            const mag = Math.hypot(nx, ny) || 1;
            if (mag < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = isLight ? `rgba(15, 23, 42, ${0.16 - mag / 1000})` : `rgba(255,255,255,${0.12 - mag / 1000})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      });

      // subtle vignette/frosted overlay
      const overlay = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, width * 0.8);
      overlay.addColorStop(0, 'rgba(255,255,255,0)');
      overlay.addColorStop(1, isLight ? 'rgba(148, 163, 184, 0.08)' : 'rgba(2, 6, 23, 0.22)');
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 1,
      }}
    />
  );
}
