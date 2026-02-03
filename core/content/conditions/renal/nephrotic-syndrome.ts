/**
 * Nephrotic Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const nephroticSyndrome: EducationalContent = {
  id: 'condition-nephrotic-syndrome',
  type: 'condition',
  name: 'Nephrotic Syndrome',
  alternateNames: ['Nephrosis', 'Massive Proteinuria'],
  hpoId: 'HP:0000095',

  levels: {
    1: {
      level: 1,
      summary: 'Nephrotic syndrome is a kidney condition where large amounts of protein leak into urine, causing swelling in the body, especially in the legs, feet, and around the eyes.',
      explanation: `Your kidneys normally keep protein in your blood and filter out waste. In nephrotic syndrome, the kidney filters are damaged, allowing protein to leak into urine.

**Key Features:**
- Swelling (edema) in legs, feet, face, and abdomen
- Frothy or foamy urine (from protein)
- Weight gain from fluid retention
- Feeling tired and weak

**What Causes It:**
- Diabetes damages kidneys over time
- Lupus and other autoimmune diseases
- Certain infections
- Some medications
- Sometimes the cause is unknown

**Treatment:**
- Treat the underlying cause
- Medications to reduce protein loss
- Water pills (diuretics) for swelling
- Low salt diet`,
      keyTerms: [
        { term: 'edema', definition: 'Swelling caused by excess fluid trapped in body tissues' },
        { term: 'proteinuria', definition: 'Protein in the urine; normally kidneys keep protein in blood' },
      ],
    },
    2: {
      level: 2,
      summary: 'Nephrotic syndrome is defined by proteinuria greater than 3.5 g/day, hypoalbuminemia less than 3 g/dL, edema, and hyperlipidemia, caused by glomerular damage.',
      explanation: `## Diagnostic Criteria (Must have all 4)
1. Massive proteinuria: greater than 3.5 g/day
2. Hypoalbuminemia: Serum albumin less than 3.0 g/dL
3. Peripheral edema
4. Hyperlipidemia

## Causes in Adults
- Diabetes (nephropathy)
- FSGS
- Membranous nephropathy
- Minimal change disease
- Lupus nephritis

## Complications
- Venous thrombosis
- Infections
- Hyperlipidemia
- Acute kidney injury`,
      keyTerms: [
        { term: 'hypoalbuminemia', definition: 'Low albumin in blood' },
        { term: 'FSGS', definition: 'Focal segmental glomerulosclerosis; scarring of kidney filters' },
      ],
    },
    3: {
      level: 3,
      summary: 'Nephrotic syndrome results from glomerular basement membrane injury and podocyte damage causing massive proteinuria.',
      explanation: `## Pathophysiology
- Podocyte injury: Foot process effacement
- GBM damage: Altered charge and size selectivity
- Loss of size/charge barrier allows albumin passage

## Histologic Patterns
- Minimal Change: Foot process effacement on EM
- FSGS: Segmental sclerosis
- Membranous: Subepithelial deposits

## Treatment
- RAAS blockade (ACEi/ARB)
- Diuretics for edema
- Steroids for MCD
- Calcineurin inhibitors for FSGS`,
      keyTerms: [
        { term: 'podocyte', definition: 'Specialized epithelial cells in glomerulus' },
        { term: 'GBM', definition: 'Glomerular basement membrane' },
      ],
    },
    4: {
      level: 4,
      summary: 'Complex nephrotic syndrome management includes treatment-resistant disease, complement-mediated disorders, and pregnancy considerations.',
      explanation: `## Treatment-Resistant Disease
- Calcineurin inhibitors (tacrolimus, cyclosporine)
- Mycophenolate mofetil
- Rituximab (anti-CD20)

## Complement-Mediated Diseases
- C3 glomerulopathy: Isolated C3 deposits
- Treatment: Eculizumab (anti-C5)

## Pregnancy Considerations
- Safe: Prednisone, azathioprine
- Avoid: Mycophenolate, cyclophosphamide, ACEi/ARB`,
      keyTerms: [
        { term: 'calcineurin inhibitors', definition: 'Tacrolimus and cyclosporine; T-cell suppression' },
      ],
    },
    5: {
      level: 5,
      summary: 'Precision nephrology in nephrotic syndrome integrates biomarker-guided therapy and novel therapeutics.',
      explanation: `## Precision Diagnosis
- Anti-PLA2R: Primary membranous nephropathy
- Soluble urokinase receptor (suPAR): FSGS biomarker
- APOL1 variants: Genetic risk in African ancestry

## Novel Therapeutics
- B-cell targeted: Rituximab, obinutuzumab
- Complement inhibition: Eculizumab, avacopan
- Sparsentan: Dual endothelin-angiotensin receptor antagonist for FSGS`,
      keyTerms: [
        { term: 'anti-PLA2R', definition: 'Autoantibody for membranous nephropathy' },
        { term: 'sparsentan', definition: 'Dual receptor antagonist approved for FSGS' },
      ],
    },
  },

  media: [],
  citations: [{ id: 'kdigo-glom-2021', type: 'website', title: 'KDIGO Glomerular Diseases Guideline', source: 'KDIGO' }],
  crossReferences: [
    { targetId: 'condition-nephritic-syndrome', targetType: 'condition', relationship: 'sibling', label: 'Nephritic Syndrome' },
  ],
  tags: { systems: ['renal'], topics: ['nephrology'], keywords: ['nephrotic', 'proteinuria', 'FSGS', 'membranous'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephroticSyndrome;
