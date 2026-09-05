import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = {
  title: "Reels & Shorts | The Editly Foundry",
  description: "Short-form editing built for retention, rhythm, and repeatable publishing.",
};

export default function ReelsShortsPage() {
  return <ServiceLandingPage service={{
    category: "SHORT-FORM SYSTEMS", number: "01", signal: "RETENTION / 00:09",
    videoUrl: process.env.NEXT_PUBLIC_REELS_VIDEO_URL || process.env.NEXT_PUBLIC_SERVICE_INTRO_VIDEO_URL || "",
    videoPoster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1800&q=80",
    videoAspect: "9 / 16",
    mediaMode: "portrait",
    title: "Reels that earn the next second.",
    statement: "Short-form is not a crop. It is a point of view, rebuilt for the feed.",
    description: "We turn long recordings, loose ideas, and raw moments into a sharp library of Reels and Shorts that sound like you and move at the speed of attention.",
    stats: [["04–12", "assets per source"], ["9:16", "native delivery"], ["48h", "first-cut target"]],
    frameworkTitle: "One source. A whole publishing rhythm.",
    framework: [["01", "Find the signal", "We surface the lines, reactions, and tension that deserve a second look."], ["02", "Build the beat", "Openers, captions, cut points, and sound design make the first three seconds do their job."], ["03", "Make it yours", "A repeatable visual language keeps every post recognisable without making it feel templated."]],
    deliverables: ["Vertical social cuts", "Caption-led talking points", "Hook variations", "Platform-ready exports", "Publishing selects"],
    portfolio: [
      { title: "Founder in motion", type: "Social series", format: "9:16", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80" },
      { title: "The sharp take", type: "Short-form edit", format: "00:32", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80" },
      { title: "Cut for the feed", type: "Campaign selects", format: "9:16", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80" },
    ],
    process: [["01", "Source"], ["02", "Select"], ["03", "Shape"], ["04", "Release"]],
    faqs: [["How much content can come from one recording?", "Usually four to twelve strong cuts, depending on the source and the range of ideas inside it."], ["Can you work with our existing brand system?", "Yes. We can preserve it, refine it, or build a compact social language around it."], ["Do you write the hooks?", "We shape the opening line and on-screen framing with you so each edit has a clear reason to keep watching."]],
    cta: "Bring us the long version. We will find the moments your audience was waiting for.",
  }} />;
}
