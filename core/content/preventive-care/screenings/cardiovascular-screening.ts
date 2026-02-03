/**
 * Cardiovascular Screening
 *
 * Comprehensive education on cardiovascular disease screening and risk assessment
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const CARDIOVASCULAR_SCREENING: EducationalContent = {
  id: 'concept-cardiovascular-screening',
  type: 'concept',
  name: 'Cardiovascular Screening',
  alternateNames: ['Heart disease screening', 'CVD risk assessment', 'Cardiac screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart disease screening checks your risk of heart attacks and strokes so you can take steps to stay healthy.',
      explanation: `Heart disease is the leading cause of death, but many heart problems can be prevented. Screening helps find out if you are at risk.

**What is Checked:**
- Blood pressure
- Cholesterol levels
- Blood sugar (diabetes)
- Weight and body measurements

**Why Get Screened:**
- Heart disease often has no symptoms until a heart attack or stroke
- Finding risk early lets you make changes
- Medications can help if needed
- Healthy habits can prevent problems

**When to Get Screened:**
- Blood pressure: At every doctor visit
- Cholesterol: Starting at age 20, every 4-6 years
- Diabetes: Starting at age 35-45
- More often if you have risk factors

**Risk Factors for Heart Disease:**
- High blood pressure
- High cholesterol
- Diabetes
- Smoking
- Overweight
- Family history
- Not exercising
- Unhealthy diet

**What You Can Do:**
- Eat fruits, vegetables, whole grains
- Exercise regularly (150 minutes/week)
- Do not smoke
- Maintain healthy weight
- Take medications as prescribed`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against your artery walls' },
        { term: 'cholesterol', definition: 'A waxy substance in your blood that can build up in arteries' },
        { term: 'cardiovascular disease', definition: 'Problems with the heart and blood vessels' },
      ],
      analogies: [
        'Your heart is like a pump, and your arteries are like pipes. High blood pressure and cholesterol are like rust that can clog the pipes.',
      ],
      examples: [
        'Maria had no symptoms but her screening found high cholesterol. With diet changes and medication, she lowered her risk of a heart attack.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular risk assessment combines screening for modifiable risk factors (hypertension, dyslipidemia, diabetes) with risk calculators to guide preventive interventions.',
      explanation: `Cardiovascular disease (CVD) includes heart attacks, strokes, and peripheral artery disease. Risk assessment identifies people who would benefit from prevention strategies.

**Core Screening Components:**

**Blood Pressure Screening (USPSTF Grade A)**
- Screen all adults annually
- Normal: <120/80 mmHg
- Elevated: 120-129/<80 mmHg
- Hypertension Stage 1: 130-139/80-89 mmHg
- Hypertension Stage 2: ≥140/≥90 mmHg

**Lipid Screening (USPSTF Grade B)**
- Men: Start at age 35 (earlier if risk factors)
- Women: Start at age 45 (earlier if risk factors)
- Repeat every 4-6 years if normal

**Diabetes Screening (USPSTF Grade B)**
- Adults 35-70 with overweight/obesity
- Every 3 years if normal
- HbA1c, fasting glucose, or OGTT

**CVD Risk Assessment:**

*Pooled Cohort Equations (PCE):*
- Estimates 10-year ASCVD risk
- Inputs: Age, sex, race, total cholesterol, HDL, BP, diabetes, smoking
- Categories:
  - Low: <5%
  - Borderline: 5-7.5%
  - Intermediate: 7.5-20%
  - High: ≥20%

*Risk Categories Guide Treatment:*
- Low risk: Lifestyle modification
- Intermediate risk: Consider statin, discuss aspirin
- High risk: Statin recommended, aspirin considered

**Additional Risk Enhancers:**
- Family history of premature CVD
- LDL-C ≥160 mg/dL
- Chronic kidney disease
- Metabolic syndrome
- Inflammatory conditions (RA, lupus)
- South Asian ancestry
- History of preeclampsia or premature menopause

**Aspirin for Primary Prevention:**
- USPSTF 2022: Do not routinely use
- Consider ages 40-59 with ≥10% CVD risk after shared decision-making
- Avoid in ages ≥60

**Lifestyle Interventions:**
- Diet: DASH or Mediterranean
- Exercise: 150 min moderate or 75 min vigorous per week
- Smoking cessation
- Weight management
- Alcohol moderation`,
      keyTerms: [
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease - includes heart attack, stroke, and peripheral artery disease' },
        { term: 'Pooled Cohort Equations', definition: 'Risk calculator estimating 10-year probability of cardiovascular events' },
        { term: 'dyslipidemia', definition: 'Abnormal levels of cholesterol and/or triglycerides in the blood' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension - eating pattern to lower blood pressure' },
      ],
      analogies: [
        'A CVD risk calculator is like a weather forecast for your heart - it uses multiple factors to predict the chance of a storm (heart attack or stroke).',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular risk stratification integrates traditional risk factors with risk-enhancing conditions and imaging biomarkers (CAC scoring) to refine statin eligibility and intensity, particularly for intermediate-risk patients where treatment decisions are uncertain.',
      explanation: `**ASCVD Risk Assessment Framework:**

*10-Year ASCVD Risk (PCE):*
- Primary tool for statin decision-making
- Calculates risk of MI, stroke, fatal CVD
- Validated in diverse US populations
- Updated periodically

*Limitations:*
- May overestimate in some populations
- Does not capture all risk factors
- Static (does not account for risk trajectory)

**ACC/AHA Statin Guidelines (2018):**

*High-Intensity Statin (LDL reduction ≥50%):*
- Clinical ASCVD
- LDL-C ≥190 mg/dL
- Diabetes + 10-year risk ≥7.5%
- 10-year risk ≥20%

*Moderate-Intensity Statin:*
- Diabetes without additional risk
- 10-year risk 7.5-20% (after risk discussion)

*Risk Discussion Zone (7.5-20%):*
- Consider risk enhancers
- Consider coronary artery calcium (CAC)
- Shared decision-making

**Risk-Enhancing Factors:**
- Family history: 1st degree male <55, female <65
- LDL-C persistently ≥160 mg/dL
- Metabolic syndrome
- CKD (eGFR 15-59)
- Chronic inflammatory conditions
- History of preeclampsia/premature menopause
- South Asian ancestry
- Elevated triglycerides (≥175 mg/dL)
- Elevated Lp(a), hsCRP, apoB

**Coronary Artery Calcium (CAC) Scoring:**

*Utility:*
- Refines risk in intermediate-risk patients
- CAC = 0: Very low risk, may defer statin
- CAC 1-99: Favors statin
- CAC ≥100 or ≥75th percentile: Statin recommended

*Scoring (Agatston):*
- 0: No calcification
- 1-99: Mild
- 100-399: Moderate
- ≥400: Severe

*When to Use:*
- Risk discussion zone (7.5-20%)
- When decision is uncertain
- Patient requests additional information

**Blood Pressure Targets:**

*2017 ACC/AHA Guidelines:*
- Goal <130/80 for most adults
- More aggressive than prior JNC 8

*SPRINT Trial:*
- Intensive treatment (<120 systolic) reduced CVD events
- Higher rates of hypotension, syncope, AKI
- Benefit in patients ≥75 years old

**Lipid Targets:**

*LDL-C Thresholds:*
- Very high risk (prior event): Consider <70 mg/dL
- High risk: <100 mg/dL
- Percent reduction more important than absolute target

*Non-HDL and ApoB:*
- Secondary targets
- Non-HDL = TC - HDL
- ApoB measures atherogenic particles

**Additional Biomarkers:**

*Lp(a):*
- Genetically determined
- ≥50 mg/dL = risk enhancer
- Check once in lifetime
- Limited treatment options (niacin, PCSK9i modest effect)

*hsCRP:*
- Inflammatory marker
- ≥2 mg/L = higher risk
- CANTOS and COLCOT trials support anti-inflammatory therapy`,
      keyTerms: [
        { term: 'CAC score', definition: 'Coronary artery calcium score; CT-based measure of calcified plaque in coronary arteries' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a); genetically determined atherogenic lipoprotein particle' },
        { term: 'risk enhancer', definition: 'Factor that increases CVD risk beyond traditional risk factors' },
        { term: 'hsCRP', definition: 'High-sensitivity C-reactive protein; marker of systemic inflammation associated with CVD risk' },
      ],
      clinicalNotes: 'Use PCE for initial risk assessment. Consider CAC for intermediate-risk patients uncertain about statin. Check Lp(a) once, especially with family history. Document shared decision-making discussions.',
    },
    4: {
      level: 4,
      summary: 'Contemporary cardiovascular prevention integrates ASCVD risk assessment, coronary artery calcium for risk reclassification, emerging biomarkers (Lp(a), apoB), and evidence from REDUCE-IT and FOURIER trials guiding add-on therapy for residual risk, while addressing implementation gaps and health disparities.',
      explanation: `**Risk Assessment Evolution:**

*PCE Validation Studies:*
- Overestimates in some contemporary cohorts
- Calibration varies by population
- Ethnicity-specific equations debated

*Alternative/Additional Risk Scores:*
- MESA 10-year risk (includes CAC)
- QRISK3 (UK, more risk factors)
- Framingham Risk Score (historical, less diverse)
- Lifetime risk (useful in younger patients)

**Coronary Artery Calcium Evidence:**

*MESA Study:*
- CAC = 0: 1.1% 10-year event rate
- CAC ≥100: 7.1% event rate
- Risk reclassification in 25% of intermediate-risk

*SCOT-HEART:*
- CTCA (including CAC) reduced coronary events
- Information drives treatment intensification

*CAC Utility by Risk Category:*
| PCE Risk | CAC = 0 | CAC ≥100 |
|----------|---------|----------|
| <5% | Very low | Consider statin |
| 5-7.5% | Low | Start statin |
| 7.5-20% | May defer | Statin indicated |

**Residual Risk Management:**

*REDUCE-IT Trial:*
- Icosapent ethyl (EPA) 4g daily
- 25% reduction in CV events
- In patients with TG 135-499 on statin
- Mechanism: Anti-inflammatory + lipid lowering

*CLEAR Outcomes:*
- Bempedoic acid reduced CV events
- In statin-intolerant patients
- ACL inhibitor (upstream of statins)

*PCSK9 Inhibitors:*
- FOURIER (evolocumab), ODYSSEY (alirocumab)
- 15-20% additional CV event reduction
- High cost limits use
- Reserved for very high-risk, high LDL

**Lp(a)-Targeted Therapy:**

*Current Evidence:*
- Lp(a) ≥50 mg/dL: 2x risk increase
- Currently no approved Lp(a)-lowering therapy
- Pelacarsen (antisense): Phase 3 trials ongoing
- May become major target if effective

**Inflammation Targeting:**

*CANTOS (Canakinumab):*
- IL-1β inhibitor
- 15% CV event reduction
- Increased infection risk
- Not approved for CV prevention

*COLCOT (Colchicine):*
- Low-dose colchicine post-MI
- 23% reduction in CV events
- Now FDA-approved (Lodoco)
- Cost-effective option

**Polygenic Risk Scores:**

*Emerging Tool:*
- Combines hundreds of genetic variants
- Predicts CAD risk independent of traditional factors
- May identify high-risk individuals for earlier intervention
- Not yet guideline-recommended
- Implementation challenges

**Imaging Beyond CAC:**

*CCTA (Coronary CT Angiography):*
- Detects non-calcified plaque
- High-risk plaque features predict events
- Role in symptomatic patients established
- Expanding to asymptomatic risk assessment

*Carotid IMT:*
- Carotid intima-media thickness
- Less predictive than CAC
- No longer recommended for routine screening

**Implementation Challenges:**

*Statin Uptake Gap:*
- Only 50% of eligible patients on statins
- Adherence drops to 50% at 1 year
- Statin intolerance (often nocebo effect)

*Blood Pressure Control:*
- Only 50% of hypertensives at goal
- Provider inertia
- Patient non-adherence
- Access barriers

**Health Equity:**

*Disparities:*
- Black adults: 2x CVD mortality vs White
- Lower screening/treatment rates
- Social determinants of health
- Differential risk factor prevalence

*Interventions:*
- Community health workers
- Team-based care
- Address social needs
- Culturally tailored education`,
      keyTerms: [
        { term: 'icosapent ethyl', definition: 'Purified EPA (omega-3) shown to reduce CV events in REDUCE-IT trial' },
        { term: 'PCSK9 inhibitor', definition: 'Monoclonal antibody that dramatically lowers LDL-C by increasing LDL receptor recycling' },
        { term: 'bempedoic acid', definition: 'ACL inhibitor that lowers LDL-C, useful in statin intolerance' },
        { term: 'colchicine', definition: 'Anti-inflammatory drug now approved for CV risk reduction post-MI' },
      ],
      clinicalNotes: 'Consider CAC for intermediate-risk decisions. Address statin concerns proactively. Add icosapent ethyl for elevated TG on statin. Consider colchicine post-MI. Check Lp(a) with family history of premature CVD.',
    },
    5: {
      level: 5,
      summary: 'Precision cardiovascular prevention leverages polygenic risk scores, multi-marker panels, AI-enhanced imaging analysis, and emerging therapeutics (Lp(a)-lowering, RNA interference) while addressing the implementation science of translating trial evidence to population-level cardiovascular mortality reduction.',
      explanation: `**Precision Medicine in CVD Prevention:**

*Polygenic Risk Scores (PRS):*
- Genome-wide PRS for CAD (millions of variants)
- Risk stratification beyond traditional factors
- GWAS-derived scores predict lifetime risk
- May identify young individuals for early intervention
- UK Biobank validation shows discrimination

*Clinical Integration Challenges:*
- Ancestry-specific calibration needed
- Interpretation complexity
- Health equity concerns (European-centric)
- Cost and access barriers

**Advanced Biomarker Panels:**

*Metabolomics:*
- TMAO (gut microbiome-derived)
- Ceramides (lipotoxicity markers)
- May predict residual risk

*Proteomics:*
- Multi-protein panels
- Machine learning-derived scores
- Research phase

*Circulating Biomarkers:*
| Marker | Use |
|--------|-----|
| Lp(a) | Risk enhancer, once lifetime |
| ApoB | Atherogenic particle count |
| hsCRP | Inflammation, guide colchicine |
| NT-proBNP | HF screening, risk |

**AI in Cardiovascular Imaging:**

*CAC Scoring:*
- Automated scoring from routine CTs
- Opportunistic screening
- AI enables population-level screening

*CCTA Analysis:*
- Automated stenosis quantification
- Plaque characterization
- High-risk feature detection

*Retinal Imaging:*
- AI predicts CV risk from fundus photos
- Non-invasive, inexpensive
- Research validation ongoing

**Emerging Therapeutics:**

*Lp(a) Lowering:*
- Pelacarsen (antisense): Phase 3
- SLN360 (siRNA): Phase 2
- Olpasiran (siRNA): 95% Lp(a) reduction
- OCEAN(a) trial ongoing (outcomes)

*RNA Interference:*
- Inclisiran (PCSK9 siRNA): Twice yearly dosing
- FDA approved
- Significant LDL reduction
- CV outcomes trial ongoing

*Gene Therapy:*
- ANGPTL3 inhibition
- Base editing approaches
- Permanent LDL lowering
- Early clinical trials

**Population Health Strategies:**

*System-Level Interventions:*
- EHR-based risk identification
- Population health management
- Quality metrics (HEDIS, CMS)
- Value-based care incentives

*Policy Interventions:*
- Tobacco policy
- Trans fat bans
- Sodium reduction
- Food labeling

*Community Interventions:*
- Barbershop hypertension programs
- Faith-based CVD prevention
- Worksite wellness
- Mobile health (mHealth)

**Cost-Effectiveness Considerations:**

*Screening:*
- BP screening: Very cost-effective
- Lipid screening: Cost-effective
- CAC: Cost-effective in intermediate risk
- PRS: Uncertain, depends on clinical utility

*Treatment:*
- Statins: Highly cost-effective
- PCSK9i: Limited cost-effectiveness (high NNT)
- Icosapent ethyl: Favorable in high TG

**Stopping Screening/Treatment:**

*End-of-Life Considerations:*
- Limited benefit with short life expectancy
- Statins: Consider stopping if <1-2 year prognosis
- Deprescribing discussions important
- Patient preferences central

**Research Frontiers:**

1. Lp(a) outcomes trials
2. Inflammation targeting (IL-6)
3. Gut microbiome interventions
4. Gene therapy for dyslipidemia
5. AI-guided risk stratification
6. Polygenic risk clinical implementation

**Quality Metrics:**

*Process Measures:*
- BP screening rate
- Lipid screening rate
- Statin prescribing for eligible patients
- BP control rate

*Outcome Measures:*
- CVD events prevented
- Population BP/LDL distribution
- Disparities reduction`,
      keyTerms: [
        { term: 'inclisiran', definition: 'siRNA therapy targeting PCSK9 mRNA, given twice yearly for sustained LDL lowering' },
        { term: 'pelacarsen', definition: 'Antisense oligonucleotide targeting Lp(a), in Phase 3 trials for CVD outcomes' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk from millions of variants, predicting CAD risk independent of traditional factors' },
        { term: 'opportunistic screening', definition: 'Extracting CAC or other risk markers from imaging done for other purposes' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Use 10-year ASCVD risk for initial assessment
- CAC for intermediate-risk shared decisions
- Check Lp(a) once (high = risk enhancer)
- Address statin concerns with evidence-based counseling
- Add therapies for residual risk (icosapent ethyl, colchicine)
- Track quality metrics: BP control, statin prescribing
- Address disparities: Team-based care, community outreach
- Stay current: Lp(a) therapies, PRS implementation
- Deprescribe thoughtfully at end of life`,
    },
  },

  media: [
    {
      id: 'cvd-risk-algorithm',
      type: 'diagram',
      filename: 'cvd-risk-assessment-algorithm.svg',
      title: 'CVD Risk Assessment Algorithm',
      description: 'Flowchart for cardiovascular risk assessment and treatment decisions',
    },
  ],

  citations: [
    {
      id: 'acc-aha-lipids-2018',
      type: 'article',
      title: '2018 AHA/ACC Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy SM', 'et al.'],
      source: 'Circulation',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uspstf-statin-2022',
      type: 'article',
      title: 'Statin Use for the Primary Prevention of Cardiovascular Disease in Adults',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-lipid-screening', targetType: 'concept', relationship: 'child', label: 'Lipid Screening' },
    { targetId: 'concept-blood-pressure-screening', targetType: 'concept', relationship: 'child', label: 'Blood Pressure Screening' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['preventive medicine', 'cardiology', 'screening', 'risk assessment'],
    keywords: ['cardiovascular', 'CVD', 'risk assessment', 'statin', 'hypertension', 'cholesterol'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
