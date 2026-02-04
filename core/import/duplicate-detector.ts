/**
 * Duplicate Detection Module
 *
 * Identifies potential duplicate records before import.
 * Uses fuzzy matching and confidence thresholds.
 */

import type {
  LabResult,
  Medication,
  Condition,
  ImagingReport,
} from '../biological-self/types.js';

// ============================================================================
// Types
// ============================================================================

export interface DuplicateMatch<T> {
  item: T;
  existing: T;
  confidence: number; // 0-1
  reason: string;
}

export interface DuplicateCheckResult<T> {
  newItems: T[];
  duplicates: DuplicateMatch<T>[];
  ambiguous: DuplicateMatch<T>[]; // Needs user confirmation
}

// ============================================================================
// String Similarity
// ============================================================================

/**
 * Calculate Levenshtein distance between two strings
 */
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
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Calculate string similarity (0-1)
 */
function stringSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  if (!a || !b) return 0;
  
  const distance = levenshteinDistance(a.toLowerCase(), b.toLowerCase());
  const maxLength = Math.max(a.length, b.length);
  
  return 1 - distance / maxLength;
}

/**
 * Normalize a string for comparison
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================================================
// Lab Result Duplicate Detection
// ============================================================================

export interface LabDuplicateOptions {
  nameThreshold?: number;    // String similarity threshold (0-1)
  dateThresholdHours?: number; // Hours within which to consider same collection
  valueThreshold?: number;   // Percent difference for numeric values
}

const DEFAULT_LAB_OPTIONS: LabDuplicateOptions = {
  nameThreshold: 0.85,
  dateThresholdHours: 24,
  valueThreshold: 0.05, // 5% difference
};

/**
 * Check if two dates are within threshold hours
 */
function datesWithinHours(a: Date, b: Date, hours: number): boolean {
  const diffMs = Math.abs(a.getTime() - b.getTime());
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours <= hours;
}

/**
 * Check if two lab results are potential duplicates
 */
export function checkLabDuplicate(
  newLab: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>,
  existingLab: LabResult,
  options: LabDuplicateOptions = {}
): { isDuplicate: boolean; confidence: number; reason: string } {
  const opts = { ...DEFAULT_LAB_OPTIONS, ...options };
  
  // Normalize test names
  const newName = normalizeString(newLab.testName);
  const existingName = normalizeString(existingLab.testName);
  
  // Calculate name similarity
  const nameSim = stringSimilarity(newName, existingName);
  
  // Check date proximity
  const datesClose = datesWithinHours(
    newLab.collectedAt,
    existingLab.collectedAt,
    opts.dateThresholdHours!
  );
  
  // Check value similarity for numeric values
  let valueSim = 1;
  if (typeof newLab.value === 'number' && typeof existingLab.value === 'number') {
    const maxVal = Math.max(Math.abs(newLab.value), Math.abs(existingLab.value));
    if (maxVal > 0) {
      const diff = Math.abs(newLab.value - existingLab.value);
      valueSim = 1 - diff / maxVal;
    }
  } else if (newLab.value !== existingLab.value) {
    valueSim = 0;
  }
  
  // Calculate overall confidence
  let confidence = nameSim * 0.5 + (datesClose ? 0.3 : 0) + valueSim * 0.2;
  
  // Determine if duplicate based on thresholds
  const isDuplicate = nameSim >= opts.nameThreshold! && datesClose && valueSim >= 0.9;
  
  const reasons: string[] = [];
  if (nameSim >= opts.nameThreshold!) reasons.push(`name match (${Math.round(nameSim * 100)}%)`);
  if (datesClose) reasons.push('same day');
  if (valueSim >= 0.9) reasons.push('similar value');
  
  return {
    isDuplicate,
    confidence,
    reason: reasons.join(', ') || 'low similarity',
  };
}

/**
 * Find duplicates for a batch of lab results
 */
export function findLabDuplicates(
  newLabs: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[],
  existingLabs: LabResult[],
  options?: LabDuplicateOptions
): DuplicateCheckResult<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>> {
  const newItems: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const duplicates: DuplicateMatch<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>>[] = [];
  const ambiguous: DuplicateMatch<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>>[] = [];

  for (const newLab of newLabs) {
    let bestMatch: { existing: LabResult; confidence: number; reason: string } | null = null;
    
    for (const existing of existingLabs) {
      const check = checkLabDuplicate(newLab, existing, options);
      if (check.confidence > (bestMatch?.confidence || 0)) {
        bestMatch = { existing, confidence: check.confidence, reason: check.reason };
      }
    }
    
    if (bestMatch) {
      const match: DuplicateMatch<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>> = {
        item: newLab,
        existing: bestMatch.existing,
        confidence: bestMatch.confidence,
        reason: bestMatch.reason,
      };
      
      if (bestMatch.confidence >= 0.9) {
        duplicates.push(match);
      } else if (bestMatch.confidence >= 0.6) {
        ambiguous.push(match);
      } else {
        newItems.push(newLab);
      }
    } else {
      newItems.push(newLab);
    }
  }
  
  return { newItems, duplicates, ambiguous };
}

// ============================================================================
// Medication Duplicate Detection
// ============================================================================

export interface MedicationDuplicateOptions {
  nameThreshold?: number;
  dosageThreshold?: number;
}

