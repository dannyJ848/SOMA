/**
 * ContentService — Unified Content Service
 *
 * Single entry point that wires ALL content databases into React:
 *   - KnowledgeGraphImpl (unified knowledge graph with relationship traversal)
 *   - MedicalSearchEngine (fuzzy bilingual search)
 *   - MEDICAL_SPECIALTIES (42 specialties)
 *   - SYMPTOM_DATABASE (155 symptoms)
 *   - MEDICAL_PROCEDURES (127 procedures)
 *   - ANATOMY_REGIONS (119 structures)
 *   - Explanation-level system (5 tiers)
 *   - MEDICAL_TERMS_ES (578 Spanish terms)
 *   - MEDICAL_GLOSSARY (352 glossary entries)
 *
 * Exports:
 *   ContentService          — the class with all methods
 *   ContentContext           — React context
 *   ContentProvider          — React provider component
 *   useContentService        — hook to access the service from context
 */

import React, { createContext, useContext, useRef, useMemo } from 'react';

// ---------------------------------------------------------------------------
// Knowledge graph & search (eagerly loaded — core infrastructure)
// ---------------------------------------------------------------------------
import {
  getKnowledgeGraph,
  type KnowledgeGraph,
  type KnowledgeNode,
  type KnowledgeEdge,
  type NodeType,
  type RelationshipType,
} from '@core/knowledge-graph/knowledge-index';

import {
  createSearchEngine,
  type SearchEngine,
  type SearchResult,
  type SearchOptions,
} from '@core/knowledge-graph/search-engine';

// ---------------------------------------------------------------------------
// Content database types (type-only imports — zero runtime cost)
// ---------------------------------------------------------------------------
import type {
  MedicalSpecialty,
  BodySystemFocus,
} from '@core/content/specialties/specialty-map';

import type {
  SymptomEntry,
} from '@core/content/symptoms/symptom-database';

import type {
  MedicalProcedureEntry,
  ProcedureCategory,
} from '@core/content/procedures/procedure-database';

import type {
  AnatomyRegion,
  AnatomySystem,
} from '@core/content/anatomy/anatomy-encyclopedia';

import type {
  ExplanationLevelNumber,
  ExplanationLevel,
  ExplanationTemplate,
  ConditionKey,
} from '@core/education/explanation-levels';

import type {
  GlossaryEntry,
} from '@core/i18n/medical-glossary';

// ---------------------------------------------------------------------------
// Lazy-loaded module caches
// ---------------------------------------------------------------------------

type SpecialtyModule = typeof import('@core/content/specialties/specialty-map');
type SymptomModule = typeof import('@core/content/symptoms/symptom-database');
type ProcedureModule = typeof import('@core/content/procedures/procedure-database');
type AnatomyModule = typeof import('@core/content/anatomy/anatomy-encyclopedia');
type EducationModule = typeof import('@core/education/explanation-levels');
type TranslationsModule = typeof import('@core/i18n/medical-translations-es');
type GlossaryModule = typeof import('@core/i18n/medical-glossary');

let _specialtyMod: SpecialtyModule | null = null;
let _symptomMod: SymptomModule | null = null;
let _procedureMod: ProcedureModule | null = null;
let _anatomyMod: AnatomyModule | null = null;
let _educationMod: EducationModule | null = null;
let _translationsMod: TranslationsModule | null = null;
let _glossaryMod: GlossaryModule | null = null;

async function loadSpecialties(): Promise<SpecialtyModule> {
  if (!_specialtyMod) _specialtyMod = await import('@core/content/specialties/specialty-map');
  return _specialtyMod;
}

async function loadSymptoms(): Promise<SymptomModule> {
  if (!_symptomMod) _symptomMod = await import('@core/content/symptoms/symptom-database');
  return _symptomMod;
}

async function loadProcedures(): Promise<ProcedureModule> {
  if (!_procedureMod) _procedureMod = await import('@core/content/procedures/procedure-database');
  return _procedureMod;
}

async function loadAnatomy(): Promise<AnatomyModule> {
  if (!_anatomyMod) _anatomyMod = await import('@core/content/anatomy/anatomy-encyclopedia');
  return _anatomyMod;
}

