"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesSection({ subtitle, title1, title2, description }) {
  const trackRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  // The 5 requested fixed services
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
      // Scroll right by the width of one card plus gap
      const itemWidth = trackRef.current.querySelector('.service-card')?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: itemWidth + 30, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      // Scroll left by the width of one card plus gap
      const itemWidth = trackRef.current.querySelector('.service-card')?.offsetWidth || 300;
      trackRef.current.scrollBy({ left: -(itemWidth + 30), behavior: 'smooth' });
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
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
      <section className="services section-padding section-target" id="services" style={{ paddingTop: "60px", position: "relative" }}>
        <div className="bg-glow-orb glow-blue" style={{ bottom: "10%", right: "-10%" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-subtitle">{subtitle || 'What We Do'}</span>
            <h2 className="section-title" style={{ fontSize: "3rem" }}>
              {title1 || 'Premium Video Services'} <span className="combination-font">{title2 || 'Built For Scale'}</span>
            </h2>
            <p className="section-description" style={{ maxWidth: "800px", margin: "0 auto" }}>
              {description || "We don't just cut clips — we engineer viral hooks, retain audience attention, and drive action. Click on a service to see full details."}
            </p>
          </div>

          <div className="slider-container" style={{ marginTop: "40px", position: 'relative' }}>
            <button className="slider-btn prev" aria-label="Previous" onClick={handlePrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slider-btn next" aria-label="Next" onClick={handleNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="slider-track" ref={trackRef} style={{ paddingBottom: "40px", alignItems: "stretch", display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', gap: '30px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {fixedServices.map((service) => (
                <div key={service._id} className="service-card slider-item reveal-on-scroll" style={{ scrollSnapAlign: 'center', flex: '0 0 calc(33.333% - 20px)', minWidth: '320px', display: 'flex', flexDirection: 'column' }}>
                  <div className="service-img-wrapper" style={{ height: '200px' }}>
                    <img loading="lazy" src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="service-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>{service.description}</p>
                    <ul className="service-features" style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '8px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-check" style={{ color: 'var(--primary)' }}></i> {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setSelectedService(service)} 
                      className="btn btn-outline pop-btn" 
                      style={{ marginTop: 'auto', width: '100%', justifyContent: 'center', cursor: 'pointer' }}
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

      {/* MODAL */}
      {selectedService && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedService(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            style={{
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              borderRadius: '20px',
              padding: '0',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              animation: 'slideUp 0.4s ease'
            }}
          >
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '15px', right: '15px',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                width: '40px', height: '40px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '1.2rem',
                backdropFilter: 'blur(5px)'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div style={{ width: '100%', height: '300px', position: 'relative' }}>
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' }}></div>
            </div>
            
            <div style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', background: 'linear-gradient(90deg, #fff, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {selectedService.title}
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '25px' }}>
                {selectedService.fullDetails}
              </p>
              
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>What's Included:</h4>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {selectedService.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '12px 15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <i className="fa-solid fa-check" style={{ color: '#4ade80' }}></i> {feature}
                  </li>
                ))}
              </ul>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <Link href="#contact" onClick={() => setSelectedService(null)} className="btn btn-primary" style={{ padding: '12px 30px', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                  Book This Service
                </Link>
                <button onClick={() => setSelectedService(null)} className="btn btn-outline" style={{ padding: '12px 30px' }}>
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
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .slider-track::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </>
  );
}
