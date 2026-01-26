import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'ui-button',
      `ui-button--${variant}`,
      `ui-button--${size}`,
      fullWidth && 'ui-button--full-width',
      isLoading && 'ui-button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span className="ui-button__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="ui-button__spinner-icon">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="31.4 31.4"
              />
            </svg>
          </span>
        )}
        {!isLoading && leftIcon && (
          <span className="ui-button__icon ui-button__icon--left">{leftIcon}</span>
        )}
        <span className="ui-button__content">{children}</span>
        {!isLoading && rightIcon && (
          <span className="ui-button__icon ui-button__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
