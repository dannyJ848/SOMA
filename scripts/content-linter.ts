#!/usr/bin/env node
/**
 * Content Quality Linter for Biological Self Educational Content
 *
 * Validates content files against quality standards including:
 * - Syntax & Structure
 * - Content Quality
 * - Formatting
 * - Medical Accuracy
 * - Cross-References
 *
 * Usage:
 *   npx tsx scripts/content-linter.ts          # Lint all content
 *   npx tsx scripts/content-linter.ts --fix    # Auto-fix where possible
 *   npx tsx scripts/content-linter.ts --check  # CI mode (fails on errors)
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// Types and Interfaces
// ============================================================================

type Severity = 'error' | 'warning' | 'info';

interface LintIssue {
  file: string;
  line: number;
  rule: string;
  severity: Severity;
  message: string;
  suggestion?: string;
}

interface LintRule {
  name: string;
  severity: Severity;
  check: (file: string, content: string) => LintIssue[];
}

interface LintReport {
  timestamp: string;
  totalFiles: number;
  issues: LintIssue[];
  summary: {
    errors: number;
    warnings: number;
    infos: number;
  };
  filesWithIssues: string[];
}

interface LinterConfig {
  contentDirs: string[];
  excludePatterns: string[];
  rules: {
    syntax: boolean;
    content: boolean;
    formatting: boolean;
    medical: boolean;
    crossReferences: boolean;
  };
  thresholds: {
    maxFileLines: number;
    minContentLength: number;
    maxContentLength: number;
  };
}

// ============================================================================
// Default Configuration
// ============================================================================

const DEFAULT_CONFIG: LinterConfig = {
  contentDirs: ['core/content'],
  excludePatterns: [
    '**/node_modules/**',
    '**/*.test.ts',
    '**/*.spec.ts',
    '**/types.ts',
    '**/index.ts',
  ],
  rules: {
    syntax: true,
    content: true,
    formatting: true,
    medical: true,
    crossReferences: true,
  },
  thresholds: {
    maxFileLines: 600,
    minContentLength: 50,
    maxContentLength: 50000,
  },
};

// ============================================================================
// Utility Functions
// ============================================================================

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  gray: '\x1b[90m',
  bold: '\x1b[1m',
};

