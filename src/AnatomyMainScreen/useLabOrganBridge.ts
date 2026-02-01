/**
 * useLabOrganBridge Hook
 *
 * Bridges patient lab results to organ-positioned badges using:
 * - LAB_ORGAN_MAP for test-to-organ mapping and clinical interpretations
 * - REFERENCE_RANGES for real medical reference ranges by demographics
 * - ORGAN_CENTERS for 3D positioning on the anatomy model
 *
 * Produces the Map<string, OrganLab[]> consumed by the LabBadges component.
 */

import { useMemo } from 'react';

import type {
  LabResult,
  OrganLab,
  BiologicalSelf,
} from './types';

import {
  LAB_ORGAN_MAP,
  getLabMapping,
  getRelatedLabs,
  type LabOrganMapping,
} from '../../core/anatomy-patient-bridge/lab-organ-map';

import {
  REFERENCE_RANGES,
  getApplicableReferenceRange,
} from '../../core/labs/reference-ranges';

import type { UserDemographics, ReferenceRange } from '../../core/labs/types';

// ============================================
// ID Normalization
// ============================================

/**
 * Normalize a lab test name or ID to the key format used in LAB_ORGAN_MAP.
 * Handles common variations: "Alanine Aminotransferase" -> "ALT",
 * "Blood Urea Nitrogen" -> "BUN", "creatinine" -> "creatinine", etc.
 */
const NAME_TO_MAP_KEY: Record<string, string> = {
  // Liver
  'alanine aminotransferase': 'ALT',
  'alt': 'ALT',
  'aspartate aminotransferase': 'AST',
  'ast': 'AST',
  'alkaline phosphatase': 'ALP',
  'alp': 'ALP',
  'gamma-glutamyl transferase': 'GGT',
  'ggt': 'GGT',
  'total bilirubin': 'bilirubin-total',
  'bilirubin': 'bilirubin-total',
  'bilirubin-total': 'bilirubin-total',
  'direct bilirubin': 'bilirubin-direct',
  'bilirubin-direct': 'bilirubin-direct',
  'indirect bilirubin': 'bilirubin-indirect',
  'bilirubin-indirect': 'bilirubin-indirect',
  'albumin': 'albumin',
  'total protein': 'total-protein',
  'total-protein': 'total-protein',
  'prothrombin time': 'PT',
  'pt': 'PT',
  'inr': 'INR',
  'international normalized ratio': 'INR',

  // Kidney
  'creatinine': 'creatinine',
  'blood urea nitrogen': 'BUN',
  'bun': 'BUN',
  'glomerular filtration rate': 'GFR',
  'gfr': 'GFR',
  'egfr': 'GFR',
  'cystatin c': 'cystatin-C',
  'cystatin-c': 'cystatin-C',
  'potassium': 'potassium',
  'sodium': 'sodium',
  'chloride': 'chloride',
  'bicarbonate': 'bicarbonate',
  'co2': 'bicarbonate',
  'phosphorus': 'phosphorus',
  'uric acid': 'uric-acid',
  'uric-acid': 'uric-acid',
  'magnesium': 'magnesium',

  // Cardiac
  'troponin i': 'troponin-I',
  'troponin-i': 'troponin-I',
  'troponin': 'troponin-I',
  'troponin t': 'troponin-T',
  'troponin-t': 'troponin-T',
  'bnp': 'BNP',
  'b-type natriuretic peptide': 'BNP',
  'nt-probnp': 'NT-proBNP',
  'n-terminal pro-bnp': 'NT-proBNP',
  'ck-mb': 'CK-MB',
  'creatine kinase-mb': 'CK-MB',
  'ck': 'CK-total',
  'ck-total': 'CK-total',
  'creatine kinase': 'CK-total',
  'ldh': 'LDH',
  'lactate dehydrogenase': 'LDH',
  'homocysteine': 'homocysteine',

  // Pancreas / Diabetes
  'glucose': 'glucose',
  'blood glucose': 'glucose',
  'fasting glucose': 'glucose',
  'hba1c': 'HbA1c',
  'hemoglobin a1c': 'HbA1c',
  'a1c': 'HbA1c',
  'insulin': 'insulin',
  'c-peptide': 'C-peptide',
  'lipase': 'lipase',
  'amylase': 'amylase',

  // Thyroid
  'tsh': 'TSH',
  'thyroid stimulating hormone': 'TSH',
  'free t4': 'T4-free',
  't4-free': 'T4-free',
  'free thyroxine': 'T4-free',
  'total t4': 'T4-total',
  't4-total': 'T4-total',
  'free t3': 'T3-free',
  't3-free': 'T3-free',
  'total t3': 'T3-total',
  't3-total': 'T3-total',
  'thyroid peroxidase antibodies': 'thyroid-peroxidase-ab',
  'tpo antibodies': 'thyroid-peroxidase-ab',

  // Blood / Bone Marrow
  'hemoglobin': 'hemoglobin',
  'hematocrit': 'hematocrit',
  'rbc': 'RBC',
  'red blood cell count': 'RBC',
  'wbc': 'WBC',
  'white blood cell count': 'WBC',
  'platelets': 'platelets',
  'platelet count': 'platelets',
  'mcv': 'MCV',
  'mean corpuscular volume': 'MCV',
  'mch': 'MCH',
  'mean corpuscular hemoglobin': 'MCH',
  'reticulocytes': 'reticulocytes',
  'reticulocyte count': 'reticulocytes',
  'ferritin': 'ferritin',
  'iron': 'iron',
  'serum iron': 'iron',

  // Lipids
  'total cholesterol': 'cholesterol-total',
  'cholesterol': 'cholesterol-total',
  'cholesterol-total': 'cholesterol-total',
  'ldl': 'LDL',
  'ldl cholesterol': 'LDL',
  'low-density lipoprotein': 'LDL',
  'hdl': 'HDL',
  'hdl cholesterol': 'HDL',
  'high-density lipoprotein': 'HDL',
  'triglycerides': 'triglycerides',
  'vldl': 'VLDL',

  // Inflammatory
  'crp': 'CRP',
  'c-reactive protein': 'CRP',
  'hs-crp': 'hs-CRP',
  'high-sensitivity crp': 'hs-CRP',
  'esr': 'ESR',
  'erythrocyte sedimentation rate': 'ESR',
  'procalcitonin': 'procalcitonin',

  // Vitamins / Minerals
  'vitamin d': 'vitamin-D',
  'vitamin-d': 'vitamin-D',
  '25-hydroxy vitamin d': 'vitamin-D',
  'vitamin b12': 'vitamin-B12',
  'vitamin-b12': 'vitamin-B12',
  'b12': 'vitamin-B12',
  'folate': 'folate',
  'folic acid': 'folate',
  'calcium': 'calcium',
  'pth': 'PTH',
  'parathyroid hormone': 'PTH',

  // Prostate
  'psa': 'PSA',
  'prostate-specific antigen': 'PSA',
  'free psa': 'free-PSA',
  'free-psa': 'free-PSA',

  // Blood gas
  'po2': 'pO2',
  'pco2': 'pCO2',

  // Immune
  'lymphocytes': 'lymphocytes',
  'neutrophils': 'neutrophils',
};