async function loadEducation(): Promise<EducationModule> {
  if (!_educationMod) _educationMod = await import('@core/education/explanation-levels');
  return _educationMod;
}

async function loadTranslations(): Promise<TranslationsModule> {
  if (!_translationsMod) _translationsMod = await import('@core/i18n/medical-translations-es');
  return _translationsMod;
}

async function loadGlossary(): Promise<GlossaryModule> {
  if (!_glossaryMod) _glossaryMod = await import('@core/i18n/medical-glossary');
  return _glossaryMod;
}

/**
 * Pre-load all content modules in parallel.
 * Called by ContentProvider so data is ready before first render.
 */
export async function preloadContentModules(): Promise<void> {
  await Promise.all([
    loadSpecialties(),
    loadSymptoms(),
    loadProcedures(),
    loadAnatomy(),
    loadEducation(),
    loadTranslations(),
    loadGlossary(),
  ]);
}

// ===========================================================================
// Unified Search Result (wraps all content types)
// ===========================================================================

export type ContentType =
  | 'condition'
  | 'symptom'
  | 'procedure'
  | 'anatomy'
  | 'specialty'
  | 'medication'
  | 'glossary';

export interface UnifiedSearchResult {
  /** Unique id */
  id: string;
  /** Content type discriminator */
  type: ContentType;
  /** English name */
  name: string;
  /** Spanish name */
  spanishName: string;
  /** 0-1 relevance score */
  score: number;
  /** Brief description */
  description?: string;
  /** Raw backing object — cast to the specific type if you need detail */
  source:
    | KnowledgeNode
    | SymptomEntry
    | MedicalProcedureEntry
    | AnatomyRegion
    | MedicalSpecialty
    | GlossaryEntry;
}

// ===========================================================================
// Condition Info (aggregated view)
// ===========================================================================

export interface ConditionInfo {
  node: KnowledgeNode;
  symptoms: KnowledgeNode[];
  medications: KnowledgeNode[];
  procedures: KnowledgeNode[];
  specialists: KnowledgeNode[];
  anatomyRegions: AnatomyRegion[];
  relatedEdges: KnowledgeEdge[];
  glossaryEntry?: GlossaryEntry;
  explanations?: Record<ExplanationLevelNumber, string>;
}

// ===========================================================================
// Symptom Info (aggregated view)
// ===========================================================================

export interface SymptomInfo {
  entry: SymptomEntry;
  graphNode?: KnowledgeNode;
  possibleConditions: KnowledgeNode[];
  doNotMiss: { conditionId: string; conditionName: string }[];
  anatomyRegions: KnowledgeNode[];
  glossaryEntry?: GlossaryEntry;
}

// ===========================================================================
// ContentService class
// ===========================================================================

export class ContentService {
  private graph: KnowledgeGraph;
  private search: SearchEngine;

  constructor() {
    this.graph = getKnowledgeGraph();
    this.search = createSearchEngine(this.graph);
  }

  // -----------------------------------------------------------------------
  // 1. Unified cross-content search
  // -----------------------------------------------------------------------