const DEFAULT_MED_OPTIONS: MedicationDuplicateOptions = {
  nameThreshold: 0.9,
  dosageThreshold: 0.95,
};

/**
 * Check if two medications are potential duplicates
 */
export function checkMedicationDuplicate(
  newMed: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>,
  existingMed: Medication,
  options: MedicationDuplicateOptions = {}
): { isDuplicate: boolean; confidence: number; reason: string } {
  const opts = { ...DEFAULT_MED_OPTIONS, ...options };
  
  const nameSim = stringSimilarity(
    normalizeString(newMed.name),
    normalizeString(existingMed.name)
  );
  
  const dosageSim = stringSimilarity(
    normalizeString(newMed.dosage || ''),
    normalizeString(existingMed.dosage || '')
  );
  
  const confidence = nameSim * 0.7 + dosageSim * 0.3;
  const isDuplicate = nameSim >= opts.nameThreshold! && dosageSim >= opts.dosageThreshold!;
  
  return {
    isDuplicate,
    confidence,
    reason: `name: ${Math.round(nameSim * 100)}%, dosage: ${Math.round(dosageSim * 100)}%`,
  };
}

/**
 * Find duplicates for medications
 */
export function findMedicationDuplicates(
  newMeds: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>[],
  existingMeds: Medication[],
  options?: MedicationDuplicateOptions
): DuplicateCheckResult<Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>> {
  const newItems: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const duplicates: DuplicateMatch<Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>>[] = [];
  const ambiguous: DuplicateMatch<Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>>[] = [];

  for (const newMed of newMeds) {
    let bestMatch: { existing: Medication; confidence: number; reason: string } | null = null;
    
    for (const existing of existingMeds) {
      const check = checkMedicationDuplicate(newMed, existing, options);
      if (check.confidence > (bestMatch?.confidence || 0)) {
        bestMatch = { existing, confidence: check.confidence, reason: check.reason };
      }
    }
    
    if (bestMatch) {
      const match: DuplicateMatch<Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>> = {
        item: newMed,
        existing: bestMatch.existing,
        confidence: bestMatch.confidence,
        reason: bestMatch.reason,
      };
      
      if (bestMatch.confidence >= 0.9) {
        duplicates.push(match);
      } else if (bestMatch.confidence >= 0.7) {
        ambiguous.push(match);
      } else {
        newItems.push(newMed);
      }
    } else {
      newItems.push(newMed);
    }
  }
  
  return { newItems, duplicates, ambiguous };
}

// ============================================================================
// Condition Duplicate Detection
// ============================================================================

/**
 * Check if two conditions are potential duplicates
 */
export function checkConditionDuplicate(
  newCond: Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>,
  existingCond: Condition
): { isDuplicate: boolean; confidence: number; reason: string } {
  const nameSim = stringSimilarity(
    normalizeString(newCond.name),
    normalizeString(existingCond.name)
  );
  
  // ICD-10 match is strong signal
  const icdMatch = newCond.icd10Code && 
    newCond.icd10Code === existingCond.icd10Code;
  
  const confidence = icdMatch ? 1.0 : nameSim;
  const isDuplicate = icdMatch || nameSim >= 0.9;
  
  return {
    isDuplicate,
    confidence,
    reason: icdMatch ? 'ICD-10 match' : `name match (${Math.round(nameSim * 100)}%)`,
  };
}

/**
 * Find duplicates for conditions
 */
export function findConditionDuplicates(
  newConds: Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>[],
  existingConds: Condition[]
): DuplicateCheckResult<Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>> {
  const newItems: Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  const duplicates: DuplicateMatch<Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>>[] = [];
  const ambiguous: DuplicateMatch<Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>>[] = [];

  for (const newCond of newConds) {
    let bestMatch: { existing: Condition; confidence: number; reason: string } | null = null;
    
    for (const existing of existingConds) {
      const check = checkConditionDuplicate(newCond, existing);
      if (check.confidence > (bestMatch?.confidence || 0)) {
        bestMatch = { existing, confidence: check.confidence, reason: check.reason };
      }
    }
    
    if (bestMatch) {
      const match: DuplicateMatch<Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>> = {
        item: newCond,
        existing: bestMatch.existing,
        confidence: bestMatch.confidence,
        reason: bestMatch.reason,
      };
      
      if (bestMatch.confidence >= 0.9) {
        duplicates.push(match);
      } else if (bestMatch.confidence >= 0.7) {
        ambiguous.push(match);
      } else {
        newItems.push(newCond);
      }
    } else {
      newItems.push(newCond);
    }
  }
  
  return { newItems, duplicates, ambiguous };
}

// ============================================================================
// Batch Duplicate Detection
// ============================================================================

export interface BatchDuplicateResult {
  labs: DuplicateCheckResult<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>>;
  medications: DuplicateCheckResult<Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>>;
  conditions: DuplicateCheckResult<Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>>;
}

/**
 * Check all extracted data for duplicates against existing BiologicalSelf
 */
export function detectAllDuplicates(
  extracted: {
    labs: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[];
    medications: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>[];
    conditions: Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>[];
  },
  existing: {
    labs: LabResult[];
    medications: Medication[];
    conditions: Condition[];
  }
): BatchDuplicateResult {
  return {
    labs: findLabDuplicates(extracted.labs, existing.labs),
    medications: findMedicationDuplicates(extracted.medications, existing.medications),
    conditions: findConditionDuplicates(extracted.conditions, existing.conditions),
  };
}
