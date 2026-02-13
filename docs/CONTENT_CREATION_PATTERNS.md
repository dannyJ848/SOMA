# Content Creation Patterns - Biological Self

This document defines the patterns, conventions, and best practices for creating educational content in the Biological Self app.

## Table of Contents

1. [File Organization](#file-organization)
2. [Content Interface](#content-interface)
3. [Writing Content](#writing-content)
4. [Spanish Translations](#spanish-translations)
5. [Compact Format](#compact-format)
6. [Common Pitfalls](#common-pitfalls)
7. [Validation Checklist](#validation-checklist)
8. [Examples](#examples)

---

## File Organization

### Directory Structure

Content is organized hierarchically by medical specialty and topic:

```
core/content/
├── types.ts                    # EducationalContent interface definitions
├── hematology/
│   ├── index.ts               # Barrel exports
│   ├── anemias/
│   │   ├── index.ts
│   │   ├── iron-deficiency.ts
│   │   ├── b12-folate-deficiency.ts
│   │   └── ...
│   └── clotting-disorders/
├── cardiovascular/
├── endocrinology/
└── ...
```

### Naming Conventions

- **Files**: Use kebab-case (e.g., `iron-deficiency.ts`, `acute-kidney-injury.ts`)
- **Variables**: Use camelCase (e.g., `ironDeficiencyAnemia`, `cardiovascularSystem`)
- **IDs**: Use kebab-case with specialty prefix (e.g., `hematology-iron-deficiency`, `cardiovascular-heart-failure`)
- **Index files**: Always named `index.ts`

### When to Create New Files vs Expand Existing

**Create a new file when:**
- Adding a distinct condition, medication, or anatomical structure
- Content exceeds 500 lines (consider splitting)
- Topic belongs to a different subcategory

**Expand existing files when:**
- Adding related content to an existing collection
- Adding new complexity levels to existing content
- Adding translations or metadata

### Index.ts Barrel Pattern

Every directory must have an `index.ts` that re-exports all module contents:

```typescript
// Anemias module index
export { ironDeficiencyAnemia } from './iron-deficiency';
export { b12FolateDeficiency } from './b12-folate-deficiency';
export { hemolyticAnemia } from './hemolytic-anemia';
export { aplasticAnemia } from './aplastic-anemia';
```

This enables clean imports:
```typescript
import { ironDeficiencyAnemia, b12FolateDeficiency } from './anemias';
```

---

## Content Interface

### EducationalContent Interface Fields

```typescript
interface EducationalContent {
  id: string;                    // Unique identifier (kebab-case)
  type: ContentType;             // 'structure' | 'system' | 'pathway' | 'process' | 'condition' | 'concept' | 'topic'
  name: string;                  // Primary display name
  nameEs?: string;              // Spanish translation (REQUIRED)
  alternateNames?: string[];    // Synonyms, abbreviations
  fmaId?: string;               // Foundational Model of Anatomy ID
  hpoId?: string;               // Human Phenotype Ontology ID
  
  levels: {                     // All 5 complexity levels REQUIRED
    1: LevelContent;            // 8th Grade
    2: LevelContent;            // High School
    3: LevelContent;            // College
    4: LevelContent;            // Graduate
    5: LevelContent;            // MD/Professional
  };
  
  media: MediaAsset[];          // Images, diagrams, videos
  citations: Citation[];        // Academic sources
  crossReferences: string[];    // Related content IDs
  tags: ContentTags;            // Categorization metadata
  
  // Metadata
  createdAt: string;            // ISO 8601 timestamp
  updatedAt: string;            // ISO 8601 timestamp
  version: number;              // Integer version
  status: 'draft' | 'review' | 'published';
  contributors?: string[];
}
```

### Required vs Optional Fields

**Required:**
- `id`, `type`, `name`
- All 5 complexity levels (1-5)
- `levels[N].summary`, `levels[N].explanation`, `levels[N].keyTerms`
- `media` (can be empty array)
- `citations` (can be empty array for draft)
- `crossReferences` (can be empty array)
- `tags` (with at least `systems` and `topics`)
- `createdAt`, `updatedAt`, `version`, `status`

**Optional but Recommended:**
- `nameEs` (Spanish name - REQUIRED for published content)
- `alternateNames` (synonyms)
- `fmaId` (for anatomical structures)
- `hpoId` (for conditions/symptoms)

**Optional:**
- `levels[N].analogies` (strongly recommended for Level 1)
- `levels[N].examples` (clinical examples)
- `levels[N].clinicalNotes` (levels 4-5)
- `levels[N].patientCounselingPoints` (levels 1-2)
- `contributors`

### Complexity Levels Structure

Each level must contain:

```typescript
interface LevelContent {
  level: ComplexityLevel;       // 1 | 2 | 3 | 4 | 5
  summary: string;              // 1-2 sentence overview
  explanation: string;          // Detailed content (supports markdown)
  keyTerms: TermDefinition[];   // At least 3-5 terms
  analogies?: string[];         // Level-appropriate analogies
  examples?: string[];          // Real-world examples
  clinicalNotes?: string;       // Clinical relevance (L4-5)
  patientCounselingPoints?: string[]; // Patient education (L1-2)
}

interface TermDefinition {
  term: string;
  definition: string;
  pronunciation?: string;       // Phonetic pronunciation
  etymology?: string;           // Word origin
  relatedTerms?: string[];      // Connected terminology
}
```

### Metadata Requirements

**Tags structure:**
```typescript
tags: {
  systems: ['hematology', 'cardiovascular'],  // Body systems
  structures?: ['FMA:7096'],                  // FMA IDs
  topics: ['anemia', 'pathology'],            // Subject categories
  keywords: ['iron deficiency', 'ferritin'],  // Search terms
  clinicalRelevance?: 'high',                 // low | medium | high | critical
  examRelevance?: {
    usmle?: true,
    nbme?: true,
    shelf?: ['medicine', 'surgery']
  }
}
```

---

## Writing Content

### How to Write for Each Complexity Level

#### Level 1: 8th Grade (Ages 12-14)
- **Language**: Simple, everyday words
- **Sentence length**: 15-20 words maximum
- **Concepts**: Use concrete analogies from daily life
- **Avoid**: Medical jargon, acronyms, Latin terms
- **Focus**: "What" and basic "why"

**Example:**
```typescript
{
  summary: 'Iron deficiency anemia is when your body does not have enough iron to make healthy red blood cells.',
  explanation: 'Your body needs iron to make hemoglobin, a protein in red blood cells that carries oxygen...',
  analogies: [
    'Iron is like the fuel for a delivery truck - without enough fuel, the trucks cannot make deliveries',
    'Think of red blood cells as tiny oxygen delivery trucks that need iron to carry their cargo'
  ]
}
```

#### Level 2: High School (Ages 14-18)
- **Language**: Basic medical terminology introduced
- **Sentence length**: 20-25 words
- **Concepts**: Introduce proper terms with explanations
- **Include**: Simple mechanisms and processes
- **Focus**: "How" things work

**Example:**
```typescript
{
  summary: 'Iron deficiency anemia is the most common anemia worldwide, caused by inadequate iron intake...',
  explanation: 'Iron deficiency anemia develops through three stages: iron depletion, iron-deficient erythropoiesis, and overt anemia...',
  keyTerms: [
    { term: 'Ferritin', definition: 'Protein that stores iron in the body' },
    { term: 'Microcytic', definition: 'Red blood cells that are smaller than normal' }
  ]
}
```

#### Level 3: College (Undergraduate)
- **Language**: Standard medical terminology
- **Sentence length**: 25-30 words
- **Concepts**: Detailed mechanisms, pathways
- **Include**: Regulatory systems, feedback loops
- **Focus**: "Why" at physiological level

**Example:**
```typescript
{
  summary: 'Iron deficiency anemia pathophysiology involves hepcidin-mediated iron regulation...',
  explanation: 'Iron homeostasis is regulated by hepcidin, a liver-produced peptide that blocks iron absorption...',
  keyTerms: [
    { term: 'Hepcidin', definition: 'Master regulator of iron homeostasis' },
    { term: 'Soluble transferrin receptor', definition: 'Marker of erythropoietic activity' }
  ]
}
```

#### Level 4: Graduate (Medical/Nursing School)
- **Language**: Professional medical terminology
- **Sentence length**: 30-35 words, complex structures
- **Concepts**: Clinical management, diagnostics
- **Include**: Treatment algorithms, guidelines
- **Focus**: Clinical application

**Example:**
```typescript
{
  summary: 'Clinical management of iron deficiency anemia requires systematic evaluation for underlying causes...',
  explanation: 'Comprehensive evaluation includes dietary history, menstrual history, GI symptoms...',
  clinicalNotes: 'Screen adult men and postmenopausal women with iron deficiency for GI malignancy...'
}
```

#### Level 5: MD/Professional
- **Language**: Expert-level terminology, research citations
- **Sentence length**: Complex, nuanced
- **Concepts**: Current research, trial data, advanced mechanisms
- **Include**: Evidence-based guidelines, molecular pathways
- **Focus**: Expert decision-making

**Example:**
```typescript
{
  summary: 'Expert management of iron deficiency anemia integrates advanced diagnostic testing...',
  explanation: 'Advanced diagnostic approaches include hepcidin measurement, reticulocyte hemoglobin content...',
  keyTerms: [
    { term: 'FAIR-HF trial', definition: 'Study showing IV iron improves outcomes in heart failure' },
    { term: 'Functional iron deficiency', definition: 'Iron unavailable despite adequate stores due to high hepcidin' }
  ],
  clinicalNotes: 'In postmenopausal women and men with iron deficiency, pursue GI evaluation even if no symptoms...'
}
```

### Creating Good Analogies for Level 1

Effective analogies:
- Use familiar objects/situations
- Maintain the core relationship
- Don't overcomplicate
- Test with non-medical friends

**Good analogies:**
- Red blood cells as "oxygen delivery trucks"
- Iron as "fuel" for those trucks
- Heart as a "pump" moving blood through "pipes"
- Veins as "one-way streets" with "traffic valves"

**Poor analogies:**
- Too abstract: "Like quantum entanglement but for cells"
- Culturally specific: "Like a cricket bowler delivering oxygen"
- Overly complex: "Like a series of enzymatic cascades in a factory"

### Technical Depth Progression

| Aspect | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|--------|---------|---------|---------|---------|---------|
| Terminology | Common words | Basic medical | Standard medical | Professional | Expert |
| Mechanisms | Simple cause-effect | Basic pathways | Detailed physiology | Clinical correlations | Molecular/signaling |
| Examples | Everyday life | Patient scenarios | Clinical cases | Complex cases | Research data |
| Math/Numbers | Avoid | Basic values | Normal ranges | Calculations | Equations |
| Citations | None | Optional | Some | Expected | Required |

### Medical Accuracy Guidelines

1. **Verify facts** with current textbooks (OpenStax, StatPearls)
2. **Cite sources** for Level 4-5 content
3. **Use standard terminology** (SNOMED CT, ICD-11 where applicable)
4. **Include uncertainty** when appropriate ("may cause", "is associated with")
5. **Avoid outdated information** (check publication dates)
6. **Never provide diagnostic advice** - always educational
7. **Include appropriate warnings** for serious conditions

---

## Spanish Translations

### When and Where to Add nameEs

**REQUIRED for all published content:**
- Every `EducationalContent` must have `nameEs`
- Add at the top level of the interface
- Use proper medical Spanish terminology

```typescript
export const ironDeficiencyAnemia: EducationalContent = {
  id: 'hematology-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  nameEs: 'Anemia por Deficiencia de Hierro',  // REQUIRED
  // ... rest of content
};
```

### Quality Standards for Translations

1. **Use professional medical Spanish** - not Google Translate
2. **Maintain consistency** with existing translations
3. **Follow regional conventions** (Latin American Spanish preferred)
4. **Include accents** properly (e.g., "Hepatología", "Anatomía")
5. **Capitalize properly** - Spanish uses sentence case for titles

### Medical Terminology Resources

**Reliable sources:**
- Real Academia Española (RAE) medical dictionary
- WHO international medical terminology
- Pan American Health Organization glossaries
- Professional medical translation services

**Common patterns:**
| English | Spanish |
|---------|---------|
| Anemia | Anemia |
| Deficiency | Deficiencia / Insuficiencia |
| Syndrome | Síndrome |
| Disease | Enfermedad |
| Disorder | Trastorno |
| Acute | Agudo |
| Chronic | Crónico |

### Consistency with Existing Translations

Always check existing content for established patterns:

```typescript
// Check existing translations in similar content
// core/content/hematology/anemias.ts - uses "Anemia por..."
// core/content/cardiovascular/heart-disease.ts - uses "Enfermedad..."
```

**Common translation issues to avoid:**
- Mixing "Hierro" and "Ferro-" prefixes (use "Hierro")
- Inconsistent accent usage
- Regional variations (choose one and document)

---

## Compact Format

### Helper Functions

For large databases, use helper functions to reduce verbosity:

```typescript
// Helper for creating medication entries
function m(
  id: string, name: string, generic: string, brands: string[],
  cls: string, cat: string, icd: string[], mech: string,
  uses: string[], sides: string[], warns: string[],
  tip: string, es: string
): MedicationEntry {
  return { 
    id, name, genericName: generic, brandNames: brands, 
    class: cls, category: cat, icd11Related: icd, 
    mechanism: mech, commonUses: uses, sideEffects: sides, 
    warnings: warns, patientTip: tip, nameEs: es 
  };
}

// Usage - one line per entry
const meds = [
  m("atorvastatin","Atorvastatin","atorvastatin",["Lipitor"],"statin","cardiovascular",["BA80"],"Inhibits HMG-CoA reductase...",["High cholesterol"],["Muscle pain"],["Monitor liver function"],"Take at any time of day...","Atorvastatina"),
  m("rosuvastatin","Rosuvastatin","rosuvastatin",["Crestor"],"statin","cardiovascular",["BA80"],"Most potent statin...",["High cholesterol"],["Myalgia"],["Monitor lipids..."],"Take at any time...","Rosuvastatina"),
];
```

### Recommended Helpers

| Helper | Purpose | Use Case |
|--------|---------|----------|
| `m()` | Medication entry | Drug databases |
| `dc()` | Drug class | Pharmacology content |
| `n()` | Nutrition entry | Dietary content |
| `fa()` | First aid step | Emergency procedures |

### When to Use Compact vs Expanded Format

**Use Compact Format when:**
- Creating large databases (>50 entries)
- Entries follow consistent structure
- Fields are mostly scalar values
- File would exceed 600 lines expanded

**Use Expanded Format when:**
- Content has complex nested structures
- Each entry is unique and detailed
- Rich text explanations are primary content
- Educational content with 5 complexity levels

### Keeping Files Under 600 Lines

**Strategies:**
1. **Split by category** (e.g., `cardiovascular-drugs.ts`, `endocrine-drugs.ts`)
2. **Use compact format** for repetitive data
3. **Extract common data** to shared constants
4. **Create subdirectories** for large topics

**Example - Splitting a large file:**
```
medications/
├── index.ts
├── cardiovascular/
│   ├── index.ts
│   ├── statins.ts
│   ├── ace-inhibitors.ts
│   └── beta-blockers.ts
├── endocrine/
│   ├── index.ts
│   ├── diabetes.ts
│   └── thyroid.ts
```

### Code Organization Strategies

1. **Group by category** with clear separators:
```typescript
// ========== CARDIOVASCULAR - Statins ==========
const statins = [/* ... */];

// ========== CARDIOVASCULAR - ACE Inhibitors ==========
const aceInhibitors = [/* ... */];

// ========== ENDOCRINE - Diabetes ==========
const diabetesMeds = [/* ... */];
```

2. **Export combined arrays:**
```typescript
export const allMedications = [
  ...statins,
  ...aceInhibitors,
  ...diabetesMeds,
];
```

3. **Use TypeScript type annotations** for validation:
```typescript
const medications: MedicationEntry[] = [
  // TypeScript validates each entry
];
```

---

## Common Pitfalls

### Unicode Characters to Avoid

**Problem characters that cause TypeScript parsing issues:**

| Character | Replace With | Example |
|-----------|--------------|---------|
| `├─` | `+-` | Tree diagrams |
| `│ ` | `\| ` | Tree diagrams |
| `└─` | `+-` | Tree diagrams |
| `×` | `x` | Multiplication |
| `→` | `->` | Arrows |
| `↑` | `increased` | Direction indicators |
| `↓` | `decreased` | Direction indicators |
| `α` | `alpha` | Greek letters |
| `β` | `beta` | Greek letters |
| `•` | `-` | Bullet points |
| `°` | `degrees` | Temperature/angles |

**Example - Safe ASCII:**
```typescript
// GOOD - ASCII only
keyTerms: [
  { term: 'Alpha receptor', definition: 'Receptor activated by norepinephrine' },
  { term: 'Beta blocker', definition: 'Drug that blocks beta receptors' }
]

// BAD - Unicode characters
keyTerms: [
  { term: 'α receptor', definition: 'Receptor activated by norepinephrine' },
  { term: 'β blocker', definition: 'Drug that blocks β receptors' }
]
```

### Template Literal Escaping

**CRITICAL**: Escaped backticks cause parsing errors

```typescript
// WRONG - causes TypeScript parsing errors
explanation: `Here is a code block:
\`\`\`
code here
\`\`\`
`

// CORRECT - use --- delimiter
explanation: `Here is a code block:
---
code here
---
`

// ALSO CORRECT - use regular quotes
explanation: 'Here is a code block:\n---\ncode here\n---'
```

### Apostrophe Handling

**Problem**: Apostrophes in single-quoted strings terminate the string

```typescript
// WRONG - terminates string at 'body'
{ term: 'body's', definition: '...' }

// CORRECT - escape with backslash
{ term: 'body\'s', definition: '...' }

// ALSO CORRECT - use double quotes
{ term: "body's", definition: "..." }

// BEST - use template literals for complex strings
{ term: `body's`, definition: `...` }
```

### TypeScript isolatedModules

**Issue**: TypeScript `isolatedModules` requires explicit type exports

```typescript
// CORRECT - explicit type export
export type { EducationalContent } from './types';

// MAY FAIL - implicit type
export { EducationalContent } from './types';
```

**Fix in content files:**
```typescript
// Always import types explicitly
import type { EducationalContent, LevelContent } from '../types';

// Not just
import { EducationalContent } from '../types';
```

### Other Common Issues

1. **Missing trailing commas** in multi-line objects
2. **Unclosed brackets/parentheses** - use editor linting
3. **Inconsistent indentation** - use 2 spaces
4. **Missing required fields** - check interface definitions
5. **Invalid date formats** - use ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)

---

## Validation Checklist

### Pre-Submission Checklist

Before submitting new content, verify:

- [ ] All 5 complexity levels are present (1-5)
- [ ] Each level has `summary`, `explanation`, and `keyTerms`
- [ ] `nameEs` Spanish translation is included
- [ ] `id` follows kebab-case naming convention
- [ ] File name matches kebab-case convention
- [ ] No Unicode characters (×, →, ↑, α, β, etc.)
- [ ] No escaped backticks in template literals
- [ ] Apostrophes properly escaped or using double quotes
- [ ] File is under 600 lines (or properly split)
- [ ] `index.ts` barrel export added if new file
- [ ] `tags` includes `systems` and `topics`
- [ ] `createdAt` and `updatedAt` are ISO 8601 format
- [ ] `status` is set appropriately ('draft' | 'review' | 'published')

### Running TypeScript Checks

**Check for type errors:**
```bash
npx tsc --noEmit
```

**Count total errors:**
```bash
npx tsc --noEmit 2>&1 | grep -c "error TS"
```

**Check errors by file:**
```bash
npx tsc --noEmit 2>&1 | grep "error TS" | cut -d'(' -f1 | sort | uniq -c
```

**Check specific file:**
```bash
npx tsc --noEmit 2>&1 | grep "your-file.ts"
```

### Build Verification

**Run full build:**
```bash
npm run build
```

**Check for:**
- Type errors
- Missing exports
- Circular dependencies
- Bundle size warnings

### Content Review Criteria

**Medical Accuracy:**
- [ ] Facts verified against current sources
- [ ] Citations included for Level 4-5
- [ ] No diagnostic advice given
- [ ] Appropriate uncertainty language used

**Completeness:**
- [ ] All complexity levels have appropriate depth
- [ ] Key terms defined at each level
- [ ] Analogies appropriate for Level 1
- [ ] Clinical notes included for Level 4-5

**Quality:**
- [ ] No spelling/grammar errors
- [ ] Consistent terminology
- [ ] Proper Spanish translation
- [ ] Cross-references to related content

---

## Examples

### Good Example - Compact Format

```typescript
// core/content/medications/cardiovascular/statins.ts
import type { MedicationEntry } from '../types';

function m(
  id: string, name: string, generic: string, brands: string[],
  cls: string, cat: string, icd: string[], mech: string,
  uses: string[], sides: string[], warns: string[],
  tip: string, es: string
): MedicationEntry {
  return { 
    id, name, genericName: generic, brandNames: brands, 
    class: cls, category: cat, icd11Related: icd, 
    mechanism: mech, commonUses: uses, sideEffects: sides, 
    warnings: warns, patientTip: tip, nameEs: es 
  };
}

export const statins: MedicationEntry[] = [
  m(
    "atorvastatin",
    "Atorvastatin",
    "atorvastatin",
    ["Lipitor"],
    "statin",
    "cardiovascular",
    ["BA80","BA80.0"],
    "Inhibits HMG-CoA reductase to reduce cholesterol synthesis in the liver.",
    ["High cholesterol","Atherosclerosis prevention","CV risk reduction"],
    ["Muscle pain","Liver enzyme elevation","GI upset","Headache"],
    ["Monitor liver function","Risk of rhabdomyolysis","Avoid grapefruit juice"],
    "Take at any time of day; report unexplained muscle pain immediately.",
    "Atorvastatina"
  ),
  m(
    "rosuvastatin",
    "Rosuvastatin",
    "rosuvastatin",
    ["Crestor"],
    "statin",
    "cardiovascular",
    ["BA80"],
    "Inhibits HMG-CoA reductase, most potent statin for LDL reduction.",
    ["High cholesterol","Hyperlipidemia","CV prevention"],
    ["Myalgia","Headache","Abdominal pain","Proteinuria"],
    ["Monitor lipids and liver enzymes","Risk of rhabdomyolysis"],
    "Take at any time of day with or without food.",
    "Rosuvastatina"
  ),
];
```

### Good Example - Expanded Format

```typescript
// core/content/hematology/anemias/iron-deficiency.ts
import type { EducationalContent } from '../types';

export const ironDeficiencyAnemia: EducationalContent = {
  id: 'hematology-iron-deficiency-anemia',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  nameEs: 'Anemia por Deficiencia de Hierro',
  alternateNames: ['IDA', 'Iron Deficiency', 'Microcytic Anemia'],
  
  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia is when your body does not have enough iron to make healthy red blood cells.',
      explanation: 'Your body needs iron to make hemoglobin...',
      keyTerms: [
        { term: 'Iron', definition: 'A mineral your body needs to make hemoglobin' },
        { term: 'Hemoglobin', definition: 'The protein in red blood cells that carries oxygen' },
      ],
      analogies: [
        'Iron is like the fuel for a delivery truck',
        'Red blood cells are tiny oxygen delivery trucks',
      ],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia is the most common anemia worldwide...',
      explanation: 'Iron deficiency anemia develops through three stages...',
      keyTerms: [
        { term: 'Ferritin', definition: 'Protein that stores iron in the body' },
        { term: 'Microcytic', definition: 'Red blood cells that are smaller than normal' },
      ],
    },
    3: {
      level: 3,
      summary: 'Iron deficiency anemia pathophysiology involves hepcidin-mediated iron regulation...',
      explanation: 'Iron homeostasis is regulated by hepcidin...',
      keyTerms: [
        { term: 'Hepcidin', definition: 'Master regulator of iron homeostasis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of iron deficiency anemia requires systematic evaluation...',
      explanation: 'Comprehensive evaluation includes dietary history...',
      clinicalNotes: 'Screen adult men for GI malignancy...',
    },
    5: {
      level: 5,
      summary: 'Expert management of iron deficiency anemia integrates advanced diagnostic testing...',
      explanation: 'Advanced diagnostic approaches include hepcidin measurement...',
      clinicalNotes: 'In postmenopausal women and men with iron deficiency...',
    },
  },
  
  media: [],
  citations: [
    'Short MW, Domagalski JE. Iron deficiency anemia: evaluation and management. Am Fam Physician. 2013;87(2):98-104.',
  ],
  crossReferences: ['hematology-b12-folate-deficiency', 'hematology-hemolytic-anemia'],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'iron deficiency', 'microcytic anemia'],
    keywords: ['iron deficiency', 'anemia', 'ferritin'],
  },
  
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};
```

### Before/After Refactoring Example

**BEFORE - Poor structure:**
```typescript
// 800+ lines, mixed content, hard to maintain
const content = {
  anemia: {
    name: "Iron Deficiency Anemia",
    // ... 200 lines
  },
  medications: [
    // ... 500 lines of mixed drug classes
  ],
  procedures: [
    // ... 100 lines
  ]
};
```

**AFTER - Well organized:**
```typescript
// core/content/hematology/anemias/index.ts
export { ironDeficiencyAnemia } from './iron-deficiency';
export { b12FolateDeficiency } from './b12-folate-deficiency';

// core/content/hematology/anemias/iron-deficiency.ts
// ~100 lines, focused content

// core/content/medications/cardiovascular/statins.ts
// ~150 lines, compact format

// core/content/procedures/blood-transfusion.ts
// ~80 lines, focused content
```

**Benefits:**
- Each file < 600 lines
- Clear organization by topic
- Easy to find and update
- Better TypeScript performance
- Parallel development possible

---

## Quick Reference

### File Template

```typescript
import type { EducationalContent } from '../types';

export const contentName: EducationalContent = {
  id: 'specialty-topic-name',
  type: 'condition', // or 'structure', 'system', etc.
  name: 'Human Readable Name',
  nameEs: 'Nombre en Español',
  alternateNames: ['Synonym 1', 'Abbreviation'],
  
  levels: {
    1: { level: 1, summary: '', explanation: '', keyTerms: [], analogies: [] },
    2: { level: 2, summary: '', explanation: '', keyTerms: [] },
    3: { level: 3, summary: '', explanation: '', keyTerms: [] },
    4: { level: 4, summary: '', explanation: '', keyTerms: [], clinicalNotes: '' },
    5: { level: 5, summary: '', explanation: '', keyTerms: [], clinicalNotes: '' },
  },
  
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['specialty'],
    topics: ['topic'],
    keywords: ['keyword'],
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'draft',
};
```

### Validation Commands

```bash
# Type check
npx tsc --noEmit

# Count errors
npx tsc --noEmit 2>&1 | grep -c "error TS"

# Build
npm run build

# Check specific file
npx tsc --noEmit 2>&1 | grep "your-file.ts"
```

### Common Imports

```typescript
// Type imports
import type { EducationalContent, LevelContent, TermDefinition } from '../types';

// From barrel exports
import { ironDeficiencyAnemia } from './anemias';
```

---

## References

- [AGENTS.md](./AGENTS.md) - Development patterns and gotchas
- [progress.txt](./progress.txt) - Project history and learnings
- [src/i18n/README.md](./src/i18n/README.md) - Bilingual support documentation
- [OpenStax Anatomy & Physiology](https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction) - Primary reference
- [StatPearls](https://www.ncbi.nlm.nih.gov/books/NBK430685/) - Medical reference

---

*Last updated: 2025-01-30*
*Document version: 1.0*
