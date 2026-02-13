/**
 * Content Extraction Utilities
 * 
 * Tools for extracting and processing content from open source
 * medical repositories like OpenStax.
 */

import {
  MedicalContent,
  ContentBlock,
  ContentBlockType,
  ImageRef,
  KeyTerm,
  ContentMetadata,
  SourceAttribution,
  ContentCategory,
  SourceLocation,
  ImageMetadata,
} from '../types/content.js';

import { createHash } from 'crypto';
import { writeFile, mkdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

// ============================================================================
// TYPES FOR EXTRACTION
// ============================================================================

/**
 * Raw content extracted from source
 */
export interface ExtractedRawContent {
  title: string;
  description: string;
  sections: RawSection[];
  figures: RawFigure[];
  keyTerms: RawKeyTerm[];
  learningObjectives: string[];
}

export interface RawSection {
  level: number;
  title: string;
  content: string;
  subsections?: RawSection[];
}

export interface RawFigure {
  id: string;
  caption: string;
  altText: string;
  imageUrl: string;
  originalFilename: string;
}

export interface RawKeyTerm {
  term: string;
  definition: string;
  pronunciation?: string;
}

/**
 * Extraction options
 */
export interface ExtractionOptions {
  /** Content category */
  category: ContentCategory;
  /** Source ID */
  sourceId: string;
  /** Content title */
  title: string;
  /** Content description */
  description: string;
  /** Output directory for content */
  outputDir: string;
  /** Images directory */
  imagesDir: string;
  /** Extraction method */
  extractionMethod: string;
  /** Additional tags */
  tags?: string[];
}

/**
 * Image download result
 */
export interface ImageDownloadResult {
  success: boolean;
  imageRef?: ImageRef;
  error?: string;
  skipped?: boolean;
}

// ============================================================================
// TEXT PARSER
// ============================================================================

/**
 * Parse raw text content into structured content blocks
 */
export class TextParser {
  /**
   * Parse markdown or HTML-like content into structured blocks
   */
  parse(rawContent: ExtractedRawContent): ContentBlock[] {
    const blocks: ContentBlock[] = [];

    for (const section of rawContent.sections) {
      const block = this.parseSection(section);
      blocks.push(block);
    }

    return blocks;
  }

  /**
   * Parse a section recursively
   */
  private parseSection(section: RawSection, parentId?: string): ContentBlock {
    const id = this.generateId(section.title, parentId);
    
    const block: ContentBlock = {
      id,
      type: this.getBlockType(section.level),
      title: section.title,
      content: this.cleanContent(section.content),
    };

    // Parse child sections
    if (section.subsections && section.subsections.length > 0) {
      block.children = section.subsections.map(child => 
        this.parseSection(child, id)
      );
    }

    // Extract lists from content
    const lists = this.extractLists(section.content);
    if (lists.length > 0) {
      if (!block.children) block.children = [];
      block.children.push(...lists);
    }

    return block;
  }

  /**
   * Determine block type from heading level
   */
  private getBlockType(level: number): ContentBlockType {
    switch (level) {
      case 1: return 'chapter';
      case 2: return 'section';
      case 3: return 'subsection';
      default: return 'paragraph';
    }
  }

  /**
   * Generate a unique ID for a block
   */
  private generateId(text: string, parentId?: string): string {
    const base = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return parentId ? `${parentId}-${base}` : base;
  }

  /**
   * Clean content text
   */
  private cleanContent(content: string): string {
    return content
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n\n')
      .trim();
  }

  /**
   * Extract list items from content
   */
  private extractLists(content: string): ContentBlock[] {
    const blocks: ContentBlock[] = [];
    
    // Match bullet lists
    const bulletRegex = /^[\s]*[-*][\s]+(.+)$/gm;
    const bulletMatches = [...content.matchAll(bulletRegex)];
    
    if (bulletMatches.length > 0) {
      const items = bulletMatches.map(m => m[1].trim());
      blocks.push({
        id: `list-${this.generateId(items[0])}`,
        type: 'list',
        content: items.join('\n'),
      });
    }

    return blocks;
  }

  /**
   * Parse key terms into structured format
   */
  parseKeyTerms(rawTerms: RawKeyTerm[]): KeyTerm[] {
    return rawTerms.map(term => ({
      term: term.term.trim(),
      definition: term.definition.trim(),
      pronunciation: term.pronunciation?.trim(),
    }));
  }

  /**
   * Parse learning objectives
   */
  parseLearningObjectives(objectives: string[]): string[] {
    return objectives
      .map(obj => obj.trim())
      .filter(obj => obj.length > 0)
      .map(obj => {
        // Remove common prefixes
        return obj
          .replace(/^(Upon completion|Students will|Learners will)[,:]?\s*/i, '')
          .replace(/^[0-9]+\.\s*/, '')
          .trim();
      });
  }
}

// ============================================================================
// IMAGE DOWNLOADER
// ============================================================================

/**
 * Download and process images with attribution
 */
export class ImageDownloader {
  private imagesDir: string;
  private sourceAttribution: SourceAttribution;
  private downloadedImages: Set<string> = new Set();

  constructor(
    imagesDir: string,
    sourceAttribution: SourceAttribution
  ) {
    this.imagesDir = imagesDir;
    this.sourceAttribution = sourceAttribution;
  }

  /**
   * Download an image from URL with attribution
   */
  async downloadImage(
    rawFigure: RawFigure,
    contentId: string
  ): Promise<ImageDownloadResult> {
    try {
      // Check if already downloaded
      const imageId = this.generateImageId(rawFigure.originalFilename);
      if (this.downloadedImages.has(imageId)) {
        return {
          success: true,
          skipped: true,
          imageRef: await this.createImageRef(rawFigure, contentId, imageId)
        };
      }

      // Ensure images directory exists
      await this.ensureDirectory(this.imagesDir);

      // Determine file extension
      const ext = this.getExtension(rawFigure.imageUrl);
      const localFilename = `${imageId}.${ext}`;
      const localPath = join(this.imagesDir, localFilename);

      // Download image (placeholder - actual fetch would use fetch API)
      const imageData = await this.fetchImage(rawFigure.imageUrl);
      
      if (!imageData) {
        return {
          success: false,
          error: `Failed to fetch image: ${rawFigure.imageUrl}`
        };
      }

      // Save image
      await writeFile(localPath, imageData);

      // Calculate checksum
      const checksum = this.calculateChecksum(imageData);

      // Create image metadata
      const metadata: ImageMetadata = {
        format: ext as ImageMetadata['format'],
        downloadedAt: new Date().toISOString(),
        checksum,
      };

      // Create image reference
      const imageRef: ImageRef = {
        id: imageId,
        originalFilename: rawFigure.originalFilename,
        localPath: `images/${localFilename}`,
        caption: rawFigure.caption,
        altText: rawFigure.altText,
        source: this.sourceAttribution,
        metadata,
      };

      this.downloadedImages.add(imageId);

      return {
        success: true,
        imageRef,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Download multiple images
   */
  async downloadImages(
    figures: RawFigure[],
    contentId: string
  ): Promise<ImageDownloadResult[]> {
    const results: ImageDownloadResult[] = [];
    
    for (const figure of figures) {
      const result = await this.downloadImage(figure, contentId);
      results.push(result);
    }

    return results;
  }

  /**
   * Generate a unique image ID
   */
  private generateImageId(originalFilename: string): string {
    const hash = createHash('md5')
      .update(originalFilename)
      .digest('hex')
      .substring(0, 8);
    const base = basename(originalFilename, extname(originalFilename))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .substring(0, 30);
    return `${base}-${hash}`;
  }

  /**
   * Get file extension from URL or default to jpg
   */
  private getExtension(url: string): string {
    const ext = extname(url).toLowerCase().replace('.', '');
    const validExts = ['jpg', 'jpeg', 'png', 'svg', 'webp'];
    return validExts.includes(ext) ? ext : 'jpg';
  }

  /**
   * Create image reference for already-downloaded image
   */
  private async createImageRef(
    rawFigure: RawFigure,
    contentId: string,
    imageId: string
  ): Promise<ImageRef> {
    const ext = this.getExtension(rawFigure.imageUrl);
    const localFilename = `${imageId}.${ext}`;

    return {
      id: imageId,
      originalFilename: rawFigure.originalFilename,
      localPath: `images/${localFilename}`,
      caption: rawFigure.caption,
      altText: rawFigure.altText,
      source: this.sourceAttribution,
      metadata: {
        format: ext as ImageMetadata['format'],
        downloadedAt: new Date().toISOString(),
        checksum: '', // Would be loaded from metadata file
      },
    };
  }

  /**
   * Fetch image data from URL
   * (Placeholder - would use actual HTTP client in production)
   */
  private async fetchImage(url: string): Promise<Buffer | null> {
    // Placeholder implementation
    // In production, this would use fetch() or similar
    console.log(`[ImageDownloader] Would fetch: ${url}`);
    return null;
  }

  /**
   * Calculate MD5 checksum of data
   */
  private calculateChecksum(data: Buffer): string {
    return createHash('md5').update(data).digest('hex');
  }

  /**
   * Ensure directory exists
   */
  private async ensureDirectory(dir: string): Promise<void> {
    try {
      await mkdir(dir, { recursive: true });
    } catch {
      // Directory may already exist
    }
  }

  /**
   * Get list of downloaded image IDs
   */
  getDownloadedIds(): string[] {
    return Array.from(this.downloadedImages);
  }
}

// ============================================================================
// CONTENT VALIDATOR
// ============================================================================

/**
 * Validate extracted content for completeness and correctness
 */
export class ContentValidator {
  private errors: string[] = [];
  private warnings: string[] = [];

  /**
   * Validate complete content document
   */
  validate(content: MedicalContent): {
    valid: boolean;
    errors: string[];
    warnings: string[];
    score: number;
  } {
    this.errors = [];
    this.warnings = [];

    // Required fields
    this.validateRequiredFields(content);
    
    // Content blocks
    this.validateContentBlocks(content.content);
    
    // Images
    this.validateImages(content.images);
    
    // Attribution
    this.validateAttribution(content.source);
    
    // Metadata
    this.validateMetadata(content.metadata);

    // Calculate completeness score
    const score = this.calculateCompletenessScore(content);

    return {
      valid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      score,
    };
  }

  /**
   * Validate required fields
   */
  private validateRequiredFields(content: MedicalContent): void {
    if (!content.id) this.errors.push('Missing content ID');
    if (!content.category) this.errors.push('Missing category');
    if (!content.title) this.errors.push('Missing title');
    if (!content.description) this.errors.push('Missing description');
    if (!content.content || content.content.length === 0) {
      this.errors.push('No content blocks');
    }
    if (!content.source) this.errors.push('Missing source attribution');
  }

  /**
   * Validate content blocks recursively
   */
  private validateContentBlocks(blocks: ContentBlock[], parentPath: string = ''): void {
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const path = `${parentPath}.content[${i}]`;

      if (!block.id) {
        this.errors.push(`${path}: Missing block ID`);
      }

      if (!block.type) {
        this.errors.push(`${path}: Missing block type`);
      }

      if (!block.content && !block.children) {
        this.warnings.push(`${path}: Block has no content or children`);
      }

      // Validate children recursively
      if (block.children) {
        this.validateContentBlocks(block.children, path);
      }

      // Validate images in block
      if (block.images) {
        for (let j = 0; j < block.images.length; j++) {
          const img = block.images[j];
          if (!img.id) {
            this.errors.push(`${path}.images[${j}]: Missing image ID`);
          }
        }
      }
    }
  }

  /**
   * Validate image references
   */
  private validateImages(images: ImageRef[]): void {
    const ids = new Set<string>();
    
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      
      if (!img.id) {
        this.errors.push(`images[${i}]: Missing image ID`);
        continue;
      }

      if (ids.has(img.id)) {
        this.errors.push(`images[${i}]: Duplicate image ID: ${img.id}`);
      }
      ids.add(img.id);

      if (!img.localPath) {
        this.errors.push(`images[${i}]: Missing local path`);
      }

      if (!img.caption) {
        this.warnings.push(`images[${i}]: Missing caption`);
      }

      if (!img.altText) {
        this.warnings.push(`images[${i}]: Missing alt text for accessibility`);
      }

      if (!img.source) {
        this.errors.push(`images[${i}]: Missing source attribution`);
      }
    }
  }

  /**
   * Validate source attribution
   */
  private validateAttribution(source: SourceAttribution): void {
    if (!source) {
      this.errors.push('Missing source attribution');
      return;
    }

    if (!source.sourceId) {
      this.errors.push('Missing source ID');
    }

    if (!source.name) {
      this.errors.push('Missing source name');
    }

    if (!source.publisher) {
      this.warnings.push('Missing publisher');
    }

    if (!source.license) {
      this.errors.push('Missing license type');
    }

    if (!source.licenseUrl) {
      this.warnings.push('Missing license URL');
    }

    if (!source.sourceUrl) {
      this.warnings.push('Missing source URL');
    }
  }

  /**
   * Validate metadata
   */
  private validateMetadata(metadata: ContentMetadata): void {
    if (!metadata) {
      this.errors.push('Missing metadata');
      return;
    }

    if (!metadata.createdAt) {
      this.errors.push('Missing creation timestamp');
    }

    if (!metadata.version) {
      this.warnings.push('Missing version');
    }

    if (typeof metadata.completeness !== 'number') {
      this.warnings.push('Missing completeness score');
    }
  }

  /**
   * Calculate content completeness score
   */
  private calculateCompletenessScore(content: MedicalContent): number {
    let score = 0;
    let total = 0;

    // Check required fields
    const checks = [
      { has: !!content.id, weight: 5 },
      { has: !!content.title, weight: 5 },
      { has: !!content.description, weight: 3 },
      { has: content.content.length > 0, weight: 10 },
      { has: content.learningObjectives.length > 0, weight: 3 },
      { has: content.keyTerms.length > 0, weight: 2 },
      { has: !!content.source?.sourceId, weight: 5 },
      { has: !!content.source?.name, weight: 3 },
      { has: !!content.source?.license, weight: 5 },
      { has: content.images.every(img => !!img.altText), weight: 3 },
    ];

    for (const check of checks) {
      total += check.weight;
      if (check.has) score += check.weight;
    }

    return Math.round((score / total) * 100) / 100;
  }

  /**
   * Get validation report as string
   */
  getReport(content: MedicalContent): string {
    const result = this.validate(content);
    
    let report = `Validation Report for: ${content.title}\n`;
    report += `=${'='.repeat(report.length - 1)}\n\n`;
    report += `Valid: ${result.valid ? '✓' : '✗'}\n`;
    report += `Completeness Score: ${(result.score * 100).toFixed(1)}%\n\n`;

    if (result.errors.length > 0) {
      report += `Errors (${result.errors.length}):\n`;
      for (const error of result.errors) {
        report += `  ✗ ${error}\n`;
      }
      report += '\n';
    }

    if (result.warnings.length > 0) {
      report += `Warnings (${result.warnings.length}):\n`;
      for (const warning of result.warnings) {
        report += `  ⚠ ${warning}\n`;
      }
    }

    if (result.errors.length === 0 && result.warnings.length === 0) {
      report += 'No issues found.\n';
    }

    return report;
  }
}

// ============================================================================
// CONTENT BUILDER
// ============================================================================

/**
 * Build a complete MedicalContent document from extracted raw content
 */
export class ContentBuilder {
  private textParser: TextParser;
  private validator: ContentValidator;

  constructor() {
    this.textParser = new TextParser();
    this.validator = new ContentValidator();
  }

  /**
   * Build content document from raw extraction
   */
  build(
    rawContent: ExtractedRawContent,
    options: ExtractionOptions,
    sourceAttribution: SourceAttribution,
    downloadedImages: ImageRef[]
  ): MedicalContent {
    const id = this.generateContentId(options.title, options.sourceId);
    
    const content: MedicalContent = {
      id,
      category: options.category,
      title: options.title,
      description: options.description,
      content: this.textParser.parse(rawContent),
      images: downloadedImages,
      learningObjectives: this.textParser.parseLearningObjectives(
        rawContent.learningObjectives
      ),
      keyTerms: this.textParser.parseKeyTerms(rawContent.keyTerms),
      source: sourceAttribution,
      metadata: this.buildMetadata(options),
    };

    // Update metadata with validation score
    const validation = this.validator.validate(content);
    content.metadata.completeness = validation.score;

    return content;
  }

  /**
   * Generate a unique content ID
   */
  private generateContentId(title: string, sourceId: string): string {
    const base = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .substring(0, 40);
    const hash = createHash('md5')
      .update(`${sourceId}-${title}`)
      .digest('hex')
      .substring(0, 6);
    return `${base}-${hash}`;
  }

  /**
   * Build metadata object
   */
  private buildMetadata(options: ExtractionOptions): ContentMetadata {
    return {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: '1.0.0',
      completeness: 0,
      extractionMethod: options.extractionMethod,
      tags: options.tags || [],
    };
  }
}

// ============================================================================
// EXPORT CONVENIENCE FUNCTIONS
// ============================================================================

export function createTextParser(): TextParser {
  return new TextParser();
}

export function createImageDownloader(
  imagesDir: string,
  sourceAttribution: SourceAttribution
): ImageDownloader {
  return new ImageDownloader(imagesDir, sourceAttribution);
}

export function createContentValidator(): ContentValidator {
  return new ContentValidator();
}

export function createContentBuilder(): ContentBuilder {
  return new ContentBuilder();
}
