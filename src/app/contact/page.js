"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import DesignMonksContact from '@/components/DesignMonksContact';

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/w-abdullah5588/30min";

  useEffect(() => {
    // Official Calendly Widget Script Load
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

  const globalOffices = [
    {
      city: 'New York',
      country: 'United States',
      phone: '+1 555 675-0125',
      email: 'theeditlyfoundry@gmail.com',
      role: 'US Enterprise Pod'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      phone: '+971 50 196 6827',
      email: 'theeditlyfoundry@gmail.com',
      role: 'Middle East Strategy'
    },
    {
      city: 'Dhaka',
      country: 'Bangladesh',
      phone: '+880 1886 755 888',
      email: 'theeditlyfoundry@gmail.com',
      role: 'Production Studio HQ'
    }
  ];

  return (
    <div className="contact-page-full" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '40px', position: 'relative' }}>
      
      {/* Background Orbs */}
      <div className="bg-glow-orb glow-purple" style={{ top: '5%', right: '-10%' }}></div>
      <div className="bg-glow-orb glow-blue" style={{ top: '35%', left: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Balanced, Elegant Header */}
        <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 28px' }}>
          <span className="section-subtitle" style={{ marginBottom: '6px', display: 'inline-block', fontSize: '0.85rem' }}>Get in Touch</span>
          <h1 className="section-title" style={{ fontSize: '2.6rem', marginBottom: '10px', lineHeight: '1.2' }}>
            Let&apos;s Engineer Your <span className="combination-font">Video Growth</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '18px' }}>
            Fill out the project brief below or connect instantly on WhatsApp.
          </p>

          {/* 2 Focused Action Options on 1st Page */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.04)', padding: '5px 10px', borderRadius: '50px', border: '1px solid var(--glass-border)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                background: '#2563EB',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.8rem' }}></i>
              <span>Send Project Brief</span>
            </span>

            <a
              href="https://wa.me/8801886755888"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#22C55E',
                fontSize: '0.88rem',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                transition: 'all 0.2s ease'
              }}
              className="pop-hover"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1rem' }}></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 1. Interactive Compact Project Inquiry Form */}
        <DesignMonksContact />

        {/* 2. Direct Calendly Embedded Widget Section (Placed Right Underneath) */}
        <div className="glass-card" style={{
          padding: '16px 14px 14px',
          borderRadius: '20px',
          maxWidth: '1280px',
          margin: '20px auto 25px',
          textAlign: 'center',
          background: 'var(--card-bg)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <span className="section-subtitle" style={{ marginBottom: '0px', display: 'inline-block', fontSize: '0.78rem' }}>Instant Video Meeting</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '2px 0 2px', lineHeight: '1.15' }}>
            Book a 15-Minute <span className="combination-font">Discovery Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4px', fontSize: '0.84rem' }}>
            Pick a convenient time slot directly on the calendar below to speak with Executive Producer Walid Abdullah.
          </p>

          {/* Calendly Inline Widget */}
          <div 
            className="calendly-inline-widget" 
            data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb`} 
            style={{ minWidth: '320px', height: '620px', width: '100%', borderRadius: '12px', overflow: 'hidden', marginTop: '-10px' }}
          ></div>
        </div>

        {/* 3. Compact Global Office Locations Bar */}
        <div style={{
          marginTop: '45px',
          padding: '20px 30px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--glass-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {globalOffices.map((off, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-blue-light)', fontSize: '0.95rem' }}></i>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: '800', fontSize: '0.92rem', color: 'var(--text-primary)' }}>{off.city}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginLeft: '6px' }}>({off.country})</span>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{off.phone}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
