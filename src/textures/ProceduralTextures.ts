/**
 * Procedural Texture System for 3D Anatomy Viewer
 *
 * Generates high-quality procedural textures for organic surfaces without external files:
 * - Skin texture (pores, subtle variation)
 * - Bone texture (cortical patterns)
 * - Muscle texture (fiber striations)
 * - Organ textures (smooth, moist surfaces)
 *
 * Features:
 * - Canvas-based procedural generation
 * - Normal maps for surface detail
 * - Roughness maps for realistic light interaction
 * - Ambient occlusion for depth
 * - Texture atlasing for memory efficiency
 * - Quality levels (256, 512, 1024)
 * - Lazy loading support
 */

import * as THREE from 'three';

// ============================================
// Types and Configuration
// ============================================

export type TextureQuality = 'low' | 'medium' | 'high';
export type TextureType = 'skin' | 'bone' | 'muscle' | 'organ' | 'vessel' | 'nerve' | 'cartilage' | 'fat';
export type MapType = 'diffuse' | 'normal' | 'roughness' | 'ao';

export interface TextureConfig {
  quality: TextureQuality;
  generateNormalMap: boolean;
  generateRoughnessMap: boolean;
  generateAOMap: boolean;
}

export interface TextureSet {
  diffuse: THREE.Texture;
  normal?: THREE.Texture;
  roughness?: THREE.Texture;
  ao?: THREE.Texture;
}

export interface ProceduralTextureOptions {
  baseColor: string;
  variation?: number;
  scale?: number;
  seed?: number;
}

// Quality level to resolution mapping
const QUALITY_RESOLUTION: Record<TextureQuality, number> = {
  low: 256,
  medium: 512,
  high: 1024,
};

// Default configuration
const DEFAULT_CONFIG: TextureConfig = {
  quality: 'medium',
  generateNormalMap: true,
  generateRoughnessMap: true,
  generateAOMap: false, // AO is expensive, disabled by default
};

// ============================================
// Noise Generation Utilities
// ============================================

/**
 * Simple seeded random number generator
 */
class SeededRandom {
  private seed: number;

  constructor(seed: number = 12345) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 1103515245 + 12345) & 0x7fffffff;
    return this.seed / 0x7fffffff;
  }

  nextInRange(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

/**
 * Improved Perlin-like noise using gradient vectors
 */
function createNoiseGenerator(seed: number = 12345) {
  const rng = new SeededRandom(seed);
  const permutation = new Array(512);
  const gradients = new Array(256);

  // Initialize permutation table
  for (let i = 0; i < 256; i++) {
    permutation[i] = i;
  }

  // Shuffle permutation
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }

  // Duplicate for wrapping
  for (let i = 0; i < 256; i++) {
    permutation[256 + i] = permutation[i];
  }

  // Generate gradient vectors
  for (let i = 0; i < 256; i++) {
    const angle = rng.next() * Math.PI * 2;
    gradients[i] = [Math.cos(angle), Math.sin(angle)];
  }

  function fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
  }

  function dotGradient(ix: number, iy: number, x: number, y: number): number {
    const idx = permutation[permutation[ix & 255] + (iy & 255)] & 255;
    const grad = gradients[idx];
    const dx = x - ix;
    const dy = y - iy;
    return dx * grad[0] + dy * grad[1];
  }

  return function noise(x: number, y: number): number {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = x0 + 1;
    const y1 = y0 + 1;

    const sx = fade(x - x0);
    const sy = fade(y - y0);

    const n00 = dotGradient(x0, y0, x, y);
    const n10 = dotGradient(x1, y0, x, y);
    const n01 = dotGradient(x0, y1, x, y);
    const n11 = dotGradient(x1, y1, x, y);

    const nx0 = lerp(n00, n10, sx);
    const nx1 = lerp(n01, n11, sx);

    return lerp(nx0, nx1, sy);
  };
}

/**
 * Fractal Brownian Motion (fBm) for layered noise
 */
function fbm(
  noise: (x: number, y: number) => number,
  x: number,
  y: number,
  octaves: number = 4,
  lacunarity: number = 2.0,
  gain: number = 0.5
): number {
  let value = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    value += amplitude * noise(x * frequency, y * frequency);
    maxValue += amplitude;
    amplitude *= gain;
    frequency *= lacunarity;
  }

  return value / maxValue;
}

/**
 * Voronoi/cellular noise for organic patterns
 */
function voronoiNoise(
  x: number,
  y: number,
  seed: number = 12345,
  jitter: number = 1.0
): { distance: number; secondDistance: number } {
  const rng = new SeededRandom(seed);
  const cellX = Math.floor(x);
  const cellY = Math.floor(y);

  let minDist = Infinity;
  let secondMinDist = Infinity;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const nx = cellX + dx;
      const ny = cellY + dy;

      // Use cell coordinates as seed for consistent points
      const pointSeed = (nx * 1619 + ny * 31337 + seed) & 0x7fffffff;
      const pointRng = new SeededRandom(pointSeed);

      const px = nx + pointRng.next() * jitter;
      const py = ny + pointRng.next() * jitter;

      const dist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);

      if (dist < minDist) {
        secondMinDist = minDist;
        minDist = dist;
      } else if (dist < secondMinDist) {
        secondMinDist = dist;
      }
    }
  }

  return { distance: minDist, secondDistance: secondMinDist };
}

