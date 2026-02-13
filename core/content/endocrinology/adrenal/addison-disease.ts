/**
 * Addison Disease (Adrenal Insufficiency) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const addisonDisease: EducationalContent = {
  id: 'condition-addison-disease',
  type: 'condition',
  name: 'Addison Disease',
  alternateNames: ['Primary Adrenal Insufficiency', 'Adrenal Failure', 'Hypocortisolism'],
  hpoId: 'HP:0000846',

  levels: {
    1: {
      level: 1,
      summary: 'Addison disease is when your adrenal glands do not make enough hormones, causing fatigue, low blood pressure, and darkening of the skin.',
      explanation: `Your adrenal glands sit on top of your kidneys and make hormones your body needs to function. In Addison disease, these glands are damaged and cannot make enough hormones, especially cortisol and aldosterone.

**Common symptoms:**
- Extreme tiredness and weakness
- Weight loss and loss of appetite
- Darkening of skin, especially in skin folds and scars
- Low blood pressure (may feel dizzy when standing)
- Salt craving
- Nausea, vomiting, diarrhea
- Low blood sugar

**What causes it:**
- Autoimmune disease (most common)
- Infections like tuberculosis
- Bleeding into adrenal glands
- Genetic conditions

**Treatment:**
- Take hormone replacement pills every day
- Increase dose during illness or stress
- Carry an emergency injection for adrenal crisis`,
      keyTerms: [
        { term: 'adrenal glands', definition: 'Small glands on top of kidneys that make essential hormones' },
        { term: 'cortisol', definition: 'A hormone that helps your body handle stress' },
        { term: 'aldosterone', definition: 'A hormone that controls salt and water balance' },
      ],
      analogies: [
        'Your adrenal glands are like a backup battery system. Addison disease is like having dead batteries when you need power the most.',
      ],
      examples: [
        'A person with darkening skin, feeling tired all the time, and craving salty foods may have Addison disease.',
      ],
    },
    2: {
      level: 2,
      summary: 'Addison disease is primary adrenal insufficiency with deficient cortisol and aldosterone production, diagnosed by elevated ACTH and low morning cortisol, treated with glucocorticoid and mineralocorticoid replacement.',
      explanation: `## Classification

**Primary (Addison Disease):**
- Adrenal gland destruction/failure
- Low cortisol AND aldosterone
- ACTH elevated (feedback loss)
- ACTH precursor causes hyperpigmentation

**Secondary:**
- Pituitary failure to make ACTH
- Cortisol low, aldosterone normal
- No hyperpigmentation
- Can occur after long-term steroid use

**Tertiary:**
- Hypothalamic CRH deficiency
- Similar to secondary

## Etiology

**Autoimmune (80-90% in developed countries):**
- Isolated adrenalitis
- Autoimmune polyendocrine syndrome (APS)

**Infections:**
- Tuberculosis (most common worldwide)
- HIV, CMV, fungal

**Other:**
- Metastatic cancer
- Adrenal hemorrhage (Waterhouse-Friderichsen)
- Genetic (CAH, ALD)
- Drugs (ketoconazole, etomidate)

## Diagnosis

**Lab Findings:**
| Test | Result |
|------|--------|
| Morning Cortisol | Low (<3 mcg/dL diagnostic) |
| ACTH | Elevated (>2x upper limit in primary) |
| Aldosterone | Low |
| Plasma Renin | Elevated |
| Sodium | Low |
| Potassium | High |

**Confirmatory:**
- ACTH stimulation test (250 mcg cosyntropin)
- Normal: Peak cortisol >18-20 mcg/dL at 30-60 min
- Primary: No response
- Secondary: Delayed or blunted response`,
      keyTerms: [
        { term: 'ACTH stimulation test', definition: 'Test using synthetic ACTH to check adrenal response' },
        { term: 'autoimmune polyendocrine syndrome', definition: 'Condition with multiple autoimmune endocrine gland failures' },
        { term: 'Waterhouse-Friderichsen syndrome', definition: 'Bilateral adrenal hemorrhage, often from meningococcemia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Addison disease involves autoimmune destruction of adrenal cortex requiring lifelong replacement therapy, with adrenal crisis as a life-threatening emergency requiring immediate hydrocortisone and fluids.',
      explanation: `## Pathophysiology

**Autoimmune Mechanism:**
- Cell-mediated destruction of adrenal cortex
- Antibodies to 21-hydroxylase (90% of autoimmune cases)
- Gradual loss of cortisol, then aldosterone
- Zona glomerulosa may be spared initially

**HPA Axis Disruption:**
- Loss of negative feedback
- Pro-ACTH, pro-gamma-MSH production
- Melanocortin stimulation causes hyperpigmentation
- CRH also elevated

## Autoimmune Polyendocrine Syndromes

**Type 1 (APECED):**
- Autoimmune regulator (AIRE) gene
- Childhood onset
- Triad: Adrenal insufficiency, hypoparathyroidism, mucocutaneous candidiasis
- Recessive inheritance

**Type 2 (Schmidt Syndrome):**
- Adult onset
- Adrenal + thyroid (Hashimoto) + Type 1 diabetes
- HLA-DR3/DQ2, DR4/DQ8
- Dominant with variable penetrance

## Adrenal Crisis

**Triggers:**
- Infection, trauma, surgery
- Stopping steroids abruptly
- GI illness (dehydration)

**Presentation:**
- Hypotension, shock unresponsive to fluids
- Abdominal pain, vomiting
- Fever, confusion
- Severe weakness
- Hyponatremia, hyperkalemia, hypoglycemia

**Treatment:**
1. Hydrocortisone 100mg IV bolus
2. Hydrocortisone 200mg/day continuous or divided
3. Aggressive saline (D5NS if hypoglycemic)
4. Treat underlying trigger
5. Fludrocortisone when stable (oral)

## Management

**Glucocorticoid Replacement:**
- Hydrocortisone 15-25 mg/day (2/3 AM, 1/3 PM)
- Or prednisone 3-5 mg daily
- Double or triple for illness

**Mineralocorticoid:**
- Fludrocortisone 0.05-0.2 mg daily
- Monitor BP, serum potassium
- Salt intake liberalized

**Patient Education:**
- Sick day rules
- Emergency injection kit
- Medical alert bracelet`,
      keyTerms: [
        { term: 'adrenal crisis', definition: 'Life-threatening adrenal insufficiency requiring emergency treatment' },
        { term: '21-hydroxylase', definition: 'Adrenal enzyme targeted by autoimmune antibodies' },
        { term: 'fludrocortisone', definition: 'Synthetic mineralocorticoid for aldosterone replacement' },
      ],
      clinicalNotes: 'Always give steroids before thyroid replacement in patients with combined deficiency to avoid precipitating adrenal crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced Addison management addresses optimization of replacement therapy, pregnancy considerations, perioperative management, associated autoimmune conditions screening, and quality of life issues including fatigue and bone health.',
      explanation: `## Optimizing Replacement Therapy

**Current Controversies:**

*Hydrocortisone vs Prednisone:*
- Hydrocortisone: Shorter acting, more physiologic
- Prednisone: Longer half-life, once daily dosing
- Some patients prefer prednisone for convenience

*Dose Timing:*
- Traditional: 2/3 morning, 1/3 afternoon
- Some advocate 3x daily for better quality of life
- Modified-release hydrocortisone (Chronocort) in development

*Monitoring:*
- No perfect test; clinical assessment primary
- 24-hour urine free cortisol
- Bone density (excess replacement risk)

## Special Populations

**Pregnancy:**
- Increased requirements in third trimester
- Typical increase: 20-40% by third trimester
- Stress dose during labor
- Hydrocortisone preferred (inactivated by placenta)
- Fludrocortisone continues

**Children:**
- Dose by body surface area
- Monitor growth velocity
- Delayed puberty possible
- DHEA may help androgen deficiency

**Elderly:**
- Higher cardiovascular risk
- Careful fludrocortisone titration
- Osteoporosis screening

## Associated Conditions

**Screening Recommendations:**
- Thyroid function (annually)
- Diabetes screening
- Celiac disease (especially APS-1)
- Vitiligo, pernicious anemia
- Primary ovarian/testicular failure

**DHEA Replacement:**
- Optional for women
- 25-50 mg daily
- May improve libido, well-being
- Not evidence-based for men

## Perioperative Management

**Minor Surgery:**
- 25 mg hydrocortisone day of surgery
- Resume normal dose post-op

**Moderate Surgery:**
- 50-75 mg hydrocortisone day of surgery
- Taper over 1-2 days

**Major Surgery:**
- 100-150 mg hydrocortisone day of surgery
- Continuous IV or q6-8h
- Taper to baseline over 2-3 days`,
      keyTerms: [
        { term: 'DHEA', definition: 'Dehydroepiandrosterone; weak adrenal androgen' },
        { term: 'Chronocort', definition: 'Modified-release hydrocortisone for circadian delivery' },
        { term: 'APECED', definition: 'Autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy' },
      ],
      clinicalNotes: 'Patient education about sick day rules is critical. Provide written instructions and emergency contact information. Consider emergency glucocorticoid injection kits for all patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Addison disease research focuses on stem cell therapy, artificial adrenal systems, biomarkers for optimal dosing, and understanding long-term outcomes including mortality and quality of life in treated patients.',
      explanation: `## Mortality and Outcomes

**Historical:**
- Untreated: Universal mortality
- Treated: Mortality still 1.5-2x general population

**Excess Mortality Causes:**
- Cardiovascular disease
- Infections
- Adrenal crisis
- Malignancy (slight increase)

**Quality of Life:**
- Despite treatment, many report reduced QOL
- Chronic fatigue common
- Cognitive complaints
- Depression/anxiety increased

## Emerging Therapies

**Modified-Release Formulations:**
- Chronocort: Delayed-release for morning peak
- Duocort: Bimodal release profile
- Aim to mimic circadian rhythm
- Improved QOL in trials

**Subcutaneous Hydrocortisone:**
- Pump delivery
- Better overnight coverage
- Option for brittle patients

**Cell and Gene Therapy:**
- Stem cell-derived adrenal cells
- Gene therapy for APECED
- Adrenal transplantation (experimental)

**Artificial Adrenal:**
- Closed-loop system with glucocorticoid pump
- Sensors for cortisol or stress markers
- Early development stage

## Biomarkers of Optimal Replacement

**Current Research:**
- Salivary cortisol profiles
- Hair cortisol (chronic exposure)
- Metabolomic markers
- Inflammatory markers
- Bone turnover markers

**Personalized Medicine:**
- Pharmacogenomics of steroid metabolism
- Individual circadian variation
- Activity-based dosing algorithms

## Future Directions

- Immune tolerance for early autoimmune disease
- Prevention strategies for high-risk families
- Improved education and crisis prevention
- International registries for outcomes research`,
      keyTerms: [
        { term: 'Chronocort', definition: 'Modified-release hydrocortisone designed for circadian rhythm' },
        { term: 'artificial adrenal', definition: 'Closed-loop glucocorticoid delivery system in development' },
        { term: 'hair cortisol', definition: 'Chronic cortisol exposure marker using hair samples' },
      ],
      clinicalNotes: 'Even well-treated patients have reduced life expectancy. Focus on cardiovascular risk reduction, infection prevention, and patient education to minimize adrenal crisis risk.',
    },
  },

  media: [],
  citations: [
    {
      id: 'addison-guidelines-2016',
      type: 'article',
      title: 'Diagnosis and Treatment of Primary Adrenal Insufficiency',
      source: 'Journal of Clinical Endocrinology and Metabolism',
      authors: ['Bornstein SR', 'Allolio B', 'Arlt W', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-cushing-syndrome', targetType: 'condition', relationship: 'related', label: 'Cushing Syndrome' },
    { targetId: 'anatomy-adrenal-glands', targetType: 'structure', relationship: 'related', label: 'Adrenal Glands' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['addison', 'adrenal insufficiency', 'cortisol', 'aldosterone', 'autoimmune'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default addisonDisease;
