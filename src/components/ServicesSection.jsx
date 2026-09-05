"use client";

import React, { useState } from 'react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'strategy',
      num: '01',
      title: 'Strategy',
      icon: 'fa-solid fa-crosshairs',
      desc: 'Before we open the edit, we figure out what the video needs to do, who it needs to convince, and what action you want your buyer to take by the end.'
    },
    {
      id: 'build',
      num: '02',
      title: 'Build',
      icon: 'fa-solid fa-film',
      desc: 'Every edit is made to move your customer one step closer to taking action. Nothing in the video is filler or there just to look good.'
    },
    {
      id: 'launch',
      num: '03',
      title: 'Launch',
      icon: 'fa-solid fa-arrow-trend-up',
      desc: 'You get the final cut in two weeks, ready to go live across your website, paid ads, and outbound the moment it lands in your inbox.'
    }
  ];

  return (
    <section 
      className="services section-padding" 
      id="services" 
      style={{ 
        position: 'relative', 
        background: '#05070B', 
        padding: '110px 0', 
        overflow: 'hidden' 
      }}
    >
      
      {/* Background Subtle Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main 2-Column Interactive Showcase Container */}
        <div 
          className="interactive-showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1fr) 40px minmax(380px, 1.25fr)',
            gap: '30px',
            alignItems: 'center',
            maxWidth: '1140px',
            margin: '0 auto'
          }}
        >
          
          {/* 
            ======================================================================
            LEFT COLUMN: INTERACTIVE ACCORDION MENU (3 TABS)
            ====================================================================== 
          */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;

              return (
                <div 
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(idx)}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '18px 0',
                    borderBottom: idx !== tabs.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Top Header Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    
                    {/* Small Node Marker */}
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '1px',
                      boxShadow: isActive ? '0 0 10px rgba(255,255,255,0.8)' : 'none',
                      transition: 'all 0.3s ease'
                    }}></div>

                    {/* Frosted Icon Box */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(224, 231, 255, 0.95) 0%, rgba(165, 180, 252, 0.9) 100%)' 
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isActive 
                        ? '1px solid rgba(255, 255, 255, 0.8)' 
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 0 25px rgba(165, 180, 252, 0.5)' : 'none',
                      transition: 'all 0.35s ease'
                    }}>
                      <i 
                        className={tab.icon} 
                        style={{ 
                          color: isActive ? '#1E1B4B' : '#64748B', 
                          fontSize: '0.95rem',
                          transition: 'color 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Number & Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="mono-spec" style={{ 
                        fontSize: '0.78rem', 
                        color: isActive ? '#94A3B8' : '#475569',
                        fontWeight: '600'
                      }}>
                        ■ {tab.num}
                      </span>
                      <h3 style={{ 
                        fontSize: '1.45rem', 
                        fontWeight: '700', 
                        margin: 0, 
                        color: isActive ? '#FFFFFF' : '#64748B',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-heading)',
                        transition: 'color 0.3s ease'
                      }}>
                        {tab.title}
                      </h3>
                    </div>

                  </div>

                  {/* Expanded Description (When Active) */}
                  <div style={{
                    maxHeight: isActive ? '120px' : '0px',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    paddingLeft: '64px',
                    paddingTop: isActive ? '12px' : '0px'
                  }}>
                    <p style={{
                      fontSize: '0.92rem',
                      color: '#94A3B8',
                      lineHeight: '1.6',
                      margin: 0,
                      maxWidth: '400px'
                    }}>
                      {tab.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* 
            ======================================================================
            CENTER DIVIDER: GLOWING VERTICAL LASER LINE WITH LENS FLARE
            ====================================================================== 
          */}
          <div 
            className="center-laser-divider"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '320px', 
              position: 'relative' 
            }}
          >
            {/* Hairline Laser */}
            <div style={{
              width: '1px',
              height: '100%',
              background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.3) 25%, #38BDF8 50%, rgba(99, 102, 241, 0.3) 75%, transparent 100%)',
              position: 'relative'
            }}>
              {/* Center Flare */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                background: 'radial-gradient(circle, #FFFFFF 0%, #38BDF8 40%, transparent 75%)',
                filter: 'blur(1px)',
                boxShadow: '0 0 15px #38BDF8, 0 0 30px #6366F1'
              }} />
            </div>
          </div>

          {/* 
            ======================================================================
            RIGHT COLUMN: BESPOKE SPOTLIGHT ARTBOARD (MATCHING SCREENSHOTS)
            ====================================================================== 
          */}
          <div style={{ position: 'relative', width: '100%', justifySelf: 'center' }}>
            <div 
              className="artboard-display-container"
              style={{
                position: 'relative',
                aspectRatio: '16/11',
                minHeight: '340px',
                background: '#070A14',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 30px 70px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.06)'
              }}
            >
              
              {/* 
                ------------------------------------------------------------------
                TAB 1 ARTBOARD: SPOTLIGHT OVERHEAD CONE + EYE ICON BLOCK (Strategy)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 0 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  
                  {/* Overhead Spotlight Lamp */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '64px',
                    height: '24px',
                    background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
                    borderRadius: '12px 12px 0 0',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '2px',
                    zIndex: 3
                  }}>
                    <div style={{ width: '12px', height: '6px', borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 0 15px #FFFFFF' }}></div>
                  </div>

                  {/* Spotlight Radiant Cone Beam */}
                  <div style={{
                    position: 'absolute',
                    top: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '110px solid transparent',
                    borderRight: '110px solid transparent',
                    borderBottom: '230px solid rgba(129, 140, 248, 0.22)',
                    filter: 'blur(12px)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }} />

                  {/* Horizontal Wireframe Connection Pins */}
                  <div style={{ position: 'absolute', top: '35%', left: '16px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }}></div>
                    <div style={{ width: '45px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                  </div>
                  <div style={{ position: 'absolute', top: '55%', left: '16px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }}></div>
                    <div style={{ width: '45px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                  </div>
                  <div style={{ position: 'absolute', top: '35%', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
                    <div style={{ width: '45px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }}></div>
                  </div>
                  <div style={{ position: 'absolute', top: '55%', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
                    <div style={{ width: '45px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }}></div>
                  </div>

                  {/* Center Eye Block (Target of Spotlight) */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    marginTop: '55px',
                    width: '84px',
                    height: '84px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
                    border: '1.5px solid rgba(165, 180, 252, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 35px rgba(99, 102, 241, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)'
                  }}>
                    <i className="fa-solid fa-eye" style={{ color: '#FFFFFF', fontSize: '1.8rem', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}></i>
                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                TAB 2 ARTBOARD: VERTICAL LIGHT BEAM & FLOATING BADGES (Build)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 1 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  
                  {/* Intense Vertical Central Beam of Light */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '24px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(165, 180, 252, 0.8) 50%, rgba(99, 102, 241, 0.3) 100%)',
                    filter: 'blur(6px)',
                    boxShadow: '0 0 45px rgba(129, 140, 248, 0.8)',
                    zIndex: 1
                  }} />

                  {/* Sparkle Stardust Points */}
                  <div style={{ position: 'absolute', top: '25%', left: '32%', width: '4px', height: '4px', borderRadius: '50%', background: '#FFF', boxShadow: '0 0 8px #FFF' }}></div>
                  <div style={{ position: 'absolute', top: '65%', left: '26%', width: '3px', height: '3px', borderRadius: '50%', background: '#FFF', boxShadow: '0 0 8px #FFF' }}></div>
                  <div style={{ position: 'absolute', top: '30%', right: '30%', width: '4px', height: '4px', borderRadius: '50%', background: '#FFF', boxShadow: '0 0 8px #FFF' }}></div>
                  <div style={{ position: 'absolute', top: '70%', right: '32%', width: '3px', height: '3px', borderRadius: '50%', background: '#FFF', boxShadow: '0 0 8px #FFF' }}></div>

                  {/* 5 Floating Circular Glass Badges (Orbiting Light) */}
                  <div style={{ position: 'relative', width: '100%', maxWidth: '320px', height: '220px', zIndex: 2 }}>
                    
                    {/* Badge 1: Top-Left Pie/Chart */}
                    <div style={{ position: 'absolute', top: '20px', left: '42px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-chart-pie" style={{ color: '#E2E8F0', fontSize: '0.9rem' }}></i>
                    </div>

                    {/* Badge 2: Top-Right Document */}
                    <div style={{ position: 'absolute', top: '35px', right: '40px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-file-lines" style={{ color: '#E2E8F0', fontSize: '0.9rem' }}></i>
                    </div>

                    {/* Badge 3: Center-Right Lightbulb */}
                    <div style={{ position: 'absolute', top: '100px', right: '85px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-lightbulb" style={{ color: '#FDE047', fontSize: '0.95rem' }}></i>
                    </div>

                    {/* Badge 4: Center-Left Eye */}
                    <div style={{ position: 'absolute', top: '115px', left: '25px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-eye" style={{ color: '#E2E8F0', fontSize: '0.9rem' }}></i>
                    </div>

                    {/* Badge 5: Bottom-Center Scissors/VFX */}
                    <div style={{ position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-scissors" style={{ color: '#E2E8F0', fontSize: '0.9rem' }}></i>
                    </div>

                  </div>

                </div>
              )}

              {/* 
                ------------------------------------------------------------------
                TAB 3 ARTBOARD: 3D HORSESHOE MAGNET & METRIC BADGES (Launch)
                ------------------------------------------------------------------ 
              */}
              {activeTab === 2 && (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                  
                  {/* 3D Magnet Graphic on Left */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '120px',
                      height: '110px',
                      borderRadius: '55px 0 0 55px',
                      border: '18px solid rgba(129, 140, 248, 0.7)',
                      borderRight: 'none',
                      position: 'relative',
                      boxShadow: '-10px 0 35px rgba(99, 102, 241, 0.4)'
                    }}>
                      {/* Top Magnet Cap */}
                      <div style={{ position: 'absolute', top: '-18px', right: '-12px', width: '12px', height: '18px', background: '#FFFFFF', borderRadius: '0 4px 4px 0', boxShadow: '0 0 10px #FFFFFF' }}></div>
                      {/* Bottom Magnet Cap */}
                      <div style={{ position: 'absolute', bottom: '-18px', right: '-12px', width: '12px', height: '18px', background: '#FFFFFF', borderRadius: '0 4px 4px 0', boxShadow: '0 0 10px #FFFFFF' }}></div>
                    </div>
                  </div>

                  {/* Horizontal Magnetic Radiant Wave */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '110px',
                    transform: 'translateY(-50%)',
                    width: '180px',
                    height: '70px',
                    background: 'radial-gradient(ellipse at center, rgba(129, 140, 248, 0.55) 0%, rgba(99, 102, 241, 0.2) 60%, transparent 80%)',
                    filter: 'blur(16px)',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }} />

                  {/* Attracted Metric Circular Badges Orbiting on Right */}
                  <div style={{ position: 'relative', width: '160px', height: '220px', zIndex: 2 }}>
                    
                    {/* Badge 1: Top Eye */}
                    <div style={{ position: 'absolute', top: '10px', left: '30px', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-eye" style={{ color: '#E2E8F0', fontSize: '0.85rem' }}></i>
                    </div>

                    {/* Badge 2: Top-Right Rocket */}
                    <div style={{ position: 'absolute', top: '35px', right: '10px', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-rocket" style={{ color: '#38BDF8', fontSize: '0.85rem' }}></i>
                    </div>

                    {/* Badge 3: Center Chart Bar */}
                    <div style={{ position: 'absolute', top: '90px', left: '55px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.95)', border: '1.5px solid #818CF8', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(129, 140, 248, 0.5)' }}>
                      <i className="fa-solid fa-chart-column" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}></i>
                    </div>

                    {/* Badge 4: Bottom-Right Audience */}
                    <div style={{ position: 'absolute', bottom: '35px', right: '10px', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-users" style={{ color: '#E2E8F0', fontSize: '0.85rem' }}></i>
                    </div>

                    {/* Badge 5: Bottom Target */}
                    <div style={{ position: 'absolute', bottom: '10px', left: '30px', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                      <i className="fa-solid fa-bullseye" style={{ color: '#F43F5E', fontSize: '0.85rem' }}></i>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 920px) {
          .interactive-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .center-laser-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
