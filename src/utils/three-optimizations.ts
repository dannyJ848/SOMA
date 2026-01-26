/**
 * Three.js Performance Optimizations
 *
 * Utilities for optimizing 3D rendering performance including:
 * - Geometry instancing
 * - Material caching
 * - LOD management
 * - Texture optimization
 * - Object pooling
 */

import * as THREE from 'three';

// ============================================
// Material Cache
// ============================================

const materialCache = new Map<string, THREE.Material>();

/**
 * Get or create a cached material to reduce GPU memory
 */
export function getCachedMaterial(
  key: string,
  createMaterial: () => THREE.Material
): THREE.Material {
  if (!materialCache.has(key)) {
    materialCache.set(key, createMaterial());
  }
  return materialCache.get(key)!;
}

/**
 * Create a simple lambert material (faster than standard)
 */
export function createOptimizedMaterial(options: {
  color: string | number;
  transparent?: boolean;
  opacity?: number;
  emissive?: string | number;
  emissiveIntensity?: number;
}): THREE.MeshLambertMaterial {
  const key = `lambert-${options.color}-${options.transparent}-${options.opacity}-${options.emissive}-${options.emissiveIntensity}`;

  return getCachedMaterial(key, () => {
    return new THREE.MeshLambertMaterial({
      color: options.color,
      transparent: options.transparent ?? false,
      opacity: options.opacity ?? 1,
      emissive: options.emissive ?? 0x000000,
      emissiveIntensity: options.emissiveIntensity ?? 0,
      side: THREE.FrontSide,
    });
  }) as THREE.MeshLambertMaterial;
}

/**
 * Clear material cache (call on app unmount)
 */
export function clearMaterialCache(): void {
  materialCache.forEach(material => material.dispose());
  materialCache.clear();
}

// ============================================
// Geometry Cache
// ============================================

const geometryCache = new Map<string, THREE.BufferGeometry>();

/**
 * Get or create a cached geometry to reduce memory
 */
export function getCachedGeometry(
  key: string,
  createGeometry: () => THREE.BufferGeometry
): THREE.BufferGeometry {
  if (!geometryCache.has(key)) {
    geometryCache.set(key, createGeometry());
  }
  return geometryCache.get(key)!;
}

/**
 * Create optimized sphere geometry with low poly count
 */
export function createOptimizedSphere(
  radius: number,
  segments: number = 12
): THREE.SphereGeometry {
  const key = `sphere-${radius}-${segments}`;
  return getCachedGeometry(key, () => {
    return new THREE.SphereGeometry(radius, segments, segments);
  }) as THREE.SphereGeometry;
}

/**
 * Create optimized cylinder geometry
 */
export function createOptimizedCylinder(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  segments: number = 8
): THREE.CylinderGeometry {
  const key = `cylinder-${radiusTop}-${radiusBottom}-${height}-${segments}`;
  return getCachedGeometry(key, () => {
    return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
  }) as THREE.CylinderGeometry;
}

/**
 * Create optimized capsule geometry
 */
export function createOptimizedCapsule(
  radius: number,
  length: number,
  capSegments: number = 4,
  radialSegments: number = 8
): THREE.CapsuleGeometry {
  const key = `capsule-${radius}-${length}-${capSegments}-${radialSegments}`;
  return getCachedGeometry(key, () => {
    return new THREE.CapsuleGeometry(radius, length, capSegments, radialSegments);
  }) as THREE.CapsuleGeometry;
}

/**
 * Clear geometry cache
 */
export function clearGeometryCache(): void {
  geometryCache.forEach(geometry => geometry.dispose());
  geometryCache.clear();
}

// ============================================
// Geometry Instancing
// ============================================

interface InstanceData {
  position: THREE.Vector3;
  rotation?: THREE.Euler;
  scale?: THREE.Vector3;
  color?: THREE.Color;
}

/**
 * Create instanced mesh for rendering many identical objects efficiently
 */
export function createInstancedMesh(
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  instances: InstanceData[]
): THREE.InstancedMesh {
  const mesh = new THREE.InstancedMesh(geometry, material, instances.length);

  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3(1, 1, 1);

  instances.forEach((instance, i) => {
    position.copy(instance.position);

    if (instance.rotation) {
      quaternion.setFromEuler(instance.rotation);
    } else {
      quaternion.identity();
    }

    if (instance.scale) {
      scale.copy(instance.scale);
    } else {
      scale.set(1, 1, 1);
    }

    matrix.compose(position, quaternion, scale);
    mesh.setMatrixAt(i, matrix);

    if (instance.color && mesh.instanceColor) {
      mesh.setColorAt(i, instance.color);
    }
  });

  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) {
    mesh.instanceColor.needsUpdate = true;
  }

  return mesh;
}

// ============================================
// Texture Optimization
// ============================================

const textureCache = new Map<string, THREE.Texture>();
const textureLoader = new THREE.TextureLoader();

/**
 * Load and cache a texture with optimization settings
 */
export function loadOptimizedTexture(
  url: string,
  options?: {
    minFilter?: THREE.MinificationTextureFilter;
    magFilter?: THREE.MagnificationTextureFilter;
    anisotropy?: number;
  }
): Promise<THREE.Texture> {
  if (textureCache.has(url)) {
    return Promise.resolve(textureCache.get(url)!);
  }

  return new Promise((resolve, reject) => {
    textureLoader.load(
      url,
      (texture) => {
        // Apply optimization settings
        texture.minFilter = options?.minFilter ?? THREE.LinearMipmapLinearFilter;
        texture.magFilter = options?.magFilter ?? THREE.LinearFilter;
        texture.generateMipmaps = true;

        if (options?.anisotropy) {
          texture.anisotropy = options.anisotropy;
        }

        textureCache.set(url, texture);
        resolve(texture);
      },
      undefined,
      reject
    );
  });
}

