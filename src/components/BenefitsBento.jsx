"use client";

import React from 'react';
import Link from 'next/link';

export default function BenefitsBento() {
  const bentoItems = [
    {
      id: 'sla',
      tag: 'GUARANTEED SLA // 48H',
      status: '99.4% ON-TIME DISPATCH',
      title: 'Ultra-Fast 24 to 48-Hour Turnarounds',
      desc: 'Never wait weeks for a rough cut. Upload raw footage to your dedicated Frame.io or Drive pod and receive broadcast-ready masters in under 48 hours.',
      metricLabel: 'STANDARD SLA',
      metricVal: '< 48 HOURS',
      link: '/workflow',
      linkText: 'Explore Turnaround Pipeline →',
      colSpan: 'span 7'
    },
    {
      id: 'color',
      tag: 'ACESCC & REC.709',
      status: 'DAVINCI STUDIO',
      title: 'Broadcast Color Science',
      desc: 'Every camera profile (Sony S-Log3, Canon C-Log, RED IPP2, Blackmagic RAW) is color-matched and calibrated for crisp skin tones on OLED screens.',
      metricLabel: 'COLOR BIT-DEPTH',
      metricVal: '10-BIT 4:2:2 PRORES',
      link: '/services/talking-head',
      linkText: 'Explore Color Suite →',
      colSpan: 'span 5'
    },
    {
      id: 'audio',
      tag: 'EBU R128 AUDIO MASTER',
      status: '-14 LUFS TARGET',
      title: 'Sub-Frame Sound Engineering',
      desc: 'Room echo elimination, spectral background de-noise via iZotope RX, and dynamic voice sidechaining for crystal-clear playback on all speaker types.',
      metricLabel: 'LOUDNESS NORMALIZATION',
      metricVal: '-14.0 LUFS BROADCAST',
      link: '/services/podcasts',
      linkText: 'Explore Audio Mastering →',
      colSpan: 'span 5'
    },
    {
      id: 'collab',
      tag: 'DIRECT COLLABORATION POD',
      status: 'REAL-TIME SYNC',
      title: 'Zero Bloated Email Threads',
      desc: 'Drop timecoded notes directly inside Frame.io and communicate with your dedicated Creative Director on a private Slack or WhatsApp channel.',
      metricLabel: 'COLLABORATION CHANNELS',
      metricVal: 'SLACK + FRAME.IO',
      link: '/workflow',
      linkText: 'Explore Collaboration SLA →',
      colSpan: 'span 7'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto 48px' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 14px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Engineered for Velocity. <br />
            <span 
              className="serif-accent"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 20%, #CBD5E1 65%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '400',
                paddingRight: '6px'
              }}
            >
              Built for Scale.
            </span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
            Every step of our post-production pipeline is standardized for speed, broadcast color science, and zero-friction client collaboration.
          </p>
        </div>

        {/* 
          ========================================================================
          STRICT TITANIUM MONOCHROME BENTO GRID WITH DEDICATED LANDING LINKS
          ======================================================================== 
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '20px'
        }}>
          {bentoItems.map((item) => (
            <div 
              key={item.id}
              className="glass-card pop-hover"
              style={{
                gridColumn: item.colSpan,
                borderRadius: '16px',
                padding: '30px',
                background: '#070A12',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                {/* Monospace Metadata Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="mono-spec" style={{ 
                    fontSize: '0.68rem', 
                    color: '#FFFFFF', 
                    background: 'rgba(255, 255, 255, 0.06)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '3px 8px', 
                    borderRadius: '4px', 
                    fontWeight: '700' 
                  }}>
                    {item.tag}
                  </span>
                  <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#94A3B8' }}>
                    {item.status}
                  </span>
                </div>

                {/* Card Title & Crisp Copy */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Bottom Spec Tag & Clickable Landing Page Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                marginTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#64748B', display: 'block' }}>{item.metricLabel}</span>
                  <span className="mono-spec" style={{ fontSize: '0.76rem', color: '#FFFFFF', fontWeight: '800' }}>{item.metricVal}</span>
                </div>

                <Link
                  href={item.link}
                  style={{
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#05070B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <span>{item.linkText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
