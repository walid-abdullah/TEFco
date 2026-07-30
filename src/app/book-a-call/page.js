import React from 'react';
import Link from 'next/link';
import BookingFormClient from '@/components/BookingFormClient';

export const metadata = {
  title: 'Book a Call | Editly Foundry',
  description: 'Book a consultation with Editly Foundry.',
};

export default function BookACall() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-subtitle" style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-blue)' }}>Consultation</span>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>Book Your <span className="combination-font">Discovery Call</span></h1>
            <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Choose a time that works for you. Let's discuss your brand, your goals, and how we can elevate your content.
            </p>
          </div>

          <div className="booking-container responsive-booking-container reveal-on-scroll">
            
            {/* Left Info Column */}
            <div className="booking-info">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '700' }}>What to expect:</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-blue)', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>A 30-minute deep dive into your current content strategy.</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-blue)', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>Actionable feedback on how to improve retention and engagement.</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--accent-blue)', marginTop: '4px', fontSize: '1.2rem' }}></i>
                  <span>Custom pricing quote based on your editing volume.</span>
                </li>
              </ul>

              <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Direct Contact</h4>
                <p style={{ margin: '0 0 5px 0', color: 'var(--text-secondary)' }}><i className="fa-solid fa-envelope" style={{ width: '20px', color: 'var(--accent-blue)' }}></i> theeditlyfoundry@gmail.com</p>
                <p style={{ margin: '0', color: 'var(--text-secondary)' }}><i className="fa-brands fa-whatsapp" style={{ width: '20px', color: 'var(--accent-blue)' }}></i> 01886 755 888</p>
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
              <BookingFormClient />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
