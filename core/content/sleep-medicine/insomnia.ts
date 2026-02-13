/**
 * Insomnia - Comprehensive Educational Content
 *
 * Covers acute and chronic insomnia, including etiology, pathophysiology,
 * diagnostic criteria, and treatment approaches (CBT-I, pharmacotherapy).
 */

import { EducationalContent } from '../types';

export const insomnia: EducationalContent = {
  id: 'condition-insomnia',
  type: 'condition',
  name: 'Insomnia',
  alternateNames: ['Insomnia Disorder', 'Chronic Insomnia', 'Primary Insomnia', 'Sleep-Onset Insomnia', 'Sleep-Maintenance Insomnia'],

  levels: {
    1: {
      level: 1,
      summary: 'Insomnia is when you have trouble falling asleep, staying asleep, or waking up too early, even when you have enough time to sleep.',
      explanation: `Have you ever had a night when you just couldn't fall asleep, or you kept waking up? That's what insomnia feels like - but for people with insomnia, it happens a lot and makes them feel tired during the day.

**Types of Sleep Problems in Insomnia:**
- **Trouble falling asleep** - Lying in bed for a long time before falling asleep
- **Waking up during the night** - Getting up in the middle of the night and having trouble going back to sleep
- **Waking up too early** - Waking up before your alarm and not being able to fall back asleep

**How Insomnia Makes You Feel During the Day:**
- Tired and sleepy
- Grumpy or moody
- Trouble paying attention at school or work
- Hard to remember things
- Making more mistakes

**What Causes Insomnia:**
- Worrying or stress
- Feeling sad or anxious
- Bad sleep habits (like using your phone in bed)
- Changes in your schedule
- Drinking caffeine or eating too close to bedtime
- Medical problems

**Getting Help:**
The good news is that insomnia can get better! Doctors can help by:
- Teaching better sleep habits
- Helping you worry less about sleep
- Sometimes giving medicine, but usually other treatments work better

If you're having trouble sleeping for more than a few weeks, it's a good idea to talk to a doctor or your parents about it.`,
      keyTerms: [
        { term: 'insomnia', definition: 'Having trouble falling asleep, staying asleep, or waking up too early' },
        { term: 'sleep-onset insomnia', definition: 'When it takes a long time to fall asleep at the beginning of the night' },
        { term: 'fatigue', definition: 'Feeling tired and having low energy' },
      ],
      analogies: [
        'Insomnia is like when your brain\'s "off switch" doesn\'t work properly - you want to sleep but your mind keeps running.',
        'Trying to fall asleep with insomnia is like trying to catch a bus that keeps driving away just as you reach the stop.',
      ],
      examples: [
        'Someone with insomnia might lie in bed for an hour or more trying to fall asleep while their thoughts keep racing.',
        'A person with insomnia might feel fine at bedtime but then wide awake at 3 AM, unable to fall back asleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Insomnia disorder involves persistent difficulty initiating or maintaining sleep, or early morning awakening, despite adequate opportunity for sleep, resulting in daytime impairment. It affects 10-30% of adults.',
      explanation: `Insomnia is more than just a few bad nights of sleep - it's a persistent condition that affects how you function during the day.

**Diagnostic Criteria (Simplified):**
1. Difficulty falling asleep, staying asleep, or waking too early
2. Occurs despite having enough time and opportunity to sleep
3. Causes daytime problems (fatigue, concentration issues, mood changes)
4. Happens at least 3 nights per week
5. Lasts at least 3 months (for chronic insomnia)

**Types of Insomnia:**

*By Duration:*
- **Acute (short-term)**: Less than 3 months, often triggered by stress
- **Chronic**: 3+ months, may become independent of original trigger

*By Presentation:*
- **Sleep-onset insomnia**: Taking >30 minutes to fall asleep
- **Sleep-maintenance insomnia**: Waking frequently or for long periods
- **Early morning awakening**: Waking >30 minutes before desired time

**The 3P Model of Insomnia:**

1. **Predisposing factors** (who is vulnerable):
   - Genetic tendency toward light sleep
   - Anxiety-prone personality
   - Being a "worrier"

2. **Precipitating factors** (what triggers it):
   - Stressful life events
   - Medical illness
   - Schedule changes
   - Medication effects

3. **Perpetuating factors** (what keeps it going):
   - Spending too much time in bed
   - Irregular sleep schedule
   - Worrying about sleep
   - Using alcohol to sleep
   - Napping during the day

**Treatment Approaches:**

*Cognitive Behavioral Therapy for Insomnia (CBT-I):*
First-line treatment, more effective than medication long-term
- Sleep restriction: Limit time in bed to actual sleep time
- Stimulus control: Bed for sleep only, leave if awake >20 min
- Cognitive therapy: Address worry about sleep
- Sleep hygiene: Good sleep habits

*Medications (when needed):*
- Prescribed for short-term use
- Include sleep aids like zolpidem, trazodone
- Not a long-term solution
- Risk of dependence with some medications`,
      keyTerms: [
        { term: 'chronic insomnia', definition: 'Insomnia occurring at least 3 nights per week for 3 or more months' },
        { term: '3P model', definition: 'Model explaining insomnia through Predisposing, Precipitating, and Perpetuating factors' },
        { term: 'CBT-I', definition: 'Cognitive Behavioral Therapy for Insomnia; the most effective treatment for chronic insomnia' },
        { term: 'sleep restriction', definition: 'CBT-I technique that limits time in bed to increase sleep efficiency' },
        { term: 'stimulus control', definition: 'CBT-I technique that strengthens the association between bed and sleep' },
        { term: 'sleep efficiency', definition: 'Percentage of time in bed actually spent sleeping' },
      ],
      analogies: [
        'The 3P model is like a fire: predisposing factors are the kindling, precipitating factors light the match, and perpetuating factors keep adding fuel to keep it burning.',
        'Sleep restriction works like creating a "sleep appetite" - just as eating less during the day makes you hungrier at dinner, spending less time in bed makes you sleepier at bedtime.',
      ],
    },
    3: {
      level: 3,
      summary: 'Insomnia disorder is characterized by persistent sleep initiation or maintenance difficulties with daytime consequences, understood through hyperarousal models and treated primarily with CBT-I, which shows superior long-term efficacy compared to pharmacotherapy.',
      explanation: `## Diagnostic Criteria (ICSD-3 / DSM-5)

**Core Features:**
1. Subjective complaint of difficulty initiating sleep, maintaining sleep, or early morning awakening
2. Adequate opportunity and circumstances for sleep
3. Daytime consequences:
   - Fatigue/malaise
   - Cognitive impairment (attention, concentration, memory)
   - Mood disturbance
   - Daytime sleepiness
   - Behavioral problems (hyperactivity, impulsivity, aggression)
   - Reduced motivation/energy
   - Proneness to errors/accidents
   - Concerns about sleep

**Duration Specifiers:**
- Acute/short-term: <3 months
- Chronic: ≥3 months, ≥3 nights/week

## Pathophysiology: Hyperarousal Model

Chronic insomnia is characterized by 24-hour hyperarousal:

**Physiological Hyperarousal:**
- Elevated heart rate and heart rate variability
- Increased core body temperature
- Elevated cortisol levels
- Increased whole-brain glucose metabolism (FDG-PET)
- Enhanced high-frequency EEG activity during NREM

**Cognitive Hyperarousal:**
- Racing thoughts, rumination
- Worry about sleep and consequences
- Selective attention to sleep-related threats
- Dysfunctional beliefs about sleep

**Cortical Hyperarousal:**
- Increased beta/gamma EEG power during sleep
- Reduced slow-wave activity
- Increased sleep-state misperception

## The 3P Model (Spielman)

| Factor | Examples | Clinical Implication |
|--------|----------|---------------------|
| Predisposing | Genetics, trait anxiety, female sex, age | Risk identification |
| Precipitating | Stress, illness, pain, life change | Acute insomnia trigger |
| Perpetuating | Extended time in bed, napping, worry, substances | Treatment targets |

The key insight: Perpetuating factors maintain insomnia even after precipitating factors resolve.

## Treatment

### CBT-I Components

**1. Sleep Restriction Therapy:**
\`\`\`
Initial time in bed = Average total sleep time (minimum 5 hours)
↓
Weekly adjustment based on sleep efficiency:
- SE >90%: Increase TIB by 15-30 min
- SE 85-90%: No change
- SE <85%: Decrease TIB by 15-30 min
↓
Continue until target sleep duration reached with high efficiency
\`\`\`

**2. Stimulus Control:**
- Go to bed only when sleepy
- Use bed only for sleep and sex
- If unable to sleep within ~20 minutes, leave bedroom
- Return only when sleepy
- Fixed wake time regardless of sleep amount
- No daytime napping

**3. Cognitive Therapy:**
- Identify and challenge dysfunctional beliefs
- Common beliefs: "I need 8 hours" "If I don't sleep, I can't function"
- Restructure catastrophic thinking about sleep
- Address sleep effort (trying too hard to sleep)

**4. Relaxation Training:**
- Progressive muscle relaxation
- Diaphragmatic breathing
- Imagery training
- May help with physiological arousal

### Pharmacotherapy

**First-line (for short-term use):**
| Medication | Mechanism | Dose | Notes |
|------------|-----------|------|-------|
| Zolpidem | GABA-A α1 agonist | 5-10 mg | Rapid onset; complex behaviors |
| Eszopiclone | GABA-A agonist | 1-3 mg | Longer half-life; metallic taste |
| Suvorexant | OX1/OX2 antagonist | 10-20 mg | Next-day drowsiness |
| Lemborexant | OX1/OX2 antagonist | 5-10 mg | Sleep maintenance |
| Doxepin | H1 antagonist | 3-6 mg | Sleep maintenance; low doses |
| Ramelteon | MT1/MT2 agonist | 8 mg | Sleep onset; no dependence |

**Avoid in chronic insomnia:**
- Benzodiazepines (tolerance, dependence, rebound)
- Diphenhydramine (anticholinergic, tolerance)
- Alcohol (disrupts architecture, dependence)

### Evidence Comparison

| Outcome | CBT-I | Pharmacotherapy |
|---------|-------|-----------------|
| Short-term efficacy | ++ | ++ |
| Long-term efficacy | +++ | ± (effects wane) |
| Durability | Months-years | Only while taking |
| Side effects | Mild (transient sleepiness) | Varies by drug |
| Mechanism | Addresses perpetuating factors | Symptomatic relief |`,
      keyTerms: [
        { term: 'hyperarousal', definition: 'State of heightened physiological, cognitive, and cortical activation that characterizes chronic insomnia' },
        { term: 'sleep restriction therapy', definition: 'CBT-I technique limiting time in bed to increase sleep pressure and efficiency' },
        { term: 'sleep efficiency', definition: 'TST/TIB x 100%; target in insomnia treatment is >85-90%' },
        { term: 'DORA', definition: 'Dual orexin receptor antagonist; newer hypnotic class (suvorexant, lemborexant)' },
        { term: 'sleep state misperception', definition: 'Discrepancy between subjective and objective sleep measures, common in insomnia' },
      ],
      clinicalNotes: 'AASM and AHRQ guidelines recommend CBT-I as first-line treatment for chronic insomnia. Effect sizes for CBT-I (d=0.98) exceed those for pharmacotherapy (d=0.45-0.89). CBT-I produces durable effects at 1-year follow-up, while medication effects typically do not persist after discontinuation. Brief behavioral interventions (BBT-I, 2-4 sessions) are effective alternatives when full CBT-I is unavailable.',
    },
    4: {
      level: 4,
      summary: 'Chronic insomnia disorder reflects a state of 24-hour hyperarousal with neurobiological correlates including altered HPA axis activity, elevated cortical arousal markers, and brain metabolism changes. CBT-I targets perpetuating factors through behavioral and cognitive interventions with superior long-term efficacy to pharmacotherapy.',
      explanation: `## Neurobiological Basis of Insomnia

### Hyperarousal Markers

**HPA Axis Dysregulation:**
- Elevated evening cortisol levels
- Flattened diurnal cortisol rhythm
- Increased CRH activity
- Enhanced cortisol awakening response

**Autonomic Dysfunction:**
- Increased heart rate during NREM sleep
- Reduced heart rate variability (↓ parasympathetic tone)
- Elevated nocturnal blood pressure
- Enhanced sympathetic activity

**Neuroimaging Findings:**

*FDG-PET (Nofzinger et al.):*
- Increased whole-brain glucose metabolism during NREM
- Elevated metabolism in wake-promoting regions (ascending arousal system)
- Reduced deactivation of limbic/prefrontal areas during sleep
- Correlates with subjective insomnia severity

*MRI Studies:*
- Reduced hippocampal volume (some studies)
- Altered insular cortex structure
- Changes in prefrontal gray matter

**EEG Markers:**
\`\`\`
Sleep EEG in insomnia:
- Increased high-frequency activity (beta, gamma) during NREM
- Reduced slow-wave activity (delta power)
- Increased alpha intrusion
- More cyclic alternating pattern (sleep instability)
- Sleep state misperception correlates with high-frequency power
\`\`\`

### Genetics

**Heritability:**
- Twin studies: ~40-60% heritability for insomnia symptoms
- GWAS identified risk loci near MEIS1, neuronal development genes
- Overlap with psychiatric disorder genetics (depression, anxiety)

**Candidate Genes:**
| Gene | Function | Association |
|------|----------|-------------|
| CLOCK, PER2, PER3 | Circadian regulation | Chronotype, insomnia risk |
| SLC6A4 (5-HTTLPR) | Serotonin transport | Short allele: increased risk |
| GABA receptor genes | Inhibitory signaling | Response to medications |
| ADRB1 | Adrenergic signaling | Sleep need variability |

### Detailed CBT-I Protocol

**Assessment:**
1. Sleep diary (2 weeks minimum)
2. Calculate baseline sleep efficiency
3. Assess sleep-related cognitions (DBAS scale)
4. Screen for comorbidities (depression, anxiety, OSA)
5. Identify perpetuating behaviors

**Sleep Restriction Protocol:**
\`\`\`
Step 1: Calculate average TST from sleep diary
Step 2: Set initial TIB = TST (minimum 5h, max = TST + 30 min)
Step 3: Fix wake time; bedtime = wake time - TIB
Step 4: Weekly titration:
        SE ≥90%: ↑ TIB 15-30 min (advance bedtime)
        SE 85-90%: No change
        SE <85%: ↓ TIB 15 min (delay bedtime)
Step 5: Continue until desired TST achieved with SE >85%
\`\`\`

*Contraindications/Cautions:*
- Bipolar disorder (sleep deprivation can trigger mania)
- Seizure disorders
- Parasomnias
- High fall risk
- Safety-sensitive occupations

**Cognitive Interventions:**

*Common Dysfunctional Beliefs:*
\`\`\`
"I need 8 hours of sleep"
→ Challenge: Sleep need varies; quality matters; some insomniacs
   overestimate need

"If I don't sleep, I can't function tomorrow"
→ Challenge: You've managed before; catastrophizing increases anxiety;
   one night rarely impairs significantly

"I've lost the ability to sleep"
→ Challenge: Sleep drive is biological; ability to sleep is intact;
   it's the conditions that need to change
\`\`\`

*Cognitive Restructuring Steps:*
1. Identify automatic thoughts about sleep
2. Examine evidence for/against
3. Develop alternative, realistic thoughts
4. Behavioral experiments to test beliefs

### Pharmacotherapy Details

**Z-drugs (GABA-A α1 agonists):**
\`\`\`
Zolpidem (Ambien):
- Half-life: 2.5h; rapid onset
- α1-selective (sedation > anxiolytic/myorelaxant)
- Complex sleep behaviors (rare): eating, driving, amnesia
- ER formulation for maintenance insomnia

Zaleplon (Sonata):
- Half-life: 1h; ultrashort
- Can be taken for middle-of-night awakening if 4h remain
- Less residual effects
\`\`\`

**Dual Orexin Receptor Antagonists (DORAs):**
\`\`\`
Mechanism: Block wake-promoting orexin signaling
Suvorexant (Belsomra): 10-20mg; half-life 12h
Lemborexant (Dayvigo): 5-10mg; half-life 17-19h
Daridorexant (Quviviq): 25-50mg; half-life 8h

Advantages:
- Promotes sleep by reducing wakefulness (vs. inducing sedation)
- Less cognitive impairment than Z-drugs
- No respiratory depression
- Minimal abuse potential

Disadvantages:
- Next-day somnolence possible
- Sleep paralysis, hallucinations (rare)
- Cost
\`\`\`

**Low-Dose Doxepin:**
\`\`\`
Mechanism: H1 antagonist at low doses (3-6mg)
(Higher doses: TCA effects)
Indication: Sleep maintenance
Long half-life maintains effect through night
Minimal anticholinergic effects at sleep doses
No dependence, no rebound
\`\`\`

### Treatment Algorithm

\`\`\`
Chronic Insomnia Diagnosed
↓
CBT-I as first-line treatment
↓
[Response] → Continue/maintain behavioral gains
↓
[Insufficient response after 8 sessions]
↓
Consider:
- Comorbid sleep disorder (screen for OSA, RLS)
- Comorbid psychiatric disorder (treat underlying)
- Add pharmacotherapy (short-term, or long-term if chronic without
  comorbidity and severe impact)
\`\`\``,
      keyTerms: [
        { term: 'DBAS', definition: 'Dysfunctional Beliefs and Attitudes about Sleep scale; assesses cognitive perpetuating factors' },
        { term: 'sleep state misperception', definition: 'Subjective report of poor sleep despite objective normal sleep on PSG; associated with cortical hyperarousal' },
        { term: 'cyclic alternating pattern', definition: 'EEG marker of sleep instability; increased in insomnia' },
        { term: 'behavioral sleep medicine', definition: 'Subspecialty focused on non-pharmacological treatment of sleep disorders, particularly CBT-I' },
      ],
      clinicalNotes: 'Practical considerations: 1) Sleep restriction can cause temporary sleepiness - warn patients, especially those with safety-sensitive jobs. 2) DORAs may be preferred over Z-drugs in elderly (less cognitive impairment, falls). 3) Comorbid depression/anxiety does not preclude CBT-I - studies show efficacy in comorbid populations. 4) Chronic hypnotic use is not contraindicated but CBT-I should still be offered. 5) Digital CBT-I programs (Somryst) are FDA-cleared and may be used when therapists unavailable.',
    },
    5: {
      level: 5,
      summary: 'Insomnia disorder represents a complex phenotype with demonstrated genetic susceptibility, neurobiological correlates of hyperarousal across multiple systems, and heterogeneous subtypes that may predict differential treatment response. Precision approaches integrating phenotyping, biomarkers, and individualized treatment matching are emerging.',
      explanation: `## Advanced Concepts in Insomnia

### Insomnia Subtypes and Phenotyping

**EEG-Based Subtypes:**
Recent cluster analyses identify distinct insomnia phenotypes:

| Subtype | EEG Features | Clinical Features | Treatment Implications |
|---------|--------------|-------------------|----------------------|
| High-arousal | ↑ beta power, ↓ SWA | Hypervigilance, conditioned insomnia | May benefit most from stimulus control |
| Sleep-state misperception | Normal sleep but subjective complaint | Anxiety-prone | Cognitive restructuring emphasis |
| Objective short sleep | <6h TST on PSG | Medical comorbidity risk | More aggressive treatment; cardiovascular screening |
| Normal sleep duration | Normal PSG | Psychological symptoms | May respond to cognitive therapy alone |

**Objective Short Sleep Insomnia (OSSI):**
- PSG TST <6 hours despite adequate opportunity
- Associated with:
  - Increased mortality risk
  - Higher hypertension, diabetes risk
  - Greater cognitive impairment
  - Possibly different HPA axis phenotype
- May require different treatment approach (more aggressive)

### Neuroimaging and Biomarkers

**Structural MRI:**
\`\`\`
Findings (inconsistent across studies):
- Reduced orbitofrontal cortex volume
- Altered hippocampal volume (some studies)
- Insular cortex differences
- Caveats: Small studies, heterogeneous populations
\`\`\`

**Functional MRI:**
- Hyperconnectivity in default mode network
- Altered amygdala reactivity
- Reduced deactivation of salience network during sleep

**PET (Nofzinger studies):**
\`\`\`
NREM sleep metabolism in insomnia:
- Global ↑ glucose metabolism (vs. good sleepers)
- Especially: brainstem, hypothalamus, thalamus, limbic
- Suggests failure to "turn off" wake-promoting regions
- Correlates with subjective sleep quality
\`\`\`

**Potential Biomarkers:**
| Biomarker | Status | Utility |
|-----------|--------|---------|
| High-frequency EEG | Research | Hyperarousal phenotyping |
| HRV during sleep | Research | Autonomic tone assessment |
| Evening cortisol | Research | HPA axis marker |
| BDNF | Exploratory | May predict CBT-I response |
| Inflammatory markers | Research | Risk for comorbidity |

### Genetics and Pharmacogenomics

**GWAS Findings:**
- UK Biobank mega-analysis identified 57 loci
- Genes involved in:
  - Neurodevelopment
  - Synaptic function
  - GABA signaling
  - Circadian regulation
- Genetic correlation with:
  - Depression (r=0.50)
  - Anxiety (r=0.56)
  - Coronary artery disease (r=0.18)

**Pharmacogenomic Considerations:**
\`\`\`
CYP3A4:
- Metabolizes most Z-drugs, DORAs
- Inducers (rifampin): ↓ drug levels
- Inhibitors (ketoconazole): ↑ drug levels

CYP2D6:
- Metabolizes doxepin, some antihistamines
- Poor metabolizers: ↑ exposure, side effects

HLA-DQB1*06:02:
- Not relevant for insomnia treatment
- But relevant if narcolepsy suspected
\`\`\`

### Special Populations

**Comorbid Insomnia:**

*With Depression:*
- Bidirectional relationship
- Insomnia predicts depression onset, recurrence
- CBT-I effective even with comorbid depression
- Treating insomnia may improve depression outcomes
- Residual insomnia after depression treatment: address specifically

*With Chronic Pain:*
\`\`\`
Bidirectional:
Pain → ↑ arousal → insomnia
Insomnia → ↓ pain threshold → more pain

Treatment approach:
- CBT-I adapted for pain (CBT-I+P)
- Sleep restriction may temporarily worsen pain
- Slow titration of sleep restriction
- May need combination with pain management
\`\`\`

*With OSA:*
- COMISA (Comorbid Insomnia and Sleep Apnea)
- Affects 30-50% of OSA patients
- OSA treatment alone often insufficient for insomnia
- Sequential or integrated treatment:
  - Treat OSA (CPAP)
  - Then CBT-I for residual insomnia
  - Or integrated CPAP + CBT-I protocols

**Pregnancy:**
- Non-pharmacological approaches first-line
- Most hypnotics category C or not recommended
- Cognitive behavioral approaches safe

**Elderly:**
- Age-related changes in sleep architecture (↓N3, more awakenings)
- Higher sensitivity to hypnotics
- Z-drugs: Beers criteria, increased fall/cognitive risk
- DORAs may be better tolerated
- Low-dose doxepin FDA-approved
- CBT-I highly effective

### Implementation Science

**Barriers to CBT-I:**
1. Limited trained providers
2. Insurance coverage issues
3. Patient time commitment
4. Preference for medications
5. Comorbidities complicating delivery

**Stepped Care Model:**
\`\`\`
Level 1: Self-help resources (apps, books)
↓
Level 2: Brief interventions (1-2 sessions)
↓
Level 3: Standard CBT-I (6-8 sessions)
↓
Level 4: CBT-I + pharmacotherapy
↓
Level 5: Specialist referral (comorbid disorders)
\`\`\`

**Digital CBT-I:**
- Multiple apps/programs available
- Somryst (Pear Therapeutics): FDA-cleared prescription digital therapeutic
- Meta-analyses show effect sizes similar to face-to-face
- May improve access
- Limitations: Less personalization, adherence challenges

### Emerging Treatments

**Closed-Loop Stimulation:**
- Phase-locked acoustic stimulation during slow oscillations
- May enhance sleep depth
- Early research for insomnia

**Suvorexant/Lemborexant Positioning:**
- May be preferred for sleep maintenance
- Less cognitive impact than GABAergic agents
- Longer-term safety data emerging

**Orexin-2 Selective Antagonists:**
- In development
- Theoretical advantage: less somnolence, more selective wake-blocking

**Targeting Hyperarousal Directly:**
- Mindfulness-based therapy for insomnia (MBTI)
- Addresses cognitive/emotional arousal
- May combine with CBT-I
- Efficacy data accumulating`,
      keyTerms: [
        { term: 'COMISA', definition: 'Comorbid Insomnia and Sleep Apnea; common overlap syndrome requiring integrated treatment' },
        { term: 'objective short sleep insomnia', definition: 'Insomnia phenotype with PSG-confirmed short sleep (<6h); associated with worse health outcomes' },
        { term: 'stepped care', definition: 'Treatment delivery model matching intervention intensity to patient need' },
        { term: 'digital therapeutics', definition: 'Software-based treatments (e.g., CBT-I apps) with clinical evidence; some FDA-cleared' },
        { term: 'MBTI', definition: 'Mindfulness-Based Therapy for Insomnia; integrates mindfulness practices with CBT-I principles' },
      ],
      clinicalNotes: 'Clinical pearls: 1) Always screen OSA before attributing symptoms solely to insomnia. 2) COMISA is common and requires treatment of both conditions. 3) Objective short sleep insomnia phenotype may have worse cardiovascular outcomes - consider aggressive management. 4) Digital CBT-I is evidence-based and can extend access. 5) Residual insomnia after depression treatment should be actively addressed - it predicts relapse. 6) For elderly, DORAs or low-dose doxepin may be safer than Z-drugs. 7) Sleep restriction contraindicated/modified in bipolar, seizure disorders, parasomnias.',
    },
  },

  media: [
    {
      id: '3p-model-diagram',
      type: 'diagram',
      filename: '3p-model-insomnia.svg',
      title: 'The 3P Model of Insomnia',
      description: 'Diagram illustrating predisposing, precipitating, and perpetuating factors',
    },
    {
      id: 'cbti-components',
      type: 'diagram',
      filename: 'cbti-components.svg',
      title: 'Components of CBT-I',
      description: 'Overview of cognitive behavioral therapy for insomnia components',
    },
    {
      id: 'sleep-restriction-protocol',
      type: 'diagram',
      filename: 'sleep-restriction-protocol.svg',
      title: 'Sleep Restriction Therapy Protocol',
      description: 'Step-by-step guide to implementing sleep restriction',
    },
  ],

  citations: [
    {
      id: 'spielman-3p',
      type: 'article',
      title: 'A behavioral perspective on insomnia treatment',
      authors: ['Spielman, A.J.', 'Caruso, L.S.', 'Glovinsky, P.B.'],
      source: 'Psychiatric Clinics of North America',
      chapter: '10:541-553',
    },
    {
      id: 'morin-cbti',
      type: 'article',
      title: 'Cognitive behavioral therapy for insomnia: A systematic review and meta-analysis',
      authors: ['Morin, C.M.', 'Vallires, A.', 'Guay, B.'],
      source: 'Annals of Internal Medicine',
      chapter: '163:191-204',
    },
    {
      id: 'aasm-insomnia-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults',
      authors: ['Sateia, M.J.', 'Buysse, D.J.', 'Krystal, A.D.'],
      source: 'Journal of Clinical Sleep Medicine',
      chapter: '13(2):307-349',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-sleep', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'concept-sleep-hygiene', targetType: 'concept', relationship: 'related', label: 'Sleep Hygiene' },
    { targetId: 'condition-depression', targetType: 'condition', relationship: 'see-also', label: 'Depression' },
    { targetId: 'condition-anxiety', targetType: 'condition', relationship: 'see-also', label: 'Anxiety Disorders' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['sleep medicine', 'psychiatry', 'behavioral medicine'],
    keywords: ['insomnia', 'CBT-I', 'sleep restriction', 'stimulus control', 'hypnotics', 'sleep hygiene'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'neurology', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default insomnia;
