"use client";

import Link from "next/link";
import { useState } from "react";
import BudgetPicker, { formatBudget } from "./BudgetPicker";

const STARTING_BUDGET = 500;

// Lets a visitor name their own budget and carries it through to the booking page.
export default function CustomPriceCard({ service, title = "Custom", note = "Tell us your budget and we will shape the work around it.", unit }) {
  const [budget, setBudget] = useState(formatBudget(STARTING_BUDGET));
  const params = new URLSearchParams({ budget });
  if (service) params.set("service", service);

  return (
    <article className="sg-price-card is-custom">
      <div className="sg-price-card-top">
        <h3>{title}</h3>
        <strong>{budget}{unit && <small> {unit}</small>}</strong>
      </div>
      <div className="sg-price-card-body">
        <p>{note}</p>
        <BudgetPicker id={`budget-${(service || "plan").replace(/\W+/g, "-").toLowerCase()}`} initial={STARTING_BUDGET} onChange={setBudget} />
      </div>
      <Link href={`/book-a-call?${params}`} className="sg-price-btn">Discuss this budget <span aria-hidden="true">→</span></Link>
    </article>
  );
}
