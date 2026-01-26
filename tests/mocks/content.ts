/**
 * Content Mock
 *
 * Mock data and functions for educational content testing.
 */

import { vi, Mock } from 'vitest';

// ============================================================================
// Types (Mirroring core/content/types.ts)
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface LevelContent {
  level: ComplexityLevel;
  summary: string;
  explanation: string;
  keyTerms?: Array<{
    term: string;
    definition: string;
    pronunciation?: string;
  }>;
  analogies?: string[];
  clinicalNotes?: string;
}

export interface Citation {
  id: string;
  type: 'textbook' | 'journal' | 'website' | 'guideline';
  title: string;
  source: string;
  chapter?: string;
  url?: string;
  license?: string;
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'animation' | '3d-model';
  url: string;
  caption: string;
  altText: string;
  license: string;
  levelAvailability?: ComplexityLevel[];
}

export interface CrossReference {
  targetId: string;
  targetType: 'structure' | 'system' | 'condition' | 'process';
  relationship: 'parent' | 'child' | 'related' | 'prerequisite';
  label: string;
}

export interface ContentTags {
  systems?: string[];
  structures?: string[];
  topics?: string[];
  keywords?: string[];
  clinicalRelevance?: 'critical' | 'high' | 'moderate' | 'low';
  examRelevance?: {
    usmle?: boolean;
    shelf?: string[];
  };
}

