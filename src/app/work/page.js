"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function WorkContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const validTabs = ['podcast', 'talking-head', 'reels', 'saas', 'promo', 'thumbnails'];
  const initialTab = searchParams.get('tab');
  const [activeFilter, setActiveFilter] = useState((initialTab && validTabs.includes(initialTab)) ? initialTab : 'podcast');
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Exactly 8 items for reels (4 on row 1, 4 on row 2), 6 for standard (3 on row 1, 3 on row 2)
  const [visibleCounts, setVisibleCounts] = useState({
    podcast: 6,
    'talking-head': 6,
    reels: 8,
    saas: 6,
    promo: 6,
    thumbnails: 6
  });

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/w-abdullah5588/30min";

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && validTabs.includes(tab)) {
      setActiveFilter(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveFilter(tabId);
    router.replace(`/work?tab=${tabId}`, { scroll: false });
  };

  const handleLoadMore = () => {
    const increment = activeFilter === 'reels' ? 8 : 6;
    setVisibleCounts(prev => ({
      ...prev,
      [activeFilter]: (prev[activeFilter] || (activeFilter === 'reels' ? 8 : 6)) + increment
    }));
  };

  const categories = [
    { id: 'podcast', label: 'Podcast' },
    { id: 'talking-head', label: 'Talking-head' },
    { id: 'reels', label: 'Shorts/Reels' },
    { id: 'saas', label: 'SaaS' },
    { id: 'promo', label: 'Promo & Ads' },
    { id: 'thumbnails', label: 'Thumbnails' }
  ];

  const portfolioProjects = [
    // 1. PODCAST (16:9)
    { id: 'pod-1', category: 'podcast', isVertical: false, title: 'The Modern Founder Podcast Episode #14', thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-2', category: 'podcast', isVertical: false, title: 'Studio Multi-Camera Audio Cut', thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'pod-3', category: 'podcast', isVertical: false, title: 'Creator Mastery Audio & Video Suite', thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-4', category: 'podcast', isVertical: false, title: 'Tech Founders Table Roundtable Master', thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'pod-5', category: 'podcast', isVertical: false, title: 'Deep Dive Studio Recording Cut', thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-6', category: 'podcast', isVertical: false, title: 'Executive Voice & Sound Engineering Cut', thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'pod-7', category: 'podcast', isVertical: false, title: 'Venture Backed Startup Founder Talk', thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'pod-8', category: 'podcast', isVertical: false, title: 'Studio Broadcast Level Podcast Master', thumbnail: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },

    // 2. TALKING-HEAD (16:9)
    { id: 'th-1', category: 'talking-head', isVertical: false, title: 'Cinematic YouTube Long-Form Authority Video', thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-2', category: 'talking-head', isVertical: false, title: 'Educational Strategy Breakdown Film', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'th-3', category: 'talking-head', isVertical: false, title: 'Personal Brand Story & Case Study Cut', thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-4', category: 'talking-head', isVertical: false, title: 'High-Ticket Agency Authority Presentation', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'th-5', category: 'talking-head', isVertical: false, title: 'Documentary-Style Narrative YouTube Video', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-6', category: 'talking-head', isVertical: false, title: 'Investor Pitch & Founder Vision Cut', thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'th-7', category: 'talking-head', isVertical: false, title: 'CEO Masterclass & Keynote Presentation', thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'th-8', category: 'talking-head', isVertical: false, title: 'Fintech Market Analysis YouTube Deep Dive', thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 3. SHORTS / REELS (9:16 VERTICAL REEL RATIO - Exactly 4 per row, 8 initial items)
    { id: 'reel-1', category: 'reels', isVertical: true, title: 'Viral 3-Second Hook Retention Reel', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-2', category: 'reels', isVertical: true, title: 'Alex Hormozi Style Kinetic Captions Short', thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-3', category: 'reels', isVertical: true, title: 'High-Energy Sound Design Instagram Reel', thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-4', category: 'reels', isVertical: true, title: 'Founder Wisdom Micro-Podcast Clip', thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-5', category: 'reels', isVertical: true, title: 'Direct Response TikTok Organic Hook', thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-6', category: 'reels', isVertical: true, title: 'Fast-Paced Motion Graphics Short Clip', thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-7', category: 'reels', isVertical: true, title: 'E-Commerce UGC Problem-Solution Short', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-8', category: 'reels', isVertical: true, title: 'Viral Fitness Transformation Story Reel', thumbnail: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-9', category: 'reels', isVertical: true, title: 'Personal Brand Storytelling Micro Cut', thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-10', category: 'reels', isVertical: true, title: 'Tech Review Fast Cut TikTok Reel', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'reel-11', category: 'reels', isVertical: true, title: 'High-Retention SaaS Explainer Short', thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'reel-12', category: 'reels', isVertical: true, title: 'Podcast Viral Hook Extraction Reel', thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 4. SAAS (16:9)
    { id: 'saas-1', category: 'saas', isVertical: false, title: 'SaaS Platform 3D Motion Product Demo', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-2', category: 'saas', isVertical: false, title: 'Product Hunt Launch Video Animation', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'saas-3', category: 'saas', isVertical: false, title: 'Silky Smooth UI Dynamic Cursor Demo', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-4', category: 'saas', isVertical: false, title: '2D Vector Explainer & Feature Breakdown', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'saas-5', category: 'saas', isVertical: false, title: 'App Store Interactive Screen Mockups', thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-6', category: 'saas', isVertical: false, title: 'Enterprise Cloud SaaS Walkthrough Animation', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'saas-7', category: 'saas', isVertical: false, title: 'AI Automation Software Dashboard Demo', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'saas-8', category: 'saas', isVertical: false, title: 'Fintech Mobile App Launch Motion Promo', thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },

    // 5. PROMO & ADS (16:9)
    { id: 'promo-1', category: 'promo', isVertical: false, title: 'High-Converting Direct Response Paid Ad', thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-2', category: 'promo', isVertical: false, title: 'Meta & TikTok E-Commerce Commercial Ad', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'promo-3', category: 'promo', isVertical: false, title: 'Brand Launch Teaser & Cinematic Commercial', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-4', category: 'promo', isVertical: false, title: 'Split-Test Hook Variations Direct Response Cut', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'promo-5', category: 'promo', isVertical: false, title: 'Fashion & Luxury Lifestyle Promo Video', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-6', category: 'promo', isVertical: false, title: 'Lead Generation Video Ad for Meta Campaigns', thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },
    { id: 'promo-7', category: 'promo', isVertical: false, title: 'High-ROAS Direct Response Supplement Ad', thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso' },
    { id: 'promo-8', category: 'promo', isVertical: false, title: 'Agency Scaling Service Commercial Cut', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE' },

    // 6. THUMBNAILS (16:9 Thumbnail Designs)
    { id: 'thumb-1', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #1', thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-2', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #2', thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-3', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #3', thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-4', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #4', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-5', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #5', thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-6', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #6', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-7', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #7', thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80' },
    { id: 'thumb-8', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #8', thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80' }
  ];

  const totalMatchingProjects = portfolioProjects.filter(p => p.category === activeFilter);
  const currentLimit = visibleCounts[activeFilter] || (activeFilter === 'reels' ? 8 : 6);
  const filteredProjects = totalMatchingProjects.slice(0, currentLimit);
  const hasMore = totalMatchingProjects.length > currentLimit;
  const isReelsCategory = activeFilter === 'reels';

  return (
    <div className="work-page-wrapper" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '50px' }}>
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-orb glow-blue" style={{ top: '5%', left: '-10%' }}></div>
      <div className="bg-glow-orb glow-cyan" style={{ top: '35%', right: '-10%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 20px' }}>
          <span className="section-subtitle" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Production Showcase
          </span>
          <h1 className="section-title" style={{ fontSize: '2.6rem', marginBottom: '10px', fontWeight: '800' }}>
            Work Engineered to <span className="combination-font">Scale Attention</span>
          </h1>
          <p className="section-description" style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', maxWidth: '620px', margin: '0 auto' }}>
            Explore our retention-driven post-production assets across high-ticket short-form, podcasts, SaaS animations, and paid social campaigns.
          </p>

          {/* Clean Horizontal Filter Bar */}
          <div className="portfolio-tabs" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)',
            padding: '4px',
            borderRadius: '12px',
            marginTop: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleTabChange(cat.id)}
                className={`tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeFilter === cat.id ? 'var(--accent-blue-primary)' : 'transparent',
                  color: activeFilter === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SHOWCASE GRID:
            - Reels: Strictly 4 columns in desktop (Row 1: 4 cards, Row 2: 4 cards)
            - Standard: Strictly 3 columns in desktop (Row 1: 3 cards, Row 2: 3 cards)
        */}
        <div 
          className={isReelsCategory ? 'reels-grid-4col' : 'standard-grid-3col'} 
          style={{
            display: 'grid',
            gap: isReelsCategory ? '16px' : '20px',
            maxWidth: isReelsCategory ? '1200px' : '1200px',
            margin: '24px auto 35px'
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card pop-hover"
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                padding: '0',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                opacity: 1,
                transform: 'none'
              }}
            >
              {/* Thumbnail Container (16:9 standard OR 9:16 Reel ratio) */}
              <div 
                style={{ 
                  position: 'relative', 
                  aspectRatio: isReelsCategory ? '9/16' : '16/9', 
                  overflow: 'hidden', 
                  cursor: proj.isThumbnailOnly ? 'default' : 'pointer' 
                }}
                onClick={() => !proj.isThumbnailOnly && setSelectedVideo(proj)}
              >
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                />

                {/* Subtle Hover Darkening Layer */}
                {!proj.isThumbnailOnly && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.2)',
                    transition: 'background 0.3s ease'
                  }}></div>
                )}

                {/* Wide Capsule Play Button */}
                {!proj.isThumbnailOnly && (
                  <button 
                    className="apple-glass-play-btn"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none',
                      width: isReelsCategory ? '52px' : '64px',
                      height: isReelsCategory ? '36px' : '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.18)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.45)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.95rem',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label="Play Video"
                  >
                    <i className="fa-solid fa-play" style={{ marginLeft: '2px' }}></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ELEGANT VIEW MORE BUTTON (Shows when items exceed limit) */}
        {hasMore && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <button
              onClick={handleLoadMore}
              type="button"
              className="btn btn-outline pop-btn"
              style={{
                padding: '11px 28px',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                color: 'var(--text-primary)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}
            >
              <span>View More Projects</span>
              <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8rem', color: '#38BDF8' }}></i>
            </button>
          </div>
        )}

        {/* 1:1 Booking Calendar & Strategy Section */}
        <div className="glass-card" style={{
          padding: '24px 20px',
          borderRadius: '20px',
          maxWidth: '1100px',
          margin: '0 auto 40px',
          border: '1px solid var(--glass-border)',
          textAlign: 'center',
          background: 'var(--card-bg)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <span className="section-subtitle" style={{ display: 'inline-block', fontSize: '0.8rem', marginBottom: '4px' }}>Book a Call</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>
            Book a 15-Minute <span className="combination-font">Discovery Call</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 16px', fontSize: '0.92rem' }}>
            Pick a convenient time slot directly on the calendar below to speak with Executive Producer Walid Abdullah.
          </p>

          {/* Official Calendly Inline Widget Integration */}
          <div 
            className="calendly-inline-widget" 
            data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=070d18&text_color=ffffff&primary_color=2563eb`} 
            style={{ minWidth: '320px', height: '620px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
          ></div>
        </div>

      </div>

      {/* VIDEO LIGHTBOX MODAL */}
      {selectedVideo && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            className="glass-card"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: selectedVideo.isVertical ? '420px' : '920px',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              background: '#070D18',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '12px', right: '12px',
                background: 'rgba(0, 0, 0, 0.75)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                width: '38px', height: '38px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 100,
                fontSize: '1.1rem'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Embedded YouTube Player */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: selectedVideo.isVertical ? '9/16' : '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            {/* Modal Info */}
            <div style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>
                {selectedVideo.title}
              </h3>
              <Link 
                href={`/book-a-call?service=${encodeURIComponent(
                  selectedVideo.category === 'reels' ? 'Shorts / Reels / TikTok' :
                  selectedVideo.category === 'podcast' ? 'Podcast & Clips Editing' :
                  selectedVideo.category === 'talking-head' ? 'Talking-Head & Authority Videos' :
                  selectedVideo.category === 'saas' ? 'SaaS & Product Motion UI' :
                  selectedVideo.category === 'promo' ? 'Promo & Commercial Ads' :
                  'High-CTR YouTube Thumbnails'
                )}`} 
                onClick={() => setSelectedVideo(null)} 
                className="btn btn-primary" 
                style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '8px' }}
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Strict CSS grid overriding inline style */}
      <style dangerouslySetInnerHTML={{__html: `
        .reels-grid-4col {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        .standard-grid-3col {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 1024px) {
          .reels-grid-4col {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .reels-grid-4col {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .standard-grid-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading Portfolio...</div>}>
      <WorkContent />
    </Suspense>
  );
}
