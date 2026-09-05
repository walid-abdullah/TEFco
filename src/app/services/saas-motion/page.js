import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = {
  title: "SaaS Motion Design | The Editly Foundry",
  description: "Product motion and launch films that make complex software feel obvious.",
};

export default function SaasMotionPage() {
  return <ServiceLandingPage service={{
    category: "PRODUCT MOTION", number: "05", signal: "SYSTEM / 00:38",
    videoUrl: process.env.NEXT_PUBLIC_SAAS_MOTION_VIDEO_URL || process.env.NEXT_PUBLIC_SERVICE_INTRO_VIDEO_URL || "",
    videoPoster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    videoAspect: "16 / 9",
    title: "Make the complex feel obvious.",
    statement: "Product motion should not decorate the interface. It should explain the value.",
    description: "We create launch films, product walkthroughs, and motion systems that help people understand software before they ever open it.",
    stats: [["01", "clear story"], ["2D/3D", "motion language"], ["4K", "master delivery"]],
    frameworkTitle: "Show the change, not just the screen.",
    framework: [["01", "Name the friction", "We start with the problem your product removes, so every frame has a job."], ["02", "Reveal the system", "Interface, data, and motion are choreographed into a visual explanation people can remember."], ["03", "Leave a signal", "A focused visual language gives launches, demos, and sales teams one consistent way to talk about the product."]],
    deliverables: ["Product launch film", "UI animation", "Feature walkthroughs", "Sales enablement cuts", "Motion guidelines"],
    portfolio: [
      { title: "See the system", type: "Product launch film", format: "00:38", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80" },
      { title: "The feature reveal", type: "UI motion", format: "2D/3D", ratio: "1 / 1", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80" },
      { title: "Product, in motion", type: "Explainer system", format: "4K", ratio: "16 / 9", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80" },
    ],
    process: [["01", "Map"], ["02", "Script"], ["03", "Animate"], ["04", "Ship"]],
    faqs: [["Can you work from an early product build?", "Yes. We can use prototypes, screen recordings, or static flows and help decide what needs to be shown."], ["Do you create the voiceover and script?", "We can shape the script and coordinate voiceover direction, or work with your existing narrative and VO."], ["Can the motion language be reused later?", "Yes. We build reusable principles and assets where they will make future launches faster and more coherent."]],
    cta: "Bring us the product people keep misunderstanding. We will make the value visible.",
  }} />;
}
