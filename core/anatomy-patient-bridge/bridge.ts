/**
 * Anatomy-Patient Bridge - Main Implementation
 *
 * Creates a bridge between patient data (BiologicalSelf) and anatomical regions,
 * enabling visualization of conditions, symptoms, medications, and lab results
 * on anatomical models.
 */

import type {
  BiologicalSelf,
  Condition,
  Symptom,
  Medication,
  LabResult,
} from '../biological-self/types';

import type {
  AnatomyPatientBridge,
  PatientConditionMapping,
  PatientSymptomMapping,
  PatientMedicationMapping,
  AbnormalLabMapping,
  AnatomicalEffectType,
  VisualizationType,
  BridgeSummary,
  RegionImpactSummary,
  SystemImpactSummary,
  AnatomicalSystem,
} from './types';

import {
  getRegionForICD,
  getRegionForBodyLocation,
  getOrganForLabTest,
  getTargetsForMedication,
  extractLaterality,
  selectVisualizationType,
  getSystemForRegion,
} from './utils';

// ============================================================================
// Bridge Creation
// ============================================================================

/**
 * Creates an AnatomyPatientBridge from patient data
 *
 * This is the main entry point for bridging patient data to anatomical regions.
 * It processes all conditions, symptoms, medications, and lab results to create
 * mappings that can be used for visualization.
 *
 * @param patientData - The BiologicalSelf patient data
 * @returns AnatomyPatientBridge with all mappings populated
 */
export function createBridge(patientData: BiologicalSelf): AnatomyPatientBridge {
  const bridge: AnatomyPatientBridge = {
    conditionsByRegion: new Map(),
    symptomsByRegion: new Map(),
    medicationTargets: new Map(),
    labsByOrgan: new Map(),
  };

  // Map conditions to regions
  if (patientData.conditions) {
    const conditionMappings = mapConditionsToRegions(patientData.conditions);
    for (const mapping of conditionMappings) {
      const existing = bridge.conditionsByRegion.get(mapping.regionId) || [];
      existing.push(mapping);
      bridge.conditionsByRegion.set(mapping.regionId, existing);
    }
  }

  // Map symptoms to regions
  if (patientData.symptoms) {
    const symptomMappings = mapSymptomsToRegions(patientData.symptoms);
    for (const mapping of symptomMappings) {
      const existing = bridge.symptomsByRegion.get(mapping.regionId) || [];
      existing.push(mapping);
      bridge.symptomsByRegion.set(mapping.regionId, existing);
    }
  }

  // Map medications to targets
  if (patientData.medications) {
    const medicationMappings = mapMedicationsToTargets(patientData.medications);
    for (const mapping of medicationMappings) {
      const existing = bridge.medicationTargets.get(mapping.regionId) || [];
      existing.push(mapping);
      bridge.medicationTargets.set(mapping.regionId, existing);
    }
  }

  // Map abnormal labs to organs
  if (patientData.labResults) {
    const labMappings = mapLabsToOrgans(patientData.labResults);
    for (const mapping of labMappings) {
      const existing = bridge.labsByOrgan.get(mapping.regionId) || [];
      existing.push(mapping);
      bridge.labsByOrgan.set(mapping.regionId, existing);
    }
  }

  return bridge;
}

// ============================================================================
// Condition Mapping
// ============================================================================

/**
 * Maps patient conditions to anatomical regions
 *
 * Uses ICD codes when available, falls back to condition name pattern matching.
 * Creates mappings for both primary and secondary affected regions.
 *
 * @param conditions - Array of patient conditions
 * @returns Array of PatientConditionMapping objects
 */
