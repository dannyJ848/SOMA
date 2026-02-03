import { EducationalContent } from '../types';

export const alcoholUseDisorderContent: EducationalContent = {
  id: 'alcohol-use-disorder',
  title: 'Alcohol Use Disorder',
  category: 'Addiction Medicine',
  subcategory: 'Substance Use Disorders',
  description: 'Understanding alcohol use disorder, its effects on health, and evidence-based treatment approaches',
  levels: [
    {
      level: 1,
      title: 'Understanding Alcohol Use Disorder',
      content: `# Understanding Alcohol Use Disorder

## What is Alcohol Use Disorder (AUD)?

Alcohol Use Disorder is a medical condition characterized by an impaired ability to stop or control alcohol use despite adverse social, occupational, or health consequences. It ranges from mild to severe and can affect anyone regardless of age, gender, or background.

## What is Alcohol?

Alcohol (ethanol) is a depressant substance that:
- Slows down brain function and central nervous system activity
- Is legal for adults 21+ in the United States
- Is the most commonly used addictive substance in America
- Causes approximately 95,000 deaths annually in the US

## Why is Alcohol Problematic?

Alcohol affects the body in multiple ways:
- **Brain**: Alters judgment, coordination, and mood
- **Liver**: Causes inflammation, fatty liver, and cirrhosis
- **Heart**: Increases blood pressure and risk of heart disease
- **Digestive system**: Damages the stomach and pancreas
- **Immune system**: Weakens the body's ability to fight infection

## What Problematic Alcohol Use Looks Like

Signs that alcohol use may be a problem:
- Drinking more or longer than intended
- Unsuccessful attempts to cut down or stop
- Spending a lot of time drinking or recovering from drinking
- Craving alcohol when not drinking
- Drinking interferes with work, school, or relationships
- Continuing to drink despite physical or psychological problems
- Needing more alcohol to feel the same effects (tolerance)
- Experiencing withdrawal symptoms when stopping

## Statistics

- **14.5 million** Americans have AUD
- Only about **7%** receive treatment
- **88,000** deaths annually from alcohol-related causes
- **1 in 10** deaths among working-age adults is alcohol-related

## Good News

AUD is treatable, and people recover every day. Evidence-based treatments including medications, behavioral therapies, and support groups help people achieve and maintain recovery.`,
      keyPoints: [
        'Alcohol Use Disorder is a medical condition, not a character flaw',
        'AUD affects millions of Americans but most do not receive treatment',
        'Problematic alcohol use affects multiple organ systems',
        'Evidence-based treatments are available and effective'
      ],
      vocabulary: [
        { term: 'Alcohol Use Disorder', definition: 'Medical diagnosis for problematic alcohol use causing impairment or distress' },
        { term: 'Tolerance', definition: 'Needing more alcohol to achieve desired effects' },
        { term: 'Withdrawal', definition: 'Unpleasant symptoms when stopping alcohol use' },
        { term: 'Craving', definition: 'Strong urge or desire to drink alcohol' }
      ]
    },
    {
      level: 2,
      title: 'Effects of Alcohol on the Body',
      content: `# Effects of Alcohol on the Body

## Short-Term Effects

### Immediate Effects (Intoxication)

**Blood Alcohol Concentration (BAC) Effects:**

| BAC Level | Effects |
|-----------|---------|
| 0.02% | Mild relaxation, slight impairment |
| 0.05% | Lowered inhibition, mild impairment |
| 0.08% | Legal driving limit, significant impairment |
| 0.10% | Slurred speech, impaired coordination |
| 0.15% | Severe impairment, possible blackouts |
| 0.20%+ | Danger of alcohol poisoning, possible coma |
| 0.35%+ | Potential fatal overdose |

**Short-term health effects:**
- Impaired judgment and decision-making
- Slowed reaction time and coordination
- Memory blackouts
- Nausea and vomiting
- Headaches and dehydration
- Risky behaviors (driving, unprotected sex)

## Long-Term Effects by Body System

### Brain and Nervous System

**Cognitive Effects:**
- Memory problems
- Difficulty learning new information
- Reduced attention span
- Poor decision-making
- Wernicke-Korsakoff syndrome (wet brain)

**Psychological Effects:**
- Increased risk of depression
- Worsening anxiety
- Sleep disturbances
- Increased suicide risk
- Personality changes

### Liver Disease (The alcohol-damaged liver progresses through stages)

\`\`\`
Normal Liver → Fatty Liver → Alcoholic Hepatitis → Cirrhosis → Liver Cancer
     ↓            ↓                ↓                    ↓
Reversible   Reversible       May be reversible    Irreversible
  (with       (with           (with abstinence)   (requires
 abstinence)  abstinence)                          transplant)
\`\`\`

### Cardiovascular System

- High blood pressure
- Irregular heartbeat (arrhythmia)
- Stroke
- Cardiomyopathy (weakened heart muscle)
- Increased heart disease risk

### Digestive System

- Gastritis (stomach inflammation)
- Ulcers
- Pancreatitis (pancreas inflammation)
- Malnutrition
- Certain cancers (mouth, throat, esophagus, liver, breast, colon)

### Immune System

- Weakened immune response
- Increased susceptibility to infections
- Slower wound healing
- Higher risk of pneumonia and tuberculosis

### Reproductive Health

**Men:**
- Erectile dysfunction
- Reduced testosterone
- Infertility

**Women:**
- Menstrual irregularities
- Infertility
- Increased risk of breast cancer

**Pregnancy:**
- Fetal Alcohol Spectrum Disorders (FASD)
- Fetal Alcohol Syndrome (FAS)
- Miscarriage and stillbirth risk

## Alcohol and Mental Health

### Common Co-occurring Disorders

- Depression (30-50% co-occurrence)
- Anxiety disorders
- Bipolar disorder
- Schizophrenia
- PTSD

### The Relationship

Alcohol and mental health have a bidirectional relationship:
- Drinking can worsen mental health symptoms
- Mental health symptoms can trigger drinking
- Both conditions need simultaneous treatment

## Risk Factors for Alcohol-Related Damage

Factors that increase risk of harm:
- Heavy drinking (15+ drinks/week men, 8+ women)
- Binge drinking (4+ drinks women, 5+ men per occasion)
- Starting drinking at young age
- Family history of alcohol problems
- Existing health conditions
- Taking medications that interact with alcohol
- Pregnancy

## Safe Drinking Guidelines

**According to the CDC:**
- **Moderate drinking**: Up to 1 drink/day for women, 2 for men
- **Who should not drink:**
  - Pregnant or trying to become pregnant
  - Under age 21
  - Taking certain medications
  - In recovery from AUD
  - Planning to drive or operate machinery
  - With certain medical conditions

**Note:** The World Health Organization states that no level of alcohol consumption is completely safe for our health.`,

      keyPoints: [
        'Alcohol affects virtually every organ system in the body',
        'Liver disease progresses through reversible to irreversible stages',
        'Alcohol and mental health disorders commonly co-occur',
        'No amount of alcohol is completely risk-free'
      ],
      vocabulary: [
        { term: 'BAC', definition: 'Blood Alcohol Concentration - measure of alcohol in bloodstream' },
        { term: 'Binge Drinking', definition: 'Consuming 5+ (men) or 4+ (women) drinks in 2 hours' },
        { term: 'Cirrhosis', definition: 'Permanent liver scarring from chronic damage' },
        { term: 'Wernicke-Korsakoff', definition: 'Neurological disorder from thiamine deficiency, also called "wet brain"' }
      ]
    },
    {
      level: 3,
      title: 'Diagnosis and Assessment of AUD',
      content: `# Diagnosis and Assessment of Alcohol Use Disorder

## DSM-5 Diagnostic Criteria

Alcohol Use Disorder is diagnosed based on **11 criteria** occurring within a **12-month period**. The severity is based on the number of criteria present.

### The 11 DSM-5 Criteria

**Impaired Control (4 criteria)**
1. Consuming more alcohol or for longer than intended
2. Persistent desire or unsuccessful efforts to cut down or control use
3. Spending excessive time obtaining, using, or recovering from alcohol
4. Craving (strong desire or urge to use alcohol)

**Social Impairment (3 criteria)**
5. Recurrent alcohol use resulting in failure to fulfill major role obligations
6. Continued use despite persistent social or interpersonal problems
7. Important social, occupational, or recreational activities given up or reduced

**Risky Use (2 criteria)**
8. Recurrent alcohol use in physically hazardous situations
9. Continued use despite knowing physical or psychological problems

**Pharmacological Criteria (2 criteria)**
10. Tolerance (need for increased amounts or diminished effect)
11. Withdrawal symptoms or drinking to avoid/relieve withdrawal

### Severity Specifier

\`\`\`
Mild:    2-3 criteria
Moderate: 4-5 criteria
Severe:    6+ criteria
\`\`\`

## Screening Tools

### AUDIT (Alcohol Use Disorders Identification Test)

**A 10-item questionnaire developed by WHO:**

\`\`\`
Questions cover three domains:
1. Alcohol consumption (3 items)
   - How often drink, drinks per occasion, frequency of heavy drinking

2. Dependence symptoms (3 items)
   - Impaired control, morning drinking, guilt after drinking

3. Alcohol-related problems (4 items)
   - Injuries, concerns from others, health concerns, failed responsibilities

Scoring:
0-7: Low-risk drinking
8-15: Hazardous drinking
16-19: High-risk drinking
20+: Likely dependence
\`\`\`

### AUDIT-C (Brief Screening)

A 3-item version for quick screening:
1. How often do you drink?
2. How many drinks on typical day?
3. How often have 6+ drinks?

**Score interpretation:**
- Women: ≥3 is positive
- Men: ≥4 is positive
- Adults 65+: ≥3 is positive

### CAGE Questionnaire

A simple 4-question screen:
- **C**ut down: Tried to cut down without success?
- **A**nnoyed: Others annoyed by your drinking?
- **G**uilty: Felt guilty about drinking?
- **E**ye-opener: Morning drinking to steady nerves?

**2 or more "yes" answers suggest possible AUD**

### Single-Question Screen

"How many times in the past year have you had X or more drinks in a day?"
- 5+ for men, 4+ for women
- 1+ time indicates at-risk drinking

## Comprehensive Assessment

### 1. Drinking History

- Age of first drink
- Age of first regular use
- Typical quantity and frequency
- Pattern of use (daily, weekend, binge)
- Previous quit attempts
- Withdrawal history
- Maximum consumption in 24 hours
- Recent changes in use

### 2. Consequences Assessment

**Medical:**
- Liver function tests
- Gastrointestinal problems
- Injuries/accidents
- Blackouts
- Seizures
- Pancreatitis

**Psychiatric:**
- Mood symptoms
- Anxiety
- Suicidal thoughts
- Psychotic symptoms

**Social:**
- Relationship problems
- Employment issues
- Legal problems (DUIs)
- Financial difficulties
- Child custody issues

**Functional:**
- Impact on daily activities
- Missed work/school
- Reduced participation

### 3. Physical Examination

**Signs of chronic alcohol use:**
- Hypertension
- Abdominal tenderness (liver)
- Jaundice
- Spider angiomas
- Palmar erythema
- Muscle wasting
- Neurological abnormalities

### 4. Laboratory Assessment

**Liver Function Tests:**
- GGT (gamma-glutamyl transferase)
- AST, ALT (liver enzymes)
- AST/ALT ratio > 2:1 suggests alcohol

**Alcohol-Specific Markers:**
- CDT (carbohydrate-deficient transferrin)
- PEth (phosphatidylethanol) - detects use over 2-4 weeks
- EtG/EtS (ethyl glucuronide/ethyl sulfate) - detects recent use

**General Health:**
- CBC (complete blood count)
- Lipid panel
- Glucose
- Electrolytes
- Magnesium, thiamine

### 5. Co-occurring Disorders Assessment

Screen for:
- Depression and anxiety
- Bipolar disorder
- PTSD
- Schizophrenia
- Other substance use disorders
- Personality disorders

## Risk Stratification

### Low Risk

- Within recommended drinking limits
- No consequences
- Normal laboratory values
- No craving or loss of control

### At-Risk

- Exceeding limits
- Early consequences
- Elevated LFTs
- Some craving

### Problem Use

- Clear consequences
- Continued use despite problems
- Loss of control episodes
- Laboratory abnormalities

### Alcohol Use Disorder

- Meets DSM-5 criteria
- Impaired control
- Significant impairment
- Complications present

## Differential Diagnosis

Conditions to consider:

1. **Alcohol Intoxication**
   - Recent use
   - Slurred speech, incoordination
   - Blood or breath alcohol positive

2. **Alcohol Withdrawal**
   - Cessation/reduction after prolonged use
   - Autonomic hyperactivity
   - Tremor, anxiety

3. **Other Substance Intoxication**
   - Similar symptoms
   - Different toxicology

4. **Other Medical Conditions**
   - Hepatic encephalopathy
   - Wernicke-Korsakoff
   - Hypoglycemia

## Prognostic Indicators

### Good Prognosis

- Motivation to change
- Stable social support
- Employment/housing
- No severe co-occurring disorders
- Younger age
- Shorter duration of disorder

### Poor Prognosis

- Severe withdrawal history
- Multiple previous treatments
- Limited support
- Co-occurring mental illness
- Medical complications
- Legal involvement`,

      keyPoints: [
        'DSM-5 uses 11 criteria to diagnose AUD with severity based on number of criteria met',
        'Multiple validated screening tools exist (AUDIT, CAGE, AUDIT-C)',
        'Comprehensive assessment includes drinking history, consequences, exam, and labs',
        'Prognosis depends on multiple factors including motivation and support'
      ],
      vocabulary: [
        { term: 'AUDIT', definition: 'Alcohol Use Disorders Identification Test - 10 question screening tool' },
        { term: 'CAGE', definition: '4-question acronym screening for alcohol problems' },
        { term: 'LFTs', definition: 'Liver Function Tests - measure liver damage' },
        { term: 'Spider Angiomas', definition: 'Spider-shaped blood vessels on skin, sign of liver disease' }
      ]
    },
    {
      level: 4,
      title: 'Evidence-Based Treatment for AUD',
      content: `# Evidence-Based Treatment for Alcohol Use Disorder

## Treatment Approach Overview

Effective AUD treatment typically includes:
1. **Withdrawal management** (medically supervised detoxification)
2. **Medications** (to reduce cravings and prevent relapse)
3. **Behavioral therapies** (to develop coping skills)
4. **Support services** (peer support, case management)
5. **Ongoing recovery support** (long-term aftercare)

## Withdrawal Management

### Alcohol Withdrawal Syndrome

**Symptoms appear 6-24 hours after last drink:**

\`\`\`
Mild (6-12 hours)              Moderate (12-48 hours)          Severe (48-72 hours)
────────────────────────────────────────────────────────────────────────────
Tremor (shakes)               Confusion                       Hallucinations
Sweating                      Hyperactivity                   Delirium tremens
Nausea                        Tachycardia                     Seizures
Anxiety                       Hypertension                    Severe autonomic
Insomnia                      Fever                           instability
Headache                      Visual disturbances             Death (if untreated)
\`\`\`

### Clinical Institute Withdrawal Assessment (CIWA-Ar)

Scoring tool to assess withdrawal severity and guide treatment:

| Category | Finding | Points |
|----------|---------|--------|
| Nausea/vomiting | None to severe | 0-7 |
| Tremor | None to severe | 0-7 |
| Sweating | None to drenching | 0-4 |
| Anxiety | None to panic | 0-7 |
| Agitation | None to severe | 0-7 |
| Tactile disturbances | None to hallucinations | 0-7 |
| Auditory disturbances | None to hallucinations | 0-7 |
| Visual disturbances | None to hallucinations | 0-7 |
| Headache | None to severe | 0-7 |
| Orientation | Impaired | 0-4 |

**Score interpretation:**
- < 8: No medication needed
- 8-15: Mild withdrawal, consider medication
- 15-20: Moderate withdrawal, medication indicated
- > 20: Severe withdrawal, hospitalization recommended

### Medications for Withdrawal

**Benzodiazepines (first-line)**

\`\`\`
Drug           Dosing Range        Half-life   Clinical Use
────────────────────────────────────────────────────────────
Chlordiazepoxide 25-100mg q6h PRN  Long        Preferred, tapering
Diazepam        10-20mg q6h PRN    Long        Good tapering agent
Lorazepam       2-4mg q2-4h PRN    Medium      Preferred in liver disease
Oxazepam        15-30mg q4h PRN    Short       Safest in liver disease
\`\`\`

**Symptom-Triggered vs. Fixed-Schedule Dosing:**

| Approach | Description | Advantages | Disadvantages |
|----------|-------------|------------|---------------|
| Symptom-triggered | Medicate based on CIWA score | Less total medication, shorter treatment | Requires frequent assessment |
| Fixed-schedule | Scheduled tapering doses | Predictable, less assessment | May over/under-medicate |

**Adjunctive Medications:**
- Thiamine (100mg daily) - prevent Wernicke-Korsakoff
- Folate (1mg daily)
- Multivitamin
- Fluid and electrolyte replacement

## Medications for AUD Maintenance

### FDA-Approved Medications

**1. Naltrexone**
\`\`\`
Mechanism: Opioid antagonist, reduces alcohol reward
Forms: Oral (50mg daily) or Injectable (380mg monthly)
Best for: Reduce heavy drinking, support abstinence
Side effects: Nausea, headache, hepatotoxicity at high doses
Contraindications: Acute hepatitis, liver failure, opioid use
\`\`\`

**Efficacy:**
- Reduces heavy drinking days by 25%
- Decreases craving
- Better for "loss of control" drinking

**2. Acamprosate**
\`\`\`
Mechanism: Modulates glutamate and GABA
Forms: Oral (666mg TID - three times daily)
Best for: Maintain abstinence after detoxification
Side effects: Diarrhea (most common), nausea, dizziness
Contraindications: Severe renal impairment
\`\`\`

**Efficacy:**
- Increases abstinence rates by 11-27%
- Reduces post-acute withdrawal symptoms
- Better for "negative affect" drinking (drinking to feel normal)

**3. Disulfiram**
\`\`\`
Mechanism: Inhibits aldehyde dehydrogenase, causes unpleasant reaction to alcohol
Forms: Oral (250-500mg daily)
Best for: Highly motivated patients wanting deterrent
Side effects: Drowsiness, metallic taste, hepatotoxicity
Contraindications: Severe cardiac disease, psychosis, pregnancy
\`\`\`

**Disulfiram-alcohol reaction:**
- Flushing, throbbing headache
- Nausea, vomiting, chest pain
- Anxiety, weakness, blurred vision
- Severe reactions: arrhythmias, heart failure, death

### Off-Label Medications

**Gabapentin**
- Reduces heavy drinking, improves sleep
- Particularly effective in those with alcohol withdrawal symptoms
- Dose: 300-1200mg TID

**Topiramate**
- Reduces heavy drinking and promotes abstinence
- Side effects: Cognitive effects, paresthesia
- Dose: 75-300mg daily

**Baclofen**
- Reduces craving and withdrawal symptoms
- Limited evidence, especially in liver disease

### Treatment Algorithms

**For patients with "loss of control" drinking:**
1. First-line: Naltrexone
2. Second-line: Topiramate or gabapentin
3. Consider combination therapy

**For patients with "negative affect" drinking:**
1. First-line: Acamprosate
2. Second-line: Gabapentin
3. Consider SSRI if comorbid depression

**For highly motivated patients wanting deterrent:**
- Disulfiram

## Behavioral Therapies

### Cognitive Behavioral Therapy (CBT)

**Core components:**
- Functional analysis of drinking behavior
- Identify triggers and high-risk situations
- Develop coping strategies and skills
- Cognitive restructuring
- Problem-solving skills
- Relapse prevention planning

**Evidence:**
- 12-20 sessions effective
- Improves abstinence rates
- Reduces drinking days

### Motivational Enhancement Therapy (MET)

**Core components:**
- Express empathy
- Develop discrepancy
- Avoid argumentation
- Roll with resistance
- Support self-efficacy

**Evidence:**
- Brief (4-6 sessions)
- Effective for ambivalent patients
- Enhances readiness for change

### 12-Step Facilitation

**Core components:**
- Acceptance of powerlessness over alcohol
- Surrender to higher power
- Active involvement in AA/SMART Recovery
- Working the 12 steps

**Evidence:**
- Improves abstinence rates
- Cost-effective
- Widely available

### Behavioral Couples Therapy

**Core components:**
- Involve significant other in treatment
- Improve relationship functioning
- Teach communication skills
- Develop shared recovery goals

**Evidence:**
- Improves relationship satisfaction
- Reduces drinking days
- Improves treatment retention

### Contingency Management

**Core components:**
- Reinforce abstinence with tangible rewards
- Voucher-based reinforcement
- Prize-based approaches

**Evidence:**
- Strongest short-term effects
- Particularly effective combined with other therapies

## Treatment Settings

### Level of Care Determination

**Outpatient Treatment**
- Stable medical and psychiatric condition
- Good social support
- No severe withdrawal risk
- Can abstain without 24/7 supervision

### Intensive Outpatient Programs (IOP)
- 9+ hours of treatment weekly
- Step-down from residential
- Alternative to inpatient

### Residential/Inpatient Treatment
- Severe AUD
- Unstable living environment
- Multiple treatment failures
- Co-occurring disorders

### Hospital-Based Treatment
- Severe withdrawal risk
- Medical complications
- Acute psychiatric conditions
- No support system

## Co-occurring Disorders

### Depression and Anxiety

**Treatment principles:**
- Treat AUD and mental health simultaneously
- Psychotherapy (CBT, MET) first-line
- Consider antidepressants if depressive symptoms persist after 2-4 weeks of abstinence
- SSRIs generally safe (except in abstinent patients with history of depression)

### PTSD

**Integrated treatment approaches:**
- Concurrent treatment of substance use and PTSD
- Trauma-informed care
- Consider specialized therapies (Seeking Safety)

### Bipolar Disorder

**Mood stabilizers:**
- Lithium, valproate
- Treat both disorders
- Monitor for interactions

### Schizophrenia

**Antipsychotics:**
- Treat psychotic disorder
- Some evidence for reducing alcohol use
- Clozapine may reduce substance use

## Treatment Outcomes

### Prognosis Factors

**Good prognosis:**
- Motivated for change
- Good social support
- Stable employment/housing
- No severe co-occurring disorders
- No severe liver disease

**Poor prognosis:**
- Low motivation
- Limited support
- Homelessness
- Co-occurring disorders
- Advanced liver disease

### Recovery Statistics

- 1-year abstinence: 30-50% in treatment
- 3+ years in recovery: 60-70% maintain abstinence
- MAT (naltrexone) reduces heavy drinking by 25%
- Combined medication + therapy = best outcomes`,

      keyPoints: [
        'Alcohol withdrawal can be life-threatening and requires appropriate medical management',
        'Three FDA-approved medications for AUD: naltrexone, acamprosate, and disulfiram',
        'Behavioral therapies including CBT, MET, and 12-step facilitation have strong evidence',
        'Treatment should be individualized based on patient characteristics and preferences'
      ],
      vocabulary: [
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol, revised' },
        { term: 'Naltrexone', definition: 'Opioid antagonist medication that reduces alcohol craving' },
        { term: 'Acamprosate', definition: 'Medication that helps maintain abstinence after detoxification' },
        { term: 'Disulfiram', definition: 'Medication causing unpleasant reaction if alcohol consumed' }
      ]
    },
    {
      level: 5,
      title: 'Special Populations and Advanced Topics',
      content: `# Special Populations and Advanced Topics in AUD

## Special Populations

### Adolescents and Young Adults

**Unique considerations:**
- Brain still developing until age 25
- Earlier onset = faster progression
- Higher risk of adult AUD
- More sensitive to alcohol effects
- Family involvement crucial

**Assessment differences:**
- CAGE less reliable
- CRAFFT screening preferred:
  - **C**ar: Ever ridden in a car driven by someone using substances?
  - **R**elax: Do you use to relax?
  - **A**lone: Do you use alone?
  - **F**orget: Do you forget things while using?
  - **F**amily/Friends: Has family/friends expressed concern?
  - **T**rouble: Have you gotten into trouble while using?

**Treatment approach:**
- Age-appropriate programming
- Family-based interventions
- School collaboration
- Consider motivational enhancement
- Longer treatment may be needed

**2+ "yes" = positive screen**

### Women

**Special considerations:**
- Higher BAC with same amount of alcohol
- Faster progression to dependence ("telescoping")
- More health consequences at lower consumption levels
- Higher rates of co-occurring disorders (depression, anxiety, PTSD)
- Stigma greater, treatment barriers higher

**Women-specific treatment:**
- Trauma-informed care essential
- Childcare services
- Pregnancy support
- Women-only groups often beneficial
- Consider hormonal factors

**Pregnancy:**
- No safe amount of alcohol
- Complete abstinence recommended
- Referral to prenatal care
- Medication risks/benefits must be weighed
- Acamprosate generally preferred over naltrexone
- Disulfiram contraindicated

### Older Adults

**Unique aspects:**
- Increased sensitivity to alcohol
- Slower metabolism
- More medical conditions
- More medications (drug interactions)
- Atypical presentation (falls, confusion)
- Often hidden ("late onset" problem drinking)

**Screening considerations:**
- Lower cutoffs on screening tools
- AUDIT-C ≥3 for all adults 65+
- Consider falls, confusion, self-neglect

**Treatment modifications:**
- Age-appropriate groups
- Slower benzodiazepine taper
- Consider cognitive impairment
- Multiple medical comorbidities
- Care coordination with geriatric providers

### LGBTQ+ Population

**Special considerations:**
- Higher rates of AUD (2-3x general population)
- Minority stress contributes to use
- Higher rates of co-occurring disorders
- Stigma and discrimination impact treatment seeking
- Family rejection common

**Culturally competent care:**
- Use chosen name and pronouns
- Ask about gender identity and sexual orientation
- Recognize minority stress
- Provide welcoming environment
- Staff training on LGBTQ+ issues

### Veterans

**Special considerations:**
- High rates of co-occurring PTSD (15-30%)
- Trauma often central to alcohol use
- Military culture affects help-seeking
- VA and community resources available
- Higher rates of heavy episodic drinking

**Treatment approach:**
- Integrated PTSD and SUD treatment
- Trauma-informed care
- Consider military culture
- VA services (if eligible)
- Peer support from other veterans

## Advanced Topics

### Pharmacogenomics

**Genetic variations affecting treatment:**

**OPRM1 (mu-opioid receptor)**
- A118G variant present in ~15-30%
- Better response to naltrexone
- May guide medication selection

**GABRA2 (GABA receptor)**
- Associated with AUD risk
- May affect response to gabapentin

**ADH/ALDH (alcohol metabolism)**
- ADH1B, ALDH2 variants
- Common in Asian populations
- Protective against AUD but if present, more severe disease

**Clinical application:**
- Pharmacogenomic testing increasingly available
- Can guide medication selection
- Not yet standard of care
- Consider in treatment-resistant cases

### Liver Disease and AUD

**Assessment:**

| Test | What it Shows | AUD Pattern |
|------|---------------|--------------|
| AST/ALT ratio | Liver inflammation | > 2:1 suggests alcohol |
| GGT | Bile duct/liver damage | Often elevated |
| CDT | Alcohol-specific marker | Detects heavy drinking |
| MCV | Red blood cell size | Elevated in heavy use |
| Platelets | Liver function | Low in cirrhosis |

**Medication considerations:**
- **Compensated cirrhosis:** All medications possible
- **Decompensated cirrhosis:**
  - Avoid naltrexone
  - Acamprosate (dose adjust for renal function)
  - Benzodiazepines (avoid lorazepam, use oxazepam)

**Referral for liver transplantation:**
- 6-month abstinence requirement (variable by center)
- Need AUD treatment involvement
- Ongoing support required
- Outcomes good with adherence

### Alcohol-Related Brain Disorders

**Wernicke-Korsakoff Syndrome**
\`\`\`
Wernicke's Encephalopathy (acute)
- Ataxia (coordination problems)
- Ophthalmoplegia (eye movement abnormalities)
- Confusion
- Medical emergency

↓ (if untreated)

Korsakoff's Syndrome (chronic)
- Severe memory impairment
- Confabulation (filling memory gaps)
- Often irreversible
\`\`\`

**Treatment:**
- Thiamine 100mg IV/IM for 3-5 days
- Then 100mg oral daily
- Prompt treatment critical
- Glucose before thiamine (can precipitate Wernicke's)

**Alcoholic Dementia**
- Cognitive impairment from chronic use
- May improve with abstinence
- 25% show significant improvement

### Medical Complications

**Cardiovascular:**
- Holiday Heart syndrome (arrhythmias after binge)
- Alcoholic cardiomyopathy
- Hypertension
- Stroke

**Gastrointestinal:**
- Gastritis and ulcers
- Pancreatitis (acute and chronic)
- Mallory-Weiss tears
- Esophageal varices

**Hematologic:**
- Anemia
- Thrombocytopenia
- Clotting abnormalities

**Endocrine:**
- Hypoglycemia
- Sexual dysfunction
- Osteoporosis

**Immune:**
- Increased infection risk
- Poor wound healing
- Certain cancers

### Dual Diagnosis (Co-occurring Disorders)

**Common combinations:**
- AUD + Depression (most common)
- AUD + Anxiety disorders
- AUD + Bipolar disorder
- AUD + PTSD
- AUD + Schizophrenia

**Treatment principles:**
- Integrated treatment for both disorders
- Simultaneous rather than sequential
- Comprehensive assessment
- Psychotherapy for both conditions
- Medications may treat both
- Longer treatment duration often needed

### Harm Reduction Approaches

**For patients not ready for abstinence:**

**Medications:**
- Naltrexone to reduce heavy drinking
- Gabapentin to reduce consumption
- Topiramate for reduction

**Behavioral:**
- Motivational enhancement
- Harm reduction counseling
- Safer drinking strategies

**Goals:**
- Reduce quantity/frequency
- Reduce consequences
- Improve health
- Move toward change

### Relapse Prevention

**Understanding Relapse:**

\`\`\`
Emotional Relapse (early signs)
- Poor self-care
- Isolation
- Bottled emotions
- Not sharing feelings

↓

Mental Relapse (thinking about use)
- Cravings
- Thinking about people/places associated with use
- Minimizing consequences
- Planning how to use

↓

Physical Relapse
- Actually drinking
- Loss of control
\`\`\`

**Relapse Prevention Strategies:**
- Identify warning signs early
- HALT acronym (Hungry, Angry, Lonely, Tired)
- "Play the tape through" - think through consequences
- Emergency contact list
- Remove triggers from environment
- Practice refusal skills
- Regular check-ins

**If relapse occurs:**
- Normalize it (part of recovery)
- Assess what happened
- Learn from the experience
- Adjust treatment plan
- Return to treatment/aftercare

### Recovery Capital

**Resources that support recovery:**

**Physical capital:**
- Health and energy
- Financial resources
- Safe housing
- Transportation

**Human capital:**
- Knowledge and skills
- Mental health
- Self-efficacy
- Education

**Social capital:**
- Supportive relationships
- Recovery community
- Family involvement
- Sober network

**Cultural capital:**
- Values and beliefs
- Traditions and rituals
- Recovery identity

**Building recovery capital:**
- Case management
- Recovery coaching
- Peer support services
- Vocational rehabilitation
- Family therapy`,

      keyPoints: [
        'Special populations require tailored assessment and treatment approaches',
        'Women, older adults, and LGBTQ+ individuals have unique risk factors and needs',
        'Pharmacogenomics may guide medication selection in the future',
        'Building recovery capital across multiple domains improves long-term outcomes'
      ],
      vocabulary: [
        { term: 'Telescoping', definition: 'Faster progression from first use to addiction, seen in women' },
        { term: 'CRAFFT', definition: 'Screening tool for adolescent substance use' },
        { term: 'Pharmacogenomics', definition: 'Study of how genes affect medication response' },
        { term: 'Wernicke-Korsakoff', definition: 'Alcohol-related brain disorder affecting memory and coordination' }
      ]
    }
  ]
};
