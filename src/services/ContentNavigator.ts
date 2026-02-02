/**
 * ContentNavigator — Cross-Reference Navigation Service
 *
 * Resolves cross-reference links from EducationalContent items to their
 * target content objects. Bridges the CrossReference type (targetId + targetType)
 * from core/content/types.ts with the ContentService's various lookup methods
 * and the knowledge graph's relationship edges.
 *
 * Usage:
 *   const navigator = new ContentNavigator(contentService);
 *   const result = await navigator.resolve(crossRef);
 *   // result.content holds the resolved EducationalContent or graph node
 */

import type {
  CrossReference,
  ContentType as EducationalContentType,
  EducationalContent,
} from '@core/content/types';

import type {
  KnowledgeNode,
  KnowledgeEdge,
  NodeType,
} from '@core/knowledge-graph/knowledge-index';

import type { ContentService } from './ContentService';

// ---------------------------------------------------------------------------
// Resolution Result Types
// ---------------------------------------------------------------------------

/**
 * The resolved target of a cross-reference. Includes all available metadata
 * so the UI can render an appropriate preview or navigate to the content.
 */
export interface ResolvedCrossReference {
  /** The original cross-reference that was resolved */
  crossReference: CrossReference;
  /** Whether resolution succeeded */
  found: boolean;
  /** Display name for the target */
  name: string;
  /** Spanish display name, if available */
  nameEs?: string;
  /** Short description for previews */
  description?: string;
  /** The target content type, mapped to a route-friendly category */
  category: NavigableCategory;
  /** The knowledge graph node, if found */
  graphNode?: KnowledgeNode;
  /** Route information for navigation */
  route: NavigationTarget;
}

/**
 * Categories that map to application routes.
 */
export type NavigableCategory =
  | 'condition'
  | 'symptom'
  | 'anatomy'
  | 'procedure'
  | 'medication'
  | 'specialty'
  | 'topic'
  | 'concept';

/**
 * Route information for the NavigationProvider.
 */
export interface NavigationTarget {
  /** Route ID for the NavigationProvider */
  routeId: string;
  /** Route params (e.g., conditionId, symptomId) */
  params: Record<string, string>;
  /** Optional query params */
  query?: Record<string, string>;
}

/**
 * A related content item discovered via the knowledge graph.
 */
export interface RelatedContentItem {
  /** The knowledge graph node */
  node: KnowledgeNode;
  /** The edge connecting this to the source node */
  edge: KnowledgeEdge;
  /** Display label */
  name: string;
  /** Spanish name */
  nameEs?: string;
  /** Route for navigation */
  route: NavigationTarget;
  /** Relationship description for display */
  relationshipLabel: string;
}

// ---------------------------------------------------------------------------
// ContentType -> NavigableCategory mapping
// ---------------------------------------------------------------------------

/**
 * Maps the EducationalContent `type` field to a navigable category.
 */
function mapContentTypeToCategory(contentType: EducationalContentType): NavigableCategory {
  switch (contentType) {
    case 'condition':
      return 'condition';
    case 'structure':
      return 'anatomy';
    case 'system':
      return 'anatomy';
    case 'pathway':
      return 'anatomy';
    case 'process':
      return 'topic';
    case 'concept':
      return 'concept';
    case 'topic':
      return 'topic';
    default:
      return 'topic';
  }
}

/**
 * Maps a knowledge graph NodeType to a navigable category.
 */
function mapNodeTypeToCategory(nodeType: NodeType): NavigableCategory {
  switch (nodeType) {
    case 'condition':
      return 'condition';
    case 'anatomy':
      return 'anatomy';
    case 'symptom':
      return 'symptom';
    case 'medication':
      return 'medication';
    case 'procedure':
      return 'procedure';
    case 'specialty':
      return 'specialty';
    default:
      return 'topic';
  }
}

/**
 * Determines the best route for a given category and ID.
 */
function buildNavigationTarget(category: NavigableCategory, id: string): NavigationTarget {
  // Strip any type prefix (e.g., "condition:hypertension" -> "hypertension")
  const strippedId = id.includes(':') ? id.split(':').slice(1).join(':') : id;

  switch (category) {
    case 'condition':
      return {
        routeId: 'condition-detail',
        params: { conditionId: strippedId },
      };
    case 'symptom':
      return {
        routeId: 'symptom-detail',
        params: { symptomId: strippedId },
      };
    case 'anatomy':
      return {
        routeId: 'encyclopedia-entry',
        params: { entryId: strippedId },
      };
    case 'medication':
      return {
        routeId: 'medication-detail',
        params: { medicationId: strippedId },
      };
    case 'procedure':
      return {
        routeId: 'encyclopedia-entry',
        params: { entryId: strippedId },
      };
    case 'specialty':
      return {
        routeId: 'encyclopedia-entry',
        params: { entryId: strippedId },
      };
    case 'topic':
    case 'concept':
    default:
      return {
        routeId: 'encyclopedia-entry',
        params: { entryId: strippedId },
      };
  }
}

/**
 * Provides human-readable labels for knowledge graph relationship types.
 */
