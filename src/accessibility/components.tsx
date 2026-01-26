/**
 * Accessibility Components
 *
 * Reusable accessible UI components for the application.
 */

import React, { useRef, useEffect, useCallback, useState } from 'react';
import {
  useFocusTrap,
  useAnnouncer,
  useReducedMotion,
  useKeyboardShortcuts,
} from './useAccessibility';
import {
  announce,
  get3DControlsDescription,
  generateId,
} from './index';

// ============================================
// Screen Reader Only Text
// ============================================

interface SrOnlyProps {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Visually hidden but screen reader accessible text
 */
export function SrOnly({ children, as: Component = 'span' }: SrOnlyProps) {
  return React.createElement(Component, { className: 'sr-only' }, children);
}

// ============================================
// Skip Link
// ============================================

interface SkipLinkProps {
  targetId: string;
  children?: React.ReactNode;
}

/**
 * Skip link for keyboard navigation
 */
export function SkipLink({ targetId, children = 'Skip to main content' }: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
      announce('Skipped to main content');
    }
  };

  return (
    <a href={`#${targetId}`} className="skip-link" onClick={handleClick}>
      {children}
    </a>
  );
}

// ============================================
// Focus Manager
// ============================================

interface FocusManagerProps {
  children: React.ReactNode;
  isActive: boolean;
  autoFocus?: boolean;
  restoreFocus?: boolean;
}

/**
 * Manages focus trapping and restoration for modal-like components
 */
export function FocusManager({
  children,
  isActive,
  autoFocus = true,
  restoreFocus = true,
}: FocusManagerProps) {
  const containerRef = useFocusTrap(isActive);

  return (
    <div ref={containerRef} role="presentation">
      {children}
    </div>
  );
}

// ============================================
// Accessible Modal
// ============================================

interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  description?: string;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
}

/**
 * Fully accessible modal dialog
 */
export function AccessibleModal({
  isOpen,
  onClose,
  title,
  children,
  description,
  closeOnEscape = true,
  closeOnBackdrop = true,
}: AccessibleModalProps) {
  const containerRef = useFocusTrap(isOpen);
  const titleId = useRef(generateId('modal-title')).current;
  const descId = useRef(generateId('modal-desc')).current;

  // Handle escape key
  useKeyboardShortcuts(
    closeOnEscape
      ? [{ key: 'Escape', handler: onClose, description: 'Close modal' }]
      : []
  );

  // Announce when modal opens
  useEffect(() => {
    if (isOpen) {
      announce(`Dialog opened: ${title}`);
    }
  }, [isOpen, title]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="presentation"
      aria-hidden="false"
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        className="modal-content"
      >
        <h2 id={titleId} className="modal-title">
          {title}
        </h2>
        {description && (
          <p id={descId} className="modal-description">
            {description}
          </p>
        )}
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close dialog"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// ============================================
// Live Region
// ============================================

interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

/**
 * Live region for dynamic announcements
 */
export function LiveRegion({ message, politeness = 'polite' }: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

// ============================================
// Accessible Button
// ============================================

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  description?: string;
  isPressed?: boolean;
  isExpanded?: boolean;
  controls?: string;
  icon?: React.ReactNode;
  srLabel?: string;
}

/**
 * Fully accessible button with proper ARIA attributes
 */
export function AccessibleButton({
  label,
  description,
  isPressed,
  isExpanded,
  controls,
  icon,
  srLabel,
  children,
  ...props
}: AccessibleButtonProps) {
  const descId = description ? generateId('btn-desc') : undefined;

  return (
    <>
      <button
        {...props}
        aria-label={srLabel || label}
        aria-describedby={descId}
        aria-pressed={isPressed}
        aria-expanded={isExpanded}
        aria-controls={controls}
      >
        {icon}
        {children || label}
      </button>
      {description && (
        <span id={descId} className="sr-only">
          {description}
        </span>
      )}
    </>
  );
}

// ============================================
// Accessible Icon
// ============================================

interface AccessibleIconProps {
  children: React.ReactNode;
  label: string;
  role?: 'img' | 'presentation';
}

/**
 * Accessible icon with proper labeling
 */
export function AccessibleIcon({
  children,
  label,
  role = 'img',
}: AccessibleIconProps) {
  if (role === 'presentation') {
    return <span aria-hidden="true">{children}</span>;
  }

  return (
    <span role="img" aria-label={label}>
      {children}
    </span>
  );
}

// ============================================
// Loading Indicator
// ============================================

interface LoadingIndicatorProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Accessible loading indicator
 */
export function LoadingIndicator({
  message = 'Loading...',
  size = 'medium',
}: LoadingIndicatorProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`loading-indicator loading-${size}`}
    >
      {!reducedMotion && <div className="loading-spinner" aria-hidden="true" />}
      <span className="sr-only">{message}</span>
      <span aria-hidden="true">{message}</span>
    </div>
  );
}