// ============================================
// Canvas Utilities
// ============================================

function createCanvas(size: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  return { canvas, ctx };
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 200, g: 180, b: 160 };
}

function clamp(value: number, min: number = 0, max: number = 255): number {
  return Math.max(min, Math.min(max, value));
}

// ============================================
// Texture Generators
// ============================================

/**
 * Generate skin texture with pores and subtle color variation
 */
function generateSkinTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.08;
  const scale = options.scale ?? 8;
  const seed = options.seed ?? 12345;

  const noise = createNoiseGenerator(seed);
  const poreNoise = createNoiseGenerator(seed + 1000);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      // Base color variation using fBm
      const nx = x / size * scale;
      const ny = y / size * scale;
      const colorVar = fbm(noise, nx, ny, 4, 2.0, 0.5) * variation;

      // Pore pattern using high-frequency noise
      const poreScale = scale * 4;
      const poreValue = fbm(poreNoise, x / size * poreScale, y / size * poreScale, 2, 2.0, 0.6);

      // Create subtle pore depressions
      const poreIntensity = poreValue > 0.3 ? (poreValue - 0.3) * 0.15 : 0;

      // Fine detail layer
      const detailScale = scale * 8;
      const detail = noise(x / size * detailScale, y / size * detailScale) * 0.03;

      // Combine variations
      const totalVar = colorVar - poreIntensity + detail;

      // Apply to base color with slight red/yellow variation for skin
      data[i] = clamp(baseColor.r * (1 + totalVar * 1.1));     // Red channel
      data[i + 1] = clamp(baseColor.g * (1 + totalVar * 0.9)); // Green channel
      data[i + 2] = clamp(baseColor.b * (1 + totalVar * 0.85)); // Blue channel
      data[i + 3] = 255; // Alpha
    }
  }

  return imageData;
}

/**
 * Generate bone texture with cortical patterns and osteon structures
 */
function generateBoneTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.12;
  const scale = options.scale ?? 6;
  const seed = options.seed ?? 54321;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Osteon pattern using Voronoi
      const voronoi = voronoiNoise(nx * 3, ny * 3, seed, 0.8);
      const osteonRing = Math.abs(Math.sin(voronoi.distance * 8)) * 0.15;

      // Lamellae pattern (concentric rings within osteons)
      const lamellae = Math.sin(voronoi.distance * 25) * 0.05;

      // Base variation
      const baseVar = fbm(noise, nx, ny, 3, 2.0, 0.5) * variation;

      // Canaliculi (tiny channels) - high frequency detail
      const canaliculi = noise(x / size * scale * 12, y / size * scale * 12) * 0.04;

      // Combine all effects
      const totalVar = baseVar + osteonRing + lamellae + canaliculi;

      // Bone color is warm ivory/beige
      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar * 0.95));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar * 0.85));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate muscle texture with fiber striations
 */
function generateMuscleTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.15;
  const scale = options.scale ?? 4;
  const seed = options.seed ?? 98765;

  const noise = createNoiseGenerator(seed);
  const fiberNoise = createNoiseGenerator(seed + 500);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Primary fiber direction (mostly vertical with some waviness)
      const fiberWave = noise(nx * 0.5, ny * 0.5) * 0.3;
      const fiberAngle = ny + fiberWave;

      // Main fiber striations
      const fiberFreq = 30;
      const fibers = Math.sin(fiberAngle * fiberFreq) * 0.12;

      // Secondary cross-hatching (fascia)
      const fasciaFreq = 8;
      const fascia = Math.sin((nx + ny) * fasciaFreq) * 0.04;

      // Myofibril detail (very fine lines)
      const myofibril = fiberNoise(x / size * scale * 20, y / size * scale * 2) * 0.06;

      // Blood vessel simulation (darker spots)
      const vesselPattern = fbm(noise, nx * 2, ny * 2, 2, 2.0, 0.5);
      const vessels = vesselPattern > 0.5 ? (vesselPattern - 0.5) * -0.1 : 0;

      // Base color variation
      const baseVar = fbm(noise, nx, ny, 3, 2.0, 0.5) * variation * 0.5;

      // Combine
      const totalVar = baseVar + fibers + fascia + myofibril + vessels;

      // Muscle is reddish-pink
      data[i] = clamp(baseColor.r * (1 + totalVar * 1.1));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar * 0.85));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar * 0.8));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate organ texture with smooth, moist appearance
 */
function generateOrganTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.1;
  const scale = options.scale ?? 5;
  const seed = options.seed ?? 11111;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Smooth organic variation
      const organic = fbm(noise, nx, ny, 4, 2.0, 0.45) * variation;

      // Cellular pattern (subtle hexagonal-ish structure)
      const voronoi = voronoiNoise(nx * 2, ny * 2, seed, 1.0);
      const cellular = (voronoi.secondDistance - voronoi.distance) * 0.08;

      // Vascular network
      const vascular = fbm(noise, nx * 3, ny * 3, 2, 2.0, 0.6);
      const vessels = vascular > 0.55 ? (vascular - 0.55) * -0.15 : 0;

      // Moisture highlights (specular look simulation)
      const moisture = noise(x / size * scale * 6, y / size * scale * 6);
      const highlight = moisture > 0.7 ? (moisture - 0.7) * 0.1 : 0;

      // Combine
      const totalVar = organic + cellular + vessels + highlight;

      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate vessel (artery/vein) texture
 */
function generateVesselTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.12;
  const scale = options.scale ?? 4;
  const seed = options.seed ?? 22222;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Longitudinal stretch lines
      const stretch = Math.sin(ny * 15 + noise(nx, ny) * 2) * 0.08;

      // Endothelium texture (smooth lining)
      const endothelium = fbm(noise, nx * 2, ny * 0.5, 3, 2.0, 0.5) * variation;

      // Elastic layer ripples
      const elastic = Math.sin(nx * 8) * Math.cos(ny * 3) * 0.04;

      // Combine
      const totalVar = stretch + endothelium + elastic;

      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate nerve texture
 */
function generateNerveTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.1;
  const scale = options.scale ?? 5;
  const seed = options.seed ?? 33333;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Axon bundles (parallel lines)
      const axons = Math.sin(ny * 20 + noise(nx * 0.5, ny * 0.5) * 1.5) * 0.1;

      // Myelin sheath banding
      const myelin = Math.sin(ny * 40) * 0.03;

      // Base variation
      const baseVar = fbm(noise, nx, ny, 3, 2.0, 0.5) * variation * 0.5;

      // Combine
      const totalVar = baseVar + axons + myelin;

      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate cartilage texture
 */
function generateCartilageTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.08;
  const scale = options.scale ?? 6;
  const seed = options.seed ?? 44444;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Chondrocyte lacunae (cell spaces)
      const voronoi = voronoiNoise(nx * 4, ny * 4, seed, 0.9);
      const lacunae = voronoi.distance < 0.15 ? -0.1 : 0;

      // Matrix variation
      const matrix = fbm(noise, nx, ny, 4, 2.0, 0.5) * variation;

      // Perichondrium pattern
      const surface = noise(x / size * scale * 3, y / size * scale * 3) * 0.04;

      // Combine
      const totalVar = matrix + lacunae + surface;

      // Cartilage has a bluish-white translucent look
      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar * 1.05));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar * 1.1));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

/**
 * Generate fat/adipose tissue texture
 */
function generateFatTexture(
  size: number,
  options: ProceduralTextureOptions
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const baseColor = hexToRgb(options.baseColor);
  const variation = options.variation ?? 0.1;
  const scale = options.scale ?? 5;
  const seed = options.seed ?? 55555;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size * scale;
      const ny = y / size * scale;

      // Adipocyte cells (rounded cell pattern)
      const voronoi = voronoiNoise(nx * 3, ny * 3, seed, 0.8);
      const cells = (1 - Math.min(voronoi.distance * 2, 1)) * 0.12;

      // Cell membrane edges
      const edges = voronoi.distance < 0.12 && voronoi.distance > 0.08 ? 0.06 : 0;

      // Base variation
      const baseVar = fbm(noise, nx, ny, 3, 2.0, 0.5) * variation * 0.5;

      // Combine
      const totalVar = baseVar + cells - edges;

      // Fat is yellowish
      data[i] = clamp(baseColor.r * (1 + totalVar));
      data[i + 1] = clamp(baseColor.g * (1 + totalVar * 0.95));
      data[i + 2] = clamp(baseColor.b * (1 + totalVar * 0.8));
      data[i + 3] = 255;
    }
  }

  return imageData;
}

// ============================================
// Normal Map Generation
// ============================================

/**
 * Generate normal map from a diffuse texture using Sobel operator
 */
