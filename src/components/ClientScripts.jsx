"use client";
import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // 1. Lenis Smooth Scroll Integration (Design Monks Style)
    let lenisInstance = null;
    const loadLenis = () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js';
        script.async = true;
        script.onload = () => {
          if (window.Lenis) {
            lenisInstance = new window.Lenis({
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
              smoothTouch: false,
              orientation: 'vertical',
            });

            function raf(time) {
              if (lenisInstance) {
                lenisInstance.raf(time);
                requestAnimationFrame(raf);
              }
            }
            requestAnimationFrame(raf);
            window._lenis = lenisInstance;
          }
        };
        document.head.appendChild(script);
      }
    };
    loadLenis();

    // 2. Enhanced Staggered Scroll Animations
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
      });
      elements.forEach(el => observer.observe(el));
    }

    // 3. Metrics Counter Animation
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
        }, { threshold: 0.3 });
        metricsObserver.observe(metricsSection);
      }
    }

    // 4. Portfolio Category Filtering
    const tabBtns = document.querySelectorAll('.portfolio-tabs .tab-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-card');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Cleanup
    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (observer) observer.disconnect();
      if (metricsObserver) metricsObserver.disconnect();
    };
  }, []);

  return null;
}
