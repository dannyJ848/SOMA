import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  registerModule,
  getModule,
  hasModule,
  getAllModules,
  findBySpecialty,
  findByType,
  findDependentModules,
  searchModules,
  validatePrerequisites,
  checkCircularDependencies,
  getStatistics,
} from '../../core/education/registry';
import type { EducationalModule } from '../../core/education/types';

describe('Module Registration and Loading', () => {
  const mockModule: EducationalModule = {
    id: 'test-module-1',
    type: 'foundation',
    specialty: 'cardiology',
    title: 'Test Module',
    description: 'Test description',
    version: '1.0.0',
    lastUpdated: '2024-01-01',
    author: 'Test Author',
    prerequisites: [],
    learningObjectives: ['Objective 1'],
    estimatedTime: { 1: '10 min', 2: '15 min', 3: '20 min', 4: '25 min', 5: '30 min', 6: '45 min' },
    content: {
      1: { summary: 'Summary', keyPoints: ['Point 1'] },
      2: { summary: 'Summary', keyConcepts: [], keyPoints: [] },
      3: { summary: 'Summary', mechanisms: [], clinicalCorrelates: [] },
      4: { summary: 'Summary', molecularMechanisms: [], pathways: [], references: [] },
      5: { summary: 'Summary', researchFrontiers: [], references: [] },
      6: { summary: 'Summary', clinicalApproach: [], guidelines: [], references: [] },
    },
  };

  beforeEach(() => {
    // Clear registry before each test
    vi.clearAllMocks();
  });

  describe('Module Registration', () => {
    it('should register a new module', () => {
      registerModule(mockModule);
      expect(hasModule('test-module-1')).toBe(true);
    });

    it('should store module with correct ID', () => {
      registerModule(mockModule);
      const retrieved = getModule('test-module-1');
      expect(retrieved?.id).toBe('test-module-1');
    });

    it('should overwrite existing module with same ID', () => {
      const updatedModule = { ...mockModule, title: 'Updated Title' };
      registerModule(mockModule);
      registerModule(updatedModule);
      const retrieved = getModule('test-module-1');
      expect(retrieved?.title).toBe('Updated Title');
    });

    it('should index module by specialty', () => {
      registerModule(mockModule);
      const cardiologyModules = findBySpecialty('cardiology');
      expect(cardiologyModules.some((m) => m.id === 'test-module-1')).toBe(true);
    });

    it('should index module by type', () => {
      registerModule(mockModule);
      const foundationModules = findByType('foundation');
      expect(foundationModules.some((m) => m.id === 'test-module-1')).toBe(true);
    });
  });

  describe('Module Retrieval', () => {
    beforeEach(() => {
      registerModule(mockModule);
    });

    it('should retrieve module by ID', () => {
      const module = getModule('test-module-1');
      expect(module).toBeDefined();
      expect(module?.title).toBe('Test Module');
    });

    it('should return undefined for non-existent module', () => {
      const module = getModule('non-existent');
      expect(module).toBeUndefined();
    });

    it('should check if module exists', () => {
      expect(hasModule('test-module-1')).toBe(true);
      expect(hasModule('non-existent')).toBe(false);
    });

    it('should retrieve all modules', () => {
      const allModules = getAllModules();
      expect(allModules.length).toBeGreaterThan(0);
      expect(allModules.some((m) => m.id === 'test-module-1')).toBe(true);
    });
  });

  describe('Module Discovery', () => {
    const modules: EducationalModule[] = [
      { ...mockModule, id: 'cardio-1', specialty: 'cardiology', type: 'foundation' },
      { ...mockModule, id: 'cardio-2', specialty: 'cardiology', type: 'clinical-application' },
      { ...mockModule, id: 'neuro-1', specialty: 'neurology', type: 'foundation' },
      { ...mockModule, id: 'endo-1', specialty: 'endocrinology', type: 'specialty' },
    ];

    beforeEach(() => {
      modules.forEach((m) => registerModule(m));
    });

    it('should find modules by specialty', () => {
      const cardiologyModules = findBySpecialty('cardiology');
      expect(cardiologyModules).toHaveLength(2);
      expect(cardiologyModules.every((m) => m.specialty === 'cardiology')).toBe(true);
    });

    it('should find modules by type', () => {
      const foundationModules = findByType('foundation');
      expect(foundationModules.length).toBeGreaterThanOrEqual(2);
    });

    it('should return empty array for unknown specialty', () => {
      const modules = findBySpecialty('unknown-specialty' as any);
      expect(modules).toEqual([]);
    });

    it('should return empty array for unknown type', () => {
      const modules = findByType('unknown-type' as any);
      expect(modules).toEqual([]);
    });
  });

  describe('Prerequisite Management', () => {
    const prereqModule: EducationalModule = {
      ...mockModule,
      id: 'basic-anatomy',
      title: 'Basic Anatomy',
    };

    const dependentModule: EducationalModule = {
      ...mockModule,
      id: 'advanced-cardiology',
      title: 'Advanced Cardiology',
      prerequisites: ['basic-anatomy'],
    };

    it('should track dependent modules', () => {
      registerModule(prereqModule);
      registerModule(dependentModule);

      const dependents = findDependentModules('basic-anatomy');
      expect(dependents.some((m) => m.id === 'advanced-cardiology')).toBe(true);
    });

    it('should return empty array for module with no dependents', () => {
      registerModule(prereqModule);
      const dependents = findDependentModules('non-existent');
      expect(dependents).toEqual([]);
    });

    it('should validate prerequisites exist', () => {
      const invalidModule: EducationalModule = {
        ...mockModule,
        id: 'invalid-module',
        prerequisites: ['non-existent-prereq'],
      };
      registerModule(invalidModule);

      const validation = validatePrerequisites();
      expect(validation.valid).toBe(false);
      expect(validation.errors.length).toBeGreaterThan(0);
    });

    it('should validate all prerequisites exist', () => {
      registerModule(prereqModule);
      registerModule(dependentModule);

      const validation = validatePrerequisites();
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });
  });

  describe('Circular Dependency Detection', () => {
    it('should detect simple circular dependency', () => {
      const moduleA: EducationalModule = {
        ...mockModule,
        id: 'module-a',
        prerequisites: ['module-b'],
      };
      const moduleB: EducationalModule = {
        ...mockModule,
        id: 'module-b',
        prerequisites: ['module-a'],
      };

      registerModule(moduleA);
      registerModule(moduleB);

      const check = checkCircularDependencies();
      expect(check.valid).toBe(false);
      expect(check.cycles.length).toBeGreaterThan(0);
    });

    it('should detect complex circular dependency', () => {
      const moduleA: EducationalModule = {
        ...mockModule,
        id: 'module-a',
        prerequisites: ['module-b'],
      };
      const moduleB: EducationalModule = {
        ...mockModule,
        id: 'module-b',
        prerequisites: ['module-c'],
      };
      const moduleC: EducationalModule = {
        ...mockModule,
        id: 'module-c',
        prerequisites: ['module-a'],
      };

      registerModule(moduleA);
      registerModule(moduleB);
      registerModule(moduleC);

      const check = checkCircularDependencies();
      expect(check.valid).toBe(false);
    });

    it('should pass validation with no circular dependencies', () => {
      const moduleA: EducationalModule = {
        ...mockModule,
        id: 'module-a',
        prerequisites: [],
      };
      const moduleB: EducationalModule = {
        ...mockModule,
        id: 'module-b',
        prerequisites: ['module-a'],
      };
      const moduleC: EducationalModule = {
        ...mockModule,
        id: 'module-c',
        prerequisites: ['module-b'],
      };

      registerModule(moduleA);
      registerModule(moduleB);
      registerModule(moduleC);

      const check = checkCircularDependencies();
      expect(check.valid).toBe(true);
      expect(check.cycles).toHaveLength(0);
    });
  });

  describe('Module Search', () => {
    const modules: EducationalModule[] = [
      { ...mockModule, id: 'search-1', title: 'Heart Anatomy', description: 'Learn about the heart' },
      { ...mockModule, id: 'search-2', title: 'Blood Pressure', description: 'Understanding BP' },
      { ...mockModule, id: 'search-3', title: 'Diabetes Basics', description: 'Learn about diabetes' },
    ];

    beforeEach(() => {
      modules.forEach((m) => registerModule(m));
    });

    it('should search by title', () => {
      const results = searchModules('heart');
      expect(results.some((m) => m.title.toLowerCase().includes('heart'))).toBe(true);
    });

    it('should search by description', () => {
      const results = searchModules('understanding');
      expect(results.some((m) => m.description.toLowerCase().includes('understanding'))).toBe(true);
    });

    it('should search case-insensitively', () => {
      const results = searchModules('HEART');
      expect(results.some((m) => m.title.toLowerCase().includes('heart'))).toBe(true);
    });

    it('should return empty array for no matches', () => {
      const results = searchModules('xyzabc');
      expect(results).toEqual([]);
    });

    it('should search learning objectives', () => {
      const moduleWithObjective: EducationalModule = {
        ...mockModule,
        id: 'search-4',
        learningObjectives: ['Understand cardiac output'],
      };
      registerModule(moduleWithObjective);

      const results = searchModules('cardiac output');
      expect(results.some((m) => m.id === 'search-4')).toBe(true);
    });
  });

  describe('Statistics', () => {
    beforeEach(() => {
      const modules: EducationalModule[] = [
        { ...mockModule, id: 'stat-1', type: 'foundation', specialty: 'cardiology' },
        { ...mockModule, id: 'stat-2', type: 'foundation', specialty: 'cardiology' },
        { ...mockModule, id: 'stat-3', type: 'specialty', specialty: 'neurology' },
      ];
      modules.forEach((m) => registerModule(m));
    });

    it('should calculate total module count', () => {
      const stats = getStatistics();
      expect(stats.totalModules).toBeGreaterThanOrEqual(3);
    });

    it('should count modules by type', () => {
      const stats = getStatistics();
      expect(stats.byType.foundation).toBeGreaterThanOrEqual(2);
      expect(stats.byType.specialty).toBeGreaterThanOrEqual(1);
    });

    it('should count modules by specialty', () => {
      const stats = getStatistics();
      expect(stats.bySpecialty.cardiology).toBeGreaterThanOrEqual(2);
      expect(stats.bySpecialty.neurology).toBeGreaterThanOrEqual(1);
    });
  });
});
