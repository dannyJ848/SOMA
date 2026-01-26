/**
 * Onboarding Types
 *
 * Type definitions for the comprehensive onboarding flow.
 */

// ============================================
// Step Types
// ============================================

export type OnboardingStep =
  | 'welcome'
  | 'privacy'
  | 'passphrase'
  | 'demographics'
  | 'health-history'
  | 'medications'
  | 'preferences'
  | 'complexity'
  | 'tour'
  | 'complete';

export interface OnboardingStepConfig {
  id: OnboardingStep;
  title: string;
  description: string;
  skippable: boolean;
  order: number;
}

// ============================================
// Demographics Types
// ============================================

export type AgeRange =
  | 'under-18'
  | '18-24'
  | '25-34'
  | '35-44'
  | '45-54'
  | '55-64'
  | '65-74'
  | '75+';

export type BiologicalSex = 'male' | 'female' | 'intersex' | 'prefer-not-to-say';

export interface Demographics {
  ageRange?: AgeRange;
  biologicalSex?: BiologicalSex;
  height?: {
    value: number;
    unit: 'cm' | 'inches';
  };
  weight?: {
    value: number;
    unit: 'kg' | 'lbs';
  };
}

// ============================================
// Health History Types
// ============================================

export interface HealthCondition {
  id: string;
  name: string;
  category: 'chronic' | 'acute' | 'resolved' | 'monitoring';
  diagnosedYear?: number;
  notes?: string;
}

export interface HealthHistory {
  conditions: HealthCondition[];
  familyHistory: string[];
  surgeries: string[];
  hasChronicConditions: boolean;
}

// ============================================
// Medication Types
// ============================================

export interface Medication {
  id: string;
  name: string;
  dosage?: string;
  frequency?: string;
  reason?: string;
  isActive: boolean;
}

export interface Allergy {
  id: string;
  allergen: string;
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  reaction?: string;
}

export interface MedicationSetupData {
  medications: Medication[];
  allergies: Allergy[];
  supplements: string[];
}

// ============================================
// Preferences Types
// ============================================

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'es';
export type MeasurementSystem = 'metric' | 'imperial';

export interface AppPreferences {
  theme: Theme;
  language: Language;
  measurementSystem: MeasurementSystem;
  notifications: {
    reminders: boolean;
    insights: boolean;
    updates: boolean;
  };
  accessibility: {
    reduceMotion: boolean;
    largeText: boolean;
    highContrast: boolean;
  };
}

// ============================================
// Complexity Types
// ============================================

export type ComplexityLevel = 'simple' | 'standard' | 'detailed' | 'professional';

export interface ComplexityConfig {
  level: ComplexityLevel;
  showMedicalTerms: boolean;
  showReferences: boolean;
  explanationDepth: 'brief' | 'standard' | 'detailed';
}

// ============================================
// Health Goals Types
// ============================================

export interface HealthGoal {
  id: string;
  label: string;
  description: string;
  icon: string;
}

// ============================================
// Onboarding State
// ============================================

export interface OnboardingData {
  demographics: Demographics;
  healthHistory: HealthHistory;
  medications: MedicationSetupData;
  preferences: AppPreferences;
  complexity: ComplexityConfig;
  healthGoals: string[];
  passphrase?: string;
  passphraseHint?: string;
}

export interface OnboardingProgress {
  currentStep: OnboardingStep;
  completedSteps: OnboardingStep[];
  startedAt: number;
  lastUpdatedAt: number;
  isComplete: boolean;
}

export interface OnboardingState {
  progress: OnboardingProgress;
  data: OnboardingData;
  isLoading: boolean;
  error: string | null;
}

// ============================================
// Tour Types
// ============================================

export interface TourTooltip {
  id: string;
  targetSelector: string;
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  order: number;
  feature: string;
}

export interface TourState {
  isActive: boolean;
  currentTooltipIndex: number;
  tooltips: TourTooltip[];
  hasSeenTour: boolean;
}

// ============================================
// Context Help Types
// ============================================

export interface ContextualHelp {
  id: string;
  trigger: 'hover' | 'focus' | 'click';
  title: string;
  content: string;
  learnMoreUrl?: string;
}

export interface QuickStartSuggestion {
  id: string;
  title: string;
  description: string;
  action: string;
  icon: string;
  priority: number;
}

// ============================================
// Step Props Interface
// ============================================

