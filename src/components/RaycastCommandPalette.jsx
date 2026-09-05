"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function RaycastCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef(null);

  const actions = [
    { id: 'act-1', category: 'Navigation', title: 'Work', shortcut: 'W', href: '/work', desc: 'Browse selected portfolio work' },
    { id: 'act-2', category: 'Services', title: 'Reels & Shorts Retention Engine', shortcut: 'R', href: '/services/reels-shorts', desc: '9:16 scroll-stopping viral editing & sound design' },
    { id: 'act-3', category: 'Services', title: 'Multi-Cam Podcasts & Audio Suite', shortcut: 'M', href: '/services/podcasts', desc: '1-to-30 content multiplication engine & 4K switching' },
    { id: 'act-4', category: 'Services', title: 'YouTube Long-Form Authority', shortcut: 'Y', href: '/services/talking-head', desc: 'Documentary pacing, J-cuts & bespoke B-roll' },
    { id: 'act-5', category: 'Services', title: '3D SaaS UI & Product Demos', shortcut: 'S', href: '/services/saas-motion', desc: 'Apple-grade vector UI cursor kinetics & 60fps motion' },
    { id: 'act-6', category: 'Services', title: 'High-ROAS UGC & Performance Ads', shortcut: 'U', href: '/services/ugc-ads', desc: '5x split-test hooks for Meta, TikTok & YouTube' },
    { id: 'act-7', category: 'Workflow', title: 'Studio Production Pipeline & SLA', shortcut: 'F', href: '/workflow', desc: 'Frame.io review sync, Slack connect & 48h turnaround' },
    { id: 'act-8', category: 'Retainers', title: 'Transparent Retainer Vault & Pricing', shortcut: 'P', href: '/pricing', desc: 'Starter ($999), Growth ($1,499), Scale ($2,499)' },
    { id: 'act-9', category: 'Direct Action', title: 'Book 15-Min Strategy Audit with Walid', shortcut: 'B', href: '/book-a-call', desc: 'Audit current retention & lock in monthly retainer' },
    { id: 'act-10', category: 'Direct Action', title: 'WhatsApp Creative Director Directly', shortcut: 'C', href: 'https://wa.me/8801886755888', external: true, desc: 'Direct instant chat: +880 1886 755 888' },
  ];

  // Listen for ⌘K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, []);

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.desc.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
      setSelectedIndex(0);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (act) => {
    if (!act) return;
    setIsOpen(false);
    if (act.external) {
      window.open(act.href, '_blank');
    } else {
      router.push(act.href);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        handleSelect(filteredActions[selectedIndex]);
      }
    }
  };

  return (
    <>
      {/* Floating Bottom Raycast Trigger HUD Pill */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99990
      }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'rgba(5, 7, 11, 0.92)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '7px 14px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
            fontSize: '0.8rem',
            fontWeight: '600',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: '#22C55E',
            boxShadow: '0 0 8px #22C55E'
          }}></span>
          <span style={{ letterSpacing: '-0.01em' }}>Foundry OS</span>
          <span className="mono-spec" style={{ 
            background: 'rgba(255,255,255,0.08)', 
            padding: '2px 6px', 
            borderRadius: '4px', 
            fontSize: '0.65rem', 
            color: '#94A3B8' 
          }}>
            ⌘K
          </span>
        </button>
      </div>

      {/* Raycast ⌘K Modal Palette */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '12vh'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '640px',
              width: '92%',
              background: '#070A12',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              boxShadow: '0 35px 100px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Top Search Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '12px'
            }}>
              <span className="mono-spec" style={{ color: '#FFFFFF', fontSize: '1rem', opacity: 0.8 }}>⌘</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search workflows, services, retainers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit'
                }}
              />
              <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#64748B', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                ESC
              </span>
            </div>

            {/* Filtered Actions List */}
            <div style={{ maxHeight: '390px', overflowY: 'auto', padding: '8px' }}>
              {filteredActions.length === 0 ? (
                <div style={{ padding: '32px 20px', textAlign: 'center', color: '#64748B', fontSize: '0.86rem' }}>
                  No workflows found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredActions.map((act, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={act.id}
                      onClick={() => handleSelect(act)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.12s ease',
                        marginBottom: '2px',
                        background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        border: isSelected ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent'
                      }}
                    >
                      <div style={{ flex: 1, marginRight: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.88rem', fontWeight: '600', color: isSelected ? '#FFFFFF' : '#E2E8F0' }}>
                            {act.title}
                          </span>
                          <span className="mono-spec" style={{ 
                            fontSize: '0.6rem', 
                            color: '#94A3B8', 
                            background: 'rgba(255, 255, 255, 0.06)', 
                            padding: '1px 5px', 
                            borderRadius: '3px' 
                          }}>
                            {act.category}
                          </span>
                        </div>
                        <p style={{ margin: '2px 0 0', fontSize: '0.74rem', color: '#94A3B8' }}>{act.desc}</p>
                      </div>

                      <span className="mono-spec" style={{ 
                        background: isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.06)', 
                        color: isSelected ? '#05070B' : '#94A3B8',
                        padding: '2px 6px', 
                        borderRadius: '4px', 
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        transition: 'all 0.12s ease'
                      }}>
                        {act.shortcut}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Footer Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '9px 16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E' }}></span>
                THE EDITLY FOUNDRY // OS 2.0
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#64748B' }}>
                  ↑↓ NAVIGATE
                </span>
                <span className="mono-spec" style={{ fontSize: '0.65rem', color: '#FFFFFF' }}>
                  ↵ SELECT
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