function generateNormalMapFromDiffuse(
  diffuseData: ImageData,
  strength: number = 1.0
): ImageData {
  const size = diffuseData.width;
  const { canvas, ctx } = createCanvas(size);
  const normalData = ctx.createImageData(size, size);
  const srcData = diffuseData.data;
  const dstData = normalData.data;

  // Convert to grayscale heights
  const heights = new Float32Array(size * size);
  for (let i = 0; i < size * size; i++) {
    const idx = i * 4;
    heights[i] = (srcData[idx] + srcData[idx + 1] + srcData[idx + 2]) / (3 * 255);
  }

  // Sobel operator for gradient
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      // Sample neighboring pixels with wrapping
      const getHeight = (px: number, py: number) => {
        px = (px + size) % size;
        py = (py + size) % size;
        return heights[py * size + px];
      };

      // Sobel X
      const dX =
        getHeight(x - 1, y - 1) * -1 +
        getHeight(x - 1, y) * -2 +
        getHeight(x - 1, y + 1) * -1 +
        getHeight(x + 1, y - 1) * 1 +
        getHeight(x + 1, y) * 2 +
        getHeight(x + 1, y + 1) * 1;

      // Sobel Y
      const dY =
        getHeight(x - 1, y - 1) * -1 +
        getHeight(x, y - 1) * -2 +
        getHeight(x + 1, y - 1) * -1 +
        getHeight(x - 1, y + 1) * 1 +
        getHeight(x, y + 1) * 2 +
        getHeight(x + 1, y + 1) * 1;

      // Normal vector
      const nx = -dX * strength;
      const ny = -dY * strength;
      const nz = 1;

      // Normalize
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);

      // Convert to 0-255 range (normal maps use 128 as zero)
      dstData[i] = clamp((nx / len * 0.5 + 0.5) * 255);
      dstData[i + 1] = clamp((ny / len * 0.5 + 0.5) * 255);
      dstData[i + 2] = clamp((nz / len * 0.5 + 0.5) * 255);
      dstData[i + 3] = 255;
    }
  }

  return normalData;
}

/**
 * Generate standalone normal map with procedural detail
 */
function generateProceduralNormalMap(
  size: number,
  textureType: TextureType,
  seed: number = 12345
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const noise = createNoiseGenerator(seed);

  // Different normal patterns based on texture type
  const getPatternStrength = () => {
    switch (textureType) {
      case 'skin': return { large: 0.15, medium: 0.3, fine: 0.5 };
      case 'bone': return { large: 0.2, medium: 0.4, fine: 0.3 };
      case 'muscle': return { large: 0.1, medium: 0.6, fine: 0.2 };
      case 'organ': return { large: 0.2, medium: 0.3, fine: 0.2 };
      case 'vessel': return { large: 0.1, medium: 0.4, fine: 0.3 };
      default: return { large: 0.2, medium: 0.3, fine: 0.3 };
    }
  };

  const strength = getPatternStrength();

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size;
      const ny = y / size;

      // Multi-scale normal perturbation
      const largeScale = fbm(noise, nx * 4, ny * 4, 2, 2.0, 0.5);
      const mediumScale = fbm(noise, nx * 16, ny * 16, 2, 2.0, 0.5);
      const fineScale = noise(nx * 64, ny * 64);

      // Combine scales
      const perturbX = largeScale * strength.large + mediumScale * strength.medium + fineScale * strength.fine;
      const perturbY = fbm(noise, nx * 4 + 100, ny * 4 + 100, 2, 2.0, 0.5) * strength.large +
                       fbm(noise, nx * 16 + 100, ny * 16 + 100, 2, 2.0, 0.5) * strength.medium +
                       noise(nx * 64 + 100, ny * 64 + 100) * strength.fine;

      // Create normal vector
      const normalX = perturbX * 0.5;
      const normalY = perturbY * 0.5;
      const normalZ = 1;

      // Normalize
      const len = Math.sqrt(normalX * normalX + normalY * normalY + normalZ * normalZ);

      // Pack into RGB
      data[i] = clamp((normalX / len * 0.5 + 0.5) * 255);
      data[i + 1] = clamp((normalY / len * 0.5 + 0.5) * 255);
      data[i + 2] = clamp((normalZ / len * 0.5 + 0.5) * 255);
      data[i + 3] = 255;
    }
  }

  return imageData;
}

// ============================================
// Roughness Map Generation
// ============================================

/**
 * Generate roughness map for PBR materials
 */
function generateRoughnessMap(
  size: number,
  textureType: TextureType,
  seed: number = 12345
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const noise = createNoiseGenerator(seed);

  // Base roughness values per texture type
  const getRoughnessParams = () => {
    switch (textureType) {
      case 'skin': return { base: 0.65, variation: 0.2 }; // Slightly rough
      case 'bone': return { base: 0.4, variation: 0.15 }; // Smoother
      case 'muscle': return { base: 0.7, variation: 0.2 }; // Rougher wet surface
      case 'organ': return { base: 0.5, variation: 0.25 }; // Variable, moist
      case 'vessel': return { base: 0.45, variation: 0.15 }; // Smooth interior
      case 'nerve': return { base: 0.55, variation: 0.15 };
      case 'cartilage': return { base: 0.35, variation: 0.1 }; // Very smooth
      case 'fat': return { base: 0.6, variation: 0.2 };
      default: return { base: 0.5, variation: 0.2 };
    }
  };

  const params = getRoughnessParams();

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size;
      const ny = y / size;

      // Multi-scale variation
      const variation = fbm(noise, nx * 8, ny * 8, 3, 2.0, 0.5) * params.variation;

      // Moisture spots (lower roughness)
      const moisture = noise(nx * 20, ny * 20);
      const moistureFactor = moisture > 0.7 ? -0.1 : 0;

      // Calculate final roughness
      const roughness = clamp((params.base + variation + moistureFactor) * 255);

      // Roughness maps are grayscale
      data[i] = roughness;
      data[i + 1] = roughness;
      data[i + 2] = roughness;
      data[i + 3] = 255;
    }
  }

  return imageData;
}

