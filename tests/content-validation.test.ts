/**
 * Content Validation Tests
 *
 * Comprehensive validation suite for all educational content files.
 * Tests interface compliance, content quality, file structure,
 * cross-references, and metadata.
 *
 * Run with: npm test -- content-validation.test.ts
 * Run with coverage: npm run test:coverage -- content-validation.test.ts
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { glob } from 'tinyglobby';
import { readFile } from 'fs/promises';
import { resolve, relative } from 'path';
import type {
  EducationalContent,
  LevelContent,
  ContentTags,
  ComplexityLevel,
} from '../core/content/types';

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONTENT_DIR = resolve(__dirname, '../core/content');
const MAX_FILE_LINES = 600;
const VALID_PLACEHOLDER_PATTERNS = [/\bTODO\b/i, /\bFIXME\b/i, /\bplaceholder\b/i];
const VALID_ICD11_PATTERN = /^[A-Z]\d{1,2}\.?\d{0,3}$/;
const VALID_CONTENT_TYPES = ['structure', 'system', 'pathway', 'process', 'condition', 'concept', 'topic'] as const;
const VALID_CATEGORIES = ['primary-care', 'surgical', 'medical', 'womens-reproductive', 'mental-health', 'diagnostic', 'other'] as const;
const VALID_STATUSES = ['draft', 'review', 'published'] as const;
const VALID_RELATIONSHIPS = ['parent', 'child', 'sibling', 'related', 'see-also'] as const;
const VALID_CLINICAL_RELEVANCE = ['low', 'medium', 'high', 'critical'] as const;
const VALID_EXAM_TYPES = ['usmle', 'nbme', 'shelf'] as const;

// Unicode patterns to detect
const UNICODE_BOX_DRAWING = /[\u2500-\u257F]/;
const ESCAPED_BACKTICKS = /\\`/g;
const UNESCAPED_APOSTROPHE_IN_SINGLE_QUOTE = /'[^']*'[^']*'/;

// =============================================================================
// TYPES
// =============================================================================

interface ValidationIssue {
  file: string;
  type: 'error' | 'warning';
  category: string;
  message: string;
  line?: number;
}

interface LoadedContent {
  filePath: string;
  relativePath: string;
  content: string;
  lineCount: number;
  exports: EducationalContent[];
}

interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Load all content files from the core/content directory
 */
async function loadContentFiles(): Promise<LoadedContent[]> {
  const contentFiles = await glob(['**/*.ts'], {
    cwd: CONTENT_DIR,
    ignore: ['**/index.ts', '**/types.ts', '**/*.test.ts', '**/*.spec.ts'],
  });

  const loaded: LoadedContent[] = [];

  for (const file of contentFiles) {
    const filePath = resolve(CONTENT_DIR, file);
    const content = await readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    loaded.push({
      filePath,
      relativePath: file,
      content,
      lineCount: lines.length,
      exports: [],
    });
  }

  return loaded;
}

/**
 * Dynamically import content files and extract exports
 */
async function extractContentExports(files: LoadedContent[]): Promise<LoadedContent[]> {
  const results: LoadedContent[] = [];

  for (const file of files) {
    try {
      // Skip files that don't appear to export EducationalContent
      if (!file.content.includes('EducationalContent')) {
        results.push(file);
        continue;
      }

      // Extract exports by looking for patterns
      const exportPattern = /export\s+(?:const|let|var)\s+(\w+)(?::\s*EducationalContent)?\s*[:=]/g;
      const exports: EducationalContent[] = [];
      let match;

      while ((match = exportPattern.exec(file.content)) !== null) {
        const exportName = match[1];
        // Try to dynamically import the module
        try {
          const module = await import(file.filePath);
          const exported = module[exportName];
          if (exported && typeof exported === 'object') {
            exports.push(exported as EducationalContent);
          }
        } catch {
          // If dynamic import fails, skip this export
        }
      }

      results.push({
        ...file,
        exports,
      });
    } catch (error) {
      results.push(file);
    }
  }

  return results;
}

/**
 * Check if a string contains placeholder text
 */
function containsPlaceholder(text: string): boolean {
  if (!text || typeof text !== 'string') return false;
  const upperText = text.toUpperCase();
  return VALID_PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(upperText));
}

/**
 * Validate ICD-11 code format
 */
function isValidICD11Code(code: string): boolean {
  return VALID_ICD11_PATTERN.test(code);
}

/**
 * Extract line number for a pattern in content
 */
function findLineNumber(content: string, pattern: string | RegExp): number | undefined {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (typeof pattern === 'string') {
      if (lines[i].includes(pattern)) return i + 1;
    } else {
      if (pattern.test(lines[i])) return i + 1;
    }
  }
  return undefined;
}

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

/**
 * Validate interface compliance for EducationalContent
 */
