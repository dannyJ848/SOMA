# Granular Clinical Intelligence Architecture

## Overview
Clinical intelligence modules provide educational decision support while maintaining strict boundaries between education and diagnosis.

## Directory Structure

```
core/clinical/
├── correlation/                 # Data correlation engines
│   ├── symptom-lab/
│   │   ├── pattern-matcher.ts
│   │   ├── temporal-analysis.ts
│   │   └── index.ts
│   │
│   ├── lifestyle-health/
│   │   ├── sleep-impact.ts
│   │   ├── activity-impact.ts
│   │   └── index.ts
│   │
│   └── index.ts
│
├── pattern-recognition/         # Pattern detection
│   ├── cyclical/
│   │   ├── menstrual-cycle.ts
│   │   ├── seasonal.ts
│   │   └── index.ts
│   │
│   ├── progression/
│   │   ├── deterioration.ts
│   │   ├── improvement.ts
│   │   └── index.ts
│   │
│   └── index.ts
│
├── educational-guidance/        # Non-diagnostic guidance
│   ├── red-flag-detector.ts    # When to see a doctor
│   ├── lifestyle-suggestions.ts
│   ├── monitoring-recommendations.ts
│   └── index.ts
│
├── differential-explorer/       # Educational differentials
│   ├── generator.ts            # Generate educational possibilities
│   ├── ranker.ts               # Rank by likelihood (educational)
│   ├── explainer.ts            # Explain why each is considered
│   └── index.ts
│
├── care-planning/               # Educational care planning
│   ├── appointment-prep.ts     # Prepare for doctor visit
│   ├── question-generator.ts   # Questions to ask
│   └── index.ts
│
└── safety/                      # Clinical safety barriers
    ├── diagnostic-barrier.ts   # Prevent diagnostic outputs
    ├── treatment-barrier.ts    # Prevent treatment advice
    ├── escalation-detector.ts  # Detect when to urge professional care
    └── index.ts
```

## Safety-First Design

```typescript
// core/clinical/safety/diagnostic-barrier.ts

export interface ContentCheck {
  safe: boolean;
  violations: Violation[];
  suggestedAlternative?: string;
}

export interface Violation {
  type: 'DIAGNOSIS' | 'TREATMENT' | 'PRESCRIPTION' | 'PROGNOSIS';
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  excerpt: string;
  reason: string;
}

const DIAGNOSTIC_PATTERNS = [
  /you have\s+([a-z\s]+)/i,
  /this is\s+([a-z\s]+disease|disorder|syndrome|condition)/i,
  /diagnosis[\s:]*([a-z\s]+)/i,
  /you are suffering from\s+([a-z\s]+)/i,
];

const TREATMENT_PATTERNS = [
  /you should take\s+([a-z\s]+)/i,
  /prescribe\s+([a-z\s]+)/i,
  /treatment is\s+([a-z\s]+)/i,
  /you need\s+(surgery|medication|therapy)/i,
];

export function checkForDiagnosticContent(text: string): ContentCheck {
  const violations: Violation[] = [];

  for (const pattern of DIAGNOSTIC_PATTERNS) {
    const match = text.match(pattern);
    if (match) {
      violations.push({
        type: 'DIAGNOSIS',
        severity: 'HIGH',
        excerpt: match[0],
        reason: 'Direct diagnostic statement detected',
      });
    }
  }

  for (const pattern of TREATMENT_PATTERNS) {
    const match = text.match(pattern);
    if (match) {
      violations.push({
        type: 'TREATMENT',
        severity: 'HIGH',
        excerpt: match[0],
        reason: 'Direct treatment recommendation detected',
      });
    }
  }

  return {
    safe: violations.length === 0,
    violations,
  };
}

export function sanitizeOutput(text: string): string {
  const check = checkForDiagnosticContent(text);
  
  if (check.safe) return text;

  // Replace violations with safe alternatives
  let sanitized = text;
  
  for (const violation of check.violations) {
    if (violation.type === 'DIAGNOSIS') {
      sanitized = sanitized.replace(
        violation.excerpt,
        '[Note: Only a healthcare provider can diagnose conditions]'
      );
    }
    if (violation.type === 'TREATMENT') {
      sanitized = sanitized.replace(
        violation.excerpt,
        '[Note: Treatment decisions should be made with your healthcare provider]'
      );
    }
  }

  return sanitized;
}
```

