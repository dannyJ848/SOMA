/**
 * Wilderness Medicine Type Definitions
 *
 * Extended types for wilderness medicine content including altitude illness,
 * temperature extremes, envenomation, wound care, and evacuation decisions.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any wilderness emergency, prioritize
 * evacuation to definitive medical care when possible.
 */

import { EducationalContent, LevelContent } from '../types';

// ============================================================================
// ALTITUDE ILLNESS TYPES
// ============================================================================

/**
 * Altitude classification
 */
export type AltitudeZone =
  | 'low' // 0-1500m (0-5000ft)
  | 'moderate' // 1500-2500m (5000-8000ft)
  | 'high' // 2500-3500m (8000-11500ft)
  | 'very-high' // 3500-5500m (11500-18000ft)
  | 'extreme'; // >5500m (>18000ft)

/**
 * Altitude illness severity
 */
export type AltitudeIllnessSeverity = 'mild' | 'moderate' | 'severe' | 'life-threatening';

/**
 * Altitude illness type
 */
export type AltitudeIllnessType = 'AMS' | 'HACE' | 'HAPE';

/**
 * Lake Louise Score criteria
 */
export interface LakeLouiseScore {
  headache: 0 | 1 | 2 | 3;
  giSymptoms: 0 | 1 | 2 | 3;
  fatigue: 0 | 1 | 2 | 3;
  dizziness: 0 | 1 | 2 | 3;
  sleepDifficulty: 0 | 1 | 2 | 3;
  totalScore: number;
  interpretation: string;
}

/**
 * Acclimatization strategy
 */
export interface AcclimatizationStrategy {
  ascentRate: string;
  restDays: string;
  sleepingAltitude: string;
  climbHighSleepLow: boolean;
  hydration: string;
  medications?: {
    name: string;
    dose: string;
    indication: string;
    sideEffects: string[];
  }[];
}

/**
 * Altitude illness content
 */
export interface AltitudeIllnessContent extends EducationalContent {
  type: 'condition';
  altitudeMetadata: {
    illnessType: AltitudeIllnessType;
    typicalAltitude: string;
    onsetTiming: string;
    progressionRate: string;
    reversibility: 'rapid-with-descent' | 'slow' | 'variable';
  };
  riskFactors: string[];
  protectiveFactors: string[];
  symptoms: {
    early: string[];
    progressive: string[];
    severe: string[];
  };
  diagnosis: {
    clinical: string[];
    lakeLouiseScore?: LakeLouiseScore;
    differentialDiagnosis: string[];
  };
  treatment: {
    mild: string[];
    moderate: string[];
    severe: string[];
    medications?: {
      name: string;
      dose: string;
      mechanism: string;
      indication: string;
    }[];
    descent: {
      indication: string;
      minimumDescent: string;
      targetAltitude: string;
    };
  };
  prevention: AcclimatizationStrategy;
  evacuationCriteria: string[];
}

// ============================================================================
// TEMPERATURE EXTREMES TYPES
// ============================================================================

/**
 * Hypothermia severity classification
 */
export type HypothermiaSeverity =
  | 'mild' // 32-35C (90-95F)
  | 'moderate' // 28-32C (82-90F)
  | 'severe' // 20-28C (<82F)
  | 'profound'; // <20C (<68F)

/**
 * Frostbite classification
 */
export type FrostbiteGrade =
  | 'frostnip' // Superficial, no tissue loss
  | 'superficial' // Grade 1-2
  | 'deep'; // Grade 3-4

/**
 * Heat illness severity
 */
export type HeatIllnessSeverity =
  | 'heat-cramps'
  | 'heat-syncope'
  | 'heat-exhaustion'
  | 'heat-stroke';

/**
 * Cold injury content
 */
