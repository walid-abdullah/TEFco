"use client";
import React, { useState, useEffect } from 'react';

export default function BookingFormClient({ isFounder = false }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [isCustomTime, setIsCustomTime] = useState(false);
  const [customTimeValue, setCustomTimeValue] = useState('');

  // Generate next 5 weekdays including today
  useEffect(() => {
    const dates = [];
    let d = new Date(); // Start from today
    
    while (dates.length < 5) {
      if (d.getDay() !== 0 && d.getDay() !== 6) { // Skip weekends
        const dayName = dates.length === 0 && d.getDate() === new Date().getDate() ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' });
        const monthName = d.toLocaleDateString('en-US', { month: 'short' });
        const dateNum = d.getDate();
        dates.push({ full: new Date(d), display: `${dayName}, ${monthName} ${dateNum}` });
      }
      d.setDate(d.getDate() + 1); // Move to next day for the next iteration
    }
    setAvailableDates(dates);
  }, []);

  const times = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    
    // Add additional state values to payload
    const payload = {
      ...formValues,
      date: selectedDate,
      time: isCustomTime ? customTimeValue : selectedTime,
      isCustomTime,
      isFounder
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setStep(1);
          setSelectedDate(null);
          setSelectedTime(null);
          e.target.reset();
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send booking request. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: showNotification ? '30px' : '-100px', // Changed to TOP to avoid button overlap
          right: '30px',
          opacity: showNotification ? 1 : 0,
          pointerEvents: showNotification ? 'auto' : 'none',
          background: '#22c55e',
          color: '#fff',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 9999,
          fontWeight: '500'
        }}
      >
        <i className="fa-solid fa-circle-check" style={{ fontSize: '1.2rem' }}></i>
        <span>Booking confirmed for {selectedTime}! Check your email.</span>
      </div>

      <div style={{ background: 'var(--bg-primary)', borderRadius: '15px', padding: '10px' }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', gap: '10px' }}>
          <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: step >= 1 ? 'var(--accent-blue-primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></div>
          <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: step >= 2 ? 'var(--accent-blue-primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></div>
        </div>

        {step === 1 ? (
          <div className="fade-in">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', fontWeight: '600' }}>1. Select Date & Time</h3>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available Dates</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' }}>
                {availableDates.map((date, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(date.display)}
                    style={{
                      padding: '12px 10px', borderRadius: '10px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600',
                      background: selectedDate === date.display ? 'var(--accent-blue-primary)' : 'var(--bg-secondary)',
                      color: selectedDate === date.display ? '#fff' : 'var(--text-primary)',
                      border: selectedDate === date.display ? '1px solid var(--accent-blue-primary)' : '1px solid var(--glass-border)',
                      boxShadow: selectedDate === date.display ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    {date.display.split(',')[0]}<br/>
                    <span style={{ fontSize: '1.1rem' }}>{date.display.split(',')[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="fade-in" style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available Times (EST - Eastern Standard Time)</label>
                
                {!isCustomTime ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {times.map((time, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '600',
                          background: selectedTime === time ? 'var(--text-primary)' : 'var(--bg-secondary)',
                          color: selectedTime === time ? 'var(--bg-primary)' : 'var(--text-primary)',
                          border: selectedTime === time ? '1px solid var(--text-primary)' : '1px solid var(--glass-border)',
                          transition: 'all 0.2s'
                        }}
                      >
                        <i className="fa-regular fa-clock" style={{ marginRight: '8px' }}></i> {time}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => { setIsCustomTime(true); setSelectedTime(''); }}
                      style={{
                        gridColumn: '1 / -1', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '600',
                        background: 'transparent', color: 'var(--text-secondary)', border: '1px dashed var(--glass-border)', transition: 'all 0.2s'
                      }}
                    >
                      <i className="fa-solid fa-plus" style={{ marginRight: '8px' }}></i> Propose Custom Time
                    </button>
                  </div>
                ) : (
                  <div className="fade-in" style={{ display: 'flex', gap: '10px' }}>
                    <input 
                      type="time" 
                      value={customTimeValue}
                      onChange={(e) => {
                        setCustomTimeValue(e.target.value);
                        // Convert "14:30" to "02:30 PM" format roughly for display, or just use raw value
                        if(e.target.value) {
                          const [h, m] = e.target.value.split(':');
                          const hours = parseInt(h);
                          const ampm = hours >= 12 ? 'PM' : 'AM';
                          const displayHours = hours % 12 || 12;
                          setSelectedTime(`${displayHours}:${m} ${ampm}`);
                        } else {
                          setSelectedTime(null);
                        }
                      }}
                      style={{ flex: 1, padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none' }} 
                    />
                    <button 
                      type="button" 
                      onClick={() => { setIsCustomTime(false); setCustomTimeValue(''); setSelectedTime(null); }}
                      style={{ padding: '0 20px', borderRadius: '10px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}

            <button 
              type="button" 
              onClick={() => setStep(2)} 
              disabled={!selectedDate || !selectedTime}
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '15px', opacity: (!selectedDate || !selectedTime) ? 0.5 : 1, cursor: (!selectedDate || !selectedTime) ? 'not-allowed' : 'pointer' }}
            >
              Continue to Details <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.3rem', margin: 0, fontWeight: '600' }}>2. Your Details</h3>
              <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'var(--accent-blue-primary)', cursor: 'pointer', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-pen" style={{ marginRight: '5px' }}></i> Edit Time
              </button>
            </div>

            <div style={{ padding: '15px', background: 'var(--glass-bg)', borderRadius: '10px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Selected Slot</div>
                <div style={{ fontWeight: '600' }}>{selectedDate} at {selectedTime}</div>
              </div>
            </div>

            <div className="form-group-row">
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease' }} />
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address *</label>
              <input type="email" name="email" placeholder="you@example.com" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>WhatsApp Number <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(For Instant Booking Confirmation)</span></label>
              <input type="tel" name="whatsapp" placeholder="+1 (555) 000-0000 or +880 1..." style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                YouTube / Social Link / Channel Name <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(Optional)</span>
              </label>
              <input 
                type="text" 
                name="channelLink" 
                placeholder="https://youtube.com/@yourbrand or @username (optional)" 
                style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease' }} 
              />
            </div>

            {isFounder && (
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Current Monthly Revenue (Approx)</label>
                <select name="revenue" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none' }}>
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $30k">$10k - $30k</option>
                  <option value="$30k+">$30k+</option>
                </select>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Biggest Bottleneck / Need?</label>
              <textarea name="needs" placeholder="Tell us briefly what you're struggling with..." rows="3" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none', transition: 'border 0.3s ease', resize: 'none' }}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={`btn btn-primary ${isFounder ? 'pulse-anim' : ''}`} style={{ marginTop: '10px', width: '100%', justifyContent: 'center', padding: '15px', opacity: isSubmitting ? 0.7 : 1, ...(isFounder ? {background: 'linear-gradient(135deg, #1976D2 0%, #0d47a1 100%)', border: 'none'} : {}) }}>
              <span>{isSubmitting ? 'Sending Request...' : (isFounder ? 'Confirm Strategy Call' : 'Confirm Booking')}</span>
              {!isSubmitting && <i className="fa-solid fa-arrow-right"></i>}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
