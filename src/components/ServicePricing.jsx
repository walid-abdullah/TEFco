import Link from "next/link";
import CustomPriceCard from "./CustomPriceCard";
import { servicePrices } from "@/data/servicePrices";

export default function ServicePricing({ service }) {
  const prices = servicePrices[service] || [];

  return (
    <section className="sg-price-stage on-ink" aria-label={`${service} pricing`}>
      <div className="container">
        <span className="section-subtitle">{service}</span>
        <p className="sg-price-word" aria-hidden="true">Pricing</p>
        <div className="sg-price-cards" style={{ "--cards": prices.length + 1 }}>
          {prices.map((item) => (
            <article className={`sg-price-card${item.isPopular ? " is-popular" : ""}`} key={item.name}>
              <div className="sg-price-card-top">
                <h3>{item.name}</h3>
                <strong>${item.price.toLocaleString("en-US")}<small> {item.unit}</small></strong>
              </div>
              <div className="sg-price-card-body"><p>{item.note}</p></div>
              <Link href={`/book-a-call?service=${encodeURIComponent(service)}&budget=${encodeURIComponent(`$${item.price}`)}`} className="sg-price-btn">Get started <span aria-hidden="true">→</span></Link>
            </article>
          ))}
          <CustomPriceCard service={service} title="Your budget" />
        </div>
        <Link href="/pricing" className="sg-link sg-price-more">Publishing every month? See monthly packages <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
