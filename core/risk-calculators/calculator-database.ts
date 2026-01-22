/**
 * Risk Calculator Database
 *
 * Evidence-based health risk calculators with educational explanations.
 * These help users understand their health risks using the same tools
 * that physicians use.
 */

import type { RiskCalculator, CalculatorResult, ContributingFactor, RiskReductionOption } from './types.js';

// ============================================
// ASCVD Risk Calculator
// ============================================

const ASCVD_CALCULATOR: RiskCalculator = {
  id: 'ascvd-10-year',
  name: 'ASCVD Risk',
  fullName: 'Atherosclerotic Cardiovascular Disease 10-Year Risk Estimator',
  category: 'cardiovascular',

  purpose: 'Estimates your 10-year risk of having a heart attack, stroke, or other cardiovascular event',

  targetPopulation: 'Adults aged 40-79 without known cardiovascular disease',

  clinicalUse: 'Used to guide decisions about statin therapy and lifestyle interventions. Helps identify people who would benefit most from prevention strategies.',

  limitations: [
    'Only validated for ages 40-79',
    'Not for use in people with existing heart disease',
    'May underestimate risk in certain populations',
    'Based on US population data - may not be accurate for other populations',
    'Does not account for all risk factors (family history of premature CVD, CRP, etc.)',
  ],

  evidenceBase: {
    originalStudy: 'Pooled Cohort Equations - developed from multiple large cohort studies (ARIC, CHS, CARDIA, Framingham)',
    validationStudies: ['REGARDS study', 'MESA study', 'Multiple external validations'],
    guidelineReferences: [
      '2018 AHA/ACC Cholesterol Guidelines',
      '2019 ACC/AHA Guideline on Primary Prevention of Cardiovascular Disease',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2018',
    notes: 'This is the calculator recommended by US guidelines for guiding statin therapy decisions.',
  },

  inputs: [
    {
      id: 'age',
      name: 'Age',
      type: 'number',
      description: 'Your current age in years',
      unit: 'years',
      range: { min: 40, max: 79 },
      required: true,
      riskContribution: 'Age is one of the strongest risk factors. Cardiovascular risk increases significantly with age as arteries accumulate damage over time.',
      helpText: 'This calculator is designed for ages 40-79',
    },
    {
      id: 'sex',
      name: 'Sex',
      type: 'select',
      description: 'Biological sex',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      required: true,
      riskContribution: 'Men have higher cardiovascular risk at younger ages. Women\'s risk increases after menopause but remains lower than men\'s at the same age.',
    },
    {
      id: 'race',
      name: 'Race',
      type: 'select',
      description: 'Race/ethnicity for calculation purposes',
      options: [
        { value: 'white', label: 'White' },
        { value: 'african-american', label: 'African American' },
        { value: 'other', label: 'Other' },
      ],
      required: true,
      riskContribution: 'The calculator has different equations for different racial groups based on observed differences in cardiovascular risk in US populations.',
      helpText: 'The calculator was validated primarily in White and African American populations. For other groups, estimates may be less accurate.',
    },
    {
      id: 'totalCholesterol',
      name: 'Total Cholesterol',
      type: 'number',
      description: 'Your total cholesterol level',
      unit: 'mg/dL',
      range: { min: 100, max: 400 },
      required: true,
      riskContribution: 'Higher total cholesterol contributes to plaque buildup in arteries. However, the ratio to HDL matters more than total cholesterol alone.',
    },
    {
      id: 'hdlCholesterol',
      name: 'HDL Cholesterol',
      type: 'number',
      description: 'Your "good" cholesterol level',
      unit: 'mg/dL',
      range: { min: 20, max: 150 },
      required: true,
      riskContribution: 'HDL ("good cholesterol") protects against cardiovascular disease. Higher HDL is associated with lower risk.',
    },
    {
      id: 'systolicBP',
      name: 'Systolic Blood Pressure',
      type: 'number',
      description: 'The top number of your blood pressure',
      unit: 'mmHg',
      range: { min: 90, max: 200 },
      required: true,
      riskContribution: 'Higher blood pressure damages blood vessel walls and promotes plaque formation. One of the most important modifiable risk factors.',
    },
    {
      id: 'onBPMeds',
      name: 'On Blood Pressure Medication',
      type: 'boolean',
      description: 'Are you currently taking medication for high blood pressure?',
      required: true,
      riskContribution: 'Taking BP medication suggests a history of hypertension. Even controlled, this indicates higher baseline risk.',
    },
    {
      id: 'diabetic',
      name: 'Diabetes',
      type: 'boolean',
      description: 'Do you have diabetes?',
      required: true,
      riskContribution: 'Diabetes significantly increases cardiovascular risk - considered a "coronary risk equivalent." Accelerates atherosclerosis.',
    },
    {
      id: 'smoker',
      name: 'Current Smoker',
      type: 'boolean',
      description: 'Do you currently smoke?',
      required: true,
      riskContribution: 'Smoking damages blood vessels, promotes clotting, and accelerates atherosclerosis. One of the most important modifiable risk factors.',
    },
  ],

  calculationMethod: 'Uses the Pooled Cohort Equations - separate equations for different sex/race combinations. Applies coefficients to log-transformed risk factors to calculate 10-year risk.',

  outputRange: {
    type: 'percentage',
    min: 0,
    max: 100,
    unit: '%',
    description: '10-year probability of ASCVD event (heart attack, stroke, or cardiovascular death)',
  },

  interpretation: {
    categories: [
      { name: 'Low Risk', range: { min: 0, max: 5 }, interpretation: 'Less than 5% chance of cardiovascular event in next 10 years. Focus on healthy lifestyle.', color: '#22c55e' },
      { name: 'Borderline Risk', range: { min: 5, max: 7.5 }, interpretation: '5-7.5% chance. Lifestyle modification important. Statin may be considered based on risk enhancers.', color: '#eab308' },
      { name: 'Intermediate Risk', range: { min: 7.5, max: 20 }, interpretation: '7.5-20% chance. Consider statin therapy. Risk-benefit discussion recommended.', color: '#f97316' },
      { name: 'High Risk', range: { min: 20, max: 100 }, interpretation: '20% or higher chance. Statin therapy recommended. Intensive lifestyle modification.', color: '#ef4444' },
    ],
    contextualFactors: [
      'Family history of premature CVD (not included in calculator)',
      'LDL-cholesterol level ≥160 mg/dL',
      'Chronic kidney disease',
      'Metabolic syndrome',
      'South Asian ancestry',
      'High-sensitivity C-reactive protein ≥2 mg/L',
      'Coronary artery calcium score',
    ],
    importantCaveats: [
      'This is a risk estimate, not a prediction of what will happen to you',
      'Lifestyle changes can significantly reduce your risk',
      'Discuss your results with your healthcare provider',
      'Additional tests may refine your risk estimate',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 5 },
      category: 'Low Risk',
      recommendations: [
        'Focus on heart-healthy lifestyle',
        'Continue regular physical activity (150 min/week moderate exercise)',
        'Follow heart-healthy diet',
        'Avoid tobacco',
        'Maintain healthy weight',
      ],
      discussWithDoctor: [
        'Frequency of cholesterol screening',
        'Blood pressure monitoring',
        'Whether any lifestyle changes are needed',
      ],
    },
    {
      scoreRange: { min: 5, max: 7.5 },
      category: 'Borderline Risk',
      recommendations: [
        'Intensify lifestyle modifications',
        'Consider coronary artery calcium (CAC) score for risk refinement',
        'Discuss risk enhancers with your doctor',
        'If risk enhancers present, statin therapy may be reasonable',
      ],
      discussWithDoctor: [
        'Whether CAC scoring would help clarify risk',
        'Presence of risk-enhancing factors',
        'Whether to start a statin',
        'Specific lifestyle changes to reduce risk',
      ],
    },
    {
      scoreRange: { min: 7.5, max: 20 },
      category: 'Intermediate Risk',
      recommendations: [
        'Statin therapy should be discussed',
        'Moderate-intensity statin is reasonable',
        'Aggressive lifestyle modification',
        'Consider CAC score if decision about statin is uncertain',
      ],
      discussWithDoctor: [
        'Starting statin therapy',
        'Which statin and dose is right for you',
        'Target cholesterol levels',
        'Other risk factors to address',
      ],
    },
    {
      scoreRange: { min: 20, max: 100 },
      category: 'High Risk',
      recommendations: [
        'Statin therapy is recommended',
        'High-intensity statin preferred',
        'Goal to reduce LDL by ≥50%',
        'Comprehensive risk factor modification',
        'May need additional LDL-lowering therapy',
      ],
      discussWithDoctor: [
        'Statin therapy and intensity',
        'Adding other cholesterol medications if needed',
        'Blood pressure control',
        'Diabetes management if applicable',
        'Aspirin therapy',
      ],
    },
  ],

  education: {
    whatItMeasures: 'This calculator estimates your chance of having a heart attack, stroke, or dying from cardiovascular disease over the next 10 years. It combines multiple risk factors into a single number that helps guide prevention decisions.',

    howDeveloped: 'It was developed using data from over 25,000 people followed for decades in major heart studies (Framingham, ARIC, CARDIA, CHS). By tracking who developed heart disease and analyzing their risk factors, researchers created equations that predict risk.',

    whyTheseFactors: `Each factor in the calculator affects your cardiovascular system:
- **Age**: Arteries accumulate damage over time
- **Sex**: Different hormone profiles affect risk differently
- **Cholesterol**: High LDL promotes plaque; high HDL protects
- **Blood Pressure**: High pressure damages artery walls
- **Diabetes**: Accelerates atherosclerosis through multiple mechanisms
- **Smoking**: Damages vessels, promotes clotting, reduces HDL`,

    interpretationGuide: `Your score is a probability, not destiny. A 15% risk means that of 100 similar people, about 15 would have an event over 10 years - but 85 wouldn't. The score helps prioritize prevention efforts. Lower risk doesn't mean no risk; higher risk doesn't mean an event will definitely occur.`,

    questionsForDoctor: [
      'What is my LDL cholesterol level and should it be lower?',
      'Should I take a statin based on my risk?',
      'Are there risk factors not captured by this calculator that I should know about?',
      'What lifestyle changes would have the biggest impact on my risk?',
      'Should I have a coronary calcium scan to refine my risk estimate?',
    ],

    commonMisconceptions: [
      { misconception: 'A high score means I will have a heart attack', reality: 'A high score means higher probability, not certainty. Many people with high scores never have events, especially if they take prevention steps.' },
      { misconception: 'A low score means I don\'t need to worry about heart health', reality: 'Low risk is not zero risk. Healthy lifestyle benefits everyone. Risk also increases with age.' },
      { misconception: 'This calculator includes everything important', reality: 'Some important factors like family history, inflammation markers, and coronary calcium are not in this calculator. Your doctor may consider these.' },
    ],

    relatedCalculators: ['framingham', 'mesa', 'cac-score'],
  },
};

// ============================================
// CHA2DS2-VASc Calculator
// ============================================

