/**
 * SpatialBreadcrumbs
 *
 * A breadcrumb navigation component designed for 3D anatomical exploration.
 * Shows the anatomical hierarchy path (Body > Torso > Heart > Left Ventricle)
 * with glass styling, mini 3D preview thumbnails on hover, and smooth animations.
 */

import React, {
  memo,
  useState,
  useRef,
  useCallback,
  useEffect,
  type HTMLAttributes,
  type CSSProperties,
} from 'react';
import './SpatialBreadcrumbs.css';

// ============================================
// Types
// ============================================

/**
 * Breadcrumb item representing a level in the anatomical hierarchy
 */
export interface BreadcrumbItem {
  /** Unique identifier for this level */
  id: string;
  /** Display label (e.g., "Heart", "Left Ventricle") */
  label: string;
  /** Icon identifier or path */
  icon?: string;
  /** 3D preview thumbnail URL */
  thumbnailUrl?: string;
  /** Latin name or alternative label */
  latinName?: string;
  /** Body system color (for accents) */
  systemColor?: string;
  /** Additional metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Props for the SpatialBreadcrumbs component
 */
export interface SpatialBreadcrumbsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Array of breadcrumb items representing the anatomical hierarchy */
  path: BreadcrumbItem[];
  /** Callback when a breadcrumb level is clicked */
  onNavigate: (level: number) => void;
  /** Whether to show 3D preview thumbnails on hover */
  showPreviews?: boolean;
  /** Position in the viewport */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Maximum visible items before collapsing (0 = no limit) */
  maxVisibleItems?: number;
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Enable glass morphism styling */
  glassEffect?: boolean;
  /** Animation duration in ms */
  animationDuration?: number;
  /** Home icon label */
  homeLabel?: string;
  /** Whether the component is in a loading state */
  isLoading?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
}

/**
 * Direction of navigation animation
 */
type NavigationDirection = 'drilling-down' | 'drilling-up' | 'none';

// ============================================
// Icons (inline SVG for performance)
// ============================================

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BodyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M9 11l-2 10M15 11l2 10M9 11h6" />
  </svg>
);

const EllipsisIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="6" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="18" cy="12" r="2" />
  </svg>
);

// ============================================
// Sub-components
// ============================================

interface PreviewPopupProps {
  item: BreadcrumbItem;
  visible: boolean;
  position: { x: number; y: number };
}

const PreviewPopup: React.FC<PreviewPopupProps> = memo(({ item, visible, position }) => {
  if (!visible) return null;

  const style: CSSProperties = {
    '--popup-x': `${position.x}px`,
    '--popup-y': `${position.y}px`,
  } as CSSProperties;

  return (
    <div
      className="spatial-breadcrumbs__preview-popup"
      style={style}
      role="tooltip"
      aria-label={`Preview of ${item.label}`}
    >
      <div className="spatial-breadcrumbs__preview-content">
        {item.thumbnailUrl ? (
          <div className="spatial-breadcrumbs__preview-thumbnail">
            <img
              src={item.thumbnailUrl}
              alt={`3D preview of ${item.label}`}
              loading="lazy"
            />
            <div className="spatial-breadcrumbs__preview-overlay" />
          </div>
        ) : (
          <div className="spatial-breadcrumbs__preview-placeholder">
            <BodyIcon className="spatial-breadcrumbs__preview-icon" />
          </div>
        )}
        <div className="spatial-breadcrumbs__preview-info">
          <span className="spatial-breadcrumbs__preview-label">{item.label}</span>
          {item.latinName && (
            <span className="spatial-breadcrumbs__preview-latin">{item.latinName}</span>
          )}
        </div>
      </div>
      <div className="spatial-breadcrumbs__preview-arrow" />
    </div>
  );
});

PreviewPopup.displayName = 'PreviewPopup';

interface BreadcrumbItemComponentProps {
  item: BreadcrumbItem;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  isHidden: boolean;
  showPreview: boolean;
  onClick: () => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  direction: NavigationDirection;
  animationDelay: number;
  disabled: boolean;
}

