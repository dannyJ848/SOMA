/**
 * Procedural Texture System Exports
 *
 * This module provides procedural texture generation for the 3D anatomy viewer,
 * enabling rich visual detail without external texture files.
 */

export {
  // Main texture generation
  generateTextureSet,
  createTexturedMaterial,
  createBasicTexturedMaterial,

  // Texture atlas
  createTextureAtlas,

  // Lazy loading
  LazyTextureLoader,

  // Configuration and utilities
  getTextureConfigForStructure,
  clearTextureCache,
  getTextureCacheStats,

  // Mappings
  ANATOMICAL_TEXTURE_MAP,
  QUALITY_RESOLUTION,
  DEFAULT_CONFIG,

  // Types
  type TextureQuality,
  type TextureType,
  type MapType,
  type TextureSet,
  type TextureConfig,
  type ProceduralTextureOptions,
  type AtlasEntry,
  type TextureAtlas,
} from './ProceduralTextures';