function formatRelationshipLabel(relationship: string, direction: 'outgoing' | 'incoming'): string {
  const labels: Record<string, { outgoing: string; incoming: string }> = {
    'treats':          { outgoing: 'Treats',           incoming: 'Treated by' },
    'causes':          { outgoing: 'Causes',           incoming: 'Caused by' },
    'manifests-in':    { outgoing: 'Manifests in',     incoming: 'Manifested by' },
    'diagnosed-by':    { outgoing: 'Diagnosed by',     incoming: 'Diagnoses' },
    'performed-on':    { outgoing: 'Performed on',     incoming: 'Involves' },
    'managed-by':      { outgoing: 'Managed by',       incoming: 'Manages' },
    'affects':         { outgoing: 'Affects',           incoming: 'Affected by' },
    'associated-with': { outgoing: 'Associated with',  incoming: 'Associated with' },
    'specializes-in':  { outgoing: 'Specializes in',   incoming: 'Specialty of' },
  };

  const entry = labels[relationship];
  if (entry) return entry[direction];
  return relationship.replace(/-/g, ' ');
}

// ---------------------------------------------------------------------------
// ContentNavigator Service
// ---------------------------------------------------------------------------

export class ContentNavigator {
  private contentService: ContentService;

  constructor(contentService: ContentService) {
    this.contentService = contentService;
  }

  // -------------------------------------------------------------------------
  // 1. Resolve a CrossReference to a navigable target
  // -------------------------------------------------------------------------

  /**
   * Resolve a single CrossReference to its full metadata and navigation route.
   * First checks the knowledge graph, then falls back to search.
   */
  async resolve(crossRef: CrossReference): Promise<ResolvedCrossReference> {
    const category = mapContentTypeToCategory(crossRef.targetType);

    // Try knowledge graph lookup first (with type prefix)
    const prefixedId = crossRef.targetId.includes(':')
      ? crossRef.targetId
      : `${category}:${crossRef.targetId}`;

    const graphNode = this.contentService.getGraphNode(prefixedId)
      ?? this.contentService.getGraphNode(crossRef.targetId);

    if (graphNode) {
      return {
        crossReference: crossRef,
        found: true,
        name: crossRef.label || graphNode.name,
        nameEs: graphNode.spanishName,
        description: graphNode.description,
        category: mapNodeTypeToCategory(graphNode.type),
        graphNode,
        route: buildNavigationTarget(
          mapNodeTypeToCategory(graphNode.type),
          graphNode.id,
        ),
      };
    }

    // Fallback: return a best-effort result using the cross-reference metadata
    return {
      crossReference: crossRef,
      found: false,
      name: crossRef.label || crossRef.targetId.replace(/-/g, ' '),
      category,
      route: buildNavigationTarget(category, crossRef.targetId),
    };
  }

  /**
   * Resolve multiple cross-references in parallel.
   */
  async resolveAll(crossRefs: CrossReference[]): Promise<ResolvedCrossReference[]> {
    return Promise.all(crossRefs.map((ref) => this.resolve(ref)));
  }

  // -------------------------------------------------------------------------
  // 2. Get related content from the knowledge graph
  // -------------------------------------------------------------------------

  /**
   * Get all related content items for a given content ID using the
   * knowledge graph edges. Returns items grouped by their relationship.
   */
  getRelatedContent(contentId: string): RelatedContentItem[] {
    const graph = this.contentService.getGraph();
    const edges = graph.getEdgesForNode(contentId);
    const items: RelatedContentItem[] = [];
    const seen = new Set<string>();

    for (const edge of edges) {
      const isOutgoing = edge.fromId === contentId;
      const targetId = isOutgoing ? edge.toId : edge.fromId;

      if (seen.has(targetId)) continue;
      seen.add(targetId);

      const node = graph.getNode(targetId);
      if (!node) continue;

      const category = mapNodeTypeToCategory(node.type);
      const direction = isOutgoing ? 'outgoing' : 'incoming';

      items.push({
        node,
        edge,
        name: node.name,
        nameEs: node.spanishName,
        route: buildNavigationTarget(category, node.id),
        relationshipLabel: formatRelationshipLabel(edge.relationship, direction),
      });
    }

    return items;
  }

  /**
   * Get related content items filtered by node type.
   */
  getRelatedContentByType(contentId: string, targetType: NodeType): RelatedContentItem[] {
    return this.getRelatedContent(contentId).filter(
      (item) => item.node.type === targetType,
    );
  }

  /**
   * Get related conditions for a given anatomy region or symptom.
   */
  getRelatedConditions(contentId: string): RelatedContentItem[] {
    return this.getRelatedContentByType(contentId, 'condition');
  }

  /**
   * Get related anatomy regions for a given condition or symptom.
   */
  getRelatedAnatomy(contentId: string): RelatedContentItem[] {
    return this.getRelatedContentByType(contentId, 'anatomy');
  }

  /**
   * Get medications related to a given condition.
   */
  getRelatedMedications(contentId: string): RelatedContentItem[] {
    return this.getRelatedContentByType(contentId, 'medication');
  }

  /**
   * Get procedures related to a given condition.
   */
  getRelatedProcedures(contentId: string): RelatedContentItem[] {
    return this.getRelatedContentByType(contentId, 'procedure');
  }
}

// ---------------------------------------------------------------------------
// Singleton & Factory
// ---------------------------------------------------------------------------

let _navigatorInstance: ContentNavigator | null = null;

/**
 * Get (or create) a singleton ContentNavigator instance.
 * Requires the ContentService to be initialized first.
 */
export function getContentNavigator(contentService: ContentService): ContentNavigator {
  if (!_navigatorInstance) {
    _navigatorInstance = new ContentNavigator(contentService);
  }
  return _navigatorInstance;
}

/**
 * Reset the singleton (useful for testing).
 */
export function resetContentNavigator(): void {
  _navigatorInstance = null;
}
