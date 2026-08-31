"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BookACallPage() {
  /* 
    ==========================================================================
    আপনার CALENDLY লিংক:
    আপনার আসল Calendly লিংকটি নিচে বসিয়ে দিন (যেমন: 'https://calendly.com/walid-abdullah/15min')
    ==========================================================================
  */
  const [calendlyUrl, setCalendlyUrl] = useState("https://calendly.com/w-abdullah5588/30min");

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
  }, [calendlyUrl]);

  const globalOffices = [
    {
      city: 'New York',
      country: 'United States',
      address: '47 Macdonough St, Brooklyn, NY 11216',
      phone: '+1 555 675-0125',
      email: 'theeditlyfoundry@gmail.com',
      role: 'US Partnerships & Growth Hub',
      icon: 'fa-solid fa-city'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai',
      phone: '+971 50 196 6827',
      email: 'theeditlyfoundry@gmail.com',
      role: 'Middle East Strategy',
      icon: 'fa-solid fa-globe'
    },
    {
      city: 'Dhaka',
      country: 'Bangladesh',
      address: 'House 42, Road 11, Banani, Dhaka 1213',
      phone: '+880 1886 755 888',
      email: 'theeditlyfoundry@gmail.com',
      role: 'Creative Production Studio HQ',
      icon: 'fa-solid fa-building'
    }
  ];

  return (
    <div className="book-call-page" style={{ paddingTop: '80px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background ambient orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '5%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
          <span className="section-subtitle">Discovery Session</span>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '18px' }}>
            Book a 15-Minute <span className="combination-font">Growth Audit</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
            Select a time below to audit your video retention, analyze your audience growth bottlenecks, and explore our dedicated video production retainers.
          </p>
        </div>

        {/* OFFICIAL CALENDLY INLINE EMBEDDED WIDGET CONTAINER */}
        <div 
          className="glass-card" 
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.25)',
            maxWidth: '1280px',
            margin: '0 auto 60px',
            minHeight: '700px',
            position: 'relative'
          }}
        >
          {/* Robust Direct Calendly Embed iframe */}
          <iframe
            src={`${calendlyUrl}?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb`}
            width="100%"
            height="720px"
            frameBorder="0"
            title="Book a Strategy Session with Walid Abdullah"
            style={{ minWidth: '320px', width: '100%', height: '720px', border: 'none' }}
          ></iframe>
        </div>

        {/* Reassurance Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1280px',
          margin: '0 auto 70px'
        }}>
          <div className="glass-card" style={{ padding: '22px 20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: '700' }}>15-Min Direct Audit</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Direct strategy with Founder Walid Abdullah.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '22px 20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              <i className="fa-solid fa-video"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: '700' }}>Google Meet / Zoom</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Web conferencing invite delivered instantly.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '22px 20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: '700' }}>Zero Obligation</h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Get actionable retention advice for free.</p>
            </div>
          </div>
        </div>

        {/* GLOBAL OFFICE ADDRESSES & STUDIO HUBS */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '35px' }}>
            <span className="section-subtitle">Global Presence</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>
              Our Studio <span className="combination-font">Locations</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {globalOffices.map((office, idx) => (
              <div
                key={idx}
                className="glass-card pop-hover reveal-on-scroll"
                style={{ padding: '28px 24px', borderRadius: '20px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.2rem', marginBottom: '16px' }}>
                  <i className={office.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '3px' }}>{office.city}</h3>
                <div style={{ color: 'var(--accent-blue-light)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  {office.country}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '16px', flex: 1 }}>
                  {office.address}
                </p>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--accent-blue-light)' }}></i>
                    {office.phone}
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'var(--accent-blue-light)' }}></i>
                    {office.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/8801886755888"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.5)',
          zIndex: 99999,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  );
}
