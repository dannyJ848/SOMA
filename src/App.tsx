import { useState, useEffect, Suspense, lazy, useCallback, useRef } from 'react';
import { invoke } from './tauri-invoke';
import { BodyDiagram, getRegionName } from './BodyDiagram';
import { SymptomEntryForm } from './SymptomEntryForm';
import { ChatView } from './ChatView';
import { InsightsPanel } from './InsightsPanel';
import { useActionTracker } from './hooks/useActionTracker';
import { useUserDemographics, DEFAULT_DEMOGRAPHICS } from './hooks/useUserDemographics';
import { useTranslation, useI18n } from './i18n/useI18n';
import { LanguageToggle } from './components/LanguageSwitcher';
import { ViewTransition, getSlideDirection } from './components/ViewTransition';
import './components/ViewTransition.css';
import { UnifiedNavigation, KeyboardShortcutsHelp } from './components/navigation';
import { GlobalSearch } from './search/GlobalSearch';
import { MobileBottomNav } from './components/MobileBottomNav';
import type {
  DashboardAction,
  NavigationAction,
  TimelineAction,
  BodyMapAction,
} from '../core/intent-prediction/types';

// Lazy load heavy components to prevent blocking app startup
const AnatomyViewer = lazy(() => import('./AnatomyViewer').then(m => ({ default: m.AnatomyViewer })));
const SymptomExplorer = lazy(() => import('./SymptomExplorer').then(m => ({ default: m.SymptomExplorer })));
const MedicationExplorer = lazy(() => import('./MedicationExplorer').then(m => ({ default: m.MedicationExplorer })));
const ConditionSimulator = lazy(() => import('./ConditionSimulator'));
const MedicalEncyclopedia = lazy(() => import('./MedicalEncyclopedia').then(m => ({ default: m.MedicalEncyclopedia })));
const EncyclopediaEntry = lazy(() => import('./EncyclopediaEntry').then(m => ({ default: m.EncyclopediaEntry })));

// Body-centric components
const OnboardingFlow = lazy(() => import('./onboarding/OnboardingFlow').then(m => ({ default: m.OnboardingFlow })));
const BodyCentricHome = lazy(() => import('./BodyCentricHome').then(m => ({ default: m.BodyCentricHome })));

// Settings
const SettingsPage = lazy(() => import('./settings/SettingsPage'));

interface HealthSummary {
  totalConditions: number;
  totalMedications: number;
  totalLabResults: number;
  totalWhoopCycles: number;
  totalAppleHealthDays: number;
  lastUpdated: string | null;
}

interface ConditionSummary {
  id: string;
  name: string;
  status: string;
  severity?: string;
  diagnosedDate?: string;
}

interface MedicationSummary {
  id: string;
  name: string;
  dosage?: string;
  frequency?: string;
}

interface LabWithTrend {
  id: string;
  testName: string;
  value: number | string;
  unit?: string;
  status?: string;
  collectedAt: string;
  trend?: 'up' | 'down' | 'stable' | null;
  previousValue?: number | string;
}

interface VitalsSummary {
  restingHeartRate?: number;
  hrv?: number;
  sleepHours?: number;
  recoveryScore?: number;
  steps?: number;
  lastUpdated?: string;
}

interface DashboardData {
  summary: HealthSummary;
  activeConditions: ConditionSummary[];
  currentMedications: MedicationSummary[];
  recentLabs: LabWithTrend[];
  vitalsSummary: VitalsSummary;
  recentSymptoms: Array<{
    id: string;
    description: string;
    severity: number;
    location?: string;
    onsetDate: string;
  }>;
}

type TimelineEventType = 'lab' | 'imaging' | 'condition' | 'medication' | 'surgery' | 'symptom';

interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: string;
  title: string;
  subtitle?: string;
  details?: Record<string, unknown>;
}

interface TimelineData {
  events: TimelineEvent[];
  filters: {
    types: TimelineEventType[];
    startDate?: string;
    endDate?: string;
  };
  totalCount: number;
}

type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'anatomy' | 'symptom-explorer' | 'medication-explorer' | 'condition-simulator' | 'encyclopedia' | 'encyclopedia-entry' | 'body-centric' | 'settings';

// MobileBottomNav is now imported from ./components/MobileBottomNav


