/**
 * Narcolepsy - Comprehensive Educational Content
 *
 * Covers narcolepsy types 1 and 2, including pathophysiology (orexin/hypocretin
 * deficiency), clinical presentation, diagnosis, and treatment approaches.
 */

import { EducationalContent } from '../types';

export const narcolepsy: EducationalContent = {
  id: 'condition-narcolepsy',
  type: 'condition',
  name: 'Narcolepsy',
  alternateNames: ['Narcolepsy Type 1', 'Narcolepsy Type 2', 'Narcolepsy with Cataplexy', 'Narcolepsy without Cataplexy', 'Hypocretin Deficiency Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'Narcolepsy is a sleep disorder where people feel extremely sleepy during the day and may suddenly fall asleep at unexpected times.',
      explanation: `## What is Narcolepsy?

Imagine being so sleepy that you could fall asleep in the middle of doing something important, like talking to a friend or eating lunch. That's what it can feel like to have narcolepsy.

### Main Problems with Narcolepsy

**Extreme Sleepiness:**
- Feeling very tired during the day even after sleeping at night
- Hard to stay awake in class, at work, or when relaxing
- May fall asleep suddenly without warning
- Short naps often help for a little while

**Cataplexy (in some people):**
- Sudden muscle weakness when feeling strong emotions
- Might happen when laughing, surprised, or excited
- Knees might buckle, face might droop
- Person stays awake but can't move well
- Lasts a few seconds to a couple minutes

**Sleep Problems at Night:**
- Waking up many times
- Vivid, scary dreams
- Feeling unable to move when waking up (sleep paralysis)
- Seeing or hearing things when falling asleep (hallucinations)

### Why Does This Happen?

People with narcolepsy have a problem with the part of the brain that controls when we're awake and when we're asleep. It's like having a broken switch that can't decide between "awake" and "asleep" properly.

### Living with Narcolepsy

**Good News:**
- Medicines can help people stay more awake
- Scheduled naps during the day can help
- People with narcolepsy can live normal lives
- It doesn't get worse over time

**Challenges:**
- Taking medicine regularly
- Explaining to others why you're so sleepy
- Being careful about driving until controlled

### Getting Help

If you or someone you know is extremely sleepy all the time, a doctor can do special tests to find out if it's narcolepsy. The tests involve sleeping at a sleep center while doctors watch your brain activity.`,
      keyTerms: [
        { term: 'narcolepsy', definition: 'A sleep disorder causing extreme daytime sleepiness and sometimes sudden muscle weakness' },
        { term: 'cataplexy', definition: 'Sudden loss of muscle strength triggered by emotions like laughter or surprise' },
        { term: 'sleep paralysis', definition: 'Being awake but unable to move, usually when waking up' },
      ],
      analogies: [
        'Narcolepsy is like having a light switch that flickers between on and off - sometimes the brain switches to sleep mode when it should be in awake mode.',
        'Cataplexy is like your muscles suddenly turning to jelly when you feel strong emotions.',
      ],
      examples: [
        'A student with narcolepsy might fall asleep in class even though they slept well the night before and are very interested in the lesson.',
        'Someone with cataplexy might feel their knees go weak when they hear a really funny joke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Narcolepsy is a chronic neurological disorder affecting the brain\'s ability to regulate sleep-wake cycles, characterized by excessive daytime sleepiness and, in Type 1, cataplexy (sudden muscle weakness with emotions).',
      explanation: `## Understanding Narcolepsy

Narcolepsy affects about 1 in 2,000 people and usually starts in teenagers or young adults. It's a lifelong condition but can be well-managed with treatment.

### Types of Narcolepsy

**Narcolepsy Type 1 (with Cataplexy):**
- Excessive daytime sleepiness
- Cataplexy (sudden muscle weakness with emotions)
- Caused by loss of brain cells that make hypocretin/orexin

**Narcolepsy Type 2 (without Cataplexy):**
- Excessive daytime sleepiness
- No cataplexy (or very mild)
- Cause less well understood

### The Pentad of Narcolepsy Symptoms

1. **Excessive Daytime Sleepiness (EDS):**
   - Present in everyone with narcolepsy
   - Constant, overwhelming urge to sleep
   - Brief naps are refreshing
   - "Sleep attacks" may occur

2. **Cataplexy (Type 1 only):**
   - Sudden bilateral muscle weakness
   - Triggered by emotions (laughter, surprise, anger)
   - Consciousness preserved
   - Duration: seconds to minutes
   - Can be partial (drooping face, weak knees) or complete (collapse)

3. **Hypnagogic/Hypnopompic Hallucinations:**
   - Vivid dream-like experiences
   - Occur when falling asleep (hypnagogic) or waking (hypnopompic)
   - Often visual, can be frightening
   - Person realizes they're not real afterward

4. **Sleep Paralysis:**
   - Inability to move when falling asleep or waking
   - Lasts seconds to minutes
   - Can be scary but not dangerous
   - Consciousness is intact

5. **Disrupted Nighttime Sleep:**
   - Frequent awakenings
   - Vivid dreams and nightmares
   - Acting out dreams (REM sleep behavior disorder overlap)

### How the Brain is Affected

In Type 1 narcolepsy, there's a loss of neurons (brain cells) in the hypothalamus that produce hypocretin (also called orexin). This chemical normally:
- Promotes wakefulness
- Stabilizes sleep-wake boundaries
- Prevents intrusion of sleep elements into wakefulness

### Diagnosis

**Sleep Studies Required:**
- **Polysomnography (PSG):** Overnight sleep study
- **Multiple Sleep Latency Test (MSLT):** Daytime nap study
  - 5 nap opportunities, 2 hours apart
  - Measures how fast you fall asleep
  - Looks for REM sleep during naps

**Diagnostic Criteria (simplified):**
- Mean sleep latency ≤8 minutes on MSLT
- 2 or more sleep-onset REM periods (SOREMPs)
- For Type 1: cataplexy present OR low CSF hypocretin

### Treatment

**Lifestyle Modifications:**
- Scheduled short naps (15-20 min)
- Regular sleep schedule
- Good sleep hygiene
- Avoid alcohol

**Medications for Sleepiness:**
- Modafinil/armodafinil (wake-promoting)
- Stimulants (methylphenidate, amphetamines)
- Solriamfetol (newer option)
- Pitolisant (histamine enhancer)

**Medications for Cataplexy:**
- Sodium oxybate (also helps sleepiness)
- Antidepressants (suppress REM sleep)
  - SSRIs, SNRIs, tricyclics`,
      keyTerms: [
        { term: 'hypocretin', definition: 'A brain chemical (also called orexin) that promotes wakefulness; deficient in Type 1 narcolepsy' },
        { term: 'cataplexy', definition: 'Sudden loss of muscle tone triggered by emotions; occurs only in narcolepsy Type 1' },
        { term: 'MSLT', definition: 'Multiple Sleep Latency Test; measures how quickly you fall asleep during the day' },
        { term: 'SOREMP', definition: 'Sleep-Onset REM Period; entering REM sleep within 15 minutes of sleep onset' },
        { term: 'hypnagogic hallucination', definition: 'Dream-like experience occurring while falling asleep' },
      ],
      analogies: [
        'Hypocretin/orexin is like a gate guard that keeps sleep from entering when you should be awake. In narcolepsy, the guard is missing.',
        'SOREMPs on MSLT are like finding dream sleep too early - normally dreams come later in sleep, but narcolepsy patients jump right into dreaming.',
      ],
    },
    3: {
      level: 3,
      summary: 'Narcolepsy is a chronic hypersomnia characterized by hypothalamic orexin neuron loss (Type 1) causing dysregulation of REM sleep and wake states, diagnosed by MSLT findings of short sleep latency and multiple SOREMPs, treated with wake-promoting agents and REM-suppressing medications.',
      explanation: `## Diagnostic Criteria (ICSD-3)

### Narcolepsy Type 1
Criteria A-D must be met:
A. Daily periods of irrepressible need to sleep or daytime lapses into sleep for ≥3 months
B. Presence of one or both:
   1. Cataplexy AND MSLT showing mean sleep latency ≤8 min with ≥2 SOREMPs
   2. CSF hypocretin-1 ≤110 pg/mL or <1/3 of normal mean
C. Not better explained by other disorders
D. Symptoms not due to medication or substance use

### Narcolepsy Type 2
A. Same as Type 1
B. Mean sleep latency ≤8 min and ≥2 SOREMPs on MSLT
C. Cataplexy absent
D. CSF hypocretin-1 not measured or >110 pg/mL
E-F. Same exclusion criteria

*Note: A SOREMP in the preceding night's PSG can replace one MSLT SOREMP*

## Pathophysiology

### Orexin/Hypocretin System
**Normal Function:**
- Orexin-A and B are neuropeptides from lateral hypothalamus
- ~70,000 orexin neurons in humans
- Project throughout CNS
- OX1 and OX2 receptors
- Functions:
  - Stabilizes wakefulness
  - Suppresses REM sleep
  - Regulates feeding, autonomic, endocrine function

**In Narcolepsy Type 1:**
- >90% loss of orexin neurons
- CSF orexin-A undetectable or very low
- Likely autoimmune mechanism:
  - HLA-DQB1*06:02 in >98% (vs. 25% general population)
  - T-cell mediated destruction suspected
  - Triggers: H1N1 influenza, Pandemrix vaccine, streptococcal infection

### Sleep State Instability
**Normal:** Clear boundaries between wake, NREM, REM
**Narcolepsy:** Boundaries blurred:
- REM intrusion into wake → cataplexy, hallucinations, sleep paralysis
- Wake intrusion into sleep → disrupted nocturnal sleep
- Rapid transitions between states

## Clinical Features

### Excessive Daytime Sleepiness
- Chronic, unrelenting sleepiness
- Present regardless of sleep duration
- Brief naps (15-20 min) refreshing
- May have automatic behaviors during microsleeps
- Impairs function, dangerous for driving

### Cataplexy
**Characteristics:**
- Sudden bilateral skeletal muscle atonia
- Triggered by positive emotions (laughter, joking, pleasant surprise)
- Duration: seconds to 2 minutes
- Consciousness preserved (key differentiator from seizure)
- Frequency varies: rare to multiple daily

**Partial vs. Complete:**
| Type | Features |
|------|----------|
| Partial | Facial drooping, head drop, knee buckling, slurred speech |
| Complete | Full body collapse; rare |

**Status Cataplecticus:**
- Repeated/prolonged cataplexy
- Can occur with abrupt antidepressant withdrawal

### Associated Features
- Hypnagogic/hypnopompic hallucinations (visual > auditory)
- Sleep paralysis (isolated awareness during REM atonia)
- Disrupted nocturnal sleep (fragmented, not restorative)
- Weight gain (orexin regulates metabolism)
- REM sleep behavior disorder overlap

## Diagnosis

### PSG Findings
- Short sleep latency
- SOREMPs possible
- Disrupted sleep architecture
- Rules out OSA, PLMD as confounders

### MSLT Protocol
1. Preceded by PSG confirming ≥6 hours sleep
2. Off REM-suppressing medications ≥2 weeks
3. 5 nap opportunities, 2 hours apart
4. Each nap: 20 min or until sleep onset, then 15 min more to look for REM
5. Measures:
   - Mean sleep latency (normal >8 min)
   - Number of SOREMPs (normally 0)

### Differential Diagnosis
| Condition | Differentiating Features |
|-----------|-------------------------|
| Idiopathic hypersomnia | No SOREMPs; long, unrefreshing naps; sleep inertia |
| Sleep deprivation | History, resolved with adequate sleep |
| OSA | Apnea events on PSG; responds to CPAP |
| Depression | Mood symptoms; fatigue > sleepiness |
| Sleep phase disorders | Timing issue; sleep normal when aligned |

## Treatment

### Wake-Promoting Agents
| Medication | Mechanism | Dose | Notes |
|------------|-----------|------|-------|
| Modafinil | Dopamine reuptake inhibition | 100-400 mg | First-line; low abuse potential |
| Armodafinil | R-enantiomer of modafinil | 150-250 mg | Longer duration |
| Solriamfetol | DNRI | 75-150 mg | Newer; cardiovascular monitoring |
| Pitolisant | H3 receptor antagonist | 17.8-35.6 mg | Increases histamine; no DEA schedule |
| Methylphenidate | DA/NE release | 10-60 mg | Schedule II; abuse potential |
| Amphetamines | DA/NE release | 5-60 mg | Schedule II; most potent |

### Cataplexy Treatment
| Medication | Mechanism | Dose | Notes |
|------------|-----------|------|-------|
| Sodium oxybate | GABA-B agonist | 4.5-9 g/night | Gold standard; also helps EDS; REMS |
| Low-sodium oxybate | Same | 4.5-9 g/night | Lower sodium burden |
| Venlafaxine | SNRI (REM suppression) | 37.5-225 mg | Off-label; widely used |
| Clomipramine | TCA | 10-75 mg | Potent; anticholinergic side effects |
| Fluoxetine | SSRI | 10-60 mg | Less effective than SNRI/TCA |`,
      keyTerms: [
        { term: 'orexin neurons', definition: 'Lateral hypothalamic neurons producing wake-promoting neuropeptides; lost in narcolepsy Type 1' },
        { term: 'HLA-DQB1*06:02', definition: 'HLA allele present in >98% of narcolepsy Type 1 patients; confers autoimmune susceptibility' },
        { term: 'SOREMP', definition: 'Sleep-Onset REM Period; REM sleep within 15 minutes of sleep onset; ≥2 required for narcolepsy diagnosis' },
        { term: 'sodium oxybate', definition: 'GABA-B agonist taken at night; treats both cataplexy and excessive daytime sleepiness' },
        { term: 'status cataplecticus', definition: 'Repeated or prolonged cataplectic episodes; can be triggered by antidepressant withdrawal' },
      ],
      clinicalNotes: 'Key clinical points: 1) Always rule out other causes of sleepiness before MSLT (especially sleep deprivation, OSA). 2) REM-suppressing medications (antidepressants) must be stopped 2 weeks before MSLT. 3) Cataplexy is pathognomonic for narcolepsy Type 1 when history is clear. 4) Sodium oxybate is the only medication that effectively treats both sleepiness and cataplexy but requires REMS program enrollment.',
    },
    4: {
      level: 4,
      summary: 'Narcolepsy Type 1 results from autoimmune destruction of hypothalamic orexin neurons in genetically susceptible individuals (HLA-DQB1*06:02), while Type 2 pathophysiology remains unclear. Treatment targets wake-promoting and REM-suppressing mechanisms with emerging orexin receptor agonists in development.',
      explanation: `## Detailed Pathophysiology

### Orexin System Neuroanatomy
**Orexin Neuron Location:**
- Lateral hypothalamus and perifornical area
- ~70,000 neurons in humans (small population)
- Extensive projections to:
  - Locus coeruleus (norepinephrine)
  - Tuberomammillary nucleus (histamine)
  - Raphe nuclei (serotonin)
  - Ventral tegmental area (dopamine)
  - Pedunculopontine/laterodorsal tegmental nuclei (acetylcholine)
  - Cortex (direct activation)

**Orexin Receptors:**
| Receptor | Distribution | Ligand Affinity | Function |
|----------|--------------|-----------------|----------|
| OX1R | Locus coeruleus, prefrontal cortex | Orexin-A >> Orexin-B | Arousal, stress response |
| OX2R | Tuberomammillary nucleus, widespread | Orexin-A = Orexin-B | Sleep-wake regulation |

**Orexin Functions:**
- Stabilizes behavioral states (prevents inappropriate transitions)
- Integrates metabolic, circadian, and emotional inputs to modulate arousal
- Promotes wakefulness during active period
- Inhibits REM sleep generation

### Autoimmune Hypothesis

**Evidence Supporting Autoimmunity:**
1. **HLA Association:**
   - HLA-DQB1*06:02 in 98% Type 1 (25% general population)
   - DQB1*06:02/DQA1*01:02 haplotype most associated
   - Protective alleles identified (DQB1*06:01)

2. **Environmental Triggers:**
   - H1N1 influenza infection (2009 pandemic)
   - Pandemrix vaccine (AS03-adjuvanted H1N1)
   - Streptococcal infections
   - Seasonal onset patterns

3. **T-Cell Findings:**
   - CD4+ T cells reactive to orexin peptides found
   - CD8+ T cells may mediate neuron killing
   - Cross-reactivity with H1N1 hemagglutinin epitopes

4. **CSF Findings:**
   - Oligoclonal bands in some cases
   - Elevated Tribbles homolog 2 antibodies (marker, not causal)

**Proposed Model:**
\`\`\`
Genetic susceptibility (HLA-DQB1*06:02)
          ↓
Environmental trigger (infection, vaccination)
          ↓
Molecular mimicry (cross-reactive T cells)
          ↓
Autoimmune destruction of orexin neurons
          ↓
>90% orexin neuron loss
          ↓
Sleep-wake instability → Narcolepsy symptoms
\`\`\`

### Sleep State Instability Model

**Normal Sleep-Wake Regulation:**
- Flip-flop switch model (Saper)
- Wake-promoting neurons (orexin, histamine, NE, 5-HT) inhibit sleep-promoting neurons (VLPO)
- Sleep-promoting neurons inhibit wake-promoting neurons
- Orexin stabilizes the "awake" side

**In Narcolepsy:**
- Loss of orexin removes stabilization
- Frequent, inappropriate state transitions
- REM atonia can intrude into wakefulness (cataplexy)
- Dreaming can intrude into wake-sleep transitions (hallucinations)
- Wakefulness fragments sleep

### Type 2 Pathophysiology
**Less Clear:**
- CSF orexin normal or intermediate
- Some may have partial orexin loss
- May be heterogeneous condition
- Some convert to Type 1 over time (develop cataplexy)

## Advanced Diagnostics

### CSF Hypocretin-1 Measurement
**Indications:**
- Atypical presentation
- Unable to do MSLT
- Concurrent medication confounders
- Childhood narcolepsy (MSLT less reliable)

**Interpretation:**
- ≤110 pg/mL (or <1/3 normal): Diagnostic for Type 1
- >110 pg/mL: Does not exclude Type 2
- Normal: >200 pg/mL

### HLA Typing
**Clinical Utility:**
- Negative DQB1*06:02: Type 1 extremely unlikely
- Positive: Increases likelihood but not diagnostic alone
- Not routinely recommended (high population frequency)

### Emerging Biomarkers
- Tribbles homolog 2 (TRIB2) antibodies
- T-cell reactivity panels
- Imaging (hypothalamic changes inconsistent)

## Pharmacotherapy Details

### Sodium Oxybate
**Mechanism:**
- GABA-B receptor agonist
- GHB receptor agonist
- Consolidates sleep, increases slow-wave sleep
- Mechanism for cataplexy improvement unclear (may involve DA)

**Dosing:**
- Start 2.25 g twice nightly (at bedtime, 2.5-4 hours later)
- Titrate by 1.5 g/night weekly
- Target: 6-9 g/night divided

**REMS Requirements:**
- Risk Evaluation and Mitigation Strategy (abuse potential, CNS depression)
- Prescriber, pharmacy, and patient must be enrolled
- Single pharmacy distribution

**Adverse Effects:**
- Nausea, dizziness, headache
- Enuresis
- Sleepwalking, confusion
- Respiratory depression (especially with other CNS depressants)
- High sodium content (calcium/magnesium formulation available)

### Pitolisant
**Mechanism:**
- Histamine H3 receptor antagonist/inverse agonist
- H3 is presynaptic autoreceptor
- Blocking H3 → increased histamine release
- Enhances wake-promoting histaminergic tone

**Advantages:**
- Not scheduled (no abuse potential)
- Once daily dosing
- May help cataplexy at higher doses

**Limitations:**
- QT prolongation caution
- Less effective than stimulants for some patients

### Emerging Therapies
**Orexin Receptor Agonists:**
- TAK-994, TAK-861 (OX2R agonists)
- Directly replace missing orexin signaling
- Early trials showed efficacy but TAK-994 stopped (hepatotoxicity signal)
- Next-generation compounds in development

**Immunotherapy:**
- IVIG, plasmapheresis tried in recent-onset
- Limited evidence
- Most effective if given very early (difficult to diagnose early)

## Special Populations

### Pediatric Narcolepsy
**Unique Features:**
- May present as hyperactivity rather than sleepiness
- Weight gain common (may precede other symptoms)
- Cataplexy may present as "cataplectic facies" (hypotonic face)
- MSLT less reliable in young children

### Pregnancy
**Considerations:**
- Discontinue sodium oxybate (animal teratogenicity)
- Modafinil: Limited data, possible cardiac malformations
- Stimulants: Risk of growth restriction, neonatal effects
- Manage with sleep scheduling, minimize medications`,
      keyTerms: [
        { term: 'flip-flop switch', definition: 'Model of sleep-wake regulation where mutually inhibitory circuits create rapid state transitions, with orexin stabilizing wakefulness' },
        { term: 'molecular mimicry', definition: 'Mechanism where immune response to pathogen cross-reacts with self-antigens (orexin neurons)' },
        { term: 'REMS program', definition: 'Risk Evaluation and Mitigation Strategy; FDA-required safety program for high-risk medications' },
        { term: 'H3 receptor antagonist', definition: 'Drug blocking histamine autoreceptors to increase histaminergic wake-promoting neurotransmission' },
        { term: 'Tribbles homolog 2', definition: 'Autoantibody found in narcolepsy; marker of autoimmune process but not causal' },
      ],
      clinicalNotes: 'Advanced considerations: 1) Consider CSF hypocretin when MSLT is confounded (medications, OSA, shift work). 2) New-onset narcolepsy should prompt consideration of immunotherapy, though evidence is limited. 3) Sodium oxybate is the only medication that consolidates sleep, improves cataplexy AND sleepiness - often first-line for Type 1. 4) Orexin agonists represent paradigm shift from symptomatic to replacement therapy - watch for approvals.',
    },
    5: {
      level: 5,
      summary: 'Narcolepsy Type 1 represents an autoimmune orexin neuron degenerative disorder with established genetic susceptibility (HLA-DQB1*06:02) and environmental triggers (H1N1), while Type 2 remains pathophysiologically heterogeneous. Orexin receptor agonists in development offer disease-targeted therapy, and immunomodulation in early-stage disease remains investigational.',
      explanation: `## Detailed Immunopathogenesis

### Genetic Architecture
**MHC Associations:**
\`\`\`
Strongest Risk: HLA-DQB1*06:02
Haplotype: DRB1*15:01-DQA1*01:02-DQB1*06:02
Risk increase: ~200-fold for Type 1
Population frequency: 12-35% (varies by ethnicity)

Additional associations:
- DPB1*05:01 (independent risk)
- T-cell receptor alpha locus variants
- P2RY11 (purinergic receptor, immune function)
- ZNF365, IL10RB, CTSH, TNFSF4
\`\`\`

**Protective Alleles:**
- DQB1*06:01 (protective)
- DQB1*05:01 (protective)

**Interpretation:**
- HLA-DQ heterodimer presents orexin-derived peptides to CD4+ T cells
- Specific binding groove of DQ0602 may favor autoreactive epitopes
- T-cell receptor variants may increase reactivity

### Environmental Triggers
**Documented Triggers:**
1. **H1N1 Influenza (2009):**
   - Increased narcolepsy incidence in China and Europe post-pandemic
   - Particularly associated with Pandemrix vaccine (AS03 adjuvant)
   - Relative risk 5-14x in vaccinated vs. unvaccinated
   - Molecular mimicry: H1N1 hemagglutinin epitopes resemble orexin

2. **Streptococcal Infections:**
   - Anti-streptolysin O titers elevated at onset
   - Possible trigger in some cases

3. **Other Infections:**
   - Upper respiratory infections commonly precede onset
   - Seasonal clustering of onset

### T-Cell Immunology
**CD4+ T Cell Findings:**
- Orexin-specific CD4+ T cells detected in NT1 patients
- Restricted by HLA-DQ0602
- Cross-reactive with H1N1 peptides
- Produce pro-inflammatory cytokines (IFN-gamma, TNF-alpha)

**CD8+ T Cell Findings:**
- Orexin-reactive CD8+ T cells identified
- May be direct effectors of neuron killing
- Express granzyme B, perforin
- Single-cell sequencing shows clonal expansion in CSF

**Model of Destruction:**
\`\`\`
1. Environmental trigger in susceptible host
2. Cross-reactive T-cell activation
3. CD4+ T cells license CD8+ effectors
4. CD8+ T cells traffic to hypothalamus
5. Selective destruction of orexin neurons
6. >90% loss required for symptoms
7. Slow progression to full phenotype (months-years)
\`\`\`

### Immunotherapy Attempts
**Rationale:**
- If autoimmune, early immunosuppression might prevent neuron loss
- Window of opportunity before complete destruction

**Evidence:**
| Intervention | Timing | Results |
|--------------|--------|---------|
| IVIG | Near onset | Case reports of improvement; no RCTs |
| Plasmapheresis | Near onset | Anecdotal benefit |
| Corticosteroids | Various | Generally ineffective |
| Alemtuzumab | Case report | Some benefit in early case |

**Challenges:**
- Most patients diagnosed after significant neuron loss
- Difficult to identify patients early enough
- Need for biomarkers of early/active disease

## Hypocretin/Orexin System Deep Dive

### Orexin Neuron Physiology
**Neurotransmitter Co-release:**
- Orexin neurons release: orexin-A, orexin-B, glutamate, dynorphin
- Dynorphin may modulate orexin effects
- Glutamate provides fast excitatory transmission

**Inputs to Orexin Neurons:**
| Input | Effect | Function |
|-------|--------|----------|
| SCN (circadian) | Indirect inhibition | Sleep-wake timing |
| Limbic (amygdala) | Excitation | Emotional arousal |
| Glucose/leptin | Inhibition | Satiety suppresses wake |
| Ghrelin | Excitation | Hunger promotes wake |
| Catecholamines | Variable | Stress/arousal modulation |

**Integration Function:**
- Orexin neurons integrate metabolic, circadian, emotional signals
- Output promotes wakefulness appropriate to context
- Loss removes this integration, causing dysregulation

### Cataplexy Circuitry
**Mechanism:**
- Positive emotions → limbic activation → normally suppressed by orexin
- Without orexin: emotional limbic output activates medullary REM-atonia circuits
- Glycinergic/GABAergic inhibition of motor neurons
- Results: muscle atonia during wakefulness

**Supporting Evidence:**
- Optogenetic activation of amygdala-LC pathway triggers cataplexy in orexin-/- mice
- Blockade of this pathway prevents cataplexy

## Advanced Treatment Considerations

### Orexin Receptor Agonist Development
**Rationale:**
- Directly replace missing orexin signaling
- Targeted, disease-specific mechanism
- Potential for once-daily dosing

**Compounds in Development:**
| Agent | Target | Status | Notes |
|-------|--------|--------|-------|
| TAK-994 | OX2R | Discontinued | Hepatotoxicity signal |
| TAK-861 | OX2R | Phase 2 | Optimized selectivity |
| ORN-0962 | OX2R | Preclinical | Novel scaffold |

**Challenges:**
- Achieving CNS penetration
- Selectivity (OX2R vs OX1R)
- Duration of action
- Safety (OX1R effects: stress, addiction circuitry)

### Sodium Oxybate Considerations
**Mechanism Debate:**
- Not fully understood
- GABA-B mediated sleep consolidation
- GHB receptor involvement
- Possible dopaminergic effects (cataplexy improvement)
- Enhances slow-wave sleep → more restorative

**Pharmacogenomics:**
- ALDH5A1 variants may affect metabolism
- Clinical significance not established

### Combination Therapy Approaches
**Common Combinations:**
1. Sodium oxybate + modafinil (night + day)
2. Stimulant + antidepressant (EDS + cataplexy)
3. Pitolisant + sodium oxybate (non-redundant mechanisms)

**Emerging:**
- Orexin agonist may eventually replace combinations

## Type 2 Narcolepsy: Heterogeneity

### Subgroups
**Potential Categories:**
1. Partial orexin deficiency (intermediate CSF levels)
2. Receptor dysfunction
3. Downstream circuit dysfunction
4. Distinct disorder (misclassified hypersomnia)

**Clinical Observations:**
- ~10% develop cataplexy over time (→ Type 1)
- Some have intermediate CSF orexin
- May be prodromal Type 1 in some cases

**Research Directions:**
- Better phenotyping with advanced sleep measures
- CSF biomarker panels
- Imaging correlates

## Outcome Measures and Trials

### Endpoints in Clinical Trials
**Excessive Daytime Sleepiness:**
- Epworth Sleepiness Scale (subjective)
- Maintenance of Wakefulness Test (MWT) - objective
- Sleep latency on MSLT

**Cataplexy:**
- Weekly cataplexy rate (patient diary)
- Standardized cataplexy assessment instruments

**Function:**
- Functional Outcomes of Sleep Questionnaire
- Patient-reported outcomes
- Quality of life measures

### Promising Research Directions
1. **Orexin neuron transplantation:** Cell replacement therapy (preclinical)
2. **Neuroprotection:** Preventing ongoing loss if caught early
3. **Tolerance induction:** Orexin peptide-based immune tolerance
4. **Gene therapy:** AAV-delivered orexin (animal models)

## Societal and Practical Issues

### Driving Regulations
- Variable by jurisdiction
- Generally require treatment and symptom control
- Specialist documentation often required
- Stimulant prescription may require driving restriction

### Occupational Considerations
- Commercial driving often restricted
- Safety-sensitive positions challenging
- ADA accommodations (scheduled naps, flexible hours)

### Pediatric-to-Adult Transition
- Medication adjustments as growth occurs
- Transition of care planning
- Educational accommodations → workplace accommodations`,
      keyTerms: [
        { term: 'HLA-DQ0602', definition: 'MHC class II heterodimer encoded by HLA-DQA1*01:02/DQB1*06:02; primary genetic risk factor for narcolepsy Type 1' },
        { term: 'orexin neuron co-transmission', definition: 'Release of orexin along with glutamate and dynorphin from lateral hypothalamic neurons' },
        { term: 'OX2R agonist', definition: 'Drug that activates orexin-2 receptor; potential disease-targeted therapy to replace missing orexin signaling' },
        { term: 'molecular mimicry', definition: 'Autoimmune mechanism where immune response to pathogen cross-reacts with self-antigens due to structural similarity' },
        { term: 'sleep state instability', definition: 'Pathophysiological feature of narcolepsy reflecting loss of orexin stabilization of the sleep-wake flip-flop switch' },
      ],
      clinicalNotes: `Expert-level considerations:
1. The autoimmune hypothesis is strongly supported but direct proof of T-cell-mediated killing in humans is still emerging
2. Immunotherapy in early disease is intriguing but lacks RCT evidence; consider case-by-case if within months of onset
3. Orexin agonists (when available) will likely become preferred for Type 1 - monitor development closely
4. Type 2 remains heterogeneous - some may be prodromal Type 1, some may be misclassified IH
5. CSF hypocretin should be obtained when diagnosis uncertain or MSLT confounded
6. For refractory sleepiness, combined mechanisms (different receptor targets) often most effective
7. Consider that children may present atypically - weight gain and behavioral changes may precede classic symptoms`,
    },
  },

  media: [
    {
      id: 'orexin-pathway-diagram',
      type: 'diagram',
      filename: 'orexin-pathway.svg',
      title: 'Orexin/Hypocretin Pathway',
      description: 'Diagram showing orexin neuron projections and their role in sleep-wake regulation',
    },
    {
      id: 'narcolepsy-diagnostic-algorithm',
      type: 'diagram',
      filename: 'narcolepsy-diagnosis.svg',
      title: 'Narcolepsy Diagnostic Algorithm',
      description: 'Flowchart for diagnosing narcolepsy Type 1 and Type 2',
    },
    {
      id: 'mslt-interpretation',
      type: 'diagram',
      filename: 'mslt-findings.svg',
      title: 'MSLT Findings in Narcolepsy',
      description: 'Typical MSLT results showing short sleep latency and SOREMPs',
    },
  ],

  citations: [
    {
      id: 'scammell-narcolepsy-2015',
      type: 'article',
      title: 'Narcolepsy',
      authors: ['Scammell, T.E.'],
      source: 'New England Journal of Medicine',
      chapter: '373:2654-2662',
    },
    {
      id: 'thannickal-orexin-2000',
      type: 'article',
      title: 'Reduced number of hypocretin neurons in human narcolepsy',
      authors: ['Thannickal, T.C.', 'Moore, R.Y.', 'Nienhuis, R.'],
      source: 'Neuron',
      chapter: '27:469-474',
    },
    {
      id: 'icsd-3-narcolepsy',
      type: 'textbook',
      title: 'International Classification of Sleep Disorders',
      source: 'American Academy of Sleep Medicine',
      chapter: 'Third Edition',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-sleep', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'concept-sleep-studies', targetType: 'concept', relationship: 'related', label: 'Sleep Studies' },
    { targetId: 'condition-obstructive-sleep-apnea', targetType: 'condition', relationship: 'see-also', label: 'Obstructive Sleep Apnea' },
    { targetId: 'condition-idiopathic-hypersomnia', targetType: 'condition', relationship: 'see-also', label: 'Idiopathic Hypersomnia' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'neurology', 'autoimmune'],
    keywords: ['narcolepsy', 'hypocretin', 'orexin', 'cataplexy', 'MSLT', 'excessive daytime sleepiness', 'sodium oxybate'],
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

export default narcolepsy;
