/**
 * Educational Module Type System
 *
 * Defines the structure for all educational content in Biological Self.
 * Supports 6 complexity levels matching physician training stages.
 */
export type ComplexityLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface ComplexityMetadata {
    level: ComplexityLevel;
    name: string;
    readingLevel: string;
    description: string;
    targetAudience: string;
}
export declare const COMPLEXITY_LEVELS: Record<ComplexityLevel, ComplexityMetadata>;
export type ModuleType = 'foundation' | 'clinical-application' | 'specialty' | 'subspecialty' | 'concept' | 'procedure' | 'medication' | 'lifestyle';
export type MedicalSpecialty = 'cardiology' | 'endocrinology' | 'gastroenterology' | 'neurology' | 'rheumatology' | 'pulmonology' | 'nephrology' | 'hematology' | 'infectious-disease' | 'oncology' | 'psychiatry' | 'dermatology' | 'ophthalmology' | 'ent' | 'orthopedics' | 'obgyn' | 'urology' | 'allergy-immunology' | 'sports-medicine' | 'physical-medicine' | 'emergency-medicine' | 'critical-care' | 'anesthesiology' | 'pathology' | 'radiology' | 'general-practice';
export interface EducationalModule {
    id: string;
    type: ModuleType;
    specialty?: MedicalSpecialty;
    title: string;
    description: string;
    version: string;
    lastUpdated: string;
    author: string;
    prerequisites: string[];
    learningObjectives: string[];
    estimatedTime: Record<ComplexityLevel, string>;
    content: ModuleContent;
    interactions?: ModuleInteractions;
    quiz?: Quiz;
    references?: Reference[];
    resources?: ExternalResource[];
}
export interface ModuleContent {
    1: FoundationContent;
    2: DevelopingContent;
    3: StandardContent;
    4: AdvancedContent;
    5: ExpertContent;
    6: ClinicalContent;
}
export interface FoundationContent {
    summary: string;
    analogy?: string;
    keyPoints: string[];
    visualAid?: string;
    story?: string;
}
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
export interface ModuleInteractions {
    personalizedExample?: (userData: unknown) => string | null;
    anatomyPoints?: AnatomyPoint[];
    relatedLabs?: string[];
    relatedMedications?: string[];
    relatedConditions?: string[];
    visualizations?: Visualization[];
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
export interface LearningProgress {
    userId: string;
    moduleId: string;
    complexityLevel: ComplexityLevel;
    status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
    startedAt?: Date;
    completedAt?: Date;
    quizResults?: QuizResult[];
    quizScore?: number;
    timeSpent: number;
    revisitCount: number;
    confidenceRating?: number;
}
export interface MasteryRecord {
    conceptId: string;
    userId: string;
    moduleId: string;
    masteryLevel: 'novice' | 'developing' | 'proficient' | 'expert';
    demonstratedAt: Date;
    evidence: string[];
}
export type AnalogyCategory = 'mechanical' | 'electrical' | 'plumbing' | 'transportation' | 'kitchen' | 'nature' | 'sports' | 'technology';
export interface Analogy {
    id: string;
    concept: string;
    category: AnalogyCategory;
    analogy: string;
    explanation: string;
    whenToUse: string;
    limitations: string;
}
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
//# sourceMappingURL=types.d.ts.map