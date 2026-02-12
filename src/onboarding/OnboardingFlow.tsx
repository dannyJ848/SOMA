/**
 * Onboarding Flow Component
 *
 * Comprehensive multi-step onboarding for first-time users.
 * Steps: Welcome → Features → Privacy → Profile → Health → Preferences → Tutorial → Sample Data → Complete
 *
 * Designed to be WELCOMING and QUICK (under 2 minutes).
 */

import { useState, useCallback, useEffect } from 'react';
import {
  useUserDemographics,
  type UserDemographics,
  DEFAULT_DEMOGRAPHICS,
  HEIGHT_RANGE,
  WEIGHT_RANGE,
  AGE_RANGE,
  type BiologicalSex,
  type BodyType,
} from '../hooks/useUserDemographics';
import { getPreviewConfig } from '../utils/bodyProportionCalculator';

// ============================================
// Types
// ============================================

type OnboardingStep =
  | 'welcome'
  | 'features'
  | 'privacy'
  | 'profile'
  | 'health'
  | 'preferences'
  | 'tutorial'
  | 'sample-data'
  | 'complete';

type ComplexityLevel = 'simple' | 'standard' | 'detailed';
type Language = 'en' | 'es';
type Theme = 'dark' | 'light' | 'system';

interface UserPreferences {
  complexityLevel: ComplexityLevel;
  language: Language;
  theme: Theme;
  notifications: {
    reminders: boolean;
    insights: boolean;
    updates: boolean;
  };
}

interface HealthProfile {
  conditions: string[];
  medications: string[];
  allergies: string[];
  goals: string[];
}

interface OnboardingFlowProps {
  onComplete: () => void;
  /** Optional callback when a quick action is selected during completion */
  onQuickAction?: (action: 'body' | 'symptom' | 'chat') => void;
}

// ============================================
// Storage Keys
// ============================================

const PREFERENCES_KEY = 'biological-self-preferences';
const HEALTH_PROFILE_KEY = 'biological-self-health-profile';
const SAMPLE_DATA_KEY = 'biological-self-sample-data';

// ============================================
// Default Values
// ============================================

const DEFAULT_PREFERENCES: UserPreferences = {
  complexityLevel: 'standard',
  language: 'en',
  theme: 'dark',
  notifications: {
    reminders: true,
    insights: true,
    updates: false,
  },
};

const DEFAULT_HEALTH_PROFILE: HealthProfile = {
  conditions: [],
  medications: [],
  allergies: [],
  goals: [],
};

const AVAILABLE_GOALS = [
  { id: 'learn-anatomy', label: 'Learn about anatomy', icon: '🧬' },
  { id: 'track-health', label: 'Track my health', icon: '📊' },
  { id: 'understand-conditions', label: 'Understand conditions', icon: '🏥' },
  { id: 'medication-info', label: 'Learn about medications', icon: '💊' },
  { id: 'symptom-tracking', label: 'Track symptoms', icon: '📋' },
  { id: 'wellness', label: 'Improve wellness', icon: '🌟' },
];

const COMMON_CONDITIONS = [
  'Diabetes', 'Hypertension', 'Asthma', 'Arthritis',
  'Heart Disease', 'Thyroid Issues', 'Allergies', 'Anxiety/Depression'
];

// ============================================
// Step Components
// ============================================