function App() {
  const { t } = useTranslation('common');
  const { t: tNav } = useTranslation('navigation');
  const { t: tDash } = useTranslation('dashboard');
  // DEV MODE: Skip passcode and onboarding for development
  // Set to false to test the full onboarding flow as a new user
  // When true: Bypasses passcode, provides mock dashboard data, and auto-saves default demographics
  const DEV_SKIP_AUTH = true;

  // Mock data for DEV mode to ensure the app renders properly without onboarding
  // Provides realistic sample data so the dashboard looks functional during development
  const DEV_MOCK_DASHBOARD: DashboardData = {
    summary: {
      totalConditions: 4,
      totalMedications: 3,
      totalLabResults: 5,
      totalWhoopCycles: 42,
      totalAppleHealthDays: 90,
      lastUpdated: new Date().toISOString(),
    },
    activeConditions: [
      { id: 'dev-cond-1', name: 'Seasonal Allergies', status: 'active', severity: 'mild', diagnosedDate: '2024-03-15' },
      { id: 'dev-cond-2', name: 'Mild Asthma', status: 'managed', severity: 'moderate', diagnosedDate: '2021-06-01' },
      { id: 'dev-cond-3', name: 'GERD', status: 'active', severity: 'mild', diagnosedDate: '2023-11-20' },
      { id: 'dev-cond-4', name: 'Lower Back Pain', status: 'monitoring', severity: 'moderate', diagnosedDate: '2025-01-10' },
    ],
    currentMedications: [
      { id: 'dev-med-1', name: 'Cetirizine', dosage: '10mg', frequency: 'Daily' },
      { id: 'dev-med-2', name: 'Albuterol Inhaler', dosage: '90mcg', frequency: 'As needed' },
      { id: 'dev-med-3', name: 'Omeprazole', dosage: '20mg', frequency: 'Daily' },
    ],
    recentLabs: [
      { id: 'dev-lab-1', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', collectedAt: '2025-12-15', trend: 'stable', previousValue: 5.5 },
      { id: 'dev-lab-2', testName: 'TSH', value: 2.1, unit: 'mIU/L', status: 'normal', collectedAt: '2025-12-15', trend: 'down', previousValue: 2.8 },
      { id: 'dev-lab-3', testName: 'Vitamin D', value: 32, unit: 'ng/mL', status: 'normal', collectedAt: '2025-12-15', trend: 'up', previousValue: 24 },
      { id: 'dev-lab-4', testName: 'LDL Cholesterol', value: 118, unit: 'mg/dL', status: 'borderline', collectedAt: '2025-12-15', trend: 'up', previousValue: 105 },
      { id: 'dev-lab-5', testName: 'Hemoglobin', value: 14.2, unit: 'g/dL', status: 'normal', collectedAt: '2025-12-15', trend: 'stable', previousValue: 14.0 },
    ],
    vitalsSummary: {
      restingHeartRate: 62,
      hrv: 48,
      sleepHours: 7.3,
      recoveryScore: 72,
      steps: 8547,
      lastUpdated: new Date().toISOString(),
    },
    recentSymptoms: [
      { id: 'dev-sym-1', description: 'Mild nasal congestion', severity: 3, location: 'head_front', onsetDate: '2026-01-27' },
      { id: 'dev-sym-2', description: 'Lower back stiffness', severity: 4, location: 'lower_back', onsetDate: '2026-01-25' },
    ],
  };

  const [unlocked, setUnlocked] = useState(DEV_SKIP_AUTH);
  const [passphrase, setPassphrase] = useState('');
  const [confirmPassphrase, setConfirmPassphrase] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(!DEV_SKIP_AUTH);
  const [hasDatabase, setHasDatabase] = useState(DEV_SKIP_AUTH);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // In DEV mode, start with mock dashboard to prevent null errors
  const [dashboard, setDashboard] = useState<DashboardData | null>(DEV_SKIP_AUTH ? DEV_MOCK_DASHBOARD : null);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [currentView, setCurrentView] = useState<View>('body-centric');
  const [timeline, setTimeline] = useState<TimelineData | null>(null);
  const [timelineLoading, setTimelineLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState<TimelineEventType[]>(['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom']);
  const [dateRange, setDateRange] = useState<{ start?: string; end?: string }>({});
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [bodyDiagramView, setBodyDiagramView] = useState<'anterior' | 'posterior'>('anterior');
  const [selectedBodyRegion, setSelectedBodyRegion] = useState<string | null>(null);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [dataVersion, setDataVersion] = useState(0);
  // Phase 4 state
  const [selectedEncyclopediaEntryId, setSelectedEncyclopediaEntryId] = useState<string | null>(null);
  const [initialMedicationId, setInitialMedicationId] = useState<string | undefined>(undefined);
  const [initialConditionId, setInitialConditionId] = useState<string | undefined>(undefined);
  // Navigation history for breadcrumb support
  const [navigationHistory, setNavigationHistory] = useState<View[]>([]);
  // Track previous view for transition direction
  const previousViewRef = useRef<View | null>(null);
  // View order for determining slide direction
  const viewOrder: View[] = ['body-centric', 'chat', 'timeline', 'dashboard', 'body', 'anatomy', 'symptom-explorer', 'medication-explorer', 'condition-simulator', 'encyclopedia', 'encyclopedia-entry', 'settings'];
  // Transition type based on navigation direction
  const [transitionType, setTransitionType] = useState<'fade' | 'slide-left' | 'slide-right'>('fade');
  // Global keyboard shortcuts state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShortcutsHelpOpen, setIsShortcutsHelpOpen] = useState(false);

  // Action tracking hooks for intent prediction
  const { track: trackDashboard } = useActionTracker<DashboardAction>('dashboard', 'App');
  const { track: trackNavigation } = useActionTracker<NavigationAction>('navigation', 'App');
  const { track: trackTimeline } = useActionTracker<TimelineAction>('timeline', 'App');
  const { track: trackBodyMap } = useActionTracker<BodyMapAction>('body-map', 'App');

  // Demographics hook for body-centric home
  const { isOnboarded, isLoading: demographicsLoading, refreshDemographics, saveDemographics } = useUserDemographics();

  // Navigate with history tracking and transition animation
  const navigateWithHistory = useCallback((newView: View) => {
    trackNavigation('view-change', { fromView: currentView, toView: newView });
    previousViewRef.current = currentView;
    setTransitionType(getSlideDirection(currentView, newView, viewOrder));
    setNavigationHistory(prev => [...prev, currentView]);
    setCurrentView(newView);
  }, [currentView, trackNavigation, viewOrder]);

  // Navigate back through history with reverse transition
  const navigateBack = useCallback(() => {
    if (navigationHistory.length > 0) {
      const newHistory = [...navigationHistory];
      const previousView = newHistory.pop()!;
      trackNavigation('back', { fromView: currentView, toView: previousView });
      previousViewRef.current = currentView;
      setTransitionType('slide-right'); // Always slide right when going back
      setNavigationHistory(newHistory);
      setCurrentView(previousView);
      return true;
    }
    return false;
  }, [navigationHistory, currentView, trackNavigation]);

  // Tracked navigation handler for header buttons with transition
  const handleNavigate = useCallback((targetView: View) => {
    trackNavigation('view-change', { fromView: currentView, toView: targetView });
    previousViewRef.current = currentView;
    setTransitionType(getSlideDirection(currentView, targetView, viewOrder));
    setCurrentView(targetView);
  }, [currentView, trackNavigation, viewOrder]);

  useEffect(() => {
    checkDatabase();
  }, []);

  // DEV MODE: Initialize with default demographics if not onboarded
  // This ensures the body model renders correctly in dev mode
  // Use a ref to track if we've attempted to save, preventing repeated calls on error
  const devDemographicsSavedRef = useRef(false);
  useEffect(() => {
    if (DEV_SKIP_AUTH && !isOnboarded && !demographicsLoading && !devDemographicsSavedRef.current) {
      // Mark as attempted to prevent infinite retries on error
      devDemographicsSavedRef.current = true;
      // Save default demographics to localStorage so the body model works
      saveDemographics(DEFAULT_DEMOGRAPHICS).catch(err => {
        console.log('DEV MODE: Could not save default demographics:', err);
      });
    }
  }, [DEV_SKIP_AUTH, isOnboarded, demographicsLoading, saveDemographics]);

  useEffect(() => {
    if (unlocked) {
      loadDashboard();
    }
  }, [unlocked]);

  useEffect(() => {
    if (unlocked && currentView === 'timeline') {
      loadTimeline();
    }
  }, [unlocked, currentView, activeFilters, dateRange]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if user is typing in an input field
      const target = event.target as HTMLElement;
      const isInputField =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.getAttribute('role') === 'textbox';

      // Always handle Escape to close panels/modals (even in input fields)
      if (event.key === 'Escape') {
        // Close search if open
        if (isSearchOpen) {
          event.preventDefault();
          setIsSearchOpen(false);
          return;
        }
        // Close shortcuts help if open
        if (isShortcutsHelpOpen) {
          event.preventDefault();
          setIsShortcutsHelpOpen(false);
          return;
        }
        // Close selected event modal if open
        if (selectedEvent) {
          event.preventDefault();
          setSelectedEvent(null);
          return;
        }
        // Close symptom form if open
        if (showSymptomForm) {
          event.preventDefault();
          setShowSymptomForm(false);
          return;
        }
        return;
      }

      // Skip other shortcuts when typing in input fields
      if (isInputField) {
        return;
      }

      // Skip if Cmd/Ctrl/Alt modifiers are pressed (allow Shift for ?)
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      switch (event.key) {
        // / - Open search (prevent browser find)
        case '/':
          event.preventDefault();
          setIsSearchOpen(true);
          break;

        // ? (Shift + /) - Open keyboard shortcuts help
        case '?':
          event.preventDefault();
          setIsShortcutsHelpOpen(prev => !prev);
          break;

        // H - Toggle UI visibility
        case 'h':
        case 'H':
          // Only in anatomy views - handled by UnifiedNavigation
          if (currentView === 'anatomy' || currentView === 'body-centric') {
            // Let UnifiedNavigation handle this
            return;
          }
          break;

        // Space - Reset camera view (only in anatomy views)
        // F - Focus on selection (only in anatomy views)
        // 1-6 - Camera presets (only in anatomy views)
        // These are handled by UnifiedNavigation component when active
        case ' ':
        case 'f':
        case 'F':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          // These are handled by the UnifiedNavigation component
          // when in anatomy or body-centric views
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, isSearchOpen, isShortcutsHelpOpen, selectedEvent, showSymptomForm]);

  async function checkDatabase() {
    // In DEV mode, skip the database check entirely - we already initialized
    // hasDatabase=true and loading=false, so don't let a failed or negative
    // check_database_exists call override those values
    if (DEV_SKIP_AUTH) return;
    try {
      const exists = await invoke<boolean>('check_database_exists');
      setHasDatabase(exists);
      setLoading(false);
    } catch (err) {
      console.error('Failed to check database:', err);
      setLoading(false);
    }
  }

  async function loadDashboard() {
    // In DEV mode with mock data already loaded, skip the Tauri call
    // to avoid a brief dashboardLoading=true flash that shows the skeleton
    if (DEV_SKIP_AUTH && dashboard) {
      return;
    }
    setDashboardLoading(true);
    try {
      const data = await invoke<DashboardData>('get_dashboard');
      setDashboard(data);
      setDataVersion(v => v + 1); // Trigger insights refresh
    } catch (err) {
      console.error('Failed to load dashboard:', err);
    } finally {
      setDashboardLoading(false);
    }
  }

  async function loadTimeline() {
    setTimelineLoading(true);
    try {
      const data = await invoke<TimelineData>('get_timeline', {
        types: activeFilters.length > 0 ? activeFilters : undefined,
        startDate: dateRange.start || undefined,
        endDate: dateRange.end || undefined,
      });
      setTimeline(data);
    } catch (err) {
      console.error('Failed to load timeline:', err);
    } finally {
      setTimelineLoading(false);
    }
  }

  const toggleFilter = useCallback((type: TimelineEventType) => {
    const isAdding = !activeFilters.includes(type);
    trackTimeline('filter-type', {
      filterType: type,
      filterValue: isAdding ? 'enabled' : 'disabled',
    });
    setActiveFilters(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  }, [activeFilters, trackTimeline]);

  // Handle date range change with tracking
  const handleDateRangeChange = useCallback((field: 'start' | 'end', value: string) => {
    trackTimeline('change-date-range', {
      dateRangeStart: field === 'start' ? value : dateRange.start,
      dateRangeEnd: field === 'end' ? value : dateRange.end,
    });
    setDateRange(prev => ({ ...prev, [field]: value }));
  }, [dateRange, trackTimeline]);

  // Handle clear date range with tracking
  const handleClearDateRange = useCallback(() => {
    trackTimeline('change-date-range', { dateRangeStart: undefined, dateRangeEnd: undefined });
    setDateRange({});
  }, [trackTimeline]);

  // Handle timeline event selection with tracking
  const handleSelectTimelineEvent = useCallback((event: TimelineEvent) => {
    trackTimeline('select-event', { eventId: event.id, eventType: event.type });
    setSelectedEvent(event);
  }, [trackTimeline]);

  // Handle body region selection with tracking
  const handleBodyRegionSelect = useCallback((regionId: string) => {
    trackBodyMap('select-region', { bodyRegion: regionId });
    setSelectedBodyRegion(regionId);
  }, [trackBodyMap]);

  // Handle body diagram view toggle with tracking
  const handleBodyViewToggle = useCallback((view: 'anterior' | 'posterior') => {
    trackBodyMap('toggle-view', { metadata: { view } });
    setBodyDiagramView(view);
  }, [trackBodyMap]);

  // Handle symptom form start with tracking
  const handleStartSymptomLog = useCallback(() => {
    trackBodyMap('start-symptom-log', { bodyRegion: selectedBodyRegion || undefined });
    setShowSymptomForm(true);
  }, [selectedBodyRegion, trackBodyMap]);

  // Handle dashboard quick access button click with tracking
  const handleQuickAccessClick = useCallback((targetView: View, cardType: string) => {
    trackDashboard('click-quick-access', { metadata: { cardType, targetView } });
    trackNavigation('view-change', { fromView: currentView, toView: targetView });
    setCurrentView(targetView);
  }, [currentView, trackDashboard, trackNavigation]);

  // Handle search result selection
  const handleSearchResultSelect = useCallback((result: {
    id: string;
    category: string;
    navigationPath?: string;
    structureId?: string;
    entryId?: string;
  }) => {
    setIsSearchOpen(false);

    // Navigate based on the result category
    switch (result.category) {
      case 'anatomy':
      case 'structure':
        if (result.structureId) {
          // Navigate to anatomy view with the selected structure
          trackNavigation('view-change', { fromView: currentView, toView: 'anatomy', metadata: { structureId: result.structureId } });
          setCurrentView('anatomy');
        }
        break;
      case 'condition':
        setInitialConditionId(result.entryId || result.id);
        trackNavigation('view-change', { fromView: currentView, toView: 'condition-simulator' });
        setCurrentView('condition-simulator');
        break;
      case 'medication':
        setInitialMedicationId(result.entryId || result.id);
        trackNavigation('view-change', { fromView: currentView, toView: 'medication-explorer' });
        setCurrentView('medication-explorer');
        break;
      case 'symptom':
        trackNavigation('view-change', { fromView: currentView, toView: 'symptom-explorer' });
        setCurrentView('symptom-explorer');
        break;
      case 'encyclopedia':
        if (result.entryId) {
          setSelectedEncyclopediaEntryId(result.entryId);
          trackNavigation('view-change', { fromView: currentView, toView: 'encyclopedia-entry' });
          setCurrentView('encyclopedia-entry');
        } else {
          trackNavigation('view-change', { fromView: currentView, toView: 'encyclopedia' });
          setCurrentView('encyclopedia');
        }
        break;
      default:
        // Default to encyclopedia for unknown categories
        trackNavigation('view-change', { fromView: currentView, toView: 'encyclopedia' });
        setCurrentView('encyclopedia');
    }
  }, [currentView, trackNavigation]);

  function getEventTypeColor(type: TimelineEventType): string {
    const colors: Record<TimelineEventType, string> = {
      lab: '#3b82f6',        // blue
      imaging: '#8b5cf6',    // purple
      condition: '#f59e0b',  // amber
      medication: '#10b981', // emerald
      surgery: '#ef4444',    // red
      symptom: '#f97316',    // orange
    };
    return colors[type];
  }

  function getEventTypeLabel(type: TimelineEventType): string {
    const labels: Record<TimelineEventType, string> = {
      lab: t('medical.lab') || 'Lab',
      imaging: t('medical.imaging') || 'Imaging',
      condition: t('medical.condition') || 'Condition',
      medication: t('medical.medication') || 'Medication',
      surgery: t('medical.surgery') || 'Surgery',
      symptom: t('medical.symptom') || 'Symptom',
    };
    return labels[type];
  }

  function formatEventDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  async function handleUnlock() {
    if (!passphrase) {
      setError(t('error.enterPassphrase') || 'Please enter your passphrase');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await invoke<HealthSummary>('unlock_database', { passphrase });
      setUnlocked(true);
    } catch (err) {
      const errorMsg = String(err);
      if (errorMsg.includes('Incorrect passphrase') || errorMsg.includes('bad decrypt')) {
        setError(t('error.incorrectPassphrase') || 'Incorrect passphrase. Please try again.');
      } else {
        setError(`${t('error.unlockFailed') || 'Failed to unlock'}: ${errorMsg}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreate() {
    setError('');

    if (passphrase.length < 8) {
      setError(t('error.passphraseTooShort') || 'Passphrase must be at least 8 characters');
      return;
    }

    if (passphrase !== confirmPassphrase) {
      setError(t('error.passphrasesDoNotMatch') || 'Passphrases do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      await invoke<HealthSummary>('create_database', { passphrase });
      setUnlocked(true);
      setHasDatabase(true);
    } catch (err) {
      setError(`Failed to create database: ${String(err)}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  function getPassphraseStrength(): { label: string; color: string; width: string } {
    const len = passphrase.length;
    if (len === 0) return { label: '', color: 'transparent', width: '0%' };
    if (len < 8) return { label: t('password.tooShort') || 'Too short', color: 'var(--error)', width: '25%' };
    if (len < 12) return { label: t('password.weak') || 'Weak', color: 'var(--warning)', width: '50%' };
    if (len < 16) return { label: t('password.good') || 'Good', color: 'var(--accent)', width: '75%' };
    return { label: t('password.strong') || 'Strong', color: 'var(--success)', width: '100%' };
  }

  function TrendIcon({ trend }: { trend?: 'up' | 'down' | 'stable' | null }) {
    const { t } = useTranslation('labs');
    if (!trend) return null;

    if (trend === 'up') {
      return (
        <span className="trend-icon trend-up" title={t('labs.trend.up')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </span>
      );
    }
    if (trend === 'down') {
      return (
        <span className="trend-icon trend-down" title={t('labs.trend.down')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      );
    }
    return (
      <span className="trend-icon trend-stable" title={t('labs.trend.stable')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14"/>
        </svg>
      </span>
    );
  }

  function EmptyState({ icon, message }: { icon: React.ReactNode; message: string }) {
    return (
      <div className="empty-state">
        <span className="empty-icon">{icon}</span>
        <p>{message}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container" role="main" aria-busy="true" aria-label={t('app.loading') || 'Loading application'}>
        <div className="loading" role="status" aria-live="polite">
          <div className="loading-spinner" aria-hidden="true" />
          <span>{t('action.loading')}</span>
        </div>
      </div>
    );
  }

  // First-run: Create new database
  if (!hasDatabase) {
    const strength = getPassphraseStrength();

    return (
      <div className="container">
        <div className="auth-card auth-card-wide">
          <div className="language-toggle-container" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <LanguageToggle />
          </div>
          <div className="logo">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
              <path d="M32 12 L32 52 M22 22 Q32 32 22 42 M42 22 Q32 32 42 42"
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1>{t('app.welcome')}</h1>
          <p className="subtitle">{t('app.tagline')}</p>

          <div className="privacy-section">
            <h2>{t('privacy.control')}</h2>
            <div className="privacy-features">
              <div className="privacy-feature">
                <span className="privacy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <div>
                  <strong>{t('privacy.encryptedStorage')}</strong>
                  <span>{t('privacy.encryptedStorageDesc')}</span>
                </div>
              </div>
              <div className="privacy-feature">
                <span className="privacy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10"/>
                    <path d="M12 20V4"/>
                    <path d="M6 20v-6"/>
                    <line x1="2" y1="20" x2="22" y2="20"/>
                  </svg>
                </span>
                <div>
                  <strong>{t('privacy.local')}</strong>
                  <span>{t('privacy.localDesc')}</span>
                </div>
              </div>
              <div className="privacy-feature">
                <span className="privacy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <div>
                  <strong>{t('privacy.control')}</strong>
                  <span>{t('privacy.controlDesc')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="create-form">
            <h2>{t('password.create')}</h2>
            <p className="form-hint">{t('password.hint')}</p>

            <div className="input-group">
              <input
                type="password"
                placeholder={`${t('password.enter')} (${t('password.minLength')})`}
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                disabled={isSubmitting}
              />
              {passphrase.length > 0 && (
                <div className="strength-indicator">
                  <div className="strength-bar" style={{ width: strength.width, backgroundColor: strength.color }} />
                  <span className="strength-label" style={{ color: strength.color }}>{strength.label}</span>
                </div>
              )}
            </div>

            <input
              type="password"
              placeholder={t('password.confirm')}
              value={confirmPassphrase}
              onChange={(e) => setConfirmPassphrase(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              disabled={isSubmitting}
            />

            {error && <div className="error">{error}</div>}

            <button onClick={handleCreate} disabled={isSubmitting}>
              {isSubmitting ? t('action.loading') : t('action.create')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Unlock existing database
  if (!unlocked) {
    return (
      <div className="container">
        <div className="auth-card">
          <div className="language-toggle-container" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <LanguageToggle />
          </div>
          <div className="logo">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
              <path d="M32 12 L32 52 M22 22 Q32 32 22 42 M42 22 Q32 32 42 42"
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1>{t('app.name')}</h1>
          <p className="subtitle">{t('password.enter')}</p>

          <div className="privacy-notice">
            <span className="lock-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </span>
            <span>{t('password.encrypted')}</span>
          </div>

          <input
            type="password"
            placeholder={t('password.enter')}
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            disabled={isSubmitting}
            autoFocus
          />

          {error && (
            <div className="error">
              {error}
              <button className="retry-link" onClick={() => { setError(''); setPassphrase(''); }}>
                {t('error.clearAndRetry')}
              </button>
            </div>
          )}

          <button onClick={handleUnlock} disabled={isSubmitting}>
            {isSubmitting ? t('action.loading') : t('action.unlock')}
          </button>
        </div>
      </div>
    );
  }

  // Onboarding flow for new users (show after unlock, before main content)
  // DEV MODE: Skip onboarding when DEV_SKIP_AUTH is enabled
  if (!DEV_SKIP_AUTH && !isOnboarded && !demographicsLoading) {
    return (
      <Suspense fallback={
        <div className="container">
          <div className="loading">Loading onboarding...</div>
        </div>
      }>
        <OnboardingFlow
          onComplete={async () => {
            // Refresh demographics state from localStorage after onboarding saves
            await refreshDemographics();
            // Refresh dashboard after onboarding completes
            loadDashboard();
          }}
        />
      </Suspense>
    );
  }

  // Dashboard or Timeline (unlocked) - show skeleton loader
  // Always show skeleton when dashboard is not loaded, regardless of DEV_SKIP_AUTH
  // This prevents null access errors when destructuring dashboard properties
  // In DEV mode, skip the demographicsLoading gate since we provide mock data and
  // auto-save default demographics - waiting for that async op would block rendering
  if (dashboardLoading || !dashboard || (!DEV_SKIP_AUTH && demographicsLoading)) {
    return (
      <div className="container" role="main" aria-busy="true">
        <div className="dashboard-skeleton" role="status" aria-live="polite">
          <span className="sr-only">Loading your health data...</span>
          <div className="skeleton-section">
            <div className="skeleton skeleton-section-title" />
            <div className="skeleton-vitals-grid">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="skeleton skeleton-vital-item" />
              ))}
            </div>
          </div>
          <div className="skeleton-section">
            <div className="skeleton skeleton-section-title" />
            {[1, 2, 3].map(i => (
              <div key={i} className="skeleton skeleton-list-item" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Use DEV mock data as fallback if dashboard is null (shouldn't happen but safety first)
  const dashboardData = dashboard ?? DEV_MOCK_DASHBOARD;
  const { summary, activeConditions, currentMedications, recentLabs, vitalsSummary } = dashboardData;

  // Event detail modal
  const EventDetailModal = ({ event, onClose }: { event: TimelineEvent; onClose: () => void }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="event-type-badge" style={{ backgroundColor: getEventTypeColor(event.type) }}>
            {getEventTypeLabel(event.type)}
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <h3 className="modal-title">{event.title}</h3>
        <p className="modal-date">{formatEventDate(event.date)}</p>
        {event.subtitle && <p className="modal-subtitle">{event.subtitle}</p>}
        {event.details && (
          <div className="modal-details">
            {Object.entries(event.details).map(([key, value]) => {
              if (value === null || value === undefined) return null;
              const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              const displayValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
              return (
                <div key={key} className="detail-row">
                  <span className="detail-label">{displayKey}</span>
                  <span className="detail-value">{displayValue}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  // Render the current view content based on currentView state
  const renderViewContent = () => {
    // Timeline View
    if (currentView === 'timeline') {
      return (
        <div className="container timeline-view">
          <header className="app-header">
            <button className="back-button" onClick={() => setCurrentView('body-centric')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {t('action.back')}
          </button>
          <h1>{tNav('nav.timeline')}</h1>
          <LanguageToggle />
        </header>

        {/* Filter Controls */}
        <div className="timeline-controls">
          <div className="filter-toggles">
            {(['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom'] as TimelineEventType[]).map((type) => (
              <button
                key={type}
                className={`filter-toggle ${activeFilters.includes(type) ? 'active' : ''}`}
                style={{
                  borderColor: getEventTypeColor(type),
                  backgroundColor: activeFilters.includes(type) ? getEventTypeColor(type) : 'transparent',
                }}
                onClick={() => toggleFilter(type)}
              >
                {getEventTypeLabel(type)}
              </button>
            ))}
          </div>

          <div className="date-range-selector">
            <input
              type="date"
              value={dateRange.start || ''}
              onChange={(e) => handleDateRangeChange('start', e.target.value)}
              placeholder={t('action.startDate') || 'Start date'}
            />
            <span className="date-separator">{t('action.to') || 'to'}</span>
            <input
              type="date"
              value={dateRange.end || ''}
              onChange={(e) => handleDateRangeChange('end', e.target.value)}
              placeholder={t('action.endDate') || 'End date'}
            />
            {(dateRange.start || dateRange.end) && (
              <button className="clear-dates" onClick={handleClearDateRange}>
                {t('action.clear')}
              </button>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {timelineLoading ? (
            <div className="loading">{t('action.loading')}</div>
          ) : timeline && timeline.events.length > 0 ? (
            <>
              <div className="timeline-count">
                Showing {timeline.events.length} events
              </div>
              <div className="timeline">
                {timeline.events.map((event) => (
                  <div
                    key={event.id}
                    className="timeline-item"
                    onClick={() => handleSelectTimelineEvent(event)}
                  >
                    <div
                      className="timeline-marker"
                      style={{ backgroundColor: getEventTypeColor(event.type) }}
                    />
                    <div className="timeline-content">
                      <div className="timeline-date">{formatEventDate(event.date)}</div>
                      <div className="timeline-event-card">
                        <span
                          className="event-type-indicator"
                          style={{ backgroundColor: getEventTypeColor(event.type) }}
                        />
                        <div className="event-info">
                          <span className="event-title">{event.title}</span>
                          {event.subtitle && <span className="event-subtitle">{event.subtitle}</span>}
                        </div>
                        <svg className="event-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <p>No events found for the selected filters</p>
            </div>
          )}
        </div>

        {selectedEvent && <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </div>
    );
  }

  // Chat View
  if (currentView === 'chat') {
    return (
      <>
        <ChatView
          onBack={() => setCurrentView('body-centric')}
          dashboardData={dashboard}
        />

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // 3D Anatomy View - lazy loaded with Suspense, uses UnifiedNavigation for 3D canvas controls
  if (currentView === 'anatomy') {
    return (
      <UnifiedNavigation
        toolbarPosition="left"
        showBreadcrumbs={true}
        showCameraIndicator={true}
        onCameraPresetChange={(preset) => {
          trackNavigation('view-change', { fromView: currentView, toView: currentView, metadata: { cameraPreset: preset } });
        }}
        onResetView={() => {
          trackNavigation('view-change', { fromView: currentView, toView: currentView, metadata: { action: 'reset-view' } });
        }}
      >
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading 3D Anatomy Viewer...</div>
          </div>
        }>
          <AnatomyViewer
            onBack={() => handleNavigate('body-centric')}
            dashboardData={dashboard}
          />
        </Suspense>

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </UnifiedNavigation>
    );
  }

  // Phase 4: Symptom Explorer
  if (currentView === 'symptom-explorer') {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Symptom Explorer...</div>
          </div>
        }>
          <SymptomExplorer
            onBack={() => setCurrentView('body-centric')}
            dashboardData={dashboard}
            onNavigateToAnatomy={() => setCurrentView('anatomy')}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Phase 4: Medication Explorer
  if (currentView === 'medication-explorer') {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Medication Explorer...</div>
          </div>
        }>
          <MedicationExplorer
            onBack={() => {
              setInitialMedicationId(undefined);
              // Try to navigate back through history, otherwise go to body-centric home
              if (!navigateBack()) {
                setCurrentView('body-centric');
              }
            }}
            dashboardData={dashboard}
            onNavigateToAnatomy={() => setCurrentView('anatomy')}
            initialMedicationId={initialMedicationId}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Phase 4: Condition Simulator
  if (currentView === 'condition-simulator') {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Condition Simulator...</div>
          </div>
        }>
          <ConditionSimulator
            onBack={() => {
              setInitialConditionId(undefined);
              setCurrentView('body-centric');
            }}
            dashboardData={dashboard}
            onNavigateToAnatomy={() => setCurrentView('anatomy')}
            onNavigateToMedication={(medId: string) => {
              setInitialMedicationId(medId);
              navigateWithHistory('medication-explorer');
            }}
            initialConditionId={initialConditionId}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Phase 4: Medical Encyclopedia
  if (currentView === 'encyclopedia') {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Medical Encyclopedia...</div>
          </div>
        }>
          <MedicalEncyclopedia
            onBack={() => setCurrentView('body-centric')}
            dashboardData={dashboard}
            onNavigateToAnatomy={() => setCurrentView('anatomy')}
            onOpenEntry={(entryId) => {
              setSelectedEncyclopediaEntryId(entryId);
              setCurrentView('encyclopedia-entry');
            }}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Phase 4: Encyclopedia Entry
  if (currentView === 'encyclopedia-entry' && selectedEncyclopediaEntryId) {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Encyclopedia Entry...</div>
          </div>
        }>
          <EncyclopediaEntry
            entryId={selectedEncyclopediaEntryId}
            onBack={() => {
              setSelectedEncyclopediaEntryId(null);
              setCurrentView('encyclopedia');
            }}
            onNavigateToEntry={(entryId) => {
              setSelectedEncyclopediaEntryId(entryId);
              // Stay on encyclopedia-entry view
            }}
            onNavigateToAnatomy={() => setCurrentView('anatomy')}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Settings View
  if (currentView === 'settings') {
    return (
      <>
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Settings...</div>
          </div>
        }>
          <SettingsPage
            onBack={() => setCurrentView('body-centric')}
          />
        </Suspense>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </>
    );
  }

  // Body-Centric Home (default view) - uses UnifiedNavigation for 3D canvas controls
  if (currentView === 'body-centric') {
    return (
      <UnifiedNavigation
        toolbarPosition="left"
        showBreadcrumbs={true}
        showCameraIndicator={true}
        onCameraPresetChange={(preset) => {
          trackNavigation('view-change', { fromView: currentView, toView: currentView, metadata: { cameraPreset: preset } });
        }}
        onResetView={() => {
          trackNavigation('view-change', { fromView: currentView, toView: currentView, metadata: { action: 'reset-view' } });
        }}
      >
        <Suspense fallback={
          <div className="container">
            <div className="loading">Loading Body-Centric Home...</div>
          </div>
        }>
          <BodyCentricHome
            dashboardData={dashboard}
            isLoading={dashboardLoading}
            onNavigate={(view: View) => {
              trackNavigation('view-change', { fromView: currentView, toView: view });
              setCurrentView(view);
            }}
          />
        </Suspense>
        {/* Mobile Bottom Navigation */}
        <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

        {/* Global Search Modal */}
        {isSearchOpen && (
          <GlobalSearch
            onResultSelect={handleSearchResultSelect}
            onOpenChange={setIsSearchOpen}
            defaultOpen={true}
          />
        )}

        {/* Keyboard Shortcuts Help Modal */}
        <KeyboardShortcutsHelp
          isOpen={isShortcutsHelpOpen}
          onClose={() => setIsShortcutsHelpOpen(false)}
        />
      </UnifiedNavigation>
    );
  }

  // Body Map View
  if (currentView === 'body') {
    // Get symptom locations from dashboard data
    const symptomLocations = dashboard?.recentSymptoms.map(s => s.location).filter(Boolean) as string[] || [];

    // Show symptom form if requested
    if (showSymptomForm) {
      return (
        <div className="container body-view">
          <SymptomEntryForm
            preselectedRegion={selectedBodyRegion || undefined}
            onSave={() => {
              setShowSymptomForm(false);
              setSelectedBodyRegion(null);
              // Refresh dashboard data to update symptom markers
              loadDashboard();
            }}
            onCancel={() => {
              setShowSymptomForm(false);
            }}
          />
        </div>
      );
    }

    return (
      <div className="container body-view">
        <header className="app-header">
          <button className="back-button" onClick={() => setCurrentView('body-centric')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Body Map</h1>
          <div className="header-spacer" />
        </header>

        <section className="body-diagram-section">
          <div className="body-diagram-header">
            <h2>Select a Body Region</h2>
            <div className="body-diagram-controls">
              <button
                className={`view-toggle ${bodyDiagramView === 'anterior' ? 'active' : ''}`}
                onClick={() => handleBodyViewToggle('anterior')}
              >
                Front
              </button>
              <button
                className={`view-toggle ${bodyDiagramView === 'posterior' ? 'active' : ''}`}
                onClick={() => handleBodyViewToggle('posterior')}
              >
                Back
              </button>
            </div>
          </div>

          <BodyDiagram
            view={bodyDiagramView}
            selectedRegion={selectedBodyRegion || undefined}
            onRegionSelect={handleBodyRegionSelect}
            symptomLocations={symptomLocations}
          />

          {selectedBodyRegion && (
            <div className="selected-region-display">
              <span className="selected-region-label">Selected Region</span>
              <span className="selected-region-name">{getRegionName(selectedBodyRegion)}</span>
              <button
                className="add-symptom-button"
                onClick={handleStartSymptomLog}
              >
                Add Symptom Here
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="container dashboard" role="main" aria-label={tDash('dashboard.title')}>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">{t('a11y.skipToMain')}</a>

      <header className="app-header" role="banner">
        <div className="header-spacer" />
        <div className="header-title">
          <h1>{t('app.name')}</h1>
          <p className="subtitle">{t('app.tagline')}</p>
        </div>
        <nav className="header-actions" aria-label="Quick actions">
          <button className="header-action-button" onClick={() => handleNavigate('chat')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {tNav('nav.chat')}
          </button>
          <button className="header-action-button" onClick={() => handleNavigate('anatomy')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M12 6v12M8 10c0-2 1.8-4 4-4s4 2 4 4"/>
              <circle cx="12" cy="16" r="2"/>
            </svg>
            {tNav('nav.anatomy')}
          </button>
          <button className="header-action-button" onClick={() => handleNavigate('body')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
              <path d="M12 8v14"/>
              <path d="M8 12h8"/>
              <path d="M8 22l4-4 4 4"/>
            </svg>
            {tNav('nav.body')}
          </button>
          <button className="header-action-button" onClick={() => handleNavigate('timeline')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            {tNav('nav.timeline')}
          </button>
          <LanguageToggle />
        </nav>
      </header>

      <main id="main-content">
        {/* Vitals Summary Card */}
        <section className="dashboard-section" aria-labelledby="vitals-heading">
          <h2 id="vitals-heading" className="section-title">{tDash('dashboard.vitals.title')}</h2>
          <div className="vitals-grid" role="list" aria-label="Vital signs">
            {vitalsSummary.restingHeartRate ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">{tDash('dashboard.vitals.heartRate')}</span>
                <span className="vital-value">{Math.round(vitalsSummary.restingHeartRate)}</span>
                <span className="vital-unit">bpm</span>
              </div>
            ) : null}
            {vitalsSummary.hrv ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">{tDash('dashboard.vitals.hrv')}</span>
                <span className="vital-value">{Math.round(vitalsSummary.hrv)}</span>
                <span className="vital-unit">ms</span>
              </div>
            ) : null}
            {vitalsSummary.recoveryScore ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">{tDash('dashboard.vitals.recovery')}</span>
                <span className="vital-value">{Math.round(vitalsSummary.recoveryScore)}</span>
                <span className="vital-unit">%</span>
              </div>
            ) : null}
            {vitalsSummary.sleepHours ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">{tDash('dashboard.vitals.sleep')}</span>
                <span className="vital-value">{vitalsSummary.sleepHours}</span>
                <span className="vital-unit">hrs</span>
              </div>
            ) : null}
            {vitalsSummary.steps ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">{tDash('dashboard.vitals.steps')}</span>
                <span className="vital-value">{vitalsSummary.steps.toLocaleString()}</span>
                <span className="vital-unit">{t('time.today')}</span>
              </div>
            ) : null}
            {!vitalsSummary.restingHeartRate && !vitalsSummary.hrv && !vitalsSummary.steps && (
              <EmptyState
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                }
                message={tDash('dashboard.vitals.empty')}
              />
            )}
          </div>
        </section>

        {/* AI Insights Panel */}
        <InsightsPanel dashboardData={dashboard} dataVersion={dataVersion} />

        {/* Phase 4: Quick Access Buttons */}
        <section className="dashboard-section quick-access-section">
          <h2 className="section-title">Explore & Learn</h2>
          <div className="quick-access-buttons">
            <button
              className="quick-access-btn symptom-btn"
              onClick={() => handleQuickAccessClick('symptom-explorer', 'symptom')}
            >
              <span className="btn-icon">🔍</span>
              <span className="btn-text">
                <span className="btn-title">Explore Symptom</span>
                <span className="btn-subtitle">Understand what symptoms mean</span>
              </span>
            </button>
            <button
              className="quick-access-btn medication-btn"
              onClick={() => handleQuickAccessClick('medication-explorer', 'medication')}
            >
              <span className="btn-icon">💊</span>
              <span className="btn-text">
                <span className="btn-title">Drug Effects</span>
                <span className="btn-subtitle">See how medications work</span>
              </span>
            </button>
            <button
              className="quick-access-btn condition-btn"
              onClick={() => handleQuickAccessClick('condition-simulator', 'condition')}
            >
              <span className="btn-icon">🏥</span>
              <span className="btn-text">
                <span className="btn-title">Learn Condition</span>
                <span className="btn-subtitle">Explore disease progression</span>
              </span>
            </button>
            <button
              className="quick-access-btn encyclopedia-btn"
              onClick={() => handleQuickAccessClick('encyclopedia', 'encyclopedia')}
            >
              <span className="btn-icon">📚</span>
              <span className="btn-text">
                <span className="btn-title">Encyclopedia</span>
                <span className="btn-subtitle">Medical knowledge base</span>
              </span>
            </button>
          </div>
        </section>

        {/* Two-column layout for conditions and meds */}
        <div className="two-column">
          {/* Active Conditions */}
          <section className="dashboard-section">
            <h2 className="section-title">
              Active Conditions
              <span className="count-badge">{activeConditions.length}</span>
            </h2>
            <div className="card-list" onClick={() => console.log('Navigate to conditions')}>
              {activeConditions.length > 0 ? (
                activeConditions.slice(0, 5).map((condition) => (
                  <div key={condition.id} className="list-item">
                    <span className="item-name">{condition.name}</span>
                    <span className={`status-badge status-${condition.status}`}>
                      {condition.status}
                    </span>
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  }
                  message="No active conditions"
                />
              )}
            </div>
          </section>

          {/* Current Medications */}
          <section className="dashboard-section">
            <h2 className="section-title">
              Current Medications
              <span className="count-badge">{currentMedications.length}</span>
            </h2>
            <div className="card-list" onClick={() => console.log('Navigate to medications')}>
              {currentMedications.length > 0 ? (
                currentMedications.slice(0, 5).map((med) => (
                  <div key={med.id} className="list-item">
                    <div className="item-details">
                      <span className="item-name">{med.name}</span>
                      {med.dosage && <span className="item-meta">{med.dosage}</span>}
                    </div>
                    {med.frequency && (
                      <span className="frequency-badge">{med.frequency}</span>
                    )}
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.5 20.5L4 14 7 11 3 7 7 3l4 4 3-3 6.5 6.5a5 5 0 01-7 7z"/>
                    </svg>
                  }
                  message="No current medications"
                />
              )}
            </div>
          </section>
        </div>

        {/* Recent Labs */}
        <section className="dashboard-section">
          <h2 className="section-title">
            Recent Labs
            <span className="count-badge">{summary.totalLabResults}</span>
          </h2>
          <div className="labs-grid" onClick={() => console.log('Navigate to labs')}>
            {recentLabs.length > 0 ? (
              recentLabs.slice(0, 8).map((lab) => (
                <div key={lab.id} className={`lab-card ${lab.status ? `lab-${lab.status}` : ''}`}>
                  <div className="lab-header">
                    <span className="lab-name">{lab.testName}</span>
                    <TrendIcon trend={lab.trend} />
                  </div>
                  <div className="lab-value">
                    <span className="value">{typeof lab.value === 'number' ? lab.value.toFixed(1) : lab.value}</span>
                    {lab.unit && <span className="unit">{lab.unit}</span>}
                  </div>
                  <div className="lab-date">
                    {new Date(lab.collectedAt).toLocaleDateString()}
                  </div>
                </div>
              ))
            ) : (
              <EmptyState
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                }
                message="No lab results yet"
              />
            )}
          </div>
        </section>

        {/* Data Summary Footer */}
        <footer className="dashboard-footer">
          <div className="data-counts">
            <span>{summary.totalLabResults} labs</span>
            <span>{summary.totalWhoopCycles} Whoop cycles</span>
            <span>{summary.totalAppleHealthDays} Apple Health days</span>
          </div>
          {summary.lastUpdated && (
            <p className="last-updated">
              Last updated: {new Date(summary.lastUpdated).toLocaleDateString()}
            </p>
          )}
        </footer>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav currentView={currentView} onNavigate={handleNavigate} />

      {/* Global Search Modal */}
      {isSearchOpen && (
        <GlobalSearch
          onResultSelect={handleSearchResultSelect}
          onOpenChange={setIsSearchOpen}
          defaultOpen={true}
        />
      )}

      {/* Keyboard Shortcuts Help Modal */}
      <KeyboardShortcutsHelp
        isOpen={isShortcutsHelpOpen}
        onClose={() => setIsShortcutsHelpOpen(false)}
      />
    </div>
  );
  }; // End of renderViewContent

  // Wrap all view content with ViewTransition for smooth animations
  return (
    <ViewTransition
      viewKey={currentView}
      duration={250}
      transitionType={transitionType}
      className="app-view-container"
    >
      {renderViewContent()}
    </ViewTransition>
  );
}

export default App;
