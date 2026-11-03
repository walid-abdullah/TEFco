const shortForm = (item, items) => [
  { name: `Single ${item}`, price: 30, unit: `per ${item}`, note: `One edited ${item}.` },
  { name: `10 ${items}`, price: 250, unit: `for 10 ${items}`, note: `$25 per ${item}.` },
  { name: `20 ${items} a month`, price: 450, unit: "per month", note: `$22.50 per ${item}.`, isPopular: true },
];

// One-off prices per service, keyed by the service name used across the site.
export const servicePrices = {
  Podcast: [
    { name: "One episode", price: 200, unit: "per episode", note: "A full episode edit." },
    { name: "Episode + reels", price: 250, unit: "per episode", note: "A full episode with 5–7 reels.", isPopular: true },
  ],
  "Reels & Shorts": shortForm("reel", "reels"),
  "UGC Ads": shortForm("ad", "ads"),
  "Talking Head": [
    { name: "Long-form video", price: 100, unit: "per video", note: "A finished video of 5–10 minutes." },
  ],
  "Motion Graphics": [
    { name: "Motion graphics video", price: 500, unit: "per video", note: "Up to 2 minutes." },
  ],
};
