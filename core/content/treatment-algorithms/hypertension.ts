/**
 * Hypertension Treatment Algorithm
 *
 * Based on JNC 8 Guidelines and ACC/AHA 2017 Hypertension Guidelines
 * Helps patients understand:
 * - Blood pressure goals and why they matter
 * - First-line medication choices
 * - Step-up approaches when initial therapy is insufficient
 * - Lifestyle modifications that support medication therapy
 */

import { TreatmentAlgorithm } from './types';

export const hypertensionAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-hypertension-jnc',
  condition: 'Hypertension (High Blood Pressure)',
  alternateNames: ['High Blood Pressure', 'HTN', 'Essential Hypertension'],
  icdCodes: ['I10', 'I11', 'I12', 'I13'],
  guidelineSource: 'ACC/AHA Hypertension Guidelines',
  guidelineYear: 2017,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'High blood pressure means your blood is pushing too hard against your blood vessel walls. Medicine helps relax your blood vessels and make your heart\'s job easier.',
      whyThisApproach: 'Doctors start with one medicine and may add more if needed. This is safer than starting with many medicines at once.',
      whatToExpect: 'You\'ll take a pill every day. Your doctor will check your blood pressure regularly. It may take a few weeks to find the right medicine for you.',
      keyPoints: [
        'Take your medicine every day, even when you feel fine',
        'Blood pressure medicine prevents heart attacks and strokes',
        'Eating less salt and exercising helps your medicine work better',
        'You might need to try different medicines to find what works best',
        'Most people need medicine for the rest of their lives'
      ],
      patientQuestions: [
        'Why do I need medicine if I feel fine?',
        'Can I stop taking medicine once my blood pressure is normal?',
        'What happens if I miss a dose?'
      ]
    },
    2: {
      level: 2,
      overview: 'Hypertension treatment aims to lower blood pressure to below 130/80 mmHg for most people. Treatment starts with lifestyle changes and usually one medication, adding more if needed.',
      whyThisApproach: 'High blood pressure damages blood vessels over time, leading to heart disease, stroke, and kidney damage. Lowering blood pressure reduces these risks significantly.',
      whatToExpect: 'Initial treatment typically involves one medication. Blood pressure is rechecked in 2-4 weeks. If not at goal, the dose may be increased or another medication added.',
      keyPoints: [
        'Target blood pressure is less than 130/80 mmHg for most adults',
        'Four main types of first-line medications: ACE inhibitors, ARBs, calcium channel blockers, and thiazide diuretics',
        'Lifestyle modifications can lower blood pressure by 5-15 points',
        'African American patients often respond better to calcium channel blockers or diuretics',
        'Monitoring for side effects is important, especially with new medications'
      ],
      patientQuestions: [
        'Which medication is best for me?',
        'How long until my blood pressure improves?',
        'What side effects should I watch for?'
      ]
    },
    3: {
      level: 3,
      overview: 'Hypertension management follows a stepped-care approach, initiating therapy based on cardiovascular risk and BP level. Stage 1 HTN (130-139/80-89) with low ASCVD risk may start with lifestyle modification alone.',
      whyThisApproach: 'The ACC/AHA guidelines emphasize individualized treatment based on cardiovascular risk assessment. Combination therapy is often needed to achieve targets, with complementary mechanisms providing additive effects.',
      whatToExpect: 'After diagnosis, 10-year ASCVD risk is calculated. For risk >10% or stage 2 HTN, pharmacotherapy is initiated alongside lifestyle modifications. Follow-up occurs at 1 month with dose titration until goal achieved.',
      keyPoints: [
        'BP classification: Normal (<120/80), Elevated (120-129/<80), Stage 1 (130-139/80-89), Stage 2 (>=140/>=90)',
        'First-line agents: Thiazide diuretics, ACE-I, ARB, or CCB based on comorbidities',
        'Combination therapy recommended for stage 2 HTN or BP >20/10 above goal',
        'Secondary hypertension screening if resistant HTN, young onset, or clinical clues',
        'Home BP monitoring improves control and identifies white coat/masked HTN'
      ],
      detailedSteps: [
        {
          id: 'htn-step-1',
          order: 1,
          name: 'Lifestyle Modification',
          description: 'Foundation for all hypertension treatment',
          nonPharmacologic: [
            'DASH diet (rich in fruits, vegetables, low-fat dairy)',
            'Sodium restriction <2300mg/day (ideally <1500mg)',
            'Regular aerobic exercise (90-150 min/week)',
            'Weight loss if BMI >25',
            'Limit alcohol (<=2 drinks/day men, <=1 women)',
            'Smoking cessation'
          ],
          targets: [
            { parameter: 'Systolic BP', goal: 'Reduction of 5-15 mmHg possible', rationale: 'Each lifestyle modification contributes additively' }
          ],
          timeframe: 'Ongoing; may be sole therapy for 3-6 months in low-risk stage 1 HTN'
        },
        {
          id: 'htn-step-2',
          order: 2,
          name: 'Initial Pharmacotherapy',
          description: 'Single agent from first-line class',
          medications: [
            {
              name: 'Lisinopril',
              genericName: 'Lisinopril',
              class: 'ACE Inhibitor',
              dosing: '10mg daily, max 40mg',
              commonSideEffects: ['Dry cough (10-15%)', 'Dizziness', 'Hyperkalemia'],
              seriousWarnings: ['Angioedema', 'Acute kidney injury', 'Teratogenic'],
              contraindications: ['Pregnancy', 'History of angioedema', 'Bilateral renal artery stenosis'],
              considerations: 'Preferred in diabetes, CKD, heart failure'
            },
            {
              name: 'Amlodipine',
              genericName: 'Amlodipine',
              class: 'Calcium Channel Blocker (DHP)',
              dosing: '5mg daily, max 10mg',
              commonSideEffects: ['Peripheral edema', 'Headache', 'Flushing'],
              seriousWarnings: ['Worsening heart failure (use with caution in HFrEF)'],
              considerations: 'Particularly effective in African Americans, elderly'
            },
            {
              name: 'Chlorthalidone',
              genericName: 'Chlorthalidone',
              class: 'Thiazide-like Diuretic',
              dosing: '12.5-25mg daily',
              commonSideEffects: ['Hypokalemia', 'Hyperuricemia', 'Hyponatremia'],
              seriousWarnings: ['Electrolyte disturbances', 'Photosensitivity'],
              considerations: 'Preferred over HCTZ (longer acting, more outcome data)'
            },
            {
              name: 'Losartan',
              genericName: 'Losartan',
              class: 'Angiotensin Receptor Blocker',
              dosing: '50mg daily, max 100mg',
              commonSideEffects: ['Dizziness', 'Hyperkalemia'],
              seriousWarnings: ['Teratogenic', 'Acute kidney injury'],
              contraindications: ['Pregnancy', 'Bilateral renal artery stenosis'],
              considerations: 'Alternative if ACE-I cough; additional uricosuric effect'
            }
          ],
          timeframe: '1 month trial before escalation'
        },
        {
          id: 'htn-step-3',
          order: 3,
          name: 'Add Second Agent or Increase Dose',
          description: 'Combination therapy with complementary mechanisms',
          medications: [
            {
              name: 'ACE-I or ARB + CCB',
              class: 'Combination',
              considerations: 'Synergistic effect; CCB reduces ACE-I edema'
            },
            {
              name: 'ACE-I or ARB + Thiazide',
              class: 'Combination',
              considerations: 'Diuretic enhances RAAS blocker efficacy'
            },
            {
              name: 'CCB + Thiazide',
              class: 'Combination',
              considerations: 'Use when RAAS blockers contraindicated'
            }
          ],
          targets: [
            { parameter: 'Blood Pressure', goal: '<130/80 mmHg', rationale: 'Reduces cardiovascular events by 25-30%' }
          ],
          timeframe: '1 month before adding third agent'
        },
        {
          id: 'htn-step-4',
          order: 4,
          name: 'Triple Therapy',
          description: 'Three-drug regimen for resistant hypertension',
          medications: [
            {
              name: 'RAAS blocker + CCB + Diuretic',
              class: 'Triple Combination',
              considerations: 'Optimal combination addressing multiple mechanisms'
            }
          ],
          monitoringRequired: [
            { test: 'Basic metabolic panel', frequency: '1-2 weeks after initiation', purpose: 'Monitor potassium and kidney function' },
            { test: 'Home BP monitoring', frequency: 'Daily initially', purpose: 'Assess response and detect white coat effect' }
          ],
          timeframe: 'Evaluate for secondary causes if not controlled'
        },
        {
          id: 'htn-step-5',
          order: 5,
          name: 'Resistant Hypertension Management',
          description: 'Fourth agent and secondary workup',
          medications: [
            {
              name: 'Spironolactone',
              genericName: 'Spironolactone',
              class: 'Mineralocorticoid Receptor Antagonist',
              dosing: '25-50mg daily',
              commonSideEffects: ['Hyperkalemia', 'Gynecomastia', 'Breast tenderness'],
              contraindications: ['eGFR <30', 'K+ >5.0'],
              considerations: 'Most effective add-on for resistant HTN'
            }
          ],
          patientEducation: 'Resistant hypertension requires evaluation for secondary causes including sleep apnea, primary aldosteronism, and renovascular disease'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Hypertension management integrates risk stratification (ASCVD risk calculator), individualized BP targets, and evidence-based pharmacotherapy. The 2017 ACC/AHA guidelines lowered thresholds recognizing continuous cardiovascular risk.',
      whyThisApproach: 'Meta-analyses demonstrate that lower BP targets reduce cardiovascular events, particularly in high-risk populations. SPRINT trial showed intensive control (SBP <120) reduced mortality in non-diabetic high-risk patients.',
      whatToExpect: 'Treatment intensity is guided by ASCVD risk. High-risk patients benefit from aggressive targets and earlier combination therapy. Regular monitoring prevents target organ damage.',
      keyPoints: [
        'SPRINT: Intensive control (SBP <120) reduced CV events 25% and mortality 27% vs standard (SBP <140)',
        'ACCORD: Intensive BP control in diabetics did not reduce composite CV outcomes but reduced stroke',
        'Primary aldosteronism present in 10-15% of resistant HTN; screen with aldosterone:renin ratio',
        'White coat HTN: Office BP elevated but ambulatory/home BP normal; lower CV risk than sustained HTN',
        'Masked HTN: Normal office BP but elevated ambulatory; similar CV risk to sustained HTN',
        'Drug-induced HTN: NSAIDs, decongestants, stimulants, oral contraceptives, corticosteroids'
      ],
      detailedSteps: [
        {
          id: 'htn-advanced-1',
          order: 1,
          name: 'Risk Stratification',
          description: 'Calculate 10-year ASCVD risk to guide treatment intensity',
          targets: [
            { parameter: 'ASCVD Risk <10%', goal: 'Consider lifestyle for Stage 1 HTN', rationale: 'Lower absolute benefit from pharmacotherapy' },
            { parameter: 'ASCVD Risk >=10%', goal: 'Initiate pharmacotherapy for Stage 1', rationale: 'Higher absolute risk reduction justifies medications' },
            { parameter: 'Stage 2 HTN', goal: 'Pharmacotherapy regardless of risk', rationale: 'BP >=140/90 has sufficient risk independent of calculator' }
          ]
        },
        {
          id: 'htn-advanced-2',
          order: 2,
          name: 'Comorbidity-Directed Therapy',
          description: 'Select agents addressing multiple conditions',
          medications: [
            {
              name: 'ACE-I or ARB',
              class: 'RAAS Blockade',
              considerations: 'Compelling: Diabetes with albuminuria, CKD, HFrEF, post-MI. Reduce proteinuria and slow CKD progression'
            },
            {
              name: 'Beta-Blocker',
              class: 'Beta-adrenergic Blocker',
              considerations: 'Compelling: CAD, HFrEF, atrial fibrillation. Not first-line for uncomplicated HTN'
            },
            {
              name: 'CCB (non-DHP)',
              class: 'Calcium Channel Blocker',
              considerations: 'Diltiazem/Verapamil for rate control in AF. Avoid in HFrEF'
            },
            {
              name: 'Loop Diuretic',
              class: 'Diuretic',
              considerations: 'Preferred over thiazide when eGFR <30 or volume overload'
            }
          ]
        },
        {
          id: 'htn-advanced-3',
          order: 3,
          name: 'Resistant Hypertension Workup',
          description: 'Systematic evaluation when uncontrolled on 3+ optimal doses including diuretic',
          nonPharmacologic: [
            'Confirm true resistance: Exclude white coat effect, non-adherence, suboptimal dosing',
            'Review interfering substances: NSAIDs, decongestants, stimulants, alcohol',
            'Assess lifestyle adherence: Sodium intake, weight, alcohol, sleep apnea'
          ],
          monitoringRequired: [
            { test: 'Aldosterone:Renin ratio', frequency: 'Once (off interfering meds)', purpose: 'Screen for primary aldosteronism' },
            { test: 'Renal artery Doppler/CTA', frequency: 'If clinical suspicion', purpose: 'Evaluate renovascular hypertension' },
            { test: 'Sleep study', frequency: 'If symptoms present', purpose: 'Obstructive sleep apnea is common cause' },
            { test: '24-hour urine catecholamines', frequency: 'If paroxysmal HTN or symptoms', purpose: 'Screen for pheochromocytoma' }
          ]
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Hypertension guidelines have evolved based on landmark trials (SPRINT, ACCORD-BP, HOPE-3) demonstrating CV benefit at lower targets. Personalized medicine considers pharmacogenomics, ambulatory monitoring, and novel therapies for resistant disease.',
      whyThisApproach: 'The ACC/AHA 2017 guidelines lowered BP categories based on meta-analyses showing graded CV risk starting at 115/75. Absolute risk reduction guides treatment intensity, balancing benefits against adverse effects in different populations.',
      whatToExpect: 'Complex patients require multidisciplinary management. Renal denervation and baroreceptor activation therapy are emerging options for resistant HTN. Hypertension specialists manage refractory cases.',
      keyPoints: [
        'SPRINT methodology: Unattended automated office BP (lower than standard office readings by 5-10 mmHg)',
        'J-curve controversy: Very low DBP (<60-70) may increase CV events in patients with CAD',
        'Pharmacogenomics: CYP2D6 affects metoprolol metabolism; ADRB1 polymorphisms affect beta-blocker response',
        'Renal denervation: SPYRAL HTN-ON MED showed BP reduction in drug-resistant HTN',
        'Baroreflex activation therapy: Approved for resistant HTN uncontrolled on medications',
        'SGLT2 inhibitors: Emerging role in hypertension management (3-5 mmHg reduction)',
        'Ambulatory BP monitoring: Gold standard for diagnosis, prognostically superior to office BP'
      ],
      detailedSteps: [
        {
          id: 'htn-specialist-1',
          order: 1,
          name: 'Advanced Secondary HTN Evaluation',
          description: 'Comprehensive workup for resistant or suspicious presentations',
          nonPharmacologic: [
            'Endocrine evaluation: Cortisol, thyroid function, calcium, PTH',
            'Renal imaging: Ultrasound for kidney size asymmetry, CTA/MRA for renal artery stenosis',
            'Adrenal imaging: CT if biochemical evidence of aldosteronism or pheochromocytoma',
            'Adrenal vein sampling: Lateralize aldosterone production before surgical treatment'
          ],
          targets: [
            { parameter: 'Primary Aldosteronism', goal: 'ARR >30, aldosterone >15', rationale: 'High sensitivity screening; confirmatory testing required' },
            { parameter: 'Pheochromocytoma', goal: '24h urine catecholamines/metanephrines', rationale: 'High sensitivity/specificity; plasma metanephrines also acceptable' }
          ]
        },
        {
          id: 'htn-specialist-2',
          order: 2,
          name: 'Device-Based Therapies',
          description: 'Interventional options for medication-refractory hypertension',
          medications: [
            {
              name: 'Renal Denervation',
              class: 'Catheter-based Procedure',
              considerations: 'Radiofrequency or ultrasound ablation of renal sympathetic nerves. SYMPLICITY HTN-3 initially negative, but subsequent sham-controlled trials (SPYRAL HTN-ON/OFF MED, RADIANCE-HTN SOLO) positive'
            },
            {
              name: 'Baroreflex Activation Therapy',
              class: 'Implantable Device',
              considerations: 'CVRx Barostim; stimulates carotid baroreceptors. Approved for resistant HTN with EF >40%'
            }
          ],
          patientEducation: 'Device therapies are reserved for patients with true resistant HTN despite optimal medical management, after thorough exclusion of secondary causes and pseudo-resistance'
        },
        {
          id: 'htn-specialist-3',
          order: 3,
          name: 'Special Clinical Scenarios',
          description: 'Management nuances in complex situations',
          targets: [
            { parameter: 'Hypertensive Emergency', goal: 'Reduce MAP by 20-25% in first hour', rationale: 'Rapid reduction risks end-organ hypoperfusion' },
            { parameter: 'Aortic Dissection', goal: 'HR <60 and SBP 100-120 within 20 min', rationale: 'Beta-blocker first (reduce dP/dt), then vasodilator' },
            { parameter: 'Pregnancy (Preeclampsia)', goal: 'SBP <160, DBP <110', rationale: 'Balance maternal safety with fetal perfusion' },
            { parameter: 'Acute Stroke', goal: 'Permissive HTN unless thrombolytics', rationale: 'Maintain cerebral perfusion to penumbra' }
          ],
          monitoringRequired: [
            { test: 'Continuous arterial BP monitoring', frequency: 'ICU setting', purpose: 'Titrate IV antihypertensives safely' },
            { test: 'Target organ assessment', frequency: 'Per clinical presentation', purpose: 'Troponin, creatinine, urinalysis, fundoscopy, neuroimaging' }
          ]
        }
      ]
    }
  },

  steps: [
    {
      id: 'htn-foundation',
      order: 1,
      name: 'Lifestyle Modifications',
      description: 'Foundation of all hypertension treatment',
      nonPharmacologic: [
        'DASH diet',
        'Sodium restriction <2300mg/day',
        'Regular aerobic exercise',
        'Weight management',
        'Alcohol moderation',
        'Smoking cessation'
      ],
      targets: [
        { parameter: 'Blood Pressure', goal: 'Can reduce 5-15 mmHg', rationale: 'Modifications are additive' }
      ],
      timeframe: 'Lifelong; may be sole therapy 3-6 months if low-risk Stage 1'
    },
    {
      id: 'htn-mono',
      order: 2,
      name: 'Monotherapy',
      description: 'Single first-line agent based on comorbidities',
      medications: [
        { name: 'ACE inhibitor', class: 'RAAS Blocker', considerations: 'Diabetes, CKD, HF' },
        { name: 'ARB', class: 'RAAS Blocker', considerations: 'ACE-I cough' },
        { name: 'CCB', class: 'Calcium Channel Blocker', considerations: 'African American, elderly' },
        { name: 'Thiazide diuretic', class: 'Diuretic', considerations: 'General population, heart failure' }
      ],
      timeframe: '1 month before escalation'
    },
    {
      id: 'htn-dual',
      order: 3,
      name: 'Dual Therapy',
      description: 'Two-drug combination with complementary mechanisms',
      medications: [
        { name: 'ACE-I/ARB + CCB', class: 'Combination', considerations: 'Synergistic, well-tolerated' },
        { name: 'ACE-I/ARB + Diuretic', class: 'Combination', considerations: 'Effective, metabolic considerations' }
      ],
      timeframe: '1 month before adding third agent'
    },
    {
      id: 'htn-triple',
      order: 4,
      name: 'Triple Therapy',
      description: 'RAAS blocker + CCB + Diuretic',
      medications: [
        { name: 'ACE-I or ARB + Amlodipine + Chlorthalidone', class: 'Triple', considerations: 'Optimal combination' }
      ],
      timeframe: 'Define resistant HTN if uncontrolled'
    },
    {
      id: 'htn-resistant',
      order: 5,
      name: 'Resistant Hypertension',
      description: 'Fourth-line agent and secondary evaluation',
      medications: [
        { name: 'Spironolactone', class: 'MRA', considerations: 'Most effective add-on per PATHWAY-2' },
        { name: 'Eplerenone', class: 'MRA', considerations: 'If spironolactone side effects' },
        { name: 'Beta-blocker', class: 'Beta-blocker', considerations: 'If compelling indication' },
        { name: 'Alpha-blocker', class: 'Alpha-blocker', considerations: 'Concurrent BPH' }
      ],
      timeframe: 'Hypertension specialist referral'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'BP remains above goal after 1 month of optimized therapy',
        'Cardiovascular event or target organ damage progression',
        'Increased ASCVD risk',
        'New compelling indication (diabetes, CKD, HF)'
      ],
      timeline: 'Evaluate response at 1 month intervals',
      considerations: [
        'Verify medication adherence before escalating',
        'Assess for interfering substances (NSAIDs, decongestants)',
        'Consider white coat effect - use home or ambulatory monitoring'
      ]
    },
    stepDown: {
      triggers: [
        'Sustained BP control for 1+ year',
        'Significant lifestyle improvements (weight loss, dietary changes)',
        'Symptomatic hypotension or orthostasis',
        'Adverse effects impacting quality of life'
      ],
      timeline: 'Gradual dose reduction over weeks to months',
      considerations: [
        'Monitor closely after each reduction',
        'Maintain lifestyle modifications',
        'Seasonal variation (may need less in summer)',
        'Rarely can discontinue entirely - most require lifelong therapy'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'African Americans',
      modifications: [
        'CCB or thiazide diuretic often more effective as initial therapy',
        'ACE-I/ARB still indicated if compelling indication (DM, CKD, HF)',
        'Higher risk of angioedema with ACE-I'
      ]
    },
    {
      population: 'Elderly (>65 years)',
      modifications: [
        'Consider orthostatic hypotension risk',
        'Start at lower doses',
        'Avoid alpha-blockers as monotherapy (falls risk)',
        'Target may be relaxed in frail patients'
      ]
    },
    {
      population: 'Diabetes',
      modifications: [
        'ACE-I or ARB preferred (renal protection)',
        'Target <130/80 mmHg',
        'Monitor potassium and creatinine with RAAS blockers',
        'SGLT2 inhibitors provide additional BP lowering'
      ]
    },
    {
      population: 'Chronic Kidney Disease',
      modifications: [
        'ACE-I or ARB preferred (slow progression)',
        'Expect 20-30% creatinine rise (acceptable)',
        'Switch to loop diuretic if eGFR <30',
        'Monitor potassium closely'
      ]
    },
    {
      population: 'Pregnancy',
      modifications: [
        'ACE-I and ARB contraindicated (teratogenic)',
        'Safe options: Labetalol, nifedipine, methyldopa',
        'Target <140/90 (or <135/85 if chronic HTN)',
        'Urgent delivery consideration if preeclampsia with severe features'
      ],
      contraindications: ['ACE inhibitors', 'ARBs', 'Direct renin inhibitors']
    }
  ],

  emergencyIndications: [
    'Hypertensive emergency (BP >180/120 with acute target organ damage)',
    'Aortic dissection',
    'Acute pulmonary edema',
    'Acute coronary syndrome',
    'Eclampsia or severe preeclampsia',
    'Hypertensive encephalopathy',
    'Acute renal failure with malignant hypertension'
  ],

  referralCriteria: [
    'Resistant hypertension (uncontrolled on 3 agents including diuretic)',
    'Suspected secondary hypertension',
    'Hypertensive emergency or urgency',
    'Significant target organ damage',
    'Young patient (<30) with stage 2 hypertension',
    'Hypertension in pregnancy'
  ],

  citations: [
    {
      id: 'acc-aha-htn-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'Carey RM', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2017.11.006'
    },
    {
      id: 'sprint-trial',
      type: 'article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control (SPRINT)',
      authors: ['SPRINT Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1511939'
    },
    {
      id: 'pathway-2',
      type: 'article',
      title: 'Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2)',
      authors: ['Williams B', 'MacDonald TM', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(15)00257-3'
    }
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['treatment', 'pharmacology', 'guidelines'],
    clinicalRelevance: 'critical',
    keywords: ['hypertension', 'blood pressure', 'antihypertensives', 'JNC', 'ACC/AHA']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default hypertensionAlgorithm;
