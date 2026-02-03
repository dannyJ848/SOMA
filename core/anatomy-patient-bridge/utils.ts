/**
 * Anatomy-Patient Bridge - Utility Functions
 *
 * Helper functions for region lookups, body location parsing,
 * and mapping patient data to anatomical regions.
 */

import type {
  AnatomicalSystem,
  AnatomicalEffectType,
  VisualizationType,
  ICDRegionMapping,
  BodyLocationRegionMapping,
  LabOrganMapping,
  MedicationTargetMapping,
} from './types';

// ============================================================================
// ICD-10 to Region Mappings
// ============================================================================

/**
 * Common ICD-10 prefix to anatomical region mappings
 * These are simplified mappings - a production system would have a more comprehensive database
 */
export const ICD_REGION_MAPPINGS: ICDRegionMapping[] = [
  // Cardiovascular (I00-I99)
  { icdPrefix: 'I10', primaryRegion: 'cardiovascular.heart', defaultEffectType: 'hypertrophy', defaultVisualization: 'heatmap' },
  { icdPrefix: 'I20', primaryRegion: 'cardiovascular.coronary', defaultEffectType: 'ischemia', defaultVisualization: 'pulse' },
  { icdPrefix: 'I21', primaryRegion: 'cardiovascular.heart', secondaryRegions: ['cardiovascular.coronary'], defaultEffectType: 'necrosis', defaultVisualization: 'highlight' },
  { icdPrefix: 'I25', primaryRegion: 'cardiovascular.coronary', defaultEffectType: 'ischemia', defaultVisualization: 'heatmap' },
  { icdPrefix: 'I50', primaryRegion: 'cardiovascular.heart', defaultEffectType: 'hypertrophy', defaultVisualization: 'pulse' },

  // Respiratory (J00-J99)
  { icdPrefix: 'J00', primaryRegion: 'respiratory.nasopharynx', defaultEffectType: 'inflammation', defaultVisualization: 'highlight' },
  { icdPrefix: 'J06', primaryRegion: 'respiratory.upper', defaultEffectType: 'infection', defaultVisualization: 'highlight' },
  { icdPrefix: 'J18', primaryRegion: 'respiratory.lungs', defaultEffectType: 'infection', defaultVisualization: 'heatmap' },
  { icdPrefix: 'J44', primaryRegion: 'respiratory.lungs', defaultEffectType: 'inflammation', defaultVisualization: 'heatmap' },
  { icdPrefix: 'J45', primaryRegion: 'respiratory.bronchi', defaultEffectType: 'inflammation', defaultVisualization: 'pulse' },

  // Digestive (K00-K95)
  { icdPrefix: 'K21', primaryRegion: 'digestive.esophagus', defaultEffectType: 'inflammation', defaultVisualization: 'highlight' },
  { icdPrefix: 'K25', primaryRegion: 'digestive.stomach', defaultEffectType: 'inflammation', defaultVisualization: 'highlight' },
  { icdPrefix: 'K50', primaryRegion: 'digestive.intestines', defaultEffectType: 'inflammation', defaultVisualization: 'heatmap' },
  { icdPrefix: 'K70', primaryRegion: 'digestive.liver', defaultEffectType: 'fibrosis', defaultVisualization: 'heatmap' },
  { icdPrefix: 'K80', primaryRegion: 'digestive.gallbladder', defaultEffectType: 'inflammation', defaultVisualization: 'highlight' },

  // Musculoskeletal (M00-M99)
  { icdPrefix: 'M05', primaryRegion: 'musculoskeletal.joints', defaultEffectType: 'inflammation', defaultVisualization: 'pulse' },
  { icdPrefix: 'M15', primaryRegion: 'musculoskeletal.joints', defaultEffectType: 'degeneration', defaultVisualization: 'heatmap' },
  { icdPrefix: 'M54', primaryRegion: 'musculoskeletal.spine', defaultEffectType: 'degeneration', defaultVisualization: 'highlight' },
  { icdPrefix: 'M81', primaryRegion: 'musculoskeletal.bones', defaultEffectType: 'atrophy', defaultVisualization: 'heatmap' },

  // Nervous (G00-G99)
  { icdPrefix: 'G20', primaryRegion: 'nervous.brain.basal-ganglia', defaultEffectType: 'degeneration', defaultVisualization: 'heatmap' },
  { icdPrefix: 'G30', primaryRegion: 'nervous.brain.cortex', defaultEffectType: 'atrophy', defaultVisualization: 'heatmap' },
  { icdPrefix: 'G40', primaryRegion: 'nervous.brain', defaultEffectType: 'inflammation', defaultVisualization: 'pulse' },
  { icdPrefix: 'G43', primaryRegion: 'nervous.brain', secondaryRegions: ['cardiovascular.cerebral-vessels'], defaultVisualization: 'pulse' },

  // Endocrine (E00-E89)
  { icdPrefix: 'E10', primaryRegion: 'endocrine.pancreas', secondaryRegions: ['cardiovascular', 'nervous.peripheral'], defaultVisualization: 'heatmap' },
  { icdPrefix: 'E11', primaryRegion: 'endocrine.pancreas', secondaryRegions: ['cardiovascular', 'nervous.peripheral'], defaultVisualization: 'heatmap' },
  { icdPrefix: 'E03', primaryRegion: 'endocrine.thyroid', defaultEffectType: 'atrophy', defaultVisualization: 'highlight' },
  { icdPrefix: 'E05', primaryRegion: 'endocrine.thyroid', defaultEffectType: 'hypertrophy', defaultVisualization: 'highlight' },

  // Urinary (N00-N99)
  { icdPrefix: 'N17', primaryRegion: 'urinary.kidneys', defaultEffectType: 'ischemia', defaultVisualization: 'highlight' },
  { icdPrefix: 'N18', primaryRegion: 'urinary.kidneys', defaultEffectType: 'fibrosis', defaultVisualization: 'heatmap' },
  { icdPrefix: 'N20', primaryRegion: 'urinary.kidneys', secondaryRegions: ['urinary.ureters'], defaultVisualization: 'highlight' },
  { icdPrefix: 'N40', primaryRegion: 'urinary.prostate', defaultEffectType: 'hypertrophy', defaultVisualization: 'highlight' },
];

