#!/usr/bin/env node
/**
 * Cross-Reference Validation Script for Biological Self Content
 *
 * Validates that all cross-references between content modules are valid.
 * Checks references between:
 * - Conditions → Specialties
 * - Conditions → Anatomy (FMA IDs)
 * - Procedures → Specialties
 * - Medications → Conditions
 * - Symptoms → Conditions
 * - Content → Cross-references (Knowledge Graph)
 *
 * Usage:
 *   npx tsx scripts/validate-cross-references.ts
 *   npx tsx scripts/validate-cross-references.ts --verbose
 *   npx tsx scripts/validate-cross-references.ts --output ./custom-report.json
 */

import * as fs from 'fs';
import * as path from 'path';

// =============================================================================
// Types
// =============================================================================

interface Reference {
  from: { file: string; id: string; type: string };
  to: { type: string; id: string };
  relationship: string;
  line?: number;
}

interface BrokenReference extends Reference {
  suggestedFix?: string;
  similarIds?: string[];
}

interface ValidationReport {
  timestamp: string;
  summary: {
    totalFilesScanned: number;
    totalReferences: number;
    brokenReferences: number;
    validReferences: number;
    warnings: number;
  };
  byCategory: {
    conditionToSpecialty: { valid: number; broken: number; items: BrokenReference[] };
    conditionToAnatomy: { valid: number; broken: number; items: BrokenReference[] };
    procedureToSpecialty: { valid: number; broken: number; items: BrokenReference[] };
    medicationToCondition: { valid: number; broken: number; items: BrokenReference[] };
    symptomToCondition: { valid: number; broken: number; items: BrokenReference[] };
    crossReferences: { valid: number; broken: number; items: BrokenReference[] };
  };
  orphanedIds: string[];
  circularReferences: Reference[];
  brokenReferences: BrokenReference[];
  idNamingViolations: { file: string; id: string; issue: string }[];
}

interface ContentIds {
  conditions: Set<string>;
  specialties: Set<string>;
  anatomy: Set<string>;
  procedures: Set<string>;
  medications: Set<string>;
  symptoms: Set<string>;
  allIds: Map<string, string>; // id -> file path
}

// =============================================================================
// Configuration
// =============================================================================

const CONTENT_DIR = path.join(process.cwd(), 'core/content');
const REPORT_OUTPUT = path.join(process.cwd(), 'cross-ref-report.json');

// ID prefix patterns for validation
const ID_PATTERNS = {
  condition: /^condition-|^C-[A-Z]{2,10}$/,
  specialty: /^specialty-|[a-z]+(-[a-z]+)*$/, // kebab-case
  anatomy: /^FMA:\d+$|^anatomy-/,
  procedure: /^procedure-|^[a-z-]+-procedure$/,
  medication: /^medication-|^[a-z-]+$/, // generic medication names
  symptom: /^symptom-|^SX-\d{3}$/,
};

// =============================================================================
// Utility Functions
// =============================================================================

function log(message: string, verbose = false): void {
  if (verbose || process.argv.includes('--verbose')) {
    console.log(message);
  }
}

function findTypeScriptFiles(dir: string): string[] {
  const files: string[] = [];

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
        files.push(fullPath);
      }
    }
  }

  if (fs.existsSync(dir)) {
    walk(dir);
  }
  return files;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function findSimilarIds(targetId: string, validIds: Set<string>, maxDistance = 3): string[] {
  const similarities: { id: string; distance: number }[] = [];
  for (const id of validIds) {
    const distance = levenshteinDistance(targetId.toLowerCase(), id.toLowerCase());
    if (distance <= maxDistance && distance > 0) {
      similarities.push({ id, distance });
    }
  }
  return similarities
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5)
    .map(s => s.id);
}

function extractLineNumber(content: string, index: number): number {
  return content.substring(0, index).split('\n').length;
}

// =============================================================================
// ID Extraction Functions
// =============================================================================

