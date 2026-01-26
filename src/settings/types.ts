/**
 * Settings Types
 *
 * Type definitions for the comprehensive settings and user preferences system.
 */

// ============================================
// Appearance Settings
// ============================================

export type Theme = 'light' | 'dark' | 'system';
export type FontSize = 'small' | 'medium' | 'large' | 'extra-large';
export type ColorScheme = 'default' | 'high-contrast' | 'colorblind-friendly';

export interface AppearanceSettings {
  theme: Theme;
  fontSize: FontSize;
  colorScheme: ColorScheme;
  reduceMotion: boolean;
  reduceTransparency: boolean;
  compactMode: boolean;
}

// ============================================
// Language Settings
// ============================================

export type SupportedLanguage = 'en' | 'es';

export interface LanguageSettings {
  language: SupportedLanguage;
  medicalTermLanguage: SupportedLanguage;
  dateFormat: 'US' | 'EU' | 'ISO';
  measurementSystem: 'metric' | 'imperial';
}

// ============================================
// Complexity Level
// ============================================

export type ComplexityLevel = 'patient' | 'informed' | 'student' | 'professional';

export interface ComplexityPreferences {
  defaultLevel: ComplexityLevel;
  showMedicalTerms: boolean;
  showAbbreviations: boolean;
  includeReferences: boolean;
  explanationDepth: 'brief' | 'standard' | 'detailed';
}

// ============================================
// Privacy Settings
// ============================================

export interface PrivacySettings {
  allowAnalytics: boolean;
  allowCrashReports: boolean;
  shareAnonymizedData: boolean;
  autoLockTimeout: number; // minutes, 0 = never
  requirePasswordOnLaunch: boolean;
  clearDataOnUninstall: boolean;
}

// ============================================
// Notification Settings
// ============================================

export type NotificationType =
  | 'medication_reminder'
  | 'appointment_reminder'
  | 'health_insight'
  | 'lab_result'
  | 'symptom_followup';

export interface NotificationPreference {
  enabled: boolean;
  sound: boolean;
  vibrate: boolean;
  timing: 'immediate' | '15min' | '30min' | '1hour';
}

export interface NotificationSettings {
  globalEnabled: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string; // HH:MM format
  quietHoursEnd: string;
  preferences: Record<NotificationType, NotificationPreference>;
}

// ============================================
// Accessibility Settings
// ============================================

export interface AccessibilitySettings {
  screenReaderOptimized: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  textToSpeech: boolean;
  speechRate: number; // 0.5 - 2.0
  autoReadContent: boolean;
  highContrast: boolean;
  largeClickTargets: boolean;
  reduceAnimations: boolean;
}

// ============================================
// Health Profile
// ============================================

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'unknown';

export interface MedicalCondition {
  id: string;
  name: string;
  diagnosedDate?: string;
  status: 'active' | 'managed' | 'resolved' | 'monitoring';
  notes?: string;
  severity?: 'mild' | 'moderate' | 'severe';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate?: string;
  endDate?: string;
  prescribedFor?: string;
  notes?: string;
  isActive: boolean;
}

export interface Allergy {
  id: string;
  allergen: string;
  type: 'medication' | 'food' | 'environmental' | 'other';
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  reaction?: string;
  notes?: string;
}

export interface FamilyHistoryItem {
  id: string;
  relation: 'parent' | 'grandparent' | 'sibling' | 'aunt_uncle' | 'cousin' | 'child';
  side?: 'maternal' | 'paternal';
  condition: string;
  ageOfOnset?: number;
  notes?: string;
}

export interface HealthProfile {
  bloodType: BloodType;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  primaryPhysician?: {
    name: string;
    phone?: string;
    facility?: string;
  };
  conditions: MedicalCondition[];
  medications: Medication[];
  allergies: Allergy[];
  familyHistory: FamilyHistoryItem[];
  surgeries: Array<{
    id: string;
    procedure: string;
    date: string;
    facility?: string;
    notes?: string;
  }>;
  immunizations: Array<{
    id: string;
    vaccine: string;
    date: string;
    boosterDue?: string;
  }>;
}