/**
 * Look up anatomical region(s) for an ICD-10 code
 */
export function getRegionForICD(icdCode: string): ICDRegionMapping | undefined {
  if (!icdCode) return undefined;

  // Normalize the code
  const normalizedCode = icdCode.toUpperCase().replace(/\./g, '');

  // Try progressively shorter prefixes
  for (let len = normalizedCode.length; len >= 2; len--) {
    const prefix = normalizedCode.substring(0, len);
    const mapping = ICD_REGION_MAPPINGS.find(m => m.icdPrefix === prefix);
    if (mapping) return mapping;
  }

  return undefined;
}

// ============================================================================
// Body Location to Region Mappings
// ============================================================================

/**
 * Body location path to anatomical region mappings
 */
export const BODY_LOCATION_MAPPINGS: BodyLocationRegionMapping[] = [
  // Head
  { locationPath: 'body.head.brain', regionId: 'nervous.brain', system: 'nervous' },
  { locationPath: 'body.head.skull', regionId: 'musculoskeletal.skull', system: 'musculoskeletal' },
  { locationPath: 'body.head.face', regionId: 'integumentary.face', system: 'integumentary' },
  { locationPath: 'body.head.eyes', regionId: 'nervous.eyes', system: 'nervous' },
  { locationPath: 'body.head.ears', regionId: 'nervous.ears', system: 'nervous' },
  { locationPath: 'body.head.nose', regionId: 'respiratory.nose', system: 'respiratory' },
  { locationPath: 'body.head.mouth', regionId: 'digestive.mouth', system: 'digestive' },
  { locationPath: 'body.head.throat', regionId: 'respiratory.pharynx', system: 'respiratory' },

  // Neck
  { locationPath: 'body.neck', regionId: 'musculoskeletal.cervical-spine', system: 'musculoskeletal' },
  { locationPath: 'body.neck.thyroid', regionId: 'endocrine.thyroid', system: 'endocrine' },
  { locationPath: 'body.neck.lymph-nodes', regionId: 'lymphatic.cervical-nodes', system: 'lymphatic' },

  // Torso - Chest
  { locationPath: 'body.torso.chest', regionId: 'musculoskeletal.thorax', system: 'musculoskeletal' },
  { locationPath: 'body.torso.chest.heart', regionId: 'cardiovascular.heart', system: 'cardiovascular' },
  { locationPath: 'body.torso.chest.lungs', regionId: 'respiratory.lungs', system: 'respiratory' },
  { locationPath: 'body.torso.chest.left-lung', regionId: 'respiratory.left-lung', system: 'respiratory' },
  { locationPath: 'body.torso.chest.right-lung', regionId: 'respiratory.right-lung', system: 'respiratory' },
  { locationPath: 'body.torso.chest.breasts', regionId: 'integumentary.breasts', system: 'integumentary' },

  // Torso - Abdomen
  { locationPath: 'body.torso.abdomen', regionId: 'digestive.abdomen', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.stomach', regionId: 'digestive.stomach', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.liver', regionId: 'digestive.liver', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.gallbladder', regionId: 'digestive.gallbladder', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.pancreas', regionId: 'endocrine.pancreas', system: 'endocrine' },
  { locationPath: 'body.torso.abdomen.spleen', regionId: 'lymphatic.spleen', system: 'lymphatic' },
  { locationPath: 'body.torso.abdomen.intestines', regionId: 'digestive.intestines', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.small-intestine', regionId: 'digestive.small-intestine', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.large-intestine', regionId: 'digestive.large-intestine', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.appendix', regionId: 'digestive.appendix', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.kidneys', regionId: 'urinary.kidneys', system: 'urinary' },
  { locationPath: 'body.torso.abdomen.left-kidney', regionId: 'urinary.left-kidney', system: 'urinary' },
  { locationPath: 'body.torso.abdomen.right-kidney', regionId: 'urinary.right-kidney', system: 'urinary' },
  { locationPath: 'body.torso.abdomen.adrenal-glands', regionId: 'endocrine.adrenal-glands', system: 'endocrine' },
  { locationPath: 'body.torso.abdomen.right-upper-quadrant', regionId: 'digestive.ruq', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.left-upper-quadrant', regionId: 'digestive.luq', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.right-lower-quadrant', regionId: 'digestive.rlq', system: 'digestive' },
  { locationPath: 'body.torso.abdomen.left-lower-quadrant', regionId: 'digestive.llq', system: 'digestive' },

  // Torso - Back
  { locationPath: 'body.torso.back', regionId: 'musculoskeletal.spine', system: 'musculoskeletal' },
  { locationPath: 'body.torso.back.upper', regionId: 'musculoskeletal.thoracic-spine', system: 'musculoskeletal' },
  { locationPath: 'body.torso.back.lower', regionId: 'musculoskeletal.lumbar-spine', system: 'musculoskeletal' },

  // Pelvis
  { locationPath: 'body.pelvis', regionId: 'musculoskeletal.pelvis', system: 'musculoskeletal' },
  { locationPath: 'body.pelvis.bladder', regionId: 'urinary.bladder', system: 'urinary' },
  { locationPath: 'body.pelvis.uterus', regionId: 'reproductive.uterus', system: 'reproductive' },
  { locationPath: 'body.pelvis.ovaries', regionId: 'reproductive.ovaries', system: 'reproductive' },
  { locationPath: 'body.pelvis.prostate', regionId: 'reproductive.prostate', system: 'reproductive' },
  { locationPath: 'body.pelvis.rectum', regionId: 'digestive.rectum', system: 'digestive' },

  // Upper extremities
  { locationPath: 'body.upper-extremity.shoulder', regionId: 'musculoskeletal.shoulder', system: 'musculoskeletal' },
  { locationPath: 'body.upper-extremity.arm', regionId: 'musculoskeletal.arm', system: 'musculoskeletal' },
  { locationPath: 'body.upper-extremity.elbow', regionId: 'musculoskeletal.elbow', system: 'musculoskeletal' },
  { locationPath: 'body.upper-extremity.forearm', regionId: 'musculoskeletal.forearm', system: 'musculoskeletal' },
  { locationPath: 'body.upper-extremity.wrist', regionId: 'musculoskeletal.wrist', system: 'musculoskeletal' },
  { locationPath: 'body.upper-extremity.hand', regionId: 'musculoskeletal.hand', system: 'musculoskeletal' },

  // Lower extremities
  { locationPath: 'body.lower-extremity.hip', regionId: 'musculoskeletal.hip', system: 'musculoskeletal' },
  { locationPath: 'body.lower-extremity.thigh', regionId: 'musculoskeletal.thigh', system: 'musculoskeletal' },
  { locationPath: 'body.lower-extremity.knee', regionId: 'musculoskeletal.knee', system: 'musculoskeletal' },
  { locationPath: 'body.lower-extremity.leg', regionId: 'musculoskeletal.leg', system: 'musculoskeletal' },
  { locationPath: 'body.lower-extremity.ankle', regionId: 'musculoskeletal.ankle', system: 'musculoskeletal' },
  { locationPath: 'body.lower-extremity.foot', regionId: 'musculoskeletal.foot', system: 'musculoskeletal' },
];

