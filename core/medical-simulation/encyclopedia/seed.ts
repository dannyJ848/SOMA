/**
 * Encyclopedia Seed Data
 *
 * Populates the in-memory encyclopedia store with entries derived from
 * the REGION_CONTENT_MAP (regionContentMapping.ts) so that the
 * MedicalEncyclopedia and EncyclopediaEntry views have real content
 * to display when users drill down from body region -> category -> topic.
 */

import { addEntries } from './store';
import type {
  EncyclopediaEntry,
  ContentSection,
  MultiLevelContent,
  AnatomyLink,
  RelatedEntry,
  Reference,
  SearchMetadata,
  MedicalCategory,
  EntryType,
} from './types';
import { REGION_CONTENT_MAP } from '../../../src/education/regionContentMapping';
import { nervousSystemPhysiologyEntries } from './entries/nervous-system-physiology';
import { nervousSystemAnatomyEntries } from './entries/nervous-system-anatomy';
import { brainAnatomyEntries } from './entries/brain-anatomy';
import { cardiovascularSystemEntries } from './entries/cardiovascular-system';
import { cardiovascularPhysiologyEntries } from './entries/cardiovascular-physiology';
import { bloodVesselsEntries } from './entries/blood-vessels';
import { respiratorySystemEntries } from './entries/respiratory-system';
import { immuneSystemEntries } from './entries/immune-system';
import { digestiveSystemEntries } from './entries/digestive-system';
import { urinarySystemEntries } from './entries/urinary-system';
import { endocrineSystemEntries } from './entries/endocrine-system';
import { musculoskeletalSystemEntries } from './entries/musculoskeletal-system';
import { integumentarySystemEntries } from './entries/integumentary-system';
import { reproductiveSystemEntries } from './entries/reproductive-system';
import { tissueTypesEntries } from './entries/tissue-types';

// Comprehensive pathology and clinical medicine entries
import { pathologyEntries } from './entries/pathology-comprehensive';
import { diabetesEntries } from './entries/diabetes-comprehensive';
import { hypertensionEntries } from './entries/hypertension-comprehensive';
import { strokeEntries } from './entries/stroke-comprehensive';
import { cancerOncologyEntries } from './entries/cancer-oncology-comprehensive';

// Spanish bilingual content registration + adaptation
import { registerBatch1 } from '../../content/spanish-registry-batch-1';
import { registerBatch2 } from '../../content/spanish-registry-batch-2';
import { registerBatch3 } from '../../content/spanish-registry-batch-3';
import { getAllSpanishEntries } from '../../content/spanish-module-registry';
import { adaptSpanishEntry } from '../../content/spanish-encyclopedia-adapter';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Create a multi-level content object from a single description string */
function multiLevel(
  patient: string,
  intermediate?: string,
  professional?: string,
): MultiLevelContent {
  return {
    patient: patient,
    intermediate: intermediate ?? patient,
    professional: professional ?? intermediate ?? patient,
  };
}

/** Map a body system string to a MedicalCategory */
function systemToCategory(system: string): MedicalCategory {
  const map: Record<string, MedicalCategory> = {
    cardiovascular: 'cardiovascular',
    respiratory: 'respiratory',
    nervous: 'neurologic',
    endocrine: 'endocrine',
    digestive: 'gastrointestinal',
    urinary: 'renal',
    musculoskeletal: 'musculoskeletal',
    immune: 'immunologic',
    integumentary: 'dermatologic',
    reproductive: 'general',
    lymphatic: 'immunologic',
    hematologic: 'hematologic',
  };
  return map[system] ?? 'general';
}

/** Slugify a name for use as an ID */
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---------------------------------------------------------------------------
// Seed data builder
// ---------------------------------------------------------------------------

/**
 * Build encyclopedia entries from the region content map.
 *
 * This creates entries for each region (head, neck, chest, etc.) as well
 * as derived entries for individual conditions, tissue types, and
 * physiological processes so users can drill down into specific topics.
 */
