"use client";

import React, { useState } from 'react';
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
    <main className="pricing-page-full">
      
      {/* 1. Main Pricing Section with Monthly/Quarterly Toggle */}
      <PricingSection 
        subtitle="Transparent Studio Retainers"
        title1="World-Class Video Production at a"
        title2="Predictable Monthly Rate"
        description="Dedicated post-production capacity without the overhead of building an in-house team. Choose the rhythm that matches your ambition."
      />

      {/* 2. Benefits of Membership Pipeline */}
      <BenefitsBento />

      {/* 5. Deep Pricing FAQ Section (Musemind Style) */}
      <section className="pricing-faq-section section-padding" style={{ position: 'relative' }}>
        <div className="container pricing-faq-container">
          <div className="pricing-faq-heading text-center reveal-on-scroll">
            <span className="section-subtitle">Got Questions?</span>
            <h2>
              Frequently Asked <span className="combination-font">Questions</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Everything you need to know about our retainers, turnaround, and workflow.
            </p>
          </div>

          <div className="pricing-faq-list">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`pricing-faq-item glass-card ${openFaq === idx ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="pricing-faq-trigger"
                  aria-expanded={openFaq === idx}
                  aria-controls={`pricing-faq-answer-${idx}`}
                >
                  <span>{faq.q}</span>
                  <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
                </button>

                {openFaq === idx && (
                  <div id={`pricing-faq-answer-${idx}`} className="pricing-faq-answer">
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

    </main>
  );
}
