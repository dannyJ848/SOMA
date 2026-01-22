/**
 * Shortcuts Bar Component - Displays Suggested Shortcuts
 *
 * Horizontal scrollable bar showing AI-predicted shortcuts based on user journey.
 * Integrates with AdaptiveUIContext for state and navigation.
 */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAdaptiveUI, useShortcuts } from '../../contexts/AdaptiveUIContext';
import type { SuggestedShortcut } from '../../../core/intent-prediction/types';
import './ShortcutsBar.css';

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const SymptomIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const MedicationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.5 20.5L3.5 13.5C1.83 11.83 1.83 9.17 3.5 7.5C5.17 5.83 7.83 5.83 9.5 7.5L16.5 14.5C18.17 16.17 18.17 18.83 16.5 20.5C14.83 22.17 12.17 22.17 10.5 20.5Z" />
    <path d="M13 10L7 16" />
  </svg>
);

const ConditionIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const AnatomyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v8M8 20l4-4 4 4M6 12h12" />
  </svg>
);

const LabIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3v6l-4 8h14l-4-8V3" />
    <path d="M6 21h12" />
  </svg>
);

const ChatIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const EncyclopediaIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const TimelineIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="2" x2="12" y2="22" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="18" r="2" />
    <line x1="8" y1="6" x2="10" y2="6" />
    <line x1="14" y1="12" x2="16" y2="12" />
    <line x1="8" y1="18" x2="10" y2="18" />
  </svg>
);

const HealthIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

// ============================================
// Icon Mapping
// ============================================

const iconMap: Record<SuggestedShortcut['iconType'], React.FC<IconProps>> = {
  symptom: SymptomIcon,
  medication: MedicationIcon,
  condition: ConditionIcon,
  anatomy: AnatomyIcon,
  lab: LabIcon,
  chat: ChatIcon,
  encyclopedia: EncyclopediaIcon,
  timeline: TimelineIcon,
  health: HealthIcon,
};

// ============================================
// Shortcut Button Component
// ============================================

interface ShortcutButtonProps {
  shortcut: SuggestedShortcut;
  onClick: () => void;
  isAnimating: boolean;
}

const ShortcutButton: React.FC<ShortcutButtonProps> = ({
  shortcut,
  onClick,
  isAnimating,
}) => {
  const IconComponent = iconMap[shortcut.iconType] || HealthIcon;

  return (
    <button
      className={`shortcuts-bar__button ${isAnimating ? 'shortcuts-bar__button--animating' : ''}`}
      onClick={onClick}
      title={shortcut.description}
      aria-label={`${shortcut.label}: ${shortcut.description}`}
    >
      <span className="shortcuts-bar__button-icon">
        <IconComponent className="shortcuts-bar__icon" />
      </span>
      <span className="shortcuts-bar__button-label">{shortcut.label}</span>
    </button>
  );
};

// ============================================
// Shortcuts Bar Component
// ============================================

export interface ShortcutsBarProps {
  className?: string;
  maxShortcuts?: number;
  showWhenEmpty?: boolean;
}

export const ShortcutsBar: React.FC<ShortcutsBarProps> = ({
  className = '',
  maxShortcuts = 5,
  showWhenEmpty = false,
}) => {
  const shortcuts = useShortcuts();
  const { executeShortcut, isLoading } = useAdaptiveUI();
  const [visibleShortcuts, setVisibleShortcuts] = useState<SuggestedShortcut[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [animatingIds, setAnimatingIds] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const prevShortcutsRef = useRef<SuggestedShortcut[]>([]);

  // Update visible shortcuts with animation
  useEffect(() => {
    const sortedShortcuts = [...shortcuts]
      .sort((a, b) => a.priority - b.priority)
      .slice(0, maxShortcuts);

    // Find new shortcuts for animation
    const prevIds = new Set(prevShortcutsRef.current.map(s => s.id));
    const newIds = sortedShortcuts
      .filter(s => !prevIds.has(s.id))
      .map(s => s.id);

    if (newIds.length > 0) {
      setAnimatingIds(new Set(newIds));
      // Clear animation state after animation completes
      setTimeout(() => setAnimatingIds(new Set()), 500);
    }

    setVisibleShortcuts(sortedShortcuts);
    prevShortcutsRef.current = sortedShortcuts;

    // Update visibility
    if (sortedShortcuts.length > 0) {
      setIsVisible(true);
    } else if (!showWhenEmpty) {
      setIsVisible(false);
    }
  }, [shortcuts, maxShortcuts, showWhenEmpty]);

  // Handle shortcut click
  const handleShortcutClick = useCallback((shortcut: SuggestedShortcut) => {
    executeShortcut(shortcut);
  }, [executeShortcut]);

  // Scroll controls for mobile
  const handleScrollLeft = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  }, []);

  const handleScrollRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  }, []);

  // Don't render if empty and showWhenEmpty is false
  if (!isVisible && !showWhenEmpty) {
    return null;
  }

  return (
    <div
      className={`shortcuts-bar ${className} ${isVisible ? 'shortcuts-bar--visible' : 'shortcuts-bar--hidden'} ${isLoading ? 'shortcuts-bar--loading' : ''}`}
      role="navigation"
      aria-label="Suggested shortcuts"
    >
      <button
        className="shortcuts-bar__scroll-button shortcuts-bar__scroll-button--left"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="shortcuts-bar__container" ref={containerRef}>
        {isLoading && visibleShortcuts.length === 0 && (
          <div className="shortcuts-bar__loading">
            <span className="shortcuts-bar__loading-dot" />
            <span className="shortcuts-bar__loading-dot" />
            <span className="shortcuts-bar__loading-dot" />
          </div>
        )}

        {visibleShortcuts.map((shortcut) => (
          <ShortcutButton
            key={shortcut.id}
            shortcut={shortcut}
            onClick={() => handleShortcutClick(shortcut)}
            isAnimating={animatingIds.has(shortcut.id)}
          />
        ))}

        {!isLoading && visibleShortcuts.length === 0 && showWhenEmpty && (
          <div className="shortcuts-bar__empty">
            <span>Keep exploring to get personalized suggestions</span>
          </div>
        )}
      </div>

      <button
        className="shortcuts-bar__scroll-button shortcuts-bar__scroll-button--right"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ShortcutsBar;
