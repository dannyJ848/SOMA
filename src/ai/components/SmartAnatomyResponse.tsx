/**
 * Smart Anatomy Response Component
 *
 * AI response component that can trigger anatomy navigation.
 * Renders AI response text with clickable anatomy terms and navigation actions.
 *
 * @module ai/components/SmartAnatomyResponse
 */

import React, { useState, useCallback, useMemo } from 'react';
import type { Citation } from '../types';
import { useSmartNavigation, type NavigationAction, type AnatomyMention } from '../hooks/useSmartNavigation';
import { useAINavigation } from '../AINavigationProvider';

// ============================================================================
// Types
// ============================================================================

/**
 * Navigation action embedded in AI response
 */
export interface ResponseNavigationAction {
  /** Type of navigation action */
  type: 'navigate' | 'highlight' | 'layer';
  /** Target structure/region ID */
  target: string;
  /** Display label for the action */
  label: string;
}

/**
 * AI response with navigation capabilities
 */
export interface SmartResponse {
  /** Response text content */
  text: string;
  /** Optional citations */
  citations?: Citation[];
  /** Embedded navigation actions */
  navigationActions?: ResponseNavigationAction[];
}

/**
 * Props for SmartAnatomyResponse component
 */
export interface SmartAnatomyResponseProps {
  /** Response data to render */
  response: SmartResponse;
  /** Callback when navigation is triggered */
  onNavigate: (target: string, type?: string) => void;
  /** Whether to auto-detect anatomy terms */
  autoDetectAnatomy?: boolean;
  /** Whether to show "View in 3D" buttons */
  showViewButtons?: boolean;
  /** Maximum number of view buttons to show */
  maxViewButtons?: number;
  /** Whether to highlight anatomy terms in text */
  highlightTerms?: boolean;
  /** Callback when citation is clicked */
  onCitationClick?: (citation: Citation) => void;
  /** Additional class name */
  className?: string;
}

/**
 * Parsed text segment
 */
interface TextSegment {
  /** Text content */
  text: string;
  /** Whether this segment is an anatomy mention */
  isMention: boolean;
  /** Mention data if applicable */
  mention?: AnatomyMention;
}

// ============================================================================
// Constants
// ============================================================================

/** Anatomy terms that can be highlighted */
const ANATOMY_TERMS: Record<string, { id: string; category: string }> = {
  heart: { id: 'cardiovascular.heart', category: 'organ' },
  cardiac: { id: 'cardiovascular.heart', category: 'organ' },
  brain: { id: 'nervous.brain', category: 'organ' },
  cerebral: { id: 'nervous.brain', category: 'organ' },
  liver: { id: 'digestive.liver', category: 'organ' },
  hepatic: { id: 'digestive.liver', category: 'organ' },
  kidney: { id: 'urinary.kidney', category: 'organ' },
  renal: { id: 'urinary.kidney', category: 'organ' },
  lung: { id: 'respiratory.lung', category: 'organ' },
  pulmonary: { id: 'respiratory.lung', category: 'organ' },
  lungs: { id: 'respiratory.lung', category: 'organ' },
  stomach: { id: 'digestive.stomach', category: 'organ' },
  gastric: { id: 'digestive.stomach', category: 'organ' },
  pancreas: { id: 'digestive.pancreas', category: 'organ' },
  pancreatic: { id: 'digestive.pancreas', category: 'organ' },
  spleen: { id: 'lymphatic.spleen', category: 'organ' },
  thyroid: { id: 'endocrine.thyroid', category: 'organ' },
  'gallbladder': { id: 'digestive.gallbladder', category: 'organ' },
  bladder: { id: 'urinary.bladder', category: 'organ' },
  aorta: { id: 'cardiovascular.aorta', category: 'vessel' },
  artery: { id: 'cardiovascular.artery', category: 'vessel' },
  vein: { id: 'cardiovascular.vein', category: 'vessel' },
  nerve: { id: 'nervous.nerve', category: 'structure' },
  muscle: { id: 'muscular.muscle', category: 'structure' },
  bone: { id: 'skeletal.bone', category: 'structure' },
  joint: { id: 'skeletal.joint', category: 'structure' },
  skull: { id: 'skeletal.skull', category: 'structure' },
  rib: { id: 'skeletal.rib', category: 'structure' },
  spine: { id: 'skeletal.spine', category: 'structure' },
  vertebrae: { id: 'skeletal.spine', category: 'structure' },
  pelvis: { id: 'skeletal.pelvis', category: 'structure' },
  'red blood cells': { id: 'cardiovascular.blood', category: 'tissue' },
  'white blood cells': { id: 'lymphatic.blood', category: 'tissue' },
  neurons: { id: 'nervous.neurons', category: 'tissue' },
};

