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
      // 1. Hero Kinetic Entrance Animation (Smooth Soft Fade-Up)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const heroSubtitle = containerRef.current.querySelector('.home-foundry-hero-copy .section-subtitle');
      const heroTitle = containerRef.current.querySelector('.home-foundry-hero-copy h1');
      const heroDesc = containerRef.current.querySelector('.home-foundry-hero-copy p');
      const heroActions = containerRef.current.querySelector('.home-foundry-hero-actions');
      const heroFormats = containerRef.current.querySelector('.home-foundry-formats');

      if (heroSubtitle) {
        heroTl.fromTo(
          heroSubtitle,
          { opacity: 0, y: -20, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        );
      }

      if (heroTitle) {
        heroTl.fromTo(
          heroTitle,
          { opacity: 0, y: 45, filter: 'blur(10px)', scale: 0.96 },
          { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 1 },
          '-=0.5'
        );
      }

      if (heroDesc) {
        heroTl.fromTo(
          heroDesc,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      if (heroActions) {
        heroTl.fromTo(
          heroActions.children,
          { opacity: 0, y: 20, scale: 0.94 },
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

      // 2. Work Grid Parallax Depth & Smooth Fade-Up
      const workCards = containerRef.current.querySelectorAll('.home-foundry-work-card');
      if (workCards.length > 0) {
        workCards.forEach((card, i) => {
          const speed = (i % 2 === 0) ? -20 : 20;
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 + speed },
            {
              opacity: 1,
              y: -speed,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      }

      // 3. Service List Item Staggered Fade-Up
      const serviceItems = containerRef.current.querySelectorAll('.home-foundry-service-list a');
      if (serviceItems.length > 0) {
        gsap.fromTo(
          serviceItems,
          { opacity: 0, x: -30, filter: 'blur(4px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-service-list',
              start: 'top 82%'
            }
          }
        );
      }

      // 4. Proof Grid Stagger Reveal
      const proofDivs = containerRef.current.querySelectorAll('.home-foundry-proof-grid div');
      if (proofDivs.length > 0) {
        gsap.fromTo(
          proofDivs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-proof-grid',
              start: 'top 85%'
            }
          }
        );
      }

      // 5. Benefits Bento Cards Smooth Fade-Up
      const bentoCards = containerRef.current.querySelectorAll('.benefits-bento-grid .workflow-card');
      if (bentoCards.length > 0) {
        gsap.fromTo(
          bentoCards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.benefits-bento-grid',
              start: 'top 80%'
            }
          }
        );
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="home-gsap-container">
      {children}
    </div>
  );
}
