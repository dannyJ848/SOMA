/**
 * Region-to-Physiology Content Mapping
 *
 * Maps anatomical region IDs to the relevant physiology EducationalContent
 * objects from core/content/physiology/. Each region maps to one or more
 * physiology topics that are anatomically relevant.
 *
 * The content is lazy-loaded to avoid importing all physiology modules upfront.
 */

import type { EducationalContent } from '@core/content/types';

// ============================================================================
// Types
// ============================================================================

export interface PhysiologyTopicRef {
  /** Display name for the topic listing */
  label: string;
  /** Module path segment (e.g., 'cardiovascular') */
  system: string;
  /** Async loader that returns the EducationalContent */
  load: () => Promise<EducationalContent>;
}

export interface RegionPhysiologyEntry {
  /** Display name for the region */
  regionName: string;
  /** Primary body system */
  primarySystem: string;
  /** All physiology topics relevant to this region */
  topics: PhysiologyTopicRef[];
}

// ============================================================================
// Mapping
// ============================================================================

export const REGION_PHYSIOLOGY_MAP: Record<string, RegionPhysiologyEntry> = {
  // HEAD
  head: {
    regionName: 'Head',
    primarySystem: 'nervous',
    topics: [
      {
        label: 'Neuron Basics',
        system: 'nervous',
        load: async () => (await import('@core/content/physiology/nervous/neuron-basics')).neuronBasicsContent,
      },
      {
        label: 'Neurotransmission',
        system: 'nervous',
        load: async () => (await import('@core/content/physiology/nervous/neurotransmission')).neurotransmissionContent,
      },
      {
        label: 'Central Nervous System',
        system: 'nervous',
        load: async () => (await import('@core/content/physiology/nervous/central-nervous-system')).centralNervousSystemContent,
      },
    ],
  },

  // NECK
  neck: {
    regionName: 'Neck',
    primarySystem: 'endocrine',
    topics: [
      {
        label: 'Thyroid Function',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/thyroid-function')).THYROID_FUNCTION,
      },
      {
        label: 'Hormone Basics',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/hormone-basics')).HORMONE_BASICS,
      },
      {
        label: 'Respiratory Control',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/respiratory-control')).respiratoryControl,
      },
    ],
  },

  // CHEST / THORAX
  chest: {
    regionName: 'Chest (Thorax)',
    primarySystem: 'cardiovascular',
    topics: [
      {
        label: 'Cardiac Cycle',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/cardiac-cycle')).cardiacCycle,
      },
      {
        label: 'Gas Exchange',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/gas-exchange')).gasExchange,
      },
      {
        label: 'Hemodynamics',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/hemodynamics')).hemodynamics,
      },
      {
        label: 'Ventilation Mechanics',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/ventilation-mechanics')).ventilationMechanics,
      },
      {
        label: 'Cardiac Electrophysiology',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/cardiac-electrophysiology')).cardiacElectrophysiology,
      },
    ],
  },

  // HEART (specific organ)
  heart: {
    regionName: 'Heart',
    primarySystem: 'cardiovascular',
    topics: [
      {
        label: 'Cardiac Cycle',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/cardiac-cycle')).cardiacCycle,
      },
      {
        label: 'Cardiac Electrophysiology',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/cardiac-electrophysiology')).cardiacElectrophysiology,
      },
      {
        label: 'Hemodynamics',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/hemodynamics')).hemodynamics,
      },
      {
        label: 'Clinical Hypertension',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/clinical-correlations')).clinicalHypertension,
      },
      {
        label: 'Heart Failure',
        system: 'cardiovascular',
        load: async () => (await import('@core/content/physiology/cardiovascular/clinical-correlations')).clinicalHeartFailure,
      },
    ],
  },

  // LUNGS
  lungs: {
    regionName: 'Lungs',
    primarySystem: 'respiratory',
    topics: [
      {
        label: 'Gas Exchange',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/gas-exchange')).gasExchange,
      },
      {
        label: 'Ventilation Mechanics',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/ventilation-mechanics')).ventilationMechanics,
      },
      {
        label: 'Ventilation Control',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/ventilation-control')).ventilationControl,
      },
      {
        label: 'Respiratory Control',
        system: 'respiratory',
        load: async () => (await import('@core/content/physiology/respiratory/respiratory-control')).respiratoryControl,
      },
    ],
  },

  // ABDOMEN
  abdomen: {
    regionName: 'Abdomen',
    primarySystem: 'digestive',
    topics: [
      {
        label: 'Gastric Acid Secretion',
        system: 'digestive',
        load: async () => (await import('@core/content/physiology/digestive/gastric-acid-secretion')).gastricAcidSecretion,
      },
      {
        label: 'Nutrient Absorption',
        system: 'digestive',
        load: async () => (await import('@core/content/physiology/digestive/nutrient-absorption')).nutrientAbsorption,
      },
      {
        label: 'Nephron Physiology',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/nephron-physiology')).nephronPhysiology,
      },
      {
        label: 'Glomerular Filtration',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/glomerular-filtration')).glomerularFiltration,
      },
      {
        label: 'GI Motility',
        system: 'gastrointestinal',
        load: async () => (await import('@core/content/physiology/gastrointestinal/gi-motility')).giMotility,
      },
      {
        label: 'GI Secretion',
        system: 'gastrointestinal',
        load: async () => (await import('@core/content/physiology/gastrointestinal/gi-secretion')).giSecretion,
      },
      {
        label: 'Digestion & Absorption',
        system: 'gastrointestinal',
        load: async () => (await import('@core/content/physiology/gastrointestinal/digestion-absorption')).digestionAbsorption,
      },
    ],
  },

  // PELVIS (alias for renal/reproductive)
  pelvis: {
    regionName: 'Pelvis',
    primarySystem: 'urinary',
    topics: [
      {
        label: 'Nephron Physiology',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/nephron-physiology')).nephronPhysiology,
      },
      {
        label: 'Acid-Base Balance',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/acid-base-balance')).acidBaseBalance,
      },
      {
        label: 'Reproductive Physiology',
        system: 'reproductive',
        load: async () => (await import('@core/content/physiology/reproductive/reproductive-physiology')).reproductivePhysiology,
      },
    ],
  },

  // ARMS (musculoskeletal focus)
  leftArm: {
    regionName: 'Left Arm',
    primarySystem: 'musculoskeletal',
    topics: [
      {
        label: 'Muscle Contraction',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/muscle-contraction')).muscleContraction,
      },
      {
        label: 'Bone Remodeling',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/bone-remodeling')).boneRemodeling,
      },
      {
        label: 'Peripheral Nervous System',
        system: 'nervous',
        load: async () => (await import('@core/content/physiology/nervous/peripheral-nervous-system')).peripheralNervousSystemContent,
      },
    ],
  },

  rightArm: {
    regionName: 'Right Arm',
    primarySystem: 'musculoskeletal',
    topics: [
      {
        label: 'Muscle Contraction',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/muscle-contraction')).muscleContraction,
      },
      {
        label: 'Bone Remodeling',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/bone-remodeling')).boneRemodeling,
      },
      {
        label: 'Peripheral Nervous System',
        system: 'nervous',
        load: async () => (await import('@core/content/physiology/nervous/peripheral-nervous-system')).peripheralNervousSystemContent,
      },
    ],
  },

  // LEGS
  leftLeg: {
    regionName: 'Left Leg',
    primarySystem: 'musculoskeletal',
    topics: [
      {
        label: 'Muscle Contraction',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/muscle-contraction')).muscleContraction,
      },
      {
        label: 'Bone Biology',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/bone-remodeling')).boneRemodeling,
      },
      {
        label: 'Blood Components',
        system: 'hematology',
        load: async () => (await import('@core/content/physiology/hematology/blood-components')).bloodComponents,
      },
    ],
  },

  rightLeg: {
    regionName: 'Right Leg',
    primarySystem: 'musculoskeletal',
    topics: [
      {
        label: 'Muscle Contraction',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/muscle-contraction')).muscleContraction,
      },
      {
        label: 'Bone Biology',
        system: 'musculoskeletal',
        load: async () => (await import('@core/content/physiology/musculoskeletal/bone-remodeling')).boneRemodeling,
      },
      {
        label: 'Blood Components',
        system: 'hematology',
        load: async () => (await import('@core/content/physiology/hematology/blood-components')).bloodComponents,
      },
    ],
  },

  // SKIN / INTEGUMENTARY (general body surface)
  skin: {
    regionName: 'Skin',
    primarySystem: 'integumentary',
    topics: [
      {
        label: 'Skin Physiology',
        system: 'integumentary',
        load: async () => (await import('@core/content/physiology/integumentary/skin-physiology')).skinPhysiology,
      },
      {
        label: 'Innate Immunity',
        system: 'immune',
        load: async () => (await import('@core/content/physiology/immune/innate-immunity')).innateImmunityContent,
      },
    ],
  },

  // IMMUNE-related regions
  spleen: {
    regionName: 'Spleen / Immune System',
    primarySystem: 'immune',
    topics: [
      {
        label: 'Immune Response',
        system: 'immune',
        load: async () => (await import('@core/content/physiology/immune/immune-response')).immuneResponseContent,
      },
      {
        label: 'Innate Immunity',
        system: 'immune',
        load: async () => (await import('@core/content/physiology/immune/innate-immunity')).innateImmunityContent,
      },
      {
        label: 'Adaptive Immunity',
        system: 'immune',
        load: async () => (await import('@core/content/physiology/immune/adaptive-immunity')).adaptiveImmunityContent,
      },
      {
        label: 'Vaccination Science',
        system: 'immune',
        load: async () => (await import('@core/content/physiology/immune/vaccination-science')).vaccinationScienceContent,
      },
    ],
  },

  // KIDNEYS
  kidneys: {
    regionName: 'Kidneys',
    primarySystem: 'renal',
    topics: [
      {
        label: 'Nephron Physiology',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/nephron-physiology')).nephronPhysiology,
      },
      {
        label: 'Glomerular Filtration',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/glomerular-filtration')).glomerularFiltration,
      },
      {
        label: 'Acid-Base Balance',
        system: 'renal',
        load: async () => (await import('@core/content/physiology/renal/acid-base-balance')).acidBaseBalance,
      },
    ],
  },

  // ENDOCRINE
  endocrine: {
    regionName: 'Endocrine System',
    primarySystem: 'endocrine',
    topics: [
      {
        label: 'Hormone Basics',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/hormone-basics')).HORMONE_BASICS,
      },
      {
        label: 'Hormone Signaling',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/hormone-signaling')).hormoneSignaling,
      },
      {
        label: 'Thyroid Function',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/thyroid-function')).THYROID_FUNCTION,
      },
      {
        label: 'Adrenal Function',
        system: 'endocrine',
        load: async () => (await import('@core/content/physiology/endocrine/adrenal-function')).ADRENAL_FUNCTION,
      },
    ],
  },
};

/**
 * Get the list of physiology topic refs for a region.
 * Returns empty array if no mapping exists.
 */
export function getPhysiologyTopicsForRegion(regionId: string): PhysiologyTopicRef[] {
  return REGION_PHYSIOLOGY_MAP[regionId]?.topics ?? [];
}

/**
 * Get the region entry (name + system + topics) for a region.
 */
export function getRegionPhysiologyEntry(regionId: string): RegionPhysiologyEntry | undefined {
  return REGION_PHYSIOLOGY_MAP[regionId];
}

/**
 * Get all region IDs that have physiology content mapped.
 */
export function getAllMappedRegionIds(): string[] {
  return Object.keys(REGION_PHYSIOLOGY_MAP);
}
