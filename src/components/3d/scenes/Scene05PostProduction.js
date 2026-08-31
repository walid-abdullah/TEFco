import * as THREE from 'three';

/**
 * SCENE 05 — REFINE (Rebuilt purely with 3D Geometry & Glossy Materials)
 * Minimalist, Glossy 3D Post-Production Suite Sculpture:
 * - Floating High-Gloss Beveled Master 16:9 Cinema Monitor with Cyan Rim Glow
 * - Solid Multi-Track Timeline Slab with Glowing Audio Track Insets
 * - Concentric Lumetri Color Grading Ring Float
 * - Zero photographs.
 */
export class Scene05PostProduction {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene05_Refine';
    this.group.position.set(130, 0, -1800); // Positioned to right/center-right
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mainSculpture = new THREE.Group();
    this.masterMonitor = null;
    this.screenRim = null;
    this.timelineSlab = null;
    this.lumetriWheel = null;

    this.build();
  }

  build() {
    // 1. Floating Master 16:9 Beveled Display (Glossy Obsidian Glass)
    const monitorGeo = new THREE.BoxGeometry(260, 150, 14);
    const monitorMat = new THREE.MeshPhysicalMaterial({
      color: 0x050b14,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0
    });
    this.masterMonitor = new THREE.Mesh(monitorGeo, monitorMat);
    this.masterMonitor.position.set(0, 45, 0);
    this.mainSculpture.add(this.masterMonitor);

    // Glowing Cyan Frame Rim
    const rimGeo = new THREE.BoxGeometry(266, 156, 4);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    this.screenRim = new THREE.Mesh(rimGeo, rimMat);
    this.screenRim.position.set(0, 45, -6);
    this.mainSculpture.add(this.screenRim);

    // 2. Solid Multi-Track Timeline Desk Slab (Carbon Desk Surface)
    const slabGeo = new THREE.BoxGeometry(340, 12, 100);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.2
    });
    this.timelineSlab = new THREE.Mesh(slabGeo, slabMat);
    this.timelineSlab.position.set(0, -60, 30);
    this.timelineSlab.rotation.x = 0.22;
    this.mainSculpture.add(this.timelineSlab);

    // 3. Floating Concentric Lumetri Color Grading Ring (Violet / Cyan)
    const wheelGeo = new THREE.TorusGeometry(36, 3.5, 16, 48);
    const wheelMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.6,
      roughness: 0.08,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85
    });
    this.lumetriWheel = new THREE.Mesh(wheelGeo, wheelMat);
    this.lumetriWheel.position.set(-160, 40, 20);
    this.lumetriWheel.rotation.y = 0.35;
    this.mainSculpture.add(this.lumetriWheel);

    this.mainSculpture.position.set(0, 10, -170);
    this.group.add(this.mainSculpture);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    const enterT = THREE.MathUtils.clamp((scrollProgress - 0.42) / 0.08, 0, 1);
    const exitT = THREE.MathUtils.clamp((scrollProgress - 0.54) / 0.08, 0, 1);

    const scaleFactor = (0.5 + enterT * 0.5) * (1 - exitT * 0.4);
    const zOffset = (1 - enterT) * 200 - exitT * 250;
    const yOffset = exitT * 110;

    this.mainSculpture.scale.setScalar(scaleFactor);

    if (!this.qualityConfig.reducedMotion) {
      const floatY = Math.sin(time * 0.9) * 6;

      this.mainSculpture.position.x = mx * 16;
      this.mainSculpture.position.y = 10 + floatY + yOffset - my * 10;
      this.mainSculpture.position.z = -170 + zOffset;

      this.lumetriWheel.rotation.z = time * 0.4;
      this.lumetriWheel.rotation.y = 0.35 + mx * 0.15;

      this.screenRim.material.opacity = (0.75 + Math.sin(time * 2.5) * 0.2) * (1 - exitT);
    }
  }

  setProgress(progress) {
    this.group.visible = progress >= 0.40 && progress <= 0.62;
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
