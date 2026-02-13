# SOMA Navigation Architecture Design Specification

## Overview

This document specifies a new navigation architecture for SOMA that deeply integrates with the 3D anatomy viewer. The design prioritizes spatial awareness, glass morphism aesthetics, and gesture-based interactions to create an immersive medical exploration experience.

---

## 1. Unified Curved Navigation Bar

### Component: `ViewportNavigationBar`

A navigation bar that curves along the edges of the 3D viewport, maintaining spatial context while providing essential navigation controls.

#### Component Structure

```typescript
// /src/navigation/ViewportNavigationBar.tsx

interface ViewportNavigationBarProps {
  /** Position of the bar relative to viewport */
  position: 'top' | 'bottom' | 'left' | 'right';

  /** Curve intensity (0 = flat, 1 = follows viewport corner radius) */
  curveIntensity: number;

  /** Whether bar is collapsed */
  collapsed: boolean;

  /** Current navigation path */
  navigationPath: NavigationNode[];

  /** Active view mode */
  viewMode: '3d' | 'layers' | 'timeline' | 'compare';

  /** Callbacks */
  onViewModeChange: (mode: ViewMode) => void;
  onNavigate: (nodeId: string) => void;
  onToggleCollapse: () => void;

  /** Viewport dimensions for curve calculation */
  viewportBounds: DOMRect;
}

interface NavigationNode {
  id: string;
  label: string;
  icon?: string;
  type: 'system' | 'region' | 'organ' | 'layer' | 'condition';
  badge?: {
    count: number;
    type: 'condition' | 'medication' | 'symptom';
  };
}
```

#### CSS Implementation

```css
/* /src/navigation/ViewportNavigationBar.css */

.viewport-nav-bar {
  position: absolute;
  z-index: var(--z-navigation, 100);

  /* Glass morphism base */
  background: linear-gradient(
    135deg,
    rgba(17, 24, 39, 0.85) 0%,
    rgba(31, 41, 55, 0.75) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Dynamic border that glows */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 30px rgba(59, 130, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Smooth transitions */
  transition:
    transform var(--duration-normal) var(--ease-spring),
    opacity var(--duration-fast) var(--ease-out),
    border-radius var(--duration-slow) var(--ease-out);
}

/* Top position - curves down at corners */
.viewport-nav-bar--top {
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  border-radius: 0 0 var(--viewport-corner-radius, 24px) var(--viewport-corner-radius, 24px);

  /* SVG clip path for curve effect */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--curve-depth, 12px)),
    calc(100% - var(--curve-width, 80px)) 100%,
    var(--curve-width, 80px) 100%,
    0 calc(100% - var(--curve-depth, 12px))
  );
}

/* Bottom position - curves up at corners */
.viewport-nav-bar--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  border-radius: var(--viewport-corner-radius, 24px) var(--viewport-corner-radius, 24px) 0 0;
  padding-bottom: env(safe-area-inset-bottom);
}

/* Left position - vertical curve */
.viewport-nav-bar--left {
  top: 0;
  bottom: 0;
  left: 0;
  width: 72px;
  border-radius: 0 var(--viewport-corner-radius, 24px) var(--viewport-corner-radius, 24px) 0;

  /* Vertical layout */
  flex-direction: column;
}

/* Collapsed state */
.viewport-nav-bar--collapsed {
  transform: translateY(calc(100% - 16px));
}

.viewport-nav-bar--collapsed.viewport-nav-bar--top {
  transform: translateY(calc(-100% + 16px));
}

/* Inner content container */
.viewport-nav-bar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--space-4);
  gap: var(--space-3);
}

/* Navigation items */
.viewport-nav-bar__items {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.viewport-nav-bar__items::-webkit-scrollbar {
  display: none;
}

/* Individual nav item */
.viewport-nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  white-space: nowrap;

  /* Touch target */
  min-height: 44px;
  min-width: 44px;
}

.viewport-nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.viewport-nav-item--active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  color: var(--accent-primary);
}

.viewport-nav-item__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.viewport-nav-item__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 var(--space-1);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  margin-left: var(--space-1);
}

.viewport-nav-item__badge--condition {
  background: rgba(239, 68, 68, 0.2);
  color: var(--semantic-error);
}

.viewport-nav-item__badge--medication {
  background: rgba(139, 92, 246, 0.2);
  color: var(--accent-secondary);
}

/* View mode toggle */
.viewport-nav-bar__view-modes {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1);
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-lg);
}

.view-mode-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all var(--duration-fast);
}

.view-mode-btn:hover {
  color: var(--text-primary);
}

.view-mode-btn--active {
  background: var(--accent-primary);
  color: white;
}

/* Collapse handle */
.viewport-nav-bar__handle {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewport-nav-bar__handle::after {
  content: '';
  width: 20px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-full);
}
```

---

## 2. Floating Glass Morphism Toolbars

### Component: `FloatingToolbar`

Translucent floating toolbars that provide contextual tools based on current selection and view mode.

#### Component Structure

