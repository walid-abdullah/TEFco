"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingSection({ subtitle, title1, title2, description, pricingData = [] }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly'

  const defaultPlans = [
    {
      id: 'starter',
      name: 'Starter Creator',
      badge: '3 Slots Available',
      badgeType: 'normal',
      description: 'Ideal for solo creators and brands scaling short-form content regularly.',
      monthlyPrice: 1499,
      quarterlyPrice: 1274, // 15% discount
      duration: '/ month',
      isPopular: false,
      features: [
        '15 Short-Form Videos (Reels, TikTok, Shorts)',
        '48-Hour Standard Turnaround',
        'Animated Captions & Kinetic Typography',
        'Sound Design & Trending Audio Sync',
        'Dedicated Slack & WhatsApp Channel',
        '1 Active Request at a Time',
        'Unlimited Revisions',
        'Unused Video Rollover',
        'Cancel or Pause Anytime'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Brand',
      badge: '🔥 Only 2 Slots Left, Hurry!',
      badgeType: 'hot',
      description: 'Our most popular plan for businesses demanding high-converting video authority.',
      monthlyPrice: 2899,
      quarterlyPrice: 2464, // 15% discount
      duration: '/ month',
      isPopular: true,
      features: [
        '30 Short-Form Videos (Reels / TikTok / UGC)',
        'Up to 2 Long-Form Videos (Podcasts / YouTube)',
        '24 to 48-Hour Priority Turnaround',
        'Custom High-CTR YouTube Thumbnails',
        'Senior Art Director & Dedicated Lead Editor',
        '2 Active Concurrent Requests',
        'Weekly Strategy & Growth Sync Calls',
        'Source File Delivery (Premiere / After Effects)',
        'Unlimited Revisions & VIP Slack Support'
      ]
    },
    {
      id: 'scale',
      name: 'Scale & Enterprise',
      badge: 'Custom Team',
      badgeType: 'custom',
      description: 'Dedicated multi-editor production pod for venture-backed startups and high-volume media brands.',
      monthlyPrice: null, // Custom
      quarterlyPrice: null,
      customText: 'Custom Quote',
      duration: '',
      isPopular: false,
      features: [
        'Dedicated 3-Editor Video Production Pod',
        'Unlimited Video Requests & Unlimited Output',
        'Same-Day / 24-Hour Express Turnaround',
        'Full 2D/3D Motion Graphics & SaaS UI Demos',
        'Multi-Camera Podcast & Studio Master Production',
        'Creative Director & Content Strategist Included',
        'Custom Asset Management & DAM Workflow',
        'SLA Guaranteed Uptime & NDA Protection'
      ]
    }
  ];

  const plans = (pricingData && pricingData.length > 0) ? pricingData : defaultPlans;

  return (
    <section id="pricing" className="pricing-page section-target" style={{ position: 'relative' }}>
      <div className="bg-glow-orb glow-blue" style={{ top: '10%', right: '-5%' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="section-header text-center" style={{ maxWidth: '850px', margin: '0 auto 30px' }}>
          <span className="section-subtitle">{subtitle || 'Transparent Video Retainers'}</span>
          <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '12px' }}>
            {title1 || 'Secure a Full Studio Team at a'} <span className="combination-font">{title2 || 'Fixed Monthly Rate'}</span>
          </h2>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '20px' }}>
            {description || 'No surprise invoices. No long-term hiring contracts. Pause or cancel anytime.'}
          </p>

          {/* Clean Segmented Control: Monthly / Quarterly Switcher */}
          <div className="pricing-toggle-container">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`toggle-tab-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`toggle-tab-btn ${billingCycle === 'quarterly' ? 'active' : ''}`}
            >
              <span>Quarterly</span>
              <span className="discount-tag">15% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto 40px'
        }}>
          {plans.map((plan, planIdx) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;

            return (
              <div
                key={plan.id || `pricing-plan-${planIdx}`}
                className={`glass-card pop-hover ${plan.isPopular ? 'popular-pricing-card' : ''}`}
                style={{
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  position: 'relative'
                }}
              >
                {/* Most Popular Badge on Top */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
                    color: '#FFFFFF',
                    padding: '4px 16px',
                    borderRadius: '12px',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    zIndex: 5
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Scarcity / Availability Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: plan.isPopular ? '#F59E0B' : 'var(--text-muted)',
                    background: 'var(--input-bg)',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    border: '1px solid var(--glass-border)'
                  }}>
                    <span className="pulse-radar" style={{ width: '7px', height: '7px', background: plan.isPopular ? '#F59E0B' : '#10B981' }}></span>
                    {plan.badge}
                  </span>
                  
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cancel anytime</span>
                </div>

                {/* Plan Name & Description */}
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', minHeight: '38px', marginBottom: '20px' }}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                  {price ? (
                    <>
                      <span style={{
                        fontSize: '2.8rem',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        fontFamily: "'Outfit', sans-serif",
                        lineHeight: '1'
                      }}>
                        ${price.toLocaleString()}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: '600' }}>
                        {plan.duration}
                      </span>
                    </>
                  ) : (
                    <span style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: 'var(--accent-blue-light)',
                      fontFamily: "'Outfit', sans-serif",
                      lineHeight: '1.1'
                    }}>
                      {plan.customText || 'Custom Quote'}
                    </span>
                  )}
                </div>

                {/* Primary CTA Button */}
                <a
                  href="/book-a-call"
                  className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'} pop-btn`}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '13px 20px',
                    fontSize: '0.95rem',
                    marginBottom: '26px',
                    borderRadius: '12px'
                  }}
                >
                  <span>Book Strategy Call</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                {/* Features Checklist Header */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  color: 'var(--text-muted)',
                  marginBottom: '14px',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '16px'
                }}>
                  What's Included:
                </div>

                {/* Feature List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features?.map((feature, i) => (
                    <li key={`feature-${plan.id || planIdx}-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                      <i className="fa-solid fa-check" style={{ color: plan.isPopular ? 'var(--accent-blue-light)' : '#10B981', marginTop: '3px', flexShrink: 0 }}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
