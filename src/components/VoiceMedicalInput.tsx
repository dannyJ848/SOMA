/**
 * Voice Medical Input Component
 *
 * Medical-aware speech recognition component for the AI Medical Encyclopedia.
 * Features intelligent question detection, medical terminology recognition,
 * context-aware follow-up question handling, and patient health context integration.
 *
 * @module components/VoiceMedicalInput
 */

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useVoiceFallback } from '../hooks/useVoiceFallback';
import type { UserCondition, UserMedication, UserLabResult } from '../../core/personalization/types';
import './VoiceMedicalInput.css';

// ============================================================================
// Types
// ============================================================================

/**
 * Types of medical questions that can be detected
 */
export type QuestionType =
  | 'definition'      // "What is..." - Definition request
  | 'physiology'      // "How does..." - Physiology explanation
  | 'mechanism'       // "Why does..." - Mechanism/pathophysiology
  | 'etiology'        // "What causes..." - Causes of conditions
  | 'clinical'        // "How do doctors..." - Clinical practice
  | 'education'       // "What do medical students learn about..." - Educational content
  | 'followup'        // Follow-up questions ("What about...", "And the...")
  | 'personal'        // Personal health-related educational questions
  | 'general';        // General medical questions

/**
 * UI state for the voice input component
 */
export type VoiceInputState = 'idle' | 'listening' | 'processing' | 'error';

/**
 * Medical terminology categories
 */
export interface MedicalTermMatch {
  term: string;
  category: 'anatomical' | 'condition' | 'procedure' | 'general' | 'personal';
  confidence: number;
  isFromPatientData?: boolean;
}

/**
 * Patient health context for personalized queries
 */
export interface PatientHealthContext {
  conditions: UserCondition[];
  medications: UserMedication[];
  labResults: UserLabResult[];
  symptoms?: Array<{
    id: string;
    description: string;
    bodyLocation: string;
  }>;
}

/**
 * Detected question result
 */
export interface DetectedQuestion {
  originalText: string;
  type: QuestionType;
  normalizedText: string;
  medicalTerms: MedicalTermMatch[];
  isFollowUp: boolean;
  relatedRegion?: string;
  isPersonalized: boolean;
  personalContext?: {
    mentionedConditions: string[];
    mentionedMedications: string[];
    mentionedSymptoms: string[];
  };
  suggestedEnhancements?: string[];
}

/**
 * Props for VoiceMedicalInput component
 */
export interface VoiceMedicalInputProps {
  /** Callback when transcript is received (real-time updates) */
  onTranscript: (text: string) => void;
  /** Callback when a medical question is detected and finalized */
  onQuestionDetected: (question: string, type: QuestionType, details?: DetectedQuestion) => void;
  /** Currently selected anatomical region for context */
  selectedRegion?: string;
  /** Whether the voice input is enabled */
  isEnabled: boolean;
  /** Previous conversation context for follow-up detection */
  conversationContext?: string[];
  /** Patient health data for personalized queries */
  patientHealthContext?: PatientHealthContext;
  /** Custom class name */
  className?: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Language for speech recognition */
  language?: string;
  /** Show personalized query suggestions */
  showPersonalizedSuggestions?: boolean;
}

// ============================================================================
// Medical Terminology Patterns
// ============================================================================

/**
 * Anatomical terms for recognition
 */
const ANATOMICAL_TERMS = new Set([
  // Cardiovascular
  'myocardium', 'endocardium', 'pericardium', 'aorta', 'ventricle', 'atrium',
  'coronary', 'artery', 'vein', 'capillary', 'valve', 'septum',
  // Nervous
  'hippocampus', 'cerebellum', 'cerebrum', 'cortex', 'hypothalamus', 'thalamus',
  'medulla', 'pons', 'brainstem', 'neuron', 'axon', 'dendrite', 'synapse',
  'amygdala', 'basal ganglia', 'corpus callosum', 'frontal lobe', 'temporal lobe',
  // Digestive
  'duodenum', 'jejunum', 'ileum', 'colon', 'rectum', 'esophagus', 'stomach',
  'pancreas', 'liver', 'gallbladder', 'bile duct', 'sphincter', 'villi',
  // Respiratory
  'alveoli', 'bronchi', 'bronchioles', 'trachea', 'larynx', 'pharynx',
  'diaphragm', 'pleura', 'lung', 'pulmonary',
  // Musculoskeletal
  'vertebrae', 'femur', 'tibia', 'fibula', 'humerus', 'radius', 'ulna',
  'tendon', 'ligament', 'cartilage', 'synovial', 'fascia', 'periosteum',
  // Urinary
  'nephron', 'glomerulus', 'tubule', 'kidney', 'ureter', 'bladder', 'urethra',
  // Endocrine
  'pituitary', 'thyroid', 'parathyroid', 'adrenal', 'islets of langerhans',
  // Lymphatic/Immune
  'lymph node', 'spleen', 'thymus', 'tonsils', 'bone marrow',
  // Reproductive
  'uterus', 'ovary', 'fallopian', 'testis', 'prostate',
  // General anatomy
  'tissue', 'organ', 'membrane', 'epithelium', 'endothelium',
]);

