"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function getEmbedUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com") && parsed.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`;
    }
    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${parsed.pathname}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.replace("/", "");
      return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
    }
  } catch (e) {
    return null;
  }
  return null;
}

export default function WorkflowExplainerVideo({
  videoUrl = "",
  posterUrl = "",
  ariaLabel = "Workflow explainer video",
  aspectRatio = "16 / 9",
}) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getEmbedUrl(videoUrl);

  useEffect(() => {
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isPortrait = aspectRatio.replace(/\s/g, "") === "9/16";
      const compactWidth = isPortrait ? "min(38%, 360px)" : "min(72%, 760px)";
      const expandedWidth = isPortrait ? "min(48%, 460px)" : "100%";

      if (reducedMotion) {
        gsap.set(frameRef.current, {
          width: isPortrait ? "min(48%, 460px)" : "100%",
          scale: 1,
          borderRadius: "18px",
        });
        return;
      }

      gsap.fromTo(
        frameRef.current,
        { width: compactWidth, scale: 0.92, borderRadius: "28px", opacity: 0.8 },
        {
          width: expandedWidth,
          scale: 1,
          borderRadius: "18px",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            end: "top 28%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, [aspectRatio]);

  const handlePlayToggle = () => {
    if (embedUrl) {
      setIsPlaying(!isPlaying);
      return;
    }
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <section className="workflow-explainer" ref={sectionRef} aria-label={ariaLabel}>
      <div
        className="workflow-explainer-frame"
        ref={frameRef}
        style={{ "--workflow-video-ratio": aspectRatio }}
        data-video-ratio={aspectRatio.replace(/\s/g, "")}
      >
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={ariaLabel}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "inherit",
            }}
          />
        ) : (
          <>
            {videoUrl && !embedUrl ? (
              <video
                ref={videoRef}
                src={videoUrl}
                poster={posterUrl || undefined}
                playsInline
                preload="metadata"
                aria-label={ariaLabel}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <img
                src={posterUrl || "/Picture/square.png"}
                alt={ariaLabel}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                }}
                onClick={handlePlayToggle}
              />
            )}

            <button
              className={`workflow-video-play ${isPlaying ? "is-playing" : ""}`}
              type="button"
              onClick={handlePlayToggle}
              aria-label={isPlaying ? `Pause ${ariaLabel}` : `Play ${ariaLabel}`}
            >
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
              <span>{isPlaying ? "Pause" : "Play founder overview"}</span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