/**
 * Clear texture cache
 */
export function clearTextureCache(): void {
  textureCache.forEach(texture => texture.dispose());
  textureCache.clear();
}

// ============================================
// Object Pool for Reusable Objects
// ============================================

class ObjectPool<T> {
  private pool: T[] = [];
  private create: () => T;
  private reset: (obj: T) => void;
  private maxSize: number;

  constructor(
    createFn: () => T,
    resetFn: (obj: T) => void,
    maxSize: number = 100
  ) {
    this.create = createFn;
    this.reset = resetFn;
    this.maxSize = maxSize;
  }

  acquire(): T {
    if (this.pool.length > 0) {
      return this.pool.pop()!;
    }
    return this.create();
  }

  release(obj: T): void {
    if (this.pool.length < this.maxSize) {
      this.reset(obj);
      this.pool.push(obj);
    }
  }

  clear(): void {
    this.pool = [];
  }

  get size(): number {
    return this.pool.length;
  }
}

// Pre-configured pools for common Three.js objects
export const vector3Pool = new ObjectPool(
  () => new THREE.Vector3(),
  (v) => v.set(0, 0, 0),
  50
);

export const matrix4Pool = new ObjectPool(
  () => new THREE.Matrix4(),
  (m) => m.identity(),
  20
);

export const colorPool = new ObjectPool(
  () => new THREE.Color(),
  (c) => c.set(0xffffff),
  30
);

// ============================================
// LOD Helpers
// ============================================

interface LODLevel {
  distance: number;
  geometry: THREE.BufferGeometry;
  material?: THREE.Material;
}

/**
 * Create an LOD object with multiple detail levels
 */
export function createLODMesh(
  levels: LODLevel[],
  defaultMaterial?: THREE.Material
): THREE.LOD {
  const lod = new THREE.LOD();

  levels.forEach(level => {
    const mesh = new THREE.Mesh(
      level.geometry,
      level.material ?? defaultMaterial ?? new THREE.MeshBasicMaterial()
    );
    lod.addLevel(mesh, level.distance);
  });

  return lod;
}

// ============================================
// Render Optimization
// ============================================

/**
 * Calculate optimal DPR based on device capabilities
 */
export function getOptimalDPR(maxDPR: number = 2): number {
  const deviceDPR = window.devicePixelRatio || 1;

  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    // Limit DPR on mobile for performance
    return Math.min(deviceDPR, 1.5);
  }

  return Math.min(deviceDPR, maxDPR);
}

/**
 * Get optimal WebGL context attributes for performance
 */
export function getOptimalGLAttributes(quality: 'low' | 'medium' | 'high' = 'medium'): WebGLContextAttributes {
  const base: WebGLContextAttributes = {
    alpha: false, // Disable alpha for better performance
    stencil: false, // Disable stencil if not needed
    depth: true,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance',
  };

  switch (quality) {
    case 'low':
      return {
        ...base,
        antialias: false,
        premultipliedAlpha: false,
      };
    case 'medium':
      return {
        ...base,
        antialias: false,
        premultipliedAlpha: true,
      };
    case 'high':
      return {
        ...base,
        antialias: true,
        premultipliedAlpha: true,
      };
  }
}

// ============================================
// Frame Rate Limiter
// ============================================

/**
 * Create a frame rate limiter for the render loop
 */
export function createFrameLimiter(targetFPS: number = 60) {
  const interval = 1000 / targetFPS;
  let lastTime = 0;

  return {
    shouldRender(currentTime: number): boolean {
      const elapsed = currentTime - lastTime;
      if (elapsed >= interval) {
        lastTime = currentTime - (elapsed % interval);
        return true;
      }
      return false;
    },
    reset() {
      lastTime = 0;
    },
  };
}

// ============================================
// Scene Cleanup
// ============================================

/**
 * Recursively dispose of a Three.js object and its children
 */
export function disposeObject(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) {
        child.geometry.dispose();
      }

      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => disposeMaterial(mat));
        } else {
          disposeMaterial(child.material);
        }
      }
    }
  });

  // Remove from parent if any
  if (object.parent) {
    object.parent.remove(object);
  }
}

/**
 * Dispose of a material and its textures
 */
function disposeMaterial(material: THREE.Material): void {
  material.dispose();

  // Dispose textures if present
  const mat = material as THREE.MeshStandardMaterial;
  if (mat.map) mat.map.dispose();
  if (mat.lightMap) mat.lightMap.dispose();
  if (mat.bumpMap) mat.bumpMap.dispose();
  if (mat.normalMap) mat.normalMap.dispose();
  if (mat.envMap) mat.envMap.dispose();
  if (mat.alphaMap) mat.alphaMap.dispose();
  if (mat.aoMap) mat.aoMap.dispose();
  if (mat.displacementMap) mat.displacementMap.dispose();
  if (mat.emissiveMap) mat.emissiveMap.dispose();
  if (mat.metalnessMap) mat.metalnessMap.dispose();
  if (mat.roughnessMap) mat.roughnessMap.dispose();

  // specularMap exists on MeshPhongMaterial, not MeshStandardMaterial
  const phongMat = material as THREE.MeshPhongMaterial;
  if (phongMat.specularMap) phongMat.specularMap.dispose();
}

/**
 * Clean up all caches on app unmount
 */
export function cleanupAllCaches(): void {
  clearMaterialCache();
  clearGeometryCache();
  clearTextureCache();
  vector3Pool.clear();
  matrix4Pool.clear();
  colorPool.clear();
}