/**
 * Medical condition terms for recognition
 */
const CONDITION_TERMS = new Set([
  // Cardiovascular
  'hypertension', 'hypotension', 'arrhythmia', 'tachycardia', 'bradycardia',
  'fibrillation', 'infarction', 'ischemia', 'atherosclerosis', 'aneurysm',
  'stenosis', 'cardiomyopathy', 'heart failure', 'angina',
  // Neurological
  'epilepsy', 'seizure', 'stroke', 'dementia', 'alzheimer', 'parkinson',
  'multiple sclerosis', 'neuropathy', 'migraine', 'concussion',
  // Metabolic/Endocrine
  'diabetes', 'hyperthyroidism', 'hypothyroidism', 'hypoglycemia',
  'hyperglycemia', 'obesity', 'metabolic syndrome',
  // Respiratory
  'asthma', 'copd', 'pneumonia', 'bronchitis', 'emphysema', 'tuberculosis',
  'pulmonary embolism', 'sleep apnea',
  // Digestive
  'gastritis', 'ulcer', 'crohn', 'colitis', 'cirrhosis', 'hepatitis',
  'pancreatitis', 'appendicitis', 'hernia',
  // Musculoskeletal
  'arthritis', 'osteoporosis', 'fracture', 'sprain', 'strain',
  'tendinitis', 'bursitis', 'scoliosis', 'herniated disc',
  // Immune/Inflammatory
  'inflammation', 'autoimmune', 'allergy', 'anaphylaxis',
  // Cancer
  'cancer', 'tumor', 'carcinoma', 'leukemia', 'lymphoma', 'melanoma',
  'metastasis', 'malignant', 'benign',
  // Infections
  'infection', 'sepsis', 'abscess', 'cellulitis',
]);

/**
 * Medical procedure terms for recognition
 */
const PROCEDURE_TERMS = new Set([
  // Diagnostic
  'endoscopy', 'colonoscopy', 'bronchoscopy', 'laparoscopy', 'arthroscopy',
  'mri', 'ct scan', 'x-ray', 'ultrasound', 'echocardiogram', 'ekg', 'ecg',
  'biopsy', 'blood test', 'urinalysis', 'lumbar puncture', 'spinal tap',
  'angiogram', 'mammogram', 'pet scan', 'bone scan',
  // Surgical
  'surgery', 'appendectomy', 'cholecystectomy', 'bypass', 'transplant',
  'angioplasty', 'stent', 'catheterization', 'resection', 'excision',
  'ablation', 'amputation', 'arthroscopy', 'laparotomy',
  // Therapeutic
  'chemotherapy', 'radiation', 'dialysis', 'transfusion', 'infusion',
  'intubation', 'ventilation', 'defibrillation', 'cpr',
  // Other
  'vaccination', 'immunization', 'physical therapy', 'rehabilitation',
]);

/**
 * Personal health question indicators
 */
const PERSONAL_QUESTION_INDICATORS = [
  'my condition',
  'my medication',
  'my medicine',
  'my diagnosis',
  'my treatment',
  'my symptoms',
  'my lab results',
  'my test results',
  'my health',
  'for me',
  'in my case',
  'does this affect me',
  'how does this relate to',
  'what about my',
  'understand my',
  'learn about my',
];

// ============================================================================
// Question Type Detection Patterns
// ============================================================================

/**
 * Patterns for detecting question types
 */
