/**
 * RelatedContent -- Knowledge-graph-powered related items panel
 *
 * Renders related content for any knowledge graph node, grouped by
 * relationship type. Each item is displayed as a clickable card with
 * visual weight reflecting edge strength (primary / secondary / tertiary).
 *
 * Designed to sit at the bottom of condition/topic detail views.
 *
 * Usage:
 * ```tsx
 * <RelatedContent
 *   nodeId="condition:hypertension"
 *   onItemPress={(node) => navigate(`/topic/${node.id}`)}
 * />
 * ```
 */

import React, { useMemo } from 'react';
import { useContentService } from '../services/ContentService';
import { useKnowledgeGraph } from '../hooks/useKnowledgeGraph';
import type { KnowledgeNode, KnowledgeEdge, RelationshipType } from '../services/ContentService';
import type { EdgeStrength } from '@core/knowledge-graph/knowledge-index';

// ============================================================================
// Types
// ============================================================================

export interface RelatedContentProps {
  /** Fully-qualified knowledge graph node ID (e.g. "condition:hypertension") */
  nodeId: string;
  /** Callback when a related item is pressed/clicked */
  onItemPress?: (node: KnowledgeNode) => void;
  /** Optional CSS class name for the root container */
  className?: string;
  /** Maximum items to show per group before collapsing (default 6) */
  maxPerGroup?: number;
  /** Hide groups that have zero items (default true) */
  hideEmpty?: boolean;
}

/** A related node with its connecting edge metadata. */
interface RelatedItem {
  node: KnowledgeNode;
  edge: KnowledgeEdge;
}

/** A group of related items sharing the same relationship type. */
interface RelationshipGroup {
  relationship: RelationshipType;
  label: string;
  items: RelatedItem[];
}

// ============================================================================
// Relationship display metadata
// ============================================================================

const RELATIONSHIP_LABELS: Record<RelationshipType, string> = {
  'treats': 'Treatments',
  'causes': 'Causes / Caused By',
  'manifests-in': 'Manifests In',
  'diagnosed-by': 'Diagnostic Methods',
  'performed-on': 'Procedures',
  'managed-by': 'Managing Specialties',
  'affects': 'Affects',
  'associated-with': 'Associated With',
  'specializes-in': 'Specializes In',
};

/** Display order for relationship groups (lower = higher priority). */
const RELATIONSHIP_ORDER: Record<RelationshipType, number> = {
  'managed-by': 0,
  'causes': 1,
  'treats': 2,
  'diagnosed-by': 3,
  'manifests-in': 4,
  'affects': 5,
  'performed-on': 6,
  'associated-with': 7,
  'specializes-in': 8,
};

// ============================================================================
// Edge strength visual styles
// ============================================================================

const STRENGTH_STYLES: Record<EdgeStrength, React.CSSProperties> = {
  primary: {
    borderLeft: '4px solid #2563eb',
    opacity: 1,
  },
  secondary: {
    borderLeft: '4px solid #60a5fa',
    opacity: 0.9,
  },
  tertiary: {
    borderLeft: '4px solid #bfdbfe',
    opacity: 0.75,
  },
};

const STRENGTH_LABELS: Record<EdgeStrength, string> = {
  primary: 'Strong relationship',
  secondary: 'Moderate relationship',
  tertiary: 'Weak relationship',
};

// ============================================================================
// Styles (inline -- keeps the component self-contained)
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  root: {
    marginTop: 32,
    padding: '0 0 24px',
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 16,
    color: '#1e293b',
  },
  groupHeading: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 8,
    marginTop: 20,
    color: '#475569',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 12,
  },
  card: {
    padding: '12px 16px',
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    cursor: 'pointer',
    transition: 'box-shadow 0.15s ease, transform 0.15s ease',
  },
  cardName: {
    fontSize: 14,
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: 2,
  },
  cardSpanish: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  cardType: {
    fontSize: 11,
    color: '#94a3b8',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  strengthDot: {
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    marginRight: 6,
    verticalAlign: 'middle',
  },
  emptyState: {
    color: '#94a3b8',
    fontStyle: 'italic' as const,
    padding: '16px 0',
    fontSize: 14,
  },
  loadingState: {
    color: '#94a3b8',
    padding: '16px 0',
    fontSize: 14,
  },
  errorState: {
    color: '#ef4444',
    padding: '16px 0',
    fontSize: 14,
  },
};

// ============================================================================
// Helper: group edges by relationship type
// ============================================================================