const CHA2DS2_VASC_CALCULATOR: RiskCalculator = {
  id: 'cha2ds2-vasc',
  name: 'CHA₂DS₂-VASc',
  fullName: 'CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk',
  category: 'stroke',

  purpose: 'Estimates annual stroke risk in patients with atrial fibrillation to guide anticoagulation decisions',

  targetPopulation: 'Adults with non-valvular atrial fibrillation (AFib)',

  clinicalUse: 'Used to decide whether anticoagulation (blood thinners) should be started to prevent stroke in AFib patients',

  limitations: [
    'Only for non-valvular atrial fibrillation',
    'Does not apply to people with mechanical heart valves or moderate-severe mitral stenosis',
    'Does not incorporate all stroke risk factors',
    'Does not account for bleeding risk (use HAS-BLED for that)',
  ],

  evidenceBase: {
    originalStudy: 'Lip et al., 2010 - refinement of original CHADS2 score',
    validationStudies: ['Multiple international validation studies', 'Swedish cohort validation', 'Danish cohort validation'],
    guidelineReferences: [
      'AHA/ACC/HRS AFib Guidelines',
      'ESC Guidelines on Atrial Fibrillation',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2020',
    notes: 'Recommended over older CHADS2 score because it better identifies truly low-risk patients',
  },

  inputs: [
    {
      id: 'heartFailure',
      name: 'Heart Failure',
      type: 'boolean',
      description: 'History of heart failure or reduced heart function (EF ≤40%)',
      required: true,
      riskContribution: 'Heart failure creates sluggish blood flow that promotes clot formation. Adds 1 point.',
    },
    {
      id: 'hypertension',
      name: 'Hypertension',
      type: 'boolean',
      description: 'History of high blood pressure or on blood pressure medication',
      required: true,
      riskContribution: 'High blood pressure damages blood vessels and contributes to clot formation. Adds 1 point.',
    },
    {
      id: 'age',
      name: 'Age',
      type: 'select',
      description: 'Your age range',
      options: [
        { value: '<65', label: 'Under 65' },
        { value: '65-74', label: '65-74 years', description: 'Adds 1 point' },
        { value: '>=75', label: '75 years or older', description: 'Adds 2 points' },
      ],
      required: true,
      riskContribution: 'Stroke risk in AFib increases significantly with age. Age ≥75 is a major risk factor.',
    },
    {
      id: 'diabetes',
      name: 'Diabetes',
      type: 'boolean',
      description: 'History of diabetes mellitus',
      required: true,
      riskContribution: 'Diabetes promotes blood clotting and vascular disease. Adds 1 point.',
    },
    {
      id: 'priorStroke',
      name: 'Prior Stroke/TIA',
      type: 'boolean',
      description: 'History of stroke or transient ischemic attack (TIA/mini-stroke)',
      required: true,
      riskContribution: 'Previous stroke is the strongest predictor of future stroke. Adds 2 points.',
    },
    {
      id: 'vascularDisease',
      name: 'Vascular Disease',
      type: 'boolean',
      description: 'History of heart attack, peripheral artery disease, or aortic plaque',
      required: true,
      riskContribution: 'Presence of atherosclerosis elsewhere indicates higher stroke risk. Adds 1 point.',
    },
    {
      id: 'sex',
      name: 'Sex',
      type: 'select',
      description: 'Biological sex',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female', description: 'Adds 1 point' },
      ],
      required: true,
      riskContribution: 'Female sex adds to stroke risk in AFib, but only as a modifier when other risk factors are present.',
    },
  ],

  calculationMethod: 'Sum of points: C (CHF) + H (HTN) + A₂ (Age ≥75) + D (Diabetes) + S₂ (Stroke/TIA) + V (Vascular) + A (Age 65-74) + Sc (Sex). Score ranges 0-9.',

  outputRange: {
    type: 'score',
    min: 0,
    max: 9,
    unit: 'points',
    description: 'Higher scores indicate higher annual stroke risk',
  },

  interpretation: {
    categories: [
      { name: 'Low Risk (Men 0, Women 1)', range: { min: 0, max: 0 }, interpretation: 'Annual stroke risk ~0%. Anticoagulation generally not needed.', color: '#22c55e' },
      { name: 'Low-Moderate (Men 1, Women 2)', range: { min: 1, max: 1 }, interpretation: 'Annual stroke risk ~1-2%. Anticoagulation should be considered.', color: '#eab308' },
      { name: 'Moderate (Score 2)', range: { min: 2, max: 2 }, interpretation: 'Annual stroke risk ~2-3%. Anticoagulation recommended.', color: '#f97316' },
      { name: 'High (Score ≥3)', range: { min: 3, max: 9 }, interpretation: 'Annual stroke risk 3-15% depending on score. Anticoagulation strongly recommended.', color: '#ef4444' },
    ],
    contextualFactors: [
      'Bleeding risk (HAS-BLED score)',
      'Type of atrial fibrillation (paroxysmal, persistent, permanent)',
      'Patient preference and ability to comply with anticoagulation',
      'Kidney and liver function',
    ],
    importantCaveats: [
      'This score guides anticoagulation decisions, not aspirin decisions',
      'Aspirin is generally not recommended for stroke prevention in AFib',
      'Bleeding risk should also be assessed',
      'Anticoagulation benefits almost always outweigh bleeding risks in AFib',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 0 },
      category: 'Low Risk (Men 0)',
      recommendations: [
        'Anticoagulation generally not recommended for men with score 0',
        'Women with score 1 (female sex only) have similar low risk',
        'Reassess if new risk factors develop',
      ],
      discussWithDoctor: [
        'Whether annual reassessment is appropriate',
        'Symptoms suggesting undetected risk factors',
        'Rhythm vs rate control strategies',
      ],
    },
    {
      scoreRange: { min: 1, max: 1 },
      category: 'Low-Moderate Risk',
      recommendations: [
        'Anticoagulation should be considered',
        'Balance against bleeding risk',
        'DOACs (direct oral anticoagulants) preferred over warfarin',
      ],
      discussWithDoctor: [
        'Whether to start anticoagulation',
        'Which anticoagulant is best for you',
        'Your bleeding risk factors',
      ],
    },
    {
      scoreRange: { min: 2, max: 9 },
      category: 'Moderate to High Risk',
      recommendations: [
        'Anticoagulation is recommended',
        'DOACs (dabigatran, rivaroxaban, apixaban, edoxaban) preferred',
        'Warfarin if DOAC not appropriate',
        'Stroke risk reduction outweighs bleeding risk in most patients',
      ],
      discussWithDoctor: [
        'Which anticoagulant is best for you',
        'Monitoring requirements',
        'What to do if you have bleeding',
        'Drug interactions',
      ],
    },
  ],

  education: {
    whatItMeasures: `This calculator estimates your yearly risk of having a stroke if you have atrial fibrillation (AFib). AFib causes the heart's upper chambers to quiver instead of beating regularly, which can allow blood clots to form. These clots can travel to the brain and cause stroke. The score helps decide if you need blood thinners to prevent this.`,

    howDeveloped: 'It evolved from the older CHADS₂ score by adding more risk factors to better identify who needs anticoagulation. It was validated in thousands of AFib patients across multiple countries.',

    whyTheseFactors: `Each factor increases stroke risk in AFib:
- **Heart Failure**: Weakened heart pumps blood less effectively, allowing clots to form
- **Hypertension**: Damages blood vessels, promotes clotting
- **Age**: Risk increases substantially after 65, and especially after 75
- **Diabetes**: Promotes inflammation and clotting
- **Prior Stroke**: Strongest predictor - if you've had one stroke, risk of another is high
- **Vascular Disease**: Indicates widespread atherosclerosis
- **Sex**: Women with AFib and other risk factors have higher stroke rates than men`,

    interpretationGuide: `A score of 0 in men (or 1 in women from sex alone) indicates low risk where anticoagulation may not be needed. Score of 1 in men (2 in women) warrants discussion about anticoagulation. Score of 2 or higher in anyone means anticoagulation is recommended. The benefits of preventing stroke almost always outweigh bleeding risks.`,

    questionsForDoctor: [
      'Should I be on a blood thinner based on my score?',
      'Which blood thinner is best for me?',
      'What is my bleeding risk?',
      'What should I do if I have bleeding while on a blood thinner?',
      'How often do I need monitoring?',
    ],

    commonMisconceptions: [
      { misconception: 'Aspirin is a good alternative to blood thinners for AFib', reality: 'Aspirin is not recommended for stroke prevention in AFib. It\'s not effective enough and still causes bleeding. If you need protection, you need real anticoagulation.' },
      { misconception: 'Blood thinners are too dangerous', reality: 'For most AFib patients, the risk of a devastating stroke far outweighs the risk of bleeding from anticoagulation. Strokes from AFib are often severe and disabling.' },
      { misconception: 'My AFib comes and goes, so I don\'t need a blood thinner', reality: 'Stroke risk is similar whether AFib is constant or intermittent. If your score warrants anticoagulation, you need it regardless of your AFib pattern.' },
    ],

    relatedCalculators: ['has-bled', 'chads2'],
  },
};

// ============================================
// Calculator Functions
// ============================================

/**
 * Calculate ASCVD 10-year risk
 * Simplified version of the Pooled Cohort Equations
 */
export function calculateASCVD(inputs: {
  age: number;
  sex: 'male' | 'female';
  race: 'white' | 'african-american' | 'other';
  totalCholesterol: number;
  hdlCholesterol: number;
  systolicBP: number;
  onBPMeds: boolean;
  diabetic: boolean;
  smoker: boolean;
}): CalculatorResult {
  // Simplified calculation (real PCE is more complex)
  let baseRisk = 0;

  // Age contribution (major factor)
  if (inputs.age < 50) baseRisk += 2;
  else if (inputs.age < 60) baseRisk += 5;
  else if (inputs.age < 70) baseRisk += 10;
  else baseRisk += 15;

  // Sex
  if (inputs.sex === 'male') baseRisk += 3;

  // Cholesterol
  const ratio = inputs.totalCholesterol / inputs.hdlCholesterol;
  if (ratio > 5) baseRisk += 3;
  else if (ratio > 4) baseRisk += 1;

  // Blood pressure
  if (inputs.systolicBP >= 160) baseRisk += 5;
  else if (inputs.systolicBP >= 140) baseRisk += 3;
  else if (inputs.systolicBP >= 130) baseRisk += 1;

  if (inputs.onBPMeds) baseRisk += 1;

  // Diabetes
  if (inputs.diabetic) baseRisk += 4;

  // Smoking
  if (inputs.smoker) baseRisk += 4;

  // African American modifier
  if (inputs.race === 'african-american') baseRisk += 2;

  // Cap at reasonable range
  const score = Math.min(Math.max(baseRisk, 0.5), 50);

  // Determine category
  let riskCategory: string;
  if (score < 5) riskCategory = 'Low Risk';
  else if (score < 7.5) riskCategory = 'Borderline Risk';
  else if (score < 20) riskCategory = 'Intermediate Risk';
  else riskCategory = 'High Risk';

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.age >= 60) {
    contributingFactors.push({
      factor: 'Age',
      impact: 'major',
      modifiable: false,
      explanation: 'Cardiovascular risk increases with age as arteries accumulate damage',
    });
  }

  if (inputs.diabetic) {
    contributingFactors.push({
      factor: 'Diabetes',
      impact: 'major',
      modifiable: true,
      explanation: 'Diabetes accelerates atherosclerosis. Good glucose control reduces risk.',
    });
  }

  if (inputs.smoker) {
    contributingFactors.push({
      factor: 'Current smoking',
      impact: 'major',
      modifiable: true,
      explanation: 'Smoking damages blood vessels and promotes clotting. Quitting has immediate benefits.',
    });
  }

  if (inputs.systolicBP >= 140) {
    contributingFactors.push({
      factor: 'Elevated blood pressure',
      impact: 'major',
      modifiable: true,
      explanation: 'High blood pressure damages artery walls. Treatment significantly reduces risk.',
    });
  }

  if (ratio > 4) {
    contributingFactors.push({
      factor: 'Cholesterol ratio',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Your total to HDL cholesterol ratio suggests room for improvement.',
    });
  }

  // Risk reduction options
  const riskReduction: RiskReductionOption[] = [];

  if (inputs.smoker) {
    riskReduction.push({
      intervention: 'Quit smoking',
      expectedReduction: 'Risk drops rapidly - within 1 year, risk is cut in half',
      evidence: 'Strong evidence from multiple studies',
      practical: 'Consider nicotine replacement, medications, or counseling. Your doctor can help.',
    });
  }

  if (score >= 7.5) {
    riskReduction.push({
      intervention: 'Statin therapy',
      expectedReduction: 'Reduces cardiovascular events by 25-30%',
      evidence: 'Very strong evidence - statins are proven to prevent heart attacks and strokes',
      practical: 'Once-daily medication. Discuss with your doctor about which statin is right for you.',
    });
  }

  if (inputs.systolicBP >= 130) {
    riskReduction.push({
      intervention: 'Blood pressure control',
      expectedReduction: 'Each 10 mmHg reduction cuts cardiovascular risk by ~20%',
      evidence: 'Strong evidence from blood pressure trials',
      practical: 'Diet (especially reducing salt), exercise, and medications as needed.',
    });
  }

  riskReduction.push({
    intervention: 'Mediterranean diet',
    expectedReduction: 'Reduces cardiovascular events by 30%',
    evidence: 'Strong evidence from PREDIMED trial',
    practical: 'Emphasize vegetables, fruits, whole grains, olive oil, nuts, fish. Limit red meat.',
  });

  riskReduction.push({
    intervention: 'Regular exercise',
    expectedReduction: 'Reduces cardiovascular risk by 20-30%',
    evidence: 'Consistent evidence across many studies',
    practical: 'Aim for 150 minutes/week of moderate activity (brisk walking, cycling, swimming).',
  });

  return {
    calculatorId: 'ascvd-10-year',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: '%',
    riskCategory,
    interpretation: `Your estimated 10-year risk of heart attack or stroke is ${score.toFixed(1)}%. This puts you in the ${riskCategory} category.`,
    patientExplanation: `If we followed 100 people with your risk profile for 10 years, we would expect about ${Math.round(score)} to have a heart attack, stroke, or die from cardiovascular disease. The other ${100 - Math.round(score)} would not. This is a probability, not a certainty - and you can reduce your risk through lifestyle and treatment.`,
    recommendations: ASCVD_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    populationComparison: score < 10 ? 'Your risk is lower than most people your age.' : score < 20 ? 'Your risk is similar to or somewhat higher than average for your age.' : 'Your risk is higher than most people your age.',
    disclaimer: 'This calculator provides an estimate based on population data. It is not a prediction of what will happen to you individually. Discuss your results with your healthcare provider to understand your personal situation and options.',
  };
}

/**
 * Calculate CHA2DS2-VASc score
 */
