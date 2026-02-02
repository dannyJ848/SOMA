/**
 * CrossReferenceLink Component
 *
 * Renders a clickable link/chip for a cross-reference target. When clicked,
 * navigates to the referenced content using the NavigationProvider. Shows the
 * target name, type badge, and relationship label.
 *
 * Usage:
 * ```tsx
 * <CrossReferenceLink
 *   crossReference={ref}
 *   onNavigate={(route) => navigate(route.routeId, { state: route.params })}
 * />
 * ```
 *
 * Or within a list of related items from the knowledge graph:
 * ```tsx
 * <RelatedContentSection
 *   contentId="condition:hypertension"
 *   onNavigate={handleNavigate}
 * />
 * ```
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';

import type { CrossReference } from '@core/content/types';
import type {
  ResolvedCrossReference,
  NavigationTarget,
  RelatedContentItem,
  NavigableCategory,
} from '../services/ContentNavigator';
import {
  ContentNavigator,
  getContentNavigator,
} from '../services/ContentNavigator';
import { useContentService } from '../services/ContentService';

// ---------------------------------------------------------------------------
// Category Styling
// ---------------------------------------------------------------------------

const CATEGORY_COLORS: Record<NavigableCategory, { bg: string; text: string; border: string }> = {
  condition:  { bg: 'rgba(239, 68, 68, 0.15)',  text: '#f87171', border: '#ef4444' },
  symptom:    { bg: 'rgba(251, 191, 36, 0.15)',  text: '#fbbf24', border: '#f59e0b' },
  anatomy:    { bg: 'rgba(59, 130, 246, 0.15)',  text: '#60a5fa', border: '#3b82f6' },
  procedure:  { bg: 'rgba(168, 85, 247, 0.15)',  text: '#a78bfa', border: '#8b5cf6' },
  medication: { bg: 'rgba(34, 197, 94, 0.15)',   text: '#4ade80', border: '#22c55e' },
  specialty:  { bg: 'rgba(244, 114, 182, 0.15)', text: '#f472b6', border: '#ec4899' },
  topic:      { bg: 'rgba(148, 163, 184, 0.15)', text: '#94a3b8', border: '#64748b' },
  concept:    { bg: 'rgba(96, 165, 250, 0.15)',  text: '#93c5fd', border: '#60a5fa' },
};

const CATEGORY_LABELS: Record<NavigableCategory, string> = {
  condition:  'Condition',
  symptom:    'Symptom',
  anatomy:    'Anatomy',
  procedure:  'Procedure',
  medication: 'Medication',
  specialty:  'Specialty',
  topic:      'Topic',
  concept:    'Concept',
};

const RELATIONSHIP_ICONS: Record<string, string> = {
  parent:   '^',
  child:    'v',
  sibling:  '~',
  related:  '*',
  'see-also': '>',
};

// ---------------------------------------------------------------------------
// CrossReferenceLink Component
// ---------------------------------------------------------------------------

export interface CrossReferenceLinkProps {
  /** The cross-reference to render */
  crossReference: CrossReference;
  /** Callback when the link is clicked, receives the navigation target */
  onNavigate: (target: NavigationTarget) => void;
  /** Whether to show the type badge */
  showTypeBadge?: boolean;
  /** Whether to show the relationship label */
  showRelationship?: boolean;
  /** Visual variant */
  variant?: 'chip' | 'link' | 'card';
  /** Size */
  size?: 'small' | 'medium';
}