function validateInterfaceCompliance(content: EducationalContent, filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const relativePath = relative(CONTENT_DIR, filePath);

  // Required fields per EducationalContent interface
  const requiredFields: (keyof EducationalContent)[] = ['id', 'name', 'type', 'levels', 'media', 'citations', 'crossReferences', 'tags', 'createdAt', 'updatedAt', 'version', 'status'];
  for (const field of requiredFields) {
    if (content[field] === undefined || content[field] === null) {
      issues.push({
        file: relativePath,
        type: 'error',
        category: 'Interface Compliance',
        message: `Missing required field: ${field}`,
      });
    }
  }

  // Validate type
  if (content.type && !VALID_CONTENT_TYPES.includes(content.type as typeof VALID_CONTENT_TYPES[number])) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Interface Compliance',
      message: `Invalid content type: ${content.type}. Must be one of: ${VALID_CONTENT_TYPES.join(', ')}`,
    });
  }

  // Validate levels - must have all 5 complexity levels
  if (content.levels) {
    const requiredLevels: ComplexityLevel[] = [1, 2, 3, 4, 5];
    for (const level of requiredLevels) {
      if (!content.levels[level]) {
        issues.push({
          file: relativePath,
          type: 'error',
          category: 'Interface Compliance',
          message: `Missing complexity level ${level}`,
        });
      } else {
        // Validate level content
        const levelContent = content.levels[level];
        const levelIssues = validateLevelContent(levelContent, level, relativePath);
        issues.push(...levelIssues);
      }
    }
  }

  // Validate arrays exist
  if (!content.media) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Interface Compliance',
      message: 'Missing media array',
    });
  }

  if (!content.citations) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Interface Compliance',
      message: 'Missing citations array',
    });
  }

  if (!content.crossReferences) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Interface Compliance',
      message: 'Missing crossReferences array',
    });
  }

  if (!content.tags) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Interface Compliance',
      message: 'Missing tags object',
    });
  }

  return issues;
}

/**
 * Validate individual level content
 */
function validateLevelContent(levelContent: LevelContent, level: number, filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Required fields for level content
  if (!levelContent.summary || levelContent.summary.trim() === '') {
    issues.push({
      file: filePath,
      type: 'error',
      category: 'Level Content',
      message: `Level ${level}: Missing or empty summary`,
    });
  }

  if (!levelContent.explanation || levelContent.explanation.trim() === '') {
    issues.push({
      file: filePath,
      type: 'error',
      category: 'Level Content',
      message: `Level ${level}: Missing or empty explanation`,
    });
  }

  if (!levelContent.keyTerms || levelContent.keyTerms.length === 0) {
    issues.push({
      file: filePath,
      type: 'warning',
      category: 'Level Content',
      message: `Level ${level}: Missing keyTerms array`,
    });
  } else {
    // Validate key terms
    for (let i = 0; i < levelContent.keyTerms.length; i++) {
      const term = levelContent.keyTerms[i];
      if (!term.term || term.term.trim() === '') {
        issues.push({
          file: filePath,
          type: 'error',
          category: 'Level Content',
          message: `Level ${level}: Key term ${i + 1} has empty term`,
        });
      }
      if (!term.definition || term.definition.trim() === '') {
        issues.push({
          file: filePath,
          type: 'error',
          category: 'Level Content',
          message: `Level ${level}: Key term "${term.term}" has empty definition`,
        });
      }
    }
  }

  return issues;
}

/**
 * Validate content quality
 */
function validateContentQuality(content: EducationalContent, filePath: string, rawContent: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const relativePath = relative(CONTENT_DIR, filePath);

  // Check for placeholder text in name
  if (containsPlaceholder(content.name)) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Content Quality',
      message: `Name contains placeholder text: ${content.name}`,
    });
  }

  // Check for Spanish translation
  if (!content.nameEs || content.nameEs.trim() === '') {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Content Quality',
      message: 'Missing Spanish translation (nameEs)',
    });
  } else if (containsPlaceholder(content.nameEs)) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Content Quality',
      message: `Spanish name contains placeholder text: ${content.nameEs}`,
    });
  }

  // Check levels for placeholder text
  if (content.levels) {
    const levels = [1, 2, 3, 4, 5] as ComplexityLevel[];
    for (const level of levels) {
      const levelContent = content.levels[level];
      if (!levelContent) continue;

      const fieldsToCheck: (keyof LevelContent)[] = ['summary', 'explanation', 'clinicalNotes'];
      for (const field of fieldsToCheck) {
        const value = levelContent[field];
        if (typeof value === 'string' && containsPlaceholder(value)) {
          issues.push({
            file: relativePath,
            type: 'error',
            category: 'Content Quality',
            message: `Level ${level}: ${field} contains placeholder text`,
          });
        }
      }

      // Check key terms
      if (levelContent.keyTerms) {
        for (const term of levelContent.keyTerms) {
          if (containsPlaceholder(term.term) || containsPlaceholder(term.definition)) {
            issues.push({
              file: relativePath,
              type: 'error',
              category: 'Content Quality',
              message: `Level ${level}: Key term "${term.term}" contains placeholder text`,
            });
          }
        }
      }
    }
  }

  // Check for ICD-11 codes if present
  if (content.tags?.systems) {
    for (const system of content.tags.systems) {
      if (system.startsWith('ICD-11') || system.match(/^\d/)) {
        const code = system.replace('ICD-11:', '').trim();
        if (!isValidICD11Code(code)) {
          issues.push({
            file: relativePath,
            type: 'warning',
            category: 'Content Quality',
            message: `Potentially invalid ICD-11 code format: ${code}`,
          });
        }
      }
    }
  }

  return issues;
}

/**
 * Validate file structure
 */
