/**
 * Irregular Periods - Comprehensive Educational Content
 *
 * Irregular periods are common and often have treatable causes.
 * Understanding what is normal variation versus concerning patterns
 * empowers women to seek appropriate care.
 */

import { EducationalContent } from '../../content/types';

export const IRREGULAR_PERIODS: EducationalContent = {
  id: 'irregular-periods',
  type: 'condition',
  name: 'Irregular Periods',
  alternateNames: ['Oligomenorrhea', 'Irregular menstruation', 'Irregular cycles'],

  levels: {
    1: {
      level: 1,
      summary: 'Irregular periods mean your cycle does not follow a predictable pattern - periods may come too often, too rarely, or at unpredictable times.',
      explanation: `It is completely normal for periods to not be exactly the same every month. But when there is a big change in your pattern or things seem really off, it is worth paying attention.

**What Counts as Irregular:**
- Periods that come less than 21 days apart
- Periods that are more than 35-40 days apart
- Skipping periods for months at a time
- Never knowing when your period will come
- Bleeding between periods

**Common Reasons for Irregular Periods:**

**Normal Life Changes:**
- Being a teenager (the first few years after starting periods)
- Approaching menopause (usually in your 40s-50s)
- After having a baby
- After stopping birth control

**Lifestyle Factors:**
- High stress
- Significant weight loss or gain
- Intense exercise
- Travel or schedule changes

**Health Conditions:**
- Thyroid problems
- Polycystic ovary syndrome (PCOS)
- Hormonal imbalances

**What to Do:**
1. Track your periods - write down when they start and stop
2. Note any other symptoms like pain, heavy bleeding, or spotting
3. Talk to a doctor if your pattern changes a lot or you are worried

Remember: Your body is not a clock. Some variation is normal. But if something feels off for you, it is worth checking out.`,
      keyTerms: [
        { term: 'irregular periods', definition: 'Menstrual cycles that do not follow a predictable pattern' },
        { term: 'cycle length', definition: 'The number of days from the start of one period to the start of the next' },
        { term: 'spotting', definition: 'Light bleeding between periods' },
      ],
      analogies: [
        'Your cycle is like your own internal calendar - some months might have more or fewer days than others.',
        'Think of your hormones like a symphony orchestra - sometimes the musicians need time to get in sync.',
      ],
      examples: [
        'A teenager getting periods every 3-6 weeks for the first couple years is normal.',
        'A 25-year-old who used to have regular 28-day cycles suddenly having 45-day cycles should check in with a doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Irregular periods (oligomenorrhea or polymenorrhea) result from disruptions in the hormonal signals that control the menstrual cycle.',
      explanation: `**Understanding Cycle Regularity:**

A normal menstrual cycle ranges from 21-35 days. Irregular periods fall into categories:
- **Oligomenorrhea:** Cycles >35 days apart (infrequent periods)
- **Polymenorrhea:** Cycles <21 days apart (too frequent periods)
- **Metrorrhagia:** Bleeding between periods
- **Amenorrhea:** No periods for 3+ months

**The Hormonal Connection:**

The menstrual cycle is controlled by hormones from three places:
1. **Hypothalamus** (in the brain) - sends signals to start the process
2. **Pituitary gland** - releases FSH and LH to tell ovaries what to do
3. **Ovaries** - produce estrogen and progesterone

If any part of this system is disrupted, cycles become irregular.

**Common Causes by Category:**

**Anovulation (No Ovulation):**
- Most common cause of irregular periods
- Without ovulation, there is no progesterone signal to trigger a period
- Causes: PCOS, stress, thyroid issues, weight changes

**Hormonal Imbalances:**
- Thyroid disorders (both high and low)
- High prolactin levels
- PCOS (high androgens)
- Perimenopause (fluctuating estrogen)

**Structural Causes:**
- Uterine polyps or fibroids
- Can cause bleeding between periods

**Lifestyle Factors:**
- Significant stress affects the hypothalamus
- Extreme exercise or low body weight
- Eating disorders
- Shift work or travel

**When to See a Doctor:**
- No period for 3 months (if not pregnant)
- Cycles consistently <21 or >35 days
- Significant change from your normal pattern
- Heavy bleeding or bleeding between periods
- Trying to get pregnant with irregular cycles`,
      keyTerms: [
        { term: 'oligomenorrhea', definition: 'Infrequent periods, cycles longer than 35 days', pronunciation: 'oh-lih-go-men-or-EE-ah' },
        { term: 'polymenorrhea', definition: 'Too frequent periods, cycles shorter than 21 days', pronunciation: 'pah-lee-men-or-EE-ah' },
        { term: 'anovulation', definition: 'A cycle where no egg is released from the ovary', pronunciation: 'an-ov-yoo-LAY-shun' },
        { term: 'metrorrhagia', definition: 'Bleeding between periods', pronunciation: 'meh-tro-RAY-jee-ah' },
      ],
    },
    3: {
      level: 3,
      summary: 'Irregular menstruation reflects disruption of the hypothalamic-pituitary-ovarian axis, with anovulation being the most common underlying mechanism.',
      explanation: `**Pathophysiology of Cycle Irregularity:**

**Anovulatory Cycles:**
The most common cause of irregular periods is anovulation. Without ovulation:
- No corpus luteum forms
- No progesterone production
- Endometrium exposed to unopposed estrogen
- Erratic, unpredictable bleeding when estrogen levels fluctuate

**Causes of Anovulation:**

**Hypothalamic Dysfunction:**
- Functional hypothalamic amenorrhea (stress, weight loss, exercise)
- Reduced GnRH pulsatility
- Low FSH/LH leads to inadequate follicular development

**Pituitary Causes:**
- Hyperprolactinemia (inhibits GnRH)
- Pituitary adenomas
- Sheehan syndrome (postpartum pituitary necrosis)

**Ovarian Causes:**
- Polycystic ovary syndrome (most common)
- Primary ovarian insufficiency
- Ovarian tumors (rare)

**PCOS Pathophysiology:**
- Hyperandrogenism disrupts follicular development
- Multiple small follicles arrest before ovulation
- Elevated LH:FSH ratio
- Insulin resistance contributes to hyperandrogenism

**Thyroid Effects:**
- Hypothyroidism: Elevated TRH stimulates prolactin
- Hyperthyroidism: Altered SHBG, estrogen metabolism

**Evaluation Approach:**

**History:**
- Cycle pattern, duration, flow
- Galactorrhea, hirsutism, acne (hormonal clues)
- Weight changes, stress, exercise
- Medications, contraceptives

**Laboratory:**
- Pregnancy test (always rule out first)
- TSH
- Prolactin
- FSH, LH (if amenorrhea)
- Total/free testosterone, DHEA-S (if hyperandrogenism suspected)
- Consider AMH if ovarian reserve concern

**Imaging:**
- Pelvic ultrasound for ovarian morphology, uterine pathology
- MRI if pituitary pathology suspected`,
      keyTerms: [
        { term: 'functional hypothalamic amenorrhea', definition: 'Absence of periods due to suppressed GnRH from stress, weight loss, or exercise' },
        { term: 'hyperprolactinemia', definition: 'Elevated prolactin levels that can inhibit ovulation', pronunciation: 'hy-per-pro-lac-tin-EE-mee-ah' },
        { term: 'hyperandrogenism', definition: 'Excess male hormones (androgens) in females', pronunciation: 'hy-per-AN-dro-jen-izm' },
        { term: 'LH:FSH ratio', definition: 'Ratio of luteinizing hormone to follicle-stimulating hormone, often elevated in PCOS' },
      ],
      clinicalNotes: 'In adolescents, allow 2-3 years post-menarche for cycles to regulate before diagnosing oligomenorrhea. PCOS is a diagnosis of exclusion - rule out thyroid, prolactin, and other causes first.',
    },
    4: {
      level: 4,
      summary: 'Irregular menstruation requires systematic evaluation of the HPO axis, with management targeting the underlying etiology while addressing immediate symptoms and long-term health consequences.',
      explanation: `**Detailed Pathophysiology:**

**Hypothalamic Causes:**
- GnRH pulsatility disruption
- Kisspeptin neuron suppression by:
  - Energy deficit (leptin signaling)
  - Cortisol (stress response)
  - Excessive exercise (beta-endorphins)
- Results in low/low-normal gonadotropins

**Pituitary Dysfunction:**
- Prolactinomas: Most common pituitary adenoma
- Mechanism: Prolactin inhibits GnRH pulsatility
- Stalk effect: Any sellar mass can elevate prolactin
- Drug-induced hyperprolactinemia: Antipsychotics, metoclopramide

**PCOS Detailed Mechanism:**
- Intrinsic ovarian dysfunction (theca cell hyperactivity)
- Insulin resistance → hyperinsulinemia → increased ovarian androgen production
- Decreased SHBG → more free androgens
- Granulosa cell dysfunction → follicular arrest
- Chronic anovulation → endometrial hyperplasia risk

**Primary Ovarian Insufficiency:**
- Follicular depletion or dysfunction before age 40
- Elevated FSH (>25 IU/L on two occasions)
- Hypoestrogenism
- Causes: Genetic (Turner, FMR1 premutation), autoimmune, iatrogenic

**Diagnostic Algorithm:**

**Step 1: Rule out pregnancy**

**Step 2: History and physical**
- Cycle history, galactorrhea, hirsutism
- BMI, signs of hyperandrogenism
- Visual field defects (pituitary)
- Thyroid exam

**Step 3: First-line labs**
- TSH
- Prolactin
- If amenorrhea: FSH, estradiol
- If hyperandrogenism: Total testosterone, DHEA-S

**Step 4: Additional testing based on findings**
- High prolactin → MRI pituitary
- High testosterone → Rule out tumor (>200 ng/dL concerning)
- High FSH → Karyotype if <30, consider adrenal antibodies
- Normal labs, irregular cycles → Likely anovulatory (PCOS if Rotterdam criteria met)

**Management Principles:**

**Lifestyle Modification:**
- Weight loss (5-10% improves ovulation in overweight patients)
- Stress reduction
- Moderate exercise

**Hormonal Regulation:**
- Combined oral contraceptives: Regulate cycles, oppose estrogen
- Cyclic progestin: Induce withdrawal bleeding
- Metformin: In PCOS with metabolic features

**Ovulation Induction (if fertility desired):**
- Letrozole (first-line for PCOS)
- Clomiphene citrate
- Gonadotropins

**Long-term Considerations:**
- Unopposed estrogen → endometrial hyperplasia/cancer risk
- Recommend withdrawal bleed at least every 3 months
- Bone health in hypoestrogenic states`,
      keyTerms: [
        { term: 'Rotterdam criteria', definition: 'Diagnostic criteria for PCOS: 2 of 3 - oligoanovulation, hyperandrogenism, polycystic ovaries' },
        { term: 'stalk effect', definition: 'Mild hyperprolactinemia from any mass compressing the pituitary stalk' },
        { term: 'FMR1 premutation', definition: 'Genetic cause of primary ovarian insufficiency (fragile X carrier)' },
        { term: 'SHBG', definition: 'Sex hormone binding globulin - decreased in insulin resistance, increases free androgens' },
      ],
      clinicalNotes: 'The 2003 Rotterdam criteria remain standard for PCOS diagnosis. Anti-Mullerian hormone (AMH) correlates with antral follicle count and is increasingly used. Endometrial biopsy recommended if prolonged unopposed estrogen exposure.',
    },
    5: {
      level: 5,
      summary: 'Clinical management of irregular menstruation integrates evidence-based evaluation algorithms, personalized treatment selection, and attention to long-term metabolic and reproductive health outcomes.',
      explanation: `**Evidence-Based Evaluation:**

**Initial Workup (ACOG/ASRM Recommendations):**
1. Pregnancy test (always)
2. TSH, prolactin
3. Consider: FSH, estradiol, AMH, androgens based on presentation

**PCOS Diagnosis (2023 International Guidelines):**
- Rotterdam criteria remain standard
- AMH can substitute for ultrasound in adults
- Adolescent diagnosis requires stricter criteria (hyperandrogenism + oligo/anovulation)
- Phenotype classification affects metabolic risk

**Hypothalamic Amenorrhea Evaluation:**
- Diagnosis of exclusion
- Consider bone density assessment (DXA)
- Evaluate for relative energy deficiency in sport (RED-S)

**When to Image:**
- Prolactin >100 ng/mL or visual symptoms → MRI pituitary
- Testosterone >150-200 ng/dL → Ovarian/adrenal imaging
- Markedly elevated DHEA-S → Adrenal CT

**Treatment Evidence:**

**PCOS Management:**
- Lifestyle: 5-10% weight loss restores ovulation in ~50%
- Oral contraceptives: First-line for cycle regulation and hyperandrogenism
- Metformin: Modest benefit for metabolic features, not first-line for irregular cycles alone
- Inositol: Emerging evidence, improves insulin sensitivity
- Letrozole: First-line for ovulation induction (NEJM 2014 PPCOS II trial)

**Hypothalamic Amenorrhea:**
- Address underlying cause (nutrition, stress, exercise)
- CBT shown effective in RCTs
- Hormone replacement for bone protection if prolonged
- Fertility: Pulsatile GnRH most physiologic; gonadotropins also effective

**Hyperprolactinemia:**
- Dopamine agonists (cabergoline preferred): Normalize prolactin, shrink adenomas
- Surgery for medication-resistant or vision-threatening cases

**Primary Ovarian Insufficiency:**
- Hormone replacement therapy until average age of menopause
- Annual thyroid, adrenal antibody screening
- Bone density monitoring
- Fertility options: Donor oocytes most successful

**Long-term Health Considerations:**

**Endometrial Protection:**
- Anovulatory cycles → unopposed estrogen
- Risk increases after 6+ months without bleeding
- Options: Cyclic progestin, CHC, progestin IUD
- Surveillance: Ultrasound for thickness, biopsy if indicated

**Metabolic Syndrome (PCOS):**
- Screen for glucose intolerance, lipid abnormalities
- Lifestyle intervention cornerstone
- Consider metformin for diabetes prevention

**Bone Health:**
- Hypoestrogenic states require intervention
- Hypothalamic amenorrhea: HRT vs. return of menses
- Monitor DXA, ensure adequate calcium/vitamin D

**Cardiovascular Risk:**
- PCOS associated with increased CVD risk factors
- Screen and manage BP, lipids, glucose
- Long-term data on hard outcomes still emerging

**Fertility Counseling:**
- PCOS: Generally good prognosis with treatment
- POI: Reduced but not zero spontaneous conception
- Hypothalamic amenorrhea: Excellent prognosis if cause addressed

**Current Guidelines Summary:**
- ACOG 2020: Evaluation and management of abnormal uterine bleeding
- 2023 International PCOS Guidelines
- ASRM: Hypothalamic amenorrhea
- Endocrine Society: Primary ovarian insufficiency`,
      keyTerms: [
        { term: 'PPCOS II trial', definition: 'RCT showing letrozole superior to clomiphene for ovulation induction in PCOS' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport - broader concept than female athlete triad' },
        { term: 'dopamine agonist', definition: 'Medications like cabergoline that treat hyperprolactinemia' },
        { term: 'pulsatile GnRH', definition: 'Physiologic method of ovulation induction mimicking normal hypothalamic secretion' },
      ],
      clinicalNotes: `Clinical pearls:
- Prolactin should be drawn fasting, stress-free (hook effect with very high levels)
- Always repeat elevated FSH 4-6 weeks apart before diagnosing POI
- PCOS is lifelong - metabolic surveillance continues even when cycles regulated
- In hypothalamic amenorrhea, resumption of menses is the treatment goal
- For endometrial protection in anovulation, progestin IUD is an excellent option
- Shared decision-making essential - discuss goals (cycle regulation vs. fertility vs. symptom control)`,
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-aub-2020',
      type: 'article',
      title: 'ACOG Practice Bulletin: Abnormal Uterine Bleeding',
      source: 'American College of Obstetricians and Gynecologists',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin',
      license: 'Proprietary - Referenced',
    },
    {
      id: 'pcos-guidelines-2023',
      type: 'article',
      title: 'International Evidence-based Guideline for the Assessment and Management of PCOS',
      source: 'ESHRE/ASRM',
      url: 'https://www.monash.edu/medicine/mchri/pcos',
      license: 'CC BY-NC-ND',
    },
  ],

  crossReferences: [
    { targetId: 'normal-menstrual-cycle', targetType: 'topic', relationship: 'parent', label: 'Normal Menstrual Cycle' },
    { targetId: 'pcos', targetType: 'condition', relationship: 'related', label: 'Polycystic Ovary Syndrome' },
    { targetId: 'amenorrhea', targetType: 'condition', relationship: 'related', label: 'Amenorrhea' },
    { targetId: 'thyroid-disorders', targetType: 'condition', relationship: 'related', label: 'Thyroid Disorders' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['womens-health', 'menstrual-health', 'hormones'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default IRREGULAR_PERIODS;