// ============================================
// Ambient Occlusion Map Generation
// ============================================

/**
 * Generate ambient occlusion map for depth perception
 */
function generateAOMap(
  size: number,
  textureType: TextureType,
  seed: number = 12345
): ImageData {
  const { canvas, ctx } = createCanvas(size);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  const noise = createNoiseGenerator(seed);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      const nx = x / size;
      const ny = y / size;

      // Base occlusion from noise
      const occlusion = fbm(noise, nx * 6, ny * 6, 3, 2.0, 0.5);

      // Crevice darkening based on texture type
      let crevices = 0;
      if (textureType === 'skin') {
        // Pore occlusion
        const pore = noise(nx * 30, ny * 30);
        crevices = pore > 0.6 ? (pore - 0.6) * 0.3 : 0;
      } else if (textureType === 'muscle') {
        // Fiber gaps
        crevices = Math.abs(Math.sin(ny * size * 0.3)) * 0.1;
      } else if (textureType === 'bone') {
        // Osteon rings
        const voronoi = voronoiNoise(nx * 4, ny * 4, seed, 0.8);
        crevices = (1 - Math.min(voronoi.distance * 3, 1)) * 0.15;
      }

      // AO value (1 = no occlusion, 0 = full occlusion)
      const ao = clamp((0.85 + occlusion * 0.15 - crevices) * 255);

      data[i] = ao;
      data[i + 1] = ao;
      data[i + 2] = ao;
      data[i + 3] = 255;
    }
  }

  return imageData;
}

// ============================================
// Texture Cache and Management
// ============================================

class TextureCache {
  private cache: Map<string, TextureSet> = new Map();
  private loadingPromises: Map<string, Promise<TextureSet>> = new Map();

  private generateKey(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions): string {
    return `${type}-${quality}-${options.baseColor}-${options.seed ?? 0}`;
  }

  get(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions): TextureSet | undefined {
    const key = this.generateKey(type, quality, options);
    return this.cache.get(key);
  }

  set(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions, textures: TextureSet): void {
    const key = this.generateKey(type, quality, options);
    this.cache.set(key, textures);
  }

  getLoadingPromise(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions): Promise<TextureSet> | undefined {
    const key = this.generateKey(type, quality, options);
    return this.loadingPromises.get(key);
  }

  setLoadingPromise(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions, promise: Promise<TextureSet>): void {
    const key = this.generateKey(type, quality, options);
    this.loadingPromises.set(key, promise);
  }

  removeLoadingPromise(type: TextureType, quality: TextureQuality, options: ProceduralTextureOptions): void {
    const key = this.generateKey(type, quality, options);
    this.loadingPromises.delete(key);
  }

  clear(): void {
    this.cache.forEach((textureSet) => {
      textureSet.diffuse.dispose();
      textureSet.normal?.dispose();
      textureSet.roughness?.dispose();
      textureSet.ao?.dispose();
    });
    this.cache.clear();
    this.loadingPromises.clear();
  }

  get size(): number {
    return this.cache.size;
  }
}

const textureCache = new TextureCache();

// ============================================
// Texture Atlas System
// ============================================

export interface AtlasEntry {
  x: number;
  y: number;
  width: number;
  height: number;
  uvOffset: [number, number];
  uvScale: [number, number];
}

export interface TextureAtlas {
  texture: THREE.Texture;
  normalMap?: THREE.Texture;
  roughnessMap?: THREE.Texture;
  entries: Map<string, AtlasEntry>;
}

/**
 * Create a texture atlas from multiple textures
 */
export function createTextureAtlas(
  textures: Map<string, ImageData>,
  atlasSize: number = 2048
): TextureAtlas {
  const { canvas, ctx } = createCanvas(atlasSize);

  const entries = new Map<string, AtlasEntry>();
  const textureList = Array.from(textures.entries());

  // Simple packing - assumes all textures are same size
  if (textureList.length === 0) {
    throw new Error('No textures provided for atlas');
  }

  const firstTexture = textureList[0][1];
  const textureSize = firstTexture.width;
  const tilesPerRow = Math.floor(atlasSize / textureSize);

  textureList.forEach(([key, imageData], index) => {
    const row = Math.floor(index / tilesPerRow);
    const col = index % tilesPerRow;

    const x = col * textureSize;
    const y = row * textureSize;

    // Draw texture to atlas
    ctx.putImageData(imageData, x, y);

    // Store entry info
    entries.set(key, {
      x,
      y,
      width: textureSize,
      height: textureSize,
      uvOffset: [x / atlasSize, y / atlasSize],
      uvScale: [textureSize / atlasSize, textureSize / atlasSize],
    });
  });

  // Create Three.js texture from canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  return {
    texture,
    entries,
  };
}

