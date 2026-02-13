/**
 * Sleep Physiology - Comprehensive Educational Content
 *
 * Covers the fundamental mechanisms of sleep, including neural control,
 * neurotransmitter systems, and homeostatic regulation.
 */

import { EducationalContent } from '../types';

export const sleepPhysiology: EducationalContent = {
  id: 'physiology-sleep',
  type: 'process',
  name: 'Sleep Physiology',
  alternateNames: ['Sleep Neurobiology', 'Sleep Mechanisms', 'Sleep Regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep is a special resting state your brain needs every day to stay healthy, learn new things, and feel good.',
      explanation: `Sleep might look like you're just lying still, but your brain is actually very busy! While you sleep, your brain does important work that it can't do when you're awake.

**Why Do We Sleep?**
- Your brain cleans itself during sleep, removing waste that builds up during the day
- Sleep helps you remember things you learned
- Your body grows and repairs itself while you sleep
- Sleep helps you feel happy and handle your emotions better

**What Controls Sleep?**
Your brain has a built-in "sleep clock" that tells you when to feel sleepy and when to wake up. This clock is affected by:
- Light and darkness (you feel sleepy when it's dark)
- How long you've been awake (the longer you're up, the sleepier you get)
- Your body temperature (it drops when you're ready to sleep)

**How Much Sleep Do You Need?**
- Kids (6-12 years): 9-12 hours
- Teenagers: 8-10 hours
- Adults: 7-9 hours

Just like you need food and water every day, you need sleep every night to stay healthy!`,
      keyTerms: [
        { term: 'sleep', definition: 'A resting state when your body repairs itself and your brain processes information' },
        { term: 'sleep clock', definition: 'A part of your brain that tells you when to feel sleepy and when to wake up' },
        { term: 'melatonin', definition: 'A natural chemical your brain makes when it gets dark to help you feel sleepy' },
      ],
      analogies: [
        'Sleep is like charging your phone - you need to plug in every night to have energy for the next day.',
        'Your brain during sleep is like a cleaning crew that comes in after a store closes to tidy up and restock the shelves.',
      ],
      examples: [
        'When you stay up too late, you might feel grumpy or have trouble paying attention in school the next day.',
        'After a good night\'s sleep, you might find that a video game level that was hard yesterday is easier today - your brain practiced while you slept!',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep is an active physiological state regulated by brain circuits that control sleep-wake transitions, involving specific neurotransmitters and influenced by circadian rhythms and sleep drive.',
      explanation: `Sleep is far from a passive state - it's an active process controlled by specialized brain regions and chemical messengers called neurotransmitters.

**Brain Regions Controlling Sleep:**

*Wake-Promoting Areas:*
- Brainstem (produces norepinephrine, serotonin)
- Hypothalamus (produces histamine, orexin)
- Basal forebrain (produces acetylcholine)

*Sleep-Promoting Areas:*
- Ventrolateral preoptic area (VLPO) of the hypothalamus
- Produces GABA, which inhibits wake centers

**Two-Process Model of Sleep:**

1. **Process S (Sleep Drive/Homeostatic):**
   - Builds up the longer you're awake
   - Related to adenosine accumulation in the brain
   - Caffeine blocks adenosine receptors (that's why coffee wakes you up)
   - Dissipates during sleep

2. **Process C (Circadian):**
   - Controlled by the suprachiasmatic nucleus (SCN)
   - Creates ~24-hour rhythm of alertness
   - Synchronized by light exposure
   - Releases melatonin from pineal gland at night

**What Happens During Sleep:**
- Body temperature drops by 1-2 degrees
- Heart rate and breathing slow
- Blood pressure decreases
- Growth hormone is released
- Immune system becomes more active
- Brain clears metabolic waste through the glymphatic system

**Consequences of Sleep Deprivation:**
- Impaired memory and concentration
- Mood changes and irritability
- Weakened immune function
- Increased appetite and weight gain
- Higher risk of accidents`,
      keyTerms: [
        { term: 'neurotransmitter', definition: 'Chemical messengers that brain cells use to communicate with each other', pronunciation: 'noor-oh-TRANS-mit-er' },
        { term: 'circadian rhythm', definition: 'Your body\'s internal 24-hour clock that regulates sleep-wake cycles', pronunciation: 'sir-KAY-dee-an' },
        { term: 'adenosine', definition: 'A chemical that builds up during waking hours and promotes sleepiness', pronunciation: 'ah-DEN-oh-seen' },
        { term: 'melatonin', definition: 'Hormone released by the pineal gland that signals nighttime and promotes sleep' },
        { term: 'suprachiasmatic nucleus', definition: 'The brain\'s master clock located in the hypothalamus', pronunciation: 'SOO-pra-ky-az-MAT-ik' },
      ],
      analogies: [
        'The sleep-wake system is like a flip-flop switch - it\'s designed to be either fully on (awake) or fully off (asleep), not stuck in between.',
        'Adenosine building up during the day is like sand accumulating in an hourglass - the longer you\'re awake, the more pressure there is to sleep.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep regulation involves reciprocal inhibition between wake-promoting and sleep-promoting neuronal populations, modulated by homeostatic sleep pressure (adenosine) and circadian timing (SCN output), resulting in consolidated sleep-wake states.',
      explanation: `## Neural Control of Sleep-Wake States

**Wake-Promoting Systems (Ascending Arousal System):**

The ascending reticular activating system (ARAS) comprises multiple nuclei:

| Nucleus | Neurotransmitter | Role |
|---------|------------------|------|
| Locus coeruleus | Norepinephrine | Alertness, attention |
| Raphe nuclei | Serotonin | Mood, arousal |
| Tuberomammillary nucleus | Histamine | Wakefulness |
| Lateral hypothalamus | Orexin/Hypocretin | Stabilizes wake state |
| Basal forebrain | Acetylcholine | Cortical activation |
| Ventral tegmental area | Dopamine | Motivation, arousal |

**Sleep-Promoting System:**

The ventrolateral preoptic area (VLPO) and median preoptic nucleus contain GABAergic/galaninergic neurons that:
- Receive inputs signaling sleep need (adenosine)
- Inhibit all components of the ascending arousal system
- Are themselves inhibited by wake-promoting neurotransmitters

**Flip-Flop Switch Model:**

The wake and sleep circuits mutually inhibit each other, creating:
- Bistability: Sharp transitions between states
- Stability: Prevents oscillation between states
- Orexin stabilizes the switch in the "wake" position

## Homeostatic Regulation (Process S)

**Adenosine as Sleep Factor:**
- ATP breakdown product accumulates during waking
- Acts on A1 and A2A receptors
- A1 receptors: Inhibit wake-promoting neurons
- A2A receptors: Activate sleep-promoting VLPO neurons
- Caffeine: Non-selective adenosine receptor antagonist

**Other Somnogens:**
- Prostaglandin D2 (PGD2)
- Cytokines (IL-1, TNF-alpha)
- Nitric oxide
- Growth hormone-releasing hormone (GHRH)

## Circadian Regulation (Process C)

**Suprachiasmatic Nucleus (SCN):**
- ~20,000 neurons in anterior hypothalamus
- Intrinsic period slightly >24 hours
- Entrained by light via retinohypothalamic tract
- Melanopsin-containing retinal ganglion cells (ipRGCs)

**Molecular Clock:**
- Transcription-translation feedback loops
- Core genes: CLOCK, BMAL1, PER1/2/3, CRY1/2
- Period ~24 hours
- Generates rhythmic output affecting sleep propensity

**Melatonin:**
- Synthesized in pineal gland from serotonin
- Released during darkness (inhibited by light)
- Acts on MT1/MT2 receptors in SCN
- Reinforces circadian rhythms
- Can shift circadian phase when administered exogenously

## Glymphatic System

During sleep, the brain's waste clearance system is most active:
- Cerebrospinal fluid flows along perivascular channels
- Interstitial space expands by ~60%
- Clears metabolic waste including amyloid-beta
- Dependent on aquaporin-4 water channels
- May explain cognitive effects of sleep deprivation`,
      keyTerms: [
        { term: 'flip-flop switch', definition: 'Mutually inhibitory circuit between wake and sleep centers that creates sharp state transitions' },
        { term: 'orexin/hypocretin', definition: 'Neuropeptide from lateral hypothalamus that stabilizes wakefulness; deficient in narcolepsy type 1', pronunciation: 'oh-REK-sin / hy-poh-KREE-tin' },
        { term: 'VLPO', definition: 'Ventrolateral preoptic area; primary sleep-promoting region containing GABAergic neurons' },
        { term: 'glymphatic system', definition: 'Brain waste clearance system most active during sleep, using CSF flow along perivascular spaces' },
        { term: 'ipRGCs', definition: 'Intrinsically photosensitive retinal ganglion cells containing melanopsin; relay light information to SCN' },
        { term: 'somnogen', definition: 'Substance that accumulates during waking and promotes sleep', pronunciation: 'SOM-no-jen' },
      ],
      clinicalNotes: 'Understanding sleep neurobiology informs treatment: antihistamines (H1 blockers) cause drowsiness by blocking wake-promoting histamine. Orexin receptor antagonists (suvorexant, lemborexant) promote sleep by blocking the wake-stabilizing effects of orexin. Caffeine\'s alerting effect comes from adenosine receptor blockade.',
    },
    4: {
      level: 4,
      summary: 'The neurobiology of sleep involves coordinated activity across multiple brain regions with distinct neurotransmitter signatures, regulated by homeostatic adenosinergic signaling and circadian molecular oscillators, with implications for sleep disorders and therapeutic interventions.',
      explanation: `## Detailed Neuroanatomy of Sleep-Wake Control

**Ascending Arousal System Components:**

*Monoaminergic Pathways:*
- **Locus coeruleus (LC)**: Noradrenergic neurons projecting widely to cortex, thalamus, hypothalamus. Completely silent during REM sleep ("REM-off" neurons)
- **Dorsal raphe nucleus (DRN)**: Serotonergic neurons. Activity decreases progressively from wake → NREM → REM
- **Tuberomammillary nucleus (TMN)**: Histaminergic neurons. Active during wake, silent during NREM and REM

*Cholinergic Pathways:*
- **Pedunculopontine tegmentum (PPT)** and **laterodorsal tegmentum (LDT)**: Cholinergic neurons active during wake AND REM ("REM-on")
- **Basal forebrain**: Provides cholinergic input to cortex for EEG desynchronization

*Orexin/Hypocretin System:*
- ~70,000 neurons in lateral hypothalamus
- Project to all wake-promoting nuclei
- Excite monoaminergic and cholinergic arousal systems
- Loss causes narcolepsy type 1 (cataplexy)

**Sleep-Promoting Circuitry:**

*VLPO Characteristics:*
- Contains ~1,500-2,000 neurons
- Co-release GABA and galanin
- c-Fos expression correlates with sleep amount
- Lesions cause severe insomnia (80-90% sleep reduction)
- Activated by: Adenosine (A2A), PGD2, cytokines

*Parafacial Zone (PZ):*
- GABAergic neurons in medulla
- Specifically promotes NREM sleep
- Projects to parabrachial nucleus

## Molecular Mechanisms

**Adenosine Signaling in Detail:**

\`\`\`
Wake → ATP utilization → Adenosine accumulation
↓
A1 receptor activation (Gi-coupled):
- Presynaptic inhibition of wake-promoting neurons
- Reduced glutamate/ACh release

A2A receptor activation (Gs-coupled):
- Postsynaptic excitation of VLPO neurons
- Increased GABAergic output to arousal centers
↓
Sleep induction
\`\`\`

**Circadian Molecular Clock:**

\`\`\`
Positive limb:
CLOCK + BMAL1 → E-box binding → PER, CRY transcription

Negative limb:
PER/CRY accumulation → CLOCK/BMAL1 inhibition →
Decreased PER/CRY transcription →
PER/CRY degradation (casein kinase-mediated) →
CLOCK/BMAL1 disinhibition → Cycle repeats (~24h)
\`\`\`

**Circadian Output Pathways:**

SCN → Subparaventricular zone (SPZ) → Dorsomedial hypothalamus (DMH)
DMH → VLPO (sleep) and LH/orexin (wake)

Direct SCN projections to:
- Paraventricular nucleus (autonomic regulation)
- Pineal gland (melatonin synthesis)

## REM Sleep Control

**REM-On Neurons:**
- PPT/LDT cholinergic neurons
- Glutamatergic sublaterodorsal nucleus (SLD) neurons
- Activate: EEG desynchronization, muscle atonia, REMs

**REM-Off Neurons:**
- LC noradrenergic neurons
- DRN serotonergic neurons
- vlPAG/LPT GABAergic neurons
- Inhibit REM-on neurons during wake and NREM

**Reciprocal Interaction Model:**
REM-on and REM-off populations mutually inhibit each other
NREM-to-REM transition occurs as monoaminergic tone falls

**Muscle Atonia During REM:**
\`\`\`
SLD glutamatergic neurons →
Spinal interneurons (glycinergic/GABAergic) →
α-motor neuron hyperpolarization →
Skeletal muscle atonia
\`\`\`

## Sleep and Synaptic Homeostasis

**Synaptic Homeostasis Hypothesis (Tononi & Cirelli):**
- Wake: Net synaptic potentiation (learning)
- Sleep (especially NREM): Synaptic downscaling
- Slow oscillations facilitate memory consolidation
- Renormalization prevents synaptic saturation

**Evidence:**
- Synaptic markers (GluR1) decrease during sleep
- Slope of evoked potentials increases during wake, decreases during sleep
- Sleep deprivation impairs LTP and learning`,
      keyTerms: [
        { term: 'parafacial zone', definition: 'Medullary GABAergic nucleus recently identified as essential for NREM sleep generation' },
        { term: 'sublaterodorsal nucleus', definition: 'Pontine glutamatergic nucleus that triggers REM sleep muscle atonia' },
        { term: 'synaptic homeostasis hypothesis', definition: 'Theory that sleep allows synaptic downscaling to balance wake-related potentiation' },
        { term: 'E-box', definition: 'DNA regulatory element bound by CLOCK/BMAL1 to drive circadian gene expression' },
        { term: 'casein kinase', definition: 'Kinases (CK1δ/ε) that phosphorylate PER proteins, regulating circadian period' },
      ],
      clinicalNotes: 'CK1δ mutations cause familial advanced sleep phase syndrome (FASPS). Loss of REM atonia circuitry causes REM sleep behavior disorder (RBD), a prodromal marker for synucleinopathies. Antihistamines (diphenhydramine) and antidepressants (trazodone) work partly through histamine/serotonin effects on sleep circuits.',
    },
    5: {
      level: 5,
      summary: 'Sleep neuroscience encompasses complex interactions between multiple neuronal populations, neurotransmitter systems, molecular oscillators, and homeostatic factors, with translational implications for sleep disorder pathophysiology, pharmacotherapy development, and understanding systemic disease connections.',
      explanation: `## Advanced Neurobiological Concepts

### Optogenetic Dissection of Sleep Circuits

Recent optogenetic and chemogenetic studies have refined our understanding:

**GABAergic Populations:**
- VLPO contains heterogeneous populations: Galanin+ neurons promote NREM; distinct populations may gate REM
- Zona incerta GABAergic neurons suppress arousal
- Medullary parafacial zone (PZ) neurons are necessary and sufficient for NREM

**Glutamatergic Sleep Neurons:**
- Parabrachial nucleus (PB) is required for wakefulness
- PB receives strong inhibitory input from PZ
- PB lesions cause coma (distinct from VLPO lesion-induced insomnia)

**REM Sleep Executive Neurons:**
- Melanin-concentrating hormone (MCH) neurons in lateral hypothalamus
- Active during REM; optogenetic stimulation increases REM
- May oppose orexin neurons

### Thalamocortical Dynamics

**Sleep Oscillations:**

| Oscillation | Frequency | Generator | Function |
|-------------|-----------|-----------|----------|
| Slow oscillation | <1 Hz | Cortical | Groups other rhythms |
| Delta waves | 1-4 Hz | Thalamocortical | Deep sleep marker |
| Sleep spindles | 11-15 Hz | Thalamic reticular nucleus | Memory consolidation |
| K-complexes | — | Cortical | Arousal gating |
| Sawtooth waves | 2-6 Hz | Pontine | REM-specific |
| PGO waves | — | Pons → LGN → Occipital | REM initiation |

**Thalamic Gating:**
- During wake: Thalamocortical neurons in tonic firing mode
- During NREM: Hyperpolarization enables burst firing → spindles, slow waves
- Thalamic reticular nucleus (TRN) provides rhythmic inhibition

### Molecular Genetics of Sleep

**Human Genetics:**
| Gene | Variant | Phenotype |
|------|---------|-----------|
| DEC2 (BHLHE41) | P384R | Short sleeper (4-6 hrs) |
| ADRB1 | A187V | Short sleeper |
| NPSR1 | Y206H | Short sleeper |
| CK1δ (CSNK1D) | T44A | Familial advanced sleep phase |
| PER2 | S662G | Familial advanced sleep phase |
| PER3 | Variable repeat | Sleep timing, chronotype |
| ADA | G22A | SWS amount, sleep depth |

**GWAS Findings:**
- Chronotype associated with PER2, PER3, VIP, melanopsin pathway genes
- Insomnia associated with MEIS1 (also RLS), and genes in neural development

### Neuroimmune Interactions

**Cytokine Effects on Sleep:**
- IL-1β and TNF-α are somnogenic
- Increase NREM sleep, especially during infection
- Act on hypothalamic sleep-regulatory regions
- Explain "sickness behavior" sleep increases

**Sleep Deprivation Effects:**
- Increased inflammatory markers (IL-6, CRP)
- Altered immune cell function
- Impaired vaccine response
- May contribute to chronic disease risk

### Metabolic Consequences

**Glymphatic Function:**
- Perivascular AQP4 channels on astrocyte endfeet
- CSF-ISF exchange clears solutes including amyloid-β, tau
- Flow increases 60% during NREM sleep
- Dependent on sleep stage, position, anesthesia type
- Implications for Alzheimer's disease pathogenesis

**Sleep Deprivation Metabolic Effects:**
- Decreased glucose tolerance
- Increased cortisol (especially evening)
- Altered leptin/ghrelin (increased hunger)
- Sympathetic activation

### Pharmacological Targets

**Current Hypnotic Classes:**

| Class | Mechanism | Prototype | Notes |
|-------|-----------|-----------|-------|
| Z-drugs | GABA-A α1 | Zolpidem | Sedation, some abuse potential |
| Benzodiazepines | GABA-A (non-selective) | Temazepam | Tolerance, dependence |
| DORAs | Orexin 1/2 antagonist | Suvorexant | Wake suppression |
| Melatonin agonists | MT1/MT2 | Ramelteon | Circadian effects |
| Antihistamines | H1 inverse agonist | Doxepin | Low-dose for sleep maintenance |
| Antidepressants | Various | Trazodone | Off-label, H1/5-HT2 |

**Emerging Targets:**
- Selective orexin 2 receptor antagonists
- Histamine H3 receptor inverse agonists (wake-promoting)
- Adenosine A2A agonists
- MCH receptor modulators

### Clinical Integration

**Sleep Phenotyping:**
- EEG spectral analysis (delta power as NREM depth marker)
- Heart rate variability during sleep
- Core body temperature minimum timing
- DLMO (dim light melatonin onset) for circadian phase

**Precision Sleep Medicine:**
- Chronotype-matched intervention timing
- Genetic risk stratification (RLS, narcolepsy HLA)
- Biomarker-guided treatment (orexin levels in narcolepsy)

**Systems Biology Perspective:**
Sleep is a brain state enabling:
- Synaptic renormalization (cognitive restoration)
- Metabolic waste clearance (neuroprotection)
- Immune modulation (host defense)
- Hormonal regulation (growth, metabolism)
- Autonomic recalibration (cardiovascular health)`,
      keyTerms: [
        { term: 'MCH neurons', definition: 'Melanin-concentrating hormone neurons in lateral hypothalamus that promote REM sleep' },
        { term: 'PGO waves', definition: 'Ponto-geniculo-occipital waves; phasic REM phenomena originating from pons' },
        { term: 'thalamic reticular nucleus', definition: 'GABAergic shell around thalamus that generates sleep spindles through rhythmic inhibition' },
        { term: 'DORA', definition: 'Dual orexin receptor antagonist; new class of hypnotics blocking OX1R and OX2R' },
        { term: 'DLMO', definition: 'Dim light melatonin onset; gold standard biomarker for circadian phase assessment' },
        { term: 'AQP4', definition: 'Aquaporin-4; water channel on astrocyte endfeet critical for glymphatic function' },
      ],
      clinicalNotes: 'Clinical pearls: 1) DORAs may be preferred in elderly due to lower cognitive side effects vs. Z-drugs. 2) Genetic testing not yet standard but HLA-DQB1*06:02 present in >98% of narcolepsy type 1. 3) Sleep spindle density may be biomarker for cognitive function and schizophrenia risk. 4) Core body temperature minimum (~2h before natural wake time) is key for jet lag calculations. 5) Delayed sleep phase disorder (DSPD) shows strong familial aggregation suggesting genetic susceptibility.',
    },
  },

  media: [
    {
      id: 'sleep-wake-circuit-diagram',
      type: 'diagram',
      filename: 'sleep-wake-neural-circuits.svg',
      title: 'Sleep-Wake Neural Circuits',
      description: 'Diagram showing ascending arousal system and VLPO inhibitory projections',
    },
    {
      id: 'two-process-model',
      type: 'diagram',
      filename: 'two-process-model.svg',
      title: 'Two-Process Model of Sleep Regulation',
      description: 'Graph showing interaction of Process S (homeostatic) and Process C (circadian)',
    },
    {
      id: 'circadian-molecular-clock',
      type: 'diagram',
      filename: 'circadian-molecular-clock.svg',
      title: 'Molecular Circadian Clock',
      description: 'Transcription-translation feedback loop of core clock genes',
    },
  ],

  citations: [
    {
      id: 'saper-2005',
      type: 'article',
      title: 'Hypothalamic regulation of sleep and circadian rhythms',
      authors: ['Saper, C.B.', 'Scammell, T.E.', 'Lu, J.'],
      source: 'Nature',
      chapter: '437:1257-1263',
      url: 'https://doi.org/10.1038/nature04284',
    },
    {
      id: 'kryger-principles',
      type: 'textbook',
      title: 'Principles and Practice of Sleep Medicine',
      authors: ['Kryger, M.H.', 'Roth, T.', 'Dement, W.C.'],
      source: 'Elsevier, 7th Edition',
    },
    {
      id: 'tononi-cirelli',
      type: 'article',
      title: 'Sleep and the price of plasticity',
      authors: ['Tononi, G.', 'Cirelli, C.'],
      source: 'Neuron',
      chapter: '81:12-34',
    },
  ],

  crossReferences: [
    { targetId: 'process-sleep-stages', targetType: 'process', relationship: 'related', label: 'Sleep Stages' },
    { targetId: 'condition-narcolepsy', targetType: 'condition', relationship: 'see-also', label: 'Narcolepsy' },
    { targetId: 'condition-insomnia', targetType: 'condition', relationship: 'see-also', label: 'Insomnia' },
    { targetId: 'process-circadian-rhythm', targetType: 'process', relationship: 'related', label: 'Circadian Rhythms' },
  ],

  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['physiology', 'neuroscience', 'sleep medicine'],
    keywords: ['sleep', 'circadian', 'adenosine', 'orexin', 'melatonin', 'VLPO', 'SCN'],
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

export default sleepPhysiology;
