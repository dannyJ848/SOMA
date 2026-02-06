/**
 * Atrial Fibrillation Educational Module
 * 
 * Comprehensive coverage of AFib: pathophysiology, stroke risk, rate vs rhythm control,
 * anticoagulation decisions, and catheter ablation.
 */

import type { EducationalModule } from '../types.js';

export const atrialFibrillationModule: EducationalModule = {
  id: 'atrial-fibrillation-comprehensive',
  type: 'specialty',
  specialty: 'cardiology',
  
  title: 'Understanding Atrial Fibrillation',
  description: 'A complete guide to atrial fibrillation (AFib): why your heart goes out of rhythm, stroke risk assessment, and treatment options from medications to catheter ablation.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'heart-anatomy-basics',
    'cardiac-electrophysiology-intro',
    'ecg-basics',
  ],
  
  learningObjectives: [
    'Understand what happens in the heart during atrial fibrillation',
    'Learn why AFib increases stroke risk and how to assess your risk',
    'Know the difference between rate control and rhythm control strategies',
    'Understand anticoagulation (blood thinner) options and decisions',
    'Learn about catheter ablation and when it is appropriate',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '60 minutes',
    6: '90 minutes',
  },
  
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Your heart has four chambers - two upper (atria) and two lower (ventricles). Normally, it beats in a steady rhythm controlled by electrical signals. In atrial fibrillation (AFib), the upper chambers quiver instead of beating properly. This irregular rhythm can cause palpitations, shortness of breath, and increases the risk of stroke because blood can pool and form clots.`,
      
      analogy: `Think of your heart like a house with four rooms. The upper rooms (atria) normally receive a single, organized signal to contract - like a conductor leading an orchestra. In AFib, it's like hundreds of musicians all trying to conduct at once. The upper rooms quiver chaotically instead of squeezing properly. This causes two problems:

