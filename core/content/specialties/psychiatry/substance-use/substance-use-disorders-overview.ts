/**
 * Substance Use Disorders Overview
 *
 * Comprehensive educational content on substance use disorders,
 * their classification, neurobiology, and treatment principles.
 */

import { EducationalContent } from '../../../types';

export const substanceUseDisordersOverviewContent: EducationalContent = {
  id: 'psychiatry-substance-use-disorders-overview',
  type: 'topic',
  name: 'Substance Use Disorders Overview',
  alternateNames: ['SUD', 'Addiction', 'Chemical Dependency'],

  levels: {
    1: {
      level: 1,
      summary: 'Substance use disorders occur when using drugs or alcohol causes significant problems in a person\'s life, including health issues, trouble at work or school, and damaged relationships.',
      explanation: `Substance use disorders (often called addiction) happen when someone has trouble controlling their use of drugs or alcohol.

**What Makes It a Disorder:**

- Using more than intended
- Wanting to cut down but being unable to
- Spending a lot of time getting, using, or recovering from the substance
- Strong cravings
- Failing to fulfill responsibilities at work, school, or home
- Continuing use despite relationship problems
- Giving up important activities
- Using in dangerous situations
- Continuing despite health problems
- Needing more to get the same effect (tolerance)
- Feeling sick when stopping (withdrawal)

**Substances That Can Cause Problems:**

- Alcohol
- Tobacco/nicotine
- Marijuana
- Opioids (heroin, prescription painkillers)
- Stimulants (cocaine, methamphetamine)
- Sedatives (benzodiazepines, sleeping pills)
- Hallucinogens
- Inhalants

**Important to Know:**

- Addiction is a brain disease, not a moral failing
- It changes how the brain works, especially the reward system
- Anyone can develop addiction - it doesn't discriminate
- Recovery is possible with proper treatment and support
- Relapse is common but doesn't mean treatment failed

**Treatment Helps:**

- Behavioral therapies (counseling)
- Medications for some substance use disorders
- Support groups (AA, NA)
- Treatment for co-occurring mental health conditions
- Long-term support and follow-up`,
      keyTerms: [
        { term: 'addiction', definition: 'A chronic brain disease involving compulsive substance use despite harm' },
        { term: 'tolerance', definition: 'Needing more of a substance to get the same effect' },
        { term: 'withdrawal', definition: 'Unpleasant symptoms when stopping a substance after heavy use' },
        { term: 'craving', definition: 'A strong desire or urge to use a substance' },
      ],
      analogies: [
        'Addiction hijacks the brain\'s reward system like a broken thermostat - it keeps signaling "need more" even when you\'ve had enough.',
        'Recovery is like learning to walk again after an injury - it takes time, practice, and often some setbacks.',
      ],
      examples: [
        'Someone might start drinking more and more to feel the same effect, then feel shaky and sick when they try to stop.',
        'A person might keep using painkillers even after their prescription runs out, despite losing their job and damaging their marriage.',
      ],
    },
    2: {
      level: 2,
      summary: 'Substance use disorders are diagnosed using DSM-5 criteria assessing impaired control, social impairment, risky use, and pharmacological indicators (tolerance/withdrawal), with severity based on symptom count.',
      explanation: `**DSM-5 Approach:**

Single "Substance Use Disorder" diagnosis per substance, replacing old "abuse" vs. "dependence" distinction.

**Diagnostic Criteria (2+ in 12 months):**

*Impaired Control:*
1. Taking larger amounts or longer than intended
2. Persistent desire or unsuccessful efforts to cut down
3. Great deal of time in activities to obtain, use, or recover
4. Craving, strong desire or urge to use

*Social Impairment:*
5. Failure to fulfill major role obligations (work, school, home)
6. Continued use despite persistent social/interpersonal problems
7. Important activities given up or reduced

*Risky Use:*
8. Recurrent use in physically hazardous situations
9. Continued use despite knowledge of physical/psychological problems

*Pharmacological:*
10. Tolerance
11. Withdrawal

**Severity:**
- Mild: 2-3 criteria
- Moderate: 4-5 criteria
- Severe: 6+ criteria

**Substance Categories:**
- Alcohol
- Cannabis
- Hallucinogens (Phencyclidine, Other)
- Inhalants
- Opioids
- Sedatives, hypnotics, anxiolytics
- Stimulants (cocaine, amphetamines)
- Tobacco
- Other/unknown

**Related Diagnoses:**
- Intoxication
- Withdrawal
- Substance-induced disorders (psychosis, mood, anxiety)

**Course Specifiers:**
- In early remission (3-12 months)
- In sustained remission (12+ months)
- On maintenance therapy
- In a controlled environment

**Risk Factors:**
- Genetics (family history)
- Early age of first use
- Trauma and adverse childhood experiences
- Co-occurring mental health disorders
- Peer substance use
- Availability/access

**Treatment Principles:**
- Detoxification when needed
- Behavioral therapies (CBT, CM, MET)
- Medications when available
- Support groups
- Address co-occurring disorders
- Long-term follow-up
- Individualized approach`,
      keyTerms: [
        { term: 'impaired control', definition: 'Difficulty limiting substance use despite wanting to' },
        { term: 'remission', definition: 'Period without meeting criteria; early (3-12 mo) or sustained (12+ mo)' },
        { term: 'contingency management', definition: 'Providing rewards for negative drug tests/treatment compliance' },
        { term: 'co-occurring disorder', definition: 'Having both substance use disorder and another mental health condition' },
      ],
    },
    3: {
      level: 3,
      summary: 'SUDs involve dysregulation of brain reward, stress, and executive function circuits, with neuroadaptations driving tolerance, withdrawal, and compulsive use. Evidence-based treatment combines behavioral interventions with pharmacotherapy when available.',
      explanation: `**Neurobiology of Addiction:**

*Reward Circuit:*
- Mesolimbic dopamine pathway (VTA → NAc)
- Acute drug use → Dopamine surge
- Reinforces drug-taking behavior
- Natural rewards become less salient

*Neuroadaptations:*
- Downregulation of dopamine receptors
- Decreased dopamine release to drugs over time
- Tolerance develops
- Anhedonia when not using

*Stress Systems:*
- Corticotropin-releasing factor (CRF) increase
- Norepinephrine dysregulation
- Extended amygdala activation
- Drives negative reinforcement (using to avoid withdrawal)

*Executive Function:*
- Prefrontal cortex dysfunction
- Impaired decision-making
- Poor impulse control
- Compromised self-regulation

*Three-Stage Model:*
1. Binge/Intoxication: Reward, incentive salience
2. Withdrawal/Negative Affect: Stress, negative emotions
3. Preoccupation/Anticipation: Craving, executive dysfunction

**Evidence-Based Behavioral Treatments:**

*Cognitive Behavioral Therapy (CBT):*
- Identify triggers
- Coping skills
- Functional analysis
- Relapse prevention

*Contingency Management (CM):*
- Vouchers or prizes for abstinence
- Immediate reinforcement
- Highly effective for stimulants

*Motivational Enhancement Therapy (MET):*
- Address ambivalence
- Increase motivation
- Non-confrontational
- Useful for engagement

*12-Step Facilitation:*
- Engagement with AA/NA
- Spiritual component optional
- Social support

**Medications by Substance:**

*Alcohol:*
- Naltrexone (oral, monthly injection)
- Acamprosate
- Disulfiram (aversive)

*Opioids:*
- Methadone (OTP)
- Buprenorphine (office-based)
- Naltrexone (XR injection)

*Tobacco:*
- Nicotine replacement (patch, gum, etc.)
- Varenicline
- Bupropion

*Stimulants:*
- No FDA-approved medications
- CM is most effective treatment

*Cannabis:*
- No FDA-approved medications
- Behavioral treatments

**Treatment Settings:**
- Outpatient
- Intensive outpatient (IOP)
- Partial hospitalization
- Residential/inpatient
- Medically supervised withdrawal
- Long-term recovery housing`,
      keyTerms: [
        { term: 'mesolimbic pathway', definition: 'Dopamine pathway from VTA to nucleus accumbens, central to reward' },
        { term: 'neuroadaptation', definition: 'Brain changes in response to repeated drug exposure' },
        { term: 'negative reinforcement', definition: 'Using drugs to escape withdrawal/negative states' },
        { term: 'opioid treatment program (OTP)', definition: 'Licensed clinic providing methadone for opioid use disorder' },
      ],
    },
    4: {
      level: 4,
      summary: 'SUD pathophysiology involves dopaminergic, glutamatergic, and stress system dysregulation with neuroplastic changes in reward, motivation, and executive circuits. Treatment integrates pharmacotherapy, behavioral interventions, and addresses the chronic relapsing nature of addiction.',
      explanation: `**Molecular and Cellular Mechanisms:**

*Dopamine:*
- Acute: Surge in NAc (10x physiological)
- Chronic: Downregulation of D2 receptors
- Reduced tonic dopamine levels
- Sensitization of phasic responses to cues

*Glutamate:*
- Synaptic plasticity (LTP/LTD)
- Drug-cue associations
- Prefrontal projections to NAc
- Target for treatment development

*GABA:*
- Alcohol, benzodiazepines, barbiturates
- Enhanced GABA-A function acutely
- Downregulation with chronic use
- Withdrawal: Hyperexcitability

*Opioid System:*
- Mu receptor activation (analgesia, euphoria)
- Receptor downregulation
- Endogenous opioid suppression
- Hyperalgesia in withdrawal

*Stress Systems:*
- CRF in extended amygdala
- Norepinephrine activation
- HPA axis dysregulation
- Drives relapse

**Neuroimaging:**

*Structural:*
- Gray matter reductions (prefrontal, temporal)
- White matter abnormalities
- Some recovery with abstinence

*Functional:*
- Decreased D2 receptor availability (PET)
- Cue reactivity in reward regions
- Prefrontal hypofunction during decision tasks
- Altered connectivity

**Genetics:**

- Heritability: 40-60% depending on substance
- Polygenic architecture
- ALDH2 (alcohol) protective variant
- OPRM1 (opioid receptor) associations
- DRD2, ANKK1 findings
- Gene-environment interactions

**Treatment Pharmacology:**

*Alcohol Use Disorder:*

Naltrexone:
- Mu opioid antagonist
- Reduces rewarding effects
- Decreases heavy drinking days
- Oral or monthly injection (Vivitrol)

Acamprosate:
- Glutamate modulation
- Reduces craving
- Better for maintaining abstinence
- Three times daily dosing

Disulfiram:
- Aldehyde dehydrogenase inhibitor
- Aversive reaction if drinking
- Requires motivation and supervision

*Opioid Use Disorder:*

Methadone:
- Full mu agonist
- Daily observed dosing (OTP)
- Reduces illicit use, overdose
- Highly effective

Buprenorphine:
- Partial mu agonist
- Office-based prescribing (waiver removed 2023)
- Ceiling effect (safer)
- Sublingual, monthly injection, implant

Naltrexone XR (Vivitrol):
- Mu antagonist
- Monthly injection
- Requires detox first
- Good for motivated patients

*Tobacco Use Disorder:*

Varenicline:
- Nicotine receptor partial agonist
- Most effective medication
- Reduces craving and reward

Nicotine Replacement:
- Patch, gum, lozenge, inhaler, spray
- Combination therapy effective

Bupropion:
- Dopamine/norepinephrine reuptake inhibitor
- Reduces craving

**Relapse Prevention:**

- Ongoing medication when indicated
- Behavioral therapy/support
- 12-step or mutual aid
- Address triggers
- Treat co-occurring disorders
- Recovery support services`,
      keyTerms: [
        { term: 'incentive salience', definition: 'Attribute of cues that makes them attention-grabbing and motivating' },
        { term: 'D2 receptor', definition: 'Dopamine receptor; reduced availability associated with addiction' },
        { term: 'cue reactivity', definition: 'Brain/physiological response to drug-associated cues' },
        { term: 'ALDH2', definition: 'Aldehyde dehydrogenase; variants cause alcohol flushing, protective against alcoholism' },
      ],
      clinicalNotes: 'Screen with validated tools (AUDIT, DAST). Offer medication when available. Combine with behavioral treatment. Address co-occurring disorders. Long-term follow-up essential. Harm reduction acceptable when abstinence not achievable. Reduce stigma.',
    },
    5: {
      level: 5,
      summary: 'Contemporary addiction science employs circuit-based models, investigates synaptic plasticity mechanisms, and develops precision approaches to treatment selection. Novel therapeutics target glutamatergic systems, neuroimmune function, and stress circuits, with digital tools expanding treatment access.',
      explanation: `**Circuit-Based Models:**

*Three-Stage Cycle:*
1. Binge/Intoxication: VTA-NAc-pallidum (reward)
2. Withdrawal/Negative Affect: Extended amygdala (stress, CRF)
3. Preoccupation/Anticipation: PFC-BLA-NAc (craving, compulsion)

*Key Circuits:*
- Habenula: Disappointment, aversion (emerging target)
- Insula: Interoception, craving
- ACC: Conflict monitoring, error detection

**Synaptic Plasticity:**

*Drug-Induced Changes:*
- Silent synapses accumulate (NAc)
- LTP at glutamatergic synapses
- Altered spine morphology
- mGluR-dependent plasticity

*Memory of Addiction:*
- Reconsolidation opportunity
- Extinction vs. reconsolidation interventions
- Cue exposure with memory interference

**Novel Therapeutic Targets:**

*Glutamate:*
- NAC (N-acetylcysteine): Restores glutamate homeostasis
- Modafinil: Glutamate and dopamine effects
- Topiramate: Glutamate modulation

*Neuroimmune:*
- Inflammation markers elevated in addiction
- Microglia activation
- Anti-inflammatory targets under investigation

*Stress:*
- CRF1 antagonists (development challenges)
- Glucocorticoid receptor modulators
- Alpha-1 adrenergic antagonists (prazosin)

*Psychedelics:*
- Psilocybin for alcohol, tobacco cessation
- Ketamine for various SUDs
- MDMA-assisted therapy (research stage)
- Ibogaine (not in US)

**Precision Medicine:**

*Pharmacogenomics:*
- OPRM1 Asp40 may predict naltrexone response
- Dopamine genes and treatment matching
- Not yet clinically implemented

*Phenotypic Stratification:*
- Negative affect subtype
- Reward-seeking subtype
- Treatment matching potential

*Biomarkers:*
- Neuroimaging predictors
- Inflammation markers
- Stress reactivity
- Research phase

**Digital Therapeutics:**

*FDA-Cleared:*
- reSET (SUD excluding opioids)
- reSET-O (OUD adjunct)
- App-based cognitive training

*Emerging:*
- AI-powered interventions
- Wearable monitoring
- Contingency management via apps
- Telehealth expansion

**Harm Reduction:**

*Philosophy:*
- Meet people where they are
- Reduce harms without requiring abstinence
- Pragmatic, evidence-based

*Interventions:*
- Naloxone distribution
- Syringe services
- Drug checking
- Safer use education
- MAT (medications for addiction treatment)

*Overdose Prevention:*
- Fentanyl test strips
- Supervised consumption sites (not US)
- Naloxone training
- Good Samaritan laws

**Policy and Systems:**

*Treatment Access:*
- Buprenorphine waiver removed (2023)
- Integration with primary care
- Telehealth flexibilities
- Reduce barriers

*Criminal Justice:*
- Drug courts
- Diversion programs
- Treatment in incarceration
- Re-entry support

**Research Priorities:**

1. Medications for stimulant and cannabis use
2. Biomarkers for treatment matching
3. Long-acting formulations
4. Psychedelic-assisted therapies
5. Prevention strategies
6. Implementation science
7. Health disparities
8. Novel circuit targets`,
      keyTerms: [
        { term: 'silent synapse', definition: 'Synapse with NMDA but not AMPA receptors; accumulates with drug use, basis for craving' },
        { term: 'reconsolidation', definition: 'Process where retrieved memories become labile and can be modified' },
        { term: 'reSET', definition: 'FDA-cleared prescription digital therapeutic for SUD' },
        { term: 'harm reduction', definition: 'Pragmatic approach reducing drug-related harms without requiring abstinence' },
      ],
      clinicalNotes: `Current practice:
- Medications first-line when available (AUD, OUD, tobacco)
- Behavioral therapies for all SUDs
- Integrated treatment for co-occurring disorders
- Long-term, chronic disease management
- Harm reduction approach acceptable

Emerging:
- Psychedelic-assisted therapy (research)
- Digital therapeutics (FDA-cleared options)
- Neuromodulation
- Precision approaches

Key points:
- Addiction is treatable brain disease
- Medications effective and underutilized
- Reduce stigma in clinical care
- Address social determinants
- Recovery is possible`,
    },
  },

  media: [
    {
      id: 'sud-neurobiology-diagram',
      type: 'diagram',
      filename: 'sud_neurobiology.svg',
      title: 'Neurobiology of Addiction',
      description: 'Three-stage cycle of addiction and associated brain circuits',
    },
  ],

  citations: [
    {
      id: 'dsm-5-sud',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Substance-Related and Addictive Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-alcohol-use-disorder', targetType: 'condition', relationship: 'related', label: 'Alcohol Use Disorder' },
    { targetId: 'psychiatry-opioid-use-disorder', targetType: 'condition', relationship: 'related', label: 'Opioid Use Disorder' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'substance use disorders'],
    keywords: ['addiction', 'substance use', 'drugs', 'alcohol', 'treatment'],
    clinicalRelevance: 'critical',
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

export default substanceUseDisordersOverviewContent;
