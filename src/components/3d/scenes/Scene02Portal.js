import * as THREE from 'three';

/**
 * SCENE 02 — TRANSFORM (Rebuilt purely with 3D Geometry & Glossy Materials)
 * Minimalist, Deep Electric Blue Architectural 3D Portal Chamber:
 * - Large Glossy Beveled Chamfered Portal Gate with physical depth
 * - Recessed Glass Core with glowing volumetric laser slits
 * - Polished Mirror Ground Base Reflection Slab
 * - Zero photographs.
 */
export class Scene02Portal {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene02_Transform';
    this.group.position.set(130, 0, -450); // Positioned to right/center-right
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mainSculpture = new THREE.Group();
    this.outerArch = null;
    this.glassCore = null;
    this.portalSlits = [];
    this.mirrorSlab = null;

    this.build();
  }

  build() {
    // 2nd Element (3D Glass Prism Sculpture) removed as requested by user
    this.mainSculpture.position.set(0, 0, -180);
    this.group.add(this.mainSculpture);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    // Spatial Scroll Entrance/Exit Progression (10% -> 26%)
    const enterT = THREE.MathUtils.clamp((scrollProgress - 0.08) / 0.08, 0, 1);
    const exitT = THREE.MathUtils.clamp((scrollProgress - 0.20) / 0.08, 0, 1);

    const scaleFactor = (0.5 + enterT * 0.5) * (1 - exitT * 0.4);
    const zOffset = (1 - enterT) * 200 - exitT * 250;
    const yOffset = exitT * 100;

    this.mainSculpture.scale.setScalar(scaleFactor);

    if (!this.qualityConfig.reducedMotion) {
      this.mainSculpture.position.x = mx * 16;
      this.mainSculpture.position.y = 10 + yOffset - my * 10;
      this.mainSculpture.position.z = -180 + zOffset;

      this.mainSculpture.rotation.y = -0.15 + mx * 0.12 - exitT * 0.4 + Math.sin(time * 0.5) * 0.04;
      this.mainSculpture.rotation.x = -my * 0.08 + Math.cos(time * 0.4) * 0.03;
    }
  }

  setProgress(progress) {
    this.group.visible = progress >= 0.07 && progress <= 0.30;
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
