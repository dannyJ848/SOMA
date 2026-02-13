/**
 * Pediatric Health Type Definitions
 *
 * Comprehensive types for pediatric growth, development, conditions,
 * immunizations, emergencies, and well-child care at 5 complexity levels.
 */

/**
 * Age categories for pediatrics
 */
export type AgeCategory =
  | 'newborn'        // 0-28 days
  | 'infant'         // 1-12 months
  | 'toddler'        // 1-3 years
  | 'preschool'      // 3-5 years
  | 'school-age'     // 6-12 years
  | 'adolescent';    // 13-18 years

/**
 * Age range specification
 */
export interface AgeRange {
  minMonths: number;
  maxMonths: number;
  label: string;
}

/**
 * Multi-level educational content
 */
export interface PediatricContent {
  level1: string;  // Parent-friendly, simple explanations
  level2: string;  // Educated parent, more detail
  level3: string;  // Medical student level
  level4: string;  // Resident/advanced level
  level5: string;  // Specialist/research level
}

/**
 * Developmental domain categories
 */
export type DevelopmentalDomain =
  | 'gross-motor'
  | 'fine-motor'
  | 'cognitive'
  | 'language'
  | 'social-emotional'
  | 'adaptive';

/**
 * Developmental milestone
 */
export interface DevelopmentalMilestone {
  id: string;
  domain: DevelopmentalDomain;
  ageMonths: number;
  ageTolerance: number;  // +/- months for normal variation
  skill: string;
  description: string;
  redFlags: string[];
  explanations: PediatricContent;
  assessmentTips: string[];
  supportStrategies: string[];
}

/**
 * Growth parameter types
 */
export type GrowthParameter =
  | 'weight'
  | 'length-height'
  | 'head-circumference'
  | 'bmi'
  | 'weight-for-length';

/**
 * Growth chart data point
 */
export interface GrowthDataPoint {
  ageMonths: number;
  percentile3: number;
  percentile5: number;
  percentile10: number;
  percentile25: number;
  percentile50: number;
  percentile75: number;
  percentile90: number;
  percentile95: number;
  percentile97: number;
}

/**
 * Growth chart interpretation
 */
export interface GrowthChartInfo {
  id: string;
  parameter: GrowthParameter;
  sex: 'male' | 'female' | 'both';
  ageRange: AgeRange;
  source: string;  // CDC, WHO, etc.
  interpretationGuidelines: string[];
  explanations: PediatricContent;
  concernThresholds: {
    condition: string;
    criteria: string;
    action: string;
  }[];
}

/**
 * Puberty stages (Tanner staging)
 */
export interface TannerStage {
  stage: 1 | 2 | 3 | 4 | 5;
  sex: 'male' | 'female';
  category: 'breast' | 'pubic-hair' | 'genital' | 'testicular-volume';
  description: string;
  typicalAge: { min: number; max: number };
  explanations: PediatricContent;
}

/**
 * Developmental screening tool
 */
export interface ScreeningTool {
  id: string;
  name: string;
  abbreviation: string;
  targetAges: AgeRange[];
  domains: DevelopmentalDomain[];
  administrationTime: string;
  sensitivity: number;
  specificity: number;
  description: string;
  explanations: PediatricContent;
  whenToUse: string[];
  limitations: string[];
}

// ============================================
// PEDIATRIC CONDITIONS
// ============================================

/**
 * Severity levels for conditions
 */
export type Severity = 'mild' | 'moderate' | 'severe' | 'critical';

/**
 * Urgency levels
 */
export type Urgency = 'routine' | 'urgent' | 'emergent';

/**
 * Pediatric condition category
 */
export type ConditionCategory =
  | 'infectious'
  | 'respiratory'
  | 'gastrointestinal'
  | 'dermatologic'
  | 'neurologic'
  | 'developmental'
  | 'allergic'
  | 'metabolic'
  | 'neonatal';