/**
 * Resolve a lab test identifier (name, abbreviation, or ID) to its LAB_ORGAN_MAP key.
 */
function resolveLabMapKey(testNameOrId: string, loincCode?: string): string | undefined {
  // Try LOINC code lookup first
  if (loincCode) {
    for (const [key, mapping] of Object.entries(LAB_ORGAN_MAP)) {
      if (mapping.loincCode === loincCode) {
        return key;
      }
    }
  }

  // Try direct key match
  if (LAB_ORGAN_MAP[testNameOrId]) {
    return testNameOrId;
  }

  // Try normalized name lookup
  const normalized = testNameOrId.toLowerCase().trim();
  const mapped = NAME_TO_MAP_KEY[normalized];
  if (mapped && LAB_ORGAN_MAP[mapped]) {
    return mapped;
  }

  // Try partial match on lab names in the map
  for (const [key, mapping] of Object.entries(LAB_ORGAN_MAP)) {
    if (mapping.labName.toLowerCase() === normalized) {
      return key;
    }
  }

  return undefined;
}

// ============================================
// Organ ID Mapping
// ============================================

/**
 * Maps the regionId from LAB_ORGAN_MAP (e.g. "body.torso.abdomen.liver")
 * to the organ ID keys used by ORGAN_CENTERS in utils.ts (e.g. "liver").
 *
 * Also maps to the system-prefixed regionId used by the bridge
 * (e.g. "digestive.liver", "urinary.kidneys").
 */
const REGION_TO_ORGAN_CENTER: Record<string, string> = {
  'body.torso.abdomen.liver': 'liver',
  'body.torso.abdomen.kidneys': 'kidneys',
  'body.torso.thorax.heart': 'heart',
  'body.torso.abdomen.pancreas': 'pancreas',
  'body.neck.thyroid': 'thyroid',
  'body.skeletal.bone-marrow': 'bone-marrow',
  'body.skeletal.bones': 'bones',
  'body.torso.abdomen.stomach': 'stomach',
  'body.torso.abdomen.small-intestine': 'small-intestine',
  'body.torso.abdomen.spleen': 'spleen',
  'body.neck.parathyroid': 'thyroid', // parathyroid near thyroid
  'body.torso.thorax.lungs': 'left-lung',
  'body.circulatory.blood': 'heart',
  'body.torso.pelvis.prostate': 'pelvis',
};