// ============================================
// Data Management
// ============================================

export interface DataExportOptions {
  format: 'json' | 'csv' | 'pdf';
  includeHealthProfile: boolean;
  includeSymptoms: boolean;
  includeLabResults: boolean;
  includeMedications: boolean;
  includeTimeline: boolean;
  includeSettings: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface BackupInfo {
  id: string;
  createdAt: string;
  size: number;
  encrypted: boolean;
  version: string;
}

// ============================================
// Combined Settings
// ============================================

export interface UserSettings {
  appearance: AppearanceSettings;
  language: LanguageSettings;
  complexity: ComplexityPreferences;
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  accessibility: AccessibilitySettings;
  healthProfile: HealthProfile;
  lastUpdated: string;
  version: string;
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_NOTIFICATION_PREFERENCE: NotificationPreference = {
  enabled: true,
  sound: true,
  vibrate: true,
  timing: 'immediate',
};

export const DEFAULT_APPEARANCE_SETTINGS: AppearanceSettings = {
  theme: 'system',
  fontSize: 'medium',
  colorScheme: 'default',
  reduceMotion: false,
  reduceTransparency: false,
  compactMode: false,
};

export const DEFAULT_LANGUAGE_SETTINGS: LanguageSettings = {
  language: 'en',
  medicalTermLanguage: 'en',
  dateFormat: 'US',
  measurementSystem: 'imperial',
};

export const DEFAULT_COMPLEXITY_PREFERENCES: ComplexityPreferences = {
  defaultLevel: 'informed',
  showMedicalTerms: true,
  showAbbreviations: false,
  includeReferences: false,
  explanationDepth: 'standard',
};

export const DEFAULT_PRIVACY_SETTINGS: PrivacySettings = {
  allowAnalytics: false,
  allowCrashReports: false,
  shareAnonymizedData: false,
  autoLockTimeout: 5,
  requirePasswordOnLaunch: true,
  clearDataOnUninstall: true,
};

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  globalEnabled: true,
  quietHoursEnabled: false,
  quietHoursStart: '22:00',
  quietHoursEnd: '07:00',
  preferences: {
    medication_reminder: { ...DEFAULT_NOTIFICATION_PREFERENCE },
    appointment_reminder: { ...DEFAULT_NOTIFICATION_PREFERENCE },
    health_insight: { ...DEFAULT_NOTIFICATION_PREFERENCE, timing: '30min' },
    lab_result: { ...DEFAULT_NOTIFICATION_PREFERENCE },
    symptom_followup: { ...DEFAULT_NOTIFICATION_PREFERENCE, timing: '1hour' },
  },
};

export const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  screenReaderOptimized: false,
  keyboardNavigation: true,
  focusIndicators: true,
  textToSpeech: false,
  speechRate: 1.0,
  autoReadContent: false,
  highContrast: false,
  largeClickTargets: false,
  reduceAnimations: false,
};

export const DEFAULT_HEALTH_PROFILE: HealthProfile = {
  bloodType: 'unknown',
  conditions: [],
  medications: [],
  allergies: [],
  familyHistory: [],
  surgeries: [],
  immunizations: [],
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  appearance: DEFAULT_APPEARANCE_SETTINGS,
  language: DEFAULT_LANGUAGE_SETTINGS,
  complexity: DEFAULT_COMPLEXITY_PREFERENCES,
  privacy: DEFAULT_PRIVACY_SETTINGS,
  notifications: DEFAULT_NOTIFICATION_SETTINGS,
  accessibility: DEFAULT_ACCESSIBILITY_SETTINGS,
  healthProfile: DEFAULT_HEALTH_PROFILE,
  lastUpdated: new Date().toISOString(),
  version: '1.0.0',
};
