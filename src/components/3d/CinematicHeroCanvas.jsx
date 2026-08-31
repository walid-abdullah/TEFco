"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PerformanceTier } from './core/PerformanceTier';
import { AssetManager } from './core/AssetManager';
import { CameraCorridor } from './core/CameraCorridor';

// 5 Minimalist Glossy 3D Sculptures
import { Scene01PodcastStudio } from './scenes/Scene01PodcastStudio';
import { Scene02Portal } from './scenes/Scene02Portal';
import { Scene03VideoProduction } from './scenes/Scene03VideoProduction';
import { Scene04ContentProduction } from './scenes/Scene04ContentProduction';
import { Scene05PostProduction } from './scenes/Scene05PostProduction';

// 3 Continuous Post-Production Environments
import { Scene06ContentUniverse } from './scenes/Scene06ContentUniverse';
import { Scene07TheFoundry } from './scenes/Scene07TheFoundry';
import { Scene08EditingStudio } from './scenes/Scene08EditingStudio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicHeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Hardware & Quality Tier Detection
    const qualityConfig = PerformanceTier.getTier();
    const assetManager = new AssetManager();

    // 2. Scene & Camera Setup (Single Master Viewport)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.00045);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4500);
    const cameraCorridor = new CameraCorridor(camera, qualityConfig);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: qualityConfig.antialias,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(qualityConfig.maxDpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // 4. Ambient & Key Lighting (Calibrated for High-Gloss Specular Contrast)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const blueDirLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    blueDirLight.position.set(300, 400, 300);
    scene.add(blueDirLight);

    const purpleDirLight = new THREE.DirectionalLight(0xa855f7, 1.4);
    purpleDirLight.position.set(-200, -100, -100);
    scene.add(purpleDirLight);

    const rightRimLight = new THREE.DirectionalLight(0x00f0ff, 1.8);
    rightRimLight.position.set(150, 100, 100);
    scene.add(rightRimLight);

    // 5. Initialize All 8 Continuous Scene Groups in Sequential Order
    const s1 = new Scene01PodcastStudio(assetManager, qualityConfig);
    const s2 = new Scene02Portal(assetManager, qualityConfig);
    const s3 = new Scene03VideoProduction(assetManager, qualityConfig);
    const s4 = new Scene04ContentProduction(assetManager, qualityConfig);
    const s5 = new Scene05PostProduction(assetManager, qualityConfig);
    const s6 = new Scene06ContentUniverse(assetManager, qualityConfig);
    const s7 = new Scene07TheFoundry(assetManager, qualityConfig);
    const s8 = new Scene08EditingStudio(assetManager, qualityConfig);

    const scenes = [s1, s2, s3, s4, s5, s6, s7, s8];
    scenes.forEach(s => scene.add(s.group));

    // 6. Smooth Scroll-Driven 3D Journey across Homepage
    let scrollTriggerInstance = null;

    if (!qualityConfig.reducedMotion) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          cameraCorridor.setScroll(progress);
          scenes.forEach(s => s.setProgress(progress));
        }
      });
    }

    // 7. Global Window-Level Event Listeners (Canvas is pointer-events: none)
    let animationFrameId;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (scrollTriggerInstance) scrollTriggerInstance.refresh();
    };

    const handlePointerMove = (e) => {
      if (qualityConfig.tier === 'LOW' || qualityConfig.reducedMotion) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      cameraCorridor.setMouse(nx, ny);
    };

    const handlePointerLeave = () => {
      cameraCorridor.setMouse(0, 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', handlePointerLeave);

    // Initial Progress Set
    scenes.forEach(s => s.setProgress(0));

    // 8. Single RAF WebGL Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const currentScroll = cameraCorridor.currentScroll;
      const mouseParallax = cameraCorridor.getMouseParallax();

      cameraCorridor.update();
      scenes.forEach(s => s.update(elapsedTime, currentScroll, mouseParallax));

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 9. Comprehensive Disposal & Teardown
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      scenes.forEach(s => s.dispose());
      assetManager.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
}
