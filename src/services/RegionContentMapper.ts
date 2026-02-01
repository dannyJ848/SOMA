/**
 * RegionContentMapper
 *
 * Comprehensive mapping service that connects the 21 interactive body regions
 * from InteractiveBodyModel to all available educational content domains.
 *
 * This bridges the gap between the visual body model (which uses region IDs like
 * "head", "chest", "leftUpperArm") and the deep educational content organized by
 * medical specialty (cardiology, neurology, orthopedics, etc.).
 *
 * Each region maps to:
 *   - conditions: content IDs for medical conditions affecting that region
 *   - physiology: content IDs for physiological topics relevant to the region
 *   - anatomy: anatomy structure IDs for the region
 *   - specialties: medical specialties relevant to the region
 */

import type { BodySystemId } from '../../core/physiology/types';
import {
  REGION_CONTENT_MAPPINGS,
  CONDITIONS_DATABASE,
  type ConditionContent,
  type EducationalContentItem,
  type RegionMapping,
  type ContentComplexityLevel,
} from './ContentIntegrationService';

// ============================================
// Types
// ============================================

/** Content references for a single body region */
export interface RegionContentEntry {
  /** Interactive body region ID (matches InteractiveBodyModel) */
  regionId: string;
  /** Display name */
  name: string;
  /** Primary body systems associated with this region */
  bodySystems: BodySystemId[];
  /** Content IDs for conditions affecting this region */
  conditions: string[];
  /** Content IDs for physiology topics relevant to this region */
  physiology: string[];
  /** Anatomy structure IDs for this region */
  anatomy: string[];
  /** Relevant medical specialties */
  specialties: string[];
  /** Detailed content mapping keys into REGION_CONTENT_MAPPINGS */
  detailedMappingKeys: string[];
  /** Searchable keywords */
  keywords: string[];
}

/** Resolved content for a region (with full objects, not just IDs) */
export interface ResolvedRegionContent {
  regionId: string;
  name: string;
  bodySystems: BodySystemId[];
  conditions: ConditionContent[];
  physiology: EducationalContentItem[];
  anatomy: string[];
  specialties: string[];
  detailedMappings: RegionMapping[];
}

// ============================================
// The 21 Interactive Body Region IDs
// ============================================

/**
 * All interactive body region IDs from InteractiveBodyModel.
 * These are the clickable mesh regions the user interacts with.
 */
export const ALL_BODY_REGION_IDS = [
  'head',
  'neck',
  'leftShoulder',
  'rightShoulder',
  'chest',
  'abdomen',
  'pelvis',
  'leftUpperArm',
  'rightUpperArm',
  'leftForearm',
  'rightForearm',
  'leftHand',
  'rightHand',
  'leftUpperLeg',
  'rightUpperLeg',
  'leftLowerLeg',
  'rightLowerLeg',
  'leftFoot',
  'rightFoot',
  // Legacy region IDs that may still be referenced
  'leftArm',
  'rightArm',
] as const;

export type BodyRegionId = (typeof ALL_BODY_REGION_IDS)[number];

// ============================================
// Comprehensive Region-to-Content Map
// ============================================

/**
 * Complete mapping of every interactive body region to its educational content.
 *
 * Each region references:
 *   - Condition content IDs (keys in CONDITIONS_DATABASE or content paths)
 *   - Physiology content paths from core/content/
 *   - Anatomy structure IDs from REGION_CONTENT_MAPPINGS
 *   - Medical specialties
 *   - Keys into REGION_CONTENT_MAPPINGS for detailed sub-region content
 */
