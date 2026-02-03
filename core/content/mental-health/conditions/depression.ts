/**
 * Depression - Patient Education Content
 *
 * Comprehensive education about depressive disorders including major depression,
 * persistent depressive disorder, and related conditions. Emphasizes that depression
 * is a treatable medical condition.
 */

import { EducationalContent } from '../../types';

export const depressionContent: EducationalContent = {
  id: 'mental-health-depression',
  type: 'condition',
  name: 'Depression',
  alternateNames: ['Major Depressive Disorder', 'Clinical Depression', 'MDD', 'Depressive Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Depression is a medical condition that affects how you feel, think, and handle daily activities. It is not a character flaw or weakness, and it can be treated.',
      explanation: `**What Is Depression?**

Depression is much more than feeling sad. It's a medical condition that changes how your brain works. Just like diabetes affects how your body uses sugar, depression affects how your brain controls mood and energy.

**Common Signs of Depression:**

- Feeling sad, empty, or hopeless most of the time
- Not enjoying things you used to like
- Feeling very tired, even after sleeping
- Trouble sleeping, or sleeping too much
- Not wanting to eat, or eating too much
- Having trouble focusing or making decisions
- Feeling worthless or very guilty
- Thoughts about death or hurting yourself

**Important Facts:**

- Depression is NOT your fault
- You cannot "snap out of it" or "just cheer up"
- Depression is one of the most treatable conditions
- Most people feel much better with treatment
- Asking for help is a sign of strength

**Types of Depression:**

- **Major Depression**: Feeling very low for at least 2 weeks
- **Persistent Depression**: Feeling low most days for 2 years or more
- **Postpartum Depression**: Depression after having a baby
- **Seasonal Depression**: Feeling depressed in fall and winter

**Getting Help:**

Depression is very treatable. Treatments include:
- Talking therapy (counseling)
- Medications that help brain chemicals work better
- Lifestyle changes (exercise, sleep, social connection)
- A combination of these works best for many people

If you think you might have depression, please talk to a doctor or mental health professional. Things can get better.`,
      keyTerms: [
        { term: 'depression', definition: 'A medical condition that causes lasting feelings of sadness and loss of interest' },
        { term: 'major depression', definition: 'A type of depression with severe symptoms lasting at least 2 weeks' },
        { term: 'therapy', definition: 'Treatment through talking with a trained mental health professional' },
        { term: 'antidepressant', definition: 'A medication that helps treat depression by balancing brain chemicals' },
      ],
      analogies: [
        'Depression is like having a heavy, invisible weight that makes everything harder to do.',
        'Just like you would see a doctor for a broken bone, you should see a professional for depression.',
        'Depression affects your brain like a storm affects the weather - it changes everything temporarily, but it will pass with the right help.',
      ],
      examples: [
        'Someone with depression might stop going to activities they used to love, not because they do not want to, but because they feel too tired and empty.',
        'A person with depression might seem irritable instead of sad - depression looks different in different people.',
        'Many successful people have had depression and recovered with treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Depression is a mood disorder involving persistent changes in brain chemistry that affect emotions, thinking, behavior, and physical health. It is highly treatable with therapy, medication, or both.',
      explanation: `**Understanding Depression:**

Depression is a clinical mood disorder, not just sadness. It involves changes in neurotransmitters (brain chemicals) like serotonin, norepinephrine, and dopamine that regulate mood, energy, and motivation.

**Types of Depressive Disorders:**

**Major Depressive Disorder (MDD):**
- Episodes lasting at least 2 weeks
- 5+ symptoms including depressed mood or loss of interest
- Significantly impairs daily functioning
- Can be single episode or recurrent

**Persistent Depressive Disorder (Dysthymia):**
- Depressed mood for most days over 2+ years
- Symptoms less severe but longer lasting
- May have major depressive episodes superimposed

**Other Forms:**
- Postpartum Depression: Within weeks to months after childbirth
- Premenstrual Dysphoric Disorder (PMDD): Severe symptoms before menstruation
- Seasonal Affective Disorder (SAD): Depressive episodes in fall/winter
- Atypical Depression: Mood reactivity, increased sleep and appetite

**Symptoms by Category:**

*Emotional:*
- Persistent sad, anxious, or "empty" mood
- Hopelessness, pessimism
- Guilt, worthlessness, helplessness
- Irritability, frustration

*Cognitive:*
- Difficulty concentrating and making decisions
- Memory problems
- Negative thought patterns
- Thoughts of death or suicide

*Physical:*
- Fatigue and decreased energy
- Sleep disturbances (insomnia or hypersomnia)
- Appetite changes (decreased or increased)
- Psychomotor changes (slowing or agitation)
- Unexplained aches and pains

*Behavioral:*
- Social withdrawal
- Decreased productivity
- Neglecting responsibilities
- Substance use (sometimes)

**Risk Factors:**

- Family history of depression
- Traumatic or stressful experiences
- Major life changes
- Certain medical conditions
- Some medications
- Substance use

**Treatment Approaches:**

*Psychotherapy:*
- Cognitive Behavioral Therapy (CBT) - changes negative thought patterns
- Interpersonal Therapy (IPT) - improves relationships
- Behavioral Activation - increases positive activities

*Medications:*
- SSRIs (most commonly prescribed)
- SNRIs
- Other antidepressants
- Usually take 4-6 weeks for full effect

*Combination:*
- Therapy + medication often most effective
- Lifestyle modifications (exercise, sleep, diet)
- Social support

**Prognosis:**

With treatment, most people with depression improve significantly. Depression is one of the most treatable mental health conditions.`,
      keyTerms: [
        { term: 'neurotransmitter', definition: 'Chemical messengers in the brain that affect mood and other functions' },
        { term: 'serotonin', definition: 'A brain chemical that helps regulate mood, sleep, and appetite' },
        { term: 'cognitive behavioral therapy', definition: 'A type of therapy that helps change negative thinking patterns', pronunciation: 'KOG-ni-tiv' },
        { term: 'SSRI', definition: 'Selective serotonin reuptake inhibitor - a common type of antidepressant' },
        { term: 'psychomotor', definition: 'Relating to physical movement and mental processes' },
      ],
      analogies: [
        'Neurotransmitters are like text messages between brain cells - in depression, some messages are not getting through properly.',
        'Therapy is like physical therapy for your mind - it helps retrain thought patterns and build mental strength.',
      ],
    },
    3: {
      level: 3,
      summary: 'Major Depressive Disorder involves dysregulation of monoamine neurotransmitter systems, HPA axis dysfunction, and neural circuit abnormalities. Evidence-based treatments include SSRIs, SNRIs, psychotherapy, and their combination.',
      explanation: `**Diagnostic Criteria (DSM-5):**

Major Depressive Episode requires 5+ symptoms for 2+ weeks, including at least one of:
1. Depressed mood most of the day, nearly every day
2. Markedly diminished interest/pleasure (anhedonia)

Plus additional symptoms from:
3. Significant weight/appetite change
4. Insomnia or hypersomnia
5. Psychomotor agitation or retardation
6. Fatigue or loss of energy
7. Feelings of worthlessness or excessive guilt
8. Diminished concentration or indecisiveness
9. Recurrent thoughts of death, suicidal ideation

*Specifiers:*
- With anxious distress
- With mixed features
- With melancholic features
- With atypical features
- With mood-congruent/incongruent psychotic features
- With catatonia
- With peripartum onset
- With seasonal pattern

**Neurobiological Basis:**

*Monoamine Hypothesis:*
- Deficiency in serotonin (5-HT), norepinephrine (NE), and/or dopamine (DA)
- Supported by antidepressant mechanisms
- Oversimplified but clinically useful

*HPA Axis Dysregulation:*
- Elevated cortisol
- Impaired negative feedback
- Chronic stress model

*Neuroplasticity:*
- Reduced BDNF (brain-derived neurotrophic factor)
- Hippocampal volume reduction
- Prefrontal cortex changes

*Neural Circuits:*
- Default mode network hyperactivity (rumination)
- Prefrontal hypoactivity (executive dysfunction)
- Amygdala hyperreactivity (negative bias)

**Pharmacological Treatment:**

*First-Line Agents:*

SSRIs (Selective Serotonin Reuptake Inhibitors):
- Fluoxetine, sertraline, paroxetine, citalopram, escitalopram
- Mechanism: Block serotonin transporter (SERT)
- Side effects: GI upset, sexual dysfunction, initial anxiety
- Generally well-tolerated

SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors):
- Venlafaxine, duloxetine, desvenlafaxine
- Dual mechanism: Block SERT and NET
- May help with fatigue, pain

*Other Antidepressants:*
- Bupropion: NE/DA reuptake inhibitor, no sexual side effects
- Mirtazapine: Alpha-2 antagonist, helps sleep/appetite
- Tricyclics: Older, more side effects, still used
- MAOIs: Dietary restrictions, used for treatment-resistant

*Treatment Timeline:*
- Response: 4-6 weeks for full effect
- Continuation: 6-12 months after remission
- Maintenance: Consider for recurrent depression

**Psychotherapy:**

*CBT (Cognitive Behavioral Therapy):*
- Identifies and modifies negative automatic thoughts
- Behavioral experiments
- Activity scheduling
- Strong evidence base

*IPT (Interpersonal Therapy):*
- Focuses on relationship issues
- Grief, role transitions, interpersonal conflicts
- Time-limited (12-16 sessions)

*Behavioral Activation:*
- Increases engagement with rewarding activities
- Breaks avoidance patterns
- Can be delivered by trained non-specialists

**Combination Treatment:**

Evidence supports combination of medication + psychotherapy as most effective for moderate-severe depression.

**Treatment-Resistant Depression:**

Defined as failure to respond to 2+ adequate antidepressant trials. Options include:
- Augmentation strategies
- ECT
- TMS
- Ketamine/esketamine`,
      keyTerms: [
        { term: 'anhedonia', definition: 'Loss of ability to feel pleasure from activities that were previously enjoyable', pronunciation: 'an-hee-DOH-nee-ah' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor - protein supporting neuron growth and survival' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis - the stress response system' },
        { term: 'rumination', definition: 'Repetitive, passive focus on symptoms of distress and their causes' },
        { term: 'treatment-resistant depression', definition: 'Depression that does not respond to standard treatment approaches' },
      ],
      clinicalNotes: 'Screen for bipolar disorder before starting antidepressants - antidepressants alone can trigger mania. Always assess suicide risk. Consider medical causes (thyroid, anemia, medications).',
    },
    4: {
      level: 4,
      summary: 'Depression pathophysiology involves complex interactions between genetic vulnerability, HPA axis dysregulation, neuroinflammation, altered neuroplasticity, and disrupted neural circuits. Treatment selection increasingly considers phenotypic features and treatment history.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Factors:*
- Heritability: ~40%
- Polygenic architecture (many genes, small effects)
- Key genes: SERT (SLC6A4), BDNF, FKBP5, CRHR1
- Gene-environment interactions (5-HTTLPR × stress)

*HPA Axis Dysregulation:*
- Elevated CRH from paraventricular nucleus
- Impaired glucocorticoid receptor sensitivity
- Elevated cortisol → hippocampal damage
- Blunted cortisol awakening response in chronic depression

*Neuroinflammation:*
- Elevated IL-6, TNF-alpha, CRP in subset of patients
- Kynurenine pathway activation
- Microglial activation
- Potential subtype for anti-inflammatory treatment

*Neuroplasticity Deficits:*
- Reduced BDNF in serum and hippocampus
- Decreased synaptic density in PFC
- Impaired neurogenesis in hippocampus
- Antidepressants restore BDNF and plasticity

*Glutamate Dysfunction:*
- Increased glutamate in depression
- NMDA receptor dysfunction
- Ketamine mechanism: NMDA antagonism → AMPA activation → BDNF → synaptogenesis

**Neural Circuit Abnormalities:**

*Cortico-Limbic Circuits:*
- Subgenual anterior cingulate hyperactivity
- Amygdala hyperreactivity to negative stimuli
- Reduced prefrontal-amygdala connectivity
- Impaired top-down emotional regulation

*Reward Circuits:*
- Striatal hypoactivity (anhedonia)
- Reduced VTA-NAc dopamine signaling
- Blunted response to positive stimuli
- Target: Behavioral activation, bupropion

*Default Mode Network:*
- Hyperactivity and hyperconnectivity
- Correlates with rumination
- Normalized with successful treatment
- Target of psilocybin, ketamine

**Treatment Algorithm:**

*Mild Depression:*
- Psychotherapy preferred (CBT, IPT, BA)
- Lifestyle modifications
- Watchful waiting may be appropriate

*Moderate Depression:*
- Psychotherapy OR medication
- Patient preference important
- Consider combination

*Moderate-Severe Depression:*
- Combination therapy recommended
- First-line: SSRI + CBT
- Consider SNRIs, mirtazapine, bupropion

*Treatment-Resistant Depression:*
1. Optimize current treatment (dose, duration)
2. Switch within or between classes
3. Augmentation strategies:
   - Add second antidepressant (bupropion + SSRI)
   - Add atypical antipsychotic (aripiprazole, quetiapine)
   - Add lithium or thyroid hormone
4. Somatic therapies:
   - ECT (most effective)
   - TMS (FDA-approved)
   - Ketamine/esketamine (Spravato)

**Special Populations:**

*Peripartum Depression:*
- Screening recommended
- Brexanolone (IV) FDA-approved
- SSRIs generally acceptable in pregnancy/lactation (risk-benefit)

*Elderly:*
- Higher suicide risk
- Medical comorbidities
- Start low, go slow with medications
- Watch for drug interactions

*Adolescents:*
- Fluoxetine FDA-approved
- Black box warning (monitor closely initially)
- CBT recommended

**Measurement-Based Care:**

Use validated scales to track progress:
- PHQ-9 (Patient Health Questionnaire-9)
- HAM-D (Hamilton Depression Rating Scale)
- MADRS (Montgomery-Asberg Depression Rating Scale)`,
      keyTerms: [
        { term: 'kynurenine pathway', definition: 'Tryptophan metabolism pathway linking inflammation to glutamate changes' },
        { term: 'subgenual anterior cingulate', definition: 'Brain region hyperactive in depression, target for DBS' },
        { term: 'augmentation', definition: 'Adding a second medication to enhance antidepressant response' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9 - validated depression screening and monitoring tool' },
        { term: 'brexanolone', definition: 'IV neurosteroid FDA-approved for postpartum depression' },
      ],
      clinicalNotes: 'Treatment selection should consider: prior response, family history of response, side effect profile, comorbidities, drug interactions, patient preference, and cost. Always reassess diagnosis if treatment-resistant - consider bipolar spectrum, personality factors, ongoing stressors, substance use.',
    },
    5: {
      level: 5,
      summary: 'Contemporary approaches to depression emphasize dimensional phenotyping, biomarker-guided treatment selection, and novel mechanisms targeting glutamate, neuroplasticity, and neuroinflammation. Integration of psychotherapy mechanisms with neuroscience informs precision psychiatry.',
      explanation: `**Precision Psychiatry Approaches:**

*Phenotypic Subtyping:*
- Anxious depression: Higher anxiety, worse prognosis
- Anhedonic depression: Reward circuit dysfunction
- Inflammatory depression: Elevated CRP/cytokines
- Atypical depression: Reversed vegetative symptoms
- Melancholic depression: Severe anhedonia, psychomotor changes

*Biomarker Research:*
- CRP > 3 mg/L may predict better response to anti-inflammatory augmentation
- EEG markers (rostral ACC activity) may predict antidepressant response
- fMRI: Subgenual ACC connectivity predicts CBT vs medication response
- Not yet validated for clinical use

*Pharmacogenomics:*
- CYP2D6 and CYP2C19 genotyping
- Influences drug metabolism (poor, intermediate, extensive, ultrarapid)
- Clinical utility emerging but not definitive
- Consider for treatment-resistant cases

**Novel Therapeutic Mechanisms:**

*Glutamate/NMDA Pathway:*
- Ketamine: NMDA antagonist, rapid antidepressant effect
  - Single infusion: Response within hours
  - Mechanism: AMPA activation → BDNF → synaptogenesis
  - Dissociative effects, abuse potential
- Esketamine (Spravato): S-enantiomer, intranasal, FDA-approved for TRD
  - REMS program due to sedation, dissociation, abuse potential
  - Given in certified healthcare settings

*Psychedelics:*
- Psilocybin: 5-HT2A agonist, breakthrough therapy designation for TRD
  - Mechanism: Increased neuroplasticity, disrupts DMN
  - Requires therapeutic context
  - Duration: Single or few sessions
- MDMA: Not FDA-approved for depression (PTSD focus)

*Neurosteroids:*
- Brexanolone: GABA-A positive allosteric modulator
  - FDA-approved for postpartum depression
  - IV infusion over 60 hours
- Zuranolone: Oral neurosteroid in development

**Neuromodulation:**

*Electroconvulsive Therapy (ECT):*
- Most effective treatment for severe/TRD
- Response rate: 70-90% in appropriate patients
- Mechanism: Seizure → neuroplasticity, neurotransmitter changes
- Cognitive side effects (memory) often transient
- Maintenance ECT for relapse prevention

*Transcranial Magnetic Stimulation (TMS):*
- FDA-approved for TRD
- Standard: Left DLPFC, high frequency
- Deep TMS, theta burst protocols
- Non-invasive, good tolerability
- Less effective than ECT

*Experimental:*
- Deep brain stimulation (subgenual ACC, NAc)
- Vagus nerve stimulation
- Focused ultrasound

**Psychotherapy Neuroscience:**

*CBT Mechanisms:*
- Reduces amygdala reactivity
- Increases prefrontal-amygdala connectivity
- Normalizes anterior cingulate function
- Structural changes in hippocampus

*Behavioral Activation:*
- Engages reward circuitry
- Increases striatal activity
- Breaks avoidance patterns

**Integration with Staging Models:**

Early intervention paradigm:
- Subsyndromal → syndromal → treatment-resistant → chronic
- Earlier treatment associated with better outcomes
- Prevention trials in high-risk individuals

**Emerging Research:**

- Gut-brain axis: Microbiome-targeted interventions
- Circadian interventions: Light therapy, wake therapy
- Digital therapeutics: App-based CBT
- Closed-loop neuromodulation
- Combination psychedelic + psychotherapy protocols

**Quality Metrics:**

- Time to treatment initiation
- Measurement-based care implementation
- Response and remission rates
- Relapse rates
- Functional outcomes`,
      keyTerms: [
        { term: 'precision psychiatry', definition: 'Tailoring treatment based on individual biological and clinical characteristics' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA program for safe use of certain medications' },
        { term: 'theta burst stimulation', definition: 'Accelerated TMS protocol with faster treatment delivery' },
        { term: 'zuranolone', definition: 'Oral neurosteroid in development for depression' },
        { term: 'staging model', definition: 'Framework viewing depression as progressing through stages requiring different interventions' },
      ],
      clinicalNotes: `Current evidence-based practice:
- Measurement-based care improves outcomes (PHQ-9 at each visit)
- Combination therapy superior for moderate-severe depression
- ECT remains gold standard for severe/treatment-resistant
- Esketamine available but with significant restrictions
- Psilocybin: Promising but not yet approved

Key considerations:
- Treatment resistance often reflects inadequate trials, misdiagnosis, or comorbidity
- Suicide risk requires ongoing assessment
- Maintenance treatment prevents relapse
- Patient preference affects adherence and outcomes`,
    },
  },

  media: [
    {
      id: 'depression-symptoms-infographic',
      type: 'diagram',
      filename: 'depression_symptoms.svg',
      title: 'Signs and Symptoms of Depression',
      description: 'Visual overview of emotional, cognitive, physical, and behavioral symptoms',
    },
    {
      id: 'depression-treatment-pathway',
      type: 'diagram',
      filename: 'depression_treatment_algorithm.svg',
      title: 'Depression Treatment Algorithm',
      description: 'Decision tree for depression treatment based on severity and response',
    },
  ],

  citations: [
    {
      id: 'dsm5-mdd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Depressive Disorders',
    },
    {
      id: 'apa-depression-guidelines',
      type: 'article',
      title: 'Practice Guideline for the Treatment of Patients With Major Depressive Disorder',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Association',
      url: 'https://psychiatryonline.org/guidelines',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-anxiety', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-bipolar', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder' },
    { targetId: 'mental-health-psychiatric-medications', targetType: 'topic', relationship: 'see-also', label: 'Psychiatric Medications' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'see-also', label: 'Psychotherapy Types' },
    { targetId: 'mental-health-suicidal-ideation', targetType: 'topic', relationship: 'see-also', label: 'Suicidal Ideation - When to Get Help' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'mood-disorders'],
    keywords: ['depression', 'major depression', 'MDD', 'antidepressants', 'CBT', 'psychotherapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default depressionContent;
