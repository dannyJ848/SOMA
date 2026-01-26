import { EducationalContent } from '../types';

export const addictionBasicsContent: EducationalContent = {
  id: 'addiction-basics',
  title: 'Addiction Basics',
  category: 'Addiction Medicine',
  subcategory: 'Substance Use Disorders',
  description: 'Understanding the fundamental concepts of addiction, substance use disorders, and their impact on health',
  levels: [
    {
      level: 1,
      title: 'Introduction to Addiction',
      content: `# Introduction to Addiction

## What is Addiction?

Addiction is a chronic, treatable medical condition involving complex interactions among brain circuits, genetics, environment, and life experiences. People with addiction use substances or engage in behaviors that become compulsive and often continue despite harmful consequences.

## Key Definitions

- **Substance Use Disorder (SUD)**: A medical condition characterized by an inability to control substance use despite negative consequences
- **Addiction**: The most severe form of SUD
- **Dependence**: Physical adaptation to a substance, which can occur without addiction
- **Tolerance**: Needing more of a substance to achieve the same effect
- **Withdrawal**: Unpleasant symptoms that occur when stopping substance use

## Common Substances of Abuse

- Alcohol
- Opioids (prescription painkillers, heroin, fentanyl)
- Stimulants (cocaine, methamphetamine, ADHD medications)
- Cannabis
- Tobacco/nicotine
- Sedatives (benzodiazepines, sleeping pills)

## Important Note

Addiction is **not** a moral failing or character flaw. It is a medical condition that deserves compassion and proper treatment, just like any other health condition.`,
      keyPoints: [
        'Addiction is a chronic medical condition, not a moral failing',
        'Substance use disorder exists on a spectrum from mild to severe',
        'Brain changes from addiction can be reversed with treatment and time',
        'Genetics, environment, and life experiences all contribute to addiction risk'
      ],
      vocabulary: [
        { term: 'Addiction', definition: 'Chronic condition involving compulsive substance use despite consequences' },
        { term: 'Substance Use Disorder', definition: 'Medical diagnosis for problematic substance use' },
        { term: 'Tolerance', definition: 'Needing increasing amounts to achieve desired effect' },
        { term: 'Withdrawal', definition: 'Physical/mental symptoms when stopping substance use' }
      ]
    },
    {
      level: 2,
      title: 'The Disease Model of Addiction',
      content: `# The Disease Model of Addiction

## Understanding Addiction as a Disease

Modern medicine recognizes addiction as a chronic brain disease that affects multiple brain circuits. This understanding has evolved significantly over the past century.

### Historical Evolution

- **Early 20th century**: Addiction viewed as moral weakness
- **1930s-1950s**: Considered a character flaw or lack of willpower
- **1970s**: Beginnings of scientific understanding
- **1990s-Present**: Brain imaging and genetics reveal addiction as a brain disease

### Brain Regions Affected

1. **Reward Circuit** (Nucleus Accumbens)
   - Processes pleasure and reinforcement
   - Releases dopamine in response to rewarding activities
   - Hijacked by addictive substances

2. **Prefrontal Cortex**
   - Responsible for decision-making and impulse control
   - Becomes impaired, reducing ability to resist cravings

3. **Amygdala**
   - Processes stress and emotions
   - Contributes to withdrawal symptoms and anxiety

4. **Hippocampus**
   - Involved in memory and learning
   - Creates powerful substance-related memories

## Why "Disease" Matters

Calling addiction a disease:
- Reduces stigma and shame
- Encourages people to seek help
- Promotes evidence-based treatments
- Validates the need for medical care
- Supports insurance coverage for treatment

## Comparison to Other Chronic Diseases

| Condition | Nature | Recovery Approach | Relapse Rates |
|-----------|--------|-------------------|---------------|
| Addiction | Chronic brain disease | Ongoing management | 40-60% |
| Type 2 Diabetes | Metabolic disease | Lifestyle + medication | 30-50% |
| Hypertension | Cardiovascular condition | Ongoing treatment | 50-70% |
| Asthma | Respiratory condition | Maintenance therapy | 50-60% |

All these conditions require ongoing management and can have periods of relapse.`,
      keyPoints: [
        'Addiction affects multiple brain circuits including reward, decision-making, and stress systems',
        'The disease model reduces stigma and promotes evidence-based treatment',
        'Like other chronic diseases, addiction requires ongoing management',
        'Relapse is common and part of the recovery process, not treatment failure'
      ],
      vocabulary: [
        { term: 'Disease Model', definition: 'Framework understanding addiction as a chronic medical condition' },
        { term: 'Neuroadaptation', definition: 'Brain changes in response to repeated substance exposure' },
        { term: 'Prefrontal Cortex', definition: 'Brain region responsible for executive function and impulse control' },
        { term: 'Nucleus Accumbens', definition: 'Key brain region in the reward circuit' }
      ]
    },
    {
      level: 3,
      title: 'Neurobiology of Addiction',
      content: `# Neurobiology of Addiction

## The Brain's Reward System

### Dopamine: The Reward Molecule

The brain's reward system is based on dopamine signaling:

\`\`\`
Natural Rewards → 2x dopamine release
─────┬─────
     ├── Food when hungry
     ├── Social connection
     ├── Sex
     └── Achievement

Addictive Substances → 10x+ dopamine release
─────┬─────
     ├── Alcohol: 2-3x
     ├── Nicotine: 2-3x
     ├── Cocaine: 5-10x
     ├── Methamphetamine: 10-12x
     └── Amphetamines: 10-12x
\`\`\`

### The Reward Circuit Pathway

1. **Ventral Tegmental Area (VTA)**
   - Produces dopamine
   - Activated by rewarding stimuli

2. **Nucleus Accumbens**
   - Receives dopamine signal
   - Creates pleasure/reinforcement
   - "Go" signal for behavior

3. **Prefrontal Cortex**
   - Weighs consequences
   - Makes decisions
   - "Stop" signal (impaired in addiction)

## Mechanisms of Addiction

### 1. Sensitization

Initial substance use may cause:
- Enhanced response to substance
- Increased sensitivity to cues
- Stronger cravings over time

### 2. Tolerance

With repeated use:
- Reduced response to same dose
- Need higher amounts for effect
- Brain adapts to substance presence

### 3. Withdrawal

When substance use stops:
- Opposite of substance effects
- Negative emotional state
- Physical discomfort
- Drives use to relieve symptoms

### 4. Incentive Sensitization

- Cues become powerful triggers
- Environmental reminders activate cravings
- "Wanting" increases even if "liking" decreases

## Neurotransmitter Systems

### Dopamine
- Primary reward signal
- Reinforces behaviors
- Motivates goal-directed action

### Glutamate
- Learning and memory
- Creates cue associations
- Drives habit formation

### GABA
- Inhibitory neurotransmitter
- Reduced in addiction
- Contributes to anxiety

### Serotonin
- Mood regulation
- Impulse control
- Often disrupted in addiction

### Endogenous Opioids
- Natural pain relief
- Pleasure and reward
- Target of opioid drugs

## Brain Changes in Addiction

| Brain Change | Effect | Recovery Timeline |
|--------------|--------|-------------------|
| Receptor downregulation | Reduced natural pleasure | Weeks to months |
| Prefrontal impairment | Poor impulse control | Months to years |
| Stress system activation | Anxiety, irritability | Months |
| Memory consolidation | Powerful triggers | Can be permanent |
| Neuroinflammation | Brain cell damage | Weeks to months`,

      keyPoints: [
        'Addictive substances cause 5-10x more dopamine release than natural rewards',
        'The brain undergoes neuroadaptation in response to repeated substance exposure',
        'Multiple neurotransmitter systems are involved, not just dopamine',
        'Brain changes from addiction can persist long after stopping use'
      ],
      vocabulary: [
        { term: 'Dopamine', definition: 'Neurotransmitter central to reward and motivation' },
        { term: 'Ventral Tegmental Area', definition: 'Brain region that produces dopamine' },
        { term: 'Incentive Sensitization', definition: 'Heightened response to drug-related cues' },
        { term: 'Neuroadaptation', definition: 'Brain changes in response to repeated substance exposure' }
      ]
    },
    {
      level: 4,
      title: 'Risk Factors and Assessment',
      content: `# Risk Factors and Assessment

## Risk Factors for Addiction

### Biological Factors

**Genetics (40-60% of risk)**
- Family history of SUD
- Specific gene variants (ADH1B, ALDH2, OPRM1)
- Co-occurring mental health conditions
- Temperament traits (impulsivity, sensation-seeking)

**Physiological Factors**
- Age of first use (earlier = higher risk)
- Route of administration (faster onset = higher addiction potential)
- Sex differences (females progress faster, called "telescoping")

### Environmental Factors

**Family Environment**
- Parental substance use
- Childhood trauma/ACEs
- Lack of parental supervision
- Family conflict

**Social Environment**
- Peer substance use
- Social norms around use
- Availability of substances
- Community disorganization

**Socioeconomic Factors**
- Poverty
- Unemployment
- Lack of opportunity
- Housing instability

### Psychological Factors

- Trauma history
- Mental health disorders
- Poor coping skills
- Academic/work difficulties
- Low self-esteem

## Adverse Childhood Experiences (ACEs)

Each ACE increases addiction risk:

\`\`\`
ACE Score → SUD Risk
────────────────────
0          → Baseline risk
1          → 2-3x increased
2          → 4-5x increased
3          → 5-7x increased
4+         → 7-10x increased
\`\`\`

**ACEs include:**
- Physical, emotional, sexual abuse
- Physical/emotional neglect
- Household dysfunction (mental illness, incarceration, substance use, divorce)

## Assessment Tools

### Screening Instruments

**AUDIT (Alcohol Use Disorders Identification Test)**
- 10-item questionnaire
- Screens for hazardous drinking
- Scores 8+ indicate likely AUD

**DAST (Drug Abuse Screening Test)**
- 10 or 20-item versions
- Screens for drug use problems
- Scores 6+ indicate significant issues

**ASSIST (Alcohol, Smoking and Substance Involvement Screening Test)**
- WHO-developed
- Covers all substance classes
- Identifies risk level

### Diagnostic Assessment

**DSM-5 Diagnostic Criteria for SUD**

A substance use disorder is diagnosed if **2 or more** criteria occur within a 12-month period:

1. Impaired control
   - Using more/longer than intended
   - Unsuccessful efforts to cut down
   - Excessive time obtaining/using/recovering
   - Craving

2. Social impairment
   - Failure to fulfill obligations
   - Continued use despite interpersonal problems
   - Important activities given up

3. Risky use
   - Physical hazards
   - Continued use despite physical/psychological problems

4. Pharmacological criteria
   - Tolerance
   - Withdrawal

**Severity Specifier:**
- Mild: 2-3 criteria
- Moderate: 4-5 criteria
- Severe: 6+ criteria

## Comprehensive Assessment Components

### 1. Substance Use History
- Age of first use
- Pattern of use (frequency, amount)
- Route of administration
- Previous quit attempts
- Withdrawal history
- Consequences of use

### 2. Medical History
- Current health problems
- Previous overdoses
- Infectious disease risk
- Medicication interactions
- Pregnancy status

### 3. Psychiatric History
- Current mental health symptoms
- Previous diagnoses
- Psychiatric hospitalizations
- Suicide attempts
- Trauma history

### 4. Social History
- Living situation
- Employment/school status
- Legal problems
- Social support
- Family involvement

### 5. Physical Examination
- Vital signs
- Appearance and hygiene
- Signs of intoxication/withdrawal
- Evidence of injection drug use
- Organ system damage

## Laboratory Assessment

**Screening Tests**
- Urine drug screen
- Blood alcohol level
- Liver function tests
- Complete blood count
- Infectious disease screening (HIV, Hepatitis B/C)

**Monitoring Tests**
- Carbohydrate-deficient transferrin (CDT) - alcohol
- Phosphatidylethanol (PEth) - alcohol
- GGT - alcohol use
- Fentanyl testing`,

      keyPoints: [
        'Genetics account for 40-60% of addiction risk, but environment plays a crucial role',
        'Adverse childhood experiences dramatically increase SUD risk',
        'DSM-5 diagnoses SUD based on 11 criteria grouped into 4 categories',
        'Comprehensive assessment includes medical, psychiatric, and social evaluation'
      ],
      vocabulary: [
        { term: 'ACE Score', definition: 'Count of adverse childhood experiences, predicting health outcomes' },
        { term: 'Telescoping', definition: 'Faster progression from first use to addiction in females' },
        { term: 'Craving', definition: 'Intense desire to use a substance' },
        { term: 'Tolerance', definition: 'Needing increased amounts to achieve desired effect' }
      ]
    },
    {
      level: 5,
      title: 'Treatment Principles and Recovery',
      content: `# Treatment Principles and Recovery

## Core Principles of Effective Treatment

### 1. Addiction is a Complex but Treatable Disease

- Multiple treatment approaches are effective
- No single treatment is appropriate for everyone
- Treatment needs to be readily available
- Effective treatment addresses multiple needs

### 2. Remaining in Treatment is Critical

**Retention predictors:**
- Therapeutic alliance
- Low barriers to entry
- Comprehensive services
- Social support
- Motivation enhancement

**Average treatment duration:**
- Detoxification: 3-7 days
- Short-term residential: 30-90 days
- Long-term residential: 6-12 months
- Outpatient: 3-12 months
- Maintenance: Indefinitely (for some)

### 3. Behavioral Therapies and Medications Are Effective

**Evidence-based behavioral therapies:**
- Cognitive Behavioral Therapy (CBT)
- Motivational Enhancement Therapy (MET)
- Contingency Management
- 12-Step Facilitation
- Family Behavior Therapy
- Community Reinforcement Approach

**FDA-approved medications:**
- Alcohol: Naltrexone, Acamprosate, Disulfiram
- Opioids: Methadone, Buprenorphine, Naltrexone
- Tobacco: Varenicline, Bupropion, NRT

### 4. Treatment Must Address Co-occurring Disorders

- 50-75% of SUD patients have co-occurring mental illness
- Integrated treatment is most effective
- Both disorders should be treated simultaneously
- Psychiatric medication may be necessary

### 5. Recovery is a Long-term Process

**Stages of Change (Prochaska & DiClemente):**

\`\`\`
Precontemplation
    ↓ (Awareness)
Contemplation
    ↓ (Decision)
Preparation
    ↓ (Action)
Action
    ↓ (Maintenance)
Maintenance
    └─→ Relapse (can occur at any stage, return to previous stage)
\`\`\`

## Treatment Settings

### Level of Care Determination (ASAM Criteria)

**Level 0.5 - Early Intervention**
- Screening and brief intervention
- For at-risk or problem use

**Level I - Outpatient Services**
- <9 hours/week
- For stable patients with good support

**Level II - Intensive Outpatient/Partial Hospitalization**
- 9-20 hours/week (IOP)
- 20+ hours/week (PHP)
- Step-down from residential or alternative to inpatient

**Level III - Residential/Inpatient Services**
- 24/7 care
- For severe SUD or unstable environment
- III.5: Long-term residential (6-12 months)

**Level IV - Medically Managed Intensive Inpatient**
- Hospital-based care
- 24/7 nursing and medical care
- For withdrawal management, co-occurring medical/psychiatric conditions

## Medication-Assisted Treatment (MAT)

### Opioid Use Disorder

**Methadone**
- Full opioid agonist
- Prevents withdrawal and cravings
- Daily dispensing required
- Proven efficacy, reduces mortality 50%+

**Buprenorphine**
- Partial opioid agonist
- Can be prescribed in office
- Ceiling effect on respiratory depression
- Effective, flexible treatment

**Naltrexone**
- Opioid antagonist
- Blocks opioid effects
- Must be opioid-free for 7-10 days first
- Monthly injection or daily pill

### Alcohol Use Disorder

**Naltrexone**
- Reduces heavy drinking
- Decreases cravings
- Monthly injection or daily pill

**Acamprosate**
- Maintains abstinence
- Reduces post-acute withdrawal
- Three times daily dosing

**Disulfiram**
- Creates unpleasant reaction to alcohol
- Deterrent-based approach
- Requires motivation

## Recovery Support Services

### Peer Support

- 12-Step programs (AA, NA)
- SMART Recovery
- Recovery coaches
- Peer support specialists
- Recovery community centers

### Recovery-Oriented Systems of Care

- Housing assistance
- Employment services
- Family education
- Legal services
- Childcare support
- Healthcare navigation

## Relapse Prevention

### Relapse is Common

- 40-60% relapse rate within first year
- Similar to other chronic diseases
- Not a sign of treatment failure
- Opportunity for learning

### Relapse Warning Signs

**Emotional (early)**
- Anxiety, irritability, mood swings
- Poor self-care
- Social withdrawal

**Mental (middle)**
- Cravings
- Thinking about use
- Planning how to use
- Minimizing consequences

**Physical (late)**
- Actually using substances
- Loss of control

### Coping Strategies

- HALT: Hungry, Angry, Lonely, Tired?
- Play the tape through
- Call for support
- Use coping skills learned in treatment
- Remove triggers from environment

## Special Populations

### Adolescents

- Brain still developing
- Family involvement critical
- School-based interventions effective
- Longer treatment duration may be needed

### Pregnant Women

- Priority for treatment access
- Medication considerations (methadone/buprenorphine preferred)
- Coordination with prenatal care
- Child protective services often involved

### Older Adults

- Age-related metabolism changes
- Multiple medications (interactions)
- Co-occurring medical conditions
- Stigma barriers

### Veterans

- High rates of co-occurring PTSD
- VA and community resources
- Trauma-informed care essential

## Prognosis

### Positive Prognostic Factors

- Motivated for change
- Good social support
- Stable housing/employment
- No severe co-occurring disorders
- Previous successful abstinence periods
- Family involvement

### Recovery Outcomes

- 5+ years in recovery: 85% maintain abstinence
- MAT reduces mortality by 50%+
- Treatment is cost-effective (saves $4-7 per $1 spent)
- Quality of life significantly improves in recovery

### Measuring Recovery

**Recovery Capital:**
- Physical (health, energy)
- Human (knowledge, skills)
- Social (support networks)
- Cultural (beliefs, values)

**Multiple pathways to recovery:**
- Abstinence-based
- Harm reduction
- Medication-assisted
- Faith-based
- Cultural approaches

All valid approaches should be supported and respected.`,

      keyPoints: [
        'Effective treatment addresses multiple needs and should be readily available',
        'Medication-assisted treatment combined with behavioral therapy is gold standard for OUD and AUD',
        'Relapse is common but not a sign of treatment failure',
        'Recovery is a long-term process requiring ongoing support and multiple types of care'
      ],
      vocabulary: [
        { term: 'Motivational Enhancement', definition: 'Client-centered counseling to strengthen motivation' },
        { term: 'Recovery Capital', definition: 'Resources available to support recovery journey' },
        { term: 'MAT', definition: 'Medication-Assisted Treatment, combining medications with counseling' },
        { term: 'ASAM Criteria', definition: 'Guidelines for determining appropriate level of care' }
      ]
    }
  ]
};