// ============================================
// Main Texture Generation API
// ============================================

/**
 * Generate a complete texture set for a given tissue type
 */
export async function generateTextureSet(
  type: TextureType,
  options: ProceduralTextureOptions,
  config: Partial<TextureConfig> = {}
): Promise<TextureSet> {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const size = QUALITY_RESOLUTION[fullConfig.quality];

  // Check cache first
  const cached = textureCache.get(type, fullConfig.quality, options);
  if (cached) {
    return cached;
  }

  // Check if already loading
  const loading = textureCache.getLoadingPromise(type, fullConfig.quality, options);
  if (loading) {
    return loading;
  }

  // Generate textures (use setTimeout to avoid blocking UI)
  const generatePromise = new Promise<TextureSet>((resolve) => {
    setTimeout(() => {
      // Generate diffuse map based on type
      let diffuseData: ImageData;
      switch (type) {
        case 'skin':
          diffuseData = generateSkinTexture(size, options);
          break;
        case 'bone':
          diffuseData = generateBoneTexture(size, options);
          break;
        case 'muscle':
          diffuseData = generateMuscleTexture(size, options);
          break;
        case 'organ':
          diffuseData = generateOrganTexture(size, options);
          break;
        case 'vessel':
          diffuseData = generateVesselTexture(size, options);
          break;
        case 'nerve':
          diffuseData = generateNerveTexture(size, options);
          break;
        case 'cartilage':
          diffuseData = generateCartilageTexture(size, options);
          break;
        case 'fat':
          diffuseData = generateFatTexture(size, options);
          break;
        default:
          diffuseData = generateOrganTexture(size, options);
      }

      // Create diffuse texture
      const { canvas: diffuseCanvas, ctx: diffuseCtx } = createCanvas(size);
      diffuseCtx.putImageData(diffuseData, 0, 0);
      const diffuseTexture = new THREE.CanvasTexture(diffuseCanvas);
      diffuseTexture.wrapS = THREE.RepeatWrapping;
      diffuseTexture.wrapT = THREE.RepeatWrapping;
      diffuseTexture.generateMipmaps = true;

      const textureSet: TextureSet = { diffuse: diffuseTexture };

      // Generate normal map
      if (fullConfig.generateNormalMap) {
        const normalData = generateNormalMapFromDiffuse(diffuseData, 2.0);
        const { canvas: normalCanvas, ctx: normalCtx } = createCanvas(size);
        normalCtx.putImageData(normalData, 0, 0);
        const normalTexture = new THREE.CanvasTexture(normalCanvas);
        normalTexture.wrapS = THREE.RepeatWrapping;
        normalTexture.wrapT = THREE.RepeatWrapping;
        normalTexture.generateMipmaps = true;
        textureSet.normal = normalTexture;
      }

      // Generate roughness map
      if (fullConfig.generateRoughnessMap) {
        const roughnessData = generateRoughnessMap(size, type, options.seed);
        const { canvas: roughnessCanvas, ctx: roughnessCtx } = createCanvas(size);
        roughnessCtx.putImageData(roughnessData, 0, 0);
        const roughnessTexture = new THREE.CanvasTexture(roughnessCanvas);
        roughnessTexture.wrapS = THREE.RepeatWrapping;
        roughnessTexture.wrapT = THREE.RepeatWrapping;
        roughnessTexture.generateMipmaps = true;
        textureSet.roughness = roughnessTexture;
      }

      // Generate AO map
      if (fullConfig.generateAOMap) {
        const aoData = generateAOMap(size, type, options.seed);
        const { canvas: aoCanvas, ctx: aoCtx } = createCanvas(size);
        aoCtx.putImageData(aoData, 0, 0);
        const aoTexture = new THREE.CanvasTexture(aoCanvas);
        aoTexture.wrapS = THREE.RepeatWrapping;
        aoTexture.wrapT = THREE.RepeatWrapping;
        aoTexture.generateMipmaps = true;
        textureSet.ao = aoTexture;
      }

      // Cache and return
      textureCache.set(type, fullConfig.quality, options, textureSet);
      textureCache.removeLoadingPromise(type, fullConfig.quality, options);
      resolve(textureSet);
    }, 0);
  });

  textureCache.setLoadingPromise(type, fullConfig.quality, options, generatePromise);
  return generatePromise;
}

// ============================================
// Lazy Loading Manager
// ============================================

