const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://editlyfoundry.vercel.app").replace(/\/$/, "");

export const metadata = {
  title: "About The Editly Foundry | Video Editing & Post-Production Studio",
  description:
    "Meet The Editly Foundry, a remote-first video editing and post-production studio helping founders, creators, SaaS teams, and brands publish better content.",
  keywords: [
    "video editing studio",
    "post-production studio",
    "video editing agency",
    "podcast editing",
    "short-form video editing",
    "motion graphics studio",
    "The Editly Foundry",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About The Editly Foundry | Video Editing & Post-Production Studio",
    description:
      "Meet the team and process behind The Editly Foundry, a remote-first video editing studio for ambitious teams.",
    url: `${siteUrl}/about`,
    type: "website",
    siteName: "The Editly Foundry Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Editly Foundry",
    description:
      "Meet the team and process behind The Editly Foundry video editing studio.",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
