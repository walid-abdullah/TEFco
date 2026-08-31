import * as THREE from 'three';

/**
 * SCENE 03 — CAPTURE (Rebuilt purely with 3D Geometry & Glossy Materials)
 * Minimalist, Glossy 3D Cinema Camera & Studio Rig Sculpture:
 * - High-Gloss Carbon Cinema Body with Beveled Matte Chassis
 * - Cylindrical Anamorphic Cinema Lens with Glass Element & Cyan Emissive Core
 * - Minimalist Studio Ring Light Halo
 * - Zero photographs.
 */
export class Scene03VideoProduction {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene03_Capture';
    this.group.position.set(130, 0, -900); // Positioned to right/center-right
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mainSculpture = new THREE.Group();
    this.cameraBody = null;
    this.lensFront = null;
    this.matteBox = null;
    this.lightingHalo = null;

    this.build();
  }

  build() {
    // 1. Cinema Camera Chassis (Solid Carbon/Aluminum 3D Polyhedron)
    const bodyGeo = new THREE.BoxGeometry(90, 75, 110);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a101d,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0
    });
    this.cameraBody = new THREE.Mesh(bodyGeo, bodyMat);
    this.mainSculpture.add(this.cameraBody);

    // Camera Top Handle / Rig Cage
    const cageGeo = new THREE.BoxGeometry(16, 14, 85);
    const cageMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.3 });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    cage.position.set(0, 44, -10);
    this.mainSculpture.add(cage);

    // 2. Anamorphic Cinema Lens (Stacked Cylinders + Convex Glass)
    const barrelGeo = new THREE.CylinderGeometry(36, 32, 70, 32);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      metalness: 0.95,
      roughness: 0.1
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0, 70);
    this.mainSculpture.add(barrel);

    // Front Convex Optical Glass Element
    const glassGeo = new THREE.SphereGeometry(30, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.7,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.95,
      ior: 1.6,
      transparent: true,
      opacity: 0.9
    });
    this.lensFront = new THREE.Mesh(glassGeo, glassMat);
    this.lensFront.position.set(0, 0, 100);
    this.mainSculpture.add(this.lensFront);

    // 3. Floating Studio Ring Light Halo (Warm Tungsten + Cyan Rim Accent)
    const haloGeo = new THREE.TorusGeometry(160, 5, 16, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffedd5,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    this.lightingHalo = new THREE.Mesh(haloGeo, haloMat);
    this.lightingHalo.position.set(40, 30, -50);
    this.lightingHalo.rotation.y = -0.35;
    this.mainSculpture.add(this.lightingHalo);

    this.mainSculpture.position.set(0, 15, -170);
    this.mainSculpture.rotation.set(0.05, -0.28, 0);
    this.group.add(this.mainSculpture);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    const enterT = THREE.MathUtils.clamp((scrollProgress - 0.18) / 0.08, 0, 1);
    const exitT = THREE.MathUtils.clamp((scrollProgress - 0.32) / 0.08, 0, 1);

    const scaleFactor = (0.5 + enterT * 0.5) * (1 - exitT * 0.4);
    const zOffset = (1 - enterT) * 200 - exitT * 250;
    const yOffset = exitT * 110;

    this.mainSculpture.scale.setScalar(scaleFactor);

    if (!this.qualityConfig.reducedMotion) {
      const floatY = Math.sin(time * 0.85) * 6;

      this.mainSculpture.position.x = mx * 16;
      this.mainSculpture.position.y = 15 + floatY + yOffset - my * 10;
      this.mainSculpture.position.z = -170 + zOffset;

      this.mainSculpture.rotation.y = -0.28 + mx * 0.15 - exitT * 0.4;
      this.mainSculpture.rotation.x = 0.05 - my * 0.1;

      this.lensFront.material.emissiveIntensity = 0.5 + Math.sin(time * 2.5) * 0.25;
      this.lightingHalo.material.opacity = (0.5 + Math.sin(time * 2) * 0.15) * (1 - exitT);
    }
  }

  setProgress(progress) {
    this.group.visible = progress >= 0.17 && progress <= 0.42;
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
