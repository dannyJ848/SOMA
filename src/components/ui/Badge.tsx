import React, { forwardRef, HTMLAttributes } from 'react';
import './Badge.css';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      rounded = false,
      dot = false,
      removable = false,
      onRemove,
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'ui-badge',
      `ui-badge--${variant}`,
      `ui-badge--${size}`,
      rounded && 'ui-badge--rounded',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classNames} {...props}>
        {dot && <span className="ui-badge__dot" aria-hidden="true" />}
        <span className="ui-badge__content">{children}</span>
        {removable && (
          <button
            type="button"
            className="ui-badge__remove"
            onClick={onRemove}
            aria-label="Remove"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="10" y1="4" x2="4" y2="10" />
              <line x1="4" y1="4" x2="10" y2="10" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
