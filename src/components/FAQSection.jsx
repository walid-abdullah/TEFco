"use client";

export default function FAQSection({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="sg-faq">
      <div className="container sg-faq-grid">
        <div className="reveal-on-scroll">
          <span className="section-subtitle">Before we begin</span>
          <h2>Good questions.<br /><span className="combination-font">Clear answers.</span></h2>
        </div>
        <div className="sg-faq-list reveal-on-scroll">
          {faqs.map((faq, index) => (
            <details key={faq._id || index}>
              <summary>
                <span>{faq.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
