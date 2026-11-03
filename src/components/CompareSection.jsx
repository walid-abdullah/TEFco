import { pricingPlans } from "@/data/pricingPlans";

const columns = ["In-house hire", "Freelancer", "Editly Foundry"];
const startingPrice = Math.min(...pricingPlans.map((plan) => plan.monthlyPrice)).toLocaleString("en-US");

const rows = [
  ["Cost", "Salary, software and management", "Per video, and it varies", `From $${startingPrice} a month`],
  ["First cut", "After you finish hiring", "Depends on their schedule", "Within 24–48 hours"],
  ["Who does the work", "One or more new hires", "One person", "A dedicated team"],
  ["Revisions", "Part of the job", "Often limited", "Unlimited"],
  ["When things slow down", "You still carry the cost", "You find someone again later", "Pause or cancel anytime"],
];

export default function CompareSection() {
  return (
    <section className="sg-section sg-compare">
      <div className="container">
        <span className="section-subtitle">Why a studio</span>
        <h2>Three ways to get it edited.<br /><span className="combination-font">Here is the difference.</span></h2>
        <table className="sg-compare-table" data-rise>
          <thead>
            <tr>
              <td />
              {columns.map((column) => <th scope="col" key={column}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, ...cells]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {cells.map((cell, index) => <td key={columns[index]} data-label={columns[index]}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
