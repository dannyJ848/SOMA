/**
 * MenuSection Component
 *
 * Reusable section component for the Regional Context Menu.
 * Displays a section with icon, title, and optional items or click action.
 */

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

// ============================================
// Types
// ============================================

export interface MenuSectionItem {
  id: string;
  label: string;
  description?: string;
}

export interface MenuSectionProps {
  /** Icon name or React node */
  icon: 'layers' | 'book' | 'heart' | 'chat' | React.ReactNode;
  /** Section title */
  title: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** Optional badge count */
  badge?: number;
  /** Items to display in expandable list */
  items?: string[];
  /** Callback when an item is selected */
  onSelect?: (item: string) => void;
  /** Callback when section is clicked (for non-expandable sections) */
  onClick?: () => void;
  /** Whether the section is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
}

// ============================================
// Icon Components
// ============================================

const icons = {
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="menu-section-icon-svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="menu-section-icon-svg">
      <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" />
      <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" />
      <line x1="9" y1="7" x2="16" y2="7" />
      <line x1="9" y1="11" x2="14" y2="11" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="menu-section-icon-svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="menu-section-icon-svg">
      <path d="M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
    </svg>
  ),
};

// ============================================
// Component
// ============================================

export function MenuSection({
  icon,
  title,
  subtitle,
  badge,
  items,
  onSelect,
  onClick,
  disabled = false,
  className = '',
}: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const hasItems = items && items.length > 0;
  const isClickable = onClick || hasItems;

  // Reset expansion and focus when disabled
  useEffect(() => {
    if (disabled) {
      setIsExpanded(false);
      setFocusedIndex(-1);
    }
  }, [disabled]);

  // Focus management for items
  useEffect(() => {
    if (isExpanded && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isExpanded]);

  const handleSectionClick = () => {
    if (disabled) return;

    if (onClick) {
      onClick();
    } else if (hasItems) {
      setIsExpanded(!isExpanded);
      if (!isExpanded) {
        setFocusedIndex(0);
      }
    }
  };

  const handleItemClick = (item: string) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsExpanded(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSectionClick();
        break;
      case 'Escape':
        if (isExpanded) {
          e.preventDefault();
          setIsExpanded(false);
        }
        break;
      case 'ArrowDown':
        if (isExpanded && hasItems) {
          e.preventDefault();
          setFocusedIndex(prev =>
            prev < items!.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        if (isExpanded && hasItems) {
          e.preventDefault();
          setFocusedIndex(prev =>
            prev > 0 ? prev - 1 : items!.length - 1
          );
        }
        break;
    }
  };

  const renderIcon = () => {
    if (typeof icon === 'string' && icon in icons) {
      return icons[icon as keyof typeof icons];
    }
    return icon;
  };

  return (
    <div
      className={`menu-section ${isExpanded ? 'expanded' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      role="menuitem"
      aria-disabled={disabled}
      aria-expanded={hasItems ? isExpanded : undefined}
      aria-haspopup={hasItems ? 'menu' : undefined}
    >
      <div
        className={`menu-section-header ${isClickable ? 'clickable' : ''}`}
        onClick={handleSectionClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-label={`${title}${subtitle ? `: ${subtitle}` : ''}${badge ? `, ${badge} items` : ''}`}
      >
        <div className="menu-section-icon" aria-hidden="true">
          {renderIcon()}
        </div>

        <div className="menu-section-content">
          <span className="menu-section-title">{title}</span>
          {subtitle && (
            <span className="menu-section-subtitle">{subtitle}</span>
          )}
        </div>

        {badge !== undefined && badge > 0 && (
          <span className="menu-section-badge" aria-label={`${badge} items`}>
            {badge}
          </span>
        )}

        {hasItems && (
          <div className="menu-section-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        )}

        {!hasItems && onClick && (
          <div className="menu-section-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        )}
      </div>

      {hasItems && isExpanded && (
        <div className="menu-section-items" role="menu" aria-label={`${title} options`}>
          {items!.map((item, index) => (
            <button
              key={item}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`menu-section-item ${focusedIndex === index ? 'focused' : ''}`}
              onClick={() => handleItemClick(item)}
              onFocus={() => setFocusedIndex(index)}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Exports
// ============================================

export default MenuSection;
