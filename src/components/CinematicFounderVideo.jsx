"use client";

import React, { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicFounderVideo({
  videoUrl,
  posterUrl,
  captionsUrl,
  title = "Founder video",
}) {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const descriptionId = useId();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(videoWrapperRef.current, {
          scale: 1,
          borderRadius: "16px",
          opacity: 1,
        });
        return;
      }

      gsap.fromTo(
        videoWrapperRef.current,
        { scale: 0.9, borderRadius: "32px", opacity: 0.8 },
        {
          scale: 1,
          borderRadius: "16px",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label={title}
      style={{
        padding: "clamp(24px, 5vw, 40px) 0 clamp(56px, 10vw, 100px)",
        background: "#05070B",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "min(calc(100% - 32px), 1240px)",
          margin: "0 auto",
        }}
      >
        <div
          ref={videoWrapperRef}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#070A12",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.9), 0 0 50px rgba(56,189,248,0.15)",
            overflow: "hidden",
          }}
        >
          <video
            src={videoUrl}
            poster={posterUrl}
            controls
            playsInline
            preload="metadata"
            aria-label={title}
            aria-describedby={descriptionId}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            {captionsUrl ? (
              <track
                kind="captions"
                src={captionsUrl}
                srcLang="en"
                label="English"
                default
              />
            ) : null}
          </video>
          <p
            id={descriptionId}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Use the video controls to play, pause, or adjust the volume.
          </p>
        </div>
      </div>
    </section>
  );
}
