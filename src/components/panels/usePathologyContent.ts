/**
 * usePathologyContent Hook
 *
 * Fetches and manages pathology content for a specific anatomical region
 * at the requested complexity level. Loads real condition data from:
 *   - CONDITION_ANATOMY_MAP (region/system -> condition mappings)
 *   - EducationalContent condition files (multi-level educational content)
 */

import { useState, useEffect, useMemo } from 'react';
import type { EducationalContent, LevelContent } from '@core/content/types';
import {
  CONDITION_ANATOMY_MAP,
  getConditionsByRegion,
  getConditionsBySystem,
  type BodySystem,
  type ConditionAnatomyMapping,
  type AnatomicalEffectType,
} from '@core/anatomy-patient-bridge/condition-anatomy-map';
// conditionCategories is available from '@core/content/conditions' if needed
// for additional category-based lookups beyond the anatomy bridge.

// ============================================================================
// Types
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export type ConditionCategory =
  | 'inflammatory'
  | 'neoplastic'
  | 'degenerative'
  | 'infectious'
  | 'autoimmune'
  | 'vascular'
  | 'metabolic'
  | 'congenital'
  | 'traumatic'
  | 'functional'
  | 'idiopathic';

export type Severity = 'mild' | 'moderate' | 'severe' | 'critical';

export type Prevalence = 'very-common' | 'common' | 'uncommon' | 'rare' | 'very-rare';

export interface ConditionContent {
  definition: string;
  keyFacts?: string[];
  causes?: string[];
  riskFactors?: string[];
  pathophysiology: string;
  molecularMechanisms?: string;
  clinicalPresentation: string;
  symptoms?: string[];
  signs?: string[];
  diagnosis: string;
  diagnosticTests?: string[];
  differentialDiagnosis?: string[];
  treatment: string;
  medications?: string[];
  prognosis?: string;
}

export interface PathologyCondition {
  id: string;
  name: string;
  nameEs?: string;
  category: ConditionCategory;
  severity: Severity;
  prevalence: Prevalence;
  isEmergency: boolean;
  icdCodes?: string[];
  affectedRegions: string[];
  content: Record<ComplexityLevel, ConditionContent>;
}

export interface RelatedCondition {
  id: string;
  name: string;
  relationship: string;
}

export interface UsePathologyContentResult {
  conditions: PathologyCondition[] | null;
  loading: boolean;
  error: string | null;
  relatedConditions: RelatedCondition[] | null;
  groupedByCategory: Record<ConditionCategory, PathologyCondition[]>;
}

// ============================================================================
// Region-to-BodySystem Mapping
// ============================================================================

/**
 * Maps body region IDs (from the 3D anatomy model or UI selection)
 * to BodySystem identifiers used by CONDITION_ANATOMY_MAP.
 *
 * Region IDs typically follow a dotted path like:
 *   body.torso.thorax.heart
 *   body.head.brain
 *   body.torso.abdomen.liver
 */
