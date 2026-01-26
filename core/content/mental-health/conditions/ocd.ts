/**
 * OCD - Patient Education Content
 *
 * Comprehensive education about Obsessive-Compulsive Disorder including
 * obsessions, compulsions, and evidence-based treatments.
 */

import { EducationalContent } from '../../types';

export const ocdContent: EducationalContent = {
  id: 'mental-health-ocd',
  type: 'condition',
  name: 'Obsessive-Compulsive Disorder',
  alternateNames: ['OCD', 'Obsessive Compulsive Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'OCD causes unwanted thoughts (obsessions) that lead to repetitive behaviors (compulsions). It is a treatable brain condition, not a personality quirk.',
      explanation: `**What Is OCD?**

OCD (Obsessive-Compulsive Disorder) is a condition where people have:
- **Obsessions**: Unwanted thoughts, images, or urges that cause anxiety
- **Compulsions**: Repetitive behaviors done to reduce the anxiety

**Important:** OCD is NOT just being neat or organized. It is a serious condition that causes significant distress and takes up a lot of time.

**Common Obsessions:**
- Fear of germs or contamination
- Fear of harming yourself or others
- Need for things to be "just right" or symmetrical
- Unwanted thoughts about religion or sex
- Fear of losing things or not having what you need

**Common Compulsions:**
- Excessive hand washing or cleaning
- Checking things repeatedly (locks, stove, etc.)
- Counting, tapping, or repeating words
- Arranging things in a specific way
- Seeking reassurance from others

**The OCD Cycle:**
1. An unwanted thought causes anxiety
2. You do a compulsion to reduce the anxiety
3. The relief is temporary
4. The thought comes back, often stronger
5. You do the compulsion again

**Important Facts:**
- OCD is NOT your fault
- It is caused by how your brain works
- About 2-3% of people have OCD
- It is very treatable
- Treatment can significantly reduce symptoms

**Treatment:**
- **ERP Therapy**: Learning to face fears without doing compulsions
- **Medication**: SSRIs can help reduce symptoms
- **Combination**: Often works best

If unwanted thoughts and repetitive behaviors are taking over your life, please seek help. Treatment works.`,
      keyTerms: [
        { term: 'obsession', definition: 'An unwanted thought, image, or urge that causes anxiety' },
        { term: 'compulsion', definition: 'A repetitive behavior done to reduce anxiety from an obsession' },
        { term: 'OCD', definition: 'A condition with unwanted thoughts and repetitive behaviors' },
        { term: 'ERP', definition: 'Exposure and Response Prevention - the main therapy for OCD' },
      ],
      analogies: [
        'OCD is like a broken alarm system that keeps going off even when there is no fire.',
        'Compulsions are like scratching an itch - they feel good briefly but make the itch worse.',
        'ERP therapy is like learning that you can handle the alarm without needing to check for fire.',
      ],
      examples: [
        'Someone with contamination OCD might wash their hands until they are raw, even though they know they are clean.',
        'A person might check the door lock 20 times before leaving because they cannot shake the feeling it is unlocked.',
        'Someone might have to repeat a prayer perfectly or believe something bad will happen.',
      ],
    },
    2: {
      level: 2,
      summary: 'OCD involves intrusive obsessions and ritualistic compulsions that consume significant time and cause distress. First-line treatment is Exposure and Response Prevention (ERP), often combined with SSRIs at higher doses than used for depression.',
      explanation: `**Understanding OCD:**

OCD is characterized by obsessions (intrusive thoughts) and compulsions (ritualistic behaviors). The obsessions cause anxiety, and compulsions temporarily relieve it, creating a self-reinforcing cycle.

**Obsession Types:**

*Contamination:*
- Fear of germs, dirt, illness
- Disgust at bodily fluids
- Fear of environmental contaminants

*Harm:*
- Fear of harming self or others
- Fear of being responsible for disasters
- Violent or disturbing images

*Symmetry/Exactness:*
- Need for things to be "just right"
- Symmetry, ordering, arranging
- "Incomplete" feelings

*Forbidden Thoughts:*
- Unwanted sexual thoughts
- Blasphemous or religious thoughts
- Aggressive impulses

*Other:*
- Fear of losing things
- Superstitious fears
- Somatic obsessions (body-focused)

**Compulsion Types:**

*Overt (Observable):*
- Washing and cleaning
- Checking (locks, stoves, etc.)
- Ordering and arranging
- Repeating actions
- Counting

*Covert (Mental):*
- Mental reviewing
- Praying or counting silently
- Neutralizing thoughts
- Mental reassurance-seeking

**Diagnostic Criteria:**
- Presence of obsessions, compulsions, or both
- Time-consuming (>1 hour/day) or cause significant distress/impairment
- Not due to substances or another medical condition
- Not better explained by another mental disorder

**Insight Specifier:**
- Good insight: Recognizes beliefs are probably not true
- Poor insight: Thinks beliefs are probably true
- Absent insight: Completely convinced beliefs are true

**Treatment:**

*Exposure and Response Prevention (ERP):*
- Gold standard psychotherapy
- Exposure: Facing feared situations/thoughts
- Response Prevention: Not doing compulsions
- Habituation: Anxiety decreases over time
- Typically 12-20 sessions

*Medication:*
- SSRIs: First-line, higher doses than depression
  - Fluoxetine: 40-80mg
  - Sertraline: 150-200mg
  - Fluvoxamine: 200-300mg
- Clomipramine: Most effective, more side effects
- Response takes 10-12 weeks

*Combination:*
- ERP + SSRI often optimal
- Medication can facilitate ERP`,
      keyTerms: [
        { term: 'ERP', definition: 'Exposure and Response Prevention - facing fears without doing compulsions' },
        { term: 'habituation', definition: 'The natural decrease in anxiety that occurs with prolonged exposure' },
        { term: 'insight', definition: 'Awareness that OCD beliefs may not be true' },
        { term: 'covert compulsion', definition: 'Mental rituals like counting, praying, or reviewing' },
        { term: 'fluvoxamine', definition: 'An SSRI particularly studied for OCD treatment' },
      ],
      analogies: [
        'ERP is like learning to swim by getting in the water - scary at first, but you adapt.',
        'Compulsions are like paying a bully - it works short-term but makes them come back for more.',
      ],
    },
    3: {
      level: 3,
      summary: 'OCD involves cortico-striato-thalamo-cortical circuit dysfunction with hyperactivity in orbitofrontal cortex and caudate. DSM-5 criteria require obsessions and/or compulsions causing distress or impairment. First-line treatment is ERP; SSRIs require higher doses (12+ weeks) than for depression.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Obsessions (1 and 2):**
1. Recurrent, persistent thoughts, urges, or images that are intrusive and unwanted and cause marked anxiety/distress
2. Attempts to ignore, suppress, or neutralize with another thought or action (compulsion)

**Compulsions (1 and 2):**
1. Repetitive behaviors or mental acts performed in response to obsession or according to rigid rules
2. Aimed at preventing/reducing anxiety or preventing dreaded event; not realistically connected or clearly excessive

**Additional Criteria:**
- Time-consuming (>1 hour/day) OR cause significant distress/impairment
- Not attributable to substances or medical condition
- Not better explained by another mental disorder

**Specifiers:**
- Tic-related (history or presence of tic disorder)
- Insight: Good, poor, or absent/delusional

**Neurobiological Basis:**

*Cortico-Striato-Thalamo-Cortical (CSTC) Circuit:*
- Orbitofrontal cortex (OFC): Hyperactive
- Anterior cingulate cortex (ACC): Error monitoring
- Caudate nucleus: Gating function impaired
- Thalamus: Feedback loop disruption

*Neurotransmitter Systems:*
- Serotonin: Primary target (5-HT2A, 5-HT1B receptors)
- Glutamate: Elevated in CSF, striatum
- Dopamine: Involved in tic-related OCD

*Structural Findings:*
- Reduced OFC gray matter
- Caudate volume changes
- White matter abnormalities

**Pharmacological Treatment:**

*SSRIs (First-Line):*
- Higher doses than depression
- Fluoxetine: 40-80mg/day
- Fluvoxamine: 200-300mg/day
- Sertraline: 150-200mg/day
- Paroxetine: 40-60mg/day
- Escitalopram: 20-40mg/day
- Response: 10-12 weeks at maximum dose

*Clomipramine:*
- TCA with strong serotonergic effects
- Most effective medication
- More side effects (anticholinergic, cardiac)
- 150-250mg/day

*Augmentation Strategies:*
- Antipsychotics (aripiprazole, risperidone): Especially tic-related
- Glutamate modulators (riluzole, NAC)
- Clomipramine + SSRI (monitor)

**Exposure and Response Prevention:**

*Mechanism:*
- Extinction of conditioned fear
- Habituation to anxiety
- Inhibitory learning
- Cognitive restructuring

*Protocol:*
1. Psychoeducation about OCD and ERP
2. Create exposure hierarchy
3. Begin exposures (in vivo and imaginal)
4. Response prevention (no compulsions)
5. Generalization and relapse prevention

*Format:*
- Individual or group
- Intensive (daily) or weekly
- Therapist-guided and self-directed

**OCD Subtypes:**

- Contamination/washing
- Harm/checking
- Symmetry/ordering
- Forbidden thoughts (sexual, religious, aggressive)
- Hoarding (separate diagnosis in DSM-5)`,
      keyTerms: [
        { term: 'CSTC circuit', definition: 'Cortico-striato-thalamo-cortical circuit, dysregulated in OCD' },
        { term: 'orbitofrontal cortex', definition: 'Brain region hyperactive in OCD, involved in decision-making' },
        { term: 'clomipramine', definition: 'Tricyclic antidepressant, most effective medication for OCD' },
        { term: 'inhibitory learning', definition: 'New learning that competes with the fear association' },
        { term: 'tic-related OCD', definition: 'OCD occurring with comorbid tic disorder, may respond to antipsychotics' },
      ],
      clinicalNotes: 'Higher SSRI doses needed than for depression - titrate slowly. Allow 10-12 weeks at maximum tolerated dose before declaring failure. ERP is essential - medication alone rarely provides full remission. Assess for tic-related presentation.',
    },
    4: {
      level: 4,
      summary: 'OCD pathophysiology involves CSTC hyperactivity, glutamate dysregulation, and impaired habit/goal-directed balance. ERP mechanisms include inhibitory learning and habit reversal. Treatment-resistant cases may benefit from augmentation, intensive ERP, or neuromodulation.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Architecture:*
- Heritability: ~40-50%
- Polygenic with multiple small-effect genes
- GWAS: Genes in glutamatergic, serotonergic pathways
- Increased risk with first-degree relatives
- Overlap with tic disorders genetically

*CSTC Circuit Dysfunction:*

Orbitofrontal Cortex:
- Hypermetabolism at rest
- Exaggerated response to symptoms
- Normalizes with successful treatment
- Error signal amplification

Anterior Cingulate Cortex:
- Error-related negativity enhanced
- Conflict monitoring dysfunction
- "Something is wrong" signal

Caudate Nucleus:
- Gating function impaired
- Fails to suppress irrelevant thoughts
- Habit vs goal-directed imbalance

*Neurotransmitter Systems:*

Serotonin:
- Reduced 5-HT2A receptor binding
- SSRIs: Desensitize 5-HT2A receptors
- SRI response specific to OCD among anxiety disorders

Glutamate:
- Elevated glutamate in striatum, CSF
- NMDA receptor dysfunction
- Target: Riluzole, memantine, NAC
- Ketamine studies underway

Dopamine:
- Involved in habit formation
- Antipsychotic augmentation efficacy
- Especially tic-related OCD

*Immunological Factors:*
- PANDAS/PANS: Post-streptococcal
- Inflammatory markers elevated in subset
- Anti-basal ganglia antibodies

**Treatment Mechanisms:**

*ERP Mechanisms:*
- Inhibitory learning model (vs habituation)
- New safety learning competes with threat association
- Expectancy violation key
- Consolidation and retrieval practice
- Variability enhances generalization

*Medication Mechanisms:*
- SSRIs: Reduce OFC hyperactivity
- Long latency: Receptor downregulation
- Dose-response for SRI effects
- Clomipramine: Strongest SRI effects

**Treatment-Resistant OCD:**

*Definition:*
- Failure of 2+ adequate SRI trials AND
- Adequate trial of ERP (or inability to engage)
- Substantial residual symptoms

*Augmentation Strategies:*
- Antipsychotics: Aripiprazole, risperidone (meta-analysis supported)
- Glutamate modulators: NAC, riluzole, memantine
- Clomipramine + SSRI (caution: serotonin syndrome, cardiac)
- Ondansetron: 5-HT3 antagonist

*Intensive Approaches:*
- Residential/intensive outpatient ERP
- Daily exposure sessions
- Higher response rates

*Neuromodulation:*
- Deep brain stimulation (ventral capsule/ventral striatum)
- Ablative procedures (capsulotomy, cingulotomy)
- TMS: Supplementary motor area target
- tDCS: Under investigation

**Special Considerations:**

*Pediatric OCD:*
- Family involvement essential
- CBT first-line for mild-moderate
- Medication for severe or CBT non-responders
- PANDAS assessment when acute onset

*OCD Spectrum:*
- Body dysmorphic disorder
- Trichotillomania
- Excoriation disorder
- Hoarding disorder
- Shared features but distinct conditions`,
      keyTerms: [
        { term: 'inhibitory learning', definition: 'Modern understanding of ERP - new learning that competes with fear' },
        { term: 'PANDAS', definition: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcus' },
        { term: 'deep brain stimulation', definition: 'Surgical treatment targeting ventral capsule/striatum for severe OCD' },
        { term: 'expectancy violation', definition: 'Key ERP concept - feared outcome not occurring strengthens new learning' },
        { term: 'gating function', definition: 'Caudate function of filtering irrelevant thoughts, impaired in OCD' },
      ],
      clinicalNotes: 'Treatment resistance common - 40-60% have inadequate response to first-line treatments. Augmentation with antipsychotics has strongest evidence. Consider intensive ERP programs. DBS reserved for severe, treatment-refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary OCD research explores glutamate-targeted interventions, immunological subtypes, and precision approaches to ERP. Digital therapeutics, D-cycloserine augmentation, and psilocybin studies represent emerging directions. Computational models inform understanding of habit-goal imbalance.',
      explanation: `**Translational Neuroscience:**

*Computational Models:*
- Habit-goal directed imbalance
- Model-based vs model-free learning
- Excessive habit formation
- Uncertainty intolerance models
- Bayesian accounts of OCD

*Circuit-Based Understanding:*
- OFC-striatum habit circuit hyperactive
- mPFC-dorsal striatum goal-directed circuit
- Serotonin modulates balance
- Computational phenotyping

**Novel Therapeutic Approaches:**

*Glutamate Modulators:*
- Riluzole: Glutamate release inhibitor
- Memantine: NMDA antagonist
- NAC: Glutathione precursor
- Ketamine: Rapid effects under study
- Mixed but promising results

*Psychedelic-Assisted Therapy:*
- Psilocybin: Phase 2 trials
- 5-HT2A agonism
- Single/few doses
- May enhance psychological flexibility
- Research stage

*D-Cycloserine Augmentation:*
- NMDA partial agonist
- Enhances extinction learning
- Given before ERP sessions
- Meta-analysis: Modest benefit
- Timing and dosing important

*Immunological Approaches:*
- PANDAS/PANS treatment protocols
- IVIG, plasmapheresis for autoimmune
- Anti-inflammatory augmentation
- Requires careful patient selection

**Precision Medicine:**

*Biomarker Development:*
- OFC hyperactivity on fMRI
- Glutamate spectroscopy
- Error-related negativity (ERN)
- Inflammatory markers
- Not yet clinically validated

*Subtype-Based Treatment:*
- Tic-related: Antipsychotic augmentation
- Autogenous vs reactive obsessions
- Symmetry/ordering presentations
- Disgust-based vs fear-based
- Personalized exposure protocols

*Genetic Stratification:*
- Polygenic risk scores
- Pharmacogenomics (CYP2D6)
- GWAS findings not yet clinical

**Digital and Technology Integration:**

*App-Based ERP:*
- Guided self-help
- Symptom tracking
- Exposure coaching
- Adjunctive to therapy

*Virtual Reality:*
- Contamination exposures
- Standardized stimuli
- Research applications

*Telehealth ERP:*
- Videoconference delivery
- Similar efficacy to in-person
- Increased access

**Optimizing ERP:**

*Inhibitory Learning Enhancement:*
- Expectancy violation focus
- Variability in exposures
- Multiple contexts
- Occasional reinforced extinction
- Deepened extinction

*Augmentation of ERP:*
- D-cycloserine timing
- Exercise before exposure
- Sleep after exposure
- Cognitive strategies

*Intensive Formats:*
- Bergen 4-day format
- Concentrated exposure
- High response rates
- Cost-effective

**Future Directions:**

*Transdiagnostic Approaches:*
- Compulsive spectrum
- Shared mechanisms with addiction, BDD
- Dimensional assessments

*Prevention:*
- Early intervention in at-risk youth
- Family-based prevention
- Reducing pathway to chronicity

*Integration:*
- Measurement-based care
- Stepped care models
- Community dissemination of ERP
- Training non-specialists`,
      keyTerms: [
        { term: 'Bergen 4-day format', definition: 'Intensive concentrated ERP treatment showing excellent outcomes' },
        { term: 'inhibitory learning model', definition: 'Current understanding of ERP mechanism emphasizing new learning over habituation' },
        { term: 'computational phenotyping', definition: 'Using computational models to characterize OCD subtypes' },
        { term: 'deepened extinction', definition: 'Techniques to enhance durability of extinction learning' },
        { term: 'model-based learning', definition: 'Goal-directed learning impaired in OCD, favoring habitual responding' },
      ],
      clinicalNotes: `Current best practices:
- ERP remains gold standard
- SSRIs at high doses adjunctive
- Antipsychotic augmentation for non-responders
- Intensive ERP for treatment-resistant

Emerging approaches:
- Psilocybin trials underway
- D-cycloserine augmentation of ERP
- Digital ERP delivery
- Intensive formats (Bergen 4-day)

Research directions:
- Glutamate modulators
- Precision ERP based on subtype
- Computational models
- Prevention in at-risk youth`,
    },
  },

  media: [
    {
      id: 'ocd-cycle-diagram',
      type: 'diagram',
      filename: 'ocd_cycle.svg',
      title: 'The OCD Cycle',
      description: 'Visual representation of obsession-anxiety-compulsion-relief cycle',
    },
  ],

  citations: [
    {
      id: 'dsm5-ocd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Obsessive-Compulsive and Related Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'see-also', label: 'Psychotherapy Types' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'ocd'],
    keywords: ['OCD', 'obsessions', 'compulsions', 'ERP', 'exposure therapy'],
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

export default ocdContent;
