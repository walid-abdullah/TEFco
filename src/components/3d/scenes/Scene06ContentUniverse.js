import * as THREE from 'three';

/**
 * SCENE 06 (Existing Scene 01) — CONTENT UNIVERSE
 * Orbital media ecosystem representing raw footage streams in deep space.
 */
export class Scene06ContentUniverse {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene06_ContentUniverse';
    this.group.position.set(0, 0, -2250); // Positioned in 8-scene corridor
    this.group.visible = false;
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mediaPlanes = [];
    this.particles = null;
    this.flareMesh = null;

    this.build();
  }

  build() {
    // Media plates completely removed as requested
    const pCount = this.qualityConfig.particlesCount;
    const particleGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount * 3; i += 3) {
      posArr[i] = (Math.random() - 0.5) * 1400;
      posArr[i + 1] = (Math.random() - 0.5) * 800;
      posArr[i + 2] = (Math.random() - 0.5) * 900 - 100;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 3,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    this.particles = new THREE.Points(particleGeo, particleMat);
    this.group.add(this.particles);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;
    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    if (!this.qualityConfig.reducedMotion && this.particles) {
      this.particles.position.x = mx * 28;
      this.particles.position.y = -my * 20;
      this.particles.rotation.y = time * 0.015;
    }
  }

  setProgress(progress) {
    this.group.visible = false;
  }

  dispose() {
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}
