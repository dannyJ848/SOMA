/**
 * DecisionTreeVisualizer Component
 *
 * Interactive visualization of diagnostic reasoning pathways.
 * Shows the clinical decision process as an expandable tree structure.
 */

import React, { useState, useCallback, useMemo } from 'react';
import type {
  DecisionTreeNode,
  ClinicalDecisionTree,
  ConfidenceLevel,
  UrgencyLevel,
} from '../../../core/clinical-reasoning/types';
import './DecisionTreeVisualizer.css';

// ============================================
// Types
// ============================================

export interface DecisionTreeVisualizerProps {
  /** The decision tree to visualize */
  tree: ClinicalDecisionTree;
  /** Current node ID (for highlighting position) */
  currentNodeId?: string;
  /** Callback when a node is selected */
  onNodeSelect?: (node: DecisionTreeNode) => void;
  /** Callback when navigating to a branch */
  onNavigate?: (nodeId: string) => void;
  /** Show explanations for each node */
  showExplanations?: boolean;
  /** Compact mode for smaller displays */
  compact?: boolean;
  /** Currently selected path (array of node IDs) */
  selectedPath?: string[];
}

interface TreeNodeProps {
  node: DecisionTreeNode;
  level: number;
  isCurrentNode: boolean;
  isSelected: boolean;
  isOnPath: boolean;
  expanded: boolean;
  onToggle: () => void;
  onSelect: () => void;
  showExplanations: boolean;
  compact: boolean;
}

// ============================================
// Helper Functions
// ============================================

function getConfidenceColor(confidence?: ConfidenceLevel): string {
  switch (confidence) {
    case 'high': return 'var(--success-green, #22c55e)';
    case 'moderate': return 'var(--warning-yellow, #eab308)';
    case 'low': return 'var(--warning-orange, #f97316)';
    case 'uncertain': return 'var(--muted-gray, #6b7280)';
    default: return 'var(--primary-blue, #3b82f6)';
  }
}

function getUrgencyColor(urgency?: UrgencyLevel): string {
  switch (urgency) {
    case 'emergency': return 'var(--danger-red, #ef4444)';
    case 'urgent': return 'var(--warning-orange, #f97316)';
    case 'semi-urgent': return 'var(--warning-yellow, #eab308)';
    case 'routine': return 'var(--success-green, #22c55e)';
    case 'elective': return 'var(--primary-blue, #3b82f6)';
    default: return 'var(--muted-gray, #6b7280)';
  }
}

function getNodeIcon(type: DecisionTreeNode['type']): string {
  switch (type) {
    case 'question': return '?';
    case 'branch': return '▶';
    case 'diagnosis': return 'D';
    case 'action': return '!';
    case 'test': return 'T';
    default: return '○';
  }
}

function getNodeLabel(node: DecisionTreeNode): string {
  if (node.type === 'diagnosis') {
    return `Diagnosis: ${node.content}`;
  }
  if (node.type === 'action') {
    return `Action: ${node.content}`;
  }
  if (node.type === 'test') {
    return `Test: ${node.content}`;
  }
  return node.content;
}

