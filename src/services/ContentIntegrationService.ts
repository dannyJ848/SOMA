/**
 * Content Integration Service
 *
 * Maps anatomical regions to educational content modules, providing
 * comprehensive access to physiology, histology, pathology, clinical,
 * and condition content for each region.
 */

import type { BodySystemId } from '../../core/physiology/types';
import type { PathologicalCategory } from '../../core/pathology/types';
import type {
  EducationalContent,
  PartialEducationalContent,
  ComplexityLevel,
  LevelContent,
  ContentTags
} from '../../core/content/types';

// ============================================
// Types
// ============================================

/**
 * Complexity level for content filtering (1-5 scale)
 */
export type ContentComplexityLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Educational content structure with metadata
 */
export interface EducationalContentItem {
  id: string;
  name: string;
  type: 'physiology' | 'histology' | 'pathology' | 'clinical' | 'condition' | 'procedure' | 'anatomy';
  path: string;
  summary: string;
  complexity: ContentComplexityLevel;
  tags: string[];
  relatedRegions: string[];
  relatedSystems: BodySystemId[];
}

/**
 * Condition affecting a region
 */
export interface ConditionContent {
  id: string;
  name: string;
  category: PathologicalCategory;
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  symptoms: string[];
  prevalence?: string;
  riskFactors: string[];
  diagnosticTests: string[];
  treatments: string[];
  specialists: string[];
  relatedConditions: string[];
  contentPath: string;
  keywords?: string[];
}

/**
 * Aggregated educational content for a region
 */
export interface RegionEducationalContent {
  physiology: EducationalContentItem[];
  histology: EducationalContentItem[];
  pathology: EducationalContentItem[];
  clinical: EducationalContentItem[];
  conditions: ConditionContent[];
  relatedSpecialties: string[];
  relatedRegions: string[];
}

/**
 * Content path mapping for a region
 */
export interface RegionContentPaths {
  physiology: string[];
  histology: string[];
  pathology: string[];
  clinical: string[];
  conditions: string[];
}

/**
 * Complete region mapping entry
 */
export interface RegionMapping {
  regionId: string;
  name: string;
  system: BodySystemId;
  parentRegion?: string;
  childRegions: string[];
  contentPaths: RegionContentPaths;
  specialists: string[];
  relatedConditions: string[];
  keywords: string[];
}

// ============================================
// Region-to-Content Mapping Database
// ============================================

/**
 * Comprehensive mapping of anatomical regions to educational content
 */
