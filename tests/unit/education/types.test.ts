import { describe, it, expect, beforeEach } from 'vitest';
import {
  COMPLEXITY_LEVELS,
  type EducationalModule,
  type ModuleContent,
  type ComplexityLevel,
} from '../../../core/education/types';

describe('Education Module Types', () => {
  describe('COMPLEXITY_LEVELS', () => {
    it('should have 6 complexity levels', () => {
      expect(Object.keys(COMPLEXITY_LEVELS)).toHaveLength(6);
    });

    it('should have correct level numbers (1-6)', () => {
      const levels = Object.keys(COMPLEXITY_LEVELS).map(Number).sort((a, b) => a - b);
      expect(levels).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should have Foundation at level 1', () => {
      expect(COMPLEXITY_LEVELS[1].name).toBe('Foundation');
      expect(COMPLEXITY_LEVELS[1].readingLevel).toBe('8th grade');
    });

    it('should have Clinical at level 6', () => {
      expect(COMPLEXITY_LEVELS[6].name).toBe('Clinical');
      expect(COMPLEXITY_LEVELS[6].readingLevel).toBe('Physician');
    });

    it('should have correct target audiences for each level', () => {
      expect(COMPLEXITY_LEVELS[1].targetAudience).toBe('General public, no medical background');
      expect(COMPLEXITY_LEVELS[3].targetAudience).toBe('High school biology completed');
      expect(COMPLEXITY_LEVELS[6].targetAudience).toBe('Medical professionals');
    });

    it('should have increasing reading levels', () => {
      const readingLevels = [
        COMPLEXITY_LEVELS[1].readingLevel,
        COMPLEXITY_LEVELS[2].readingLevel,
        COMPLEXITY_LEVELS[3].readingLevel,
        COMPLEXITY_LEVELS[4].readingLevel,
        COMPLEXITY_LEVELS[5].readingLevel,
        COMPLEXITY_LEVELS[6].readingLevel,
      ];
      
      expect(readingLevels).toEqual([
        '8th grade',
        '10th grade',
        '12th grade',
        'College',
        'Graduate',
        'Physician',
      ]);
    });
  });

  describe('Module Content Types', () => {
    const mockModuleContent: ModuleContent = {
      1: {
        summary: 'Simple summary',
        keyPoints: ['Point 1', 'Point 2'],
        analogy: 'Simple analogy',
      },
      2: {
        summary: 'Developing summary',
        keyConcepts: [{ term: 'Term 1', explanation: 'Explanation 1' }],
        keyPoints: ['Point 1'],
      },
      3: {
        summary: 'Standard summary',
        mechanisms: [{ name: 'Mechanism 1', description: 'Description' }],
        clinicalCorrelates: ['Correlate 1'],
      },
      4: {
        summary: 'Advanced summary',
        molecularMechanisms: [{ pathway: 'Pathway', defect: 'Defect', consequence: 'Consequence' }],
        pathways: [{ name: 'Pathway', steps: ['Step 1'], regulation: 'Regulation' }],
        references: ['Ref 1'],
      },
      5: {
        summary: 'Expert summary',
        researchFrontiers: ['Frontier 1'],
        references: ['Ref 1'],
      },
      6: {
        summary: 'Clinical summary',
        clinicalApproach: ['Approach 1'],
        guidelines: ['Guideline 1'],
        references: ['Ref 1'],
      },
    };

    it('should validate Foundation content structure', () => {
      expect(mockModuleContent[1]).toHaveProperty('summary');
      expect(mockModuleContent[1]).toHaveProperty('keyPoints');
      expect(Array.isArray(mockModuleContent[1].keyPoints)).toBe(true);
    });

    it('should validate Clinical content structure', () => {
      expect(mockModuleContent[6]).toHaveProperty('summary');
      expect(mockModuleContent[6]).toHaveProperty('clinicalApproach');
      expect(mockModuleContent[6]).toHaveProperty('guidelines');
      expect(mockModuleContent[6]).toHaveProperty('references');
    });
  });

  describe('Educational Module', () => {
    const mockModule: EducationalModule = {
      id: 'test-module-1',
      type: 'foundation',
      specialty: 'cardiology',
      title: 'Test Module',
      description: 'Test description',
      version: '1.0.0',
      lastUpdated: '2024-01-01',
      author: 'Test Author',
      prerequisites: ['prereq-1'],
      learningObjectives: ['Objective 1', 'Objective 2'],
      estimatedTime: {
        1: '10 min',
        2: '15 min',
        3: '20 min',
        4: '25 min',
        5: '30 min',
        6: '45 min',
      },
      content: {
        1: { summary: 'Summary', keyPoints: ['Point 1'] },
        2: { summary: 'Summary', keyConcepts: [], keyPoints: [] },
        3: { summary: 'Summary', mechanisms: [], clinicalCorrelates: [] },
        4: { summary: 'Summary', molecularMechanisms: [], pathways: [], references: [] },
        5: { summary: 'Summary', researchFrontiers: [], references: [] },
        6: { summary: 'Summary', clinicalApproach: [], guidelines: [], references: [] },
      },
    };

    it('should have required metadata fields', () => {
      expect(mockModule.id).toBeDefined();
      expect(mockModule.title).toBeDefined();
      expect(mockModule.description).toBeDefined();
      expect(mockModule.version).toBeDefined();
      expect(mockModule.author).toBeDefined();
    });

    it('should have all complexity levels in estimatedTime', () => {
      const levels: ComplexityLevel[] = [1, 2, 3, 4, 5, 6];
      levels.forEach((level) => {
        expect(mockModule.estimatedTime[level]).toBeDefined();
      });
    });

    it('should have all complexity levels in content', () => {
      const levels: ComplexityLevel[] = [1, 2, 3, 4, 5, 6];
      levels.forEach((level) => {
        expect(mockModule.content[level]).toBeDefined();
      });
    });

    it('should validate module type values', () => {
      const validTypes = [
        'foundation',
        'clinical-application',
        'specialty',
        'subspecialty',
        'concept',
        'procedure',
        'medication',
        'lifestyle',
      ];
      expect(validTypes).toContain(mockModule.type);
    });

    it('should validate specialty values', () => {
      const validSpecialties = [
        'cardiology',
        'endocrinology',
        'gastroenterology',
        'neurology',
        'orthopedics',
        'oncology',
        'psychiatry',
        'pulmonology',
        'nephrology',
        'hematology',
      ];
      expect(validSpecialties).toContain(mockModule.specialty);
    });
  });

  describe('Learning Objectives', () => {
    it('should support array of learning objectives', () => {
      const objectives = [
        'Understand basic heart anatomy',
        'Identify major blood vessels',
        'Describe the cardiac cycle',
      ];
      expect(objectives).toHaveLength(3);
      objectives.forEach((obj) => {
        expect(typeof obj).toBe('string');
        expect(obj.length).toBeGreaterThan(0);
      });
    });

    it('should support SMART learning objectives format', () => {
      const smartObjective = 'By the end of this module, you will be able to identify the four chambers of the heart with 90% accuracy';
      expect(smartObjective).toContain('you will be able to');
    });
  });

  describe('Prerequisites', () => {
    it('should handle empty prerequisites array', () => {
      const noPrereqs: string[] = [];
      expect(noPrereqs).toHaveLength(0);
    });

    it('should handle multiple prerequisites', () => {
      const prereqs = ['module-1', 'module-2', 'module-3'];
      expect(prereqs).toHaveLength(3);
      prereqs.forEach((prereq) => {
        expect(typeof prereq).toBe('string');
      });
    });
  });

  describe('Medical Specialties', () => {
    const allSpecialties = [
      'cardiology',
      'endocrinology',
      'gastroenterology',
      'neurology',
      'rheumatology',
      'pulmonology',
      'nephrology',
      'hematology',
      'infectious-disease',
      'oncology',
      'psychiatry',
      'dermatology',
      'ophthalmology',
      'ent',
      'orthopedics',
      'obgyn',
      'urology',
      'allergy-immunology',
      'sports-medicine',
      'physical-medicine',
      'emergency-medicine',
      'critical-care',
      'anesthesiology',
      'pathology',
      'radiology',
      'general-practice',
    ];

    it('should have 26 medical specialties', () => {
      expect(allSpecialties).toHaveLength(26);
    });

    it('should have kebab-case for multi-word specialties', () => {
      expect(allSpecialties).toContain('infectious-disease');
      expect(allSpecialties).toContain('allergy-immunology');
      expect(allSpecialties).toContain('sports-medicine');
    });
  });
});
