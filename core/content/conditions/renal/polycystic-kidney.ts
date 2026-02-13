/**
 * Polycystic Kidney Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const polycysticKidneyDisease: EducationalContent = {
  id: 'condition-polycystic-kidney-disease',
  type: 'condition',
  name: 'Polycystic Kidney Disease',
  nameEs: 'Enfermedad Renal Poliquística',
  alternateNames: ['PKD', 'ADPKD'],
  hpoId: 'HP:0000100',

  levels: {
    1: {
      level: 1,
      summary: 'Polycystic kidney disease is an inherited condition where many fluid-filled cysts grow in your kidneys.',
      explanation: `In PKD, your kidneys develop many fluid-filled sacs called cysts that grow over time.

**Symptoms:**
- Pain in back or sides
- High blood pressure
- Blood in urine
- Frequent kidney infections

**Treatment:**
- Control blood pressure
- Treat infections
- Dialysis or transplant when kidneys fail`,
      keyTerms: [
        { term: 'cyst', definition: 'Fluid-filled sac that grows in the kidney' },
      ],
    },
    2: {
      level: 2,
      summary: 'ADPKD is an inherited disorder causing progressive cyst development in both kidneys.',
      explanation: `## Genetics
- Autosomal dominant inheritance
- PKD1 (78%) or PKD2 (15%) mutations
- 50% chance of passing to children

## Clinical Features
- Bilateral kidney cysts
- Hypertension (80%)
- Liver cysts (80% by age 50)
- Intracranial aneurysms (10%)`,
      keyTerms: [
        { term: 'ADPKD', definition: 'Autosomal dominant polycystic kidney disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'ADPKD results from mutations in PKD1/PKD2 encoding polycystins, leading to cystogenesis.',
      explanation: `## Pathophysiology
- "Two-hit" hypothesis
- Cyst formation from increased cAMP
- Fluid secretion into cysts

## Treatment
- BP control: ACEi/ARB
- Tolvaptan (V2 receptor antagonist)
- Avoid nephrotoxins`,
      keyTerms: [
        { term: 'tolvaptan', definition: 'Medication that slows cyst growth' },
      ],
    },
    4: {
      level: 4,
      summary: 'Comprehensive care includes risk stratification, extrarenal manifestations, and transplant planning.',
      explanation: `## Risk Stratification
- PROPKD score predicts progression
- Mayo imaging classification (1A-1E)

## Extrarenal Manifestations
- Liver cysts
- Intracranial aneurysms
- Cardiac valve disease`,
      keyTerms: [
        { term: 'PROPKD', definition: 'Clinical prediction tool for ADPKD progression' },
      ],
    },
    5: {
      level: 5,
      summary: 'Precision medicine integrates genomic risk and novel therapies.',
      explanation: `## APOL1 Testing
- High-risk genotype increases FSGS risk
- 10-fold increased risk in African Americans

## Emerging Therapies
- Somatostatin analogs for liver and kidney cysts
- Metformin (under investigation)
- Gene therapy research`,
      keyTerms: [],
    },
  },

  media: [],
  citations: [{ id: 'kdigo-pkd-2024', type: 'website', title: 'KDIGO ADPKD Guideline', source: 'KDIGO' }],
  crossReferences: [{ targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' }],
  tags: { systems: ['renal'], topics: ['nephrology', 'genetics'], keywords: ['PKD', 'ADPKD', 'cysts', 'tolvaptan'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default polycysticKidneyDisease;
