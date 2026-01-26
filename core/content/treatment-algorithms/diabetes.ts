/**
 * Diabetes Management Algorithm
 *
 * Based on ADA Standards of Medical Care in Diabetes 2024
 * Comprehensive guide covering:
 * - Type 2 diabetes pharmacotherapy
 * - Glycemic targets
 * - Cardiovascular and renal considerations
 * - Step-up therapy approaches
 */

import { TreatmentAlgorithm } from './types';

export const diabetesAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-diabetes-ada',
  condition: 'Type 2 Diabetes Mellitus',
  alternateNames: ['T2DM', 'Adult-Onset Diabetes', 'Non-Insulin Dependent Diabetes'],
  icdCodes: ['E11.9', 'E11.65', 'E11.21', 'E11.22'],
  guidelineSource: 'American Diabetes Association Standards of Care',
  guidelineYear: 2024,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'Diabetes means your body has trouble using sugar from food for energy. Medicine helps your body use sugar better or helps you make more insulin, which is the hormone that controls blood sugar.',
      whyThisApproach: 'Doctors usually start with one medicine and healthy eating. If that is not enough, they add more medicines over time. This helps find what works best for you.',
      whatToExpect: 'You will check your blood sugar regularly and take medicine daily. Your doctor will check a special blood test called A1C every 3 months to see how well your treatment is working.',
      keyPoints: [
        'Healthy eating and exercise are as important as medicine',
        'Take your medicine even when you feel fine',
        'Check your blood sugar as your doctor recommends',
        'Low blood sugar can happen with some medicines - know the warning signs',
        'Regular checkups help prevent serious problems'
      ],
      patientQuestions: [
        'Why do I need medicine if I feel fine?',
        'Can I cure my diabetes with diet alone?',
        'What should I do if my blood sugar is too low?'
      ]
    },
    2: {
      level: 2,
      overview: 'Type 2 diabetes treatment aims to keep blood sugar levels near normal (A1C below 7% for most adults). Treatment combines lifestyle changes with medications that work in different ways.',
      whyThisApproach: 'High blood sugar over time damages blood vessels and nerves, leading to heart disease, kidney failure, blindness, and nerve damage. Keeping blood sugar controlled prevents these complications.',
      whatToExpect: 'Metformin is usually the first medication. If A1C remains above goal after 3 months, another medication is added. The choice depends on other health conditions like heart or kidney disease.',
      keyPoints: [
        'A1C goal is less than 7% for most adults (may be different for elderly or those with complications)',
        'Metformin is first-line unless contraindicated',
        'GLP-1 agonists and SGLT2 inhibitors protect the heart and kidneys',
        'Weight management is a key treatment goal',
        'Blood pressure and cholesterol management are equally important'
      ],
      patientQuestions: [
        'What is my A1C goal?',
        'Which medications are best if I also have heart disease?',
        'Should I be checking my blood sugar at home?'
      ]
    },
    3: {
      level: 3,
      overview: 'Diabetes management follows an individualized, patient-centered approach. First-line therapy is metformin plus lifestyle modification. Second-line agents are selected based on comorbidities, particularly ASCVD, heart failure, and CKD.',
      whyThisApproach: 'The ADA/EASD consensus emphasizes cardiovascular and renal risk reduction. SGLT2 inhibitors and GLP-1 receptor agonists have proven cardiovascular and renal benefits independent of glucose lowering.',
      whatToExpect: 'Initial monotherapy with metformin targets A1C reduction of 1-1.5%. Combination therapy is considered when A1C is >1.5% above goal. Cardiovascular outcome trials guide agent selection in high-risk patients.',
      keyPoints: [
        'A1C targets: <7% (general), <6.5% (select patients), <8% (elderly/limited life expectancy)',
        'Metformin: First-line, A1C reduction ~1-1.5%, weight neutral, GI side effects',
        'SGLT2 inhibitors: CV and renal protection, A1C reduction ~0.5-1%, weight loss, UTI/DKA risk',
        'GLP-1 RAs: CV protection (some agents), A1C reduction ~1-1.5%, weight loss, GI side effects',
        'DPP-4 inhibitors: Weight neutral, well tolerated, modest A1C reduction (~0.5-0.8%)'
      ],
      detailedSteps: [
        {
          id: 'dm-step-1',
          order: 1,
          name: 'Lifestyle Modification + Metformin',
          description: 'Foundation of diabetes management',
          medications: [
            {
              name: 'Metformin',
              genericName: 'Metformin',
              class: 'Biguanide',
              dosing: '500mg BID, titrate to 1000mg BID over 4-8 weeks',
              frequency: 'Twice daily with meals',
              commonSideEffects: ['GI upset', 'Diarrhea', 'Nausea'],
              seriousWarnings: ['Lactic acidosis (rare)', 'B12 deficiency'],
              contraindications: ['eGFR <30', 'Acute/chronic metabolic acidosis'],
              considerations: 'Hold before contrast, resume 48h after if renal function stable',
              costCategory: 'low'
            }
          ],
          nonPharmacologic: [
            'Carbohydrate counting and meal planning',
            'Weight loss goal of 5-10% if overweight',
            '150 minutes/week moderate aerobic activity',
            'Resistance training 2-3 times/week',
            'Diabetes self-management education (DSME)'
          ],
          targets: [
            { parameter: 'A1C', goal: '<7% for most adults', rationale: 'Reduces microvascular complications' },
            { parameter: 'Fasting glucose', goal: '80-130 mg/dL', rationale: 'Pre-meal target' },
            { parameter: 'Postprandial glucose', goal: '<180 mg/dL', rationale: '2 hours after meals' }
          ],
          monitoringRequired: [
            { test: 'A1C', frequency: 'Every 3 months until stable, then every 6 months', purpose: 'Assess glycemic control' },
            { test: 'Fasting lipid panel', frequency: 'Annually', purpose: 'CV risk assessment' },
            { test: 'Urine albumin-to-creatinine ratio', frequency: 'Annually', purpose: 'Screen for nephropathy' }
          ],
          timeframe: '3 months to assess response'
        },
        {
          id: 'dm-step-2',
          order: 2,
          name: 'Add Second Agent Based on Comorbidities',
          description: 'SGLT2i or GLP-1 RA if ASCVD, HF, or CKD; otherwise based on patient factors',
          medications: [
            {
              name: 'Empagliflozin',
              genericName: 'Empagliflozin',
              class: 'SGLT2 Inhibitor',
              dosing: '10mg daily, may increase to 25mg',
              commonSideEffects: ['Genital mycotic infections', 'UTI', 'Polyuria'],
              seriousWarnings: ['DKA (euglycemic)', 'Fournier gangrene', 'Acute kidney injury'],
              contraindications: ['Type 1 diabetes', 'eGFR <20 (for glucose lowering)'],
              considerations: 'CV and renal benefits shown in EMPA-REG OUTCOME and EMPEROR trials',
              costCategory: 'high'
            },
            {
              name: 'Semaglutide',
              genericName: 'Semaglutide',
              class: 'GLP-1 Receptor Agonist',
              dosing: '0.25mg weekly x4 weeks, then 0.5mg weekly, may increase to 1mg or 2mg',
              frequency: 'Once weekly injection',
              commonSideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation'],
              seriousWarnings: ['Pancreatitis', 'MTC (thyroid cancer) - avoid in MEN2', 'Gallbladder disease'],
              contraindications: ['Personal/family history of MTC', 'MEN2 syndrome'],
              considerations: 'SUSTAIN trials showed CV benefit; significant weight loss',
              costCategory: 'very-high'
            },
            {
              name: 'Sitagliptin',
              genericName: 'Sitagliptin',
              class: 'DPP-4 Inhibitor',
              dosing: '100mg daily (reduce for renal impairment)',
              commonSideEffects: ['Nasopharyngitis', 'Headache'],
              seriousWarnings: ['Pancreatitis', 'Heart failure (with saxagliptin/alogliptin)'],
              considerations: 'Weight neutral; avoid with GLP-1 RA (redundant mechanism)',
              costCategory: 'moderate'
            }
          ],
          targets: [
            { parameter: 'A1C', goal: '<7%', rationale: 'Addition should reduce A1C further 0.5-1.5%' }
          ],
          timeframe: '3 months to assess combination efficacy'
        },
        {
          id: 'dm-step-3',
          order: 3,
          name: 'Triple Therapy or Add Insulin',
          description: 'Add third oral agent or basal insulin if A1C remains above goal',
          medications: [
            {
              name: 'Insulin Glargine',
              genericName: 'Insulin Glargine',
              class: 'Long-Acting Basal Insulin',
              dosing: 'Start 10 units or 0.1-0.2 units/kg daily, titrate by 2 units every 3 days to fasting goal',
              frequency: 'Once daily, same time each day',
              commonSideEffects: ['Hypoglycemia', 'Weight gain', 'Injection site reactions'],
              seriousWarnings: ['Severe hypoglycemia', 'Hypokalemia'],
              considerations: 'Fasting-directed titration simplest approach',
              costCategory: 'high'
            },
            {
              name: 'Pioglitazone',
              genericName: 'Pioglitazone',
              class: 'Thiazolidinedione',
              dosing: '15-30mg daily, max 45mg',
              commonSideEffects: ['Weight gain', 'Edema', 'Bone fractures'],
              seriousWarnings: ['Heart failure exacerbation', 'Bladder cancer (controversial)'],
              contraindications: ['NYHA Class III-IV heart failure'],
              considerations: 'May improve NASH; durable glycemic effect',
              costCategory: 'low'
            }
          ],
          monitoringRequired: [
            { test: 'Fasting blood glucose', frequency: 'Daily when starting insulin', purpose: 'Titrate basal insulin' },
            { test: 'A1C', frequency: 'Every 3 months', purpose: 'Assess overall control' }
          ],
          timeframe: 'Ongoing titration until A1C at goal'
        },
        {
          id: 'dm-step-4',
          order: 4,
          name: 'Intensify Insulin Regimen',
          description: 'Add prandial insulin or switch to premixed insulin',
          medications: [
            {
              name: 'Insulin Lispro',
              genericName: 'Insulin Lispro',
              class: 'Rapid-Acting Prandial Insulin',
              dosing: '4 units before largest meal, titrate by 1-2 units every 3 days',
              frequency: 'Before meals',
              commonSideEffects: ['Hypoglycemia', 'Weight gain'],
              considerations: 'Basal-plus or basal-bolus regimen',
              costCategory: 'high'
            }
          ],
          monitoringRequired: [
            { test: 'Pre-meal blood glucose', frequency: 'Before each meal', purpose: 'Adjust prandial doses' },
            { test: 'Post-meal blood glucose', frequency: '2 hours after meals', purpose: 'Assess coverage' }
          ],
          patientEducation: 'Intensive insulin therapy requires carbohydrate counting and careful monitoring to prevent hypoglycemia'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Contemporary diabetes management integrates glucose-centric and organ-protective approaches. The ADA/EASD/KDIGO guidelines prioritize agents with proven cardiovascular and renal outcomes benefits regardless of baseline A1C in high-risk patients.',
      whyThisApproach: 'Cardiovascular outcome trials (CVOTs) have transformed diabetes care. EMPA-REG OUTCOME, LEADER, SUSTAIN-6, CREDENCE, and DAPA-HF demonstrate organ protection independent of glucose lowering, shifting the paradigm from glucocentric to cardio-renal focused therapy.',
      whatToExpect: 'Risk stratification guides therapy intensity. High-risk patients receive SGLT2i and/or GLP-1 RA early regardless of A1C. De-intensification is considered in overtreatment scenarios, particularly in elderly or those with limited life expectancy.',
      keyPoints: [
        'ASCVD or high CV risk: GLP-1 RA with proven CV benefit (liraglutide, semaglutide, dulaglutide)',
        'Heart failure: SGLT2i preferred (empagliflozin, dapagliflozin, canagliflozin)',
        'CKD: SGLT2i down to eGFR 20 (renal protection); finerenone for additional albuminuria reduction',
        'Obesity: GLP-1 RA or dual GIP/GLP-1 RA (tirzepatide) for weight loss',
        'Hypoglycemia risk: Avoid sulfonylureas and insulin if possible; consider DPP-4i or TZD',
        'Glycemic durability: GLP-1 RA and TZD have superior durability vs. sulfonylureas'
      ],
      detailedSteps: [
        {
          id: 'dm-advanced-1',
          order: 1,
          name: 'Comprehensive Risk Assessment',
          description: 'Evaluate cardiovascular, renal, and metabolic risk to guide therapy selection',
          targets: [
            { parameter: 'ASCVD Risk', goal: 'Identify established ASCVD or high-risk features', rationale: 'Mandates GLP-1 RA or SGLT2i' },
            { parameter: 'Heart Failure', goal: 'Screen for HFpEF/HFrEF', rationale: 'SGLT2i indicated for HF regardless of EF' },
            { parameter: 'CKD Stage', goal: 'eGFR and UACR assessment', rationale: 'SGLT2i for eGFR 20-90 with albuminuria' },
            { parameter: 'Weight', goal: 'Assess obesity severity', rationale: 'Guides agent selection for weight-neutral or weight-losing options' }
          ],
          monitoringRequired: [
            { test: 'eGFR and UACR', frequency: 'At diagnosis, annually, and when changing therapy', purpose: 'Guide SGLT2i use and monitor renal protection' },
            { test: 'NT-proBNP', frequency: 'If HF suspected', purpose: 'Screen for heart failure' },
            { test: 'Lipid panel', frequency: 'Annually', purpose: 'CV risk management' }
          ]
        },
        {
          id: 'dm-advanced-2',
          order: 2,
          name: 'Cardiorenal-Focused Selection',
          description: 'Choose agents with proven CV/renal outcomes benefits',
          medications: [
            {
              name: 'Dapagliflozin',
              genericName: 'Dapagliflozin',
              class: 'SGLT2 Inhibitor',
              dosing: '10mg daily',
              considerations: 'DAPA-HF showed HF benefit in diabetics and non-diabetics; DAPA-CKD showed renal protection to eGFR 25'
            },
            {
              name: 'Liraglutide',
              genericName: 'Liraglutide',
              class: 'GLP-1 Receptor Agonist',
              dosing: '0.6mg daily x1 week, then 1.2mg, may increase to 1.8mg',
              frequency: 'Daily injection',
              considerations: 'LEADER trial: 13% reduction in MACE; once-daily dosing'
            },
            {
              name: 'Tirzepatide',
              genericName: 'Tirzepatide',
              class: 'Dual GIP/GLP-1 Receptor Agonist',
              dosing: '2.5mg weekly x4 weeks, escalate every 4 weeks to 5, 7.5, 10, 12.5, or 15mg',
              frequency: 'Once weekly injection',
              commonSideEffects: ['Nausea', 'Diarrhea', 'Vomiting (dose-dependent)'],
              considerations: 'SURPASS trials: Superior A1C reduction and weight loss vs. semaglutide; CVOT pending',
              costCategory: 'very-high'
            },
            {
              name: 'Finerenone',
              genericName: 'Finerenone',
              class: 'Non-steroidal Mineralocorticoid Receptor Antagonist',
              dosing: '10-20mg daily based on eGFR',
              commonSideEffects: ['Hyperkalemia'],
              contraindications: ['eGFR <25', 'Potassium >5.0'],
              considerations: 'FIDELIO-DKD/FIGARO-DKD: CV and renal protection in diabetic kidney disease'
            }
          ]
        },
        {
          id: 'dm-advanced-3',
          order: 3,
          name: 'Advanced Insulin Strategies',
          description: 'Optimize insulin therapy for complex patients',
          medications: [
            {
              name: 'Insulin Degludec',
              genericName: 'Insulin Degludec',
              class: 'Ultra-Long-Acting Basal Insulin',
              dosing: 'Once daily, titrate to fasting glucose',
              considerations: 'DEVOTE: Fewer severe hypoglycemia events vs. glargine; flexible dosing timing'
            },
            {
              name: 'Insulin Degludec/Liraglutide',
              genericName: 'IDegLira',
              class: 'Fixed-Ratio Basal Insulin/GLP-1 RA Combination',
              dosing: '16 units (16 units degludec + 0.58mg liraglutide) daily, titrate by 2 units',
              considerations: 'Lower hypoglycemia and weight gain than basal-bolus; simpler than separate injections'
            }
          ],
          patientEducation: 'Fixed-ratio combinations simplify regimens while providing benefits of both insulin and GLP-1 RA'
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Precision medicine in diabetes integrates genetic risk scores, metabolomics, and continuous glucose monitoring (CGM) data to individualize therapy. Emerging therapies include once-weekly insulin, oral GLP-1 RAs, dual incretin agonists, and islet cell transplantation.',
      whyThisApproach: 'Subphenotyping diabetes beyond T1DM/T2DM (e.g., SAID, SIDD, SIRD, MOD, MARD clusters) may guide personalized treatment. Real-world evidence and CGM-derived metrics (time in range, glucose variability) provide deeper insights than A1C alone.',
      whatToExpect: 'Complex patients benefit from multidisciplinary teams including endocrinology, nephrology, cardiology, and behavioral specialists. Technology integration (CGM, closed-loop systems) optimizes glycemic management while minimizing hypoglycemia burden.',
      keyPoints: [
        'Diabetes subphenotypes: SAID (autoimmune), SIDD (insulin-deficient), SIRD (insulin-resistant), MOD (obesity-related), MARD (age-related)',
        'Time in range (TIR): 70-180 mg/dL target >70% correlates with microvascular outcomes',
        'Glucose management indicator (GMI): CGM-derived A1C estimate for real-time feedback',
        'Oral semaglutide: First oral GLP-1 RA (PIONEER trials); requires specific administration',
        'Once-weekly insulin icodec: Phase 3 trials show non-inferior efficacy to daily basal insulin',
        'Dual agonism: Tirzepatide (GIP/GLP-1) shows superior glucose lowering and weight loss',
        'Bariatric surgery: Consider for BMI ≥35 or BMI ≥30 with uncontrolled T2DM (STAMPEDE trial)'
      ],
      detailedSteps: [
        {
          id: 'dm-specialist-1',
          order: 1,
          name: 'Precision Phenotyping',
          description: 'Advanced classification and personalized treatment',
          nonPharmacologic: [
            'GAD65, IA-2, ZnT8 antibodies to exclude LADA/SAID',
            'C-peptide assessment for insulin secretory capacity',
            'Genetic testing for MODY if young onset, family history, atypical features',
            'Continuous glucose monitoring for glycemic variability assessment'
          ],
          targets: [
            { parameter: 'Time in Range', goal: '>70% in 70-180 mg/dL', rationale: 'Correlates with microvascular risk reduction' },
            { parameter: 'Time Below Range', goal: '<4% below 70 mg/dL, <1% below 54 mg/dL', rationale: 'Minimize hypoglycemia burden' },
            { parameter: 'Glucose Variability', goal: 'CV <36%', rationale: 'High variability associated with complications' }
          ]
        },
        {
          id: 'dm-specialist-2',
          order: 2,
          name: 'Advanced Therapeutic Approaches',
          description: 'Cutting-edge and emerging therapies',
          medications: [
            {
              name: 'Oral Semaglutide',
              genericName: 'Oral Semaglutide',
              class: 'Oral GLP-1 Receptor Agonist',
              dosing: '3mg daily x30 days, then 7mg daily, may increase to 14mg',
              frequency: 'Daily, 30 min before first food/beverage with ≤4 oz water',
              commonSideEffects: ['Nausea', 'Diarrhea', 'Abdominal pain'],
              considerations: 'PIONEER program: CV safety established (PIONEER 6); strict dosing requirements'
            },
            {
              name: 'Insulin Icodec',
              genericName: 'Insulin Icodec',
              class: 'Once-Weekly Basal Insulin',
              dosing: 'Weekly dose = 7 x current daily basal dose',
              frequency: 'Once weekly',
              considerations: 'ONWARDS trials: Non-inferior to daily basal insulin; improved convenience and potentially adherence'
            }
          ]
        },
        {
          id: 'dm-specialist-3',
          order: 3,
          name: 'Technology-Enabled Care',
          description: 'CGM, closed-loop systems, and digital therapeutics',
          nonPharmacologic: [
            'Real-time CGM for insulin users and high-risk patients',
            'Automated insulin delivery (hybrid closed-loop) for T1DM and insulin-requiring T2DM',
            'CGM-guided therapy adjustments using ambulatory glucose profile',
            'Digital diabetes management platforms for remote monitoring'
          ],
          monitoringRequired: [
            { test: 'Ambulatory Glucose Profile (AGP)', frequency: '2-week reviews', purpose: 'Identify patterns for therapy adjustment' },
            { test: 'Time in range metrics', frequency: 'Continuous', purpose: 'Real-time glycemic assessment' }
          ],
          patientEducation: 'CGM provides 288 glucose readings per day vs. 4-7 with SMBG, enabling pattern recognition and proactive therapy adjustments'
        },
        {
          id: 'dm-specialist-4',
          order: 4,
          name: 'Metabolic Surgery Consideration',
          description: 'Bariatric/metabolic surgery as diabetes treatment',
          nonPharmacologic: [
            'Roux-en-Y gastric bypass: 60-80% T2DM remission at 5 years',
            'Sleeve gastrectomy: 50-60% remission; less malabsorption',
            'Patient selection: BMI ≥40, or ≥35 with T2DM, or ≥30 with uncontrolled T2DM (ADA 2024)'
          ],
          targets: [
            { parameter: 'Post-surgical A1C', goal: '<6.5% off medications', rationale: 'Definition of diabetes remission' }
          ],
          patientEducation: 'STAMPEDE 5-year data: 29% complete remission with surgery vs. 5% with medical therapy alone. Long-term nutritional monitoring essential.'
        }
      ]
    }
  },

  steps: [
    {
      id: 'dm-foundation',
      order: 1,
      name: 'Lifestyle + Metformin',
      description: 'First-line therapy for all T2DM patients',
      medications: [
        { name: 'Metformin', class: 'Biguanide', considerations: 'First-line unless contraindicated' }
      ],
      nonPharmacologic: ['Medical nutrition therapy', 'Physical activity', 'Weight management', 'DSME'],
      targets: [{ parameter: 'A1C', goal: '<7%', rationale: 'Individualize based on patient factors' }],
      timeframe: '3 months to assess response'
    },
    {
      id: 'dm-dual',
      order: 2,
      name: 'Add Second Agent',
      description: 'SGLT2i or GLP-1 RA preferred if ASCVD, HF, or CKD',
      medications: [
        { name: 'SGLT2 inhibitor', class: 'SGLT2i', considerations: 'HF, CKD, or CV risk' },
        { name: 'GLP-1 receptor agonist', class: 'GLP-1 RA', considerations: 'ASCVD or high CV risk, obesity' },
        { name: 'DPP-4 inhibitor', class: 'DPP-4i', considerations: 'If cost or tolerability concerns' }
      ],
      timeframe: '3 months'
    },
    {
      id: 'dm-triple',
      order: 3,
      name: 'Triple Therapy',
      description: 'Add third agent from different class or consider basal insulin',
      medications: [
        { name: 'Add third oral agent', class: 'Various', considerations: 'Complementary mechanisms' },
        { name: 'Basal insulin', class: 'Insulin', considerations: 'If A1C significantly elevated' }
      ],
      timeframe: 'Ongoing titration'
    },
    {
      id: 'dm-intensify',
      order: 4,
      name: 'Intensify Insulin',
      description: 'Basal-plus or basal-bolus regimen',
      medications: [
        { name: 'Basal + prandial insulin', class: 'Insulin', considerations: 'Full MDI if needed' }
      ],
      timeframe: 'Adjust based on glucose patterns'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'A1C above goal after 3 months of optimized therapy',
        'Progressive symptoms (polyuria, polydipsia, weight loss)',
        'Development of ASCVD, HF, or CKD (add protective agents)',
        'Significant hyperglycemia (>300 mg/dL) or A1C >10%'
      ],
      timeline: 'Reassess every 3 months until at goal',
      considerations: [
        'Prioritize agents with CV/renal protection if comorbidities present',
        'Consider patient preferences, cost, and injection burden',
        'Assess and address medication adherence before escalating'
      ]
    },
    stepDown: {
      triggers: [
        'A1C well below goal (<6.5%) with hypoglycemia risk',
        'Significant weight loss or lifestyle improvement',
        'Post-bariatric surgery remission',
        'End of life care considerations'
      ],
      timeline: 'Gradual de-escalation with close monitoring',
      considerations: [
        'Maintain SGLT2i/GLP-1 RA for CV/renal protection even if glucose at goal',
        'Reduce sulfonylureas or insulin first (highest hypoglycemia risk)',
        'Continue metformin unless contraindicated'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'Chronic Kidney Disease',
      modifications: [
        'SGLT2i indicated down to eGFR 20 for renal protection',
        'Reduce metformin dose at eGFR 30-45, discontinue <30',
        'Adjust insulin doses as clearance decreases',
        'Finerenone for additional cardiorenal protection with albuminuria'
      ],
      monitoring: ['More frequent eGFR and potassium monitoring']
    },
    {
      population: 'Heart Failure',
      modifications: [
        'SGLT2i first-line regardless of EF (EMPEROR, DAPA-HF)',
        'Avoid saxagliptin and alogliptin (DPP-4i with HF signals)',
        'Caution with TZDs (fluid retention)',
        'Metformin safe in stable HF'
      ]
    },
    {
      population: 'Elderly (>65 years)',
      modifications: [
        'Relaxed A1C target (7.5-8.5%) to avoid hypoglycemia',
        'Avoid sulfonylureas if possible (hypoglycemia risk)',
        'Consider frailty, cognitive function, and life expectancy',
        'Simplify regimens to improve adherence'
      ]
    },
    {
      population: 'Pregnancy',
      modifications: [
        'Insulin is preferred therapy during pregnancy',
        'Discontinue oral agents (most not approved)',
        'Metformin may be continued if previously established',
        'Tight glycemic control: Fasting <95, 1h post-meal <140, 2h <120'
      ],
      contraindications: ['SGLT2 inhibitors', 'GLP-1 RAs', 'Statins']
    }
  ],

  emergencyIndications: [
    'Diabetic ketoacidosis (DKA)',
    'Hyperosmolar hyperglycemic state (HHS)',
    'Severe hypoglycemia with altered consciousness',
    'New-onset diabetes with severe symptoms and glucose >300'
  ],

  referralCriteria: [
    'Type 1 diabetes or suspected LADA requiring insulin initiation',
    'Recurrent severe hypoglycemia or hypoglycemia unawareness',
    'Complex insulin regimens or pump/CGM initiation',
    'Uncontrolled A1C despite multiple agents',
    'Pregnancy planning or gestational diabetes',
    'Consideration for bariatric surgery'
  ],

  citations: [
    {
      id: 'ada-soc-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes—2024',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://doi.org/10.2337/dc24-SINT'
    },
    {
      id: 'ada-easd-consensus',
      type: 'article',
      title: 'Management of Hyperglycemia in Type 2 Diabetes, 2022. A Consensus Report by the ADA and EASD',
      authors: ['Davies MJ', 'Aroda VR', 'et al.'],
      source: 'Diabetes Care',
      url: 'https://doi.org/10.2337/dci22-0034'
    },
    {
      id: 'empa-reg',
      type: 'article',
      title: 'Empagliflozin, Cardiovascular Outcomes, and Mortality in Type 2 Diabetes',
      authors: ['Zinman B', 'Wanner C', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1504720'
    },
    {
      id: 'sustain-6',
      type: 'article',
      title: 'Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes',
      authors: ['Marso SP', 'Bain SC', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1607141'
    }
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular', 'renal'],
    topics: ['treatment', 'pharmacology', 'guidelines', 'diabetes'],
    clinicalRelevance: 'critical',
    keywords: ['diabetes', 'metformin', 'SGLT2', 'GLP-1', 'insulin', 'A1C']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default diabetesAlgorithm;
