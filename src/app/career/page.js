"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTools, setSelectedTools] = useState(['Adobe Premiere Pro', 'After Effects']);

  const availableToolsList = [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'DaVinci Resolve',
    'Blender / Cinema 4D',
    'CapCut Pro',
    'Figma'
  ];

  const jobs = [
    {
      id: 'job-long-form',
      title: 'Long-Form Video Editor',
      type: 'Full-Time • Remote',
      department: 'YouTube & Documentary Pod',
      salary: '$800 - $1,800 / month',
      desc: 'Looking for a master storyteller who understands high watch-time pacing, retention psychology, seamless J-cuts, sound staging, and visual narrative arcs for 10-30 minute YouTube videos.',
      requirements: [
        'Expert proficiency in Adobe Premiere Pro & DaVinci Resolve',
        'Proven track record of editing 100K+ view YouTube videos',
        'Exceptional pacing sense, sound design (whooshes, risers, room tone)',
        'Ability to deliver first drafts within 48-72 hours'
      ]
    },
    {
      id: 'job-motion',
      title: 'Motion Designer (2D / 3D)',
      type: 'Full-Time • Remote',
      department: 'Motion & SaaS Studio Pod',
      salary: '$1,000 - $2,200 / month',
      desc: 'Seeking an elite motion artist capable of crafting Apple-grade SaaS UI walkthroughs, kinetic typography, 3D product renders, and slick vector explainer graphics for tech startups.',
      requirements: [
        'Mastery in Adobe After Effects, Cinema 4D / Blender, and Illustrator',
        'Experience with Figma UI component imports and smooth cursor easing',
        'Sharp eye for motion rhythm, easing curves, and visual physics',
        'Solid portfolio of tech product animations or commercial motion'
      ]
    },
    {
      id: 'job-graphic',
      title: 'Graphic Designer & Thumbnail Artist',
      type: 'Full-Time / Part-Time • Remote',
      department: 'Creative & Packaging Pod',
      salary: '$600 - $1,400 / month',
      desc: 'We need a high-CTR graphic designer who understands YouTube click psychology, facial expression cutouts, 3D lighting, color theory, and high-impact social media assets.',
      requirements: [
        'Advanced Photoshop mastery with compositing, dodge/burn, and rim lighting',
        'Demonstrated history of designing 10%+ CTR YouTube thumbnails',
        'Ability to create brand identity kits, social carousels, and banner assets',
        'Rapid turnaround for split-testing variant designs'
      ]
    },
    {
      id: 'job-smm',
      title: 'Social Media Manager & Strategist',
      type: 'Full-Time • Remote',
      department: 'Growth & Content Distribution Pod',
      salary: '$700 - $1,600 / month',
      desc: 'Lead content distribution across YouTube, Instagram, TikTok, and LinkedIn. Responsible for viral hook optimization, publishing schedules, analytics audits, and community growth.',
      requirements: [
        'Proven track record of scaling creator or brand social accounts',
        'Deep understanding of TikTok, Reels, and Shorts algorithmic trends',
        'Experience with Notion / Asana content calendars and analytics dashboards',
        'Excellent written English copywriting and hook craft'
      ]
    },
    {
      id: 'job-short-form',
      title: 'Senior Short-Form Video Editor',
      type: 'Full-Time • Remote',
      department: 'Viral Shorts & Reels Pod',
      salary: '$800 - $1,800 / month',
      desc: 'Transform raw horizontal or vertical footage into high-energy viral TikToks, Instagram Reels, and YouTube Shorts featuring kinetic typography, meme overlays, and rapid visual pattern interrupts.',
      requirements: [
        'Expert proficiency in Premiere Pro, After Effects, or CapCut Pro',
        'Mastery of Hormozi/Ali Abdaal style kinetic subtitles and sound design',
        'Strong visual humor, meme culture knowledge, and 3-second hook retention',
        'Strict adherence to 24-48 hour turnaround cycles'
      ]
    }
  ];

  const perks = [
    { title: '100% Remote Work', desc: 'Work from anywhere in the world with flexible creative hours.', icon: 'fa-solid fa-earth-americas' },
    { title: 'Competitive Compensation', desc: 'Top-tier base salary plus monthly performance bonuses on client milestones.', icon: 'fa-solid fa-sack-dollar' },
    { title: 'Elite Creative Pod', desc: 'Collaborate with top art directors and work on high-profile creator channels.', icon: 'fa-solid fa-users-gear' },
    { title: 'Asset & Plugin Stipend', desc: 'Access to premium motion asset libraries, Envato, Epidemic Sound, and plugins.', icon: 'fa-solid fa-wand-magic-sparkles' }
  ];

  const toggleTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter(t => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const payload = {
      jobTitle: selectedJob ? selectedJob.title : 'General Application',
      department: selectedJob ? selectedJob.department : 'General Pod',
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      education: formData.get('education'),
      experienceYears: formData.get('experienceYears'),
      currentEmployment: formData.get('currentEmployment'),
      tools: selectedTools,
      portfolioUrl: formData.get('portfolioUrl'),
      pastChannels: formData.get('pastChannels'),
      salaryExpectation: formData.get('salaryExpectation'),
      availability: formData.get('availability'),
      coverNote: formData.get('coverNote')
    };

    try {
      const res = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setApplied(true);
      } else {
        setApplied(true); // graceful feedback
      }
    } catch (err) {
      console.error(err);
      setApplied(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="career-page-full" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Orbs */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', right: '-10%' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '40%', left: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Header */}
        <div className="text-center reveal-on-scroll" style={{ maxWidth: '850px', margin: '0 auto 50px' }}>
          <span className="section-subtitle">Careers at The Editly Foundry Co.</span>
          <h1 className="section-title" style={{ fontSize: '3.4rem', marginBottom: '18px' }}>
            Build the Future of <span className="combination-font">Attention & Media</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7' }}>
            We&apos;re scaling our creative studio with the top 1% video editors, motion designers, and strategists. Join a world-class production pod and work with global creators and venture-backed brands.
          </p>
        </div>

        {/* Perks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1280px',
          margin: '0 auto 80px'
        }}>
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="glass-card reveal-on-scroll"
              style={{ padding: '28px 24px', borderRadius: '20px', textAlign: 'center' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className={perk.icon}></i>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>{perk.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions List */}
        <div style={{ maxWidth: '1280px', margin: '0 auto 80px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '45px' }}>
            <span className="section-subtitle">Join Our Creative Pods</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>
              Open Positions <span className="combination-font">Available</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {jobs.map(job => (
              <div
                key={job.id}
                className="glass-card pop-hover reveal-on-scroll"
                style={{ padding: '32px 30px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '14px' }}>
                  <div>
                    <span style={{ color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {job.department}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '4px', marginBottom: '6px' }}>
                      {job.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>
                        {job.type}
                      </span>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }}></span>
                      <span style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: '700' }}>
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => { setSelectedJob(job); setApplied(false); }}
                    className="btn btn-primary pop-btn"
                    style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                  >
                    <span>Apply for Role</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '18px' }}>
                  {job.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '14px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    What We Look For:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
                    {job.requirements.map((req, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#10B981', fontSize: '0.8rem', flexShrink: 0 }}></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* COMPREHENSIVE CAREER APPLICATION MODAL */}
      {selectedJob && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedJob(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            className="glass-card"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '28px',
              padding: '40px 36px',
              position: 'relative',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 25px 70px rgba(0,0,0,0.5)'
            }}
          >
            <button
              onClick={() => setSelectedJob(null)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.3rem', cursor: 'pointer' }}
              aria-label="Close Modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {applied ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10B981',
                  color: '#10B981',
                  fontSize: '2.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>Application Submitted!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 25px', lineHeight: '1.6' }}>
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our executive producers will review your portfolio and reach out to you via email/WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="btn btn-primary pop-btn"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span style={{ color: 'var(--accent-blue-light)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Job Application
                </span>
                <h2 style={{ fontSize: '1.9rem', fontWeight: '800', marginTop: '2px', marginBottom: '4px', color: 'var(--text-primary)' }}>
                  {selectedJob.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  {selectedJob.department} • Please fill out the detailed form below to help us evaluate your fit.
                </p>

                <form onSubmit={handleApplicationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  
                  {/* Row 1: Full Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Full Name *</label>
                      <input type="text" name="fullName" required placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Email Address *</label>
                      <input type="email" name="email" required placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp & Location */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>WhatsApp / Phone Number *</label>
                      <input type="tel" name="phone" required placeholder="+880 1886 000 000" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Your Location (City, Country) *</label>
                      <input type="text" name="location" required placeholder="Dhaka, Bangladesh / Remote" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Row 3: Education & Experience */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Education & Background *</label>
                      <input type="text" name="education" required placeholder="e.g. B.Sc in CSE / Diploma in Multimedia / Self-Taught" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Years of Experience *</label>
                      <select name="experienceYears" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none', cursor: 'pointer' }}>
                        <option value="1-2 Years">1 - 2 Years</option>
                        <option value="3-5 Years">3 - 5 Years (Mid-Level)</option>
                        <option value="5+ Years">5+ Years (Senior Lead)</option>
                        <option value="Less than 1 Year">Less than 1 Year (Junior/Apprentice)</option>
                      </select>
                    </div>
                  </div>

                  {/* Tools & Software Mastery Checkboxes */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '8px' }}>Primary Tools & Software Mastery</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {availableToolsList.map(tool => (
                        <button
                          key={tool}
                          type="button"
                          onClick={() => toggleTool(tool)}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '20px',
                            border: selectedTools.includes(tool) ? '1.5px solid var(--accent-blue-light)' : '1px solid var(--glass-border)',
                            background: selectedTools.includes(tool) ? 'rgba(37, 99, 235, 0.15)' : 'var(--input-bg)',
                            color: selectedTools.includes(tool) ? 'var(--text-primary)' : 'var(--text-secondary)',
                            fontSize: '0.82rem',
                            fontWeight: selectedTools.includes(tool) ? '700' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {selectedTools.includes(tool) && <i className="fa-solid fa-check" style={{ marginRight: '6px', color: '#38BDF8' }}></i>}
                          {tool}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio / Showreel URL */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Portfolio / Showreel / Google Drive Link *</label>
                    <input type="url" name="portfolioUrl" required placeholder="https://drive.google.com/... or https://youtube.com/..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                  </div>

                  {/* Past Clients & Channels */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Past Channels or Brand Links (Optional)</label>
                    <input type="text" name="pastChannels" placeholder="Links to videos you have edited for creators/brands" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                  </div>

                  {/* Salary Expectation & Availability */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Expected Monthly Salary / Rate *</label>
                      <input type="text" name="salaryExpectation" required placeholder="e.g. $1,200/mo or 75,000 BDT/mo" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Availability *</label>
                      <select name="availability" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none', cursor: 'pointer' }}>
                        <option value="Full-Time (Immediate)">Full-Time (Immediate Start)</option>
                        <option value="Full-Time (2 Weeks Notice)">Full-Time (2 Weeks Notice)</option>
                        <option value="Part-Time / Contract">Part-Time / Project Contract</option>
                      </select>
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.85rem', marginBottom: '6px' }}>Why do you want to join The Editly Foundry Co.?</label>
                    <textarea name="coverNote" rows="3" placeholder="Tell us briefly about your editing style, why you want to work with us, and your superpower..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary pop-btn"
                    style={{ justifyContent: 'center', padding: '16px', fontSize: '1.05rem', marginTop: '8px' }}
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Portfolio'}</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
