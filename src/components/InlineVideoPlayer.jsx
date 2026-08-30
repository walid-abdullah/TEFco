"use client";

import { useState, useEffect } from "react";

function getEmbedUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    let videoId = '';
    
    if (parsed.hostname.includes('youtube.com') && parsed.searchParams.has('v')) {
      videoId = parsed.searchParams.get('v');
    } else if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.substring(1);
    }

    if (videoId) {
      // Add parameters to clean up the player UI as much as possible, controls=0 is the only way to hide the title bar
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1`;
    }
  } catch (e) {
    return null;
  }
  return null;
}

export default function InlineVideoPlayer({ videoUrl, thumbnailUrl, altText, badge, playButtonId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getEmbedUrl(videoUrl);

  useEffect(() => {
    if (playButtonId) {
      const btn = document.getElementById(playButtonId);
      if (btn) {
        const handlePlay = (e) => {
          e.preventDefault();
          setIsPlaying(true);
        };
        btn.addEventListener('click', handlePlay);
        return () => btn.removeEventListener('click', handlePlay);
      }
    }
  }, [playButtonId]);

  if (!videoUrl) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%", background: "transparent" }}>
        <img loading="lazy" src={thumbnailUrl || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"} alt={altText || "Video Thumbnail"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000" }}>
      {isPlaying ? (
        embedUrl ? (
          <iframe 
            src={embedUrl} 
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <div style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "20px", textAlign: "center", background: "#1a1a1a" }}>
            <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff4d4d" }}></i>
            <p>Invalid Video URL</p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Please update the YouTube link in Sanity CMS.</p>
          </div>
        )
      ) : (
        <>
          {badge}
          <img loading="lazy" src={thumbnailUrl || "Picture/Thumbnail.png"} alt={altText || "Video Thumbnail"} style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer", transition: "opacity 0.3s ease" }} onClick={() => setIsPlaying(true)} />
          <button 
            onClick={() => setIsPlaying(true)}
            className="apple-glass-play-btn" 
            style={{
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)", 
            }}
          >
            <i className="fa-solid fa-play"></i>
          </button>
        </>
      )}
    </div>
  );
}
