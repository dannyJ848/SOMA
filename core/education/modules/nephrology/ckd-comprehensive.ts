/**
 * Chronic Kidney Disease (CKD) Educational Module
 * 
 * Comprehensive educational content across all 6 complexity levels covering:
 * - GFR stages and albuminuria categories
 * - Electrolyte disturbances
 * - Renal diet
 * - Dialysis preparation
 * - Kidney transplantation
 */

import type { EducationalModule } from '../../types.js';

export const ckdComprehensiveModule: EducationalModule = {
  id: 'nephrology-ckd-comprehensive',
  type: 'specialty',
  specialty: 'nephrology',
  
  title: 'Chronic Kidney Disease: A Comprehensive Guide',
  description: 'Complete guide to understanding chronic kidney disease including stages, albuminuria, electrolyte management, renal diet, dialysis preparation, and transplant considerations. Based on nephrology and KDIGO guidelines.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'urinary-system-basics',
    'kidney-anatomy',
    'blood-pressure-mechanics',
  ],
  
  learningObjectives: [
    'Understand what chronic kidney disease is and how it develops',
    'Learn about GFR stages and albuminuria categories',
    'Recognize electrolyte disturbances and their management',
    'Understand renal diet principles',
    'Know when and how to prepare for dialysis',
    'Learn about kidney transplantation as a treatment option',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '22 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '65 minutes',
    6: '90 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `Your kidneys are two bean-shaped organs that work as your body's cleaning crew. They filter waste from your blood and make urine. Chronic kidney disease (CKD) means your kidneys are slowly losing their ability to clean your blood. This happens over many years. Think of it like a coffee filter that gets clogged - eventually it can't filter coffee properly. When kidneys don't work well, waste builds up and makes you feel sick.`,
      
      analogy: `Imagine your kidneys are like a water treatment plant for your body. Every day, they clean about 200 quarts of blood to remove waste and extra fluid.

Healthy kidneys: Clean water goes back to your body, waste goes out as urine
Damaged kidneys: The filters get holes and clogged, so waste stays in your blood

CKD means your water treatment plant is slowly breaking down. At first, you might not notice. But as it gets worse, dirty water builds up and makes you feel tired, swollen, and sick.`,
      
      keyPoints: [
        'Kidneys filter waste from your blood and make urine',
        'CKD means kidneys slowly lose their filtering ability',
        'It usually takes years to develop',
        'Early CKD often has no symptoms',
        'Diabetes and high blood pressure are the main causes',
        'Healthy kidneys can be protected with good care',
      ],
      
      visualAid: 'kidney-function-diagram',
      
      story: `Maria is 55 years old. She has diabetes and high blood pressure - two conditions that can hurt kidneys. At her checkup, her doctor found protein in her urine. This is an early sign of kidney damage. Maria didn't feel sick, but her kidneys were already struggling.

Her doctor explained that her kidneys are like a strainer with small holes. When healthy, they keep good things (like protein) in the blood and let waste out. But when damaged, the holes get bigger and protein leaks through into the urine.

Maria started eating less salt, taking her medications, and checking her blood sugar. These steps help protect her remaining kidney function. She also started seeing a kidney doctor (nephrologist) to monitor her kidney health regularly.`,
    },
    
    // Level 2: Developing
    2: {
      summary: `Chronic kidney disease (CKD) is a long-term condition where the kidneys gradually lose their ability to filter waste from the blood. Doctors check kidney function using two main tests: a blood test called eGFR (estimated glomerular filtration rate) that estimates how well kidneys filter, and a urine test for albumin (a protein) that shows if kidneys are leaking protein. CKD has 5 stages based on how well kidneys work, from mild (Stage 1) to kidney failure (Stage 5).`,
      
      keyConcepts: [
        {
          term: 'eGFR (Estimated Glomerular Filtration Rate)',
          explanation: 'A blood test number that estimates how well your kidneys filter blood. Normal is about 90-120. Lower numbers mean worse kidney function.',
        },
        {
          term: 'Albuminuria',
          explanation: 'When albumin (a protein) leaks into urine. Healthy kidneys keep protein in the blood. Leaking protein is a sign of kidney damage.',
        },
        {
          term: 'Creatinine',
          explanation: 'A waste product from muscles. Kidneys remove it from blood. High blood creatinine means kidneys aren\'t filtering well.',
        },
        {
          term: 'Uremia',
          explanation: 'When waste products build up in the blood because kidneys aren\'t working. Can cause nausea, tiredness, and itching.',
        },
        {
          term: 'Nephrologist',
          explanation: 'A doctor who specializes in kidney diseases and their treatment.',
        },
      ],
      
      keyPoints: [
        'CKD means kidney damage lasting 3 months or more',
        'eGFR measures kidney filtering ability; lower is worse',
        'Albumin in urine shows kidney damage even before eGFR drops',
        'Stage 1: Kidney damage with normal eGFR (≥90)',
        'Stage 3: Moderate decrease in eGFR (30-59)',
        'Stage 5: Kidney failure, eGFR less than 15, may need dialysis or transplant',
        'High blood pressure and diabetes cause about 2/3 of CKD cases',
      ],
      
      howItWorks: `1. Blood enters your kidneys through large arteries
2. Millions of tiny filters (nephrons) clean the blood
3. Good things (red blood cells, protein) stay in blood
4. Waste and extra fluid become urine
5. Clean blood returns to your body
6. Urine flows to bladder and leaves body

In CKD:
- Filters get damaged and scarred
- Less blood gets filtered
- Waste builds up in blood
- Protein leaks into urine
- Kidneys may get smaller over time`,
    },
    
    // Level 3: Standard
    3: {
      summary: `Chronic kidney disease (CKD) is defined as abnormalities of kidney structure or function present for greater than 3 months, with implications for health. It is classified by cause, GFR category (G1-G5), and albuminuria category (A1-A3) using the KDIGO (Kidney Disease: Improving Global Outcomes) classification system. The two leading causes are diabetes mellitus (diabetic nephropathy) and hypertension. CKD progresses through predictable stages with increasing risk of cardiovascular disease, anemia, bone disease, and eventually end-stage renal disease requiring renal replacement therapy.`,
      
      mechanisms: [
        {
          name: 'Diabetic Nephropathy',
          description: 'High blood glucose damages glomerular capillaries, causing hyperfiltration, basement membrane thickening, and mesangial expansion. Leads to proteinuria and progressive GFR decline.',
        },
        {
          name: 'Hypertensive Nephrosclerosis',
          description: 'Chronic high pressure damages small arteries in kidneys, causing ischemia, glomerulosclerosis, and tubulointerstitial fibrosis.',
        },
        {
          name: 'Glomerular Hyperfiltration',
          description: 'In early diabetes, high glucose causes glomerular capillary dilation and increased single-nephron GFR, eventually exhausting nephrons.',
        },
        {
          name: 'Tubulointerstitial Fibrosis',
          description: 'Common final pathway for all CKD. Inflammatory cells infiltrate, myofibroblasts deposit collagen, and normal kidney tissue is replaced by scar.',
        },
      ],
      
      clinicalCorrelates: [
        'Cardiovascular disease: CKD patients have 10-30x higher CV mortality than general population',
        'Anemia: Reduced erythropoietin production by failing kidneys; typically begins in Stage 3',
        'Mineral and bone disorder (CKD-MBD): Phosphate retention, low vitamin D, secondary hyperparathyroidism',
        'Metabolic acidosis: Reduced ability to excrete acid; contributes to muscle wasting and bone disease',
        'Fluid overload: Sodium and water retention causing hypertension and edema',
        'Uremic syndrome: Accumulation of toxins causing nausea, pruritus, confusion, and pericarditis',
      ],
      
      normalVsAbnormal: {
        normal: 'Kidneys filter 180 L of blood daily, producing 1-2 L of urine. eGFR >90 mL/min/1.73m². No protein in urine. Electrolytes balanced. Blood pressure normal.',
        abnormal: 'eGFR <60 for 3+ months or evidence of kidney damage (albuminuria, abnormal imaging, electrolyte abnormalities). Progression through stages with accumulating complications.',
        whyItMatters: 'CKD increases cardiovascular risk even in early stages. Without intervention, progresses to ESRD requiring dialysis or transplant. Complications (anemia, bone disease, acidosis) develop at each stage.',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `The pathophysiology of CKD involves complex molecular mechanisms including hemodynamic changes, metabolic abnormalities, inflammation, and fibrosis. In diabetic nephropathy, hyperglycemia activates multiple pathways: advanced glycation end-products (AGEs), protein kinase C activation, and polyol pathway flux generate reactive oxygen species. The renin-angiotensin-aldosterone system (RAAS) is inappropriately activated despite hypertension. Transforming growth factor-β (TGF-β) drives extracellular matrix accumulation. Epithelial-to-mesenchymal transition (EMT) and endothelial dysfunction contribute to progressive scarring.`,
      
      molecularMechanisms: [
        {
          pathway: 'Advanced Glycation End-products (AGEs)',
          defect: 'Non-enzymatic glycation of proteins and lipids; RAGE receptor activation',
          consequence: 'Oxidative stress, inflammation, vascular stiffness, mesangial expansion',
        },
        {
          pathway: 'Polyol Pathway',
          defect: 'Excess glucose converted to sorbitol by aldose reductase; NADPH depletion',
          consequence: 'Osmotic stress, reduced glutathione, oxidative damage to glomerular cells',
        },
        {
          pathway: 'RAAS Dysregulation',
          defect: 'Intra-renal angiotensin II production despite systemic hypertension',
          consequence: 'Glomerular hypertension, podocyte injury, TGF-β activation, fibrosis',
        },
        {
          pathway: 'TGF-β/Smad Signaling',
          defect: 'Overactivation by hyperglycemia, angiotensin II, and mechanical stress',
          consequence: 'Myofibroblast activation, collagen deposition, tubulointerstitial fibrosis',
        },
        {
          pathway: 'Hypoxia-Inducible Factor (HIF)',
          defect: 'Reduced peritubular capillary density causes chronic hypoxia',
          consequence: 'Inflammation, EMT, progressive fibrosis, further capillary loss',
        },
      ],
      
      pathways: [
        {
          name: 'Podocyte Injury and Proteinuria',
          steps: [
            'Hyperglycemia and mechanical stress damage podocytes (glomerular epithelial cells)',
            'Loss of slit diaphragm proteins (nephrin, podocin)',
            'Podocyte detachment and loss (podocytopenia)',
            'Bare glomerular basement membrane allows protein leak',
            'Proteinuria causes tubular inflammation and damage',
            'Progressive glomerulosclerosis ensues',
          ],
          regulation: 'mTOR, TRPC6 channels, and integrin signaling modulate podocyte survival and attachment',
        },
        {
          name: 'Renal Fibrosis Cascade',
          steps: [
            'Initial kidney injury activates inflammatory cells (macrophages, lymphocytes)',
            'Cytokine release (TGF-β, IL-1, TNF-α) activates fibroblasts',
            'Myofibroblast differentiation (from resident fibroblasts, EMT, endothelial cells)',
            'Extracellular matrix deposition (collagen I, III, fibronectin)',
            'Matrix cross-linking and tissue contraction',
            'Irreversible scarring replaces functional nephrons',
          ],
          regulation: 'MicroRNAs (miR-21, miR-192), epigenetic modifications, and metabolic factors regulate fibrogenesis',
        },
      ],
      
      references: [
        'Alicic RZ, et al. Diabetic Kidney Disease: Challenges, Progress, and Possibilities. Clin J Am Soc Nephrol. 2017;12(12):2032-2045.',
        'Ritz E, et al. Clinical manifestation and natural history of diabetic kidney disease. Med Clin North Am. 2013;97(1):19-29.',
        'Fogo AB. Causes and pathogenesis of focal segmental glomerulosclerosis. Nat Rev Nephrol. 2015;11(2):76-87.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `Contemporary CKD research focuses on precision medicine approaches and novel therapeutic targets. The CARMELINA and CREDENCE trials established SGLT2 inhibitors as disease-modifying therapy for diabetic CKD, independent of glucose lowering. Novel anti-fibrotic agents targeting endothelin (atrasentan, sparsentan) show promise in proteinuric kidney disease. The FIDELIO-DKD and FIGARO-DKD trials demonstrated finerenone (non-steroidal MRA) benefits. Genetic studies have identified APOL1 risk variants explaining much of the excess CKD burden in African ancestry populations. Multi-omics approaches are revealing distinct molecular subtypes of CKD that may respond to targeted therapies.`,
      
      researchFrontiers: [
        'SGLT2 inhibitors: Beyond glucose lowering; reduce GFR decline by 30-40% through restoration of tubuloglomerular feedback',
        'Endothelin antagonists: Dual ETA/ETB blockade reduces proteinuria; sparsentan approved for FSGS',
        'Non-steroidal MRAs: Finerenone reduces CKD progression and CV events in diabetic nephropathy',
        'Anti-fibrotic biologics: Anti-TGF-β, anti-CTGF antibodies in clinical trials',
        'APOL1 nephropathy: Genetic testing and emerging therapies targeting APOL1-mediated podocytopathy',
        'Artificial kidneys: Implantable bioartificial kidneys using silicon filters and tubule cells',
        'Xenotransplantation: CRISPR-edited pig kidneys showing promise in early human trials',
      ],
      
      controversies: [
        {
          topic: 'Race-based eGFR Equations',
          perspectives: [
            'CKD-EPI 2021 removed race coefficient after recognition of structural racism in medicine',
            'Previous equations overestimated GFR in Black patients, delaying referral and transplant listing',
            'Cystatin C-based equations may reduce bias but are more expensive and less available',
            'Precision medicine approach: Individual factors vs population-level adjustments',
          ],
        },
        {
          topic: 'Metformin in CKD',
          perspectives: [
            'Previously contraindicated in eGFR <30 due to lactic acidosis risk',
            'Recent data suggest safety down to eGFR 30; FDA label changed',
            'Some experts argue for use even in Stage 4 with monitoring',
            'Benefits of glycemic control vs theoretical risk of acidosis',
          ],
        },
        {
          topic: 'Proteinuria Targeting',
          perspectives: [
            'KDIGO suggests urine ACR >30 mg/g is abnormal',
            'Some argue for lower thresholds (<10 mg/g) in high-risk patients',
            'Dipstick protein has poor sensitivity for microalbuminuria',
            'ACR variability: Single elevated value may not indicate true pathology',
          ],
        },
      ],
      
      statisticalContext: `Clinical trial outcomes in CKD:
- CREDENCE (canagliflozin): 30% RRR in composite renal endpoint (ESRD, doubling creatinine, renal death)
- DAPA-CKD (dapagliflozin): 39% RRR in primary endpoint, benefit extended to non-diabetic CKD
- FIDELIO-DKD (finerenone): 18% RRR in CKD progression, 14% RRR in CV events
- SONAR (atrasentan): 35% reduction in renal composite but increased edema/discontinuation

Predictive models:
- KFRE (Kidney Failure Risk Equation): 2-year and 5-year ESRD risk prediction using age, sex, eGFR, ACR
- Discrimination (C-statistic): ~0.90 for 2-year risk, ~0.85 for 5-year risk
- Validated across diverse populations; used for transplant referral timing`,
      
      references: [
        'Perkovic V, et al. Canagliflozin and Renal Outcomes in Type 2 Diabetes and Nephropathy. N Engl J Med. 2019;380(24):2295-2306.',
        'Bakris GL, et al. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes. N Engl J Med. 2020;383(23):2219-2229.',
        'Tuttle KR, et al. Molecular mechanisms and therapeutic targets for diabetic kidney disease. Kidney Int. 2022;102(2):248-260.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `Clinical management of CKD requires systematic evaluation for etiology, staging by KDIGO criteria (GFR + albuminuria heat map), and complication management. Key interventions include blood pressure control (ACEi/ARB as first-line, target <130/80), SGLT2 inhibitors for diabetic/albuminuric CKD, statins for cardiovascular risk reduction, and avoidance of nephrotoxins. Complications requiring attention include anemia (ESA when Hgb <10, iron repletion), mineral bone disorder (phosphate binders, vitamin D, calcimimetics), metabolic acidosis (sodium bicarbonate), and hyperkalemia. Preparation for renal replacement therapy should begin when eGFR <30, with education about dialysis modalities (in-center HD, home HD, PD) and transplant evaluation.`,
      
      clinicalApproach: [
        'Accurate staging: Use KDIGO heat map combining GFR (G1-G5) and albuminuria (A1-A3) categories',
        'Etiology workup: Urinalysis, renal ultrasound, serologies (ANA, complements, hepatitis, HIV), possible biopsy',
        'Blood pressure: ACEi/ARB first-line for albuminuria; target <130/80; add CCB, thiazide, MRA as needed',
        'Glycemic control: Target HbA1c ~7%; SGLT2 inhibitors for eGFR >20; GLP-1 RA for CV protection',
        'Nephrotoxin avoidance: NSAIDs, IV contrast (with caution), aminoglycosides, PPIs',
        'Cardiovascular risk: Statins for age >50; aspirin for secondary prevention only',
        'Complication management: Anemia (ESA, iron), bone disease (binders, vitamin D), acidosis (bicarbonate), potassium',
        'RRT preparation: Education at eGFR <30; access planning (fistula 6+ months before HD; PD catheter 2+ weeks before PD)',
      ],
      
      differentialConsiderations: [
        'Primary glomerular diseases: Minimal change, FSGS, membranous, IgA nephropathy, membranoproliferative GN',
        'Systemic diseases with renal involvement: Diabetes, hypertension, SLE, vasculitis, amyloidosis, multiple myeloma',
        'Vascular causes: Renovascular disease (atherosclerotic, FMD), atheroembolic disease, hypertensive nephrosclerosis',
        'Tubulointerstitial diseases: Chronic pyelonephritis, obstructive uropathy, analgesic nephropathy',
        'Hereditary diseases: ADPKD, Alport syndrome, Fabry disease, APOL1-associated nephropathy',
        'Infections: Chronic hepatitis B/C, HIV-associated nephropathy',
        'Drugs/toxins: NSAIDs, lithium, calcineurin inhibitors, heavy metals, Chinese herbs',
      ],
      
      guidelines: [
        'KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150.',
        'KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022;102(5):974-999.',
        'KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD). Kidney Int Suppl. 2017;7(1):1-59.',
        'KDOQI US Commentary on the 2012 KDIGO Clinical Practice Guideline for the Evaluation and Management of CKD. Am J Kidney Dis. 2014;63(5):713-735.',
      ],
      
      caseExamples: [
        {
          presentation: '62-year-old male with type 2 diabetes (HbA1c 8.2%), hypertension, BMI 32. eGFR 42, urine ACR 285 mg/g. BP 148/92 on lisinopril 10mg, amlodipine 5mg.',
          keyFindings: [
            'Stage 3b CKD (G3bA3) - high risk for progression',
            'Significant albuminuria (A3 = severely increased)',
            'Suboptimal BP control on current regimen',
            'Diabetic nephropathy most likely etiology',
          ],
          teachingPoints: [
            'Increase lisinopril to 20mg or add ARB if already on max ACEi; monitor K+ and creatinine',
            'Start SGLT2 inhibitor (empagliflozin or dapagliflozin) - reduces CKD progression independent of glucose',
            'Tighten glycemic control: Target HbA1c ~7%',
            'Add high-intensity statin (atorvastatin 40-80mg) for CV risk reduction',
            'Screen for complications: Hgb (anemia), PTH/phosphate (bone disease), bicarbonate (acidosis)',
            'Refer to nephrology for high-risk CKD (A3 + G3b)',
            'Patient education: Low sodium diet, avoid NSAIDs, smoking cessation',
          ],
        },
        {
          presentation: '45-year-old African American female, BP 168/104, eGFR 28, urine ACR 12 mg/g. No diabetes. Family history of kidney disease.',
          keyFindings: [
            'Stage 4 CKD (G4A2) without diabetes',
            'Disproportionate hypertension for degree of CKD',
            'Family history suggests hereditary or APOL1-associated disease',
            'Relatively low albuminuria for advanced CKD',
          ],
          teachingPoints: [
            'Assess for APOL1 high-risk genotype - explains much of excess CKD in African ancestry',
            'Renal ultrasound: Size, echogenicity, rule out obstruction; consider biopsy if size preserved',
            'Aggressive BP control: Target <130/80; ACEi/ARB + CCB + thiazide + MRA if needed',
            'Stage 4: Prepare for renal replacement therapy - patient education, transplant evaluation',
            'Vascular access planning: Refer for fistula evaluation when eGFR 15-20',
            'Screen for secondary causes: Serologies (ANA, complements, hepatitis C), SPEP/UPEP',
            'Complication management: Anemia (ESA likely needed), bone disease, acidosis',
          ],
        },
      ],
      
      references: [
        'KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150.',
        'Bakris GL, et al. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes. N Engl J Med. 2020;383(23):2219-2229.',
        'Heerspink HJL, et al. Dapagliflozin in Patients with Chronic Kidney Disease. N Engl J Med. 2020;383(15):1436-1446.',
        'Tangri N, et al. A predictive model for progression of chronic kidney disease to kidney failure. JAMA. 2011;305(15):1553-1559.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'kidneys', focus: 'nephrons', description: 'Millions of nephrons filter blood; damage occurs at glomerular and tubular levels' },
      { structure: 'kidneys', focus: 'glomerulus', description: 'Filtering unit where diabetes and hypertension cause initial damage' },
      { structure: 'kidneys', focus: 'renal-arteries', description: 'Renal artery stenosis can cause secondary hypertension and CKD' },
      { structure: 'bladder', focus: 'outlet', description: 'Obstruction from prostate disease can cause obstructive uropathy and CKD' },
    ],
    
    relatedLabs: [
      'comprehensive-metabolic-panel',
      'urine-albumin-creatinine-ratio',
      'cystatin-c',
      'hemoglobin',
      'parathyroid-hormone',
      'phosphorus',
      'vitamin-d',
    ],
    
    relatedMedications: [
      'ace-inhibitors',
      'arbs',
      'sglt2-inhibitors',
      'statins',
      'esa-epoetin',
      'phosphate-binders',
      'calcimimetics',
    ],
    
    relatedConditions: [
      'diabetes-mellitus',
      'hypertension',
      'cardiovascular-disease',
      'anemia-of-ckd',
      'secondary-hyperparathyroidism',
      'metabolic-acidosis',
    ],
    
    calculators: [
      {
        name: 'eGFR Calculator (CKD-EPI 2021)',
        inputs: [
          { name: 'creatinine', unit: 'mg/dL', type: 'number' },
          { name: 'age', unit: 'years', type: 'number' },
          { name: 'sex', type: 'select', options: ['male', 'female'] },
        ],
        formula: 'CKD-EPI 2021 equation without race coefficient',
        interpretation: 'G1 (≥90), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29), G5 (<15)',
      },
      {
        name: 'Albumin-to-Creatinine Ratio',
        inputs: [
          { name: 'urineAlbumin', unit: 'mg/L', type: 'number' },
          { name: 'urineCreatinine', unit: 'mg/dL', type: 'number' },
        ],
        formula: 'ACR = (albumin mg/L) / (creatinine mg/dL) × 100',
        interpretation: 'A1 (<30 mg/g, normal-mildly increased), A2 (30-300, moderately increased), A3 (>300, severely increased)',
      },
      {
        name: 'Kidney Failure Risk Equation (KFRE)',
        inputs: [
          { name: 'age', unit: 'years', type: 'number' },
          { name: 'sex', type: 'select', options: ['male', 'female'] },
          { name: 'eGFR', unit: 'mL/min/1.73m²', type: 'number' },
          { name: 'ACR', unit: 'mg/g', type: 'number' },
        ],
        formula: 'Proprietary 4-variable equation using age, sex, eGFR, ACR',
        interpretation: '2-year and 5-year probability of kidney failure requiring dialysis or transplant',
      },
    ],
  },
  
  quiz: {
    title: 'Chronic Kidney Disease Knowledge Check',
    questions: [
      {
        id: 'ckd-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What is the main job of your kidneys?',
        options: [
          'Produce insulin for blood sugar control',
          'Filter waste from blood and make urine',
          'Pump blood to the body',
          'Digest food and absorb nutrients',
        ],
        correctAnswer: 1,
        explanation: 'Kidneys filter waste products from your blood and remove them as urine. They also help control blood pressure and make hormones.',
      },
      {
        id: 'ckd-q2',
        type: 'multiple-choice',
        complexity: 3,
        question: 'According to KDIGO guidelines, how is CKD staged?',
        options: [
          'By symptoms alone',
          'By GFR (G1-G5) and albuminuria (A1-A3) categories',
          'By cause of kidney disease only',
          'By duration of illness',
        ],
        correctAnswer: 1,
        explanation: 'KDIGO uses a "heat map" combining GFR categories (G1-G5) with albuminuria categories (A1-A3) to assess risk and guide management.',
      },
      {
        id: 'ckd-q3',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which medication class has shown kidney-protective benefits beyond blood pressure lowering in diabetic CKD?',
        options: [
          'Beta-blockers',
          'ACE inhibitors and ARBs',
          'Calcium channel blockers',
          'Diuretics',
        ],
        correctAnswer: 1,
        explanation: 'ACE inhibitors and ARBs reduce intraglomerular pressure, decrease proteinuria, and slow CKD progression independent of blood pressure effects.',
      },
      {
        id: 'ckd-q4',
        type: 'multiple-choice',
        complexity: 5,
        question: 'Which novel therapeutic agent demonstrated benefit in the CREDENCE trial for reducing CKD progression in type 2 diabetes?',
        options: [
          'Spironolactone',
          'Canagliflozin (SGLT2 inhibitor)',
          'Atorvastatin',
          'Epoetin alfa',
        ],
        correctAnswer: 1,
        explanation: 'The CREDENCE trial showed canagliflozin reduced the composite renal endpoint by 30% and was the first SGLT2 inhibitor trial stopped early for efficacy in CKD.',
      },
      {
        id: 'ckd-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A 58-year-old patient with diabetic nephropathy has eGFR 35 mL/min/1.73m² and urine ACR 420 mg/g. According to KDIGO guidelines, what is the appropriate BP target?',
        options: [
          '<140/90 mmHg',
          '<130/80 mmHg',
          '<120/70 mmHg',
          'Any reduction from baseline is acceptable',
        ],
        correctAnswer: 1,
        explanation: 'KDIGO guidelines recommend BP target <130/80 mmHg for CKD patients, especially those with albuminuria. This patient has Stage 3b CKD (G3b) with severely increased albuminuria (A3), placing them at high risk for progression.',
      },
    ],
    passingScore: 80,
  },
  
  references: [
    {
      citation: 'KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150.',
      doi: '10.1038/kisup.2012.76',
    },
    {
      citation: 'Levey AS, et al. Change in Albuminuria and GFR as End Points for Clinical Trials in Early Stages of CKD: A Scientific Workshop Sponsored by the National Kidney Foundation in Collaboration With the US Food and Drug Administration and European Medicines Agency. Am J Kidney Dis. 2020;75(1):84-104.',
      doi: '10.1053/j.ajkd.2019.07.010',
    },
    {
      citation: 'Perkovic V, et al. Canagliflozin and Renal Outcomes in Type 2 Diabetes and Nephropathy. N Engl J Med. 2019;380(24):2295-2306.',
      doi: '10.1056/NEJMoa1811744',
    },
    {
      citation: 'Heerspink HJL, et al. Dapagliflozin in Patients with Chronic Kidney Disease. N Engl J Med. 2020;383(15):1436-1446.',
      doi: '10.1056/NEJMoa2024816',
    },
    {
      citation: 'Bakris GL, et al. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes. N Engl J Med. 2020;383(23):2219-2229.',
      doi: '10.1056/NEJMoa2025845',
    },
    {
      citation: 'Tangri N, et al. A predictive model for progression of chronic kidney disease to kidney failure. JAMA. 2011;305(15):1553-1559.',
      doi: '10.1001/jama.2011.451',
    },
  ],
  
  resources: [
    {
      title: 'National Kidney Foundation',
      type: 'website',
      url: 'https://www.kidney.org/',
      description: 'Patient education, CKD diet resources, and support groups',
    },
    {
      title: 'KDIGO Guidelines',
      type: 'website',
      url: 'https://kdigo.org/guidelines/',
      description: 'Evidence-based clinical practice guidelines for kidney disease',
    },
    {
      title: 'Life Options',
      type: 'website',
      url: 'https://lifeoptions.org/',
      description: 'Educational resources for kidney patients and professionals',
    },
  ],
};

export default ckdComprehensiveModule;
