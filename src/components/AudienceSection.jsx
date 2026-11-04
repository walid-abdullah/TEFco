import Link from "next/link";

const audiences = [
  { title: "Founders & educators", problem: "You have the ideas, but no hours for the timeline.", result: "Talking-head films in your voice", href: "/services/talking-head" },
  { title: "Podcasters", problem: "Episodes take days to finish, and the best moments never get clipped.", result: "Full episodes and clips from each one", href: "/services/podcasts" },
  { title: "SaaS & product teams", problem: "Your product is hard to explain in a screenshot.", result: "UI demos and launch films", href: "/services/motion-graphics" },
  { title: "Brands running ads", problem: "Creative wears out faster than you can replace it.", result: "UGC ads with hooks ready to test", href: "/services/ugc-ads" },
];

export default function AudienceSection() {
  return (
    <section className="sg-section sg-audience">
      <div className="container">
        <span className="section-subtitle">Who we work with</span>
        <h2>More to say<br /><span className="combination-font">than time to edit?</span></h2>
        <div className="sg-audience-list">
          {audiences.map((item) => (
            <Link href={item.href} key={item.title} data-rise>
              <h3>{item.title}</h3>
              <p>{item.problem}</p>
              <strong>{item.result} <span aria-hidden="true">→</span></strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
