import * as THREE from 'three';
import {
  createMediaFrameTexture,
  createTimelineTexture,
  createColorWheelTexture,
  createFoundryGridTexture
} from '../utils/textureGenerators';

/**
 * ASSET MANAGER & SHARED CACHE
 * Centralizes procedural and image texture creation, memoizes shared geometries,
 * and ensures safe disposal of GPU memory.
 */
export class AssetManager {
  constructor() {
    this.textures = new Map();
    this.geometries = new Map();
    this.materials = new Map();
    this.textureLoader = new THREE.TextureLoader();
  }

  // 1. Shared Geometries
  getPlaneGeometry(width, height, segW = 1, segH = 1) {
    const key = `plane_${width}_${height}_${segW}_${segH}`;
    if (!this.geometries.has(key)) {
      this.geometries.set(key, new THREE.PlaneGeometry(width, height, segW, segH));
    }
    return this.geometries.get(key);
  }

  // 2. Image Texture Loader (Async Cached)
  loadImageTexture(url) {
    if (!this.textures.has(url)) {
      const tex = this.textureLoader.load(url);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      this.textures.set(url, tex);
    }
    return this.textures.get(url);
  }

  // 3. Procedural Texture Generators
  getMediaFrameTexture(index, title, colorPrimary, colorSecondary) {
    const key = `media_frame_${index}`;
    if (!this.textures.has(key)) {
      const tex = createMediaFrameTexture(index, title, colorPrimary, colorSecondary);
      this.textures.set(key, tex);
    }
    return this.textures.get(key);
  }

  getTimelineTexture() {
    const key = 'timeline_texture';
    if (!this.textures.has(key)) {
      const tex = createTimelineTexture();
      this.textures.set(key, tex);
    }
    return this.textures.get(key);
  }

  getColorWheelTexture() {
    const key = 'color_wheel_texture';
    if (!this.textures.has(key)) {
      const tex = createColorWheelTexture();
      this.textures.set(key, tex);
    }
    return this.textures.get(key);
  }

  getFoundryGridTexture() {
    const key = 'foundry_grid_texture';
    if (!this.textures.has(key)) {
      const tex = createFoundryGridTexture();
      this.textures.set(key, tex);
    }
    return this.textures.get(key);
  }

  // 4. Central Disposal
  dispose() {
    this.textures.forEach((tex) => tex?.dispose());
    this.geometries.forEach((geo) => geo?.dispose());
    this.materials.forEach((mat) => mat?.dispose());

    this.textures.clear();
    this.geometries.clear();
    this.materials.clear();
  }
}
