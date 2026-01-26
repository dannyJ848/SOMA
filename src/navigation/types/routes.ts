/**
 * Route Definitions
 *
 * Central route configuration for the Biological Self application.
 * Defines all navigable routes, their metadata, and navigation parameters.
 */

// ============================================
// Route Identifiers
// ============================================

/**
 * Main route identifiers for the application
 */
export type RouteId =
  | 'home'
  | 'dashboard'
  | 'body'
  | 'body-region'
  | 'systems'
  | 'system-detail'
  | 'symptoms'
  | 'symptom-detail'
  | 'medications'
  | 'medication-detail'
  | 'conditions'
  | 'condition-detail'
  | 'labs'
  | 'lab-detail'
  | 'encyclopedia'
  | 'encyclopedia-entry'
  | 'chat'
  | 'settings'
  | 'settings-section'
  | 'search'
  | 'search-results'
  | 'profile'
  | 'notifications'
  | 'help'
  | 'not-found';

/**
 * Body system identifiers
 */
export type BodySystemId =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'endocrine'
  | 'immune'
  | 'urinary'
  | 'reproductive'
  | 'integumentary'
  | 'lymphatic';

/**
 * Body region identifiers
 */
export type BodyRegionId =
  | 'head'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'pelvis'
  | 'upper-extremity'
  | 'lower-extremity'
  | 'back'
  | 'spine';

/**
 * Settings section identifiers
 */
export type SettingsSectionId =
  | 'appearance'
  | 'language'
  | 'privacy'
  | 'notifications'
  | 'accessibility'
  | 'health-profile'
  | 'data-management'
  | 'about';

// ============================================
// Route Parameters
// ============================================

/**
 * Route parameter types for parameterized routes
 */
export interface RouteParams {
  'body-region': { regionId: BodyRegionId; structureId?: string };
  'system-detail': { systemId: BodySystemId };
  'symptom-detail': { symptomId: string };
  'medication-detail': { medicationId: string };
  'condition-detail': { conditionId: string };
  'lab-detail': { labId: string };
  'encyclopedia-entry': { entryId: string; section?: string };
  'settings-section': { sectionId: SettingsSectionId };
  'search-results': { query: string; category?: string };
}

/**
 * Query parameters that can be passed to routes
 */
export interface RouteQueryParams {
  /** Search query */
  q?: string;
  /** Category filter */
  category?: string;
  /** Tab selection */
  tab?: string;
  /** View mode */
  view?: 'list' | 'grid' | '3d';
  /** Sort order */
  sort?: string;
  /** Filter values */
  filter?: string;
  /** Page number for pagination */
  page?: number;
  /** Highlight specific element */
  highlight?: string;
  /** Scroll to section */
  scrollTo?: string;
  /** Complexity level */
  complexity?: string;
  /** Return URL after action */
  returnUrl?: string;
}

// ============================================
// Route Configuration
// ============================================

/**
 * Route metadata and configuration
 */
export interface RouteConfig {
  /** Route identifier */
  id: RouteId;
  /** URL path pattern */
  path: string;
  /** Display title */
  title: string;
  /** Short title for breadcrumbs */
  shortTitle?: string;
  /** Route description */
  description?: string;
  /** Icon identifier */
  icon?: string;
  /** Parent route for hierarchy */
  parent?: RouteId;
  /** Whether this route requires authentication */
  requiresAuth?: boolean;
  /** Whether to show in main navigation */
  showInNav?: boolean;
  /** Navigation group */
  navGroup?: 'main' | 'secondary' | 'settings' | 'hidden';
  /** Tab bar position (for TabNav) */
  tabIndex?: number;
  /** Side nav position */
  sideNavIndex?: number;
  /** Bottom nav position (for mobile) */
  bottomNavIndex?: number;
  /** Whether this route is indexable */
  indexable?: boolean;
  /** Keywords for search */
  keywords?: string[];
  /** Route-specific meta tags */
  meta?: Record<string, string>;
}

/**
 * Complete route definitions
 */