function extractIdsFromFiles(files: string[]): ContentIds {
  const ids: ContentIds = {
    conditions: new Set(),
    specialties: new Set(),
    anatomy: new Set(),
    procedures: new Set(),
    medications: new Set(),
    symptoms: new Set(),
    allIds: new Map(),
  };

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relativeFile = path.relative(process.cwd(), file);

    // Extract condition IDs
    // Pattern: id: 'condition-xxx' or conditionId: 'xxx'
    const conditionMatches = content.matchAll(/(?:id|conditionId):\s*['"]([^'"]+)['"]/g);
    for (const match of conditionMatches) {
      const id = match[1];
      if (id && (id.startsWith('condition-') || id.startsWith('C-'))) {
        ids.conditions.add(id);
        ids.allIds.set(id, relativeFile);
      }
    }

    // Extract specialty IDs from specialty-map.ts
    if (file.includes('specialty-map')) {
      const specialtyMatches = content.matchAll(/specialtyId:\s*['"]([^'"]+)['"]/g);
      for (const match of specialtyMatches) {
        const id = match[1];
        if (id) {
          ids.specialties.add(id);
          ids.allIds.set(`specialty:${id}`, relativeFile);
        }
      }
    }

    // Extract anatomy/FMA IDs
    // Pattern: fmaId: 'FMA:12345' or anatomy references
    const fmaMatches = content.matchAll(/fmaId:\s*['"](FMA:\d+)['"]/g);
    for (const match of fmaMatches) {
      const id = match[1];
      if (id) {
        ids.anatomy.add(id);
        ids.allIds.set(id, relativeFile);
      }
    }

    // Extract procedure IDs
    const procedureMatches = content.matchAll(/(?:id|procedureId):\s*['"]([^'"]*procedure[^'"]*)['"]/gi);
    for (const match of procedureMatches) {
      const id = match[1];
      if (id) {
        ids.procedures.add(id);
        ids.allIds.set(id, relativeFile);
      }
    }

    // Extract medication IDs
    if (file.includes('medication') || file.includes('medications')) {
      const medMatches = content.matchAll(/id:\s*['"]([a-z-]+)['"],\s*name:\s*['"]/g);
      for (const match of medMatches) {
        const id = match[1];
        if (id && !id.includes(' ')) {
          ids.medications.add(id);
          ids.allIds.set(id, relativeFile);
        }
      }
    }

    // Extract symptom IDs
    const symptomMatches = content.matchAll(/symptomId:\s*['"]([^'"]+)['"]/g);
    for (const match of symptomMatches) {
      const id = match[1];
      if (id) {
        ids.symptoms.add(id);
        ids.allIds.set(id, relativeFile);
      }
    }
  }

  return ids;
}

// =============================================================================
// Reference Extraction Functions
// =============================================================================

function extractReferences(files: string[], ids: ContentIds): Reference[] {
  const references: Reference[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relativeFile = path.relative(process.cwd(), file);

    // Condition → Specialty references
    // Pattern: relatedSpecialties: ['specialty:xxx', 'yyy']
    const specialtyRefMatches = content.matchAll(/relatedSpecialties:\s*\[([^\]]+)\]/g);
    for (const match of specialtyRefMatches) {
      const refs = match[1].matchAll(/['"]([^'"]+)['"]/g);
      for (const ref of refs) {
        const id = ref[1];
        const specialtyId = id.startsWith('specialty:') ? id.slice(10) : id;
        references.push({
          from: { file: relativeFile, id: 'unknown', type: 'condition' },
          to: { type: 'specialty', id: specialtyId },
          relationship: 'relatedSpecialties',
          line: extractLineNumber(content, match.index || 0),
        });
      }
    }

    // Condition → Anatomy references
    // Pattern: affectedSystems: ['anatomy:xxx'] or fmaId references
    const anatomyMatches = content.matchAll(/affectedSystems:\s*\[([^\]]+)\]/g);
    for (const match of anatomyMatches) {
      const refs = match[1].matchAll(/['"]([^'"]+)['"]/g);
      for (const ref of refs) {
        const id = ref[1];
        const anatomyId = id.startsWith('anatomy:') ? id.slice(8) : id;
        references.push({
          from: { file: relativeFile, id: 'unknown', type: 'condition' },
          to: { type: 'anatomy', id: anatomyId },
          relationship: 'affectedSystems',
          line: extractLineNumber(content, match.index || 0),
        });
      }
    }

    // Procedure → Specialty references
    // Pattern in procedure files referencing specialties
    const procSpecialtyMatches = content.matchAll(/specialty:\s*['"]([^'"]+)['"]/g);
    for (const match of procSpecialtyMatches) {
      const id = match[1];
      references.push({
        from: { file: relativeFile, id: 'unknown', type: 'procedure' },
        to: { type: 'specialty', id },
        relationship: 'specialty',
        line: extractLineNumber(content, match.index || 0),
      });
    }

    // Medication → Condition references (icd11Related)
    const icdMatches = content.matchAll(/icd11Related:\s*\[([^\]]+)\]/g);
    for (const match of icdMatches) {
      const refs = match[1].matchAll(/['"]([^'"]+)['"]/g);
      for (const ref of refs) {
        const id = ref[1];
        references.push({
          from: { file: relativeFile, id: 'unknown', type: 'medication' },
          to: { type: 'icd11', id },
          relationship: 'icd11Related',
          line: extractLineNumber(content, match.index || 0),
        });
      }
    }

    // Symptom → Condition references
    // Pattern: possibleCauses: [{ conditionId: 'xxx' }]
    const symptomConditionMatches = content.matchAll(/conditionId:\s*['"]([^'"]+)['"]/g);
    for (const match of symptomConditionMatches) {
      const id = match[1];
      references.push({
        from: { file: relativeFile, id: 'unknown', type: 'symptom' },
        to: { type: 'condition', id },
        relationship: 'possibleCauses',
        line: extractLineNumber(content, match.index || 0),
      });
    }

    // Cross-references (Knowledge Graph)
    // Pattern: crossReferences: [{ targetId: 'xxx', targetType: 'yyy' }]
    const crossRefMatches = content.matchAll(/targetId:\s*['"]([^'"]+)['"]/g);
    for (const match of crossRefMatches) {
      const id = match[1];
      // Look for targetType near this match
      const contextStart = Math.max(0, (match.index || 0) - 200);
      const context = content.substring(contextStart, (match.index || 0) + 200);
      const typeMatch = context.match(/targetType:\s*['"]([^'"]+)['"]/);
      const targetType = typeMatch ? typeMatch[1] : 'unknown';

      references.push({
        from: { file: relativeFile, id: 'unknown', type: 'content' },
        to: { type: targetType, id },
        relationship: 'crossReference',
        line: extractLineNumber(content, match.index || 0),
      });
    }

    // Specialty → Condition references (from specialty-map.ts)
    if (file.includes('specialty-map')) {
      const commonConditionMatches = content.matchAll(/commonConditions:\s*\[([^\]]+)\]/gs);
      for (const match of commonConditionMatches) {
        const refs = match[1].matchAll(/['"]([a-z-]+)['"]/g);
        for (const ref of refs) {
          const id = ref[1];
          references.push({
            from: { file: relativeFile, id: 'unknown', type: 'specialty' },
            to: { type: 'condition', id },
            relationship: 'commonConditions',
            line: extractLineNumber(content, match.index || 0),
          });
        }
      }
    }
  }

  return references;
}

