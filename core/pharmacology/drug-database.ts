/**
 * Drug Database
 *
 * Educational content about medications - mechanisms, effects, and clinical use.
 * Attending physician-level pharmacology understanding.
 */

import type {
  DrugEducation,
  DrugClassEducation,
  DrugInteraction,
} from './types.js';

// ============================================
// Drug Classes
// ============================================

export const DRUG_CLASSES: DrugClassEducation[] = [
  {
    id: 'statins',
    name: 'HMG-CoA Reductase Inhibitors (Statins)',
    category: 'cardiovascular',

    overview: 'Statins are the most important class of cholesterol-lowering medications. They reduce LDL cholesterol by 30-50% and have revolutionized cardiovascular disease prevention. They also have anti-inflammatory ("pleiotropic") effects beyond cholesterol lowering.',

    sharedMechanism: 'Inhibit HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis in the liver. This reduces hepatic cholesterol, causing upregulation of LDL receptors and increased LDL clearance from blood.',

    target: 'HMG-CoA reductase enzyme in hepatocytes',
    prototypeDrug: 'Atorvastatin',

    members: [
      {
        name: 'Atorvastatin (Lipitor)',
        distinguishingFeatures: ['High potency', 'Long half-life', 'Can be taken any time of day'],
        advantagesOverClass: ['Most potent LDL reduction', 'Extensive outcome data'],
        disadvantagesOverClass: ['More drug interactions via CYP3A4'],
      },
      {
        name: 'Rosuvastatin (Crestor)',
        distinguishingFeatures: ['Highest potency', 'Hydrophilic', 'Less CYP metabolism'],
        advantagesOverClass: ['Fewer drug interactions', 'Greatest LDL lowering per mg'],
        disadvantagesOverClass: ['More expensive'],
      },
      {
        name: 'Simvastatin (Zocor)',
        distinguishingFeatures: ['Prodrug', 'Moderate potency', 'Generic available'],
        advantagesOverClass: ['Inexpensive', 'Long track record'],
        disadvantagesOverClass: ['Many drug interactions', 'Myopathy risk at high doses'],
      },
      {
        name: 'Pravastatin (Pravachol)',
        distinguishingFeatures: ['Hydrophilic', 'Not CYP metabolized'],
        advantagesOverClass: ['Fewest drug interactions', 'Safer with other medications'],
        disadvantagesOverClass: ['Lower potency'],
      },
    ],

    classEffects: [
      {
        effect: 'LDL Cholesterol Reduction',
        mechanism: 'Decreased hepatic synthesis, increased LDL receptor expression',
        universalToClass: true,
      },
      {
        effect: 'Anti-inflammatory Effects',
        mechanism: 'Reduced CRP, decreased plaque inflammation',
        universalToClass: true,
      },
      {
        effect: 'Myopathy Risk',
        mechanism: 'Interference with mitochondrial function, CoQ10 depletion',
        universalToClass: true,
        exceptions: ['Less common with hydrophilic statins'],
      },
      {
        effect: 'Hepatotoxicity (rare)',
        mechanism: 'Direct hepatocyte toxicity, immune-mediated',
        universalToClass: true,
      },
      {
        effect: 'Diabetes Risk (slight)',
        mechanism: 'Impaired insulin secretion and sensitivity',
        universalToClass: true,
      },
    ],

    classWarnings: [
      'Monitor liver enzymes before starting and if symptoms develop',
      'Risk of myopathy increases with dose, interactions, hypothyroidism',
      'Contraindicated in pregnancy (category X)',
      'Drug interactions especially with CYP3A4 inhibitors',
    ],

    clinicalNiche: 'First-line therapy for primary and secondary prevention of atherosclerotic cardiovascular disease. Indicated for anyone with ASCVD, LDL ≥190, diabetes age 40-75, or elevated 10-year CV risk.',

    memberComparison: [
      {
        property: 'LDL Reduction (high dose)',
        drugComparisons: [
          { drug: 'Rosuvastatin 40mg', value: '55-60%' },
          { drug: 'Atorvastatin 80mg', value: '50-55%' },
          { drug: 'Simvastatin 40mg', value: '35-40%' },
          { drug: 'Pravastatin 40mg', value: '30-35%' },
        ],
      },
      {
        property: 'Half-life',
        drugComparisons: [
          { drug: 'Rosuvastatin', value: '19 hours' },
          { drug: 'Atorvastatin', value: '14 hours' },
          { drug: 'Simvastatin', value: '3 hours' },
          { drug: 'Pravastatin', value: '2 hours' },
        ],
      },
      {
        property: 'Drug Interactions',
        drugComparisons: [
          { drug: 'Pravastatin', value: 'Fewest' },
          { drug: 'Rosuvastatin', value: 'Few' },
          { drug: 'Atorvastatin', value: 'Moderate (CYP3A4)' },
          { drug: 'Simvastatin', value: 'Many (CYP3A4)' },
        ],
      },
    ],
  },
  {
    id: 'ace-inhibitors',
    name: 'ACE Inhibitors',
    category: 'cardiovascular',

    overview: 'ACE inhibitors block the renin-angiotensin-aldosterone system (RAAS), reducing blood pressure and protecting the heart and kidneys. They are cornerstone therapy for hypertension, heart failure, and diabetic nephropathy.',

    sharedMechanism: 'Inhibit angiotensin-converting enzyme (ACE), preventing conversion of angiotensin I to angiotensin II. This causes vasodilation, reduced aldosterone, and decreased sympathetic activity. Also prevents bradykinin breakdown (causes cough).',

    target: 'Angiotensin-converting enzyme',
    prototypeDrug: 'Lisinopril',

    members: [
      {
        name: 'Lisinopril (Prinivil, Zestril)',
        distinguishingFeatures: ['Once daily', 'No hepatic metabolism', 'Active drug (not prodrug)'],
        advantagesOverClass: ['Simple dosing', 'Renal excretion only'],
        disadvantagesOverClass: ['Renal adjustment needed'],
      },
      {
        name: 'Enalapril (Vasotec)',
        distinguishingFeatures: ['Prodrug', 'Twice daily often needed', 'IV form available'],
        advantagesOverClass: ['IV option for acute settings'],
        disadvantagesOverClass: ['BID dosing'],
      },
      {
        name: 'Ramipril (Altace)',
        distinguishingFeatures: ['Best outcome data in high-risk patients (HOPE trial)'],
        advantagesOverClass: ['Proven mortality benefit'],
        disadvantagesOverClass: ['Usually BID dosing'],
      },
      {
        name: 'Captopril (Capoten)',
        distinguishingFeatures: ['Original ACE inhibitor', 'Short-acting', 'TID dosing'],
        advantagesOverClass: ['Rapid onset, useful for dosing titration'],
        disadvantagesOverClass: ['Multiple daily doses needed'],
      },
    ],

    classEffects: [
      {
        effect: 'Blood Pressure Reduction',
        mechanism: 'Vasodilation, reduced sodium retention',
        universalToClass: true,
      },
      {
        effect: 'Cardiac Remodeling Prevention',
        mechanism: 'Reduced angiotensin II effects on heart',
        universalToClass: true,
      },
      {
        effect: 'Renal Protection',
        mechanism: 'Reduced intraglomerular pressure, decreased proteinuria',
        universalToClass: true,
      },
      {
        effect: 'Dry Cough',
        mechanism: 'Bradykinin accumulation irritates airways',
        universalToClass: true,
      },
      {
        effect: 'Hyperkalemia Risk',
        mechanism: 'Reduced aldosterone decreases potassium excretion',
        universalToClass: true,
      },
      {
        effect: 'Angioedema (rare)',
        mechanism: 'Bradykinin-mediated',
        universalToClass: true,
      },
    ],

    classWarnings: [
      'Contraindicated in pregnancy (teratogenic)',
      'Risk of hyperkalemia - monitor potassium',
      'Can cause acute kidney injury if bilateral renal artery stenosis',
      'Do not combine with ARBs (no benefit, more harm)',
      'Angioedema more common in Black patients',
    ],

    clinicalNiche: 'First-line for hypertension (especially with diabetes or CKD), heart failure with reduced ejection fraction (HFrEF), post-MI, diabetic nephropathy. Mortality benefit in heart failure.',

    memberComparison: [],
  },
  {
    id: 'beta-blockers',
    name: 'Beta-Adrenergic Blockers',
    category: 'cardiovascular',

    overview: 'Beta-blockers reduce heart rate and blood pressure by blocking beta-adrenergic receptors. They are essential for heart failure, post-MI, arrhythmias, and hypertension. Different agents have varying selectivity and additional properties.',

    sharedMechanism: 'Block beta-adrenergic receptors, reducing effects of catecholamines (norepinephrine, epinephrine). β1 blockade: decreases heart rate, contractility, and renin release. β2 blockade: can cause bronchoconstriction and vasoconstriction.',

    target: 'Beta-adrenergic receptors (β1 and/or β2)',
    prototypeDrug: 'Metoprolol',

    members: [
      {
        name: 'Metoprolol (Lopressor, Toprol-XL)',
        distinguishingFeatures: ['β1 selective', 'Available as tartrate (short-acting) and succinate (extended-release)'],
        advantagesOverClass: ['Heart failure data (succinate)', 'Relatively safe in mild asthma'],
        disadvantagesOverClass: ['CYP2D6 metabolism (genetic variability)'],
      },
      {
        name: 'Carvedilol (Coreg)',
        distinguishingFeatures: ['Non-selective β-blocker + α1 blocker', 'Additional vasodilation'],
        advantagesOverClass: ['Strong heart failure data', 'Additional BP lowering from α-blockade'],
        disadvantagesOverClass: ['More hypotension', 'Avoid in asthma'],
      },
      {
        name: 'Bisoprolol (Zebeta)',
        distinguishingFeatures: ['Highly β1 selective', 'Once daily'],
        advantagesOverClass: ['Heart failure proven', 'Good for COPD patients'],
        disadvantagesOverClass: ['Less commonly used in US'],
      },
      {
        name: 'Atenolol (Tenormin)',
        distinguishingFeatures: ['β1 selective', 'Renally excreted', 'Hydrophilic'],
        advantagesOverClass: ['Inexpensive', 'Fewer CNS effects'],
        disadvantagesOverClass: ['Less effective for mortality in hypertension vs other drugs'],
      },
      {
        name: 'Propranolol (Inderal)',
        distinguishingFeatures: ['Non-selective', 'Lipophilic (crosses BBB)', 'Original beta-blocker'],
        advantagesOverClass: ['Effective for tremor, migraines, anxiety', 'Performance anxiety'],
        disadvantagesOverClass: ['Avoid in asthma', 'More CNS effects', 'Masks hypoglycemia symptoms'],
      },
    ],

    classEffects: [
      {
        effect: 'Heart Rate Reduction',
        mechanism: 'β1 blockade reduces SA node automaticity and AV conduction',
        universalToClass: true,
      },
      {
        effect: 'Blood Pressure Reduction',
        mechanism: 'Reduced cardiac output, renin inhibition',
        universalToClass: true,
      },
      {
        effect: 'Anti-ischemic Effect',
        mechanism: 'Reduced myocardial oxygen demand',
        universalToClass: true,
      },
      {
        effect: 'Fatigue',
        mechanism: 'Reduced cardiac output, CNS effects',
        universalToClass: true,
      },
      {
        effect: 'Bronchoconstriction',
        mechanism: 'β2 blockade in airways',
        universalToClass: true,
        exceptions: ['β1 selective agents safer in mild asthma/COPD'],
      },
      {
        effect: 'Masking Hypoglycemia',
        mechanism: 'β2 blockade prevents tachycardia and tremor warning signs',
        universalToClass: true,
        exceptions: ['β1 selective agents less problematic'],
      },
    ],

    classWarnings: [
      'Do not stop abruptly (rebound hypertension, angina)',
      'Caution in asthma/COPD (use β1 selective if needed)',
      'Can worsen heart failure if not already on therapy (start low, go slow)',
      'Masks hypoglycemia symptoms in diabetics',
      'Sexual dysfunction common',
    ],

    clinicalNiche: 'Essential for heart failure (carvedilol, metoprolol succinate, bisoprolol), post-MI (mortality benefit), arrhythmias (rate control), angina, hypertension. Also migraine prophylaxis, essential tremor, performance anxiety.',

    memberComparison: [
      {
        property: 'β1 Selectivity',
        drugComparisons: [
          { drug: 'Bisoprolol', value: 'Highest' },
          { drug: 'Metoprolol', value: 'High' },
          { drug: 'Atenolol', value: 'Moderate' },
          { drug: 'Carvedilol', value: 'None (non-selective)' },
          { drug: 'Propranolol', value: 'None (non-selective)' },
        ],
      },
      {
        property: 'Heart Failure Evidence',
        drugComparisons: [
          { drug: 'Carvedilol', value: 'Strong (COPERNICUS)' },
          { drug: 'Metoprolol succinate', value: 'Strong (MERIT-HF)' },
          { drug: 'Bisoprolol', value: 'Strong (CIBIS-II)' },
          { drug: 'Atenolol', value: 'Not recommended' },
        ],
      },
    ],
  },
  {
    id: 'ssris',
    name: 'Selective Serotonin Reuptake Inhibitors (SSRIs)',
    category: 'psychiatric',

    overview: 'SSRIs are first-line antidepressants that work by increasing serotonin in the brain. They treat depression, anxiety disorders, OCD, and other conditions. Generally well-tolerated compared to older antidepressants.',

    sharedMechanism: 'Selectively inhibit serotonin reuptake transporter (SERT) in presynaptic neurons, increasing serotonin availability in synaptic cleft. Downstream effects include receptor downregulation and neuroplasticity changes that take weeks to develop.',

    target: 'Serotonin reuptake transporter (SERT)',
    prototypeDrug: 'Sertraline',

    members: [
      {
        name: 'Sertraline (Zoloft)',
        distinguishingFeatures: ['Most evidence in cardiac patients', 'Activating vs sedating neutral'],
        advantagesOverClass: ['Safe post-MI', 'Broad indication range'],
        disadvantagesOverClass: ['GI side effects common initially'],
      },
      {
        name: 'Escitalopram (Lexapro)',
        distinguishingFeatures: ['Most selective SSRI', 'S-enantiomer of citalopram'],
        advantagesOverClass: ['Fewest drug interactions', 'Well tolerated'],
        disadvantagesOverClass: ['QT prolongation at higher doses'],
      },
      {
        name: 'Fluoxetine (Prozac)',
        distinguishingFeatures: ['Very long half-life (4-6 days)', 'Original SSRI', 'Activating'],
        advantagesOverClass: ['Weekly formulation available', 'Less withdrawal if missed doses'],
        disadvantagesOverClass: ['Many drug interactions (CYP2D6)', 'Takes longer to clear'],
      },
      {
        name: 'Paroxetine (Paxil)',
        distinguishingFeatures: ['Most anticholinergic', 'Sedating', 'Short half-life'],
        advantagesOverClass: ['Effective for anxiety'],
        disadvantagesOverClass: ['Weight gain', 'Worst withdrawal syndrome', 'Pregnancy category D'],
      },
      {
        name: 'Citalopram (Celexa)',
        distinguishingFeatures: ['Racemic mixture', 'QT prolongation concern at >40mg'],
        advantagesOverClass: ['Inexpensive'],
        disadvantagesOverClass: ['Dose cap of 40mg (20mg in elderly) due to QT'],
      },
    ],

    classEffects: [
      {
        effect: 'Antidepressant Effect',
        mechanism: 'Increased serotonin transmission, downstream neuroplasticity',
        universalToClass: true,
      },
      {
        effect: 'Anxiolytic Effect',
        mechanism: 'Serotonin modulation in anxiety circuits',
        universalToClass: true,
      },
      {
        effect: 'GI Side Effects',
        mechanism: 'Serotonin effects on gut (most serotonin receptors are in GI)',
        universalToClass: true,
      },
      {
        effect: 'Sexual Dysfunction',
        mechanism: 'Serotonin inhibition of dopamine and nitric oxide',
        universalToClass: true,
      },
      {
        effect: 'Bleeding Risk',
        mechanism: 'Reduced platelet serotonin (needed for aggregation)',
        universalToClass: true,
      },
      {
        effect: 'Discontinuation Syndrome',
        mechanism: 'Receptor readjustment when drug stopped',
        universalToClass: true,
        exceptions: ['Less with fluoxetine due to long half-life'],
      },
    ],

    classWarnings: [
      'Black box warning: increased suicidality in young adults (monitor closely first weeks)',
      'Serotonin syndrome risk with other serotonergic drugs',
      'Discontinuation syndrome if stopped abruptly',
      'Bleeding risk, especially with NSAIDs or anticoagulants',
      'Hyponatremia (SIADH), especially in elderly',
    ],

    clinicalNiche: 'First-line for major depression, generalized anxiety disorder, panic disorder, social anxiety, OCD, PTSD. Preferred over older antidepressants due to safety and tolerability.',

    memberComparison: [
      {
        property: 'Half-life',
        drugComparisons: [
          { drug: 'Fluoxetine', value: '4-6 days (plus active metabolite)' },
          { drug: 'Sertraline', value: '26 hours' },
          { drug: 'Citalopram', value: '35 hours' },
          { drug: 'Escitalopram', value: '27-32 hours' },
          { drug: 'Paroxetine', value: '21 hours' },
        ],
      },
      {
        property: 'Drug Interactions',
        drugComparisons: [
          { drug: 'Escitalopram', value: 'Fewest' },
          { drug: 'Sertraline', value: 'Few' },
          { drug: 'Citalopram', value: 'Few' },
          { drug: 'Fluoxetine', value: 'Many (CYP2D6 inhibitor)' },
          { drug: 'Paroxetine', value: 'Many (CYP2D6 inhibitor)' },
        ],
      },
    ],
  },
  {
    id: 'ppis',
    name: 'Proton Pump Inhibitors (PPIs)',
    category: 'gastrointestinal',

    overview: 'PPIs are the most effective acid-suppressing medications, reducing gastric acid secretion by 90-95%. They treat GERD, peptic ulcers, and are used for H. pylori eradication and NSAID prophylaxis.',

    sharedMechanism: 'Irreversibly inhibit H+/K+-ATPase (proton pump) on parietal cell surface. This is the final common pathway for acid secretion. Because inhibition is irreversible, effect lasts until new pumps are synthesized (1-2 days).',

    target: 'H+/K+-ATPase (proton pump) on gastric parietal cells',
    prototypeDrug: 'Omeprazole',

    members: [
      {
        name: 'Omeprazole (Prilosec)',
        distinguishingFeatures: ['Original PPI', 'OTC available', 'CYP2C19 metabolism'],
        advantagesOverClass: ['Inexpensive', 'Well-studied'],
        disadvantagesOverClass: ['Drug interactions (CYP2C19)'],
      },
      {
        name: 'Esomeprazole (Nexium)',
        distinguishingFeatures: ['S-enantiomer of omeprazole', 'Slightly longer-acting'],
        advantagesOverClass: ['Possibly more consistent acid control'],
        disadvantagesOverClass: ['More expensive, minimal clinical advantage'],
      },
      {
        name: 'Pantoprazole (Protonix)',
        distinguishingFeatures: ['IV form available', 'Fewer drug interactions'],
        advantagesOverClass: ['Good for ICU use', 'Less CYP interaction'],
        disadvantagesOverClass: ['Cost'],
      },
      {
        name: 'Lansoprazole (Prevacid)',
        distinguishingFeatures: ['Orally disintegrating tablet available'],
        advantagesOverClass: ['Good for patients who cant swallow pills'],
        disadvantagesOverClass: ['CYP2C19 interactions'],
      },
    ],

    classEffects: [
      {
        effect: 'Profound Acid Suppression',
        mechanism: 'Irreversible proton pump inhibition',
        universalToClass: true,
      },
      {
        effect: 'Hypergastrinemia',
        mechanism: 'Loss of acid feedback → increased gastrin secretion',
        universalToClass: true,
      },
      {
        effect: 'Reduced B12 Absorption',
        mechanism: 'Acid needed to release B12 from food',
        universalToClass: true,
      },
      {
        effect: 'Reduced Calcium/Magnesium Absorption',
        mechanism: 'Acid facilitates mineral absorption',
        universalToClass: true,
      },
      {
        effect: 'C. difficile Risk',
        mechanism: 'Loss of acid barrier to ingested organisms',
        universalToClass: true,
      },
    ],

    classWarnings: [
      'Use lowest effective dose for shortest duration needed',
      'Long-term use: fracture risk, hypomagnesemia, B12 deficiency, C. diff',
      'May reduce clopidogrel effectiveness (especially omeprazole)',
      'Rebound acid hypersecretion when stopping',
      'Possible association with dementia, CKD (observational data)',
    ],

    clinicalNiche: 'GERD, peptic ulcer disease, H. pylori eradication (with antibiotics), NSAID-induced ulcer prophylaxis, Zollinger-Ellison syndrome, stress ulcer prophylaxis in ICU.',

    memberComparison: [],
  },
];

