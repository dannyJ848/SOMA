/**
 * Educational Content Store
 *
 * Manages storage and retrieval of multi-level educational content.
 * Content is stored in JSON files organized by type and system.
 */

import {
  ComplexityLevel,
  EducationalContent,
  PartialEducationalContent,
  LevelContent,
  ContentValidation,
  ContentSearchQuery,
  ContentSearchResult,
  Citation,
  MediaAsset,
  CrossReference,
  COMPLEXITY_LEVEL_NAMES,
} from './types';

/**
 * Validates that a LevelContent object has required fields
 */
function validateLevelContent(level: ComplexityLevel, content: LevelContent): string[] {
  const issues: string[] = [];

  if (!content.summary || content.summary.trim().length === 0) {
    issues.push(`Level ${level} (${COMPLEXITY_LEVEL_NAMES[level]}): Missing summary`);
  }

  if (!content.explanation || content.explanation.trim().length === 0) {
    issues.push(`Level ${level} (${COMPLEXITY_LEVEL_NAMES[level]}): Missing explanation`);
  }

  if (content.summary && content.summary.length > 500) {
    issues.push(`Level ${level}: Summary exceeds 500 characters`);
  }

  // Key terms should have at least basic definitions
  if (content.keyTerms) {
    for (const term of content.keyTerms) {
      if (!term.definition || term.definition.trim().length === 0) {
        issues.push(`Level ${level}: Term "${term.term}" missing definition`);
      }
    }
  }

  return issues;
}

/**
 * Validates complete educational content
 */
export function validateContent(content: EducationalContent | PartialEducationalContent): ContentValidation {
  const issues: ContentValidation['issues'] = [];
  const missingLevels: ComplexityLevel[] = [];

  // Check for all 5 levels
  const allLevels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  for (const level of allLevels) {
    const levelContent = content.levels[level];

    if (!levelContent) {
      missingLevels.push(level);
      issues.push({
        level,
        field: 'levels',
        message: `Missing content for level ${level} (${COMPLEXITY_LEVEL_NAMES[level]})`,
        severity: 'error',
      });
    } else {
      // Validate the level content
      const levelIssues = validateLevelContent(level, levelContent);
      for (const issue of levelIssues) {
        issues.push({
          level,
          field: 'content',
          message: issue,
          severity: 'error',
        });
      }
    }
  }

  // Validate required fields
  if (!content.name || content.name.trim().length === 0) {
    issues.push({
      field: 'name',
      message: 'Content name is required',
      severity: 'error',
    });
  }

  if (!content.type) {
    issues.push({
      field: 'type',
      message: 'Content type is required',
      severity: 'error',
    });
  }

  // Warnings for optional but recommended fields
  if (!content.citations || content.citations.length === 0) {
    issues.push({
      field: 'citations',
      message: 'No citations provided',
      severity: 'warning',
    });
  }

  if (!content.tags?.systems || content.tags.systems.length === 0) {
    issues.push({
      field: 'tags.systems',
      message: 'No body systems tagged',
      severity: 'warning',
    });
  }

  return {
    isComplete: missingLevels.length === 0 && issues.filter(i => i.severity === 'error').length === 0,
    missingLevels,
    issues,
  };
}

/**
 * Creates a new partial content item with basic structure
 */
export function createPartialContent(
  id: string,
  name: string,
  type: EducationalContent['type'],
  initialLevel?: { level: ComplexityLevel; content: LevelContent }
): PartialEducationalContent {
  const now = new Date().toISOString();

  const levels: Partial<Record<ComplexityLevel, LevelContent>> = {};
  const missingLevels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  if (initialLevel) {
    levels[initialLevel.level] = initialLevel.content;
    const idx = missingLevels.indexOf(initialLevel.level);
    if (idx > -1) missingLevels.splice(idx, 1);
  }

  return {
    id,
    type,
    name,
    levels,
    media: [],
    citations: [],
    crossReferences: [],
    tags: {},
    createdAt: now,
    updatedAt: now,
    version: 1,
    status: 'draft',
    missingLevels,
  };
}

/**
 * Updates a specific level in content
 */
export function updateContentLevel(
  content: PartialEducationalContent,
  level: ComplexityLevel,
  levelContent: LevelContent
): PartialEducationalContent {
  const updated = { ...content };
  updated.levels = { ...updated.levels, [level]: levelContent };
  updated.updatedAt = new Date().toISOString();
  updated.version = (updated.version || 0) + 1;

  // Update missing levels
  if (updated.missingLevels) {
    updated.missingLevels = updated.missingLevels.filter(l => l !== level);
  }

  return updated;
}

/**
 * Converts partial content to complete content if all levels exist
 */
export function promoteToComplete(partial: PartialEducationalContent): EducationalContent | null {
  const validation = validateContent(partial);

  if (!validation.isComplete) {
    return null;
  }

  // Type assertion is safe because validation passed
  return {
    ...partial,
    levels: partial.levels as EducationalContent['levels'],
    media: partial.media || [],
    citations: partial.citations || [],
    crossReferences: partial.crossReferences || [],
    tags: partial.tags || {},
  } as EducationalContent;
}

