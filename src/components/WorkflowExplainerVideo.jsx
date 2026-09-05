"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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
        { width: compactWidth, scale: 0.92, borderRadius: "32px", opacity: 0.78 },
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

  return (
    <section className="workflow-explainer" ref={sectionRef} aria-label={ariaLabel}>
      <div
        className="workflow-explainer-frame"
        ref={frameRef}
        style={{ "--workflow-video-ratio": aspectRatio }}
        data-video-ratio={aspectRatio.replace(/\s/g, "")}
      >
        <video
          ref={videoRef}
          src={videoUrl || undefined}
          poster={posterUrl || undefined}
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <button
          className={`workflow-video-play ${isPlaying ? "is-playing" : ""}`}
          type="button"
          onClick={() => {
            if (!videoRef.current || !videoUrl) return;
            if (videoRef.current.paused) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
          disabled={!videoUrl}
          aria-label={isPlaying ? `Pause ${ariaLabel}` : `Play ${ariaLabel}`}
        >
          <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
          <span>{isPlaying ? "Pause" : "Play explainer"}</span>
        </button>
      </div>
    </section>
  );
}