const QUESTION_PATTERNS: Array<{
  patterns: RegExp[];
  type: QuestionType;
  priority: number;
}> = [
  {
    // Personal health educational questions
    patterns: [
      /\b(my\s+condition|my\s+medication|my\s+diagnosis|my\s+treatment|my\s+symptoms)\b/i,
      /\bhow\s+does\s+.*\s+affect\s+me\b/i,
      /\bwhat\s+does\s+this\s+mean\s+for\s+me\b/i,
      /\bhelp\s+me\s+understand\s+my\b/i,
      /\blearn\s+about\s+my\b/i,
      /\bin\s+my\s+case\b/i,
      /\bfor\s+someone\s+with\s+my\b/i,
    ],
    type: 'personal',
    priority: 0,
  },
  {
    // Definition questions
    patterns: [
      /^what\s+(?:is|are)\s+(?:the\s+)?/i,
      /^define\s+/i,
      /^tell\s+me\s+(?:about|what)\s+/i,
      /^explain\s+what\s+/i,
      /^describe\s+(?:the\s+)?/i,
    ],
    type: 'definition',
    priority: 1,
  },
  {
    // Physiology questions
    patterns: [
      /^how\s+does\s+(?:the\s+)?/i,
      /^how\s+do\s+(?:the\s+)?/i,
      /^what\s+is\s+the\s+function\s+of\s+/i,
      /^what\s+does\s+(?:the\s+)?.*\s+do\b/i,
      /^explain\s+how\s+/i,
      /^how\s+(?:does|do)\s+.*\s+work/i,
    ],
    type: 'physiology',
    priority: 2,
  },
  {
    // Mechanism/Pathophysiology questions
    patterns: [
      /^why\s+does\s+(?:the\s+)?/i,
      /^why\s+do\s+(?:the\s+)?/i,
      /^what\s+is\s+the\s+mechanism\s+/i,
      /^what\s+happens\s+when\s+/i,
      /^what\s+is\s+the\s+pathophysiology\s+/i,
      /^explain\s+why\s+/i,
    ],
    type: 'mechanism',
    priority: 2,
  },
  {
    // Etiology questions
    patterns: [
      /^what\s+causes?\s+/i,
      /^what\s+(?:are\s+)?the\s+causes?\s+of\s+/i,
      /^what\s+leads\s+to\s+/i,
      /^what\s+triggers?\s+/i,
      /^what\s+(?:are\s+)?the\s+risk\s+factors?\s+/i,
    ],
    type: 'etiology',
    priority: 2,
  },
  {
    // Clinical practice questions
    patterns: [
      /^how\s+do\s+doctors?\s+/i,
      /^how\s+(?:is|are)\s+.*\s+(?:treated|diagnosed|managed)/i,
      /^what\s+(?:is|are)\s+the\s+treatment/i,
      /^how\s+(?:is|are)\s+.*\s+performed/i,
      /^what\s+do\s+(?:doctors?|physicians?)\s+/i,
      /^how\s+(?:would|should)\s+(?:a\s+)?(?:doctor|physician)\s+/i,
    ],
    type: 'clinical',
    priority: 3,
  },
  {
    // Education content questions
    patterns: [
      /^what\s+do\s+medical\s+students?\s+learn\s+about\s+/i,
      /^what\s+(?:is|are)\s+taught\s+about\s+/i,
      /^how\s+(?:is|are)\s+.*\s+taught/i,
      /^what\s+should\s+(?:I|students?)\s+know\s+about\s+/i,
      /^explain\s+.*\s+for\s+(?:a\s+)?(?:student|beginner)/i,
    ],
    type: 'education',
    priority: 3,
  },
  {
    // Follow-up questions
    patterns: [
      /^what\s+about\s+/i,
      /^and\s+(?:the|what\s+about)\s+/i,
      /^how\s+about\s+/i,
      /^what\s+else\s+/i,
      /^can\s+you\s+(?:also|explain)\s+/i,
      /^tell\s+me\s+more\s+/i,
      /^(?:also|additionally),?\s+/i,
    ],
    type: 'followup',
    priority: 4,
  },
];

// ============================================================================
// Icon Components
// ============================================================================

interface IconProps {
  className?: string;
}

const MicrophoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const LoadingSpinner: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const ErrorIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Build a set of patient-specific terms from health context
 */
function buildPatientTerms(context?: PatientHealthContext): Set<string> {
  const terms = new Set<string>();
  if (!context) return terms;

  // Add condition names
  context.conditions.forEach(c => {
    terms.add(c.name.toLowerCase());
    if (c.icdCode) terms.add(c.icdCode.toLowerCase());
  });

  // Add medication names
  context.medications.forEach(m => {
    terms.add(m.name.toLowerCase());
    terms.add(m.genericName.toLowerCase());
    if (m.drugClass) terms.add(m.drugClass.toLowerCase());
  });

  // Add lab test names
  context.labResults.forEach(l => {
    terms.add(l.testName.toLowerCase());
  });

  // Add symptom descriptions
  context.symptoms?.forEach(s => {
    // Extract key terms from symptom description
    const words = s.description.toLowerCase().split(/\s+/);
    words.forEach(w => {
      if (w.length > 3) terms.add(w);
    });
  });

  return terms;
}

/**
 * Detect medical terms in text, including patient-specific terms
 */
