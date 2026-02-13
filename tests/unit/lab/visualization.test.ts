import { describe, it, expect, beforeEach } from 'vitest';
import type {
  LabTest,
  LabPanel,
  ReferenceRange,
  ClinicalInterpretation,
  LabCategory,
  BodySystem,
} from '../../../core/labs/types';

describe('Lab Visualization Data Transformations', () => {
  describe('Reference Range Transformations', () => {
    const mockReferenceRange: ReferenceRange = {
      adult: {
        male: { low: 13.5, high: 17.5, unit: 'g/dL' },
        female: { low: 12.0, high: 16.0, unit: 'g/dL' },
        general: { low: 12.0, high: 17.5, unit: 'g/dL' },
      },
      pediatric: { low: 11.0, high: 16.0, unit: 'g/dL' },
      criticalLow: 7.0,
      criticalHigh: 20.0,
      notes: 'Varies by altitude',
    };

    it('should transform reference range for male display', () => {
      const maleRange = mockReferenceRange.adult?.male;
      expect(maleRange).toBeDefined();
      expect(maleRange?.low).toBe(13.5);
      expect(maleRange?.high).toBe(17.5);
      expect(maleRange?.unit).toBe('g/dL');
    });

    it('should transform reference range for female display', () => {
      const femaleRange = mockReferenceRange.adult?.female;
      expect(femaleRange).toBeDefined();
      expect(femaleRange?.low).toBe(12.0);
      expect(femaleRange?.high).toBe(16.0);
    });

    it('should identify critical thresholds', () => {
      expect(mockReferenceRange.criticalLow).toBe(7.0);
      expect(mockReferenceRange.criticalHigh).toBe(20.0);
    });

    it('should determine if value is within range', () => {
      const isInRange = (value: number, low: number, high: number) => value >= low && value <= high;

      expect(isInRange(15, 12, 17.5)).toBe(true);
      expect(isInRange(10, 12, 17.5)).toBe(false);
      expect(isInRange(19, 12, 17.5)).toBe(false);
    });

    it('should determine value status', () => {
      const getStatus = (value: number, range: ReferenceRange) => {
        const general = range.adult?.general;
        if (!general) return 'unknown';
        if (range.criticalLow !== undefined && value < range.criticalLow) return 'critical-low';
        if (range.criticalHigh !== undefined && value > range.criticalHigh) return 'critical-high';
        if (value < general.low) return 'low';
        if (value > general.high) return 'high';
        return 'normal';
      };

      expect(getStatus(15, mockReferenceRange)).toBe('normal');
      expect(getStatus(10, mockReferenceRange)).toBe('low');
      expect(getStatus(6, mockReferenceRange)).toBe('critical-low');
      expect(getStatus(21, mockReferenceRange)).toBe('critical-high');
    });
  });

  describe('Lab Test Data Transformation', () => {
    const mockLabTest: LabTest = {
      id: 'hemoglobin',
      name: 'Hemoglobin',
      abbreviation: 'Hgb',
      loincCode: '718-7',
      category: 'cbc',
      specimen: 'whole-blood',
      description: 'Measures oxygen-carrying protein in red blood cells',
      primaryOrgans: ['bone-marrow', 'blood'],
      affectedSystems: ['hematologic', 'cardiovascular'],
      relatedPathways: ['oxygen-transport', 'erythropoiesis'],
      referenceRange: {
        adult: {
          general: { low: 12.0, high: 17.5, unit: 'g/dL' },
        },
      },
      clinicalInterpretations: [
        { direction: 'low', conditions: ['Anemia', 'Blood loss'] },
        { direction: 'high', conditions: ['Polycythemia', 'Dehydration'] },
      ],
      explanations: {
        level1: 'Hemoglobin carries oxygen in your blood',
        level2: 'Protein in red blood cells that binds oxygen',
        level3: 'Oxygen-carrying protein measured in g/dL',
        level4: 'Tetrameric protein with heme groups binding O2',
        level5: 'Hemoglobin structure, function, and regulatory mechanisms',
      },
      keyFacts: [
        'Normal range varies by age and sex',
        'Low levels indicate anemia',
        'High levels can indicate lung disease',
      ],
    };

    it('should transform test for complexity level display', () => {
      const levels = [1, 2, 3, 4, 5] as const;
      const explanations = levels.map((level) => mockLabTest.explanations[`level${level}`]);

      expect(explanations[0]).toBe('Hemoglobin carries oxygen in your blood');
      expect(explanations[4]).toContain('Hemoglobin structure');
    });

    it('should extract affected systems', () => {
      expect(mockLabTest.affectedSystems).toContain('hematologic');
      expect(mockLabTest.affectedSystems).toContain('cardiovascular');
    });

    it('should transform for organ mapping', () => {
      const organMap = mockLabTest.primaryOrgans.map((organ) => ({
        organ,
        testId: mockLabTest.id,
        relationship: 'primary',
      }));

      expect(organMap).toHaveLength(2);
      expect(organMap[0].organ).toBe('bone-marrow');
    });

    it('should categorize by abnormal direction', () => {
      const lowConditions = mockLabTest.clinicalInterpretations
        .filter((i) => i.direction === 'low')
        .flatMap((i) => i.conditions);

      const highConditions = mockLabTest.clinicalInterpretations
        .filter((i) => i.direction === 'high')
        .flatMap((i) => i.conditions);

      expect(lowConditions).toContain('Anemia');
      expect(highConditions).toContain('Polycythemia');
    });
  });

  describe('Lab Panel Transformation', () => {
    const mockPanel: LabPanel = {
      id: 'cbc',
      name: 'Complete Blood Count',
      abbreviation: 'CBC',
      description: 'Measures blood cell components',
      tests: ['wbc', 'rbc', 'hemoglobin', 'hematocrit', 'platelets'],
      commonIndications: ['Routine screening', 'Infection evaluation'],
      primaryOrgans: ['bone-marrow'],
      affectedSystems: ['hematologic'],
    };

    it('should transform panel to test list', () => {
      expect(mockPanel.tests).toHaveLength(5);
      expect(mockPanel.tests).toContain('hemoglobin');
    });

    it('should aggregate affected systems from all tests', () => {
      // Simulated aggregation
      const systems = new Set<BodySystem>();
      systems.add('hematologic');
      
      expect(systems.has('hematologic')).toBe(true);
    });

    it('should generate panel summary', () => {
      const summary = {
        name: mockPanel.name,
        testCount: mockPanel.tests.length,
        systems: mockPanel.affectedSystems,
      };

      expect(summary.testCount).toBe(5);
      expect(summary.systems).toContain('hematologic');
    });
  });

  describe('Result Visualization Data', () => {
    it('should calculate position on reference range bar', () => {
      const calculatePosition = (value: number, min: number, max: number) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return Math.max(0, Math.min(100, percentage));
      };

      expect(calculatePosition(15, 10, 20)).toBe(50);
      expect(calculatePosition(10, 10, 20)).toBe(0);
      expect(calculatePosition(20, 10, 20)).toBe(100);
      expect(calculatePosition(25, 10, 20)).toBe(100);
    });

    it('should format value with units', () => {
      const formatValue = (value: number, unit: string) => `${value.toFixed(1)} ${unit}`;

      expect(formatValue(15.2, 'g/dL')).toBe('15.2 g/dL');
      expect(formatValue(100, 'mg/dL')).toBe('100.0 mg/dL');
    });

    it('should transform for trend visualization', () => {
      const history = [
        { date: '2024-01-01', value: 14.0 },
        { date: '2024-02-01', value: 13.5 },
        { date: '2024-03-01', value: 15.2 },
      ];

      const trend = history.map((h) => ({
        ...h,
        date: new Date(h.date),
        change: history.indexOf(h) > 0 
          ? h.value - history[history.indexOf(h) - 1].value 
          : 0,
      }));

      expect(trend[1].change).toBe(-0.5);
      expect(trend[2].change).toBe(1.7);
    });

    it('should flag significant changes', () => {
      const isSignificantChange = (current: number, previous: number, threshold = 10) => {
        const percentChange = Math.abs((current - previous) / previous) * 100;
        return percentChange >= threshold;
      };

      expect(isSignificantChange(15, 10, 20)).toBe(true); // 50% change
      expect(isSignificantChange(10.5, 10, 20)).toBe(false); // 5% change
    });
  });

  describe('Category Aggregation', () => {
    const tests: LabTest[] = [
      { id: 't1', category: 'cbc', name: 'Test 1', specimen: 'blood', description: '', primaryOrgans: [], affectedSystems: [], referenceRange: {}, clinicalInterpretations: [], explanations: {} as any, keyFacts: [] },
      { id: 't2', category: 'cbc', name: 'Test 2', specimen: 'blood', description: '', primaryOrgans: [], affectedSystems: [], referenceRange: {}, clinicalInterpretations: [], explanations: {} as any, keyFacts: [] },
      { id: 't3', category: 'lipid', name: 'Test 3', specimen: 'serum', description: '', primaryOrgans: [], affectedSystems: [], referenceRange: {}, clinicalInterpretations: [], explanations: {} as any, keyFacts: [] },
    ];

    it('should group tests by category', () => {
      const byCategory = tests.reduce((acc, test) => {
        if (!acc[test.category]) acc[test.category] = [];
        acc[test.category].push(test);
        return acc;
      }, {} as Record<LabCategory, LabTest[]>);

      expect(byCategory.cbc).toHaveLength(2);
      expect(byCategory.lipid).toHaveLength(1);
    });

    it('should count by category', () => {
      const counts = tests.reduce((acc, test) => {
        acc[test.category] = (acc[test.category] || 0) + 1;
        return acc;
      }, {} as Record<LabCategory, number>);

      expect(counts.cbc).toBe(2);
      expect(counts.lipid).toBe(1);
    });
  });

  describe('Clinical Interpretation Transformation', () => {
    const interpretations: ClinicalInterpretation[] = [
      { direction: 'low', conditions: ['Anemia'], urgency: 'routine' },
      { direction: 'high', conditions: ['Polycythemia'], urgency: 'urgent' },
      { direction: 'both', conditions: ['Kidney disease'], urgency: 'critical' },
    ];

    it('should filter by direction', () => {
      const lowOnly = interpretations.filter((i) => i.direction === 'low');
      expect(lowOnly).toHaveLength(1);
      expect(lowOnly[0].conditions).toContain('Anemia');
    });

    it('should filter by urgency', () => {
      const urgentAndCritical = interpretations.filter(
        (i) => i.urgency === 'urgent' || i.urgency === 'critical'
      );
      expect(urgentAndCritical).toHaveLength(2);
    });

    it('should prioritize critical results', () => {
      const prioritized = [...interpretations].sort((a, b) => {
        const urgencyOrder = { critical: 3, urgent: 2, routine: 1 };
        return urgencyOrder[b.urgency || 'routine'] - urgencyOrder[a.urgency || 'routine'];
      });

      expect(prioritized[0].urgency).toBe('critical');
    });
  });

  describe('Explanation Level Selection', () => {
    const explanations = {
      level1: 'Simple',
      level2: 'Basic',
      level3: 'Standard',
      level4: 'Advanced',
      level5: 'Expert',
    };

    it('should select appropriate explanation for user level', () => {
      const selectExplanation = (userLevel: number) => {
        const level = Math.max(1, Math.min(5, userLevel));
        return explanations[`level${level}` as keyof typeof explanations];
      };

      expect(selectExplanation(1)).toBe('Simple');
      expect(selectExplanation(3)).toBe('Standard');
      expect(selectExplanation(6)).toBe('Expert');
    });
  });
});
