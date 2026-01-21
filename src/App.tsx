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
  const [error, setError] = useState('');
  const [summary, setSummary] = useState<HealthSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasDatabase, setHasDatabase] = useState(false);

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
    setError('');
    try {
      const result = await invoke<HealthSummary>('unlock_database', { passphrase });
      setSummary(result);
      setUnlocked(true);
    } catch (err) {
      setError(String(err));
    }
  }

  async function handleCreate() {
    setError('');
    if (passphrase.length < 8) {
      setError('Passphrase must be at least 8 characters');
      return;
    }
    try {
      const result = await invoke<HealthSummary>('create_database', { passphrase });
      setSummary(result);
      setUnlocked(true);
      setHasDatabase(true);
    } catch (err) {
      setError(String(err));
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

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
          <p className="subtitle">
            {hasDatabase
              ? 'Enter your passphrase to unlock your health data'
              : 'Create a passphrase to secure your health data'}
          </p>

          <div className="privacy-notice">
            <strong>100% Private</strong>
            <span>All data stays on this device. No network calls, ever.</span>
          </div>

          <input
            type="password"
            placeholder="Enter passphrase"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (hasDatabase ? handleUnlock() : handleCreate())}
          />

          {error && <div className="error">{error}</div>}

          <button onClick={hasDatabase ? handleUnlock : handleCreate}>
            {hasDatabase ? 'Unlock' : 'Create Database'}
          </button>
        </div>
      </div>
    );
  }

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