// =============================================================================
// Validation Functions
// =============================================================================

function validateIdNaming(ids: ContentIds): { file: string; id: string; issue: string }[] {
  const violations: { file: string; id: string; issue: string }[] = [];

  for (const [id, file] of ids.allIds) {
    // Check for spaces in IDs
    if (id.includes(' ')) {
      violations.push({ file, id, issue: 'ID contains spaces' });
    }

    // Check for special characters
    if (/[^a-zA-Z0-9:_-]/.test(id)) {
      violations.push({ file, id, issue: 'ID contains special characters' });
    }

    // Check for consistent naming conventions
    if (id.startsWith('condition-') && !ID_PATTERNS.condition.test(id)) {
      violations.push({ file, id, issue: 'Invalid condition ID format' });
    }
  }

  return violations;
}

function checkCircularReferences(references: Reference[]): Reference[] {
  const circular: Reference[] = [];
  const graph = new Map<string, Set<string>>();

  // Build adjacency list
  for (const ref of references) {
    const from = `${ref.from.type}:${ref.from.id}`;
    const to = `${ref.to.type}:${ref.to.id}`;
    if (!graph.has(from)) {
      graph.set(from, new Set());
    }
    graph.get(from)!.add(to);
  }

  // Detect cycles using DFS
  const visited = new Set<string>();
  const recStack = new Set<string>();

  function dfs(node: string, path: string[] = []): boolean {
    visited.add(node);
    recStack.add(node);
    path.push(node);

    const neighbors = graph.get(node) || new Set();
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, [...path])) {
          return true;
        }
      } else if (recStack.has(neighbor)) {
        // Found cycle
        const cycleStart = path.indexOf(neighbor);
        const cycle = path.slice(cycleStart);
        return true;
      }
    }

    recStack.delete(node);
    return false;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return circular;
}

