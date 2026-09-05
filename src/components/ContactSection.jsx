"use client";
import React, { useState } from 'react';
import { useExperiment } from '@/lib/experiments';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState('book'); // 'book' or 'message'
  const [showNotification, setShowNotification] = useState(false);
  const contactVariant = useExperiment('contact_section_copy_variant', ['control', 'growth_focus', 'trust_focus'], 'control');
  const contactCopy = {
    control: {
      title: "Let's Build Something ",
      highlight: 'Great',
      description: "Choose how you'd like to connect with us.",
      bookCta: 'Request Strategy Call',
    },
    growth_focus: {
      title: 'Turn Attention Into ',
      highlight: 'Pipeline',
      description: 'Tell us what you want to grow, and we’ll map the fastest path to more qualified leads.',
      bookCta: 'Get My Growth Audit',
    },
    trust_focus: {
      title: 'Book a Quick ',
      highlight: 'Strategy Call',
      description: 'We reply quickly, clarify the bottleneck, and recommend the most effective production path for your brand.',
      bookCta: 'Book a Call',
    },
  }[contactVariant];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    
    // Distinguish between booking tab and message tab
    if (activeTab === 'book') {
      formValues.needs = formValues.needs || formValues.bottleneck;
    } else {
      // General message
      formValues.needs = ''; 
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setShowNotification(true);
        e.target.reset();
        setTimeout(() => setShowNotification(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <section id="contact" className="contact-section section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      
      {/* Toast Notification */}
      <div 
        style={{
          position: 'fixed',
          bottom: showNotification ? '30px' : '-100px',
          right: '30px',
          background: '#22c55e', // Green success color
          color: '#fff',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 9999,
          fontWeight: '500'
        }}
      >
        <i className="fa-solid fa-circle-check" style={{ fontSize: '1.2rem' }}></i>
        <span>{activeTab === 'book' ? 'Booking request sent successfully!' : 'Message sent successfully!'}</span>
      </div>

      <div className="container">
        <div className="section-header text-center reveal-on-scroll" style={{ marginBottom: '50px' }}>
          <h2 className="section-title" style={{ fontSize: '3.5rem' }}>{contactCopy.title}<span className="combination-font">{contactCopy.highlight}</span></h2>
          <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            {contactCopy.description}
          </p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Left: Info */}
          <div className="contact-info reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '15px', paddingTop: '30px' }}>
            
            {/* Founder Booking Highlight */}
            <div className="founder-contact-card glass-card pop-hover" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '25px', border: '1px solid rgba(25, 118, 210, 0.4)', background: 'rgba(25, 118, 210, 0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0', border: '2px solid var(--accent-blue)' }}>
                  <img src="/Picture/square.png" alt="Walid Abdullah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', fontWeight: '700' }}>Walid Abdullah</h4>
                  <span style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & CEO</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                Book a 1-on-1 strategy call directly with our Founder to discuss your brand&apos;s potential and viral growth roadmap.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '2rem', color: '#1976D2', width: '40px', textAlign: 'center' }}><i className="fa-solid fa-envelope"></i></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email Us</h4>
                <a href="mailto:theeditlyfoundry@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>theeditlyfoundry@gmail.com</a>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '2rem', color: '#25D366', width: '40px', textAlign: 'center' }}><i className="fa-brands fa-whatsapp"></i></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>WhatsApp</h4>
                <a href="https://wa.me/8801886755888" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>+880 1886 755 888</a>
              </div>
            </div>

            {/* Social Icons Row */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px', justifyContent: 'center' }}>
              <a href="https://www.facebook.com/editly.foundry/" target="_blank" rel="noreferrer" className="glass-youtube-btn pop-hover" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', background: '#1877F2', border: 'none', boxShadow: '0 5px 15px rgba(24, 119, 242, 0.3)' }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/walid-abdullah/" target="_blank" rel="noreferrer" className="glass-youtube-btn pop-hover" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', background: '#0A66C2', border: 'none', boxShadow: '0 5px 15px rgba(10, 102, 194, 0.3)' }}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/theeditly_foundry/" target="_blank" rel="noreferrer" className="glass-youtube-btn pop-hover" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none', boxShadow: '0 5px 15px rgba(228, 64, 95, 0.3)' }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            {/* Response Time Badge */}
            <div className="pop-hover" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '15px', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', animation: 'greenPulse 2s infinite' }}></div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Avg. Response Time: <strong style={{ color: 'var(--text-primary)' }}>0-10 Mins</strong></span>
            </div>

          </div>

          {/* Right: Interactive Form */}
          <div className="glass-card reveal-on-scroll" style={{ padding: '0', background: 'var(--bg-primary)', border: '1px solid var(--glass-border)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
            {/* Form Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)' }}>
              <button 
                onClick={() => setActiveTab('book')}
                style={{ 
                  flex: 1, padding: '20px 10px', fontSize: '1.05rem', fontWeight: '600', 
                  background: activeTab === 'book' ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                  color: activeTab === 'book' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  border: 'none', borderBottom: activeTab === 'book' ? '3px solid var(--accent-blue)' : '3px solid transparent',
                  cursor: 'pointer', transition: 'all 0.3s ease'
                }}
              >
                <i className="fa-solid fa-calendar-check" style={{ marginRight: '8px' }}></i> Book Call
              </button>
              <button 
                onClick={() => setActiveTab('message')}
                style={{ 
                  flex: 1, padding: '20px 10px', fontSize: '1.05rem', fontWeight: '600', 
                  background: activeTab === 'message' ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                  color: activeTab === 'message' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  border: 'none', borderBottom: activeTab === 'message' ? '3px solid var(--accent-blue)' : '3px solid transparent',
                  cursor: 'pointer', transition: 'all 0.3s ease'
                }}
              >
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i> Send Message
              </button>
            </div>

            <div style={{ padding: '30px' }}>
              {activeTab === 'book' ? (
                // Booking Form
                <form className="contact-form fade-in" onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-regular fa-user" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                      <input type="text" name="firstName" placeholder="Enter your full name" required style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-regular fa-envelope" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                      <input type="email" name="email" placeholder="Enter your email address" required style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Channel / Brand Link</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-link" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                      <input type="url" name="channelLink" placeholder="https://youtube.com/..." required style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Current Bottleneck</label>
                    <textarea name="bottleneck" rows="3" placeholder="Tell us what's holding you back..." required style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary pulse-anim" style={{ width: '100%', justifyContent: 'center', padding: '15px', background: 'linear-gradient(135deg, #1976D2 0%, #0d47a1 100%)', border: 'none' }}>
                    {contactCopy.bookCta}
                  </button>
                </form>
              ) : (
                // General Contact Form
                <form className="contact-form fade-in" onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-regular fa-user" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                      <input type="text" name="firstName" placeholder="Enter your full name" required style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                      <input type="email" name="email" placeholder="Email" required style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>WhatsApp</label>
                      <input type="tel" name="whatsapp" placeholder="Phone" required style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Interested In</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-list-ul" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                      <select name="service" required style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                        <option value="" style={{ color: '#000' }}>Select a service...</option>
                        <option value="podcast" style={{ color: '#000' }}>Podcast Editing</option>
                        <option value="reels" style={{ color: '#000' }}>Reels / Shorts</option>
                        <option value="talking_head" style={{ color: '#000' }}>Talking Head Videos</option>
                        <option value="ugc" style={{ color: '#000' }}>UGC Ads</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                    <textarea name="message" rows="4" placeholder="How can we help you?" required style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '15px', background: 'rgba(255,255,255,0.05)' }}>
                    Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Location Map & Address */}
      <div className="location-section reveal-on-scroll" style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--glass-border)', maxWidth: '1000px', margin: '60px auto 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Our Location</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            <i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-blue)', marginRight: '10px' }}></i>
            Priyanka City, Road- 03, House- 23, Floor- 4th, Sector- 12, Uttara- 1230
          </p>
        </div>
        <div className="location-map" style={{ borderRadius: '15px', overflow: 'hidden', height: '350px', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <iframe className="adaptive-map" src="https://maps.google.com/maps?q=23.86813,90.38110&z=15&output=embed" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" />
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes greenPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}</style>
    </section>
  );
}
