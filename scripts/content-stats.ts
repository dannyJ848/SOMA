#!/usr/bin/env npx tsx
/**
 * Content Statistics Dashboard
 * 
 * Analyzes all content in core/content/ and generates comprehensive statistics
 * Run with: npx tsx scripts/content-stats.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// =============================================================================
// Configuration
// =============================================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.resolve(__dirname, '../core/content');
const OUTPUT_DIR = path.resolve(__dirname, '..');
const STATS_FILE = path.join(OUTPUT_DIR, 'content-stats.json');
const MARKDOWN_FILE = path.join(OUTPUT_DIR, 'CONTENT_STATS.md');

const EXPECTED_SPECIALTIES = 25;
const EXPECTED_BODY_SYSTEMS = 11;

const BODY_SYSTEMS = [
  'cardiovascular',
  'respiratory',
  'digestive',
  'nervous',
  'immune',
  'renal',
  'reproductive',
  'integumentary',
  'musculoskeletal',
  'endocrine',
  'sensory'
];

const SPECIALTY_CATEGORIES = [
  'allergy-immunology',
  'anesthesiology',
  'cardiology',
  'dermatology',
  'emergency-medicine',
  'endocrinology',
  'gastroenterology',
  'geriatrics',
  'hematology',
  'infectious-disease',
  'internal-medicine',
  'nephrology',
  'neurology',
  'obstetrics-gynecology',
  'oncology',
  'ophthalmology',
  'orthopedics',
  'otolaryngology',
  'pathology',
  'pediatrics',
  'psychiatry',
  'pulmonology',
  'radiology',
  'rheumatology',
  'surgery',
  'urology'
];

// =============================================================================
// Types
// =============================================================================

interface FileStats {
  total: number;
  byCategory: Record<string, number>;
  databaseFiles: number;
  educationalFiles: number;
  indexFiles: number;
  bySize: {
    small: number;      // < 100 lines
    medium: number;     // 100-300 lines
    large: number;      // 300-600 lines
    xlarge: number;     // > 600 lines
  };
}

interface ContentMetrics {
  totalEntries: number;
  byComplexity: Record<string, number>;
  spanishTranslationPercent: number;
  averageContentLength: number;
  totalLines: number;
}

interface CoverageReport {
  specialties: {
    expected: number;
    found: number;
    coverage: number;
    missing: string[];
  };
  bodySystems: {
    expected: number;
    found: number;
    coverage: number;
    missing: string[];
  };
  contentDomains: string[];
  gaps: string[];
}

interface QualityMetrics {
  filesWithPlaceholders: number;
  filesWithTODOs: number;
  filesOver600Lines: string[];
  filesMissingSpanish: number;
  unicodeIssues: number;
  potentialIssues: string[];
}

interface GrowthMetrics {
  previousStats?: ContentStatistics;
  newFiles: number;
  modifiedFiles: number;
  growthRate: number;
}

interface ContentStatistics {
  timestamp: string;
  version: string;
  fileStats: FileStats;
  contentMetrics: ContentMetrics;
  coverage: CoverageReport;
  quality: QualityMetrics;
  growth: GrowthMetrics;
}

// =============================================================================
// File Analysis Functions
// =============================================================================

/**
 * Count files matching a specific pattern
 */
function countFilesByPattern(pattern: string, dir: string = CONTENT_DIR): number {
  try {
    const result = execSync(
      `find "${dir}" -type f -name "*.ts" | grep -E "${pattern}" | wc -l`,
      { encoding: 'utf-8', cwd: dir }
    );
    return parseInt(result.trim(), 10) || 0;
  } catch {
    return 0;
  }
}

/**
 * Get all TypeScript files recursively
 */
function getAllTypeScriptFiles(dir: string = CONTENT_DIR): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  try {
    traverse(dir);
  } catch (error) {
    console.error(`Error traversing directory: ${error}`);
  }
  
  return files;
}

