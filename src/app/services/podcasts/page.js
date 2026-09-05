import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = {
  title: "Podcast Editing | The Editly Foundry",
  description: "Podcast editing and content systems for conversations people want to finish.",
};

export default function PodcastsPage() {
  return <ServiceLandingPage service={{
    category: "PODCAST EDITING", number: "02", signal: "CONVERSATION / 42:18",
    videoUrl: process.env.NEXT_PUBLIC_PODCAST_VIDEO_URL || process.env.NEXT_PUBLIC_SERVICE_INTRO_VIDEO_URL || "",
    videoPoster: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1800&q=80",
    videoAspect: "16 / 9",
    title: "Make the conversation impossible to leave.",
    statement: "A great podcast already has the story. We give it room to land.",
    description: "From a clean master to a complete episode system, we edit the pauses, pace, and visual layers that make long-form conversation feel effortless.",
    stats: [["01", "clean master"], ["03+", "content formats"], ["100%", "your voice"]],
    frameworkTitle: "The edit should disappear. The story should not.",
    framework: [["01", "Protect the voice", "Natural pauses, real reactions, and the human texture stay intact."], ["02", "Hold attention", "We shape pacing and visual emphasis without turning a conversation into noise."], ["03", "Extend the episode", "Every conversation becomes a considered set of clips, chapters, and social entry points."]],
    deliverables: ["Full episode edit", "Audio mix and cleanup", "Chapters and title cards", "Social highlight cuts", "YouTube master"],
    portfolio: [
      { title: "After the intro", type: "Podcast episode", format: "42:18", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80" },
      { title: "The long listen", type: "Conversation series", format: "4K", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=900&q=80" },
      { title: "One good question", type: "Episode cutdown", format: "16:9", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900&q=80" },
    ],
    process: [["01", "Listen"], ["02", "Shape"], ["03", "Polish"], ["04", "Publish"]],
    faqs: [["Do you edit audio as well as video?", "Yes. We clean dialogue, balance the mix, and deliver a finished master ready for your podcast host."], ["Can you match our existing show style?", "We work from your current language first, then suggest only the changes that make the show clearer and stronger."], ["Can clips be included in the same package?", "Absolutely. We can build a clip library from every episode so the long-form work keeps travelling."]],
    cta: "Bring us the raw conversation. We will make the ideas easier to stay with.",
  }} />;
}
