"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PricingSection from '@/components/PricingSection';
import BenefitsBento from '@/components/BenefitsBento';
import DesignMonksContact from '@/components/DesignMonksContact';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const pricingFaqs = [
    {
      q: "How does the monthly subscription work?",
      a: "Once subscribed, you get a dedicated video editing pod (Senior Editor, Motion Designer & Art Director) in your private Slack/WhatsApp channel. You can submit video requests anytime. We edit and deliver them one by one (or two concurrently on the Growth plan) with an average turnaround of 24-48 hours."
    },
    {
      q: "Can I pause or cancel my subscription anytime?",
      a: "Yes! There are zero long-term contracts. If you have fewer videos to edit in a particular month, you can pause your membership and resume whenever your footage is ready. You will never lose any paid days."
    },
    {
      q: "What is your revision policy?",
      a: "We offer 100% unlimited revisions on all plans. We will adjust the pacing, sound effects, captions, B-roll, and color grading until you are completely satisfied with the final asset."
    },
    {
      q: "How do we send our raw footage and assets?",
      a: "We provide you with a dedicated Google Drive or Dropbox shared folder. You simply upload your raw footage, zoom recordings, or audio files, and our ingestion team logs them immediately."
    },
    {
      q: "Are source files (Premiere / After Effects) included?",
      a: "Yes, on our Growth and Enterprise retainers, we deliver full editable project files (.prproj / .aep) along with all exported assets upon request."
    },
    {
      q: "Do you sign NDAs for confidential footage?",
      a: "Absolutely. We routinely sign Non-Disclosure Agreements with venture-backed startups, high-profile creators, and agencies to protect unreleased products and private media."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pricing-page-full" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      
      {/* 1. Main Pricing Section with Monthly/Quarterly Toggle */}
      <PricingSection 
        subtitle="Transparent Studio Retainers"
        title1="World-Class Video Production at a"
        title2="Predictable Monthly Rate"
        description="No hidden fees. No hourly billing surprises. Pause or cancel your membership anytime."
      />

      {/* 2. Benefits of Membership Pipeline */}
      <BenefitsBento />

      {/* 5. Deep Pricing FAQ Section (Musemind Style) */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '50px' }}>
            <span className="section-subtitle">Got Questions?</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: '800' }}>
              Frequently Asked <span className="combination-font">Questions</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Everything you need to know about our retainers, turnaround, and workflow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: openFaq === idx ? '1px solid #38BDF8' : '1px solid var(--glass-border)',
                  transition: 'border-color 0.3s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: openFaq === idx ? 'var(--accent-blue-primary)' : 'rgba(255,255,255,0.06)',
                    color: openFaq === idx ? '#FFFFFF' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    transition: 'transform 0.3s ease',
                    transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                    flexShrink: 0,
                    marginLeft: '15px'
                  }}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {openFaq === idx && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.96rem',
                    lineHeight: '1.7',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '16px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Design Monks Project Inquiry Section */}
      <DesignMonksContact />

    </div>
  );
}
