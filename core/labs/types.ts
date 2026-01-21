/**
 * Lab-to-Organ Mapping Type Definitions
 *
 * Comprehensive types for mapping lab tests to organs,
 * body systems, and physiological pathways.
 */

/**
 * Lab test category
 */
export type LabCategory =
  | 'cbc'
  | 'cmp'
  | 'lft'
  | 'lipid'
  | 'thyroid'
  | 'coagulation'
  | 'cardiac'
  | 'renal'
  | 'inflammatory'
  | 'endocrine'
  | 'tumor-marker'
  | 'urinalysis'
  | 'blood-gas'
  | 'autoimmune'
  | 'infectious'
  | 'nutritional'
  | 'specialty';

/**
 * Specimen type
 */
export type SpecimenType =
  | 'serum'
  | 'plasma'
  | 'whole-blood'
  | 'urine'
  | 'csf'
  | 'other';

/**
 * Body system
 */
export type BodySystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'renal'
  | 'hepatic'
  | 'hematologic'
  | 'endocrine'
  | 'gastrointestinal'
  | 'musculoskeletal'
  | 'neurological'
  | 'immune'
  | 'reproductive'
  | 'integumentary';

/**
 * Result interpretation direction
 */
export type ResultDirection = 'high' | 'low' | 'both';

/**
 * Clinical interpretation for abnormal values
 */
export interface ClinicalInterpretation {
  direction: ResultDirection;
  conditions: string[];
  urgency?: 'routine' | 'urgent' | 'critical';
  additionalTests?: string[];
}

/**
 * Lab test reference range
 */
export interface ReferenceRange {
  adult?: {
    male?: { low: number; high: number; unit: string };
    female?: { low: number; high: number; unit: string };
    general?: { low: number; high: number; unit: string };
  };
  pediatric?: { low: number; high: number; unit: string };
  geriatric?: { low: number; high: number; unit: string };
  criticalLow?: number;
  criticalHigh?: number;
  notes?: string;
}

/**
 * Lab test definition
 */
export interface LabTest {
  id: string;
  name: string;
  abbreviation?: string;
  loincCode?: string;
  category: LabCategory;
  specimen: SpecimenType;
  description: string;
  primaryOrgans: string[];
  affectedSystems: BodySystem[];
  relatedPathways?: string[];
  referenceRange: ReferenceRange;
  clinicalInterpretations: ClinicalInterpretation[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  relatedTests?: string[];
  orderingConsiderations?: string[];
}

/**
 * Lab panel definition
 */
export interface LabPanel {
  id: string;
  name: string;
  abbreviation?: string;
  description: string;
  tests: string[];
  commonIndications: string[];
  primaryOrgans: string[];
  affectedSystems: BodySystem[];
}

/**
 * Organ-to-lab mapping
 */
export interface OrganLabMapping {
  organId: string;
  organName: string;
  primaryLabs: string[];
  secondaryLabs: string[];
  functionTests: string[];
}

/**
 * Lab statistics
 */
export interface LabStatistics {
  totalTests: number;
  totalPanels: number;
  categoryCounts: Record<LabCategory, number>;
}
