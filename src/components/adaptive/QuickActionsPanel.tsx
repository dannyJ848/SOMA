/**
 * Quick Actions Panel - Contextual Action Buttons
 *
 * Shows contextual quick actions based on predictions.
 * Displays as a floating panel or bottom sheet on mobile.
 */

import React, { useCallback, useState, useEffect } from 'react';
import { useAdaptiveUI, useQuickActions } from '../../contexts/AdaptiveUIContext';
import type { QuickAction } from '../../../core/intent-prediction/types';
import './QuickActionsPanel.css';

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const ActionIcons: Record<string, React.FC<IconProps>> = {
  chat: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  encyclopedia: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  anatomy: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v8M8 20l4-4 4 4M6 12h12" />
    </svg>
  ),
  medication: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.5 20.5L3.5 13.5C1.83 11.83 1.83 9.17 3.5 7.5C5.17 5.83 7.83 5.83 9.5 7.5L16.5 14.5C18.17 16.17 18.17 18.83 16.5 20.5C14.83 22.17 12.17 22.17 10.5 20.5Z" />
      <path d="M13 10L7 16" />
    </svg>
  ),
  condition: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  symptom: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  action: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  default: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
};

// ============================================
// Quick Action Button
// ============================================

interface QuickActionButtonProps {
  action: QuickAction;
  onClick: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ action, onClick }) => {
  const IconComponent = ActionIcons[action.iconType] || ActionIcons.default;

  return (
    <button
      className={`quick-actions-panel__action ${action.contextual ? 'quick-actions-panel__action--contextual' : ''}`}
      onClick={onClick}
      title={action.description || action.label}
      aria-label={`${action.label}${action.description ? `: ${action.description}` : ''}`}
    >
      <span className="quick-actions-panel__action-icon">
        <IconComponent className="quick-actions-panel__icon" />
      </span>
      <span className="quick-actions-panel__action-content">
        <span className="quick-actions-panel__action-label">{action.label}</span>
        {action.description && (
          <span className="quick-actions-panel__action-description">{action.description}</span>
        )}
      </span>
    </button>
  );
};

// ============================================
// Quick Actions Panel
// ============================================

export interface QuickActionsPanelProps {
  className?: string;
  position?: 'floating' | 'bottom-sheet' | 'inline';
  maxActions?: number;
  showTitle?: boolean;
}

export const QuickActionsPanel: React.FC<QuickActionsPanelProps> = ({
  className = '',
  position = 'floating',
  maxActions = 4,
  showTitle = true,
}) => {
  const quickActions = useQuickActions();
  const { executeQuickAction, isLoading, lastPrediction } = useAdaptiveUI();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Update visibility when actions change
  useEffect(() => {
    if (quickActions.length > 0) {
      setIsVisible(true);
    } else {
      // Delay hiding for animation
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [quickActions]);

  // Handle action click
  const handleActionClick = useCallback((action: QuickAction) => {
    executeQuickAction(action);
  }, [executeQuickAction]);

  // Toggle expanded state (for bottom sheet)
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Get visible actions
  const visibleActions = quickActions.slice(0, maxActions);

  // Don't render if no actions and not loading
  if (!isVisible && !isLoading) {
    return null;
  }

  // Bottom sheet mode for mobile
  if (position === 'bottom-sheet') {
    return (
      <div
        className={`quick-actions-panel quick-actions-panel--bottom-sheet ${className} ${isExpanded ? 'quick-actions-panel--expanded' : ''} ${visibleActions.length > 0 ? 'quick-actions-panel--visible' : ''}`}
        role="region"
        aria-label="Quick actions"
      >
        <button
          className="quick-actions-panel__handle"
          onClick={toggleExpanded}
          aria-label={isExpanded ? 'Collapse quick actions' : 'Expand quick actions'}
        >
          <span className="quick-actions-panel__handle-bar" />
        </button>

        {showTitle && (
          <div className="quick-actions-panel__header">
            <h3 className="quick-actions-panel__title">Quick Actions</h3>
            {lastPrediction && (
              <span className="quick-actions-panel__subtitle">
                Based on your exploration
              </span>
            )}
          </div>
        )}

        <div className="quick-actions-panel__content">
          {isLoading && visibleActions.length === 0 ? (
            <div className="quick-actions-panel__loading">
              <span className="quick-actions-panel__loading-spinner" />
              <span>Finding suggestions...</span>
            </div>
          ) : (
            visibleActions.map((action) => (
              <QuickActionButton
                key={action.id}
                action={action}
                onClick={() => handleActionClick(action)}
              />
            ))
          )}
        </div>
      </div>
    );
  }

  // Floating or inline mode
  return (
    <div
      className={`quick-actions-panel quick-actions-panel--${position} ${className} ${visibleActions.length > 0 ? 'quick-actions-panel--visible' : ''}`}
      role="region"
      aria-label="Quick actions"
    >
      {showTitle && (
        <div className="quick-actions-panel__header">
          <h3 className="quick-actions-panel__title">Suggested Actions</h3>
        </div>
      )}

      <div className="quick-actions-panel__content">
        {isLoading && visibleActions.length === 0 ? (
          <div className="quick-actions-panel__loading">
            <span className="quick-actions-panel__loading-spinner" />
          </div>
        ) : (
          visibleActions.map((action) => (
            <QuickActionButton
              key={action.id}
              action={action}
              onClick={() => handleActionClick(action)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default QuickActionsPanel;
