/**
 * Sleep Stages - Comprehensive Educational Content
 *
 * Covers the different stages of sleep including NREM stages (N1, N2, N3)
 * and REM sleep, along with sleep architecture and cycling patterns.
 */

import { EducationalContent } from '../types';

export const sleepStages: EducationalContent = {
  id: 'process-sleep-stages',
  type: 'process',
  name: 'Sleep Stages',
  alternateNames: ['Sleep Architecture', 'NREM and REM Sleep', 'Sleep Cycles'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep happens in different stages that repeat throughout the night, like a cycle. Each stage has an important job to keep you healthy.',
      explanation: `When you sleep, your brain doesn't just turn off - it goes through different stages of sleep, kind of like climbing up and down a staircase throughout the night.

**The Different Sleep Stages:**

*Light Sleep (Stages 1 and 2):*
- This is when you're first falling asleep
- Easy to wake up
- Your body starts to relax
- Your heart slows down

*Deep Sleep (Stage 3):*
- The deepest, most restful sleep
- Very hard to wake up
- Your body repairs itself
- You grow and build strong muscles
- Your immune system gets stronger

*Dream Sleep (REM):*
- When you have most of your dreams
- Your eyes move back and forth (that's why it's called REM - Rapid Eye Movement)
- Your body is very relaxed but your brain is active
- Helps you remember things you learned

**How Sleep Cycles Work:**
- Each cycle takes about 90 minutes
- You go through 4-6 cycles each night
- Early in the night: more deep sleep
- Later in the night: more dream sleep

That's why getting enough sleep is so important - you need time to go through all these cycles!`,
      keyTerms: [
        { term: 'sleep cycle', definition: 'One complete round of all the sleep stages, lasting about 90 minutes' },
        { term: 'deep sleep', definition: 'The most restful stage of sleep when your body repairs itself' },
        { term: 'REM sleep', definition: 'Dream sleep when your eyes move quickly and your brain is very active' },
        { term: 'light sleep', definition: 'The first stages of sleep when you can still wake up easily' },
      ],
      analogies: [
        'Sleep stages are like going up and down a staircase - you go down into deep sleep, then back up to light sleep, then into dream sleep, and the pattern repeats.',
        'Your brain during different sleep stages is like a computer doing different tasks - sometimes saving files (deep sleep), sometimes organizing them (REM sleep).',
      ],
      examples: [
        'If someone wakes you up right after you fall asleep, you might not even realize you were sleeping - that\'s light sleep.',
        'When you wake up naturally feeling refreshed, you probably woke up at the end of a sleep cycle.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep is divided into NREM (non-rapid eye movement) stages N1, N2, and N3, plus REM sleep. These stages cycle throughout the night with changing proportions of deep and REM sleep.',
      explanation: `Sleep consists of distinct stages that cycle throughout the night, each with different brain activity patterns and physiological functions.

**NREM (Non-Rapid Eye Movement) Sleep:**

*Stage N1 (5% of total sleep):*
- Transition between wake and sleep
- Lasts only 1-5 minutes
- Easily awakened
- Slow rolling eye movements
- May experience hypnic jerks (sudden muscle twitches)
- Brain waves slow from alpha (8-12 Hz) to theta (4-7 Hz)

*Stage N2 (45-55% of total sleep):*
- Light sleep but harder to wake than N1
- Body temperature drops
- Heart rate slows
- Sleep spindles (bursts of brain activity) appear
- K-complexes (large slow waves) occur
- Most time is spent in this stage

*Stage N3 (15-25% of total sleep):*
- Deep sleep, also called slow-wave sleep
- Very difficult to awaken
- Delta waves (large, slow brain waves) dominate
- Growth hormone is released
- Body repairs tissues and builds bone and muscle
- Immune system strengthens
- Decreases with age

**REM (Rapid Eye Movement) Sleep (20-25% of total sleep):**
- Active dreaming occurs
- Eyes move rapidly under closed eyelids
- Brain activity similar to being awake
- Body is paralyzed (muscle atonia) - prevents acting out dreams
- Heart rate and breathing become irregular
- Important for memory consolidation and learning
- Increases toward morning

**Sleep Architecture:**
- Sleep cycles last 90-110 minutes each
- 4-6 cycles per night
- First half of night: more deep sleep (N3)
- Second half of night: more REM sleep
- Each REM period gets longer throughout the night`,
      keyTerms: [
        { term: 'NREM sleep', definition: 'Non-rapid eye movement sleep, comprising stages N1, N2, and N3', pronunciation: 'en-REM' },
        { term: 'slow-wave sleep', definition: 'Stage N3, the deepest sleep stage characterized by delta waves' },
        { term: 'sleep spindle', definition: 'Burst of brain activity during N2 sleep, involved in memory consolidation' },
        { term: 'K-complex', definition: 'Large brain wave pattern in N2 sleep that may protect sleep from disturbances' },
        { term: 'muscle atonia', definition: 'Temporary paralysis of voluntary muscles during REM sleep', pronunciation: 'ay-TOE-nee-ah' },
        { term: 'hypnic jerk', definition: 'Sudden muscle twitch that can occur during the transition to sleep' },
      ],
      analogies: [
        'Sleep stages are like gears on a bike - you shift through different gears (stages) throughout the night, each one serving a different purpose.',
        'The first half of night with more deep sleep is like charging your body\'s battery, while the second half with more REM is like updating your brain\'s software.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep architecture comprises NREM stages (N1, N2, N3) and REM sleep, organized into 90-110 minute ultradian cycles. Each stage has distinct EEG signatures, physiological characteristics, and functions in memory consolidation, tissue restoration, and metabolic regulation.',
      explanation: `## Sleep Stage Classification (AASM Scoring Manual)

**Stage W (Wakefulness):**
- Alpha rhythm (8-13 Hz) with eyes closed
- Eye blinks and reading eye movements
- High muscle tone on EMG

**Stage N1 (Light Sleep):**
- EEG: Alpha attenuation, mixed frequency low amplitude (4-7 Hz theta)
- EOG: Slow rolling eye movements (SREMs)
- EMG: Decreased from wakefulness
- Duration: 1-7 minutes (transition stage)
- Arousal threshold: Low

**Stage N2 (Light Sleep):**
- EEG: Low amplitude mixed frequency background
- K-complexes: High amplitude biphasic waves (>0.5 sec)
- Sleep spindles: 11-16 Hz bursts (0.5-2 sec duration)
  - Generated by thalamic reticular nucleus
  - ~1000 per night
  - Associated with memory consolidation
- Arousal threshold: Moderate

**Stage N3 (Slow-Wave Sleep/Deep Sleep):**
- EEG: Delta waves (0.5-2 Hz) >75 microvolts amplitude
- Criteria: >20% of epoch contains delta activity
- Highest arousal threshold
- Homeostatic pressure: Increases with prior wake duration
- Growth hormone pulse occurs
- Decreases with age (50% reduction by age 60)

**Stage R (REM Sleep):**
- EEG: Low amplitude, mixed frequency (similar to wake)
- Sawtooth waves (2-6 Hz) may precede REM bursts
- EOG: Rapid eye movements (conjugate, irregular, sharply peaked)
- EMG: Atonia (lowest muscle tone of all stages)
- Phasic events: Eye movements, muscle twitches, irregular breathing
- Tonic events: Persistent atonia, EEG desynchronization

## Sleep Cycle Organization

**Ultradian Rhythm:**
| Cycle | Duration | N3 Amount | REM Amount |
|-------|----------|-----------|------------|
| 1st | 70-100 min | Maximal | Minimal/absent |
| 2nd | 90-100 min | Moderate | Increasing |
| 3rd | 90-110 min | Minimal | Moderate |
| 4th+ | 90-110 min | Minimal/absent | Maximal |

**Factors Affecting Sleep Architecture:**
- Age: N3 decreases, sleep fragmentation increases
- Prior sleep deprivation: N3 rebound first, then REM rebound
- Medications: Many suppress REM (antidepressants, alcohol)
- Sleep disorders: OSA fragments sleep, narcolepsy shows REM intrusion

## Stage-Specific Functions

**N3 Functions:**
- Glymphatic clearance (amyloid-beta, tau)
- Synaptic downscaling
- Declarative memory consolidation
- Tissue repair and growth
- Immune function enhancement

**REM Functions:**
- Procedural and emotional memory consolidation
- Brain development (highest in infancy)
- Emotional regulation
- Creativity and problem-solving`,
      keyTerms: [
        { term: 'ultradian rhythm', definition: 'Biological rhythm with period shorter than 24 hours; sleep cycles are ~90-minute ultradian rhythms', pronunciation: 'ul-TRAY-dee-an' },
        { term: 'delta waves', definition: 'High amplitude, slow frequency (0.5-2 Hz) EEG waves characteristic of N3 sleep' },
        { term: 'sawtooth waves', definition: 'Sharply contoured 2-6 Hz waves often preceding REM bursts' },
        { term: 'arousal threshold', definition: 'Intensity of stimulus required to awaken from a given sleep stage' },
        { term: 'phasic REM', definition: 'Portions of REM sleep with eye movements and other phasic events' },
        { term: 'tonic REM', definition: 'Background REM state without phasic events, characterized by persistent atonia' },
      ],
      clinicalNotes: 'Sleep stage assessment requires polysomnography with EEG, EOG, and EMG. N3 sleep is most affected by age (decreases ~2% per decade after age 30). REM sleep is typically suppressed by alcohol, benzodiazepines, and most antidepressants (SSRIs, SNRIs, TCAs). REM rebound can occur upon withdrawal of REM-suppressing medications.',
    },
    4: {
      level: 4,
      summary: 'Sleep stages represent distinct neurophysiological states with characteristic thalamocortical dynamics, neurotransmitter profiles, and functional roles. Understanding sleep architecture is essential for interpreting polysomnography and recognizing pathological patterns in sleep disorders.',
      explanation: `## Neurophysiology of Sleep Stages

### Thalamocortical Dynamics

**NREM Sleep Oscillations:**

*Slow Oscillations (<1 Hz):*
- Generated in cortical layer V pyramidal neurons
- Synchronized UP states (depolarization) and DOWN states (hyperpolarization)
- Group other NREM rhythms (delta, spindles)
- Critical for memory consolidation

*Delta Waves (1-4 Hz):*
- Thalamocortical and corticothalamic loops
- Intrinsic thalamic oscillations in burst mode
- Hyperpolarization-activated cation current (Ih)
- T-type calcium current (IT) for burst firing

*Sleep Spindles (11-16 Hz):*
\`\`\`
Thalamic reticular nucleus (TRN):
GABAergic neurons → Rhythmic inhibition of TC neurons
↓
TC neuron rebound bursting → Cortical activation
↓
Corticothalamic feedback → Reinforces TRN activity
↓
Oscillation maintained for 0.5-2 seconds
\`\`\`

- Two types: Slow (~12 Hz, frontal) and fast (~14 Hz, centroparietal)
- Associated with sleep-dependent memory consolidation
- Reduced in schizophrenia and some cognitive disorders

**REM Sleep Mechanisms:**

*REM-on neurons:*
- PPT/LDT cholinergic neurons
- Sublaterodorsal nucleus (SLD) glutamatergic neurons

*REM-off neurons:*
- LC noradrenergic neurons
- DRN serotonergic neurons
- vlPAG/LPT GABAergic neurons

*Muscle atonia pathway:*
\`\`\`
SLD → Ventromedial medulla → Spinal inhibitory interneurons
↓
Glycine/GABA release → Alpha motor neuron hyperpolarization
↓
Skeletal muscle paralysis (sparing diaphragm, extraocular muscles)
\`\`\`

### Sleep Stage-Specific Neurochemistry

| Stage | ACh | NE | 5-HT | Histamine | Orexin |
|-------|-----|-----|------|-----------|--------|
| Wake | High | High | High | High | High |
| N1 | ↓ | ↓ | ↓ | ↓ | ↓ |
| N2/N3 | Low | Low | Low | Low | Low |
| REM | High | Very low | Very low | Low | Low |

### Homeostatic and Circadian Regulation of Stages

**Process S (Homeostatic):**
- Primarily regulates N3 sleep
- Adenosine accumulation drives slow-wave activity
- SWA (slow-wave activity) proportional to prior wake duration
- SWA highest in first cycle, dissipates through night

**Process C (Circadian):**
- Primarily regulates REM sleep timing
- REM propensity maximal in early morning (circadian peak)
- Opposes homeostatic drive in late night
- Explains REM dominance in second half of night

### Sleep Macrostructure Analysis

**Key Metrics:**
- Total Sleep Time (TST)
- Sleep Efficiency (TST / Time in Bed x 100%)
- Sleep Latency (time from lights out to N1)
- REM Latency (time from sleep onset to first REM)
- Wake After Sleep Onset (WASO)
- Stage percentages (N1%, N2%, N3%, R%)
- Arousal Index (arousals per hour)

**Normal Adult Values:**
| Parameter | Normal Range |
|-----------|--------------|
| Sleep Efficiency | >85% |
| Sleep Latency | <30 minutes |
| REM Latency | 70-120 minutes |
| WASO | <30 minutes |
| N1 | <5% |
| N2 | 45-55% |
| N3 | 15-25% |
| REM | 20-25% |

**Pathological Patterns:**
- Shortened REM latency (<15 min): Narcolepsy, depression
- Decreased N3: Fibromyalgia, aging, chronic pain
- Increased N1: Sleep fragmentation (OSA, PLMD)
- REM without atonia: REM sleep behavior disorder`,
      keyTerms: [
        { term: 'slow oscillation', definition: 'Cortically generated <1 Hz rhythm that groups other NREM oscillations; consists of UP and DOWN states' },
        { term: 'T-type calcium current', definition: 'Low-threshold calcium current (IT) enabling thalamic burst firing during NREM sleep' },
        { term: 'SWA', definition: 'Slow-wave activity; EEG delta power used as marker of homeostatic sleep pressure' },
        { term: 'REM latency', definition: 'Time from sleep onset to first REM period; shortened in narcolepsy and depression' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent asleep; normal >85%' },
        { term: 'WASO', definition: 'Wake After Sleep Onset; total wake time between sleep onset and final awakening' },
      ],
      clinicalNotes: 'REM latency <15 minutes is a diagnostic criterion for narcolepsy on MSLT. Sleep architecture disruption is common in OSA (increased N1, decreased N3/REM) and normalizes with CPAP treatment. Alpha intrusion into delta sleep is seen in fibromyalgia and chronic fatigue syndrome. Antidepressants typically suppress REM and may prolong REM latency.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of sleep stages integrates cellular-level oscillatory mechanisms, regional cortical heterogeneity in sleep depth, memory consolidation theory, and biomarker development, with implications for sleep disorder diagnosis, cognitive function assessment, and therapeutic targeting.',
      explanation: `## Advanced Concepts in Sleep Stage Physiology

### Local Sleep and Regional Heterogeneity

**Local Sleep Theory:**
- Sleep is not a global brain state but shows regional variation
- Use-dependent local sleep: Heavily used cortical areas show more local slow-wave activity
- Explains partial dissociations (e.g., sleepwalking: motor cortex "awake," prefrontal "asleep")
- Sleep "coexists" with wake in some conditions (microsleeps)

**Evidence:**
- High-density EEG shows SWA hotspots over used regions
- Procedural learning increases local spindles in relevant motor areas
- Local sleep can occur in wake-like EEG during deprivation

### Memory Consolidation Mechanisms

**Active Systems Consolidation (N3):**
\`\`\`
Hippocampal sharp-wave ripples (80-120 Hz)
↑↓ (coupled with)
Thalamocortical spindles (11-16 Hz)
↑↓ (nested within)
Cortical slow oscillations (<1 Hz)
↓
Hippocampal → Neocortical memory transfer
\`\`\`

**Synaptic Homeostasis Hypothesis:**
- Wake: Net synaptic potentiation (learning)
- N3: Synaptic downscaling during slow oscillations
- DOWN state allows synaptic depression
- UP state reactivates strengthened connections selectively
- Results in memory consolidation without saturation

**REM Sleep Memory Functions:**
- Procedural/motor memory consolidation
- Emotional memory processing (amygdala activation)
- Creative insight and problem-solving
- Memory integration and schema formation
- Forgetting of irrelevant information (active clearance)

### Spindle Subtypes and Cognitive Function

| Type | Frequency | Topography | Function | Association |
|------|-----------|------------|----------|-------------|
| Slow | ~12 Hz | Frontal | Executive function | Working memory |
| Fast | ~14 Hz | Centroparietal | Learning | IQ, verbal ability |

**Spindle Density as Cognitive Biomarker:**
- Correlates with IQ and learning ability
- Reduced in schizophrenia, mild cognitive impairment
- Increased after learning (overnight consolidation)
- Potential therapeutic target for memory enhancement

### Advanced Sleep Scoring and Analysis

**Sleep Stage Transition Dynamics:**
- First-order Markov model: P(next stage | current stage)
- Transition probabilities differ in health vs. disease
- Increased fragmentation (more transitions) in OSA, aging
- Machine learning approaches for automated scoring

**Spectral Analysis:**
\`\`\`
Power Spectral Density (PSD) by band:
- Delta (0.5-4 Hz): Slow-wave activity, sleep pressure
- Theta (4-8 Hz): N1, drowsiness
- Alpha (8-12 Hz): Relaxed wake, eyes closed
- Sigma (12-16 Hz): Sleep spindles
- Beta (16-30 Hz): Arousal, REM

Derived metrics:
- Delta power ratio: Delta / (Alpha + Beta)
- Sleep pressure index: SWA in first NREM cycle
- Spindle density: Spindles per minute of N2
\`\`\`

**Cyclic Alternating Pattern (CAP):**
- Spontaneous fluctuation between high and low arousal phases
- CAP rate increased in sleep disorders, chronic pain
- Marker of sleep instability
- Phase A (activation) vs. Phase B (background)

### Sleep Stages Across the Lifespan

| Age | TST | N3% | REM% | Features |
|-----|-----|-----|------|----------|
| Newborn | 16-17h | 20% | 50% | Active/quiet sleep |
| Infant | 14-15h | 25% | 30% | Consolidated night sleep |
| Child | 10-11h | 25% | 25% | High SWA amplitude |
| Adolescent | 8-10h | 20% | 25% | Delayed phase |
| Adult | 7-9h | 15-20% | 20-25% | Stable |
| Elderly | 6-7h | 5-10% | 15-20% | Fragmented, advanced phase |

### Clinical Applications

**Diagnostic Patterns in Sleep Disorders:**

| Disorder | Characteristic Finding |
|----------|----------------------|
| Narcolepsy Type 1 | Sleep-onset REM periods (SOREMPs), REM latency <15 min |
| Depression | Shortened REM latency, increased REM density, decreased N3 |
| OSA | Increased N1, decreased N3/REM, arousals terminating apneas |
| RBD | REM without atonia (RSWA) on PSG |
| PLMD | Arousals following periodic limb movements |
| Insomnia | Increased N1, decreased sleep efficiency, misperception of sleep |

**Emerging Technologies:**

*Closed-Loop Stimulation:*
- Acoustic stimulation during slow oscillation UP state
- Enhances slow-wave activity and memory consolidation
- Transcranial direct current stimulation (tDCS) during NREM

*Sleep Staging Wearables:*
- Heart rate variability-based staging
- Actigraphy with sleep stage estimation
- EEG headbands (single-channel algorithms)
- Limitations: Less accurate for N3, REM vs. wake distinction

*Biomarker Development:*
- Spindle metrics for cognitive decline prediction
- SWA as marker for sleep debt and recovery
- REM density for depression treatment response`,
      keyTerms: [
        { term: 'local sleep', definition: 'Concept that sleep can occur in localized brain regions while others remain wake-like' },
        { term: 'sharp-wave ripple', definition: 'Hippocampal oscillation (80-120 Hz) coupled to cortical sleep oscillations during memory consolidation' },
        { term: 'cyclic alternating pattern', definition: 'Periodic EEG pattern during NREM reflecting arousal instability; increased in sleep disorders' },
        { term: 'SOREMP', definition: 'Sleep-onset REM period; REM occurring within 15 minutes of sleep onset, seen in narcolepsy' },
        { term: 'REM density', definition: 'Frequency of eye movements during REM; elevated in depression' },
        { term: 'RSWA', definition: 'REM sleep without atonia; pathological persistence of muscle tone during REM, diagnostic of RBD' },
      ],
      clinicalNotes: 'Clinical pearls: 1) SOREMP on overnight PSG requires exclusion of sleep deprivation and OSA before diagnosing narcolepsy. 2) Short REM latency and increased REM density may predict antidepressant response. 3) Spindle enhancement (pharmacologic or stimulation-based) is being investigated for cognitive enhancement and schizophrenia treatment. 4) Consumer sleep trackers have ~70-80% accuracy for sleep/wake but are less reliable for individual stage detection. 5) Alpha-delta sleep (alpha intrusion into N3) is seen in fibromyalgia but is not specific.',
    },
  },

  media: [
    {
      id: 'sleep-stages-hypnogram',
      type: 'diagram',
      filename: 'sleep-stages-hypnogram.svg',
      title: 'Normal Adult Hypnogram',
      description: 'Typical sleep architecture showing cycling through stages across the night',
    },
    {
      id: 'sleep-stage-eeg',
      type: 'diagram',
      filename: 'sleep-stage-eeg-patterns.svg',
      title: 'EEG Patterns of Sleep Stages',
      description: 'Characteristic EEG waveforms for each sleep stage including spindles and K-complexes',
    },
    {
      id: 'sleep-cycle-diagram',
      type: 'diagram',
      filename: 'sleep-cycle-diagram.svg',
      title: 'Sleep Cycle Structure',
      description: 'Diagram showing the progression through sleep stages within a single cycle',
    },
  ],

  citations: [
    {
      id: 'aasm-scoring-manual',
      type: 'textbook',
      title: 'The AASM Manual for the Scoring of Sleep and Associated Events',
      authors: ['Berry, R.B.', 'Brooks, R.', 'Gamaldo, C.E.'],
      source: 'American Academy of Sleep Medicine',
    },
    {
      id: 'diekelmann-memory',
      type: 'article',
      title: 'The memory function of sleep',
      authors: ['Diekelmann, S.', 'Born, J.'],
      source: 'Nature Reviews Neuroscience',
      chapter: '11:114-126',
    },
    {
      id: 'kryger-principles',
      type: 'textbook',
      title: 'Principles and Practice of Sleep Medicine',
      authors: ['Kryger, M.H.', 'Roth, T.', 'Dement, W.C.'],
      source: 'Elsevier, 7th Edition',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-sleep', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'condition-narcolepsy', targetType: 'condition', relationship: 'see-also', label: 'Narcolepsy' },
    { targetId: 'diagnostic-sleep-studies', targetType: 'topic', relationship: 'related', label: 'Sleep Studies' },
    { targetId: 'condition-rbd', targetType: 'condition', relationship: 'see-also', label: 'REM Sleep Behavior Disorder' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'sleep medicine', 'diagnostics'],
    keywords: ['sleep stages', 'NREM', 'REM', 'N1', 'N2', 'N3', 'hypnogram', 'sleep architecture', 'EEG', 'polysomnography'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default sleepStages;
