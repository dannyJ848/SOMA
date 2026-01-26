import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const perimenopauseMoodChanges: LegacyWomensHealthContent = {
  id: 'concept-perimenopause-mood-changes',
  type: 'concept',
  name: 'Perimenopause Mood Changes',
  alternateNames: ['Menopause and mood', 'Hormones and mood', 'Midlife depression'],

  levels: {
    1: {
      level: 1,
      summary: 'Mood changes during perimenopause are common and can include irritability, anxiety, and depression. These changes are related to hormone fluctuations and can be treated.',
      explanation: `**What Happens to Mood in Perimenopause:**
As your body transitions to menopause, changing hormone levels can affect your mood. This is a real physical change, not "just in your head."

**Common Mood Changes:**
- Irritability
- Mood swings
- Anxiety or nervousness
- Feeling sad or depressed
- Difficulty concentrating
- Forgetfulness
- Low energy
- Trouble sleeping (which worsens mood)

**Why It Happens:**
- Estrogen levels fluctuate wildly
- Estrogen affects brain chemistry (serotonin, dopamine)
- Hot flashes and night sweats disrupt sleep
- Life stressors often occur at this time

**What Can Help:**
- Regular exercise
- Good sleep habits
- Stress reduction techniques
- Talking to a therapist
- Medications when needed (antidepressants, hormone therapy)
- Support from family and friends

**When to Seek Help:**
- Mood changes interfere with daily life
- Feelings of hopelessness
- Loss of interest in activities you used to enjoy
- Thoughts of harming yourself
- Symptoms persist despite self-care efforts`,
      keyTerms: [
        { term: 'perimenopause', definition: 'The transition years leading up to menopause when periods become irregular' },
        { term: 'mood swings', definition: 'Rapid changes in emotional state, like feeling fine then suddenly sad' },
        { term: 'vasomotor symptoms', definition: 'Hot flashes and night sweats that can disrupt sleep and affect mood' },
      ],
      analogies: ['Think of your hormones like a radio signal during perimenopause - sometimes clear, sometimes static. Your mood can fluctuate with the signal quality.'],
      examples: ['Snapping at family members when you normally wouldn\'t', 'Feeling overwhelmed by things you used to handle easily'],
    },
    2: {
      level: 2,
      summary: 'Perimenopausal women have 2-4 times higher risk of depression, with mood symptoms resulting from estrogen fluctuations, sleep disruption, and psychosocial factors, often requiring integrated treatment approaches.',
      explanation: `**Epidemiology:**
- Risk of new-onset depression 2-4x higher in perimenopause
- Even higher risk in late perimenopause and early postmenopause
- Prior history of depression increases vulnerability
- History of PMDD increases risk

**Risk Factors for Perimenopausal Depression:**
- History of depression or anxiety
- History of PMS/PMDD
- History of postpartum depression
- Stressful life events
- Poor social support
- Vasomotor symptoms (hot flashes, night sweats)
- Sleep disturbance
- Surgical menopause
- Negative attitudes toward menopause

**Symptoms:**

*Mood:*
- Depressed mood
- Irritability (prominent in perimenopause)
- Anxiety
- Mood lability

*Cognitive:*
- Difficulty concentrating
- Memory problems ("brain fog")
- Decreased motivation

*Physical:*
- Fatigue
- Sleep disturbance
- Changes in appetite
- Decreased libido

**Relationship to Vasomotor Symptoms:**
- VMS severity correlates with depression risk
- Sleep disruption from night sweats worsens mood
- Treating VMS may improve mood
- But depression can occur without VMS

**Evaluation:**
- Screen with PHQ-9 or similar
- Assess vasomotor symptoms
- Evaluate sleep quality
- Review psychosocial stressors
- Rule out thyroid disease`,
      keyTerms: [
        { term: 'late perimenopause', definition: 'When periods are skipped for 60+ days, highest depression risk' },
        { term: 'surgical menopause', definition: 'Menopause caused by removal of ovaries, associated with mood symptoms' },
        { term: 'cognitive complaints', definition: 'Memory and concentration problems common in perimenopause' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9; screening tool for depression' },
      ],
    },
    3: {
      level: 3,
      summary: 'Perimenopausal mood disorders are linked to estrogen\'s effects on serotonergic systems, with treatment options including antidepressants, hormone therapy (for appropriate candidates), and psychotherapy.',
      explanation: `**Neurobiology:**

*Estrogen Effects on Brain:*
- Modulates serotonin synthesis and receptors
- Affects norepinephrine and dopamine systems
- Neuroprotective effects
- Influences neuroplasticity

*Vulnerability to Fluctuations:*
- Absolute level less important than variability
- Perimenopause: Wide swings in estrogen
- Individual sensitivity varies
- Similar vulnerability in postpartum, PMDD

*HPA Axis:*
- Stress response dysregulation
- Cortisol changes
- Sleep architecture disruption

**Treatment Approaches:**

*Antidepressants:*
- SSRIs and SNRIs effective
- Also help vasomotor symptoms
- Standard dosing and duration
- First-line for moderate-severe depression

*Hormone Therapy:*
- May improve mood in perimenopause
- Less evidence in postmenopause
- Consider for women with VMS and mild depression
- Not FDA-approved for mood indications
- Estrogen has antidepressant properties

*Psychotherapy:*
- CBT effective
- Address life transitions
- Couples therapy if relationship issues
- Support groups

**Treatment Selection:**

*Depression + Significant VMS:*
- Consider hormone therapy (if no contraindications)
- Add antidepressant if mood symptoms persist
- Or start with both simultaneously

*Depression + Minimal VMS:*
- Antidepressant first-line
- Psychotherapy
- Lifestyle modifications

*Surgical Menopause:*
- Higher risk of depression
- Hormone therapy if appropriate
- Mental health support

**Additional Interventions:**
- Exercise (strong evidence)
- Sleep optimization
- Stress reduction (mindfulness)
- Social support
- Limit alcohol`,
      keyTerms: [
        { term: 'serotonergic', definition: 'Related to serotonin, a neurotransmitter affecting mood' },
        { term: 'window of vulnerability', definition: 'Period of heightened depression risk during perimenopause' },
        { term: 'estrogen therapy', definition: 'Hormone treatment that may have mood benefits in perimenopause' },
        { term: 'CBT', definition: 'Cognitive behavioral therapy; effective for depression' },
      ],
      clinicalNotes: 'Estrogen therapy for mood is most effective in perimenopause with vasomotor symptoms. It is not recommended as sole treatment for major depression. Antidepressants (particularly SNRIs) have dual benefit for mood and VMS.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of perimenopausal mood disorders requires understanding the complex interplay of hormones, sleep, and psychosocial factors, with treatment tailored to symptom profiles and hormone therapy eligibility.',
      explanation: `**Complex Presentations:**

*Depression vs. Bipolar Disorder:*
- Perimenopause may unmask bipolar disorder
- New-onset mania possible
- Review for prior hypomanic episodes
- Affects treatment selection

*Anxiety Disorders:*
- Panic attacks may emerge or worsen
- Generalized anxiety common
- May require anti-anxiety treatment
- SSRIs/SNRIs address both

*Cognitive Symptoms:*
- Subjective memory complaints common
- Distinguish from dementia prodrome
- Often improves post-menopause
- Treat depression, optimize sleep

**Hormone Therapy for Mood:**

*Evidence:*
- KEEPS trial: Improved positive affect in perimenopause
- Less evidence for treating major depression
- May prevent depression in high-risk women
- Timing matters (perimenopause > postmenopause)

*Candidates:*
- Perimenopausal women with:
  - Vasomotor symptoms AND mild depression
  - History of hormone-sensitive mood symptoms
  - No contraindications to HT

*Not Candidates:*
- Moderate-severe depression (need antidepressant)
- Contraindications to estrogen
- Postmenopausal women without VMS

**Antidepressants with VMS Benefit:**

*Most Evidence:*
- Paroxetine (7.5 mg FDA-approved for VMS)
- Venlafaxine
- Escitalopram
- Desvenlafaxine

*Consider for:*
- Dual mood + VMS treatment
- Women who cannot take HT
- Mild-moderate depression with VMS

**Sleep-Focused Interventions:**

*Importance:*
- Sleep disruption mediates mood symptoms
- Night sweats disrupt sleep architecture
- Prioritize sleep improvement

*Approaches:*
- Treat VMS (reduces night sweats)
- CBT for insomnia
- Sleep hygiene
- Short-term sleep aids if needed

**Suicidality:**
- Increased risk in perimenopausal women
- Screen routinely
- Higher risk with prior depression, severe VMS
- Safety planning essential`,
      keyTerms: [
        { term: 'KEEPS trial', definition: 'Kronos Early Estrogen Prevention Study; showed mood benefits of early HT' },
        { term: 'paroxetine low-dose', definition: 'Brisdelle; FDA-approved for vasomotor symptoms' },
        { term: 'CBT-I', definition: 'Cognitive behavioral therapy for insomnia; effective non-drug option' },
        { term: 'prodrome', definition: 'Early symptoms that may precede a condition (e.g., dementia)' },
      ],
      clinicalNotes: 'Paroxetine 7.5 mg (Brisdelle) is FDA-approved for VMS but provides minimal antidepressant effect at this dose. For comorbid depression, use standard antidepressant dosing. Screen for suicidality given elevated risk in this population.',
    },
    5: {
      level: 5,
      summary: 'Expert care of perimenopausal mood disorders involves integrating menopause and mental health expertise, addressing disparities in care, understanding evolving research, and implementing comprehensive treatment models.',
      explanation: `**Integrated Care Models:**

*Ideal Approach:*
- Gynecology + mental health collaboration
- Menopause specialty clinics with mental health integration
- Coordinated treatment planning
- Shared decision-making

*Current Gaps:*
- OB/GYNs may not screen adequately for depression
- Psychiatrists may not address menopause
- Primary care caught in between
- Fragmented care

**Disparities:**

*Documented Inequities:*
- Lower screening rates in minorities
- Cultural stigma around menopause and mental health
- Access to menopause specialists
- HT use patterns differ by race/ethnicity

*Addressing Disparities:*
- Universal screening
- Culturally sensitive care
- Provider education
- Patient education about mood-menopause connection

**Evolving Research:**

*Biomarkers:*
- Estrogen sensitivity markers
- Genetic predictors
- Inflammatory markers

*Novel Treatments:*
- Esketamine (for rapid response)
- Neurosteroids
- Personalized medicine approaches

*Longitudinal Outcomes:*
- Depression trajectory post-menopause
- Long-term cognitive effects
- Prevention strategies

**Life Transition Context:**

*Common Stressors:*
- Empty nest
- Caring for aging parents
- Career changes
- Relationship changes
- Body image changes
- Mortality awareness

*Integration into Treatment:*
- Acknowledge psychosocial factors
- Address holistically
- Therapy for life transitions
- Meaning and purpose exploration

**Patient Communication:**

*Validation:*
- "This is a real phenomenon"
- "Your symptoms make sense"
- "Hormones affect brain chemistry"
- "Help is available"

*Education:*
- Explain estrogen-mood connection
- Normalize experience
- Discuss trajectory (often improves post-menopause)
- Empower self-advocacy

**Clinical Pearls:**

*When to Suspect Perimenopausal Mood Issues:*
- New depression in 40s-50s
- Mood symptoms worse premenstrually (still)
- VMS present
- History of hormone-sensitive mood

*Keys to Management:*
- Screen all perimenopausal women
- Assess VMS and sleep
- Consider HT if appropriate
- Antidepressants work well
- Don't forget psychotherapy
- Monitor and adjust`,
      keyTerms: [
        { term: 'menopause specialist', definition: 'Certified practitioner with expertise in menopause management' },
        { term: 'empty nest', definition: 'Life transition when children leave home, often coinciding with perimenopause' },
        { term: 'hormone-sensitive mood', definition: 'Pattern of mood symptoms triggered by hormonal changes (puberty, pregnancy, menopause)' },
        { term: 'integrated care', definition: 'Coordination of multiple specialties for comprehensive care' },
      ],
      clinicalNotes: 'Women with history of PMDD, postpartum depression, and oral contraceptive mood effects are at higher risk for perimenopausal depression - these represent a phenotype of hormone sensitivity. Mood often improves in stable postmenopause.',
    },
  },

  media: [],
  citations: [
    {
      id: 'nams-mood-position',
      type: 'article',
      title: 'NAMS Position Statement: Management of Mood Disorders in Perimenopause',
      source: 'North American Menopause Society',
      license: 'Copyright NAMS',
    },
    {
      id: 'maki-depression-review',
      type: 'article',
      title: 'Depression in Perimenopause: A Review',
      source: 'JAMA Psychiatry',
      license: 'Copyright AMA',
    },
  ],
  crossReferences: [
    { targetId: 'concept-menopause-transition', targetType: 'concept', relationship: 'related', label: 'Menopause Transition' },
    { targetId: 'concept-postpartum-depression', targetType: 'concept', relationship: 'related', label: 'Postpartum Depression' },
    { targetId: 'concept-premenstrual-disorders', targetType: 'concept', relationship: 'related', label: 'Premenstrual Disorders' },
  ],
  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['womens-health', 'patient-education', 'mental-health', 'menopause'],
    keywords: ['perimenopause', 'mood', 'depression', 'anxiety', 'hormone therapy', 'menopause'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['psychiatry', 'medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