export interface ColdInjuryContent extends EducationalContent {
  type: 'condition';
  coldInjuryMetadata: {
    injuryType: 'hypothermia' | 'frostbite' | 'cold-water-immersion' | 'trench-foot';
    severity: HypothermiaSeverity | FrostbiteGrade;
    tissuesAffected: string[];
    reversibility: 'fully-reversible' | 'partially-reversible' | 'irreversible' | 'depends-on-treatment';
  };
  riskFactors: string[];
  environmentalConditions: {
    temperature: string;
    windChill?: string;
    wetness?: string;
    duration: string;
  };
  pathophysiology: string;
  presentation: {
    signs: string[];
    symptoms: string[];
    physicalExam: string[];
  };
  classification?: {
    stage: string;
    temperature?: string;
    findings: string[];
    prognosis: string;
  }[];
  treatment: {
    fieldManagement: string[];
    rewarming: {
      method: string;
      rate?: string;
      precautions: string[];
    };
    doNotDo: string[];
    hospitalManagement?: string[];
  };
  complications: string[];
  prevention: string[];
  evacuationCriteria: string[];
}

/**
 * Heat illness content
 */
export interface HeatIllnessContent extends EducationalContent {
  type: 'condition';
  heatIllnessMetadata: {
    severity: HeatIllnessSeverity;
    pathophysiology: string;
    mortalityRisk: 'low' | 'moderate' | 'high' | 'very-high';
  };
  riskFactors: string[];
  environmentalConditions: {
    temperature: string;
    humidity: string;
    exertion: string;
  };
  presentation: {
    signs: string[];
    symptoms: string[];
    temperature: string;
    mentalStatus: string;
    sweating: string;
  };
  differentiatingFeatures: {
    fromHeatExhaustion?: string[];
    fromHeatStroke?: string[];
  };
  treatment: {
    immediateActions: string[];
    coolingMethods: string[];
    fluidReplacement: string;
    monitoring: string[];
    doNotDo: string[];
  };
  complications: string[];
  prevention: string[];
  returnToActivity: string[];
  evacuationCriteria: string[];
}

// ============================================================================
// WATER SAFETY TYPES
// ============================================================================

/**
 * Drowning outcome classification
 */
export type DrowningOutcome =
  | 'rescue' // No aspiration
  | 'non-fatal-drowning' // Survival with morbidity
  | 'fatal-drowning';

/**
 * Water type
 */
export type WaterType = 'freshwater' | 'saltwater' | 'chlorinated' | 'contaminated';

/**
 * Drowning content
 */
export interface DrowningContent extends EducationalContent {
  type: 'condition';
  drowningMetadata: {
    waterType: WaterType;
    mechanism: string;
    timeToIrreversibility: string;
  };
  riskFactors: string[];
  pathophysiology: {
    pulmonary: string;
    cardiovascular: string;
    neurological: string;
    metabolic?: string;
  };
  rescueApproach: {
    sceneAssessment: string[];
    reachThrowRowGo: string[];
    inWaterRescue: string[];
    extrication: string[];
  };
  resuscitation: {
    immediateActions: string[];
    airwayManagement: string[];
    cpr: string[];
    aedUse: string;
    specialConsiderations: string[];
  };
  postRescueCare: {
    monitoring: string[];
    complications: string[];
    hospitalIndicators: string[];
  };
  prevention: string[];
  prognosticFactors: string[];
}

// ============================================================================
// ENVENOMATION TYPES
// ============================================================================

/**
 * Envenomation severity
 */
export type EnvenomationSeverity = 'none' | 'mild' | 'moderate' | 'severe';

/**
 * Venom type
 */
export type VenomType =
  | 'neurotoxic'
  | 'hemotoxic'
  | 'cytotoxic'
  | 'cardiotoxic'
  | 'myotoxic'
  | 'nephrotoxic'
  | 'mixed';

/**
 * Envenomation content
 */
