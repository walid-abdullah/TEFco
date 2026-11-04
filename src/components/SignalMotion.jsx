"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RISE_TARGETS = "main h2, .sg-metrics > div, .sg-stack-copy > *, .sg-faq-list details, .sg-footer-grid > *, [data-rise]";
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 5;

// Two moves carry the whole site. Coloured bands open to full width as they arrive, so each
// one reads as a new page. Headings and cards rise out of a soft blur as they come into view.
// Hidden states are only applied here, so content stays visible without JavaScript.
export default function SignalMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    let context;
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll(RISE_TARGETS).forEach((element) => {
        const position = [...element.parentElement.children].indexOf(element);
        element.style.setProperty("--rise-delay", `${Math.min(position, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
        element.classList.add("sg-rise");
        observer.observe(element);
      });

      if (window.matchMedia("(min-width: 801px)").matches) {
        context = gsap.context(() => {
          gsap.utils.toArray(".sg-band-reveal").forEach((band) => {
            const radius = getComputedStyle(band).borderTopLeftRadius;
            gsap.fromTo(band, { clipPath: `inset(0 4% 0 4% round ${radius})` }, {
              clipPath: `inset(0 0% 0 0% round ${radius})`,
              ease: "none",
              scrollTrigger: { trigger: band, start: "top bottom", end: "top 40%", scrub: true },
            });
          });
        });
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      context?.revert();
    };
  }, [pathname]);

  return null;
}