/**
 * Maps the LAB_ORGAN_MAP organ name to the bridge-style region ID
 * that LabBadges uses for grouping.
 */
const ORGAN_TO_BRIDGE_REGION: Record<string, string> = {
  'liver': 'liver',
  'kidneys': 'kidneys',
  'heart': 'heart',
  'pancreas': 'pancreas',
  'thyroid': 'thyroid',
  'bone-marrow': 'bone-marrow',
  'bones': 'bones',
  'stomach': 'stomach',
  'small-intestine': 'small-intestine',
  'spleen': 'spleen',
  'parathyroid': 'thyroid',
  'lungs': 'left-lung',
  'blood': 'heart',
  'prostate': 'prostate',
};

function getOrganCenterKey(mapping: LabOrganMapping): string {
  // Use the regionId to look up the organ center key
  const centerKey = REGION_TO_ORGAN_CENTER[mapping.regionId];
  if (centerKey) return centerKey;

  // Fall back to organ name
  const organKey = ORGAN_TO_BRIDGE_REGION[mapping.organ];
  if (organKey) return organKey;

  // Last resort: use the organ name directly
  return mapping.organ;
}

// ============================================
// Reference Range Resolution
// ============================================

/**
 * Map LAB_ORGAN_MAP keys to REFERENCE_RANGES keys (which are lowercase).
 */
const MAP_KEY_TO_REF_KEY: Record<string, string> = {
  'ALT': 'alt',
  'AST': 'ast',
  'ALP': 'alp',
  'GGT': 'ggt',
  'bilirubin-total': 'bilirubin-total',
  'bilirubin-direct': 'bilirubin-direct',
  'albumin': 'albumin',
  'total-protein': 'total-protein',
  'PT': 'pt',
  'INR': 'inr',
  'creatinine': 'creatinine',
  'BUN': 'bun',
  'GFR': 'egfr',
  'potassium': 'potassium',
  'sodium': 'sodium',
  'chloride': 'chloride',
  'bicarbonate': 'co2',
  'glucose': 'glucose',
  'HbA1c': 'hba1c',
  'insulin': 'insulin',
  'C-peptide': 'c-peptide',
  'TSH': 'tsh',
  'T4-free': 'free-t4',
  'T3-free': 'free-t3',
  'hemoglobin': 'hemoglobin',
  'hematocrit': 'hematocrit',
  'RBC': 'rbc',
  'WBC': 'wbc',
  'platelets': 'platelets',
  'MCV': 'mcv',
  'MCH': 'mch',
  'ferritin': 'ferritin',
  'iron': 'iron',
  'cholesterol-total': 'total-cholesterol',
  'LDL': 'ldl',
  'HDL': 'hdl',
  'triglycerides': 'triglycerides',
  'VLDL': 'vldl',
  'CRP': 'crp',
  'hs-CRP': 'hs-crp',
  'ESR': 'esr',
  'procalcitonin': 'procalcitonin',
  'troponin-I': 'troponin-i',
  'troponin-T': 'troponin-t',
  'BNP': 'bnp',
  'NT-proBNP': 'nt-probnp',
  'CK-MB': 'ck-mb',
  'calcium': 'calcium',
  'vitamin-D': 'vitamin-d',
  'neutrophils': 'neutrophils',
  'lymphocytes': 'lymphocytes',
};

/**
 * Get the real medical reference range for a lab from REFERENCE_RANGES,
 * falling back to the range on the LabResult itself.
 */
function getRealReferenceRange(
  mapKey: string,
  labResult: LabResult,
  demographics?: UserDemographics,
): { low: number; high: number; unit: string } {
  const refKey = MAP_KEY_TO_REF_KEY[mapKey];
  if (refKey && demographics) {
    const range = getApplicableReferenceRange(refKey, demographics);
    if (range) {
      return { low: range.low, high: range.high, unit: range.unit };
    }
  }

  // Also try the reference ranges Map directly with the refKey
  if (refKey) {
    const rangeSet = REFERENCE_RANGES.get(refKey);
    if (rangeSet && rangeSet.ranges.length > 0) {
      // Use the first (most general) range as fallback
      const r = rangeSet.ranges[0];
      return { low: r.low, high: r.high, unit: r.unit };
    }
  }

  // Fall back to what the LabResult already has
  return {
    low: labResult.referenceRange.low,
    high: labResult.referenceRange.high,
    unit: labResult.unit,
  };
}