export const ROUTES: Record<RouteId, RouteConfig> = {
  home: {
    id: 'home',
    path: '/',
    title: 'Home',
    shortTitle: 'Home',
    description: 'Your personal health dashboard',
    icon: 'home',
    showInNav: true,
    navGroup: 'main',
    tabIndex: 0,
    bottomNavIndex: 0,
    indexable: true,
    keywords: ['home', 'dashboard', 'overview'],
  },
  dashboard: {
    id: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    shortTitle: 'Dashboard',
    description: 'Health overview and insights',
    icon: 'dashboard',
    showInNav: true,
    navGroup: 'main',
    sideNavIndex: 0,
    indexable: true,
    keywords: ['dashboard', 'overview', 'health summary'],
  },
  body: {
    id: 'body',
    path: '/body',
    title: 'Body',
    shortTitle: 'Body',
    description: 'Interactive 3D anatomy viewer',
    icon: 'body',
    showInNav: true,
    navGroup: 'main',
    tabIndex: 1,
    sideNavIndex: 1,
    bottomNavIndex: 1,
    indexable: true,
    keywords: ['body', 'anatomy', '3d', 'viewer'],
  },
  'body-region': {
    id: 'body-region',
    path: '/body/:regionId',
    title: 'Body Region',
    shortTitle: 'Region',
    description: 'Explore specific body region',
    icon: 'body',
    parent: 'body',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['anatomy', 'region', 'structure'],
  },
  systems: {
    id: 'systems',
    path: '/systems',
    title: 'Body Systems',
    shortTitle: 'Systems',
    description: 'Explore body systems',
    icon: 'systems',
    showInNav: true,
    navGroup: 'main',
    tabIndex: 2,
    sideNavIndex: 2,
    indexable: true,
    keywords: ['systems', 'cardiovascular', 'respiratory', 'nervous'],
  },
  'system-detail': {
    id: 'system-detail',
    path: '/systems/:systemId',
    title: 'System Detail',
    shortTitle: 'System',
    description: 'Detailed view of body system',
    icon: 'systems',
    parent: 'systems',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['system', 'detail', 'anatomy'],
  },
  symptoms: {
    id: 'symptoms',
    path: '/symptoms',
    title: 'Symptoms',
    shortTitle: 'Symptoms',
    description: 'Track and explore symptoms',
    icon: 'symptoms',
    showInNav: true,
    navGroup: 'main',
    sideNavIndex: 3,
    indexable: true,
    keywords: ['symptoms', 'track', 'log', 'health'],
  },
  'symptom-detail': {
    id: 'symptom-detail',
    path: '/symptoms/:symptomId',
    title: 'Symptom Detail',
    shortTitle: 'Symptom',
    description: 'Detailed symptom information',
    icon: 'symptoms',
    parent: 'symptoms',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['symptom', 'detail', 'causes', 'treatment'],
  },
  medications: {
    id: 'medications',
    path: '/medications',
    title: 'Medications',
    shortTitle: 'Meds',
    description: 'Medication tracker and information',
    icon: 'medications',
    showInNav: true,
    navGroup: 'main',
    sideNavIndex: 4,
    indexable: true,
    keywords: ['medications', 'drugs', 'prescriptions', 'tracker'],
  },
  'medication-detail': {
    id: 'medication-detail',
    path: '/medications/:medicationId',
    title: 'Medication Detail',
    shortTitle: 'Medication',
    description: 'Detailed medication information',
    icon: 'medications',
    parent: 'medications',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['medication', 'drug', 'dosage', 'interactions'],
  },
  conditions: {
    id: 'conditions',
    path: '/conditions',
    title: 'Conditions',
    shortTitle: 'Conditions',
    description: 'Medical conditions and diseases',
    icon: 'conditions',
    showInNav: true,
    navGroup: 'main',
    sideNavIndex: 5,
    indexable: true,
    keywords: ['conditions', 'diseases', 'diagnoses', 'health'],
  },
  'condition-detail': {
    id: 'condition-detail',
    path: '/conditions/:conditionId',
    title: 'Condition Detail',
    shortTitle: 'Condition',
    description: 'Detailed condition information',
    icon: 'conditions',
    parent: 'conditions',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['condition', 'disease', 'symptoms', 'treatment'],
  },
  labs: {
    id: 'labs',
    path: '/labs',
    title: 'Lab Results',
    shortTitle: 'Labs',
    description: 'Laboratory test results',
    icon: 'labs',
    showInNav: true,
    navGroup: 'main',
    sideNavIndex: 6,
    indexable: true,
    keywords: ['labs', 'tests', 'blood work', 'results'],
  },
  'lab-detail': {
    id: 'lab-detail',
    path: '/labs/:labId',
    title: 'Lab Detail',
    shortTitle: 'Lab',
    description: 'Detailed lab result information',
    icon: 'labs',
    parent: 'labs',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['lab', 'test', 'result', 'reference range'],
  },
  encyclopedia: {
    id: 'encyclopedia',
    path: '/encyclopedia',
    title: 'Medical Encyclopedia',
    shortTitle: 'Encyclopedia',
    description: 'Comprehensive medical reference',
    icon: 'encyclopedia',
    showInNav: true,
    navGroup: 'main',
    tabIndex: 3,
    sideNavIndex: 7,
    bottomNavIndex: 2,
    indexable: true,
    keywords: ['encyclopedia', 'reference', 'learn', 'medical'],
  },
  'encyclopedia-entry': {
    id: 'encyclopedia-entry',
    path: '/encyclopedia/:entryId',
    title: 'Encyclopedia Entry',
    shortTitle: 'Entry',
    description: 'Medical encyclopedia article',
    icon: 'encyclopedia',
    parent: 'encyclopedia',
    showInNav: false,
    navGroup: 'hidden',
    indexable: true,
    keywords: ['article', 'entry', 'learn', 'medical'],
  },
  chat: {
    id: 'chat',
    path: '/chat',
    title: 'AI Assistant',
    shortTitle: 'Chat',
    description: 'Chat with AI health assistant',
    icon: 'chat',
    showInNav: true,
    navGroup: 'main',
    tabIndex: 4,
    sideNavIndex: 8,
    bottomNavIndex: 3,
    indexable: true,
    keywords: ['chat', 'ai', 'assistant', 'questions'],
  },
  settings: {
    id: 'settings',
    path: '/settings',
    title: 'Settings',
    shortTitle: 'Settings',
    description: 'App settings and preferences',
    icon: 'settings',
    showInNav: true,
    navGroup: 'settings',
    bottomNavIndex: 4,
    indexable: true,
    keywords: ['settings', 'preferences', 'options', 'configuration'],
  },
  'settings-section': {
    id: 'settings-section',
    path: '/settings/:sectionId',
    title: 'Settings Section',
    shortTitle: 'Settings',
    description: 'Specific settings section',
    icon: 'settings',
    parent: 'settings',
    showInNav: false,
    navGroup: 'hidden',
    indexable: false,
    keywords: ['settings', 'preferences'],
  },
  search: {
    id: 'search',
    path: '/search',
    title: 'Search',
    shortTitle: 'Search',
    description: 'Search the app',
    icon: 'search',
    showInNav: false,
    navGroup: 'hidden',
    indexable: false,
    keywords: ['search', 'find'],
  },
  'search-results': {
    id: 'search-results',
    path: '/search/results',
    title: 'Search Results',
    shortTitle: 'Results',
    description: 'Search results page',
    icon: 'search',
    parent: 'search',
    showInNav: false,
    navGroup: 'hidden',
    indexable: false,
    keywords: ['search', 'results', 'find'],
  },
  profile: {
    id: 'profile',
    path: '/profile',
    title: 'Profile',
    shortTitle: 'Profile',
    description: 'User profile and health information',
    icon: 'profile',
    showInNav: true,
    navGroup: 'secondary',
    indexable: false,
    keywords: ['profile', 'account', 'user'],
  },
  notifications: {
    id: 'notifications',
    path: '/notifications',
    title: 'Notifications',
    shortTitle: 'Alerts',
    description: 'View notifications and alerts',
    icon: 'notifications',
    showInNav: true,
    navGroup: 'secondary',
    indexable: false,
    keywords: ['notifications', 'alerts', 'messages'],
  },
  help: {
    id: 'help',
    path: '/help',
    title: 'Help & Support',
    shortTitle: 'Help',
    description: 'Get help and support',
    icon: 'help',
    showInNav: true,
    navGroup: 'settings',
    indexable: true,
    keywords: ['help', 'support', 'faq', 'documentation'],
  },
  'not-found': {
    id: 'not-found',
    path: '/404',
    title: 'Page Not Found',
    shortTitle: '404',
    description: 'The requested page was not found',
    icon: 'error',
    showInNav: false,
    navGroup: 'hidden',
    indexable: false,
    keywords: ['404', 'not found', 'error'],
  },
};

