import * as THREE from 'three';

/**
 * High-performance procedural Canvas texture generator.
 * Creates clean vector-like textures without heavy external downloads.
 */

// 1. Procedural Media Frame Texture (Thumbnails for Scene 01)
export function createMediaFrameTexture(index, title, colorPrimary = '#38BDF8', colorSecondary = '#818CF8') {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 512, 320);
  grad.addColorStop(0, '#0B132B');
  grad.addColorStop(0.5, '#1C2541');
  grad.addColorStop(1, '#070D18');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 320);

  // Stylized Media Preview Imagery (Abstract Cinematography / Wave / Geometry)
  ctx.strokeStyle = colorPrimary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 30; x < 482; x += 15) {
    const y = 160 + Math.sin(x * 0.02 + index) * 50 + Math.cos(x * 0.05) * 20;
    if (x === 30) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Glass specular highlight
  const specGrad = ctx.createLinearGradient(0, 0, 512, 160);
  specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
  specGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
  ctx.fillStyle = specGrad;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(512, 0);
  ctx.lineTo(512, 120);
  ctx.lineTo(0, 40);
  ctx.closePath();
  ctx.fill();

  // Media Meta Overlay Pill
  ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
  ctx.roundRect(30, 240, 180, 44, 10);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText(`RAW_0${index + 1}.4K`, 45, 268);

  // Glowing Outer Border
  ctx.strokeStyle = colorSecondary;
  ctx.lineWidth = 6;
  ctx.strokeRect(0, 0, 512, 320);

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// 2. Procedural NLE Timeline Texture (Scene 03)
export function createTimelineTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Dark NLE Track Panel Background
  ctx.fillStyle = 'rgba(7, 13, 24, 0.85)';
  ctx.fillRect(0, 0, 1024, 256);

  // Time Ruler on Top
  ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
  ctx.fillRect(0, 0, 1024, 36);
  ctx.strokeStyle = '#64748B';
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 20) {
    const h = x % 100 === 0 ? 20 : (x % 40 === 0 ? 12 : 6);
    ctx.beginPath();
    ctx.moveTo(x, 36 - h);
    ctx.lineTo(x, 36);
    ctx.stroke();
  }

  // 4 Video / Audio Multi-Tracks
  const tracks = [
    { y: 46, h: 42, color: '#38BDF8', label: 'V2 MOTION GRAPHICS' },
    { y: 96, h: 42, color: '#818CF8', label: 'V1 A-ROLL 4K MASTER' },
    { y: 146, h: 42, color: '#10B981', label: 'A1 DIALOGUE STEREO' },
    { y: 196, h: 42, color: '#F59E0B', label: 'A2 SOUND DESIGN FX' }
  ];

  tracks.forEach(track => {
    // Track row
    ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
    ctx.fillRect(10, track.y, 1004, track.h);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeRect(10, track.y, 1004, track.h);

    // Track Clips Blocks
    const clipWidths = [180, 240, 140, 280];
    let curX = 20;
    clipWidths.forEach(cw => {
      ctx.fillStyle = track.color;
      ctx.globalAlpha = 0.7;
      ctx.roundRect(curX, track.y + 4, cw - 10, track.h - 8, 4);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      curX += cw;
    });
  });

  // Glowing Red/Cyan Playhead Line
  ctx.strokeStyle = '#EF4444';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(380, 0);
  ctx.lineTo(380, 256);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 3. Procedural Lumetri Color Wheel Texture (Scene 03)
export function createColorWheelTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');

  const cx = 150;
  const cy = 150;
  const radius = 130;

  // Draw 360 degree color wheel
  for (let angle = 0; angle < 360; angle += 1) {
    const startAngle = (angle - 1) * Math.PI / 180;
    const endAngle = (angle + 1) * Math.PI / 180;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
    ctx.fill();
  }

  // Inner dark hole (Ring shape)
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.65, 0, Math.PI * 2);
  ctx.fillStyle = '#070D18';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Crosshair center
  ctx.strokeStyle = '#38BDF8';
  ctx.beginPath();
  ctx.moveTo(cx - 15, cy); ctx.lineTo(cx + 15, cy);
  ctx.moveTo(cx, cy - 15); ctx.lineTo(cx, cy + 15);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 4. Procedural Neural / Ingestion Grid Texture (Scene 02)
export function createFoundryGridTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(3, 7, 18, 0.9)';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
  ctx.lineWidth = 1.5;

  const step = 64;
  for (let x = 0; x <= 512; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let y = 0; y <= 512; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y); ctx.lineTo(512, y);
    ctx.stroke();
  }

  // Glowing Intersections
  ctx.fillStyle = '#38BDF8';
  for (let x = 0; x <= 512; x += step) {
    for (let y = 0; y <= 512; y += step) {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  return texture;
}