// ============================================
// Status Determination
// ============================================

function determineStatus(
  value: number | string,
  refRange: { low: number; high: number },
  criticalLow?: number,
  criticalHigh?: number,
): LabResult['status'] {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return 'normal';

  if (criticalHigh !== undefined && numValue >= criticalHigh) return 'critical-high';
  if (criticalLow !== undefined && numValue <= criticalLow) return 'critical-low';
  if (numValue > refRange.high) return 'high';
  if (numValue < refRange.low) return 'low';
  return 'normal';
}

function getDirection(status: LabResult['status']): 'up' | 'down' | 'normal' {
  if (status === 'high' || status === 'critical-high') return 'up';
  if (status === 'low' || status === 'critical-low') return 'down';
  return 'normal';
}

function getUrgency(status: LabResult['status']): 'routine' | 'attention' | 'urgent' {
  if (status === 'critical-high' || status === 'critical-low') return 'urgent';
  if (status === 'high' || status === 'low') return 'attention';
  return 'routine';
}

// ============================================
// Main Hook
// ============================================

export interface LabOrganBridgeOptions {
  /** Patient demographics for age/sex-specific reference ranges */
  demographics?: UserDemographics;
  /** Only include labs with abnormal results (default: true) */
  abnormalOnly?: boolean;
}

export interface EnrichedOrganLab extends OrganLab {
  /** The organ system this lab maps to (e.g. "liver", "kidneys") */
  organSystem: string;
  /** The human-readable full lab name from the medical database */
  fullLabName: string;
  /** Clinical interpretation text for the current direction */
  interpretation?: string;
  /** IDs of related labs the patient should discuss with their doctor */
  relatedLabIds: string[];
  /** Region ID from the LAB_ORGAN_MAP (e.g. "body.torso.abdomen.liver") */
  regionId: string;
}

/**
 * Hook that maps patient lab results to organ-positioned data
 * for the LabBadges 3D visualization component.
 *
 * @param labResults - Array of patient lab results
 * @param options - Configuration options
 * @returns Map from organ center key to array of enriched OrganLab objects
 */
export function useLabOrganBridge(
  labResults: LabResult[],
  options: LabOrganBridgeOptions = {},
): Map<string, EnrichedOrganLab[]> {
  const { demographics, abnormalOnly = true } = options;

  return useMemo(() => {
    const organLabMap = new Map<string, EnrichedOrganLab[]>();

    for (const lab of labResults) {
      // Resolve the lab to its LAB_ORGAN_MAP key
      const mapKey = resolveLabMapKey(lab.testName, lab.loincCode);
      if (!mapKey) {
        // If we can't map this lab, fall back to relatedOrgan if present
        if (lab.relatedOrgan) {
          const fallbackLab: EnrichedOrganLab = {
            lab,
            direction: getDirection(lab.status),
            urgency: getUrgency(lab.status),
            organSystem: lab.relatedOrgan,
            fullLabName: lab.testName,
            interpretation: undefined,
            relatedLabIds: [],
            regionId: '',
          };

          if (abnormalOnly && fallbackLab.direction === 'normal') continue;

          const existing = organLabMap.get(lab.relatedOrgan) || [];
          existing.push(fallbackLab);
          organLabMap.set(lab.relatedOrgan, existing);
        }
        continue;
      }

      const mapping = getLabMapping(mapKey);
      if (!mapping) continue;

      // Get real reference range from medical database
      const realRange = getRealReferenceRange(mapKey, lab, demographics);

      // Get critical thresholds from REFERENCE_RANGES if available
      const refKey = MAP_KEY_TO_REF_KEY[mapKey];
      let criticalLow: number | undefined;
      let criticalHigh: number | undefined;
      if (refKey) {
        const rangeSet = REFERENCE_RANGES.get(refKey);
        if (rangeSet && rangeSet.ranges.length > 0) {
          // Check the best matching range for critical values
          const bestRange = demographics
            ? getApplicableReferenceRange(refKey, demographics)
            : rangeSet.ranges[0];
          if (bestRange) {
            criticalLow = bestRange.criticalLow;
            criticalHigh = bestRange.criticalHigh;
          }
        }
      }

      // Determine status using real reference ranges
      const numValue = typeof lab.value === 'string' ? parseFloat(lab.value as string) : lab.value as number;
      const realStatus = determineStatus(numValue, realRange, criticalLow, criticalHigh);

      // Build enriched lab result with real reference range
      const enrichedLab: LabResult = {
        ...lab,
        referenceRange: { low: realRange.low, high: realRange.high },
        unit: realRange.unit || lab.unit,
        status: realStatus,
      };

      const direction = getDirection(realStatus);
      const urgency = getUrgency(realStatus);

      // Skip normal results if abnormalOnly is set
      if (abnormalOnly && direction === 'normal') continue;

      // Get interpretation text
      let interpretation: string | undefined;
      if (direction === 'up' && mapping.interpretation.high) {
        interpretation = mapping.interpretation.high;
      } else if (direction === 'down' && mapping.interpretation.low) {
        interpretation = mapping.interpretation.low;
      }

      // Get related lab IDs
      const relatedLabIds = mapping.relatedLabs || [];

      // Resolve the organ center key for positioning
      const organCenterKey = getOrganCenterKey(mapping);

      const enrichedOrganLab: EnrichedOrganLab = {
        lab: enrichedLab,
        direction,
        urgency,
        organSystem: mapping.organ,
        fullLabName: mapping.labName,
        interpretation,
        relatedLabIds,
        regionId: mapping.regionId,
      };

      const existing = organLabMap.get(organCenterKey) || [];
      existing.push(enrichedOrganLab);
      organLabMap.set(organCenterKey, existing);
    }

    return organLabMap;
  }, [labResults, demographics, abnormalOnly]);
}

