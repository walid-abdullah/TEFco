import * as THREE from 'three';

/**
 * 8-SCENE MASTER CAMERA CORRIDOR CONTROLLER
 * Single continuous Catmull-Rom spline linking all 8 narrative environments:
 * 01 Podcast Recording (Z: 150 -> -200)
 * 02 Transformation Portal (Z: -200 -> -650)
 * 03 Video Production (Z: -650 -> -1100)
 * 04 Content Production (Z: -1100 -> -1550)
 * 05 Post-Production (Z: -1550 -> -2000)
 * 06 Existing Content Universe (Z: -2000 -> -2550)
 * 07 Existing Foundry (Z: -2550 -> -3150)
 * 08 Existing Editing Studio & Final Story (Z: -3150 -> -3700)
 */
export class CameraCorridor {
  constructor(camera, qualityConfig) {
    this.camera = camera;
    this.qualityConfig = qualityConfig;

    // Spline Waypoints across the 8 continuous spatial environments
    this.path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 150),       // 00% - Scene 01: Podcast Recording Setup
      new THREE.Vector3(0, 5, -280),      // 10% - Entering Scene 02: Blue Portal
      new THREE.Vector3(0, -10, -700),    // 22% - Emerging into Scene 03: Video Production Set
      new THREE.Vector3(0, 10, -1150),    // 35% - Travelling into Scene 04: Content Ecosystem
      new THREE.Vector3(0, 0, -1600),     // 48% - Arriving in Scene 05: Dark Post-Production
      new THREE.Vector3(0, 15, -2050),    // 60% - Entering Scene 06: Content Universe Orbit
      new THREE.Vector3(0, -25, -2650),   // 75% - Descending to Scene 07: The Foundry Floor
      new THREE.Vector3(0, 10, -3250),    // 88% - Approaching Scene 08: Editing Studio NLE
      new THREE.Vector3(0, 30, -3700)     // 100%- Final Master Story focal point & release
    ]);

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.currentScroll = 0;
    this.targetScroll = 0;
  }

  setMouse(normalizedX, normalizedY) {
    if (this.qualityConfig.reducedMotion) return;
    this.mouse.targetX = normalizedX;
    this.mouse.targetY = normalizedY;
  }

  setScroll(progress) {
    this.targetScroll = THREE.MathUtils.clamp(progress, 0, 1);
  }

  getMouseParallax() {
    return { x: this.mouse.x, y: this.mouse.y };
  }

  update() {
    if (this.qualityConfig.reducedMotion) {
      this.currentScroll = this.targetScroll;
      const pt = this.path.getPointAt(this.currentScroll);
      this.camera.position.copy(pt);
      const lookTarget = this.path.getPointAt(Math.min(1, this.currentScroll + 0.03));
      this.camera.lookAt(lookTarget);
      return;
    }

    // 1. Smooth Scroll Interpolation (Restrained cinematic damping)
    this.currentScroll += (this.targetScroll - this.currentScroll) * 0.06;

    // 2. Smooth Mouse Interpolation (Subtle secondary parallax)
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.04;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.04;

    // 3. Compute Base Camera Position on Master Spline
    const splinePoint = this.path.getPointAt(this.currentScroll);

    // Subtle bounded camera parallax offset (Max +/- 16 units)
    const parallaxScale = this.qualityConfig.tier === 'LOW' ? 0.2 : (this.qualityConfig.tier === 'MEDIUM' ? 0.5 : 1.0);
    const mouseOffsetX = this.mouse.x * 16 * parallaxScale;
    const mouseOffsetY = -this.mouse.y * 10 * parallaxScale;

    this.camera.position.set(
      splinePoint.x + mouseOffsetX,
      splinePoint.y + mouseOffsetY,
      splinePoint.z
    );

    // 4. Smooth LookAhead along Corridor Path
    const lookAheadT = Math.min(1, this.currentScroll + 0.04);
    const lookTarget = this.path.getPointAt(lookAheadT);
    this.camera.lookAt(lookTarget.x + mouseOffsetX * 0.12, lookTarget.y + mouseOffsetY * 0.1, lookTarget.z);
  }
}
