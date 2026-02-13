/**
 * Hypopituitarism - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hypopituitarism: EducationalContent = {
  id: 'condition-hypopituitarism',
  type: 'condition',
  name: 'Hypopituitarism',
  alternateNames: ['Pituitary Insufficiency', 'Panhypopituitarism', 'Pituitary Failure'],
  hpoId: 'HP:0000871',

  levels: {
    1: {
      level: 1,
      summary: 'Hypopituitarism is when the pituitary gland does not make enough of one or more hormones, affecting growth, thyroid, adrenal, and reproductive functions.',
      explanation: `The pituitary gland is the "master gland" that controls many other glands in your body. When it does not work properly, it can affect multiple body systems.

**Hormones that may be affected:**
- Growth hormone (for growth and metabolism)
- Thyroid-stimulating hormone (controls thyroid)
- ACTH (controls adrenal glands)
- Sex hormones (LH and FSH for reproduction)
- Prolactin (for milk production)
- ADH (controls water balance)

**Common causes:**
- Pituitary tumors
- Surgery or radiation to the area
- Head injury
- Inflammation
- Genetic conditions
- Sheehan syndrome (after childbirth)

**Symptoms depend on which hormones are affected:**
- Fatigue and weakness
- Weight changes
- Feeling cold
- Low sex drive
- Infertility
- Growth problems in children

**Treatment:**
- Replace the missing hormones with medications
- Lifelong treatment usually needed`,
      keyTerms: [
        { term: 'hypopituitarism', definition: 'When the pituitary gland does not make enough hormones' },
        { term: 'panhypopituitarism', definition: 'When all pituitary hormones are deficient' },
        { term: 'Sheehan syndrome', definition: 'Pituitary damage from severe bleeding during childbirth' },
      ],
      analogies: [
        'The pituitary gland is like the CEO of a company. Hypopituitarism is like the CEO not giving instructions, so the departments (other glands) do not know what to do.',
      ],
      examples: [
        'A woman who had a difficult delivery with heavy bleeding and later cannot produce breast milk may have Sheehan syndrome.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypopituitarism is deficiency of one or more pituitary hormones causing secondary target gland failure. Diagnosed by low target hormone with low or inappropriately normal pituitary hormone. Requires hormone replacement therapy.',
      explanation: `## Hormone Axes Affected

| Axis | Pituitary Hormone | Target Gland | Target Hormone |
|------|-------------------|--------------|----------------|
| Thyroid | TSH | Thyroid | T4 |
| Adrenal | ACTH | Adrenal | Cortisol |
| Gonadal | LH, FSH | Gonads | Testosterone, Estrogen |
| Growth | GH | Liver, tissues | IGF-1 |
| Lactation | Prolactin | Breast | Milk |
| Water balance | ADH | Kidney | Concentrated urine |

## Order of Loss (Progressive Hypopituitarism)

1. GH (growth hormone)
2. LH/FSH (gonadotropins)
3. TSH (thyroid)
4. ACTH (adrenal)
5. Prolactin

**Note:** ADH deficiency (diabetes insipidus) can occur independently.

## Etiology

**Tumors:**
- Pituitary adenomas (most common)
- Craniopharyngioma
- Meningioma
- Metastases

**Treatment-related:**
- Surgery
- Radiation

**Infiltrative:**
- Hemochromatosis
- Sarcoidosis
- Histiocytosis
- Lymphocytic hypophysitis

**Vascular:**
- Sheehan syndrome
- Pituitary apoplexy
- Carotid aneurysm

**Traumatic:**
- Head injury
- Surgery

**Genetic:**
- PROP1 mutations
- HESX1 mutations
- LHX3/4 mutations

**Empty Sella:**
- CSF herniation into sella
- Can compress pituitary

## Diagnosis

**Hormone Testing:**
- Morning cortisol and ACTH
- Free T4 and TSH
- Testosterone/estradiol, LH, FSH
- IGF-1
- Prolactin

**Stimulation Tests:**
- Insulin tolerance test (gold standard for ACTH/GH)
- ACTH stimulation test
- GHRH-arginine test
- Glucagon stimulation test

**Imaging:**
- MRI pituitary/hypothalamus
- Evaluate for mass lesions`,
      keyTerms: [
        { term: 'empty sella', definition: 'When CSF fills the sella turcica, flattening the pituitary' },
        { term: 'insulin tolerance test', definition: 'Gold standard test for ACTH and GH deficiency' },
        { term: 'lymphocytic hypophysitis', definition: 'Autoimmune inflammation of the pituitary' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hypopituitarism management requires replacement of deficient hormones in a specific order: glucocorticoids first, then thyroid, then sex steroids, with GH replacement considered for appropriate candidates.',
      explanation: `## Replacement Therapy Principles

**Order of Replacement (Critical):**
1. Glucocorticoids (cortisol) FIRST
2. Thyroid hormone
3. Sex steroids
4. Growth hormone (if indicated)
5. ADH (if diabetes insipidus)

**Why this order:**
- Thyroid hormone increases cortisol clearance
- Giving thyroid before steroids can precipitate adrenal crisis

## Specific Replacements

**Glucocorticoids:**
- Hydrocortisone: 15-25 mg/day (2/3 AM, 1/3 PM)
- Prednisone: 3-5 mg daily (alternative)
- Must stress dose for illness, surgery

**Thyroid:**
- Levothyroxine: 1.6 mcg/kg/day
- Full replacement dose (no TSH to follow)
- Monitor free T4

**Sex Steroids:**

*Men:*
- Testosterone replacement
- Options: Injections, gels, patches, pellets

*Women:*
- Estrogen/progestin if premenopausal
- For bone health and symptoms
- Can use oral contraceptives

**Growth Hormone:**
- Indicated for symptomatic adults with confirmed deficiency
- Dosing: 0.2-0.4 mg/day subcutaneous
- Titrate to IGF-1 mid-normal
- Benefits: Body composition, QoL, bone density
- Contraindications: Active malignancy, diabetic retinopathy

## Special Considerations

**Adrenal Crisis Prevention:**
- Patient education on sick day rules
- Emergency hydrocortisone injection
- Medical alert identification

**Fertility:**
- Gonadotropin therapy for pregnancy induction
- Pulsatile GnRH
- Refer to reproductive endocrinology

**Monitoring:**
- Annual labs: Free T4, testosterone/estradiol
- IGF-1 if on GH
- Bone density
- Lipids, glucose

**Quality of Life:**
- Often impaired despite treatment
- GH may help selected patients
- Psychosocial support`,
      keyTerms: [
        { term: 'stress dose', definition: 'Increased glucocorticoid during illness or surgery' },
        { term: 'sick day rules', definition: 'Instructions for managing hormones during illness' },
        { term: 'growth hormone', definition: 'Replaced in deficient adults for body composition and quality of life' },
      ],
      clinicalNotes: 'Never start thyroid replacement before glucocorticoids in hypopituitarism - this can precipitate life-threatening adrenal crisis due to increased cortisol metabolism.',
    },
    4: {
      level: 4,
      summary: 'Advanced hypopituitarism management includes individualized GH dosing, fertility preservation and induction strategies, management of post-surgical and post-radiation hypopituitarism, and transition from pediatric to adult care.',
      explanation: `## Growth Hormone Replacement Optimization

**Dosing Strategy:**
- Start low: 0.15-0.3 mg/day
- Titrate based on IGF-1 and clinical response
- Target: IGF-1 in upper normal range
- Women may need higher doses (estrogen effect)
- Older adults: Lower targets

**Benefits:**
- Improved body composition (decreased fat, increased muscle)
- Better bone density
- Improved quality of life
- Better lipid profile
- Possible cardiovascular benefit

**Risks:**
- Fluid retention, edema
- Carpal tunnel syndrome
- Joint pain
- Glucose intolerance
- Cost

**Monitoring:**
- IGF-1 every 1-2 months during titration
- Fasting glucose, HbA1c
- Lipids
- Bone density (baseline, then periodic)

## Fertility Management

**Men:**
- If desire fertility: hCG or hMG (not testosterone)
- hCG 1,000-3,000 IU 2-3x weekly
- Add FSH or hMG if needed
- May take months for sperm production

**Women:**
- Pulsatile GnRH pump
- Gonadotropin injections
- Monitor with ultrasound
- Higher order multiple risk
- Close endocrine follow-up during pregnancy

**Postpartum:**
- May need increased hydrocortisone
- Breastfeeding usually possible

## Post-Treatment Hypopituitarism

**After Surgery:**
- Assess all axes
- May be transient or permanent
- MRI surveillance for recurrence

**After Radiation:**
- Progressive loss over years
- GH usually first, ACTH last
- Lifelong monitoring required
- Can develop decades later

## Transition from Pediatric to Adult

**Timing:**
- Usually around 18 years
- Gradual process

**Key Issues:**
- Change from pediatric to adult endocrinologist
- Different GH dosing
- Bone age vs chronological age
- Psychosocial support
- Independence in self-management
- Insurance/financial considerations

## Comorbidity Management

**Cardiovascular Risk:**
- Untreated hypopituitarism increases risk
- Proper replacement may reduce risk
- Monitor lipids, BP

**Bone Health:**
- GH, sex steroids important for bone
- Screen for osteoporosis
- Consider bisphosphonates if indicated

**Quality of Life:**
- Often impaired despite adequate replacement
- Multidisciplinary approach
- Address depression, fatigue
- Patient support groups`,
      keyTerms: [
        { term: 'hCG', definition: 'Human chorionic gonadotropin; stimulates testosterone and sperm production' },
        { term: 'GnRH pump', definition: 'Device delivering pulsatile GnRH to induce ovulation' },
        { term: 'transition care', definition: 'Moving from pediatric to adult healthcare services' },
      ],
      clinicalNotes: 'Hypopituitarism requires lifelong monitoring. Even with adequate replacement, quality of life may remain impaired, requiring holistic care approaches.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hypopituitarism research focuses on long-term outcomes, novel hormone formulations, regenerative medicine approaches, and quality of life optimization while managing the unique challenges of this multisystem endocrine disorder.',
      explanation: `## Long-term Outcomes

**Mortality:**
- Historically increased
- Improved with modern replacement
- Still higher than general population
- Cardiovascular disease main cause

**Quality of Life Research:**
- Persistent fatigue common
- Cognitive effects debated
- GH replacement improves but does not normalize
- Psychosocial factors important

**Bone Health:**
- Increased fracture risk
- GH and sex steroids protective
- Adequate replacement essential

## Novel Formulations

**Hydrocortisone:**
- Modified-release formulations
- Chronocort: Delayed-release for circadian rhythm
- Better QoL in some patients

**Testosterone:**
- Oral testosterone undecanoate
- Nasal gel
- Long-acting injections

**GH:**
- Long-acting GH (weekly dosing)
- Somapacitan
- TransCon hGH
- Improved adherence

**Combination Therapies:**
- Research into combined formulations
- Convenience vs customization

## Regenerative Medicine

**Stem Cell Therapy:**
- Early research
- Pituitary stem cells
- Hypothalamic regeneration

**Gene Therapy:**
- For genetic forms
- PROP1, HESX1 mutations
- Experimental stage

**Pituitary Transplantation:**
- Not clinically available
- Immunological barriers
- Research interest

## Personalized Medicine

**Pharmacogenomics:**
- GH response variability
- Thyroid hormone metabolism
- Steroid sensitivity

**Biomarkers:**
- Better assessment of adequacy
- Beyond current hormone levels
- Tissue-specific markers

**Individualized Dosing:**
- Age, sex, comorbidities
- Activity level
- Quality of life goals

## Patient-Reported Outcomes

**Assessment Tools:**
- QoL-specific questionnaires
- Hypopituitarism QoL
- Fatigue scales

**Patient-Centered Care:**
- Shared decision-making
- Addressing priorities
- Work/school accommodation

## Future Directions

- Artificial pancreas-like systems for hormone delivery
- Closed-loop hormone replacement
- Improved biomarkers
- Prevention strategies
- International registries
- Survivorship programs`,
      keyTerms: [
        { term: 'somapacitan', definition: 'Long-acting growth hormone analog' },
        { term: 'Chronocort', definition: 'Modified-release hydrocortisone for circadian delivery' },
        { term: 'patient-reported outcomes', definition: 'Direct reports from patients about their health condition' },
      ],
      clinicalNotes: 'Long-acting GH formulations offer improved convenience but require careful monitoring and may have different side effect profiles than daily GH.',
    },
  },

  media: [],
  citations: [
    {
      id: 'hypopituitarism-guidelines-2016',
      type: 'article',
      title: 'Hormonal Replacement in Hypopituitarism in Adults',
      source: 'Endocrine Society Guidelines',
      authors: ['Fleseriu M', 'Hashim IA', 'Karavitaki N', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-pituitary-gland', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
    { targetId: 'condition-diabetes-insipidus', targetType: 'condition', relationship: 'related', label: 'Diabetes Insipidus' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['hypopituitarism', 'pituitary', 'hormone replacement', 'Sheehan syndrome'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypopituitarism;
