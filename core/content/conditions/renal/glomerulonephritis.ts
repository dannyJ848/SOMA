/**
 * Glomerulonephritis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const glomerulonephritis: EducationalContent = {
  id: 'condition-glomerulonephritis',
  type: 'condition',
  name: 'Glomerulonephritis',
  alternateNames: ['GN', 'Glomerular Disease'],
  hpoId: 'HP:0000093',

  levels: {
    1: {
      level: 1,
      summary: 'Glomerulonephritis is inflammation of the kidney filters causing blood and protein in urine.',
      explanation: `Your kidney filters become inflamed and damaged.

**Key Signs:**
- Bloody urine
- Foamy urine
- Swelling
- High blood pressure

**Treatment depends on cause.`, keyTerms: [], },
    2: {
      level: 2,
      summary: 'GN is classified by histopathology and clinical presentation.',
      explanation: `## Classification
- Nephritic: Hematuria, hypertension, reduced GFR
- Nephrotic: Heavy proteinuria, edema

## Causes
- Post-infectious GN
- IgA nephropathy
- Lupus nephritis
- ANCA vasculitis`, keyTerms: [], },
    3: {
      level: 3,
      summary: 'GN results from immune-mediated injury to glomeruli.',
      explanation: `## Types
- Post-infectious: Self-limited
- IgA nephropathy: Synpharyngitic hematuria
- Lupus: Full house IF
- ANCA: Pauci-immune, necrotizing

## Treatment
- Steroids
- Cyclophosphamide
- Mycophenolate
- Rituximab`, keyTerms: [], },
    4: { level: 4, summary: 'Advanced management includes treatment-resistant disease.', explanation: `## Treatment-Resistant
- Belimumab for lupus
- Voclosporin for lupus nephritis
- Avacopan for ANCA vasculitis`, keyTerms: [], },
    5: { level: 5, summary: 'Precision medicine integrates biomarkers and novel therapies.', explanation: `## Biomarkers
- Anti-PLA2R for membranous
- APOL1 genetic testing

## Novel Agents
- Sparsentan for FSGS
- Obinutuzumab`, keyTerms: [], },
  },

  media: [],
  citations: [{ id: 'kdigo-glom-2021', type: 'website', title: 'KDIGO Glomerular Diseases Guideline', source: 'KDIGO' }],
  crossReferences: [{ targetId: 'condition-nephrotic-syndrome', targetType: 'condition', relationship: 'sibling', label: 'Nephrotic' }],
  tags: { systems: ['renal'], topics: ['nephrology'], keywords: ['glomerulonephritis', 'GN', 'biopsy'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerulonephritis;