export function calculateCHA2DS2VASc(inputs: {
  heartFailure: boolean;
  hypertension: boolean;
  age: '<65' | '65-74' | '>=75';
  diabetes: boolean;
  priorStroke: boolean;
  vascularDisease: boolean;
  sex: 'male' | 'female';
}): CalculatorResult {
  let score = 0;

  if (inputs.heartFailure) score += 1;
  if (inputs.hypertension) score += 1;
  if (inputs.age === '65-74') score += 1;
  if (inputs.age === '>=75') score += 2;
  if (inputs.diabetes) score += 1;
  if (inputs.priorStroke) score += 2;
  if (inputs.vascularDisease) score += 1;
  if (inputs.sex === 'female') score += 1;

  // Annual stroke risk by score (approximate percentages)
  const strokeRiskByScore: Record<number, number> = {
    0: 0.2, 1: 1.3, 2: 2.2, 3: 3.2, 4: 4.0, 5: 6.7, 6: 9.8, 7: 9.6, 8: 12.5, 9: 15.2,
  };

  const annualRisk = strokeRiskByScore[Math.min(score, 9)] || 15.2;

  // Determine category
  let riskCategory: string;
  const isMale = inputs.sex === 'male';
  if (score === 0 || (score === 1 && !isMale)) {
    riskCategory = 'Low Risk';
  } else if (score === 1 || (score === 2 && !isMale)) {
    riskCategory = 'Low-Moderate Risk';
  } else {
    riskCategory = score >= 4 ? 'High Risk' : 'Moderate Risk';
  }

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.priorStroke) {
    contributingFactors.push({
      factor: 'Prior stroke or TIA',
      impact: 'major',
      modifiable: false,
      explanation: 'Previous stroke is the strongest predictor of future stroke in AFib. Adds 2 points.',
    });
  }

  if (inputs.age === '>=75') {
    contributingFactors.push({
      factor: 'Age ≥75',
      impact: 'major',
      modifiable: false,
      explanation: 'Age over 75 significantly increases stroke risk. Adds 2 points.',
    });
  }

  if (inputs.heartFailure) {
    contributingFactors.push({
      factor: 'Heart failure',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Heart failure causes sluggish blood flow, promoting clot formation. Adds 1 point.',
    });
  }

  if (inputs.hypertension) {
    contributingFactors.push({
      factor: 'Hypertension',
      impact: 'moderate',
      modifiable: true,
      explanation: 'High blood pressure damages blood vessels and promotes clotting. Adds 1 point.',
    });
  }

  if (inputs.diabetes) {
    contributingFactors.push({
      factor: 'Diabetes',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Diabetes promotes inflammation and clotting. Adds 1 point.',
    });
  }

  const recommendations = score >= 2 || (score === 1 && isMale)
    ? ['Anticoagulation recommended', 'DOACs (direct oral anticoagulants) preferred over warfarin', 'Discuss which anticoagulant is best for you']
    : score === 1
      ? ['Anticoagulation should be considered', 'Discuss benefits and risks with your doctor']
      : ['Anticoagulation generally not recommended', 'Reassess if risk factors change'];

  return {
    calculatorId: 'cha2ds2-vasc',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'points',
    riskCategory,
    interpretation: `Your CHA₂DS₂-VASc score is ${score}, corresponding to approximately ${annualRisk.toFixed(1)}% annual stroke risk. Category: ${riskCategory}.`,
    patientExplanation: `With a score of ${score}, your estimated chance of having a stroke each year while in atrial fibrillation (without blood thinners) is about ${annualRisk.toFixed(1)}%. Over 5 years, this risk accumulates. ${score >= 2 ? 'At this level, blood thinners significantly reduce your stroke risk and are generally recommended.' : 'Your risk is relatively low, but discuss with your doctor whether anticoagulation is right for you.'}`,
    recommendations,
    contributingFactors,
    riskReduction: score >= 1 ? [
      {
        intervention: 'Anticoagulation (blood thinners)',
        expectedReduction: 'Reduces stroke risk by approximately 65%',
        evidence: 'Very strong evidence from multiple trials',
        practical: 'DOACs (like apixaban, rivaroxaban) are generally preferred. Once or twice daily pill.',
      },
    ] : [],
    disclaimer: 'This calculator estimates stroke risk in atrial fibrillation. It does not account for bleeding risk. Discuss anticoagulation decisions with your healthcare provider.',
  };
}

// ============================================
// HAS-BLED Bleeding Risk Calculator
// ============================================

const HAS_BLED_CALCULATOR: RiskCalculator = {
  id: 'has-bled',
  name: 'HAS-BLED',
  fullName: 'HAS-BLED Bleeding Risk Score',
  category: 'bleeding',

  purpose: 'Estimates the 1-year risk of major bleeding in patients on anticoagulation for atrial fibrillation',

  targetPopulation: 'Adults with atrial fibrillation on or being considered for anticoagulation',

  clinicalUse: 'Used alongside CHA₂DS₂-VASc to balance stroke prevention against bleeding risk. Helps identify modifiable bleeding risk factors.',

  limitations: [
    'Designed for patients with atrial fibrillation',
    'Should not be used alone to decide against anticoagulation',
    'A high score does not contraindicate anticoagulation - it identifies need for careful monitoring',
    'Does not predict intracranial hemorrhage specifically',
    'Some risk factors are modifiable and should be addressed',
  ],

  evidenceBase: {
    originalStudy: 'Pisters R et al. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation. Chest 2010.',
    validationStudies: [
      'Validated in multiple cohorts including Euro Heart Survey',
      'RELY-ABLE study validation',
      'Swedish registry studies',
    ],
    guidelineReferences: [
      '2020 ESC Guidelines for diagnosis and management of atrial fibrillation',
      '2019 AHA/ACC/HRS Focused Update on AFib',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2020',
    notes: 'Endorsed by European and American guidelines. Most widely used bleeding risk score in AFib.',
  },

  inputs: [
    {
      id: 'hypertension',
      name: 'Hypertension (uncontrolled)',
      type: 'boolean',
      description: 'Uncontrolled hypertension (systolic >160 mmHg)',
      required: true,
      riskContribution: 'Uncontrolled high blood pressure damages blood vessel walls and increases risk of bleeding, especially intracranial hemorrhage.',
      helpText: 'Counts only if blood pressure is uncontrolled (systolic >160 mmHg)',
    },
    {
      id: 'renalDisease',
      name: 'Abnormal Renal Function',
      type: 'boolean',
      description: 'Chronic dialysis, renal transplant, or creatinine ≥2.3 mg/dL',
      required: true,
      riskContribution: 'Kidney disease impairs drug clearance and affects platelet function, increasing bleeding risk.',
    },
    {
      id: 'liverDisease',
      name: 'Abnormal Liver Function',
      type: 'boolean',
      description: 'Chronic liver disease (cirrhosis) or biochemical evidence of liver derangement',
      required: true,
      riskContribution: 'The liver produces clotting factors. Liver disease impairs coagulation and increases bleeding risk.',
      helpText: 'Includes cirrhosis, bilirubin >2x upper limit, AST/ALT/ALP >3x upper limit',
    },
    {
      id: 'priorStrokeOrBleeding',
      name: 'Prior Stroke or Bleeding',
      type: 'boolean',
      description: 'History of stroke OR prior major bleeding episode',
      required: true,
      riskContribution: 'Prior stroke indicates vascular fragility. Prior major bleeding strongly predicts future bleeding.',
    },
    {
      id: 'labilINR',
      name: 'Labile INR',
      type: 'boolean',
      description: 'Unstable/high INRs or time in therapeutic range <60%',
      required: true,
      riskContribution: 'Poorly controlled anticoagulation increases both clotting and bleeding risk. Applies to warfarin users.',
      helpText: 'Only applicable to patients on warfarin. Check "No" for patients on DOACs or not yet on anticoagulation.',
    },
    {
      id: 'elderly',
      name: 'Elderly',
      type: 'boolean',
      description: 'Age >65 years',
      required: true,
      riskContribution: 'Older age is associated with increased bleeding risk due to more fragile blood vessels and comorbidities.',
    },
    {
      id: 'drugsOrAlcohol',
      name: 'Drugs or Alcohol',
      type: 'boolean',
      description: 'Concomitant use of antiplatelet agents, NSAIDs, OR alcohol abuse',
      required: true,
      riskContribution: 'Antiplatelet agents (aspirin, clopidogrel), NSAIDs, and alcohol all increase bleeding risk when combined with anticoagulation.',
      helpText: 'Includes aspirin, clopidogrel, NSAIDs (ibuprofen, naproxen), or ≥8 alcoholic drinks/week',
    },
  ],

  calculationMethod: 'Simple additive score: 1 point for each risk factor present (H+A+S+B+L+E+D). Some factors can score 2 points if both renal AND liver, or both drugs AND alcohol.',

  outputRange: {
    type: 'score',
    min: 0,
    max: 9,
    unit: 'points',
    description: 'Score from 0 to 9, with higher scores indicating higher bleeding risk',
  },

  interpretation: {
    categories: [
      { name: 'Low Risk', range: { min: 0, max: 0 }, interpretation: '1.13% annual risk of major bleeding. Anticoagulation generally safe.', color: '#22c55e' },
      { name: 'Low-Moderate Risk', range: { min: 1, max: 1 }, interpretation: '1.02% annual risk. Anticoagulation benefits usually outweigh risks.', color: '#84cc16' },
      { name: 'Moderate Risk', range: { min: 2, max: 2 }, interpretation: '1.88% annual risk. Address modifiable risk factors, monitor closely.', color: '#eab308' },
      { name: 'High Risk', range: { min: 3, max: 9 }, interpretation: '3.7-12.5% annual risk. Address modifiable factors, careful monitoring, consider DOAC over warfarin.', color: '#ef4444' },
    ],
    contextualFactors: [
      'Stroke risk from CHA₂DS₂-VASc should be weighed against bleeding risk',
      'Many risk factors are modifiable (blood pressure, alcohol, concomitant drugs)',
      'DOACs have lower bleeding risk than warfarin in most patients',
      'Benefits of anticoagulation almost always outweigh bleeding risks for AFib',
    ],
    importantCaveats: [
      'A high HAS-BLED score is NOT a contraindication to anticoagulation',
      'Use to identify and modify bleeding risk factors',
      'Untreated AFib with high stroke risk is more dangerous than bleeding risk',
      'Score should prompt discussion, not automatic drug avoidance',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 1 },
      category: 'Low Risk',
      recommendations: [
        'Anticoagulation can be initiated with standard monitoring',
        'No specific bleeding-related modifications needed',
        'Standard follow-up schedule appropriate',
      ],
      discussWithDoctor: [
        'Baseline labs before starting anticoagulation',
        'Choice of anticoagulant',
        'Monitoring schedule',
      ],
    },
    {
      scoreRange: { min: 2, max: 2 },
      category: 'Moderate Risk',
      recommendations: [
        'Anticoagulation still indicated in most AFib patients',
        'Address modifiable risk factors before starting',
        'Control blood pressure',
        'Avoid NSAIDs and unnecessary aspirin',
        'More frequent monitoring may be warranted',
      ],
      discussWithDoctor: [
        'Whether any medications can be stopped (aspirin, NSAIDs)',
        'Blood pressure management',
        'Choice between DOAC vs warfarin (DOACs may be safer)',
        'Monitoring frequency',
      ],
    },
    {
      scoreRange: { min: 3, max: 9 },
      category: 'High Risk',
      recommendations: [
        'High bleeding risk does NOT mean avoid anticoagulation',
        'Strongly address all modifiable risk factors',
        'Control blood pressure to <140 systolic',
        'Stop aspirin if possible (unless recent stent)',
        'Avoid NSAIDs',
        'Address alcohol use',
        'Consider DOAC over warfarin (lower intracranial bleeding)',
        'More frequent follow-up and monitoring',
        'Patient education about bleeding signs',
      ],
      discussWithDoctor: [
        'Detailed review of medication list',
        'Strategies to reduce bleeding risk',
        'Signs of bleeding to watch for',
        'When to seek emergency care',
        'May need GI evaluation if history of GI bleeding',
      ],
    },
  ],

  education: {
    whatItMeasures: `HAS-BLED estimates your 1-year risk of major bleeding if you take blood thinners for atrial fibrillation. "Major bleeding" means bleeding that requires hospitalization or blood transfusion, or bleeding in a critical location (brain, eye, etc.). It does not predict minor bruising or nosebleeds.`,

    howDeveloped: 'Developed from the Euro Heart Survey on Atrial Fibrillation. Researchers identified factors that predicted major bleeding and combined them into a memorable acronym.',

    whyTheseFactors: `Each letter in HAS-BLED represents a bleeding risk factor:
- **H**ypertension - uncontrolled BP damages blood vessels
- **A**bnormal kidney or liver function - affects clotting and drug metabolism
- **S**troke history - indicates vascular fragility
- **B**leeding history - strongest predictor of future bleeding
- **L**abile INR - poorly controlled warfarin increases risk
- **E**lderly - age >65 has more fragile vessels
- **D**rugs or alcohol - aspirin, NSAIDs, and alcohol all increase bleeding`,

    interpretationGuide: `A score of 0-1 indicates low bleeding risk. A score of 2 indicates moderate risk. A score of 3 or higher indicates high bleeding risk. However, a high score should NOT prevent you from taking blood thinners if you need them. Instead, it means: 1) Work on modifiable factors (blood pressure, medications, alcohol), 2) Monitor more closely, 3) Consider a DOAC over warfarin.`,

    questionsForDoctor: [
      'Can any of my bleeding risk factors be modified?',
      'Is aspirin necessary, or can I stop it?',
      'Should I avoid ibuprofen and other NSAIDs?',
      'Which blood thinner has the lowest bleeding risk for me?',
      'What signs of bleeding should I watch for?',
    ],

    commonMisconceptions: [
      { misconception: 'A high HAS-BLED score means I should not take blood thinners', reality: 'A high score means you should address modifiable risk factors and monitor closely. The stroke risk from untreated AFib is usually much worse than the bleeding risk from anticoagulation.' },
      { misconception: 'Bleeding risk is more important than stroke risk', reality: 'Strokes from AFib are often devastating - major disability or death. Bleeding from anticoagulation is more often treatable. Most experts agree anticoagulation benefits outweigh risks if CHA₂DS₂-VASc indicates treatment.' },
      { misconception: 'My bleeding risk cannot be changed', reality: 'Several factors ARE modifiable: controlling blood pressure, stopping unnecessary aspirin/NSAIDs, reducing alcohol, and switching from warfarin to DOACs can all reduce bleeding risk.' },
    ],

    relatedCalculators: ['cha2ds2-vasc', 'atria-bleeding'],
  },
};

