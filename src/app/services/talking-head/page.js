import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = {
  title: "Talking Head Editing | The Editly Foundry",
  description: "Editorial talking-head videos that make expertise feel immediate and human.",
};

export default function TalkingHeadPage() {
  return <ServiceLandingPage service={{
    category: "TALKING HEAD", number: "03", signal: "CLARITY / 01:24",
    videoUrl: process.env.NEXT_PUBLIC_TALKING_HEAD_VIDEO_URL || process.env.NEXT_PUBLIC_SERVICE_INTRO_VIDEO_URL || "",
    videoPoster: "https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1800&q=80",
    videoAspect: "16 / 9",
    title: "Make expertise feel immediate.",
    statement: "The camera captured the knowledge. The edit makes people trust it.",
    description: "We turn direct-to-camera recordings into clear, confident videos with the pacing, typography, and restraint your ideas deserve.",
    stats: [["01", "clear narrative"], ["4K", "master delivery"], ["02–04", "days to first cut"]],
    frameworkTitle: "Clarity is a creative direction.",
    framework: [["01", "Remove the drag", "We find the strongest version of the thought and remove everything that gets between it and the viewer."], ["02", "Guide the eye", "Kinetic type, intentional punch-ins, and considered cutaways support the message instead of competing with it."], ["03", "Build trust", "A consistent visual grammar turns individual videos into a body of work people recognise."]],
    deliverables: ["Long-form edit", "Motion typography", "B-roll and screen inserts", "Thumbnail frames", "Short-form cutdowns"],
    portfolio: [
      { title: "The clear answer", type: "Founder film", format: "01:24", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" },
      { title: "Explain it simply", type: "Editorial series", format: "4K", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" },
      { title: "The useful minute", type: "Social cutdown", format: "00:58", ratio: "9 / 16", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
    ],
    process: [["01", "Ingest"], ["02", "Clarify"], ["03", "Design"], ["04", "Deliver"]],
    faqs: [["Will the videos still feel natural?", "Yes. The goal is not to make you perform more—it is to make the strongest version of your real delivery easier to follow."], ["Can you use screen recordings or slides?", "Yes. We integrate product demos, slides, B-roll, and references as part of the narrative rather than as decoration."], ["Do you need a script?", "No. A rough outline, transcript, or even a raw recording is enough for us to begin finding the story."]],
    cta: "Bring us the take that is almost there. We will make it feel inevitable.",
  }} />;
}
