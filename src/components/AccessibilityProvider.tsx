/**
 * Accessibility Enhancer
 * 
 * ARIA labels, keyboard navigation, screen reader support.
 */

import React, { useEffect } from 'react';

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    // Add skip link for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 100;
      transition: top 0.3s;
    `;
    skipLink.onfocus = () => {
      skipLink.style.top = '0';
    };
    skipLink.onblur = () => {
      skipLink.style.top = '-40px';
    };

    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.body.removeChild(skipLink);
    };
  }, []);

  return <>{children}</>;
};

// ARIA label helper
export const getAriaLabel = (
  baseLabel: string,
  context?: { selected?: boolean; expanded?: boolean; count?: number }
): string => {
  let label = baseLabel;
  if (context?.selected) label += ', selected';
  if (context?.expanded) label += ', expanded';
  if (context?.count !== undefined) label += `, ${context.count} items`;
  return label;
};

// Keyboard navigation helper
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  actions: {
    onEnter?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onTab?: () => void;
    onSpace?: () => void;
  }
) => {
  switch (event.key) {
    case 'Enter':
      actions.onEnter?.();
      break;
    case 'Escape':
      actions.onEscape?.();
      break;
    case 'ArrowUp':
      actions.onArrowUp?.();
      break;
    case 'ArrowDown':
      actions.onArrowDown?.();
      break;
    case 'ArrowLeft':
      actions.onArrowLeft?.();
      break;
    case 'ArrowRight':
      actions.onArrowRight?.();
      break;
    case 'Tab':
      actions.onTab?.();
      break;
    case ' ':
      actions.onSpace?.();
      break;
  }
};

// Focus trap for modals
export const useFocusTrap = (containerRef: React.RefObject<HTMLElement>, isActive: boolean) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive, containerRef]);
};

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.style.cssText = `
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export default AccessibilityProvider;