export const REGION_TO_BODY_SYSTEM: Record<string, BodySystem> = {
  // Cardiovascular
  heart: 'cardiovascular',
  cardiac: 'cardiovascular',
  aorta: 'cardiovascular',
  artery: 'cardiovascular',
  vein: 'cardiovascular',
  vessel: 'cardiovascular',
  vascular: 'cardiovascular',
  coronary: 'cardiovascular',
  // Respiratory
  lung: 'respiratory',
  lungs: 'respiratory',
  bronchi: 'respiratory',
  bronchus: 'respiratory',
  trachea: 'respiratory',
  pulmonary: 'respiratory',
  respiratory: 'respiratory',
  airway: 'respiratory',
  pleura: 'respiratory',
  diaphragm: 'respiratory',
  // Digestive
  stomach: 'digestive',
  liver: 'digestive',
  hepatic: 'digestive',
  pancreas: 'digestive',
  gallbladder: 'digestive',
  intestine: 'digestive',
  colon: 'digestive',
  esophagus: 'digestive',
  bowel: 'digestive',
  duodenum: 'digestive',
  rectum: 'digestive',
  appendix: 'digestive',
  digestive: 'digestive',
  gastrointestinal: 'digestive',
  // Nervous
  brain: 'nervous',
  cerebral: 'nervous',
  cerebellum: 'nervous',
  spinal: 'nervous',
  nerve: 'nervous',
  neuro: 'nervous',
  nervous: 'nervous',
  cortex: 'nervous',
  brainstem: 'nervous',
  hypothalamus: 'nervous',
  thalamus: 'nervous',
  // Musculoskeletal
  bone: 'musculoskeletal',
  muscle: 'musculoskeletal',
  joint: 'musculoskeletal',
  spine: 'musculoskeletal',
  vertebra: 'musculoskeletal',
  femur: 'musculoskeletal',
  tibia: 'musculoskeletal',
  humerus: 'musculoskeletal',
  pelvis: 'musculoskeletal',
  hip: 'musculoskeletal',
  knee: 'musculoskeletal',
  shoulder: 'musculoskeletal',
  skeletal: 'musculoskeletal',
  musculoskeletal: 'musculoskeletal',
  tendon: 'musculoskeletal',
  ligament: 'musculoskeletal',
  cartilage: 'musculoskeletal',
  // Endocrine
  thyroid: 'endocrine',
  adrenal: 'endocrine',
  pituitary: 'endocrine',
  endocrine: 'endocrine',
  parathyroid: 'endocrine',
  // Urinary
  kidney: 'urinary',
  renal: 'urinary',
  bladder: 'urinary',
  ureter: 'urinary',
  urethra: 'urinary',
  urinary: 'urinary',
  // Reproductive
  uterus: 'reproductive',
  ovary: 'reproductive',
  prostate: 'reproductive',
  testis: 'reproductive',
  reproductive: 'reproductive',
  // Integumentary
  skin: 'integumentary',
  dermis: 'integumentary',
  epidermis: 'integumentary',
  integumentary: 'integumentary',
  // Lymphatic
  lymph: 'lymphatic',
  spleen: 'lymphatic',
  tonsil: 'lymphatic',
  lymphatic: 'lymphatic',
  // Hematologic
  blood: 'hematologic',
  marrow: 'hematologic',
  hematologic: 'hematologic',
};

/**
 * Maps condition category strings from conditionCategories index
 * to PathologyPanel ConditionCategory type.
 */
const EFFECT_TYPE_TO_CATEGORY: Record<AnatomicalEffectType, ConditionCategory> = {
  structural: 'traumatic',
  functional: 'functional',
  inflammatory: 'inflammatory',
  infectious: 'infectious',
  degenerative: 'degenerative',
  neoplastic: 'neoplastic',
  vascular: 'vascular',
  metabolic: 'metabolic',
  autoimmune: 'autoimmune',
  congenital: 'congenital',
  traumatic: 'traumatic',
};

/**
 * Resolves a regionId to one or more BodySystem values.
 * Checks the last segment of dotted paths, then broader segments.
 */
export function resolveBodySystems(regionId: string): BodySystem[] {
  const lower = regionId.toLowerCase();
  const systems = new Set<BodySystem>();

  // Check against all known keywords
  for (const [keyword, system] of Object.entries(REGION_TO_BODY_SYSTEM)) {
    if (lower.includes(keyword)) {
      systems.add(system);
    }
  }

  return Array.from(systems);
}

// ============================================================================
// EducationalContent Loader
// ============================================================================

/**
 * Lazy-loads the EducationalContent arrays for each condition category.
 * Returns a map from condition ID (slug form) to EducationalContent.
 */
let _conditionContentCache: Map<string, EducationalContent> | null = null;
let _conditionContentPromise: Promise<Map<string, EducationalContent>> | null = null;