```typescript
// /src/navigation/FloatingToolbar.tsx

type ToolbarPosition =
  | 'top-left' | 'top-right' | 'top-center'
  | 'bottom-left' | 'bottom-right' | 'bottom-center'
  | 'left-center' | 'right-center'
  | { x: number; y: number }; // Custom position

interface FloatingToolbarProps {
  /** Unique identifier */
  id: string;

  /** Position in viewport or custom coordinates */
  position: ToolbarPosition;

  /** Toolbar orientation */
  orientation: 'horizontal' | 'vertical';

  /** Tool groups */
  toolGroups: ToolGroup[];

  /** Whether toolbar is visible */
  visible: boolean;

  /** Whether toolbar can be dragged */
  draggable: boolean;

  /** Opacity level (0-1) */
  opacity: number;

  /** Glass blur intensity */
  blurIntensity: 'light' | 'medium' | 'heavy';

  /** Callbacks */
  onToolSelect: (toolId: string, groupId: string) => void;
  onPositionChange?: (position: { x: number; y: number }) => void;
  onVisibilityChange?: (visible: boolean) => void;
}

interface ToolGroup {
  id: string;
  label?: string;
  tools: Tool[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface Tool {
  id: string;
  icon: React.ReactNode | string;
  label: string;
  shortcut?: string;
  active?: boolean;
  disabled?: boolean;
  badge?: number | string;
  tooltip?: string;
  variant?: 'default' | 'primary' | 'danger' | 'success';
}
```

#### CSS Implementation

```css
/* /src/navigation/FloatingToolbar.css */

.floating-toolbar {
  position: absolute;
  z-index: var(--z-toolbar, 200);

  /* Glass morphism - primary effect */
  background: linear-gradient(
    145deg,
    rgba(17, 24, 39, 0.7) 0%,
    rgba(31, 41, 55, 0.6) 100%
  );
  backdrop-filter: blur(var(--toolbar-blur, 16px)) saturate(150%);
  -webkit-backdrop-filter: blur(var(--toolbar-blur, 16px)) saturate(150%);

  /* Border with glow */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);

  /* Soft shadow */
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  /* Animation */
  opacity: 0;
  transform: scale(0.95) translateY(8px);
  transition:
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-spring),
    box-shadow var(--duration-fast);

  /* Pointer events */
  pointer-events: auto;
}

.floating-toolbar--visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.floating-toolbar--dragging {
  cursor: grabbing;
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(59, 130, 246, 0.3);
}

/* Blur intensity variants */
.floating-toolbar--blur-light {
  --toolbar-blur: 8px;
  background: rgba(17, 24, 39, 0.5);
}

.floating-toolbar--blur-medium {
  --toolbar-blur: 16px;
}

.floating-toolbar--blur-heavy {
  --toolbar-blur: 24px;
  background: rgba(17, 24, 39, 0.8);
}

/* Orientation */
.floating-toolbar--horizontal {
  flex-direction: row;
}

.floating-toolbar--vertical {
  flex-direction: column;
}

/* Inner container */
.floating-toolbar__content {
  display: flex;
  padding: var(--space-2);
  gap: var(--space-2);
}

.floating-toolbar--horizontal .floating-toolbar__content {
  flex-direction: row;
  align-items: center;
}

.floating-toolbar--vertical .floating-toolbar__content {
  flex-direction: column;
  align-items: stretch;
}

/* Drag handle */
.floating-toolbar__drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  padding: var(--space-1);
  color: var(--text-tertiary);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast);
}

.floating-toolbar__drag-handle:hover {
  background: rgba(255, 255, 255, 0.05);
}

.floating-toolbar__drag-handle:active {
  cursor: grabbing;
}

.floating-toolbar__drag-handle-icon {
  width: 4px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.floating-toolbar__drag-handle-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}

/* Tool group */
.tool-group {
  display: flex;
  gap: var(--space-1);
}

.floating-toolbar--horizontal .tool-group {
  flex-direction: row;
  align-items: center;
}

.floating-toolbar--vertical .tool-group {
  flex-direction: column;
  align-items: stretch;
}

.tool-group:not(:last-child)::after {
  content: '';
  display: block;
  background: rgba(255, 255, 255, 0.1);
}

.floating-toolbar--horizontal .tool-group:not(:last-child)::after {
  width: 1px;
  height: 24px;
  margin: 0 var(--space-1);
}

.floating-toolbar--vertical .tool-group:not(:last-child)::after {
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
}

/* Tool label (for collapsed groups) */
.tool-group__label {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
}

/* Individual tool button */
.tool-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);

  /* Touch target */
  min-width: 44px;
  min-height: 44px;
}

.tool-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.tool-button:active:not(:disabled) {
  transform: scale(0.95);
}

.tool-button--active {
  background: rgba(59, 130, 246, 0.2);
  color: var(--accent-primary);
}

.tool-button--active::before {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background: var(--accent-primary);
  border-radius: var(--radius-full);
}

.tool-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Tool button variants */
.tool-button--primary:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.15);
  color: var(--accent-primary);
}

.tool-button--danger:hover:not(:disabled) {
  background: rgba(239, 68, 68, 0.15);
  color: var(--semantic-error);
}

.tool-button--success:hover:not(:disabled) {
  background: rgba(34, 197, 94, 0.15);
  color: var(--semantic-success);
}

.tool-button__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Badge on tool */
.tool-button__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: var(--radius-full);
  background: var(--accent-primary);
  color: white;
  font-size: 10px;
  font-weight: var(--font-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tooltip (using native title + custom) */
.tool-button__tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-2) var(--space-3);
  background: var(--bg-elevated);
  border-radius: var(--radius-md);
  font-size: var(--text-xs);
  color: var(--text-primary);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-fast);
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tool-button:hover .tool-button__tooltip {
  opacity: 1;
  visibility: visible;
}

.tool-button__tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--bg-elevated);
}

.tool-button__shortcut {
  color: var(--text-tertiary);
  margin-left: var(--space-2);
  font-family: var(--font-mono);
  font-size: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 4px;
  border-radius: var(--radius-sm);
}

/* Collapse toggle for groups */
.tool-group__collapse-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2);
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tool-group__collapse-toggle:hover {
  color: var(--text-primary);
}

.tool-group__collapse-icon {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-fast);
}

.tool-group--collapsed .tool-group__collapse-icon {
  transform: rotate(-90deg);
}

/* Position presets */
.floating-toolbar--top-left {
  top: var(--space-4);
  left: var(--space-4);
}

.floating-toolbar--top-right {
  top: var(--space-4);
  right: var(--space-4);
}

.floating-toolbar--top-center {
  top: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
}

.floating-toolbar--top-center.floating-toolbar--visible {
  transform: translateX(-50%) scale(1);
}

.floating-toolbar--bottom-left {
  bottom: var(--space-4);
  left: var(--space-4);
}

.floating-toolbar--bottom-right {
  bottom: var(--space-4);
  right: var(--space-4);
}

.floating-toolbar--bottom-center {
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
}

.floating-toolbar--left-center {
  top: 50%;
  left: var(--space-4);
  transform: translateY(-50%);
}

.floating-toolbar--right-center {
  top: 50%;
  right: var(--space-4);
  transform: translateY(-50%);
}

/* Responsive */
@media (max-width: 768px) {
  .floating-toolbar {
    --toolbar-blur: 12px;
  }

  .tool-button {
    width: 44px;
    height: 44px;
  }

  .floating-toolbar__content {
    padding: var(--space-1-5);
    gap: var(--space-1);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .floating-toolbar {
    transition: opacity var(--duration-fast);
  }

  .tool-button {
    transition: none;
  }
}
```

