/**
 * Settings Hook
 *
 * Comprehensive hook for managing user settings and preferences.
 * Persists to localStorage with Tauri backend sync.
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { invoke } from '../tauri-invoke';
import {
  type UserSettings,
  type AppearanceSettings,
  type LanguageSettings,
  type ComplexityPreferences,
  type PrivacySettings,
  type NotificationSettings,
  type AccessibilitySettings,
  type HealthProfile,
  type MedicalCondition,
  type Medication,
  type Allergy,
  type FamilyHistoryItem,
  type DataExportOptions,
  type BackupInfo,
  DEFAULT_USER_SETTINGS,
} from './types';

// ============================================
// Storage Keys
// ============================================

const STORAGE_KEY = 'biological-self-settings';
const HEALTH_PROFILE_KEY = 'biological-self-health-profile';
const SETTINGS_VERSION = '1.0.0';

// ============================================
// Types
// ============================================

interface UseSettingsReturn {
  // State
  settings: UserSettings;
  isLoading: boolean;
  error: string | null;
  lastSaved: Date | null;

  // General
  updateSettings: (partial: Partial<UserSettings>) => Promise<void>;
  resetSettings: () => Promise<void>;
  exportSettings: () => string;
  importSettings: (json: string) => Promise<boolean>;

  // Appearance
  updateAppearance: (partial: Partial<AppearanceSettings>) => Promise<void>;
  setTheme: (theme: AppearanceSettings['theme']) => Promise<void>;
  setFontSize: (size: AppearanceSettings['fontSize']) => Promise<void>;

  // Language
  updateLanguage: (partial: Partial<LanguageSettings>) => Promise<void>;
  setLanguage: (lang: LanguageSettings['language']) => Promise<void>;

  // Complexity
  updateComplexity: (partial: Partial<ComplexityPreferences>) => Promise<void>;
  setComplexityLevel: (level: ComplexityPreferences['defaultLevel']) => Promise<void>;

  // Privacy
  updatePrivacy: (partial: Partial<PrivacySettings>) => Promise<void>;

  // Notifications
  updateNotifications: (partial: Partial<NotificationSettings>) => Promise<void>;
  toggleNotificationType: (type: keyof NotificationSettings['preferences'], enabled: boolean) => Promise<void>;

  // Accessibility
  updateAccessibility: (partial: Partial<AccessibilitySettings>) => Promise<void>;

  // Health Profile
  updateHealthProfile: (partial: Partial<HealthProfile>) => Promise<void>;
  addCondition: (condition: Omit<MedicalCondition, 'id'>) => Promise<void>;
  updateCondition: (id: string, updates: Partial<MedicalCondition>) => Promise<void>;
  removeCondition: (id: string) => Promise<void>;
  addMedication: (medication: Omit<Medication, 'id'>) => Promise<void>;
  updateMedication: (id: string, updates: Partial<Medication>) => Promise<void>;
  removeMedication: (id: string) => Promise<void>;
  addAllergy: (allergy: Omit<Allergy, 'id'>) => Promise<void>;
  updateAllergy: (id: string, updates: Partial<Allergy>) => Promise<void>;
  removeAllergy: (id: string) => Promise<void>;
  addFamilyHistory: (item: Omit<FamilyHistoryItem, 'id'>) => Promise<void>;
  updateFamilyHistory: (id: string, updates: Partial<FamilyHistoryItem>) => Promise<void>;
  removeFamilyHistory: (id: string) => Promise<void>;

  // Data Management
  exportData: (options: DataExportOptions) => Promise<string>;
  importData: (data: string, format: 'json') => Promise<boolean>;
  clearAllData: () => Promise<void>;
  createBackup: () => Promise<BackupInfo>;
  restoreBackup: (backupId: string) => Promise<boolean>;
  listBackups: () => Promise<BackupInfo[]>;
}

// ============================================
// Utility Functions
// ============================================

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return { ...defaultValue, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn(`Failed to load ${key} from storage:`, e);
  }
  return defaultValue;
}

function saveToStorage(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Failed to save ${key} to storage:`, e);
  }
}

// ============================================
// Hook Implementation
// ============================================

export function useSettings(): UseSettingsReturn {
  const [settings, setSettings] = useState<UserSettings>(() =>
    loadFromStorage(STORAGE_KEY, DEFAULT_USER_SETTINGS)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, []);

  // Apply theme on change
  useEffect(() => {
    applyTheme(settings.appearance.theme);
    applyFontSize(settings.appearance.fontSize);
    applyAccessibility(settings.accessibility);
  }, [settings.appearance.theme, settings.appearance.fontSize, settings.accessibility]);

  const loadSettings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // First load from localStorage
      const localSettings = loadFromStorage(STORAGE_KEY, DEFAULT_USER_SETTINGS);
      setSettings(localSettings);

      // Try to sync with Tauri backend
      try {
        const backendSettings = await invoke<UserSettings | null>('get_settings');
        if (backendSettings) {
          // Merge backend settings (they take precedence)
          const merged = { ...localSettings, ...backendSettings };
          setSettings(merged);
          saveToStorage(STORAGE_KEY, merged);
        }
      } catch (tauriError) {
        console.log('Tauri not available, using localStorage only');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveSettings = useCallback(async (newSettings: UserSettings) => {
    const updated = {
      ...newSettings,
      lastUpdated: new Date().toISOString(),
      version: SETTINGS_VERSION,
    };

    // Save to localStorage first
    saveToStorage(STORAGE_KEY, updated);
    setSettings(updated);
    setLastSaved(new Date());

    // Try to sync with Tauri backend
    try {
      await invoke('save_settings', { settings: updated });
    } catch (tauriError) {
      console.log('Tauri not available, saved to localStorage only');
    }
  }, []);

  // ============================================
  // General Settings
  // ============================================

  const updateSettings = useCallback(async (partial: Partial<UserSettings>) => {
    const newSettings = { ...settings, ...partial };
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const resetSettings = useCallback(async () => {
    await saveSettings(DEFAULT_USER_SETTINGS);
  }, [saveSettings]);

  const exportSettings = useCallback(() => {
    return JSON.stringify(settings, null, 2);
  }, [settings]);

  const importSettings = useCallback(async (json: string): Promise<boolean> => {
    try {
      const imported = JSON.parse(json) as Partial<UserSettings>;
      const merged = { ...DEFAULT_USER_SETTINGS, ...imported };
      await saveSettings(merged);
      return true;
    } catch (e) {
      setError('Invalid settings format');
      return false;
    }
  }, [saveSettings]);

  // ============================================
  // Appearance Settings
  // ============================================

  const updateAppearance = useCallback(async (partial: Partial<AppearanceSettings>) => {
    await updateSettings({
      appearance: { ...settings.appearance, ...partial },
    });
  }, [settings.appearance, updateSettings]);

  const setTheme = useCallback(async (theme: AppearanceSettings['theme']) => {
    await updateAppearance({ theme });
  }, [updateAppearance]);

  const setFontSize = useCallback(async (fontSize: AppearanceSettings['fontSize']) => {
    await updateAppearance({ fontSize });
  }, [updateAppearance]);

  // ============================================
  // Language Settings
  // ============================================

  const updateLanguage = useCallback(async (partial: Partial<LanguageSettings>) => {
    await updateSettings({
      language: { ...settings.language, ...partial },
    });
  }, [settings.language, updateSettings]);

  const setLanguage = useCallback(async (language: LanguageSettings['language']) => {
    await updateLanguage({ language });
  }, [updateLanguage]);

  // ============================================
  // Complexity Settings
  // ============================================

  const updateComplexity = useCallback(async (partial: Partial<ComplexityPreferences>) => {
    await updateSettings({
      complexity: { ...settings.complexity, ...partial },
    });
  }, [settings.complexity, updateSettings]);

  const setComplexityLevel = useCallback(async (defaultLevel: ComplexityPreferences['defaultLevel']) => {
    await updateComplexity({ defaultLevel });
  }, [updateComplexity]);

  // ============================================
  // Privacy Settings
  // ============================================

  const updatePrivacy = useCallback(async (partial: Partial<PrivacySettings>) => {
    await updateSettings({
      privacy: { ...settings.privacy, ...partial },
    });
  }, [settings.privacy, updateSettings]);

  // ============================================
  // Notification Settings
  // ============================================

  const updateNotifications = useCallback(async (partial: Partial<NotificationSettings>) => {
    await updateSettings({
      notifications: { ...settings.notifications, ...partial },
    });
  }, [settings.notifications, updateSettings]);

  const toggleNotificationType = useCallback(async (
    type: keyof NotificationSettings['preferences'],
    enabled: boolean
  ) => {
    await updateNotifications({
      preferences: {
        ...settings.notifications.preferences,
        [type]: {
          ...settings.notifications.preferences[type],
          enabled,
        },
      },
    });
  }, [settings.notifications.preferences, updateNotifications]);

  // ============================================
  // Accessibility Settings
  // ============================================

  const updateAccessibility = useCallback(async (partial: Partial<AccessibilitySettings>) => {
    await updateSettings({
      accessibility: { ...settings.accessibility, ...partial },
    });
  }, [settings.accessibility, updateSettings]);

  // ============================================
  // Health Profile
  // ============================================

  const updateHealthProfile = useCallback(async (partial: Partial<HealthProfile>) => {
    await updateSettings({
      healthProfile: { ...settings.healthProfile, ...partial },
    });
  }, [settings.healthProfile, updateSettings]);

  // Conditions
  const addCondition = useCallback(async (condition: Omit<MedicalCondition, 'id'>) => {
    const newCondition: MedicalCondition = { ...condition, id: generateId() };
    await updateHealthProfile({
      conditions: [...settings.healthProfile.conditions, newCondition],
    });
  }, [settings.healthProfile.conditions, updateHealthProfile]);

  const updateCondition = useCallback(async (id: string, updates: Partial<MedicalCondition>) => {
    await updateHealthProfile({
      conditions: settings.healthProfile.conditions.map(c =>
        c.id === id ? { ...c, ...updates } : c
      ),
    });
  }, [settings.healthProfile.conditions, updateHealthProfile]);

  const removeCondition = useCallback(async (id: string) => {
    await updateHealthProfile({
      conditions: settings.healthProfile.conditions.filter(c => c.id !== id),
    });
  }, [settings.healthProfile.conditions, updateHealthProfile]);

  // Medications
  const addMedication = useCallback(async (medication: Omit<Medication, 'id'>) => {
    const newMedication: Medication = { ...medication, id: generateId() };
    await updateHealthProfile({
      medications: [...settings.healthProfile.medications, newMedication],
    });
  }, [settings.healthProfile.medications, updateHealthProfile]);

  const updateMedication = useCallback(async (id: string, updates: Partial<Medication>) => {
    await updateHealthProfile({
      medications: settings.healthProfile.medications.map(m =>
        m.id === id ? { ...m, ...updates } : m
      ),
    });
  }, [settings.healthProfile.medications, updateHealthProfile]);

  const removeMedication = useCallback(async (id: string) => {
    await updateHealthProfile({
      medications: settings.healthProfile.medications.filter(m => m.id !== id),
    });
  }, [settings.healthProfile.medications, updateHealthProfile]);

  // Allergies
  const addAllergy = useCallback(async (allergy: Omit<Allergy, 'id'>) => {
    const newAllergy: Allergy = { ...allergy, id: generateId() };
    await updateHealthProfile({
      allergies: [...settings.healthProfile.allergies, newAllergy],
    });
  }, [settings.healthProfile.allergies, updateHealthProfile]);

  const updateAllergy = useCallback(async (id: string, updates: Partial<Allergy>) => {
    await updateHealthProfile({
      allergies: settings.healthProfile.allergies.map(a =>
        a.id === id ? { ...a, ...updates } : a
      ),
    });
  }, [settings.healthProfile.allergies, updateHealthProfile]);

  const removeAllergy = useCallback(async (id: string) => {
    await updateHealthProfile({
      allergies: settings.healthProfile.allergies.filter(a => a.id !== id),
    });
  }, [settings.healthProfile.allergies, updateHealthProfile]);

  // Family History
  const addFamilyHistory = useCallback(async (item: Omit<FamilyHistoryItem, 'id'>) => {
    const newItem: FamilyHistoryItem = { ...item, id: generateId() };
    await updateHealthProfile({
      familyHistory: [...settings.healthProfile.familyHistory, newItem],
    });
  }, [settings.healthProfile.familyHistory, updateHealthProfile]);

  const updateFamilyHistory = useCallback(async (id: string, updates: Partial<FamilyHistoryItem>) => {
    await updateHealthProfile({
      familyHistory: settings.healthProfile.familyHistory.map(f =>
        f.id === id ? { ...f, ...updates } : f
      ),
    });
  }, [settings.healthProfile.familyHistory, updateHealthProfile]);

  const removeFamilyHistory = useCallback(async (id: string) => {
    await updateHealthProfile({
      familyHistory: settings.healthProfile.familyHistory.filter(f => f.id !== id),
    });
  }, [settings.healthProfile.familyHistory, updateHealthProfile]);

  // ============================================
  // Data Management
  // ============================================

  const exportData = useCallback(async (options: DataExportOptions): Promise<string> => {
    const exportObj: Record<string, unknown> = {
      exportedAt: new Date().toISOString(),
      version: SETTINGS_VERSION,
    };

    if (options.includeSettings) {
      exportObj.settings = settings;
    }

    if (options.includeHealthProfile) {
      exportObj.healthProfile = settings.healthProfile;
    }

    // For other data types, we would call Tauri commands
    try {
      if (options.includeSymptoms) {
        const symptoms = await invoke('export_symptoms', { dateRange: options.dateRange });
        exportObj.symptoms = symptoms;
      }

      if (options.includeLabResults) {
        const labs = await invoke('export_labs', { dateRange: options.dateRange });
        exportObj.labResults = labs;
      }

      if (options.includeMedications) {
        const meds = await invoke('export_medications');
        exportObj.medications = meds;
      }

      if (options.includeTimeline) {
        const timeline = await invoke('export_timeline', { dateRange: options.dateRange });
        exportObj.timeline = timeline;
      }
    } catch (e) {
      console.log('Some export data unavailable (Tauri not connected)');
    }

    return JSON.stringify(exportObj, null, 2);
  }, [settings]);

  const importData = useCallback(async (data: string, format: 'json'): Promise<boolean> => {
    try {
      const parsed = JSON.parse(data);

      if (parsed.settings) {
        await updateSettings(parsed.settings);
      }

      if (parsed.healthProfile) {
        await updateHealthProfile(parsed.healthProfile);
      }

      // Import other data via Tauri
      try {
        if (parsed.symptoms) {
          await invoke('import_symptoms', { symptoms: parsed.symptoms });
        }
        if (parsed.labResults) {
          await invoke('import_labs', { labs: parsed.labResults });
        }
        if (parsed.medications) {
          await invoke('import_medications', { medications: parsed.medications });
        }
      } catch (e) {
        console.log('Some data import unavailable (Tauri not connected)');
      }

      return true;
    } catch (e) {
      setError('Failed to import data');
      return false;
    }
  }, [updateSettings, updateHealthProfile]);

  const clearAllData = useCallback(async () => {
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HEALTH_PROFILE_KEY);
    localStorage.removeItem('biological-self-demographics');
    localStorage.removeItem('biological-self-onboarded');
    localStorage.removeItem('biological-self-voice-config');

    // Reset to defaults
    setSettings(DEFAULT_USER_SETTINGS);

    // Clear Tauri data
    try {
      await invoke('clear_all_data');
    } catch (e) {
      console.log('Tauri clear unavailable');
    }
  }, []);

  const createBackup = useCallback(async (): Promise<BackupInfo> => {
    try {
      const backup = await invoke<BackupInfo>('create_backup');
      return backup;
    } catch (e) {
      // Create a local backup
      const backupData = exportSettings();
      const backupInfo: BackupInfo = {
        id: generateId(),
        createdAt: new Date().toISOString(),
        size: new Blob([backupData]).size,
        encrypted: false,
        version: SETTINGS_VERSION,
      };

      // Store backup in localStorage
      const backups = loadFromStorage<BackupInfo[]>('biological-self-backups', []);
      backups.push(backupInfo);
      saveToStorage('biological-self-backups', backups);
      saveToStorage(`biological-self-backup-${backupInfo.id}`, backupData);

      return backupInfo;
    }
  }, [exportSettings]);

  const restoreBackup = useCallback(async (backupId: string): Promise<boolean> => {
    try {
      await invoke('restore_backup', { backupId });
      await loadSettings();
      return true;
    } catch (e) {
      // Try local backup
      const backupData = localStorage.getItem(`biological-self-backup-${backupId}`);
      if (backupData) {
        return importSettings(backupData);
      }
      return false;
    }
  }, [loadSettings, importSettings]);

  const listBackups = useCallback(async (): Promise<BackupInfo[]> => {
    try {
      const backups = await invoke<BackupInfo[]>('list_backups');
      return backups;
    } catch (e) {
      // Return local backups
      return loadFromStorage<BackupInfo[]>('biological-self-backups', []);
    }
  }, []);

  return {
    settings,
    isLoading,
    error,
    lastSaved,
    updateSettings,
    resetSettings,
    exportSettings,
    importSettings,
    updateAppearance,
    setTheme,
    setFontSize,
    updateLanguage,
    setLanguage,
    updateComplexity,
    setComplexityLevel,
    updatePrivacy,
    updateNotifications,
    toggleNotificationType,
    updateAccessibility,
    updateHealthProfile,
    addCondition,
    updateCondition,
    removeCondition,
    addMedication,
    updateMedication,
    removeMedication,
    addAllergy,
    updateAllergy,
    removeAllergy,
    addFamilyHistory,
    updateFamilyHistory,
    removeFamilyHistory,
    exportData,
    importData,
    clearAllData,
    createBackup,
    restoreBackup,
    listBackups,
  };
}

// ============================================
// Theme Application
// ============================================

function applyTheme(theme: AppearanceSettings['theme']): void {
  const root = document.documentElement;

  let effectiveTheme = theme;
  if (theme === 'system') {
    effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (effectiveTheme === 'light') {
    root.style.setProperty('--bg-primary', '#ffffff');
    root.style.setProperty('--bg-secondary', '#f5f5f5');
    root.style.setProperty('--bg-card', '#ffffff');
    root.style.setProperty('--text-primary', '#1a1a1a');
    root.style.setProperty('--text-secondary', '#666666');
    root.style.setProperty('--border', '#e0e0e0');
  } else {
    root.style.setProperty('--bg-primary', '#0a0a0a');
    root.style.setProperty('--bg-secondary', '#141414');
    root.style.setProperty('--bg-card', '#1a1a1a');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#888888');
    root.style.setProperty('--border', '#2a2a2a');
  }

  root.setAttribute('data-theme', effectiveTheme);
}

function applyFontSize(size: AppearanceSettings['fontSize']): void {
  const root = document.documentElement;
  const sizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
    'extra-large': '20px',
  };
  root.style.setProperty('--base-font-size', sizes[size]);
  root.style.fontSize = sizes[size];
}

function applyAccessibility(accessibility: AccessibilitySettings): void {
  const root = document.documentElement;

  if (accessibility.reduceAnimations) {
    root.style.setProperty('--animation-duration', '0s');
    root.classList.add('reduce-motion');
  } else {
    root.style.setProperty('--animation-duration', '0.2s');
    root.classList.remove('reduce-motion');
  }

  if (accessibility.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }

  if (accessibility.largeClickTargets) {
    root.classList.add('large-targets');
  } else {
    root.classList.remove('large-targets');
  }
}

// ============================================
// Context (Optional)
// ============================================

import { createContext, useContext, type ReactNode } from 'react';

const SettingsContext = createContext<UseSettingsReturn | null>(null);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const settings = useSettings();

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext(): UseSettingsReturn {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}

export default useSettings;