const BreadcrumbItemComponent: React.FC<BreadcrumbItemComponentProps> = memo(({
  item,
  index,
  isFirst,
  isLast,
  isHidden,
  showPreview,
  onClick,
  onMouseEnter,
  onMouseLeave,
  direction,
  animationDelay,
  disabled,
}) => {
  const style: CSSProperties = {
    '--item-delay': `${animationDelay}ms`,
    '--system-color': item.systemColor || 'var(--accent-primary)',
  } as CSSProperties;

  const handleClick = useCallback(() => {
    if (!isLast && !disabled) {
      onClick();
    }
  }, [isLast, disabled, onClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isLast && !disabled) {
      e.preventDefault();
      onClick();
    }
  }, [isLast, disabled, onClick]);

  if (isHidden) {
    return null;
  }

  return (
    <li
      className={`
        spatial-breadcrumbs__item
        ${isFirst ? 'spatial-breadcrumbs__item--first' : ''}
        ${isLast ? 'spatial-breadcrumbs__item--current' : ''}
        ${direction !== 'none' ? `spatial-breadcrumbs__item--animate-${direction}` : ''}
      `}
      style={style}
    >
      <button
        type="button"
        className={`
          spatial-breadcrumbs__button
          ${isLast ? 'spatial-breadcrumbs__button--current' : ''}
          ${disabled ? 'spatial-breadcrumbs__button--disabled' : ''}
        `}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={handleKeyDown}
        disabled={disabled || isLast}
        aria-current={isLast ? 'page' : undefined}
        aria-label={isLast ? `Current location: ${item.label}` : `Navigate to ${item.label}`}
        tabIndex={isLast ? -1 : 0}
      >
        {item.icon && (
          <span className="spatial-breadcrumbs__item-icon" aria-hidden="true">
            {item.icon}
          </span>
        )}
        <span className="spatial-breadcrumbs__item-label">{item.label}</span>
        {item.systemColor && (
          <span
            className="spatial-breadcrumbs__system-indicator"
            style={{ backgroundColor: item.systemColor }}
            aria-hidden="true"
          />
        )}
      </button>
    </li>
  );
});

BreadcrumbItemComponent.displayName = 'BreadcrumbItemComponent';

// ============================================
// Main Component
// ============================================

