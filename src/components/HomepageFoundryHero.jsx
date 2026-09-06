"use client";

import Link from "next/link";
import WorkflowExplainerVideo from "./WorkflowExplainerVideo";

export default function HomepageFoundryHero({
  videoUrl,
  posterUrl,
}) {
  const finalVideoUrl = videoUrl || process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || process.env.NEXT_PUBLIC_HOME_SHOWREEL_URL || "";
  const finalPosterUrl = posterUrl || "/Picture/square.png";

  return (
    <section className="home-foundry-hero">
      <div className="container home-foundry-hero-container">
        <div className="home-foundry-hero-copy reveal-on-scroll">
          <span className="section-subtitle">Independent post-production studio</span>
          <h1>Video that keeps<br /><span className="combination-font">people watching.</span></h1>
          <p>Editorial video systems for founders, brands, and teams building attention at scale.</p>
          <div className="home-foundry-hero-actions">
            <Link href="/work" className="btn btn-primary">See the work <span aria-hidden="true">↗</span></Link>
            <Link href="/book-a-call" className="about-text-link">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <WorkflowExplainerVideo
          videoUrl={finalVideoUrl}
          posterUrl={finalPosterUrl}
          ariaLabel="Editly Foundry showreel & founder video"
          aspectRatio="16 / 9"
        />
        <div className="home-foundry-formats mono-spec">REELS <span>·</span> PODCASTS <span>·</span> TALKING HEAD <span>·</span> UGC <span>·</span> SAAS MOTION</div>
      </div>
    </section>
  );
}