function buildEntries(): EncyclopediaEntry[] {
  const entries: EncyclopediaEntry[] = [];
  const now = new Date().toISOString();

  for (const [regionId, region] of Object.entries(REGION_CONTENT_MAP)) {
    const primaryCategory = systemToCategory(region.bodySystems[0] ?? '');

    // ---------------------------------------------------------------
    // 1. Region overview entry
    // ---------------------------------------------------------------
    const regionEntry: EncyclopediaEntry = {
      entryId: `region-${regionId}`,
      entryType: 'anatomy' as EntryType,
      name: region.name,
      nameEs: region.nameEs,
      aliases: [],
      category: primaryCategory,
      summary: region.description,
      overview: multiLevel(
        region.description,
        `${region.description} This region is associated with the ${region.bodySystems.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')} systems.`,
        `${region.description} Clinically, key considerations include: ${region.clinicalNotes.join('; ')}.`,
      ),
      content: buildRegionContentSections(region),
      relatedEntries: buildRegionRelatedEntries(regionId, region),
      anatomyLinks: buildRegionAnatomyLinks(region),
      references: buildDefaultReferences(),
      searchMetadata: buildRegionSearchMetadata(regionId, region),
      lastUpdated: now,
      version: '1.0',
      reviewStatus: 'approved',
      clinicalImportance: 'important',
    };
    entries.push(regionEntry);

    // ---------------------------------------------------------------
    // 2. Individual condition entries from pathology
    // ---------------------------------------------------------------
    for (const condition of region.pathology.commonConditions) {
      const condId = `condition-${slugify(condition.name)}`;
      // Avoid duplicates (same condition can appear in multiple regions)
      if (entries.some(e => e.entryId === condId)) continue;

      const severityMap: Record<string, string> = {
        mild: 'This is generally a mild condition.',
        moderate: 'This is a moderately serious condition that usually requires medical attention.',
        severe: 'This is a serious condition that requires prompt medical care.',
        'life-threatening': 'This is a life-threatening emergency requiring immediate medical attention.',
      };

      entries.push({
        entryId: condId,
        entryType: 'condition',
        name: condition.name,
        nameEs: condition.nameEs,
        aliases: [],
        category: primaryCategory,
        summary: `${condition.name} - ${condition.mechanism}`,
        overview: multiLevel(
          `${condition.name} is a condition where ${condition.mechanism.toLowerCase()}. Symptoms include ${condition.symptoms.join(', ').toLowerCase()}. ${severityMap[condition.severity] ?? ''}`,
          `${condition.name}: ${condition.mechanism}. Common symptoms include ${condition.symptoms.join(', ')}. Severity: ${condition.severity}. This condition affects the ${region.name.toLowerCase()} region.`,
          `${condition.name} involves ${condition.mechanism}. Clinical presentation includes ${condition.symptoms.join(', ')}. Classified as ${condition.severity} severity. Affected region: ${region.name}. ${region.clinicalNotes[0] ? `Clinical note: ${region.clinicalNotes[0]}` : ''}`,
        ),
        content: [
          {
            title: 'Mechanism',
            content: multiLevel(
              `This happens when ${condition.mechanism.toLowerCase()}.`,
              condition.mechanism,
              `Pathophysiology: ${condition.mechanism}`,
            ),
          },
          {
            title: 'Symptoms',
            content: multiLevel(
              `You may notice: ${condition.symptoms.join(', ')}.`,
              `Common symptoms include: ${condition.symptoms.join(', ')}.`,
              `Clinical presentation: ${condition.symptoms.join(', ')}. Severity classification: ${condition.severity}.`,
            ),
          },
        ],
        relatedEntries: [
          {
            entryId: `region-${regionId}`,
            entryType: 'anatomy',
            name: region.name,
            relationship: 'related-to',
            description: `Affects the ${region.name.toLowerCase()} region`,
          },
        ],
        anatomyLinks: buildRegionAnatomyLinks(region).slice(0, 2),
        references: buildDefaultReferences(),
        searchMetadata: {
          primaryKeywords: [
            condition.name.toLowerCase(),
            ...(condition.nameEs ? [condition.nameEs.toLowerCase()] : []),
            ...condition.symptoms.map(s => s.toLowerCase()),
          ],
          secondaryKeywords: [condition.mechanism.toLowerCase(), region.name.toLowerCase()],
          synonyms: [
            ...(condition.nameEs ? [condition.nameEs.toLowerCase()] : []),
          ],
          tags: [condition.severity, primaryCategory, 'condition'],
        },
        lastUpdated: now,
        version: '1.0',
        reviewStatus: 'approved',
        clinicalImportance: condition.severity === 'life-threatening' ? 'essential' : 'important',
      });
    }

    // ---------------------------------------------------------------
    // 3. Tissue type entries from histology
    // ---------------------------------------------------------------
    for (const tissue of region.histology.tissueTypes) {
      const tissueId = `tissue-${slugify(tissue.name)}`;
      if (entries.some(e => e.entryId === tissueId)) continue;

      entries.push({
        entryId: tissueId,
        entryType: 'anatomy',
        name: tissue.name,
        nameEs: tissue.nameEs,
        aliases: [],
        category: primaryCategory,
        summary: tissue.description,
        overview: multiLevel(
          `${tissue.name} is a type of ${tissue.category} tissue found in the ${tissue.location.toLowerCase()}. Its main job is ${tissue.function.toLowerCase()}.`,
          `${tissue.name} (${tissue.category} tissue): ${tissue.description}. Located in ${tissue.location}. Function: ${tissue.function}.`,
          `${tissue.name} is classified as ${tissue.category} tissue. Histological description: ${tissue.description}. Anatomical location: ${tissue.location}. Physiological function: ${tissue.function}.`,
        ),
        content: [
          {
            title: 'Location',
            content: multiLevel(
              `This tissue is found in the ${tissue.location.toLowerCase()}.`,
              `Anatomical location: ${tissue.location}.`,
              `Distribution: ${tissue.location}.`,
            ),
          },
          {
            title: 'Function',
            content: multiLevel(
              `This tissue helps with ${tissue.function.toLowerCase()}.`,
              `Primary function: ${tissue.function}.`,
              `Physiological role: ${tissue.function}.`,
            ),
          },
        ],
        relatedEntries: [
          {
            entryId: `region-${regionId}`,
            entryType: 'anatomy',
            name: region.name,
            relationship: 'part-of',
            description: `Found in the ${region.name.toLowerCase()}`,
          },
        ],
        anatomyLinks: [],
        references: buildDefaultReferences(),
        searchMetadata: {
          primaryKeywords: [
            tissue.name.toLowerCase(),
            ...(tissue.nameEs ? [tissue.nameEs.toLowerCase()] : []),
            tissue.category,
          ],
          secondaryKeywords: [tissue.location.toLowerCase(), tissue.function.toLowerCase()],
          synonyms: [
            ...(tissue.nameEs ? [tissue.nameEs.toLowerCase()] : []),
          ],
          tags: [tissue.category, 'histology', 'tissue'],
        },
        lastUpdated: now,
        version: '1.0',
        reviewStatus: 'approved',
        clinicalImportance: 'supplementary',
      });
    }

    // ---------------------------------------------------------------
    // 4. Physiology process entries
    // ---------------------------------------------------------------
    for (const process of region.physiology.processes) {
      const procId = `process-${slugify(process.name)}`;
      if (entries.some(e => e.entryId === procId)) continue;

      entries.push({
        entryId: procId,
        entryType: 'physiology',
        name: process.name,
        nameEs: process.nameEs,
        aliases: [],
        category: primaryCategory,
        summary: process.description,
        overview: multiLevel(
          `${process.name}: ${process.description} The main steps are: ${process.steps.join(', ')}.`,
          `${process.name} - ${process.description}. Key steps include: ${process.steps.join(' -> ')}.`,
          `${process.name}: ${process.description}. Sequential process: ${process.steps.map((s, i) => `(${i + 1}) ${s}`).join(', ')}.`,
        ),
        content: [
          {
            title: 'Process Steps',
            content: multiLevel(
              `This process works in steps: ${process.steps.join(', ')}.`,
              `Key steps: ${process.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}.`,
              `Detailed mechanism:\n${process.steps.map((s, i) => `Step ${i + 1}: ${s}`).join('\n')}`,
            ),
          },
        ],
        relatedEntries: [
          {
            entryId: `region-${regionId}`,
            entryType: 'anatomy',
            name: region.name,
            relationship: 'related-to',
            description: `Occurs in the ${region.name.toLowerCase()}`,
          },
        ],
        anatomyLinks: buildRegionAnatomyLinks(region).slice(0, 1),
        references: buildDefaultReferences(),
        searchMetadata: {
          primaryKeywords: [
            process.name.toLowerCase(),
            ...(process.nameEs ? [process.nameEs.toLowerCase()] : []),
          ],
          secondaryKeywords: process.steps.map(s => s.toLowerCase()),
          synonyms: [
            ...(process.nameEs ? [process.nameEs.toLowerCase()] : []),
          ],
          tags: ['physiology', 'process', primaryCategory],
        },
        lastUpdated: now,
        version: '1.0',
        reviewStatus: 'approved',
        clinicalImportance: 'important',
      });
    }

    // ---------------------------------------------------------------
    // 5. Function entries from physiology
    // ---------------------------------------------------------------
    for (const func of region.physiology.functions) {
      const funcId = `function-${slugify(func.name)}`;
      if (entries.some(e => e.entryId === funcId)) continue;

      entries.push({
        entryId: funcId,
        entryType: 'physiology',
        name: func.name,
        nameEs: func.nameEs,
        aliases: [],
        category: primaryCategory,
        summary: func.description,
        overview: multiLevel(
          `${func.name}: ${func.description}. This is a ${func.importance} function.`,
          `${func.name} - ${func.description}. Importance: ${func.importance}.`,
          `${func.name}: ${func.description}. Clinical significance: ${func.importance}.`,
        ),
        content: [],
        relatedEntries: [
          {
            entryId: `region-${regionId}`,
            entryType: 'anatomy',
            name: region.name,
            relationship: 'part-of',
            description: `Function of the ${region.name.toLowerCase()}`,
          },
        ],
        anatomyLinks: [],
        references: buildDefaultReferences(),
        searchMetadata: {
          primaryKeywords: [
            func.name.toLowerCase(),
            ...(func.nameEs ? [func.nameEs.toLowerCase()] : []),
          ],
          secondaryKeywords: [func.description.toLowerCase()],
          synonyms: [
            ...(func.nameEs ? [func.nameEs.toLowerCase()] : []),
          ],
          tags: ['physiology', 'function', func.importance],
        },
        lastUpdated: now,
        version: '1.0',
        reviewStatus: 'approved',
        clinicalImportance: func.importance === 'vital' ? 'essential' : 'important',
      });
    }
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Builders for sub-structures
// ---------------------------------------------------------------------------

function buildRegionContentSections(region: {
  histology: { tissueTypes: Array<{ name: string; category: string; description: string; location: string; function: string }>; keyFeatures: string[]; stains: Array<{ name: string; purpose: string; appearance: string }>; cellTypes: string[] };
  pathology: { commonConditions: Array<{ name: string; mechanism: string; symptoms: string[]; severity: string }>; clinicalPresentations: string[]; diagnosticMarkers: Array<{ name: string; type: string; significance: string }> };
  physiology: { functions: Array<{ name: string; description: string; importance: string }>; homeostasis: Array<{ variable: string; normalRange: string; unit: string; regulationMechanism: string }>; systemInteractions: string[] };
  clinicalNotes: string[];
}): ContentSection[] {
  const sections: ContentSection[] = [];

  // Histology section
  if (region.histology.tissueTypes.length > 0) {
    sections.push({
      title: 'Histology',
      content: multiLevel(
        `This region contains ${region.histology.tissueTypes.length} main tissue types: ${region.histology.tissueTypes.map(t => t.name).join(', ')}. Key cell types include: ${region.histology.cellTypes.join(', ')}.`,
        `Histological features include ${region.histology.tissueTypes.length} tissue types: ${region.histology.tissueTypes.map(t => `${t.name} (${t.category})`).join(', ')}. Key features: ${region.histology.keyFeatures.join('; ')}.`,
        `Microscopic anatomy: ${region.histology.tissueTypes.map(t => `${t.name} [${t.category}] - ${t.description}; Location: ${t.location}; Function: ${t.function}`).join('. ')}. Diagnostic stains: ${region.histology.stains.map(s => `${s.name} (${s.purpose}: ${s.appearance})`).join('; ')}.`,
      ),
    });
  }

  // Pathology section
  if (region.pathology.commonConditions.length > 0) {
    sections.push({
      title: 'Pathology',
      content: multiLevel(
        `Common health problems in this area include: ${region.pathology.commonConditions.map(c => c.name).join(', ')}. Watch for symptoms like: ${region.pathology.clinicalPresentations.join(', ')}.`,
        `Common conditions: ${region.pathology.commonConditions.map(c => `${c.name} (${c.severity})`).join(', ')}. Clinical presentations include: ${region.pathology.clinicalPresentations.join(', ')}.`,
        `Pathological conditions: ${region.pathology.commonConditions.map(c => `${c.name} - ${c.mechanism} [${c.severity}]`).join('; ')}. Diagnostic markers: ${region.pathology.diagnosticMarkers.map(m => `${m.name} (${m.type}: ${m.significance})`).join('; ')}.`,
      ),
    });
  }

  // Physiology section
  if (region.physiology.functions.length > 0) {
    sections.push({
      title: 'Physiology',
      content: multiLevel(
        `This region performs ${region.physiology.functions.length} main functions: ${region.physiology.functions.map(f => f.name).join(', ')}.`,
        `Key physiological functions: ${region.physiology.functions.map(f => `${f.name} (${f.importance}) - ${f.description}`).join('; ')}.`,
        `Physiological roles: ${region.physiology.functions.map(f => `${f.name} [${f.importance}]: ${f.description}`).join('; ')}. Homeostatic parameters: ${region.physiology.homeostasis.map(h => `${h.variable}: ${h.normalRange} ${h.unit} (${h.regulationMechanism})`).join('; ')}.`,
      ),
    });
  }

  // Clinical notes
  if (region.clinicalNotes.length > 0) {
    sections.push({
      title: 'Clinical Pearls',
      content: multiLevel(
        region.clinicalNotes.join(' '),
        region.clinicalNotes.map((n, i) => `${i + 1}. ${n}`).join('\n'),
        region.clinicalNotes.map((n, i) => `${i + 1}. ${n}`).join('\n'),
      ),
    });
  }

  return sections;
}

function buildRegionRelatedEntries(
  regionId: string,
  region: {
    pathology: { commonConditions: Array<{ name: string }> };
    physiology: { processes: Array<{ name: string }> };
    relatedStructures: string[];
  },
): RelatedEntry[] {
  const related: RelatedEntry[] = [];

  // Link to conditions
  for (const cond of region.pathology.commonConditions.slice(0, 5)) {
    related.push({
      entryId: `condition-${slugify(cond.name)}`,
      entryType: 'condition',
      name: cond.name,
      relationship: 'related-to',
      description: `Condition affecting the ${regionId}`,
    });
  }

  // Link to processes
  for (const proc of region.physiology.processes.slice(0, 3)) {
    related.push({
      entryId: `process-${slugify(proc.name)}`,
      entryType: 'physiology',
      name: proc.name,
      relationship: 'contains',
      description: `Physiological process in this region`,
    });
  }

  // Link to related regions
  for (const structId of region.relatedStructures.slice(0, 4)) {
    related.push({
      entryId: `region-${structId}`,
      entryType: 'anatomy',
      name: structId.charAt(0).toUpperCase() + structId.slice(1).replace(/([A-Z])/g, ' $1'),
      relationship: 'related-to',
      description: `Related anatomical region`,
    });
  }

  return related;
}

function buildRegionAnatomyLinks(
  region: { models: Array<{ name: string; path: string; system: string }> },
): AnatomyLink[] {
  return region.models.map(model => ({
    structureId: slugify(model.name),
    structureName: model.name,
    linkText: `View ${model.name} in 3D`,
    viewPreset: 'anterior' as const,
    highlightColor: '#3b82f6',
    relevance: `Part of the ${model.system} system`,
  }));
}

function buildDefaultReferences(): Reference[] {
  return [
    {
      referenceId: 'ref-openstax-anatomy',
      type: 'textbook',
      title: 'Anatomy and Physiology 2e',
      authors: 'OpenStax',
      source: 'OpenStax',
      year: 2022,
      url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
      citation: 'OpenStax. Anatomy and Physiology 2e. OpenStax, 2022.',
    },
    {
      referenceId: 'ref-robbins-pathology',
      type: 'textbook',
      title: 'Robbins & Cotran Pathologic Basis of Disease',
      authors: 'Kumar V, Abbas AK, Aster JC',
      source: 'Elsevier',
      year: 2021,
      citation: 'Kumar V, Abbas AK, Aster JC. Robbins & Cotran Pathologic Basis of Disease. 10th ed. Elsevier; 2021.',
    },
  ];
}

function buildRegionSearchMetadata(
  regionId: string,
  region: {
    name: string;
    nameEs?: string;
    description: string;
    bodySystems: string[];
    histology: { tissueTypes: Array<{ name: string }> };
    pathology: { commonConditions: Array<{ name: string }> };
    clinicalNotes: string[];
  },
): SearchMetadata {
  return {
    primaryKeywords: [
      region.name.toLowerCase(),
      ...(region.nameEs ? [region.nameEs.toLowerCase()] : []),
      regionId,
      ...region.bodySystems,
    ],
    secondaryKeywords: [
      ...region.histology.tissueTypes.map(t => t.name.toLowerCase()),
      ...region.pathology.commonConditions.map(c => c.name.toLowerCase()),
    ],
    synonyms: [
      ...(region.nameEs ? [region.nameEs.toLowerCase()] : []),
    ],
    tags: [
      'anatomy',
      'region',
      ...region.bodySystems,
    ],
    searchBoost: 1.2,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

let _seeded = false;

/**
 * Seed the encyclopedia store with entries from the region content map.
 * Safe to call multiple times; only seeds once.
 */
export function seedEncyclopedia(): void {
  if (_seeded) return;
  _seeded = true;

  try {
    const entries = buildEntries();
    console.log(`[Encyclopedia] Building ${entries.length} entries from region content map...`);
    
    // Add comprehensive nervous system entries
    entries.push(...nervousSystemPhysiologyEntries);
    entries.push(...nervousSystemAnatomyEntries);
    entries.push(...brainAnatomyEntries);
    
    // Add comprehensive cardiovascular entries
    entries.push(...cardiovascularSystemEntries);
    entries.push(...cardiovascularPhysiologyEntries);
    entries.push(...bloodVesselsEntries);
    
    // Add respiratory system entries
    entries.push(...respiratorySystemEntries);
    
    // Add endocrine system entries
    entries.push(...endocrineSystemEntries);
    
    // Add integumentary system entries
    entries.push(...integumentarySystemEntries);

    // Add remaining body system entries
    entries.push(...immuneSystemEntries);
    entries.push(...digestiveSystemEntries);
    entries.push(...urinarySystemEntries);
    entries.push(...musculoskeletalSystemEntries);
    entries.push(...reproductiveSystemEntries);
    entries.push(...tissueTypesEntries);

    // Add comprehensive clinical entries
    entries.push(...pathologyEntries);
    entries.push(...diabetesEntries);
    entries.push(...hypertensionEntries);
    entries.push(...strokeEntries);
    entries.push(...cancerOncologyEntries);

    addEntries(entries);
    console.log(`[Encyclopedia] Successfully seeded ${entries.length} entries`);

    // Register and seed Spanish bilingual content modules
    registerBatch1();
    registerBatch2();
    registerBatch3();

    const spanishResults = getAllSpanishEntries();
    const spanishEntries = spanishResults.map(r =>
      adaptSpanishEntry(r.entry, r.category)
    );
    if (spanishEntries.length > 0) {
      addEntries(spanishEntries);
      console.log(`[Encyclopedia] Added ${spanishEntries.length} Spanish bilingual entries from ${new Set(spanishResults.map(r => r.category)).size} modules`);
    }
  } catch (error) {
    console.error('[Encyclopedia] Error seeding encyclopedia:', error);
  }
}
