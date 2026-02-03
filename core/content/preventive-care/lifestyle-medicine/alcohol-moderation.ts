/**
 * Alcohol Moderation
 *
 * Comprehensive education on healthy drinking habits and alcohol use disorder.
 */

import { EducationalContent } from '../../types';

export const ALCOHOL_MODERATION: EducationalContent = {
  id: 'concept-alcohol-moderation',
  type: 'concept',
  name: 'Alcohol Moderation',
  alternateNames: ['Responsible drinking', 'Alcohol use guidelines', 'Drinking in moderation'],

  levels: {
    1: {
      level: 1,
      summary: 'Drinking less alcohol or not drinking at all is better for your health than heavy drinking.',
      explanation: `Alcohol affects your health in many ways. Knowing the guidelines helps you make informed choices.

**Low-Risk Drinking:**
- Men: No more than 2 drinks per day
- Women: No more than 1 drink per day
- Not drinking at all is a valid choice

**What is One Drink?**
- 12 oz beer (5% alcohol)
- 5 oz wine (12% alcohol)
- 1.5 oz spirits (40% alcohol)

**Health Risks of Heavy Drinking:**
- Liver disease
- Heart problems
- Increased cancer risk
- Mental health problems
- Accidents and injuries

**Signs of a Problem:**
- Drinking more than intended
- Unable to cut down despite trying
- Spending lots of time drinking or recovering
- Craving alcohol
- Drinking interfering with responsibilities`,
      keyTerms: [
        { term: 'standard drink', definition: 'Amount of beverage containing about 14 grams of pure alcohol' },
        { term: 'binge drinking', definition: 'Drinking 4+ drinks (women) or 5+ drinks (men) in about 2 hours' },
      ],
      analogies: ['Think of alcohol like sun exposure - a little might be okay, but too much causes damage.'],
      examples: ['After realizing he was drinking more than guidelines recommend, John cut back to occasional weekend drinks only.'],
    },
    2: {
      level: 2,
      summary: 'Alcohol use disorder is a medical condition affecting millions, with effective screening tools and treatments available, while even moderate drinking carries health risks.',
      explanation: `**Drinking Guidelines (Dietary Guidelines 2020-2025):**
- Men: ≤2 drinks/day
- Women: ≤1 drink/day
- Not drinking is a valid choice
- No level of alcohol consumption is safe for everyone

**Screening (USPSTF Grade B):**
- Screen all adults for unhealthy alcohol use
- AUDIT-C screening tool:
  - How often do you have a drink?
  - How many drinks on a typical day?
  - How often 6+ drinks on one occasion?
- Score ≥4 (men) or ≥3 (women): Positive screen

**Health Risks:**
- Cancer: Breast, colon, liver, esophageal, oral
- Liver disease: Fatty liver, hepatitis, cirrhosis
- Cardiovascular: Cardiomyopathy, arrhythmias, hypertension
- Mental health: Depression, anxiety
- Neurological: Dementia, neuropathy

**Alcohol Use Disorder (AUD):**
- DSM-5 criteria (11 symptoms)
- Mild: 2-3 symptoms
- Moderate: 4-5 symptoms
- Severe: 6+ symptoms
- Treatable medical condition`,
      keyTerms: [
        { term: 'AUDIT-C', definition: 'Alcohol Use Disorders Identification Test; screening questionnaire' },
        { term: 'alcohol use disorder', definition: 'Medical diagnosis characterized by impaired control over drinking' },
        { term: 'standard drink', definition: 'Contains approximately 14 grams of pure alcohol' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based treatment for alcohol use disorder includes medications (naltrexone, acamprosate), brief interventions, and behavioral therapies, while evolving evidence questions any health benefit of moderate drinking.',
      explanation: `**Brief Interventions:**
- 5-15 minute counseling sessions
- SBIRT: Screening, Brief Intervention, Referral to Treatment
- Effective for risky drinking
- Reduce alcohol consumption by 1-2 drinks/week

**Medications for AUD:**

| Medication | Mechanism | Evidence |
|------------|-----------|----------|
| Naltrexone | Opioid antagonist | Reduces heavy drinking days |
| Acamprosate | Glutamate modulation | Maintains abstinence |
| Disulfiram | Aldehyde dehydrogenase inhibition | Aversive (limited evidence) |
| Topiramate | Multiple mechanisms | Off-label, effective |
| Gabapentin | GABA modulation | Off-label, some evidence |

**Behavioral Therapies:**
- Motivational enhancement therapy
- Cognitive behavioral therapy
- 12-step facilitation
- Couples/family therapy

**Moderate Drinking Debate:**
- Past: "J-curve" (moderate drinking protective for CVD)
- Current: Methodological flaws identified
- New evidence: No safe level; any alcohol increases risk
- WHO: No healthy amount of alcohol`,
      keyTerms: [
        { term: 'naltrexone', definition: 'Medication blocking opioid receptors, reducing alcohol reward' },
        { term: 'SBIRT', definition: 'Screening, Brief Intervention, and Referral to Treatment; systematic approach' },
        { term: 'acamprosate', definition: 'Medication helping maintain abstinence in alcohol use disorder' },
      ],
      analogies: [],
      clinicalNotes: 'Screen all adults for unhealthy alcohol use. Brief interventions effective for risky drinking. Medications underutilized for AUD. Evidence no longer supports moderate drinking for health.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive alcohol treatment integrates pharmacotherapy, addresses medical complications, and recognizes alcohol as a leading modifiable risk factor for global disease burden.',
      explanation: `**Medical Complications:**
- Alcohol withdrawal: Potentially life-threatening
- Wernicke-Korsakoff: Thiamine deficiency
- Alcoholic hepatitis/cirrhosis
- Pancreatitis
- Cardiomyopathy

**Withdrawal Management:**
- CIWA-Ar score for monitoring
- Benzodiazepines for prevention/treatment
- Thiamine supplementation
- Inpatient vs outpatient based on severity

**Treatment Systems:**
- Integration with primary care
- Specialty addiction medicine
- Peer support (AA, SMART Recovery)
- MAT (Medication-Assisted Treatment)

**Population Health:**
- Alcohol is third leading cause of preventable death (US)
- $249 billion annual economic cost
- Policy interventions effective (taxation, availability)

**Special Populations:**
- Pregnancy: No safe amount
- Adolescents: Developing brain vulnerable
- Older adults: Increased sensitivity
- Liver disease: Abstinence critical`,
      keyTerms: [
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment; scores withdrawal severity' },
        { term: 'Wernicke-Korsakoff', definition: 'Neurological syndrome from thiamine deficiency in alcoholism' },
        { term: 'MAT', definition: 'Medication-Assisted Treatment; combining medications with counseling' },
      ],
      analogies: [],
      clinicalNotes: 'Recognize and treat withdrawal. Always give thiamine. Medications for AUD are underused. Integrate into primary care. No safe alcohol in pregnancy.',
    },
    5: {
      level: 5,
      summary: 'Precision approaches to alcohol medicine integrate genetic factors, biomarkers, and digital therapeutics while advancing policy interventions to reduce population-level alcohol harm.',
      explanation: `**Precision Medicine:**
- OPRM1 genotype and naltrexone response
- ADH/ALDH variants and drinking behavior
- Biomarkers for monitoring (PEth, EtG)
- Personalized treatment matching

**Digital Therapeutics:**
- FDA-approved digital interventions
- Smartphone-based monitoring
- Virtual AA meetings
- AI-supported interventions

**Policy Evolution:**
- Minimum unit pricing
- Marketing restrictions
- Warning labels (cancer risk)
- Reduced availability

**Research Frontiers:**
- Neuromodulation (TMS, tDCS)
- Novel pharmacological targets
- Microbiome-gut-brain axis
- Precision pharmacotherapy

**Global Burden:**
- 3 million deaths/year globally
- Leading risk factor for disease burden ages 25-49
- Inequitable distribution of harm
- WHO SAFER initiative`,
      keyTerms: [
        { term: 'PEth', definition: 'Phosphatidylethanol; biomarker of alcohol consumption over weeks' },
        { term: 'OPRM1', definition: 'Opioid receptor gene; A118G variant may predict naltrexone response' },
        { term: 'SAFER', definition: 'WHO initiative: Strengthen, Advertise, Foster, Enforce, Raise' },
      ],
      analogies: [],
      clinicalNotes: 'Genetic testing for treatment selection is emerging. Biomarkers can assist monitoring. Digital tools improve access. Support evidence-based policy.',
    },
  },

  media: [],
  citations: [
    {
      id: 'dietary-guidelines-alcohol',
      type: 'website',
      title: 'Dietary Guidelines: Alcohol',
      source: 'USDA and HHS',
      url: 'https://www.dietaryguidelines.gov/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['digestive', 'nervous'],
    topics: ['preventive medicine', 'addiction medicine', 'lifestyle medicine'],
    keywords: ['alcohol', 'drinking', 'AUD', 'alcohol use disorder', 'moderation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine', 'psychiatry'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