/**
 * Treatment approach
 */
export interface Treatment {
  name: string;
  type: 'supportive' | 'pharmacologic' | 'procedural' | 'preventive';
  description: string;
  dosing?: string;
  duration?: string;
  precautions?: string[];
  contraindications?: string[];
}

/**
 * Pediatric condition
 */
export interface PediatricCondition {
  id: string;
  name: string;
  icdCode?: string;
  category: ConditionCategory;
  ageGroups: AgeCategory[];

  // Clinical presentation
  symptoms: string[];
  signs: string[];
  typicalCourse: string;
  duration?: string;

  // Assessment
  differentialDiagnosis: string[];
  diagnosticCriteria?: string[];
  labsImaging?: string[];

  // Management
  treatments: Treatment[];
  homeManagement: string[];
  whenToSeekCare: string[];
  emergencyWarnings: string[];

  // Prevention
  prevention?: string[];

  // Education
  explanations: PediatricContent;
  parentGuidance: string[];
  commonMisconceptions?: string[];
  prognosis: string;

  // References
  keyFacts: string[];
  clinicalPearls?: string[];
}

// ============================================
// IMMUNIZATIONS
// ============================================

/**
 * Vaccine types
 */
export type VaccineType =
  | 'live-attenuated'
  | 'inactivated'
  | 'subunit'
  | 'conjugate'
  | 'mRNA'
  | 'toxoid'
  | 'viral-vector';

/**
 * Vaccine dose in schedule
 */
export interface VaccineDose {
  doseNumber: number;
  recommendedAge: string;
  minimumAge?: string;
  minimumInterval?: string;
  catchUpGuidance?: string;
}

/**
 * Vaccine information
 */
export interface Vaccine {
  id: string;
  name: string;
  abbreviation: string;
  tradenames: string[];
  type: VaccineType;
  diseasesProtected: string[];

  // Schedule
  routineDoses: VaccineDose[];
  boosterDoses?: VaccineDose[];

  // Administration
  route: 'intramuscular' | 'subcutaneous' | 'oral' | 'intranasal';
  site: string;
  dosage: string;

  // Safety
  commonReactions: string[];
  seriousReactions?: string[];
  contraindications: string[];
  precautions: string[];

  // Education
  explanations: PediatricContent;
  parentConcerns: {
    concern: string;
    response: string;
  }[];

  keyFacts: string[];
  effectiveness?: string;
}

/**
 * Immunization schedule by age
 */
export interface ImmunizationSchedule {
  ageLabel: string;
  ageMonths: number;
  vaccines: string[];  // Vaccine IDs
  notes?: string[];
}

/**
 * Catch-up schedule entry
 */
export interface CatchUpSchedule {
  vaccineId: string;
  ageStartCatchUp: string;
  minimumIntervals: string[];
  notes: string[];
}

// ============================================
// PEDIATRIC EMERGENCIES
// ============================================

/**
 * Emergency type
 */
export type EmergencyType =
  | 'respiratory'
  | 'neurologic'
  | 'cardiac'
  | 'trauma'
  | 'toxicologic'
  | 'metabolic'
  | 'infectious';

/**
 * Pediatric emergency
 */
export interface PediatricEmergency {
  id: string;
  name: string;
  type: EmergencyType;
  ageGroups: AgeCategory[];

  // Recognition
  presentingSigns: string[];
  redFlags: string[];
  triageLevel: 1 | 2 | 3 | 4 | 5;  // ESI levels

  // Initial management
  immediateActions: string[];
  stabilization: string[];
  whenToCall911: string[];

  // Education
  explanations: PediatricContent;
  parentActions: string[];
  preventionStrategies?: string[];

  keyFacts: string[];
}

/**
 * Choking response by age
 */
export interface ChokingResponse {
  ageGroup: 'infant' | 'child' | 'adolescent';
  consciousResponse: string[];
  unconsciousResponse: string[];
  preventionTips: string[];
  explanations: PediatricContent;
}