// ============================================
// Progress Indicator
// ============================================

interface ProgressIndicatorProps {
  value: number;
  max?: number;
  label: string;
  showPercentage?: boolean;
}

/**
 * Accessible progress indicator
 */
export function ProgressIndicator({
  value,
  max = 100,
  label,
  showPercentage = true,
}: ProgressIndicatorProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="progress-container">
      <span id="progress-label" className="progress-label">
        {label}
      </span>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-labelledby="progress-label"
        aria-valuetext={`${percentage}% complete`}
        className="progress-bar"
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
      </div>
      {showPercentage && (
        <span className="progress-percentage" aria-hidden="true">
          {percentage}%
        </span>
      )}
    </div>
  );
}

// ============================================
// 3D Viewer Accessibility Layer
// ============================================

interface Anatomy3DAccessibilityLayerProps {
  onRotate: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onZoom: (direction: 'in' | 'out') => void;
  onReset: () => void;
  onViewPreset: (preset: number) => void;
  selectedStructure?: string | null;
  structures: Array<{ id: string; name: string }>;
  onSelectStructure: (id: string) => void;
  isActive?: boolean;
}

/**
 * Accessibility overlay for 3D anatomy viewer
 */
export function Anatomy3DAccessibilityLayer({
  onRotate,
  onZoom,
  onReset,
  onViewPreset,
  selectedStructure,
  structures,
  onSelectStructure,
  isActive = true,
}: Anatomy3DAccessibilityLayerProps) {
  const [showHelp, setShowHelp] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { announce: announceMessage } = useAnnouncer();

  // Handle keyboard navigation through structures
  const handleStructureKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isActive) return;

      let newIndex = focusedIndex;

      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        newIndex = focusedIndex > 0 ? focusedIndex - 1 : structures.length - 1;
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        newIndex = focusedIndex < structures.length - 1 ? focusedIndex + 1 : 0;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelectStructure(structures[focusedIndex].id);
        announceMessage(`Selected ${structures[focusedIndex].name}`);
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = structures.length - 1;
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        announceMessage(structures[newIndex].name);
      }
    },
    [focusedIndex, structures, onSelectStructure, isActive, announceMessage]
  );

  // Keyboard shortcuts
  useKeyboardShortcuts([
    { key: '?', handler: () => setShowHelp(!showHelp), description: 'Toggle help' },
  ]);

  return (
    <>
      {/* Keyboard controls description for screen readers */}
      <div className="sr-only" role="region" aria-label="3D Viewer Controls">
        <p>{get3DControlsDescription()}</p>
        <p>
          Currently {selectedStructure ? `viewing ${selectedStructure}` : 'no structure selected'}.
          Use Tab to navigate to structure list.
        </p>
      </div>

      {/* Accessible structure list (hidden visually but available to screen readers) */}
      <div
        role="listbox"
        aria-label="Body structures"
        tabIndex={0}
        onKeyDown={handleStructureKeyDown}
        className="a11y-structure-list"
      >
        {structures.map((structure, index) => (
          <div
            key={structure.id}
            role="option"
            aria-selected={selectedStructure === structure.id}
            tabIndex={index === focusedIndex ? 0 : -1}
            onClick={() => onSelectStructure(structure.id)}
            className={`a11y-structure-item ${
              selectedStructure === structure.id ? 'selected' : ''
            }`}
          >
            {structure.name}
          </div>
        ))}
      </div>

      {/* Help overlay */}
      {showHelp && (
        <div className="a11y-help-overlay" role="dialog" aria-label="Keyboard shortcuts help">
          <h3>Keyboard Controls</h3>
          <ul>
            <li><kbd>Arrow Keys</kbd> - Rotate model</li>
            <li><kbd>+</kbd> / <kbd>-</kbd> - Zoom in/out</li>
            <li><kbd>Shift</kbd> + <kbd>Arrows</kbd> - Pan view</li>
            <li><kbd>Space</kbd> - Reset view</li>
            <li><kbd>1-6</kbd> - Quick view presets</li>
            <li><kbd>Tab</kbd> - Navigate structures</li>
            <li><kbd>Enter</kbd> - Select focused structure</li>
            <li><kbd>Escape</kbd> - Deselect</li>
            <li><kbd>?</kbd> - Toggle this help</li>
          </ul>
          <button onClick={() => setShowHelp(false)} autoFocus>
            Close
          </button>
        </div>
      )}

      {/* Quick access controls for screen reader users */}
      <div className="a11y-quick-controls sr-only-focusable">
        <button onClick={() => onZoom('in')} aria-label="Zoom in">
          Zoom In
        </button>
        <button onClick={() => onZoom('out')} aria-label="Zoom out">
          Zoom Out
        </button>
        <button onClick={onReset} aria-label="Reset view">
          Reset View
        </button>
        <button onClick={() => onViewPreset(1)} aria-label="Front view">
          Front View
        </button>
        <button onClick={() => onViewPreset(2)} aria-label="Back view">
          Back View
        </button>
        <button onClick={() => setShowHelp(true)} aria-label="Show keyboard shortcuts">
          Show Controls Help
        </button>
      </div>
    </>
  );
}

