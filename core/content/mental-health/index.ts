/**
 * Mental Health Patient Education Content
 *
 * Comprehensive mental health educational content focused on patient understanding,
 * destigmatization, and empowerment. Content is designed to complement clinical care
 * by helping patients and families understand mental health conditions.
 *
 * Key Themes:
 * - Mental health conditions are medical conditions affecting the brain
 * - Treatment works for most people
 * - Recovery is possible and expected
 * - Seeking help is a sign of strength
 * - No one chooses to have a mental health condition
 *
 * Content Categories:
 * - Common Conditions: Depression, anxiety disorders, bipolar, PTSD, OCD, ADHD, etc.
 * - Treatment Approaches: Psychotherapy, medications, combination therapy, ECT, ketamine
 * - Crisis Management: Suicidal ideation, crisis resources, safety planning
 * - Wellness & Prevention: Stress management, sleep, exercise, mindfulness
 * - Support Systems: Family education, support groups, stigma reduction
 */

// Common Conditions
export * from './conditions/depression';
export * from './conditions/anxiety-disorders';
export * from './conditions/bipolar-disorder';
export * from './conditions/ptsd';
export * from './conditions/ocd';
export * from './conditions/adhd';
export * from './conditions/schizophrenia';
export * from './conditions/eating-disorders';
export * from './conditions/personality-disorders';

// Bilingual (Spanish-First) Mental Health Content
export * from './depresion-depression';
export * from './ansiedad-anxiety';
export * from './tept-ptsd';
export * from './tdah-adhd';
export * from './trastornos-alimentarios-eating-disorders';

// Treatment Approaches
export * from './treatments/psychotherapy-types';
export * from './treatments/psychiatric-medications';
export * from './treatments/combination-treatment';
export * from './treatments/ect';
export * from './treatments/ketamine-esketamine';

// Crisis Management
export * from './crisis/suicidal-ideation';
export * from './crisis/crisis-resources';
export * from './crisis/psychiatric-emergency';
export * from './crisis/safety-planning';

// Wellness and Prevention
export * from './wellness/stress-management';
export * from './wellness/sleep-mental-health';
export * from './wellness/exercise-benefits';
export * from './wellness/mindfulness-meditation';
export * from './wellness/social-connection';
export * from './wellness/work-life-balance';

// Support Systems
export * from './support/family-education';
export * from './support/support-groups';
export * from './support/peer-support';
export * from './support/stigma-reduction';

// Content Categories
export const MENTAL_HEALTH_CATEGORIES = [
  'conditions',
  'treatments',
  'crisis',
  'wellness',
  'support',
] as const;

export type MentalHealthCategory = (typeof MENTAL_HEALTH_CATEGORIES)[number];

// Core Destigmatization Messages
export const MENTAL_HEALTH_CORE_MESSAGES = {
  medicalCondition: 'Mental health conditions are medical conditions that affect the brain. They are not character flaws, moral failings, or choices.',
  treatmentWorks: 'Mental health conditions are among the most treatable in medicine. With proper treatment, most people improve significantly.',
  recoveryPossible: 'Recovery is not only possible but expected. Millions of people with mental health conditions lead fulfilling, productive lives.',
  commonExperience: 'Mental health conditions are common. About 1 in 5 adults experiences a mental health condition in any given year.',
  seekingHelpIsStrength: 'Seeking help for mental health is a sign of strength and self-awareness, not weakness.',
  notAlone: 'You are not alone. Help is available, and things can get better.',
  biologicalBasis: 'Research shows mental health conditions involve real changes in brain chemistry, structure, and function.',
  holisticApproach: 'The most effective treatment often combines multiple approaches: therapy, medication, lifestyle changes, and social support.',
};

// Crisis Information
export const CRISIS_HOTLINES = {
  suicideLifeline: {
    name: '988 Suicide & Crisis Lifeline',
    number: '988',
    description: 'Free, confidential support 24/7 for people in distress',
    availability: '24/7',
    languages: ['English', 'Spanish'],
  },
  crisisTextLine: {
    name: 'Crisis Text Line',
    number: 'Text HOME to 741741',
    description: 'Free, 24/7 crisis counseling via text message',
    availability: '24/7',
    languages: ['English', 'Spanish'],
  },
  veteransCrisisLine: {
    name: 'Veterans Crisis Line',
    number: '988 then press 1',
    description: 'Specialized support for veterans and their families',
    availability: '24/7',
    languages: ['English', 'Spanish'],
  },
  samhsaHelpline: {
    name: 'SAMHSA National Helpline',
    number: '1-800-662-4357',
    description: 'Treatment referrals and information for mental health and substance use',
    availability: '24/7, 365 days',
    languages: ['English', 'Spanish'],
  },
  trevorProject: {
    name: 'The Trevor Project',
    number: '1-866-488-7386',
    description: 'Crisis intervention for LGBTQ+ young people',
    availability: '24/7',
    languages: ['English'],
  },
};
