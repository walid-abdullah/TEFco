"use client";

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BudgetPicker from '@/components/BudgetPicker';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import LogoMarquee from '@/components/LogoMarquee';
import { clientLogos } from '@/data/clientLogos';

function BookACallPageContent() {
  const searchParams = useSearchParams();
  
  const rawService = searchParams.get('service');
  const selectedServiceTitle = rawService || 'Reels & Shorts';
  const rawPlan = searchParams.get('plan');
  const rawBudget = searchParams.get('budget');
  const calendlyNote = searchParams.get('note') || [
    rawService && `Service: ${rawService}`,
    rawPlan && `Package: ${rawPlan}`,
    rawBudget && `Budget: ${rawBudget}`,
  ].filter(Boolean).join('. ');

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
    turnaround: searchParams.get('turnaround') || 'Standard 24–48h',
    budget: rawBudget || '$500',
    details: '',
  });

  const serviceOptions = useMemo(() => [
    'Reels & Shorts',
    'Podcast',
    'Talking Head',
    'UGC Ads',
    'Motion Graphics',
    'Promo & Ads',
    'YouTube Long-Form',
    'Custom / Multi-Format Retainer'
  ], []);

  // Update leadForm service if URL param changes
  useEffect(() => {
    if (rawService) {
      setLeadForm(prev => ({ ...prev, service: rawService }));
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
      alert("Sorry, your message could not be sent. Please try again or WhatsApp us at +880 1886 755 888.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const scope = rawService || rawPlan;

  return (
    <main className="sg-book on-ink">
      <section className="sg-book-hero">
        <div className="sg-book-rays" aria-hidden="true" />
        <div className="container">
          <span className="section-subtitle">{scope ? `About ${scope}` : 'Talk to the founder'}</span>
          <h1>Let&apos;s talk about<br />your next video.</h1>
          <p>Pick a time on Walid Abdullah&apos;s calendar. We will look at your videos and talk through what to do next.</p>
          <div className="sg-book-actions">
            <a href="#calendar" className="sg-book-cta">Pick a time <span aria-hidden="true">↓</span></a>
            <button type="button" className="sg-link" aria-expanded={showBriefForm} onClick={() => setShowBriefForm(!showBriefForm)}>
              {showBriefForm ? 'Hide the quick brief' : 'Send a quick brief instead'}
            </button>
          </div>

          {showBriefForm && (
            <div className="sg-book-brief">
              {submitted ? (
                <p role="status"><strong>Brief sent.</strong> Walid Abdullah received your enquiry about {leadForm.service} and will contact you on WhatsApp.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label>Your name *<input name="name" value={leadForm.name} onChange={handleChange} required placeholder="Full name" /></label>
                  <label>Email *<input type="email" name="email" value={leadForm.email} onChange={handleChange} required placeholder="you@company.com" /></label>
                  <label>WhatsApp number *<input name="whatsapp" value={leadForm.whatsapp} onChange={handleChange} required placeholder="+1 234 567 8900" /></label>
                  <label>Service
                    <select name="service" value={leadForm.service} onChange={handleChange}>
                      {[...new Set([leadForm.service, ...serviceOptions])].map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </label>
                  <BudgetPicker
                    id="brief-budget"
                    initial={parseInt((rawBudget || '').replace(/\D/g, ''), 10) || 500}
                    onChange={(budget) => setLeadForm((prev) => ({ ...prev, budget }))}
                  />
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary">{isSubmitting ? 'Sending...' : 'Send brief'}</button>
                </form>
              )}
            </div>
          )}

        </div>
        <div className="sg-book-logos" aria-label="Selected clients"><LogoMarquee logos={clientLogos} /></div>
      </section>

      <section className="sg-book-calendar" id="calendar">
        <div className="container">
          <div className="sg-calendly-box">
            <CalendlyEmbed note={calendlyNote} title="Book a call with Walid Abdullah" />
          </div>
          <ul className="sg-book-points">
            <li><strong>No commitment</strong><span>Ask anything. There is nothing to sign on the call.</span></li>
            <li><strong>First cut in 24–48 hours</strong><span>Once we start, your first cut arrives quickly.</span></li>
            <li><strong>Unlimited revisions</strong><span>Leave notes on the exact frame you want changed.</span></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default function BookACallPage() {
  return (
    <Suspense fallback={<main className="sg-book on-ink" />}>
      <BookACallPageContent />
    </Suspense>
  );
}
