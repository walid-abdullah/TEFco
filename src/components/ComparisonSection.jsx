"use client";

import React from 'react';

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Studio-Grade Editing Quality",
      editly: true,
      editlyText: "Elite Trained Senior Pod",
      inHouse: true,
      inHouseText: "Depends on Hire Quality",
      freelance: false,
      freelanceText: "Inconsistent & Hit-or-Miss"
    },
    {
      feature: "Guaranteed Turnaround Time",
      editly: true,
      editlyText: "24 - 48 Hours SLA Backed",
      inHouse: false,
      inHouseText: "Slow (Weeks per cut)",
      freelance: false,
      freelanceText: "Unpredictable Deadlines"
    },
    {
      feature: "Cost Structure & Overhead",
      editly: true,
      editlyText: "Flat Monthly, Pause/Cancel Anytime",
      inHouse: false,
      inHouseText: "$75k - $110k/yr + Benefits & Taxes",
      freelance: false,
      freelanceText: "Hourly creep & billable revisions"
    },
    {
      feature: "Onboarding & Ramp-Up Time",
      editly: true,
      editlyText: "Active in 24 Hours",
      inHouse: false,
      inHouseText: "30 - 60 Days Recruiting",
      freelance: false,
      freelanceText: "Constant trial & error churn"
    },
    {
      feature: "Revision Policy",
      editly: true,
      editlyText: "Unlimited Iterations Guarantee",
      inHouse: true,
      inHouseText: "Internal bandwidth limited",
      freelance: false,
      freelanceText: "$50-$150 charged per extra round"
    },
    {
      feature: "Multidisciplinary Stack (Color, Sound, 3D)",
      editly: true,
      editlyText: "Full Pod: Colorist + Sound + Motion",
      inHouse: false,
      inHouseText: "Usually 1 generalist with limits",
      freelance: false,
      freelanceText: "Requires hiring multiple contractors"
    },
    {
      feature: "Reliability & Zero Ghosting",
      editly: true,
      editlyText: "100% Backed by Agency Pod & SLA",
      inHouse: true,
      inHouseText: "PTO / Sick days create backlog",
      freelance: false,
      freelanceText: "High risk of disappearing"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px' }}>
        
        {/* Header */}
        <div className="section-header text-center reveal-on-scroll" style={{ maxWidth: '820px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
            <span className="mono-spec" style={{ fontSize: '0.74rem', color: '#E2E8F0', letterSpacing: '0.05em' }}>
              CAPABILITY BENCHMARK
            </span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 14px', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Why Leading Brands Choose <br />
            <span className="combination-font" style={{ color: '#EF4444' }}>The Editly Foundry OS</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.68)', fontSize: '1.02rem', lineHeight: '1.6', margin: 0 }}>
            Compare our dedicated post-production engine against traditional full-time hiring and risky freelance platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper" style={{
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '10px'
        }}>
          <div style={{
            minWidth: '780px',
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'rgba(10, 14, 22, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.12)'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2.2fr 2.1fr 1.6fr 1.6fr',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '20px 24px',
              alignItems: 'center',
              fontWeight: '700'
            }}>
              <div className="mono-spec" style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
                PRODUCTION CRITERIA
              </div>
              
              <div style={{
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem',
                fontWeight: '800'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }}></span>
                <span>The Editly Foundry</span>
                <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#EF4444', background: 'rgba(239,68,68,0.12)', padding: '2px 6px', borderRadius: '4px' }}>
                  STUDIO OS
                </span>
              </div>

              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                In-House Team
              </div>

              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                Freelancer Network
              </div>
            </div>

            {/* Table Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.2fr 2.1fr 1.6fr 1.6fr',
                    padding: '18px 24px',
                    borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
                    alignItems: 'center'
                  }}
                >
                  {/* Feature Name */}
                  <div style={{ fontWeight: '600', color: '#FFFFFF', fontSize: '0.92rem' }}>
                    {row.feature}
                  </div>

                  {/* Editly Foundry Highlight Column */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(239, 68, 68, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#EF4444',
                      fontSize: '0.65rem',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FFFFFF' }}>
                      {row.editlyText}
                    </span>
                  </div>

                  {/* In-House Column */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.86rem' }}>
                    {row.inHouse ? (
                      <i className="fa-solid fa-check" style={{ color: '#94A3B8', fontSize: '0.75rem' }}></i>
                    ) : (
                      <i className="fa-solid fa-xmark" style={{ color: 'rgba(239,68,68,0.7)', fontSize: '0.75rem' }}></i>
                    )}
                    <span>{row.inHouseText}</span>
                  </div>

                  {/* Freelancer Column */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.45)', fontSize: '0.86rem' }}>
                    {row.freelance ? (
                      <i className="fa-solid fa-check" style={{ color: '#94A3B8', fontSize: '0.75rem' }}></i>
                    ) : (
                      <i className="fa-solid fa-xmark" style={{ color: 'rgba(239,68,68,0.7)', fontSize: '0.75rem' }}></i>
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

