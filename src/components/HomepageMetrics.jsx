"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { target: 500, suffix: "+", label: "projects delivered" },
  { target: 48, suffix: "h", label: "first-cut target" },
  { target: 99, suffix: "%", label: "on-time delivery" },
  { target: 4.9, suffix: "/5", label: "client rating", decimals: 1 },
];

export default function HomepageMetrics() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const duration = 1300;
    const startTime = performance.now();
    let frameId;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(metrics.map((metric) => Number((metric.target * eased).toFixed(metric.decimals || 0))));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started]);

  return (
    <section ref={sectionRef} className="home-foundry-results section-padding" aria-label="Studio metrics">
      <div className="container">
        <div className="home-foundry-metrics">
          {metrics.map((metric, index) => (
            <div key={metric.label}>
              <strong>{values[index]}{metric.suffix}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