/**
 * Look up anatomical region for a body location path
 */
export function getRegionForBodyLocation(locationPath: string): BodyLocationRegionMapping | undefined {
  if (!locationPath) return undefined;

  // Normalize the path
  const normalizedPath = locationPath.toLowerCase().trim();

  // Try exact match first
  const exactMatch = BODY_LOCATION_MAPPINGS.find(
    m => m.locationPath.toLowerCase() === normalizedPath
  );
  if (exactMatch) return exactMatch;

  // Try progressively shorter paths (find parent region)
  const pathParts = normalizedPath.split('.');
  for (let i = pathParts.length - 1; i >= 1; i--) {
    const parentPath = pathParts.slice(0, i).join('.');
    const parentMatch = BODY_LOCATION_MAPPINGS.find(
      m => m.locationPath.toLowerCase() === parentPath
    );
    if (parentMatch) return parentMatch;
  }

  return undefined;
}

/**
 * Extract laterality from a body location path
 */
export function extractLaterality(locationPath: string): 'left' | 'right' | 'bilateral' | undefined {
  if (!locationPath) return undefined;

  const lowerPath = locationPath.toLowerCase();

  if (lowerPath.includes('left') && lowerPath.includes('right')) {
    return 'bilateral';
  }
  if (lowerPath.includes('left')) {
    return 'left';
  }
  if (lowerPath.includes('right')) {
    return 'right';
  }

  return undefined;
}

