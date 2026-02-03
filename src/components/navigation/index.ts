/**
 * Navigation Components
 *
 * Unified navigation system for the Biological Self application.
 * Provides integrated navigation components including:
 *
 * - UnifiedNavigation: Main orchestration component integrating all nav elements
 * - FloatingToolbar: Primary actions toolbar with auto-hide and drag support
 * - RadialContextMenu: Circular context menu for right-click/long-press actions
 * - SpatialBreadcrumbs: Location breadcrumb trail with 3D preview support
 * - SmartPanelManager: Auto-positioning panel management
 * - CameraPresetIndicator: Camera view indicator with transitions
 * - KeyboardShortcutsHelp: Keyboard shortcuts reference modal
 *
 * Keyboard shortcuts (handled by UnifiedNavigation):
 * - Space: Reset view
 * - F: Focus on selection
 * - Escape: Close panels/menus
 * - 1-6: Camera presets
 * - H: Toggle UI visibility
 */

// ============================================
// Unified Navigation (Orchestration)
// ============================================

export {
  UnifiedNavigation,
  UnifiedNavigationProvider,
  useUnifiedNavigation,
} from './UnifiedNavigation';

export type {
  UnifiedNavigationProps,
  UnifiedNavigationProviderProps,
  UnifiedNavigationState,
  NavigationMode,
  NavigationLocation,
  CameraPreset,
  PanelConfig,
  PanelPosition,
  ToolbarAction,
  BreadcrumbItem as UnifiedBreadcrumbItem,
} from './UnifiedNavigation';

// Sub-components from UnifiedNavigation
export {
  SmartPanelManager,
  NavigationContextMenu,
  CameraPresetIndicator,
  KeyboardShortcutsHelp,
} from './UnifiedNavigation';

export type {
  SmartPanelManagerProps,
  NavigationContextMenuProps,
  CameraPresetIndicatorProps,
  KeyboardShortcutsHelpProps,
} from './UnifiedNavigation';

// ============================================
// Floating Toolbar
// ============================================

export { FloatingToolbar } from './FloatingToolbar';
export type {
  FloatingToolbarProps,
  ToolbarItem,
  ToolbarSection,
  ToolbarPosition,
} from './FloatingToolbar';

// ============================================
// Radial Context Menu
// ============================================

export { RadialContextMenu, useLongPress, DEFAULT_MENU_ITEMS } from './RadialContextMenu';
export type {
  RadialContextMenuProps,
  RadialMenuItem,
  RadialMenuAction,
} from './RadialContextMenu';

// ============================================
// Spatial Breadcrumbs
// ============================================

export { SpatialBreadcrumbs } from './SpatialBreadcrumbs';
export type {
  SpatialBreadcrumbsProps,
  BreadcrumbItem,
} from './SpatialBreadcrumbs';

// ============================================
// Re-exports from related modules
// ============================================

// Camera controls (from anatomy module)
export {
  EnhancedCameraControls,
  useCameraControls,
  ANATOMICAL_VIEW_PRESETS,
} from '../../anatomy/EnhancedCameraControls';
export type {
  ViewPreset,
  AnimationMode,
} from '../../anatomy/EnhancedCameraControls';