---

## 3. Contextual Region Controls

### Component: `ContextualControls`

Controls that appear near selected anatomy regions, providing relevant actions without obstructing the 3D view.

#### Component Structure

```typescript
// /src/navigation/ContextualControls.tsx

interface ContextualControlsProps {
  /** Currently selected region */
  selectedRegion: SelectedRegion | null;

  /** Screen position of selected region (from 3D projection) */
  screenPosition: { x: number; y: number } | null;

  /** Available actions for this region */
  actions: ContextualAction[];

  /** Health data badges to show */
  healthBadges?: HealthBadge[];

  /** Layout mode */
  layout: 'arc' | 'linear' | 'pill' | 'card';

  /** Distance from target position */
  offsetDistance: number;

  /** Preferred side to appear */
  preferredSide: 'auto' | 'top' | 'bottom' | 'left' | 'right';

  /** Callbacks */
  onAction: (actionId: string) => void;
  onDismiss: () => void;
  onExpand?: () => void;
}

interface SelectedRegion {
  id: string;
  name: string;
  displayName: string;
  system: string;
  layer?: string;
}

interface ContextualAction {
  id: string;
  icon: React.ReactNode;
  label: string;
  shortLabel?: string; // For compact display
  variant?: 'default' | 'primary' | 'info' | 'warning';
  hotkey?: string;
}

interface HealthBadge {
  type: 'condition' | 'medication' | 'symptom' | 'lab';
  count: number;
  severity?: 'normal' | 'attention' | 'urgent';
  label?: string;
}
```

#### CSS Implementation

