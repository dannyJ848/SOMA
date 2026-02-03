/**
 * Obsessive-Compulsive Disorder (OCD)
 *
 * Comprehensive educational content on OCD,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const ocdContent: EducationalContent = {
  id: 'psychiatry-ocd',
  type: 'condition',
  name: 'Obsessive-Compulsive Disorder',
  alternateNames: ['OCD'],

  levels: {
    1: {
      level: 1,
      summary: 'OCD is a condition where a person has unwanted, repeated thoughts (obsessions) that cause anxiety, and feels driven to do certain actions (compulsions) to reduce that anxiety.',
      explanation: `OCD involves two main things:

**Obsessions** - Unwanted thoughts that keep coming back:
- Worrying about germs or getting sick
- Needing things to be perfectly arranged
- Scary thoughts about hurting yourself or others
- Worry about something bad happening

**Compulsions** - Actions done to make the worry go away:
- Washing hands over and over
- Checking locks or appliances many times
- Counting or repeating actions a certain number of times
- Arranging things until they feel "just right"

**Important to Know:**

- These thoughts and actions take up a lot of time (more than 1 hour a day)
- The person knows the thoughts don't make sense, but can't stop them
- OCD is NOT the same as being neat or organized
- OCD is a real medical condition, not a personality trait
- OCD is very treatable!

**What Causes OCD:**

- Brain chemistry (certain chemicals don't work quite right)
- Genes (can run in families)
- Life events and stress

**Treatment Works:**

- A special kind of therapy called ERP (Exposure and Response Prevention)
- Medications that help balance brain chemicals
- Most people get much better with treatment`,
      keyTerms: [
        { term: 'obsession', definition: 'An unwanted thought, image, or urge that keeps coming back and causes distress' },
        { term: 'compulsion', definition: 'A behavior or mental act done to reduce anxiety from an obsession' },
        { term: 'ERP', definition: 'Exposure and Response Prevention, the main therapy for OCD' },
      ],
      analogies: [
        'OCD is like having a fire alarm that goes off when there\'s no fire - your brain sends a danger signal that\'s a false alarm.',
        'Compulsions are like scratching a mosquito bite - they provide temporary relief but make the problem worse in the long run.',
      ],
      examples: [
        'A person might wash their hands 50 times a day because they\'re afraid of germs.',
        'Someone might check if the door is locked 20 times before leaving because of fear of break-ins.',
      ],
    },
    2: {
      level: 2,
      summary: 'OCD is characterized by persistent obsessions (intrusive thoughts causing distress) and/or compulsions (repetitive behaviors aimed at reducing anxiety), causing significant time consumption and functional impairment.',
      explanation: `**Obsessions:**
- Recurrent, persistent, intrusive thoughts, urges, or images
- Cause marked anxiety or distress
- Person attempts to ignore, suppress, or neutralize them

Common themes:
- Contamination (germs, illness, dirt)
- Harm (hurting self or others)
- Symmetry/ordering (need for exactness)
- Forbidden thoughts (religious, sexual, aggressive)
- Doubt (did I lock the door?)

**Compulsions:**
- Repetitive behaviors or mental acts
- Done in response to obsession or according to rigid rules
- Aimed at reducing distress or preventing feared event
- Not realistically connected to what they're trying to prevent
- Excessive

Types:
- Cleaning/washing
- Checking
- Counting
- Ordering/arranging
- Mental rituals (praying, repeating words)
- Seeking reassurance

**Diagnosis Requirements:**
- Obsessions and/or compulsions present
- Time-consuming (>1 hour/day) OR cause significant distress/impairment
- Not attributable to substance or medical condition
- Not better explained by another disorder

**Insight Specifiers:**
- Good insight: Recognizes beliefs are definitely or probably not true
- Poor insight: Thinks beliefs are probably true
- Absent insight: Completely convinced beliefs are true

**Common Comorbidities:**
- Anxiety disorders
- Depression
- Tic disorders
- Body dysmorphic disorder
- Trichotillomania

**Treatment:**

*First-line: Exposure and Response Prevention (ERP)*
- Systematic exposure to feared situations
- Preventing compulsive response
- Anxiety decreases over time (habituation)
- Very effective (60-80% respond)

*Medications:*
- SSRIs at high doses (higher than for depression)
- Clomipramine (TCA with strong serotonergic effects)
- Often takes 8-12 weeks for response`,
      keyTerms: [
        { term: 'intrusive thoughts', definition: 'Unwanted thoughts that pop into your mind without control' },
        { term: 'exposure', definition: 'Deliberately facing feared situations or triggers' },
        { term: 'response prevention', definition: 'Resisting the urge to perform compulsions' },
        { term: 'habituation', definition: 'Gradual decrease in anxiety with repeated exposure' },
      ],
    },
    3: {
      level: 3,
      summary: 'OCD involves dysfunction in cortico-striato-thalamo-cortical circuits, with hyperactivity in orbitofrontal cortex and striatum. First-line treatment is ERP, with high-dose SSRIs or clomipramine as pharmacological options.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Obsessions, compulsions, or both:

*Obsessions defined by:*
1. Recurrent, persistent thoughts, urges, or images that are intrusive and unwanted
2. Cause marked anxiety or distress
3. Individual attempts to ignore, suppress, or neutralize

*Compulsions defined by:*
1. Repetitive behaviors or mental acts
2. Driven to perform in response to obsession or rigid rules
3. Aimed at reducing anxiety or preventing feared event
4. Not realistically connected OR clearly excessive

B. Time-consuming (>1 hour/day) or significant distress/impairment
C. Not attributable to substance or medical condition
D. Not better explained by another mental disorder

**Specifiers:**
- Tic-related: Current or past tic disorder
- Insight: Good, poor, or absent

**Neurobiology:**

*Cortico-Striato-Thalamo-Cortical (CSTC) Circuits:*
- Orbitofrontal cortex (OFC): Hyperactive, "error detection"
- Anterior cingulate cortex (ACC): Hyperactive
- Striatum (caudate): Hyperactive
- Thalamus: Overactive
- Loop gets "stuck" in OCD

*Neuroimaging:*
- Increased OFC metabolism at rest
- Hyperactivation during symptom provocation
- Normalizes with successful treatment (ERP or meds)

*Neurochemistry:*
- Serotonin hypothesis (based on SSRI response)
- Glutamate abnormalities
- Dopamine involvement (especially tic-related)

**Symptom Dimensions:**
1. Contamination/cleaning
2. Harm/checking
3. Symmetry/ordering
4. Forbidden thoughts (sexual, religious, aggressive)
5. Hoarding (now separate diagnosis)

**Treatment Details:**

*ERP Protocol:*
- Psychoeducation
- Create hierarchy of feared situations
- Gradual exposure to obsession triggers
- Response prevention (no compulsions)
- Sessions 1-2x weekly, 12-20 sessions
- Homework essential
- 60-80% response rate

*Pharmacotherapy:*
- SSRIs: Higher doses than depression
  - Fluoxetine 40-80mg
  - Sertraline 150-200mg
  - Fluvoxamine 200-300mg
- Clomipramine 150-250mg (most serotonergic TCA)
- Response takes 8-12 weeks
- Maintain for 1-2 years after response

*Augmentation for Partial Response:*
- Add antipsychotic (especially if tics)
- Combine ERP with medication
- Consider clomipramine if SSRI failure

*Treatment-Resistant:*
- Deep brain stimulation (investigational)
- Ablative neurosurgery (cingulotomy, capsulotomy)
- For severe, disabling, treatment-refractory cases`,
      keyTerms: [
        { term: 'CSTC circuit', definition: 'Cortico-striato-thalamo-cortical loop implicated in OCD pathophysiology' },
        { term: 'orbitofrontal cortex', definition: 'Brain region involved in error detection, hyperactive in OCD' },
        { term: 'tic-related OCD', definition: 'OCD subtype with comorbid tics, may respond to antipsychotic augmentation' },
      ],
    },
    4: {
      level: 4,
      summary: 'OCD pathophysiology involves glutamatergic and serotonergic dysfunction within CSTC circuits, with genetic contributions and neuroimaging-documented hypermetabolism in OFC and caudate. ERP induces neuroplastic changes, and pharmacological treatment requires high-dose serotonergic agents.',
      explanation: `**Pathophysiology:**

*CSTC Model:*
- Direct pathway: OFC → Striatum → GPi/SNr → Thalamus → Cortex (excitatory)
- Indirect pathway: Striatum → GPe → STN → GPi/SNr → Thalamus (inhibitory)
- OCD: Imbalance favoring direct pathway
- Results in "stuck" behavioral loops

*Neuroimaging Evidence:*
- PET: Increased OFC, ACC, caudate metabolism
- fMRI: Hyperactivation during symptom provocation
- Symptom provocation paradigms
- Treatment normalizes activity

*Glutamate:*
- Elevated glutamate in striatum (MRS studies)
- NMDA receptor involvement
- Glutamate modulators under investigation (memantine, riluzole, NAC)

*Serotonin:*
- Response to serotonergic medications
- 5-HT2A receptor involvement
- Possible role in OFC activity modulation

*Dopamine:*
- Tic-related OCD: Dopamine involvement
- Antipsychotic augmentation efficacy
- Striatal dopamine receptor binding

**Genetics:**

- Heritability: 40-50%
- First-degree relatives: 4x increased risk
- GWAS: Polygenic architecture
- Candidate genes: SLC1A1 (glutamate), GRIN2B (NMDA)
- PANDAS/PANS: Post-infectious autoimmune subgroup

**Treatment Mechanisms:**

*ERP:*
- Inhibitory learning (new, competing memory)
- Habituation within and between sessions
- Expectancy violation
- Neuroplasticity in CSTC circuits
- Reduces OFC and caudate hyperactivity

*SSRIs:*
- Serotonin reuptake inhibition
- Downstream effects on receptors, BDNF, neuroplasticity
- High doses needed (OFC serotonin modulation)
- 8-12 weeks for response

*Augmentation:*

Antipsychotics (D2 blockade):
- For partial SSRI response
- Especially effective if tics
- Risperidone, aripiprazole: Best evidence
- Number needed to treat: 4-5

Glutamate modulators:
- NAC (N-acetylcysteine): Open-label promise
- Memantine: Some evidence
- Riluzole: Under investigation
- Mechanism: Glutamate normalization

**Treatment-Resistant OCD:**

*Definition:*
- Failure of 2+ SRIs (adequate dose, duration)
- Failure of or inability to access ERP
- Significant ongoing impairment

*Options:*
- Optimize ERP (specialist, intensive programs)
- Clomipramine IV (some countries)
- Combination treatments
- Neurosurgical approaches

*Neurosurgery (for severe, refractory):*
- Deep brain stimulation (STN, VC/VS)
- Anterior capsulotomy
- Cingulotomy
- Gamma knife capsulotomy
- Response rates 30-60%

**Pediatric Considerations:**

- Earlier onset often more severe
- Family involvement in ERP
- Medication: SSRIs first-line
- PANDAS: Consider immunomodulation if criteria met
- Developmental considerations in therapy`,
      keyTerms: [
        { term: 'SRI', definition: 'Serotonin reuptake inhibitor (SSRIs and clomipramine)' },
        { term: 'PANDAS', definition: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcus' },
        { term: 'deep brain stimulation', definition: 'Neurosurgical treatment with electrodes for treatment-refractory OCD' },
        { term: 'expectancy violation', definition: 'Learning that feared outcome doesn\'t occur, key ERP mechanism' },
      ],
      clinicalNotes: 'ERP is first-line; most effective treatment. SSRIs at high doses with patience (8-12 weeks). Augment partial responders with antipsychotics. Consider tic-related subtype. Address insight level. Monitor for suicidality in youth starting SSRIs.',
    },
    5: {
      level: 5,
      summary: 'Contemporary OCD research focuses on glutamatergic and immune mechanisms, precision approaches to treatment selection, inhibitory learning optimization in ERP, and neuromodulation including DBS and TMS for refractory cases.',
      explanation: `**Advanced Neurobiological Models:**

*Computational Psychiatry:*
- Altered action-outcome learning
- Habitual vs. goal-directed imbalance
- Overestimation of threat probability
- Intolerance of uncertainty
- Model-based vs. model-free decisions

*Network Perspectives:*
- Beyond CSTC: Frontoparietal network involvement
- Default mode network alterations
- Salience network hyperconnectivity
- Large-scale network dysconnectivity

**Glutamate Research:**

*Evidence:*
- Elevated glutamate in multiple brain regions (MRS)
- GRIN2B (NMDA subunit) genetic associations
- SLC1A1 (glutamate transporter) findings
- Animal models: Sapap3 knockout

*Therapeutic Implications:*
- Memantine: NMDA antagonist, augmentation
- NAC: Glutamate modulation, antioxidant
- Riluzole: Glutamate release inhibition
- Ketamine: Under investigation

**Immune/Inflammatory Mechanisms:**

*PANDAS/PANS:*
- Streptococcal-triggered (PANDAS)
- Broader infectious triggers (PANS)
- Anti-neuronal antibodies
- Basal ganglia involvement
- Treatment: Antibiotics, IVIG, plasmapheresis

*Adult OCD:*
- Elevated inflammatory markers (some studies)
- Microglial activation
- Autoimmune comorbidities
- Inflammation as treatment target

**Precision Medicine:**

*Symptom Dimension-Based:*
- Different dimensions may have different neurobiology
- Treatment matching (e.g., contamination responds well to ERP)
- Glutamate agents for certain dimensions?

*Biomarker Development:*
- Neuroimaging predictors of treatment response
- Genetic stratification
- Inflammatory markers
- Not yet clinically useful

**ERP Optimization:**

*Inhibitory Learning Model:*
- Focus on expectancy violation
- Maximize mismatch between feared and actual outcome
- Variability in exposure
- Not just habituation

*Intensive Programs:*
- Daily ERP for 3-4 weeks
- Faster response
- For severe/treatment-resistant
- Cost-effective long-term

*Augmentation:*
- D-cycloserine: NMDA partial agonist, enhances extinction
- Dosing: 50-250mg before ERP sessions
- Meta-analysis: Small effect
- Better in severe cases

*Technology:*
- VR exposure for certain phobia-like OCD
- App-based self-ERP
- Telehealth delivery effective

**Neuromodulation:**

*Transcranial Magnetic Stimulation:*
- FDA cleared for OCD (2018)
- Target: Supplementary motor area (SMA), mPFC
- Deep TMS (H-coil)
- 29 sessions, 20 minutes each
- Efficacy modest

*Deep Brain Stimulation:*
- Targets: VC/VS, STN, NAc, ALIC
- For treatment-refractory only
- Response rates: 50-60%
- Adjustable, reversible
- Mechanism: Circuit modulation

*Other Modalities:*
- tDCS: Under investigation
- Focused ultrasound: Emerging
- Ablative surgery: Still performed (capsulotomy)

**Psychedelic-Assisted Therapy:**

*Psilocybin:*
- Open-label studies promising
- 5-HT2A agonism
- Enhances neuroplasticity
- Combined with therapy
- Controlled trials ongoing

**Future Directions:**

1. Validated biomarkers for treatment selection
2. Glutamate-based treatments
3. Immune-targeted therapies for subgroups
4. Optimized neuromodulation protocols
5. Precision ERP (matching to individual)
6. Prevention strategies
7. Integration of treatments (meds + ERP + neuromod)`,
      keyTerms: [
        { term: 'Sapap3', definition: 'Gene knockout mouse model of OCD with compulsive grooming' },
        { term: 'deep TMS', definition: 'TMS using H-coil to reach deeper brain structures, FDA-cleared for OCD' },
        { term: 'inhibitory learning', definition: 'Formation of new safety memory that competes with original fear/threat memory' },
        { term: 'PANS', definition: 'Pediatric Acute-onset Neuropsychiatric Syndrome, broader than PANDAS' },
      ],
      clinicalNotes: `Current practice:
- ERP remains most effective treatment
- SSRIs at OCD doses (higher than depression)
- Augment with antipsychotics for partial response
- TMS available for treatment-resistant
- DBS for severe, refractory cases

Emerging:
- Glutamate modulators (NAC, memantine)
- Optimized ERP protocols (inhibitory learning)
- D-cycloserine augmentation of ERP
- Psilocybin-assisted therapy (research)

Special populations:
- PANDAS/PANS: Consider immunomodulation
- Tic-related: Antipsychotic augmentation more effective
- Poor insight: May need modified approach
- Pediatric: Family involvement crucial`,
    },
  },

  media: [
    {
      id: 'ocd-circuit-diagram',
      type: 'diagram',
      filename: 'ocd_cstc_circuit.svg',
      title: 'CSTC Circuit in OCD',
      description: 'Cortico-striato-thalamo-cortical pathway dysfunction',
    },
  ],

  citations: [
    {
      id: 'dsm-5-ocd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Obsessive-Compulsive and Related Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-body-dysmorphic-disorder', targetType: 'condition', relationship: 'related', label: 'BDD' },
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'GAD' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'obsessive-compulsive disorders'],
    keywords: ['OCD', 'obsessions', 'compulsions', 'ERP', 'exposure therapy'],
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

export default ocdContent;