// ============================================
// Wells Criteria for DVT
// ============================================

const WELLS_DVT_CALCULATOR: RiskCalculator = {
  id: 'wells-dvt',
  name: 'Wells DVT',
  fullName: 'Wells Criteria for Deep Vein Thrombosis',
  category: 'pulmonary',

  purpose: 'Estimates the pretest probability of deep vein thrombosis (DVT) to guide diagnostic workup',

  targetPopulation: 'Adults with suspected DVT based on symptoms (leg pain, swelling, redness)',

  clinicalUse: 'Combined with D-dimer testing to determine if imaging (ultrasound) is needed. Low probability + negative D-dimer can rule out DVT without ultrasound.',

  limitations: [
    'Designed for symptomatic outpatients',
    'Less validated in hospitalized patients',
    'Does not rule out superficial thrombophlebitis',
    'Does not apply to upper extremity DVT',
    'Requires clinical assessment, not self-diagnosis',
    'Alternative diagnosis criterion requires medical judgment',
  ],

  evidenceBase: {
    originalStudy: 'Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med 2003.',
    validationStudies: [
      'Multiple validation studies worldwide',
      'Christopher Study',
      'AMUSE study',
    ],
    guidelineReferences: [
      'ACCP Evidence-Based Clinical Practice Guidelines (10th Edition)',
      'American Society of Hematology 2018 Guidelines for VTE',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2018',
    notes: 'Gold standard for DVT risk stratification. Extensively validated and guideline-recommended.',
  },

  inputs: [
    {
      id: 'activeCancer',
      name: 'Active Cancer',
      type: 'boolean',
      description: 'Cancer treatment within 6 months, or palliative',
      required: true,
      riskContribution: 'Cancer creates a hypercoagulable state. Malignancy increases DVT risk 4-6 fold.',
    },
    {
      id: 'paralysisOrImmobilization',
      name: 'Paralysis or Recent Immobilization',
      type: 'boolean',
      description: 'Paralysis, paresis, or recent plaster immobilization of lower extremities',
      required: true,
      riskContribution: 'Immobility causes blood stasis, one of the key factors in clot formation (Virchow triad).',
    },
    {
      id: 'bedriddenOrSurgery',
      name: 'Recently Bedridden or Major Surgery',
      type: 'boolean',
      description: 'Bedridden for >3 days or major surgery within 12 weeks',
      required: true,
      riskContribution: 'Surgery and prolonged bedrest both increase clotting risk through immobility and tissue injury.',
    },
    {
      id: 'localTenderness',
      name: 'Localized Tenderness Along Deep Veins',
      type: 'boolean',
      description: 'Tenderness along the course of the deep venous system',
      required: true,
      riskContribution: 'Direct evidence of venous inflammation. Tenderness along the deep veins suggests local clot.',
    },
    {
      id: 'entireLegSwelling',
      name: 'Entire Leg Swollen',
      type: 'boolean',
      description: 'Swelling of the entire leg',
      required: true,
      riskContribution: 'Extensive swelling suggests proximal (more dangerous) DVT obstructing major venous return.',
    },
    {
      id: 'calfSwelling',
      name: 'Calf Swelling >3cm',
      type: 'boolean',
      description: 'Calf swelling at least 3 cm larger than asymptomatic side (measured 10 cm below tibial tuberosity)',
      required: true,
      riskContribution: 'Objective asymmetric swelling is a key DVT finding. Symmetric swelling suggests other causes.',
    },
    {
      id: 'pittingEdema',
      name: 'Pitting Edema',
      type: 'boolean',
      description: 'Pitting edema confined to the symptomatic leg',
      required: true,
      riskContribution: 'Unilateral pitting edema suggests venous obstruction from DVT.',
    },
    {
      id: 'collateralVeins',
      name: 'Collateral Superficial Veins',
      type: 'boolean',
      description: 'Collateral (non-varicose) superficial veins',
      required: true,
      riskContribution: 'When deep veins are blocked, blood finds alternative routes through superficial veins that become visible.',
    },
    {
      id: 'previousDVT',
      name: 'Previous DVT Documented',
      type: 'boolean',
      description: 'Previously documented DVT',
      required: true,
      riskContribution: 'Prior DVT is a major risk factor for recurrence. Damaged valves and residual clot predispose to new clots.',
    },
    {
      id: 'alternativeDiagnosis',
      name: 'Alternative Diagnosis as Likely',
      type: 'boolean',
      description: 'An alternative diagnosis is at least as likely as DVT',
      required: true,
      riskContribution: 'If another diagnosis (Baker cyst, cellulitis, muscle strain) explains the symptoms, DVT is less likely. This SUBTRACTS 2 points.',
      helpText: 'Examples: cellulitis, calf strain, Baker cyst, superficial thrombophlebitis, lymphedema',
    },
  ],

  calculationMethod: 'Add 1 point for each clinical feature present. Subtract 2 points if an alternative diagnosis is at least as likely as DVT. Score determines probability category.',

  outputRange: {
    type: 'score',
    min: -2,
    max: 9,
    unit: 'points',
    description: 'Score from -2 to 9, categorized into low, moderate, or high probability',
  },

  interpretation: {
    categories: [
      { name: 'Low Probability', range: { min: -2, max: 0 }, interpretation: '~5% prevalence of DVT. D-dimer can rule out DVT if negative.', color: '#22c55e' },
      { name: 'Moderate Probability', range: { min: 1, max: 2 }, interpretation: '~17% prevalence of DVT. D-dimer helpful but ultrasound often needed.', color: '#eab308' },
      { name: 'High Probability', range: { min: 3, max: 9 }, interpretation: '~53% prevalence of DVT. Ultrasound required; D-dimer not sufficient to rule out.', color: '#ef4444' },
    ],
    contextualFactors: [
      'D-dimer is most useful in low probability patients',
      'Hospitalized patients may have higher baseline DVT risk',
      'Recent travel, oral contraceptives, and family history affect risk',
      'Ultrasound is definitive but may miss calf-only DVT',
    ],
    importantCaveats: [
      'This is a pretest probability, not a diagnosis',
      'Low probability + negative D-dimer effectively rules out DVT',
      'High probability requires imaging regardless of D-dimer',
      'Clinical judgment is still essential',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: -2, max: 0 },
      category: 'Low Probability',
      recommendations: [
        'Order D-dimer test',
        'If D-dimer negative: DVT effectively ruled out',
        'If D-dimer positive: Proceed to ultrasound',
        'No anticoagulation needed while awaiting results (unless very high clinical concern)',
      ],
      discussWithDoctor: [
        'Alternative diagnoses to consider',
        'D-dimer testing',
        'When to follow up if symptoms persist',
      ],
    },
    {
      scoreRange: { min: 1, max: 2 },
      category: 'Moderate Probability',
      recommendations: [
        'Order D-dimer test',
        'If D-dimer negative: DVT unlikely, but clinical judgment important',
        'If D-dimer positive: Proceed to ultrasound',
        'Some guidelines recommend direct ultrasound for moderate probability',
      ],
      discussWithDoctor: [
        'Whether D-dimer or direct ultrasound is appropriate',
        'Management while awaiting results',
        'Other potential diagnoses',
      ],
    },
    {
      scoreRange: { min: 3, max: 9 },
      category: 'High Probability',
      recommendations: [
        'Ultrasound imaging required',
        'D-dimer is NOT sufficient to rule out DVT at this probability',
        'Consider starting anticoagulation while awaiting ultrasound if high suspicion',
        'If initial ultrasound negative but clinical suspicion remains, repeat in 5-7 days',
      ],
      discussWithDoctor: [
        'Immediate ultrasound scheduling',
        'Whether to start anticoagulation before results',
        'Signs of pulmonary embolism to watch for',
        'Treatment plan if DVT confirmed',
      ],
    },
  ],

  education: {
    whatItMeasures: `The Wells criteria estimate how likely you are to have a deep vein thrombosis (DVT) - a blood clot in the deep veins of the leg. It combines your symptoms (swelling, pain, redness) with risk factors (cancer, immobility, prior clots) to determine if you need further testing.`,

    howDeveloped: 'Dr. Philip Wells developed and validated this score through studies of thousands of patients with suspected DVT. It has been extensively tested and is now the standard approach worldwide.',

    whyTheseFactors: `The criteria capture the main elements that increase DVT risk:
- **Cancer**: Creates a hypercoagulable state
- **Immobility**: Blood stasis allows clots to form
- **Recent surgery**: Tissue damage activates clotting
- **Swelling/Tenderness**: Direct signs of the clot itself
- **Prior DVT**: Damaged veins are prone to re-clotting
- **Alternative diagnosis**: If something else explains the symptoms, DVT is less likely (hence subtracts points)`,

    interpretationGuide: `Low probability (≤0 points): About 5% chance of DVT. A negative D-dimer blood test can safely rule out DVT.
Moderate probability (1-2 points): About 17% chance of DVT. D-dimer is helpful, but ultrasound may be needed.
High probability (≥3 points): About 53% chance of DVT. You need an ultrasound regardless of D-dimer results.`,

    questionsForDoctor: [
      'Do I need a D-dimer test, ultrasound, or both?',
      'Should I start blood thinners before my test results?',
      'What are the symptoms of pulmonary embolism I should watch for?',
      'If I have DVT, how long will I need treatment?',
      'What caused my DVT and how can I prevent recurrence?',
    ],

    commonMisconceptions: [
      { misconception: 'Leg pain always means DVT', reality: 'Many conditions cause leg pain and swelling: muscle strain, Baker cyst, cellulitis, and others. DVT is one possibility that needs to be ruled out, but most leg pain is not DVT.' },
      { misconception: 'A negative D-dimer means I definitely do not have DVT', reality: 'D-dimer is most reliable in low-probability patients. In high-probability patients, DVT can still occur with normal D-dimer. That is why imaging is required for high-probability cases.' },
      { misconception: 'Small clots are not dangerous', reality: 'Any DVT can potentially break off and travel to the lungs (pulmonary embolism), which can be life-threatening. Most DVTs need treatment.' },
    ],

    relatedCalculators: ['wells-pe', 'perc-rule'],
  },
};

// ============================================
// Calculator Functions for New Calculators
// ============================================

/**
 * Calculate HAS-BLED score
 */
export function calculateHASBLED(inputs: {
  hypertension: boolean;
  renalDisease: boolean;
  liverDisease: boolean;
  priorStrokeOrBleeding: boolean;
  labilINR: boolean;
  elderly: boolean;
  drugsOrAlcohol: boolean;
}): CalculatorResult {
  let score = 0;

  if (inputs.hypertension) score += 1;
  if (inputs.renalDisease) score += 1;
  if (inputs.liverDisease) score += 1;
  if (inputs.priorStrokeOrBleeding) score += 1;
  if (inputs.labilINR) score += 1;
  if (inputs.elderly) score += 1;
  if (inputs.drugsOrAlcohol) score += 1;

  // Annual major bleeding risk by score (approximate percentages)
  const bleedingRiskByScore: Record<number, number> = {
    0: 1.13, 1: 1.02, 2: 1.88, 3: 3.74, 4: 8.70, 5: 12.5, 6: 12.5, 7: 12.5, 8: 12.5, 9: 12.5,
  };

  const annualRisk = bleedingRiskByScore[Math.min(score, 9)] || 12.5;

  // Determine category
  let riskCategory: string;
  if (score === 0) riskCategory = 'Low Risk';
  else if (score === 1) riskCategory = 'Low-Moderate Risk';
  else if (score === 2) riskCategory = 'Moderate Risk';
  else riskCategory = 'High Risk';

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.hypertension) {
    contributingFactors.push({
      factor: 'Uncontrolled hypertension',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Controlling blood pressure to <140 systolic reduces bleeding risk significantly.',
    });
  }

  if (inputs.priorStrokeOrBleeding) {
    contributingFactors.push({
      factor: 'Prior stroke or bleeding',
      impact: 'major',
      modifiable: false,
      explanation: 'History of bleeding is the strongest predictor of future bleeding. Careful monitoring essential.',
    });
  }

  if (inputs.drugsOrAlcohol) {
    contributingFactors.push({
      factor: 'Drugs or alcohol',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Stopping unnecessary aspirin/NSAIDs and reducing alcohol can lower bleeding risk.',
    });
  }

  if (inputs.labilINR) {
    contributingFactors.push({
      factor: 'Labile INR',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Switching to a DOAC eliminates INR variability and may reduce bleeding.',
    });
  }

  if (inputs.elderly) {
    contributingFactors.push({
      factor: 'Age >65',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Older age increases bleeding risk but also stroke risk. More frequent monitoring recommended.',
    });
  }

  // Risk reduction options
  const riskReduction: RiskReductionOption[] = [];

  if (inputs.hypertension) {
    riskReduction.push({
      intervention: 'Control blood pressure',
      expectedReduction: 'Reduces intracranial bleeding risk significantly',
      evidence: 'Multiple studies show BP control reduces bleeding on anticoagulation',
      practical: 'Target systolic BP <140 mmHg (or <130 if tolerated).',
    });
  }

  if (inputs.drugsOrAlcohol) {
    riskReduction.push({
      intervention: 'Stop unnecessary aspirin/NSAIDs',
      expectedReduction: 'Can reduce major bleeding by 30-50%',
      evidence: 'Combination therapy increases bleeding without improving outcomes in most AFib patients',
      practical: 'Review with your doctor whether aspirin is truly necessary.',
    });
  }

  if (inputs.labilINR) {
    riskReduction.push({
      intervention: 'Switch to DOAC from warfarin',
      expectedReduction: 'DOACs reduce intracranial bleeding by ~50% vs warfarin',
      evidence: 'All major DOAC trials showed lower bleeding, especially intracranial',
      practical: 'Ask your doctor if a DOAC (dabigatran, rivaroxaban, apixaban, edoxaban) is appropriate for you.',
    });
  }

  return {
    calculatorId: 'has-bled',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'points',
    riskCategory,
    interpretation: `Your HAS-BLED score is ${score}. Your estimated annual risk of major bleeding on anticoagulation is approximately ${annualRisk.toFixed(1)}%.`,
    patientExplanation: `This score helps identify bleeding risk factors. A score of ${score} puts you in the "${riskCategory}" category. ${score >= 3 ? 'While this indicates higher bleeding risk, it does NOT mean you should avoid blood thinners. Instead, work with your doctor to address modifiable risk factors and monitor carefully.' : 'Your bleeding risk is manageable with appropriate monitoring.'}`,
    recommendations: HAS_BLED_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    disclaimer: 'This calculator estimates bleeding risk to guide management decisions. It should NOT be used alone to decide against anticoagulation. The stroke risk from untreated AFib is usually more dangerous than the bleeding risk from treatment.',
  };
}

