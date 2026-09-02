"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 6 Premium Disciplines aligned with Montage Motion clean classification
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'talking-head', label: 'Talking-head' },
    { id: 'reels', label: 'Shorts/Reels' },
    { id: 'saas', label: 'SaaS' },
    { id: 'promo', label: 'Promo & Ads' },
    { id: 'thumbnails', label: 'Thumbnails' }
  ];

  const portfolioProjects = [
    {
      id: 'proj-1',
      category: 'reels',
      title: 'Viral Short-Form Retention Reel Showcase',
      client: 'The Editly Foundry Co.',
      metrics: '3.4M Views • 85% Retention',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-2',
      category: 'podcast',
      title: 'The Modern Founder Podcast (Multi-Cam Cut)',
      client: 'The Editly Foundry Co.',
      metrics: '450k Full Episode Views • 12 Clips',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-3',
      category: 'promo',
      title: 'High-Converting Direct Response Paid Ad',
      client: 'The Editly Foundry Co.',
      metrics: '4.2x ROAS on Meta • $180k Revenue',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-4',
      category: 'saas',
      title: 'SaaS Platform 3D Motion & Product Launch Demo',
      client: 'The Editly Foundry Co.',
      metrics: '#1 Product of the Day on Product Hunt',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-5',
      category: 'talking-head',
      title: 'Cinematic YouTube Long-Form & Talking Head',
      client: 'The Editly Foundry Co.',
      metrics: '1.2M YouTube Views • +45k Subs',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-6',
      category: 'reels',
      title: 'High-Energy Social Hook & Sound Design',
      client: 'The Editly Foundry Co.',
      metrics: '8.1M Total Impressions • 35k Shares',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-7',
      category: 'thumbnails',
      title: 'High-CTR YouTube Custom Thumbnail Package',
      client: 'The Editly Foundry Co.',
      metrics: '14.8% Average CTR Boost',
      thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-8',
      category: 'promo',
      title: 'Direct Response Meta & TikTok E-Com Ad',
      client: 'The Editly Foundry Co.',
      metrics: '3.8x ROAS • Scaled to $50k/mo',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-9',
      category: 'podcast',
      title: 'Studio Audio Mastering & Multi-Camera Cut',
      client: 'The Editly Foundry Co.',
      metrics: 'Studio Quality Sound • Noise Purged',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="work-page-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-10%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '35%', right: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header (Montage Motion Clean Aesthetic) */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 30px' }}>
          <span className="section-subtitle" style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Our Portfolio
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '14px', fontWeight: '800' }}>
            Creativity That <span className="combination-font">Converts</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
            Turning raw footage and ideas into high-retention video assets that capture attention and drive measurable growth.
          </p>

          {/* Clean Horizontal Filter Bar */}
          <div className="portfolio-tabs" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)',
            padding: '5px',
            borderRadius: '14px',
            marginTop: '28px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeFilter === cat.id ? 'var(--accent-blue-primary)' : 'transparent',
                  color: activeFilter === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ultra-Clean 3-Column Video Showcase Grid (Montage Motion Pure Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          margin: '40px auto 70px'
        }}>
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                padding: '0',
                border: '1px solid var(--glass-border)',
                transitionDelay: `${idx * 50}ms`,
                position: 'relative'
              }}
            >
              {/* 16:9 Thumbnail with Overlay & Play Button */}
              <div 
                style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedVideo(proj)}
              >
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />

                {/* Subtle Gradient Shadow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 13, 24, 0.85) 0%, rgba(7, 13, 24, 0.1) 60%, transparent 100%)'
                }}></div>

                {/* Top Badge: Metric / Category */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(7, 13, 24, 0.85)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: '#38BDF8',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '0.74rem',
                  fontWeight: '700',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <i className="fa-solid fa-chart-simple" style={{ color: '#10B981' }}></i>
                  {proj.metrics}
                </div>

                {/* Center Apple-Style Frosted Glass Play Button */}
                <button 
                  className="apple-glass-play-btn"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                  }}
                  aria-label="Play Video"
                >
                  <i className="fa-solid fa-play" style={{ marginLeft: '3px' }}></i>
                </button>

                {/* Bottom Title on Thumbnail */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  right: '14px'
                }}>
                  <h3 style={{
                    fontSize: '0.98rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    margin: 0,
                    lineHeight: '1.35',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}>
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1:1 Booking Calendar & Strategy Section */}
        <div className="glass-card reveal-on-scroll" style={{
          padding: '40px 30px',
          borderRadius: '24px',
          maxWidth: '1200px',
          margin: '0 auto 60px',
          border: '1px solid var(--glass-border)',
          textAlign: 'center'
        }}>
          <span className="section-subtitle" style={{ color: 'var(--accent-blue-light)' }}>Book a Call</span>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '10px', fontWeight: '800' }}>
            Your Next <span className="combination-font">Growth Step</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 30px', fontSize: '0.96rem' }}>
            Prefer a direct 1:1 strategy session? Schedule a 15-minute discovery call and let's bring your video vision to life.
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
            <iframe
              src="https://calendly.com/walid-abdullah-editlyfoundry/30min?embed_type=Inline&embed_domain=1"
              width="100%"
              height="650"
              frameBorder="0"
              title="Calendly Booking"
              style={{ minHeight: '650px', background: 'transparent' }}
            ></iframe>
          </div>
        </div>

      </div>

      {/* VIDEO LIGHTBOX MODAL */}
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
            {/* Close Button */}
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
                zIndex: 100,
                fontSize: '1.1rem'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Embedded YouTube Player */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            {/* Modal Info */}
            <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  {selectedVideo.client}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px', marginBottom: '0' }}>
                  {selectedVideo.title}
                </h3>
              </div>
              <Link href="/book-a-call" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '10px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