// ============================================================================
// Lab to Organ Mappings
// ============================================================================

/**
 * Common lab tests to organ mappings
 */
export const LAB_ORGAN_MAPPINGS: LabOrganMapping[] = [
  // Liver function tests
  { testName: 'ALT', loincCode: '1742-6', primaryOrgan: 'digestive.liver', defaultVisualization: 'heatmap' },
  { testName: 'AST', loincCode: '1920-8', primaryOrgan: 'digestive.liver', secondaryOrgans: ['cardiovascular.heart', 'musculoskeletal.muscles'], defaultVisualization: 'heatmap' },
  { testName: 'Alkaline Phosphatase', loincCode: '6768-6', primaryOrgan: 'digestive.liver', secondaryOrgans: ['musculoskeletal.bones'], defaultVisualization: 'heatmap' },
  { testName: 'Bilirubin', loincCode: '1975-2', primaryOrgan: 'digestive.liver', secondaryOrgans: ['digestive.gallbladder'], defaultVisualization: 'highlight' },
  { testName: 'Albumin', loincCode: '1751-7', primaryOrgan: 'digestive.liver', defaultVisualization: 'highlight' },
  { testName: 'GGT', loincCode: '2324-2', primaryOrgan: 'digestive.liver', secondaryOrgans: ['digestive.bile-ducts'], defaultVisualization: 'heatmap' },

  // Kidney function tests
  { testName: 'Creatinine', loincCode: '2160-0', primaryOrgan: 'urinary.kidneys', defaultVisualization: 'heatmap' },
  { testName: 'BUN', loincCode: '3094-0', primaryOrgan: 'urinary.kidneys', defaultVisualization: 'heatmap' },
  { testName: 'eGFR', loincCode: '48642-3', primaryOrgan: 'urinary.kidneys', defaultVisualization: 'heatmap' },
  { testName: 'Cystatin C', loincCode: '33863-2', primaryOrgan: 'urinary.kidneys', defaultVisualization: 'heatmap' },

  // Cardiac markers
  { testName: 'Troponin', loincCode: '10839-9', primaryOrgan: 'cardiovascular.heart', defaultVisualization: 'pulse' },
  { testName: 'BNP', loincCode: '30934-4', primaryOrgan: 'cardiovascular.heart', defaultVisualization: 'highlight' },
  { testName: 'NT-proBNP', loincCode: '33762-6', primaryOrgan: 'cardiovascular.heart', defaultVisualization: 'highlight' },
  { testName: 'CK-MB', loincCode: '13969-1', primaryOrgan: 'cardiovascular.heart', defaultVisualization: 'highlight' },

  // Thyroid tests
  { testName: 'TSH', loincCode: '3016-3', primaryOrgan: 'endocrine.thyroid', secondaryOrgans: ['endocrine.pituitary'], defaultVisualization: 'highlight' },
  { testName: 'Free T4', loincCode: '3024-7', primaryOrgan: 'endocrine.thyroid', defaultVisualization: 'highlight' },
  { testName: 'Free T3', loincCode: '3051-0', primaryOrgan: 'endocrine.thyroid', defaultVisualization: 'highlight' },

  // Pancreatic tests
  { testName: 'Lipase', loincCode: '3040-3', primaryOrgan: 'endocrine.pancreas', defaultVisualization: 'highlight' },
  { testName: 'Amylase', loincCode: '1798-8', primaryOrgan: 'endocrine.pancreas', secondaryOrgans: ['digestive.salivary-glands'], defaultVisualization: 'highlight' },
  { testName: 'Glucose', loincCode: '2345-7', primaryOrgan: 'endocrine.pancreas', defaultVisualization: 'heatmap' },
  { testName: 'HbA1c', loincCode: '4548-4', primaryOrgan: 'endocrine.pancreas', defaultVisualization: 'heatmap' },

  // Blood cell markers
  { testName: 'WBC', loincCode: '6690-2', primaryOrgan: 'lymphatic.bone-marrow', secondaryOrgans: ['lymphatic.spleen'], defaultVisualization: 'highlight' },
  { testName: 'RBC', loincCode: '789-8', primaryOrgan: 'lymphatic.bone-marrow', defaultVisualization: 'highlight' },
  { testName: 'Hemoglobin', loincCode: '718-7', primaryOrgan: 'lymphatic.bone-marrow', secondaryOrgans: ['respiratory.lungs'], defaultVisualization: 'heatmap' },
  { testName: 'Platelets', loincCode: '777-3', primaryOrgan: 'lymphatic.bone-marrow', secondaryOrgans: ['lymphatic.spleen'], defaultVisualization: 'highlight' },

  // Inflammatory markers
  { testName: 'CRP', loincCode: '1988-5', primaryOrgan: 'digestive.liver', defaultVisualization: 'heatmap' },
  { testName: 'ESR', loincCode: '4537-7', primaryOrgan: 'lymphatic.bone-marrow', defaultVisualization: 'highlight' },

  // Lipid panel
  { testName: 'Total Cholesterol', loincCode: '2093-3', primaryOrgan: 'digestive.liver', secondaryOrgans: ['cardiovascular'], defaultVisualization: 'heatmap' },
  { testName: 'LDL', loincCode: '13457-7', primaryOrgan: 'cardiovascular', secondaryOrgans: ['digestive.liver'], defaultVisualization: 'heatmap' },
  { testName: 'HDL', loincCode: '2085-9', primaryOrgan: 'cardiovascular', secondaryOrgans: ['digestive.liver'], defaultVisualization: 'highlight' },
  { testName: 'Triglycerides', loincCode: '2571-8', primaryOrgan: 'digestive.liver', secondaryOrgans: ['endocrine.pancreas'], defaultVisualization: 'heatmap' },
];

