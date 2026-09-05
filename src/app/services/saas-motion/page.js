"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SaasMotionServiceLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const introVideo = {
    title: 'SaaS Product Motion & Interactive UI Animation',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'M7lc1UVf-VE'
  };

  const saasWorks = [
    {
      id: 'saas-work-1',
      title: 'AI Analytics Platform — Vector UI & Cursor Kinetics',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      fps: '60 FPS Bezier',
      duration: '45 Secs',
      launchType: 'Product Hunt #1'
    },
    {
      id: 'saas-work-2',
      title: 'Fintech Mobile & Web App — 3D Isometric Mockup',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      fps: '4K Render',
      duration: '60 Secs',
      launchType: 'Series A Demo'
    },
    {
      id: 'saas-work-3',
      title: 'Cloud DevOps Dashboard — Dynamic Walkthrough Demo',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      fps: '60 FPS Vector',
      duration: '75 Secs',
      launchType: 'Landing Page Hero'
    },
    {
      id: 'saas-work-4',
      title: 'Workflow Automation SaaS — 2D Kinetic Vector Explainer',
      thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      fps: 'Cinema 4D + AE',
      duration: '90 Secs',
      launchType: 'YC Demo Day'
    }
  ];

  const faqs = [
    {
      q: 'Do I need to send screen recordings or Figma design files?',
      a: 'Figma files (.fig) are ideal so we can extract exact SVG vector layers, typography, and color tokens. If you do not have Figma, raw 4K screen recordings work perfectly—we rebuild and polish the UI in After Effects.'
    },
    {
      q: 'How do you create the silky-smooth Apple-grade cursor movement?',
      a: 'We use custom mathematical Bezier ease-curves and kinetic spring physics in Adobe After Effects to simulate natural, fluid eye-tracking cursor navigation without jerky mouse clicks.'
    },
    {
      q: 'What is the typical turnaround time for a 60-second SaaS demo?',
      a: 'Our turnaround is 4 to 6 business days for the full storyboard, vector animation, sound design, and 4K 60FPS master render.'
    }
  ];

  return (
    <div className="saas-motion-landing-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '960px', margin: '0 auto 40px' }}>
          <h1 className="section-title" style={{ fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            SaaS Motion &amp; <span className="combination-font">Interactive UI Demos</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 28px', fontWeight: '400' }}>
            Explain Complex Software in Under 60 Seconds
          </p>

          {/* FEATURED HERO SERVICE INTRO VIDEO */}
          <div 
            className="glass-card pop-hover"
            style={{
              maxWidth: '920px',
              margin: '0 auto 26px',
              borderRadius: '16px',
              overflow: 'hidden',
              padding: 0,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#080C14',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.08)',
              position: 'relative'
            }}
          >
            {/* Top Spec Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#38BDF8' }}>
                SAAS_UI_MOTION_BREAKDOWN.MOV
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>60FPS BEZIER</span>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>VECTOR UI</span>
              </div>
            </div>

            <div 
              style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setSelectedVideo(introVideo)}
            >
              <img src={introVideo.thumbnail} alt={introVideo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }}></div>

              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '68px', height: '46px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                color: '#FFFFFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem',
                boxShadow: '0 12px 35px rgba(0,0,0,0.6)'
              }}>
                <i className="fa-solid fa-play" style={{ marginLeft: '2px' }}></i>
              </div>
            </div>
          </div>

          {/* Action Buttons Below Video */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '50px' }}>
            <Link href="/book-a-call?service=3D%20SaaS%20%26%20Product%20Demos" className="btn btn-primary pop-btn" style={{ padding: '12px 26px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Book SaaS Motion Strategy</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Watch UI Demo Vault</span>
            </a>
          </div>
        </div>

        {/* MOTION ARCHITECTURE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '16px',
          margin: '0 auto 55px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#080C14',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>MOTION DESIGN SUITE</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              The 4 Stages of <span className="combination-font">SaaS Demo Engineering</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '6px', fontWeight: '800' }}>01. FIGMA INGEST</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Vector Layer Splitting</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Exact UI components recreated into infinite-resolution vector assets in After Effects.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '6px', fontWeight: '800' }}>02. CURSOR PHYSICS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Bezier Fluid Tracking</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Natural simulated eye tracking with elastic click responses and seamless interface scrolls.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#EC4899', marginBottom: '6px', fontWeight: '800' }}>03. 3D ISOMETRIC</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Device Glass Mockups</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Floating iPad, MacBook Pro, and mobile clay mockups with realistic camera depth-of-field.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#10B981', marginBottom: '6px', fontWeight: '800' }}>04. SFX &amp; VO</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>UI Sound Effects</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Tactile click clicks, notification swooshes, and broadcast voiceover mastering.</p>
            </div>
          </div>
        </div>

        {/* SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>SAAS SHOWCASE VAULT</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Recent SaaS <span className="combination-font">Motion Masters</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {saasWorks.map(work => (
              <div
                key={work.id}
                className="glass-card pop-hover"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  padding: 0,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#080C14'
                }}
              >
                <div 
                  style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => setSelectedVideo(work)}
                >
                  <img src={work.thumbnail} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '56px', height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>

                <div style={{ padding: '14px 16px' }}>
                  <h4 style={{ margin: '0 0 10px', fontSize: '0.98rem', fontWeight: '700', lineHeight: '1.4', color: '#FFFFFF' }}>{work.title}</h4>
                  
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.fps}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.duration}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.launchType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '850px', margin: '0 auto 60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>SAAS PRODUCTION FAQ</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Frequently Asked <span className="combination-font">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#080C14'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                  <h4 style={{ margin: 0, fontSize: '0.94rem', fontWeight: '700', color: '#FFFFFF' }}>{faq.q}</h4>
                  <i className={`fa-solid ${activeFaq === idx ? 'fa-minus' : 'fa-plus'}`} style={{ color: '#38BDF8', fontSize: '0.8rem' }}></i>
                </div>
                {activeFaq === idx && (
                  <p style={{ margin: '10px 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CALENDAR */}
        <div className="glass-card" style={{
          padding: '30px 20px',
          borderRadius: '16px',
          maxWidth: '1100px',
          margin: '0 auto',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          background: '#080C14',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
        }}>
          <span className="mono-spec" style={{ display: 'inline-block', fontSize: '0.74rem', color: '#38BDF8', marginBottom: '4px' }}>SAAS LAUNCH SLOTS</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Book Your 15-Minute <span className="combination-font">SaaS Motion Audit</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to review your product UI, timeline, and demo launch deliverables.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%203D%20SaaS%20Motion%20Demos" 
            style={{ minWidth: '320px', height: '620px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
          ></div>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 9999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            className="glass-card"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '920px',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              background: '#05070B',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>
                SAAS_DEMO // {selectedVideo.title}
              </span>
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: '30px', height: '30px',
                  borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>{selectedVideo.title}</h3>
              <Link href="/book-a-call?service=3D%20SaaS%20%26%20Product%20Demos" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}>
                Book This SaaS Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