/**
 * Dehydration assessment
 */
export interface DehydrationAssessment {
  severity: 'mild' | 'moderate' | 'severe';
  percentDehydrated: string;
  signs: string[];
  symptoms: string[];
  treatment: string[];
  fluidReplacement: string;
  explanations: PediatricContent;
}

// ============================================
// WELL-CHILD CARE
// ============================================

/**
 * Well-child visit content
 */
export interface WellChildVisit {
  ageLabel: string;
  ageMonths: number;

  // Screening
  screenings: string[];
  labTests?: string[];

  // Assessment
  developmentalMilestones: string[];  // Milestone IDs to check
  growthAssessment: GrowthParameter[];

  // Immunizations
  vaccines: string[];  // Vaccine IDs due

  // Anticipatory guidance
  nutrition: string[];
  sleep: string[];
  safety: string[];
  development: string[];

  // Education
  explanations: PediatricContent;
  parentQuestions: string[];
}

/**
 * Newborn care topic
 */
export interface NewbornCareTopic {
  id: string;
  name: string;
  category: 'feeding' | 'sleep' | 'hygiene' | 'health' | 'bonding';
  guidance: string[];
  warningsSigns: string[];
  explanations: PediatricContent;
  commonQuestions: {
    question: string;
    answer: string;
  }[];
}

/**
 * Feeding information
 */
export interface FeedingInfo {
  type: 'breastfeeding' | 'formula' | 'combination' | 'solids';
  ageRange: AgeRange;
  guidelines: string[];
  frequency: string;
  amounts?: string;
  tips: string[];
  troubleshooting: {
    problem: string;
    solutions: string[];
  }[];
  explanations: PediatricContent;
}

/**
 * Safety guideline
 */
export interface SafetyGuideline {
  id: string;
  category: 'sleep' | 'car-seat' | 'poison' | 'water' | 'fire' | 'falls' | 'choking';
  ageRange: AgeRange;
  guidelines: string[];
  commonMistakes: string[];
  preventionTips: string[];
  explanations: PediatricContent;
}

/**
 * Screen time recommendation
 */
export interface ScreenTimeGuideline {
  ageRange: AgeRange;
  recommendation: string;
  rationale: string;
  exceptions?: string[];
  qualityContent: string[];
  tips: string[];
  explanations: PediatricContent;
}

// ============================================
// VITAL SIGNS
// ============================================

/**
 * Vital sign type
 */
export type VitalSignType =
  | 'heart-rate'
  | 'respiratory-rate'
  | 'blood-pressure-systolic'
  | 'blood-pressure-diastolic'
  | 'temperature'
  | 'oxygen-saturation';

/**
 * Vital sign range by age
 */
export interface VitalSignRange {
  vitalSign: VitalSignType;
  ageRange: AgeRange;
  normalMin: number;
  normalMax: number;
  unit: string;
  concernLow?: number;
  concernHigh?: number;
  criticalLow?: number;
  criticalHigh?: number;
  notes?: string[];
}

/**
 * Complete vital signs reference
 */
export interface VitalSignsReference {
  ageCategory: AgeCategory;
  ageRange: AgeRange;
  heartRate: { normal: string; concernLow: number; concernHigh: number };
  respiratoryRate: { normal: string; concernLow: number; concernHigh: number };
  bloodPressure: { systolic: string; diastolic: string };
  temperature: { normal: string; fever: number };
  oxygenSaturation: { normal: string; concern: number };
  explanations: PediatricContent;
}

// ============================================
// STATISTICS AND UTILITIES
// ============================================

/**
 * Pediatric module statistics
 */
export interface PediatricStatistics {
  totalMilestones: number;
  totalConditions: number;
  totalVaccines: number;
  totalEmergencies: number;
  totalWellChildVisits: number;
  totalSafetyGuidelines: number;
}
