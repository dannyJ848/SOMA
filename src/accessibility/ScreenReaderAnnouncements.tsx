/**
 * Screen Reader Announcements
 *
 * Comprehensive live region management for screen reader announcements.
 * Provides multiple announcement channels with different priorities.
 */

import React, { createContext, useContext, useCallback, useRef, useEffect, useState } from 'react';

// ============================================
// Types
// ============================================

type AnnouncementPriority = 'polite' | 'assertive';

interface Announcement {
  id: string;
  message: string;
  priority: AnnouncementPriority;
  timestamp: number;
}

interface AnnouncementContextValue {
  announce: (message: string, priority?: AnnouncementPriority) => void;
  announcePolite: (message: string) => void;
  announceAssertive: (message: string) => void;
  announceError: (message: string) => void;
  announceSuccess: (message: string) => void;
  announceStatus: (message: string) => void;
  announceProgress: (current: number, total: number, label?: string) => void;
  clearAnnouncements: () => void;
}

// ============================================
// Context
// ============================================

const AnnouncementContext = createContext<AnnouncementContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface ScreenReaderAnnouncementsProps {
  children: React.ReactNode;
  debounceMs?: number;
}

/**
 * Provider for screen reader announcements with multiple live regions
 */
export function ScreenReaderAnnouncements({
  children,
  debounceMs = 100,
}: ScreenReaderAnnouncementsProps) {
  const [politeMessage, setPoliteMessage] = useState('');
  const [assertiveMessage, setAssertiveMessage] = useState('');
  const politeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const assertiveTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const idCounterRef = useRef(0);

  // Generate unique IDs for announcements
  const generateId = useCallback(() => {
    idCounterRef.current += 1;
    return `announcement-${idCounterRef.current}`;
  }, []);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (politeTimeoutRef.current) clearTimeout(politeTimeoutRef.current);
      if (assertiveTimeoutRef.current) clearTimeout(assertiveTimeoutRef.current);
    };
  }, []);

  // Core announce function with debouncing
  const announce = useCallback(
    (message: string, priority: AnnouncementPriority = 'polite') => {
      if (!message) return;

      if (priority === 'assertive') {
        if (assertiveTimeoutRef.current) {
          clearTimeout(assertiveTimeoutRef.current);
        }
        // Clear first to ensure re-announcement of same message
        setAssertiveMessage('');
        assertiveTimeoutRef.current = setTimeout(() => {
          setAssertiveMessage(message);
        }, debounceMs);
      } else {
        if (politeTimeoutRef.current) {
          clearTimeout(politeTimeoutRef.current);
        }
        setPoliteMessage('');
        politeTimeoutRef.current = setTimeout(() => {
          setPoliteMessage(message);
        }, debounceMs);
      }
    },
    [debounceMs]
  );

  // Convenience methods
  const announcePolite = useCallback(
    (message: string) => announce(message, 'polite'),
    [announce]
  );

  const announceAssertive = useCallback(
    (message: string) => announce(message, 'assertive'),
    [announce]
  );

  const announceError = useCallback(
    (message: string) => announce(`Error: ${message}`, 'assertive'),
    [announce]
  );

  const announceSuccess = useCallback(
    (message: string) => announce(`Success: ${message}`, 'polite'),
    [announce]
  );

  const announceStatus = useCallback(
    (message: string) => announce(message, 'polite'),
    [announce]
  );

  const announceProgress = useCallback(
    (current: number, total: number, label?: string) => {
      const percentage = Math.round((current / total) * 100);
      const progressMessage = label
        ? `${label}: ${percentage}% complete, ${current} of ${total}`
        : `Progress: ${percentage}% complete`;
      announce(progressMessage, 'polite');
    },
    [announce]
  );

  const clearAnnouncements = useCallback(() => {
    setPoliteMessage('');
    setAssertiveMessage('');
  }, []);

  const contextValue: AnnouncementContextValue = {
    announce,
    announcePolite,
    announceAssertive,
    announceError,
    announceSuccess,
    announceStatus,
    announceProgress,
    clearAnnouncements,
  };

  return (
    <AnnouncementContext.Provider value={contextValue}>
      {children}

      {/* Polite live region - for non-urgent announcements */}
      <div
        id="sr-announcements-polite"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {politeMessage}
      </div>

      {/* Assertive live region - for urgent announcements */}
      <div
        id="sr-announcements-assertive"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {assertiveMessage}
      </div>

      {/* Log region for cumulative announcements (optional) */}
      <div
        id="sr-announcements-log"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        className="sr-only"
      />
    </AnnouncementContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access announcement functions
 */
export function useAnnouncements(): AnnouncementContextValue {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncements must be used within a ScreenReaderAnnouncements provider');
  }
  return context;
}