/**
 * Non-hook version for use outside React components.
 * Same logic as the hook but callable from bridge creation.
 */
export function buildLabOrganMap(
  labResults: LabResult[],
  options: LabOrganBridgeOptions = {},
): Map<string, EnrichedOrganLab[]> {
  const { demographics, abnormalOnly = true } = options;
  const organLabMap = new Map<string, EnrichedOrganLab[]>();

  for (const lab of labResults) {
    const mapKey = resolveLabMapKey(lab.testName, lab.loincCode);
    if (!mapKey) {
      if (lab.relatedOrgan) {
        const fallbackLab: EnrichedOrganLab = {
          lab,
          direction: getDirection(lab.status),
          urgency: getUrgency(lab.status),
          organSystem: lab.relatedOrgan,
          fullLabName: lab.testName,
          interpretation: undefined,
          relatedLabIds: [],
          regionId: '',
        };

        if (abnormalOnly && fallbackLab.direction === 'normal') continue;

        const existing = organLabMap.get(lab.relatedOrgan) || [];
        existing.push(fallbackLab);
        organLabMap.set(lab.relatedOrgan, existing);
      }
      continue;
    }

    const mapping = getLabMapping(mapKey);
    if (!mapping) continue;

    const realRange = getRealReferenceRange(mapKey, lab, demographics);

    const refKey = MAP_KEY_TO_REF_KEY[mapKey];
    let criticalLow: number | undefined;
    let criticalHigh: number | undefined;
    if (refKey) {
      const rangeSet = REFERENCE_RANGES.get(refKey);
      if (rangeSet && rangeSet.ranges.length > 0) {
        const bestRange = demographics
          ? getApplicableReferenceRange(refKey, demographics)
          : rangeSet.ranges[0];
        if (bestRange) {
          criticalLow = bestRange.criticalLow;
          criticalHigh = bestRange.criticalHigh;
        }
      }
    }

    const numValue = typeof lab.value === 'string' ? parseFloat(lab.value as string) : lab.value as number;
    const realStatus = determineStatus(numValue, realRange, criticalLow, criticalHigh);

    const enrichedLab: LabResult = {
      ...lab,
      referenceRange: { low: realRange.low, high: realRange.high },
      unit: realRange.unit || lab.unit,
      status: realStatus,
    };

    const direction = getDirection(realStatus);
    const urgency = getUrgency(realStatus);

    if (abnormalOnly && direction === 'normal') continue;

    let interpretation: string | undefined;
    if (direction === 'up' && mapping.interpretation.high) {
      interpretation = mapping.interpretation.high;
    } else if (direction === 'down' && mapping.interpretation.low) {
      interpretation = mapping.interpretation.low;
    }

    const relatedLabIds = mapping.relatedLabs || [];
    const organCenterKey = getOrganCenterKey(mapping);

    const enrichedOrganLab: EnrichedOrganLab = {
      lab: enrichedLab,
      direction,
      urgency,
      organSystem: mapping.organ,
      fullLabName: mapping.labName,
      interpretation,
      relatedLabIds,
      regionId: mapping.regionId,
    };

    const existing = organLabMap.get(organCenterKey) || [];
    existing.push(enrichedOrganLab);
    organLabMap.set(organCenterKey, existing);
  }

  return organLabMap;
}

export default useLabOrganBridge;
