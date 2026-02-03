/**
 * Cardiovascular Risk Assessment
 *
 * Comprehensive education on cardiovascular disease risk assessment methods,
 * risk calculators, and clinical decision support tools.
 */

import { EducationalContent } from '../../types';

export const CARDIOVASCULAR_RISK: EducationalContent = {
  id: 'preventive-cardiovascular-risk',
  type: 'concept',
  name: 'Cardiovascular Risk Assessment',
  alternateNames: ['Heart disease risk assessment', 'CVD risk calculation', 'Cardiac risk stratification', 'ASCVD risk'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiovascular risk assessment helps doctors figure out your chances of having a heart attack or stroke so they can help you stay healthy.',
      explanation: `Your heart and blood vessels work together to keep blood flowing through your body. Sometimes problems can build up over time that increase your risk of heart attacks or strokes.

**What is Risk Assessment?**
Risk assessment is like a health report card for your heart. Doctors look at different things about your health to figure out how likely you are to have heart problems in the future.

**What Doctors Look At:**
- Your age
- Whether you smoke
- Your blood pressure numbers
- Your cholesterol levels
- Whether you have diabetes
- Your weight
- Family history of heart disease

**Why It Matters:**
- Finding out your risk early helps you make changes
- You can take steps to lower your risk
- Some people may need medicine to protect their heart
- Healthy choices make a big difference

**What You Can Do:**
- Eat healthy foods like fruits, vegetables, and whole grains
- Exercise regularly (aim for 30 minutes most days)
- Do not smoke or quit if you do
- Keep a healthy weight
- Take medicines your doctor prescribes

**How Risk is Described:**
- Low risk: Heart problems are unlikely in the next 10 years
- Medium risk: There is some chance of heart problems
- High risk: Heart problems are more likely without changes

Getting checked regularly helps catch problems early when they are easier to fix.`,
      keyTerms: [
        { term: 'risk assessment', definition: 'A way to measure how likely you are to develop a health problem' },
        { term: 'cardiovascular', definition: 'Having to do with your heart and blood vessels' },
        { term: 'heart attack', definition: 'When blood flow to part of the heart is blocked' },
        { term: 'stroke', definition: 'When blood flow to part of the brain is blocked or a blood vessel bursts' },
      ],
      analogies: [
        'Think of risk assessment like a weather forecast for your heart - it tells you the chance of a storm (heart problem) so you can prepare.',
        'Your heart risk factors are like warning lights on a car dashboard - paying attention to them helps prevent breakdowns.',
      ],
      examples: [
        'John is 55, smokes, and has high blood pressure. His risk assessment showed he has a high chance of heart problems. His doctor helped him quit smoking and start blood pressure medicine.',
      ],
      patientCounselingPoints: [
        'Getting your heart risk checked is quick and painless',
        'Knowing your risk helps you and your doctor make a plan',
        'Even small changes in diet and exercise can lower your risk',
        'You can lower your risk at any age',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular risk assessment uses risk calculators and clinical factors to estimate 10-year probability of heart attacks and strokes, guiding prevention strategies including lifestyle changes and medication decisions.',
      explanation: `Cardiovascular disease (CVD) is the leading cause of death worldwide. Risk assessment helps identify people who would benefit most from preventive treatments.

**Key Risk Factors:**

*Non-Modifiable Factors:*
- Age (risk increases with age)
- Sex (men have higher risk earlier in life)
- Race/ethnicity (some groups have higher risk)
- Family history of premature CVD

*Modifiable Factors:*
- High blood pressure (hypertension)
- High LDL cholesterol (bad cholesterol)
- Low HDL cholesterol (good cholesterol)
- Diabetes
- Smoking
- Obesity
- Physical inactivity
- Poor diet

**Risk Calculators:**

The most common tool is the Pooled Cohort Equations (PCE), which estimates 10-year risk of:
- Heart attack (myocardial infarction)
- Stroke
- Death from cardiovascular causes

*Risk Categories:*
| Risk Level | 10-Year Risk | What It Means |
|------------|--------------|---------------|
| Low | Less than 5% | Less than 1 in 20 chance |
| Borderline | 5-7.5% | About 1 in 15 chance |
| Intermediate | 7.5-20% | About 1 in 10 chance |
| High | 20% or higher | 1 in 5 or higher chance |

**How Risk Categories Guide Treatment:**

*Low Risk:*
- Focus on healthy lifestyle
- Regular monitoring

*Borderline/Intermediate Risk:*
- Lifestyle changes essential
- Consider risk-enhancing factors
- Discuss statin therapy with doctor

*High Risk:*
- Aggressive risk factor control
- Statin therapy usually recommended
- May need additional medications

**Risk-Enhancing Factors:**
These factors increase risk beyond what calculators estimate:
- Family history of early heart disease
- Very high LDL cholesterol (160+ mg/dL)
- Chronic kidney disease
- Metabolic syndrome
- Inflammatory conditions like rheumatoid arthritis
- South Asian ancestry
- History of preeclampsia or early menopause

**Lifestyle Modifications:**
- DASH or Mediterranean diet
- 150 minutes moderate exercise weekly
- Maintain healthy weight (BMI 18.5-24.9)
- Stop smoking
- Limit alcohol`,
      keyTerms: [
        { term: 'Pooled Cohort Equations', definition: 'A risk calculator that estimates 10-year probability of cardiovascular events using multiple risk factors' },
        { term: 'modifiable risk factor', definition: 'A risk factor that can be changed through lifestyle or medication' },
        { term: 'LDL cholesterol', definition: 'Low-density lipoprotein; the bad cholesterol that builds up in arteries' },
        { term: 'HDL cholesterol', definition: 'High-density lipoprotein; the good cholesterol that helps remove bad cholesterol' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; includes heart attacks, strokes, and peripheral artery disease' },
      ],
      analogies: [
        'Risk factors add up like stacking blocks - the more you have, the more unstable the tower becomes.',
        'A risk calculator is like an insurance actuary for your heart - it uses data to predict future problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular risk stratification integrates Pooled Cohort Equations with risk-enhancing factors, coronary artery calcium scoring, and biomarkers to refine treatment decisions, particularly in intermediate-risk patients where shared decision-making is critical.',
      explanation: `**ASCVD Risk Assessment Framework:**

*10-Year ASCVD Risk (PCE) Components:*
- Age (40-79 years)
- Sex
- Race (White, African American, Other)
- Total cholesterol
- HDL cholesterol
- Systolic blood pressure
- Blood pressure treatment status
- Diabetes status
- Smoking status

*PCE Limitations:*
- Derived from historical cohorts (may overestimate in contemporary populations)
- Limited race/ethnicity categories
- Does not capture all risk factors
- Static assessment (misses risk trajectory)

**ACC/AHA Risk Categories:**

| Category | 10-Year Risk | Primary Management |
|----------|--------------|-------------------|
| Low | <5% | Lifestyle |
| Borderline | 5-7.5% | Lifestyle, consider risk enhancers |
| Intermediate | 7.5-20% | Lifestyle, risk discussion, consider CAC |
| High | ≥20% | High-intensity statin |

**Risk-Enhancing Factors (Detailed):**
- Family history: 1st-degree relative with premature ASCVD (male <55, female <65)
- LDL-C persistently ≥160 mg/dL
- Chronic kidney disease (eGFR 15-59 mL/min/1.73m²)
- Metabolic syndrome
- Chronic inflammatory conditions (RA, psoriasis, HIV)
- South Asian ancestry
- History of preeclampsia or premature menopause
- Elevated triglycerides (≥175 mg/dL, fasting)

**Coronary Artery Calcium (CAC) Scoring:**

*When to Consider:*
- Intermediate risk (7.5-20%) where decision is uncertain
- Borderline risk with risk enhancers
- Patient preference for additional information

*Agatston Scoring:*
| Score | Category | Implication |
|-------|----------|-------------|
| 0 | None | May defer statin, recheck 5-10 years |
| 1-99 | Mild | Favors statin |
| 100-299 | Moderate | Statin indicated |
| ≥300 | Severe | Statin + consider additional therapy |

*CAC Reclassification:*
- CAC = 0 identifies lower-risk individuals (can defer statin)
- CAC ≥100 or ≥75th percentile supports statin therapy
- Approximately 25% of intermediate-risk patients reclassified

**Additional Biomarkers:**

*Lipoprotein(a) [Lp(a)]:*
- Genetically determined
- Check once in lifetime
- ≥50 mg/dL (or ≥125 nmol/L) = risk enhancer
- Limited treatment options currently

*High-sensitivity CRP (hsCRP):*
- Inflammatory marker
- ≥2 mg/L indicates elevated risk
- May guide anti-inflammatory therapy

*Apolipoprotein B (ApoB):*
- Measures atherogenic particle number
- ≥130 mg/dL = risk enhancer
- Better predictor than LDL-C in some populations

**Shared Decision-Making:**
- Present absolute risk (1 in X chance)
- Discuss benefits and harms of statin
- Consider patient values and preferences
- Use decision aids when available
- Document discussion`,
      keyTerms: [
        { term: 'CAC score', definition: 'Coronary artery calcium score measured by CT; quantifies calcified atherosclerotic plaque' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a); genetically determined atherogenic particle that increases CVD risk' },
        { term: 'hsCRP', definition: 'High-sensitivity C-reactive protein; inflammatory marker associated with cardiovascular risk' },
        { term: 'risk reclassification', definition: 'When additional testing changes a patient from one risk category to another' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient make healthcare decisions together' },
      ],
      clinicalNotes: 'Calculate 10-year ASCVD risk for patients 40-75. Use CAC in intermediate-risk patients when decision is uncertain. Check Lp(a) once, especially with family history. Document shared decision-making discussions.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiovascular risk assessment incorporates polygenic risk scores, multi-marker panels, AI-enhanced imaging analysis, and lifetime risk estimation while addressing PCE limitations, risk score calibration across populations, and evidence gaps in special populations.',
      explanation: `**PCE Performance and Limitations:**

*Calibration Issues:*
- Original derivation cohorts: ARIC, CHS, CARDIA, Framingham
- Systematic overestimation in contemporary cohorts
- MESA and other studies show ~20% overestimation
- Ethnic-specific equations debated (may perpetuate disparities)

*Alternative Risk Scores:*
| Score | Advantages | Limitations |
|-------|------------|-------------|
| MESA 10-year | Includes CAC | US-specific |
| QRISK3 | More risk factors | UK-derived |
| SCORE2 | European populations | Not US-validated |
| Framingham | Historical reference | Less diverse |
| Reynolds | Includes hsCRP | Limited validation |

**Lifetime Risk Assessment:**

*Utility:*
- Particularly valuable in younger patients
- 10-year risk may be low despite substantial lifetime risk
- Motivates early lifestyle intervention
- Lloyd-Jones algorithm

*Example:*
- 40-year-old with multiple risk factors
- 10-year risk: 5% (low)
- Lifetime risk: 40% (high)
- Appropriate for aggressive lifestyle counseling

**Polygenic Risk Scores (PRS):**

*Methodology:*
- Genome-wide association studies identify risk variants
- Aggregate scores from millions of SNPs
- Machine learning optimization

*Evidence:*
- UK Biobank validation
- Risk stratification independent of traditional factors
- May identify high-risk individuals missed by traditional scores
- ~20% with high PRS and low PCE risk

*Current Limitations:*
- European ancestry bias
- Implementation challenges
- Cost and access
- Not guideline-recommended yet

**Advanced Biomarker Panels:**

*Metabolomics:*
- TMAO (trimethylamine N-oxide): gut microbiome-derived
- Ceramides: lipotoxicity markers
- Branched-chain amino acids

*Proteomics:*
- Multi-protein panels
- Machine learning-derived scores
- Commercial tests emerging (research phase)

**AI in Risk Assessment:**

*Imaging Applications:*
- Automated CAC scoring from any CT
- Opportunistic screening from chest/abdominal CTs
- AI-derived cardiovascular risk from retinal images
- Plaque characterization from CCTA

*EHR Integration:*
- Automated risk calculation
- Alert systems for unscreened patients
- Population health identification

**Special Populations:**

*Diabetes:*
- ASCVD risk calculation still applicable
- May use diabetes-specific calculators (UKPDS)
- All diabetics with additional risk factor: consider statin

*Chronic Kidney Disease:*
- PCE includes eGFR
- Higher baseline risk
- Statin benefit preserved (SHARP trial)

*HIV:*
- Elevated risk beyond traditional factors
- PCE may underestimate
- Consider earlier intervention

*Inflammatory Conditions:*
- RA: 1.5x risk multiplier
- Psoriasis, SLE: elevated risk
- Inflammatory burden independent predictor

**Risk Communication:**

*Absolute vs Relative Risk:*
- Patients prefer absolute risk
- 10-year risk: "5 in 100 chance" vs "5%"
- NNT to prevent one event helpful

*Visual Aids:*
- Icon arrays (100 people figures)
- Heart age concept
- Risk trajectory graphs

*Framing Effects:*
- Positive framing: "95% chance of NOT having event"
- Negative framing: "5% chance of having event"
- Both should be presented

**Implementation Science:**

*Barriers to Risk Assessment:*
- Time constraints
- EHR integration challenges
- Missing data elements
- Provider uncertainty about thresholds

*Facilitators:*
- Automated calculation
- Team-based care
- Standing orders for labs
- Quality metrics`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk calculated from thousands to millions of genetic variants' },
        { term: 'calibration', definition: 'How well predicted risks match observed event rates in a population' },
        { term: 'lifetime risk', definition: 'Probability of developing CVD over remaining lifespan, typically calculated from age 50' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite associated with CVD risk' },
        { term: 'NNT', definition: 'Number needed to treat; number of patients who must receive treatment to prevent one event' },
      ],
      clinicalNotes: 'Consider lifetime risk in younger patients with borderline 10-year risk. Recognize PCE limitations in contemporary diverse populations. Stay updated on PRS implementation evidence. Use patient-friendly risk communication tools. Address special population considerations.',
    },
    5: {
      level: 5,
      summary: 'Precision cardiovascular risk prediction integrates multi-omic data, deep learning imaging analysis, and dynamic risk modeling with implementation strategies for population health management, while navigating evidence gaps, health equity considerations, and the evolving role of genetic risk information.',
      explanation: `**Precision Risk Assessment Evolution:**

*Multi-Omic Integration:*
- Genomics: PRS, rare variants (LDLR, PCSK9, APOB)
- Transcriptomics: Gene expression signatures
- Proteomics: Multi-protein panels (SomaLogic, Olink)
- Metabolomics: Lipidome, TMAO, ceramides
- Integration algorithms under development

*Deep Learning Applications:*
| Modality | Application | Validation Status |
|----------|-------------|-------------------|
| CAC from chest CT | Automated scoring | FDA-cleared |
| Retinal imaging | CV risk from fundus photos | Research |
| ECG | AI-predicted AF, LVH, mortality | Emerging |
| Echo | Automated EF, strain | Clinical use |
| CCTA | Plaque quantification | Research |

**Polygenic Risk Score Implementation:**

*Current Evidence:*
- Khera et al. (2018): PRS identifies 8% of population at 3x risk
- Elliott et al. (2020): Adds incrementally to clinical factors
- PREVENT guidelines: Not yet recommended

*Implementation Challenges:*
- Ancestry-specific calibration essential
- European-derived scores perform worse in other populations
- Health equity implications
- Clinical actionability questions

*When to Consider:*
- Research settings
- Family history of premature CVD
- Patient-initiated testing
- Contextualize with clinical factors

**Dynamic Risk Assessment:**

*Serial Risk Tracking:*
- Risk trajectory may be more informative than single measurement
- Declining risk: Positive reinforcement
- Increasing risk: Intervention opportunity

*Wearable Integration:*
- Continuous BP monitoring
- Activity tracking
- Heart rate variability
- Sleep metrics

**Population Health Management:**

*EHR-Based Strategies:*
- Registry identification of at-risk patients
- Automated risk calculation
- Best Practice Alerts (optimized to reduce fatigue)
- Panel management tools

*Quality Metrics (2024):*
- MIPS: Statin prescribing, BP control
- HEDIS: Lipid screening, diabetes screening
- CMS: All-cause readmission, mortality

*Team-Based Care Models:*
- Clinical pharmacists for lipid management
- Health coaches for lifestyle
- Community health workers for SDOH
- Care coordinators for complex patients

**Health Equity in Risk Assessment:**

*PCE Race Adjustment Debate:*
- Race as biological vs social construct
- Risk of perpetuating disparities
- Alternative: Race-neutral models with socioeconomic factors
- Ongoing guideline discussions

*Disparities in Implementation:*
- Lower CAC utilization in minority populations
- Differential statin prescribing
- Access to specialized testing

*Equity-Focused Interventions:*
- Community-based screening programs
- Culturally tailored risk communication
- Addressing social determinants
- Trusted messenger approaches

**Emerging Therapeutic Implications:**

*Risk-Based Therapy Intensification:*
| Risk Level | Consider |
|------------|----------|
| Very high (prior event + residual risk) | PCSK9i, icosapent ethyl, colchicine |
| High Lp(a) | Future Lp(a)-lowering therapies |
| High PRS | Earlier intervention consideration |
| High inflammatory burden | Anti-inflammatory therapy |

**Cost-Effectiveness Considerations:**

*Screening Modalities:*
- Traditional risk factors: Very cost-effective
- CAC in intermediate risk: Cost-effective
- PRS: Unknown, depends on clinical utility
- Advanced biomarkers: Limited evidence

*QALY Thresholds:*
- Statin for intermediate risk: Favorable
- CAC for intermediate risk: ~$50,000/QALY
- Universal screening vs targeted approaches

**Research Frontiers:**

1. **OCEAN(a) Outcomes Trial**: Lp(a) lowering with pelacarsen
2. **Polygenic Risk Implementation**: Optimal integration strategies
3. **AI Risk Prediction**: Deep learning from routine clinical data
4. **Multi-Omic Panels**: Clinical validation studies
5. **Dynamic Risk**: Wearable-integrated continuous assessment
6. **Health Equity**: Race-neutral risk equations

**Clinical Excellence Framework:**

*Individual Level:*
- Calculate 10-year ASCVD risk (40-75 years)
- Assess risk enhancers
- CAC for intermediate risk uncertainty
- Check Lp(a) once (family history, intermediate risk)
- Shared decision-making documented

*System Level:*
- Population risk registry
- Automated identification and outreach
- Quality metric tracking
- Disparity monitoring and intervention

*Communication Excellence:*
- Absolute risk in patient-friendly terms
- Visual aids (icon arrays)
- Avoid fatalistic framing
- Emphasize modifiable factors
- Motivational interviewing principles`,
      keyTerms: [
        { term: 'multi-omic integration', definition: 'Combining genomic, proteomic, metabolomic, and other data layers for risk prediction' },
        { term: 'deep learning', definition: 'Neural network-based machine learning that can extract complex patterns from imaging and clinical data' },
        { term: 'dynamic risk assessment', definition: 'Serial risk evaluation over time to track trajectory rather than single point estimates' },
        { term: 'race-neutral risk equation', definition: 'Risk calculator that excludes race as a variable, using socioeconomic and clinical factors instead' },
        { term: 'QALY', definition: 'Quality-adjusted life year; measure combining quantity and quality of life for cost-effectiveness analysis' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Use PCE as starting point; recognize limitations in diverse populations
- CAC highly valuable in intermediate-risk shared decisions
- Lp(a) check once; anticipate future targeted therapies
- Stay updated on PRS implementation evidence
- Lead population health initiatives for CV risk
- Champion health equity in risk assessment and treatment
- Embrace AI tools with critical appraisal
- Communicate risk effectively using patient-centered approaches
- Document shared decision-making comprehensively`,
    },
  },

  media: [
    {
      id: 'cv-risk-flowchart',
      type: 'diagram',
      filename: 'cardiovascular-risk-assessment-flowchart.svg',
      title: 'Cardiovascular Risk Assessment Algorithm',
      description: 'Clinical decision flowchart for cardiovascular risk stratification and treatment decisions',
    },
  ],

  citations: [
    {
      id: 'acc-aha-cholesterol-2018',
      type: 'article',
      title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy SM', 'Stone NJ', 'Bailey AL', 'et al.'],
      source: 'Circulation',
      accessedDate: '2025-01-28',
    },
    {
      id: 'uspstf-statin-2022',
      type: 'article',
      title: 'Statin Use for the Primary Prevention of Cardiovascular Disease in Adults: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
    {
      id: 'mesa-cac-2015',
      type: 'article',
      title: 'Coronary Artery Calcium Score and Risk Classification for Coronary Heart Disease Prediction',
      authors: ['Yeboah J', 'McClelland RL', 'Polonsky TS', 'et al.'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Screening' },
    { targetId: 'concept-lipid-screening', targetType: 'concept', relationship: 'related', label: 'Lipid Screening' },
    { targetId: 'concept-blood-pressure-screening', targetType: 'concept', relationship: 'related', label: 'Blood Pressure Screening' },
  ],

  tags: {
    systems: ['preventive-care', 'cardiovascular'],
    topics: ['preventive medicine', 'risk assessment', 'cardiology', 'screening'],
    keywords: ['cardiovascular risk', 'ASCVD', 'Pooled Cohort Equations', 'CAC score', 'risk calculator', 'statin therapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
