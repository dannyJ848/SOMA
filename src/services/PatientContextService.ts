/**
 * Patient Context Service
 *
 * Aggregates all patient health data (conditions, medications, symptoms, labs, vitals, allergies)
 * and builds unified patient context objects for educational use. Maps patient conditions to
 * affected anatomical regions and extracts educational relevance from each data type.
 */

import type { BodySystemId } from '../../core/physiology/types';
import type { ConditionSimulation, ConditionCategory, ProgressionPhase } from '../../core/medical-simulation/conditions/types';
import type { MedicationPhysiology, DrugClass, BodySystemEffect, AdverseEffect } from '../../core/medical-simulation/medications/types';
import type { Symptom, SymptomInput, BodyRegion, SeverityLevel, TriageLevel } from '../../core/symptoms/types';
import type { LabTestEducation, LabResultAnalysis, LabCategory } from '../../core/lab-interpretation/types';
import type { VitalReading, VitalType, DailyVitalsSummary, VitalAlert } from '../../core/vitals/types';
import {
  ContentIntegrationService,
  contentIntegrationService,
  type RegionMapping,
  type ConditionContent,
  type ContentComplexityLevel
} from './ContentIntegrationService';

// ============================================
// Patient Data Types
// ============================================

/**
 * Patient condition record
 */
export interface PatientCondition {
  conditionId: string;
  name: string;
  category: ConditionCategory;
  diagnosedDate?: Date;
  currentPhase?: ProgressionPhase;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  status: 'active' | 'resolved' | 'in-remission' | 'chronic';
  affectedRegions: string[];
  affectedSystems: BodySystemId[];
  notes?: string;
  treatmentIds?: string[];
  relatedMedicationIds?: string[];
}

/**
 * Patient medication record
 */
export interface PatientMedication {
  medicationId: string;
  genericName: string;
  brandName?: string;
  drugClass: DrugClass;
  dosage: string;
  frequency: string;
  route: string;
  startDate?: Date;
  endDate?: Date;
  indication: string;
  status: 'active' | 'discontinued' | 'as-needed';
  affectedSystems: BodySystemId[];
  sideEffectsExperienced?: string[];
}

/**
 * Patient symptom record
 */
export interface PatientSymptom {
  symptomId: string;
  name: string;
  bodyRegion: BodyRegion;
  severity: SeverityLevel;
  onsetDate?: Date;
  duration?: string;
  frequency: 'constant' | 'intermittent' | 'episodic';
  aggravatingFactors?: string[];
  relievingFactors?: string[];
  associatedConditions?: string[];
  status: 'active' | 'resolved' | 'recurring';
}

/**
 * Patient lab result record
 */
export interface PatientLabResult {
  testId: string;
  testName: string;
  category: LabCategory;
  value: number;
  unit: string;
  referenceRange: { low: number; high: number };
  status: 'normal' | 'elevated' | 'decreased' | 'critical-high' | 'critical-low';
  collectionDate: Date;
  relatedConditions?: string[];
  trend?: 'improving' | 'stable' | 'worsening';
}

/**
 * Patient vital reading record
 */
export interface PatientVital {
  type: VitalType;
  value: number | { systolic: number; diastolic: number };
  unit: string;
  timestamp: Date;
  status: 'normal' | 'elevated' | 'decreased' | 'critical';
  context?: string;
}

/**
 * Patient allergy record
 */
export interface PatientAllergy {
  allergenId: string;
  allergenName: string;
  type: 'medication' | 'food' | 'environmental' | 'other';
  severity: 'mild' | 'moderate' | 'severe' | 'anaphylactic';
  reactions: string[];
  diagnosedDate?: Date;
  verificationStatus: 'confirmed' | 'suspected' | 'refuted';
}

/**
 * Complete patient health data
 */
export interface PatientHealthData {
  patientId: string;
  conditions: PatientCondition[];
  medications: PatientMedication[];
  symptoms: PatientSymptom[];
  labResults: PatientLabResult[];
  vitals: PatientVital[];
  allergies: PatientAllergy[];
  lastUpdated: Date;
}

// ============================================
// Educational Context Types
// ============================================

/**
 * Severity/priority level for educational focus
 */
export type EducationalPriority = 'critical' | 'high' | 'moderate' | 'low' | 'informational';

/**
 * Educational relevance extracted from patient data
 */
export interface EducationalRelevance {
  dataType: 'condition' | 'medication' | 'symptom' | 'lab' | 'vital' | 'allergy';
  itemId: string;
  itemName: string;
  priority: EducationalPriority;
  relevanceScore: number; // 0-100
  affectedRegions: string[];
  affectedSystems: BodySystemId[];
  learningTopics: string[];
  clinicalCorrelations: string[];
  educationalNotes: string[];
}

/**
 * Region-specific patient context
 */
export interface RegionPatientContext {
  regionId: string;
  regionName: string;
  system: BodySystemId;

  // Patient-specific data for this region
  conditions: PatientCondition[];
  medications: PatientMedication[];
  symptoms: PatientSymptom[];
  labResults: PatientLabResult[];
  vitals: PatientVital[];
  allergies: PatientAllergy[];

  // Educational relevance
  educationalItems: EducationalRelevance[];

  // Aggregated priority
  overallPriority: EducationalPriority;

  // Related specialists
  relevantSpecialists: string[];
}

/**
 * Complete unified patient context for educational use
 */
export interface UnifiedPatientContext {
  patientId: string;

  // Aggregated health data
  healthData: PatientHealthData;

  // Educational relevance extracted from all data
  educationalRelevance: EducationalRelevance[];

  // Region-mapped data
  regionContexts: Map<string, RegionPatientContext>;

  // System-mapped data
  systemContexts: Map<BodySystemId, {
    conditions: PatientCondition[];
    medications: PatientMedication[];
    symptoms: PatientSymptom[];
    overallPriority: EducationalPriority;
  }>;

  // Priority-sorted educational focus areas
  prioritizedTopics: {
    topic: string;
    priority: EducationalPriority;
    relatedItems: string[];
    suggestedComplexity: ContentComplexityLevel;
  }[];

