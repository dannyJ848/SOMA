/**
 * Hypopituitarism
 *
 * Comprehensive content on pituitary hormone deficiencies.
 */

import { EducationalContent } from '../../../types';

export const HYPOPITUITARISM: EducationalContent = {
  id: 'endocrine-hypopituitarism',
  type: 'condition',
  name: 'Hypopituitarism',
  alternateNames: ['Pituitary insufficiency', 'Panhypopituitarism'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypopituitarism is when the pituitary gland does not make enough of one or more hormones, causing the body to work more slowly and affecting energy, growth, and other functions.',
      explanation: `The pituitary gland is a small gland at the base of your brain. It makes several important hormones that control other glands in your body.

**What happens in hypopituitarism:**
- The pituitary gland is damaged or not working well
- It cannot make enough hormones
- Other glands in the body slow down because they are not getting signals

**Common causes:**
- Pituitary tumors (most common)
- Surgery or radiation to the pituitary
- Head injury
- Bleeding in the pituitary

**Symptoms depend on which hormones are low:**
- Feeling very tired (low thyroid or cortisol)
- Feeling cold, gaining weight (low thyroid)
- Lost periods or low sex drive (low sex hormones)
- Not growing normally in children (low growth hormone)

**Treatment:**
Taking hormone replacement pills or injections to replace what the pituitary cannot make. With proper treatment, people can feel well and live normal lives.`,
      keyTerms: [
        { term: 'pituitary gland', definition: 'A small gland at the base of the brain that makes hormones controlling other glands' },
        { term: 'hormone', definition: 'A chemical messenger that tells parts of your body what to do' },
        { term: 'hormone replacement', definition: 'Taking medicines to replace hormones your body cannot make' },
      ],
      analogies: [
        'The pituitary is like a control center that sends signals to other glands. In hypopituitarism, the control center is not sending enough signals.',
        'Hormone replacement is like putting batteries in a device that cannot make its own power.',
      ],
      examples: [
        'After brain surgery near the pituitary, a person feels very tired and cold, and tests show low thyroid and cortisol levels.',
        'A child is not growing as expected, and doctors find their pituitary is not making enough growth hormone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypopituitarism involves deficiency of one or more anterior pituitary hormones due to pituitary or hypothalamic disease. Management requires identifying the cause and replacing deficient hormones in the correct order.',
      explanation: `**Anterior Pituitary Hormones:**
- ACTH → Adrenal cortisol
- TSH → Thyroid hormone
- LH/FSH → Sex hormones (testosterone, estrogen)
- GH → Growth and metabolism
- Prolactin → Breast milk production

**Posterior Pituitary:**
- ADH (vasopressin) → Water balance
- Oxytocin → Labor, lactation

**Causes of Hypopituitarism:**

*Pituitary Lesions:*
- Pituitary adenoma (most common)
- Surgery or radiation
- Pituitary apoplexy
- Infiltrative diseases

*Hypothalamic/Stalk Lesions:*
- Craniopharyngioma
- Trauma
- Infections (TB, meningitis)

*Other:*
- Sheehan syndrome (postpartum hemorrhage)
- Empty sella
- Autoimmune hypophysitis

**Clinical Features by Hormone:**

| Deficiency | Symptoms |
|------------|----------|
| ACTH (cortisol) | Fatigue, weakness, nausea, hypotension |
| TSH (thyroid) | Fatigue, cold intolerance, weight gain, constipation |
| LH/FSH | Amenorrhea, infertility, decreased libido, hot flashes |
| GH | Fatigue, decreased muscle mass, increased body fat |
| ADH | Diabetes insipidus (excessive thirst and urination) |

**Diagnosis:**
- Basal hormone levels (cortisol, TSH, free T4, LH, FSH, testosterone/estradiol, IGF-1, prolactin)
- Stimulation tests if needed (ACTH stim, insulin tolerance test)
- MRI pituitary

**Treatment Priorities:**

*Order of replacement matters:*
1. **Cortisol first** (before thyroid hormone!)
2. Thyroid hormone
3. Sex hormones
4. Growth hormone (if indicated)
5. ADH if deficient

*Why cortisol first:*
Starting thyroid hormone speeds up cortisol metabolism. If cortisol is low, this can cause adrenal crisis.`,
      keyTerms: [
        { term: 'Sheehan syndrome', definition: 'Hypopituitarism caused by severe bleeding during childbirth, damaging the pituitary' },
        { term: 'pituitary apoplexy', definition: 'Sudden bleeding or death of tissue in the pituitary gland' },
        { term: 'secondary deficiency', definition: 'Hormone deficiency caused by lack of pituitary stimulating hormone (vs. primary = gland failure)' },
        { term: 'diabetes insipidus', definition: 'Excessive urination and thirst due to lack of ADH' },
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; blood marker of growth hormone action' },
      ],
      analogies: [
        'Replacing cortisol before thyroid hormone is like putting gas in a car before pressing the accelerator - you need fuel before speeding up metabolism.',
        'Secondary hypothyroidism differs from primary in that TSH is low (not high) because the problem is in the pituitary signal, not the thyroid itself.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypopituitarism diagnosis requires understanding of hypothalamic-pituitary axes, appropriate stimulation testing, and recognition of the clinical urgency of ACTH deficiency. Replacement therapy aims to mimic physiological hormone patterns.',
      explanation: `**Pathophysiology:**

*Order of Hormone Loss (typical):*
1. GH (most sensitive)
2. Gonadotropins (LH/FSH)
3. TSH
4. ACTH (most resistant)

*Complete vs Partial:*
- Panhypopituitarism: All hormones deficient
- Partial: One or more hormone axes preserved

**Diagnostic Testing:**

*Basal Tests:*
| Hormone | Basal Measurement | Notes |
|---------|------------------|-------|
| ACTH/Cortisol | 8 AM cortisol | <3 μg/dL diagnostic; >18 μg/dL excludes deficiency |
| TSH/T4 | TSH, free T4 | Low/normal TSH with low T4 = secondary |
| LH/FSH/Sex steroids | LH, FSH, testosterone or estradiol | Low/normal gonadotropins with low steroids |
| GH/IGF-1 | IGF-1 | Low IGF-1 suggestive; stimulation test may be needed |
| Prolactin | Prolactin | Low = pituitary damage; High = stalk effect |

*Stimulation Tests:*

| Test | Assesses | Method | Normal Response |
|------|----------|--------|-----------------|
| Insulin tolerance test | ACTH, GH | Insulin-induced hypoglycemia | Cortisol >18, GH >5 ng/mL |
| ACTH stim test | Adrenal reserve | Cosyntropin 250 μg IV | Cortisol >18 at 30-60 min |
| Glucagon stim test | GH, ACTH | Glucagon 1 mg IM | GH >3 ng/mL |
| GnRH stim test | LH/FSH | GnRH 100 μg IV | LH/FSH rise |

*Limitations:*
- ACTH stim test measures adrenal reserve, not pituitary
- May be normal in acute pituitary injury (adrenals not yet atrophied)
- ITT is gold standard but contraindicated in seizures, CAD

**Specific Etiologies:**

*Lymphocytic Hypophysitis:*
- Autoimmune inflammation
- More common in women, peripartum
- May present like apoplexy
- Sometimes responds to steroids
- May be triggered by checkpoint inhibitor immunotherapy

*Pituitary Stalk Lesions:*
- Interrupt hypothalamic input
- Cause mild hyperprolactinemia (loss of dopamine inhibition)
- Cause diabetes insipidus (loss of ADH transport)
- Gonadotropin, GH, TSH, ACTH deficiency

*Traumatic Brain Injury:*
- Hypopituitarism in 25-50% of moderate-severe TBI
- May be transient or permanent
- Screen at 3-6 months post-injury

**Hormone Replacement:**

*Glucocorticoid:*
- Hydrocortisone 15-25 mg/day in divided doses
- Stress dosing essential (double/triple for illness)
- No mineralocorticoid needed (ACTH doesn't regulate aldosterone)

*Thyroid:*
- Levothyroxine 50-150 μg/day
- Target free T4 mid-upper normal
- TSH not useful for monitoring (pituitary doesn't respond)

*Sex Hormones:*
- Testosterone in men (gel, injection)
- Estrogen ± progesterone in women (unless contraindicated)
- Fertility: Gonadotropin injections (LH/FSH activity)

*Growth Hormone:*
- Daily subcutaneous injection
- Dose adjusted by IGF-1 level
- Benefits: Body composition, QoL, bone density
- Contraindications: Active malignancy

*Desmopressin (for DI):*
- Oral, nasal, or subcutaneous
- Titrate to control polyuria
- Monitor for hyponatremia`,
      keyTerms: [
        { term: 'insulin tolerance test', definition: 'Gold standard dynamic test inducing hypoglycemia to assess ACTH and GH reserve' },
        { term: 'lymphocytic hypophysitis', definition: 'Autoimmune pituitary inflammation causing mass effect and hypopituitarism' },
        { term: 'stalk effect', definition: 'Mild hyperprolactinemia from interrupted dopamine inhibition due to stalk lesion' },
        { term: 'empty sella', definition: 'Flattened pituitary gland on imaging, may be primary or secondary to prior pathology' },
        { term: 'panhypopituitarism', definition: 'Complete deficiency of all anterior pituitary hormones' },
      ],
      clinicalNotes: 'Never start thyroid hormone without ensuring adequate cortisol replacement. In acute illness or stress, cortisol requirements increase 2-3 fold. All patients with hypopituitarism should carry emergency identification and have access to injectable hydrocortisone.',
    },
    4: {
      level: 4,
      summary: 'Advanced hypopituitarism management addresses nuances of hormone replacement, emerging causes including immunotherapy-induced hypophysitis, and long-term outcomes including increased cardiovascular and mortality risk despite replacement therapy.',
      explanation: `**Emerging Etiologies:**

*Checkpoint Inhibitor-Induced Hypophysitis:*
- CTLA-4 inhibitors (ipilimumab): 5-17%
- PD-1/PD-L1 inhibitors: <1%
- Combination therapy: Higher incidence
- Presentation: Headache, fatigue, hypopituitarism
- MRI: Pituitary enlargement
- ACTH deficiency most common; often permanent
- TSH deficiency may recover
- Management: High-dose steroids (controversial), hormone replacement

*Anti-GnRH Therapy Effects:*
- Prolonged GnRH agonist use → hypogonadotropic hypogonadism
- Recovery variable after discontinuation
- Important in prostate cancer, endometriosis patients

*Genetic Causes:*
| Gene | Syndrome | Hormones Affected |
|------|----------|-------------------|
| PROP1 | Combined pituitary hormone deficiency | GH, TSH, LH/FSH, PRL, later ACTH |
| POU1F1 (PIT1) | CPHD | GH, TSH, PRL |
| HESX1 | Septo-optic dysplasia | Variable |
| LHX3/LHX4 | CPHD | Variable |
| TPIT | Isolated ACTH deficiency | ACTH only |

**Optimization of Hormone Replacement:**

*Glucocorticoid Fine-Tuning:*
- Lowest effective dose to avoid overtreatment
- Weight-based dosing may be more appropriate
- Consider modified-release hydrocortisone (Plenadren)
- Quality of life measures guide adjustments

*Thyroid Hormone Monitoring:*
- Free T4 target: Upper half of normal range
- T3 levels may be low with normal T4
- Some patients benefit from T3 addition (controversial)

*GH Replacement in Adults:*
- Indicated for proven GH deficiency
- Starting dose: 0.2-0.3 mg/day, lower in elderly
- Titrate by IGF-1 (target mid-normal for age)
- Benefits: QoL, body composition, lipids, bone
- Monitor glucose (GH has anti-insulin effects)

*Fertility Treatment:*
- Women: FSH (follitropin) + LH (menotropins) or hCG
- Men: hCG (for testosterone) + FSH (for spermatogenesis)
- Pulsatile GnRH in hypothalamic disease

**Long-term Outcomes:**

*Mortality Risk:*
- Increased all-cause mortality (SMR 1.5-2.0)
- Cardiovascular mortality particularly elevated
- Respiratory mortality increased
- Possibly related to:
  - Suboptimal replacement
  - GH deficiency effects
  - Underlying disease

*Cardiovascular Risk:*
- Increased atherosclerosis
- Metabolic syndrome more common
- GH replacement may improve lipids, endothelial function
- Careful BP monitoring (cortisol effects)

*Bone Health:*
- Osteoporosis common
- Multiple hormone effects on bone
- Optimize vitamin D, calcium
- Consider GH replacement for bone benefits

**Adrenal Crisis in Hypopituitarism:**

*Risk Factors:*
- Infection, trauma, surgery
- Missed doses
- GI illness (vomiting, malabsorption)
- Starting thyroid hormone without cortisol

*Prevention:*
- Patient education paramount
- Written sick day rules
- Emergency hydrocortisone kit
- Medical alert identification
- Family/caregiver education

*Treatment:*
- Hydrocortisone 100 mg IV immediately
- IV fluids (0.9% saline with dextrose)
- Identify and treat precipitant
- Continue 50-100 mg IV q6-8h until stable

**Special Situations:**

*Surgery:*
- Stress-dose steroids perioperatively
- Minor surgery: Hydrocortisone 25 mg
- Major surgery: 50-100 mg before, then q8h

*Pregnancy:*
- Hydrocortisone dose increase 20-40% in third trimester
- Thyroid dose increase ~30% by first trimester
- Monitor carefully
- Stress dosing for labor/delivery

*Pediatric Considerations:*
- Growth hormone essential for linear growth
- Delayed puberty requires sex steroid replacement
- Transition to adult care important`,
      keyTerms: [
        { term: 'checkpoint inhibitor hypophysitis', definition: 'Immune-related adverse event causing pituitary inflammation from cancer immunotherapy drugs' },
        { term: 'PROP1', definition: 'Transcription factor gene; mutations cause combined pituitary hormone deficiency' },
        { term: 'modified-release hydrocortisone', definition: 'Once-daily formulation providing more physiological cortisol profile' },
        { term: 'standardized mortality ratio', definition: 'Ratio of observed to expected deaths in a population; elevated in hypopituitarism' },
        { term: 'sick day rules', definition: 'Protocol for increasing glucocorticoid dose during illness to prevent adrenal crisis' },
      ],
      clinicalNotes: 'Despite hormone replacement, patients with hypopituitarism have increased mortality, particularly cardiovascular. This may relate to imperfect replacement strategies, untreated GH deficiency, or the underlying cause. Comprehensive cardiovascular risk management is essential. Checkpoint inhibitor hypophysitis is becoming increasingly common and often causes permanent ACTH deficiency.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hypopituitarism management integrates precision replacement strategies, molecular diagnostics for congenital forms, emerging regenerative approaches, and comprehensive morbidity reduction programs addressing persistent quality of life deficits.',
      explanation: `**Advanced Replacement Strategies:**

*Chronotherapy:*
- Cortisol: Modified-release formulations (Plenadren, Efmody)
- Goal: Mimic circadian rhythm
- Evidence: Improved metabolic parameters
- Availability and cost considerations

*Continuous Subcutaneous Hydrocortisone Infusion:*
- Pump-delivered cortisol
- Programmable circadian profile
- Research application; superior physiological profile
- Not practical for routine use

*GH Replacement - Precision Approach:*
- Consider severity of deficiency
- IGF-1 target individualized (age, sex-matched)
- Long-acting GH formulations (somapacitan, lonapegsomatropin)
- Weekly dosing improves compliance
- FDA-approved for adults

*Testosterone - Formulation Advances:*
- Oral testosterone undecanoate (Jatenzo)
- Nasal testosterone (Natesto)
- Subcutaneous pellets
- Individualized choice based on patient factors

**Molecular Diagnosis of Congenital Hypopituitarism:**

*Next-Generation Sequencing Approach:*
- Gene panels for pituitary development genes
- Whole exome/genome sequencing for unknown cases
- Yield: 10-25% of congenital hypopituitarism

*Genotype-Phenotype Correlations:*
| Gene | Pituitary Hormones | Associated Features |
|------|-------------------|---------------------|
| OTX2 | Variable | Anophthalmia, brain malformations |
| SOX2 | HH, variable | Anophthalmia, learning difficulties |
| SOX3 | GH, HH | Intellectual disability |
| GLI2 | Variable | Holoprosencephaly spectrum |
| HESX1 | Variable | Septo-optic dysplasia |
| PROP1 | GH, TSH, PRL, LH/FSH, later ACTH | Pituitary hyperplasia → involution |

*Clinical Implications:*
- Predict additional hormone deficiencies
- Family screening
- Genetic counseling

**Immune-Mediated Hypophysitis:**

*Classification:*
- Lymphocytic (most common in non-ICI)
- Granulomatous (IgG4-related, sarcoid)
- Xanthomatous
- ICI-related (distinct features)

*ICI-Hypophysitis Management:*
- High-dose steroids: May not alter course; mainly for mass effect
- Hormone replacement: Often permanent for ACTH
- Continue immunotherapy if oncologically indicated (usually)
- Monitor for other irAEs

*Biomarkers:*
- Pituitary antibodies (research use)
- MRI changes may precede symptoms
- Predicting who will develop hypophysitis not yet possible

**Regenerative Medicine:**

*Stem Cell Approaches:*
- Pluripotent stem cell-derived pituitary cells
- Organoid models for research
- Transplantation: Theoretical future application
- Challenges: Correct hormone regulation, integration

*Gene Therapy:*
- Potential for genetic forms
- Hypothalamic gene delivery
- Long-term expression challenges

**Outcomes Research:**

*Quality of Life Deficits:*
- Fatigue most common persistent symptom
- Cognitive complaints
- Depression, anxiety
- Sexual dysfunction
- Not fully explained by hormone levels

*Drivers of Poor QoL:*
- Subtle glucocorticoid over/under-replacement
- Fluctuating hormone levels
- GH deficiency (even if not replaced)
- Underlying disease effects
- Psychological adjustment to chronic illness

*Interventions:*
- Patient education programs
- Psychological support
- Optimization of replacement
- GH treatment consideration

**Cardiovascular Risk Mitigation:**

*Comprehensive Approach:*
- Aggressive lipid management
- Blood pressure optimization
- Glucose monitoring
- Weight management
- GH replacement may help

*Novel Risk Assessment:*
- Coronary calcium scoring
- Carotid intima-media thickness
- Circulating biomarkers

**Transition Care:**

*Pediatric to Adult:*
- Structured transition programs
- Reassess hormones in young adulthood
- GH may need discontinuation or continuation decision
- Fertility counseling

*Adult to Geriatric:*
- Review ongoing need for GH
- Dose adjustments with aging
- Bone health optimization
- Balance treatment burden

**Registries and Guidelines:**

*KIMS Database:*
- Largest GH replacement registry
- Long-term safety and efficacy data
- Informs practice guidelines

*National/International Guidelines:*
- Endocrine Society
- European Society of Endocrinology
- Regular updates incorporating new evidence

**Future Directions:**

*Artificial Pituitary:*
- Sensor-algorithm-pump systems
- Multiple hormone integration
- Conceptual stage

*Biomarkers:*
- Real-time cortisol monitoring (like CGM for diabetes)
- Would transform replacement strategies
- Technology development ongoing`,
      keyTerms: [
        { term: 'somapacitan', definition: 'Long-acting growth hormone analog for once-weekly injection; FDA-approved for adults' },
        { term: 'organoid', definition: 'Stem cell-derived three-dimensional tissue model; used for pituitary research' },
        { term: 'irAE', definition: 'Immune-related adverse event; side effects of checkpoint inhibitor immunotherapy' },
        { term: 'IgG4-related hypophysitis', definition: 'Inflammatory condition with IgG4-positive plasma cells infiltrating pituitary' },
        { term: 'KIMS database', definition: 'International registry tracking outcomes of growth hormone replacement in hypopituitary patients' },
      ],
      clinicalNotes: 'The management of hypopituitarism continues to evolve, with long-acting GH formulations, modified-release hydrocortisone, and precision approaches improving patient care. However, significant quality of life deficits persist despite biochemical optimization, highlighting the limitations of current replacement strategies in mimicking normal physiology. Molecular diagnosis of congenital forms allows for precise prognostication and family counseling. Checkpoint inhibitor hypophysitis has become a common cause in oncology settings and requires distinct management considerations.',
    },
  },

  media: [
    {
      id: 'hypopituitarism-axes-1',
      type: 'diagram',
      filename: 'pituitary-hormone-axes.svg',
      title: 'Pituitary Hormone Axes',
      description: 'Hypothalamic-pituitary-target organ axes affected in hypopituitarism',
    },
  ],

  citations: [
    {
      id: 'fleseriu-hypopituitarism-2016',
      type: 'article',
      title: 'Hormonal Replacement in Hypopituitarism in Adults: An Endocrine Society Clinical Practice Guideline',
      authors: ['Fleseriu M', 'Hashim IA', 'Guo R', 'et al.'],
      source: 'J Clin Endocrinol Metab 2016;101(11):3888-3921',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-pituitary-adenomas', targetType: 'condition', relationship: 'see-also', label: 'Pituitary Adenomas' },
    { targetId: 'endocrine-addisons-disease', targetType: 'condition', relationship: 'related', label: 'Secondary Adrenal Insufficiency' },
    { targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Central Hypothyroidism' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['pituitary', 'hormone deficiency', 'replacement therapy'],
    keywords: ['hypopituitarism', 'panhypopituitarism', 'pituitary insufficiency', 'hormone replacement'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