export const REGION_CONTENT_MAPPINGS: Record<string, RegionMapping> = {
  // ============================================
  // CARDIOVASCULAR SYSTEM
  // ============================================
  'cardiovascular.heart': {
    regionId: 'cardiovascular.heart',
    name: 'Heart',
    system: 'cardiovascular',
    childRegions: [
      'cardiovascular.heart.rightAtrium',
      'cardiovascular.heart.leftAtrium',
      'cardiovascular.heart.rightVentricle',
      'cardiovascular.heart.leftVentricle',
      'cardiovascular.heart.valves',
      'cardiovascular.heart.coronaryArteries',
      'cardiovascular.heart.conductionSystem'
    ],
    contentPaths: {
      physiology: [
        'core/content/cardiovascular/physiology/cardiac-cycle.json',
        'core/content/cardiovascular/physiology/cardiac-output.json',
        'core/content/cardiovascular/physiology/blood-pressure-regulation.json',
        'core/content/cardiovascular/physiology/electrophysiology.json'
      ],
      histology: [
        'core/content/cardiovascular/histology/cardiac-muscle.json',
        'core/content/cardiovascular/histology/endocardium.json',
        'core/content/cardiovascular/histology/pericardium.json'
      ],
      pathology: [
        'core/content/cardiovascular/pathology/myocardial-infarction.json',
        'core/content/cardiovascular/pathology/heart-failure.json',
        'core/content/cardiovascular/pathology/arrhythmias.json',
        'core/content/cardiovascular/pathology/valvular-disease.json',
        'core/content/cardiovascular/pathology/cardiomyopathy.json'
      ],
      clinical: [
        'core/content/cardiovascular/clinical/ecg-interpretation.json',
        'core/content/cardiovascular/clinical/cardiac-auscultation.json',
        'core/content/cardiovascular/clinical/cardiac-catheterization.json',
        'core/content/cardiovascular/anatomy/heart-chambers.json',
        'core/content/cardiovascular/anatomy/heart-valves.json',
        'core/content/cardiovascular/anatomy/coronary-arteries.json'
      ],
      conditions: [
        'core/content/emergency/heart-attack.md'
      ]
    },
    specialists: ['Cardiologist', 'Cardiothoracic Surgeon', 'Electrophysiologist', 'Interventional Cardiologist'],
    relatedConditions: [
      'myocardial-infarction', 'heart-failure', 'atrial-fibrillation', 'coronary-artery-disease',
      'valvular-heart-disease', 'cardiomyopathy', 'endocarditis', 'pericarditis'
    ],
    keywords: ['heart', 'cardiac', 'cardio', 'coronary', 'myocardium', 'ventricle', 'atrium']
  },

  'cardiovascular.heart.coronaryArteries': {
    regionId: 'cardiovascular.heart.coronaryArteries',
    name: 'Coronary Arteries',
    system: 'cardiovascular',
    parentRegion: 'cardiovascular.heart',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/cardiovascular/physiology/coronary-circulation.json'
      ],
      histology: [
        'core/content/cardiovascular/histology/arterial-wall.json'
      ],
      pathology: [
        'core/content/cardiovascular/pathology/atherosclerosis.json',
        'core/content/cardiovascular/pathology/coronary-artery-disease.json'
      ],
      clinical: [
        'core/content/cardiovascular/anatomy/coronary-arteries.json',
        'core/content/cardiovascular/clinical/coronary-angiography.json'
      ],
      conditions: []
    },
    specialists: ['Interventional Cardiologist', 'Cardiothoracic Surgeon'],
    relatedConditions: ['coronary-artery-disease', 'myocardial-infarction', 'angina'],
    keywords: ['coronary', 'LAD', 'LCX', 'RCA', 'left main', 'coronary artery']
  },

  'cardiovascular.aorta': {
    regionId: 'cardiovascular.aorta',
    name: 'Aorta',
    system: 'cardiovascular',
    childRegions: ['cardiovascular.aorta.ascending', 'cardiovascular.aorta.arch', 'cardiovascular.aorta.descending'],
    contentPaths: {
      physiology: [
        'core/content/cardiovascular/physiology/arterial-pressure.json',
        'core/content/cardiovascular/physiology/windkessel-effect.json'
      ],
      histology: [
        'core/content/cardiovascular/histology/elastic-artery.json'
      ],
      pathology: [
        'core/content/cardiovascular/pathology/aortic-aneurysm.json',
        'core/content/cardiovascular/pathology/aortic-dissection.json'
      ],
      clinical: [
        'core/content/cardiovascular/clinical/aortic-imaging.json'
      ],
      conditions: []
    },
    specialists: ['Vascular Surgeon', 'Cardiothoracic Surgeon', 'Cardiologist'],
    relatedConditions: ['aortic-aneurysm', 'aortic-dissection', 'aortic-stenosis', 'aortic-regurgitation'],
    keywords: ['aorta', 'aortic', 'great vessel']
  },

  // ============================================
  // NERVOUS SYSTEM
  // ============================================
  'nervous.brain': {
    regionId: 'nervous.brain',
    name: 'Brain',
    system: 'nervous',
    childRegions: [
      'nervous.brain.cerebrum',
      'nervous.brain.cerebellum',
      'nervous.brain.brainstem',
      'nervous.brain.thalamus',
      'nervous.brain.hypothalamus',
      'nervous.brain.hippocampus',
      'nervous.brain.basalGanglia'
    ],
    contentPaths: {
      physiology: [
        'core/content/nervous/physiology/action-potential.json',
        'core/content/nervous/physiology/synaptic-transmission.json',
        'core/content/nervous/physiology/neurotransmitters.json',
        'core/content/nervous/physiology/cerebral-blood-flow.json'
      ],
      histology: [
        'core/content/nervous/histology/neurons.json',
        'core/content/nervous/histology/glial-cells.json',
        'core/content/nervous/histology/meninges.json',
        'core/content/nervous/histology/blood-brain-barrier.json'
      ],
      pathology: [
        'core/content/nervous/pathology/stroke.json',
        'core/content/nervous/pathology/alzheimers.json',
        'core/content/nervous/pathology/parkinsons.json',
        'core/content/nervous/pathology/brain-tumors.json',
        'core/content/nervous/pathology/meningitis.json'
      ],
      clinical: [
        'core/content/nervous/clinical/neurological-exam.json',
        'core/content/nervous/clinical/brain-imaging.json'
      ],
      conditions: [
        'core/content/emergency/stroke-fast.md'
      ]
    },
    specialists: ['Neurologist', 'Neurosurgeon', 'Neuroradiologist', 'Neuropsychologist'],
    relatedConditions: [
      'stroke', 'alzheimers-disease', 'parkinsons-disease', 'epilepsy', 'brain-tumor',
      'meningitis', 'encephalitis', 'traumatic-brain-injury', 'multiple-sclerosis'
    ],
    keywords: ['brain', 'cerebral', 'neuro', 'cognitive', 'central nervous system', 'CNS']
  },

  'nervous.brain.cerebrum': {
    regionId: 'nervous.brain.cerebrum',
    name: 'Cerebrum',
    system: 'nervous',
    parentRegion: 'nervous.brain',
    childRegions: [
      'nervous.brain.cerebrum.frontalLobe',
      'nervous.brain.cerebrum.parietalLobe',
      'nervous.brain.cerebrum.temporalLobe',
      'nervous.brain.cerebrum.occipitalLobe'
    ],
    contentPaths: {
      physiology: [
        'core/content/nervous/physiology/cortical-function.json',
        'core/content/nervous/physiology/motor-cortex.json',
        'core/content/nervous/physiology/sensory-cortex.json'
      ],
      histology: [
        'core/content/nervous/histology/cerebral-cortex.json'
      ],
      pathology: [
        'core/content/nervous/pathology/cerebral-infarction.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Neurologist', 'Neurosurgeon'],
    relatedConditions: ['stroke', 'seizures', 'brain-tumor'],
    keywords: ['cerebrum', 'cortex', 'hemisphere', 'gray matter', 'white matter']
  },

  'nervous.spinalCord': {
    regionId: 'nervous.spinalCord',
    name: 'Spinal Cord',
    system: 'nervous',
    childRegions: ['nervous.spinalCord.cervical', 'nervous.spinalCord.thoracic', 'nervous.spinalCord.lumbar', 'nervous.spinalCord.sacral'],
    contentPaths: {
      physiology: [
        'core/content/nervous/physiology/spinal-reflexes.json',
        'core/content/nervous/physiology/ascending-tracts.json',
        'core/content/nervous/physiology/descending-tracts.json'
      ],
      histology: [
        'core/content/nervous/histology/spinal-cord-cross-section.json'
      ],
      pathology: [
        'core/content/nervous/pathology/spinal-cord-injury.json',
        'core/content/nervous/pathology/myelopathy.json'
      ],
      clinical: [
        'core/content/procedures/diagnostic/lumbar-puncture.md'
      ],
      conditions: []
    },
    specialists: ['Neurologist', 'Neurosurgeon', 'Physiatrist', 'Orthopedic Spine Surgeon'],
    relatedConditions: ['spinal-cord-injury', 'herniated-disc', 'spinal-stenosis', 'myelopathy'],
    keywords: ['spinal cord', 'spine', 'vertebral', 'cord injury', 'paralysis']
  },

  // ============================================
  // DIGESTIVE SYSTEM
  // ============================================
  'digestive.liver': {
    regionId: 'digestive.liver',
    name: 'Liver',
    system: 'digestive',
    childRegions: ['digestive.liver.rightLobe', 'digestive.liver.leftLobe', 'digestive.liver.caudate', 'digestive.liver.quadrate'],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/bile-production.json',
        'core/content/digestive/physiology/hepatic-metabolism.json',
        'core/content/digestive/physiology/gluconeogenesis.json',
        'core/content/digestive/physiology/drug-metabolism.json'
      ],
      histology: [
        'core/content/digestive/histology/hepatocytes.json',
        'core/content/digestive/histology/hepatic-lobule.json',
        'core/content/digestive/histology/kupffer-cells.json'
      ],
      pathology: [
        'core/content/digestive/pathology/cirrhosis.json',
        'core/content/digestive/pathology/hepatitis.json',
        'core/content/digestive/pathology/fatty-liver.json',
        'core/content/digestive/pathology/hepatocellular-carcinoma.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/liver.json',
        'core/content/hepatology/liver-function/what-the-liver-does.md',
        'core/content/hepatology/liver-function/liver-function-tests.md'
      ],
      conditions: []
    },
    specialists: ['Hepatologist', 'Gastroenterologist', 'Hepatobiliary Surgeon', 'Transplant Surgeon'],
    relatedConditions: [
      'cirrhosis', 'hepatitis-a', 'hepatitis-b', 'hepatitis-c', 'fatty-liver-disease',
      'hepatocellular-carcinoma', 'liver-failure', 'portal-hypertension'
    ],
    keywords: ['liver', 'hepatic', 'hepato', 'bile', 'cirrhosis', 'hepatitis']
  },

  'digestive.stomach': {
    regionId: 'digestive.stomach',
    name: 'Stomach',
    system: 'digestive',
    childRegions: ['digestive.stomach.fundus', 'digestive.stomach.body', 'digestive.stomach.antrum', 'digestive.stomach.pylorus'],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/gastric-secretion.json',
        'core/content/digestive/physiology/gastric-motility.json',
        'core/content/digestive/physiology/acid-production.json'
      ],
      histology: [
        'core/content/digestive/histology/gastric-glands.json',
        'core/content/digestive/histology/parietal-cells.json',
        'core/content/digestive/histology/chief-cells.json'
      ],
      pathology: [
        'core/content/digestive/pathology/peptic-ulcer.json',
        'core/content/digestive/pathology/gastritis.json',
        'core/content/digestive/pathology/gastric-cancer.json',
        'core/content/digestive/pathology/h-pylori.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/stomach.json',
        'core/content/procedures/diagnostic/endoscopy.md'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'General Surgeon', 'Surgical Oncologist'],
    relatedConditions: ['peptic-ulcer-disease', 'gastritis', 'gastric-cancer', 'gerd', 'h-pylori-infection'],
    keywords: ['stomach', 'gastric', 'gastro', 'peptic', 'ulcer', 'acid']
  },

  'digestive.smallIntestine': {
    regionId: 'digestive.smallIntestine',
    name: 'Small Intestine',
    system: 'digestive',
    childRegions: ['digestive.smallIntestine.duodenum', 'digestive.smallIntestine.jejunum', 'digestive.smallIntestine.ileum'],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/nutrient-absorption.json',
        'core/content/digestive/physiology/intestinal-motility.json',
        'core/content/digestive/physiology/brush-border-enzymes.json'
      ],
      histology: [
        'core/content/digestive/histology/intestinal-villi.json',
        'core/content/digestive/histology/enterocytes.json',
        'core/content/digestive/histology/peyers-patches.json'
      ],
      pathology: [
        'core/content/digestive/pathology/celiac-disease.json',
        'core/content/digestive/pathology/crohns-disease.json',
        'core/content/digestive/pathology/small-bowel-obstruction.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/small-intestine.json'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'General Surgeon'],
    relatedConditions: ['celiac-disease', 'crohns-disease', 'small-bowel-obstruction', 'malabsorption'],
    keywords: ['small intestine', 'duodenum', 'jejunum', 'ileum', 'bowel', 'gut']
  },

  'digestive.largeIntestine': {
    regionId: 'digestive.largeIntestine',
    name: 'Large Intestine',
    system: 'digestive',
    childRegions: ['digestive.largeIntestine.cecum', 'digestive.largeIntestine.colon', 'digestive.largeIntestine.rectum'],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/water-absorption.json',
        'core/content/digestive/physiology/gut-microbiome.json',
        'core/content/digestive/physiology/defecation-reflex.json'
      ],
      histology: [
        'core/content/digestive/histology/colonic-mucosa.json',
        'core/content/digestive/histology/goblet-cells.json'
      ],
      pathology: [
        'core/content/digestive/pathology/colorectal-cancer.json',
        'core/content/digestive/pathology/ulcerative-colitis.json',
        'core/content/digestive/pathology/diverticulitis.json',
        'core/content/digestive/pathology/appendicitis.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/large-intestine.json'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'Colorectal Surgeon', 'General Surgeon'],
    relatedConditions: ['colorectal-cancer', 'ulcerative-colitis', 'crohns-disease', 'diverticulitis', 'appendicitis', 'ibs'],
    keywords: ['colon', 'large intestine', 'colorectal', 'bowel', 'rectum', 'cecum']
  },

  'digestive.pancreas': {
    regionId: 'digestive.pancreas',
    name: 'Pancreas',
    system: 'digestive',
    childRegions: ['digestive.pancreas.head', 'digestive.pancreas.body', 'digestive.pancreas.tail'],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/exocrine-pancreas.json',
        'core/content/digestive/physiology/endocrine-pancreas.json',
        'core/content/digestive/physiology/pancreatic-enzymes.json'
      ],
      histology: [
        'core/content/digestive/histology/acinar-cells.json',
        'core/content/digestive/histology/islets-of-langerhans.json'
      ],
      pathology: [
        'core/content/digestive/pathology/pancreatitis.json',
        'core/content/digestive/pathology/pancreatic-cancer.json',
        'core/content/endocrine/pathology/diabetes.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/pancreas.json'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'Endocrinologist', 'Pancreatic Surgeon', 'Surgical Oncologist'],
    relatedConditions: ['acute-pancreatitis', 'chronic-pancreatitis', 'pancreatic-cancer', 'diabetes-mellitus'],
    keywords: ['pancreas', 'pancreatic', 'insulin', 'glucagon', 'islets', 'amylase', 'lipase']
  },

  'digestive.gallbladder': {
    regionId: 'digestive.gallbladder',
    name: 'Gallbladder',
    system: 'digestive',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/bile-storage.json',
        'core/content/digestive/physiology/bile-release.json'
      ],
      histology: [
        'core/content/digestive/histology/gallbladder-mucosa.json'
      ],
      pathology: [
        'core/content/digestive/pathology/cholelithiasis.json',
        'core/content/digestive/pathology/cholecystitis.json',
        'core/content/digestive/pathology/cholangitis.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/gallbladder-biliary.json'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'General Surgeon', 'Hepatobiliary Surgeon'],
    relatedConditions: ['gallstones', 'cholecystitis', 'cholangitis', 'biliary-colic'],
    keywords: ['gallbladder', 'biliary', 'bile', 'gallstones', 'cholecyst']
  },

  'digestive.esophagus': {
    regionId: 'digestive.esophagus',
    name: 'Esophagus',
    system: 'digestive',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/digestive/physiology/swallowing.json',
        'core/content/digestive/physiology/esophageal-peristalsis.json'
      ],
      histology: [
        'core/content/digestive/histology/esophageal-epithelium.json'
      ],
      pathology: [
        'core/content/digestive/pathology/gerd.json',
        'core/content/digestive/pathology/barretts-esophagus.json',
        'core/content/digestive/pathology/esophageal-cancer.json',
        'core/content/digestive/pathology/achalasia.json'
      ],
      clinical: [
        'core/content/digestive/anatomy/esophagus.json',
        'core/content/procedures/diagnostic/endoscopy.md'
      ],
      conditions: []
    },
    specialists: ['Gastroenterologist', 'Thoracic Surgeon', 'ENT Specialist'],
    relatedConditions: ['gerd', 'barretts-esophagus', 'esophageal-cancer', 'achalasia', 'esophagitis'],
    keywords: ['esophagus', 'esophageal', 'swallowing', 'dysphagia', 'reflux']
  },

  // ============================================
  // RESPIRATORY SYSTEM
  // ============================================
  'respiratory.lungs': {
    regionId: 'respiratory.lungs',
    name: 'Lungs',
    system: 'respiratory',
    childRegions: ['respiratory.lungs.left', 'respiratory.lungs.right', 'respiratory.lungs.bronchi', 'respiratory.lungs.alveoli'],
    contentPaths: {
      physiology: [
        'core/content/respiratory/physiology/gas-exchange.json',
        'core/content/respiratory/physiology/ventilation.json',
        'core/content/respiratory/physiology/respiratory-mechanics.json',
        'core/content/pulmonology/anatomy/gas-exchange.md',
        'core/content/pulmonology/anatomy/breathing-mechanics.md'
      ],
      histology: [
        'core/content/respiratory/histology/alveolar-epithelium.json',
        'core/content/respiratory/histology/type-i-pneumocytes.json',
        'core/content/respiratory/histology/type-ii-pneumocytes.json'
      ],
      pathology: [
        'core/content/respiratory/pathology/pneumonia.json',
        'core/content/respiratory/pathology/copd.json',
        'core/content/respiratory/pathology/asthma.json',
        'core/content/respiratory/pathology/lung-cancer.json',
        'core/content/respiratory/pathology/pulmonary-embolism.json'
      ],
      clinical: [
        'core/content/respiratory/anatomy/lung-lobes-segments.json',
        'core/content/respiratory/anatomy/pleura-pleural-cavity.json',
        'core/content/pulmonology/anatomy/lung-anatomy.md',
        'core/content/procedures/diagnostic/bronchoscopy.md'
      ],
      conditions: []
    },
    specialists: ['Pulmonologist', 'Thoracic Surgeon', 'Interventional Pulmonologist'],
    relatedConditions: [
      'pneumonia', 'copd', 'asthma', 'lung-cancer', 'pulmonary-embolism',
      'pulmonary-fibrosis', 'pneumothorax', 'ards'
    ],
    keywords: ['lung', 'pulmonary', 'respiratory', 'breathing', 'alveoli', 'bronchi']
  },

  'respiratory.trachea': {
    regionId: 'respiratory.trachea',
    name: 'Trachea',
    system: 'respiratory',
    childRegions: ['respiratory.trachea.mainBronchi'],
    contentPaths: {
      physiology: [
        'core/content/respiratory/physiology/mucociliary-clearance.json'
      ],
      histology: [
        'core/content/respiratory/histology/respiratory-epithelium.json',
        'core/content/respiratory/histology/tracheal-cartilage.json'
      ],
      pathology: [
        'core/content/respiratory/pathology/tracheal-stenosis.json',
        'core/content/respiratory/pathology/tracheitis.json'
      ],
      clinical: [
        'core/content/respiratory/anatomy/trachea-bronchial-tree.json'
      ],
      conditions: []
    },
    specialists: ['Pulmonologist', 'Thoracic Surgeon', 'ENT Specialist'],
    relatedConditions: ['tracheal-stenosis', 'tracheitis', 'foreign-body-aspiration'],
    keywords: ['trachea', 'windpipe', 'airway', 'bronchus', 'bronchial']
  },

  'respiratory.nasalCavity': {
    regionId: 'respiratory.nasalCavity',
    name: 'Nasal Cavity',
    system: 'respiratory',
    childRegions: ['respiratory.nasalCavity.sinuses'],
    contentPaths: {
      physiology: [
        'core/content/respiratory/physiology/nasal-function.json',
        'core/content/respiratory/physiology/olfaction.json'
      ],
      histology: [
        'core/content/respiratory/histology/nasal-mucosa.json',
        'core/content/respiratory/histology/olfactory-epithelium.json'
      ],
      pathology: [
        'core/content/respiratory/pathology/sinusitis.json',
        'core/content/respiratory/pathology/rhinitis.json',
        'core/content/respiratory/pathology/nasal-polyps.json'
      ],
      clinical: [
        'core/content/respiratory/anatomy/nasal-cavity-paranasal-sinuses.json'
      ],
      conditions: []
    },
    specialists: ['ENT Specialist', 'Allergist', 'Rhinologist'],
    relatedConditions: ['sinusitis', 'allergic-rhinitis', 'nasal-polyps', 'deviated-septum'],
    keywords: ['nasal', 'nose', 'sinus', 'sinusitis', 'rhinitis', 'olfactory']
  },

  // ============================================
  // URINARY SYSTEM
  // ============================================
  'urinary.kidneys': {
    regionId: 'urinary.kidneys',
    name: 'Kidneys',
    system: 'urinary',
    childRegions: ['urinary.kidneys.cortex', 'urinary.kidneys.medulla', 'urinary.kidneys.pelvis', 'urinary.kidneys.nephron'],
    contentPaths: {
      physiology: [
        'core/content/urinary/physiology/glomerular-filtration.json',
        'core/content/urinary/physiology/tubular-reabsorption.json',
        'core/content/urinary/physiology/acid-base-balance.json',
        'core/content/nephrology/kidney-function/how-kidneys-work.md',
        'core/content/nephrology/kidney-function/measuring-kidney-function.md'
      ],
      histology: [
        'core/content/urinary/histology/glomerulus.json',
        'core/content/urinary/histology/nephron-segments.json',
        'core/content/urinary/histology/collecting-ducts.json'
      ],
      pathology: [
        'core/content/urinary/pathology/chronic-kidney-disease.json',
        'core/content/urinary/pathology/acute-kidney-injury.json',
        'core/content/urinary/pathology/glomerulonephritis.json',
        'core/content/urinary/pathology/kidney-stones.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Nephrologist', 'Urologist', 'Transplant Nephrologist'],
    relatedConditions: [
      'chronic-kidney-disease', 'acute-kidney-injury', 'kidney-stones', 'glomerulonephritis',
      'polycystic-kidney-disease', 'diabetic-nephropathy', 'renal-cell-carcinoma'
    ],
    keywords: ['kidney', 'renal', 'nephro', 'nephron', 'glomerulus', 'filtration']
  },

  'urinary.bladder': {
    regionId: 'urinary.bladder',
    name: 'Urinary Bladder',
    system: 'urinary',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/urinary/physiology/micturition.json',
        'core/content/urinary/physiology/bladder-compliance.json'
      ],
      histology: [
        'core/content/urinary/histology/transitional-epithelium.json',
        'core/content/urinary/histology/detrusor-muscle.json'
      ],
      pathology: [
        'core/content/urinary/pathology/uti.json',
        'core/content/urinary/pathology/bladder-cancer.json',
        'core/content/urinary/pathology/overactive-bladder.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Urologist', 'Urogynecologist'],
    relatedConditions: ['urinary-tract-infection', 'bladder-cancer', 'overactive-bladder', 'urinary-incontinence'],
    keywords: ['bladder', 'urinary', 'micturition', 'urination', 'incontinence']
  },

  // ============================================
  // MUSCULOSKELETAL SYSTEM
  // ============================================
  'musculoskeletal.spine': {
    regionId: 'musculoskeletal.spine',
    name: 'Spine',
    system: 'musculoskeletal',
    childRegions: ['musculoskeletal.spine.cervical', 'musculoskeletal.spine.thoracic', 'musculoskeletal.spine.lumbar', 'musculoskeletal.spine.sacral'],
    contentPaths: {
      physiology: [
        'core/content/musculoskeletal/physiology/spinal-mechanics.json',
        'core/content/musculoskeletal/physiology/intervertebral-disc.json'
      ],
      histology: [
        'core/content/musculoskeletal/histology/bone-tissue.json',
        'core/content/musculoskeletal/histology/cartilage.json'
      ],
      pathology: [
        'core/content/musculoskeletal/pathology/herniated-disc.json',
        'core/content/musculoskeletal/pathology/spinal-stenosis.json',
        'core/content/musculoskeletal/pathology/osteoporosis.json',
        'core/content/musculoskeletal/pathology/scoliosis.json'
      ],
      clinical: [
        'core/content/musculoskeletal/anatomy/axial-skeleton.md'
      ],
      conditions: []
    },
    specialists: ['Orthopedic Spine Surgeon', 'Neurosurgeon', 'Physiatrist', 'Rheumatologist'],
    relatedConditions: ['herniated-disc', 'spinal-stenosis', 'degenerative-disc-disease', 'scoliosis', 'vertebral-fracture'],
    keywords: ['spine', 'spinal', 'vertebra', 'vertebral', 'back', 'disc', 'cervical', 'lumbar']
  },

  'musculoskeletal.joints': {
    regionId: 'musculoskeletal.joints',
    name: 'Joints',
    system: 'musculoskeletal',
    childRegions: ['musculoskeletal.joints.shoulder', 'musculoskeletal.joints.hip', 'musculoskeletal.joints.knee', 'musculoskeletal.joints.ankle'],
    contentPaths: {
      physiology: [
        'core/content/musculoskeletal/physiology/synovial-fluid.json',
        'core/content/musculoskeletal/physiology/joint-mechanics.json'
      ],
      histology: [
        'core/content/musculoskeletal/histology/articular-cartilage.json',
        'core/content/musculoskeletal/histology/synovium.json'
      ],
      pathology: [
        'core/content/musculoskeletal/pathology/osteoarthritis.json',
        'core/content/musculoskeletal/pathology/rheumatoid-arthritis.json',
        'core/content/musculoskeletal/pathology/gout.json'
      ],
      clinical: [
        'core/content/musculoskeletal/anatomy/joints.md',
        'core/content/rheumatology/autoimmune/rheumatoid-arthritis.md'
      ],
      conditions: []
    },
    specialists: ['Orthopedic Surgeon', 'Rheumatologist', 'Sports Medicine Physician'],
    relatedConditions: ['osteoarthritis', 'rheumatoid-arthritis', 'gout', 'bursitis', 'tendinitis'],
    keywords: ['joint', 'arthritis', 'articular', 'synovial', 'cartilage']
  },

  'musculoskeletal.muscle': {
    regionId: 'musculoskeletal.muscle',
    name: 'Skeletal Muscle',
    system: 'musculoskeletal',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/musculoskeletal/physiology/muscle-contraction.md',
        'core/content/musculoskeletal/physiology/muscle-fiber-types.md'
      ],
      histology: [
        'core/content/musculoskeletal/histology/skeletal-muscle-fibers.json',
        'core/content/musculoskeletal/histology/sarcomere.json'
      ],
      pathology: [
        'core/content/musculoskeletal/pathology/muscular-dystrophy.json',
        'core/content/musculoskeletal/pathology/myopathy.json',
        'core/content/musculoskeletal/pathology/rhabdomyolysis.json'
      ],
      clinical: [
        'core/content/musculoskeletal/anatomy/major-muscles.md'
      ],
      conditions: []
    },
    specialists: ['Neurologist', 'Physiatrist', 'Rheumatologist'],
    relatedConditions: ['muscular-dystrophy', 'myopathy', 'rhabdomyolysis', 'fibromyalgia'],
    keywords: ['muscle', 'muscular', 'myopathy', 'weakness', 'atrophy']
  },

  // ============================================
  // ENDOCRINE SYSTEM
  // ============================================
  'endocrine.thyroid': {
    regionId: 'endocrine.thyroid',
    name: 'Thyroid Gland',
    system: 'endocrine',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/endocrine/physiology/thyroid-hormone-synthesis.json',
        'core/content/endocrine/physiology/hpt-axis.json'
      ],
      histology: [
        'core/content/endocrine/histology/thyroid-follicles.json',
        'core/content/endocrine/histology/parafollicular-cells.json'
      ],
      pathology: [
        'core/content/endocrine/pathology/hypothyroidism.json',
        'core/content/endocrine/pathology/hyperthyroidism.json',
        'core/content/endocrine/pathology/thyroid-nodules.json',
        'core/content/endocrine/pathology/thyroid-cancer.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Endocrinologist', 'ENT Specialist', 'Endocrine Surgeon'],
    relatedConditions: ['hypothyroidism', 'hyperthyroidism', 'hashimotos', 'graves-disease', 'thyroid-nodules', 'thyroid-cancer'],
    keywords: ['thyroid', 'T3', 'T4', 'TSH', 'goiter', 'hypothyroid', 'hyperthyroid']
  },

  'endocrine.adrenalGlands': {
    regionId: 'endocrine.adrenalGlands',
    name: 'Adrenal Glands',
    system: 'endocrine',
    childRegions: ['endocrine.adrenalGlands.cortex', 'endocrine.adrenalGlands.medulla'],
    contentPaths: {
      physiology: [
        'core/content/endocrine/physiology/cortisol-regulation.json',
        'core/content/endocrine/physiology/aldosterone.json',
        'core/content/endocrine/physiology/catecholamines.json'
      ],
      histology: [
        'core/content/endocrine/histology/adrenal-cortex-zones.json',
        'core/content/endocrine/histology/chromaffin-cells.json'
      ],
      pathology: [
        'core/content/endocrine/pathology/addisons-disease.json',
        'core/content/endocrine/pathology/cushings-syndrome.json',
        'core/content/endocrine/pathology/pheochromocytoma.json',
        'core/content/endocrine/pathology/adrenal-insufficiency.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Endocrinologist', 'Endocrine Surgeon'],
    relatedConditions: ['addisons-disease', 'cushings-syndrome', 'pheochromocytoma', 'adrenal-insufficiency', 'conn-syndrome'],
    keywords: ['adrenal', 'cortisol', 'aldosterone', 'adrenaline', 'epinephrine', 'steroid']
  },

  'endocrine.pituitary': {
    regionId: 'endocrine.pituitary',
    name: 'Pituitary Gland',
    system: 'endocrine',
    childRegions: ['endocrine.pituitary.anterior', 'endocrine.pituitary.posterior'],
    contentPaths: {
      physiology: [
        'core/content/endocrine/physiology/pituitary-hormones.json',
        'core/content/endocrine/physiology/hypothalamic-control.json'
      ],
      histology: [
        'core/content/endocrine/histology/adenohypophysis.json',
        'core/content/endocrine/histology/neurohypophysis.json'
      ],
      pathology: [
        'core/content/endocrine/pathology/pituitary-adenoma.json',
        'core/content/endocrine/pathology/hypopituitarism.json',
        'core/content/endocrine/pathology/acromegaly.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Endocrinologist', 'Neurosurgeon', 'Neuro-Ophthalmologist'],
    relatedConditions: ['pituitary-adenoma', 'hypopituitarism', 'acromegaly', 'prolactinoma', 'diabetes-insipidus'],
    keywords: ['pituitary', 'hypophysis', 'growth hormone', 'prolactin', 'ACTH', 'TSH']
  },

  // ============================================
  // REPRODUCTIVE SYSTEM
  // ============================================
  'reproductive.male.prostate': {
    regionId: 'reproductive.male.prostate',
    name: 'Prostate',
    system: 'reproductive',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/reproductive/physiology/prostate-function.json'
      ],
      histology: [
        'core/content/reproductive/histology/prostatic-glands.json'
      ],
      pathology: [
        'core/content/reproductive/pathology/bph.json',
        'core/content/reproductive/pathology/prostate-cancer.json',
        'core/content/reproductive/pathology/prostatitis.json'
      ],
      clinical: [
        'core/content/mens-health/prostate-health/prostate-anatomy-function.json',
        'core/content/mens-health/prostate-health/bph.json',
        'core/content/mens-health/prostate-health/prostatitis.json',
        'core/content/mens-health/prostate-health/psa-testing.json',
        'core/content/reproductive/male/prostate.json'
      ],
      conditions: []
    },
    specialists: ['Urologist', 'Radiation Oncologist', 'Medical Oncologist'],
    relatedConditions: ['bph', 'prostate-cancer', 'prostatitis', 'elevated-psa'],
    keywords: ['prostate', 'prostatic', 'PSA', 'BPH', 'prostatitis']
  },

  'reproductive.male.testes': {
    regionId: 'reproductive.male.testes',
    name: 'Testes',
    system: 'reproductive',
    childRegions: ['reproductive.male.testes.seminiferous', 'reproductive.male.testes.leydig'],
    contentPaths: {
      physiology: [
        'core/content/reproductive/physiology/spermatogenesis.json',
        'core/content/reproductive/physiology/testosterone-production.json'
      ],
      histology: [
        'core/content/reproductive/histology/seminiferous-tubules.json',
        'core/content/reproductive/histology/leydig-cells.json',
        'core/content/reproductive/histology/sertoli-cells.json'
      ],
      pathology: [
        'core/content/reproductive/pathology/testicular-cancer.json',
        'core/content/reproductive/pathology/varicocele.json',
        'core/content/reproductive/pathology/testicular-torsion.json'
      ],
      clinical: [
        'core/content/reproductive/male/testes.json'
      ],
      conditions: []
    },
    specialists: ['Urologist', 'Endocrinologist', 'Reproductive Endocrinologist'],
    relatedConditions: ['testicular-cancer', 'varicocele', 'testicular-torsion', 'hypogonadism', 'infertility'],
    keywords: ['testis', 'testes', 'testicle', 'testosterone', 'sperm', 'seminiferous']
  },

  'reproductive.female.uterus': {
    regionId: 'reproductive.female.uterus',
    name: 'Uterus',
    system: 'reproductive',
    childRegions: ['reproductive.female.uterus.endometrium', 'reproductive.female.uterus.myometrium', 'reproductive.female.uterus.cervix'],
    contentPaths: {
      physiology: [
        'core/content/reproductive/physiology/menstrual-cycle.json',
        'core/content/reproductive/physiology/implantation.json'
      ],
      histology: [
        'core/content/reproductive/histology/endometrium.json',
        'core/content/reproductive/histology/myometrium.json'
      ],
      pathology: [
        'core/content/reproductive/pathology/endometriosis.json',
        'core/content/reproductive/pathology/uterine-fibroids.json',
        'core/content/reproductive/pathology/endometrial-cancer.json'
      ],
      clinical: [
        'core/content/reproductive/female/uterus.json',
        'core/content/womens-health/reproductive-health/menstrual-cycle-explained.json',
        'core/content/womens-health/reproductive-health/menstrual-disorders.json'
      ],
      conditions: []
    },
    specialists: ['OB/GYN', 'Reproductive Endocrinologist', 'Gynecologic Oncologist'],
    relatedConditions: ['endometriosis', 'uterine-fibroids', 'endometrial-cancer', 'abnormal-uterine-bleeding'],
    keywords: ['uterus', 'uterine', 'endometrium', 'cervix', 'menstrual', 'womb']
  },

  'reproductive.female.ovaries': {
    regionId: 'reproductive.female.ovaries',
    name: 'Ovaries',
    system: 'reproductive',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/reproductive/physiology/ovulation.json',
        'core/content/reproductive/physiology/follicular-development.json',
        'core/content/reproductive/physiology/estrogen-progesterone.json'
      ],
      histology: [
        'core/content/reproductive/histology/ovarian-follicles.json',
        'core/content/reproductive/histology/corpus-luteum.json'
      ],
      pathology: [
        'core/content/reproductive/pathology/pcos.json',
        'core/content/reproductive/pathology/ovarian-cysts.json',
        'core/content/reproductive/pathology/ovarian-cancer.json'
      ],
      clinical: [
        'core/content/reproductive/female/ovaries.json',
        'core/content/womens-health/reproductive-health/fertility-basics.json'
      ],
      conditions: []
    },
    specialists: ['OB/GYN', 'Reproductive Endocrinologist', 'Gynecologic Oncologist'],
    relatedConditions: ['pcos', 'ovarian-cysts', 'ovarian-cancer', 'premature-ovarian-failure', 'infertility'],
    keywords: ['ovary', 'ovarian', 'ovulation', 'follicle', 'estrogen', 'progesterone']
  },

  // ============================================
  // INTEGUMENTARY SYSTEM
  // ============================================
  'integumentary.skin': {
    regionId: 'integumentary.skin',
    name: 'Skin',
    system: 'integumentary',
    childRegions: ['integumentary.skin.epidermis', 'integumentary.skin.dermis', 'integumentary.skin.hypodermis'],
    contentPaths: {
      physiology: [
        'core/content/integumentary/physiology/thermoregulation.json',
        'core/content/integumentary/physiology/sensation.json',
        'core/content/integumentary/physiology/vitamin-d-synthesis.json'
      ],
      histology: [
        'core/content/integumentary/histology/epidermis-layers.json',
        'core/content/integumentary/histology/keratinocytes.json',
        'core/content/integumentary/histology/melanocytes.json'
      ],
      pathology: [
        'core/content/integumentary/pathology/melanoma.json',
        'core/content/integumentary/pathology/psoriasis.json',
        'core/content/integumentary/pathology/eczema.json',
        'core/content/integumentary/pathology/skin-infections.json'
      ],
      clinical: [
        'core/content/integumentary/anatomy/skin-layers.json',
        'core/content/dermatology/basics/skin-anatomy.json',
        'core/content/dermatology/basics/skin-functions.json',
        'core/content/dermatology/basics/skin-types.json'
      ],
      conditions: []
    },
    specialists: ['Dermatologist', 'Plastic Surgeon', 'Dermatopathologist'],
    relatedConditions: ['melanoma', 'basal-cell-carcinoma', 'squamous-cell-carcinoma', 'psoriasis', 'eczema', 'acne'],
    keywords: ['skin', 'dermal', 'cutaneous', 'epidermis', 'dermis', 'rash']
  },

  // ============================================
  // SENSORY ORGANS
  // ============================================
  'sensory.eye': {
    regionId: 'sensory.eye',
    name: 'Eye',
    system: 'nervous',
    childRegions: ['sensory.eye.retina', 'sensory.eye.lens', 'sensory.eye.cornea', 'sensory.eye.opticNerve'],
    contentPaths: {
      physiology: [
        'core/content/sensory/physiology/visual-pathway.json',
        'core/content/sensory/physiology/accommodation.json',
        'core/content/sensory/physiology/phototransduction.json'
      ],
      histology: [
        'core/content/sensory/histology/retinal-layers.json',
        'core/content/sensory/histology/photoreceptors.json',
        'core/content/sensory/histology/cornea.json'
      ],
      pathology: [
        'core/content/sensory/pathology/glaucoma.json',
        'core/content/sensory/pathology/cataracts.json',
        'core/content/sensory/pathology/macular-degeneration.json',
        'core/content/sensory/pathology/diabetic-retinopathy.json'
      ],
      clinical: [
        'core/content/ophthalmology/eye-anatomy.md',
        'core/content/ophthalmology/refractive-errors.md'
      ],
      conditions: []
    },
    specialists: ['Ophthalmologist', 'Optometrist', 'Retina Specialist'],
    relatedConditions: ['glaucoma', 'cataracts', 'macular-degeneration', 'diabetic-retinopathy', 'refractive-errors'],
    keywords: ['eye', 'ocular', 'vision', 'retina', 'optic', 'cornea', 'lens']
  },

  'sensory.ear': {
    regionId: 'sensory.ear',
    name: 'Ear',
    system: 'nervous',
    childRegions: ['sensory.ear.outer', 'sensory.ear.middle', 'sensory.ear.inner'],
    contentPaths: {
      physiology: [
        'core/content/sensory/physiology/hearing.json',
        'core/content/sensory/physiology/vestibular-function.json'
      ],
      histology: [
        'core/content/sensory/histology/organ-of-corti.json',
        'core/content/sensory/histology/hair-cells.json'
      ],
      pathology: [
        'core/content/sensory/pathology/hearing-loss.json',
        'core/content/sensory/pathology/otitis-media.json',
        'core/content/sensory/pathology/menieres-disease.json'
      ],
      clinical: [
        'core/content/ent/ear/ear-anatomy.json',
        'core/content/ent/ear/hearing-loss.json',
        'core/content/ent/ear/ear-infections.json',
        'core/content/ent/ear/tinnitus.json',
        'core/content/ent/ear/vertigo-dizziness.json'
      ],
      conditions: []
    },
    specialists: ['ENT Specialist', 'Audiologist', 'Otologist', 'Neurotologist'],
    relatedConditions: ['hearing-loss', 'otitis-media', 'tinnitus', 'menieres-disease', 'vertigo'],
    keywords: ['ear', 'hearing', 'auditory', 'vestibular', 'cochlea', 'tinnitus']
  },

  // ============================================
  // HEMATOLOGIC/LYMPHATIC
  // ============================================
  'hematologic.bone-marrow': {
    regionId: 'hematologic.bone-marrow',
    name: 'Bone Marrow',
    system: 'hematologic',
    childRegions: [],
    contentPaths: {
      physiology: [
        'core/content/hematologic/physiology/hematopoiesis.json',
        'core/content/hematologic/physiology/erythropoiesis.json',
        'core/content/hematologic/physiology/leukopoiesis.json'
      ],
      histology: [
        'core/content/hematologic/histology/bone-marrow-biopsy.json',
        'core/content/hematologic/histology/stem-cells.json'
      ],
      pathology: [
        'core/content/hematologic/pathology/leukemia.json',
        'core/content/hematologic/pathology/lymphoma.json',
        'core/content/hematologic/pathology/myelodysplastic-syndrome.json',
        'core/content/hematologic/pathology/aplastic-anemia.json'
      ],
      clinical: [
        'core/content/procedures/diagnostic/bone-marrow-biopsy.md',
        'core/content/hematology/anemia/iron-deficiency-anemia.json',
        'core/content/hematology/anemia/b12-folate-deficiency.json'
      ],
      conditions: []
    },
    specialists: ['Hematologist', 'Oncologist', 'Transplant Physician'],
    relatedConditions: ['leukemia', 'lymphoma', 'multiple-myeloma', 'aplastic-anemia', 'myelodysplastic-syndrome'],
    keywords: ['bone marrow', 'hematopoiesis', 'blood cells', 'stem cells', 'leukemia', 'anemia']
  },

  'lymphatic.spleen': {
    regionId: 'lymphatic.spleen',
    name: 'Spleen',
    system: 'lymphatic',
    childRegions: ['lymphatic.spleen.redPulp', 'lymphatic.spleen.whitePulp'],
    contentPaths: {
      physiology: [
        'core/content/lymphatic/physiology/splenic-function.json',
        'core/content/lymphatic/physiology/blood-filtration.json'
      ],
      histology: [
        'core/content/lymphatic/histology/splenic-architecture.json',
        'core/content/lymphatic/histology/red-pulp.json',
        'core/content/lymphatic/histology/white-pulp.json'
      ],
      pathology: [
        'core/content/lymphatic/pathology/splenomegaly.json',
        'core/content/lymphatic/pathology/splenic-rupture.json'
      ],
      clinical: [],
      conditions: []
    },
    specialists: ['Hematologist', 'General Surgeon', 'Infectious Disease Specialist'],
    relatedConditions: ['splenomegaly', 'splenic-rupture', 'hypersplenism', 'asplenia'],
    keywords: ['spleen', 'splenic', 'splenomegaly', 'asplenia']
  },

  // ============================================
  // IMMUNE SYSTEM
  // ============================================
  'immune.lymphNodes': {
    regionId: 'immune.lymphNodes',
    name: 'Lymph Nodes',
    system: 'immune',
    childRegions: ['immune.lymphNodes.cervical', 'immune.lymphNodes.axillary', 'immune.lymphNodes.inguinal', 'immune.lymphNodes.mesenteric'],
    contentPaths: {
      physiology: [
        'core/content/immune/physiology/lymphatic-circulation.json',
        'core/content/immune/physiology/antigen-presentation.json'
      ],
      histology: [
        'core/content/immune/histology/lymph-node-architecture.json',
        'core/content/immune/histology/germinal-centers.json'
      ],
      pathology: [
        'core/content/immune/pathology/lymphadenopathy.json',
        'core/content/immune/pathology/lymphoma.json',
        'core/content/immune/pathology/metastatic-lymph-nodes.json'
      ],
      clinical: [
        'core/content/allergy-immunology/allergies/what-are-allergies.json',
        'core/content/allergy-immunology/allergies/common-allergens.json'
      ],
      conditions: []
    },
    specialists: ['Hematologist', 'Oncologist', 'Infectious Disease Specialist'],
    relatedConditions: ['lymphadenopathy', 'lymphoma', 'lymphedema', 'metastatic-cancer'],
    keywords: ['lymph node', 'lymphatic', 'lymphadenopathy', 'lymphoma']
  }
};

