/**
 * Biological Self - Content Aggregation Module
 * 
 * Medical educational content extraction and management system.
 * Aggregates content from open source repositories like OpenStax.
 * 
 * Enhanced with pathology/anatomy/histology image integration from
 * WebPath, Gray's Anatomy, Wikimedia Commons, and other educational sources.
 */

// Types
export * from './types/content.js';

// Content and Image Registry
export * from './content/index.js';

// Image Gallery Component
export { ImageGallery, CompactImageGallery, ImagePreview } from './components/ImageGallery.js';

// Utilities
export { 
  ContentRegistryManager,
  ContentLoader,
  createContentLoader,
  getContentSummary,
} from './utils/contentLoader.js';

export {
  TextParser,
  ImageDownloader,
  ContentValidator,
  ContentBuilder,
  createTextParser,
  createImageDownloader,
  createContentValidator,
  createContentBuilder,
} from './utils/contentExtractor.js';

// Anatomy Context Builder with Image Support
export {
  buildStructureContext,
  buildAnatomySystemPrompt,
  generateSuggestedQuestions,
  getImagesForStructure,
  getImagesByBodyRegion,
  getImagesByBodySystem,
} from './utils/anatomyContextBuilder.js';
export type { 
  StructureEducationalContent, 
  DashboardData,
} from './utils/anatomyContextBuilder.js';

// Attribution
export { default as sources } from './attribution/sources.json' assert { type: 'json' };
