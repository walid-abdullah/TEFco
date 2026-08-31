import * as THREE from 'three';

/**
 * SCENE 08 (Existing Scene 03) — THE EDITING ROOM
 * Abstract futuristic post-production suite & final story focal point.
 */
export class Scene08EditingStudio {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene08_EditingStudio';
    this.group.position.set(0, 0, -3450); // Positioned at corridor finish
    this.group.visible = false;
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

    const sideGeo = this.assetManager.getPlaneGeometry(200, 130);

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

    const finalFocus = THREE.MathUtils.clamp((scrollProgress - 0.92) / 0.08, 0, 1);

    if (!this.qualityConfig.reducedMotion) {
      this.group.position.y = Math.sin(time * 0.45) * 5;

      if (this.leftPanel) {
        this.leftPanel.rotation.y = 0.32 + mx * 0.05;
        this.leftPanel.position.x = -270 + mx * 10 - finalFocus * 30;
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
    // Strictly visible only during Chapter 08 (1.0 progress)
    this.group.visible = progress >= 0.90;
  }

  dispose() {
    this.group.traverse((obj) => {
      if (obj.isMesh) {
        obj.material?.dispose();
      }
    });
  }
}