/**
 * Categorize files by directory structure
 */
function categorizeFiles(files: string[]): Record<string, number> {
  const categories: Record<string, number> = {};
  
  for (const file of files) {
    const relativePath = path.relative(CONTENT_DIR, file);
    const parts = relativePath.split(path.sep);
    
    if (parts.length > 0) {
      const category = parts[0];
      categories[category] = (categories[category] || 0) + 1;
    }
  }
  
  return categories;
}

/**
 * Analyze content quality of a file
 */
function analyzeContentQuality(filepath: string): {
  hasPlaceholders: boolean;
  hasTODOs: boolean;
  hasSpanish: boolean;
  lineCount: number;
  hasUnicodeIssues: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    const lines = content.split('\n');
    const lineCount = lines.length;
    
    // Check for placeholders
    const hasPlaceholders = /\b(TODO|FIXME|XXX|PLACEHOLDER|stub|coming soon)\b/i.test(content);
    if (hasPlaceholders) {
      issues.push('Contains placeholders');
    }
    
    // Check for TODOs
    const hasTODOs = /TODO|FIXME/i.test(content);
    if (hasTODOs) {
      issues.push('Contains TODOs/FIXMEs');
    }
    
    // Check for Spanish translations
    const hasSpanish = /es:|spanish:|traducción|español/i.test(content) || 
                       /descriptionEs|explanationEs|nameEs/i.test(content);
    
    // Check for Unicode issues (excluding allowed characters)
    const hasUnicodeIssues = /[├│└×→↑αβ]/.test(content);
    if (hasUnicodeIssues) {
      issues.push('Contains problematic Unicode characters');
    }
    
    return {
      hasPlaceholders,
      hasTODOs,
      hasSpanish,
      lineCount,
      hasUnicodeIssues,
      issues
    };
  } catch (error) {
    return {
      hasPlaceholders: false,
      hasTODOs: false,
      hasSpanish: false,
      lineCount: 0,
      hasUnicodeIssues: false,
      issues: [`Error reading file: ${error}`]
    };
  }
}

/**
 * Count entries in content files
 */
function countEntries(files: string[]): { total: number; byComplexity: Record<string, number> } {
  let total = 0;
  const byComplexity: Record<string, number> = {
    'elementary': 0,
    'middle': 0,
    'high': 0,
    'undergrad': 0,
    'medical': 0
  };
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      
      // Count complexity level mentions
      byComplexity['elementary'] += (content.match(/complexity.*elementary|level.*1|grade.*5-8/i) || []).length;
      byComplexity['middle'] += (content.match(/complexity.*middle|level.*2|grade.*6-8/i) || []).length;
      byComplexity['high'] += (content.match(/complexity.*high|level.*3|grade.*9-12/i) || []).length;
      byComplexity['undergrad'] += (content.match(/complexity.*undergrad|level.*4|college/i) || []).length;
      byComplexity['medical'] += (content.match(/complexity.*medical|level.*5|graduate/i) || []).length;
      
      // Estimate total entries by export patterns
      total += (content.match(/export (const|let|var)\s+\w+Entry/i) || []).length;
      total += (content.match(/:\s*ContentEntry\s*=/gi) || []).length;
    } catch {
      // Skip unreadable files
    }
  }
  
  return { total: Math.max(total, files.length), byComplexity };
}

/**
 * Generate coverage report
 */