```css
/* /src/navigation/ContextualControls.css */

.contextual-controls {
  position: absolute;
  z-index: var(--z-contextual, 300);
  pointer-events: none;

  /* Will be positioned via JS based on screenPosition */
}

.contextual-controls--visible {
  pointer-events: auto;
}

/* Connection line to selected region */
.contextual-controls__connector {
  position: absolute;
  pointer-events: none;
  stroke: rgba(59, 130, 246, 0.4);
  stroke-width: 1;
  fill: none;
  stroke-dasharray: 4 4;
  animation: dash-flow 1s linear infinite;
}

@keyframes dash-flow {
  to {
    stroke-dashoffset: -8;
  }
}

/* Arc layout - actions arranged in an arc around selection point */
.contextual-controls--arc {
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
}

.contextual-controls--arc .contextual-action {
  --arc-angle: calc(var(--action-index) * 30deg - 60deg);
  transform:
    rotate(var(--arc-angle))
    translateX(var(--offset-distance, 80px))
    rotate(calc(-1 * var(--arc-angle)));
}

/* Linear layout */
.contextual-controls--linear .contextual-controls__actions {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-2);
  background: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(16px);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Pill layout - compact horizontal */
.contextual-controls--pill .contextual-controls__container {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

  /* Entry animation */
  animation: pill-appear 0.3s var(--ease-spring) forwards;
}

@keyframes pill-appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Card layout - larger with more info */
.contextual-controls--card .contextual-controls__container {
  width: 280px;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  animation: card-appear 0.35s var(--ease-spring) forwards;
}

@keyframes card-appear {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card header */
.contextual-controls__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.contextual-controls__region-name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin: 0;
}

.contextual-controls__system-badge {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  padding: var(--space-1) var(--space-2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
}

.contextual-controls__close {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
}

.contextual-controls__close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

/* Health badges */
.contextual-controls__health-badges {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow-x: auto;
  scrollbar-width: none;
}

.health-badge {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  white-space: nowrap;
  flex-shrink: 0;
}

.health-badge--condition {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.health-badge--condition.health-badge--urgent {
  background: rgba(239, 68, 68, 0.25);
  border-color: rgba(239, 68, 68, 0.4);
  animation: pulse-urgent 2s ease-in-out infinite;
}

@keyframes pulse-urgent {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.health-badge--medication {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.health-badge--symptom {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.health-badge--lab {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.health-badge__icon {
  width: 12px;
  height: 12px;
}

.health-badge__count {
  font-weight: var(--font-semibold);
}

/* Actions area */
.contextual-controls__actions {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  flex-wrap: wrap;
}

.contextual-controls--pill .contextual-controls__actions {
  padding: 0;
  gap: var(--space-1);
}

/* Individual action button */
.contextual-action {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);

  /* Touch target */
  min-height: 44px;
}

.contextual-action:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text-primary);
  transform: translateY(-1px);
}

.contextual-action:active {
  transform: translateY(0);
}

.contextual-action--primary {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15));
  border-color: rgba(59, 130, 246, 0.3);
  color: var(--accent-primary);
}

.contextual-action--primary:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.25));
  border-color: rgba(59, 130, 246, 0.5);
}

.contextual-action--info {
  background: rgba(6, 182, 212, 0.15);
  border-color: rgba(6, 182, 212, 0.2);
  color: #22d3ee;
}

.contextual-action--warning {
  background: rgba(251, 191, 36, 0.15);
  border-color: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
}

.contextual-action__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Compact pill actions */
.contextual-controls--pill .contextual-action {
  padding: var(--space-1-5) var(--space-2);
  border-radius: var(--radius-full);
  min-height: 36px;
  gap: var(--space-1);
}

.contextual-controls--pill .contextual-action__label {
  display: none;
}

@media (min-width: 480px) {
  .contextual-controls--pill .contextual-action__label {
    display: inline;
    font-size: var(--text-xs);
  }
}

/* Expand button */
.contextual-controls__expand {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
  margin-left: var(--space-1);
}

.contextual-controls__expand:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

/* Position calculations based on preferredSide */
.contextual-controls--side-top {
  transform: translate(-50%, calc(-100% - var(--offset-distance, 20px)));
}

.contextual-controls--side-bottom {
  transform: translate(-50%, var(--offset-distance, 20px));
}

.contextual-controls--side-left {
  transform: translate(calc(-100% - var(--offset-distance, 20px)), -50%);
}

.contextual-controls--side-right {
  transform: translate(var(--offset-distance, 20px), -50%);
}

/* Responsive */
@media (max-width: 480px) {
  .contextual-controls--card .contextual-controls__container {
    width: calc(100vw - var(--space-8));
    max-width: 320px;
  }

  .contextual-controls__actions {
    padding: var(--space-2) var(--space-3);
    gap: var(--space-1);
  }

  .contextual-action {
    flex: 1;
    min-width: calc(50% - var(--space-1));
    justify-content: center;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .contextual-controls__connector {
    animation: none;
  }

  .contextual-controls--pill .contextual-controls__container,
  .contextual-controls--card .contextual-controls__container {
    animation: none;
  }

  .health-badge--urgent {
    animation: none;
  }
}
```

---

## 4. Breadcrumb Navigation for Anatomy Hierarchy

### Component: `AnatomyBreadcrumb`

A breadcrumb navigation system that shows the current position in the anatomy hierarchy, allowing users to drill down or navigate up.

#### Component Structure

```typescript
// /src/navigation/AnatomyBreadcrumb.tsx

interface AnatomyBreadcrumbProps {
  /** Current navigation path */
  path: BreadcrumbNode[];

  /** Maximum visible items before collapsing */
  maxVisibleItems: number;

  /** Show icons for each item */
  showIcons: boolean;

  /** Show layer indicator */
  showLayerIndicator: boolean;

  /** Current active layer */
  activeLayer?: string;

  /** Callbacks */
  onNavigate: (nodeId: string, index: number) => void;
  onLayerChange?: (layerId: string) => void;
  onShowDropdown?: (nodeId: string) => void;
}

interface BreadcrumbNode {
  id: string;
  label: string;
  shortLabel?: string; // For compact display
  icon?: React.ReactNode;
  type: 'root' | 'system' | 'region' | 'subregion' | 'organ' | 'structure';

  /** Sibling items for dropdown navigation */
  siblings?: BreadcrumbSibling[];

  /** Child count indicator */
  childCount?: number;

  /** Health data indicator */
  hasHealthData?: boolean;
}

interface BreadcrumbSibling {
  id: string;
  label: string;
  icon?: React.ReactNode;
  hasHealthData?: boolean;
}
```

#### CSS Implementation

