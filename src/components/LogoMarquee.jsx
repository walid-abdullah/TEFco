"use client";

import { urlFor } from "@/sanity/image";

export default function LogoMarquee({ logos }) {
  if (!logos || logos.length === 0) return null;

  // Filter out any entries that might not have an image uploaded yet
  const validLogos = logos.filter(logo => logo && logo.logo && logo.logo.asset);

  if (validLogos.length === 0) return null;

  // Duplicate logos to ensure seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-marquee-container" style={{
      width: "100%",
      overflow: "hidden",
      padding: "30px 0",
      background: "transparent",
      position: "relative",
      display: "flex",
      alignItems: "center"
    }}>
      {/* CSS Animation defined inline for the marquee effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scrollMarquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-logo-group {
          display: flex;
          align-items: center;
          gap: 60px;
          padding-right: 60px; /* match gap */
        }
        .marquee-logo {
          height: 40px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.6);
          transition: filter 0.3s ease;
        }
        .marquee-logo:hover {
          filter: grayscale(0%) opacity(1);
        }
        
        /* Fade edges */
        .logo-marquee-container::before,
        .logo-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .logo-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary) 0%, transparent 100%);
        }
        .logo-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary) 0%, transparent 100%);
        }
      `}} />
      
      <div className="marquee-track">
        <div className="marquee-logo-group">
          {validLogos.map((logo, index) => (
            <img 
              key={`logo-1-${logo._id || index}`} 
              src={urlFor(logo.logo).url()} 
              alt={logo.name || "Client Logo"} 
              className="marquee-logo"
              loading="lazy"
            />
          ))}
        </div>
        <div className="marquee-logo-group">
          {validLogos.map((logo, index) => (
            <img 
              key={`logo-2-${logo._id || index}`} 
              src={urlFor(logo.logo).url()} 
              alt={logo.name || "Client Logo"} 
              className="marquee-logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
