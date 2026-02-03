/**
 * Accessibility Utilities
 *
 * Comprehensive accessibility features for WCAG 2.1 AA compliance:
 * - Screen reader announcements
 * - Focus management
 * - Keyboard navigation utilities
 * - Live region management
 * - Skip links
 * - ARIA helpers
 */

// ============================================
// Live Region Announcements
// ============================================

let liveRegion: HTMLDivElement | null = null;

/**
 * Get or create the live region element for screen reader announcements
 */
function getLiveRegion(): HTMLDivElement {
  if (liveRegion && document.body.contains(liveRegion)) {
    return liveRegion;
  }

  liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'a11y-live-region';
  document.body.appendChild(liveRegion);
  return liveRegion;
}

/**
 * Announce a message to screen readers
 * @param message - The message to announce
 * @param priority - 'polite' (default) or 'assertive' for urgent messages
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const region = getLiveRegion();
  region.setAttribute('aria-live', priority);

  // Clear and set with a small delay to ensure announcement
  region.textContent = '';
  requestAnimationFrame(() => {
    region.textContent = message;
  });
}

/**
 * Announce an error to screen readers (uses assertive)
 */
export function announceError(message: string): void {
  announce(message, 'assertive');
}

/**
 * Announce loading state
 */
export function announceLoading(itemName?: string): void {
  const message = itemName ? `Loading ${itemName}...` : 'Loading...';
  announce(message);
}

/**
 * Announce completion
 */
export function announceComplete(itemName?: string): void {
  const message = itemName ? `${itemName} loaded successfully` : 'Content loaded';
  announce(message);
}

// ============================================
// Focus Management
// ============================================

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(', ');

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
}

/**
 * Get the first focusable element in a container
 */
export function getFirstFocusable(container: HTMLElement): HTMLElement | null {
  const elements = getFocusableElements(container);
  return elements[0] || null;
}

/**
 * Get the last focusable element in a container
 */
export function getLastFocusable(container: HTMLElement): HTMLElement | null {
  const elements = getFocusableElements(container);
  return elements[elements.length - 1] || null;
}

/**
 * Trap focus within a container (for modals/dialogs)
 */
export function trapFocus(container: HTMLElement): () => void {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    const focusable = getFocusableElements(container);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}

/**
 * Focus an element and announce it
 */
export function focusAndAnnounce(element: HTMLElement, message?: string): void {
  element.focus();
  if (message) {
    announce(message);
  }
}

/**
 * Save and restore focus (for modals)
 */
export function saveFocus(): () => void {
  const previouslyFocused = document.activeElement as HTMLElement;
  return () => {
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus();
    }
  };
}

// ============================================
// Keyboard Navigation
// ============================================

export type ArrowDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Handle arrow key navigation for lists/grids
 */
export function handleArrowNavigation(
  e: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  options: {
    orientation?: 'horizontal' | 'vertical' | 'grid';
    gridColumns?: number;
    wrap?: boolean;
    onNavigate: (newIndex: number) => void;
  }
): void {
  const { orientation = 'vertical', gridColumns = 1, wrap = true, onNavigate } = options;

  let newIndex = currentIndex;
  const key = e.key;

  if (orientation === 'vertical' || orientation === 'grid') {
    if (key === 'ArrowUp') {
      e.preventDefault();
      newIndex = currentIndex - (orientation === 'grid' ? gridColumns : 1);
    } else if (key === 'ArrowDown') {
      e.preventDefault();
      newIndex = currentIndex + (orientation === 'grid' ? gridColumns : 1);
    }
  }

  if (orientation === 'horizontal' || orientation === 'grid') {
    if (key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = currentIndex - 1;
    } else if (key === 'ArrowRight') {
      e.preventDefault();
      newIndex = currentIndex + 1;
    }
  }

  // Home and End keys
  if (key === 'Home') {
    e.preventDefault();
    newIndex = 0;
  } else if (key === 'End') {
    e.preventDefault();
    newIndex = items.length - 1;
  }

  // Wrap or clamp
  if (wrap) {
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
  } else {
    newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
  }

  if (newIndex !== currentIndex) {
    onNavigate(newIndex);
    items[newIndex]?.focus();
  }
}

/**
 * Create roving tabindex handler for a group
 */
export function createRovingTabindex(
  container: HTMLElement,
  itemSelector: string,
  options?: { orientation?: 'horizontal' | 'vertical' }
): () => void {
  const items = Array.from(container.querySelectorAll(itemSelector)) as HTMLElement[];
  let currentIndex = 0;

  // Set initial tabindex
  items.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const index = items.indexOf(target);
    if (index === -1) return;

    handleArrowNavigation(e, items, index, {
      orientation: options?.orientation || 'vertical',
      onNavigate: (newIndex) => {
        items[currentIndex].setAttribute('tabindex', '-1');
        items[newIndex].setAttribute('tabindex', '0');
        currentIndex = newIndex;
      },
    });
  };

  container.addEventListener('keydown', handleKeyDown);
  return () => container.removeEventListener('keydown', handleKeyDown);
}

// ============================================
// Reduced Motion
// ============================================

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get appropriate animation duration based on user preference
 */
export function getAnimationDuration(normalDuration: number): number {
  return prefersReducedMotion() ? 0 : normalDuration;
}

// ============================================
// Color Contrast
// ============================================

