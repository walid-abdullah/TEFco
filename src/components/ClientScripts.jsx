"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
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
        // If element is already in initial viewport, make it immediately visible
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
              const target = parseInt(numEl.getAttribute('data-target') || '0', 10);
              let current = 0;
              const duration = 1800; // ms
              const stepTime = 30;
              const steps = duration / stepTime;
              const increment = target / steps;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  numEl.textContent = target;
                  clearInterval(timer);
                } else {
                  numEl.textContent = Math.floor(current);
                }
              }, stepTime);
            });
            metricsObserver.disconnect();
          }
        }, { threshold: 0.2 });
        metricsObserver.observe(metricsSection);
      }
    }

    // Cleanup
    return () => {
      if (observer) observer.disconnect();
      if (metricsObserver) metricsObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