// ============================================
// Individual Drug Examples
// ============================================

export const DRUGS: DrugEducation[] = [
  {
    id: 'metformin',
    genericName: 'Metformin',
    brandNames: ['Glucophage', 'Glumetza', 'Fortamet'],
    drugClass: 'Biguanide',
    category: 'endocrine',

    overview: 'Metformin is the first-line medication for type 2 diabetes. It works primarily by reducing glucose production in the liver and improving insulin sensitivity. It does not cause hypoglycemia when used alone and may help with weight loss.',

    mechanism: {
      type: 'enzyme-inhibitor',
      target: 'Mitochondrial complex I (indirectly activates AMPK)',
      targetLocation: 'Liver (primarily), muscle, fat',

      simpleExplanation: 'Metformin tells your liver to make less sugar and helps your body use insulin better. It\'s like turning down the sugar factory in your liver.',

      detailedMechanism: 'Metformin accumulates in hepatocytes where it inhibits mitochondrial respiratory chain complex I. This increases AMP:ATP ratio, activating AMPK (the cell\'s energy sensor). Activated AMPK suppresses gluconeogenesis and lipogenesis while increasing glucose uptake in muscle.',

      mechanismSteps: [
        {
          order: 1,
          location: 'Intestine',
          action: 'Absorbed from GI tract',
          result: 'Drug enters portal circulation to liver',
          timeframe: '2-3 hours to peak',
        },
        {
          order: 2,
          location: 'Hepatocyte mitochondria',
          action: 'Inhibits complex I of electron transport chain',
          result: 'Reduced ATP production, increased AMP:ATP ratio',
        },
        {
          order: 3,
          location: 'Hepatocyte cytoplasm',
          action: 'AMPK activated by increased AMP',
          result: 'Master metabolic regulator switched on',
        },
        {
          order: 4,
          location: 'Liver',
          action: 'AMPK inhibits gluconeogenic enzymes',
          result: 'Reduced glucose output from liver (main effect)',
        },
        {
          order: 5,
          location: 'Muscle',
          action: 'AMPK increases GLUT4 translocation',
          result: 'Improved glucose uptake',
        },
      ],

      physiologicalEffects: [
        {
          system: 'Hepatic',
          effect: 'Decreased gluconeogenesis',
          mechanism: 'AMPK inhibits CREB, reducing PEPCK and G6Pase',
          clinicalRelevance: 'Lowers fasting glucose',
          desiredOrAdverse: 'desired',
        },
        {
          system: 'Peripheral',
          effect: 'Improved insulin sensitivity',
          mechanism: 'Enhanced insulin signaling and GLUT4 trafficking',
          clinicalRelevance: 'Lowers postprandial glucose',
          desiredOrAdverse: 'desired',
        },
        {
          system: 'Gastrointestinal',
          effect: 'GI upset',
          mechanism: 'Serotonin release, altered bile acid metabolism',
          clinicalRelevance: 'Nausea, diarrhea common initially',
          desiredOrAdverse: 'adverse',
        },
        {
          system: 'Metabolic',
          effect: 'Weight neutral or slight loss',
          mechanism: 'Reduced appetite, altered gut hormones',
          clinicalRelevance: 'Advantage over many diabetes drugs',
          desiredOrAdverse: 'desired',
        },
      ],

      onsetOfAction: 'Days to weeks for full effect on glucose',
      durationOfEffect: '8-12 hours (immediate release)',
    },

    pharmacokinetics: {
      absorption: {
        bioavailability: '50-60%',
        route: ['oral'],
        factors: ['Decreased by food (delayed but not reduced total)'],
        timeToePeak: '2-3 hours (IR), 4-8 hours (ER)',
        foodEffect: 'Take with food to reduce GI effects',
      },
      distribution: {
        volumeOfDistribution: '654 L',
        proteinBinding: 'Negligible',
        tissueDistribution: ['Liver', 'Kidney', 'GI tract', 'Muscle'],
        crossesBBB: false,
        crossesPlacenta: true,
      },
      metabolism: {
        primarySite: 'Not metabolized',
        enzymes: [],
        activeMetabolites: [],
        drugInteractionRisk: 'low',
      },
      excretion: {
        primaryRoute: 'Renal (unchanged)',
        renalClearance: '510 mL/min',
        adjustmentNeeded: {
          renal: true,
          hepatic: false,
        },
      },
      halfLife: '6.2 hours',
      timeToSteadyState: '24-48 hours',
    },

    indications: [
      {
        condition: 'Type 2 Diabetes Mellitus',
        approvalStatus: 'FDA-approved',
        evidenceLevel: 'high',
        firstLine: true,
        notes: 'First-line therapy per ADA guidelines',
      },
      {
        condition: 'Prediabetes',
        approvalStatus: 'off-label',
        evidenceLevel: 'moderate',
        firstLine: false,
        notes: 'Can delay progression to diabetes',
      },
      {
        condition: 'Polycystic Ovary Syndrome (PCOS)',
        approvalStatus: 'off-label',
        evidenceLevel: 'moderate',
        firstLine: false,
        notes: 'Improves insulin resistance, may help ovulation',
      },
      {
        condition: 'Gestational Diabetes',
        approvalStatus: 'off-label',
        evidenceLevel: 'moderate',
        firstLine: false,
        notes: 'Alternative to insulin in some cases',
      },
    ],

    dosing: {
      usualDose: {
        amount: '500-1000mg',
        frequency: 'Twice daily',
        route: 'Oral',
      },
      adjustments: [
        {
          condition: 'eGFR 30-45',
          adjustment: 'Max 1000mg/day',
          rationale: 'Reduced clearance increases lactic acidosis risk',
        },
        {
          condition: 'eGFR <30',
          adjustment: 'Contraindicated',
          rationale: 'High risk of lactic acidosis',
        },
        {
          condition: 'Starting therapy',
          adjustment: 'Start 500mg daily, titrate slowly',
          rationale: 'Reduces GI side effects',
        },
      ],
      maxDose: '2550mg/day (2000mg more common)',
      administration: {
        route: 'Oral',
        withFood: 'with-food',
        timing: 'With meals',
        specialInstructions: [
          'Take with food to reduce GI upset',
          'Extended-release: swallow whole, do not crush',
          'Increase dose gradually over weeks',
        ],
      },
    },

    adverseEffects: [
      {
        name: 'GI Upset (nausea, diarrhea)',
        frequency: 'very-common',
        severity: 'mild',
        mechanism: 'Direct GI effects, altered gut bacteria, bile acid changes',
        management: 'Take with food, titrate slowly, try extended-release',
        reversible: true,
        onsetTiming: 'First weeks of therapy',
      },
      {
        name: 'Vitamin B12 Deficiency',
        frequency: 'common',
        severity: 'moderate',
        mechanism: 'Impaired B12 absorption in ileum',
        management: 'Monitor B12 levels, supplement if needed',
        reversible: true,
        onsetTiming: 'After years of use',
      },
      {
        name: 'Lactic Acidosis',
        frequency: 'very-rare',
        severity: 'life-threatening',
        mechanism: 'Inhibition of lactate gluconeogenesis with accumulation',
        management: 'Avoid in conditions with hypoxia or severe renal impairment',
        reversible: false,
        onsetTiming: 'Usually in setting of precipitant (dehydration, contrast)',
      },
      {
        name: 'Metallic Taste',
        frequency: 'common',
        severity: 'mild',
        mechanism: 'Unknown',
        management: 'Usually resolves with time',
        reversible: true,
        onsetTiming: 'Early in therapy',
      },
    ],

    interactions: [
      {
        interactingDrug: 'Iodinated Contrast Dye',
        interactionType: 'pharmacokinetic',
        severity: 'major',
        mechanism: 'Contrast can cause acute kidney injury, impairing metformin excretion',
        effect: 'Increased risk of lactic acidosis',
        management: 'Hold metformin before contrast, resume 48h after if renal function stable',
      },
      {
        interactingDrug: 'Alcohol',
        interactionType: 'pharmacodynamic',
        severity: 'moderate',
        mechanism: 'Both inhibit gluconeogenesis',
        effect: 'Increased lactic acidosis risk and hypoglycemia',
        management: 'Limit alcohol use',
      },
      {
        interactingDrug: 'Cimetidine',
        interactionType: 'pharmacokinetic',
        severity: 'moderate',
        mechanism: 'Competes for renal tubular secretion',
        effect: 'Increased metformin levels',
        management: 'Monitor or use alternative H2 blocker',
      },
    ],

    contraindications: [
      {
        condition: 'eGFR <30 mL/min',
        type: 'absolute',
        reason: 'Cannot be excreted, accumulates, lactic acidosis risk',
      },
      {
        condition: 'Metabolic acidosis',
        type: 'absolute',
        reason: 'Can worsen acidosis',
      },
      {
        condition: 'Severe hepatic impairment',
        type: 'relative',
        reason: 'Impaired lactate clearance',
      },
      {
        condition: 'Active alcohol abuse',
        type: 'relative',
        reason: 'Increased lactic acidosis risk',
      },
    ],

    specialPopulations: [
      {
        population: 'pregnancy',
        consideration: 'Crosses placenta, no clear teratogenicity',
        recommendation: 'Can be continued in pregnancy if needed; insulin preferred by many',
        pregnancyCategory: 'B',
      },
      {
        population: 'geriatric',
        consideration: 'Reduced renal function more common',
        recommendation: 'Check and monitor eGFR, may need dose reduction',
      },
      {
        population: 'renal-impairment',
        consideration: 'Primary route of elimination',
        recommendation: 'Reduce dose if eGFR 30-45; contraindicated if <30',
      },
    ],

    monitoring: [
      {
        parameter: 'Renal function (eGFR)',
        frequency: 'At baseline, at least annually',
        rationale: 'Required for safe use',
        actionThreshold: 'Reduce dose if eGFR 30-45; stop if <30',
      },
      {
        parameter: 'Vitamin B12',
        frequency: 'Every 2-3 years with chronic use',
        rationale: 'Long-term use can cause deficiency',
        actionThreshold: 'Supplement if low',
      },
      {
        parameter: 'HbA1c',
        frequency: 'Every 3-6 months',
        rationale: 'Assess glycemic control',
        actionThreshold: 'Adjust therapy if not at goal',
      },
    ],

    patientEducation: [
      'Take with meals to reduce stomach upset',
      'Do not drink excessive alcohol',
      'Tell doctors you take metformin before any contrast dye procedures',
      'Does not usually cause low blood sugar by itself',
      'Diarrhea usually improves after a few weeks',
      'Extended-release tablets should not be crushed or chewed',
      'If you have severe vomiting or diarrhea, contact your doctor (dehydration risk)',
    ],

    clinicalPearls: [
      'First-line for type 2 diabetes regardless of weight',
      'Cardiovascular and possible mortality benefits',
      'Start low (500mg daily) and titrate slowly to minimize GI effects',
      'Extended-release formulation better tolerated GI-wise',
      'One of few diabetes drugs that doesn\'t cause weight gain',
      'No hypoglycemia when used alone',
      'Hold before surgery or procedures where kidney function might decline',
      'Ghost tablet in stool with ER formulation is normal',
    ],
  },
];

