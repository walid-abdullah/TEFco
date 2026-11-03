"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import ServiceEnquiry from "@/components/ServiceEnquiry";
import { getEmbedUrl } from "@/lib/videoEmbed";

const projects = [
  { id: "pod-01", category: "podcast", label: "Podcast", client: "The Modern Founder", title: "A conversation with room to breathe.", description: "Multi-camera editorial, broadcast audio, and a clip system built from one long-form recording.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "48:12 master" },
  { id: "talk-01", category: "talking-head", label: "Talking head", client: "Northstar Advisory", title: "Make expertise feel immediate.", description: "A clear, cinematic authority series shaped around the founder's real voice.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "01:24 film" },
  { id: "reel-01", category: "reels", label: "Reels & shorts", client: "ScaleFlow AI", title: "The first three seconds did the work.", description: "Hook-led short-form edits designed for retention, rhythm, and repeatable publishing.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "1.4M views" },
  { id: "saas-01", category: "saas", label: "Motion graphics", client: "Orbit Cloud", title: "Show the change, not just the screen.", description: "A product launch film that makes a complex platform easy to understand.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "00:38 film" },
  { id: "promo-01", category: "promo", label: "Paid creative", client: "Aura Athletics", title: "An ad that feels like a recommendation.", description: "Creator footage rebuilt into a clean testing system for Meta and TikTok.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "3.8x ROAS" },
  { id: "reel-02", category: "reels", label: "Reels & shorts", client: "Founder Notes", title: "One long take. Five reasons to watch.", description: "A portrait cut with kinetic type and a deliberately quiet visual rhythm.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / 60FPS", detail: "00:42 cut" },
  { id: "pod-02", category: "podcast", label: "Podcast", client: "The Growth Room", title: "Long-form that keeps its pulse.", description: "A restrained conversation edit with chaptering and social cutdowns.", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "62:40 master" },
  { id: "talk-02", category: "talking-head", label: "Talking head", client: "Lumen Partners", title: "Clarity is a creative direction.", description: "Editorial pacing, screen inserts, and motion typography for a founder-led series.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "06 episode run" },
  { id: "ugc-01", category: "promo", label: "UGC ads", client: "Morrow Skin", title: "Keep the human hook.", description: "Three creator angles, six openings, and a testing-ready delivery system.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85", ratio: "9 / 16", format: "9:16 / UGC", detail: "12 variants" },
  { id: "pod-03", category: "podcast", label: "Podcast", client: "Creator Mastery", title: "The useful conversation.", description: "Podcast episode edit.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "34:18 master" },
  { id: "pod-04", category: "podcast", label: "Podcast", client: "Founders Table", title: "A table worth staying at.", description: "Roundtable master.", image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 4K", detail: "55:04 master" },
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
  { id: "saas-02", category: "saas", label: "Motion graphics", client: "Product Hunt", title: "Launch with clarity.", description: "Product launch animation.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "00:58 film" },
  { id: "saas-03", category: "saas", label: "Motion graphics", client: "Cursor Studio", title: "Every interaction matters.", description: "UI motion demo.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "01:30 film" },
  { id: "saas-04", category: "saas", label: "Motion graphics", client: "Vector Systems", title: "Explain the feature.", description: "2D product explainer.", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "01:45 film" },
  { id: "saas-05", category: "saas", label: "Motion graphics", client: "Cloud Enterprise", title: "A system in motion.", description: "Enterprise walkthrough.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / 60FPS", detail: "02:10 film" },
  { id: "promo-02", category: "promo", label: "Paid creative", client: "E-commerce", title: "The offer, made clear.", description: "Paid social commercial.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "3.9x ROAS" },
  { id: "promo-03", category: "promo", label: "Paid creative", client: "Brand Launch", title: "The first impression.", description: "Cinematic launch teaser.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "$12 CPL" },
  { id: "promo-04", category: "promo", label: "Paid creative", client: "Testing Studio", title: "Find the winning angle.", description: "Split-test variations.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "5.2x ROAS" },
  { id: "promo-05", category: "promo", label: "Paid creative", client: "Luxury House", title: "A quieter kind of impact.", description: "Lifestyle commercial.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85", ratio: "16 / 9", format: "16:9 / A-B", detail: "4.1x ROAS" },
];

const filters = [
  { id: "podcast", label: "Podcast", service: "Podcast" },
  { id: "talking-head", label: "Talking head", service: "Talking Head" },
  { id: "reels", label: "Shorts/Reels", service: "Reels & Shorts" },
  { id: "saas", label: "Motion graphics", service: "Motion Graphics" },
  { id: "promo", label: "Promo & Ads", service: "Promo & Ads" },
];

function WorkCard({ project, onOpen }) {
  return (
    <article className={`sg-vcard${project.ratio === "9 / 16" ? " is-portrait" : ""}`}>
      <button type="button" onClick={() => onOpen(project)} aria-label={`Watch ${project.title}`}>
        <span className="sg-vcard-media" style={{ backgroundImage: `url(${project.image})` }}>
          <span className="sg-play" aria-hidden="true">▶</span>
        </span>
        <span className="sg-vcard-meta"><strong>{project.title}</strong><em>{project.client}</em></span>
      </button>
    </article>
  );
}

// Only the video, at its true shape, sized to fit the screen.
function VideoPlayer({ project, onClose }) {
  const embedUrl = getEmbedUrl(project.videoUrl);
  const isPortrait = project.ratio === "9 / 16";
  return createPortal(
    <div className="sg-player" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <button type="button" className="sg-player-close" onClick={onClose} aria-label="Close video">×</button>
      <div className={`sg-player-frame${isPortrait ? " is-portrait" : ""}`} onClick={(event) => event.stopPropagation()}>
        {embedUrl && <iframe src={embedUrl} title={project.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
        {!embedUrl && project.videoUrl && <video src={project.videoUrl} poster={project.image} controls autoPlay playsInline />}
        {!project.videoUrl && <img src={project.image} alt={project.title} />}
      </div>
    </div>,
    document.body
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
    <main className="sg-page sg-work-page on-ink">
      <section className="sg-phero hero-ink on-ink">
        <div className="container">
          <span className="section-subtitle">Our work</span>
          <h1>Work made to <span className="combination-font">hold attention.</span></h1>
          <div className="sg-phero-foot">
            <p>Reels, podcasts, talking-head films, motion graphics and paid creative we have edited.</p>
          </div>
        </div>
      </section>

      <div className="container sg-work-body">
        <nav className="sg-filters" aria-label="Filter work by format">
          {filters.map((filter) => (
            <button key={filter.id} type="button" className={activeFilter === filter.id ? "is-active" : ""} onClick={() => { setActiveFilter(filter.id); setVisibleCount(6); }}>{filter.label}</button>
          ))}
        </nav>

        <section className="sg-vgrid" aria-live="polite">
          {visibleProjects.map((project) => <WorkCard key={project.id} project={project} onOpen={setSelectedProject} />)}
        </section>

        {visibleCount < matchingProjectCount && (
          <button type="button" className="btn btn-primary sg-more" onClick={() => setVisibleCount((count) => count + 6)}>
            View more projects
          </button>
        )}
      </div>

      <ServiceEnquiry service={filters.find((filter) => filter.id === activeFilter).service} />

      {selectedProject && <VideoPlayer project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}