export function mapConditionsToRegions(conditions: Condition[]): PatientConditionMapping[] {
  const mappings: PatientConditionMapping[] = [];

  for (const condition of conditions) {
    // Skip resolved conditions (optional: could include them with different visualization)
    if (condition.status === 'resolved') {
      continue;
    }

    // Try to get region from ICD code
    const icdMapping = condition.icdCode ? getRegionForICD(condition.icdCode) : undefined;

    if (icdMapping) {
      // Create primary region mapping
      const effectType = icdMapping.defaultEffectType || inferEffectTypeFromCondition(condition.name);
      const visualizationType = icdMapping.defaultVisualization ||
        selectVisualizationType(condition.severity, effectType);

      mappings.push({
        conditionId: condition.id,
        conditionName: condition.name,
        regionId: icdMapping.primaryRegion,
        effectType,
        severity: condition.severity,
        visualizationType,
      });

      // Create secondary region mappings
      if (icdMapping.secondaryRegions) {
        for (const secondaryRegion of icdMapping.secondaryRegions) {
          mappings.push({
            conditionId: condition.id,
            conditionName: condition.name,
            regionId: secondaryRegion,
            effectType,
            severity: condition.severity,
            visualizationType: 'badge', // Secondary regions get subtle visualization
          });
        }
      }
    } else {
      // Fallback: try to infer region from condition name
      const inferredMapping = inferRegionFromConditionName(condition.name);
      if (inferredMapping) {
        const effectType = inferEffectTypeFromCondition(condition.name);
        const visualizationType = selectVisualizationType(condition.severity, effectType);

        mappings.push({
          conditionId: condition.id,
          conditionName: condition.name,
          regionId: inferredMapping.regionId,
          laterality: inferredMapping.laterality,
          effectType,
          severity: condition.severity,
          visualizationType,
        });
      }
    }
  }

  return mappings;
}

/**
 * Infer anatomical region from condition name using pattern matching
 */
function inferRegionFromConditionName(conditionName: string): {
  regionId: string;
  laterality?: 'left' | 'right' | 'bilateral';
} | undefined {
  const lowerName = conditionName.toLowerCase();

  // Pattern-based condition to region mapping
  const conditionPatterns: Array<{
    pattern: RegExp;
    regionId: string;
  }> = [
    // Cardiovascular
    { pattern: /heart (failure|disease|attack)|myocardial|cardiac/, regionId: 'cardiovascular.heart' },
    { pattern: /coronary|angina/, regionId: 'cardiovascular.coronary' },
    { pattern: /hypertension|high blood pressure/, regionId: 'cardiovascular.heart' },
    { pattern: /atrial fibrillation|arrhythmia/, regionId: 'cardiovascular.heart' },
    { pattern: /stroke|cerebrovascular/, regionId: 'nervous.brain' },
    { pattern: /deep vein thrombosis|dvt/, regionId: 'cardiovascular.lower-limb-veins' },
    { pattern: /pulmonary embolism/, regionId: 'respiratory.lungs' },

    // Respiratory
    { pattern: /asthma/, regionId: 'respiratory.bronchi' },
    { pattern: /copd|chronic obstructive/, regionId: 'respiratory.lungs' },
    { pattern: /pneumonia/, regionId: 'respiratory.lungs' },
    { pattern: /bronchitis/, regionId: 'respiratory.bronchi' },
    { pattern: /sleep apnea/, regionId: 'respiratory.upper' },

    // Digestive
    { pattern: /gerd|reflux|heartburn/, regionId: 'digestive.esophagus' },
    { pattern: /gastritis|peptic ulcer|stomach/, regionId: 'digestive.stomach' },
    { pattern: /crohn|colitis|inflammatory bowel/, regionId: 'digestive.intestines' },
    { pattern: /cirrhosis|hepatitis|liver/, regionId: 'digestive.liver' },
    { pattern: /gallstone|cholecystitis/, regionId: 'digestive.gallbladder' },
    { pattern: /pancreatitis/, regionId: 'endocrine.pancreas' },
    { pattern: /diverticulitis/, regionId: 'digestive.large-intestine' },
    { pattern: /appendicitis/, regionId: 'digestive.appendix' },

    // Endocrine
    { pattern: /diabetes|diabetic/, regionId: 'endocrine.pancreas' },
    { pattern: /hypothyroid|hyperthyroid|thyroid/, regionId: 'endocrine.thyroid' },
    { pattern: /adrenal/, regionId: 'endocrine.adrenal-glands' },

    // Musculoskeletal
    { pattern: /osteoarthritis|arthritis/, regionId: 'musculoskeletal.joints' },
    { pattern: /rheumatoid/, regionId: 'musculoskeletal.joints' },
    { pattern: /osteoporosis/, regionId: 'musculoskeletal.bones' },
    { pattern: /back pain|lumbar/, regionId: 'musculoskeletal.lumbar-spine' },
    { pattern: /cervical|neck pain/, regionId: 'musculoskeletal.cervical-spine' },
    { pattern: /fracture/, regionId: 'musculoskeletal.bones' },
    { pattern: /fibromyalgia/, regionId: 'musculoskeletal.muscles' },

    // Neurological
    { pattern: /migraine|headache/, regionId: 'nervous.brain' },
    { pattern: /epilepsy|seizure/, regionId: 'nervous.brain' },
    { pattern: /parkinson/, regionId: 'nervous.brain.basal-ganglia' },
    { pattern: /alzheimer|dementia/, regionId: 'nervous.brain.cortex' },
    { pattern: /multiple sclerosis|ms\b/, regionId: 'nervous.brain' },
    { pattern: /neuropathy/, regionId: 'nervous.peripheral' },

    // Urinary
    { pattern: /kidney disease|renal|nephro/, regionId: 'urinary.kidneys' },
    { pattern: /bladder|cystitis|urinary tract infection|uti/, regionId: 'urinary.bladder' },
    { pattern: /kidney stone/, regionId: 'urinary.kidneys' },
    { pattern: /prostate/, regionId: 'urinary.prostate' },

    // Mental Health (mapped to brain)
    { pattern: /depression|depressive/, regionId: 'nervous.brain' },
    { pattern: /anxiety|panic/, regionId: 'nervous.brain' },
    { pattern: /adhd|attention deficit/, regionId: 'nervous.brain' },
    { pattern: /bipolar/, regionId: 'nervous.brain' },
    { pattern: /schizophrenia/, regionId: 'nervous.brain' },

    // Skin
    { pattern: /eczema|dermatitis|psoriasis|skin/, regionId: 'integumentary.skin' },

    // Immune/Lymphatic
    { pattern: /lupus|autoimmune/, regionId: 'immune' },
    { pattern: /lymphoma/, regionId: 'lymphatic' },
  ];

  // Check for laterality
  let laterality: 'left' | 'right' | 'bilateral' | undefined;
  if (lowerName.includes('left') && lowerName.includes('right')) {
    laterality = 'bilateral';
  } else if (lowerName.includes('left')) {
    laterality = 'left';
  } else if (lowerName.includes('right')) {
    laterality = 'right';
  } else if (lowerName.includes('bilateral')) {
    laterality = 'bilateral';
  }

  // Find matching pattern
  for (const { pattern, regionId } of conditionPatterns) {
    if (pattern.test(lowerName)) {
      return { regionId, laterality };
    }
  }

  return undefined;
}