// ============================================
// Condition Database
// ============================================

/**
 * Comprehensive condition database for region-condition mapping
 */
export const CONDITIONS_DATABASE: Record<string, ConditionContent> = {
  'myocardial-infarction': {
    id: 'myocardial-infarction',
    name: 'Myocardial Infarction (Heart Attack)',
    category: 'cell-injury',
    severity: 'life-threatening',
    symptoms: ['Chest pain', 'Shortness of breath', 'Left arm pain', 'Sweating', 'Nausea'],
    prevalence: '~800,000 per year in US',
    riskFactors: ['Smoking', 'Hypertension', 'Diabetes', 'High cholesterol', 'Family history', 'Obesity'],
    diagnosticTests: ['ECG', 'Troponin levels', 'Coronary angiography', 'Echocardiogram'],
    treatments: ['Aspirin', 'Thrombolytics', 'PCI', 'CABG', 'Beta blockers', 'Statins'],
    specialists: ['Cardiologist', 'Interventional Cardiologist', 'Cardiothoracic Surgeon'],
    relatedConditions: ['coronary-artery-disease', 'heart-failure', 'arrhythmia'],
    contentPath: 'core/content/cardiovascular/pathology/myocardial-infarction.json'
  },
  'stroke': {
    id: 'stroke',
    name: 'Stroke (Cerebrovascular Accident)',
    category: 'cell-injury',
    severity: 'life-threatening',
    symptoms: ['Sudden weakness', 'Speech difficulty', 'Vision changes', 'Severe headache', 'Confusion'],
    prevalence: '~800,000 per year in US',
    riskFactors: ['Hypertension', 'Atrial fibrillation', 'Diabetes', 'Smoking', 'High cholesterol'],
    diagnosticTests: ['CT head', 'MRI brain', 'CT angiography', 'Echocardiogram', 'Carotid ultrasound'],
    treatments: ['tPA (thrombolysis)', 'Mechanical thrombectomy', 'Antiplatelet therapy', 'Anticoagulation', 'Rehabilitation'],
    specialists: ['Neurologist', 'Neurosurgeon', 'Neurointerventionalist', 'Physiatrist'],
    relatedConditions: ['atrial-fibrillation', 'carotid-stenosis', 'hypertension'],
    contentPath: 'core/content/nervous/pathology/stroke.json'
  },
  'cirrhosis': {
    id: 'cirrhosis',
    name: 'Cirrhosis',
    category: 'cell-injury',
    severity: 'severe',
    symptoms: ['Fatigue', 'Jaundice', 'Ascites', 'Confusion', 'Easy bruising', 'Swollen legs'],
    prevalence: '~4.5 million adults in US',
    riskFactors: ['Chronic alcohol use', 'Hepatitis B', 'Hepatitis C', 'NAFLD', 'Autoimmune hepatitis'],
    diagnosticTests: ['Liver function tests', 'Ultrasound', 'Fibroscan', 'Liver biopsy', 'CT/MRI'],
    treatments: ['Treat underlying cause', 'Diuretics', 'Lactulose', 'Beta blockers', 'Liver transplant'],
    specialists: ['Hepatologist', 'Gastroenterologist', 'Transplant Surgeon'],
    relatedConditions: ['hepatitis', 'hepatocellular-carcinoma', 'portal-hypertension'],
    contentPath: 'core/content/digestive/pathology/cirrhosis.json'
  },
  'pneumonia': {
    id: 'pneumonia',
    name: 'Pneumonia',
    category: 'infectious',
    severity: 'moderate',
    symptoms: ['Cough', 'Fever', 'Shortness of breath', 'Chest pain', 'Fatigue'],
    prevalence: '~3 million cases per year in US',
    riskFactors: ['Age >65', 'Immunocompromise', 'Smoking', 'Chronic lung disease', 'Recent viral infection'],
    diagnosticTests: ['Chest X-ray', 'Blood cultures', 'Sputum culture', 'CT chest', 'Procalcitonin'],
    treatments: ['Antibiotics', 'Oxygen therapy', 'IV fluids', 'Mechanical ventilation (severe)'],
    specialists: ['Pulmonologist', 'Infectious Disease Specialist', 'Intensivist'],
    relatedConditions: ['copd', 'respiratory-failure', 'sepsis'],
    contentPath: 'core/content/respiratory/pathology/pneumonia.json'
  },
  'chronic-kidney-disease': {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    category: 'degenerative',
    severity: 'moderate',
    symptoms: ['Fatigue', 'Swelling', 'Decreased urine output', 'Nausea', 'Confusion', 'High blood pressure'],
    prevalence: '~37 million adults in US',
    riskFactors: ['Diabetes', 'Hypertension', 'Family history', 'Age >60', 'Cardiovascular disease'],
    diagnosticTests: ['GFR', 'Creatinine', 'BUN', 'Urinalysis', 'Renal ultrasound', 'Kidney biopsy'],
    treatments: ['Blood pressure control', 'Diabetes management', 'Diet modification', 'Dialysis', 'Kidney transplant'],
    specialists: ['Nephrologist', 'Transplant Nephrologist', 'Dietitian'],
    relatedConditions: ['diabetes', 'hypertension', 'anemia', 'bone-disease'],
    contentPath: 'core/content/urinary/pathology/chronic-kidney-disease.json'
  },
  'diabetes-mellitus': {
    id: 'diabetes-mellitus',
    name: 'Diabetes Mellitus',
    category: 'genetic',
    severity: 'moderate',
    symptoms: ['Increased thirst', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Slow healing wounds'],
    prevalence: '~34 million in US',
    riskFactors: ['Obesity', 'Family history', 'Sedentary lifestyle', 'Age >45', 'Ethnicity'],
    diagnosticTests: ['Fasting glucose', 'HbA1c', 'Oral glucose tolerance test', 'C-peptide'],
    treatments: ['Metformin', 'Insulin', 'SGLT2 inhibitors', 'GLP-1 agonists', 'Lifestyle modification'],
    specialists: ['Endocrinologist', 'Diabetologist', 'Podiatrist', 'Ophthalmologist'],
    relatedConditions: ['diabetic-nephropathy', 'diabetic-retinopathy', 'peripheral-neuropathy', 'cardiovascular-disease'],
    contentPath: 'core/content/endocrine/pathology/diabetes.json'
  }
};

// ============================================
// Content Integration Service Class
// ============================================

/**
 * Service for mapping anatomical regions to educational content
 */
export class ContentIntegrationService {
  private static instance: ContentIntegrationService;
  private contentCache: Map<string, any> = new Map();

  private constructor() {}

  /**
   * Get singleton instance
   */
  public static getInstance(): ContentIntegrationService {
    if (!ContentIntegrationService.instance) {
      ContentIntegrationService.instance = new ContentIntegrationService();
    }
    return ContentIntegrationService.instance;
  }

  /**
   * Get all educational content for a region, filtered by complexity level
   */
  public async getContentForRegion(
    regionId: string,
    complexityLevel: ContentComplexityLevel = 3
  ): Promise<RegionEducationalContent> {
    const mapping = this.getRegionMapping(regionId);

    if (!mapping) {
      return this.getEmptyRegionContent();
    }

    const [physiology, histology, pathology, clinical, conditions] = await Promise.all([
      this.getPhysiologyForRegion(regionId, complexityLevel),
      this.getHistologyForRegion(regionId, complexityLevel),
      this.getPathologyForRegion(regionId, complexityLevel),
      this.getClinicalForRegion(regionId, complexityLevel),
      this.getConditionsForRegion(regionId)
    ]);

    return {
      physiology,
      histology,
      pathology,
      clinical,
      conditions,
      relatedSpecialties: mapping.specialists,
      relatedRegions: [
        ...(mapping.parentRegion ? [mapping.parentRegion] : []),
        ...mapping.childRegions
      ]
    };
  }

  /**
   * Get physiology content for a region
   */
  public async getPhysiologyForRegion(
    regionId: string,
    complexityLevel: ContentComplexityLevel = 3
  ): Promise<EducationalContentItem[]> {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return this.loadContentFromPaths(
      mapping.contentPaths.physiology,
      'physiology',
      regionId,
      mapping.system,
      complexityLevel
    );
  }

  /**
   * Get histology content for a region
   */
  public async getHistologyForRegion(
    regionId: string,
    complexityLevel: ContentComplexityLevel = 3
  ): Promise<EducationalContentItem[]> {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return this.loadContentFromPaths(
      mapping.contentPaths.histology,
      'histology',
      regionId,
      mapping.system,
      complexityLevel
    );
  }

  /**
   * Get pathology content for a region
   */
  public async getPathologyForRegion(
    regionId: string,
    complexityLevel: ContentComplexityLevel = 3
  ): Promise<EducationalContentItem[]> {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return this.loadContentFromPaths(
      mapping.contentPaths.pathology,
      'pathology',
      regionId,
      mapping.system,
      complexityLevel
    );
  }

  /**
   * Get clinical content for a region
   */
  public async getClinicalForRegion(
    regionId: string,
    complexityLevel: ContentComplexityLevel = 3
  ): Promise<EducationalContentItem[]> {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return this.loadContentFromPaths(
      mapping.contentPaths.clinical,
      'clinical',
      regionId,
      mapping.system,
      complexityLevel
    );
  }

  /**
   * Get conditions affecting a region
   */
  public async getConditionsForRegion(regionId: string): Promise<ConditionContent[]> {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return mapping.relatedConditions
      .map(conditionId => CONDITIONS_DATABASE[conditionId])
      .filter((condition): condition is ConditionContent => condition !== undefined);
  }

  /**
   * Get specialists for a region
   */
  public getSpecialistsForRegion(regionId: string): string[] {
    const mapping = this.getRegionMapping(regionId);
    return mapping?.specialists ?? [];
  }

  /**
   * Get region mapping
   */
  public getRegionMapping(regionId: string): RegionMapping | null {
    // Direct match
    if (REGION_CONTENT_MAPPINGS[regionId]) {
      return REGION_CONTENT_MAPPINGS[regionId];
    }

    // Try to find by partial match (e.g., 'heart' -> 'cardiovascular.heart')
    const normalizedId = regionId.toLowerCase();
    for (const [key, mapping] of Object.entries(REGION_CONTENT_MAPPINGS)) {
      if (key.toLowerCase().includes(normalizedId) ||
          mapping.keywords.some(kw => kw.toLowerCase() === normalizedId)) {
        return mapping;
      }
    }

    return null;
  }

  /**
   * Search for regions by keyword
   */
  public searchRegions(query: string): RegionMapping[] {
    const normalizedQuery = query.toLowerCase();
    const results: RegionMapping[] = [];

    for (const mapping of Object.values(REGION_CONTENT_MAPPINGS)) {
      const matchScore = this.calculateMatchScore(mapping, normalizedQuery);
      if (matchScore > 0) {
        results.push(mapping);
      }
    }

    return results.sort((a, b) => {
      const scoreA = this.calculateMatchScore(a, normalizedQuery);
      const scoreB = this.calculateMatchScore(b, normalizedQuery);
      return scoreB - scoreA;
    });
  }

  /**
   * Get all available region IDs
   */
  public getAllRegionIds(): string[] {
    return Object.keys(REGION_CONTENT_MAPPINGS);
  }

  /**
   * Get regions by body system
   */
  public getRegionsBySystem(system: BodySystemId): RegionMapping[] {
    return Object.values(REGION_CONTENT_MAPPINGS).filter(
      mapping => mapping.system === system
    );
  }

  /**
   * Get child regions for a parent region
   */
  public getChildRegions(regionId: string): RegionMapping[] {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    return mapping.childRegions
      .map(childId => REGION_CONTENT_MAPPINGS[childId])
      .filter((child): child is RegionMapping => child !== undefined);
  }

  /**
   * Get parent region
   */
  public getParentRegion(regionId: string): RegionMapping | null {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping?.parentRegion) return null;

    return REGION_CONTENT_MAPPINGS[mapping.parentRegion] ?? null;
  }

  /**
   * Get related regions (siblings, parent, children)
   */
  public getRelatedRegions(regionId: string): RegionMapping[] {
    const mapping = this.getRegionMapping(regionId);
    if (!mapping) return [];

    const related: RegionMapping[] = [];

    // Add parent
    if (mapping.parentRegion) {
      const parent = REGION_CONTENT_MAPPINGS[mapping.parentRegion];
      if (parent) related.push(parent);
    }

    // Add children
    for (const childId of mapping.childRegions) {
      const child = REGION_CONTENT_MAPPINGS[childId];
      if (child) related.push(child);
    }

    // Add siblings (regions with same parent)
    if (mapping.parentRegion) {
      const parent = REGION_CONTENT_MAPPINGS[mapping.parentRegion];
      if (parent) {
        for (const siblingId of parent.childRegions) {
          if (siblingId !== regionId) {
            const sibling = REGION_CONTENT_MAPPINGS[siblingId];
            if (sibling) related.push(sibling);
          }
        }
      }
    }

    return related;
  }

  /**
   * Get condition details
   */
  public getCondition(conditionId: string): ConditionContent | null {
    return CONDITIONS_DATABASE[conditionId] ?? null;
  }

  /**
   * Search conditions by keyword
   */
  public searchConditions(query: string): ConditionContent[] {
    const normalizedQuery = query.toLowerCase();
    return Object.values(CONDITIONS_DATABASE).filter(condition =>
      condition.name.toLowerCase().includes(normalizedQuery) ||
      condition.symptoms.some(s => s.toLowerCase().includes(normalizedQuery)) ||
      condition.keywords?.some(k => k.toLowerCase().includes(normalizedQuery))
    );
  }

  // ============================================
  // Private Helper Methods
  // ============================================

  private async loadContentFromPaths(
    paths: string[],
    type: EducationalContentItem['type'],
    regionId: string,
    system: BodySystemId,
    complexityLevel: ContentComplexityLevel
  ): Promise<EducationalContentItem[]> {
    const items: EducationalContentItem[] = [];

    for (const path of paths) {
      // Generate content item from path
      const item = this.createContentItemFromPath(path, type, regionId, system, complexityLevel);
      if (item) {
        items.push(item);
      }
    }

    return items;
  }

  private createContentItemFromPath(
    path: string,
    type: EducationalContentItem['type'],
    regionId: string,
    system: BodySystemId,
    complexityLevel: ContentComplexityLevel
  ): EducationalContentItem | null {
    // Extract name from path
    const filename = path.split('/').pop() ?? '';
    const name = filename
      .replace(/\.(json|md)$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      id: path.replace(/[\/\.]/g, '-'),
      name,
      type,
      path,
      summary: `Educational content about ${name} related to ${regionId}`,
      complexity: complexityLevel,
      tags: [type, system, regionId],
      relatedRegions: [regionId],
      relatedSystems: [system]
    };
  }

  private calculateMatchScore(mapping: RegionMapping, query: string): number {
    let score = 0;

    if (mapping.name.toLowerCase().includes(query)) score += 10;
    if (mapping.regionId.toLowerCase().includes(query)) score += 8;

    for (const keyword of mapping.keywords) {
      if (keyword.toLowerCase().includes(query)) score += 5;
      if (keyword.toLowerCase() === query) score += 10;
    }

    for (const condition of mapping.relatedConditions) {
      if (condition.toLowerCase().includes(query)) score += 3;
    }

    return score;
  }

  private getEmptyRegionContent(): RegionEducationalContent {
    return {
      physiology: [],
      histology: [],
      pathology: [],
      clinical: [],
      conditions: [],
      relatedSpecialties: [],
      relatedRegions: []
    };
  }
}

// ============================================
// Export singleton instance and utility functions
// ============================================

export const contentIntegrationService = ContentIntegrationService.getInstance();

/**
 * Convenience function to get content for a region
 */
export async function getContentForRegion(
  regionId: string,
  complexityLevel: ContentComplexityLevel = 3
): Promise<RegionEducationalContent> {
  return contentIntegrationService.getContentForRegion(regionId, complexityLevel);
}

/**
 * Convenience function to get specialists for a region
 */
export function getSpecialistsForRegion(regionId: string): string[] {
  return contentIntegrationService.getSpecialistsForRegion(regionId);
}

/**
 * Convenience function to search regions
 */
export function searchRegions(query: string): RegionMapping[] {
  return contentIntegrationService.searchRegions(query);
}

/**
 * Convenience function to get all region IDs
 */
export function getAllRegionIds(): string[] {
  return contentIntegrationService.getAllRegionIds();
}

export default ContentIntegrationService;