function detectMedicalTerms(
  text: string,
  patientTerms?: Set<string>
): MedicalTermMatch[] {
  const lowerText = text.toLowerCase();
  const matches: MedicalTermMatch[] = [];

  // Check patient-specific terms first (higher priority)
  if (patientTerms) {
    for (const term of patientTerms) {
      if (lowerText.includes(term)) {
        matches.push({
          term,
          category: 'personal',
          confidence: 0.95,
          isFromPatientData: true,
        });
      }
    }
  }

  // Check anatomical terms
  for (const term of ANATOMICAL_TERMS) {
    if (lowerText.includes(term)) {
      matches.push({
        term,
        category: 'anatomical',
        confidence: 0.9,
      });
    }
  }

  // Check condition terms
  for (const term of CONDITION_TERMS) {
    if (lowerText.includes(term)) {
      matches.push({
        term,
        category: 'condition',
        confidence: 0.9,
      });
    }
  }

  // Check procedure terms
  for (const term of PROCEDURE_TERMS) {
    if (lowerText.includes(term)) {
      matches.push({
        term,
        category: 'procedure',
        confidence: 0.9,
      });
    }
  }

  return matches;
}

/**
 * Check if the text contains personal health question indicators
 */
function containsPersonalIndicators(text: string): boolean {
  const lowerText = text.toLowerCase();
  return PERSONAL_QUESTION_INDICATORS.some(indicator =>
    lowerText.includes(indicator)
  );
}

/**
 * Extract personal context from question
 */
function extractPersonalContext(
  text: string,
  patientContext?: PatientHealthContext
): {
  mentionedConditions: string[];
  mentionedMedications: string[];
  mentionedSymptoms: string[];
} | undefined {
  if (!patientContext) return undefined;

  const lowerText = text.toLowerCase();
  const result = {
    mentionedConditions: [] as string[],
    mentionedMedications: [] as string[],
    mentionedSymptoms: [] as string[],
  };

  // Check for mentioned conditions
  patientContext.conditions.forEach(c => {
    if (lowerText.includes(c.name.toLowerCase())) {
      result.mentionedConditions.push(c.name);
    }
  });

  // Check for mentioned medications
  patientContext.medications.forEach(m => {
    if (lowerText.includes(m.name.toLowerCase()) ||
        lowerText.includes(m.genericName.toLowerCase())) {
      result.mentionedMedications.push(m.name);
    }
  });

  // Check for mentioned symptoms
  patientContext.symptoms?.forEach(s => {
    const descWords = s.description.toLowerCase().split(/\s+/);
    if (descWords.some(word => word.length > 3 && lowerText.includes(word))) {
      result.mentionedSymptoms.push(s.description);
    }
  });

  // Only return if something was found
  if (result.mentionedConditions.length > 0 ||
      result.mentionedMedications.length > 0 ||
      result.mentionedSymptoms.length > 0) {
    return result;
  }

  return undefined;
}

/**
 * Generate suggested enhancements for personalized queries
 */
function generateSuggestedEnhancements(
  text: string,
  questionType: QuestionType,
  patientContext?: PatientHealthContext
): string[] | undefined {
  if (!patientContext) return undefined;

  const suggestions: string[] = [];
  const lowerText = text.toLowerCase();

  // If asking about a condition they have
  if (patientContext.conditions.length > 0 && !containsPersonalIndicators(lowerText)) {
    const relevantCondition = patientContext.conditions.find(c =>
      lowerText.includes(c.name.toLowerCase())
    );
    if (relevantCondition) {
      suggestions.push(
        `Add "for someone with ${relevantCondition.name}" for personalized education`
      );
    }
  }

  // If asking about a medication they take
  if (patientContext.medications.length > 0 && !containsPersonalIndicators(lowerText)) {
    const relevantMed = patientContext.medications.find(m =>
      lowerText.includes(m.name.toLowerCase()) ||
      lowerText.includes(m.genericName.toLowerCase())
    );
    if (relevantMed) {
      suggestions.push(
        `Add context about your use of ${relevantMed.name} for tailored education`
      );
    }
  }

  // For general anatomy questions when user has relevant conditions
  if (questionType === 'definition' || questionType === 'physiology') {
    if (patientContext.conditions.length > 0 && suggestions.length === 0) {
      suggestions.push(
        'Try asking "How does this relate to my health conditions?" for personalized learning'
      );
    }
  }

  return suggestions.length > 0 ? suggestions : undefined;
}

/**
 * Detect question type from text
 */