/**
 * Infer anatomical effect type from condition name
 */
function inferEffectTypeFromCondition(conditionName: string): AnatomicalEffectType | undefined {
  const lowerName = conditionName.toLowerCase();

  if (/fracture|break/.test(lowerName)) return 'fracture';
  if (/inflammation|inflammatory|-itis$/.test(lowerName)) return 'inflammation';
  if (/infection|infected|septic/.test(lowerName)) return 'infection';
  if (/tumor|cancer|carcinoma|sarcoma|lymphoma|leukemia|neoplasm/.test(lowerName)) return 'tumor';
  if (/atrophy|wasting/.test(lowerName)) return 'atrophy';
  if (/hypertrophy|enlarged|enlargement/.test(lowerName)) return 'hypertrophy';
  if (/ischemia|ischemic|infarct/.test(lowerName)) return 'ischemia';
  if (/necrosis|necrotic|gangrene/.test(lowerName)) return 'necrosis';
  if (/degeneration|degenerative|osteoarthritis/.test(lowerName)) return 'degeneration';
  if (/fibrosis|cirrhosis|scarring/.test(lowerName)) return 'fibrosis';
  if (/edema|swelling|effusion/.test(lowerName)) return 'edema';
  if (/hemorrhage|bleeding|hematoma/.test(lowerName)) return 'hemorrhage';

  return undefined;
}

// ============================================================================
// Symptom Mapping
// ============================================================================

/**
 * Maps patient symptoms to anatomical regions
 *
 * Uses the bodyLocation field from symptoms, which follows a hierarchical
 * anatomical path format (e.g., "body.torso.chest.heart").
 *
 * @param symptoms - Array of patient symptoms
 * @returns Array of PatientSymptomMapping objects
 */
