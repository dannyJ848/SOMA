/**
 * Sleep Basics - Comprehensive Educational Content
 *
 * Covers fundamental concepts: sleep stages, sleep architecture,
 * circadian rhythms, sleep needs by age, and sleep debt.
 */

import { EducationalContent } from '../types';

export const sleepStages: EducationalContent = {
  id: 'sleep-stages',
  type: 'process',
  name: 'Sleep Stages',
  alternateNames: ['Stages of Sleep', 'Sleep Cycles', 'NREM and REM Sleep'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep happens in different stages, like going up and down stairs all night long, with each stage doing different important jobs for your body and brain.',
      explanation: `When you fall asleep, you don't just stay in one kind of sleep all night. Instead, your brain moves through different stages of sleep, like climbing up and down a staircase several times during the night.

**The Two Main Types of Sleep:**

1. **Quiet Sleep (NREM)** - Your body is very still and resting
   - Light sleep: Easy to wake up
   - Deep sleep: Hard to wake up, your body repairs itself

2. **Dream Sleep (REM)** - Your brain is very active
   - This is when you have your most vivid dreams
   - Your body can't move much (so you don't act out dreams!)
   - Your eyes move around under your eyelids

**A Night of Sleep:**
- You go through all the stages about 4-6 times each night
- Each complete cycle takes about 90 minutes
- Early in the night, you spend more time in deep sleep
- Later in the night, you spend more time dreaming

**Why Each Stage Matters:**
- Light sleep helps you transition in and out of sleep
- Deep sleep helps your body grow and heal
- Dream sleep helps you remember things and process emotions`,
      keyTerms: [
        { term: 'NREM sleep', definition: 'Quiet sleep when your body rests and repairs itself' },
        { term: 'REM sleep', definition: 'Dream sleep when your brain is very active and your eyes move' },
        { term: 'sleep cycle', definition: 'One complete trip through all the sleep stages, taking about 90 minutes' },
      ],
      analogies: [
        'Sleep stages are like floors in a building - you take the elevator down through light sleep, deep sleep, then back up to dream sleep, over and over all night.',
        'Your sleep cycles are like waves in the ocean - they come and go in a regular pattern throughout the night.',
      ],
      examples: [
        'When your parents check on you early in the night, you might be in deep sleep and very hard to wake up.',
        'If you wake up in the middle of a dream, you can often remember it clearly because you were in REM sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep consists of NREM stages (N1, N2, N3) and REM sleep, cycling approximately every 90 minutes throughout the night with distinct physiological characteristics and functions.',
      explanation: `Sleep is divided into two main categories: Non-Rapid Eye Movement (NREM) and Rapid Eye Movement (REM) sleep. These alternate throughout the night in predictable cycles.

**NREM Sleep (75-80% of sleep):**

*Stage N1 (Light Sleep) - 5% of sleep*
- Transition between wake and sleep
- Lasts only 1-7 minutes
- Easy to wake from
- May experience muscle jerks (hypnic jerks)
- Brain waves begin to slow

*Stage N2 (True Sleep) - 45-55% of sleep*
- Body temperature drops
- Heart rate slows
- Brain produces sleep spindles and K-complexes
- Memory consolidation begins
- Harder to wake than N1

*Stage N3 (Deep/Slow-Wave Sleep) - 15-25% of sleep*
- Deepest stage of sleep
- Very difficult to wake
- Growth hormone released
- Body repairs tissues
- Immune system strengthens
- Delta brain waves dominate

**REM Sleep (20-25% of sleep):**
- Brain becomes very active (almost like being awake)
- Vivid dreaming occurs
- Eyes move rapidly
- Body is paralyzed (muscle atonia)
- Heart rate and breathing become irregular
- Important for memory and emotional processing

**Sleep Cycle Pattern:**
- Each cycle lasts 90-120 minutes
- 4-6 cycles per night
- Early cycles: More deep sleep (N3)
- Later cycles: More REM sleep
- First REM period: ~10 minutes
- Later REM periods: 30-60 minutes`,
      keyTerms: [
        { term: 'sleep spindle', definition: 'Bursts of brain activity during N2 sleep important for memory', pronunciation: 'spin-dul' },
        { term: 'K-complex', definition: 'Large brain waves that help protect sleep from disturbances' },
        { term: 'delta waves', definition: 'Slow brain waves (0.5-4 Hz) that characterize deep sleep' },
        { term: 'muscle atonia', definition: 'Temporary paralysis during REM sleep that prevents acting out dreams', pronunciation: 'ay-TOE-nee-ah' },
        { term: 'hypnic jerk', definition: 'Sudden muscle twitch that sometimes occurs when falling asleep' },
      ],
      analogies: [
        'Sleep stages are like gears in a car - each one serves a different purpose and you shift through them smoothly during the night.',
        'REM atonia is like a safety switch that disconnects your muscles so you can dream about running without actually running.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep architecture comprises distinct electrophysiologically-defined stages (N1, N2, N3, REM) with characteristic EEG patterns, cycling in ultradian rhythms with stage-specific neurophysiology and functions.',
      explanation: `## Sleep Stage Classification (AASM Scoring)

**Stage W (Wakefulness):**
- Alpha rhythm (8-13 Hz) when eyes closed
- Beta activity when eyes open or mental activity
- Eye movements present
- Variable muscle tone

**Stage N1 (NREM 1):**
- Duration: 1-7 minutes per episode
- EEG: Alpha attenuation, low-amplitude mixed frequency (4-7 Hz theta)
- Vertex sharp waves may appear
- Slow rolling eye movements
- EMG: Reduced but present
- Arousal threshold: Very low

**Stage N2 (NREM 2):**
- Duration: 10-25 minutes per cycle
- EEG characteristics:
  - Sleep spindles: 11-16 Hz bursts, ≥0.5 seconds
  - K-complexes: Biphasic waves, well-defined negative sharp wave followed by positive component
  - Background: Low-amplitude mixed frequency
- No eye movements
- EMG: Further reduced

**Stage N3 (NREM 3/Slow-Wave Sleep):**
- Duration: 20-40 minutes in first cycle, decreases through night
- EEG: ≥20% of epoch contains slow-wave activity
- Delta waves: 0.5-2 Hz, amplitude >75 microvolts
- No eye movements
- EMG: Low or atonic
- Arousal threshold: Highest

**Stage R (REM):**
- First episode: 10-15 minutes (90 min after sleep onset)
- Later episodes: 30-60 minutes
- EEG: Low-amplitude, mixed-frequency (theta, sawtooth waves)
- EOG: Rapid conjugate eye movements
- EMG: Atonic (except phasic twitches)
- Associated phenomena: Dreams, PGO waves, cardiorespiratory irregularity

## Ultradian Cycling

**NREM-REM Cycle:**
- Period: ~90-120 minutes
- Controlled by reciprocal interaction between:
  - REM-on neurons (cholinergic PPT/LDT)
  - REM-off neurons (aminergic LC, DR)

**Progressive Changes:**

| Cycle | Deep Sleep (N3) | REM Duration |
|-------|-----------------|--------------|
| 1st   | Longest         | Shortest     |
| 2nd   | Moderate        | Moderate     |
| 3rd   | Reduced         | Longer       |
| 4th+  | Minimal/Absent  | Longest      |

## Stage-Specific Functions

**N2 Functions:**
- Sleep spindle generation protects sleep continuity
- Memory consolidation (spindle-hippocampal replay coupling)
- Thalamocortical processing

**N3 Functions:**
- Growth hormone release (most of daily secretion)
- Tissue repair and protein synthesis
- Immune function enhancement
- Glymphatic clearance peaks
- Slow oscillation-spindle coupling for memory

**REM Functions:**
- Procedural memory consolidation
- Emotional memory processing
- Brain development (high in neonates)
- Creativity and problem-solving
- Synaptic maintenance`,
      keyTerms: [
        { term: 'sleep spindle', definition: 'Waxing-waning 11-16 Hz oscillations lasting ≥0.5 sec, generated by thalamic reticular nucleus-thalamocortical circuits' },
        { term: 'K-complex', definition: 'High-amplitude biphasic EEG wave triggered by external stimuli or spontaneously; arousal-protective function' },
        { term: 'slow oscillation', definition: 'Cortically-generated <1 Hz rhythm that groups spindles and ripples for memory consolidation' },
        { term: 'sawtooth waves', definition: 'Sharply-contoured 2-6 Hz theta waves often preceding bursts of REMs' },
        { term: 'ultradian rhythm', definition: 'Biological rhythm with period shorter than circadian (~24h), such as 90-min sleep cycle' },
      ],
      clinicalNotes: 'N3 percentage decreases with age (from ~25% in young adults to ~5% in elderly). Reduced N3 correlates with impaired glucose tolerance and cognitive function. Sleep spindle density may be biomarker for cognitive reserve and schizophrenia risk.',
    },
    4: {
      level: 4,
      summary: 'Sleep staging reflects coordinated thalamocortical dynamics producing characteristic oscillatory patterns, with each stage representing distinct neural network configurations supporting stage-specific physiological and cognitive functions.',
      explanation: `## Neurophysiological Basis of Sleep Stages

### NREM Oscillations

**Slow Oscillations (<1 Hz):**
- Generated in neocortex (layer V pyramidal neurons)
- Bistable membrane potential alternation:
  - UP state: Depolarized, active firing
  - DOWN state: Hyperpolarized, neuronal silence
- Propagates as traveling wave
- Groups other rhythms (spindles, ripples)

**Sleep Spindles (11-16 Hz):**
\`\`\`
Mechanism:
1. TRN GABAergic neurons → burst firing
2. Rhythmic IPSPs to thalamocortical (TC) neurons
3. TC rebound burst firing via T-type Ca2+ channels
4. Recurrent TC → TRN excitation
5. Spindle frequency determined by TRN-TC loop time
\`\`\`

**K-Complexes:**
- Large biphasic waves (1000+ μV)
- Generated by widespread cortical synchronization
- Triggered by:
  - External stimuli (arousal-protective)
  - Internal state changes
  - Spontaneous cortical events
- May isolate or merge with spindles

**Delta Waves (0.5-4 Hz):**
- Thalamocortical origin
- TC neuron intrinsic oscillation (clock-like mode)
- Enhanced by hyperpolarization
- Blocked by cholinergic activation

### REM Sleep Neurophysiology

**EEG Activation:**
- Cholinergic input from PPT/LDT → thalamus
- Depolarizes TC neurons → tonic firing mode
- Low-voltage, fast EEG similar to wake

**Ponto-Geniculo-Occipital (PGO) Waves:**
- Generated in pontine tegmentum
- Propagate to LGN and occipital cortex
- Precede rapid eye movements
- May relate to dream imagery generation

**Muscle Atonia Circuit:**
\`\`\`
Sublaterodorsal nucleus (glutamate) →
Ventral medullary reticular formation →
Glycinergic/GABAergic interneurons →
α-motor neuron hyperpolarization →
Skeletal muscle atonia
\`\`\`

### Memory Consolidation Mechanisms

**Active Systems Consolidation (N3):**
1. Hippocampal sharp-wave ripples (100-200 Hz)
2. Reactivate recent memory traces
3. Slow oscillation UP states gate transfer
4. Spindles facilitate cortical plasticity
5. Memory becomes hippocampus-independent

**Synaptic Homeostasis (N3):**
- Slow-wave activity (SWA) reflects sleep need
- SWA correlates with synaptic strength
- Down-states may facilitate synaptic downscaling
- Renormalizes synaptic weights

**REM Sleep Consolidation:**
- Procedural/emotional memory
- Theta oscillations (4-8 Hz)
- Hippocampal-neocortical replay
- Synaptic strengthening/pruning

### Developmental Changes

**Sleep Stage Ontogeny:**

| Age | N3 (%) | REM (%) | Cycle Length |
|-----|--------|---------|--------------|
| Neonate | ~20 | ~50 | 50-60 min |
| Child | ~25 | ~25 | 60-90 min |
| Young adult | ~20 | ~25 | 90-120 min |
| Elderly | ~5-10 | ~20 | 90-120 min |

**Age-Related Changes:**
- N3 declines 2% per decade after age 20
- Spindle density and amplitude decrease
- Sleep fragmentation increases
- Circadian amplitude dampens
- Sleep timing advances (earlier bedtime/wake)`,
      keyTerms: [
        { term: 'UP state', definition: 'Depolarized phase of slow oscillation with active neuronal firing during NREM sleep' },
        { term: 'T-type calcium channel', definition: 'Low-threshold voltage-gated calcium channel enabling thalamocortical burst firing and spindle generation' },
        { term: 'sharp-wave ripple', definition: 'Hippocampal 100-200 Hz oscillation during NREM crucial for memory consolidation' },
        { term: 'active systems consolidation', definition: 'Theory that memory transfer from hippocampus to neocortex occurs during coupled slow oscillations, spindles, and ripples' },
        { term: 'PGO waves', definition: 'Ponto-geniculo-occipital waves marking phasic REM events, possibly related to dream content' },
      ],
      clinicalNotes: 'Sleep spindle deficits are observed in schizophrenia (reduced density) and correlate with cognitive impairment. K-complexes are reduced in Alzheimer disease and may reflect cortical dysfunction. Medications affecting T-type Ca2+ channels (ethosuximide) disrupt spindle generation.',
    },
    5: {
      level: 5,
      summary: 'Sleep stages represent distinct brain states with characteristic oscillatory signatures reflecting coordinated thalamocortical-limbic network dynamics, supporting state-dependent functions including memory consolidation, metabolic clearance, and synaptic homeostasis with translational implications for neuropsychiatric disease.',
      explanation: `## Advanced Sleep Electrophysiology

### High-Density EEG and Source Localization

**Slow Oscillation Topography:**
- Originates in medial prefrontal/orbitofrontal cortex
- Propagates posteriorly at ~2-3 m/s
- Frontal predominance reflects cortical connectivity
- Source localization: Layer V pyramidal neurons

**Spindle Heterogeneity:**
- Fast spindles (13-16 Hz): Centroparietal maximum
- Slow spindles (11-13 Hz): Frontal maximum
- Different thalamic generators (pulvinar vs. anterior nuclei)
- Distinct functional correlates (motor vs. cognitive memory)

**Local Sleep:**
- Slow oscillations can occur locally
- Region-specific sleep debt (use-dependent)
- Sleep deprivation: Local UP state intrusions during wake
- Implications for understanding "microsleeps"

### Intracranial Recordings Insights

**Hippocampal-Cortical Coupling:**
\`\`\`
Temporal Sequence During NREM:
1. Slow oscillation DOWN→UP transition (cortex)
2. Hippocampal sharp-wave ripple (100-250 Hz)
3. Thalamocortical spindle
4. Memory trace reactivation/transfer

Precise timing critical for consolidation
Disrupted in aging and disease
\`\`\`

**Single-Neuron Activity:**
- Cortical neurons silent during DOWN states
- Coordinated replay of wake patterns during UP states
- Replay is temporally compressed (5-20x faster)
- Both awake and sleep replay predict memory

### Computational Models

**Thalamocortical Network Models:**
- Explain spindle generation via intrinsic TRN properties
- Predict effects of connectivity changes
- Model K-complex as widespread synchronization
- Simulate effects of deafferentation

**Synaptic Homeostasis Quantification:**
- SWA as proxy for synaptic strength
- Power spectral analysis of delta/theta
- Slope of slow oscillation correlates with LTP markers
- Mathematical models predict memory consolidation efficiency

### Sleep Stage Biomarkers

**Quantitative EEG Metrics:**

| Measure | Calculation | Clinical Use |
|---------|-------------|--------------|
| SWA power | Delta power (0.5-4 Hz) | Sleep depth, need |
| Spindle density | Spindles/min N2 | Cognitive reserve |
| Spindle-SO coupling | Phase-amplitude | Memory efficiency |
| CAP rate | A-phase % | Sleep instability |
| Delta/theta ratio | Power ratio | Sleep quality |

**Cyclic Alternating Pattern (CAP):**
- Periodic EEG pattern in NREM
- Phase A: Activation (arousal intrusion)
- Phase B: Background
- CAP rate elevated in insomnia, sleep apnea, periodic limb movements

### Molecular and Cellular Sleep Markers

**Transcriptomic Changes:**
- Immediate early genes (Arc, Homer1a) elevated after wake
- Synaptic plasticity genes show sleep-wake rhythms
- GluR1 surface expression decreases during sleep
- Sleep-specific gene expression patterns

**Metabolic Correlates:**
- Cerebral glucose metabolism ~25% lower in NREM vs. wake
- Regional variations (frontal > occipital reduction)
- REM metabolism approaches wake levels
- Lactate oscillates with sleep stages

### Clinical Correlations

**Stage Disruption in Disease:**

| Condition | N3 | Spindles | REM | Pattern |
|-----------|-----|----------|-----|---------|
| Insomnia | ↓ | ↓ density | ↑ latency | Hyperarousal |
| Depression | ↓ | Variable | ↓ latency, ↑% | REM pressure |
| Schizophrenia | ↓ | ↓↓ | Variable | Spindle deficit |
| Alzheimer's | ↓↓ | ↓↓ | ↓ | SWA loss |
| Narcolepsy T1 | Normal | Normal | SOREMPs | REM intrusion |
| OSA | ↓ | Fragmented | ↓ continuity | Stage shifts |

**Pharmacological Effects:**

| Drug Class | N3 | Spindles | REM |
|------------|-----|----------|-----|
| Benzodiazepines | ↓ | ↑ (drug-induced) | ↓ |
| Z-drugs | Minimal Δ | ↑ | Variable |
| Trazodone | ↑ | Normal | ↓ |
| DORAs | Normal | Normal | Normal |
| Antidepressants | Variable | Variable | ↓ (SSRIs) |
| Alcohol | ↓ (rebound) | ↓ | ↓ (early), ↑ (late) |

### Future Directions

**Closed-Loop Stimulation:**
- Auditory stimulation timed to SO UP state
- Enhances slow oscillation amplitude
- Improves memory consolidation
- Potential therapeutic application

**Sleep Stage-Specific Interventions:**
- Targeted memory reactivation (TMR)
- Stage-specific drug delivery concepts
- Personalized sleep optimization

**Biomarker Development:**
- EEG-based sleep quality indices
- Wearable approximations of PSG staging
- Machine learning for stage classification
- Prediction of cognitive/health outcomes`,
      keyTerms: [
        { term: 'local sleep', definition: 'Regional slow oscillations occurring independently, suggesting use-dependent local regulation of sleep' },
        { term: 'cyclic alternating pattern (CAP)', definition: 'Periodic NREM instability pattern with arousal-related activations; elevated in sleep disorders' },
        { term: 'targeted memory reactivation', definition: 'Presenting learning-associated cues during sleep to enhance specific memory consolidation' },
        { term: 'spindle-SO coupling', definition: 'Phase-amplitude coordination of sleep spindles with slow oscillation UP states, critical for memory transfer' },
        { term: 'SOREMP', definition: 'Sleep-onset REM period; REM within 15 min of sleep onset, characteristic of narcolepsy' },
      ],
      clinicalNotes: 'Clinical research frontiers: 1) Closed-loop auditory stimulation to enhance SWA shows promise for cognitive enhancement in elderly. 2) Sleep spindle augmentation being explored as schizophrenia intervention. 3) CAP analysis may predict CPAP response in OSA. 4) Machine learning enables automated staging from reduced montages. 5) Digital biomarkers from wearables correlate modestly with PSG but offer longitudinal monitoring.',
    },
  },

  media: [
    {
      id: 'sleep-stages-diagram',
      type: 'diagram',
      filename: 'sleep-stages-hypnogram.svg',
      title: 'Sleep Stages Hypnogram',
      description: 'Visual representation of sleep stage progression through a typical night',
    },
    {
      id: 'eeg-patterns-stages',
      type: 'diagram',
      filename: 'eeg-sleep-stages.svg',
      title: 'EEG Patterns by Sleep Stage',
      description: 'Characteristic EEG waveforms for each sleep stage',
    },
  ],

  citations: [
    {
      id: 'aasm-manual',
      type: 'textbook',
      title: 'The AASM Manual for the Scoring of Sleep and Associated Events',
      authors: ['American Academy of Sleep Medicine'],
      source: 'AASM, Version 3',
    },
    {
      id: 'kryger-stages',
      type: 'textbook',
      title: 'Principles and Practice of Sleep Medicine',
      authors: ['Kryger, M.H.', 'Roth, T.', 'Dement, W.C.'],
      source: 'Elsevier, 7th Edition',
      chapter: 'Sleep Stages',
    },
  ],

  crossReferences: [
    { targetId: 'sleep-architecture', targetType: 'process', relationship: 'parent', label: 'Sleep Architecture' },
    { targetId: 'circadian-rhythms', targetType: 'process', relationship: 'related', label: 'Circadian Rhythms' },
    { targetId: 'sleep-physiology', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'sleep medicine', 'neuroscience'],
    keywords: ['sleep stages', 'NREM', 'REM', 'sleep spindles', 'slow waves', 'sleep cycles'],
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

export const sleepArchitecture: EducationalContent = {
  id: 'sleep-architecture',
  type: 'process',
  name: 'Sleep Architecture',
  alternateNames: ['Sleep Structure', 'Sleep Organization', 'Sleep Pattern'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep architecture is like a blueprint of your sleep, showing how your brain organizes different types of sleep throughout the night.',
      explanation: `Your sleep has a special pattern, just like a house has a floor plan. We call this pattern "sleep architecture."

**What Does Sleep Architecture Look Like?**

Imagine your night of sleep as building blocks stacked in a special order:
- First, you go through light sleep
- Then you go deeper into really deep sleep
- Then you come back up and have dreams
- This whole thing repeats about 4-6 times!

**The Sleep Building Pattern:**

*First Half of the Night:*
- More time in deep, restorative sleep
- Your body does most of its repair work
- Growth hormone is released
- You might not remember any dreams

*Second Half of the Night:*
- More time in dream (REM) sleep
- Your brain is processing memories
- Dreams are longer and more vivid
- This is why you often wake up from a dream

**What Can Change Your Sleep Architecture?**
- Age (babies have different patterns than adults)
- Not getting enough sleep
- Certain medications
- Sleep disorders
- Stress and worry
- Caffeine and alcohol`,
      keyTerms: [
        { term: 'sleep architecture', definition: 'The pattern and organization of your sleep stages throughout the night' },
        { term: 'sleep efficiency', definition: 'How much of your time in bed you actually spend sleeping' },
        { term: 'sleep latency', definition: 'How long it takes you to fall asleep' },
      ],
      analogies: [
        'Sleep architecture is like the blueprint of a house - it shows how all the rooms (sleep stages) are arranged and connected.',
        'Your nightly sleep pattern is like a rollercoaster that goes down into deep sleep and back up to lighter sleep multiple times.',
      ],
      examples: [
        'If you wake up in the early morning from a vivid dream, it is because you were in REM sleep, which is more common later in the night.',
        'When you are sleep deprived and finally get to sleep, your brain spends extra time in deep sleep first to catch up.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep architecture describes the cyclical organization of sleep stages throughout the night, including the distribution, timing, and proportion of each stage, measured using polysomnography.',
      explanation: `Sleep architecture refers to the structural organization of sleep, including how sleep stages cycle throughout the night and what proportion of sleep is spent in each stage.

**Components of Sleep Architecture:**

*Sleep Continuity Measures:*
- **Total Sleep Time (TST)**: Actual time asleep
- **Time in Bed (TIB)**: Time from lights out to final awakening
- **Sleep Efficiency**: (TST/TIB) x 100%, ideally >85%
- **Sleep Latency**: Time to fall asleep (normal <20 min)
- **Wake After Sleep Onset (WASO)**: Time awake after initial sleep

*Stage Distribution:*
- N1: 2-5% (transitional)
- N2: 45-55% (majority of sleep)
- N3: 15-25% (deep/restorative)
- REM: 20-25% (dreaming)

**Hypnogram:**
A graph that shows sleep stages across time, typically showing:
- Awake periods
- Descent into deeper sleep stages
- Cyclical pattern of NREM-REM alternation
- More N3 early, more REM late

**Normal Architecture Features:**
- 4-6 complete sleep cycles per night
- Cycle length: 90-120 minutes
- First REM latency: 70-100 minutes
- Progressive increase in REM duration
- Progressive decrease in N3 through the night

**Factors Affecting Sleep Architecture:**

| Factor | Effect on Architecture |
|--------|----------------------|
| Age | Less N3, more awakenings |
| Sleep deprivation | Increased N3 (rebound) |
| Alcohol | Decreased REM, fragmented |
| Depression | Short REM latency, increased REM |
| Sleep apnea | Reduced N3/REM, fragmentation |
| Medications | Various effects |`,
      keyTerms: [
        { term: 'hypnogram', definition: 'A graph showing sleep stages plotted over time during a sleep study' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent sleeping', pronunciation: 'ee-FISH-en-see' },
        { term: 'WASO', definition: 'Wake After Sleep Onset - total time awake after initially falling asleep' },
        { term: 'REM latency', definition: 'Time from sleep onset to the first REM period' },
        { term: 'sleep fragmentation', definition: 'Disruption of sleep continuity by brief awakenings or stage shifts' },
      ],
      analogies: [
        'A hypnogram is like a city skyline - the peaks and valleys show when you were in lighter or deeper sleep throughout the night.',
        'Sleep architecture is like a recipe - it specifies not just the ingredients (sleep stages) but the amounts and timing of each.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep architecture encompasses polysomnographic metrics describing sleep macrostructure (stage distribution, continuity) and microstructure (arousals, cyclic patterns), reflecting underlying neurophysiology and providing diagnostic utility.',
      explanation: `## Sleep Architecture Parameters

### Macrostructure

**Sleep Period Time (SPT):**
Time from sleep onset to final awakening

**Total Sleep Time (TST):**
SPT minus WASO

**Stage Percentages (typical adult values):**

| Stage | % TST | Normal Range |
|-------|-------|--------------|
| N1 | 2-5% | 1-10% |
| N2 | 45-55% | 40-60% |
| N3 | 15-25% | 5-30% |
| REM | 20-25% | 15-30% |

**Continuity Metrics:**
- Sleep Onset Latency (SOL): <20 min normal
- REM Latency: 70-100 min normal (MSLT uses 15 min cutoff)
- Sleep Efficiency: >85% normal
- WASO: <30 min normal in young adults
- Arousal Index: <15/hr (increases with age)

### Microstructure

**Arousal Classification:**
- Spontaneous
- Respiratory (apnea/hypopnea)
- Movement-related (PLMs)
- EEG arousal: ≥3 sec frequency shift

**Cyclic Alternating Pattern (CAP):**
- Phase A: Phasic events (arousal-related)
  - A1: Slow oscillatory (restorative)
  - A2/A3: Faster frequencies (sleep instability)
- Phase B: Background activity
- CAP rate: % of NREM with CAP (normally <40%)

### Sleep Cycle Analysis

**NREM-REM Cycle:**
\`\`\`
Cycle 1: N1 → N2 → N3 → N2 → REM (longest N3)
Cycle 2: N2 → N3 → N2 → REM
Cycle 3: N2 → (N3) → N2 → REM (longer REM)
Cycle 4+: N2 → REM (longest REM periods)
\`\`\`

**Sleep Pressure Effects:**
- First cycles dominated by homeostatic drive (deep sleep)
- Later cycles dominated by circadian REM propensity
- Sleep deprivation → N3 rebound first, then REM rebound

### Age-Related Changes

**Developmental Progression:**

| Age | TST | N3% | REM% | Efficiency |
|-----|-----|-----|------|------------|
| Neonate | 16-17h | 20% | 50% | Variable |
| Child | 10-11h | 20-25% | 20-25% | >95% |
| Adolescent | 8-10h | 20% | 22% | >90% |
| Adult | 7-8h | 15-20% | 20-25% | >85% |
| Elderly | 6-7h | 5-10% | 15-20% | 70-80% |

**Aging Effects:**
- SWS declines ~2% per decade (starting age 20)
- Increased sleep fragmentation
- Earlier sleep timing (phase advance)
- Reduced spindle amplitude and density
- Increased N1 percentage

### Clinical Patterns

**Disorder-Specific Signatures:**

| Disorder | Architecture Finding |
|----------|---------------------|
| OSA | Increased N1, decreased N3/REM, arousals |
| Insomnia | Increased SOL, WASO, decreased efficiency |
| Depression | Short REM latency, increased REM density |
| Narcolepsy | SOREMPs, normal overnight architecture |
| RBD | REM without atonia |`,
      keyTerms: [
        { term: 'sleep period time', definition: 'Total time from sleep onset to final awakening, including wake periods' },
        { term: 'arousal index', definition: 'Number of EEG arousals per hour of sleep' },
        { term: 'REM density', definition: 'Frequency of rapid eye movements within REM sleep; increased in depression' },
        { term: 'CAP rate', definition: 'Percentage of NREM sleep showing cyclic alternating pattern; marker of sleep instability' },
        { term: 'SOREMP', definition: 'Sleep Onset REM Period - REM occurring within 15 minutes of sleep onset' },
      ],
      clinicalNotes: 'Sleep architecture assessment guides diagnosis: Short REM latency (<70 min) suggests depression or narcolepsy. SOREMPs (≥2 on MSLT) are diagnostic for narcolepsy. Elevated CAP rate suggests sleep instability (insomnia, PLM, OSA). Decreased N3 with normal subjective sleep suggests paradoxical insomnia.',
    },
    4: {
      level: 4,
      summary: 'Sleep architecture analysis integrates macrostructural metrics with microstructural dynamics to characterize sleep quality, diagnose sleep disorders, and understand the neurophysiological basis of sleep disruption.',
      explanation: `## Advanced Architecture Analysis

### Spectral Analysis

**Power Spectral Density:**
Beyond staging, EEG spectral analysis provides:
- Delta power (0.5-4 Hz): Sleep depth, homeostatic sleep pressure
- Theta power (4-8 Hz): Drowsiness, REM
- Sigma power (11-16 Hz): Spindle activity
- Beta power (16-30 Hz): Arousal, cortical activation

**Slow-Wave Activity (SWA):**
- Primarily delta power in N2/N3
- Frontal predominance
- Declines exponentially through night
- Reflects dissipation of sleep pressure
- Biomarker for sleep need

**Regional Analysis:**
- Frontal SWA highest after cognitive tasks
- Local SWA enhancement after motor learning
- Asymmetric SWA may reflect pathology

### Microstructure Metrics

**Arousal Characterization:**
\`\`\`
Types by duration/features:
- EEG arousal: 3-15 sec frequency shift
- Awakening: >15 sec with alpha
- Movement arousal: With EMG activation
- Autonomic arousal: HR/BP change without EEG change

Clinical significance varies by type and cause
\`\`\`

**Spindle Analysis:**
- Density: Spindles per minute of N2
- Amplitude: Peak-to-peak voltage
- Duration: Individual spindle length
- Frequency: Fast (13-15 Hz) vs. slow (11-13 Hz)
- Coupling: Phase relationship to slow oscillations

**K-Complex Metrics:**
- Density: K-complexes per minute
- Reactivity: Response to stimuli
- Morphology: Amplitude, duration

### Sleep Fragmentation Analysis

**Fragmentation Indices:**

| Index | Calculation | Significance |
|-------|-------------|--------------|
| AI | Arousals/hr TST | General disruption |
| RDI | (Apneas+Hypopneas+RERAs)/hr | Respiratory |
| PLMI | PLMs/hr sleep | Movement |
| ASDI | Stage shifts/hr | Instability |
| CAP rate | CAP time/NREM time | Intrinsic instability |

**Stage Transition Analysis:**
- Normal: Orderly progression N1→N2→N3→N2→REM
- Pathological: Excess N3→Wake or REM→Wake transitions

### Mathematical Models

**Two-Process Model Applied:**
\`\`\`
Process S (homeostatic):
S(t) = S₀ × e^(-t/τ_d) during sleep
Predicts: SWA decline, early N3 dominance

Process C (circadian):
C(t) = A × sin(2π(t-φ)/24)
Predicts: REM timing, alertness rhythm

Interaction:
Sleep propensity = S(t) - C(t)
Architecture reflects both processes
\`\`\`

**Sleep Cycle Modeling:**
- Reciprocal interaction model for NREM-REM
- Limit cycle dynamics
- Explains cycle length stability
- Predicts effects of sleep deprivation

### Disease-Specific Patterns

**Obstructive Sleep Apnea:**
- Macro: ↓N3, ↓REM, ↑N1, ↑WASO
- Micro: ↑AI (respiratory), cyclical desaturations
- Power spectrum: ↓delta, ↑beta (hyperarousal)
- With CPAP: Architecture normalizes

**Major Depression:**
- Macro: Short REM latency, ↑REM%, ↓N3
- Micro: ↑REM density (eye movement frequency)
- Spectral: ↓SWA, ↓spindle power
- Predicts: Treatment response, recurrence

**Chronic Insomnia:**
- Macro: ↑SOL, ↑WASO, ↓efficiency
- Micro: ↑CAP rate (A2/A3), ↑beta in NREM
- PSG-actigraphy discrepancy in paradoxical insomnia
- Hyperarousal markers present

**Neurodegenerative Disease:**
- Alzheimer's: ↓↓N3, ↓spindles, ↓SWA
- Parkinson's/DLB: REM without atonia (RBD)
- Alpha-synucleinopathies: RBD precedes motor by years`,
      keyTerms: [
        { term: 'slow-wave activity', definition: 'EEG delta power during sleep; biomarker for homeostatic sleep pressure' },
        { term: 'power spectral density', definition: 'Frequency decomposition of EEG signal showing power at each frequency' },
        { term: 'reciprocal interaction model', definition: 'Mathematical model explaining NREM-REM cycling through mutual inhibition of aminergic and cholinergic neurons' },
        { term: 'sleep fragmentation index', definition: 'Composite measure of sleep disruption from arousals, stage shifts, and awakenings' },
        { term: 'REM without atonia', definition: 'Persistence of muscle tone during REM sleep; diagnostic marker for REM sleep behavior disorder' },
      ],
      clinicalNotes: 'Spectral analysis adds diagnostic value: Elevated beta during NREM correlates with hyperarousal in insomnia. SWA predicts next-day cognitive performance. Spindle density correlates with learning capacity. REM density predicts antidepressant response. Sigma power (spindles) may distinguish MCI progressors.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive sleep architecture analysis integrates staging, spectral analysis, microstructural dynamics, and computational modeling to characterize sleep phenotypes, understand pathophysiology, and guide precision therapeutics.',
      explanation: `## State-of-the-Art Architecture Analysis

### Advanced Signal Processing

**Time-Frequency Analysis:**
- Wavelet decomposition for non-stationary signals
- Hilbert transform for instantaneous phase/frequency
- Multi-taper spectral estimation for reduced variance
- Event-related spectral perturbation (ERSP)

**Connectivity Analysis:**
- Coherence between electrode pairs
- Phase-amplitude coupling (PAC)
- Directed connectivity (Granger causality)
- Network topology metrics (graph theory)

**Cross-Frequency Coupling:**
\`\`\`
Spindle-Slow Oscillation Coupling:
1. Extract SO phase (0.5-1.5 Hz)
2. Extract spindle amplitude (11-16 Hz)
3. Calculate Modulation Index (MI)
4. Quantify phase preference

Clinical relevance:
- Coupling strength correlates with memory
- Disrupted in schizophrenia, aging
- Enhanced by sleep stimulation
\`\`\`

### Machine Learning Applications

**Automated Sleep Staging:**
- Deep learning (CNN, LSTM) approaches
- Achieves expert-level accuracy (~85% agreement)
- Enables analysis of wearable data
- Allows staging at higher temporal resolution

**Sleep Quality Prediction:**
- Feature extraction from architecture
- Random forest/neural network classifiers
- Predicts subjective sleep quality
- Identifies clinically relevant phenotypes

**Disorder Detection:**
- Convolutional neural networks for apnea detection
- Automated spindle/K-complex detection
- Arousal classification by cause
- RBD screening from EMG

### Biomarker Development

**Cognitive Function Biomarkers:**

| Marker | Correlate | Application |
|--------|-----------|-------------|
| SWA | Sleep depth | Sleep need |
| Spindle density | Learning capacity | Cognitive reserve |
| SO-spindle coupling | Memory consolidation | Intervention target |
| REM theta | Emotional processing | Depression risk |
| Beta intrusion | Hyperarousal | Insomnia severity |

**Disease Biomarkers:**

| Marker | Disease | Stage |
|--------|---------|-------|
| ↓Spindles | Schizophrenia | State marker |
| ↓SWA slope | Alzheimer's | Preclinical |
| REM without atonia | α-synucleinopathy | Prodromal |
| ↑REM density | Depression | Episode |
| ↑CAP A2/A3 | Insomnia | Severity |

### Sleep Phenotyping

**Data-Driven Phenotypes:**
Cluster analysis of architecture reveals distinct groups:
1. "Good sleepers": High efficiency, normal stage distribution
2. "Light sleepers": Increased N1, arousals, low efficiency
3. "Deep sleepers": High N3%, low arousal index
4. "REM-predominant": High REM%, short REM latency

**Genetic Associations:**
- PER3 VNTR: Sleep architecture differences
- ADA polymorphism: SWA amount
- BDNF Val66Met: REM sleep effects
- COMT: Sleep homeostasis and cognition

### Therapeutic Monitoring

**CPAP Titration:**
- Architecture improvement as therapeutic goal
- N3/REM recovery predicts benefit
- Residual arousals guide pressure adjustment

**Medication Effects:**

| Drug | Architecture Effect | Clinical Implication |
|------|---------------------|---------------------|
| Zolpidem | ↑Spindles, preserve architecture | Avoid in complex behaviors |
| Trazodone | ↑N3 | May improve SWS in elderly |
| DORAs | Preserve normal architecture | First-line potential |
| SSRIs | ↓REM, ↑REM latency | May explain vivid dreams on withdrawal |
| Gabapentin | ↑N3, ↑SWA | Useful in comorbid pain |

**Closed-Loop Interventions:**
\`\`\`
Acoustic stimulation protocol:
1. Detect slow oscillation UP state (online)
2. Deliver pink noise pulses
3. Enhance SO amplitude
4. Boost spindle coupling
5. Improve memory consolidation

Clinical trials: Cognitive enhancement in:
- Healthy aging
- MCI
- Sleep deprivation recovery
\`\`\`

### Future Directions

**Precision Sleep Medicine:**
- Individual baseline characterization
- Biomarker-guided treatment selection
- Architecture-targeted interventions
- Closed-loop optimization

**Wearable Technology:**
- Consumer devices improving accuracy
- Longitudinal architecture tracking
- Real-world sleep assessment
- Digital phenotyping

**Integration with Other Data:**
- Genome-wide sleep architecture GWAS
- Metabolomics correlates
- Microbiome-sleep interactions
- Multi-modal biomarker panels`,
      keyTerms: [
        { term: 'phase-amplitude coupling', definition: 'Coordination between the phase of slow oscillations and amplitude of faster rhythms (spindles), critical for memory consolidation' },
        { term: 'modulation index', definition: 'Quantitative measure of cross-frequency coupling strength between oscillatory components' },
        { term: 'closed-loop stimulation', definition: 'Real-time detection of brain states with precisely timed sensory stimulation to enhance specific oscillations' },
        { term: 'sleep phenotype', definition: 'Data-driven classification of individuals based on sleep architecture features' },
        { term: 'digital phenotyping', definition: 'Characterization of behavior and physiology using data from digital devices and wearables' },
      ],
      clinicalNotes: 'Translational priorities: 1) Validate spindle biomarkers for schizophrenia treatment response. 2) Develop SWA slope as AD screening tool. 3) Standardize architecture reports with spectral/microstructural metrics. 4) Create normative databases for age/sex-adjusted comparisons. 5) Establish evidence base for closed-loop cognitive enhancement.',
    },
  },

  media: [
    {
      id: 'sleep-architecture-hypnogram',
      type: 'diagram',
      filename: 'normal-sleep-architecture.svg',
      title: 'Normal Sleep Architecture',
      description: 'Hypnogram showing typical sleep stage distribution across a night',
    },
  ],

  citations: [
    {
      id: 'aasm-architecture',
      type: 'textbook',
      title: 'The AASM Manual for the Scoring of Sleep and Associated Events',
      authors: ['American Academy of Sleep Medicine'],
      source: 'AASM',
    },
  ],

  crossReferences: [
    { targetId: 'sleep-stages', targetType: 'process', relationship: 'child', label: 'Sleep Stages' },
    { targetId: 'sleep-studies', targetType: 'process', relationship: 'related', label: 'Sleep Studies' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'diagnostics'],
    keywords: ['sleep architecture', 'hypnogram', 'sleep efficiency', 'sleep stages'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export const circadianRhythms: EducationalContent = {
  id: 'circadian-rhythms',
  type: 'process',
  name: 'Circadian Rhythms',
  alternateNames: ['Body Clock', 'Biological Clock', 'Sleep-Wake Cycle'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body has a built-in clock that tells you when to feel sleepy and when to feel awake, running on roughly a 24-hour schedule.',
      explanation: `You have an amazing clock inside your body! It doesn't have hands or numbers, but it keeps time just like a real clock. This special body clock runs for about 24 hours and then starts over again.

**What Does Your Body Clock Do?**

Your body clock controls many things:
- When you feel sleepy at night
- When you feel alert during the day
- When you get hungry
- When your body temperature goes up and down
- When you need to go to the bathroom

**How Light Affects Your Clock:**

Your body clock pays attention to light and darkness:
- Morning light tells your brain "time to wake up!"
- Evening darkness tells your brain "time to get sleepy!"
- This is why you feel more awake on sunny days

**What Can Mess Up Your Clock:**
- Staying up very late
- Sleeping in on weekends
- Looking at screens before bed
- Traveling to different time zones (jet lag)
- Keeping lights on at night

**Why This Matters:**
When your body clock is working well, you:
- Fall asleep easily at night
- Wake up feeling refreshed
- Have energy during the day
- Feel hungry at regular meal times`,
      keyTerms: [
        { term: 'circadian rhythm', definition: 'Your body\'s natural 24-hour cycle that controls when you feel sleepy or awake' },
        { term: 'body clock', definition: 'A part of your brain that keeps track of time and tells your body what to do throughout the day' },
        { term: 'jet lag', definition: 'Feeling tired and confused when you travel somewhere with a different time zone' },
      ],
      analogies: [
        'Your body clock is like a conductor leading an orchestra - it tells all the different parts of your body when to play their parts.',
        'Light is like a reset button for your body clock - morning light hits the reset button to start your day.',
      ],
      examples: [
        'On school days you might feel sleepy at 9 PM, but on weekends if you stay up late, you might feel wide awake at that time.',
        'When you visit grandparents in a different time zone, you might feel sleepy when everyone else is awake because your body clock hasn\'t adjusted yet.',
      ],
    },
    2: {
      level: 2,
      summary: 'Circadian rhythms are approximately 24-hour cycles controlled by the brain\'s master clock, regulated by light exposure and influencing sleep timing, hormone release, body temperature, and metabolism.',
      explanation: `Circadian rhythms are biological processes that follow a roughly 24-hour cycle, controlled by an internal master clock that synchronizes with the external environment.

**The Master Clock:**

Located in the suprachiasmatic nucleus (SCN) of the hypothalamus:
- Contains ~20,000 neurons
- Receives light information from the eyes
- Coordinates rhythms throughout the body
- Has an intrinsic rhythm of ~24.2 hours (needs daily resetting)

**Key Circadian Processes:**

*Sleep-Wake Cycle:*
- Alertness peaks in mid-morning and evening
- Sleep propensity highest 2-4 AM and 2-4 PM
- "Second wind" in evening from circadian alerting

*Hormone Rhythms:*
- Melatonin: Rises at night (darkness signal)
- Cortisol: Peaks in early morning
- Growth hormone: Released during early sleep
- TSH, testosterone: Show circadian patterns

*Body Temperature:*
- Minimum around 4-5 AM
- Maximum around 6-7 PM
- 0.5-1°C variation over 24 hours
- Temperature drop signals sleep onset

**Light as the Primary Zeitgeber:**

- "Zeitgeber" means "time giver"
- Light is the strongest signal for resetting the clock
- Morning light advances the clock (wake earlier)
- Evening light delays the clock (sleep later)
- Blue light (460-480 nm) most effective

**Chronotypes:**
- "Larks" (morning types): Early to bed, early to rise
- "Owls" (evening types): Late to bed, late to rise
- Most people are intermediate
- Chronotype is partly genetic, changes with age`,
      keyTerms: [
        { term: 'suprachiasmatic nucleus (SCN)', definition: 'The brain\'s master clock located in the hypothalamus, controlling circadian rhythms', pronunciation: 'SOO-pra-ky-az-MAT-ik' },
        { term: 'melatonin', definition: 'Hormone released at night that signals darkness and promotes sleep' },
        { term: 'zeitgeber', definition: 'Environmental cue that helps synchronize the body clock to 24 hours; light is the strongest', pronunciation: 'ZITE-gay-ber' },
        { term: 'chronotype', definition: 'Individual preference for morning or evening activity based on circadian timing' },
      ],
      analogies: [
        'The SCN is like a conductor coordinating all the clocks in your body, making sure they play in sync.',
        'Zeitgebers are like alarm bells that keep your body clock set to the right time.',
      ],
    },
    3: {
      level: 3,
      summary: 'Circadian rhythms are generated by molecular feedback loops in the SCN and peripheral oscillators, entrained primarily by photic input via melanopsin-containing retinal ganglion cells, and coordinate systemic physiology through humoral and neural outputs.',
      explanation: `## Circadian System Organization

### Central Pacemaker

**Suprachiasmatic Nucleus (SCN):**
- Location: Bilateral nuclei in anterior hypothalamus above optic chiasm
- ~20,000 neurons per nucleus
- Core and shell subregions with distinct functions
- Generates autonomous ~24h rhythm

**Molecular Clock Mechanism:**
\`\`\`
Transcription-Translation Feedback Loops:

Positive limb:
CLOCK + BMAL1 → E-box binding → PER1/2/3, CRY1/2 transcription

Negative limb:
PER/CRY proteins accumulate → Enter nucleus →
Inhibit CLOCK/BMAL1 → Decreased PER/CRY transcription →
PER/CRY degradation → Cycle repeats (~24h)

Secondary loops:
REV-ERBα/β, RORα modulate BMAL1 expression
\`\`\`

### Light Input Pathway

**Intrinsically Photosensitive RGCs (ipRGCs):**
- ~1-2% of retinal ganglion cells
- Contain melanopsin photopigment
- Peak sensitivity: ~480 nm (blue light)
- Project via retinohypothalamic tract to SCN
- Encode irradiance (light intensity) not image

**Photic Entrainment:**
- Light during late night/early morning → Phase advance
- Light during evening → Phase delay
- Phase response curve (PRC) describes timing effects
- Critical for jet lag recovery and shift work adaptation

### Circadian Outputs

**Neural Pathways:**
\`\`\`
SCN → Subparaventricular zone (SPZ) →
Dorsomedial hypothalamus (DMH) →
- VLPO (sleep)
- Orexin neurons (wake)
- Autonomic nuclei

SCN → Paraventricular nucleus (PVN) →
- Sympathetic output
- Pituitary regulation
\`\`\`

**Humoral Signals:**
- Melatonin from pineal gland
- Cortisol from adrenal
- Other hormones with circadian variation

### Peripheral Clocks

**Clock Genes in Peripheral Tissues:**
- Same molecular machinery as SCN
- Found in liver, heart, adipose, immune cells
- Can oscillate independently
- Normally synchronized by SCN

**Entrainment of Peripheral Clocks:**
- Timing of meals (liver, adipose)
- Activity/rest cycles
- Temperature rhythms
- Glucocorticoid rhythms

### Circadian Physiology

| Process | Peak Time | Trough Time |
|---------|-----------|-------------|
| Alertness | 10 AM, 8 PM | 3-5 AM |
| Cortisol | 6-8 AM | Midnight |
| Melatonin | 2-4 AM | Noon |
| Body temperature | 6-8 PM | 4-6 AM |
| Blood pressure | 6-8 PM | 3-5 AM |
| GI motility | Morning | Night |
| Immune function | Night | Day |`,
      keyTerms: [
        { term: 'CLOCK/BMAL1', definition: 'Transcription factors forming the positive arm of the molecular circadian clock' },
        { term: 'PER/CRY', definition: 'Period and Cryptochrome proteins that inhibit CLOCK/BMAL1, forming the negative feedback loop' },
        { term: 'melanopsin', definition: 'Photopigment in ipRGCs responsible for non-visual light detection for circadian entrainment' },
        { term: 'phase response curve', definition: 'Graph showing how light exposure at different times shifts circadian timing' },
        { term: 'peripheral oscillator', definition: 'Tissue-level clock outside the SCN that maintains local circadian rhythms' },
      ],
      clinicalNotes: 'DLMO (dim light melatonin onset) is the gold standard circadian phase marker, occurring ~2-3 hours before habitual sleep onset. Phase delays are easier to achieve than advances (explaining westward travel adaptation). Light therapy timing must account for PRC: morning light for phase advance (delayed sleep phase), evening light for phase delay (advanced sleep phase).',
    },
    4: {
      level: 4,
      summary: 'The circadian system comprises SCN master clock neurons with cell-autonomous molecular oscillators, photic entrainment via ipRGC-mediated glutamatergic signaling, multi-synaptic output pathways, and hierarchically organized peripheral oscillators with clinical implications for chronotherapy.',
      explanation: `## Advanced Circadian Neurobiology

### SCN Circuit Organization

**Core vs. Shell:**
- Core: Receives retinal input (VIP neurons)
- Shell: Outputs to hypothalamus (AVP neurons)
- Core entrains shell
- Shell synchronizes peripheral clocks

**Intercellular Coupling:**
\`\`\`
Mechanisms maintaining coherent SCN output:
1. Gap junctions (electrical coupling)
2. Paracrine signaling (VIP, GABA)
3. Network-level synchronization
4. Required for robust amplitude

Weak coupling → damped rhythms
SCN lesion → loss of circadian coordination
\`\`\`

### Molecular Clock Details

**Core Loop Kinetics:**
| Component | Half-life | Function |
|-----------|-----------|----------|
| PER2 | 4-6 h | Period determination |
| CRY1 | 4-6 h | Feedback repression |
| CLOCK | Stable | Constitutive activator |
| BMAL1 | 4-6 h | Rate-limiting activator |

**Post-Translational Modifications:**
- CK1δ/ε phosphorylate PER → controls degradation rate
- CK1 mutations → FASPS (shortened period)
- GSK3β phosphorylates CRY → stability
- Lithium inhibits GSK3β → period lengthening

**Accessory Loops:**
\`\`\`
REV-ERBα/β loop:
CLOCK/BMAL1 → REV-ERBα transcription
REV-ERBα → BMAL1 repression
Creates antiphase oscillation

RORα loop:
RORα → BMAL1 activation
Counteracts REV-ERB repression
Fine-tunes amplitude
\`\`\`

### Photic Signal Transduction

**ipRGC Subtypes:**
- M1: Strongest SCN projection, most sensitive
- M2-M5: Various visual and non-visual functions
- M1 cells sufficient for circadian photoentrainment

**Glutamatergic Signaling:**
\`\`\`
ipRGC → Glutamate release → SCN

Post-synaptic:
1. AMPA/NMDA receptor activation
2. Ca2+ influx
3. CREB phosphorylation
4. CRE-mediated transcription (Per1, Per2)
5. Phase shift

PACAP co-release modulates response
\`\`\`

### Non-Photic Entrainment

**Behavioral/Exercise:**
- NPY release from intergeniculate leaflet
- Serotonin from raphe
- Can phase shift in absence of light
- Less potent than photic entrainment

**Feeding:**
- Food-entrainable oscillator (FEO)
- Independent of SCN (persists after SCN lesion)
- Entrains liver and peripheral clocks
- Relevant for shift work and metabolic disease

### Circadian Medicine Applications

**Chronotherapy Principles:**
| Drug | Optimal Timing | Rationale |
|------|----------------|-----------|
| Statins | Evening | HMG-CoA reductase peaks at night |
| Aspirin | Evening | Morning CV events |
| Corticosteroids | Morning | Mimics cortisol rhythm |
| Short-acting BP meds | Evening | Non-dipping targets |
| Chemotherapy | Varies | Cell cycle timing |

**Circadian Disorders:**

| Disorder | Phase | Mechanism |
|----------|-------|-----------|
| DSWPD | Delayed (late) | Long τ, reduced sensitivity to AM light |
| ASWPD | Advanced (early) | Short τ (mutations in PER2, CK1δ) |
| N24 | Free-running | Failure to entrain (blind or functional) |
| ISWRD | Fragmented | SCN degeneration (dementia, brain injury) |

**Light Therapy Protocols:**
\`\`\`
DSWPD (Delayed Sleep-Wake Phase Disorder):
- Morning bright light (10,000 lux, 30 min)
- Start at current wake time
- Gradually advance
- Evening light restriction
- Melatonin 5h before DLMO

ASWPD (Advanced Sleep-Wake Phase Disorder):
- Evening bright light (before 9 PM)
- Morning light avoidance
- Less common, harder to treat
\`\`\``,
      keyTerms: [
        { term: 'vasoactive intestinal peptide (VIP)', definition: 'Neuropeptide critical for SCN neuronal synchronization and circadian output' },
        { term: 'CREB', definition: 'Transcription factor activated by photic input that induces Per gene expression for phase shifts' },
        { term: 'food-entrainable oscillator', definition: 'SCN-independent circadian oscillator that entrains to feeding schedule' },
        { term: 'chronotherapy', definition: 'Optimizing drug timing based on circadian rhythms for enhanced efficacy or reduced toxicity' },
        { term: 'DLMO', definition: 'Dim Light Melatonin Onset - gold standard biomarker for circadian phase' },
      ],
      clinicalNotes: 'Practical considerations: 1) Light boxes should be 10,000 lux at eye level; lower intensities require longer exposure. 2) Blue-enriched light is more effective but may damage retina with prolonged use. 3) Melatonin for circadian purposes is low dose (0.5-3 mg) and timing-dependent (phase advance vs. hypnotic effect). 4) Combine light and melatonin for fastest phase shifts. 5) Social/work schedule constraints often limit circadian interventions.',
    },
    5: {
      level: 5,
      summary: 'The circadian system integrates cell-autonomous molecular oscillators with network-level SCN synchronization, multi-modal entrainment pathways, and systemic coordination of physiology, with translational implications for circadian medicine, chronotherapy, and understanding disease chronobiology.',
      explanation: `## Cutting-Edge Circadian Science

### SCN Network Dynamics

**Single-Cell Recordings:**
- Individual SCN neurons show autonomous oscillation
- Periods vary: 22-26 hours across cells
- Network coupling produces coherent 24h output
- VIP signaling critical for synchronization

**Computational Models:**
\`\`\`
SCN as coupled oscillator network:
dθᵢ/dt = ωᵢ + K/N Σⱼ sin(θⱼ - θᵢ)

Parameters:
- θᵢ: Phase of neuron i
- ωᵢ: Intrinsic frequency
- K: Coupling strength

Kuramoto model predicts:
- Synchronization above critical coupling
- Phase distribution effects
- Entrainment range
\`\`\`

**Optogenetic Manipulation:**
- VIP neuron activation shifts phase
- Selective manipulation of core vs. shell
- Dissection of light response pathways
- Potential therapeutic targets

### Epigenetic Regulation

**Chromatin Dynamics:**
- H3K4me3 at clock gene promoters: Activation
- H3K9me2/3: Repression
- Rhythmic histone acetylation
- CLOCK has HAT activity

**DNA Methylation:**
- CpG methylation of clock genes
- Age-related changes
- May explain circadian dampening with age

**Non-Coding RNAs:**
- miRNAs regulate clock gene expression
- circRNAs as miRNA sponges
- lncRNAs in circadian regulation

### Circadian Metabolomics

**Metabolite Rhythms:**
- NAD+ levels cycle (links metabolism to clock)
- SIRT1 deacetylase activity is NAD+-dependent
- SIRT1 modulates CLOCK/BMAL1
- Creates metabolic-circadian crosstalk

**Redox Oscillations:**
- Peroxiredoxin oxidation cycles (~24h)
- Present even in red blood cells (no nucleus)
- Represents non-transcriptional oscillator
- May be ancestral clock mechanism

### Systems-Level Circadian Biology

**Tissue-Specific Clocks:**
| Tissue | Key Outputs | Entrainment |
|--------|-------------|-------------|
| Liver | Metabolism, detox | Feeding, glucocorticoids |
| Heart | Rate, contractility | ANS, temperature |
| Immune | Cytokine production | Glucocorticoids, SCN |
| Adipose | Lipogenesis | Feeding, SNS |
| Muscle | Glucose uptake | Activity, feeding |

**Clock-Controlled Genes:**
- ~10% of transcriptome shows circadian variation
- Tissue-specific programs
- Coordinate local physiology
- Disruption linked to disease

### Circadian Disruption and Disease

**Epidemiological Evidence:**
- Shift work: ↑ Cancer, CVD, metabolic disease
- Chronic jet lag: ↑ Mortality in studies
- Social jet lag: Metabolic dysfunction

**Mechanisms:**
\`\`\`
Central-peripheral desynchrony:
SCN ←→ Peripheral clocks misaligned
↓
Metabolic dysregulation
Inflammation
Impaired repair/immunity
DNA damage accumulation
↓
Disease risk
\`\`\`

**Mouse Models:**
- Clock mutants: Metabolic syndrome, obesity
- Per2 mutants: Increased cancer
- SCN lesion: Reduced lifespan, tumor growth
- Chronic jet lag: Accelerated aging

### Therapeutic Frontiers

**Small Molecule Modulators:**
| Target | Compound | Effect |
|--------|----------|--------|
| CRY | KL001 | Stabilizes CRY, lengthens period |
| REV-ERB | SR9009/SR9011 | Enhances circadian amplitude |
| RORα | Inverse agonists | Modulates immune function |
| CK1 | PF-670462 | Period modification |

**Chronobiotic Development:**
- Melatonin receptor agonists (tasimelteon, ramelteon)
- Selective light spectrum devices
- Circadian-targeted drug delivery
- Meal timing interventions

**Precision Chronotherapy:**
\`\`\`
Workflow:
1. Individual circadian phase assessment (DLMO, actigraphy)
2. Identify clock gene variants
3. Model predicted drug PK/PD rhythms
4. Optimize dosing time
5. Monitor circadian markers

Applications:
- Cancer chemotherapy
- Immunotherapy timing
- Cardiovascular medications
- Psychiatric medications
\`\`\`

### Future Directions

**Wearable Circadian Monitoring:**
- Continuous temperature sensing
- Activity-based phase estimation
- Heart rate variability analysis
- Personalized circadian profiles

**Circadian Biomarkers:**
- Blood-based phase estimation
- Multi-omic circadian signatures
- Real-time phase tracking
- Clinical decision support`,
      keyTerms: [
        { term: 'NAD+ oscillation', definition: 'Circadian cycling of NAD+ linking metabolic state to clock function via SIRT1' },
        { term: 'peroxiredoxin', definition: 'Antioxidant protein showing non-transcriptional ~24h oscillation, present in enucleated cells' },
        { term: 'social jet lag', definition: 'Misalignment between biological clock and social schedule, measured as weekend-weekday sleep timing difference' },
        { term: 'chronobiotic', definition: 'Agent that can shift or stabilize circadian phase' },
        { term: 'central-peripheral desynchrony', definition: 'Misalignment between SCN and peripheral tissue clocks, associated with metabolic disease' },
      ],
      clinicalNotes: 'Research frontiers: 1) Blood-based "TimeSignature" algorithm estimates circadian phase from two samples. 2) REV-ERB agonists show anti-inflammatory effects in preclinical studies. 3) Chronomedicine trials showing timing-dependent efficacy for hypertension treatment, chemotherapy. 4) Individual circadian phenotyping may become standard in precision medicine. 5) Circadian disruption increasingly recognized as modifiable risk factor for cancer, cardiovascular disease, neurodegeneration.',
    },
  },

  media: [
    {
      id: 'circadian-rhythm-diagram',
      type: 'diagram',
      filename: 'circadian-rhythm-24h.svg',
      title: 'The 24-Hour Circadian Rhythm',
      description: 'Diagram showing circadian variation in key physiological processes',
    },
    {
      id: 'molecular-clock',
      type: 'diagram',
      filename: 'molecular-clock.svg',
      title: 'Molecular Circadian Clock',
      description: 'CLOCK-BMAL1 transcription-translation feedback loop',
    },
  ],

  citations: [
    {
      id: 'bass-takahashi',
      type: 'article',
      title: 'Circadian integration of metabolism and energetics',
      authors: ['Bass, J.', 'Takahashi, J.S.'],
      source: 'Science',
      chapter: '330:1349-1354',
    },
  ],

  crossReferences: [
    { targetId: 'sleep-physiology', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'circadian-disorders', targetType: 'condition', relationship: 'see-also', label: 'Circadian Rhythm Disorders' },
  ],

  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['physiology', 'sleep medicine', 'chronobiology'],
    keywords: ['circadian', 'SCN', 'melatonin', 'body clock', 'chronotype'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export const sleepNeedsByAge: EducationalContent = {
  id: 'sleep-needs-by-age',
  type: 'concept',
  name: 'Sleep Needs by Age',
  alternateNames: ['Sleep Requirements', 'How Much Sleep', 'Recommended Sleep Duration'],

  levels: {
    1: {
      level: 1,
      summary: 'Different ages need different amounts of sleep - babies need the most, and adults need the least, but everyone needs enough sleep to be healthy.',
      explanation: `Just like you need different sized clothes as you grow, you need different amounts of sleep at different ages!

**How Much Sleep Do You Need?**

*Babies (0-12 months):*
- Need 12-16 hours of sleep!
- They sleep a lot because their brains are growing super fast
- They sleep during the day and night

*Toddlers (1-2 years):*
- Need 11-14 hours
- Still need naps during the day

*Preschoolers (3-5 years):*
- Need 10-13 hours
- May or may not need a nap

*School-Age Kids (6-12 years):*
- Need 9-12 hours
- Usually don't need naps anymore
- Need to go to bed early enough for school

*Teenagers (13-18 years):*
- Need 8-10 hours
- Their body clocks shift to make them want to stay up late
- School often starts too early for their sleep needs!

*Adults (18+ years):*
- Need 7-9 hours
- Some adults think they can get by on less, but most really can't!

**Why Kids Need More Sleep:**
- Your brain is still growing and developing
- Your body is getting bigger and stronger
- You're learning so many new things every day
- Sleep helps all of this happen!`,
      keyTerms: [
        { term: 'sleep requirements', definition: 'The amount of sleep your body needs to be healthy and feel good' },
        { term: 'age-appropriate sleep', definition: 'The right amount of sleep for your age' },
        { term: 'nap', definition: 'A short sleep during the day that helps young children get enough total sleep' },
      ],
      analogies: [
        'Sleep is like fuel for your body - young growing bodies need more fuel, just like bigger cars need more gas.',
        'Just like you need different amounts of food as you grow, you need different amounts of sleep too.',
      ],
      examples: [
        'A 6-year-old who has to wake up at 6:30 AM for school should go to bed by 8:30 PM to get 10 hours of sleep.',
        'A teenager who needs to wake at 7 AM should be asleep by 10-11 PM, but their body clock makes them feel wide awake until midnight!',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep duration recommendations vary by age, reflecting developmental needs, with infants requiring 12-16 hours and adults needing 7-9 hours, while individual variation exists within each age group.',
      explanation: `Sleep needs change dramatically across the lifespan, reflecting changes in brain development, growth, and physiology.

**Official Recommendations (AASM/AAP):**

| Age Group | Recommended Sleep | Notes |
|-----------|------------------|-------|
| Newborn (0-3 mo) | 14-17 hours | Irregular, around-the-clock |
| Infant (4-12 mo) | 12-16 hours | Consolidating to nighttime |
| Toddler (1-2 yr) | 11-14 hours | Including 1-2 naps |
| Preschool (3-5 yr) | 10-13 hours | May include nap |
| School age (6-12 yr) | 9-12 hours | No nap needed |
| Teen (13-18 yr) | 8-10 hours | Delayed sleep phase common |
| Adult (18-64 yr) | 7-9 hours | Individual variation |
| Older adult (65+) | 7-8 hours | Sleep quality often reduced |

**Why Sleep Needs Change:**

*Infancy/Childhood:*
- Rapid brain development (synaptogenesis, pruning)
- Physical growth (growth hormone release during sleep)
- Memory consolidation for massive learning
- Immune system development

*Adolescence:*
- Continued brain development (especially prefrontal cortex)
- Pubertal changes affect sleep timing
- Circadian shift delays natural sleep time by 1-2 hours
- Social and academic demands compete with sleep

*Adulthood:*
- Brain fully developed
- Sleep becomes more efficient
- Greater ability to consolidate sleep
- N3 (deep sleep) naturally decreases

**Individual Variation:**

- Genetics influence sleep need (5-10% are "short sleepers")
- Health status affects requirements
- Activity level matters
- Quality vs. quantity both important

**Signs of Insufficient Sleep:**
- Difficulty waking in the morning
- Falling asleep in class or during quiet activities
- Mood problems (irritability, depression)
- Difficulty concentrating
- Frequent illness`,
      keyTerms: [
        { term: 'sleep duration', definition: 'Total amount of time spent asleep in a 24-hour period' },
        { term: 'short sleeper', definition: 'Person who genetically needs less sleep (usually <6 hours) without negative effects' },
        { term: 'delayed sleep phase', definition: 'Natural tendency to fall asleep and wake later, common in teenagers' },
      ],
      analogies: [
        'Sleep needs are like caloric needs - growing children and teenagers need more, just like active athletes need more calories.',
        'A teenager\'s shifted sleep schedule is like their body being on a different time zone than the school schedule.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep duration requirements are developmentally regulated, with guidelines based on systematic reviews of sleep duration-health outcome relationships, while acknowledging genetic variants and individual differences in optimal sleep.',
      explanation: `## Evidence-Based Sleep Recommendations

### Guideline Development

**Methodology (AASM Consensus):**
- Systematic literature review
- Expert panel assessment
- GRADE methodology for evidence quality
- Considers sleep duration-outcome relationships

**Key Outcomes Evaluated:**
- Attention, behavior, learning
- Emotional regulation
- Quality of life
- Mental and physical health
- Accidents/injuries

### Age-Specific Guidelines

**Pediatric (AASM/AAP 2016):**

| Age | Hours/24h | Evidence Level |
|-----|-----------|----------------|
| 4-12 months | 12-16 | Moderate |
| 1-2 years | 11-14 | Moderate |
| 3-5 years | 10-13 | Moderate |
| 6-12 years | 9-12 | Moderate |
| 13-18 years | 8-10 | Moderate |

**Adult (AASM/SRS 2015):**
- 7-9 hours for healthy adults
- <7 hours associated with adverse outcomes
- >9 hours may indicate underlying condition
- Older adults: 7-8 hours

### Developmental Determinants

**Ontogeny of Sleep Architecture:**
\`\`\`
Newborn → Adult progression:
- REM: 50% → 20-25%
- N3: Increases then decreases
- Total sleep: 16h → 7-8h
- Sleep consolidation increases
- Circadian rhythm matures by ~6 months
\`\`\`

**Biological Drivers:**
- Homeostatic regulation matures
- Circadian system develops
- Synaptic density peaks (early childhood) then prunes
- Sleep reflects neural development needs

### Individual Variation

**Genetic Factors:**
- Heritability of sleep duration: ~40%
- DEC2 (BHLHE41) P384R mutation: Short sleep without impairment
- ADRB1 mutations: Reduced sleep need
- PER3 polymorphism: Affects sleep timing

**"Natural Short Sleepers":**
- ~1-3% of population
- Consistently function on <6 hours
- No daytime impairment
- Distinct from sleep restriction
- Specific genetic variants identified

### Health Outcome Relationships

**Insufficient Sleep Associations (Pediatric):**

| Domain | Association |
|--------|-------------|
| Obesity | ↑ Risk per hour of reduced sleep |
| Diabetes | ↑ Risk for T2DM |
| Mental health | ↑ Depression, anxiety |
| Injuries | ↑ Accidents |
| Cognitive | ↓ Attention, academic performance |

**U-Shaped Relationships (Adult):**
- Both short (<7h) and long (>9h) associated with increased mortality
- Long sleep often reflects underlying disease
- Optimal: 7-8 hours

### Special Populations

**Athletes:**
- May require 8-10+ hours
- Sleep extension improves performance
- Increased recovery needs

**Illness/Recovery:**
- Increased sleep need
- Cytokine-mediated
- Supports healing

**Pregnancy:**
- Increased need in first trimester
- Sleep disruption common in third trimester`,
      keyTerms: [
        { term: 'DEC2 mutation', definition: 'Genetic variant (P384R) associated with short sleep phenotype without adverse consequences' },
        { term: 'sleep extension', definition: 'Increasing sleep duration beyond habitual amount; shown to improve athletic performance' },
        { term: 'GRADE methodology', definition: 'Systematic approach to rating evidence quality for clinical guideline development' },
      ],
      clinicalNotes: 'Clinical assessment: Ask about both weekday and weekend sleep times. >2 hour difference suggests weekday sleep restriction (social jet lag). Use validated tools (BEARS questionnaire for pediatrics). Consider sleep debt accumulation over weeks. "Short sleepers" are rare - most who claim to need little sleep show impairment on testing.',
    },
    4: {
      level: 4,
      summary: 'Sleep duration requirements reflect neurodevelopmental processes and homeostatic mechanisms, with evidence-based guidelines informed by systematic reviews while accounting for genetic polymorphisms, chronotype, and individual variation in sleep need.',
      explanation: `## Advanced Concepts in Sleep Duration

### Neurodevelopmental Basis

**Sleep and Brain Development:**
\`\`\`
Critical periods and sleep:
- Synaptogenesis peaks (age 2-4): High sleep need
- Synaptic pruning (adolescence): Continued need
- Myelination continues to age 25: Sleep supports

Sleep deprivation effects on developing brain:
- Altered neural plasticity
- Affected gray matter development
- Impaired white matter integrity
- Behavioral/cognitive consequences
\`\`\`

**Sleep Stage Changes Across Development:**

| Age | REM % | N3 % | Cycle Length |
|-----|-------|------|--------------|
| Neonate | 50% | 20% | 50-60 min |
| 1 year | 30% | 25% | 60-75 min |
| 5 years | 25% | 25% | 75-90 min |
| 10 years | 22% | 25% | 90 min |
| 20 years | 22% | 20% | 90-100 min |
| 60 years | 18% | 10-15% | 90-100 min |

### Homeostatic and Circadian Contributions

**Two-Process Model Across Ages:**
- Children: Rapid buildup and dissipation of Process S
- Adolescents: Slowed accumulation, tolerance of pressure
- Elderly: Reduced amplitude of both processes

**Adenosine Sensitivity:**
- Children: More sensitive to adenosine accumulation
- Adolescents: Develop some tolerance
- May explain reduced afternoon sleepiness despite pressure

### Genetic Architecture

**GWAS Findings:**
- Multiple loci associated with sleep duration
- Pathways: Neuronal excitability, synaptic function
- Overlap with insomnia, chronotype loci

**Rare Variants:**
| Gene | Variant | Phenotype |
|------|---------|-----------|
| DEC2 | P384R | Short sleep (4-6h) |
| ADRB1 | A187V | Short sleep |
| NPSR1 | Y206H | Short sleep |
| GRM1 | Rare variants | Short sleep |

**Polygenic Scores:**
- Predict ~10% of sleep duration variance
- May identify individuals at risk
- Interaction with environmental factors

### Insufficient Sleep: Mechanisms

**Acute Sleep Restriction:**
\`\`\`
Night 1-2: Performance decline
Week 1: Cumulative deficit (dose-response)
Extended: Stable impairment plateau

Cognitive domains affected:
- Attention (vigilance, sustained)
- Working memory
- Executive function
- Emotional regulation
\`\`\`

**Chronic Insufficient Sleep:**
- Allostatic load accumulation
- Metabolic dysregulation
- Inflammatory markers increase
- Cardiovascular risk factors worsen
- May not feel subjectively sleepy (adaptation)

### Assessment Approaches

**Actigraphy:**
- Objective measure of sleep/wake patterns
- 7-14 days recommended
- Estimates total sleep time, efficiency
- Lower bound (doesn't detect wake in bed)

**Sleep Diaries:**
- Subjective complement to actigraphy
- Capture bedtime, wake time, quality
- Calculate sleep opportunity vs. actual sleep
- Identify patterns

**Validated Questionnaires:**
- Pediatric: BEARS, CSHQ
- Adult: PSQI (quality), ESS (daytime sleepiness)
- Chronotype: MEQ

### Intervention Approaches

**Sleep Education:**
- Evidence for improved sleep duration
- School-based programs
- Parent education for pediatric sleep

**School Start Time:**
- Later starts improve teen sleep
- AAP recommends 8:30 AM or later for middle/high school
- Evidence for improved attendance, grades, safety

**Behavioral Interventions:**
- Consistent sleep-wake schedule
- Sleep-conducive environment
- Limit evening light exposure
- Cognitive behavioral strategies`,
      keyTerms: [
        { term: 'cumulative sleep debt', definition: 'Accumulated deficit from chronic insufficient sleep; performance impairment continues to worsen' },
        { term: 'allostatic load', definition: 'Physiological wear-and-tear from chronic stress, including sleep restriction' },
        { term: 'actigraphy', definition: 'Movement-based monitoring of sleep-wake patterns using wrist-worn accelerometer' },
        { term: 'sleep opportunity', definition: 'Time allocated for sleep; may exceed actual sleep time' },
      ],
      clinicalNotes: 'Clinical pearls: 1) Weekend sleep extension of >2h suggests weekday sleep debt. 2) Actigraphy often reveals less sleep than reported in diaries. 3) "Catch-up" sleep on weekends does not fully reverse cognitive deficits. 4) Adolescents often have sleep debt equivalent to one full night by weekend. 5) Consider medical conditions (apnea, PLMs) that reduce effective sleep.',
    },
    5: {
      level: 5,
      summary: 'Sleep duration requirements are determined by neurodevelopmental, homeostatic, and circadian factors, with optimal sleep representing the intersection of biological need and adequate opportunity, informed by genomic variation and assessed through integrated objective and subjective measures.',
      explanation: `## Research Frontiers in Sleep Duration

### Defining Optimal Sleep

**Challenges in Determination:**
- Self-report vs. objective measures
- Sleep opportunity vs. actual sleep
- Quality vs. quantity interaction
- Individual biological variation
- Cultural and environmental factors

**Biomarker Approaches:**
\`\`\`
Potential biological markers of sleep adequacy:
- Cognitive performance testing
- Driving simulation (reaction time)
- PVT (psychomotor vigilance task)
- EEG markers (theta intrusion during wake)
- Inflammatory markers (CRP, IL-6)
- Metabolic markers

Limitations:
- Inter-individual baseline variation
- Adaptation/compensation
- Domain-specific effects
\`\`\`

### Sleep Duration and Mortality

**Epidemiological Data:**
- U-shaped relationship consistently observed
- Short sleep (<6h): ↑ mortality
- Long sleep (>9h): ↑ mortality
- Optimal: 7-8 hours

**Causality Questions:**
| Association | Potential Mechanism |
|-------------|---------------------|
| Short sleep → mortality | Direct (physiological stress) |
| Long sleep → mortality | Reverse causation (illness → more sleep) |
| Long sleep → mortality | Confounding (depression, SES) |
| | Residual confounding |

**Mendelian Randomization Studies:**
- Use genetic variants as instruments
- Provide evidence for causality
- Short sleep: Causal effect on some outcomes
- Long sleep: Less clear causal role

### Precision Sleep Medicine

**Phenotyping Approaches:**
\`\`\`
Individual optimal sleep determination:
1. Objective sleep capacity (extended sleep study)
2. Performance-based assessment
3. Genetic profiling (sleep need variants)
4. Circadian phase determination
5. Personalized recommendation

Current research tools:
- Sleep extension protocols (10h opportunity)
- Performance testing batteries
- Polygenic risk scores
- Wearable longitudinal monitoring
\`\`\`

**Sleep Need Phenotypes:**
- Short sleepers (familial, genetic basis)
- Long sleepers (may be normal variant)
- Variable sleepers (high night-to-night variation)
- Sleep state misperception (objective ≠ subjective)

### Systems Biology of Sleep Duration

**Multi-Omic Correlates:**
| Level | Sleep Duration Associations |
|-------|----------------------------|
| Genomic | DEC2, ADRB1 variants |
| Transcriptomic | Clock gene expression |
| Proteomic | Inflammatory proteins |
| Metabolomic | Lipid profiles, glucose |
| Microbiome | Diversity changes |

**Network Analysis:**
- Sleep duration affects multiple interconnected systems
- Cannot isolate single pathway
- Integrative models needed

### Public Health Implications

**Societal Sleep Debt:**
\`\`\`
Modern factors reducing sleep:
- Artificial light (suppresses melatonin)
- Screen use (light + alerting content)
- Work schedules (shift work, long hours)
- Social demands (24/7 availability)
- Early school times

Population-level consequences:
- Impaired productivity
- Increased accidents
- Healthcare utilization
- Economic costs (estimated $411B/year US)
\`\`\`

**Policy Interventions:**
- School start time legislation
- Work hour regulations
- Public health campaigns
- Daylight saving time debates

### Future Directions

**Wearable Technology:**
- Consumer devices improving accuracy
- Continuous multi-day monitoring
- Integration with other health metrics
- Personalized sleep recommendations

**Digital Phenotyping:**
- Smartphone-based sleep detection
- Passive data collection
- Population-level surveillance
- Real-time intervention

**Personalized Sleep Prescription:**
\`\`\`
Emerging model:
1. Baseline comprehensive assessment
2. Genetic testing (sleep need variants)
3. Circadian typing (DLMO, actigraphy)
4. Performance-based optimization
5. Continuous monitoring and adjustment

Challenges:
- Validation required
- Cost/accessibility
- Behavior change implementation
- Individual vs. societal constraints
\`\`\``,
      keyTerms: [
        { term: 'Mendelian randomization', definition: 'Statistical method using genetic variants to infer causality between exposure and outcome' },
        { term: 'sleep state misperception', definition: 'Discrepancy between subjective sleep experience and objective PSG findings' },
        { term: 'psychomotor vigilance task (PVT)', definition: 'Reaction time test sensitive to sleep deprivation and circadian phase' },
        { term: 'sleep extension protocol', definition: 'Research method providing extended sleep opportunity to determine individual sleep capacity' },
      ],
      clinicalNotes: 'Translational considerations: 1) Population guidelines may not apply to individuals with genetic short/long sleep variants. 2) "Sleep debt" may not be fully recoverable - prevention preferred. 3) Sleep duration tracking via wearables shows promise but validation ongoing. 4) Systems approach needed - addressing sleep alone insufficient without addressing circadian timing, quality. 5) Advocacy for school start times, work policies increasingly evidence-based.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aasm-pediatric',
      type: 'article',
      title: 'Recommended Amount of Sleep for Pediatric Populations',
      authors: ['Paruthi, S.', 'et al.'],
      source: 'J Clin Sleep Med',
      chapter: '12(6):785-786',
    },
    {
      id: 'nsf-guidelines',
      type: 'article',
      title: 'National Sleep Foundation sleep time duration recommendations',
      authors: ['Hirshkowitz, M.', 'et al.'],
      source: 'Sleep Health',
      chapter: '1(1):40-43',
    },
  ],

  crossReferences: [
    { targetId: 'sleep-debt', targetType: 'concept', relationship: 'related', label: 'Sleep Debt' },
    { targetId: 'circadian-rhythms', targetType: 'process', relationship: 'related', label: 'Circadian Rhythms' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'pediatrics', 'public health'],
    keywords: ['sleep duration', 'sleep recommendations', 'age-appropriate sleep'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export const sleepDebt: EducationalContent = {
  id: 'sleep-debt',
  type: 'concept',
  name: 'Sleep Debt',
  alternateNames: ['Sleep Deficit', 'Cumulative Sleep Loss', 'Sleep Deprivation'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep debt is like owing your body sleep - when you don\'t get enough sleep, the tiredness adds up and you need to pay it back.',
      explanation: `Imagine sleep is like money in a piggy bank. Every night, you need to put enough sleep in the bank. But what happens if you don't?

**What Is Sleep Debt?**

Sleep debt is when you don't get enough sleep for several days in a row. The tiredness adds up, just like debt adds up if you keep borrowing money.

**How Sleep Debt Works:**
- If you need 10 hours of sleep but only get 8, you're 2 hours short
- The next night, if you only get 8 hours again, now you're 4 hours short
- This keeps adding up throughout the week!

**Signs You Have Sleep Debt:**
- Hard time waking up in the morning
- Falling asleep during class or while watching TV
- Feeling grumpy or sad
- Having trouble remembering things
- Getting sick more often

**Can You Pay Back Sleep Debt?**

Yes, but it takes time! You can't just sleep 20 hours one night and be all caught up. Your body needs to gradually catch up:
- Getting a little extra sleep over several nights
- Sleeping more on weekends (but not too much!)
- Going to bed earlier

**How to Avoid Sleep Debt:**
- Keep a regular bedtime, even on weekends
- Make sure your room is dark and quiet
- Don't use screens before bed
- Get enough sleep every night so you don't fall behind!`,
      keyTerms: [
        { term: 'sleep debt', definition: 'The total amount of sleep you\'ve missed that your body still needs' },
        { term: 'sleep deprivation', definition: 'Not getting enough sleep' },
        { term: 'catch-up sleep', definition: 'Extra sleep you get to pay back sleep debt' },
      ],
      analogies: [
        'Sleep debt is like borrowing books from the library - eventually you have to return them all, and the longer you wait, the more you owe.',
        'Your body keeps track of missed sleep like a calculator keeping a running total.',
      ],
      examples: [
        'If you stay up late for a week before winter break, you might sleep until noon on the first day off - your body is trying to pay back the sleep debt.',
        'Kids who don\'t get enough sleep during the school week might feel really tired by Friday afternoon.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep debt accumulates when sleep duration is consistently below individual need, causing progressive performance impairment and health effects that require multiple nights of recovery sleep to resolve.',
      explanation: `Sleep debt (also called sleep deficit) develops when you consistently get less sleep than your body needs. Unlike financial debt, which is optional, sleep debt affects your brain and body whether you realize it or not.

**Understanding Sleep Debt:**

*How It Accumulates:*
- Your body has a daily sleep need (e.g., 8 hours)
- Each hour of missed sleep adds to your debt
- Example: Missing 1 hour/night for a week = 7 hours of debt
- Debt accumulates until you have enough recovery sleep

*The Math of Sleep Debt:*
| Night | Sleep Need | Actual Sleep | Daily Debt | Total Debt |
|-------|------------|--------------|------------|------------|
| Mon | 8h | 6h | 2h | 2h |
| Tue | 8h | 7h | 1h | 3h |
| Wed | 8h | 5h | 3h | 6h |
| Thu | 8h | 6h | 2h | 8h |
| Fri | 8h | 7h | 1h | 9h |

**Effects of Sleep Debt:**

*Cognitive:*
- Slower reaction times (like being legally drunk after 24h awake)
- Poor concentration and memory
- Worse decision-making
- Reduced creativity

*Physical:*
- Increased appetite (especially for carbs/sugar)
- Weakened immune system
- Higher blood pressure
- Increased stress hormones

*Emotional:*
- Irritability and mood swings
- Anxiety and depression symptoms
- Lower stress tolerance

**Recovery From Sleep Debt:**

- Cannot be recovered in one night
- Requires extra sleep over multiple nights
- Full recovery may take days to weeks for severe debt
- Some effects may not fully reverse
- Prevention is better than recovery

**Chronic vs. Acute Sleep Debt:**

*Acute:* Short-term (one or a few nights)
- Easier to recover from
- Full recovery possible

*Chronic:* Long-term (weeks to months of insufficient sleep)
- Harder to recognize (adaptation)
- Longer recovery time
- May have lasting effects`,
      keyTerms: [
        { term: 'sleep debt', definition: 'Accumulated difference between sleep needed and sleep obtained' },
        { term: 'acute sleep deprivation', definition: 'Short-term sleep loss, such as staying awake all night' },
        { term: 'chronic sleep restriction', definition: 'Long-term pattern of getting less sleep than needed' },
        { term: 'recovery sleep', definition: 'Extra sleep needed to pay back accumulated sleep debt' },
      ],
      analogies: [
        'Sleep debt is like oxygen debt during exercise - your body keeps track and demands payback.',
        'Chronic sleep debt is like running a credit card balance - the interest (health effects) keeps accumulating.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep debt represents cumulative homeostatic sleep pressure from chronic sleep restriction, manifesting as progressive neurobehavioral impairment, altered metabolism, and health consequences that require extended recovery periods.',
      explanation: `## Sleep Debt: Mechanisms and Consequences

### Homeostatic Basis

**Process S Accumulation:**
\`\`\`
Sleep need = f(prior wake duration, prior sleep duration)

During wake:
- Adenosine accumulates
- Synaptic strength increases
- Sleep pressure builds

During restricted sleep:
- Incomplete dissipation
- Residual pressure carries forward
- Cumulative increase in baseline
\`\`\`

**Dose-Response Relationship:**
- Linear performance decline with increasing restriction
- ~0.1 SD decline per night of 6h sleep (vs. 8h need)
- Cumulative: 14 nights × 6h ≈ 2 nights total deprivation

### Neurobehavioral Consequences

**Performance Domains:**

| Domain | Time Course | Sensitivity |
|--------|-------------|-------------|
| Vigilance/attention | Rapid decline | Very sensitive |
| Working memory | Moderate decline | Sensitive |
| Executive function | Slower decline | Moderate |
| Motor performance | Variable | Less sensitive |

**Wake State Instability:**
- Microsleeps (1-10 seconds)
- Theta intrusions into waking EEG
- Increased sleep pressure
- Unstable alertness

### Metabolic Consequences

**Glucose Regulation:**
- Decreased glucose tolerance after 1 week of 4h sleep
- Similar to early diabetes
- Reversed with recovery sleep

**Hormonal Changes:**
| Hormone | Change | Consequence |
|---------|--------|-------------|
| Leptin | ↓ | Increased hunger |
| Ghrelin | ↑ | Appetite stimulation |
| Cortisol | ↑ (evening) | Metabolic dysregulation |
| Growth hormone | ↓ | Impaired repair |
| Testosterone | ↓ | Reproductive, muscle effects |

**Weight/Obesity:**
- Sleep restriction increases caloric intake ~300-500 kcal/day
- Preference for high-fat, high-carb foods
- Physical activity decreases
- Chronic restriction linked to obesity

### Immune Effects

**Acute Restriction:**
- Decreased vaccine response
- Increased inflammatory markers (IL-6, CRP)
- Altered immune cell function

**Chronic Restriction:**
- Increased infection susceptibility
- Prolonged inflammatory state
- Possible link to chronic disease

### Recovery Dynamics

**Recovery Sleep Characteristics:**
- Increased total sleep time
- Increased N3 (slow-wave) sleep first
- Increased REM later
- May take multiple nights

**Performance Recovery:**
\`\`\`
Recovery time estimation:
- Acute (1 night): 1-2 recovery nights
- 1 week restriction: ~1 week recovery
- Chronic (months): Unknown, possibly incomplete

Factors affecting recovery:
- Age (slower in older adults)
- Severity of restriction
- Individual differences
\`\`\`

### Clinical Implications

**Identifying Sleep Debt:**
- Compare weekday vs. weekend sleep (>2h diff = debt)
- Sleep latency <10 min suggests high debt
- MSLT mean latency <8 min is pathological
- Subjective sleepiness may underestimate impairment

**At-Risk Populations:**
- Shift workers
- Medical residents
- Parents of young children
- Students during exams
- Transportation workers`,
      keyTerms: [
        { term: 'microsleep', definition: 'Brief episode of sleep (seconds) intruding into wakefulness, often unnoticed' },
        { term: 'wake state instability', definition: 'Fluctuating alertness with sleep intrusions due to high sleep pressure' },
        { term: 'theta intrusion', definition: 'Appearance of theta EEG activity during intended wakefulness, indicating sleep pressure' },
      ],
      clinicalNotes: 'Clinical assessment: Caffeine use often masks sleep debt - ask about consumption. Patients may deny sleepiness while showing objective impairment. Sleep latency on MSLT <8 min (with <2 SOREMPs) suggests insufficient sleep if no other cause. Chronic sleep debt may require 1-2 weeks of ad lib sleep for full recovery.',
    },
    4: {
      level: 4,
      summary: 'Sleep debt reflects unmet homeostatic sleep need, producing cumulative neurobehavioral deficits through dose-dependent mechanisms involving adenosinergic signaling, altered thalamocortical dynamics, and systemic metabolic-immune consequences.',
      explanation: `## Advanced Sleep Debt Neurobiology

### Molecular Mechanisms

**Adenosine Dynamics:**
\`\`\`
Normal sleep-wake cycle:
Wake: ATP → AMP → Adenosine accumulation
Sleep: Adenosine clearance

With sleep restriction:
- Incomplete clearance
- Elevated baseline adenosine
- Chronic A1 receptor activation
- Downregulation of receptors (adaptation)
\`\`\`

**Synaptic Homeostasis:**
- Wake: Net synaptic potentiation
- Sleep: Synaptic downscaling
- Restriction: Persistent potentiation
- May explain cognitive effects

**Glymphatic Impairment:**
- Reduced clearance of metabolic waste
- β-amyloid accumulation with sleep loss
- Potential mechanism for dementia risk

### Neural Circuit Changes

**Attention Networks:**
\`\`\`
Sleep deprivation effects on:

Default Mode Network (DMN):
- Increased activation during task
- Failure to deactivate appropriately
- Mind wandering increases

Fronto-parietal Attention Network:
- Decreased recruitment
- Unstable activation
- Lapses in attention
\`\`\`

**Thalamocortical Dynamics:**
- Sleep pressure → bistability (sleep-like intrusions)
- Local sleep in wake (regional theta/delta)
- EEG shows wake instability signatures

### Cardiovascular Effects

**Acute Effects:**
- Increased heart rate
- Elevated blood pressure
- Increased sympathetic tone
- Reduced heart rate variability

**Chronic Effects:**
- Hypertension risk increases
- Coronary artery disease association
- Heart failure risk
- Arrhythmia predisposition

**Mechanisms:**
| Pathway | Effect | Consequence |
|---------|--------|-------------|
| SNS activation | ↑ Catecholamines | HTN, HR |
| Inflammation | ↑ CRP, IL-6 | Atherosclerosis |
| Endothelial | Dysfunction | Vascular disease |
| Metabolic | Insulin resistance | Cardiometabolic risk |

### Modeling Sleep Debt

**Mathematical Models:**
\`\`\`
Three-Process Model:
Performance = f(S, C, W)

S: Homeostatic sleep drive
C: Circadian modulation
W: Sleep inertia (upon waking)

Extension for chronic restriction:
S(t) = S₀ + ∫(accumulation during wake) - ∫(dissipation during sleep)

Chronic component: Slow accumulating deficit
Acute component: Daily fluctuation
\`\`\`

**Predicting Performance:**
- Models used for work scheduling
- Aviation, trucking, healthcare applications
- Account for cumulative effects
- Individual calibration possible

### Individual Differences

**Vulnerability Phenotypes:**
\`\`\`
Distribution of susceptibility:
- ~30% relatively resistant
- ~30% moderately vulnerable
- ~30% highly vulnerable

Stable within individuals across studies
Trait-like characteristic
Genetic component likely
\`\`\`

**Genetic Factors:**
- ADORA2A polymorphisms: Caffeine response, vulnerability
- BDNF: Cognitive effects of sleep loss
- PER3: Recovery dynamics
- DRD2: Performance under deprivation

### Recovery Neuroscience

**Sleep Architecture During Recovery:**
\`\`\`
Night 1 recovery:
- Shortened sleep latency
- Increased N3 percentage
- Increased delta power (intensity)
- REM initially suppressed

Subsequent nights:
- REM rebound
- Gradual normalization
- Duration extends initially
\`\`\`

**Incomplete Recovery Hypothesis:**
- Some deficits may not fully reverse
- Possible structural/epigenetic changes
- Chronic restriction vs. acute distinction
- Prevention vs. recovery importance`,
      keyTerms: [
        { term: 'local sleep', definition: 'Regional sleep-like activity in cortex during behavioral wakefulness under high sleep pressure' },
        { term: 'vulnerability phenotype', definition: 'Stable individual trait for susceptibility to performance impairment from sleep loss' },
        { term: 'three-process model', definition: 'Mathematical model predicting alertness from homeostatic, circadian, and sleep inertia components' },
        { term: 'delta rebound', definition: 'Increased slow-wave activity during recovery sleep reflecting accumulated sleep debt' },
      ],
      clinicalNotes: 'Practical applications: 1) Biomathematical models inform fatigue risk management in aviation, transportation, healthcare. 2) Caffeine is effective but masks subjective sleepiness while performance remains impaired. 3) Recovery sleep should be extended but not unlimited (excessive recovery disrupts circadian rhythm). 4) Prevention strategies: sleep banking (extra sleep before anticipated restriction) may partially mitigate effects.',
    },
    5: {
      level: 5,
      summary: 'Sleep debt encompasses acute and chronic homeostatic dysregulation with distinct neurobiological mechanisms, cumulative dose-dependent impairments across cognitive, metabolic, cardiovascular, and immune domains, and incomplete recovery that emphasizes prevention as the primary strategy.',
      explanation: `## Comprehensive Sleep Debt Science

### Mechanistic Framework

**Multi-Scale Integration:**
\`\`\`
Molecular level:
- Adenosine accumulation and receptor adaptation
- Synaptic potentiation imbalance
- Glymphatic failure and waste accumulation
- Inflammatory cascade activation

Cellular level:
- Neuronal excitability changes
- Glial metabolic stress
- Mitochondrial dysfunction
- Oxidative stress

Circuit level:
- Local sleep intrusion
- Network instability
- Thalamocortical dysregulation
- Attention network failure

Systems level:
- HPA axis dysregulation
- Autonomic imbalance
- Immune-metabolic crosstalk
- Cardiovascular stress
\`\`\`

### Acute vs. Chronic Distinction

**Acute Sleep Deprivation:**
- Clear cause (total sleep loss)
- Severe impairment
- Relatively rapid recovery
- Primarily homeostatic mechanism

**Chronic Sleep Restriction:**
| Feature | Characteristic |
|---------|----------------|
| Accumulation | Gradual (days-weeks) |
| Subjective awareness | Often poor |
| Performance | Cumulative decline |
| Adaptation | Partial (dangerous) |
| Recovery | Prolonged, uncertain |

**Subjective-Objective Dissociation:**
- Chronic restriction: Subjective sleepiness plateaus
- Objective impairment continues to worsen
- Major safety concern
- Explains underestimation of risk

### Advanced Biomarkers

**Potential Sleep Debt Markers:**

| Biomarker | Sample | Status |
|-----------|--------|--------|
| Salivary cortisol | Saliva | Rhythm disruption |
| Inflammatory cytokines | Blood | Elevated |
| PVT lapses | Behavioral | Validated |
| EEG theta power | EEG | Wake instability |
| Oculometric measures | Eye tracking | Research use |
| Wearable actigraphy | Movement | Imprecise |

**Ideal Biomarker Properties:**
- Real-time assessment
- Minimally invasive
- High sensitivity
- Individual calibration
- Practical deployment

### Long-Term Consequences

**Epidemiological Evidence:**
\`\`\`
Chronic short sleep associations:
- All-cause mortality: ↑ (RR ~1.1-1.3)
- Cardiovascular disease: ↑
- Type 2 diabetes: ↑
- Obesity: ↑
- Depression: ↑
- Cognitive decline/dementia: ↑

Dose-response:
Generally linear increase in risk
below ~7 hours sleep
\`\`\`

**Mechanistic Links to Disease:**
| Disease | Sleep Debt Mechanism |
|---------|---------------------|
| Alzheimer's | ↓ Aβ clearance, ↑ tau |
| Diabetes | Insulin resistance |
| Hypertension | SNS activation |
| Obesity | Hunger hormones |
| Depression | HPA axis, inflammation |

### Occupational and Policy Implications

**High-Risk Professions:**
- Healthcare (residents, nurses)
- Transportation (pilots, truck drivers)
- Military operations
- Shift workers (manufacturing, service)

**Regulatory Approaches:**
\`\`\`
Examples:
- FAA flight time limitations
- DOT hours of service rules
- ACGME resident duty hours
- EU working time directive

Components:
- Maximum work hours
- Minimum rest periods
- Cumulative limits
- Recovery requirements
\`\`\`

**Fatigue Risk Management Systems (FRMS):**
- Data-driven approach
- Biomathematical modeling
- Continuous monitoring
- Organizational culture change

### Prevention and Optimization

**Sleep Banking:**
- Extra sleep before anticipated restriction
- Partially mitigates acute effects
- Limited evidence for chronic benefit
- Practical in some contexts

**Napping Strategies:**
\`\`\`
Optimal nap parameters:
- Duration: 10-30 min (avoid inertia)
- Timing: Early-mid afternoon
- Placement: Prophylactic > reactive
- Benefit: Temporary performance boost

Limitations:
- Does not replace night sleep
- Inertia risk with longer naps
- Schedule disruption possible
\`\`\`

**Caffeine Use:**
- Effective alertness enhancement
- Does not restore all function
- Timing matters (avoid near sleep)
- Tolerance with regular use
- Masks true impairment level

### Future Directions

**Research Priorities:**
1. Biomarker development for real-time assessment
2. Individual vulnerability prediction
3. Optimal recovery protocols
4. Long-term consequence prevention
5. Policy effectiveness evaluation

**Technological Approaches:**
- Wearable EEG for drowsiness detection
- AI-powered alertness prediction
- Personalized sleep recommendations
- Closed-loop intervention systems`,
      keyTerms: [
        { term: 'fatigue risk management system (FRMS)', definition: 'Data-driven approach to managing fatigue in safety-sensitive industries using modeling and monitoring' },
        { term: 'sleep banking', definition: 'Strategy of obtaining extra sleep before anticipated restriction to partially mitigate effects' },
        { term: 'subjective-objective dissociation', definition: 'Phenomenon where perceived sleepiness underestimates actual performance impairment in chronic restriction' },
        { term: 'biomathematical fatigue model', definition: 'Computational tool predicting alertness from work/rest schedules accounting for homeostatic and circadian factors' },
      ],
      clinicalNotes: 'Clinical and policy pearls: 1) Chronic sleep restriction is more insidious than acute deprivation - patients adapt subjectively while remaining impaired. 2) "Sleep is for the weak" culture is harmful and should be addressed in patient education. 3) Shift workers may need individualized circadian management, not just sleep hygiene. 4) Safety-critical work should incorporate fatigue risk management. 5) Recovery from chronic restriction likely requires weeks of adequate sleep, not a single weekend.',
    },
  },

  media: [],

  citations: [
    {
      id: 'van-dongen-2003',
      type: 'article',
      title: 'The cumulative cost of additional wakefulness',
      authors: ['Van Dongen, H.P.', 'et al.'],
      source: 'Sleep',
      chapter: '26(2):117-126',
    },
    {
      id: 'banks-dinges',
      type: 'article',
      title: 'Behavioral and physiological consequences of sleep restriction',
      authors: ['Banks, S.', 'Dinges, D.F.'],
      source: 'J Clin Sleep Med',
      chapter: '3(5):519-528',
    },
  ],

  crossReferences: [
    { targetId: 'sleep-needs-by-age', targetType: 'concept', relationship: 'related', label: 'Sleep Needs by Age' },
    { targetId: 'sleep-hygiene', targetType: 'concept', relationship: 'see-also', label: 'Sleep Hygiene' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'public health', 'occupational health'],
    keywords: ['sleep debt', 'sleep deprivation', 'fatigue', 'sleep restriction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default {
  sleepStages,
  sleepArchitecture,
  circadianRhythms,
  sleepNeedsByAge,
  sleepDebt,
};
