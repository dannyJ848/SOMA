/**
 * Red Flag Education System
 *
 * Educates users about warning signs that warrant immediate medical attention.
 * NOT for diagnosis - teaches users when to seek professional care.
 *
 * Philosophy: Empowers users to recognize urgency, not to self-diagnose.
 */

import { RED_FLAG_PATTERNS } from './condition-database.js';
import type {
  RedFlagPattern,
  SymptomInput,
  PatientDemographics,
  UrgencyLevel,
} from './types.js';

// ============================================
// Types
// ============================================

/**
 * Educational red flag alert for user
 */
export interface RedFlagAlert {
  id: string;
  pattern: RedFlagPattern;
  matchScore: number;
  triggeredBy: string[];
  urgencyLevel: UrgencyLevel;
  education: RedFlagEducation;
}

/**
 * Educational content for a red flag
 */
export interface RedFlagEducation {
  /** What the user should understand */
  whatThisMeans: string;

  /** Why this combination is concerning */
  whyItsConcerning: string;

  /** What the user should do */
  recommendedAction: string;

  /** What NOT to do */
  avoidActions: string[];

  /** What happens at the ER/hospital */
  whatToExpectAtER: string;

  /** Questions to ask the doctor */
  questionsForDoctor: string[];

  /** How to prepare for the visit */
  howToPrepare: string[];

  /** Educational context about the conditions */
  learnMore: string;

  /** Important disclaimer */
  disclaimer: string;
}

/**
 * Result of red flag education check
 */
export interface RedFlagEducationResult {
  hasRedFlags: boolean;
  alerts: RedFlagAlert[];
  highestUrgency: UrgencyLevel;
  educationalSummary: string;
  importantReminder: string;
}

// ============================================
// Red Flag Education Engine
// ============================================

/**
 * Analyze symptoms for red flag patterns and provide education
 */
export function analyzeForRedFlags(
  symptoms: SymptomInput[],
  demographics?: PatientDemographics
): RedFlagEducationResult {
  const symptomNames = symptoms.map(s => s.name.toLowerCase());
  const alerts: RedFlagAlert[] = [];

  for (const pattern of RED_FLAG_PATTERNS) {
    const matchResult = matchPattern(pattern, symptomNames, demographics);

    if (matchResult.matches) {
      alerts.push({
        id: pattern.id,
        pattern,
        matchScore: matchResult.score,
        triggeredBy: matchResult.triggeredBy,
        urgencyLevel: pattern.urgency,
        education: generateEducation(pattern, matchResult.triggeredBy),
      });
    }
  }

  // Sort by urgency
  alerts.sort((a, b) => urgencyRank(b.urgencyLevel) - urgencyRank(a.urgencyLevel));

  const highestUrgency = alerts.length > 0 ? alerts[0].urgencyLevel : 'routine';

  return {
    hasRedFlags: alerts.length > 0,
    alerts,
    highestUrgency,
    educationalSummary: generateSummary(alerts),
    importantReminder: IMPORTANT_REMINDER,
  };
}

// ============================================
// Pattern Matching
// ============================================

interface MatchResult {
  matches: boolean;
  score: number;
  triggeredBy: string[];
}

function matchPattern(
  pattern: RedFlagPattern,
  symptomNames: string[],
  demographics?: PatientDemographics
): MatchResult {
  const triggeredBy: string[] = [];
  let matchCount = 0;
  let requiredMet = true;

  for (const trigger of pattern.triggerSymptoms) {
    const isPresent = symptomNames.some(s =>
      s.includes(trigger.symptomName.toLowerCase()) ||
      trigger.symptomName.toLowerCase().includes(s)
    );

    if (isPresent) {
      matchCount++;
      triggeredBy.push(trigger.symptomName);
    } else if (trigger.required) {
      requiredMet = false;
    }
  }

  // Calculate demographic multiplier
  let demographicMultiplier = 1.0;
  if (demographics && pattern.demographicModifiers) {
    for (const modifier of pattern.demographicModifiers) {
      if (checkDemographicCondition(demographics, modifier)) {
        demographicMultiplier *= modifier.multiplier;
      }
    }
  }

  // Determine if pattern matches
  let matches = false;
  const adjustedCount = matchCount * demographicMultiplier;

  if (pattern.combinationLogic === 'any' && matchCount >= 1 && requiredMet) {
    matches = true;
  } else if (pattern.combinationLogic === 'all' && requiredMet && matchCount === pattern.triggerSymptoms.length) {
    matches = true;
  } else if (pattern.combinationLogic === 'threshold') {
    const threshold = pattern.threshold || 1;
    matches = adjustedCount >= threshold && requiredMet;
  }

  return {
    matches,
    score: adjustedCount,
    triggeredBy,
  };
}