/** System terms */
const SYSTEM_TERMS: Record<string, string> = {
  'cardiovascular system': 'cardiovascular',
  'circulatory system': 'cardiovascular',
  'respiratory system': 'respiratory',
  'nervous system': 'nervous',
  'digestive system': 'digestive',
  'skeletal system': 'skeletal',
  'muscular system': 'muscular',
  'endocrine system': 'endocrine',
  'urinary system': 'urinary',
  'lymphatic system': 'lymphatic',
  'immune system': 'lymphatic',
  'reproductive system': 'reproductive',
  'integumentary system': 'integumentary',
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Parse text into segments with anatomy mentions
 */
function parseTextSegments(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const allTerms = { ...ANATOMY_TERMS, ...Object.fromEntries(
    Object.entries(SYSTEM_TERMS).map(([k, v]) => [k, { id: v, category: 'system' }])
  )};
  
  // Build regex for all terms (longest first to match multi-word terms)
  const sortedTerms = Object.keys(allTerms).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
  
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  
  while ((match = pattern.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, match.index),
        isMention: false,
      });
    }
    
    // Add the match
    const term = match[0].toLowerCase();
    const data = allTerms[term];
    if (data) {
      segments.push({
        text: match[0],
        isMention: true,
        mention: {
          name: match[0],
          structureId: data.id,
          type: (data.category as AnatomyMention['type']) || 'structure',
          position: { start: match.index, end: match.index + match[0].length },
          confidence: 0.95,
        },
      });
    } else {
      segments.push({
        text: match[0],
        isMention: false,
      });
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      text: text.slice(lastIndex),
      isMention: false,
    });
  }
  
  return segments;
}

/**
 * Extract unique anatomy mentions from text
 */
function extractUniqueMentions(text: string): AnatomyMention[] {
  const segments = parseTextSegments(text);
  const mentions = segments
    .filter((s): s is TextSegment & { mention: AnatomyMention } => s.isMention && !!s.mention);
  
  // Deduplicate by structure ID
  const seen = new Set<string>();
  return mentions.filter(m => {
    if (seen.has(m.mention.structureId)) return false;
    seen.add(m.mention.structureId);
    return true;
  }).map(m => m.mention);
}

/**
 * Format citation index
 */
function formatCitationIndex(index: number): string {
  return `[${index + 1}]`;
}

// ============================================================================
// Component
// ============================================================================

/**
 * AI response component with embedded anatomy navigation
 *
 * Features:
 * - Renders AI response text with highlighted anatomy terms
 * - Clickable anatomy terms for navigation
 * - "View in 3D" buttons for mentioned anatomy
 * - Citation rendering
 * - Navigation action buttons
 *
 * @example
 * ```tsx
 * <SmartAnatomyResponse
 *   response={{
 *     text: "The heart pumps blood through the lungs...",
 *     navigationActions: [{ type: 'navigate', target: 'cardiovascular.heart', label: 'View Heart' }]
 *   }}
 *   onNavigate={(target) => console.log('Navigate to:', target)}
 * />
 * ```
 */
