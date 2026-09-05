"use client";

import React, { useState } from "react";
import Link from "next/link";

const defaultPlans = [
  {
    id: "starter",
    name: "Starter Pod",
    badge: "3 SLOTS REMAINING",
    audience: "For a consistent short-form cadence.",
    description:
      "A focused editing partner for creators and growing brands building a dependable publishing rhythm.",
    monthlyPrice: 999,
    quarterlyPrice: 849,
    duration: "/ month",
    isPopular: false,
    features: [
      "12 Short-Form Videos (Reels, TikTok, Shorts)",
      "48-Hour Standard SLA Turnaround",
      "Kinetic Typography & Sound Design",
      "Frame.io Timecode Reviewing",
      "Dedicated Slack & WhatsApp Channel",
      "1 Active Concurrent Request",
      "Unlimited Edit Revisions",
      "Pause or Cancel Anytime",
    ],
  },
  {
    id: "growth",
    name: "Growth Retainer",
    badge: "MOST POPULAR // 2 SLOTS LEFT",
    audience: "For teams ready to increase output.",
    description:
      "The flagship studio tier for authority creators and high-growth businesses demanding quality at speed.",
    monthlyPrice: 1499,
    quarterlyPrice: 1275,
    duration: "/ month",
    isPopular: true,
    features: [
      "24 Short-Form Videos + 2 Long-Form (Podcasts/YT)",
      "24 to 48-Hour Priority Turnaround",
      "DaVinci Resolve ACES Color Science",
      "iZotope RX Audio Mastering (-14 LUFS)",
      "Senior Lead Editor & Art Director",
      "2 Active Concurrent Requests",
      "Custom High-CTR YouTube Thumbnails",
      "Unlimited Revisions & VIP Slack Support",
    ],
  },
  {
    id: "scale",
    name: "Scale & Enterprise",
    badge: "DEDICATED TEAM",
    audience: "For high-volume content operations.",
    description:
      "A dedicated multi-editor production pod for venture-backed startups and media brands with serious volume.",
    monthlyPrice: 2499,
    quarterlyPrice: 2125,
    duration: "/ month",
    isPopular: false,
    features: [
      "Dedicated 3-Editor Video Production Pod",
      "Unlimited Video Queue & High Volume Output",
      "24-Hour Express Turnaround SLA",
      "Full 3D SaaS Motion & Product Demos",
      "Multi-Camera Podcast Ingest & 1-to-30 Engine",
      "Creative Director & Content Strategist",
      "Source File Deliveries (.AEP / .PRPROJ)",
      "Custom SLA Guarantee & NDA Protection",
    ],
  },
];

export default function PricingSection({ description, pricingData = [] }) {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = pricingData.length > 0 ? pricingData : defaultPlans;

  return (
    <section id="pricing" className="pricing-section pricing-hero-section">
      <div className="container pricing-container">
        <div className="pricing-intro reveal-on-scroll">
          <div className="pricing-eyebrow">
            <span className="about-eyebrow-line" />
            <span className="mono-spec">THE EDITLY FOUNDRY / RETAINERS</span>
          </div>
          <h1 className="pricing-title">
            A better edit starts with
            <span className="combination-font"> a better system.</span>
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
