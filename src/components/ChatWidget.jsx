"use client";
import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="live-chat-widget" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      
      {/* Chat Popup Window */}
      <div 
        style={{
          position: 'absolute',
          bottom: '75px',
          right: '0',
          width: '320px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
          border: '1px solid var(--glass-border)',
          overflow: 'hidden',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transformOrigin: 'bottom right'
        }}
      >
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1976D2 0%, #0d47a1 100%)', padding: '20px', color: 'white', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
              <img src="/Picture/square.png" alt="Team Editly" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', border: '2px solid #0d47a1' }}></div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 3px 0', fontSize: '1.1rem', fontWeight: '600' }}>Team Editly</h4>
            <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Typically replies in minutes</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px 12px 12px 2px', marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Hi there! 👋 How can we help you scale your brand today?
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://wa.me/8801886755888" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', background: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '10px', fontWeight: '600', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.4rem' }}></i>
              Chat on WhatsApp
            </a>
            
            <a href="https://m.me/editly.foundry" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', background: '#0084FF', color: 'white', textDecoration: 'none', borderRadius: '10px', fontWeight: '600', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <i className="fa-brands fa-facebook-messenger" style={{ fontSize: '1.4rem' }}></i>
              Chat on Messenger
            </a>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pulse-anim"
        style={{ 
          width: '60px', height: '60px', borderRadius: '50%', 
          background: 'linear-gradient(135deg, #1976D2 0%, #0d47a1 100%)', 
          color: 'white', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          fontSize: '1.6rem', boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)', 
          transition: 'transform 0.3s'
        }}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-message'}`} style={{ transition: 'all 0.3s', transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}></i>
      </button>

    </div>
  );
}