export interface OnboardingStepProps {
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_DEMOGRAPHICS: Demographics = {
  ageRange: undefined,
  biologicalSex: undefined,
  height: undefined,
  weight: undefined,
};

export const DEFAULT_HEALTH_HISTORY: HealthHistory = {
  conditions: [],
  familyHistory: [],
  surgeries: [],
  hasChronicConditions: false,
};

export const DEFAULT_MEDICATION_DATA: MedicationSetupData = {
  medications: [],
  allergies: [],
  supplements: [],
};

export const DEFAULT_PREFERENCES: AppPreferences = {
  theme: 'system',
  language: 'en',
  measurementSystem: 'imperial',
  notifications: {
    reminders: true,
    insights: true,
    updates: false,
  },
  accessibility: {
    reduceMotion: false,
    largeText: false,
    highContrast: false,
  },
};

export const DEFAULT_COMPLEXITY: ComplexityConfig = {
  level: 'standard',
  showMedicalTerms: true,
  showReferences: false,
  explanationDepth: 'standard',
};

export const DEFAULT_ONBOARDING_DATA: OnboardingData = {
  demographics: DEFAULT_DEMOGRAPHICS,
  healthHistory: DEFAULT_HEALTH_HISTORY,
  medications: DEFAULT_MEDICATION_DATA,
  preferences: DEFAULT_PREFERENCES,
  complexity: DEFAULT_COMPLEXITY,
  healthGoals: [],
};

export const STEP_ORDER: OnboardingStep[] = [
  'welcome',
  'privacy',
  'passphrase',
  'demographics',
  'health-history',
  'medications',
  'preferences',
  'complexity',
  'tour',
  'complete',
];

export const STEP_CONFIGS: Record<OnboardingStep, OnboardingStepConfig> = {
  'welcome': {
    id: 'welcome',
    title: 'Welcome',
    description: 'Get started with Biological Self',
    skippable: false,
    order: 0,
  },
  'privacy': {
    id: 'privacy',
    title: 'Privacy',
    description: 'Understand how your data is protected',
    skippable: false,
    order: 1,
  },
  'passphrase': {
    id: 'passphrase',
    title: 'Security',
    description: 'Create a secure passphrase',
    skippable: true,
    order: 2,
  },
  'demographics': {
    id: 'demographics',
    title: 'About You',
    description: 'Basic health information',
    skippable: true,
    order: 3,
  },
  'health-history': {
    id: 'health-history',
    title: 'Health History',
    description: 'Your medical background',
    skippable: true,
    order: 4,
  },
  'medications': {
    id: 'medications',
    title: 'Medications',
    description: 'Current medications and allergies',
    skippable: true,
    order: 5,
  },
  'preferences': {
    id: 'preferences',
    title: 'Preferences',
    description: 'Customize your experience',
    skippable: true,
    order: 6,
  },
  'complexity': {
    id: 'complexity',
    title: 'Content Level',
    description: 'Choose your content complexity',
    skippable: true,
    order: 7,
  },
  'tour': {
    id: 'tour',
    title: 'Quick Tour',
    description: 'Learn the basics',
    skippable: true,
    order: 8,
  },
  'complete': {
    id: 'complete',
    title: 'All Set!',
    description: 'You are ready to go',
    skippable: false,
    order: 9,
  },
};

// ============================================
// Available Options
// ============================================

export const AGE_RANGES: { value: AgeRange; label: string }[] = [
  { value: 'under-18', label: 'Under 18' },
  { value: '18-24', label: '18-24' },
  { value: '25-34', label: '25-34' },
  { value: '35-44', label: '35-44' },
  { value: '45-54', label: '45-54' },
  { value: '55-64', label: '55-64' },
  { value: '65-74', label: '65-74' },
  { value: '75+', label: '75 and older' },
];

export const BIOLOGICAL_SEX_OPTIONS: { value: BiologicalSex; label: string }[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'intersex', label: 'Intersex' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

export const COMMON_CONDITIONS = [
  'Diabetes (Type 1)',
  'Diabetes (Type 2)',
  'Hypertension',
  'Heart Disease',
  'Asthma',
  'COPD',
  'Arthritis',
  'Thyroid Issues',
  'Anxiety',
  'Depression',
  'Migraines',
  'High Cholesterol',
];

export const COMMON_ALLERGIES = [
  'Penicillin',
  'Sulfa Drugs',
  'Aspirin',
  'NSAIDs',
  'Latex',
  'Shellfish',
  'Peanuts',
  'Tree Nuts',
  'Eggs',
  'Dairy',
  'Soy',
  'Wheat/Gluten',
];

export const HEALTH_GOALS: HealthGoal[] = [
  {
    id: 'learn-anatomy',
    label: 'Learn about anatomy',
    description: 'Understand how your body works',
    icon: 'anatomy',
  },
  {
    id: 'track-symptoms',
    label: 'Track symptoms',
    description: 'Log and monitor symptoms over time',
    icon: 'symptoms',
  },
  {
    id: 'understand-conditions',
    label: 'Understand conditions',
    description: 'Learn about medical conditions',
    icon: 'conditions',
  },
  {
    id: 'manage-medications',
    label: 'Manage medications',
    description: 'Track medications and interactions',
    icon: 'medications',
  },
  {
    id: 'improve-wellness',
    label: 'Improve wellness',
    description: 'Focus on overall health improvement',
    icon: 'wellness',
  },
  {
    id: 'prepare-appointments',
    label: 'Prepare for appointments',
    description: 'Get ready for doctor visits',
    icon: 'appointments',
  },
];
