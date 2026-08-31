import * as THREE from 'three';

/**
 * SCENE 02 — THE FOUNDRY (Reference 2)
 * 40% - 75% Scroll Progress:
 * 40-60%: Physical entrance into the Foundry floor; Core becomes visual focus.
 * 60-75%: Transformation Engine activates (Core glow, data stream energy pulse, raw content refined).
 */
export class Scene02TheFoundry {
  constructor(assetManager, qualityConfig) {
    this.group = new THREE.Group();
    this.group.name = 'Scene02_TheFoundry';
    this.group.position.set(0, -40, -850);
    this.assetManager = assetManager;
    this.qualityConfig = qualityConfig;

    this.streamCurves = [];
    this.coreMesh = null;
    this.innerMesh = null;
    this.pillars = [];
    this.floorMesh = null;

    this.build();
  }

  build() {
    // 1. Modular Reflective Floor Grid
    const floorGeo = this.assetManager.getPlaneGeometry(1600, 1600);
    const floorTex = this.assetManager.getFoundryGridTexture();
    const floorMat = new THREE.MeshBasicMaterial({
      map: floorTex,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });
    this.floorMesh = new THREE.Mesh(floorGeo, floorMat);
    this.floorMesh.rotation.x = -Math.PI / 2;
    this.floorMesh.position.y = -170;
    this.group.add(this.floorMesh);

    // 2. Central Refinement / Processing Core
    const coreGeo = new THREE.OctahedronGeometry(60, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.coreMesh.position.set(0, 35, 0);
    this.group.add(this.coreMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(30, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    this.innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.innerMesh.position.set(0, 35, 0);
    this.group.add(this.innerMesh);

    // 3. Curved Light Pathways (Data Streams flowing into Core)
    const curvePoints = [
      [new THREE.Vector3(-320, 90, 180), new THREE.Vector3(-140, 55, 70), new THREE.Vector3(0, 35, 0)],
      [new THREE.Vector3(320, 110, 220), new THREE.Vector3(150, 65, 90), new THREE.Vector3(0, 35, 0)],
      [new THREE.Vector3(-220, -30, 260), new THREE.Vector3(-90, 5, 130), new THREE.Vector3(0, 35, 0)],
      [new THREE.Vector3(250, -25, 200), new THREE.Vector3(110, 15, 80), new THREE.Vector3(0, 35, 0)]
    ];

    curvePoints.forEach((pts, i) => {
      const curve = new THREE.CatmullRomCurve3(pts);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 2.2, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0xa855f7,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      this.streamCurves.push(tubeMesh);
      this.group.add(tubeMesh);
    });

    // 4. Background Studio Pillars
    const beamGeo = this.assetManager.getPlaneGeometry(12, 450);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    [-380, -190, 190, 380].forEach((bx) => {
      const b = new THREE.Mesh(beamGeo, beamMat);
      b.position.set(bx, 50, -180);
      b.userData = { baseX: bx };
      this.pillars.push(b);
      this.group.add(b);
    });
  }

  update(time, scrollProgress = 0, mouseParallax = { x: 0, y: 0 }) {
    if (!this.group.visible) return;

    const mx = mouseParallax.x;
    const my = mouseParallax.y;

    // 60% - 75% Transformation Core Activation: Pulse energy, faster spin, stream surge
    const transformActive = THREE.MathUtils.clamp((scrollProgress - 0.55) / 0.2, 0, 1);

    if (!this.qualityConfig.reducedMotion) {
      if (this.coreMesh) {
        const spinSpeed = 0.35 + transformActive * 0.8;
        this.coreMesh.rotation.y = time * spinSpeed + mx * 0.15;
        this.coreMesh.rotation.x = time * 0.18 - my * 0.12;
        this.coreMesh.scale.setScalar(1 + transformActive * 0.25 + Math.sin(time * 3) * 0.05);

        this.coreMesh.position.x = mx * 10;
        this.coreMesh.position.y = 35 - my * 8;
      }
      if (this.innerMesh) {
        this.innerMesh.position.x = mx * 8;
        this.innerMesh.position.y = 35 - my * 6;
        this.innerMesh.scale.setScalar(1 + transformActive * 0.4);
      }

      this.streamCurves.forEach((stream, idx) => {
        const energySurge = transformActive * 0.4;
        stream.material.opacity = 0.4 + energySurge + Math.sin(time * (3 + transformActive * 3) + idx) * 0.3;
      });

      this.pillars.forEach((p) => {
        p.position.x = p.userData.baseX + mx * 4;
      });
    }
  }

  setProgress(progress) {
    // Visible during approach, inside the core, and entering studio
    this.group.visible = progress >= 0.2 && progress <= 0.82;
  }

  dispose() {
    this.group.traverse((obj) => {
      if (obj.isMesh) {
        obj.material?.dispose();
      }
    });
  }
}