/**
 * Calculate Wells DVT score
 */
export function calculateWellsDVT(inputs: {
  activeCancer: boolean;
  paralysisOrImmobilization: boolean;
  bedriddenOrSurgery: boolean;
  localTenderness: boolean;
  entireLegSwelling: boolean;
  calfSwelling: boolean;
  pittingEdema: boolean;
  collateralVeins: boolean;
  previousDVT: boolean;
  alternativeDiagnosis: boolean;
}): CalculatorResult {
  let score = 0;

  if (inputs.activeCancer) score += 1;
  if (inputs.paralysisOrImmobilization) score += 1;
  if (inputs.bedriddenOrSurgery) score += 1;
  if (inputs.localTenderness) score += 1;
  if (inputs.entireLegSwelling) score += 1;
  if (inputs.calfSwelling) score += 1;
  if (inputs.pittingEdema) score += 1;
  if (inputs.collateralVeins) score += 1;
  if (inputs.previousDVT) score += 1;
  if (inputs.alternativeDiagnosis) score -= 2;

  // DVT prevalence by probability category
  let dvtPrevalence: number;
  let riskCategory: string;

  if (score <= 0) {
    riskCategory = 'Low Probability';
    dvtPrevalence = 5;
  } else if (score <= 2) {
    riskCategory = 'Moderate Probability';
    dvtPrevalence = 17;
  } else {
    riskCategory = 'High Probability';
    dvtPrevalence = 53;
  }

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.activeCancer) {
    contributingFactors.push({
      factor: 'Active cancer',
      impact: 'major',
      modifiable: false,
      explanation: 'Cancer creates a hypercoagulable state with 4-6x increased DVT risk.',
    });
  }

  if (inputs.previousDVT) {
    contributingFactors.push({
      factor: 'Previous DVT',
      impact: 'major',
      modifiable: false,
      explanation: 'Prior DVT significantly increases risk of recurrence.',
    });
  }

  if (inputs.bedriddenOrSurgery) {
    contributingFactors.push({
      factor: 'Recent surgery or immobilization',
      impact: 'major',
      modifiable: false,
      explanation: 'Surgery and immobility are major risk factors for clot formation.',
    });
  }

  const physicalFindings = [inputs.localTenderness, inputs.entireLegSwelling, inputs.calfSwelling, inputs.pittingEdema, inputs.collateralVeins].filter(Boolean).length;
  if (physicalFindings >= 2) {
    contributingFactors.push({
      factor: 'Multiple physical findings',
      impact: 'major',
      modifiable: false,
      explanation: 'Multiple signs (swelling, tenderness, edema) increase the likelihood of DVT.',
    });
  }

  if (inputs.alternativeDiagnosis) {
    contributingFactors.push({
      factor: 'Alternative diagnosis possible',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Other conditions (cellulitis, muscle strain, Baker cyst) may explain the symptoms.',
    });
  }

  // Risk reduction options
  const riskReduction: RiskReductionOption[] = [];

  riskReduction.push({
    intervention: 'Early mobilization',
    expectedReduction: 'Reduces DVT risk during recovery',
    evidence: 'Immobility is a major risk factor; movement promotes venous return',
    practical: 'Walk regularly, flex ankles when sitting, avoid prolonged immobility.',
  });

  if (inputs.activeCancer) {
    riskReduction.push({
      intervention: 'Prophylactic anticoagulation in high-risk situations',
      expectedReduction: 'Significantly reduces DVT risk during hospitalization',
      evidence: 'Guidelines recommend VTE prophylaxis for hospitalized cancer patients',
      practical: 'Discuss with your oncologist about DVT prevention strategies.',
    });
  }

  return {
    calculatorId: 'wells-dvt',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'points',
    riskCategory,
    interpretation: `Wells DVT score of ${score} indicates ${riskCategory}. Approximately ${dvtPrevalence}% of patients with this score have DVT.`,
    patientExplanation: `Based on your symptoms and risk factors, the chance of DVT is ${riskCategory.toLowerCase()}. ${score <= 0 ? 'A D-dimer blood test can help rule out DVT if negative. If positive, ultrasound imaging is needed.' : score <= 2 ? 'D-dimer testing may help, but ultrasound is often needed to confirm or exclude DVT.' : 'Ultrasound imaging is required to evaluate for DVT. D-dimer is not sufficient to rule out DVT at this probability level.'}`,
    recommendations: WELLS_DVT_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    disclaimer: 'This is a clinical decision support tool, not a diagnosis. The Wells criteria help determine appropriate testing but do not replace clinical judgment. If you are experiencing symptoms of DVT (leg pain, swelling, redness), seek medical evaluation promptly.',
  };
}

// ============================================
// PERC Rule for Pulmonary Embolism
// ============================================

const PERC_RULE_CALCULATOR: RiskCalculator = {
  id: 'perc-rule',
  name: 'PERC Rule',
  fullName: 'Pulmonary Embolism Rule-out Criteria',
  category: 'pulmonary',

  purpose: 'Determines if pulmonary embolism can be ruled out without further testing in low-risk patients',

  targetPopulation: 'Adults with suspected pulmonary embolism who have LOW pre-test probability (gestalt or Wells PE score <2)',

  clinicalUse: 'Used to identify patients who do not need D-dimer testing or imaging to rule out PE. If ALL criteria are negative AND pre-test probability is low, PE can be ruled out clinically.',

  limitations: [
    'ONLY for use in patients with LOW pre-test probability',
    'Must NOT be used in moderate or high pre-test probability patients',
    'Not validated in pregnant patients',
    'Clinical judgment always supersedes the rule',
    'Requires honest assessment of clinical gestalt first',
    'Does not diagnose PE - only helps rule it out',
  ],

  evidenceBase: {
    originalStudy: 'Kline JA et al. Clinical criteria to prevent unnecessary diagnostic testing in emergency department patients with suspected pulmonary embolism. J Thromb Haemost. 2004;2(8):1247-1255.',
    validationStudies: [
      'PROPER trial (Kline et al., 2008)',
      'Meta-analysis by Singh et al., 2012',
      'Multiple ED validation studies',
    ],
    guidelineReferences: [
      'ACEP Clinical Policy: Pulmonary Embolism (2018)',
      'American College of Chest Physicians Guidelines',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2018',
    notes: 'The PERC rule has been validated to have <2% miss rate when applied correctly to LOW pre-test probability patients. It reduces unnecessary testing and radiation exposure.',
  },

  inputs: [
    {
      id: 'age',
      name: 'Age ≥50 years',
      type: 'boolean',
      description: 'Is the patient 50 years old or older?',
      required: true,
      riskContribution: 'Age ≥50 increases PE risk due to increased VTE incidence with age.',
    },
    {
      id: 'heartRate',
      name: 'Heart rate ≥100 bpm',
      type: 'boolean',
      description: 'Is the heart rate 100 beats per minute or faster?',
      required: true,
      riskContribution: 'Tachycardia is a common finding in PE due to hypoxia and right heart strain.',
    },
    {
      id: 'oxygenSaturation',
      name: 'O₂ saturation <95% on room air',
      type: 'boolean',
      description: 'Is oxygen saturation less than 95% on room air?',
      required: true,
      riskContribution: 'Hypoxia results from V/Q mismatch in PE.',
    },
    {
      id: 'priorDvtPe',
      name: 'Prior DVT or PE',
      type: 'boolean',
      description: 'Has the patient had a previous DVT or PE?',
      required: true,
      riskContribution: 'History of VTE significantly increases risk of recurrence.',
    },
    {
      id: 'recentSurgeryTrauma',
      name: 'Recent surgery or trauma',
      type: 'boolean',
      description: 'Surgery or trauma requiring hospitalization in the past 4 weeks?',
      required: true,
      riskContribution: 'Surgery and trauma cause hypercoagulability and immobility - major VTE risk factors.',
    },
    {
      id: 'hemoptysis',
      name: 'Hemoptysis',
      type: 'boolean',
      description: 'Is the patient coughing up blood?',
      required: true,
      riskContribution: 'Hemoptysis can occur in PE from pulmonary infarction.',
    },
    {
      id: 'exogenousEstrogen',
      name: 'Exogenous estrogen use',
      type: 'boolean',
      description: 'Taking oral contraceptives, hormone replacement therapy, or other estrogen?',
      required: true,
      riskContribution: 'Estrogen is a hypercoagulable state that increases VTE risk.',
    },
    {
      id: 'unilateralLegSwelling',
      name: 'Unilateral leg swelling',
      type: 'boolean',
      description: 'Clinical signs suggesting DVT (unilateral leg swelling)?',
      required: true,
      riskContribution: 'Unilateral leg swelling suggests DVT, which is the source of most PEs.',
    },
  ],

  calculationMethod: 'Binary decision rule. If ANY criterion is positive, PERC is positive (cannot rule out PE). If ALL criteria are negative AND pre-test probability is low, PE can be safely ruled out without D-dimer or CT.',

  outputRange: {
    type: 'score',
    min: 0,
    max: 8,
    unit: 'criteria present',
    description: 'Number of PERC criteria present (0 = PERC negative, ≥1 = PERC positive)',
  },

  interpretation: {
    categories: [
      {
        name: 'PERC Negative',
        range: { min: 0, max: 0 },
        interpretation: 'All criteria are NEGATIVE. In a LOW pre-test probability patient, PE can be ruled out without further testing. Miss rate <2%.',
        color: '#22c55e',
      },
      {
        name: 'PERC Positive',
        range: { min: 1, max: 8 },
        interpretation: 'At least one criterion is POSITIVE. Cannot rule out PE with PERC alone. Proceed with D-dimer testing or imaging based on clinical assessment.',
        color: '#ef4444',
      },
    ],
    contextualFactors: [
      'PERC should only be applied when pre-test probability is LOW',
      'Clinical gestalt or Wells PE score should determine pre-test probability first',
      'Even PERC-negative patients should be given return precautions',
    ],
    importantCaveats: [
      'PERC is a RULE-OUT tool, not a diagnostic test',
      'Never use PERC in moderate or high pre-test probability patients',
      'Clinical judgment supersedes any decision rule',
      'A PERC-negative result does not guarantee the patient is PE-free',
      'If concerned despite negative PERC, proceed with testing',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 0 },
      category: 'PERC Negative',
      recommendations: [
        'If pre-test probability is LOW, PE can be ruled out',
        'No D-dimer testing needed',
        'No CT pulmonary angiography needed',
        'Consider alternative diagnoses for symptoms',
        'Provide return precautions to patient',
      ],
      discussWithDoctor: [
        'What is causing my symptoms if not PE?',
        'What symptoms should prompt me to return?',
        'Are there other conditions I should be evaluated for?',
      ],
    },
    {
      scoreRange: { min: 1, max: 8 },
      category: 'PERC Positive',
      recommendations: [
        'Cannot rule out PE with clinical criteria alone',
        'Proceed with D-dimer testing',
        'If D-dimer elevated, CT pulmonary angiography indicated',
        'Continue evaluation for PE',
      ],
      discussWithDoctor: [
        'What additional tests are needed?',
        'What are the next steps if tests are positive?',
        'What treatment would be needed if PE is diagnosed?',
      ],
    },
  ],

  education: {
    whatItMeasures: 'The PERC Rule determines whether pulmonary embolism can be safely ruled out without any testing in low-risk patients. It identifies patients so unlikely to have PE that the risks of further testing (radiation, contrast, false positives) outweigh the small chance of missing PE.',

    howDeveloped: 'Developed by studying thousands of ED patients with suspected PE. Researchers identified 8 criteria that, when all absent in low-risk patients, made PE extremely unlikely (<2% miss rate). The rule has been validated in multiple large studies.',

    whyTheseFactors: `Each criterion reflects known PE risk factors or findings:
- **Age ≥50**: VTE risk increases with age
- **Heart rate ≥100**: Tachycardia common in PE
- **O₂ sat <95%**: Hypoxia from V/Q mismatch
- **Prior DVT/PE**: History strongly predicts recurrence
- **Recent surgery/trauma**: Major VTE risk factors
- **Hemoptysis**: Can occur with pulmonary infarction
- **Estrogen use**: Hypercoagulable state
- **Leg swelling**: Suggests DVT as source`,

    interpretationGuide: `The key to PERC is understanding when to use it:
1. First, determine pre-test probability (clinical gestalt or Wells PE score)
2. ONLY if pre-test probability is LOW, apply PERC
3. If ALL 8 criteria are absent → PE ruled out, no further testing
4. If ANY criterion present → Proceed with D-dimer
5. Never skip testing in moderate/high probability patients regardless of PERC`,

    questionsForDoctor: [
      'What made you consider PE in my case?',
      'What is my pre-test probability?',
      'If PERC is positive, what happens next?',
      'What are the risks of CT scanning for PE?',
      'What symptoms should bring me back to the hospital?',
    ],

    commonMisconceptions: [
      {
        misconception: 'PERC can be used in any patient with possible PE',
        reality: 'PERC should ONLY be applied when pre-test probability is already LOW. Using it in moderate/high probability patients can miss dangerous PEs.',
      },
      {
        misconception: 'PERC-negative means definitely no PE',
        reality: 'PERC-negative in a low-risk patient means <2% chance of PE - extremely low but not zero. Clinical judgment always applies.',
      },
      {
        misconception: 'I should apply PERC to myself to decide if I need to see a doctor',
        reality: 'PERC requires clinical assessment of pre-test probability by a physician. If you\'re worried about PE, seek medical evaluation.',
      },
    ],

    relatedCalculators: ['wells-pe', 'wells-dvt', 'years-algorithm'],
  },
};

