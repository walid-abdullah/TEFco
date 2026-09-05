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
          { opacity: 0, y: -20, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        );
      }

      if (heroTitle) {
        heroTl.fromTo(
          heroTitle,
          { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.96 },
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
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
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

      // 2. SCROLL TRIGGER: Ceramic Light Morphing Stage (Dark -> Light -> Dark)
      const morphStage = containerRef.current.querySelector('.home-ceramic-morph-stage');
      if (morphStage) {
        ScrollTrigger.create({
          trigger: morphStage,
          start: 'top 55%',
          end: 'bottom 45%',
          toggleClass: { targets: morphStage, className: 'ceramic-stage-active' },
          scrub: false,
          markers: false
        });
      }

      // 3. Work Grid Parallax Depth
      const workCards = containerRef.current.querySelectorAll('.home-foundry-work-card');
      if (workCards.length > 0) {
        workCards.forEach((card, i) => {
          const speed = (i % 2 === 0) ? -25 : 25;
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
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-service-list',
              start: 'top 80%'
            }
          }
        );
      }

      // 5. Proof Grid & Positioning Reveal
      const proofDivs = containerRef.current.querySelectorAll('.home-foundry-proof-grid div');
      if (proofDivs.length > 0) {
        gsap.fromTo(
          proofDivs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.home-foundry-proof-grid',
              start: 'top 85%'
            }
          }
        );
      }

      // 6. Refresh on layout settle
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
