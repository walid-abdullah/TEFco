import * as THREE from 'three';

/**
 * SCENE 04 — CREATE (Rebuilt purely with 3D Geometry & Glossy Materials)
 * Minimalist, Glossy 3D Content Ecosystem:
 * ONE SOURCE → MULTIPLE CONTENT OUTPUTS:
 * - Central Glossy Polyhedral Content Core
 * - 3 Floating High-Gloss Beveled Glass Media Tiles (Procedural Gradients)
 * - Concentric Warm Amber Orbit Halo
 * - Zero photographs.
 */
export class Scene04ContentProduction {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene04_Create';
    this.group.position.set(130, 0, -1350); // Positioned to right/center-right
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mainSculpture = new THREE.Group();
    this.centralCore = null;
    this.innerCoreGlow = null;
    this.floatingTiles = [];
    this.orbitHalo = null;

    this.build();
  }

  build() {
    // 1. Central Metallic Content Core (Polished Obsidian Polyhedron)
    const coreGeo = new THREE.DodecahedronGeometry(45, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0
    });
    this.centralCore = new THREE.Mesh(coreGeo, coreMat);
    this.mainSculpture.add(this.centralCore);

    // Glowing Inner Energy Sphere
    const innerGeo = new THREE.SphereGeometry(22, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.innerCoreGlow = new THREE.Mesh(innerGeo, innerMat);
    this.mainSculpture.add(this.innerCoreGlow);

    // 2. 3 Sleek Floating High-Gloss Glass Media Tiles (Output Multi-formats)
    const tileGeo = new THREE.BoxGeometry(70, 110, 8);
    const tileColors = [0x38bdf8, 0xa855f7, 0x10b981];

    [-110, 0, 110].forEach((tx, i) => {
      const tileMat = new THREE.MeshPhysicalMaterial({
        color: 0x040810,
        emissive: tileColors[i],
        emissiveIntensity: 0.45,
        roughness: 0.08,
        metalness: 0.2,
        transmission: 0.85,
        transparent: true,
        opacity: 0.9
      });
      const tile = new THREE.Mesh(tileGeo, tileMat);
      const tz = i === 1 ? 40 : -30;
      const ty = i === 1 ? -25 : 30;
      tile.position.set(tx, ty, tz);
      tile.rotation.y = (tx / 110) * -0.28;
      tile.userData = { initialY: ty, speed: 0.7 + i * 0.2, offset: i };

      this.floatingTiles.push(tile);
      this.mainSculpture.add(tile);
    });

    // 3. Concentric Warm Amber Orbit Halo (Ref 4 Lighting Identity)
    const ringGeo = new THREE.TorusGeometry(175, 4, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    this.orbitHalo = new THREE.Mesh(ringGeo, ringMat);
    this.orbitHalo.rotation.x = Math.PI / 3;
    this.mainSculpture.add(this.orbitHalo);

    this.mainSculpture.position.set(0, 15, -170);
    this.group.add(this.mainSculpture);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    const enterT = THREE.MathUtils.clamp((scrollProgress - 0.30) / 0.08, 0, 1);
    const exitT = THREE.MathUtils.clamp((scrollProgress - 0.44) / 0.08, 0, 1);

    const scaleFactor = (0.5 + enterT * 0.5) * (1 - exitT * 0.4);
    const zOffset = (1 - enterT) * 200 - exitT * 250;
    const yOffset = exitT * 110;

    this.mainSculpture.scale.setScalar(scaleFactor);

    if (!this.qualityConfig.reducedMotion) {
      this.mainSculpture.position.x = mx * 16;
      this.mainSculpture.position.y = 15 + yOffset - my * 10;
      this.mainSculpture.position.z = -170 + zOffset;

      this.centralCore.rotation.y = time * 0.4 + mx * 0.2;
      this.centralCore.rotation.x = time * 0.2 - my * 0.15;

      this.floatingTiles.forEach((tile) => {
        const u = tile.userData;
        tile.position.y = u.initialY + Math.sin(time * u.speed + u.offset) * 8 - my * 8;
        tile.position.x += (mx * 14 - tile.position.x) * 0.05;
      });

      this.orbitHalo.rotation.z = time * 0.15;
      this.orbitHalo.material.opacity = (0.45 + Math.sin(time * 2) * 0.15) * (1 - exitT);
    }
  }

  setProgress(progress) {
    this.group.visible = progress >= 0.28 && progress <= 0.54;
  }

  dispose() {
    this.group.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry?.dispose();
        obj.material?.dispose();
      }
    });
  }
}