/**
 * Calculate PERC Rule for Pulmonary Embolism
 */
export function calculatePERC(inputs: {
  age50OrOlder: boolean;
  heartRate100OrMore: boolean;
  oxygenSaturationLessThan95: boolean;
  priorDvtPe: boolean;
  recentSurgeryTrauma: boolean;
  hemoptysis: boolean;
  exogenousEstrogen: boolean;
  unilateralLegSwelling: boolean;
}): CalculatorResult {
  // Count positive criteria
  const criteria = [
    inputs.age50OrOlder,
    inputs.heartRate100OrMore,
    inputs.oxygenSaturationLessThan95,
    inputs.priorDvtPe,
    inputs.recentSurgeryTrauma,
    inputs.hemoptysis,
    inputs.exogenousEstrogen,
    inputs.unilateralLegSwelling,
  ];

  const score = criteria.filter(Boolean).length;
  const percNegative = score === 0;

  // Build contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.age50OrOlder) {
    contributingFactors.push({
      factor: 'Age ≥50 years',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Age increases VTE risk due to increased incidence with advancing age.',
    });
  }

  if (inputs.heartRate100OrMore) {
    contributingFactors.push({
      factor: 'Heart rate ≥100 bpm',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Tachycardia is a common physiological response to PE-induced hypoxia.',
    });
  }

  if (inputs.oxygenSaturationLessThan95) {
    contributingFactors.push({
      factor: 'O₂ saturation <95%',
      impact: 'major',
      modifiable: false,
      explanation: 'Hypoxia results from V/Q mismatch caused by pulmonary embolism.',
    });
  }

  if (inputs.priorDvtPe) {
    contributingFactors.push({
      factor: 'Prior DVT or PE',
      impact: 'major',
      modifiable: false,
      explanation: 'History of VTE significantly increases risk of recurrent events.',
    });
  }

  if (inputs.recentSurgeryTrauma) {
    contributingFactors.push({
      factor: 'Recent surgery or trauma',
      impact: 'major',
      modifiable: false,
      explanation: 'Surgery and trauma create hypercoagulability and immobility - major VTE risk factors.',
    });
  }

  if (inputs.hemoptysis) {
    contributingFactors.push({
      factor: 'Hemoptysis',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Coughing up blood can occur in PE from pulmonary infarction.',
    });
  }

  if (inputs.exogenousEstrogen) {
    contributingFactors.push({
      factor: 'Exogenous estrogen use',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Estrogen creates a hypercoagulable state that increases VTE risk.',
    });
  }

  if (inputs.unilateralLegSwelling) {
    contributingFactors.push({
      factor: 'Unilateral leg swelling',
      impact: 'major',
      modifiable: false,
      explanation: 'Suggests underlying DVT, which is the source of most pulmonary emboli.',
    });
  }

  // Determine risk category and interpretation
  let riskCategory: string;
  let interpretation: string;
  let patientExplanation: string;

  if (percNegative) {
    riskCategory = 'PERC Negative';
    interpretation = 'All PERC criteria are NEGATIVE. If the patient has LOW pre-test probability for PE, pulmonary embolism can be safely ruled out WITHOUT D-dimer testing or CT imaging. The miss rate is less than 2% when applied correctly. Consider alternative diagnoses and provide return precautions.';
    patientExplanation = 'Based on your symptoms and risk factors, combined with a low clinical suspicion for blood clots, pulmonary embolism is very unlikely. No additional testing is needed for PE. However, please return if symptoms worsen or new symptoms develop.';
  } else {
    riskCategory = 'PERC Positive';
    interpretation = `${score} of 8 PERC criteria are POSITIVE. Cannot rule out PE with clinical criteria alone. The patient needs further evaluation - typically starting with D-dimer testing. If D-dimer is elevated, CT pulmonary angiography is indicated to definitively evaluate for PE.`;
    patientExplanation = `Some of your findings (${score} criteria present) mean that we cannot rule out a blood clot in your lungs without additional testing. The next step is typically a D-dimer blood test. If that is elevated, a CT scan of your chest may be needed to look for blood clots.`;
  }

  // Build risk reduction options (for PERC positive patients)
  const riskReduction: RiskReductionOption[] = [];

  if (!percNegative) {
    riskReduction.push({
      intervention: 'D-dimer testing',
      expectedReduction: 'Negative D-dimer can rule out PE without CT radiation',
      evidence: 'High sensitivity allows safe exclusion of PE when negative in appropriate patients',
      practical: 'Quick blood test with results available within hours. Elevated D-dimer requires imaging.',
    });

    riskReduction.push({
      intervention: 'CT pulmonary angiography',
      expectedReduction: 'Definitive test to diagnose or exclude PE',
      evidence: 'Gold standard imaging with >95% sensitivity and specificity for PE',
      practical: 'Involves radiation and IV contrast. Contraindicated in severe kidney disease or contrast allergy.',
    });
  } else {
    riskReduction.push({
      intervention: 'Return precautions',
      expectedReduction: 'Ensures patient returns if symptoms worsen',
      evidence: 'Standard of care for any patient discharged from ED',
      practical: 'Instruct to return for worsening shortness of breath, chest pain, leg swelling, or hemoptysis.',
    });
  }

  return {
    calculatorId: 'perc-rule',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'criteria present',
    riskCategory,
    interpretation,
    patientExplanation,
    recommendations: PERC_RULE_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    disclaimer: 'IMPORTANT: The PERC Rule should ONLY be applied to patients with LOW pre-test probability for PE. Using it in moderate or high probability patients can lead to missed diagnoses. This is a clinical decision support tool and does not replace physician judgment. If you are experiencing symptoms concerning for pulmonary embolism (shortness of breath, chest pain, leg swelling), seek immediate medical attention.',
  };
}

// ============================================
// Wells PE Calculator
// ============================================

const WELLS_PE_CALCULATOR: RiskCalculator = {
  id: 'wells-pe',
  name: 'Wells PE',
  fullName: 'Wells Criteria for Pulmonary Embolism',
  category: 'pulmonary',

  purpose: 'Estimates the pretest probability of pulmonary embolism (PE) to guide diagnostic workup and determine if further testing is needed',

  targetPopulation: 'Adults with suspected pulmonary embolism based on symptoms (shortness of breath, chest pain, tachycardia, hemoptysis)',

  clinicalUse: 'Combined with D-dimer testing and clinical judgment to determine if CT pulmonary angiography is needed. Low probability + negative D-dimer can safely rule out PE without imaging.',

  limitations: [
    'Requires clinical judgment for "alternative diagnosis" criterion',
    'Less validated in pregnant patients',
    'Not for use in patients already on anticoagulation',
    'Should be applied to symptomatic patients, not for screening',
    'Does not account for some risk factors (hormonal therapy, long flights)',
    'Subsegmental PE may be missed even with negative workup',
  ],

  evidenceBase: {
    originalStudy: 'Wells PS et al. Derivation of a simple clinical model to categorize patients probability of pulmonary embolism. Thromb Haemost 2000.',
    validationStudies: [
      'Christopher Study - validated simplified scoring',
      'PIOPED II study',
      'Multiple meta-analyses confirming safety of D-dimer rule-out',
    ],
    guidelineReferences: [
      'European Society of Cardiology 2019 Guidelines for Pulmonary Embolism',
      'American College of Physicians Clinical Guidelines for PE',
      'ACEP Clinical Policy on PE',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2019',
    notes: 'One of the most validated clinical prediction rules. The simplified version (PE likely/unlikely at ≤4/>4) is widely used.',
  },

  inputs: [
    {
      id: 'clinicalSignsDVT',
      name: 'Clinical Signs of DVT',
      type: 'boolean',
      description: 'Leg swelling and/or pain with palpation of deep veins',
      required: true,
      riskContribution: 'Most PEs originate from DVTs that embolize to the lungs. Clinical DVT signs strongly increase PE probability. Worth 3 points.',
    },
    {
      id: 'alternativeLessLikely',
      name: 'PE is #1 Diagnosis or Equally Likely',
      type: 'boolean',
      description: 'Pulmonary embolism is the most likely diagnosis, or as likely as any alternative',
      required: true,
      riskContribution: 'If PE is thought to be the top diagnosis (no better alternative explanation), probability increases substantially. Worth 3 points.',
      helpText: 'Consider alternatives like pneumonia, heart failure, COPD exacerbation, musculoskeletal pain, anxiety',
    },
    {
      id: 'heartRateOver100',
      name: 'Heart Rate >100 bpm',
      type: 'boolean',
      description: 'Tachycardia (heart rate greater than 100 beats per minute)',
      required: true,
      riskContribution: 'Tachycardia is a compensatory response to hypoxia and increased pulmonary pressures in PE. Worth 1.5 points.',
    },
    {
      id: 'immobilizationOrSurgery',
      name: 'Immobilization or Surgery',
      type: 'boolean',
      description: 'Immobilization for ≥3 days or surgery in the previous 4 weeks requiring general or regional anesthesia',
      required: true,
      riskContribution: 'Immobility and surgery both increase clotting risk through stasis and tissue injury. Worth 1.5 points.',
    },
    {
      id: 'previousDVTPE',
      name: 'Previous DVT or PE',
      type: 'boolean',
      description: 'Prior documented deep vein thrombosis or pulmonary embolism',
      required: true,
      riskContribution: 'Prior venous thromboembolism is a major risk factor for recurrence. Recurrence rates are 10-30% over 10 years. Worth 1.5 points.',
    },
    {
      id: 'hemoptysis',
      name: 'Hemoptysis',
      type: 'boolean',
      description: 'Coughing up blood',
      required: true,
      riskContribution: 'Hemoptysis occurs when pulmonary infarction causes bleeding into the airways. Classic PE symptom but present in only 10-15% of cases. Worth 1 point.',
    },
    {
      id: 'malignancy',
      name: 'Malignancy',
      type: 'boolean',
      description: 'Active cancer (treatment within 6 months, or palliative)',
      required: true,
      riskContribution: 'Cancer creates a hypercoagulable state. Cancer patients have 4-7x increased risk of VTE. Worth 1 point.',
    },
  ],

  calculationMethod: 'Add points for each criterion present: DVT signs (+3), PE most likely diagnosis (+3), HR>100 (+1.5), Immobilization/surgery (+1.5), Prior DVT/PE (+1.5), Hemoptysis (+1), Malignancy (+1). Total determines probability category.',

  outputRange: {
    type: 'score',
    min: 0,
    max: 12.5,
    unit: 'points',
    description: 'Score from 0 to 12.5, categorized into low/moderate/high (traditional) or unlikely/likely (simplified)',
  },

  interpretation: {
    categories: [
      { name: 'Low Probability (PE Unlikely)', range: { min: 0, max: 1.5 }, interpretation: '~1.3% prevalence of PE. Negative D-dimer safely rules out PE.', color: '#22c55e' },
      { name: 'Moderate Probability', range: { min: 2, max: 6 }, interpretation: '~16% prevalence of PE. D-dimer helpful; if elevated, imaging needed.', color: '#eab308' },
      { name: 'High Probability (PE Likely)', range: { min: 6.5, max: 12.5 }, interpretation: '~38% prevalence of PE. CT angiography required; D-dimer NOT sufficient to rule out.', color: '#ef4444' },
    ],
    contextualFactors: [
      'Age-adjusted D-dimer cutoffs may improve specificity in elderly patients',
      'PERC rule can exclude PE without D-dimer in truly low-risk patients',
      'Pregnancy significantly affects interpretation and testing approach',
      'Subsegmental PE detected on modern CT may not all require treatment',
    ],
    importantCaveats: [
      'This estimates probability, not definitive diagnosis',
      'Clinical judgment essential for "alternative diagnosis" criterion',
      'High probability requires imaging regardless of D-dimer',
      'Low probability + negative D-dimer is safe to rule out PE',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 1.5 },
      category: 'Low Probability',
      recommendations: [
        'Consider PERC rule first - if all criteria negative, no further testing needed',
        'If PERC positive, order D-dimer test',
        'Negative D-dimer: PE effectively ruled out',
        'Positive D-dimer: Proceed to CT pulmonary angiography',
      ],
      discussWithDoctor: [
        'Whether any symptoms suggest alternative diagnosis',
        'PERC rule applicability',
        'D-dimer testing',
        'Follow-up if symptoms persist',
      ],
    },
    {
      scoreRange: { min: 2, max: 6 },
      category: 'Moderate Probability',
      recommendations: [
        'Order D-dimer test',
        'Negative D-dimer: PE unlikely (but use clinical judgment)',
        'Positive D-dimer: Proceed to CT pulmonary angiography',
        'Consider age-adjusted D-dimer cutoffs in elderly',
      ],
      discussWithDoctor: [
        'D-dimer testing strategy',
        'When CT angiography is needed',
        'Management while awaiting results',
        'Alternative diagnoses to consider',
      ],
    },
    {
      scoreRange: { min: 6.5, max: 12.5 },
      category: 'High Probability',
      recommendations: [
        'CT pulmonary angiography required',
        'D-dimer is NOT sufficient to rule out PE at this probability',
        'Consider starting anticoagulation while awaiting imaging if high clinical suspicion',
        'If CT negative but clinical suspicion remains very high, consider leg ultrasound or V/Q scan',
      ],
      discussWithDoctor: [
        'Urgent CT angiography',
        'Whether to start anticoagulation before results',
        'Signs of hemodynamic instability requiring escalation',
        'Treatment plan if PE confirmed',
      ],
    },
  ],

  education: {
    whatItMeasures: 'The Wells PE criteria estimate how likely you are to have a pulmonary embolism - a blood clot that has traveled to your lungs. It combines your symptoms with risk factors to determine if you need additional testing like a CT scan.',

    howDeveloped: 'Dr. Philip Wells developed this score through studies of thousands of patients with suspected PE. It has been extensively validated worldwide and is now the standard approach for PE risk stratification.',

    whyTheseFactors: `The criteria capture the main elements that suggest PE:
- **DVT signs**: Most PEs come from leg clots
- **PE most likely diagnosis**: Clinical gestalt is very powerful
- **Tachycardia**: The body compensates for decreased oxygen
- **Immobility/surgery**: Classic risk factors for clotting
- **Prior VTE**: History predicts recurrence
- **Hemoptysis**: Bleeding from pulmonary infarction
- **Cancer**: Creates a hypercoagulable state`,

    interpretationGuide: `**Traditional Scoring:**
- Low (0-1): ~1.3% chance of PE. Negative D-dimer rules it out.
- Moderate (2-6): ~16% chance. D-dimer helpful; positive needs CT.
- High (>6): ~38% chance. CT required regardless of D-dimer.

**Simplified Scoring:**
- PE Unlikely (≤4): Can use D-dimer to rule out
- PE Likely (>4): CT imaging usually required`,

    questionsForDoctor: [
      'Based on my score, do I need a D-dimer, CT scan, or both?',
      'Should I start blood thinners while waiting for test results?',
      'What are the warning signs of worsening PE I should watch for?',
      'If I have a PE, what treatment will I need and for how long?',
      'What caused my PE and how can I prevent it from happening again?',
    ],

    commonMisconceptions: [
      { misconception: 'Shortness of breath always means PE', reality: 'Many conditions cause breathing difficulty: asthma, anxiety, pneumonia, heart failure. PE is one possibility that needs to be ruled out based on risk factors, but most shortness of breath is not PE.' },
      { misconception: 'A normal D-dimer means I definitely do not have PE', reality: 'D-dimer is most reliable in low-probability patients. In high-probability patients, PE can still occur with normal D-dimer. That is why imaging is required for high-probability cases.' },
      { misconception: 'All PEs require hospitalization', reality: 'Low-risk PEs in stable patients can often be treated at home with blood thinners. Risk stratification tools help determine who needs hospital admission.' },
      { misconception: 'PE is always life-threatening', reality: 'PE ranges from small clots with minimal symptoms to massive PE causing cardiac arrest. Most PEs are not life-threatening with prompt treatment, but all require medical evaluation.' },
    ],

    relatedCalculators: ['wells-dvt', 'perc-rule'],
  },
};