function log(message: string, color: keyof typeof colors = 'reset'): void {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getLineNumber(content: string, index: number): number {
  return content.substring(0, index).split('\n').length;
}

function findLine(content: string, pattern: string | RegExp): number {
  const match = content.match(pattern);
  if (match && match.index !== undefined) {
    return getLineNumber(content, match.index);
  }
  return 1;
}

function loadConfig(): LinterConfig {
  const configPath = path.join(process.cwd(), '.content-linter.json');
  if (fs.existsSync(configPath)) {
    try {
      const userConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      return { ...DEFAULT_CONFIG, ...userConfig };
    } catch (e) {
      log('Warning: Failed to load .content-linter.json, using defaults', 'yellow');
    }
  }
  return DEFAULT_CONFIG;
}

// ============================================================================
// Lint Rules
// ============================================================================

const syntaxRules: LintRule[] = [
  {
    name: 'valid-typescript',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for unclosed template literals
      const templateMatches = content.match(/`[^`]*$/g);
      if (templateMatches) {
        issues.push({
          file,
          line: findLine(content, templateMatches[0]),
          rule: 'valid-typescript',
          severity: 'error',
          message: 'Unclosed template literal detected',
          suggestion: 'Ensure all template literals (backticks) are properly closed',
        });
      }
      
      // Check for mismatched braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        issues.push({
          file,
          line: 1,
          rule: 'valid-typescript',
          severity: 'error',
          message: `Mismatched braces: ${openBraces} opening, ${closeBraces} closing`,
          suggestion: 'Check for missing or extra braces',
        });
      }
      
      // Check for mismatched brackets
      const openBrackets = (content.match(/\[/g) || []).length;
      const closeBrackets = (content.match(/\]/g) || []).length;
      if (openBrackets !== closeBrackets) {
        issues.push({
          file,
          line: 1,
          rule: 'valid-typescript',
          severity: 'error',
          message: `Mismatched brackets: ${openBrackets} opening, ${closeBrackets} closing`,
          suggestion: 'Check for missing or extra brackets',
        });
      }
      
      // Check for mismatched parentheses
      const openParens = (content.match(/\(/g) || []).length;
      const closeParens = (content.match(/\)/g) || []).length;
      if (openParens !== closeParens) {
        issues.push({
          file,
          line: 1,
          rule: 'valid-typescript',
          severity: 'error',
          message: `Mismatched parentheses: ${openParens} opening, ${closeParens} closing`,
          suggestion: 'Check for missing or extra parentheses',
        });
      }
      
      return issues;
    },
  },
  {
    name: 'educational-content-interface',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for EducationalContent export
      if (!content.includes('EducationalContent')) {
        issues.push({
          file,
          line: 1,
          rule: 'educational-content-interface',
          severity: 'error',
          message: 'File does not use EducationalContent interface',
          suggestion: 'Import and use EducationalContent from types',
        });
        return issues;
      }
      
      // Check for required fields
      const requiredFields = ['id', 'type', 'name', 'levels', 'media', 'citations', 'crossReferences', 'tags'];
      for (const field of requiredFields) {
        if (!content.includes(`${field}:`) && !content.includes(`${field} :`)) {
          issues.push({
            file,
            line: 1,
            rule: 'educational-content-interface',
            severity: 'error',
            message: `Missing required field: ${field}`,
            suggestion: `Add ${field} to the EducationalContent object`,
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'export-statement',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      if (!content.includes('export default') && !content.includes('export const')) {
        issues.push({
          file,
          line: 1,
          rule: 'export-statement',
          severity: 'error',
          message: 'No export statement found',
          suggestion: 'Add export default or export const for the content',
        });
      }
      
      return issues;
    },
  },
  {
    name: 'all-levels-present',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for all 5 complexity levels
      const levels = [1, 2, 3, 4, 5];
      for (const level of levels) {
        const levelPattern = new RegExp(`\\b${level}\\s*:\\s*\\{`);
        if (!levelPattern.test(content)) {
          issues.push({
            file,
            line: 1,
            rule: 'all-levels-present',
            severity: 'error',
            message: `Missing complexity level ${level}`,
            suggestion: `Add level ${level} content`,
          });
        }
      }
      
      return issues;
    },
  },
];

const contentQualityRules: LintRule[] = [
  {
    name: 'no-placeholder-text',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const placeholders = ['TODO', 'FIXME', 'placeholder', 'content here', 'coming soon', 'to be added'];
      
      for (const placeholder of placeholders) {
        const regex = new RegExp(placeholder, 'gi');
        let match;
        while ((match = regex.exec(content)) !== null) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'no-placeholder-text',
            severity: 'error',
            message: `Placeholder text found: "${placeholder}"`,
            suggestion: 'Replace with actual content',
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'content-length',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const config = loadConfig();
      
      // Extract explanation content
      const explanationMatches = content.match(/explanation:\s*`([^`]+)`/g);
      if (explanationMatches) {
        for (const match of explanationMatches) {
          const explanationContent = match.replace(/explanation:\s*`/, '').replace(/`$/, '');
          if (explanationContent.length < config.thresholds.minContentLength) {
            issues.push({
              file,
              line: findLine(content, match),
              rule: 'content-length',
              severity: 'warning',
              message: `Explanation content too short (${explanationContent.length} chars)`,
              suggestion: `Expand content to at least ${config.thresholds.minContentLength} characters`,
            });
          }
        }
      }
      
      return issues;
    },
  },
  {
    name: 'no-empty-strings',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for empty strings
      const emptyStringPattern = /:\s*''|:\s*""/g;
      let match;
      while ((match = emptyStringPattern.exec(content)) !== null) {
        issues.push({
          file,
          line: getLineNumber(content, match.index),
          rule: 'no-empty-strings',
          severity: 'error',
          message: 'Empty string value found',
          suggestion: 'Add meaningful content or remove the field',
        });
      }
      
      return issues;
    },
  },
  {
    name: 'spanish-translation',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for Spanish name
      if (!content.includes('nameEs:')) {
        issues.push({
          file,
          line: 1,
          rule: 'spanish-translation',
          severity: 'warning',
          message: 'Missing Spanish translation (nameEs field)',
          suggestion: 'Add nameEs field for Spanish translation',
        });
      }
      
      return issues;
    },
  },
];

const formattingRules: LintRule[] = [
  {
    name: 'no-unicode-box-drawing',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const boxDrawingChars = /[├┤┼│─└┌┐┘┏┓┗┛━┃┣┫┳┻╋]/g;
      
      let match;
      while ((match = boxDrawingChars.exec(content)) !== null) {
        issues.push({
          file,
          line: getLineNumber(content, match.index),
          rule: 'no-unicode-box-drawing',
          severity: 'error',
          message: `Unicode box-drawing character found: "${match[0]}"`,
          suggestion: 'Replace with ASCII equivalent (+, -, |)',
        });
      }
      
      return issues;
    },
  },
  {
    name: 'no-escaped-backticks',
    severity: 'error',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const escapedBackticks = /\\`\\`\\`/g;
      
      let match;
      while ((match = escapedBackticks.exec(content)) !== null) {
        issues.push({
          file,
          line: getLineNumber(content, match.index),
          rule: 'no-escaped-backticks',
          severity: 'error',
          message: 'Escaped backticks (\\`\\`\\`) found - will cause parsing errors',
          suggestion: 'Use --- instead for markdown code blocks',
        });
      }
      
      return issues;
    },
  },
  {
    name: 'apostrophe-escaping',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Check for unescaped apostrophes in single-quoted strings
      const singleQuotePattern = /'[^']*'[^']*'/g;
      let match;
      while ((match = singleQuotePattern.exec(content)) !== null) {
        const str = match[0];
        // Check if there's an unescaped apostrophe inside
        const innerContent = str.slice(1, -1);
        if (innerContent.includes("'") && !innerContent.includes("\\'")) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'apostrophe-escaping',
            severity: 'warning',
            message: 'Potential unescaped apostrophe in single-quoted string',
            suggestion: "Escape with \\' or use double quotes",
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'file-length',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const config = loadConfig();
      const lines = content.split('\n').length;
      
      if (lines > config.thresholds.maxFileLines) {
        issues.push({
          file,
          line: 1,
          rule: 'file-length',
          severity: 'warning',
          message: `File too long (${lines} lines, max ${config.thresholds.maxFileLines})`,
          suggestion: 'Consider splitting content into multiple files',
        });
      }
      
      return issues;
    },
  },
];