1. The heart can't pump blood efficiently - like trying to squeeze a water balloon that just wiggles
2. Blood pools in the corners of the upper rooms, forming clots that can travel to the brain and cause a stroke`,
      
      keyPoints: [
        'AFib is an irregular heartbeat starting in the upper chambers (atria)',
        'The heart quivers instead of beating in a coordinated way',
        'This can cause palpitations, tiredness, and shortness of breath',
        'Blood can pool in the atria and form clots, increasing stroke risk',
        'Blood thinners are often needed to prevent stroke',
      ],
      
      visualAid: 'heart-afib-animation',
      story: 'John, 68, felt his heart "racing and flopping around" while gardening. He thought it was just anxiety, but when it lasted hours, he went to the ER. The ECG showed AFib. He learned that while the symptoms were scary, the bigger concern was stroke risk. With the right blood thinner, he was back to gardening within days.',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Atrial fibrillation occurs when multiple electrical signals fire rapidly and chaotically in the atria, overwhelming the heart's normal pacemaker (the sinoatrial or SA node). These signals originate primarily from the pulmonary veins - the vessels that bring oxygenated blood from the lungs to the heart. The atrioventricular (AV) node acts as a gatekeeper, preventing all these chaotic signals from reaching the ventricles, but some still get through irregularly.`,
      
      keyConcepts: [
        {
          term: 'Sinoatrial (SA) Node',
          explanation: 'The heart\'s natural pacemaker, located in the right atrium. It normally generates 60-100 electrical signals per minute.',
        },
        {
          term: 'Atrioventricular (AV) Node',
          explanation: 'The electrical gateway between the atria and ventricles. It filters signals and controls how many reach the lower chambers.',
        },
        {
          term: 'Pulmonary Veins',
          explanation: 'Four veins that carry oxygen-rich blood from the lungs to the left atrium. These are the most common source of erratic electrical signals in AFib.',
        },
        {
          term: 'Left Atrial Appendage (LAA)',
          explanation: 'A small pouch in the left atrium where blood tends to pool during AFib, making it the most common site of clot formation.',
        },
      ],
      
      keyPoints: [
        'AFib starts when abnormal electrical signals fire rapidly from the pulmonary veins',
        'These signals override the SA node\'s normal rhythm (300-600 per minute)',
        'The AV node acts as a filter - not every atrial signal reaches the ventricles',
        'Blood pools in the left atrial appendage during ineffective atrial contraction',
        'Clots formed in the LAA can dislodge and travel to the brain, causing stroke',
      ],
      
      howItWorks: `1. Normal: SA node fires regularly → signal spreads through atria → AV node delays signal → ventricles contract regularly

2. AFib: Multiple sites (mainly pulmonary veins) fire chaotically → atria quiver instead of contracting → AV node receives hundreds of signals → only some pass through → ventricles beat irregularly (irregularly irregular) → blood stagnates in atria → clot formation risk`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Atrial fibrillation is the most common sustained arrhythmia, affecting over 40 million people worldwide. The pathophysiology involves electrical remodeling (shortened atrial refractory periods), structural remodeling (fibrosis), and autonomic dysfunction. AFib can be paroxysmal (self-terminating), persistent (requires cardioversion), long-standing persistent (>12 months), or permanent. Stroke risk stratification using CHA₂DS₂-VASc score guides anticoagulation decisions.`,
      
      mechanisms: [
        {
          name: 'Electrical Remodeling',
          description: 'Rapid atrial rates cause calcium overload in myocytes, leading to shortened action potential duration and refractory periods. This creates a "vicious cycle" where AFib begets more AFib.',
        },
        {
          name: 'Structural Remodeling',
          description: 'Chronic stress and stretch cause atrial fibrosis - replacement of normal muscle with scar tissue. This creates conduction block and re-entry circuits that sustain arrhythmia.',
        },
        {
          name: 'Autonomic Mechanisms',
          description: 'Increased vagal tone (during sleep, in athletes) or sympathetic tone (during exercise, stress) can trigger AFib in susceptible individuals through effects on atrial refractoriness.',
        },
        {
          name: 'Inflammation and Oxidative Stress',
          description: 'Conditions like obesity, sleep apnea, and heart failure create a pro-inflammatory state that promotes atrial fibrosis and electrical instability.',
        },
      ],
      
      clinicalCorrelates: [
        'Paroxysmal AFib: Episodes self-terminate within 7 days, often within 24-48 hours',
        'Persistent AFib: Lasts >7 days or requires cardioversion to terminate',
        'Long-standing persistent: Continuous AFib >12 months',
        'Permanent AFib: Accepted by patient and physician, no further rhythm control attempts',
        'Lone AFib: AFib in patients <60 years without structural heart disease or risk factors',
      ],
      
      normalVsAbnormal: {
        normal: 'Coordinated atrial depolarization from SA node at 60-100 bpm → effective atrial contraction contributing 15-25% of ventricular filling → organized ventricular response',
        abnormal: 'Disorganized atrial activity at 350-600 bpm with no effective contraction → variable AV nodal conduction creating irregular RR intervals → loss of atrial contribution to ventricular filling → blood stasis and thrombus formation',
        whyItMatters: 'Loss of atrial kick reduces cardiac output by up to 25%. More critically, blood stagnation in the left atrial appendage leads to thrombus formation with 4-5% annual stroke risk (untreated).',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The electrophysiological basis of AFib involves multiple wavelets of re-entry or focal drivers (rotors). The "multiple wavelet hypothesis" proposes that AFib is sustained by multiple independent re-entry circuits wandering through the atria. Alternatively, the "focal source hypothesis" suggests dominant rotors or focal impulses drive AFib. Mapping studies show pulmonary vein isolation eliminates AFib in 70-80% of paroxysmal cases, supporting the pulmonary vein hypothesis.`,
      
      molecularMechanisms: [
        {
          pathway: 'Calcium Handling',
          defect: 'Rapid atrial rates cause Ca²⁺ overload, activating Ca²⁺/calmodulin-dependent protein kinase II (CaMKII)',
          consequence: 'Increased late Na⁺ current, enhanced RyR2 phosphorylation → delayed afterdepolarizations (DADs) → triggered activity',
        },
        {
          pathway: 'Ion Channel Remodeling',
          defect: 'Downregulation of L-type Ca²⁺ channels (ICaL), upregulation of inward rectifier K⁺ current (IK1)',
          consequence: 'Shortened action potential duration (APD) and atrial effective refractory period (ERP) → re-entry facilitated',
        },
        {
          pathway: 'Connexin Remodeling',
          defect: 'Reduced expression and lateralization of connexin-40 and connexin-43 gap junction proteins',
          consequence: 'Slowed and heterogeneous atrial conduction velocity → conduction block and re-entry circuits',
        },
        {
          pathway: 'Fibrosis Signaling',
          defect: 'TGF-β activation → fibroblast-to-myofibroblast transition; Angiotensin II → AT1 receptor signaling',
          consequence: 'Collagen deposition, altered extracellular matrix → anisotropic conduction → substrate for sustained AFib',
        },
      ],
      
      pathways: [
        {
          name: 'Action Potential Phases',
          steps: [
            'Phase 0: Rapid depolarization via Na⁺ influx (INa)',
            'Phase 1: Early rapid repolarization (Ito - transient outward K⁺)',
            'Phase 2: Plateau phase (ICaL inward, IK delayed rectifier outward)',
            'Phase 3: Repolarization (IKr, IKs - delayed rectifier K⁺ currents)',
            'Phase 4: Resting potential (IK1 inward rectifier)',
          ],
          regulation: 'AFib remodeling shortens phases 2-3, primarily through ICaL downregulation and increased IK1, reducing ERP',
        },
        {
          name: 'Re-entry Requirements',
          steps: [
            'Two distinct conduction pathways around an obstacle',
            'Unidirectional block in one pathway',
            'Slow conduction in the alternate pathway',
            'Recovery of the blocked pathway before the circulating wavefront returns',
          ],
          regulation: 'The wavelength (ERP × conduction velocity) must be shorter than the re-entrant circuit path length for sustained re-entry',
        },
      ],
      
      references: [
        'Nattel S, et al. Arrhythmogenic ion-channel remodeling in the heart: heart failure, myocardial infarction, and atrial fibrillation. Physiol Rev. 2007;87(2):425-456.',
        'Calkins H, et al. 2017 HRS/EHRA/ECAS/APHRS/SOLAECE expert consensus statement on catheter and surgical ablation of atrial fibrillation. Heart Rhythm. 2017;14(10):e275-e444.',
        'January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `Contemporary AFib management emphasizes the "ABC pathway": Avoid stroke with Anticoagulation, Better symptom management with patient-centered decisions on rate vs rhythm control, and Cardiovascular/Comorbidity risk reduction. The EAST-AFNET 4 trial demonstrated that early rhythm control (within 12 months of diagnosis) reduces cardiovascular outcomes compared to usual care. The CASTLE-AF trial showed catheter ablation superiority over medical therapy in heart failure patients. Genetic studies have identified risk loci near PITX2, ZFHX3, and KCNN3, yet polygenic risk scores remain investigational.`,
      
      researchFrontiers: [
        'Early rhythm control strategy: EAST-AFNET 4 showed CV benefit with early rhythm control vs rate control in patients <12 months from diagnosis',
        'Ablation in heart failure: CASTLE-AF demonstrated reduced mortality and hospitalization with ablation vs medical therapy in HFrEF',
        'Left atrial appendage occlusion: PROTECT-AF and PREVAIL trials support LAAO as alternative to warfarin in selected patients',
        'Digital health: Apple Heart Study and Huawei Heart Study demonstrate feasibility of AFib screening using wearables',
        'Genetic risk stratification: Genome-wide association studies identify susceptibility loci, but clinical utility remains limited',
        'Artificial intelligence: Machine learning for AFib prediction, personalized ablation targeting, and automated ECG interpretation',
      ],
      
      controversies: [
        {
          topic: 'Rate vs Rhythm Control Strategy',
          perspectives: [
            'AFFIRM trial showed no mortality benefit of rhythm control over rate control in elderly patients',
            'EAST-AFNET 4 showed benefit of early rhythm control in first 12 months',
            'Patient-specific factors (symptoms, age, comorbidities) drive individualized decisions',
          ],
        },
        {
          topic: 'First-Line Ablation in Paroxysmal AFib',
          perspectives: [
            'CABANA trial underpowered but suggested trend toward benefit',
            'MANTRA-PAF and RAAFT-2 showed improved outcomes with ablation as first-line vs antiarrhythmics',
            'Cost-effectiveness and operator experience are practical considerations',
          ],
        },
        {
          topic: 'Stroke Risk in Short Episodes',
          perspectives: [
            'ASSERT showed increased stroke risk with subclinical AF >6 minutes but <24 hours',
            'NTP-AF showed benefit of anticoagulation for device-detected AF >5.5 hours',
            'Optimal threshold for initiating anticoagulation in subclinical AF remains debated',
          ],
        },
      ],
      
      statisticalContext: `The CHA₂DS₂-VASc score has modest predictive value (C-statistic ~0.6-0.7). Novel biomarkers (NT-proBNP, troponin, GDF-15) and genetic scores may improve prediction but are not yet incorporated into guidelines. 

The ARISTOTLE, ROCKET-AF, and RE-LY trials established non-vitamin K oral anticoagulants (NOACs) as preferred over warfarin for most patients. Meta-analysis shows:
- 50% reduction in intracranial hemorrhage
- 10% reduction in all-cause mortality
- Similar efficacy for stroke prevention

However, the optimal duration of anticoagulation after successful ablation remains uncertain (ongoing trials: CABANA-AF, ARREST-AF).`,
      
      references: [
        'Kirchhof P, et al. Early Rhythm-Control Therapy in Patients with Atrial Fibrillation. N Engl J Med. 2020;383(14):1305-1316.',
        'Marrouche NF, et al. Catheter Ablation for Atrial Fibrillation with Heart Failure. N Engl J Med. 2018;378(5):417-427.',
        'January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151.',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `Clinical management of AFib requires comprehensive stroke risk assessment (CHA₂DS₂-VASc), bleeding risk assessment (HAS-BLED), and shared decision-making regarding anticoagulation. For anticoagulation candidates, direct oral anticoagulants (DOACs) are preferred over warfarin unless mechanical heart valves or moderate-severe mitral stenosis. Rate control targets lenient (resting HR <110 bpm) vs strict control based on symptoms. Rhythm control options include antiarrhythmic drugs (flecainide, propafenone, sotalol, dofetilide, amiodarone, dronedarone) and catheter ablation. AFib in the setting of acute illness (sepsis, post-surgery) often resolves with treatment of the underlying condition.`,
      
      clinicalApproach: [
        'CHA₂DS₂-VASc score calculation: Congestive heart failure (1), Hypertension (1), Age 65-74 (1), Age ≥75 (2), Diabetes (1), Stroke/TIA (2), Vascular disease (1), Sex category female (1)',
        'Anticoagulation recommended for men with score ≥2, women with score ≥3 (Class I); consider for men=1, women=2 (Class IIa)',
        'DOACs preferred over warfarin for eligible patients (apixaban, rivaroxaban, dabigatran, edoxaban)',
        'Rate control: Beta-blockers or non-DHP calcium channel blockers as first-line; digoxin for sedentary patients or with HFrEF',
        'Rhythm control: Flecainide/propafenone for normal hearts; sotalol/dofetilide with structural disease; amiodarone for refractory cases',
        'Catheter ablation: First-line for symptomatic paroxysmal AFib; consider in persistent AFib and heart failure',
      ],
      
      differentialConsiderations: [
        'Atrial flutter: Sawtooth flutter waves, typically atrial rate 250-350 bpm, regular ventricular response with fixed block',
        'Multifocal atrial tachycardia (MAT): ≥3 distinct P-wave morphologies, rate >100 bpm, irregular rhythm',
        'Premature atrial contractions (PACs): Isolated early beats with abnormal P-wave morphology',
        'Sinus arrhythmia: Phasic variation with respiration, normal P-wave morphology',
        'Atrial tachycardia: Regular rhythm with abnormal P-wave morphology, often with AV block',
        'Wolff-Parkinson-White (WPW) with AFib: Irregular wide-complex tachycardia - avoid AV nodal blockers!',
      ],
      
      guidelines: [
        '2019 AHA/ACC/HRS Focused Update on Atrial Fibrillation',
        '2020 ESC Guidelines for Atrial Fibrillation Management',
        '2023 ACC/AHA/ACCP/HRS Guideline for Diagnosis and Management of Atrial Fibrillation',
        '2021 EHRA Practical Guide on the Use of Non-Vitamin K Antagonist Oral Anticoagulants',
      ],
      
      caseExamples: [
        {
          presentation: '72-year-old male with hypertension and Type 2 diabetes presents with palpitations. ECG shows AFib with rate 120 bpm. CHA₂DS₂-VASc = 4 (age 72=1, hypertension=1, diabetes=1, male=0).',
          keyFindings: [
            'High stroke risk (4.8% annual risk untreated)',
            'Hypertensive heart disease likely contributes',
            'Recent onset - rhythm control strategy appropriate',
          ],
          teachingPoints: [
            'Start apixaban 5mg BID (or 2.5mg if meets 2 of 3: age≥80, weight≤60kg, creatinine≥1.5)',
            'Rate control with metoprolol 25-50mg BID',
            'Cardioversion if AFib <48 hours or TEE-guided if >48 hours',
            'Consider flecainide or amiodarone for rhythm maintenance',
            'Long-term anticoagulation indicated regardless of rhythm status',
          ],
        },
        {
          presentation: '58-year-old female, marathon runner, episodes of palpitations during long runs. Holter shows paroxysmal AFib episodes 2-4 hours, self-terminating. No other risk factors. CHA₂DS₂-VASc = 1 (female).',
          keyFindings: [
            'Vagally-mediated AFib triggered by increased parasympathetic tone',
            'Low stroke risk (0.6% annual risk)',
            'Young, active patient - likely prefers rhythm control',
          ],
          teachingPoints: [
            'Anticoagulation not indicated with score of 1 (shared decision)',
            'Avoid flecainide (can paradoxically worsen vagal AFib)',
            'Consider pill-in-the-pocket strategy: flecainide 300mg PO single dose at symptom onset',
            'Catheter ablation has high success rate in vagal AFib',
            'Reduce endurance exercise intensity - "excessive exercise" can promote AFib',
          ],
        },
      ],
      
      references: [
        'January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151.',
        'Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156.',
        'Hindricks G, et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021;42(5):373-498.',
      ],
    },
  },
  
  interactions: {
    calculators: [
      {
        name: 'CHA₂DS₂-VASc Score Calculator',
        inputs: [
          { name: 'Congestive Heart Failure', type: 'select', options: ['No', 'Yes'] },
          { name: 'Hypertension', type: 'select', options: ['No', 'Yes'] },
          { name: 'Age', type: 'select', options: ['<65', '65-74', '≥75'] },
          { name: 'Diabetes', type: 'select', options: ['No', 'Yes'] },
          { name: 'Prior Stroke/TIA/Thromboembolism', type: 'select', options: ['No', 'Yes'] },
          { name: 'Vascular Disease (MI, PAD)', type: 'select', options: ['No', 'Yes'] },
          { name: 'Sex', type: 'select', options: ['Male', 'Female'] },
        ],
        formula: 'CHF(1) + HTN(1) + Age 65-74(1) or ≥75(2) + Diabetes(1) + Stroke/TIA(2) + Vascular(1) + Female(1)',
        interpretation: 'Score 0 (male) or 1 (female): No anticoagulation. Score 1 (male) or 2 (female): Consider anticoagulation. Score ≥2 (male) or ≥3 (female): Anticoagulation recommended.',
      },
      {
        name: 'HAS-BLED Bleeding Risk Calculator',
        inputs: [
          { name: 'Hypertension (uncontrolled SBP>160)', type: 'select', options: ['No', 'Yes'] },
          { name: 'Abnormal Renal/Liver Function', type: 'select', options: ['None', '1 abnormality', 'Both'] },
          { name: 'Stroke History', type: 'select', options: ['No', 'Yes'] },
          { name: 'Bleeding History', type: 'select', options: ['No', 'Yes'] },
          { name: 'Labile INR (if on warfarin)', type: 'select', options: ['No', 'Yes'] },
          { name: 'Elderly (Age >65)', type: 'select', options: ['No', 'Yes'] },
          { name: 'Drugs (NSAIDs, antiplatelet)', type: 'select', options: ['No', 'Yes'] },
          { name: 'Alcohol (≥8 drinks/week)', type: 'select', options: ['No', 'Yes'] },
        ],
        formula: 'Each item = 1 point, max 9 points',
        interpretation: 'Score ≥3 indicates high bleeding risk - not a contraindication but signals need for closer monitoring and addressing modifiable risks.',
      },
    ],
    
    anatomyPoints: [
      { structure: 'heart', focus: 'left-atrium', description: 'Upper chamber where AFib originates, particularly around pulmonary vein openings' },
      { structure: 'heart', focus: 'left-atrial-appendage', description: 'Pouch-like structure where 90% of clots form during AFib' },
      { structure: 'heart', focus: 'pulmonary-veins', description: 'Four veins that are the most common source of AFib triggers' },
      { structure: 'heart', focus: 'av-node', description: 'Electrical gateway that filters signals between atria and ventricles' },
      { structure: 'brain', focus: 'cerebral-arteries', description: 'Destination of clots that break off from the heart - causes stroke' },
    ],
    
    relatedMedications: [
      'warfarin',
      'apixaban',
      'rivaroxaban',
      'dabigatran',
      'edoxaban',
      'metoprolol',
      'atenolol',
      'diltiazem',
      'verapamil',
      'digoxin',
      'flecainide',
      'propafenone',
      'sotalol',
      'dofetilide',
      'amiodarone',
      'dronedarone',
    ],
    
    relatedConditions: [
      'hypertension',
      'heart-failure',
      'sleep-apnea',
      'hyperthyroidism',
      'stroke',
      'cardiomyopathy',
      'mitral-stenosis',
      'wolff-parkinson-white',
    ],
  },
  
  quiz: {
    title: 'Atrial Fibrillation Knowledge Assessment',
    passingScore: 80,
    questions: [
      {
        id: 'afib-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'Why does atrial fibrillation increase the risk of stroke?',
        options: [
          'The heart beats too fast and wears out',
          'Blood pools in the upper chambers and can form clots',
          'It causes high blood pressure',
          'The heart stops beating completely',
        ],
        correctAnswer: 1,
        explanation: 'In AFib, the atria quiver instead of contracting effectively. This causes blood to pool, especially in the left atrial appendage. Clots can form in this stagnant blood and travel to the brain, causing a stroke.',
      },
      {
        id: 'afib-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'Where do the abnormal electrical signals that trigger atrial fibrillation most commonly originate?',
        options: [
          'The SA node in the right atrium',
          'The AV node between atria and ventricles',
          'The pulmonary veins entering the left atrium',
          'The ventricles in the lower heart chambers',
        ],
        correctAnswer: 2,
        explanation: 'The pulmonary veins, which carry oxygenated blood from the lungs to the left atrium, are the source of abnormal electrical signals in about 90% of paroxysmal AFib cases. This is why pulmonary vein isolation is a key ablation strategy.',
      },
      {
        id: 'afib-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'A 70-year-old male has hypertension and diabetes. What is his CHA₂DS₂-VASc score and what does it mean?',
        options: [
          'Score 1: No anticoagulation needed',
          'Score 2: Consider anticoagulation',
          'Score 3: Anticoagulation recommended',
          'Score 4: Anticoagulation strongly recommended',
        ],
        correctAnswer: 2,
        explanation: 'Score calculation: Age 70 (1 point) + Hypertension (1 point) + Diabetes (1 point) = 3. With a score of 3, oral anticoagulation is recommended (Class I indication). The annual stroke risk is approximately 3.2% without anticoagulation.',
      },
      {
        id: 'afib-q4',
        type: 'case-study',
        complexity: 4,
        question: 'A 55-year-old marathon runner experiences palpitations during long training runs. ECG shows paroxysmal AFib. He has no other medical conditions. Which statement is most accurate?',
        options: [
          'He needs lifelong warfarin therapy',
          'This is likely vagally-mediated AFib; avoid flecainide',
          'He should immediately stop all exercise forever',
          'He needs urgent electrical cardioversion',
        ],
        correctAnswer: 1,
        explanation: 'Athletes can develop AFib due to high vagal tone (parasympathetic activation) during endurance exercise. This "vagally-mediated" AFib can paradoxically worsen with flecainide. Management may include reducing exercise intensity, considering a "pill-in-the-pocket" approach, or catheter ablation.',
      },
      {
        id: 'afib-q5',
        type: 'case-study',
        complexity: 6,
        question: 'A 78-year-old female with AFib on apixaban presents with GI bleeding (Hgb 7.2). Endoscopy shows a bleeding ulcer. Which management is most appropriate?',
        options: [
          'Continue apixaban and transfuse only',
          'Hold apixaban, give andexanet alfa, urgent endoscopic hemostasis',
          'Switch to warfarin for better reversibility',
          'Give vitamin K immediately',
        ],
        correctAnswer: 1,
        explanation: 'For life-threatening bleeding on a factor Xa inhibitor (apixaban, rivaroxaban, edoxaban), andexanet alfa is the specific reversal agent. For dabigatran, idarucizumab is used. Hold the anticoagulant, administer reversal agent if available, and perform urgent endoscopic hemostasis.',
      },
    ],
  },
  
  references: [
    {
      citation: 'January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151.',
      doi: '10.1161/CIR.0000000000000665',
    },
    {
      citation: 'Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156.',
      doi: '10.1161/CIR.0000000000001193',
    },
    {
      citation: 'Hindricks G, et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021;42(5):373-498.',
      doi: '10.1093/eurheartj/ehaa612',
    },
    {
      citation: 'Kirchhof P, et al. Early Rhythm-Control Therapy in Patients with Atrial Fibrillation. N Engl J Med. 2020;383(14):1305-1316.',
      doi: '10.1056/NEJMoa2019422',
    },
    {
      citation: 'Calkins H, et al. 2017 HRS/EHRA/ECAS/APHRS/SOLAECE expert consensus statement on catheter and surgical ablation of atrial fibrillation. Heart Rhythm. 2017;14(10):e275-e444.',
      doi: '10.1016/j.hrthm.2017.05.012',
    },
    {
      citation: 'Connolly SJ, et al. Apixaban in patients with atrial fibrillation. N Engl J Med. 2011;364(9):806-817.',
      doi: '10.1056/NEJMoa1007432',
    },
    {
      citation: 'Nattel S, et al. Arrhythmogenic ion-channel remodeling in the heart: heart failure, myocardial infarction, and atrial fibrillation. Physiol Rev. 2007;87(2):425-456.',
      doi: '10.1152/physrev.00006.2006',
    },
    {
      citation: 'Packer DL, et al. Effect of Catheter Ablation vs Antiarrhythmic Drug Therapy on Mortality, Stroke, Bleeding, and Cardiac Arrest Among Patients With Atrial Fibrillation: The CABANA Randomized Clinical Trial. JAMA. 2019;321(13):1261-1274.',
      doi: '10.1001/jama.2019.0693',
    },
  ],
  
  resources: [
    {
      title: 'American Heart Association - AFib Resources',
      type: 'website',
      url: 'https://www.heart.org/en/health-topics/atrial-fibrillation',
      description: 'Patient-friendly information on AFib symptoms, diagnosis, and treatment',
    },
    {
      title: 'StopAfib.org',
      type: 'website',
      url: 'https://www.stopafib.org',
      description: 'Patient advocacy and education organization for AFib',
    },
    {
      title: 'EHRA Patient Website',
      type: 'website',
      url: 'https://www.escardio.org/Patient-care',
      description: 'European Heart Rhythm Association patient education materials',
    },
    {
      title: 'My AFib Experience',
      type: 'website',
      url: 'https://www.myafibexperience.org',
      description: 'American Heart Association support community for AFib patients',
    },
  ],
};

export default atrialFibrillationModule;
