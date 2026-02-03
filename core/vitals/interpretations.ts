/**
 * Vital Signs Interpretations
 *
 * Clinical interpretations for abnormal vital sign values,
 * including causes, significance, and recommendations.
 */

import type {
  VitalType,
  VitalReading,
  AlertSeverity,
  VitalUserProfile,
} from './types.js';
import {
  getReferenceRange,
  classifyValue,
  type ValueClassification,
} from './reference-ranges.js';

// ============================================================================
// Interpretation Types
// ============================================================================

export interface VitalInterpretation {
  vitalType: VitalType;
  value: number | string;
  classification: ValueClassification;
  severity: AlertSeverity;
  summary: string;
  explanation: string;
  possibleCauses: string[];
  recommendations: string[];
  whenToSeekCare?: string;
  relatedPhysiology?: string;
  affectedSystems?: string[];
}

// ============================================================================
// Heart Rate Interpretations
// ============================================================================

const HEART_RATE_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your resting heart rate is optimal',
    explanation: 'A resting heart rate in this range indicates good cardiovascular health and efficient heart function.',
    possibleCauses: ['Good cardiovascular fitness', 'Regular exercise', 'Healthy lifestyle'],
    recommendations: ['Continue current exercise routine', 'Maintain healthy lifestyle habits'],
    relatedPhysiology: 'An optimal resting heart rate means your heart can pump enough blood with fewer beats, indicating cardiac efficiency.',
    affectedSystems: ['Cardiovascular'],
  },
  normal: {
    severity: 'info',
    summary: 'Your resting heart rate is within normal range',
    explanation: 'Your heart rate falls within the expected range for healthy adults.',
    possibleCauses: ['Normal physiological function'],
    recommendations: ['Regular exercise can help optimize heart rate over time'],
    affectedSystems: ['Cardiovascular'],
  },
  elevated: {
    severity: 'warning',
    summary: 'Your heart rate is mildly elevated',
    explanation: 'A slightly elevated resting heart rate may indicate stress, dehydration, or other temporary factors.',
    possibleCauses: [
      'Stress or anxiety',
      'Caffeine consumption',
      'Dehydration',
      'Recent physical activity',
      'Poor sleep',
      'Illness or infection',
    ],
    recommendations: [
      'Ensure adequate hydration',
      'Reduce caffeine intake',
      'Practice stress management techniques',
      'Get adequate rest',
      'Monitor for persistent elevation',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  high: {
    severity: 'warning',
    summary: 'Your heart rate is elevated',
    explanation: 'A sustained elevated heart rate at rest (tachycardia) should be monitored and may warrant medical evaluation.',
    possibleCauses: [
      'Stress or anxiety',
      'Fever or infection',
      'Anemia',
      'Hyperthyroidism',
      'Dehydration',
      'Medication effects',
      'Cardiac arrhythmia',
    ],
    recommendations: [
      'Monitor heart rate regularly',
      'Stay well hydrated',
      'Reduce stimulant intake',
      'Consider medical evaluation if persistent',
    ],
    whenToSeekCare: 'Seek medical attention if heart rate remains above 100 bpm at rest for extended periods, or if accompanied by chest pain, shortness of breath, or dizziness.',
    affectedSystems: ['Cardiovascular', 'Nervous', 'Endocrine'],
  },
  low: {
    severity: 'info',
    summary: 'Your heart rate is lower than average',
    explanation: 'A low resting heart rate is often a sign of good cardiovascular fitness, especially in athletes. However, it can sometimes indicate a medical issue.',
    possibleCauses: [
      'Athletic conditioning',
      'Excellent cardiovascular fitness',
      'Beta-blocker medication',
      'Hypothyroidism (less common)',
      'Heart conduction issues (rare)',
    ],
    recommendations: [
      'If you are athletic, this is likely normal',
      'Monitor for symptoms like fatigue or dizziness',
      'Discuss with your doctor if you experience symptoms',
    ],
    affectedSystems: ['Cardiovascular'],
  },
  'critical-high': {
    severity: 'critical',
    summary: 'Your heart rate is critically elevated',
    explanation: 'A very high heart rate requires immediate attention, especially if accompanied by other symptoms.',
    possibleCauses: [
      'Cardiac arrhythmia',
      'Severe dehydration',
      'Infection or sepsis',
      'Panic attack',
      'Medication or substance effects',
    ],
    recommendations: [
      'Sit or lie down',
      'Try calm, slow breathing',
      'Seek immediate medical attention',
    ],
    whenToSeekCare: 'Seek immediate medical care for heart rate above 150 bpm at rest, especially with chest pain, difficulty breathing, or altered consciousness.',
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  'critical-low': {
    severity: 'critical',
    summary: 'Your heart rate is critically low',
    explanation: 'A very low heart rate can indicate a serious condition requiring medical evaluation.',
    possibleCauses: [
      'Heart block or conduction disorder',
      'Medication overdose',
      'Severe hypothyroidism',
      'Vagal response',
    ],
    recommendations: [
      'Monitor for symptoms',
      'Seek medical evaluation promptly',
    ],
    whenToSeekCare: 'Seek immediate care if heart rate is below 40 bpm with dizziness, fainting, chest pain, or shortness of breath.',
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
};

// ============================================================================
// Blood Pressure Interpretations
// ============================================================================

const BLOOD_PRESSURE_SYSTOLIC_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your blood pressure is optimal',
    explanation: 'Optimal blood pressure reduces your risk of heart disease, stroke, and kidney disease.',
    possibleCauses: ['Healthy lifestyle', 'Good diet', 'Regular exercise', 'Healthy weight'],
    recommendations: ['Maintain healthy habits', 'Continue regular monitoring'],
    relatedPhysiology: 'Blood pressure represents the force of blood against arterial walls. Optimal pressure means your heart and blood vessels are working efficiently.',
    affectedSystems: ['Cardiovascular'],
  },
  normal: {
    severity: 'info',
    summary: 'Your blood pressure is within normal range',
    explanation: 'Your blood pressure is acceptable, though slightly above the optimal range.',
    possibleCauses: ['Normal variation', 'Mild lifestyle factors'],
    recommendations: [
      'Continue healthy habits',
      'Monitor for changes',
      'Reduce sodium intake if on higher end',
    ],
    affectedSystems: ['Cardiovascular'],
  },
  elevated: {
    severity: 'warning',
    summary: 'Your blood pressure is elevated',
    explanation: 'Elevated blood pressure (120-129 systolic) is a warning sign. Without changes, it often progresses to hypertension.',
    possibleCauses: [
      'Excess sodium intake',
      'Overweight',
      'Stress',
      'Sedentary lifestyle',
      'Alcohol consumption',
      'Age-related changes',
    ],
    recommendations: [
      'Reduce sodium intake to under 2,300 mg/day',
      'Exercise regularly (150 min/week)',
      'Maintain healthy weight',
      'Limit alcohol',
      'Manage stress',
      'Monitor blood pressure regularly',
    ],
    affectedSystems: ['Cardiovascular', 'Kidney'],
  },
  high: {
    severity: 'warning',
    summary: 'Your blood pressure indicates hypertension',
    explanation: 'Stage 1 or 2 hypertension increases your risk of heart disease, stroke, and kidney disease. Consistent elevation requires medical attention.',
    possibleCauses: [
      'Primary (essential) hypertension',
      'Secondary causes (kidney disease, hormonal disorders)',
      'Lifestyle factors',
      'Genetic predisposition',
      'Medications (NSAIDs, decongestants)',
    ],
    recommendations: [
      'Consult with a healthcare provider',
      'Adopt DASH diet',
      'Reduce sodium to under 1,500 mg/day',
      'Regular aerobic exercise',
      'Maintain healthy weight',
      'Limit alcohol',
      'Take prescribed medications as directed',
    ],
    whenToSeekCare: 'See your doctor for persistent readings above 130/80 mmHg. Follow up promptly for readings above 140/90 mmHg.',
    affectedSystems: ['Cardiovascular', 'Kidney', 'Brain', 'Eyes'],
  },
  low: {
    severity: 'info',
    summary: 'Your blood pressure is lower than average',
    explanation: 'Low blood pressure is often benign and may indicate good cardiovascular health, but can cause symptoms in some people.',
    possibleCauses: [
      'Athletic conditioning',
      'Dehydration',
      'Medications',
      'Endocrine conditions',
      'Nutritional deficiencies',
    ],
    recommendations: [
      'Rise slowly from sitting or lying',
      'Stay well hydrated',
      'Monitor for symptoms (dizziness, fainting)',
    ],
    whenToSeekCare: 'Seek care if you experience frequent dizziness, fainting, or symptoms that interfere with daily activities.',
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  'critical-high': {
    severity: 'critical',
    summary: 'Your blood pressure is critically elevated',
    explanation: 'Hypertensive urgency or emergency. Blood pressure this high can damage organs and requires immediate attention.',
    possibleCauses: [
      'Uncontrolled hypertension',
      'Medication non-compliance',
      'Acute kidney problems',
      'Drug interactions',
    ],
    recommendations: [
      'Sit down and try to relax',
      'Do not take extra blood pressure medication without guidance',
      'Seek medical care promptly',
    ],
    whenToSeekCare: 'Blood pressure above 180/120 mmHg requires immediate medical evaluation. Call emergency services if experiencing chest pain, difficulty breathing, vision changes, or severe headache.',
    affectedSystems: ['Cardiovascular', 'Brain', 'Kidney', 'Eyes'],
  },
  'critical-low': {
    severity: 'critical',
    summary: 'Your blood pressure is dangerously low',
    explanation: 'Severe hypotension can indicate shock or serious medical conditions requiring immediate care.',
    possibleCauses: [
      'Severe dehydration',
      'Blood loss',
      'Severe infection (sepsis)',
      'Heart problems',
      'Allergic reaction (anaphylaxis)',
    ],
    recommendations: [
      'Lie down with legs elevated',
      'Seek immediate medical care',
    ],
    whenToSeekCare: 'Seek emergency care immediately for systolic BP below 70 mmHg, especially with confusion, rapid breathing, weak pulse, or cold skin.',
    affectedSystems: ['Cardiovascular', 'Brain', 'Kidney'],
  },
};

// ============================================================================
// HRV Interpretations
// ============================================================================

const HRV_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your heart rate variability is excellent',
    explanation: 'High HRV indicates strong autonomic nervous system function and good cardiovascular health. Your body adapts well to stress.',
    possibleCauses: ['Good physical fitness', 'Low chronic stress', 'Quality sleep', 'Healthy lifestyle'],
    recommendations: ['Maintain current healthy habits', 'Continue regular exercise'],
    relatedPhysiology: 'HRV measures the variation in time between heartbeats, reflecting the balance between sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) nervous system activity.',
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  normal: {
    severity: 'info',
    summary: 'Your heart rate variability is within normal range',
    explanation: 'Your autonomic nervous system is functioning normally.',
    possibleCauses: ['Normal variation'],
    recommendations: ['Regular exercise can help improve HRV over time'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  elevated: {
    severity: 'info',
    summary: 'Your heart rate variability is above average',
    explanation: 'Higher HRV is generally positive, indicating good stress resilience and recovery capacity.',
    possibleCauses: ['Athletic training', 'Low stress levels', 'Quality recovery'],
    recommendations: ['This is generally a positive sign'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  high: {
    severity: 'info',
    summary: 'Your heart rate variability is very high',
    explanation: 'Very high HRV can indicate excellent fitness or, rarely, certain cardiac conditions. Context matters.',
    possibleCauses: ['Elite athletic conditioning', 'Strong parasympathetic tone'],
    recommendations: ['If you are highly trained, this is expected', 'Discuss with your doctor if unexpected'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  low: {
    severity: 'warning',
    summary: 'Your heart rate variability is below average',
    explanation: 'Lower HRV may indicate stress, fatigue, or reduced recovery capacity. It can also be affected by illness, poor sleep, or overtraining.',
    possibleCauses: [
      'Physical or emotional stress',
      'Poor sleep quality',
      'Overtraining',
      'Illness or infection',
      'Dehydration',
      'Alcohol consumption',
      'Age-related decline',
    ],
    recommendations: [
      'Prioritize sleep quality',
      'Manage stress through relaxation techniques',
      'Ensure adequate recovery between workouts',
      'Stay hydrated',
      'Limit alcohol',
      'Consider reducing training intensity temporarily',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  'critical-high': {
    severity: 'info',
    summary: 'Your HRV reading is unusually high',
    explanation: 'Very high HRV readings may indicate measurement artifact or, rarely, certain heart rhythms.',
    possibleCauses: ['Measurement artifact', 'Device placement issues', 'Respiratory sinus arrhythmia'],
    recommendations: ['Re-take measurement ensuring proper device placement'],
    affectedSystems: ['Cardiovascular'],
  },
  'critical-low': {
    severity: 'warning',
    summary: 'Your heart rate variability is significantly reduced',
    explanation: 'Very low HRV may indicate significant physiological stress, illness, or cardiovascular concerns.',
    possibleCauses: [
      'Acute illness',
      'Severe fatigue',
      'High stress levels',
      'Cardiovascular issues',
    ],
    recommendations: [
      'Prioritize rest and recovery',
      'Consider light activity only',
      'Monitor for other symptoms',
      'Consult healthcare provider if persistent',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous', 'Immune'],
  },
};

// ============================================================================
// Oxygen Saturation Interpretations
// ============================================================================

const OXYGEN_SATURATION_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your oxygen saturation is excellent',
    explanation: 'Your blood is carrying an optimal amount of oxygen to your tissues.',
    possibleCauses: ['Healthy lung function', 'Good cardiovascular health'],
    recommendations: ['Continue healthy habits'],
    relatedPhysiology: 'SpO2 measures the percentage of hemoglobin molecules carrying oxygen. 96-100% indicates efficient oxygen transport.',
    affectedSystems: ['Respiratory', 'Cardiovascular'],
  },
  normal: {
    severity: 'info',
    summary: 'Your oxygen saturation is within normal range',
    explanation: 'Your oxygen levels are acceptable for healthy function.',
    possibleCauses: ['Normal variation'],
    recommendations: ['No action needed'],
    affectedSystems: ['Respiratory', 'Cardiovascular'],
  },
  elevated: {
    severity: 'info',
    summary: 'Your oxygen saturation is normal',
    explanation: 'SpO2 near 100% is normal and healthy.',
    possibleCauses: ['Normal physiology'],
    recommendations: ['No action needed'],
    affectedSystems: ['Respiratory'],
  },
  high: {
    severity: 'info',
    summary: 'Your oxygen saturation is normal',
    explanation: 'It is not possible to have "too high" oxygen saturation naturally.',
    possibleCauses: ['Normal physiology'],
    recommendations: ['No action needed'],
    affectedSystems: ['Respiratory'],
  },
  low: {
    severity: 'warning',
    summary: 'Your oxygen saturation is below optimal',
    explanation: 'SpO2 below 95% may indicate respiratory issues or other conditions affecting oxygen delivery.',
    possibleCauses: [
      'Poor sensor placement',
      'Cold fingers',
      'Respiratory infection',
      'Asthma or COPD',
      'High altitude',
      'Sleep apnea (during sleep)',
    ],
    recommendations: [
      'Re-check measurement with proper sensor placement',
      'Warm your hands if cold',
      'Practice deep breathing',
      'Monitor for other symptoms',
      'Consult healthcare provider if consistently low',
    ],
    whenToSeekCare: 'Seek medical attention if SpO2 remains below 94% or if you experience shortness of breath.',
    affectedSystems: ['Respiratory', 'Cardiovascular'],
  },
  'critical-high': {
    severity: 'info',
    summary: 'Your oxygen saturation is excellent',
    explanation: 'This is normal - SpO2 at or near 100% is healthy.',
    possibleCauses: ['Normal physiology'],
    recommendations: ['No action needed'],
    affectedSystems: ['Respiratory'],
  },
  'critical-low': {
    severity: 'critical',
    summary: 'Your oxygen saturation is dangerously low',
    explanation: 'SpO2 below 90% indicates significant hypoxemia requiring immediate attention.',
    possibleCauses: [
      'Severe respiratory illness',
      'Pneumonia',
      'Pulmonary embolism',
      'Severe asthma attack',
      'COPD exacerbation',
      'COVID-19 or other respiratory infection',
    ],
    recommendations: [
      'Seek immediate medical attention',
      'If you have supplemental oxygen, use it as prescribed',
      'Sit upright to ease breathing',
    ],
    whenToSeekCare: 'Call emergency services immediately for SpO2 below 90%, especially with difficulty breathing, chest pain, or confusion.',
    affectedSystems: ['Respiratory', 'Cardiovascular', 'Brain'],
  },
};

// ============================================================================
// Sleep Interpretations
// ============================================================================

const SLEEP_DURATION_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your sleep duration is optimal',
    explanation: 'You are getting the recommended amount of sleep for adults, which supports cognitive function, immune health, and overall well-being.',
    possibleCauses: ['Good sleep habits', 'Appropriate sleep schedule'],
    recommendations: ['Maintain consistent sleep schedule', 'Continue good sleep hygiene'],
    relatedPhysiology: '7-9 hours of sleep allows for adequate cycling through all sleep stages, including restorative deep sleep and REM sleep.',
    affectedSystems: ['Nervous', 'Immune', 'Endocrine'],
  },
  normal: {
    severity: 'info',
    summary: 'Your sleep duration is acceptable',
    explanation: 'While within a reasonable range, consider if you feel well-rested.',
    possibleCauses: ['Individual variation'],
    recommendations: ['Aim for 7-9 hours consistently', 'Note how you feel during the day'],
    affectedSystems: ['Nervous'],
  },
  elevated: {
    severity: 'info',
    summary: 'Your sleep duration is slightly above average',
    explanation: 'Sleeping more than 9 hours occasionally is fine, but consistently long sleep may warrant attention.',
    possibleCauses: ['Recovery from sleep debt', 'Illness recovery', 'Individual need'],
    recommendations: ['Monitor for signs of depression or other conditions if chronic'],
    affectedSystems: ['Nervous', 'Endocrine'],
  },
  high: {
    severity: 'warning',
    summary: 'Your sleep duration is longer than recommended',
    explanation: 'Regularly sleeping more than 9-10 hours may be associated with health issues or indicate underlying conditions.',
    possibleCauses: [
      'Depression',
      'Sleep disorders',
      'Chronic fatigue conditions',
      'Hypothyroidism',
      'Medication effects',
    ],
    recommendations: [
      'Assess sleep quality',
      'Consider mood and energy levels',
      'Consult healthcare provider if persistent',
    ],
    affectedSystems: ['Nervous', 'Endocrine'],
  },
  low: {
    severity: 'warning',
    summary: 'You are not getting enough sleep',
    explanation: 'Sleep deprivation affects cognitive function, immune health, mood, and increases risk of various health conditions.',
    possibleCauses: [
      'Insufficient time allocated for sleep',
      'Insomnia',
      'Sleep apnea',
      'Stress or anxiety',
      'Poor sleep environment',
      'Shift work',
    ],
    recommendations: [
      'Aim for 7-9 hours of sleep',
      'Establish consistent sleep and wake times',
      'Create a dark, quiet, cool sleep environment',
      'Limit screens before bed',
      'Avoid caffeine after early afternoon',
      'Seek evaluation for sleep disorders if persistent',
    ],
    affectedSystems: ['Nervous', 'Immune', 'Cardiovascular', 'Endocrine'],
  },
  'critical-high': {
    severity: 'warning',
    summary: 'Your sleep duration is excessive',
    explanation: 'Sleeping significantly more than 10 hours regularly should be discussed with a healthcare provider.',
    possibleCauses: ['Underlying health condition', 'Depression', 'Sleep disorder'],
    recommendations: ['Consult healthcare provider'],
    affectedSystems: ['Nervous', 'Endocrine'],
  },
  'critical-low': {
    severity: 'critical',
    summary: 'Your sleep duration is severely inadequate',
    explanation: 'Getting less than 4-5 hours of sleep has significant health consequences and impairs daily function.',
    possibleCauses: ['Severe insomnia', 'Lifestyle factors', 'Medical conditions'],
    recommendations: [
      'Prioritize sleep as a health necessity',
      'Seek medical evaluation for insomnia',
      'Consider sleep study if persistent',
    ],
    whenToSeekCare: 'Consult a healthcare provider if you are regularly unable to sleep more than 5 hours despite trying.',
    affectedSystems: ['Nervous', 'Immune', 'Cardiovascular', 'Endocrine', 'Metabolic'],
  },
};

// ============================================================================
// Recovery Score Interpretations
// ============================================================================

const RECOVERY_SCORE_INTERPRETATIONS: Record<ValueClassification, Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>> = {
  optimal: {
    severity: 'info',
    summary: 'Your recovery is excellent (Green Zone)',
    explanation: 'Your body is well-recovered and prepared for high strain activities. HRV and resting heart rate indicate strong autonomic balance.',
    possibleCauses: ['Quality sleep', 'Appropriate strain balance', 'Good nutrition and hydration'],
    recommendations: [
      'Great day for challenging workouts',
      'Can push intensity if desired',
      'Maintain good habits that led to this recovery',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous', 'Muscular'],
  },
  normal: {
    severity: 'info',
    summary: 'Your recovery is moderate (Yellow Zone)',
    explanation: 'Your body is partially recovered. Moderate activity is appropriate, but high-intensity training may not be optimal.',
    possibleCauses: ['Moderate sleep quality', 'Accumulated strain', 'Normal variation'],
    recommendations: [
      'Moderate training is appropriate',
      'Listen to your body during exercise',
      'Focus on recovery habits today',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous', 'Muscular'],
  },
  elevated: {
    severity: 'info',
    summary: 'Your recovery is good',
    explanation: 'You are well-positioned for productive training.',
    possibleCauses: ['Good recovery habits'],
    recommendations: ['Proceed with planned training'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  high: {
    severity: 'info',
    summary: 'Your recovery is excellent',
    explanation: 'Maximum recovery indicates optimal readiness.',
    possibleCauses: ['Excellent sleep and recovery practices'],
    recommendations: ['Ideal conditions for peak performance'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  low: {
    severity: 'warning',
    summary: 'Your recovery is low (Red Zone)',
    explanation: 'Your body needs more recovery time. High HRV stress and elevated resting heart rate indicate incomplete recovery.',
    possibleCauses: [
      'Poor sleep quality or duration',
      'High accumulated strain',
      'Stress (physical or psychological)',
      'Illness coming on',
      'Alcohol consumption',
      'Travel or schedule disruption',
    ],
    recommendations: [
      'Prioritize rest and light activity only',
      'Focus on sleep hygiene tonight',
      'Stay hydrated',
      'Consider postponing high-intensity training',
      'Use active recovery methods (stretching, walking)',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous', 'Immune'],
  },
  'critical-high': {
    severity: 'info',
    summary: 'Your recovery is at maximum',
    explanation: 'Excellent recovery state.',
    possibleCauses: ['Optimal recovery conditions'],
    recommendations: ['Leverage this recovery for productive training'],
    affectedSystems: ['Cardiovascular', 'Nervous'],
  },
  'critical-low': {
    severity: 'warning',
    summary: 'Your recovery is critically low',
    explanation: 'Very low recovery suggests significant physiological stress. Your body is prioritizing recovery over performance.',
    possibleCauses: [
      'Significant sleep deficit',
      'Overtraining',
      'Illness or infection',
      'Major life stress',
    ],
    recommendations: [
      'Rest is essential today',
      'Avoid strenuous activity',
      'Focus on sleep and nutrition',
      'Monitor for signs of illness',
    ],
    affectedSystems: ['Cardiovascular', 'Nervous', 'Immune'],
  },
};

// ============================================================================
// Interpretation Functions
// ============================================================================

/**
 * Get interpretation for a vital sign reading
 */
export function interpretVital(
  reading: VitalReading,
  profile?: VitalUserProfile
): VitalInterpretation | null {
  const { type } = reading;

  // Get value based on vital type
  let value: number;
  let metric: string;

  switch (type) {
    case 'heart-rate':
      value = reading.value;
      metric = reading.context === 'resting' ? 'resting' : 'value';
      break;
    case 'blood-pressure':
      value = reading.systolic;
      metric = 'systolic';
      break;
    case 'hrv':
      value = reading.rmssd ?? reading.sdnn ?? 0;
      metric = 'rmssd';
      break;
    case 'oxygen-saturation':
      value = reading.value;
      metric = 'value';
      break;
    case 'sleep':
      value = reading.totalDuration / 60; // Convert to hours
      metric = 'totalDuration';
      break;
    case 'recovery':
      value = reading.recoveryScore ?? 50;
      metric = 'recoveryScore';
      break;
    default:
      return null;
  }

  // Get reference range
  const range = getReferenceRange(type, metric);
  if (!range) return null;

  // Classify the value
  const classification = classifyValue(value, range, profile);

  // Get interpretation template
  let interpretation: Omit<VitalInterpretation, 'vitalType' | 'value' | 'classification'>;

  switch (type) {
    case 'heart-rate':
      interpretation = HEART_RATE_INTERPRETATIONS[classification];
      break;
    case 'blood-pressure':
      interpretation = BLOOD_PRESSURE_SYSTOLIC_INTERPRETATIONS[classification];
      break;
    case 'hrv':
      interpretation = HRV_INTERPRETATIONS[classification];
      break;
    case 'oxygen-saturation':
      interpretation = OXYGEN_SATURATION_INTERPRETATIONS[classification];
      break;
    case 'sleep':
      interpretation = SLEEP_DURATION_INTERPRETATIONS[classification];
      break;
    case 'recovery':
      interpretation = RECOVERY_SCORE_INTERPRETATIONS[classification];
      break;
    default:
      return null;
  }

  return {
    vitalType: type,
    value,
    classification,
    ...interpretation,
  };
}

/**
 * Get a brief summary for a vital value
 */
export function getQuickInterpretation(
  vitalType: VitalType,
  value: number,
  metric: string,
  profile?: VitalUserProfile
): { status: ValueClassification; summary: string; severity: AlertSeverity } {
  const range = getReferenceRange(vitalType, metric);
  if (!range) {
    return { status: 'normal', summary: 'Unable to interpret', severity: 'info' };
  }

  const classification = classifyValue(value, range, profile);

  const summaries: Record<ValueClassification, string> = {
    optimal: 'Optimal',
    normal: 'Normal',
    elevated: 'Elevated',
    high: 'High',
    low: 'Low',
    'critical-high': 'Critically High',
    'critical-low': 'Critically Low',
  };

  const severities: Record<ValueClassification, AlertSeverity> = {
    optimal: 'info',
    normal: 'info',
    elevated: 'warning',
    high: 'warning',
    low: 'info',
    'critical-high': 'critical',
    'critical-low': 'critical',
  };

  return {
    status: classification,
    summary: summaries[classification],
    severity: severities[classification],
  };
}

/**
 * Format vital value with units for display
 */
export function formatVitalValue(vitalType: VitalType, value: number, metric?: string): string {
  switch (vitalType) {
    case 'heart-rate':
      return `${Math.round(value)} bpm`;
    case 'blood-pressure':
      return `${Math.round(value)} mmHg`;
    case 'hrv':
      return `${Math.round(value)} ms`;
    case 'oxygen-saturation':
      return `${Math.round(value)}%`;
    case 'respiratory-rate':
      return `${Math.round(value)} breaths/min`;
    case 'temperature':
      return `${value.toFixed(1)}°`;
    case 'blood-glucose':
      return `${Math.round(value)} mg/dL`;
    case 'weight':
      return `${value.toFixed(1)} kg`;
    case 'sleep':
      const hours = Math.floor(value / 60);
      const mins = Math.round(value % 60);
      return `${hours}h ${mins}m`;
    case 'activity':
      if (metric === 'steps') return value.toLocaleString();
      if (metric === 'vo2Max') return `${value.toFixed(1)} mL/kg/min`;
      return value.toString();
    case 'recovery':
    case 'strain':
      return `${Math.round(value)}`;
    default:
      return value.toString();
  }
}