function generateCoverageReport(files: string[]): CoverageReport {
  const foundCategories = categorizeFiles(files);
  const categoryNames = Object.keys(foundCategories).map(c => c.toLowerCase());
  
  // Check specialties
  const foundSpecialties = SPECIALTY_CATEGORIES.filter(s => 
    categoryNames.some(c => c.includes(s) || s.includes(c))
  );
  const missingSpecialties = SPECIALTY_CATEGORIES.filter(s => 
    !categoryNames.some(c => c.includes(s) || s.includes(c))
  );
  
  // Check body systems
  const foundSystems = BODY_SYSTEMS.filter(sys => 
    categoryNames.some(c => c.includes(sys) || sys.includes(c))
  );
  const missingSystems = BODY_SYSTEMS.filter(sys => 
    !categoryNames.some(c => c.includes(sys) || sys.includes(c))
  );
  
  // Identify content domains
  const domains = Array.from(new Set([
    ...foundSpecialties,
    ...foundSystems,
    ...categoryNames.filter(c => 
      ['conditions', 'anatomy', 'procedures', 'medications', 'symptoms'].some(d => c.includes(d))
    )
  ]));
  
  // Identify gaps
  const gaps: string[] = [];
  if (missingSpecialties.length > 0) {
    gaps.push(`Missing specialties: ${missingSpecialties.slice(0, 5).join(', ')}${missingSpecialties.length > 5 ? '...' : ''}`);
  }
  if (missingSystems.length > 0) {
    gaps.push(`Missing body systems: ${missingSystems.join(', ')}`);
  }
  
  return {
    specialties: {
      expected: EXPECTED_SPECIALTIES,
      found: foundSpecialties.length,
      coverage: Math.round((foundSpecialties.length / EXPECTED_SPECIALTIES) * 100),
      missing: missingSpecialties
    },
    bodySystems: {
      expected: EXPECTED_BODY_SYSTEMS,
      found: foundSystems.length,
      coverage: Math.round((foundSystems.length / EXPECTED_BODY_SYSTEMS) * 100),
      missing: missingSystems
    },
    contentDomains: domains,
    gaps
  };
}

/**
 * Load previous statistics for comparison
 */
