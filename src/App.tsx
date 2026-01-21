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

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [confirmPassphrase, setConfirmPassphrase] = useState('');
  const [error, setError] = useState('');
  const [summary, setSummary] = useState<HealthSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasDatabase, setHasDatabase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    checkDatabase();
  }, []);

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

  async function handleUnlock() {
    if (!passphrase) {
      setError('Please enter your passphrase');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const result = await invoke<HealthSummary>('unlock_database', { passphrase });
      setSummary(result);
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

    // Validation
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
      const result = await invoke<HealthSummary>('create_database', { passphrase });
      setSummary(result);
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
  return (
    <div className="container">
      <header>
        <h1>Biological Self</h1>
        <p className="subtitle">Your health, understood</p>
      </header>

      <main>
        <div className="dashboard-grid">
          <div className="card">
            <h2>Conditions</h2>
            <div className="stat">{summary?.totalConditions || 0}</div>
            <p>tracked conditions</p>
          </div>

          <div className="card">
            <h2>Medications</h2>
            <div className="stat">{summary?.totalMedications || 0}</div>
            <p>current medications</p>
          </div>

          <div className="card">
            <h2>Lab Results</h2>
            <div className="stat">{summary?.totalLabResults || 0}</div>
            <p>test results</p>
          </div>

          <div className="card">
            <h2>Whoop</h2>
            <div className="stat">{summary?.totalWhoopCycles || 0}</div>
            <p>recovery cycles</p>
          </div>

          <div className="card">
            <h2>Apple Health</h2>
            <div className="stat">{summary?.totalAppleHealthDays || 0}</div>
            <p>days of data</p>
          </div>
        </div>

        {summary?.lastUpdated && (
          <p className="last-updated">
            Last updated: {new Date(summary.lastUpdated).toLocaleDateString()}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
