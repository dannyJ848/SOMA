# Content Documentation

This document describes the content system and data structures used in The Biological Self application.

---

## Table of Contents

1. [Content Architecture](#content-architecture)
2. [Anatomical Content](#anatomical-content)
3. [Physiology Content](#physiology-content)
4. [Medical Content](#medical-content)
5. [Educational Content Levels](#educational-content-levels)
6. [Content Guidelines](#content-guidelines)
7. [Translation Guide](#translation-guide)

---

## Content Architecture

### Directory Structure

```
core/
├── content/                    # Primary content directory
│   ├── types.ts               # Content type definitions
│   ├── digestive/             # By body system
│   │   └── anatomy/
│   ├── respiratory/
│   │   └── anatomy/
│   ├── endocrine/
│   └── renal/
│       └── anatomy/
│
├── anatomy/                    # Anatomical system modules
│   ├── cardiovascular/
│   │   ├── types.ts
│   │   ├── index.ts
│   │   └── store.ts
│   ├── respiratory/
│   ├── digestive/
│   ├── nervous/
│   ├── musculoskeletal/
│   ├── urinary/
│   ├── reproductive/
│   ├── endocrine/
│   ├── lymphatic/
│   └── integumentary/
│
├── physiology/                 # Physiology content
│   ├── types.ts
│   ├── index.ts
│   ├── body-systems.ts
│   ├── pathways/
│   ├── electrolytes/
│   └── metabolism/
│       ├── glucose/
│       └── lipid/
│
├── patient-education/          # Educational content
│   ├── types.ts
│   ├── index.ts
│   └── store.ts
│
└── medical-simulation/         # Simulation content
    ├── medications/
    ├── conditions/
    └── encyclopedia/
```

---

## Anatomical Content

### Structure Definition

```typescript
interface AnatomicalStructure {
  id: string;
  name: string;
  latinName?: string;
  system: AnatomicalSystem;
  region: BodyRegion;

  // Hierarchical relationships
  parentId?: string;
  childIds?: string[];

  // Spatial information
  position?: {
    x: number;
    y: number;
    z: number;
  };

  // Educational content by complexity level
  descriptions: {
    1: string;  // 8th grade
    2: string;  // 10th grade
    3: string;  // 12th grade
    4: string;  // College/pre-med
    5: string;  // Graduate/expert
    6?: string; // Clinical/physician
  };

  // Functions and clinical relevance
  functions: string[];
  clinicalRelevance: string[];

  // Blood supply, innervation, etc.
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: string[];
  lymphaticDrainage?: string[];

  // Related content
  relatedStructures?: string[];
  relatedConditions?: string[];
  relatedProcedures?: string[];

  // Multimedia references
  imageIds?: string[];
  modelPartIds?: string[];
}
```

### System Types

```typescript
type AnatomicalSystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'urinary'
  | 'reproductive'
  | 'endocrine'
  | 'lymphatic'
  | 'integumentary';
```

### Region Types

```typescript
type BodyRegion =
  | 'head'
  | 'neck'
  | 'thorax'
  | 'abdomen'
  | 'pelvis'
  | 'upper-extremity'
  | 'lower-extremity'
  | 'back';
```

### Example Content (JSON)

```json
{
  "id": "heart",
  "name": "Heart",
  "latinName": "Cor",
  "system": "cardiovascular",
  "region": "thorax",
  "descriptions": {
    "1": "The heart is a muscular pump about the size of your fist that pushes blood throughout your body. It beats about 100,000 times every day.",
    "2": "The heart is a four-chambered muscular organ that pumps blood through two circuits: pulmonary (to lungs) and systemic (to body). It beats automatically due to specialized pacemaker cells.",
    "3": "The heart consists of four chambers (two atria, two ventricles) separated by valves. The SA node initiates electrical impulses that coordinate contraction. Cardiac output equals heart rate times stroke volume.",
    "4": "The myocardium consists of cardiomyocytes with intercalated discs enabling syncytial contraction. The conduction system (SA node, AV node, bundle of His, Purkinje fibers) maintains automaticity. Cardiac output is regulated by preload, afterload, and contractility per Frank-Starling mechanism.",
    "5": "The cardiac action potential phases differ between pacemaker and contractile cells. Phase 0 in contractile cells involves rapid Na+ influx; the plateau (phase 2) results from Ca2+ influx through L-type channels. The RAAS, ANP/BNP, and autonomic tone modulate cardiovascular parameters."
  },
  "functions": [
    "Pumps oxygenated blood to systemic circulation",
    "Pumps deoxygenated blood to pulmonary circulation",
    "Maintains blood pressure",
    "Secretes natriuretic peptides"
  ],
  "clinicalRelevance": [
    "Myocardial infarction",
    "Heart failure",
    "Arrhythmias",
    "Valvular disease"
  ],
  "bloodSupply": ["Left coronary artery", "Right coronary artery"],
  "innervation": ["Vagus nerve (parasympathetic)", "Cardiac sympathetic nerves"],
  "relatedStructures": ["aorta", "pulmonary-artery", "coronary-arteries"],
  "relatedConditions": ["hypertension", "coronary-artery-disease", "heart-failure"]
}
```

---

## Physiology Content

### Pathway Definition

```typescript
interface PhysiologicalPathway {
  id: string;
  name: string;
  category: 'metabolic' | 'signaling' | 'transport' | 'regulatory';

  // Step-by-step process
  steps: PathwayStep[];

  // Educational content
  descriptions: ComplexityLevelContent;

  // Inputs and outputs
  inputs: Molecule[];
  outputs: Molecule[];

  // Location
  location: string[];  // Cellular, organ, tissue location

  // Regulation
  activators?: string[];
  inhibitors?: string[];

  // Clinical connections
  clinicalRelevance: string[];
  relatedConditions?: string[];
}

interface PathwayStep {
  number: number;
  name: string;
  enzyme?: string;
  substrate: string;
  product: string;
  energyChange?: string;  // ATP produced/consumed
  description: ComplexityLevelContent;
}
```

### Example: Glucose Metabolism

```typescript
const glycolysis: PhysiologicalPathway = {
  id: 'glycolysis',
  name: 'Glycolysis',
  category: 'metabolic',
  descriptions: {
    1: "Glycolysis breaks down sugar (glucose) into smaller pieces to release energy for your cells to use.",
    2: "Glycolysis is a 10-step process that splits one glucose molecule into two pyruvate molecules, producing 2 ATP and 2 NADH.",
    3: "Glycolysis occurs in the cytoplasm and represents the first stage of cellular respiration. It is an oxygen-independent pathway yielding 2 ATP, 2 NADH, and 2 pyruvate per glucose.",
    // ...
  },
  steps: [
    {
      number: 1,
      name: "Glucose phosphorylation",
      enzyme: "Hexokinase",
      substrate: "Glucose",
      product: "Glucose-6-phosphate",
      energyChange: "-1 ATP"
    },
    // ... more steps
  ],
  location: ["Cytoplasm"],
  clinicalRelevance: [
    "Warburg effect in cancer cells",
    "Pyruvate kinase deficiency",
    "Diabetes mellitus"
  ]
};
```

---

## Medical Content

### Condition Definition

```typescript
interface Condition {
  id: string;
  name: string;
  icdCode?: string;
  category: ConditionCategory;

  // Educational content
  descriptions: ComplexityLevelContent;

  // Epidemiology
  prevalence?: string;
  demographics?: string;
  riskFactors: string[];

  // Clinical presentation
  symptoms: ConditionSymptom[];
  signs: string[];

  // Pathophysiology
  pathophysiology: ComplexityLevelContent;
  affectedStructures: string[];

  // Diagnosis
  diagnosticCriteria?: string[];
  diagnosticTests: string[];
  differentialDiagnosis: string[];

  // Treatment
  treatments: Treatment[];
  prognosis?: string;

  // Progression
  phases?: DiseasePhase[];
  complications?: string[];

  // Prevention
  prevention?: string[];
}

interface DiseasePhase {
  id: string;
  name: string;
  timeframe: string;
  description: ComplexityLevelContent;
  symptoms: string[];
  anatomicalChanges: StructureChange[];
  labFindings?: string[];
  imagingFindings?: string[];
  treatments: string[];
}
```

### Medication Definition

```typescript
interface Medication {
  id: string;
  brandNames: string[];
  genericName: string;
  drugClass: string;
  rxNormCode?: string;

  // Educational content
  descriptions: ComplexityLevelContent;

  // Mechanism
  mechanismOfAction: ComplexityLevelContent;
  targetReceptors?: string[];
  targetEnzymes?: string[];
  affectedPathways?: string[];

  // Pharmacokinetics
  pharmacokinetics: {
    absorption: string;
    distribution: string;
    metabolism: string;
    excretion: string;
    halfLife: string;
  };

  // Indications and contraindications
  indications: string[];
  contraindications: string[];
  warnings: string[];

  // Effects
  therapeuticEffects: OrganEffect[];
  adverseEffects: OrganEffect[];

  // Interactions
  drugInteractions: DrugInteraction[];
  foodInteractions?: string[];

  // Dosing
  dosingGuidelines: DosingGuideline[];
}

interface OrganEffect {
  structureId: string;
  structureName: string;
  effectType: 'therapeutic' | 'adverse' | 'neutral';
  description: string;
  mechanism?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  frequency?: 'common' | 'uncommon' | 'rare';
}
```

---

## Educational Content Levels

### Complexity Level Definitions

| Level | Name | Reading Level | Target Audience |
|-------|------|---------------|-----------------|
| 1 | Foundation | 8th grade | General public, low health literacy |
| 2 | Developing | 10th grade | High school students, interested patients |
| 3 | Standard | 12th grade | College students, health-aware adults |
| 4 | Advanced | College/Pre-med | Pre-med students, allied health |
| 5 | Expert | Graduate | Medical students, residents |
| 6 | Clinical | Physician | Practicing clinicians |

### Content Structure

```typescript
interface ComplexityLevelContent {
  1: string;  // Simple analogies, everyday language
  2: string;  // Basic medical terms with definitions
  3: string;  // Standard medical terminology
  4: string;  // Biochemistry, pathways, mechanisms
  5: string;  // Research depth, statistical nuance
  6?: string; // Full clinical reasoning, differentials
}
```

### Writing Guidelines by Level

**Level 1 (Foundation)**
- Use analogies: "Your heart is like a pump"
- Avoid medical jargon entirely
- Short sentences (< 15 words average)
- Relate to everyday experiences

**Level 2 (Developing)**
- Introduce basic terms with definitions
- Simple cause-and-effect explanations
- Use "because" to explain relationships

**Level 3 (Standard)**
- Use medical terminology with context
- Explain physiological processes
- Include relevant numbers/statistics

**Level 4 (Advanced)**
- Biochemical pathways and mechanisms
- Molecular basis of function
- Research-backed explanations

**Level 5 (Expert)**
- Full pathophysiology detail
- Current research and evidence
- Nuanced clinical considerations

---

## Content Guidelines

### Accuracy Standards

1. **Source All Facts**
   - Every factual claim must have a citation
   - Prefer peer-reviewed sources
   - Update content based on current guidelines

2. **Medical Review**
   - Core content reviewed by medical professionals
   - Flag content for review when guidelines change
   - Version control all medical content

3. **Avoid Diagnosis**
   - Educational content only
   - Never suggest specific diagnoses
   - Always recommend consulting healthcare providers

### Writing Standards

1. **Clarity First**
   - Clear over clever
   - Consistent terminology
   - Define terms on first use

2. **Structural Consistency**
   - Follow established templates
   - Consistent heading levels
   - Predictable organization

3. **Cultural Sensitivity**
   - Inclusive language
   - Culturally appropriate examples
   - Consider diverse populations

### Citation Format

```typescript
interface Citation {
  index: number;
  source: string;        // "OpenStax Anatomy & Physiology 2e"
  section?: string;      // "Chapter 19: The Heart"
  url?: string;          // Direct link if available
  accessDate?: string;   // When the content was accessed
}
```

### Required Sources

1. **Primary Sources**
   - OpenStax Anatomy & Physiology 2e (open access)
   - StatPearls (open access)
   - PubMed Central (open access articles)

2. **Guidelines**
   - CDC guidelines
   - WHO recommendations
   - Professional society guidelines

3. **Reference Standards**
   - ICD-10 for condition codes
   - RxNorm for medication codes
   - LOINC for lab codes

---

## Translation Guide

### Supported Languages (Current)

- English (primary)
- Spanish (planned v0.4)
- Mandarin Chinese (planned)

### Translation Architecture

```
core/i18n/
├── types.ts           # Translation types
├── en.ts              # English content
├── es.ts              # Spanish content
└── index.ts           # Translation utilities
```

### Content for Translation

```typescript
interface TranslatableContent {
  // UI strings
  labels: Record<string, string>;
  buttons: Record<string, string>;
  messages: Record<string, string>;

  // Medical terminology
  anatomicalTerms: Record<string, string>;
  conditionNames: Record<string, string>;
  medicationNames: Record<string, string>;

  // Educational content
  descriptions: Record<string, ComplexityLevelContent>;
}
```

### Translation Guidelines

1. **Medical Terminology**
   - Use standard medical translations
   - Keep Latin anatomical names
   - Provide lay terms where appropriate

2. **Cultural Adaptation**
   - Adapt examples for cultural relevance
   - Maintain medical accuracy
   - Consider health literacy levels

3. **Quality Assurance**
   - Native speaker review required
   - Medical professional review for medical terms
   - Back-translation for verification

### Adding a New Language

1. Create language file: `core/i18n/{lang}.ts`
2. Translate all UI strings
3. Translate medical terminology with review
4. Translate educational content at all complexity levels
5. Test with native speakers
6. Medical review by native-speaking clinician

```typescript
// Example: core/i18n/es.ts
export const es: TranslatableContent = {
  labels: {
    'dashboard.title': 'Panel de Control',
    'anatomy.heart': 'Corazon',
    // ...
  },
  anatomicalTerms: {
    'heart': 'corazon',
    'lung': 'pulmon',
    // ...
  },
  descriptions: {
    'heart': {
      1: 'El corazon es un musculo que bombea sangre...',
      // ...
    }
  }
};
```