export function mapSymptomsToRegions(symptoms: Symptom[]): PatientSymptomMapping[] {
  const mappings: PatientSymptomMapping[] = [];

  for (const symptom of symptoms) {
    // Get region from body location
    const locationMapping = getRegionForBodyLocation(symptom.bodyLocation);

    if (locationMapping) {
      // Determine visualization based on severity
      let visualizationType: VisualizationType = 'highlight';
      if (symptom.severity >= 8) {
        visualizationType = 'pulse';
      } else if (symptom.severity >= 5) {
        visualizationType = 'heatmap';
      } else if (symptom.severity >= 3) {
        visualizationType = 'highlight';
      } else {
        visualizationType = 'badge';
      }

      // Extract laterality from body location
      const laterality = extractLaterality(symptom.bodyLocation);

      mappings.push({
        symptomId: symptom.id,
        description: symptom.description,
        regionId: locationMapping.regionId,
        bodyLocation: symptom.bodyLocation,
        severity: symptom.severity,
        status: symptom.status,
        laterality,
        visualizationType,
      });
    } else {
      // Fallback: try to infer from description
      const inferredRegion = inferRegionFromSymptomDescription(symptom.description);
      if (inferredRegion) {
        const visualizationType = symptom.severity >= 5 ? 'heatmap' : 'highlight';

        mappings.push({
          symptomId: symptom.id,
          description: symptom.description,
          regionId: inferredRegion,
          bodyLocation: symptom.bodyLocation,
          severity: symptom.severity,
          status: symptom.status,
          visualizationType,
        });
      }
    }
  }

  return mappings;
}

/**
 * Infer anatomical region from symptom description
 */
function inferRegionFromSymptomDescription(description: string): string | undefined {
  const lowerDesc = description.toLowerCase();

  // Symptom description to region patterns
  const symptomPatterns: Array<{ pattern: RegExp; regionId: string }> = [
    // Pain locations
    { pattern: /chest pain|angina|heart/, regionId: 'cardiovascular.heart' },
    { pattern: /headache|head pain/, regionId: 'nervous.brain' },
    { pattern: /abdominal pain|stomach ache|belly/, regionId: 'digestive.abdomen' },
    { pattern: /back pain/, regionId: 'musculoskeletal.spine' },
    { pattern: /neck pain/, regionId: 'musculoskeletal.cervical-spine' },
    { pattern: /knee pain/, regionId: 'musculoskeletal.knee' },
    { pattern: /shoulder pain/, regionId: 'musculoskeletal.shoulder' },
    { pattern: /hip pain/, regionId: 'musculoskeletal.hip' },
    { pattern: /joint pain/, regionId: 'musculoskeletal.joints' },

    // Respiratory
    { pattern: /shortness of breath|dyspnea|breathing/, regionId: 'respiratory.lungs' },
    { pattern: /cough|coughing/, regionId: 'respiratory.bronchi' },
    { pattern: /sore throat|throat pain/, regionId: 'respiratory.pharynx' },
    { pattern: /nasal|nose|congestion/, regionId: 'respiratory.nose' },

    // Cardiac
    { pattern: /palpitation|racing heart|heart fluttering/, regionId: 'cardiovascular.heart' },

    // Digestive
    { pattern: /nausea|vomiting/, regionId: 'digestive.stomach' },
    { pattern: /diarrhea|constipation|bowel/, regionId: 'digestive.intestines' },
    { pattern: /heartburn|acid reflux/, regionId: 'digestive.esophagus' },
    { pattern: /bloating/, regionId: 'digestive.intestines' },

    // Urinary
    { pattern: /urination|urinary|peeing/, regionId: 'urinary.bladder' },
    { pattern: /flank pain/, regionId: 'urinary.kidneys' },

    // Neurological
    { pattern: /dizziness|vertigo/, regionId: 'nervous.brain' },
    { pattern: /numbness|tingling/, regionId: 'nervous.peripheral' },
    { pattern: /confusion|memory/, regionId: 'nervous.brain' },

    // General
    { pattern: /fatigue|tired|exhaustion/, regionId: 'musculoskeletal' },
    { pattern: /fever|chills/, regionId: 'immune' },
    { pattern: /rash|itching|skin/, regionId: 'integumentary.skin' },
  ];

  for (const { pattern, regionId } of symptomPatterns) {
    if (pattern.test(lowerDesc)) {
      return regionId;
    }
  }

  return undefined;
}