// ============================================
// Route Helpers
// ============================================

/**
 * Get routes by navigation group
 */
export function getRoutesByNavGroup(group: RouteConfig['navGroup']): RouteConfig[] {
  return Object.values(ROUTES).filter((route) => route.navGroup === group);
}

/**
 * Get routes for tab navigation
 */
export function getTabRoutes(): RouteConfig[] {
  return Object.values(ROUTES)
    .filter((route) => route.tabIndex !== undefined)
    .sort((a, b) => (a.tabIndex ?? 0) - (b.tabIndex ?? 0));
}

/**
 * Get routes for side navigation
 */
export function getSideNavRoutes(): RouteConfig[] {
  return Object.values(ROUTES)
    .filter((route) => route.sideNavIndex !== undefined)
    .sort((a, b) => (a.sideNavIndex ?? 0) - (b.sideNavIndex ?? 0));
}

/**
 * Get routes for bottom navigation
 */
export function getBottomNavRoutes(): RouteConfig[] {
  return Object.values(ROUTES)
    .filter((route) => route.bottomNavIndex !== undefined)
    .sort((a, b) => (a.bottomNavIndex ?? 0) - (b.bottomNavIndex ?? 0));
}

/**
 * Get route by path
 */
export function getRouteByPath(path: string): RouteConfig | undefined {
  // First try exact match
  const exactMatch = Object.values(ROUTES).find((route) => route.path === path);
  if (exactMatch) return exactMatch;

  // Then try pattern match
  for (const route of Object.values(ROUTES)) {
    const pattern = route.path.replace(/:[^/]+/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(path)) {
      return route;
    }
  }

  return undefined;
}