export class LazyTextureLoader {
  private visibilityObserver: IntersectionObserver | null = null;
  private pendingLoads: Map<string, () => Promise<TextureSet>> = new Map();
  private loadedTextures: Map<string, TextureSet> = new Map();
  private quality: TextureQuality;

  constructor(quality: TextureQuality = 'medium') {
    this.quality = quality;

    // Set up intersection observer for visibility-based loading
    if (typeof IntersectionObserver !== 'undefined') {
      this.visibilityObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('data-texture-id');
              if (id && this.pendingLoads.has(id)) {
                const loadFn = this.pendingLoads.get(id)!;
                loadFn().then((textureSet) => {
                  this.loadedTextures.set(id, textureSet);
                  this.pendingLoads.delete(id);
                });
              }
            }
          });
        },
        { threshold: 0.1 }
      );
    }
  }

  /**
   * Register a structure for lazy texture loading
   */
  register(
    structureId: string,
    textureType: TextureType,
    options: ProceduralTextureOptions,
    element?: HTMLElement
  ): void {
    const loadFn = () => generateTextureSet(textureType, options, { quality: this.quality });
    this.pendingLoads.set(structureId, loadFn);

    if (element && this.visibilityObserver) {
      element.setAttribute('data-texture-id', structureId);
      this.visibilityObserver.observe(element);
    }
  }

  /**
   * Force load a texture immediately
   */
  async loadNow(
    structureId: string,
    textureType: TextureType,
    options: ProceduralTextureOptions
  ): Promise<TextureSet> {
    // Check if already loaded
    if (this.loadedTextures.has(structureId)) {
      return this.loadedTextures.get(structureId)!;
    }

    // Load and cache
    const textureSet = await generateTextureSet(textureType, options, { quality: this.quality });
    this.loadedTextures.set(structureId, textureSet);
    this.pendingLoads.delete(structureId);

    return textureSet;
  }

  /**
   * Get loaded texture if available
   */
  getIfLoaded(structureId: string): TextureSet | undefined {
    return this.loadedTextures.get(structureId);
  }

  /**
   * Preload textures for visible structures
   */
  async preloadVisible(structureIds: string[], textureConfigs: Map<string, { type: TextureType; options: ProceduralTextureOptions }>): Promise<void> {
    const promises = structureIds.map((id) => {
      const config = textureConfigs.get(id);
      if (config) {
        return this.loadNow(id, config.type, config.options);
      }
      return Promise.resolve(undefined);
    });

    await Promise.all(promises);
  }

  /**
   * Set texture quality level
   */
  setQuality(quality: TextureQuality): void {
    this.quality = quality;
    // Clear loaded textures when quality changes (they will be regenerated on next load)
    this.loadedTextures.forEach((textureSet) => {
      textureSet.diffuse.dispose();
      textureSet.normal?.dispose();
      textureSet.roughness?.dispose();
      textureSet.ao?.dispose();
    });
    this.loadedTextures.clear();
  }

  /**
   * Cleanup
   */
  dispose(): void {
    this.visibilityObserver?.disconnect();
    this.loadedTextures.forEach((textureSet) => {
      textureSet.diffuse.dispose();
      textureSet.normal?.dispose();
      textureSet.roughness?.dispose();
      textureSet.ao?.dispose();
    });
    this.loadedTextures.clear();
    this.pendingLoads.clear();
  }
}

// ============================================
// Texture Type Mappings for Anatomical Systems
// ============================================

