"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/w-abdullah5588/30min";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
      title: 'Viral Short-Form Retention Reel',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-2',
      category: 'podcast',
      title: 'The Modern Founder Podcast',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-3',
      category: 'promo',
      title: 'Direct Response Paid Video Ad',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-4',
      category: 'saas',
      title: 'SaaS 3D Motion Product Demo',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-5',
      category: 'talking-head',
      title: 'Cinematic YouTube Authority Video',
      thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-6',
      category: 'reels',
      title: 'High-Energy Social Hook Cut',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-7',
      category: 'thumbnails',
      title: 'High-CTR YouTube Custom Thumbnail',
      thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    },
    {
      id: 'proj-8',
      category: 'promo',
      title: 'E-Commerce Meta & TikTok Ad',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'M7lc1UVf-VE'
    },
    {
      id: 'proj-9',
      category: 'podcast',
      title: 'Studio Audio & Multi-Cam Mastering',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      youtubeId: 'L_LUpnjgPso'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="work-page-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-10%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '35%', right: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header (Montage Motion Clean Aesthetic) */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 24px' }}>
          <span className="section-subtitle" style={{ display: 'inline-block', padding: '5px 16px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Our Portfolio
          </span>
          <h1 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '12px', fontWeight: '800' }}>
            Creativity That <span className="combination-font">Converts</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Turning raw footage and ideas into content that captures attention and scales brands.
          </p>

          {/* Clean Horizontal Filter Bar */}
          <div className="portfolio-tabs" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)',
            padding: '4px',
            borderRadius: '12px',
            marginTop: '24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeFilter === cat.id ? 'var(--accent-blue-primary)' : 'transparent',
                  color: activeFilter === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 100% PURE CLEAN VIDEO SHOWCASE GRID (NO TEXT ON THUMBNAIL, WIDE PLAY BUTTON) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
          margin: '30px auto 60px'
        }}>
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                padding: '0',
                border: '1px solid var(--glass-border)',
                transitionDelay: `${idx * 40}ms`,
                position: 'relative'
              }}
            >
              {/* Pure Clean 16:9 Thumbnail (ZERO TEXT, WIDE CAPSULE PLAY BUTTON) */}
              <div 
                style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedVideo(proj)}
              >
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                />

                {/* Subtle Hover Darkening Layer */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.2)',
                  transition: 'background 0.3s ease'
                }}></div>

                {/* Montage-Motion Style WIDE Capsule Play Button */}
                <button 
                  className="apple-glass-play-btn"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    width: '64px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.45)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Play Video"
                >
                  <i className="fa-solid fa-play" style={{ marginLeft: '2px' }}></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 1:1 Booking Calendar & Strategy Section (Official Contact-Style Calendly) */}
        <div className="glass-card reveal-on-scroll" style={{
          padding: '24px 20px',
          borderRadius: '20px',
          maxWidth: '1100px',
          margin: '0 auto 50px',
          border: '1px solid var(--glass-border)',
          textAlign: 'center',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>Book a Call</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Your Next <span className="combination-font">Growth Step</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 16px', fontSize: '0.92rem' }}>
            Prefer virtual? Schedule a 15-minute quick call directly on the calendar below.
          </p>

          {/* Official Calendly Inline Widget Integration */}
          <div 
            className="calendly-inline-widget" 
            data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb`} 
            style={{ minWidth: '320px', height: '620px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
          ></div>
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
            <div style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>
                {selectedVideo.title}
              </h3>
              <Link href="/book-a-call" onClick={() => setSelectedVideo(null)} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}>
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