/**
 * Look up organ(s) for a lab test
 */
export function getOrganForLabTest(testName: string, loincCode?: string): LabOrganMapping | undefined {
  if (!testName && !loincCode) return undefined;

  // Try LOINC code first if provided
  if (loincCode) {
    const loincMatch = LAB_ORGAN_MAPPINGS.find(m => m.loincCode === loincCode);
    if (loincMatch) return loincMatch;
  }

  // Try test name (case-insensitive partial match)
  if (testName) {
    const normalizedName = testName.toLowerCase();
    const nameMatch = LAB_ORGAN_MAPPINGS.find(
      m => m.testName.toLowerCase().includes(normalizedName) ||
           normalizedName.includes(m.testName.toLowerCase())
    );
    if (nameMatch) return nameMatch;
  }

  return undefined;
}

// ============================================================================
// Medication to Target Mappings
// ============================================================================

/**
 * Common medication classes to target organ mappings
 */
export const MEDICATION_TARGET_MAPPINGS: MedicationTargetMapping[] = [
  // Cardiovascular
  { drugClass: 'ACE Inhibitor', primaryTargets: ['cardiovascular.heart', 'urinary.kidneys'], mechanism: 'Inhibits angiotensin-converting enzyme' },
  { drugClass: 'ARB', primaryTargets: ['cardiovascular.heart', 'urinary.kidneys'], mechanism: 'Blocks angiotensin II receptors' },
  { drugClass: 'Beta Blocker', primaryTargets: ['cardiovascular.heart'], secondaryTargets: ['nervous.brain'], mechanism: 'Blocks beta-adrenergic receptors' },
  { drugClass: 'Calcium Channel Blocker', primaryTargets: ['cardiovascular.heart', 'cardiovascular.vessels'], mechanism: 'Blocks calcium channels in cardiac/smooth muscle' },
  { drugClass: 'Statin', primaryTargets: ['digestive.liver', 'cardiovascular.vessels'], mechanism: 'Inhibits HMG-CoA reductase' },
  { drugClass: 'Anticoagulant', primaryTargets: ['cardiovascular', 'digestive.liver'], mechanism: 'Inhibits clotting factors' },
  { drugClass: 'Antiplatelet', primaryTargets: ['cardiovascular', 'lymphatic.bone-marrow'], mechanism: 'Inhibits platelet aggregation' },
  { drugClass: 'Diuretic', primaryTargets: ['urinary.kidneys', 'cardiovascular.heart'], mechanism: 'Increases urine output' },

  // Respiratory
  { drugClass: 'Bronchodilator', primaryTargets: ['respiratory.bronchi', 'respiratory.lungs'], mechanism: 'Relaxes bronchial smooth muscle' },
  { drugClass: 'Inhaled Corticosteroid', primaryTargets: ['respiratory.lungs', 'respiratory.bronchi'], mechanism: 'Reduces airway inflammation' },

  // Gastrointestinal
  { drugClass: 'PPI', primaryTargets: ['digestive.stomach'], secondaryTargets: ['digestive.esophagus'], mechanism: 'Inhibits gastric acid secretion' },
  { drugClass: 'H2 Blocker', primaryTargets: ['digestive.stomach'], mechanism: 'Blocks histamine H2 receptors' },

  // Endocrine
  { drugClass: 'Insulin', primaryTargets: ['endocrine.pancreas'], secondaryTargets: ['musculoskeletal.muscles', 'digestive.liver'], mechanism: 'Facilitates glucose uptake' },
  { drugClass: 'Metformin', primaryTargets: ['digestive.liver', 'endocrine.pancreas'], mechanism: 'Reduces hepatic glucose production' },
  { drugClass: 'Sulfonylurea', primaryTargets: ['endocrine.pancreas'], mechanism: 'Stimulates insulin release' },
  { drugClass: 'Thyroid Hormone', primaryTargets: ['endocrine.thyroid'], mechanism: 'Replaces thyroid hormone' },

  // Neurological/Psychiatric
  { drugClass: 'SSRI', primaryTargets: ['nervous.brain'], mechanism: 'Inhibits serotonin reuptake' },
  { drugClass: 'SNRI', primaryTargets: ['nervous.brain'], mechanism: 'Inhibits serotonin and norepinephrine reuptake' },
  { drugClass: 'Benzodiazepine', primaryTargets: ['nervous.brain'], mechanism: 'Enhances GABA activity' },
  { drugClass: 'Anticonvulsant', primaryTargets: ['nervous.brain'], mechanism: 'Stabilizes neuronal membranes' },
  { drugClass: 'Dopamine Agonist', primaryTargets: ['nervous.brain.basal-ganglia'], mechanism: 'Stimulates dopamine receptors' },

  // Pain/Inflammation
  { drugClass: 'NSAID', primaryTargets: ['musculoskeletal', 'nervous'], secondaryTargets: ['digestive.stomach', 'urinary.kidneys'], mechanism: 'Inhibits cyclooxygenase enzymes' },
  { drugClass: 'Opioid', primaryTargets: ['nervous.brain', 'nervous.spinal-cord'], mechanism: 'Binds opioid receptors' },
  { drugClass: 'Corticosteroid', primaryTargets: ['immune', 'endocrine.adrenal-glands'], mechanism: 'Suppresses immune response and inflammation' },

  // Antibiotics
  { drugClass: 'Antibiotic', primaryTargets: ['immune'], secondaryTargets: ['digestive.intestines'], mechanism: 'Kills or inhibits bacteria' },

  // Immunomodulators
  { drugClass: 'Immunosuppressant', primaryTargets: ['immune', 'lymphatic'], mechanism: 'Suppresses immune function' },
  { drugClass: 'Biologic', primaryTargets: ['immune'], mechanism: 'Targets specific immune pathways' },
];