export interface EnvenomationContent extends EducationalContent {
  type: 'condition';
  envenomationMetadata: {
    species: string[];
    geographicDistribution: string[];
    venomType: VenomType[];
    deliveryMechanism: string;
    dryBiteRate?: string;
  };
  identification: {
    appearance: string[];
    behavior: string[];
    habitat: string[];
    seasonality?: string;
  };
  clinicalPresentation: {
    localEffects: string[];
    systemicEffects: string[];
    timeline: string;
    severityGrading?: {
      grade: string;
      findings: string[];
      management: string;
    }[];
  };
  firstAid: {
    do: string[];
    doNot: string[];
    immobilization: string;
    tourniquetUse: string;
  };
  medicalTreatment: {
    antivenom: {
      indication: string;
      type: string;
      administration: string;
      reactions: string[];
    } | null;
    supportiveCare: string[];
    woundCare: string[];
    monitoring: string[];
  };
  complications: string[];
  prevention: string[];
  evacuationCriteria: string[];
}

/**
 * Anaphylaxis risk content
 */
export interface AnaphylaxisContent extends EducationalContent {
  type: 'condition';
  triggers: string[];
  riskFactors: string[];
  presentation: {
    skin: string[];
    respiratory: string[];
    cardiovascular: string[];
    gastrointestinal: string[];
    timeline: string;
  };
  treatment: {
    epinephrine: {
      dose: string;
      route: string;
      timing: string;
      repeat: string;
    };
    supportiveCare: string[];
    monitoring: string[];
  };
  prevention: {
    avoidance: string[];
    preparedness: string[];
  };
}

// ============================================================================
// TOXICOLOGY / PLANT POISONING TYPES
// ============================================================================

/**
 * Plant toxin type
 */
export type PlantToxinType =
  | 'cardiac-glycoside'
  | 'alkaloid'
  | 'oxalate'
  | 'cyanogenic'
  | 'irritant'
  | 'hallucinogenic'
  | 'hepatotoxic'
  | 'nephrotoxic';

/**
 * Plant poisoning content
 */
export interface PlantPoisoningContent extends EducationalContent {
  type: 'condition';
  plantMetadata: {
    commonNames: string[];
    scientificName: string;
    toxinType: PlantToxinType[];
    toxicParts: string[];
    geographicDistribution: string[];
    seasonalVariation?: string;
  };
  identification: {
    appearance: string[];
    confusedWith: string[];
    habitat: string[];
  };
  toxicity: {
    mechanism: string;
    toxicDose: string;
    onsetTime: string;
    duration: string;
  };
  presentation: {
    gastrointestinal: string[];
    cardiovascular: string[];
    neurological: string[];
    other: string[];
  };
  treatment: {
    decontamination: string[];
    supportiveCare: string[];
    antidote?: string;
    monitoring: string[];
  };
  prevention: string[];
}

/**
 * Contact dermatitis content
 */
export interface ContactDermatitisContent extends EducationalContent {
  type: 'condition';
  plantMetadata: {
    commonNames: string[];
    scientificName: string;
    allergen: string;
    geographicDistribution: string[];
  };
  identification: {
    appearance: string[];
    habitat: string[];
    seasonality: string;
  };
  presentation: {
    timeline: string;
    distribution: string;
    findings: string[];
    severity: string[];
  };
  treatment: {
    decontamination: string[];
    symptomatic: string[];
    medications: string[];
    whenToSeekCare: string[];
  };
  prevention: string[];
}

// ============================================================================
// WOUND CARE TYPES
// ============================================================================

/**
 * Wound type
 */
export type WoundType =
  | 'laceration'
  | 'abrasion'
  | 'puncture'
  | 'avulsion'
  | 'amputation'
  | 'crush'
  | 'bite'
  | 'burn';

/**
 * Wound contamination level
 */
export type WoundContamination = 'clean' | 'clean-contaminated' | 'contaminated' | 'dirty';

/**
 * Bleeding severity
 */
export type BleedingSeverity = 'minor' | 'moderate' | 'severe' | 'life-threatening';

/**
 * Wilderness wound care content
 */
