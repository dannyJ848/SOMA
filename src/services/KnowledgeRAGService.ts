/**
 * KnowledgeRAGService
 *
 * Enriches AI chat context by bridging the knowledge graph / search engine
 * databases with the existing RAG pipeline. This service does NOT duplicate
 * the content databases -- it queries them on the fly and serialises a
 * compact context string that can be prepended to the AI system prompt.
 *
 * Entry points:
 *   - buildRAGContext(query, userContext?)  -- main context builder
 *   - getRelatedContent(entityId, entityType) -- graph traversal helper
 */

import {
  getKnowledgeGraph,
  type KnowledgeGraph,
  type KnowledgeNode,
  type KnowledgeEdge,
  type NodeType,
} from '../../core/knowledge-graph/knowledge-index';
import {
  searchKnowledge,
  type SearchResult,
  type SearchOptions,
} from '../../core/knowledge-graph/search-engine';
import {
  EXPLANATION_LEVELS,
  LEVEL_PROMPTS,
  type ExplanationLevelNumber,
} from '../../core/education/explanation-levels';
import { translateTerm } from '../../core/i18n/medical-translations-es';
import { MEDICAL_GLOSSARY, type GlossaryEntry } from '../../core/i18n/medical-glossary';

// ============================================================================
// Public Types
// ============================================================================

export interface RAGUserContext {
  /** Known conditions the user has (free-text or graph ids) */
  conditions?: string[];
  /** Preferred language */
  language?: 'en' | 'es';
  /** Explanation complexity 1-5 */
  complexityLevel?: ExplanationLevelNumber;
}

export interface RAGContextResult {
  /** Formatted context string ready for system-prompt injection */
  contextString: string;
  /** IDs of nodes that contributed to this context */
  sourceNodeIds: string[];
  /** Number of graph relationships surfaced */
  relationshipsFound: number;
}

export interface RelatedContentResult {
  /** The node that was looked up */
  entity: KnowledgeNode | null;
  /** Related conditions */
  conditions: KnowledgeNode[];
  /** Related symptoms */
  symptoms: KnowledgeNode[];
  /** Related anatomy structures */
  anatomy: KnowledgeNode[];
  /** Related procedures */
  procedures: KnowledgeNode[];
  /** Related medications */
  medications: KnowledgeNode[];
  /** Related specialties */
  specialties: KnowledgeNode[];
  /** All edges involving this entity */
  edges: KnowledgeEdge[];
}

// ============================================================================
// Constants
// ============================================================================

/** Maximum number of search results to consider for context building */
const MAX_SEARCH_RESULTS = 10;

/** Maximum number of related nodes per category in context output */
const MAX_RELATED_PER_CATEGORY = 6;

/** Maximum total context length in characters (keep prompts manageable) */
const MAX_CONTEXT_CHARS = 3000;

// ============================================================================
// buildRAGContext
// ============================================================================

/**
 * Search the knowledge graph for entities matching `query`, traverse their
 * relationships, apply level-appropriate framing, optionally translate to
 * Spanish, and return a structured context string for the AI system prompt.
 */