function checkDemographicCondition(
  demographics: PatientDemographics,
  modifier: { factor: string; condition: string; multiplier: number }
): boolean {
  switch (modifier.factor) {
    case 'age':
      if (!demographics.age) return false;
      if (modifier.condition.startsWith('>')) {
        return demographics.age > parseInt(modifier.condition.slice(1));
      }
      if (modifier.condition.startsWith('<')) {
        return demographics.age < parseInt(modifier.condition.slice(1));
      }
      return false;

    case 'sex':
      return demographics.sex === modifier.condition;

    case 'pregnancy':
      return demographics.pregnant === (modifier.condition === 'true');

    case 'comorbidity':
      return demographics.existingConditions?.some(
        c => c.toLowerCase().includes(modifier.condition.toLowerCase())
      ) ?? false;

    default:
      return false;
  }
}

function urgencyRank(urgency: UrgencyLevel): number {
  switch (urgency) {
    case 'emergency': return 5;
    case 'urgent': return 4;
    case 'semi-urgent': return 3;
    case 'routine': return 2;
    case 'elective': return 1;
    default: return 0;
  }
}

// ============================================
// Education Generation
// ============================================

function generateEducation(pattern: RedFlagPattern, triggeredSymptoms: string[]): RedFlagEducation {
  const education: RedFlagEducation = {
    whatThisMeans: generateWhatThisMeans(pattern, triggeredSymptoms),
    whyItsConcerning: pattern.guidance.whyUrgent,
    recommendedAction: pattern.guidance.seekCare,
    avoidActions: pattern.guidance.doNotDo,
    whatToExpectAtER: generateERExpectations(pattern),
    questionsForDoctor: generateDoctorQuestions(pattern),
    howToPrepare: generatePreparationSteps(pattern, triggeredSymptoms),
    learnMore: generateLearnMore(pattern),
    disclaimer: MEDICAL_DISCLAIMER,
  };

  return education;
}

function generateWhatThisMeans(pattern: RedFlagPattern, symptoms: string[]): string {
  const templates: Record<string, string> = {
    'cardiovascular-emergency': `The combination of ${symptoms.join(', ')} can sometimes indicate a problem with the heart or blood vessels. These symptoms together are considered "red flags" that medical professionals take very seriously.`,
    'neurological-emergency': `The symptoms ${symptoms.join(', ')} may indicate a problem affecting the brain or nervous system. Time is critical with neurological emergencies, which is why immediate evaluation is recommended.`,
    'respiratory-emergency': `Symptoms like ${symptoms.join(', ')} can indicate a serious problem with breathing or the lungs. Quick evaluation is important to ensure adequate oxygen delivery.`,
    'sepsis': `The combination of ${symptoms.join(', ')} can sometimes indicate the body is fighting a serious infection. Sepsis requires rapid medical treatment.`,
    'anaphylaxis': `These symptoms (${symptoms.join(', ')}) may indicate a severe allergic reaction, which can progress rapidly and affect breathing.`,
  };

  return templates[pattern.category] || `The symptoms you're experiencing (${symptoms.join(', ')}) are recognized medical warning signs that warrant professional evaluation.`;
}

