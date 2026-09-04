"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PodcastServiceLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const introVideo = {
    title: 'Broadcast-Grade Podcast Production & Repurposing',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'M7lc1UVf-VE'
  };

  const podcastWorks = [
    {
      id: 'pod-work-1',
      title: 'The Modern Founder Podcast — Multi-Cam Studio Switch',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      speakerCount: '3 Speakers',
      epLength: '48 Mins',
      clipsGenerated: '14 Viral Clips'
    },
    {
      id: 'pod-work-2',
      title: 'Venture Table Roundtable — 4K Sound Master & Visual Pacing',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      speakerCount: '4 Cameras',
      epLength: '62 Mins',
      clipsGenerated: '18 Viral Clips'
    },
    {
      id: 'pod-work-3',
      title: 'Creator Insights Studio — Solo Deep Dive & B-Roll Overlays',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      speakerCount: 'Solo Host',
      epLength: '34 Mins',
      clipsGenerated: '10 Viral Clips'
    },
    {
      id: 'pod-work-4',
      title: 'Silicon Executive Series — Multi-Mic Noise Cancellation Cut',
      thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      speakerCount: '2 Speakers',
      epLength: '55 Mins',
      clipsGenerated: '16 Viral Clips'
    }
  ];

  const faqs = [
    {
      q: 'How does your multi-camera switching process work?',
      a: 'We align all your video camera angles and isolated audio tracks (WAV/MP3) with sub-frame accuracy. Our editors execute intelligent pacing cuts based on speaker cadence, reactions, and screen focus so your audience never gets visual fatigue.'
    },
    {
      q: 'How many short-form vertical reels do we get per episode?',
      a: 'Depending on your package, we extract 10 to 20 high-retention vertical clips (9:16) per episode, complete with animated kinetic captions, hook sound effects, and color grading for TikTok, Instagram Reels, and YouTube Shorts.'
    },
    {
      q: 'Can you fix bad audio, background hums, and room echoes?',
      a: 'Yes. Every episode goes through our dedicated Audio-Visual Lab where we run iZotope RX spectral de-noising, room echo reduction, level balancing, and master the loudness to broadcast standards (-14 LUFS for Spotify & Apple Podcasts).'
    },
    {
      q: 'What is your turnaround time for a full episode?',
      a: 'Our standard production turnaround is 48 hours for the initial 4K draft. Once approved, all repurposed micro-clips and thumbnail assets are delivered within 24 hours.'
    },
    {
      q: 'Do we get full ownership and project files?',
      a: '100%. You retain full intellectual property ownership, and we can deliver complete Adobe Premiere Pro (.prproj) or DaVinci Resolve project archives upon request.'
    }
  ];

  return (
    <div className="podcast-landing-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* HERO */}
        <div className="text-center" style={{ maxWidth: '960px', margin: '0 auto 40px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#8B5CF6' }}>PODCAST ARCHITECTURE &amp; REPURPOSING</span>
          </div>

          <h1 className="section-title" style={{ fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Multi-Cam Podcasts, Audio &amp; <span className="combination-font">Highlights Clips</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 28px', fontWeight: '400' }}>
            Turn 1 Raw Episode into 30 Days of Viral Authority
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
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#8B5CF6' }}>
                PODCAST_INTRO_BREAKDOWN.MOV
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>-14 LUFS</span>
                <span className="mono-tag" style={{ fontSize: '0.62rem' }}>MULTI-TRACK</span>
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
            <Link href="/book-a-call?service=Podcast%20%26%20Clips%20Editing" className="btn btn-primary pop-btn" style={{ padding: '12px 26px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Book 15-Min Podcast Audit</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>Watch Live Work Samples</span>
            </a>
          </div>
        </div>

        {/* THE 1-TO-30 CONTENT ENGINE */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '16px',
          margin: '0 auto 55px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#080C14',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>CONTENT REPURPOSING MATRIX</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              How 1 Recording Session <span className="combination-font">Scales Everywhere</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '6px', fontWeight: '800' }}>01. RAW INGEST</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>1 Raw Full Episode</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Multi-cam 4K feeds and multitrack WAV audio files uploaded to your private studio portal.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '6px', fontWeight: '800' }}>02. MASTER EPISODE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>1 Full 4K YouTube Cut</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Dynamic multi-cam switching, custom lower thirds, chapter timestamps, and studio sound.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#EC4899', marginBottom: '6px', fontWeight: '800' }}>03. SHORT-FORM EXTRACTS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>10-20 Viral Micro Reels</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Vertical 9:16 clips hooked with Hormozi captions, sound risers, and high-impact pacing.</p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="mono-spec" style={{ color: '#10B981', marginBottom: '6px', fontWeight: '800' }}>04. PACKAGED ASSETS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Thumbnails &amp; SEO Notes</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>High-CTR custom YouTube thumbnail + Spotify show notes and key quote highlights.</p>
            </div>
          </div>
        </div>

        {/* SHOWCASE */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#8B5CF6', display: 'block', marginBottom: '4px' }}>PORTFOLIO ARCHIVE</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Recent Studio <span className="combination-font">Podcast Masters</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {podcastWorks.map(work => (
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
                      {work.speakerCount}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.epLength}
                    </span>
                    <span className="mono-spec" style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.68rem', fontWeight: '700' }}>
                      {work.clipsGenerated}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIO-VISUAL LAB */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '16px',
          margin: '0 auto 55px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#080C14'
        }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#8B5CF6', display: 'block', marginBottom: '4px' }}>QUALITY PILLARS</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              The Audio-Visual <span className="combination-font">Mastering Lab</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ padding: '20px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '1.2rem', color: '#38BDF8', marginBottom: '10px' }}><i className="fa-solid fa-sliders"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>-14 LUFS Broadcast Audio</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Zero clipping, studio EQ balancing, and background echo removal optimized for headphones and car systems.</p>
            </div>

            <div style={{ padding: '20px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '1.2rem', color: '#EC4899', marginBottom: '10px' }}><i className="fa-solid fa-palette"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Rec.709 Cinematic Grading</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Skin-tone harmonization across different camera sensor brands (Sony, Canon, Blackmagic) with rich studio contrast.</p>
            </div>

            <div style={{ padding: '20px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '1.2rem', color: '#8B5CF6', marginBottom: '10px' }}><i className="fa-solid fa-layer-group"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>Dynamic Speaker Tracking</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>Intelligent switching logic that highlights conversational reactions, debates, and visual emphasis without jerky cuts.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '850px', margin: '0 auto 60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#38BDF8', display: 'block', marginBottom: '4px' }}>KNOWLEDGE BASE</span>
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
          <span className="mono-spec" style={{ display: 'inline-block', fontSize: '0.74rem', color: '#8B5CF6', marginBottom: '4px' }}>PRODUCTION PIPELINE ONBOARDING</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Book Your 15-Minute <span className="combination-font">Podcast Strategy Audit</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your audio setup, discuss multi-cam workflow, and lock in your production pod.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20Podcast%20Editing%20Retainer" 
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
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#8B5CF6' }}>
                PODCAST_MASTER // {selectedVideo.title}
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
              <Link href="/book-a-call?service=Podcast%20%26%20Clips%20Editing" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}>
                Book This Podcast Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
