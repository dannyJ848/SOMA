/**
 * Cancer Screening Guidelines Educational Content
 *
 * Evidence-based cancer screening recommendations including:
 * - Screening principles
 * - Breast, colorectal, lung, cervical, prostate screening
 * - Risk-based screening
 * - Shared decision-making
 */

import { EducationalContent } from '../../types';

export const screeningGuidelinesContent: EducationalContent = {
  id: 'oncology-screening-guidelines',
  type: 'concept',
  name: 'Cancer Screening Guidelines',
  alternateNames: ['Cancer screening', 'Early detection', 'Preventive oncology'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer screening means testing for cancer before you have any symptoms, to find it early when it\'s easier to treat.',
      explanation: `Cancer screening is like getting your car inspected even when it seems to be running fine - the goal is to catch problems early before they become serious.

**Why Screen for Cancer?**
- Finding cancer early often means easier treatment
- Early-stage cancers have better survival rates
- Some screening can even prevent cancer by finding pre-cancerous changes

**Common Cancer Screenings:**

*Breast Cancer:*
- Mammogram (X-ray of the breast)
- For women, usually starting around age 40-50

*Colon Cancer:*
- Colonoscopy (camera inside the colon)
- Usually starting at age 45

*Cervical Cancer:*
- Pap smear (test of cells from the cervix)
- HPV test
- For women, usually starting at age 21

*Lung Cancer:*
- CT scan (special X-ray)
- For people who smoked heavily

*Prostate Cancer:*
- PSA blood test
- For men, discussed with doctor

**Not Everyone Needs Every Test:**
- Screening depends on your age
- Your risk factors matter
- Some tests have downsides too
- Talk with your doctor about what's right for you`,
      keyTerms: [
        { term: 'screening', definition: 'Testing for disease before symptoms appear' },
        { term: 'mammogram', definition: 'An X-ray picture of the breast to look for cancer' },
        { term: 'colonoscopy', definition: 'Using a camera to look inside the colon for cancer or polyps' },
        { term: 'Pap smear', definition: 'A test that collects cells from the cervix to check for cancer' },
      ],
      analogies: [
        'Cancer screening is like a smoke detector - it catches the fire when it\'s still small and easy to put out.',
        'Getting regular screenings is like regular maintenance on your car - you find problems before they leave you stranded.',
      ],
      examples: [
        'A woman has her yearly mammogram and they find a tiny cancer that was completely curable with surgery.',
        'A man\'s colonoscopy finds a polyp that could have become cancer, but the doctor removes it during the procedure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer screening uses tests to detect cancer in asymptomatic individuals, with guidelines balancing benefits of early detection against potential harms.',
      explanation: `Cancer screening aims to detect cancer at an early, more treatable stage. However, not all cancers benefit from screening, and screening tests have both benefits and harms.

**Principles of Effective Screening:**
1. The disease is common and serious
2. There's a detectable preclinical phase
3. Treatment is more effective if started early
4. The screening test is accurate and acceptable
5. Benefits outweigh harms

**Major Cancer Screening Guidelines:**

*Breast Cancer:*
- Mammography every 1-2 years
- ACS: Age 45-54 annually, then every 2 years
- USPSTF: Age 50-74 every 2 years
- Higher risk: Earlier start, additional imaging (MRI)

*Colorectal Cancer:*
- Starting at age 45 for average risk
- Options:
  - Colonoscopy every 10 years
  - FIT (stool test) annually
  - FIT-DNA (Cologuard) every 3 years
  - CT colonography every 5 years
  - Flexible sigmoidoscopy every 5 years
- Earlier/more frequent if high risk (family history, IBD)

*Cervical Cancer:*
- Pap smear and/or HPV test
- Age 21-29: Pap every 3 years
- Age 30-65: Pap + HPV every 5 years (preferred) or Pap every 3 years
- Can stop at 65 if adequate prior screening

*Lung Cancer:*
- Low-dose CT (LDCT) annually
- Ages 50-80 with 20+ pack-year smoking history
- Currently smoke or quit within past 15 years

*Prostate Cancer:*
- PSA blood test (with or without digital rectal exam)
- Shared decision-making ages 55-69
- Not routinely recommended due to overdiagnosis concerns

**Balancing Benefits and Harms:**
- False positives: Anxiety, additional tests, procedures
- Overdiagnosis: Finding cancers that wouldn't cause harm
- Overtreatment: Treatment of overdiagnosed cancers
- Procedure complications: Colonoscopy bleeding, perforation`,
      keyTerms: [
        { term: 'false positive', definition: 'A test result suggesting cancer when there is none' },
        { term: 'overdiagnosis', definition: 'Detecting cancer that would never have caused symptoms or death' },
        { term: 'lead time bias', definition: 'The apparent improvement in survival simply because cancer was detected earlier' },
        { term: 'FIT', definition: 'Fecal immunochemical test; a stool test for hidden blood' },
        { term: 'shared decision-making', definition: 'Patient and doctor discuss options together, considering values and preferences' },
      ],
      analogies: [
        'Lead time bias is like adding water to make soup look like more - it seems like survival is longer, but maybe we just started counting earlier.',
        'Screening tests are like fishing nets - we want to catch the dangerous fish but sometimes we catch harmless ones too.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based screening guidelines incorporate test performance characteristics, number needed to screen, and risk stratification to optimize detection while minimizing harms.',
      explanation: `**Screening Test Performance:**

*Key Metrics:*
- Sensitivity: Ability to detect cancer when present
- Specificity: Ability to correctly identify non-cancer
- Positive predictive value (PPV): Probability of cancer given positive test
- Negative predictive value (NPV): Probability of no cancer given negative test

*Number Needed to Screen (NNS):*
- How many people must be screened to prevent one cancer death
- Example: Mammography NNS ~1,000-2,500 over 10 years
- Colonoscopy NNS ~500-1,000 to prevent one CRC death

**Guideline Details by Cancer:**

*Breast Cancer - High Risk:*
- BRCA1/2 carriers: Annual MRI + mammogram starting age 25-30
- ≥20% lifetime risk: MRI + mammogram
- Prior chest radiation: MRI + mammogram starting 8-10 years after radiation
- Personal history LCIS, ADH: Consider MRI

*Colorectal Cancer - High Risk:*
- First-degree relative with CRC: Start at age 40 or 10 years before relative's diagnosis
- Lynch syndrome: Colonoscopy every 1-2 years starting age 20-25
- FAP: Annual sigmoidoscopy/colonoscopy starting age 10-12
- IBD: Colonoscopy 8 years after disease onset, then every 1-3 years

*Lung Cancer:*
- LDCT criteria: 50-80 years, ≥20 pack-years, current or quit <15 years
- NELSON trial: 24% reduction in lung cancer mortality
- High false-positive rate (~25% at first round)
- Incidental findings common (nodules, coronary calcification)

*Cervical Cancer:*
- HPV vaccination reduces but doesn't eliminate screening need
- Primary HPV testing emerging (FDA-approved)
- HPV 16/18 genotyping: Higher risk, triage to colposcopy
- Post-hysterectomy: Stop if for benign disease and no prior CIN2+

**Risk Stratification Tools:**
- Breast: Gail model, Tyrer-Cuzick, BCRAT
- Colorectal: Family history, polyp history
- Lung: PLCOM2012, LCRAT
- Prostate: PHI, 4Kscore, MRI-targeted biopsy

**Quality Metrics:**
- Mammography: BIRADS reporting, call-back rates
- Colonoscopy: Adenoma detection rate (ADR), cecal intubation rate
- Pap smear: ASCCP guidelines for management`,
      keyTerms: [
        { term: 'sensitivity', definition: 'True positive rate; proportion of cancers correctly identified by the test' },
        { term: 'specificity', definition: 'True negative rate; proportion of non-cancers correctly identified as negative' },
        { term: 'NNS', definition: 'Number needed to screen to prevent one adverse outcome' },
        { term: 'BIRADS', definition: 'Breast Imaging Reporting and Data System; standardized mammography reporting' },
        { term: 'ADR', definition: 'Adenoma detection rate; quality metric for colonoscopy' },
      ],
      clinicalNotes: 'Quality metrics matter: Higher adenoma detection rate correlates with lower interval CRC. Colonoscopist ADR should be ≥25% (men) or ≥20% (women). Document cecal intubation and bowel prep quality.',
    },
    4: {
      level: 4,
      summary: 'Screening guidelines are informed by randomized trials, model-based analyses, and guideline development processes, with ongoing debates about optimal strategies.',
      explanation: `**Evidence Base for Screening:**

*Breast Cancer:*
- RCTs: ~25% reduction in breast cancer mortality in invited groups
- Swedish Two-County, HIP, CNBSS, UK Age Trial
- Controversy: CNBSS showed no benefit (critics question mammography quality)
- Modeling: CISNET models inform USPSTF recommendations

*Colorectal Cancer:*
- Fecal occult blood testing RCTs: 15-33% mortality reduction
- Colonoscopy: CONFIRM trial, NordICC (underwhelming ITT results)
- Polypectomy prevents CRC: National Polyp Study
- Stool DNA: DeeP-C study showed 92% sensitivity for CRC

*Lung Cancer:*
- NLST: 20% lung cancer mortality reduction with LDCT vs CXR
- NELSON: 24% mortality reduction in men at 10 years
- Extended criteria: More inclusive (USPSTF 2021 expanded eligibility)

*Cervical Cancer:*
- Pap smear: No RCTs but dramatic reduction in cervical cancer incidence/mortality
- Ecological evidence: Countries with screening programs have lower rates
- HPV testing: Higher sensitivity than cytology

*Prostate Cancer:*
- PLCO: No mortality benefit (contamination issue)
- ERSPC: 20% mortality reduction but high overdiagnosis
- Goteborg: 44% reduction with longer follow-up
- USPSTF Grade C: Shared decision-making, don't routinely screen

**Guideline Development:**

*Organizations:*
- USPSTF: Rigorous evidence review, A/B/C/D/I grades
- ACS: Expert consensus, generally more inclusive
- NCCN: Expert panel, detailed algorithms
- ACG, ACOG, AUA: Specialty-specific

*Evidence Grading:*
- USPSTF: A/B = offer/recommend, C = offer selectively, D = discourage
- Certainty of evidence: High, moderate, low

**Emerging Approaches:**

*Multi-Cancer Early Detection (MCED):*
- Liquid biopsy for multiple cancers simultaneously
- Galleri: 50+ cancer types from single blood draw
- PATHFINDER study: 1.4% cancer signal detected, 38% PPV
- Concerns: Overdiagnosis, unclear mortality benefit

*Risk-Based Screening:*
- Polygenic risk scores
- Combined models (genomic + clinical + imaging)
- Personalized screening intervals

*Biomarkers:*
- Breast: Risk-based mammography intervals
- Prostate: MRI-first approaches, PHI/4K before biopsy
- Colorectal: Methylated DNA markers

**Screening in Special Populations:**
- Elderly: Life expectancy >10 years generally required
- Limited life expectancy: Consider stopping screening
- Immunocompromised: May need modified approaches
- LGBTQ+: Organ-specific, not gender-specific guidelines`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force; independent panel making evidence-based screening recommendations' },
        { term: 'MCED', definition: 'Multi-cancer early detection; blood tests screening for multiple cancers simultaneously' },
        { term: 'polygenic risk score', definition: 'Genetic risk estimate combining effects of many common variants' },
        { term: 'intention-to-treat', definition: 'Analysis including all randomized participants regardless of adherence' },
      ],
      clinicalNotes: 'MCED tests are not yet recommended for population screening (lack mortality benefit data). When used, positive results require diagnostic workup. Consider enrollment in clinical trials evaluating MCED screening strategies.',
    },
    5: {
      level: 5,
      summary: 'Precision screening integrates individual risk factors, genomic data, and modeling to optimize screening strategies while addressing implementation challenges and health equity.',
      explanation: `**Advanced Screening Concepts:**

*Precision Screening Framework:*
- Risk stratification: Who to screen
- Test selection: Which test for which risk level
- Screening interval: How often based on risk
- Stopping rules: When to discontinue

**Cancer-Specific Updates:**

*Breast Cancer:*
- DBT (tomosynthesis): Higher cancer detection, fewer callbacks
- Contrast-enhanced mammography: Alternative to MRI
- AI-assisted reading: Improved sensitivity
- Risk-based screening: Tyrer-Cuzick + PRS + density
- WISDOM trial: Testing risk-based vs annual screening

*Colorectal Cancer:*
- Blood-based tests: Guardant SHIELD, Freenome
- Multitarget stool DNA (mt-sDNA): Cologuard
- Capsule colonoscopy: Non-invasive imaging
- Artificial intelligence: Polyp detection improvement
- Post-polypectomy surveillance: 2020 USMSTF guidelines

*Lung Cancer:*
- Nodule management: Lung-RADS, Fleischner guidelines
- Lung cancer risk models for selection
- AI-assisted nodule detection
- Combined screening: Lung + cardiovascular risk

*Prostate Cancer:*
- MRI-first pathway (PROMIS, PRECISION trials)
- Targeted biopsy: Higher grade cancer detection
- PHI, 4K score: Reduce unnecessary biopsies
- Active surveillance: Alternative to treatment for low-risk

**Implementation Science:**

*Barriers to Screening:*
- Access: Insurance, availability, transportation
- Knowledge: Awareness of guidelines
- Beliefs: Fear, fatalism, mistrust
- System factors: Reminder systems, navigation

*Interventions to Improve Uptake:*
- Patient navigation
- Mailed FIT kits
- Text/phone reminders
- EMR-based alerts
- Community health workers

*Health Equity:*
- Disparities in screening rates by race/ethnicity, SES
- Targeted interventions for underserved populations
- Language-concordant materials
- Culturally tailored approaches
- Address structural barriers

**Special Considerations:**

*Screening in Survivors:*
- Increased second cancer risk
- Surveillance vs screening
- Chest radiation: Breast, lung, thyroid surveillance
- Alkylating agents: Hematologic malignancy risk

*Germline Mutation Carriers:*
- BRCA1/2: Breast MRI, consider risk-reducing surgery
- Lynch syndrome: Colonoscopy q1-2 years, consider upper GI
- Li-Fraumeni: Whole-body MRI protocols
- Other syndromes: Syndrome-specific guidelines

**Future Directions:**

*Technology:*
- Artificial intelligence: Image interpretation, risk prediction
- Wearable devices: Continuous monitoring
- Point-of-care testing: Decentralized screening
- Virtual reality: Colonoscopy simulation

*Research:*
- Adaptive screening trials
- Pragmatic implementation trials
- Comparative effectiveness of screening strategies
- Patient preferences and values integration

*Policy:*
- Value-based screening
- Coverage decisions for new tests
- Quality metrics and accountability
- Global screening program development`,
      keyTerms: [
        { term: 'DBT', definition: 'Digital breast tomosynthesis; 3D mammography providing layered breast images' },
        { term: 'Lung-RADS', definition: 'Lung CT Screening Reporting and Data System; standardized nodule management' },
        { term: 'PROMIS trial', definition: 'Study showing MRI before biopsy reduces unnecessary biopsies in prostate cancer detection' },
        { term: 'patient navigation', definition: 'Coordinated assistance helping patients overcome barriers to cancer screening and care' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices in clinical settings' },
      ],
      clinicalNotes: `**Key Practice Points:**
- Know current USPSTF recommendations (they drive coverage decisions)
- Document shared decision-making for prostate cancer screening
- Use validated risk models when available
- Address barriers: Offer stool-based CRC screening options
- Track your screening rates as quality metric

**Emerging Issues:**
- MCED tests entering clinical practice despite limited evidence
- AI in screening: Regulatory and liability considerations
- Post-COVID screening catch-up needed
- Personalized screening intervals coming

**Board Pearls:**
- USPSTF Grade A/B vs C vs D recommendations
- Screening test characteristics (sensitivity, specificity, NNS)
- High-risk criteria for each cancer type
- Know when to stop screening (life expectancy considerations)`,
    },
  },

  media: [
    {
      id: 'screening-guidelines-table',
      type: 'diagram',
      filename: 'cancer-screening-guidelines-summary.svg',
      title: 'Cancer Screening Guidelines Summary',
      description: 'Summary table of major cancer screening recommendations',
    },
  ],
  citations: [
    {
      id: 'uspstf-breast',
      type: 'website',
      title: 'Breast Cancer: Screening',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
    },
    {
      id: 'acs-guidelines',
      type: 'article',
      title: 'American Cancer Society Guidelines for Cancer Screening',
      source: 'CA: A Cancer Journal for Clinicians',
      url: 'https://acsjournals.onlinelibrary.wiley.com/journal/15424863',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-breast-cancer', targetType: 'condition', relationship: 'related', label: 'Breast Cancer' },
    { targetId: 'oncology-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
    { targetId: 'oncology-colorectal-cancer', targetType: 'condition', relationship: 'related', label: 'Colorectal Cancer' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['screening', 'prevention', 'guidelines', 'public-health'],
    keywords: ['mammography', 'colonoscopy', 'LDCT', 'Pap smear', 'PSA', 'early detection'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
