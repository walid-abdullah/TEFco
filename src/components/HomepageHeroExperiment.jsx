"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomepageHeroExperiment({ heroBadge, heroTitle1, heroTitle2, heroDescription }) {
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);

  return (
    <div className="linear-hero-command-center" style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
      
      {/* Precision Monospace Studio Status Pill */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
        <span className="mono-spec" style={{ color: '#E2E8F0', fontSize: '0.74rem', letterSpacing: '0.06em' }}>
          POST-PRODUCTION INFRASTRUCTURE • &lt;48H SLA
        </span>
      </div>

      {/* Main High-Density Hero Heading */}
      <h1 className="hero-title" style={{ fontSize: '3.6rem', lineHeight: '1.08', marginBottom: '18px', fontWeight: '800', letterSpacing: '-0.035em' }}>
        Engineered for High-Retention <br />
        <span style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 40%, #94A3B8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Video Production &amp; Scale
        </span>
      </h1>

      {/* Crisp Technical Subtext */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '740px', margin: '0 auto 28px', lineHeight: '1.55', fontWeight: '400' }}>
        We partner with fast-scaling tech companies, creators, and media brands to produce retention-backed Reels, multi-cam podcasts, and 3D SaaS motion.
      </p>

      {/* Primary Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '45px' }}>
        <Link 
          href="/book-a-call" 
          className="btn btn-primary pop-btn"
          style={{ padding: '13px 28px', borderRadius: '8px', fontSize: '0.92rem', fontWeight: '700', letterSpacing: '-0.01em' }}
        >
          <span>Book Strategy Call</span>
          <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px', fontSize: '0.8rem' }}></i>
        </Link>
        <Link 
          href="/work" 
          className="btn btn-outline"
          style={{ padding: '13px 26px', borderRadius: '8px', fontSize: '0.92rem', fontWeight: '700' }}
        >
          <span>Explore Works</span>
        </Link>
      </div>

      {/* Basement-Style Darkroom 4K Showreel Viewer */}
      <div 
        className="glass-card pop-hover"
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          padding: 0,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: '#080C14',
          boxShadow: '0 30px 80px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.1)',
          position: 'relative',
          maxWidth: '1080px',
          margin: '0 auto'
        }}
      >
        {/* Top Metallic Player Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 18px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
            <span className="mono-spec" style={{ marginLeft: '8px', fontSize: '0.7rem' }}>SHOWREEL_MASTER_2026.MOV</span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="mono-tag" style={{ fontSize: '0.64rem' }}>4K 60FPS</span>
            <span className="mono-tag" style={{ fontSize: '0.64rem' }}>PRORES 422</span>
            <span className="mono-tag" style={{ fontSize: '0.64rem' }}>-14 LUFS</span>
          </div>
        </div>

        {/* Video Surface Area */}
        <div 
          style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden' }}
          onClick={() => setIsPlayingShowreel(true)}
        >
          {isPlayingShowreel ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/L_LUpnjgPso?autoplay=1&rel=0"
              title="Editly Foundry Master Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          ) : (
            <>
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80" 
                alt="The Editly Foundry Studio Showreel" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,7,11,0.85) 0%, rgba(0,0,0,0.2) 60%)' }}></div>

              {/* Centered Precision Play Trigger */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '74px', height: '50px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: '#FFFFFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
              }}>
                <i className="fa-solid fa-play" style={{ marginLeft: '3px' }}></i>
              </div>

              {/* Bottom Timecode Scrub Display */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span className="mono-spec" style={{ color: '#FFFFFF', fontSize: '0.8rem', fontWeight: '700' }}>
                  [00:00:00:00] REEL PLAYHEAD
                </span>
                <span className="mono-tag" style={{ background: 'rgba(0,0,0,0.6)' }}>
                  CLICK TO PREVIEW REEL
                </span>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
