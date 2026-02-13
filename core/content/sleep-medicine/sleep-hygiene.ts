/**
 * Sleep Hygiene - Comprehensive Educational Content
 *
 * Covers behavioral and environmental practices that promote healthy sleep,
 * including stimulus control, sleep scheduling, and environmental optimization.
 */

import { EducationalContent } from '../types';

export const sleepHygiene: EducationalContent = {
  id: 'concept-sleep-hygiene',
  type: 'concept',
  name: 'Sleep Hygiene',
  alternateNames: ['Sleep Health Practices', 'Healthy Sleep Habits', 'Sleep Optimization'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep hygiene means the good habits and routines that help you get a great night\'s sleep every night.',
      explanation: `Just like brushing your teeth keeps your mouth healthy, following good sleep habits keeps your sleep healthy! These habits are called "sleep hygiene."

**Good Sleep Habits:**

*Your Bedroom:*
- Keep your room dark (use curtains or an eye mask)
- Keep your room cool (around 65-68 degrees)
- Keep your room quiet (or use white noise)
- Use your bed only for sleeping, not for watching TV or playing games

*Before Bed:*
- Go to bed at the same time every night
- Stop using phones, tablets, and computers 1 hour before bed (the light tricks your brain into thinking it's daytime)
- Do something relaxing like reading or taking a warm bath
- Avoid eating big meals close to bedtime

*During the Day:*
- Get outside in the sunlight, especially in the morning
- Exercise, but not too close to bedtime
- Limit drinks with caffeine (like soda) especially in the afternoon
- Avoid naps, or keep them short (20-30 minutes)

**Why These Habits Help:**
- Regular bedtimes help your body know when to feel sleepy
- Darkness tells your brain to make the sleep hormone melatonin
- Cool temperatures help your body fall asleep
- Exercise makes you healthier and more ready for sleep

Following these habits every day is the best way to sleep well every night!`,
      keyTerms: [
        { term: 'sleep hygiene', definition: 'Good habits that help you sleep well' },
        { term: 'melatonin', definition: 'A natural chemical your brain makes when it\'s dark to help you feel sleepy' },
        { term: 'caffeine', definition: 'A substance in coffee, tea, and some sodas that keeps you awake' },
        { term: 'routine', definition: 'Doing the same things at the same times each day' },
      ],
      analogies: [
        'Sleep hygiene is like training for a sport - you need to practice good habits every day to perform your best.',
        'Your bedroom should be like a cave - dark, cool, and quiet, just like where early humans slept.',
      ],
      examples: [
        'If you look at your phone right before bed, the bright light can make it hard to fall asleep.',
        'Going to bed at 10 PM every night helps your body automatically feel sleepy at that time.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep hygiene encompasses behavioral practices and environmental modifications that optimize sleep quality and duration by aligning with the body\'s natural circadian rhythms and sleep drive.',
      explanation: `Sleep hygiene refers to a collection of evidence-based practices that promote healthy sleep. These recommendations address both behavioral habits and environmental factors.

**Core Sleep Hygiene Principles:**

**1. Maintain a Consistent Sleep Schedule**
- Go to bed and wake up at the same time daily (including weekends)
- Helps regulate your internal body clock (circadian rhythm)
- "Social jet lag" from inconsistent schedules disrupts sleep quality
- Adults should aim for 7-9 hours of sleep opportunity

**2. Optimize Your Sleep Environment**
*Temperature:*
- Ideal bedroom temperature: 60-67°F (15-19°C)
- Core body temperature naturally drops during sleep
- Cool environment facilitates this temperature decrease

*Darkness:*
- Complete darkness is ideal
- Even dim light suppresses melatonin production
- Use blackout curtains, remove LED lights
- If needed, use a sleep mask

*Sound:*
- Quiet environment or consistent white noise
- Sudden sounds cause arousals even without full awakening
- Consider earplugs or a white noise machine

*Bed and Mattress:*
- Comfortable, supportive mattress and pillows
- Reserve bed for sleep and intimacy only (stimulus control)

**3. Manage Light Exposure**
*Morning:*
- Bright light exposure (especially sunlight) upon waking
- Helps set circadian rhythm and promotes daytime alertness
- Aim for 30+ minutes of bright light in the morning

*Evening:*
- Reduce bright light exposure 1-2 hours before bed
- Blue light from screens is particularly disruptive
- Use dim, warm lighting in the evening

**4. Regulate Diet and Substances**
*Caffeine:*
- Half-life of 5-7 hours (varies by person)
- Avoid after noon or early afternoon
- Sources: coffee, tea, soda, energy drinks, chocolate

*Alcohol:*
- May help you fall asleep initially
- Disrupts sleep architecture (reduces REM, causes fragmentation)
- Avoid within 3 hours of bedtime

*Nicotine:*
- Stimulant that delays sleep onset
- Withdrawal during night causes awakenings

*Food:*
- Avoid heavy meals within 2-3 hours of bedtime
- Light snacks are okay
- Avoid spicy or acidic foods that cause reflux

**5. Establish a Pre-Sleep Routine**
- 30-60 minute wind-down period
- Relaxing activities: reading, gentle stretching, warm bath
- Signal to body that sleep time is approaching
- Avoid stimulating activities, work, or emotional discussions

**6. Exercise Regularly**
- Regular exercise improves sleep quality
- Avoid vigorous exercise within 3-4 hours of bedtime
- Morning or afternoon exercise is ideal`,
      keyTerms: [
        { term: 'circadian rhythm', definition: 'The body\'s internal 24-hour clock that regulates sleep-wake cycles', pronunciation: 'sir-KAY-dee-an' },
        { term: 'stimulus control', definition: 'Associating the bed and bedroom only with sleep to strengthen the sleep response' },
        { term: 'social jet lag', definition: 'Disruption from different sleep schedules on workdays versus weekends' },
        { term: 'blue light', definition: 'Short-wavelength light from screens that suppresses melatonin and delays sleep' },
        { term: 'half-life', definition: 'Time it takes for half of a substance to be eliminated from the body' },
      ],
      analogies: [
        'Your circadian rhythm is like an internal clock - keeping a consistent schedule helps it run accurately, while irregular schedules make it malfunction.',
        'Blue light at night is like drinking coffee before bed - it signals your brain to stay alert when you should be winding down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep hygiene interventions target circadian entrainment, homeostatic sleep pressure, and conditioned arousal, forming the foundation for behavioral treatment of sleep disorders and primary prevention of sleep disturbances.',
      explanation: `## Evidence-Based Sleep Hygiene Recommendations

Sleep hygiene education addresses modifiable factors affecting sleep through three mechanisms:
1. **Circadian entrainment** (light exposure, sleep schedule)
2. **Homeostatic regulation** (sleep restriction, activity timing)
3. **Conditioned arousal** (stimulus control, sleep environment)

### Detailed Recommendations

**Circadian-Targeted Interventions:**

*Light Exposure Management:*
| Timing | Recommendation | Mechanism |
|--------|---------------|-----------|
| Morning | Bright light (10,000 lux) 30 min | Phase advance, alertness |
| Daytime | Natural light exposure | Entrainment, amplitude |
| Evening | Dim light (<50 lux) 2h before bed | Melatonin onset |
| Night | Complete darkness (<1 lux) | Sleep maintenance |

*Schedule Regularity:*
- Social Jet Lag Index (SJI) = |midpoint sleep weekday - midpoint sleep weekend|
- SJI >2 hours associated with metabolic syndrome, depression
- Even weekend "catch-up sleep" doesn't fully reverse effects

**Homeostatic-Targeted Interventions:**

*Sleep Restriction (Advanced):*
- Limit time in bed to match actual sleep time
- Creates mild sleep deprivation → increased sleep drive
- Improves sleep efficiency
- Core component of CBT-I

*Exercise Effects:*
- Acute exercise increases slow-wave sleep that night
- Regular exercise reduces sleep latency, improves efficiency
- Mechanisms: adenosine accumulation, thermoregulation, anxiety reduction
- Timing: Morning/afternoon exercise optimal; evening exercise may delay sleep onset

**Arousal-Targeted Interventions:**

*Stimulus Control Principles:*
1. Use bed only for sleep and sex
2. Go to bed only when sleepy
3. If unable to sleep within ~20 minutes, leave bed
4. Return to bed only when sleepy
5. Maintain consistent wake time regardless of sleep amount
6. No daytime napping (or limit to <30 min before 3 PM)

*Environment Optimization:*
\`\`\`
Temperature: 60-67°F (15.5-19.5°C)
  - Core body temperature nadir occurs during N3
  - Warm extremities facilitate core cooling (socks may help)

Humidity: 30-50%
  - Low humidity → airway dryness
  - High humidity → discomfort, dust mites

Noise: <30 dB or consistent white noise
  - Noise causes microarousals without conscious awakening
  - White/pink noise masks environmental sounds

Air Quality: Well-ventilated, filtered
  - CO2 buildup impairs sleep quality
  - Allergens worsen sleep in sensitized individuals
\`\`\`

### Substance Effects on Sleep

| Substance | Effect | Recommendation |
|-----------|--------|----------------|
| Caffeine | Adenosine receptor antagonist; ↑ latency, ↓ TST, ↓ N3 | Avoid 6+ hours before bed |
| Alcohol | Initial sedation; ↓ REM, ↑ fragmentation, ↑ SDB | Avoid 3-4 hours before bed |
| Nicotine | Stimulant; ↑ latency; withdrawal causes night awakenings | Cessation ideal |
| Cannabis | Variable; may ↓ latency but ↓ REM, tolerance develops | Not recommended |
| Heavy meals | ↑ GERD, ↑ arousal from digestion | Avoid 2-3 hours before bed |

### Limitations of Sleep Hygiene Education Alone

Sleep hygiene as **sole intervention** has limited efficacy:
- Insufficient for chronic insomnia (CBT-I required)
- Provides education but not behavioral change skills
- Effect size smaller than structured behavioral interventions

**Appropriate uses:**
- Primary prevention in good sleepers
- Adjunct to CBT-I or other treatments
- Initial intervention in acute insomnia
- Patient education component`,
      keyTerms: [
        { term: 'sleep restriction', definition: 'Limiting time in bed to increase sleep efficiency; core component of CBT-I' },
        { term: 'stimulus control', definition: 'Behavioral technique to re-associate bed with sleep by eliminating wakeful activities in bed' },
        { term: 'social jet lag', definition: 'Circadian misalignment from different sleep schedules on work versus free days' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent asleep (normal >85%)' },
        { term: 'microarousal', definition: 'Brief EEG arousal not resulting in conscious awakening but fragmenting sleep' },
        { term: 'CBT-I', definition: 'Cognitive Behavioral Therapy for Insomnia; structured intervention more effective than sleep hygiene alone' },
      ],
      clinicalNotes: 'Sleep hygiene education alone has modest effect sizes and is insufficient for chronic insomnia disorder, which requires CBT-I or pharmacotherapy. However, sleep hygiene principles are essential components of comprehensive sleep disorder treatment and should be reviewed with all patients. Screen time restrictions are particularly important for adolescents, who show heightened melatonin suppression from blue light.',
    },
    4: {
      level: 4,
      summary: 'Sleep hygiene recommendations are grounded in circadian biology, sleep homeostasis, and conditioning theory, though evidence for isolated sleep hygiene interventions is limited compared to multicomponent behavioral therapies like CBT-I.',
      explanation: `## Mechanisms and Evidence for Sleep Hygiene Components

### Light and Circadian Phase

**Photic Entrainment:**
- Light detected by intrinsically photosensitive retinal ganglion cells (ipRGCs)
- Melanopsin-mediated signaling to SCN
- Phase Response Curve (PRC):
  - Light in biological evening/early night → phase delay
  - Light in late night/early morning → phase advance
  - Light during biological day → minimal effect

**Blue Light Sensitivity:**
- Melanopsin most sensitive to ~480 nm (blue) wavelength
- Screen devices emit significant blue light
- Blue-blocking glasses: Some evidence for reduced melatonin suppression
- Night shift modes: Modest melatonin preservation, may be insufficient

**Clinical Light Therapy Protocols:**
| Condition | Light Timing | Intensity | Duration |
|-----------|--------------|-----------|----------|
| Delayed phase | Upon awakening | 10,000 lux | 30-60 min |
| Advanced phase | Late afternoon | 2,500-10,000 lux | 1-2 hours |
| Non-24h (blind) | Fixed time + melatonin | — | — |
| Depression | Morning | 10,000 lux | 30 min |

### Temperature Regulation

**Thermoregulation and Sleep:**
\`\`\`
Normal pattern:
Evening: Core temp drops (distal vasodilation)
↓
Sleep onset: Facilitated by temperature decline
↓
N3 sleep: Temperature nadir (1-2°C below wake)
↓
Pre-awakening: Temperature rises
\`\`\`

**Interventions:**
- Cool bedroom (60-67°F) allows natural core cooling
- Warm bath 1-2h before bed: Initial temp increase → subsequent drop facilitates sleep
- Bed socks: Peripheral vasodilation aids core cooling
- Cooling mattresses/pads: Under investigation

### Caffeine Pharmacology

**Mechanism:**
- Non-selective adenosine receptor (A1, A2A) antagonist
- Blocks sleep-promoting effects of adenosine accumulation
- Half-life: 3-7 hours (CYP1A2 dependent)
  - Slow metabolizers: 8-10 hours
  - Pregnancy: 11+ hours
  - Smoking: 3-4 hours (CYP1A2 induction)

**Tolerance and Withdrawal:**
- Tolerance develops to alerting effects
- Withdrawal (12-24h after last dose): headache, fatigue, irritability
- Regular users may experience "rebound" sleepiness without caffeine

### Alcohol Effects

**Acute Effects on Sleep Architecture:**
\`\`\`
First half of night:
- Shortened sleep latency
- Increased N3 (deceptively "deep" sleep)
- Suppressed REM

Second half of night (as BAC falls):
- REM rebound
- Increased awakenings
- Autonomic arousal (sweating, tachycardia)
- Increased sleep-disordered breathing
\`\`\`

**Chronic Use:**
- Tolerance to sleep-inducing effects
- Persistent REM suppression
- Severe sleep disruption in withdrawal

### Evidence Assessment

**Meta-Analytic Findings:**

*Sleep Hygiene Education (SHE) Alone:*
- Small effect sizes for insomnia (g = 0.35)
- Less effective than CBT-I (g = 0.98)
- Insufficient as monotherapy for chronic insomnia
- AASM rates as "guideline against" for chronic insomnia

*Individual Components:*
| Component | Evidence Level | Notes |
|-----------|---------------|-------|
| Stimulus control | Strong (Level A) | Core CBT-I component |
| Sleep restriction | Strong (Level A) | Core CBT-I component |
| Consistent schedule | Moderate | Observational data |
| Light management | Moderate-Strong | For circadian disorders |
| Exercise | Moderate | Meta-analyses positive |
| Caffeine restriction | Limited | Observational mostly |
| Alcohol restriction | Moderate | Clear mechanism |

### Clinical Application

**Role of Sleep Hygiene in Treatment:**

*Appropriate:*
- Universal prevention / health promotion
- Acute/adjustment insomnia
- Adjunct to specific treatments
- Patient education foundation

*Insufficient:*
- Chronic insomnia disorder (need CBT-I)
- Primary sleep disorders (OSA, RLS, narcolepsy)
- Circadian disorders (need chronotherapy)

**Integration with CBT-I:**
\`\`\`
CBT-I Components:
1. Sleep restriction therapy
2. Stimulus control therapy
3. Cognitive therapy (address sleep-related cognitions)
4. Relaxation training
5. Sleep hygiene education

Sleep hygiene provides behavioral framework
But active behavioral interventions drive efficacy
\`\`\``,
      keyTerms: [
        { term: 'phase response curve', definition: 'Graph showing how the timing of light exposure shifts circadian phase; light before temperature minimum delays, after advances' },
        { term: 'CYP1A2', definition: 'Cytochrome P450 enzyme primarily responsible for caffeine metabolism; polymorphisms affect half-life' },
        { term: 'REM rebound', definition: 'Increased REM sleep following REM deprivation, as occurs with alcohol withdrawal' },
        { term: 'chronotherapy', definition: 'Treatment of circadian disorders using timed light exposure, melatonin, and schedule manipulation' },
        { term: 'distal vasodilation', definition: 'Increased blood flow to extremities that facilitates core body cooling and sleep onset' },
      ],
      clinicalNotes: 'AASM Clinical Practice Guidelines recommend against sleep hygiene education as sole treatment for chronic insomnia. CBT-I is first-line treatment. However, sleep hygiene review is essential for all sleep disorder patients. Key points: (1) Caffeine half-life is highly variable - some patients need to avoid caffeine after noon. (2) Alcohol is a common unrecognized cause of sleep fragmentation. (3) Light management should be individualized based on chronotype and work schedule.',
    },
    5: {
      level: 5,
      summary: 'Sleep hygiene represents a heterogeneous collection of interventions with variable evidence bases, best understood as environmental and behavioral modifications that support circadian entrainment and sleep homeostasis, though individual components require targeted application based on patient presentation and underlying pathophysiology.',
      explanation: `## Precision Sleep Hygiene: Individualized Approaches

### Chronotype-Tailored Interventions

**Chronotype Assessment:**
- Munich Chronotype Questionnaire (MCTQ): MSFsc (midpoint sleep on free days, sleep-corrected)
- Morningness-Eveningness Questionnaire (MEQ)
- Dim Light Melatonin Onset (DLMO): Gold standard biomarker

**Phase-Specific Recommendations:**

| Chronotype | Light Timing | Melatonin Timing | Exercise Timing |
|------------|--------------|------------------|-----------------|
| Evening type | Bright light immediately on waking; blue-blocking 3h before bed | 5h before desired bedtime | Morning (helps advance) |
| Morning type | Avoid bright light after 6 PM; bright light OK in AM | May not need; if advanced, use morning light box | Any time except late evening |
| Intermediate | Standard recommendations | Standard (2h before bed if used) | Flexible |

### Occupation-Specific Adaptations

**Shift Work:**
\`\`\`
Night shift workers:
- Bright light during shift (esp. first half)
- Sunglasses on commute home (avoid phase-advancing light)
- Dark bedroom during day sleep
- Strategic napping before/during shift
- Fixed schedule vs. rotating: Fixed is physiologically better
- Melatonin 2-3h before daytime sleep

Rotating shifts:
- Forward rotation (morning → evening → night) better than backward
- Minimum 2-3 days between rotation preferred
- Anchor sleep: Keep some sleep at consistent time
\`\`\`

**Travel / Jet Lag:**
- Eastward travel: Advance phase (light in morning at destination)
- Westward travel: Delay phase (light in evening at destination)
- Melatonin: Take at destination bedtime
- Pre-trip adjustment: Shift sleep 1h/day in direction of travel
- Recovery: ~1 day per time zone crossed

### Digital Health Integration

**Evidence for Digital Interventions:**

*Blue Light Blocking:*
- Meta-analysis: Modest improvements in sleep quality
- Most effective in evening type individuals
- Insufficient to compensate for device use close to bed
- Built-in night modes less effective than blue-blocking glasses

*Sleep Tracking Wearables:*
- Can reinforce good sleep hygiene behaviors
- Risk of orthosomnia (anxiety about sleep metrics)
- Data accuracy variable (better for TST than stages)
- Best used as awareness tool, not diagnostic

**Emerging Technologies:**
- Smart home integration (automatic light dimming)
- Temperature-regulating mattresses
- Closed-loop acoustic stimulation during sleep
- CBT-I apps (Somryst FDA-cleared, others available)

### Population-Specific Considerations

**Adolescents:**
- Biological phase delay during puberty
- School start times misaligned with chronotype
- Enhanced sensitivity to blue light
- Social pressures extend evening screen use
- Recommendations: Later school start; strict device curfews; weekend schedule <2h different

**Older Adults:**
- Advanced circadian phase
- Reduced slow-wave sleep
- Increased sleep fragmentation
- More time in bed (often excessive)
- Recommendations: Maintain activity; bright light in evening; avoid excessive time in bed; strategic napping acceptable

**Comorbid Conditions:**

| Condition | Modified Recommendations |
|-----------|-------------------------|
| Chronic pain | Sleep restriction may exacerbate pain initially; gradual implementation |
| Depression | Morning light therapy; consistent wake time critical |
| Anxiety | Relaxation training emphasis; cognitive components |
| Substance use | Address substance effects; expect sleep disruption in early recovery |
| Neurodegenerative | REM behavior disorder screening; fall risk from nocturnal ambulation |

### Research Frontiers

**Individual Response Prediction:**
- PER3 VNTR polymorphism: Longer allele associated with more homeostatic sleep pressure
- CLOCK polymorphisms: Affect chronotype and response to light
- ADA polymorphism: Affects adenosine metabolism, caffeine sensitivity
- Genetic testing not yet clinical but informs interindividual variability

**Microbiome-Sleep Axis:**
- Gut microbiome affects sleep quality
- Bidirectional: Sleep deprivation alters microbiome
- Fiber intake associated with more slow-wave sleep
- Probiotic interventions under investigation

**Environmental Factors:**
- Air quality (PM2.5): Associated with sleep apnea severity
- Urban noise pollution: Dose-dependent sleep disruption
- Climate change: Heat waves impair sleep population-wide
- Built environment: Light pollution, noise zoning

### Implementation Science

**Barriers to Sleep Hygiene Adherence:**
1. Work demands (shift work, long hours)
2. Social pressures (evening activities)
3. Technology habits
4. Comorbid conditions
5. Sleep disorder symptoms themselves

**Motivational Interviewing Approach:**
- Explore ambivalence
- Identify personal values aligned with good sleep
- Develop concrete action plans
- Address specific barriers
- Follow up on implementation

**Stepped Care Model:**
\`\`\`
Step 1: Sleep hygiene education + self-monitoring
↓ (if insufficient after 2-4 weeks)
Step 2: Brief behavioral intervention
↓ (if insufficient)
Step 3: Full CBT-I (therapist-delivered or digital)
↓ (if insufficient or not accessible)
Step 4: Pharmacotherapy + behavioral maintenance
\`\`\``,
      keyTerms: [
        { term: 'orthosomnia', definition: 'Preoccupation with achieving perfect sleep, often driven by wearable sleep tracking data' },
        { term: 'DLMO', definition: 'Dim Light Melatonin Onset; gold standard circadian phase marker measured in saliva or plasma' },
        { term: 'anchor sleep', definition: 'Maintaining a consistent portion of sleep at the same time daily, even with rotating schedules' },
        { term: 'PER3 VNTR', definition: 'Variable number tandem repeat in PER3 gene associated with sleep homeostasis and chronotype' },
        { term: 'MSFsc', definition: 'Midpoint of sleep on free days, sleep-corrected; measure of chronotype from MCTQ' },
      ],
      clinicalNotes: 'Clinical pearls: 1) Orthosomnia from sleep trackers is increasingly common - reassure patients that perfect metrics are not required. 2) Shift workers need occupation-specific counseling; AASM guidelines available. 3) Chronotype should inform light and melatonin timing recommendations. 4) CBT-I apps (Somryst, CBT-I Coach) are FDA-cleared alternatives when in-person therapy unavailable. 5) Sleep hygiene handouts are necessary but not sufficient - assess barriers and problem-solve specifically.',
    },
  },

  media: [
    {
      id: 'sleep-hygiene-infographic',
      type: 'diagram',
      filename: 'sleep-hygiene-tips.svg',
      title: 'Sleep Hygiene Best Practices',
      description: 'Visual summary of evidence-based sleep hygiene recommendations',
    },
    {
      id: 'light-exposure-schedule',
      type: 'diagram',
      filename: 'light-exposure-recommendations.svg',
      title: 'Optimal Light Exposure Schedule',
      description: 'Diagram showing recommended light exposure timing throughout the day',
    },
  ],

  citations: [
    {
      id: 'irish-sleep-hygiene',
      type: 'article',
      title: 'The role of sleep hygiene in promoting public health',
      authors: ['Irish, L.A.', 'Kline, C.E.', 'Gunn, H.E.'],
      source: 'Sleep Medicine Reviews',
      chapter: '22:23-36',
    },
    {
      id: 'aasm-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults',
      authors: ['Sateia, M.J.', 'Buysse, D.J.', 'Krystal, A.D.'],
      source: 'Journal of Clinical Sleep Medicine',
      chapter: '13(2):307-349',
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
    { targetId: 'condition-insomnia', targetType: 'condition', relationship: 'see-also', label: 'Insomnia' },
    { targetId: 'condition-circadian-disorders', targetType: 'condition', relationship: 'related', label: 'Circadian Rhythm Disorders' },
    { targetId: 'concept-cbti', targetType: 'concept', relationship: 'see-also', label: 'CBT-I' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'behavioral medicine', 'prevention', 'patient education'],
    keywords: ['sleep hygiene', 'sleep habits', 'circadian rhythm', 'light exposure', 'stimulus control', 'CBT-I'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default sleepHygiene;