const medicalAccuracyRules: LintRule[] = [
  {
    name: 'icd-11-format',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      // ICD-11 format: 1-4 alphanumeric characters, optional period and more
      const icd11Pattern = /icd11Code\s*:\s*['"]([^'"]+)['"]/gi;
      
      let match;
      while ((match = icd11Pattern.exec(content)) !== null) {
        const code = match[1];
        const validPattern = /^[A-Z0-9]{1,4}(\.[A-Z0-9]+)?$/i;
        if (!validPattern.test(code)) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'icd-11-format',
            severity: 'warning',
            message: `Invalid ICD-11 code format: "${code}"`,
            suggestion: 'Use format like "1A00" or "1A00.0"',
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'icd-10-pcs-format',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      // ICD-10-PCS format: 7 alphanumeric characters
      const icd10pcsPattern = /icd10pcs\s*:\s*['"]([^'"]+)['"]/gi;
      
      let match;
      while ((match = icd10pcsPattern.exec(content)) !== null) {
        const code = match[1];
        const validPattern = /^[A-HJ-NP-Z0-9]{7}$/;
        if (!validPattern.test(code)) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'icd-10-pcs-format',
            severity: 'warning',
            message: `Invalid ICD-10-PCS code format: "${code}"`,
            suggestion: 'Use 7 alphanumeric characters (no I or O)',
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'snomed-ct-format',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      // SNOMED CT format: 6-18 digit number
      const snomedPattern = /snomedCode\s*:\s*['"]([^'"]+)['"]/gi;
      
      let match;
      while ((match = snomedPattern.exec(content)) !== null) {
        const code = match[1];
        const validPattern = /^\d{6,18}$/;
        if (!validPattern.test(code)) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'snomed-ct-format',
            severity: 'warning',
            message: `Invalid SNOMED CT code format: "${code}"`,
            suggestion: 'Use 6-18 digit number',
          });
        }
      }
      
      return issues;
    },
  },
  {
    name: 'cpt-code-format',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      // CPT format: 5 digits
      const cptPattern = /cptCode\s*:\s*['"]([^'"]+)['"]/gi;
      
      let match;
      while ((match = cptPattern.exec(content)) !== null) {
        const code = match[1];
        const validPattern = /^\d{5}$/;
        if (!validPattern.test(code)) {
          issues.push({
            file,
            line: getLineNumber(content, match.index),
            rule: 'cpt-code-format',
            severity: 'warning',
            message: `Invalid CPT code format: "${code}"`,
            suggestion: 'Use 5 digit number',
          });
        }
      }
      
      return issues;
    },
  },
];