// ============================================
// Standalone Live Region Component
// ============================================

interface LiveRegionProps {
  id?: string;
  priority?: AnnouncementPriority;
  atomic?: boolean;
  relevant?: 'additions' | 'removals' | 'text' | 'all' | 'additions text';
  role?: 'status' | 'alert' | 'log' | 'timer' | 'marquee';
  children?: React.ReactNode;
  className?: string;
}

/**
 * Standalone live region for specific use cases
 */
export function LiveRegion({
  id,
  priority = 'polite',
  atomic = true,
  relevant = 'additions text',
  role = 'status',
  children,
  className = 'sr-only',
}: LiveRegionProps) {
  return (
    <div
      id={id}
      role={role}
      aria-live={priority}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className={className}
    >
      {children}
    </div>
  );
}

// ============================================
// Route Announcer
// ============================================

interface RouteAnnouncerProps {
  routeName: string;
  pageTitle?: string;
}

/**
 * Announces route changes for screen readers
 */
export function RouteAnnouncer({ routeName, pageTitle }: RouteAnnouncerProps) {
  const { announce } = useAnnouncements();
  const previousRouteRef = useRef<string>('');

  useEffect(() => {
    if (routeName !== previousRouteRef.current) {
      const title = pageTitle || routeName;
      announce(`Navigated to ${title}`, 'polite');
      previousRouteRef.current = routeName;
    }
  }, [routeName, pageTitle, announce]);

  return null;
}

// ============================================
// Loading Announcer
// ============================================

interface LoadingAnnouncerProps {
  isLoading: boolean;
  loadingMessage?: string;
  completeMessage?: string;
  errorMessage?: string;
  hasError?: boolean;
}

/**
 * Announces loading states for screen readers
 */
export function LoadingAnnouncer({
  isLoading,
  loadingMessage = 'Loading content',
  completeMessage = 'Content loaded',
  errorMessage = 'Failed to load content',
  hasError = false,
}: LoadingAnnouncerProps) {
  const { announce, announceError } = useAnnouncements();
  const wasLoadingRef = useRef(false);

  useEffect(() => {
    if (isLoading && !wasLoadingRef.current) {
      announce(loadingMessage, 'polite');
    } else if (!isLoading && wasLoadingRef.current) {
      if (hasError) {
        announceError(errorMessage);
      } else {
        announce(completeMessage, 'polite');
      }
    }
    wasLoadingRef.current = isLoading;
  }, [isLoading, hasError, loadingMessage, completeMessage, errorMessage, announce, announceError]);

  return null;
}

// ============================================
// Form Validation Announcer
// ============================================

interface ValidationError {
  field: string;
  message: string;
}

interface FormValidationAnnouncerProps {
  errors: ValidationError[];
  formLabel?: string;
}

/**
 * Announces form validation errors for screen readers
 */
export function FormValidationAnnouncer({
  errors,
  formLabel = 'form',
}: FormValidationAnnouncerProps) {
  const { announceAssertive } = useAnnouncements();
  const previousErrorCountRef = useRef(0);

  useEffect(() => {
    if (errors.length > 0 && errors.length !== previousErrorCountRef.current) {
      const errorCount = errors.length;
      const errorSummary =
        errorCount === 1
          ? `1 error in ${formLabel}: ${errors[0].message}`
          : `${errorCount} errors in ${formLabel}. First error: ${errors[0].message}`;
      announceAssertive(errorSummary);
    }
    previousErrorCountRef.current = errors.length;
  }, [errors, formLabel, announceAssertive]);

  return null;
}

// ============================================
// Selection Announcer
// ============================================

interface SelectionAnnouncerProps<T> {
  selectedItems: T[];
  getItemLabel: (item: T) => string;
  itemType?: string;
}

/**
 * Announces selection changes for screen readers
 */
export function SelectionAnnouncer<T>({
  selectedItems,
  getItemLabel,
  itemType = 'item',
}: SelectionAnnouncerProps<T>) {
  const { announce } = useAnnouncements();
  const previousCountRef = useRef(0);

  useEffect(() => {
    const currentCount = selectedItems.length;
    if (currentCount !== previousCountRef.current) {
      if (currentCount === 0) {
        announce(`No ${itemType}s selected`, 'polite');
      } else if (currentCount === 1) {
        announce(`${getItemLabel(selectedItems[0])} selected`, 'polite');
      } else {
        announce(`${currentCount} ${itemType}s selected`, 'polite');
      }
    }
    previousCountRef.current = currentCount;
  }, [selectedItems, getItemLabel, itemType, announce]);

  return null;
}

export default ScreenReaderAnnouncements;
