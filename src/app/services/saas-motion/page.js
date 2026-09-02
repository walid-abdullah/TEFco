"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SaasMotionLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Hero Intro Explainer Video for 3D SaaS & Product Demos
  const introVideo = {
    title: 'Apple-Grade SaaS UI Motion & Launch Demos — Overview',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'M7lc1UVf-VE',
    duration: '1:40 Min Explainer'
  };

  const saasWorks = [
    {
      id: 'saas-1',
      title: 'SaaS Platform 3D Motion Product Demo',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      conversion: '#1 Product of the Day',
      style: '3D Vector Isometric UI',
      length: '60 Seconds'
    },
    {
      id: 'saas-2',
      title: 'Product Hunt Launch Video Animation',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      conversion: '2,400+ Upvotes',
      style: 'Kinetic UI Walkthrough',
      length: '90 Seconds'
    },
    {
      id: 'saas-3',
      title: 'Silky Smooth UI Dynamic Cursor Demo',
      thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      conversion: '34% Landing Conversion',
      style: 'Apple-Grade Cursor Pacing',
      length: '45 Seconds'
    },
    {
      id: 'saas-4',
      title: 'Enterprise Cloud Walkthrough Animation',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      conversion: '$45K ACV Closes',
      style: 'Dark-Mode 3D Mockups',
      length: '120 Seconds'
    }
  ];

  const faqs = [
    {
      q: 'Do we need to provide screen recordings or Figma files?',
      a: 'You can provide raw Loom screen recordings, Figma links, or screenshot assets. Our team rebuilds your software interface in vector format to ensure silky 60fps cursor movements and 4K screen sharpness.'
    },
    {
      q: 'Are source files (After Effects / Premiere) included?',
      a: 'Yes! Full Adobe After Effects (.AEP) project files and packaged assets are provided upon final handover for total peace of mind.'
    },
    {
      q: 'Can you provide professional American/British voiceover?',
      a: 'Yes. We provide studio-recorded human voiceovers (American, British, Australian accents) with full commercial broadcasting licenses included.'
    }
  ];

  return (
    <div className="saas-motion-page" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="bg-glow-orb glow-cyan" style={{ top: '5%', left: '-8%' }}></div>
      <div className="bg-glow-orb glow-blue" style={{ top: '35%', right: '-8%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto 30px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '50px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>SaaS Motion & Interactive UI Demos</span>
          </div>
          
          <h1 className="section-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' }}>
            Explain Complex Software in <span className="combination-font">Under 60 Seconds</span>
          </h1>
          
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Give your tech product the Apple-grade presentation it deserves. Silky smooth cursor animations, 3D vector isometric mockups, and high-converting Product Hunt launch videos.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '35px' }}>
            <Link href="/book-a-call?service=SaaS%20%26%20Product%20Motion%20UI" className="btn btn-primary pop-btn" style={{ padding: '14px 30px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Book SaaS Video Strategy</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>View Product Demos</span>
            </a>
          </div>

          {/* FEATURED HERO SERVICE INTRO VIDEO */}
          <div 
            className="glass-card pop-hover"
            style={{
              maxWidth: '920px',
              margin: '0 auto 50px',
              borderRadius: '20px',
              overflow: 'hidden',
              padding: 0,
              border: '1px solid var(--glass-border)',
              background: 'var(--card-bg)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div 
              style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setSelectedVideo(introVideo)}
            >
              <img src={introVideo.thumbnail} alt={introVideo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,13,24,0.85) 0%, rgba(0,0,0,0.2) 60%)' }}></div>

              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '74px', height: '50px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                color: '#FFFFFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 12px 35px rgba(0,0,0,0.45)',
                transition: 'transform 0.3s ease'
              }}>
                <i className="fa-solid fa-play" style={{ marginLeft: '3px' }}></i>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#38BDF8', fontSize: '0.76rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    SERVICE EXPLAINER & BREAKDOWN
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', margin: '2px 0 0' }}>
                    How We Animate High-Converting Software Demos
                  </h3>
                </div>

                <span style={{ padding: '5px 12px', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: '700' }}>
                  <i className="fa-solid fa-circle-play" style={{ marginRight: '6px', color: '#38BDF8' }}></i>
                  {introVideo.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* UI ARCHITECTURE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '20px',
          margin: '0 auto 55px',
          border: '1px solid var(--glass-border)',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem', marginBottom: '4px' }}>Visual Standards</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0 }}>
              The Apple-Grade <span className="combination-font">Motion Standard</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '6px' }}>01. VECTOR RECREATION</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Pixel-Perfect UI</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Reconstructed Figma vector layers rendered in infinite resolution without blurriness.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8B5CF6', textTransform: 'uppercase', marginBottom: '6px' }}>02. CURSOR KINETICS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Dynamic 60FPS Cursor</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Bezier-eased click paths that guide prospective buyers through complex feature workflows.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#EC4899', textTransform: 'uppercase', marginBottom: '6px' }}>03. 3D DEVICE MOCKUPS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Isometric Perspectives</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Custom 3D glass laptop and tablet viewports creating premium visual depth.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#10B981', textTransform: 'uppercase', marginBottom: '6px' }}>04. VOICE & SOUND</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Commercial Audio</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Studio-grade human voiceover with micro UI click sounds, chimes, and smooth backing tracks.</p>
            </div>
          </div>
        </div>

        {/* SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Recent Demos</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>
              SaaS & Product <span className="combination-font">Demo Masters</span>
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
                  borderRadius: '16px',
                  overflow: 'hidden',
                  padding: 0,
                  border: '1px solid var(--glass-border)',
                  background: 'var(--card-bg)'
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
                    width: '60px', height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)'
                  }}>
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  <h4 style={{ margin: '0 0 10px', fontSize: '1.02rem', fontWeight: '700', lineHeight: '1.4' }}>{work.title}</h4>
                  
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.74rem', fontWeight: '700' }}>
                      {work.conversion}
                    </span>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', fontSize: '0.74rem', fontWeight: '700' }}>
                      {work.style}
                    </span>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.74rem', fontWeight: '700' }}>
                      {work.length}
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
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>SaaS Video FAQ</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
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
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--card-bg)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: '700' }}>{faq.q}</h4>
                  <i className={`fa-solid ${activeFaq === idx ? 'fa-minus' : 'fa-plus'}`} style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                </div>
                {activeFaq === idx && (
                  <p style={{ margin: '10px 0 0', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', borderTop: '1px solid var(--glass-border)', paddingTop: '10px' }}>
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
          borderRadius: '20px',
          maxWidth: '1100px',
          margin: '0 auto',
          border: '1px solid var(--glass-border)',
          textAlign: 'center',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>SaaS Video Production</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Book Your 15-Minute <span className="combination-font">Product Demo Audit</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your UI motion script and schedule your launch video sprint.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20SaaS%20Product%20Demo%20Video" 
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
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
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
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              background: '#070D18',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
            }}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '12px', right: '12px',
                background: 'rgba(0, 0, 0, 0.75)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                width: '38px', height: '38px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            <div style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>{selectedVideo.title}</h3>
              <Link href="/book-a-call?service=SaaS%20%26%20Product%20Motion%20UI" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}>
                Book This SaaS Video
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
