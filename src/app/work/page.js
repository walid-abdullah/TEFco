"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('podcast');
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
    { id: 'podcast', label: 'Podcast' },
    { id: 'talking-head', label: 'Talking-head' },
    { id: 'reels', label: 'Shorts/Reels' },
    { id: 'saas', label: 'SaaS' },
    { id: 'promo', label: 'Promo & Ads' },
    { id: 'thumbnails', label: 'Thumbnails' }
  ];

  // 6 Projects per Category (36 Projects total)
  const portfolioProjects = [
    // 1. PODCAST (6 Items - 16:9)
    { id: 'pod-1', category: 'podcast', isVertical: false, title: 'The Modern Founder Podcast Episode #14', thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-2', category: 'podcast', isVertical: false, title: 'Studio Multi-Camera Audio Cut', thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'pod-3', category: 'podcast', isVertical: false, title: 'Creator Mastery Audio & Video Suite', thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-4', category: 'podcast', isVertical: false, title: 'Tech Founders Table Roundtable Master', thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'pod-5', category: 'podcast', isVertical: false, title: 'Deep Dive Studio Recording Cut', thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-6', category: 'podcast', isVertical: false, title: 'Executive Voice & Sound Engineering Cut', thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },

    // 2. TALKING-HEAD (6 Items - 16:9)
    { id: 'th-1', category: 'talking-head', isVertical: false, title: 'Cinematic YouTube Long-Form Authority Video', thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-2', category: 'talking-head', isVertical: false, title: 'Educational Strategy Breakdown Film', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'th-3', category: 'talking-head', isVertical: false, title: 'Personal Brand Story & Case Study Cut', thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-4', category: 'talking-head', isVertical: false, title: 'High-Ticket Agency Authority Presentation', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'th-5', category: 'talking-head', isVertical: false, title: 'Documentary-Style Narrative YouTube Video', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-6', category: 'talking-head', isVertical: false, title: 'Investor Pitch & Founder Vision Cut', thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 3. SHORTS / REELS (6 Items - 9:16 VERTICAL REEL RATIO)
    { id: 'reel-1', category: 'reels', isVertical: true, title: 'Viral 3-Second Hook Retention Reel', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-2', category: 'reels', isVertical: true, title: 'Alex Hormozi Style Kinetic Captions Short', thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-3', category: 'reels', isVertical: true, title: 'High-Energy Sound Design Instagram Reel', thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-4', category: 'reels', isVertical: true, title: 'Founder Wisdom Micro-Podcast Clip', thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-5', category: 'reels', isVertical: true, title: 'Direct Response TikTok Organic Hook', thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-6', category: 'reels', isVertical: true, title: 'Fast-Paced Motion Graphics Short Clip', thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 4. SAAS (6 Items - 16:9)
    { id: 'saas-1', category: 'saas', isVertical: false, title: 'SaaS Platform 3D Motion Product Demo', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-2', category: 'saas', isVertical: false, title: 'Product Hunt Launch Video Animation', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'saas-3', category: 'saas', isVertical: false, title: 'Silky Smooth UI Dynamic Cursor Demo', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-4', category: 'saas', isVertical: false, title: '2D Vector Explainer & Feature Breakdown', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'saas-5', category: 'saas', isVertical: false, title: 'App Store Interactive Screen Mockups', thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-6', category: 'saas', isVertical: false, title: 'Enterprise Cloud SaaS Walkthrough Animation', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },

    // 5. PROMO & ADS (6 Items - 16:9)
    { id: 'promo-1', category: 'promo', isVertical: false, title: 'High-Converting Direct Response Paid Ad', thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-2', category: 'promo', isVertical: false, title: 'Meta & TikTok E-Commerce Commercial Ad', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'promo-3', category: 'promo', isVertical: false, title: 'Brand Launch Teaser & Cinematic Commercial', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-4', category: 'promo', isVertical: false, title: 'Split-Test Hook Variations Direct Response Cut', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'promo-5', category: 'promo', isVertical: false, title: 'Fashion & Luxury Lifestyle Promo Video', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-6', category: 'promo', isVertical: false, title: 'Lead Generation Video Ad for Meta Campaigns', thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 6. THUMBNAILS (6 Items - 16:9 Thumbnail Designs)
    { id: 'thumb-1', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #1', thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-2', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #2', thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-3', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #3', thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-4', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #4', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-5', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #5', thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-6', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #6', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredProjects = portfolioProjects.filter(p => p.category === activeFilter);
  const isReelsCategory = activeFilter === 'reels';

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

          {/* Clean Horizontal Filter Bar (6 Dedicated Tabs) */}
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

        {/* DYNAMIC SHOWCASE GRID (6 Items per Category | 9:16 for Reels, 16:9 for others) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isReelsCategory 
            ? 'repeat(auto-fit, minmax(200px, 1fr))' 
            : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isReelsCategory ? '16px' : '20px',
          maxWidth: isReelsCategory ? '1200px' : '1240px',
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
              {/* Thumbnail Container (16:9 standard OR 9:16 Reel ratio) */}
              <div 
                style={{ 
                  position: 'relative', 
                  aspectRatio: isReelsCategory ? '9/16' : '16/9', 
                  overflow: 'hidden', 
                  cursor: proj.isThumbnailOnly ? 'default' : 'pointer' 
                }}
                onClick={() => !proj.isThumbnailOnly && setSelectedVideo(proj)}
              >
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                />

                {/* Subtle Hover Darkening Layer */}
                {!proj.isThumbnailOnly && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.2)',
                    transition: 'background 0.3s ease'
                  }}></div>
                )}

                {/* Montage-Motion Style WIDE Capsule Play Button */}
                {!proj.isThumbnailOnly && (
                  <button 
                    className="apple-glass-play-btn"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none',
                      width: isReelsCategory ? '52px' : '64px',
                      height: isReelsCategory ? '36px' : '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.18)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.45)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.95rem',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label="Play Video"
                  >
                    <i className="fa-solid fa-play" style={{ marginLeft: '2px' }}></i>
                  </button>
                )}
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
              maxWidth: selectedVideo.isVertical ? '420px' : '920px',
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
            <div style={{ position: 'relative', width: '100%', aspectRatio: selectedVideo.isVertical ? '9/16' : '16/9' }}>
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>
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
