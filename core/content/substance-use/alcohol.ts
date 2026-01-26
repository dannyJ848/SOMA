/**
 * Alcohol - Health Effects, Disorders, and Treatment
 *
 * Comprehensive education about alcohol including standard drinks,
 * low-risk guidelines, alcohol use disorder, health effects,
 * withdrawal dangers, and treatment options.
 */

import { EducationalContent } from '../types';

export const alcoholContent: EducationalContent = {
  id: 'substance-use-alcohol',
  type: 'concept',
  name: 'Alcohol',
  alternateNames: ['Ethanol', 'Alcohol Use Disorder', 'AUD', 'Alcoholism'],

  levels: {
    1: {
      level: 1,
      summary: 'Alcohol affects every organ in the body. Knowing what a standard drink is and understanding low-risk drinking guidelines can help you make informed choices. Alcohol use disorder is a medical condition that can be treated.',
      explanation: `**What Is a Standard Drink?**

Not all drinks are equal! A "standard drink" contains about the same amount of alcohol:
- 12 oz regular beer (5% alcohol) = 1 drink
- 5 oz wine (12% alcohol) = 1 drink
- 1.5 oz liquor (40% alcohol/80 proof) = 1 drink

A large glass of wine or a strong cocktail often contains 2-3 standard drinks.

**Low-Risk Drinking Guidelines (for healthy adults who choose to drink):**

*Women:*
- No more than 3 drinks on any single day
- No more than 7 drinks per week

*Men:*
- No more than 4 drinks on any single day
- No more than 14 drinks per week

**Who Should NOT Drink at All:**
- People under 21
- Pregnant or trying to get pregnant
- People taking certain medications
- People with certain medical conditions
- People in recovery from alcohol use disorder
- Anyone who cannot control their drinking

**Health Effects of Heavy Drinking:**

*Short-term:*
- Accidents and injuries
- Alcohol poisoning (can be deadly)
- Risky behavior

*Long-term:*
- Liver disease
- Heart problems
- Brain damage
- Increased cancer risk
- Mental health problems

**Alcohol Use Disorder (AUD):**

AUD is a medical condition where a person:
- Cannot control how much they drink
- Continues drinking despite problems it causes
- Feels sick when they stop drinking

**The Good News:**

AUD is treatable! Options include:
- Counseling and therapy
- Medications that help reduce cravings
- Support groups (like AA)
- Medical care for withdrawal

**Warning:** Suddenly stopping heavy drinking can be dangerous. Always get medical help.`,
      keyTerms: [
        { term: 'standard drink', definition: 'A measure of alcohol that equals about 14 grams of pure alcohol' },
        { term: 'alcohol use disorder', definition: 'A medical condition where someone cannot control their drinking despite problems it causes' },
        { term: 'alcohol poisoning', definition: 'A dangerous condition from drinking too much alcohol too fast; can be deadly' },
        { term: 'low-risk drinking', definition: 'Drinking patterns that have less risk of causing health problems' },
      ],
      analogies: [
        'A standard drink is like a measuring cup for alcohol - it helps you know how much you\'re actually having.',
        'Think of your liver as a factory that can only process one drink per hour - drinking faster creates a backup.',
      ],
      examples: [
        'A 16-oz craft beer at 8% alcohol is actually about 2.5 standard drinks.',
        'A large restaurant wine pour (8 oz) equals about 1.5 standard drinks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Alcohol is a central nervous system depressant that affects multiple organ systems. Understanding standard drinks, low-risk guidelines, and signs of alcohol use disorder helps with early identification and treatment.',
      explanation: `**How Alcohol Affects the Body:**

*Central Nervous System Effects:*
- Depresses brain function
- Impairs judgment, coordination, memory
- At high levels: slowed breathing, unconsciousness

*Liver Processing:*
- Liver metabolizes about 1 drink/hour
- Alcohol → Acetaldehyde → Acetate
- Chronic use damages liver cells

**Standard Drink Equivalents (14g pure alcohol):**

| Drink Type | Amount | Alcohol % |
|------------|--------|-----------|
| Regular beer | 12 oz | ~5% |
| Light beer | 12 oz | ~4.2% |
| Wine | 5 oz | ~12% |
| Fortified wine | 3-4 oz | ~17% |
| Distilled spirits | 1.5 oz | ~40% |

**NIAAA Low-Risk Drinking Guidelines:**

*Women:*
- Single day maximum: 3 drinks
- Weekly maximum: 7 drinks

*Men:*
- Single day maximum: 4 drinks
- Weekly maximum: 14 drinks

*Low risk, not no risk* - About 2% of people following these guidelines develop AUD.

**Blood Alcohol Concentration (BAC):**
- 0.02%: Mild relaxation, slight mood changes
- 0.05%: Lowered inhibitions, impaired judgment
- 0.08%: Legal limit for driving (impaired)
- 0.15%: Significant impairment, possible blackout
- 0.30%+: Life-threatening, possible coma

**Alcohol Use Disorder (DSM-5 Criteria):**

A pattern of drinking causing significant impairment, with 2+ criteria in 12 months:
- Drinking more or longer than intended
- Unsuccessful attempts to cut down
- Spending much time obtaining/using/recovering from alcohol
- Craving
- Failure to fulfill obligations
- Continued use despite social/relationship problems
- Giving up activities due to drinking
- Drinking in dangerous situations
- Continued use despite physical/psychological problems
- Tolerance
- Withdrawal

Severity: Mild (2-3 criteria), Moderate (4-5), Severe (6+)

**Health Consequences:**

*Organ Damage:*
- Fatty liver → Hepatitis → Cirrhosis
- Cardiomyopathy
- Pancreatitis
- Brain atrophy (Wernicke-Korsakoff)

*Cancer Risk (increased):*
- Mouth, throat, esophagus
- Liver, colon, breast

**Withdrawal Syndrome:**

*Timeline:*
- 6-12 hours: Tremor, anxiety, nausea
- 12-24 hours: Possible hallucinations
- 24-48 hours: Seizure risk highest
- 48-72 hours: Risk of delirium tremens (DTs)

*Delirium Tremens (medical emergency):*
- Confusion, disorientation
- Hallucinations
- Severe tremors
- Fever, sweating
- Can be fatal (5-15% mortality if untreated)

**Treatment Options:**
- Medically supervised detox
- Medications: naltrexone, acamprosate, disulfiram
- Counseling and behavioral therapy
- Support groups (AA, SMART Recovery)
- Residential treatment programs`,
      keyTerms: [
        { term: 'blood alcohol concentration (BAC)', definition: 'Measurement of alcohol in the bloodstream, expressed as a percentage', pronunciation: 'B-A-C' },
        { term: 'cirrhosis', definition: 'Severe scarring of the liver from long-term damage, including from heavy drinking', pronunciation: 'sih-ROH-sis' },
        { term: 'delirium tremens', definition: 'A severe, potentially fatal form of alcohol withdrawal with confusion, tremors, and hallucinations', pronunciation: 'deh-LEER-ee-um TREE-menz' },
        { term: 'Wernicke-Korsakoff syndrome', definition: 'Brain damage from thiamine (vitamin B1) deficiency, often caused by chronic alcohol use' },
      ],
    },
    3: {
      level: 3,
      summary: 'Alcohol use disorder involves neurobiological adaptations in GABA/glutamate systems and reward circuits. Withdrawal is a medical emergency requiring appropriate assessment and treatment, while long-term management includes FDA-approved medications and psychosocial interventions.',
      explanation: `**Pharmacology of Ethanol:**

*Mechanism of Action:*
- Enhances GABA-A receptor function (inhibitory)
- Inhibits NMDA glutamate receptors (excitatory)
- Releases endogenous opioids
- Modulates dopamine in mesolimbic pathway
- Affects serotonin, adenosine, and other systems

*Pharmacokinetics:*
- Absorption: Primarily small intestine (80%), some gastric
- Distribution: Total body water (Vd ~0.5 L/kg)
- Metabolism: Primarily hepatic (ADH → ALDH)
- Elimination: Zero-order kinetics (15-20 mg/dL/hour)

*Genetic Factors:*
- ADH1B, ALDH2 variants affect metabolism
- "Asian flush" (ALDH2*2) is protective against AUD
- Family history increases risk 4-7x

**Neuroadaptation in Chronic Use:**

*GABA System:*
- Downregulation of GABA-A receptors
- Reduced inhibitory neurotransmission
- Contributes to tolerance and withdrawal hyperexcitability

*Glutamate System:*
- Upregulation of NMDA receptors
- Enhanced excitatory neurotransmission
- Contributes to excitotoxicity and withdrawal seizures

**Clinical Assessment:**

*Screening Tools:*
- AUDIT (Alcohol Use Disorders Identification Test): 10 questions, score >8 suggests AUD
- AUDIT-C: 3-question abbreviated version
- CAGE: 4 questions, score >2 suggests problem drinking

*Medical Workup:*
- CBC (macrocytic anemia, thrombocytopenia)
- LFTs (elevated GGT, AST > ALT typically 2:1)
- Coagulation studies (PT/INR if liver disease suspected)
- Thiamine level (if possible)
- Phosphorus, magnesium (often depleted)

**Alcohol Withdrawal Management:**

*Risk Stratification:*
- CIWA-Ar (Clinical Institute Withdrawal Assessment): Guides treatment
- PAWSS (Prediction of Alcohol Withdrawal Severity Scale): Predicts severe withdrawal

*CIWA-Ar Scoring (0-67):*
- <10: Mild withdrawal, may not need medication
- 10-18: Moderate withdrawal
- >18: Severe withdrawal, high risk for complications

*Pharmacologic Treatment:*
- Benzodiazepines (first-line): Diazepam, chlordiazepoxide, lorazepam
- Symptom-triggered dosing preferred over fixed-schedule
- Phenobarbital as adjunct or alternative
- Avoid antipsychotics alone (lower seizure threshold)

*Thiamine (Critical):*
- Give BEFORE glucose to prevent precipitating Wernicke encephalopathy
- IV thiamine 500mg TID x 3 days for suspected Wernicke
- Oral supplementation ongoing

**FDA-Approved Medications for AUD:**

| Medication | Mechanism | Dosing | Key Points |
|------------|-----------|--------|------------|
| Naltrexone | Opioid antagonist | 50mg daily PO or 380mg IM monthly | Reduces craving, must be opioid-free |
| Acamprosate | NMDA/GABA modulation | 666mg TID | Safe in liver disease, renally cleared |
| Disulfiram | ALDH inhibitor | 250-500mg daily | Aversive therapy, compliance challenging |

*Off-Label Options:*
- Gabapentin: Particularly helpful for sleep, anxiety
- Topiramate: Reduces heavy drinking days
- Baclofen: Some evidence, used more in Europe
- Ondansetron: May help early-onset AUD

**Psychosocial Treatments:**
- Cognitive Behavioral Therapy (CBT)
- Motivational Enhancement Therapy (MET)
- 12-Step Facilitation
- Community Reinforcement Approach (CRA)
- Contingency Management`,
      keyTerms: [
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol, revised; standardized scale for assessing and managing alcohol withdrawal' },
        { term: 'AUDIT', definition: 'Alcohol Use Disorders Identification Test; validated 10-question screening tool' },
        { term: 'naltrexone', definition: 'Opioid antagonist medication that reduces alcohol craving and reward' },
        { term: 'acamprosate', definition: 'Medication for AUD that helps restore GABA/glutamate balance' },
        { term: 'Wernicke encephalopathy', definition: 'Acute neurological disorder from thiamine deficiency; triad of confusion, ataxia, ophthalmoplegia' },
      ],
      clinicalNotes: 'Always give thiamine before glucose in patients at risk for Wernicke encephalopathy. Symptom-triggered benzodiazepine dosing reduces total medication needed and duration of treatment. Consider long-acting injectable naltrexone for patients with adherence challenges.',
    },
    4: {
      level: 4,
      summary: 'Alcohol use disorder management requires understanding kindling, withdrawal neurobiology, medical complications, and evidence-based treatment algorithms including medication selection based on patient characteristics and concurrent conditions.',
      explanation: `**Neurobiology of Alcohol Withdrawal:**

*Molecular Mechanisms:*
- Chronic alcohol: GABA-A receptor internalization, NMDA receptor upregulation
- Withdrawal: Unopposed glutamatergic hyperexcitability
- Excitotoxicity via Ca2+ influx, cell death
- HPA axis activation, elevated CRF and cortisol

*Kindling Phenomenon:*
- Repeated withdrawals increase severity
- Lower seizure threshold with each episode
- Cellular changes in amygdala and hippocampus
- Progressive neurodegeneration

*Neuroinflammation:*
- Microglial activation, cytokine release
- Contributes to neurotoxicity
- Target for emerging therapies

**Complicated Withdrawal Syndromes:**

*Alcoholic Hallucinosis:*
- Occurs 12-48 hours after last drink
- Predominantly visual or auditory hallucinations
- Clear sensorium (unlike DTs)
- Usually resolves within 24-48 hours

*Withdrawal Seizures:*
- Typically 24-48 hours post-cessation
- Usually generalized tonic-clonic
- Brief, 1-2 episodes
- 30% of untreated patients with seizures progress to DTs

*Delirium Tremens:*
- Onset 48-96 hours (peak 72 hours)
- Profound confusion, hallucinations
- Autonomic instability (tachycardia, hypertension, fever)
- Mortality 5-15% even with treatment
- Risk factors: Prior DTs, concurrent illness, high CIWA scores

**Medical Complications of Chronic Alcohol Use:**

*Gastrointestinal:*
- Alcoholic hepatitis (discriminant function >32: poor prognosis)
- Cirrhosis with portal hypertension, varices
- Pancreatitis (acute and chronic)
- Esophageal cancer (synergistic with tobacco)

*Cardiovascular:*
- Alcoholic cardiomyopathy (dilated)
- Atrial fibrillation ("holiday heart")
- Hypertension
- Paradoxical J-curve for CAD (controversial)

*Neurological:*
- Wernicke encephalopathy (triad: confusion, ataxia, oculomotor dysfunction)
- Korsakoff syndrome (anterograde and retrograde amnesia)
- Cerebellar degeneration
- Peripheral neuropathy
- Central pontine myelinolysis (with rapid Na+ correction)

*Hematological:*
- Macrocytic anemia (direct toxicity + folate deficiency)
- Thrombocytopenia
- Leukopenia (increased infection risk)

*Endocrine:*
- Testicular atrophy, gynecomastia
- Pseudo-Cushing syndrome
- Hypoglycemia

**Advanced Pharmacotherapy:**

*Medication Selection Algorithm:*
1. Assess contraindications (opioid use, liver disease, renal function)
2. Patient preference and treatment goals
3. Comorbid conditions (anxiety, sleep issues)

*Specific Considerations:*
- Naltrexone: Avoid with opioid use; XR form improves adherence
- Acamprosate: Preferred in hepatic impairment; avoid in severe renal disease
- Disulfiram: Requires motivation; supervised dosing improves outcomes
- Gabapentin: Helpful for anxiety, insomnia; fewer drug interactions
- Topiramate: Weight loss side effect; cognitive side effects possible

*Combination Therapy:*
- Naltrexone + acamprosate (COMBINE trial: no significant benefit over monotherapy)
- Naltrexone + gabapentin may have additive effects

**Psychosocial Treatment Intensity:**

*Matching Treatment to Severity:*
- Mild AUD: Brief intervention, SBIRT, mutual help groups
- Moderate AUD: Outpatient counseling + medication
- Severe AUD: Intensive outpatient or residential + medication

*Evidence Base:*
- CBT + MET combinations effective
- TSF (12-Step Facilitation) equivalent to other therapies
- Mutual help group participation (AA) associated with improved outcomes
- Contingency management effective when applied`,
      keyTerms: [
        { term: 'kindling', definition: 'Progressive worsening of withdrawal symptoms with repeated episodes; caused by neuroadaptive changes' },
        { term: 'Maddrey discriminant function', definition: 'Calculation predicting prognosis in alcoholic hepatitis (>32 indicates severe disease)' },
        { term: 'holiday heart', definition: 'Atrial fibrillation triggered by binge drinking, often in patients without heart disease' },
        { term: 'central pontine myelinolysis', definition: 'Demyelination in brainstem from rapid sodium correction; risk in hyponatremic alcoholics' },
        { term: 'COMBINE trial', definition: 'Large NIH study of medication combinations for AUD; showed naltrexone effective with medical management' },
      ],
      clinicalNotes: 'The kindling model has important treatment implications: early, effective treatment of withdrawal may prevent progression. In alcoholic hepatitis, calculate Maddrey discriminant function to guide corticosteroid therapy. Long-acting injectable naltrexone (Vivitrol) should be considered for all patients with AUD who are not on opioids.',
    },
    5: {
      level: 5,
      summary: 'Contemporary alcohol use disorder management integrates biomarker-guided treatment, pharmacogenomics for medication selection, novel therapeutic targets, and precision medicine approaches within a comprehensive care framework addressing medical, psychiatric, and social determinants.',
      explanation: `**Biomarkers in AUD:**

*Diagnostic/Monitoring Biomarkers:*
- Phosphatidylethanol (PEth): Highly specific, 3-4 week detection
- Ethyl glucuronide (EtG): 3-4 day detection in urine
- Carbohydrate-deficient transferrin (CDT): Chronic heavy drinking marker
- Gamma-glutamyl transferase (GGT): Sensitive but not specific
- Mean corpuscular volume (MCV): Late marker of chronic use

*Treatment Response Biomarkers (Research):*
- GABA-A receptor imaging
- Dopamine D2/D3 receptor availability
- fMRI cue-reactivity patterns
- Inflammatory markers (CRP, cytokines)

**Pharmacogenomics:**

*OPRM1 A118G:*
- Asp40 allele: May reduce naltrexone efficacy
- Consider XR naltrexone or alternative medication
- Some studies show opposite effect; field still developing

*GRIK1 rs2832407:*
- C-allele: Better topiramate response
- Used in some clinical algorithms

*ADH/ALDH Genetics:*
- ADH1B*2, ALDH2*2: Protective variants (more common in East Asians)
- May influence medication metabolism

**Novel Therapeutic Targets:**

*Glutamate System:*
- Ketamine: Emerging interest for AUD, RCTs ongoing
- mGluR5 antagonists: Reduce craving in preclinical models
- Glycine/NMDA modulators: Under investigation

*Neuroimmune Modulation:*
- PDE4 inhibitors (ibudilast): Reduce neuroinflammation
- TLR4 antagonists: Target microglial activation
- Anti-inflammatory approaches (N-acetylcysteine)

*Glucocorticoid System:*
- Mifepristone: Blocks glucocorticoid receptor
- May reduce craving and stress-induced drinking

*Neurosteroids:*
- Positive allosteric GABA-A modulators
- Potential for withdrawal and maintenance treatment

**Neuromodulation:**

*Transcranial Magnetic Stimulation (TMS):*
- Target: Right dlPFC (reduce craving)
- 10-20 sessions, 10 Hz stimulation
- Moderate effect sizes in studies
- Not yet FDA-approved for AUD

*Transcranial Direct Current Stimulation (tDCS):*
- Anodal stimulation to left dlPFC
- May reduce craving
- Accessible, but evidence still building

*Deep Brain Stimulation:*
- Nucleus accumbens targeting
- Case reports/series in severe, treatment-refractory AUD
- Ethical considerations prominent

**Integrated Treatment Models:**

*Collaborative Care:*
- Primary care + behavioral health + specialty addiction medicine
- Proactive care management
- Registry-based monitoring
- Improved outcomes vs usual care

*MOUD in Primary Care:*
- Extended-release naltrexone initiation feasible
- Nurse care management models
- Telemedicine prescribing expansion

*Low-Threshold Treatment:*
- Same-day medication starts
- Reduce barriers to care
- "Warm handoffs" from ED to outpatient

**Special Populations:**

*Pregnant Patients:*
- No safe level of alcohol during pregnancy
- Fetal alcohol spectrum disorders prevention
- Medication considerations (naltrexone category C)
- Prioritize behavioral interventions

*Geriatric Patients:*
- Lower tolerance due to body composition changes
- Drug interactions more common
- Higher fall risk with intoxication
- Start medications at lower doses

*Liver Disease Patients:*
- Acamprosate preferred (renally cleared)
- Naltrexone: Avoid in acute hepatitis, caution in cirrhosis
- Baclofen: Some evidence in cirrhosis population

*Co-occurring Disorders:*
- Treat both conditions simultaneously
- SSRIs for comorbid depression
- Avoid benzodiazepines long-term
- Integrated care models most effective

**Quality Metrics and Implementation:**

*Quality Measures:*
- Screening rates (AUDIT, AUDIT-C)
- Pharmacotherapy initiation (NQF measure)
- Treatment retention at 30, 90 days
- Reduction in heavy drinking days

*Implementation Challenges:*
- Provider training gaps
- Stigma affecting treatment seeking
- Insurance barriers
- Limited addiction medicine workforce

**Emerging Research Directions:**

- Digital therapeutics (reSET-O model)
- Precision medicine trials (stratified by biomarkers)
- Psychedelic-assisted therapy (psilocybin for AUD)
- Vaccine development (anti-ethanol antibodies)
- CRISPR-based approaches (preclinical)`,
      keyTerms: [
        { term: 'phosphatidylethanol', definition: 'Direct alcohol biomarker formed in red blood cell membranes; highly specific for alcohol consumption' },
        { term: 'pharmacogenomics', definition: 'Use of genetic testing to guide medication selection and dosing' },
        { term: 'low-threshold treatment', definition: 'Approach minimizing barriers to care access (same-day starts, fewer prerequisites)' },
        { term: 'collaborative care', definition: 'Integrated care model combining primary care, behavioral health, and specialty services' },
        { term: 'ibudilast', definition: 'PDE4 inhibitor with neuroimmune modulating effects; under investigation for AUD' },
      ],
      clinicalNotes: `Key practice points:
- Phosphatidylethanol (PEth) is the most sensitive and specific biomarker for monitoring
- Pharmacogenomic testing may guide medication selection but is not yet standard of care
- Extended-release naltrexone should be considered for all appropriate patients (reduces mortality)
- Integrated care models improve outcomes compared to fragmented care
- Telehealth has expanded access to AUD treatment and should be maintained
- Stigma remains the largest barrier; person-centered language matters

The goal is medication for all who would benefit, psychosocial support universally, and harm reduction for those not ready for abstinence.`,
    },
  },

  media: [
    {
      id: 'standard-drink-sizes',
      type: 'diagram',
      filename: 'standard_drink_sizes.svg',
      title: 'Standard Drink Sizes',
      description: 'Visual comparison of standard drink equivalents for beer, wine, and spirits',
    },
    {
      id: 'alcohol-withdrawal-timeline',
      type: 'diagram',
      filename: 'alcohol_withdrawal_timeline.svg',
      title: 'Alcohol Withdrawal Timeline',
      description: 'Timeline of withdrawal symptoms from tremor to delirium tremens',
    },
  ],

  citations: [
    {
      id: 'niaaa-rethinking-drinking',
      type: 'website',
      title: 'Rethinking Drinking',
      source: 'National Institute on Alcohol Abuse and Alcoholism',
      url: 'https://www.rethinkingdrinking.niaaa.nih.gov',
      accessedDate: '2025-01-24',
    },
    {
      id: 'asam-aud-guidelines',
      type: 'article',
      title: 'The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management',
      authors: ['American Society of Addiction Medicine'],
      source: 'Journal of Addiction Medicine',
      accessedDate: '2025-01-24',
    },
    {
      id: 'combine-study',
      type: 'article',
      title: 'Combined Pharmacotherapies and Behavioral Interventions for Alcohol Dependence: The COMBINE Study',
      authors: ['Anton RF', 'O\'Malley SS', 'Ciraulo DA', 'et al.'],
      source: 'JAMA',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'substance-use-understanding-addiction', targetType: 'concept', relationship: 'parent', label: 'Understanding Addiction' },
    { targetId: 'substance-use-treatment', targetType: 'topic', relationship: 'related', label: 'Getting Help' },
    { targetId: 'gastroenterology-liver-disease', targetType: 'condition', relationship: 'see-also', label: 'Liver Disease' },
    { targetId: 'neurology-wernicke', targetType: 'condition', relationship: 'see-also', label: 'Wernicke-Korsakoff Syndrome' },
  ],

  tags: {
    systems: ['nervous', 'digestive'],
    topics: ['substance use', 'addiction medicine', 'toxicology', 'psychiatry'],
    keywords: ['alcohol', 'ethanol', 'AUD', 'withdrawal', 'delirium tremens', 'cirrhosis', 'naltrexone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine', 'emergency medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default alcoholContent;
