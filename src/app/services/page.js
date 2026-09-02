"use client";

import React from 'react';
import Link from 'next/link';
import ServicesMatrix from '@/components/ServicesMatrix';
import DesignMonksContact from '@/components/DesignMonksContact';
import FAQSchema from '@/components/FAQSchema';
import { SERVICE_FAQS } from '@/lib/seoData';

export default function ServicesHubPage() {
  const mainServices = [
    {
      id: 'reels',
      slug: 'reels-shorts',
      index: '01',
      title: 'Reels & Shorts Viral Retention Editing',
      tagline: 'Engineered to stop the scroll in 3 seconds.',
      desc: 'We transform raw vertical footage into high-energy, psychology-backed Instagram Reels, TikToks, and YouTube Shorts that trigger social algorithms and drive viral reach.',
      deliverables: [
        '3-Second Retention Hook Engineering',
        'Kinetic Animated Subtitles (Alex Hormozi & Ali Abdaal style)',
        'Sound Effects (Whooshes, Risers, Pops) & Trending Audio',
        'Visual Pattern Interrupts & Zoom Animations',
        '48-Hour Turnaround Time with Unlimited Revisions'
      ],
      icon: 'fa-brands fa-tiktok',
      color: '#EC4899',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'podcasts',
      slug: 'podcasts',
      index: '02',
      title: 'Multi-Cam Podcasts, Audio & Highlights Clips',
      tagline: 'Turn 1 podcast into an entire month of viral clips.',
      desc: 'Complete full-episode mastering with intelligent multi-camera switching, audio noise removal, cinematic lower thirds, and extraction of 10-20 viral short-form micro clips.',
      deliverables: [
        'Multi-Camera Angle Auto-Switching & Speaker Tracking',
        'Studio Sound Cleaning, De-humming & EQ Balancing',
        'Custom Podcast Intro/Outro Motion Branding',
        'Timestamp Chapter Cards & Show Notes Formatting',
        '10-20 Repurposed Viral Reels per Episode'
      ],
      icon: 'fa-solid fa-microphone-lines',
      color: '#8B5CF6',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'talking-head',
      slug: 'talking-head',
      index: '03',
      title: 'YouTube Long-Form & Talking Head Authority',
      tagline: 'Scale watch-time, subscribers, and high-ticket trust.',
      desc: 'Cinematic YouTube video editing designed to keep viewers glued from the intro to the end-screen. We handle the entire post-production pipeline including high-CTR custom thumbnails.',
      deliverables: [
        'Story Arc Structuring & Fast-Paced J-Cuts',
        'Custom B-Roll Overlays, Stock Footage & Animated Diagrams',
        'Cinematic Color Grading (Rec.709 & Custom Brand LUTs)',
        'High-CTR Custom YouTube Thumbnail Designs Included',
        'SEO Metadata, Chapters & Closed Captions (.SRT)'
      ],
      icon: 'fa-brands fa-youtube',
      color: '#EF4444',
      image: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ugc-ads',
      slug: 'ugc-ads',
      index: '04',
      title: 'High-Converting UGC & Direct Response Video Ads',
      tagline: 'Paid social ads built for maximum ROAS on Meta & TikTok.',
      desc: 'We craft direct-response video ads for e-commerce brands and marketing agencies. Includes multiple hook variations for rapid A/B testing on Meta, TikTok, and YouTube Ads.',
      deliverables: [
        'Direct-Response Problem/Solution Ad Frameworks',
        '3-5 Split-Test Hook Variations per Ad Concept',
        'Dynamic Price Callouts, Offer Badges & Urgency Stickers',
        'Platform-Optimized Formats (9:16, 1:1, 4:5)',
        'Delivered in 48 Hours for Fast Campaign Launch'
      ],
      icon: 'fa-solid fa-chart-line',
      color: '#10B981',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'saas-motion',
      slug: 'saas-motion',
      index: '05',
      title: 'SaaS Animated UI Demos & Product Launch Videos',
      tagline: 'Explain complex tech products in under 60 seconds.',
      desc: 'Give your software the Apple-grade presentation it deserves. Silky smooth cursor movements, 3D/2D vector animations, and crisp feature breakdowns built for Product Hunt and landing pages.',
      deliverables: [
        'Vector UI Re-creation & Pixel-Perfect Screen Mockups',
        'Silky Smooth Dynamic Cursor Tracking Animations',
        '2D Vector Explainer Motion & Feature Callouts',
        'Product Hunt & Demo Day Launch Video Packages',
        'Full Source Files (.AEP / .PRPROJ) Included'
      ],
      icon: 'fa-solid fa-wand-magic-sparkles',
      color: '#38BDF8',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const aggregatedFaqs = Object.values(SERVICE_FAQS).flat().slice(0, 10);

  return (
    <div className="services-page-full" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
      
      {/* Ambient Orbs */}
      <div className="bg-glow-orb glow-cyan" style={{ top: '5%', left: '-10%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '35%', right: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
          <span className="section-subtitle">Our Post-Production Capabilities</span>
          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '14px' }}>
            Full-Stack Video Editing for <span className="combination-font">Ambitious Brands</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            From viral short-form clips to studio-grade podcasts and SaaS animations, explore our 5 specialized production arms.
          </p>
        </div>

        {/* 5 Core Services Deep Dive Grid */}
        <div className="services-hub-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '1280px', margin: '0 auto 60px' }}>
          {mainServices.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className="glass-card pop-hover reveal-on-scroll service-hub-card"
              style={{
                scrollMarginTop: '100px',
                borderRadius: '24px',
                padding: '36px 32px',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                gap: '36px',
                alignItems: 'center',
                border: '1px solid var(--glass-border)',
                position: 'relative'
              }}
            >
              {/* Content Column */}
              <div className="service-hub-content" style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.95rem',
                    fontWeight: '900',
                    color: service.color,
                    background: `${service.color}15`,
                    padding: '3px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${service.color}30`
                  }}>
                    {service.index}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Specialized Arm
                  </span>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)', lineHeight: '1.25' }}>
                  {service.title}
                </h2>
                <div style={{ color: service.color, fontWeight: '700', fontSize: '0.96rem', marginBottom: '14px' }}>
                  {service.tagline}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.55', marginBottom: '20px' }}>
                  {service.desc}
                </p>

                {/* Deliverables Checklist */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.deliverables.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <i className="fa-solid fa-check" style={{ color: service.color, fontSize: '0.82rem' }}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-hub-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href={`/services/${service.slug}`} className="btn btn-primary pop-btn" style={{ borderRadius: '10px', padding: '11px 20px', fontSize: '0.9rem' }}>
                    <span>Explore Service Details</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href={`/book-a-call?service=${encodeURIComponent(service.title)}`} className="btn btn-outline pop-btn" style={{ borderRadius: '10px', padding: '11px 20px', fontSize: '0.9rem' }}>
                    <span>Book Strategy Call</span>
                  </Link>
                </div>
              </div>

              {/* Image Preview Column */}
              <div className="service-hub-img-col" style={{
                order: idx % 2 === 0 ? 2 : 1,
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 13, 24, 0.8) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <i className={service.icon}></i>
                    <span>Studio Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 24+ Services Matrix */}
        <ServicesMatrix />

        {/* Design Monks Project Inquiry Section */}
        <div style={{ marginTop: '50px' }}>
          <DesignMonksContact />
        </div>

        {/* FAQ structured data for services (JSON-LD) */}
        <FAQSchema faqs={aggregatedFaqs} />

      </div>
    </div>
  );
}
