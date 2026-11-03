import Link from "next/link";
import { pricingPlans } from "@/data/pricingPlans";

export default function PricingPreview() {
  return (
    <section className="sg-section sg-plans">
      <div className="container">
        <div className="home-foundry-section-head">
          <div>
            <span className="section-subtitle">Pricing</span>
            <h2>One monthly price.<br /><span className="combination-font">No long contract.</span></h2>
          </div>
          <Link href="/calculator" className="sg-link">Estimate your cost <span aria-hidden="true">→</span></Link>
        </div>
        <div className="sg-plans-grid">
          {pricingPlans.map((plan) => (
            <Link href="/pricing" key={plan.id} data-rise>
              <h3>{plan.name}</h3>
              <p>{plan.audience}</p>
              <strong>${plan.monthlyPrice.toLocaleString("en-US")}<small> / month</small></strong>
              <em>{plan.features[0]}</em>
            </Link>
          ))}
        </div>
        <Link href="/pricing" className="btn btn-primary sg-plans-cta">Compare all plans <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
