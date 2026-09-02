"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PodcastServiceLandingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="podcast-landing-page" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', position: 'relative' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-8%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '-8%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px' }}>
        
        {/* ============================================================
            1. THE FOUNDRY CINEMATIC HERO (Interactive Multi-Cam Preview)
            ============================================================ */}
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto 35px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '50px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Broadcast-Grade Podcast Post-Production</span>
          </div>
          
          <h1 className="section-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' }}>
            Turn 1 Raw Episode into <span className="combination-font">30 Days of Viral Authority</span>
          </h1>
          
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Full-episode multi-cam switching, studio audio mastering, and automated extraction of 10–20 high-retention micro clips engineered for Spotify, YouTube, and paid social.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/book-a-call?service=Podcast%20%26%20Clips%20Editing" className="btn btn-primary pop-btn" style={{ padding: '14px 30px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Book 15-Min Podcast Audit</span>
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
            <a href="#showcase" className="btn btn-outline" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '700' }}>
              <span>Watch Live Work Samples</span>
            </a>
          </div>
        </div>

        {/* ============================================================
            2. THE 1-TO-30 CONTENT ENGINE (Visual Repurposing Architecture)
            ============================================================ */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '20px',
          margin: '0 auto 55px',
          border: '1px solid var(--glass-border)',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
        }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem', marginBottom: '4px' }}>The Content Multiplication Engine</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', margin: 0 }}>
              How 1 Recording Session <span className="combination-font">Scales Everywhere</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            alignItems: 'stretch'
          }}>
            {/* Stage 1 */}
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '6px' }}>01. RAW INGEST</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>1 Raw Full Episode</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Multi-cam 4K feeds and multitrack WAV audio files uploaded to your private studio portal.</p>
            </div>

            {/* Stage 2 */}
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#8B5CF6', textTransform: 'uppercase', marginBottom: '6px' }}>02. MASTER EPISODE</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>1 Full 4K YouTube Cut</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Dynamic multi-cam switching, custom lower thirds, chapter timestamps, and studio sound.</p>
            </div>

            {/* Stage 3 */}
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#EC4899', textTransform: 'uppercase', marginBottom: '6px' }}>03. SHORT-FORM EXTRACTS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>10-20 Viral Micro Reels</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Vertical 9:16 clips hooked with Hormozi captions, sound risers, and high-impact pacing.</p>
            </div>

            {/* Stage 4 */}
            <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#10B981', textTransform: 'uppercase', marginBottom: '6px' }}>04. PACKAGED ASSETS</div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Thumbnails & SEO Notes</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>High-CTR custom YouTube thumbnail + Spotify show notes and key quote highlights.</p>
            </div>
          </div>
        </div>

        {/* ============================================================
            3. LIVE FEATURED VIDEO SHOWCASE (4K Master Lightbox)
            ============================================================ */}
        <div id="showcase" style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Production Portfolio</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>
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
                  
                  {/* Frosted Play Button */}
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
                      <i className="fa-solid fa-camera" style={{ marginRight: '4px' }}></i>{work.speakerCount}
                    </span>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', fontSize: '0.74rem', fontWeight: '700' }}>
                      <i className="fa-solid fa-clock" style={{ marginRight: '4px' }}></i>{work.epLength}
                    </span>
                    <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontSize: '0.74rem', fontWeight: '700' }}>
                      <i className="fa-solid fa-bolt" style={{ marginRight: '4px' }}></i>{work.clipsGenerated}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            4. THE AUDIO-VISUAL LAB (Technical Post-Production Standards)
            ============================================================ */}
        <div className="glass-card" style={{
          padding: '30px 24px',
          borderRadius: '20px',
          margin: '0 auto 55px',
          border: '1px solid var(--glass-border)',
          background: 'var(--card-bg)'
        }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Studio Quality Standards</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
              The Audio-Visual <span className="combination-font">Mastering Lab</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '1.4rem', color: '#38BDF8', marginBottom: '10px' }}><i className="fa-solid fa-sliders"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>-14 LUFS Broadcast Audio</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Zero clipping, studio EQ balancing, and background echo removal optimized for headphones and vehicle sound systems.</p>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '1.4rem', color: '#EC4899', marginBottom: '10px' }}><i className="fa-solid fa-palette"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Rec.709 Cinematic Grading</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Skin-tone harmonization across different camera sensor brands (Sony, Canon, Blackmagic) with rich studio contrast.</p>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '1.4rem', color: '#8B5CF6', marginBottom: '10px' }}><i className="fa-solid fa-layer-group"></i></div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: '700' }}>Dynamic Speaker Tracking</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Intelligent switching logic that highlights conversational reactions, debates, and visual emphasis without jerky cuts.</p>
            </div>
          </div>
        </div>

        {/* ============================================================
            5. DEDICATED FOUNDRY POD SYSTEM (Your Dedicated Team)
            ============================================================ */}
        <div style={{ marginBottom: '60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Infrastructure</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
              Your Dedicated <span className="combination-font">Production Pod</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '580px', margin: '8px auto 0' }}>
              You don’t get random freelancers. Every brand is assigned a locked studio pod managed by Executive Producer Walid Abdullah.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', margin: '0 auto 12px' }}>
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: '700' }}>Dedicated Lead Editor</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Executes full multi-cam assembly and narrative flow.</p>
            </div>

            <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.15)', color: '#EC4899', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', margin: '0 auto 12px' }}>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: '700' }}>Short-Form Motion Lead</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Extracts and polishes 10-20 viral 9:16 reels.</p>
            </div>

            <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', margin: '0 auto 12px' }}>
                <i className="fa-solid fa-headphones"></i>
              </div>
              <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: '700' }}>Sound & Color Specialist</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Delivers -14 LUFS audio and DaVinci color matching.</p>
            </div>

            <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', margin: '0 auto 12px' }}>
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: '700' }}>Quality Assurance Lead</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Audits 48-hour SLAs, spellings, and audio sync.</p>
            </div>
          </div>
        </div>

        {/* ============================================================
            6. SERVICE-SPECIFIC FAQ ACCORDION
            ============================================================ */}
        <div style={{ maxWidth: '850px', margin: '0 auto 60px' }}>
          <div className="text-center" style={{ marginBottom: '26px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Frequently Asked Questions</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
              Got Questions? <span className="combination-font">We Have Answers</span>
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

        {/* ============================================================
            7. EMBEDDED STRATEGY AUDIT WITH WALID ABDULLAH (Pre-Filled)
            ============================================================ */}
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
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>Let’s Build Your Show</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Book Your 15-Minute <span className="combination-font">Podcast Strategy Audit</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 20px', fontSize: '0.92rem' }}>
            Pick a time directly on Walid Abdullah’s calendar below to audit your audio setup, discuss multi-cam workflow, and lock in your production pod.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/w-abdullah5588/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb&a1=Interested%20in%20Podcast%20Editing%20Retainer" 
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
              <Link href="/book-a-call?service=Podcast%20%26%20Clips%20Editing" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}>
                Book This Podcast Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
