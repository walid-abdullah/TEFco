"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TalkingHeadLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="talking-head-page" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-8%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '35%', right: '-8%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto 35px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '50px', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            <i className="fa-brands fa-youtube"></i>
            <span>Long-Form Thought Leadership & Authority</span>
          </div>
          
          <h1 className="section-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' }}>
            YouTube Long-Form That <span className="combination-font">Commands Trust & Watch-Time</span>
          </h1>
          
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Documentary-style story pacing, bespoke animated graphics, and cinematic color grading designed for founders, consultants, and educational channels scaling high-ticket conversions.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/book-a-call?service=YouTube%20Long-Form" className="btn btn-primary pop-btn" style={{ padding: '14px 30px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Book YouTube Strategy Call</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Explore Work Showcase</span>
            </a>
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
            <span className="section-subtitle" style={{ fontSize: '0.78rem', marginBottom: '4px' }}>Editorial Framework</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0 }}>
              The 4 Pillars of <span className="combination-font">High-Retention Long-Form</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#EF4444', textTransform: 'uppercase', marginBottom: '6px' }}>01. STORY ARC PACING</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>J-Cut Narrative Flow</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Seamless conversational continuity without robotic hard jumps or awkward silences.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '6px' }}>02. BESPOKE GRAPHICS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Custom Diagrams & B-Roll</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Animated chart overlays, callouts, and curated 4K footage reinforcing your teaching points.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8B5CF6', textTransform: 'uppercase', marginBottom: '6px' }}>03. AUDIO ATMOSPHERE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Layered Soundscape</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Subtle background music transitions, cinematic sweeps, and crisp voice frequency EQ.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#10B981', textTransform: 'uppercase', marginBottom: '6px' }}>04. CLICK-THROUGH SUITE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Custom Thumbnails</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>3D layered YouTube thumbnails designed to beat benchmark industry CTR averages.</p>
            </div>
          </div>
        </div>

        {/* 16:9 SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Recent Work</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>
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
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', fontSize: '0.74rem', fontWeight: '700' }}>
                      {work.watchTime}
                    </span>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.74rem', fontWeight: '700' }}>
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
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>YouTube Production FAQ</span>
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
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>Long-Form Retainer</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Book Your 15-Minute <span className="combination-font">YouTube Strategy Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your long-form retention curve and discuss your monthly production plan.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20YouTube%20Long-Form%20Editing" 
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
              <Link href="/book-a-call?service=YouTube%20Long-Form" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