async function loadAllConditionContent(): Promise<Map<string, EducationalContent>> {
  if (_conditionContentCache) return _conditionContentCache;
  if (_conditionContentPromise) return _conditionContentPromise;

  _conditionContentPromise = (async () => {
    const map = new Map<string, EducationalContent>();

    // Load all condition category modules in parallel
    const [
      cvMod,
      respMod,
      metabMod,
      giMod,
      neuroMod,
      mhMod,
      mskMod,
      oncoMod,
      infectMod,
      renalMod,
      dermMod,
      hemMod,
    ] = await Promise.all([
      import('@core/content/conditions/cardiovascular'),
      import('@core/content/conditions/respiratory'),
      import('@core/content/conditions/metabolic'),
      import('@core/content/conditions/gastrointestinal'),
      import('@core/content/conditions/neurological'),
      import('@core/content/conditions/mental-health'),
      import('@core/content/conditions/musculoskeletal'),
      import('@core/content/conditions/oncology'),
      import('@core/content/conditions/infectious'),
      import('@core/content/conditions/renal'),
      import('@core/content/conditions/dermatology'),
      import('@core/content/conditions/hematologic'),
    ]);

    const allArrays: EducationalContent[][] = [
      cvMod.cardiovascularConditions ?? [],
      respMod.respiratoryConditions ?? [],
      metabMod.metabolicConditions ?? [],
      giMod.gastrointestinalConditions ?? [],
      neuroMod.neurologicalConditions ?? [],
      mhMod.mentalHealthConditions ?? [],
      mskMod.musculoskeletalConditions ?? [],
      oncoMod.oncologyConditions ?? [],
      infectMod.infectiousConditions ?? [],
      renalMod.renalConditions ?? [],
      dermMod.dermatologyConditions ?? [],
      hemMod.hematologicConditions ?? [],
    ];

    for (const arr of allArrays) {
      for (const ec of arr) {
        if (!ec || !ec.id) continue;
        // Index by full id (e.g., "condition-hypertension")
        map.set(ec.id, ec);
        // Also index by slug (e.g., "hypertension")
        const slug = ec.id.replace(/^condition-/, '');
        map.set(slug, ec);
        // Also by name lowercase
        map.set(ec.name.toLowerCase(), ec);
      }
    }

    _conditionContentCache = map;
    return map;
  })();

  return _conditionContentPromise;
}

// ============================================================================
// Transform EducationalContent -> ConditionContent
// ============================================================================

function levelContentToConditionContent(lc: LevelContent, level: ComplexityLevel): ConditionContent {
  // Parse the explanation markdown to extract structured sections
  const explanation = lc.explanation || '';

  // Extract key terms as key facts
  const keyFacts = lc.keyTerms?.map(kt => `${kt.term}: ${kt.definition}`) ?? [];
  if (lc.analogies) {
    keyFacts.push(...lc.analogies);
  }

  return {
    definition: lc.summary || '',
    keyFacts: keyFacts.length > 0 ? keyFacts : undefined,
    causes: lc.examples,
    riskFactors: undefined,
    pathophysiology: explanation,
    molecularMechanisms: level >= 4 ? lc.clinicalNotes : undefined,
    clinicalPresentation: lc.summary || '',
    symptoms: lc.patientCounselingPoints ?? undefined,
    signs: undefined,
    diagnosis: explanation,
    diagnosticTests: undefined,
    differentialDiagnosis: undefined,
    treatment: lc.clinicalNotes || explanation,
    medications: undefined,
    prognosis: undefined,
  };
}

/**
 * Builds a full ConditionContent record for all 5 levels from EducationalContent.
 */
function buildConditionContentLevels(
  ec: EducationalContent
): Record<ComplexityLevel, ConditionContent> {
  const result = {} as Record<ComplexityLevel, ConditionContent>;
  for (const lvl of [1, 2, 3, 4, 5] as ComplexityLevel[]) {
    const levelData = ec.levels[lvl];
    if (levelData) {
      result[lvl] = levelContentToConditionContent(levelData, lvl);
    } else {
      // Fallback: use the closest available level
      const fallback = ec.levels[3] || ec.levels[2] || ec.levels[1];
      result[lvl] = fallback
        ? levelContentToConditionContent(fallback, lvl)
        : createFallbackContent(ec.name, lvl);
    }
  }
  return result;
}

