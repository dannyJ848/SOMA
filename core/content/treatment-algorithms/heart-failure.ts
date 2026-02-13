/**
 * Heart Failure Treatment Algorithm
 *
 * Based on ACC/AHA/HFSA 2022 Guideline for Heart Failure Management
 * Covers HFrEF, HFmrEF, and HFpEF treatment approaches with
 * guideline-directed medical therapy (GDMT) optimization
 */

import { TreatmentAlgorithm } from './types';

export const heartFailureAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-heart-failure-accaha',
  condition: 'Heart Failure',
  alternateNames: ['HF', 'CHF', 'Congestive Heart Failure', 'Cardiac Failure'],
  icdCodes: ['I50.9', 'I50.1', 'I50.20', 'I50.30', 'I50.40'],
  guidelineSource: 'ACC/AHA/HFSA Guideline for Heart Failure Management',
  guidelineYear: 2022,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'Heart failure means your heart cannot pump blood as well as it should. Medicine helps your heart work better and removes extra fluid from your body so you can breathe easier.',
      whyThisApproach: 'Doctors use several medicines together because each one helps your heart in a different way. Together, they help you feel better and live longer.',
      whatToExpect: 'You will take several pills each day. Your doctor will slowly increase the doses over weeks to months. You will weigh yourself daily to watch for fluid buildup.',
      keyPoints: [
        'Take all your heart medicines every day as prescribed',
        'Weigh yourself every morning and tell your doctor if you gain 3+ pounds in a day or 5+ in a week',
        'Limit salt (sodium) to help prevent fluid buildup',
        'Call your doctor if you have trouble breathing, swollen legs, or feel more tired than usual',
        'Do not stop your medicines without talking to your doctor'
      ],
      patientQuestions: [
        'Why do I need so many medicines?',
        'What should I do if my legs swell?',
        'Can my heart get better?'
      ]
    },
    2: {
      level: 2,
      overview: 'Heart failure treatment focuses on four types of medicines that work together: ACE inhibitors or ARNIs to relax blood vessels, beta-blockers to slow and strengthen the heart, diuretics to remove excess fluid, and MRAs to block harmful hormones.',
      whyThisApproach: 'In heart failure, the body activates stress hormones that initially help but eventually weaken the heart more. These medicines block those harmful pathways and have been proven to help people live longer.',
      whatToExpect: 'Treatment starts with low doses and gradually increases to target doses over weeks to months. The four main medicines (called "quadruple therapy") should all be started within the first few weeks if tolerated.',
      keyPoints: [
        'Quadruple therapy: ARNI (or ACE-I) + beta-blocker + MRA + SGLT2i',
        'Diuretics control symptoms (fluid) but do not improve survival',
        'Target doses from clinical trials are the goal, not just any dose',
        'Ejection fraction (EF) measures how well your heart pumps (normal >50%)',
        'HFrEF (reduced EF <40%) has the most treatment options'
      ],
      patientQuestions: [
        'What is ejection fraction and what is mine?',
        'Will these medicines cure my heart failure?',
        'Why does my doctor keep increasing my doses?'
      ]
    },
    3: {
      level: 3,
      overview: 'Heart failure is classified by ejection fraction: HFrEF (EF <=40%), HFmrEF (41-49%), and HFpEF (>=50%). Guideline-directed medical therapy (GDMT) for HFrEF includes four pillars: ARNI/ACE-I, beta-blocker, MRA, and SGLT2 inhibitor. Each class reduces mortality 15-30%.',
      whyThisApproach: 'Neurohormonal activation (RAAS, sympathetic nervous system) drives cardiac remodeling and progression. GDMT modifies these pathways at multiple points, with synergistic mortality reduction of 50-60% with comprehensive therapy.',
      whatToExpect: 'Initiate quadruple therapy within first 30 days if hemodynamically stable. Uptitrate to target doses every 1-2 weeks. Monitor renal function, potassium, and blood pressure. Device therapy (ICD, CRT) considered after optimization.',
      keyPoints: [
        'HFrEF GDMT: ARNI (or ACE-I/ARB) + BB + MRA + SGLT2i (Class I, LOE A)',
        'ARNI (sacubitril/valsartan): Superior to ACE-I; 20% additional RRR in mortality',
        'SGLT2i: Dapagliflozin and empagliflozin reduce HF hospitalization and CV death regardless of diabetes status',
        'Beta-blockers: Carvedilol, metoprolol succinate, bisoprolol have outcome data',
        'Diuretics: Symptom control only; lowest effective dose to maintain euvolemia'
      ],
      detailedSteps: [
        {
          id: 'hf-step-1',
          order: 1,
          name: 'Initial GDMT Initiation',
          description: 'Start all four pillars simultaneously or in rapid sequence',
          medications: [
            {
              name: 'Sacubitril/Valsartan',
              genericName: 'Sacubitril/Valsartan',
              class: 'ARNI',
              dosing: '24/26mg BID if new to ACE-I or low BP, then 49/51mg BID, target 97/103mg BID',
              commonSideEffects: ['Hypotension', 'Dizziness', 'Hyperkalemia', 'Cough (less than ACE-I)'],
              seriousWarnings: ['Angioedema', 'Acute kidney injury'],
              contraindications: ['ACE-I within 36 hours', 'History of angioedema', 'Pregnancy'],
              considerations: 'PARADIGM-HF: 20% RRR CV death vs enalapril; switch from ACE-I after 36h washout',
              costCategory: 'high'
            },
            {
              name: 'Carvedilol',
              genericName: 'Carvedilol',
              class: 'Beta-Blocker',
              dosing: '3.125mg BID, double every 2 weeks to target 25mg BID (50mg BID if >85kg)',
              commonSideEffects: ['Fatigue', 'Dizziness', 'Bradycardia', 'Hypotension'],
              seriousWarnings: ['Worsening HF during initiation', 'Bronchospasm'],
              contraindications: ['Decompensated HF', 'Severe bradycardia', 'Advanced AV block'],
              considerations: 'COPERNICUS: 35% RRR mortality in severe HFrEF; alpha-blockade helps with BP',
              costCategory: 'low'
            },
            {
              name: 'Spironolactone',
              genericName: 'Spironolactone',
              class: 'Mineralocorticoid Receptor Antagonist',
              dosing: '12.5-25mg daily, target 25-50mg daily',
              commonSideEffects: ['Hyperkalemia', 'Gynecomastia', 'Breast tenderness'],
              seriousWarnings: ['Life-threatening hyperkalemia'],
              contraindications: ['K+ >5.0', 'eGFR <30'],
              considerations: 'RALES: 30% RRR mortality in EF <35% and NYHA III-IV',
              costCategory: 'low'
            },
            {
              name: 'Dapagliflozin',
              genericName: 'Dapagliflozin',
              class: 'SGLT2 Inhibitor',
              dosing: '10mg daily',
              commonSideEffects: ['Genital mycotic infections', 'UTI', 'Volume depletion'],
              seriousWarnings: ['Euglycemic DKA', 'Fournier gangrene'],
              considerations: 'DAPA-HF: 26% RRR HF hospitalization/CV death regardless of diabetes',
              costCategory: 'high'
            }
          ],
          monitoringRequired: [
            { test: 'Renal function and potassium', frequency: '1-2 weeks after initiation/dose changes', purpose: 'Monitor for hyperkalemia and AKI' },
            { test: 'Blood pressure', frequency: 'Each visit', purpose: 'Avoid symptomatic hypotension' },
            { test: 'Heart rate', frequency: 'Each visit', purpose: 'Target resting HR 50-70' }
          ],
          timeframe: 'Initiate within first 30 days; uptitrate every 1-2 weeks'
        },
        {
          id: 'hf-step-2',
          order: 2,
          name: 'Uptitration to Target Doses',
          description: 'Double doses every 1-2 weeks until target reached or side effects limit',
          targets: [
            { parameter: 'ARNI', goal: 'Sacubitril/valsartan 97/103mg BID', rationale: 'PARADIGM-HF target dose' },
            { parameter: 'Beta-blocker', goal: 'Carvedilol 25mg BID or metoprolol succinate 200mg daily', rationale: 'Trial target doses' },
            { parameter: 'MRA', goal: 'Spironolactone 25-50mg daily', rationale: 'RALES target dose' },
            { parameter: 'SGLT2i', goal: 'Dapagliflozin 10mg or empagliflozin 10mg daily', rationale: 'No uptitration needed' }
          ],
          patientEducation: 'Target doses, not just any dose, provide the survival benefits seen in clinical trials'
        },
        {
          id: 'hf-step-3',
          order: 3,
          name: 'Additional Therapies',
          description: 'Add-on agents for persistent symptoms or specific indications',
          medications: [
            {
              name: 'Hydralazine/Isosorbide Dinitrate',
              class: 'Vasodilator Combination',
              dosing: 'Fixed-dose: Start 37.5/20mg TID, target 75/40mg TID',
              considerations: 'A-HeFT: Mortality benefit in self-identified Black patients on ACE-I/BB'
            },
            {
              name: 'Ivabradine',
              class: 'If Node Inhibitor',
              dosing: '5mg BID, may increase to 7.5mg BID',
              considerations: 'SHIFT: Reduces HF hospitalization if sinus rhythm, HR >70, on max BB'
            },
            {
              name: 'Digoxin',
              class: 'Cardiac Glycoside',
              dosing: '0.125mg daily (lower in elderly/renal impairment)',
              considerations: 'DIG trial: Reduces hospitalization, no mortality benefit; maintain level 0.5-0.9'
            },
            {
              name: 'Vericiguat',
              class: 'Soluble Guanylate Cyclase Stimulator',
              dosing: '2.5mg daily, increase every 2 weeks to 10mg',
              considerations: 'VICTORIA: Reduces HF hospitalization in recently hospitalized/high NT-proBNP'
            }
          ]
        },
        {
          id: 'hf-step-4',
          order: 4,
          name: 'Device Therapy',
          description: 'ICD for sudden death prevention; CRT for dyssynchrony',
          nonPharmacologic: [
            'ICD: Primary prevention if EF <=35%, NYHA II-III, on optimal GDMT for 90 days',
            'CRT-D: If EF <=35%, LBBB, QRS >=150ms, NYHA II-IV',
            'CRT may be considered for LBBB with QRS 120-149ms or non-LBBB with QRS >=150ms'
          ],
          targets: [
            { parameter: 'Wait period', goal: '90 days of optimal GDMT before ICD', rationale: 'EF may improve; reassess before implant' },
            { parameter: 'Ischemic evaluation', goal: 'Complete before device', rationale: 'Revascularization may improve EF' }
          ],
          patientEducation: 'ICDs prevent sudden cardiac death from arrhythmias but do not improve heart function. CRT can help the heart pump more efficiently.'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Contemporary HFrEF management emphasizes rapid sequencing of quadruple GDMT, disease-modifying therapies for HFmrEF/HFpEF, and advanced therapies for refractory disease. Biomarker-guided strategies (NT-proBNP, hs-cTn) optimize patient selection.',
      whyThisApproach: 'The STRONG-HF trial demonstrated safety and efficacy of rapid uptitration (achieving target doses in 2 weeks). HFmrEF and HFpEF benefit from SGLT2i (DELIVER, EMPEROR-Preserved). Advanced HF pathways prevent unnecessary delay to transplant/LVAD.',
      whatToExpect: 'Outpatient optimization prioritizes achieving target doses. Hemodynamic-guided strategies (CardioMEMS) reduce hospitalizations. Advanced HF centers evaluate for transplant or mechanical circulatory support.',
      keyPoints: [
        'STRONG-HF: Rapid GDMT uptitration safe and improves outcomes vs usual care',
        'HFmrEF: SGLT2i, ARNI, MRA may benefit; extrapolated from HFrEF/HFpEF data',
        'HFpEF: SGLT2i (Class I); diuretics for congestion; treat comorbidities (AF, HTN, CAD)',
        'CardioMEMS: Hemodynamic monitoring reduces HF hospitalizations in NYHA III',
        'Advanced HF referral triggers: Persistent NYHA IV, recurrent hospitalizations, inotrope dependence'
      ],
      detailedSteps: [
        {
          id: 'hf-advanced-1',
          order: 1,
          name: 'Rapid Sequencing Strategy',
          description: 'STRONG-HF protocol for rapid GDMT optimization',
          targets: [
            { parameter: 'Day 0-14', goal: 'Initiate all four pillars at low doses', rationale: 'Simultaneous initiation safe per STRONG-HF' },
            { parameter: 'Week 2', goal: 'First uptitration of all agents', rationale: 'Double doses if tolerated' },
            { parameter: 'Week 4-6', goal: 'Target doses achieved', rationale: 'Faster optimization = better outcomes' }
          ],
          monitoringRequired: [
            { test: 'BP, HR, renal function, K+', frequency: 'Weekly during uptitration', purpose: 'Safety monitoring' },
            { test: 'NT-proBNP', frequency: 'Baseline, 6-12 months', purpose: 'Track neurohormonal activation' }
          ]
        },
        {
          id: 'hf-advanced-2',
          order: 2,
          name: 'HFpEF and HFmrEF Management',
          description: 'Emerging evidence-based therapies for preserved/mildly reduced EF',
          medications: [
            {
              name: 'Empagliflozin (HFpEF)',
              class: 'SGLT2 Inhibitor',
              dosing: '10mg daily',
              considerations: 'EMPEROR-Preserved: 21% RRR CV death/HF hospitalization in HFpEF (EF >40%)'
            },
            {
              name: 'Dapagliflozin (HFpEF)',
              class: 'SGLT2 Inhibitor',
              dosing: '10mg daily',
              considerations: 'DELIVER: 18% RRR CV death/worsening HF; included HFmrEF and improved EF'
            }
          ],
          nonPharmacologic: [
            'Aggressive diuresis for congestion (primary symptom driver in HFpEF)',
            'Blood pressure control (<130/80 for most)',
            'Rate or rhythm control for atrial fibrillation',
            'Treatment of coronary artery disease',
            'Weight loss if obese (STEP-HFpEF data for semaglutide)'
          ]
        },
        {
          id: 'hf-advanced-3',
          order: 3,
          name: 'Advanced Heart Failure Pathway',
          description: 'Identification and management of stage D heart failure',
          nonPharmacologic: [
            'INTERMACS profile assessment for mechanical support candidacy',
            'Cardiopulmonary exercise testing (peak VO2 <12-14 ml/kg/min concerning)',
            'Right heart catheterization for hemodynamic assessment',
            'Multidisciplinary HF team evaluation (transplant, LVAD, palliative care)'
          ],
          targets: [
            { parameter: 'INTERMACS Profile', goal: 'Profile 1-3 for urgent MCS evaluation', rationale: 'Declining patients need expedited assessment' },
            { parameter: 'Peak VO2', goal: '<12 ml/kg/min (or <14 with VE/VCO2 >35)', rationale: 'Transplant listing threshold' }
          ],
          monitoringRequired: [
            { test: 'CardioMEMS (if implanted)', frequency: 'Daily', purpose: 'Proactive diuretic adjustment' },
            { test: 'Serial BNP/NT-proBNP', frequency: 'Per clinical status', purpose: 'Track congestion and response' }
          ]
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Advanced HFrEF management encompasses precision phenotyping (imaging, biomarkers, genetics), device optimization, mechanical circulatory support, transplantation, and emerging gene therapies. Multidisciplinary care is essential for complex decision-making.',
      whyThisApproach: 'Cardiac myosin activators, gene therapy for genetic cardiomyopathies, and next-generation LVADs are reshaping advanced HF care. Patient selection, timing of interventions, and palliation integration require specialized expertise.',
      whatToExpect: 'Advanced HF centers provide comprehensive evaluation including right heart catheterization, CPET, genetic testing, and imaging to guide transplant/MCS candidacy. Shared decision-making balances survival with quality of life.',
      keyPoints: [
        'Omecamtiv mecarbil (cardiac myosin activator): GALACTIC-HF showed modest outcome benefit in severe HFrEF',
        'Gene therapy: Emerging trials for genetic dilated cardiomyopathies (LMNA, TTN, BAG3)',
        'LVAD: HeartMate 3 destination therapy 2-year survival ~75% in selected patients',
        'Heart transplant: Median survival >12 years; limited by donor availability',
        'Palliative care integration: Improves quality of life, reduces hospitalizations'
      ],
      detailedSteps: [
        {
          id: 'hf-specialist-1',
          order: 1,
          name: 'Comprehensive Phenotyping',
          description: 'Multimodal assessment for precision management',
          nonPharmacologic: [
            'Cardiac MRI with LGE: Assess fibrosis, infiltration, viability',
            'Genetic testing: For DCM, HCM, ARVC, Fabry, transthyretin amyloidosis',
            'Right heart catheterization: Hemodynamic profiling (wet/dry, warm/cold)',
            'Cardiopulmonary exercise testing: Peak VO2, VE/VCO2 slope for prognosis'
          ],
          targets: [
            { parameter: 'TTR Amyloidosis', goal: 'Early diagnosis for tafamidis therapy', rationale: 'ATTR-ACT: 30% RRR mortality with tafamidis' },
            { parameter: 'Cardiac sarcoidosis', goal: 'PET-CT for active inflammation', rationale: 'Guides immunosuppression' }
          ]
        },
        {
          id: 'hf-specialist-2',
          order: 2,
          name: 'Specialized Pharmacotherapy',
          description: 'Agents for specific phenotypes and refractory disease',
          medications: [
            {
              name: 'Tafamidis',
              genericName: 'Tafamidis',
              class: 'Transthyretin Stabilizer',
              dosing: '80mg daily (or tafamidis meglumine 20mg)',
              considerations: 'ATTR-ACT: For transthyretin cardiac amyloidosis; NYHA I-II only'
            },
            {
              name: 'Omecamtiv Mecarbil',
              genericName: 'Omecamtiv Mecarbil',
              class: 'Cardiac Myosin Activator',
              dosing: '25mg BID, increase to 50mg BID',
              considerations: 'GALACTIC-HF: 8% RRR HF events; greater benefit in lower EF'
            },
            {
              name: 'Milrinone',
              class: 'Phosphodiesterase Inhibitor',
              dosing: '0.375-0.75 mcg/kg/min continuous infusion',
              considerations: 'Bridge therapy to transplant/LVAD; home inotrope in palliative setting'
            },
            {
              name: 'Dobutamine',
              class: 'Inotrope',
              dosing: '2-20 mcg/kg/min continuous infusion',
              considerations: 'Cardiogenic shock; shorter-term use due to tolerance'
            }
          ]
        },
        {
          id: 'hf-specialist-3',
          order: 3,
          name: 'Mechanical Circulatory Support',
          description: 'LVAD therapy for destination or bridge to transplant',
          nonPharmacologic: [
            'HeartMate 3: Fully magnetically levitated centrifugal pump',
            'Bridge to transplant: INTERMACS 1-4',
            'Destination therapy: Not transplant candidate, INTERMACS 2-7',
            'Bridge to decision: Stabilize for transplant evaluation'
          ],
          targets: [
            { parameter: 'HeartMate 3 outcomes', goal: '2-year survival ~77% DT', rationale: 'MOMENTUM 3 trial data' },
            { parameter: 'Stroke rate', goal: '~10% at 2 years', rationale: 'Improved with HM3 vs axial flow' }
          ],
          monitoringRequired: [
            { test: 'LDH', frequency: 'Weekly initially', purpose: 'Screen for hemolysis' },
            { test: 'INR', frequency: 'Per anticoagulation protocol', purpose: 'Target INR 2.0-3.0' }
          ],
          patientEducation: 'LVADs require lifelong anticoagulation, driveline care, and battery management. Quality of life often significantly improves but lifestyle adjustments are substantial.'
        },
        {
          id: 'hf-specialist-4',
          order: 4,
          name: 'Heart Transplantation',
          description: 'Definitive therapy for end-stage heart failure',
          nonPharmacologic: [
            'Listing criteria: Refractory HF despite optimal medical/device therapy',
            'Absolute contraindications: Active malignancy, uncontrolled infection, irreversible end-organ dysfunction',
            'Relative contraindications: Age >70, morbid obesity, substance abuse, poor social support',
            'Sensitized patients: PRA assessment, desensitization protocols'
          ],
          targets: [
            { parameter: 'Post-transplant survival', goal: 'Median >12 years', rationale: 'ISHLT registry data' },
            { parameter: 'Rejection surveillance', goal: 'Endomyocardial biopsy per protocol', rationale: 'Early detection critical' }
          ]
        }
      ]
    }
  },

  steps: [
    {
      id: 'hf-foundation',
      order: 1,
      name: 'Quadruple GDMT Initiation',
      description: 'Start all four pillars: ARNI, BB, MRA, SGLT2i',
      medications: [
        { name: 'ARNI or ACE-I/ARB', class: 'Neurohormonal blocker', considerations: 'ARNI preferred if tolerated' },
        { name: 'Beta-blocker', class: 'Beta-blocker', considerations: 'Carvedilol, metoprolol succinate, or bisoprolol' },
        { name: 'MRA', class: 'Aldosterone antagonist', considerations: 'Spironolactone or eplerenone' },
        { name: 'SGLT2i', class: 'SGLT2 inhibitor', considerations: 'Dapagliflozin or empagliflozin' }
      ],
      targets: [{ parameter: 'Initiate all four', goal: 'Within first 30 days', rationale: 'Early comprehensive therapy improves outcomes' }],
      timeframe: 'First 30 days'
    },
    {
      id: 'hf-uptitrate',
      order: 2,
      name: 'Uptitrate to Target Doses',
      description: 'Double doses every 1-2 weeks until targets reached',
      targets: [
        { parameter: 'ARNI', goal: '97/103mg BID' },
        { parameter: 'Carvedilol', goal: '25mg BID' },
        { parameter: 'MRA', goal: '25-50mg daily' }
      ],
      timeframe: '4-6 weeks'
    },
    {
      id: 'hf-add-on',
      order: 3,
      name: 'Add-On Therapies',
      description: 'Hydralazine-nitrate, ivabradine, digoxin, vericiguat as needed',
      medications: [
        { name: 'Hydralazine/ISDN', class: 'Vasodilator', considerations: 'Black patients or ACE-I/ARB intolerant' },
        { name: 'Ivabradine', class: 'If inhibitor', considerations: 'Sinus rhythm, HR >70 on max BB' },
        { name: 'Vericiguat', class: 'sGC stimulator', considerations: 'Recently hospitalized' }
      ],
      timeframe: 'After GDMT optimization'
    },
    {
      id: 'hf-devices',
      order: 4,
      name: 'Device Therapy',
      description: 'ICD and/or CRT after 90 days optimal GDMT',
      nonPharmacologic: ['ICD for EF <=35%', 'CRT for LBBB with QRS >=150ms'],
      timeframe: '90 days post-GDMT optimization'
    },
    {
      id: 'hf-advanced',
      order: 5,
      name: 'Advanced Therapies',
      description: 'LVAD or transplant for refractory disease',
      nonPharmacologic: ['MCS evaluation', 'Transplant listing', 'Palliative care integration'],
      timeframe: 'When refractory to medical/device therapy'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'EF remains <=40% after GDMT optimization',
        'Persistent NYHA III-IV symptoms',
        'Recurrent HF hospitalizations',
        'Worsening renal function or rising BNP',
        'Hemodynamic evidence of decompensation'
      ],
      timeline: 'Reassess every 1-4 weeks during active uptitration',
      considerations: [
        'Ensure adherence and target doses before adding therapies',
        'Consider ICD/CRT after 90 days of optimized GDMT',
        'Refer to advanced HF center if recurrent hospitalizations or NYHA IV'
      ]
    },
    stepDown: {
      triggers: [
        'EF recovery to >40% (HFimpEF)',
        'Significant symptomatic hypotension',
        'Recurrent hyperkalemia limiting MRA/ARNI',
        'Palliative goals of care'
      ],
      timeline: 'Gradual dose reduction with close monitoring',
      considerations: [
        'Continue GDMT even with EF recovery (myocardial recovery vs remission)',
        'Maintain ARNI/BB at tolerated doses for neurohormonal modulation',
        'De-escalate diuretics first if over-diuresed'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'Black Patients',
      modifications: [
        'Add hydralazine/ISDN to GDMT (A-HeFT trial)',
        'Lower angioedema risk with ARB vs ACE-I',
        'Consider nitrate if ACE-I intolerant'
      ]
    },
    {
      population: 'Chronic Kidney Disease',
      modifications: [
        'Continue ARNI/ACE-I if tolerated (accept 30% creatinine rise)',
        'SGLT2i beneficial down to eGFR 20',
        'MRA contraindicated if K+ >5 or eGFR <30',
        'Monitor potassium and creatinine closely'
      ],
      monitoring: ['Weekly renal function during initiation']
    },
    {
      population: 'Elderly (>75 years)',
      modifications: [
        'Start at lower doses, slower uptitration',
        'Prioritize symptom control and functional status',
        'Consider frailty in device/transplant decisions',
        'Earlier palliative care integration'
      ]
    },
    {
      population: 'Pregnancy',
      modifications: [
        'ACE-I, ARB, ARNI contraindicated (teratogenic)',
        'Hydralazine and nitrates are safe options',
        'Beta-blocker use with fetal monitoring',
        'Peripartum cardiomyopathy may recover'
      ],
      contraindications: ['ACE-I', 'ARB', 'ARNI', 'Spironolactone', 'Ivabradine']
    }
  ],

  emergencyIndications: [
    'Acute decompensated heart failure requiring IV diuretics',
    'Cardiogenic shock (cold and wet profile)',
    'Symptomatic hypotension or bradycardia from medications',
    'New-onset atrial fibrillation with rapid ventricular response',
    'Ventricular arrhythmias or ICD shocks'
  ],

  referralCriteria: [
    'Persistent NYHA IV symptoms despite optimal therapy',
    'Recurrent HF hospitalizations (>=2 in 12 months)',
    'Consideration for ICD or CRT',
    'Inotrope dependence',
    'Evaluation for LVAD or heart transplant',
    'Complex cardiomyopathy (amyloid, sarcoid, HCM)'
  ],

  citations: [
    {
      id: 'acc-aha-hf-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'Bozkurt B', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2021.12.012'
    },
    {
      id: 'paradigm-hf',
      type: 'article',
      title: 'Angiotensin-Neprilysin Inhibition versus Enalapril in Heart Failure',
      authors: ['McMurray JJ', 'Packer M', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1409077'
    },
    {
      id: 'dapa-hf',
      type: 'article',
      title: 'Dapagliflozin in Patients with Heart Failure and Reduced Ejection Fraction',
      authors: ['McMurray JJV', 'Solomon SD', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1911303'
    },
    {
      id: 'strong-hf',
      type: 'article',
      title: 'Rapid Up-Titration of Guideline-Directed Medical Therapy for Heart Failure',
      authors: ['Mebazaa A', 'Davison B', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(22)02076-1'
    }
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['treatment', 'pharmacology', 'guidelines', 'heart failure'],
    clinicalRelevance: 'critical',
    keywords: ['heart failure', 'HFrEF', 'GDMT', 'ARNI', 'SGLT2i', 'ICD', 'CRT', 'LVAD']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default heartFailureAlgorithm;
