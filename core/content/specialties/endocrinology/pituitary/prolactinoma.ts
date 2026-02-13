/**
 * Prolactinoma
 *
 * Comprehensive content on prolactin-secreting pituitary adenomas.
 */

import { EducationalContent } from '../../../types';

export const PROLACTINOMA: EducationalContent = {
  id: 'endocrine-prolactinoma',
  type: 'condition',
  name: 'Prolactinoma',
  alternateNames: ['Lactotroph adenoma', 'Prolactin-secreting adenoma'],

  levels: {
    1: {
      level: 1,
      summary: 'A prolactinoma is a non-cancerous growth in the pituitary gland that makes too much of the hormone prolactin, causing breast milk production and fertility problems.',
      explanation: `Prolactin is a hormone normally made during pregnancy and breastfeeding to produce breast milk. A prolactinoma is a small tumor that makes too much prolactin even when you are not pregnant or breastfeeding.

**What happens with too much prolactin:**

*In women:*
- Periods may stop or become irregular
- Breast milk production (without pregnancy)
- Difficulty getting pregnant
- Low sex drive

*In men:*
- Low sex drive
- Erectile dysfunction
- Breast enlargement
- Rarely, breast milk production

**Other symptoms (if tumor is large):**
- Headaches
- Vision problems

**Good news:**
- Prolactinomas are almost never cancer
- Pills can usually shrink the tumor and fix the symptoms
- Surgery is rarely needed

**Treatment:**
Most people take a medication (cabergoline or bromocriptine) that shrinks the tumor and lowers prolactin levels. With treatment, fertility usually returns to normal.`,
      keyTerms: [
        { term: 'prolactin', definition: 'A hormone that causes breast milk production' },
        { term: 'prolactinoma', definition: 'A non-cancerous tumor that makes too much prolactin' },
        { term: 'pituitary gland', definition: 'A small gland at the base of the brain that makes many important hormones' },
      ],
      analogies: [
        'Prolactin normally signals the body to make milk for a baby. A prolactinoma is like a broken switch that keeps the signal on even when there is no baby.',
        'The medication shrinks the tumor like deflating a balloon.',
      ],
      examples: [
        'A woman who stopped having periods and is leaking breast milk is found to have a prolactinoma.',
        'A man with low energy and decreased sex drive is diagnosed with a prolactinoma after blood tests show very high prolactin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prolactinomas are the most common hormone-secreting pituitary tumors. They cause hyperprolactinemia leading to hypogonadism and galactorrhea. Dopamine agonists are first-line treatment, with high success rates.',
      explanation: `**Epidemiology:**
- Most common functioning pituitary adenoma (~40%)
- More common in women (diagnosed earlier due to symptoms)
- Men often present with larger tumors

**Classification:**
- Microprolactinoma: <10 mm
- Macroprolactinoma: ≥10 mm
- Giant prolactinoma: >40 mm

**Pathophysiology:**
- Dopamine normally inhibits prolactin release
- Prolactinoma cells escape dopamine inhibition
- Still respond to exogenous dopamine agonists

**Effects of Hyperprolactinemia:**

*Reproductive (from suppressed GnRH):*
- Women: Oligomenorrhea, amenorrhea, anovulation, infertility
- Men: Decreased libido, erectile dysfunction, infertility
- Both: Decreased bone density over time

*Galactorrhea:*
- Breast milk production in women (and rarely men)
- More common in women

*Mass Effects (macroadenomas):*
- Headache
- Visual field defects (bitemporal hemianopia)
- Hypopituitarism (compression of normal pituitary)

**Differential Diagnosis of Hyperprolactinemia:**

| Cause | Prolactin Level |
|-------|-----------------|
| Prolactinoma | Usually >200 ng/mL for macroadenoma |
| Stalk effect (any sellar mass) | Usually <100-150 ng/mL |
| Medications (antipsychotics) | Variable, often 50-100 ng/mL |
| Pregnancy | Elevated, varies |
| Hypothyroidism | Mild elevation |

**Diagnosis:**
1. Serum prolactin (fasting, no breast stimulation)
2. MRI pituitary
3. Correlate prolactin level with tumor size

**Treatment:**

*Dopamine Agonists (first-line):*
- Cabergoline: More effective, better tolerated
- Bromocriptine: Cheaper, more experience in pregnancy

*Goals:*
- Normalize prolactin
- Shrink tumor
- Restore gonadal function and fertility
- Relieve mass effects

*Surgery:*
- Resistance to dopamine agonists
- Intolerance to medications
- Pituitary apoplexy
- CSF leak

*Response Rates:*
- Microprolactinoma: 80-90% normalization
- Macroprolactinoma: 70-80% normalization
- Tumor shrinkage: Often >50% reduction`,
      keyTerms: [
        { term: 'dopamine agonist', definition: 'Medication that mimics dopamine, shrinking prolactinomas and lowering prolactin' },
        { term: 'cabergoline', definition: 'First-line dopamine agonist for prolactinoma; taken weekly' },
        { term: 'stalk effect', definition: 'Mild prolactin elevation from compression of pituitary stalk by any mass, blocking dopamine delivery' },
        { term: 'galactorrhea', definition: 'Breast milk production not associated with pregnancy or breastfeeding' },
        { term: 'macroprolactinoma', definition: 'Prolactin-secreting pituitary tumor 10 mm or larger' },
      ],
      analogies: [
        'The stalk effect is like a roadblock preventing dopamine (the prolactin-suppressor) from reaching the pituitary.',
        'Dopamine agonists work because they take the place of the dopamine that would normally keep prolactin in check.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prolactinoma management centers on dopamine agonist therapy, with attention to macroprolactin interference, "hook effect" in giant tumors, and special considerations for pregnancy and resistant tumors.',
      explanation: `**Diagnostic Considerations:**

*Macroprolactin:*
- Prolactin bound to IgG (biologically inactive)
- Can cause falsely elevated total prolactin
- Consider if prolactin elevated but asymptomatic
- Request macroprolactin or PEG-precipitation test

*Hook Effect:*
- Extremely high prolactin saturates assay antibodies
- Causes falsely LOW reading
- Suspect in giant adenoma with "only" mildly elevated prolactin
- Request serial dilutions

*Prolactin-Size Correlation:*
- General rule: Prolactin level correlates with tumor size
- <200 ng/mL with macroadenoma → likely stalk effect
- >200 ng/mL with microadenoma → unlikely, recheck

**Dopamine Agonist Details:**

| Agent | Dose | Frequency | Notes |
|-------|------|-----------|-------|
| Cabergoline | 0.25-2 mg/week | 1-2× weekly | Preferred, long half-life |
| Bromocriptine | 2.5-15 mg/day | 2-3× daily | More side effects, cheaper |
| Quinagolide | 75-600 μg/day | Once daily | Not available in US |

*Side Effects:*
- Nausea, dizziness, orthostatic hypotension
- Nasal congestion
- Impulse control disorders (rare)
- Valvular heart disease (high doses, Parkinson's context)

*Monitoring:*
- Prolactin at 1 month, then every 3-6 months
- MRI at 1 year (macroadenoma), then annually until stable

**Dopamine Agonist Resistance:**

*Definition:*
- Failure to normalize prolactin on maximum tolerated dose
- Failure to reduce tumor by 50%

*Frequency:*
- ~10-15% of patients

*Management:*
- Increase dose to maximum tolerated
- Switch to alternative dopamine agonist
- Consider surgery
- Radiation for aggressive tumors

**Withdrawal of Therapy:**

*Consider after 2+ years of treatment if:*
- Prolactin normalized
- Significant tumor shrinkage or disappearance
- No macroadenoma remnant threatening chiasm

*Outcomes:*
- Microprolactinoma: 30-40% recurrence
- Macroprolactinoma: Higher recurrence
- Monitor closely after withdrawal

**Pregnancy:**

*Preconception:*
- Prolactin normalization restores fertility
- Microprolactinoma: Can try to conceive on or off medication
- Macroprolactinoma: Maximize shrinkage first

*During Pregnancy:*
- Stop dopamine agonist when pregnancy confirmed (most)
- Bromocriptine: Most safety data
- Cabergoline: Extensive data, appears safe
- Monitor for symptoms (headache, vision changes)
- MRI without contrast if symptoms

*Tumor Expansion Risk:*
- Microprolactinoma: <2%
- Macroprolactinoma (previously untreated): 15-35%
- Macroadenoma (treated and shrunk): <5%

*Breastfeeding:*
- Generally safe
- Tumor unlikely to grow significantly

**Surgery:**

*Indications:*
- Medication intolerance
- Resistance
- Patient preference
- Pituitary apoplexy
- CSF leak from medical shrinkage

*Outcomes:*
- Microprolactinoma: 80-90% cure
- Macroprolactinoma: 30-50% cure
- Risk of hypopituitarism increases with tumor size`,
      keyTerms: [
        { term: 'hook effect', definition: 'Assay artifact causing falsely low prolactin readings in giant prolactinomas; corrected by serial dilution' },
        { term: 'macroprolactin', definition: 'Biologically inactive prolactin-IgG complex; causes falsely elevated total prolactin' },
        { term: 'dopamine agonist resistance', definition: 'Failure to achieve prolactin normalization or adequate tumor shrinkage despite adequate dosing' },
        { term: 'impulse control disorder', definition: 'Rare side effect of dopamine agonists including gambling, hypersexuality, compulsive shopping' },
      ],
      clinicalNotes: 'The hook effect is critical to recognize in giant prolactinomas. A large tumor with "only" moderately elevated prolactin is a red flag - always request serial dilutions. This prevents misdiagnosing a prolactinoma as a non-functioning adenoma and proceeding to unnecessary surgery.',
    },
    4: {
      level: 4,
      summary: 'Advanced prolactinoma management addresses aggressive and malignant variants, optimizes medical therapy, weighs risks of high-dose dopamine agonists, and considers novel treatment approaches for refractory disease.',
      explanation: `**Aggressive Prolactinomas:**

*Features:*
- Rapidly growing
- Invasive (bone, cavernous sinus)
- Resistant to dopamine agonists
- Require higher doses for control
- May recur after surgery

*Risk Factors:*
- Male sex (men present later with larger tumors)
- Young age at diagnosis
- Sparsely granulated histology
- High Ki-67 index (>3%)

*Management:*
- Maximize dopamine agonist dose
- Consider surgery for debulking
- Radiotherapy (conventional or stereotactic)
- Temozolomide for truly aggressive/malignant

**Pituitary Carcinoma:**

*Prolactin-secreting carcinoma:*
- Very rare (<0.2%)
- Defined by metastases (CNS, systemic)
- Often evolves from aggressive adenoma
- Prolactin levels often extremely high

*Treatment:*
- Dopamine agonists (may still respond)
- Temozolomide
- Surgery/radiation for local control
- Poor prognosis overall

**Cardiac Valvulopathy Concerns:**

*Background:*
- Ergot-derived dopamine agonists (cabergoline, bromocriptine) linked to valvulopathy
- Initially identified in Parkinson's (high doses)

*Evidence in Prolactinoma:*
- Lower doses used than Parkinson's
- Meta-analyses: Possible mild increase in regurgitation
- Clinical significance unclear at prolactinoma doses
- No clear link to clinical heart disease

*Recommendations:*
- Baseline echocardiogram if murmur or symptoms
- Surveillance echo if cumulative dose >3mg/week (cabergoline)
- Use lowest effective dose
- Monitor for cardiac symptoms

**Surgical Considerations:**

*Transsphenoidal Approach:*
- Endoscopic increasingly standard
- Giant tumors may require staged approach

*Outcomes Predictors:*
- Tumor size
- Invasion
- Preoperative prolactin level
- Surgeon experience

*Complications:*
- CSF leak (3-5%)
- Diabetes insipidus (transient common, permanent 1-2%)
- Hypopituitarism (increases with tumor size)

**Radiation Therapy:**

*Indications:*
- Residual tumor after surgery
- Refractory to medical therapy
- Aggressive tumors

*Modalities:*
- Stereotactic radiosurgery (Gamma Knife): Preferred if suitable
- Fractionated radiotherapy: Larger tumors, near chiasm

*Outcomes:*
- Tumor control: 80-90%
- Prolactin normalization: 30-50%
- Hypopituitarism risk: 20-50% at 10 years

**Special Populations:**

*Children and Adolescents:*
- Prolactinomas can occur
- Consider genetic syndromes (MEN1, AIP)
- Dopamine agonists effective and safe
- Monitor growth and puberty

*Men:*
- Often larger tumors at diagnosis
- Higher rates of invasion
- More likely to be aggressive
- Lower cure rates with surgery
- Consider earlier aggressive therapy

*Elderly:*
- Caution with dopamine agonist side effects
- May not need treatment for microprolactinoma

**Genetics:**

*MEN1:*
- Prolactinoma in 10-30%
- Often multiple adenomas
- Screen for MEN1 in young patients, family history, multiple endocrine tumors

*Familial Isolated Pituitary Adenoma (FIPA):*
- AIP mutations
- May be more aggressive

**Quality of Life:**

*Issues:*
- Sexual dysfunction (despite prolactin normalization)
- Psychological effects
- Medication side effects
- Fertility concerns

*Management:*
- Address residual symptoms
- Psychological support
- Fertility counseling`,
      keyTerms: [
        { term: 'temozolomide', definition: 'Alkylating chemotherapy agent used for aggressive pituitary adenomas and carcinomas' },
        { term: 'ergot-derived', definition: 'Chemical class of dopamine agonists including cabergoline and bromocriptine; theoretical valvulopathy risk' },
        { term: 'Ki-67 index', definition: 'Immunohistochemical marker of cell proliferation; higher values indicate more aggressive tumor behavior' },
        { term: 'sparsely granulated', definition: 'Histological subtype of lactotroph adenoma associated with more aggressive behavior' },
        { term: 'FIPA', definition: 'Familial isolated pituitary adenoma; hereditary pituitary tumor syndrome without MEN1' },
      ],
      clinicalNotes: 'Male patients with prolactinomas deserve special attention due to typically larger tumors, higher rates of invasion, and more aggressive behavior. Consider lower threshold for surgery or radiation. Genetic testing (MEN1, AIP) is warranted in young patients, those with family history, or aggressive tumors.',
    },
    5: {
      level: 5,
      summary: 'Contemporary prolactinoma management integrates molecular classification, precision approaches to resistant disease, emerging non-ergot therapies, and surveillance strategies balancing overtreatment against long-term risks.',
      explanation: `**Molecular Characterization:**

*Estrogen Receptor Expression:*
- ER-positive tumors more responsive to dopamine agonists
- Basis for estrogen regulation of lactotroph function
- Potential biomarker for treatment selection

*Gene Expression Profiling:*
- Distinguishes prolactinoma subtypes
- May predict aggressive behavior
- Research application; clinical utility emerging

*Methylation Status:*
- MGMT methylation relevant for temozolomide response
- Test before initiation in aggressive tumors

**Novel Therapeutics:**

*Non-Ergot Dopamine Agonists:*
- Avoid theoretical valvulopathy risk
- Quinagolide (available in Europe)
- New D2 receptor agonists in development

*Targeted Therapies:*
| Target | Agent | Status |
|--------|-------|--------|
| EGFR | Gefitinib | Preclinical |
| mTOR | Everolimus | Case reports |
| VEGF | Bevacizumab | Case reports |

*Temozolomide:*
- Standard for aggressive pituitary tumors
- 40-50% response rate
- MGMT expression may predict response
- Optimal duration unclear (typically 12+ cycles)

*Immune Checkpoint Inhibitors:*
- Pembrolizumab, ipilimumab
- Anecdotal responses in carcinoma
- Clinical trials needed

**Dopamine Agonist Withdrawal Strategies:**

*Patient Selection:*
- Microprolactinoma (best candidates)
- Prolonged normalization (2+ years)
- Significant tumor shrinkage
- No chiasm proximity

*Protocol:*
- Taper gradually (some) vs stop abruptly (others)
- Monitor prolactin at 1, 3, 6, 12 months
- Resume if recurrent symptoms or significant rise

*Predictors of Successful Withdrawal:*
- Smaller initial tumor
- Lower pre-treatment prolactin
- Longer duration of treatment
- Greater tumor shrinkage

*Long-term Data:*
- ~30-40% remain in remission (microprolactinoma)
- Some may have spontaneous involution of tumor
- Annual monitoring recommended indefinitely

**Surveillance Without Treatment:**

*Microprolactinoma:*
- Many may never require treatment
- Natural history: Often stable or shrink
- Consider observation if:
  - Mild symptoms
  - Preserved fertility not needed
  - Postmenopausal

*Monitoring Untreated:*
- Prolactin annually
- MRI if symptoms or rising prolactin

**Fertility Optimization:**

*Women:*
- Prolactin normalization → ovulation return (usually)
- Fertility often restored within months
- IVF generally not needed unless other factors

*Men:*
- Testosterone and spermatogenesis improve
- May take 6-12 months for fertility restoration
- hCG/FSH if testosterone doesn't recover adequately

**Bone Health:**

*Mechanisms of Bone Loss:*
- Hypogonadism from hyperprolactinemia
- Duration-dependent effect

*Management:*
- Normalize prolactin (and thus estrogen/testosterone)
- Bone density monitoring in prolonged untreated cases
- Standard osteoporosis management if indicated

**Surgical Advances:**

*Endoscopic Endonasal Surgery:*
- Superior visualization
- Extended approaches for larger tumors
- Faster recovery
- Comparable or better outcomes

*Intraoperative Prolactin:*
- May predict postoperative remission
- >50% drop during surgery favorable
- Not universally adopted

**Radiation Therapy Refinements:**

*Stereotactic Radiosurgery:*
- Gamma Knife, CyberKnife
- Precise targeting
- Single fraction for small, discrete targets
- Lower hypopituitarism rates than fractionated

*Fractionated Stereotactic Radiotherapy:*
- For larger tumors or near chiasm
- Reduces per-fraction dose to critical structures

**Registry Data and Long-term Outcomes:**

*Key Questions Being Answered:*
- Long-term safety of cabergoline at prolactinoma doses
- Optimal duration of therapy
- Predictors of successful withdrawal
- Mortality data in prolactinoma patients

*Current Understanding:*
- Prolactinoma generally excellent prognosis
- Life expectancy near normal with treatment
- QoL deficits may persist

**Future Directions:**

*Oral Non-Peptide Compounds:*
- Small molecule D2 agonists
- Improved pharmacokinetics
- Under development

*Personalized Medicine:*
- Biomarkers for treatment selection
- Genomic profiling
- Tailored follow-up strategies

*De-escalation Strategies:*
- Identifying patients who can safely stop treatment
- Reducing monitoring burden in low-risk cases`,
      keyTerms: [
        { term: 'de-escalation', definition: 'Strategy of reducing treatment intensity or surveillance in low-risk patients' },
        { term: 'MGMT methylation', definition: 'Epigenetic silencing of DNA repair enzyme; predicts temozolomide response' },
        { term: 'spontaneous involution', definition: 'Natural shrinkage or disappearance of prolactinoma without treatment' },
        { term: 'intraoperative prolactin', definition: 'Measurement of prolactin during surgery to predict biochemical remission' },
        { term: 'non-ergot dopamine agonist', definition: 'Dopamine agonist without ergot chemical structure; theoretical lower cardiac risk' },
      ],
      clinicalNotes: 'Prolactinoma management is evolving toward personalized approaches with potential for treatment withdrawal in selected patients. The excellent prognosis of most prolactinomas allows for conservative strategies, while aggressive variants require escalation with temozolomide and multimodal therapy. Long-term registry data continue to inform optimal practice, particularly regarding duration of therapy and surveillance intensity.',
    },
  },

  media: [
    {
      id: 'prolactinoma-treatment-algorithm-1',
      type: 'diagram',
      filename: 'prolactinoma-algorithm.svg',
      title: 'Prolactinoma Treatment Algorithm',
      description: 'Decision-making flowchart for prolactinoma management',
    },
  ],

  citations: [
    {
      id: 'melmed-prolactinoma-2020',
      type: 'article',
      title: 'Diagnosis and Treatment of Hyperprolactinemia: An Endocrine Society Clinical Practice Guideline',
      authors: ['Melmed S', 'Casanueva FF', 'Hoffman AR', 'et al.'],
      source: 'J Clin Endocrinol Metab 2011;96(2):273-288',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-pituitary-adenomas', targetType: 'condition', relationship: 'see-also', label: 'Pituitary Adenomas' },
    { targetId: 'endocrine-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' },
    { targetId: 'endocrine-infertility', targetType: 'condition', relationship: 'related', label: 'Infertility' },
  ],

  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['pituitary', 'prolactin', 'infertility'],
    keywords: ['prolactinoma', 'hyperprolactinemia', 'galactorrhea', 'cabergoline', 'dopamine agonist'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'obstetrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