// ============================================================================
// Medication Mapping
// ============================================================================

/**
 * Maps patient medications to their target organs/systems
 *
 * Uses drug class patterns and medication name analysis to determine
 * which organs/systems the medication affects.
 *
 * @param medications - Array of patient medications
 * @returns Array of PatientMedicationMapping objects
 */
export function mapMedicationsToTargets(medications: Medication[]): PatientMedicationMapping[] {
  const mappings: PatientMedicationMapping[] = [];

  for (const medication of medications) {
    // Get target mapping
    const targetMapping = getTargetsForMedication(
      medication.name,
      undefined // Could pass drug class if available
    );

    if (targetMapping) {
      // Create primary target mappings
      for (const target of targetMapping.primaryTargets) {
        mappings.push({
          medicationId: medication.id,
          medicationName: medication.name,
          regionId: target,
          targetType: 'primary',
          mechanism: targetMapping.mechanism,
          status: medication.status,
          visualizationType: 'badge',
        });
      }

      // Create secondary target mappings
      if (targetMapping.secondaryTargets) {
        for (const target of targetMapping.secondaryTargets) {
          mappings.push({
            medicationId: medication.id,
            medicationName: medication.name,
            regionId: target,
            targetType: 'secondary',
            mechanism: targetMapping.mechanism,
            status: medication.status,
            visualizationType: 'badge',
          });
        }
      }
    } else {
      // Fallback: try to infer from prescribedFor field
      if (medication.prescribedFor) {
        const inferredRegion = inferRegionFromConditionName(medication.prescribedFor);
        if (inferredRegion) {
          mappings.push({
            medicationId: medication.id,
            medicationName: medication.name,
            regionId: inferredRegion.regionId,
            targetType: 'primary',
            status: medication.status,
            visualizationType: 'badge',
          });
        }
      }
    }

    // Handle side effects as targets
    if (medication.sideEffectsExperienced) {
      for (const sideEffect of medication.sideEffectsExperienced) {
        const sideEffectRegion = inferRegionFromSymptomDescription(sideEffect);
        if (sideEffectRegion) {
          mappings.push({
            medicationId: medication.id,
            medicationName: medication.name,
            regionId: sideEffectRegion,
            targetType: 'side-effect',
            status: medication.status,
            visualizationType: 'highlight',
          });
        }
      }
    }
  }

  return mappings;
}

// ============================================================================
// Lab Result Mapping
// ============================================================================

/**
 * Maps abnormal lab results to their related organs
 *
 * Only maps labs that are outside normal range. Uses LOINC codes
 * and test names to determine which organs the lab reflects.
 *
 * @param labResults - Array of patient lab results
 * @returns Array of AbnormalLabMapping objects
 */
export function mapLabsToOrgans(labResults: LabResult[]): AbnormalLabMapping[] {
  const mappings: AbnormalLabMapping[] = [];

  for (const lab of labResults) {
    // Skip normal results
    if (lab.status === 'normal' || !lab.status) {
      continue;
    }

    // Get organ mapping
    const organMapping = getOrganForLabTest(lab.testName, lab.loincCode);

    if (organMapping) {
      // Determine visualization based on status
      let visualizationType: VisualizationType = organMapping.defaultVisualization || 'highlight';
      if (lab.status === 'critical') {
        visualizationType = 'pulse';
      } else if (lab.status === 'abnormal-high' || lab.status === 'abnormal-low') {
        visualizationType = 'heatmap';
      }

      // Create primary organ mapping
      mappings.push({
        labResultId: lab.id,
        testName: lab.testName,
        regionId: organMapping.primaryOrgan,
        value: lab.value,
        unit: lab.unit,
        status: lab.status,
        clinicalSignificance: getClinicalSignificance(lab),
        visualizationType,
      });

      // Create secondary organ mappings
      if (organMapping.secondaryOrgans) {
        for (const secondaryOrgan of organMapping.secondaryOrgans) {
          mappings.push({
            labResultId: lab.id,
            testName: lab.testName,
            regionId: secondaryOrgan,
            value: lab.value,
            unit: lab.unit,
            status: lab.status,
            visualizationType: 'badge', // Secondary organs get subtle visualization
          });
        }
      }
    }
  }

  return mappings;
}

