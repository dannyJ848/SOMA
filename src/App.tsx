import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';

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

  useEffect(() => {
    checkDatabase();
  }, []);

  useEffect(() => {
    if (unlocked) {
      loadDashboard();
    }
  }, [unlocked]);

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
    } catch (err) {
      console.error('Failed to load dashboard:', err);
    } finally {
      setDashboardLoading(false);
    }
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

  // Dashboard (unlocked)
  if (dashboardLoading || !dashboard) {
    return (
      <div className="container">
        <div className="loading">Loading your health data...</div>
      </div>
    );
  }

  const { summary, activeConditions, currentMedications, recentLabs, vitalsSummary } = dashboard;

  return (
    <div className="container dashboard">
      <header>
        <h1>Biological Self</h1>
        <p className="subtitle">Your health, understood</p>
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
