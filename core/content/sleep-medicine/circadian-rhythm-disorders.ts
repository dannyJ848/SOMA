/**
 * Circadian Rhythm Disorders - Comprehensive Educational Content
 *
 * Covers circadian rhythm sleep-wake disorders including delayed/advanced sleep
 * phase, shift work disorder, jet lag, irregular sleep-wake, and non-24-hour disorder.
 */

import { EducationalContent } from '../types';

export const circadianRhythmDisorders: EducationalContent = {
  id: 'condition-circadian-rhythm-disorders',
  type: 'condition',
  name: 'Circadian Rhythm Sleep-Wake Disorders',
  alternateNames: ['Circadian Rhythm Disorders', 'CRSWD', 'Sleep Phase Disorders', 'Biological Clock Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Circadian rhythm disorders happen when your internal body clock doesn\'t match up with when you need to sleep and wake up, making it hard to fall asleep or wake up at the right times.',
      explanation: `## What is Your Body Clock?

Inside your brain, you have a special "clock" that tells your body when to be awake and when to sleep. This clock runs on about a 24-hour cycle and is called your circadian rhythm.

### How the Body Clock Works

**Light is the Key:**
- Sunlight in the morning tells your brain "it's time to wake up"
- Darkness at night tells your brain "it's time to sleep"
- Your brain makes a sleep hormone called melatonin when it gets dark

**Your Clock Affects:**
- When you feel sleepy and when you feel awake
- Body temperature
- When you feel hungry
- When hormones are released

### Types of Circadian Problems

**Night Owl (Delayed Sleep Phase):**
- You can't fall asleep until very late (2 AM or later)
- You can't wake up in the morning for school or work
- You feel most awake late at night
- Very common in teenagers

**Early Bird (Advanced Sleep Phase):**
- You get very sleepy early in the evening
- You wake up super early (3-5 AM)
- More common in older adults

**Shift Work Problems:**
- When you work at night and need to sleep during the day
- Your body clock is confused
- Hard to sleep when you need to

**Jet Lag:**
- Happens when you fly across many time zones
- Your body thinks it's a different time than the clock says
- You feel tired at the wrong times

### How These Problems Affect You

- Feeling very tired during the day
- Trouble concentrating at school or work
- Being late because you can't wake up
- Feeling out of sync with everyone else

### What Can Help

**Light Therapy:**
- Using bright lights at the right time
- Morning light helps if you're a night owl
- Evening light helps if you're an early bird

**Melatonin:**
- A supplement that can help shift your sleep time
- Should be taken at the right time to work

**Sleep Schedule:**
- Going to bed and waking up at the same time every day
- Even on weekends!

If your sleep timing is causing big problems, a doctor can help figure out the best plan for you.`,
      keyTerms: [
        { term: 'circadian rhythm', definition: 'Your body\'s internal 24-hour clock that controls when you feel sleepy and awake' },
        { term: 'melatonin', definition: 'A hormone your brain makes when it gets dark that helps you feel sleepy' },
        { term: 'jet lag', definition: 'Feeling tired and out of sync after traveling across time zones' },
      ],
      analogies: [
        'Your circadian rhythm is like having a built-in alarm clock in your brain that runs on a 24-hour schedule.',
        'Jet lag is like playing a video game where your character is in one time zone but your body is still playing by the rules of another time zone.',
      ],
      examples: [
        'A teenager with delayed sleep phase can\'t fall asleep until 2 AM and has a very hard time waking up for school at 7 AM, even though they try to go to bed earlier.',
        'A person working night shifts feels exhausted at 3 AM even though they slept all day, because their body clock thinks it\'s time to sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Circadian rhythm sleep-wake disorders (CRSWDs) occur when the endogenous circadian pacemaker is misaligned with the external environment or social demands, resulting in chronic sleep-wake timing problems and associated symptoms.',
      explanation: `## Understanding Circadian Rhythm

### The Master Clock
Your body has a master clock in the brain called the suprachiasmatic nucleus (SCN), located in the hypothalamus. This clock:
- Runs on approximately a 24.2-hour cycle
- Is synchronized (entrained) to exactly 24 hours by external cues
- Controls timing of sleep, alertness, hormones, body temperature

### Zeitgebers (Time Cues)
**Light is the Strongest:**
- Light enters the eye and travels to the SCN via the retinohypothalamic tract
- Morning light advances the clock (makes it earlier)
- Evening light delays the clock (makes it later)

**Other Zeitgebers:**
- Meal timing
- Social activities
- Exercise
- Temperature

### Types of Circadian Rhythm Disorders

**1. Delayed Sleep-Wake Phase Disorder (DSWPD)**
- Sleep onset and wake time are delayed 2+ hours
- Common in adolescents (7-16%)
- Difficulty falling asleep at conventional times
- Extreme difficulty waking for school/work
- Normal sleep quality and duration when able to sleep ad lib
- Often labeled as "insomnia" but it's a timing issue

**2. Advanced Sleep-Wake Phase Disorder (ASWPD)**
- Sleep onset and wake time are advanced
- Evening sleepiness (7-9 PM)
- Early morning awakening (3-5 AM)
- More common in elderly
- Genetic component (PER2 mutations in familial cases)

**3. Shift Work Disorder**
- Sleep problems due to work during biological night
- Affects 10-40% of shift workers
- Symptoms: insomnia during day sleep, sleepiness at work
- Increased risk of accidents, metabolic disease

**4. Jet Lag Disorder**
- Temporary misalignment after rapid travel across time zones
- Symptoms: sleep disturbance, fatigue, GI upset, cognitive impairment
- Rule of thumb: 1 day recovery per time zone crossed
- Eastward travel harder than westward (must advance clock)

**5. Irregular Sleep-Wake Rhythm Disorder**
- No clear circadian pattern
- Sleep occurs in fragments throughout 24 hours
- Associated with neurological conditions (dementia, brain injury)
- Insufficient light exposure often contributes

**6. Non-24-Hour Sleep-Wake Rhythm Disorder**
- Internal clock runs at its natural ~24.2-hour cycle
- Sleep times drift later each day
- Most common in totally blind individuals (no light input to SCN)
- Can occur in sighted individuals with weak zeitgebers

### Diagnosis

**Sleep Diary:**
- Record sleep and wake times for 2+ weeks
- Reveals characteristic patterns

**Actigraphy:**
- Wristwatch-like device that measures movement
- Worn for 1-2 weeks
- Shows sleep-wake patterns objectively

**Dim Light Melatonin Onset (DLMO):**
- Measures when melatonin starts to rise
- Done in dim light (otherwise light suppresses melatonin)
- Gold standard for circadian timing

### Treatment Principles

**Light Therapy:**
| Disorder | Light Timing | Rationale |
|----------|--------------|-----------|
| DSWPD | Morning | Advance clock earlier |
| ASWPD | Evening | Delay clock later |
| Shift work | Before night shift | Promote alertness |

**Melatonin:**
- Low doses (0.5-3 mg) are often effective
- Timing is critical (not just "at bedtime")
- For DSWPD: 5-6 hours before natural sleep time
- For ASWPD: Upon awakening

**Chronotherapy:**
- Gradually shifting sleep times
- Progressive delay (easier) or advance

**Sleep Hygiene:**
- Consistent wake time is crucial
- Minimize evening light exposure (DSWPD)
- Strategic caffeine use`,
      keyTerms: [
        { term: 'suprachiasmatic nucleus', definition: 'The master circadian clock in the brain, located in the hypothalamus' },
        { term: 'zeitgeber', definition: 'Environmental cue that synchronizes the circadian clock (German for "time giver")' },
        { term: 'DLMO', definition: 'Dim Light Melatonin Onset; the time when melatonin begins rising, used to assess circadian timing' },
        { term: 'entrainment', definition: 'Synchronization of the internal clock to the external 24-hour day' },
        { term: 'actigraphy', definition: 'Method using a wrist-worn device to track movement and estimate sleep-wake patterns' },
      ],
      analogies: [
        'The SCN is like the conductor of an orchestra, keeping all your body\'s systems playing in time with each other.',
        'Light therapy for DSWPD is like dragging your body clock backwards by shining bright light in the morning when your body wants to sleep.',
      ],
    },
    3: {
      level: 3,
      summary: 'Circadian rhythm sleep-wake disorders result from misalignment between the endogenous circadian pacemaker (SCN) and the external environment, diagnosed through sleep logs, actigraphy, and DLMO, and treated with timed light exposure and melatonin to phase-shift the circadian system.',
      explanation: `## Circadian Physiology

### Molecular Clock Mechanism
**Core Clock Genes:**
- CLOCK and BMAL1: Positive arm (transcription activators)
- PER1, PER2, PER3: Negative arm
- CRY1, CRY2: Negative arm

**Transcription-Translation Feedback Loop (TTFL):**
\`\`\`
CLOCK + BMAL1 → activate PER, CRY transcription
                    ↓
PER + CRY proteins accumulate
                    ↓
PER-CRY complex inhibits CLOCK-BMAL1
                    ↓
PER, CRY degrade over hours
                    ↓
CLOCK-BMAL1 reactivated → cycle repeats (~24 hours)
\`\`\`

**Auxiliary Loops:**
- REV-ERBα/β and RORα regulate BMAL1 transcription
- Additional fine-tuning mechanisms

### Light Input to SCN
**Pathway:**
1. Intrinsically photosensitive retinal ganglion cells (ipRGCs)
2. Melanopsin photopigment (most sensitive to blue light ~480 nm)
3. Retinohypothalamic tract (RHT)
4. Glutamate + PACAP release in SCN
5. Phase response depends on timing:
   - Light in early night: delays clock
   - Light in late night/early morning: advances clock

**Phase Response Curve (PRC):**
| Circadian Time | Light Effect |
|----------------|--------------|
| CT 0-6 (early subjective night) | Delay (later) |
| CT 6-12 (late subjective night) | Advance (earlier) |
| CT 12-18 (subjective day) | Minimal effect |
| CT 18-24 (late subjective day) | Minimal or slight delay |

*CT = Circadian Time; CT 0 = melatonin onset, CT 6 = core body temp minimum*

### Melatonin Physiology
**Production:**
- Pineal gland synthesizes from tryptophan → serotonin → melatonin
- Suppressed by light (via SCN → superior cervical ganglion → pineal)
- Peaks in middle of biological night

**Functions:**
- Provides internal signal of darkness
- Mild hypnotic effect
- Phase-shifting capability (opposite to light)

**Melatonin PRC:**
- Evening melatonin: advances clock
- Morning melatonin: delays clock

## ICSD-3 Diagnostic Criteria

### Delayed Sleep-Wake Phase Disorder
A. Chronic pattern of delayed sleep timing (2+ hours vs. desired/required)
B. Symptoms present for ≥3 months
C. When allowed to sleep ad lib, sleep quality and duration are normal
D. Sleep log/actigraphy for ≥7 days demonstrates the delay
E. Not better explained by another disorder

### Advanced Sleep-Wake Phase Disorder
A. Chronic pattern of advanced sleep timing
B-E. Similar to DSWPD criteria

### Irregular Sleep-Wake Rhythm Disorder
A. Chronic pattern of irregular sleep-wake episodes throughout 24 hours
B. Symptoms for ≥3 months
C. Sleep log/actigraphy for ≥7 days shows:
   - ≥3 sleep periods per 24 hours
   - Total sleep time normal for age
D. Not better explained by another disorder

### Non-24-Hour Sleep-Wake Rhythm Disorder
A. Progressive daily drift of sleep times
B. Symptoms for ≥3 months
C. Sleep log/actigraphy for ≥14 days shows progressive delay/drift

## Treatment Protocols

### DSWPD Treatment
**Light Therapy:**
- 10,000 lux light box, 30 min
- Upon natural wake time initially
- Gradually shift earlier as sleep advances
- Maintain until target time reached

**Melatonin:**
- 0.5-3 mg, 5-6 hours before current sleep onset
- Shift earlier as sleep advances
- Target: 3-4 hours before desired bedtime once stable

**Combined Approach:**
\`\`\`
Week 1: Melatonin 5h before current sleep onset
        Morning light upon awakening
Week 2+: Gradually advance melatonin timing
         Gradually advance light timing
         Maintain strict wake time
\`\`\`

### ASWPD Treatment
- Evening bright light (7-9 PM)
- Morning melatonin (upon awakening) - less studied
- Allow later bedtime

### Shift Work Disorder
**Before Night Shift:**
- Bright light exposure before/during early shift
- Strategic napping before shift

**During Night Shift:**
- Intermittent bright light
- Caffeine strategically (not near end of shift)

**After Night Shift:**
- Wear dark glasses on drive home
- Sleep in dark, cool environment
- Use blackout curtains

**Melatonin:**
- Before day sleep period (1-3 mg)
- Helps with daytime sleep

### Jet Lag Management
**Eastward Travel (advance needed):**
- Pre-flight: Advance sleep 1 hour/day for several days
- Post-arrival: Morning light, avoid afternoon naps
- Melatonin at destination bedtime for first few days

**Westward Travel (delay needed):**
- Usually easier to adapt
- Stay awake until local bedtime
- Get evening light at destination

### Non-24-Hour Sleep-Wake Disorder
**In Blind Individuals:**
- Tasimelteon (Hetlioz): MT1/MT2 agonist, FDA-approved
- Entrain to 24-hour cycle by taking at fixed time
- Low-dose melatonin (0.5-1 mg at desired bedtime) also effective

## Assessment Tools

### Actigraphy Analysis
**Parameters:**
- Total sleep time
- Sleep efficiency
- Sleep onset time, wake time
- Interdaily stability
- Intradaily variability

### DLMO Measurement
**Protocol:**
- Dim light (<30 lux) starting 6-8 hours before expected DLMO
- Salivary or plasma samples every 30-60 min
- DLMO = time melatonin rises above threshold (3 pg/mL saliva or 10 pg/mL plasma)

**Normal DLMO:**
- 2-3 hours before habitual sleep onset
- DSWPD: DLMO delayed (e.g., midnight or later)
- ASWPD: DLMO advanced (e.g., 5-6 PM)`,
      keyTerms: [
        { term: 'TTFL', definition: 'Transcription-Translation Feedback Loop; the molecular mechanism generating circadian rhythms' },
        { term: 'ipRGCs', definition: 'Intrinsically photosensitive retinal ganglion cells; contain melanopsin and provide light input to SCN' },
        { term: 'phase response curve', definition: 'Graph showing how light or melatonin shifts circadian timing depending on when administered' },
        { term: 'tasimelteon', definition: 'MT1/MT2 melatonin receptor agonist FDA-approved for Non-24 in blind individuals' },
        { term: 'chronotype', definition: 'Individual\'s intrinsic preference for sleep-wake timing (morningness vs. eveningness)' },
      ],
      clinicalNotes: 'Clinical pearls: 1) Ask about chronotype in all insomnia patients - DSWPD is often misdiagnosed as insomnia. 2) Timing of light and melatonin is critical - wrong timing can worsen the problem. 3) Actigraphy is essential for diagnosis - subjective reports often inaccurate. 4) Shift workers have chronic, often underappreciated health risks. 5) Blue-light blocking glasses in evening may help DSWPD patients.',
    },
    4: {
      level: 4,
      summary: 'Circadian rhythm disorders arise from disruption at multiple levels of the circadian system, from molecular clock gene variants to SCN dysfunction to impaired photic entrainment, with treatment targeting phase-shifting via timed light, melatonin agonists, and behavioral interventions.',
      explanation: `## Advanced Circadian Neurobiology

### SCN Architecture and Function
**Anatomy:**
- Paired nuclei, ~20,000 neurons each
- Located above optic chiasm in anterior hypothalamus
- Core region: VIP neurons, receive direct retinal input
- Shell region: AVP neurons, provide output

**Coupling:**
- Individual SCN neurons oscillate independently
- VIP-mediated intercellular coupling synchronizes the network
- Disrupted coupling → rhythm fragmentation

**SCN Outputs:**
\`\`\`
Direct projections:
- Subparaventricular zone (SPZ)
- Dorsomedial hypothalamus (DMH)
- Paraventricular nucleus (PVN)
                    ↓
DMH → orexin neurons, LC, raphe (sleep-wake)
PVN → sympathetic outflow (pineal melatonin, HPA axis)
\`\`\`

### Molecular Clock Details
**Core TTFL:**
\`\`\`
Positive limb:
CLOCK:BMAL1 heterodimer binds E-box promoters
Activates PER1/2/3, CRY1/2, REV-ERBα, RORα transcription

Negative limb:
PER:CRY complexes accumulate, phosphorylated by CK1δ/ε
PER:CRY enter nucleus, inhibit CLOCK:BMAL1
Degradation via ubiquitin-proteasome pathway

Period: ~24 hours
\`\`\`

**Post-Translational Regulation:**
- CK1δ/ε phosphorylate PER, targeting for degradation
- Rate of PER degradation determines period length
- Familial ASPD: PER2 mutation → faster degradation → shorter period

### Genetic Basis of CRSWDs

**Familial ASPD:**
| Gene | Mutation | Effect |
|------|----------|--------|
| PER2 | S662G | Loss of CK1 phosphorylation site, faster degradation |
| CK1δ | T44A | Altered kinase activity, shorter period |

**DSWPD Associations:**
- PER3 variable number tandem repeat
- Clock gene polymorphisms
- Weaker associations than ASPD

**Non-24 in Sighted:**
- May have intrinsically long period (>24.5 hours)
- Weak light sensitivity
- Reduced ipRGC function possible

### Light Input Pathway Details
**ipRGC Subtypes:**
- M1: Primary SCN projection
- M2-M5: Various non-image-forming functions
- Melanopsin: Maximal sensitivity ~480 nm (blue)

**Dose-Response:**
- Phase-shifting scales with:
  - Intensity (lux)
  - Duration
  - Wavelength (blue > red)
- Saturation at very high intensities

**Spectral Considerations:**
- Blue-enriched light most effective for phase shifting
- Red light minimally affects circadian system
- Implication: Blue-blocking glasses may reduce evening light impact

### Melatonin Pharmacology
**Receptors:**
- MT1: High affinity, inhibits SCN firing acutely
- MT2: Phase-shifting effects, memory
- Both: Gi-coupled, decrease cAMP

**Exogenous Melatonin:**
- Phase-response curve opposite to light
- Evening administration advances
- Morning administration delays
- Sleep-promoting effect (mild)

**Dosing Considerations:**
- Physiological doses (0.5-1 mg) may be as effective as supraphysiological
- Higher doses (3-5 mg) prolong duration of elevated levels
- Timing more important than dose for phase-shifting

**Melatonin Agonists:**
| Agent | Receptor | Indication | Notes |
|-------|----------|------------|-------|
| Ramelteon | MT1/MT2 | Insomnia | Short half-life, sleep onset |
| Tasimelteon | MT1/MT2 | Non-24 | Longer half-life, entraining |
| Agomelatine | MT1/MT2, 5-HT2C | Depression (Europe) | Antidepressant with circadian effects |

## Clinical Assessment

### DLMO Protocol (Detailed)
\`\`\`
Preparation:
- Stop melatonin supplements ≥1 week before
- Avoid NSAIDs (may affect melatonin)
- Maintain regular sleep schedule 1 week before

Collection:
- Begin 6-8 hours before expected DLMO
- Dim light (<30 lux, <10 lux preferred)
- Saliva every 30-60 minutes
- Continue until 1 hour after habitual sleep onset

Analysis:
- Plot melatonin vs. time
- DLMO = first time above threshold (3 pg/mL saliva)
- Compare to habitual sleep onset (normally DLMO 2-3 h before)
\`\`\`

### Morningness-Eveningness Questionnaire
- Standardized assessment of chronotype
- Scores range from extreme morningness to extreme eveningness
- DSWPD patients score extreme eveningness

### Circadian Phase Markers
**Core Body Temperature (CBT):**
- Minimum (CBTmin) occurs 2-3 hours before wake
- Difficult to measure reliably
- Used in research settings

**Cortisol:**
- Peaks shortly after awakening (CAR: cortisol awakening response)
- Can assess circadian alignment

## Advanced Treatment

### Chronotherapy
**Progressive Delay Chronotherapy (for DSWPD):**
\`\`\`
Night 1: Delay bedtime 3 hours (e.g., 3 AM → 6 AM)
Night 2: Delay another 3 hours (6 AM → 9 AM)
Continue until reaching desired bedtime
Then maintain with strict schedule + light
\`\`\`

**Risks:**
- Non-24 can develop if not careful
- Requires controlled environment
- Social/occupational disruption during treatment

### Combined Light + Melatonin
**Rationale:**
- Light and melatonin PRCs are approximately inverse
- Combined treatment: additive phase-shift
- Evening melatonin + morning light for DSWPD: both advance

**Protocol Example (DSWPD):**
\`\`\`
Days 1-3: Melatonin 0.5-1 mg at 5 PM (5-6 h before current DLMO)
          Light therapy 30 min upon awakening
Days 4+:  Gradually advance melatonin (4:30 PM, 4 PM...)
          Gradually advance light
          Maintain strict wake time
\`\`\`

### Shift Work Interventions
**Fixed Night Shift (permanent):**
- May consider partial circadian adaptation
- Bright light during first half of shift
- Maintain some light exposure on days off to prevent full resynchronization

**Rotating Shifts:**
- Hardest to manage
- Forward rotation (days → evenings → nights) easier than backward
- Strategic napping, caffeine timing
- Dark glasses after night shift

### Non-24 in Blind
**Tasimelteon (Hetlioz):**
- 20 mg before bedtime at desired time
- Requires 3-4 months to assess entrainment
- Monitor for efficacy by sleep logs
- FDA-approved specifically for this indication

**Melatonin Alternative:**
- 0.5-3 mg at fixed time nightly
- Less data than tasimelteon but effective
- Lower cost

## Comorbidities and Complications

### DSWPD Associations
- Depression, anxiety (bidirectional relationship)
- ADHD (possibly shared genetic factors)
- School/occupational problems
- Social isolation

### Shift Work Consequences
**Short-term:**
- Sleepiness, performance impairment
- Accidents (road, occupational)
- GI disturbances

**Long-term:**
- Metabolic syndrome, obesity, T2DM
- Cardiovascular disease
- Possibly cancer (circadian disruption, melatonin suppression)
- Reproductive issues`,
      keyTerms: [
        { term: 'VIP', definition: 'Vasoactive intestinal peptide; neurotransmitter mediating SCN neuron coupling and entrainment' },
        { term: 'CK1δ/ε', definition: 'Casein kinase 1 delta/epsilon; phosphorylates PER proteins, regulating circadian period length' },
        { term: 'chronotherapy', definition: 'Treatment approach using progressive delay or advance of sleep times to reach target timing' },
        { term: 'CAR', definition: 'Cortisol awakening response; physiological cortisol surge upon waking, reflects circadian function' },
        { term: 'ipRGC', definition: 'Intrinsically photosensitive retinal ganglion cells; melanopsin-containing cells providing non-visual light input' },
      ],
      clinicalNotes: 'Advanced clinical considerations: 1) DLMO is gold standard for circadian phase assessment but not routinely available - rely on sleep logs and actigraphy clinically. 2) Combined light + melatonin may be more effective than either alone for phase-shifting. 3) Genetic testing for clock gene variants is research, not clinical practice. 4) Shift workers should be counseled on long-term health risks. 5) Non-24 in sighted patients may indicate psychiatric comorbidity or very weak zeitgeber exposure.',
    },
    5: {
      level: 5,
      summary: 'Circadian rhythm disorders encompass a spectrum from genetic disorders of the molecular clockwork (familial ASPD) to acquired disorders of entrainment, with emerging treatments including selective orexin antagonists for shift work and genetic insights informing personalized chronotherapy.',
      explanation: `## Molecular Clock Genetics

### Clock Gene Variants and Phenotypes
**Familial Advanced Sleep Phase:**
\`\`\`
PER2-S662G mutation:
- Serine → Glycine at CK1ε phosphorylation site
- Hypophosphorylated PER2
- Faster nuclear entry and degradation
- Period shortened to ~20 hours → very early sleep phase

CK1δ-T44A mutation:
- Reduced kinase activity
- Paradoxically shorter period
- Mechanism: altered substrate specificity
\`\`\`

**PER3 VNTR:**
- Variable number tandem repeat in PER3
- 4-repeat vs. 5-repeat alleles
- 5-repeat: more vulnerable to sleep deprivation
- Associated with morningness preference
- Weak DSWPD association

**GWAS Findings:**
- Chronotype is ~50% heritable
- Numerous loci of small effect identified
- PAX8, RGS16, PER2, FBXL13 among top hits
- Polygenic scores for chronotype possible but not clinical

### Post-Transcriptional/Translational Regulation
**Phosphorylation:**
- CK1δ/ε: Primary PER kinases
- CK2: Phosphorylates PER, BMAL1
- GSK3β: Phosphorylates multiple clock proteins
- Lithium inhibits GSK3β → lengthens period

**Ubiquitination:**
- βTrCP targets phosphorylated PER for degradation
- FBXL3 targets CRY for degradation
- FBXL21 (related) partially protects CRY
- These E3 ligases are potential drug targets

**Period Mutations and Cancer:**
- PER1/2 have tumor suppressor functions
- Circadian disruption → increased cancer risk (shift work studies)
- Mechanism: Cell cycle regulation, DNA damage response

## SCN Pathophysiology in Disease

### Aging
**Changes:**
- Reduced SCN neuron number
- Decreased VIP expression
- Reduced amplitude of rhythms
- Phase advance (earlier timing)
- Fragmented rhythms

**Clinical Implications:**
- Early morning awakening common in elderly
- May contribute to sundowning in dementia
- Bright light therapy beneficial

### Neurodegenerative Disease
**Alzheimer's Disease:**
- SCN pathology (neurofibrillary tangles)
- Severe rhythm fragmentation
- Sundowning correlates with rhythm disruption
- Light therapy can improve sleep and reduce agitation

**Parkinson's Disease:**
- REM sleep behavior disorder (separate but circadian overlap)
- Reduced melatonin amplitude
- Sleep fragmentation

### Irregular Sleep-Wake Rhythm
**Mechanism:**
- Weakened SCN output (neurodegeneration)
- Insufficient light exposure (institutionalization)
- Weak social/activity zeitgebers
- Results in multiple sleep bouts, no dominant rhythm

**Treatment:**
- Bright light exposure during day
- Structured activities
- Evening melatonin
- Minimize nighttime light/disruption

## Advanced Treatment Approaches

### Dual Orexin Receptor Antagonists for Shift Work
**Rationale:**
- Block wake-promoting orexin signaling
- May improve daytime sleep in shift workers
- Does not address underlying circadian misalignment but manages symptoms

**Evidence:**
- Suvorexant and lemborexant improve subjective sleep
- May help shift workers sleep during biological day
- Safety considerations with driving after night shift

### Chronopharmacology
**Concept:**
- Drug efficacy varies by circadian time of administration
- Metabolism, targets, receptors all have circadian rhythms

**Examples:**
| Drug | Optimal Timing | Rationale |
|------|----------------|-----------|
| Statins (short-acting) | Evening | Hepatic cholesterol synthesis peaks at night |
| Aspirin (CV protection) | Evening | Morning platelet activity peak |
| BP medications | Evening (some) | Target nocturnal non-dipping |
| Chemotherapy | Variable | Cell cycle, toxicity rhythms |

**CRSWDs and Drug Timing:**
- Shift workers, jet lag: Drug timing relative to internal clock may differ from clock time
- Relevance for time-sensitive medications

### Mathematical Modeling
**Circadian Models:**
- Van der Pol oscillator-based models
- Multi-oscillator models (SCN + peripheral)
- Can predict response to light schedules

**Applications:**
- Jet lag calculators (when to seek/avoid light)
- Shift work schedule optimization
- Personalized treatment planning

### Emerging Therapies

**CK1δ/ε Inhibitors:**
- Target rate-limiting step in PER degradation
- Lengthen circadian period
- Potential for ASPD treatment
- Safety concerns (kinases have many substrates)

**Small Molecule Clock Modulators:**
- REV-ERB agonists (alter BMAL1 transcription)
- CRY stabilizers
- Research stage, not clinical

**Chronophototherapy:**
- Optimized light protocols based on individual PRC
- Spectral tuning (blue-enriched vs. polychromatic)
- Wearable light delivery devices

## Research Frontiers

### Peripheral Clocks
**Concept:**
- Most cells have autonomous clocks
- SCN synchronizes peripheral oscillators
- Food timing can entrain liver clock independent of SCN

**Implications:**
- Shift work: Eating at biological night disrupts peripheral rhythms
- Time-restricted eating may help realign metabolic clocks
- Muscle, adipose, immune clocks also relevant

### Circadian Medicine
**Emerging Field:**
- Considers circadian timing in all aspects of medicine
- Chrono-immunology: Immune function varies by time
- Chrono-surgery: Outcomes may vary by time of day
- Drug dosing optimization

### Personalized Chronotherapy
**Components:**
1. Individual chronotype assessment
2. DLMO or other phase marker
3. Mathematical modeling of response to light/melatonin
4. Personalized schedules for:
   - Light exposure timing/duration/spectrum
   - Melatonin timing/dose
   - Activity/meal timing

**Barriers:**
- DLMO not readily available
- Models need validation
- Individual variability in response

## Special Populations

### Adolescents
**Biological Factors:**
- Pubertal delay of circadian phase
- Slower buildup of sleep pressure
- Result: Later chronotype, DSWPD vulnerability

**Social Factors:**
- Early school start times
- Evening social media/light exposure
- Chronic sleep deprivation in many adolescents

**Interventions:**
- Later school start times (most effective population-level)
- Evening light restriction
- Morning light exposure
- Melatonin if severe

### Blind Individuals
**Non-24 Pathophysiology:**
- No photic input to SCN (if no light perception)
- Endogenous period expressed (~24.2-24.5 hours)
- Sleep times drift progressively later

**Treatment:**
- Tasimelteon FDA-approved
- Melatonin effective and lower cost
- Both require consistent timing for entrainment

### Critical Care/Hospital
**Circadian Disruption:**
- 24-hour lighting in ICUs
- Frequent interruptions
- Sedation/medications
- May worsen delirium, outcomes

**Interventions:**
- Circadian lighting protocols
- Minimizing nighttime disruptions
- Melatonin for sleep/delirium prevention`,
      keyTerms: [
        { term: 'chronopharmacology', definition: 'Study of how circadian rhythms affect drug pharmacokinetics and pharmacodynamics, informing optimal dosing times' },
        { term: 'peripheral clocks', definition: 'Autonomous circadian oscillators in tissues outside the SCN that are synchronized by the master clock' },
        { term: 'βTrCP', definition: 'E3 ubiquitin ligase that targets phosphorylated PER for proteasomal degradation, a key step in the molecular clock' },
        { term: 'time-restricted eating', definition: 'Dietary approach confining food intake to limited hours to align with circadian rhythms' },
        { term: 'chrono-immunology', definition: 'Study of circadian regulation of immune function, with implications for vaccination timing and autoimmune diseases' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Familial ASPD/DSWPD with clear Mendelian patterns are rare - most cases are polygenic + environmental
2. CK1 inhibitors and clock modulators are in development but face safety challenges
3. Shift work disorder has underappreciated long-term health consequences - occupational health issue
4. Peripheral clock disruption (meal timing) may be independent contributor to metabolic disease
5. Circadian medicine is expanding - consider circadian factors in drug dosing, surgery timing
6. For treatment-resistant DSWPD, consider combined light + melatonin + sleep scheduling with behavioral sleep medicine support
7. Mathematical tools to optimize jet lag and shift schedules exist but are underutilized`,
    },
  },

  media: [
    {
      id: 'circadian-prc-diagram',
      type: 'diagram',
      filename: 'phase-response-curves.svg',
      title: 'Phase Response Curves for Light and Melatonin',
      description: 'Diagram showing how timing of light and melatonin affects circadian phase',
    },
    {
      id: 'scn-pathway-diagram',
      type: 'diagram',
      filename: 'scn-pathways.svg',
      title: 'SCN Input and Output Pathways',
      description: 'Anatomical diagram of circadian system neuroanatomy',
    },
    {
      id: 'molecular-clock-diagram',
      type: 'diagram',
      filename: 'molecular-clock.svg',
      title: 'Molecular Clock Mechanism',
      description: 'Transcription-translation feedback loop of core clock genes',
    },
  ],

  citations: [
    {
      id: 'abbott-crswds-2020',
      type: 'article',
      title: 'Circadian rhythm sleep-wake disorders',
      authors: ['Abbott, S.M.', 'Reid, K.J.', 'Zee, P.C.'],
      source: 'Psychiatric Clinics of North America',
      chapter: '43:249-261',
    },
    {
      id: 'aasm-crswds-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for the Treatment of Circadian Rhythm Sleep-Wake Disorders',
      source: 'Journal of Clinical Sleep Medicine',
    },
    {
      id: 'takahashi-molecular-clock',
      type: 'article',
      title: 'Transcriptional architecture of the mammalian circadian clock',
      authors: ['Takahashi, J.S.'],
      source: 'Nature Reviews Genetics',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-sleep', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'condition-insomnia', targetType: 'condition', relationship: 'see-also', label: 'Insomnia' },
    { targetId: 'concept-sleep-hygiene', targetType: 'concept', relationship: 'related', label: 'Sleep Hygiene' },
    { targetId: 'concept-sleep-studies', targetType: 'concept', relationship: 'related', label: 'Sleep Studies' },
  ],

  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['sleep medicine', 'chronobiology', 'circadian rhythms'],
    keywords: ['circadian rhythm', 'DSWPD', 'ASWPD', 'shift work', 'jet lag', 'melatonin', 'light therapy', 'SCN'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default circadianRhythmDisorders;
