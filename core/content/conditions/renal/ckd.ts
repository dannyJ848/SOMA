/**
 * Chronic Kidney Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ckd: EducationalContent = {
  id: 'condition-chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  nameEs: 'Enfermedad Renal Crónica',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'Chronic Renal Disease'],
  hpoId: 'HP:0012622',

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease is when your kidneys are damaged and cannot filter blood as well as they should, often from diabetes or high blood pressure.',
      explanation: `Your kidneys filter waste from your blood and make urine. When they are damaged, waste can build up in your body.

**Causes:**
- Diabetes (leading cause)
- High blood pressure
- Glomerulonephritis
- Polycystic kidney disease

**Symptoms (often none until advanced):**
- Fatigue
- Swelling in legs
- Decreased urination
- Nausea
- Confusion

**Treatment:**
- Control diabetes and blood pressure
- Avoid kidney-damaging medications
- Dialysis or transplant for kidney failure`,
      keyTerms: [
        { term: 'kidney', definition: 'Organs that filter your blood and make urine' },
        { term: 'dialysis', definition: 'Machine treatment that filters blood when kidneys fail' },
      ],
      analogies: ['Your kidneys are like coffee filters—when damaged, they let things through that should stay out.'],
      examples: ['A diabetic with swollen legs and protein in urine may have CKD.'],
    },
    2: {
      level: 2,
      summary: 'CKD is defined as abnormal kidney function or structure present >3 months, staged by eGFR and albuminuria, with management focused on slowing progression and treating complications.',
      explanation: `## Definition
CKD for ≥3 months with:
- eGFR <60 mL/min/1.73m² OR
- Markers of kidney damage (albuminuria, abnormal imaging, etc.)

## Staging by eGFR
| Stage | eGFR | Description |
|-------|------|-------------|
| G1 | ≥90 | Normal or high |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mild-moderate decrease |
| G3b | 30-44 | Moderate-severe decrease |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure |

## Albuminuria Categories
- A1: <30 mg/g (normal)
- A2: 30-300 mg/g (moderately increased)
- A3: >300 mg/g (severely increased)

## Management
- BP control (<130/80)
- SGLT2 inhibitors (cardiorenal protection)
- ACEi/ARB for proteinuria
- Treat complications (anemia, bone disease, acidosis)`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; measure of kidney function' },
        { term: 'albuminuria', definition: 'Protein (albumin) in urine; marker of kidney damage' },
        { term: 'ACEi', definition: 'ACE inhibitor; protects kidneys by reducing intraglomerular pressure' },
      ],
    },
    3: {
      level: 3,
      summary: 'CKD progression involves nephron loss, hyperfiltration, and RAAS activation, with SGLT2 inhibitors and finerenone joining ACEi/ARBs as disease-modifying therapies alongside comprehensive complication management.',
      explanation: `## Pathophysiology
- **Nephron loss:** From underlying disease
- **Compensatory hyperfiltration:** Remaining nephrons work harder
- **RAAS activation:** Increased intraglomerular pressure
- **Proteinuria:** Tubular damage, further nephron loss
- **Fibrosis:** Progressive scarring

## Disease-Modifying Therapies
| Class | Agent | Evidence |
|-------|-------|----------|
| RAAS blockade | ACEi/ARB | Reduces proteinuria, slows progression |
| SGLT2i | Dapagliflozin, empagliflozin | DAPA-CKD, EMPA-KIDNEY trials |
| MRA | Finerenone | FIDELIO-DKD, FIGARO-DKD |
| GLP-1 RA | Semaglutide | CV benefit, potential renal benefit |

## Complications
- **Anemia:** ESA, iron supplementation
- **CKD-MBD:** Phosphate binders, vitamin D
- **Metabolic acidosis:** Sodium bicarbonate
- **Hyperkalemia:** Dietary restriction, binders (patiromer, SZC)
- **Volume overload:** Diuretics, sodium restriction`,
      keyTerms: [
        { term: 'hyperfiltration', definition: 'Increased single-nephron GFR that accelerates kidney damage' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral bone disorder' },
        { term: 'finerenone', definition: 'Non-steroidal MRA with cardiorenal benefits in diabetic CKD' },
      ],
      clinicalNotes: 'SGLT2 inhibitors are now indicated for CKD regardless of diabetes status (eGFR ≥20). Expect initial eGFR dip with ACEi/ARB or SGLT2i—do not discontinue unless >30% decline.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD care addresses kidney replacement therapy planning, vascular access, transplant evaluation, and management of the uremic syndrome while optimizing quality of life.',
      explanation: `## Kidney Replacement Therapy
**Hemodialysis:**
- 3x/week in center or home
- Requires vascular access (AV fistula preferred)
- Plan access 6+ months before anticipated start

**Peritoneal Dialysis:**
- Daily exchanges at home
- Requires peritoneal catheter
- Good for motivated patients

**Transplant:**
- Best outcomes; preemptive transplant if possible
- Living donor preferred
- Evaluation includes cardiac, infectious workup

## Conservative Management
- Palliative care option for elderly/comorbid
- Focus on symptom management
- Advance care planning

## Uremic Complications
- Pericarditis: Urgent dialysis indication
- Encephalopathy: Altered mental status
- Bleeding: Platelet dysfunction
- Pruritus, restless legs

## Timing of Dialysis
- Based on symptoms, not eGFR alone
- Generally when eGFR <10-15 and symptomatic`,
      keyTerms: [
        { term: 'AV fistula', definition: 'Arteriovenous fistula; preferred vascular access for hemodialysis' },
        { term: 'preemptive transplant', definition: 'Kidney transplant before dialysis initiation' },
        { term: 'uremic syndrome', definition: 'Constellation of symptoms from accumulated toxins in kidney failure' },
      ],
      clinicalNotes: 'Refer to nephrology when eGFR <30 to plan for kidney replacement. AV fistula should be placed 6 months before anticipated dialysis start to allow maturation.',
    },
    5: {
      level: 5,
      summary: 'Precision nephrology integrates biomarkers of progression, novel therapies targeting fibrosis and inflammation, xenotransplantation, and artificial kidney development.',
      explanation: `## Biomarkers
- UACR remains primary marker
- NGAL, KIM-1: Tubular injury markers
- Supar, TNFR1/2: Predict progression
- Genetic risk scores

## Novel Therapies
**Anti-Fibrotic:**
- Pirfenidone, nintedanib (from pulmonary fibrosis)
- TGF-β pathway inhibitors

**Anti-Inflammatory:**
- Bardoxolone (Nrf2 activator): Promising but safety signals
- CCR2 inhibitors

**Complement Inhibition:**
- For C3 glomerulopathy, aHUS

## Future of Kidney Replacement
**Xenotransplantation:**
- Pig kidney transplant trials
- Gene-edited pigs (remove antigens)

**Artificial Kidney:**
- Implantable bioartificial kidney
- Wearable dialysis devices

## Precision Medicine
- Genotype-phenotype correlations
- Biomarker-guided therapy selection
- Trial design for rare kidney diseases`,
      keyTerms: [
        { term: 'xenotransplantation', definition: 'Transplanting organs from animals (pigs) to humans' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; biomarker of tubular damage' },
        { term: 'Nrf2', definition: 'Transcription factor regulating antioxidant response' },
      ],
      clinicalNotes: 'Xenotransplantation from gene-edited pigs is now in early clinical trials—may address organ shortage. SGLT2i + finerenone combination under study for additive benefit.',
    },
  },

  media: [],
  citations: [{ id: 'kdigo-ckd-2024', type: 'website', title: 'KDIGO CKD Guidelines', source: 'Kidney Disease Improving Global Outcomes' }],
  crossReferences: [{ targetId: 'condition-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes' }],
  tags: { systems: ['renal'], topics: ['nephrology'], keywords: ['CKD', 'kidney failure', 'dialysis', 'eGFR', 'SGLT2'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ckd;
