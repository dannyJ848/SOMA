/**
 * Test Data Factories
 *
 * Factory functions to create test data with sensible defaults.
 * Use these to create consistent test data across tests.
 */

import type {
  AIMessage,
  AIResponse,
  Citation,
  StructureContext,
  HistologyContext,
  ConditionContext,
  DashboardData,
  QuizQuestion,
  AIQuiz,
} from '../../src/ai/types';

// ============================================================================
// Counter for unique IDs
// ============================================================================

let idCounter = 0;

function uniqueId(prefix = 'test'): string {
  return `${prefix}-${++idCounter}`;
}

export function resetIdCounter(): void {
  idCounter = 0;
}

// ============================================================================
// AI Message Factories
// ============================================================================

export function createAIMessage(overrides: Partial<AIMessage> = {}): AIMessage {
  return {
    role: 'user',
    content: 'Test message content',
    timestamp: Date.now(),
    ...overrides,
  };
}

export function createAIResponse(overrides: Partial<AIResponse> = {}): AIResponse {
  return {
    content: 'This is a test response from the AI.',
    model: 'test-model',
    done: true,
    citations: [],
    ...overrides,
  };
}

export function createCitation(overrides: Partial<Citation> = {}): Citation {
  return {
    index: 1,
    source: 'Test Medical Reference',
    type: 'textbook',
    ...overrides,
  };
}

// ============================================================================
// Structure Context Factories
// ============================================================================

export function createStructureContext(overrides: Partial<StructureContext> = {}): StructureContext {
  const id = overrides.structureId || uniqueId('structure');
  return {
    structureId: id,
    structureName: 'Heart',
    system: 'Cardiovascular',
    latinName: 'Cor',
    location: 'Thoracic cavity, mediastinum',
    relatedStructures: ['Aorta', 'Pulmonary Artery', 'Vena Cava'],
    ...overrides,
  };
}

export function createHistologyContext(overrides: Partial<HistologyContext> = {}): HistologyContext {
  return {
    slideId: overrides.slideId || uniqueId('slide'),
    tissueName: 'Cardiac Muscle',
    stain: 'H&E',
    magnification: '400x',
    organSource: 'Heart',
    keyFeatures: ['Intercalated discs', 'Branching fibers', 'Central nuclei'],
    ...overrides,
  };
}

export function createConditionContext(overrides: Partial<ConditionContext> = {}): ConditionContext {
  return {
    conditionId: overrides.conditionId || uniqueId('condition'),
    conditionName: 'Hypertension',
    category: 'Cardiovascular',
    severity: 'moderate',
    userHasCondition: false,
    ...overrides,
  };
}

// ============================================================================
// Dashboard Data Factories
// ============================================================================

export interface ConditionData {
  id?: string;
  name: string;
  status: string;
  severity?: string;
  diagnosedDate?: string;
}

export interface MedicationData {
  id?: string;
  name: string;
  dosage?: string;
  frequency?: string;
}

export interface LabData {
  id?: string;
  testName: string;
  value: number | string;
  unit?: string;
  status?: string;
  trend?: 'up' | 'down' | 'stable';
  collectedAt?: string;
}

export interface SymptomData {
  id?: string;
  description: string;
  severity: number;
  location?: string;
  onsetDate?: string;
}

export function createCondition(overrides: Partial<ConditionData> = {}): ConditionData {
  return {
    id: overrides.id || uniqueId('condition'),
    name: 'Test Condition',
    status: 'active',
    ...overrides,
  };
}

export function createMedication(overrides: Partial<MedicationData> = {}): MedicationData {
  return {
    id: overrides.id || uniqueId('medication'),
    name: 'Test Medication',
    dosage: '10mg',
    frequency: 'once daily',
    ...overrides,
  };
}

export function createLabResult(overrides: Partial<LabData> = {}): LabData {
  return {
    id: overrides.id || uniqueId('lab'),
    testName: 'Test Panel',
    value: 100,
    unit: 'mg/dL',
    status: 'normal',
    trend: 'stable',
    collectedAt: new Date().toISOString(),
    ...overrides,
  };
}

export function createSymptom(overrides: Partial<SymptomData> = {}): SymptomData {
  return {
    id: overrides.id || uniqueId('symptom'),
    description: 'Test symptom',
    severity: 5,
    location: 'head',
    onsetDate: new Date().toISOString(),
    ...overrides,
  };
}