```css
/* /src/navigation/AnatomyBreadcrumb.css */

.anatomy-breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  max-width: 100%;
}

/* Scrollable on small screens */
.anatomy-breadcrumb__list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  flex: 1;
}

.anatomy-breadcrumb__list::-webkit-scrollbar {
  display: none;
}

/* Collapsed indicator */
.anatomy-breadcrumb__collapsed {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  color: var(--text-tertiary);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--duration-fast);
}

.anatomy-breadcrumb__collapsed:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
}

.anatomy-breadcrumb__collapsed-icon {
  width: 16px;
  height: 16px;
}

/* Breadcrumb item */
.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  position: relative;
  flex-shrink: 0;
}

/* Separator */
.breadcrumb-item__separator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.breadcrumb-item__separator svg {
  width: 14px;
  height: 14px;
}

/* Item button */
.breadcrumb-item__button {
  display: flex;
  align-items: center;
  gap: var(--space-1-5);
  padding: var(--space-1-5) var(--space-2);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--duration-fast);
  white-space: nowrap;

  /* Touch target */
  min-height: 32px;
}

.breadcrumb-item__button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

/* Current/last item */
.breadcrumb-item--current .breadcrumb-item__button {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.2);
  color: var(--accent-primary);
  cursor: default;
}

.breadcrumb-item--current .breadcrumb-item__button:hover {
  background: rgba(59, 130, 246, 0.15);
}

/* Item icon */
.breadcrumb-item__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  opacity: 0.7;
}

.breadcrumb-item--current .breadcrumb-item__icon {
  opacity: 1;
}

/* Item label */
.breadcrumb-item__label {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Health indicator dot */
.breadcrumb-item__health-indicator {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--semantic-error);
  flex-shrink: 0;
}

/* Dropdown toggle */
.breadcrumb-item__dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm);
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all var(--duration-fast);
  margin-left: var(--space-0-5);
}

.breadcrumb-item__dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.breadcrumb-item__dropdown-toggle--open {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.breadcrumb-item__dropdown-toggle svg {
  width: 12px;
  height: 12px;
  transition: transform var(--duration-fast);
}

.breadcrumb-item__dropdown-toggle--open svg {
  transform: rotate(180deg);
}

/* Dropdown menu */
.breadcrumb-dropdown {
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 0;
  min-width: 200px;
  max-height: 300px;
  overflow-y: auto;
  background: rgba(17, 24, 39, 0.98);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: var(--z-dropdown, 400);

  /* Animation */
  opacity: 0;
  transform: translateY(-8px);
  visibility: hidden;
  transition: all var(--duration-fast) var(--ease-out);
}

.breadcrumb-dropdown--open {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.breadcrumb-dropdown__header {
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.breadcrumb-dropdown__list {
  padding: var(--space-1);
}

.breadcrumb-dropdown__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-2) var(--space-3);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  text-align: left;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.breadcrumb-dropdown__item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

.breadcrumb-dropdown__item--current {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-primary);
}

.breadcrumb-dropdown__item-icon {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.breadcrumb-dropdown__item-label {
  flex: 1;
}

.breadcrumb-dropdown__item-health {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--semantic-error);
}

/* Layer indicator */
.anatomy-breadcrumb__layer-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-left: var(--space-2);
  margin-left: var(--space-2);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.layer-indicator__label {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  text-transform: uppercase;
}

.layer-indicator__select {
  padding: var(--space-1) var(--space-2);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--text-xs);
  cursor: pointer;
  transition: all var(--duration-fast);
}

.layer-indicator__select:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 640px) {
  .anatomy-breadcrumb {
    padding: var(--space-1-5) var(--space-2);
  }

  .breadcrumb-item__button {
    padding: var(--space-1) var(--space-1-5);
    font-size: var(--text-xs);
  }

  .breadcrumb-item__label {
    max-width: 80px;
  }

  /* Hide icons on mobile */
  .breadcrumb-item__icon {
    display: none;
  }

  .anatomy-breadcrumb__layer-indicator {
    display: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .breadcrumb-dropdown {
    transition: opacity var(--duration-fast);
  }
}
```

---

## 5. Gesture-Based Navigation System

### Component: `GestureNavigationProvider`

A provider component that wraps the 3D viewer and handles gesture-based navigation including pinch, rotate, and swipe gestures.

#### Component Structure

```typescript
// /src/navigation/GestureNavigationProvider.tsx

interface GestureNavigationProviderProps {
  children: React.ReactNode;

  /** Enable/disable specific gestures */
  enabledGestures: {
    pinchZoom: boolean;
    twoFingerRotate: boolean;
    swipeNavigation: boolean;
    doubleTapZoom: boolean;
    longPress: boolean;
    threeFingerSwipe: boolean;
  };

  /** Sensitivity settings */
  sensitivity: {
    pinch: number; // 0.1 - 2.0
    rotate: number;
    swipe: number;
  };

  /** Callbacks */
  onZoom: (scale: number, center: Point) => void;
  onRotate: (angle: number, center: Point) => void;
  onPan: (delta: Point) => void;
  onSwipe: (direction: SwipeDirection, velocity: number) => void;
  onDoubleTap: (position: Point) => void;
  onLongPress: (position: Point) => void;
  onThreeFingerSwipe: (direction: 'left' | 'right' | 'up' | 'down') => void;

  /** Optional gesture feedback */
  showGestureFeedback?: boolean;
}

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

interface Point {
  x: number;
  y: number;
}

interface GestureState {
  isGesturing: boolean;
  gestureType: 'none' | 'pinch' | 'rotate' | 'pan' | 'swipe';
  startPosition: Point | null;
  currentPosition: Point | null;
  scale: number;
  rotation: number;
  velocity: Point;
}

// Hook for consuming gesture state
function useGestureNavigation(): {
  gestureState: GestureState;
  isZooming: boolean;
  isRotating: boolean;
  isPanning: boolean;
  currentZoom: number;
  currentRotation: number;
}
```

#### CSS for Gesture Feedback Overlay