const crossReferenceRules: LintRule[] = [
  {
    name: 'valid-cross-references',
    severity: 'warning',
    check: (file: string, content: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      
      // Extract cross-reference IDs
      const refPattern = /targetId\s*:\s*['"]([^'"]+)['"]/g;
      const refs: string[] = [];
      let match;
      while ((match = refPattern.exec(content)) !== null) {
        refs.push(match[1]);
      }
      
      // Check if this file's ID matches any cross-references in other files
      // This is a simplified check - full validation would require loading all files
      if (refs.length === 0) {
        // Not an error, just informational
        issues.push({
          file,
          line: 1,
          rule: 'valid-cross-references',
          severity: 'info',
          message: 'No cross-references found',
          suggestion: 'Consider adding related content links',
        });
      }
      
      return issues;
    },
  },
];

// ============================================================================
// File Scanner
// ============================================================================

function findContentFiles(dirs: string[], excludePatterns: string[]): string[] {
  const files: string[] = [];
  const rootDir = path.resolve(__dirname, '..');
  
  for (const dir of dirs) {
    const fullDir = path.isAbsolute(dir) ? dir : path.join(rootDir, dir);
    if (!fs.existsSync(fullDir)) {
      log(`Warning: Directory not found: ${fullDir}`, 'yellow');
      continue;
    }
    
    scanDirectory(fullDir, files, excludePatterns, rootDir);
  }
  
  return files;
}

function scanDirectory(dir: string, files: string[], excludePatterns: string[], rootDir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(rootDir, fullPath);
    
    // Check exclude patterns
    const shouldExclude = excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(relativePath);
    });
    
    if (shouldExclude) continue;
    
    if (entry.isDirectory()) {
      scanDirectory(fullPath, files, excludePatterns, rootDir);
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }
}

// ============================================================================
// Issue Reporting
// ============================================================================

function generateConsoleReport(report: LintReport, verbose: boolean): void {
  console.log('\n' + '='.repeat(80));
  log('CONTENT LINT REPORT', 'bold');
  console.log('='.repeat(80));
  
  console.log(`\nTimestamp: ${report.timestamp}`);
  console.log(`Total Files Scanned: ${report.totalFiles}`);
  
  // Summary
  console.log('\n' + '-'.repeat(80));
  log('SUMMARY', 'bold');
  console.log('-'.repeat(80));
  log(`  Errors:   ${report.summary.errors}`, report.summary.errors > 0 ? 'red' : 'green');
  log(`  Warnings: ${report.summary.warnings}`, report.summary.warnings > 0 ? 'yellow' : 'green');
  log(`  Infos:    ${report.summary.infos}`, 'blue');
  
  if (report.issues.length === 0) {
    log('\n✓ All files passed linting!', 'green');
    return;
  }
  
  // Group by file
  console.log('\n' + '-'.repeat(80));
  log('ISSUES BY FILE', 'bold');
  console.log('-'.repeat(80));
  
  const fileGroups = new Map<string, LintIssue[]>();
  for (const issue of report.issues) {
    if (!fileGroups.has(issue.file)) {
      fileGroups.set(issue.file, []);
    }
    fileGroups.get(issue.file)!.push(issue);
  }
  
  for (const [file, issues] of fileGroups) {
    const relativeFile = path.relative(process.cwd(), file);
    console.log(`\n${relativeFile}`);
    
    // Sort by severity and line number
    issues.sort((a, b) => {
      const severityOrder = { error: 0, warning: 1, info: 2 };
      if (severityOrder[a.severity] !== severityOrder[b.severity]) {
        return severityOrder[a.severity] - severityOrder[b.severity];
      }
      return a.line - b.line;
    });
    
    for (const issue of issues) {
      const severityColor = issue.severity === 'error' ? 'red' : issue.severity === 'warning' ? 'yellow' : 'blue';
      const icon = issue.severity === 'error' ? '✗' : issue.severity === 'warning' ? '⚠' : 'ℹ';
      
      log(`  ${icon} Line ${issue.line}: [${issue.rule}] ${issue.message}`, severityColor);
      
      if (verbose && issue.suggestion) {
        log(`    Suggestion: ${issue.suggestion}`, 'gray');
      }
    }
  }
  
  console.log('\n' + '='.repeat(80));
}