function detectQuestionType(
  text: string,
  hasContext: boolean,
  hasPatientContext: boolean
): QuestionType {
  const normalizedText = text.trim().toLowerCase();

  // Check for personal question indicators first
  if (hasPatientContext && containsPersonalIndicators(normalizedText)) {
    return 'personal';
  }

  // Sort patterns by priority
  const sortedPatterns = [...QUESTION_PATTERNS].sort((a, b) => a.priority - b.priority);

  for (const { patterns, type } of sortedPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(normalizedText)) {
        return type;
      }
    }
  }

  // Check for implicit follow-up based on context
  if (hasContext && !normalizedText.includes('?')) {
    // Short queries with context might be follow-ups
    if (normalizedText.split(' ').length <= 4) {
      return 'followup';
    }
  }

  return 'general';
}

/**
 * Normalize transcript text
 */
function normalizeTranscript(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[.!?]+$/, '')
    .trim();
}

/**
 * Detect if text references the selected region
 */
function detectRegionReference(text: string, selectedRegion?: string): string | undefined {
  if (!selectedRegion) return undefined;

  const lowerText = text.toLowerCase();
  const regionParts = selectedRegion.toLowerCase().split(/[.-]/);

  for (const part of regionParts) {
    if (part.length > 2 && lowerText.includes(part)) {
      return selectedRegion;
    }
  }

  // Check for pronouns that might reference the region
  if (/\b(it|this|that|the)\b/i.test(lowerText)) {
    return selectedRegion;
  }

  return undefined;
}

// ============================================================================
// Waveform Component
// ============================================================================

interface WaveformVisualizerProps {
  isActive: boolean;
  barCount?: number;
}

