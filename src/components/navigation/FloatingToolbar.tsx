import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  HTMLAttributes,
} from 'react';
import './FloatingToolbar.css';

export type ToolbarPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ToolbarItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  tooltip?: string;
  disabled?: boolean;
  active?: boolean;
  section?: string;
}

export interface ToolbarSection {
  id: string;
  label: string;
  collapsed?: boolean;
}

export interface FloatingToolbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag'> {
  position: ToolbarPosition;
  autoHide: boolean;
  items: ToolbarItem[];
  onItemClick: (id: string) => void;
  sections?: ToolbarSection[];
  onSectionToggle?: (sectionId: string, collapsed: boolean) => void;
  draggable?: boolean;
  showLabels?: boolean;
  mobileBreakpoint?: number;
}

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
}

const EDGE_THRESHOLD = 20;
const AUTO_HIDE_DELAY = 2000;

export const FloatingToolbar = forwardRef<HTMLDivElement, FloatingToolbarProps>(
  (
    {
      position = 'right',
      autoHide = false,
      items,
      onItemClick,
      sections = [],
      onSectionToggle,
      draggable = true,
      showLabels = false,
      mobileBreakpoint = 768,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(!autoHide);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(false);
    const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
      new Set(sections.filter((s) => s.collapsed).map((s) => s.id))
    );
    const [customPosition, setCustomPosition] = useState<{ x: number; y: number } | null>(null);
    const [dragState, setDragState] = useState<DragState>({
      isDragging: false,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
    });

    const toolbarRef = useRef<HTMLDivElement>(null);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const combinedRef = (node: HTMLDivElement) => {
      toolbarRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    // Check for mobile viewport
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, [mobileBreakpoint]);

    // Auto-hide functionality
    useEffect(() => {
      if (!autoHide || isHovered || dragState.isDragging) {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
        setIsVisible(true);
        return;
      }

      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, AUTO_HIDE_DELAY);

      return () => {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
      };
    }, [autoHide, isHovered, dragState.isDragging]);

    // Mouse move for edge detection (auto-show)
    useEffect(() => {
      if (!autoHide) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        let nearEdge = false;
        switch (position) {
          case 'top':
            nearEdge = clientY < EDGE_THRESHOLD;
            break;
          case 'bottom':
            nearEdge = clientY > innerHeight - EDGE_THRESHOLD;
            break;
          case 'left':
            nearEdge = clientX < EDGE_THRESHOLD;
            break;
          case 'right':
            nearEdge = clientX > innerWidth - EDGE_THRESHOLD;
            break;
        }

        if (nearEdge) {
          setIsVisible(true);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [autoHide, position]);

    // Touch support for mobile edge detection
    useEffect(() => {
      if (!autoHide || !isMobile) return;

      const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        const { clientX, clientY } = touch;
        const { innerWidth, innerHeight } = window;

        let nearEdge = false;
        switch (position) {
          case 'top':
            nearEdge = clientY < EDGE_THRESHOLD * 2;
            break;
          case 'bottom':
            nearEdge = clientY > innerHeight - EDGE_THRESHOLD * 2;
            break;
          case 'left':
            nearEdge = clientX < EDGE_THRESHOLD * 2;
            break;
          case 'right':
            nearEdge = clientX > innerWidth - EDGE_THRESHOLD * 2;
            break;
        }

        if (nearEdge) {
          setIsVisible(true);
          setMobileExpanded(true);
        }
      };

      window.addEventListener('touchstart', handleTouchStart);
      return () => window.removeEventListener('touchstart', handleTouchStart);
    }, [autoHide, position, isMobile]);

    // Dragging functionality
    const handleDragStart = useCallback(
      (e: React.MouseEvent | React.TouchEvent) => {
        if (!draggable || isMobile) return;

        e.preventDefault();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const rect = toolbarRef.current?.getBoundingClientRect();
        if (!rect) return;

        setDragState({
          isDragging: true,
          startX: clientX,
          startY: clientY,
          offsetX: clientX - rect.left,
          offsetY: clientY - rect.top,
        });
      },
      [draggable, isMobile]
    );

    useEffect(() => {
      if (!dragState.isDragging) return;

      const handleDragMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const rect = toolbarRef.current?.getBoundingClientRect();
        if (!rect) return;

        const newX = Math.max(0, Math.min(window.innerWidth - rect.width, clientX - dragState.offsetX));
        const newY = Math.max(0, Math.min(window.innerHeight - rect.height, clientY - dragState.offsetY));

        setCustomPosition({ x: newX, y: newY });
      };

      const handleDragEnd = () => {
        setDragState((prev) => ({ ...prev, isDragging: false }));
      };

      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);

      return () => {
        window.removeEventListener('mousemove', handleDragMove);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchmove', handleDragMove);
        window.removeEventListener('touchend', handleDragEnd);
      };
    }, [dragState.isDragging, dragState.offsetX, dragState.offsetY]);

    const handleSectionToggle = (sectionId: string) => {
      setCollapsedSections((prev) => {
        const next = new Set(prev);
        if (next.has(sectionId)) {
          next.delete(sectionId);
        } else {
          next.add(sectionId);
        }
        onSectionToggle?.(sectionId, next.has(sectionId));
        return next;
      });
    };

    const handleItemClick = (id: string) => {
      onItemClick(id);
      if (isMobile && autoHide) {
        setMobileExpanded(false);
      }
    };

    const handleMobileToggle = () => {
      setMobileExpanded((prev) => !prev);
    };

    // Group items by section
    const itemsBySection = items.reduce<Record<string, ToolbarItem[]>>((acc, item) => {
      const section = item.section || '__default__';
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(item);
      return acc;
    }, {});

    const orderedSections = [
      ...sections,
      ...(itemsBySection['__default__'] ? [{ id: '__default__', label: '' }] : []),
    ];

    // Build class names
    const classNames = [
      'floating-toolbar',
      `floating-toolbar--${position}`,
      isVisible && 'floating-toolbar--visible',
      isHovered && 'floating-toolbar--hovered',
      dragState.isDragging && 'floating-toolbar--dragging',
      customPosition && 'floating-toolbar--custom-position',
      isMobile && 'floating-toolbar--mobile',
      mobileExpanded && 'floating-toolbar--mobile-expanded',
      showLabels && 'floating-toolbar--with-labels',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Custom position styles
    const customStyles = customPosition
      ? {
          position: 'fixed' as const,
          left: `${customPosition.x}px`,
          top: `${customPosition.y}px`,
          transform: 'none',
        }
      : undefined;

    // Mobile bottom sheet
    if (isMobile) {
      return (
        <div
          ref={combinedRef}
          className={classNames}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="toolbar"
          aria-label="Floating toolbar"
          aria-orientation={position === 'left' || position === 'right' ? 'vertical' : 'horizontal'}
          {...props}
        >
          <div className="floating-toolbar__mobile-backdrop" onClick={() => setMobileExpanded(false)} />
          <div className="floating-toolbar__mobile-sheet">
            <button
              className="floating-toolbar__mobile-handle"
              onClick={handleMobileToggle}
              aria-label={mobileExpanded ? 'Collapse toolbar' : 'Expand toolbar'}
              aria-expanded={mobileExpanded}
            >
              <span className="floating-toolbar__mobile-handle-bar" />
            </button>
            <div className="floating-toolbar__mobile-content">
              {orderedSections.map((section) => {
                const sectionItems = itemsBySection[section.id];
                if (!sectionItems || sectionItems.length === 0) return null;

                return (
                  <div key={section.id} className="floating-toolbar__section">
                    {section.label && (
                      <button
                        className="floating-toolbar__section-header"
                        onClick={() => handleSectionToggle(section.id)}
                        aria-expanded={!collapsedSections.has(section.id)}
                      >
                        <span className="floating-toolbar__section-label">{section.label}</span>
                        <span
                          className={`floating-toolbar__section-chevron ${
                            collapsedSections.has(section.id) ? 'floating-toolbar__section-chevron--collapsed' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2.5 4.5L6 8L9.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    )}
                    {!collapsedSections.has(section.id) && (
                      <div className="floating-toolbar__items floating-toolbar__items--grid">
                        {sectionItems.map((item) => (
                          <button
                            key={item.id}
                            className={`floating-toolbar__item ${item.active ? 'floating-toolbar__item--active' : ''} ${
                              item.disabled ? 'floating-toolbar__item--disabled' : ''
                            }`}
                            onClick={() => handleItemClick(item.id)}
                            disabled={item.disabled}
                            aria-label={item.tooltip || item.label}
                            aria-pressed={item.active}
                          >
                            <span className="floating-toolbar__item-icon">{item.icon}</span>
                            <span className="floating-toolbar__item-label">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    // Desktop toolbar
    return (
      <div
        ref={combinedRef}
        className={classNames}
        style={customStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="toolbar"
        aria-label="Floating toolbar"
        aria-orientation={position === 'left' || position === 'right' ? 'vertical' : 'horizontal'}
        {...props}
      >
        {draggable && (
          <div
            className="floating-toolbar__drag-handle"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            aria-label="Drag to reposition toolbar"
            role="button"
            tabIndex={0}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="4" cy="3" r="1.5" fill="currentColor" />
              <circle cx="10" cy="3" r="1.5" fill="currentColor" />
              <circle cx="4" cy="7" r="1.5" fill="currentColor" />
              <circle cx="10" cy="7" r="1.5" fill="currentColor" />
              <circle cx="4" cy="11" r="1.5" fill="currentColor" />
              <circle cx="10" cy="11" r="1.5" fill="currentColor" />
            </svg>
          </div>
        )}
        <div className="floating-toolbar__content">
          {orderedSections.map((section) => {
            const sectionItems = itemsBySection[section.id];
            if (!sectionItems || sectionItems.length === 0) return null;

            return (
              <div key={section.id} className="floating-toolbar__section">
                {section.label && (
                  <button
                    className="floating-toolbar__section-header"
                    onClick={() => handleSectionToggle(section.id)}
                    aria-expanded={!collapsedSections.has(section.id)}
                  >
                    <span
                      className={`floating-toolbar__section-chevron ${
                        collapsedSections.has(section.id) ? 'floating-toolbar__section-chevron--collapsed' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="floating-toolbar__section-label">{section.label}</span>
                  </button>
                )}
                {!collapsedSections.has(section.id) && (
                  <div className="floating-toolbar__items">
                    {sectionItems.map((item) => (
                      <div key={item.id} className="floating-toolbar__item-wrapper">
                        <button
                          className={`floating-toolbar__item ${item.active ? 'floating-toolbar__item--active' : ''} ${
                            item.disabled ? 'floating-toolbar__item--disabled' : ''
                          }`}
                          onClick={() => handleItemClick(item.id)}
                          disabled={item.disabled}
                          aria-label={item.tooltip || item.label}
                          aria-pressed={item.active}
                        >
                          <span className="floating-toolbar__item-icon">{item.icon}</span>
                          {showLabels && <span className="floating-toolbar__item-label">{item.label}</span>}
                        </button>
                        {(item.tooltip || (!showLabels && item.label)) && (
                          <div className="floating-toolbar__tooltip" role="tooltip">
                            {item.tooltip || item.label}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

FloatingToolbar.displayName = 'FloatingToolbar';

export default FloatingToolbar;
