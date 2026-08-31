import * as THREE from 'three';

/**
 * SCENE 01 — RECORD (Rebuilt purely with 3D Geometry & Glossy Materials)
 * Composition: Right/Center-Right dominant 3D Broadcast Sculpture.
 * - Central High-Gloss Titanium & Matte Carbon Studio Microphone
 * - Torus Mount / Shock-mount Cage with Glowing Cyan Capsule Trim
 * - Large Curved Translucent Frosted Glass Acoustic Ribbon Arc
 * - Zero photographs, zero image planes.
 */
export class Scene01PodcastStudio {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene01_Record';
    this.group.position.set(130, 0, 0); // Positioned to right/center-right (70/30 layout)
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.mainSculpture = new THREE.Group();
    this.micCapsule = null;
    this.glowRing = null;
    this.acousticGlassArc = null;
    this.soundWaveRibbon = null;

    this.build();
  }

  build() {
    // 1. Microphone Capsule & Metallic Mesh Grille
    const capsuleGeo = new THREE.CapsuleGeometry(24, 60, 16, 32);
    const capsuleMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    this.micCapsule = new THREE.Mesh(capsuleGeo, capsuleMat);
    this.micCapsule.rotation.z = -0.22;
    this.mainSculpture.add(this.micCapsule);

    // Cyan Emissive Acoustic Ring
    const ringGeo = new THREE.TorusGeometry(26, 2.2, 16, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    this.glowRing = new THREE.Mesh(ringGeo, ringMat);
    this.glowRing.rotation.x = Math.PI / 2;
    this.glowRing.rotation.y = -0.22;
    this.glowRing.position.set(2, 12, 0);
    this.mainSculpture.add(this.glowRing);

    // Microphone Shockmount & Yoke Arm (Solid Glossy Metal)
    const yokeGeo = new THREE.TorusGeometry(48, 4, 16, 48, Math.PI * 1.15);
    const yokeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.95,
      roughness: 0.15
    });
    const yoke = new THREE.Mesh(yokeGeo, yokeMat);
    yoke.rotation.z = Math.PI - 0.22;
    yoke.position.set(0, -6, 0);
    this.mainSculpture.add(yoke);

    // Stand Base Axis
    const axisGeo = new THREE.CylinderGeometry(5, 5, 80, 16);
    const axisMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
    const axis = new THREE.Mesh(axisGeo, axisMat);
    axis.position.set(12, -58, 0);
    axis.rotation.z = -0.22;
    this.mainSculpture.add(axis);

    // 2. Large Curved Translucent Acoustic Glass Halo
    const haloGeo = new THREE.TorusGeometry(220, 12, 16, 64, Math.PI * 1.35);
    const haloMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.15,
      transmission: 0.85,
      ior: 1.5,
      transparent: true,
      opacity: 0.75
    });
    this.acousticGlassArc = new THREE.Mesh(haloGeo, haloMat);
    this.acousticGlassArc.position.set(-20, 10, -60);
    this.acousticGlassArc.rotation.set(0.2, 0.4, -0.4);
    this.mainSculpture.add(this.acousticGlassArc);

    // 3. Audio Waveform Laser Ribbon
    const waveCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-220, -50, -40),
      new THREE.Vector3(-100, 30, -20),
      new THREE.Vector3(0, -10, 0),
      new THREE.Vector3(120, 45, -30),
      new THREE.Vector3(220, -20, -50)
    ]);
    const waveGeo = new THREE.TubeGeometry(waveCurve, 40, 2.5, 8, false);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    this.soundWaveRibbon = new THREE.Mesh(waveGeo, waveMat);
    this.mainSculpture.add(this.soundWaveRibbon);

    this.mainSculpture.position.set(0, 15, -180);
    this.group.add(this.mainSculpture);
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    // Spatial Scroll Exit: (0% -> 12%): Current object tilts, scales down, moves upward into depth
    const exitT = THREE.MathUtils.clamp(scrollProgress / 0.14, 0, 1);
    const scaleFactor = 1 - exitT * 0.4;
    const yOffset = exitT * 120;
    const zOffset = -exitT * 220;

    this.mainSculpture.scale.setScalar(scaleFactor);

    if (!this.qualityConfig.reducedMotion) {
      const floatY = Math.sin(time * 0.9) * 8;

      this.mainSculpture.position.x = mx * 18;
      this.mainSculpture.position.y = 15 + floatY + yOffset - my * 12;
      this.mainSculpture.position.z = -180 + zOffset;

      this.mainSculpture.rotation.y = mx * 0.25 - exitT * 0.5;
      this.mainSculpture.rotation.x = -my * 0.15 + exitT * 0.3;
      this.mainSculpture.rotation.z = Math.sin(time * 0.4) * 0.03;
    }
  }

  setProgress(progress) {
    this.group.visible = progress < 0.18;
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