/**
 * Adds a citation to content
 */
export function addCitation(
  content: PartialEducationalContent | EducationalContent,
  citation: Citation
): typeof content {
  return {
    ...content,
    citations: [...(content.citations || []), citation],
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Adds a media asset to content
 */
export function addMediaAsset(
  content: PartialEducationalContent | EducationalContent,
  media: MediaAsset
): typeof content {
  return {
    ...content,
    media: [...(content.media || []), media],
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Adds a cross-reference to content
 */
export function addCrossReference(
  content: PartialEducationalContent | EducationalContent,
  ref: CrossReference
): typeof content {
  return {
    ...content,
    crossReferences: [...(content.crossReferences || []), ref],
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Gets content for a specific complexity level, with fallback
 */
export function getContentForLevel(
  content: EducationalContent | PartialEducationalContent,
  targetLevel: ComplexityLevel,
  allowFallback: boolean = true
): LevelContent | null {
  // Try exact level first
  if (content.levels[targetLevel]) {
    return content.levels[targetLevel]!;
  }

  if (!allowFallback) {
    return null;
  }

  // Fallback: find closest lower level
  for (let level = targetLevel - 1; level >= 1; level--) {
    if (content.levels[level as ComplexityLevel]) {
      return content.levels[level as ComplexityLevel]!;
    }
  }

  // Last resort: find any level
  for (let level = targetLevel + 1; level <= 5; level++) {
    if (content.levels[level as ComplexityLevel]) {
      return content.levels[level as ComplexityLevel]!;
    }
  }

  return null;
}

/**
 * Searches content items
 */
export function searchContent(
  items: (EducationalContent | PartialEducationalContent)[],
  query: ContentSearchQuery
): ContentSearchResult[] {
  let results: ContentSearchResult[] = [];

  for (const item of items) {
    let score = 0;
    const matchedFields: string[] = [];

    // Filter by type
    if (query.type) {
      const types = Array.isArray(query.type) ? query.type : [query.type];
      if (!types.includes(item.type)) continue;
    }

    // Filter by status
    if (query.status && item.status !== query.status) continue;

    // Filter by level existence
    if (query.level && !item.levels[query.level]) continue;

    // Text search
    if (query.text) {
      const searchText = query.text.toLowerCase();

      // Search name
      if (item.name.toLowerCase().includes(searchText)) {
        score += 10;
        matchedFields.push('name');
      }

      // Search alternate names
      if (item.alternateNames?.some(n => n.toLowerCase().includes(searchText))) {
        score += 8;
        matchedFields.push('alternateNames');
      }

      // Search content at each level
      for (const [levelStr, levelContent] of Object.entries(item.levels)) {
        if (levelContent) {
          if (levelContent.summary.toLowerCase().includes(searchText)) {
            score += 5;
            matchedFields.push(`levels.${levelStr}.summary`);
          }
          if (levelContent.explanation.toLowerCase().includes(searchText)) {
            score += 3;
            matchedFields.push(`levels.${levelStr}.explanation`);
          }
        }
      }

      // Must have at least one match for text search
      if (score === 0) continue;
    }

    // Filter by systems
    if (query.systems && query.systems.length > 0) {
      const itemSystems = item.tags?.systems || [];
      if (!query.systems.some(s => itemSystems.includes(s))) continue;
      score += 2;
      matchedFields.push('tags.systems');
    }

    // Filter by structures
    if (query.structures && query.structures.length > 0) {
      const itemStructures = item.tags?.structures || [];
      if (!query.structures.some(s => itemStructures.includes(s))) continue;
      score += 2;
      matchedFields.push('tags.structures');
    }

    // Filter by tags
    if (query.tags && query.tags.length > 0) {
      const itemKeywords = item.tags?.keywords || [];
      if (!query.tags.some(t => itemKeywords.includes(t))) continue;
      score += 1;
      matchedFields.push('tags.keywords');
    }

    // Add to results
    results.push({
      content: item,
      score: score || 1,  // Minimum score of 1 if passed filters
      matchedFields,
    });
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  // Apply offset and limit
  if (query.offset) {
    results = results.slice(query.offset);
  }
  if (query.limit) {
    results = results.slice(0, query.limit);
  }

  return results;
}

/**
 * Generates a unique content ID
 */
export function generateContentId(type: EducationalContent['type'], name: string): string {
  const cleanName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const timestamp = Date.now().toString(36);

  return `${type}-${cleanName}-${timestamp}`;
}

/**
 * Example content structure for reference
 */
export const EXAMPLE_CONTENT: EducationalContent = {
  id: 'structure-heart-example',
  type: 'structure',
  name: 'Heart',
  alternateNames: ['Cardiac muscle', 'Cor'],
  fmaId: 'FMA:7088',

  levels: {
    1: {
      level: 1,
      summary: 'The heart is a muscle that pumps blood through your body.',
      explanation: 'Think of your heart like a pump that never stops working. It squeezes and relaxes about 100,000 times every day to push blood through tubes (blood vessels) to every part of your body. The blood carries oxygen and food to your cells and takes away waste.',
      keyTerms: [
        { term: 'pump', definition: 'Something that pushes liquid from one place to another' },
        { term: 'blood vessels', definition: 'The tubes that carry blood around your body' },
      ],
      analogies: ['Your heart is like a washing machine that squeezes water through clothes, but it pushes blood through your body instead.'],
    },
    2: {
      level: 2,
      summary: 'The heart is a muscular organ with four chambers that pumps blood throughout the circulatory system.',
      explanation: 'The heart has four chambers: two upper chambers called atria and two lower chambers called ventricles. The right side receives deoxygenated blood from the body and pumps it to the lungs. The left side receives oxygenated blood from the lungs and pumps it to the rest of the body.',
      keyTerms: [
        { term: 'atrium', definition: 'Upper chamber of the heart that receives blood', pronunciation: 'AY-tree-um' },
        { term: 'ventricle', definition: 'Lower chamber of the heart that pumps blood out', pronunciation: 'VEN-tri-kul' },
        { term: 'oxygenated', definition: 'Containing oxygen' },
      ],
      analogies: ['The heart works like a double pump - one side for the lungs, one side for the body.'],
    },
    3: {
      level: 3,
      summary: 'The heart is a four-chambered muscular organ composed primarily of cardiac muscle (myocardium) that generates the pressure gradient driving systemic and pulmonary circulation.',
      explanation: 'The heart consists of three layers: epicardium (outer), myocardium (middle, muscular), and endocardium (inner). The cardiac cycle involves coordinated contraction (systole) and relaxation (diastole) of the chambers. The atrioventricular valves (tricuspid and mitral) prevent backflow from ventricles to atria, while semilunar valves (pulmonary and aortic) prevent backflow from great vessels to ventricles.',
      keyTerms: [
        { term: 'myocardium', definition: 'The muscular middle layer of the heart wall', pronunciation: 'my-oh-KAR-dee-um' },
        { term: 'systole', definition: 'The contraction phase of the cardiac cycle', pronunciation: 'SIS-toh-lee' },
        { term: 'diastole', definition: 'The relaxation phase of the cardiac cycle', pronunciation: 'dy-AS-toh-lee' },
      ],
    },
    4: {
      level: 4,
      summary: 'The heart is a biomechanical pump whose function depends on the integration of electrical conduction, calcium-mediated excitation-contraction coupling, and hemodynamic principles.',
      explanation: 'Cardiac function is governed by intrinsic automaticity originating in the sinoatrial node, with conduction through the atrioventricular node, bundle of His, and Purkinje fibers. Excitation-contraction coupling involves L-type calcium channels triggering calcium-induced calcium release from the sarcoplasmic reticulum. Cardiac output is determined by preload (Frank-Starling mechanism), afterload, and contractility, modulated by autonomic nervous system input.',
      keyTerms: [
        { term: 'excitation-contraction coupling', definition: 'The process linking electrical depolarization to mechanical contraction via calcium signaling' },
        { term: 'Frank-Starling mechanism', definition: 'The intrinsic property of the heart to increase contraction force in response to increased venous return' },
        { term: 'automaticity', definition: 'The ability of cardiac cells to spontaneously depolarize and generate action potentials' },
      ],
      clinicalNotes: 'Disruption of conduction pathways leads to arrhythmias. Heart failure involves impaired contractility or compliance.',
    },
    5: {
      level: 5,
      summary: 'The heart integrates molecular, cellular, and organ-level physiology with clinical manifestations requiring understanding of pathophysiology, pharmacology, and interventional approaches.',
      explanation: 'Clinical cardiac assessment integrates ECG interpretation (P wave: atrial depolarization, QRS: ventricular depolarization, T wave: ventricular repolarization), echocardiographic parameters (ejection fraction, E/A ratio, wall motion), biomarkers (troponin, BNP), and hemodynamic measurements. Heart failure classification (HFrEF vs HFpEF) guides therapy. Coronary artery disease management involves risk stratification, medical therapy (statins, antiplatelet agents, beta-blockers, ACE inhibitors), and revascularization strategies.',
      keyTerms: [
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction (<40%), systolic dysfunction' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction (≥50%), diastolic dysfunction' },
        { term: 'ejection fraction', definition: 'Percentage of blood ejected from the ventricle with each contraction; normal LV EF 55-70%' },
      ],
      clinicalNotes: 'Guideline-directed medical therapy for HFrEF: ACE-I/ARB/ARNI, beta-blocker, MRA, SGLT2i. Consider ICD/CRT for appropriate candidates.',
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
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
  ],
  tags: {
    systems: ['cardiovascular'],
    structures: ['FMA:7088'],
    topics: ['anatomy', 'physiology'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-20T00:00:00.000Z',
  updatedAt: '2026-01-20T00:00:00.000Z',
  version: 1,
  status: 'published',
};
