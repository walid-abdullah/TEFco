import * as THREE from 'three';

/**
 * SCENE 01 — CONTENT UNIVERSE (Reference 1)
 * 0% - 40% Scroll Progress:
 * 0-20%: Overview framing HTML headline & CTA
 * 20-40%: Camera enters content ecosystem; foreground frames sweep past camera and separate subtly.
 */
export class Scene01ContentUniverse {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene01_ContentUniverse';
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mediaPlanes = [];
    this.particles = null;
    this.flareMesh = null;

    this.build();
  }

  build() {
    const frameCount = this.qualityConfig.tier === 'LOW' ? 10 : 16;
    const radius = 640;
    const frameGeo = this.assetManager.getPlaneGeometry(160, 100);

    const colors = [
      ['#38BDF8', '#818CF8'],
      ['#A855F7', '#EC4899'],
      ['#10B981', '#38BDF8'],
      ['#F59E0B', '#EF4444']
    ];

    // 1. Orbital Media Grid
    for (let i = 0; i < frameCount; i++) {
      const angle = ((i / frameCount) * Math.PI * 1.8) - Math.PI * 0.9;
      if (Math.abs(angle) < 0.38) continue;

      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius - 220;
      const y = ((i % 3) - 1) * 85 + Math.sin(i * 1.4) * 20;

      const [c1, c2] = colors[i % colors.length];
      const tex = this.assetManager.getMediaFrameTexture(i, `RAW_${i}`, c1, c2);

      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.88,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(frameGeo, mat);
      mesh.position.set(x, y, z);
      mesh.lookAt(0, y * 0.2, -100);

      mesh.userData = {
        baseX: x,
        baseY: y,
        baseZ: z,
        baseRotX: mesh.rotation.x,
        baseRotY: mesh.rotation.y,
        baseRotZ: mesh.rotation.z,
        depthFactor: 0.6 + (Math.abs(z) / 400) * 0.4,
        speed: 0.35 + (i % 4) * 0.12,
        offset: i * 0.75,
        angle: angle
      };

      this.mediaPlanes.push(mesh);
      this.group.add(mesh);
    }

    // 2. Horizon Anamorphic Light Ribbon
    const flareGeo = this.assetManager.getPlaneGeometry(1900, 14);
    const flareMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending
    });
    this.flareMesh = new THREE.Mesh(flareGeo, flareMat);
    this.flareMesh.position.set(0, 0, -480);
    this.group.add(this.flareMesh);

    // 3. Ambient Dust Particles
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
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    this.particles = new THREE.Points(particleGeo, particleMat);
    this.group.add(this.particles);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    // Scroll-driven orbital expansion (20% - 40%): Frames part outward subtly as camera enters
    const expandProgress = THREE.MathUtils.clamp((scrollProgress - 0.15) / 0.25, 0, 1);
    const expansionFactor = 1 + expandProgress * 0.45;

    if (!this.qualityConfig.reducedMotion) {
      this.mediaPlanes.forEach((mesh) => {
        const u = mesh.userData;
        const floatY = Math.sin(time * u.speed + u.offset) * 8;

        const curX = u.baseX * expansionFactor + mx * 18 * u.depthFactor;
        const curY = u.baseY + floatY - my * 12 * u.depthFactor;
        const curZ = u.baseZ - expandProgress * 80;

        mesh.position.x += (curX - mesh.position.x) * 0.08;
        mesh.position.y += (curY - mesh.position.y) * 0.08;
        mesh.position.z += (curZ - mesh.position.z) * 0.08;

        // Dynamic tilt as camera flies through
        mesh.rotation.y = u.baseRotY + mx * 0.04 * u.depthFactor + (expandProgress * Math.sign(u.angle) * 0.15);
        mesh.rotation.x = u.baseRotX - my * 0.03 * u.depthFactor;
        mesh.rotation.z = u.baseRotZ + Math.sin(time * 0.25 + u.offset) * 0.015;
      });

      if (this.flareMesh) {
        this.flareMesh.position.x = mx * 4;
        this.flareMesh.position.y = -my * 3;
      }

      if (this.particles) {
        this.particles.position.x = mx * 28;
        this.particles.position.y = -my * 20;
        this.particles.rotation.y = time * 0.015;
      }
    }
  }

  setProgress(progress) {
    // Scene 01 passes behind camera around 40%
    this.group.visible = progress < 0.45;
  }

  dispose() {
    this.mediaPlanes.forEach(m => {
      m.material.dispose();
    });
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}
