/**
 * Vital Education Component
 *
 * Educational content about vital signs including
 * normal ranges, what affects them, and health tips.
 */

import { useState, useMemo, useCallback } from 'react';
import type { VitalType } from '../../core/vitals/types.js';
import { getVitalDisplayName, getVitalColor } from '../../core/vitals/index.js';

// ============================================
// Types
// ============================================

interface VitalEducationProps {
  selectedVital: VitalType | null;
  onSelectVital: (vital: VitalType | null) => void;
}

interface VitalInfo {
  type: VitalType;
  name: string;
  icon: string;
  description: string;
  normalRanges: {
    label: string;
    range: string;
    note?: string;
  }[];
  whatAffectsIt: string[];
  whenToConcern: string[];
  healthTips: string[];
  funFact?: string;
}

// ============================================
// Vital Information Data
// ============================================

const VITAL_INFO: VitalInfo[] = [
  {
    type: 'heart-rate',
    name: 'Heart Rate',
    icon: '❤️',
    description:
      'Heart rate is the number of times your heart beats per minute. It is a key indicator of cardiovascular health and fitness level.',
    normalRanges: [
      { label: 'Resting (Adult)', range: '60-100 bpm', note: 'Athletes may have 40-60 bpm' },
      { label: 'During Exercise', range: '50-85% of max HR' },
      { label: 'Maximum HR', range: '220 - your age' },
      { label: 'During Sleep', range: '40-50 bpm lower than resting' },
    ],
    whatAffectsIt: [
      'Physical activity and exercise',
      'Stress and anxiety levels',
      'Caffeine and alcohol consumption',
      'Medications (beta blockers, stimulants)',
      'Sleep quality and fatigue',
      'Dehydration',
      'Illness and fever',
    ],
    whenToConcern: [
      'Resting heart rate consistently above 100 bpm (tachycardia)',
      'Resting heart rate below 60 bpm with symptoms (bradycardia)',
      'Irregular heartbeat or palpitations',
      'Rapid heart rate with dizziness or shortness of breath',
      'Sudden changes from your baseline',
    ],
    healthTips: [
      'Regular aerobic exercise can lower resting heart rate',
      'Practice stress-reduction techniques like meditation',
      'Limit caffeine intake, especially in the afternoon',
      'Stay well hydrated throughout the day',
      'Get 7-9 hours of quality sleep',
    ],
    funFact:
      'Your heart beats about 100,000 times per day, pumping approximately 2,000 gallons of blood!',
  },
  {
    type: 'hrv',
    name: 'Heart Rate Variability',
    icon: '📈',
    description:
      'Heart rate variability (HRV) measures the variation in time between each heartbeat. Higher HRV generally indicates better cardiovascular fitness and stress resilience.',
    normalRanges: [
      { label: 'Young Adults', range: '55-105 ms', note: 'RMSSD measurement' },
      { label: 'Middle-aged', range: '25-45 ms' },
      { label: 'Older Adults', range: '15-35 ms' },
      { label: 'Athletes', range: 'Often higher than average' },
    ],
    whatAffectsIt: [
      'Physical fitness level',
      'Sleep quality and duration',
      'Stress and emotional state',
      'Alcohol consumption',
      'Training load and recovery',
      'Age (decreases with age)',
      'Health conditions',
    ],
    whenToConcern: [
      'Consistently low HRV for your age group',
      'Sudden significant drops in HRV',
      'HRV not recovering after rest periods',
      'Low HRV with other symptoms like fatigue',
    ],
    healthTips: [
      'Prioritize consistent, quality sleep',
      'Practice regular breathing exercises',
      'Balance intense workouts with recovery',
      'Limit alcohol, especially before bed',
      'Manage chronic stress through mindfulness',
    ],
    funFact:
      'HRV is controlled by the autonomic nervous system - the same system that controls digestion and breathing!',
  },
  {
    type: 'blood-pressure',
    name: 'Blood Pressure',
    icon: '🩺',
    description:
      'Blood pressure is the force of blood pushing against artery walls. It is measured in two numbers: systolic (when heart beats) over diastolic (between beats).',
    normalRanges: [
      { label: 'Normal', range: 'Less than 120/80 mmHg' },
      { label: 'Elevated', range: '120-129/less than 80 mmHg' },
      { label: 'High Stage 1', range: '130-139/80-89 mmHg' },
      { label: 'High Stage 2', range: '140+/90+ mmHg' },
    ],
    whatAffectsIt: [
      'Diet (especially salt intake)',
      'Physical activity levels',
      'Weight and body composition',
      'Stress and anxiety',
      'Smoking and alcohol',
      'Sleep quality',
      'Genetics',
    ],
    whenToConcern: [
      'Readings consistently above 130/80 mmHg',
      'Severe headache with high readings',
      'Vision problems with high readings',
      'Chest pain or difficulty breathing',
      'Blood pressure over 180/120 mmHg (emergency)',
    ],
    healthTips: [
      'Reduce sodium intake to less than 2,300mg daily',
      'Exercise at least 150 minutes per week',
      'Maintain a healthy weight',
      'Limit alcohol to 1-2 drinks per day',
      'Eat potassium-rich foods like bananas and spinach',
    ],
    funFact:
      'Your blood vessels, if laid end to end, would stretch about 60,000 miles - enough to circle the Earth more than twice!',
  },
  {
    type: 'oxygen-saturation',
    name: 'Blood Oxygen',
    icon: '🫁',
    description:
      'Blood oxygen saturation (SpO2) measures the percentage of hemoglobin in your blood that is carrying oxygen. It is a vital indicator of respiratory health.',
    normalRanges: [
      { label: 'Normal', range: '95-100%' },
      { label: 'Concerning', range: '91-94%', note: 'May need monitoring' },
      { label: 'Low (Hypoxemia)', range: 'Below 90%', note: 'Seek medical attention' },
      { label: 'During Sleep', range: 'Briefly may drop to 90%' },
    ],
    whatAffectsIt: [
      'Altitude (lower at high elevations)',
      'Respiratory conditions',
      'Cardiovascular health',
      'Anemia',
      'Sleep apnea',
      'Exercise intensity',
      'Smoking',
    ],
    whenToConcern: [
      'SpO2 consistently below 95% at rest',
      'Readings below 90% at any time',
      'Shortness of breath with low readings',
      'Blue lips or fingernails (cyanosis)',
      'Confusion or altered consciousness',
    ],
    healthTips: [
      'Practice deep breathing exercises',
      'Maintain good posture for optimal lung expansion',
      'Stay active to improve cardiovascular health',
      'Avoid smoking and secondhand smoke',
      'Treat underlying respiratory conditions',
    ],
    funFact:
      'A single red blood cell makes the journey through your entire circulatory system in about 20 seconds!',
  },
  {
    type: 'sleep',
    name: 'Sleep',
    icon: '😴',
    description:
      'Sleep is essential for physical and mental health. It allows your body to repair itself and your brain to consolidate memories and process emotions.',
    normalRanges: [
      { label: 'Adults (18-64)', range: '7-9 hours', note: 'Per night' },
      { label: 'Older Adults (65+)', range: '7-8 hours' },
      { label: 'Deep Sleep', range: '13-23% of total', note: 'Most restorative' },
      { label: 'REM Sleep', range: '20-25% of total', note: 'For memory & learning' },
    ],
    whatAffectsIt: [
      'Sleep schedule consistency',
      'Caffeine and alcohol',
      'Screen time before bed',
      'Room temperature and light',
      'Stress and anxiety',
      'Exercise timing',
      'Medications',
    ],
    whenToConcern: [
      'Consistently getting less than 6 hours',
      'Waking up frequently during the night',
      'Excessive daytime sleepiness',
      'Snoring or gasping during sleep (may indicate sleep apnea)',
      'Taking more than 30 minutes to fall asleep regularly',
    ],
    healthTips: [
      'Maintain consistent sleep and wake times',
      'Create a cool, dark, quiet sleep environment',
      'Avoid screens 1-2 hours before bed',
      'Limit caffeine after 2 PM',
      'Exercise regularly, but not too close to bedtime',
    ],
    funFact:
      'You will spend about one-third of your life sleeping - that is roughly 25 years for the average person!',
  },
  {
    type: 'recovery',
    name: 'Recovery',
    icon: '🔋',
    description:
      'Recovery score indicates how well your body has recovered from physical and mental stress. It helps you understand your readiness for activity.',
    normalRanges: [
      { label: 'Green (Optimal)', range: '67-100%', note: 'Ready for high strain' },
      { label: 'Yellow (Moderate)', range: '34-66%', note: 'Consider lighter activity' },
      { label: 'Red (Low)', range: '0-33%', note: 'Focus on rest' },
    ],
    whatAffectsIt: [
      'Sleep quality and duration',
      'Previous day strain',
      'HRV levels',
      'Resting heart rate',
      'Stress levels',
      'Hydration',
      'Nutrition',
    ],
    whenToConcern: [
      'Consistently low recovery despite adequate sleep',
      'Recovery not improving with rest',
      'Prolonged periods in red zone',
      'Other symptoms like persistent fatigue',
    ],
    healthTips: [
      'Prioritize sleep on high-strain days',
      'Match workout intensity to recovery level',
      'Use active recovery (light walks, stretching)',
      'Stay hydrated and eat nutritious foods',
      'Manage stress through relaxation techniques',
    ],
    funFact:
      'Your body does most of its repair work during deep sleep, which is why recovery and sleep are so closely linked!',
  },
];