// ============================================
// TreeNode Component
// ============================================

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level,
  isCurrentNode,
  isSelected,
  isOnPath,
  expanded,
  onToggle,
  onSelect,
  showExplanations,
  compact,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const nodeColor = node.type === 'diagnosis'
    ? getConfidenceColor(node.confidence)
    : node.type === 'action'
    ? getUrgencyColor()
    : 'var(--primary-blue, #3b82f6)';

  return (
    <div
      className={`tree-node level-${level} ${isCurrentNode ? 'current' : ''} ${isSelected ? 'selected' : ''} ${isOnPath ? 'on-path' : ''} ${compact ? 'compact' : ''}`}
      style={{ '--node-color': nodeColor } as React.CSSProperties}
    >
      <div className="node-header" onClick={onSelect}>
        <div className="node-icon" onClick={hasChildren ? onToggle : undefined}>
          {hasChildren ? (expanded ? '▼' : '▶') : getNodeIcon(node.type)}
        </div>

        <div className="node-content">
          <div className="node-title">{getNodeLabel(node)}</div>
          {showExplanations && node.explanation && (
            <div className="node-explanation">{node.explanation}</div>
          )}
        </div>

        {node.confidence && (
          <div className="node-confidence" style={{ color: getConfidenceColor(node.confidence) }}>
            {node.confidence}
          </div>
        )}
      </div>

      {node.answerOptions && node.answerOptions.length > 0 && (
        <div className="node-answers">
          {node.answerOptions.map((option, idx) => (
            <div key={idx} className="answer-option">
              <span className="answer-label">{option.label}</span>
              {option.explanation && (
                <span className="answer-explanation">{option.explanation}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {hasChildren && expanded && (
        <div className="node-children">
          {node.children!.map((child, idx) => (
            <TreeNode
              key={child.id || idx}
              node={child}
              level={level + 1}
              isCurrentNode={false}
              isSelected={false}
              isOnPath={false}
              expanded={false}
              onToggle={() => {}}
              onSelect={() => {}}
              showExplanations={showExplanations}
              compact={compact}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// Main Component
// ============================================

export const DecisionTreeVisualizer: React.FC<DecisionTreeVisualizerProps> = ({
  tree,
  currentNodeId,
  onNodeSelect,
  onNavigate,
  showExplanations = true,
  compact = false,
  selectedPath = [],
}) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set([tree.rootNode.id]));
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Flatten tree for easier navigation
  const allNodes = useMemo(() => {
    const nodes = new Map<string, DecisionTreeNode>();

    function traverse(node: DecisionTreeNode) {
      nodes.set(node.id, node);
      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(tree.rootNode);
    return nodes;
  }, [tree]);

  const handleToggle = useCallback((nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const handleSelect = useCallback((node: DecisionTreeNode) => {
    setSelectedNodeId(node.id);
    onNodeSelect?.(node);
  }, [onNodeSelect]);

  const handleExpandAll = useCallback(() => {
    setExpandedNodes(new Set(allNodes.keys()));
  }, [allNodes]);

  const handleCollapseAll = useCallback(() => {
    setExpandedNodes(new Set([tree.rootNode.id]));
  }, [tree.rootNode.id]);

  const handleReset = useCallback(() => {
    setSelectedNodeId(null);
    setExpandedNodes(new Set([tree.rootNode.id]));
    onNavigate?.(tree.rootNode.id);
  }, [tree.rootNode.id, onNavigate]);

  return (
    <div className={`decision-tree-visualizer ${compact ? 'compact' : ''}`}>
      {/* Header */}
      <div className="tree-header">
        <div className="tree-title">
          <h3>{tree.name}</h3>
          {tree.evidenceLevel && (
            <span className="evidence-badge">{tree.evidenceLevel}</span>
          )}
        </div>
        <p className="tree-description">{tree.description}</p>

        {/* Controls */}
        <div className="tree-controls">
          <button onClick={handleExpandAll} className="control-btn">
            Expand All
          </button>
          <button onClick={handleCollapseAll} className="control-btn">
            Collapse All
          </button>
          <button onClick={handleReset} className="control-btn">
            Reset
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="tree-legend">
        <div className="legend-item">
          <span className="legend-icon question">?</span>
          <span>Question</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon branch">&gt;</span>
          <span>Branch</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon diagnosis">D</span>
          <span>Diagnosis</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon action">!</span>
          <span>Action</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon test">T</span>
          <span>Test</span>
        </div>
      </div>

      {/* Tree Content */}
      <div className="tree-content">
        <TreeNode
          node={tree.rootNode}
          level={0}
          isCurrentNode={currentNodeId === tree.rootNode.id}
          isSelected={selectedNodeId === tree.rootNode.id}
          isOnPath={selectedPath.includes(tree.rootNode.id)}
          expanded={expandedNodes.has(tree.rootNode.id)}
          onToggle={() => handleToggle(tree.rootNode.id)}
          onSelect={() => handleSelect(tree.rootNode)}
          showExplanations={showExplanations}
          compact={compact}
        />
      </div>

      {/* Footer with source */}
      {tree.source && (
        <div className="tree-footer">
          <span className="source-label">Source:</span>
          <span className="source-name">{tree.source}</span>
          <span className="version">v{tree.version}</span>
        </div>
      )}
    </div>
  );
};

export default DecisionTreeVisualizer;
