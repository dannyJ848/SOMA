/**
 * Bipolar Disorder - Patient Education Content
 *
 * Comprehensive education about bipolar disorder including types I and II,
 * manic and depressive episodes, and treatment approaches. Emphasizes
 * that bipolar disorder is a manageable, treatable condition.
 */

import { EducationalContent } from '../../types';

export const bipolarDisorderContent: EducationalContent = {
  id: 'mental-health-bipolar-disorder',
  type: 'condition',
  name: 'Bipolar Disorder',
  alternateNames: ['Manic-Depressive Illness', 'Bipolar I', 'Bipolar II', 'Mood Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Bipolar disorder causes extreme mood swings between very high energy (mania) and very low moods (depression). It is a treatable medical condition that affects the brain.',
      explanation: `**What Is Bipolar Disorder?**

Bipolar disorder is a medical condition that causes unusual shifts in mood, energy, and activity levels. Everyone has ups and downs, but bipolar disorder causes extreme changes that are different from normal mood swings.

**The Two Poles:**

**Mania (The "High" Pole):**
- Feeling extremely happy, excited, or "on top of the world"
- Having tons of energy, needing very little sleep
- Talking very fast, jumping between ideas
- Feeling like you can do anything
- Making risky decisions (spending too much money, risky behavior)
- Being easily irritated or agitated

**Depression (The "Low" Pole):**
- Feeling very sad, hopeless, or empty
- Having no energy, sleeping too much
- Not enjoying things you usually like
- Trouble concentrating
- Thoughts of death or suicide

**Types of Bipolar Disorder:**

- **Bipolar I**: Has full manic episodes (very extreme highs)
- **Bipolar II**: Has less severe "high" episodes called hypomania, plus depression
- **Cyclothymia**: Milder mood swings over many years

**Important Facts:**

- Bipolar disorder is NOT a character flaw
- It is caused by differences in how the brain works
- It often runs in families
- It usually starts in late teens or early adulthood
- It affects about 2-3% of people
- It is VERY treatable

**Why Treatment Matters:**

Without treatment, episodes can:
- Get worse over time
- Damage relationships and careers
- Lead to dangerous decisions
- Be very hard on the person and their family

With treatment, people with bipolar disorder can:
- Have stable moods
- Live full, productive lives
- Maintain relationships and jobs
- Feel like themselves

**Treatment Options:**

- **Mood stabilizers**: Medications that keep moods level (like lithium)
- **Other medications**: To help with mania, depression, or sleep
- **Therapy**: Learning to manage the condition
- **Lifestyle**: Regular sleep, exercise, and stress management

If you or someone you know might have bipolar disorder, please seek help from a mental health professional.`,
      keyTerms: [
        { term: 'bipolar disorder', definition: 'A condition that causes extreme mood swings between high energy and low moods' },
        { term: 'mania', definition: 'An episode of extremely high energy, mood, and activity' },
        { term: 'depression', definition: 'An episode of very low mood and energy' },
        { term: 'mood stabilizer', definition: 'A medication that helps keep moods steady' },
      ],
      analogies: [
        'Bipolar disorder is like a thermostat that swings between too hot and too cold instead of staying comfortable in the middle.',
        'Mood stabilizers are like shock absorbers that smooth out the bumps in mood.',
        'The brain in bipolar disorder is like a car with a very sensitive gas pedal - it can go from 0 to 100 quickly.',
      ],
      examples: [
        'During mania, someone might stay up for days working on projects, feeling like they do not need sleep.',
        'A person with bipolar II might have periods of high productivity and energy, but also weeks of feeling depressed.',
        'Many creative and successful people have bipolar disorder and manage it well with treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bipolar disorder involves episodes of mania or hypomania alternating with depression, caused by dysfunction in brain circuits regulating mood and energy. Treatment includes mood stabilizers, atypical antipsychotics, and psychotherapy.',
      explanation: `**Understanding Bipolar Disorder:**

Bipolar disorder is a chronic mental health condition characterized by episodes of abnormally elevated mood (mania or hypomania) and episodes of depression. These are not ordinary mood fluctuations but distinct episodes that significantly impact functioning.

**Types of Episodes:**

**Manic Episode:**
- Abnormally elevated, expansive, or irritable mood
- Increased energy and goal-directed activity
- Lasting at least 7 days (or any duration if hospitalization needed)

Symptoms include:
- Decreased need for sleep (feeling rested after 3 hours)
- More talkative than usual, pressured speech
- Racing thoughts (flight of ideas)
- Distractibility
- Increased goal-directed activity or psychomotor agitation
- Excessive involvement in risky activities
- Inflated self-esteem or grandiosity

**Hypomanic Episode:**
- Similar symptoms to mania but less severe
- Lasts at least 4 days
- Observable by others but does not cause severe impairment
- No psychotic features
- Does not require hospitalization

**Major Depressive Episode:**
- Same criteria as in major depressive disorder
- Depressed mood or loss of interest
- Changes in sleep, appetite, energy
- Difficulty concentrating
- Suicidal thoughts

**Types of Bipolar Disorder:**

**Bipolar I Disorder:**
- At least one manic episode
- Usually also has depressive episodes (but not required for diagnosis)
- Manic episodes can include psychotic features
- Most severe form

**Bipolar II Disorder:**
- At least one hypomanic episode AND at least one major depressive episode
- No full manic episodes (this would change diagnosis to Bipolar I)
- Depression tends to be predominant
- Not "milder" - significant impairment from depression

**Cyclothymic Disorder:**
- Chronic (at least 2 years) fluctuating mood
- Periods with hypomanic symptoms and depressive symptoms
- Never meets full criteria for manic, hypomanic, or major depressive episode

**Causes and Risk Factors:**

- Strong genetic component (runs in families)
- Brain structure and function differences
- Neurotransmitter imbalances
- Stressful life events can trigger episodes
- Sleep disruption can trigger episodes
- Substance use can worsen course

**Treatment Approach:**

**Medications:**
- Mood Stabilizers:
  - Lithium (gold standard)
  - Valproate (Depakote)
  - Lamotrigine (especially for depression prevention)
  - Carbamazepine

- Atypical Antipsychotics:
  - Quetiapine, aripiprazole, olanzapine, risperidone, lurasidone
  - Used for mania, depression, and maintenance

- Antidepressants:
  - Used cautiously (risk of triggering mania)
  - Usually combined with mood stabilizer

**Psychotherapy:**
- Psychoeducation (understanding the illness)
- Cognitive behavioral therapy
- Interpersonal and social rhythm therapy
- Family-focused therapy

**Lifestyle Management:**
- Regular sleep schedule (critical)
- Avoiding substances
- Stress management
- Monitoring mood (mood charts)
- Early warning sign recognition

**Prognosis:**

With proper treatment, most people with bipolar disorder can achieve mood stability and live fulfilling lives. Continuous treatment is important to prevent relapse.`,
      keyTerms: [
        { term: 'hypomania', definition: 'A less severe form of mania that does not cause major impairment', pronunciation: 'hy-po-MAY-nee-ah' },
        { term: 'lithium', definition: 'The oldest and often most effective mood stabilizer' },
        { term: 'cyclothymia', definition: 'A milder form of bipolar with chronic mood fluctuations', pronunciation: 'sy-klo-THY-mee-ah' },
        { term: 'psychoeducation', definition: 'Education about a mental health condition to improve understanding and management' },
        { term: 'mood chart', definition: 'A tool to track daily mood, sleep, and other factors' },
      ],
      analogies: [
        'Mood stabilizers act like a ceiling and floor, preventing mood from going too high or too low.',
        'Tracking mood is like checking the weather forecast - it helps you prepare and respond early.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bipolar disorder involves dysregulation of circadian rhythms, monoamine systems, and intracellular signaling pathways. DSM-5 classifies Bipolar I, II, and Cyclothymic Disorder. Treatment includes lithium, anticonvulsants, and atypical antipsychotics, with emerging evidence for adjunctive psychotherapy.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Bipolar I Disorder:**
Criteria met for at least one manic episode. Manic episode:
- Distinct period of abnormally elevated, expansive, or irritable mood AND increased goal-directed activity/energy
- Lasting at least 7 days (or any duration if hospitalization required)
- During episode, 3+ symptoms (4+ if mood is only irritable):
  1. Inflated self-esteem or grandiosity
  2. Decreased need for sleep
  3. More talkative/pressured speech
  4. Flight of ideas/racing thoughts
  5. Distractibility
  6. Increased goal-directed activity or psychomotor agitation
  7. Excessive involvement in risky activities
- Marked impairment, hospitalization, or psychotic features
- Not attributable to substances or another medical condition

**Bipolar II Disorder:**
- At least one hypomanic episode (≥4 days) AND at least one major depressive episode
- Never had a manic episode
- Symptoms cause clinically significant distress or impairment

**Cyclothymic Disorder:**
- At least 2 years of hypomanic and depressive symptoms
- Never meeting full criteria for hypomanic, manic, or major depressive episode
- Symptoms present at least half the time
- Never symptom-free for more than 2 months

**Specifiers:**
- With anxious distress
- With mixed features
- With rapid cycling (≥4 episodes/year)
- With melancholic features
- With atypical features
- With mood-congruent/incongruent psychotic features
- With catatonia
- With peripartum onset
- With seasonal pattern

**Neurobiological Basis:**

*Circadian Rhythm Dysfunction:*
- Clock gene polymorphisms
- Abnormal melatonin secretion
- Social rhythm disruption triggers episodes
- Target of IPSRT therapy

*Monoamine Systems:*
- Dopamine: Elevated in mania, reduced in depression
- Serotonin: Reduced in depression
- Norepinephrine: Elevated in mania

*Intracellular Signaling:*
- GSK-3β overactivity (inhibited by lithium)
- Altered protein kinase C
- Mitochondrial dysfunction
- Oxidative stress

*Structural Changes:*
- Reduced prefrontal cortex gray matter
- Amygdala abnormalities
- White matter tract changes

**Pharmacological Treatment:**

*Acute Mania:*
- Lithium, valproate, or carbamazepine
- Atypical antipsychotics (quetiapine, aripiprazole, risperidone, olanzapine, asenapine, cariprazine)
- Combination often needed
- Discontinue antidepressants

*Acute Bipolar Depression:*
- Quetiapine (most evidence)
- Lurasidone
- Olanzapine-fluoxetine combination (OFC)
- Lamotrigine
- Lithium
- Caution with antidepressant monotherapy

*Maintenance Treatment:*
- Lithium (gold standard, reduces suicide risk)
- Valproate
- Lamotrigine (especially depression prevention)
- Atypical antipsychotics
- Often combination therapy

*Lithium Monitoring:*
- Therapeutic range: 0.6-1.0 mEq/L (maintenance), 1.0-1.2 mEq/L (acute)
- Check levels regularly
- Monitor renal function, thyroid function
- Toxicity: tremor, GI upset, confusion, seizures

**Psychosocial Interventions:**

*Psychoeducation:*
- Understanding illness and treatments
- Early warning sign recognition
- Medication adherence
- Lifestyle management

*Cognitive Behavioral Therapy:*
- Modifying dysfunctional cognitions
- Behavioral strategies
- Relapse prevention

*Interpersonal and Social Rhythm Therapy (IPSRT):*
- Stabilizing daily routines
- Improving relationships
- Managing social disruptions

*Family-Focused Therapy:*
- Psychoeducation for family
- Communication training
- Problem-solving skills

**Rapid Cycling:**
- ≥4 mood episodes in 12 months
- More difficult to treat
- Associated with hypothyroidism, antidepressant use
- Optimize mood stabilizer, minimize antidepressants`,
      keyTerms: [
        { term: 'GSK-3β', definition: 'Glycogen synthase kinase 3 beta, an enzyme inhibited by lithium' },
        { term: 'rapid cycling', definition: '4 or more mood episodes within 12 months' },
        { term: 'IPSRT', definition: 'Interpersonal and Social Rhythm Therapy - focuses on stabilizing daily routines' },
        { term: 'mixed features', definition: 'Symptoms of opposite polarity during a mood episode' },
        { term: 'lamotrigine', definition: 'Anticonvulsant mood stabilizer especially effective for depression prevention' },
      ],
      clinicalNotes: 'Always screen for bipolar before treating depression - antidepressant monotherapy can trigger mania or rapid cycling. Lithium is associated with reduced suicide risk. Monitor for metabolic side effects of atypical antipsychotics. Pregnancy planning is essential (valproate contraindicated).',
    },
    4: {
      level: 4,
      summary: 'Bipolar disorder pathophysiology involves circadian rhythm disruption, mitochondrial dysfunction, altered calcium signaling, and prefrontal-limbic circuit abnormalities. Treatment selection considers episode polarity, past response, comorbidities, and side effect profiles. Lithium remains gold standard with neuroprotective properties.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Architecture:*
- Heritability: ~85% (highest of psychiatric disorders)
- Polygenic with thousands of risk variants
- Key genes: CACNA1C (calcium channel), ANK3, ODZ4
- Overlap with schizophrenia genetics
- Rare variants in some families (higher penetrance)

*Circadian Rhythm Dysfunction:*
- Clock gene variants (CLOCK, ARNTL, PER3, CRY1)
- Abnormal melatonin profiles
- Light sensitivity
- Delayed sleep phase common
- Rhythm disruption can precipitate episodes

*Mitochondrial Dysfunction:*
- Decreased mitochondrial function
- Altered calcium homeostasis
- Oxidative stress
- May explain episodic nature and neurodegeneration
- Lithium effects on mitochondria

*Intracellular Signaling:*
- GSK-3β hyperactivity: Target of lithium
- Inositol depletion hypothesis: Lithium reduces inositol
- Protein kinase C: Target of lithium, valproate
- BDNF: Reduced during episodes, increased by lithium
- Arachidonic acid cascade: Target of valproate

*Neural Circuit Abnormalities:*
- Prefrontal cortex: Reduced volume, hypoactivity in depression
- Amygdala: Hyperactivity in mania and depression
- Striatum: Reward circuit dysregulation
- White matter: Reduced integrity

**Pharmacology Deep Dive:**

*Lithium:*
- Mechanism: Inositol monophosphatase inhibition, GSK-3β inhibition
- Efficacy: Mania > depression; excellent maintenance
- Unique: Reduces suicide risk, neuroprotective
- Monitoring: Levels, renal function (eGFR, UA), thyroid (TSH), calcium
- Toxicity: >1.5 mEq/L (tremor, GI, neurotoxicity, seizures)
- Drug interactions: NSAIDs, ACE inhibitors, thiazides increase levels

*Valproate (Divalproex):*
- Mechanism: GABA enhancement, histone deacetylase inhibition
- Efficacy: Acute mania, mixed states, rapid cycling
- Monitoring: Levels (50-125 mcg/mL), LFTs, CBC
- Side effects: Weight gain, tremor, alopecia, hepatotoxicity
- Contraindicated: Pregnancy (neural tube defects)

*Lamotrigine:*
- Mechanism: Sodium channel, glutamate modulation
- Efficacy: Depression prevention > mania
- Key issue: Stevens-Johnson syndrome (slow titration)
- Titration: Start 25mg, increase slowly over 6+ weeks
- Drug interaction: Valproate inhibits metabolism (halve dose)

*Carbamazepine:*
- Mechanism: Sodium channel blockade
- Efficacy: Acute mania, maintenance
- Issues: CYP450 inducer (many drug interactions), rash, hyponatremia

*Atypical Antipsychotics:*
- Multiple FDA approvals for mania, bipolar depression, maintenance
- Metabolic monitoring essential
- Consider individual profiles:
  - Quetiapine: Sedating, evidence for depression
  - Aripiprazole: Activating, weight-neutral
  - Olanzapine: Highly effective but metabolic effects
  - Lurasidone: Bipolar depression, take with food
  - Cariprazine: Mania and depression

**Treatment Algorithm:**

*Acute Mania:*
1. Lithium OR valproate (mild-moderate)
2. Atypical antipsychotic (moderate-severe, psychotic)
3. Combination for severe/refractory

*Acute Bipolar Depression:*
1. Quetiapine OR lurasidone OR lamotrigine
2. OFC if others fail
3. Add antidepressant cautiously if needed (always with mood stabilizer)
4. Consider ECT for severe/refractory

*Maintenance:*
- Continue effective acute treatment
- Lithium for suicidality risk
- Lamotrigine for depression-predominant
- Assess for residual symptoms

**Special Populations:**

*Pregnancy:*
- Valproate contraindicated
- Lithium: Cardiac malformation risk (lower than previously thought)
- Lamotrigine: Relatively safer, adjust dosing
- Atypicals: Metabolic considerations
- Untreated bipolar carries significant risks

*Elderly:*
- Lower lithium doses
- Increased sensitivity to side effects
- Medical comorbidities

*Pediatric:*
- Diagnosis challenging (developmental context)
- Aripiprazole, lithium, risperidone studied
- Close monitoring essential`,
      keyTerms: [
        { term: 'inositol depletion', definition: 'Hypothesis that lithium works by reducing inositol and downstream signaling' },
        { term: 'Stevens-Johnson syndrome', definition: 'Severe skin reaction that can occur with lamotrigine, prevented by slow titration' },
        { term: 'therapeutic range', definition: 'Blood level range where medication is effective without toxicity' },
        { term: 'OFC', definition: 'Olanzapine-fluoxetine combination, FDA-approved for bipolar depression' },
        { term: 'kindling', definition: 'Hypothesis that untreated episodes lead to more and worse future episodes' },
      ],
      clinicalNotes: 'Lithium remains most evidence-based for long-term stabilization and suicide prevention. Valproate and lithium require level monitoring. Atypical antipsychotics require metabolic monitoring. Document informed consent discussions regarding teratogenicity with women of childbearing age. Mixed features and rapid cycling require treatment adjustment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bipolar research explores staging models, circadian interventions, neuroprotective strategies, and precision medicine approaches. Novel therapeutics target glutamate, inflammation, and cellular resilience pathways. Integration of biomarkers, genetics, and digital phenotyping aims for personalized treatment.',
      explanation: `**Staging and Neuroprogression:**

*Clinical Staging Model:*
- Stage 1a: At-risk (family history, prodromal symptoms)
- Stage 1b: Prodromal phase
- Stage 2: First episode
- Stage 3: Recurrence
- Stage 4: Treatment resistance, cognitive decline

*Neuroprogression Evidence:*
- Episode burden correlates with cognitive decline
- Progressive gray matter loss with episodes
- Increased treatment resistance over time
- Earlier treatment may be neuroprotective

*Neuroprotection Strategies:*
- Lithium: Increases BDNF, gray matter
- Early intervention
- Minimize episode burden
- Address comorbidities

**Circadian and Chronobiological Interventions:**

*Light Therapy:*
- Bright light for bipolar depression
- Morning light (but caution for mania switch)
- Dark therapy for mania

*Dark Therapy/Blue Light Blocking:*
- Amber glasses in evening
- May reduce manic symptoms
- Stabilizes circadian rhythms

*Total/Partial Sleep Deprivation:*
- Rapid antidepressant effect in bipolar depression
- Combined with lithium/light therapy (triple chronotherapy)
- Risk of mania switch

*Social Rhythm Therapy:*
- Stabilizes daily routines
- Reduces episode recurrence
- Addresses interpersonal stressors

**Novel Therapeutics:**

*Glutamate Modulators:*
- Ketamine: Rapid antidepressant effect in bipolar depression
- Research ongoing; caution re: abuse, dissociation
- Riluzole: Glutamate modulator, under investigation

*Anti-inflammatory Approaches:*
- Elevated inflammation in bipolar
- Celecoxib augmentation: Mixed results
- N-acetyl cysteine: Antioxidant, some evidence
- Aspirin: Under investigation

*Pramipexole:*
- D2/D3 dopamine agonist
- Evidence for bipolar depression
- Risk of mania switch

*Modafinil/Armodafinil:*
- Augmentation for bipolar depression
- Adjunctive use only

**Precision Medicine:**

*Pharmacogenomics:*
- HLA-B*15:02: Carbamazepine-induced SJS risk (Asian populations)
- CYP450 enzymes affect drug metabolism
- Limited clinical utility currently

*Biomarker Research:*
- Inflammatory markers (CRP, IL-6)
- BDNF levels
- Oxidative stress markers
- Neuroimaging: Not yet clinically applicable

*Treatment Response Prediction:*
- Clinical predictors of lithium response:
  - Episodic course (vs. chronic)
  - Mania > depression
  - Family history of lithium response
  - Later onset
- Genetic predictors under investigation

**Digital and Technology Integration:**

*Digital Phenotyping:*
- Smartphone data (activity, sleep, typing patterns)
- Passive sensing of mood states
- Early warning detection
- Research stage

*Smartphone Apps:*
- Mood tracking
- Medication reminders
- Psychoeducation
- Adjunctive use

*Telepsychiatry:*
- Maintenance treatment delivery
- Increased access
- Pandemic acceleration

**Psychotherapy Research:**

*STEP-BD Findings:*
- Intensive psychotherapy (CBT, IPSRT, FFT) + meds > meds alone for depression
- No difference between therapy types
- Emphasizes adjunctive psychotherapy importance

*Mechanism Research:*
- CBT: Targets dysfunctional attitudes
- IPSRT: Stabilizes rhythms, improves sleep
- FFT: Reduces expressed emotion, improves communication

**Emerging Conceptualizations:**

*Dimensional Approaches:*
- Mood instability as transdiagnostic dimension
- Continuum from unipolar to bipolar
- Mixed features across diagnoses

*RDoC Framework:*
- Arousal/regulatory systems
- Positive valence (reward) systems
- Circadian rhythm domain

**Clinical Integration:**

*Measurement-Based Care:*
- Mood charts
- PHQ-9 (depression)
- Young Mania Rating Scale
- Altman Self-Rating Mania Scale
- Life charts for longitudinal view

*Collaborative Care Models:*
- Integration with primary care
- Care managers
- Systematic monitoring

*Long-Term Management:*
- Continuous treatment reduces relapse
- Medication simplification when stable
- Wellness plans
- Advance directives for manic episodes`,
      keyTerms: [
        { term: 'triple chronotherapy', definition: 'Sleep deprivation combined with lithium and light therapy for rapid antidepressant effect' },
        { term: 'digital phenotyping', definition: 'Using smartphone and wearable data to detect mood states' },
        { term: 'STEP-BD', definition: 'Systematic Treatment Enhancement Program for Bipolar Disorder - large effectiveness trial' },
        { term: 'neuroprogression', definition: 'Hypothesis that bipolar disorder worsens with repeated episodes' },
        { term: 'HLA-B*15:02', definition: 'Genetic marker for carbamazepine-induced severe skin reactions' },
      ],
      clinicalNotes: `Current best practices:
- Long-term treatment essential (lifelong for most)
- Lithium gold standard for classic bipolar I
- Lamotrigine for depression-predominant bipolar II
- Adjunctive psychotherapy improves outcomes
- Early intervention may be neuroprotective

Research directions:
- Staging-based treatment selection
- Biomarker-guided treatment
- Chronobiological interventions
- Anti-inflammatory augmentation
- Digital monitoring for early intervention

Key challenges:
- Treatment adherence (especially during euthymia)
- Subsyndromal symptoms affecting function
- Cognitive impairment
- Metabolic comorbidities`,
    },
  },

  media: [
    {
      id: 'bipolar-mood-episodes',
      type: 'diagram',
      filename: 'bipolar_episodes.svg',
      title: 'Bipolar Mood Episodes',
      description: 'Visual representation of mania, hypomania, and depression',
    },
    {
      id: 'bipolar-treatment-algorithm',
      type: 'diagram',
      filename: 'bipolar_treatment.svg',
      title: 'Bipolar Disorder Treatment Algorithm',
      description: 'Decision tree for acute and maintenance treatment',
    },
  ],

  citations: [
    {
      id: 'dsm5-bipolar',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Bipolar and Related Disorders',
    },
    {
      id: 'canmat-bipolar',
      type: 'article',
      title: 'Canadian Network for Mood and Anxiety Treatments (CANMAT) and ISBD Guidelines',
      authors: ['Yatham LN', 'Kennedy SH', 'et al'],
      source: 'Bipolar Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-psychiatric-medications', targetType: 'topic', relationship: 'see-also', label: 'Psychiatric Medications' },
    { targetId: 'mental-health-suicidal-ideation', targetType: 'topic', relationship: 'see-also', label: 'Suicidal Ideation' },
    { targetId: 'mental-health-sleep-mental-health', targetType: 'topic', relationship: 'see-also', label: 'Sleep and Mental Health' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'mood-disorders'],
    keywords: ['bipolar', 'mania', 'hypomania', 'lithium', 'mood stabilizer'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bipolarDisorderContent;