// ============================================
// Component
// ============================================

export function VitalEducation({
  selectedVital,
  onSelectVital,
}: VitalEducationProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('ranges');

  // Get selected vital info
  const selectedInfo = useMemo(() => {
    if (!selectedVital) return null;
    return VITAL_INFO.find((v) => v.type === selectedVital) || null;
  }, [selectedVital]);

  // Toggle section
  const toggleSection = useCallback((section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  }, []);

  return (
    <div className="vital-education">
      {/* Vital Selector */}
      <div className="vital-selector">
        <h2>Learn About Your Vitals</h2>
        <p>Select a vital sign to learn more about it</p>
        <div className="vital-pills">
          {VITAL_INFO.map((vital) => (
            <button
              key={vital.type}
              className={`vital-pill ${selectedVital === vital.type ? 'active' : ''}`}
              onClick={() => onSelectVital(vital.type)}
              style={{
                '--vital-color': getVitalColor(vital.type),
              } as React.CSSProperties}
            >
              <span className="pill-icon">{vital.icon}</span>
              <span className="pill-label">{vital.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Vital Content */}
      {selectedInfo ? (
        <div className="vital-content">
          <div className="content-header">
            <span className="header-icon">{selectedInfo.icon}</span>
            <div className="header-text">
              <h3>{selectedInfo.name}</h3>
              <p>{selectedInfo.description}</p>
            </div>
          </div>

          {/* Normal Ranges */}
          <div className="content-section">
            <button
              className={`section-header ${expandedSection === 'ranges' ? 'expanded' : ''}`}
              onClick={() => toggleSection('ranges')}
            >
              <span className="section-title">📊 Normal Ranges</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === 'ranges' && (
              <div className="section-content">
                <div className="ranges-grid">
                  {selectedInfo.normalRanges.map((range, index) => (
                    <div key={index} className="range-item">
                      <span className="range-label">{range.label}</span>
                      <span className="range-value">{range.range}</span>
                      {range.note && <span className="range-note">{range.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* What Affects It */}
          <div className="content-section">
            <button
              className={`section-header ${expandedSection === 'affects' ? 'expanded' : ''}`}
              onClick={() => toggleSection('affects')}
            >
              <span className="section-title">🔄 What Affects It</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === 'affects' && (
              <div className="section-content">
                <ul className="factor-list">
                  {selectedInfo.whatAffectsIt.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* When to Be Concerned */}
          <div className="content-section">
            <button
              className={`section-header ${expandedSection === 'concern' ? 'expanded' : ''}`}
              onClick={() => toggleSection('concern')}
            >
              <span className="section-title">⚠️ When to Be Concerned</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === 'concern' && (
              <div className="section-content">
                <ul className="concern-list">
                  {selectedInfo.whenToConcern.map((concern, index) => (
                    <li key={index}>{concern}</li>
                  ))}
                </ul>
                <div className="disclaimer">
                  <strong>Note:</strong> This information is educational only. Always
                  consult a healthcare provider for medical advice.
                </div>
              </div>
            )}
          </div>

          {/* Health Tips */}
          <div className="content-section">
            <button
              className={`section-header ${expandedSection === 'tips' ? 'expanded' : ''}`}
              onClick={() => toggleSection('tips')}
            >
              <span className="section-title">💡 Health Tips</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === 'tips' && (
              <div className="section-content">
                <ul className="tips-list">
                  {selectedInfo.healthTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Fun Fact */}
          {selectedInfo.funFact && (
            <div className="fun-fact">
              <span className="fact-icon">🎯</span>
              <p>{selectedInfo.funFact}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="no-selection">
          <div className="empty-state">
            <span className="empty-icon">📖</span>
            <h3>Select a Vital Sign</h3>
            <p>
              Choose a vital sign above to learn about normal ranges, what affects
              it, and tips for improving your health.
            </p>
          </div>
        </div>
      )}

      {/* General Health Notice */}
      <div className="health-notice">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p>
          The information provided here is for educational purposes only and should
          not replace professional medical advice. Consult your healthcare provider
          for personalized guidance.
        </p>
      </div>
    </div>
  );
}

export default VitalEducation;
