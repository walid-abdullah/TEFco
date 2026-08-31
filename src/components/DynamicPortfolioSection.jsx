'use client';

import React, { useState } from 'react';
import InlineVideoPlayer from './InlineVideoPlayer';

export default function DynamicPortfolioSection({ 
  subtitle = 'Our Work', 
  title1 = 'Recent Work That', 
  title2 = 'Produced Results', 
  description = 'Filter through our recent video production and editing projects across different formats.',
  initialProjects = []
}) {
  const [activeFilter, setActiveFilter] = useState('all');

  const defaultProjects = [
    {
      _id: 'work-1',
      category: 'reels',
      title: 'Viral Tech Founder Retention Reel',
      clientName: 'Alex Rivera (SaaS Founder)',
      metric1Icon: 'fa-solid fa-eye',
      metric1Text: '2.4M Views',
      metric2Icon: 'fa-solid fa-heart',
      metric2Text: '180K Likes',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso'
    },
    {
      _id: 'work-2',
      category: 'saas',
      title: 'Product Launch 3D Motion Demo',
      clientName: 'FlowDesk App',
      metric1Icon: 'fa-solid fa-arrow-trend-up',
      metric1Text: '+340% Conversions',
      metric2Icon: 'fa-solid fa-award',
      metric2Text: '#1 Product Hunt',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE'
    },
    {
      _id: 'work-3',
      category: 'podcasts',
      title: 'Multi-Cam Studio Founder Episode',
      clientName: 'The Mindset Show',
      metric1Icon: 'fa-solid fa-clock',
      metric1Text: '45 Mins Full Cut',
      metric2Icon: 'fa-solid fa-thumbs-up',
      metric2Text: '98.4% Retention',
      thumbnailUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso'
    },
    {
      _id: 'work-4',
      category: 'talking-head',
      title: 'Cinematic YouTube Long-Form Cut',
      clientName: 'Creator Mastery Channel',
      metric1Icon: 'fa-solid fa-play',
      metric1Text: '1.2M YouTube Views',
      metric2Icon: 'fa-solid fa-user-plus',
      metric2Text: '+45k Subscribers',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE'
    },
    {
      _id: 'work-5',
      category: 'ugc',
      title: 'High-Converting Direct Response Ad',
      clientName: 'Aura Glow Skincare',
      metric1Icon: 'fa-solid fa-chart-line',
      metric1Text: '4.2x ROAS on Meta',
      metric2Icon: 'fa-solid fa-dollar-sign',
      metric2Text: 'k Revenue',
      thumbnailUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso'
    },
    {
      _id: 'work-6',
      category: 'reels',
      title: 'High-Energy Sound Design Reel',
      clientName: 'HyperFit Athletics',
      metric1Icon: 'fa-solid fa-bolt',
      metric1Text: '8.1M Impressions',
      metric2Icon: 'fa-solid fa-share-nodes',
      metric2Text: '35k Shares',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE'
    }
  ];

  const projects = initialProjects && initialProjects.length > 0 ? initialProjects : defaultProjects;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'talking-head', label: 'Talking Head' },
    { id: 'ugc', label: 'UGC Ads' },
    { id: 'saas', label: 'SaaS Motion' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => {
        const cat = (p.category || 'reels').toLowerCase();
        if (activeFilter === 'podcasts' && (cat === 'podcast' || cat === 'podcasts')) return true;
        return cat === activeFilter.toLowerCase();
      });

  return (
    <section className="portfolio section-padding section-target section-alt" id="portfolio" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center reveal-on-scroll">
          <span className="section-subtitle">{subtitle}</span>
          <h2 className="section-title" style={{ fontSize: '3rem' }}>
            {title1} <span className="combination-font">{title2}</span>
          </h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="portfolio-tabs" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
              type="button"
              style={{ cursor: 'pointer' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Filtered Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project._id || idx} className="portfolio-card glass-card" data-category={project.category || 'reels'}>
              <div className="portfolio-thumb-wrapper" style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
                <InlineVideoPlayer 
                  videoUrl={project.videoUrl} 
                  thumbnailUrl={project.thumbnailUrl || (project.thumbnail ? project.thumbnail : null)}
                  altText={project.title}
                />
              </div>
              <div className="portfolio-info">
                <span className="client-tag">{project.clientName}</span>
                <h4>{project.title}</h4>
                <div className="meta-row">
                  {project.metric1Text && <span><i className={project.metric1Icon || 'fa-solid fa-star'}></i> {project.metric1Text}</span>}
                  {project.metric2Text && <span><i className={project.metric2Icon || 'fa-solid fa-star'}></i> {project.metric2Text}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
