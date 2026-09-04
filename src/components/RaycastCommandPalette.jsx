"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function RaycastCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef(null);

  const actions = [
    { id: 'act-1', category: 'Navigation', title: 'Explore 4K Work Vault', shortcut: 'W', href: '/work', desc: 'Browse full portfolio across all formats' },
    { id: 'act-2', category: 'Services', title: 'Reels & Shorts Retention Engine', shortcut: 'R', href: '/services/reels-shorts', desc: '9:16 scroll-stopping viral editing' },
    { id: 'act-3', category: 'Services', title: 'Multi-Cam Podcasts & Audio Suite', shortcut: 'P', href: '/services/podcasts', desc: '1-to-30 content multiplication engine' },
    { id: 'act-4', category: 'Services', title: 'YouTube Long-Form Authority', shortcut: 'Y', href: '/services/talking-head', desc: 'Documentary pacing & thought leadership' },
    { id: 'act-5', category: 'Services', title: '3D SaaS UI & Product Demos', shortcut: 'S', href: '/services/saas-motion', desc: 'Apple-grade vector cursor kinetics' },
    { id: 'act-6', category: 'Services', title: 'High-Converting Performance Video Ads', shortcut: 'U', href: '/services/ugc-ads', desc: '5x split-test hooks for Meta & TikTok' },
    { id: 'act-7', category: 'Direct Action', title: 'Book 15-Min Strategy Audit with Walid', shortcut: 'B', href: '/book-a-call', desc: 'Lock in monthly post-production retainer' },
    { id: 'act-8', category: 'Direct Action', title: 'WhatsApp Creative Director Directly', shortcut: 'A', href: 'https://wa.me/8801886755888', external: true, desc: 'Instant chat: +880 1886 755 888' },
  ];

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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.desc.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (act) => {
    setIsOpen(false);
    if (act.external) {
      window.open(act.href, '_blank');
    } else {
      router.push(act.href);
    }
  };

  return (
    <>
      {/* Floating Bottom Raycast Trigger Button */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99990
      }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: '#080C14',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 12px 35px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
            fontSize: '0.82rem',
            fontWeight: '600'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38BDF8' }}></span>
          <span>Command Center</span>
          <span className="mono-spec" style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.68rem', color: '#94A3B8' }}>
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
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
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
              maxWidth: '620px',
              width: '92%',
              background: '#080B11',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '12px',
              boxShadow: '0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Top Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '12px'
            }}>
              <span className="mono-spec" style={{ color: '#38BDF8', fontSize: '0.9rem' }}>⌘</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search workflows..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>ESC</span>
            </div>

            {/* Actions List */}
            <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '8px' }}>
              {filteredActions.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                  No workflows found for "{query}"
                </div>
              ) : (
                filteredActions.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => handleSelect(act)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.12s ease',
                      marginBottom: '2px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: '600', color: '#FFFFFF' }}>{act.title}</span>
                        <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#38BDF8', background: 'rgba(56,189,248,0.1)', padding: '1px 5px', borderRadius: '4px' }}>
                          {act.category}
                        </span>
                      </div>
                      <p style={{ margin: '2px 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>{act.desc}</p>
                    </div>

                    <span className="mono-spec" style={{ background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.68rem', color: '#94A3B8' }}>
                      {act.shortcut}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Footer Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                THE EDITLY FOUNDRY OS
              </span>
              <span className="mono-spec" style={{ fontSize: '0.68rem', color: '#38BDF8' }}>
                SELECT TO JUMP ↵
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
