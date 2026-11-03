"use client";

import { useRef, useState } from "react";
import { getEmbedUrl } from "@/lib/videoEmbed";

export default function WorkflowExplainerVideo({
  videoUrl = "",
  posterUrl = "",
  ariaLabel = "Workflow explainer video",
  aspectRatio = "16 / 9",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getEmbedUrl(videoUrl);

  const isPortrait = aspectRatio.replace(/\s/g, "") === "9/16";

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
    <section className="workflow-explainer" aria-label={ariaLabel}>
      <div
        className="workflow-explainer-frame"
        style={{ "--workflow-video-ratio": aspectRatio, width: isPortrait ? "min(48%, 460px)" : "100%" }}
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
                }}
                onClick={handlePlayToggle}
              />
            )}

            {videoUrl && <button
              className={`workflow-video-play ${isPlaying ? "is-playing" : ""}`}
              type="button"
              onClick={handlePlayToggle}
              aria-label={isPlaying ? `Pause ${ariaLabel}` : `Play ${ariaLabel}`}
            >
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
            </button>}
          </>
        )}
      </div>
    </section>
  );
}
