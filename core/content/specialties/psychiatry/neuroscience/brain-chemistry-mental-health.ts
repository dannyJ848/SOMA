/**
 * Brain Chemistry and Mental Health - Neuroscience Foundations
 *
 * Understanding how neurotransmitters, neural circuits, and brain
 * structure relate to mental health conditions.
 */

import { EducationalContent } from '../../../types';

export const brainChemistryMentalHealthContent: EducationalContent = {
  id: 'psychiatry-brain-chemistry-mental-health',
  type: 'concept',
  name: 'Brain Chemistry and Mental Health',
  alternateNames: ['Neuroscience of Mental Illness', 'Neurobiological Basis of Psychiatric Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Your brain uses special chemicals called neurotransmitters to send messages, and when these chemicals are out of balance, it can affect how you feel and think.',
      explanation: `Your brain is like the control center of your body. It controls everything you do, think, and feel. Inside your brain, billions of tiny cells called neurons talk to each other using chemical messengers called neurotransmitters.

**Key Brain Chemicals:**

- **Serotonin**: The "feel-good" chemical. It helps you feel calm, happy, and satisfied. When it's low, you might feel sad or worried.

- **Dopamine**: The "reward" chemical. It makes you feel pleasure and motivation. It's released when you do things you enjoy.

- **Norepinephrine**: The "alertness" chemical. It helps you pay attention and respond to stress.

- **GABA**: The "calm-down" chemical. It helps your brain relax and reduces anxiety.

**What This Means for Mental Health:**

When these chemicals aren't balanced properly, it can cause mental health conditions. This isn't anyone's fault - it's a medical condition, just like diabetes or asthma.

- Depression can happen when serotonin or dopamine levels are low
- Anxiety can happen when there's not enough GABA or too much norepinephrine
- Medications can help restore the balance of these chemicals

The good news is that mental health conditions are treatable!`,
      keyTerms: [
        { term: 'neurotransmitter', definition: 'A chemical messenger that helps brain cells communicate with each other' },
        { term: 'serotonin', definition: 'A brain chemical that helps regulate mood, sleep, and appetite' },
        { term: 'dopamine', definition: 'A brain chemical involved in pleasure, motivation, and reward' },
        { term: 'neuron', definition: 'A brain cell that sends and receives messages' },
      ],
      analogies: [
        'Neurotransmitters are like text messages between brain cells - they carry important information.',
        'Having a chemical imbalance is like having too little or too much of an ingredient in a recipe - the result isn\'t quite right.',
        'Your brain is like a complex orchestra, and neurotransmitters are the conductors that keep everything playing in harmony.',
      ],
      examples: [
        'When you eat chocolate and feel happy, that\'s dopamine being released as a reward.',
        'The calm feeling you get after deep breathing is partly because of GABA activity.',
        'Medications like antidepressants work by helping to balance these brain chemicals.',
      ],
    },
    2: {
      level: 2,
      summary: 'Mental health conditions involve complex changes in neurotransmitter systems, neural circuits, and brain structure that affect mood, cognition, and behavior.',
      explanation: `Mental health conditions are now understood as brain-based disorders involving changes in neurotransmitter function, neural circuitry, and sometimes brain structure.

**Major Neurotransmitter Systems:**

**Monoamines:**
- *Serotonin (5-HT)*: Regulates mood, anxiety, sleep, appetite
  - Low levels linked to depression, anxiety, OCD
  - Most antidepressants target this system

- *Norepinephrine (NE)*: Regulates alertness, stress response, attention
  - Involved in anxiety, PTSD, ADHD
  - Too much: anxiety, panic
  - Too little: fatigue, poor concentration

- *Dopamine (DA)*: Regulates reward, motivation, movement, cognition
  - Low activity linked to depression, addiction
  - Overactive in psychosis (schizophrenia)
  - Target of antipsychotics and some antidepressants

**Amino Acid Neurotransmitters:**
- *GABA (gamma-aminobutyric acid)*: Main inhibitory neurotransmitter
  - Reduces brain activity, promotes calm
  - Low GABA linked to anxiety
  - Target of benzodiazepines

- *Glutamate*: Main excitatory neurotransmitter
  - Important for learning and memory
  - Emerging target for depression treatment (ketamine)

**Key Brain Regions:**

- **Prefrontal Cortex**: Decision-making, emotional regulation
- **Amygdala**: Fear and emotional processing
- **Hippocampus**: Memory and stress regulation
- **Striatum**: Reward and motivation

**Important Concepts:**

- Mental health conditions are NOT about "character weakness"
- They involve real, measurable brain changes
- These changes are treatable with medication and therapy
- Both biological and environmental factors play roles`,
      keyTerms: [
        { term: 'monoamine', definition: 'A class of neurotransmitters including serotonin, dopamine, and norepinephrine' },
        { term: 'GABA', definition: 'The main inhibitory neurotransmitter in the brain that reduces neural activity', pronunciation: 'GAB-ah' },
        { term: 'amygdala', definition: 'A brain region that processes emotions, especially fear', pronunciation: 'ah-MIG-dah-lah' },
        { term: 'prefrontal cortex', definition: 'The front part of the brain involved in decision-making and regulating emotions' },
        { term: 'glutamate', definition: 'The main excitatory neurotransmitter in the brain', pronunciation: 'GLOO-tah-mate' },
      ],
      analogies: [
        'The prefrontal cortex is like the "brakes" on emotions, while the amygdala is like the "gas pedal" - they need to work in balance.',
      ],
    },
    3: {
      level: 3,
      summary: 'Psychiatric disorders involve dysfunction in specific neurotransmitter pathways, neural circuits, and neuroendocrine systems, with genetic vulnerability interacting with environmental stressors.',
      explanation: `**Neurotransmitter Pathways and Psychiatric Disorders:**

**Serotonergic System:**
- Cell bodies: Raphe nuclei (brainstem)
- Projections: Widespread cortical and limbic
- Receptor subtypes: 5-HT1A, 5-HT2A, 5-HT2C, 5-HT3, etc.
- Role: Mood regulation, anxiety, impulse control
- Implicated in: Depression, anxiety, OCD, eating disorders

**Dopaminergic System:**
- Mesolimbic pathway: VTA → Nucleus accumbens
  - Reward, motivation, addiction
  - Positive symptoms of schizophrenia (hyperactive)

- Mesocortical pathway: VTA → Prefrontal cortex
  - Cognition, executive function
  - Negative symptoms of schizophrenia (hypoactive)

- Nigrostriatal pathway: Substantia nigra → Striatum
  - Movement control
  - Parkinsonism from antipsychotics

- Tuberoinfundibular pathway: Hypothalamus → Pituitary
  - Prolactin regulation
  - Hyperprolactinemia from antipsychotics

**Noradrenergic System:**
- Cell bodies: Locus coeruleus
- Projections: Widespread
- Role: Arousal, attention, stress response
- Implicated in: PTSD, panic disorder, ADHD

**GABAergic System:**
- Widespread inhibitory interneurons
- GABA-A receptor: Fast inhibition (benzodiazepine site)
- GABA-B receptor: Slow inhibition
- Implicated in: Anxiety disorders, alcohol withdrawal

**Glutamatergic System:**
- NMDA, AMPA, kainate receptors
- Role: Synaptic plasticity, learning
- Emerging target: Ketamine for treatment-resistant depression
- NMDA hypofunction hypothesis of schizophrenia

**Neuroendocrine Axes:**

*HPA Axis (Hypothalamic-Pituitary-Adrenal):*
- Stress response system
- CRH → ACTH → Cortisol
- Dysregulated in depression, PTSD, anxiety
- Chronic stress → hippocampal atrophy

*HPT Axis (Hypothalamic-Pituitary-Thyroid):*
- TRH → TSH → T3/T4
- Hypothyroidism mimics depression
- Thyroid augmentation in treatment-resistant depression

**Neural Circuits:**

*Default Mode Network:*
- Active during self-reflection
- Hyperactive in depression (rumination)
- Modulated by psychedelics

*Salience Network:*
- Insula, anterior cingulate
- Detecting important stimuli
- Dysregulated in anxiety, psychosis

*Executive Control Network:*
- DLPFC, posterior parietal
- Cognitive control
- Underactive in depression, ADHD`,
      keyTerms: [
        { term: 'mesolimbic pathway', definition: 'Dopamine pathway from VTA to nucleus accumbens, involved in reward and motivation' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis, the primary stress response system' },
        { term: 'locus coeruleus', definition: 'Brainstem nucleus containing most norepinephrine neurons', pronunciation: 'LO-kus seh-ROO-lee-us' },
        { term: 'raphe nuclei', definition: 'Brainstem nuclei containing serotonergic neurons', pronunciation: 'RAH-fay' },
        { term: 'default mode network', definition: 'Brain network active during self-referential thinking and mind-wandering' },
      ],
    },
    4: {
      level: 4,
      summary: 'Psychiatric pathophysiology involves complex interactions between genetic variants, epigenetic modifications, neurodevelopmental processes, and environmental factors affecting multiple neurotransmitter systems and neural circuits.',
      explanation: `**Genetic Architecture of Psychiatric Disorders:**

*Heritability Estimates:*
- Schizophrenia: 80%
- Bipolar disorder: 85%
- Major depression: 40%
- Anxiety disorders: 30-40%
- PTSD: 30-40% (plus trauma exposure)

*Polygenic Risk:*
- Most psychiatric disorders involve hundreds to thousands of genetic variants
- Each variant has small effect size
- Genome-wide association studies (GWAS) identifying risk loci
- Polygenic risk scores for research, not yet clinical use

*Key Genes/Pathways:*
- Serotonin transporter (SLC6A4): 5-HTTLPR polymorphism
- COMT (catechol-O-methyltransferase): Dopamine degradation
- BDNF (brain-derived neurotrophic factor): Neuroplasticity
- DRD2/DRD4: Dopamine receptors
- GRIN2A: NMDA receptor subunit
- CACNA1C: Calcium channel (bipolar, schizophrenia)

**Epigenetics:**
- Early life stress → Lasting epigenetic changes
- Glucocorticoid receptor methylation (depression, PTSD)
- Histone modifications affecting gene expression
- Potential transgenerational effects

**Neurodevelopmental Factors:**

*Prenatal Insults:*
- Maternal infection (immune activation) → Schizophrenia risk
- Maternal stress → Altered HPA axis in offspring
- Prenatal substance exposure → Multiple risks

*Synaptic Pruning:*
- Adolescent pruning in prefrontal cortex
- Excessive pruning hypothesis of schizophrenia
- Complement system (C4) involvement

**Neuroplasticity and Mental Health:**

*BDNF-TrkB Signaling:*
- Reduced in depression
- Increased by antidepressants, exercise, ketamine
- Mediates antidepressant effects

*Synaptic Changes:*
- Spine loss in prefrontal cortex (depression, stress)
- Ketamine rapidly increases spines
- Psychotherapy induces structural changes

**Neuroimaging Findings:**

*Structural:*
- Hippocampal volume reduction (depression, PTSD)
- Prefrontal cortex thinning (schizophrenia, depression)
- Amygdala enlargement (some anxiety disorders)
- Gray matter loss in schizophrenia

*Functional:*
- Amygdala hyperactivity (anxiety, PTSD)
- Prefrontal hypoactivity (depression, PTSD)
- Striatal dopamine dysregulation (schizophrenia)
- Default mode network alterations

**Inflammation and Mental Health:**
- Elevated inflammatory markers in depression, schizophrenia
- Cytokines affecting neurotransmitter synthesis
- Kynurenine pathway: Inflammation → Glutamate changes
- Anti-inflammatory treatments under investigation`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk based on many genetic variants' },
        { term: 'epigenetics', definition: 'Heritable changes in gene expression without DNA sequence changes' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor, a protein important for neuroplasticity' },
        { term: 'synaptic pruning', definition: 'Developmental process of eliminating excess synapses' },
        { term: 'kynurenine pathway', definition: 'Tryptophan metabolic pathway linking inflammation to neurotransmitter changes' },
      ],
      clinicalNotes: 'Understanding neurobiology helps frame mental illness as medical conditions, reducing stigma. However, avoid simplistic "chemical imbalance" explanations - the reality is more complex. Biomarkers remain research tools; diagnosis remains clinical. Personalized psychiatry based on biomarkers is an active research area.',
    },
    5: {
      level: 5,
      summary: 'Contemporary psychiatry integrates systems neuroscience, computational approaches, and precision medicine to understand the dimensional nature of psychopathology and develop targeted interventions.',
      explanation: `**Research Domain Criteria (RDoC):**

A dimensional framework replacing categorical diagnoses for research:

*Domains:*
- Negative Valence: Fear, anxiety, loss
- Positive Valence: Reward, motivation
- Cognitive Systems: Attention, memory, cognitive control
- Social Processes: Social communication, attachment
- Arousal/Regulatory: Sleep, arousal
- Sensorimotor: Motor behavior

*Units of Analysis:*
- Genes → Molecules → Cells → Circuits → Physiology → Behavior → Self-report

**Computational Psychiatry:**

*Reinforcement Learning Models:*
- Prediction error signaling (dopamine)
- Model-based vs model-free learning
- Altered learning rates in depression, addiction, schizophrenia

*Bayesian Inference:*
- Precision-weighted prediction errors
- Psychosis as aberrant precision
- Autism as altered predictive coding

*Network Neuroscience:*
- Connectomics: Mapping brain connectivity
- Graph theory measures: Efficiency, modularity
- Dysconnectivity in schizophrenia, depression

**Precision Psychiatry:**

*Biomarker Development:*
- Treatment response prediction
- Diagnostic biomarkers (not yet clinically available)
- EEG, fMRI, blood-based markers

*Pharmacogenomics:*
- CYP450 genotyping (2D6, 2C19)
- Influences drug metabolism
- Clinical utility for drug selection/dosing emerging

*Stratified Medicine:*
- Inflammatory depression subtype
- Anhedonic vs anxious depression
- Treatment matching based on phenotype

**Novel Therapeutic Targets:**

*Glutamate System:*
- Ketamine: NMDA antagonist, rapid antidepressant
- Esketamine (Spravato): FDA approved for TRD
- Mechanism: Synaptogenesis via AMPA activation

*Psychedelics:*
- Psilocybin: 5-HT2A agonist, depression trials
- MDMA: Serotonin release, PTSD therapy
- Mechanism: Increased neuroplasticity, altered network connectivity

*Neuromodulation:*
- TMS: FDA approved for depression, OCD
- ECT: Most effective for severe depression
- DBS: Investigational for treatment-resistant depression
- Focused ultrasound: Emerging modality

**Circuit-Based Understanding:**

*Fear Circuit (Anxiety, PTSD):*
- Amygdala hyperactivity
- Reduced prefrontal regulation
- Deficient fear extinction
- Target for exposure therapy and medications

*Reward Circuit (Depression, Addiction):*
- Striatal hypoactivity
- Reduced dopamine signaling
- Anhedonia as core feature
- Target for behavioral activation, bupropion

*Salience Network (Psychosis):*
- Aberrant salience attribution
- Dopamine dysregulation
- Explains delusions as attempts to explain aberrant experiences

**Systems Biology Integration:**
- Metabolomics
- Proteomics
- Microbiome-gut-brain axis
- Circadian biology
- Multi-omics integration

**Future Directions:**
- Closed-loop neuromodulation
- Digital phenotyping (smartphone data)
- AI/ML for diagnosis and treatment selection
- Novel drug targets from genetic findings
- Transdiagnostic approaches`,
      keyTerms: [
        { term: 'RDoC', definition: 'Research Domain Criteria - dimensional framework for studying mental health' },
        { term: 'computational psychiatry', definition: 'Using mathematical models to understand psychiatric symptoms' },
        { term: 'precision psychiatry', definition: 'Tailoring treatment based on individual biological markers' },
        { term: 'transdiagnostic', definition: 'Spanning across traditional diagnostic categories' },
        { term: 'closed-loop neuromodulation', definition: 'Brain stimulation that adapts in real-time to neural signals' },
      ],
      clinicalNotes: `Current clinical practice:
- Pharmacogenomic testing (CYP2D6, CYP2C19) can guide medication selection
- TMS is FDA-approved for depression and OCD
- Esketamine (Spravato) approved for treatment-resistant depression
- Psilocybin has breakthrough therapy designation for depression

Research vs clinical: Most precision psychiatry approaches remain research tools. Biomarkers for diagnosis or treatment selection are not yet validated for clinical use. Clinical judgment remains essential.

The field is moving from symptom-based to mechanism-based approaches, but this transition is incomplete.`,
    },
  },

  media: [
    {
      id: 'neurotransmitter-systems-diagram',
      type: 'diagram',
      filename: 'neurotransmitter_systems.svg',
      title: 'Major Neurotransmitter Systems',
      description: 'Overview of serotonin, dopamine, and norepinephrine pathways in the brain',
    },
    {
      id: 'neural-circuits-mental-health',
      type: 'diagram',
      filename: 'neural_circuits_mental_health.svg',
      title: 'Neural Circuits in Mental Health',
      description: 'Key circuits involved in mood, anxiety, and psychosis',
    },
  ],

  citations: [
    {
      id: 'stahl-psychopharm',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Neuroscientific Basis of Psychopharmacology',
    },
    {
      id: 'kaplan-sadock',
      type: 'textbook',
      title: 'Kaplan and Sadock\'s Synopsis of Psychiatry',
      authors: ['Sadock BJ', 'Sadock VA', 'Ruiz P'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-depression', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'psychiatry-anxiety', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'psychiatry-schizophrenia', targetType: 'condition', relationship: 'related', label: 'Schizophrenia' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'neuroscience', 'pharmacology'],
    keywords: ['neurotransmitters', 'serotonin', 'dopamine', 'mental health', 'brain chemistry'],
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

export default brainChemistryMentalHealthContent;
