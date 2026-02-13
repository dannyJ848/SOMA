/**
 * Sleep Hygiene
 *
 * Evidence-based sleep recommendations for health optimization
 * and prevention of sleep-related disorders.
 */

import { EducationalContent } from '../../types';

export const SLEEP_HYGIENE: EducationalContent = {
  id: 'concept-sleep-hygiene',
  type: 'concept',
  name: 'Sleep Hygiene',
  alternateNames: ['Healthy sleep habits', 'Sleep recommendations', 'Sleep health'],

  levels: {
    1: {
      level: 1,
      summary: 'Good sleep is important for your health. Having regular sleep habits helps you sleep better and feel better.',
      explanation: `Sleep is like charging your body's battery. Without enough good sleep, everything is harder!

**Why Sleep Matters:**
- Helps you think clearly and remember things
- Keeps your mood stable
- Helps your body heal and fight germs
- Gives you energy for the day
- Helps maintain a healthy weight

**How Much Sleep Do You Need?**

| Age | Hours Per Night |
|-----|-----------------|
| Teens (14-17) | 8-10 hours |
| Adults (18-64) | 7-9 hours |
| Older Adults (65+) | 7-8 hours |

**Tips for Better Sleep:**

**Create a Good Sleep Environment:**
- Keep your room dark (use curtains or an eye mask)
- Keep it cool (around 65-68°F / 18-20°C)
- Make it quiet (or use white noise)
- Use comfortable bedding

**Develop Good Habits:**
- Go to bed and wake up at the same time every day
- Have a relaxing bedtime routine
- Avoid screens (phone, TV, computer) for 1 hour before bed
- Don't eat big meals late at night
- Avoid caffeine after noon

**Things That Hurt Sleep:**
- Caffeine (coffee, soda, energy drinks)
- Alcohol before bed
- Napping too long or too late
- Using your phone in bed
- Irregular sleep schedule
- Stress and worry

**When to See a Doctor:**
- You often can't fall asleep
- You wake up many times at night
- You snore loudly or stop breathing
- You feel tired all day even after sleeping
- You fall asleep at inappropriate times

Good sleep habits can make a big difference!`,
      keyTerms: [
        { term: 'sleep hygiene', definition: 'Good habits and practices that help you sleep well' },
        { term: 'circadian rhythm', definition: 'Your body\'s natural 24-hour sleep-wake cycle' },
        { term: 'insomnia', definition: 'Trouble falling asleep or staying asleep' },
      ],
      analogies: [
        'Your brain is like a phone that needs to be charged every night. Without enough charging (sleep), it doesn\'t work as well the next day.',
        'Sleep hygiene is like dental hygiene - good daily habits prevent bigger problems later.',
      ],
      examples: [
        'Keeping your bedroom cool helps because your body temperature naturally drops at night.',
        'Looking at your phone before bed makes it harder to sleep because the blue light tricks your brain into thinking it\'s daytime.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep hygiene encompasses behavioral and environmental practices that promote quality sleep, essential for cognitive function, metabolic health, and disease prevention.',
      explanation: `Sleep is a critical health behavior affecting nearly every body system.

**Sleep Architecture:**
Sleep occurs in cycles lasting ~90 minutes:
- Stage N1 (Light sleep): 5% - Transition, easily awakened
- Stage N2 (Intermediate): 45% - Body temperature drops
- Stage N3 (Deep/Slow-wave): 25% - Physical restoration, growth hormone
- REM (Rapid Eye Movement): 25% - Dreaming, memory consolidation

**Sleep Recommendations by Age:**

| Age Group | Recommended | May Be Appropriate |
|-----------|-------------|-------------------|
| School-age (6-13) | 9-11 hours | 7-8 or 12 hours |
| Teen (14-17) | 8-10 hours | 7 or 11 hours |
| Young Adult (18-25) | 7-9 hours | 6 or 10-11 hours |
| Adult (26-64) | 7-9 hours | 6 or 10 hours |
| Older Adult (65+) | 7-8 hours | 5-6 or 9 hours |

**Sleep Hygiene Principles:**

**1. Sleep Schedule Regularity:**
- Fixed wake time (most important)
- Fixed bedtime
- Consistent weekends (within 1 hour)
- Adjust gradually if changing schedule

**2. Bedroom Environment:**
- Temperature: 60-67°F (15-19°C)
- Darkness: Blackout curtains, remove light sources
- Quiet: White noise if needed
- Reserve bed for sleep and sex only

**3. Pre-Sleep Routine:**
- Wind-down period (30-60 minutes)
- Relaxing activities (reading, bath, gentle stretching)
- Dim lights in evening
- Avoid stimulating content

**4. Daytime Behaviors:**
- Light exposure in morning (helps circadian rhythm)
- Regular physical activity (not close to bedtime)
- Limit naps (20-30 minutes, before 3 PM)
- Manage stress

**Things to Avoid:**

| Substance/Behavior | Timing to Avoid |
|--------------------|-----------------|
| Caffeine | After 2 PM (or earlier if sensitive) |
| Alcohol | Within 3 hours of bedtime |
| Large meals | Within 2-3 hours of bedtime |
| Vigorous exercise | Within 4 hours of bedtime |
| Screens (blue light) | 1-2 hours before bed |
| Naps | After 3 PM or >30 minutes |

**Effects of Sleep Deprivation:**
- Impaired attention and reaction time
- Poor memory and learning
- Mood disturbances
- Weakened immune function
- Increased appetite and weight gain
- Higher risk of accidents`,
      keyTerms: [
        { term: 'sleep architecture', definition: 'The structure of sleep stages throughout the night' },
        { term: 'slow-wave sleep', definition: 'Deep sleep stage important for physical restoration' },
        { term: 'REM sleep', definition: 'Rapid Eye Movement sleep; stage associated with dreaming and memory consolidation' },
        { term: 'blue light', definition: 'Light wavelength from screens that suppresses melatonin production' },
        { term: 'melatonin', definition: 'Hormone that helps regulate sleep-wake cycles' },
      ],
      analogies: [
        'Sleep stages cycle like a washing machine - you need to complete all stages for the full cleaning (restoration) process.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep hygiene interventions target sleep-wake homeostasis and circadian regulation to optimize sleep quality, duration, and timing while preventing sleep disorders and their systemic health consequences.',
      explanation: `**Sleep Regulation Systems:**

**Two-Process Model of Sleep:**
1. **Process S (Homeostatic sleep drive):**
   - Accumulates during wakefulness
   - Adenosine accumulation in basal forebrain
   - Dissipates during sleep
   - Caffeine blocks adenosine receptors

2. **Process C (Circadian rhythm):**
   - ~24-hour internal clock
   - Master clock: Suprachiasmatic nucleus (SCN)
   - Entrained by light exposure
   - Melatonin secretion marks darkness

**Circadian Biology:**

*Light Pathway:*
- Retinal ganglion cells (melanopsin) → SCN → pineal gland → melatonin
- Blue light (460-480 nm) most effective at suppressing melatonin
- Evening light delays circadian phase
- Morning light advances circadian phase

*Chronotypes:*
- Morning type ("larks"): Earlier sleep-wake preference
- Evening type ("owls"): Later preference
- ~50% genetics, influenced by age (later in adolescence, earlier in aging)
- Chronotype mismatch with schedule → "social jet lag"

**Comprehensive Sleep Hygiene Components:**

**1. Stimulus Control Therapy:**
- Bed for sleep and sex only
- Go to bed only when sleepy
- Leave bedroom if awake >15-20 minutes
- Return when sleepy
- Fixed wake time regardless of sleep quality
- Reconditioning bed as sleep cue

**2. Sleep Restriction Therapy:**
- Limit time in bed to actual sleep time
- Creates mild sleep deprivation
- Increases sleep drive and efficiency
- Gradually increase time in bed as efficiency improves
- Target: >85% sleep efficiency

*Sleep efficiency = (Total sleep time / Time in bed) × 100%*

**3. Cognitive Techniques:**
- Worry time (scheduled, not at bedtime)
- Cognitive restructuring for sleep anxiety
- Paradoxical intention ("try to stay awake")
- Mindfulness and relaxation

**Sleep Disorder Screening:**

| Disorder | Key Symptoms | Screening Tool |
|----------|--------------|----------------|
| Insomnia | Difficulty initiating/maintaining sleep | Insomnia Severity Index |
| OSA | Snoring, witnessed apneas, daytime sleepiness | STOP-BANG |
| Restless Legs | Urge to move legs, worse at rest/evening | RLS diagnostic criteria |
| Circadian Rhythm | Sleep timing mismatch | Sleep diary, actigraphy |
| Narcolepsy | Excessive sleepiness, cataplexy | Epworth Sleepiness Scale |

**STOP-BANG Questionnaire (OSA Screening):**
- **S**noring
- **T**iredness
- **O**bserved apnea
- **P**ressure (blood pressure high)
- **B**MI >35
- **A**ge >50
- **N**eck circumference >40 cm
- **G**ender male

*Score ≥3: High risk for OSA*

**Sleep Tracking Technology:**

| Method | Measures | Accuracy |
|--------|----------|----------|
| Polysomnography | Gold standard; all stages | Reference |
| Consumer wearables | Sleep duration, stages (estimated) | Moderate for duration; poor for stages |
| Smartphone apps | Movement, sound | Low |
| Sleep diary | Subjective report | Valid for patterns |

**Pharmacological Considerations:**

*Melatonin:*
- Over-the-counter in US
- Doses: 0.5-5 mg (lower often effective)
- Timing: 1-2 hours before desired sleep
- Best for circadian disorders, jet lag
- Less effective for chronic insomnia

*Prescription Sleep Aids:*
- Benzodiazepine receptor agonists (BzRAs)
- Orexin receptor antagonists (suvorexant, lemborexant)
- Melatonin receptor agonists (ramelteon)
- Doxepin (low-dose for sleep maintenance)
- Cognitive behavioral therapy for insomnia (CBT-I) preferred first-line`,
      keyTerms: [
        { term: 'sleep-wake homeostasis', definition: 'Pressure to sleep that builds with wakefulness and dissipates with sleep' },
        { term: 'suprachiasmatic nucleus (SCN)', definition: 'Master circadian pacemaker located in hypothalamus' },
        { term: 'stimulus control', definition: 'Behavioral technique to reassociate the bed with sleep' },
        { term: 'sleep restriction therapy', definition: 'Limiting time in bed to increase sleep efficiency' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent sleeping; target >85%' },
      ],
      clinicalNotes: 'CBT-I is first-line treatment for chronic insomnia, not medications. Screen for OSA with STOP-BANG. Consider sleep diary before sleep study. Melatonin timing matters more than dose for circadian effects.',
    },
    4: {
      level: 4,
      summary: 'Sleep medicine integrates circadian neurobiology, sleep-stage neurophysiology, and evidence-based behavioral interventions to address the bidirectional relationships between sleep and chronic disease while managing specific sleep disorders.',
      explanation: `**Advanced Sleep Neurophysiology:**

**Sleep Stage Neurochemistry:**

| Stage | Key Neurotransmitters | Brain Activity |
|-------|----------------------|----------------|
| Wakefulness | ACh, NE, 5-HT, histamine, orexin | Cortical activation |
| NREM N1 | ↓ Wake-promoting NTs | Alpha → Theta |
| NREM N2 | Sleep spindles, K-complexes | Theta |
| NREM N3 | GABA-ergic inhibition | Delta waves |
| REM | ACh active; NE, 5-HT suppressed | Theta (hippocampal) |

*Orexin (Hypocretin):*
- Produced in lateral hypothalamus
- Stabilizes wakefulness
- Loss → Narcolepsy (type 1)
- Target of dual orexin receptor antagonists (DORAs)

**Sleep and Systemic Health:**

*Cardiovascular:*
- Short sleep (<6 hrs): ↑ HTN, CVD, mortality
- Long sleep (>9 hrs): ↑ CVD mortality (may reflect underlying illness)
- OSA: Independent CVD risk factor
- Sleep deprivation → ↑ sympathetic activity, inflammation

*Metabolic:*
- Insufficient sleep → insulin resistance
- Ghrelin ↑, leptin ↓ → increased appetite
- One night of sleep deprivation → impaired glucose tolerance
- OSA → metabolic syndrome association

*Immune:*
- Sleep deprivation → ↓ vaccine response
- ↑ Inflammatory markers (IL-6, CRP)
- ↓ NK cell activity
- Increased infection susceptibility

*Neurological:*
- Glymphatic system: Waste clearance during sleep
- Sleep deprivation → ↑ amyloid-β accumulation
- Cognitive decline association
- Dementia risk with chronic short sleep

**Sleep Disorders Management:**

**Obstructive Sleep Apnea:**

*Diagnosis:*
- Polysomnography: AHI ≥5 with symptoms or ≥15 regardless
- Home sleep apnea testing: For high pretest probability, no comorbidities

*AHI Classification:*
| Severity | AHI (events/hr) |
|----------|-----------------|
| Mild | 5-14 |
| Moderate | 15-29 |
| Severe | ≥30 |

*Treatment:*
- PAP therapy (CPAP, BiPAP) - first line
- Oral appliances (mild-moderate, CPAP-intolerant)
- Position therapy (positional OSA)
- Weight loss (adjunct)
- Surgery (selected cases): UPPP, MMA, hypoglossal nerve stimulation

**Insomnia:**

*Diagnostic Criteria:*
- Sleep initiation or maintenance difficulty
- Adequate opportunity and circumstances for sleep
- Daytime impairment
- ≥3 nights/week for ≥3 months (chronic)

*CBT-I Components:*
1. Sleep restriction
2. Stimulus control
3. Cognitive therapy
4. Sleep hygiene education
5. Relaxation training

*Digital CBT-I:*
- Apps: Sleepio, CBT-i Coach, Somryst (FDA-cleared)
- Effective alternative when in-person unavailable
- Can be adjunct to clinician-delivered

**Circadian Rhythm Sleep-Wake Disorders:**

| Disorder | Characteristics | Treatment |
|----------|-----------------|-----------|
| Delayed Phase | Late sleep/wake; common in teens | Light therapy AM, melatonin PM |
| Advanced Phase | Early sleep/wake; common in elderly | Light therapy PM |
| Shift Work | Work during biological night | Strategic napping, light, melatonin |
| Jet Lag | Travel across time zones | Light exposure based on direction |
| Irregular | No consistent pattern | Structured schedule, light |
| Non-24-Hour | Free-running rhythm; blind individuals | Tasimelteon |

**Restless Legs Syndrome:**

*Diagnostic Criteria:*
1. Urge to move legs, usually with discomfort
2. Worsens at rest
3. Relieved by movement
4. Worse in evening/night
5. Not solely explained by another condition

*Workup:* Iron studies (ferritin <75 suggests iron deficiency)

*Treatment:*
- Iron supplementation (if deficient)
- Dopamine agonists (pramipexole, ropinirole) - risk of augmentation
- Alpha-2-delta ligands (gabapentin, pregabalin) - preferred first-line
- Opioids (severe refractory)`,
      keyTerms: [
        { term: 'AHI (Apnea-Hypopnea Index)', definition: 'Number of apneas and hypopneas per hour of sleep; used to diagnose and grade OSA severity' },
        { term: 'glymphatic system', definition: 'Brain waste clearance system active during sleep; may clear amyloid-β' },
        { term: 'CBT-I', definition: 'Cognitive Behavioral Therapy for Insomnia; first-line treatment for chronic insomnia' },
        { term: 'DORA', definition: 'Dual Orexin Receptor Antagonist; sleep medication targeting wakefulness-promoting orexin system' },
        { term: 'augmentation', definition: 'Worsening of RLS symptoms with dopaminergic treatment over time' },
      ],
      clinicalNotes: 'CPAP adherence >4 hrs/night needed for cardiovascular benefit. CBT-I effective even when concurrent medication. Check ferritin in RLS (treat if <75). Consider circadian disorder in teens with sleep difficulties.',
    },
    5: {
      level: 5,
      summary: 'Sleep health optimization requires integration of circadian medicine, precision sleep phenotyping, digital health technologies, and population-level interventions to address the epidemic of insufficient sleep and its far-reaching health consequences.',
      explanation: `**Precision Sleep Medicine:**

**1. Sleep Phenotyping:**

*Objective Assessment Tools:*
| Tool | Measures | Use Case |
|------|----------|----------|
| Polysomnography | Sleep stages, respiratory events, leg movements | Gold standard diagnosis |
| Actigraphy | Rest-activity patterns over days-weeks | Circadian assessment, treatment monitoring |
| Home Sleep Testing | Airflow, effort, SpO2 | Uncomplicated OSA diagnosis |
| Multiple Sleep Latency Test | Daytime sleepiness, REM latency | Narcolepsy evaluation |
| Maintenance of Wakefulness Test | Ability to stay awake | Occupational fitness |

*Biomarkers of Sleep Disorders:*
- Orexin/hypocretin CSF levels (narcolepsy type 1)
- HLA-DQB1*06:02 (narcolepsy association)
- Ferritin (RLS)
- Inflammatory markers (OSA)

**2. Advanced Chronobiology:**

*Circadian Marker Assessment:*
- Dim light melatonin onset (DLMO): Most reliable phase marker
- Core body temperature nadir: ~2-3 hours before typical wake
- Cortisol awakening response

*Circadian Misalignment Consequences:*
| Condition | Mechanism | Health Impact |
|-----------|-----------|---------------|
| Shift work | Forced wakefulness during biological night | CVD, cancer, metabolic |
| Social jet lag | Weekend-weekday phase shift | Obesity, depression |
| Delayed phase | Chronic phase delay vs. social schedule | Academic, occupational impairment |

*Light as Medicine:*
- Therapeutic dose: 2500-10000 lux
- Timing: Relative to circadian phase (DLMO)
- Duration: 30-120 minutes
- Devices: Light boxes, dawn simulators, blue light glasses

**3. OSA Phenotyping and Precision Treatment:**

*Pathophysiological Traits (PALM):*
- P: Pharyngeal collapsibility (Pcrit)
- A: Arousal threshold
- L: Loop gain (ventilatory control instability)
- M: Muscle responsiveness

*Phenotype-Guided Treatment:*

| Phenotype | Characteristic | Treatment |
|-----------|---------------|-----------|
| Anatomical | High Pcrit | CPAP, surgery, MAD |
| Low arousal threshold | Wakes easily with apneas | Sedative trial |
| High loop gain | Unstable ventilation | Supplemental O2, acetazolamide |
| Poor muscle responsiveness | Ineffective compensation | Hypoglossal stimulation |

**4. Digital Sleep Health:**

*Consumer Sleep Technology:*
- Wearables (Oura, WHOOP, Apple Watch, Fitbit)
- Under-mattress sensors (Withings, Emfit)
- Contactless radar sensors

*Accuracy Assessment:*
| Metric | Consumer Device Performance |
|--------|----------------------------|
| Sleep duration | Moderate-good (±30 min) |
| Sleep efficiency | Moderate |
| Sleep stages | Poor-moderate |
| Wake detection | Moderate |
| REM detection | Poor |
| Sleep apnea | Emerging (SpO2-based) |

*Clinical Integration:*
- Useful for trends, engagement
- Not diagnostic
- May cause orthosomnia (anxiety about sleep data)
- Consider for CBT-I monitoring

**5. Sleep Health Policy and Public Health:**

*Societal Sleep Deprivation:*
- 35% of US adults sleep <7 hours
- Economic cost: $411 billion/year (US)
- Motor vehicle crashes: 100,000+ annually (drowsy driving)
- Medical errors linked to sleep deprivation

*Policy Interventions:*

| Intervention | Evidence |
|--------------|----------|
| Later school start times | Improved teen outcomes |
| Duty hour limits (residents) | Reduced errors (mixed data) |
| Drowsy driving laws | Some states have legislation |
| Daylight saving time elimination | Proposed; health rationale |
| Blue light regulation | Industry self-regulation |

**6. Sleep and Specific Populations:**

*Pregnancy:*
- Increased OSA risk (weight gain, hormonal)
- Insomnia common, especially third trimester
- Short sleep → gestational diabetes, preeclampsia risk
- Treatment modifications needed (position, CPAP)

*Pediatric:*
- Sleep needs higher; chronobiology differs
- Adenotonsillar hypertrophy common cause of OSA
- Behavioral insomnia of childhood
- ADHD-sleep disorder overlap

*Geriatric:*
- Earlier chronotype (phase advance)
- Decreased slow-wave sleep
- Increased sleep fragmentation
- Sleep disorder prevalence high
- Polypharmacy sleep effects

**7. Emerging Research:**

*Glymphatic Clearance:*
- Waste clearance primarily during sleep
- Interstitial space expands (glial shrinkage)
- CSF-interstitial fluid exchange
- Amyloid-β, tau clearance
- Implications: Sleep deprivation → neurodegeneration

*Orexin System Therapeutics:*
- DORAs for insomnia (suvorexant, lemborexant, daridorexant)
- Orexin agonists for narcolepsy (development)
- Selective orexin-2 antagonists (improved side effect profile?)

*Targeted Memory Reactivation:*
- Auditory cues during slow-wave sleep
- Reactivates associated memories
- May enhance consolidation
- Research tool; potential therapeutic application

*Closed-Loop Stimulation:*
- Detect slow oscillations; deliver timed stimulus
- Enhance slow-wave activity
- Improve memory consolidation
- Research stage`,
      keyTerms: [
        { term: 'DLMO (dim light melatonin onset)', definition: 'Time of evening melatonin rise; most reliable circadian phase marker' },
        { term: 'PALM model', definition: 'OSA pathophysiological traits: Pharyngeal collapsibility, Arousal threshold, Loop gain, Muscle responsiveness' },
        { term: 'orthosomnia', definition: 'Preoccupation with achieving perfect sleep data; may worsen sleep anxiety' },
        { term: 'closed-loop stimulation', definition: 'Real-time detection of brain states with timed intervention to modify sleep physiology' },
        { term: 'social jet lag', definition: 'Circadian misalignment between biological preference and social schedule, especially weekday-weekend shift' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- CBT-I should be first-line for chronic insomnia (ACP recommendation)
- Consumer sleep trackers may increase sleep anxiety; use judiciously
- OSA phenotyping may guide treatment beyond CPAP
- Consider DLMO assessment for circadian disorders
- Later school start times improve adolescent sleep health
- Address sleep in preventive care (fifth vital sign concept)
- Screen for sleep disorders in high-risk populations (heart failure, obesity, stroke)`,
    },
  },

  media: [
    {
      id: 'sleep-stages-diagram',
      type: 'diagram',
      filename: 'sleep-architecture-stages.svg',
      title: 'Sleep Architecture and Stages',
      description: 'Visual representation of sleep stages throughout the night',
    },
  ],

  citations: [
    {
      id: 'aasm-sleep-guidelines',
      type: 'website',
      title: 'Sleep Health Resources',
      source: 'American Academy of Sleep Medicine',
      url: 'https://aasm.org/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'nsf-recommendations',
      type: 'website',
      title: 'Sleep Duration Recommendations',
      source: 'National Sleep Foundation',
      url: 'https://www.sleepfoundation.org/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-mental-health-screening', targetType: 'concept', relationship: 'related', label: 'Mental Health Screening' },
    { targetId: 'concept-exercise-recommendations', targetType: 'concept', relationship: 'related', label: 'Exercise Recommendations' },
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular', 'immune'],
    topics: ['preventive medicine', 'lifestyle', 'sleep medicine'],
    keywords: ['sleep hygiene', 'insomnia', 'sleep apnea', 'circadian rhythm', 'CBT-I'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'psychiatry', 'neurology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