// ============================================
// Common Drug Interactions Database
// ============================================

export const COMMON_INTERACTIONS: DrugInteraction[] = [
  {
    interactingDrug: 'Warfarin + NSAIDs',
    interactionType: 'pharmacodynamic',
    severity: 'major',
    mechanism: 'NSAIDs inhibit platelet function and cause GI ulceration; combined with anticoagulation greatly increases bleeding risk',
    effect: 'Significantly increased risk of GI and other bleeding',
    management: 'Avoid combination if possible. If necessary, use PPI prophylaxis and monitor closely.',
  },
  {
    interactingDrug: 'Statins + Grapefruit',
    interactionType: 'pharmacokinetic',
    severity: 'moderate',
    mechanism: 'Grapefruit inhibits CYP3A4 in gut wall, increasing statin absorption',
    effect: 'Increased statin levels, increased myopathy risk',
    management: 'Avoid grapefruit with simvastatin, lovastatin. Less concern with atorvastatin (limited), minimal with pravastatin, rosuvastatin.',
  },
  {
    interactingDrug: 'ACE Inhibitors + Potassium supplements',
    interactionType: 'pharmacodynamic',
    severity: 'major',
    mechanism: 'ACE inhibitors decrease aldosterone, reducing potassium excretion. Adding potassium compounds the effect.',
    effect: 'Hyperkalemia risk',
    management: 'Monitor potassium levels. Usually avoid routine K supplementation with ACE-I. Be cautious with salt substitutes.',
  },
  {
    interactingDrug: 'SSRIs + MAOIs',
    interactionType: 'pharmacodynamic',
    severity: 'contraindicated',
    mechanism: 'Both increase serotonin. MAOIs prevent serotonin breakdown while SSRIs prevent reuptake.',
    effect: 'Serotonin syndrome - potentially fatal',
    management: 'Never combine. Wait 2 weeks after stopping SSRI (5 weeks for fluoxetine) before starting MAOI.',
  },
  {
    interactingDrug: 'Methotrexate + NSAIDs',
    interactionType: 'pharmacokinetic',
    severity: 'major',
    mechanism: 'NSAIDs reduce renal blood flow and compete for tubular secretion',
    effect: 'Increased methotrexate levels and toxicity',
    management: 'Avoid NSAIDs with high-dose methotrexate. Caution with low-dose methotrexate.',
  },
  {
    interactingDrug: 'Opioids + Benzodiazepines',
    interactionType: 'pharmacodynamic',
    severity: 'major',
    mechanism: 'Both cause CNS and respiratory depression',
    effect: 'Increased sedation, respiratory depression, overdose death',
    management: 'Avoid combination when possible. If necessary, use lowest effective doses. FDA black box warning.',
  },
  {
    interactingDrug: 'Digoxin + Amiodarone',
    interactionType: 'pharmacokinetic',
    severity: 'major',
    mechanism: 'Amiodarone inhibits P-glycoprotein and reduces renal clearance of digoxin',
    effect: 'Digoxin levels can double, increasing toxicity risk',
    management: 'Reduce digoxin dose by 50% when starting amiodarone. Monitor levels.',
  },
];

// ============================================
// Helper Functions
// ============================================

export function getDrugById(id: string): DrugEducation | undefined {
  return DRUGS.find(d => d.id === id);
}

export function getDrugByName(name: string): DrugEducation | undefined {
  const nameLower = name.toLowerCase();
  return DRUGS.find(d =>
    d.genericName.toLowerCase() === nameLower ||
    d.brandNames.some(bn => bn.toLowerCase() === nameLower)
  );
}

export function getDrugClassById(id: string): DrugClassEducation | undefined {
  return DRUG_CLASSES.find(dc => dc.id === id);
}

export function getDrugsByCategory(category: string): DrugEducation[] {
  return DRUGS.filter(d => d.category === category);
}

export function getInteractionsForDrug(drugName: string): DrugInteraction[] {
  const nameLower = drugName.toLowerCase();
  return COMMON_INTERACTIONS.filter(i =>
    i.interactingDrug.toLowerCase().includes(nameLower)
  );
}

export function getAllDrugClasses(): DrugClassEducation[] {
  return DRUG_CLASSES;
}