function createFallbackContent(name: string, level: ComplexityLevel): ConditionContent {
  return {
    definition: `${name} is a medical condition that affects the body's normal function.`,
    pathophysiology: `The pathophysiology of ${name} involves disruption of normal physiological processes.`,
    clinicalPresentation: `Patients with ${name} may present with a variety of symptoms depending on severity.`,
    diagnosis: `Diagnosis of ${name} involves clinical evaluation and appropriate diagnostic testing.`,
    treatment: `Treatment of ${name} depends on severity and individual patient factors.`,
  };
}

// ============================================================================
// Map ConditionAnatomyMapping -> PathologyCondition
// ============================================================================

/**
 * Determines the severity from the anatomy mapping's clinical context
 * and visualization intensity.
 */
function inferSeverity(mapping: ConditionAnatomyMapping): Severity {
  const intensity = mapping.visualizationHint?.intensity;
  if (intensity === 'high') return 'severe';
  if (intensity === 'low') return 'mild';
  return 'moderate';
}

/**
 * Determines if a condition is an emergency based on red flags presence
 * or known emergency conditions.
 */
const KNOWN_EMERGENCIES = new Set([
  'myocardial-infarction', 'pulmonary-embolism', 'stroke', 'aortic-dissection',
  'tension-pneumothorax', 'cardiac-tamponade', 'meningitis', 'sepsis',
  'anaphylaxis', 'status-epilepticus', 'acute-liver-failure', 'ruptured-aortic-aneurysm',
  'acute-kidney-injury', 'diabetic-ketoacidosis', 'hypertensive-emergency',
  'subarachnoid-hemorrhage',
]);

function inferIsEmergency(mapping: ConditionAnatomyMapping): boolean {
  if (KNOWN_EMERGENCIES.has(mapping.conditionId)) return true;
  if (mapping.clinicalContext?.redFlags && mapping.clinicalContext.redFlags.length > 0) return true;
  return false;
}

/**
 * Maps the effectType from ConditionAnatomyMapping to a ConditionCategory.
 */
function mapEffectTypeToCategory(effectType: AnatomicalEffectType): ConditionCategory {
  return EFFECT_TYPE_TO_CATEGORY[effectType] || 'idiopathic';
}

/**
 * Converts a ConditionAnatomyMapping + optional EducationalContent
 * into a full PathologyCondition.
 */
function toPathologyCondition(
  mapping: ConditionAnatomyMapping,
  educationalContent: EducationalContent | undefined,
): PathologyCondition {
  const category = mapEffectTypeToCategory(mapping.effectType);
  const severity = inferSeverity(mapping);

  let content: Record<ComplexityLevel, ConditionContent>;
  let nameEs: string | undefined;

  if (educationalContent) {
    content = buildConditionContentLevels(educationalContent);
    nameEs = educationalContent.nameEs;
  } else {
    // Build from mapping's clinicalContext alone
    content = {} as Record<ComplexityLevel, ConditionContent>;
    for (const lvl of [1, 2, 3, 4, 5] as ComplexityLevel[]) {
      content[lvl] = {
        definition: mapping.clinicalContext?.commonPresentation || `${mapping.conditionName} affects the ${mapping.affectedSystems.join(', ')} system(s).`,
        pathophysiology: `${mapping.conditionName} is a ${mapping.effectType} condition.`,
        clinicalPresentation: mapping.clinicalContext?.commonPresentation || '',
        diagnosis: `Clinical evaluation with relevant imaging and laboratory studies.`,
        treatment: `Treatment depends on severity and individual patient factors.`,
        symptoms: mapping.clinicalContext?.redFlags,
      };
    }
  }

  return {
    id: mapping.conditionId,
    name: mapping.conditionName,
    nameEs,
    category,
    severity,
    prevalence: 'common', // Default; could be enriched with epidemiological data
    isEmergency: inferIsEmergency(mapping),
    icdCodes: mapping.icdCodes,
    affectedRegions: [...mapping.primaryRegions, ...(mapping.secondaryRegions || [])],
    content,
  };
}