  /**
   * Search across ALL content types using the fuzzy bilingual search engine
   * and supplement with direct database searches for types not fully indexed
   * in the knowledge graph.
   */
  async searchAll(
    query: string,
    options?: SearchOptions & { includeGlossary?: boolean },
  ): Promise<UnifiedSearchResult[]> {
    if (!query.trim()) return [];

    const results: UnifiedSearchResult[] = [];
    const seenIds = new Set<string>();

    // --- Knowledge graph search (conditions, symptoms, procedures, anatomy, medications, specialties) ---
    const graphResults = this.search.search(query, {
      limit: options?.limit ?? 30,
      language: options?.language,
      types: options?.types,
      bodySystem: options?.bodySystem,
      minScore: options?.minScore ?? 0.2,
      maxFuzzyDistance: options?.maxFuzzyDistance,
      useSynonyms: options?.useSynonyms,
    });

    for (const r of graphResults) {
      if (seenIds.has(r.node.id)) continue;
      seenIds.add(r.node.id);
      results.push({
        id: r.node.id,
        type: r.node.type as ContentType,
        name: r.node.name,
        spanishName: r.node.spanishName,
        score: r.score,
        description: r.node.description,
        source: r.node,
      });
    }

    // Load supplemental databases in parallel
    const [symptomMod, procedureMod, specialtyMod, anatomyMod, glossaryMod] = await Promise.all([
      loadSymptoms(),
      loadProcedures(),
      loadSpecialties(),
      loadAnatomy(),
      loadGlossary(),
    ]);

    // --- Supplement with direct symptom DB search (catches entries not in graph) ---
    const symptomHits = symptomMod.searchSymptomsByName(query);
    for (const s of symptomHits) {
      const syntheticId = `symptom:${s.symptomId}`;
      if (seenIds.has(syntheticId) || seenIds.has(s.symptomId)) continue;
      seenIds.add(syntheticId);
      results.push({
        id: syntheticId,
        type: 'symptom',
        name: s.name,
        spanishName: s.spanishName,
        score: 0.6,
        description: s.description,
        source: s,
      });
    }

    // --- Supplement with direct procedure DB search ---
    const procedureHits = procedureMod.searchProcedures(query);
    for (const p of procedureHits) {
      const syntheticId = `procedure:${p.procedureId}`;
      if (seenIds.has(syntheticId) || seenIds.has(p.procedureId)) continue;
      seenIds.add(syntheticId);
      results.push({
        id: syntheticId,
        type: 'procedure',
        name: p.name,
        spanishName: p.spanishName,
        score: 0.55,
        description: p.description,
        source: p,
      });
    }

    // --- Supplement with direct specialty search ---
    const specialtyHits = specialtyMod.searchSpecialties(query);
    for (const sp of specialtyHits) {
      const syntheticId = `specialty:${sp.specialtyId}`;
      if (seenIds.has(syntheticId) || seenIds.has(sp.specialtyId)) continue;
      seenIds.add(syntheticId);
      results.push({
        id: syntheticId,
        type: 'specialty',
        name: sp.name,
        spanishName: sp.spanishName,
        score: 0.55,
        description: sp.description.en,
        source: sp,
      });
    }

    // --- Supplement with anatomy search ---
    const anatomyHits = anatomyMod.searchAnatomyRegions(query);
    for (const a of anatomyHits) {
      const syntheticId = `anatomy:${a.id}`;
      if (seenIds.has(syntheticId) || seenIds.has(a.id)) continue;
      seenIds.add(syntheticId);
      results.push({
        id: syntheticId,
        type: 'anatomy',
        name: a.name,
        spanishName: a.spanish,
        score: 0.5,
        description: a.function,
        source: a,
      });
    }

    // --- Optional: glossary search ---
    if (options?.includeGlossary !== false) {
      const q = query.toLowerCase();
      for (const g of glossaryMod.MEDICAL_GLOSSARY) {
        if (
          g.term.toLowerCase().includes(q) ||
          g.plainEN.toLowerCase().includes(q) ||
          g.plainES.toLowerCase().includes(q)
        ) {
          const gid = `glossary:${g.term}`;
          if (seenIds.has(gid)) continue;
          seenIds.add(gid);
          results.push({
            id: gid,
            type: 'glossary',
            name: g.term,
            spanishName: g.plainES.split(' - ')[0] ?? g.term,
            score: 0.45,
            description: g.plainEN,
            source: g,
          });
        }
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    const limit = options?.limit ?? 30;
    return results.slice(0, limit);
  }

  // -----------------------------------------------------------------------
  // 2. Condition info (aggregated)
  // -----------------------------------------------------------------------

  async getConditionInfo(conditionId: string): Promise<ConditionInfo | undefined> {
    // Normalise: allow both "hypertension" and "condition:hypertension"
    const fullId = conditionId.startsWith('condition:')
      ? conditionId
      : `condition:${conditionId}`;

    const node = this.graph.getNode(fullId);
    if (!node) return undefined;

    const symptoms = this.graph.getSymptomsForCondition(fullId);
    const medications = this.graph.getMedicationsForCondition(fullId);
    const procedures = this.graph.getProceduresForCondition(fullId);
    const specialists = this.graph.getSpecialistsForCondition(fullId);
    const relatedEdges = this.graph.getEdgesForNode(fullId);

    const [anatomyMod, glossaryMod, educationMod] = await Promise.all([
      loadAnatomy(),
      loadGlossary(),
      loadEducation(),
    ]);

    const anatomyRegions = anatomyMod.getAnatomyForCondition(conditionId);
    const glossaryEntry = glossaryMod.getPlainLanguage(node.name);

    // Try to pull pre-built explanations if this condition is a known key
    let explanations: Record<ExplanationLevelNumber, string> | undefined;
    const keyMap: Record<string, ConditionKey> = {
      'condition:hypertension': 'hypertension',
      'condition:type-2-diabetes': 'diabetes',
      'condition:asthma': 'asthma',
      'condition:major-depressive-disorder': 'depression',
      'condition:depression': 'depression',
      'condition:fracture': 'fracture',
      'condition:urinary-tract-infection': 'uti',
      'condition:pneumonia': 'pneumonia',
      'condition:gastroesophageal-reflux': 'gerd',
      'condition:gerd': 'gerd',
      'condition:generalized-anxiety-disorder': 'anxiety',
      'condition:anxiety': 'anxiety',
      'condition:osteoarthritis': 'osteoarthritis',
    };
    const condKey = keyMap[fullId];
    if (condKey) {
      explanations = educationMod.getAllLevelsForCondition(condKey);
    }

    return {
      node,
      symptoms,
      medications,
      procedures,
      specialists,
      anatomyRegions,
      relatedEdges,
      glossaryEntry,
      explanations,
    };
  }

  // -----------------------------------------------------------------------
  // 3. Symptom lookup
  // -----------------------------------------------------------------------

  async getSymptomInfo(symptomId: string): Promise<SymptomInfo | undefined> {
    const [symptomMod, glossaryMod] = await Promise.all([
      loadSymptoms(),
      loadGlossary(),
    ]);

    const entry = symptomMod.getSymptomById(symptomId);
    if (!entry) return undefined;

    const graphNodeId = `symptom:${symptomId}`;
    const graphNode = this.graph.getNode(graphNodeId);

    // Get possible conditions from the symptom database
    const conditionNodes: KnowledgeNode[] = [];
    for (const cause of entry.possibleCauses) {
      const cNode = this.graph.getNode(`condition:${cause.conditionId}`);
      if (cNode) conditionNodes.push(cNode);
    }

    // Also try graph traversal for related conditions
    if (graphNode) {
      const graphConditions = this.graph.getRelated(
        graphNodeId,
        'causes',
        'condition',
      );
      for (const c of graphConditions) {
        if (!conditionNodes.some((n) => n.id === c.id)) {
          conditionNodes.push(c);
        }
      }
    }

    const doNotMiss = symptomMod.getDoNotMissConditions(symptomId);

    const anatomyRegions = graphNode
      ? this.graph.getAnatomyForSymptom(graphNodeId)
      : [];

    const glossaryEntry = glossaryMod.getPlainLanguage(entry.name);

    return {
      entry,
      graphNode,
      possibleConditions: conditionNodes,
      doNotMiss,
      anatomyRegions,
      glossaryEntry,
    };
  }

  // -----------------------------------------------------------------------
  // 4. Level-appropriate explanation
  // -----------------------------------------------------------------------

  /**
   * Get an explanation for a topic at a specific complexity level.
   * Looks in symptom database explanations, condition explanations,
   * and the glossary in that order.
   */
  async getExplanation(
    topicId: string,
    level: ExplanationLevelNumber,
  ): Promise<string | undefined> {
    const [symptomMod, educationMod, glossaryMod] = await Promise.all([
      loadSymptoms(),
      loadEducation(),
      loadGlossary(),
    ]);

    // 1. Try symptom explanation (symptom entries have level1-5 built in)
    const symptomExpl = symptomMod.getExplanation(topicId, level);
    if (symptomExpl) return symptomExpl;

    // 2. Try condition explanation
    const keyMap: Record<string, ConditionKey> = {
      diabetes: 'diabetes',
      hypertension: 'hypertension',
      asthma: 'asthma',
      depression: 'depression',
      fracture: 'fracture',
      uti: 'uti',
      pneumonia: 'pneumonia',
      gerd: 'gerd',
      anxiety: 'anxiety',
      osteoarthritis: 'osteoarthritis',
    };
    const stripped = topicId.replace(/^condition:/, '');
    const condKey = keyMap[stripped];
    if (condKey) {
      return educationMod.getConditionExplanation(condKey, level);
    }

    // 3. Fall back to glossary plain language (always level-2 style)
    if (level <= 2) {
      const glossary = glossaryMod.getPlainLanguage(stripped) ?? glossaryMod.getPlainLanguage(topicId);
      if (glossary) return glossary.plainEN;
    }

    return undefined;
  }

  /**
   * Get the explanation level metadata (constraints, audience, etc.)
   */
  async getExplanationLevel(level: ExplanationLevelNumber): Promise<ExplanationLevel> {
    const mod = await loadEducation();
    return mod.EXPLANATION_LEVELS[level];
  }

  /**
   * Get the template for a given level
   */
  async getExplanationTemplate(level: ExplanationLevelNumber): Promise<ExplanationTemplate> {
    const mod = await loadEducation();
    return mod.EXPLANATION_TEMPLATES[level];
  }

  /**
   * Get the LLM prompts for generating a level-appropriate explanation.
   */
  async getExplanationPrompt(
    level: ExplanationLevelNumber,
    condition: string,
  ): Promise<{ systemPrompt: string; userPrompt: string }> {
    const mod = await loadEducation();
    return mod.getPromptForLevel(level, condition);
  }

  // -----------------------------------------------------------------------
  // 5. Direct database accessors (pass-through convenience)
  // -----------------------------------------------------------------------

  // -- Knowledge graph --
  getGraph(): KnowledgeGraph {
    return this.graph;
  }

  getGraphNode(nodeId: string): KnowledgeNode | undefined {
    return this.graph.getNode(nodeId);
  }

  getRelated(
    nodeId: string,
    relationship?: RelationshipType,
    targetType?: NodeType,
  ): KnowledgeNode[] {
    return this.graph.getRelated(nodeId, relationship, targetType);
  }

  getPathFromSymptomToTreatment(symptomId: string): KnowledgeNode[][] {
    return this.graph.getPathFromSymptomToTreatment(symptomId);
  }

  getGraphStats(): Record<NodeType, number> {
    return this.graph.stats();
  }

  // -- Specialties --
  async getAllSpecialties(): Promise<MedicalSpecialty[]> {
    const mod = await loadSpecialties();
    return mod.MEDICAL_SPECIALTIES;
  }

  async getSpecialty(id: string): Promise<MedicalSpecialty | undefined> {
    const mod = await loadSpecialties();
    return mod.getSpecialty(id);
  }

  async getSpecialtiesForCondition(conditionId: string): Promise<MedicalSpecialty[]> {
    const mod = await loadSpecialties();
    return mod.getSpecialtiesForCondition(conditionId);
  }

  async getSpecialtiesForBodySystem(system: BodySystemFocus): Promise<MedicalSpecialty[]> {
    const mod = await loadSpecialties();
    return mod.getSpecialtiesForBodySystem(system);
  }

  // -- Symptoms --
  async getAllSymptoms(): Promise<SymptomEntry[]> {
    const mod = await loadSymptoms();
    return mod.SYMPTOM_DATABASE;
  }

  async getSymptom(id: string): Promise<SymptomEntry | undefined> {
    const mod = await loadSymptoms();
    return mod.getSymptomById(id);
  }

  async getSymptomsByRegion(region: string): Promise<SymptomEntry[]> {
    const mod = await loadSymptoms();
    return mod.getSymptomsByBodyRegion(region);
  }

  async getSymptomsBySystem(system: string): Promise<SymptomEntry[]> {
    const mod = await loadSymptoms();
    return mod.getSymptomsByBodySystem(system);
  }

  async getSymptomsByCondition(conditionId: string): Promise<SymptomEntry[]> {
    const mod = await loadSymptoms();
    return mod.getSymptomsByCondition(conditionId);
  }

  // -- Procedures --
  async getAllProcedures(): Promise<MedicalProcedureEntry[]> {
    const mod = await loadProcedures();
    return mod.MEDICAL_PROCEDURES;
  }

  async getProcedure(id: string): Promise<MedicalProcedureEntry | undefined> {
    const mod = await loadProcedures();
    return mod.getProcedure(id);
  }

  async getProceduresByCategory(cat: ProcedureCategory): Promise<MedicalProcedureEntry[]> {
    const mod = await loadProcedures();
    return mod.getProceduresByCategory(cat);
  }

  async getProceduresBySpecialty(specialty: string): Promise<MedicalProcedureEntry[]> {
    const mod = await loadProcedures();
    return mod.getProceduresBySpecialty(specialty);
  }

  // -- Anatomy --
  async getAllAnatomyRegions(): Promise<AnatomyRegion[]> {
    const mod = await loadAnatomy();
    return mod.ANATOMY_REGIONS;
  }

  async getAnatomyRegion(id: string): Promise<AnatomyRegion | undefined> {
    const mod = await loadAnatomy();
    return mod.getAnatomyRegion(id);
  }

  async getAnatomyBySystem(system: AnatomySystem): Promise<AnatomyRegion[]> {
    const mod = await loadAnatomy();
    return mod.getAnatomyBySystem(system);
  }

  async getAnatomyForCondition(conditionId: string): Promise<AnatomyRegion[]> {
    const mod = await loadAnatomy();
    return mod.getAnatomyForCondition(conditionId);
  }

  // -- i18n --
  async translateTerm(term: string): Promise<string> {
    const mod = await loadTranslations();
    return mod.translateTerm(term);
  }

  async getGlossaryEntry(term: string): Promise<GlossaryEntry | undefined> {
    const mod = await loadGlossary();
    return mod.getPlainLanguage(term);
  }

  async getAllGlossaryEntries(): Promise<GlossaryEntry[]> {
    const mod = await loadGlossary();
    return mod.MEDICAL_GLOSSARY;
  }

  async getSpanishTranslations(): Promise<Record<string, string>> {
    const mod = await loadTranslations();
    return mod.MEDICAL_TERMS_ES;
  }

  // -- Explanation levels --
  async getAllExplanationLevels(): Promise<Record<ExplanationLevelNumber, ExplanationLevel>> {
    const mod = await loadEducation();
    return mod.EXPLANATION_LEVELS;
  }
}

// ===========================================================================
// Singleton
// ===========================================================================

let _instance: ContentService | null = null;

export function getContentService(): ContentService {
  if (!_instance) {
    _instance = new ContentService();
  }
  return _instance;
}

// ===========================================================================
// React Context & Provider
// ===========================================================================

export const ContentContext = createContext<ContentService | null>(null);

/**
 * React provider component. Wraps children with the ContentService context.
 * The service is created once and reused for the lifetime of the provider.
 *
 * Usage:
 * ```tsx
 * <ContentProvider>
 *   <App />
 * </ContentProvider>
 * ```
 */
export function ContentProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const serviceRef = useRef<ContentService | null>(null);
  if (!serviceRef.current) {
    serviceRef.current = getContentService();
  }

  const value = useMemo(() => serviceRef.current!, []);

  return React.createElement(ContentContext.Provider, { value }, children);
}

/**
 * Hook to access the ContentService from context.
 * Must be used inside a <ContentProvider>.
 */
export function useContentService(): ContentService {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error(
      'useContentService must be used within a <ContentProvider>. ' +
        'Wrap your component tree with <ContentProvider>.',
    );
  }
  return ctx;
}

// ===========================================================================
// Re-exports for convenience
// ===========================================================================

export type {
  KnowledgeGraph,
  KnowledgeNode,
  KnowledgeEdge,
  NodeType,
  RelationshipType,
  SearchResult,
  SearchOptions,
  MedicalSpecialty,
  BodySystemFocus,
  SymptomEntry,
  MedicalProcedureEntry,
  ProcedureCategory,
  AnatomyRegion,
  AnatomySystem,
  ExplanationLevelNumber,
  ExplanationLevel,
  ExplanationTemplate,
  ConditionKey,
  GlossaryEntry,
};
