"use client";

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function DesignMonksContact({ isModal = false, onClose = null }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Engagement Type (Monthly Retainer vs One-Time Project)
  const [projectType, setProjectType] = useState('monthly'); // 'monthly' | 'onetime'

  // Services Multiselect
  const serviceList = [
    'Podcast & Clips Editing',
    'Long-Form Content (YouTube)',
    'SaaS & 3D Motion UI',
    'Shorts / Reels / TikTok',
    'Others'
  ];
  const [selectedServices, setSelectedServices] = useState(['Podcast & Clips Editing']);

  // Monthly Video Count Options
  const monthlyVideoCountOptions = [
    '4 - 8 Videos / mo',
    '12 - 16 Videos / mo',
    '20 - 30 Videos / mo',
    '30+ Videos / mo'
  ];
  const [selectedVideoCount, setSelectedVideoCount] = useState('12 - 16 Videos / mo');

  // Refined Lower-Entry Budget Options
  const monthlyBudgetOptions = [
    '$999/mo (Starter Pod)',
    '$1,499/mo (Growth Retainer)',
    '$2,499/mo (Scale)',
    '$3.5K - $5K/mo',
    '$5K+/mo (Enterprise)'
  ];
  const onetimeBudgetOptions = [
    'Under $500',
    '$500 - $1K',
    '$1K - $2.5K',
    'Custom Scope'
  ];

  const [selectedBudget, setSelectedBudget] = useState('$999/mo (Starter Pod)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleProjectTypeChange = (type) => {
    setProjectType(type);
    if (type === 'monthly') {
      setSelectedBudget('Less than $1K');
    } else {
      setSelectedBudget('$500 - $1K');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim() || firstName || 'Client';

    const data = {
      fullName: fullName,
      firstName: firstName,
      lastName: lastName,
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      projectType: projectType === 'monthly' ? 'Monthly Dedicated Retainer' : 'One-Time Project',
      services: selectedServices.join(', '),
      videoCount: projectType === 'monthly' ? selectedVideoCount : 'N/A (One-Time)',
      budget: selectedBudget,
      details: formData.get('details')
    };

    const formattedMessage = `[Engagement: ${data.projectType}]\n` +
      `[Services: ${data.services}]\n` +
      (projectType === 'monthly' ? `[Monthly Volume: ${data.videoCount}]\n` : '') +
      `[Project Budget: ${data.budget}]\n\n` +
      `${data.details || 'No additional notes provided.'}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          whatsapp: data.whatsapp,
          phone: data.whatsapp,
          service: data.services,
          needs: `${data.projectType} (${data.services})`,
          budget: data.budget,
          message: formattedMessage
        })
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Thank you! We received your inquiry.");
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formCardContent = (
    <div
      className="apple-glass-panel"
      style={{
        background: isLight ? 'rgba(255, 255, 255, 0.88)' : 'rgba(13, 19, 36, 0.72)',
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        border: isLight ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.14)',
        borderRadius: '24px',
        padding: '28px 36px',
        boxShadow: isLight ? '0 20px 50px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255,255,255,1)' : '0 25px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)',
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      {/* Close button if rendered as Modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          type="button"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.15)',
            color: '#22C55E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
            margin: '0 auto 16px',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}>
            <i className="fa-solid fa-check"></i>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
            Project Brief Received!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 20px', lineHeight: '1.5' }}>
            We’ve received your details. Our Executive Producer Walid Abdullah will review your brand and reach out directly to your <strong>WhatsApp & Email</strong> shortly.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.18)', color: 'var(--accent-silver)', fontSize: '0.84rem', fontWeight: '600', marginBottom: '25px' }}>
            <i className="fa-solid fa-clock"></i>
            <span>Guaranteed response within 0-10 minutes</span>
          </div>

          {/* Direct 1-Click WhatsApp Instant Chat Button */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a
              href="https://wa.me/8801886755888?text=Hi%20Walid,%20I%20just%20submitted%20a%20project%20brief%20on%20The%20Editly%20Foundry%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: '#25D366',
                borderColor: '#25D366',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '0.95rem'
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
              <span>Chat on WhatsApp Directly</span>
            </a>

            <a
              href="https://calendly.com/w-abdullah5588/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem'
              }}
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book 15-Min Intro Call</span>
            </a>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      ) : (
        <div 
          className="contact-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '35px',
            alignItems: 'start'
          }}
        >
          {/* LEFT COLUMN: Headings, Value Points & Studio Brief */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{
                fontSize: '2.4rem',
                lineHeight: '1.15',
                fontWeight: '800',
                marginBottom: '18px',
                color: 'var(--text-primary)'
              }}>
                Build Your Next High-Impact <br />
                <span className="combination-font" style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-silver)' }}>
                  Video Campaign
                </span>
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.4' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1.5px solid #38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontSize: '0.7rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <span>Guaranteed 24 to 48-hour turnaround on initial drafts</span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.4' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1.5px solid #38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontSize: '0.7rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <span>Strict NDA & 100% intellectual property ownership transfer</span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.4' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1.5px solid #38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontSize: '0.7rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className="fa-solid fa-users-gear"></i>
                  </div>
                  <span>Dedicated Senior Video Editor + Motion Graphics Lead</span>
                </li>
              </ul>
            </div>

            {/* Studio Brief: a useful conversion signal without a distracting video */}
            <div className={`studio-brief-panel ${isLight ? 'is-light' : ''}`}>
              <div className="studio-brief-topline">
                <span className="mono-spec">THE EDITLY FOUNDRY / LIVE BRIEF</span>
                <span className="studio-brief-status">
                  <span />
                  ACCEPTING PROJECTS
                </span>
              </div>
              <div className="studio-brief-main">
                <div className="studio-brief-mark" aria-hidden="true">
                  <i className="fa-solid fa-arrow-trend-up" />
                </div>
                <div>
                  <span className="mono-spec">YOUR RAW MATERIAL</span>
                  <h3>Arrives messy.</h3>
                  <p>Leaves as a repeatable content engine.</p>
                </div>
              </div>
              <div className="studio-brief-track" aria-hidden="true">
                <span className="studio-brief-track-line" />
                <span className="studio-brief-track-node">RAW</span>
                <span className="studio-brief-track-node">SHAPE</span>
                <span className="studio-brief-track-node">RELEASE</span>
              </div>
              <div className="studio-brief-footer">
                <span>EDITORIAL DIRECTION</span>
                <span>×</span>
                <span>MOTION CRAFT</span>
                <span>×</span>
                <span>RELIABLE DELIVERY</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* First Name & Last Name Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>
            </div>

            {/* Email & Whatsapp Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="yourmail@gmail.com"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Whatsapp Number
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    position: 'absolute',
                    left: '14px',
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    pointerEvents: 'none'
                  }}>
                    <i className="fa-solid fa-globe"></i>
                  </span>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+1 234 567 8900"
                    style={{
                      width: '100%',
                      padding: '14px 18px 14px 42px',
                      borderRadius: '12px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--input-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 1. Ultra-Compact Services & Project Setup Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              
              {/* Primary Service Selector (Dropdown) */}
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Service Needed *
                </label>
                <select
                  value={selectedServices[0]}
                  onChange={(e) => setSelectedServices([e.target.value])}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {serviceList.map(srv => (
                    <option key={srv} value={srv} style={{ background: isLight ? '#fff' : '#0B132B', color: isLight ? '#000' : '#fff' }}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Engagement Type Selector (Segmented Tab) */}
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Engagement Type
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', background: 'var(--input-bg)', padding: '4px', borderRadius: '10px', border: '1px solid var(--input-border)' }}>
                  <button
                    type="button"
                    onClick={() => handleProjectTypeChange('monthly')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '7px',
                      border: 'none',
                      background: projectType === 'monthly' ? (isLight ? '#2563EB' : '#38BDF8') : 'transparent',
                      color: projectType === 'monthly' ? '#FFFFFF' : 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: projectType === 'monthly' ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Monthly Retainer
                  </button>
                  <button
                    type="button"
                    onClick={() => handleProjectTypeChange('onetime')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '7px',
                      border: 'none',
                      background: projectType === 'onetime' ? (isLight ? '#2563EB' : '#38BDF8') : 'transparent',
                      color: projectType === 'onetime' ? '#FFFFFF' : 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: projectType === 'onetime' ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    One-Time Project
                  </button>
                </div>
              </div>

            </div>

            {/* 2. Output Volume (If Monthly) & Dynamic Budget Row */}
            <div style={{ display: 'grid', gridTemplateColumns: projectType === 'monthly' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr', gap: '14px' }}>
              
              {/* Monthly Video Output Count */}
              {projectType === 'monthly' && (
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Monthly Output Needed
                  </label>
                  <select
                    value={selectedVideoCount}
                    onChange={(e) => setSelectedVideoCount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--input-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {monthlyVideoCountOptions.map(cnt => (
                      <option key={cnt} value={cnt} style={{ background: isLight ? '#fff' : '#0B132B', color: isLight ? '#000' : '#fff' }}>
                        {cnt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Dynamic Budget Dropdown */}
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Estimated Budget {projectType === 'monthly' ? '(Per Month)' : '(One-Off Scope)'}
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {(projectType === 'monthly' ? monthlyBudgetOptions : onetimeBudgetOptions).map(b => (
                    <option key={b} value={b} style={{ background: isLight ? '#fff' : '#0B132B', color: isLight ? '#000' : '#fff' }}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* 3. Project Details */}
            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                {projectType === 'monthly' ? 'Project Requirements & Channel Link' : 'Custom Project Scope & Timeline'}
              </label>
              <textarea
                name="details"
                rows="2"
                placeholder={projectType === 'monthly' 
                  ? "Share your YouTube/brand link or specific style references..." 
                  : "Describe your one-time video requirement, duration, and target deadline..."}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--input-border)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn pop-btn"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 100%)',
                  color: '#FFFFFF',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.14)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <span>{isSubmitting ? 'Sending Request...' : "Send Project Brief"}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div
        className="modal-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '1150px' }}>
          {formCardContent}
        </div>
      </div>
    );
  }

  return (
    <div id="contact" style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
      {formCardContent}
    </div>
  );
}
