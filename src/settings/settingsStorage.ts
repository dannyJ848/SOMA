/**
 * Settings Storage
 *
 * Handles persistence of settings to localStorage with optional
 * Tauri backend sync for desktop applications.
 */

import type { UserSettings, BackupInfo } from './types';
import { DEFAULT_USER_SETTINGS } from './types';

// ============================================
// Constants
// ============================================

export const STORAGE_KEY = 'biological-self-settings';
export const HEALTH_PROFILE_KEY = 'biological-self-health-profile';
export const BACKUPS_KEY = 'biological-self-backups';
export const SETTINGS_VERSION = '1.0.0';

// ============================================
// Type Guards
// ============================================

function isValidSettings(obj: unknown): obj is Partial<UserSettings> {
  if (typeof obj !== 'object' || obj === null) return false;
  const settings = obj as Record<string, unknown>;

  // Check for valid structure (presence of expected keys)
  const validKeys = [
    'appearance',
    'language',
    'complexity',
    'privacy',
    'notifications',
    'accessibility',
    'healthProfile',
  ];

  return validKeys.some((key) => key in settings);
}

// ============================================
// Storage Functions
// ============================================

/**
 * Load settings from localStorage
 */
export function loadSettings(): UserSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (isValidSettings(parsed)) {
        return deepMerge(DEFAULT_USER_SETTINGS, parsed);
      }
    }
  } catch (e) {
    console.warn('Failed to load settings from storage:', e);
  }
  return { ...DEFAULT_USER_SETTINGS };
}

/**
 * Save settings to localStorage
 */
export function saveSettings(settings: UserSettings): void {
  try {
    const toSave = {
      ...settings,
      lastUpdated: new Date().toISOString(),
      version: SETTINGS_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.warn('Failed to save settings to storage:', e);
    throw new Error('Failed to save settings');
  }
}

/**
 * Clear all settings from localStorage
 */
export function clearSettings(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HEALTH_PROFILE_KEY);
  } catch (e) {
    console.warn('Failed to clear settings:', e);
  }
}

/**
 * Export settings as JSON string
 */
export function exportSettings(settings: UserSettings): string {
  return JSON.stringify(settings, null, 2);
}

/**
 * Import settings from JSON string
 */
export function importSettings(json: string): UserSettings | null {
  try {
    const parsed = JSON.parse(json);
    if (isValidSettings(parsed)) {
      return deepMerge(DEFAULT_USER_SETTINGS, parsed);
    }
    return null;
  } catch (e) {
    console.warn('Failed to import settings:', e);
    return null;
  }
}

// ============================================
// Backup Functions
// ============================================

/**
 * Generate a unique backup ID
 */
function generateBackupId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a backup of current settings
 */
export function createBackup(settings: UserSettings): BackupInfo {
  const backupData = exportSettings(settings);
  const backupInfo: BackupInfo = {
    id: generateBackupId(),
    createdAt: new Date().toISOString(),
    size: new Blob([backupData]).size,
    encrypted: false,
    version: SETTINGS_VERSION,
  };

  // Store backup data
  try {
    localStorage.setItem(`${BACKUPS_KEY}-${backupInfo.id}`, backupData);

    // Update backup list
    const backups = listBackups();
    backups.push(backupInfo);
    localStorage.setItem(BACKUPS_KEY, JSON.stringify(backups));
  } catch (e) {
    console.warn('Failed to create backup:', e);
    throw new Error('Failed to create backup');
  }

  return backupInfo;
}

/**
 * List all available backups
 */
export function listBackups(): BackupInfo[] {
  try {
    const stored = localStorage.getItem(BACKUPS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to list backups:', e);
  }
  return [];
}

/**
 * Restore settings from a backup
 */
export function restoreBackup(backupId: string): UserSettings | null {
  try {
    const backupData = localStorage.getItem(`${BACKUPS_KEY}-${backupId}`);
    if (backupData) {
      return importSettings(backupData);
    }
  } catch (e) {
    console.warn('Failed to restore backup:', e);
  }
  return null;
}

/**
 * Delete a backup
 */
export function deleteBackup(backupId: string): boolean {
  try {
    localStorage.removeItem(`${BACKUPS_KEY}-${backupId}`);

    // Update backup list
    const backups = listBackups().filter((b) => b.id !== backupId);
    localStorage.setItem(BACKUPS_KEY, JSON.stringify(backups));

    return true;
  } catch (e) {
    console.warn('Failed to delete backup:', e);
    return false;
  }
}

/**
 * Clear all backups
 */
export function clearBackups(): void {
  const backups = listBackups();
  backups.forEach((backup) => {
    localStorage.removeItem(`${BACKUPS_KEY}-${backup.id}`);
  });
  localStorage.removeItem(BACKUPS_KEY);
}

// ============================================
// Storage Utilities
// ============================================

/**
 * Get the current storage usage for settings
 */
export function getStorageUsage(): { used: number; available: number } {
  let used = 0;

  try {
    // Calculate used storage
    const settingsSize = new Blob([localStorage.getItem(STORAGE_KEY) || '']).size;
    const backupsListSize = new Blob([localStorage.getItem(BACKUPS_KEY) || '']).size;

    used = settingsSize + backupsListSize;

    // Add individual backup sizes
    const backups = listBackups();
    backups.forEach((backup) => {
      const backupData = localStorage.getItem(`${BACKUPS_KEY}-${backup.id}`);
      if (backupData) {
        used += new Blob([backupData]).size;
      }
    });
  } catch (e) {
    console.warn('Failed to calculate storage usage:', e);
  }

  // Estimate available storage (localStorage typically ~5-10MB)
  const estimatedTotal = 5 * 1024 * 1024; // 5MB
  const available = Math.max(0, estimatedTotal - used);

  return { used, available };
}

/**
 * Check if storage is available
 */
export function isStorageAvailable(): boolean {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// ============================================
// Deep Merge Utility
// ============================================

/**
 * Deep merge two objects, with source overriding target
 */
function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(sourceValue) &&
        typeof targetValue === 'object' &&
        targetValue !== null &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>];
      } else if (sourceValue !== undefined) {
        result[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}

// ============================================
// Tauri Integration (Optional)
// ============================================

/**
 * Sync settings with Tauri backend (if available)
 */
export async function syncWithTauri(settings: UserSettings): Promise<boolean> {
  try {
    // Dynamic import to avoid issues in non-Tauri environments
    const { invoke } = await import('../tauri-invoke');
    await invoke('save_settings', { settings });
    return true;
  } catch (e) {
    // Tauri not available or sync failed
    console.log('Tauri sync not available, using localStorage only');
    return false;
  }
}

/**
 * Load settings from Tauri backend (if available)
 */
export async function loadFromTauri(): Promise<UserSettings | null> {
  try {
    const { invoke } = await import('../tauri-invoke');
    const settings = await invoke<UserSettings | null>('get_settings');
    return settings;
  } catch (e) {
    console.log('Tauri load not available');
    return null;
  }
}
