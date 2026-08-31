"use client";

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

function BookACallPageContent() {
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [calendlyUrl, setCalendlyUrl] = useState("https://calendly.com/w-abdullah5588/30min");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showBriefForm, setShowBriefForm] = useState(false);

  const buildLeadForm = (params) => {
    const serviceFromUrl = params.get('service');
    const volumeFromUrl = params.get('volume');
    const turnaroundFromUrl = params.get('turnaround');
    const budgetFromUrl = params.get('budget');

    return {
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      service: serviceFromUrl ? decodeURIComponent(serviceFromUrl) : 'Shorts / Reels / TikTok',
      projectType: 'Monthly Retainer',
      volume: volumeFromUrl || '12 - 16 videos / mo',
      turnaround: turnaroundFromUrl || 'Standard 48h',
      budget: budgetFromUrl ? decodeURIComponent(budgetFromUrl) : '$2K - $3.5K',
      details: '',
    };
  };

  const [leadForm, setLeadForm] = useState(() => buildLeadForm(searchParams));

  const serviceOptions = useMemo(() => [
    'Shorts / Reels / TikTok',
    'Podcast & Clips Editing',
    'YouTube Long-Form',
    'UGC / Ads Editing',
    'SaaS / Product Motion',
    'Custom / Multi-Format Retainer'
  ], []);

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
  }, [calendlyUrl]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: leadForm.name,
        email: leadForm.email,
        whatsapp: leadForm.whatsapp,
        company: leadForm.company,
        service: leadForm.service,
        projectType: leadForm.projectType,
        monthlyVolume: leadForm.volume,
        budget: leadForm.budget,
        turnaround: leadForm.turnaround,
        channelLink: leadForm.company,
        needs: `${leadForm.projectType} — ${leadForm.service}`,
        message: leadForm.details || `Project type: ${leadForm.projectType}. Estimated range: ${leadForm.budget}. Turnaround: ${leadForm.turnaround}.`,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
      setLeadForm({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        service: 'Shorts / Reels / TikTok',
        projectType: 'Monthly Retainer',
        volume: '12 - 16 videos / mo',
        budget: '$2K - $3.5K',
        turnaround: 'Standard 48h',
        details: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const inputStyle = {
    width: '100%',
    borderRadius: '12px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255, 255, 255, 0.03)',
    color: 'var(--text-primary)',
    padding: '12px 14px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
  };

  const calendlyEmbedUrl = useMemo(() => {
    if (isLight) {
      return `${calendlyUrl}?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=ffffff&text_color=090e1a&primary_color=2563eb`;
    }
    return `${calendlyUrl}?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=38bdf8`;
  }, [calendlyUrl, isLight]);

  return (
    <div className="book-call-page" style={{ paddingTop: '75px', paddingBottom: '60px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background ambient orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '5%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Top Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
          <span className="section-subtitle" style={{ fontSize: '0.82rem', marginBottom: '6px' }}>Discovery Session</span>
          <h1 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '10px' }}>
            Book a 15-Minute <span className="combination-font">Growth Audit</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', margin: '0 auto', maxWidth: '650px' }}>
            Select a convenient time below to audit your video retention, analyze bottlenecks, and explore our editing retainers.
          </p>
        </div>

        {/* Optional Brief Toggle Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <button
            onClick={() => setShowBriefForm(!showBriefForm)}
            className="btn btn-outline"
            style={{
              padding: '8px 18px',
              borderRadius: '30px',
              fontSize: '0.82rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className={`fa-solid ${showBriefForm ? 'fa-xmark' : 'fa-clipboard-list'}`} style={{ color: 'var(--accent-blue-light)' }}></i>
            <span>{showBriefForm ? 'Close Project Brief Form' : 'Fill Pre-Call Project Brief (Optional)'}</span>
          </button>
        </div>

        {showBriefForm && (
          <div className="glass-card" style={{
            maxWidth: '1100px',
            margin: '0 auto 24px',
            padding: '24px 20px',
            borderRadius: '20px',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <div>
                <span className="section-subtitle" style={{ marginBottom: '4px', display: 'inline-block' }}>Pre-qualify your project</span>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Tell us what you need before the call</h3>
              </div>
              <div style={{ padding: '6px 12px', borderRadius: '999px', background: 'rgba(34, 197, 94, 0.12)', color: '#22C55E', border: '1px solid rgba(34, 197, 94, 0.3)', fontWeight: 700, fontSize: '0.75rem' }}>
                Response within 10 minutes
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 12px 6px', color: 'var(--text-primary)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.12)', color: '#22C55E', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '10px' }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 style={{ marginBottom: '6px' }}>Project brief received</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem' }}>We’ve got your details and will review them before the strategy session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '0.85rem' }}>
                  Full name
                  <input name="name" value={leadForm.name} onChange={handleChange} required style={inputStyle} placeholder="Your name" />
                </label>
                <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '0.85rem' }}>
                  Email
                  <input type="email" name="email" value={leadForm.email} onChange={handleChange} required style={inputStyle} placeholder="you@brand.com" />
                </label>
                <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '0.85rem' }}>
                  WhatsApp / Phone
                  <input name="whatsapp" value={leadForm.whatsapp} onChange={handleChange} required style={inputStyle} placeholder="+1 555 123 4567" />
                </label>
                <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '0.85rem' }}>
                  Service
                  <select name="service" value={leadForm.service} onChange={handleChange} style={inputStyle}>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '10px 22px', borderRadius: '10px', fontWeight: 800, fontSize: '0.88rem' }}>
                    {isSubmitting ? 'Sending...' : 'Submit Brief'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Compact Calendly Frame */}
        <div 
          className="glass-card" 
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            background: isLight ? '#FFFFFF' : 'rgba(7, 13, 24, 0.95)',
            border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid var(--glass-border)',
            boxShadow: isLight ? '0 15px 40px rgba(0, 0, 0, 0.08)' : '0 25px 70px rgba(0, 0, 0, 0.4)',
            maxWidth: '1080px',
            margin: '0 auto 30px',
            height: '620px',
            position: 'relative'
          }}
        >
          <iframe
            key={isLight ? 'calendly-light' : 'calendly-dark'}
            src={calendlyEmbedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a Strategy Session with Walid Abdullah"
            style={{ minWidth: '320px', width: '100%', height: '100%', border: 'none' }}
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

export default function BookACallPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>Loading booking page...</div>}>
      <BookACallPageContent />
    </Suspense>
  );
}
