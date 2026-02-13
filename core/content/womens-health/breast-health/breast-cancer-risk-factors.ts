import { LegacyWomensHealthContent } from '../types';

export const breastCancerRiskFactors: LegacyWomensHealthContent = {
  id: 'concept-breast-cancer-risk-factors',
  type: 'concept',
  name: 'Breast Cancer Risk Factors',
  alternateNames: ['Breast cancer prevention', 'Breast cancer risk assessment', 'Risk reduction'],

  levels: {
    1: {
      level: 1,
      summary: 'Understanding your breast cancer risk factors helps you take steps to reduce your risk and know when extra screening might help.',
      explanation: `**Risk Factors You Cannot Change:**
- Being a woman (most important factor)
- Getting older
- Family history of breast cancer
- Inherited gene changes (BRCA1, BRCA2)
- Dense breasts
- Starting periods early (before 12)
- Menopause after 55
- Previous chest radiation

**Risk Factors You Can Change:**
- Being overweight (especially after menopause)
- Not exercising
- Drinking alcohol
- Hormone therapy after menopause
- Not breastfeeding

**What Reduces Risk:**
- Maintain healthy weight
- Exercise regularly
- Limit alcohol
- Breastfeed if you can
- Talk to doctor about hormone therapy risks

**Important Facts:**
- Having risk factors doesn't mean you'll get cancer
- Most women with breast cancer have no family history
- Regular screening helps find cancer early
- Talk to your doctor about your personal risk`,
      keyTerms: [
        { term: 'risk factor', definition: 'Something that increases your chance of getting a disease' },
        { term: 'BRCA gene', definition: 'Inherited gene changes that greatly increase breast cancer risk' },
        { term: 'dense breasts', definition: 'Breasts with more tissue than fat, which can hide cancers on mammograms' },
      ],
      analogies: ['Risk factors are like puzzle pieces - having more pieces doesn\'t guarantee the complete picture (getting cancer), but it increases the likelihood.'],
      examples: ['A woman with no family history getting breast cancer (shows most cases have no clear cause)', 'Reducing alcohol from 2 drinks daily to occasional to lower risk'],
    },
    2: {
      level: 2,
      summary: 'Breast cancer risk is influenced by multiple factors including age, hormonal exposures, family history, genetics, and lifestyle factors, with varying degrees of relative risk.',
      explanation: `**Risk Magnitude:**

*Strong Risk Factors (3-10x Relative Risk):*
- BRCA1/2 mutations (50-85% lifetime risk)
- Personal history of breast cancer
- Li-Fraumeni syndrome, Cowden syndrome
- Chest radiation before age 30

*Moderate Risk Factors (1.5-3x Relative Risk):*
- First-degree relative with breast cancer
- Atypical hyperplasia (ADH/ALH)
- Dense breasts (heterogeneously or extremely dense)
- High-dose estrogen exposure

*Mild Risk Factors (1.1-1.5x Relative Risk):*
- Early menarche (<12 years)
- Late menopause (>55 years)
- Nulliparity or first birth after 30
- Current HRT use
- Obesity (postmenopausal)
- Alcohol use

**Hormonal Factors:**
- Lifetime estrogen exposure matters
- Early menarche + late menopause = more exposure
- Pregnancy has mixed effects (short-term increase, long-term protection)
- Breastfeeding is protective

**Family History Assessment:**
- Number of affected relatives
- Age at diagnosis (young = higher concern)
- Bilateral cancer
- Male breast cancer
- Ovarian cancer in family

**Modifiable Risk Reduction:**
- Weight management (7% lower risk per 5 kg lost)
- Physical activity (10-20% risk reduction)
- Limit alcohol (<1 drink/day)
- Breastfeeding (4% reduction per 12 months)`,
      keyTerms: [
        { term: 'relative risk', definition: 'How many times more likely you are to develop cancer compared to average' },
        { term: 'Li-Fraumeni syndrome', definition: 'Rare genetic condition with very high cancer risk from TP53 mutation' },
        { term: 'nulliparity', definition: 'Never having given birth, associated with slightly higher breast cancer risk' },
        { term: 'HRT', definition: 'Hormone replacement therapy used for menopause symptoms' },
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer risk assessment utilizes validated models incorporating genetic, hormonal, and lifestyle factors to guide screening intensity and risk reduction strategies.',
      explanation: `**Risk Assessment Models:**

*Gail Model:*
- Age, age at menarche, age at first birth
- Number of biopsies, atypical hyperplasia
- First-degree relatives
- Estimates 5-year and lifetime risk
- Validated for screening decisions
- Does not include second-degree relatives or paternal history

*Tyrer-Cuzick (IBIS):*
- More comprehensive family history
- Includes benign breast disease
- Hormonal factors (age at menopause, HRT)
- Body mass index
- Better for high-risk identification

*BRCAPRO:*
- Probability of BRCA mutation
- Family history of breast and ovarian cancer
- Used to determine genetic testing candidacy

**Risk Thresholds:**

*Lifetime Risk Categories:*
- Average: <15%
- Intermediate: 15-20% (enhanced screening considered)
- High: >20% (MRI screening recommended)
- Very high: BRCA carriers (50-85%)

**Genetic Considerations:**

*High-Penetrance Genes:*
- BRCA1: 50-85% lifetime breast cancer risk
- BRCA2: 45-70% lifetime risk
- TP53 (Li-Fraumeni): Very high risk
- PTEN (Cowden): High risk
- CDH1: Lobular cancer risk

*Moderate-Penetrance Genes:*
- CHEK2: 2-3x relative risk
- ATM: 2-3x relative risk
- PALB2: 3-5x relative risk

**Indications for Genetic Counseling:**
- Breast cancer at young age (<50)
- Triple-negative breast cancer (<60)
- Multiple breast cancers
- Male breast cancer
- Breast + ovarian cancer in family
- Known mutation in family
- Ashkenazi Jewish ancestry`,
      keyTerms: [
        { term: 'Gail model', definition: 'Risk assessment tool using personal and limited family history factors' },
        { term: 'Tyrer-Cuzick', definition: 'Comprehensive risk model including extended family history and hormonal factors' },
        { term: 'penetrance', definition: 'Likelihood that a gene mutation will actually cause the disease' },
        { term: 'triple-negative', definition: 'Breast cancer lacking ER, PR, and HER2 receptors; associated with BRCA1' },
      ],
      clinicalNotes: 'Use Tyrer-Cuzick for identifying high-risk women who may benefit from enhanced screening or chemoprevention. BRCA testing should be preceded by genetic counseling. Panel testing beyond BRCA1/2 increases detection but also variants of uncertain significance.',
    },
    4: {
      level: 4,
      summary: 'Advanced risk management involves comprehensive genetic testing, chemoprevention, prophylactic surgery counseling, and integration of emerging biomarkers into risk stratification.',
      explanation: `**Genetic Testing Considerations:**

*Multi-Gene Panel Testing:*
- Tests 20+ genes simultaneously
- Increases detection beyond BRCA1/2
- Higher rate of variants of uncertain significance (VUS)
- Management implications vary by gene

*Interpretation Challenges:*
- VUS: No clinical action, may be reclassified
- Moderate-risk genes: Enhanced surveillance but not necessarily surgery
- Gene-specific cancer risks (breast, ovarian, other)

*Cascade Testing:*
- Test relatives when mutation found
- 50% of first-degree relatives carry mutation
- Enables risk stratification

**Chemoprevention:**

*FDA-Approved Options:*
- Tamoxifen: 5 years, pre or postmenopausal
  - 50% reduction in ER+ breast cancer
  - Side effects: Hot flashes, VTE, endometrial cancer
- Raloxifene: 5 years, postmenopausal only
  - Similar efficacy, less endometrial risk
  - Postmenopausal only

*Aromatase Inhibitors (off-label):*
- Anastrozole, exemestane studied in high-risk
- 50% risk reduction
- Musculoskeletal side effects
- No VTE or endometrial risk

*Eligible Populations:*
- 5-year Gail risk ≥1.67%
- Atypical hyperplasia or LCIS
- Prior chest radiation
- BRCA carriers not undergoing surgery

**Prophylactic Surgery:**

*Risk-Reducing Mastectomy:*
- 90% or greater risk reduction
- Indicated for BRCA carriers, strong family history
- Does not eliminate all risk (residual tissue)
- Reconstruction options

*Risk-Reducing Salpingo-Oophorectomy (RRSO):*
- BRCA1: By age 35-40
- BRCA2: By age 40-45
- Reduces ovarian cancer risk 80-90%
- Reduces breast cancer risk 50% (if premenopausal)

**Management by Gene:**

*BRCA1/2:*
- Annual MRI + mammogram from age 25-30
- Consider chemoprevention
- Discuss RRM and RRSO

*PALB2:*
- Annual MRI + mammogram starting 30
- Consider chemoprevention
- RRSO not routinely recommended

*ATM/CHEK2:*
- Annual mammogram, consider MRI
- Chemoprevention may be reasonable
- No prophylactic surgery recommendation`,
      keyTerms: [
        { term: 'VUS', definition: 'Variant of uncertain significance; genetic finding of unknown clinical importance' },
        { term: 'cascade testing', definition: 'Testing family members after identifying a mutation in the family' },
        { term: 'RRM', definition: 'Risk-reducing mastectomy; prophylactic removal of breasts' },
        { term: 'RRSO', definition: 'Risk-reducing salpingo-oophorectomy; removal of ovaries and tubes' },
      ],
      clinicalNotes: 'PALB2 has higher penetrance than initially thought; manage similarly to BRCA2. VUS should not drive clinical decisions; recheck periodically for reclassification. Short-term HRT after RRSO in BRCA carriers is generally considered acceptable.',
    },
    5: {
      level: 5,
      summary: 'Expert risk assessment involves integrating polygenic risk scores, addressing disparities in genetic testing, optimizing chemoprevention uptake, and counseling through complex decision-making scenarios.',
      explanation: `**Emerging Risk Stratification:**

*Polygenic Risk Scores (PRS):*
- Combines effect of many common variants
- Modifies penetrance estimates for mutation carriers
- May refine screening recommendations
- Not yet standard clinical practice
- Commercial tests available but interpretation challenging

*Breast Density as Risk Factor:*
- Independent risk factor
- May modify other risk estimates
- AI-based density assessment emerging
- Legislation driving supplemental screening

*Circulating Biomarkers:*
- Breast density + circulating markers (research)
- MicroRNAs, cell-free DNA (investigational)

**Disparities in Risk Assessment:**

*Genetic Testing Access:*
- Lower testing rates in minorities
- Insurance coverage variations
- Geographic barriers
- Language and cultural factors

*Risk Model Limitations:*
- Developed predominantly in white populations
- May underestimate risk in minorities
- Need for diverse validation cohorts

*Mitigation Strategies:*
- Community outreach programs
- Genetic counselor diversity initiatives
- Telemedicine for counseling
- Patient navigation

**Complex Counseling Scenarios:**

*BRCA Carrier Without Cancer:*
- Annual MRI + mammogram from 25-30
- Chemoprevention discussion
- RRM timing (if desired)
- RRSO timing and implications
- Fertility preservation if appropriate

*Moderate-Risk Gene Carrier:*
- Less established guidelines
- Shared decision-making essential
- Enhanced surveillance generally appropriate
- Surgery rarely recommended

*Family History Without Identified Mutation:*
- May still be hereditary
- Manage based on phenotype
- Enhanced surveillance if strong history
- Genetic testing technology evolving

**Chemoprevention Implementation:**

*Uptake Barriers:*
- Only 5% of eligible women take medication
- Fear of side effects
- Lack of provider recommendation
- Competing health priorities

*Improving Uptake:*
- Provider education and reminders
- Decision aids for patients
- Address misconceptions
- Short-term risk estimates (5-year) may resonate more

**Quality Improvement:**
- Risk assessment documentation in EHR
- Automated identification of high-risk patients
- Tracking of genetic testing, surveillance, and chemoprevention
- Multidisciplinary high-risk clinics`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Combined effect of many genetic variants to estimate disease risk' },
        { term: 'penetrance modifiers', definition: 'Factors that change how likely a gene mutation is to cause disease' },
        { term: 'phenotype-based management', definition: 'Managing based on family cancer pattern when genetic testing is uninformative' },
        { term: 'high-risk clinic', definition: 'Specialized clinic for managing patients at elevated breast cancer risk' },
      ],
      clinicalNotes: 'For patients with strong family history but negative genetic testing, continue enhanced surveillance based on family phenotype. PRS may help personalize recommendations but requires careful counseling about limitations. Document risk discussions and shared decision-making thoroughly.',
    },
  },

  media: [],
  citations: [
    {
      id: 'nccn-genetic-high-risk',
      type: 'article',
      title: 'NCCN Guidelines: Genetic/Familial High-Risk Assessment',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines',
      license: 'Copyright NCCN',
    },
    {
      id: 'acs-breast-prevention',
      type: 'website',
      title: 'Breast Cancer Risk and Prevention',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org/cancer/breast-cancer/risk-and-prevention.html',
      license: 'Copyright ACS',
    },
  ],
  crossReferences: [
    { targetId: 'concept-mammogram-guidelines', targetType: 'concept', relationship: 'related', label: 'Mammogram Guidelines' },
    { targetId: 'concept-breast-conditions', targetType: 'concept', relationship: 'related', label: 'Breast Conditions' },
    { targetId: 'concept-breast-self-exam', targetType: 'concept', relationship: 'related', label: 'Breast Self-Exam' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['womens-health', 'patient-education', 'breast-health', 'genetics', 'prevention'],
    keywords: ['BRCA', 'breast cancer risk', 'genetic testing', 'chemoprevention', 'risk factors'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