/**
 * Look up target organs for a medication
 */
export function getTargetsForMedication(medicationName: string, drugClass?: string): MedicationTargetMapping | undefined {
  if (!medicationName && !drugClass) return undefined;

  // Try drug class first if provided
  if (drugClass) {
    const classMatch = MEDICATION_TARGET_MAPPINGS.find(
      m => m.drugClass.toLowerCase() === drugClass.toLowerCase()
    );
    if (classMatch) return classMatch;
  }

  // Try to infer drug class from medication name
  if (medicationName) {
    const lowerName = medicationName.toLowerCase();

    // Common medication name patterns to drug classes
    const namePatterns: Array<{ pattern: RegExp; drugClass: string }> = [
      { pattern: /pril$/, drugClass: 'ACE Inhibitor' },
      { pattern: /sartan$/, drugClass: 'ARB' },
      { pattern: /olol$/, drugClass: 'Beta Blocker' },
      { pattern: /dipine$/, drugClass: 'Calcium Channel Blocker' },
      { pattern: /statin$/, drugClass: 'Statin' },
      { pattern: /prazole$|^omeprazole|^pantoprazole|^esomeprazole/, drugClass: 'PPI' },
      { pattern: /tidine$/, drugClass: 'H2 Blocker' },
      { pattern: /^metformin/, drugClass: 'Metformin' },
      { pattern: /^insulin/, drugClass: 'Insulin' },
      { pattern: /^levothyroxine|^synthroid|^liothyronine/, drugClass: 'Thyroid Hormone' },
      { pattern: /^sertraline|^fluoxetine|^paroxetine|^citalopram|^escitalopram/, drugClass: 'SSRI' },
      { pattern: /^venlafaxine|^duloxetine|^desvenlafaxine/, drugClass: 'SNRI' },
      { pattern: /pam$|lam$|^diazepam|^lorazepam|^alprazolam/, drugClass: 'Benzodiazepine' },
      { pattern: /profen$|^ibuprofen|^naproxen|^meloxicam|^celecoxib/, drugClass: 'NSAID' },
      { pattern: /^prednisone|^prednisolone|^methylprednisolone|^dexamethasone/, drugClass: 'Corticosteroid' },
      { pattern: /^warfarin|^apixaban|^rivaroxaban|^dabigatran/, drugClass: 'Anticoagulant' },
      { pattern: /^aspirin|^clopidogrel|^prasugrel|^ticagrelor/, drugClass: 'Antiplatelet' },
      { pattern: /^furosemide|^hydrochlorothiazide|^spironolactone/, drugClass: 'Diuretic' },
      { pattern: /^albuterol|^salmeterol|^formoterol/, drugClass: 'Bronchodilator' },
    ];

    for (const { pattern, drugClass: dc } of namePatterns) {
      if (pattern.test(lowerName)) {
        return MEDICATION_TARGET_MAPPINGS.find(m => m.drugClass === dc);
      }
    }
  }

  return undefined;
}

