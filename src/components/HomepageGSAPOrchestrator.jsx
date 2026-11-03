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
      // 1. Hero Kinetic Entrance Animation (Cinematic Soft Blur & Elevation)
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      const heroSubtitle = containerRef.current.querySelector('.home-foundry-hero-copy .section-subtitle');
      const heroTitle = containerRef.current.querySelector('.home-foundry-hero-copy h1');
      const heroDesc = containerRef.current.querySelector('.home-foundry-hero-copy p');
      const heroActions = containerRef.current.querySelector('.home-foundry-hero-actions');
      const heroFormats = containerRef.current.querySelector('.home-foundry-formats');

      if (heroSubtitle) {
        heroTl.fromTo(
          heroSubtitle,
          { opacity: 0, y: -25, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }
        );
      }

      if (heroTitle) {
        heroTl.fromTo(
          heroTitle,
          { opacity: 0, y: 45, filter: 'blur(12px)', scale: 0.95 },
          { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 1.1 },
          '-=0.6'
        );
      }

      if (heroDesc) {
        heroTl.fromTo(
          heroDesc,
          { opacity: 0, y: 25, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85 },
          '-=0.7'
        );
      }

      if (heroActions) {
        heroTl.fromTo(
          heroActions.children,
          { opacity: 0, y: 22, scale: 0.93 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1 },
          '-=0.5'
        );
      }

      if (heroFormats) {
        heroTl.fromTo(
          heroFormats,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        );
      }

      // Founder video starts small and grows as it scrolls up. Only transforms
      // change, so the page never recalculates layout while scrolling.
      const showreel = containerRef.current.querySelector('.sg-showreel .workflow-explainer');
      const showreelFrame = showreel?.querySelector('.workflow-explainer-frame');
      if (showreelFrame) {
        const startScale = window.innerWidth < 720 ? 0.82 : 0.6;
        const scrollRange = { trigger: showreel, start: 'top 68%', end: 'top 14%', scrub: true };
        // The play button holds its size while the video around it grows.
        gsap.fromTo(
          showreelFrame,
          { scale: startScale, '--play-scale': 1 / startScale },
          { scale: 1, '--play-scale': 1, ease: 'none', transformOrigin: 'center top', scrollTrigger: scrollRange }
        );
      }

      // 2. Work Grid: Scroll-Scrub Parallax & Optical Zoom Depth (Option 4)
      const workCards = containerRef.current.querySelectorAll('.sg-work-card');
      if (workCards.length > 0) {
        workCards.forEach((card, i) => {
          // Entrance reveal
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.94,
              filter: 'blur(6px)',
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.95,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // 3. Service List Item: Kinetic Magnetic Slide & Focus
      const serviceList = containerRef.current.querySelector('.home-foundry-service-list');
      const serviceItems = containerRef.current.querySelectorAll('.home-foundry-service-list a');
      if (serviceList && serviceItems.length > 0) {
        gsap.fromTo(
          serviceItems,
          {
            opacity: 0,
            x: -40,
            scale: 0.96,
            filter: 'blur(6px)',
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: serviceList,
              start: 'top 82%',
            },
          }
        );
      }

      // 5. Proof & Metrics Grid: Depth Stagger Reveal
      const proofGrid = containerRef.current.querySelector('.home-foundry-proof-grid');
      const proofDivs = containerRef.current.querySelectorAll('.home-foundry-proof-grid div');
      if (proofGrid && proofDivs.length > 0) {
        gsap.fromTo(
          proofDivs,
          {
            opacity: 0,
            y: 35,
            scale: 0.95,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: proofGrid,
              start: 'top 85%',
            },
          }
        );
      }

      // Service stack: each card eases back as the next one slides over it.
      if (window.matchMedia('(min-width: 801px)').matches) {
        const stackCards = gsap.utils.toArray(containerRef.current.querySelectorAll('.sg-stack-card'));
        stackCards.slice(0, -1).forEach((card, i) => {
          gsap.to(card, {
            scale: 0.95,
            transformOrigin: 'center top',
            ease: 'none',
            scrollTrigger: { trigger: stackCards[i + 1], start: 'top bottom', end: 'top 120px', scrub: true },
          });
        });
      }

      // The service card nearest the middle of the screen stays highlighted.
      const stack = containerRef.current.querySelector('.sg-stack');
      if (stack) {
        const cards = gsap.utils.toArray(stack.querySelectorAll('.sg-stack-card'));
        let focused = null;
        const updateFocus = () => {
          const middle = window.innerHeight / 2;
          const distanceToMiddle = (card) => {
            const box = card.getBoundingClientRect();
            return Math.abs(box.top + box.height / 2 - middle);
          };
          const nearest = cards.reduce((best, card) => (distanceToMiddle(card) < distanceToMiddle(best) ? card : best));
          if (nearest === focused) return;
          focused?.classList.remove('is-focus');
          nearest.classList.add('is-focus');
          focused = nearest;
        };
        ScrollTrigger.create({
          trigger: stack,
          start: 'top 70%',
          end: 'bottom 30%',
          onToggle: (self) => {
            stack.classList.toggle('has-focus', self.isActive);
            if (self.isActive) updateFocus();
          },
          onUpdate: updateFocus,
        });
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
