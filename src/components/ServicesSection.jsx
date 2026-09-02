"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useExperiment } from '@/lib/experiments';

export default function ServicesSection({ subtitle, title1, title2, description }) {
  const trackRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const serviceVariant = useExperiment('service_section_copy_variant', ['control', 'growth_focus', 'trust_focus'], 'control');
  const serviceCopy = {
    control: {
      subtitle: subtitle || 'What We Do',
      title1: title1 || 'Premium Video Services',
      title2: title2 || 'Built For Scale',
      description: description || "We don't just cut clips — we engineer viral hooks, retain audience attention, and drive action. Click on a service to see full details.",
    },
    growth_focus: {
      subtitle: 'Built for pipeline growth',
      title1: 'Video Systems That',
      title2: 'Convert Attention',
      description: 'From discovery to demo to conversion, we build short-form and product videos that turn eyeballs into qualified pipeline.',
    },
    trust_focus: {
      subtitle: 'Proven production partner',
      title1: 'Creative Execution That',
      title2: 'Feels Premium',
      description: 'Our team handles strategy, editing, and iteration so your brand stays consistent, credible, and ready to scale.',
    },
  }[serviceVariant];

  const fixedServices = [
    {
      _id: 'service-reels',
      title: 'Reels & Shorts',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
      description: 'Fast-paced, hook-heavy short-form videos with custom animated captions, sound effects, and kinetic motion graphics.',
      features: [
        'Animated Captions & B-Roll',
        'Sound Effects & Trending Audio',
        'High-Retention Pacing',
        'Custom Kinetic Typography'
      ],
      fullDetails: 'Our short-form video editing is engineered specifically for Meta (Instagram Reels, Facebook), TikTok, and YouTube Shorts. We understand that the first 3 seconds dictate the success of the entire video. We employ aggressive pattern interrupts, professional sound design, and custom motion graphics to hold attention. From finding the perfect b-roll to matching pacing with trending audio, we turn raw footage into viral assets that maximize watch time and engagement.'
    },
    {
      _id: 'service-podcasts',
      title: 'Podcasts',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
      description: 'Full-length podcast editing including multi-cam switching, audio sweetening, color grading, and timestamp creation.',
      features: [
        'Multi-Camera Switching',
        'Audio Cleaning & Mastering',
        'Color Grading',
        'Social Media Clips Extraction'
      ],
      fullDetails: 'We take the heavy lifting out of podcast production. Whether you record locally or via remote platforms like Riverside, we sync multi-cam angles, clean up background noise, remove stutters and dead air, and color-grade your footage to look like a premium studio production. Plus, we pull out the most viral moments from each episode and turn them into ready-to-post short-form clips to fuel your marketing funnel.'
    },
    {
      _id: 'service-talking-head',
      title: 'Talking Head & YouTube',
      image: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=600&q=80',
      description: 'Polished YouTube video editing, narrative pacing, color correction, and eye-catching custom thumbnail design.',
      features: [
        'Dynamic Pacing & Cuts',
        'High CTR Thumbnails',
        'Advanced Color Grading',
        'Engaging Visual Overlays'
      ],
      fullDetails: 'Elevate your personal brand or educational channel with our premium Talking Head editing. We transform static speaking videos into highly engaging visual experiences. We apply "documentary-style" zoom ins/outs, integrate relevant B-roll, utilize sound design to emphasize key points, and create custom thumbnails designed to maximize your Click-Through Rate (CTR) against the YouTube algorithm.'
    },
    {
      _id: 'service-ugc',
      title: 'UGC Ads & E-Commerce',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      description: 'High-converting User-Generated Content ads tailored for Meta, TikTok, and YouTube Shorts.',
      features: [
        'Direct-Response Hooks',
        'Split-Test Variations',
        'Native Platform Formatting',
        'Fast Turnaround Times'
      ],
      fullDetails: 'Paid advertising requires a completely different approach to organic content. We edit UGC (User Generated Content) ads with direct-response marketing principles at the core. We test multiple hooks, create fast-paced problem/solution structures, and deliver variations so your media buying team can split-test efficiently. Our ads are designed to stop the scroll, build trust instantly, and drive viewers straight to checkout.'
    },
    {
      _id: 'service-saas',
      title: 'SaaS Motion Graphics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      description: 'Clean product walkthroughs, animated UI demos, 2D vector explainers, and software launch videos.',
      features: [
        'Smooth UI Cursor Movement',
        'App Mockup Animations',
        'Vector Explainer Videos',
        'Professional Voiceovers'
      ],
      fullDetails: 'Selling software requires clarity. We specialize in making complex SaaS platforms look intuitive, sleek, and highly desirable. We use motion graphics to recreate UI elements, animate smooth cursor movements, and guide the user through your product\'s value proposition without relying on boring screen recordings. Perfect for Product Hunt launches, landing page hero videos, and paid ad campaigns.'
    }
  ];

  const handleNext = () => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.querySelector('.service-card')?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.querySelector('.service-card')?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: -(itemWidth + 20), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <>
      <section className="services section-target" id="services" style={{ position: "relative" }}>
        <div className="bg-glow-orb glow-blue" style={{ bottom: "10%", right: "-10%" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header text-center reveal-on-scroll" style={{ marginBottom: "24px" }}>
            <span className="section-subtitle">{serviceCopy.subtitle}</span>
            <h2 className="section-title" style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
              {serviceCopy.title1} <span className="combination-font">{serviceCopy.title2}</span>
            </h2>
            <p className="section-description" style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1rem" }}>
              {serviceCopy.description}
            </p>
          </div>

          <div className="slider-container" style={{ position: 'relative' }}>
            <button className="slider-btn prev" aria-label="Previous" onClick={handlePrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slider-btn next" aria-label="Next" onClick={handleNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="slider-track" ref={trackRef} style={{ paddingBottom: "20px", alignItems: "stretch", display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', gap: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {fixedServices.map((service, index) => (
                <div 
                  key={service._id} 
                  className="service-card glow-border-card glass-card slider-item reveal-on-scroll" 
                  style={{ 
                    scrollSnapAlign: 'center', 
                    flex: '0 0 calc(33.333% - 15px)', 
                    minWidth: '300px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    padding: '0'
                  }}
                >
                  <div className="service-img-wrapper" style={{ height: '190px', position: 'relative', overflow: 'hidden' }}>
                    <img loading="lazy" src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(7, 13, 24, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', color: '#38BDF8', padding: '3px 10px', borderRadius: '10px', fontSize: '0.72rem', fontWeight: '700', border: '1px solid rgba(56, 189, 248, 0.3)', letterSpacing: '0.5px' }}>
                      0{index + 1}
                    </div>
                  </div>
                  <div className="service-content" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '16px', flex: 1, lineHeight: '1.5' }}>{service.description}</p>
                    <ul className="service-features" style={{ listStyle: 'none', padding: 0, marginBottom: '16px' }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '6px', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-check" style={{ color: 'var(--primary)' }}></i> {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setSelectedService(service)} 
                      className="btn btn-outline pop-btn" 
                      style={{ marginTop: 'auto', width: '100%', justifyContent: 'center', cursor: 'pointer', gap: '8px', padding: '10px 16px', fontSize: '0.88rem', borderRadius: '10px' }}
                    >
                      <span>View Details</span> <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN APPLE-STYLE MODAL WITH UNIFORM BUTTONS */}
      {selectedService && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedService(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div 
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              borderRadius: '18px',
              padding: '0',
              border: '1px solid var(--glass-border)',
              background: 'var(--card-bg)',
              animation: 'slideUp 0.3s ease'
            }}
          >
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '12px', right: '12px',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                width: '36px', height: '36px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '1.1rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div style={{ width: '100%', height: '220px', position: 'relative' }}>
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80px', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' }}></div>
            </div>
            
            <div style={{ padding: '24px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '12px', fontWeight: '800' }}>
                {selectedService.title}
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                {selectedService.fullDetails}
              </p>
              
              <h4 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: '700' }}>What's Included:</h4>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                {selectedService.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.85rem' }}>
                    <i className="fa-solid fa-check" style={{ color: '#10B981' }}></i> {feature}
                  </li>
                ))}
              </ul>
              
              {/* UNIFORM CLEAN BUTTONS (NO WEIRD CIRCLING) */}
              <div className="modal-actions-row">
                <Link 
                  href="/book-a-call" 
                  onClick={() => setSelectedService(null)} 
                  className="btn btn-primary" 
                  style={{ padding: '12px 24px', flex: 1, textAlign: 'center', justifyContent: 'center', borderRadius: '10px', fontSize: '0.92rem' }}
                >
                  Book This Service
                </Link>
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="btn btn-outline" 
                  style={{ padding: '12px 24px', borderRadius: '10px', fontSize: '0.92rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .slider-track::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </>
  );
}
