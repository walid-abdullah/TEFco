import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = {
  title: "UGC Ads | The Editly Foundry",
  description: "Performance-minded UGC ads that keep the human hook and sharpen the conversion path.",
};

export default function UgcAdsPage() {
  return <ServiceLandingPage service={{
    category: "PERFORMANCE CREATIVE", number: "04", signal: "RESPONSE / 00:24",
    videoUrl: process.env.NEXT_PUBLIC_UGC_VIDEO_URL || process.env.NEXT_PUBLIC_SERVICE_INTRO_VIDEO_URL || "",
    videoPoster: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80",
    videoAspect: "9 / 16",
    mediaMode: "portrait",
    title: "Ads that feel like a recommendation.",
    statement: "Keep the human hook. Sharpen everything around it.",
    description: "We edit UGC and creator footage into performance creative that earns attention first and makes the next action feel obvious.",
    stats: [["03–06", "creative angles"], ["9:16", "mobile first"], ["A/B", "ready to test"]],
    frameworkTitle: "Creative built for learning.",
    framework: [["01", "Lead with the truth", "The opening keeps the creator’s real voice while making the value clear before the scroll."], ["02", "Reduce the friction", "We simplify proof, product moments, captions, and calls to action into one clean path."], ["03", "Multiply the test", "Angles, hooks, and endings are structured so your team can learn what is working—not just ship one ad."]],
    deliverables: ["Hook variations", "UGC ad edits", "Product proof cutdowns", "Caption and CTA versions", "Testing-ready exports"],
    portfolio: [
      { title: "The honest hook", type: "UGC campaign", format: "00:24", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80" },
      { title: "Proof, quickly", type: "Performance edit", format: "9:16", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
      { title: "Made to test", type: "Creative variations", format: "A/B", ratio: "1 / 1", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=80" },
    ],
    process: [["01", "Brief"], ["02", "Angle"], ["03", "Cut"], ["04", "Test"]],
    faqs: [["Do you provide creators?", "Our core service is editing, but we can help shape creator briefs and recommend what footage the edit needs to work."], ["How many variations should we make?", "We recommend starting with a small range of genuinely different hooks and structures rather than cosmetic swaps."], ["Can you edit existing UGC libraries?", "Yes. Existing footage is often the fastest route to finding a winning creative direction."]],
    cta: "Bring us the footage that feels real. We will make the response feel clear.",
  }} />;
}
