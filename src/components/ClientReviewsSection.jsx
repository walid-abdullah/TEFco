"use client";

import { useEffect, useRef } from "react";
import { urlFor } from "@/sanity/image";

const fallbackReviews = [
  {
    _id: "review-1",
    clientName: "Alex Hormozi",
    clientRole: "Founder & Creator",
    review: "The edits feel sharp, intentional, and built for retention. We finally have a system we can publish consistently.",
  },
  {
    _id: "review-2",
    clientName: "Maya Chen",
    clientRole: "Brand Director",
    review: "They understood the story before touching the timeline. Every deliverable felt considered and ready to ship.",
  },
  {
    _id: "review-3",
    clientName: "Jordan Lee",
    clientRole: "SaaS Founder",
    review: "The team brought structure to a messy content pipeline and made every platform version feel native.",
  },
  {
    _id: "review-4",
    clientName: "Priya Shah",
    clientRole: "Marketing Lead",
    review: "Fast, thoughtful, and unusually good at knowing what to leave out. The work speaks clearly.",
  },
  {
    _id: "review-5",
    clientName: "Daniel Brooks",
    clientRole: "Podcast Host",
    review: "Our long-form conversations now turn into a dependable library of clips without losing the original voice.",
  },
];

function isDirectVideo(url = "") {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

export default function ClientReviewsSection({ reviews = [] }) {
  const sectionRef = useRef(null);
  const items = reviews.length ? reviews : fallbackReviews;
  const videoReviews = items.filter((item) => item.isVideo && item.videoUrl);
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

  return (
    <section ref={sectionRef} className="home-foundry-reviews section-padding">
      <div className="container">
        <div className="home-foundry-section-head reveal-on-scroll">
          <div>
            <span className="section-subtitle">Client feedback</span>
            <h2>Good work gets<br /><span className="combination-font">remembered.</span></h2>
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

        {videoReviews.length > 0 && (
          <div className="home-foundry-review-rail home-foundry-review-rail-video">
            <div className="home-foundry-review-track home-foundry-review-track-video">
              {[...videoReviews, ...videoReviews].map((review, index) => (
                <article className="home-foundry-video-review" key={`${review._id}-${index}`}>
                  {isDirectVideo(review.videoUrl) ? (
                    <video controls playsInline preload="metadata" poster={review.videoThumbnail?.asset ? urlFor(review.videoThumbnail).width(900).url() : undefined}>
                      <source src={review.videoUrl} />
                    </video>
                  ) : (
                    <iframe src={review.videoUrl} title={`${review.clientName} video review`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" />
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