export function CrossReferenceLink({
  crossReference,
  onNavigate,
  showTypeBadge = true,
  showRelationship = false,
  variant = 'chip',
  size = 'medium',
}: CrossReferenceLinkProps) {
  const contentService = useContentService();
  const [resolved, setResolved] = useState<ResolvedCrossReference | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const navigator = useMemo(
    () => getContentNavigator(contentService),
    [contentService],
  );

  useEffect(() => {
    let cancelled = false;
    navigator.resolve(crossReference).then((result) => {
      if (!cancelled) setResolved(result);
    });
    return () => { cancelled = true; };
  }, [navigator, crossReference]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (resolved) {
        onNavigate(resolved.route);
      }
    },
    [resolved, onNavigate],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (resolved) {
          onNavigate(resolved.route);
        }
      }
    },
    [resolved, onNavigate],
  );

  // Render loading state
  if (!resolved) {
    const loadingStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: size === 'small' ? '2px 8px' : '4px 12px',
      borderRadius: '12px',
      background: 'rgba(148, 163, 184, 0.1)',
      color: '#64748b',
      fontSize: size === 'small' ? '11px' : '13px',
    };
    return <span style={loadingStyle}>Loading...</span>;
  }

  const colors = CATEGORY_COLORS[resolved.category];
  const categoryLabel = CATEGORY_LABELS[resolved.category];
  const relIcon = RELATIONSHIP_ICONS[crossReference.relationship] || '';

  // --------------- Chip variant ---------------
  if (variant === 'chip') {
    const chipStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size === 'small' ? '4px' : '6px',
      padding: size === 'small' ? '2px 8px' : '4px 12px',
      borderRadius: '16px',
      background: isHovered ? colors.bg.replace('0.15', '0.25') : colors.bg,
      border: `1px solid ${isHovered ? colors.border : 'transparent'}`,
      color: colors.text,
      fontSize: size === 'small' ? '11px' : '13px',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
      textDecoration: 'none',
      lineHeight: 1.4,
      maxWidth: '100%',
    };

    const badgeStyle: React.CSSProperties = {
      fontSize: size === 'small' ? '9px' : '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      opacity: 0.7,
      flexShrink: 0,
    };

    return (
      <button
        type="button"
        style={chipStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={resolved.description || `Navigate to ${resolved.name}`}
        aria-label={`${crossReference.relationship} reference: ${resolved.name} (${categoryLabel})`}
      >
        {showRelationship && relIcon && (
          <span style={{ opacity: 0.6, flexShrink: 0 }}>{relIcon}</span>
        )}
        {showTypeBadge && <span style={badgeStyle}>{categoryLabel}</span>}
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {resolved.name}
        </span>
        {!resolved.found && (
          <span style={{ opacity: 0.5, fontSize: '10px', flexShrink: 0 }}>?</span>
        )}
      </button>
    );
  }

  // --------------- Link variant ---------------
  if (variant === 'link') {
    const linkStyle: React.CSSProperties = {
      display: 'inline',
      color: colors.text,
      cursor: 'pointer',
      textDecoration: isHovered ? 'underline' : 'none',
      fontSize: 'inherit',
      background: 'none',
      border: 'none',
      padding: 0,
      font: 'inherit',
    };

    return (
      <button
        type="button"
        style={linkStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={resolved.description || `Navigate to ${resolved.name}`}
        aria-label={`${crossReference.relationship} reference: ${resolved.name}`}
      >
        {resolved.name}
      </button>
    );
  }

  // --------------- Card variant ---------------
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '12px 16px',
    borderRadius: '8px',
    background: isHovered ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
    border: `1px solid ${isHovered ? colors.border : '#333'}`,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  };

  const cardTitleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#e0e0e0',
    fontWeight: 500,
  };

  const cardBadgeStyle: React.CSSProperties = {
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: colors.text,
    background: colors.bg,
    padding: '1px 6px',
    borderRadius: '4px',
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#888',
    lineHeight: 1.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
  };

  return (
    <button
      type="button"
      style={cardStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={`Navigate to ${resolved.name}`}
      aria-label={`${crossReference.relationship} reference: ${resolved.name} (${categoryLabel})`}
    >
      <div style={cardTitleStyle}>
        <span style={cardBadgeStyle}>{categoryLabel}</span>
        <span>{resolved.name}</span>
      </div>
      {resolved.description && (
        <div style={cardDescStyle}>{resolved.description}</div>
      )}
      {showRelationship && (
        <div style={{ fontSize: '11px', color: '#666' }}>
          {crossReference.relationship.replace(/-/g, ' ')}
        </div>
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// RelatedContentSection Component
// ---------------------------------------------------------------------------

export interface RelatedContentSectionProps {
  /** The content ID to find related content for (knowledge graph node ID) */
  contentId: string;
  /** Callback when an item is clicked */
  onNavigate: (target: NavigationTarget) => void;
  /** Title for the section */
  title?: string;
  /** Maximum number of items to show */
  maxItems?: number;
  /** Filter by node type */
  filterType?: 'condition' | 'anatomy' | 'symptom' | 'medication' | 'procedure' | 'specialty';
}

/**
 * Renders a "Related Content" section using knowledge graph edges.
 * Shows related items as clickable cards that navigate to the target content.
 */
export function RelatedContentSection({
  contentId,
  onNavigate,
  title = 'Related Content',
  maxItems = 10,
  filterType,
}: RelatedContentSectionProps) {
  const contentService = useContentService();

  const navigator = useMemo(
    () => getContentNavigator(contentService),
    [contentService],
  );

  const relatedItems = useMemo(() => {
    const items = filterType
      ? navigator.getRelatedContentByType(contentId, filterType)
      : navigator.getRelatedContent(contentId);
    return items.slice(0, maxItems);
  }, [navigator, contentId, filterType, maxItems]);

  if (relatedItems.length === 0) {
    return null;
  }

  const handleItemClick = useCallback(
    (item: RelatedContentItem) => {
      onNavigate(item.route);
    },
    [onNavigate],
  );

  const sectionStyle: React.CSSProperties = {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid #333',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '16px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  };

  return (
    <div style={sectionStyle}>
      <h3 style={headerStyle}>{title}</h3>
      <div style={gridStyle}>
        {relatedItems.map((item) => {
          const category = item.node.type as NavigableCategory;
          const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.topic;

          return (
            <RelatedItemChip
              key={item.node.id}
              item={item}
              colors={colors}
              onClick={() => handleItemClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CrossReferenceList Component
// ---------------------------------------------------------------------------

export interface CrossReferenceListProps {
  /** Array of cross-references to render */
  crossReferences: CrossReference[];
  /** Callback when a reference is clicked */
  onNavigate: (target: NavigationTarget) => void;
  /** Title for the section */
  title?: string;
  /** Visual variant for the links */
  variant?: 'chip' | 'link' | 'card';
  /** Whether to group by relationship type */
  groupByRelationship?: boolean;
}

/**
 * Renders a list of CrossReference items as navigable links.
 * Supports grouping by relationship type (parent, child, sibling, related, see-also).
 */
export function CrossReferenceList({
  crossReferences,
  onNavigate,
  title = 'Cross References',
  variant = 'chip',
  groupByRelationship = false,
}: CrossReferenceListProps) {
  if (!crossReferences || crossReferences.length === 0) {
    return null;
  }

  const sectionStyle: React.CSSProperties = {
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #333',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '12px',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  };

  const groupLabelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#666',
    textTransform: 'capitalize',
    marginBottom: '6px',
    marginTop: '12px',
    width: '100%',
  };

  if (groupByRelationship) {
    const groups = new Map<string, CrossReference[]>();
    for (const ref of crossReferences) {
      const existing = groups.get(ref.relationship) || [];
      existing.push(ref);
      groups.set(ref.relationship, existing);
    }

    const relationshipOrder = ['parent', 'child', 'sibling', 'related', 'see-also'];
    const sortedKeys = [...groups.keys()].sort(
      (a, b) => relationshipOrder.indexOf(a) - relationshipOrder.indexOf(b),
    );

    return (
      <div style={sectionStyle}>
        <h3 style={headerStyle}>{title}</h3>
        {sortedKeys.map((relationship) => (
          <div key={relationship}>
            <div style={groupLabelStyle}>
              {relationship.replace(/-/g, ' ')}
            </div>
            <div style={listStyle}>
              {groups.get(relationship)!.map((ref) => (
                <CrossReferenceLink
                  key={`${ref.targetId}-${ref.relationship}`}
                  crossReference={ref}
                  onNavigate={onNavigate}
                  variant={variant}
                  showRelationship={false}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={sectionStyle}>
      <h3 style={headerStyle}>{title}</h3>
      <div style={listStyle}>
        {crossReferences.map((ref) => (
          <CrossReferenceLink
            key={`${ref.targetId}-${ref.relationship}`}
            crossReference={ref}
            onNavigate={onNavigate}
            variant={variant}
            showRelationship
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal: RelatedItemChip
// ---------------------------------------------------------------------------

interface RelatedItemChipProps {
  item: RelatedContentItem;
  colors: { bg: string; text: string; border: string };
  onClick: () => void;
}

function RelatedItemChip({ item, colors, onClick }: RelatedItemChipProps) {
  const [isHovered, setIsHovered] = useState(false);

  const chipStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '16px',
    background: isHovered ? colors.bg.replace('0.15', '0.25') : colors.bg,
    border: `1px solid ${isHovered ? colors.border : 'transparent'}`,
    color: colors.text,
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '10px',
    opacity: 0.7,
    flexShrink: 0,
  };

  return (
    <button
      type="button"
      style={chipStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={`${item.relationshipLabel}: ${item.name}`}
      aria-label={`Related: ${item.name} (${item.relationshipLabel})`}
    >
      <span style={labelStyle}>{item.relationshipLabel}</span>
      <span>{item.name}</span>
    </button>
  );
}

export default CrossReferenceLink;