export function createDashboardData(overrides: Partial<DashboardData> = {}): DashboardData {
  return {
    summary: {
      totalConditions: 2,
      totalMedications: 3,
      totalLabResults: 10,
      ...overrides.summary,
    },
    activeConditions: overrides.activeConditions || [
      { name: 'Hypertension', status: 'controlled' },
      { name: 'Type 2 Diabetes', status: 'active', severity: 'moderate' },
    ],
    currentMedications: overrides.currentMedications || [
      { name: 'Metformin', dosage: '500mg', frequency: 'twice daily' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'once daily' },
    ],
    recentLabs: overrides.recentLabs || [
      { testName: 'HbA1c', value: 6.8, unit: '%', status: 'borderline', trend: 'down' },
      { testName: 'LDL', value: 110, unit: 'mg/dL', status: 'normal', trend: 'stable' },
    ],
    recentSymptoms: overrides.recentSymptoms || [
      { description: 'Mild headache', severity: 3, location: 'head' },
    ],
    vitalsSummary: overrides.vitalsSummary || {
      restingHeartRate: 68,
      hrv: 45,
      sleepHours: 7.2,
      recoveryScore: 72,
    },
  };
}

// ============================================================================
// Quiz Factories
// ============================================================================

export function createQuizQuestion(overrides: Partial<QuizQuestion> = {}): QuizQuestion {
  return {
    id: overrides.id || uniqueId('question'),
    type: 'multiple_choice',
    question: 'What is the primary function of the heart?',
    options: ['Pump blood', 'Filter blood', 'Store blood', 'Produce blood cells'],
    correctAnswer: 0,
    explanation: 'The heart is a muscular organ that pumps blood throughout the body.',
    difficulty: 'easy',
    topic: 'Cardiovascular System',
    ...overrides,
  };
}

export function createQuiz(overrides: Partial<AIQuiz> = {}): AIQuiz {
  return {
    id: overrides.id || uniqueId('quiz'),
    topic: 'Cardiovascular System',
    questions: overrides.questions || [
      createQuizQuestion(),
      createQuizQuestion({ id: uniqueId('question'), difficulty: 'medium' }),
      createQuizQuestion({ id: uniqueId('question'), difficulty: 'hard' }),
    ],
    generatedAt: Date.now(),
    estimatedTime: 150,
    difficulty: 'medium',
    ...overrides,
  };
}

// ============================================================================
// Anatomy Data Factories
// ============================================================================

export interface AnatomyStructure {
  id: string;
  name: string;
  system: string;
  latinName?: string;
  location?: string;
  functions?: string[];
  commonConditions?: string[];
  relatedStructures?: string[];
}

export function createAnatomyStructure(overrides: Partial<AnatomyStructure> = {}): AnatomyStructure {
  const id = overrides.id || uniqueId('anatomy');
  return {
    id,
    name: 'Heart',
    system: 'Cardiovascular',
    latinName: 'Cor',
    location: 'Thoracic cavity, mediastinum',
    functions: ['Pumps blood', 'Maintains blood pressure', 'Regulates blood flow'],
    commonConditions: ['Heart disease', 'Arrhythmia', 'Heart failure'],
    relatedStructures: ['Aorta', 'Pulmonary Artery', 'Coronary Arteries'],
    ...overrides,
  };
}

// ============================================================================
// Timeline Event Factories
// ============================================================================

export type TimelineEventType = 'lab' | 'imaging' | 'condition' | 'medication' | 'surgery' | 'symptom';

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: string;
  title: string;
  subtitle?: string;
  details?: Record<string, unknown>;
}

export function createTimelineEvent(overrides: Partial<TimelineEvent> = {}): TimelineEvent {
  return {
    id: overrides.id || uniqueId('event'),
    type: 'lab',
    date: new Date().toISOString(),
    title: 'Blood Panel',
    subtitle: 'Routine checkup',
    details: {},
    ...overrides,
  };
}

// ============================================================================
// User Data Factories
// ============================================================================

export interface UserDemographics {
  age?: number;
  sex?: 'male' | 'female' | 'other';
  height?: number;
  weight?: number;
  ethnicity?: string;
}

export function createUserDemographics(overrides: Partial<UserDemographics> = {}): UserDemographics {
  return {
    age: 45,
    sex: 'male',
    height: 180,
    weight: 82,
    ...overrides,
  };
}

// ============================================================================
// Batch Creators
// ============================================================================

export function createConditions(count: number, baseOverrides: Partial<ConditionData> = {}): ConditionData[] {
  return Array.from({ length: count }, (_, i) =>
    createCondition({
      ...baseOverrides,
      name: `Condition ${i + 1}`,
    })
  );
}

export function createMedications(count: number, baseOverrides: Partial<MedicationData> = {}): MedicationData[] {
  return Array.from({ length: count }, (_, i) =>
    createMedication({
      ...baseOverrides,
      name: `Medication ${i + 1}`,
    })
  );
}

export function createLabResults(count: number, baseOverrides: Partial<LabData> = {}): LabData[] {
  return Array.from({ length: count }, (_, i) =>
    createLabResult({
      ...baseOverrides,
      testName: `Lab Test ${i + 1}`,
    })
  );
}

export function createQuizQuestions(count: number, topic: string): QuizQuestion[] {
  return Array.from({ length: count }, (_, i) =>
    createQuizQuestion({
      question: `Question ${i + 1} about ${topic}`,
      topic,
      difficulty: i < count / 3 ? 'easy' : i < (2 * count) / 3 ? 'medium' : 'hard',
    })
  );
}
