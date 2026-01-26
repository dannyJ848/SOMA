/**
 * Bulimia Nervosa
 *
 * Comprehensive educational content on bulimia nervosa,
 * its diagnosis, medical complications, and treatment.
 */

import { EducationalContent } from '../../../types';

export const bulimiaNervosaContent: EducationalContent = {
  id: 'psychiatry-bulimia-nervosa',
  type: 'condition',
  name: 'Bulimia Nervosa',
  alternateNames: ['BN', 'Bulimia'],

  levels: {
    1: {
      level: 1,
      summary: 'Bulimia nervosa is an eating disorder where a person has episodes of eating large amounts of food and then tries to get rid of it through vomiting, excessive exercise, or other methods.',
      explanation: `Bulimia nervosa involves a pattern of binge eating followed by attempts to "undo" the eating.

**What Happens:**

*Binge eating:*
- Eating a large amount of food in a short time
- Feeling out of control while eating
- Eating even when not hungry
- Eating until uncomfortably full

*Compensatory behaviors (trying to "undo" the binge):*
- Making yourself vomit
- Excessive exercise
- Fasting or strict dieting
- Using laxatives or diet pills

**Warning Signs:**

- Disappearing after meals (to purge)
- Evidence of vomiting
- Empty food packages or wrappers
- Excessive exercise
- Swollen cheeks or jaw
- Damaged teeth
- Shame and secrecy around eating

**Important to Know:**

- People with bulimia are often normal weight (unlike anorexia)
- The behavior is done in secret and causes great shame
- Bulimia is not about food - it's about emotions and control
- It's a real illness that needs treatment
- Recovery is very possible

**Health Effects:**

- Damage to teeth from stomach acid
- Sore throat and swollen glands
- Dehydration and electrolyte imbalances
- Heart problems (from electrolyte issues)
- Digestive problems

**Treatment Works:**

- A special type of therapy called CBT is very effective
- Medications can help reduce urges to binge and purge
- Most people get much better with treatment`,
      keyTerms: [
        { term: 'binge eating', definition: 'Eating a large amount of food while feeling out of control' },
        { term: 'purging', definition: 'Trying to get rid of food eaten through vomiting, laxatives, or excessive exercise' },
        { term: 'compensatory behavior', definition: 'Actions taken to "undo" calories consumed' },
      ],
      analogies: [
        'Bulimia is like an emotional fire alarm that goes off, and binge eating is an attempt to put out the fire, followed by guilt and purging.',
        'The binge-purge cycle is like a trap that gets harder to escape without help.',
      ],
      examples: [
        'A person might eat an entire pizza and pint of ice cream in one sitting, then immediately make themselves vomit.',
        'Someone might exercise for hours after eating a normal meal because they feel guilty.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bulimia nervosa is characterized by recurrent binge eating episodes followed by compensatory behaviors, with self-evaluation unduly influenced by body weight and shape, typically occurring at normal weight.',
      explanation: `**Diagnostic Criteria:**

A. Recurrent episodes of binge eating:
- Eating in discrete period (e.g., 2 hours) an amount larger than most would eat
- Sense of lack of control (can't stop or control what/how much eating)

B. Recurrent compensatory behaviors to prevent weight gain:
- Self-induced vomiting
- Laxative, diuretic, or medication misuse
- Fasting
- Excessive exercise

C. Binge eating and compensatory behaviors both occur at least once/week for 3 months

D. Self-evaluation unduly influenced by body weight and shape

E. Does not occur exclusively during anorexia nervosa episodes

**Severity (based on compensatory behavior frequency):**
- Mild: 1-3 episodes/week
- Moderate: 4-7 episodes/week
- Severe: 8-13 episodes/week
- Extreme: 14+ episodes/week

**Types of Compensatory Behaviors:**

*Purging:*
- Self-induced vomiting (most common)
- Laxative abuse
- Diuretic abuse
- Enema abuse

*Non-purging:*
- Fasting
- Excessive exercise

**Distinguishing Features:**

- Usually normal or slightly above normal weight
- High comorbidity with depression, anxiety, substance use
- Often begins in late adolescence/early adulthood
- May follow period of dieting

**Medical Complications:**

*From Vomiting:*
- Dental erosion, cavities
- Parotid gland enlargement (chipmunk cheeks)
- Esophagitis, Mallory-Weiss tears
- Hypokalemia (dangerous)

*From Laxatives:*
- Fluid and electrolyte imbalances
- Cathartic colon (dependence)

*General:*
- Dehydration
- Cardiac arrhythmias
- Menstrual irregularities

**Treatment:**

*First-line: CBT for Bulimia (CBT-BN)*
- 16-20 sessions
- Addresses eating patterns
- Cognitive restructuring
- Most effective treatment

*Medication:*
- Fluoxetine (only FDA-approved for BN)
- 60mg dose
- Reduces binge/purge frequency

*Other:*
- Interpersonal therapy (IPT)
- Dialectical behavior therapy (DBT)
- Nutritional counseling`,
      keyTerms: [
        { term: 'compensatory behavior', definition: 'Behaviors used to try to prevent weight gain after eating' },
        { term: 'purging', definition: 'Using vomiting, laxatives, or diuretics to eliminate food/calories' },
        { term: 'hypokalemia', definition: 'Low potassium, a dangerous complication from purging' },
        { term: 'parotid enlargement', definition: 'Swelling of cheek glands from repeated vomiting' },
      ],
    },
    3: {
      level: 3,
      summary: 'BN involves recurrent binge-purge cycles with overvaluation of shape/weight, often at normal BMI. Pathophysiology includes reward and impulse control dysregulation. CBT-BN and fluoxetine are evidence-based treatments with good efficacy.',
      explanation: `**DSM-5 Criteria:**

A. Recurrent binge eating:
- Eating, in a discrete period, amount definitely larger than most would eat
- Sense of lack of control during episode

B. Recurrent inappropriate compensatory behaviors

C. Both occur on average ≥1/week for 3 months

D. Self-evaluation unduly influenced by body shape/weight

E. Does not occur exclusively during AN episodes

**Specifiers:**
- Severity: Mild (1-3), Moderate (4-7), Severe (8-13), Extreme (14+) episodes/week
- Remission: Partial or Full

**Epidemiology:**
- Prevalence: ~1-1.5% in young women
- Female:Male ~10:1
- Onset: Late adolescence/early adulthood
- Often normal weight

**Neurobiology:**

*Reward Processing:*
- Altered striatal response to food
- Dopamine dysregulation
- Binge eating may temporarily increase reward

*Impulse Control:*
- Prefrontal dysfunction
- Impaired inhibition
- Impulsivity trait

*Serotonin:*
- 5-HT dysregulation
- Fluoxetine efficacy suggests role
- Affects satiety signaling

*Interoception:*
- Poor hunger/satiety awareness
- Insula involvement

**Medical Complications:**

*Metabolic/Electrolyte:*
- Hypokalemia (vomiting, laxatives) - most dangerous
- Hypochloremia, metabolic alkalosis (vomiting)
- Hypomagnesemia
- Dehydration
- Pseudo-Bartter syndrome (kidney adaptation to purging)

*Cardiac:*
- Arrhythmias (from hypokalemia)
- QTc prolongation
- Cardiomyopathy (ipecac use)

*GI:*
- Parotid/salivary gland hypertrophy
- Esophagitis, Barrett's esophagus
- Mallory-Weiss tears
- Gastric rupture (rare)
- Constipation, cathartic colon

*Dental:*
- Enamel erosion (perimylolysis)
- Increased cavities
- Sensitivity

*Other:*
- Russell's sign (knuckle calluses from inducing vomiting)
- Menstrual irregularities
- Dehydration skin changes

**Treatment:**

*CBT-BN:*
- 16-20 sessions
- Phase 1: Psychoeducation, regular eating
- Phase 2: Addressing dietary rules, body checking
- Phase 3: Maintaining change, relapse prevention
- Self-monitoring with food diaries
- Cognitive restructuring
- 50-60% abstinence from binge-purge

*Pharmacotherapy:*

Fluoxetine:
- FDA-approved for BN
- 60mg (higher than depression dose)
- Reduces binge/purge 50-70%
- Can use alone or with CBT

Other SSRIs:
- May be used off-label
- Similar efficacy expected

*Other Psychotherapies:*
- IPT: Comparable to CBT long-term
- DBT: Emotion regulation focus
- Guided self-help: Accessible, effective

*NOT Recommended:*
- Bupropion (lowers seizure threshold in eating disorders)
- TCAs (cardiac risk with electrolyte abnormalities)`,
      keyTerms: [
        { term: 'Russell\'s sign', definition: 'Calluses on knuckles from inducing vomiting' },
        { term: 'perimylolysis', definition: 'Dental enamel erosion from gastric acid exposure' },
        { term: 'pseudo-Bartter syndrome', definition: 'Kidney adaptation to chronic purging with electrolyte wasting' },
        { term: 'CBT-BN', definition: 'Cognitive Behavioral Therapy for Bulimia Nervosa, gold standard treatment' },
      ],
    },
    4: {
      level: 4,
      summary: 'BN pathophysiology involves striatal reward dysfunction, prefrontal inhibitory deficits, serotonergic abnormalities, and interoceptive processing alterations. CBT-BN achieves 50-60% remission. Fluoxetine 60mg has robust efficacy. Medical management focuses on electrolyte monitoring.',
      explanation: `**Pathophysiology:**

*Reward/Motivation:*
- Altered striatal dopamine
- Food as salient reward during binge
- Post-purge relief reinforces cycle
- Anticipatory reward processing abnormal

*Executive Control:*
- Prefrontal hypofunction
- Impaired response inhibition
- Difficulty stopping binge once started
- Impulsivity as trait

*Serotonin:*
- 5-HT2C receptor involvement
- Satiety signaling impaired
- Mood regulation
- Fluoxetine mechanism

*Emotion Regulation:*
- Binge eating as coping
- Negative emotions trigger binges
- Purging reduces guilt/anxiety
- Alexithymia common

**Neuroimaging:**

*Structural:*
- Reduced prefrontal gray matter
- Striatal volume changes
- Largely normalize with recovery

*Functional:*
- Altered food cue reactivity
- Prefrontal hypoactivation during inhibition
- Insula abnormalities (interoception)

**Genetics:**

- Heritability: 50-60%
- Shared genetic factors with other eating disorders
- Overlap with impulsivity, addiction
- Candidate genes: Serotonin, dopamine related

**Treatment Details:**

*CBT-BN Mechanisms:*
- Regular eating disrupts restriction-binge cycle
- Cognitive restructuring addresses over-evaluation
- Exposure to feared foods
- Coping skill development
- Relapse prevention

*Enhanced CBT (CBT-E):*
- Transdiagnostic approach
- Addresses: Mood intolerance, perfectionism, low self-esteem, interpersonal difficulties
- Extended treatment (40 sessions) for complex cases

*Fluoxetine Details:*
- 60mg effective (not lower doses)
- Effect seen by 3 weeks
- Reduces urge to binge/purge
- Can combine with CBT (slightly additive)
- May not address core psychopathology alone

*IPT for BN:*
- Focuses on interpersonal problems maintaining BN
- Role transitions, disputes, grief, deficits
- Comparable to CBT at 1-year follow-up
- Alternative for CBT non-responders

*DBT Adaptation:*
- Emotion regulation skills
- Mindfulness
- Distress tolerance
- Interpersonal effectiveness
- Especially for comorbid BPD features

*Guided Self-Help:*
- Therapist-supported self-help manual
- Brief therapist contact
- Effective for many
- Stepped care first step

**Medical Management:**

*Monitoring:*
- Electrolytes (especially potassium)
- ECG if hypokalemia
- Dental referral
- Weight and vitals

*Electrolyte Replacement:*
- Oral potassium if possible
- IV if severe
- Monitor magnesium
- Address dehydration

*Reducing Harm:*
- Discourage purging behaviors
- Neutral mouthwash after vomiting (not brushing)
- Avoid laxatives
- Gradually reduce behaviors

**Prognosis:**

- 50-70% recover with treatment
- 20-30% chronic course
- Mortality lower than AN but elevated
- Relapse common in first year
- Long-term outcomes generally good with treatment`,
      keyTerms: [
        { term: 'response inhibition', definition: 'Ability to suppress prepotent response; impaired in BN' },
        { term: 'transdiagnostic', definition: 'Treatment addressing core features across eating disorder diagnoses' },
        { term: 'stepped care', definition: 'Starting with less intensive treatment, increasing if needed' },
        { term: 'alexithymia', definition: 'Difficulty identifying and expressing emotions' },
      ],
      clinicalNotes: 'Monitor potassium - hypokalemia is dangerous. CBT-BN or guided self-help first-line. Fluoxetine 60mg effective. Avoid bupropion and TCAs. Dental referral important. Address comorbidities. Hospitalize if medically unstable.',
    },
    5: {
      level: 5,
      summary: 'Contemporary BN research focuses on neurocircuit-based interventions, neuromodulation targeting prefrontal-striatal function, digital therapeutics for scalability, and understanding the binge-purge cycle through computational models of reward and inhibition.',
      explanation: `**Neurocircuit Models:**

*Habit and Reward:*
- Dorsal striatum: Habit formation
- Ventral striatum: Reward
- Binge eating becomes habitual
- Reduced goal-directed control

*Inhibitory Control:*
- DLPFC-striatal circuit
- Right IFG for response inhibition
- Targets for neuromodulation

*Interoceptive Processing:*
- Insula-ACC circuit
- Poor hunger/satiety signals
- Contributes to binge eating

**Computational Psychiatry:**

*Reinforcement Learning:*
- Altered reward prediction errors
- Model-free (habitual) vs. model-based (goal-directed)
- Shift toward habitual in BN

*Delay Discounting:*
- Preference for immediate reward
- Impulsivity marker
- Predicts binge eating

**Novel Treatments:**

*Neuromodulation:*

TMS:
- DLPFC stimulation
- Reduce cravings, improve inhibition
- Early evidence promising
- Protocols being optimized

tDCS:
- Prefrontal stimulation
- Reduce food cravings
- Lower cost, home-based possible
- Preliminary data

Real-time fMRI Neurofeedback:
- Train regulation of brain activity
- Target reward regions
- Research phase

*Pharmacological:*

Lisdexamfetamine:
- FDA-approved for BED
- Being studied in BN
- Dopamine/norepinephrine effects

Naltrexone:
- Opioid antagonist
- May reduce reward from binge
- Limited evidence

Topiramate:
- Reduces binge eating
- Side effects limit use
- Weight loss effect

Newer Agents:
- GLP-1 agonists (appetite effects)
- Dasotraline (triple reuptake inhibitor)
- Research ongoing

*Digital Therapeutics:*

CBT Apps:
- Smartphone-delivered CBT
- Recovery Record
- Cost-effective, accessible

Text-Based Coaching:
- Support between sessions
- Real-time intervention

VR Applications:
- Cue exposure
- Body image work
- Emerging

**Special Populations:**

*Males:*
- Underdiagnosed
- Similar psychopathology
- May emphasize muscularity
- Treatment effective

*Athletes:*
- Sport-specific pressures
- "Relative Energy Deficiency in Sport" overlap
- Multidisciplinary approach

*Bariatric Surgery Patients:*
- Pre-existing BN complicates outcomes
- Post-surgical eating disorder symptoms
- Screening and follow-up important

**Prevention:**

*Universal Programs:*
- Media literacy
- Body acceptance
- Limited evidence

*Selective/Indicated:*
- Dissonance-based prevention
- "Body Project" effective
- Target high-risk groups

**Research Priorities:**

1. Neuromodulation optimization
2. Digital therapeutic development
3. Biomarkers for treatment matching
4. Understanding chronicity
5. Prevention effectiveness
6. Male and diverse population research
7. Integration with medical care
8. Novel pharmacological targets

**Implementation Science:**

- Training therapists in CBT-BN
- Stepped care models
- Integration with primary care
- Telehealth expansion
- Reducing treatment gap`,
      keyTerms: [
        { term: 'model-based vs. model-free', definition: 'Goal-directed vs. habitual decision-making; BN shows shift to habitual' },
        { term: 'delay discounting', definition: 'Tendency to prefer smaller immediate rewards over larger delayed rewards' },
        { term: 'dissonance-based prevention', definition: 'Prevention approach creating cognitive dissonance with thin ideal' },
        { term: 'digital therapeutics', definition: 'App-based or technology-delivered treatments' },
      ],
      clinicalNotes: `Current practice:
- CBT-BN or CBT-E first-line
- Guided self-help as first step (stepped care)
- Fluoxetine 60mg effective adjunct
- Monitor electrolytes, especially potassium
- Avoid bupropion
- Dental referral

Emerging:
- TMS for treatment enhancement
- Digital/app-based CBT
- Lisdexamfetamine (for BED, studied in BN)
- Neuromodulation approaches

Key points:
- High comorbidity (depression, anxiety, substance use)
- Better prognosis than AN
- Relapse prevention important
- Address shame and secrecy
- Long-term recovery achievable`,
    },
  },

  media: [
    {
      id: 'bn-medical-complications',
      type: 'diagram',
      filename: 'bn_medical_complications.svg',
      title: 'Medical Complications of Bulimia Nervosa',
      description: 'Systems affected by purging behaviors',
    },
  ],

  citations: [
    {
      id: 'dsm-5-bn',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Feeding and Eating Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-anorexia-nervosa', targetType: 'condition', relationship: 'related', label: 'Anorexia Nervosa' },
    { targetId: 'psychiatry-binge-eating-disorder', targetType: 'condition', relationship: 'related', label: 'BED' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous', 'gastrointestinal', 'cardiovascular'],
    topics: ['psychiatry', 'eating disorders'],
    keywords: ['bulimia', 'binge eating', 'purging', 'eating disorder', 'body image'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bulimiaNervosaContent;