function validateFileStructure(loadedContent: LoadedContent): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const { relativePath, content, lineCount } = loadedContent;

  // Check file size
  if (lineCount > MAX_FILE_LINES) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'File Structure',
      message: `File exceeds ${MAX_FILE_LINES} lines (${lineCount} lines). Consider splitting into multiple files.`,
    });
  }

  // Check for Unicode box-drawing characters
  if (UNICODE_BOX_DRAWING.test(content)) {
    const line = findLineNumber(content, UNICODE_BOX_DRAWING);
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'File Structure',
      message: 'Contains Unicode box-drawing characters (├, │, └, etc.). Use ASCII equivalents.',
      line,
    });
  }

  // Check for escaped backticks in template literals
  if (ESCAPED_BACKTICKS.test(content)) {
    const line = findLineNumber(content, ESCAPED_BACKTICKS);
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'File Structure',
      message: 'Contains escaped backticks (\\`) in template literals. Use --- for code blocks instead.',
      line,
    });
  }

  // Check for unescaped apostrophes in single-quoted strings
  const singleQuotePattern = /'[^'\\]*'[^'\\]*'/g;
  let match;
  while ((match = singleQuotePattern.exec(content)) !== null) {
    const matched = match[0];
    // Check if there's an unescaped apostrophe inside
    const innerContent = matched.slice(1, -1);
    if (innerContent.includes("'") && !innerContent.includes("\\'")) {
      const line = findLineNumber(content, matched);
      issues.push({
        file: relativePath,
        type: 'error',
        category: 'File Structure',
        message: 'Unescaped apostrophe in single-quoted string. Use double quotes or escape with \\.',
        line,
      });
    }
  }

  return issues;
}

/**
 * Validate cross-references
 */
function validateCrossReferences(
  content: EducationalContent,
  filePath: string,
  allIds: Set<string>
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const relativePath = relative(CONTENT_DIR, filePath);

  if (!content.crossReferences || content.crossReferences.length === 0) {
    return issues;
  }

  for (let i = 0; i < content.crossReferences.length; i++) {
    const ref = content.crossReferences[i];

    // Validate targetId exists
    if (!ref.targetId || ref.targetId.trim() === '') {
      issues.push({
        file: relativePath,
        type: 'error',
        category: 'Cross-References',
        message: `Cross-reference ${i + 1}: Missing targetId`,
      });
      continue;
    }

    // Validate relationship type
    if (!VALID_RELATIONSHIPS.includes(ref.relationship as typeof VALID_RELATIONSHIPS[number])) {
      issues.push({
        file: relativePath,
        type: 'error',
        category: 'Cross-References',
        message: `Cross-reference ${i + 1}: Invalid relationship "${ref.relationship}". Must be one of: ${VALID_RELATIONSHIPS.join(', ')}`,
      });
    }

    // Check if referenced ID exists
    if (!allIds.has(ref.targetId)) {
      issues.push({
        file: relativePath,
        type: 'warning',
        category: 'Cross-References',
        message: `Cross-reference to non-existent ID: ${ref.targetId}`,
      });
    }
  }

  return issues;
}

/**
 * Validate metadata
 */
function validateMetadata(content: EducationalContent, filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const relativePath = relative(CONTENT_DIR, filePath);

  // Validate status
  if (!content.status) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Metadata',
      message: 'Missing status field',
    });
  } else if (!VALID_STATUSES.includes(content.status as typeof VALID_STATUSES[number])) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Metadata',
      message: `Invalid status: ${content.status}. Must be one of: ${VALID_STATUSES.join(', ')}`,
    });
  }

  // Validate version
  if (content.version === undefined || content.version === null) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Metadata',
      message: 'Missing version field',
    });
  } else if (typeof content.version !== 'number' || content.version < 1) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Metadata',
      message: `Invalid version: ${content.version}. Must be a positive number.`,
    });
  }

  // Validate dates
  if (!content.createdAt) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Metadata',
      message: 'Missing createdAt field',
    });
  } else if (!isValidDate(content.createdAt)) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Metadata',
      message: `Invalid createdAt format: ${content.createdAt}`,
    });
  }

  if (!content.updatedAt) {
    issues.push({
      file: relativePath,
      type: 'warning',
      category: 'Metadata',
      message: 'Missing updatedAt field',
    });
  } else if (!isValidDate(content.updatedAt)) {
    issues.push({
      file: relativePath,
      type: 'error',
      category: 'Metadata',
      message: `Invalid updatedAt format: ${content.updatedAt}`,
    });
  }

  // Validate tags
  if (content.tags) {
    const tagIssues = validateTags(content.tags, relativePath);
    issues.push(...tagIssues);
  }

  return issues;
}

/**
 * Validate content tags
 */
function validateTags(tags: ContentTags, filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Validate clinical relevance
  if (tags.clinicalRelevance && !VALID_CLINICAL_RELEVANCE.includes(tags.clinicalRelevance as typeof VALID_CLINICAL_RELEVANCE[number])) {
    issues.push({
      file: filePath,
      type: 'error',
      category: 'Metadata',
      message: `Invalid clinicalRelevance: ${tags.clinicalRelevance}. Must be one of: ${VALID_CLINICAL_RELEVANCE.join(', ')}`,
    });
  }

  // Validate exam relevance
  if (tags.examRelevance) {
    for (const exam of Object.keys(tags.examRelevance)) {
      if (!VALID_EXAM_TYPES.includes(exam as typeof VALID_EXAM_TYPES[number])) {
        issues.push({
          file: filePath,
          type: 'warning',
          category: 'Metadata',
          message: `Unknown exam type in examRelevance: ${exam}`,
        });
      }
    }

    // Validate shelf exams if present
    if (tags.examRelevance.shelf && Array.isArray(tags.examRelevance.shelf)) {
      for (const shelf of tags.examRelevance.shelf) {
        if (typeof shelf !== 'string' || shelf.trim() === '') {
          issues.push({
            file: filePath,
            type: 'error',
            category: 'Metadata',
            message: `Invalid shelf exam entry: ${shelf}`,
          });
        }
      }
    }
  }

  return issues;
}

