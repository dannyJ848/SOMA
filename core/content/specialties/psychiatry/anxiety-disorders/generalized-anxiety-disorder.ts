/**
 * Generalized Anxiety Disorder (GAD)
 *
 * Comprehensive educational content on GAD,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const generalizedAnxietyDisorderContent: EducationalContent = {
  id: 'psychiatry-generalized-anxiety-disorder',
  type: 'condition',
  name: 'Generalized Anxiety Disorder',
  alternateNames: ['GAD', 'Chronic Anxiety', 'Generalized Anxiety'],

  levels: {
    1: {
      level: 1,
      summary: 'Generalized Anxiety Disorder (GAD) is when a person worries excessively about many different things almost every day, and the worry is hard to control and causes physical symptoms.',
      explanation: `Everyone worries sometimes - about school, friends, or family. But with Generalized Anxiety Disorder, the worry is much more intense and happens almost every day for months.

**What GAD Feels Like:**

- Worrying a LOT about many different things
- Having trouble stopping the worry even when you try
- Feeling restless or on edge
- Getting tired easily
- Trouble concentrating or mind going blank
- Feeling irritable
- Muscle tension (tight shoulders, headaches)
- Sleep problems

**The Worry is Different:**

With GAD, the worry is:
- About many things (not just one thing)
- Out of proportion (worrying a lot about small things)
- Hard to control (can't just "turn it off")
- Happens most days for 6 months or more

**Important to Know:**

- GAD is NOT just being a "worrier" or "nervous person"
- It's a medical condition that affects the brain
- It's very common - about 3% of people have it
- It's NOT your fault
- It's very treatable!

**What Causes GAD:**

- Brain chemistry (imbalance of chemicals that control fear and worry)
- Genetics (can run in families)
- Life experiences and stress
- Personality (some people are naturally more prone to worry)

**Treatment Works:**

- Therapy (especially CBT - learning to change worry patterns)
- Medication (helps calm the worry response)
- Relaxation techniques
- Exercise
- Good sleep habits`,
      keyTerms: [
        { term: 'anxiety', definition: 'A feeling of worry, nervousness, or fear about something' },
        { term: 'GAD', definition: 'Generalized Anxiety Disorder - excessive worry about many things that is hard to control' },
        { term: 'CBT', definition: 'Cognitive Behavioral Therapy - a type of therapy that helps change negative thinking patterns' },
      ],
      analogies: [
        'GAD is like having a smoke alarm that goes off when there is no smoke - your brain\'s alarm system is too sensitive.',
        'Normal worry is like a wave that comes and goes. GAD worry is like being stuck in a whirlpool.',
      ],
      examples: [
        'A person with GAD might worry for hours about a small mistake at work, imagining they will be fired.',
        'They might check their phone constantly, worried something bad has happened to family members.',
        'Physical symptoms like stomachaches before nothing particularly stressful is happening.',
      ],
    },
    2: {
      level: 2,
      summary: 'GAD is characterized by excessive, difficult-to-control worry about multiple life domains for at least 6 months, accompanied by physical symptoms like muscle tension, fatigue, and sleep disturbance.',
      explanation: `**Core Features:**

- Excessive anxiety and worry about multiple events or activities
- Worry is out of proportion to actual likelihood or impact
- Difficulty controlling the worry
- Duration: at least 6 months, more days than not
- Causes significant distress or impairment

**Associated Symptoms (need 3+ for adults):**
1. Restlessness or feeling keyed up
2. Being easily fatigued
3. Difficulty concentrating or mind going blank
4. Irritability
5. Muscle tension
6. Sleep disturbance

**Distinguishing GAD from Normal Worry:**

| Normal Worry | GAD |
|--------------|-----|
| Specific trigger | Multiple topics |
| Doesn't interfere with daily life | Interferes significantly |
| Can be controlled | Hard to control |
| Doesn't cause physical symptoms | Causes physical symptoms |
| Time-limited | Chronic (6+ months) |

**Common Worry Themes:**
- Work/school performance
- Health (self and family)
- Finances
- Minor matters (being late, household tasks)
- World events

**Epidemiology:**
- Lifetime prevalence: ~6%
- More common in women (2:1)
- Average age of onset: 30 years
- Highly comorbid with depression (60%) and other anxiety disorders

**Causes - Biopsychosocial Model:**

*Biological:*
- Dysregulation of GABA and serotonin systems
- Amygdala hyperactivity
- Prefrontal cortex dysfunction
- Genetic factors (heritability ~30%)

*Psychological:*
- Intolerance of uncertainty
- Negative beliefs about worry
- Cognitive biases (overestimating threat)
- Experiential avoidance

*Social:*
- Early life adversity
- Insecure attachment
- Chronic stress

**Treatment:**

*Psychotherapy:*
- CBT (first-line)
- Applied relaxation
- Acceptance and Commitment Therapy (ACT)
- Mindfulness-based approaches

*Medications:*
- SSRIs (escitalopram, sertraline)
- SNRIs (venlafaxine, duloxetine)
- Buspirone
- Benzodiazepines (short-term only, avoid if possible)`,
      keyTerms: [
        { term: 'intolerance of uncertainty', definition: 'Difficulty accepting that negative events might occur, leading to excessive worry' },
        { term: 'GABA', definition: 'A brain chemical that reduces anxiety and promotes calm; often low in GAD', pronunciation: 'GAB-ah' },
        { term: 'buspirone', definition: 'An anti-anxiety medication that works on serotonin, used for GAD', pronunciation: 'byoo-SPY-rone' },
      ],
      analogies: [
        'The worry in GAD is like an overactive immune system - it\'s trying to protect you but ends up causing problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'GAD involves dysfunction in prefrontal-amygdala circuitry and GABAergic/serotonergic systems, with treatment including CBT addressing intolerance of uncertainty and pharmacotherapy with SSRIs/SNRIs or buspirone.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Excessive anxiety and worry about multiple events/activities, more days than not, for at least 6 months
B. Difficulty controlling the worry
C. 3+ symptoms (1 for children):
   - Restlessness/feeling on edge
   - Being easily fatigued
   - Difficulty concentrating/mind going blank
   - Irritability
   - Muscle tension
   - Sleep disturbance
D. Causes significant distress or functional impairment
E. Not attributable to substances or medical conditions
F. Not better explained by another mental disorder

**Differential Diagnosis:**
- Medical conditions: Hyperthyroidism, pheochromocytoma, caffeine
- Other anxiety disorders: Panic disorder, social anxiety
- Mood disorders: Depression, bipolar
- Adjustment disorder with anxiety
- OCD (if worry is about obsessions)

**Neurobiological Mechanisms:**

*GABAergic Dysfunction:*
- Reduced GABA-A receptor binding (PET studies)
- Decreased GABA levels in cortex
- Target of benzodiazepines

*Serotonergic Dysfunction:*
- Altered 5-HT1A receptor function
- Target of SSRIs and buspirone

*Noradrenergic Hyperactivity:*
- Elevated norepinephrine
- Target of SNRIs

*Neural Circuitry:*
- Amygdala hyperactivity
- Reduced prefrontal regulatory control
- Altered anterior cingulate cortex function
- Bed nucleus of stria terminalis (sustained anxiety)

**Psychological Models:**

*Intolerance of Uncertainty (IU) Model:*
- Core feature of GAD
- Uncertainty perceived as threatening
- Worry as attempt to prepare for negative outcomes
- Treatment: Exposure to uncertainty

*Cognitive Avoidance Model:*
- Worry is verbal-linguistic, reduces imagery
- Avoids emotional processing
- Maintains anxiety through avoidance

*Metacognitive Model:*
- Positive beliefs about worry (keeps me safe)
- Negative beliefs about worry (worry is harmful)
- Creates worry about worry

**Treatment:**

*CBT for GAD:*
- Psychoeducation
- Cognitive restructuring
- Worry exposure
- Problem-solving training
- Relaxation training
- Addressing intolerance of uncertainty

*Pharmacotherapy:*
- First-line: SSRIs, SNRIs
- Response in 4-6 weeks
- Duration: 6-12 months after response
- Buspirone: Alternative, augmentation
- Pregabalin: Used in Europe, calcium channel modulator
- Benzodiazepines: Effective but dependence risk

*Response Rates:*
- CBT: ~50% response
- Medication: ~50% response
- Combined: May be superior`,
      keyTerms: [
        { term: 'bed nucleus of stria terminalis', definition: 'Brain structure mediating sustained anxiety responses (vs. acute fear)' },
        { term: 'metacognition', definition: 'Thinking about thinking; beliefs about one\'s own thoughts', pronunciation: 'met-ah-kog-NIH-shun' },
        { term: 'pregabalin', definition: 'Calcium channel modulator used for GAD in Europe', pronunciation: 'preh-GAB-ah-lin' },
      ],
    },
    4: {
      level: 4,
      summary: 'GAD pathophysiology involves cortico-limbic circuit dysfunction, GABA/glutamate imbalance, and HPA axis dysregulation, with treatment targeting cognitive processes like intolerance of uncertainty alongside pharmacological modulation of anxiety circuits.',
      explanation: `**Genetic Factors:**
- Heritability: 30-40%
- Shared genetic liability with depression
- Polygenic architecture
- Key genes: NPSR1 (neuropeptide S receptor), HTR1A, MAOA

**Neuroimaging Findings:**

*Structural:*
- Amygdala volume changes (inconsistent)
- Reduced prefrontal gray matter
- Anterior cingulate abnormalities

*Functional:*
- Amygdala hyperreactivity to threat
- Reduced prefrontal regulation
- Increased activity in worry network
- Altered default mode network

*Connectivity:*
- Reduced prefrontal-amygdala connectivity
- Increased amygdala-insula coupling
- Aberrant salience network function

**Neurotransmitter Systems:**

*GABAergic:*
- Reduced GABA-A receptor binding (BDZ site)
- Low GABA in occipital cortex (MRS)
- Benzodiazepine efficacy supports role
- Neurosteroids (allopregnanolone) under investigation

*Glutamatergic:*
- Elevated glutamate (some studies)
- Glutamate-GABA imbalance
- Riluzole trials (glutamate modulator)

*Serotonergic:*
- 5-HT1A autoreceptor sensitivity
- Reduced 5-HT1A binding in PET
- SSRI efficacy supports role
- Buspirone (5-HT1A partial agonist)

*Noradrenergic:*
- Locus coeruleus hyperactivity
- Elevated CSF norepinephrine
- SNRI efficacy

*Other Systems:*
- CRH/HPA axis activation
- Neuropeptide Y (anxiolytic)
- Neuropeptide S (arousal/anxiety)

**Pharmacotherapy Details:**

*SSRIs/SNRIs:*
- Escitalopram, sertraline (FDA approved)
- Duloxetine, venlafaxine (FDA approved)
- Start low, titrate slowly (may initially increase anxiety)
- 4-6 weeks for response
- Treatment duration: 12+ months

*Buspirone:*
- 5-HT1A partial agonist
- No dependence, no sedation
- Takes 2-4 weeks for effect
- Can augment SSRI/SNRI

*Pregabalin:*
- Alpha-2-delta calcium channel modulator
- Approved in Europe, not US for GAD
- Fast onset
- Some abuse potential

*Benzodiazepines:*
- Rapid efficacy
- Tolerance, dependence, withdrawal
- Cognitive impairment
- Reserve for short-term or refractory

*Hydroxyzine:*
- H1 antihistamine
- Short-term use
- Sedating

**Treatment-Resistant GAD:**
- Ensure adequate trial (dose, duration)
- Add/switch medications
- Consider benzodiazepine augmentation carefully
- Adjunctive psychotherapy
- Pregabalin, quetiapine (off-label)

**Comorbidity Management:**
- Depression: Treat both (SSRIs address both)
- Substance use: Common, may require specialized treatment
- Other anxiety disorders: Often co-occur`,
      keyTerms: [
        { term: 'alpha-2-delta ligand', definition: 'Medication targeting voltage-gated calcium channels (pregabalin, gabapentin)' },
        { term: 'neuropeptide Y', definition: 'Brain peptide with anxiolytic properties, reduced in anxiety disorders' },
        { term: 'magnetic resonance spectroscopy', definition: 'MRI technique measuring brain chemical concentrations (GABA, glutamate)', pronunciation: 'spek-TROS-koh-pee' },
      ],
      clinicalNotes: 'SSRIs/SNRIs remain first-line despite benzodiazepines being faster. CBT should be offered to all patients. Treatment resistance common - 50% don\'t achieve remission. Consider comorbid depression, substance use. Benzodiazepines problematic long-term but sometimes necessary.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GAD research focuses on dimensional phenotyping, predictive processing models, biomarker development, and novel treatments targeting glutamatergic, neurosteroid, and cannabinoid systems.',
      explanation: `**Transdiagnostic Perspective:**

*Negative Valence Domain (RDoC):*
- Acute threat (fear) vs. potential threat (anxiety)
- GAD = sustained potential threat response
- Bed nucleus of stria terminalis (BNST) critical
- Shared neurobiology with depression

*Dimension: Anxious Apprehension:*
- Verbal-linguistic worry
- Left inferior frontal gyrus activation
- Distinct from anxious arousal
- May guide treatment selection

**Predictive Processing Models:**
- Anxiety as aberrant precision weighting
- Overweighting of threat predictions
- Intolerance of uncertainty = need for certainty
- Computational psychiatry applications

**Biomarker Development:**

*Neuroimaging:*
- Amygdala reactivity patterns
- Prefrontal-amygdala connectivity
- Network-level signatures
- Potential for treatment matching

*Peripheral:*
- Inflammatory markers
- HPA axis measures
- Heart rate variability
- No validated diagnostic biomarkers yet

*Genetic/Epigenetic:*
- Polygenic risk scores
- Methylation patterns
- Gene expression profiles

**Novel Therapeutics:**

*Glutamatergic:*
- Riluzole: Glutamate modulator (some efficacy)
- Ketamine: Case reports/small studies
- D-cycloserine: Augments exposure therapy

*GABAergic/Neurosteroids:*
- SAGE-217 (zuranolone): GABA-A modulator
- Allopregnanolone analogs
- Positive allosteric modulators (less abuse potential)

*Cannabinoid System:*
- CBD (cannabidiol): Anxiolytic properties
- Endocannabinoid modulation
- FAAH inhibitors (discontinued due to toxicity)

*Serotonergic:*
- Vilazodone, vortioxetine (newer antidepressants)
- 5-HT1A biased agonists
- Psilocybin (research early)

*Other Targets:*
- Orexin antagonists
- CRH antagonists (development challenges)
- Neuropeptide Y agonists
- Oxytocin (social anxiety primarily)

**Psychotherapy Advances:**

*Transdiagnostic Treatments:*
- Unified Protocol (UP)
- Targets core processes across anxiety disorders
- Emotion regulation focus

*Technology-Assisted:*
- Computerized CBT (effective)
- Virtual reality exposure
- Attention bias modification (inconsistent results)
- Digital phenotyping

*Mindfulness-Based:*
- MBSR, MBCT for anxiety
- Targets experiential avoidance
- Changes relationship to worry

**Precision Medicine:**

*Treatment Selection:*
- Inflammatory phenotype → anti-inflammatory augmentation?
- High intolerance of uncertainty → specific CBT modules
- Neuroimaging predictors under investigation

*Pharmacogenomics:*
- CYP2D6, CYP2C19 for metabolism
- 5-HTTLPR (inconsistent results)
- Limited clinical utility currently

**Future Directions:**

1. Dimensional classification incorporating GAD features
2. Biomarker-guided treatment selection
3. Novel GABAergic agents without abuse potential
4. Glutamate modulators
5. Neuromodulation (TMS for anxiety)
6. Digital therapeutics
7. Combination optimization studies
8. Prevention strategies`,
      keyTerms: [
        { term: 'predictive processing', definition: 'Theory that brain constantly generates predictions about the world, anxiety reflects aberrant predictions' },
        { term: 'BNST', definition: 'Bed nucleus of stria terminalis, extended amygdala structure mediating sustained anxiety' },
        { term: 'Unified Protocol', definition: 'Transdiagnostic CBT treatment targeting emotion dysregulation across disorders' },
        { term: 'attention bias modification', definition: 'Training to reduce attention to threatening stimuli' },
      ],
      clinicalNotes: `Current clinical practice:
- First-line: SSRI/SNRI + CBT
- Duration: At least 12 months after response
- Treatment resistance: Consider augmentation, switch, combination
- Benzodiazepines: Short-term, specific situations only
- Always address comorbidities

Emerging approaches:
- Transdiagnostic treatment (Unified Protocol)
- Digital/app-based CBT as adjunct
- Mindfulness-based approaches
- Pregabalin in selected cases

Research priorities:
- Biomarkers for treatment selection
- Novel anxiolytics without dependence
- Mechanism-based treatment matching
- Prevention in high-risk populations`,
    },
  },

  media: [
    {
      id: 'gad-neurobiology-diagram',
      type: 'diagram',
      filename: 'gad_neurobiology.svg',
      title: 'Neurobiology of GAD',
      description: 'Brain circuits and neurotransmitter systems involved in GAD',
    },
  ],

  citations: [
    {
      id: 'dsm-5-gad',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'anxiety-handbook',
      type: 'textbook',
      title: 'Anxiety and Its Disorders',
      authors: ['Barlow DH'],
      source: 'Guilford Press',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-panic-disorder', targetType: 'condition', relationship: 'related', label: 'Panic Disorder' },
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
    { targetId: 'psychiatry-anxiolytics', targetType: 'topic', relationship: 'see-also', label: 'Anxiolytics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'anxiety disorders', 'pharmacology'],
    keywords: ['anxiety', 'GAD', 'worry', 'GABA', 'CBT'],
    clinicalRelevance: 'high',
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

export default generalizedAnxietyDisorderContent;
