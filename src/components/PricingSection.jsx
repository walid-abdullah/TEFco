"use client";

import React, { useState } from "react";
import Link from "next/link";
import { pricingPlans as defaultPlans } from "@/data/pricingPlans";


export default function PricingSection({ description, pricingData = [] }) {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = pricingData.length > 0 ? pricingData : defaultPlans;

  return (
    <section id="pricing" className="pricing-section pricing-hero-section">
      <div className="container pricing-container">
        <div className="pricing-intro on-iris sg-page-hero reveal-on-scroll">
          <div className="pricing-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="mono-spec">THE EDITLY FOUNDRY / RETAINERS</span>
          </div>
          <h1 className="pricing-title">
            Simple monthly plans
            <span className="combination-font"> for steady video.</span>
          </h1>
          <p className="pricing-lede">
            {description ||
              "Dedicated post-production capacity without the overhead of building an in-house team. Choose the rhythm that matches your ambition."}
          </p>
          <div className="pricing-proof-row">
            <span>
              <i className="fa-solid fa-check" aria-hidden="true" /> No long-term contract
            </span>
            <span>
              <i className="fa-solid fa-check" aria-hidden="true" /> Unlimited revisions
            </span>
            <span>
              <i className="fa-solid fa-check" aria-hidden="true" /> 24–48h delivery
            </span>
          </div>
        </div>

        <div className="pricing-switch-row reveal-on-scroll">
          <div>
            <span className="section-subtitle">Choose your operating rhythm</span>
            <p>Quarterly billing saves 15% and keeps your production queue moving.</p>
          </div>
          <div className="pricing-cycle-switch" role="group" aria-label="Billing cycle">
            {[
              { id: "monthly", label: "Monthly" },
              { id: "quarterly", label: "Quarterly", note: "SAVE 15%" },
            ].map((cycle) => (
              <button
                key={cycle.id}
                type="button"
                onClick={() => setBillingCycle(cycle.id)}
                className={billingCycle === cycle.id ? "active" : ""}
                aria-pressed={billingCycle === cycle.id}
              >
                {cycle.label}
                {cycle.note && <small>{cycle.note}</small>}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-plans-grid">
          {plans.map((plan, index) => {
            const price =
              billingCycle === "quarterly" && plan.quarterlyPrice
                ? plan.quarterlyPrice
                : plan.monthlyPrice;
            const monthlySavings =
              billingCycle === "quarterly" && plan.monthlyPrice
                ? plan.monthlyPrice - price
                : 0;

            return (
              <article
                key={plan.id}
                className={`pricing-plan-card glass-card reveal-on-scroll ${
                  plan.isPopular ? "is-featured" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.isPopular && <div className="pricing-featured-line" />}
                <div className="pricing-plan-top">
                  <div className="pricing-plan-meta">
                    <span className="mono-tag">{plan.badge}</span>
                    {plan.isPopular && <span className="pricing-recommended">RECOMMENDED</span>}
                  </div>
                  <h2>{plan.name}</h2>
                  <p className="pricing-plan-audience">{plan.audience}</p>
                  <p className="pricing-plan-description">{plan.description}</p>
                  <div className="pricing-price-row">
                    <span className="pricing-price">${price.toLocaleString()}</span>
                    <span className="pricing-duration">{plan.duration || "/ month"}</span>
                  </div>
                  {monthlySavings > 0 && (
                    <span className="pricing-savings">
                      Save ${monthlySavings.toLocaleString()} / month on quarterly billing
                    </span>
                  )}
                </div>

                <div className="pricing-feature-list">
                  <span className="mono-spec">WHAT&apos;S INCLUDED</span>
                  {plan.features.map((feature) => (
                    <div key={feature}>
                      <i className="fa-solid fa-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/book-a-call?plan=${encodeURIComponent(plan.name)}&budget=${encodeURIComponent(`$${price}/mo`)}`}
                  className={`btn ${plan.isPopular ? "btn-primary" : "btn-outline"} pricing-plan-cta`}
                >
                  <span>{plan.id === "scale" ? "Book strategy audit" : `Choose ${plan.name}`}</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