```css
/* /src/navigation/GestureNavigation.css */

.gesture-feedback-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-gesture-feedback, 9999);
  pointer-events: none;
  overflow: hidden;
}

/* Pinch feedback */
.gesture-feedback__pinch {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  opacity: 0;
  transition: opacity var(--duration-fast);
}

.gesture-feedback__pinch--active {
  opacity: 1;
}

.pinch-indicator {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(59, 130, 246, 0.3);
  border: 2px solid var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Pulse animation */
  animation: pinch-pulse 0.5s ease-out infinite;
}

@keyframes pinch-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.pinch-indicator__icon {
  width: 24px;
  height: 24px;
  color: var(--accent-primary);
}

.pinch-line {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-primary),
    transparent
  );
  transition: width var(--duration-fast);
}

/* Rotate feedback */
.gesture-feedback__rotate {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  border: 2px dashed rgba(139, 92, 246, 0.5);
  opacity: 0;
  transition: opacity var(--duration-fast), transform var(--duration-fast);
}

.gesture-feedback__rotate--active {
  opacity: 1;
  animation: rotate-indicator 2s linear infinite;
}

@keyframes rotate-indicator {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.rotate-indicator__arrow {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  color: var(--accent-secondary);
}

.rotate-indicator__center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  background: var(--accent-secondary);
}

/* Swipe feedback */
.gesture-feedback__swipe {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--duration-fast);
}

.gesture-feedback__swipe--active {
  opacity: 1;
}

.swipe-trail {
  position: absolute;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-primary) 30%,
    var(--accent-primary) 70%,
    transparent
  );
  border-radius: var(--radius-full);
  transform-origin: left center;
  animation: swipe-trail 0.3s ease-out forwards;
}

@keyframes swipe-trail {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100px;
    opacity: 0;
  }
}

.swipe-arrow {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(59, 130, 246, 0.2);
  border: 2px solid var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: swipe-bounce 0.3s ease-out;
}

@keyframes swipe-bounce {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.swipe-arrow__icon {
  width: 24px;
  height: 24px;
  color: var(--accent-primary);
}

/* Swipe direction variants */
.swipe-arrow--left {
  animation-name: swipe-left;
}

@keyframes swipe-left {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.swipe-arrow--right {
  animation-name: swipe-right;
}

@keyframes swipe-right {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Double tap feedback */
.gesture-feedback__double-tap {
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background: rgba(59, 130, 246, 0.2);
  border: 2px solid var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.gesture-feedback__double-tap--active {
  animation: double-tap-ripple 0.5s ease-out forwards;
}

@keyframes double-tap-ripple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

/* Long press feedback */
.gesture-feedback__long-press {
  position: absolute;
  transform: translate(-50%, -50%);
}

.long-press-ring {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  border: 3px solid transparent;
  border-top-color: var(--accent-primary);
  animation: long-press-spin 1s linear infinite;
}

@keyframes long-press-spin {
  to {
    transform: rotate(360deg);
  }
}

.long-press-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
}

.long-press-progress circle {
  fill: none;
  stroke: var(--accent-primary);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  transform: rotate(-90deg);
  transform-origin: center;
  animation: long-press-fill 0.5s ease-out forwards;
}

@keyframes long-press-fill {
  to {
    stroke-dashoffset: 0;
  }
}

/* Zoom level indicator */
.gesture-feedback__zoom-level {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-2) var(--space-4);
  background: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  opacity: 0;
  transition: opacity var(--duration-fast);
  pointer-events: none;
}

.gesture-feedback__zoom-level--visible {
  opacity: 1;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gesture-feedback-overlay * {
    animation: none !important;
    transition: opacity var(--duration-fast) !important;
  }
}
```

---

## 6. Quick Access Radial Menu

### Component: `RadialMenu`

A radial/pie menu that appears on long press or right-click, providing quick access to common actions.

#### Component Structure

```typescript
// /src/navigation/RadialMenu.tsx

interface RadialMenuProps {
  /** Menu items arranged radially */
  items: RadialMenuItem[];

  /** Position where menu should appear */
  position: { x: number; y: number };

  /** Whether menu is open */
  isOpen: boolean;

  /** Radius of the menu */
  radius: number;

  /** Starting angle (degrees, 0 = right) */
  startAngle: number;

  /** Total arc span (degrees) */
  arcSpan: number;

  /** Show center button */
  showCenterButton: boolean;

  /** Center button config */
  centerButton?: {
    icon: React.ReactNode;
    label: string;
    action: string;
  };

  /** Currently hovered item */
  hoveredItem: string | null;

  /** Callbacks */
  onItemSelect: (itemId: string) => void;
  onItemHover: (itemId: string | null) => void;
  onClose: () => void;
}

interface RadialMenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'danger' | 'success';
  badge?: number;

  /** Sub-items for nested radial menu */
  subItems?: RadialMenuItem[];
}
```

#### CSS Implementation