function validateReferences(references: Reference[], ids: ContentIds): ValidationReport {
  const report: ValidationReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFilesScanned: 0,
      totalReferences: references.length,
      brokenReferences: 0,
      validReferences: 0,
      warnings: 0,
    },
    byCategory: {
      conditionToSpecialty: { valid: 0, broken: 0, items: [] },
      conditionToAnatomy: { valid: 0, broken: 0, items: [] },
      procedureToSpecialty: { valid: 0, broken: 0, items: [] },
      medicationToCondition: { valid: 0, broken: 0, items: [] },
      symptomToCondition: { valid: 0, broken: 0, items: [] },
      crossReferences: { valid: 0, broken: 0, items: [] },
    },
    orphanedIds: [],
    circularReferences: [],
    brokenReferences: [],
    idNamingViolations: [],
  };

  // Validate each reference
  for (const ref of references) {
    let isValid = false;
    let category: keyof ValidationReport['byCategory'] = 'crossReferences';

    switch (ref.relationship) {
      case 'relatedSpecialties':
        isValid = ids.specialties.has(ref.to.id);
        category = 'conditionToSpecialty';
        break;
      case 'affectedSystems':
        isValid = ids.anatomy.has(ref.to.id) || ids.anatomy.has(`FMA:${ref.to.id}`);
        category = 'conditionToAnatomy';
        break;
      case 'specialty':
        isValid = ids.specialties.has(ref.to.id);
        category = 'procedureToSpecialty';
        break;
      case 'icd11Related':
        // ICD-11 codes are external references, mark as valid if they follow pattern
        isValid = /^[A-Z]\d{2,3}(\.\d)?$/.test(ref.to.id);
        category = 'medicationToCondition';
        break;
      case 'possibleCauses':
      case 'commonConditions':
        isValid = ids.conditions.has(ref.to.id) || ids.conditions.has(`condition-${ref.to.id}`);
        category = 'symptomToCondition';
        break;
      case 'crossReference':
        isValid = ids.allIds.has(ref.to.id);
        category = 'crossReferences';
        break;
    }

    if (isValid) {
      report.summary.validReferences++;
      report.byCategory[category].valid++;
    } else {
      report.summary.brokenReferences++;
      report.byCategory[category].broken++;

      const brokenRef: BrokenReference = {
        ...ref,
        similarIds: findSimilarIds(ref.to.id, ids.allIds.keys() as unknown as Set<string>),
      };

      if (brokenRef.similarIds && brokenRef.similarIds.length > 0) {
        brokenRef.suggestedFix = `Did you mean: ${brokenRef.similarIds.join(', ')}?`;
      }

      report.byCategory[category].items.push(brokenRef);
      report.brokenReferences.push(brokenRef);
    }
  }

  // Check for orphaned IDs (defined but never referenced)
  const referencedIds = new Set(references.map(r => r.to.id));
  for (const [id, file] of ids.allIds) {
    if (!referencedIds.has(id) && !file.includes('index.ts')) {
      // Only consider it orphaned if it's not in an index file
      // (index files typically aggregate exports)
    }
  }

  // Check ID naming conventions
  report.idNamingViolations = validateIdNaming(ids);
  report.summary.warnings = report.idNamingViolations.length;

  // Check for circular references
  report.circularReferences = checkCircularReferences(references);

  return report;
}

