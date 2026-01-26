/**
 * Anxiety Disorders - Patient Education Content
 *
 * Comprehensive education about anxiety disorders including GAD, panic disorder,
 * social anxiety, and specific phobias. Emphasizes that anxiety disorders are
 * treatable and common.
 */

import { EducationalContent } from '../../types';

export const anxietyDisordersContent: EducationalContent = {
  id: 'mental-health-anxiety-disorders',
  type: 'condition',
  name: 'Anxiety Disorders',
  alternateNames: ['Generalized Anxiety Disorder', 'GAD', 'Panic Disorder', 'Social Anxiety', 'Phobias'],

  levels: {
    1: {
      level: 1,
      summary: 'Anxiety disorders cause intense, ongoing worry or fear that interferes with daily life. They are very common and very treatable.',
      explanation: `**What Are Anxiety Disorders?**

Everyone feels anxious sometimes - before a test, a job interview, or when facing a problem. That is normal. But anxiety disorders are different. They cause intense fear or worry that:
- Happens often or most of the time
- Seems too strong for the situation
- Gets in the way of daily life
- Does not go away on its own

**Types of Anxiety Disorders:**

**Generalized Anxiety Disorder (GAD):**
- Constant worry about many things
- Hard to control the worry
- Feeling on edge, tired, or having trouble sleeping
- Worrying about everyday things like work, health, family

**Panic Disorder:**
- Sudden attacks of intense fear (panic attacks)
- Heart racing, trouble breathing, sweating
- Feeling like something terrible is happening
- Fear of having another attack

**Social Anxiety Disorder:**
- Intense fear of social situations
- Worry about being judged or embarrassed
- Avoiding parties, meetings, or talking to people
- Physical symptoms when in social situations

**Specific Phobias:**
- Intense fear of specific things (heights, spiders, flying, needles)
- Fear is much stronger than the actual danger
- Avoiding the feared thing
- Causes significant distress

**Important Facts About Anxiety:**

- Anxiety disorders are the MOST COMMON mental health conditions
- About 30% of people experience an anxiety disorder at some point
- They are NOT a sign of weakness
- They are highly treatable
- Most people get much better with treatment

**What Causes Anxiety Disorders?**

It is usually a mix of:
- Brain chemistry (how your brain handles stress)
- Family history (anxiety can run in families)
- Life experiences (stressful or scary events)
- Personality (some people are naturally more anxious)

**Getting Help:**

Effective treatments include:
- **Therapy**: Learning to manage anxiety (especially CBT)
- **Medications**: Can help reduce anxiety symptoms
- **Lifestyle changes**: Exercise, sleep, reducing caffeine
- **Relaxation techniques**: Deep breathing, mindfulness

You do not have to live with overwhelming anxiety. Help is available, and treatment works.`,
      keyTerms: [
        { term: 'anxiety disorder', definition: 'A condition that causes excessive worry or fear that interferes with daily life' },
        { term: 'panic attack', definition: 'A sudden episode of intense fear with physical symptoms like racing heart and trouble breathing' },
        { term: 'phobia', definition: 'An intense, irrational fear of a specific thing or situation' },
        { term: 'social anxiety', definition: 'Fear of being judged or embarrassed in social situations' },
      ],
      analogies: [
        'Normal anxiety is like a smoke alarm that goes off when there is a fire. An anxiety disorder is like an alarm that goes off when you are just making toast.',
        'Having an anxiety disorder is like having your brain stuck on "high alert" mode, even when there is no danger.',
        'Panic attacks feel like your body is reacting to a tiger, even though there is no tiger.',
      ],
      examples: [
        'Someone with GAD might spend hours worrying about whether they locked the door, even though they checked three times.',
        'A person with social anxiety might avoid going to a party because they are terrified of saying something embarrassing.',
        'Someone with panic disorder might avoid driving because they are afraid of having a panic attack behind the wheel.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anxiety disorders involve excessive activation of the fear response, affecting the brain, body, and behavior. Main types include GAD, panic disorder, social anxiety disorder, and specific phobias. Treatment includes therapy (especially CBT) and medications.',
      explanation: `**Understanding the Anxiety Response:**

Anxiety is the body's natural alarm system. When we sense danger, our brain activates the "fight-or-flight" response:
- Heart rate increases
- Breathing becomes faster
- Muscles tense
- We become hyper-alert

In anxiety disorders, this system becomes overactive, triggering in situations that are not truly dangerous.

**Generalized Anxiety Disorder (GAD):**

*Key Features:*
- Excessive worry about multiple areas (work, health, family, finances)
- Difficult to control the worry
- Present more days than not for at least 6 months

*Physical Symptoms:*
- Restlessness, feeling keyed up
- Fatigue
- Difficulty concentrating
- Irritability
- Muscle tension
- Sleep disturbance

**Panic Disorder:**

*Panic Attacks Include:*
- Pounding heart or racing heartbeat
- Sweating
- Trembling or shaking
- Shortness of breath
- Chest pain or discomfort
- Nausea
- Dizziness or lightheadedness
- Chills or hot flashes
- Numbness or tingling
- Feeling detached from reality
- Fear of losing control or dying

*Panic Disorder Diagnosis:*
- Recurrent unexpected panic attacks
- Persistent concern about future attacks
- Significant behavior changes to avoid attacks
- May develop agoraphobia (avoiding places where escape might be difficult)

**Social Anxiety Disorder:**

*Core Features:*
- Fear of social or performance situations
- Fear of negative evaluation by others
- Avoidance of social situations
- Physical symptoms in social settings (blushing, trembling, sweating)

*Common Feared Situations:*
- Public speaking
- Meeting new people
- Eating or drinking in public
- Being the center of attention
- Conversations with authority figures

**Specific Phobias:**

*Common Types:*
- Animal (spiders, snakes, dogs)
- Natural environment (heights, storms, water)
- Blood-injection-injury (needles, medical procedures)
- Situational (flying, elevators, enclosed spaces)
- Other (choking, vomiting, loud noises)

*Characteristics:*
- Immediate anxiety response to phobic stimulus
- Recognition that fear is excessive (in adults)
- Avoidance or endurance with intense distress
- Significant impairment in functioning

**Treatment Approaches:**

*Cognitive Behavioral Therapy (CBT):*
- Most effective psychological treatment
- Identifies and challenges anxious thoughts
- Gradual exposure to feared situations
- Builds coping skills

*Medications:*
- SSRIs (first-line): sertraline, escitalopram, paroxetine
- SNRIs: venlafaxine, duloxetine
- Benzodiazepines: Short-term use only (risk of dependence)
- Buspirone: For GAD, non-addictive
- Beta-blockers: For performance anxiety

*Lifestyle Modifications:*
- Regular exercise (reduces anxiety symptoms)
- Adequate sleep
- Limiting caffeine and alcohol
- Stress management techniques
- Social support`,
      keyTerms: [
        { term: 'fight-or-flight', definition: 'The body\'s automatic response to perceived danger, preparing to fight or run' },
        { term: 'agoraphobia', definition: 'Fear of situations where escape might be difficult or help unavailable during a panic attack', pronunciation: 'ag-or-ah-FOH-bee-ah' },
        { term: 'exposure therapy', definition: 'Gradually facing feared situations to reduce anxiety over time' },
        { term: 'CBT', definition: 'Cognitive Behavioral Therapy - a type of therapy that addresses thoughts and behaviors' },
        { term: 'SSRI', definition: 'Selective Serotonin Reuptake Inhibitor - a type of antidepressant also used for anxiety' },
      ],
      analogies: [
        'Exposure therapy is like gradually adjusting to cold water - it is uncomfortable at first, but your body adapts.',
        'Anxious thoughts are like a car alarm that goes off too easily - CBT helps recalibrate the alarm.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anxiety disorders involve hyperactivity of the amygdala-centered fear circuit with deficient prefrontal regulation. GAD, panic disorder, social anxiety disorder, and specific phobias have distinct features but shared neurobiology. First-line treatments include SSRIs/SNRIs and CBT with exposure.',
      explanation: `**Neurobiological Basis:**

*Fear Circuit:*
- Amygdala: Central hub for fear processing
- Prefrontal cortex: Top-down regulation of fear response
- Hippocampus: Context and memory for fear
- Insula: Interoceptive awareness (bodily sensations)
- Bed nucleus of stria terminalis: Sustained anxiety

*In Anxiety Disorders:*
- Amygdala hyperreactivity
- Reduced prefrontal-amygdala connectivity
- Impaired fear extinction
- Enhanced threat detection

*Neurotransmitter Systems:*
- GABA: Primary inhibitory neurotransmitter, reduced in anxiety
- Serotonin: Modulates fear circuits, target of SSRIs
- Norepinephrine: Arousal and stress response
- Glutamate: Excitatory transmission, role in fear learning

**DSM-5 Diagnostic Criteria:**

*Generalized Anxiety Disorder:*
- Excessive anxiety/worry about multiple events/activities
- Present more days than not for ≥6 months
- Difficult to control the worry
- 3+ of: restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance
- Significant distress or impairment
- Not due to substances or medical condition

*Panic Disorder:*
- Recurrent unexpected panic attacks
- ≥1 month of: concern about additional attacks, worry about consequences, significant behavioral changes
- Panic attack: Abrupt surge of intense fear peaking within minutes with 4+ symptoms

*Social Anxiety Disorder:*
- Marked fear of social situations with possible scrutiny
- Fear of negative evaluation
- Social situations almost always provoke anxiety
- Avoidance or endured with intense distress
- Out of proportion to actual threat
- Duration ≥6 months
- Significant impairment

*Specific Phobia:*
- Marked fear about a specific object/situation
- Phobic stimulus almost always provokes immediate anxiety
- Avoidance or endured with intense anxiety
- Out of proportion to danger
- Duration ≥6 months
- Significant impairment

**Pharmacological Treatment:**

*First-Line (SSRIs/SNRIs):*
- GAD: Sertraline, escitalopram, duloxetine, venlafaxine
- Panic Disorder: Sertraline, paroxetine, fluoxetine, venlafaxine
- Social Anxiety: Sertraline, paroxetine, venlafaxine
- Specific Phobias: Generally not first-line; exposure therapy preferred

*Treatment Parameters:*
- Start low, go slow (anxiety patients sensitive to activation)
- Adequate trial: 8-12 weeks at therapeutic dose
- Continue 12 months after remission
- Gradual taper when discontinuing

*Benzodiazepines:*
- Rapid onset; useful for acute anxiety
- Not first-line due to dependence risk
- Consider for bridging until SSRI effective
- Long-term use generally avoided

*Other Medications:*
- Buspirone: Non-sedating, no dependence; slow onset (GAD)
- Hydroxyzine: Antihistamine, PRN anxiety
- Pregabalin: GAD (approved in Europe)
- Beta-blockers: Performance anxiety only

**Psychotherapy:**

*CBT with Exposure:*
- Gold standard psychological treatment
- Components:
  - Psychoeducation
  - Cognitive restructuring
  - Exposure therapy (systematic desensitization, flooding)
  - Response prevention
  - Relaxation training

*Exposure Therapy Principles:*
- Habituation: Anxiety decreases with prolonged exposure
- Extinction: New learning overrides fear memory
- Self-efficacy: Builds confidence in coping

*Other Approaches:*
- Acceptance and Commitment Therapy (ACT)
- Mindfulness-Based Stress Reduction (MBSR)
- Applied relaxation

**Comorbidities:**

Common comorbid conditions:
- Depression (up to 60%)
- Other anxiety disorders
- Substance use disorders
- ADHD
- Personality disorders`,
      keyTerms: [
        { term: 'fear extinction', definition: 'Learning that a previously feared stimulus is no longer dangerous' },
        { term: 'habituation', definition: 'Decrease in response to a stimulus with repeated exposure' },
        { term: 'interoceptive', definition: 'Relating to sensations arising from within the body' },
        { term: 'systematic desensitization', definition: 'Gradual exposure to feared stimuli while maintaining relaxation' },
        { term: 'buspirone', definition: 'Non-benzodiazepine anxiolytic used for GAD' },
      ],
      clinicalNotes: 'Rule out medical causes of anxiety symptoms (hyperthyroidism, pheochromocytoma, cardiac arrhythmias, substance use/withdrawal). Caffeine and other stimulants can exacerbate anxiety. Benzodizepines should be used cautiously given dependence risk.',
    },
    4: {
      level: 4,
      summary: 'Anxiety disorder pathophysiology involves amygdala-prefrontal circuit dysfunction, altered GABA-glutamate balance, and fear conditioning/extinction abnormalities. Treatment targets these mechanisms through SSRIs (enhancing serotonergic modulation), exposure therapy (fear extinction learning), and anxiolytics (GABA-A modulation).',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Factors:*
- Heritability: 30-40%
- Polygenic architecture
- Key genes: SERT (5-HTTLPR), COMT, NPSR1, CRHR1
- Gene × environment interactions

*Fear Learning and Extinction:*
- Classical conditioning model of phobias
- Amygdala-dependent fear acquisition
- Prefrontal-dependent fear extinction
- Extinction is NEW learning, not erasing
- Context-dependent extinction (renewal, reinstatement)

*Neural Circuitry:*

Amygdala:
- Basolateral amygdala: Fear learning
- Central amygdala: Fear expression
- Hyperreactive in anxiety disorders
- Target of SSRIs, benzos

Prefrontal Cortex:
- Ventromedial PFC: Extinction recall
- Dorsolateral PFC: Cognitive regulation
- Hypoactive in anxiety disorders
- Target of CBT, TMS

Hippocampus:
- Contextual fear processing
- Extinction context encoding
- Reduced volume in chronic anxiety

Insula:
- Interoceptive awareness
- Hyperactive in panic disorder
- Anticipatory anxiety

*Neurotransmitter Systems:*

GABA System:
- Primary inhibitory neurotransmitter
- GABA-A receptor: Benzodiazepine binding site
- Reduced GABA in anxiety
- Neurosteroids: Allopregnanolone

Glutamate System:
- NMDA receptors involved in fear learning and extinction
- D-cycloserine enhances extinction learning
- Potential target for novel treatments

Serotonin System:
- Modulates amygdala activity
- 5-HT1A receptors: Anxiolytic
- SSRIs reduce amygdala reactivity over time

Norepinephrine System:
- Locus coeruleus hyperactivity
- Increased arousal and vigilance
- Target of SNRIs, beta-blockers

**Treatment Mechanisms:**

*SSRIs:*
- Increase synaptic serotonin
- Reduce amygdala reactivity (weeks)
- Enhance prefrontal regulation
- May enhance neuroplasticity and extinction

*Benzodiazepines:*
- Positive allosteric modulators of GABA-A
- Rapid anxiolysis
- Tolerance, dependence, cognitive effects
- May impair extinction learning

*Exposure Therapy:*
- Activates fear circuit
- Promotes extinction learning
- Strengthens prefrontal control
- New inhibitory memory competes with fear memory

*Extinction Enhancement Strategies:*
- D-cycloserine: NMDA partial agonist, enhances extinction
- Yohimbine: Norepinephrine agonist, context-dependent effects
- Propranolol: Beta-blocker, reconsolidation disruption

**Special Considerations:**

*Panic Disorder:*
- Catastrophic misinterpretation of bodily sensations
- Interoceptive conditioning
- Interoceptive exposure crucial in treatment
- Respiratory sensitivity (CO2 challenge)

*Social Anxiety Disorder:*
- Interpretation biases
- Self-focused attention
- Safety behaviors maintain anxiety
- Cognitive restructuring + behavioral experiments

*Specific Phobias:*
- Exposure therapy highly effective
- One-session treatment for some phobias
- Medication generally not helpful
- Virtual reality exposure emerging

**Pharmacogenomics:**

- CYP2D6/CYP2C19 affect SSRI metabolism
- 5-HTTLPR may affect SSRI response (conflicting data)
- COMT val158met affects anxiety phenotype
- Clinical utility limited currently`,
      keyTerms: [
        { term: 'fear conditioning', definition: 'Learning to associate a neutral stimulus with a threat' },
        { term: 'reconsolidation', definition: 'Process by which retrieved memories become modifiable' },
        { term: 'D-cycloserine', definition: 'NMDA partial agonist that may enhance exposure therapy efficacy' },
        { term: 'interoceptive exposure', definition: 'Deliberately inducing feared bodily sensations to reduce fear' },
        { term: 'safety behaviors', definition: 'Actions taken to prevent feared outcomes that maintain anxiety' },
      ],
      clinicalNotes: 'Key treatment principles: 1) Start SSRIs at low dose to avoid initial activation/worsening, 2) Adequate trial is 8-12 weeks, 3) Combine medication with exposure-based therapy when possible, 4) Address avoidance behaviors, 5) Benzodiazepines can impair exposure therapy learning.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anxiety research integrates fear neuroscience with extinction-based interventions, targeting reconsolidation and enhancing neuroplasticity. Novel approaches include glutamate modulators, cannabinoid system interventions, and precision medicine based on biomarkers and computational phenotyping.',
      explanation: `**Translational Neuroscience:**

*Fear Extinction Neuroscience:*
- Infralimbic cortex (vmPFC homolog) → amygdala inhibition
- Extinction training increases PFC-amygdala connectivity
- NMDA-dependent plasticity in amygdala and PFC
- Brain-derived neurotrophic factor (BDNF) required for extinction

*Memory Reconsolidation:*
- Retrieved memories become labile
- Window for modification (approximately 6 hours)
- Propranolol during reconsolidation reduces fear
- Clinical translation: Reactivate fear memory + intervention
- Mixed clinical results to date

*Computational Psychiatry Approaches:*
- Reinforcement learning models of anxiety
- Altered threat learning parameters
- Increased learning rate for negative outcomes
- Bayesian models: Anxiety as altered precision weighting

**Novel Therapeutic Targets:**

*Glutamate System:*
- D-cycloserine: NMDA partial agonist
  - Enhances exposure therapy (meta-analysis support)
  - Dosing: 50mg 1 hour before session
  - May lose effect with repeated dosing
- Ketamine: Studied for anxiety, limited data

*Cannabinoid System:*
- Endocannabinoids facilitate fear extinction
- CBD: Anxiolytic effects in preclinical models
- Clinical trials ongoing
- Challenges: Variability, regulation

*Neuropeptide Systems:*
- Neuropeptide Y: Resilience factor
- Oxytocin: May enhance social anxiety treatment
- CRH receptor antagonists: Clinical trials unsuccessful

*Other Targets:*
- HDAC inhibitors: Enhance extinction (preclinical)
- Anti-inflammatory agents: Subset of anxious patients
- Gut-brain axis interventions

**Neuromodulation:**

*Transcranial Magnetic Stimulation:*
- Right DLPFC targets: Under investigation
- mPFC stimulation to enhance extinction
- Limited FDA approval for anxiety

*Deep Brain Stimulation:*
- Ventral capsule/ventral striatum (VC/VS)
- Investigational for treatment-resistant OCD
- Anxiety improvement reported

*Transcranial Direct Current Stimulation:*
- Prefrontal stimulation during exposure
- Mixed results
- Research ongoing

**Precision Medicine:**

*Biomarker Development:*
- Startle response: Potentiated startle in anxiety
- Heart rate variability: Reduced in anxiety
- Cortisol response: Variable findings
- fMRI: Amygdala reactivity
- Not yet clinically validated

*Genetic Stratification:*
- Polygenic risk scores for research
- SERT genotype and treatment response (inconsistent)
- COMT and anxiety phenotypes
- Clinical utility limited

*Treatment Matching:*
- Predict CBT vs medication response
- fMRI biomarkers under investigation
- Cognitive processing markers
- Not yet ready for clinical use

**Digital and Technology-Enhanced Interventions:**

*Virtual Reality Exposure:*
- Height phobia: Well-validated
- Flying phobia: Evidence-based
- Social anxiety: Emerging
- PTSD: Research applications
- Advantages: Control, accessibility, safety

*App-Based Interventions:*
- CBT-based apps
- Exposure guidance
- Symptom monitoring
- Adjunctive use

*Attention Bias Modification:*
- Train attention away from threat
- Mixed efficacy data
- Combining with exposure may enhance

**Clinical Practice Integration:**

*Measurement-Based Care:*
- GAD-7 for generalized anxiety
- Panic Disorder Severity Scale
- Social Phobia Inventory (SPIN)
- Regular monitoring improves outcomes

*Stepped Care Models:*
- Step 1: Psychoeducation, self-help
- Step 2: Low-intensity CBT, digital interventions
- Step 3: Individual CBT, medication
- Step 4: Specialist treatment, combined approaches

*Treatment-Resistant Anxiety:*
- Reassess diagnosis
- Optimize current treatment
- Combine therapy + medication
- Consider augmentation (pregabalin, quetiapine, antipsychotics)
- Specialized programs

**Research Directions:**

- Precision exposure therapy
- Reconsolidation-based interventions
- Psychedelic-assisted therapy (psilocybin for anxiety)
- Transdiagnostic approaches
- Prevention programs for high-risk individuals
- Real-time fMRI neurofeedback`,
      keyTerms: [
        { term: 'precision exposure', definition: 'Tailored exposure therapy based on individual fear learning parameters' },
        { term: 'attention bias modification', definition: 'Training to shift attention away from threatening stimuli' },
        { term: 'stepped care', definition: 'Delivering least intensive effective treatment first, stepping up as needed' },
        { term: 'HDAC inhibitors', definition: 'Histone deacetylase inhibitors that enhance memory-related neuroplasticity' },
        { term: 'transdiagnostic', definition: 'Addressing common mechanisms across different anxiety disorders' },
      ],
      clinicalNotes: `Current clinical recommendations:
- First-line: SSRIs/SNRIs + CBT with exposure
- D-cycloserine augmentation of exposure: Consider for specific phobias
- VR exposure: Evidence for specific phobias
- Digital interventions: Adjunctive use

Research vs practice gap:
- Many novel approaches remain investigational
- Reconsolidation-based treatments not ready for clinic
- Biomarkers not validated for treatment selection
- Individual response prediction remains limited

Key clinical points:
- Benzodiazepines: May impair extinction learning
- Complete avoidance prevents extinction
- Combine interoceptive and in-vivo exposure for panic
- Address safety behaviors in social anxiety`,
    },
  },

  media: [
    {
      id: 'anxiety-types-comparison',
      type: 'diagram',
      filename: 'anxiety_disorders_comparison.svg',
      title: 'Types of Anxiety Disorders',
      description: 'Visual comparison of GAD, panic disorder, social anxiety, and phobias',
    },
    {
      id: 'fight-flight-response',
      type: 'diagram',
      filename: 'fight_flight_response.svg',
      title: 'The Fight-or-Flight Response',
      description: 'How the body responds to perceived threat',
    },
  ],

  citations: [
    {
      id: 'dsm5-anxiety',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'craske-anxiety-treatment',
      type: 'textbook',
      title: 'Anxiety Disorders: Psychological Approaches to Theory and Treatment',
      authors: ['Craske MG'],
      source: 'Westview Press',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-ptsd', targetType: 'condition', relationship: 'related', label: 'PTSD' },
    { targetId: 'mental-health-ocd', targetType: 'condition', relationship: 'related', label: 'OCD' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'see-also', label: 'Psychotherapy Types' },
    { targetId: 'mental-health-stress-management', targetType: 'topic', relationship: 'see-also', label: 'Stress Management' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'anxiety'],
    keywords: ['anxiety', 'GAD', 'panic', 'social anxiety', 'phobias', 'CBT', 'exposure therapy'],
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

export default anxietyDisordersContent;