export const ANATOMICAL_TEXTURE_MAP: Record<string, { type: TextureType; baseColor: string }> = {
  // Integumentary
  'body-skin': { type: 'skin', baseColor: '#e8d4c4' },
  skin: { type: 'skin', baseColor: '#e8d4c4' },

  // Skeletal
  skull: { type: 'bone', baseColor: '#f5f5dc' },
  spine: { type: 'bone', baseColor: '#f5f5dc' },
  ribcage: { type: 'bone', baseColor: '#f5f5dc' },
  pelvis: { type: 'bone', baseColor: '#f5f5dc' },

  // Cardiovascular
  heart: { type: 'muscle', baseColor: '#cc3333' },
  aorta: { type: 'vessel', baseColor: '#cc0000' },
  superiorVenaCava: { type: 'vessel', baseColor: '#3366cc' },
  inferiorVenaCava: { type: 'vessel', baseColor: '#3366cc' },
  pulmonaryArtery: { type: 'vessel', baseColor: '#3366cc' },

  // Respiratory
  leftLung: { type: 'organ', baseColor: '#ffaaaa' },
  rightLung: { type: 'organ', baseColor: '#ffaaaa' },
  trachea: { type: 'cartilage', baseColor: '#ffcccc' },
  leftBronchus: { type: 'cartilage', baseColor: '#ffcccc' },
  rightBronchus: { type: 'cartilage', baseColor: '#ffcccc' },
  diaphragm: { type: 'muscle', baseColor: '#cc6666' },

  // Digestive
  liver: { type: 'organ', baseColor: '#8b4513' },
  stomach: { type: 'organ', baseColor: '#ffb6c1' },
  smallIntestine: { type: 'organ', baseColor: '#deb887' },
  largeIntestine: { type: 'organ', baseColor: '#cd853f' },
  esophagus: { type: 'muscle', baseColor: '#e8a0a0' },
  gallbladder: { type: 'organ', baseColor: '#228b22' },
  appendix: { type: 'organ', baseColor: '#deb887' },

  // Nervous
  brain: { type: 'organ', baseColor: '#f5c0c0' },
  cerebellum: { type: 'organ', baseColor: '#e8c0c0' },
  brainstem: { type: 'nerve', baseColor: '#e8c0c0' },
  spinalCord: { type: 'nerve', baseColor: '#ffe4c4' },
  leftEye: { type: 'organ', baseColor: '#ffffff' },
  rightEye: { type: 'organ', baseColor: '#ffffff' },

  // Urinary
  leftKidney: { type: 'organ', baseColor: '#8b0000' },
  rightKidney: { type: 'organ', baseColor: '#8b0000' },
  bladder: { type: 'organ', baseColor: '#dda0dd' },
  leftUreter: { type: 'organ', baseColor: '#dda0dd' },
  rightUreter: { type: 'organ', baseColor: '#dda0dd' },

  // Lymphatic
  spleen: { type: 'organ', baseColor: '#800080' },

  // Endocrine
  pancreas: { type: 'organ', baseColor: '#ffd700' },
  thyroidGland: { type: 'organ', baseColor: '#ff6347' },
  pituitaryGland: { type: 'organ', baseColor: '#ff69b4' },
  leftAdrenalGland: { type: 'organ', baseColor: '#ffd700' },
  rightAdrenalGland: { type: 'organ', baseColor: '#ffd700' },

  // Muscular
  pectoralisMajor: { type: 'muscle', baseColor: '#cc6666' },
  pectoralisMajorRight: { type: 'muscle', baseColor: '#cc6666' },
  rectusAbdominis: { type: 'muscle', baseColor: '#cc6666' },
  neck: { type: 'muscle', baseColor: '#e8d4c4' },
  leftArm: { type: 'muscle', baseColor: '#e8d4c4' },
  rightArm: { type: 'muscle', baseColor: '#e8d4c4' },
  leftLeg: { type: 'muscle', baseColor: '#e8d4c4' },
  rightLeg: { type: 'muscle', baseColor: '#e8d4c4' },
};

/**
 * Get texture configuration for an anatomical structure
 */
export function getTextureConfigForStructure(structureId: string): { type: TextureType; options: ProceduralTextureOptions } | null {
  const config = ANATOMICAL_TEXTURE_MAP[structureId];
  if (!config) {
    return null;
  }

  return {
    type: config.type,
    options: {
      baseColor: config.baseColor,
      seed: hashString(structureId), // Consistent seed per structure
    },
  };
}

/**
 * Simple string hash for consistent seeding
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// ============================================
// Material Factory with Textures
// ============================================

/**
 * Create a PBR material with procedural textures
 */
export async function createTexturedMaterial(
  structureId: string,
  config: Partial<TextureConfig> = {}
): Promise<THREE.MeshStandardMaterial | null> {
  const textureConfig = getTextureConfigForStructure(structureId);
  if (!textureConfig) {
    return null;
  }

  const textureSet = await generateTextureSet(textureConfig.type, textureConfig.options, config);

  const material = new THREE.MeshStandardMaterial({
    map: textureSet.diffuse,
    normalMap: textureSet.normal,
    roughnessMap: textureSet.roughness,
    aoMap: textureSet.ao,
    roughness: 0.5,
    metalness: 0.1,
  });

  return material;
}

/**
 * Create a basic material with diffuse texture only (for performance)
 */
export async function createBasicTexturedMaterial(
  structureId: string,
  config: Partial<TextureConfig> = {}
): Promise<THREE.MeshLambertMaterial | null> {
  const textureConfig = getTextureConfigForStructure(structureId);
  if (!textureConfig) {
    return null;
  }

  const textureSet = await generateTextureSet(textureConfig.type, textureConfig.options, {
    ...config,
    generateNormalMap: false,
    generateRoughnessMap: false,
    generateAOMap: false,
  });

  const material = new THREE.MeshLambertMaterial({
    map: textureSet.diffuse,
  });

  return material;
}

// ============================================
// Cleanup
// ============================================

/**
 * Clear all cached textures
 */
export function clearTextureCache(): void {
  textureCache.clear();
}

/**
 * Get cache statistics
 */
export function getTextureCacheStats(): { size: number } {
  return { size: textureCache.size };
}

// Export default configuration
export { DEFAULT_CONFIG, QUALITY_RESOLUTION };