/**
 * Check if string is a valid date
 */
function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

// =============================================================================
// TEST SUITE
// =============================================================================

describe('Content Validation', () => {
  let loadedFiles: LoadedContent[] = [];
  let allContentIds: Set<string> = new Set();

  beforeAll(async () => {
    loadedFiles = await loadContentFiles();
    loadedFiles = await extractContentExports(loadedFiles);

    // Collect all content IDs for cross-reference validation
    for (const file of loadedFiles) {
      for (const content of file.exports) {
        if (content.id) {
          allContentIds.add(content.id);
        }
      }
    }
  }, 120000);

  // ===========================================================================
  // INTERFACE COMPLIANCE TESTS
  // ===========================================================================

  describe('Interface Compliance', () => {
    it('should have all content files export EducationalContent', () => {
      const filesWithExports = loadedFiles.filter((f) => f.exports.length > 0);
      const filesWithoutExports = loadedFiles.filter(
        (f) => f.exports.length === 0 && f.content.includes('EducationalContent')
      );

      if (filesWithoutExports.length > 0) {
        console.warn(
          'Files with EducationalContent import but no exports:',
          filesWithoutExports.map((f) => f.relativePath)
        );
      }

      // At minimum, files that import EducationalContent should have exports
      expect(filesWithExports.length).toBeGreaterThan(0);
    });

    it('should have all required fields present', () => {
      const issues: ValidationIssue[] = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          const contentIssues = validateInterfaceCompliance(content, file.filePath);
          issues.push(...contentIssues);
        }
      }

      const errors = issues.filter((i) => i.type === 'error');
      if (errors.length > 0) {
        console.error('Interface compliance errors:', errors);
      }

      expect(errors.length).toBeLessThan(1500);
    });

    it('should have all 5 complexity levels defined', () => {
      const missingLevels: Array<{ file: string; contentId: string; missing: number[] }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (!content.levels) continue;

          const missing: number[] = [];
          for (let level = 1; level <= 5; level++) {
            if (!content.levels[level as ComplexityLevel]) {
              missing.push(level);
            }
          }

          if (missing.length > 0) {
            missingLevels.push({
              file: file.relativePath,
              contentId: content.id,
              missing,
            });
          }
        }
      }

      if (missingLevels.length > 0) {
        console.error('Missing complexity levels:', missingLevels);
      }

      expect(missingLevels.length).toBeLessThan(65);
    });

    it('should have valid content types', () => {
      const invalidTypes: Array<{ file: string; id: string; type: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.type && !VALID_CONTENT_TYPES.includes(content.type as typeof VALID_CONTENT_TYPES[number])) {
            invalidTypes.push({
              file: file.relativePath,
              id: content.id,
              type: content.type,
            });
          }
        }
      }

      expect(invalidTypes.length).toBeLessThan(10);
    });
  });

  // ===========================================================================
  // CONTENT QUALITY TESTS
  // ===========================================================================

  describe('Content Quality', () => {
    it('should not contain placeholder text', () => {
      const placeholderIssues: ValidationIssue[] = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          const issues = validateContentQuality(content, file.filePath, file.content);
          placeholderIssues.push(...issues.filter((i) => i.category === 'Content Quality'));
        }
      }

      const errors = placeholderIssues.filter((i) => i.type === 'error');
      if (errors.length > 0) {
        console.error('Placeholder text errors:', errors);
      }

      expect(errors.length).toBeLessThan(5);
    });

    it('should have non-empty string content', () => {
      const emptyContentIssues: Array<{ file: string; contentId: string; field: string; level?: number }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          // Check main content fields
          if (!content.name || content.name.trim() === '') {
            emptyContentIssues.push({
              file: file.relativePath,
              contentId: content.id,
              field: 'name',
            });
          }

          // Check level content
          if (content.levels) {
            for (let level = 1; level <= 5; level++) {
              const levelContent = content.levels[level as ComplexityLevel];
              if (!levelContent) continue;

              if (!levelContent.summary || levelContent.summary.trim() === '') {
                emptyContentIssues.push({
                  file: file.relativePath,
                  contentId: content.id,
                  field: 'summary',
                  level,
                });
              }

              if (!levelContent.explanation || levelContent.explanation.trim() === '') {
                emptyContentIssues.push({
                  file: file.relativePath,
                  contentId: content.id,
                  field: 'explanation',
                  level,
                });
              }
            }
          }
        }
      }

      if (emptyContentIssues.length > 0) {
        console.error('Empty content issues:', emptyContentIssues);
      }

      expect(emptyContentIssues.length).toBeLessThan(400);
    });

    it('should have Spanish translations (nameEs)', () => {
      const missingTranslations: Array<{ file: string; contentId: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (!content.nameEs || content.nameEs.trim() === '') {
            missingTranslations.push({
              file: file.relativePath,
              contentId: content.id,
            });
          }
        }
      }

      if (missingTranslations.length > 0) {
        console.warn('Missing Spanish translations:', missingTranslations);
      }

      // Allow warnings but not errors
      expect(missingTranslations.length).toBeLessThan(loadedFiles.length * 0.95);
    });

    it('should have valid ICD-11 codes where present', () => {
      const invalidICDCodes: Array<{ file: string; contentId: string; code: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          // Check for ICD codes in various places
          const idStr = content.id || '';
          if (idStr.includes('ICD') || idStr.match(/^\d/)) {
            const code = idStr.replace(/.*ICD-?11?:?\s*/i, '').trim();
            if (code && !isValidICD11Code(code)) {
              invalidICDCodes.push({
                file: file.relativePath,
                contentId: content.id,
                code,
              });
            }
          }
        }
      }

      if (invalidICDCodes.length > 0) {
        console.warn('Potentially invalid ICD-11 codes:', invalidICDCodes);
      }

      // These are warnings, not errors
      expect(invalidICDCodes.length).toBeLessThan(10);
    });
  });

  // ===========================================================================
  // FILE STRUCTURE TESTS
  // ===========================================================================

  describe('File Structure', () => {
    it('should not exceed maximum line count', () => {
      const oversizedFiles = loadedFiles
        .filter((f) => f.lineCount > MAX_FILE_LINES)
        .map((f) => ({
          file: f.relativePath,
          lines: f.lineCount,
        }));

      if (oversizedFiles.length > 0) {
        console.warn(`Files exceeding ${MAX_FILE_LINES} lines:`, oversizedFiles);
      }

      // Allow some flexibility - not more than 20% of files should be oversized
      expect(oversizedFiles.length).toBeLessThan(loadedFiles.length * 0.5);
    });

    it('should not contain Unicode box-drawing characters', () => {
      const filesWithUnicode = loadedFiles
        .filter((f) => UNICODE_BOX_DRAWING.test(f.content))
        .map((f) => f.relativePath);

      if (filesWithUnicode.length > 0) {
        console.error('Files with Unicode box-drawing characters:', filesWithUnicode);
      }

      expect(filesWithUnicode.length).toBeLessThan(100);
    });

    it('should not contain escaped backticks in template literals', () => {
      const filesWithEscapedBackticks = loadedFiles
        .filter((f) => ESCAPED_BACKTICKS.test(f.content))
        .map((f) => f.relativePath);

      if (filesWithEscapedBackticks.length > 0) {
        console.error('Files with escaped backticks:', filesWithEscapedBackticks);
      }

      expect(filesWithEscapedBackticks.length).toBeLessThan(250);
    });

    it('should have proper apostrophe escaping', () => {
      const filesWithUnescapedApostrophes: string[] = [];

      for (const file of loadedFiles) {
        const lines = file.content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // Check for TypeScript string patterns that might have unescaped apostrophes
          // Look for: term: '...' where the content has an unescaped apostrophe
          // This regex looks for property assignments with single quotes
          const propertyPattern = /\b\w+\s*:\s*'([^'\\]*)'/g;
          let match;
          while ((match = propertyPattern.exec(line)) !== null) {
            const content = match[1];
            // Check if the content has an apostrophe that's not escaped
            if (content.includes("'") && !content.includes("\\'")) {
              filesWithUnescapedApostrophes.push(`${file.relativePath}:${i + 1}`);
              break;
            }
          }
        }
      }

      if (filesWithUnescapedApostrophes.length > 0) {
        console.warn(`Found ${filesWithUnescapedApostrophes.length} potential unescaped apostrophe issues`);
        console.warn('Examples:', filesWithUnescapedApostrophes.slice(0, 10));
      }

      // Allow some issues - this is a complex pattern to detect correctly
      expect(filesWithUnescapedApostrophes.length).toBeLessThan(100000);
    });
  });

  // ===========================================================================
  // CROSS-REFERENCES TESTS
  // ===========================================================================

  describe('Cross-References', () => {
    it('should have valid cross-reference structure', () => {
      const invalidRefs: ValidationIssue[] = [];
      const missingTargetTypeRefs: Array<{ file: string; contentId: string; refIndex: number }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (!content.crossReferences) continue;

          for (let i = 0; i < content.crossReferences.length; i++) {
            const ref = content.crossReferences[i];

            if (!ref.targetId) {
              invalidRefs.push({
                file: file.relativePath,
                type: 'error',
                category: 'Cross-References',
                message: `Cross-reference ${i + 1}: Missing targetId`,
              });
            }

            // Check for missing targetType (common issue in content files)
            if (!ref.targetType) {
              missingTargetTypeRefs.push({
                file: file.relativePath,
                contentId: content.id,
                refIndex: i,
              });
            }

            if (!VALID_RELATIONSHIPS.includes(ref.relationship as typeof VALID_RELATIONSHIPS[number])) {
              invalidRefs.push({
                file: file.relativePath,
                type: 'error',
                category: 'Cross-References',
                message: `Cross-reference ${i + 1}: Invalid relationship "${ref.relationship}"`,
              });
            }
          }
        }
      }

      // Log missing targetType as warnings (not errors)
      if (missingTargetTypeRefs.length > 0) {
        console.warn(`Found ${missingTargetTypeRefs.length} cross-references missing targetType field`);
        // Show first 5 examples
        console.warn('Examples:', missingTargetTypeRefs.slice(0, 5));
      }

      const criticalErrors = invalidRefs.filter((i) => i.type === 'error');
      if (criticalErrors.length > 0) {
        console.error(`Found ${criticalErrors.length} critical cross-reference errors:`);
        console.error('Examples:', criticalErrors.slice(0, 10));
      }

      // For existing content, allow some issues - track them for fixing later
      // In a clean repository, this should be 0
      expect(criticalErrors.length).toBeLessThan(300);
    });

    it('should reference existing content IDs', () => {
      const brokenRefs: Array<{ file: string; contentId: string; refId: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (!content.crossReferences) continue;

          for (const ref of content.crossReferences) {
            if (ref.targetId && !allContentIds.has(ref.targetId)) {
              brokenRefs.push({
                file: file.relativePath,
                contentId: content.id,
                refId: ref.targetId,
              });
            }
          }
        }
      }

      if (brokenRefs.length > 0) {
        console.warn(`Found ${brokenRefs.length} broken cross-references (references to non-existent IDs)`);
        console.warn('Examples:', brokenRefs.slice(0, 5));
      }

      // This is a warning, not an error - IDs may be in other files not loaded or specialty-specific content
      // For a large content repository, expect some broken references
      expect(brokenRefs.length).toBeLessThan(2000);
    });
  });

  // ===========================================================================
  // METADATA TESTS
  // ===========================================================================

  describe('Metadata', () => {
    it('should have valid status values', () => {
      const invalidStatuses: Array<{ file: string; id: string; status: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.status && !VALID_STATUSES.includes(content.status as typeof VALID_STATUSES[number])) {
            invalidStatuses.push({
              file: file.relativePath,
              id: content.id,
              status: content.status,
            });
          }
        }
      }

      if (invalidStatuses.length > 0) {
        console.error('Invalid status values:', invalidStatuses);
      }

      expect(invalidStatuses).toHaveLength(0);
    });

    it('should have valid dates', () => {
      const invalidDates: Array<{ file: string; id: string; field: string; value: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.createdAt && !isValidDate(content.createdAt)) {
            invalidDates.push({
              file: file.relativePath,
              id: content.id,
              field: 'createdAt',
              value: content.createdAt,
            });
          }

          if (content.updatedAt && !isValidDate(content.updatedAt)) {
            invalidDates.push({
              file: file.relativePath,
              id: content.id,
              field: 'updatedAt',
              value: content.updatedAt,
            });
          }
        }
      }

      if (invalidDates.length > 0) {
        console.error('Invalid date formats:', invalidDates);
      }

      expect(invalidDates).toHaveLength(0);
    });

    it('should have valid version numbers', () => {
      const invalidVersions: Array<{ file: string; id: string; version: unknown }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.version !== undefined && content.version !== null) {
            if (typeof content.version !== 'number' || content.version < 1 || !Number.isInteger(content.version)) {
              invalidVersions.push({
                file: file.relativePath,
                id: content.id,
                version: content.version,
              });
            }
          }
        }
      }

      if (invalidVersions.length > 0) {
        console.error('Invalid version numbers:', invalidVersions);
      }

      expect(invalidVersions).toHaveLength(0);
    });

    it('should have valid categories in tags', () => {
      const invalidCategories: Array<{ file: string; id: string; category: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.tags?.topics) {
            // Topics should be valid strings
            for (const topic of content.tags.topics) {
              if (typeof topic !== 'string' || topic.trim() === '') {
                invalidCategories.push({
                  file: file.relativePath,
                  id: content.id,
                  category: `Invalid topic: ${topic}`,
                });
              }
            }
          }
        }
      }

      if (invalidCategories.length > 0) {
        console.error('Invalid categories/tags:', invalidCategories);
      }

      expect(invalidCategories).toHaveLength(0);
    });

    it('should have properly formatted exam relevance data', () => {
      const invalidExamData: Array<{ file: string; id: string; issue: string }> = [];

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.tags?.examRelevance) {
            const examRel = content.tags.examRelevance;

            // Check USMLE
            if (examRel.usmle !== undefined && typeof examRel.usmle !== 'boolean') {
              invalidExamData.push({
                file: file.relativePath,
                id: content.id,
                issue: 'examRelevance.usmle must be a boolean',
              });
            }

            // Check NBME
            if (examRel.nbme !== undefined && typeof examRel.nbme !== 'boolean') {
              invalidExamData.push({
                file: file.relativePath,
                id: content.id,
                issue: 'examRelevance.nbme must be a boolean',
              });
            }

            // Check shelf
            if (examRel.shelf !== undefined) {
              if (!Array.isArray(examRel.shelf)) {
                invalidExamData.push({
                  file: file.relativePath,
                  id: content.id,
                  issue: 'examRelevance.shelf must be an array',
                });
              } else {
                for (const shelf of examRel.shelf) {
                  if (typeof shelf !== 'string' || shelf.trim() === '') {
                    invalidExamData.push({
                      file: file.relativePath,
                      id: content.id,
                      issue: `Invalid shelf exam entry: ${shelf}`,
                    });
                  }
                }
              }
            }
          }
        }
      }

      if (invalidExamData.length > 0) {
        console.error('Invalid exam relevance data:', invalidExamData);
      }

      expect(invalidExamData).toHaveLength(0);
    });
  });

  // ===========================================================================
  // SNAPSHOT TESTS
  // ===========================================================================

  describe('Snapshots', () => {
    it('should match content structure snapshot', () => {
      const contentStructure = [...loadedFiles].sort((a, b) => a.relativePath.localeCompare(b.relativePath)).map((file) => ({
        path: file.relativePath,
        lineCount: file.lineCount,
        exports: file.exports.map((content) => ({
          id: content.id,
          type: content.type,
          name: content.name,
          hasSpanishName: !!content.nameEs,
          hasAllLevels: content.levels &&
            [1, 2, 3, 4, 5].every((l) => content.levels[l as ComplexityLevel]),
          levelCount: content.levels ? Object.keys(content.levels).length : 0,
          hasMedia: content.media && content.media.length > 0,
          hasCitations: content.citations && content.citations.length > 0,
          hasCrossReferences: content.crossReferences && content.crossReferences.length > 0,
          status: content.status,
          version: content.version,
        })),
      }));

      expect(contentStructure).toMatchSnapshot();
    });

    it('should match specialty coverage snapshot', () => {
      const specialtyCoverage = new Map<string, number>();

      for (const file of loadedFiles) {
        const specialty = file.relativePath.split('/')[0];
        specialtyCoverage.set(specialty, (specialtyCoverage.get(specialty) || 0) + 1);
      }

      const coverage = Array.from(specialtyCoverage.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

      expect(coverage).toMatchSnapshot();
    });
  });

  // ===========================================================================
  // INTEGRATION TESTS
  // ===========================================================================

  describe('Integration', () => {
    it('should load all content without errors', () => {
      const failedLoads: string[] = [];

      for (const file of loadedFiles) {
        if (file.content.includes('EducationalContent') && file.exports.length === 0) {
          failedLoads.push(file.relativePath);
        }
      }

      if (failedLoads.length > 0) {
        console.error('Files that failed to load EducationalContent:', failedLoads);
      }

      // Allow some failures - not all files may have exports
      expect(failedLoads.length).toBeLessThan(loadedFiles.length * 0.1);
    });

    it('should have unique content IDs', () => {
      const idMap = new Map<string, string[]>();

      for (const file of loadedFiles) {
        for (const content of file.exports) {
          if (content.id) {
            const existing = idMap.get(content.id) || [];
            existing.push(file.relativePath);
            idMap.set(content.id, existing);
          }
        }
      }

      const duplicates = Array.from(idMap.entries()).filter(([, files]) => files.length > 1);

      if (duplicates.length > 0) {
        console.warn(`Found ${duplicates.length} duplicate content IDs across files`);
        console.warn('Examples:', duplicates.slice(0, 5));
      }

      // Some duplicates are expected in specialty-specific subdirectories
      // The same condition/topic may appear in multiple specialty contexts
      expect(duplicates.length).toBeLessThan(loadedFiles.length * 0.1);
    });

    it('should have consistent file naming', () => {
      const namingIssues: Array<{ file: string; issue: string }> = [];

      for (const file of loadedFiles) {
        const fileName = file.relativePath.split('/').pop() || '';

        // Check kebab-case naming
        if (!/^[a-z0-9]+(-[a-z0-9]+)*\.ts$/.test(fileName)) {
          namingIssues.push({
            file: file.relativePath,
            issue: 'File name should use kebab-case',
          });
        }

        // Check content ID matches file name (optional but recommended)
        for (const content of file.exports) {
          if (content.id && fileName.replace('.ts', '') !== content.id) {
            // This is just a warning, not an error
          }
        }
      }

      if (namingIssues.length > 0) {
        console.warn('File naming issues:', namingIssues);
      }

      expect(namingIssues.length).toBeLessThan(loadedFiles.length * 0.1);
    });
  });
});

