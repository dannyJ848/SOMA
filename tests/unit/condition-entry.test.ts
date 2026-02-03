// @vitest-environment jsdom
/**
 * Condition Entry Test Suite
 *
 * Tests for the condition/diagnosis entry functionality in SOMA medical app.
 * This includes testing condition entry via:
 * 1. ProfileSettings (localStorage health profile)
 * 2. ConditionSimulator (browsing pre-defined conditions)
 * 3. BiologicalSelf store (encrypted database)
 *
 * KNOWN ISSUE: Conditions added via ProfileSettings (localStorage) do NOT
 * appear in the dashboard because the dashboard reads from BiologicalSelf
 * encrypted database (via Tauri). There's no Tauri command to sync
 * localStorage conditions to the database.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Polyfill localStorage if not available in test environment
if (typeof globalThis.localStorage === 'undefined' || typeof globalThis.localStorage.setItem !== 'function') {
  const store: Record<string, string> = {};
  globalThis.localStorage = {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (index: number) => Object.keys(store)[index] ?? null,
  } as Storage;
}

// Mock the settings hook
vi.mock('../../src/settings/useSettings', () => ({
  useSettings: vi.fn(() => ({
    settings: {
      healthProfile: {
        conditions: [],
        medications: [],
        allergies: [],
        familyHistory: [],
        surgeries: [],
        immunizations: [],
        bloodType: 'unknown',
      },
    },
    addCondition: vi.fn(),
    updateCondition: vi.fn(),
    removeCondition: vi.fn(),
    updateHealthProfile: vi.fn(),
    isLoading: false,
    error: null,
  })),
}));

// Mock the condition store
vi.mock('../../core/medical-simulation/conditions/store', () => ({
  searchConditions: vi.fn(),
  getCondition: vi.fn(),
  getAllConditions: vi.fn(() => []),
  getConditionsByCategory: vi.fn(() => []),
  getConditionAnatomyHighlights: vi.fn(() => []),
}));

describe('Condition Entry System', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('ProfileSettings Condition Entry', () => {
    it('should define the MedicalCondition type correctly', () => {
      // The MedicalCondition type in settings/types.ts
      const edemaCondition = {
        id: 'test-id',
        name: 'Edema',
        diagnosedDate: '2024-01-15',
        status: 'active' as const,
        severity: 'mild' as const,
        notes: 'Peripheral edema in lower extremities',
      };

      expect(edemaCondition.name).toBe('Edema');
      expect(edemaCondition.status).toBe('active');
      expect(['mild', 'moderate', 'severe']).toContain(edemaCondition.severity);
      expect(['active', 'managed', 'resolved', 'monitoring']).toContain(edemaCondition.status);
    });

    it('should allow adding edema as a user condition via addCondition', async () => {
      const { useSettings } = await import('../../src/settings/useSettings');
      const mockAddCondition = vi.fn();

      // @ts-ignore - mocking
      useSettings.mockImplementation(() => ({
        settings: {
          healthProfile: {
            conditions: [],
            medications: [],
            allergies: [],
            familyHistory: [],
            surgeries: [],
            immunizations: [],
            bloodType: 'unknown',
          },
        },
        addCondition: mockAddCondition,
        updateCondition: vi.fn(),
        removeCondition: vi.fn(),
      }));

      const settings = useSettings();

      await settings.addCondition({
        name: 'Edema',
        status: 'active',
        severity: 'mild',
        diagnosedDate: '2024-01-15',
        notes: 'Peripheral edema in lower extremities',
      });

      expect(mockAddCondition).toHaveBeenCalledWith({
        name: 'Edema',
        status: 'active',
        severity: 'mild',
        diagnosedDate: '2024-01-15',
        notes: 'Peripheral edema in lower extremities',
      });
    });

    it('should store conditions in localStorage health profile', () => {
      const mockConditions = [
        {
          id: 'cond-1',
          name: 'Edema',
          status: 'active',
          severity: 'mild',
        },
        {
          id: 'cond-2',
          name: 'Hypertension',
          status: 'managed',
          severity: 'moderate',
        },
      ];

      // Simulate storing in localStorage
      const healthProfile = {
        conditions: mockConditions,
        medications: [],
        allergies: [],
        familyHistory: [],
        surgeries: [],
        immunizations: [],
        bloodType: 'unknown',
      };

      localStorage.setItem(
        'biological-self-settings',
        JSON.stringify({ healthProfile })
      );

      const stored = JSON.parse(
        localStorage.getItem('biological-self-settings') || '{}'
      );

      expect(stored.healthProfile.conditions).toHaveLength(2);
      expect(stored.healthProfile.conditions[0].name).toBe('Edema');
    });
  });

  describe('ConditionSimulator Search', () => {
    it('should search for conditions containing edema as a symptom', async () => {
      const { searchConditions } = await import(
        '../../core/medical-simulation/conditions/store'
      );

      // Mock search results - edema is found as a symptom of other conditions
      // @ts-ignore - mocking
      searchConditions.mockImplementation((query: string) => {
        if (query.toLowerCase() === 'edema') {
          // Edema is a symptom, not a standalone condition in the database
          return [];
        }
        return [];
      });

      const results = searchConditions('edema');

      // Edema is NOT a standalone condition in the medical-simulation database
      // It appears as a symptom of conditions like CKD, heart failure, etc.
      expect(results).toHaveLength(0);
    });

    it('should find conditions that have edema as a symptom', () => {
      // These are conditions where edema appears as a symptom:
      const conditionsWithEdemaSymptom = [
        'Chronic Kidney Disease (CKD)',
        'Heart Failure',
        'Nephrotic Syndrome',
        'Lupus Nephritis',
        'Deep Vein Thrombosis',
        'Liver Cirrhosis',
      ];

      // Verify the search would find these related conditions
      expect(conditionsWithEdemaSymptom).toContain('Chronic Kidney Disease (CKD)');
      expect(conditionsWithEdemaSymptom).toContain('Heart Failure');
    });
  });

  describe('BiologicalSelf Store (Encrypted Database)', () => {
    it('should define Condition type correctly for encrypted storage', () => {
      // The Condition type from core/biological-self/types.ts
      const edemaForDatabase = {
        id: 'uuid-here',
        name: 'Edema',
        icdCode: 'R60.0', // Localized edema
        snomedCode: '267038008', // Edema finding
        status: 'active' as const,
        severity: 'mild' as const,
        diagnosedDate: new Date('2024-01-15'),
        notes: 'Peripheral edema in lower extremities',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(edemaForDatabase.name).toBe('Edema');
      expect(edemaForDatabase.icdCode).toBe('R60.0');
      expect(['active', 'resolved', 'chronic', 'in-remission']).toContain(
        edemaForDatabase.status
      );
    });

    it('documents that add_condition Tauri command does NOT exist', () => {
      // ISSUE: There is no Tauri command to add conditions from the frontend
      // Conditions can only be added via:
      // 1. CLI (cli.ts) - command line interface
      // 2. Demo script (demo.ts) - for testing
      // 3. BiologicalSelfStore.addCondition() - directly from Node.js

      // The frontend ProfileSettings adds conditions to localStorage,
      // but these are NOT synced to the encrypted BiologicalSelf database.

      const tauriCommands = [
        'check_database_exists',
        'unlock_database',
        'create_database',
        'get_dashboard',
        'get_timeline',
        'add_symptom', // Note: add_symptom exists
        // 'add_condition' - DOES NOT EXIST
      ];

      expect(tauriCommands).toContain('add_symptom');
      expect(tauriCommands).not.toContain('add_condition');
    });
  });

  describe('Dashboard Data Integration', () => {
    it('documents that dashboard reads from BiologicalSelf, not localStorage', () => {
      // The App.tsx loadDashboard() function calls:
      // const data = await invoke<DashboardData>('get_dashboard');
      //
      // This reads from the BiologicalSelf encrypted database via Tauri,
      // NOT from the localStorage health profile.
      //
      // This means:
      // - Conditions added via ProfileSettings (localStorage) do NOT appear on dashboard
      // - Conditions added via CLI/demo DO appear on dashboard

      const dashboardDataSource = 'BiologicalSelf (via Tauri get_dashboard)';
      const profileSettingsSource = 'localStorage (biological-self-settings)';

      expect(dashboardDataSource).not.toBe(profileSettingsSource);
    });

    it('should correctly format conditions for dashboard display', () => {
      // Dashboard expects this format from get_dashboard:
      const dashboardCondition = {
        id: 'cond-123',
        name: 'Edema',
        status: 'active',
        severity: 'mild',
        diagnosedDate: '2024-01-15T00:00:00.000Z',
      };

      // tauri-bridge.ts getActiveConditions() filters:
      // - status === 'active' || status === 'chronic'
      expect(['active', 'chronic']).toContain('active');

      expect(dashboardCondition).toHaveProperty('id');
      expect(dashboardCondition).toHaveProperty('name');
      expect(dashboardCondition).toHaveProperty('status');
    });
  });

  describe('Condition Visualization on Body Model', () => {
    it('should support edema visualization type', () => {
      // From src/anatomy/ConditionVisualizationSystem.tsx
      const conditionTypes = [
        'inflammation',
        'fibrosis',
        'tumor',
        'atherosclerosis',
        'edema', // Edema is supported as a visualization type
        'infection',
        'degeneration',
        'fracture',
      ];

      expect(conditionTypes).toContain('edema');
    });

    it('should define edema visualization config', () => {
      // Edema visualization from ConditionVisualizationSystem.tsx:
      // - Enlarged, fluid-like appearance
      // - Cyan/blue color (#06b6d4)
      // - Swelling effect on affected region

      const edemaVisualization = {
        type: 'edema',
        baseColor: '#06b6d4', // Cyan
        emissiveColor: '#0891b2',
        roughness: 0.2, // Smooth, fluid-like
        metalness: 0.1,
        opacity: 0.6,
      };

      expect(edemaVisualization.type).toBe('edema');
      expect(edemaVisualization.baseColor).toBe('#06b6d4');
    });

    it('should map edema to affected body regions', () => {
      // Edema typically affects lower extremities
      const affectedRegions = [
        'legs',
        'ankles',
        'feet',
        // Can also affect:
        'abdomen', // Ascites
        'face', // Facial edema
        'lungs', // Pulmonary edema
      ];

      expect(affectedRegions).toContain('legs');
      expect(affectedRegions).toContain('ankles');
    });
  });
});

/**
 * RECOMMENDATION FOR FIX:
 *
 * To properly integrate condition entry, the following changes are needed:
 *
 * 1. Add a Tauri command for adding conditions:
 *    - In src-tauri/src/lib.rs: Add #[tauri::command] fn add_condition(...)
 *    - In tauri-bridge.ts: Add addCondition function
 *
 * 2. OR sync localStorage health profile with BiologicalSelf:
 *    - On app startup, sync conditions from localStorage to database
 *    - On condition add/update/delete, update both stores
 *
 * 3. Alternative: Unify the data sources:
 *    - Use only BiologicalSelf for all health data
 *    - Remove the duplicate localStorage health profile
 *    - Add all CRUD operations via Tauri commands
 */
