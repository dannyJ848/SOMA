/**
 * RadialContextMenu
 *
 * A circular/pie menu that appears on right-click or long-press on anatomy regions.
 * Features smooth radial animation, glass morphism styling, and screen edge adaptation.
 */

import { useState, useEffect, useCallback, useRef, useMemo, type ReactNode } from 'react';
import './RadialContextMenu.css';

// ============================================================================
// Types
// ============================================================================

export type RadialMenuAction =
  | 'view-details'
  | 'isolate-region'
  | 'xray-view'
  | 'show-layers'
  | 'ask-ai'
  | 'add-favorite'
  | 'share';

export interface RadialMenuItem {
  id: RadialMenuAction;
  label: string;
  shortLabel: string;
  icon: ReactNode;
  color: string;
  description: string;
}

export interface RadialContextMenuProps {
  /** Whether the menu is open */
  isOpen: boolean;
  /** Position where the menu should appear (click/touch point) */
  position: { x: number; y: number };
  /** ID of the anatomy region (optional, for contextual info) */
  regionId?: string;
  /** Display name of the region */
  regionName?: string;
  /** Callback when an action is selected */
  onSelect: (action: RadialMenuAction) => void;
  /** Callback to close the menu */
  onClose: () => void;
  /** Custom menu items (optional, uses defaults if not provided) */
  customItems?: RadialMenuItem[];
  /** Whether the region is already favorited */
  isFavorited?: boolean;
  /** Radius of the menu in pixels */
  radius?: number;
}

// ============================================================================
// Menu Items Configuration
// ============================================================================

const DEFAULT_MENU_ITEMS: RadialMenuItem[] = [
  {
    id: 'view-details',
    label: 'View Details',
    shortLabel: 'Details',
    description: 'Open detailed information panel',
    color: '#3b82f6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    id: 'isolate-region',
    label: 'Isolate Region',
    shortLabel: 'Isolate',
    description: 'Focus on this region only',
    color: '#8b5cf6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 'xray-view',
    label: 'X-Ray View',
    shortLabel: 'X-Ray',
    description: 'Toggle X-ray visualization',
    color: '#06b6d4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 13v5" />
        <path d="M9 18h6" />
        <path d="M10 15l-2 3" />
        <path d="M14 15l2 3" />
      </svg>
    ),
  },
  {
    id: 'show-layers',
    label: 'Show Layers',
    shortLabel: 'Layers',
    description: 'Explore anatomical layers',
    color: '#22c55e',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'ask-ai',
    label: 'Ask AI',
    shortLabel: 'AI',
    description: 'Get AI-powered insights',
    color: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.6 5.8-4 7.4V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.6c-2.4-1.6-4-4.3-4-7.4a9 9 0 0 1 9-9z" />
        <path d="M9 17v2" />
        <path d="M15 17v2" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    id: 'add-favorite',
    label: 'Add to Favorites',
    shortLabel: 'Favorite',
    description: 'Save to your favorites',
    color: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'share',
    label: 'Share',
    shortLabel: 'Share',
    description: 'Share this region',
    color: '#64748b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
];

// ============================================================================
// Hook: Long Press Detection
// ============================================================================

interface LongPressConfig {
  delay?: number;
  onLongPress: (e: React.TouchEvent | React.MouseEvent) => void;
  onPress?: (e: React.TouchEvent | React.MouseEvent) => void;
}

export function useLongPress({ delay = 500, onLongPress, onPress }: LongPressConfig) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLongPressRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });

  const start = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    isLongPressRef.current = false;

    // Get initial position
    if ('touches' in e) {
      positionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else {
      positionRef.current = { x: e.clientX, y: e.clientY };
    }

    timerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      onLongPress(e);
    }, delay);
  }, [delay, onLongPress]);

  const move = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    // Cancel if moved too much
    let x: number, y: number;
    if ('touches' in e) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    const moveThreshold = 10;
    const dx = Math.abs(x - positionRef.current.x);
    const dy = Math.abs(y - positionRef.current.y);

    if (dx > moveThreshold || dy > moveThreshold) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }, []);

  const end = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!isLongPressRef.current && onPress) {
      onPress(e);
    }
  }, [onPress]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    onMouseDown: start,
    onMouseMove: move,
    onMouseUp: end,
    onMouseLeave: end,
    onTouchStart: start,
    onTouchMove: move,
    onTouchEnd: end,
  };
}

// ============================================================================
// Component
// ============================================================================

