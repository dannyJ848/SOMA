/**
 * Perimenopause
 *
 * Comprehensive coverage of the menopausal transition including
 * physiology, symptoms, and management.
 */

import { EducationalContent } from '../../../types';

export const perimenopause: EducationalContent = {
  id: 'obgyn-menopause-perimenopause',
  type: 'process',
  name: 'Perimenopause',
  alternateNames: ['Menopausal Transition', 'Climacteric', 'Premenopause'],

  levels: {
    1: {
      level: 1,
      summary: 'Perimenopause is the transition time before menopause when hormones start changing and periods become irregular.',
      explanation: `Perimenopause is like the warm-up phase before periods stop completely.

**When does it start?**
- Usually in the mid-40s
- Can begin as early as late 30s
- Lasts about 4 years on average

**What happens:**
- Periods become irregular
- Sometimes heavier, sometimes lighter
- Hormone levels go up and down unpredictably
- You can still get pregnant!

**Common symptoms:**
- Irregular periods
- Hot flashes begin
- Sleep problems
- Mood swings
- Vaginal dryness
- Lower sex drive

**What to know:**
- This is normal!
- Symptoms vary widely between women
- Contraception still needed until 12 months without a period
- Help is available for bothersome symptoms`,
      keyTerms: [
        { term: 'perimenopause', definition: 'The years before menopause when hormones change and periods become irregular' },
        { term: 'irregular periods', definition: 'Periods that come more or less often than usual, or are heavier or lighter' },
        { term: 'hormone fluctuation', definition: 'When hormone levels go up and down unpredictably' },
      ],
      analogies: [
        'Perimenopause is like the sun setting - it takes time, and the light (hormones) fluctuates before darkness (menopause) arrives.',
      ],
      examples: [
        'A 46-year-old woman notices her periods, which were always regular, are now coming every 5-6 weeks with some hot flashes - this is typical perimenopause.',
      ],
    },
    2: {
      level: 2,
      summary: 'Perimenopause spans from the onset of menstrual cycle irregularity to 12 months after the final menstrual period, characterized by hormonal fluctuations and the emergence of menopausal symptoms.',
      explanation: `**Timeline:**
- Begins: Mid-40s (average age 47)
- Duration: Average 4 years (range 2-8 years)
- Ends: 12 months after last period

**Hormonal Changes:**

*Early Transition:*
- FSH starts to rise
- Cycles may shorten initially
- Estrogen can be normal or elevated
- More anovulatory cycles

*Late Transition:*
- FSH clearly elevated
- Cycles lengthen (≥60 days apart)
- Estrogen more consistently low
- Vasomotor symptoms increase

**Menstrual Changes:**
- Shorter cycles initially
- Then longer, irregular cycles
- Heavier or lighter bleeding
- Eventually periods stop

**Symptoms:**

*Vasomotor:*
- Hot flashes (can be severe)
- Night sweats
- Sleep disruption

*Menstrual:*
- Irregular bleeding
- Heavy periods common
- May need evaluation for AUB

*Mood:*
- Increased depression/anxiety risk
- Irritability
- Cognitive changes

*Physical:*
- Vaginal dryness begins
- Joint pain
- Breast tenderness

**Contraception:**
- Fertility declines but pregnancy possible
- Low-dose hormonal contraception
- IUD
- Barrier methods
- Continue until 12 months amenorrhea (if >50) or 24 months (if <50)`,
      keyTerms: [
        { term: 'early menopausal transition', definition: 'First phase with ≥7 day change in cycle length' },
        { term: 'late menopausal transition', definition: 'Later phase with ≥60 days between periods' },
        { term: 'anovulatory cycles', definition: 'Menstrual cycles without ovulation; more common in perimenopause' },
      ],
    },
    3: {
      level: 3,
      summary: 'Perimenopause is characterized by declining ovarian reserve with erratic folliculogenesis, resulting in variable estrogen levels, increasing FSH, and unpredictable symptom patterns.',
      explanation: `**STRAW+10 Staging:**

*Stage -2 (Early Transition):*
- Cycle length varies by ≥7 days from normal
- FSH variable but rising
- AMH low
- Symptoms may begin

*Stage -1 (Late Transition):*
- Intervals of amenorrhea ≥60 days
- FSH elevated (>25 IU/L)
- Estradiol variable
- Symptoms often peak

**Hormonal Dynamics:**

*Erratic Pattern:*
- FSH rises due to decreased inhibin B
- Estradiol can spike high or drop low
- Variable follicle recruitment
- Luteal insufficiency common

*Symptom Correlation:*
- Falling estrogen triggers VMS
- High estrogen can cause breast pain, heavy bleeding
- Fluctuations worse than stable low levels

**Abnormal Bleeding Evaluation:**

*When to Evaluate:*
- Bleeding lasting >7 days
- Soaking through protection hourly
- Cycles <21 days
- Intermenstrual bleeding
- Postcoital bleeding

*Workup:*
- Pregnancy test
- CBC for anemia
- TSH
- Pelvic ultrasound
- Endometrial biopsy (often indicated in this age group)

**Management Approaches:**

*Vasomotor Symptoms:*
- Lifestyle modifications
- Low-dose HRT (consider contraceptive benefit)
- Extended-cycle OCP
- SSRIs/SNRIs if HRT contraindicated

*Heavy Bleeding:*
- Cyclic progestins
- LNG-IUD (bleeding + contraception)
- Tranexamic acid
- Combined hormonal methods
- Consider structural causes

*Mood Symptoms:*
- Screen for depression
- SSRIs effective
- Hormone therapy may help
- Psychotherapy

**Contraception Options:**

*Suitable Methods:*
- LNG-IUD: Bleeding control + contraception
- Extended-cycle OCP: VMS treatment + contraception
- Progestin-only methods
- Copper IUD
- Barrier methods

*Considerations:*
- OCPs mask menopausal symptoms
- Can continue OCP until 50-55 if healthy non-smoker
- Difficult to determine when menopause occurred`,
      keyTerms: [
        { term: 'inhibin B', definition: 'Ovarian hormone that suppresses FSH; decline in perimenopause allows FSH to rise' },
        { term: 'luteal insufficiency', definition: 'Inadequate progesterone production after ovulation; common in perimenopause' },
        { term: 'extended-cycle OCP', definition: 'Birth control pills taken continuously with fewer or no placebo pills' },
      ],
      clinicalNotes: 'Perimenopausal bleeding changes often prompt evaluation for endometrial pathology. Heavy irregular bleeding is common but should not be dismissed as "just perimenopause" without appropriate workup.',
    },
    4: {
      level: 4,
      summary: 'Perimenopause management balances symptom treatment, fertility control, and exclusion of pathology, with attention to mental health vulnerability and cardiovascular risk modification.',
      explanation: `**Depression and Perimenopause:**

*Evidence:*
- 2-4x increased risk during transition
- "Window of vulnerability"
- Prior depression major risk factor
- Estrogen fluctuations implicated

*Assessment:*
- Screen at routine visits
- PHQ-9 or similar
- Differentiate VMS effects on mood vs. depression
- Consider anxiety as well

*Treatment:*
- SSRIs/SNRIs first-line
- Hormone therapy may help (particularly transdermal estradiol)
- Psychotherapy
- Combination approaches

**Sleep Disturbance:**

*Causes:*
- Night sweats
- Primary insomnia
- Sleep apnea (increasing prevalence)
- Mood disorders

*Management:*
- Treat underlying cause
- Sleep hygiene
- Cognitive behavioral therapy for insomnia
- Consider sleep study if apnea suspected
- Melatonin, low-dose trazodone

**Cardiovascular Health:**

*Transition Period Changes:*
- Lipid profile worsens (↑LDL, ↓HDL)
- Visceral fat increases
- Insulin resistance may worsen
- Blood pressure may rise

*Intervention:*
- Lifestyle optimization crucial
- Screen for metabolic syndrome
- Address modifiable risks
- Not time to start HT for CVD prevention

**Bone Health:**

*Accelerated Loss Begins:*
- Trabecular bone loss starts in late transition
- Can lose 10% in first 5 years of menopause
- Screening: FRAX, consider early DEXA if risk factors

**Transitioning from Contraception:**

*When to Stop:*
- Age 50-55 if healthy non-smoker on OCP
- FSH testing while on OCP not reliable
- Can stop and observe for 12 months
- Or switch to non-hormonal and observe

*Options:*
- Stop at age 50-55, observe
- Switch to HRT dose when appropriate
- IUD can remain for contraception and endometrial protection

**Fertility Considerations:**

*Declining Fertility:*
- Markedly decreased but not zero
- Unintended pregnancy occurs
- Egg quality poor
- Miscarriage rate high

*Assisted Reproduction:*
- Poor response to stimulation
- Donor eggs option for pregnancy
- Realistic counseling needed`,
      keyTerms: [
        { term: 'window of vulnerability', definition: 'Period during menopausal transition with increased risk for depression' },
        { term: 'metabolic syndrome', definition: 'Cluster of conditions (obesity, hypertension, dyslipidemia, insulin resistance) increasing CVD risk' },
        { term: 'CBT-I', definition: 'Cognitive behavioral therapy for insomnia; first-line treatment for sleep problems' },
      ],
      clinicalNotes: 'Perimenopause is increasingly recognized as a high-risk period for mood disorders. Proactive screening and treatment can prevent significant morbidity. Both VMS and depression can impair cognitive function - addressing both may help "brain fog."',
    },
    5: {
      level: 5,
      summary: 'Contemporary perimenopause care integrates hormonal management for symptom control, mental health surveillance, cardiovascular risk modification, and patient-centered decision-making about fertility and contraception.',
      explanation: `**Emerging Understanding:**

*Symptom Trajectory:*
- VMS can begin 10 years before FMP
- Peak severity around FMP
- Duration variable (median 7 years)
- Some women have decades of symptoms

*Biomarkers:*
- AMH declines earliest
- FSH rises later
- Neither reliably predicts FMP
- Research into better predictors ongoing

**Mental Health Integration:**

*Screening Approach:*
- Universal screening at visits
- Ask about sleep, mood, cognition
- Partner involvement
- Suicide risk assessment if indicated

*Treatment Paradigm:*
- Antidepressants effective regardless of HT use
- HT may augment response
- Address whole picture (sleep, VMS, social support)
- Long-term follow-up

**Complex Decision-Making:**

*OCP to HRT Transition:*
- No consensus on timing/method
- Consider stopping OCP for 6-8 weeks, measure FSH
- Or transition empirically at age 50-55
- Progestogen continuous or cyclic based on bleeding

*Hysterectomy for Bleeding:*
- Heavy perimenopause bleeding common indication
- Discuss alternatives (ablation, IUD)
- If hysterectomy: Ovary preservation discussion
- BSO considerations

**Research Directions:**

*SWAN Study Findings:*
- Longitudinal cohort data
- Symptom duration longer than expected
- Racial differences in symptom burden
- Metabolic changes documented

*Gaps:*
- Optimal transition management
- Prevention of mood episodes
- Cognitive protection strategies
- Long-term VMS predictors

**Quality Improvement:**

*Care Gaps:*
- Symptoms often dismissed
- Contraception overlooked
- Mental health underaddressed
- Cardiovascular risk modification delayed

*Solutions:*
- Perimenopause-specific protocols
- Proactive symptom assessment
- Integrated care models
- Patient education resources

**Shared Decision-Making:**

*Key Discussions:*
- Symptom priorities
- Risk tolerance
- Contraceptive needs
- Personal/family history
- Values about medications

*Tools:*
- Decision aids
- Risk calculators
- Symptom diaries
- Quality of life measures`,
      keyTerms: [
        { term: 'SWAN study', definition: 'Study of Women\'s Health Across the Nation; major longitudinal study of menopausal transition' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; marker of ovarian reserve that declines early in reproductive aging' },
        { term: 'proactive symptom assessment', definition: 'Routine inquiry about symptoms rather than waiting for patients to report' },
      ],
      clinicalNotes: 'The perimenopausal transition is increasingly recognized as a critical window for intervention - addressing symptoms, mental health, and cardiovascular risk during this time may have long-term benefits. Patient education and validation of symptoms is essential.',
    },
  },

  media: [
    {
      id: 'perimenopause-hormones',
      type: 'diagram',
      filename: 'perimenopause-hormone-patterns.svg',
      title: 'Hormone Changes in Perimenopause',
      description: 'Graph showing fluctuating hormone levels during menopausal transition',
    },
  ],

  citations: [
    {
      id: 'straw-criteria',
      type: 'article',
      title: 'Executive Summary of the STRAW+10',
      source: 'Menopause: The Journal of NAMS',
      authors: ['Harlow SD', 'Gass M', 'Hall JE'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-menopause-overview', targetType: 'process', relationship: 'parent', label: 'Menopause Overview' },
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'related', label: 'Contraception' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['menopause', 'perimenopause', 'gynecology'],
    keywords: ['perimenopause', 'menopausal transition', 'irregular periods', 'hormones'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
