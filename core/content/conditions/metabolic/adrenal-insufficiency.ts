/**
 * Adrenal Insufficiency - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const adrenalInsufficiency: EducationalContent = {
  id: 'condition-adrenal-insufficiency',
  type: 'condition',
  name: 'Adrenal Insufficiency',
  nameEs: 'Insuficiencia Suprarrenal',
  alternateNames: ['Addison\'s Disease', 'Adrenal Crisis', 'Hypoadrenalism'],
  hpoId: 'HP:0000824',

  levels: {
    1: {
      level: 1,
      summary: 'Adrenal insufficiency is when your adrenal glands do not make enough hormones, causing fatigue, low blood pressure, and other symptoms that can be life-threatening.',
      explanation: `Your adrenal glands are small organs located on top of each kidney. They make important hormones that help your body respond to stress, control blood pressure, and balance salt and water.

**What happens in adrenal insufficiency:**
- Body does not make enough cortisol (stress hormone)
- Sometimes also not enough aldosterone (salt hormone)
- Body cannot handle stress well

**Common symptoms:**
- Severe fatigue and weakness
- Weight loss and loss of appetite
- Low blood pressure (may feel dizzy)
- Nausea, vomiting, diarrhea
- Darkening of the skin (in primary type)
- Salt craving

**Adrenal crisis is an emergency:**
- Severe weakness and confusion
- Very low blood pressure
- Severe abdominal pain
- Loss of consciousness

**Treatment:**
- Daily hormone replacement medications
- Extra medication during illness or stress
- Emergency injection for severe situations
- Medical alert bracelet recommended`,
      keyTerms: [
        { term: 'cortisol', definition: 'A hormone that helps your body respond to stress' },
        { term: 'adrenal glands', definition: 'Small glands on top of your kidneys that make important hormones' },
        { term: 'aldosterone', definition: 'A hormone that controls salt and water balance in your body' },
      ],
      analogies: [
        "Your adrenal glands are like your body's battery pack. When they do not work, you run out of energy quickly.",
      ],
      examples: [
        'A person with adrenal insufficiency might feel very weak and dizzy when standing up, and their skin might get darker in skin folds and scars.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adrenal insufficiency is classified as primary (Addison disease) or secondary/tertiary (pituitary/hypothalamic), diagnosed with cortisol and ACTH measurements, and treated with glucocorticoid and mineralocorticoid replacement.',
      explanation: `## Classification

**Primary (Addison's Disease):**
- Adrenal gland destruction
- Low cortisol + low aldosterone
- High ACTH
- Hyperpigmentation common

**Secondary (Pituitary):**
- Low ACTH from pituitary disease
- Low cortisol only
- No hyperpigmentation
- Aldosterone normal

**Tertiary (Hypothalamic):**
- Low CRH from hypothalamus
- Similar to secondary

## Causes

**Primary (Addison's):**
- Autoimmune (70-80% in developed countries)
- Infection: TB, HIV, fungal
- Adrenal hemorrhage (Waterhouse-Friderichsen)
- Metastatic cancer
- Congenital adrenal hyperplasia

**Secondary/Tertiary:**
- Pituitary adenoma/surgery/radiation
- Long-term steroid use (most common)
- Head trauma, pituitary apoplexy

## Diagnosis

| Test | Primary AI | Secondary AI |
|------|------------|--------------|
| Morning cortisol | Low | Low |
| ACTH | High | Low/normal |
| Aldosterone | Low | Normal |
| Renin | High | Normal |

**Confirmatory tests:**
- ACTH stimulation test (cosyntropin)
- Insulin-induced hypoglycemia (for central AI)

## Treatment

**Glucocorticoid replacement:**
- Hydrocortisone 15-25 mg/day (2-3 divided doses)
- Prednisone 3-5 mg/day (alternative)
- Dose stress dosing for illness/surgery

**Mineralocorticoid (primary only):**
- Fludrocortisone 0.05-0.2 mg/day

**Emergency:**
- IV hydrocortisone 100 mg q6-8h
- IV fluids with dextrose
- Correct electrolytes`,
      keyTerms: [
        { term: 'ACTH', definition: 'Adrenocorticotropic hormone; pituitary hormone stimulating cortisol production' },
        { term: 'Addison\'s disease', definition: 'Primary adrenal insufficiency from adrenal gland destruction' },
        { term: 'cosyntropin', definition: 'Synthetic ACTH used for stimulation testing' },
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal insufficiency requires understanding of the HPA axis, distinguishing primary from central disease, managing glucocorticoid dosing for stress events, and recognizing adrenal crisis as an endocrine emergency requiring immediate treatment.',
      explanation: `## HPA Axis Physiology

**Normal regulation:**
- Hypothalamus releases CRH
- Pituitary releases ACTH in response
- Adrenal cortex produces cortisol
- Negative feedback on CRH and ACTH

**Cortisol rhythm:**
- Peak at 6-8 AM
- Nadir at midnight
- Stimulated by stress, illness, surgery

**Aldosterone regulation:**
- RAAS system (not ACTH dependent)
- Explains why central AI spares mineralocorticoid

## Diagnostic Testing

**ACTH Stimulation Test (Cosyntropin):**
- Baseline cortisol
- Administer 250 mcg cosyntropin
- Measure cortisol at 30 and 60 minutes
- Pass: Cortisol >18-20 mcg/dL

**Low-dose ACTH test:**
- 1 mcg cosyntropin
- More sensitive for mild/early AI
- Limited availability

**Other tests:**
- Morning cortisol: >19 suggests AI unlikely
- ACTH level: Distinguish primary vs central
- CRH stimulation: Rarely needed

## Adrenal Crisis

**Precipitants:**
- Infection (most common)
- Steroid withdrawal
- Surgery, trauma
- Stress

**Clinical presentation:**
- Hypotension, shock
- Abdominal pain, vomiting
- Hypoglycemia
- Hyponatremia, hyperkalemia (primary)
- Fever, confusion

**Treatment (order matters):**
1. **Draw cortisol and ACTH first**
2. Give IV hydrocortisone 100 mg STAT
3. IV normal saline with dextrose
4. Treat precipitating cause
5. Stress-dose steroids continue

## Steroid Coverage for Stress

| Situation | Hydrocortisone dose |
|-----------|---------------------|
| Minor illness | 2-3x usual dose for 1-2 days |
| Fever >38°C | 3x dose for 2-3 days |
| Dental work | 25-50 mg day of procedure |
| Major surgery | 100 mg pre-op, then 50 mg q8h |
| Minor surgery | 50 mg pre-op, then 25 mg q8h |`,
      keyTerms: [
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis; controls cortisol production' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; regulates blood pressure and fluid balance' },
        { term: 'iatrogenic', definition: 'Caused by medical treatment; exogenous steroids causing AI' },
      ],
      clinicalNotes: 'Never give dexamethasone for adrenal crisis (does not have mineralocorticoid effect). Always draw cortisol before giving steroids in suspected crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of adrenal insufficiency addresses individualized glucocorticoid dosing, monitoring for overtreatment, management of congenital adrenal hyperplasia, pregnancy considerations, and differentiating partial from complete insufficiency.',
      explanation: `## Individualized Dosing

**Factors affecting dose:**
- Body weight, composition
- Activity level
- Concomitant medications (induce CYP3A4)
- Individual sensitivity

**Monitoring:**
- Clinical: Energy, weight, symptoms
- Biomarkers: ACTH (should normalize)
- No target cortisol level (unreliable)

**Signs of overtreatment:**
- Weight gain, Cushingoid features
- Hyperglycemia, hypertension
- Osteoporosis risk

**Signs of undertreatment:**
- Fatigue, nausea
- Weight loss
- Salt craving (primary)

## Congenital Adrenal Hyperplasia

**Classic CAH:**
- 21-hydroxylase deficiency (90%)
- Salt-wasting vs simple-virilizing
- Glucocorticoid + mineralocorticoid needed

**Non-classic CAH:**
- Milder enzyme deficiency
- May present in adolescence/adulthood
- Hirsutism, infertility, menstrual irregularity

**Pregnancy in CAH:**
- Increase hydrocortisone dose
- Monitor androgens
- Fludrocortisone usually continued

## Exogenous Steroid Withdrawal

**Suppression duration:**
- Prednisone >5 mg/day >3 weeks: risk
- Higher doses/longer: greater risk
- Recovery may take months to a year

**Tapering approach:**
- Slow taper if on steroids >1 month
- Switch to hydrocortisone (shorter half-life)
- Consider physiologic replacement

**Testing for recovery:**
- Morning cortisol
- ACTH stimulation
- Only attempt after taper to low dose

## Special Situations

**Pregnancy:**
- Increased hydrocortisone requirement (especially 3rd trimester)
- Fludrocortisone often reduced
- Monitor symptoms, adjust dose

**Elderly:**
- Lower doses often adequate
- Increased fall/fracture risk
- Monitor for Cushingoid effects`,
      keyTerms: [
        { term: '21-hydroxylase deficiency', definition: 'Most common form of congenital adrenal hyperplasia causing cortisol and aldosterone deficiency' },
        { term: 'Cushingoid', definition: 'Physical changes from excess cortisol (moon face, buffalo hump, central obesity)' },
        { term: 'physiologic replacement', definition: 'Dose mimicking natural cortisol production (~15-25 mg hydrocortisone)' },
      ],
      clinicalNotes: 'For patients on chronic steroids, never abruptly stop. Taper slowly based on duration of use. Consider adrenal testing before major surgery in recent steroid users.',
    },
    5: {
      level: 5,
      summary: 'Contemporary adrenal insufficiency practice explores modified-release hydrocortisone formulations, circadian hormone replacement, adrenal autoantibody testing, and personalized stress-dose strategies while addressing quality of life and mortality challenges.',
      explanation: `## Novel Cortisol Formulations

**Modified-release hydrocortisone:**
- Plenadren (once-daily)
- Chronocort (twice-daily, delayed-release)
- Efmody (twice-daily)
- Mimic natural cortisol rhythm better

**Potential benefits:**
- Better energy levels
- Improved sleep
- Lower total dose
- Reduced long-term complications

**Challenges:**
- Cost and availability
- Limited long-term data
- Individual variation in pharmacokinetics

## Precision Medicine

**Autoantibody testing:**
- 21-hydroxylase antibodies
- Predict progression to clinical AI
- Screen at-risk family members

**Genetic forms:**
- CAH genotyping
- DAX-1 mutations (X-linked AI)
- NR5A1 (SF-1) mutations
- MC2R (ACTH receptor) mutations

**Biomarker development:**
- Androstenedione as AI marker
- Cortisol metabolism signatures
- Hair cortisol for chronic assessment

## Mortality and Quality of Life

**Increased mortality:**
- 2-3x general population
- Adrenal crisis remains major risk
- Cardiovascular disease from overtreatment?

**Quality of life challenges:**
- Fatigue despite "adequate" replacement
- Anxiety about adrenal crisis
- Employment and insurance difficulties
- Steroid side effects

**Education priorities:**
- Sick-day rules training
- Emergency injection use
- Medical alert identification
- Family and caregiver education

## Future Directions

- Subcutaneous hydrocortisone pumps
- Gene therapy for monogenic forms
- Better biomarkers for dosing
- Improved crisis prevention tools
- Telemedicine for remote monitoring`,
      keyTerms: [
        { term: 'circadian rhythm', definition: 'Daily cortisol fluctuation pattern being mimicked by new formulations' },
        { term: '21-hydroxylase antibodies', definition: 'Autoantibodies confirming autoimmune adrenal destruction' },
        { term: 'androstenedione', definition: 'Adrenal androgen that may be a useful biomarker in AI management' },
      ],
      clinicalNotes: 'Modified-release hydrocortisone formulations may benefit patients with poor quality of life despite standard replacement, but cost and access remain barriers.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-ai-2016',
      type: 'article',
      title: 'Management of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology & Metabolism',
      authors: ['Bornstein SR', 'Allolio B', 'Arlt W', 'et al.'],
    },
    {
      id: 'essa-ai-2023',
      type: 'article',
      title: 'Management of Adrenal Insufficiency: A European Society of Endocrinology Guideline',
      source: 'European Journal of Endocrinology',
      authors: ['Hahner S', 'Allolio B', 'Arlt W', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-pheochromocytoma', targetType: 'condition', relationship: 'related', label: 'Pheochromocytoma' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'critical care'],
    keywords: ['adrenal insufficiency', 'Addison', 'cortisol', 'adrenal crisis', 'ACTH'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adrenalInsufficiency;