function loadPreviousStats(): ContentStatistics | undefined {
  try {
    if (fs.existsSync(STATS_FILE)) {
      const data = fs.readFileSync(STATS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch {
    // No previous stats
  }
  return undefined;
}

/**
 * Calculate growth metrics
 */
function calculateGrowthMetrics(
  currentFiles: string[], 
  previousStats?: ContentStatistics
): GrowthMetrics {
  if (!previousStats) {
    return {
      newFiles: currentFiles.length,
      modifiedFiles: 0,
      growthRate: 0
    };
  }
  
  // Count new files by checking if they're newer than previous run
  // This is simplified - in production, might track file hashes
  const newFiles = currentFiles.length - previousStats.fileStats.total;
  const growthRate = previousStats.fileStats.total > 0 
    ? ((currentFiles.length - previousStats.fileStats.total) / previousStats.fileStats.total) * 100
    : 0;
  
  return {
    previousStats,
    newFiles: Math.max(0, newFiles),
    modifiedFiles: 0, // Would need git history for accurate count
    growthRate: Math.round(growthRate * 10) / 10
  };
}

// =============================================================================
// Export Functions
// =============================================================================

/**
 * Export statistics to JSON
 */
function exportToJSON(stats: ContentStatistics): void {
  fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
  console.log(`📄 JSON report saved: ${STATS_FILE}`);
}

/**
 * Export statistics to Markdown
 */
function exportToMarkdown(stats: ContentStatistics): void {
  const lines: string[] = [
    '# Content Statistics Dashboard',
    '',
    `**Generated:** ${new Date(stats.timestamp).toLocaleString()}  `,
    `**Version:** ${stats.version}`,
    '',
    '---',
    '',
    '## 📊 File Counts',
    '',
    '| Metric | Value |',
    '|--------|-------|',
    `| Total TypeScript Files | ${stats.fileStats.total} |`,
    `| Database Files | ${stats.fileStats.databaseFiles} |`,
    `| Educational Content Files | ${stats.fileStats.educationalFiles} |`,
    `| Index Files | ${stats.fileStats.indexFiles} |`,
    '',
    '### Files by Category',
    '',
    '| Category | Count |',
    '|----------|-------|'
  ];
  
  // Sort categories by count (descending)
  const sortedCategories = Object.entries(stats.fileStats.byCategory)
    .sort(([,a], [,b]) => b - a);
  
  for (const [category, count] of sortedCategories.slice(0, 20)) {
    lines.push(`| ${category} | ${count} |`);
  }
  
  if (sortedCategories.length > 20) {
    lines.push(`| ... and ${sortedCategories.length - 20} more | - |`);
  }
  
  lines.push(
    '',
    '### Files by Size',
    '',
    '| Category | Range | Count |',
    '|----------|-------|-------|',
    `| Small | < 100 lines | ${stats.fileStats.bySize.small} |`,
    `| Medium | 100-300 lines | ${stats.fileStats.bySize.medium} |`,
    `| Large | 300-600 lines | ${stats.fileStats.bySize.large} |`,
    `| Extra Large | > 600 lines | ${stats.fileStats.bySize.xlarge} |`,
    '',
    '---',
    '',
    '## 📈 Content Metrics',
    '',
    '| Metric | Value |',
    '|--------|-------|',
    `| Total Entries | ${stats.contentMetrics.totalEntries.toLocaleString()} |`,
    `| Average Content Length | ${stats.contentMetrics.averageContentLength} lines |`,
    `| Total Lines of Code | ${stats.contentMetrics.totalLines.toLocaleString()} |`,
    `| Spanish Translation Coverage | ${stats.contentMetrics.spanishTranslationPercent}% |`,
    '',
    '### Entries by Complexity Level',
    '',
    '| Level | Count |',
    '|-------|-------|'
  );
  
  for (const [level, count] of Object.entries(stats.contentMetrics.byComplexity)) {
    lines.push(`| ${level} | ${count} |`);
  }
  
  lines.push(
    '',
    '---',
    '',
    '## 🎯 Coverage Analysis',
    '',
    '### Specialties',
    '',
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Expected | ${stats.coverage.specialties.expected} |`,
    `| Found | ${stats.coverage.specialties.found} |`,
    `| Coverage | ${stats.coverage.specialties.coverage}% |`,
    ''
  );
  
  if (stats.coverage.specialties.missing.length > 0) {
    lines.push(
      '**Missing Specialties:**',
      ''
    );
    for (const missing of stats.coverage.specialties.missing.slice(0, 10)) {
      lines.push(`- ${missing}`);
    }
    if (stats.coverage.specialties.missing.length > 10) {
      lines.push(`- ... and ${stats.coverage.specialties.missing.length - 10} more`);
    }
    lines.push('');
  }
  
  lines.push(
    '### Body Systems',
    '',
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Expected | ${stats.coverage.bodySystems.expected} |`,
    `| Found | ${stats.coverage.bodySystems.found} |`,
    `| Coverage | ${stats.coverage.bodySystems.coverage}% |`,
    ''
  );
  
  if (stats.coverage.bodySystems.missing.length > 0) {
    lines.push(
      '**Missing Body Systems:**',
      ''
    );
    for (const missing of stats.coverage.bodySystems.missing) {
      lines.push(`- ${missing}`);
    }
    lines.push('');
  }
  
  lines.push(
    '### Content Domains',
    ''
  );
  
  for (const domain of stats.coverage.contentDomains.slice(0, 20)) {
    lines.push(`- ${domain}`);
  }
  
  if (stats.coverage.contentDomains.length > 20) {
    lines.push(`- ... and ${stats.coverage.contentDomains.length - 20} more`);
  }
  
  if (stats.coverage.gaps.length > 0) {
    lines.push(
      '',
      '### ⚠️ Coverage Gaps',
      ''
    );
    for (const gap of stats.coverage.gaps) {
      lines.push(`- ${gap}`);
    }
  }
  
  lines.push(
    '',
    '---',
    '',
    '## ✅ Quality Metrics',
    '',
    '| Metric | Value |',
    '|--------|-------|',
    `| Files with Placeholders | ${stats.quality.filesWithPlaceholders} |`,
    `| Files with TODOs | ${stats.quality.filesWithTODOs} |`,
    `| Files Missing Spanish | ${stats.quality.filesMissingSpanish} |`,
    `| Unicode Issues | ${stats.quality.unicodeIssues} |`,
    `| Files Over 600 Lines | ${stats.quality.filesOver600Lines.length} |`
  );
  
  if (stats.quality.filesOver600Lines.length > 0) {
    lines.push(
      '',
      '### Large Files (> 600 lines)',
      ''
    );
    for (const file of stats.quality.filesOver600Lines.slice(0, 15)) {
      lines.push(`- \`${file}\``);
    }
    if (stats.quality.filesOver600Lines.length > 15) {
      lines.push(`- ... and ${stats.quality.filesOver600Lines.length - 15} more`);
    }
  }
  
  if (stats.quality.potentialIssues.length > 0) {
    lines.push(
      '',
      '### Potential Issues',
      ''
    );
    for (const issue of stats.quality.potentialIssues.slice(0, 10)) {
      lines.push(`- ${issue}`);
    }
    if (stats.quality.potentialIssues.length > 10) {
      lines.push(`- ... and ${stats.quality.potentialIssues.length - 10} more`);
    }
  }
  
  lines.push(
    '',
    '---',
    '',
    '📊 **Growth Tracking**',
    ''
  );
  
  if (stats.growth.previousStats) {
    lines.push(
      '| Metric | Value |',
      '|--------|-------|',
      `| New Files | ${stats.growth.newFiles} |`,
      `| Growth Rate | ${stats.growth.growthRate}% |`,
      '| Previous Run | ' + new Date(stats.growth.previousStats.timestamp).toLocaleString() + ' |',
      ''
    );
  } else {
    lines.push(
      '> ℹ️ No previous statistics found for comparison.',
      '',
      `| Metric | Value |`,
      `|--------|-------|`,
      `| Total Files | ${stats.fileStats.total} |`,
      '| Previous Run | First run |',
      ''
    );
  }
  
  lines.push(
    '---',
    '',
    '*This dashboard is auto-generated. Run `npx tsx scripts/content-stats.ts` to update.*'
  );
  
  fs.writeFileSync(MARKDOWN_FILE, lines.join('\n'));
  console.log(`📝 Markdown report saved: ${MARKDOWN_FILE}`);
}

/**
 * Pretty print statistics to console
 */
function printPrettyStats(stats: ContentStatistics): void {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║           CONTENT STATISTICS DASHBOARD                       ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
  
  console.log(`📅 Generated: ${new Date(stats.timestamp).toLocaleString()}`);
  console.log(`📦 Version: ${stats.version}\n`);
  
  // File Counts
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 FILE COUNTS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Total TypeScript Files:     ${stats.fileStats.total.toString().padStart(6)}`);
  console.log(`  Database Files:             ${stats.fileStats.databaseFiles.toString().padStart(6)}`);
  console.log(`  Educational Content:        ${stats.fileStats.educationalFiles.toString().padStart(6)}`);
  console.log(`  Index Files:                ${stats.fileStats.indexFiles.toString().padStart(6)}`);
  console.log();
  
  // Top Categories
  console.log('  📁 Top Categories:');
  const sortedCategories = Object.entries(stats.fileStats.byCategory)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8);
  for (const [category, count] of sortedCategories) {
    const bar = '█'.repeat(Math.min(Math.floor(count / 5), 20));
    console.log(`     ${category.padEnd(20)} ${count.toString().padStart(4)} ${bar}`);
  }
  console.log();
  
  // Content Metrics
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📈 CONTENT METRICS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Total Entries:              ${stats.contentMetrics.totalEntries.toLocaleString().padStart(6)}`);
  console.log(`  Average File Length:        ${stats.contentMetrics.averageContentLength.toString().padStart(6)} lines`);
  console.log(`  Total Lines of Code:        ${stats.contentMetrics.totalLines.toLocaleString().padStart(6)}`);
  console.log(`  Spanish Translation:        ${stats.contentMetrics.spanishTranslationPercent.toString().padStart(6)}%`);
  console.log();
  
  // Coverage
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎯 COVERAGE ANALYSIS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  const specBar = '█'.repeat(stats.coverage.specialties.coverage / 5) + 
                  '░'.repeat((100 - stats.coverage.specialties.coverage) / 5);
  console.log(`  Specialties:    ${stats.coverage.specialties.found}/${stats.coverage.specialties.expected} (${stats.coverage.specialties.coverage}%) ${specBar}`);
  
  const sysBar = '█'.repeat(stats.coverage.bodySystems.coverage / 5) + 
                 '░'.repeat((100 - stats.coverage.bodySystems.coverage) / 5);
  console.log(`  Body Systems:   ${stats.coverage.bodySystems.found}/${stats.coverage.bodySystems.expected} (${stats.coverage.bodySystems.coverage}%) ${sysBar}`);
  console.log();
  
  // Quality Metrics
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ QUALITY METRICS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Files with Placeholders:    ${stats.quality.filesWithPlaceholders.toString().padStart(6)}`);
  console.log(`  Files with TODOs:           ${stats.quality.filesWithTODOs.toString().padStart(6)}`);
  console.log(`  Files Missing Spanish:      ${stats.quality.filesMissingSpanish.toString().padStart(6)}`);
  console.log(`  Unicode Issues:             ${stats.quality.unicodeIssues.toString().padStart(6)}`);
  console.log(`  Files Over 600 Lines:       ${stats.quality.filesOver600Lines.length.toString().padStart(6)}`);
  console.log();
  
  if (stats.quality.filesOver600Lines.length > 0) {
    console.log('  📄 Largest Files:');
    for (const file of stats.quality.filesOver600Lines.slice(0, 5)) {
      const shortPath = file.replace(CONTENT_DIR + '/', '');
      console.log(`     ⚠️  ${shortPath}`);
    }
    console.log();
  }
  
  // Growth
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 GROWTH TRACKING');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (stats.growth.previousStats) {
    const growthSymbol = stats.growth.growthRate >= 0 ? '📈' : '📉';
    console.log(`  ${growthSymbol} Growth Rate: ${stats.growth.growthRate}%`);
    console.log(`  📝 New Files: ${stats.growth.newFiles}`);
    console.log(`  🕐 Previous: ${new Date(stats.growth.previousStats.timestamp).toLocaleDateString()}`);
  } else {
    console.log('  ℹ️  First run - no previous data for comparison');
  }
  console.log();
  
  // Summary
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📋 SUMMARY');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  const healthScore = Math.round(
    (stats.coverage.specialties.coverage + 
     stats.coverage.bodySystems.coverage + 
     stats.contentMetrics.spanishTranslationPercent) / 3
  );
  
  let healthEmoji = '🔴';
  if (healthScore > 80) healthEmoji = '🟢';
  else if (healthScore > 60) healthEmoji = '🟡';
  else if (healthScore > 40) healthEmoji = '🟠';
  
  console.log(`  ${healthEmoji} Overall Health Score: ${healthScore}/100`);
  console.log(`  📁 Reports generated:`);
  console.log(`     • ${STATS_FILE.replace(OUTPUT_DIR + '/', '')}`);
  console.log(`     • ${MARKDOWN_FILE.replace(OUTPUT_DIR + '/', '')}`);
  console.log();
  console.log('═══════════════════════════════════════════════════════════\n');
}

// =============================================================================
// Main
// =============================================================================

function generateStatistics(): ContentStatistics {
  console.log('🔍 Analyzing content...\n');
  
  // Get all files
  const allFiles = getAllTypeScriptFiles();
  console.log(`Found ${allFiles.length} TypeScript files`);
  
  // File statistics
  const categories = categorizeFiles(allFiles);
  const indexFiles = allFiles.filter(f => path.basename(f) === 'index.ts').length;
  const databaseFiles = allFiles.filter(f => 
    f.includes('database') || 
    f.includes('registry') || 
    f.includes('entries')
  ).length;
  
  // Analyze each file
  let totalLines = 0;
  let filesWithSpanish = 0;
  let filesWithPlaceholders = 0;
  let filesWithTODOs = 0;
  let unicodeIssues = 0;
  const filesOver600Lines: string[] = [];
  const potentialIssues: string[] = [];
  
  const sizeCategories = { small: 0, medium: 0, large: 0, xlarge: 0 };
  
  for (const file of allFiles) {
    const quality = analyzeContentQuality(file);
    totalLines += quality.lineCount;
    
    if (quality.hasSpanish) filesWithSpanish++;
    if (quality.hasPlaceholders) filesWithPlaceholders++;
    if (quality.hasTODOs) filesWithTODOs++;
    if (quality.hasUnicodeIssues) unicodeIssues++;
    
    if (quality.lineCount > 600) {
      filesOver600Lines.push(file.replace(CONTENT_DIR + '/', ''));
    }
    
    if (quality.issues.length > 0) {
      potentialIssues.push(`${file.replace(CONTENT_DIR + '/', '')}: ${quality.issues.join(', ')}`);
    }
    
    // Categorize by size
    if (quality.lineCount < 100) sizeCategories.small++;
    else if (quality.lineCount < 300) sizeCategories.medium++;
    else if (quality.lineCount < 600) sizeCategories.large++;
    else sizeCategories.xlarge++;
  }
  
  // Count entries
  const entryCounts = countEntries(allFiles);
  
  // Generate coverage report
  const coverage = generateCoverageReport(allFiles);
  
  // Calculate growth
  const previousStats = loadPreviousStats();
  const growth = calculateGrowthMetrics(allFiles, previousStats);
  
  const stats: ContentStatistics = {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    fileStats: {
      total: allFiles.length,
      byCategory: categories,
      databaseFiles,
      educationalFiles: allFiles.length - databaseFiles - indexFiles,
      indexFiles,
      bySize: sizeCategories
    },
    contentMetrics: {
      totalEntries: entryCounts.total,
      byComplexity: entryCounts.byComplexity,
      spanishTranslationPercent: Math.round((filesWithSpanish / allFiles.length) * 100),
      averageContentLength: Math.round(totalLines / allFiles.length),
      totalLines
    },
    coverage,
    quality: {
      filesWithPlaceholders,
      filesWithTODOs,
      filesOver600Lines,
      filesMissingSpanish: allFiles.length - filesWithSpanish,
      unicodeIssues,
      potentialIssues
    },
    growth
  };
  
  return stats;
}

function main(): void {
  console.log('\n🏥 Biological Self - Content Statistics Dashboard\n');
  
  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Error: Content directory not found: ${CONTENT_DIR}`);
    console.error('   Make sure you\'re running this from the project root.');
    process.exit(1);
  }
  
  // Generate statistics
  const stats = generateStatistics();
  
  // Print to console
  printPrettyStats(stats);
  
  // Export to JSON
  exportToJSON(stats);
  
  // Export to Markdown
  exportToMarkdown(stats);
  
  console.log('✅ Dashboard generation complete!\n');
}

// Run if executed directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` ||
                     import.meta.url === fileURLToPath(new URL(import.meta.url));
if (isMainModule) {
  main();
}

// Export for use as module
export {
  countFilesByPattern,
  analyzeContentQuality,
  generateCoverageReport,
  exportToJSON,
  exportToMarkdown,
  printPrettyStats,
  generateStatistics
};