export interface WildernessWoundContent extends EducationalContent {
  type: 'concept';
  woundMetadata: {
    woundType: WoundType;
    contamination: WoundContamination;
    closureTiming: string;
    infectionRisk: 'low' | 'moderate' | 'high';
  };
  assessment: {
    mechanism: string[];
    depth: string[];
    structures: string[];
    contamination: string[];
    tetanusStatus: string;
  };
  cleaning: {
    irrigation: {
      solution: string;
      volume: string;
      pressure: string;
      technique: string;
    };
    debridement: string;
    foreignBodyRemoval: string;
  };
  closure: {
    primaryClosure: {
      indications: string[];
      contraindications: string[];
      techniques: string[];
    };
    delayedClosure: {
      indications: string[];
      technique: string;
    };
    openWound: {
      indications: string[];
      management: string;
    };
  };
  dressing: {
    type: string;
    changeFrequency: string;
    signs: string[];
  };
  antibiotics: {
    indications: string[];
    regimens?: string[];
  };
  tetanus: {
    cleanWound: string;
    dirtyWound: string;
  };
  complications: string[];
  evacuationCriteria: string[];
}

/**
 * Bleeding control content
 */
export interface BleedingControlContent extends EducationalContent {
  type: 'concept';
  bleedingMetadata: {
    severity: BleedingSeverity;
    source: 'arterial' | 'venous' | 'capillary' | 'mixed';
  };
  assessment: {
    hemorrhageClass: string[];
    shockSigns: string[];
  };
  controlMethods: {
    directPressure: string;
    elevation: string;
    pressurePoints: string[];
    woundPacking: string;
    tourniquet: {
      indications: string[];
      application: string;
      timing: string;
      conversion: string;
    };
    hemostaticAgents?: string[];
  };
  specialSituations: {
    junctional: string;
    scalp: string;
    nosebleed: string;
  };
  monitoring: string[];
}

/**
 * Splinting content
 */
export interface SplintingContent extends EducationalContent {
  type: 'concept';
  splintingMetadata: {
    injuryType: string[];
    improvised: boolean;
  };
  principles: string[];
  materials: {
    commercial: string[];
    improvised: string[];
  };
  techniques: {
    bodyPart: string;
    position: string;
    padding: string;
    application: string;
    checking: string[];
  }[];
  complications: string[];
  evacuationCriteria: string[];
}

/**
 * Burn content
 */
export interface BurnContent extends EducationalContent {
  type: 'condition';
  burnMetadata: {
    degree: 'first' | 'second' | 'third' | 'fourth';
    cause: 'thermal' | 'chemical' | 'electrical' | 'radiation' | 'friction';
    tbsaEstimation: string;
  };
  assessment: {
    depth: string[];
    area: string[];
    circumferential: boolean;
    specialAreas: string[];
  };
  treatment: {
    cooling: string;
    cleaning: string;
    dressing: string;
    fluidResuscitation?: string;
    painManagement: string;
  };
  doNotDo: string[];
  complications: string[];
  evacuationCriteria: string[];
}

// ============================================================================
// ENVIRONMENTAL INJURIES TYPES
// ============================================================================

/**
 * Lightning injury mechanism
 */
export type LightningMechanism =
  | 'direct-strike'
  | 'side-flash'
  | 'contact'
  | 'ground-current'
  | 'upward-streamer';

/**
 * Lightning injury content
 */
export interface LightningInjuryContent extends EducationalContent {
  type: 'condition';
  lightningMetadata: {
    mechanism: LightningMechanism[];
    mortalityRate: string;
    morbidityRate: string;
  };
  pathophysiology: {
    cardiovascular: string;
    neurological: string;
    integumentary: string;
    other: string[];
  };
  presentation: {
    immediate: string[];
    delayed: string[];
    pathognomonicFindings: string[];
  };
  resuscitation: {
    reverseTriage: string;
    cpr: string;
    aed: string;
    prolongedResuscitation: string;
  };
  treatment: string[];
  prevention: {
    avoidance: string[];
    safePosition: string;
    shelterOptions: string[];
  };
  complications: string[];
}

