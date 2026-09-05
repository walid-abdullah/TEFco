"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TalkingHeadLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const introVideo = {
    title: 'YouTube Long-Form & Thought Leadership Authority',
    thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'L_LUpnjgPso'
  };

  const talkingHeadWorks = [
    {
      id: 'th-1',
      title: 'Cinematic YouTube Long-Form Authority Video',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      watchTime: '68% Avg Retention',
      style: 'Documentary Story Arc',
      length: '14 Mins'
    },
    {
      id: 'th-2',
      title: 'Educational Strategy Breakdown Film',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      watchTime: '72% Avg Retention',
      style: 'Animated B-Roll & Graphs',
      length: '18 Mins'
    },
    {
      id: 'th-3',
      title: 'High-Ticket Agency Authority Presentation',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      watchTime: '65% Avg Retention',
      style: 'Cinematic Rec.709 Color',
      length: '12 Mins'
    },
    {
      id: 'th-4',
      title: 'CEO Vision & Case Study Narrative Cut',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      watchTime: '74% Avg Retention',
      style: 'Sound Design & J-Cuts',
      length: '22 Mins'
    }
  ];

  const faqs = [
    {
      q: 'How do you keep long-form talking-head videos engaging?',
      a: 'We use dynamic J-cuts and L-cuts, custom sound design, cinematic stock footage, and animated 2D vector diagrams every 4-6 seconds to prevent viewer visual fatigue and maintain 60%+ average watch time.'
    },
    {
      q: 'Do you design custom high-CTR YouTube thumbnails?',
      a: 'Yes. Every long-form video package includes high-CTR custom YouTube thumbnail concepts (rendered in Photoshop with 3D depth and facial contrast) designed to maximize organic click-through rates.'
    },
    {
      q: 'What is the turnaround time for a 10-20 minute video?',
      a: 'Our turnaround is 48 hours for the initial rough-to-fine 4K cut. You can leave frame-by-frame timestamp comments directly on Frame.io for swift revisions.'
    },
    {
      q: 'Do you optimize YouTube SEO and metadata?',
      a: 'Yes. We deliver timecoded chapter cards, SEO-optimized descriptions, tag recommendations, and closed captions (.SRT files) for instant upload.'
    }
  ];

  return (
    <div className="talking-head-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '960px', margin: '0 auto 40px' }}>
          <h1 className="section-title" style={{ fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            YouTube Long-Form &amp; <span className="combination-font">Talking Head Authority</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 28px', fontWeight: '400' }}>
            Scale Watch-Time, Subscribers, and High-Ticket Trust
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
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#EF4444' }}>
                YOUTUBE_AUTHORITY_BREAKDOWN.MOV
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>4K 60FPS</span>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>DOCUMENTARY J-CUTS</span>
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
            <Link href="/book-a-call?service=YouTube%20Long-Form" className="btn btn-primary pop-btn" style={{ padding: '12px 26px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Book YouTube Strategy Call</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Explore Work Showcase</span>
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
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#EF4444', display: 'block', marginBottom: '4px' }}>EDITORIAL FRAMEWORK</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              The 4 Pillars of <span className="combination-font">High-Retention Long-Form</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#EF4444', marginBottom: '6px', fontWeight: '800' }}>01. STORY ARC PACING</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>J-Cut Narrative Flow</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Seamless conversational continuity without robotic hard jumps or awkward silences.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '6px', fontWeight: '800' }}>02. BESPOKE GRAPHICS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Custom Diagrams &amp; B-Roll</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Animated chart overlays, callouts, and curated 4K footage reinforcing your teaching points.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '6px', fontWeight: '800' }}>03. AUDIO ATMOSPHERE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Layered Soundscape</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Subtle background music transitions, cinematic sweeps, and crisp voice frequency EQ.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#10B981', marginBottom: '6px', fontWeight: '800' }}>04. CLICK-THROUGH SUITE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Custom Thumbnails</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>3D layered YouTube thumbnails designed to beat benchmark industry CTR averages.</p>
            </div>
          </div>
        </div>

        {/* 16:9 SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#EF4444', display: 'block', marginBottom: '4px' }}>RECENT MASTERS</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Long-Form <span className="combination-font">Authority Masters</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {talkingHeadWorks.map(work => (
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
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.watchTime}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.style}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.68rem', fontWeight: '700' }}>
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
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>YOUTUBE EDITING FAQ</span>
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
          <span className="mono-spec" style={{ display: 'inline-block', fontSize: '0.74rem', color: '#EF4444', marginBottom: '4px' }}>LONG-FORM RETAINER SLOTS</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Book Your 15-Minute <span className="combination-font">YouTube Strategy Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your long-form retention curve and discuss your monthly production plan.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20YouTube%20Long-Form%20Editing" 
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
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#EF4444' }}>
                YOUTUBE_MASTER // {selectedVideo.title}
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
              <Link href="/book-a-call?service=YouTube%20Long-Form" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
