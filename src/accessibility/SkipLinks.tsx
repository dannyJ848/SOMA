/**
 * Skip Links Component
 *
 * Provides keyboard-accessible skip navigation links for users
 * who rely on keyboard navigation or screen readers.
 */

import React, { useCallback, useState } from 'react';
import { announce } from './index';

// ============================================
// Types
// ============================================

interface SkipLinkTarget {
  id: string;
  label: string;
  priority?: number;
}

interface SkipLinksProps {
  targets?: SkipLinkTarget[];
  mainContentId?: string;
  navigationId?: string;
  searchId?: string;
  footerId?: string;
  className?: string;
}

// ============================================
// Default Targets
// ============================================

const DEFAULT_TARGETS: SkipLinkTarget[] = [
  { id: 'main-content', label: 'Skip to main content', priority: 1 },
  { id: 'navigation', label: 'Skip to navigation', priority: 2 },
  { id: 'search', label: 'Skip to search', priority: 3 },
];

// ============================================
// Skip Links Component
// ============================================

/**
 * Skip links for keyboard navigation
 * These links become visible when focused
 */
export function SkipLinks({
  targets,
  mainContentId = 'main-content',
  navigationId = 'navigation',
  searchId = 'search',
  footerId = 'footer',
  className = '',
}: SkipLinksProps) {
  const [activeTarget, setActiveTarget] = useState<string | null>(null);

  // Build targets list
  const skipTargets = targets || [
    { id: mainContentId, label: 'Skip to main content', priority: 1 },
    { id: navigationId, label: 'Skip to navigation', priority: 2 },
    { id: searchId, label: 'Skip to search', priority: 3 },
    { id: footerId, label: 'Skip to footer', priority: 4 },
  ];

  // Sort by priority
  const sortedTargets = [...skipTargets].sort(
    (a, b) => (a.priority || 0) - (b.priority || 0)
  );

  const handleSkip = useCallback((targetId: string, label: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      // Make target focusable if it isn't already
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      announce(label);
      setActiveTarget(targetId);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, targetId: string, label: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSkip(targetId, label);
      }
    },
    [handleSkip]
  );

  return (
    <nav
      className={`skip-links ${className}`}
      aria-label="Skip links"
      role="navigation"
    >
      <ul className="skip-links-list">
        {sortedTargets.map((target) => (
          <li key={target.id} className="skip-links-item">
            <a
              href={`#${target.id}`}
              className="skip-link"
              onClick={(e) => {
                e.preventDefault();
                handleSkip(target.id, target.label);
              }}
              onKeyDown={(e) => handleKeyDown(e, target.id, target.label)}
            >
              {target.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ============================================
// Single Skip Link Component
// ============================================

interface SingleSkipLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onSkip?: () => void;
}

/**
 * Individual skip link for custom positioning
 */
export function SingleSkipLink({
  targetId,
  children,
  className = 'skip-link',
  onSkip,
}: SingleSkipLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        announce(`Skipped to ${targetId.replace(/-/g, ' ')}`);
        onSkip?.();
      }
    },
    [targetId, onSkip]
  );

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

// ============================================
// Skip Link Group Component
// ============================================

interface SkipLinkGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container for custom skip link arrangements
 */
export function SkipLinkGroup({ children, className = '' }: SkipLinkGroupProps) {
  return (
    <div className={`skip-link-group ${className}`} role="navigation" aria-label="Skip links">
      {children}
    </div>
  );
}

// ============================================
// Skip Link Target Component
// ============================================

interface SkipLinkTargetProps {
  id: string;
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Target element for skip links
 * Wraps content and provides proper focus management
 */
export function SkipLinkTarget({
  id,
  as: Component = 'div',
  children,
  className = '',
}: SkipLinkTargetProps) {
  return (
    <Component id={id} tabIndex={-1} className={`skip-link-target ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// Back to Top Link Component
// ============================================

interface BackToTopProps {
  threshold?: number;
  className?: string;
  label?: string;
}

/**
 * Back to top button that appears after scrolling
 */
export function BackToTop({
  threshold = 300,
  className = '',
  label = 'Back to top',
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Focus on first skip link or body
    const firstSkipLink = document.querySelector('.skip-link') as HTMLElement;
    if (firstSkipLink) {
      firstSkipLink.focus();
    } else {
      document.body.focus();
    }
    announce('Returned to top of page');
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`back-to-top ${className}`}
      aria-label={label}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      <span className="back-to-top-label">{label}</span>
    </button>
  );
}

// ============================================
// Table of Contents Skip Links
// ============================================

interface TOCItem {
  id: string;
  label: string;
  level: number;
}

interface TableOfContentsSkipLinksProps {
  items: TOCItem[];
  className?: string;
  ariaLabel?: string;
}

/**
 * Table of contents with skip links for long documents
 */
export function TableOfContentsSkipLinks({
  items,
  className = '',
  ariaLabel = 'Table of contents',
}: TableOfContentsSkipLinksProps) {
  const handleSkip = useCallback((id: string, label: string) => {
    const target = document.getElementById(id);
    if (target) {
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      announce(`Jumped to ${label}`);
    }
  }, []);

  return (
    <nav className={`toc-skip-links ${className}`} aria-label={ariaLabel}>
      <ul className="toc-list" role="list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc-item toc-level-${item.level}`}
            style={{ marginLeft: `${(item.level - 1) * 16}px` }}
          >
            <a
              href={`#${item.id}`}
              className="toc-link"
              onClick={(e) => {
                e.preventDefault();
                handleSkip(item.id, item.label);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SkipLinks;
