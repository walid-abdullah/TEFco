"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();
  const [lenis, setLenis] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with refined inertia and momentum
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = instance;
    setLenis(instance);

    // Sync Lenis scroll with GSAP ScrollTrigger
    instance.on('scroll', ScrollTrigger.update);

    // Drive Lenis RAF from GSAP Ticker for 120fps synchronized rendering
    const tickerCallback = (time) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Global smooth anchor click interceptor
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href*="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Check if it's an internal hash anchor on current page
      if (href.startsWith('#') || (href.includes('#') && href.split('#')[0] === pathname)) {
        const hash = href.split('#')[1];
        if (!hash) return;

        const targetEl = document.getElementById(hash);
        if (targetEl) {
          e.preventDefault();
          instance.scrollTo(targetEl, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Scroll to top on pathname navigation if no hash
  useEffect(() => {
    if (lenis && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (!hash) {
        lenis.scrollTo(0, { immediate: true });
      }
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