function groupByRelationship(
  nodeId: string,
  edges: KnowledgeEdge[],
  getNode: (id: string) => KnowledgeNode | undefined,
): RelationshipGroup[] {
  const groups = new Map<RelationshipType, RelatedItem[]>();

  for (const edge of edges) {
    // Determine the "other" node in the edge
    const otherId = edge.fromId === nodeId ? edge.toId : edge.fromId;
    const otherNode = getNode(otherId);
    if (!otherNode) continue;

    const existing = groups.get(edge.relationship);
    const item: RelatedItem = { node: otherNode, edge };
    if (existing) {
      // Deduplicate by node id within a group
      if (!existing.some((i) => i.node.id === otherNode.id)) {
        existing.push(item);
      }
    } else {
      groups.set(edge.relationship, [item]);
    }
  }

  // Sort items within each group: primary first, then secondary, then tertiary
  const strengthOrder: Record<EdgeStrength, number> = {
    primary: 0,
    secondary: 1,
    tertiary: 2,
  };

  const result: RelationshipGroup[] = [];
  for (const [relationship, items] of groups.entries()) {
    items.sort((a, b) => strengthOrder[a.edge.strength] - strengthOrder[b.edge.strength]);
    result.push({
      relationship,
      label: RELATIONSHIP_LABELS[relationship],
      items,
    });
  }

  // Sort groups by display order
  result.sort(
    (a, b) => RELATIONSHIP_ORDER[a.relationship] - RELATIONSHIP_ORDER[b.relationship],
  );

  return result;
}

// ============================================================================
// Strength dot color helper
// ============================================================================

function strengthDotColor(strength: EdgeStrength): string {
  switch (strength) {
    case 'primary':
      return '#2563eb';
    case 'secondary':
      return '#60a5fa';
    case 'tertiary':
      return '#bfdbfe';
  }
}

// ============================================================================
// Component
// ============================================================================

export function RelatedContent({
  nodeId,
  onItemPress,
  className,
  maxPerGroup = 6,
  hideEmpty = true,
}: RelatedContentProps): React.ReactElement | null {
  const { edges, isLoading, error } = useKnowledgeGraph(nodeId);
  const contentService = useContentService();

  const groups = useMemo(() => {
    if (!edges.length) return [];
    const graph = contentService.getGraph();
    return groupByRelationship(nodeId, edges, (id) => graph.getNode(id));
  }, [nodeId, edges, contentService]);

  // --- Loading state ---
  if (isLoading) {
    return (
      <div style={styles.root} className={className}>
        <div style={styles.loadingState}>Loading related content...</div>
      </div>
    );
  }

  // --- Error state ---
  if (error) {
    return (
      <div style={styles.root} className={className}>
        <div style={styles.errorState}>{error}</div>
      </div>
    );
  }

  // --- Empty state ---
  if (hideEmpty && groups.length === 0) {
    return null;
  }

  if (groups.length === 0) {
    return (
      <div style={styles.root} className={className}>
        <h3 style={styles.heading}>Related Content</h3>
        <div style={styles.emptyState}>No related items found in the knowledge graph.</div>
      </div>
    );
  }

  // --- Populated state ---
  return (
    <div style={styles.root} className={className}>
      <h3 style={styles.heading}>Related Content</h3>

      {groups.map((group) => {
        const visibleItems = group.items.slice(0, maxPerGroup);
        const hiddenCount = group.items.length - visibleItems.length;

        return (
          <div key={group.relationship}>
            <h4 style={styles.groupHeading}>{group.label}</h4>
            <div style={styles.grid}>
              {visibleItems.map((item) => (
                <div
                  key={item.node.id}
                  role="button"
                  tabIndex={0}
                  style={{
                    ...styles.card,
                    ...STRENGTH_STYLES[item.edge.strength],
                  }}
                  title={STRENGTH_LABELS[item.edge.strength]}
                  onClick={() => onItemPress?.(item.node)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onItemPress?.(item.node);
                    }
                  }}
                >
                  <div style={styles.cardName}>
                    <span
                      style={{
                        ...styles.strengthDot,
                        backgroundColor: strengthDotColor(item.edge.strength),
                      }}
                    />
                    {item.node.name}
                  </div>
                  {item.node.spanishName && item.node.spanishName !== item.node.name && (
                    <div style={styles.cardSpanish}>{item.node.spanishName}</div>
                  )}
                  <div style={styles.cardType}>{item.node.type}</div>
                  {item.edge.note && (
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                      {item.edge.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {hiddenCount > 0 && (
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                +{hiddenCount} more item{hiddenCount > 1 ? 's' : ''}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RelatedContent;
