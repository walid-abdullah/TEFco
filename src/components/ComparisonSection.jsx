"use client";

import React from 'react';

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Studio-Grade Editing Quality",
      editly: true,
      editlyText: "Elite Trained Team",
      inHouse: true,
      inHouseText: "Depends on Hire",
      freelance: false,
      freelanceText: "Inconsistent & Hit-or-Miss"
    },
    {
      feature: "Fast Turnaround Time",
      editly: true,
      editlyText: "24 - 48 Hours Guaranteed",
      inHouse: false,
      inHouseText: "Slow (Weeks per project)",
      freelance: false,
      freelanceText: "Unpredictable Deadlines"
    },
    {
      feature: "Cost Efficiency & Flexibility",
      editly: true,
      editlyText: "Fixed Monthly, Pause/Cancel Anytime",
      inHouse: false,
      inHouseText: "$65k - $90k/yr + Benefits & Taxes",
      freelance: false,
      freelanceText: "Hourly creep & expensive revisions"
    },
    {
      feature: "Hiring & Onboarding Friction",
      editly: true,
      editlyText: "Starts within 24 Hours",
      inHouse: false,
      inHouseText: "30 - 60 Days Recruitment",
      freelance: false,
      freelanceText: "Constant trial and error"
    },
    {
      feature: "Revision Policy",
      editly: true,
      editlyText: "Unlimited until 100% Satisfied",
      inHouse: true,
      inHouseText: "Internal rounds",
      freelance: false,
      freelanceText: "Charged extra per round"
    },
    {
      feature: "Multi-Disciplinary Skillset (Motion, Sound, 4K)",
      editly: true,
      editlyText: "Full Pod: Colorist, Motion Designer, Editor",
      inHouse: false,
      inHouseText: "Usually 1 person with limited scope",
      freelance: false,
      freelanceText: "Requires hiring multiple people"
    },
    {
      feature: "Reliability & Zero Ghosting",
      editly: true,
      editlyText: "Backed by Agency SLA & Support Pod",
      inHouse: true,
      inHouseText: "Employee attendance",
      freelance: false,
      freelanceText: "High risk of disappearing"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 50px' }}>
          <span className="section-subtitle">The Clear Choice</span>
          <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '15px' }}>
            Why High-Growth Brands Choose <span className="combination-font">The Editly Foundry</span>
          </h2>
          <p className="section-description" style={{ color: 'var(--text-secondary)' }}>
            See how our studio model outperforms traditional in-house hiring and risky freelancer marketplaces.
          </p>
        </div>

        {/* Comparison Table (Musemind Architecture - Mobile Scrollable & Clean) */}
        <div className="comparison-table-wrapper" style={{
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '10px'
        }}>
          <div className="glass-card reveal-on-scroll" style={{
            minWidth: '700px',
            maxWidth: '1050px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow)'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2.2fr 1.8fr 1.5fr 1.5fr',
              background: 'var(--card-bg)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '24px 20px',
              alignItems: 'center',
              fontWeight: '700',
              fontSize: '1rem'
            }}>
              <div style={{ color: 'var(--text-muted)' }}>Capability / Factor</div>
              <div style={{
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1.15rem'
              }}>
                <i className="fa-solid fa-crown" style={{ color: '#F59E0B' }}></i>
                <span>The Editly Foundry</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>In-House Full-Time</div>
              <div style={{ color: 'var(--text-secondary)' }}>Freelancers</div>
            </div>

            {/* Table Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.2fr 1.8fr 1.5fr 1.5fr',
                    padding: '20px 20px',
                    borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid var(--glass-border)',
                    background: idx % 2 === 0 ? 'transparent' : 'var(--input-bg)',
                    alignItems: 'center'
                  }}
                >
                  {/* Feature Name */}
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    {row.feature}
                  </div>

                  {/* Editly Foundry Column (Highlighted) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {row.editlyText}
                    </span>
                  </div>

                  {/* In-House Column */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {row.inHouse ? (
                      <i className="fa-solid fa-check" style={{ color: '#94A3B8' }}></i>
                    ) : (
                      <i className="fa-solid fa-xmark" style={{ color: '#EF4444' }}></i>
                    )}
                    <span>{row.inHouseText}</span>
                  </div>

                  {/* Freelancer Column */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {row.freelance ? (
                      <i className="fa-solid fa-check" style={{ color: '#94A3B8' }}></i>
                    ) : (
                      <i className="fa-solid fa-xmark" style={{ color: '#EF4444' }}></i>
                    )}
                    <span>{row.freelanceText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