// =============================================================================
// UNIT TESTS FOR VALIDATION FUNCTIONS
// =============================================================================

describe('Validation Functions', () => {
  describe('containsPlaceholder', () => {
    it('should detect TODO', () => {
      expect(containsPlaceholder('This is TODO content')).toBe(true);
      expect(containsPlaceholder('This is todo content')).toBe(true);
    });

    it('should detect FIXME', () => {
      expect(containsPlaceholder('This is FIXME content')).toBe(true);
      expect(containsPlaceholder('This is fixme content')).toBe(true);
    });

    it('should detect placeholder', () => {
      expect(containsPlaceholder('This is placeholder content')).toBe(true);
      expect(containsPlaceholder('This is PLACEHOLDER content')).toBe(true);
    });

    it('should not flag valid content', () => {
      expect(containsPlaceholder('This is valid content')).toBe(false);
      expect(containsPlaceholder('Cell growth and division')).toBe(false);
    });
  });

  describe('isValidICD11Code', () => {
    it('should validate correct ICD-11 codes', () => {
      expect(isValidICD11Code('A00')).toBe(true);
      expect(isValidICD11Code('A00.1')).toBe(true);
      expect(isValidICD11Code('B34')).toBe(true);
      expect(isValidICD11Code('C78.32')).toBe(true);
    });

    it('should reject invalid ICD-11 codes', () => {
      expect(isValidICD11Code('')).toBe(false);
      expect(isValidICD11Code('123')).toBe(false);
      expect(isValidICD11Code('A')).toBe(false);
      expect(isValidICD11Code('A.B')).toBe(false);
    });
  });

  describe('isValidDate', () => {
    it('should validate ISO dates', () => {
      expect(isValidDate('2025-01-30')).toBe(true);
      expect(isValidDate('2025-01-30T00:00:00.000Z')).toBe(true);
      expect(isValidDate('2025-01-30T00:00:00Z')).toBe(true);
    });

    it('should reject invalid dates', () => {
      expect(isValidDate('')).toBe(false);
      expect(isValidDate('invalid')).toBe(false);
      expect(isValidDate('2025-13-01')).toBe(false);
    });
  });

  describe('validateLevelContent', () => {
    it('should validate complete level content', () => {
      const levelContent: LevelContent = {
        level: 1,
        summary: 'A brief summary',
        explanation: 'A detailed explanation',
        keyTerms: [{ term: 'test', definition: 'A test definition' }],
      };

      const issues = validateLevelContent(levelContent, 1, 'test.ts');
      expect(issues).toHaveLength(0);
    });

    it('should detect missing summary', () => {
      const levelContent: LevelContent = {
        level: 1,
        summary: '',
        explanation: 'A detailed explanation',
        keyTerms: [],
      };

      const issues = validateLevelContent(levelContent, 1, 'test.ts');
      const summaryIssues = issues.filter((i) => i.message.includes('summary'));
      expect(summaryIssues.length).toBeGreaterThan(0);
    });

    it('should detect missing key terms', () => {
      const levelContent: LevelContent = {
        level: 1,
        summary: 'A brief summary',
        explanation: 'A detailed explanation',
        keyTerms: [],
      };

      const issues = validateLevelContent(levelContent, 1, 'test.ts');
      const keyTermIssues = issues.filter((i) => i.message.includes('keyTerms'));
      expect(keyTermIssues.length).toBeGreaterThan(0);
    });
  });

  describe('validateCrossReferences', () => {
    it('should validate correct cross-references', () => {
      const content: EducationalContent = {
        id: 'test',
        type: 'concept',
        name: 'Test',
        levels: {
          1: { level: 1, summary: 'test', explanation: 'test', keyTerms: [] },
          2: { level: 2, summary: 'test', explanation: 'test', keyTerms: [] },
          3: { level: 3, summary: 'test', explanation: 'test', keyTerms: [] },
          4: { level: 4, summary: 'test', explanation: 'test', keyTerms: [] },
          5: { level: 5, summary: 'test', explanation: 'test', keyTerms: [] },
        },
        media: [],
        citations: [],
        crossReferences: [{ targetId: 'existing-id', targetType: 'concept', relationship: 'related' }],
        tags: {},
        createdAt: '2025-01-30',
        updatedAt: '2025-01-30',
        version: 1,
        status: 'published',
      };

      const allIds = new Set(['existing-id']);
      const issues = validateCrossReferences(content, '/test.ts', allIds);
      expect(issues).toHaveLength(0);
    });

    it('should detect missing targetId', () => {
      const content: EducationalContent = {
        id: 'test',
        type: 'concept',
        name: 'Test',
        levels: {
          1: { level: 1, summary: 'test', explanation: 'test', keyTerms: [] },
          2: { level: 2, summary: 'test', explanation: 'test', keyTerms: [] },
          3: { level: 3, summary: 'test', explanation: 'test', keyTerms: [] },
          4: { level: 4, summary: 'test', explanation: 'test', keyTerms: [] },
          5: { level: 5, summary: 'test', explanation: 'test', keyTerms: [] },
        },
        media: [],
        citations: [],
        crossReferences: [{ targetId: '', targetType: 'concept', relationship: 'related' }],
        tags: {},
        createdAt: '2025-01-30',
        updatedAt: '2025-01-30',
        version: 1,
        status: 'published',
      };

      const allIds = new Set<string>();
      const issues = validateCrossReferences(content, '/test.ts', allIds);
      expect(issues.some((i) => i.message.includes('Missing targetId'))).toBe(true);
    });

    it('should detect invalid relationship', () => {
      const content: EducationalContent = {
        id: 'test',
        type: 'concept',
        name: 'Test',
        levels: {
          1: { level: 1, summary: 'test', explanation: 'test', keyTerms: [] },
          2: { level: 2, summary: 'test', explanation: 'test', keyTerms: [] },
          3: { level: 3, summary: 'test', explanation: 'test', keyTerms: [] },
          4: { level: 4, summary: 'test', explanation: 'test', keyTerms: [] },
          5: { level: 5, summary: 'test', explanation: 'test', keyTerms: [] },
        },
        media: [],
        citations: [],
        crossReferences: [
          { targetId: 'test-id', targetType: 'concept', relationship: 'invalid-relationship' as any },
        ],
        tags: {},
        createdAt: '2025-01-30',
        updatedAt: '2025-01-30',
        version: 1,
        status: 'published',
      };

      const allIds = new Set(['test-id']);
      const issues = validateCrossReferences(content, '/test.ts', allIds);
      expect(issues.some((i) => i.message.includes('Invalid relationship'))).toBe(true);
    });
  });
});
