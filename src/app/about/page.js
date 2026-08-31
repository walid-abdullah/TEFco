"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Raw Footage Ingestion & Sync',
      desc: 'You upload your raw multi-cam footage, phone recordings, or podcast audio to a dedicated cloud drive (Google Drive / Dropbox). Our ingest team logs and cleans the files immediately.',
      icon: 'fa-solid fa-cloud-arrow-up'
    },
    {
      step: '02',
      title: '3-Second Retention Hook Engineering',
      desc: 'Our senior content strategist cuts the most gripping opening statement and sound interrupt, ensuring the first 3 seconds stop the audience from scrolling.',
      icon: 'fa-solid fa-crosshairs'
    },
    {
      step: '03',
      title: 'Kinetic Motion, SFX & Color Grading',
      desc: 'Dedicated motion designers craft animated captions, sound effects, B-roll overlays, and custom color grades tailored to your brand identity.',
      icon: 'fa-solid fa-wand-magic-sparkles'
    },
    {
      step: '04',
      title: 'Art Director QA & 48h Delivery',
      desc: 'Every video passes through our Art Director review before delivery directly to your Slack/WhatsApp channel. Need a tweak? Revisions are unlimited.',
      icon: 'fa-solid fa-circle-check'
    }
  ];

  /* 
    ==========================================================================
    NOTE FOR YOU (MANUAL CONFIGURATION):
    You can replace team photos, founder bio, and office details below!
    ==========================================================================
  */
  const leadershipTeam = [
    {
      name: 'Walid Abdullah',
      role: 'Founder & Executive Producer',
      bio: 'Pioneering high-retention video systems, Walid leads the strategic vision at The Editly Foundry, helping founders and creators scale past millions of views.',
      image: '/Picture/square.png', // Replace with your real photo path
      social: {
        linkedin: 'https://www.linkedin.com/in/walid-abdullah/',
        facebook: 'https://www.facebook.com/editly.foundry/',
        instagram: 'https://www.instagram.com/theeditly_foundry/'
      }
    }
  ];

  const globalHubs = [
    { city: 'Dhaka', country: 'Bangladesh', desc: 'Central Creative Production Studio & Editing Lab', icon: 'fa-solid fa-building' },
    { city: 'Dubai', country: 'United Arab Emirates', desc: 'Middle East Strategy & Client Relations', icon: 'fa-solid fa-globe' },
    { city: 'New York', country: 'United States', desc: 'US Growth & Enterprise Media Partnerships', icon: 'fa-solid fa-city' }
  ];

  return (
    <div className="about-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* Background Orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', right: '-10%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '40%', left: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
          <span className="section-subtitle">About The Editly Foundry Co.</span>
          <h1 className="section-title" style={{ fontSize: '3.4rem', marginBottom: '20px' }}>
            Where Creative Vision Meets <span className="combination-font">Algorithmic Precision</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.7' }}>
            We are a specialized video post-production house built from the ground up for modern brands, founders, and media agencies who value retention, speed, and uncompromising quality.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          margin: '0 auto 90px',
          maxWidth: '1280px'
        }}>
          <div className="glass-card reveal-on-scroll" style={{ padding: '40px', borderRadius: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.3rem', marginBottom: '20px' }}>
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px' }}>Our Core Philosophy</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Most video editing fails because editors focus on random transitions rather than audience retention psychology. We study viewer drop-off points, design scroll-stopping hooks, and treat every second of footage as valuable real estate.
            </p>
          </div>

          <div className="glass-card reveal-on-scroll" style={{ padding: '40px', borderRadius: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', fontSize: '1.3rem', marginBottom: '20px' }}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px' }}>The Productized Promise</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              No lengthy employment contracts, no freelancer ghosting, and no unpredictable invoices. Just a predictable monthly subscription that gives you a world-class editing pod ready to scale your output seamlessly.
            </p>
          </div>
        </div>

        {/* 48-Hour Production Pipeline (Musemind Style Process) */}
        <div className="glass-card reveal-on-scroll" style={{
          padding: '60px 40px',
          borderRadius: '32px',
          maxWidth: '1280px',
          margin: '0 auto 90px'
        }}>
          <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 50px' }}>
            <span className="section-subtitle">Our Systematic Workflow</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: '800', marginBottom: '15px' }}>
              The 48-Hour <span className="combination-font">Studio Pipeline</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              From the minute you drop raw footage to the final polished export ready to publish.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  padding: '30px 24px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'var(--accent-blue-light)',
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: '15px',
                  opacity: 0.8
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder & Leadership Section */}
        <div style={{ maxWidth: '1500px', margin: '0 auto 90px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '45px' }}>
            <span className="section-subtitle">Studio Leadership</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: '800' }}>
              The Minds Behind <span className="combination-font">The Editly Foundry</span>
            </h2>
          </div>

          {leadershipTeam.map((leader, i) => (
            <div
              key={i}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                border: '1px solid var(--glass-border)'
              }}
            >
              <div style={{ aspectRatio: '1/1', maxHeight: '420px', overflow: 'hidden' }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="420"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '6px' }}>{leader.name}</h3>
                <div style={{ color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '20px' }}>
                  {leader.role}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                  {leader.bio}
                </p>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '15px' }}>
                  {leader.social.linkedin && (
                    <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', transition: 'color 0.3s' }}>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  )}
                  {leader.social.facebook && (
                    <a href={leader.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', transition: 'color 0.3s' }}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  )}
                  {leader.social.instagram && (
                    <a href={leader.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', transition: 'color 0.3s' }}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence Section (Musemind Style) */}
        <div style={{ maxWidth: '1500px', margin: '0 auto 80px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle">Global Reach</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800' }}>
              Serving Creators & Brands <span className="combination-font">Worldwide</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {globalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="glass-card reveal-on-scroll"
                style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2rem', color: 'var(--accent-blue-light)', marginBottom: '12px' }}>
                  <i className={hub.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '4px' }}>{hub.city}</h3>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase' }}>
                  {hub.country}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center reveal-on-scroll" style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(2, 132, 199, 0.1) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '30px',
          padding: '60px 30px',
          maxWidth: '1500px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>
            Let's Engineer Your Next Viral Campaign
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Ready to experience 24-48h video production? Book your free 15-minute consultation today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link href="/book-a-call" className="btn btn-primary btn-lg pop-btn">
              <span>Book Strategy Call</span>
              <i className="fa-solid fa-calendar-check"></i>
            </Link>
            <Link href="/work" className="btn btn-outline btn-lg pop-btn">
              <span>Explore Portfolio</span>
              <i className="fa-solid fa-play"></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
