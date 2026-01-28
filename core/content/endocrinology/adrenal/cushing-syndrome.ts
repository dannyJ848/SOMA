/**
 * Cushing Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const cushingSyndrome: EducationalContent = {
  id: 'condition-cushing-syndrome',
  type: 'condition',
  name: 'Cushing Syndrome',
  alternateNames: ['Hypercortisolism', 'Cushing Disease', 'Corticosteroid Excess'],
  hpoId: 'HP:0001578',

  levels: {
    1: {
      level: 1,
      summary: 'Cushing syndrome is when your body has too much cortisol, a stress hormone, causing weight gain and other changes.',
      explanation: `Cortisol is a hormone your body makes when you are stressed. It helps control blood sugar, blood pressure, and how your body uses energy. When you have too much cortisol for a long time, it causes Cushing syndrome.

**Common signs:**
- Weight gain, especially in the face (round "moon face") and belly
- Purple stretch marks on skin
- Easy bruising
- Muscle weakness
- High blood pressure
- High blood sugar
- Thin skin that wounds heal slowly

**Causes:**
- Taking steroid medications (like prednisone) for a long time
- A tumor in the pituitary gland (Cushing disease)
- A tumor in the adrenal glands
- A tumor elsewhere making ACTH hormone

**Treatment:**
- If from medication: slowly reduce the dose
- If from a tumor: surgery to remove the tumor
- Sometimes radiation or medication`,
      keyTerms: [
        { term: 'cortisol', definition: 'A stress hormone made by your adrenal glands' },
        { term: 'adrenal glands', definition: 'Small glands on top of your kidneys that make hormones' },
        { term: 'ACTH', definition: 'A hormone from the pituitary that tells adrenal glands to make cortisol' },
      ],
      analogies: [
        'Cortisol is like your body\'s alarm system. Cushing syndrome is like the alarm that is stuck on all the time, causing wear and tear.',
      ],
      examples: [
        'A person taking prednisone for arthritis for months may develop round face and weight gain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cushing syndrome is chronic glucocorticoid excess, either ACTH-dependent (pituitary or ectopic) or ACTH-independent (adrenal), diagnosed by elevated 24-hour urinary free cortisol and abnormal dexamethasone suppression.',
      explanation: `## Classification

**ACTH-Dependent (80%):**
- Cushing disease: Pituitary adenoma making ACTH (70% of all cases)
- Ectopic ACTH: Small cell lung cancer, carcinoid tumors, pancreatic NETs

**ACTH-Independent (20%):**
- Adrenal adenoma (unilateral)
- Adrenal carcinoma (rare, aggressive)
- Bilateral adrenal hyperplasia
- Primary pigmented nodular adrenocortical disease (PPNAD)

**Exogenous:**
- Long-term glucocorticoid therapy (most common cause overall)

## Diagnosis

**Screening Tests:**
| Test | Interpretation |
|------|----------------|
| 24h Urine Free Cortisol (UFC) | >3x upper limit is diagnostic |
| 1mg Overnight Dexamethasone Suppression | Cortisol >1.8 mcg/dL fails suppression |
| Late-night Salivary Cortisol | Elevated (>145 ng/dL) indicates loss of diurnal rhythm |

**Confirmatory Testing:**
- 48-hour low-dose dexamethasone suppression test
- Midnight serum cortisol

**Localization:**
- ACTH level: Low (adrenal) vs Normal/High (pituitary/ectopic)
- High-dose dexamethasone: Suppresses in pituitary, not ectopic
- MRI pituitary
- CT abdomen (adrenals)
- Petrosal sinus sampling (gold standard for Cushing disease)`,
      keyTerms: [
        { term: 'dexamethasone suppression test', definition: 'Test using synthetic steroid to see if cortisol production can be suppressed' },
        { term: 'ectopic ACTH', definition: 'ACTH produced by a tumor outside the pituitary' },
        { term: 'petrosal sinus sampling', definition: 'Procedure sampling blood near pituitary to confirm ACTH source' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cushing syndrome pathophysiology involves disrupted HPA axis with loss of diurnal rhythm, requiring systematic biochemical confirmation followed by imaging and selective venous sampling to localize the source before definitive therapy.',
      explanation: `## Pathophysiology

**Normal HPA Axis:**
- Cortisol follows circadian rhythm: peaks 8 AM, nadir midnight
- Negative feedback at hypothalamus and pituitary
- Stress overrides feedback temporarily

**In Cushing Disease:**
- Pituitary microadenoma (<10mm) secretes ACTH autonomously
- Bilateral adrenal hyperplasia and hyperfunction
- Loss of diurnal cortisol variation
- Failure to suppress with low-dose dexamethasone

**In Ectopic ACTH:**
- Tumor produces ACTH independent of feedback
- Often rapid onset, severe hypokalemia
- Small cell lung cancer: most common
- Bronchial carcinoid: may mimic pituitary source

**In Adrenal Causes:**
- Autonomous cortisol production
- ACTH suppressed (<5 pg/mL)
- Atrophy of contralateral adrenal

## Diagnostic Challenges

**Pseudo-Cushing States:**
- Depression, alcoholism, obesity
- May have elevated UFC but normal dexamethasone suppression
- Midnight salivary cortisol usually normal

**Cyclical Cushing:**
- Periodic hormone excess
- Requires multiple UFC collections
- Can occur with all etiologies

**Pediatric Considerations:**
- Growth failure is hallmark
- Weight gain less prominent than adults
- Bone age delayed

## Treatment Approach

**Cushing Disease:**
- Transsphenoidal surgery: 70-90% remission for microadenomas
- Radiation: For failed surgery or recurrence
- Medical: Ketoconazole, metyrapone, pasireotide, mifepristone

**Adrenal Tumors:**
- Adrenalectomy (laparoscopic preferred)
- Adrenal carcinoma: Open surgery, mitotane

**Ectopic ACTH:**
- Treat underlying tumor
- Bilateral adrenalectomy if source unresectable`,
      keyTerms: [
        { term: 'pseudo-Cushing', definition: 'Conditions mimicking Cushing syndrome without true hypercortisolism' },
        { term: 'transsphenoidal surgery', definition: 'Surgery through nose to remove pituitary tumors' },
        { term: 'mitotane', definition: 'Adrenolytic agent used for adrenal carcinoma' },
      ],
      clinicalNotes: 'Always test for adrenal insufficiency after successful treatment. Patients need steroid coverage during stress for 6-12 months post-cure.',
    },
    4: {
      level: 4,
      summary: 'Advanced Cushing syndrome management addresses persistent/recurrent disease after initial therapy, bilateral adrenalectomy complications, adrenal carcinoma staging and treatment, and long-term metabolic and cardiovascular risk management.',
      explanation: `## Persistent and Recurrent Disease

**After Transsphenoidal Surgery:**
- Immediate remission: Morning cortisol <2 mcg/dL post-op day 1
- Recurrence: 15-25% at 5-10 years
- Early recurrence (within 2 years): Suggests incomplete resection
- Late recurrence: May indicate new adenoma

**Salvage Options:**
- Repeat transsphenoidal surgery: 50-60% success
- Radiation therapy: Stereotactic radiosurgery (Gamma Knife)
- Bilateral adrenalectomy: Definitive, but requires lifelong replacement

## Nelson Syndrome

- Occurs after bilateral adrenalectomy for Cushing disease
- Progressive pituitary tumor growth (loss of cortisol feedback)
- Rising ACTH, skin hyperpigmentation
- Risk: 15-30% over 10 years
- Prevention: Pituitary radiation at time of adrenalectomy

## Adrenal Carcinoma

**Staging (ENSAT):**
| Stage | Criteria | 5-year Survival |
|-------|----------|-----------------|
| I | <5cm, confined | 80% |
| II | >5cm, confined | 60% |
| III | Local invasion or positive nodes | 40% |
| IV | Distant metastases | 10% |

**Treatment:**
- Open adrenalectomy with en bloc resection
- Adjuvant mitotane
- EDP-M (etoposide, doxorubicin, cisplatin + mitotane) for metastatic

## Long-term Complications

**Cardiovascular:**
- Hypertension, atherosclerosis
- Cardiomyopathy (cortisol toxicity)
- Continue monitoring for years after cure

**Bone:**
- Osteoporosis, vertebral fractures
- AVN (avascular necrosis) of femoral head

**Metabolic:**
- Diabetes may persist even after cure
- Obesity and metabolic syndrome

**Psychiatric:**
- Depression, cognitive deficits
- May persist 1-2 years post-treatment`,
      keyTerms: [
        { term: 'Nelson syndrome', definition: 'Pituitary tumor progression after bilateral adrenalectomy' },
        { term: 'stereotactic radiosurgery', definition: 'Focused radiation delivery to pituitary tumor' },
        { term: 'mitotane', definition: 'Adrenocortical toxin used for carcinoma treatment' },
      ],
      clinicalNotes: 'Nelson syndrome risk is higher with larger pituitary tumors at time of adrenalectomy. Consider prophylactic pituitary radiation in high-risk patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Cushing syndrome care integrates molecular diagnostics, targeted therapies including somatostatin analogs and glucocorticoid receptor antagonists, and personalized approaches based on tumor genetics and patient-specific factors.',
      explanation: `## Molecular Pathology

**Pituitary Tumors:**
- USP8 mutations: 30-40% of Cushing disease
- Associated with smaller, more responsive tumors
- CDKN1B mutations: Rare familial cases

**Adrenal Tumors:**
- PRKACA mutations: Cortisol-producing adenomas
- TP53, RB1, IGF2 alterations: Adrenal carcinoma
- MicroRNA profiles aid diagnosis

## Novel Therapeutics

**Medical Therapy Advances:**

*Somatostatin Analogs:*
- Pasireotide: Multireceptor SSTR agonist
- Approved for Cushing disease
- Effective in ~25% of patients
- Side effects: Hyperglycemia, GI

*Glucocorticoid Receptor Antagonist:*
- Mifepristone: RU-486
- Blocks cortisol action
- Used when surgery/radiation fails
- Monitor for hypokalemia, adrenal insufficiency

*Adrenal Steroidogenesis Inhibitors:*
- Osilodrostat: 11-beta-hydroxylase inhibitor
- Levoketoconazole: Enantiomer with better profile
- LCI699: Aldosterone synthase inhibitor

**Targeted Therapy Research:**
- Retinoic acid: Reduces ACTH secretion
- EGFR inhibitors: For USP8-mutant tumors
- Cabergoline: Dopamine agonist (some efficacy)

## Diagnostic Innovations

**Liquid Biopsy:**
- Circulating tumor DNA
- Early detection of recurrence

**Functional Imaging:**
- 68Ga-DOTATATE PET: For ectopic ACTH
- 11C-methionine PET: Pituitary adenoma detection
- FDG-PET: Adrenal carcinoma staging

## Future Directions

- Gene therapy for refractory pituitary tumors
- Artificial intelligence for differential diagnosis
- Patient-derived tumor models for drug testing
- Long-term quality of life optimization`,
      keyTerms: [
        { term: 'pasireotide', definition: 'Multireceptor somatostatin analog approved for Cushing disease' },
        { term: 'mifepristone', definition: 'Glucocorticoid receptor antagonist for medical management' },
        { term: 'USP8 mutation', definition: 'Common driver mutation in Cushing disease pituitary adenomas' },
      ],
      clinicalNotes: 'Mifepristone requires careful monitoring as cortisol levels rise but are blocked; do not use cortisol levels to guide therapy. Watch for hypokalemia and adrenal insufficiency signs.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-cushing-2015',
      type: 'article',
      title: 'Diagnosis of Cushing\'s Syndrome',
      source: 'Endocrine Society Guidelines',
      authors: ['Nieman LK', 'Biller BM', 'Findling JW', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-adrenal-glands', targetType: 'structure', relationship: 'related', label: 'Adrenal Glands' },
    { targetId: 'condition-addison-disease', targetType: 'condition', relationship: 'related', label: 'Addison Disease' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['cushing', 'cortisol', 'ACTH', 'pituitary', 'adrenal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cushingSyndrome;
