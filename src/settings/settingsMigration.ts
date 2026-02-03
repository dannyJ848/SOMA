/**
 * Settings Migration
 *
 * Handles migration of settings between versions.
 * Ensures backward compatibility when settings structure changes.
 */

import type { UserSettings } from './types';
import { DEFAULT_USER_SETTINGS } from './types';
import { SETTINGS_VERSION } from './settingsStorage';

// ============================================
// Types
// ============================================

interface Migration {
  fromVersion: string;
  toVersion: string;
  migrate: (settings: Record<string, unknown>) => Record<string, unknown>;
}

// ============================================
// Version Comparison
// ============================================

/**
 * Compare two semantic version strings
 * Returns: -1 if a < b, 0 if a === b, 1 if a > b
 */
function compareVersions(a: string, b: string): number {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const numA = partsA[i] || 0;
    const numB = partsB[i] || 0;

    if (numA < numB) return -1;
    if (numA > numB) return 1;
  }

  return 0;
}

/**
 * Get the version from settings object
 */
function getVersion(settings: Record<string, unknown>): string {
  return (settings.version as string) || '0.0.0';
}

// ============================================
// Migrations Registry
// ============================================

/**
 * List of all migrations, ordered by version
 */
const migrations: Migration[] = [
  // Migration from 0.x to 1.0.0
  {
    fromVersion: '0.0.0',
    toVersion: '1.0.0',
    migrate: (settings) => {
      const migrated = { ...settings };

      // Ensure all required sections exist
      if (!migrated.appearance) {
        migrated.appearance = DEFAULT_USER_SETTINGS.appearance;
      }
      if (!migrated.language) {
        migrated.language = DEFAULT_USER_SETTINGS.language;
      }
      if (!migrated.complexity) {
        migrated.complexity = DEFAULT_USER_SETTINGS.complexity;
      }
      if (!migrated.privacy) {
        migrated.privacy = DEFAULT_USER_SETTINGS.privacy;
      }
      if (!migrated.notifications) {
        migrated.notifications = DEFAULT_USER_SETTINGS.notifications;
      }
      if (!migrated.accessibility) {
        migrated.accessibility = DEFAULT_USER_SETTINGS.accessibility;
      }
      if (!migrated.healthProfile) {
        migrated.healthProfile = DEFAULT_USER_SETTINGS.healthProfile;
      }

      // Migrate old theme values
      const appearance = migrated.appearance as Record<string, unknown>;
      if (appearance.darkMode !== undefined) {
        appearance.theme = appearance.darkMode ? 'dark' : 'light';
        delete appearance.darkMode;
      }

      // Migrate old font size values
      if (typeof appearance.fontSize === 'number') {
        const size = appearance.fontSize as number;
        if (size <= 14) appearance.fontSize = 'small';
        else if (size <= 16) appearance.fontSize = 'medium';
        else if (size <= 18) appearance.fontSize = 'large';
        else appearance.fontSize = 'extra-large';
      }

      // Migrate old complexity level values
      const complexity = migrated.complexity as Record<string, unknown>;
      if (typeof complexity.level === 'string') {
        complexity.defaultLevel = complexity.level;
        delete complexity.level;
      }

      // Migrate old notification preferences
      const notifications = migrated.notifications as Record<string, unknown>;
      if (typeof notifications.enabled === 'boolean') {
        notifications.globalEnabled = notifications.enabled;
        delete notifications.enabled;
      }

      return migrated;
    },
  },

  // Future migrations would be added here
  // Example:
  // {
  //   fromVersion: '1.0.0',
  //   toVersion: '1.1.0',
  //   migrate: (settings) => {
  //     // Migration logic for 1.0.0 -> 1.1.0
  //     return settings;
  //   },
  // },
];

// ============================================
// Migration Functions
// ============================================

/**
 * Get applicable migrations for a given version
 */
function getApplicableMigrations(fromVersion: string, toVersion: string): Migration[] {
  return migrations.filter(
    (m) =>
      compareVersions(m.fromVersion, fromVersion) >= 0 &&
      compareVersions(m.toVersion, toVersion) <= 0
  );
}

/**
 * Migrate settings from one version to another
 */