function generateJSONReport(report: LintReport): void {
  const outputPath = path.join(process.cwd(), 'lint-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  log(`\nJSON report written to: ${outputPath}`, 'green');
}

function generateMarkdownReport(report: LintReport): void {
  const lines: string[] = [
    '# Content Lint Report',
    '',
    `**Timestamp:** ${report.timestamp}`,
    `**Total Files:** ${report.totalFiles}`,
    '',
    '## Summary',
    '',
    '| Severity | Count |',
    '|----------|-------|',
    `| Errors | ${report.summary.errors} |`,
    `| Warnings | ${report.summary.warnings} |`,
    `| Infos | ${report.summary.infos} |`,
    '',
  ];
  
  if (report.issues.length === 0) {
    lines.push('✓ All files passed linting!');
  } else {
    lines.push('## Issues by File', '');
    
    const fileGroups = new Map<string, LintIssue[]>();
    for (const issue of report.issues) {
      if (!fileGroups.has(issue.file)) {
        fileGroups.set(issue.file, []);
      }
      fileGroups.get(issue.file)!.push(issue);
    }
    
    for (const [file, issues] of fileGroups) {
      const relativeFile = path.relative(process.cwd(), file);
      lines.push(`### ${relativeFile}`, '');
      lines.push('| Line | Severity | Rule | Message |');
      lines.push('|------|----------|------|---------|');
      
      for (const issue of issues) {
        const severityIcon = issue.severity === 'error' ? '🔴' : issue.severity === 'warning' ? '🟡' : '🔵';
        lines.push(`| ${issue.line} | ${severityIcon} ${issue.severity} | ${issue.rule} | ${issue.message} |`);
      }
      
      lines.push('');
    }
  }
  
  const outputPath = path.join(process.cwd(), 'LINT_REPORT.md');
  fs.writeFileSync(outputPath, lines.join('\n'));
  log(`Markdown report written to: ${outputPath}`, 'green');
}

// ============================================================================
// Auto-fix
// ============================================================================

function autoFix(file: string, content: string): { fixed: boolean; newContent: string; fixes: string[] } {
  let newContent = content;
  const fixes: string[] = [];
  
  // Fix 1: Replace escaped backticks with ---
  if (content.includes('\\`\\`\\`')) {
    newContent = newContent.replace(/\\`\\`\\`/g, '---');
    fixes.push('Replaced escaped backticks with ---');
  }
  
  // Fix 2: Replace box-drawing characters
  const boxDrawingMap: Record<string, string> = {
    '├': '+',
    '┤': '+',
    '┼': '+',
    '│': '|',
    '─': '-',
    '└': '+',
    '┌': '+',
    '┐': '+',
    '┘': '+',
    '┏': '+',
    '┓': '+',
    '┗': '+',
    '┛': '+',
    '━': '-',
    '┃': '|',
    '┣': '+',
    '┫': '+',
    '┳': '+',
    '┻': '+',
    '╋': '+',
  };
  
  for (const [char, replacement] of Object.entries(boxDrawingMap)) {
    if (newContent.includes(char)) {
      newContent = newContent.split(char).join(replacement);
      fixes.push(`Replaced "${char}" with "${replacement}"`);
    }
  }
  
  // Fix 3: Replace Unicode arrows
  const arrowMap: Record<string, string> = {
    '→': '->',
    '←': '<-',
    '↑': 'increased',
    '↓': 'decreased',
    '×': 'x',
  };
  
  for (const [char, replacement] of Object.entries(arrowMap)) {
    if (newContent.includes(char)) {
      newContent = newContent.split(char).join(replacement);
      fixes.push(`Replaced "${char}" with "${replacement}"`);
    }
  }
  
  const fixed = newContent !== content;
  
  if (fixed) {
    fs.writeFileSync(file, newContent, 'utf-8');
  }
  
  return { fixed, newContent, fixes };
}

// ============================================================================
// Main Linter
// ============================================================================

function runLinter(options: { fix: boolean; check: boolean; verbose: boolean }): LintReport {
  const config = loadConfig();
  const report: LintReport = {
    timestamp: new Date().toISOString(),
    totalFiles: 0,
    issues: [],
    summary: {
      errors: 0,
      warnings: 0,
      infos: 0,
    },
    filesWithIssues: [],
  };
  
  log('Scanning for content files...', 'blue');
  const files = findContentFiles(config.contentDirs, config.excludePatterns);
  report.totalFiles = files.length;
  log(`Found ${files.length} files to lint`, 'green');
  
  const allRules: LintRule[] = [];
  if (config.rules.syntax) allRules.push(...syntaxRules);
  if (config.rules.content) allRules.push(...contentQualityRules);
  if (config.rules.formatting) allRules.push(...formattingRules);
  if (config.rules.medical) allRules.push(...medicalAccuracyRules);
  if (config.rules.crossReferences) allRules.push(...crossReferenceRules);
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relativeFile = path.relative(process.cwd(), file);
    
    if (options.verbose) {
      process.stdout.write(`\r[${i + 1}/${files.length}] Linting: ${relativeFile}`);
    }
    
    let content = fs.readFileSync(file, 'utf-8');
    
    // Auto-fix if enabled
    if (options.fix) {
      const { fixed, newContent, fixes } = autoFix(file, content);
      if (fixed) {
        content = newContent;
        if (options.verbose) {
          console.log('');
          fixes.forEach(fix => log(`  Fixed: ${fix}`, 'green'));
        }
      }
    }
    
    // Run all rules
    for (const rule of allRules) {
      try {
        const issues = rule.check(file, content);
        for (const issue of issues) {
          report.issues.push(issue);
          report.summary[issue.severity]++;
          
          if (!report.filesWithIssues.includes(file)) {
            report.filesWithIssues.push(file);
          }
        }
      } catch (e) {
        report.issues.push({
          file,
          line: 1,
          rule: rule.name,
          severity: 'error',
          message: `Rule execution failed: ${e instanceof Error ? e.message : String(e)}`,
        });
        report.summary.errors++;
      }
    }
  }
  
  if (options.verbose) {
    console.log('');
  }
  
  return report;
}

// ============================================================================
// CLI Entry Point
// ============================================================================

function main(): void {
  const args = process.argv.slice(2);
  const fix = args.includes('--fix');
  const check = args.includes('--check');
  const verbose = args.includes('--verbose') || args.includes('-v');
  const help = args.includes('--help') || args.includes('-h');
  
  if (help) {
    console.log(`
Content Quality Linter for Biological Self

Usage:
  npx tsx scripts/content-linter.ts [options]

Options:
  --fix      Auto-fix issues where possible
  --check    CI mode - exits with error code if issues found
  --verbose  Show detailed output
  --help     Show this help message

Examples:
  npx tsx scripts/content-linter.ts          # Lint all content
  npx tsx scripts/content-linter.ts --fix    # Auto-fix where possible
  npx tsx scripts/content-linter.ts --check  # CI mode (fails on errors)

Configuration:
  Create .content-linter.json in project root to customize rules.
`);
    process.exit(0);
  }
  
  log('Content Quality Linter v1.0', 'bold');
  log('===========================\n', 'bold');
  
  if (fix) {
    log('Auto-fix mode enabled', 'yellow');
  }
  
  if (check) {
    log('CI mode enabled - will exit with error code on issues', 'yellow');
  }
  
  const report = runLinter({ fix, check, verbose });
  
  // Generate reports
  generateConsoleReport(report, verbose);
  generateJSONReport(report);
  generateMarkdownReport(report);
  
  // Exit with appropriate code
  if (check && report.summary.errors > 0) {
    log('\n✗ Linting failed - errors found', 'red');
    process.exit(1);
  }
  
  if (report.summary.errors > 0) {
    log('\n⚠ Linting completed with errors', 'yellow');
  } else if (report.summary.warnings > 0) {
    log('\n✓ Linting completed with warnings', 'yellow');
  } else {
    log('\n✓ All files passed linting!', 'green');
  }
}

main();
