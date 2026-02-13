/**
 * Hypertension Educational Module
 * 
 * Complete educational content across all 6 complexity levels.
 */

import type { EducationalModule } from '../../types.js';

export const hypertensionModule: EducationalModule = {
  id: 'cardiology-hypertension-comprehensive',
  type: 'specialty',
  specialty: 'cardiology',
  
  title: 'Understanding Hypertension (High Blood Pressure)',
  description: 'Learn what high blood pressure means, how it affects your body, and why controlling it matters. Based on cardiology training materials.',
  version: '1.0.0',
  lastUpdated: '2026-02-04',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'cardiovascular-system-basics',
    'blood-pressure-mechanics',
  ],
  
  learningObjectives: [
    'Understand what blood pressure numbers mean',
    'Learn how hypertension develops',
    'Recognize the effects on heart, brain, kidneys, and eyes',
    'Understand why treatment matters',
    'Know lifestyle factors that affect blood pressure',
  ],
  
  estimatedTime: {
    1: '12 minutes',
    2: '18 minutes',
    3: '25 minutes',
    4: '35 minutes',
    5: '50 minutes',
    6: '75 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `Your heart pumps blood through tubes called arteries to deliver oxygen to your whole body. Blood pressure is how hard the blood pushes against the artery walls. When this pressure stays too high, it's called hypertension. Think of it like water in a garden hose - if the pressure is too high for too long, the hose can get damaged.`,
      
      analogy: `Imagine your arteries are like garden hoses and your heart is the faucet. Blood pressure is how hard the water pushes against the hose walls.

Normal pressure: Water flows smoothly, hose stays healthy
High pressure: Water blasts through, hose gets damaged over time

Your body has pressure gauges (the blood pressure cuff) to check if the pressure is in the safe zone.`,
      
      keyPoints: [
        'Blood pressure is the force of blood pushing against artery walls',
        'Two numbers: top (systolic) when heart beats, bottom (diastolic) when heart rests',
        'High blood pressure means your arteries are under too much stress',
        'It usually has no symptoms - that\'s why it\'s called the "silent killer"',
        'Over time, high pressure damages arteries, heart, brain, and kidneys',
      ],
      
      visualAid: 'blood-pressure-artery-diagram',
    },
    
    // Level 2: Developing
    2: {
      summary: `Hypertension occurs when the force of blood against artery walls is consistently too high. Blood pressure readings have two numbers: systolic pressure (when the heart contracts) over diastolic pressure (when the heart relaxes). Normal is around 120/80 mmHg. Hypertension is diagnosed when readings are consistently 130/80 mmHg or higher. Over time, this excessive pressure damages the delicate lining of arteries.`,
      
      keyConcepts: [
        {
          term: 'Systolic Pressure',
          explanation: 'The top number - pressure when your heart beats and pumps blood out',
        },
        {
          term: 'Diastolic Pressure',
          explanation: 'The bottom number - pressure when your heart rests between beats',
        },
        {
          term: 'Arteries',
          explanation: 'Blood vessels that carry oxygen-rich blood away from the heart to the body',
        },
        {
          term: 'Hypertension',
          explanation: 'Consistently high blood pressure, defined as 130/80 mmHg or higher',
        },
      ],
      
      keyPoints: [
        'Blood pressure = cardiac output × peripheral resistance',
        'Cardiac output is how much blood your heart pumps per minute',
        'Peripheral resistance is how narrow or stiff your arteries are',
        'Both factors can increase blood pressure',
        'Normal: less than 120/80, Elevated: 120-129/less than 80, Stage 1: 130-139/80-89, Stage 2: 140+/90+',
      ],
      
      howItWorks: `1. Your heart pumps blood into the arteries
2. Blood pushes against artery walls creating pressure
3. Arteries are muscular tubes that can widen or narrow
4. If arteries narrow or stiffen, resistance increases
5. Heart must work harder to push blood through
6. This creates sustained high pressure
7. Over years, this damages artery walls`,
    },
    
    // Level 3: Standard
    3: {
      summary: `Hypertension is a chronic medical condition characterized by persistently elevated arterial blood pressure. It represents one of the most significant modifiable risk factors for cardiovascular disease, stroke, and kidney disease. The pathophysiology involves complex interactions between cardiac output, systemic vascular resistance, and neurohormonal systems including the renin-angiotensin-aldosterone system (RAAS). Primary (essential) hypertension accounts for 90-95% of cases and develops gradually over years.`,
      
      mechanisms: [
        {
          name: 'Increased Cardiac Output',
          description: 'Heart pumps more blood per minute, increasing pressure. Can occur with obesity, high salt intake, or hyperthyroidism.',
        },
        {
          name: 'Increased Systemic Vascular Resistance',
          description: 'Arteries become narrowed or stiff, making it harder for blood to flow. Main mechanism in established hypertension.',
        },
        {
          name: 'RAAS Dysregulation',
          description: 'Renin-angiotensin-aldosterone system becomes overactive, causing vasoconstriction and sodium/water retention.',
        },
        {
          name: 'Sympathetic Nervous System Overactivity',
          description: 'Chronic stress and other factors activate fight-or-flight response, increasing heart rate and vasoconstriction.',
        },
      ],
      
      clinicalCorrelates: [
        'Left ventricular hypertrophy: Heart muscle thickens to pump against high pressure',
        'Arterial stiffness: Arteries lose elasticity, worsening hypertension',
        'Endothelial dysfunction: Lining of arteries becomes damaged and dysfunctional',
        'Microalbuminuria: Early kidney damage indicated by protein in urine',
        'Retinopathy: Damage to blood vessels in the retina of the eye',
      ],
      
      normalVsAbnormal: {
        normal: 'Arteries are flexible and responsive. Blood flows smoothly at pressures around 120/80 mmHg. Heart works efficiently. Organs receive adequate blood flow without excessive force.',
        abnormal: 'Arteries become stiff and narrowed. Blood pressure consistently exceeds 130/80 mmHg. Heart must work harder, causing thickening. Organs experience excessive force, leading to damage over time.',
        whyItMatters: 'Chronic hypertension accelerates atherosclerosis, damages target organs (heart, brain, kidneys, eyes), and significantly increases risk of heart attack, stroke, heart failure, and kidney failure.',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `The pathophysiology of essential hypertension involves complex neurohormonal dysregulation, vascular remodeling, and renal sodium handling abnormalities. Key mechanisms include: (1) overactivation of the sympathetic nervous system increasing cardiac output and peripheral resistance; (2) dysregulation of the renin-angiotensin-aldosterone system (RAAS) causing inappropriate vasoconstriction and volume expansion; (3) endothelial dysfunction with reduced nitric oxide bioavailability and increased endothelin; (4) arterial stiffness from collagen deposition and elastin fragmentation; and (5) abnormal renal sodium handling with impaired pressure-natriuresis relationship.`,
      
      molecularMechanisms: [
        {
          pathway: 'Renin-Angiotensin-Aldosterone System (RAAS)',
          defect: 'Inappropriate activation despite high pressure; renal sodium avidity',
          consequence: 'Angiotensin II-mediated vasoconstriction, aldosterone-driven sodium/water retention, cardiac remodeling',
        },
        {
          pathway: 'Endothelial Function',
          defect: 'Reduced eNOS activity, increased oxidative stress (NOX enzymes), decreased tetrahydrobiopterin',
          consequence: 'Nitric oxide deficiency, endothelin excess, impaired vasodilation, inflammation',
        },
        {
          pathway: 'Vascular Remodeling',
          defect: 'Growth factor activation (PDGF, TGF-β), increased collagen synthesis, elastin degradation',
          consequence: 'Medial hypertrophy, increased wall-to-lumen ratio, reduced compliance, fixed elevation in resistance',
        },
        {
          pathway: 'Sympathetic Nervous System',
          defect: 'Central activation, norepinephrine spillover, baroreceptor resetting',
          consequence: 'Increased heart rate and contractility, peripheral vasoconstriction, renal sodium retention',
        },
      ],
      
      pathways: [
        {
          name: 'Pressure-Natriuresis Curve',
          steps: [
            'Normal kidney: As pressure rises, sodium excretion increases',
            'Hypertensive kidney: Curve shifted right - higher pressure needed for same sodium excretion',
            'Abnormal renal handling maintains volume expansion',
            'Increased cardiac output initiates phase; increased resistance sustains phase',
          ],
          regulation: 'Abnormal in hypertension due to enhanced tubular sodium reabsorption via NHE3, NKCC2, ENaC upregulation',
        },
        {
          name: 'Large Artery Stiffening',
          steps: [
            'Elastin fragmentation with fatigue fracture',
            'Collagen deposition and cross-linking',
            'Calcification of media',
            'Increased pulse wave velocity',
            'Augmented systolic pressure, reduced diastolic pressure',
          ],
          regulation: 'Age-related and accelerated by hypertension, diabetes, chronic kidney disease, inflammation',
        },
      ],
      
      references: [
        'Oparil S, et al. Pathogenesis of hypertension. Ann Intern Med. 2003;139(9):761-776.',
        'Booth FW, et al. Waging war on physical inactivity: using modern molecular ammunition against an ancient enemy. J Appl Physiol. 2000;88(2):774-787.',
        'Lerman LO, et al. Animal models of hypertension: a scientific statement from the American Heart Association. Hypertension. 2019;73(6):e87-e120.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `Contemporary hypertension research reveals substantial heterogeneity in pathophysiology, suggesting that "essential" hypertension comprises multiple distinct mechanistic subtypes. Genome-wide association studies have identified over 1000 genetic loci influencing blood pressure, yet collectively explain only ~27% of variance. Epigenetic modifications (DNA methylation, histone modifications, non-coding RNAs) mediate environmental influences including early life programming, sleep disorders, and gut microbiome composition. The "exposome" concept integrates chronic low-grade inflammation, endocrine-disrupting chemicals, particulate air pollution, and psychosocial stress as contributors to resistant hypertension.`,
      
      researchFrontiers: [
        'Renal denervation: Catheter-based ablation of renal sympathetic nerves showing renewed promise after SYMPLICITY HTN-3 disappointment',
        'SGLT2 inhibitors and GLP-1 receptor agonists: Beyond glucose lowering, showing significant blood pressure reduction via osmotic diuresis and weight loss',
        'Central sleep apnea treatment: Targeting chemoreflex hypersensitivity in heart failure with preserved ejection fraction',
        'Precision medicine: Using plasma renin levels to guide first-line antihypertensive selection (renin-profiling)',
        'Gut microbiome: Short-chain fatty acids and their G-protein coupled receptors modulating blood pressure regulation',
        'Chronotherapy: Time-of-day medication administration based on circadian blood pressure patterns',
      ],
      
      controversies: [
        {
          topic: 'Blood Pressure Targets',
          perspectives: [
            'SPRINT trial: Intensive control (\u003c120) reduced CV events but increased adverse effects',
            'ACCORD BP: No benefit of intensive control in diabetics; increased adverse events',
            'Current consensus: Individualize based on age, comorbidities, frailty, and patient preferences',
          ],
        },
        {
          topic: 'Resistant Hypertension Definition',
          perspectives: [
            'Traditional: Failure of 3 drugs including diuretic',
            'Proposed: Include verification of adherence and exclusion of white coat effect',
            'Pseudo-resistant vs true resistant: Apparent resistance common due to non-adherence, white coat, suboptimal regimens',
          ],
        },
        {
          topic: 'Salt Sensitivity',
          perspectives: [
            'Population-level: Strong evidence for salt reduction',
            'Individual-level: Variable salt sensitivity based on genetics, age, race, kidney function',
            'Renin profiling: Low-renin (salt-sensitive) vs high-renin (salt-resistant) phenotypes may guide therapy',
          ],
        },
      ],
      
      statisticalContext: `Despite >1000 GWAS loci, polygenic risk scores have limited clinical utility (AUC ~0.63). The "missing heritability" suggests:
- Rare variants with large effects
- Gene-gene interactions (epistasis)
- Gene-environment interactions
- Parent-of-origin effects and imprinting
- Mitochondrial DNA variation

Heritability estimates: 30-50% of blood pressure variation. However, family history has poor predictive value compared to traditional risk factors.`,
      
      references: [
        'Evangelou E, et al. Genetic analysis of over 1 million people identifies 535 new loci associated with blood pressure traits. Nat Genet. 2018;50(10):1412-1425.',
        'Bhatt DL, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia. N Engl J Med. 2019;380(1):11-22.',
        'Williams B, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2). Lancet. 2015;386(10008):2059-2068.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `From a clinical perspective, hypertension management requires systematic evaluation for secondary causes, assessment of target organ damage, cardiovascular risk stratification, and individualized treatment selection. The 2017 ACC/AHA guidelines emphasize comprehensive risk assessment using the ASCVD risk calculator, with more aggressive targets (\u003c130/80) for high-risk patients. Initial therapy typically involves thiazide-like diuretics, ACE inhibitors/ARBs, or calcium channel blockers, with combination therapy preferred for Stage 2 hypertension. Resistant hypertension requires evaluation for primary aldosteronism, renal artery stenosis, and obstructive sleep apnea.`,
      
      clinicalApproach: [
        'Accurate measurement: Proper technique, multiple readings, home/ambulatory monitoring to exclude white coat effect',
        'Risk stratification: 10-year ASCVD risk calculation guides intensity of therapy',
        'Secondary causes: Screen for primary aldosteronism, renal disease, renovascular disease, OSA, pheochromocytoma, Cushing\'s, coarctation, thyroid disease',
        'Target organ assessment: ECG (LVH), echocardiogram if indicated, urine albumin/creatinine, retinal exam, creatinine/eGFR',
        'Lifestyle modification: DASH diet, sodium restriction, weight loss, exercise, alcohol moderation, smoking cessation',
        'Pharmacotherapy: Thiazide-like diuretics (chlorthalidone, indapamide), ACEi/ARB (first-line in CKD, diabetes), CCB (effective in Black patients), beta-blockers (compelling indications)',
      ],
      
      differentialConsiderations: [
        'Primary aldosteronism: Screen with aldosterone-renin ratio in resistant hypertension, hypokalemia, or adrenal incidentaloma',
        'Renal artery stenosis: Consider in flash pulmonary edema, resistant hypertension, unexplained renal dysfunction, abdominal bruit',
        'Obstructive sleep apnea: Very common; screen with STOP-BANG questionnaire; CPAP reduces BP ~2-3 mmHg',
        'Pheochromocytoma: Episodic hypertension, sweating, palpitations, anxiety; screen with plasma free metanephrines',
        'Cushing syndrome: Central obesity, striae, proximal myopathy; screen with 1-mg overnight dexamethasone suppression',
        'Coarctation of aorta: Upper extremity hypertension, diminished lower extremity pulses, rib notching on CXR',
        'Drug-induced: NSAIDs, OCPs, steroids, decongestants, calcineurin inhibitors, EPO, tyrosine kinase inhibitors',
      ],
      
      guidelines: [
        'Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248.',
        'Williams B, et al. 2018 ESC/ESH Guidelines for the management of arterial hypertension. Eur Heart J. 2018;39(33):3021-3104.',
        'Carey RM, et al. Resistant Hypertension: Detection, Evaluation, and Management: A Scientific Statement From the American Heart Association. Hypertension. 2018;72(5):e53-e90.',
      ],
      
      caseExamples: [
        {
          presentation: '58-year-old African American male, BMI 31, BP 168/94 on lisinopril 10mg. No symptoms. Father had stroke at 62.',
          keyFindings: [
            'Stage 2 hypertension despite ACE inhibitor',
            'High cardiovascular risk given age, race, family history',
            'ASCVD 10-year risk: 15.2%',
          ],
          teachingPoints: [
            'ACE inhibitors less effective as monotherapy in Black patients; add thiazide or CCB',
            'Target BP \u003c130/80 given elevated ASCVD risk',
            'Add amlodipine 5mg or chlorthalidone 12.5mg',
            'Aggressive lifestyle: DASH diet, sodium \u003c1500mg, weight loss target',
            'Check BMP, lipids, A1c, urine ACR, ECG',
          ],
        },
        {
          presentation: '42-year-old female, BP 156/98 resistant to lisinopril 20mg, HCTZ 25mg, amlodipine 10mg. K+ 3.2.',
          keyFindings: [
            'True resistant hypertension (3 drugs including diuretic)',
            'Hypokalemia suggesting hyperaldosteronism',
            'Young age suggesting secondary cause',
          ],
          teachingPoints: [
            'Screen for primary aldosteronism: Aldosterone-renin ratio',
            'If positive, CT adrenal to distinguish unilateral (surgery) vs bilateral (medical)',
            'Spironolactone 25-50mg highly effective in resistant HTN',
            'Verify adherence (pill counts, pharmacy records)',
            '24-hour ambulatory BP to exclude white coat effect',
          ],
        },
      ],
      
      references: [
        'Whelton PK, et al. 2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248.',
        'Carey RM, Moran AE, Whelton PK. Treatment of Hypertension: A Review. JAMA. 2022;328(18):1849-1861.',
        'Mills KT, et al. Global Disparities of Hypertension Prevalence and Control: A Systematic Analysis of Population-Based Studies From 90 Countries. Circulation. 2016;134(6):441-450.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'heart', focus: 'left-ventricle', description: 'Left ventricular hypertrophy develops from pumping against high pressure' },
      { structure: 'arteries', focus: 'systemic', description: 'All arteries experience increased wall stress' },
      { structure: 'kidneys', focus: 'nephrons', description: 'Renal arteries and nephrons are damaged by chronic high pressure' },
      { structure: 'brain', focus: 'cerebral-arteries', description: 'Risk of stroke from vessel damage or rupture' },
      { structure: 'eyes', focus: 'retina', description: 'Retinal blood vessels show damage visible on exam' },
    ],
    
    relatedLabs: [
      'blood-pressure',
      'basic-metabolic-panel',
      'lipid-panel',
      'microalbumin',
      'echocardiogram',
    ],
    
    relatedMedications: [
      'ace-inhibitors',
      'arbs',
      'calcium-channel-blockers',
      'thiazide-diuretics',
      'beta-blockers',
    ],
    
    relatedConditions: [
      'coronary-artery-disease',
      'heart-failure',
      'stroke',
      'chronic-kidney-disease',
      'diabetic-nephropathy',
    ],
  },
  
  quiz: {
    title: 'Test Your Understanding',
    questions: [
      {
        id: 'htn-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What do the two numbers in a blood pressure reading represent?',
        options: [
          'Heart size and artery width',
          'Pressure when heart beats and when it rests',
          'Blood thickness and flow speed',
          'Age and weight factors',
        ],
        correctAnswer: 1,
        explanation: 'The top number (systolic) is pressure when your heart beats. The bottom number (diastolic) is pressure when your heart rests between beats.',
      },
      {
        id: 'htn-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What blood pressure reading indicates hypertension?',
        options: [
          'Below 120/80',
          '120-129/less than 80',
          '130/80 or higher',
          'Only when top number is above 140',
        ],
        correctAnswer: 2,
        explanation: 'Hypertension is diagnosed when blood pressure is consistently 130/80 mmHg or higher.',
      },
      {
        id: 'htn-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Why is hypertension called the "silent killer"?',
        options: [
          'It only happens at night',
          'It usually has no symptoms until organs are damaged',
          'It affects the voice box',
          'It causes silent heart attacks only',
        ],
        correctAnswer: 1,
        explanation: 'Hypertension typically has no symptoms. Most people don\'t know they have it until they check their blood pressure or develop complications like heart attack or stroke.',
      },
      {
        id: 'htn-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which system is primarily responsible for inappropriate vasoconstriction in hypertension?',
        options: [
          'Parasympathetic nervous system',
          'Renin-angiotensin-aldosterone system (RAAS)',
          'Immune system',
          'Digestive system',
        ],
        correctAnswer: 1,
        explanation: 'The RAAS becomes dysregulated in hypertension, causing angiotensin II-mediated vasoconstriction and aldosterone-driven sodium/water retention.',
      },
      {
        id: 'htn-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'According to 2017 ACC/AHA guidelines, what is the first-line antihypertensive regimen for a Black patient with Stage 2 hypertension and no compelling indications?',
        options: [
          'ACE inhibitor alone',
          'ACE inhibitor + thiazide diuretic',
          'Thiazide diuretic or calcium channel blocker (CCB)',
          'Beta-blocker + ACE inhibitor',
        ],
        correctAnswer: 2,
        explanation: 'ACE inhibitors and ARBs are less effective as monotherapy in Black patients. First-line options are thiazide diuretics or CCBs. For Stage 2 hypertension, combination therapy is recommended.',
      },
    ],
    passingScore: 80,
  },
  
  references: [
    {
      citation: 'Whelton PK, et al. 2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248.',
      doi: '10.1016/j.jacc.2017.11.006',
    },
    {
      citation: 'Williams B, et al. 2018 ESC/ESH Guidelines for the management of arterial hypertension. Eur Heart J. 2018;39(33):3021-3104.',
      doi: '10.1093/eurheartj/ehy339',
    },
  ],
  
  resources: [
    {
      title: 'Understanding Blood Pressure Readings (AHA)',
      type: 'website',
      url: 'https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings',
      description: 'American Heart Association guide to understanding your numbers',
    },
    {
      title: 'DASH Diet Eating Plan',
      type: 'website',
      url: 'https://www.nhlbi.nih.gov/education/dash-eating-plan',
      description: 'NIH guide to the Dietary Approaches to Stop Hypertension eating plan',
    },
  ],
};

export default hypertensionModule;
