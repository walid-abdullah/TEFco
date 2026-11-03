import Link from "next/link";
import LogoMarquee from "./LogoMarquee";
import WorkflowExplainerVideo from "./WorkflowExplainerVideo";

export default function HomepageFoundryHero({ videoUrl, posterUrl, logos = [] }) {
  const finalVideoUrl = videoUrl || process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL || process.env.NEXT_PUBLIC_HOME_SHOWREEL_URL || "";
  const finalPosterUrl = posterUrl || "/Picture/square.png";

  return (
    <div className="sg-group is-first on-ink hero-beam">
      <section className="sg-hero">
        <div className="container home-foundry-hero-copy">
          <span className="section-subtitle">Independent Video Editing Agency</span>
          <h1>Video that keeps<br /><span className="combination-font">people watching.</span></h1>
          <div className="sg-hero-foot">
            <p>We edit reels, podcasts, talking-head videos, UGC ads and motion graphics for founders and brands.</p>
            <div className="home-foundry-hero-actions">
              <Link href="/work" className="btn btn-primary">See the work <span aria-hidden="true">→</span></Link>
              <Link href="/book-a-call" className="sg-link">Start a project <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ul className="sg-hero-proof">
            <li><b aria-hidden="true">★</b> 4.9/5 on Trustpilot</li>
            <li>2,000+ projects delivered</li>
            <li>First cut in 24–48 hours</li>
          </ul>
        </div>
      </section>

      <section className="sg-showreel">
        <div className="container">
          <WorkflowExplainerVideo
            videoUrl={finalVideoUrl}
            posterUrl={finalPosterUrl}
            ariaLabel="Editly Foundry showreel and founder video"
            aspectRatio="16 / 9"
          />
          <div className="sg-showreel-note">
            <span>Meet the founder</span>
            <p>Hear how we work with you.</p>
          </div>
        </div>
      </section>

      {logos.length > 0 && (
        <section className="sg-trusted" aria-label="Selected clients">
          <span>Teams we have edited for</span>
          <LogoMarquee logos={logos} />
        </section>
      )}
    </div>
  );
}
