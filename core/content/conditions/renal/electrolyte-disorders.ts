/**
 * Electrolyte Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const electrolyteDisorders: EducationalContent = {
  id: 'condition-electrolyte-disorders',
  type: 'condition',
  name: 'Electrolyte Disorders',
  nameEs: 'Trastornos Electrolíticos',
  alternateNames: ['Electrolyte Imbalance', 'Fluid and Electrolyte Disorders', 'Dyselectrolytemia'],
  hpoId: 'HP:0001951',

  levels: {
    1: {
      level: 1,
      summary: 'Electrolyte disorders occur when levels of minerals like sodium, potassium, calcium, and magnesium in your blood are too high or too low, affecting how your body works.',
      explanation: `Electrolytes are minerals in your blood that help control important body functions. When levels are too high or too low, you can feel sick.

**Main Electrolytes:**
- Sodium (Na): Controls fluid balance
- Potassium (K): Controls heart rhythm and muscles
- Calcium (Ca): Strengthens bones, helps muscles and nerves
- Magnesium (Mg): Helps muscles and nerves work

**When Sodium is Too Low (Hyponatremia):**
- Confusion, headache
- Nausea, vomiting
- Seizures (severe)
- Caused by: Too much water, some medications

**When Sodium is Too High (Hypernatremia):**
- Extreme thirst
- Confusion
- Weakness
- Caused by: Dehydration, not drinking enough

**When Potassium is Too Low (Hypokalemia):**
- Muscle weakness
- Cramps
- Heart rhythm problems

**When Potassium is Too High (Hyperkalemia):**
- Dangerous heart rhythm problems
- Muscle weakness
- Can be life-threatening

**Treatment:**
- Find and treat the cause
- Adjust diet and fluids
- Take supplements or medications
- Severe cases need hospital treatment`,
      keyTerms: [
        { term: 'electrolyte', definition: 'Minerals in blood that control body functions like nerve and muscle activity' },
        { term: 'sodium', definition: 'Main electrolyte controlling fluid balance in body' },
        { term: 'potassium', definition: 'Electrolyte controlling heart rhythm and muscle function' },
      ],
      analogies: ['Electrolytes are like the battery acid in a car battery—just the right amount makes everything work, but too much or too little causes problems.'],
      examples: ['An elderly person on blood pressure medication who becomes confused after drinking excessive water may have hyponatremia.'],
    },
    2: {
      level: 2,
      summary: 'Electrolyte disorders involve abnormalities in serum sodium, potassium, calcium, or magnesium, with classification based on severity and etiology guiding appropriate fluid management and medication adjustments.',
      explanation: `## Sodium Disorders

**Hyponatremia (Na less than 135 mEq/L):**
- Mild: 130-134 mEq/L
- Moderate: 125-129 mEq/L
- Severe: less than 125 mEq/L
- Causes: Hypovolemia, SIADH, hypervolemic states

**Hypernatremia (Na greater than 145 mEq/L):**
- Mild: 146-149 mEq/L
- Moderate: 150-159 mEq/L
- Severe: 160 mEq/L or higher
- Causes: Water loss, inadequate water intake, sodium gain

## Potassium Disorders

**Hypokalemia (K less than 3.5 mEq/L):**
- Mild: 3.0-3.4 mEq/L
- Moderate: 2.5-2.9 mEq/L
- Severe: less than 2.5 mEq/L
- Causes: Diuretics, vomiting, diarrhea, alkalosis

**Hyperkalemia (K greater than 5.0 mEq/L):**
- Mild: 5.1-5.4 mEq/L
- Moderate: 5.5-5.9 mEq/L
- Severe: 6.0 mEq/L or higher
- Causes: Kidney failure, ACEi/ARB, spironolactone, NSAIDs

## Calcium Disorders

**Hypocalcemia (Ca less than 8.5 mg/dL):**
- Causes: Hypoparathyroidism, vitamin D deficiency, kidney failure
- Symptoms: Numbness, tingling, muscle spasms

**Hypercalcemia (Ca greater than 10.5 mg/dL):**
- Causes: Hyperparathyroidism, cancer, vitamin D excess
- Symptoms: Stones, bones, groans, thrones, psychic overtones

## Magnesium Disorders

**Hypomagnesemia (Mg less than 1.7 mg/dL):**
- Causes: Diuretics, alcoholism, malnutrition
- Symptoms: Weakness, tremors, arrhythmias

**Hypermagnesemia (Mg greater than 2.5 mg/dL):**
- Causes: Kidney failure, antacids, enemas
- Symptoms: Weakness, hypotension, respiratory depression`,
      keyTerms: [
        { term: 'hyponatremia', definition: 'Low sodium in blood (less than 135 mEq/L)' },
        { term: 'hyperkalemia', definition: 'High potassium in blood (greater than 5.0 mEq/L); can cause fatal arrhythmias' },
        { term: 'SIADH', definition: 'Syndrome of inappropriate antidiuretic hormone; causes water retention and low sodium' },
        { term: 'tetany', definition: 'Muscle spasms from low calcium' },
      ],
    },
    3: {
      level: 3,
      summary: 'Electrolyte disorders require understanding renal handling, transcellular shifts, and regulatory hormones, with specific management based on volume status, chronicity, and underlying pathophysiology.',
      explanation: `## Sodium Physiology

Serum Osmolality = 2 times Na plus glucose/18 plus BUN/2.8

**Hyponatremia Classification:**
| Status | Urine Na | Causes |
|--------|----------|--------|
| Hypovolemic | less than 20 | GI losses, diuretics |
| Euvolemic | greater than 30 | SIADH, hypothyroidism |
| Hypervolemic | less than 20 | CHF, cirrhosis, nephrosis |

## Potassium Physiology

Distribution: 98% intracellular, only 2% extracellular

**Renal Handling:**
- 90% excreted by kidneys
- Proximal tubule reabsorbs 67%
- Loop of Henle reabsorbs 25%
- Distal nephron secretion regulated by aldosterone

**Hypokalemia Causes:**
- Decreased intake (rare)
- Transcellular shift: Alkalosis, insulin, beta-agonists
- Increased losses: Diuretics, diarrhea, vomiting

**Hyperkalemia Causes:**
- Decreased excretion: CKD, ACEi/ARB, spironolactone
- Transcellular shift: Acidosis, hyperosmolality
- Increased intake: Usually iatrogenic

## Calcium Physiology

Regulation: PTH increases Ca, vitamin D increases Ca and phosphate absorption

**Hypocalcemia:**
- Causes: Hypoparathyroidism, vitamin D deficiency, CKD
- Treatment: Calcium gluconate, vitamin D

**Hypercalcemia:**
- Causes: Hyperparathyroidism, malignancy
- Treatment: Hydration, loop diuretics, bisphosphonates`,
      keyTerms: [
        { term: 'osmolality', definition: 'Concentration of dissolved particles in blood; regulates water movement' },
        { term: 'transcellular shift', definition: 'Movement of electrolytes between cells and blood; affects serum levels' },
        { term: 'aldosterone', definition: 'Hormone that increases sodium reabsorption and potassium excretion in kidneys' },
      ],
      clinicalNotes: 'Always check magnesium when treating refractory hypokalemia or hypocalcemia. For hyperkalemia, give calcium FIRST to stabilize cardiac membrane before shifting potassium.',
    },
    4: {
      level: 4,
      summary: 'Complex electrolyte management includes refractory disorders, genetic causes, special populations, and iatrogenic causes requiring nuanced understanding of renal physiology, acid-base interactions, and medication effects.',
      explanation: `## Refractory Hyponatremia

**Osmotic Demyelination Syndrome (ODS):**
- From rapid correction of chronic hyponatremia
- Na correction greater than 8-10 mEq/L/day
- Treatment: Slow correction, consider DDAVP for overcorrection

**Tolvaptan (V2 antagonist):**
- Indicated for euvolemic and hypervolemic hyponatremia
- Risk: Overcorrection, liver toxicity

## Refractory Hyperkalemia

**Binders:**
- Patiromer: Onset hours, chronic use
- SZC: Onset 1-2 hours, acute and chronic use
- Avoid Kayexalate due to colonic necrosis risk

## Calcium Disorder Nuances

**FHH (Familial Hypocalciuric Hypercalcemia):**
- CASR mutation
- Low urine calcium
- Benign, no treatment needed

## Special Situations

**Refeeding Syndrome:**
- Severe hypophosphatemia, hypokalemia, hypomagnesemia
- From rapid nutrition in malnourished patients

**Tumor Lysis Syndrome:**
- Hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia
- Treatment: Aggressive hydration, allopurinol

**DKA:**
- Total body potassium depleted despite normal/high serum K
- Replete K aggressively once K is less than 5.0`,
      keyTerms: [
        { term: 'ODS', definition: 'Osmotic demyelination syndrome; brain injury from rapid hyponatremia correction' },
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia; benign genetic condition' },
        { term: 'TLS', definition: 'Tumor lysis syndrome; metabolic emergency from rapid cancer cell death' },
        { term: 'patiromer', definition: 'Non-absorbable potassium binder for chronic hyperkalemia' },
      ],
      clinicalNotes: 'For chronic hyponatremia, correct by no more than 8-10 mEq/L/day to avoid ODS. Patiromer and SZC are preferred over Kayexalate for chronic hyperkalemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary electrolyte management integrates novel biomarkers, genetic testing for familial disorders, new potassium binders allowing RAAS continuation, and precision fluid management using dynamic resuscitation endpoints.',
      explanation: `## Novel Diagnostics

**Biomarkers in Hyponatremia:**
- Copeptin: Stable surrogate for vasopressin
- Uric acid: Low in SIADH

**Genetic Testing:**
- FHH (CASR mutations)
- Gitelman syndrome
- Liddle syndrome

## Therapeutic Advances

**Potassium Binders:**
- Patiromer: Ca2+ exchange
- SZC: Na+/H+ exchange, rapid onset

**Vaptans in Hyponatremia:**
- Tolvaptan: V2 receptor antagonist

## Precision Fluid Management

**Dynamic Measures:**
- Stroke volume variation (SVV)
- Pulse pressure variation (PPV)
- Passive leg raise with CO monitoring

**Goal-Directed Therapy:**
- Avoid both under- and over-resuscitation
- Individualized targets`,
      keyTerms: [
        { term: 'copeptin', definition: 'Stable marker of vasopressin secretion; helps classify hyponatremia' },
        { term: 'SZC', definition: 'Sodium zirconium cyclosilicate; novel potassium binder' },
        { term: 'Vaptans', definition: 'Vasopressin receptor antagonists; promote aquaresis' },
      ],
      clinicalNotes: 'SZC can be used for both acute and chronic hyperkalemia with rapid onset. Patiromer enables continuation of RAAS blockers in CKD patients.',
    },
  },

  media: [],
  citations: [
    { id: 'upToDate-electrolyte', type: 'article', title: 'Electrolyte Disorders', source: 'UpToDate' },
  ],
  crossReferences: [
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
  ],
  tags: { systems: ['renal'], topics: ['nephrology', 'critical care'], keywords: ['electrolyte', 'hyponatremia', 'hyperkalemia', 'hypocalcemia', 'magnesium'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default electrolyteDisorders;