function generateERExpectations(pattern: RedFlagPattern): string {
  const expectations: Record<string, string> = {
    'cardiovascular-emergency': `At the emergency room, expect: immediate triage (you'll be prioritized), ECG (heart tracing), blood tests including troponin (heart muscle marker), continuous monitoring. The team will work quickly to evaluate your heart. If needed, you may receive medications or procedures to restore blood flow.`,
    'neurological-emergency': `At the emergency room, expect: immediate evaluation by a stroke team, CT scan of your head (quick, painless), neurological examination, possible MRI. Time is critical - the team will move fast. If it's a stroke, treatment may include clot-dissolving medication (if within time window) or other interventions.`,
    'respiratory-emergency': `At the emergency room, expect: oxygen monitoring (small clip on finger), chest X-ray, blood tests, possible CT scan. You may receive oxygen, medications to help breathing, or blood thinners if a clot is suspected.`,
    'sepsis': `At the emergency room, expect: IV placement, blood tests and cultures, fluids through the IV, antibiotics (often started before test results), monitoring of vital signs. The goal is to fight infection and support your body quickly.`,
    'anaphylaxis': `At the emergency room, expect: epinephrine injection if not already given, IV fluids, antihistamines, steroids, monitoring for several hours. Even if you feel better, monitoring is important as symptoms can return.`,
  };

  return expectations[pattern.category] || `At the emergency room, you'll receive rapid evaluation, necessary tests, and treatment. Don't hesitate to go - ER staff are trained to prioritize based on symptoms.`;
}

function generateDoctorQuestions(pattern: RedFlagPattern): string[] {
  const baseQuestions = [
    'What do you think is causing my symptoms?',
    'What tests will help figure out what\'s happening?',
    'How will I know if I need to come back?',
    'Are there warning signs I should watch for at home?',
  ];

  const categoryQuestions: Record<string, string[]> = {
    'cardiovascular-emergency': [
      'Is my heart at risk?',
      'What can I do to prevent this from happening again?',
      'Should I see a cardiologist?',
      'Do I need to make any lifestyle changes?',
    ],
    'neurological-emergency': [
      'Did I have a stroke or TIA?',
      'Is there any brain damage?',
      'What caused this to happen?',
      'How can I prevent this from happening again?',
    ],
    'respiratory-emergency': [
      'Is there a blood clot in my lungs?',
      'Will I need blood thinners?',
      'When can I expect to feel better?',
      'Are there activities I should avoid?',
    ],
  };

  return [...(categoryQuestions[pattern.category] || []), ...baseQuestions];
}

function generatePreparationSteps(pattern: RedFlagPattern, symptoms: string[]): string[] {
  const baseSteps = [
    `Write down when each symptom started (${symptoms.join(', ')})`,
    'List all medications you take (prescription and over-the-counter)',
    'Note any allergies you have',
    'Bring your ID and insurance card if possible',
    'Have someone drive you or call 911 - don\'t drive yourself',
  ];

  const categorySteps: Record<string, string[]> = {
    'cardiovascular-emergency': [
      'Note the exact time symptoms started',
      'If you have aspirin and aren\'t allergic, chew one regular aspirin',
      'Sit or lie down in a comfortable position',
      'Loosen any tight clothing',
    ],
    'neurological-emergency': [
      'NOTE THE EXACT TIME symptoms started - this is critical for treatment',
      'Do not eat or drink anything',
      'If possible, have someone record what your symptoms look like',
      'Stay calm and don\'t try to "walk it off"',
    ],
    'anaphylaxis': [
      'Use epinephrine auto-injector if you have one',
      'Lie down with legs elevated (unless having trouble breathing)',
      'Don\'t eat or drink anything',
      'Stay with someone until help arrives',
    ],
  };

  return [...(categorySteps[pattern.category] || []), ...baseSteps];
}

