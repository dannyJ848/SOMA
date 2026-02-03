/**
 * Alcohol Use Disorder
 *
 * Comprehensive educational content on alcohol use disorder,
 * its neurobiology, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const alcoholUseDisorderContent: EducationalContent = {
  id: 'psychiatry-alcohol-use-disorder',
  type: 'condition',
  name: 'Alcohol Use Disorder',
  alternateNames: ['AUD', 'Alcoholism', 'Alcohol Dependence'],

  levels: {
    1: {
      level: 1,
      summary: 'Alcohol Use Disorder is a medical condition where someone has difficulty controlling their drinking, continues to drink despite problems it causes, and may have withdrawal symptoms when they stop.',
      explanation: `Alcohol Use Disorder (AUD) is when drinking alcohol causes serious problems in someone's life.

**Signs of a Problem:**

- Drinking more than you planned to
- Trying to cut down but not being able to
- Spending a lot of time drinking or recovering from drinking
- Strong urge to drink (craving)
- Drinking causing problems at work, school, or home
- Continuing to drink even though it causes relationship problems
- Giving up activities you used to enjoy
- Drinking in dangerous situations (like before driving)
- Continuing to drink even though it makes you feel depressed or causes health problems
- Needing more alcohol to feel the same effect
- Feeling sick when you stop drinking (shaky, sweaty, nauseous)

**Why It Happens:**

- Alcohol changes the brain over time
- Genetics play a role (runs in families)
- Stress, trauma, and mental health issues can contribute
- Starting to drink at a young age increases risk

**Important to Know:**

- AUD is a medical condition, not a moral failing
- It can range from mild to severe
- Treatment works - many people recover
- You don't have to hit "rock bottom" to get help

**Treatment:**

- Medications that reduce cravings or make drinking unpleasant
- Counseling and therapy
- Support groups like Alcoholics Anonymous
- Treatment for any mental health issues
- Support from family and friends`,
      keyTerms: [
        { term: 'tolerance', definition: 'Needing more alcohol to feel the same effect' },
        { term: 'withdrawal', definition: 'Feeling sick when you stop drinking after heavy use' },
        { term: 'craving', definition: 'A strong urge or desire to drink' },
      ],
      analogies: [
        'Alcohol hijacks the brain\'s reward system - it\'s like a shortcut that bypasses normal pleasure and becomes the main path.',
        'Withdrawal is like the body protesting when you take away something it has become dependent on to function "normally."',
      ],
      examples: [
        'Someone might intend to have one drink but end up having five.',
        'A person might need a drink in the morning to stop their hands from shaking.',
      ],
    },
    2: {
      level: 2,
      summary: 'AUD is diagnosed using DSM-5 criteria assessing impaired control, social impairment, risky use, and pharmacological indicators. Treatment includes FDA-approved medications (naltrexone, acamprosate, disulfiram) and behavioral therapies.',
      explanation: `**DSM-5 Diagnostic Criteria (2+ in 12 months):**

*Impaired Control:*
1. Drinking more or longer than intended
2. Persistent desire or unsuccessful efforts to cut down
3. Great deal of time obtaining, using, or recovering
4. Craving

*Social Impairment:*
5. Failure to fulfill major role obligations
6. Continued use despite social/interpersonal problems
7. Important activities given up or reduced

*Risky Use:*
8. Recurrent use in hazardous situations
9. Continued despite physical/psychological problems

*Pharmacological:*
10. Tolerance
11. Withdrawal

**Severity:**
- Mild: 2-3 criteria
- Moderate: 4-5 criteria
- Severe: 6+ criteria

**Alcohol Withdrawal:**

Timeline:
- 6-12 hours: Tremor, anxiety, nausea, insomnia
- 12-24 hours: Hallucinations (may occur)
- 24-48 hours: Seizure risk highest
- 48-72 hours: Delirium tremens (DTs) risk in severe cases

DTs Signs:
- Confusion, agitation
- Fever
- Autonomic instability
- Hallucinations
- Can be life-threatening

**Medical Complications:**

*Liver:* Fatty liver → Hepatitis → Cirrhosis
*GI:* Gastritis, pancreatitis, varices
*Cardiac:* Cardiomyopathy, arrhythmias
*Neurological:* Peripheral neuropathy, Wernicke-Korsakoff
*Cancer:* Increased risk multiple cancers
*Other:* Immune suppression, nutritional deficiencies

**Treatment:**

*Medications (FDA-approved):*
- Naltrexone: Reduces cravings and reward
- Acamprosate: Reduces craving, helps maintain abstinence
- Disulfiram: Causes unpleasant reaction if drinking

*Behavioral:*
- CBT
- Motivational Enhancement Therapy
- 12-Step Facilitation
- Brief interventions (for mild cases)

*Support:*
- Alcoholics Anonymous
- SMART Recovery
- Family involvement`,
      keyTerms: [
        { term: 'delirium tremens', definition: 'Severe alcohol withdrawal with confusion, fever, hallucinations - medical emergency' },
        { term: 'Wernicke-Korsakoff syndrome', definition: 'Brain damage from thiamine deficiency in alcoholism' },
        { term: 'CIWA', definition: 'Clinical Institute Withdrawal Assessment - scale to monitor alcohol withdrawal severity' },
      ],
    },
    3: {
      level: 3,
      summary: 'AUD involves GABAergic and glutamatergic neuroadaptations, with withdrawal due to CNS hyperexcitability. Management includes benzodiazepine-based withdrawal treatment and medications targeting opioid, glutamate, and GABA systems for relapse prevention.',
      explanation: `**Neurobiology:**

*Acute Alcohol Effects:*
- Enhances GABA-A receptor function
- Inhibits NMDA glutamate receptors
- Increases dopamine in NAc (reward)
- Endogenous opioid release

*Chronic Adaptations:*
- GABA-A receptor downregulation
- NMDA receptor upregulation
- Dopamine system dysregulation
- Stress system activation (CRF)

*Withdrawal Mechanism:*
- Reduced GABA + Enhanced glutamate = CNS hyperexcitability
- Explains tremor, seizures, DTs

**Withdrawal Management:**

*CIWA-Ar Protocol:*
- Score withdrawal severity (0-67)
- Symptom-triggered benzodiazepine dosing
- Diazepam or chlordiazepoxide typical
- Lorazepam if liver disease

*Fixed-Dose vs. Symptom-Triggered:*
- Symptom-triggered: Less medication, shorter treatment
- Fixed-dose: For severe cases, history of seizures/DTs

*Adjunctive:*
- Thiamine (prevent Wernicke's) - BEFORE glucose
- Folate
- Magnesium
- Multivitamin
- Fluids

*Seizure/DTs Prevention:*
- Benzodiazepines primary
- Higher doses for severe cases
- Consider phenobarbital for refractory
- ICU for DTs

**Pharmacotherapy for Relapse Prevention:**

*Naltrexone:*
- Mu opioid receptor antagonist
- Reduces rewarding effects of alcohol
- Decreases heavy drinking days
- Oral 50mg daily or monthly injection (Vivitrol 380mg)
- Contraindicated if on opioids

*Acamprosate:*
- Glutamate modulator
- Normalizes hyperglutamatergic state
- Reduces craving
- 666mg TID
- Good for maintaining abstinence

*Disulfiram:*
- Inhibits aldehyde dehydrogenase
- Causes acetaldehyde accumulation if drinking
- Flushing, nausea, vomiting, hypotension
- 250-500mg daily
- Requires motivation and supervision

*Off-Label:*
- Topiramate: Reduces heavy drinking
- Gabapentin: May help, especially with anxiety/insomnia
- Baclofen: Some evidence, especially with liver disease

**Behavioral Treatments:**

*Motivational Interviewing/Enhancement:*
- Address ambivalence
- Increase motivation for change
- Non-confrontational

*CBT:*
- Identify triggers
- Coping skills
- Functional analysis
- Relapse prevention

*12-Step Facilitation:*
- Engagement with AA
- Structured approach
- Social support

*Combined Behavioral Intervention (CBI):*
- Integrates multiple approaches
- From COMBINE study`,
      keyTerms: [
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment-Alcohol, revised; scores withdrawal severity' },
        { term: 'symptom-triggered dosing', definition: 'Giving benzodiazepines based on withdrawal severity scores rather than fixed schedule' },
        { term: 'aldehyde dehydrogenase', definition: 'Enzyme metabolizing acetaldehyde; inhibited by disulfiram' },
        { term: 'COMBINE study', definition: 'Large trial showing naltrexone and behavioral therapy effective for AUD' },
      ],
    },
    4: {
      level: 4,
      summary: 'AUD pathophysiology involves GABAergic hypofunction, glutamatergic hyperfunction, dopaminergic dysregulation, and stress system sensitization. Treatment integrates evidence-based pharmacotherapy (naltrexone, acamprosate) with behavioral interventions, tailored to patient characteristics.',
      explanation: `**Molecular Mechanisms:**

*GABA System:*
- Acute: Positive allosteric modulation of GABA-A
- Alpha-1 subunit: Sedation, amnesia
- Alpha-2/3: Anxiolytic effects
- Chronic: Subunit expression changes, downregulation
- Withdrawal: Reduced GABAergic tone

*Glutamate System:*
- Acute: NMDA receptor inhibition
- Chronic: NMDA receptor upregulation
- NR2B subunit changes
- Withdrawal: Glutamate surge, excitotoxicity
- Target for acamprosate

*Dopamine:*
- Acute: VTA → NAc dopamine release
- Chronic: Mesolimbic hypofunction
- Reduced D2 receptors
- Anhedonia, dysphoria in abstinence

*Stress/CRF:*
- Extended amygdala CRF increase
- HPA axis dysregulation
- Drives negative reinforcement
- Target for treatment development

*Endogenous Opioids:*
- Beta-endorphin release with alcohol
- Contributes to reward
- Target of naltrexone

**Genetics:**

- Heritability: ~50%
- ADH1B, ALDH2 variants (protective in East Asian populations)
- GABRA2 associations
- CHRM2, DRD2/ANKK1
- OPRM1 Asp40 may predict naltrexone response
- Polygenic risk scores developing

**Pharmacotherapy Details:**

*Naltrexone:*
- Mechanism: Mu opioid antagonist blocks rewarding effects
- Efficacy: Reduces heavy drinking, increases abstinent days
- NNT ~12 for preventing return to any drinking
- XR injection (Vivitrol): Better adherence
- Contraindications: Opioid use, acute hepatitis
- OPRM1 Asp40 may predict response (research)

*Acamprosate:*
- Mechanism: Glutamate modulation (NMDA, mGluR5)
- Efficacy: Maintains abstinence, reduces craving
- NNT ~9 for continuous abstinence
- Dosing: 666mg TID (renal adjustment needed)
- Well-tolerated (GI side effects)
- Works better in abstinence-focused goals

*Disulfiram:*
- Mechanism: ALDH inhibitor → acetaldehyde accumulation
- Efficacy: Works if supervised adherence
- Most useful with external monitoring
- Contraindications: Cardiovascular disease, severe liver disease
- Drug interactions important

*Emerging/Off-Label:*
- Gabapentin: Especially with insomnia, anxiety
- Topiramate: Reduces heavy drinking
- Ondansetron: Early-onset alcoholism subtype
- Baclofen: Liver disease (European interest)

**Treatment Matching:**

*Considerations:*
- Drinking goal (moderation vs. abstinence)
- Severity
- Comorbidities
- Medication adherence capacity
- Patient preference

*COMBINE Study Findings:*
- Naltrexone + medical management effective
- CBI + medical management effective
- Acamprosate less effective in US study (but positive in European)
- Combination medication not superior

**Wernicke-Korsakoff Syndrome:**

*Wernicke Encephalopathy:*
- Thiamine deficiency
- Triad: Confusion, ataxia, ophthalmoplegia
- Often incomplete presentation
- Medical emergency
- High-dose IV thiamine (500mg TID for 3 days)

*Korsakoff Syndrome:*
- Chronic amnesia (anterograde > retrograde)
- Confabulation
- Often follows untreated Wernicke
- Poor prognosis
- Prevention with thiamine supplementation`,
      keyTerms: [
        { term: 'allosteric modulation', definition: 'Changing receptor function by binding at site other than main binding site' },
        { term: 'excitotoxicity', definition: 'Neuronal damage from excessive glutamate stimulation' },
        { term: 'NNT', definition: 'Number needed to treat; patients needed to treat for one to benefit' },
        { term: 'confabulation', definition: 'Making up stories to fill memory gaps, seen in Korsakoff syndrome' },
      ],
      clinicalNotes: 'Thiamine before glucose always. Use CIWA for withdrawal management. Offer medications for relapse prevention. Combine with behavioral treatment. Address co-occurring disorders. Long-term follow-up essential. Consider injection naltrexone for adherence.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AUD research explores precision medicine approaches, novel targets (e.g., neuroimmune, stress systems), and integrates pharmacogenomics for treatment selection. Emerging therapeutics include glutamate modulators, GLP-1 agonists, and psychedelic-assisted treatments.',
      explanation: `**Precision Medicine:**

*Pharmacogenomics:*
- OPRM1 Asp40: May predict naltrexone response
- Other variants under investigation
- Not yet clinically implemented
- Challenges: Effect sizes, validation

*Phenotypic Subtyping:*
- Reward-seeking vs. relief-seeking drinking
- Stress-reactivity profiles
- Biomarkers for matching
- Treatment response prediction

*Biomarkers:*
- Neuroimaging predictors
- HPA axis measures
- Inflammatory markers
- Machine learning approaches

**Novel Therapeutic Targets:**

*Neuroimmune:*
- Elevated cytokines, TLR4 signaling
- Microglial activation
- Anti-inflammatory approaches
- PDE inhibitors (ibudilast, apremilast)

*Stress Systems:*
- CRF1 antagonists (development challenges)
- NPY, orexin targets
- Glucocorticoid modulators
- Alpha-1 antagonists (prazosin)

*Glutamate:*
- NMDA modulators (memantine, d-cycloserine)
- mGluR modulators
- NAC studies

*GLP-1 Agonists:*
- Semaglutide, liraglutide
- Reduce alcohol intake in preclinical studies
- Human trials ongoing
- May reduce reward from alcohol

**Psychedelic-Assisted Therapy:**

*Psilocybin:*
- Open-label and RCT data
- Significant reductions in drinking
- Combined with therapy
- Mystical experience may mediate effect
- FDA breakthrough therapy anticipated

*Ketamine:*
- Disrupts alcohol-related memories
- Reconsolidation interference
- Combined with therapy
- Early positive data

**Neuromodulation:**

*TMS:*
- DLPFC stimulation
- Reduce craving
- Early evidence
- Optimal protocols unclear

*tDCS:*
- Prefrontal stimulation
- Reduce craving and consumption
- Accessible, home-based potential
- Research ongoing

**Digital Therapeutics:**

*Smartphone Apps:*
- Self-monitoring
- Cue exposure/CBT delivery
- Just-in-time interventions
- FDA interest

*Wearables:*
- Alcohol biosensors
- Real-time monitoring
- Contingency management integration

**Implementation Science:**

*Screening:*
- AUDIT/AUDIT-C
- SBIRT (Screening, Brief Intervention, Referral)
- Universal screening recommended

*Integration:*
- Primary care integration
- Collaborative care models
- Telehealth expansion

*Barriers:*
- Medication underutilization
- Provider knowledge gaps
- Stigma
- Access disparities

**Special Populations:**

*Older Adults:*
- Increasing prevalence
- Medical comorbidities
- Medication interactions
- Different presentation

*Liver Disease:*
- Acamprosate safe (renal adjustment)
- Naltrexone: Caution with hepatitis
- Baclofen: Some European evidence

*Pregnancy:*
- Fetal alcohol spectrum disorders
- Brief interventions
- Intensive treatment

**Research Priorities:**

1. Precision medicine approaches
2. Novel medications (GLP-1, neuroimmune)
3. Psilocybin trials
4. Biomarkers for treatment matching
5. Implementation strategies
6. Harm reduction approaches
7. Health disparities
8. Long-term outcomes`,
      keyTerms: [
        { term: 'TLR4', definition: 'Toll-like receptor 4; involved in neuroimmune response to alcohol' },
        { term: 'SBIRT', definition: 'Screening, Brief Intervention, and Referral to Treatment; universal approach' },
        { term: 'fetal alcohol spectrum disorders', definition: 'Range of effects from prenatal alcohol exposure' },
        { term: 'reconsolidation interference', definition: 'Disrupting drug memories during retrieval to weaken them' },
      ],
      clinicalNotes: `Current practice:
- FDA-approved medications underutilized
- Naltrexone or acamprosate first-line
- Combine with behavioral treatment
- Withdrawal management with CIWA-guided benzos
- Thiamine for all
- Screen and treat co-occurring disorders

Emerging:
- Psilocybin-assisted therapy (trials ongoing)
- GLP-1 agonists (research stage)
- Digital therapeutics
- Precision approaches

Key points:
- Medications are effective and safe
- Most patients don't receive medication
- Long-term, chronic disease management
- Harm reduction acceptable when abstinence not achieved`,
    },
  },

  media: [
    {
      id: 'aud-treatment-algorithm',
      type: 'diagram',
      filename: 'aud_treatment_algorithm.svg',
      title: 'AUD Treatment Algorithm',
      description: 'Evidence-based approach to AUD management',
    },
  ],

  citations: [
    {
      id: 'dsm-5-aud',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Substance-Related and Addictive Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-substance-use-disorders-overview', targetType: 'topic', relationship: 'parent', label: 'SUD Overview' },
    { targetId: 'psychiatry-opioid-use-disorder', targetType: 'condition', relationship: 'related', label: 'Opioid Use Disorder' },
  ],

  tags: {
    systems: ['nervous', 'hepatic', 'cardiovascular'],
    topics: ['psychiatry', 'substance use disorders'],
    keywords: ['alcohol', 'alcoholism', 'addiction', 'withdrawal', 'naltrexone'],
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

export default alcoholUseDisorderContent;