## Educational Differential Generator

```typescript
// core/clinical/differential-explorer/generator.ts

import type { Symptom } from '../../data/entities/symptom/types.js';
import type { Condition } from '../../data/entities/condition/types.js';

export interface EducationalDifferential {
  conditionName: string;
  description: string;
  whyConsidered: string[];
  supportingFactors: string[];
  contradictingFactors: string[];
  educationalResources: string[];
}

export interface DifferentialInput {
  symptoms: Symptom[];
  knownConditions: Condition[];
  recentLabs?: string[];
}

export function generateEducationalDifferentials(
  input: DifferentialInput
): EducationalDifferential[] {
  // This is purely educational - uses HPO ontology mappings
  // to show what conditions MIGHT be associated with symptoms
  // WITHOUT suggesting any diagnosis

  const differentials: EducationalDifferential[] = [];

  // Example: If user has headache symptoms
  const headaches = input.symptoms.filter(s => 
    s.description.toLowerCase().includes('headache')
  );

  if (headaches.length > 0) {
    differentials.push({
      conditionName: 'Tension-Type Headache',
      description: 'The most common type of headache, often related to stress or muscle tension.',
      whyConsidered: ['Headache is present', 'Common in general population'],
      supportingFactors: headaches.some(h => h.severity <= 5) ? ['Mild to moderate severity'] : [],
      contradictingFactors: [],
      educationalResources: ['https://www.who.int/news-room/fact-sheets/detail/headache-disorders'],
    });

    differentials.push({
      conditionName: 'Migraine',
      description: 'A neurological condition causing severe headaches, often with other symptoms.',
      whyConsidered: ['Headache is present', 'Can be severe'],
      supportingFactors: headaches.some(h => h.severity >= 7) ? ['Severe intensity'] : [],
      contradictingFactors: [],
      educationalResources: ['https://www.migrainetrust.org/about-migraine/what-is-migraine/'],
    });
  }

  // Always include disclaimer
  return differentials.map(d => ({
    ...d,
    description: `${d.description}\n\n[This is educational information only. Only a healthcare provider can diagnose conditions.]`,
  }));
}
```

## Red Flag Detection

```typescript
// core/clinical/safety/red-flag-detector.ts

export interface RedFlag {
  symptom: string;
  severity: 'URGENT' | 'PROMPT' | 'ROUTINE';
  message: string;
  timeframe: string;
}

const RED_FLAGS: RedFlag[] = [
  {
    symptom: 'chest pain',
    severity: 'URGENT',
    message: 'Chest pain can indicate serious conditions requiring immediate evaluation.',
    timeframe: 'Seek emergency care now',
  },
  {
    symptom: 'severe headache',
    severity: 'PROMPT',
    message: 'Sudden severe headaches warrant prompt medical evaluation.',
    timeframe: 'See a doctor within 24 hours',
  },
  {
    symptom: 'blood in stool',
    severity: 'PROMPT',
    message: 'Blood in stool should be evaluated by a healthcare provider.',
    timeframe: 'Schedule appointment soon',
  },
];

export function checkForRedFlags(symptoms: string[]): RedFlag[] {
  const detected: RedFlag[] = [];

  for (const symptom of symptoms) {
    const lower = symptom.toLowerCase();
    for (const flag of RED_FLAGS) {
      if (lower.includes(flag.symptom) && !detected.includes(flag)) {
        detected.push(flag);
      }
    }
  }

  return detected.sort((a, b) => {
    const severityOrder = { URGENT: 0, PROMPT: 1, ROUTINE: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });
}
```

## Design Principles

1. **Educational Only**: Never cross into diagnostic territory
2. **Transparent Uncertainty**: Always communicate uncertainty
3. **Source Citations**: Every claim backed by sources
4. **Professional Escalation**: Clear guidance on when to see a doctor
5. **User Control**: Users choose what to explore