// ============================================================================
// Visualization Selection Helpers
// ============================================================================

/**
 * Determine appropriate visualization type based on severity and effect type
 */
export function selectVisualizationType(
  severity?: 'mild' | 'moderate' | 'severe',
  effectType?: AnatomicalEffectType
): VisualizationType {
  // Critical effects get pulsing animation
  if (effectType === 'necrosis' || effectType === 'hemorrhage' || effectType === 'ischemia') {
    return 'pulse';
  }

  // Severity-based selection
  if (severity === 'severe') {
    return 'heatmap';
  }
  if (severity === 'moderate') {
    return 'highlight';
  }
  if (severity === 'mild') {
    return 'badge';
  }

  // Effect type based selection
  if (effectType === 'tumor' || effectType === 'hypertrophy') {
    return 'overlay';
  }
  if (effectType === 'inflammation' || effectType === 'infection') {
    return 'heatmap';
  }

  // Default
  return 'highlight';
}

/**
 * Get the anatomical system for a region ID
 */
export function getSystemForRegion(regionId: string): AnatomicalSystem | undefined {
  if (!regionId) return undefined;

  const systemPrefix = regionId.split('.')[0];

  const systemMap: Record<string, AnatomicalSystem> = {
    cardiovascular: 'cardiovascular',
    respiratory: 'respiratory',
    digestive: 'digestive',
    nervous: 'nervous',
    musculoskeletal: 'musculoskeletal',
    endocrine: 'endocrine',
    urinary: 'urinary',
    reproductive: 'reproductive',
    integumentary: 'integumentary',
    lymphatic: 'lymphatic',
    immune: 'immune',
  };

  return systemMap[systemPrefix];
}

/**
 * Parse a region ID into its components
 */
export function parseRegionId(regionId: string): {
  system: string;
  organ?: string;
  structure?: string;
} {
  const parts = regionId.split('.');
  return {
    system: parts[0] || '',
    organ: parts[1],
    structure: parts.slice(2).join('.') || undefined,
  };
}

/**
 * Build a region ID from components
 */
export function buildRegionId(system: string, organ?: string, structure?: string): string {
  const parts = [system];
  if (organ) parts.push(organ);
  if (structure) parts.push(structure);
  return parts.join('.');
}
