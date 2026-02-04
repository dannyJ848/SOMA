/**
 * Educational Module Type System
 * 
 * Defines the structure for all educational content in Biological Self.
 * Supports 6 complexity levels matching physician training stages.
 */

// ============================================================================
// Core Types
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ComplexityMetadata {
  level: ComplexityLevel;
  name: string;
  readingLevel: string;
  description: string;
  targetAudience: string;
}

export const COMPLEXITY_LEVELS: Record<ComplexityLevel, ComplexityMetadata> = {
  1: {
    level: 1,
    name: 'Foundation',
    readingLevel: '8th grade',
    description: 'Simple words, analogies, everyday experiences',
    targetAudience: 'General public, no medical background',
  },
  2: {
    level: 2,
    name: 'Developing',
    readingLevel: '10th grade',
    description: 'Basic terms introduced with definitions',
    targetAudience: 'Some high school biology',
  },
  3: {
    level: 3,
    name: 'Standard',
    readingLevel: '12th grade',
    description: 'Standard medical terminology',
    targetAudience: 'High school biology completed',
  },
  4: {
    level: 4,
    name: 'Advanced',
    readingLevel: 'College',
    description: 'Biochemistry, pathways, mechanisms',
    targetAudience: 'College-level biology/chemistry',
  },
  5: {
    level: 5,
    name: 'Expert',
    readingLevel: 'Graduate',
    description: 'Research depth, statistical nuance',
    targetAudience: 'Graduate-level understanding',
  },
  6: {
    level: 6,
    name: 'Clinical',
    readingLevel: 'Physician',
    description: 'Full clinical reasoning, differentials',
    targetAudience: 'Medical professionals',
  },
};

// ============================================================================
// Educational Module Types
// ============================================================================

export type ModuleType = 
  | 'foundation' 
  | 'clinical-application' 
  | 'specialty' 
  | 'subspecialty' 
  | 'concept' 
  | 'procedure' 
  | 'medication'
  | 'lifestyle';

export type MedicalSpecialty =
  | 'cardiology'
  | 'endocrinology'
  | 'gastroenterology'
  | 'neurology'
  | 'rheumatology'
  | 'pulmonology'
  | 'nephrology'
  | 'hematology'
  | 'infectious-disease'
  | 'oncology'
  | 'psychiatry'
  | 'dermatology'
  | 'ophthalmology'
  | 'ent'
  | 'orthopedics'
  | 'obgyn'
  | 'urology'
  | 'allergy-immunology'
  | 'sports-medicine'
  | 'physical-medicine'
  | 'emergency-medicine'
  | 'critical-care'
  | 'anesthesiology'
  | 'pathology'
  | 'radiology'
  | 'general-practice';

export interface EducationalModule {
  id: string;
  type: ModuleType;
  specialty?: MedicalSpecialty;
  
  // Metadata
  title: string;
  description: string;
  version: string;
  lastUpdated: string;
  author: string;
  
  // Learning structure
  prerequisites: string[];
  learningObjectives: string[];
  estimatedTime: Record<ComplexityLevel, string>;
  
  // Content by complexity level
  content: ModuleContent;
  
  // Interactive elements
  interactions?: ModuleInteractions;
  
  // Assessment
  quiz?: Quiz;
  
  // Resources
  references?: Reference[];
  resources?: ExternalResource[];
}

// ============================================================================
// Content Types by Complexity
// ============================================================================

export interface ModuleContent {
  1: FoundationContent;
  2: DevelopingContent;
  3: StandardContent;
  4: AdvancedContent;
  5: ExpertContent;
  6: ClinicalContent;
}

// Level 1: Foundation
export interface FoundationContent {
  summary: string;
  analogy?: string;
  keyPoints: string[];
  visualAid?: string;
  story?: string;
}

// Level 2: Developing
export interface DevelopingContent {
  summary: string;
  keyConcepts: KeyConcept[];
  keyPoints: string[];
  howItWorks?: string;
}

export interface KeyConcept {
  term: string;
  explanation: string;
}

// Level 3: Standard
export interface StandardContent {
  summary: string;
  mechanisms: Mechanism[];
  clinicalCorrelates: string[];
  normalVsAbnormal?: Comparison;
}

export interface Mechanism {
  name: string;
  description: string;
}

export interface Comparison {
  normal: string;
  abnormal: string;
  whyItMatters: string;
}

// Level 4: Advanced
export interface AdvancedContent {
  summary: string;
  molecularMechanisms: MolecularMechanism[];
  pathways: Pathway[];
  references: string[];
}

export interface MolecularMechanism {
  pathway: string;
  defect: string;
  consequence: string;
}

export interface Pathway {
  name: string;
  steps: string[];
  regulation: string;
}

