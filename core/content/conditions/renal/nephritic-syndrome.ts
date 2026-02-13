/**
 * Nephritic Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const nephriticSyndrome: EducationalContent = {
  id: 'condition-nephritic-syndrome',
  type: 'condition',
  name: 'Nephritic Syndrome',
  nameEs: 'Síndrome Nefrítico',
  alternateNames: ['Acute Nephritis', 'Glomerulonephritis', 'GN'],
  hpoId: 'HP:0000093',

  levels: {
    1: {
      level: 1,
      summary: 'Nephritic syndrome is a kidney condition where the kidney filters become inflamed, causing blood in the urine, high blood pressure, and reduced kidney function.',
      explanation: `Your kidneys have tiny filters that clean your blood. In nephritic syndrome, these filters get inflamed and swollen.

**Key Signs:**
- Bloody or tea-colored urine
- High blood pressure
- Swelling (especially in face and hands)
- Less urine output than normal

**Treatment:**
- Treat underlying cause
- Blood pressure medications
- Supportive kidney care`,
      keyTerms: [
        { term: 'glomerulonephritis', definition: 'Inflammation of the kidney filters' },
        { term: 'hematuria', definition: 'Blood in the urine' },
      ],
    },
    2: {
      level: 2,
      summary: 'Nephritic syndrome is characterized by hematuria, RBC casts, proteinuria less than 3.5 g/day, hypertension, edema, and reduced GFR.',
      explanation: `## Key Features
- Hematuria (microscopic or gross)
- RBC casts on urinalysis
- Proteinuria less than 3.5 g/day
- Hypertension
- Edema
- Reduced GFR

## Causes
- Post-infectious GN
- IgA nephropathy
- Lupus nephritis
- ANCA-associated vasculitis
- Anti-GBM disease`,
      keyTerms: [
        { term: 'RBC casts', definition: 'Red blood cell clumps shaped like kidney tubules' },
        { term: 'IgA nephropathy', definition: 'Most common type of glomerulonephritis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Nephritic syndrome results from immune-mediated glomerular injury causing inflammation and RPGN requiring urgent biopsy and immunosuppressive therapy.',
      explanation: `## RPGN Types
- Type I: Anti-GBM disease
- Type II: Immune complex (lupus, post-strep)
- Type III: Pauci-immune (ANCA vasculitis)

## Treatment
- Supportive care
- Steroids
- Cyclophosphamide for severe cases
- Plasmapheresis for anti-GBM`,
      keyTerms: [
        { term: 'RPGN', definition: 'Rapidly progressive glomerulonephritis' },
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibody' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management includes complement-mediated diseases and novel targeted therapies.',
      explanation: `## Complement Disorders
- C3 glomerulopathy
- Treatment: Eculizumab

## Novel Therapies
- Rituximab for ANCA vasculitis
- Avacopan (C5aR inhibitor) for ANCA`,
      keyTerms: [
        { term: 'avacopan', definition: 'Oral C5a receptor inhibitor for ANCA vasculitis' },
      ],
    },
    5: {
      level: 5,
      summary: 'Precision medicine integrates molecular classification and novel targeted biologics.',
      explanation: `## Biomarkers
- Anti-PLA2R for membranous nephropathy
- APOL1 for FSGS risk

## Targeted Therapies
- Obinutuzumab (anti-CD20)
- Belimumab for lupus
- Sparsentan for FSGS`,
      keyTerms: [],
    },
  },

  media: [],
  citations: [{ id: 'kdigo-glom-2021', type: 'website', title: 'KDIGO Glomerular Diseases Guideline', source: 'KDIGO' }],
  crossReferences: [
    { targetId: 'condition-nephrotic-syndrome', targetType: 'condition', relationship: 'sibling', label: 'Nephrotic Syndrome' },
  ],
  tags: { systems: ['renal'], topics: ['nephrology'], keywords: ['nephritic', 'glomerulonephritis', 'hematuria'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephriticSyndrome;
