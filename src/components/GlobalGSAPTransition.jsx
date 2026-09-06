"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalGSAPTransition() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const timer = setTimeout(() => {
      // 1. Universal Page Entrance: Hero Headings & Eyebrows (Kinetic Soft Blur)
      const headings = document.querySelectorAll('h1, .hero-title, .section-title, .section-subtitle, .about-eyebrow-line');
      if (headings.length > 0) {
        gsap.fromTo(
          Array.from(headings).slice(0, 6),
          {
            opacity: 0,
            y: 35,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.85,
            stagger: 0.08,
            ease: 'power3.out',
          }
        );
      }

      // 2. Main Paragraphs & CTA Action Buttons
      const paras = document.querySelectorAll('.hero-subtitle, .section-description, main > section:first-of-type p');
      if (paras.length > 0) {
        gsap.fromTo(
          Array.from(paras).slice(0, 4),
          { opacity: 0, y: 22, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, stagger: 0.09, ease: 'power3.out', delay: 0.1 }
        );
      }

      // 3. Grid & Bento Group Stagger with 3D Tilt (Pricing, Services, Workflow, Career)
      const gridContainers = document.querySelectorAll(
        '.pricing-cards-grid, .disciplines-grid, .workflow-grid, .career-perks-grid, .case-studies-grid, .team-grid, .services-detail-grid'
      );

      gridContainers.forEach((grid) => {
        const cards = grid.children;
        if (cards && cards.length > 0) {
          gsap.set(grid, { perspective: 1000 });
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 45,
              rotateX: 6,
              scale: 0.95,
              filter: 'blur(5px)',
              transformOrigin: '50% 100%',
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.85,
              stagger: 0.1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 4. ScrollTrigger Reveal for Generic .reveal-on-scroll Elements
      const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.visible)');
      revealElements.forEach((el) => {
        el.classList.add('visible');

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 32,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 5. Work Showcase Parallax & Scrub Media (/work and /case-studies)
      const workMediaCards = document.querySelectorAll('.work-grid-card, .case-study-card, .portfolio-card');
      workMediaCards.forEach((card, i) => {
        const yOffset = i % 2 === 0 ? -25 : 25;
        gsap.to(card, {
          y: yOffset,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      ScrollTrigger.refresh();
    }, 60);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