export interface EducationalContent {
  id: string;
  type: 'structure' | 'system' | 'process' | 'condition' | 'medication';
  name: string;
  alternateNames?: string[];
  fmaId?: string;
  levels: Record<ComplexityLevel, LevelContent>;
  media: MediaAsset[];
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;
  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

export interface PartialEducationalContent extends Omit<EducationalContent, 'levels'> {
  levels: Partial<Record<ComplexityLevel, LevelContent>>;
  missingLevels?: ComplexityLevel[];
}

// ============================================================================
// Mock Data
// ============================================================================

export const mockHeartContent: EducationalContent = {
  id: 'structure-heart-001',
  type: 'structure',
  name: 'Heart',
  alternateNames: ['Cardiac muscle', 'Cor'],
  fmaId: 'FMA:7088',
  levels: {
    1: {
      level: 1,
      summary: 'The heart is a muscle that pumps blood through your body.',
      explanation: 'Think of your heart like a pump that never stops working. It squeezes and relaxes about 100,000 times every day.',
      keyTerms: [
        { term: 'pump', definition: 'Something that pushes liquid from one place to another' },
      ],
      analogies: ['Your heart is like a washing machine that squeezes water through clothes.'],
    },
    2: {
      level: 2,
      summary: 'The heart is a muscular organ with four chambers that pumps blood throughout the circulatory system.',
      explanation: 'The heart has four chambers: two upper chambers called atria and two lower chambers called ventricles.',
      keyTerms: [
        { term: 'atrium', definition: 'Upper chamber of the heart', pronunciation: 'AY-tree-um' },
        { term: 'ventricle', definition: 'Lower chamber of the heart', pronunciation: 'VEN-tri-kul' },
      ],
    },
    3: {
      level: 3,
      summary: 'The heart is a four-chambered muscular organ composed primarily of cardiac muscle.',
      explanation: 'The heart consists of three layers: epicardium, myocardium, and endocardium.',
      keyTerms: [
        { term: 'myocardium', definition: 'The muscular middle layer of the heart wall' },
      ],
    },
    4: {
      level: 4,
      summary: 'The heart is a biomechanical pump whose function depends on electrical conduction.',
      explanation: 'Cardiac function is governed by intrinsic automaticity originating in the sinoatrial node.',
      keyTerms: [
        { term: 'automaticity', definition: 'Ability to spontaneously depolarize' },
      ],
      clinicalNotes: 'Disruption of conduction pathways leads to arrhythmias.',
    },
    5: {
      level: 5,
      summary: 'The heart integrates molecular, cellular, and organ-level physiology.',
      explanation: 'Clinical cardiac assessment integrates ECG interpretation, echocardiographic parameters, and biomarkers.',
      keyTerms: [
        { term: 'ejection fraction', definition: 'Percentage of blood ejected from the ventricle' },
      ],
      clinicalNotes: 'Guideline-directed medical therapy for HFrEF: ACE-I/ARB/ARNI, beta-blocker.',
    },
  },
  media: [],
  citations: [
    {
      id: 'openstax-ap-ch19',
      type: 'textbook',
      title: 'The Cardiovascular System: The Heart',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '19',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    {
      targetId: 'system-cardiovascular',
      targetType: 'system',
      relationship: 'parent',
      label: 'Cardiovascular System',
    },
  ],
  tags: {
    systems: ['cardiovascular'],
    structures: ['FMA:7088'],
    topics: ['anatomy', 'physiology'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2026-01-20T00:00:00.000Z',
  updatedAt: '2026-01-20T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const mockLungContent: EducationalContent = {
  id: 'structure-lung-001',
  type: 'structure',
  name: 'Lungs',
  alternateNames: ['Pulmonary tissue', 'Pulmo'],
  levels: {
    1: {
      level: 1,
      summary: 'The lungs are organs that help you breathe.',
      explanation: 'When you breathe in, air goes into your lungs. The lungs take oxygen from the air.',
      keyTerms: [
        { term: 'breathing', definition: 'Moving air in and out of your lungs' },
      ],
    },
    2: {
      level: 2,
      summary: 'The lungs are paired organs in the chest that exchange oxygen and carbon dioxide.',
      explanation: 'The right lung has three lobes, while the left lung has two lobes.',
      keyTerms: [
        { term: 'lobe', definition: 'A section of the lung', pronunciation: 'LOHB' },
      ],
    },
    3: {
      level: 3,
      summary: 'The lungs perform gas exchange through millions of alveoli.',
      explanation: 'Alveoli are tiny air sacs where oxygen enters and carbon dioxide leaves the blood.',
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny air sacs where gas exchange occurs' },
      ],
    },
    4: {
      level: 4,
      summary: 'Pulmonary function depends on ventilation-perfusion matching.',
      explanation: 'Optimal gas exchange requires matching of ventilation to blood flow.',
      keyTerms: [
        { term: 'V/Q ratio', definition: 'Ratio of ventilation to perfusion' },
      ],
    },
    5: {
      level: 5,
      summary: 'Pulmonary physiology integrates mechanics, gas exchange, and regulation.',
      explanation: 'Clinical assessment includes spirometry, ABG analysis, and imaging.',
      keyTerms: [
        { term: 'FEV1/FVC', definition: 'Ratio used to diagnose obstructive lung disease' },
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['respiratory'],
    topics: ['anatomy', 'physiology'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2026-01-20T00:00:00.000Z',
  updatedAt: '2026-01-20T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const mockPartialContent: PartialEducationalContent = {
  id: 'structure-kidney-draft',
  type: 'structure',
  name: 'Kidney',
  levels: {
    1: {
      level: 1,
      summary: 'The kidneys filter your blood and make urine.',
      explanation: 'You have two kidneys. They clean your blood and remove waste.',
      keyTerms: [
        { term: 'filter', definition: 'To separate and remove unwanted things' },
      ],
    },
    2: {
      level: 2,
      summary: 'The kidneys are bean-shaped organs that filter blood and produce urine.',
      explanation: 'Each kidney contains about one million nephrons, the functional units.',
      keyTerms: [
        { term: 'nephron', definition: 'The functional unit of the kidney' },
      ],
    },
  },
  missingLevels: [3, 4, 5],
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['urinary'],
    topics: ['anatomy'],
  },
  createdAt: '2026-01-20T00:00:00.000Z',
  updatedAt: '2026-01-20T00:00:00.000Z',
  version: 1,
  status: 'draft',
};

// ============================================================================
// Mock Content Store
// ============================================================================

export interface MockContentStore {
  getContent: Mock<(id: string) => EducationalContent | null>;
  getAllContent: Mock<() => EducationalContent[]>;
  searchContent: Mock<(query: string) => EducationalContent[]>;
  getContentForLevel: Mock<(id: string, level: ComplexityLevel) => LevelContent | null>;
  saveContent: Mock<(content: EducationalContent) => void>;
  deleteContent: Mock<(id: string) => void>;
  reset: () => void;
}

export function createContentStoreMock(): MockContentStore {
  const contentMap = new Map<string, EducationalContent>([
    [mockHeartContent.id, mockHeartContent],
    [mockLungContent.id, mockLungContent],
  ]);

  const mock: MockContentStore = {
    getContent: vi.fn((id: string): EducationalContent | null => {
      return contentMap.get(id) || null;
    }),

    getAllContent: vi.fn((): EducationalContent[] => {
      return Array.from(contentMap.values());
    }),

    searchContent: vi.fn((query: string): EducationalContent[] => {
      const q = query.toLowerCase();
      return Array.from(contentMap.values()).filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.alternateNames?.some((n) => n.toLowerCase().includes(q))
      );
    }),

    getContentForLevel: vi.fn((id: string, level: ComplexityLevel): LevelContent | null => {
      const content = contentMap.get(id);
      if (!content) return null;
      return content.levels[level] || null;
    }),

    saveContent: vi.fn((content: EducationalContent): void => {
      contentMap.set(content.id, content);
    }),

    deleteContent: vi.fn((id: string): void => {
      contentMap.delete(id);
    }),

    reset: (): void => {
      contentMap.clear();
      contentMap.set(mockHeartContent.id, mockHeartContent);
      contentMap.set(mockLungContent.id, mockLungContent);
      vi.clearAllMocks();
    },
  };

  return mock;
}

export const contentStoreMock = createContentStoreMock();

export default contentStoreMock;
