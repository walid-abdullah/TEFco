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

    // Small delay to ensure DOM is ready after navigation
    const timer = setTimeout(() => {
      // 1. Animate Hero and Main Page Headings on Every Page Entrance
      const heroHeadings = document.querySelectorAll('h1, .hero-title, .section-title, .section-subtitle, .about-eyebrow-line, .service-detail-number');
      if (heroHeadings.length > 0) {
        gsap.fromTo(
          Array.from(heroHeadings).slice(0, 8),
          {
            opacity: 0,
            y: 40,
            filter: 'blur(8px)',
            scale: 0.98
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out'
          }
        );
      }

      // 2. Animate Hero Paragraphs & Buttons
      const heroParas = document.querySelectorAll('.hero-subtitle, .section-description, main > section:first-of-type p, main > div:first-of-type p, .service-detail-hero-statement, .service-detail-hero-description');
      if (heroParas.length > 0) {
        gsap.fromTo(
          Array.from(heroParas).slice(0, 4),
          {
            opacity: 0,
            y: 25
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.15
          }
        );
      }

      // 3. ScrollTrigger Reveal for all .reveal-on-scroll elements across the site
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        // Remove static opacity if any
        el.classList.add('visible');
        
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 35,
            filter: 'blur(4px)'
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

      // 4. Stagger Glass Cards on scroll
      const cardGrids = document.querySelectorAll('.benefits-bento-grid, .home-foundry-work-grid, .work-vault-grid, .about-team-grid, .pricing-grid, .service-atlas-grid');
      cardGrids.forEach((grid) => {
        if (grid.children.length > 0) {
          gsap.fromTo(
            grid.children,
            {
              opacity: 0,
              y: 40,
              scale: 0.96
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 82%'
              }
            }
          );
        }
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
