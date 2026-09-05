import React from 'react';
import Link from 'next/link';
import BookingFormClient from '@/components/BookingFormClient';

export const metadata = {
  title: 'Book a Call with Walid | Editly Foundry',
  description: 'Book a 1-on-1 strategy call with Walid Abdullah, Founder & CEO of Editly Foundry.',
};

export default function FounderCall() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          
          <div className="section-header text-center reveal-on-scroll">
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '3px solid var(--accent-blue)', boxShadow: '0 0 20px rgba(25, 118, 210, 0.3)' }}>
              <img src="/Picture/square.png" alt="Walid Abdullah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className="section-subtitle" style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-blue)' }}>Strategy Session</span>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>Meet with <span className="combination-font">Walid Abdullah</span></h1>
            <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Founder & CEO of Editly Foundry. Let&apos;s discuss your vision and build a roadmap for viral growth.
            </p>
          </div>

          <div className="booking-container responsive-booking-container reveal-on-scroll">
            
            {/* Left Info Column */}
            <div className="booking-info">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '700' }}>Why book this call?</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '25px' }}>
                As the founder, I personally oversee the creative direction of our top-tier clients. In this exclusive 1-on-1 session, we won&apos;t just talk about editing; we&apos;ll dissect your current content strategy and identify exact leverage points to maximize your retention and conversion.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-bolt" style={{ color: '#F2C94C', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>Direct access to leadership and high-level strategy.</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-chart-line" style={{ color: '#F2C94C', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>Tailored blueprint for channel growth.</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-handshake" style={{ color: '#F2C94C', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>Custom enterprise or agency partnership plans.</span>
                </li>
              </ul>

              <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(25, 118, 210, 0.05)', borderRadius: '15px', border: '1px solid rgba(25, 118, 210, 0.2)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--accent-blue)' }}>Priority Contact</h4>
                <p style={{ margin: '0 0 5px 0', color: 'var(--text-secondary)' }}><i className="fa-brands fa-whatsapp" style={{ width: '20px', color: 'var(--text-primary)' }}></i> 01886 755 888 (Direct)</p>
                <p style={{ margin: '0', color: 'var(--text-secondary)' }}><i className="fa-brands fa-linkedin" style={{ width: '20px', color: 'var(--text-primary)' }}></i> /in/walidabdullah</p>
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: '30px' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted By Creators On</p>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <i className="fa-brands fa-youtube" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }}></i>
                  <i className="fa-brands fa-tiktok" style={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)' }}></i>
                  <i className="fa-brands fa-instagram" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }}></i>
                  <i className="fa-brands fa-linkedin" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }}></i>
                </div>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="booking-form">
              <BookingFormClient isFounder={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
