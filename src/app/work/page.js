"use client";

import { useEffect, useMemo, useState } from "react";

const projects = [
  { id: "pod-01", category: "podcast", label: "Podcast", client: "The Modern Founder", title: "A conversation with room to breathe.", description: "Multi-camera editorial, broadcast audio, and a clip system built from one long-form recording.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "48:12 master" },
  { id: "talk-01", category: "talking-head", label: "Talking head", client: "Northstar Advisory", title: "Make expertise feel immediate.", description: "A clear, cinematic authority series shaped around the founder's real voice.", image: "https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "01:24 film" },
  { id: "reel-01", category: "reels", label: "Reels & shorts", client: "ScaleFlow AI", title: "The first three seconds did the work.", description: "Hook-led short-form edits designed for retention, rhythm, and repeatable publishing.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "1.4M views" },
  { id: "saas-01", category: "saas", label: "SaaS motion", client: "Orbit Cloud", title: "Show the change, not just the screen.", description: "A product launch film that makes a complex platform easy to understand.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "00:38 film" },
  { id: "promo-01", category: "promo", label: "Paid creative", client: "Aura Athletics", title: "An ad that feels like a recommendation.", description: "Creator footage rebuilt into a clean testing system for Meta and TikTok.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "3.8x ROAS" },
  { id: "reel-02", category: "reels", label: "Reels & shorts", client: "Founder Notes", title: "One long take. Five reasons to watch.", description: "A portrait cut with kinetic type and a deliberately quiet visual rhythm.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "00:42 cut" },
  { id: "pod-02", category: "podcast", label: "Podcast", client: "The Growth Room", title: "Long-form that keeps its pulse.", description: "A restrained conversation edit with chaptering and social cutdowns.", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "62:40 master" },
  { id: "talk-02", category: "talking-head", label: "Talking head", client: "Lumen Partners", title: "Clarity is a creative direction.", description: "Editorial pacing, screen inserts, and motion typography for a founder-led series.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "06 episode run" },
  { id: "ugc-01", category: "promo", label: "UGC ads", client: "Morrow Skin", title: "Keep the human hook.", description: "Three creator angles, six openings, and a testing-ready delivery system.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / UGC", detail: "12 variants" },
  { id: "pod-03", category: "podcast", label: "Podcast", client: "Creator Mastery", title: "The useful conversation.", description: "Podcast episode edit.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "34:18 master" },
  { id: "pod-04", category: "podcast", label: "Podcast", client: "Founders Table", title: "A table worth staying at.", description: "Roundtable master.", image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "55:04 master" },
  { id: "pod-05", category: "podcast", label: "Podcast", client: "Deep Dive", title: "Stay with the idea.", description: "Long-form studio recording.", image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "41:20 master" },
  { id: "pod-06", category: "podcast", label: "Podcast", client: "Executive Voice", title: "A sharper point of view.", description: "Voice and sound engineering.", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "52:10 master" },
  { id: "talk-03", category: "talking-head", label: "Talking head", client: "Founder Vision", title: "Say what matters.", description: "Authority film.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "12:15 film" },
  { id: "talk-04", category: "talking-head", label: "Talking head", client: "Agency Office", title: "A better way to explain.", description: "Presentation cut.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "21:05 film" },
  { id: "talk-05", category: "talking-head", label: "Talking head", client: "Market Deep Dive", title: "Make the signal clear.", description: "Documentary-style narrative.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "16:40 film" },
  { id: "talk-06", category: "talking-head", label: "Talking head", client: "Investor Room", title: "The vision, in focus.", description: "Founder pitch film.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "11:30 film" },
  { id: "reel-03", category: "reels", label: "Reels & shorts", client: "Hook Lab", title: "Stop the scroll.", description: "Short-form retention cut.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "2.1M views" },
  { id: "reel-04", category: "reels", label: "Reels & shorts", client: "Founder Notes", title: "The thought in motion.", description: "Micro-podcast clip.", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "970K views" },
  { id: "reel-05", category: "reels", label: "Reels & shorts", client: "Direct Response", title: "Make the value obvious.", description: "Paid social hook.", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "620K views" },
  { id: "reel-06", category: "reels", label: "Reels & shorts", client: "Motion Cut", title: "Keep the rhythm moving.", description: "Motion graphics short.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "1.1M views" },
  { id: "saas-02", category: "saas", label: "SaaS motion", client: "Product Hunt", title: "Launch with clarity.", description: "Product launch animation.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "00:58 film" },
  { id: "saas-03", category: "saas", label: "SaaS motion", client: "Cursor Studio", title: "Every interaction matters.", description: "UI motion demo.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "01:30 film" },
  { id: "saas-04", category: "saas", label: "SaaS motion", client: "Vector Systems", title: "Explain the feature.", description: "2D product explainer.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "01:45 film" },
  { id: "saas-05", category: "saas", label: "SaaS motion", client: "Cloud Enterprise", title: "A system in motion.", description: "Enterprise walkthrough.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "02:10 film" },
  { id: "promo-02", category: "promo", label: "Paid creative", client: "E-commerce", title: "The offer, made clear.", description: "Paid social commercial.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "3.9x ROAS" },
  { id: "promo-03", category: "promo", label: "Paid creative", client: "Brand Launch", title: "The first impression.", description: "Cinematic launch teaser.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "$12 CPL" },
  { id: "promo-04", category: "promo", label: "Paid creative", client: "Testing Studio", title: "Find the winning angle.", description: "Split-test variations.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "5.2x ROAS" },
  { id: "promo-05", category: "promo", label: "Paid creative", client: "Luxury House", title: "A quieter kind of impact.", description: "Lifestyle commercial.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "4.1x ROAS" },
  { id: "thumb-01", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame one.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "11.4% CTR" },
  { id: "thumb-02", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame two.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "13.2% CTR" },
  { id: "thumb-03", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame three.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "10.8% CTR" },
  { id: "thumb-04", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame four.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "14.1% CTR" },
  { id: "thumb-05", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame five.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "12.5% CTR" },
  { id: "thumb-06", category: "thumbnails", label: "Thumbnails", client: "Editly vault", title: "High-CTR frame six.", description: "Thumbnail design.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "THUMBNAIL", detail: "11.9% CTR" },
];

const filters = [
  { id: "podcast", label: "Podcast" },
  { id: "talking-head", label: "Talking head" },
  { id: "reels", label: "Shorts/Reels" },
  { id: "saas", label: "SaaS motion" },
  { id: "promo", label: "Promo & Ads" },
  { id: "thumbnails", label: "Thumbnails" },
];

function WorkCard({ project, onOpen, featured = false }) {
  return (
    <article className={`work-vault-card ${featured ? "is-featured" : ""} ${project.ratio === "9 / 16" ? "is-portrait" : ""}`}>
      <button type="button" onClick={() => onOpen(project)} aria-label={`Watch ${project.title}`}>
        <div className="work-vault-card-media" style={{ "--work-ratio": project.ratio, backgroundImage: `url(${project.image})` }}>
          <span className="work-vault-card-shade" />
          <span className="work-vault-play" aria-hidden="true">▶</span>
        </div>
      </button>
    </article>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("podcast");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((project) => project.category === activeFilter);
    return filtered.slice(0, visibleCount);
  }, [activeFilter, visibleCount]);
  const matchingProjectCount = projects.filter((project) => project.category === activeFilter).length;
  useEffect(() => {
    if (!selectedProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <main className="work-vault-page">
      <div className="work-vault-atmosphere" aria-hidden="true" />
      <div className="container work-vault-container">
        <header className="work-vault-showcase-head reveal-on-scroll">
          <span className="section-subtitle">Production showcase</span>
          <h1>Work engineered to <span className="combination-font">scale attention.</span></h1>
          <p>Explore our retention-driven post-production across short-form, podcasts, SaaS motion, and paid creative.</p>
        </header>

        <nav className="work-vault-filters reveal-on-scroll" aria-label="Filter work by format">
          {filters.map((filter) => (
            <button key={filter.id} type="button" className={activeFilter === filter.id ? "is-active" : ""} onClick={() => { setActiveFilter(filter.id); setVisibleCount(6); }}>{filter.label}</button>
          ))}
        </nav>

        <section className="work-vault-grid reveal-on-scroll" aria-live="polite">
          {visibleProjects.map((project) => <WorkCard key={project.id} project={project} onOpen={setSelectedProject} />)}
        </section>

        {visibleCount < matchingProjectCount && (
          <button type="button" className="work-vault-more" onClick={() => setVisibleCount((count) => count + 6)}>
            View more projects <span aria-hidden="true">⌄</span>
          </button>
        )}

        <section className="work-vault-booking reveal-on-scroll">
          <span className="section-subtitle">Book a call</span>
          <h2>Book a 15-minute <span className="combination-font">discovery call.</span></h2>
          <p>Tell us what you are building and where the edit can take it.</p>
          <a href="/book-a-call" className="btn btn-primary">Book a call <span aria-hidden="true">↗</span></a>
        </section>
      </div>

      {selectedProject && (
        <div className="work-vault-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={() => setSelectedProject(null)}>
          <div className={`work-vault-modal-inner ${selectedProject.ratio === "9 / 16" ? "is-portrait" : ""}`} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="work-vault-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project preview">×</button>
            <div className="work-vault-modal-media" style={{ "--work-ratio": selectedProject.ratio, backgroundImage: `url(${selectedProject.image})` }}><span>Project preview</span></div>
            <div className="work-vault-modal-copy"><span className="mono-spec">{selectedProject.client} / {selectedProject.format}</span><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p></div>
          </div>
        </div>
      )}
    </main>
  );
}