export function buildRAGContext(
  query: string,
  userContext?: RAGUserContext,
): RAGContextResult {
  const language = userContext?.language ?? 'en';
  const level = userContext?.complexityLevel ?? 2;
  const graph = getKnowledgeGraph();

  // ------------------------------------------------------------------
  // 1. Search the graph for nodes matching the query
  // ------------------------------------------------------------------
  const searchOpts: SearchOptions = {
    language,
    limit: MAX_SEARCH_RESULTS,
    useSynonyms: true,
    minScore: 0.3,
  };

  const results: SearchResult[] = searchKnowledge(query, searchOpts);
  if (results.length === 0) {
    return { contextString: '', sourceNodeIds: [], relationshipsFound: 0 };
  }

  // ------------------------------------------------------------------
  // 2. Gather primary nodes + their graph neighbours
  // ------------------------------------------------------------------
  const sourceNodeIds: string[] = [];
  let relationshipsFound = 0;

  /** Accumulator per category to avoid duplicates */
  const gathered = {
    conditions: new Map<string, KnowledgeNode>(),
    symptoms: new Map<string, KnowledgeNode>(),
    anatomy: new Map<string, KnowledgeNode>(),
    procedures: new Map<string, KnowledgeNode>(),
    medications: new Map<string, KnowledgeNode>(),
    specialties: new Map<string, KnowledgeNode>(),
  };

  /** The top-scored primary node drives the "focus" of the context block */
  const primaryNode = results[0].node;
  sourceNodeIds.push(primaryNode.id);

  for (const result of results) {
    const node = result.node;
    addToCategory(gathered, node);

    // Traverse one hop from every matched node
    const related = graph.getRelated(node.id);
    relationshipsFound += related.length;
    for (const rel of related) {
      addToCategory(gathered, rel);
      sourceNodeIds.push(rel.id);
    }

    // Type-specific deeper traversal for the top results (score > 0.5)
    if (result.score >= 0.5) {
      traverseByType(graph, node, gathered);
    }
  }

  // Also search for user's known conditions and weave them in
  if (userContext?.conditions?.length) {
    for (const conditionText of userContext.conditions) {
      const condResults = searchKnowledge(conditionText, {
        language,
        limit: 3,
        types: ['condition'],
        minScore: 0.4,
      });
      for (const cr of condResults) {
        addToCategory(gathered, cr.node);
        sourceNodeIds.push(cr.node.id);
      }
    }
  }

  // ------------------------------------------------------------------
  // 3. Build the context string
  // ------------------------------------------------------------------
  const sections: string[] = [];

  // Header with level guidance
  const levelInfo = EXPLANATION_LEVELS[level];
  const levelPrompt = LEVEL_PROMPTS[level];
  sections.push(
    `[Knowledge Context — Explanation Level ${level}: ${levelInfo.name} (${levelInfo.audience})]`,
  );

  // Communication constraints for this level
  sections.push(`Communication style: ${levelInfo.constraints.slice(0, 3).join('; ')}`);

  // Primary topic
  const primaryName = displayName(primaryNode, language);
  const primaryDesc = displayDescription(primaryNode, language);
  sections.push(`\nPrimary topic: ${primaryName}`);
  if (primaryDesc) {
    sections.push(`Description: ${primaryDesc}`);
  }

  // Related conditions
  const conditions = topN(gathered.conditions, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (conditions.length > 0) {
    sections.push(`\nRelated conditions: ${conditions.map(n => displayName(n, language)).join(', ')}`);
  }

  // Related symptoms
  const symptoms = topN(gathered.symptoms, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (symptoms.length > 0) {
    sections.push(`Related symptoms: ${symptoms.map(n => displayName(n, language)).join(', ')}`);
  }

  // Related anatomy
  const anatomy = topN(gathered.anatomy, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (anatomy.length > 0) {
    sections.push(`Related anatomy: ${anatomy.map(n => displayName(n, language)).join(', ')}`);
  }

  // Related procedures
  const procedures = topN(gathered.procedures, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (procedures.length > 0) {
    sections.push(`Diagnostic/treatment procedures: ${procedures.map(n => displayName(n, language)).join(', ')}`);
  }

  // Related medications
  const medications = topN(gathered.medications, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (medications.length > 0) {
    sections.push(`Related medications: ${medications.map(n => displayName(n, language)).join(', ')}`);
  }

  // Related specialties
  const specialties = topN(gathered.specialties, primaryNode.id, MAX_RELATED_PER_CATEGORY);
  if (specialties.length > 0) {
    sections.push(`Relevant specialties: ${specialties.map(n => displayName(n, language)).join(', ')}`);
  }

  // Glossary terms -- find plain-language definitions for key terms in the context
  const glossarySnippets = findGlossaryTerms(query, language);
  if (glossarySnippets.length > 0) {
    sections.push(`\nGlossary: ${glossarySnippets.join('; ')}`);
  }

  // User's known conditions (personalisation hint)
  if (userContext?.conditions?.length) {
    const condText = userContext.conditions.join(', ');
    sections.push(
      language === 'es'
        ? `\nCondiciones conocidas del usuario: ${condText}`
        : `\nUser's known conditions: ${condText}`,
    );
  }

  // Language instruction
  if (language === 'es') {
    sections.push('\nIMPORTANT: Respond entirely in Spanish (Español). Use the Spanish medical terms provided above.');
  }

  // Assemble and truncate
  let contextString = sections.join('\n');
  if (contextString.length > MAX_CONTEXT_CHARS) {
    contextString = contextString.slice(0, MAX_CONTEXT_CHARS - 3) + '...';
  }

  return {
    contextString,
    sourceNodeIds: [...new Set(sourceNodeIds)],
    relationshipsFound,
  };
}

// ============================================================================
// getRelatedContent
// ============================================================================

/**
 * Traverse the knowledge graph from a given entity and return all related
 * content grouped by type. Useful for populating "Related" panels in the UI
 * or for deeper follow-up context expansion.
 */
export function getRelatedContent(
  entityId: string,
  entityType: string,
): RelatedContentResult {
  const graph = getKnowledgeGraph();
  const entity = graph.getNode(entityId) ?? null;

  const empty: RelatedContentResult = {
    entity,
    conditions: [],
    symptoms: [],
    anatomy: [],
    procedures: [],
    medications: [],
    specialties: [],
    edges: [],
  };

  if (!entity) {
    return empty;
  }

  const edges = graph.getEdgesForNode(entityId);
  const related = graph.getRelated(entityId);

  const result: RelatedContentResult = {
    entity,
    conditions: [],
    symptoms: [],
    anatomy: [],
    procedures: [],
    medications: [],
    specialties: [],
    edges,
  };

  for (const node of related) {
    switch (node.type) {
      case 'condition':
        result.conditions.push(node);
        break;
      case 'symptom':
        result.symptoms.push(node);
        break;
      case 'anatomy':
        result.anatomy.push(node);
        break;
      case 'procedure':
        result.procedures.push(node);
        break;
      case 'medication':
        result.medications.push(node);
        break;
      case 'specialty':
        result.specialties.push(node);
        break;
    }
  }

  // Type-specific enrichment
  if (entity.type === 'condition') {
    appendUnique(result.symptoms, graph.getSymptomsForCondition(entityId));
    appendUnique(result.medications, graph.getMedicationsForCondition(entityId));
    appendUnique(result.procedures, graph.getProceduresForCondition(entityId));
    appendUnique(result.specialties, graph.getSpecialistsForCondition(entityId));
  } else if (entity.type === 'anatomy') {
    appendUnique(result.conditions, graph.getConditionsForRegion(entityId));
  } else if (entity.type === 'symptom') {
    appendUnique(result.anatomy, graph.getAnatomyForSymptom(entityId));
  } else if (entity.type === 'procedure') {
    appendUnique(result.anatomy, graph.getAnatomyForProcedure(entityId));
  } else if (entity.type === 'specialty') {
    const specialtyNodes = graph.getNodesForSpecialty(entityId);
    for (const sn of specialtyNodes) {
      switch (sn.type) {
        case 'condition':
          appendUnique(result.conditions, [sn]);
          break;
        case 'anatomy':
          appendUnique(result.anatomy, [sn]);
          break;
        case 'procedure':
          appendUnique(result.procedures, [sn]);
          break;
      }
    }
  }

  return result;
}

// ============================================================================
// Internal Helpers
// ============================================================================

type GatheredMap = Record<string, Map<string, KnowledgeNode>>;

function addToCategory(
  gathered: {
    conditions: Map<string, KnowledgeNode>;
    symptoms: Map<string, KnowledgeNode>;
    anatomy: Map<string, KnowledgeNode>;
    procedures: Map<string, KnowledgeNode>;
    medications: Map<string, KnowledgeNode>;
    specialties: Map<string, KnowledgeNode>;
  },
  node: KnowledgeNode,
): void {
  const categoryMap: Record<NodeType, keyof typeof gathered> = {
    condition: 'conditions',
    symptom: 'symptoms',
    anatomy: 'anatomy',
    procedure: 'procedures',
    medication: 'medications',
    specialty: 'specialties',
  };
  const key = categoryMap[node.type];
  if (key && !gathered[key].has(node.id)) {
    gathered[key].set(node.id, node);
  }
}

/**
 * Perform type-specific graph traversal to pull in the most relevant
 * neighbours for a given node.
 */
function traverseByType(
  graph: KnowledgeGraph,
  node: KnowledgeNode,
  gathered: {
    conditions: Map<string, KnowledgeNode>;
    symptoms: Map<string, KnowledgeNode>;
    anatomy: Map<string, KnowledgeNode>;
    procedures: Map<string, KnowledgeNode>;
    medications: Map<string, KnowledgeNode>;
    specialties: Map<string, KnowledgeNode>;
  },
): void {
  switch (node.type) {
    case 'condition': {
      for (const s of graph.getSymptomsForCondition(node.id)) {
        addToCategory(gathered, s);
      }
      for (const m of graph.getMedicationsForCondition(node.id)) {
        addToCategory(gathered, m);
      }
      for (const p of graph.getProceduresForCondition(node.id)) {
        addToCategory(gathered, p);
      }
      for (const sp of graph.getSpecialistsForCondition(node.id)) {
        addToCategory(gathered, sp);
      }
      break;
    }
    case 'anatomy': {
      for (const c of graph.getConditionsForRegion(node.id)) {
        addToCategory(gathered, c);
      }
      break;
    }
    case 'symptom': {
      for (const a of graph.getAnatomyForSymptom(node.id)) {
        addToCategory(gathered, a);
      }
      break;
    }
    case 'procedure': {
      for (const a of graph.getAnatomyForProcedure(node.id)) {
        addToCategory(gathered, a);
      }
      break;
    }
    case 'medication': {
      for (const sys of graph.getSystemsForMedication(node.id)) {
        addToCategory(gathered, sys);
      }
      break;
    }
    case 'specialty': {
      for (const n of graph.getNodesForSpecialty(node.id)) {
        addToCategory(gathered, n);
      }
      break;
    }
  }
}

/**
 * Return the display name for a node in the requested language.
 */
function displayName(node: KnowledgeNode, language: 'en' | 'es'): string {
  if (language === 'es' && node.spanishName) {
    return node.spanishName;
  }
  return node.name;
}

/**
 * Return the description for a node in the requested language.
 */
function displayDescription(node: KnowledgeNode, language: 'en' | 'es'): string | null {
  if (language === 'es') {
    return node.spanishDescription ?? node.description ?? null;
  }
  return node.description ?? null;
}

/**
 * Extract the top N nodes from a map, excluding a specific ID (the primary node).
 */
function topN(
  map: Map<string, KnowledgeNode>,
  excludeId: string,
  limit: number,
): KnowledgeNode[] {
  const out: KnowledgeNode[] = [];
  for (const [id, node] of map) {
    if (id === excludeId) continue;
    out.push(node);
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Append nodes to an array only if not already present (by id).
 */
function appendUnique(target: KnowledgeNode[], source: KnowledgeNode[]): void {
  const existing = new Set(target.map(n => n.id));
  for (const node of source) {
    if (!existing.has(node.id)) {
      target.push(node);
      existing.add(node.id);
    }
  }
}

/**
 * Search the bilingual medical glossary for terms relevant to the query.
 * Returns plain-language definitions in the requested language.
 */
function findGlossaryTerms(query: string, language: 'en' | 'es'): string[] {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter(w => w.length > 2);
  const matches: string[] = [];

  for (const entry of MEDICAL_GLOSSARY) {
    const termLower = entry.term.toLowerCase();
    // Match if the query contains the glossary term or vice versa
    const termMatches =
      q.includes(termLower) ||
      termLower.includes(q) ||
      words.some(w => termLower.includes(w));

    if (termMatches) {
      const definition =
        language === 'es'
          ? `${entry.term}: ${entry.plainES}`
          : `${entry.term}: ${entry.plainEN}`;
      matches.push(definition);
      if (matches.length >= 5) break; // cap glossary snippets
    }
  }

  return matches;
}
