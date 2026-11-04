"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DesignMonksContact from './DesignMonksContact';

export default function FloatingDock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`sg-dock${isVisible ? ' is-visible' : ''}`} aria-hidden={!isVisible}>
        <Link href="/work" tabIndex={isVisible ? 0 : -1}>Projects</Link>
        <Link href="/services" tabIndex={isVisible ? 0 : -1}>Services</Link>
        <button type="button" onClick={() => setIsModalOpen(true)} tabIndex={isVisible ? 0 : -1}>
          Start a project <span aria-hidden="true">→</span>
        </button>
        <Link href="/pricing" tabIndex={isVisible ? 0 : -1}>Pricing</Link>
        <Link href="/about" tabIndex={isVisible ? 0 : -1}>About</Link>
      </div>
      {isModalOpen && <DesignMonksContact isModal={true} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
