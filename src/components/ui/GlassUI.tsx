import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';
import './GlassUI.css';

// ============================================
// GlassPanel
// ============================================

export type GlassPanelSize = 'sm' | 'md' | 'lg';

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  size?: GlassPanelSize;
  elevated?: boolean;
  bordered?: boolean;
  glow?: boolean;
  context?: 'light' | 'dark' | 'auto';
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      children,
      size = 'md',
      elevated = false,
      bordered = false,
      glow = false,
      context = 'auto',
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'glass-panel',
      `glass-panel--${size}`,
      elevated && 'glass-panel--elevated',
      bordered && 'glass-panel--bordered',
      glow && 'glass-panel--glow',
      context !== 'auto' && `glass-context-${context}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';

// ============================================
// GlassButton
// ============================================

export type GlassButtonVariant = 'default' | 'primary' | 'danger' | 'ghost';
export type GlassButtonSize = 'sm' | 'md' | 'lg';

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassButtonVariant;
  size?: GlassButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      iconOnly = false,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'glass-button',
      `glass-button--${variant}`,
      `glass-button--${size}`,
      iconOnly && 'glass-button--icon-only',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classNames} disabled={disabled} {...props}>
        {leftIcon && <span className="glass-button__icon">{leftIcon}</span>}
        {children && <span className="glass-button__content">{children}</span>}
        {rightIcon && <span className="glass-button__icon">{rightIcon}</span>}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

// ============================================
// GlassToolbar
// ============================================

export type GlassToolbarOrientation = 'horizontal' | 'vertical';
export type GlassToolbarSize = 'sm' | 'md' | 'lg';

export interface GlassToolbarProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: GlassToolbarOrientation;
  size?: GlassToolbarSize;
}

export const GlassToolbar = forwardRef<HTMLDivElement, GlassToolbarProps>(
  (
    {
      children,
      orientation = 'horizontal',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'glass-toolbar',
      `glass-toolbar--${orientation}`,
      `glass-toolbar--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} role="toolbar" {...props}>
        {children}
      </div>
    );
  }
);

GlassToolbar.displayName = 'GlassToolbar';

// GlassToolbar sub-components
export interface GlassToolbarDividerProps extends HTMLAttributes<HTMLDivElement> {}

export const GlassToolbarDivider = forwardRef<HTMLDivElement, GlassToolbarDividerProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`glass-toolbar__divider ${className}`}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }
);

GlassToolbarDivider.displayName = 'GlassToolbarDivider';

export interface GlassToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const GlassToolbarGroup = forwardRef<HTMLDivElement, GlassToolbarGroupProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`glass-toolbar__group ${className}`} role="group" {...props}>
        {children}
      </div>
    );
  }
);

GlassToolbarGroup.displayName = 'GlassToolbarGroup';

// ============================================
// GlassDropdown
// ============================================

export interface GlassDropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface GlassDropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  trigger: React.ReactNode;
  items: (GlassDropdownItem | 'divider')[];
  align?: 'left' | 'right';
  onSelect?: (item: GlassDropdownItem) => void;
  closeOnSelect?: boolean;
}

export const GlassDropdown = forwardRef<HTMLDivElement, GlassDropdownProps>(
  (
    {
      trigger,
      items,
      align = 'left',
      onSelect,
      closeOnSelect = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen]);

    const handleItemClick = (item: GlassDropdownItem) => {
      if (item.disabled) return;
      item.onClick?.();
      onSelect?.(item);
      if (closeOnSelect) {
        setIsOpen(false);
      }
    };

    const classNames = [
      'glass-dropdown',
      isOpen && 'glass-dropdown--open',
      align === 'right' && 'glass-dropdown--align-right',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={dropdownRef} className={classNames} {...props}>
        <button
          type="button"
          className="glass-dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {trigger}
          <svg
            className="glass-dropdown__chevron"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div ref={menuRef} className="glass-dropdown__menu" role="menu">
          {items.map((item, index) => {
            if (item === 'divider') {
              return <div key={`divider-${index}`} className="glass-dropdown__divider" />;
            }

            return (
              <button
                key={item.id}
                type="button"
                className={`glass-dropdown__item ${
                  item.disabled ? 'glass-dropdown__item--disabled' : ''
                }`}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && (
                  <span className="glass-dropdown__item-icon">{item.icon}</span>
                )}
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

GlassDropdown.displayName = 'GlassDropdown';

// ============================================
// GlassTooltip
// ============================================

export type GlassTooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface GlassTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode;
  position?: GlassTooltipPosition;
  delay?: number;
  disabled?: boolean;
}

export const GlassTooltip = forwardRef<HTMLDivElement, GlassTooltipProps>(
  (
    {
      children,
      content,
      position = 'top',
      delay = 200,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const tooltipId = useRef(`glass-tooltip-${Math.random().toString(36).substr(2, 9)}`);

    const showTooltip = () => {
      if (disabled) return;
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`glass-tooltip-wrapper ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        <div aria-describedby={isVisible ? tooltipId.current : undefined}>
          {children}
        </div>
        {isVisible && (
          <div
            id={tooltipId.current}
            role="tooltip"
            className={`glass-tooltip glass-tooltip--${position}`}
          >
            <span className="glass-tooltip__content">{content}</span>
            <span className="glass-tooltip__arrow" aria-hidden="true" />
          </div>
        )}
      </div>
    );
  }
);

GlassTooltip.displayName = 'GlassTooltip';

// ============================================
// GlassBadge
// ============================================

export type GlassBadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type GlassBadgeSize = 'sm' | 'md' | 'lg';

export interface GlassBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: GlassBadgeVariant;
  size?: GlassBadgeSize;
  dot?: boolean;
  pulse?: boolean;
  icon?: React.ReactNode;
}

export const GlassBadge = forwardRef<HTMLSpanElement, GlassBadgeProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      dot = false,
      pulse = false,
      icon,
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'glass-badge',
      `glass-badge--${variant}`,
      `glass-badge--${size}`,
      pulse && 'glass-badge--pulse',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classNames} {...props}>
        {dot && <span className="glass-badge__dot" aria-hidden="true" />}
        {icon && <span className="glass-badge__icon">{icon}</span>}
        {children && <span className="glass-badge__content">{children}</span>}
      </span>
    );
  }
);

GlassBadge.displayName = 'GlassBadge';

// ============================================
// Exports
// ============================================

export default {
  GlassPanel,
  GlassButton,
  GlassToolbar,
  GlassToolbarDivider,
  GlassToolbarGroup,
  GlassDropdown,
  GlassTooltip,
  GlassBadge,
};
