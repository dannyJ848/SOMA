/**
 * Radial Context Menu
 *
 * Circular menu that appears when a body region is selected.
 * Provides contextual actions for the selected region.
 */

import { useState, useEffect, useCallback, useRef, KeyboardEvent } from 'react';
import { getRegionDisplayName } from '../utils/regionToSystemMapper';

// ============================================
// Types
// ============================================

export type ContextMenuAction =
  | 'medications'
  | 'symptoms'
  | 'encyclopedia'
  | 'chat'
  | 'layers'
  | 'histology'
  | 'pathology'
  | 'physiology';

export interface RadialMenuItem {
  id: ContextMenuAction;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export interface RadialContextMenuProps {
  isOpen: boolean;
  regionId: string | null;
  position: { x: number; y: number };
  onSelect: (action: ContextMenuAction) => void;
  onClose: () => void;
}

// ============================================
// Menu Items Configuration
// ============================================

const MENU_ITEMS: RadialMenuItem[] = [
  {
    id: 'medications',
    label: 'Meds',
    description: 'View medications affecting this region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.5 20.5L3.5 13.5C2.5 12.5 2.5 10.5 3.5 9.5L9.5 3.5C10.5 2.5 12.5 2.5 13.5 3.5L20.5 10.5C21.5 11.5 21.5 13.5 20.5 14.5L14.5 20.5C13.5 21.5 11.5 21.5 10.5 20.5Z" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
      </svg>
    ),
  },
  {
    id: 'symptoms',
    label: 'Symptoms',
    description: 'View your symptom history for this region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11L12 14L22 4" />
        <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" />
      </svg>
    ),
  },
  {
    id: 'encyclopedia',
    label: 'Learn',
    description: 'Encyclopedia entries for this region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" />
        <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    id: 'chat',
    label: 'Ask AI',
    description: 'Chat with AI about this region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z" />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="16" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'layers',
    label: 'Deeper',
    description: 'Explore anatomical layers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
  },
  {
    id: 'histology',
    label: 'Histology',
    description: 'View microscopic tissue detail',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21L16.65 16.65" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
  },
  {
    id: 'pathology',
    label: 'Pathology',
    description: 'Disease mechanisms and conditions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9V13" />
        <path d="M12 17H12.01" />
        <path d="M10.3 3.2L1.8 18C1.5 18.5 1.4 19 1.5 19.5C1.6 20 1.9 20.4 2.3 20.7C2.7 20.9 3.1 21 3.5 21H20.5C20.9 21 21.3 20.9 21.7 20.7C22.1 20.4 22.4 20 22.5 19.5C22.6 19 22.5 18.5 22.2 18L13.7 3.2C13.4 2.8 13 2.4 12.5 2.2C12 2 11.5 2 11 2.2C10.5 2.4 10.1 2.8 9.8 3.2H10.3Z" />
      </svg>
    ),
  },
  {
    id: 'physiology',
    label: 'Function',
    description: 'How this region works',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12H18L15 21L9 3L6 12H2" />
      </svg>
    ),
  },
];

// ============================================
// Component
// ============================================

export function RadialContextMenu({
  isOpen,
  regionId,
  position,
  onSelect,
  onClose,
}: RadialContextMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<ContextMenuAction | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle animation state
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 350);
      return () => clearTimeout(timer);
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

    // Use a slight delay to avoid closing immediately on the same tap that opened it
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

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => (prev + 1) % MENU_ITEMS.length);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          handleSelect(MENU_ITEMS[focusedIndex].id);
          break;
        case 'Tab':
          // Allow tab but cycle through menu items
          e.preventDefault();
          if (e.shiftKey) {
            setFocusedIndex(prev => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
          } else {
            setFocusedIndex(prev => (prev + 1) % MENU_ITEMS.length);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, focusedIndex]);

  // Focus the current item when focusedIndex changes
  useEffect(() => {
    if (isOpen && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  // Reset focused index when menu opens
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(0);
    }
  }, [isOpen]);

  // Calculate menu position (keep on screen)
  const getAdjustedPosition = useCallback(() => {
    const radius = 130; // Menu radius
    const padding = 20;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = position.x;
    let y = position.y;

    // Adjust horizontal position
    if (x - radius < padding) {
      x = radius + padding;
    } else if (x + radius > viewportWidth - padding) {
      x = viewportWidth - radius - padding;
    }

    // Adjust vertical position
    if (y - radius < padding) {
      y = radius + padding;
    } else if (y + radius > viewportHeight - padding) {
      y = viewportHeight - radius - padding;
    }

    return { x, y };
  }, [position]);

  const handleSelect = useCallback((action: ContextMenuAction) => {
    onSelect(action);
    onClose();
  }, [onSelect, onClose]);

  if (!isOpen && !isAnimating) {
    return null;
  }

  const adjustedPosition = getAdjustedPosition();
  const regionName = regionId ? getRegionDisplayName(regionId) : '';
  const itemCount = MENU_ITEMS.length;
  const angleStep = (2 * Math.PI) / itemCount;
  const radius = 90; // Distance from center

  return (
    <div
      className={`radial-menu-overlay ${isOpen ? 'open' : 'closing'}`}
      aria-hidden={!isOpen}
    >
      <div
        ref={menuRef}
        className={`radial-menu ${isOpen ? 'open' : 'closing'}`}
        style={{
          left: adjustedPosition.x,
          top: adjustedPosition.y,
        }}
        role="menu"
        aria-label={`Actions for ${regionName}`}
      >
        {/* Center region label */}
        <div className="radial-menu-center">
          <span className="radial-menu-region">{regionName}</span>
          <button
            className="radial-menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </button>
        </div>

        {/* Menu items arranged in a circle */}
        {MENU_ITEMS.map((item, index) => {
          const angle = angleStep * index - Math.PI / 2; // Start from top
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <button
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`radial-menu-item ${hoveredItem === item.id || focusedIndex === index ? 'hovered' : ''}`}
              style={{
                '--item-x': `${x}px`,
                '--item-y': `${y}px`,
                '--item-delay': `${index * 30}ms`,
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
              tabIndex={focusedIndex === index ? 0 : -1}
            >
              <div className="radial-menu-item-icon" aria-hidden="true">{item.icon}</div>
              <span className="radial-menu-item-label">{item.label}</span>
            </button>
          );
        })}

        {/* Tooltip for hovered item */}
        {hoveredItem && (
          <div className="radial-menu-tooltip">
            {MENU_ITEMS.find(i => i.id === hoveredItem)?.description}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Exports
// ============================================

export { MENU_ITEMS };
export default RadialContextMenu;
