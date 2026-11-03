"use client";

import { useEffect, useRef } from "react";
import { urlFor } from "@/sanity/image";

// A scrolling rail needs enough different videos to fill the row.
const MIN_VIDEOS_FOR_RAIL = 3;

// YouTube blocks its normal pages inside iframes, so links must become embed URLs.
// A link with no video in it, such as the bare youtube.com placeholder, returns null.
function toEmbedUrl(url = "") {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return `https://www.youtube.com/embed${parsed.pathname}`;
    if (host === "youtube.com") {
      const shortId = parsed.pathname.match(/^\/(?:shorts|embed)\/([\w-]+)/)?.[1];
      const id = shortId || parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return url;
  } catch {
    return null;
  }
}

function isDirectVideo(url = "") {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

export default function ClientReviewsSection({ reviews = [] }) {
  const sectionRef = useRef(null);
  const items = reviews;
  const seenVideos = new Set();
  const videoReviews = items.filter((item) => {
    if (!item.isVideo) return false;
    const key = isDirectVideo(item.videoUrl) ? item.videoUrl : toEmbedUrl(item.videoUrl);
    if (!key || seenVideos.has(key)) return false;
    seenVideos.add(key);
    return true;
  });
  const textReviews = items.filter((item) => !item.isVideo || !item.videoUrl);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reviews-is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <section ref={sectionRef} className="home-foundry-reviews section-padding">
      <div className="container">
        <div className="home-foundry-section-head reveal-on-scroll">
          <div>
            <span className="section-subtitle">Client reviews</span>
            <h2>What clients say<br /><span className="combination-font">about working with us.</span></h2>
          </div>
        </div>

        <div className="home-foundry-proof-capsule reveal-on-scroll">
          <div><strong>★ 4.9/5</strong><span>Verified client rating on Trustpilot</span></div>
          <i aria-hidden="true" />
          <div><strong>Top Video Agency</strong><span>Clutch / US + EU</span></div>
        </div>

        <div className="home-foundry-review-rail">
          <div className="home-foundry-review-track home-foundry-review-track-text">
            {[...textReviews, ...textReviews].map((review, index) => (
              <article className="home-foundry-text-review" key={`${review._id}-${index}`}>
                <span className="home-foundry-review-mark">“</span>
                <p>{review.review}</p>
                <footer><strong>{review.clientName}</strong><span>{review.clientRole}</span></footer>
              </article>
            ))}
          </div>
        </div>

        {videoReviews.length >= MIN_VIDEOS_FOR_RAIL && (
          <div className="home-foundry-review-rail home-foundry-review-rail-video">
            <div className="home-foundry-review-track home-foundry-review-track-video">
              {[...videoReviews, ...videoReviews].map((review, index) => (
                <article className="home-foundry-video-review" key={`${review._id}-${index}`}>
                  {isDirectVideo(review.videoUrl) ? (
                    <video controls playsInline preload="metadata" poster={review.videoThumbnail?.asset ? urlFor(review.videoThumbnail).width(900).url() : undefined}>
                      <source src={review.videoUrl} />
                    </video>
                  ) : (
                    <iframe src={toEmbedUrl(review.videoUrl)} title={`${review.clientName} video review`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" />
                  )}
                  <div><strong>{review.clientName}</strong><span>{review.clientRole}</span></div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