  // Cross-system correlations
  systemCorrelations: {
    systems: BodySystemId[];
    correlation: string;
    educationalValue: string;
  }[];

  // Generated at timestamp
  generatedAt: Date;
}

/**
 * Educational context for a specific region
 */
export interface RegionEducationalContext {
  regionId: string;
  regionName: string;
  complexityLevel: ContentComplexityLevel;

  // Patient-specific context
  patientContext: RegionPatientContext | null;

  // General educational content
  generalContent: {
    physiology: string[];
    anatomy: string[];
    pathology: string[];
    clinical: string[];
  };

  // Personalized educational content
  personalizedContent: {
    relevantConditions: ConditionContent[];
    relevantMedications: string[];
    relevantSymptoms: string[];
    relevantLabs: string[];
  };

  // Learning suggestions
  learningSuggestions: {
    topic: string;
    reason: string;
    priority: EducationalPriority;
  }[];

  // Clinical correlations
  clinicalCorrelations: string[];
}

// ============================================
// Region Mapping Configuration
// ============================================

/**
 * Maps body regions to anatomical region IDs
 */
const BODY_REGION_TO_ANATOMICAL_MAP: Record<BodyRegion, string[]> = {
  'head': ['nervous.brain', 'nervous.brain.cerebrum'],
  'face': ['nervous.brain', 'integumentary.skin'],
  'eyes': ['sensory.eye'],
  'ears': ['sensory.ear'],
  'nose': ['respiratory.nasalCavity'],
  'mouth': ['digestive.esophagus'],
  'neck': ['endocrine.thyroid', 'respiratory.trachea'],
  'throat': ['respiratory.trachea', 'digestive.esophagus'],
  'chest': ['cardiovascular.heart', 'respiratory.lungs'],
  'breast': ['integumentary.skin'],
  'upper-back': ['musculoskeletal.spine'],
  'mid-back': ['musculoskeletal.spine'],
  'lower-back': ['musculoskeletal.spine', 'urinary.kidneys'],
  'abdomen-upper': ['digestive.stomach', 'digestive.liver', 'digestive.pancreas'],
  'abdomen-lower': ['digestive.smallIntestine', 'digestive.largeIntestine'],
  'abdomen-right': ['digestive.liver', 'digestive.gallbladder'],
  'abdomen-left': ['digestive.stomach', 'lymphatic.spleen'],
  'pelvis': ['urinary.bladder', 'reproductive.female.uterus', 'reproductive.male.prostate'],
  'groin': ['reproductive.male.testes', 'immune.lymphNodes'],
  'shoulder': ['musculoskeletal.joints'],
  'upper-arm': ['musculoskeletal.muscle'],
  'elbow': ['musculoskeletal.joints'],
  'forearm': ['musculoskeletal.muscle'],
  'wrist': ['musculoskeletal.joints'],
  'hand': ['musculoskeletal.joints'],
  'fingers': ['musculoskeletal.joints'],
  'hip': ['musculoskeletal.joints'],
  'thigh': ['musculoskeletal.muscle'],
  'knee': ['musculoskeletal.joints'],
  'lower-leg': ['musculoskeletal.muscle'],
  'ankle': ['musculoskeletal.joints'],
  'foot': ['musculoskeletal.joints'],
  'toes': ['musculoskeletal.joints'],
  'skin-general': ['integumentary.skin'],
  'whole-body': ['immune.lymphNodes', 'hematologic.bone-marrow']
};

/**
 * Maps condition categories to body systems
 */
const CONDITION_CATEGORY_TO_SYSTEM: Record<ConditionCategory, BodySystemId[]> = {
  'cardiovascular': ['cardiovascular'],
  'metabolic': ['endocrine', 'digestive'],
  'respiratory': ['respiratory'],
  'musculoskeletal': ['musculoskeletal'],
  'neurologic': ['nervous'],
  'gastrointestinal': ['digestive'],
  'dermatologic': ['integumentary'],
  'urologic': ['urinary'],
  'hematologic': ['hematologic', 'lymphatic'],
  'immunologic': ['immune', 'lymphatic'],
  'endocrine': ['endocrine'],
  'psychiatric': ['nervous'],
  'infectious': ['immune'],
  'oncologic': ['hematologic']
};

/**
 * Maps drug classes to affected body systems
 */
const DRUG_CLASS_TO_SYSTEM: Record<DrugClass, BodySystemId[]> = {
  'antihypertensive': ['cardiovascular'],
  'antiplatelet': ['cardiovascular', 'hematologic'],
  'anticoagulant': ['hematologic'],
  'statin': ['cardiovascular'],
  'beta-blocker': ['cardiovascular'],
  'ace-inhibitor': ['cardiovascular', 'urinary'],
  'arb': ['cardiovascular', 'urinary'],
  'calcium-channel-blocker': ['cardiovascular'],
  'diuretic': ['urinary', 'cardiovascular'],
  'antidiabetic': ['endocrine'],
  'biguanide': ['endocrine', 'digestive'],
  'sulfonylurea': ['endocrine'],
  'glp1-agonist': ['endocrine', 'digestive'],
  'insulin': ['endocrine'],
  'sglt2-inhibitor': ['endocrine', 'urinary'],
  'nsaid': ['musculoskeletal', 'digestive'],
  'analgesic': ['nervous'],
  'opioid': ['nervous'],
  'bronchodilator': ['respiratory'],
  'corticosteroid': ['immune', 'endocrine'],
  'antihistamine': ['immune', 'respiratory'],
  'ppi': ['digestive'],
  'h2-blocker': ['digestive'],
  'antibiotic': ['immune'],
  'antiviral': ['immune'],
  'antifungal': ['immune'],
  'antidepressant': ['nervous'],
  'anxiolytic': ['nervous'],
  'antipsychotic': ['nervous'],
  'anticonvulsant': ['nervous'],
  'thyroid': ['endocrine'],
  'vitamin': ['digestive'],
  'mineral': ['musculoskeletal'],
  'other': []
};

/**
 * Maps lab categories to body systems
 */
