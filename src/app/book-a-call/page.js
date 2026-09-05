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
    budget: searchParams.get('budget') ? decodeURIComponent(searchParams.get('budget')) : '$999 - $1,499 / mo',
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
    const bgColor = isLight ? 'ffffff' : '080c14';
    const textColor = isLight ? '090e1a' : 'ffffff';
    const primaryColor = isLight ? '2563eb' : '38bdf8';

    return `${baseCalendly}?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=${bgColor}&text_color=${textColor}&primary_color=${primaryColor}&a1=${noteText}`;
  }, [selectedServiceTitle, isLight]);

  const inputStyle = {
    width: '100%',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.03)',
    color: '#FFFFFF',
    padding: '10px 14px',
    fontSize: '0.88rem',
    fontFamily: 'inherit',
    outline: 'none',
  };

  return (
    <div className="book-call-page" style={{ paddingTop: '95px', paddingBottom: '60px', minHeight: '100vh', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Top Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
          
          {/* Active Service Badge */}
          {rawService && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '999px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', fontSize: '0.78rem', fontWeight: '700', marginBottom: '12px' }}>
              <i className="fa-solid fa-clapperboard"></i>
              <span className="mono-spec">SCOPE: <strong>{selectedServiceTitle}</strong></span>
            </div>
          )}

          <h1 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '10px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Book a 15-Minute <span className="combination-font">Technical Growth Audit</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', margin: '0 auto 20px', maxWidth: '640px' }}>
            Pick a time slot directly on Walid Abdullah’s calendar below to audit your video assets and discuss production timelines.
          </p>
        </div>

        {/* Minimal Optional Quick-Brief Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <button
            onClick={() => setShowBriefForm(!showBriefForm)}
            className="btn btn-outline"
            style={{
              padding: '7px 16px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: showBriefForm ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
              borderColor: showBriefForm ? '#38BDF8' : 'rgba(255, 255, 255, 0.1)'
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
            borderRadius: '12px',
            background: '#080C14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 10px', color: '#FFFFFF' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.12)', color: '#22C55E', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: '8px' }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Brief Logged Successfully!</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.86rem' }}>Walid Abdullah received your inquiry regarding <strong>{leadForm.service}</strong>. Now pick your call time below!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '10px' }}>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem', color: '#FFFFFF' }}>
                  Your Name *
                  <input name="name" value={leadForm.name} onChange={handleChange} required style={inputStyle} placeholder="Full Name" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem', color: '#FFFFFF' }}>
                  Email Address *
                  <input type="email" name="email" value={leadForm.email} onChange={handleChange} required style={inputStyle} placeholder="you@company.com" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem', color: '#FFFFFF' }}>
                  WhatsApp Number *
                  <input name="whatsapp" value={leadForm.whatsapp} onChange={handleChange} required style={inputStyle} placeholder="+1 234 567 8900" />
                </label>
                <label style={{ display: 'grid', gap: '4px', fontWeight: 700, fontSize: '0.82rem', color: '#FFFFFF' }}>
                  Service Needed
                  <select name="service" value={leadForm.service} onChange={handleChange} style={inputStyle}>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} style={{ background: '#080C14', color: '#fff' }}>{service}</option>
                    ))}
                  </select>
                </label>
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '8px 18px', borderRadius: '6px', fontWeight: 700, fontSize: '0.84rem' }}>
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
            background: '#080C14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8)',
            maxWidth: '1080px',
            margin: '0 auto 30px',
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

        {/* Technical Reassurance Spec Pods */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '18px', borderRadius: '10px', background: '#080C14', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="mono-spec" style={{ color: '#38BDF8', marginBottom: '4px' }}>01. ZERO COMMITMENT</div>
            <h4 style={{ margin: '0 0 4px', fontSize: '0.96rem', fontWeight: '700', color: '#FFFFFF' }}>15-Min Technical Audit</h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>We analyze your current watch-time retention curve and outline custom editing optimizations.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '10px', background: '#080C14', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="mono-spec" style={{ color: '#10B981', marginBottom: '4px' }}>02. FRAME.IO PIPELINE</div>
            <h4 style={{ margin: '0 0 4px', fontSize: '0.96rem', fontWeight: '700', color: '#FFFFFF' }}>48h SLA &amp; Direct Revisions</h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Leave timecoded feedback directly inside private review links with same-day adjustments.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '10px', background: '#080C14', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="mono-spec" style={{ color: '#8B5CF6', marginBottom: '4px' }}>03. BROADCAST MASTER</div>
            <h4 style={{ margin: '0 0 4px', fontSize: '0.96rem', fontWeight: '700', color: '#FFFFFF' }}>ProRes &amp; Multitrack Sound</h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Every project includes full 4K source delivery, -14 LUFS loudness mastering, and project files.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function BookACallPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading Growth Session...</div>}>
      <BookACallPageContent />
    </Suspense>
  );
}
