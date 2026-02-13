/**
 * Respiratory Control - Respiratory Physiology
 *
 * Neural control of breathing including central and peripheral chemoreceptors,
 * respiratory centers, and responses to various stimuli.
 */

import { EducationalContent } from '../../types';

export const respiratoryControlContent: EducationalContent = {
  id: 'physiology-respiratory-control',
  type: 'concept',
  name: 'Respiratory Control',
  alternateNames: ['Control of Breathing', 'Respiratory Regulation', 'Ventilatory Control'],

  levels: {
    1: {
      level: 1,
      summary: 'Breathing is controlled automatically by your brain, which monitors oxygen and carbon dioxide levels and adjusts your breathing rate and depth without you thinking about it.',
      explanation: `## How Breathing Is Controlled

Your breathing is controlled automatically by special parts of your brain. You do not have to think about breathing - it happens on its own, even when you are sleeping.

### The Brain's Breathing Centers

**Medulla (Brainstem):**
- The main breathing control center
- Located at the base of the brain
- Contains the "pacemaker" that sets breathing rhythm
- Sends signals to breathing muscles
- Tells diaphragm when to contract

**Pons (Above Medulla):**
- Fine-tunes breathing pattern
- Coordinates rhythm
- Helps smooth breathing

### Sensors That Monitor Breathing

**Central Chemoreceptors:**
- Located in the brain
- Monitor carbon dioxide levels in blood
- Most important control of breathing
- When CO2 rises, breathing increases

**Peripheral Chemoreceptors:**
- Located in carotid arteries (neck)
- And aorta (chest)
- Monitor oxygen levels in blood
- Also sense CO2 and pH
- Become important when oxygen is low

### The Control Loop

**How It Works:**
1. Sensors monitor blood gases
2. Send information to brain
3. Brain compares to normal levels
4. Adjusts breathing if needed
5. More CO2 detected -> breathe faster/deeper
6. Less CO2 detected -> breathe slower

### Automatic Breathing

**During Sleep:**
- Breathing continues automatically
- Brain keeps monitoring
- Slower rate than awake

**During Exercise:**
- CO2 and acid increase
- Brain detects changes
- Breathing increases automatically
- Matches need for more oxygen

### You Can Override Temporarily

**Conscious Control:**
- You can hold your breath
- You can breathe faster
- But only for a short time
- Automatic control takes over`,
      keyTerms: [
        { term: 'medulla', definition: 'Part of brainstem that controls automatic breathing' },
        { term: 'chemoreceptors', definition: 'Sensors that detect chemicals like oxygen and carbon dioxide' },
        { term: 'central chemoreceptors', definition: 'Sensors in the brain that monitor CO2' },
        { term: 'peripheral chemoreceptors', definition: 'Sensors in blood vessels that monitor oxygen' },
        { term: 'pacemaker', definition: 'Cells that set the rhythm of breathing' },
      ],
      analogies: [
        'The breathing control center is like a thermostat - it senses the environment and adjusts output to maintain the right levels.',
        'Chemoreceptors are like smoke detectors - they constantly monitor for changes and trigger an alarm (breathing response) when needed.',
        'The brainstem breathing center is like an automatic pilot - it keeps working even when you are not paying attention.',
      ],
      examples: [
        'When you hold your breath, CO2 builds up and central chemoreceptors trigger an irresistible urge to breathe.',
        'At high altitude, low oxygen stimulates peripheral chemoreceptors to increase breathing (hyperventilation).',
      ],
    },
    2: {
      level: 2,
      summary: 'Breathing is controlled by the respiratory center in the brainstem, with central chemoreceptors primarily responsive to CO2 and pH, and peripheral chemoreceptors responsive to hypoxemia, CO2, and pH.',
      explanation: `## Central Respiratory Centers

### Medullary Centers

**Dorsal Respiratory Group (DRG):**
- Located in dorsal medulla
- Main inspiratory center
- Receives input from chemoreceptors
- Generates basic rhythm
- Controls diaphragm via phrenic nerve

**Ventral Respiratory Group (VRG):**
- Located in ventral medulla
- Active during forced breathing
- Expiratory and inspiratory neurons
- Controls accessory muscles

**Pre-Botzinger Complex:**
- Rhythm generation
- Pacemaker neurons
- Critical for breathing
- Contains NK1R neurons

### Pontine Centers

**Pneumotaxic Center:**
- Located in upper pons
- Limits inspiration duration
- Fine-tunes breathing pattern
- Prevents over-inflation

**Apneustic Center:**
- Located in lower pons
- Promotes inspiration
- Cut off by pneumotaxic center
- If isolated: prolonged inspiration (apneusis)

## Chemoreceptors

### Central Chemoreceptors

**Location:**
- Ventrolateral medulla
- Near surface
- Bathed in CSF

**Stimuli:**
- H+ concentration (pH)
- CO2 (indirectly via H+)
- Not directly sensitive to hypoxia

**Response:**
- CO2 crosses blood-brain barrier
- Forms carbonic acid
- Dissociates to H+ and HCO3-
- H+ stimulates receptors
- Increases ventilation

**Characteristics:**
- 70% of ventilatory response to CO2
- Response delayed (minutes)
- Very sensitive
- Adapts over time

### Peripheral Chemoreceptors

**Carotid Bodies:**
- Located at carotid bifurcation
- Main peripheral sensors
- High blood flow per gram
- Very metabolically active

**Aortic Bodies:**
- Near aortic arch
- Less important in humans
- Similar function

**Stimuli:**
- Decreased PaO2 (<60 mmHg)
- Increased PaCO2
- Decreased pH
- Increased temperature

**Response:**
- Rapid (seconds)
- Fast respiratory rate
- Important for acute hypoxia
- Linear response to hypoxia`,
      keyTerms: [
        { term: 'pre-Botzinger complex', definition: 'Group of neurons in medulla generating respiratory rhythm' },
        { term: 'Hering-Breuer reflex', definition: 'Inhibition of inspiration triggered by lung stretch' },
        { term: 'apneic threshold', definition: 'PCO2 level below which breathing stops' },
        { term: 'hypoxic ventilatory response', definition: 'Increase in breathing due to low oxygen' },
        { term: 'CO2 response curve', definition: 'Graph showing ventilation response to increasing CO2' },
      ],
      analogies: [
        'The DRG and VRG are like the conductor and orchestra - one sets the beat, the other manages the full performance.',
        'Central chemoreceptors are like a pH meter in the brain - they detect acidity from CO2 and trigger faster breathing.',
        'The Hering-Breuer reflex is like a safety valve - it prevents the lungs from getting too full.',
      ],
      examples: [
        'In COPD with chronic CO2 retention, central chemoreceptors adapt and hypoxic drive from carotid bodies becomes more important.',
        'Premature infants have weak respiratory drive and can have apnea of prematurity due to immature respiratory centers.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced respiratory control includes neurotransmitter mechanisms, plasticity of respiratory control, special situations like diving and high altitude, and integration of multiple sensory inputs.',
      explanation: `## Neurochemical Control

### Neurotransmitters in Respiratory Centers

**Excitatory:**
- Glutamate (primary excitatory)
- Acetylcholine
- Substance P
- Orexin
- TRH

**Inhibitory:**
- GABA (primary inhibitory)
- Glycine
- Opioids
- Adenosine
- Serotonin (5-HT1A)

### Serotonin and Breathing

**Raphe Nuclei:**
- Provide serotinergic input
- Stimulate respiratory neurons
- Important for upper airway tone
- Respiratory plasticity

### Respiratory Plasticity

**Long-Term Facilitation:**
- Sustained increase in ventilation
- After intermittent hypoxia
- Serotonin-dependent
- Minutes to hours duration

### Special Respiratory Control Situations

**Diving Reflex:**
- Face immersion in cold water
- Apnea, bradycardia
- Peripheral vasoconstriction
- Conserves oxygen

**Breath-Holding:**
- Breaking point from CO2
- Hypoxia secondary
- Training can extend
- Danger of shallow water blackout

**High Altitude:**
- Hypoxic ventilatory response
- Hyperventilation
- Respiratory alkalosis
- Acclimatization over days

### Sleep-Disordered Breathing

**Central Sleep Apnea:**
- Loss of respiratory drive
- No respiratory effort
- High altitude, heart failure
- Opioids

**Obstructive Sleep Apnea:**
- Respiratory effort present
- Upper airway collapse
- Obesity, craniofacial factors`,
      keyTerms: [
        { term: 'long-term facilitation', definition: 'Sustained increase in ventilatory response after intermittent hypoxia' },
        { term: 'CCHS', definition: 'Congenital central hypoventilation syndrome; genetic failure of autonomic breathing' },
        { term: 'Cheyne-Stokes respiration', definition: 'Periodic breathing with waxing and waning pattern' },
        { term: 'Kussmaul breathing', definition: 'Deep, rapid breathing of metabolic acidosis' },
      ],
      analogies: [
        'Long-term facilitation is like muscle memory for breathing - repeated exposures create lasting changes.',
        'The diving reflex is like an emergency mode that prioritizes vital organ function during submersion.',
      ],
      examples: [
        'Congenital central hypoventilation syndrome (CCHS) demonstrates the critical role of PHOX2B gene in respiratory control.',
        'Cheyne-Stokes breathing in heart failure reflects high loop gain and circulation delay.',
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical respiratory control covers assessment of respiratory drive, sleep-disordered breathing pathophysiology, ventilatory control in disease states, and medication effects on breathing.',
      explanation: `## Assessment of Respiratory Drive

**Bedside Assessment:**
- Respiratory rate and pattern
- Depth of breathing
- Accessory muscle use
- P0.1 (occlusion pressure)

**CO2 Response Testing:**
- Rebreathing or steady-state
- Measures ventilatory response
- Slope = CO2 sensitivity
- Blunted in chronic CO2 retention

**Hypoxic Response Testing:**
- Progressive hypoxia
- Hypoxic ventilatory response
- Risk factor for altitude illness

## Sleep-Disordered Breathing

**Obstructive Sleep Apnea:**
- Upper airway collapse during sleep
- Anatomical and neuromuscular factors
- Consequences: hypoxia, arousals, cardiovascular

**Central Sleep Apnea:**
- Loss of respiratory drive
- Loop gain abnormalities
- Heart failure, high altitude

## Disease Effects on Control

**COPD:**
- Chronic CO2 adaptation
- Hypoxic drive becomes important
- Oxygen caution in chronic retainers

**Neuromuscular Disease:**
- Progressive weakness
- Nocturnal hypoventilation first
- Reduced tidal volume

**Metabolic Acidosis:**
- Kussmaul breathing
- Compensatory hyperventilation

## Medication Effects

**Opioids:**
- Mu-receptor agonism
- Decreased CO2 sensitivity
- Respiratory depression
- Dose-dependent effect

**Benzodiazepines:**
- Decreased respiratory drive
- Upper airway obstruction
- Augment opioid depression

**Stimulants:**
- Doxapram, caffeine
- Respiratory stimulation
- Limited clinical utility`,
      keyTerms: [
        { term: 'loop gain', definition: 'Overall feedback strength in respiratory control system' },
        { term: 'P0.1', definition: 'Airway pressure generated 100 ms after airway occlusion' },
        { term: 'RSBI', definition: 'Rapid shallow breathing index; RR/VT ratio predicting weaning' },
        { term: 'patient-ventilator asynchrony', definition: 'Mismatches between patient effort and ventilator support' },
      ],
      clinicalNotes: 'The loop gain concept explains why some patients develop central sleep apnea while others do not. High loop gain (overly sensitive control system) leads to unstable breathing with periodic oscillations.',
    },
    5: {
      level: 5,
      summary: 'Expert respiratory control physiology integrates computational modeling, advanced neurophysiology, molecular mechanisms, and emerging therapeutic approaches for breathing disorders.',
      explanation: `## Computational Models

**Control System Models:**
- Loop gain analysis
- Stability analysis
- Predictive modeling

**Advanced Neurophysiology:**
- Optogenetics in respiratory research
- Calcium imaging of neural circuits
- Patch-clamp recordings

### Molecular Mechanisms

**pH Sensing:**
- TASK channels (K2P)
- GPR4 receptor
- Carbonic anhydrase

**Oxygen Sensing:**
- Mitochondrial ROS
- HIF pathway
- K+ channels in carotid body

### Therapeutic Frontiers

**Phrenic Nerve Stimulation:**
- Diaphragm pacing
- CCHS treatment
- Spinal cord injury

**Closed-Loop Control:**
- Automated ventilation
- Adaptive support
- Smart CPAP

**Gene Therapy:**
- CCHS potential
- PHOX2B delivery

### Future Directions

**Precision Medicine:**
- Genetic profiling
- Personalized targets
- Response prediction

**Neural Interfaces:**
- Brain-computer interfaces
- Restoration of breathing
- ALS applications

**Closed-Loop Systems:**
- Automated oxygen
- Integrated care
- AI-driven control`,
      keyTerms: [
        { term: 'optogenetics', definition: 'Technique using light to control neurons in living tissue' },
        { term: 'closed-loop control', definition: 'Automated system using feedback to adjust ventilation' },
      ],
      clinicalNotes: 'Key insights: Loop gain determines breathing stability; serotonin medullary neurons are critical for drive and plasticity; high loop gain predisposes to central sleep apnea; understanding respiratory control is essential for mechanical ventilation optimization.',
    },
  },

  media: [],

  citations: [
    {
      id: 'west-respiratory',
      type: 'textbook',
      title: 'West\'s Respiratory Physiology: The Essentials',
      authors: ['West JB', 'Luks AM'],
      source: 'Lippincott Williams & Wilkins',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-ventilation-mechanics', targetType: 'concept', relationship: 'related', label: 'Ventilation Mechanics' },
    { targetId: 'physiology-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
  ],

  tags: {
    systems: ['respiratory', 'nervous'],
    topics: ['physiology', 'neuroscience', 'sleep-medicine'],
    keywords: ['respiratory control', 'chemoreceptors', 'breathing', 'ventilation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'physiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryControlContent;