/**
 * Check if a color combination meets WCAG AA contrast ratio (4.5:1 for normal text)
 */
export function meetsContrastRatio(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  largeText = false
): boolean {
  const ratio = getContrastRatio(foreground, background);

  if (level === 'AAA') {
    return largeText ? ratio >= 4.5 : ratio >= 7;
  }
  return largeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getRelativeLuminance(color1);
  const lum2 = getRelativeLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance(color: string): number {
  const rgb = hexToRgb(color);
  if (!rgb) return 0;

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

// ============================================
// Skip Links
// ============================================

/**
 * Create skip link HTML
 */
export function createSkipLink(targetId: string, text: string): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = `#${targetId}`;
  link.className = 'skip-link';
  link.textContent = text;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  return link;
}

// ============================================
// ARIA Helpers
// ============================================

/**
 * Generate a unique ID for ARIA relationships
 */
let idCounter = 0;
export function generateId(prefix = 'a11y'): string {
  return `${prefix}-${++idCounter}`;
}

/**
 * Set up describedby relationship
 */
export function setupDescribedBy(
  element: HTMLElement,
  description: string
): () => void {
  const descId = generateId('desc');
  const descElement = document.createElement('span');
  descElement.id = descId;
  descElement.className = 'sr-only';
  descElement.textContent = description;

  element.setAttribute('aria-describedby', descId);
  element.parentNode?.insertBefore(descElement, element.nextSibling);

  return () => {
    element.removeAttribute('aria-describedby');
    descElement.remove();
  };
}

/**
 * Create visually hidden text for screen readers
 */
export function createScreenReaderText(text: string): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = 'sr-only';
  span.textContent = text;
  return span;
}

// ============================================
// 3D Viewer Accessibility
// ============================================

export interface Anatomy3DKeyboardControls {
  rotateSpeed: number;
  zoomSpeed: number;
  panSpeed: number;
}

export const DEFAULT_3D_CONTROLS: Anatomy3DKeyboardControls = {
  rotateSpeed: 5,
  zoomSpeed: 0.1,
  panSpeed: 0.05,
};

/**
 * Create keyboard controls description for 3D viewer
 */
export function get3DControlsDescription(): string {
  return `
    Keyboard controls for 3D anatomy viewer:
    Arrow keys: Rotate model
    Plus/Minus: Zoom in/out
    W/A/S/D: Pan view
    Space: Reset view
    1-6: Quick view presets
    Tab: Navigate between body regions
    Enter: Select focused region
    Escape: Deselect and close menus
  `.trim();
}

/**
 * 3D viewer keyboard event handler
 */
export interface Anatomy3DKeyboardHandler {
  onRotate?: (direction: ArrowDirection) => void;
  onZoom?: (direction: 'in' | 'out') => void;
  onPan?: (direction: ArrowDirection) => void;
  onReset?: () => void;
  onViewPreset?: (preset: number) => void;
  onSelect?: () => void;
  onDeselect?: () => void;
}

export function handle3DKeyboard(
  e: KeyboardEvent,
  handlers: Anatomy3DKeyboardHandler
): void {
  const { key, shiftKey } = e;

  // Rotation (Arrow keys)
  if (!shiftKey && handlers.onRotate) {
    if (key === 'ArrowUp') {
      e.preventDefault();
      handlers.onRotate('up');
    } else if (key === 'ArrowDown') {
      e.preventDefault();
      handlers.onRotate('down');
    } else if (key === 'ArrowLeft') {
      e.preventDefault();
      handlers.onRotate('left');
    } else if (key === 'ArrowRight') {
      e.preventDefault();
      handlers.onRotate('right');
    }
  }

  // Zoom (+/-)
  if (handlers.onZoom) {
    if (key === '+' || key === '=') {
      e.preventDefault();
      handlers.onZoom('in');
    } else if (key === '-' || key === '_') {
      e.preventDefault();
      handlers.onZoom('out');
    }
  }

  // Pan (Shift + Arrow or WASD)
  if (handlers.onPan) {
    if (shiftKey) {
      if (key === 'ArrowUp' || key === 'w' || key === 'W') {
        e.preventDefault();
        handlers.onPan('up');
      } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
        e.preventDefault();
        handlers.onPan('down');
      } else if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
        e.preventDefault();
        handlers.onPan('left');
      } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
        e.preventDefault();
        handlers.onPan('right');
      }
    }
  }

  // Reset (Space)
  if (key === ' ' && handlers.onReset) {
    e.preventDefault();
    handlers.onReset();
    announce('View reset to default');
  }

  // View presets (1-6)
  if (handlers.onViewPreset && /^[1-6]$/.test(key)) {
    e.preventDefault();
    const preset = parseInt(key, 10);
    handlers.onViewPreset(preset);
    const presetNames = ['', 'Anterior', 'Posterior', 'Left', 'Right', 'Superior', 'Inferior'];
    announce(`Viewing ${presetNames[preset]} view`);
  }

  // Select (Enter)
  if (key === 'Enter' && handlers.onSelect) {
    e.preventDefault();
    handlers.onSelect();
  }

  // Deselect (Escape)
  if (key === 'Escape' && handlers.onDeselect) {
    e.preventDefault();
    handlers.onDeselect();
    announce('Selection cleared');
  }
}

// ============================================
// Exports
// ============================================

export {
  focusableSelectors,
};
