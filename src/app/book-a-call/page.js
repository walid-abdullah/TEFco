"use client";

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

function BookACallPageContent() {
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const rawService = searchParams.get('service');
  const selectedServiceTitle = rawService ? decodeURIComponent(rawService) : 'Shorts / Reels / TikTok';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showBriefForm, setShowBriefForm] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    service: selectedServiceTitle,
    projectType: 'Monthly Retainer',
    volume: searchParams.get('volume') || '12 - 16 videos / mo',
    turnaround: searchParams.get('turnaround') || 'Standard 48h',
    budget: searchParams.get('budget') ? decodeURIComponent(searchParams.get('budget')) : '$2K - $3.5K',
    details: '',
  });

  const serviceOptions = useMemo(() => [
    'Shorts / Reels / TikTok',
    'Podcast & Clips Editing',
    'YouTube Long-Form',
    'Talking-Head & Authority Videos',
    'SaaS & Product Motion UI',
    'Promo & Commercial Ads',
    'High-CTR YouTube Thumbnails',
    'Custom / Multi-Format Retainer'
  ], []);

  // Update leadForm service if URL param changes
  useEffect(() => {
    if (rawService) {
      setLeadForm(prev => ({ ...prev, service: decodeURIComponent(rawService) }));
    }
  }, [rawService]);

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
        message: leadForm.details || `Service requested: ${leadForm.service}. Budget range: ${leadForm.budget}.`,
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
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Method 3 (Dynamic Calendly Pre-fill Query)
  const calendlyEmbedUrl = useMemo(() => {
    const baseCalendly = "https://calendly.com/w-abdullah5588/30min";
    const noteText = encodeURIComponent(`Interested Service: ${selectedServiceTitle}`);
    const bgColor = isLight ? 'ffffff' : '070d18';
    const textColor = isLight ? '090e1a' : 'ffffff';
    const primaryColor = isLight ? '2563eb' : '38bdf8';

    return `${baseCalendly}?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=${bgColor}&text_color=${textColor}&primary_color=${primaryColor}&a1=${noteText}`;
  }, [selectedServiceTitle, isLight]);

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
    borderRadius: '10px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255, 255, 255, 0.04)',
    color: 'var(--text-primary)',
    padding: '11px 14px',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    outline: 'none',
  };

  return (
    <div className="book-call-page" style={{ paddingTop: '85px', paddingBottom: '50px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background ambient orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '5%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Top Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 16px' }}>
          
          {/* Active Service Badge */}
          {rawService && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '50px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8', fontSize: '0.82rem', fontWeight: '700', marginBottom: '12px' }}>
              <i className="fa-solid fa-clapperboard"></i>
              <span>Selected Scope: <strong>{selectedServiceTitle}</strong></span>
            </div>
          )}

          <h1 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '8px', fontWeight: '800' }}>
            Book a 15-Minute <span className="combination-font">Growth Call</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', margin: '0 auto', maxWidth: '640px' }}>
            Pick a time slot directly on Walid Abdullah’s calendar below to audit your video assets and discuss production timelines.
          </p>
        </div>

        {/* Minimal Optional Quick-Brief Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <button
            onClick={() => setShowBriefForm(!showBriefForm)}
            className="btn btn-outline"
            style={{
              padding: '7px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: showBriefForm ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
              borderColor: showBriefForm ? '#38BDF8' : 'var(--glass-border)'
            }}
          >
            <i className={`fa-solid ${showBriefForm ? 'fa-xmark' : 'fa-bolt'}`} style={{ color: '#38BDF8' }}></i>
            <span>{showBriefForm ? 'Hide Quick Brief' : 'Want instant WhatsApp contact? Send quick brief (Optional)'}</span>
          </button>
        </div>

        {/* METHOD 1: Minimal Pre-Filled Quick Brief Form */}
        {showBriefForm && (
          <div className="glass-card" style={{
            maxWidth: '1080px',
            margin: '0 auto 20px',
            padding: '20px',
            borderRadius: '16px',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 10px', color: 'var(--text-primary)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.12)', color: '#22C55E', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: '8px' }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Brief Logged Successfully!</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.86rem' }}>Walid Abdullah received your inquiry regarding <strong>{leadForm.service}</strong>. Now pick your call time below!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '10px' }}>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem' }}>
                  Your Name *
                  <input name="name" value={leadForm.name} onChange={handleChange} required style={inputStyle} placeholder="Full Name" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem' }}>
                  Email Address *
                  <input type="email" name="email" value={leadForm.email} onChange={handleChange} required style={inputStyle} placeholder="you@company.com" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem' }}>
                  WhatsApp Number *
                  <input name="whatsapp" value={leadForm.whatsapp} onChange={handleChange} required style={inputStyle} placeholder="+1 234 567 8900" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem' }}>
                  Service Needed
                  <select name="service" value={leadForm.service} onChange={handleChange} style={inputStyle}>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} style={{ background: '#0F172A', color: '#fff' }}>{service}</option>
                    ))}
                  </select>
                </label>
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '9px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.86rem' }}>
                    {isSubmitting ? 'Logging...' : 'Send Brief & Notify Walid'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* METHOD 3: Calendly Embed with Pre-filled URL parameter */}
        <div 
          className="glass-card" 
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            background: isLight ? '#FFFFFF' : 'rgba(7, 13, 24, 0.95)',
            border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid var(--glass-border)',
            boxShadow: isLight ? '0 15px 40px rgba(0, 0, 0, 0.08)' : '0 25px 70px rgba(0, 0, 0, 0.4)',
            maxWidth: '1080px',
            margin: '0 auto 24px',
            height: '620px',
            position: 'relative'
          }}
        >
          <iframe
            key={calendlyEmbedUrl}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          maxWidth: '1280px',
          margin: '0 auto 50px'
        }}>
          <div className="glass-card" style={{ padding: '18px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '0.94rem', fontWeight: '700' }}>15-Min Direct Audit</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Direct strategy with Founder Walid Abdullah.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '18px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
              <i className="fa-solid fa-video"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '0.94rem', fontWeight: '700' }}>Google Meet / Zoom</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Invite link delivered directly to your calendar.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '18px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '0.94rem', fontWeight: '700' }}>Zero Obligation</h4>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Get actionable retention advice for free.</p>
            </div>
          </div>
        </div>

        {/* Global Studio Locations */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <span className="section-subtitle" style={{ fontSize: '0.78rem' }}>Global Hubs</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
              Studio <span className="combination-font">Locations</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {globalOffices.map((office, idx) => (
              <div
                key={idx}
                className="glass-card pop-hover"
                style={{ padding: '22px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', fontSize: '1.1rem', marginBottom: '12px' }}>
                  <i className={office.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '2px' }}>{office.city}</h3>
                <div style={{ color: 'var(--accent-blue-light)', fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {office.country}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.4', marginBottom: '12px', flex: 1 }}>
                  {office.address}
                </p>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.82rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <i className="fa-solid fa-phone" style={{ marginRight: '6px', color: 'var(--accent-blue-light)' }}></i>
                    {office.phone}
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <i className="fa-solid fa-envelope" style={{ marginRight: '6px', color: 'var(--accent-blue-light)' }}></i>
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
          bottom: '24px',
          right: '24px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          zIndex: 99999,
          transition: 'transform 0.3s ease'
        }}
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
