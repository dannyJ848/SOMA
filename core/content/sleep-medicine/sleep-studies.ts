/**
 * Sleep Studies - Comprehensive Educational Content
 *
 * Covers polysomnography (PSG), home sleep apnea testing (HSAT),
 * Multiple Sleep Latency Test (MSLT), and Maintenance of Wakefulness Test (MWT).
 */

import { EducationalContent } from '../types';

export const sleepStudies: EducationalContent = {
  id: 'concept-sleep-studies',
  type: 'concept',
  name: 'Sleep Studies',
  alternateNames: ['Polysomnography', 'PSG', 'Sleep Testing', 'Sleep Diagnostics', 'Sleep Lab Testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep studies are tests that measure what happens to your body while you sleep, helping doctors find out why you might be having sleep problems.',
      explanation: `## What is a Sleep Study?

A sleep study is like a checkup for your sleep! While you sleep, special equipment records what your body is doing. This helps doctors figure out if something is wrong with your sleep.

### Why Would Someone Need a Sleep Study?

**Common Reasons:**
- Snoring very loudly
- Stopping breathing during sleep
- Feeling very tired during the day
- Falling asleep at wrong times
- Moving a lot during sleep
- Acting out dreams

### What Happens During a Sleep Study?

**At a Sleep Lab (Hospital or Clinic):**
1. You arrive in the evening
2. A technician puts sensors on your body (they don't hurt!)
3. You sleep in a comfortable room
4. The sensors record while you sleep
5. You go home in the morning

**What the Sensors Measure:**
- Brain waves (to see what sleep stage you're in)
- Eye movements
- Heart rate
- Breathing
- Oxygen levels
- Leg movements
- Body position

### Types of Sleep Studies

**Overnight Sleep Study:**
- Spend the night at a sleep lab
- Most complete type of test
- Used for most sleep problems

**Home Sleep Test:**
- Wear a simple device at home
- Usually just for sleep apnea
- Fewer sensors, more comfortable

**Daytime Nap Tests:**
- Done during the day after an overnight study
- Used to find out why someone is very sleepy
- Take several naps while hooked up to sensors

### What the Test Tells Doctors

- If you stop breathing during sleep (sleep apnea)
- How deep your sleep is
- If your legs move a lot
- If you're getting good quality sleep
- How long it takes you to fall asleep

### Don't Be Scared!

- The sensors don't hurt
- You can move around during sleep
- Many people sleep fine during the test
- The technicians are there to help
- It's just one night`,
      keyTerms: [
        { term: 'sleep study', definition: 'A test that records what happens to your body while you sleep' },
        { term: 'sensors', definition: 'Small devices placed on your skin that record body signals' },
        { term: 'sleep lab', definition: 'A special room at a hospital or clinic where sleep studies are done' },
      ],
      analogies: [
        'A sleep study is like a video camera and health monitor that watches over you while you sleep, recording everything your body does.',
        'The sensors are like tiny reporters that send back information about different parts of your body to the computers.',
      ],
      examples: [
        'A child who snores very loudly might have a sleep study to see if they stop breathing during sleep.',
        'Someone who falls asleep suddenly during the day might have a nap test to find out if they have narcolepsy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep studies are diagnostic tests that record physiological parameters during sleep, including brain activity, breathing, heart rate, and movement, to diagnose sleep disorders like sleep apnea, narcolepsy, and periodic limb movement disorder.',
      explanation: `## Types of Sleep Studies

### Polysomnography (PSG)
The most comprehensive sleep test, performed overnight in a sleep lab.

**What's Recorded:**
| Channel | What It Measures |
|---------|------------------|
| EEG | Brain waves (sleep stages) |
| EOG | Eye movements (REM detection) |
| EMG (chin) | Muscle tone (REM atonia) |
| EMG (legs) | Leg movements |
| ECG | Heart rhythm |
| Airflow | Breathing through nose/mouth |
| Respiratory effort | Chest and belly movement |
| SpO2 | Blood oxygen level |
| Body position | Supine, side, prone |
| Snoring mic | Sound recording |

**Sleep Stages Identified:**
- N1: Light sleep (theta waves)
- N2: Deeper sleep (K-complexes, sleep spindles)
- N3: Deep sleep (slow delta waves)
- REM: Dreaming sleep (fast waves, eye movements)

### Home Sleep Apnea Test (HSAT)
**Also called:**
- Home sleep test
- Portable monitoring
- Out-of-center sleep test

**What's Recorded:**
- Airflow
- Respiratory effort
- Oxygen saturation
- Heart rate
- Sometimes body position

**Advantages:**
- Sleep in your own bed
- Lower cost
- No travel to sleep lab
- Can be repeated easily

**Limitations:**
- No brain wave monitoring (can't score sleep)
- May underestimate apnea (no sleep time measurement)
- Not appropriate for all patients

### Multiple Sleep Latency Test (MSLT)
Used to measure daytime sleepiness, especially for narcolepsy diagnosis.

**Protocol:**
1. Done the morning after overnight PSG
2. Five 20-minute nap opportunities
3. Every 2 hours (e.g., 9 AM, 11 AM, 1 PM, 3 PM, 5 PM)
4. Measures time to fall asleep and whether REM occurs

**Interpretation:**
- Mean sleep latency <8 minutes: Pathological sleepiness
- ≥2 SOREMPs (sleep-onset REM periods): Suggests narcolepsy

### Maintenance of Wakefulness Test (MWT)
Measures ability to stay awake.

**Protocol:**
1. Four 40-minute trials
2. Patient sits quietly in dim room
3. Instructed to stay awake
4. Every 2 hours

**Uses:**
- Evaluate treatment effectiveness
- Safety-sensitive occupations (pilots, truck drivers)
- Medicolegal purposes

## Indications for Sleep Studies

### When PSG is Needed
- Suspected sleep apnea with comorbidities
- Failed HSAT
- Suspected non-breathing sleep disorders:
  - Narcolepsy
  - Periodic limb movement disorder
  - REM sleep behavior disorder
  - Parasomnias
- CPAP titration

### When HSAT is Appropriate
- High pretest probability of moderate-severe OSA
- No significant comorbidities
- Able to use equipment properly
- Follow-up if negative: May need PSG

### When MSLT is Needed
- Suspected narcolepsy
- Suspected idiopathic hypersomnia
- Excessive sleepiness with unclear cause

## Understanding Results

### Apnea-Hypopnea Index (AHI)
Measures sleep apnea severity:
| AHI | Severity |
|-----|----------|
| <5 | Normal |
| 5-14 | Mild OSA |
| 15-29 | Moderate OSA |
| ≥30 | Severe OSA |

### Respiratory Disturbance Index (RDI)
- Includes apneas, hypopneas, AND respiratory effort-related arousals (RERAs)
- May be higher than AHI

### Sleep Efficiency
- Percentage of time in bed spent asleep
- Normal: >85%
- Low efficiency may indicate insomnia

### Periodic Limb Movement Index (PLMI)
- Number of leg movements per hour
- >15/hour with symptoms = PLMD

## Preparing for a Sleep Study

**Before the Test:**
- Avoid caffeine and alcohol
- Take normal medications (usually)
- Shower but skip hair products
- Pack overnight bag
- Bring comfortable sleepwear

**What to Expect:**
- Arrive evening before
- 30-60 minutes for setup
- Sleep monitored all night
- Wake in morning
- Results sent to your doctor`,
      keyTerms: [
        { term: 'polysomnography', definition: 'Comprehensive overnight sleep test recording multiple body functions' },
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; number of apneas and hypopneas per hour of sleep' },
        { term: 'MSLT', definition: 'Multiple Sleep Latency Test; measures how quickly you fall asleep during daytime naps' },
        { term: 'SOREMP', definition: 'Sleep-Onset REM Period; entering REM sleep within 15 minutes of sleep onset' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent asleep' },
      ],
      analogies: [
        'The PSG is like a full health report card for your sleep, grading all aspects of how your body behaves at night.',
        'The MSLT is like testing how strong your "sleepiness magnet" is during the day - how hard does it pull you toward sleep?',
      ],
    },
    3: {
      level: 3,
      summary: 'Polysomnography is the gold standard for sleep disorder diagnosis, using standardized AASM scoring criteria for sleep stages and respiratory events, while HSAT offers a validated alternative for uncomplicated OSA, and MSLT/MWT assess daytime sleepiness for hypersomnias and functional capacity.',
      explanation: `## Technical Parameters

### EEG Montage
**Standard Recording Sites (10-20 system):**
- Frontal: F3-M2, F4-M1
- Central: C3-M2, C4-M1
- Occipital: O1-M2, O2-M1

**Filters:**
- Low-frequency: 0.3 Hz
- High-frequency: 35 Hz

**Sleep Stage Scoring (AASM Criteria):**

| Stage | EEG Features | EOG | EMG |
|-------|--------------|-----|-----|
| W | Alpha or low-amplitude mixed | Blinks, eye movements | Normal/high |
| N1 | Theta (4-7 Hz), vertex waves | Slow rolling | Normal |
| N2 | K-complexes, sleep spindles | None | Low |
| N3 | Delta waves >75 µV, >20% epoch | None | Low |
| R | Low-amplitude, sawtooth waves | Rapid eye movements | Atonia |

### Respiratory Event Definitions

**Apnea (AASM 2012):**
- ≥90% reduction in airflow
- Duration ≥10 seconds
- Types:
  - Obstructive: Continued respiratory effort
  - Central: Absent respiratory effort
  - Mixed: Central onset, obstructive termination

**Hypopnea (AASM Recommended):**
- ≥30% reduction in airflow
- Duration ≥10 seconds
- Associated with ≥3% desaturation OR arousal

**Hypopnea (AASM Acceptable):**
- ≥30% reduction in airflow
- Duration ≥10 seconds
- Associated with ≥4% desaturation

**Respiratory Effort-Related Arousal (RERA):**
- Increasing respiratory effort
- Leads to arousal
- Does not meet apnea/hypopnea criteria

### AHI vs RDI vs REI

| Index | Events Counted | Denominator |
|-------|----------------|-------------|
| AHI | Apneas + hypopneas | Total sleep time |
| RDI | Apneas + hypopneas + RERAs | Total sleep time |
| REI | Apneas + hypopneas | Recording time |

*REI used for HSAT (no sleep staging)*

### Leg Movement Scoring

**Periodic Limb Movement (PLM):**
- Duration: 0.5-10 seconds
- Amplitude: ≥8 µV above baseline
- Series: ≥4 movements, 5-90 seconds apart

**PLMI Calculation:**
- PLMs per hour of sleep
- >15/hour with symptoms → PLMD diagnosis

## MSLT Protocol Details

**Prerequisites:**
1. Overnight PSG confirming ≥6 hours sleep
2. Sleep diary for 2 weeks showing adequate sleep
3. Off REM-suppressing medications ≥2 weeks
4. Urine drug screen (stimulants, REM suppressants)

**Procedure:**
\`\`\`
First nap: 1.5-3 hours after morning awakening
Subsequent naps: Every 2 hours
Each nap opportunity: 20 minutes
If sleep occurs: Continue 15 more minutes (look for REM)
If no sleep in 20 min: End nap
Record: Sleep latency, REM latency (if present)
\`\`\`

**Interpretation:**
| Mean Sleep Latency | Interpretation |
|-------------------|----------------|
| >10 min | Normal alertness |
| 8-10 min | Borderline |
| <8 min | Pathological sleepiness |

**SOREMPs:**
- ≥2 SOREMPs (on MSLT or 1 on MSLT + 1 on preceding PSG): Supports narcolepsy
- SOREMP = REM within 15 minutes of sleep onset

## MWT Protocol

**Indications:**
- Assess treatment response in hypersomnia
- Safety clearance for driving, piloting
- Disability evaluation

**Procedure:**
- 4 trials, every 2 hours
- 40 minutes each
- Dim room (<0.1 lux)
- Seated, eyes open
- "Try to stay awake"

**Outcomes:**
- Normal: Mean latency >30-40 minutes
- Intermediate: 20-30 minutes
- Abnormal: <20 minutes
- No sleep in all trials: Best outcome

## Split-Night Study

**Protocol:**
1. First half: Diagnostic PSG
2. If AHI ≥40 (or ≥20 with significant symptoms): Begin CPAP
3. Second half: CPAP titration

**Advantages:**
- Single night
- Cost-effective
- Faster treatment initiation

**Limitations:**
- May have inadequate diagnostic time
- May have inadequate titration time
- Not appropriate for all patients

## CPAP Titration Protocol

**Goals:**
- Eliminate apneas and hypopneas
- Eliminate snoring
- Optimize oxygenation
- Minimize arousals

**Titration Algorithm (simplified):**
\`\`\`
Start: 4 cm H2O
Increase by 1 cm every 5 min for:
- ≥2 obstructive apneas
- ≥3 hypopneas
- ≥5 RERAs
- ≥3 minutes of snoring
Maximum: Usually 20 cm H2O
Optimal pressure: Lowest that eliminates events
\`\`\`

## Quality Metrics

**Technical Quality:**
- Total recording time
- Signal quality per channel
- Technician notes

**Clinical Utility Measures:**
- Total sleep time ≥180 minutes (minimum for interpretation)
- Sleep efficiency
- Representation of all sleep stages
- Supine time (position-dependent OSA)

## Artifacts and Troubleshooting

**Common Artifacts:**
| Artifact | Appearance | Cause |
|----------|------------|-------|
| 60 Hz | Regular interference | Electrical |
| Sweat | Slow waves | Electrode gel |
| Movement | Large deflections | Patient movement |
| Electrode pop | Spike artifact | Poor contact |

**Troubleshooting:**
- Impedance check
- Re-application of electrodes
- Filter adjustment
- Patient positioning`,
      keyTerms: [
        { term: 'K-complex', definition: 'High-amplitude EEG waveform characteristic of N2 sleep; may occur in response to stimuli' },
        { term: 'sleep spindles', definition: '11-16 Hz EEG waveforms lasting ≥0.5 seconds; marker of N2 sleep' },
        { term: 'REI', definition: 'Respiratory Event Index; used for HSAT as equivalent to AHI but using recording time as denominator' },
        { term: 'split-night study', definition: 'PSG combining diagnostic portion and CPAP titration in single night' },
        { term: 'RERA', definition: 'Respiratory Effort-Related Arousal; breathing event causing arousal but not meeting apnea/hypopnea criteria' },
      ],
      clinicalNotes: 'Clinical pearls: 1) HSAT may underestimate AHI - negative test in symptomatic patient warrants PSG. 2) MSLT results can be affected by sleep deprivation, medications, OSA - ensure prerequisites met. 3) Split-night studies require AHI ≥40 in first 2 hours, or ≥20 with symptoms. 4) Positional OSA (AHI ≥2x higher supine) may benefit from positional therapy. 5) PLM index >15 is common but only clinically significant if symptomatic (PLMD).',
    },
    4: {
      level: 4,
      summary: 'Sleep study interpretation requires understanding of scoring rules, artifact recognition, and clinical correlation, with advanced applications including PAP auto-titration algorithms, quantitative EEG analysis, and emerging technologies like consumer sleep trackers and automated scoring.',
      explanation: `## Advanced PSG Interpretation

### Arousal Scoring
**AASM Definition:**
- Abrupt EEG frequency shift (alpha, theta, or >16 Hz)
- Duration ≥3 seconds
- Preceded by ≥10 seconds of stable sleep
- In REM: Requires concurrent chin EMG increase

**Arousal Index:**
- Arousals per hour of sleep
- >10/hour: Generally abnormal
- High arousal index may indicate UARS, PLMD, or fragmented sleep

### Sleep Architecture Analysis
**Normal Adult Sleep:**
\`\`\`
N1: 5-10%
N2: 45-55%
N3: 15-25%
REM: 20-25%
Sleep efficiency: >85%
REM latency: 70-100 minutes
Sleep latency: <30 minutes
WASO: <30 minutes
\`\`\`

**Pathological Patterns:**
| Finding | Possible Diagnoses |
|---------|-------------------|
| Increased N1, decreased N3 | Fragmented sleep, OSA |
| Absent/reduced REM | REM-suppressing medications, severe OSA |
| Short REM latency | Narcolepsy, depression, REM rebound |
| Reduced sleep efficiency | Insomnia, fragmented sleep |
| Alpha intrusion in NREM | Fibromyalgia, chronic pain |

### Respiratory Analysis

**Oxygen Desaturation Index (ODI):**
- Desaturations ≥3% (or ≥4%) per hour
- May be more predictive of cardiovascular outcomes than AHI
- T90: Time spent with SpO2 <90%

**Apnea Classification:**
\`\`\`
Obstructive apnea:
- Absent airflow
- Continued thoracoabdominal effort (paradoxical)
- Often with desaturation and arousal

Central apnea:
- Absent airflow
- Absent respiratory effort
- May be post-arousal (normal up to 5/hour)

Mixed apnea:
- Begins as central (no effort)
- Ends as obstructive (effort returns before airflow)
\`\`\`

**Central Apnea Patterns:**
| Pattern | Description |
|---------|-------------|
| Cheyne-Stokes | Crescendo-decrescendo, seen in CHF, stroke |
| Treatment-emergent CSA | Develops on PAP therapy |
| Opioid-related | Ataxic breathing, cluster pattern |
| High-altitude | Periodic breathing |

### Complex Sleep Apnea
- OSA on diagnostic study
- Emergence of central apneas on CPAP
- May require ASV or other approaches

## Advanced Monitoring Techniques

### Esophageal Pressure Monitoring
**Uses:**
- Gold standard for respiratory effort
- Detects subtle obstructions (UARS)
- Quantifies work of breathing

**Findings:**
- Inspiratory pressure swings increase before arousal
- More sensitive than thoracoabdominal effort

### End-Tidal CO2 Monitoring
**Indications:**
- Pediatric sleep studies
- Hypoventilation syndromes
- Obesity hypoventilation

**Interpretation:**
- PetCO2 >50 mmHg for >25% of TST: Hypoventilation
- Or >10 mmHg increase from awake baseline

### Audio Analysis
- Snoring quantification
- Snoring characteristics (regularity, intensity)
- Correlation with respiratory events

## PAP Device Technology

### Auto-PAP (APAP) Algorithms
**Event Detection:**
- Flow limitation (inspiratory flattening)
- Apnea/hypopnea detection
- Snoring
- Leak adjustment

**Pressure Response:**
- Algorithms vary by manufacturer
- Generally increase pressure for events
- Decrease pressure during periods of normal breathing

**Data Available:**
- Usage hours
- AHI (device-calculated)
- Leak data
- Pressure ranges used
- Detailed event logs

### Adaptive Servo-Ventilation (ASV)
**Mechanism:**
- Breath-by-breath adjustment
- Targets ventilation (not just airflow)
- Automatically adjusts IPAP and rate

**Contraindication:**
- Heart failure with EF <45% (SERVE-HF trial: increased mortality)

### Bilevel PAP
**Indications:**
- High CPAP requirement
- Intolerance of high CPAP
- Hypoventilation syndromes
- Overlap syndrome (COPD + OSA)

## Consumer Sleep Technology

### Actigraphy
**Clinical Uses:**
- Circadian rhythm disorders
- Sleep-wake documentation before MSLT
- Treatment compliance monitoring

**Limitations:**
- Cannot detect sleep stages
- Poor specificity (overestimates sleep in insomnia)
- Motion-based, not physiological

### Consumer Wearables
**Technologies:**
- Accelerometry (activity)
- Photoplethysmography (heart rate, HRV)
- Peripheral oxygen (some devices)

**Validation:**
- Sleep/wake detection: Moderate accuracy
- Sleep staging: Poor to moderate
- Respiratory events: Limited

**Clinical Role:**
- Not diagnostic
- May encourage sleep health awareness
- Longitudinal tracking
- Research applications

### Contactless Monitoring
- Radar-based sensors
- Mattress sensors
- Under-pillow devices
- Measure breathing patterns, heart rate

## Quality Assurance

### Interscorer Reliability
**AASM Standards:**
- Agreement for sleep staging: >80%
- Agreement for respiratory events: >80%
- Periodic audits recommended

**Sources of Variability:**
- Epoch-by-epoch differences at stage transitions
- Hypopnea vs. RERA determination
- Arousal scoring

### Accreditation
**AASM Accreditation Requirements:**
- Board-certified medical director
- Registered polysomnographic technologists
- QA program
- Continuing education
- Environment standards

## Emerging Technologies

### Automated Scoring
**AI/ML Approaches:**
- Deep learning for sleep staging
- Automated respiratory event detection
- Shows promise but not replacing technologists yet

**Regulatory Status:**
- Some FDA-cleared algorithms
- Often require technologist review/edit

### Peripheral Arterial Tonometry (PAT)
**Mechanism:**
- Measures finger pulse amplitude
- Attenuation correlates with arousals
- Combined with oximetry and actigraphy

**Devices:**
- WatchPAT (FDA-cleared)
- Home-use for OSA diagnosis
- Correlates with AHI

### High-Density EEG
**Research Applications:**
- Source localization
- Spatial sleep patterns
- Slow oscillation analysis
- Not clinical standard`,
      keyTerms: [
        { term: 'UARS', definition: 'Upper Airway Resistance Syndrome; increased work of breathing causing arousals without meeting apnea/hypopnea criteria' },
        { term: 'T90', definition: 'Cumulative time spent with oxygen saturation below 90%; marker of hypoxic burden' },
        { term: 'ASV', definition: 'Adaptive Servo-Ventilation; ventilation mode that adjusts breath-by-breath for central and mixed apneas' },
        { term: 'treatment-emergent CSA', definition: 'Central apneas appearing on CPAP therapy, previously called complex sleep apnea' },
        { term: 'PAT', definition: 'Peripheral Arterial Tonometry; technique using finger pulse amplitude to detect respiratory events' },
      ],
      clinicalNotes: 'Advanced clinical considerations: 1) Treatment-emergent CSA often resolves with continued CPAP use - reassess in 3 months before ASV. 2) ASV is contraindicated in heart failure with EF <45% (increased mortality). 3) Consumer wearables are not validated for diagnostic purposes but may track trends. 4) Auto-PAP download data may not match PSG AHI due to different algorithms. 5) Hypoventilation syndromes need capnography - SpO2 alone misses elevated CO2.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive sleep diagnostics integrate polysomnographic signals with cardiopulmonary coupling analysis, sleep microstructure quantification, and biomarker integration, while machine learning enhances automated scoring and novel phenotyping beyond traditional AHI-based categorization.',
      explanation: `## Advanced Signal Analysis

### Cardiopulmonary Coupling (CPC)
**Concept:**
- Interaction between heart rate variability and respiratory pattern
- Reflects sleep stability

**Calculation:**
- Cross-spectral analysis of R-R intervals and respiration
- Low-frequency (0.01-0.1 Hz) coupling patterns

**Interpretation:**
| Coupling Type | Sleep Quality | Pattern |
|---------------|---------------|---------|
| High-frequency | Stable sleep | Coherent HRV-respiration |
| Low-frequency | Unstable sleep | Periodic breathing signature |
| Very low-frequency | Wake/arousal | Variable pattern |

**Clinical Applications:**
- Phenotype OSA beyond AHI
- Identify patients with unstable breathing patterns
- May predict treatment response

### Slow Wave Activity (SWA) Analysis
**Quantification:**
- Power spectral analysis of delta band (0.5-4 Hz)
- SWA density maps across scalp
- Overnight SWA dynamics

**Normal Pattern:**
- Highest SWA in first sleep cycle
- Exponential decline across night
- Frontal predominance

**Clinical Relevance:**
- Reduced SWA: Aging, insomnia, many sleep disorders
- SWA enhancement: Target of closed-loop stimulation research
- May correlate with restorative function

### Sleep Spindle Analysis
**Parameters:**
- Density (spindles per minute of N2)
- Amplitude
- Frequency (slow: 9-12 Hz, fast: 12-15 Hz)
- Duration
- Frontal vs. central distribution

**Clinical Associations:**
| Finding | Association |
|---------|-------------|
| Reduced spindle density | Schizophrenia, cognitive impairment |
| Altered spindle frequency | Depression |
| Asymmetric spindles | Hemispheric pathology |

### Cyclic Alternating Pattern (CAP)
**Definition:**
- Periodic EEG pattern of alternating A-phases and B-phases
- Reflects sleep instability

**A-Phase Subtypes:**
- A1: Synchronized slow waves (restorative)
- A2: Polyphasic bursts (transitional)
- A3: Desynchronized (arousal, pathological)

**CAP Rate:**
- Increased in insomnia, OSA, PLMs
- Correlates with subjective poor sleep

## OSA Phenotyping Beyond AHI

### Endotypes
**Anatomic Factors:**
- Pcrit (critical closing pressure)
- Upper airway collapsibility
- Assessed via drug-induced sleep endoscopy or research PSG

**Non-Anatomic Factors:**
| Endotype | Mechanism | Assessment |
|----------|-----------|------------|
| Low arousal threshold | Premature arousal | Short respiratory event duration |
| Poor muscle responsiveness | Inadequate dilator compensation | Persistent flow limitation |
| High loop gain | Ventilatory control instability | Crescendo-decrescendo pattern |

**Clinical Implication:**
- High loop gain: May respond to O2 or acetazolamide
- Low arousal threshold: May respond to sedatives (cautiously)
- Primarily anatomic: CPAP, MAD, surgery

### Hypoxic Burden
**Concept:**
- Total oxygen desaturation area under SpO2 curve
- Integrates severity and duration of desaturations

**Calculation:**
\`\`\`
For each respiratory event:
Desaturation area = (Pre-event SpO2 - Nadir SpO2) × Duration
Sum across all events, normalize to hour
\`\`\`

**Advantages Over AHI:**
- Captures physiological impact
- Better correlates with cardiovascular outcomes
- Accounts for event severity, not just frequency

### Symptom-Based Phenotypes
**Cluster Analysis Studies:**
- Sleepy vs. minimally symptomatic
- Disturbed sleep predominant
- Comorbidity-dominant
- May predict different outcomes and treatment responses

## Emerging Diagnostic Technologies

### Peripheral Pulse Wave Analysis
**Signals:**
- Pulse transit time (PTT)
- Pulse wave amplitude (PWA)
- Photoplethysmography (PPG)

**Derived Parameters:**
- Respiratory effort (from PTT)
- Arousals (from PWA attenuation)
- Sleep staging (from HRV/PPG)

**Devices:**
- WatchPAT: Validated for OSA diagnosis
- Single-sensor home testing possible

### Under-Mattress Sensors
**Technology:**
- Ballistocardiography (heart contractions)
- Seismocardiography
- Breathing-related movement

**Capabilities:**
- Contactless, passive monitoring
- Respiratory events
- Heart rate
- Limited sleep staging

**Limitations:**
- Bed partner interference
- Positional variability
- Not replacing PSG/HSAT

### Drug-Induced Sleep Endoscopy (DISE)
**Protocol:**
- Propofol or midazolam sedation
- Flexible nasopharyngoscopy
- Observe sites of collapse

**Velum Oropharynx Tongue Epiglottis (VOTE):**
- Standardized classification
- Guides surgical planning
- Predicts MAD response

### Biomarker Integration
**Research Stage:**
| Biomarker | Potential Use |
|-----------|---------------|
| Exhaled breath | OSA phenotyping |
| Urinary catecholamines | Sympathetic activation |
| Inflammatory markers | Cardiovascular risk |
| MicroRNA | Disease severity, outcomes |
| Genetic panels | Susceptibility, treatment response |

## Artificial Intelligence in Sleep Medicine

### Automated Scoring
**Current State:**
- Deep learning achieves human-level staging
- FDA-cleared algorithms available
- Typically require technologist validation

**Architecture:**
- Convolutional neural networks (CNNs)
- Recurrent neural networks (RNNs)
- Transformers
- Multi-signal integration

### Respiratory Event Detection
**Approaches:**
- Signal-based (flow, effort, SpO2)
- Feature engineering vs. end-to-end learning
- Challenges: Event boundary determination

### Novel Applications
**Beyond Traditional Scoring:**
- Sleep phenotype clustering
- Treatment response prediction
- Outcome prediction (cardiovascular, cognitive)
- Real-time monitoring and intervention

### Challenges
- Generalizability across populations
- Interpretability ("black box")
- Regulatory approval pathway
- Integration into clinical workflow

## Pediatric Sleep Study Considerations

### Differences from Adult PSG
**Scoring:**
- Different EEG patterns (developmental)
- Lower AHI thresholds:
  - AHI >1: Abnormal in children
  - AHI >5: Moderate-severe

**Additional Monitoring:**
- End-tidal CO2 (required)
- Extended EEG montage (seizure detection)

**Interpretation:**
- Obstructive hypoventilation pattern (hypopneas, CO2 elevation)
- Adenotonsillar hypertrophy as primary etiology
- Different treatment paradigm (surgery first-line)

## Scoring System Harmonization

### AASM Updates
- Periodic revisions (last major: 2012)
- Hypopnea rule changes impact AHI
- Interstudy comparisons require same definitions

### International Variations
- Different scoring rules in some countries
- Research standardization efforts
- NSRR (National Sleep Research Resource) database for harmonization

### Recording Standards Evolution
- Higher sampling rates
- Improved sensor technology
- Unattended PSG expanding
- Integration with electronic health records`,
      keyTerms: [
        { term: 'cardiopulmonary coupling', definition: 'Analytic technique assessing coherence between cardiac and respiratory oscillations as marker of sleep stability' },
        { term: 'endotype', definition: 'Underlying physiological mechanism of OSA (anatomic, arousal threshold, loop gain, muscle responsiveness)' },
        { term: 'hypoxic burden', definition: 'Integrated metric of oxygen desaturation severity capturing total desaturation area over time' },
        { term: 'CAP', definition: 'Cyclic Alternating Pattern; NREM sleep phenomenon reflecting sleep instability' },
        { term: 'Pcrit', definition: 'Critical closing pressure; measure of upper airway collapsibility used to phenotype OSA anatomy' },
      ],
      clinicalNotes: `Expert-level considerations:
1. AHI alone inadequately captures OSA severity - hypoxic burden, arousal index, and sleep fragmentation all contribute to outcomes
2. Endotyping may guide precision therapy: high loop gain → acetazolamide; low arousal threshold → trazodone; primarily anatomic → surgery/CPAP
3. CPC analysis can identify patterns not captured by event scoring
4. AI-assisted scoring is emerging but requires validation and oversight
5. Pediatric scoring uses different thresholds and requires capnography
6. Consumer devices are not replacements for diagnostic testing but may improve population-level screening
7. Future direction: Integration of genomics, biomarkers, and imaging with PSG for precision medicine approach`,
    },
  },

  media: [
    {
      id: 'psg-setup-diagram',
      type: 'diagram',
      filename: 'psg-electrode-placement.svg',
      title: 'PSG Electrode Placement',
      description: 'Diagram showing standard polysomnography sensor placement',
    },
    {
      id: 'sleep-stages-eeg',
      type: 'diagram',
      filename: 'sleep-stage-eeg-patterns.svg',
      title: 'Sleep Stage EEG Patterns',
      description: 'Representative EEG patterns for each sleep stage',
    },
    {
      id: 'respiratory-events',
      type: 'diagram',
      filename: 'respiratory-event-types.svg',
      title: 'Respiratory Event Classification',
      description: 'Examples of obstructive, central, and mixed apneas',
    },
  ],

  citations: [
    {
      id: 'aasm-scoring-manual',
      type: 'textbook',
      title: 'AASM Manual for the Scoring of Sleep and Associated Events',
      source: 'American Academy of Sleep Medicine',
      chapter: 'Version 2.6',
    },
    {
      id: 'collop-portable-monitoring',
      type: 'article',
      title: 'Clinical Guidelines for the Use of Unattended Portable Monitors in the Diagnosis of OSA',
      source: 'Journal of Clinical Sleep Medicine',
    },
    {
      id: 'kapur-clinical-practice-guideline',
      type: 'article',
      title: 'Clinical Practice Guideline for Diagnostic Testing for Adult OSA',
      source: 'Journal of Clinical Sleep Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-obstructive-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Obstructive Sleep Apnea' },
    { targetId: 'condition-narcolepsy', targetType: 'condition', relationship: 'related', label: 'Narcolepsy' },
    { targetId: 'physiology-sleep-stages', targetType: 'process', relationship: 'related', label: 'Sleep Stages' },
    { targetId: 'condition-restless-legs-syndrome', targetType: 'condition', relationship: 'related', label: 'Restless Legs Syndrome' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['sleep medicine', 'diagnostics', 'pulmonology'],
    keywords: ['polysomnography', 'PSG', 'HSAT', 'MSLT', 'AHI', 'sleep staging', 'CPAP titration'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'pulmonology', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default sleepStudies;
