"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomepageGSAPOrchestrator({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initial Hero Kinetic Entrance Animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const heroSubtitle = containerRef.current.querySelector('.home-foundry-hero-copy .section-subtitle');
      const heroTitle = containerRef.current.querySelector('.home-foundry-hero-copy h1');
      const heroDesc = containerRef.current.querySelector('.home-foundry-hero-copy p');
      const heroActions = containerRef.current.querySelector('.home-foundry-hero-actions');
      const heroFormats = containerRef.current.querySelector('.home-foundry-formats');

      if (heroSubtitle) {
        heroTl.fromTo(
          heroSubtitle,
          { opacity: 0, y: -25, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        );
      }

      if (heroTitle) {
        heroTl.fromTo(
          heroTitle,
          { opacity: 0, y: 50, filter: 'blur(12px)', scale: 0.95 },
          { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 1.1 },
          '-=0.5'
        );
      }

      if (heroDesc) {
        heroTl.fromTo(
          heroDesc,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      if (heroActions) {
        heroTl.fromTo(
          heroActions.children,
          { opacity: 0, y: 25, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12 },
          '-=0.5'
        );
      }

      if (heroFormats) {
        heroTl.fromTo(
          heroFormats,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.3'
        );
      }

      // 2. FULL-VIEWPORT DYNAMIC THEME MORPH: DARK ➔ CERAMIC LIGHT ➔ DARK
      const morphStage = containerRef.current.querySelector('.home-ceramic-morph-stage');
      if (morphStage) {
        ScrollTrigger.create({
          trigger: morphStage,
          start: 'top 48%',
          end: 'bottom 48%',
          onEnter: () => {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.add('scroll-light-active');
            window.dispatchEvent(new Event('themechange'));
          },
          onLeave: () => {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.remove('scroll-light-active');
            window.dispatchEvent(new Event('themechange'));
          },
          onEnterBack: () => {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.add('scroll-light-active');
            window.dispatchEvent(new Event('themechange'));
          },
          onLeaveBack: () => {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.remove('scroll-light-active');
            window.dispatchEvent(new Event('themechange'));
          }
        });
      }

      // 3. Work Grid Parallax Depth
      const workCards = containerRef.current.querySelectorAll('.home-foundry-work-card');
      if (workCards.length > 0) {
        workCards.forEach((card, i) => {
          const speed = (i % 2 === 0) ? -35 : 35;
          gsap.fromTo(
            card,
            { y: speed },
            {
              y: -speed,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2
              }
            }
          );
        });
      }

      // 4. Service List Item Stagger On Scroll
      const serviceItems = containerRef.current.querySelectorAll('.home-foundry-service-list a');
      if (serviceItems.length > 0) {
        gsap.fromTo(
          serviceItems,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-service-list',
              start: 'top 82%'
            }
          }
        );
      }

      // 5. Proof Grid Stagger Reveal
      const proofDivs = containerRef.current.querySelectorAll('.home-foundry-proof-grid div');
      if (proofDivs.length > 0) {
        gsap.fromTo(
          proofDivs,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-proof-grid',
              start: 'top 85%'
            }
          }
        );
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      // Revert theme to dark on unmount
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.remove('scroll-light-active');
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="home-gsap-container">
      {children}
    </div>
  );
}