/**
 * Generate clinical significance text for a lab result
 */
function getClinicalSignificance(lab: LabResult): string {
  const statusText = lab.status === 'abnormal-high' ? 'elevated' :
                     lab.status === 'abnormal-low' ? 'low' :
                     lab.status === 'critical' ? 'critically abnormal' : 'abnormal';

  return `${lab.testName} is ${statusText}`;
}

// ============================================================================
// Bridge Utilities
// ============================================================================

/**
 * Get all regions that have any mappings in the bridge
 */
export function getAffectedRegions(bridge: AnatomyPatientBridge): string[] {
  const regions = new Set<string>();

  for (const regionId of bridge.conditionsByRegion.keys()) {
    regions.add(regionId);
  }
  for (const regionId of bridge.symptomsByRegion.keys()) {
    regions.add(regionId);
  }
  for (const regionId of bridge.medicationTargets.keys()) {
    regions.add(regionId);
  }
  for (const regionId of bridge.labsByOrgan.keys()) {
    regions.add(regionId);
  }

  return Array.from(regions);
}

/**
 * Get all mappings for a specific region
 */
export function getMappingsForRegion(
  bridge: AnatomyPatientBridge,
  regionId: string
): {
  conditions: PatientConditionMapping[];
  symptoms: PatientSymptomMapping[];
  medications: PatientMedicationMapping[];
  labs: AbnormalLabMapping[];
} {
  return {
    conditions: bridge.conditionsByRegion.get(regionId) || [],
    symptoms: bridge.symptomsByRegion.get(regionId) || [],
    medications: bridge.medicationTargets.get(regionId) || [],
    labs: bridge.labsByOrgan.get(regionId) || [],
  };
}

/**
 * Get summary statistics for a bridge
 */
export function getBridgeSummary(bridge: AnatomyPatientBridge): BridgeSummary {
  // Count totals
  let conditionCount = 0;
  let symptomCount = 0;
  let medicationCount = 0;
  let abnormalLabCount = 0;

  // Track region impacts
  const regionImpacts = new Map<string, {
    conditionCount: number;
    symptomCount: number;
    medicationCount: number;
    labCount: number;
  }>();

  // Track system impacts
  const systemImpacts = new Map<AnatomicalSystem, {
    total: number;
    regions: Set<string>;
  }>();

  // Process conditions
  for (const [regionId, mappings] of bridge.conditionsByRegion) {
    conditionCount += mappings.length;
    updateRegionImpact(regionImpacts, regionId, 'condition', mappings.length);
    updateSystemImpact(systemImpacts, regionId, mappings.length);
  }

  // Process symptoms
  for (const [regionId, mappings] of bridge.symptomsByRegion) {
    symptomCount += mappings.length;
    updateRegionImpact(regionImpacts, regionId, 'symptom', mappings.length);
    updateSystemImpact(systemImpacts, regionId, mappings.length);
  }

  // Process medications
  for (const [regionId, mappings] of bridge.medicationTargets) {
    medicationCount += mappings.length;
    updateRegionImpact(regionImpacts, regionId, 'medication', mappings.length);
    updateSystemImpact(systemImpacts, regionId, mappings.length);
  }

  // Process labs
  for (const [regionId, mappings] of bridge.labsByOrgan) {
    abnormalLabCount += mappings.length;
    updateRegionImpact(regionImpacts, regionId, 'lab', mappings.length);
    updateSystemImpact(systemImpacts, regionId, mappings.length);
  }

  // Convert to summary format and sort by total impact
  const mostAffectedRegions: RegionImpactSummary[] = Array.from(regionImpacts.entries())
    .map(([regionId, impacts]) => ({
      regionId,
      regionName: regionId, // Could be enhanced with region name lookup
      totalMappings: impacts.conditionCount + impacts.symptomCount +
                     impacts.medicationCount + impacts.labCount,
      conditionCount: impacts.conditionCount,
      symptomCount: impacts.symptomCount,
      medicationCount: impacts.medicationCount,
      labCount: impacts.labCount,
    }))
    .sort((a, b) => b.totalMappings - a.totalMappings)
    .slice(0, 10);

  const mostAffectedSystems: SystemImpactSummary[] = Array.from(systemImpacts.entries())
    .map(([system, data]) => ({
      system,
      totalMappings: data.total,
      topRegions: Array.from(data.regions).slice(0, 5),
    }))
    .sort((a, b) => b.totalMappings - a.totalMappings);

  return {
    conditionCount,
    symptomCount,
    medicationCount,
    abnormalLabCount,
    mostAffectedRegions,
    mostAffectedSystems,
  };
}

