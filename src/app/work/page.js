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
    { id: 'podcast', label: 'Multi-Cam Podcast', icon: 'fa-microphone-lines' },
    { id: 'talking-head', label: 'YouTube Long-Form', icon: 'fa-youtube' },
    { id: 'reels', label: 'Shorts & Reels', icon: 'fa-tiktok' },
    { id: 'saas', label: '3D SaaS Motion', icon: 'fa-wand-magic-sparkles' },
    { id: 'promo', label: 'Paid Video Ads', icon: 'fa-chart-line' },
    { id: 'thumbnails', label: '3D Thumbnails', icon: 'fa-image' }
  ];

  const portfolioProjects = [
    // 1. PODCAST (16:9)
    { id: 'pod-1', category: 'podcast', isVertical: false, title: 'The Modern Founder Podcast Episode #14', thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K PRORES', time: '48:12', audio: '-14 LUFS' },
    { id: 'pod-2', category: 'podcast', isVertical: false, title: 'Studio Multi-Camera Audio Cut', thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K PRORES', time: '62:40', audio: '-14 LUFS' },
    { id: 'pod-3', category: 'podcast', isVertical: false, title: 'Creator Mastery Audio & Video Suite', thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K PRORES', time: '34:18', audio: '-14 LUFS' },
    { id: 'pod-4', category: 'podcast', isVertical: false, title: 'Tech Founders Table Roundtable Master', thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K PRORES', time: '55:04', audio: '-14 LUFS' },
    { id: 'pod-5', category: 'podcast', isVertical: false, title: 'Deep Dive Studio Recording Cut', thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K PRORES', time: '41:20', audio: '-14 LUFS' },
    { id: 'pod-6', category: 'podcast', isVertical: false, title: 'Executive Voice & Sound Engineering Cut', thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K PRORES', time: '52:10', audio: '-14 LUFS' },
    { id: 'pod-7', category: 'podcast', isVertical: false, title: 'Venture Backed Startup Founder Talk', thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K PRORES', time: '38:45', audio: '-14 LUFS' },
    { id: 'pod-8', category: 'podcast', isVertical: false, title: 'Studio Broadcast Level Podcast Master', thumbnail: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K PRORES', time: '67:30', audio: '-14 LUFS' },

    // 2. TALKING-HEAD (16:9)
    { id: 'th-1', category: 'talking-head', isVertical: false, title: 'Cinematic YouTube Long-Form Authority Video', thumbnail: 'https://images.unsplash.com/photo-1516280440502-12695fb79f15?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K 60FPS', time: '14:20', audio: 'J-CUTS' },
    { id: 'th-2', category: 'talking-head', isVertical: false, title: 'Educational Strategy Breakdown Film', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K 60FPS', time: '18:50', audio: '2D DIAGRAMS' },
    { id: 'th-3', category: 'talking-head', isVertical: false, title: 'Personal Brand Story & Case Study Cut', thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K 60FPS', time: '12:15', audio: 'REC.709' },
    { id: 'th-4', category: 'talking-head', isVertical: false, title: 'High-Ticket Agency Authority Presentation', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K 60FPS', time: '21:05', audio: 'SOUND FX' },
    { id: 'th-5', category: 'talking-head', isVertical: false, title: 'Documentary-Style Narrative YouTube Video', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K 60FPS', time: '16:40', audio: 'CINEMATIC' },
    { id: 'th-6', category: 'talking-head', isVertical: false, title: 'Investor Pitch & Founder Vision Cut', thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K 60FPS', time: '11:30', audio: 'MOTION UI' },
    { id: 'th-7', category: 'talking-head', isVertical: false, title: 'CEO Masterclass & Keynote Presentation', thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '4K 60FPS', time: '25:12', audio: 'AUTHORITY' },
    { id: 'th-8', category: 'talking-head', isVertical: false, title: 'Fintech Market Analysis YouTube Deep Dive', thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '4K 60FPS', time: '19:40', audio: 'GRAPHS' },

    // 3. SHORTS / REELS (9:16 VERTICAL REEL RATIO - Exactly 4 per row, 8 initial items)
    { id: 'reel-1', category: 'reels', isVertical: true, title: 'Viral 3-Second Hook Retention Reel', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso', codec: '9:16 60FPS', views: '1.4M VIEWS', retention: '88%' },
    { id: 'reel-2', category: 'reels', isVertical: true, title: 'Alex Hormozi Style Kinetic Captions Short', thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE', codec: '9:16 60FPS', views: '840K VIEWS', retention: '92%' },
    { id: 'reel-3', category: 'reels', isVertical: true, title: 'High-Energy Sound Design Instagram Reel', thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso', codec: '9:16 60FPS', views: '2.1M VIEWS', retention: '94%' },
    { id: 'reel-4', category: 'reels', isVertical: true, title: 'Founder Wisdom Micro-Podcast Clip', thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE', codec: '9:16 60FPS', views: '970K VIEWS', retention: '89%' },
    { id: 'reel-5', category: 'reels', isVertical: true, title: 'Direct Response TikTok Organic Hook', thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso', codec: '9:16 60FPS', views: '620K VIEWS', retention: '85%' },
    { id: 'reel-6', category: 'reels', isVertical: true, title: 'Fast-Paced Motion Graphics Short Clip', thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE', codec: '9:16 60FPS', views: '1.1M VIEWS', retention: '91%' },
    { id: 'reel-7', category: 'reels', isVertical: true, title: 'E-Commerce UGC Problem-Solution Short', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', youtubeId: 'L_LUpnjgPso', codec: '9:16 60FPS', views: '780K VIEWS', retention: '87%' },
    { id: 'reel-8', category: 'reels', isVertical: true, title: 'Viral Fitness Transformation Story Reel', thumbnail: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80', youtubeId: 'M7lc1UVf-VE', codec: '9:16 60FPS', views: '1.8M VIEWS', retention: '93%' },

    // 4. SAAS (16:9)
    { id: 'saas-1', category: 'saas', isVertical: false, title: 'SaaS Platform 3D Motion Product Demo', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '60FPS BEZIER', time: '01:15', audio: 'VECTOR UI' },
    { id: 'saas-2', category: 'saas', isVertical: false, title: 'Product Hunt Launch Video Animation', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '60FPS BEZIER', time: '00:58', audio: 'LAUNCH' },
    { id: 'saas-3', category: 'saas', isVertical: false, title: 'Silky Smooth UI Dynamic Cursor Demo', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '60FPS BEZIER', time: '01:30', audio: 'CURSOR FX' },
    { id: 'saas-4', category: 'saas', isVertical: false, title: '2D Vector Explainer & Feature Breakdown', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '60FPS BEZIER', time: '01:45', audio: 'EXPLAINER' },
    { id: 'saas-5', category: 'saas', isVertical: false, title: 'App Store Interactive Screen Mockups', thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: '60FPS BEZIER', time: '00:45', audio: '3D MOCKUP' },
    { id: 'saas-6', category: 'saas', isVertical: false, title: 'Enterprise Cloud SaaS Walkthrough Animation', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: '60FPS BEZIER', time: '02:10', audio: 'ENTERPRISE' },

    // 5. PROMO & ADS (16:9)
    { id: 'promo-1', category: 'promo', isVertical: false, title: 'High-Converting Direct Response Paid Ad', thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: 'META ADS', time: '4.8X ROAS', audio: '3 HOOKS' },
    { id: 'promo-2', category: 'promo', isVertical: false, title: 'Meta & TikTok E-Commerce Commercial Ad', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: 'TIKTOK ADS', time: '3.9X ROAS', audio: '5 HOOKS' },
    { id: 'promo-3', category: 'promo', isVertical: false, title: 'Brand Launch Teaser & Commercial', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: 'CINEMATIC', time: '$12 CPL', audio: 'COMMERCIAL' },
    { id: 'promo-4', category: 'promo', isVertical: false, title: 'Split-Test Hook Variations Cut', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: 'OMNICHANNEL', time: '5.2X ROAS', audio: '4 HOOKS' },
    { id: 'promo-5', category: 'promo', isVertical: false, title: 'Fashion & Luxury Lifestyle Promo Video', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', youtubeId: 'L_LUpnjgPso', codec: 'LIFESTYLE', time: '4.1X ROAS', audio: 'COMMERCIAL' },
    { id: 'promo-6', category: 'promo', isVertical: false, title: 'Lead Generation Video Ad for Meta Campaigns', thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', youtubeId: 'M7lc1UVf-VE', codec: 'LEAD GEN', time: '5.5X ROAS', audio: 'DIRECT' },

    // 6. THUMBNAILS (16:9 Thumbnail Designs)
    { id: 'thumb-1', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #1', thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '11.4% CTR', audio: '3D DEPTH' },
    { id: 'thumb-2', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #2', thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '13.2% CTR', audio: '3D DEPTH' },
    { id: 'thumb-3', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #3', thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '10.8% CTR', audio: '3D DEPTH' },
    { id: 'thumb-4', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #4', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '14.1% CTR', audio: '3D DEPTH' },
    { id: 'thumb-5', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #5', thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '12.5% CTR', audio: '3D DEPTH' },
    { id: 'thumb-6', category: 'thumbnails', isVertical: false, isThumbnailOnly: true, title: 'High-CTR YouTube Custom Thumbnail #6', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', codec: 'PHOTOSHOP', time: '11.9% CTR', audio: '3D DEPTH' }
  ];

  const totalMatchingProjects = portfolioProjects.filter(p => p.category === activeFilter);
  const currentLimit = visibleCounts[activeFilter] || (activeFilter === 'reels' ? 8 : 6);
  const filteredProjects = totalMatchingProjects.slice(0, currentLimit);
  const hasMore = totalMatchingProjects.length > currentLimit;
  const isReelsCategory = activeFilter === 'reels';

  return (
    <div className="work-page-wrapper" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '60px' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 26px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '12px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>4K MASTER POST-PRODUCTION VAULT</span>
          </div>

          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Work Engineered to <span className="combination-font">Scale Watch-Time</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
            Filter through our technical archive of high-retention vertical reels, studio multi-cam master episodes, and SaaS motion graphics.
          </p>

          {/* Raycast-style Segmented Command Bar Filter */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#080C14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '4px',
            borderRadius: '10px',
            marginTop: '22px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            flexWrap: 'wrap',
            gap: '4px',
            justifyContent: 'center'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleTabChange(cat.id)}
                className={`tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  background: activeFilter === cat.id ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  color: activeFilter === cat.id ? '#38BDF8' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className={`fa-solid ${cat.icon}`} style={{ fontSize: '0.75rem' }}></i>
                <span>{cat.label}</span>
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
            maxWidth: '1240px',
            margin: '28px auto 35px'
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card pop-hover"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                padding: '0',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#080C14',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
              }}
            >
              {/* Top Spec Header Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '7px 12px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <span className="mono-spec" style={{ fontSize: '0.64rem', color: '#38BDF8' }}>
                  {proj.codec || '4K MASTER'}
                </span>
                <span className="mono-spec" style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                  {proj.time || proj.views || 'MASTER_CUT'}
                </span>
              </div>

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
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />

                {/* Subtle Hover Darkening Layer */}
                {!proj.isThumbnailOnly && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.25)' }}></div>
                )}

                {/* Centered Precision Play Trigger */}
                {!proj.isThumbnailOnly && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: isReelsCategory ? '48px' : '56px',
                      height: isReelsCategory ? '34px' : '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.45)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.5)'
                    }}
                  >
                    <i className="fa-solid fa-play" style={{ marginLeft: '2px' }}></i>
                  </div>
                )}
              </div>

              {/* Bottom Card Title & Spec */}
              <div style={{ padding: '12px 14px' }}>
                <h4 style={{ margin: '0 0 6px', fontSize: '0.92rem', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.3' }}>
                  {proj.title}
                </h4>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span className="mono-spec" style={{ fontSize: '0.62rem', color: '#10B981', background: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    {proj.audio || proj.retention || '100% QUALITY PASS'}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <button
              onClick={handleLoadMore}
              type="button"
              className="btn btn-outline pop-btn"
              style={{ padding: '10px 24px', borderRadius: '8px', fontSize: '0.86rem', fontWeight: '700' }}
            >
              <span>Load More Projects ({totalMatchingProjects.length - currentLimit} remaining)</span>
            </button>
          </div>
        )}

        {/* Raycast Calendar Embed Footer */}
        <div 
          className="glass-card" 
          style={{
            marginTop: '60px',
            padding: '30px 20px',
            borderRadius: '16px',
            background: '#080C14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '10px' }}>
            <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>DEDICATED POST-PRODUCTION SLOTS</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Lock In Your <span className="combination-font">Monthly Editing Retainer</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 24px', fontSize: '0.92rem' }}>
            Schedule a 15-minute technical audit directly on Walid Abdullah’s executive calendar to evaluate your footage workflow.
          </p>

          <div 
            className="calendly-inline-widget" 
            data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080c14&text_color=ffffff&primary_color=2563eb`} 
            style={{ minWidth: '320px', height: '620px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
          ></div>
        </div>

      </div>

      {/* Basement Darkroom Lightbox */}
      {selectedVideo && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
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
              maxWidth: selectedVideo.isVertical ? '420px' : '960px',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              background: '#05070B',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)'
            }}
          >
            {/* Top Modal Spec Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <span className="mono-spec" style={{ fontSize: '0.72rem', color: '#38BDF8' }}>
                MASTER_PLAYER_FEED // {selectedVideo.codec || '4K'}
              </span>

              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: '30px', height: '30px',
                  borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div style={{ position: 'relative', width: '100%', aspectRatio: selectedVideo.isVertical ? '9/16' : '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>

            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>{selectedVideo.title}</h3>
              <Link 
                href={`/book-a-call?service=${encodeURIComponent(selectedVideo.title)}`} 
                onClick={() => setSelectedVideo(null)} 
                className="btn btn-primary" 
                style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '6px' }}
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading Post-Production Vault...</div>}>
      <WorkContent />
    </Suspense>
  );
}
