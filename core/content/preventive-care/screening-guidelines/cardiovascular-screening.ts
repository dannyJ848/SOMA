/**
 * Cardiovascular Screening Guidelines
 *
 * Comprehensive cardiovascular disease screening recommendations based on
 * ACC/AHA guidelines and USPSTF recommendations.
 */

import { EducationalContent } from '../../types';

export const CARDIOVASCULAR_SCREENING: EducationalContent = {
  id: 'concept-cardiovascular-screening',
  type: 'concept',
  name: 'Cardiovascular Screening Guidelines',
  alternateNames: ['Heart screening', 'Cardiovascular disease screening', 'CVD screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular heart and blood vessel screenings can detect problems early, when they are easier to treat.',
      explanation: `Cardiovascular screening checks for heart disease and stroke risk before problems develop.

**Key Cardiovascular Screenings:**

**Blood Pressure**
- What: Measures pressure in your arteries
- How often: At least every year
- Why: High blood pressure often has no symptoms

**Cholesterol (Lipid Panel)**
- What: Blood test for fats in blood
- How often: Every 4-6 years (more often if high)
- Why: High cholesterol can clog arteries

**Blood Sugar (Diabetes Screening)**
- What: Test for glucose in blood
- How often: Every 3 years starting at 35
- Why: Diabetes increases heart disease risk

**Weight (BMI)**
- What: Height and weight measurement
- How often: Every visit
- Why: Extra weight strains your heart

**Waist Circumference**
- What: Measure around your waist
- Why: Belly fat increases heart risk

**When to Start:**
- Blood pressure: Every visit starting at age 18
- Cholesterol: Starting at age 20
- Diabetes: Starting at age 35 (earlier if overweight)

**Warning Signs:**
- Chest pain
- Shortness of breath
- Irregular heartbeat
- Dizziness`,
      keyTerms: [
        { term: 'blood pressure', definition: 'Force of blood against artery walls' },
        { term: 'cholesterol', definition: 'Fat-like substance in blood; too much clogs arteries' },
        { term: 'BMI', definition: 'Body mass index; measure of weight relative to height' },
        { term: 'diabetes', definition: 'Condition with high blood sugar levels' },
      ],
      analogies: [
        'Your cardiovascular system is like plumbing - regular checks prevent clogs and leaks.',
        'Blood pressure screening is like checking tire pressure - prevents blowouts.',
      ],
      examples: [
        'James had no symptoms, but his doctor found high blood pressure at a routine visit. Treatment lowered his risk of heart attack.',
        'A cholesterol test showed Maria had high levels. Diet changes and medication brought them down.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular screening includes regular blood pressure measurement, lipid panel testing, diabetes screening, and risk assessment tools to identify individuals who benefit from preventive interventions.',
      explanation: `**Blood Pressure Screening:**
| Age | Frequency |
|-----|-----------|
| 18+ | Every visit, at least annually |
| Elevated | More frequent monitoring |

*Categories:*
- Normal: <120/<80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1 HTN: 130-139/80-89 mmHg
- Stage 2 HTN: ≥140/≥90 mmHg

**Lipid Screening:**
| Age | Risk Profile | Frequency |
|-----|--------------|-----------|
| 20+ | Normal | Every 4-6 years |
| Any age | Risk factors | More frequent |

*Risk factors for more frequent testing:*
- Diabetes
- Obesity
- Family history of early heart disease
- Smoking
- Hypertension

*Targets:*
- Total cholesterol: <200 mg/dL
- LDL: <100 mg/dL (<70 if high risk)
- HDL: >40 mg/dL men, >50 mg/dL women
- Triglycerides: <150 mg/dL

**Diabetes Screening:**
- Age 35+: Every 3 years (or earlier if overweight)
- Tests: Fasting glucose, HbA1c, or oral glucose tolerance
- Prediabetes: Fasting glucose 100-125 mg/dL, HbA1c 5.7-6.4%
- Diabetes: Fasting glucose ≥126 mg/dL, HbA1c ≥6.5%

**Risk Assessment Tools:**
- **ASCVD Risk Calculator**: Estimates 10-year risk of heart attack/stroke
- Ages 40-75: Calculate every 4-6 years
- Guides statin therapy decisions

**Additional Screening Considerations:**
- Abdominal aortic aneurysm: Men 65-79 who ever smoked (one-time ultrasound)
- Peripheral artery disease: Consider ankle-brachial index if symptoms`,
      keyTerms: [
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; includes heart attack and stroke' },
        { term: 'HbA1c', definition: 'Blood test measuring average blood sugar over 3 months' },
        { term: 'LDL', definition: 'Low-density lipoprotein; "bad" cholesterol that clogs arteries' },
        { term: 'HDL', definition: 'High-density lipoprotein; "good" cholesterol that removes cholesterol' },
        { term: 'HTN', definition: 'Hypertension; high blood pressure' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular screening integrates risk factor assessment, validated risk calculators, and evidence-based screening intervals to identify candidates for primary prevention including statins, aspirin, and lifestyle interventions.',
      explanation: `**ASCVD Risk Assessment:**

*Pooled Cohort Equations (PCE):*
- Estimates 10-year risk of ASCVD events
- Inputs: Age, sex, race, total cholesterol, HDL, SBP, treatment status, smoking, diabetes
- Ages 40-79 recommended

*Risk Categories & Management:*
| Risk | 10-Year ASCVD Risk | Statin Recommendation |
|------|-------------------|----------------------|
| Low | <5% | Lifestyle only |
| Borderline | 5-7.5% | Consider statin if risk enhancers |
| Intermediate | 7.5-20% | Moderate-intensity statin |
| High | ≥20% | High-intensity statin |

*Risk Enhancers:*
- Family history of premature ASCVD
- Elevated Lp(a) ≥50 mg/dL
- South Asian ancestry
- Chronic kidney disease
- Persistently elevated triglycerides ≥175 mg/dL
- Women with premature menopause or preeclampsia
- Inflammatory diseases (RA, psoriasis, HIV)

**Blood Pressure Classification & Management:**

*ACC/AHA 2017 Categories:*
- Normal: <120/<80
- Elevated: 120-129/<80 (lifestyle)
- Stage 1: 130-139/80-89 (lifestyle ± meds if ASCVD risk ≥10%)
- Stage 2: ≥140/≥90 (meds + lifestyle)

**Lipid Management:**

*Statin Indications:*
- Age 40-75 with LDL ≥190 mg/dL
- Age 40-75 with diabetes
- Age 40-75 with 10-year ASCVD risk ≥7.5% and risk enhancer

*Intensity:*
- High-intensity: Atorvastatin 40-80 mg, rosuvastatin 20-40 mg
- Moderate-intensity: Atorvastatin 10-20 mg, rosuvastatin 5-10 mg

**Aspirin for Primary Prevention:**
- Generally NOT recommended for most adults
- May consider in select high-risk patients
- Bleeding risk usually outweighs benefit

**AAA Screening:**
- One-time ultrasound for men 65-75 who ever smoked
- Selective for men never smoked
- Routine screening not recommended for women`,
      keyTerms: [
        { term: 'risk enhancers', definition: 'Factors that increase ASCVD risk beyond PCE calculation' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a); genetic risk factor for heart disease' },
        { term: 'AAA', definition: 'Abdominal aortic aneurysm; dangerous ballooning of aorta' },
        { term: 'primary prevention', definition: 'Preventing disease in those without known disease' },
      ],
      analogies: [],
      clinicalNotes: 'Use ASCVD risk calculator for ages 40-75. Discuss risk enhancers. Lifestyle first-line for all. Statins benefit high-risk. Avoid routine aspirin.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiovascular screening incorporates novel biomarkers (hs-CRP, CAC scoring), refined risk prediction, and management of special populations while addressing guideline evolution and screening controversies.',
      explanation: `**Novel Risk Markers:**

*Coronary Artery Calcium (CAC) Scoring:*
- CT scan measuring calcium in coronary arteries
- Agatston score: 0 (none), 1-100 (mild), 101-400 (moderate), >400 (severe)
- When to use: Risk decision in intermediate risk (5-20% 10-year)
- CAC=0: Low risk, may defer statin
- CAC≥100: High risk, statin definitely indicated
- CAC≥300: Very high risk, consider intensive therapy

*High-Sensitivity CRP (hs-CRP):*
- Marker of inflammation
- ≥2 mg/L: Enhanced risk
- <1 mg/L: Low risk
- Consider in intermediate risk for decision-making

*Apolipoprotein B (ApoB):*
- Better predictor than LDL in some studies
- Target: <80 mg/dL moderate risk, <60 mg/dL high risk
- Especially useful with hypertriglyceridemia

**Special Populations:**

*Women:*
- Risk underestimated by some tools
- Pregnancy complications as risk enhancers (preeclampsia, gestational diabetes)
- Autoimmune diseases increase risk more than in men
- Microvascular disease presentation differences

*Young Adults:*
- Focus on primordial prevention (preventing risk factors)
- Family history screening critical
- Lipid disorders (FH) present early
- Lifetime risk assessment

*Older Adults:*
- Age 75+: Consider life expectancy
- Frailty impacts benefit
- Polypharmacy concerns
- Individualize decisions

**Controversies & Evolution:**

*Triglycerides:*
- Independent risk factor
- REDUCE-IT trial: icosapent ethyl reduces events in high-risk with TG ≥135
- Consider in select patients

*Lp(a) Screening:*
- Genetic, stable throughout life
- Single measurement adequate
- No specific FDA-approved therapy yet
- Consider measuring once in lifetime
- Emerging therapies (pelacarsen, olpasiran) in trials

**Disparities:**
- South Asian: Higher risk at lower BMI
- Black adults: Higher stroke risk
- Hispanic: Underrecognition of risk
- Social determinants significant`,
      keyTerms: [
        { term: 'CAC', definition: 'Coronary artery calcium; CT scan measuring calcium burden in coronary arteries' },
        { term: 'Agatston score', definition: 'Scoring system for coronary artery calcium on CT' },
        { term: 'hs-CRP', definition: 'High-sensitivity C-reactive protein; inflammatory marker' },
        { term: 'ApoB', definition: 'Apolipoprotein B; measure of atherogenic particle count' },
        { term: 'FH', definition: 'Familial hypercholesterolemia; genetic high cholesterol condition' },
        { term: 'primordial prevention', definition: 'Preventing risk factors from developing' },
      ],
      analogies: [],
      clinicalNotes: 'CAC scoring useful in intermediate risk. Consider Lp(a) once per lifetime. Aggressive risk factor management in high-risk groups.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiovascular screening integrates multi-omics approaches, polygenic risk scores, AI-enhanced risk prediction, and precision prevention strategies while addressing global burden and implementation challenges.',
      explanation: `**Precision Risk Assessment:**

*Polygenic Risk Scores (PRS):*
- Genome-wide SNP analysis for CAD risk
- Top 5-20% have risk equivalent to monogenic FH
- May reclassify 20% of population
- Integration with clinical scores under study
- Limited in non-European ancestry (bias concern)

*Proteomics & Metabolomics:*
- SomaLogic assay: 5,000 proteins
- Emerging biomarkers
- Risk prediction improvement

*Multi-omic Risk Prediction:*
- Clinical + genetic + proteomic + metabolomic
- Machine learning integration
- Not yet clinically validated

**AI in Risk Prediction:**

*Enhanced Algorithms:*
- EHR-based predictive models
- Retinal imaging for risk assessment
- Wearable device data integration
- Natural language processing of notes

*Challenges:*
- Algorithmic bias
- Interpretability
- Clinical validation
- Integration into workflow

**Cardiovascular Disease Screening Evolution:**

*CAC Scoring Refinements:*
- CAC density (higher density = more stable plaque)
- CAC progression rate
- Zero CAC in diverse populations
- Sex-specific considerations

*Biomarker Advances:*
- Lipoprotein(a) lowering trials
- Inflammation reduction (colchicine COPS trial)
- PCSK9 inhibitors: LDL lowering to unprecedented levels

**Global Considerations:**

*Regional Variations:*
- Rheumatic heart disease: Still prevalent in developing world
- Chagas disease: Latin America
- Different risk factor predominance

*Screening Adaptations:*
- Resource-limited settings
- Cost-effectiveness frameworks
- Task-shifting to community health workers

**Emerging Modalities:**

*Coronary CT Angiography:*
- Plaque characterization
- High-risk plaque features
- Not for population screening

*Wearable Technology:*
- AFib detection (Apple Watch studies)
- Blood pressure monitoring
- Arrhythmia screening
- Data interpretation challenges

**Screening Controversies:**

*Overdiagnosis:*
- Incidental findings on CT
- Anxiety from false positives
- Resource utilization

*Young Adult Screening:*
- Universal vs selective
- Cost-effectiveness
- Long-term prevention impact

**Future Directions:**

*Risk Prediction Integration:*
- Machine learning models
- Social determinants incorporation
- Environmental exposures
- Epigenetic clocks

*Novel Therapeutics:*
- Gene editing for FH
- mRNA therapies
- Vaccines for risk factors (PCSK9)

*Implementation Science:*
- Screening program optimization
- Digital health integration
- Population health management`,
      keyTerms: [
        { term: 'PRS', definition: 'Polygenic risk score; aggregate measure of genetic risk from multiple variants' },
        { term: 'SNP', definition: 'Single nucleotide polymorphism; genetic variant' },
        { term: 'multi-omics', definition: 'Integration of multiple biological data types (genomic, proteomic, metabolomic)' },
        { term: 'high-risk plaque', definition: 'Plaque features associated with increased risk of rupture' },
      ],
      analogies: [],
      clinicalNotes: 'PRS shows promise but ancestry bias limits use. CAC zero reclassifies risk. AI models need validation. Implement social determinants into risk assessment.',
    },
  },

  media: [
    {
      id: 'cv-screening-algorithm',
      type: 'diagram',
      filename: 'cardiovascular-screening-algorithm.svg',
      title: 'Cardiovascular Screening Algorithm',
      description: 'Visual algorithm for cardiovascular risk assessment and screening',
    },
  ],

  citations: [
    {
      id: 'acc-aha-guidelines',
      type: 'website',
      title: 'ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease',
      source: 'American College of Cardiology / American Heart Association',
      url: 'https://www.acc.org/guidelines/hpc',
      accessedDate: '2025-01-25',
    },
    {
      id: 'uspstf-aspirin',
      type: 'website',
      title: 'Aspirin Use to Prevent Cardiovascular Disease',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-use-to-prevent-cardiovascular-disease-preventive-medication',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-cholesterol-screening', targetType: 'concept', relationship: 'related', label: 'Cholesterol Screening' },
    { targetId: 'concept-blood-pressure-screening', targetType: 'concept', relationship: 'related', label: 'Blood Pressure Screening' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['preventive medicine', 'cardiology', 'screening', 'risk assessment'],
    keywords: ['cardiovascular screening', 'ASCVD risk', 'cholesterol', 'blood pressure', 'CAC', 'statin'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
