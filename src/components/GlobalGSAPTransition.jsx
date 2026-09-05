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

    // Smooth page entrance timeline on navigation
    const timer = setTimeout(() => {
      // 1. Animate Hero Headings & Subtitles (Silky Soft Fade-Up)
      const headings = document.querySelectorAll('h1, .hero-title, .section-title, .section-subtitle, .about-eyebrow-line');
      if (headings.length > 0) {
        gsap.fromTo(
          Array.from(headings).slice(0, 6),
          {
            opacity: 0,
            y: 35,
            filter: 'blur(6px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.85,
            stagger: 0.08,
            ease: 'power3.out'
          }
        );
      }

      // 2. Animate Main Paragraphs & CTA Buttons
      const paras = document.querySelectorAll('.hero-subtitle, .section-description, main > section:first-of-type p');
      if (paras.length > 0) {
        gsap.fromTo(
          Array.from(paras).slice(0, 4),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        );
      }

      // 3. ScrollTrigger Reveal for all .reveal-on-scroll elements smoothly
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        el.classList.add('visible');
        
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 30,
            filter: 'blur(3px)'
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
              toggleActions: 'play none none none'
            }
          }
        );
      });

      ScrollTrigger.refresh();
    }, 40);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
