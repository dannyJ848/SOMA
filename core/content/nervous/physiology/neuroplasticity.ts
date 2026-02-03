/**
 * Neuroplasticity - Physiology Educational Content
 *
 * Brain plasticity mechanisms including synaptic plasticity,
 * structural plasticity, and experience-dependent changes.
 */

import { EducationalContent } from '../../types';

export const neuroplasticity: EducationalContent = {
  id: 'physiology-neuroplasticity',
  type: 'process',
  name: 'Neuroplasticity',
  alternateNames: ['Brain Plasticity', 'Neural Plasticity', 'Brain Adaptability'],

  levels: {
    1: {
      level: 1,
      summary: 'Neuroplasticity is the brain\'s ability to change, grow, and reorganize itself throughout life by forming new connections between brain cells.',
      explanation: `Neuroplasticity means your brain can change and adapt throughout your entire life. This is how you learn new things, remember information, and recover from brain injuries.

**What Is Neuroplasticity?**

Think of your brain as a garden that is always growing. New connections form like new pathways, and unused connections fade away like paths that are no longer walked.

**Types of Brain Changes:**

1. **Making Stronger Connections**
   - When you practice something, the connections get stronger
   - Like walking the same path until it becomes a road
   - This is how habits and skills develop

2. **Making New Connections**
   - Your brain can grow new links between cells
   - Like building a new bridge between two places
   - This happens when you learn something new

3. **Pruning Unused Connections**
   - Connections you do not use get weaker
   - Like a path that becomes overgrown
   - This helps the brain stay efficient

**When Does It Happen?**

- **During Development**: Babies\' brains are highly plastic
- **While Learning**: Every time you learn something new
- **After Injury**: The brain rewires around damaged areas
- **Throughout Life**: Even older brains can change

**Examples in Everyday Life:**

- Learning to play a musical instrument
- Recovering use of a limb after stroke
- Learning a new language
- Remembering a new phone number
- Adapting to new technologies

**"Use It or Lose It"**

The more you use certain brain pathways, the stronger they become. Skills you practice regularly become easier. Skills you neglect become harder to access.

Your brain is never "stuck" - it can always change and adapt!

Think of your brain like a muscle - the more you exercise it, the stronger and more flexible it becomes.`,
      keyTerms: [
        { term: 'neuroplasticity', definition: 'The brain\'s ability to change and adapt by forming new neural connections' },
        { term: 'synaptic plasticity', definition: 'Changes in the strength of connections between neurons' },
        { term: 'connection', definition: 'A link between two neurons that allows them to communicate' },
        { term: 'pruning', definition: 'The process of removing unused neural connections' },
        { term: 'rewiring', definition: 'Forming new pathways in the brain to work around damage or learn new skills' },
      ],
      analogies: [
        'Neuroplasticity is like traffic patterns in a city - popular routes get wider and more efficient, while unused roads may be repurposed.',
        'The brain is like a garden - synapses that are used grow like well-watered plants, while unused ones wither.',
        'Learning a new skill is like carving a path through snow - each pass makes it easier until it becomes a well-worn trail.',
      ],
      examples: [
        'London taxi drivers have larger brain areas for navigation because they memorize so many streets.',
        'People who lose their sight often have enhanced hearing as the brain repurposes visual areas.',
        'Stroke patients can regain movement as the brain forms new pathways around damaged areas.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neuroplasticity encompasses molecular, synaptic, and structural changes in the nervous system that underlie learning, memory, and recovery from injury.',
      explanation: `**Levels of Neuroplasticity:**

**Molecular/Cellular:**
- Changes in neurotransmitter release
- Receptor number and sensitivity
- Gene expression changes
- Protein synthesis

**Synaptic Plasticity:**
- Long-term potentiation (LTP): Strengthened connections
- Long-term depression (LTD): Weakened connections
- Synapse formation and elimination
- Changes in synaptic structure

**Structural Plasticity:**
- Dendritic spine changes
- Axonal sprouting
- Synapse reorganization
- Cortical map reorganization

**System Level:**
- Changes in neural networks
- Functional reorganization
- Inter-hemispheric changes
- Compensatory mechanisms

**Types of Plasticity:**

**Developmental Plasticity:**
- Critical periods: Windows of heightened plasticity
- Visual system development
- Language acquisition
- Experience-expectant vs experience-dependent

**Activity-Dependent Plasticity:**
- Use-dependent: Changes based on activity patterns
- Training-induced: Practice effects
- Repetitive stimulation effects

**Adaptive Plasticity:**
- Response to injury or deprivation
- Cross-modal plasticity (e.g., visual cortex in blindness)
- Constraint-induced movement therapy
- Phantom limb sensations

**Maladaptive Plasticity:**
- Chronic pain centralization
- Tinnitus
- Drug addiction
- Compulsive behaviors

**Key Mechanisms:**

**Hebbian Plasticity:**
- "Cells that fire together, wire together"
- Coincident pre- and post-synaptic activity
- NMDA receptor coincidence detection
- Basis for associative learning

**Homeostatic Plasticity:**
- Synaptic scaling
- Maintains network stability
- Compensatory adjustments
- Preserves firing rate homeostasis

**Metaplasticity:**
- Plasticity of plasticity
- Activity history affects future plasticity
- BDNF modulation
- Threshold modulation

**Experience-Dependent Changes:**

**Motor Learning:**
- Primary motor cortex reorganization
- Cerebellar plasticity
- Basal ganglia involvement
- Skill consolidation

**Sensory Learning:**
- Cortical map expansion
- Representational plasticity
- Perceptual learning
- Multisensory integration

**Memory Formation:**
- Hippocampal-neocortical consolidation
- Systems consolidation over time
- Sleep-dependent plasticity
- Reconsolidation`,
      keyTerms: [
        { term: 'critical period', definition: 'Developmental window when brain is highly plastic for specific functions' },
        { term: 'long-term potentiation', definition: 'Persistent strengthening of synapses based on recent activity' },
        { term: 'Hebbian plasticity', definition: 'Principle that synapses strengthen when pre- and post-synaptic cells fire together' },
        { term: 'synaptic scaling', definition: 'Homeostatic adjustment of all synapses to maintain stable firing' },
        { term: 'cortical map', definition: 'Organized representation of body or sensory space in cortex' },
      ],
      analogies: [
        'Hebbian plasticity is like becoming friends with someone you see every day - repeated contact strengthens the relationship.',
        'Synaptic scaling is like a thermostat - it adjusts to keep the overall activity level stable.',
        'Critical periods are like learning a language - easiest when young, harder but still possible when older.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neuroplasticity involves sophisticated molecular cascades, including immediate early genes, protein synthesis, structural changes in dendritic spines, and network-level reorganization underlying learning and memory.',
      explanation: `**Molecular Mechanisms:**

**Immediate Early Genes:**
- c-fos, Arc, zif268
- Rapid transcription following activity
- Marker of plasticity
- Arc mRNA localizes to activated synapses

**Signaling Pathways:**

**Calcium Signaling:**
- NMDA receptor Ca2+ influx
- Voltage-gated Ca2+ channels
- Calcium-calmodulin dependent kinase II (CaMKII)
- Autophosphorylation creates molecular memory

**Kinase Cascades:**
- PKA, PKC activation
- MAPK/ERK pathway
- PI3K/Akt/mTOR pathway
- Protein synthesis regulation

**Neurotrophins:**
- BDNF (brain-derived neurotrophic factor)
- TrkB receptor signaling
- Activity-dependent release
- Critical for LTP and spine growth

**Protein Synthesis:**
- Local translation at synapses
- mTOR activation
- Translation initiation factors
- ARC protein regulates AMPA receptor endocytosis

**Structural Plasticity:**

**Dendritic Spines:**
- Mushroom spines: Stable, memory storage
- Thin spines: Plastic, learning
- Filopodia: Precursors
- Spine head size correlates with synaptic strength
- Rapid formation and elimination

**Spine Dynamics:**
- Two-photon imaging in vivo
- Activity-dependent stabilization
- NMDA receptor-dependent
- BDNF effects
- Sleep-dependent changes

**Axonal Plasticity:**
- Axonal sprouting
- Growth cone dynamics
- CNS vs PNS differences
- Inhibitory molecules in CNS (Nogo, MAG, OMgp)

**LTP and LTD Mechanisms:**

**NMDA Receptor-Dependent LTP:**
- Ca2+ influx through NMDA receptors
- CaMKII autophosphorylation
- AMPA receptor phosphorylation
- Insertion of new AMPA receptors (GluA1)
- Spine enlargement

**mGluR-Dependent LTD:**
- Group I mGluR activation
- IP3-mediated Ca2+ release
- Protein phosphatases (PP1, PP2A, calcineurin)
- AMPA receptor internalization
- Spine shrinkage

**Cerebellar LTD:**
- Parallel fiber + climbing fiber coincidence
- mGluR1 activation
- Protein kinase C
- AMPA receptor internalization
- Motor learning

**Network Plasticity:**

**Cortical Map Plasticity:**
- Merzenich experiments
- Use-dependent expansion
- Representational plasticity
- Border shifts between representations

**Hippocampal Place Cells:**
- Place fields remap with environment
- Rate remapping vs global remapping
- Stability vs flexibility
- Context-dependent activity

**Oscillations and Plasticity:**
- Theta rhythm (4-8 Hz): Exploration
- Sharp-wave ripples: Replay, consolidation
- Gamma (30-80 Hz): Binding
- Sleep spindle coupling

**Critical Period Mechanisms:**

**Visual Cortex:**
- Monocular deprivation effects
- Ocular dominance plasticity
- Parvalbumin interneuron maturation
- Perineuronal nets (PNNs)
- Lynx1 expression

**Closure Mechanisms:**
- PNNs restrict plasticity
- Myelin-associated inhibitors
- Epigenetic changes
- Not absolute - plasticity remains at reduced levels`,
      keyTerms: [
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor; promotes neuronal growth and plasticity' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin; regulates protein synthesis' },
        { term: 'perineuronal net', definition: 'Extracellular matrix structure limiting plasticity around neurons' },
        { term: 'place cell', definition: 'Hippocampal neuron firing at specific spatial locations' },
        { term: 'rate remapping', definition: 'Change in firing rate without change in place field location' },
      ],
      clinicalNotes: 'BDNF Val66Met polymorphism affects activity-dependent BDNF secretion and has been associated with differences in hippocampal volume, memory performance, and susceptibility to psychiatric disorders. This illustrates how genetic variation in plasticity mechanisms can influence cognition and disease risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced neuroplasticity encompasses systems consolidation, maladaptive plasticity in disease, rehabilitation applications, and interventions to enhance or restore plasticity.',
      explanation: `**Systems Consolidation:**

**Standard Model:**
- Hippocampus: Rapid encoding
- Neocortex: Slow, interleaved consolidation
- Systems consolidation over weeks to years
- Sleep-dependent replay
- Memory transformation (gist extraction)

**Multiple Trace Theory:**
- Detailed memories retain hippocampal dependence
- Schematic memories become cortex-dependent
- Context-dependent vs semantic memory

**Active Systems Consolidation:**
- Hippocampal-neocortical dialogue during sleep
- Sharp-wave ripple replay
- Sleep spindle-ripple coupling
- Memory reactivation and stabilization

**Maladaptive Plasticity:**

**Chronic Pain:**
- Central sensitization
- Spinal cord plasticity
- Cortical reorganization
- Phantom pain mechanisms
- Reversibility with treatment

**Tinnitus:**
- Tonotopic map changes
- Increased spontaneous activity
- Homeostatic plasticity gone wrong
- Noise trauma triggers

**Drug Addiction:**
- Reward pathway plasticity
- Nucleus accumbens changes
- Prefrontal cortex hypoactivity
- Relapse circuits
- Incubation of craving

**Focal Dystonia:**
- Maladaptive motor cortex reorganization
- "Hand smearing" in musicians
- Sensory-motor mismatch
- Treatment challenges

**Plasticity-Based Interventions:**

**Stroke Rehabilitation:**
- Constraint-induced movement therapy (CIMT)
- Bimanual training
- Robot-assisted therapy
- Brain-computer interfaces
- Transcranial stimulation (tDCS, TMS)
- Timing matters - early intensive therapy

**Amblyopia Treatment:**
- Perceptual learning
- Video game approaches
- PNN disruption (chondroitinase)
- Levodopa augmentation
- Beyond critical period

**Cognitive Training:**
- Working memory training
- Transfer effects debated
- Strategy learning vs capacity increase
- Individual differences
- Commercial brain training limitations

**Neuroplasticity Enhancement:**

**Pharmacological Approaches:**
- D-cycloserine (NMDA partial agonist)
- Amphetamine (enhances norepinephrine)
- SSRIs (chronic effects on plasticity)
- Cholinesterase inhibitors
- Timing-dependent with training

**Brain Stimulation:**
- tDCS (transcranial direct current stimulation)
- tACS (transcranial alternating current stimulation)
- rTMS (repetitive TMS)
- Paired associative stimulation
- Spike-timing dependent protocols

**Environmental Enrichment:**
- Physical exercise effects
- Cognitive engagement
- Social interaction
- Multi-modal stimulation
- Lifelong benefits

**Developmental Considerations:**

**Sensitive Periods:**
- Language acquisition
- Musical training effects
- Sensitive vs critical periods
- Declining but persistent plasticity
- "Use it and improve it"

**Aging and Plasticity:**
- Reduced but not absent
- Physical exercise preserves
- Cognitive engagement matters
- Sleep quality impacts
- BDNF declines with age

**Compensatory Mechanisms:**
- Bilateral activation in older adults
- Additional brain regions recruited
- Successful vs unsuccessful aging
- Cognitive reserve concepts

**Clinical Applications:**

**Phantom Limb Pain:**
- Cortical reorganization correlates with pain
- Mirror therapy
- Visual feedback approaches
- Cortical stimulation
- Reversing maladaptive plasticity

**Neurorehabilitation Principles:**
- Massed practice
- Task-specific training
- Shaping techniques
- Feedback importance
- Motivation and engagement

**Spinal Cord Injury:**
- Locomotor training
- Epidural stimulation
- Activity-dependent plasticity
- Below-level rehabilitation
- Functional recovery potential`,
      keyTerms: [
        { term: 'systems consolidation', definition: 'Process by which memories become independent of hippocampus over time' },
        { term: 'central sensitization', definition: 'Increased responsiveness of nociceptive neurons in CNS' },
        { term: 'constraint-induced movement therapy', definition: 'Rehabilitation approach restricting unaffected limb to force use of affected limb' },
        { term: 'tDCS', definition: 'Transcranial direct current stimulation; weak electrical modulation of cortex' },
        { term: 'cognitive reserve', definition: 'Brain resilience allowing function despite damage or pathology' },
      ],
      clinicalNotes: 'Constraint-induced movement therapy (CIMT) demonstrates the power of plasticity-based rehabilitation. By constraining the unaffected limb, patients are forced to use the affected limb, driving massed practice and cortical reorganization. Studies show cortical map expansion correlates with functional improvement.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neuroplasticity encompasses computational models of learning, advanced in vivo imaging techniques, molecular interventions to reopen critical periods, and personalized neurorehabilitation approaches.',
      explanation: `**Computational Models:**

**Reinforcement Learning:**
- Reward prediction error
- Dopamine signaling
- Actor-critic architectures
- Basal ganglia models
- nigrostriatal and mesolimbic pathways

**Unsupervised Learning:**
- Hebbian learning rules
- Oja\'s rule
- BCM theory (Bienenstock, Cooper, Munro)
- Sliding threshold for LTP/LTD
- Homeostatic mechanisms

**Supervised Learning:**
- Perceptron learning
- Backpropagation (biological approximations)
- Target propagation
- Credit assignment problem
- Real vs synthetic gradients

**Predictive Coding:**
- Free energy principle
- Hierarchical models
- Top-down predictions
- Bottom-up prediction errors
- Active inference

**Advanced Imaging Techniques:**

**Two-Photon Microscopy:**
- In vivo spine imaging
- Chronic longitudinal studies
- Learning-related changes
- Sleep and plasticity
- Structural dynamics

**Wide-Field Calcium Imaging:**
- Cortical dynamics
- Network activity
- Behavioral correlations
- Multi-region interactions

**Functional MRI:**
- Resting-state networks
- Task-evoked plasticity
- Neurofeedback applications
- Real-time fMRI
- Multivariate pattern analysis

**Optogenetics Combined with Imaging:**
- Circuit mapping
- Causal manipulations
- Closed-loop systems
- Behavior integration

**Reopening Critical Periods:**

**Molecular Approaches:**
- Chondroitinase ABC: PNN digestion
- Lynx1 knockout/inhibition
- Histone deacetylase inhibitors
- Valproic acid effects
- Serotonin reuptake inhibition (fluoxetine)

**Environmental Approaches:**
- Environmental enrichment
- Physical exercise
- Dark exposure (visual system)
- Food restriction
- Stress modulation

**Applications:**
- Amblyopia treatment in adults
- Stroke recovery enhancement
- PTSD extinction
- Addiction treatment
- Anxiety disorders

**Personalized Neurorehabilitation:**

**Biomarkers:**
- TMS motor evoked potentials
- MRI-based connectivity
- EEG signatures
- Genetic factors (BDNF, APOE)
- Inflammatory markers

**Stratification Approaches:**
- Responder vs non-responder prediction
- Treatment matching
- Dose optimization
- Timing optimization
- Combination therapies

**Closed-Loop Systems:**
- Brain-computer interfaces
- Neurofeedback
- Adaptive training protocols
- Real-time adjustments
- Home-based systems

**Neural Prosthetics:**
- Motor BCIs
- Sensory restoration
- Closed-loop stimulation
- Plasticity incorporation
- Bidirectional interfaces

**Research Frontiers:**

**Transcriptomics of Plasticity:**
- Activity-dependent gene expression
- Single-cell RNA sequencing
- Arc protein tracing
- Memory engram identification
- Engram cell manipulation

**Connectomic Plasticity:**
- Large-scale structural changes
- Longitudinal connectomics
- Developmental trajectories
- Learning-induced changes
- Graph theory approaches

**Epigenetics of Plasticity:**
- DNA methylation changes
- Histone modifications
- Non-coding RNAs
- Transgenerational effects
- Environmental interactions

**Immunology and Plasticity:**
- Microglia in synaptic pruning
- Complement cascade (C1q, C3)
- Cytokine effects
- Neuroimmune interactions
- Therapeutic targeting

**Translational Challenges:**

**From Animal to Human:**
- Species differences
- Model validity
- Intervention translation
- Clinical trial design
- Regulatory pathways

**Implementation Science:**
- Protocol standardization
- Training requirements
- Cost-effectiveness
- Accessibility
- Technology transfer

**Ethical Considerations:**
- Cognitive enhancement
- Identity and authenticity
- Informed consent for BCIs
- Privacy with neural data
- Equity of access`,
      keyTerms: [
        { term: 'engram', definition: 'Physical substrate of memory in the brain; memory trace' },
        { term: 'prediction error', definition: 'Difference between expected and actual outcome; drives learning' },
        { term: 'chondroitinase ABC', definition: 'Enzyme that digests chondroitin sulfate proteoglycans in PNNs' },
        { term: 'closed-loop', definition: 'System that adjusts based on real-time neural feedback' },
        { term: 'BCM theory', definition: 'Computational model with sliding threshold for LTP/LTD based on activity' },
      ],
      clinicalNotes: 'Expert considerations: (1) Fluoxetine (Prozac) and other SSRIs may reopen critical period-like plasticity in adults through effects on inhibition and BDNF - this mechanism may contribute to their therapeutic effects in anxiety and PTSD. (2) Chondroitinase ABC has shown promise in animal models for reopening plasticity, but translation to humans requires careful delivery and safety evaluation. (3) Memory engram research using techniques like Arc-CreERT2 allows identification and manipulation of specific memory traces, with implications for understanding and potentially treating traumatic memories.',
    },
  },

  media: [
    {
      id: 'neuroplasticity-diagram',
      type: 'diagram',
      filename: 'synaptic-plasticity-mechanisms.jpg',
      title: 'Synaptic Plasticity Mechanisms',
      description: 'Illustration of LTP and LTD mechanisms at synapses',
    },
  ],

  citations: [
    {
      id: 'merzenich-plasticity',
      type: 'article',
      title: 'Progression of Change Following Median Nerve Section in the Cortical Representation of the Hand',
      authors: ['Merzenich, M.M.'],
      source: 'Journal of Neuroscience',
    },
    {
      id: 'malenka-nicoll-review',
      type: 'article',
      title: 'Long-Term Potentiation - A Decade of Progress',
      authors: ['Malenka, R.C.', 'Nicoll, R.A.'],
      source: 'Science',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-action-potentials', targetType: 'process', relationship: 'related', label: 'Action Potentials' },
    { targetId: 'physiology-synaptic-transmission', targetType: 'process', relationship: 'related', label: 'Synaptic Transmission' },
    { targetId: 'pathology-neurodegeneration', targetType: 'condition', relationship: 'see-also', label: 'Neurodegeneration' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'learning', 'memory'],
    keywords: ['neuroplasticity', 'LTP', 'LTD', 'learning', 'memory', 'synaptic plasticity'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neuroplasticity;