export function RadialContextMenu({
  isOpen,
  position,
  regionId,
  regionName,
  onSelect,
  onClose,
  customItems,
  isFavorited = false,
  radius = 110,
}: RadialContextMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<RadialMenuAction | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Use custom items or defaults, with favorited state adjustment
  const menuItems = useMemo(() => {
    const items = customItems || DEFAULT_MENU_ITEMS;
    return items.map(item => {
      if (item.id === 'add-favorite' && isFavorited) {
        return {
          ...item,
          label: 'Remove from Favorites',
          shortLabel: 'Unfavorite',
          description: 'Remove from your favorites',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ),
        };
      }
      return item;
    });
  }, [customItems, isFavorited]);

  const itemCount = menuItems.length;
  const angleStep = (2 * Math.PI) / itemCount;

  // Calculate adjusted position to keep menu on screen
  const adjustedPosition = useMemo(() => {
    if (typeof window === 'undefined') return position;

    const padding = 20;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuRadius = radius + 60; // Item radius + item size

    let x = position.x;
    let y = position.y;

    // Adjust horizontal position
    if (x - menuRadius < padding) {
      x = menuRadius + padding;
    } else if (x + menuRadius > viewportWidth - padding) {
      x = viewportWidth - menuRadius - padding;
    }

    // Adjust vertical position
    if (y - menuRadius < padding) {
      y = menuRadius + padding;
    } else if (y + menuRadius > viewportHeight - padding) {
      y = viewportHeight - menuRadius - padding;
    }

    return { x, y };
  }, [position, radius]);

  // Handle animation state
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Reset state when menu opens
  useEffect(() => {
    if (isOpen) {
      setHoveredItem(null);
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Delay to prevent immediate close from the same click that opened it
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => (prev + 1) % itemCount);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => (prev - 1 + itemCount) % itemCount);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < itemCount) {
            handleSelect(menuItems[focusedIndex].id);
          }
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            setFocusedIndex(prev => (prev - 1 + itemCount) % itemCount);
          } else {
            setFocusedIndex(prev => (prev + 1) % itemCount);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, itemCount, menuItems, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  const handleSelect = useCallback((action: RadialMenuAction) => {
    onSelect(action);
    onClose();
  }, [onSelect, onClose]);

  // Don't render if not open and not animating
  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div
      className={`radial-context-overlay ${isOpen ? 'open' : 'closing'}`}
      aria-hidden={!isOpen}
    >
      <div
        ref={menuRef}
        className={`radial-context-menu ${isOpen ? 'open' : 'closing'}`}
        style={{
          '--menu-x': `${adjustedPosition.x}px`,
          '--menu-y': `${adjustedPosition.y}px`,
          '--menu-radius': `${radius}px`,
        } as React.CSSProperties}
        role="menu"
        aria-label={regionName ? `Actions for ${regionName}` : 'Context menu'}
      >
        {/* Center Hub */}
        <div className="radial-context-center">
          <div className="radial-context-center-inner">
            {regionName ? (
              <>
                <span className="radial-context-region-name">{regionName}</span>
                <span className="radial-context-region-hint">Select action</span>
              </>
            ) : (
              <span className="radial-context-region-hint">Select action</span>
            )}
          </div>
          <button
            className="radial-context-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items in Circular Layout */}
        {menuItems.map((item, index) => {
          // Start from top (-90 degrees) and go clockwise
          const angle = angleStep * index - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isHovered = hoveredItem === item.id;
          const isFocused = focusedIndex === index;

          return (
            <button
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`radial-context-item ${isHovered || isFocused ? 'active' : ''}`}
              style={{
                '--item-x': `${x}px`,
                '--item-y': `${y}px`,
                '--item-index': index,
                '--item-color': item.color,
                '--item-delay': `${index * 40}ms`,
              } as React.CSSProperties}
              onClick={() => handleSelect(item.id)}
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setFocusedIndex(index);
              }}
              onMouseLeave={() => setHoveredItem(null)}
              onFocus={() => {
                setHoveredItem(item.id);
                setFocusedIndex(index);
              }}
              onBlur={() => setHoveredItem(null)}
              role="menuitem"
              aria-label={`${item.label}: ${item.description}`}
              tabIndex={isFocused ? 0 : -1}
              data-action={item.id}
            >
              <div className="radial-context-item-bg" />
              <div className="radial-context-item-glow" />
              <div className="radial-context-item-icon">{item.icon}</div>
              <span className="radial-context-item-label">{item.shortLabel}</span>
            </button>
          );
        })}

        {/* Tooltip for hovered/focused item */}
        {(hoveredItem || focusedIndex >= 0) && (
          <div className="radial-context-tooltip" role="tooltip">
            <span className="radial-context-tooltip-title">
              {hoveredItem
                ? menuItems.find(i => i.id === hoveredItem)?.label
                : menuItems[focusedIndex]?.label}
            </span>
            <span className="radial-context-tooltip-desc">
              {hoveredItem
                ? menuItems.find(i => i.id === hoveredItem)?.description
                : menuItems[focusedIndex]?.description}
            </span>
          </div>
        )}

        {/* Connecting lines from center to items */}
        <svg className="radial-context-lines" viewBox="-200 -200 400 400">
          {menuItems.map((item, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const x = Math.cos(angle) * (radius - 20);
            const y = Math.sin(angle) * (radius - 20);
            const isActive = hoveredItem === item.id || focusedIndex === index;

            return (
              <line
                key={item.id}
                className={`radial-context-line ${isActive ? 'active' : ''}`}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                style={{
                  '--line-delay': `${index * 40}ms`,
                  '--item-color': item.color,
                } as React.CSSProperties}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export { DEFAULT_MENU_ITEMS };
export default RadialContextMenu;
