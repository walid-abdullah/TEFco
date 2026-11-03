"use client";

import { useState } from "react";

const STEPS = [0, 50, 100, 200, 300, 400, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 7500, 10000, 15000, 25000, Infinity];

export const formatBudget = (value) => (value === Infinity ? "No limit" : `$${value.toLocaleString("en-US")}`);

const nearestStep = (value) => {
  const index = STEPS.findIndex((step) => step >= value);
  return index === -1 ? STEPS.length - 1 : index;
};

// Any budget from $0 up to no limit, in steps that stay useful at both ends.
export default function BudgetPicker({ initial = 500, onChange, id = "budget-picker", label = "Your budget" }) {
  const [index, setIndex] = useState(nearestStep(initial));
  const value = formatBudget(STEPS[index]);

  return (
    <div className="sg-budget">
      <label htmlFor={id}><span>{label}</span><output htmlFor={id}>{value}</output></label>
      <input
        id={id}
        type="range"
        min={0}
        max={STEPS.length - 1}
        step={1}
        value={index}
        aria-valuetext={value}
        style={{ "--fill": `${(index / (STEPS.length - 1)) * 100}%` }}
        onChange={(event) => {
          const next = Number(event.target.value);
          setIndex(next);
          onChange?.(formatBudget(STEPS[next]));
        }}
      />
      <div className="sg-budget-ends" aria-hidden="true"><span>$0</span><span>∞</span></div>
    </div>
  );
}