/**
 * Calculate Wells PE score
 */
export function calculateWellsPE(inputs: {
  clinicalSignsDVT: boolean;
  alternativeLessLikely: boolean;
  heartRateOver100: boolean;
  immobilizationOrSurgery: boolean;
  previousDVTPE: boolean;
  hemoptysis: boolean;
  malignancy: boolean;
}): CalculatorResult {
  let score = 0;

  if (inputs.clinicalSignsDVT) score += 3;
  if (inputs.alternativeLessLikely) score += 3;
  if (inputs.heartRateOver100) score += 1.5;
  if (inputs.immobilizationOrSurgery) score += 1.5;
  if (inputs.previousDVTPE) score += 1.5;
  if (inputs.hemoptysis) score += 1;
  if (inputs.malignancy) score += 1;

  // Determine risk category (traditional scoring)
  let riskCategory: string;
  let interpretation: string;

  if (score <= 1.5) {
    riskCategory = 'Low Probability';
    interpretation = `Your Wells PE score is ${score}. This is LOW probability (~1.3% chance of PE). If your PERC criteria are all negative, no further testing may be needed. Otherwise, a D-dimer test can help rule out PE if negative.`;
  } else if (score <= 6) {
    riskCategory = 'Moderate Probability';
    interpretation = `Your Wells PE score is ${score}. This is MODERATE probability (~16% chance of PE). A D-dimer blood test is typically ordered. If the D-dimer is negative, PE is unlikely. If elevated, a CT scan is needed.`;
  } else {
    riskCategory = 'High Probability';
    interpretation = `Your Wells PE score is ${score}. This is HIGH probability (~38% chance of PE). A CT pulmonary angiography is required. D-dimer testing alone cannot rule out PE at this probability level.`;
  }

  // Add simplified interpretation
  const simplifiedCategory = score <= 4 ? 'PE Unlikely' : 'PE Likely';
  interpretation += ` Using simplified scoring, this is "${simplifiedCategory}."`;

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.clinicalSignsDVT) {
    contributingFactors.push({
      factor: 'Clinical signs of DVT',
      impact: 'major',
      modifiable: false,
      explanation: 'Leg swelling and pain suggest a clot that may have traveled to your lungs. This is a key finding (+3 points).',
    });
  }

  if (inputs.alternativeLessLikely) {
    contributingFactors.push({
      factor: 'PE most likely diagnosis',
      impact: 'major',
      modifiable: false,
      explanation: 'When PE is the top differential diagnosis, probability increases substantially (+3 points).',
    });
  }

  if (inputs.heartRateOver100) {
    contributingFactors.push({
      factor: 'Tachycardia (HR >100)',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Fast heart rate is a compensatory response to low oxygen levels from PE (+1.5 points).',
    });
  }

  if (inputs.immobilizationOrSurgery) {
    contributingFactors.push({
      factor: 'Recent immobilization or surgery',
      impact: 'moderate',
      modifiable: true,
      explanation: 'Immobility and surgery increase clotting risk. This is preventable in future with prophylaxis (+1.5 points).',
    });
  }

  if (inputs.previousDVTPE) {
    contributingFactors.push({
      factor: 'Previous DVT or PE',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Prior clots significantly increase risk of recurrence. May need long-term anticoagulation (+1.5 points).',
    });
  }

  if (inputs.hemoptysis) {
    contributingFactors.push({
      factor: 'Hemoptysis',
      impact: 'minor',
      modifiable: false,
      explanation: 'Coughing up blood can indicate pulmonary infarction from PE (+1 point).',
    });
  }

  if (inputs.malignancy) {
    contributingFactors.push({
      factor: 'Active malignancy',
      impact: 'minor',
      modifiable: false,
      explanation: 'Cancer creates a hypercoagulable state that increases PE risk (+1 point).',
    });
  }

  // Risk reduction / next steps
  const riskReduction: RiskReductionOption[] = [];

  if (score <= 1.5) {
    riskReduction.push({
      intervention: 'PERC rule assessment',
      expectedReduction: 'If all 8 PERC criteria negative, PE can be ruled out without D-dimer',
      evidence: 'PERC rule has <2% miss rate in low-risk patients',
      practical: 'Quick bedside assessment. If any PERC criteria positive, proceed to D-dimer.',
    });
  }

  if (score <= 6) {
    riskReduction.push({
      intervention: 'D-dimer testing',
      expectedReduction: 'Negative D-dimer effectively rules out PE in low/moderate probability',
      evidence: 'High sensitivity (>95%) allows safe exclusion when negative',
      practical: 'Quick blood test. Age-adjusted cutoff (age × 10 ng/mL for age >50) improves specificity in elderly.',
    });
  }

  riskReduction.push({
    intervention: 'CT pulmonary angiography',
    expectedReduction: 'Definitive imaging to diagnose or exclude PE',
    evidence: 'Sensitivity ~95%, specificity >95% for PE detection',
    practical: 'Requires IV contrast and radiation. Contraindicated in severe renal disease or contrast allergy.',
  });

  if (score > 4) {
    riskReduction.push({
      intervention: 'Empiric anticoagulation',
      expectedReduction: 'Prevents clot propagation while awaiting definitive diagnosis',
      evidence: 'Standard practice in high-probability PE if no contraindications',
      practical: 'Started while awaiting imaging if PE highly suspected. Can be stopped if CT negative.',
    });
  }

  // Patient explanation
  let patientExplanation: string;
  if (score <= 1.5) {
    patientExplanation = `Your score of ${score} means you have a LOW probability of pulmonary embolism. Most patients with this score do not have PE. Your doctor may use additional tools (like the PERC rule) to determine if you need any blood tests, or may order a D-dimer test to help rule out PE.`;
  } else if (score <= 6) {
    patientExplanation = `Your score of ${score} means you have a MODERATE probability of pulmonary embolism. A D-dimer blood test is typically the next step. If this test is negative, PE is very unlikely. If it's elevated, a CT scan of your chest will be needed to look for clots.`;
  } else {
    patientExplanation = `Your score of ${score} means you have a HIGH probability of pulmonary embolism. A CT scan of your chest is needed to look for blood clots. A D-dimer blood test alone is not enough to rule out PE at this probability level. Your doctor may start blood thinners while you wait for the scan.`;
  }

  return {
    calculatorId: 'wells-pe',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'points',
    riskCategory,
    interpretation,
    patientExplanation,
    recommendations: WELLS_PE_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    disclaimer: 'IMPORTANT: This calculator estimates the probability of pulmonary embolism based on clinical features. It is a decision support tool and does not replace clinical judgment. If you are experiencing symptoms that could indicate PE (sudden shortness of breath, chest pain, rapid heart rate, coughing up blood), seek immediate medical attention regardless of your score.',
  };
}

// ============================================
// CURB-65 Calculator for Pneumonia Severity
// ============================================

