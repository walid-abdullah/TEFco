"use client";
import Link from 'next/link';

export default function PromoBanner({ banner }) {
  if (!banner || !banner.isActive || !banner.text) return null;

  return (
    <div style={{
      background: banner.backgroundColor || "var(--accent-blue)",
      color: "white",
      padding: "10px 20px",
      textAlign: "center",
      fontSize: "0.95rem",
      fontWeight: "500",
      position: "relative",
      zIndex: 1000
    }}>
      {banner.linkUrl ? (
        <Link href={banner.linkUrl} style={{ color: "white", textDecoration: "underline", textUnderlineOffset: "4px" }}>
          {banner.text}
        </Link>
      ) : (
        <span>{banner.text}</span>
      )}
    </div>
  );
}
