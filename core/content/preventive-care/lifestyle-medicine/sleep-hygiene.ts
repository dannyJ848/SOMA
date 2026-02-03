/**
 * Sleep Hygiene
 *
 * Comprehensive education on healthy sleep practices.
 */

import { EducationalContent } from '../../types';

export const SLEEP_HYGIENE: EducationalContent = {
  id: 'concept-sleep-hygiene',
  type: 'concept',
  name: 'Sleep Hygiene',
  alternateNames: ['Healthy sleep habits', 'Sleep health', 'Sleep optimization'],

  levels: {
    1: {
      level: 1,
      summary: 'Good sleep is essential for health, and simple habits can help you get better quality rest.',
      explanation: `Sleep is as important as diet and exercise for your health.

**How Much Sleep:**
- Adults: 7-9 hours per night
- Teens: 8-10 hours
- Children: 9-12 hours

**Tips for Better Sleep:**
- Keep a consistent sleep schedule
- Create a dark, quiet, cool bedroom
- Limit screens before bed
- Avoid caffeine late in the day
- Exercise regularly (but not close to bedtime)
- Avoid large meals before bed

**Signs of Poor Sleep:**
- Difficulty falling or staying asleep
- Feeling tired during the day
- Needing caffeine to function
- Falling asleep unintentionally`,
      keyTerms: [
        { term: 'sleep hygiene', definition: 'Habits and practices that promote good quality sleep' },
        { term: 'insomnia', definition: 'Difficulty falling asleep or staying asleep' },
      ],
      analogies: ['Think of sleep hygiene like dental hygiene - daily habits that prevent bigger problems.'],
      examples: ['After putting away his phone an hour before bed and keeping a regular schedule, Mark found his sleep improved significantly.'],
    },
    2: {
      level: 2,
      summary: 'Sleep health involves adequate duration, good quality, appropriate timing, and alertness during waking hours, with poor sleep linked to cardiovascular disease, obesity, and mental health disorders.',
      explanation: `**Sleep Recommendations:**
- Adults: 7+ hours per night
- <6 hours associated with adverse health outcomes
- >9 hours also associated with poor health (may indicate underlying issues)

**Health Consequences of Poor Sleep:**
- Cardiovascular disease
- Obesity and metabolic syndrome
- Type 2 diabetes
- Depression and anxiety
- Cognitive impairment
- Immune dysfunction

**Sleep Disorders:**
- Insomnia: Difficulty initiating or maintaining sleep
- Sleep apnea: Breathing interruptions during sleep
- Restless legs syndrome: Urge to move legs at rest
- Circadian rhythm disorders: Misaligned sleep timing

**Sleep Hygiene Principles:**
- Regular sleep-wake times
- Sleep environment optimization
- Limiting stimulants
- Relaxation techniques
- Managing naps`,
      keyTerms: [
        { term: 'sleep apnea', definition: 'Disorder where breathing repeatedly stops during sleep' },
        { term: 'circadian rhythm', definition: 'Internal 24-hour clock regulating sleep-wake cycles' },
        { term: 'melatonin', definition: 'Hormone that regulates sleep-wake cycles' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based sleep medicine integrates cognitive behavioral therapy for insomnia (CBT-I) as first-line treatment, screening for sleep apnea, and understanding circadian biology in treatment approaches.',
      explanation: `**CBT-I (Cognitive Behavioral Therapy for Insomnia):**
- First-line treatment for chronic insomnia
- Components: Sleep restriction, stimulus control, cognitive restructuring
- More effective than medications long-term
- Digital CBT-I available

**Sleep Apnea Screening:**
- STOP-BANG questionnaire
- Snoring, Tired, Observed apnea, Pressure, BMI, Age, Neck, Gender
- Score ≥3: Higher risk
- Polysomnography for diagnosis

**Circadian Medicine:**
- Light exposure timing
- Melatonin timing for rhythm disorders
- Shift work disorder management
- Jet lag strategies

**Pharmacotherapy:**
- Limited role for chronic insomnia
- Short-term use only
- Z-drugs (zolpidem): Risk of dependence, complex behaviors
- Low-dose trazodone: Commonly used off-label
- Orexin antagonists: Newer option`,
      keyTerms: [
        { term: 'CBT-I', definition: 'Cognitive behavioral therapy for insomnia; first-line non-drug treatment' },
        { term: 'STOP-BANG', definition: 'Screening questionnaire for obstructive sleep apnea risk' },
        { term: 'polysomnography', definition: 'Overnight sleep study to diagnose sleep disorders' },
      ],
      analogies: [],
      clinicalNotes: 'CBT-I before medications for chronic insomnia. Screen for sleep apnea in high-risk patients. Limit hypnotic medications. Address circadian factors.',
    },
    4: {
      level: 4,
      summary: 'Sleep medicine advances include home sleep testing, digital therapeutics for insomnia, and recognition of sleep as a modifiable risk factor for cardiovascular and neurodegenerative disease.',
      explanation: `**Home Sleep Testing:**
- For suspected uncomplicated OSA
- Less expensive than in-lab PSG
- Limited channels
- May miss other disorders

**Digital Therapeutics:**
- FDA-cleared digital CBT-I (Somryst)
- Improves access
- Comparable efficacy
- Cost-effective

**Sleep and Cardiovascular Risk:**
- Short sleep: Hypertension, CAD risk
- Sleep apnea: AF, stroke risk
- CPAP reduces some CV outcomes
- Sleep as CVD risk factor

**Sleep and Neurodegeneration:**
- Glymphatic clearance during sleep
- Sleep disruption and amyloid accumulation
- REM sleep behavior disorder: Prodromal synucleinopathy
- Sleep as modifiable dementia risk factor`,
      keyTerms: [
        { term: 'glymphatic system', definition: 'Brain waste clearance system most active during sleep' },
        { term: 'REM sleep behavior disorder', definition: 'Acting out dreams; associated with future Parkinson\'s disease' },
        { term: 'CPAP', definition: 'Continuous positive airway pressure; treatment for sleep apnea' },
      ],
      analogies: [],
      clinicalNotes: 'Home sleep testing appropriate for uncomplicated OSA. Consider digital CBT-I for access. Sleep is modifiable CV and dementia risk factor. RBD predicts neurodegeneration.',
    },
    5: {
      level: 5,
      summary: 'Precision sleep medicine integrates wearable technology, chronobiology, and molecular understanding of sleep function while addressing global sleep health disparities.',
      explanation: `**Precision Approaches:**
- Chronotyping for personalized schedules
- Genetic influences on sleep need
- Pharmacogenomics for hypnotic response
- Wearable sleep tracking

**Research Frontiers:**
- Memory consolidation mechanisms
- Sleep and immune function
- Orexin system biology
- Novel therapeutic targets

**Global Sleep Health:**
- Sleep disparities by socioeconomic status
- Racial/ethnic differences in sleep duration
- Work schedule impacts
- Light pollution effects

**Technology Integration:**
- Consumer sleep trackers: Limitations and utility
- Multi-modal sensing
- AI for sleep staging
- Closed-loop interventions`,
      keyTerms: [
        { term: 'chronotype', definition: 'Individual tendency toward morningness or eveningness' },
        { term: 'orexin', definition: 'Neuropeptide regulating wakefulness; target for sleep medications' },
      ],
      analogies: [],
      clinicalNotes: 'Consumer wearables have limitations but may improve awareness. Consider chronotype in scheduling. Address sleep disparities. Emerging precision approaches.',
    },
  },

  media: [],
  citations: [
    {
      id: 'sleep-guidelines',
      type: 'website',
      title: 'Sleep Duration Recommendations',
      source: 'National Sleep Foundation',
      url: 'https://www.sleepfoundation.org/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['nervous'],
    topics: ['preventive medicine', 'sleep medicine', 'lifestyle medicine'],
    keywords: ['sleep', 'insomnia', 'sleep apnea', 'CBT-I', 'sleep hygiene'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine', 'psychiatry'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
