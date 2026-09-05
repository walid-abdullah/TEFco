"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Entrance Stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom CSS variables for glowing spotlight follower
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const services = [
    {
      id: 'reels',
      slug: 'reels-shorts',
      num: '01',
      tag: '9:16 VIRAL RETENTION',
      title: 'Shorts & Reels Viral Engineering',
      desc: '3-second pattern interrupts, kinetic word-by-word typography, and pacing engineered to capture organic feed algorithms.',
      chips: ['3-Sec Hook Psychology', 'Kinetic Typography', '48-Hour SLA Dispatch'],
      visualType: 'reels'
    },
    {
      id: 'podcasts',
      slug: 'podcasts',
      num: '02',
      tag: '1-TO-30 CONTENT ENGINE',
      title: 'Multi-Cam Podcasts & Highlights',
      desc: 'Sub-frame multi-camera switching, studio audio de-noising (-14 LUFS), and automatic extraction of 10–20 viral micro clips per episode.',
      chips: ['Speaker Auto-Tracking', 'iZotope RX Mastering', '10-20 Viral Micro Clips'],
      visualType: 'podcasts'
    },
    {
      id: 'talking-head',
      slug: 'talking-head',
      num: '03',
      tag: 'LONG-FORM AUTHORITY',
      title: 'YouTube Thought Leadership',
      desc: 'Documentary narrative pacing, bespoke animated vector diagrams, and high-CTR custom 3D thumbnails built for high-ticket brand trust.',
      chips: ['J-Cut Story Pacing', 'Custom 3D Thumbnails', 'Full SEO Chapters'],
      visualType: 'youtube'
    },
    {
      id: 'ugc-ads',
      slug: 'ugc-ads',
      num: '04',
      tag: 'DIRECT RESPONSE ROAS',
      title: 'High-Converting Performance Ads',
      desc: 'Direct-response video creatives with 5x split-test hook variations for rapid media buying scalability on Meta & TikTok.',
      chips: ['5x Hook Split-Testing', 'Dynamic Pricing Popups', 'Multi-Aspect Formats'],
      visualType: 'ads'
    },
    {
      id: 'saas-motion',
      slug: 'saas-motion',
      num: '05',
      tag: 'APPLE-GRADE MOTION',
      title: '3D SaaS & Product Demos',
      desc: 'Pixel-perfect vector UI reconstruction, 60FPS dynamic bezier cursor kinetics, and high-converting Product Hunt launch films.',
      chips: ['Vector UI Rebuild', '60FPS Bezier Kinetics', 'Source .AEP Deliverables'],
      visualType: 'saas'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="services section-padding" 
      id="services" 
      style={{ position: 'relative', background: '#05070B', padding: '120px 0', overflow: 'hidden' }}
    >
      
      {/* Background Subtle Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.035) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '840px', margin: '0 auto 70px' }}>
          <h2 
            className="section-title" 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', 
              letterSpacing: '-0.03em', 
              marginBottom: '14px', 
              color: '#FFFFFF', 
              fontWeight: '800',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Bespoke Post-Production <span className="serif-accent" style={{ color: '#FFFFFF', fontWeight: '400' }}>Infrastructure</span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', color: '#94A3B8', lineHeight: '1.6' }}>
            We do not use cookie-cutter templates. Every video discipline is engineered with platform-native algorithms and conversion psychology.
          </p>
        </div>

        {/* 
          ========================================================================
          HIGH-END GSAP-POWERED BENTO SERVICES GRID
          ======================================================================== 
        */}
        <div 
          className="services-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {services.map((srv, idx) => {
            // Bento Span Logic: Row 1 = 3 cards (span 2 each), Row 2 = 2 cards (span 3 each)
            const colSpan = idx < 3 ? 'span 2' : 'span 3';

            return (
              <div
                key={srv.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                className="gsap-service-card"
                style={{
                  gridColumn: colSpan,
                  position: 'relative',
                  background: '#070A12',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
              >
                {/* Dynamic Spotlight Glow Follower */}
                <div 
                  className="spotlight-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.15), transparent 80%)',
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    zIndex: 0
                  }}
                />

                {/* Top Section: Visual Artboard Header */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  
                  {/* Visual Header Box */}
                  <div 
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '140px',
                      background: 'rgba(15, 23, 42, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      marginBottom: '20px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Ambient Visual Glow */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '70%',
                        background: idx === 0 
                          ? 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)'
                          : idx === 1 
                          ? 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 70%)'
                          : idx === 2 
                          ? 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, transparent 70%)'
                          : idx === 3 
                          ? 'radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                        filter: 'blur(25px)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Visual 1: 9:16 Phone Mockup (Reels) */}
                    {srv.visualType === 'reels' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          width: '42px',
                          height: '72px',
                          border: '1.5px solid rgba(255,255,255,0.35)',
                          borderRadius: '8px',
                          background: 'linear-gradient(180deg, rgba(236,72,153,0.3) 0%, rgba(99,102,241,0.2) 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
                        }}>
                          <i className="fa-brands fa-tiktok" style={{ color: '#FFFFFF', fontSize: '0.85rem' }}></i>
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EC4899' }}></span>
                            <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#FFFFFF', fontWeight: '700' }}>3-SEC HOOK LOCK</span>
                          </div>
                          <span className="mono-spec" style={{ fontSize: '0.58rem', color: '#94A3B8' }}>+84% RETENTION</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Multi-Cam A/B Switcher (Podcasts) */}
                    {srv.visualType === 'podcasts' && (
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          width: '68px',
                          height: '46px',
                          border: '1px solid rgba(56, 189, 248, 0.5)',
                          background: 'rgba(56, 189, 248, 0.15)',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'
                        }}>
                          <span style={{ fontSize: '0.55rem', color: '#38BDF8', fontWeight: '700' }}>CAM A (Host)</span>
                          <span style={{ fontSize: '0.5rem', color: '#22C55E' }}>LIVE</span>
                        </div>
                        <div style={{
                          width: '68px',
                          height: '46px',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'
                        }}>
                          <span style={{ fontSize: '0.55rem', color: '#94A3B8', fontWeight: '700' }}>CAM B (Guest)</span>
                          <span style={{ fontSize: '0.5rem', color: '#64748B' }}>SYNCED</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: 16:9 4K Cinema Player (YouTube) */}
                    {srv.visualType === 'youtube' && (
                      <div style={{
                        width: '120px',
                        height: '68px',
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(15, 23, 42, 0.8) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                      }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="fa-solid fa-play" style={{ color: '#FFFFFF', fontSize: '0.65rem' }}></i>
                        </div>
                        <span className="mono-spec" style={{ fontSize: '0.6rem', color: '#FFFFFF', fontWeight: '700' }}>4K PRORES</span>
                      </div>
                    )}

                    {/* Visual 4: 5x Hook Matrix (Ads) */}
                    {srv.visualType === 'ads' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {['H1', 'H2', 'H3', 'H4', 'H5'].map((h, i) => (
                            <div key={i} style={{
                              width: '26px',
                              height: '38px',
                              background: i === 0 ? 'rgba(34, 197, 94, 0.25)' : 'rgba(255,255,255,0.06)',
                              border: i === 0 ? '1px solid #22C55E' : '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '4px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <span style={{ fontSize: '0.55rem', color: i === 0 ? '#22C55E' : '#94A3B8', fontWeight: '700' }}>{h}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#22C55E', fontWeight: '700', display: 'block' }}>3.8x ROAS</span>
                          <span style={{ fontSize: '0.55rem', color: '#64748B' }}>Split-Tested</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 5: 3D Vector Isometric Mesh (SaaS) */}
                    {srv.visualType === 'saas' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 1 }}>
                        <div style={{
                          width: '54px',
                          height: '54px',
                          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(56, 189, 248, 0.2) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          borderRadius: '12px',
                          transform: 'rotate(-8deg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
                        }}>
                          <i className="fa-solid fa-cube" style={{ color: '#FFFFFF', fontSize: '1.2rem' }}></i>
                        </div>
                        <div>
                          <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#C084FC', fontWeight: '700', display: 'block' }}>60FPS BEZIER</span>
                          <span style={{ fontSize: '0.6rem', color: '#CBD5E1' }}>Dynamic Cursor Kinetics</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Metadata Tag Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="mono-spec" style={{ 
                      fontSize: '0.64rem', 
                      color: '#FFFFFF', 
                      background: 'rgba(255,255,255,0.06)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '3px 8px', 
                      borderRadius: '4px',
                      fontWeight: '700'
                    }}>
                      {srv.tag}
                    </span>
                    <span className="mono-spec" style={{ color: '#64748B', fontSize: '0.68rem', fontWeight: '600' }}>
                      SYS_MOD_{srv.num}
                    </span>
                  </div>

                  {/* Title in Syne */}
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '800', 
                    margin: '0 0 8px', 
                    letterSpacing: '-0.025em', 
                    color: '#FFFFFF', 
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {srv.title}
                  </h3>

                  {/* Clean 2-Line Description */}
                  <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: '1.5', margin: '0 0 16px' }}>
                    {srv.desc}
                  </p>

                  {/* Capability Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {srv.chips.map((chip, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          fontSize: '0.68rem', 
                          color: '#CBD5E1', 
                          background: 'rgba(255,255,255,0.04)', 
                          border: '1px solid rgba(255,255,255,0.08)', 
                          padding: '3px 8px', 
                          borderRadius: '6px' 
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="service-link-btn"
                    style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: '700', 
                      color: '#FFFFFF',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Explore Discipline</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem', color: '#38BDF8', transition: 'transform 0.2s ease' }}></i>
                  </Link>

                  <Link
                    href={`/book-a-call?service=${encodeURIComponent(srv.title)}`}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      color: '#94A3B8',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    Book SLA
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Global CSS for Spotlight and Hover Effects */}
      <style jsx>{`
        .gsap-service-card:hover {
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-4px);
        }
        .gsap-service-card:hover .spotlight-glow {
          opacity: 1 !important;
        }
        .gsap-service-card:hover .service-link-btn i {
          transform: translateX(4px);
        }

        @media (max-width: 960px) {
          .services-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .services-bento-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