```css
/* /src/navigation/RadialMenu.css */

.radial-menu {
  position: fixed;
  z-index: var(--z-radial-menu, 1000);
  pointer-events: none;

  /* Will be positioned via inline styles */
}

.radial-menu--open {
  pointer-events: auto;
}

/* Backdrop */
.radial-menu__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.radial-menu--open .radial-menu__backdrop {
  opacity: 1;
}

/* Container */
.radial-menu__container {
  position: absolute;
  transform: translate(-50%, -50%);
}

/* Center point indicator */
.radial-menu__center-point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background: var(--accent-primary);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  z-index: 2;

  /* Pulse effect */
  animation: center-pulse 1.5s ease-in-out infinite;
}

@keyframes center-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
  }
}

/* Center button */
.radial-menu__center-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(16px);
  border: 2px solid rgba(59, 130, 246, 0.3);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-0-5);
  z-index: 2;
  transition: all var(--duration-fast) var(--ease-out);

  /* Entry animation */
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

.radial-menu--open .radial-menu__center-button {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  transition-delay: 0.1s;
}

.radial-menu__center-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--accent-primary);
}

.radial-menu__center-button-icon {
  width: 24px;
  height: 24px;
}

.radial-menu__center-button-label {
  font-size: 10px;
  font-weight: var(--font-medium);
  color: var(--text-secondary);
}

/* Radial item - positioned via transform */
.radial-menu-item {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Size */
  width: 56px;
  height: 56px;
  margin: -28px 0 0 -28px; /* Center the item */

  /* Style */
  border-radius: var(--radius-full);
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-spring);

  /* Entry animation - staggered */
  opacity: 0;
  transform: translate(var(--item-x), var(--item-y)) scale(0);
}

.radial-menu--open .radial-menu-item {
  opacity: 1;
  transform: translate(var(--item-x), var(--item-y)) scale(1);
}

/* Stagger animation */
.radial-menu-item:nth-child(1) { transition-delay: 0.05s; }
.radial-menu-item:nth-child(2) { transition-delay: 0.1s; }
.radial-menu-item:nth-child(3) { transition-delay: 0.15s; }
.radial-menu-item:nth-child(4) { transition-delay: 0.2s; }
.radial-menu-item:nth-child(5) { transition-delay: 0.25s; }
.radial-menu-item:nth-child(6) { transition-delay: 0.3s; }
.radial-menu-item:nth-child(7) { transition-delay: 0.35s; }
.radial-menu-item:nth-child(8) { transition-delay: 0.4s; }

/* Hover state */
.radial-menu-item:hover:not(.radial-menu-item--disabled),
.radial-menu-item--hovered {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--accent-primary);
  transform: translate(var(--item-x), var(--item-y)) scale(1.15);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.4),
    0 0 0 4px rgba(59, 130, 246, 0.2);
}

/* Disabled state */
.radial-menu-item--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Variants */
.radial-menu-item--primary {
  border-color: rgba(59, 130, 246, 0.3);
}

.radial-menu-item--primary:hover:not(.radial-menu-item--disabled) {
  background: rgba(59, 130, 246, 0.3);
}

.radial-menu-item--danger {
  border-color: rgba(239, 68, 68, 0.3);
}

.radial-menu-item--danger:hover:not(.radial-menu-item--disabled) {
  background: rgba(239, 68, 68, 0.2);
  border-color: var(--semantic-error);
}

.radial-menu-item--success {
  border-color: rgba(34, 197, 94, 0.3);
}

.radial-menu-item--success:hover:not(.radial-menu-item--disabled) {
  background: rgba(34, 197, 94, 0.2);
  border-color: var(--semantic-success);
}

/* Item icon */
.radial-menu-item__icon {
  width: 24px;
  height: 24px;
  color: var(--text-secondary);
  transition: color var(--duration-fast);
}

.radial-menu-item:hover:not(.radial-menu-item--disabled) .radial-menu-item__icon,
.radial-menu-item--hovered .radial-menu-item__icon {
  color: var(--text-primary);
}

.radial-menu-item--primary .radial-menu-item__icon {
  color: var(--accent-primary);
}

.radial-menu-item--danger .radial-menu-item__icon {
  color: var(--semantic-error);
}

.radial-menu-item--success .radial-menu-item__icon {
  color: var(--semantic-success);
}

/* Badge */
.radial-menu-item__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: var(--radius-full);
  background: var(--semantic-error);
  color: white;
  font-size: 10px;
  font-weight: var(--font-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Label - appears on hover */
.radial-menu-item__label {
  position: absolute;
  white-space: nowrap;
  padding: var(--space-1) var(--space-2);
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  opacity: 0;
  transform: scale(0.9);
  transition: all var(--duration-fast);
  pointer-events: none;

  /* Position based on item angle */
  --label-offset: 40px;
}

.radial-menu-item:hover .radial-menu-item__label,
.radial-menu-item--hovered .radial-menu-item__label {
  opacity: 1;
  transform: scale(1);
}

/* Label positioning based on quadrant */
.radial-menu-item[data-quadrant="right"] .radial-menu-item__label {
  left: calc(100% + var(--space-2));
  top: 50%;
  transform: translateY(-50%) scale(0.9);
}

.radial-menu-item[data-quadrant="right"]:hover .radial-menu-item__label {
  transform: translateY(-50%) scale(1);
}

.radial-menu-item[data-quadrant="left"] .radial-menu-item__label {
  right: calc(100% + var(--space-2));
  top: 50%;
  transform: translateY(-50%) scale(0.9);
}

.radial-menu-item[data-quadrant="left"]:hover .radial-menu-item__label {
  transform: translateY(-50%) scale(1);
}

.radial-menu-item[data-quadrant="top"] .radial-menu-item__label {
  bottom: calc(100% + var(--space-2));
  left: 50%;
  transform: translateX(-50%) scale(0.9);
}

.radial-menu-item[data-quadrant="top"]:hover .radial-menu-item__label {
  transform: translateX(-50%) scale(1);
}

.radial-menu-item[data-quadrant="bottom"] .radial-menu-item__label {
  top: calc(100% + var(--space-2));
  left: 50%;
  transform: translateX(-50%) scale(0.9);
}

.radial-menu-item[data-quadrant="bottom"]:hover .radial-menu-item__label {
  transform: translateX(-50%) scale(1);
}

/* Shortcut indicator */
.radial-menu-item__shortcut {
  margin-left: var(--space-2);
  padding: 2px 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-tertiary);
}

/* Connection lines (optional visual) */
.radial-menu__connections {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.radial-menu__connection-line {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(59, 130, 246, 0.3),
    rgba(59, 130, 246, 0.1)
  );
  transform-origin: left center;
  opacity: 0;
  transition: opacity var(--duration-fast);
}

.radial-menu--open .radial-menu__connection-line {
  opacity: 1;
}

/* Sub-menu indicator */
.radial-menu-item--has-submenu::after {
  content: '';
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 6px;
  height: 6px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 480px) {
  .radial-menu-item {
    width: 52px;
    height: 52px;
    margin: -26px 0 0 -26px;
  }

  .radial-menu-item__icon {
    width: 22px;
    height: 22px;
  }

  .radial-menu__center-button {
    width: 56px;
    height: 56px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .radial-menu-item,
  .radial-menu__center-button,
  .radial-menu__backdrop {
    transition: opacity var(--duration-fast);
  }

  .radial-menu-item {
    transition-delay: 0s !important;
  }

  .radial-menu__center-point {
    animation: none;
  }
}
```

