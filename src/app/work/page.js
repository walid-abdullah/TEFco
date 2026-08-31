"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'podcasts', label: 'Podcasts & Talking Head' },
    { id: 'ugc', label: 'UGC & Paid Ads' },
    { id: 'saas', label: 'SaaS & Motion Graphics' }
  ];

  /* 
    ==========================================================================
    NOTE FOR YOU (MANUAL CONFIGURATION):
    Here are the portfolio projects. You can easily replace the 'youtubeId' 
    or 'thumbnail' with your own YouTube video links or local pictures!
    ==========================================================================
  */
  const portfolioProjects = [
    {
      id: 'proj-1',
      category: 'reels',
      title: 'Viral Short-Form Retention Reel Showcase',
      client: 'The Editly Foundry Co.',
      metrics: '3.4M Views • 85% Retention',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso', // Brand-safe showcase reel
      description: 'Engineered with 3-second visual pattern interrupts, dynamic kinetic captions, custom sound effects, and high-energy color grading.'
    },
    {
      id: 'proj-2',
      category: 'podcasts',
      title: 'The Modern Founder Podcast (Multi-Cam Cut)',
      client: 'The Editly Foundry Co.',
      metrics: '450k Full Episode Views • 12 Repurposed Clips',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      description: '3-camera angle switching with studio-grade audio noise reduction, custom title lower thirds, and chapter timestamp cards.'
    },
    {
      id: 'proj-3',
      category: 'ugc',
      title: 'High-Converting Direct Response Paid Ad',
      client: 'The Editly Foundry Co.',
      metrics: '4.2x ROAS on Meta • $180k Revenue Generated',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      description: 'Fast-paced problem/solution hook variations engineered to stop scroll on Instagram Reels and TikTok ad feeds.'
    },
    {
      id: 'proj-4',
      category: 'saas',
      title: 'SaaS Platform 3D Motion & Product Launch Demo',
      client: 'The Editly Foundry Co.',
      metrics: '#1 Product of the Day on Product Hunt',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      description: 'Silky smooth cursor movement motion graphics, 2D vector explainers, and animated mockups designed to explain complex software in 60s.'
    },
    {
      id: 'proj-5',
      category: 'podcasts',
      title: 'Cinematic YouTube Documentary & Talking Head',
      client: 'The Editly Foundry Co.',
      metrics: '1.2M YouTube Views • 45k Subscribers Gained',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso',
      description: 'Cinematic B-roll overlays, subtle zoom-in pacing, customized infographics, and high-CTR thumbnail package.'
    },
    {
      id: 'proj-6',
      category: 'reels',
      title: 'High-Energy Social Hook & Sound Design',
      client: 'The Editly Foundry Co.',
      metrics: '8.1M Total Impressions • 35k Shares',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE',
      description: 'Tested 5 hook variations within the first 48 hours to discover the winning organic viral angle.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="work-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-10%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '35%', right: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
          <span className="section-subtitle">Our Work & Case Studies</span>
          <h1 className="section-title" style={{ fontSize: '3.4rem', marginBottom: '20px' }}>
            Work That Captures Attention & <span className="combination-font">Drives Real Revenue</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
            Explore our retention-engineered video edits across Short-form Reels, Podcasts, Paid Ads, and Motion Graphics.
          </p>

          {/* Category Filter Pills (Musemind Style) */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginTop: '35px',
            background: 'var(--card-bg)',
            padding: '8px',
            borderRadius: '50px',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeFilter === cat.id ? 'var(--accent-blue-primary)' : 'transparent',
                  color: activeFilter === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Portfolio Grid (Asymmetric Bento Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px',
          margin: '50px auto 80px'
        }}>
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${idx * 80}ms`
              }}
            >
              {/* Thumbnail Container with Play Overlay */}
              <div 
                style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedVideo(proj)}
              >
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="360"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
                
                {/* Metrics Pill Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'rgba(7, 13, 24, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: '#38BDF8',
                  padding: '5px 14px',
                  borderRadius: '30px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <i className="fa-solid fa-chart-simple" style={{ color: '#10B981' }}></i>
                  {proj.metrics}
                </div>

                {/* Center Glass Play Button */}
                <button 
                  className="apple-glass-play-btn"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none'
                  }}
                  aria-label="Play Video"
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>

              {/* Card Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue-light)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {proj.client}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {proj.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                  {proj.description}
                </p>

                <button
                  onClick={() => setSelectedVideo(proj)}
                  className="btn btn-outline pop-btn"
                  style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                >
                  <span>Watch Video Showcase</span>
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real Editing Transformation: Raw vs Delivered */}
        <div className="glass-card reveal-on-scroll" style={{
          padding: '50px 40px',
          borderRadius: '32px',
          maxWidth: '1280px',
          margin: '0 auto 80px',
          border: '1px solid var(--glass-border)',
          textAlign: 'center'
        }}>
          <span className="section-subtitle" style={{ color: 'var(--accent-blue-light)' }}>The Editly Standard</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '14px', fontWeight: '800' }}>
            Raw Footage In. <span className="combination-font">Viral Asset Out.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 35px' }}>
            We take ordinary raw camera recordings and transform them into high-converting, retention-engineered assets.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            textAlign: 'left'
          }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '24px', borderRadius: '20px' }}>
              <div style={{ color: '#EF4444', fontWeight: '800', fontSize: '1.05rem', marginBottom: '10px' }}>❌ What You Send Us (Raw)</div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>• Uncut, unedited webcam / camera footage</li>
                <li>• Pauses, filler words, and background room hums</li>
                <li>• Flat default camera profiles & bad lighting</li>
                <li>• Zero retention pacing or visual pattern interrupts</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '24px', borderRadius: '20px' }}>
              <div style={{ color: '#10B981', fontWeight: '800', fontSize: '1.05rem', marginBottom: '10px' }}>✨ What We Deliver in 48h (Polished)</div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>• 3-Second Scroll-Stopping Retention Hook</li>
                <li>• Custom Animated Captions, SFX & Motion Branding</li>
                <li>• Studio Broadcast Color Grading & Audio EQ Mastering</li>
                <li>• 100% Ready-to-Publish with High-CTR Thumbnails</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Bottom Banner */}
        <div className="text-center reveal-on-scroll" style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(2, 132, 199, 0.1) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '30px',
          padding: '60px 30px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>
            Ready to Scale Your Video Content?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Book a 15-minute intro call to see how our dedicated editing pod fits your brand.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link href="/book-a-call" className="btn btn-primary btn-lg pop-btn">
              <span>Book Strategy Call</span>
              <i className="fa-solid fa-calendar-check"></i>
            </Link>
            <Link href="/#pricing" className="btn btn-outline btn-lg pop-btn">
              <span>View Pricing Plans</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

      </div>

      {/* VIDEO LIGHTBOX MODAL (Top-Tier Z-Index Above Navbar) */}
      {selectedVideo && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            className="glass-card"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: '#070D18',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.75)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 100,
                fontSize: '1.2rem',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Embedded Responsive YouTube Player */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            {/* Modal Info Footer */}
            <div style={{ padding: '25px 30px' }}>
              <span style={{ color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                {selectedVideo.client}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '4px', marginBottom: '8px' }}>
                {selectedVideo.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