const LAB_CATEGORY_TO_SYSTEM: Record<LabCategory, BodySystemId[]> = {
  'hematology': ['hematologic'],
  'chemistry': ['urinary', 'digestive'],
  'liver': ['digestive'],
  'renal': ['urinary'],
  'cardiac': ['cardiovascular'],
  'endocrine': ['endocrine'],
  'lipid': ['cardiovascular'],
  'coagulation': ['hematologic'],
  'urinalysis': ['urinary'],
  'inflammatory': ['immune'],
  'infectious': ['immune'],
  'tumor-markers': ['hematologic'],
  'vitamins-minerals': ['digestive'],
  'blood-gas': ['respiratory'],
  'autoimmune': ['immune']
};

// ============================================
// Patient Context Service
// ============================================

/**
 * Service for aggregating patient health data and building educational contexts
 */
export class PatientContextService {
  private static instance: PatientContextService;
  private contentService: ContentIntegrationService;
  private patientDataCache: Map<string, UnifiedPatientContext> = new Map();

  private constructor() {
    this.contentService = contentIntegrationService;
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): PatientContextService {
    if (!PatientContextService.instance) {
      PatientContextService.instance = new PatientContextService();
    }
    return PatientContextService.instance;
  }

  // ============================================
  // Main Context Building Methods
  // ============================================

  /**
   * Build a unified patient context from all health data
   */
  public buildUnifiedContext(healthData: PatientHealthData): UnifiedPatientContext {
    const educationalRelevance = this.extractEducationalRelevance(healthData);
    const regionContexts = this.buildRegionContexts(healthData, educationalRelevance);
    const systemContexts = this.buildSystemContexts(healthData);
    const prioritizedTopics = this.prioritizeTopics(educationalRelevance);
    const systemCorrelations = this.findSystemCorrelations(healthData);

    const context: UnifiedPatientContext = {
      patientId: healthData.patientId,
      healthData,
      educationalRelevance,
      regionContexts,
      systemContexts,
      prioritizedTopics,
      systemCorrelations,
      generatedAt: new Date()
    };

    // Cache the context
    this.patientDataCache.set(healthData.patientId, context);

    return context;
  }

