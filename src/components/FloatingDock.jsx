"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DesignMonksContact from './DesignMonksContact';
import { useTheme } from '@/context/ThemeContext';

export default function FloatingDock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Smart scroll: Show floating dock only when scrolled down (Design Monks Signature UX)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Smart Dynamic Floating Bottom Dock (Slides up smoothly on scroll) */}
      <div 
        className="floating-dock-container"
        style={{
          transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120px)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
          zIndex: 9990
        }}
      >
        <div 
          className="floating-dock-bar"
          style={{
            background: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 16, 32, 0.85)',
            border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            boxShadow: isLight 
              ? '0 20px 50px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)' 
              : '0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <Link href="/work" className="floating-dock-navlink" style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}>
            Projects
          </Link>

          <Link href="/services" className="floating-dock-navlink" style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}>
            Services
          </Link>

          {/* Highlighted CTA Pill */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="floating-dock-cta"
          >
            <span>Start a Project</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
          </button>

          <Link href="/about" className="floating-dock-navlink" style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}>
            About
          </Link>

          <Link href="/pricing" className="floating-dock-navlink" style={{ color: isLight ? '#090E1A' : '#FFFFFF' }}>
            Pricing
          </Link>
        </div>
      </div>

      {/* Interactive Modal */}
      {isModalOpen && (
        <DesignMonksContact isModal={true} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
