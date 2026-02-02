import { useState, useEffect } from 'react';
import { invoke } from './tauri-invoke';

interface DashboardData {
  summary: {
    totalConditions: number;
    totalMedications: number;
    totalLabResults: number;
    totalWhoopCycles: number;
    totalAppleHealthDays: number;
  };
  activeConditions: Array<{
    name: string;
    status: string;
  }>;
  currentMedications: Array<{
    name: string;
    dosage?: string;
    frequency?: string;
  }>;
  recentLabs: Array<{
    testName: string;
    value: number | string;
    unit?: string;
    status?: string;
    collectedAt: string;
    trend?: 'up' | 'down' | 'stable' | null;
  }>;
  vitalsSummary: {
    restingHeartRate?: number;
    hrv?: number;
    sleepHours?: number;
    recoveryScore?: number;
    steps?: number;
  };
  recentSymptoms: Array<{
    description: string;
    severity: number;
    location?: string;
    onsetDate: string;
  }>;
}

interface AIHealthResponse {
  available: boolean;
}

interface InsightsPanelProps {
  dashboardData: DashboardData | null;
  dataVersion?: number; // Increment to trigger refresh
}

// Build a focused data summary for the AI
function buildDataSummary(data: DashboardData): string {
  const parts: string[] = [];

  // Active conditions
  if (data.activeConditions.length > 0) {
    parts.push(`Active conditions: ${data.activeConditions.map(c => c.name).join(', ')}`);
  }

  // Current medications
  if (data.currentMedications.length > 0) {
    parts.push(`Medications: ${data.currentMedications.map(m => m.name).join(', ')}`);
  }

  // Recent symptoms with dates
  if (data.recentSymptoms.length > 0) {
    const symptoms = data.recentSymptoms.slice(0, 5).map(s => {
      const date = new Date(s.onsetDate).toLocaleDateString();
      return `${s.description} (severity ${s.severity}/10, ${date})`;
    });
    parts.push(`Recent symptoms:\n${symptoms.join('\n')}`);
  }

  // Abnormal labs
  const abnormalLabs = data.recentLabs.filter(l => l.status === 'abnormal' || l.status === 'critical');
  if (abnormalLabs.length > 0) {
    const labs = abnormalLabs.slice(0, 5).map(l => {
      const trend = l.trend === 'up' ? '(trending up)' : l.trend === 'down' ? '(trending down)' : '';
      return `${l.testName}: ${l.value}${l.unit ? ` ${l.unit}` : ''} ${trend}`;
    });
    parts.push(`Abnormal lab results:\n${labs.join('\n')}`);
  }

  // Vitals summary
  const vitals: string[] = [];
  if (data.vitalsSummary.restingHeartRate) vitals.push(`Resting HR: ${data.vitalsSummary.restingHeartRate} bpm`);
  if (data.vitalsSummary.hrv) vitals.push(`HRV: ${data.vitalsSummary.hrv} ms`);
  if (data.vitalsSummary.sleepHours) vitals.push(`Sleep: ${data.vitalsSummary.sleepHours} hrs`);
  if (data.vitalsSummary.recoveryScore) vitals.push(`Recovery: ${data.vitalsSummary.recoveryScore}%`);
  if (vitals.length > 0) {
    parts.push(`Recent vitals: ${vitals.join(', ')}`);
  }

  // Data availability context
  parts.push(`\nData available: ${data.summary.totalLabResults} lab results, ${data.summary.totalWhoopCycles} Whoop cycles, ${data.summary.totalAppleHealthDays} days of Apple Health data`);

  return parts.join('\n\n');
}