/**
 * Helper to update region impact tracking
 */
function updateRegionImpact(
  impacts: Map<string, {
    conditionCount: number;
    symptomCount: number;
    medicationCount: number;
    labCount: number;
  }>,
  regionId: string,
  type: 'condition' | 'symptom' | 'medication' | 'lab',
  count: number
): void {
  const existing = impacts.get(regionId) || {
    conditionCount: 0,
    symptomCount: 0,
    medicationCount: 0,
    labCount: 0,
  };

  if (type === 'condition') existing.conditionCount += count;
  else if (type === 'symptom') existing.symptomCount += count;
  else if (type === 'medication') existing.medicationCount += count;
  else if (type === 'lab') existing.labCount += count;

  impacts.set(regionId, existing);
}

/**
 * Helper to update system impact tracking
 */
function updateSystemImpact(
  impacts: Map<AnatomicalSystem, { total: number; regions: Set<string> }>,
  regionId: string,
  count: number
): void {
  const system = getSystemForRegion(regionId);
  if (!system) return;

  const existing = impacts.get(system) || { total: 0, regions: new Set() };
  existing.total += count;
  existing.regions.add(regionId);
  impacts.set(system, existing);
}

/**
 * Filter bridge to only include mappings for specific systems
 */
export function filterBridgeBySystem(
  bridge: AnatomyPatientBridge,
  systems: AnatomicalSystem[]
): AnatomyPatientBridge {
  const systemSet = new Set(systems);

  const filterMap = <T extends { regionId?: string }>(
    map: Map<string, T[]>
  ): Map<string, T[]> => {
    const filtered = new Map<string, T[]>();
    for (const [regionId, mappings] of map) {
      const system = getSystemForRegion(regionId);
      if (system && systemSet.has(system)) {
        filtered.set(regionId, mappings);
      }
    }
    return filtered;
  };

  return {
    conditionsByRegion: filterMap(bridge.conditionsByRegion),
    symptomsByRegion: filterMap(bridge.symptomsByRegion),
    medicationTargets: filterMap(bridge.medicationTargets),
    labsByOrgan: filterMap(bridge.labsByOrgan),
  };
}

/**
 * Merge multiple bridges together
 */
export function mergeBridges(...bridges: AnatomyPatientBridge[]): AnatomyPatientBridge {
  const merged: AnatomyPatientBridge = {
    conditionsByRegion: new Map(),
    symptomsByRegion: new Map(),
    medicationTargets: new Map(),
    labsByOrgan: new Map(),
  };

  for (const bridge of bridges) {
    for (const [regionId, mappings] of bridge.conditionsByRegion) {
      const existing = merged.conditionsByRegion.get(regionId) || [];
      merged.conditionsByRegion.set(regionId, [...existing, ...mappings]);
    }
    for (const [regionId, mappings] of bridge.symptomsByRegion) {
      const existing = merged.symptomsByRegion.get(regionId) || [];
      merged.symptomsByRegion.set(regionId, [...existing, ...mappings]);
    }
    for (const [regionId, mappings] of bridge.medicationTargets) {
      const existing = merged.medicationTargets.get(regionId) || [];
      merged.medicationTargets.set(regionId, [...existing, ...mappings]);
    }
    for (const [regionId, mappings] of bridge.labsByOrgan) {
      const existing = merged.labsByOrgan.get(regionId) || [];
      merged.labsByOrgan.set(regionId, [...existing, ...mappings]);
    }
  }

  return merged;
}