// ============================================
// Accessible Alert
// ============================================

interface AccessibleAlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  onDismiss?: () => void;
  dismissible?: boolean;
}

/**
 * Accessible alert component
 */
export function AccessibleAlert({
  type,
  title,
  message,
  onDismiss,
  dismissible = true,
}: AccessibleAlertProps) {
  const roleMap = {
    info: 'status' as const,
    success: 'status' as const,
    warning: 'alert' as const,
    error: 'alert' as const,
  };

  useEffect(() => {
    if (type === 'error' || type === 'warning') {
      announce(`${type}: ${title}. ${message}`, 'assertive');
    } else {
      announce(`${title}. ${message}`, 'polite');
    }
  }, [type, title, message]);

  return (
    <div
      role={roleMap[type]}
      aria-live={type === 'error' || type === 'warning' ? 'assertive' : 'polite'}
      className={`alert alert-${type}`}
    >
      <div className="alert-content">
        <strong className="alert-title">{title}</strong>
        <p className="alert-message">{message}</p>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="alert-dismiss"
          aria-label={`Dismiss ${type} alert`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ============================================
// Form Field with Accessibility
// ============================================

interface AccessibleFormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactElement;
}

/**
 * Accessible form field wrapper
 */
export function AccessibleFormField({
  id,
  label,
  error,
  hint,
  required,
  children,
}: AccessibleFormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span aria-hidden="true" className="required-indicator">*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>

      {hint && (
        <p id={hintId} className="form-hint">
          {hint}
        </p>
      )}

      {React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        id,
        'aria-describedby': describedBy,
        'aria-invalid': error ? 'true' : undefined,
        'aria-required': required || undefined,
      })}

      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