export const SpatialBreadcrumbs: React.FC<SpatialBreadcrumbsProps> = memo(({
  path,
  onNavigate,
  showPreviews = true,
  position = 'top-left',
  maxVisibleItems = 4,
  separator,
  glassEffect = true,
  animationDuration = 300,
  homeLabel = 'Body',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  // State
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [navigationDirection, setNavigationDirection] = useState<NavigationDirection>('none');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const previousPathLength = useRef(path.length);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect navigation direction for animations
  useEffect(() => {
    const currentLength = path.length;
    const previousLength = previousPathLength.current;

    if (currentLength > previousLength) {
      setNavigationDirection('drilling-down');
    } else if (currentLength < previousLength) {
      setNavigationDirection('drilling-up');
    }

    previousPathLength.current = currentLength;

    // Reset animation state after animation completes
    const timeout = setTimeout(() => {
      setNavigationDirection('none');
    }, animationDuration + 100);

    return () => clearTimeout(timeout);
  }, [path.length, animationDuration]);

  // Handle hover for preview
  const handleItemMouseEnter = useCallback((index: number, event: React.MouseEvent) => {
    if (!showPreviews || disabled || isMobile) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      setPreviewPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 8,
      });
      setHoveredIndex(index);
    }, 200);
  }, [showPreviews, disabled, isMobile]);

  const handleItemMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredIndex(null);
  }, []);

  // Handle navigation
  const handleNavigate = useCallback((level: number) => {
    if (disabled) return;
    setShowCollapsedMenu(false);
    onNavigate(level);
  }, [onNavigate, disabled]);

  // Handle home click
  const handleHomeClick = useCallback(() => {
    if (disabled) return;
    onNavigate(0);
  }, [onNavigate, disabled]);

  // Toggle collapsed menu
  const handleEllipsisClick = useCallback(() => {
    setShowCollapsedMenu((prev) => !prev);
  }, []);

  // Close collapsed menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowCollapsedMenu(false);
      }
    };

    if (showCollapsedMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCollapsedMenu]);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Calculate visible items
  const shouldCollapse = maxVisibleItems > 0 && path.length > maxVisibleItems;
  const visibleStartIndex = shouldCollapse ? path.length - maxVisibleItems + 1 : 0;
  const hiddenItems = shouldCollapse ? path.slice(1, visibleStartIndex) : [];

  // Render separator
  const renderSeparator = (key: string) => (
    <li
      key={key}
      className="spatial-breadcrumbs__separator"
      aria-hidden="true"
    >
      {separator || <ChevronIcon className="spatial-breadcrumbs__separator-icon" />}
    </li>
  );

  // Container classes
  const containerClasses = [
    'spatial-breadcrumbs',
    `spatial-breadcrumbs--${position}`,
    glassEffect ? 'spatial-breadcrumbs--glass' : '',
    isMobile ? 'spatial-breadcrumbs--mobile' : '',
    isCollapsed ? 'spatial-breadcrumbs--collapsed' : '',
    isLoading ? 'spatial-breadcrumbs--loading' : '',
    disabled ? 'spatial-breadcrumbs--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  // Style variables
  const containerStyle: CSSProperties = {
    '--animation-duration': `${animationDuration}ms`,
  } as CSSProperties;

  return (
    <nav
      ref={containerRef}
      className={containerClasses}
      style={containerStyle}
      aria-label="Anatomical navigation breadcrumb"
      {...props}
    >
      <ol className="spatial-breadcrumbs__list">
        {/* Home button */}
        <li className="spatial-breadcrumbs__item spatial-breadcrumbs__item--home">
          <button
            type="button"
            className="spatial-breadcrumbs__home-button"
            onClick={handleHomeClick}
            disabled={disabled || path.length === 0}
            aria-label={`Return to ${homeLabel} view`}
            title={homeLabel}
          >
            <HomeIcon className="spatial-breadcrumbs__home-icon" />
            {!isMobile && (
              <span className="spatial-breadcrumbs__home-label">{homeLabel}</span>
            )}
          </button>
        </li>

        {path.length > 0 && renderSeparator('home-sep')}

        {/* Collapsed items indicator */}
        {shouldCollapse && hiddenItems.length > 0 && (
          <>
            <li className="spatial-breadcrumbs__item spatial-breadcrumbs__item--ellipsis">
              <button
                type="button"
                className="spatial-breadcrumbs__ellipsis-button"
                onClick={handleEllipsisClick}
                aria-expanded={showCollapsedMenu}
                aria-haspopup="true"
                aria-label={`Show ${hiddenItems.length} hidden levels`}
                disabled={disabled}
              >
                <EllipsisIcon className="spatial-breadcrumbs__ellipsis-icon" />
              </button>

              {/* Collapsed menu dropdown */}
              {showCollapsedMenu && (
                <ul
                  className="spatial-breadcrumbs__collapsed-menu"
                  role="menu"
                  aria-label="Hidden navigation levels"
                >
                  {hiddenItems.map((item, index) => (
                    <li key={item.id} role="none">
                      <button
                        type="button"
                        role="menuitem"
                        className="spatial-breadcrumbs__collapsed-item"
                        onClick={() => handleNavigate(index + 1)}
                        disabled={disabled}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {renderSeparator('ellipsis-sep')}
          </>
        )}

        {/* Visible breadcrumb items */}
        {path.map((item, index) => {
          const isHidden = shouldCollapse && index > 0 && index < visibleStartIndex;
          const isFirst = index === 0;
          const isLast = index === path.length - 1;
          const animationDelay = (index - visibleStartIndex + 1) * 50;

          return (
            <React.Fragment key={item.id}>
              <BreadcrumbItemComponent
                item={item}
                index={index}
                isFirst={isFirst}
                isLast={isLast}
                isHidden={isHidden}
                showPreview={showPreviews && hoveredIndex === index}
                onClick={() => handleNavigate(index)}
                onMouseEnter={(e) => handleItemMouseEnter(index, e)}
                onMouseLeave={handleItemMouseLeave}
                direction={navigationDirection}
                animationDelay={animationDelay}
                disabled={disabled}
              />
              {!isHidden && !isLast && renderSeparator(`sep-${item.id}`)}
            </React.Fragment>
          );
        })}
      </ol>

      {/* Preview popup */}
      {showPreviews && hoveredIndex !== null && path[hoveredIndex] && (
        <PreviewPopup
          item={path[hoveredIndex]}
          visible={true}
          position={previewPosition}
        />
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="spatial-breadcrumbs__loading" aria-hidden="true">
          <div className="spatial-breadcrumbs__loading-spinner" />
        </div>
      )}
    </nav>
  );
});

SpatialBreadcrumbs.displayName = 'SpatialBreadcrumbs';

export default SpatialBreadcrumbs;