const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  isActive,
  barCount = 20,
}) => {
  return (
    <div
      className={`voice-medical__waveform ${isActive ? 'voice-medical__waveform--active' : ''}`}
      aria-hidden="true"
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="voice-medical__waveform-bar"
          style={{
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${0.3 + (i % 4) * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// Medical Term Badge Component
// ============================================================================

interface MedicalTermBadgeProps {
  terms: MedicalTermMatch[];
}

const MedicalTermBadges: React.FC<MedicalTermBadgeProps> = ({ terms }) => {
  if (terms.length === 0) return null;

  // Show max 3 terms, prioritizing personal terms
  const sortedTerms = [...terms].sort((a, b) => {
    if (a.isFromPatientData && !b.isFromPatientData) return -1;
    if (!a.isFromPatientData && b.isFromPatientData) return 1;
    return b.confidence - a.confidence;
  });
  const displayTerms = sortedTerms.slice(0, 3);

  return (
    <div className="voice-medical__terms" aria-label="Detected medical terms">
      {displayTerms.map((term, index) => (
        <span
          key={`${term.term}-${index}`}
          className={`voice-medical__term-badge voice-medical__term-badge--${term.category}`}
        >
          {term.isFromPatientData && (
            <HeartIcon className="voice-medical__term-icon" />
          )}
          {term.term}
        </span>
      ))}
      {terms.length > 3 && (
        <span className="voice-medical__term-badge voice-medical__term-badge--more">
          +{terms.length - 3} more
        </span>
      )}
    </div>
  );
};

// ============================================================================
// Question Type Indicator Component
// ============================================================================

interface QuestionTypeIndicatorProps {
  type: QuestionType;
  isPersonalized?: boolean;
}

const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  definition: 'Definition Request',
  physiology: 'Physiology Explanation',
  mechanism: 'Mechanism/Pathophysiology',
  etiology: 'Etiology/Causes',
  clinical: 'Clinical Practice',
  education: 'Educational Content',
  followup: 'Follow-up Question',
  personal: 'Personalized Learning',
  general: 'General Question',
};

const QUESTION_TYPE_ICONS: Record<QuestionType, string> = {
  definition: 'ABC',
  physiology: 'HOW',
  mechanism: 'WHY',
  etiology: 'CAUSE',
  clinical: 'RX',
  education: 'EDU',
  followup: '...',
  personal: 'YOU',
  general: '?',
};

const QuestionTypeIndicator: React.FC<QuestionTypeIndicatorProps> = ({
  type,
  isPersonalized,
}) => {
  return (
    <div className={`voice-medical__question-type voice-medical__question-type--${type} ${isPersonalized ? 'voice-medical__question-type--personalized' : ''}`}>
      <span className="voice-medical__question-type-icon">
        {type === 'personal' && <HeartIcon className="voice-medical__heart-icon" />}
        {type !== 'personal' && QUESTION_TYPE_ICONS[type]}
      </span>
      <span className="voice-medical__question-type-label">{QUESTION_TYPE_LABELS[type]}</span>
      {isPersonalized && type !== 'personal' && (
        <span className="voice-medical__personalized-badge">Personalized</span>
      )}
    </div>
  );
};

// ============================================================================
// Patient Context Indicator Component
// ============================================================================

interface PatientContextIndicatorProps {
  context: PatientHealthContext;
  onSuggest: (suggestion: string) => void;
}

const PatientContextIndicator: React.FC<PatientContextIndicatorProps> = ({
  context,
  onSuggest,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasData = context.conditions.length > 0 ||
    context.medications.length > 0 ||
    context.labResults.length > 0;

  if (!hasData) return null;

  const suggestions: string[] = [];
  if (context.conditions.length > 0) {
    suggestions.push(`How does my ${context.conditions[0].name} affect this region?`);
  }
  if (context.medications.length > 0) {
    suggestions.push(`Tell me about ${context.medications[0].name} and this area`);
  }

  return (
    <div className="voice-medical__patient-context">
      <button
        className="voice-medical__patient-context-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <HeartIcon className="voice-medical__patient-icon" />
        <span>Health context available</span>
        <svg
          className={`voice-medical__chevron ${isExpanded ? 'voice-medical__chevron--open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isExpanded && (
        <div className="voice-medical__patient-context-content">
          <p className="voice-medical__patient-context-intro">
            Ask personalized questions about your health. Try:
          </p>
          <div className="voice-medical__patient-suggestions">
            {suggestions.map((suggestion, i) => (
              <button
                key={i}
                className="voice-medical__patient-suggestion"
                onClick={() => onSuggest(suggestion)}
              >
                "{suggestion}"
              </button>
            ))}
          </div>
          <p className="voice-medical__patient-disclaimer">
            Educational only - not medical advice
          </p>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

/**
 * Voice Medical Input Component
 *
 * A medical-aware speech recognition component with:
 * - Large, prominent microphone button with pulsing animation
 * - Waveform visualization while speaking
 * - Real-time transcription display
 * - Medical terminology recognition
 * - Smart question type detection
 * - Context-aware follow-up question handling
 * - Patient health context integration for personalized education
 *
 * @example
 * ```tsx
 * <VoiceMedicalInput
 *   onTranscript={(text) => console.log('Transcript:', text)}
 *   onQuestionDetected={(q, type) => console.log('Question:', q, 'Type:', type)}
 *   selectedRegion="cardiovascular.heart"
 *   isEnabled={true}
 *   patientHealthContext={{
 *     conditions: [{ conditionId: '1', name: 'Hypertension', status: 'active' }],
 *     medications: [],
 *     labResults: [],
 *   }}
 * />
 * ```
 */
export const VoiceMedicalInput: React.FC<VoiceMedicalInputProps> = ({
  onTranscript,
  onQuestionDetected,
  selectedRegion,
  isEnabled,
  conversationContext = [],
  patientHealthContext,
  className = '',
  size = 'large',
  language = 'en-US',
  showPersonalizedSuggestions = true,
}) => {
  // State
  const [inputState, setInputState] = useState<VoiceInputState>('idle');
  const [transcript, setTranscript] = useState('');
  const [detectedTerms, setDetectedTerms] = useState<MedicalTermMatch[]>([]);
  const [questionType, setQuestionType] = useState<QuestionType>('general');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPersonalized, setIsPersonalized] = useState(false);

  // Refs
  const processingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptRef = useRef(transcript);

  // Keep transcript ref in sync
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  // Voice hook
  const voice = useVoiceFallback(language, true);

  // Build patient-specific terms for detection
  const patientTerms = useMemo(
    () => buildPatientTerms(patientHealthContext),
    [patientHealthContext]
  );

  // Determine if there's conversation context
  const hasContext = useMemo(
    () => conversationContext.length > 0 || !!selectedRegion,
    [conversationContext, selectedRegion]
  );

  const hasPatientContext = useMemo(
    () => !!patientHealthContext && (
      patientHealthContext.conditions.length > 0 ||
      patientHealthContext.medications.length > 0 ||
      patientHealthContext.labResults.length > 0
    ),
    [patientHealthContext]
  );

  // Process transcript and detect medical content
  const processTranscript = useCallback(
    (text: string) => {
      if (!text.trim()) {
        setDetectedTerms([]);
        setQuestionType('general');
        setIsPersonalized(false);
        return;
      }

      // Detect medical terms including patient-specific ones
      const terms = detectMedicalTerms(text, patientTerms);
      setDetectedTerms(terms);

      // Detect question type
      const qType = detectQuestionType(text, hasContext, hasPatientContext);
      setQuestionType(qType);

      // Check if personalized
      const personalized = qType === 'personal' ||
        terms.some(t => t.isFromPatientData) ||
        containsPersonalIndicators(text.toLowerCase());
      setIsPersonalized(personalized);

      // Call transcript callback
      onTranscript(text);
    },
    [hasContext, hasPatientContext, patientTerms, onTranscript]
  );

  // Handle voice transcription changes
  useEffect(() => {
    if (voice.transcription && inputState === 'listening') {
      const normalized = normalizeTranscript(voice.transcription);
      setTranscript(normalized);
      processTranscript(normalized);
    }
  }, [voice.transcription, inputState, processTranscript]);

  // Handle voice state changes
  useEffect(() => {
    if (voice.isRecording && inputState === 'idle') {
      setInputState('listening');
    } else if (!voice.isRecording && inputState === 'listening' && transcriptRef.current) {
      // Transition to processing when recording stops and we have content
      setInputState('processing');

      // Process final transcript after a short delay
      processingTimerRef.current = setTimeout(() => {
        const finalText = transcriptRef.current;
        if (finalText) {
          const terms = detectMedicalTerms(finalText, patientTerms);
          const qType = detectQuestionType(finalText, hasContext, hasPatientContext);
          const relatedRegion = detectRegionReference(finalText, selectedRegion);
          const personalContext = extractPersonalContext(finalText, patientHealthContext);
          const suggestions = generateSuggestedEnhancements(finalText, qType, patientHealthContext);
          const personalized = qType === 'personal' ||
            terms.some(t => t.isFromPatientData) ||
            !!personalContext;

          const detectedQuestion: DetectedQuestion = {
            originalText: finalText,
            type: qType,
            normalizedText: finalText,
            medicalTerms: terms,
            isFollowUp: qType === 'followup',
            relatedRegion,
            isPersonalized: personalized,
            personalContext,
            suggestedEnhancements: suggestions,
          };

          onQuestionDetected(finalText, qType, detectedQuestion);
        }

        // Reset state
        setInputState('idle');
        setTranscript('');
        setDetectedTerms([]);
        setQuestionType('general');
        setIsPersonalized(false);
      }, 500);
    }

    return () => {
      if (processingTimerRef.current) {
        clearTimeout(processingTimerRef.current);
      }
    };
  }, [voice.isRecording, inputState, hasContext, hasPatientContext, selectedRegion, patientHealthContext, patientTerms, onQuestionDetected]);

  // Handle voice errors
  useEffect(() => {
    if (voice.error) {
      setInputState('error');
      setErrorMessage(voice.error);

      // Auto-reset error state after 3 seconds
      const timer = setTimeout(() => {
        setInputState('idle');
        setErrorMessage(null);
        voice.clearError();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [voice.error, voice.clearError]);

  // Toggle recording
  const handleToggleRecording = useCallback(() => {
    if (!isEnabled) return;

    if (inputState === 'listening') {
      voice.stopRecording();
    } else if (inputState === 'idle') {
      if (!voice.sttAvailable) {
        setInputState('error');
        setErrorMessage('Speech recognition is not available in this browser');
        return;
      }

      setTranscript('');
      setDetectedTerms([]);
      setQuestionType('general');
      setIsPersonalized(false);
      setErrorMessage(null);
      voice.startRecording();
    }
  }, [isEnabled, inputState, voice]);

  // Cancel recording
  const handleCancel = useCallback(() => {
    voice.stopRecording();
    setInputState('idle');
    setTranscript('');
    setDetectedTerms([]);
    setQuestionType('general');
    setIsPersonalized(false);
    setErrorMessage(null);
  }, [voice]);

  // Retry after error
  const handleRetry = useCallback(() => {
    setInputState('idle');
    setErrorMessage(null);
    voice.clearError();
  }, [voice.clearError]);

  // Handle suggestion click
  const handleSuggestion = useCallback((suggestion: string) => {
    onTranscript(suggestion);
    const terms = detectMedicalTerms(suggestion, patientTerms);
    const qType = detectQuestionType(suggestion, hasContext, hasPatientContext);
    const personalContext = extractPersonalContext(suggestion, patientHealthContext);

    const detectedQuestion: DetectedQuestion = {
      originalText: suggestion,
      type: qType,
      normalizedText: suggestion,
      medicalTerms: terms,
      isFollowUp: false,
      isPersonalized: true,
      personalContext,
    };

    onQuestionDetected(suggestion, qType, detectedQuestion);
  }, [onTranscript, onQuestionDetected, patientTerms, hasContext, hasPatientContext, patientHealthContext]);

  // Keyboard support
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isEnabled) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleToggleRecording();
      } else if (e.key === 'Escape' && inputState === 'listening') {
        e.preventDefault();
        handleCancel();
      }
    },
    [isEnabled, inputState, handleToggleRecording, handleCancel]
  );

  // Get aria-label based on state
  const getAriaLabel = (): string => {
    switch (inputState) {
      case 'listening':
        return 'Listening for your medical question. Press again to stop.';
      case 'processing':
        return 'Processing your question...';
      case 'error':
        return errorMessage || 'Error occurred. Press to retry.';
      default:
        return 'Press to ask a medical question using voice';
    }
  };

  // Get status text
  const getStatusText = (): string => {
    switch (inputState) {
      case 'listening':
        return 'Listening...';
      case 'processing':
        return 'Processing...';
      case 'error':
        return 'Error';
      default:
        return 'Tap to speak';
    }
  };

  // Render
  return (
    <div
      className={`voice-medical ${className} voice-medical--${size} voice-medical--${inputState} ${isPersonalized ? 'voice-medical--personalized' : ''}`}
      role="region"
      aria-label="Medical voice input"
    >
      {/* Context indicator */}
      {selectedRegion && inputState === 'idle' && (
        <div className="voice-medical__context">
          <span className="voice-medical__context-label">Context:</span>
          <span className="voice-medical__context-region">{selectedRegion}</span>
        </div>
      )}

      {/* Patient context indicator */}
      {showPersonalizedSuggestions && patientHealthContext && inputState === 'idle' && (
        <PatientContextIndicator
          context={patientHealthContext}
          onSuggest={handleSuggestion}
        />
      )}

      {/* Main microphone button */}
      <button
        type="button"
        className={`voice-medical__button voice-medical__button--${inputState} ${isPersonalized ? 'voice-medical__button--personalized' : ''}`}
        onClick={handleToggleRecording}
        onKeyDown={handleKeyDown}
        disabled={!isEnabled || inputState === 'processing'}
        aria-label={getAriaLabel()}
        aria-pressed={inputState === 'listening'}
        aria-busy={inputState === 'processing'}
      >
        <span className="voice-medical__button-content">
          {inputState === 'idle' && <MicrophoneIcon className="voice-medical__icon" />}
          {inputState === 'listening' && (
            <>
              <MicrophoneIcon className="voice-medical__icon voice-medical__icon--listening" />
              <span className="voice-medical__pulse" aria-hidden="true" />
              <span className="voice-medical__pulse voice-medical__pulse--delayed" aria-hidden="true" />
            </>
          )}
          {inputState === 'processing' && (
            <LoadingSpinner className="voice-medical__icon voice-medical__icon--processing" />
          )}
          {inputState === 'error' && <ErrorIcon className="voice-medical__icon voice-medical__icon--error" />}
        </span>
      </button>

      {/* Status text */}
      <div className="voice-medical__status" aria-live="polite">
        {getStatusText()}
      </div>

      {/* Waveform visualization */}
      {inputState === 'listening' && (
        <WaveformVisualizer isActive={true} barCount={20} />
      )}

      {/* Transcription display */}
      {(inputState === 'listening' || inputState === 'processing') && (
        <div className="voice-medical__transcript-container">
          <div className="voice-medical__transcript" aria-live="polite" aria-atomic="true">
            {transcript || 'Speak your medical question...'}
          </div>

          {/* Question type indicator */}
          {transcript && (questionType !== 'general' || isPersonalized) && (
            <QuestionTypeIndicator type={questionType} isPersonalized={isPersonalized} />
          )}

          {/* Medical terms detected */}
          {detectedTerms.length > 0 && <MedicalTermBadges terms={detectedTerms} />}
        </div>
      )}

      {/* Error message with retry */}
      {inputState === 'error' && errorMessage && (
        <div className="voice-medical__error" role="alert">
          <span className="voice-medical__error-message">{errorMessage}</span>
          <button
            type="button"
            className="voice-medical__retry-button"
            onClick={handleRetry}
            aria-label="Retry voice input"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Cancel button when listening */}
      {inputState === 'listening' && (
        <button
          type="button"
          className="voice-medical__cancel-button"
          onClick={handleCancel}
          aria-label="Cancel voice input"
        >
          Cancel
        </button>
      )}

      {/* Hints */}
      {inputState === 'idle' && (
        <div className="voice-medical__hints">
          <p className="voice-medical__hint">
            Try asking: "What is hypertension?" or "How does the heart pump blood?"
          </p>
          {hasPatientContext && (
            <p className="voice-medical__hint voice-medical__hint--personalized">
              <HeartIcon className="voice-medical__hint-icon" />
              Ask "How does this relate to my condition?" for personalized learning
            </p>
          )}
          {selectedRegion && !hasPatientContext && (
            <p className="voice-medical__hint voice-medical__hint--context">
              Ask follow-up questions about the selected region
            </p>
          )}
        </div>
      )}

      {/* Educational disclaimer for personalized queries */}
      {isPersonalized && (
        <div className="voice-medical__disclaimer">
          Educational content only - not medical advice. Consult your healthcare provider for medical decisions.
        </div>
      )}
    </div>
  );
};

export default VoiceMedicalInput;
