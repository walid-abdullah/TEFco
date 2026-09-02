"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReelsShortsLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Hero Intro Explainer Video for Reels & Shorts
  const introVideo = {
    title: 'Short-Form Retention & Viral Engineering — Overview',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'L_LUpnjgPso',
    duration: '1:30 Min Explainer'
  };

  const reelsWorks = [
    {
      id: 'reel-1',
      title: 'Viral 3-Second Hook Retention Reel',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'L_LUpnjgPso',
      views: '1.4M Views',
      retentionRate: '88% Completion',
      style: 'Hormozi Kinetic'
    },
    {
      id: 'reel-2',
      title: 'Alex Hormozi Style Kinetic Captions Short',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'M7lc1UVf-VE',
      views: '840K Views',
      retentionRate: '92% Completion',
      style: 'Dynamic Emojis'
    },
    {
      id: 'reel-3',
      title: 'High-Energy Sound Design Instagram Reel',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'L_LUpnjgPso',
      views: '2.1M Views',
      retentionRate: '94% Completion',
      style: 'Fast Sound FX'
    },
    {
      id: 'reel-4',
      title: 'Founder Wisdom Micro-Podcast Viral Clip',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'M7lc1UVf-VE',
      views: '970K Views',
      retentionRate: '89% Completion',
      style: 'B-Roll Narrative'
    }
  ];

  const faqs = [
    {
      q: 'How do you engineer the 3-second hook for virality?',
      a: 'We eliminate introductory fluff. Within the first 0-3 seconds, we inject a visual pattern interrupt (rapid zoom or B-roll cut), a high-contrast kinetic headline, and a clean sound riser to instantly trigger algorithmic watch time.'
    },
    {
      q: 'What is your turnaround time for batch reel deliveries?',
      a: 'We deliver your initial batch of vertical edits in 24 to 48 hours via Frame.io. Revisions requested with timecode comments are turned around same-day.'
    },
    {
      q: 'Are these optimized for Instagram, TikTok, and YouTube Shorts?',
      a: 'Yes. Every reel is rendered in 1080x1920 (9:16) with strict adherence to platform safe zones—ensuring your captions and hooks are never hidden behind TikTok buttons or Instagram UI.'
    },
    {
      q: 'Do you provide animated captions and sound effects?',
      a: 'Every single reel includes custom motion typography (Alex Hormozi / Ali Abdaal style), color-coded keywords, custom emojis, and balanced SFX (whooshes, cash registers, risers, pops).'
    }
  ];

  return (
    <div className="reels-landing-page" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', position: 'relative' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-8%' }}></div>
      <div className="bg-glow-purple" style={{ top: '35%', right: '-8%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO SECTION */}
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto 30px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '50px', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', color: '#EC4899', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            <i className="fa-brands fa-tiktok"></i>
            <span>Short-Form Retention Engineering</span>
          </div>
          
          <h1 className="section-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' }}>
            Reels & Shorts Engineered to <span className="combination-font">Stop the Scroll</span>
          </h1>
          
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            We transform raw vertical footage into high-energy, psychology-backed Instagram Reels, TikToks, and YouTube Shorts that hook attention in the first 3 seconds.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '35px' }}>
            <Link href="/book-a-call?service=Shorts%20%2F%20Reels%20%2F%20TikTok" className="btn btn-primary pop-btn" style={{ padding: '14px 30px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Book 15-Min Reel Strategy</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Watch Viral Showcase</span>
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
                  <div style={{ color: '#EC4899', fontSize: '0.76rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    SERVICE EXPLAINER & BREAKDOWN
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', margin: '2px 0 0' }}>
                    How We Engineer Viral 9:16 Retention
                  </h3>
                </div>

                <span style={{ padding: '5px 12px', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: '0.78rem', fontWeight: '700' }}>
                  <i className="fa-solid fa-circle-play" style={{ marginRight: '6px', color: '#EC4899' }}></i>
                  {introVideo.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RETENTION ARCHITECTURE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '20px',
          margin: '0 auto 55px',
          border: '1px solid var(--glass-border)',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem', marginBottom: '4px' }}>Algorithmic Science</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0 }}>
              The Anatomy of a <span className="combination-font">Viral Retention Reel</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#EC4899', textTransform: 'uppercase', marginBottom: '6px' }}>01. 3-SEC HOOK</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Pattern Interrupt</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Immediate audio-visual shock with sound risers and kinetic headline titles.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '6px' }}>02. KINETIC TYPE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Word-by-Word Subtitles</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Color-coded keyword highlights and animated custom emojis matching voice cadence.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8B5CF6', textTransform: 'uppercase', marginBottom: '6px' }}>03. PACING CUTS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Micro B-Roll Layers</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Dynamic camera zooms, pop-up graphics, and stock overlays every 2.5 seconds.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#10B981', textTransform: 'uppercase', marginBottom: '6px' }}>04. SEAMLESS LOOP</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Infinite Loop Outro</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Ending sentence connects smoothly back to the opening hook for double watch time.</p>
            </div>
          </div>
        </div>

        {/* 9:16 VERTICAL SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Live Portfolio</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>
              Recent Viral <span className="combination-font">Shorts & Reels</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            maxWidth: '1080px',
            margin: '0 auto'
          }}>
            {reelsWorks.map(reel => (
              <div
                key={reel.id}
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
                  style={{ position: 'relative', aspectRatio: '9/16', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => setSelectedVideo(reel)}
                >
                  <img src={reel.thumbnail} alt={reel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '52px', height: '36px',
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

                <div style={{ padding: '14px 16px' }}>
                  <h4 style={{ margin: '0 0 8px', fontSize: '0.94rem', fontWeight: '700', lineHeight: '1.3' }}>{reel.title}</h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899', fontSize: '0.72rem', fontWeight: '700' }}>
                      {reel.views}
                    </span>
                    <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.72rem', fontWeight: '700' }}>
                      {reel.retentionRate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div style={{ maxWidth: '850px', margin: '0 auto 60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Reels Production FAQ</span>
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

        {/* EMBEDDED STRATEGY CALENDAR */}
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
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>Short-Form Retainer</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Book Your 15-Minute <span className="combination-font">Reels Strategy Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your vertical retention metrics and lock in your monthly editing retainer.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20Shorts%20and%20Reels%20Retainer" 
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
              maxWidth: '420px',
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

            <div style={{ position: 'relative', width: '100%', aspectRatio: '9/16' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            <div style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>{selectedVideo.title}</h3>
              <Link href="/book-a-call?service=Shorts%20%2F%20Reels%20%2F%20TikTok" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
