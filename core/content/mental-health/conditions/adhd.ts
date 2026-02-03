/**
 * ADHD - Patient Education Content
 *
 * Comprehensive education about Attention-Deficit/Hyperactivity Disorder
 * including symptoms, diagnosis, and treatment approaches.
 */

import { EducationalContent } from '../../types';

export const adhdContent: EducationalContent = {
  id: 'mental-health-adhd',
  type: 'condition',
  name: 'Attention-Deficit/Hyperactivity Disorder',
  alternateNames: ['ADHD', 'ADD', 'Attention Deficit Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'ADHD is a brain condition that makes it hard to focus, control impulses, and sit still. It is very common and very treatable with medication and strategies.',
      explanation: `**What Is ADHD?**

ADHD (Attention-Deficit/Hyperactivity Disorder) is a condition that affects how the brain manages attention, activity, and impulses. It is not about being lazy or not trying hard enough - it is about how the brain works.

**Three Types of ADHD:**

**Inattentive Type (used to be called ADD):**
- Hard to focus on details
- Easily distracted
- Forgetting things
- Trouble organizing tasks
- Losing things frequently
- Not seeming to listen

**Hyperactive-Impulsive Type:**
- Feeling restless, fidgeting
- Talking a lot
- Acting without thinking
- Difficulty waiting your turn
- Interrupting others
- Hard to sit still

**Combined Type:**
- Has both inattentive and hyperactive-impulsive symptoms

**Important Facts:**

- ADHD is NOT a character flaw or laziness
- It is caused by differences in brain development
- About 5-7% of children and 2-5% of adults have ADHD
- It often runs in families
- Many successful people have ADHD
- Treatment can make a big difference

**How ADHD Affects Life:**
- School and work performance
- Relationships
- Self-esteem
- Daily tasks and organization

**Treatment Options:**

- **Medication**: Helps the brain focus and control impulses
- **Therapy and coaching**: Teaches strategies to manage symptoms
- **Lifestyle changes**: Exercise, sleep, organization systems
- **School/work accommodations**: Extra time, quiet spaces

ADHD is very treatable. With the right support, people with ADHD can thrive.`,
      keyTerms: [
        { term: 'ADHD', definition: 'A brain condition that affects attention, activity level, and impulse control' },
        { term: 'inattentive', definition: 'Having difficulty focusing and staying on task' },
        { term: 'hyperactive', definition: 'Being overly active and having trouble sitting still' },
        { term: 'impulsive', definition: 'Acting quickly without thinking about consequences' },
      ],
      analogies: [
        'ADHD is like having a brain with a Ferrari engine but bicycle brakes.',
        'Attention in ADHD is like a TV that keeps changing channels on its own.',
        'Medication helps tune the brain to the right channel and keep it there.',
      ],
      examples: [
        'A student with ADHD might know the material but make careless mistakes on tests because of rushing.',
        'Someone with ADHD might start many projects but have trouble finishing them.',
        'A person with hyperactive ADHD might feel like they have a motor running inside them.',
      ],
    },
    2: {
      level: 2,
      summary: 'ADHD involves deficits in executive function affecting attention, impulse control, and activity regulation. Diagnosis requires symptoms before age 12 across multiple settings. First-line treatment includes stimulant medication and behavioral interventions.',
      explanation: `**Understanding ADHD:**

ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning. It reflects differences in brain development, particularly in areas controlling executive function.

**Symptom Domains:**

**Inattention:**
- Fails to give close attention, makes careless mistakes
- Difficulty sustaining attention
- Does not seem to listen when spoken to directly
- Does not follow through on instructions
- Difficulty organizing tasks and activities
- Avoids tasks requiring sustained mental effort
- Loses things necessary for tasks
- Easily distracted by extraneous stimuli
- Forgetful in daily activities

**Hyperactivity-Impulsivity:**
- Fidgets or squirms
- Leaves seat when expected to remain seated
- Runs or climbs inappropriately (restlessness in adults)
- Unable to engage in leisure activities quietly
- "On the go" or "driven by a motor"
- Talks excessively
- Blurts out answers
- Difficulty waiting turn
- Interrupts or intrudes on others

**Diagnostic Requirements:**
- 6+ symptoms in either domain (5+ for adults)
- Present before age 12
- Present in 2+ settings (home, school, work)
- Clear evidence of impairment
- Not better explained by another disorder

**Presentations:**
- Combined presentation
- Predominantly inattentive presentation
- Predominantly hyperactive-impulsive presentation

**Causes:**
- Highly heritable (70-80%)
- Brain development differences
- Dopamine and norepinephrine regulation
- Environmental factors (prenatal exposure, early adversity)

**Treatment Approaches:**

**Medications:**
*Stimulants (First-Line):*
- Methylphenidate (Ritalin, Concerta)
- Amphetamines (Adderall, Vyvanse)
- 70-80% response rate
- Improve focus, impulse control

*Non-Stimulants:*
- Atomoxetine (Strattera)
- Guanfacine (Intuniv)
- Viloxazine (Qelbree)
- For those who cannot take stimulants

**Behavioral Interventions:**
- Organizational skills training
- Cognitive behavioral therapy
- Parent training (for children)
- Academic accommodations

**Lifestyle:**
- Regular exercise
- Adequate sleep
- Structured routines
- Minimizing distractions`,
      keyTerms: [
        { term: 'executive function', definition: 'Brain processes that help with planning, focus, and self-control' },
        { term: 'stimulant medication', definition: 'Medications that increase dopamine and norepinephrine to improve focus' },
        { term: 'methylphenidate', definition: 'A commonly prescribed stimulant medication for ADHD' },
        { term: 'atomoxetine', definition: 'A non-stimulant ADHD medication' },
        { term: 'neurodevelopmental', definition: 'Related to how the brain develops from childhood' },
      ],
      analogies: [
        'Executive function is like the brain\'s air traffic controller - in ADHD, it has trouble managing all the planes.',
        'Stimulant medication in ADHD is counterintuitive - it calms by helping the brain regulate itself better.',
      ],
    },
    3: {
      level: 3,
      summary: 'ADHD involves prefrontal cortex dysfunction and catecholamine dysregulation affecting executive function. DSM-5 criteria require 6+ symptoms before age 12 with impairment in multiple settings. First-line treatment: stimulants (methylphenidate, amphetamines); non-stimulants for specific cases.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Inattention (6+/5+ symptoms for 6+ months):**
1. Fails to give close attention, careless mistakes
2. Difficulty sustaining attention
3. Does not seem to listen
4. Fails to follow through/finish tasks
5. Difficulty organizing
6. Avoids tasks requiring sustained mental effort
7. Loses things
8. Easily distracted
9. Forgetful in daily activities

**Hyperactivity-Impulsivity (6+/5+ symptoms for 6+ months):**
1. Fidgets or squirms
2. Leaves seat inappropriately
3. Runs/climbs inappropriately (restlessness)
4. Unable to engage quietly
5. "On the go" / "driven by motor"
6. Talks excessively
7. Blurts out answers
8. Difficulty waiting turn
9. Interrupts or intrudes

**Additional Criteria:**
- Several symptoms present before age 12
- Symptoms in 2+ settings
- Clear impairment in functioning
- Not better explained by another disorder

**Severity:** Mild, Moderate, Severe

**Neurobiological Basis:**

*Prefrontal Cortex:*
- Hypoactivation
- Controls executive functions
- Matures later in ADHD

*Dopamine System:*
- Dopamine transporter (DAT) increased
- Reduced dopamine signaling
- Target of stimulant medications

*Norepinephrine System:*
- Involved in attention and arousal
- Target of atomoxetine, guanfacine

*Structural Findings:*
- Reduced prefrontal cortex volume
- Delayed cortical maturation
- Basal ganglia differences

**Pharmacological Treatment:**

*Stimulants:*

Methylphenidate formulations:
- Immediate release: Ritalin (3-4 hours)
- Extended release: Concerta, Ritalin LA (8-12 hours)
- Mechanism: Blocks dopamine and norepinephrine reuptake

Amphetamine formulations:
- Mixed amphetamine salts: Adderall, Adderall XR
- Lisdexamfetamine: Vyvanse (prodrug)
- Mechanism: Releases dopamine and norepinephrine

*Non-Stimulants:*
- Atomoxetine: NE reuptake inhibitor, 4-6 weeks onset
- Guanfacine ER: Alpha-2A agonist, helps impulsivity
- Viloxazine ER: NE modulator, newer option
- Bupropion: Off-label, DA/NE reuptake inhibitor

*Monitoring:*
- Height, weight, vital signs
- Cardiovascular assessment
- Side effects: Appetite, sleep, mood

**Comorbidities:**
- Learning disabilities (30-50%)
- Oppositional defiant disorder
- Anxiety disorders
- Depression
- Substance use disorders
- Autism spectrum disorder`,
      keyTerms: [
        { term: 'dopamine transporter', definition: 'Protein that removes dopamine from synapse, blocked by stimulants' },
        { term: 'prodrug', definition: 'Inactive medication converted to active form in body (like Vyvanse)' },
        { term: 'alpha-2A agonist', definition: 'Mechanism of guanfacine, reduces norepinephrine release' },
        { term: 'delayed cortical maturation', definition: 'Prefrontal cortex develops later in ADHD' },
        { term: 'executive dysfunction', definition: 'Impairment in planning, organization, impulse control' },
      ],
      clinicalNotes: 'Obtain baseline vital signs before starting stimulants. Consider cardiac evaluation if family history of sudden death. Screen for substance use before prescribing stimulants. Address comorbidities. Extended-release formulations improve adherence.',
    },
    4: {
      level: 4,
      summary: 'ADHD pathophysiology involves prefrontal-striatal-cerebellar circuit dysfunction, dopamine transporter upregulation, and delayed cortical maturation. Stimulants work by optimizing catecholamine signaling. Treatment selection considers comorbidities, substance use risk, and individual response patterns.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Architecture:*
- Heritability: 70-80%
- Polygenic (many genes, small effects)
- Key genes: DAT1 (SLC6A3), DRD4, DRD5
- GWAS: FOXP2, DUSP6, and others
- Shared genetic risk with other disorders

*Catecholamine Hypothesis:*
- Dopamine: Hypofunction in prefrontal cortex
- Norepinephrine: Involved in attention, arousal
- Optimal catecholamine levels follow inverted-U curve
- Stimulants optimize signaling, not simply increase it

*Neural Circuits:*

Prefrontal Cortex:
- Executive function hub
- Hypoactivation in ADHD
- Delayed maturation (3-5 year lag)
- Target of stimulant effects

Striatum:
- Reward processing
- Dopamine transporter density increased
- Reduced reward sensitivity
- Delay aversion

Cerebellum:
- Timing and motor coordination
- Reduced volume in ADHD
- Contributes to time perception deficits

Default Mode Network:
- Normally suppressed during tasks
- Intrusion during tasks in ADHD
- Correlates with inattention
- Mind-wandering

*Developmental Trajectory:*
- Symptoms often improve through adolescence
- Hyperactivity decreases more than inattention
- 50-70% continue to have symptoms as adults
- Cortical thickness normalizes but lag persists

**Pharmacology Deep Dive:**

*Methylphenidate:*
- Blocks DAT and NET
- Increases extracellular DA and NE
- PFC effects at therapeutic doses
- Duration varies by formulation

*Amphetamines:*
- Block DAT and NET
- Reverse transport (release DA/NE)
- Inhibit MAO
- Generally more potent than methylphenidate
- Lisdexamfetamine: Prodrug (lysine + d-amphetamine)

*Atomoxetine:*
- Selective NET inhibitor
- Increases DA in PFC (via NET)
- No direct striatal DA effects
- Lower abuse potential
- 4-6 week onset

*Guanfacine:*
- Alpha-2A adrenergic agonist
- Strengthens PFC network connectivity
- Reduces norepinephrine release
- Helps impulsivity, working memory

**Treatment Algorithm:**

*Children/Adolescents:*
1. Stimulant (methylphenidate or amphetamine)
2. If inadequate: Try other stimulant class
3. Non-stimulant if stimulants contraindicated/failed
4. Combination strategies

*Adults:*
1. Stimulant (often amphetamine preferred)
2. Switch within or between classes
3. Non-stimulant options
4. Address comorbidities

*Special Considerations:*
- Substance use: Consider non-stimulants, lisdexamfetamine
- Anxiety comorbidity: May worsen initially
- Tic disorders: Monitor, may not worsen
- Cardiovascular: Screen, monitor

**Adult ADHD:**

*Presentation Differences:*
- Less hyperactivity, more restlessness
- Inattention and disorganization prominent
- Emotional dysregulation common
- Impairment in work, relationships, finances

*Diagnosis Challenges:*
- Retrospective symptom assessment
- Comorbidity high
- Symptom overlap with other conditions
- Collateral information helpful`,
      keyTerms: [
        { term: 'inverted-U curve', definition: 'Concept that optimal performance requires optimal (not maximum) catecholamine levels' },
        { term: 'delay aversion', definition: 'Preference for smaller immediate rewards over larger delayed rewards in ADHD' },
        { term: 'default mode network intrusion', definition: 'Mind-wandering network activating during tasks, contributing to inattention' },
        { term: 'emotional dysregulation', definition: 'Difficulty managing emotional responses, common in ADHD' },
        { term: 'NET', definition: 'Norepinephrine transporter, blocked by atomoxetine and stimulants' },
      ],
      clinicalNotes: 'Response to one stimulant class does not predict response to other. Trial of both methylphenidate and amphetamine classes recommended before declaring stimulant failure. Monitor for diversion, especially in college populations. Address sleep, which is commonly disrupted in ADHD.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ADHD research explores neuroimaging biomarkers, digital phenotyping, and precision medicine approaches. Novel therapeutics target glutamate and other systems. Computational models characterize decision-making and delay discounting abnormalities. Lifespan approaches address adult ADHD and late-life transitions.',
      explanation: `**Translational Neuroscience:**

*Neuroimaging Developments:*
- Functional connectivity analyses
- Default mode network findings
- Delayed cortical maturation replicated
- Machine learning for diagnosis (research)
- Not yet clinically validated

*Computational Phenotyping:*
- Delay discounting tasks
- Reinforcement learning models
- Signal detection approaches
- Drift diffusion modeling
- Characterizing decision processes

*Biomarker Research:*
- EEG: Theta/beta ratio (controversial)
- Neuroimaging patterns
- Cognitive task performance
- Actigraphy data
- No FDA-approved biomarkers

**Novel Therapeutic Directions:**

*Glutamate System:*
- Memantine studies
- Fasoracetam (mGluR agonist)
- Mixed results to date

*Triple Reuptake Inhibitors:*
- Block DA, NE, and 5-HT
- Under investigation

*Digital Therapeutics:*
- EndeavorRx: FDA-approved video game
- Attention training
- Adjunctive use
- Cognitive training platforms

*Chronotherapy:*
- Circadian rhythm interventions
- Light therapy
- Melatonin for sleep
- Delayed sleep phase common

**Precision Medicine:**

*Pharmacogenomics:*
- CYP2D6 for atomoxetine
- COMT, DAT1 for stimulant response
- Limited clinical utility currently
- Research in progress

*Treatment Matching:*
- Comorbidity profiles
- Side effect susceptibility
- Abuse risk assessment
- Cognitive phenotypes

*Digital Assessment:*
- Continuous performance tests
- Virtual reality environments
- Ecological momentary assessment
- Actigraphy

**Lifespan Perspectives:**

*Late-Diagnosed Adults:*
- Often present after child diagnosed
- Years of compensatory strategies
- Comorbid mood and anxiety
- Validation and treatment help

*ADHD and Aging:*
- Limited research on elderly
- Medication considerations
- Cognitive decline differentiation
- Emerging area of study

*Women and ADHD:*
- Often underdiagnosed
- More inattentive presentation
- Hormonal influences (menstrual cycle, menopause)
- Greater internalization

**Comorbidity Management:**

*ADHD + Anxiety:*
- Treat ADHD first if primary
- Stimulants may transiently worsen anxiety
- Non-stimulants often better tolerated
- Combined treatment often needed

*ADHD + Depression:*
- Bupropion may address both
- Treat depression first if severe
- Stimulants help if ADHD-driven mood symptoms

*ADHD + Substance Use:*
- Stimulants do not increase SUDs (may protect)
- Lisdexamfetamine: Lower abuse liability
- Non-stimulants if active misuse
- Treat both conditions

**Implementation Science:**

*Medication Adherence:*
- Long-acting formulations
- Habit integration
- School-based administration
- Digital reminders

*Psychosocial Integration:*
- Skills training (organization, time management)
- Coaching models
- Workplace accommodations
- Support groups

*School/Educational:*
- IEPs and 504 plans
- Evidence-based classroom strategies
- Teacher training
- Parent collaboration`,
      keyTerms: [
        { term: 'EndeavorRx', definition: 'FDA-approved video game-based digital therapeutic for pediatric ADHD' },
        { term: 'delay discounting', definition: 'Preference for immediate smaller rewards, quantified in ADHD research' },
        { term: 'drift diffusion model', definition: 'Computational model of decision-making processes' },
        { term: 'ecological momentary assessment', definition: 'Real-time symptom monitoring via smartphones' },
        { term: 'theta/beta ratio', definition: 'EEG measure studied as potential ADHD biomarker' },
      ],
      clinicalNotes: `Current best practices:
- Stimulants remain first-line
- Trial both MPH and amphetamine classes
- Long-acting formulations for adherence
- Address comorbidities
- Multimodal treatment optimal

Emerging areas:
- Digital therapeutics adjunctive
- Precision medicine approaches
- Adult and lifespan ADHD
- Women's ADHD recognition

Key challenges:
- Diversion and misuse concerns
- Transition from pediatric to adult care
- Late diagnosis in adults
- Comorbidity management`,
    },
  },

  media: [
    {
      id: 'adhd-symptoms-diagram',
      type: 'diagram',
      filename: 'adhd_symptoms.svg',
      title: 'ADHD Symptom Types',
      description: 'Visual overview of inattentive, hyperactive, and impulsive symptoms',
    },
  ],

  citations: [
    {
      id: 'dsm5-adhd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Neurodevelopmental Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'neurodevelopmental'],
    keywords: ['ADHD', 'attention', 'hyperactivity', 'stimulants', 'executive function'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adhdContent;
