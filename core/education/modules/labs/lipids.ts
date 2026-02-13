/**
 * Lipid Panel (Cholesterol) Interpretation Educational Module
 * 
 * Learn to understand your lipid panel results and cardiovascular risk assessment.
 */

import type { EducationalModule } from '../../types.js';

export const lipidsModule: EducationalModule = {
  id: 'lab-lipids-interpretation',
  type: 'clinical-application',
  specialty: 'cardiology',

  title: 'Understanding Your Lipid Panel (Cholesterol)',
  description: 'Learn what total cholesterol, LDL, HDL, and triglycerides mean, how they affect heart health, and how to interpret your cardiovascular risk. Based on lipidology and cardiology training materials.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',

  prerequisites: [
    'blood-basics',
    'cardiovascular-system-basics',
  ],

  learningObjectives: [
    'Understand what each lipid value measures and why it matters',
    'Learn the difference between "good" and "bad" cholesterol',
    'Recognize optimal vs standard ranges for cardiovascular health',
    'Understand how lipids relate to heart disease and stroke risk',
    'Know when treatment is needed and what follow-up tests help',
  ],

  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '40 minutes',
    5: '55 minutes',
    6: '75 minutes',
  },

  content: {
    // Level 1: Foundation
    1: {
      summary: `A lipid panel (cholesterol test) measures different types of fats in your blood. Think of your bloodstream like a highway, and cholesterol like cargo being transported in trucks. Some trucks (HDL) clean up extra cargo and take it back to the warehouse. Other trucks (LDL) deliver cargo but can crash and cause traffic jams in your arteries. Too many crashes can block the highway, leading to heart attacks and strokes.`,

      analogy: `Imagine your blood vessels are highways and cholesterol is cargo being moved by delivery trucks:

🚛 LDL = "Lazy Delivery Trucks" (bad when too many)
- Drop off cholesterol at your cells
- Too many trucks crash into artery walls
- Crashes cause roadblocks (plaques)
- Can block blood flow to heart and brain

🚚 HDL = "Helpful Cleanup Crew" (good)
- Pick up extra cholesterol
- Take it back to the liver for disposal
- Clean up crashes and debris
- The more, the better

⛽ TRIGLYCERIDES = Fuel tank reserves
- Store energy for later use
- Too much = clogged fuel lines
- High levels increase heart risk`,

      keyPoints: [
        'Total cholesterol is the sum of all cholesterol types in your blood',
        'LDL is the "bad" cholesterol - lower is better for your heart',
        'HDL is the "good" cholesterol - higher is better',
        'Triglycerides are another type of blood fat - high levels increase heart risk',
        'High cholesterol usually has no symptoms - testing is important',
        'Diet, exercise, and sometimes medication can improve your numbers',
      ],

      visualAid: 'lipid-transport-diagram',
    },

    // Level 2: Developing
    2: {
      summary: `The lipid panel measures four key components: Total Cholesterol (the sum of all cholesterol), LDL Cholesterol (low-density lipoprotein, often called "bad" cholesterol), HDL Cholesterol (high-density lipoprotein, often called "good" cholesterol), and Triglycerides (storage form of fat). Each has specific reference ranges. LDL transports cholesterol to cells but can deposit excess in artery walls. HDL removes cholesterol from circulation. Triglycerides store energy but high levels correlate with cardiovascular risk.`,

      keyConcepts: [
        {
          term: 'Total Cholesterol',
          explanation: 'The overall amount of cholesterol in your blood. Normal is under 200 mg/dL.',
        },
        {
          term: 'LDL Cholesterol',
          explanation: 'Low-Density Lipoprotein. The main carrier of cholesterol in blood. High levels cause plaque buildup.',
        },
        {
          term: 'HDL Cholesterol',
          explanation: 'High-Density Lipoprotein. "Good" cholesterol that carries excess cholesterol back to the liver.',
        },
        {
          term: 'Triglycerides',
          explanation: 'A type of blood fat used for energy. High levels increase heart disease risk.',
        },
        {
          term: 'Atherosclerosis',
          explanation: 'Hardening of arteries from cholesterol plaque buildup.',
        },
      ],

      keyPoints: [
        'Desirable LDL: Less than 100 mg/dL (optimal: less than 70 for high-risk patients)',
        'Desirable HDL: 60 mg/dL or higher (protective against heart disease)',
        'Desirable triglycerides: Less than 150 mg/dL',
        'Borderline high total cholesterol: 200-239 mg/dL',
        'High total cholesterol: 240 mg/dL and above',
        'High LDL increases risk of heart attack and stroke',
        'Low HDL is also a risk factor for heart disease',
      ],

      howItWorks: `1. You eat foods containing fats and cholesterol
2. Your liver produces cholesterol for hormone and cell membrane production
3. LDL transports cholesterol to your cells
4. Excess LDL can penetrate artery walls and form plaques
5. HDL scavenges excess cholesterol and returns it to the liver
6. Triglycerides are stored in fat cells for energy
7. High triglycerides can also contribute to artery damage
8. Blood test measures all these levels after 9-12 hours fasting`,
    },

    // Level 3: Standard
    3: {
      summary: `Lipid metabolism involves complex interplay between dietary intake, hepatic synthesis, and peripheral tissue utilization. The lipid panel provides essential data for cardiovascular risk stratification. LDL particles vary in size and density; small dense LDL is more atherogenic. HDL functionality matters more than absolute quantity—dysfunctional HDL may lose its protective effects. Triglyceride elevation often reflects insulin resistance, excessive carbohydrate intake, alcohol consumption, or genetic factors. Non-HDL cholesterol (total minus HDL) and the total/HDL ratio provide additional risk assessment metrics.`,

      mechanisms: [
        {
          name: 'LDL and Atherogenesis',
          description: 'LDL penetrates damaged endothelium, becomes oxidized, and triggers inflammatory response. Macrophages engulf oxidized LDL, becoming foam cells—the building blocks of fatty streaks and plaques.',
        },
        {
          name: 'HDL Reverse Cholesterol Transport',
          description: 'HDL accepts cholesterol from peripheral cells and macrophages via ABCA1 transporters. LCAT esterifies cholesterol for core storage. CETP transfers cholesteryl esters to apoB-containing lipoproteins. SR-B1 mediates selective uptake by liver.',
        },
        {
          name: 'Triglyceride Metabolism',
          description: 'Dietary triglycerides packaged into chylomicrons. Endogenous triglycerides synthesized in liver and packaged into VLDL. Lipoprotein lipase hydrolyzes triglycerides for tissue uptake. Remnants cleared by hepatic receptors.',
        },
        {
          name: 'Cholesterol Homeostasis',
          description: 'HMG-CoA reductase rate-limits cholesterol synthesis. Intake suppresses synthesis via SREBP pathway. Bile acid excretion and steroid hormone production are elimination pathways.',
        },
      ],

      clinicalCorrelates: [
        'LDL > 190 mg/dL: Consider familial hypercholesterolemia',
        'HDL < 40 mg/dL (men) or < 50 mg/dL (women): Increased cardiovascular risk',
        'Triglycerides > 500 mg/dL: Risk of pancreatitis',
        'High triglycerides + low HDL + small dense LDL: Metabolic syndrome pattern',
        'Non-HDL cholesterol > 130 mg/dL: Reflects total atherogenic burden',
        'Total/HDL ratio > 5: Higher cardiovascular risk',
      ],

      normalVsAbnormal: {
        normal: 'LDL < 100 mg/dL, HDL ≥ 60 mg/dL, triglycerides < 150 mg/dL. Lipoproteins efficiently transport lipids without excessive deposition in arteries.',
        abnormal: 'LDL elevated, HDL low, triglycerides high, or combination. Pattern suggests increased atherosclerotic risk. May indicate metabolic syndrome, insulin resistance, or genetic dyslipidemia.',
        whyItMatters: 'Dyslipidemia is a primary modifiable risk factor for coronary artery disease, stroke, and peripheral vascular disease. Each 40 mg/dL reduction in LDL reduces cardiovascular events by ~20-25%.',
      },
    },

    // Level 4: Advanced
    4: {
      summary: `Contemporary lipidology extends beyond standard lipid panel parameters. LDL particle number (LDL-P) measured by nuclear magnetic resonance (NMR) or vertical auto profile (VAP) predicts risk better than LDL-C when discordant (elevated LDL-P with normal LDL-C). Lipoprotein(a) [Lp(a)] is an independent genetic risk factor—each 50 mg/dL increase increases cardiovascular risk by ~30%. Apolipoprotein B (apoB) represents total atherogenic particle number (one per LDL, VLDL, IDL, Lp(a) particle). Triglyceride-rich remnant lipoproteins contribute to atherogenesis independent of LDL-C levels.`,

      molecularMechanisms: [
        {
          pathway: 'LDL Particle Modification',
          defect: 'Oxidative modification of LDL phospholipids and apoB100',
          consequence: 'Recognition by scavenger receptors (SR-A, CD36) on macrophages → foam cell formation → fatty streak → complex plaque',
        },
        {
          pathway: 'HDL Dysfunction',
          defect: 'Inflammation oxidizes HDL lipids; myeloperoxidase modifies apoA-I',
          consequence: 'Impaired ABCA1-mediated cholesterol efflux; HDL becomes pro-inflammatory rather than anti-inflammatory',
        },
        {
          pathway: 'Lipoprotein(a) Pathogenicity',
          defect: 'Apo(a) structural similarity to plasminogen; kringle IV type 2 copy number variation determines Lp(a) levels',
          consequence: 'Competes with plasminogen binding; impaired fibrinolysis + pro-inflammatory oxidized phospholipid carriage',
        },
        {
          pathway: 'Insulin Resistance Effects',
          defect: 'Hepatic overproduction of VLDL; decreased lipoprotein lipase activity',
          consequence: 'Elevated triglycerides, decreased HDL, small dense LDL phenotype; delayed chylomicron clearance',
        },
      ],

      pathways: [
        {
          name: 'Cholesterol Synthesis',
          steps: [
            'Acetyl-CoA → Acetoacetyl-CoA → HMG-CoA (HMG-CoA synthase)',
            'HMG-CoA → Mevalonate (HMG-CoA reductase - rate limiting)',
            'Mevalonate → Isopentenyl pyrophosphate → Squalene',
            'Squalene cyclization → Lanosterol',
            'Multiple modifications → Cholesterol',
          ],
          regulation: 'SREBP-2 activation upregulates HMG-CoA reductase; statins competitively inhibit this enzyme',
        },
        {
          name: 'Reverse Cholesterol Transport',
          steps: [
            'ABCA1 transfers cellular cholesterol to lipid-poor apoA-I (pre-β-HDL)',
            'LCAT esterifies cholesterol on HDL surface',
            'CETP exchanges cholesteryl esters for triglycerides with apoB lipoproteins',
            'HDL triglycerides hydrolyzed by hepatic lipase',
            'SR-B1 mediates selective cholesteryl ester uptake by hepatocytes',
          ],
          regulation: 'LXR upregulates ABCA1; statins increase LXR expression; CETP inhibitors increase HDL-C',
        },
      ],

      references: [
        'Cromwell WC, et al. LDL particle number and risk of future cardiovascular disease in the Framingham Offspring Study. Am J Cardiol. 2007;99(7):933-939.',
        'Tsimikas S, et al. Lipoprotein(a) and its significance in cardiovascular disease. J Am Coll Cardiol. 2022;79(10):961-976.',
        'Khera AV, et al. Cholesterol efflux capacity, high-density lipoprotein function, and atherosclerosis. N Engl J Med. 2011;364(2):127-135.',
      ],
    },

    // Level 5: Expert
    5: {
      summary: `Precision lipid management increasingly incorporates polygenic risk scores (explaining ~15% of LDL variance) and Mendelian randomization data. PCSK9 inhibitors reduce cardiovascular events independent of baseline LDL, supporting "lower is better" paradigm. Inclisiran (siRNA against PCSK9) offers twice-yearly dosing. Emerging therapies targeting ANGPTL3 (evinacumab), APOC3 (volanesorsen), and Lp(a) (pelacarsen, olpasiran) address residual risk. Discordance analysis (when LDL-C and LDL-P differ) guides intensity of therapy—patients with high LDL-P despite acceptable LDL-C warrant more aggressive treatment. The "triglyceride paradox"—factors that raise triglycerides often raise risk even when triglycerides themselves are not causal—complicates interpretation.`,

      researchFrontiers: [
        'Lp(a) therapeutics: Pelacarsen (antisense) and olpasiran (siRNA) achieve >80% Lp(a) reduction; cardiovascular outcome trials ongoing',
        'Oral PCSK9 inhibitors: MK-0616 and others in development for improved adherence',
        'Gene editing: CRISPR-based approaches targeting PCSK9 or ANGPTL3 in early clinical trials',
        'Artificial intelligence: Deep learning models predicting cardiovascular risk from lipid subfractions better than traditional risk scores',
        'Gut microbiome: Trimethylamine N-oxide (TMAO) from dietary choline/carnitine correlates with cardiovascular risk independent of lipids',
        'HDL-targeted therapies: CETP inhibitors raise HDL-C substantially but cardiovascular benefit remains controversial',
      ],

      controversies: [
        {
          topic: 'LDL Targets - How Low?',
          perspectives: [
            'FOURIER, ODYSSEY: LDL < 20 achievable and beneficial without safety concerns',
            'Very low LDL: Potential neurocognitive effects, hemorrhagic stroke risk, but evidence mixed',
            'Cost-effectiveness: PCSK9 inhibitors initially expensive; prices dropped but access issues remain',
          ],
        },
        {
          topic: 'Triglyceride-Causality',
          perspectives: [
            'Mendelian randomization: Genetically elevated triglycerides increase MI risk; causality established',
            'REDUCE-IT: Icosapent ethyl reduced events beyond statin, but mineral oil control controversial',
            'PROMINENT: Pemafibrate lowered triglycerides but no cardiovascular benefit',
          ],
        },
        {
          topic: 'HDL Therapeutics',
          perspectives: [
            'HDL-C raising failed: Torcetrapib increased mortality; other CETP inhibitors neutral or modestly beneficial',
            'HDL functionality: Cholesterol efflux capacity predicts risk better than HDL-C',
            'ApoA-I Milano: Infusion therapy showed plaque regression but complex production',
          ],
        },
      ],

      statisticalContext: `GWAS has identified >300 loci affecting lipid levels. Polygenic risk scores for LDL-C:
- Top decile vs bottom decile: 3-fold increased CAD risk
- Clinical utility limited by modest predictive value (C-statistic improvement ~0.02)
- May guide statin intensity in borderline-risk patients

Residual risk after statin therapy:
- 70-80% reduction in LDL-C reduces events by ~30-35% (not 70-80%)
- Inflammation (hs-CRP), Lp(a), triglycerides contribute to residual risk
- Targeting multiple pathways may be needed for maximal risk reduction`,

      references: [
        'Sabatine MS, et al. Evolocumab and clinical outcomes in patients with cardiovascular disease. N Engl J Med. 2017;376(18):1713-1722.',
        'Nicholls SJ, et al. Effect of evolocumab on progression of coronary disease. JAMA. 2016;316(22):2373-2384.',
        'Bhatt DL, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia. N Engl J Med. 2019;380(1):11-22.',
      ],
    },

    // Level 6: Clinical
    6: {
      summary: `Clinical lipid management requires comprehensive risk assessment using ASCVD Risk Estimator Plus, identifying secondary causes of dyslipidemia, and individualizing treatment intensity. Statin therapy remains first-line for LDL reduction—high-intensity statins (atorvastatin 40-80mg, rosuvastatin 20-40mg) reduce LDL by ≥50%. Ezetimibe inhibits intestinal cholesterol absorption and provides incremental benefit. PCSK9 inhibitors are indicated for familial hypercholesterolemia or ASCVD with inadequate response to maximally tolerated statin. For severe hypertriglyceridemia (TG > 500 mg/dL), immediate risk is pancreatitis—implement very low-fat diet, eliminate alcohol, consider fibrates and omega-3 fatty acids.`,

      clinicalApproach: [
        'Calculate 10-year ASCVD risk: guides intensity of therapy (statin benefit groups)',
        'Identify secondary causes: Hypothyroidism, nephrotic syndrome, cholestasis, medications (thiazides, steroids, antipsychotics)',
        'Assess for familial hypercholesterolemia: LDL > 190, tendon xanthomas, family history of premature CAD',
        'Measure Lp(a) once in lifetime: informs lifetime risk; levels largely genetic and stable',
        'Lifestyle foundation: Mediterranean/DASH diet, weight management, exercise, smoking cessation',
        'Pharmacotherapy: Statins first-line; add ezetimibe if needed; consider PCSK9 inhibitors for very high risk',
      ],

      differentialConsiderations: [
        'Familial hypercholesterolemia (FH): LDL > 190 mg/dL, xanthomas, corneal arcus, family history. Autosomal dominant LDLR, APOB, or PCSK9 variants. Cascade screening indicated.',
        'Familial combined hyperlipidemia: Common (1 in 100), variable presentation with elevated cholesterol and/or triglycerides. APOB overproduction.',
        'Dysbetalipoproteinemia (Type III): Elevated cholesterol and triglycerides, palmar xanthomas. APOE2/E2 genotype with secondary factors.',
        'Familial hypertriglyceridemia: TG > 500 mg/dL, risk of pancreatitis. LPL or APOC2 variants.',
        'Secondary causes: Hypothyroidism (↑LDL), diabetes (↑TG, ↓HDL), nephrotic syndrome (↑LDL, ↑TG), Cushing syndrome (↑TG), cholestasis (↑cholesterol), medications.',
      ],

      guidelines: [
        'Grundy SM, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143.',
        'Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2020;41(1):111-188.',
        'Orringer CE, et al. National Lipid Association Scientific Statement on the use of icosapent ethyl in statin-treated patients with elevated triglycerides and high or very high ASCVD risk. J Clin Lipidol. 2023;17(3):272-285.',
      ],

      caseExamples: [
        {
          presentation: '45-year-old male, BP 138/86, non-smoker. Father had MI at age 48. Lipids: Total 284, LDL 198, HDL 42, TG 220.',
          keyFindings: [
            'LDL 198 mg/dL (>190 threshold for concern about FH)',
            'Family history of premature CAD',
            '10-year ASCVD risk: 8.3% (intermediate)',
          ],
          teachingPoints: [
            'Suspect familial hypercholesterolemia with LDL > 190 + family history',
            'High-intensity statin indicated regardless of calculated risk',
            'Start atorvastatin 40mg or rosuvastatin 20mg',
            'Add ezetimibe if LDL not reduced by ≥50% or still >100',
            'Refer to lipid specialist; consider PCSK9 inhibitor if needed',
            'Cascade screening for first-degree relatives',
          ],
        },
        {
          presentation: '52-year-old female, history of diabetes and MI 2 years ago. On atorvastatin 40mg. Lipids: LDL 92, HDL 48, TG 340.',
          keyFindings: [
            'Established ASCVD (secondary prevention)',
            'LDL 92 mg/dL on moderate-high intensity statin',
            'Triglycerides elevated at 340 mg/dL',
            'Goal LDL < 70 for very high risk ASCVD',
          ],
          teachingPoints: [
            'Intensify statin to maximum tolerated (atorvastatin 80mg or rosuvastatin 20-40mg)',
            'Add ezetimibe 10mg if LDL still above goal',
            'For elevated TG on statin: Consider icosapent ethyl 4g daily (REDUCE-IT benefit)',
            'Address secondary factors: Glycemic control, alcohol, weight',
            'Consider fenofibrate if TG > 500 mg/dL (pancreatitis risk)',
          ],
        },
      ],

      references: [
        'Stone NJ, et al. 2013 ACC/AHA Guideline on the Treatment of Blood Cholesterol to Reduce Atherosclerotic Cardiovascular Risk in Adults. J Am Coll Cardiol. 2014;63(25 Pt B):2889-2934.',
        'Raal FJ, et al. Evinacumab for homozygous familial hypercholesterolemia. N Engl J Med. 2020;383(8):711-720.',
        'Goldberg AC, et al. Familial hypercholesterolemia: Screening, diagnosis and management of pediatric and adult patients. J Clin Lipidol. 2011;5(3):133-140.',
      ],
    },
  },

  interactions: {
    anatomyPoints: [
      { structure: 'heart', focus: 'coronary-arteries', description: 'LDL deposits in coronary arteries cause atherosclerosis leading to angina and heart attack' },
      { structure: 'arteries', focus: 'carotid', description: 'Carotid artery plaque can lead to stroke' },
      { structure: 'liver', focus: 'hepatocytes', description: 'Primary site of cholesterol synthesis and HDL-mediated reverse cholesterol transport' },
      { structure: 'intestine', focus: 'small-intestine', description: 'Site of dietary cholesterol absorption; ezetimibe acts here' },
      { structure: 'pancreas', focus: 'exocrine', description: 'Severe hypertriglyceridemia can cause acute pancreatitis' },
    ],

    relatedLabs: [
      'lipid-panel',
      'lipoprotein-a',
      'apolipoprotein-b',
      'hs-crp',
      'thyroid-function',
      'fasting-glucose',
      'hba1c',
      'liver-function',
      'creatinine-kinase',
    ],

    relatedMedications: [
      'statins',
      'ezetimibe',
      'pcsk9-inhibitors',
      'bile-acid-sequestrants',
      'fibrates',
      'icosapent-ethyl',
      'niacin',
    ],

    relatedConditions: [
      'coronary-artery-disease',
      'myocardial-infarction',
      'stroke',
      'peripheral-artery-disease',
      'familial-hypercholesterolemia',
      'metabolic-syndrome',
      'diabetes-mellitus',
      'acute-pancreatitis',
    ],
  },

  quiz: {
    title: 'Test Your Understanding',
    questions: [
      // Level 1 Questions
      {
        id: 'lipids-q1-l1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'Which cholesterol is called the "good" cholesterol because it helps remove excess cholesterol from your blood?',
        options: [
          'LDL',
          'HDL',
          'Triglycerides',
          'Total cholesterol',
        ],
        correctAnswer: 1,
        explanation: 'HDL (High-Density Lipoprotein) is the "good" cholesterol. It scavenges excess cholesterol from tissues and artery walls and carries it back to the liver for disposal.',
      },
      {
        id: 'lipids-q2-l1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'Why is LDL called "bad" cholesterol?',
        options: [
          'It carries cholesterol away from cells',
          'It can deposit cholesterol in artery walls causing blockages',
          'It helps digest fat',
          'It stores energy',
        ],
        correctAnswer: 1,
        explanation: 'LDL (Low-Density Lipoprotein) carries cholesterol to cells but can deposit excess in artery walls, forming plaques that can lead to heart attacks and strokes.',
      },
      // Level 2 Questions
      {
        id: 'lipids-q3-l2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What is the desirable level for LDL cholesterol for most adults?',
        options: [
          'Less than 200 mg/dL',
          'Less than 160 mg/dL',
          'Less than 100 mg/dL',
          'Less than 70 mg/dL',
        ],
        correctAnswer: 2,
        explanation: 'For most adults, LDL cholesterol should be less than 100 mg/dL. For high-risk patients, the optimal goal is less than 70 mg/dL.',
      },
      {
        id: 'lipids-q4-l2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What triglyceride level is considered borderline high?',
        options: [
          'Below 150 mg/dL',
          '150-199 mg/dL',
          '200-499 mg/dL',
          'Above 500 mg/dL',
        ],
        correctAnswer: 1,
        explanation: 'Triglyceride levels of 150-199 mg/dL are considered borderline high. Levels above 200 mg/dL are high, and above 500 mg/dL pose a risk of pancreatitis.',
      },
      // Level 3 Questions
      {
        id: 'lipids-q5-l3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'What pattern characterizes the metabolic syndrome lipid profile?',
        options: [
          'High LDL, high HDL, low triglycerides',
          'Low LDL, low HDL, low triglycerides',
          'High triglycerides, low HDL, small dense LDL particles',
          'Normal triglycerides, high HDL, large buoyant LDL',
        ],
        correctAnswer: 2,
        explanation: 'Metabolic syndrome typically presents with elevated triglycerides, low HDL, and small dense LDL particles—a particularly atherogenic pattern associated with insulin resistance.',
      },
      {
        id: 'lipids-q6-l3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which of the following best describes reverse cholesterol transport?',
        options: [
          'LDL delivering cholesterol to peripheral tissues',
          'HDL removing cholesterol from macrophages and transporting it to the liver',
          'The liver synthesizing new cholesterol',
          'Cholesterol being converted to bile acids in the gallbladder',
        ],
        correctAnswer: 1,
        explanation: 'Reverse cholesterol transport is the process by which HDL accepts cholesterol from peripheral cells and macrophages and transports it back to the liver for excretion or recycling.',
      },
      // Level 4 Questions
      {
        id: 'lipids-q7-l4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What is the primary pathological process by which LDL contributes to atherosclerosis?',
        options: [
          'Direct activation of platelets',
          'Oxidative modification followed by scavenger receptor-mediated uptake by macrophages',
          'Inhibition of endothelial nitric oxide synthesis',
          'Direct damage to smooth muscle cells',
        ],
        correctAnswer: 1,
        explanation: 'LDL penetrates the endothelium, becomes oxidized, and is taken up by macrophages via scavenger receptors (SR-A and CD36). This unregulated uptake transforms macrophages into foam cells—the building blocks of fatty streaks.',
      },
      {
        id: 'lipids-q8-l4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which enzyme is the rate-limiting step in cholesterol synthesis and the target of statin medications?',
        options: [
          'Acetyl-CoA carboxylase',
          'HMG-CoA reductase',
          'CETP (Cholesteryl ester transfer protein)',
          'LCAT (Lecithin-cholesterol acyltransferase)',
        ],
        correctAnswer: 1,
        explanation: 'HMG-CoA reductase is the rate-limiting enzyme in cholesterol synthesis, converting HMG-CoA to mevalonate. Statins are competitive inhibitors of this enzyme.',
      },
      // Level 5 Questions
      {
        id: 'lipids-q9-l5',
        type: 'multiple-choice',
        complexity: 5,
        question: 'According to Mendelian randomization studies, which lipid parameter has the strongest causal relationship with cardiovascular disease?',
        options: [
          'HDL-C levels',
          'Triglyceride levels',
          'LDL-C levels and apoB-containing particles',
          'Lp(a) levels only',
        ],
        correctAnswer: 2,
        explanation: 'Mendelian randomization studies confirm that LDL-C and apoB-containing particles have a clear causal relationship with cardiovascular disease. While HDL-C and triglycerides correlate with risk, pharmacological interventions targeting them have shown inconsistent or null results.',
      },
      {
        id: 'lipids-q10-l5',
        type: 'multiple-choice',
        complexity: 5,
        question: 'What accounts for the "discordance" phenomenon where a patient has normal LDL-C but elevated cardiovascular risk?',
        options: [
          'Elevated HDL-C alone',
          'Elevated LDL particle number (LDL-P) with normal LDL-C concentration',
          'Low triglycerides alone',
          'Low apoB levels',
        ],
        correctAnswer: 1,
        explanation: 'Discordance occurs when LDL particle number (LDL-P) is elevated despite normal LDL-C. This happens when LDL particles are cholesterol-depleted (small dense LDL). LDL-P predicts cardiovascular risk better than LDL-C in discordant patients.',
      },
      // Level 6 Questions
      {
        id: 'lipids-q11-l6',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A 42-year-old male has an LDL of 205 mg/dL, family history of premature CAD in father (MI at age 45), and tendon xanthomas on exam. What is the most likely diagnosis and appropriate management?',
        options: [
          'Polygenic hypercholesterolemia; initiate low-intensity statin',
          'Familial hypercholesterolemia; high-intensity statin and consider PCSK9 inhibitor',
          'Secondary hyperlipidemia from hypothyroidism; treat thyroid disease only',
          'Combined hyperlipidemia; initiate fibrate therapy',
        ],
        correctAnswer: 1,
        explanation: 'This presentation (LDL > 190, tendon xanthomas, family history of premature CAD) is classic for heterozygous familial hypercholesterolemia. Management requires high-intensity statin therapy, addition of ezetimibe if needed, and consideration of PCSK9 inhibitors. Cascade screening of first-degree relatives is essential.',
      },
      {
        id: 'lipids-q12-l6',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A patient with established ASCVD is on high-intensity statin with LDL 82 mg/dL and triglycerides 385 mg/dL. According to current guidelines, what is the most appropriate next step?',
        options: [
          'Continue current therapy; LDL goal achieved',
          'Add ezetimibe to further lower LDL',
          'Add icosapent ethyl 4g daily for cardiovascular risk reduction',
          'Switch to PCSK9 inhibitor monotherapy',
        ],
        correctAnswer: 2,
        explanation: 'In patients with ASCVD on statins with TG 135-499 mg/dL, the REDUCE-IT trial demonstrated cardiovascular benefit with icosapent ethyl 4g daily. While ezetimibe could further lower LDL, the elevated triglycerides represent a residual risk that icosapent ethyl specifically addresses.',
      },
    ],
    passingScore: 80,
  },

  references: [
    {
      citation: 'Grundy SM, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143.',
      doi: '10.1161/CIR.0000000000000625',
    },
    {
      citation: 'Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2020;41(1):111-188.',
    },
    {
      citation: 'Cromwell WC, et al. LDL particle number and risk of future cardiovascular disease in the Framingham Offspring Study. Am J Cardiol. 2007;99(7):933-939.',
    },
  ],

  resources: [
    {
      title: 'Understanding Cholesterol (AHA)',
      type: 'website',
      url: 'https://www.heart.org/en/health-topics/cholesterol',
      description: 'American Heart Association comprehensive guide to cholesterol',
    },
    {
      title: 'Familial Hypercholesterolemia Foundation',
      type: 'website',
      url: 'https://thefhfoundation.org',
      description: 'Patient resources and information about familial hypercholesterolemia',
    },
  ],
};

export default lipidsModule;
