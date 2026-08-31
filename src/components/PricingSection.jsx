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
    <section id="pricing" className="pricing-page section-target" style={{ paddingTop: '90px', paddingBottom: '90px', position: 'relative' }}>
      <div className="bg-glow-orb glow-blue" style={{ top: '10%', right: '-5%' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="section-header text-center" style={{ maxWidth: '850px', margin: '0 auto 45px' }}>
          <span className="section-subtitle">{subtitle || 'Transparent Video Retainers'}</span>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>
            {title1 || 'Secure a Full Studio Team at a'} <span className="combination-font">{title2 || 'Fixed Monthly Rate'}</span>
          </h2>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {description || 'No surprise invoices. No long-term hiring contracts. Pause or cancel anytime.'}
          </p>

          {/* Monthly / Quarterly Switcher */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)',
            padding: '6px',
            borderRadius: '50px',
            marginTop: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '10px 24px',
                borderRadius: '40px',
                border: 'none',
                background: billingCycle === 'monthly' ? 'var(--accent-blue-primary)' : 'transparent',
                color: billingCycle === 'monthly' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              style={{
                padding: '10px 24px',
                borderRadius: '40px',
                border: 'none',
                background: billingCycle === 'quarterly' ? 'var(--accent-blue-primary)' : 'transparent',
                color: billingCycle === 'quarterly' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Quarterly Billing
              <span style={{
                background: billingCycle === 'quarterly' ? '#FFFFFF' : 'rgba(37, 99, 235, 0.2)',
                color: billingCycle === 'quarterly' ? 'var(--accent-blue-primary)' : '#38BDF8',
                padding: '2px 8px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '800'
              }}>
                15% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto 60px'
        }}>
          {plans.map((plan, planIdx) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;

            return (
              <div
                key={plan.id || `pricing-plan-${planIdx}`}
                className={`glass-card pop-hover ${plan.isPopular ? 'popular-pricing-card' : ''}`}
                style={{
                  padding: '44px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '32px',
                  position: 'relative'
                }}
              >
                {/* Most Popular Badge on Top */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
                    color: '#FFFFFF',
                    padding: '5px 18px',
                    borderRadius: '30px',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    zIndex: 5
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Scarcity / Availability Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: plan.isPopular ? '#F59E0B' : 'var(--text-muted)',
                    background: 'var(--input-bg)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)'
                  }}>
                    <span className="pulse-radar" style={{ width: '8px', height: '8px', background: plan.isPopular ? '#F59E0B' : '#10B981' }}></span>
                    {plan.badge}
                  </span>
                  
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cancel anytime</span>
                </div>

                {/* Plan Name & Description */}
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5', minHeight: '42px', marginBottom: '24px' }}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                  {price ? (
                    <>
                      <span style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        fontFamily: "'Outfit', sans-serif",
                        lineHeight: '1'
                      }}>
                        ${price.toLocaleString()}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600' }}>
                        {plan.duration}
                      </span>
                    </>
                  ) : (
                    <span style={{
                      fontSize: '2.2rem',
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
                    padding: '16px',
                    fontSize: '1.05rem',
                    marginBottom: '32px',
                    borderRadius: '50px'
                  }}
                >
                  <span>Book Strategy Call</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                {/* Features Checklist Header */}
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '20px'
                }}>
                  What's Included:
                </div>

                {/* Feature List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {plan.features?.map((feature, i) => (
                    <li key={`feature-${plan.id || planIdx}-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
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
