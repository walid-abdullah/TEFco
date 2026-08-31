"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackCtaClick, trackPageView } from '@/lib/analytics';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
    trackPageView(pathname, document.title || 'Editly Foundry');

    const handleCtaClick = (event) => {
      const target = event.target.closest('[data-analytics-id]');
      if (!target) return;
      const label = target.dataset.analyticsLabel || target.textContent?.trim() || 'cta-click';
      const location = target.dataset.analyticsLocation || pathname;
      trackCtaClick({ label, location, value: Number(target.dataset.analyticsValue || 0) });
    };

    document.addEventListener('click', handleCtaClick);

    // 0. Interactive Spotlight Glow Coordinates for Glass Cards
    const handleCardSpotlight = (e) => {
      const card = e.target.closest('.glass-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document.addEventListener('pointermove', handleCardSpotlight, { passive: true });

    // Only apply subtle magnetic effect to small buttons, not whole cards/pads
    const magneticTargets = document.querySelectorAll('.magnetic-hover, .btn-primary');
    const magneticHandlers = [...magneticTargets].map((element) => {
      const handleMove = (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate3d(${offsetX * 0.08}px, ${offsetY * 0.08}px, 0)`;
      };

      const handleLeave = () => {
        element.style.transform = 'translate3d(0, 0, 0)';
      };

      element.addEventListener('pointermove', handleMove);
      element.addEventListener('pointerleave', handleLeave);
      return { element, handleMove, handleLeave };
    });

    // 1. Re-trigger animations & visible classes on route changes
    const elements = document.querySelectorAll('.reveal-on-scroll');
    let observer;

    if (elements.length) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.02,
        rootMargin: "50px 0px 50px 0px"
      });

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    }

    // 2. Metrics Counter Animation
    const metricNumbers = document.querySelectorAll('.metric-number');
    let metricsObserver;
    if (metricNumbers.length) {
      const metricsSection = document.querySelector('.metrics-bar');
      if (metricsSection) {
        metricsObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            metricNumbers.forEach(numEl => {
              const rawTarget = numEl.getAttribute('data-target') || '0';
              const isFloat = rawTarget.includes('.');
              const target = parseFloat(rawTarget);
              let current = 0;
              const duration = 1800; // ms
              const stepTime = 30;
              const steps = duration / stepTime;
              const increment = target / steps;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  numEl.textContent = isFloat ? target.toFixed(1) : Math.round(target);
                  clearInterval(timer);
                } else {
                  if (isFloat) {
                    if (current < 4) {
                      numEl.textContent = Math.floor(current);
                    } else {
                      numEl.textContent = current.toFixed(1);
                    }
                  } else {
                    numEl.textContent = Math.floor(current);
                  }
                }
              }, stepTime);
            });
            metricsObserver.disconnect();
          }
        }, { threshold: 0.2 });
        metricsObserver.observe(metricsSection);
      }
    }

    // 3. Ultra-Smooth Cinema-Grade Section Fit & Settlement (GSAP Power2 Ease)
    let scrollTimeout = null;
    let isAutoScrolling = false;

    const handleSmartScrollDock = () => {
      if (isAutoScrolling) return;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('.section-target');
        if (!sections.length) return;

        const viewportHeight = window.innerHeight;
        const currentScrollY = window.scrollY;
        let targetSection = null;
        let minDistance = Infinity;

        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          const distToTop = Math.abs(rect.top);
          if (distToTop < minDistance && rect.bottom > 100) {
            minDistance = distToTop;
            targetSection = sec;
          }
        });

        // If the closest section is slightly offset, smoothly ease into place using GSAP
        if (targetSection && minDistance > 40 && minDistance < viewportHeight * 0.45) {
          isAutoScrolling = true;
          const targetY = currentScrollY + targetSection.getBoundingClientRect().top - (targetSection.id === 'home' ? 0 : 20);

          // Ultra-smooth GSAP interpolation
          gsap.to(window, {
            scrollTo: { y: targetY, autoKill: true },
            duration: 0.95,
            ease: 'power3.out',
            overwrite: 'auto',
            onComplete: () => {
              isAutoScrolling = false;
            }
          });

          // Ensure entrance animations are fully revealed & completed
          const animElements = targetSection.querySelectorAll('.reveal-on-scroll');
          animElements.forEach(el => el.classList.add('visible'));

          setTimeout(() => {
            isAutoScrolling = false;
          }, 1000);
        }
      }, 220); // 220ms gesture settlement threshold
    };

    window.addEventListener('scroll', handleSmartScrollDock, { passive: true });

    return () => {
      document.removeEventListener('click', handleCtaClick);
      document.removeEventListener('pointermove', handleCardSpotlight);
      window.removeEventListener('scroll', handleSmartScrollDock);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      magneticHandlers.forEach(({ element, handleMove, handleLeave }) => {
        element.removeEventListener('pointermove', handleMove);
        element.removeEventListener('pointerleave', handleLeave);
      });
      if (observer) observer.disconnect();
      if (metricsObserver) metricsObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
