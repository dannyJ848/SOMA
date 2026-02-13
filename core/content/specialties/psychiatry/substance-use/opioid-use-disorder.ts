/**
 * Opioid Use Disorder
 *
 * Comprehensive educational content on opioid use disorder,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const opioidUseDisorderContent: EducationalContent = {
  id: 'psychiatry-opioid-use-disorder',
  type: 'condition',
  name: 'Opioid Use Disorder',
  alternateNames: ['OUD', 'Opioid Addiction', 'Opioid Dependence'],

  levels: {
    1: {
      level: 1,
      summary: 'Opioid Use Disorder is a condition where someone has difficulty controlling their use of opioids (like prescription painkillers or heroin), leading to significant problems in their life and health.',
      explanation: `Opioid Use Disorder (OUD) happens when someone becomes dependent on opioids - these are powerful pain medications that can be very addictive.

**What Are Opioids?**

- Prescription painkillers (oxycodone, hydrocodone, morphine, fentanyl)
- Heroin
- Street fentanyl (extremely dangerous)

**Signs of a Problem:**

- Taking more than prescribed
- Unable to stop or cut down
- Strong cravings
- Problems at work, school, or home
- Continuing to use despite health or relationship problems
- Needing more to get the same effect
- Feeling sick when stopping (withdrawal)

**Why It Happens:**

- Opioids flood the brain with pleasure chemicals
- The brain adapts and needs opioids to feel normal
- Genetics play a role
- Pain, trauma, and mental health issues contribute

**Dangers:**

- Overdose can be fatal - opioids slow breathing
- Fentanyl makes overdose more likely
- IV drug use risks (infections, HIV, hepatitis)
- Withdrawal is very uncomfortable (but not life-threatening)

**Treatment Works:**

- Medications like buprenorphine (Suboxone) and methadone are highly effective
- These medications prevent withdrawal and cravings
- Counseling and support groups help
- Naloxone (Narcan) can reverse overdose - everyone should have access`,
      keyTerms: [
        { term: 'opioid', definition: 'A class of drugs that relieve pain but are highly addictive (includes heroin and painkillers)' },
        { term: 'overdose', definition: 'Taking too much of a drug, which can stop breathing and cause death' },
        { term: 'naloxone', definition: 'A medication that can reverse an opioid overdose and save lives' },
        { term: 'withdrawal', definition: 'Unpleasant symptoms when stopping opioids (flu-like, not dangerous)' },
      ],
      analogies: [
        'Opioids hijack the brain\'s natural pleasure system - it\'s like taking the elevator to happiness instead of the stairs, but eventually the elevator breaks.',
        'Medications like buprenorphine are like a seatbelt for the brain - they let people function normally without the dangerous highs and lows.',
      ],
      examples: [
        'Someone might start with prescribed pain pills after surgery and find they can\'t stop taking them.',
        'A person in withdrawal might have severe body aches, vomiting, and feel like they have the worst flu ever.',
      ],
    },
    2: {
      level: 2,
      summary: 'OUD is diagnosed using DSM-5 criteria and is effectively treated with medications (buprenorphine, methadone, naltrexone) combined with behavioral therapies. Naloxone is essential for overdose prevention.',
      explanation: `**DSM-5 Diagnostic Criteria (2+ in 12 months):**

Same criteria as other SUDs:
- Impaired control (4 criteria)
- Social impairment (3 criteria)
- Risky use (2 criteria)
- Pharmacological (tolerance, withdrawal)

**Severity:**
- Mild: 2-3 criteria
- Moderate: 4-5 criteria
- Severe: 6+ criteria

**Opioid Withdrawal:**

Timeline:
- Short-acting (heroin): 8-24 hours after last use
- Long-acting (methadone): 1-3 days after last use
- Duration: 5-10 days (acute)

Symptoms:
- Anxiety, irritability, insomnia
- Muscle aches, bone pain
- Lacrimation (tears), rhinorrhea (runny nose)
- Piloerection ("goose bumps"), sweating
- Nausea, vomiting, diarrhea
- Dilated pupils
- Yawning

*Important:* Withdrawal is very uncomfortable but NOT life-threatening (unlike alcohol/benzodiazepines)

**Overdose:**

Signs:
- Pinpoint pupils
- Unconsciousness
- Slow/stopped breathing
- Blue lips/fingernails

Treatment:
- Naloxone (intranasal or IM)
- Call 911
- Rescue breathing if needed

**Medications for OUD (MOUD):**

*Buprenorphine (Suboxone, Sublocade):*
- Partial mu agonist
- Office-based prescribing
- X-waiver removed 2023 - any prescriber can prescribe
- Daily sublingual or monthly injection

*Methadone:*
- Full mu agonist
- Opioid Treatment Programs (OTPs) only
- Daily observed dosing initially
- Highly effective

*Naltrexone XR (Vivitrol):*
- Mu antagonist
- Monthly injection
- Requires detox first
- Blocks opioid effects

**Behavioral Treatments:**

- CBT
- Contingency management
- 12-step facilitation
- Support groups
- Often combined with medication`,
      keyTerms: [
        { term: 'MOUD', definition: 'Medications for Opioid Use Disorder (buprenorphine, methadone, naltrexone)' },
        { term: 'partial agonist', definition: 'Drug that activates receptor partially; buprenorphine has ceiling effect (safer)' },
        { term: 'X-waiver', definition: 'Former requirement to prescribe buprenorphine; eliminated in 2023' },
        { term: 'OTP', definition: 'Opioid Treatment Program; licensed to dispense methadone' },
      ],
    },
    3: {
      level: 3,
      summary: 'OUD involves mu opioid receptor neuroadaptations with tolerance, dependence, and reward dysregulation. MOUD (buprenorphine, methadone, naltrexone) is first-line treatment, reducing mortality by 50% or more. Harm reduction including naloxone access is essential.',
      explanation: `**Neurobiology:**

*Acute Opioid Effects:*
- Mu receptor activation
- VTA disinhibition → NAc dopamine release
- Analgesia, euphoria, sedation
- Respiratory depression

*Neuroadaptations:*
- Receptor downregulation and desensitization
- cAMP pathway upregulation (adenylyl cyclase superactivation in withdrawal)
- Tolerance develops
- Physical dependence

*Withdrawal Mechanism:*
- Adenylyl cyclase rebound
- Locus coeruleus hyperactivity (norepinephrine surge)
- Explains autonomic symptoms

**Medications:**

*Buprenorphine:*
- Partial mu agonist, kappa antagonist
- High affinity, slow dissociation
- Ceiling effect on respiratory depression
- Sublingual (with or without naloxone)
- Sublocade: Monthly subcutaneous injection
- Induction: Start in mild-moderate withdrawal (COWS ≥8-12)
- Maintenance: 8-24mg/day typical

*Methadone:*
- Full mu agonist
- Long half-life (24-36 hours)
- OTP setting (federal regulations)
- Take-home doses with stability
- Induction: Start low (30mg), titrate slowly
- QTc prolongation consideration
- Highly effective: Retention, reduced illicit use, mortality

*Naltrexone XR:*
- Mu antagonist
- 380mg monthly injection
- Requires 7-10 days opioid-free
- Blocks effects of opioids
- Challenge: Getting through withdrawal to start
- Good for highly motivated, concerned about agonist

**MOUD Outcomes:**

- 50%+ reduction in mortality
- Reduced illicit opioid use
- Decreased HIV/HCV transmission
- Improved social functioning
- Reduced criminal activity
- Retention is key predictor

**Harm Reduction:**

*Naloxone:*
- Mu antagonist, reverses overdose
- Intranasal (Narcan) or IM
- Widely available without prescription
- Train all patients and contacts

*Other Strategies:*
- Syringe services programs
- Drug checking (fentanyl test strips)
- Never use alone
- Supervised consumption (not legal in US)
- HIV/HCV testing and treatment

**Opioid Withdrawal Management:**

*COWS (Clinical Opiate Withdrawal Scale):*
- Scores 0-48
- Mild: 5-12
- Moderate: 13-24
- Moderately severe: 25-36
- Severe: >36

*Medications:*
- Buprenorphine (preferred - can continue as maintenance)
- Methadone (in OTP setting)
- Alpha-2 agonists: Clonidine, lofexidine (FDA approved)
- Symptomatic: NSAIDs, antidiarrheals, antiemetics

*Settings:*
- Outpatient (most common)
- Residential
- Hospital (if medically complicated)`,
      keyTerms: [
        { term: 'COWS', definition: 'Clinical Opiate Withdrawal Scale; scores withdrawal severity' },
        { term: 'ceiling effect', definition: 'Maximum effect reached even with higher doses; makes buprenorphine safer' },
        { term: 'lofexidine', definition: 'FDA-approved alpha-2 agonist for opioid withdrawal' },
        { term: 'take-home doses', definition: 'Methadone doses allowed to take home after demonstrating stability' },
      ],
    },
    4: {
      level: 4,
      summary: 'OUD pathophysiology involves mu receptor-mediated neuroadaptations in reward, stress, and executive circuits. MOUD is evidence-based first-line treatment, with buprenorphine or methadone reducing mortality significantly. Fentanyl has transformed the overdose crisis, requiring enhanced harm reduction.',
      explanation: `**Molecular Mechanisms:**

*Mu Opioid Receptor (MOR):*
- G-protein coupled receptor
- Activates Gi/o
- Decreases cAMP, opens K+ channels, closes Ca++ channels
- Acute: VTA disinhibition (GABA interneuron inhibition)
- NAc dopamine release

*Tolerance Mechanisms:*
- Receptor phosphorylation (GRK, beta-arrestin)
- Internalization and downregulation
- Adenylyl cyclase superactivation
- Cross-tolerance variable

*Dependence:*
- Homeostatic adaptation
- cAMP pathway upregulation
- Locus coeruleus hyperactivity upon removal
- Norepinephrine surge drives withdrawal symptoms

*Stress System:*
- CRF elevation in extended amygdala
- Dynorphin (kappa agonist) upregulation
- Contributes to dysphoria, drives relapse

**Pharmacology Details:**

*Buprenorphine:*
- Ki for mu receptor: ~1 nM (very high affinity)
- Slow dissociation half-life: ~40 minutes
- Can precipitate withdrawal if given with full agonist on board
- Wait for moderate withdrawal (COWS ≥8-12 for short-acting, higher for fentanyl)
- Transmucosal formulations: Sublingual, buccal
- Sublocade: Monthly depot injection

*Methadone:*
- Full agonist at mu receptor
- Also NMDA antagonist (may help pain)
- Long half-life: Accumulation risk
- QTc prolongation: Monitor ECG, avoid QT-prolonging drugs
- Take-home regulations based on stability

*Naltrexone:*
- Competitive mu antagonist
- Half-life ~4 hours (oral), ~1 month (XR injection)
- Must be opioid-free 7-10 days (risk precipitated withdrawal)
- XR-NTX vs. buprenorphine: Similar efficacy if started, but harder to initiate

**Fentanyl Era Challenges:**

- High potency (50-100x morphine)
- Short half-life but high lipophilicity
- Prolonged tissue release
- Precipitated withdrawal more common (buprenorphine induction)
- Higher doses of buprenorphine may be needed
- Novel induction protocols (low-dose, microdosing)

*Buprenorphine Induction Strategies:*
- Standard: Wait for COWS ≥12, start 2-4mg
- Low-dose/microdosing: Start very low (0.5mg), increase slowly
- May avoid precipitated withdrawal
- Useful for fentanyl users

**Special Populations:**

*Pregnancy:*
- Buprenorphine or methadone (not naltrexone)
- Buprenorphine: Less neonatal abstinence syndrome
- Methadone: More established, some prefer
- Do NOT detox (high relapse/fetal risk)
- MOUD protects mother and fetus

*Pain:*
- Buprenorphine provides analgesia
- May need higher/divided doses for pain
- Acute pain: May need short-acting agonists (higher doses)
- Coordinate with pain specialists

*Adolescents:*
- MOUD effective and indicated
- Buprenorphine first-line
- Family involvement important

*Criminal Justice:*
- MOUD should be available
- Transitions critical (high overdose risk at release)
- Many states expanding access

**Outcomes Research:**

- Methadone: 50-70% reduction in mortality
- Buprenorphine: Similar mortality reduction
- Naltrexone XR: Effective if initiated
- Duration matters: Longer treatment, better outcomes
- "Treatment episode" mindset problematic`,
      keyTerms: [
        { term: 'beta-arrestin', definition: 'Protein involved in MOR desensitization and internalization' },
        { term: 'precipitated withdrawal', definition: 'Severe sudden withdrawal from giving antagonist or partial agonist with full agonist on board' },
        { term: 'microdosing induction', definition: 'Starting buprenorphine at very low doses to avoid precipitated withdrawal' },
        { term: 'neonatal abstinence syndrome', definition: 'Withdrawal symptoms in newborn exposed to opioids in utero' },
      ],
      clinicalNotes: 'MOUD is first-line treatment - saves lives. Any prescriber can prescribe buprenorphine (no waiver). Naloxone for all patients. Consider microdosing induction for fentanyl users. Pregnancy: Continue MOUD. Long-term treatment is better. Retention is key.',
    },
    5: {
      level: 5,
      summary: 'Contemporary OUD treatment confronts the fentanyl crisis with novel buprenorphine induction protocols, long-acting formulations, and expanded access. Research explores opioid system pharmacology for improved agonists, vaccines, and non-opioid treatments for chronic pain as primary prevention.',
      explanation: `**Fentanyl Crisis Adaptations:**

*Induction Challenges:*
- Fentanyl tissue depot → prolonged precipitated withdrawal risk
- Standard COWS may not apply
- Patients may need higher COWS (≥20) or different approach

*Low-Dose/Micro-Induction:*
- Start buprenorphine 0.5mg or less
- Gradually increase over days
- Avoids precipitated withdrawal
- Can start without full withdrawal
- Evidence growing

*Buprenorphine Higher Doses:*
- Some patients need >24mg
- Extended-release allows higher exposure
- Sublocade, Brixadi options

*Challenges:*
- Fentanyl test strips
- Xylazine contamination (wounds, withdrawal not opioid-responsive)
- Benzodiazepine contamination
- Polysubstance use

**Long-Acting Formulations:**

*Sublocade:*
- Monthly subcutaneous buprenorphine
- 300mg x2 months, then 100mg or 300mg
- Eliminates diversion concern
- Steady levels

*Brixadi:*
- Weekly or monthly subcutaneous
- More dosing flexibility

*Research:*
- 6-month formulations
- Implants (Probuphine discontinued but concept continues)

**Novel Pharmacological Approaches:**

*Biased Agonists:*
- Favor G-protein over beta-arrestin signaling
- Potentially: Analgesia without respiratory depression
- Oliceridine: FDA-approved for acute pain
- Research for addiction treatment

*Opioid Vaccines:*
- Immunization against specific opioids
- Antibodies sequester drug
- Fentanyl, heroin, oxycodone vaccines in trials
- May complement MOUD

*Allosteric Modulators:*
- Positive allosteric modulators (PAMs) of MOR
- Enhance endogenous opioid effects
- Reduce need for exogenous opioids
- Research phase

*Kappa Antagonists:*
- Target stress/dysphoria system
- JNJ-67953964 and others in trials
- May reduce craving and relapse

**Harm Reduction Advances:**

*Naloxone:*
- Over-the-counter availability (Narcan)
- High-dose formulations for fentanyl era
- Leave-behind programs (ED, EMS)

*Drug Checking:*
- Fentanyl test strips
- Xylazine test strips
- Mass spectrometry services
- Point-of-care testing

*Supervised Consumption:*
- OnPoint NYC (first in US)
- Reduces overdose deaths
- Connects to treatment
- Legal challenges

**Implementation Science:**

*Access Expansion:*
- X-waiver elimination (2023)
- Telehealth MOUD
- Emergency department initiation
- Hospital bridge prescriptions
- Mobile OTPs

*Barriers:*
- Stigma (patients and providers)
- Prior authorization
- Pharmacy willingness
- Rural access
- Payment/coverage

**Primary Prevention:**

*Prescribing:*
- Opioid prescribing guidelines (CDC)
- PDMP use
- Multimodal analgesia
- Non-opioid alternatives

*Non-Opioid Pain Treatment:*
- NSAIDs, acetaminophen
- Nerve blocks
- Physical therapy
- Neuromodulation
- Non-addictive analgesics in development

**Research Priorities:**

1. Fentanyl-era induction optimization
2. Xylazine wound care and withdrawal
3. Long-acting formulations
4. Opioid vaccines
5. Non-opioid analgesics
6. Implementation/dissemination
7. Reducing stigma
8. Health equity

**Policy Considerations:**

- Decriminalization movements
- Drug courts
- Diversion programs
- Medicaid expansion
- Parity enforcement
- Overdose prevention centers`,
      keyTerms: [
        { term: 'biased agonist', definition: 'Agonist preferentially activating one signaling pathway over another at same receptor' },
        { term: 'xylazine', definition: 'Veterinary sedative increasingly contaminating street drug supply; causes wounds' },
        { term: 'OnPoint NYC', definition: 'First legal supervised consumption site in US (opened 2021)' },
        { term: 'PDMP', definition: 'Prescription Drug Monitoring Program; tracks controlled substance prescriptions' },
      ],
      clinicalNotes: `Current practice:
- MOUD first-line, saves lives
- All prescribers can prescribe buprenorphine (no waiver)
- Consider microdosing for fentanyl users
- Naloxone for all patients and contacts
- Long-acting options improve adherence
- Retention is key outcome

Emerging:
- High-dose buprenorphine formulations
- Opioid vaccines (trials)
- Xylazine-adapted protocols
- OTC naloxone
- Supervised consumption

Key points:
- OUD is a treatable medical condition
- MOUD reduces mortality 50%+
- Stigma remains major barrier
- Fentanyl era requires adaptation
- Long-term/chronic disease model`,
    },
  },

  media: [
    {
      id: 'oud-treatment-algorithm',
      type: 'diagram',
      filename: 'oud_treatment_algorithm.svg',
      title: 'OUD Treatment Algorithm',
      description: 'Evidence-based approach to MOUD selection and initiation',
    },
  ],

  citations: [
    {
      id: 'dsm-5-oud',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Substance-Related and Addictive Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-substance-use-disorders-overview', targetType: 'topic', relationship: 'parent', label: 'SUD Overview' },
    { targetId: 'psychiatry-alcohol-use-disorder', targetType: 'condition', relationship: 'related', label: 'Alcohol Use Disorder' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'substance use disorders'],
    keywords: ['opioid', 'heroin', 'fentanyl', 'buprenorphine', 'methadone', 'overdose', 'naloxone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default opioidUseDisorderContent;
