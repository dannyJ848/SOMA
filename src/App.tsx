import { useState, useEffect, Suspense, lazy } from 'react';
import { invoke } from './tauri-invoke';
import { BodyDiagram, getRegionName } from './BodyDiagram';
import { SymptomEntryForm } from './SymptomEntryForm';
import { ChatView } from './ChatView';
import { InsightsPanel } from './InsightsPanel';
import { ImportView } from './ImportView';
import { EducationView } from './EducationView';

// Lazy load components to prevent Three.js from blocking app startup
const AnatomyViewer = lazy(() => import('./AnatomyViewer').then(m => ({ default: m.AnatomyViewer })));
const AnatomyLaunchpad = lazy(() => import('./AnatomyLaunchpad').then(m => ({ default: m.AnatomyLaunchpad })));

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

type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'anatomy' | 'anatomy-launchpad' | 'import' | 'education';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [confirmPassphrase, setConfirmPassphrase] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasDatabase, setHasDatabase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [timeline, setTimeline] = useState<TimelineData | null>(null);
  const [timelineLoading, setTimelineLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState<TimelineEventType[]>(['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom']);
  const [dateRange, setDateRange] = useState<{ start?: string; end?: string }>({});
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [bodyDiagramView, setBodyDiagramView] = useState<'anterior' | 'posterior'>('anterior');
  const [selectedBodyRegion, setSelectedBodyRegion] = useState<string | null>(null);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [dataVersion, setDataVersion] = useState(0);

  useEffect(() => {
    checkDatabase();
  }, []);

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

  async function checkDatabase() {
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

  function toggleFilter(type: TimelineEventType) {
    setActiveFilters(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  }

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
      lab: 'Lab',
      imaging: 'Imaging',
      condition: 'Condition',
      medication: 'Medication',
      surgery: 'Surgery',
      symptom: 'Symptom',
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
      setError('Please enter your passphrase');
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
        setError('Incorrect passphrase. Please try again.');
      } else {
        setError(`Failed to unlock: ${errorMsg}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreate() {
    setError('');

    if (passphrase.length < 8) {
      setError('Passphrase must be at least 8 characters');
      return;
    }

    if (passphrase !== confirmPassphrase) {
      setError('Passphrases do not match');
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
    if (len < 8) return { label: 'Too short', color: 'var(--error)', width: '25%' };
    if (len < 12) return { label: 'Weak', color: 'var(--warning)', width: '50%' };
    if (len < 16) return { label: 'Good', color: 'var(--accent)', width: '75%' };
    return { label: 'Strong', color: 'var(--success)', width: '100%' };
  }

  function TrendIcon({ trend }: { trend?: 'up' | 'down' | 'stable' | null }) {
    if (!trend) return null;

    if (trend === 'up') {
      return (
        <span className="trend-icon trend-up" title="Increased">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </span>
      );
    }
    if (trend === 'down') {
      return (
        <span className="trend-icon trend-down" title="Decreased">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      );
    }
    return (
      <span className="trend-icon trend-stable" title="Stable">
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
      <div className="container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  // First-run: Create new database
  if (!hasDatabase) {
    const strength = getPassphraseStrength();

    return (
      <div className="container">
        <div className="auth-card auth-card-wide">
          <div className="logo">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
              <path d="M32 12 L32 52 M22 22 Q32 32 22 42 M42 22 Q32 32 42 42"
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1>Welcome to Biological Self</h1>
          <p className="subtitle">Your private health companion</p>

          <div className="privacy-section">
            <h2>Your Data Stays Here</h2>
            <div className="privacy-features">
              <div className="privacy-feature">
                <span className="privacy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <div>
                  <strong>Encrypted Storage</strong>
                  <span>AES-256 encryption protects all your health data</span>
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
                  <strong>100% Local</strong>
                  <span>No servers, no cloud, no network calls</span>
                </div>
              </div>
              <div className="privacy-feature">
                <span className="privacy-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <div>
                  <strong>You Control Your Data</strong>
                  <span>Only you can access it with your passphrase</span>
                </div>
              </div>
            </div>
          </div>

          <div className="create-form">
            <h2>Create Your Passphrase</h2>
            <p className="form-hint">Choose a strong passphrase you'll remember. This cannot be recovered if lost.</p>

            <div className="input-group">
              <input
                type="password"
                placeholder="Enter passphrase (min 8 characters)"
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
              placeholder="Confirm passphrase"
              value={confirmPassphrase}
              onChange={(e) => setConfirmPassphrase(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              disabled={isSubmitting}
            />

            {error && <div className="error">{error}</div>}

            <button onClick={handleCreate} disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Secure Database'}
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
          <div className="logo">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
              <path d="M32 12 L32 52 M22 22 Q32 32 22 42 M42 22 Q32 32 42 42"
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1>Biological Self</h1>
          <p className="subtitle">Enter your passphrase to unlock your health data</p>

          <div className="privacy-notice">
            <span className="lock-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </span>
            <span>Your data is encrypted and stored only on this device</span>
          </div>

          <input
            type="password"
            placeholder="Enter passphrase"
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
                Clear and try again
              </button>
            </div>
          )}

          <button onClick={handleUnlock} disabled={isSubmitting}>
            {isSubmitting ? 'Unlocking...' : 'Unlock'}
          </button>
        </div>
      </div>
    );
  }

  // Dashboard or Timeline (unlocked)
  if (dashboardLoading || !dashboard) {
    return (
      <div className="container">
        <div className="loading">Loading your health data...</div>
      </div>
    );
  }

  const { summary, activeConditions, currentMedications, recentLabs, vitalsSummary } = dashboard;

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

  // Timeline View
  if (currentView === 'timeline') {
    return (
      <div className="container timeline-view">
        <header className="app-header">
          <button className="back-button" onClick={() => setCurrentView('dashboard')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Health Timeline</h1>
          <div className="header-spacer" />
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
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              placeholder="Start date"
            />
            <span className="date-separator">to</span>
            <input
              type="date"
              value={dateRange.end || ''}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              placeholder="End date"
            />
            {(dateRange.start || dateRange.end) && (
              <button className="clear-dates" onClick={() => setDateRange({})}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {timelineLoading ? (
            <div className="loading">Loading timeline...</div>
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
                    onClick={() => setSelectedEvent(event)}
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
      </div>
    );
  }

  // Chat View
  if (currentView === 'chat') {
    return (
      <ChatView
        onBack={() => setCurrentView('dashboard')}
        dashboardData={dashboard}
      />
    );
  }

  // 3D Anatomy View - Launchpad (lazy loaded)
  if (currentView === 'anatomy-launchpad') {
    return (
      <Suspense fallback={
        <div className="container">
          <div className="loading">Loading Anatomy Explorer...</div>
        </div>
      }>
        <AnatomyLaunchpad
          onBack={() => setCurrentView('dashboard')}
          dashboardData={dashboard}
        />
      </Suspense>
    );
  }

  // 3D Anatomy View - Original (lazy loaded)
    return (
      <Suspense fallback={
        <div className="container">
          <div className="loading">Loading 3D Anatomy Viewer...</div>
        </div>
      }>
        <AnatomyViewer
          onBack={() => setCurrentView('dashboard')}
          dashboardData={dashboard}
        />
      </Suspense>
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
          <button className="back-button" onClick={() => setCurrentView('dashboard')}>
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
                onClick={() => setBodyDiagramView('anterior')}
              >
                Front
              </button>
              <button
                className={`view-toggle ${bodyDiagramView === 'posterior' ? 'active' : ''}`}
                onClick={() => setBodyDiagramView('posterior')}
              >
                Back
              </button>
            </div>
          </div>

          <BodyDiagram
            view={bodyDiagramView}
            selectedRegion={selectedBodyRegion || undefined}
            onRegionSelect={(regionId) => setSelectedBodyRegion(regionId)}
            symptomLocations={symptomLocations}
          />

          {selectedBodyRegion && (
            <div className="selected-region-display">
              <span className="selected-region-label">Selected Region</span>
              <span className="selected-region-name">{getRegionName(selectedBodyRegion)}</span>
              <button
                className="add-symptom-button"
                onClick={() => setShowSymptomForm(true)}
              >
                Add Symptom Here
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // Import View
  if (currentView === 'import') {
    return (
      <div className="container import-container">
        <header className="app-header">
          <button className="back-button" onClick={() => setCurrentView('dashboard')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Import Medical Records</h1>
          <div className="header-spacer" />
        </header>
        <ImportView />
      </div>
    );
  }

  // Education View
  if (currentView === 'education') {
    return (
      <EducationView
        onBack={() => setCurrentView('dashboard')}
        userData={dashboard}
      />
    );
  }

  return (
    <div className="container dashboard">
      <header className="app-header">
        <div className="header-spacer" />
        <div className="header-title">
          <h1>Biological Self</h1>
          <p className="subtitle">Your health, understood</p>
        </div>
        <div className="header-actions">
          <button className="header-action-button" onClick={() => setCurrentView('education')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Learn
          </button>
          <button className="header-action-button" onClick={() => setCurrentView('import')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Import
          </button>
          <button className="header-action-button" onClick={() => setCurrentView('chat')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Chat
          </button>
          <button className="header-action-button" onClick={() => setCurrentView('anatomy-launchpad')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M12 6v12M8 10c0-2 1.8-4 4-4s4 2 4 4"/>
              <circle cx="12" cy="16" r="2"/>
            </svg>
            Anatomy
          </button>
          <button className="header-action-button" onClick={() => setCurrentView('body')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
              <path d="M12 8v14"/>
              <path d="M8 12h8"/>
              <path d="M8 22l4-4 4 4"/>
            </svg>
            Body
          </button>
          <button className="header-action-button" onClick={() => setCurrentView('timeline')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            Timeline
          </button>
        </div>
      </header>

      <main>
        {/* Vitals Summary Card */}
        <section className="dashboard-section">
          <h2 className="section-title">Vitals Summary</h2>
          <div className="vitals-grid">
            {vitalsSummary.restingHeartRate ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">Resting HR</span>
                <span className="vital-value">{Math.round(vitalsSummary.restingHeartRate)}</span>
                <span className="vital-unit">bpm</span>
              </div>
            ) : null}
            {vitalsSummary.hrv ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">HRV</span>
                <span className="vital-value">{Math.round(vitalsSummary.hrv)}</span>
                <span className="vital-unit">ms</span>
              </div>
            ) : null}
            {vitalsSummary.recoveryScore ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">Recovery</span>
                <span className="vital-value">{Math.round(vitalsSummary.recoveryScore)}</span>
                <span className="vital-unit">%</span>
              </div>
            ) : null}
            {vitalsSummary.sleepHours ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">Sleep</span>
                <span className="vital-value">{vitalsSummary.sleepHours}</span>
                <span className="vital-unit">hrs</span>
              </div>
            ) : null}
            {vitalsSummary.steps ? (
              <div className="vital-item" onClick={() => console.log('Navigate to vitals')}>
                <span className="vital-label">Steps</span>
                <span className="vital-value">{vitalsSummary.steps.toLocaleString()}</span>
                <span className="vital-unit">today</span>
              </div>
            ) : null}
            {!vitalsSummary.restingHeartRate && !vitalsSummary.hrv && !vitalsSummary.steps && (
              <EmptyState
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                }
                message="No vital signs recorded yet"
              />
            )}
          </div>
        </section>

        {/* AI Insights Panel */}
        <InsightsPanel dashboardData={dashboard} dataVersion={dataVersion} />

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
    </div>
  );
}

export default App;
