"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackCtaClick, trackPageView } from '@/lib/analytics';

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

    // 1. Reveal Animations on Scroll
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

    return () => {
      document.removeEventListener('click', handleCtaClick);
      document.removeEventListener('pointermove', handleCardSpotlight);
      if (observer) observer.disconnect();
      if (metricsObserver) metricsObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