const CURB65_CALCULATOR: RiskCalculator = {
  id: 'curb-65',
  name: 'CURB-65',
  fullName: 'CURB-65 Severity Score for Community-Acquired Pneumonia',
  category: 'pulmonary',

  purpose: 'Estimates mortality risk in community-acquired pneumonia to guide disposition decisions (outpatient vs. hospital vs. ICU)',

  targetPopulation: 'Adults with community-acquired pneumonia (CAP)',

  clinicalUse: 'Helps determine whether a patient with pneumonia can be safely treated at home, needs hospital admission, or requires ICU care. Based on five simple clinical features.',

  limitations: [
    'Does not account for social factors (ability to take oral medications, home support)',
    'May underestimate severity in young patients with severe disease',
    'Does not capture all markers of severe pneumonia (hypoxia, multilobar involvement)',
    'Should be used alongside clinical judgment, not in isolation',
    'Elderly may have high scores from age alone',
    'Does not predict specific pathogens or guide antibiotic choice',
  ],

  evidenceBase: {
    originalStudy: 'Lim WS et al. Defining community acquired pneumonia severity on presentation to hospital. Thorax 2003.',
    validationStudies: [
      'British Thoracic Society studies',
      'International validations across multiple countries',
      'Comparison studies with PSI (Pneumonia Severity Index)',
    ],
    guidelineReferences: [
      'British Thoracic Society Guidelines for CAP',
      'NICE Pneumonia Guidelines',
      'IDSA/ATS Guidelines for CAP',
    ],
    evidenceLevel: 'high',
    lastUpdated: '2019',
    notes: 'Simpler than PSI with comparable predictive accuracy. Widely used in emergency departments and primary care.',
  },

  inputs: [
    {
      id: 'confusion',
      name: 'Confusion',
      type: 'boolean',
      description: 'New mental confusion (AMT ≤8 or new disorientation to person, place, or time)',
      required: true,
      riskContribution: 'Confusion indicates severe systemic illness or hypoxia affecting the brain. Strong predictor of poor outcomes.',
      helpText: 'AMT = Abbreviated Mental Test. Or simply: new disorientation',
    },
    {
      id: 'ureaOver7',
      name: 'BUN >19 mg/dL (Urea >7 mmol/L)',
      type: 'boolean',
      description: 'Blood urea nitrogen greater than 19 mg/dL (or urea >7 mmol/L)',
      required: true,
      riskContribution: 'Elevated urea indicates dehydration, renal impairment, or severe catabolic state. Marker of systemic severity.',
    },
    {
      id: 'respiratoryRateOver30',
      name: 'Respiratory Rate ≥30/min',
      type: 'boolean',
      description: 'Respiratory rate of 30 breaths per minute or greater',
      required: true,
      riskContribution: 'Tachypnea indicates significant respiratory distress. The body is compensating for impaired gas exchange.',
    },
    {
      id: 'lowBloodPressure',
      name: 'Low Blood Pressure',
      type: 'boolean',
      description: 'Systolic BP <90 mmHg OR Diastolic BP ≤60 mmHg',
      required: true,
      riskContribution: 'Hypotension suggests sepsis physiology with vasodilation and possible early shock.',
    },
    {
      id: 'age65OrOlder',
      name: 'Age ≥65 years',
      type: 'boolean',
      description: 'Patient is 65 years of age or older',
      required: true,
      riskContribution: 'Older age is associated with decreased immune function, comorbidities, and reduced physiologic reserve.',
    },
  ],

  calculationMethod: 'Add 1 point for each criterion present: Confusion (+1), Urea/BUN elevated (+1), Respiratory rate ≥30 (+1), Blood pressure low (+1), Age ≥65 (+1). Total score ranges from 0-5.',

  outputRange: {
    type: 'score',
    min: 0,
    max: 5,
    unit: 'points',
    description: 'Score from 0-5, each point representing one of the CURB-65 criteria',
  },

  interpretation: {
    categories: [
      { name: 'Low Risk', range: { min: 0, max: 1 }, interpretation: '~1.5% mortality. Likely suitable for outpatient treatment.', color: '#22c55e' },
      { name: 'Intermediate Risk', range: { min: 2, max: 2 }, interpretation: '~9% mortality. Consider hospital admission or close outpatient follow-up.', color: '#eab308' },
      { name: 'High Risk', range: { min: 3, max: 5 }, interpretation: '~22% mortality (score 3), higher for 4-5. Hospital admission required; consider ICU.', color: '#ef4444' },
    ],
    contextualFactors: [
      'Social circumstances (living situation, ability to take oral medications) matter',
      'Oxygen saturation should be considered alongside CURB-65',
      'Chest X-ray findings (multilobar) suggest worse prognosis',
      'Comorbidities may warrant admission even with low score',
    ],
    importantCaveats: [
      'CURB-65 is a guide, not a mandate for disposition',
      'Low scores with concerning features (hypoxia, large effusion) may still need admission',
      'Consider CRB-65 (without urea) for primary care without labs',
      'Clinical judgment remains paramount',
    ],
  },

  recommendations: [
    {
      scoreRange: { min: 0, max: 1 },
      category: 'Low Risk',
      recommendations: [
        'Likely suitable for outpatient treatment',
        'Consider home antibiotics if able to take oral medications',
        'Ensure adequate hydration and rest',
        'Schedule follow-up within 48-72 hours',
        'Provide clear return precautions',
      ],
      discussWithDoctor: [
        'Whether home treatment is safe given your situation',
        'Which antibiotic is appropriate',
        'Warning signs to watch for',
        'When to return or seek emergency care',
      ],
    },
    {
      scoreRange: { min: 2, max: 2 },
      category: 'Intermediate Risk',
      recommendations: [
        'Consider short hospital admission',
        'Alternative: close outpatient follow-up if strong social support',
        'Hospital observation may be appropriate',
        'Oxygen assessment important',
        'Consider underlying conditions',
      ],
      discussWithDoctor: [
        'Whether hospital or home is safer for you',
        'Your social support at home',
        'Other medical conditions that might affect decision',
        'Ability to take oral medications reliably',
      ],
    },
    {
      scoreRange: { min: 3, max: 5 },
      category: 'High Risk',
      recommendations: [
        'Hospital admission required',
        'For scores 4-5: Consider ICU admission or high-dependency unit',
        'IV antibiotics typically needed',
        'Close monitoring for deterioration',
        'May need oxygen support or respiratory intervention',
      ],
      discussWithDoctor: [
        'Level of care needed (ward vs. ICU)',
        'What to expect during hospitalization',
        'Potential complications to watch for',
        'Goals of care and advance directives if appropriate',
      ],
    },
  ],

  education: {
    whatItMeasures: 'CURB-65 measures the severity of pneumonia using five simple criteria. It predicts your risk of dying from pneumonia and helps doctors decide if you need to be in the hospital or can be safely treated at home.',

    howDeveloped: 'Developed by British researchers analyzing thousands of pneumonia patients. Each letter represents a risk factor: Confusion, Urea, Respiratory rate, Blood pressure, and age 65+.',

    whyTheseFactors: `Each criterion captures a different aspect of pneumonia severity:
- **Confusion**: Shows the infection is affecting your brain (from low oxygen or sepsis)
- **Urea/BUN**: Elevated levels suggest kidney stress and dehydration
- **Respiratory rate**: Fast breathing means your lungs are struggling
- **Blood pressure**: Low BP suggests your body is overwhelmed by infection
- **Age**: Older patients have less reserve to fight severe infections`,

    interpretationGuide: `**Score 0-1 (Low Risk)**: About 1.5% mortality. Usually safe to treat at home with oral antibiotics if you can take medications and have support.

**Score 2 (Intermediate)**: About 9% mortality. May need hospital admission, especially if living alone or having other concerns.

**Score 3+ (High Risk)**: 15-40% mortality. Hospital admission needed. Score 4-5 may need intensive care.`,

    questionsForDoctor: [
      'Based on my score, can I be treated at home or do I need to be admitted?',
      'What are the warning signs that I should return immediately?',
      'How long should I expect to feel sick?',
      'When should I start feeling better with treatment?',
      'What complications should I watch for?',
    ],

    commonMisconceptions: [
      { misconception: 'A low score means I definitely do not have serious pneumonia', reality: 'CURB-65 predicts mortality risk, but does not capture everything. You can have a low score and still need admission for oxygen, inability to take oral medications, or concerning X-ray findings.' },
      { misconception: 'I need IV antibiotics to get better', reality: 'Many patients with low CURB-65 scores do very well with oral antibiotics. IV antibiotics are not automatically "stronger" - they are needed when oral absorption is unreliable or for very sick patients.' },
      { misconception: 'Young people cannot have severe pneumonia', reality: 'While age adds a point to the score, young people can still have severe pneumonia with the other criteria. A 30-year-old with confusion, tachypnea, and hypotension needs urgent care.' },
    ],

    relatedCalculators: ['wells-pe', 'perc-rule'],
  },
};

/**
 * Calculate CURB-65 score
 */
export function calculateCURB65(inputs: {
  confusion: boolean;
  ureaOver7: boolean;
  respiratoryRateOver30: boolean;
  lowBloodPressure: boolean;
  age65OrOlder: boolean;
}): CalculatorResult {
  let score = 0;

  if (inputs.confusion) score += 1;
  if (inputs.ureaOver7) score += 1;
  if (inputs.respiratoryRateOver30) score += 1;
  if (inputs.lowBloodPressure) score += 1;
  if (inputs.age65OrOlder) score += 1;

  // Mortality estimates by score
  const mortalityByScore: Record<number, number> = {
    0: 0.6, 1: 2.7, 2: 6.8, 3: 14.0, 4: 27.8, 5: 57.0,
  };

  const mortality = mortalityByScore[score] || 57.0;

  // Determine risk category
  let riskCategory: string;
  let interpretation: string;
  let disposition: string;

  if (score <= 1) {
    riskCategory = 'Low Risk';
    interpretation = `Your CURB-65 score is ${score}. This is LOW risk with approximately ${mortality.toFixed(1)}% mortality. Most patients with this score can be treated safely as outpatients.`;
    disposition = 'Outpatient treatment likely appropriate';
  } else if (score === 2) {
    riskCategory = 'Intermediate Risk';
    interpretation = `Your CURB-65 score is ${score}. This is INTERMEDIATE risk with approximately ${mortality.toFixed(1)}% mortality. Hospital admission should be considered, or very close outpatient follow-up if strong social support.`;
    disposition = 'Consider hospital admission';
  } else {
    riskCategory = 'High Risk';
    interpretation = `Your CURB-65 score is ${score}. This is HIGH risk with approximately ${mortality.toFixed(1)}% mortality. Hospital admission is required. ${score >= 4 ? 'ICU admission should be considered.' : ''}`;
    disposition = score >= 4 ? 'Hospital/ICU admission required' : 'Hospital admission required';
  }

  // Contributing factors
  const contributingFactors: ContributingFactor[] = [];

  if (inputs.confusion) {
    contributingFactors.push({
      factor: 'Confusion',
      impact: 'major',
      modifiable: false,
      explanation: 'New confusion indicates the infection is affecting your brain - a sign of severe illness (+1 point).',
    });
  }

  if (inputs.ureaOver7) {
    contributingFactors.push({
      factor: 'Elevated BUN/Urea',
      impact: 'moderate',
      modifiable: true,
      explanation: 'High urea suggests dehydration or kidney stress. IV fluids may help (+1 point).',
    });
  }

  if (inputs.respiratoryRateOver30) {
    contributingFactors.push({
      factor: 'Respiratory rate ≥30/min',
      impact: 'major',
      modifiable: false,
      explanation: 'Fast breathing shows significant respiratory distress (+1 point).',
    });
  }

  if (inputs.lowBloodPressure) {
    contributingFactors.push({
      factor: 'Low blood pressure',
      impact: 'major',
      modifiable: true,
      explanation: 'Hypotension suggests sepsis. IV fluids and possibly vasopressors may be needed (+1 point).',
    });
  }

  if (inputs.age65OrOlder) {
    contributingFactors.push({
      factor: 'Age ≥65 years',
      impact: 'moderate',
      modifiable: false,
      explanation: 'Older age is associated with decreased reserve and higher mortality (+1 point).',
    });
  }

  // Risk reduction / treatment
  const riskReduction: RiskReductionOption[] = [];

  riskReduction.push({
    intervention: 'Appropriate antibiotics',
    expectedReduction: 'Timely appropriate antibiotics reduce mortality significantly',
    evidence: 'Guidelines recommend antibiotics within 4-8 hours of presentation',
    practical: 'Oral antibiotics for low-risk, IV antibiotics for high-risk patients.',
  });

  if (inputs.ureaOver7 || inputs.lowBloodPressure) {
    riskReduction.push({
      intervention: 'IV fluid resuscitation',
      expectedReduction: 'Corrects dehydration and supports blood pressure',
      evidence: 'Early fluid resuscitation is key component of sepsis management',
      practical: 'Crystalloid fluids given based on clinical response.',
    });
  }

  if (score >= 2) {
    riskReduction.push({
      intervention: 'Oxygen therapy',
      expectedReduction: 'Maintains adequate oxygenation',
      evidence: 'Hypoxia (SpO2 <94%) indicates need for supplemental oxygen',
      practical: 'Target SpO2 94-98% (88-92% if COPD).',
    });
  }

  if (score >= 3) {
    riskReduction.push({
      intervention: 'ICU evaluation',
      expectedReduction: 'Early ICU input improves outcomes in severe CAP',
      evidence: 'Patients with high CURB-65 benefit from early critical care involvement',
      practical: 'Assessment for respiratory support, vasopressors if needed.',
    });
  }

  // Patient explanation
  let patientExplanation: string;
  if (score <= 1) {
    patientExplanation = `Your score of ${score} indicates LOW risk pneumonia. Most people with this score do well with treatment at home. You'll take antibiotic pills for 5-7 days, rest, and drink plenty of fluids. You should start feeling better within 48-72 hours. If you get worse or develop new symptoms, seek care immediately.`;
  } else if (score === 2) {
    patientExplanation = `Your score of ${score} indicates INTERMEDIATE risk pneumonia. Your doctor will consider whether you need to be admitted to the hospital or can go home with very close follow-up. This decision depends on factors like your living situation, other medical conditions, and how you look overall.`;
  } else {
    patientExplanation = `Your score of ${score} indicates HIGH risk pneumonia requiring hospital admission. You will receive IV antibiotics and be closely monitored. ${score >= 4 ? 'The medical team may recommend intensive care monitoring.' : ''} This does not mean the outlook is hopeless - it means you need the level of care a hospital provides.`;
  }

  return {
    calculatorId: 'curb-65',
    timestamp: new Date().toISOString(),
    inputs,
    score,
    scoreUnit: 'points',
    riskCategory,
    interpretation: `${interpretation} Suggested disposition: ${disposition}. Estimated 30-day mortality: ${mortality.toFixed(1)}%.`,
    patientExplanation,
    recommendations: CURB65_CALCULATOR.recommendations.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max)?.recommendations || [],
    contributingFactors,
    riskReduction,
    disclaimer: 'IMPORTANT: CURB-65 is a guide for disposition decisions in community-acquired pneumonia. It should be used alongside clinical judgment and other factors (oxygen saturation, X-ray findings, social situation, comorbidities). A low score does not guarantee safety for home treatment if other concerning features are present.',
  };
}

// ============================================
// Export Database
// ============================================

export const RISK_CALCULATORS: Record<string, RiskCalculator> = {
  'ascvd-10-year': ASCVD_CALCULATOR,
  'cha2ds2-vasc': CHA2DS2_VASC_CALCULATOR,
  'has-bled': HAS_BLED_CALCULATOR,
  'wells-dvt': WELLS_DVT_CALCULATOR,
  'perc-rule': PERC_RULE_CALCULATOR,
  'wells-pe': WELLS_PE_CALCULATOR,
  'curb-65': CURB65_CALCULATOR,
};

// ============================================
// Helper Functions
// ============================================

export function getRiskCalculator(id: string): RiskCalculator | undefined {
  return RISK_CALCULATORS[id];
}

export function getAllRiskCalculators(): RiskCalculator[] {
  return Object.values(RISK_CALCULATORS);
}

export function getCalculatorsByCategory(category: string): RiskCalculator[] {
  return Object.values(RISK_CALCULATORS).filter(c => c.category === category);
}