---

## Integration Architecture

### Navigation Context Provider

```typescript
// /src/navigation/NavigationContext.tsx

interface NavigationContextValue {
  // Current state
  currentPath: BreadcrumbNode[];
  selectedRegion: SelectedRegion | null;
  activeLayer: string | null;
  viewMode: ViewMode;

  // Gesture state
  gestureState: GestureState;

  // UI state
  isRadialMenuOpen: boolean;
  radialMenuPosition: Point | null;
  contextualControlsVisible: boolean;

  // Navigation actions
  navigateTo: (nodeId: string) => void;
  navigateBack: () => void;
  selectRegion: (region: SelectedRegion) => void;
  deselectRegion: () => void;
  setActiveLayer: (layerId: string) => void;
  setViewMode: (mode: ViewMode) => void;

  // Menu actions
  openRadialMenu: (position: Point) => void;
  closeRadialMenu: () => void;

  // 3D viewport integration
  projectToScreen: (worldPosition: Vector3) => Point;
  screenToWorld: (screenPosition: Point) => Vector3;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  // Implementation with all state management and callbacks
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
```

### CSS Design Tokens

```css
/* /src/navigation/navigation-tokens.css */

:root {
  /* Z-index layers */
  --z-navigation: 100;
  --z-toolbar: 200;
  --z-contextual: 300;
  --z-dropdown: 400;
  --z-radial-menu: 1000;
  --z-gesture-feedback: 9999;

  /* Spacing */
  --space-0-5: 0.125rem;
  --space-1: 0.25rem;
  --space-1-5: 0.375rem;
  --space-2: 0.5rem;
  --space-2-5: 0.625rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;

  /* Colors - Dark theme base */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-elevated: #334155;
  --bg-hover: rgba(255, 255, 255, 0.05);

  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-tertiary: #64748b;

  --border-primary: #334155;
  --border-light: rgba(255, 255, 255, 0.1);

  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;

  --semantic-error: #ef4444;
  --semantic-warning: #f59e0b;
  --semantic-success: #22c55e;
  --semantic-info: #06b6d4;

  /* Glass morphism */
  --glass-bg: rgba(17, 24, 39, 0.8);
  --glass-blur: blur(16px);
  --glass-border: rgba(255, 255, 255, 0.1);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Typography */
  --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', monospace;

  --font-medium: 500;
  --font-semibold: 600;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  /* Viewport */
  --viewport-corner-radius: 24px;
  --safe-area-top: env(safe-area-inset-top);
  --safe-area-bottom: env(safe-area-inset-bottom);
}
```

---

## File Structure

```
/src/navigation/
  index.ts                          # Public exports
  NavigationContext.tsx             # Context provider
  navigation-tokens.css             # Design tokens

  /components/
    ViewportNavigationBar.tsx       # Curved viewport nav
    ViewportNavigationBar.css

    FloatingToolbar.tsx             # Glass morphism toolbar
    FloatingToolbar.css

    ContextualControls.tsx          # Region-aware controls
    ContextualControls.css

    AnatomyBreadcrumb.tsx           # Hierarchy navigation
    AnatomyBreadcrumb.css

    RadialMenu.tsx                  # Quick access radial menu
    RadialMenu.css

  /gestures/
    GestureNavigationProvider.tsx   # Gesture handling
    GestureNavigation.css           # Feedback overlays
    useGestures.ts                  # Gesture hooks

  /hooks/
    useNavigation.ts                # Navigation state hook
    useViewportPosition.ts          # 3D to screen projection
    useRadialMenu.ts                # Radial menu state
    useToolbar.ts                   # Toolbar management

  /utils/
    positionCalculations.ts         # Layout calculations
    gestureRecognition.ts           # Gesture detection
    anatomyHierarchy.ts             # Breadcrumb path helpers
```

---

## Performance Considerations

1. **Lazy Loading**: Load navigation components only when needed
2. **Virtualization**: For long breadcrumb paths, virtualize hidden items
3. **Debounced Gestures**: Debounce gesture callbacks to prevent excessive updates
4. **CSS containment**: Use `contain: layout` on positioned elements
5. **Will-change**: Apply `will-change` sparingly for animated elements
6. **RequestAnimationFrame**: Use rAF for gesture feedback animations
7. **Passive Event Listeners**: Use passive touch listeners where possible

---

## Accessibility Requirements

1. **Keyboard Navigation**: All components must be fully keyboard accessible
2. **Screen Reader Support**: Proper ARIA labels and live regions
3. **Focus Management**: Clear focus indicators and logical focus order
4. **Reduced Motion**: Respect `prefers-reduced-motion` preference
5. **Touch Targets**: Minimum 44x44px touch targets
6. **Color Contrast**: WCAG 2.1 AA compliance for all text
7. **Gesture Alternatives**: All gestures must have non-gesture alternatives

---

## Implementation Priority

1. **Phase 1**: Core navigation (ViewportNavigationBar, AnatomyBreadcrumb)
2. **Phase 2**: Contextual UI (ContextualControls, FloatingToolbar)
3. **Phase 3**: Advanced interactions (GestureNavigation, RadialMenu)
4. **Phase 4**: Polish and optimization

---

This specification provides a comprehensive blueprint for implementing an integrated, gesture-aware navigation system for the SOMA anatomy viewer that prioritizes spatial context, glass morphism aesthetics, and intuitive interaction patterns.
