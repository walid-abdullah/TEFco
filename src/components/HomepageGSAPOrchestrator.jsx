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

      // 2. Work Grid: Scroll-Scrub Parallax & Optical Zoom Depth (Option 4)
      const workCards = containerRef.current.querySelectorAll('.home-foundry-work-card');
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

          // Continuous live scrub parallax on scroll
          const yShift = i % 2 === 0 ? -35 : 35;
          gsap.to(card, {
            y: yShift,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });

          // Inner thumbnail subtle optical zoom scrub
          const media = card.querySelector('img, video, .work-card-media');
          if (media) {
            gsap.fromTo(
              media,
              { scale: 1.08 },
              {
                scale: 1.0,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });
      }

      // 3. Benefits Bento Cards: Velocity 3D Tilt & Spring Stagger (Option 3)
      const bentoContainer = containerRef.current.querySelector('.benefits-bento-grid');
      const bentoCards = containerRef.current.querySelectorAll('.benefits-bento-grid .workflow-card, .benefits-bento-grid > div');
      if (bentoContainer && bentoCards.length > 0) {
        gsap.set(bentoContainer, { perspective: 1200 });

        gsap.fromTo(
          bentoCards,
          {
            opacity: 0,
            y: 50,
            rotateX: 8,
            scale: 0.93,
            filter: 'blur(6px)',
            transformOrigin: '50% 100%',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: bentoContainer,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 4. Service List Item: Kinetic Magnetic Slide & Focus
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
