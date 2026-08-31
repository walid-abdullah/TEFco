import * as THREE from 'three';

/**
 * SCENE 03 — THE EDITING ROOM (Reference 3)
 * 75% - 100% Scroll Progress:
 * 75-80%: Camera emerges from the Foundry conduits into the studio.
 * 80-95%: Framing NLE Timeline, color wheels, waveforms & Master 4K Preview Screen.
 * 95-100%: Master Preview Screen becomes focal point, smoothly aligning camera for normal HTML flow.
 */
export class Scene03EditingStudio {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene03_EditingStudio';
    this.group.position.set(0, 0, -1800);
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.leftPanel = null;
    this.rightPanel = null;
    this.timelineMesh = null;
    this.previewMesh = null;
    this.borderMesh = null;

    this.build();
  }

  build() {
    // 1. Central Master 4K Preview Screen
    const previewGeo = this.assetManager.getPlaneGeometry(380, 214);
    const previewMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    this.previewMesh = new THREE.Mesh(previewGeo, previewMat);
    this.previewMesh.position.set(0, 70, -60);
    this.group.add(this.previewMesh);

    // Glowing Neon Border (Final Master Story focal glow)
    const borderGeo = this.assetManager.getPlaneGeometry(390, 224);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    this.borderMesh = new THREE.Mesh(borderGeo, borderMat);
    this.borderMesh.position.set(0, 70, -62);
    this.group.add(this.borderMesh);

    // 2. Multi-Track NLE Timeline Hologram
    const timelineGeo = this.assetManager.getPlaneGeometry(540, 140);
    const timelineTex = this.assetManager.getTimelineTexture();
    const timelineMat = new THREE.MeshBasicMaterial({
      map: timelineTex,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    this.timelineMesh = new THREE.Mesh(timelineGeo, timelineMat);
    this.timelineMesh.position.set(0, -85, 40);
    this.timelineMesh.rotation.x = -0.32;
    this.group.add(this.timelineMesh);

    // 3. Side Panels (Angled Curved Inward)
    const sideGeo = this.assetManager.getPlaneGeometry(200, 130);

    // Left Color Wheel Panel
    const wheelTex = this.assetManager.getColorWheelTexture();
    const wheelMat = new THREE.MeshBasicMaterial({
      map: wheelTex,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    this.leftPanel = new THREE.Mesh(sideGeo, wheelMat);
    this.leftPanel.position.set(-270, 60, 0);
    this.leftPanel.rotation.y = 0.32;
    this.group.add(this.leftPanel);

    // Right Scopes Panel
    const rightMat = new THREE.MeshBasicMaterial({
      color: 0x1e1b4b,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    this.rightPanel = new THREE.Mesh(sideGeo, rightMat);
    this.rightPanel.position.set(270, 60, 0);
    this.rightPanel.rotation.y = -0.32;
    this.group.add(this.rightPanel);

    // 4. Studio Background Ambient Laser Rails
    const railGeo = this.assetManager.getPlaneGeometry(1600, 6);
    const railMat = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    [-110, 150].forEach((ry) => {
      const rail = new THREE.Mesh(railGeo, railMat);
      rail.position.set(0, ry, -110);
      this.group.add(rail);
    });
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    // 95% - 100%: Master Preview Screen focus pull & finishing glow
    const finalFocus = THREE.MathUtils.clamp((scrollProgress - 0.9) / 0.1, 0, 1);

    if (!this.qualityConfig.reducedMotion) {
      this.group.position.y = Math.sin(time * 0.45) * 5;

      if (this.leftPanel) {
        this.leftPanel.rotation.y = 0.32 + mx * 0.05;
        this.leftPanel.position.x = -270 + mx * 10 - finalFocus * 30; // subtly parts outward
      }
      if (this.rightPanel) {
        this.rightPanel.rotation.y = -0.32 + mx * 0.05;
        this.rightPanel.position.x = 270 + mx * 10 + finalFocus * 30;
      }
      if (this.timelineMesh) {
        this.timelineMesh.position.x = mx * 14;
        this.timelineMesh.position.y = -85 - my * 10 - finalFocus * 20;
      }
      if (this.borderMesh) {
        this.borderMesh.scale.setScalar(1 + finalFocus * 0.08 + Math.sin(time * 2) * 0.02);
      }
    }
  }

  setProgress(progress) {
    this.group.visible = progress >= 0.65;
  }

  dispose() {
    this.group.traverse((obj) => {
      if (obj.isMesh) {
        obj.material?.dispose();
      }
    });
  }
}