// Level 5: Expert
export interface ExpertContent {
  summary: string;
  researchFrontiers: string[];
  controversies?: Controversy[];
  statisticalContext?: string;
  references: string[];
}

export interface Controversy {
  topic: string;
  perspectives: string[];
}

// Level 6: Clinical
export interface ClinicalContent {
  summary: string;
  clinicalApproach: string[];
  differentialConsiderations?: string[];
  guidelines: string[];
  caseExamples?: ClinicalCase[];
  references: string[];
}

export interface ClinicalCase {
  presentation: string;
  keyFindings: string[];
  teachingPoints: string[];
}

// ============================================================================
// Interactive Elements
// ============================================================================

export interface ModuleInteractions {
  // Connect to user's data
  personalizedExample?: (userData: unknown) => string | null;
  
  // 3D anatomy connections
  anatomyPoints?: AnatomyPoint[];
  
  // Related lab tests
  relatedLabs?: string[];
  
  // Related medications
  relatedMedications?: string[];
  
  // Related conditions
  relatedConditions?: string[];
  
  // Visualizations
  visualizations?: Visualization[];
  
  // Calculators
  calculators?: Calculator[];
}

export interface AnatomyPoint {
  structure: string;
  focus?: string;
  description: string;
}

export interface Visualization {
  type: 'diagram' | 'animation' | 'graph' | '3d-model';
  id: string;
  caption: string;
}

export interface Calculator {
  name: string;
  inputs: CalculatorInput[];
  formula: string;
  interpretation: string;
}

export interface CalculatorInput {
  name: string;
  unit?: string;
  type: 'number' | 'select';
  options?: string[];
}

// ============================================================================
// Assessment Types
// ============================================================================

export interface Quiz {
  title?: string;
  questions: Question[];
  passingScore?: number;
}

export type QuestionType = 'multiple-choice' | 'true-false' | 'fill-in-blank' | 'matching' | 'case-study';

export interface Question {
  id: string;
  type: QuestionType;
  complexity: ComplexityLevel;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  hint?: string;
}

export interface QuizResult {
  questionId: string;
  correct: boolean;
  userAnswer: string | number;
  timeSpent: number;
}

// ============================================================================
// Resource Types
// ============================================================================

export interface Reference {
  citation: string;
  pmid?: string;
  doi?: string;
  url?: string;
}

export interface ExternalResource {
  title: string;
  type: 'video' | 'article' | 'podcast' | 'book' | 'website';
  url: string;
  description: string;
}

// ============================================================================
// Learning Path Types
// ============================================================================

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  targetAudience: 'patient' | 'caregiver' | 'student' | 'provider';
  modules: PathModule[];
  estimatedTotalTime: string;
  prerequisites: string[];
  outcomes: string[];
}

export interface PathModule {
  moduleId: string;
  order: number;
  required: boolean;
  estimatedTime: string;
}

// ============================================================================
// User Progress Types
// ============================================================================

export interface LearningProgress {
  userId: string;
  moduleId: string;
  complexityLevel: ComplexityLevel;
  status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
  startedAt?: Date;
  completedAt?: Date;
  quizResults?: QuizResult[];
  quizScore?: number;
  timeSpent: number; // minutes
  revisitCount: number;
  confidenceRating?: number; // 1-5
}

export interface MasteryRecord {
  conceptId: string;
  userId: string;
  moduleId: string;
  masteryLevel: 'novice' | 'developing' | 'proficient' | 'expert';
  demonstratedAt: Date;
  evidence: string[]; // Quiz IDs, question IDs
}

// ============================================================================
// Analogy Library Types
// ============================================================================

export type AnalogyCategory = 
  | 'mechanical' 
  | 'electrical' 
  | 'plumbing' 
  | 'transportation' 
  | 'kitchen' 
  | 'nature' 
  | 'sports' 
  | 'technology';

export interface Analogy {
  id: string;
  concept: string;
  category: AnalogyCategory;
  analogy: string;
  explanation: string;
  whenToUse: string;
  limitations: string;
}

// ============================================================================
// Teaching Strategy Types
// ============================================================================

export interface TeachingStrategy {
  id: string;
  name: string;
  description: string;
  whenToUse: (userProfile: UserLearningProfile) => boolean;
  execute: (content: unknown, context: TeachingContext) => unknown;
}

export interface UserLearningProfile {
  preferredComplexity: ComplexityLevel;
  learningStyle: 'visual' | 'auditory' | 'reading' | 'kinesthetic';
  priorKnowledge: string[];
  struggledConcepts: string[];
  masteredConcepts: string[];
  timeAvailable: 'brief' | 'moderate' | 'extended';
}

export interface TeachingContext {
  userQuestion?: string;
  currentSymptoms?: string[];
  currentConditions?: string[];
  recentLabs?: string[];
  urgency: 'exploratory' | 'concerned' | 'urgent';
}