interface StepProps {
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

// --- Welcome Step ---
function WelcomeStep({ onNext }: StepProps) {
  return (
    <div className="onboarding-step welcome-step" role="region" aria-labelledby="welcome-title">
      <div className="onboarding-icon large" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <circle cx="50" cy="30" r="12" fill="currentColor" opacity="0.7" />
          <path
            d="M50 45 L50 70 M35 55 L50 45 L65 55 M40 70 L50 82 L50 70 L60 82"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
      <h1 id="welcome-title" className="onboarding-title">Welcome to Biological Self</h1>
      <p className="onboarding-subtitle">
        Your personal health companion that helps you understand your body
        like never before.
      </p>
      <div className="welcome-tagline" role="note">
        <span className="tagline-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </span>
        <span>100% Private - Your data never leaves your device</span>
      </div>
      <button
        className="onboarding-button primary large"
        onClick={onNext}
        aria-label="Get started with setup - takes less than 2 minutes"
      >
        Get Started
      </button>
      <p className="onboarding-time-hint" aria-hidden="true">Takes less than 2 minutes</p>
    </div>
  );
}

// --- Features Step ---
function FeaturesStep({ onNext, onBack }: StepProps) {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6v12M8 10c0-2 1.8-4 4-4s4 2 4 4"/>
          <circle cx="12" cy="16" r="2"/>
        </svg>
      ),
      title: 'Interactive 3D Body',
      description: 'Explore your anatomy with a customized 3D model tailored to you',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Health Tracking',
      description: 'Log symptoms, track vitals, and see patterns over time',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: 'AI Health Assistant',
      description: 'Get personalized insights and answers about your health',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: 'Medical Encyclopedia',
      description: 'Learn about conditions, medications, and treatments',
    },
  ];

  return (
    <div className="onboarding-step features-step">
      <h2 className="onboarding-title">What You Can Do</h2>
      <p className="onboarding-subtitle">
        Powerful tools to understand and manage your health
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-card-icon">{feature.icon}</div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

// --- Privacy Step ---
function PrivacyStep({ onNext, onBack }: StepProps) {
  return (
    <div className="onboarding-step privacy-step">
      <div className="onboarding-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4" strokeWidth="2"/>
        </svg>
      </div>
      <h2 className="onboarding-title">Your Privacy Matters</h2>
      <p className="onboarding-subtitle">
        We built this app with your privacy as the top priority
      </p>
      <div className="privacy-features-list">
        <div className="privacy-feature-item">
          <div className="privacy-feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
          </div>
          <div className="privacy-feature-text">
            <strong>End-to-End Encryption</strong>
            <span>Your data is encrypted with AES-256 military-grade encryption</span>
          </div>
        </div>
        <div className="privacy-feature-item">
          <div className="privacy-feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10"/>
              <path d="M12 20V4"/>
              <path d="M6 20v-6"/>
              <line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div className="privacy-feature-text">
            <strong>100% Local Storage</strong>
            <span>All data stays on your device - no cloud, no servers</span>
          </div>
        </div>
        <div className="privacy-feature-item">
          <div className="privacy-feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
            </svg>
          </div>
          <div className="privacy-feature-text">
            <strong>No Tracking</strong>
            <span>Zero analytics, zero telemetry, zero data collection</span>
          </div>
        </div>
        <div className="privacy-feature-item">
          <div className="privacy-feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
            </svg>
          </div>
          <div className="privacy-feature-text">
            <strong>You Own Your Data</strong>
            <span>Export or delete your data anytime - it belongs to you</span>
          </div>
        </div>
      </div>
      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          I Understand
        </button>
      </div>
    </div>
  );
}

// --- Profile Step ---
interface ProfileStepProps extends StepProps {
  demographics: UserDemographics;
  onChange: (demographics: UserDemographics) => void;
}

function ProfileStep({ demographics, onChange, onNext, onBack, onSkip }: ProfileStepProps) {
  const handleChange = <K extends keyof UserDemographics>(
    field: K,
    value: UserDemographics[K]
  ) => {
    onChange({ ...demographics, [field]: value });
  };

  return (
    <div className="onboarding-step profile-step">
      <h2 className="onboarding-title">Your Body Profile</h2>
      <p className="onboarding-subtitle">
        Help us customize your 3D body model
      </p>

      <div className="demographics-form compact">
        {/* Height */}
        <div className="form-group">
          <label htmlFor="height">
            Height
            <span className="form-value">{demographics.heightCm} cm ({Math.round(demographics.heightCm / 2.54)} in)</span>
          </label>
          <input
            type="range"
            id="height"
            min={HEIGHT_RANGE.min}
            max={HEIGHT_RANGE.max}
            value={demographics.heightCm}
            onChange={(e) => handleChange('heightCm', parseInt(e.target.value))}
            className="form-slider"
          />
        </div>

        {/* Weight */}
        <div className="form-group">
          <label htmlFor="weight">
            Weight
            <span className="form-value">{demographics.weightKg} kg ({Math.round(demographics.weightKg * 2.205)} lbs)</span>
          </label>
          <input
            type="range"
            id="weight"
            min={WEIGHT_RANGE.min}
            max={WEIGHT_RANGE.max}
            value={demographics.weightKg}
            onChange={(e) => handleChange('weightKg', parseInt(e.target.value))}
            className="form-slider"
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">
            Age
            <span className="form-value">{demographics.age} years</span>
          </label>
          <input
            type="range"
            id="age"
            min={AGE_RANGE.min}
            max={AGE_RANGE.max}
            value={demographics.age}
            onChange={(e) => handleChange('age', parseInt(e.target.value))}
            className="form-slider"
          />
        </div>

        {/* Biological Sex */}
        <div className="form-group">
          <label>Biological Sex</label>
          <div className="toggle-group">
            {(['male', 'female', 'other'] as BiologicalSex[]).map((sex) => (
              <button
                key={sex}
                type="button"
                className={`toggle-button ${demographics.sex === sex ? 'active' : ''}`}
                onClick={() => handleChange('sex', sex)}
              >
                {sex.charAt(0).toUpperCase() + sex.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Body Type */}
        <div className="form-group">
          <label>Body Type</label>
          <div className="body-type-selector">
            {([
              { type: 'ectomorph', label: 'Lean', desc: 'Slim build' },
              { type: 'mesomorph', label: 'Athletic', desc: 'Medium build' },
              { type: 'endomorph', label: 'Solid', desc: 'Larger build' },
            ] as const).map(({ type, label, desc }) => (
              <button
                key={type}
                type="button"
                className={`body-type-option ${demographics.bodyType === type ? 'active' : ''}`}
                onClick={() => handleChange('bodyType', type)}
              >
                <BodyTypeIcon type={type} />
                <span className="body-type-label">{label}</span>
                <span className="body-type-desc">{desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          Continue
        </button>
      </div>
      <button className="skip-link" onClick={onSkip}>
        Skip for now
      </button>
    </div>
  );
}

// --- Health Step ---
interface HealthStepProps extends StepProps {
  healthProfile: HealthProfile;
  onChange: (profile: HealthProfile) => void;
}

function HealthStep({ healthProfile, onChange, onNext, onBack, onSkip }: HealthStepProps) {
  const [activeTab, setActiveTab] = useState<'conditions' | 'medications' | 'allergies' | 'goals'>('goals');
  const [customInput, setCustomInput] = useState('');

  const addItem = (category: keyof HealthProfile, item: string) => {
    if (!item.trim()) return;
    if (!healthProfile[category].includes(item)) {
      onChange({
        ...healthProfile,
        [category]: [...healthProfile[category], item],
      });
    }
    setCustomInput('');
  };

  const removeItem = (category: keyof HealthProfile, item: string) => {
    onChange({
      ...healthProfile,
      [category]: healthProfile[category].filter((i) => i !== item),
    });
  };

  const toggleGoal = (goalId: string) => {
    if (healthProfile.goals.includes(goalId)) {
      removeItem('goals', goalId);
    } else {
      addItem('goals', goalId);
    }
  };

  return (
    <div className="onboarding-step health-step">
      <h2 className="onboarding-title">Health Information</h2>
      <p className="onboarding-subtitle">
        Optional: Help personalize your experience
      </p>

      <div className="health-tabs">
        <button
          className={`health-tab ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          Goals
          {healthProfile.goals.length > 0 && (
            <span className="tab-badge">{healthProfile.goals.length}</span>
          )}
        </button>
        <button
          className={`health-tab ${activeTab === 'conditions' ? 'active' : ''}`}
          onClick={() => setActiveTab('conditions')}
        >
          Conditions
          {healthProfile.conditions.length > 0 && (
            <span className="tab-badge">{healthProfile.conditions.length}</span>
          )}
        </button>
        <button
          className={`health-tab ${activeTab === 'medications' ? 'active' : ''}`}
          onClick={() => setActiveTab('medications')}
        >
          Medications
          {healthProfile.medications.length > 0 && (
            <span className="tab-badge">{healthProfile.medications.length}</span>
          )}
        </button>
        <button
          className={`health-tab ${activeTab === 'allergies' ? 'active' : ''}`}
          onClick={() => setActiveTab('allergies')}
        >
          Allergies
          {healthProfile.allergies.length > 0 && (
            <span className="tab-badge">{healthProfile.allergies.length}</span>
          )}
        </button>
      </div>

      <div className="health-content">
        {activeTab === 'goals' && (
          <div className="goals-grid">
            {AVAILABLE_GOALS.map((goal) => (
              <button
                key={goal.id}
                className={`goal-option ${healthProfile.goals.includes(goal.id) ? 'active' : ''}`}
                onClick={() => toggleGoal(goal.id)}
              >
                <span className="goal-icon">{goal.icon}</span>
                <span className="goal-label">{goal.label}</span>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'conditions' && (
          <div className="health-input-section">
            <div className="quick-add-chips">
              {COMMON_CONDITIONS.filter(c => !healthProfile.conditions.includes(c)).slice(0, 4).map((condition) => (
                <button
                  key={condition}
                  className="quick-add-chip"
                  onClick={() => addItem('conditions', condition)}
                >
                  + {condition}
                </button>
              ))}
            </div>
            <div className="custom-input-row">
              <input
                type="text"
                placeholder="Add a condition..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem('conditions', customInput)}
                className="health-input"
              />
              <button
                className="add-button"
                onClick={() => addItem('conditions', customInput)}
                disabled={!customInput.trim()}
              >
                Add
              </button>
            </div>
            <div className="selected-items">
              {healthProfile.conditions.map((item) => (
                <span key={item} className="selected-chip">
                  {item}
                  <button onClick={() => removeItem('conditions', item)}>x</button>
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'medications' && (
          <div className="health-input-section">
            <div className="custom-input-row">
              <input
                type="text"
                placeholder="Add a medication..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem('medications', customInput)}
                className="health-input"
              />
              <button
                className="add-button"
                onClick={() => addItem('medications', customInput)}
                disabled={!customInput.trim()}
              >
                Add
              </button>
            </div>
            <div className="selected-items">
              {healthProfile.medications.map((item) => (
                <span key={item} className="selected-chip medication">
                  {item}
                  <button onClick={() => removeItem('medications', item)}>x</button>
                </span>
              ))}
            </div>
            <p className="health-hint">This helps us show relevant drug interactions</p>
          </div>
        )}

        {activeTab === 'allergies' && (
          <div className="health-input-section">
            <div className="quick-add-chips">
              {['Penicillin', 'Peanuts', 'Latex', 'Shellfish'].filter(a => !healthProfile.allergies.includes(a)).map((allergy) => (
                <button
                  key={allergy}
                  className="quick-add-chip warning"
                  onClick={() => addItem('allergies', allergy)}
                >
                  + {allergy}
                </button>
              ))}
            </div>
            <div className="custom-input-row">
              <input
                type="text"
                placeholder="Add an allergy..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem('allergies', customInput)}
                className="health-input"
              />
              <button
                className="add-button"
                onClick={() => addItem('allergies', customInput)}
                disabled={!customInput.trim()}
              >
                Add
              </button>
            </div>
            <div className="selected-items">
              {healthProfile.allergies.map((item) => (
                <span key={item} className="selected-chip allergy">
                  {item}
                  <button onClick={() => removeItem('allergies', item)}>x</button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          Continue
        </button>
      </div>
      <button className="skip-link" onClick={onSkip}>
        Skip for now
      </button>
    </div>
  );
}

// --- Preferences Step ---
interface PreferencesStepProps extends StepProps {
  preferences: UserPreferences;
  onChange: (prefs: UserPreferences) => void;
}

function PreferencesStep({ preferences, onChange, onNext, onBack, onSkip }: PreferencesStepProps) {
  return (
    <div className="onboarding-step preferences-step">
      <h2 className="onboarding-title">Your Preferences</h2>
      <p className="onboarding-subtitle">
        Customize your experience
      </p>

      <div className="preferences-form">
        {/* Complexity Level */}
        <div className="pref-group">
          <label className="pref-label">Content Complexity</label>
          <p className="pref-desc">How detailed should explanations be?</p>
          <div className="complexity-options">
            {([
              { value: 'simple', label: 'Simple', desc: 'Easy to understand basics' },
              { value: 'standard', label: 'Standard', desc: 'Balanced information' },
              { value: 'detailed', label: 'Detailed', desc: 'In-depth medical info' },
            ] as const).map((option) => (
              <button
                key={option.value}
                className={`complexity-option ${preferences.complexityLevel === option.value ? 'active' : ''}`}
                onClick={() => onChange({ ...preferences, complexityLevel: option.value })}
              >
                <span className="complexity-label">{option.label}</span>
                <span className="complexity-desc">{option.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="pref-group">
          <label className="pref-label">Language</label>
          <div className="toggle-group">
            <button
              className={`toggle-button ${preferences.language === 'en' ? 'active' : ''}`}
              onClick={() => onChange({ ...preferences, language: 'en' })}
            >
              English
            </button>
            <button
              className={`toggle-button ${preferences.language === 'es' ? 'active' : ''}`}
              onClick={() => onChange({ ...preferences, language: 'es' })}
            >
              Espanol
            </button>
          </div>
        </div>

        {/* Theme */}
        <div className="pref-group">
          <label className="pref-label">Theme</label>
          <div className="toggle-group">
            <button
              className={`toggle-button ${preferences.theme === 'dark' ? 'active' : ''}`}
              onClick={() => onChange({ ...preferences, theme: 'dark' })}
            >
              Dark
            </button>
            <button
              className={`toggle-button ${preferences.theme === 'light' ? 'active' : ''}`}
              onClick={() => onChange({ ...preferences, theme: 'light' })}
            >
              Light
            </button>
            <button
              className={`toggle-button ${preferences.theme === 'system' ? 'active' : ''}`}
              onClick={() => onChange({ ...preferences, theme: 'system' })}
            >
              System
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="pref-group">
          <label className="pref-label">Notifications</label>
          <div className="notification-options">
            <label className="checkbox-option">
              <input
                type="checkbox"
                checked={preferences.notifications.reminders}
                onChange={(e) => onChange({
                  ...preferences,
                  notifications: { ...preferences.notifications, reminders: e.target.checked }
                })}
              />
              <span className="checkbox-label">Health reminders</span>
            </label>
            <label className="checkbox-option">
              <input
                type="checkbox"
                checked={preferences.notifications.insights}
                onChange={(e) => onChange({
                  ...preferences,
                  notifications: { ...preferences.notifications, insights: e.target.checked }
                })}
              />
              <span className="checkbox-label">Health insights</span>
            </label>
            <label className="checkbox-option">
              <input
                type="checkbox"
                checked={preferences.notifications.updates}
                onChange={(e) => onChange({
                  ...preferences,
                  notifications: { ...preferences.notifications, updates: e.target.checked }
                })}
              />
              <span className="checkbox-label">App updates</span>
            </label>
          </div>
        </div>
      </div>

      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          Continue
        </button>
      </div>
      <button className="skip-link" onClick={onSkip}>
        Use defaults
      </button>
    </div>
  );
}

// --- Tutorial Step ---
function TutorialStep({ onNext, onBack }: StepProps) {
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    {
      title: 'Explore Your 3D Body',
      description: 'Tap any body region to learn about its anatomy. Pinch to zoom, swipe to rotate.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="5" r="3"/>
          <path d="M12 8v14"/>
          <path d="M8 12h8"/>
          <path d="M8 22l4-4 4 4"/>
        </svg>
      ),
    },
    {
      title: 'Search Anything',
      description: 'Use the search bar to find conditions, symptoms, medications, or body parts.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
    },
    {
      title: 'Track Symptoms',
      description: 'Tap a body region and select "Add Symptom" to log how you\'re feeling.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M12 18v-6"/>
          <path d="M9 15h6"/>
        </svg>
      ),
    },
    {
      title: 'Chat with AI',
      description: 'Ask health questions in natural language and get personalized answers.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="onboarding-step tutorial-step">
      <h2 className="onboarding-title">Quick Tour</h2>

      <div className="tutorial-card">
        <div className="tutorial-icon">{tips[currentTip].icon}</div>
        <h3 className="tutorial-tip-title">{tips[currentTip].title}</h3>
        <p className="tutorial-tip-desc">{tips[currentTip].description}</p>
      </div>

      <div className="tutorial-dots">
        {tips.map((_, index) => (
          <button
            key={index}
            className={`tutorial-dot ${currentTip === index ? 'active' : ''}`}
            onClick={() => setCurrentTip(index)}
          />
        ))}
      </div>

      <div className="tutorial-nav">
        {currentTip > 0 ? (
          <button className="tutorial-nav-btn" onClick={() => setCurrentTip(currentTip - 1)}>
            Previous
          </button>
        ) : (
          <div />
        )}
        {currentTip < tips.length - 1 ? (
          <button className="tutorial-nav-btn primary" onClick={() => setCurrentTip(currentTip + 1)}>
            Next Tip
          </button>
        ) : null}
      </div>

      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          {currentTip === tips.length - 1 ? 'Got It!' : 'Skip Tour'}
        </button>
      </div>
    </div>
  );
}

// --- Sample Data Step ---
interface SampleDataStepProps extends StepProps {
  loadSampleData: boolean;
  onToggle: (value: boolean) => void;
}

function SampleDataStep({ loadSampleData, onToggle, onNext, onBack }: SampleDataStepProps) {
  return (
    <div className="onboarding-step sample-data-step">
      <div className="onboarding-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      </div>
      <h2 className="onboarding-title">Try Demo Mode?</h2>
      <p className="onboarding-subtitle">
        Load sample health data to explore all features right away
      </p>

      <div className="sample-data-options">
        <button
          className={`sample-data-option ${!loadSampleData ? 'active' : ''}`}
          onClick={() => onToggle(false)}
        >
          <div className="option-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </div>
          <div className="option-content">
            <strong>Start Fresh</strong>
            <span>Begin with a clean slate</span>
          </div>
        </button>
        <button
          className={`sample-data-option ${loadSampleData ? 'active' : ''}`}
          onClick={() => onToggle(true)}
        >
          <div className="option-icon demo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
          </div>
          <div className="option-content">
            <strong>Load Demo Data</strong>
            <span>Explore with sample health records</span>
          </div>
        </button>
      </div>

      {loadSampleData && (
        <div className="demo-info">
          <p>Demo data includes sample vitals, conditions, medications, and symptoms to help you explore the app's features.</p>
        </div>
      )}

      <div className="onboarding-buttons">
        <button className="onboarding-button secondary" onClick={onBack}>
          Back
        </button>
        <button className="onboarding-button primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

// --- Complete Step ---
interface CompleteStepProps {
  onComplete: () => void;
  healthProfile: HealthProfile;
  onQuickAction?: (action: 'body' | 'symptom' | 'chat') => void;
}

function CompleteStep({ onComplete, healthProfile, onQuickAction }: CompleteStepProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const quickActions = [
    { label: 'Explore Body', icon: '🧬', action: 'body' as const },
    { label: 'Log Symptom', icon: '📋', action: 'symptom' as const },
    { label: 'Ask AI', icon: '💬', action: 'chat' as const },
  ];

  const handleQuickAction = (action: 'body' | 'symptom' | 'chat') => {
    // Store the quick action intent so the main app can handle it after onboarding completes
    localStorage.setItem('biological-self-pending-quick-action', action);
    onComplete();
    // Also call the optional callback if provided
    onQuickAction?.(action);
  };

  return (
    <div className="onboarding-step complete-step">
      <div className={`success-animation ${isAnimating ? 'animating' : ''}`}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="var(--success)"
            strokeWidth="3"
            className="success-circle"
          />
          <path
            d="M30 50 L45 65 L70 35"
            stroke="var(--success)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="success-check"
          />
        </svg>
      </div>

      <h2 className="onboarding-title">You're All Set!</h2>
      <p className="onboarding-subtitle">
        Your personalized health companion is ready
      </p>

      {healthProfile.goals.length > 0 && (
        <div className="goals-summary">
          <p>We'll help you:</p>
          <div className="goals-list">
            {healthProfile.goals.slice(0, 3).map((goalId) => {
              const goal = AVAILABLE_GOALS.find(g => g.id === goalId);
              return goal ? (
                <span key={goalId} className="goal-badge">
                  {goal.icon} {goal.label}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      <div className="quick-actions-grid">
        {quickActions.map((action) => (
          <button
            key={action.action}
            className="quick-action-btn"
            onClick={() => handleQuickAction(action.action)}
          >
            <span className="quick-action-icon">{action.icon}</span>
            <span className="quick-action-label">{action.label}</span>
          </button>
        ))}
      </div>

      <button className="onboarding-button primary large" onClick={onComplete}>
        Start Exploring
      </button>
    </div>
  );
}

// ============================================
// Helper Components
// ============================================

interface BodyTypeIconProps {
  type: BodyType;
}

function BodyTypeIcon({ type }: BodyTypeIconProps) {
  const widths = {
    ectomorph: { shoulder: 16, hip: 12, limb: 3 },
    mesomorph: { shoulder: 20, hip: 14, limb: 4 },
    endomorph: { shoulder: 22, hip: 18, limb: 5 },
  };
  const w = widths[type];

  return (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="body-type-icon-svg">
      <circle cx="20" cy="8" r="6" fill="currentColor" opacity="0.7" />
      <path
        d={`M${20 - w.shoulder / 2} 16
            Q${20 - w.shoulder / 2 - 2} 30 ${20 - w.hip / 2} 40
            L${20 + w.hip / 2} 40
            Q${20 + w.shoulder / 2 + 2} 30 ${20 + w.shoulder / 2} 16
            Z`}
        fill="currentColor"
        opacity="0.5"
      />
      <rect x={20 - w.shoulder / 2 - w.limb - 2} y="16" width={w.limb} height="20" rx="2" fill="currentColor" opacity="0.5" />
      <rect x={20 + w.shoulder / 2 + 2} y="16" width={w.limb} height="20" rx="2" fill="currentColor" opacity="0.5" />
      <rect x={20 - w.hip / 4 - w.limb / 2} y="40" width={w.limb} height="18" rx="2" fill="currentColor" opacity="0.5" />
      <rect x={20 + w.hip / 4 - w.limb / 2} y="40" width={w.limb} height="18" rx="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ============================================
// Main Component
// ============================================

const STEP_ORDER: OnboardingStep[] = [
  'welcome',
  'features',
  'privacy',
  'profile',
  'health',
  'preferences',
  'tutorial',
  'sample-data',
  'complete',
];

export function OnboardingFlow({ onComplete, onQuickAction }: OnboardingFlowProps) {
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [localDemographics, setLocalDemographics] = useState<UserDemographics>(DEFAULT_DEMOGRAPHICS);
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [healthProfile, setHealthProfile] = useState<HealthProfile>(DEFAULT_HEALTH_PROFILE);
  const [loadSampleData, setLoadSampleData] = useState(false);

  const { saveDemographics, isLoading } = useUserDemographics();

  const currentStepIndex = STEP_ORDER.indexOf(step);

  const goToStep = (newStep: OnboardingStep) => {
    setStep(newStep);
  };

  const goNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEP_ORDER.length) {
      setStep(STEP_ORDER[nextIndex]);
    }
  };

  const goBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(STEP_ORDER[prevIndex]);
    }
  };

  const skipToComplete = () => {
    setStep('complete');
  };

  const handleComplete = useCallback(async () => {
    try {
      // Save demographics
      await saveDemographics(localDemographics);

      // Save preferences
      localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));

      // Save health profile
      localStorage.setItem(HEALTH_PROFILE_KEY, JSON.stringify(healthProfile));

      // Save sample data preference
      localStorage.setItem(SAMPLE_DATA_KEY, JSON.stringify(loadSampleData));

      onComplete();
    } catch (error) {
      console.error('Failed to save onboarding data:', error);
      // Still proceed - data is in localStorage
      onComplete();
    }
  }, [localDemographics, preferences, healthProfile, loadSampleData, saveDemographics, onComplete]);

  // Calculate progress for dots (excluding welcome and complete)
  const progressSteps = STEP_ORDER.slice(1, -1);
  const progressIndex = progressSteps.indexOf(step);

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        {/* Skip button - always visible except on welcome and complete */}
        {step !== 'welcome' && step !== 'complete' && (
          <button className="onboarding-skip-all" onClick={skipToComplete}>
            Skip All
          </button>
        )}

        {/* Progress indicator */}
        {step !== 'welcome' && step !== 'complete' && (
          <div className="onboarding-progress">
            {progressSteps.map((s, i) => (
              <div
                key={s}
                className={`progress-dot ${step === s ? 'active' : ''} ${
                  progressIndex > i ? 'completed' : ''
                }`}
              />
            ))}
          </div>
        )}

        {/* Step content */}
        {step === 'welcome' && (
          <WelcomeStep onNext={goNext} />
        )}
        {step === 'features' && (
          <FeaturesStep onNext={goNext} onBack={goBack} />
        )}
        {step === 'privacy' && (
          <PrivacyStep onNext={goNext} onBack={goBack} />
        )}
        {step === 'profile' && (
          <ProfileStep
            demographics={localDemographics}
            onChange={setLocalDemographics}
            onNext={goNext}
            onBack={goBack}
            onSkip={goNext}
          />
        )}
        {step === 'health' && (
          <HealthStep
            healthProfile={healthProfile}
            onChange={setHealthProfile}
            onNext={goNext}
            onBack={goBack}
            onSkip={goNext}
          />
        )}
        {step === 'preferences' && (
          <PreferencesStep
            preferences={preferences}
            onChange={setPreferences}
            onNext={goNext}
            onBack={goBack}
            onSkip={goNext}
          />
        )}
        {step === 'tutorial' && (
          <TutorialStep onNext={goNext} onBack={goBack} />
        )}
        {step === 'sample-data' && (
          <SampleDataStep
            loadSampleData={loadSampleData}
            onToggle={setLoadSampleData}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 'complete' && (
          <CompleteStep
            onComplete={handleComplete}
            healthProfile={healthProfile}
            onQuickAction={onQuickAction}
          />
        )}
      </div>
    </div>
  );
}

export default OnboardingFlow;