// ============================================================================
// Build Related Conditions
// ============================================================================

function buildRelatedConditions(
  mappings: ConditionAnatomyMapping[],
  contentMap: Map<string, EducationalContent>,
): RelatedCondition[] {
  const related: RelatedCondition[] = [];
  const seenIds = new Set<string>();

  for (const mapping of mappings) {
    // Check clinicalContext.relatedConditions
    if (mapping.clinicalContext?.relatedConditions) {
      for (const relId of mapping.clinicalContext.relatedConditions) {
        if (seenIds.has(relId)) continue;
        seenIds.add(relId);

        const relMapping = CONDITION_ANATOMY_MAP[relId];
        const relContent = contentMap.get(relId);
        const name = relMapping?.conditionName || relContent?.name || relId;
        related.push({
          id: relId,
          name,
          relationship: `related to ${mapping.conditionName}`,
        });
      }
    }

    // Check EducationalContent crossReferences
    const ec = contentMap.get(mapping.conditionId);
    if (ec?.crossReferences) {
      for (const xref of ec.crossReferences) {
        const xrefSlug = xref.targetId.replace(/^condition-/, '');
        if (seenIds.has(xrefSlug)) continue;
        seenIds.add(xrefSlug);
        related.push({
          id: xrefSlug,
          name: xref.label || xrefSlug,
          relationship: xref.relationship,
        });
      }
    }
  }

  return related.slice(0, 15); // Limit to 15 related conditions
}

// ============================================================================
// Hook Implementation
// ============================================================================

export function usePathologyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UsePathologyContentResult {
  const [conditions, setConditions] = useState<PathologyCondition[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedConditions, setRelatedConditions] = useState<RelatedCondition[] | null>(null);

  // Fetch conditions when regionId changes
  useEffect(() => {
    let isMounted = true;

    async function fetchPathologyContent() {
      setLoading(true);
      setError(null);

      try {
        // 1. Resolve region to body systems
        const bodySystems = resolveBodySystems(regionId);

        // 2. Get condition mappings from CONDITION_ANATOMY_MAP
        //    Try region-based lookup first, then system-based
        let mappings: ConditionAnatomyMapping[] = getConditionsByRegion(regionId);

        // If no direct region match, try by body system
        if (mappings.length === 0 && bodySystems.length > 0) {
          const systemMappings: ConditionAnatomyMapping[] = [];
          const seenIds = new Set<string>();
          for (const system of bodySystems) {
            const sysMappings = getConditionsBySystem(system);
            for (const m of sysMappings) {
              if (!seenIds.has(m.conditionId)) {
                seenIds.add(m.conditionId);
                systemMappings.push(m);
              }
            }
          }
          mappings = systemMappings;
        }

        if (!isMounted) return;

        // 3. Load educational content for each condition
        const contentMap = await loadAllConditionContent();

        if (!isMounted) return;

        // 4. Build PathologyCondition objects
        const pathologyConditions: PathologyCondition[] = mappings.map(mapping =>
          toPathologyCondition(mapping, contentMap.get(mapping.conditionId))
        );

        // 5. Build related conditions
        const related = buildRelatedConditions(mappings, contentMap);

        setConditions(pathologyConditions);
        setRelatedConditions(related);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load pathology content');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPathologyContent();

    return () => {
      isMounted = false;
    };
  }, [regionId]);

  // Group conditions by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<ConditionCategory, PathologyCondition[]> = {
      inflammatory: [],
      neoplastic: [],
      degenerative: [],
      infectious: [],
      autoimmune: [],
      vascular: [],
      metabolic: [],
      congenital: [],
      traumatic: [],
      functional: [],
      idiopathic: [],
    };

    if (conditions) {
      conditions.forEach(condition => {
        if (groups[condition.category]) {
          groups[condition.category].push(condition);
        }
      });
    }

    return groups;
  }, [conditions]);

  return {
    conditions,
    loading,
    error,
    relatedConditions,
    groupedByCategory,
  };
}

export default usePathologyContent;
