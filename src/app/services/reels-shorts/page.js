"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReelsShortsLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const introVideo = {
    title: 'Short-Form Viral Retention Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'L_LUpnjgPso'
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
    <div className="reels-landing-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '960px', margin: '0 auto 40px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#EC4899' }}>9:16 ALGORITHMIC RETENTION LAB</span>
          </div>

          <h1 className="section-title" style={{ fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Reels &amp; Shorts <span className="combination-font">Viral Retention Editing</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 28px', fontWeight: '400' }}>
            Engineered to Stop the Scroll in 3 Seconds
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
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#EC4899' }}>
                REELS_RETENTION_FRAMEWORK.MOV
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>9:16 VERTICAL</span>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>60FPS</span>
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
            <Link href="/book-a-call?service=Shorts%20%2F%20Reels%20%2F%20TikTok" className="btn btn-primary pop-btn" style={{ padding: '12px 26px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Book 15-Min Reel Strategy</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Watch Viral Showcase</span>
            </a>
          </div>
        </div>

        {/* RETENTION ARCHITECTURE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '16px',
          margin: '0 auto 55px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#080C14',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#EC4899', display: 'block', marginBottom: '4px' }}>ALGORITHMIC SCIENCE</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              The Anatomy of a <span className="combination-font">Viral Retention Reel</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#EC4899', marginBottom: '6px', fontWeight: '800' }}>01. 3-SEC HOOK</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Pattern Interrupt</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Immediate audio-visual shock with sound risers and kinetic headline titles.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '6px', fontWeight: '800' }}>02. KINETIC TYPE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Word-by-Word Subtitles</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Color-coded keyword highlights and animated custom emojis matching voice cadence.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '6px', fontWeight: '800' }}>03. PACING CUTS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Micro B-Roll Layers</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Dynamic camera zooms, pop-up graphics, and stock overlays every 2.5 seconds.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#10B981', marginBottom: '6px', fontWeight: '800' }}>04. SEAMLESS LOOP</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Infinite Loop Outro</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Ending sentence connects smoothly back to the opening hook for double watch time.</p>
            </div>
          </div>
        </div>

        {/* 9:16 VERTICAL SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#EC4899', display: 'block', marginBottom: '4px' }}>LIVE 9:16 VAULT</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Recent Viral <span className="combination-font">Shorts &amp; Reels</span>
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
                  borderRadius: '12px',
                  overflow: 'hidden',
                  padding: 0,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#080C14'
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
                    width: '48px', height: '34px',
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

                <div style={{ padding: '12px 14px' }}>
                  <h4 style={{ margin: '0 0 8px', fontSize: '0.88rem', fontWeight: '700', lineHeight: '1.3', color: '#FFFFFF' }}>{reel.title}</h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span className="mono-spec" style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899', fontSize: '0.68rem', fontWeight: '700' }}>
                      {reel.views}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.68rem', fontWeight: '700' }}>
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
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>REELS PIPELINE FAQ</span>
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

        {/* EMBEDDED STRATEGY CALENDAR */}
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
          <span className="mono-spec" style={{ display: 'inline-block', fontSize: '0.74rem', color: '#EC4899', marginBottom: '4px' }}>SHORT-FORM RETAINER SLOTS</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Book Your 15-Minute <span className="combination-font">Reels Strategy Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your vertical retention metrics and lock in your monthly editing retainer.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20Shorts%20and%20Reels%20Retainer" 
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
              maxWidth: '420px',
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
              padding: '10px 14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#EC4899' }}>
                REEL_FEED // {selectedVideo.title}
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

            <div style={{ position: 'relative', width: '100%', aspectRatio: '9/16' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>{selectedVideo.title}</h3>
              <Link href="/book-a-call?service=Shorts%20%2F%20Reels%20%2F%20TikTok" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
