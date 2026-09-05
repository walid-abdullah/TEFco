"use client";

import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding" style={{ background: "var(--bg-primary)", paddingTop: '70px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Large Prominent Trust & Clutch Proof Banner */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: '45px' }}>
          <div className="luxury-proof-capsule">
            <div className="luxury-proof-chip luxury-proof-chip--trustpilot">
              <i className="fa-solid fa-star"></i>
              <span className="luxury-proof-chip-val">4.9/5</span>
              <span className="luxury-proof-chip-label">on Trustpilot</span>
            </div>

            <div className="luxury-proof-divider"></div>

            <div className="luxury-proof-chip luxury-proof-chip--clutch">
              <i className="fa-solid fa-award"></i>
              <span className="luxury-proof-chip-val">Top Video Agency</span>
              <span className="luxury-proof-chip-label">on Clutch (US/EU)</span>
            </div>
          </div>
        </div>

        <div className="section-header text-center reveal-on-scroll">
          <h2 className="section-title" style={{ fontSize: '3rem' }}>Frequently Asked <span className="combination-font">Questions</span></h2>
        </div>

        <div className="faq-container reveal-on-scroll" style={{ maxWidth: "800px", margin: "40px auto 0", display: "flex", flexDirection: "column", gap: "15px" }}>
          {faqs.map((faq, index) => (
            <div 
              key={faq._id || index} 
              className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
              style={{
                padding: "25px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: openIndex === index ? "1px solid var(--accent-blue)" : "1px solid var(--glass-border)"
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: 0, color: "var(--text-primary)" }}>
                  {faq.question}
                </h3>
                <div 
                  className="faq-icon" 
                  style={{ 
                    color: openIndex === index ? "var(--accent-blue)" : "var(--text-secondary)",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              
              <div 
                className="faq-answer" 
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, margin-top 0.4s ease",
                  marginTop: openIndex === index ? "15px" : "0"
                }}
              >
                <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
