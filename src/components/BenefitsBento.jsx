"use client";

import React from 'react';

export default function BenefitsBento() {
  const benefits = [
    {
      title: "Speedy 24-48h Turnarounds",
      subtitle: "Never wait weeks for a draft.",
      description: "Receive your edited short-form videos and YouTube cuts within 24 to 48 hours on average so your publishing cadence never stops.",
      icon: "fa-solid fa-bolt",
      color: "#38BDF8",
      bgGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)"
    },
    {
      title: "Retention-First Framework",
      subtitle: "Engineered to stop the scroll.",
      description: "We don't just assemble clips. We apply dynamic pacing, sound cues, visual pattern interrupts, and psychology-backed hooks to maximize watch-time.",
      icon: "fa-solid fa-crosshairs",
      color: "#10B981",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)"
    },
    {
      title: "Direct Slack & WhatsApp Comms",
      subtitle: "Frictionless, real-time collaboration.",
      description: "Skip clunky ticketing systems. Message your dedicated Art Director and editing team directly on Slack or WhatsApp for lightning-fast feedback.",
      icon: "fa-brands fa-slack",
      color: "#F59E0B",
      bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%)"
    },
    {
      title: "100% Satisfaction Guarantee",
      subtitle: "Zero stress, unlimited revisions.",
      description: "We'll revise every frame, caption, and audio cue until you are 100% delighted with the final asset. No arguments, no hidden revision fees.",
      icon: "fa-solid fa-shield-halved",
      color: "#8B5CF6",
      bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          <span className="section-subtitle">Membership Advantages</span>
          <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '15px' }}>
            Why Leading Brands <span className="combination-font">Stay With Us</span>
          </h2>
          <p className="section-description" style={{ color: 'var(--text-secondary)' }}>
            We engineered our entire agency workflow around speed, quality, and extreme client convenience.
          </p>
        </div>

        {/* Bento Grid (Musemind Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="glass-card pop-hover reveal-on-scroll"
              style={{
                padding: '36px 30px',
                borderRadius: '24px',
                background: benefit.bgGradient,
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${idx * 80}ms`
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'var(--card-bg)',
                border: `1px solid ${benefit.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: benefit.color,
                fontSize: '1.4rem',
                marginBottom: '24px',
                boxShadow: `0 10px 25px ${benefit.color}20`
              }}>
                <i className={benefit.icon}></i>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {benefit.title}
              </h3>
              <div style={{ color: benefit.color, fontSize: '0.88rem', fontWeight: '700', marginBottom: '14px' }}>
                {benefit.subtitle}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
