import { SITE_URL as siteUrl } from "@/lib/site";

export const metadata = {
  title: "Video Editing Services | The Editly Foundry",
  description:
    "Explore video editing, podcast post-production, short-form content, YouTube editing, UGC ads, and SaaS motion design from The Editly Foundry.",
  keywords: [
    "video editing services",
    "short-form video editing",
    "podcast editing",
    "YouTube video editing",
    "UGC video ads",
    "SaaS motion design",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Video Editing Services | The Editly Foundry",
    description:
      "Focused post-production for founders, creators, SaaS teams, and ambitious brands.",
    url: `${siteUrl}/services`,
    type: "website",
    siteName: "The Editly Foundry Co.",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