/**
 * Build path with parameters
 */
export function buildPath<T extends keyof RouteParams>(
  routeId: T,
  params: RouteParams[T],
  query?: RouteQueryParams
): string {
  const route = ROUTES[routeId];
  if (!route) return '/';

  let path = route.path;

  // Replace path parameters
  for (const [key, value] of Object.entries(params)) {
    path = path.replace(`:${key}`, String(value));
  }

  // Add query parameters
  if (query && Object.keys(query).length > 0) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, String(value));
      }
    }
    path += `?${searchParams.toString()}`;
  }

  return path;
}

/**
 * Parse path to extract route and parameters
 */
export function parsePath(path: string): {
  route: RouteConfig;
  params: Record<string, string>;
  query: RouteQueryParams;
} | null {
  // Split path and query
  const [pathname, queryString] = path.split('?');

  // Parse query parameters
  const query: RouteQueryParams = {};
  if (queryString) {
    const searchParams = new URLSearchParams(queryString);
    searchParams.forEach((value, key) => {
      (query as Record<string, string>)[key] = value;
    });
  }

  // Find matching route
  for (const route of Object.values(ROUTES)) {
    const paramNames: string[] = [];
    const pattern = route.path.replace(/:([^/]+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    });

    const regex = new RegExp(`^${pattern}$`);
    const match = pathname.match(regex);

    if (match) {
      const params: Record<string, string> = {};
      paramNames.forEach((name, index) => {
        params[name] = match[index + 1];
      });

      return { route, params, query };
    }
  }

  return null;
}

/**
 * Get breadcrumb trail for a route
 */
export function getBreadcrumbTrail(routeId: RouteId): RouteConfig[] {
  const trail: RouteConfig[] = [];
  let currentRoute: RouteConfig | undefined = ROUTES[routeId];

  while (currentRoute) {
    trail.unshift(currentRoute);
    currentRoute = currentRoute.parent ? ROUTES[currentRoute.parent] : undefined;
  }

  // Always include home if not already present
  if (trail.length > 0 && trail[0].id !== 'home') {
    trail.unshift(ROUTES.home);
  }

  return trail;
}

// ============================================
// Body System Routes
// ============================================

/**
 * Body system metadata
 */
export const BODY_SYSTEMS: Record<BodySystemId, { name: string; icon: string; color: string }> = {
  cardiovascular: { name: 'Cardiovascular', icon: 'heart', color: '#e74c3c' },
  respiratory: { name: 'Respiratory', icon: 'lungs', color: '#3498db' },
  digestive: { name: 'Digestive', icon: 'stomach', color: '#f39c12' },
  nervous: { name: 'Nervous', icon: 'brain', color: '#9b59b6' },
  musculoskeletal: { name: 'Musculoskeletal', icon: 'bone', color: '#95a5a6' },
  endocrine: { name: 'Endocrine', icon: 'gland', color: '#1abc9c' },
  immune: { name: 'Immune', icon: 'shield', color: '#2ecc71' },
  urinary: { name: 'Urinary', icon: 'kidney', color: '#e67e22' },
  reproductive: { name: 'Reproductive', icon: 'reproductive', color: '#e91e63' },
  integumentary: { name: 'Integumentary', icon: 'skin', color: '#ffb74d' },
  lymphatic: { name: 'Lymphatic', icon: 'lymph', color: '#4caf50' },
};

/**
 * Body region metadata
 */
export const BODY_REGIONS: Record<BodyRegionId, { name: string; icon: string }> = {
  head: { name: 'Head', icon: 'head' },
  neck: { name: 'Neck', icon: 'neck' },
  chest: { name: 'Chest', icon: 'chest' },
  abdomen: { name: 'Abdomen', icon: 'abdomen' },
  pelvis: { name: 'Pelvis', icon: 'pelvis' },
  'upper-extremity': { name: 'Upper Extremity', icon: 'arm' },
  'lower-extremity': { name: 'Lower Extremity', icon: 'leg' },
  back: { name: 'Back', icon: 'back' },
  spine: { name: 'Spine', icon: 'spine' },
};
