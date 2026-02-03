/**
 * Mock Tauri Invoke
 *
 * Mocks the Tauri invoke function for testing.
 */

import { vi, type Mock } from 'vitest';

// Default mock responses for different commands
const mockResponses: Record<string, unknown> = {
  check_database_exists: true,
  unlock_database: {
    totalConditions: 2,
    totalMedications: 3,
    totalLabResults: 10,
    totalWhoopCycles: 30,
    totalAppleHealthDays: 90,
    lastUpdated: new Date().toISOString(),
  },
  get_dashboard: {
    summary: {
      totalConditions: 2,
      totalMedications: 3,
      totalLabResults: 10,
      totalWhoopCycles: 30,
      totalAppleHealthDays: 90,
      lastUpdated: new Date().toISOString(),
    },
    activeConditions: [
      { id: '1', name: 'Hypertension', status: 'controlled' },
      { id: '2', name: 'Type 2 Diabetes', status: 'active' },
    ],
    currentMedications: [
      { id: '1', name: 'Metformin', dosage: '500mg', frequency: 'twice daily' },
      { id: '2', name: 'Lisinopril', dosage: '10mg', frequency: 'once daily' },
      { id: '3', name: 'Atorvastatin', dosage: '20mg', frequency: 'once daily' },
    ],
    recentLabs: [
      {
        id: '1',
        testName: 'HbA1c',
        value: 6.8,
        unit: '%',
        status: 'borderline',
        collectedAt: new Date().toISOString(),
        trend: 'down',
      },
      {
        id: '2',
        testName: 'LDL Cholesterol',
        value: 110,
        unit: 'mg/dL',
        status: 'normal',
        collectedAt: new Date().toISOString(),
        trend: 'stable',
      },
    ],
    vitalsSummary: {
      restingHeartRate: 68,
      hrv: 45,
      sleepHours: 7.2,
      recoveryScore: 72,
      steps: 8500,
      lastUpdated: new Date().toISOString(),
    },
    recentSymptoms: [
      {
        id: '1',
        description: 'Mild headache',
        severity: 3,
        location: 'head',
        onsetDate: new Date().toISOString(),
      },
    ],
  },
  get_timeline: {
    events: [
      {
        id: '1',
        type: 'lab',
        date: new Date().toISOString(),
        title: 'Blood Panel',
        subtitle: 'HbA1c: 6.8%',
      },
    ],
    filters: { types: ['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom'] },
    totalCount: 1,
  },
  ai_chat: {
    content: 'This is a mock AI response for testing purposes.',
    model: 'test-model',
    done: true,
    citations: [],
  },
  ai_chat_with_rag: {
    content: 'This is a mock AI response with RAG context.',
    model: 'test-model',
    done: true,
    citations: [
      { index: 1, source: 'Medical Reference', type: 'textbook' },
    ],
    ragContext: {
      chunksUsed: 3,
      totalTokens: 1500,
      processingTimeMs: 250,
    },
  },
  ai_health_check: { available: true, model: 'test-model' },
  search_knowledge_base: {
    results: [
      { id: '1', title: 'Heart Anatomy', snippet: 'The heart is a muscular organ...', score: 0.95 },
    ],
    totalCount: 1,
  },
  get_anatomy_content: {
    id: 'heart',
    name: 'Heart',
    system: 'Cardiovascular',
    description: 'The heart is a muscular organ that pumps blood through the circulatory system.',
    functions: ['Pumps blood', 'Maintains blood pressure'],
    commonConditions: ['Heart disease', 'Arrhythmia'],
  },
  save_symptom: { id: 'symptom-1', success: true },
  get_user_demographics: {
    age: 45,
    sex: 'male',
    height: 180,
    weight: 82,
  },
  save_user_demographics: { success: true },
};

// Type for custom mock function
type MockFunction = (args?: Record<string, unknown>) => unknown;

// Custom mocks storage (module-level to avoid type casting issues)
let customMocks: Record<string, MockFunction> = {};

// Base invoke function type
type InvokeFn = <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>;

// Extended invoke type with custom mocks and helper methods
interface MockInvokeFunction extends Mock<InvokeFn> {
  __customMocks: Record<string, MockFunction>;
  mockCommand: (cmd: string, response: unknown | MockFunction) => void;
  mockCommandOnce: (cmd: string, response: unknown | MockFunction) => void;
  resetMocks: () => void;
}

// Create the mock invoke function
const baseMockFn = vi.fn(async <T>(cmd: string, args?: Record<string, unknown>): Promise<T> => {
  // Check for custom mock
  const customMock = customMocks[cmd];
  if (customMock) {
    return customMock(args) as T;
  }

  // Return default mock response
  const response = mockResponses[cmd];
  if (response !== undefined) {
    return response as T;
  }

  // Default to empty object for unknown commands
  console.warn(`[Mock] Unknown Tauri command: ${cmd}`);
  return {} as T;
});

// Cast to our extended type and add properties
export const invoke = baseMockFn as unknown as MockInvokeFunction;

// Add custom mocks reference
invoke.__customMocks = customMocks;

// Add helper to set custom mock responses
invoke.mockCommand = (cmd: string, response: unknown | MockFunction): void => {
  customMocks[cmd] = typeof response === 'function' ? response as MockFunction : () => response;
};

// Add helper to set one-time mock response
invoke.mockCommandOnce = (cmd: string, response: unknown | MockFunction): void => {
  const fn = typeof response === 'function' ? response as MockFunction : () => response;
  invoke.mockCommand(cmd, (args: Record<string, unknown> | undefined) => {
    delete customMocks[cmd];
    return fn(args);
  });
};

// Reset custom mocks
invoke.resetMocks = (): void => {
  customMocks = {};
  invoke.__customMocks = customMocks;
  vi.clearAllMocks();
};

export default invoke;