// ============================================================================
// DECISION MAKING TYPES
// ============================================================================

/**
 * Evacuation urgency
 */
export type EvacuationUrgency =
  | 'immediate' // Life-threatening, minutes matter
  | 'urgent' // Hours matter, condition unstable
  | 'expedient' // 24-48 hours, condition stable but needs care
  | 'non-urgent' // Days, can continue with modification
  | 'no-evacuation'; // Treat in field

/**
 * Evacuation method
 */
export type EvacuationMethod =
  | 'helicopter'
  | 'ground-ambulance'
  | 'carry-out'
  | 'walk-out-assisted'
  | 'walk-out-self'
  | 'boat';

/**
 * Evacuation decision content
 */
export interface EvacuationDecisionContent extends EducationalContent {
  type: 'concept';
  decisionFramework: {
    assessment: string[];
    urgencyDetermination: {
      urgency: EvacuationUrgency;
      criteria: string[];
      examples: string[];
    }[];
    resourceConsiderations: string[];
  };
  conditionsByUrgency: {
    immediate: string[];
    urgent: string[];
    expedient: string[];
    nonUrgent: string[];
    fieldTreatment: string[];
  };
  methodSelection: {
    method: EvacuationMethod;
    indications: string[];
    requirements: string[];
    limitations: string[];
  }[];
  documentation: string[];
  communication: string[];
}

/**
 * Field assessment content
 */
export interface FieldAssessmentContent extends EducationalContent {
  type: 'concept';
  primarySurvey: {
    component: string;
    assessment: string[];
    interventions: string[];
  }[];
  secondarySurvey: {
    history: string[];
    physicalExam: string[];
    vitalSigns: string[];
  };
  continuousMonitoring: string[];
  documentation: {
    soapFormat: string[];
    minimalData: string[];
  };
}

// ============================================================================
// EQUIPMENT TYPES
// ============================================================================

/**
 * First aid kit tier
 */
export type KitTier = 'personal' | 'group' | 'expedition' | 'professional';

/**
 * First aid kit content
 */
export interface FirstAidKitContent extends EducationalContent {
  type: 'concept';
  kitMetadata: {
    tier: KitTier;
    duration: string;
    groupSize: string;
    environment: string[];
  };
  categories: {
    category: string;
    items: {
      item: string;
      quantity: string;
      use: string;
      alternatives?: string[];
    }[];
  }[];
  customization: {
    activity: string;
    additions: string[];
  }[];
  maintenance: string[];
  training: string[];
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Emergency contact numbers
 */
export const EMERGENCY_CONTACTS = {
  emergency: '911',
  poisonControl: '1-800-222-1222',
  coastGuard: 'VHF Channel 16',
  satPhone: 'Varies by provider',
} as const;

/**
 * Altitude zones with thresholds
 */
export const ALTITUDE_ZONES: Record<AltitudeZone, { meters: string; feet: string }> = {
  low: { meters: '0-1500m', feet: '0-5000ft' },
  moderate: { meters: '1500-2500m', feet: '5000-8000ft' },
  high: { meters: '2500-3500m', feet: '8000-11500ft' },
  'very-high': { meters: '3500-5500m', feet: '11500-18000ft' },
  extreme: { meters: '>5500m', feet: '>18000ft' },
};

/**
 * Hypothermia temperature thresholds
 */
export const HYPOTHERMIA_THRESHOLDS = {
  mild: { celsius: '32-35C', fahrenheit: '90-95F' },
  moderate: { celsius: '28-32C', fahrenheit: '82-90F' },
  severe: { celsius: '20-28C', fahrenheit: '68-82F' },
  profound: { celsius: '<20C', fahrenheit: '<68F' },
} as const;