  /**
   * Extract educational relevance from all patient data types
   */
  private extractEducationalRelevance(healthData: PatientHealthData): EducationalRelevance[] {
    const relevance: EducationalRelevance[] = [];

    // Extract from conditions
    for (const condition of healthData.conditions) {
      relevance.push(this.extractConditionRelevance(condition));
    }

    // Extract from medications
    for (const medication of healthData.medications) {
      relevance.push(this.extractMedicationRelevance(medication));
    }

    // Extract from symptoms
    for (const symptom of healthData.symptoms) {
      relevance.push(this.extractSymptomRelevance(symptom));
    }

    // Extract from lab results
    for (const lab of healthData.labResults) {
      relevance.push(this.extractLabRelevance(lab));
    }

    // Extract from vitals
    for (const vital of healthData.vitals) {
      relevance.push(this.extractVitalRelevance(vital));
    }

    // Extract from allergies
    for (const allergy of healthData.allergies) {
      relevance.push(this.extractAllergyRelevance(allergy));
    }

    // Sort by relevance score
    return relevance.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  /**
   * Extract educational relevance from a condition
   */
  private extractConditionRelevance(condition: PatientCondition): EducationalRelevance {
    const systems = CONDITION_CATEGORY_TO_SYSTEM[condition.category] ?? [];
    const priority = this.calculateConditionPriority(condition);
    const relevanceScore = this.calculateConditionRelevanceScore(condition);

    return {
      dataType: 'condition',
      itemId: condition.conditionId,
      itemName: condition.name,
      priority,
      relevanceScore,
      affectedRegions: condition.affectedRegions,
      affectedSystems: [...condition.affectedSystems, ...systems],
      learningTopics: [
        `Understanding ${condition.name}`,
        `${condition.category} system pathophysiology`,
        `Treatment approaches for ${condition.name}`,
        condition.currentPhase ? `Disease progression: ${condition.currentPhase} phase` : ''
      ].filter(Boolean),
      clinicalCorrelations: [
        `Current status: ${condition.status}`,
        `Severity: ${condition.severity}`,
        condition.currentPhase ? `Phase: ${condition.currentPhase}` : ''
      ].filter(Boolean),
      educationalNotes: [
        `This condition affects the ${condition.affectedSystems.join(', ')} system(s).`,
        condition.treatmentIds?.length ? `Currently on ${condition.treatmentIds.length} treatment(s).` : ''
      ].filter(Boolean)
    };
  }

  /**
   * Extract educational relevance from a medication
   */
  private extractMedicationRelevance(medication: PatientMedication): EducationalRelevance {
    const systems = DRUG_CLASS_TO_SYSTEM[medication.drugClass] ?? [];
    const priority = this.calculateMedicationPriority(medication);
    const relevanceScore = this.calculateMedicationRelevanceScore(medication);

    const affectedRegions = this.getRegionsForSystems([...medication.affectedSystems, ...systems]);

    return {
      dataType: 'medication',
      itemId: medication.medicationId,
      itemName: medication.genericName,
      priority,
      relevanceScore,
      affectedRegions,
      affectedSystems: [...medication.affectedSystems, ...systems],
      learningTopics: [
        `How ${medication.genericName} works`,
        `${medication.drugClass} drug class mechanisms`,
        `Understanding medication effects on ${medication.affectedSystems.join(', ')}`
      ],
      clinicalCorrelations: [
        `Indicated for: ${medication.indication}`,
        `Dosage: ${medication.dosage} ${medication.frequency}`,
        medication.sideEffectsExperienced?.length ? `Experiencing side effects` : ''
      ].filter(Boolean),
      educationalNotes: [
        `Route: ${medication.route}`,
        `Status: ${medication.status}`
      ]
    };
  }

  /**
   * Extract educational relevance from a symptom
   */
  private extractSymptomRelevance(symptom: PatientSymptom): EducationalRelevance {
    const regions = BODY_REGION_TO_ANATOMICAL_MAP[symptom.bodyRegion] ?? [];
    const systems = this.getSystemsForRegions(regions);
    const priority = this.calculateSymptomPriority(symptom);
    const relevanceScore = this.calculateSymptomRelevanceScore(symptom);

    return {
      dataType: 'symptom',
      itemId: symptom.symptomId,
      itemName: symptom.name,
      priority,
      relevanceScore,
      affectedRegions: regions,
      affectedSystems: systems,
      learningTopics: [
        `Understanding ${symptom.name}`,
        `Anatomy of ${symptom.bodyRegion}`,
        `Possible causes of ${symptom.name}`
      ],
      clinicalCorrelations: [
        `Severity: ${symptom.severity}/10`,
        `Location: ${symptom.bodyRegion}`,
        `Pattern: ${symptom.frequency}`
      ],
      educationalNotes: [
        symptom.aggravatingFactors?.length ? `Worsened by: ${symptom.aggravatingFactors.join(', ')}` : '',
        symptom.relievingFactors?.length ? `Relieved by: ${symptom.relievingFactors.join(', ')}` : ''
      ].filter(Boolean)
    };
  }

  /**
   * Extract educational relevance from a lab result
   */
  private extractLabRelevance(lab: PatientLabResult): EducationalRelevance {
    const systems = LAB_CATEGORY_TO_SYSTEM[lab.category] ?? [];
    const regions = this.getRegionsForSystems(systems);
    const priority = this.calculateLabPriority(lab);
    const relevanceScore = this.calculateLabRelevanceScore(lab);

    return {
      dataType: 'lab',
      itemId: lab.testId,
      itemName: lab.testName,
      priority,
      relevanceScore,
      affectedRegions: regions,
      affectedSystems: systems,
      learningTopics: [
        `What ${lab.testName} measures`,
        `Understanding ${lab.category} labs`,
        lab.status !== 'normal' ? `Causes of ${lab.status} ${lab.testName}` : ''
      ].filter(Boolean),
      clinicalCorrelations: [
        `Value: ${lab.value} ${lab.unit}`,
        `Status: ${lab.status}`,
        `Reference: ${lab.referenceRange.low}-${lab.referenceRange.high} ${lab.unit}`
      ],
      educationalNotes: [
        lab.trend ? `Trend: ${lab.trend}` : '',
        lab.relatedConditions?.length ? `Related to: ${lab.relatedConditions.join(', ')}` : ''
      ].filter(Boolean)
    };
  }

  /**
   * Extract educational relevance from a vital sign
   */
  private extractVitalRelevance(vital: PatientVital): EducationalRelevance {
    const vitalSystemMap: Record<VitalType, BodySystemId[]> = {
      'heart-rate': ['cardiovascular'],
      'blood-pressure': ['cardiovascular'],
      'hrv': ['cardiovascular', 'nervous'],
      'oxygen-saturation': ['respiratory', 'cardiovascular'],
      'respiratory-rate': ['respiratory'],
      'peak-flow': ['respiratory'],
      'temperature': ['immune'],
      'blood-glucose': ['endocrine'],
      'weight': ['endocrine'],
      'body-composition': ['musculoskeletal', 'endocrine'],
      'sleep': ['nervous'],
      'activity': ['musculoskeletal', 'cardiovascular'],
      'workout': ['musculoskeletal', 'cardiovascular'],
      'recovery': ['musculoskeletal', 'nervous'],
      'strain': ['musculoskeletal', 'cardiovascular']
    };

    const systems = vitalSystemMap[vital.type] ?? [];
    const regions = this.getRegionsForSystems(systems);
    const priority = this.calculateVitalPriority(vital);
    const relevanceScore = this.calculateVitalRelevanceScore(vital);

    return {
      dataType: 'vital',
      itemId: vital.type,
      itemName: vital.type.replace(/-/g, ' '),
      priority,
      relevanceScore,
      affectedRegions: regions,
      affectedSystems: systems,
      learningTopics: [
        `Understanding ${vital.type.replace(/-/g, ' ')}`,
        `Normal vs abnormal ${vital.type.replace(/-/g, ' ')} values`
      ],
      clinicalCorrelations: [
        `Current: ${typeof vital.value === 'object' ? `${vital.value.systolic}/${vital.value.diastolic}` : vital.value} ${vital.unit}`,
        `Status: ${vital.status}`
      ],
      educationalNotes: [
        vital.context ? `Context: ${vital.context}` : ''
      ].filter(Boolean)
    };
  }

  /**
   * Extract educational relevance from an allergy
   */
  private extractAllergyRelevance(allergy: PatientAllergy): EducationalRelevance {
    const systems: BodySystemId[] = ['immune'];
    const regions = this.getRegionsForSystems(systems);
    const priority = this.calculateAllergyPriority(allergy);
    const relevanceScore = this.calculateAllergyRelevanceScore(allergy);

    return {
      dataType: 'allergy',
      itemId: allergy.allergenId,
      itemName: allergy.allergenName,
      priority,
      relevanceScore,
      affectedRegions: regions,
      affectedSystems: systems,
      learningTopics: [
        `Understanding allergic reactions`,
        `${allergy.type} allergies`,
        `Immune system response to allergens`
      ],
      clinicalCorrelations: [
        `Allergen: ${allergy.allergenName}`,
        `Type: ${allergy.type}`,
        `Severity: ${allergy.severity}`
      ],
      educationalNotes: [
        `Reactions: ${allergy.reactions.join(', ')}`,
        `Verification: ${allergy.verificationStatus}`
      ]
    };
  }

  // ============================================
  // Region Context Building
  // ============================================

  /**
   * Build region-specific contexts
   */
  private buildRegionContexts(
    healthData: PatientHealthData,
    educationalRelevance: EducationalRelevance[]
  ): Map<string, RegionPatientContext> {
    const regionContexts = new Map<string, RegionPatientContext>();
    const allRegionIds = this.contentService.getAllRegionIds();

    for (const regionId of allRegionIds) {
      const mapping = this.contentService.getRegionMapping(regionId);
      if (!mapping) continue;

      const regionContext = this.buildSingleRegionContext(
        regionId,
        mapping,
        healthData,
        educationalRelevance
      );

      if (this.hasRelevantData(regionContext)) {
        regionContexts.set(regionId, regionContext);
      }
    }

    return regionContexts;
  }

  /**
   * Build context for a single region
   */
  private buildSingleRegionContext(
    regionId: string,
    mapping: RegionMapping,
    healthData: PatientHealthData,
    educationalRelevance: EducationalRelevance[]
  ): RegionPatientContext {
    // Get conditions for this region
    const conditions = healthData.conditions.filter(
      c => c.affectedRegions.includes(regionId) ||
           c.affectedSystems.includes(mapping.system)
    );

    // Get medications affecting this region
    const medications = healthData.medications.filter(
      m => m.affectedSystems.includes(mapping.system)
    );

    // Get symptoms in this region
    const symptoms = healthData.symptoms.filter(s => {
      const symptomRegions = BODY_REGION_TO_ANATOMICAL_MAP[s.bodyRegion] ?? [];
      return symptomRegions.includes(regionId);
    });

    // Get relevant labs
    const labResults = healthData.labResults.filter(l => {
      const labSystems = LAB_CATEGORY_TO_SYSTEM[l.category] ?? [];
      return labSystems.includes(mapping.system);
    });

    // Get relevant vitals
    const vitals = healthData.vitals.filter(v => {
      const vitalSystemMap: Partial<Record<VitalType, BodySystemId[]>> = {
        'heart-rate': ['cardiovascular'],
        'blood-pressure': ['cardiovascular'],
        'oxygen-saturation': ['respiratory', 'cardiovascular'],
        'respiratory-rate': ['respiratory'],
        'blood-glucose': ['endocrine']
      };
      const systems = vitalSystemMap[v.type] ?? [];
      return systems.includes(mapping.system);
    });

    // Get relevant allergies (immune system related)
    const allergies = mapping.system === 'immune' ? healthData.allergies : [];

    // Get educational items for this region
    const educationalItems = educationalRelevance.filter(
      r => r.affectedRegions.includes(regionId) || r.affectedSystems.includes(mapping.system)
    );

    // Calculate overall priority
    const overallPriority = this.calculateRegionPriority(
      conditions, medications, symptoms, labResults, vitals
    );

    return {
      regionId,
      regionName: mapping.name,
      system: mapping.system,
      conditions,
      medications,
      symptoms,
      labResults,
      vitals,
      allergies,
      educationalItems,
      overallPriority,
      relevantSpecialists: mapping.specialists
    };
  }

  /**
   * Build system-level contexts
   */
  private buildSystemContexts(healthData: PatientHealthData): Map<BodySystemId, {
    conditions: PatientCondition[];
    medications: PatientMedication[];
    symptoms: PatientSymptom[];
    overallPriority: EducationalPriority;
  }> {
    const systemContexts = new Map();
    const systems: BodySystemId[] = [
      'cardiovascular', 'respiratory', 'nervous', 'endocrine', 'digestive',
      'urinary', 'musculoskeletal', 'immune', 'integumentary', 'reproductive',
      'lymphatic', 'hematologic'
    ];

    for (const system of systems) {
      const conditions = healthData.conditions.filter(
        c => c.affectedSystems.includes(system)
      );

      const medications = healthData.medications.filter(
        m => m.affectedSystems.includes(system)
      );

      const symptoms = healthData.symptoms.filter(s => {
        const regions = BODY_REGION_TO_ANATOMICAL_MAP[s.bodyRegion] ?? [];
        return this.getSystemsForRegions(regions).includes(system);
      });

      const overallPriority = this.calculateSystemPriority(conditions, medications, symptoms);

      systemContexts.set(system, {
        conditions,
        medications,
        symptoms,
        overallPriority
      });
    }

    return systemContexts;
  }

  // ============================================
  // Helper Methods for Region Queries
  // ============================================

  /**
   * Get conditions affecting a specific anatomical region
   */
  public getConditionsForRegion(regionId: string): PatientCondition[] {
    const cachedContexts = Array.from(this.patientDataCache.values());
    if (cachedContexts.length === 0) return [];

    const context = cachedContexts[0]; // Use most recent patient context
    return context.regionContexts.get(regionId)?.conditions ?? [];
  }

  /**
   * Get medications affecting a specific anatomical region
   */
  public getMedicationsAffectingRegion(regionId: string): PatientMedication[] {
    const cachedContexts = Array.from(this.patientDataCache.values());
    if (cachedContexts.length === 0) return [];

    const context = cachedContexts[0];
    return context.regionContexts.get(regionId)?.medications ?? [];
  }

  /**
   * Get symptoms in a specific anatomical region
   */
  public getSymptomsInRegion(regionId: string): PatientSymptom[] {
    const cachedContexts = Array.from(this.patientDataCache.values());
    if (cachedContexts.length === 0) return [];

    const context = cachedContexts[0];
    return context.regionContexts.get(regionId)?.symptoms ?? [];
  }

  /**
   * Get lab results relevant to a specific anatomical region
   */
  public getLabsRelevantToRegion(regionId: string): PatientLabResult[] {
    const cachedContexts = Array.from(this.patientDataCache.values());
    if (cachedContexts.length === 0) return [];

    const context = cachedContexts[0];
    return context.regionContexts.get(regionId)?.labResults ?? [];
  }

  /**
   * Build educational context for a specific region
   */
  public async buildEducationalContext(
    regionId: string,
    complexityLevel: ContentComplexityLevel
  ): Promise<RegionEducationalContext> {
    const mapping = this.contentService.getRegionMapping(regionId);
    if (!mapping) {
      return this.getEmptyEducationalContext(regionId, complexityLevel);
    }

    // Get general educational content
    const generalContent = await this.contentService.getContentForRegion(regionId, complexityLevel);

    // Get patient-specific context if available
    const cachedContexts = Array.from(this.patientDataCache.values());
    const patientContext = cachedContexts.length > 0
      ? cachedContexts[0].regionContexts.get(regionId) ?? null
      : null;

    // Get relevant conditions from the content service
    const relevantConditions = await this.contentService.getConditionsForRegion(regionId);

    // Build personalized content based on patient data
    const personalizedContent = this.buildPersonalizedContent(patientContext, relevantConditions);

    // Generate learning suggestions
    const learningSuggestions = this.generateLearningSuggestions(
      patientContext,
      relevantConditions,
      complexityLevel
    );

    // Get clinical correlations
    const clinicalCorrelations = this.getClinicallCorrelationsForRegion(
      regionId,
      patientContext,
      relevantConditions
    );

    return {
      regionId,
      regionName: mapping.name,
      complexityLevel,
      patientContext,
      generalContent: {
        physiology: generalContent.physiology.map(p => p.name),
        anatomy: generalContent.clinical.filter(c => c.type === 'anatomy').map(c => c.name),
        pathology: generalContent.pathology.map(p => p.name),
        clinical: generalContent.clinical.filter(c => c.type === 'clinical').map(c => c.name)
      },
      personalizedContent,
      learningSuggestions,
      clinicalCorrelations
    };
  }

  // ============================================
  // Priority and Score Calculations
  // ============================================

  /**
   * Calculate priority for a condition
   */
  private calculateConditionPriority(condition: PatientCondition): EducationalPriority {
    if (condition.severity === 'critical' || condition.status === 'active') {
      return 'critical';
    }
    if (condition.severity === 'severe') {
      return 'high';
    }
    if (condition.severity === 'moderate') {
      return 'moderate';
    }
    return 'low';
  }

  /**
   * Calculate relevance score for a condition
   */
  private calculateConditionRelevanceScore(condition: PatientCondition): number {
    let score = 50;

    if (condition.status === 'active') score += 30;
    if (condition.severity === 'critical') score += 20;
    if (condition.severity === 'severe') score += 15;
    if (condition.severity === 'moderate') score += 10;

    return Math.min(100, score);
  }

  /**
   * Calculate priority for a medication
   */
  private calculateMedicationPriority(medication: PatientMedication): EducationalPriority {
    if (medication.sideEffectsExperienced && medication.sideEffectsExperienced.length > 0) {
      return 'high';
    }
    if (medication.status === 'active') {
      return 'moderate';
    }
    return 'low';
  }

  /**
   * Calculate relevance score for a medication
   */
  private calculateMedicationRelevanceScore(medication: PatientMedication): number {
    let score = 40;

    if (medication.status === 'active') score += 25;
    if (medication.sideEffectsExperienced?.length) score += 20;

    return Math.min(100, score);
  }

  /**
   * Calculate priority for a symptom
   */
  private calculateSymptomPriority(symptom: PatientSymptom): EducationalPriority {
    if (symptom.severity >= 8) return 'critical';
    if (symptom.severity >= 6) return 'high';
    if (symptom.severity >= 4) return 'moderate';
    if (symptom.severity >= 2) return 'low';
    return 'informational';
  }

  /**
   * Calculate relevance score for a symptom
   */
  private calculateSymptomRelevanceScore(symptom: PatientSymptom): number {
    let score = symptom.severity * 10;

    if (symptom.status === 'active') score += 20;
    if (symptom.frequency === 'constant') score += 15;

    return Math.min(100, score);
  }

  /**
   * Calculate priority for a lab result
   */
  private calculateLabPriority(lab: PatientLabResult): EducationalPriority {
    if (lab.status.startsWith('critical')) return 'critical';
    if (lab.status !== 'normal' && lab.trend === 'worsening') return 'high';
    if (lab.status !== 'normal') return 'moderate';
    return 'informational';
  }

  /**
   * Calculate relevance score for a lab result
   */
  private calculateLabRelevanceScore(lab: PatientLabResult): number {
    let score = 30;

    if (lab.status.startsWith('critical')) score += 50;
    else if (lab.status !== 'normal') score += 30;

    if (lab.trend === 'worsening') score += 20;

    return Math.min(100, score);
  }

  /**
   * Calculate priority for a vital sign
   */
  private calculateVitalPriority(vital: PatientVital): EducationalPriority {
    if (vital.status === 'critical') return 'critical';
    if (vital.status !== 'normal') return 'moderate';
    return 'informational';
  }

  /**
   * Calculate relevance score for a vital sign
   */
  private calculateVitalRelevanceScore(vital: PatientVital): number {
    let score = 25;

    if (vital.status === 'critical') score += 50;
    else if (vital.status !== 'normal') score += 25;

    return Math.min(100, score);
  }

  /**
   * Calculate priority for an allergy
   */
  private calculateAllergyPriority(allergy: PatientAllergy): EducationalPriority {
    if (allergy.severity === 'anaphylactic') return 'critical';
    if (allergy.severity === 'severe') return 'high';
    if (allergy.severity === 'moderate') return 'moderate';
    return 'low';
  }

  /**
   * Calculate relevance score for an allergy
   */
  private calculateAllergyRelevanceScore(allergy: PatientAllergy): number {
    let score = 40;

    if (allergy.severity === 'anaphylactic') score += 40;
    if (allergy.severity === 'severe') score += 30;
    if (allergy.severity === 'moderate') score += 15;
    if (allergy.verificationStatus === 'confirmed') score += 10;

    return Math.min(100, score);
  }

  /**
   * Calculate overall priority for a region
   */
  private calculateRegionPriority(
    conditions: PatientCondition[],
    medications: PatientMedication[],
    symptoms: PatientSymptom[],
    labs: PatientLabResult[],
    vitals: PatientVital[]
  ): EducationalPriority {
    const priorities: EducationalPriority[] = [];

    conditions.forEach(c => priorities.push(this.calculateConditionPriority(c)));
    medications.forEach(m => priorities.push(this.calculateMedicationPriority(m)));
    symptoms.forEach(s => priorities.push(this.calculateSymptomPriority(s)));
    labs.forEach(l => priorities.push(this.calculateLabPriority(l)));
    vitals.forEach(v => priorities.push(this.calculateVitalPriority(v)));

    if (priorities.includes('critical')) return 'critical';
    if (priorities.includes('high')) return 'high';
    if (priorities.includes('moderate')) return 'moderate';
    if (priorities.includes('low')) return 'low';
    return 'informational';
  }

  /**
   * Calculate overall priority for a system
   */
  private calculateSystemPriority(
    conditions: PatientCondition[],
    medications: PatientMedication[],
    symptoms: PatientSymptom[]
  ): EducationalPriority {
    const priorities: EducationalPriority[] = [];

    conditions.forEach(c => priorities.push(this.calculateConditionPriority(c)));
    medications.forEach(m => priorities.push(this.calculateMedicationPriority(m)));
    symptoms.forEach(s => priorities.push(this.calculateSymptomPriority(s)));

    if (priorities.includes('critical')) return 'critical';
    if (priorities.includes('high')) return 'high';
    if (priorities.includes('moderate')) return 'moderate';
    if (priorities.includes('low')) return 'low';
    return 'informational';
  }

  // ============================================
  // Topic Prioritization
  // ============================================

  /**
   * Prioritize educational topics based on relevance
   */
  private prioritizeTopics(relevance: EducationalRelevance[]): {
    topic: string;
    priority: EducationalPriority;
    relatedItems: string[];
    suggestedComplexity: ContentComplexityLevel;
  }[] {
    const topicMap = new Map<string, {
      priority: EducationalPriority;
      relatedItems: string[];
      scores: number[];
    }>();

    for (const item of relevance) {
      for (const topic of item.learningTopics) {
        if (!topicMap.has(topic)) {
          topicMap.set(topic, {
            priority: item.priority,
            relatedItems: [],
            scores: []
          });
        }
        const existing = topicMap.get(topic)!;
        existing.relatedItems.push(item.itemName);
        existing.scores.push(item.relevanceScore);

        // Update priority if higher
        const priorityOrder: EducationalPriority[] = ['critical', 'high', 'moderate', 'low', 'informational'];
        if (priorityOrder.indexOf(item.priority) < priorityOrder.indexOf(existing.priority)) {
          existing.priority = item.priority;
        }
      }
    }

    const result = Array.from(topicMap.entries()).map(([topic, data]) => {
      const avgScore = data.scores.reduce((a, b) => a + b, 0) / data.scores.length;
      let suggestedComplexity: ContentComplexityLevel;

      if (avgScore > 80) suggestedComplexity = 4;
      else if (avgScore > 60) suggestedComplexity = 3;
      else if (avgScore > 40) suggestedComplexity = 2;
      else suggestedComplexity = 1;

      return {
        topic,
        priority: data.priority,
        relatedItems: Array.from(new Set(data.relatedItems)),
        suggestedComplexity
      };
    });

    // Sort by priority
    const priorityOrder: EducationalPriority[] = ['critical', 'high', 'moderate', 'low', 'informational'];
    return result.sort((a, b) =>
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  }

  // ============================================
  // System Correlations
  // ============================================

  /**
   * Find correlations between body systems
   */
  private findSystemCorrelations(healthData: PatientHealthData): {
    systems: BodySystemId[];
    correlation: string;
    educationalValue: string;
  }[] {
    const correlations: {
      systems: BodySystemId[];
      correlation: string;
      educationalValue: string;
    }[] = [];

    // Check for cardiovascular-renal correlations
    const hasCardioConditions = healthData.conditions.some(
      c => c.affectedSystems.includes('cardiovascular')
    );
    const hasRenalConditions = healthData.conditions.some(
      c => c.affectedSystems.includes('urinary')
    );

    if (hasCardioConditions && hasRenalConditions) {
      correlations.push({
        systems: ['cardiovascular', 'urinary'],
        correlation: 'Cardiorenal syndrome connection',
        educationalValue: 'Understanding how heart and kidney health are interconnected'
      });
    }

    // Check for endocrine-cardiovascular correlations (e.g., diabetes and heart disease)
    const hasEndocrineConditions = healthData.conditions.some(
      c => c.affectedSystems.includes('endocrine')
    );

    if (hasEndocrineConditions && hasCardioConditions) {
      correlations.push({
        systems: ['endocrine', 'cardiovascular'],
        correlation: 'Metabolic-cardiovascular connection',
        educationalValue: 'How metabolic conditions affect heart health'
      });
    }

    // Check for immune-integumentary correlations
    const hasImmuneConditions = healthData.conditions.some(
      c => c.affectedSystems.includes('immune')
    );
    const hasSkinConditions = healthData.conditions.some(
      c => c.affectedSystems.includes('integumentary')
    );

    if (hasImmuneConditions && hasSkinConditions) {
      correlations.push({
        systems: ['immune', 'integumentary'],
        correlation: 'Autoimmune-skin manifestation connection',
        educationalValue: 'How immune dysfunction can manifest in skin conditions'
      });
    }

    return correlations;
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Get anatomical regions for given body systems
   */
  private getRegionsForSystems(systems: BodySystemId[]): string[] {
    const regions: string[] = [];
    const allRegionIds = this.contentService.getAllRegionIds();

    for (const regionId of allRegionIds) {
      const mapping = this.contentService.getRegionMapping(regionId);
      if (mapping && systems.includes(mapping.system)) {
        regions.push(regionId);
      }
    }

    return regions;
  }

  /**
   * Get body systems for given anatomical regions
   */
  private getSystemsForRegions(regionIds: string[]): BodySystemId[] {
    const systems: BodySystemId[] = [];

    for (const regionId of regionIds) {
      const mapping = this.contentService.getRegionMapping(regionId);
      if (mapping && !systems.includes(mapping.system)) {
        systems.push(mapping.system);
      }
    }

    return systems;
  }

  /**
   * Check if region context has relevant patient data
   */
  private hasRelevantData(context: RegionPatientContext): boolean {
    return (
      context.conditions.length > 0 ||
      context.medications.length > 0 ||
      context.symptoms.length > 0 ||
      context.labResults.length > 0 ||
      context.vitals.length > 0 ||
      context.allergies.length > 0
    );
  }

  /**
   * Build personalized content based on patient context
   */
  private buildPersonalizedContent(
    patientContext: RegionPatientContext | null,
    relevantConditions: ConditionContent[]
  ): {
    relevantConditions: ConditionContent[];
    relevantMedications: string[];
    relevantSymptoms: string[];
    relevantLabs: string[];
  } {
    if (!patientContext) {
      return {
        relevantConditions,
        relevantMedications: [],
        relevantSymptoms: [],
        relevantLabs: []
      };
    }

    // Filter conditions based on patient's actual conditions
    const patientConditionIds = patientContext.conditions.map(c => c.conditionId);
    const filteredConditions = relevantConditions.filter(
      c => patientConditionIds.some(id => c.id.includes(id) || id.includes(c.id))
    );

    return {
      relevantConditions: filteredConditions.length > 0 ? filteredConditions : relevantConditions,
      relevantMedications: patientContext.medications.map(m => m.genericName),
      relevantSymptoms: patientContext.symptoms.map(s => s.name),
      relevantLabs: patientContext.labResults.map(l => l.testName)
    };
  }

  /**
   * Generate learning suggestions based on patient context
   */
  private generateLearningSuggestions(
    patientContext: RegionPatientContext | null,
    relevantConditions: ConditionContent[],
    complexityLevel: ContentComplexityLevel
  ): {
    topic: string;
    reason: string;
    priority: EducationalPriority;
  }[] {
    const suggestions: {
      topic: string;
      reason: string;
      priority: EducationalPriority;
    }[] = [];

    if (patientContext) {
      // Suggest learning about active conditions
      for (const condition of patientContext.conditions) {
        suggestions.push({
          topic: `Understanding ${condition.name}`,
          reason: `You have been diagnosed with ${condition.name}`,
          priority: this.calculateConditionPriority(condition)
        });
      }

      // Suggest learning about medications
      for (const medication of patientContext.medications) {
        if (medication.status === 'active') {
          suggestions.push({
            topic: `How ${medication.genericName} works`,
            reason: `You are currently taking this medication`,
            priority: 'moderate'
          });
        }
      }

      // Suggest learning about concerning symptoms
      for (const symptom of patientContext.symptoms) {
        if (symptom.severity >= 5) {
          suggestions.push({
            topic: `Understanding ${symptom.name}`,
            reason: `You are experiencing this symptom`,
            priority: this.calculateSymptomPriority(symptom)
          });
        }
      }

      // Suggest learning about abnormal labs
      for (const lab of patientContext.labResults) {
        if (lab.status !== 'normal') {
          suggestions.push({
            topic: `What ${lab.testName} results mean`,
            reason: `Your recent ${lab.testName} result was ${lab.status}`,
            priority: this.calculateLabPriority(lab)
          });
        }
      }
    }

    // Add general suggestions based on region conditions
    for (const condition of relevantConditions.slice(0, 3)) {
      if (!suggestions.some(s => s.topic.includes(condition.name))) {
        suggestions.push({
          topic: `About ${condition.name}`,
          reason: `Common condition affecting this region`,
          priority: 'informational'
        });
      }
    }

    // Sort by priority
    const priorityOrder: EducationalPriority[] = ['critical', 'high', 'moderate', 'low', 'informational'];
    return suggestions.sort((a, b) =>
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  }

  /**
   * Get clinical correlations for a region
   */
  private getClinicallCorrelationsForRegion(
    regionId: string,
    patientContext: RegionPatientContext | null,
    relevantConditions: ConditionContent[]
  ): string[] {
    const correlations: string[] = [];

    if (patientContext) {
      // Correlations from conditions
      for (const condition of patientContext.conditions) {
        correlations.push(
          `${condition.name} (${condition.status}, ${condition.severity} severity)`
        );
      }

      // Correlations from medications
      for (const medication of patientContext.medications.filter(m => m.status === 'active')) {
        correlations.push(
          `Taking ${medication.genericName} for ${medication.indication}`
        );
      }

      // Correlations from symptoms
      for (const symptom of patientContext.symptoms.filter(s => s.status === 'active')) {
        correlations.push(
          `Experiencing ${symptom.name} (severity ${symptom.severity}/10)`
        );
      }

      // Correlations from labs
      for (const lab of patientContext.labResults.filter(l => l.status !== 'normal')) {
        correlations.push(
          `${lab.testName}: ${lab.value} ${lab.unit} (${lab.status})`
        );
      }
    }

    return correlations;
  }

  /**
   * Return empty educational context
   */
  private getEmptyEducationalContext(
    regionId: string,
    complexityLevel: ContentComplexityLevel
  ): RegionEducationalContext {
    return {
      regionId,
      regionName: 'Unknown Region',
      complexityLevel,
      patientContext: null,
      generalContent: {
        physiology: [],
        anatomy: [],
        pathology: [],
        clinical: []
      },
      personalizedContent: {
        relevantConditions: [],
        relevantMedications: [],
        relevantSymptoms: [],
        relevantLabs: []
      },
      learningSuggestions: [],
      clinicalCorrelations: []
    };
  }

  /**
   * Clear patient data cache
   */
  public clearCache(): void {
    this.patientDataCache.clear();
  }

  /**
   * Get cached patient context
   */
  public getCachedContext(patientId: string): UnifiedPatientContext | undefined {
    return this.patientDataCache.get(patientId);
  }
}

// ============================================
// Export singleton instance and convenience functions
// ============================================

export const patientContextService = PatientContextService.getInstance();

/**
 * Convenience function to build unified patient context
 */
export function buildPatientContext(healthData: PatientHealthData): UnifiedPatientContext {
  return patientContextService.buildUnifiedContext(healthData);
}

/**
 * Convenience function to get conditions for a region
 */
export function getConditionsForRegion(regionId: string): PatientCondition[] {
  return patientContextService.getConditionsForRegion(regionId);
}

/**
 * Convenience function to get medications affecting a region
 */
export function getMedicationsAffectingRegion(regionId: string): PatientMedication[] {
  return patientContextService.getMedicationsAffectingRegion(regionId);
}

/**
 * Convenience function to get symptoms in a region
 */
export function getSymptomsInRegion(regionId: string): PatientSymptom[] {
  return patientContextService.getSymptomsInRegion(regionId);
}

/**
 * Convenience function to get labs relevant to a region
 */
export function getLabsRelevantToRegion(regionId: string): PatientLabResult[] {
  return patientContextService.getLabsRelevantToRegion(regionId);
}

/**
 * Convenience function to build educational context for a region
 */
export async function buildEducationalContext(
  regionId: string,
  complexityLevel: ContentComplexityLevel
): Promise<RegionEducationalContext> {
  return patientContextService.buildEducationalContext(regionId, complexityLevel);
}

export default PatientContextService;