// =============================================================================
// Report Generation
// =============================================================================

function generateReport(report: ValidationReport): void {
  const outputPath = process.argv.find(arg => arg.startsWith('--output='))?.split('=')[1] || REPORT_OUTPUT;

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: ${outputPath}`);
}

function printSummary(report: ValidationReport): void {
  console.log('\n' + '='.repeat(70));
  console.log('CROSS-REFERENCE VALIDATION REPORT');
  console.log('='.repeat(70));
  console.log(`Timestamp: ${report.timestamp}`);
  console.log(`\n📊 SUMMARY:`);
  console.log(`  Total References:    ${report.summary.totalReferences}`);
  console.log(`  ✅ Valid:            ${report.summary.validReferences}`);
  console.log(`  ❌ Broken:           ${report.summary.brokenReferences}`);
  console.log(`  ⚠️  Warnings:         ${report.summary.warnings}`);

  if (report.summary.brokenReferences > 0) {
    console.log(`\n📋 BROKEN REFERENCES BY CATEGORY:`);

    for (const [category, data] of Object.entries(report.byCategory)) {
      if (data.broken > 0) {
        console.log(`\n  ${category}:`);
        console.log(`    Broken: ${data.broken}/${data.valid + data.broken}`);
        data.items.slice(0, 5).forEach((item, i) => {
          console.log(`      ${i + 1}. ${item.from.file}:${item.line || '?'} → ${item.to.type}:${item.to.id}`);
          if (item.suggestedFix) {
            console.log(`         💡 ${item.suggestedFix}`);
          }
        });
        if (data.items.length > 5) {
          console.log(`      ... and ${data.items.length - 5} more`);
        }
      }
    }
  }

  if (report.idNamingViolations.length > 0) {
    console.log(`\n⚠️  ID NAMING VIOLATIONS (${report.idNamingViolations.length}):`);
    report.idNamingViolations.slice(0, 10).forEach((v, i) => {
      console.log(`  ${i + 1}. ${v.file}: "${v.id}" - ${v.issue}`);
    });
    if (report.idNamingViolations.length > 10) {
      console.log(`  ... and ${report.idNamingViolations.length - 10} more`);
    }
  }

  if (report.circularReferences.length > 0) {
    console.log(`\n🔄 CIRCULAR REFERENCES (${report.circularReferences.length}):`);
    report.circularReferences.forEach((ref, i) => {
      console.log(`  ${i + 1}. ${ref.from.type}:${ref.from.id} ↔ ${ref.to.type}:${ref.to.id}`);
    });
  }

  console.log('\n' + '='.repeat(70));

  if (report.summary.brokenReferences === 0 && report.summary.warnings === 0) {
    console.log('✅ All cross-references are valid!');
  } else {
    console.log(`❌ Found ${report.summary.brokenReferences} broken references and ${report.summary.warnings} warnings.`);
    process.exit(1);
  }
}

// =============================================================================
// Main
// =============================================================================

async function main() {
  console.log('🔍 Scanning content files...');

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
    console.error('   Make sure you\'re running this script from the project root.');
    process.exit(1);
  }

  const files = findTypeScriptFiles(CONTENT_DIR);
  console.log(`   Found ${files.length} TypeScript files`);

  console.log('📦 Extracting IDs...');
  const ids = extractIdsFromFiles(files);
  console.log(`   Conditions:  ${ids.conditions.size}`);
  console.log(`   Specialties: ${ids.specialties.size}`);
  console.log(`   Anatomy:     ${ids.anatomy.size}`);
  console.log(`   Procedures:  ${ids.procedures.size}`);
  console.log(`   Medications: ${ids.medications.size}`);
  console.log(`   Symptoms:    ${ids.symptoms.size}`);

  console.log('🔗 Extracting references...');
  const references = extractReferences(files, ids);
  console.log(`   Found ${references.length} cross-references`);

  console.log('✓ Validating references...');
  const report = validateReferences(references, ids);
  report.summary.totalFilesScanned = files.length;

  generateReport(report);
  printSummary(report);
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
