"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingSection({ subtitle, title1, title2, description, pricingData = [] }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly'

  const defaultPlans = [
    {
      id: 'starter',
      name: 'Starter Pod',
      badge: '3 SLOTS REMAINING',
      description: 'Ideal for creators and growing brands looking for a continuous, high-retention video publishing cadence.',
      monthlyPrice: 999,
      quarterlyPrice: 849, // 15% discount
      duration: '/ month',
      isPopular: false,
      features: [
        '12 Short-Form Videos (Reels, TikTok, Shorts)',
        '48-Hour Standard SLA Turnaround',
        'Kinetic Typography & Sound Design',
        'Frame.io Timecode Reviewing',
        'Dedicated Slack & WhatsApp Channel',
        '1 Active Concurrent Request',
        'Unlimited Edit Revisions',
        'Pause or Cancel Anytime'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Retainer',
      badge: 'MOST POPULAR // 2 SLOTS LEFT',
      description: 'Our flagship studio tier for high-growth businesses and authority creators demanding viral scale.',
      monthlyPrice: 1499,
      quarterlyPrice: 1275, // 15% discount
      duration: '/ month',
      isPopular: true,
      features: [
        '24 Short-Form Videos + 2 Long-Form (Podcasts/YT)',
        '24 to 48-Hour Priority Turnaround',
        'DaVinci Resolve ACES Color Science',
        'iZotope RX Audio Mastering (-14 LUFS)',
        'Senior Lead Editor & Art Director',
        '2 Active Concurrent Requests',
        'Custom High-CTR YouTube Thumbnails',
        'Unlimited Revisions & VIP Slack Support'
      ]
    },
    {
      id: 'scale',
      name: 'Scale & Enterprise',
      badge: 'DEDICATED TEAM',
      description: 'Dedicated multi-editor production pod for venture-backed startups and high-volume media brands.',
      monthlyPrice: 2499,
      quarterlyPrice: 2125,
      duration: '/ month',
      isPopular: false,
      features: [
        'Dedicated 3-Editor Video Production Pod',
        'Unlimited Video Queue & High Volume Output',
        '24-Hour Express Turnaround SLA',
        'Full 3D SaaS Motion & Product Demos',
        'Multi-Camera Podcast Ingest & 1-to-30 Engine',
        'Creative Director & Content Strategist',
        'Source File Deliveries (.AEP / .PRPROJ)',
        'Custom SLA Guarantee & NDA Protection'
      ]
    }
  ];

  const plans = (pricingData && pricingData.length > 0) ? pricingData : defaultPlans;

  return (
    <section id="pricing" className="pricing-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#E2E8F0', letterSpacing: '0.05em' }}>
              TRANSPARENT STUDIO PRICING
            </span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 14px', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Predictable Retainers. <br />
            <span className="combination-font" style={{ color: '#EF4444' }}>Zero Hidden Fees.</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.68)', fontSize: '1.02rem', lineHeight: '1.6', margin: '0 auto 28px', maxWidth: '640px' }}>
            {description || 'Scale your video output with a dedicated post-production pod. No contracts, pause or cancel anytime.'}
          </p>

          {/* Clean Minimal Billing Cycle Switch */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(10, 14, 22, 0.9)',
            padding: '4px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: billingCycle === 'monthly' ? '#EF4444' : 'transparent',
                color: billingCycle === 'monthly' ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: billingCycle === 'quarterly' ? '#EF4444' : 'transparent',
                color: billingCycle === 'quarterly' ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Quarterly</span>
              <span className="mono-spec" style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '999px', color: '#FFF' }}>
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Clean, Spacious, Uncluttered) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan) => {
            const price = billingCycle === 'quarterly' && plan.quarterlyPrice ? plan.quarterlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className="glass-card pop-hover"
                style={{
                  borderRadius: '20px',
                  padding: '36px 30px',
                  background: 'rgba(10, 14, 22, 0.88)',
                  border: plan.isPopular ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: plan.isPopular 
                    ? '0 25px 80px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255,255,255,0.18)' 
                    : '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Badge */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="mono-spec" style={{ 
                      fontSize: '0.7rem', 
                      color: plan.isPopular ? '#EF4444' : '#94A3B8', 
                      background: plan.isPopular ? 'rgba(239,68,68,0.12)' : 'rgba(255,255,255,0.05)', 
                      padding: '3px 8px', 
                      borderRadius: '4px',
                      fontWeight: '700'
                    }}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 8px' }}>
                    {plan.name}
                  </h3>

                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 24px', minHeight: '40px' }}>
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontSize: '2.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                      ${price ? price.toLocaleString() : '2,499'}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: '600' }}>
                      {plan.duration || '/ month'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: plan.isPopular ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: plan.isPopular ? '#EF4444' : '#FFFFFF',
                          fontSize: '0.62rem',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.45' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <Link
                  href={`/book-a-call?plan=${encodeURIComponent(plan.name)}&budget=${encodeURIComponent(`$${price}/mo`)}`}
                  className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    fontSize: '0.92rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    background: plan.isPopular ? '#EF4444' : 'rgba(255,255,255,0.04)',
                    borderColor: plan.isPopular ? '#EF4444' : 'rgba(255,255,255,0.15)',
                    boxShadow: plan.isPopular ? '0 10px 30px rgba(239,68,68,0.3)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <span>{plan.id === 'scale' ? 'Book Strategy Audit' : `Lock in ${plan.name}`}</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.78rem' }}></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
