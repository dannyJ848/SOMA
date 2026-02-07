/**
 * Biological Self - Content Aggregation Module
 * 
 * Medical educational content extraction and management system.
 * Aggregates content from open source repositories like OpenStax.
 */

// Types
export * from './types/content.js';

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

// Attribution
export { default as sources } from './attribution/sources.json' assert { type: 'json' };
