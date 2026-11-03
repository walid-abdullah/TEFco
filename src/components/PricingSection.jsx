import Link from "next/link";
import CustomPriceCard from "./CustomPriceCard";
import { pricingPlans } from "@/data/pricingPlans";
import { servicePrices } from "@/data/servicePrices";

export default function PricingSection() {
  return (
    <>
      <section className="sg-price-stage is-page on-ink">
        <div className="container">
          <span className="section-subtitle">Monthly packages. Pause or cancel anytime.</span>
          <h1 className="sg-price-word">Pricing</h1>
          <div className="sg-price-cards" style={{ "--cards": pricingPlans.length + 1 }}>
            {pricingPlans.map((plan) => (
              <article className={`sg-price-card${plan.isPopular ? " is-popular" : ""}`} key={plan.id}>
                <div className="sg-price-card-top">
                  <h2>{plan.name}</h2>
                  <strong>${plan.monthlyPrice.toLocaleString("en-US")}<small> / month</small></strong>
                </div>
                <div className="sg-price-card-body">
                  <p>{plan.audience}</p>
                  <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>
                <Link href={`/book-a-call?plan=${encodeURIComponent(plan.name)}&budget=${encodeURIComponent(`$${plan.monthlyPrice} per month`)}`} className="sg-price-btn">Choose {plan.name} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
            <CustomPriceCard title="Custom" unit="/ month" note="Choose any budget. We will discuss what you need and build the package around it." />
          </div>
        </div>
      </section>

      <section className="sg-band sg-rates">
        <div className="container sg-split">
          <div>
            <span className="section-subtitle">No package needed</span>
            <h2>Just need<br /><span className="combination-font">one project?</span></h2>
          </div>
          <div className="sg-rates-list">
            {Object.entries(servicePrices).map(([service, items]) => (
              <div key={service} data-rise>
                <h3>{service}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item.name}><span>{item.name}<em>{item.note}</em></span><strong>${item.price}</strong></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
