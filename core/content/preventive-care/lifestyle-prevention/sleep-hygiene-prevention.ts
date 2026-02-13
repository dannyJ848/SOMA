/**
 * Sleep Hygiene for Disease Prevention
 *
 * Comprehensive education on sleep health, sleep disorders, and
 * the role of adequate sleep in preventing chronic disease.
 */

import { EducationalContent } from '../../types';

export const SLEEP_HYGIENE_PREVENTION: EducationalContent = {
  id: 'preventive-sleep-hygiene',
  type: 'concept',
  name: 'Sleep Hygiene for Disease Prevention',
  alternateNames: ['Sleep health', 'Healthy sleep habits', 'Sleep optimization', 'Sleep wellness'],

  levels: {
    1: {
      level: 1,
      summary: 'Getting enough good quality sleep helps prevent many health problems and keeps your body and mind working well.',
      explanation: `Sleep is as important as eating healthy and exercising. Most adults need 7-9 hours of sleep each night for good health.

**Why Sleep Matters:**
- Gives your body time to repair itself
- Helps your brain learn and remember
- Keeps your immune system strong
- Helps control weight
- Improves mood and reduces stress
- Lowers risk of accidents
- Reduces risk of many diseases

**How Much Sleep Do You Need?**

*By Age:*
- Adults 18-64: 7-9 hours
- Older adults 65+: 7-8 hours
- Teenagers: 8-10 hours
- School-age children: 9-12 hours

**Signs You Are Not Getting Enough Sleep:**
- Feeling tired during the day
- Trouble concentrating
- Irritability or mood changes
- Falling asleep quickly (within 5 minutes)
- Relying on caffeine to stay awake
- Difficulty waking up

**Sleep Hygiene Tips:**

*Keep a Schedule:*
- Go to bed at the same time every night
- Wake up at the same time every morning
- Even on weekends, try not to vary by more than 1 hour

*Create a Sleep-Friendly Bedroom:*
- Keep it dark (use blackout curtains)
- Keep it quiet (use white noise if needed)
- Keep it cool (65-68 degrees F ideal)
- Comfortable mattress and pillows
- Reserve bed for sleep only

*Before Bed:*
- Avoid screens 1 hour before bed (phones, TV, computers)
- Do not eat large meals close to bedtime
- Avoid caffeine after noon
- Limit alcohol (it disrupts sleep quality)
- Try relaxing activities (reading, gentle stretching)

*During the Day:*
- Get sunlight exposure
- Exercise regularly (but not right before bed)
- Limit naps to 20-30 minutes
- Avoid naps late in the day

**Common Sleep Problems:**

*Insomnia:*
- Trouble falling asleep
- Trouble staying asleep
- Waking up too early

*Sleep Apnea:*
- Loud snoring
- Gasping during sleep
- Very tired during day
- Needs medical evaluation

*Restless Legs:*
- Uncomfortable urge to move legs
- Worse at night
- Relieved by movement

**When to See a Doctor:**
- Trouble sleeping most nights for 3+ months
- Loud snoring or breathing pauses
- Falling asleep during daily activities
- Leg discomfort keeping you awake
- Sleep problems affecting your daily life`,
      keyTerms: [
        { term: 'sleep hygiene', definition: 'Healthy habits and practices that help you get good quality sleep' },
        { term: 'insomnia', definition: 'Difficulty falling asleep or staying asleep' },
        { term: 'sleep apnea', definition: 'A disorder where breathing repeatedly stops and starts during sleep' },
        { term: 'circadian rhythm', definition: 'Your body\'s internal clock that tells you when to sleep and wake' },
      ],
      analogies: [
        'Sleep is like charging your phone - if you do not charge it fully, it will not work well during the day.',
        'Your brain is like a computer that needs to restart and clean up files every night - sleep is that restart process.',
      ],
      examples: [
        'Tom started turning off his phone an hour before bed and kept his bedroom cooler. Within two weeks, he was falling asleep faster and waking more refreshed.',
        'Maria was sleeping only 5 hours a night. After increasing to 7.5 hours, she noticed improved focus at work and fewer afternoon energy crashes.',
      ],
      patientCounselingPoints: [
        'Most adults need 7-9 hours of sleep - individual needs vary',
        'Consistency is key - same sleep and wake times help',
        'Screens before bed make it harder to fall asleep',
        'Caffeine can affect sleep even 6 hours after drinking it',
        'Snoring loudly or gasping at night needs medical evaluation',
      ],
    },
    2: {
      level: 2,
      summary: 'Adequate sleep duration and quality are essential for preventing obesity, diabetes, cardiovascular disease, depression, and accidents, with most adults requiring 7-9 hours of consolidated nighttime sleep.',
      explanation: `Sleep is a fundamental biological necessity, not a luxury. Chronic sleep deprivation and sleep disorders contribute significantly to disease burden.

**Sleep Requirements by Life Stage:**

| Age Group | Recommended Sleep |
|-----------|-------------------|
| Newborns (0-3 mo) | 14-17 hours |
| Infants (4-11 mo) | 12-15 hours |
| Toddlers (1-2 y) | 11-14 hours |
| Preschoolers (3-5 y) | 10-13 hours |
| School-age (6-13 y) | 9-11 hours |
| Teenagers (14-17 y) | 8-10 hours |
| Young adults (18-25 y) | 7-9 hours |
| Adults (26-64 y) | 7-9 hours |
| Older adults (65+ y) | 7-8 hours |

**Health Consequences of Sleep Deprivation:**

*Metabolic Effects:*
- Increased obesity risk (hormonal changes increase hunger)
- Insulin resistance and diabetes risk
- Altered glucose metabolism
- Increased cortisol levels

*Cardiovascular Effects:*
- Hypertension
- Increased heart disease risk
- Stroke risk
- Arrhythmias

*Mental Health:*
- Depression and anxiety
- Cognitive impairment
- Memory problems
- Reduced emotional regulation

*Safety:*
- Motor vehicle accidents (drowsy driving similar to drunk driving)
- Work-related accidents
- Medical errors

**Mechanisms of Sleep-Related Health Effects:**

*Hormonal Changes with Sleep Loss:*
- Ghrelin (hunger hormone) increases
- Leptin (satiety hormone) decreases
- Cortisol (stress hormone) increases
- Growth hormone disrupted
- Insulin sensitivity decreases

*Immune Function:*
- Reduced natural killer cell activity
- Altered cytokine production
- Increased inflammatory markers
- Impaired vaccine response

**Evidence-Based Sleep Hygiene:**

*Sleep Schedule:*
- Fixed wake time most important
- Consistent schedule 7 days/week
- Limit time in bed to actual sleep time plus 30 minutes

*Sleep Environment:*
- Temperature: 60-67F (15-19C)
- Darkness: Melatonin suppression by light
- Quiet: <35 dB ideal
- Comfortable bedding

*Pre-Sleep Routine:*
- Wind-down period: 30-60 minutes
- Relaxation techniques
- Avoid stimulating activities
- Limit fluid intake

*Daytime Factors:*
- Morning light exposure
- Regular exercise (finish 3+ hours before bed)
- Limit caffeine (half-life 5-6 hours)
- Avoid alcohol as sleep aid
- Strategic napping if needed

**Common Sleep Disorders:**

*Insomnia Disorder:*
- Difficulty initiating or maintaining sleep
- Occurs >=3 nights/week for >=3 months
- Daytime impairment
- Most common sleep disorder

*Obstructive Sleep Apnea (OSA):*
- Complete or partial airway obstruction during sleep
- Loud snoring, witnessed apneas, gasping
- Daytime sleepiness
- Risk factors: obesity, male sex, age, anatomy
- Serious cardiovascular consequences if untreated

*Restless Legs Syndrome (RLS):*
- Urge to move legs with uncomfortable sensations
- Worse at rest, relieved by movement
- Evening/night predominance
- Affects sleep onset

*Narcolepsy:*
- Excessive daytime sleepiness
- Cataplexy, sleep paralysis, hypnagogic hallucinations
- Autoimmune destruction of hypocretin neurons`,
      keyTerms: [
        { term: 'sleep deprivation', definition: 'Condition of not getting enough sleep, either in duration or quality' },
        { term: 'sleep architecture', definition: 'The pattern of sleep cycles through different stages (N1, N2, N3, REM)' },
        { term: 'OSA', definition: 'Obstructive sleep apnea; repeated breathing pauses during sleep due to airway collapse' },
        { term: 'melatonin', definition: 'Hormone produced by pineal gland that regulates sleep-wake cycle' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed that is spent sleeping' },
      ],
      analogies: [
        'Sleep debt is like credit card debt - the interest compounds and eventually you have to pay it back with health consequences.',
        'Your circadian rhythm is like an orchestra conductor - it coordinates all your body\'s systems to work in harmony.',
      ],
      examples: [
        'Studies show people sleeping less than 6 hours per night have 48% increased risk of obesity compared to those sleeping 7-8 hours.',
        'Treatment of sleep apnea with CPAP has been shown to reduce blood pressure and cardiovascular event risk.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep medicine integrates chronobiology, neurophysiology, and clinical medicine to address sleep disorders and their cardiovascular, metabolic, and neuropsychiatric consequences while applying cognitive behavioral and pharmacological interventions.',
      explanation: `**Sleep Physiology and Architecture:**

*Sleep Stages:*
- NREM Stage 1: Light sleep, 5% of night
- NREM Stage 2: True sleep onset, 45-55%
- NREM Stage 3: Slow-wave sleep (SWS), deep restorative sleep, 15-20%
- REM: Rapid eye movement, dreaming, memory consolidation, 20-25%
- Cycle every 90-120 minutes

*Neurobiology:*
- Sleep-wake regulation: Homeostatic (Process S) and circadian (Process C)
- Hypothalamic control: VLPO (sleep-promoting), TMN (wake-promoting)
- Neurotransmitters: GABA, galanin (sleep); orexin, histamine, dopamine (wake)
- Circadian pacemaker: Suprachiasmatic nucleus (SCN)

**Epidemiology of Sleep Disorders:**

*Insomnia:*
- Prevalence: 10-30% general population
- Chronic: 10%
- Higher in women, elderly, shift workers
- Comorbid with psychiatric conditions

*Obstructive Sleep Apnea:*
- Prevalence: 10-30% adults (mild to severe)
- Moderate-severe: 10-17% men, 3-6% women
- 80% undiagnosed
- Increasing with obesity epidemic

**Clinical Consequences:**

*Cardiovascular Disease:*
- Mechanisms: Sympathetic activation, oxidative stress, inflammation
- OSA associated with:
  - Hypertension (strongest evidence)
  - Coronary artery disease
  - Heart failure
  - Atrial fibrillation
  - Stroke
- CPAP treatment reduces BP and may reduce events

*Metabolic Dysfunction:*
- Sleep restriction (5 hours/night x1 week):
  - 30% reduction in insulin sensitivity
  - Increased evening appetite
  - Preference for high-calorie foods
- Mechanisms: Altered leptin/ghrelin, increased cortisol

*Neurocognitive Effects:*
- Sleep and memory consolidation
- Attention and executive function impairment
- Alzheimer disease connection (beta-amyloid clearance during sleep)
- Microsleeps and attention lapses

**Insomnia Treatment:**

*Cognitive Behavioral Therapy for Insomnia (CBT-I):*
- First-line treatment (superior to medications)
- Components:
  - Stimulus control
  - Sleep restriction
  - Cognitive restructuring
  - Relaxation training
  - Sleep hygiene education
- 70-80% response rate
- Digital CBT-I effective

*Pharmacotherapy:*
| Class | Examples | Considerations |
|-------|----------|----------------|
| Benzodiazepines | Temazepam | Tolerance, dependence risk |
| Non-BZ hypnotics | Zolpidem, eszopiclone | Complex sleep behaviors |
| Melatonin agonists | Ramelteon | No abuse potential |
| Orexin antagonists | Suvorexant | Newer class |
| Antihistamines | Diphenhydramine | Anticholinergic, not recommended |

**OSA Diagnosis and Treatment:**

*Screening:*
- STOP-BANG questionnaire
- Epworth Sleepiness Scale
- Clinical suspicion (snoring, witnessed apneas)

*Diagnosis:*
- Polysomnography (gold standard)
- Home sleep apnea testing (selective cases)
- AHI (apnea-hypopnea index) severity

*Treatment:*
- CPAP: First-line for moderate-severe OSA
- Oral appliances: Mild-moderate or CPAP-intolerant
- Positional therapy: Position-dependent OSA
- Weight loss: Effective, especially with bariatric surgery
- Surgery: Selective cases
- Hypoglossal nerve stimulation: CPAP-intolerant

**Circadian Rhythm Disorders:**

*Delayed Sleep Phase:*
- Common in adolescents
- Chronotherapy or light therapy
- Melatonin timing important

*Shift Work Disorder:*
- Affects 10-20% of night workers
- Light exposure management
- Strategic napping
- Melatonin timing
- Modafinil/armodafinil approved

**Sleep in Special Populations:**

*Pregnancy:*
- High prevalence of OSA and RLS
- Sleep position recommendations
- Treatment considerations for fetus

*Children:*
- Different presentation of OSA (behavioral, not sleepy)
- Tonsil/adenoid hypertrophy common cause
- Sleep essential for development

*Older Adults:*
- Sleep architecture changes (less SWS)
- Increased sleep fragmentation
- Higher insomnia prevalence
- Medication sensitivity`,
      keyTerms: [
        { term: 'AHI', definition: 'Apnea-hypopnea index; number of breathing events per hour, measures OSA severity' },
        { term: 'CBT-I', definition: 'Cognitive behavioral therapy for insomnia; first-line nonpharmacological treatment' },
        { term: 'CPAP', definition: 'Continuous positive airway pressure; primary treatment for OSA' },
        { term: 'SWS', definition: 'Slow-wave sleep; deep NREM sleep stage important for restoration' },
        { term: 'suprachiasmatic nucleus', definition: 'SCN; hypothalamic region serving as master circadian pacemaker' },
      ],
      clinicalNotes: 'Screen for sleep disorders in patients with obesity, hypertension, or daytime sleepiness. CBT-I is first-line for chronic insomnia. CPAP adherence is crucial for OSA treatment - address barriers. Consider sleep study for resistant hypertension. Assess medication effects on sleep.',
    },
    4: {
      level: 4,
      summary: 'Advanced sleep medicine addresses complex cases including treatment-resistant insomnia, complex sleep apnea, comorbid sleep and psychiatric disorders, while implementing polysomnography interpretation and multidisciplinary care models.',
      explanation: `**Advanced Polysomnography:**

*Recording Channels:*
- EEG (C3, C4, O1, O2, F3, F4): Sleep staging
- EOG: Eye movements (REM detection)
- EMG: Chin, legs (PLMS, REM without atonia)
- ECG: Rhythm monitoring
- Airflow: Thermistor, pressure transducer
- Respiratory effort: Chest/abdomen belts
- Oxygen saturation: Pulse oximetry
- Position: Body position sensor
- Sound: Snoring microphone

*Sleep Scoring:*
- 30-second epochs
- AASM scoring manual rules
- Sleep stages, arousals, respiratory events
- Periodic limb movements
- Cardiac analysis

*Respiratory Event Definitions:*
- Apnea: >=90% airflow reduction for >=10 seconds
- Hypopnea: >=30% reduction with >=3% desaturation or arousal
- RERA: Respiratory effort-related arousal
- AHI = (apneas + hypopneas) x 60 / total sleep time

**Complex Sleep Disorders:**

*Central Sleep Apnea:*
- Lack of respiratory effort
- Types: Idiopathic, Cheyne-Stokes, high-altitude, drug-induced
- Different from OSA pathophysiology
- Treatment: ASV, oxygen, reduce opioids

*Treatment-Emergent Central Apnea:*
- Central apneas with CPAP initiation
- Usually resolves over weeks
- May need adaptive servo-ventilation

*Sleep-Related Hypoventilation:*
- Increased PaCO2 during sleep
- Obesity hypoventilation syndrome
- Neuromuscular disorders
- COPD overlap
- May require BiPAP

*REM Sleep Behavior Disorder (RBD):*
- Loss of REM atonia
- Dream enactment behavior
- Synucleinopathy marker (alpha-synuclein)
- Often precedes Parkinson disease
- Treatment: Melatonin, clonazepam

**Insomnia - Advanced Concepts:**

*Psychophysiological Insomnia:*
- Conditioned arousal to sleep environment
- Hyperarousal state
- Paradoxical insomnia (sleep state misperception)
- CBT-I particularly effective

*Comorbid Insomnia:*
- Depression: Sleep disruption common
- Anxiety: Racing thoughts prevent sleep
- PTSD: Nightmares, hypervigilance
- Chronic pain: Discomfort disrupts sleep
- Treat underlying condition + sleep-specific therapy

*Medication-Induced Insomnia:*
- Stimulants, steroids, beta-agonists
- SSRIs (especially activating ones)
- Diuretics (nocturia)
- Review and adjust timing

**Pediatric Sleep Medicine:**

*Pediatric OSA:*
- Different from adults (adenotonsillar hypertrophy vs obesity)
- Presentation: Behavioral problems, ADHD symptoms, growth failure
- Polysomnography criteria different
- Adenotonsillectomy first-line

*Pediatric Insomnia:*
- Behavioral insomnia of childhood
- Limit-setting sleep disorder
- Sleep-onset association disorder
- Behavioral interventions primary

*Sudden Infant Death Syndrome (SIDS):*
- Safe sleep recommendations
- Back to sleep
- Firm sleep surface
- No loose bedding
- Room-sharing without bed-sharing

**Sleep in Medical Conditions:**

*Heart Failure:*
- High prevalence of sleep-disordered breathing
- Cheyne-Stokes respiration
- Central and obstructive apneas
- Treat sleep disorder improves outcomes

*Chronic Kidney Disease:*
- High OSA prevalence
- Restless legs common
- Sleep disruption from dialysis
- Improve sleep improves quality of life

*Neurodegenerative Diseases:*
- Parkinson disease: RBD, daytime sleepiness
- Alzheimer disease: Sundowning, sleep fragmentation
- Multiple sclerosis: Fatigue, RLS

**Pharmacological Advances:**

*Dual Orexin Receptor Antagonists (DORAs):*
- Suvorexant, lemborexant, daridorexant
- Block wake-promoting orexin system
- No respiratory depression
- Lower abuse potential
- Next-generation hypnotics

*Wake-Promoting Agents:*
- Modafinil, armodafinil: Narcolepsy, shift work
- Solriamfetol: Dual-acting dopamine/norepinephrine reuptake inhibitor
- Pitolisant: H3 inverse agonist

**Multidisciplinary Sleep Centers:**

*Team Composition:*
- Sleep medicine physicians (pulmonary, neurology)
- Sleep technologists
- Nurse practitioners/physician assistants
- Dentists (oral appliances)
- Surgeons (ENT, maxillofacial)
- Psychologists (CBT-I)
- Bariatric specialists

*Quality Metrics:*
- CPAP adherence rates
- Diagnostic testing wait times
- Treatment outcomes
- Patient satisfaction
- Accreditations (AASM)`,
      keyTerms: [
        { term: 'ASV', definition: 'Adaptive servo-ventilation; ventilator treating central sleep apnea by varying pressure support' },
        { term: 'RERA', definition: 'Respiratory effort-related arousal; breathing disturbance causing arousal but not meeting apnea/hypopnea criteria' },
        { term: 'PLMS', definition: 'Periodic limb movements during sleep; repetitive leg movements causing sleep disruption' },
        { term: 'synucleinopathy', definition: 'Neurodegenerative disease with alpha-synuclein protein accumulation; includes Parkinson disease, Lewy body dementia' },
        { term: 'BiPAP', definition: 'Bilevel positive airway pressure; delivers different inspiratory and expiratory pressures' },
      ],
      clinicalNotes: 'Recognize complex sleep disorders requiring specialized care. Understand polysomnography interpretation basics. Address sleep issues in chronic disease management. Coordinate multidisciplinary care when needed. Monitor for neurodegenerative disease in RBD patients.',
    },
    5: {
      level: 5,
      summary: 'Expert sleep medicine practice integrates emerging chronobiology research, precision medicine approaches for sleep disorders, population sleep health initiatives, and leadership in healthcare system implementation while addressing health disparities in sleep care.',
      explanation: `**Chronobiology Frontiers:**

*Molecular Clock Mechanisms:*
- Clock genes: CLOCK, BMAL1, PER, CRY
- Transcription-translation feedback loops
- Peripheral clocks in all tissues
- Entrainment by light, food, temperature
- Chronodisruption and disease risk

*Chronotherapy:*
- Timing medications to circadian rhythms
- Cancer chemotherapy timing (chronomodulated)
- Cardiovascular medication timing
- Sleep medication timing
- Emerging clinical application

*Social Jetlag:*
- Misalignment between social and biological time
- Weekend catch-up sleep
- Metabolic consequences
- Light exposure management

**Precision Sleep Medicine:**

*Genetics of Sleep:*
| Gene/Variant | Phenotype |
|--------------|-----------|
| DEC2, ADRB1 | Short sleepers |
| HLA DQB1*06:02 | Narcolepsy risk |
| PER3 VNTR | Sleep timing preference |
| CLOCK variants | Circadian phenotypes |

*Personalized Treatment:*
- Chronotype-based interventions
- Genetic-guided medication selection
- Individual sleep need variation
- Personalized sleep hygiene

*Phenotyping Approaches:*
- Multiple sleep latency testing
- Actigraphy patterns
- Wearable device data
- Machine learning classification

**Health Disparities in Sleep:**

*Disparities in Sleep Health:*
- Racial/ethnic differences in sleep duration and quality
- Lower sleep efficiency in Black Americans
- Higher OSA prevalence in certain groups
- Differential access to sleep care

*Social Determinants:*
- Neighborhood noise and light pollution
- Shift work patterns
- Stress and discrimination
- Healthcare access barriers
- Environmental factors

*Equity-Focused Interventions:*
- Community sleep health programs
- Accessible sleep apnea treatment
- Telemedicine for rural areas
- Culturally tailored interventions
- Addressing structural factors

**Population Sleep Health:**

*Public Health Approaches:*
- School start time changes (adolescent sleep)
- Daylight saving time considerations
- Workplace policies
- Transportation safety (drowsy driving)
- Urban planning (lighting, noise)

*Policy Interventions:*
- Delayed school start times for teens
- Drowsy driving laws
- Mandatory rest for commercial drivers
- Shift work regulations
- Sleep health education

*Digital Public Health:*
- Sleep tracking at population level
- Big data approaches
- Social media and sleep
- Technology for sleep improvement

**Healthcare System Leadership:**

*Sleep Medicine Service Development:*
- Center accreditation (AASM)
- Telemedicine integration
- Home sleep testing programs
- Chronic care models for OSA
- Insomnia pathway development

*Integration with Primary Care:*
- Sleep education in primary care
- Screening protocols
- Referral pathways
- Co-management models
- EHR integration

*Quality Improvement:*
- CPAP adherence optimization
- Diagnostic efficiency
- Access to care
- Patient-reported outcomes
- Cost-effectiveness

**Emerging Research:**

*Sleep and Neurodegeneration:*
- Glymphatic system clearance during sleep
- Beta-amyloid and tau accumulation
- Sleep as modifiable risk factor
- Early intervention potential
- Sleep as biomarker

*Wearable Devices and AI:*
- Consumer sleep trackers
- Algorithm development
- Clinical validation
- Integration with care
- Real-world evidence

*Novel Therapeutics:*
- Hypocretin/orexin-based therapies
- Gene therapy for narcolepsy
- Circadian modulators
- Targeted hypnotics
- Wake-promoting agents

**Clinical Excellence Framework:**

*Individual Level:*
- Comprehensive sleep evaluation
- Personalized treatment plan
- Multidisciplinary coordination
- Long-term follow-up
- Address comorbidities

*System Level:*
- Sleep medicine program development
- Primary care integration
- Quality improvement initiatives
- Health equity focus
- Research participation

*Population Level:*
- Public health advocacy
- Policy engagement
- Community education
- Professional education
- Research translation

**Future Directions:**

*Research Priorities:*
1. Sleep and dementia prevention
2. Precision sleep medicine
3. Health equity in sleep
4. Digital therapeutics
5. Population-level interventions
6. Sleep and immune function
7. Chronotherapy optimization

*Clinical Practice Evolution:*
- Integration of wearables
- AI-assisted diagnosis
- Telemedicine expansion
- Prevention focus
- Precision approaches`,
      keyTerms: [
        { term: 'glymphatic system', definition: 'Waste clearance system in brain active during sleep; clears beta-amyloid and other metabolites' },
        { term: 'chronotype', definition: 'Individual preference for morning or evening activity; biological tendency toward early or late sleep' },
        { term: 'social jetlag', definition: 'Circadian misalignment caused by discrepancy between work/social schedules and biological clock' },
        { term: 'chronomodulated chemotherapy', definition: 'Timing chemotherapy administration to circadian rhythms to improve efficacy and reduce toxicity' },
        { term: 'chronodisruption', definition: 'Disruption of normal circadian rhythms, associated with increased disease risk' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Integrate chronobiology knowledge into clinical practice
- Apply precision medicine approaches when possible
- Lead sleep health initiatives in your system
- Address health disparities in sleep care
- Stay current on wearable device evidence
- Understand glymphatic system and neurodegeneration
- Advocate for population sleep health policies
- Develop multidisciplinary sleep programs
- Engage in sleep medicine research
- Mentor trainees in sleep medicine`,
    },
  },

  media: [
    {
      id: 'sleep-architecture-diagram',
      type: 'diagram',
      filename: 'sleep-architecture-stages.svg',
      title: 'Sleep Architecture and Stages',
      description: 'Diagram showing progression through NREM and REM sleep stages across a typical night',
    },
  ],

  citations: [
    {
      id: 'ncsd-sleep-duration',
      type: 'website',
      title: 'How Much Sleep Do I Need?',
      source: 'CDC National Center for Chronic Disease Prevention and Health Promotion',
      url: 'https://www.cdc.gov/sleep/about_sleep/how_much_sleep.html',
      accessedDate: '2025-01-28',
    },
    {
      id: 'cappuccio-2010',
      type: 'article',
      title: 'Sleep duration and all-cause mortality: a systematic review and meta-analysis of prospective studies',
      authors: ['Cappuccio FP', 'D\'Elia L', 'Strazzullo P', 'Miller MA'],
      source: 'Sleep',
      accessedDate: '2025-01-28',
    },
    {
      id: 'qaseem-2016',
      type: 'article',
      title: 'Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline From the American College of Physicians',
      authors: ['Qaseem A', 'Kansagara D', 'Forciea MA', 'et al.'],
      source: 'Annals of Internal Medicine',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-physical-activity', targetType: 'concept', relationship: 'related', label: 'Physical Activity' },
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk' },
  ],

  tags: {
    systems: ['preventive-care', 'neurological'],
    topics: ['preventive medicine', 'sleep medicine', 'chronobiology'],
    keywords: ['sleep hygiene', 'insomnia', 'sleep apnea', 'circadian rhythm', 'sleep disorders', 'CBT-I'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'psychiatry'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