export const BODY_REGION_CONTENT_MAP: Record<string, RegionContentEntry> = {
  // ──────────────────────────────────────────
  // HEAD
  // ──────────────────────────────────────────
  head: {
    regionId: 'head',
    name: 'Head',
    bodySystems: ['nervous', 'integumentary', 'musculoskeletal'],
    conditions: [
      'stroke',
      'core/content/nervous/pathology/alzheimers.json',
      'core/content/nervous/pathology/parkinsons.json',
      'core/content/nervous/pathology/brain-tumors.json',
      'core/content/nervous/pathology/meningitis.json',
      'core/content/nervous/pathology/cerebral-infarction.json',
      'core/content/sensory/pathology/glaucoma.json',
      'core/content/sensory/pathology/cataracts.json',
      'core/content/sensory/pathology/macular-degeneration.json',
      'core/content/sensory/pathology/diabetic-retinopathy.json',
      'core/content/sensory/pathology/hearing-loss.json',
      'core/content/sensory/pathology/otitis-media.json',
      'core/content/sensory/pathology/menieres-disease.json',
      'core/content/respiratory/pathology/sinusitis.json',
      'core/content/respiratory/pathology/rhinitis.json',
      'core/content/endocrine/pathology/pituitary-adenoma.json',
    ],
    physiology: [
      'core/content/nervous/physiology/action-potential.json',
      'core/content/nervous/physiology/synaptic-transmission.json',
      'core/content/nervous/physiology/neurotransmitters.json',
      'core/content/nervous/physiology/cerebral-blood-flow.json',
      'core/content/nervous/physiology/cortical-function.json',
      'core/content/nervous/physiology/motor-cortex.json',
      'core/content/nervous/physiology/sensory-cortex.json',
      'core/content/sensory/physiology/visual-pathway.json',
      'core/content/sensory/physiology/hearing.json',
      'core/content/sensory/physiology/vestibular-function.json',
      'core/content/sensory/physiology/accommodation.json',
      'core/content/sensory/physiology/phototransduction.json',
      'core/content/respiratory/physiology/nasal-function.json',
      'core/content/respiratory/physiology/olfaction.json',
      'core/content/endocrine/physiology/pituitary-hormones.json',
      'core/content/endocrine/physiology/hypothalamic-control.json',
    ],
    anatomy: [
      'nervous.brain',
      'nervous.brain.cerebrum',
      'sensory.eye',
      'sensory.ear',
      'respiratory.nasalCavity',
      'endocrine.pituitary',
    ],
    specialties: [
      'Neurologist',
      'Neurosurgeon',
      'Ophthalmologist',
      'ENT Specialist',
      'Psychiatrist',
      'Neuroradiologist',
    ],
    detailedMappingKeys: [
      'nervous.brain',
      'nervous.brain.cerebrum',
      'sensory.eye',
      'sensory.ear',
      'respiratory.nasalCavity',
      'endocrine.pituitary',
    ],
    keywords: [
      'brain', 'cerebral', 'neuro', 'cognitive', 'skull', 'cranium',
      'eye', 'vision', 'ear', 'hearing', 'nose', 'sinus', 'pituitary',
      'headache', 'migraine', 'stroke', 'seizure', 'concussion',
    ],
  },

  // ──────────────────────────────────────────
  // NECK
  // ──────────────────────────────────────────
  neck: {
    regionId: 'neck',
    name: 'Neck',
    bodySystems: ['endocrine', 'respiratory', 'digestive', 'cardiovascular', 'musculoskeletal'],
    conditions: [
      'core/content/endocrine/pathology/hypothyroidism.json',
      'core/content/endocrine/pathology/hyperthyroidism.json',
      'core/content/endocrine/pathology/thyroid-nodules.json',
      'core/content/endocrine/pathology/thyroid-cancer.json',
      'core/content/respiratory/pathology/tracheal-stenosis.json',
      'core/content/digestive/pathology/gerd.json',
      'core/content/digestive/pathology/barretts-esophagus.json',
      'core/content/digestive/pathology/esophageal-cancer.json',
      'core/content/digestive/pathology/achalasia.json',
      'core/content/musculoskeletal/pathology/herniated-disc.json',
      'core/content/musculoskeletal/pathology/spinal-stenosis.json',
      'core/content/immune/pathology/lymphadenopathy.json',
    ],
    physiology: [
      'core/content/endocrine/physiology/thyroid-hormone-synthesis.json',
      'core/content/endocrine/physiology/hpt-axis.json',
      'core/content/respiratory/physiology/mucociliary-clearance.json',
      'core/content/digestive/physiology/swallowing.json',
      'core/content/digestive/physiology/esophageal-peristalsis.json',
      'core/content/nervous/physiology/spinal-reflexes.json',
      'core/content/immune/physiology/lymphatic-circulation.json',
    ],
    anatomy: [
      'endocrine.thyroid',
      'respiratory.trachea',
      'digestive.esophagus',
      'nervous.spinalCord',
      'musculoskeletal.spine',
      'immune.lymphNodes',
    ],
    specialties: [
      'Endocrinologist',
      'ENT Specialist',
      'Endocrine Surgeon',
      'Orthopedic Spine Surgeon',
      'Vascular Surgeon',
    ],
    detailedMappingKeys: [
      'endocrine.thyroid',
      'respiratory.trachea',
      'digestive.esophagus',
      'nervous.spinalCord',
      'musculoskeletal.spine',
      'immune.lymphNodes',
    ],
    keywords: [
      'thyroid', 'trachea', 'esophagus', 'cervical', 'larynx',
      'neck mass', 'goiter', 'lymph node', 'carotid', 'pharynx',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT SHOULDER
  // ──────────────────────────────────────────
  leftShoulder: {
    regionId: 'leftShoulder',
    name: 'Left Shoulder',
    bodySystems: ['musculoskeletal'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/orthopedics/injuries/rotator-cuff',
      'core/content/orthopedics/injuries/shoulder-dislocation',
      'core/content/sports-medicine/injuries/shoulder',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/synovial-fluid.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.joints.shoulder',
      'musculoskeletal.muscle',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Rheumatologist',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
    ],
    keywords: [
      'shoulder', 'rotator cuff', 'deltoid', 'scapula', 'clavicle',
      'impingement', 'dislocation', 'frozen shoulder', 'bursitis',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT SHOULDER
  // ──────────────────────────────────────────
  rightShoulder: {
    regionId: 'rightShoulder',
    name: 'Right Shoulder',
    bodySystems: ['musculoskeletal'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/orthopedics/injuries/rotator-cuff',
      'core/content/orthopedics/injuries/shoulder-dislocation',
      'core/content/sports-medicine/injuries/shoulder',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/synovial-fluid.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.joints.shoulder',
      'musculoskeletal.muscle',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Rheumatologist',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
    ],
    keywords: [
      'shoulder', 'rotator cuff', 'deltoid', 'scapula', 'clavicle',
      'impingement', 'dislocation', 'frozen shoulder', 'bursitis',
    ],
  },

  // ──────────────────────────────────────────
  // CHEST
  // ──────────────────────────────────────────
  chest: {
    regionId: 'chest',
    name: 'Chest',
    bodySystems: ['cardiovascular', 'respiratory', 'musculoskeletal'],
    conditions: [
      'myocardial-infarction',
      'pneumonia',
      'core/content/cardiovascular/pathology/heart-failure.json',
      'core/content/cardiovascular/pathology/arrhythmias.json',
      'core/content/cardiovascular/pathology/valvular-disease.json',
      'core/content/cardiovascular/pathology/cardiomyopathy.json',
      'core/content/cardiovascular/pathology/atherosclerosis.json',
      'core/content/cardiovascular/pathology/coronary-artery-disease.json',
      'core/content/cardiovascular/pathology/aortic-aneurysm.json',
      'core/content/cardiovascular/pathology/aortic-dissection.json',
      'core/content/respiratory/pathology/copd.json',
      'core/content/respiratory/pathology/asthma.json',
      'core/content/respiratory/pathology/lung-cancer.json',
      'core/content/respiratory/pathology/pulmonary-embolism.json',
    ],
    physiology: [
      'core/content/cardiovascular/physiology/cardiac-cycle.json',
      'core/content/cardiovascular/physiology/cardiac-output.json',
      'core/content/cardiovascular/physiology/blood-pressure-regulation.json',
      'core/content/cardiovascular/physiology/electrophysiology.json',
      'core/content/cardiovascular/physiology/arterial-pressure.json',
      'core/content/respiratory/physiology/gas-exchange.json',
      'core/content/respiratory/physiology/ventilation.json',
      'core/content/respiratory/physiology/respiratory-mechanics.json',
      'core/content/pulmonology/anatomy/gas-exchange.md',
      'core/content/pulmonology/anatomy/breathing-mechanics.md',
    ],
    anatomy: [
      'cardiovascular.heart',
      'cardiovascular.heart.coronaryArteries',
      'cardiovascular.aorta',
      'respiratory.lungs',
      'respiratory.trachea',
    ],
    specialties: [
      'Cardiologist',
      'Pulmonologist',
      'Cardiothoracic Surgeon',
      'Interventional Cardiologist',
      'Electrophysiologist',
    ],
    detailedMappingKeys: [
      'cardiovascular.heart',
      'cardiovascular.heart.coronaryArteries',
      'cardiovascular.aorta',
      'respiratory.lungs',
      'respiratory.trachea',
    ],
    keywords: [
      'heart', 'cardiac', 'lung', 'pulmonary', 'chest pain',
      'dyspnea', 'cough', 'palpitations', 'coronary', 'aorta',
      'breathing', 'ribcage', 'thorax',
    ],
  },

  // ──────────────────────────────────────────
  // ABDOMEN
  // ──────────────────────────────────────────
  abdomen: {
    regionId: 'abdomen',
    name: 'Abdomen',
    bodySystems: ['digestive', 'urinary', 'endocrine', 'cardiovascular'],
    conditions: [
      'cirrhosis',
      'chronic-kidney-disease',
      'diabetes-mellitus',
      'core/content/digestive/pathology/peptic-ulcer.json',
      'core/content/digestive/pathology/gastritis.json',
      'core/content/digestive/pathology/gastric-cancer.json',
      'core/content/digestive/pathology/h-pylori.json',
      'core/content/digestive/pathology/hepatitis.json',
      'core/content/digestive/pathology/fatty-liver.json',
      'core/content/digestive/pathology/hepatocellular-carcinoma.json',
      'core/content/digestive/pathology/celiac-disease.json',
      'core/content/digestive/pathology/crohns-disease.json',
      'core/content/digestive/pathology/small-bowel-obstruction.json',
      'core/content/digestive/pathology/colorectal-cancer.json',
      'core/content/digestive/pathology/ulcerative-colitis.json',
      'core/content/digestive/pathology/diverticulitis.json',
      'core/content/digestive/pathology/appendicitis.json',
      'core/content/digestive/pathology/pancreatitis.json',
      'core/content/digestive/pathology/pancreatic-cancer.json',
      'core/content/digestive/pathology/cholelithiasis.json',
      'core/content/digestive/pathology/cholecystitis.json',
      'core/content/digestive/pathology/cholangitis.json',
      'core/content/urinary/pathology/chronic-kidney-disease.json',
      'core/content/urinary/pathology/acute-kidney-injury.json',
      'core/content/urinary/pathology/glomerulonephritis.json',
      'core/content/urinary/pathology/kidney-stones.json',
      'core/content/endocrine/pathology/diabetes.json',
      'core/content/endocrine/pathology/addisons-disease.json',
      'core/content/endocrine/pathology/cushings-syndrome.json',
      'core/content/lymphatic/pathology/splenomegaly.json',
    ],
    physiology: [
      'core/content/digestive/physiology/gastric-secretion.json',
      'core/content/digestive/physiology/gastric-motility.json',
      'core/content/digestive/physiology/acid-production.json',
      'core/content/digestive/physiology/bile-production.json',
      'core/content/digestive/physiology/hepatic-metabolism.json',
      'core/content/digestive/physiology/gluconeogenesis.json',
      'core/content/digestive/physiology/drug-metabolism.json',
      'core/content/digestive/physiology/nutrient-absorption.json',
      'core/content/digestive/physiology/intestinal-motility.json',
      'core/content/digestive/physiology/water-absorption.json',
      'core/content/digestive/physiology/gut-microbiome.json',
      'core/content/digestive/physiology/exocrine-pancreas.json',
      'core/content/digestive/physiology/endocrine-pancreas.json',
      'core/content/digestive/physiology/bile-storage.json',
      'core/content/urinary/physiology/glomerular-filtration.json',
      'core/content/urinary/physiology/tubular-reabsorption.json',
      'core/content/urinary/physiology/acid-base-balance.json',
      'core/content/nephrology/kidney-function/how-kidneys-work.md',
      'core/content/endocrine/physiology/cortisol-regulation.json',
      'core/content/endocrine/physiology/aldosterone.json',
      'core/content/lymphatic/physiology/splenic-function.json',
    ],
    anatomy: [
      'digestive.liver',
      'digestive.stomach',
      'digestive.smallIntestine',
      'digestive.largeIntestine',
      'digestive.pancreas',
      'digestive.gallbladder',
      'urinary.kidneys',
      'endocrine.adrenalGlands',
      'lymphatic.spleen',
    ],
    specialties: [
      'Gastroenterologist',
      'Hepatologist',
      'Nephrologist',
      'General Surgeon',
      'Endocrinologist',
      'Colorectal Surgeon',
      'Surgical Oncologist',
    ],
    detailedMappingKeys: [
      'digestive.liver',
      'digestive.stomach',
      'digestive.smallIntestine',
      'digestive.largeIntestine',
      'digestive.pancreas',
      'digestive.gallbladder',
      'digestive.esophagus',
      'urinary.kidneys',
      'endocrine.adrenalGlands',
      'lymphatic.spleen',
    ],
    keywords: [
      'stomach', 'liver', 'intestine', 'kidney', 'pancreas', 'gallbladder',
      'spleen', 'abdominal pain', 'nausea', 'vomiting', 'diarrhea',
      'jaundice', 'GI', 'gastro', 'hepatic', 'renal',
    ],
  },

  // ──────────────────────────────────────────
  // PELVIS
  // ──────────────────────────────────────────
  pelvis: {
    regionId: 'pelvis',
    name: 'Pelvis',
    bodySystems: ['reproductive', 'urinary', 'musculoskeletal'],
    conditions: [
      'core/content/reproductive/pathology/bph.json',
      'core/content/reproductive/pathology/prostate-cancer.json',
      'core/content/reproductive/pathology/prostatitis.json',
      'core/content/reproductive/pathology/testicular-cancer.json',
      'core/content/reproductive/pathology/testicular-torsion.json',
      'core/content/reproductive/pathology/endometriosis.json',
      'core/content/reproductive/pathology/uterine-fibroids.json',
      'core/content/reproductive/pathology/endometrial-cancer.json',
      'core/content/reproductive/pathology/pcos.json',
      'core/content/reproductive/pathology/ovarian-cysts.json',
      'core/content/reproductive/pathology/ovarian-cancer.json',
      'core/content/urinary/pathology/uti.json',
      'core/content/urinary/pathology/bladder-cancer.json',
      'core/content/urinary/pathology/overactive-bladder.json',
    ],
    physiology: [
      'core/content/reproductive/physiology/menstrual-cycle.json',
      'core/content/reproductive/physiology/ovulation.json',
      'core/content/reproductive/physiology/spermatogenesis.json',
      'core/content/reproductive/physiology/testosterone-production.json',
      'core/content/reproductive/physiology/estrogen-progesterone.json',
      'core/content/reproductive/physiology/prostate-function.json',
      'core/content/urinary/physiology/micturition.json',
      'core/content/urinary/physiology/bladder-compliance.json',
    ],
    anatomy: [
      'reproductive.male.prostate',
      'reproductive.male.testes',
      'reproductive.female.uterus',
      'reproductive.female.ovaries',
      'urinary.bladder',
    ],
    specialties: [
      'OB/GYN',
      'Urologist',
      'Reproductive Endocrinologist',
      'Gynecologic Oncologist',
      'Urogynecologist',
    ],
    detailedMappingKeys: [
      'reproductive.male.prostate',
      'reproductive.male.testes',
      'reproductive.female.uterus',
      'reproductive.female.ovaries',
      'urinary.bladder',
    ],
    keywords: [
      'pelvis', 'uterus', 'ovary', 'prostate', 'bladder', 'reproductive',
      'urinary', 'menstrual', 'pregnancy', 'fertility', 'hip',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT UPPER ARM
  // ──────────────────────────────────────────
  leftUpperArm: {
    regionId: 'leftUpperArm',
    name: 'Left Upper Arm',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/musculoskeletal/pathology/rhabdomyolysis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/upper-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    keywords: [
      'humerus', 'biceps', 'triceps', 'arm fracture', 'upper arm',
      'brachial', 'muscle', 'bone',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT UPPER ARM
  // ──────────────────────────────────────────
  rightUpperArm: {
    regionId: 'rightUpperArm',
    name: 'Right Upper Arm',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/musculoskeletal/pathology/rhabdomyolysis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/upper-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    keywords: [
      'humerus', 'biceps', 'triceps', 'arm fracture', 'upper arm',
      'brachial', 'muscle', 'bone',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT FOREARM
  // ──────────────────────────────────────────
  leftForearm: {
    regionId: 'leftForearm',
    name: 'Left Forearm',
    bodySystems: ['musculoskeletal', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/upper-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'radius', 'ulna', 'forearm', 'wrist', 'elbow', 'tennis elbow',
      'fracture', 'colles',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT FOREARM
  // ──────────────────────────────────────────
  rightForearm: {
    regionId: 'rightForearm',
    name: 'Right Forearm',
    bodySystems: ['musculoskeletal', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/upper-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'radius', 'ulna', 'forearm', 'wrist', 'elbow', 'tennis elbow',
      'fracture', 'colles',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT HAND
  // ──────────────────────────────────────────
  leftHand: {
    regionId: 'leftHand',
    name: 'Left Hand',
    bodySystems: ['musculoskeletal', 'nervous', 'integumentary'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/musculoskeletal/pathology/gout.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/integumentary/pathology/eczema.json',
      'core/content/integumentary/pathology/psoriasis.json',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/synovial-fluid.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/integumentary/physiology/sensation.json',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    specialties: [
      'Rheumatologist',
      'Orthopedic Surgeon',
      'Hand Surgeon',
      'Dermatologist',
      'Neurologist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    keywords: [
      'hand', 'carpal tunnel', 'arthritis', 'fingers', 'wrist',
      'trigger finger', 'rheumatoid', 'gout', 'dupuytren',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT HAND
  // ──────────────────────────────────────────
  rightHand: {
    regionId: 'rightHand',
    name: 'Right Hand',
    bodySystems: ['musculoskeletal', 'nervous', 'integumentary'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/musculoskeletal/pathology/gout.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/integumentary/pathology/eczema.json',
      'core/content/integumentary/pathology/psoriasis.json',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/synovial-fluid.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/integumentary/physiology/sensation.json',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    specialties: [
      'Rheumatologist',
      'Orthopedic Surgeon',
      'Hand Surgeon',
      'Dermatologist',
      'Neurologist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    keywords: [
      'hand', 'carpal tunnel', 'arthritis', 'fingers', 'wrist',
      'trigger finger', 'rheumatoid', 'gout', 'dupuytren',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT UPPER LEG (THIGH)
  // ──────────────────────────────────────────
  leftUpperLeg: {
    regionId: 'leftUpperLeg',
    name: 'Left Upper Leg',
    bodySystems: ['musculoskeletal', 'cardiovascular', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/osteoporosis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/lower-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'musculoskeletal.joints.hip',
      'hematologic.bone-marrow',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Vascular Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    keywords: [
      'femur', 'thigh', 'quadriceps', 'hamstring', 'hip',
      'DVT', 'deep vein thrombosis', 'fracture', 'PAD',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT UPPER LEG (THIGH)
  // ──────────────────────────────────────────
  rightUpperLeg: {
    regionId: 'rightUpperLeg',
    name: 'Right Upper Leg',
    bodySystems: ['musculoskeletal', 'cardiovascular', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/osteoporosis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/lower-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'musculoskeletal.joints.hip',
      'hematologic.bone-marrow',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Vascular Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'hematologic.bone-marrow',
    ],
    keywords: [
      'femur', 'thigh', 'quadriceps', 'hamstring', 'hip',
      'DVT', 'deep vein thrombosis', 'fracture', 'PAD',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT LOWER LEG
  // ──────────────────────────────────────────
  leftLowerLeg: {
    regionId: 'leftLowerLeg',
    name: 'Left Lower Leg',
    bodySystems: ['musculoskeletal', 'cardiovascular', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/osteoporosis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/lower-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'musculoskeletal.joints.knee',
      'musculoskeletal.joints.ankle',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Vascular Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'tibia', 'fibula', 'calf', 'shin', 'knee', 'ankle',
      'shin splints', 'stress fracture', 'DVT', 'compartment syndrome',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT LOWER LEG
  // ──────────────────────────────────────────
  rightLowerLeg: {
    regionId: 'rightLowerLeg',
    name: 'Right Lower Leg',
    bodySystems: ['musculoskeletal', 'cardiovascular', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/osteoporosis.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/sports-medicine/injuries/lower-extremity',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
      'musculoskeletal.joints.knee',
      'musculoskeletal.joints.ankle',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Vascular Surgeon',
      'Sports Medicine Physician',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'tibia', 'fibula', 'calf', 'shin', 'knee', 'ankle',
      'shin splints', 'stress fracture', 'DVT', 'compartment syndrome',
    ],
  },

  // ──────────────────────────────────────────
  // LEFT FOOT
  // ──────────────────────────────────────────
  leftFoot: {
    regionId: 'leftFoot',
    name: 'Left Foot',
    bodySystems: ['musculoskeletal', 'integumentary', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/gout.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/integumentary/pathology/skin-infections.json',
      'core/content/integumentary/pathology/eczema.json',
      'diabetes-mellitus',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/integumentary/physiology/sensation.json',
      'core/content/integumentary/physiology/thermoregulation.json',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.joints.ankle',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Podiatrist',
      'Dermatologist',
      'Vascular Surgeon',
      'Sports Medicine Physician',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    keywords: [
      'foot', 'ankle', 'plantar fasciitis', 'bunion', 'gout',
      'diabetic foot', 'fungal', 'toenail', 'metatarsal', 'heel',
    ],
  },

  // ──────────────────────────────────────────
  // RIGHT FOOT
  // ──────────────────────────────────────────
  rightFoot: {
    regionId: 'rightFoot',
    name: 'Right Foot',
    bodySystems: ['musculoskeletal', 'integumentary', 'nervous'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/gout.json',
      'core/content/orthopedics/injuries/fractures',
      'core/content/integumentary/pathology/skin-infections.json',
      'core/content/integumentary/pathology/eczema.json',
      'diabetes-mellitus',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/integumentary/physiology/sensation.json',
      'core/content/integumentary/physiology/thermoregulation.json',
    ],
    anatomy: [
      'musculoskeletal.joints',
      'musculoskeletal.joints.ankle',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Podiatrist',
      'Dermatologist',
      'Vascular Surgeon',
      'Sports Medicine Physician',
    ],
    detailedMappingKeys: [
      'musculoskeletal.joints',
      'musculoskeletal.muscle',
      'integumentary.skin',
    ],
    keywords: [
      'foot', 'ankle', 'plantar fasciitis', 'bunion', 'gout',
      'diabetic foot', 'fungal', 'toenail', 'metatarsal', 'heel',
    ],
  },

  // ──────────────────────────────────────────
  // LEGACY: LEFT ARM (maps to leftUpperArm)
  // ──────────────────────────────────────────
  leftArm: {
    regionId: 'leftArm',
    name: 'Left Arm',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/orthopedics/injuries/fractures',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Rheumatologist',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'arm', 'humerus', 'radius', 'ulna', 'elbow', 'wrist',
      'fracture', 'carpal tunnel',
    ],
  },

  // ──────────────────────────────────────────
  // LEGACY: RIGHT ARM (maps to rightUpperArm)
  // ──────────────────────────────────────────
  rightArm: {
    regionId: 'rightArm',
    name: 'Right Arm',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    conditions: [
      'core/content/musculoskeletal/pathology/osteoarthritis.json',
      'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
      'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
      'core/content/orthopedics/injuries/fractures',
    ],
    physiology: [
      'core/content/musculoskeletal/physiology/muscle-contraction.md',
      'core/content/musculoskeletal/physiology/muscle-fiber-types.md',
      'core/content/musculoskeletal/physiology/joint-mechanics.json',
    ],
    anatomy: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    specialties: [
      'Orthopedic Surgeon',
      'Sports Medicine Physician',
      'Rheumatologist',
      'Physiatrist',
    ],
    detailedMappingKeys: [
      'musculoskeletal.muscle',
      'musculoskeletal.joints',
    ],
    keywords: [
      'arm', 'humerus', 'radius', 'ulna', 'elbow', 'wrist',
      'fracture', 'carpal tunnel',
    ],
  },
};

// ============================================
// Legacy region ID resolution
// ============================================

/** Maps legacy region IDs to their current equivalents */
const LEGACY_REGION_ALIASES: Record<string, string> = {
  leftArm: 'leftUpperArm',
  rightArm: 'rightUpperArm',
  leftLeg: 'leftUpperLeg',
  rightLeg: 'rightUpperLeg',
  // Allow kebab-case aliases used in task spec
  'head': 'head',
  'chest': 'chest',
  'abdomen': 'abdomen',
  'pelvis': 'pelvis',
  'neck': 'neck',
  'upper-arm-left': 'leftUpperArm',
  'upper-arm-right': 'rightUpperArm',
  'forearm-left': 'leftForearm',
  'forearm-right': 'rightForearm',
  'hand-left': 'leftHand',
  'hand-right': 'rightHand',
  'thigh-left': 'leftUpperLeg',
  'thigh-right': 'rightUpperLeg',
  'lower-leg-left': 'leftLowerLeg',
  'lower-leg-right': 'rightLowerLeg',
  'foot-left': 'leftFoot',
  'foot-right': 'rightFoot',
};

/**
 * Resolves a region ID, handling legacy aliases and kebab-case variants.
 */
function resolveRegionId(regionId: string): string {
  if (BODY_REGION_CONTENT_MAP[regionId]) {
    return regionId;
  }
  const alias = LEGACY_REGION_ALIASES[regionId];
  if (alias && BODY_REGION_CONTENT_MAP[alias]) {
    return alias;
  }
  return regionId;
}

// ============================================
// Public API Functions
// ============================================

/**
 * Get the full content mapping for a body region.
 *
 * Returns the RegionContentEntry with all condition IDs, physiology IDs,
 * anatomy structure IDs, and specialties for the given region.
 *
 * @param regionId - The interactive body region ID (e.g., "head", "chest", "leftUpperArm")
 * @returns The content entry, or null if the region is not mapped
 */
export function getContentForRegion(regionId: string): RegionContentEntry | null {
  const resolved = resolveRegionId(regionId);
  return BODY_REGION_CONTENT_MAP[resolved] ?? null;
}

/**
 * Get condition content IDs for a body region.
 *
 * Returns an array of condition identifiers. These may be:
 *   - Keys into CONDITIONS_DATABASE (e.g., "myocardial-infarction")
 *   - Content file paths (e.g., "core/content/cardiovascular/pathology/heart-failure.json")
 *
 * @param regionId - The interactive body region ID
 * @returns Array of condition content IDs
 */
export function getConditionsForRegion(regionId: string): string[] {
  const entry = getContentForRegion(regionId);
  return entry?.conditions ?? [];
}

/**
 * Get physiology content IDs for a body region.
 *
 * Returns an array of physiology content paths referencing educational
 * content files in core/content/.
 *
 * @param regionId - The interactive body region ID
 * @returns Array of physiology content IDs/paths
 */
export function getPhysiologyForRegion(regionId: string): string[] {
  const entry = getContentForRegion(regionId);
  return entry?.physiology ?? [];
}

/**
 * Get anatomy structure IDs for a body region.
 *
 * Returns keys into REGION_CONTENT_MAPPINGS from ContentIntegrationService.
 *
 * @param regionId - The interactive body region ID
 * @returns Array of anatomy structure IDs
 */
export function getAnatomyForRegion(regionId: string): string[] {
  const entry = getContentForRegion(regionId);
  return entry?.anatomy ?? [];
}

/**
 * Get relevant medical specialties for a body region.
 *
 * @param regionId - The interactive body region ID
 * @returns Array of specialty names
 */
export function getSpecialtiesForRegion(regionId: string): string[] {
  const entry = getContentForRegion(regionId);
  return entry?.specialties ?? [];
}

/**
 * Get resolved condition objects for a body region.
 *
 * Unlike getConditionsForRegion which returns IDs/paths, this resolves
 * condition IDs against the CONDITIONS_DATABASE to return full ConditionContent
 * objects where available.
 *
 * @param regionId - The interactive body region ID
 * @returns Array of resolved ConditionContent objects
 */
export function getResolvedConditionsForRegion(regionId: string): ConditionContent[] {
  const conditionIds = getConditionsForRegion(regionId);
  return conditionIds
    .map(id => CONDITIONS_DATABASE[id])
    .filter((c): c is ConditionContent => c !== undefined);
}

/**
 * Get resolved detailed mappings for a body region.
 *
 * Returns full RegionMapping objects from REGION_CONTENT_MAPPINGS for
 * each anatomy structure associated with the region.
 *
 * @param regionId - The interactive body region ID
 * @returns Array of RegionMapping objects
 */
export function getDetailedMappingsForRegion(regionId: string): RegionMapping[] {
  const entry = getContentForRegion(regionId);
  if (!entry) return [];

  return entry.detailedMappingKeys
    .map(key => REGION_CONTENT_MAPPINGS[key])
    .filter((m): m is RegionMapping => m !== undefined);
}

/**
 * Get fully resolved content for a body region.
 *
 * This is the most comprehensive accessor: it resolves condition objects,
 * builds physiology EducationalContentItems, and fetches detailed RegionMappings.
 *
 * @param regionId - The interactive body region ID
 * @param complexityLevel - Content complexity level (1-5), default 3
 * @returns ResolvedRegionContent or null if region is unknown
 */
export function getResolvedContentForRegion(
  regionId: string,
  complexityLevel: ContentComplexityLevel = 3,
): ResolvedRegionContent | null {
  const entry = getContentForRegion(regionId);
  if (!entry) return null;

  const conditions = getResolvedConditionsForRegion(regionId);
  const detailedMappings = getDetailedMappingsForRegion(regionId);

  // Build physiology items from paths
  const physiology: EducationalContentItem[] = entry.physiology.map(path => {
    const filename = path.split('/').pop() ?? '';
    const name = filename
      .replace(/\.(json|md)$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      id: path.replace(/[/\.]/g, '-'),
      name,
      type: 'physiology' as const,
      path,
      summary: `Physiology content: ${name}`,
      complexity: complexityLevel,
      tags: ['physiology', entry.regionId],
      relatedRegions: [entry.regionId],
      relatedSystems: [...entry.bodySystems],
    };
  });

  return {
    regionId: entry.regionId,
    name: entry.name,
    bodySystems: entry.bodySystems,
    conditions,
    physiology,
    anatomy: entry.anatomy,
    specialties: entry.specialties,
    detailedMappings,
  };
}

/**
 * Search all regions by keyword.
 *
 * Finds regions whose keywords, name, conditions, or specialties
 * match the given query string.
 *
 * @param query - Search term
 * @returns Array of matching RegionContentEntry objects
 */
export function searchRegionsByKeyword(query: string): RegionContentEntry[] {
  const normalized = query.toLowerCase();
  return Object.values(BODY_REGION_CONTENT_MAP).filter(entry =>
    entry.name.toLowerCase().includes(normalized) ||
    entry.keywords.some(kw => kw.toLowerCase().includes(normalized)) ||
    entry.specialties.some(sp => sp.toLowerCase().includes(normalized)) ||
    entry.conditions.some(c => c.toLowerCase().includes(normalized)),
  );
}

/**
 * Get all mapped body region IDs (excluding legacy aliases).
 */
export function getAllMappedRegionIds(): string[] {
  return Object.keys(BODY_REGION_CONTENT_MAP);
}

/**
 * Check if a region ID is mapped.
 */
export function isRegionMapped(regionId: string): boolean {
  const resolved = resolveRegionId(regionId);
  return resolved in BODY_REGION_CONTENT_MAP;
}