function generateLearnMore(pattern: RedFlagPattern): string {
  const learnMore: Record<string, string> = {
    'cardiovascular-emergency': `Your heart is a muscle that needs constant blood flow to work. Coronary arteries supply this blood. When one gets blocked, the heart muscle downstream starts to die - this is a heart attack. Symptoms occur because the heart can't pump properly and nerves signal distress. The classic symptoms (chest pressure, arm pain, sweating) happen because of these physiological changes. Understanding this helps you recognize why these symptoms are taken so seriously - every minute matters in saving heart muscle.`,
    'neurological-emergency': `Your brain controls everything you do - movement, speech, thinking, seeing. Different brain areas control different functions. When blood flow is blocked (stroke), the brain cells in that area start to die within minutes. This is why stroke symptoms depend on which brain area is affected - face drooping (facial nerve area), arm weakness (motor area), speech difficulty (language area). The phrase "time is brain" exists because approximately 1.9 million brain cells die every minute during a stroke. Treatment can restore blood flow, but only if given quickly.`,
    'respiratory-emergency': `Your lungs exchange oxygen and carbon dioxide with every breath. Pulmonary embolism happens when a blood clot (usually from leg veins) travels to the lungs and blocks blood vessels there. This means part of the lung can't do gas exchange. The body responds with rapid breathing and heart rate to compensate. Large clots can be life-threatening because they prevent the heart from pumping effectively. Understanding this helps explain why leg swelling (potential clot source) combined with sudden breathing problems is concerning.`,
    'sepsis': `Sepsis occurs when your immune system's response to an infection damages your own tissues. Normally, inflammation helps fight infection. In sepsis, this response becomes uncontrolled, affecting the whole body. Blood vessels become leaky, blood pressure drops, organs don't get enough oxygen. The symptoms (fever, rapid pulse, confusion) reflect this body-wide crisis. Sepsis can progress rapidly, which is why the combination of infection signs with systemic symptoms requires immediate attention.`,
    'anaphylaxis': `Anaphylaxis is a severe, whole-body allergic reaction. When you're exposed to an allergen, your immune system can release massive amounts of chemicals all at once. These chemicals cause blood vessels to dilate (drop in blood pressure), airways to constrict (breathing difficulty), and fluid to leak (swelling). Epinephrine reverses these effects rapidly - it's not dangerous, it's life-saving. The reaction can return after initial improvement (biphasic reaction), which is why hospital monitoring is important.`,
  };

  return learnMore[pattern.category] || `Understanding the medical basis behind warning signs helps you make informed decisions about your health. These patterns are well-established in medical literature and represent situations where professional evaluation can make a significant difference in outcomes.`;
}

function generateSummary(alerts: RedFlagAlert[]): string {
  if (alerts.length === 0) {
    return 'No immediate red flags detected based on the symptoms you\'ve entered. However, any new, severe, or concerning symptoms should be evaluated by a healthcare professional.';
  }

  if (alerts.some(a => a.urgencyLevel === 'emergency')) {
    return `⚠️ IMPORTANT: Your symptom combination includes patterns that medical professionals consider emergencies. This doesn't mean you definitely have a serious condition, but these symptoms warrant immediate professional evaluation. Please don't delay - call 911 or go to the emergency room.`;
  }

  if (alerts.some(a => a.urgencyLevel === 'urgent')) {
    return `Your symptoms include patterns that typically warrant same-day medical evaluation. While this may not be a true emergency, it's important to see a healthcare provider today. If symptoms worsen, seek emergency care.`;
  }

  return `Some of your symptoms match patterns that healthcare providers take seriously. While not necessarily emergencies, these warrant professional evaluation soon. Trust your instincts - if something feels seriously wrong, seek care.`;
}

// ============================================
// Constants
// ============================================

export const IMPORTANT_REMINDER = `Remember: This app is for EDUCATION only. It cannot diagnose conditions or replace professional medical judgment. The information here helps you understand your body and have informed conversations with your healthcare providers. When in doubt, always seek professional medical care.`;

export const MEDICAL_DISCLAIMER = `DISCLAIMER: This educational information is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have learned from this app. If you think you may have a medical emergency, call your doctor, go to the emergency department, or call 911 immediately.`;

