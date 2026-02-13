/**
 * Endocrine Hormone Testing - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const hormoneTesting: EducationalContent = {
  id: 'clinical-hormone-testing',
  type: 'concept',
  name: 'Endocrine Hormone Testing',
  alternateNames: ['Hormone Assays', 'Endocrine Testing', 'Hormone Measurement'],

  levels: {
    1: {
      level: 1,
      summary: 'Hormone testing uses blood, urine, or saliva samples to measure hormone levels and help diagnose endocrine problems.',
      explanation: `Doctors use hormone tests to check if your endocrine system is working properly. These tests measure the levels of hormones in your body.

**Common hormone tests:**
- Blood sugar and insulin
- Thyroid hormones
- Cortisol (stress hormone)
- Sex hormones
- Growth hormone

**How samples are collected:**
- Blood draw from arm
- 24-hour urine collection
- Saliva samples
- Sometimes stimulated tests

**Things that affect results:**
- Time of day (many hormones vary)
- Stress
- Medications
- Recent illness
- Menstrual cycle (for women)

**Why timing matters:**
- Cortisol is highest in morning
- Some tests need fasting
- Some need multiple samples

**What results mean:**
- High or low levels can indicate problems
- Results often need interpretation
- May need repeat testing
- Sometimes need more specialized tests`,
      keyTerms: [
        { term: 'hormone test', definition: 'A test measuring hormone levels in the body' },
        { term: 'assay', definition: 'A laboratory test to measure a substance' },
        { term: 'reference range', definition: 'Normal values for a test' },
      ],
      analogies: [
        'Hormone testing is like checking the gauges on a car dashboard - it tells you if various systems are running too high or too low.',
      ],
      examples: [
        'A morning blood cortisol level helps doctors check if the adrenal glands are working properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endocrine testing requires understanding of hormone rhythms, proper specimen collection, assay limitations, and dynamic testing for evaluation of hormone reserve and feedback mechanisms.',
      explanation: `## Basic Principles

**Circadian Rhythms:**
| Hormone | Peak | Nadir |
|---------|------|-------|
| Cortisol | 6-8 AM | Midnight |
| Growth hormone | Night | Day |
| Testosterone | Morning | Evening |
| TSH | Night | Midday |

**Specimen Types:**
- Serum: Most common
- Plasma: For some assays
- 24-hour urine: Integrates secretion
- Saliva: Free hormone measurement
- Dried blood spots: Convenience

**Test Categories:**
1. Baseline hormone levels
2. Free vs total hormone
3. Stimulation tests
4. Suppression tests
5. Urinary metabolites

## Common Test Panels

**Thyroid:**
- TSH (first-line)
- Free T4
- Free T3 (if indicated)
- Thyroid antibodies (TPO, TG, TRAb)

**Adrenal:**
- 8 AM cortisol
- ACTH
- DHEAS
- Aldosterone/renin ratio
- 24-hour urine cortisol

**Pituitary:**
- Prolactin
- IGF-1
- LH, FSH
- Alpha subunit

**Glucose/Metabolic:**
- Fasting glucose, insulin
- HbA1c
- OGTT (2-hour glucose)

**Bone:**
- Calcium, phosphate, PTH
- 25-OH vitamin D
- Alkaline phosphatase

## Assay Considerations

**Free vs Total Hormone:**
- Free: Biologically active
- Total: Bound + free
- SHBG affects total levels

**Interferences:**
- Heterophile antibodies
- Biotin interference (common)
- Medication effects
- Cross-reactivity

**Reference Ranges:**
- Age-specific
- Sex-specific
- Assay-specific
- Timing-specific`,
      keyTerms: [
        { term: 'dynamic testing', definition: 'Tests using stimulation or suppression' },
        { term: 'free hormone', definition: 'Hormone not bound to carrier proteins' },
        { term: 'heterophile antibodies', definition: 'Antibodies that can interfere with immunoassays' },
      ],
    },
    3: {
      level: 3,
      summary: 'Dynamic endocrine testing evaluates hormone reserve and feedback with stimulation tests (ACTH, ITT, glucagon) and suppression tests (dexamethasone, oral glucose). Understanding pre-analytical variables and assay limitations is essential.',
      explanation: `## Stimulation Tests

**ACTH Stimulation Test:**
- Baseline cortisol
- 250 mcg cosyntropin IV/IM
- Cortisol at 30 and 60 minutes
- Normal: Peak >18-20 mcg/dL
- Primary AI: No response
- Secondary: Delayed response

**Insulin Tolerance Test (ITT):**
- Gold standard for GH and ACTH
- Regular insulin 0.05-0.15 U/kg
- Glucose <40 mg/dL required
- Measure GH, cortisol at 0, 30, 60, 90 min
- GH >3 ng/mL normal
- Cortisol >18 mcg/dL normal
- Contraindications: Seizure, heart disease

**Glucagon Stimulation Test:**
- Alternative to ITT
- Glucagon 1 mg IM
- Measure GH, cortisol
- Useful when ITT contraindicated

**GHRH-Arginine Test:**
- GHRH 1 mcg/kg + arginine 30g
- Measure GH every 30 min
- GH >4-11 ng/mL (lab-dependent)

**Metyrapone Test:**
- Blocks cortisol synthesis
- Increases ACTH
- Measure 11-deoxycortisol
- Complex, rarely used

## Suppression Tests

**Overnight Dexamethasone:**
- 1 mg at 11 PM
- Cortisol at 8 AM
- <1.8 mcg/dL excludes Cushing
- False positives common

**Low-Dose DST (48-hour):**
- 0.5 mg q6h x 48 hours
- Cortisol at end
- More sensitive

**High-Dose DST:**
- 2 mg q6h x 48 hours
- Distinguishes pituitary vs ectopic ACTH
- Pituitary suppresses >50%

**Oral Glucose Tolerance Test:**
- 75g glucose
- GH <1 ng/mL excludes acromegaly
- Used to diagnose acromegaly

## Special Considerations

**Biotin Interference:**
- High-dose biotin supplements
- Can cause falsely high or low results
- Stop biotin 48-72 hours before testing
- Affects many immunoassays

**Sample Handling:**
- ACTH: Ice, immediate processing
- Renin: Room temp, special tube
- Catecholamines: Acidified urine
- PTH: Room temp

**Medication Effects:**
- Steroids affect cortisol
- Estrogens increase SHBG
- Dopamine agonists lower prolactin
- Stop interfering meds when possible`,
      keyTerms: [
        { term: 'cosyntropin', definition: 'Synthetic ACTH used in stimulation testing' },
        { term: 'pre-analytical variables', definition: 'Factors affecting test before analysis' },
        { term: 'biotin interference', definition: 'High-dose biotin causing assay errors' },
      ],
      clinicalNotes: 'Biotin interference is increasingly common due to high-dose biotin supplements. Always ask about biotin use before endocrine testing and hold for 48-72 hours if possible.',
    },
    4: {
      level: 4,
      summary: 'Advanced endocrine testing includes specialized assays for free hormones, mass spectrometry methods, diagnostic protocols for complex cases, and emerging biomarkers while managing test interpretation challenges.',
      explanation: `## Advanced Assay Methods

**Mass Spectrometry (LC-MS/MS):**
- Gold standard for many hormones
- High specificity
- Measures multiple analytes
- Free testosterone, vitamin D, cortisol

**Equilibrium Dialysis:**
- Reference method for free hormones
- Labor-intensive
- Research use

**Salivary Testing:**
- Free cortisol (late night)
- Free testosterone
- Convenience, but variable quality

## Specialized Testing

**Inferior Petrosal Sinus Sampling (IPSS):**
- For ACTH-dependent Cushing
- Differentiates pituitary vs ectopic
- Bilateral catheters
- CRH stimulation
- IPSS:Peripheral ACTH ratio >2:1 suggests pituitary

**Selective Venous Sampling:**
- Parathyroid: PTH gradient
- Adrenal: Cortisol/catecholamine gradient
- Localizes source of excess hormone

## Interpretation Challenges

**Subclinical Disease:**
- Abnormal labs without symptoms
- Subclinical hypothyroidism (elevated TSH, normal T4)
- Subclinical Cushing
- Management decisions

**Non-Thyroidal Illness:**
- Sick euthyroid syndrome
- Abnormal thyroid tests during illness
- Do not treat
- Reassess after recovery

**Pregnancy:**
- Altered reference ranges
- TSH lower in first trimester
- SHBG elevated
- Different thresholds

**Pediatric:**
- Age-specific ranges
- Pubertal changes
- Specialized interpretation

## Emerging Tests

**Bone Turnover Markers:**
- P1NP (formation)
- CTX (resorption)
- Monitor osteoporosis treatment

**Steroid Profiling:**
- LC-MS/MS panels
- CAH diagnosis
- Adrenal insufficiency workup

**Circulating Tumor DNA:**
- Thyroid cancer monitoring
- Research stage

## Quality Assurance

**Internal Controls:**
- Assay drift monitoring
- Calibration verification

**External Quality:**
- Proficiency testing
- Inter-laboratory comparison

**Clinical Correlation:**
- Results must fit clinical picture
- Repeat if unexpected
- Consider pre-analytical issues`,
      keyTerms: [
        { term: 'mass spectrometry', definition: 'Analytical technique with high specificity' },
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling for Cushing workup' },
        { term: 'subclinical', definition: 'Abnormal labs without clinical symptoms' },
      ],
      clinicalNotes: 'IPSS is the gold standard for distinguishing Cushing disease from ectopic ACTH syndrome, with accuracy >95% in experienced centers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endocrine testing integrates automated platforms, point-of-care testing, personalized reference ranges, and artificial intelligence while addressing issues of cost-effectiveness and appropriate test utilization.',
      explanation: `## Technology Advances

**Automated Platforms:**
- High-throughput immunoassays
- Improved precision
- Faster turnaround
- Integrated systems

**Point-of-Care Testing:**
- HbA1c
- Blood glucose
- Limited endocrine applications
- Growing potential

**Liquid Chromatography:**
- Higher specificity
- Multiple analytes
- Reference method
- Increasing availability

## Personalized Testing

**Pharmacogenomics:**
- Steroid metabolism variants
- Thyroid hormone transport
- Individualized interpretation

**Circadian Profiling:**
- 24-hour hormone patterns
- Personalized timing
- Research applications

**Biomarker Panels:**
- Multiple analytes
- Machine learning
- Improved diagnosis

## Test Utilization

**Appropriate Ordering:**
- Avoid unnecessary tests
- Cascade testing strategies
- Evidence-based panels
- Cost considerations

**Overutilization Issues:**
- Screening TSH in asymptomatic
- Random cortisol without context
- Repeated testing
- Defensive medicine

**Underutilization:**
- Vitamin D
- Appropriate screening
- High-risk populations

## Artificial Intelligence

**Pattern Recognition:**
- Automated interpretation
- Diagnostic algorithms
- Reduce errors

**Predictive Analytics:**
- Risk stratification
- Treatment response
- Personalized monitoring

## Future Directions

**Wearable Sensors:**
- Continuous monitoring
- Cortisol sweat patches
- Glucose monitors
- Non-invasive hormones

**Microfluidics:**
- Lab-on-chip
- Rapid point-of-care
- Small sample volumes

**Integration:**
- Electronic health records
- Clinical decision support
- Automated interpretation

**Challenges:**
- Standardization
- Cost
- Validation
- Clinical utility`,
      keyTerms: [
        { term: 'point-of-care testing', definition: 'Testing at or near patient site' },
        { term: 'pharmacogenomics', definition: 'How genes affect drug and hormone metabolism' },
        { term: 'cascade testing', definition: 'Stepwise testing based on results' },
      ],
      clinicalNotes: 'The future of endocrine testing lies in integration of multiple data sources with AI-assisted interpretation for personalized diagnostic and monitoring strategies.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-testing-2018',
      type: 'article',
      title: 'Laboratory Testing in Endocrinology',
      source: 'Endocrine Reviews',
      authors: ['Klee GG', 'Heser DW'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-interpretation-thyroid', targetType: 'concept', relationship: 'related', label: 'Thyroid Function Tests' },
    { targetId: 'lab-interpretation-cortisol', targetType: 'concept', relationship: 'related', label: 'Cortisol Testing' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'laboratory medicine'],
    keywords: ['hormone testing', 'assay', 'dynamic testing', 'endocrine lab'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hormoneTesting;
