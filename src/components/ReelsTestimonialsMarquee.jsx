"use client";

import React, { useState, useRef } from 'react';

export default function ReelsTestimonialsMarquee({ videoTestimonials = [] }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultReels = [
    {
      id: 'reel-1',
      name: 'David Chen',
      role: 'Founder, TechFlow',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
      metric: '3.4M Views'
    },
    {
      id: 'reel-2',
      name: 'Michael R.',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
      metric: '4.2x ROAS'
    },
    {
      id: 'reel-3',
      name: 'Elena V.',
      role: 'Podcast Host',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      metric: '+450% Retention'
    },
    {
      id: 'reel-4',
      name: 'Marcus Vance',
      role: 'Creator (1.2M Subs)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
      metric: '85% Hook Retention'
    },
    {
      id: 'reel-5',
      name: 'Sarah Jenkins',
      role: 'E-Commerce Brand Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
      metric: '18 Repurposed Clips'
    }
  ];

  const textReviews = [
    {
      id: 'tr-1',
      name: 'Sophia L.',
      role: 'Lifestyle Creator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 4.9,
      text: 'Great communication and fantastic edits. The color grading on our lifestyle vlogs was completely transformed. Exactly what our brand needed.'
    },
    {
      id: 'tr-2',
      name: 'Alex M.',
      role: 'Real Estate Agent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5.0,
      text: 'They took my boring property tours and turned them into cinematic masterpieces. The ROI from their TikTok ad edits has been incredible.'
    },
    {
      id: 'tr-3',
      name: 'Emily R.',
      role: 'Fitness Vlogger',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      rating: 5.0,
      text: 'Their editing style is extremely engaging. My watch time literally doubled after I switched to Editly Foundry. They just know what works.'
    },
    {
      id: 'tr-4',
      name: 'Jessica W.',
      role: 'Podcast Host',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5.0,
      text: 'The multi-cam podcast edits they deliver are studio-grade. They know exactly when to cut, when to zoom, and how to keep the audience engaged.'
    },
    {
      id: 'tr-5',
      name: 'Liam Peterson',
      role: 'SaaS Founder',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5.0,
      text: 'Having a dedicated editor through Editly Foundry freed up 20+ hours of my week. Best investment we made this quarter.'
    }
  ];

  const reels = videoTestimonials.length > 0 ? videoTestimonials : defaultReels;
  const maxIndex = Math.max(0, reels.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const doubleTextReviews = [...textReviews, ...textReviews];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1360px', margin: '0 auto' }}>
      
      {/* 1. TOP COMPACT 4-VIDEO SLIDER WITH PREV/NEXT ARROWS */}
      <div style={{ position: 'relative', padding: '0 40px', marginBottom: '32px' }}>
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Videos"
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Videos"
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Stable Video Cards Container (4 per view) */}
        <div style={{ overflow: 'hidden', width: '100%', borderRadius: '24px' }}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${currentIndex * (100 / 4)}%)`
            }}
          >
            {reels.map((item, idx) => {
              const clientThumb = item.thumbnail || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80';
              const clientAvatar = item.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
              const clientName = item.name || 'Creator Client';
              const clientRole = item.role || 'Founder / Creator';
              const clientMetric = item.metric || 'Viral Reach';

              return (
                <div
                  key={item.id || item._id || `reel-item-${idx}`}
                  className="glass-card pop-hover"
                  onClick={() => setActiveVideo(item)}
                  style={{
                    flex: '0 0 calc(25% - 12px)',
                    minWidth: '220px',
                    borderRadius: '20px',
                    padding: '0',
                    overflow: 'hidden',
                    background: '#070D18',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    aspectRatio: '9/14',
                    cursor: 'pointer'
                  }}
                >
                  {/* Full-Frame 9:16 Video Thumbnail */}
                  <img
                    src={clientThumb}
                    alt={clientName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      inset: 0,
                      transition: 'transform 0.5s ease'
                    }}
                  />

                  {/* Gradient Vignette for readable overlays */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 35%, transparent 60%, rgba(5, 8, 18, 0.95) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Center Play Button */}
                  <div style={{
                    position: 'absolute',
                    top: '46%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.4)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '2px solid rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    boxShadow: '0 0 30px rgba(37, 99, 235, 0.8)',
                    zIndex: 2
                  }}>
                    <i className="fa-solid fa-play" style={{ marginLeft: '3px' }}></i>
                  </div>

                  {/* Bottom Floating Client Info */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 2
                  }}>
                    <img
                      src={clientAvatar}
                      alt={clientName}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1.5px solid #38BDF8',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ overflow: 'hidden' }}>
                      <h4 style={{ margin: '0 0 2px 0', fontSize: '0.92rem', fontWeight: '800', color: '#FFFFFF', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {clientName}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', display: 'block' }}>
                        {clientRole}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. BOTTOM ANIMATED SMOOTH MOVING TEXT REVIEWS MARQUEE (1 Single Line Moving) */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '6px 0 0' }}>
        <div
          className="text-reviews-marquee"
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animation: 'textMarquee 40s linear infinite'
          }}
        >
          {doubleTextReviews.map((rev, i) => (
            <div
              key={`${rev.id}-${i}`}
              className="glass-card"
              style={{
                width: '310px',
                padding: '16px 20px',
                borderRadius: '16px',
                flexShrink: 0,
                background: 'var(--card-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontSize: '0.85rem', marginBottom: '12px' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: '4px', fontWeight: '700' }}>{rev.rating}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.6', margin: '0 0 20px 0', fontStyle: 'italic' }}>
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h5 style={{ margin: 0, fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)' }}>{rev.name}</h5>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(25px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '9/16',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#000000',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9)',
              border: '2px solid rgba(56, 189, 248, 0.4)'
            }}
          >
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              &times;
            </button>

            <iframe
              src={activeVideo.videoUrl}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={activeVideo.name}
            ></iframe>
          </div>
        </div>
      )}

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes textMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .text-reviews-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