export function SmartAnatomyResponse({
  response,
  onNavigate,
  autoDetectAnatomy = true,
  showViewButtons = true,
  maxViewButtons = 3,
  highlightTerms = true,
  onCitationClick,
  className = '',
}: SmartAnatomyResponseProps): React.ReactElement {
  // Hooks
  const smartNav = useSmartNavigation();
  const aiNavigation = useAINavigation();
  
  // State
  const [hoveredMention, setHoveredMention] = useState<string | null>(null);

  // Parse the response
  const parsedData = useMemo(() => {
    const mentions = autoDetectAnatomy ? extractUniqueMentions(response.text) : [];
    const segments = highlightTerms ? parseTextSegments(response.text) : 
      [{ text: response.text, isMention: false }];
    
    // Combine with explicit navigation actions
    const allActions: NavigationAction[] = [
      ...(response.navigationActions?.map(a => ({
        type: a.type,
        target: a.target,
        label: a.label,
      })) || []),
      ...mentions.map(m => ({
        type: 'navigate' as const,
        target: m.structureId,
        label: `View ${m.name}`,
      })),
    ];
    
    // Deduplicate actions
    const seen = new Set<string>();
    const uniqueActions = allActions.filter(a => {
      if (seen.has(a.target)) return false;
      seen.add(a.target);
      return true;
    });
    
    return {
      mentions,
      segments,
      actions: uniqueActions.slice(0, maxViewButtons),
    };
  }, [response, autoDetectAnatomy, highlightTerms, maxViewButtons]);

  // Handle mention click
  const handleMentionClick = useCallback((mention: AnatomyMention) => {
    smartNav.executeNavigation({
      type: 'navigate',
      target: mention.structureId,
      label: `View ${mention.name}`,
    });
    onNavigate(mention.structureId, 'navigate');
    aiNavigation.navigateFromAI(mention.structureId, `View ${mention.name}`);
  }, [smartNav, onNavigate, aiNavigation]);

  // Handle navigation action click
  const handleActionClick = useCallback((action: NavigationAction) => {
    smartNav.executeNavigation(action);
    onNavigate(action.target, action.type);
  }, [smartNav, onNavigate]);

  // Handle explicit action click
  const handleExplicitActionClick = useCallback((action: ResponseNavigationAction) => {
    const navAction: NavigationAction = {
      type: action.type,
      target: action.target,
      label: action.label,
    };
    smartNav.executeNavigation(navAction);
    onNavigate(action.target, action.type);
  }, [smartNav, onNavigate]);

  // Render text segment
  const renderSegment = (segment: TextSegment, index: number) => {
    if (!segment.isMention || !segment.mention) {
      return <span key={index}>{segment.text}</span>;
    }

    return (
      <button
        key={index}
        className={`anatomy-mention ${hoveredMention === segment.mention.structureId ? 'hovered' : ''}`}
        onClick={() => handleMentionClick(segment.mention!)}
        onMouseEnter={() => setHoveredMention(segment.mention!.structureId)}
        onMouseLeave={() => setHoveredMention(null)}
        title={`Click to view ${segment.mention.name}`}
      >
        {segment.text}
      </button>
    );
  };

  // Render citation
  const renderCitation = (citation: Citation, index: number) => (
    <button
      key={index}
      className="citation-link"
      onClick={() => onCitationClick?.(citation)}
      title={citation.section || citation.source}
    >
      {formatCitationIndex(index)}
    </button>
  );

  return (
    <div className={`smart-anatomy-response ${className}`}>
      {/* Response Text */}
      <div className="response-text">
        {parsedData.segments.map(renderSegment)}
      </div>

      {/* Citations */}
      {response.citations && response.citations.length > 0 && (
        <div className="citations-section">
          <span className="citations-label">Sources:</span>
          <div className="citations-list">
            {response.citations.map(renderCitation)}
          </div>
        </div>
      )}

      {/* Navigation Actions */}
      {(parsedData.actions.length > 0 || (response.navigationActions?.length || 0) > 0) && showViewButtons && (
        <div className="navigation-actions">
          <span className="actions-label">View in 3D:</span>
          <div className="actions-buttons">
            {/* Explicit actions first */}
            {response.navigationActions?.map((action, index) => (
              <button
                key={`explicit-${index}`}
                className="nav-action-btn primary"
                onClick={() => handleExplicitActionClick(action)}
              >
                <span className="action-icon">view_in_ar</span>
                {action.label}
              </button>
            ))}
            
            {/* Auto-detected actions */}
            {parsedData.actions.map((action, index) => (
              <button
                key={`auto-${index}`}
                className="nav-action-btn"
                onClick={() => handleActionClick(action)}
              >
                <span className="action-icon">view_in_ar</span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mention Summary */}
      {parsedData.mentions.length > 0 && (
        <div className="mentions-summary">
          <span className="summary-label">Mentioned:</span>
          <div className="mentions-list">
            {parsedData.mentions.map((mention, index) => (
              <button
                key={index}
                className="mention-chip"
                onClick={() => handleMentionClick(mention)}
                title={`View ${mention.name}`}
              >
                {mention.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .smart-anatomy-response {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #252525;
          border-radius: 8px;
        }

        /* Response Text */
        .response-text {
          font-size: 14px;
          line-height: 1.7;
          color: #e0e0e0;
          white-space: pre-wrap;
        }

        /* Anatomy Mentions */
        .anatomy-mention {
          display: inline;
          background: rgba(74, 158, 255, 0.15);
          color: #4a9eff;
          border: none;
          border-radius: 4px;
          padding: 2px 6px;
          margin: 0 2px;
          font-size: inherit;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: underline;
          text-decoration-color: #4a9eff60;
          text-underline-offset: 2px;
        }

        .anatomy-mention:hover,
        .anatomy-mention.hovered {
          background: rgba(74, 158, 255, 0.25);
          text-decoration-color: #4a9eff;
        }

        /* Citations Section */
        .citations-section {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #333;
          flex-wrap: wrap;
        }

        .citations-label {
          font-size: 12px;
          color: #888;
        }

        .citations-list {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .citation-link {
          background: #333;
          border: none;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 11px;
          color: #4a9eff;
          cursor: pointer;
          transition: all 0.2s;
        }

        .citation-link:hover {
          background: #444;
        }

        /* Navigation Actions */
        .navigation-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.15);
          border-radius: 6px;
        }

        .actions-label {
          font-size: 12px;
          color: #888;
          font-weight: 500;
        }

        .actions-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .nav-action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #333;
          border: 1px solid #444;
          border-radius: 6px;
          color: #ccc;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .nav-action-btn:hover {
          background: #3a3a3a;
          border-color: #4a9eff60;
          color: #fff;
        }

        .nav-action-btn.primary {
          background: rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
          color: #4a9eff;
        }

        .nav-action-btn.primary:hover {
          background: rgba(74, 158, 255, 0.25);
        }

        .action-icon {
          font-size: 16px;
        }

        /* Mentions Summary */
        .mentions-summary {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #333;
        }

        .summary-label {
          font-size: 12px;
          color: #888;
          white-space: nowrap;
          padding-top: 4px;
        }

        .mentions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .mention-chip {
          padding: 4px 10px;
          background: #333;
          border: 1px solid #444;
          border-radius: 12px;
          font-size: 12px;
          color: #aaa;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mention-chip:hover {
          background: #3a3a3a;
          border-color: #4a9eff60;
          color: #ccc;
        }
      `}</style>
    </div>
  );
}

export default SmartAnatomyResponse;
