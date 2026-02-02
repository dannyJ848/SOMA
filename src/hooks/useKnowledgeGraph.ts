/**
 * useKnowledgeGraph hook
 *
 * React hook for querying the knowledge graph around a given node.
 * Returns related nodes grouped by category (conditions, anatomy,
 * symptoms, medications, procedures, managing specialties) along with
 * the raw edges and a loading indicator.
 *
 * Must be used inside a <ContentProvider>.
 *
 * @example
 * ```tsx
 * const {
 *   relatedConditions,
 *   relatedAnatomy,
 *   relatedSymptoms,
 *   relatedMedications,
 *   relatedProcedures,
 *   managingSpecialties,
 *   edges,
 *   isLoading,
 * } = useKnowledgeGraph('condition:hypertension');
 * ```
 */

import { useState, useEffect } from 'react';
import {
  useContentService,
  type KnowledgeNode,
  type KnowledgeEdge,
} from '../services/ContentService';

// ---------------------------------------------------------------------------
// Public state type
// ---------------------------------------------------------------------------

export interface KnowledgeGraphState {
  /** Conditions related to this node */
  relatedConditions: KnowledgeNode[];
  /** Anatomy regions related to this node */
  relatedAnatomy: KnowledgeNode[];
  /** Symptoms related to this node */
  relatedSymptoms: KnowledgeNode[];
  /** Medications related to this node */
  relatedMedications: KnowledgeNode[];
  /** Procedures related to this node */
  relatedProcedures: KnowledgeNode[];
  /** Medical specialties that manage this node */
  managingSpecialties: KnowledgeNode[];
  /** All edges for this node (both directions) */
  edges: KnowledgeEdge[];
  /** True while the initial query is resolving */
  isLoading: boolean;
  /** Non-null if the node was not found */
  error: string | null;
}

const EMPTY_STATE: KnowledgeGraphState = {
  relatedConditions: [],
  relatedAnatomy: [],
  relatedSymptoms: [],
  relatedMedications: [],
  relatedProcedures: [],
  managingSpecialties: [],
  edges: [],
  isLoading: true,
  error: null,
};

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Query the knowledge graph for all content related to a given node.
 *
 * The node ID should be a fully-qualified graph ID such as
 * `"condition:hypertension"` or `"anatomy:heart"`. If a bare slug is
 * provided (e.g. `"hypertension"`) the hook will *not* try to guess
 * the prefix -- pass the full ID for deterministic results.
 *
 * @param nodeId - Fully-qualified knowledge graph node ID
 */
export function useKnowledgeGraph(nodeId: string): KnowledgeGraphState {
  const service = useContentService();
  const [state, setState] = useState<KnowledgeGraphState>(EMPTY_STATE);

  useEffect(() => {
    if (!nodeId) {
      setState({
        ...EMPTY_STATE,
        isLoading: false,
        error: 'No node ID provided',
      });
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    // All graph queries are synchronous (in-memory), but we keep them
    // inside an effect to mirror the pattern used by other hooks in this
    // project and to stay compatible if the graph ever becomes async.
    const graph = service.getGraph();
    const node = graph.getNode(nodeId);

    if (!node) {
      setState({
        ...EMPTY_STATE,
        isLoading: false,
        error: `Node "${nodeId}" not found in the knowledge graph`,
      });
      return;
    }

    // Deduplicate helper: getRelated already deduplicates internally,
    // but we call it multiple times with different filters so there is
    // no cross-call overlap to worry about.
    const relatedConditions = graph.getRelated(nodeId, undefined, 'condition');
    const relatedAnatomy = graph.getRelated(nodeId, undefined, 'anatomy');
    const relatedSymptoms = graph.getRelated(nodeId, undefined, 'symptom');
    const relatedMedications = graph.getRelated(nodeId, undefined, 'medication');
    const relatedProcedures = graph.getRelated(nodeId, undefined, 'procedure');
    const managingSpecialties = graph.getRelated(nodeId, undefined, 'specialty');
    const edges = graph.getEdgesForNode(nodeId);

    setState({
      relatedConditions,
      relatedAnatomy,
      relatedSymptoms,
      relatedMedications,
      relatedProcedures,
      managingSpecialties,
      edges,
      isLoading: false,
      error: null,
    });
  }, [nodeId, service]);

  return state;
}
