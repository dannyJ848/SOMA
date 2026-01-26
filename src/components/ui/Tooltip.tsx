import React, { forwardRef, useState, useRef, useEffect, HTMLAttributes } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  disabled?: boolean;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
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
    const tooltipId = useRef(`tooltip-${Math.random().toString(36).substr(2, 9)}`);

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
        className={`ui-tooltip-wrapper ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        <div
          aria-describedby={isVisible ? tooltipId.current : undefined}
        >
          {children}
        </div>
        {isVisible && (
          <div
            id={tooltipId.current}
            role="tooltip"
            className={`ui-tooltip ui-tooltip--${position}`}
          >
            <span className="ui-tooltip__content">{content}</span>
            <span className="ui-tooltip__arrow" aria-hidden="true" />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