export function migrateSettings(settings: UserSettings): UserSettings {
  const currentVersion = getVersion(settings as unknown as Record<string, unknown>);

  // No migration needed if already at current version
  if (compareVersions(currentVersion, SETTINGS_VERSION) >= 0) {
    return settings;
  }

  console.log(`Migrating settings from v${currentVersion} to v${SETTINGS_VERSION}`);

  let migrated: Record<string, unknown> = settings as unknown as Record<string, unknown>;
  const applicableMigrations = getApplicableMigrations(currentVersion, SETTINGS_VERSION);

  // Apply each migration in order
  for (const migration of applicableMigrations) {
    try {
      console.log(`Applying migration: v${migration.fromVersion} -> v${migration.toVersion}`);
      migrated = migration.migrate(migrated);
    } catch (e) {
      console.error(`Migration failed: v${migration.fromVersion} -> v${migration.toVersion}`, e);
      // Continue with partial migration
    }
  }

  // Update version
  migrated.version = SETTINGS_VERSION;
  migrated.lastUpdated = new Date().toISOString();

  // Merge with defaults to ensure all required fields exist
  return deepMergeWithDefaults(DEFAULT_USER_SETTINGS, migrated as Partial<UserSettings>);
}

/**
 * Validate migrated settings
 */
export function validateSettings(settings: UserSettings): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check required sections
  const requiredSections = [
    'appearance',
    'language',
    'complexity',
    'privacy',
    'notifications',
    'accessibility',
    'healthProfile',
  ] as const;

  for (const section of requiredSections) {
    if (!settings[section]) {
      errors.push(`Missing required section: ${section}`);
    }
  }

  // Validate appearance
  if (settings.appearance) {
    const validThemes = ['light', 'dark', 'system'];
    if (!validThemes.includes(settings.appearance.theme)) {
      errors.push(`Invalid theme: ${settings.appearance.theme}`);
    }

    const validFontSizes = ['small', 'medium', 'large', 'extra-large'];
    if (!validFontSizes.includes(settings.appearance.fontSize)) {
      errors.push(`Invalid font size: ${settings.appearance.fontSize}`);
    }
  }

  // Validate complexity
  if (settings.complexity) {
    const validLevels = ['patient', 'informed', 'student', 'professional'];
    if (!validLevels.includes(settings.complexity.defaultLevel)) {
      errors.push(`Invalid complexity level: ${settings.complexity.defaultLevel}`);
    }
  }

  // Validate language
  if (settings.language) {
    const validLanguages = ['en', 'es'];
    if (!validLanguages.includes(settings.language.language)) {
      errors.push(`Invalid language: ${settings.language.language}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Repair invalid settings by merging with defaults
 */
export function repairSettings(settings: UserSettings): UserSettings {
  const validation = validateSettings(settings);

  if (validation.isValid) {
    return settings;
  }

  console.warn('Repairing invalid settings:', validation.errors);
  return deepMergeWithDefaults(DEFAULT_USER_SETTINGS, settings);
}

// ============================================
// Utility Functions
// ============================================

/**
 * Deep merge with defaults, ensuring all default keys exist
 */
function deepMergeWithDefaults<T extends object>(
  defaults: T,
  override: Partial<T>
): T {
  const result = { ...defaults };

  for (const key in override) {
    if (Object.prototype.hasOwnProperty.call(override, key)) {
      const overrideValue = override[key];
      const defaultValue = defaults[key];

      if (
        typeof overrideValue === 'object' &&
        overrideValue !== null &&
        !Array.isArray(overrideValue) &&
        typeof defaultValue === 'object' &&
        defaultValue !== null &&
        !Array.isArray(defaultValue)
      ) {
        result[key] = deepMergeWithDefaults(
          defaultValue as Record<string, unknown>,
          overrideValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>];
      } else if (overrideValue !== undefined) {
        result[key] = overrideValue as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}

/**
 * Create a migration changelog for debugging
 */
export function getMigrationHistory(): Array<{
  version: string;
  changes: string[];
}> {
  return [
    {
      version: '1.0.0',
      changes: [
        'Initial settings structure',
        'Added appearance settings (theme, fontSize, colorScheme)',
        'Added language settings (language, dateFormat, measurementSystem)',
        'Added complexity preferences',
        'Added privacy settings',
        'Added notification settings',
        'Added accessibility settings',
        'Added health profile structure',
      ],
    },
    // Future versions would be documented here
  ];
}
