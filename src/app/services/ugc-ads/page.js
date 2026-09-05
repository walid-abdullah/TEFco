"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function UgcAdsLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const introVideo = {
    title: 'Performance Video Ads & UGC Creative Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'L_LUpnjgPso'
  };

  const adWorks = [
    {
      id: 'ad-1',
      title: 'High-Converting Direct Response Paid Ad',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      roas: '4.8x Meta ROAS',
      format: '1:1 & 9:16 Feed',
      hooks: '3 Hook Variations'
    },
    {
      id: 'ad-2',
      title: 'TikTok E-Commerce Product Commercial Ad',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      roas: '3.9x TikTok ROAS',
      format: '9:16 Vertical',
      hooks: '5 Hook Variations'
    },
    {
      id: 'ad-3',
      title: 'High-Ticket Lead Generation Video Ad',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      roas: '$12 CPL Reduced',
      format: '16:9 YouTube In-Stream',
      hooks: '2 Hook Variations'
    },
    {
      id: 'ad-4',
      title: 'Split-Test Hook Variations Direct Response Cut',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      roas: '5.2x Blended ROAS',
      format: 'Omnichannel Bundle',
      hooks: '4 Hook Variations'
    }
  ];

  const faqs = [
    {
      q: 'Do you provide multiple hook variations for A/B testing?',
      a: 'Yes. Every ad concept is delivered with 3 to 5 distinct 0-3 second opening hooks (Problem/Solution, Curiosity, Shock-Value, Social Proof) allowing your media buyers to rapidly scale top performers.'
    },
    {
      q: 'Which ad platforms are your creatives optimized for?',
      a: 'We deliver pixel-perfect assets formatted for Meta Ads (Instagram Feed & Reels), TikTok Ads, YouTube In-Stream / Shorts, and LinkedIn Sponsored Content.'
    },
    {
      q: 'How fast can our media buyers get the finished creatives?',
      a: 'Standard delivery is 48 hours for full creative bundles so your ad campaigns can launch without pipeline bottlenecks.'
    }
  ];

  return (
    <div className="ugc-ads-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '960px', margin: '0 auto 40px' }}>
          <h1 className="section-title" style={{ fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            High-Converting UGC &amp; <span className="combination-font">Paid Video Ads</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 28px', fontWeight: '400' }}>
            Paid Social Video Ads Built for Maximum ROAS on Meta &amp; TikTok
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
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#10B981' }}>
                DIRECT_RESPONSE_FRAMEWORK.MOV
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>5X HOOK TESTING</span>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>META &amp; TIKTOK</span>
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
            <Link href="/book-a-call?service=UGC%20%2F%20Ads%20Editing" className="btn btn-primary pop-btn" style={{ padding: '12px 26px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Book Performance Ad Call</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>View Ad Showcase</span>
            </a>
          </div>
        </div>

        {/* PERFORMANCE ENGINE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '16px',
          margin: '0 auto 55px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#080C14',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#10B981', display: 'block', marginBottom: '4px' }}>CREATIVE STRATEGY</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              The Direct-Response <span className="combination-font">Ad Framework</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#10B981', marginBottom: '6px', fontWeight: '800' }}>01. 5X HOOK TESTING</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Split-Test Intros</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Multiple 3-second hook variations per creative to quickly find the lowest CPA winner.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '6px', fontWeight: '800' }}>02. URGENCY CALLOUTS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Dynamic Motion Graphics</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Discount popups, verified customer review badges, and visual benefit callouts.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '6px', fontWeight: '800' }}>03. SOUND PSYCHOLOGY</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Cash Register &amp; Wooshes</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Commercial SFX engineering to subconsciously hold buyer attention to the final offer CTA.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#EC4899', marginBottom: '6px', fontWeight: '800' }}>04. MULTI-RATIO EXPORT</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>9:16, 1:1, 4:5 Ready</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>All safe-zone compliant renders ready for immediate campaign upload across ad sets.</p>
            </div>
          </div>
        </div>

        {/* SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#10B981', display: 'block', marginBottom: '4px' }}>DIRECT RESPONSE VAULT</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Recent Direct Response <span className="combination-font">Paid Ads</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {adWorks.map(work => (
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
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.roas}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.format}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.hooks}
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
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>MEDIA BUYING CREATIVE FAQ</span>
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
          <span className="mono-spec" style={{ display: 'inline-block', fontSize: '0.74rem', color: '#10B981', marginBottom: '4px' }}>PERFORMANCE AD RETAINER</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Book Your 15-Minute <span className="combination-font">Ad Creative Audit</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your ad fatigue and discuss your monthly video creative pipeline.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20Paid%20Video%20Ads%20Retainer" 
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
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#10B981' }}>
                PERFORMANCE_AD // {selectedVideo.title}
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
              <Link href="/book-a-call?service=UGC%20%2F%20Ads%20Editing" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}>
                Book This Ad Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
