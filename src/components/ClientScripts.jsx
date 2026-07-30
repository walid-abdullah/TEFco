"use client";
import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // 1. Scroll Animations
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (elements.length) {
      const observer = new IntersectionObserver((entries) => {
        let delay = 0;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            delay += 100;
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });
      elements.forEach(el => observer.observe(el));
    }

    // 2. Metrics Counter
    const metricNumbers = document.querySelectorAll('.metric-number');
    if (metricNumbers.length) {
      let animated = false;
      const metricsSection = document.querySelector('.metrics-bar');
      const startAnimation = () => {
        animated = true;
        metricNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-target') || '0', 10);
          let current = 0;
          const increment = Math.ceil(target / 40) || 1;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              numEl.textContent = target;
              clearInterval(timer);
            } else {
              numEl.textContent = current;
            }
          }, 40);
        });
      };
      const checkScroll = () => {
        if (animated) {
          window.removeEventListener('scroll', checkScroll);
          return;
        }
        if (metricsSection) {
          const rect = metricsSection.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            startAnimation();
          }
        }
      };
      window.addEventListener('scroll', checkScroll);
      checkScroll();
    }

    // 3. Portfolio Filters
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
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // 4. Sliders
    const containers = document.querySelectorAll('.slider-container');
    containers.forEach(container => {
      const track = container.querySelector('.slider-track');
      const prevBtn = container.querySelector('.slider-btn.prev');
      const nextBtn = container.querySelector('.slider-btn.next');
      if (!track || !prevBtn || !nextBtn) return;
      const getScrollAmount = () => {
        const item = track.querySelector('.slider-item');
        return item ? item.offsetWidth + 30 : 300;
      };
      const handlePrev = () => track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      const handleNext = () => track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      
      prevBtn.addEventListener('click', handlePrev);
      nextBtn.addEventListener('click', handleNext);
      
      // Cleanup
      return () => {
        prevBtn.removeEventListener('click', handlePrev);
        nextBtn.removeEventListener('click', handleNext);
      };
    });

    // 5. Video Modals
    const handleVideoClick = (e) => {
      const btn = e.currentTarget;
      const url = btn.getAttribute('href') || btn.getAttribute('data-video-url');
      if (url && url !== '#') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-video-modal', { detail: { url } }));
      }
    };
    
    const videoBtns = document.querySelectorAll('a.glass-youtube-btn, a[href*="youtube.com"], a[href*="youtu.be"], .play-btn, .play-btn-sm');
    videoBtns.forEach(btn => {
      btn.addEventListener('click', handleVideoClick);
    });

  }, []);

  return null; // This component doesn't render anything visually
}