const INSIGHTS_SYSTEM_PROMPT = `You are a health data analyst for an educational health app. Analyze the provided health data and generate 2-4 brief, objective insights.

Guidelines:
- Focus on patterns and correlations, NOT diagnoses
- Keep each insight to 1-2 sentences
- Be specific with observations (reference actual data values when relevant)
- Note concerning trends in labs or vitals
- Identify potential symptom patterns
- Suggest areas the user might want to discuss with their doctor

Format: Return a JSON array of insight strings. Example:
["Your HRV has been trending down over the past week, from 65ms to 45ms.", "Headache symptoms appear to correlate with days showing less than 6 hours of sleep.", "Your vitamin D level (18 ng/mL) is below the recommended range of 30-50 ng/mL."]

If there isn't enough meaningful data to generate insights, return: ["Insufficient data for pattern analysis. Continue tracking for more insights."]`;

export function InsightsPanel({ dashboardData, dataVersion }: InsightsPanelProps) {
  const [insights, setInsights] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiAvailable, setAiAvailable] = useState<boolean | null>(null);
  const [lastGeneratedVersion, setLastGeneratedVersion] = useState<number | null>(null);

  // Check AI availability after a delay to let the dashboard render first
  // The ai_health command is synchronous on the Rust side and can block
  useEffect(() => {
    const timer = setTimeout(() => {
      invoke<AIHealthResponse>('ai_health')
        .then(res => setAiAvailable(res.available))
        .catch(() => setAiAvailable(false));
    }, 500); // 500ms delay to allow UI to render
    return () => clearTimeout(timer);
  }, []);

  // Generate insights when data changes
  // Note: We intentionally omit generateInsights and lastGeneratedVersion from deps
  // - generateInsights is a function that reads state, including it would cause loops
  // - lastGeneratedVersion is checked inside the effect to prevent duplicate calls
  // - dashboardData is compared by reference, which is fine since App.tsx manages its lifecycle
  useEffect(() => {
    if (aiAvailable && dashboardData && dataVersion !== lastGeneratedVersion) {
      generateInsights();
    }
     
  }, [aiAvailable, dataVersion]);

  async function generateInsights() {
    if (!dashboardData || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const dataSummary = buildDataSummary(dashboardData);

      const response = await invoke<{ result: string[]; success: boolean }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: `Analyze this health data and generate insights:\n\n${dataSummary}` }],
          systemPrompt: INSIGHTS_SYSTEM_PROMPT,
          temperature: 0.5,
        },
      });

      if (response.success && Array.isArray(response.result)) {
        setInsights(response.result);
        setLastGeneratedVersion(dataVersion ?? 0);
      } else {
        setError('Failed to parse insights');
      }
    } catch (err) {
      console.error('Insights error:', err);
      setError('Unable to generate insights');
    } finally {
      setIsLoading(false);
    }
  }

  // Don't render if AI is unavailable
  if (aiAvailable === false) {
    return null;
  }

  // Show checking state briefly
  if (aiAvailable === null) {
    return null;
  }

  return (
    <section className="dashboard-section insights-panel">
      <h2 className="section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
        AI Insights
        {isLoading && <span className="insights-loading">Analyzing...</span>}
      </h2>

      <div className="insights-disclaimer">
        Educational observations based on your data. Not medical advice.
      </div>

      {error ? (
        <div className="insights-error">
          <span>{error}</span>
          <button onClick={generateInsights} className="retry-insights">Retry</button>
        </div>
      ) : isLoading && insights.length === 0 ? (
        <div className="insights-loading-state">
          <div className="insight-skeleton"></div>
          <div className="insight-skeleton"></div>
        </div>
      ) : insights.length > 0 ? (
        <ul className="insights-list">
          {insights.map((insight, index) => (
            <li key={index} className="insight-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="insights-empty">
          <p>No insights generated yet.</p>
          <button onClick={generateInsights} disabled={isLoading} className="generate-insights-button">
            Generate Insights
          </button>
        </div>
      )}

      {insights.length > 0 && !isLoading && (
        <button onClick={generateInsights} className="refresh-insights">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 4v6h-6M1 20v-6h6"/>
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
          </svg>
          Refresh
        </button>
      )}
    </section>
  );
}
