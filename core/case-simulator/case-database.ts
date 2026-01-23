/**
 * Clinical Case Database
 *
 * Educational clinical cases for learning how physicians think.
 * Each case teaches clinical reasoning through interactive scenarios.
 */

import type { ClinicalCase, CaseCategory, CaseComplexity } from './types.js';

// ============================================
// Case: Acute Myocardial Infarction
// ============================================

const STEMI_CASE: ClinicalCase = {
  id: 'stemi-classic',
  title: 'The Morning Chest Pain',
  category: 'cardiology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the classic presentation of ST-elevation myocardial infarction',
    'Understand the importance of rapid ECG acquisition in chest pain',
    'Learn the initial management of STEMI',
    'Appreciate the concept of "door-to-balloon" time',
  ],

  presentation: {
    chiefComplaint: 'Chest pain',
    demographics: {
      age: 58,
      sex: 'male',
      occupation: 'accountant',
      context: 'presents to the emergency department at 6:30 AM',
    },
    openingParagraph: `Mr. Johnson is a 58-year-old accountant who presents to the emergency department at 6:30 AM with chest pain that woke him from sleep about 45 minutes ago. He describes the pain as a "heavy pressure" in the center of his chest that "won't go away." He appears anxious and is clutching his chest.`,
    generalAppearance: 'Middle-aged man appearing uncomfortable, diaphoretic, clutching his chest. Slightly pale. Appears anxious.',
    vitalSigns: {
      temperature: '98.6°F (37°C)',
      heartRate: '98 bpm, regular',
      bloodPressure: '156/92 mmHg',
      respiratoryRate: '22/min',
      oxygenSaturation: '94% on room air',
      interpretation: 'Tachycardic, hypertensive, tachypneic with mild hypoxia. These findings are consistent with sympathetic activation from cardiac distress.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When exactly did the pain start?',
        category: 'hpi',
        response: 'It woke me up around 5:45 AM. One minute I was asleep, the next I had this terrible pressure in my chest.',
        educationalNote: 'Acute onset, especially waking from sleep (early morning), is common in MI. The circadian pattern of MI shows peaks in early morning hours.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-character',
        question: 'Can you describe what the pain feels like?',
        category: 'hpi',
        response: 'It\'s like an elephant sitting on my chest. Heavy pressure. It\'s not sharp - more like a squeezing feeling.',
        educationalNote: '"Elephant on chest" is a classic description of cardiac ischemic pain. The pressure/squeezing quality reflects visceral pain from the heart.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-radiation',
        question: 'Does the pain go anywhere else?',
        category: 'hpi',
        response: 'Yes, it goes down my left arm, and my jaw feels tight too.',
        educationalNote: 'Radiation to left arm and jaw is classic for cardiac pain due to viscerosomatic convergence - cardiac afferents enter the spinal cord at the same level as arm/jaw sensory nerves.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-associated',
        question: 'Any other symptoms?',
        category: 'hpi',
        response: 'I feel nauseous, and I\'ve been sweating a lot. My wife said I looked gray when she turned on the light.',
        educationalNote: 'Nausea and diaphoresis are classic associated symptoms of MI, reflecting vagal activation and catecholamine surge.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-exacerbating',
        question: 'Does anything make it worse or better?',
        category: 'hpi',
        response: 'Nothing helps. I tried antacids, I tried lying down, sitting up - nothing changes it.',
        educationalNote: 'Cardiac pain typically doesn\'t change with position or antacids - this helps differentiate from GERD or musculoskeletal pain.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-cardiac',
        question: 'Do you have any heart problems?',
        category: 'pmh',
        response: 'No heart attacks before. But my doctor said my cholesterol was high last year. I was supposed to start a medication but never filled it.',
        educationalNote: 'Hyperlipidemia is a major modifiable risk factor for coronary artery disease. This patient\'s untreated dyslipidemia contributed to his event.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-dm',
        question: 'Any diabetes?',
        category: 'pmh',
        response: 'My doctor said I\'m "pre-diabetic" - my sugar was 110 fasting last time.',
        educationalNote: 'Prediabetes and diabetes are significant cardiovascular risk factors. Even impaired fasting glucose increases MI risk.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-htn',
        question: 'High blood pressure?',
        category: 'pmh',
        response: 'Yes, I take lisinopril for that. Been on it for about 5 years.',
        educationalNote: 'Hypertension is a major risk factor for MI. At least he\'s on treatment.',
        isKeyFinding: false,
      },
      {
        id: 'fh-cardiac',
        question: 'Any family history of heart disease?',
        category: 'family',
        response: 'My father had a heart attack at 52 and died. My older brother had a stent put in last year - he\'s 62.',
        educationalNote: 'Strong family history of premature CAD (first-degree male relative <55 or female <65) is a major non-modifiable risk factor.',
        isKeyFinding: true,
      },
      {
        id: 'sh-smoking',
        question: 'Do you smoke?',
        category: 'social',
        response: 'I quit 5 years ago, but I smoked a pack a day for 30 years before that.',
        educationalNote: '30 pack-years is significant. While quitting helps, prior smoking history still contributes to cardiovascular risk.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications do you take?',
        category: 'medications',
        response: 'Just the lisinopril 10mg daily. And sometimes ibuprofen for my back.',
        educationalNote: 'Note: He should have been on a statin given his risk factors. NSAIDs can increase cardiovascular risk.',
        isKeyFinding: false,
      },
      {
        id: 'allergies',
        question: 'Any allergies?',
        category: 'allergies',
        response: 'No allergies to any medications.',
        educationalNote: 'Important to document before administering aspirin and other MI treatments.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-heart-sounds',
            exam: 'Heart auscultation',
            finding: 'Regular rate and rhythm, S1 and S2 normal. Soft S4 gallop appreciated.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'S4 gallop indicates decreased ventricular compliance - the atrium contracts against a stiff ventricle. Common in acute ischemia and hypertension.',
          },
          {
            id: 'cv-jvp',
            exam: 'Jugular venous pressure',
            finding: 'Mildly elevated at 10 cm H2O',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Mildly elevated JVP may indicate early right heart strain or volume overload.',
          },
          {
            id: 'cv-pulses',
            exam: 'Peripheral pulses',
            finding: 'All pulses intact and symmetric',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Symmetric pulses make aortic dissection less likely (dissection can cause pulse deficits).',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-lungs',
            exam: 'Lung auscultation',
            finding: 'Clear to auscultation bilaterally. No wheezes, rales, or rhonchi.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Clear lungs are reassuring - rales would suggest pulmonary edema from heart failure.',
          },
        ],
      },
      {
        system: 'Skin',
        findings: [
          {
            id: 'skin-appearance',
            exam: 'Skin inspection',
            finding: 'Diaphoretic (sweaty). Cool, clammy extremities. Slightly pale.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Diaphoresis and cool/clammy skin indicate sympathetic activation - the body\'s stress response to cardiac ischemia.',
          },
        ],
      },
      {
        system: 'Abdomen',
        findings: [
          {
            id: 'abd-exam',
            exam: 'Abdominal examination',
            finding: 'Soft, non-tender, non-distended. No hepatomegaly.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Normal abdominal exam makes GI causes less likely.',
          },
        ],
      },
    ],

    availableLabs: [
      {
        id: 'troponin',
        name: 'Troponin I',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Troponin I', value: '2.4', unit: 'ng/mL', isAbnormal: true, flag: 'critical' },
          ],
          interpretation: 'Markedly elevated, indicating myocardial injury. Normal is <0.04 ng/mL. This level confirms acute MI.',
        },
        isAppropriate: true,
        educationalNote: 'Troponin is the gold standard biomarker for myocardial injury. Elevated troponin with appropriate clinical context confirms acute MI. However, in STEMI, you should not wait for troponin to activate the cath lab.',
      },
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'WBC', value: '12.4', unit: 'K/uL', isAbnormal: true, flag: 'high' },
            { name: 'Hemoglobin', value: '14.2', unit: 'g/dL', isAbnormal: false },
            { name: 'Platelets', value: '245', unit: 'K/uL', isAbnormal: false },
          ],
          interpretation: 'Mild leukocytosis (stress response). No anemia. Adequate platelets for antiplatelet therapy.',
        },
        isAppropriate: true,
        educationalNote: 'CBC is part of standard workup - checks for anemia (which can worsen ischemia) and platelet count (for antiplatelet therapy safety).',
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Sodium', value: '139', unit: 'mEq/L', isAbnormal: false },
            { name: 'Potassium', value: '4.2', unit: 'mEq/L', isAbnormal: false },
            { name: 'Creatinine', value: '1.1', unit: 'mg/dL', isAbnormal: false },
            { name: 'Glucose', value: '186', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Normal renal function (important for contrast and medications). Stress hyperglycemia common in acute MI.',
        },
        isAppropriate: true,
        educationalNote: 'BMP checks kidney function (important for cath lab contrast and medications) and electrolytes (K+ affects arrhythmia risk). Stress hyperglycemia is common in MI.',
      },
      {
        id: 'bnp',
        name: 'BNP',
        turnaroundTime: '45 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'BNP', value: '450', unit: 'pg/mL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Elevated, indicating cardiac wall stress. Suggests some degree of heart failure from the acute event.',
        },
        isAppropriate: true,
        educationalNote: 'BNP rises with ventricular wall stress. Elevated in MI and heart failure. Can help with prognosis but not needed for acute STEMI decision-making.',
      },
      {
        id: 'coags',
        name: 'PT/INR, PTT',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'PT/INR', value: '1.0', unit: '', isAbnormal: false },
            { name: 'PTT', value: '28', unit: 'seconds', isAbnormal: false },
          ],
          interpretation: 'Normal coagulation. Patient not anticoagulated.',
        },
        isAppropriate: true,
        educationalNote: 'Important before giving anticoagulation and for potential cath lab procedure.',
      },
    ],

    availableImaging: [
      {
        id: 'cxr',
        name: 'Chest X-ray',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          findings: 'Heart size normal. No pulmonary edema. No pneumothorax or consolidation.',
          impression: 'Normal chest radiograph.',
          imageDescription: 'PA and lateral chest X-ray showing normal cardiac silhouette and clear lung fields.',
        },
        isAppropriate: true,
        educationalNote: 'CXR assesses for pulmonary edema, cardiomegaly, and excludes other causes of chest pain (pneumothorax, pneumonia). Quick and valuable.',
      },
      {
        id: 'echo',
        name: 'Echocardiogram',
        turnaroundTime: '30 minutes',
        cost: 'medium',
        result: {
          findings: 'LV function reduced with EF 40%. Regional wall motion abnormality: anterior and apical hypokinesis. No pericardial effusion.',
          impression: 'Reduced LV function with regional wall motion abnormality consistent with acute anterior MI.',
          imageDescription: 'Echocardiogram showing reduced anterior wall motion consistent with LAD territory ischemia.',
        },
        isAppropriate: true,
        educationalNote: 'Echo can show regional wall motion abnormalities in acute MI and assess LV function. Useful but should not delay cath lab activation in clear STEMI.',
      },
    ],

    otherTests: [
      {
        id: 'ecg',
        name: '12-Lead ECG',
        turnaroundTime: '5 minutes',
        result: 'Sinus rhythm at 98 bpm. ST-segment elevation in leads V1-V4 (4mm in V2-V3) with reciprocal ST depression in inferior leads. Hyperacute T waves in anterior leads. No Q waves yet.',
        isAppropriate: true,
        educationalNote: 'THIS IS THE KEY TEST. ST elevation in V1-V4 indicates anterior STEMI - occlusion of the LAD (left anterior descending artery). This ECG finding should trigger immediate cath lab activation. The reciprocal changes in inferior leads support the diagnosis.',
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial',
        name: 'Initial Assessment',
        description: 'Patient has just arrived. You need to quickly assess and stabilize.',
        availableDataIds: ['hpi-onset', 'hpi-character', 'hpi-radiation', 'hpi-associated', 'vitals'],
        nextDecisionPointId: 'first-test',
      },
      {
        id: 'testing',
        name: 'Diagnostic Testing',
        description: 'Based on your clinical impression, what test do you order FIRST?',
        availableDataIds: ['ecg', 'troponin', 'cbc', 'bmp', 'cxr'],
        nextDecisionPointId: 'ecg-interpretation',
      },
      {
        id: 'intervention',
        name: 'Intervention Decision',
        description: 'The ECG shows STEMI. What is the next step?',
        availableDataIds: ['echo', 'troponin-result'],
        nextDecisionPointId: 'treatment-decision',
      },
    ],

    decisionPoints: [
      {
        id: 'first-test',
        stageId: 'initial',
        question: 'Given this presentation, what test should you order FIRST?',
        context: 'A 58-year-old man with chest pressure, diaphoresis, and risk factors for heart disease.',
        options: [
          {
            id: 'ecg-first',
            text: 'Stat 12-lead ECG',
            consequence: 'ECG obtained within 5 minutes showing STEMI',
            isCorrect: true,
            feedback: 'Correct! In any patient with chest pain concerning for ACS, an ECG should be obtained within 10 minutes of arrival. This is the fastest way to identify STEMI, which requires emergent intervention.',
            nextStageId: 'testing',
          },
          {
            id: 'troponin-first',
            text: 'Stat troponin',
            consequence: 'Lab sent. Will take 30 minutes for result.',
            isCorrect: false,
            feedback: 'While troponin is important, it takes 30+ minutes for results. In STEMI, you cannot wait for troponin - the ECG will give you the diagnosis immediately. Every minute of delay = more heart muscle damage.',
            nextStageId: 'testing',
          },
          {
            id: 'cxr-first',
            text: 'Portable chest X-ray',
            consequence: 'CXR ordered. Will take 15 minutes.',
            isCorrect: false,
            feedback: 'CXR is useful but not the priority. It doesn\'t diagnose MI. Get the ECG first - it takes 5 minutes and can diagnose STEMI immediately.',
            nextStageId: 'testing',
          },
          {
            id: 'history-first',
            text: 'Complete detailed history first',
            consequence: 'You spend 15 minutes taking a complete history.',
            isCorrect: false,
            feedback: 'While history is important, this patient needs an ECG immediately. You can gather history while hooking up the ECG or afterward. Time is muscle!',
            nextStageId: 'testing',
          },
        ],
        correctOptionId: 'ecg-first',
        educationalExplanation: 'In suspected ACS, the ECG is the most important initial test. Guidelines recommend ECG within 10 minutes of ED arrival. STEMI diagnosis depends on ECG findings. "Time is muscle" - every minute of coronary occlusion causes more myocardial necrosis.',
      },
      {
        id: 'ecg-interpretation',
        stageId: 'testing',
        question: 'The ECG shows ST elevation in V1-V4 with reciprocal inferior changes. What does this indicate?',
        context: 'You see 4mm ST elevation in V2-V3, with ST depression in leads II, III, aVF.',
        options: [
          {
            id: 'anterior-stemi',
            text: 'Anterior STEMI - LAD occlusion',
            consequence: 'You correctly identify anterior STEMI',
            isCorrect: true,
            feedback: 'Correct! V1-V4 represent the anterior wall, supplied by the LAD. ST elevation here indicates anterior STEMI. The inferior reciprocal changes support this. This requires emergent reperfusion.',
            nextStageId: 'intervention',
          },
          {
            id: 'inferior-stemi',
            text: 'Inferior STEMI - RCA occlusion',
            consequence: 'You misidentify the location',
            isCorrect: false,
            feedback: 'The ST elevation is in V1-V4 (anterior), not II, III, aVF (inferior). The inferior leads show ST depression, which is reciprocal change. Remember: look at where ST is ELEVATED to identify the culprit territory.',
            nextStageId: 'intervention',
          },
          {
            id: 'unstable-angina',
            text: 'Unstable angina - watch and wait',
            consequence: 'You underestimate the severity',
            isCorrect: false,
            feedback: 'This is NOT unstable angina. There is significant ST elevation, which defines STEMI. Unstable angina doesn\'t have ST elevation. STEMI requires emergent cath, not "watch and wait."',
            nextStageId: 'intervention',
          },
        ],
        correctOptionId: 'anterior-stemi',
        educationalExplanation: 'ECG localization: V1-V4 = anterior (LAD), II/III/aVF = inferior (RCA usually), I/aVL = lateral. Reciprocal changes (ST depression opposite to elevation) help confirm the diagnosis. Anterior STEMI from LAD occlusion is particularly dangerous because the LAD supplies a large amount of myocardium.',
      },
      {
        id: 'treatment-decision',
        stageId: 'intervention',
        question: 'You\'ve identified anterior STEMI. What is the most important next step?',
        context: 'Time since symptom onset: approximately 1 hour. Your hospital has a cardiac catheterization lab.',
        options: [
          {
            id: 'activate-cath',
            text: 'Activate cath lab for emergent PCI + give aspirin, heparin, start IV access',
            consequence: 'Cath lab activated. Team assembling. Door-to-balloon time target: 90 minutes.',
            isCorrect: true,
            feedback: 'Correct! Primary PCI (percutaneous coronary intervention) is the preferred reperfusion strategy when available in a timely fashion. Aspirin, anticoagulation, and IV access happen simultaneously. The goal is door-to-balloon time < 90 minutes.',
            nextStageId: undefined,
          },
          {
            id: 'fibrinolytics',
            text: 'Give fibrinolytic therapy (tPA)',
            consequence: 'You prepare fibrinolytic medication.',
            isCorrect: false,
            feedback: 'Fibrinolytics are an option if PCI is not available within an acceptable timeframe (generally >120 minutes). Since your hospital has a cath lab, primary PCI is preferred - it has better outcomes and lower bleeding risk.',
            nextStageId: undefined,
          },
          {
            id: 'wait-troponin',
            text: 'Wait for troponin results to confirm MI before cath lab',
            consequence: 'You wait for lab results. 30 minutes pass.',
            isCorrect: false,
            feedback: 'Never wait for troponin in clear STEMI! The ECG makes the diagnosis. Every minute of delay increases infarct size. Troponin is useful for confirmation but should not delay reperfusion.',
            nextStageId: undefined,
          },
          {
            id: 'admit-monitor',
            text: 'Admit to CCU for monitoring and medical management',
            consequence: 'You admit without catheterization.',
            isCorrect: false,
            feedback: 'This would be malpractice in STEMI. The patient needs emergent reperfusion - either PCI or fibrinolytics. Medical management alone results in larger infarcts and worse outcomes.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'activate-cath',
        educationalExplanation: 'STEMI treatment requires emergent reperfusion. Primary PCI (opening the artery with a balloon/stent) is preferred if available within 90-120 minutes. Fibrinolytics are an alternative if PCI is delayed. The phrase "door-to-balloon time" refers to the time from hospital arrival to opening the artery - the shorter the better. While preparing for cath, patients receive aspirin, anticoagulation, and often P2Y12 inhibitors.',
      },
    ],

    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'ECG obtained immediately, STEMI recognized, cath lab activated within minutes',
        stageSequence: ['initial', 'testing', 'intervention'],
        outcome: 'optimal',
      },
      {
        id: 'delayed',
        name: 'Delayed Recognition',
        description: 'Waited for troponin or other tests before cath activation',
        stageSequence: ['initial', 'testing', 'intervention'],
        outcome: 'suboptimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'ST-Elevation Myocardial Infarction (STEMI) - Anterior',
      icdCode: 'I21.0',
      explanation: 'Acute occlusion of the left anterior descending (LAD) coronary artery, causing ischemic damage to the anterior wall of the left ventricle.',
      pathophysiology: 'Rupture of an atherosclerotic plaque in the LAD triggered platelet aggregation and thrombus formation, completely occluding the artery. Without blood flow, myocardium supplied by the LAD became ischemic and began to die. The affected area: anterior wall and apex of the left ventricle, plus the interventricular septum.',
      epidemiology: 'MI affects over 800,000 Americans annually. Anterior STEMI represents about 40% of STEMIs. Risk factors include hypertension, dyslipidemia, smoking, diabetes, family history, and age.',
      prognosis: 'With timely reperfusion, most STEMI patients survive. However, late presentation or delayed treatment results in larger infarcts and worse outcomes. Anterior MI carries higher mortality than inferior MI due to more myocardium at risk.',
    },

    diagnosticReasoning: `This case demonstrates classic STEMI presentation and the importance of rapid recognition. The patient's symptoms (substernal pressure, arm and jaw radiation, diaphoresis, nausea) with cardiac risk factors (hypertension, dyslipidemia, smoking history, family history) should immediately raise concern for ACS. The ECG showing ST elevation in V1-V4 with reciprocal inferior changes confirms anterior STEMI. The key teaching point: in STEMI, the ECG is diagnostic and treatment should not be delayed for troponin or other tests.`,

    keyFindings: [
      'Classic presentation: substernal pressure with radiation to arm and jaw',
      'Associated symptoms: diaphoresis, nausea',
      'Multiple cardiac risk factors',
      'ECG: ST elevation V1-V4 (anterior leads) with inferior reciprocal changes',
      'Elevated troponin confirming myocardial injury',
    ],

    treatment: {
      immediate: 'Aspirin 325mg chewed, IV heparin, cath lab activation, morphine for pain if needed, oxygen if hypoxic',
      medications: [
        {
          name: 'Aspirin',
          dose: '325mg',
          route: 'oral (chewed)',
          frequency: 'immediately, then 81mg daily',
          rationale: 'Inhibits platelet aggregation, reduces mortality in MI',
        },
        {
          name: 'Heparin',
          dose: '60 units/kg bolus, then 12 units/kg/hour infusion',
          route: 'IV',
          frequency: 'continuous infusion',
          rationale: 'Anticoagulation to prevent thrombus propagation',
        },
        {
          name: 'Ticagrelor',
          dose: '180mg',
          route: 'oral',
          frequency: 'loading dose, then 90mg twice daily',
          rationale: 'P2Y12 inhibitor for dual antiplatelet therapy',
        },
        {
          name: 'Atorvastatin',
          dose: '80mg',
          route: 'oral',
          frequency: 'daily',
          rationale: 'High-intensity statin for plaque stabilization and secondary prevention',
        },
      ],
      procedures: 'Primary PCI (percutaneous coronary intervention) with drug-eluting stent placement to the LAD',
      monitoring: 'Continuous telemetry, serial troponins, echocardiogram to assess LV function post-procedure',
      patientEducation: [
        'You had a heart attack caused by a blocked artery that we opened with a stent',
        'The medications prevent future blockages and are lifelong',
        'Cardiac rehabilitation will help your recovery',
        'Control blood pressure, cholesterol, blood sugar; don\'t smoke',
        'Know the symptoms of heart attack and call 911 immediately if they recur',
      ],
    },

    outcome: 'The cath lab was activated within 15 minutes of arrival. Door-to-balloon time was 72 minutes. Angiography revealed 100% occlusion of the proximal LAD, which was successfully stented. Post-procedure, patient had resolution of chest pain and ST segments normalized. Echocardiogram showed EF 45% with anterior hypokinesis. He was started on guideline-directed medical therapy and enrolled in cardiac rehabilitation.',

    followUp: 'Follow-up with cardiology in 2 weeks. Cardiac rehabilitation starting in 1 week. Repeat echocardiogram in 3 months to assess for LV recovery. Lifelong dual antiplatelet therapy for at least 1 year, then aspirin indefinitely. Aggressive risk factor modification.',
  },

  teachingPoints: [
    {
      topic: 'Time is Muscle',
      content: 'In STEMI, every minute of coronary occlusion results in more myocardial necrosis. The goal is door-to-balloon time < 90 minutes. Delays in recognition and treatment directly translate to worse outcomes.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'ECG in Chest Pain',
      content: 'An ECG should be obtained within 10 minutes of arrival for any patient with chest pain concerning for ACS. The ECG diagnoses STEMI - you should not wait for troponin when ECG shows ST elevation.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'ECG Localization',
      content: 'V1-V4 = anterior (LAD), II/III/aVF = inferior (usually RCA), I/aVL/V5-V6 = lateral. Reciprocal changes (opposite direction) in other leads help confirm the diagnosis.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'Primary PCI vs Fibrinolytics',
      content: 'Primary PCI (balloon/stent) is preferred for STEMI when available within 120 minutes. Fibrinolytics are used when PCI is delayed beyond this window. Both are better than no reperfusion.',
      category: 'treatment',
      importance: 'important',
    },
    {
      topic: 'Classic MI Presentation',
      content: 'Substernal pressure or squeezing, radiation to arm/jaw/neck, associated diaphoresis and nausea. However, many MIs present atypically - especially in women, diabetics, and elderly.',
      category: 'clinical-pearl',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Waiting for troponin results before activating cath lab in clear STEMI',
    'Assuming all chest pain is GERD without getting an ECG',
    'Not recognizing reciprocal changes that help confirm STEMI diagnosis',
    'Underestimating severity in patients with atypical presentations',
    'Delaying calling for help - cath lab activation should happen as soon as STEMI is identified',
  ],

  relatedCases: [
    'inferior-stemi',
    'nstemi',
    'unstable-angina',
    'chest-pain-gerd',
    'chest-pain-pe',
  ],
};

// ============================================
// Case: Acute Appendicitis
// ============================================

const APPENDICITIS_CASE: ClinicalCase = {
  id: 'acute-appendicitis',
  title: 'The Migrating Abdominal Pain',
  category: 'surgery',
  complexity: 'beginner',

  learningObjectives: [
    'Recognize the classic presentation of acute appendicitis',
    'Understand the pathophysiology of appendiceal obstruction and inflammation',
    'Learn the classic migration of pain from periumbilical to RLQ',
    'Appreciate the role of imaging in appendicitis diagnosis',
    'Understand when surgery vs. antibiotics is appropriate',
  ],

  presentation: {
    chiefComplaint: 'Abdominal pain',
    demographics: {
      age: 23,
      sex: 'female',
      occupation: 'college student',
      context: 'presents to the emergency department after 18 hours of abdominal pain',
    },
    openingParagraph: `Emily is a 23-year-old college student who presents to the ED with abdominal pain that started yesterday evening. She initially felt a vague discomfort around her belly button, which she attributed to something she ate. This morning, the pain moved to her lower right side and became much sharper. She has had no appetite since the pain started and felt nauseous, vomiting once this morning.`,
    generalAppearance: 'Young woman lying still on the stretcher, looking uncomfortable. She winces when the gurney is bumped. She appears to be in moderate distress.',
    vitalSigns: {
      temperature: '101.2°F (38.4°C)',
      heartRate: '102 bpm, regular',
      bloodPressure: '118/72 mmHg',
      respiratoryRate: '18/min',
      oxygenSaturation: '99% on room air',
      interpretation: 'Low-grade fever with tachycardia suggests an inflammatory or infectious process. The tachycardia is proportional to the fever.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When exactly did the pain start?',
        category: 'hpi',
        response: 'It started last night around 8 PM. At first it was just this vague uncomfortable feeling around my belly button.',
        educationalNote: 'Appendicitis classically begins with vague periumbilical pain due to visceral afferent stimulation as the appendix becomes distended and inflamed.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-migration',
        question: 'Has the pain moved or changed location?',
        category: 'hpi',
        response: 'Yes! This morning around 6 AM it moved to my right lower side and got much sharper. Now it\'s definitely right there.',
        educationalNote: 'The classic migration from periumbilical to RLQ occurs when inflammation extends through the appendiceal wall to involve the parietal peritoneum. This transition from visceral to somatic pain is pathognomonic for appendicitis.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-character',
        question: 'How would you describe the pain now?',
        category: 'hpi',
        response: 'Sharp and constant. It hurts when I move or when the bed shakes. I\'ve been trying to lie really still.',
        educationalNote: 'Peritoneal irritation causes pain with movement. Patients often lie still to minimize peritoneal stimulation - this is in contrast to renal colic where patients writhe in pain.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-nausea',
        question: 'Any nausea or vomiting?',
        category: 'hpi',
        response: 'Yes, I felt nauseous since last night and I threw up once this morning. I haven\'t been able to eat anything.',
        educationalNote: 'Anorexia is so common in appendicitis that its absence should make you question the diagnosis. Nausea and vomiting typically follow the onset of pain (pain first, then nausea).',
        isKeyFinding: true,
      },
      {
        id: 'hpi-fever',
        question: 'Have you had any fevers?',
        category: 'hpi',
        response: 'I felt warm this morning. My mom took my temperature and it was 100.8.',
        educationalNote: 'Low-grade fever (99-101°F) is typical of uncomplicated appendicitis. High fever (>102°F) may suggest perforation or another diagnosis.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-bowel',
        question: 'Any diarrhea or constipation?',
        category: 'hpi',
        response: 'I had one loose stool this morning, but not really diarrhea.',
        educationalNote: 'Some patients with appendicitis have diarrhea or constipation. A retrocecal appendix can cause diarrhea. Don\'t let GI symptoms exclude appendicitis.',
        isKeyFinding: false,
      },
      {
        id: 'gyn-lmp',
        question: 'When was your last menstrual period?',
        category: 'hpi',
        response: 'About 2 weeks ago. I\'m pretty regular.',
        educationalNote: 'Gynecologic history is essential in women with lower abdominal pain. Ectopic pregnancy, ovarian torsion, and ruptured ovarian cyst can mimic appendicitis.',
        isKeyFinding: true,
      },
      {
        id: 'gyn-pregnant',
        question: 'Could you be pregnant?',
        category: 'hpi',
        response: 'No, I\'m not sexually active right now.',
        educationalNote: 'Always confirm pregnancy status - ectopic pregnancy is a life-threatening cause of RLQ pain. Get a urine pregnancy test.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-prior',
        question: 'Any previous abdominal surgeries?',
        category: 'pmh',
        response: 'No surgeries ever.',
        educationalNote: 'Prior appendectomy obviously excludes appendicitis. Other abdominal surgeries can cause adhesions that complicate diagnosis and surgery.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-medical',
        question: 'Any medical conditions?',
        category: 'pmh',
        response: 'No, I\'ve been healthy.',
        educationalNote: 'In healthy young adults, appendicitis should be high on the differential for RLQ pain with fever.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Abdominal',
        findings: [
          {
            id: 'abd-inspection',
            exam: 'Inspection',
            finding: 'Abdomen flat, non-distended. Patient lying still, guarding right side.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Voluntary guarding and reluctance to move are signs of peritoneal irritation.',
          },
          {
            id: 'abd-rlq',
            exam: 'RLQ palpation (McBurney point)',
            finding: 'Significant tenderness at McBurney point (1/3 distance from ASIS to umbilicus). Involuntary guarding present.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'McBurney point tenderness is the classic finding in appendicitis. Involuntary guarding (muscle contraction despite patient trying to relax) indicates peritoneal inflammation.',
          },
          {
            id: 'abd-rebound',
            exam: 'Rebound tenderness',
            finding: 'Positive - pain worse when pressure released than when applied.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Rebound tenderness indicates peritoneal inflammation. It occurs because the peritoneum moves when pressure is released, causing pain when inflamed.',
          },
          {
            id: 'abd-rovsing',
            exam: 'Rovsing sign',
            finding: 'Positive - palpation of LLQ causes RLQ pain.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Rovsing sign: referred RLQ pain when palpating LLQ. The mechanism is shifting of intestinal contents toward the inflamed appendix.',
          },
          {
            id: 'abd-psoas',
            exam: 'Psoas sign',
            finding: 'Positive - RLQ pain with hip extension.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Psoas sign suggests a retrocecal appendix lying against the psoas muscle. Stretching the muscle (hip extension) causes pain.',
          },
          {
            id: 'abd-obturator',
            exam: 'Obturator sign',
            finding: 'Negative.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Obturator sign (pain with internal rotation of flexed hip) suggests a pelvic appendix near the obturator muscle.',
          },
          {
            id: 'abd-other',
            exam: 'Rest of abdomen',
            finding: 'Other quadrants non-tender, non-distended. No masses. Normal bowel sounds.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Focal RLQ findings with otherwise normal exam supports appendicitis.',
          },
        ],
      },
      {
        system: 'Pelvic',
        findings: [
          {
            id: 'pelv-exam',
            exam: 'Pelvic exam',
            finding: 'No cervical motion tenderness. No adnexal masses or tenderness.',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'Pelvic exam helps exclude PID (cervical motion tenderness), ovarian torsion or cyst (adnexal mass/tenderness). Normal pelvic exam supports appendicitis over gynecologic causes.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'WBC 14,200/μL with 85% neutrophils (left shift). Hgb 13.5, Plt 285',
          interpretation: 'Leukocytosis with neutrophil predominance ("left shift") supports acute bacterial infection/inflammation.',
          isAbnormal: true,
          educationalNote: 'WBC 10,000-18,000 is typical for uncomplicated appendicitis. Very high WBC (>18,000) may suggest perforation. Normal WBC doesn\'t exclude appendicitis.',
        },
      },
      {
        id: 'cmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'Na 139, K 3.8, Cl 103, CO2 24, BUN 12, Cr 0.8, Glucose 102',
          interpretation: 'Normal electrolytes. No dehydration or metabolic derangement.',
          isAbnormal: false,
          educationalNote: 'BMP is routine preoperative workup and assesses for dehydration from vomiting.',
        },
      },
      {
        id: 'ua',
        name: 'Urinalysis',
        category: 'basic',
        turnaroundTime: '15 minutes',
        result: {
          value: 'Yellow, clear. Negative for leukocyte esterase, nitrites, blood. No WBC, RBC, or bacteria.',
          interpretation: 'Normal urinalysis excludes UTI and kidney stone.',
          isAbnormal: false,
          educationalNote: 'UA helps differentiate from kidney stone (hematuria) and UTI (pyuria/bacteriuria). A retrocecal appendix near the ureter can cause mild pyuria.',
        },
      },
      {
        id: 'pregnancy',
        name: 'Urine Pregnancy Test',
        category: 'basic',
        turnaroundTime: '5 minutes',
        result: {
          value: 'Negative',
          interpretation: 'Not pregnant.',
          isAbnormal: false,
          educationalNote: 'Essential in any woman of childbearing age with abdominal pain. Excludes ectopic pregnancy.',
        },
      },
      {
        id: 'crp',
        name: 'C-Reactive Protein',
        category: 'specialty',
        turnaroundTime: '45 minutes',
        result: {
          value: '8.4 mg/dL (normal <0.5)',
          interpretation: 'Elevated CRP confirms significant inflammation.',
          isAbnormal: true,
          educationalNote: 'CRP adds sensitivity to WBC for appendicitis diagnosis. Combined elevated WBC and CRP is strongly suggestive.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'ct-abdomen',
        name: 'CT Abdomen/Pelvis with IV Contrast',
        modality: 'CT',
        turnaroundTime: '1 hour',
        result: {
          finding: 'Dilated appendix (11mm diameter) with wall thickening and enhancement. Periappendiceal fat stranding. Small amount of free fluid in the pelvis. No drainable abscess. No perforation seen.',
          interpretation: 'Acute appendicitis, uncomplicated.',
          isAbnormal: true,
          educationalNote: 'CT is >95% sensitive and specific for appendicitis. Key findings: dilated appendix (>6mm), wall thickening/enhancement, periappendiceal fat stranding. Appendicolith, free fluid, and extraluminal air suggest complications.',
        },
      },
      {
        id: 'us-pelvis',
        name: 'Pelvic Ultrasound',
        modality: 'Ultrasound',
        turnaroundTime: '45 minutes',
        result: {
          finding: 'Normal ovaries bilaterally. No free fluid. Visualization of appendix limited.',
          interpretation: 'No ovarian pathology. Appendix not well visualized (common limitation of US).',
          isAbnormal: false,
          educationalNote: 'Ultrasound is first-line in pediatrics and pregnancy (avoids radiation). In thin patients, a dilated non-compressible appendix can be visualized. Often non-diagnostic in adults.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      { id: 'initial', name: 'Initial Assessment', description: 'Gather history and physical exam' },
      { id: 'testing', name: 'Diagnostic Workup', description: 'Order and interpret tests' },
      { id: 'decision', name: 'Treatment Decision', description: 'Decide on management approach' },
    ],
    decisionPoints: [
      {
        id: 'initial-approach',
        stageId: 'initial',
        question: 'Based on the history and physical exam, what is your leading diagnosis?',
        context: 'You have a 23-year-old woman with migrating RLQ pain, anorexia, vomiting, fever, and peritoneal signs.',
        options: [
          {
            id: 'appendicitis',
            text: 'Acute appendicitis',
            consequence: 'You correctly identify the most likely diagnosis.',
            isCorrect: true,
            feedback: 'Correct! The classic presentation - periumbilical pain migrating to RLQ, anorexia, nausea/vomiting, fever, McBurney point tenderness, and peritoneal signs - is highly suggestive of acute appendicitis.',
            nextStageId: 'testing',
          },
          {
            id: 'ovarian-torsion',
            text: 'Ovarian torsion',
            consequence: 'You consider ovarian pathology.',
            isCorrect: false,
            feedback: 'Ovarian torsion is on the differential for RLQ pain in young women, but typically presents with sudden severe pain, often with nausea/vomiting, and may have a history of ovarian cysts. The classic pain migration pattern and peritoneal signs here favor appendicitis.',
            nextStageId: 'testing',
          },
          {
            id: 'ectopic',
            text: 'Ectopic pregnancy',
            consequence: 'You consider ectopic pregnancy.',
            isCorrect: false,
            feedback: 'Ectopic pregnancy must be excluded in any woman of childbearing age with abdominal pain. However, she reports not being sexually active, and the presentation with migration, fever, and peritoneal signs favors appendicitis. Pregnancy test is still needed.',
            nextStageId: 'testing',
          },
          {
            id: 'gastro',
            text: 'Gastroenteritis',
            consequence: 'You consider a benign diagnosis.',
            isCorrect: false,
            feedback: 'Gastroenteritis doesn\'t cause localized RLQ tenderness, peritoneal signs, or pain migration. Diarrhea is typically more prominent. This presentation requires further workup - don\'t dismiss as "stomach bug."',
            nextStageId: 'testing',
          },
        ],
        correctOptionId: 'appendicitis',
        educationalExplanation: 'The Alvarado score (MANTRELS) helps quantify appendicitis probability: Migration of pain (1), Anorexia (1), Nausea/vomiting (1), Tenderness in RLQ (2), Rebound pain (1), Elevated temperature (1), Leukocytosis (2), Shift to left (1). Score ≥7 highly suggestive. This patient scores 8-9.',
      },
      {
        id: 'imaging-choice',
        stageId: 'testing',
        question: 'Which imaging study is most appropriate to confirm the diagnosis?',
        context: 'Labs show WBC 14,200, negative pregnancy test. You need imaging confirmation.',
        options: [
          {
            id: 'ct-with-contrast',
            text: 'CT abdomen/pelvis with IV contrast',
            consequence: 'CT shows dilated appendix with periappendiceal inflammation.',
            isCorrect: true,
            feedback: 'Correct! CT with IV contrast is the gold standard for appendicitis diagnosis in adults, with >95% sensitivity and specificity. It can also identify complications (perforation, abscess) and alternative diagnoses.',
            nextStageId: 'decision',
          },
          {
            id: 'ultrasound',
            text: 'Abdominal/pelvic ultrasound',
            consequence: 'Ultrasound is non-diagnostic - appendix not visualized.',
            isCorrect: false,
            feedback: 'Ultrasound is appropriate first-line in children and pregnant women to avoid radiation. In adults, it\'s often non-diagnostic due to body habitus and bowel gas. If US is negative but suspicion is high, CT is still needed.',
            nextStageId: 'decision',
          },
          {
            id: 'no-imaging',
            text: 'Clinical diagnosis is sufficient - proceed to surgery without imaging',
            consequence: 'You proceed based on clinical findings alone.',
            isCorrect: false,
            feedback: 'While classic presentation is highly suggestive, imaging is standard of care in most settings. CT confirms diagnosis, identifies complications, and rules out other pathology. Negative appendectomy rate has decreased with routine imaging.',
            nextStageId: 'decision',
          },
          {
            id: 'mri',
            text: 'MRI abdomen/pelvis',
            consequence: 'MRI takes several hours to obtain.',
            isCorrect: false,
            feedback: 'MRI has good sensitivity for appendicitis and is used in pregnancy (no radiation). However, it\'s slower, less available, and more expensive than CT. For a non-pregnant adult, CT is preferred.',
            nextStageId: 'decision',
          },
        ],
        correctOptionId: 'ct-with-contrast',
        educationalExplanation: 'CT findings in appendicitis: dilated appendix (>6mm), appendiceal wall thickening/enhancement, periappendiceal fat stranding (inflammation), possible appendicolith, abscess, or extraluminal air (perforation). CT has reduced negative appendectomy rates from ~20% to <5%.',
      },
      {
        id: 'treatment-choice',
        stageId: 'decision',
        question: 'CT confirms acute uncomplicated appendicitis. What is the best treatment approach?',
        context: 'CT shows dilated appendix with inflammation but no perforation or abscess.',
        options: [
          {
            id: 'surgery',
            text: 'Laparoscopic appendectomy',
            consequence: 'You take the patient to the OR for laparoscopic appendectomy.',
            isCorrect: true,
            feedback: 'Correct! For uncomplicated appendicitis, laparoscopic appendectomy is the definitive treatment. It\'s safe, with low complication rates, rapid recovery, and removes the risk of recurrence.',
            nextStageId: undefined,
          },
          {
            id: 'antibiotics',
            text: 'Antibiotics only (non-operative management)',
            consequence: 'You treat with IV antibiotics without surgery.',
            isCorrect: false,
            feedback: 'Antibiotic-only treatment is emerging as an option for uncomplicated appendicitis, with ~70% success rate. However, ~30% require appendectomy within 1 year for recurrence. Surgery remains standard of care in most settings due to definitive cure and low morbidity.',
            nextStageId: undefined,
          },
          {
            id: 'observe',
            text: 'Observation and serial exams',
            consequence: 'You admit for observation.',
            isCorrect: false,
            feedback: 'Observation alone is not appropriate when appendicitis is confirmed on imaging. Delay risks perforation and increased complications. Treatment (surgery or antibiotics) should proceed promptly.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'surgery',
        educationalExplanation: 'Laparoscopic appendectomy is safe and effective, with <1% mortality for uncomplicated cases. Benefits: definitive cure, low recurrence (0%), good cosmesis, short hospital stay (often same-day), rapid recovery. The APPAC trial showed antibiotics alone can work, but ~40% still need surgery within 5 years.',
      },
    ],
    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'Correct diagnosis, appropriate imaging, prompt surgery',
        stageSequence: ['initial', 'testing', 'decision'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Appendicitis, Uncomplicated',
      icdCode: 'K35.80',
      explanation: 'Inflammation of the vermiform appendix, typically caused by obstruction of the appendiceal lumen leading to bacterial overgrowth and wall ischemia.',
      pathophysiology: 'Obstruction of the appendiceal lumen (by fecalith, lymphoid hyperplasia, or other) leads to mucus accumulation, distension, impaired venous drainage, bacterial overgrowth, and transmural inflammation. Without treatment, this progresses to gangrene and perforation.',
      epidemiology: 'Lifetime risk ~7-8%. Peak incidence ages 10-30. Most common surgical emergency. ~300,000 appendectomies performed annually in the US.',
      prognosis: 'Excellent with prompt treatment. Uncomplicated appendectomy has <1% mortality, 5-10% wound infection rate. Perforation increases morbidity significantly.',
    },

    diagnosticReasoning: 'Classic appendicitis presentation: pain starting periumbilically then migrating to RLQ (reflecting progression from visceral to somatic pain), associated with anorexia, nausea, vomiting, and low-grade fever. Physical exam with RLQ tenderness, guarding, and peritoneal signs. Labs showing leukocytosis with left shift. CT confirming dilated, inflamed appendix.',

    keyFindings: [
      'Pain migration from periumbilical to RLQ (classic)',
      'Anorexia (nearly universal in appendicitis)',
      'McBurney point tenderness with involuntary guarding',
      'Positive Rovsing and psoas signs',
      'Low-grade fever and leukocytosis',
      'CT: dilated appendix with periappendiceal fat stranding',
    ],

    treatment: {
      immediate: 'NPO, IV fluids, IV antibiotics (perioperative prophylaxis)',
      medications: [
        {
          name: 'Piperacillin-Tazobactam',
          dose: '3.375g',
          route: 'IV',
          frequency: 'every 6 hours',
          rationale: 'Broad-spectrum coverage for GI flora (gram-negatives and anaerobes)',
        },
      ],
      procedures: 'Laparoscopic appendectomy - three small incisions, appendix identified and removed with stapler, specimen sent to pathology',
      monitoring: 'Post-op: vital signs, pain control, diet advancement, ambulation',
      patientEducation: [
        'Your appendix was inflamed and had to be removed',
        'You\'ll have three small incisions that will heal with minimal scarring',
        'You can resume normal diet when tolerating liquids',
        'Avoid heavy lifting for 2 weeks',
        'Return for fever, worsening pain, redness/drainage from incisions',
      ],
    },

    outcome: 'Laparoscopic appendectomy performed successfully. Operative findings: erythematous, inflamed appendix without perforation. Path confirmed acute suppurative appendicitis. Patient tolerated diet post-op day 0, discharged same day with oral antibiotics. Follow-up in 2 weeks - doing well.',

    followUp: 'Post-op visit in 2 weeks. Pathology confirmed acute appendicitis with no concerning features. She can resume all activities.',
  },

  teachingPoints: [
    {
      topic: 'Classic Pain Migration',
      content: 'Periumbilical pain → RLQ pain occurs as inflammation extends from visceral peritoneum (referred to umbilicus) to parietal peritoneum (localized to RLQ). This migration is nearly pathognomonic for appendicitis.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'Anorexia is Nearly Universal',
      content: 'Anorexia is so common in appendicitis that if a patient is hungry, you should question the diagnosis. Pain typically precedes nausea/vomiting.',
      category: 'clinical-pearl',
      importance: 'important',
    },
    {
      topic: 'Physical Exam Signs',
      content: 'McBurney point (1/3 distance ASIS to umbilicus), Rovsing sign (RLQ pain with LLQ palpation), Psoas sign (RLQ pain with hip extension - retrocecal), Obturator sign (RLQ pain with internal rotation - pelvic). Rebound tenderness indicates peritonitis.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'CT for Diagnosis',
      content: 'CT abdomen/pelvis with contrast is >95% sensitive and specific. Findings: dilated appendix (>6mm), wall enhancement, periappendiceal stranding. Reduces negative appendectomy rate to <5%.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'Don\'t Delay Surgery',
      content: 'Risk of perforation increases after 24-36 hours of symptoms. Perforation increases morbidity significantly (abscess, prolonged hospitalization, wound infection). Prompt appendectomy is curative.',
      category: 'treatment',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Dismissing RLQ pain as "gastroenteritis" without proper workup',
    'Not getting pregnancy test in women of childbearing age',
    'Over-relying on WBC - can be normal in early appendicitis',
    'Delaying surgery hoping symptoms will resolve',
    'Not considering atypical presentations in elderly, immunosuppressed, or pregnant patients',
  ],

  relatedCases: [
    'ovarian-torsion',
    'ectopic-pregnancy',
    'mesenteric-adenitis',
    'ruptured-ovarian-cyst',
  ],
};

// ============================================
// Case: Diabetic Ketoacidosis
// ============================================

const DKA_CASE: ClinicalCase = {
  id: 'dka-classic',
  title: 'The Thirsty, Tired Teen',
  category: 'endocrinology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the classic presentation of diabetic ketoacidosis',
    'Understand the pathophysiology of DKA (insulin deficiency, counter-regulatory hormones)',
    'Learn the diagnostic criteria for DKA',
    'Master the initial management: fluids, insulin, potassium',
    'Appreciate complications like cerebral edema',
  ],

  presentation: {
    chiefComplaint: 'Weakness and vomiting',
    demographics: {
      age: 16,
      sex: 'male',
      occupation: 'high school student',
      context: 'brought to ED by parents after 2 days of feeling unwell',
    },
    openingParagraph: `Marcus is a 16-year-old previously healthy high school student brought to the ED by his parents. For the past 2-3 weeks, he\'s been drinking "gallons" of water and going to the bathroom constantly - his parents thought it was just typical teenager behavior. Yesterday he started feeling nauseated, vomited several times, and today he\'s so weak he couldn\'t get out of bed. His mom says his breath smells "fruity."`,
    generalAppearance: 'Thin teenage male appearing lethargic but arousable. Breathing deeply and rapidly. Appears dehydrated with dry lips. Responds to questions but seems confused about date.',
    vitalSigns: {
      temperature: '98.2°F (36.8°C)',
      heartRate: '122 bpm, regular',
      bloodPressure: '98/62 mmHg',
      respiratoryRate: '28/min, deep',
      oxygenSaturation: '99% on room air',
      interpretation: 'Tachycardia and hypotension indicate dehydration/volume depletion. Rapid deep breathing (Kussmaul respirations) represents respiratory compensation for metabolic acidosis.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-polyuria',
        question: 'Tell me about the increased urination.',
        category: 'hpi',
        response: 'He\'s been going to the bathroom like every hour, even waking up multiple times at night. Started maybe 3 weeks ago.',
        educationalNote: 'Polyuria results from osmotic diuresis - glucose exceeding the renal threshold (~180 mg/dL) spills into urine, dragging water with it.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-polydipsia',
        question: 'How about the thirst?',
        category: 'hpi',
        response: 'He\'s been drinking constantly - water, Gatorade, juice. Like 2-3 gallons a day. He\'s never been this thirsty.',
        educationalNote: 'Polydipsia compensates for fluid loss from polyuria. Despite drinking large volumes, patients can\'t keep up with osmotic diuresis.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-weight',
        question: 'Any weight changes?',
        category: 'hpi',
        response: 'He\'s lost about 15 pounds in the last month. We thought it was because of basketball tryouts.',
        educationalNote: 'Weight loss from breakdown of fat and muscle (body can\'t use glucose without insulin) plus dehydration. Classic triad: polyuria, polydipsia, weight loss.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-nausea',
        question: 'When did the nausea and vomiting start?',
        category: 'hpi',
        response: 'Yesterday morning. He\'s thrown up maybe 6 times. He can\'t keep anything down.',
        educationalNote: 'Nausea/vomiting in DKA results from ketosis (ketones cause GI upset) and gastroparesis from metabolic derangement. Worsens dehydration.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-abd-pain',
        question: 'Any abdominal pain?',
        category: 'hpi',
        response: 'Yes, his stomach hurts - kind of all over.',
        educationalNote: 'Abdominal pain is common in DKA (especially in children) and can mimic acute abdomen. It usually resolves with treatment. Be careful not to miss true surgical emergency.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-mental',
        question: 'Has his mental status changed?',
        category: 'hpi',
        response: 'He\'s been really tired and out of it. This morning he didn\'t know what day it was.',
        educationalNote: 'Altered mental status in DKA ranges from lethargy to coma. Results from dehydration, acidosis, and hyperosmolarity. Correlates with severity.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-dm',
        question: 'Does he have diabetes?',
        category: 'pmh',
        response: 'No, he\'s never been diagnosed with anything. He\'s been healthy.',
        educationalNote: 'DKA can be the initial presentation of Type 1 diabetes in ~30% of cases. New-onset T1D should be suspected in any young person with DKA.',
        isKeyFinding: true,
      },
      {
        id: 'fh-dm',
        question: 'Any family history of diabetes?',
        category: 'family',
        response: 'His grandfather has type 2 diabetes. No one with type 1 that we know of.',
        educationalNote: 'Type 1 and Type 2 diabetes have different genetic patterns. T1D has autoimmune basis with HLA associations. Family history of T2D doesn\'t predict T1D.',
        isKeyFinding: false,
      },
      {
        id: 'recent-illness',
        question: 'Any recent illness or infection?',
        category: 'hpi',
        response: 'He had a cold last week - sore throat, runny nose.',
        educationalNote: 'Illness/infection is a common precipitant of DKA due to increased counter-regulatory hormones (cortisol, glucagon) and relative insulin deficiency.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'General',
        findings: [
          {
            id: 'gen-mental',
            exam: 'Mental status',
            finding: 'Lethargic but arousable. Oriented to person, not fully to time. Follows commands.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Altered mental status in DKA requires close monitoring. GCS should be tracked serially.',
          },
          {
            id: 'gen-breathing',
            exam: 'Respiratory pattern',
            finding: 'Deep, rapid breathing (Kussmaul respirations)',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Kussmaul respirations = deep, rapid breathing to blow off CO2 and compensate for metabolic acidosis. The body is trying to raise pH.',
          },
          {
            id: 'gen-breath',
            exam: 'Breath odor',
            finding: 'Fruity, acetone odor',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Fruity breath is from acetone (a ketone body) being exhaled. Classic DKA finding.',
          },
        ],
      },
      {
        system: 'HEENT',
        findings: [
          {
            id: 'heent-mucosa',
            exam: 'Mucous membranes',
            finding: 'Dry, cracked lips. Dry oral mucosa.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Signs of dehydration. DKA patients can be 5-10% volume depleted.',
          },
          {
            id: 'heent-eyes',
            exam: 'Eyes',
            finding: 'Sunken appearance. Decreased tear production.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Further evidence of significant dehydration.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-exam',
            exam: 'Heart exam',
            finding: 'Tachycardic, regular rhythm. No murmurs. Weak peripheral pulses.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Tachycardia and weak pulses reflect hypovolemia. Heart is compensating for reduced preload.',
          },
        ],
      },
      {
        system: 'Abdominal',
        findings: [
          {
            id: 'abd-exam',
            exam: 'Abdominal exam',
            finding: 'Soft, diffusely tender. No rebound or guarding. Decreased bowel sounds.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Diffuse abdominal tenderness common in DKA. Lack of peritoneal signs helps exclude surgical abdomen. Pain should improve with treatment.',
          },
        ],
      },
      {
        system: 'Skin',
        findings: [
          {
            id: 'skin-turgor',
            exam: 'Skin turgor',
            finding: 'Decreased - skin tents when pinched.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Tenting indicates significant dehydration (>5% volume loss). DKA patients typically have 5-10% fluid deficit.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'Na 128, K 5.8, Cl 92, CO2 8, BUN 32, Cr 1.8, Glucose 542',
          interpretation: 'High glucose, low bicarb (acidosis), elevated K (shifts out of cells in acidosis), elevated BUN/Cr (dehydration). Low Na is pseudohyponatremia.',
          isAbnormal: true,
          educationalNote: 'Classic DKA labs. The low CO2 (bicarb) reflects metabolic acidosis. K appears high but total body K is depleted - it will drop with insulin. Correct Na for glucose: add 1.6 mEq/L for every 100 mg/dL glucose >100.',
        },
      },
      {
        id: 'abg',
        name: 'Arterial Blood Gas',
        category: 'specialty',
        turnaroundTime: '15 minutes',
        result: {
          value: 'pH 7.12, pCO2 18, pO2 98, HCO3 6',
          interpretation: 'Severe metabolic acidosis (low pH, low HCO3) with respiratory compensation (low pCO2 from hyperventilation).',
          isAbnormal: true,
          educationalNote: 'pH <7.3 and HCO3 <18 define DKA. This patient has severe DKA (pH <7.1). Winters formula: expected pCO2 = 1.5(HCO3) + 8 ± 2 = 17 ± 2. His pCO2 of 18 shows appropriate respiratory compensation.',
        },
      },
      {
        id: 'ketones',
        name: 'Serum Beta-Hydroxybutyrate',
        category: 'specialty',
        turnaroundTime: '30 minutes',
        result: {
          value: '8.2 mmol/L (normal <0.6)',
          interpretation: 'Markedly elevated ketones, confirming ketoacidosis.',
          isAbnormal: true,
          educationalNote: 'Beta-hydroxybutyrate is the predominant ketone in DKA. Serum ketones >3 mmol/L support DKA diagnosis. Urine ketones can also be checked but serum is more accurate.',
        },
      },
      {
        id: 'hba1c',
        name: 'Hemoglobin A1c',
        category: 'specialty',
        turnaroundTime: '2 hours',
        result: {
          value: '12.8% (normal <5.7%)',
          interpretation: 'Very elevated, indicating prolonged undiagnosed hyperglycemia.',
          isAbnormal: true,
          educationalNote: 'HbA1c reflects average glucose over 3 months. 12.8% suggests his diabetes has been developing for weeks to months, not just days.',
        },
      },
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'WBC 18,200/μL, Hgb 15.8 (hemoconcentrated), Plt 310',
          interpretation: 'Leukocytosis can occur in DKA even without infection (stress response). High Hgb from dehydration.',
          isAbnormal: true,
          educationalNote: 'WBC is often elevated in DKA due to stress response and doesn\'t necessarily indicate infection. However, always look for precipitating infection.',
        },
      },
      {
        id: 'anion-gap',
        name: 'Anion Gap Calculation',
        category: 'basic',
        turnaroundTime: 'calculated',
        result: {
          value: 'AG = Na - (Cl + HCO3) = 128 - (92 + 8) = 28 (normal 8-12)',
          interpretation: 'High anion gap metabolic acidosis, consistent with DKA.',
          isAbnormal: true,
          educationalNote: 'DKA causes high anion gap acidosis from accumulation of ketoacids (beta-hydroxybutyrate, acetoacetate). The anion gap "accounts for" unmeasured anions.',
        },
      },
    ],

    imagingOrders: [],
  },

  caseFlow: {
    stages: [
      { id: 'initial', name: 'Recognition', description: 'Identify DKA and assess severity' },
      { id: 'treatment', name: 'Initial Treatment', description: 'Start appropriate management' },
      { id: 'monitoring', name: 'Ongoing Care', description: 'Monitor and adjust treatment' },
    ],
    decisionPoints: [
      {
        id: 'diagnosis',
        stageId: 'initial',
        question: 'Based on the presentation and initial labs, what is your diagnosis and severity assessment?',
        context: 'Glucose 542, pH 7.12, HCO3 6, ketones elevated.',
        options: [
          {
            id: 'severe-dka',
            text: 'Severe DKA in new-onset Type 1 diabetes',
            consequence: 'You correctly identify severe DKA.',
            isCorrect: true,
            feedback: 'Correct! Criteria for DKA: glucose >250, pH <7.3, HCO3 <18, ketones present. Severity by pH: mild (7.25-7.3), moderate (7.0-7.24), severe (<7.0). His pH of 7.12 = severe. No prior diabetes diagnosis = likely new T1D.',
            nextStageId: 'treatment',
          },
          {
            id: 'hhs',
            text: 'Hyperosmolar Hyperglycemic State (HHS)',
            consequence: 'You misidentify the condition.',
            isCorrect: false,
            feedback: 'HHS typically has glucose >600, minimal ketosis, pH >7.3, and higher osmolality. This patient has significant ketosis and acidosis, which defines DKA not HHS. HHS is more common in T2D.',
            nextStageId: 'treatment',
          },
          {
            id: 'mild-dka',
            text: 'Mild DKA',
            consequence: 'You underestimate severity.',
            isCorrect: false,
            feedback: 'With pH 7.12 and HCO3 6, this is severe DKA (pH <7.1). Underestimating severity can lead to inadequate monitoring and treatment.',
            nextStageId: 'treatment',
          },
        ],
        correctOptionId: 'severe-dka',
        educationalExplanation: 'DKA diagnostic criteria (ADA): glucose >250 mg/dL, arterial pH <7.3, serum bicarbonate <18 mEq/L, ketones present in blood/urine. Severity grading: Mild (pH 7.25-7.3), Moderate (pH 7.0-7.24), Severe (pH <7.0). This patient meets criteria for severe DKA.',
      },
      {
        id: 'initial-treatment',
        stageId: 'treatment',
        question: 'What is the most important initial treatment for this patient?',
        context: 'Severe DKA with dehydration and altered mental status.',
        options: [
          {
            id: 'iv-fluids',
            text: 'IV normal saline bolus, then continuous fluids',
            consequence: 'You prioritize fluid resuscitation.',
            isCorrect: true,
            feedback: 'Correct! Fluid resuscitation is the first priority in DKA. Start with NS bolus (10-20 mL/kg), then maintenance fluids. This restores volume, improves perfusion, and dilutes glucose. Insulin comes next but fluids first.',
            nextStageId: 'monitoring',
          },
          {
            id: 'insulin-first',
            text: 'Start insulin drip immediately',
            consequence: 'You prioritize insulin.',
            isCorrect: false,
            feedback: 'While insulin is critical, fluids should start first or simultaneously. Giving insulin before adequate fluid resuscitation can cause rapid fluid shifts and worsen hemodynamics. Fluids alone will also lower glucose.',
            nextStageId: 'monitoring',
          },
          {
            id: 'bicarb',
            text: 'Give sodium bicarbonate for the acidosis',
            consequence: 'You treat the acidosis directly.',
            isCorrect: false,
            feedback: 'Bicarbonate is NOT routinely recommended in DKA, even with severe acidosis. Insulin and fluids will correct ketoacidosis. Bicarbonate may cause paradoxical CNS acidosis, hypokalemia, and impair oxygen delivery. Only consider if pH <6.9.',
            nextStageId: 'monitoring',
          },
          {
            id: 'potassium',
            text: 'Give IV potassium bolus',
            consequence: 'You address the potassium.',
            isCorrect: false,
            feedback: 'His K is 5.8, which is HIGH. Don\'t give K until it starts dropping (which it will with insulin). Once K <5.3 and patient is making urine, add K to fluids. Total body K is depleted, but serum K can be high initially.',
            nextStageId: 'monitoring',
          },
        ],
        correctOptionId: 'iv-fluids',
        educationalExplanation: 'DKA treatment priorities: (1) Fluid resuscitation - NS bolus then 0.45% NS at 250-500 mL/hr. (2) Insulin - regular insulin drip at 0.1 units/kg/hr (after initial fluid bolus). (3) Potassium - add to fluids when K <5.3 and patient urinating. (4) Monitor frequently. (5) Look for precipitant.',
      },
      {
        id: 'insulin-timing',
        stageId: 'monitoring',
        question: 'After fluid bolus, you start insulin drip. The glucose drops from 542 to 320. What should you do now?',
        context: 'Glucose 320, pH still 7.18, HCO3 10. Ketones still elevated.',
        options: [
          {
            id: 'add-dextrose',
            text: 'Add dextrose to IV fluids, continue insulin',
            consequence: 'You add dextrose when glucose reaches 250-300.',
            isCorrect: true,
            feedback: 'Correct! When glucose reaches 200-250, add D5 or D10 to fluids and continue insulin. The goal is to keep giving insulin (to clear ketones) while preventing hypoglycemia. Stopping insulin when glucose normalizes but ketones persist is a common mistake.',
            nextStageId: undefined,
          },
          {
            id: 'stop-insulin',
            text: 'Stop insulin drip since glucose is dropping',
            consequence: 'You stop insulin.',
            isCorrect: false,
            feedback: 'Don\'t stop insulin just because glucose is dropping! Insulin is needed to clear ketones and resolve acidosis. The acidosis (pH 7.18) and ketones are still present. Add dextrose to fluids instead of stopping insulin.',
            nextStageId: undefined,
          },
          {
            id: 'increase-insulin',
            text: 'Increase insulin rate since acidosis persists',
            consequence: 'You increase insulin.',
            isCorrect: false,
            feedback: 'The glucose is already dropping appropriately. Increasing insulin will cause hypoglycemia. The goal is steady improvement - glucose should drop 50-75 mg/dL/hour. Acidosis takes time to resolve.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'add-dextrose',
        educationalExplanation: 'Key concept: glucose normalizes faster than ketosis resolves. Insulin must continue until ketones are cleared (anion gap normalizes, pH >7.3). Add dextrose when glucose 200-250 to prevent hypoglycemia while continuing insulin.',
      },
    ],
    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'Correct identification of severe DKA, fluids first, appropriate insulin and monitoring',
        stageSequence: ['initial', 'treatment', 'monitoring'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Diabetic Ketoacidosis - New Onset Type 1 Diabetes',
      icdCode: 'E10.10',
      explanation: 'Severe metabolic derangement from absolute insulin deficiency, resulting in hyperglycemia, ketosis, and acidosis.',
      pathophysiology: 'Without insulin, cells cannot uptake glucose. The body responds with counter-regulatory hormones (glucagon, cortisol, catecholamines), causing gluconeogenesis, glycogenolysis (worsening hyperglycemia), and lipolysis (producing free fatty acids that become ketones). Ketones are acids, causing metabolic acidosis. Osmotic diuresis from glucosuria causes profound dehydration.',
      epidemiology: 'Type 1 diabetes affects ~1.6 million Americans. DKA is the presenting event in ~30% of new T1D cases. Annual incidence of DKA: 4-8% of T1D patients.',
      prognosis: 'DKA mortality is <1% with proper treatment. Major complications: cerebral edema (especially in children), hypokalemia, hypoglycemia. New-onset T1D requires lifelong insulin therapy.',
    },

    diagnosticReasoning: 'Classic presentation of new-onset T1D presenting in DKA: weeks of polyuria, polydipsia, and weight loss (the hyperglycemia phase), followed by acute decompensation with nausea, vomiting, abdominal pain, and altered mental status (the DKA phase). Fruity breath and Kussmaul respirations are clinical clues. Labs confirm high anion gap metabolic acidosis with hyperglycemia and ketosis.',

    keyFindings: [
      '3-week history of polyuria, polydipsia, weight loss',
      'Acute nausea, vomiting, abdominal pain',
      'Fruity breath, Kussmaul respirations',
      'Signs of severe dehydration',
      'Glucose 542, pH 7.12, HCO3 6, anion gap 28',
      'Elevated beta-hydroxybutyrate',
      'HbA1c 12.8% indicating prolonged hyperglycemia',
    ],

    treatment: {
      immediate: 'IV fluid resuscitation (NS bolus then continuous), insulin drip, cardiac monitoring, frequent labs',
      medications: [
        {
          name: 'Regular Insulin',
          dose: '0.1 units/kg/hour',
          route: 'IV infusion',
          frequency: 'continuous',
          rationale: 'Shuts off ketogenesis, allows glucose uptake, corrects acidosis',
        },
        {
          name: 'Normal Saline then D5-0.45% NS',
          dose: '20 mL/kg bolus, then 250-500 mL/hr',
          route: 'IV',
          frequency: 'continuous, add dextrose when glucose <250',
          rationale: 'Restores volume, corrects dehydration, prevents hypoglycemia',
        },
        {
          name: 'Potassium Chloride',
          dose: '20-40 mEq/L in IV fluids',
          route: 'IV',
          frequency: 'continuous when K <5.3',
          rationale: 'Replaces total body potassium depletion (K will drop with insulin)',
        },
      ],
      procedures: 'Central line and arterial line if critically ill. Consider ICU admission for severe DKA.',
      monitoring: 'Hourly glucose. Q2-4h electrolytes and VBG until stable. Neurologic checks for cerebral edema (especially in pediatrics). I/O monitoring.',
      patientEducation: [
        'You have Type 1 diabetes - your pancreas no longer makes insulin',
        'You will need insulin injections for the rest of your life',
        'You will learn to check blood sugar and count carbohydrates',
        'Diabetic educator will teach you insulin administration',
        'Know the signs of low blood sugar and high blood sugar',
        'Never skip insulin doses - this can lead to DKA again',
        'Wear medical alert identification',
      ],
    },

    outcome: 'After 24 hours of treatment, pH normalized to 7.38, anion gap closed to 10, glucose stable at 180-220. Transitioned to subcutaneous insulin. Diabetes education started. Discharged on day 3 with insulin regimen (basal-bolus), glucometer, and follow-up with endocrinology.',

    followUp: 'Endocrinology follow-up in 1 week. Diabetes education program enrollment. Close glucose monitoring and insulin adjustment. HbA1c target <7%. Screen for complications annually once established.',
  },

  teachingPoints: [
    {
      topic: 'DKA Diagnostic Criteria',
      content: 'Glucose >250 mg/dL, pH <7.3, HCO3 <18 mEq/L, positive ketones, elevated anion gap. Severity by pH: mild (7.25-7.3), moderate (7.0-7.24), severe (<7.0).',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Fluids Before Insulin',
      content: 'Fluid resuscitation is the first priority. NS bolus, then maintenance fluids. Insulin starts after initial fluid bolus. Fluids alone will lower glucose.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Potassium in DKA',
      content: 'Serum K may be high initially, but total body K is depleted. K will drop rapidly with insulin (drives K into cells). Add K to fluids when <5.3 mEq/L and patient urinating.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Continue Insulin Until Ketones Clear',
      content: 'Glucose normalizes before ketones. Add dextrose to fluids when glucose 200-250, but continue insulin until anion gap closes and pH normalizes.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Cerebral Edema Risk',
      content: 'Major risk in pediatric DKA. Signs: headache, confusion, bradycardia, HTN, decreased consciousness. Avoid overly rapid fluid/glucose correction. Treat with mannitol if suspected.',
      category: 'clinical-pearl',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Starting insulin before adequate fluid resuscitation',
    'Giving potassium when serum K is still high',
    'Stopping insulin when glucose normalizes but ketones persist',
    'Giving bicarbonate routinely (rarely indicated, may be harmful)',
    'Correcting glucose too rapidly (increases cerebral edema risk)',
    'Not looking for precipitating cause (infection, missed doses)',
  ],

  relatedCases: [
    'hhs-elderly',
    'hypoglycemia',
    'new-t1d-presentation',
  ],
};

// ============================================
// Case: Community-Acquired Pneumonia
// ============================================

const PNEUMONIA_CASE: ClinicalCase = {
  id: 'cap-elderly',
  title: 'The Coughing Grandmother',
  category: 'pulmonology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the clinical presentation of community-acquired pneumonia (CAP)',
    'Understand the differences between typical and atypical pneumonia presentations',
    'Learn to risk-stratify pneumonia patients using CURB-65 or PSI',
    'Master the diagnostic workup and empiric antibiotic selection',
    'Appreciate the unique presentations of pneumonia in elderly patients',
  ],

  presentation: {
    chiefComplaint: 'Cough and shortness of breath',
    demographics: {
      age: 72,
      sex: 'female',
      occupation: 'retired teacher',
      context: 'brought to ED by daughter after 4 days of worsening cough',
    },
    openingParagraph: `Mrs. Patterson is a 72-year-old retired teacher brought to the emergency department by her daughter. She has had a productive cough for 4 days that has gotten progressively worse, now bringing up greenish-yellow sputum. She developed a fever yesterday and today her daughter noticed she was "not herself" - more confused than usual. She's been too weak to eat much and has had some difficulty catching her breath when walking to the bathroom.`,
    generalAppearance: 'Elderly woman appearing fatigued and mildly confused. Sitting up in bed with some respiratory effort. Lips are slightly dry. She answers questions but occasionally gives inappropriate responses.',
    vitalSigns: {
      temperature: '102.4°F (39.1°C)',
      heartRate: '108 bpm, regular',
      bloodPressure: '102/58 mmHg',
      respiratoryRate: '26/min',
      oxygenSaturation: '89% on room air',
      interpretation: 'Fever with tachycardia and tachypnea indicates active infection. Hypoxia (SpO2 89%) is concerning. Low-normal blood pressure in context of infection raises concern for early sepsis.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-cough',
        question: 'Tell me about the cough.',
        category: 'hpi',
        response: 'It started about 4 days ago - at first it was dry, but now she\'s coughing up thick yellow-green mucus. She coughs almost constantly.',
        educationalNote: 'Productive cough with purulent sputum suggests bacterial infection. The progression from dry to productive cough is classic for bacterial pneumonia.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-fever',
        question: 'When did the fever start?',
        category: 'hpi',
        response: 'Yesterday she felt warm and we took her temperature - it was 101. This morning it was 102.',
        educationalNote: 'Fever is a cardinal sign of pneumonia, though elderly patients may have blunted febrile response. Some elderly patients present without fever despite serious infection.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-dyspnea',
        question: 'How is her breathing?',
        category: 'hpi',
        response: 'She gets winded just walking to the bathroom. Yesterday she couldn\'t finish her sentences without stopping to breathe.',
        educationalNote: 'Dyspnea, especially exertional, indicates significant pulmonary involvement. Inability to speak in full sentences suggests moderate-severe respiratory distress.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-confusion',
        question: 'Tell me about the confusion.',
        category: 'hpi',
        response: 'This morning she didn\'t know what day it was and asked where her husband was - he passed away 5 years ago. She\'s usually sharp as a tack.',
        educationalNote: 'Acute confusion (delirium) in elderly may be the primary presenting symptom of pneumonia. It\'s a criterion in CURB-65 scoring and indicates more severe illness.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-chest-pain',
        question: 'Any chest pain?',
        category: 'hpi',
        response: 'She says her right side hurts when she takes a deep breath or coughs.',
        educationalNote: 'Pleuritic chest pain (worse with inspiration/cough) suggests pleural involvement. Common in pneumonia affecting the lung periphery.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-chills',
        question: 'Any chills or rigors?',
        category: 'hpi',
        response: 'Yes, she had shaking chills last night - she was shivering under two blankets.',
        educationalNote: 'Rigors (shaking chills) occur with bacteremia and suggest more severe infection. Classic "single shaking chill" is associated with pneumococcal pneumonia.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-intake',
        question: 'How has she been eating and drinking?',
        category: 'hpi',
        response: 'She\'s barely eaten anything for 2 days. We\'ve been trying to get her to drink but she only takes sips.',
        educationalNote: 'Poor oral intake in elderly with infection leads to rapid dehydration. Combined with fever, this contributes to hemodynamic compromise.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-medical',
        question: 'What medical problems does she have?',
        category: 'pmh',
        response: 'High blood pressure, type 2 diabetes - controlled with pills, and COPD from years of smoking. She quit 10 years ago.',
        educationalNote: 'COPD significantly increases pneumonia risk and severity. Diabetes impairs immune function. Multiple comorbidities worsen prognosis.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-vaccines',
        question: 'Is she up to date on vaccines?',
        category: 'pmh',
        response: 'She got a flu shot this fall. I\'m not sure about the pneumonia vaccine.',
        educationalNote: 'Pneumococcal vaccination reduces invasive pneumococcal disease. Two vaccines available: PCV13/15/20 and PPSV23. Status affects prevention discussions.',
        isKeyFinding: false,
      },
      {
        id: 'sh-living',
        question: 'Where does she live?',
        category: 'social',
        response: 'She lives alone in her own home. I check on her every day.',
        educationalNote: 'Living situation affects disposition planning. Independent living suggests baseline good functional status. However, living alone with pneumonia may warrant admission.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications is she on?',
        category: 'medications',
        response: 'Lisinopril for blood pressure, metformin for diabetes, and she uses an albuterol inhaler when needed for her COPD.',
        educationalNote: 'Medication review important. ACE inhibitors can cause cough (but this is acute). Metformin may need to be held if severe illness.',
        isKeyFinding: false,
      },
      {
        id: 'recent-exposure',
        question: 'Any recent sick contacts or exposures?',
        category: 'hpi',
        response: 'Her grandson had a cold last week when he visited. And there was a flu going around her church.',
        educationalNote: 'Viral upper respiratory infections often precede bacterial pneumonia. Post-viral bacterial pneumonia is a recognized pattern.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'General',
        findings: [
          {
            id: 'gen-mental',
            exam: 'Mental status',
            finding: 'Alert but confused. Oriented to person, not to place or date. Follows simple commands.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'New confusion in elderly = acute change from baseline. This is a CURB-65 criterion ("C" for Confusion) and indicates more severe pneumonia.',
          },
          {
            id: 'gen-appearance',
            exam: 'General appearance',
            finding: 'Ill-appearing elderly woman. Using accessory muscles. Tripod positioning.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Accessory muscle use and tripod positioning indicate significant respiratory distress. The body is working hard to breathe.',
          },
        ],
      },
      {
        system: 'HEENT',
        findings: [
          {
            id: 'heent-mucosa',
            exam: 'Mucous membranes',
            finding: 'Dry mucous membranes. Dry tongue.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Signs of dehydration from poor intake and fever. Elderly are particularly susceptible to dehydration.',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-inspection',
            exam: 'Chest inspection',
            finding: 'Decreased chest expansion on right side. Tachypneic at 26/min.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Asymmetric chest expansion suggests unilateral pathology (consolidation, effusion). The affected side moves less.',
          },
          {
            id: 'resp-palpation',
            exam: 'Chest palpation',
            finding: 'Increased tactile fremitus over right lower lung field.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Increased fremitus occurs with consolidation - solid tissue transmits vibration better than air. This localizes the pneumonia.',
          },
          {
            id: 'resp-percussion',
            exam: 'Chest percussion',
            finding: 'Dullness to percussion over right lower lobe posteriorly.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Dullness indicates consolidation (solid lung) or effusion (fluid). Normal lung is resonant. This is a key finding in lobar pneumonia.',
          },
          {
            id: 'resp-auscultation',
            exam: 'Lung auscultation',
            finding: 'Bronchial breath sounds and crackles (rales) over right lower lobe. Decreased breath sounds at right base. Egophony positive over consolidation ("E" to "A" change).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Classic consolidation findings: bronchial breath sounds (normally heard over trachea), crackles, egophony. The trio of dullness, bronchial breathing, and egophony strongly suggests pneumonia.',
          },
          {
            id: 'resp-left',
            exam: 'Left lung auscultation',
            finding: 'Scattered expiratory wheezes. No crackles. Good air movement.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Wheezes on left likely from underlying COPD. Left lung not primarily affected by pneumonia.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-exam',
            exam: 'Heart exam',
            finding: 'Tachycardic at 108 bpm. Regular rhythm. No murmurs. JVP normal.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Tachycardia is expected response to fever and hypoxia. Check for signs of heart failure (elevated JVP, S3) which can coexist.',
          },
        ],
      },
      {
        system: 'Extremities',
        findings: [
          {
            id: 'ext-perfusion',
            exam: 'Peripheral perfusion',
            finding: 'Warm extremities. Capillary refill 3 seconds. No edema.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Borderline capillary refill. In early sepsis, extremities may be warm (vasodilation). Cold extremities indicate progression to distributive shock.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'WBC 18,400/μL with 88% neutrophils and 6% bands. Hgb 12.8. Plt 165',
          interpretation: 'Leukocytosis with neutrophilia and bandemia (left shift) indicates acute bacterial infection.',
          isAbnormal: true,
          educationalNote: 'WBC >10,000 with left shift supports bacterial pneumonia. Bandemia (>5% bands) indicates bone marrow is releasing immature neutrophils due to high demand - marker of serious infection.',
        },
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'Na 132, K 3.4, Cl 98, CO2 20, BUN 38, Cr 1.4 (baseline 0.9), Glucose 186',
          interpretation: 'Mild hyponatremia. Elevated BUN/Cr ratio suggests dehydration. Creatinine elevated from baseline (acute kidney injury from dehydration/sepsis). Stress hyperglycemia.',
          isAbnormal: true,
          educationalNote: 'BUN:Cr ratio >20:1 suggests prerenal azotemia (dehydration). BUN >20 is a CURB-65 criterion. AKI in setting of sepsis is concerning.',
        },
      },
      {
        id: 'procalcitonin',
        name: 'Procalcitonin',
        category: 'specialty',
        turnaroundTime: '1 hour',
        result: {
          value: '2.8 ng/mL (normal <0.1)',
          interpretation: 'Markedly elevated, strongly suggesting bacterial infection.',
          isAbnormal: true,
          educationalNote: 'Procalcitonin rises in bacterial infections and remains low in viral infections. Levels >0.25 support bacterial etiology. Useful for antibiotic stewardship.',
        },
      },
      {
        id: 'lactate',
        name: 'Lactate',
        category: 'basic',
        turnaroundTime: '15 minutes',
        result: {
          value: '2.8 mmol/L (normal <2.0)',
          interpretation: 'Mildly elevated, suggesting tissue hypoperfusion. Sepsis marker.',
          isAbnormal: true,
          educationalNote: 'Lactate >2 mmol/L with suspected infection suggests sepsis. Lactate >4 indicates septic shock. Used for risk stratification and monitoring response to treatment.',
        },
      },
      {
        id: 'abg',
        name: 'Arterial Blood Gas',
        category: 'specialty',
        turnaroundTime: '15 minutes',
        result: {
          value: 'pH 7.46, pCO2 32, pO2 58, HCO3 22 (on room air)',
          interpretation: 'Respiratory alkalosis with hypoxemia. The patient is hyperventilating (low pCO2) but still hypoxic (low pO2). A-a gradient elevated.',
          isAbnormal: true,
          educationalNote: 'In pneumonia, ventilation-perfusion mismatch causes hypoxemia. Hyperventilation compensates but can\'t fix the V/Q mismatch. A-a gradient helps quantify gas exchange impairment.',
        },
      },
      {
        id: 'blood-cultures',
        name: 'Blood Cultures',
        category: 'basic',
        turnaroundTime: '24-48 hours',
        result: {
          value: 'Pending (drawn from 2 sites)',
          interpretation: 'Results pending. Essential for identifying bacteremic pneumonia.',
          isAbnormal: false,
          educationalNote: 'Blood cultures positive in ~10-20% of hospitalized CAP. When positive, usually Streptococcus pneumoniae. Must draw before antibiotics for best yield.',
        },
      },
      {
        id: 'sputum',
        name: 'Sputum Gram Stain and Culture',
        category: 'basic',
        turnaroundTime: '1 hour (gram stain), 48 hours (culture)',
        result: {
          value: 'Gram stain: >25 WBC, <10 epithelial cells per LPF. Gram-positive diplococci in pairs and chains.',
          interpretation: 'Good quality sputum specimen. Gram-positive diplococci classic for Streptococcus pneumoniae.',
          isAbnormal: true,
          educationalNote: 'Sputum quality assessed by epithelial cells (<10 = good, represents lower respiratory tract). >25 WBC indicates purulence. Gram-positive diplococci = pneumococcus (most common CAP pathogen).',
        },
      },
      {
        id: 'urinary-antigen',
        name: 'Urinary Antigens (Pneumococcal and Legionella)',
        category: 'specialty',
        turnaroundTime: '2 hours',
        result: {
          value: 'Pneumococcal antigen: Positive. Legionella antigen: Negative.',
          interpretation: 'Confirms Streptococcus pneumoniae as causative organism.',
          isAbnormal: true,
          educationalNote: 'Urinary antigens allow rapid pathogen identification. Pneumococcal antigen is ~70% sensitive for pneumococcal CAP. Legionella antigen detects L. pneumophila serogroup 1 (most common).',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'cxr',
        name: 'Chest X-ray (PA and Lateral)',
        modality: 'X-ray',
        turnaroundTime: '30 minutes',
        result: {
          finding: 'Dense consolidation in right lower lobe with air bronchograms. No pleural effusion. Heart size normal. No pneumothorax.',
          interpretation: 'Right lower lobe pneumonia. Classic lobar consolidation pattern.',
          isAbnormal: true,
          educationalNote: 'Lobar consolidation with air bronchograms is classic for bacterial pneumonia (especially pneumococcal). Air bronchograms = air-filled bronchi visible against opacified alveoli. Absence of effusion is favorable.',
        },
      },
      {
        id: 'ct-chest',
        name: 'CT Chest',
        modality: 'CT',
        turnaroundTime: '2 hours',
        result: {
          finding: 'Consolidation involving right lower lobe with air bronchograms. Tree-in-bud opacities. Small right parapneumonic effusion (not seen on CXR). No cavitation or empyema.',
          interpretation: 'Bacterial pneumonia, RLL. Small parapneumonic effusion. No complications.',
          isAbnormal: true,
          educationalNote: 'CT more sensitive than CXR for detecting effusions, cavitation, and early consolidation. Not routinely needed for uncomplicated CAP but useful when CXR unclear or complications suspected.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      { id: 'initial', name: 'Initial Assessment', description: 'Assess severity and recognize pneumonia' },
      { id: 'workup', name: 'Diagnostic Workup', description: 'Order appropriate tests' },
      { id: 'treatment', name: 'Treatment Decisions', description: 'Determine disposition and antibiotics' },
    ],
    decisionPoints: [
      {
        id: 'recognize-severity',
        stageId: 'initial',
        question: 'Based on the initial assessment, how would you classify this patient\'s pneumonia severity?',
        context: '72-year-old with confusion, RR 26, BP 102/58, SpO2 89%, BUN elevated.',
        options: [
          {
            id: 'severe-curb65',
            text: 'Severe pneumonia (CURB-65 score 3-4), requires hospitalization',
            consequence: 'You correctly identify high-risk pneumonia.',
            isCorrect: true,
            feedback: 'Correct! CURB-65: Confusion (1), Urea/BUN >19 (1), RR ≥30 (0, she\'s 26), BP systolic <90 or diastolic ≤60 (1), Age ≥65 (1) = Score 3. Score ≥2 warrants hospitalization; ≥3 consider ICU. Add hypoxia and this patient clearly needs admission.',
            nextStageId: 'workup',
          },
          {
            id: 'moderate',
            text: 'Moderate pneumonia, can treat as outpatient with close follow-up',
            consequence: 'You underestimate severity.',
            isCorrect: false,
            feedback: 'This patient has multiple severity markers: confusion (altered mental status), borderline hypotension, significant hypoxia (SpO2 89%), elevated BUN. CURB-65 is 3. Outpatient treatment would be dangerous.',
            nextStageId: 'workup',
          },
          {
            id: 'mild',
            text: 'Mild pneumonia, prescribe oral antibiotics and discharge',
            consequence: 'You significantly underestimate severity.',
            isCorrect: false,
            feedback: 'This is definitely not mild pneumonia. The patient is hypoxic, confused, and has signs of sepsis. Discharging this patient could result in deterioration and death. Risk stratification tools exist for a reason.',
            nextStageId: 'workup',
          },
        ],
        correctOptionId: 'severe-curb65',
        educationalExplanation: 'CURB-65 is a validated severity score: Confusion, Urea >7 mmol/L (BUN >19 mg/dL), RR ≥30, BP <90/60, Age ≥65. Score 0-1: outpatient. Score 2: consider hospital. Score ≥3: severe pneumonia, consider ICU. PSI (Pneumonia Severity Index) is an alternative. Hypoxia requiring supplemental O2 is an independent indication for admission.',
      },
      {
        id: 'disposition',
        stageId: 'workup',
        question: 'After initial stabilization (O2, IV fluids), where should this patient be admitted?',
        context: 'CURB-65 = 3, SpO2 89% on room air (improved to 94% on 4L NC), lactate 2.8, borderline BP.',
        options: [
          {
            id: 'stepdown-icu',
            text: 'ICU or step-down unit for close monitoring',
            consequence: 'You appropriately recognize need for higher level of care.',
            isCorrect: true,
            feedback: 'Correct! With CURB-65 ≥3, hypoxia requiring supplemental O2, elevated lactate suggesting sepsis, and borderline blood pressure, this patient meets criteria for severe CAP. ICU or step-down allows for close monitoring and rapid escalation if needed.',
            nextStageId: 'treatment',
          },
          {
            id: 'floor',
            text: 'General medical floor',
            consequence: 'You choose standard admission.',
            isCorrect: false,
            feedback: 'While she could potentially be managed on the floor, her severity markers (confusion, sepsis with elevated lactate, hypoxia, borderline BP) suggest higher risk. ATS/IDSA criteria for severe CAP include: need for vasopressors, need for mechanical ventilation, or ≥3 minor criteria. She has several minor criteria.',
            nextStageId: 'treatment',
          },
          {
            id: 'observation',
            text: 'Observation unit for 24 hours',
            consequence: 'You choose brief observation.',
            isCorrect: false,
            feedback: 'Observation is inappropriate for this severity of illness. She has sepsis (infection + organ dysfunction), severe pneumonia by CURB-65, and needs IV antibiotics and monitoring. This is not a "watch and wait" situation.',
            nextStageId: 'treatment',
          },
        ],
        correctOptionId: 'stepdown-icu',
        educationalExplanation: 'ATS/IDSA severe CAP criteria - Major: septic shock requiring vasopressors, respiratory failure requiring mechanical ventilation. Minor: RR ≥30, PaO2/FiO2 ≤250, multilobar infiltrates, confusion, uremia (BUN ≥20), leukopenia, thrombocytopenia, hypothermia, hypotension requiring fluids. ≥1 major or ≥3 minor = severe CAP warranting ICU.',
      },
      {
        id: 'antibiotics',
        stageId: 'treatment',
        question: 'What is the appropriate empiric antibiotic regimen for this patient with severe CAP?',
        context: 'Severe CAP, admitted to step-down. Sputum gram stain shows gram-positive diplococci. No drug allergies.',
        options: [
          {
            id: 'beta-lactam-macrolide',
            text: 'IV ceftriaxone + IV azithromycin (or respiratory fluoroquinolone monotherapy)',
            consequence: 'You choose guideline-recommended empiric therapy.',
            isCorrect: true,
            feedback: 'Correct! For severe CAP: beta-lactam (ceftriaxone, cefotaxime, or ampicillin-sulbactam) PLUS macrolide (azithromycin) OR respiratory fluoroquinolone (levofloxacin/moxifloxacin) alone. Dual therapy may be superior in severe CAP. This covers typical (pneumococcus) and atypical pathogens.',
            nextStageId: undefined,
          },
          {
            id: 'vanc-zosyn',
            text: 'IV vancomycin + piperacillin-tazobactam',
            consequence: 'You choose broad-spectrum hospital-acquired coverage.',
            isCorrect: false,
            feedback: 'This is HCAP/HAP coverage, not CAP. Vancomycin covers MRSA (not common CAP pathogen) and pip-tazo covers Pseudomonas. For community-acquired pneumonia without MRSA/Pseudomonas risk factors, standard CAP coverage (ceftriaxone + macrolide) is appropriate and avoids unnecessary broad spectrum.',
            nextStageId: undefined,
          },
          {
            id: 'oral-amox',
            text: 'Oral amoxicillin-clavulanate',
            consequence: 'You choose oral therapy.',
            isCorrect: false,
            feedback: 'Oral antibiotics are inappropriate for severe CAP requiring hospitalization. This patient needs IV antibiotics for reliable delivery and coverage of potentially bacteremic infection. Oral therapy is for outpatient treatment of mild CAP.',
            nextStageId: undefined,
          },
          {
            id: 'azithro-only',
            text: 'IV azithromycin alone',
            consequence: 'You choose macrolide monotherapy.',
            isCorrect: false,
            feedback: 'Macrolide monotherapy is not recommended for hospitalized CAP due to increasing pneumococcal resistance. Guidelines recommend beta-lactam + macrolide or respiratory fluoroquinolone alone. Dual therapy provides better coverage.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'beta-lactam-macrolide',
        educationalExplanation: 'ATS/IDSA CAP guidelines - Severe/hospitalized CAP: Beta-lactam (ceftriaxone 1-2g IV daily) PLUS macrolide (azithromycin 500mg IV daily), OR respiratory fluoroquinolone (levofloxacin 750mg or moxifloxacin 400mg) monotherapy. Add MRSA coverage (vancomycin/linezolid) only if risk factors. Add anti-pseudomonal coverage only if specific risk factors.',
      },
    ],
    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'Correctly risk-stratify, appropriate workup, timely antibiotics, ICU admission',
        stageSequence: ['initial', 'workup', 'treatment'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Severe Community-Acquired Pneumonia - Streptococcus pneumoniae',
      icdCode: 'J18.1',
      explanation: 'Bacterial infection of the lung parenchyma, acquired outside of healthcare settings, caused by Streptococcus pneumoniae (pneumococcus).',
      pathophysiology: 'Pneumococcus colonizes the nasopharynx and descends to the lungs via aspiration. In the alveoli, bacteria multiply and trigger inflammatory response. Alveoli fill with neutrophils, bacteria, and fluid (consolidation), impairing gas exchange. Pneumococcal capsule evades host defenses. Bacteremia occurs in ~25% of pneumococcal pneumonia.',
      epidemiology: 'CAP affects 4-5 million Americans annually, ~1 million hospitalizations. S. pneumoniae is the most common identified pathogen (15-30% of CAP). Mortality increases with age and comorbidities - ~10-15% for hospitalized elderly patients.',
      prognosis: 'With appropriate treatment, most patients improve within 48-72 hours. However, elderly patients with severe CAP have significant mortality risk. Poor prognostic factors: advanced age, comorbidities, multilobar disease, bacteremia, sepsis.',
    },

    diagnosticReasoning: 'This case demonstrates classic bacterial pneumonia in an elderly patient. The constellation of productive cough with purulent sputum, fever, pleuritic chest pain, and dyspnea over several days is typical. Importantly, confusion was a prominent feature - delirium is often the presenting symptom of pneumonia in elderly ("atypical presentation"). Physical exam showed classic consolidation findings: dullness, bronchial breath sounds, egophony, and increased fremitus. Risk stratification using CURB-65 correctly identified severe disease requiring hospitalization.',

    keyFindings: [
      'Productive cough with purulent sputum over 4 days',
      'Fever with rigors',
      'Acute confusion (new from baseline)',
      'Hypoxia (SpO2 89% on room air)',
      'Classic consolidation on exam: dullness, bronchial breath sounds, egophony, increased fremitus',
      'CXR showing RLL lobar consolidation with air bronchograms',
      'Elevated WBC with left shift (bandemia)',
      'Positive pneumococcal urinary antigen',
      'Gram-positive diplococci on sputum gram stain',
    ],

    treatment: {
      immediate: 'Supplemental O2 to maintain SpO2 ≥94%, IV fluid resuscitation, blood cultures before antibiotics, empiric IV antibiotics within 1 hour',
      medications: [
        {
          name: 'Ceftriaxone',
          dose: '2g',
          route: 'IV',
          frequency: 'daily',
          rationale: 'Beta-lactam covering S. pneumoniae (including intermediate-resistant strains), H. influenzae, M. catarrhalis',
        },
        {
          name: 'Azithromycin',
          dose: '500mg',
          route: 'IV',
          frequency: 'daily',
          rationale: 'Macrolide covering atypical pathogens (Mycoplasma, Chlamydia, Legionella) and has immunomodulatory effects',
        },
        {
          name: 'Normal Saline',
          dose: '30 mL/kg',
          route: 'IV',
          frequency: 'bolus for sepsis resuscitation',
          rationale: 'Fluid resuscitation for sepsis-induced hypoperfusion',
        },
      ],
      procedures: 'Supplemental oxygen via nasal cannula. Consider non-invasive ventilation if worsening. Thoracentesis if significant pleural effusion develops.',
      monitoring: 'Continuous pulse oximetry. Vital signs every 4 hours. Serial lactate to assess sepsis response. Repeat CXR if clinical worsening.',
      patientEducation: [
        'You have a serious lung infection called pneumonia',
        'The IV antibiotics will fight the bacteria causing the infection',
        'You should start feeling better in 2-3 days, but full recovery takes weeks',
        'After discharge, complete all prescribed antibiotics',
        'Follow up with your doctor in 1-2 weeks',
        'Get the pneumonia vaccine when recovered to prevent future infections',
        'Return immediately for worsening breathing, high fever, or confusion',
      ],
    },

    outcome: 'Patient was admitted to step-down unit. Blood cultures were negative. Received ceftriaxone + azithromycin. By day 2, fever resolved, mental status improved, and oxygen requirement decreased. By day 4, on room air with SpO2 95%. Transitioned to oral antibiotics (amoxicillin-clavulanate) and discharged day 5 with 5 additional days of oral antibiotics. Follow-up CXR at 6 weeks showed complete resolution.',

    followUp: 'Follow-up in 1-2 weeks to ensure clinical improvement. Repeat CXR at 6-8 weeks to confirm radiographic resolution (especially important in smokers/elderly to exclude underlying malignancy). Pneumococcal vaccination after recovery. Smoking cessation counseling. Optimize COPD management.',
  },

  teachingPoints: [
    {
      topic: 'CURB-65 Risk Stratification',
      content: 'Confusion, Urea (BUN >19), RR ≥30, BP <90/60, Age ≥65. Score 0-1: outpatient. Score 2: consider hospital. Score ≥3: severe, consider ICU. Simple bedside tool for disposition decisions.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Elderly Presentation of Pneumonia',
      content: 'Elderly patients often present "atypically" - may lack fever, have minimal cough, but present with confusion, falls, functional decline, or decompensation of chronic disease. Always consider pneumonia in altered elderly.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'Physical Exam Findings of Consolidation',
      content: 'Classic triad: dullness to percussion, bronchial breath sounds, egophony (E-to-A change). Also: increased tactile fremitus, crackles. These findings have good specificity for pneumonia.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'Empiric Antibiotic Selection',
      content: 'Outpatient: macrolide or doxycycline. Outpatient with comorbidities: respiratory FQ or beta-lactam + macrolide. Inpatient: beta-lactam + macrolide OR respiratory FQ. Severe/ICU: beta-lactam + macrolide (combination preferred).',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Time to Antibiotics',
      content: 'In pneumonia with sepsis, antibiotics should be given within 1 hour. For non-septic CAP, within 4-8 hours of presentation. Delayed antibiotics associated with worse outcomes.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Pneumococcal Urinary Antigen',
      content: 'Rapid test (~15 min) for pneumococcal cell wall polysaccharide. ~70% sensitive, >90% specific. Remains positive for weeks, so useful even after antibiotics started. Helps confirm etiology.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Dismissing confusion in elderly as "baseline" without evaluating for infection',
    'Underestimating severity - not using CURB-65 or PSI for risk stratification',
    'Discharging hypoxic patients without ensuring adequate oxygenation',
    'Delaying antibiotics while awaiting test results',
    'Using overly broad antibiotics (MRSA/Pseudomonas coverage) for uncomplicated CAP',
    'Not obtaining blood cultures before antibiotics in hospitalized patients',
    'Missing parapneumonic effusion on CXR (CT more sensitive)',
    'Not following up with repeat CXR to ensure resolution (especially in elderly/smokers)',
  ],

  relatedCases: [
    'aspiration-pneumonia',
    'copd-exacerbation',
    'influenza-pneumonia',
    'sepsis-management',
    'pleural-effusion',
  ],
};

// ============================================
// Case: Acute Ischemic Stroke
// ============================================

const STROKE_CASE: ClinicalCase = {
  id: 'acute-stroke-mca',
  title: 'The Sudden Weakness',
  category: 'neurology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the clinical presentation of acute ischemic stroke',
    'Understand the importance of rapid assessment and "time is brain" concept',
    'Learn the components and significance of the NIH Stroke Scale',
    'Master the eligibility criteria for IV thrombolysis (tPA/alteplase)',
    'Appreciate stroke localization based on neurological findings',
  ],

  presentation: {
    chiefComplaint: 'Sudden weakness and slurred speech',
    demographics: {
      age: 67,
      sex: 'male',
      occupation: 'retired engineer',
      context: 'wife called 911 when she noticed his face drooping during breakfast',
    },
    openingParagraph: `Mr. Williams is a 67-year-old retired engineer brought to the ED by ambulance after his wife noticed something wrong during breakfast. He was fine when he woke up at 7:00 AM, but at 7:45 AM she noticed his face looked "crooked," his speech was slurred, and he couldn't lift his coffee cup with his right hand. She called 911 immediately. Current time is 8:30 AM. EMS activated stroke alert en route.`,
    generalAppearance: 'Alert elderly man with obvious facial asymmetry. Right arm is limp at his side. He attempts to speak but words are garbled. Appears frightened. No signs of trauma.',
    vitalSigns: {
      temperature: '98.4°F (36.9°C)',
      heartRate: '88 bpm, irregularly irregular',
      bloodPressure: '178/96 mmHg',
      respiratoryRate: '16/min',
      oxygenSaturation: '97% on room air',
      interpretation: 'Hypertension is common in acute stroke (Cushing response or baseline HTN). Irregularly irregular pulse suggests atrial fibrillation - a major stroke risk factor.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'What time did the symptoms start?',
        category: 'hpi',
        response: 'Wife: "He was completely normal at 7 AM when he got out of bed. At 7:45 AM I noticed his face was droopy. So definitely sometime between 7:00 and 7:45."',
        educationalNote: 'Last known well (LKW) time is CRITICAL. This determines eligibility for thrombolysis (within 4.5 hours) and thrombectomy (up to 24 hours in select patients). LKW is 7:00 AM.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-progression',
        question: 'Have the symptoms changed since they started?',
        category: 'hpi',
        response: 'Wife: "They\'ve been the same. Maybe a little worse. He seems more confused now."',
        educationalNote: 'Stable or worsening symptoms suggest ongoing ischemia. Improvement may suggest TIA (transient ischemic attack), but should still be treated urgently.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-face',
        question: 'Describe what you noticed about his face.',
        category: 'hpi',
        response: 'Wife: "The right side of his face is drooping. When he tries to smile, only the left side moves."',
        educationalNote: 'Facial droop is part of the BE-FAST mnemonic (Balance, Eyes, Face, Arm, Speech, Time). Unilateral facial weakness suggests contralateral brain lesion.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-arm',
        question: 'Tell me about the arm weakness.',
        category: 'hpi',
        response: 'Wife: "His right arm just dropped. He couldn\'t hold his coffee cup. He can\'t lift it at all now."',
        educationalNote: 'Arm weakness is another BE-FAST component. Complete paralysis (plegia) vs. weakness (paresis) helps gauge severity.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-speech',
        question: 'Describe his speech.',
        category: 'hpi',
        response: 'Wife: "He\'s trying to talk but it comes out all jumbled. He said \'want water\' and it sounded like \'wan wah-er.\' He seems to understand me though."',
        educationalNote: 'Slurred speech with intact comprehension suggests dysarthria (motor speech problem) vs. aphasia (language processing problem). This pattern localizes to motor cortex rather than language areas.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-vision',
        question: 'Any vision problems?',
        category: 'hpi',
        response: 'Wife: "I\'m not sure. He keeps looking to the left and seems to ignore things on his right side."',
        educationalNote: 'Gaze preference and hemineglect suggest large hemisphere stroke. Gaze preference toward the lesion side ("eyes look toward the lesion") is classic for MCA stroke.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-afib',
        question: 'Does he have atrial fibrillation?',
        category: 'pmh',
        response: 'Wife: "Yes, he was diagnosed a few years ago. He\'s supposed to be on a blood thinner but I think he stopped taking it because of cost."',
        educationalNote: 'Atrial fibrillation is a major risk factor for cardioembolic stroke. Non-adherence to anticoagulation dramatically increases stroke risk. This history strongly suggests embolic etiology.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-other',
        question: 'What other medical problems does he have?',
        category: 'pmh',
        response: 'High blood pressure, diabetes, and the irregular heartbeat. He had a small stroke about 5 years ago but recovered completely.',
        educationalNote: 'Prior stroke significantly increases risk of recurrent stroke. HTN and DM are additional risk factors. This patient has multiple modifiable risk factors.',
        isKeyFinding: true,
      },
      {
        id: 'meds-anticoag',
        question: 'Is he on any blood thinners?',
        category: 'medications',
        response: 'Wife: "He was prescribed one of those new blood thinners - apixaban I think - but he said it was too expensive. He\'s been off it for about 6 months."',
        educationalNote: 'This is crucial for tPA eligibility. Currently NOT on anticoagulation, which simplifies thrombolysis decision. Recent anticoagulant use would require checking drug levels or coagulation tests.',
        isKeyFinding: true,
      },
      {
        id: 'meds-other',
        question: 'What other medications is he taking?',
        category: 'medications',
        response: 'Lisinopril, metformin, and aspirin 81mg daily.',
        educationalNote: 'Aspirin alone is inadequate stroke prevention in AFib (needs anticoagulation). At least he has some antiplatelet therapy.',
        isKeyFinding: false,
      },
      {
        id: 'recent-surgery',
        question: 'Any recent surgeries or procedures?',
        category: 'pmh',
        response: 'Wife: "No surgeries. He had a colonoscopy about 3 months ago."',
        educationalNote: 'Recent major surgery is a contraindication to tPA. The colonoscopy 3 months ago is not a contraindication (concern is surgery within 14 days).',
        isKeyFinding: true,
      },
      {
        id: 'bleeding-history',
        question: 'Any history of bleeding problems or GI bleeding?',
        category: 'pmh',
        response: 'Wife: "No bleeding problems that I know of."',
        educationalNote: 'Active bleeding or bleeding diathesis are contraindications to tPA. History of intracranial hemorrhage would be an absolute contraindication.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'Neurological - Mental Status',
        findings: [
          {
            id: 'neuro-loc',
            exam: 'Level of consciousness',
            finding: 'Alert, eyes open spontaneously. Follows simple commands.',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'LOC is the first component of NIHSS. Alert = 0, Drowsy = 1, Obtunded = 2, Coma = 3. Alert is favorable.',
          },
          {
            id: 'neuro-orientation',
            exam: 'Orientation questions',
            finding: 'Can state his age correctly. Gives wrong month (says May instead of current month).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'NIHSS asks month and age. One error = 1 point, both wrong = 2 points. Errors suggest dominant hemisphere involvement.',
          },
          {
            id: 'neuro-commands',
            exam: 'Following commands',
            finding: 'Can close eyes and make fist with left hand. Unable to make fist with right hand due to weakness.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'NIHSS commands: close eyes, grip hand. Inability due to weakness is not counted as impairment - the weakness itself is scored separately.',
          },
        ],
      },
      {
        system: 'Neurological - Cranial Nerves',
        findings: [
          {
            id: 'neuro-gaze',
            exam: 'Eye movements/gaze',
            finding: 'Gaze deviation to the left. Can cross midline briefly but eyes drift back left. Unable to look fully to the right.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Gaze preference toward the lesion side is classic. Left gaze deviation = left hemisphere stroke. NIHSS: partial gaze palsy = 1, forced deviation = 2.',
          },
          {
            id: 'neuro-visual',
            exam: 'Visual fields',
            finding: 'Does not respond to stimuli in right visual field. Left visual field intact.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Right homonymous hemianopia suggests left occipital or optic radiation involvement. Part of MCA territory stroke. NIHSS: partial hemianopia = 1, complete = 2.',
          },
          {
            id: 'neuro-facial',
            exam: 'Facial movement',
            finding: 'Right facial droop. Forehead wrinkles symmetrically. Nasolabial fold flat on right. Asymmetric smile.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Lower face weakness with forehead sparing = central facial palsy (upper motor neuron pattern). Confirms stroke vs. Bell palsy (which affects entire face). NIHSS: minor = 1, major = 2, bilateral = 3.',
          },
        ],
      },
      {
        system: 'Neurological - Motor',
        findings: [
          {
            id: 'neuro-arm-right',
            exam: 'Right arm strength',
            finding: 'Unable to lift arm against gravity. Arm drifts immediately to bed when positioned. 0/5 strength.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Complete right arm plegia (0/5) = NIHSS 4. This is severe. Motor deficit lateralizes to left hemisphere (controls right body).',
          },
          {
            id: 'neuro-arm-left',
            exam: 'Left arm strength',
            finding: 'Full strength (5/5). Holds arm up without drift for 10 seconds.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Unilateral weakness confirms hemispheric stroke rather than brainstem.',
          },
          {
            id: 'neuro-leg-right',
            exam: 'Right leg strength',
            finding: 'Leg drifts down slowly when held up. Can move against gravity but not full strength. 3/5.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Right leg weakness (3/5) = NIHSS 1-2. Leg less affected than arm is typical of MCA stroke (leg cortex is more medial, in ACA territory).',
          },
          {
            id: 'neuro-leg-left',
            exam: 'Left leg strength',
            finding: 'Full strength (5/5).',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Left side spared, consistent with left hemisphere stroke.',
          },
        ],
      },
      {
        system: 'Neurological - Coordination/Sensation',
        findings: [
          {
            id: 'neuro-ataxia',
            exam: 'Limb ataxia',
            finding: 'Cannot test right side due to weakness. Left finger-to-nose intact.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'NIHSS ataxia tests cerebellar function. If weakness prevents testing, score as 0 (not ataxia).',
          },
          {
            id: 'neuro-sensory',
            exam: 'Sensory exam',
            finding: 'Decreased sensation to pinprick on right face and right arm. Neglects right side to double simultaneous stimulation.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Sensory loss and extinction (neglect) to double simultaneous stimulation = NIHSS 1-2. Neglect suggests right parietal involvement (left MCA).',
          },
        ],
      },
      {
        system: 'Neurological - Language',
        findings: [
          {
            id: 'neuro-speech',
            exam: 'Speech clarity',
            finding: 'Severely slurred speech (dysarthria). Words intelligible but slurred. Can name objects.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Dysarthria = motor speech problem. Can be mild-to-moderate = 1, severe = 2 on NIHSS. Different from aphasia (language processing).',
          },
          {
            id: 'neuro-language',
            exam: 'Language/aphasia',
            finding: 'Mild word-finding difficulty. Can follow commands. Can repeat phrases with effort. Comprehension intact.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Mild aphasia with preserved comprehension suggests Broca-area involvement (left frontal). NIHSS: mild = 1, severe = 2, mute = 3.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-rhythm',
            exam: 'Heart rhythm',
            finding: 'Irregularly irregular rhythm. No murmurs.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Irregularly irregular = atrial fibrillation. Confirms history and suggests cardioembolic stroke etiology. Need rate control if very tachycardic.',
          },
          {
            id: 'cv-carotid',
            exam: 'Carotid exam',
            finding: 'No bruits bilaterally.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Carotid bruit suggests stenosis but absence doesn\'t rule it out. Embolic stroke from AFib doesn\'t require carotid disease.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'glucose',
        name: 'Point-of-Care Glucose',
        category: 'basic',
        turnaroundTime: '1 minute',
        result: {
          value: '142 mg/dL',
          interpretation: 'Mild hyperglycemia. Not hypoglycemic (hypoglycemia can mimic stroke).',
          isAbnormal: true,
          educationalNote: 'Glucose is the ONLY lab required before tPA. Hypoglycemia (<60) can cause focal deficits and must be excluded. Hyperglycemia worsens stroke outcomes.',
        },
      },
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'WBC 8,200/μL, Hgb 14.1, Plt 198,000',
          interpretation: 'Normal. Platelet count adequate for thrombolysis.',
          isAbnormal: false,
          educationalNote: 'Thrombocytopenia (<100,000) is relative contraindication to tPA. Don\'t need to wait for platelet count before tPA unless history suggests thrombocytopenia.',
        },
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'Na 141, K 4.2, Cr 1.0, Glucose 148',
          interpretation: 'Normal renal function. Glucose confirms POC value.',
          isAbnormal: false,
          educationalNote: 'Electrolyte disturbances can cause neurological symptoms. Renal function important for contrast (CTA) and some stroke medications.',
        },
      },
      {
        id: 'coags',
        name: 'PT/INR, PTT',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'PT 12.2 sec, INR 1.0, PTT 28 sec',
          interpretation: 'Normal coagulation. Not anticoagulated.',
          isAbnormal: false,
          educationalNote: 'INR >1.7 is contraindication to tPA. Since patient reports no anticoagulants, don\'t need to wait for INR before giving tPA. Check if on DOACs.',
        },
      },
      {
        id: 'troponin',
        name: 'Troponin',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: '< 0.01 ng/mL (normal)',
          interpretation: 'No evidence of acute MI.',
          isAbnormal: false,
          educationalNote: 'MI can cause stroke (cardiac embolism) and stroke can cause troponin rise (stress). Rule out concurrent MI.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'ct-head',
        name: 'Non-Contrast CT Head',
        modality: 'CT',
        turnaroundTime: '10 minutes',
        result: {
          finding: 'No intracranial hemorrhage. No mass lesion. Early hypodensity in left MCA territory with loss of gray-white differentiation in left insula (insular ribbon sign). Hyperdense left MCA sign present.',
          interpretation: 'Early acute ischemic stroke in left MCA territory. No hemorrhage - tPA candidate.',
          isAbnormal: true,
          educationalNote: 'NCCT primary purpose is to EXCLUDE hemorrhage (which contraindicates tPA). Early ischemic signs: insular ribbon sign, loss of gray-white differentiation, sulcal effacement. Hyperdense MCA = clot in vessel.',
        },
      },
      {
        id: 'cta-head',
        name: 'CT Angiography Head and Neck',
        modality: 'CT',
        turnaroundTime: '20 minutes',
        result: {
          finding: 'Occlusion of left M1 segment of middle cerebral artery. Left ICA patent. Right circulation normal. Moderate calcified atherosclerotic plaque in bilateral carotid bulbs without significant stenosis.',
          interpretation: 'Left MCA M1 occlusion - large vessel occlusion (LVO). Thrombectomy candidate.',
          isAbnormal: true,
          educationalNote: 'CTA identifies large vessel occlusions (LVO) that may benefit from mechanical thrombectomy. M1 MCA is most common LVO location. LVO = worse prognosis but more treatment options.',
        },
      },
      {
        id: 'ct-perfusion',
        name: 'CT Perfusion',
        modality: 'CT',
        turnaroundTime: '25 minutes',
        result: {
          finding: 'Core infarct volume: 12 mL. Penumbra volume: 85 mL. Mismatch ratio: 7.1 (favorable).',
          interpretation: 'Small core with large penumbra - significant salvageable tissue. Favorable for intervention.',
          isAbnormal: true,
          educationalNote: 'Perfusion imaging identifies core (irreversibly damaged) vs. penumbra (salvageable with reperfusion). Large mismatch = more to save. Core/penumbra ratio guides extended window thrombectomy decisions.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      { id: 'initial', name: 'Rapid Assessment', description: 'Quick recognition and initial evaluation' },
      { id: 'imaging', name: 'Imaging Interpretation', description: 'CT results and treatment eligibility' },
      { id: 'treatment', name: 'Treatment Decision', description: 'tPA and thrombectomy decisions' },
    ],
    decisionPoints: [
      {
        id: 'initial-recognition',
        stageId: 'initial',
        question: 'This patient arrives via EMS with stroke alert. What is your FIRST priority?',
        context: 'Onset 45 minutes ago. Facial droop, arm weakness, slurred speech.',
        options: [
          {
            id: 'stat-ct',
            text: 'Get STAT non-contrast CT head and check glucose',
            consequence: 'CT obtained within 10 minutes of arrival.',
            isCorrect: true,
            feedback: 'Correct! The immediate priority is CT head to exclude hemorrhage and POC glucose to exclude hypoglycemia. These are the only requirements before tPA can be given. "Time is brain" - every minute of delay = more neuron loss.',
            nextStageId: 'imaging',
          },
          {
            id: 'complete-nihss',
            text: 'Complete full NIHSS before any imaging',
            consequence: 'You spend 10 minutes on detailed examination.',
            isCorrect: false,
            feedback: 'While NIHSS is important, it shouldn\'t delay imaging. NIHSS can be performed during or after CT. Detailed neurological exam at the expense of treatment delay is harmful.',
            nextStageId: 'imaging',
          },
          {
            id: 'wait-labs',
            text: 'Wait for full lab panel before proceeding',
            consequence: 'You wait 30 minutes for lab results.',
            isCorrect: false,
            feedback: 'The only lab needed before tPA is glucose (fingerstick takes 1 minute). Don\'t wait for CBC, coags, etc. unless there\'s specific concern (on anticoagulants, bleeding history). Time lost = brain lost.',
            nextStageId: 'imaging',
          },
          {
            id: 'mri-first',
            text: 'Order MRI for better stroke imaging',
            consequence: 'MRI takes 45 minutes to obtain.',
            isCorrect: false,
            feedback: 'MRI is more sensitive for ischemia but takes much longer. CT is the initial test of choice because it quickly rules out hemorrhage. In the hyperacute setting, CT is sufficient for treatment decisions.',
            nextStageId: 'imaging',
          },
        ],
        correctOptionId: 'stat-ct',
        educationalExplanation: 'Acute stroke is a time-critical emergency. Every minute of cerebral ischemia destroys 1.9 million neurons. Door-to-CT time should be <25 minutes. Door-to-needle (tPA) time should be <60 minutes. Glucose is checked to exclude hypoglycemia (stroke mimic). CT excludes hemorrhage, the main contraindication to tPA.',
      },
      {
        id: 'ct-interpretation',
        stageId: 'imaging',
        question: 'CT shows no hemorrhage, early ischemic changes in left MCA territory, and hyperdense MCA sign. CTA shows left M1 occlusion. What does this mean?',
        context: 'Time is now 8:45 AM. Last known well 7:00 AM (1 hour 45 minutes ago). NIHSS 14.',
        options: [
          {
            id: 'lvo-tpa-candidate',
            text: 'Large vessel occlusion, candidate for both IV tPA and mechanical thrombectomy',
            consequence: 'You recognize the LVO and plan dual therapy.',
            isCorrect: true,
            feedback: 'Correct! M1 occlusion is a large vessel occlusion. Within time window (4.5 hours) with no contraindications, patient should receive IV tPA. LVO patients also benefit from mechanical thrombectomy (if available) - these treatments are complementary, not mutually exclusive.',
            nextStageId: 'treatment',
          },
          {
            id: 'too-late-tpa',
            text: 'Ischemic changes visible means too late for tPA',
            consequence: 'You decide against thrombolysis.',
            isCorrect: false,
            feedback: 'Early ischemic changes do NOT contraindicate tPA. Established infarct involving >1/3 MCA territory is a relative contraindication, but subtle early changes are common and expected. This patient has early changes and is clearly within the time window.',
            nextStageId: 'treatment',
          },
          {
            id: 'tpa-only',
            text: 'Give tPA only, thrombectomy is not needed',
            consequence: 'You plan tPA alone.',
            isCorrect: false,
            feedback: 'For large vessel occlusions like M1, IV tPA alone has <30% recanalization rate. Mechanical thrombectomy achieves >80% recanalization and dramatically improves outcomes. LVO patients should be evaluated for both treatments.',
            nextStageId: 'treatment',
          },
        ],
        correctOptionId: 'lvo-tpa-candidate',
        educationalExplanation: 'Large vessel occlusion (LVO) strokes have high morbidity without intervention. Modern stroke treatment involves: (1) IV tPA for eligible patients within 4.5 hours, (2) Mechanical thrombectomy for LVO within 6-24 hours depending on imaging selection. These are complementary - give tPA first, then proceed to thrombectomy. "Drip and ship" if thrombectomy not available locally.',
      },
      {
        id: 'treatment-decision',
        stageId: 'treatment',
        question: 'You\'ve confirmed LVO and tPA eligibility. What is the correct sequence of actions?',
        context: 'Current time 8:50 AM, LKW 7:00 AM (1 hr 50 min), NIHSS 14, no contraindications, M1 occlusion.',
        options: [
          {
            id: 'tpa-then-thrombectomy',
            text: 'Administer IV tPA immediately, then activate neurointerventional team for thrombectomy',
            consequence: 'tPA bolus given at 8:52 AM, thrombectomy team mobilizing.',
            isCorrect: true,
            feedback: 'Correct! Give tPA as soon as possible - don\'t delay for thrombectomy preparation. Start tPA infusion, then patient goes to angio suite for thrombectomy while tPA continues. This "drip and ship" (or "drip and drive" if transferring) approach maximizes benefit.',
            nextStageId: undefined,
          },
          {
            id: 'thrombectomy-only',
            text: 'Skip tPA and go directly to thrombectomy since it\'s more effective',
            consequence: 'You bypass IV thrombolysis.',
            isCorrect: false,
            feedback: 'While thrombectomy is highly effective for LVO, tPA adds benefit and should not be withheld if eligible. Studies show better outcomes with tPA + thrombectomy than thrombectomy alone. tPA works while waiting for the procedure.',
            nextStageId: undefined,
          },
          {
            id: 'wait-family',
            text: 'Wait for family consent before starting any treatment',
            consequence: 'You wait for family to arrive.',
            isCorrect: false,
            feedback: 'In acute stroke, treatment delay is harmful. If the patient cannot consent, emergency consent principles apply - a reasonable person would consent to treatment that could prevent permanent disability. Don\'t delay life-saving treatment for consent.',
            nextStageId: undefined,
          },
          {
            id: 'transfer-tsc',
            text: 'Transfer to comprehensive stroke center before any treatment',
            consequence: 'You arrange transfer without treating.',
            isCorrect: false,
            feedback: 'Never delay tPA for transfer. If your hospital can give tPA, give it before transfer ("drip and ship"). The additional recanalization from early tPA may be the difference between good and poor outcome. Transfer for thrombectomy after starting tPA.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'tpa-then-thrombectomy',
        educationalExplanation: 'Optimal LVO treatment: (1) IV tPA as soon as hemorrhage excluded and eligibility confirmed, (2) Concurrent preparation for thrombectomy, (3) Continue tPA infusion during transfer to angio suite, (4) Mechanical thrombectomy to remove clot. Every 15 minutes of delay to thrombectomy reduces good outcomes by ~7%. tPA is "bridge therapy" while preparing for definitive clot removal.',
      },
    ],
    paths: [
      {
        id: 'optimal',
        name: 'Optimal Stroke Care',
        description: 'Rapid CT, immediate tPA, concurrent thrombectomy activation',
        stageSequence: ['initial', 'imaging', 'treatment'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Ischemic Stroke - Left MCA Territory (Cardioembolic)',
      icdCode: 'I63.5',
      explanation: 'Acute blockage of the left middle cerebral artery, most likely from a cardiac embolus related to atrial fibrillation, causing ischemia to the left cerebral hemisphere.',
      pathophysiology: 'Atrial fibrillation causes blood stasis in the left atrial appendage, leading to thrombus formation. Embolization to the brain occurs when clot fragments break off and travel via the carotid artery to the MCA. The MCA supplies motor cortex (causing contralateral weakness), sensory cortex, Broca\'s area (speech), and other critical regions.',
      epidemiology: 'Stroke affects ~800,000 Americans annually - 5th leading cause of death and leading cause of disability. ~87% are ischemic, 13% hemorrhagic. AFib increases stroke risk 5-fold. MCA strokes are the most common subtype.',
      prognosis: 'Outcomes depend heavily on time to reperfusion. With IV tPA within 4.5 hours, ~1/3 more patients have good outcome. With thrombectomy for LVO, NNT of ~3-4 for good outcome. Without treatment, large MCA strokes have high morbidity.',
    },

    diagnosticReasoning: 'This case demonstrates a classic cardioembolic stroke from atrial fibrillation. The sudden onset is typical of embolic stroke (vs. thrombotic which may have stuttering onset). Left hemisphere localization is confirmed by right-sided weakness/numbness, right facial droop with forehead sparing (upper motor neuron pattern), left gaze deviation, and dysarthria with mild aphasia. The NIHSS of 14 indicates moderate-severe stroke. CTA confirmed LVO at M1, explaining the severe presentation.',

    keyFindings: [
      'Sudden onset (embolic pattern)',
      'Last known well clearly defined (7:00 AM)',
      'Right hemiparesis (arm worse than leg - classic MCA pattern)',
      'Right facial droop with forehead sparing',
      'Left gaze preference',
      'Dysarthria and mild aphasia',
      'Atrial fibrillation (cause identified)',
      'Off anticoagulation (explains why stroke occurred)',
      'CT: no hemorrhage, early ischemic changes, hyperdense MCA',
      'CTA: left M1 occlusion',
    ],

    treatment: {
      immediate: 'IV alteplase (tPA) 0.9 mg/kg, with 10% bolus and remainder over 60 minutes. Concurrent activation of neurointerventional team for thrombectomy.',
      medications: [
        {
          name: 'Alteplase (tPA)',
          dose: '0.9 mg/kg (max 90 mg), 10% bolus, remainder over 60 min',
          route: 'IV',
          frequency: 'one-time',
          rationale: 'Thrombolysis to dissolve clot and restore blood flow. Must give within 4.5 hours of symptom onset.',
        },
        {
          name: 'Aspirin',
          dose: '325 mg',
          route: 'oral/rectal',
          frequency: 'daily (starting 24 hours after tPA)',
          rationale: 'Antiplatelet therapy for secondary prevention. Must wait 24 hours after tPA to avoid bleeding.',
        },
        {
          name: 'Apixaban (restart)',
          dose: '5 mg',
          route: 'oral',
          frequency: 'twice daily (after acute phase)',
          rationale: 'Anticoagulation for AFib to prevent recurrent cardioembolic stroke. Timing of initiation depends on stroke size.',
        },
      ],
      procedures: 'Mechanical thrombectomy with stent retriever to remove M1 occlusion. Achieved TICI 2b/3 recanalization.',
      monitoring: 'ICU admission. Neuro checks every 1 hour for 24 hours. BP management (goal <180/105 for 24 hours after tPA, then <140/90). Watch for hemorrhagic transformation. NPO until swallow evaluation.',
      patientEducation: [
        'You had a stroke caused by a blood clot in your brain',
        'The clot likely came from your heart because of the irregular heartbeat',
        'We gave you clot-dissolving medication and removed the clot with a procedure',
        'You must take your blood thinner (apixaban) every day to prevent another stroke',
        'Rehabilitation will help you recover strength and abilities',
        'Control blood pressure and diabetes',
        'Call 911 immediately if symptoms ever recur - time is critical',
      ],
    },

    outcome: 'IV tPA administered at 8:52 AM (door-to-needle 22 minutes). Thrombectomy started at 9:45 AM with successful M1 recanalization (TICI 2b). No hemorrhagic transformation on 24-hour CT. NIHSS improved from 14 to 4 by day 2. Patient able to walk with assistance, mild residual arm weakness, speech near-normal. Transferred to inpatient rehabilitation day 5. Anticoagulation restarted day 7.',

    followUp: 'Inpatient rehabilitation for 2-3 weeks. Follow-up with neurology in 4 weeks. Echocardiogram to evaluate for LAA thrombus. Lifelong anticoagulation for AFib. Blood pressure and diabetes optimization. Driving restrictions until cleared by physician.',
  },

  teachingPoints: [
    {
      topic: 'Time is Brain',
      content: 'Every minute of ischemia destroys 1.9 million neurons. Door-to-CT <25 min, door-to-needle <60 min. Treatment delays directly worsen outcomes. Stroke is a medical emergency like STEMI.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'NIHSS Components',
      content: 'Level of consciousness, gaze, visual fields, facial palsy, arm motor, leg motor, ataxia, sensory, language, dysarthria, extinction/neglect. Score 0-42, higher = worse. Quick, standardized assessment for severity and prognosis.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'tPA Eligibility',
      content: 'Within 4.5 hours of symptom onset. Main exclusions: hemorrhage on CT, recent surgery/trauma, bleeding diathesis, very high BP (>185/110), large infarct already visible. Only need glucose before giving. INR/platelets needed only if indicated by history.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Large Vessel Occlusion',
      content: 'LVO (ICA, M1/M2 MCA, basilar) = high morbidity without intervention. Identify with CTA. Thrombectomy indicated up to 24 hours in select patients. tPA alone has low recanalization rate for LVO. Both treatments are complementary.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Stroke Localization',
      content: 'MCA: face/arm > leg weakness, aphasia (dominant), neglect (non-dominant). ACA: leg > arm weakness. PCA: visual field defects. Brainstem: crossed signs, cranial nerve findings, vertigo, ataxia.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'AFib and Stroke',
      content: 'AFib increases stroke risk 5x. CHA2DS2-VASc score guides anticoagulation need. Most AFib strokes are preventable with proper anticoagulation. Non-adherence is a major cause of preventable stroke.',
      category: 'clinical-pearl',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Delaying CT for detailed history and physical',
    'Waiting for lab results other than glucose before tPA',
    'Withholding tPA because of early ischemic changes on CT',
    'Not recognizing LVO that needs thrombectomy referral',
    'Giving tPA but not pursuing thrombectomy for LVO',
    'Delaying tPA to wait for thrombectomy team',
    'Not checking or correcting severe hypertension (>185/110) before tPA',
    'Missing stroke mimics (hypoglycemia, seizure, migraine)',
    'Not identifying atrial fibrillation as the cause',
  ],

  relatedCases: [
    'hemorrhagic-stroke',
    'tia-workup',
    'posterior-circulation-stroke',
    'afib-management',
    'carotid-stenosis',
  ],
};

// ============================================
// Case: Sepsis from Urinary Source
// ============================================

const SEPSIS_CASE: ClinicalCase = {
  id: 'sepsis-urosepsis',
  title: 'The Confused Elder',
  category: 'emergency',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the clinical presentation of sepsis in elderly patients',
    'Understand SIRS criteria and qSOFA scoring',
    'Apply the Sepsis-3 definition and differentiate sepsis from septic shock',
    'Learn the importance of early antibiotics and the "golden hour"',
    'Understand the role of lactate as a prognostic marker',
    'Master the sepsis bundle elements',
    'Appreciate source control as a critical intervention',
  ],

  presentation: {
    chiefComplaint: 'Confusion and weakness',
    demographics: {
      age: 78,
      sex: 'female',
      occupation: 'retired teacher',
      context: 'brought to the emergency department by her daughter who noticed she was "not herself"',
    },
    openingParagraph: `Mrs. Chen is a 78-year-old retired teacher brought to the ED by her daughter, who became concerned when her mother seemed confused during their morning phone call. When the daughter arrived at Mrs. Chen's home, she found her mother weak, unable to get out of bed, and "just not making sense." Mrs. Chen lives alone and has been managing well until the last few days when she mentioned feeling "off."`,
    generalAppearance: 'Elderly woman appearing ill and lethargic. She is warm to touch and has dry mucous membranes. She appears drowsy but arousable, opening her eyes to voice but not fully oriented. She shivers intermittently.',
    vitalSigns: {
      temperature: '102.8°F (39.3°C)',
      heartRate: '112 bpm, regular',
      bloodPressure: '92/58 mmHg',
      respiratoryRate: '24/min',
      oxygenSaturation: '93% on room air',
      interpretation: 'Fever, tachycardia, hypotension, tachypnea, and mild hypoxia. This vital sign pattern is highly concerning for sepsis. The combination of hypotension with signs of infection suggests the patient may be progressing toward septic shock.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When did you first notice something was wrong?',
        category: 'hpi',
        response: 'Daughter: "I talked to her 3 days ago and she mentioned feeling tired and having to go to the bathroom a lot. Yesterday she said she had some back pain. This morning on the phone she couldn\'t remember what day it was."',
        educationalNote: 'The timeline reveals gradual progression: urinary symptoms → systemic symptoms → altered mental status. In elderly patients, confusion is often the presenting sign of sepsis. The back pain may indicate pyelonephritis.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-urinary',
        question: 'Has she had any urinary symptoms?',
        category: 'hpi',
        response: 'Daughter: "She mentioned burning when she pees and going frequently. She also said her urine looked cloudy yesterday."',
        educationalNote: 'Dysuria, frequency, and cloudy urine point to urinary tract infection as the source of sepsis. UTI is one of the most common causes of sepsis in elderly patients, especially women.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-fever',
        question: 'Has she had any fevers or chills?',
        category: 'hpi',
        response: 'Daughter: "She felt warm yesterday but wouldn\'t let me take her temperature. She said she had the chills and was shaking at one point."',
        educationalNote: 'Rigors (shaking chills) suggest bacteremia. Rigors occur when bacteria enter the bloodstream and trigger a systemic inflammatory response. This is a red flag for serious infection.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-intake',
        question: 'Has she been eating and drinking?',
        category: 'hpi',
        response: 'Daughter: "Not really. She said she wasn\'t hungry. I don\'t think she\'s had much water either - I noticed the water glass I left her yesterday was still full."',
        educationalNote: 'Poor oral intake combined with fever leads to dehydration, which compounds the hypoperfusion of sepsis. Elderly patients have decreased thirst sensation and are particularly vulnerable.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-dm',
        question: 'Does she have diabetes?',
        category: 'pmh',
        response: 'Yes, type 2 diabetes for about 15 years. She takes metformin.',
        educationalNote: 'Diabetes is a significant risk factor for UTI and sepsis. Diabetic patients have impaired immune function, and UTIs are more common due to glucosuria and bladder dysfunction.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-uti',
        question: 'Has she had urinary infections before?',
        category: 'pmh',
        response: 'Daughter: "Yes, she gets them pretty often. She was just on an antibiotic for one about a month ago."',
        educationalNote: 'Recurrent UTIs raise concern for resistant organisms. Recent antibiotic use may have selected for resistant bacteria, which should influence empiric antibiotic choice.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-other',
        question: 'What other medical problems does she have?',
        category: 'pmh',
        response: 'High blood pressure, mild kidney disease - her kidney function is around 45% - and osteoporosis.',
        educationalNote: 'Chronic kidney disease (CKD stage 3 with GFR 45%) is both a risk factor for UTI and a consideration for antibiotic dosing. CKD impairs immune function and urinary concentrating ability.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications does she take?',
        category: 'medications',
        response: 'Metformin 1000mg twice daily, lisinopril 20mg daily, amlodipine 5mg daily, calcium and vitamin D.',
        educationalNote: 'Metformin must be held in sepsis due to risk of lactic acidosis, especially with renal impairment. ACE inhibitors may need to be held if AKI develops.',
        isKeyFinding: true,
      },
      {
        id: 'meds-recent-abx',
        question: 'What antibiotic was she on recently?',
        category: 'medications',
        response: 'Daughter: "I think it was ciprofloxacin. She took it for a week."',
        educationalNote: 'Recent fluoroquinolone use suggests possible resistance to this class. Consider broader spectrum coverage or alternative agents when choosing empiric antibiotics.',
        isKeyFinding: true,
      },
      {
        id: 'allergies',
        question: 'Any medication allergies?',
        category: 'allergies',
        response: 'No known drug allergies.',
        educationalNote: 'Important to confirm before broad-spectrum antibiotic administration. Penicillin allergy would significantly alter empiric antibiotic selection.',
        isKeyFinding: false,
      },
      {
        id: 'baseline-mental',
        question: 'What is her baseline mental status?',
        category: 'pmh',
        response: 'Daughter: "She\'s usually sharp as a tack. Does crossword puzzles every day. This confusion is completely not like her."',
        educationalNote: 'Acute change from baseline mental status is highly significant, especially in the elderly. Confusion may be the only presenting sign of serious infection in older adults. This is also part of qSOFA scoring.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'General/Mental Status',
        findings: [
          {
            id: 'gen-appearance',
            exam: 'General appearance',
            finding: 'Ill-appearing elderly woman, drowsy but arousable. Has rigors/shivering. Appears dehydrated.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Ill appearance combined with altered mental status and rigors indicates serious systemic illness. Rigors suggest bacteremia.',
          },
          {
            id: 'mental-status',
            exam: 'Mental status exam',
            finding: 'Opens eyes to voice. Oriented to person only, not place or time. Cannot state the month or year. Speech is slow and tangential.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Acute encephalopathy is one of the qSOFA criteria and independently predicts poor outcomes in infection. Glasgow Coma Scale = 14 (E3V5M6). Altered mental status = qSOFA score of 1.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-heart',
            exam: 'Heart sounds',
            finding: 'Tachycardic, regular rhythm. No murmurs, rubs, or gallops.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Tachycardia is a compensatory response to hypotension and fever. Heart rate >90 is part of SIRS criteria. The regular rhythm helps exclude arrhythmia as cause of symptoms.',
          },
          {
            id: 'cv-perfusion',
            exam: 'Peripheral perfusion',
            finding: 'Extremities are warm. Capillary refill time is 3 seconds. Pulses are present but weak.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Warm extremities with hypotension = "warm shock" (early/distributive septic shock). As shock progresses, vasoconstriction leads to cool extremities ("cold shock"). Warm shock is vasodilatory; cold shock indicates cardiovascular decompensation.',
          },
          {
            id: 'cv-bp-repeat',
            exam: 'Repeat blood pressure',
            finding: 'MAP = 69 mmHg. Orthostatics: BP drops to 78/50 when head elevated.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'MAP <70 suggests inadequate perfusion pressure. Systolic BP <100 is a qSOFA criterion. The orthostatic drop confirms intravascular volume depletion. Target MAP in septic shock is ≥65 mmHg.',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-rate',
            exam: 'Respiratory effort',
            finding: 'Tachypneic at 24 breaths/min. Mild accessory muscle use. No respiratory distress.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Respiratory rate ≥22 is a qSOFA criterion. Tachypnea in sepsis can be due to metabolic acidosis (compensatory) or early ARDS. RR >20 is also a SIRS criterion.',
          },
          {
            id: 'resp-auscult',
            exam: 'Lung auscultation',
            finding: 'Clear to auscultation bilaterally. No wheezes, crackles, or rhonchi.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Clear lungs help rule out pneumonia as the infection source. In this case, the source is urinary, not pulmonary.',
          },
        ],
      },
      {
        system: 'Abdominal',
        findings: [
          {
            id: 'abd-inspection',
            exam: 'Abdominal inspection',
            finding: 'Soft, non-distended. No surgical scars.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'A soft, non-distended abdomen makes intra-abdominal catastrophe (perforation, obstruction) less likely.',
          },
          {
            id: 'abd-palpation',
            exam: 'Abdominal palpation',
            finding: 'Mild suprapubic tenderness. No rebound or guarding. No hepatosplenomegaly.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Suprapubic tenderness supports bladder involvement (cystitis). Absence of rebound/guarding makes peritonitis unlikely.',
          },
          {
            id: 'abd-cva',
            exam: 'Costovertebral angle tenderness',
            finding: 'Significant tenderness with percussion over the right CVA. Left side minimally tender.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'CVA tenderness strongly suggests pyelonephritis - the infection has ascended from the bladder to the kidney. Right-sided predominance localizes the infection.',
          },
        ],
      },
      {
        system: 'Skin',
        findings: [
          {
            id: 'skin-temp',
            exam: 'Skin temperature and turgor',
            finding: 'Skin is warm and dry. Decreased skin turgor with tenting over the sternum.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Warm skin reflects the vasodilatory state of early sepsis. Decreased turgor indicates dehydration. Together they suggest distributive shock with hypovolemia.',
          },
          {
            id: 'skin-color',
            exam: 'Skin color',
            finding: 'Flushed appearance. No rashes, petechiae, or mottling.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Flushing occurs with fever and vasodilation. Mottling would suggest poor perfusion. Petechiae would raise concern for meningococcemia or DIC.',
          },
        ],
      },
      {
        system: 'GU',
        findings: [
          {
            id: 'gu-catheter',
            exam: 'Bladder assessment',
            finding: 'Bladder palpable above pubic symphysis. Foley catheter placed - 50cc of cloudy, foul-smelling urine returned.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Distended bladder suggests urinary retention, a risk factor for UTI. Cloudy, malodorous urine strongly suggests infection. Small volume indicates dehydration and possible prerenal AKI.',
          },
        ],
      },
    ],

    availableLabs: [
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'WBC', value: '18.5', unit: 'K/µL', isAbnormal: true, flag: 'high' },
            { name: 'Neutrophils', value: '89', unit: '%', isAbnormal: true, flag: 'high' },
            { name: 'Bands', value: '8', unit: '%', isAbnormal: true, flag: 'high' },
            { name: 'Hemoglobin', value: '11.2', unit: 'g/dL', isAbnormal: false },
            { name: 'Platelets', value: '142', unit: 'K/µL', isAbnormal: true, flag: 'low' },
          ],
          interpretation: 'Leukocytosis with left shift (bandemia) indicates acute bacterial infection. Thrombocytopenia raises concern for early DIC or sepsis-induced consumptive coagulopathy.',
        },
        isAppropriate: true,
        educationalNote: 'WBC >12,000 or <4,000 or >10% bands are SIRS criteria. Left shift (increased immature neutrophils) reflects bone marrow response to infection. Thrombocytopenia in sepsis is an ominous sign.',
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Sodium', value: '134', unit: 'mEq/L', isAbnormal: true, flag: 'low' },
            { name: 'Potassium', value: '4.8', unit: 'mEq/L', isAbnormal: false },
            { name: 'Chloride', value: '98', unit: 'mEq/L', isAbnormal: false },
            { name: 'Bicarbonate', value: '18', unit: 'mEq/L', isAbnormal: true, flag: 'low' },
            { name: 'BUN', value: '42', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
            { name: 'Creatinine', value: '2.1', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
            { name: 'Glucose', value: '186', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Metabolic acidosis with elevated anion gap (18). Acute kidney injury (creatinine 2.1 from baseline 1.4). Hyperglycemia from stress response.',
        },
        isAppropriate: true,
        educationalNote: 'The low bicarbonate indicates metabolic acidosis, often lactic acidosis in sepsis. Anion gap = Na - (Cl + HCO3) = 18 (elevated). AKI is common in sepsis due to hypoperfusion and nephrotoxins.',
      },
      {
        id: 'lactate',
        name: 'Lactate Level',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Lactate', value: '4.2', unit: 'mmol/L', isAbnormal: true, flag: 'critical' },
          ],
          interpretation: 'Elevated lactate indicates tissue hypoperfusion. Level >2 defines severe sepsis; >4 is associated with significantly increased mortality.',
        },
        isAppropriate: true,
        educationalNote: 'Lactate >2 mmol/L is one of the Sepsis-3 criteria for septic shock (along with vasopressor requirement). Lactate >4 indicates severe tissue hypoperfusion and carries >30% mortality. Serial lactate clearance is prognostic.',
      },
      {
        id: 'procalcitonin',
        name: 'Procalcitonin',
        turnaroundTime: '45 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'Procalcitonin', value: '8.6', unit: 'ng/mL', isAbnormal: true, flag: 'critical' },
          ],
          interpretation: 'Markedly elevated, strongly suggestive of bacterial infection.',
        },
        isAppropriate: true,
        educationalNote: 'Procalcitonin is a biomarker that rises specifically in bacterial infections (not viral). Values >2 ng/mL strongly suggest bacterial sepsis. Can help guide antibiotic de-escalation when trending down.',
      },
      {
        id: 'ua',
        name: 'Urinalysis',
        turnaroundTime: '20 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Appearance', value: 'Cloudy', unit: '', isAbnormal: true },
            { name: 'Leukocyte esterase', value: '3+', unit: '', isAbnormal: true },
            { name: 'Nitrites', value: 'Positive', unit: '', isAbnormal: true },
            { name: 'WBC', value: '>100', unit: '/hpf', isAbnormal: true, flag: 'critical' },
            { name: 'Bacteria', value: 'Many', unit: '', isAbnormal: true },
          ],
          interpretation: 'Pyuria with bacteriuria consistent with urinary tract infection.',
        },
        isAppropriate: true,
        educationalNote: 'Positive leukocyte esterase and nitrites with pyuria confirms UTI. Nitrites indicate gram-negative bacteria (usually E. coli) that convert nitrates to nitrites. This is the definitive test for UTI source.',
      },
      {
        id: 'blood-cx',
        name: 'Blood Cultures x2',
        turnaroundTime: '24-48 hours',
        cost: 'medium',
        result: {
          values: [
            { name: 'Preliminary', value: 'Gram-negative rods (24h)', unit: '', isAbnormal: true },
            { name: 'Final ID', value: 'E. coli', unit: '', isAbnormal: true },
            { name: 'Ciprofloxacin', value: 'Resistant', unit: '', isAbnormal: true },
            { name: 'Ceftriaxone', value: 'Sensitive', unit: '', isAbnormal: false },
          ],
          interpretation: 'E. coli bacteremia. Fluoroquinolone-resistant, ceftriaxone-sensitive.',
        },
        isAppropriate: true,
        educationalNote: 'Blood cultures MUST be drawn before antibiotics whenever possible, but should not delay antibiotic administration more than a few minutes. Two sets from different sites increases yield. E. coli bacteremia from UTI (urosepsis) is common.',
      },
      {
        id: 'urine-cx',
        name: 'Urine Culture',
        turnaroundTime: '24-48 hours',
        cost: 'low',
        result: {
          values: [
            { name: 'Colony count', value: '>100,000', unit: 'CFU/mL', isAbnormal: true },
            { name: 'Organism', value: 'E. coli', unit: '', isAbnormal: true },
            { name: 'Ciprofloxacin', value: 'Resistant', unit: '', isAbnormal: true },
            { name: 'TMP-SMX', value: 'Sensitive', unit: '', isAbnormal: false },
          ],
          interpretation: 'E. coli UTI, fluoroquinolone-resistant.',
        },
        isAppropriate: true,
        educationalNote: 'Urine culture confirms the organism and guides antibiotic de-escalation. The ciprofloxacin resistance correlates with her recent fluoroquinolone use. >100,000 CFU/mL is significant bacteriuria.',
      },
      {
        id: 'coags',
        name: 'Coagulation Studies',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'PT', value: '14.8', unit: 'sec', isAbnormal: true, flag: 'high' },
            { name: 'INR', value: '1.3', unit: '', isAbnormal: true, flag: 'high' },
            { name: 'PTT', value: '38', unit: 'sec', isAbnormal: false },
            { name: 'Fibrinogen', value: '480', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Mildly elevated PT/INR. Fibrinogen elevated (acute phase reactant). No evidence of overt DIC.',
        },
        isAppropriate: true,
        educationalNote: 'Coagulopathy can develop in sepsis (DIC). Mild elevations are common. Elevated fibrinogen is an acute phase response. If PT/PTT rise with falling fibrinogen and falling platelets, suspect DIC.',
      },
      {
        id: 'abg',
        name: 'Arterial Blood Gas',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'pH', value: '7.32', unit: '', isAbnormal: true, flag: 'low' },
            { name: 'pCO2', value: '28', unit: 'mmHg', isAbnormal: true, flag: 'low' },
            { name: 'pO2', value: '72', unit: 'mmHg', isAbnormal: true, flag: 'low' },
            { name: 'HCO3', value: '16', unit: 'mEq/L', isAbnormal: true, flag: 'low' },
            { name: 'Base excess', value: '-8', unit: '', isAbnormal: true, flag: 'low' },
          ],
          interpretation: 'Partially compensated metabolic acidosis with mild hypoxemia.',
        },
        isAppropriate: true,
        educationalNote: 'The low pH with low bicarbonate and low pCO2 shows metabolic acidosis with respiratory compensation (hyperventilating to blow off CO2). This explains her tachypnea. The acidosis is likely lactic acidosis from tissue hypoperfusion.',
      },
    ],

    availableImaging: [
      {
        id: 'cxr',
        name: 'Chest X-ray',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          findings: 'No focal consolidation or infiltrate. Heart size normal. No pleural effusion.',
          impression: 'No acute cardiopulmonary process.',
          imageDescription: 'Portable AP chest X-ray showing clear lung fields without infiltrate or effusion.',
        },
        isAppropriate: true,
        educationalNote: 'CXR rules out pneumonia as the infection source. Important in any septic patient to identify source. Clear lungs support urinary source for this sepsis.',
      },
      {
        id: 'ct-abd',
        name: 'CT Abdomen/Pelvis with contrast',
        turnaroundTime: '1 hour',
        cost: 'high',
        result: {
          findings: 'Right kidney enlarged with perinephric fat stranding. No hydronephrosis or stones. No abscess seen. Bladder wall thickened. No other intra-abdominal pathology.',
          impression: 'Findings consistent with right-sided pyelonephritis. No abscess or obstruction.',
          imageDescription: 'CT showing enlarged right kidney with surrounding inflammatory changes but no fluid collection.',
        },
        isAppropriate: true,
        educationalNote: 'CT is not always necessary for uncomplicated UTI/pyelonephritis but is valuable in sepsis to rule out abscess or obstruction requiring source control. Absence of abscess means antibiotics alone should suffice.',
      },
    ],

    otherTests: [
      {
        id: 'ecg',
        name: '12-Lead ECG',
        turnaroundTime: '5 minutes',
        result: 'Sinus tachycardia at 112 bpm. Normal axis. No ST changes or T wave abnormalities.',
        isAppropriate: true,
        educationalNote: 'ECG rules out cardiac cause of hypotension (MI, arrhythmia). Sinus tachycardia is expected in sepsis as a compensatory mechanism.',
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial',
        name: 'Initial Recognition',
        description: 'An elderly woman presents with confusion and abnormal vital signs. You need to quickly recognize the syndrome.',
        availableDataIds: ['hpi-onset', 'hpi-urinary', 'mental-status', 'cv-perfusion'],
        nextDecisionPointId: 'sepsis-recognition',
      },
      {
        id: 'assessment',
        name: 'Sepsis Assessment',
        description: 'Determine the severity and calculate sepsis scores.',
        availableDataIds: ['lactate', 'bmp', 'cbc', 'ua'],
        nextDecisionPointId: 'severity-assessment',
      },
      {
        id: 'treatment',
        name: 'Initial Treatment',
        description: 'Initiate sepsis bundle within the golden hour.',
        availableDataIds: ['blood-cx', 'ct-abd'],
        nextDecisionPointId: 'bundle-treatment',
      },
    ],

    decisionPoints: [
      {
        id: 'sepsis-recognition',
        stageId: 'initial',
        question: 'Based on the presentation, what is your clinical impression?',
        context: 'A 78-year-old woman with altered mental status, fever (102.8°F), HR 112, BP 92/58, RR 24, and history of urinary symptoms.',
        options: [
          {
            id: 'sepsis-correct',
            text: 'Sepsis, likely from urinary source',
            consequence: 'You immediately mobilize the sepsis protocol',
            isCorrect: true,
            feedback: 'Correct! This patient meets qSOFA criteria (altered mental status, SBP <100, RR ≥22) in the setting of suspected infection. The urinary symptoms and CVA tenderness point to UTI/pyelonephritis as the source. This is sepsis until proven otherwise.',
            nextStageId: 'assessment',
          },
          {
            id: 'delirium',
            text: 'Delirium - needs workup',
            consequence: 'You order a delirium workup and watch the patient',
            isCorrect: false,
            feedback: 'While this is technically delirium (acute confusion), you must identify the underlying cause. The hypotension, fever, tachycardia, and tachypnea scream sepsis. Delirium workup can happen alongside sepsis treatment, but don\'t delay sepsis care.',
            nextStageId: 'assessment',
          },
          {
            id: 'uti-simple',
            text: 'Urinary tract infection - give oral antibiotics',
            consequence: 'You prescribe oral ciprofloxacin and plan outpatient follow-up',
            isCorrect: false,
            feedback: 'This is not a simple UTI! The patient is hypotensive, tachycardic, confused, and febrile. This is urosepsis requiring IV antibiotics, fluids, and likely ICU admission. Oral antibiotics would be dangerous undertreatment.',
            nextStageId: 'assessment',
          },
          {
            id: 'stroke',
            text: 'Possible stroke - activate stroke protocol',
            consequence: 'You call a stroke alert',
            isCorrect: false,
            feedback: 'While confusion can be a stroke presentation, this patient has systemic signs of infection (fever, tachycardia, hypotension) with localizing urinary symptoms. Stroke doesn\'t cause fever and hypotension. Think infection first.',
            nextStageId: 'assessment',
          },
        ],
        correctOptionId: 'sepsis-correct',
        educationalExplanation: 'Sepsis recognition requires identifying infection + organ dysfunction. This patient has clear infection source (UTI/pyelonephritis) with organ dysfunction (altered mental status, hypotension). qSOFA score = 3 (AMS + SBP<100 + RR≥22). Per Sepsis-3 definitions, this is sepsis with high probability of poor outcome.',
      },
      {
        id: 'severity-assessment',
        stageId: 'assessment',
        question: 'The lactate comes back at 4.2 mmol/L and MAP is 69 mmHg despite 30 mL/kg fluid bolus. What is the severity classification?',
        context: 'Lactate 4.2, MAP 69 after 2L crystalloid. BP still 94/62. Patient still altered.',
        options: [
          {
            id: 'septic-shock-correct',
            text: 'Septic shock - needs vasopressors',
            consequence: 'You initiate norepinephrine and prepare for ICU admission',
            isCorrect: true,
            feedback: 'Correct! Per Sepsis-3, septic shock = sepsis with (1) vasopressor requirement to maintain MAP ≥65 AND (2) lactate >2 despite adequate fluid resuscitation. This patient has persistent hypotension despite fluids plus lactate 4.2. This is septic shock.',
            nextStageId: 'treatment',
          },
          {
            id: 'severe-sepsis',
            text: 'Severe sepsis - continue fluids only',
            consequence: 'You give more fluids and reassess',
            isCorrect: false,
            feedback: 'The term "severe sepsis" was eliminated in Sepsis-3 definitions. More importantly, this patient has already received adequate fluids (30 mL/kg) without response. Persistent hypotension despite fluids = septic shock requiring vasopressors.',
            nextStageId: 'treatment',
          },
          {
            id: 'sepsis-only',
            text: 'Sepsis without shock - monitor closely',
            consequence: 'You continue current treatment and monitor',
            isCorrect: false,
            feedback: 'With MAP <65, lactate >2, and inadequate response to fluids, this patient is in septic shock. Delaying vasopressors risks worsening tissue hypoperfusion. Every hour of delayed vasopressor initiation increases mortality.',
            nextStageId: 'treatment',
          },
        ],
        correctOptionId: 'septic-shock-correct',
        educationalExplanation: 'Sepsis-3 definitions: Sepsis = suspected infection + organ dysfunction (SOFA score ≥2). Septic Shock = sepsis + vasopressor requirement for MAP ≥65 + lactate >2 despite adequate resuscitation. Septic shock carries approximately 40% mortality.',
      },
      {
        id: 'bundle-treatment',
        stageId: 'treatment',
        question: 'You\'re initiating the sepsis bundle. She was recently on ciprofloxacin. What is the most appropriate empiric antibiotic choice?',
        context: 'Recent ciprofloxacin use for UTI. No known allergies. Creatinine 2.1.',
        options: [
          {
            id: 'ceftriaxone-correct',
            text: 'Ceftriaxone 2g IV (or piperacillin-tazobactam)',
            consequence: 'You administer ceftriaxone within 30 minutes of recognition',
            isCorrect: true,
            feedback: 'Correct! Given recent fluoroquinolone use, fluoroquinolone resistance is likely. Ceftriaxone or pip-tazo provide good gram-negative coverage including common uropathogens. Ceftriaxone is renally dosed and appropriate here. Key: broad-spectrum, IV, within 1 hour.',
            nextStageId: undefined,
          },
          {
            id: 'cipro-iv',
            text: 'Ciprofloxacin IV',
            consequence: 'You give IV ciprofloxacin',
            isCorrect: false,
            feedback: 'She was just on ciprofloxacin and failed/relapsed. The organism is likely fluoroquinolone-resistant (later confirmed). Using the same antibiotic class is inappropriate. Her prior antibiotic exposure should guide empiric choice.',
            nextStageId: undefined,
          },
          {
            id: 'oral-abx',
            text: 'Trimethoprim-sulfamethoxazole oral',
            consequence: 'You prescribe oral TMP-SMX',
            isCorrect: false,
            feedback: 'Septic shock requires IV antibiotics! Oral antibiotics have unreliable absorption in shock states due to gut hypoperfusion. This patient needs high-dose IV antibiotics immediately.',
            nextStageId: undefined,
          },
          {
            id: 'wait-cultures',
            text: 'Wait for culture results before starting antibiotics',
            consequence: 'You hold antibiotics pending cultures',
            isCorrect: false,
            feedback: 'NEVER delay antibiotics to wait for cultures in sepsis! Each hour of delayed antibiotics increases mortality by 7-8%. Draw cultures, then give antibiotics immediately. Don\'t wait for results to start treatment.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'ceftriaxone-correct',
        educationalExplanation: 'The sepsis 1-hour bundle includes: (1) Lactate measurement, (2) Blood cultures before antibiotics, (3) Broad-spectrum antibiotics within 1 hour, (4) 30 mL/kg crystalloid for hypotension or lactate ≥4, (5) Vasopressors if hypotensive despite fluids. Antibiotic choice should be broad-spectrum and account for likely pathogens and resistance patterns.',
      },
    ],

    paths: [
      {
        id: 'optimal',
        name: 'Optimal Sepsis Management',
        description: 'Rapid recognition, immediate sepsis bundle initiation, ICU admission',
        stageSequence: ['initial', 'assessment', 'treatment'],
        outcome: 'optimal',
      },
      {
        id: 'delayed',
        name: 'Delayed Recognition',
        description: 'Sepsis not immediately recognized, treatment delayed',
        stageSequence: ['initial', 'assessment', 'treatment'],
        outcome: 'suboptimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Septic Shock Secondary to Pyelonephritis (Urosepsis)',
      icdCode: 'R65.21',
      explanation: 'Life-threatening organ dysfunction caused by a dysregulated host response to urinary tract infection that has ascended to the kidney and bloodstream.',
      pathophysiology: 'E. coli from the bladder ascended to the right kidney causing pyelonephritis. Bacteria entered the bloodstream (bacteremia), triggering a systemic inflammatory response with widespread endothelial activation, cytokine storm, vasodilation, capillary leak, and microcirculatory failure. This resulted in tissue hypoperfusion (elevated lactate) and organ dysfunction (AKI, encephalopathy).',
      epidemiology: 'Sepsis affects 1.7 million adults in the US annually with 270,000 deaths. UTI is the source in 20-30% of sepsis cases. Elderly women with diabetes and recurrent UTIs are at particularly high risk. Mortality from septic shock is 30-50%.',
      prognosis: 'With early recognition and aggressive treatment, most urosepsis patients survive. However, delays in antibiotic administration and fluid resuscitation significantly increase mortality. Each hour of delayed antibiotics increases death risk by 7-8%.',
    },

    diagnosticReasoning: 'This case illustrates sepsis in an elderly patient with a classic presentation of confusion as the primary complaint. The diagnostic reasoning follows: (1) Elderly woman with acute confusion - think infection until proven otherwise; (2) Vital signs show SIRS criteria + hypotension suggesting sepsis/septic shock; (3) Urinary symptoms and CVA tenderness localize the source to pyelonephritis; (4) qSOFA score = 3 confirms high-risk sepsis; (5) Lactate >2 plus need for vasopressors defines septic shock per Sepsis-3; (6) Cultures confirm E. coli bacteremia from urinary source.',

    keyFindings: [
      'Acute confusion in an elderly patient (may be only presenting symptom of sepsis)',
      'qSOFA criteria: AMS, SBP <100, RR ≥22 - all three present',
      'CVA tenderness localizing to pyelonephritis',
      'Positive urinalysis with pyuria and bacteriuria',
      'Lactate 4.2 mmol/L indicating tissue hypoperfusion',
      'Hypotension despite 30 mL/kg fluid resuscitation requiring vasopressors',
      'E. coli bacteremia with fluoroquinolone resistance',
    ],

    treatment: {
      immediate: 'IV access x2, 30 mL/kg crystalloid bolus, blood cultures, broad-spectrum antibiotics within 1 hour, Foley catheter, lactate measurement, norepinephrine for MAP goal ≥65',
      medications: [
        {
          name: 'Ceftriaxone',
          dose: '2g',
          route: 'IV',
          frequency: 'once daily',
          rationale: 'Broad-spectrum coverage of gram-negative uropathogens including E. coli. Chosen over fluoroquinolones due to recent exposure and likely resistance.',
        },
        {
          name: 'Norepinephrine',
          dose: 'Start 0.1 mcg/kg/min, titrate to MAP ≥65',
          route: 'IV continuous infusion',
          frequency: 'continuous',
          rationale: 'First-line vasopressor in septic shock. Provides both alpha (vasoconstriction) and beta (inotropy) effects.',
        },
        {
          name: 'Lactated Ringer\'s solution',
          dose: '30 mL/kg bolus (approximately 2 liters)',
          route: 'IV',
          frequency: 'bolus, then reassess',
          rationale: 'Initial fluid resuscitation. Balanced crystalloid preferred over normal saline to avoid hyperchloremic acidosis.',
        },
        {
          name: 'Hydrocortisone',
          dose: '200mg/day',
          route: 'IV continuous infusion or 50mg q6h',
          frequency: 'daily',
          rationale: 'Consider in refractory septic shock (still hypotensive despite norepinephrine). Addresses relative adrenal insufficiency.',
        },
      ],
      procedures: 'Central venous access for vasopressor administration, arterial line for continuous BP monitoring. No surgical source control needed as imaging showed no abscess.',
      monitoring: 'ICU admission. Continuous telemetry and arterial BP monitoring. Serial lactate q4-6h until normalizing. Urine output goal ≥0.5 mL/kg/hr. Daily labs: BMP, CBC, lactate. Watch for complications: ARDS, AKI progression, DIC.',
      patientEducation: [
        'You have a serious infection in your blood that started as a kidney infection',
        'We are giving you strong antibiotics through the IV and medication to support your blood pressure',
        'The ICU doctors will monitor you closely for the next several days',
        'Once stable, we will switch to oral antibiotics to complete treatment',
        'To prevent future infections: stay hydrated, don\'t delay urination, consider prophylaxis for recurrent UTIs',
      ],
    },

    outcome: 'Sepsis protocol initiated within 20 minutes of arrival. Blood cultures drawn, ceftriaxone administered within 45 minutes. After 2L crystalloid, BP remained 92/60; norepinephrine started achieving MAP 68. Patient admitted to ICU. By hospital day 2, vasopressors weaned off, lactate normalized to 1.4. Mental status returned to baseline by day 3. Blood cultures grew E. coli (fluoroquinolone-resistant, ceftriaxone-sensitive). Transitioned to oral TMP-SMX to complete 14-day course for complicated pyelonephritis. AKI resolved (creatinine returned to baseline 1.4). Discharged day 5 with urology follow-up.',

    followUp: 'Follow-up with PCP in 1 week. Urology referral for recurrent UTIs and possible prophylaxis. Repeat urinalysis 1-2 weeks after completing antibiotics to confirm clearance. Optimize diabetes control. Review medications - hold metformin until AKI resolved, reassess need for ACE inhibitor.',
  },

  teachingPoints: [
    {
      topic: 'qSOFA: Quick Sepsis Assessment',
      content: 'qSOFA is a bedside screening tool: Altered mental status (GCS <15), Respiratory rate ≥22, Systolic BP ≤100. Score ≥2 identifies patients at high risk of poor outcomes and should prompt consideration of sepsis. It replaced SIRS for bedside screening in Sepsis-3.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'The Golden Hour',
      content: 'The first hour of sepsis recognition is critical. The "1-hour bundle" includes: lactate, blood cultures, broad-spectrum antibiotics, 30 mL/kg crystalloid if hypotensive or lactate ≥4, vasopressors if hypotensive despite fluids. Every hour of antibiotic delay increases mortality 7-8%.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Sepsis-3 Definitions',
      content: 'Sepsis = suspected infection + organ dysfunction (SOFA ≥2). Septic Shock = sepsis + vasopressor requirement for MAP ≥65 + lactate >2 despite adequate resuscitation. "Severe sepsis" is no longer used. Septic shock has approximately 40% mortality.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Lactate as Prognostic Marker',
      content: 'Lactate reflects tissue hypoperfusion. Level >2 suggests inadequate oxygen delivery. Level >4 indicates severe hypoperfusion with >30% mortality. Serial lactate clearance (>10-20% decrease in 6 hours) is associated with improved outcomes and guides resuscitation adequacy.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'Elderly Sepsis Presentation',
      content: 'Elderly patients often present atypically: confusion may be the only symptom. They may not mount a fever (hypothermia can occur). Tachycardia may be blunted by medications (beta-blockers). Have a low threshold to consider sepsis in any elderly patient with acute change in mental status.',
      category: 'clinical-pearl',
      importance: 'important',
    },
    {
      topic: 'Source Control',
      content: 'Antibiotics alone may not cure sepsis if there is an undrained collection or obstructed system. Common source control interventions: drain abscess, remove infected catheter/device, relieve obstruction, debride necrotic tissue. Always image to evaluate for collections requiring intervention.',
      category: 'treatment',
      importance: 'important',
    },
    {
      topic: 'Antibiotic Selection in Sepsis',
      content: 'Empiric antibiotics should be broad-spectrum covering likely pathogens. Consider: site of infection, local resistance patterns, recent antibiotic exposure, healthcare-associated risk factors. De-escalate once cultures return. Wrong initial antibiotic choice significantly increases mortality.',
      category: 'treatment',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Not recognizing confusion as a manifestation of sepsis in the elderly',
    'Waiting for culture results before starting antibiotics',
    'Using the same antibiotic class that recently failed',
    'Giving inadequate fluid resuscitation (<30 mL/kg)',
    'Delaying vasopressors when patient remains hypotensive despite fluids',
    'Not measuring lactate - missing the severity of illness',
    'Forgetting to hold metformin in setting of AKI and sepsis',
    'Not imaging to rule out abscess requiring drainage',
  ],

  relatedCases: [
    'sepsis-pneumonia',
    'sepsis-skin',
    'meningitis',
    'endocarditis',
    'cholangitis',
  ],
};

// ============================================
// Case: Acute Decompensated Heart Failure
// ============================================

const HEART_FAILURE_CASE: ClinicalCase = {
  id: 'chf-acute',
  title: 'The Breathless Night',
  category: 'cardiology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the classic presentation of acute decompensated heart failure',
    'Understand the role of BNP/NT-proBNP in diagnosing and monitoring heart failure',
    'Learn to assess volume status through physical examination (JVD, edema, rales)',
    'Appreciate the difference between HFrEF and HFpEF and their management implications',
    'Understand diuretic management and goals of decongestion therapy',
    'Identify precipitating factors for heart failure exacerbations',
  ],

  presentation: {
    chiefComplaint: 'Shortness of breath',
    demographics: {
      age: 68,
      sex: 'male',
      occupation: 'retired postal worker',
      context: 'presents to the emergency department at 3 AM with severe shortness of breath',
    },
    openingParagraph: `Mr. Williams is a 68-year-old retired postal worker who presents to the ED at 3 AM with severe shortness of breath that woke him from sleep. He reports that he had to sit up to catch his breath and eventually moved to his recliner, where he felt slightly better. His wife notes that he has been more fatigued than usual over the past two weeks and his ankles have been swelling. He admits he ran out of his "water pill" about a week ago and hasn't been as careful with his salt intake over the holidays.`,
    generalAppearance: 'Elderly man sitting upright on the stretcher, unable to lie flat. Speaking in short sentences due to breathlessness. Using accessory muscles to breathe. Appears anxious and fatigued.',
    vitalSigns: {
      temperature: '98.2°F (36.8°C)',
      heartRate: '104 bpm, irregular',
      bloodPressure: '162/94 mmHg',
      respiratoryRate: '28/min',
      oxygenSaturation: '88% on room air',
      interpretation: 'Tachycardic with irregular rhythm (likely atrial fibrillation), hypertensive, tachypneic with significant hypoxia. These findings indicate acute respiratory distress with volume overload.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When did the breathing trouble start?',
        category: 'hpi',
        response: 'I\'ve been getting winded more easily for the past two weeks, but tonight was different. I woke up around 2 AM feeling like I was drowning. I couldn\'t catch my breath lying down.',
        educationalNote: 'Paroxysmal nocturnal dyspnea (PND) - waking from sleep with severe dyspnea - is a hallmark of heart failure. It occurs because recumbent position increases venous return, overwhelming an already failing heart.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-orthopnea',
        question: 'How many pillows do you use to sleep?',
        category: 'hpi',
        response: 'I normally use two pillows, but this past week I\'ve needed three or four. Some nights I\'ve just slept in my recliner because I couldn\'t breathe lying down.',
        educationalNote: 'Orthopnea (dyspnea when lying flat) is quantified by "pillow count" - a higher number indicates more severe heart failure. Orthopnea reflects increased pulmonary venous congestion when supine.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-swelling',
        question: 'Have you noticed any swelling?',
        category: 'hpi',
        response: 'My ankles have been swelling for about two weeks. My shoes don\'t fit anymore. My wife said even my face looks puffy.',
        educationalNote: 'Peripheral edema in heart failure reflects systemic venous congestion. Lower extremity edema is common due to gravity. Weight gain from fluid retention often precedes obvious edema.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-weight',
        question: 'Have you noticed any weight change?',
        category: 'hpi',
        response: 'I stepped on the scale yesterday and I\'m up about 12 pounds from my usual weight. That seems like a lot for two weeks.',
        educationalNote: 'Weight gain of 2-3+ pounds in a few days is a red flag for fluid retention. Patients with heart failure should weigh themselves daily and report rapid gains.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-precipitant',
        question: 'Any changes in your medications or diet recently?',
        category: 'hpi',
        response: 'I ran out of my furosemide about a week ago and didn\'t get it refilled. And honestly, with the holidays, I ate a lot more ham and other salty foods than usual.',
        educationalNote: 'Medication non-compliance and dietary indiscretion (excess sodium) are among the most common precipitants of acute heart failure exacerbation. Other triggers include infections, arrhythmias, and ischemia.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-cardiac',
        question: 'Do you have a history of heart problems?',
        category: 'pmh',
        response: 'I had a heart attack about 5 years ago. They put in a stent. My cardiologist said my heart was weak after that - I think he said my "ejection fraction" was about 35%.',
        educationalNote: 'Ischemic cardiomyopathy (heart failure from prior MI) is the most common cause of HFrEF. An EF of 35% is significantly reduced (normal >55%). This puts him at risk for decompensation and arrhythmias.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-afib',
        question: 'Any irregular heart rhythms?',
        category: 'pmh',
        response: 'Yes, I have atrial fibrillation. They tried to shock it back a few times but it always comes back. I take medicine to keep my heart rate down.',
        educationalNote: 'Atrial fibrillation is common in heart failure and the two conditions worsen each other. A-fib with rapid ventricular response is a common precipitant of HF exacerbation.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-other',
        question: 'Any other medical conditions?',
        category: 'pmh',
        response: 'I have high blood pressure, diabetes, and high cholesterol. I also have some kidney problems - not on dialysis, but my doctor watches it closely.',
        educationalNote: 'Hypertension, diabetes, and CKD are all risk factors for heart failure and complicate management. CKD affects diuretic dosing and response.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications do you normally take?',
        category: 'medications',
        response: 'Lisinopril, carvedilol, furosemide - that\'s the one I ran out of - spironolactone, atorvastatin, metformin, and apixaban for my irregular heartbeat.',
        educationalNote: 'This is excellent guideline-directed medical therapy for HFrEF: ACE-I (lisinopril), beta-blocker (carvedilol), loop diuretic (furosemide), mineralocorticoid receptor antagonist (spironolactone). He missed his diuretic.',
        isKeyFinding: true,
      },
      {
        id: 'allergies',
        question: 'Any allergies?',
        category: 'allergies',
        response: 'I\'m allergic to penicillin - gives me a rash.',
        educationalNote: 'Important to document before administering any medications.',
        isKeyFinding: false,
      },
      {
        id: 'sh-smoking',
        question: 'Do you smoke or drink?',
        category: 'social',
        response: 'I quit smoking after my heart attack - smoked for 40 years before that. I have a beer occasionally but not much.',
        educationalNote: 'Prior smoking is a major risk factor for both CAD and heart failure. Alcohol can directly cause cardiomyopathy and worsen heart failure.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-jvd',
            exam: 'Jugular venous distension',
            finding: 'JVP markedly elevated at 14 cm H2O (patient at 45 degrees). Positive hepatojugular reflux.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Elevated JVP is the best indicator of elevated right-sided filling pressures. Normal is <8 cm H2O. Hepatojugular reflux (JVP rises >4 cm with abdominal pressure for 15 seconds) indicates volume overload.',
          },
          {
            id: 'cv-heart-sounds',
            exam: 'Heart auscultation',
            finding: 'Irregularly irregular rhythm. S1, S2 present. Prominent S3 gallop. Grade 2/6 holosystolic murmur at apex radiating to axilla.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'S3 gallop ("Kentucky" = S1-S2-S3) indicates volume overload and poor ventricular compliance - pathognomonic for heart failure. The murmur is consistent with mitral regurgitation, common in dilated cardiomyopathy.',
          },
          {
            id: 'cv-pmi',
            exam: 'Point of maximal impulse',
            finding: 'PMI displaced laterally to the anterior axillary line, diffuse.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Laterally displaced PMI indicates cardiomegaly with dilated left ventricle. Normal PMI is at the midclavicular line, 5th intercostal space.',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-lungs',
            exam: 'Lung auscultation',
            finding: 'Bilateral crackles (rales) extending to mid-lung fields. No wheezing. Decreased breath sounds at both bases.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Bilateral crackles (rales) indicate pulmonary edema from elevated left atrial pressure. The crackles are caused by fluid in the alveoli and small airways. Height of rales correlates with severity.',
          },
          {
            id: 'resp-effort',
            exam: 'Work of breathing',
            finding: 'Using accessory muscles (sternocleidomastoid, intercostals). Tripod positioning. Speaking in 2-3 word sentences.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Increased work of breathing and inability to speak in full sentences indicate respiratory distress. This patient needs urgent intervention.',
          },
        ],
      },
      {
        system: 'Extremities',
        findings: [
          {
            id: 'ext-edema',
            exam: 'Lower extremity examination',
            finding: 'Bilateral pitting edema to the mid-thighs. 3+ pitting (pit depth 6mm, rebounds in 30 seconds).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Pitting edema is graded 1+ to 4+ based on depth and rebound time. 3+ edema extending to thighs indicates significant systemic fluid overload.',
          },
          {
            id: 'ext-temp',
            exam: 'Extremity perfusion',
            finding: 'Extremities are warm. Capillary refill is 3 seconds.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Warm extremities indicate preserved cardiac output (this is "warm and wet" heart failure). Cold extremities would suggest low output ("cold and wet") and more severe decompensation.',
          },
        ],
      },
      {
        system: 'Abdomen',
        findings: [
          {
            id: 'abd-liver',
            exam: 'Liver examination',
            finding: 'Liver palpable 4 cm below the right costal margin. Mildly tender to palpation.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Hepatomegaly and hepatic tenderness indicate hepatic congestion from elevated right-sided pressures. This is called "congestive hepatopathy."',
          },
          {
            id: 'abd-ascites',
            exam: 'Ascites assessment',
            finding: 'Positive fluid wave. Shifting dullness present.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Ascites can occur in severe right-sided heart failure due to increased portal venous pressure and hepatic congestion.',
          },
        ],
      },
    ],

    availableLabs: [
      {
        id: 'bnp',
        name: 'BNP (B-type Natriuretic Peptide)',
        turnaroundTime: '30 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'BNP', value: '1,842', unit: 'pg/mL', isAbnormal: true, flag: 'critical' },
          ],
          interpretation: 'Markedly elevated. BNP >400 pg/mL is highly suggestive of heart failure. This level indicates severe decompensation.',
        },
        isAppropriate: true,
        educationalNote: 'BNP is secreted by ventricles in response to wall stretch/pressure. It\'s the key biomarker for diagnosing and monitoring heart failure. Levels correlate with severity and prognosis. BNP <100 essentially rules out heart failure.',
      },
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'WBC', value: '7.8', unit: 'K/uL', isAbnormal: false },
            { name: 'Hemoglobin', value: '11.2', unit: 'g/dL', isAbnormal: true, flag: 'low' },
            { name: 'Hematocrit', value: '34', unit: '%', isAbnormal: true, flag: 'low' },
            { name: 'Platelets', value: '198', unit: 'K/uL', isAbnormal: false },
          ],
          interpretation: 'Mild anemia. No evidence of infection. Anemia is common in heart failure and can exacerbate symptoms.',
        },
        isAppropriate: true,
        educationalNote: 'Anemia is present in ~30% of heart failure patients and worsens outcomes. Can be due to chronic disease, cardiorenal syndrome, hemodilution, or iron deficiency.',
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Sodium', value: '132', unit: 'mEq/L', isAbnormal: true, flag: 'low' },
            { name: 'Potassium', value: '4.8', unit: 'mEq/L', isAbnormal: false },
            { name: 'Chloride', value: '96', unit: 'mEq/L', isAbnormal: true, flag: 'low' },
            { name: 'CO2', value: '26', unit: 'mEq/L', isAbnormal: false },
            { name: 'BUN', value: '42', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
            { name: 'Creatinine', value: '1.8', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
            { name: 'Glucose', value: '156', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Hyponatremia (dilutional from volume overload). Elevated BUN and creatinine indicate cardiorenal syndrome. BUN/Cr ratio >20 suggests prerenal component.',
        },
        isAppropriate: true,
        educationalNote: 'Hyponatremia in heart failure is dilutional and indicates more severe disease (worse prognosis). Elevated creatinine may be baseline CKD or cardiorenal syndrome from poor forward flow.',
      },
      {
        id: 'troponin',
        name: 'Troponin I',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Troponin I', value: '0.08', unit: 'ng/mL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Mildly elevated. This is consistent with demand ischemia (type 2 MI) from heart failure rather than acute coronary syndrome.',
        },
        isAppropriate: true,
        educationalNote: 'Mild troponin elevation is common in acute heart failure (up to 50% of patients) and indicates subendocardial ischemia from elevated wall stress, not necessarily ACS. Very high troponin warrants evaluation for ACS as the precipitant.',
      },
      {
        id: 'liver',
        name: 'Hepatic Function Panel',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'AST', value: '58', unit: 'U/L', isAbnormal: true, flag: 'high' },
            { name: 'ALT', value: '52', unit: 'U/L', isAbnormal: true, flag: 'high' },
            { name: 'Albumin', value: '3.2', unit: 'g/dL', isAbnormal: true, flag: 'low' },
            { name: 'Total Bilirubin', value: '1.8', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Mildly elevated transaminases and bilirubin consistent with hepatic congestion. Low albumin contributes to peripheral edema.',
        },
        isAppropriate: true,
        educationalNote: 'Congestive hepatopathy causes elevated transaminases (usually 2-3x normal) and bilirubin. In severe cases, "cardiac cirrhosis" can develop.',
      },
      {
        id: 'tsh',
        name: 'Thyroid Stimulating Hormone',
        turnaroundTime: '2 hours',
        cost: 'medium',
        result: {
          values: [
            { name: 'TSH', value: '2.4', unit: 'mIU/L', isAbnormal: false },
          ],
          interpretation: 'Normal. Rules out thyroid disease as a precipitant.',
        },
        isAppropriate: true,
        educationalNote: 'Hyperthyroidism can cause high-output heart failure; hypothyroidism can worsen existing heart failure. TSH should be checked in new heart failure diagnoses.',
      },
    ],

    availableImaging: [
      {
        id: 'cxr',
        name: 'Chest X-ray',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          findings: 'Cardiomegaly with cardiothoracic ratio 0.62. Cephalization of pulmonary vasculature. Bilateral interstitial and alveolar edema with Kerley B lines. Small bilateral pleural effusions.',
          impression: 'Radiographic findings consistent with acute pulmonary edema and cardiomegaly.',
          imageDescription: 'PA chest radiograph showing enlarged cardiac silhouette, vascular redistribution, bilateral hazy opacities consistent with pulmonary edema, and blunting of costophrenic angles from pleural effusions.',
        },
        isAppropriate: true,
        educationalNote: 'Classic CXR findings in heart failure: cardiomegaly, cephalization (upper lobe vessels more prominent than lower), Kerley B lines (interstitial edema), "bat wing" alveolar edema, pleural effusions. CXR can lag behind clinical improvement.',
      },
      {
        id: 'echo',
        name: 'Transthoracic Echocardiogram',
        turnaroundTime: '60 minutes',
        cost: 'medium',
        result: {
          findings: 'Dilated left ventricle (LVEDd 6.4 cm). Severely reduced LV systolic function with EF 25% (down from 35% prior). Global hypokinesis with regional variation (anterior wall akinesis). Moderate mitral regurgitation. Dilated left atrium. Elevated estimated PASP (50 mmHg). Dilated IVC without respiratory variation.',
          impression: 'Severe systolic heart failure (HFrEF) with decreased EF compared to prior. Moderate MR. Signs of elevated filling pressures.',
          imageDescription: 'Echocardiogram showing dilated, globally hypokinetic left ventricle with EF 25%. Color Doppler showing moderate central mitral regurgitation.',
        },
        isAppropriate: true,
        educationalNote: 'Echo is essential for classifying heart failure: HFrEF (EF ≤40%), HFmrEF (EF 41-49%), HFpEF (EF ≥50%). Also identifies cause (ischemic vs non-ischemic), valve disease, and hemodynamic severity. IVC dilation without collapse confirms high right atrial pressure.',
      },
    ],

    otherTests: [
      {
        id: 'ecg',
        name: '12-Lead ECG',
        turnaroundTime: '5 minutes',
        result: 'Atrial fibrillation with ventricular rate 108 bpm. Left axis deviation. Poor R-wave progression V1-V4 (consistent with prior anterior MI). QRS 118 ms. QTc 460 ms. ST depressions V4-V6 and I, aVL (likely demand ischemia).',
        isAppropriate: true,
        educationalNote: 'ECG helps identify precipitants (new arrhythmia, ischemia) and provides information about underlying disease. Q waves or poor R-wave progression suggest prior MI. AF can both cause and result from heart failure.',
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial',
        name: 'Initial Assessment',
        description: 'Elderly man presents with severe dyspnea. He appears in respiratory distress.',
        availableDataIds: ['hpi-onset', 'hpi-orthopnea', 'hpi-swelling', 'vitals'],
        nextDecisionPointId: 'initial-management',
      },
      {
        id: 'stabilization',
        name: 'Initial Stabilization',
        description: 'Patient needs immediate respiratory support while you gather more information.',
        availableDataIds: ['pmh-cardiac', 'pmh-afib', 'meds-list', 'cv-jvd', 'resp-lungs'],
        nextDecisionPointId: 'diagnostic-workup',
      },
      {
        id: 'diagnosis',
        name: 'Diagnostic Confirmation',
        description: 'Confirm the diagnosis and assess severity.',
        availableDataIds: ['bnp', 'bmp', 'ecg', 'cxr', 'echo'],
        nextDecisionPointId: 'treatment-plan',
      },
    ],

    decisionPoints: [
      {
        id: 'initial-management',
        stageId: 'initial',
        question: 'What is your immediate first action for this patient in respiratory distress?',
        context: 'A 68-year-old man in obvious respiratory distress, hypoxic to 88%, tachypneic, unable to lie flat.',
        options: [
          {
            id: 'oxygen-positioning',
            text: 'Supplemental oxygen and sit patient upright',
            consequence: 'Patient placed on high-flow nasal cannula, positioned upright. O2 sat improves to 94%.',
            isCorrect: true,
            feedback: 'Correct! Immediate priorities are oxygen supplementation and positioning. Sitting upright reduces venous return and pulmonary congestion. High-flow oxygen supports oxygenation while you assess further.',
            nextStageId: 'stabilization',
          },
          {
            id: 'intubation',
            text: 'Immediate intubation',
            consequence: 'You prepare for intubation.',
            isCorrect: false,
            feedback: 'While intubation may ultimately be needed, this patient is alert and responding. Try non-invasive support first. Many patients with acute pulmonary edema can be managed with oxygen, positioning, and diuretics without intubation.',
            nextStageId: 'stabilization',
          },
          {
            id: 'detailed-history',
            text: 'Obtain detailed history before any intervention',
            consequence: 'You begin a comprehensive history. Patient struggles to answer while short of breath.',
            isCorrect: false,
            feedback: 'This patient is in respiratory distress - stabilize first, then gather history. A focused history can be obtained while initiating treatment.',
            nextStageId: 'stabilization',
          },
          {
            id: 'iv-fluids',
            text: 'Start IV fluids to support blood pressure',
            consequence: 'You order IV normal saline bolus.',
            isCorrect: false,
            feedback: 'This would be harmful! This patient is fluid overloaded - giving more fluids will worsen pulmonary edema. IV access is needed, but for diuretics, not fluid bolus.',
            nextStageId: 'stabilization',
          },
        ],
        correctOptionId: 'oxygen-positioning',
        educationalExplanation: 'Acute pulmonary edema requires immediate supportive care: supplemental oxygen, upright positioning (reduces preload), and IV access. "LMNOP" mnemonic: Lasix (diuretics), Morphine (if severe), Nitrates (if hypertensive), Oxygen, Position (upright).',
      },
      {
        id: 'diagnostic-workup',
        stageId: 'stabilization',
        question: 'Physical exam reveals JVD, S3 gallop, bilateral crackles, and leg edema. What is the MOST useful initial diagnostic test?',
        context: 'Exam suggests volume overload. Patient has history of prior MI and reduced EF. Stopped his diuretic.',
        options: [
          {
            id: 'bnp-test',
            text: 'BNP (B-type Natriuretic Peptide)',
            consequence: 'BNP returns at 1,842 pg/mL (markedly elevated).',
            isCorrect: true,
            feedback: 'Correct! BNP is the key biomarker for confirming heart failure. While this patient\'s clinical presentation is classic, BNP helps quantify severity and can distinguish cardiac from non-cardiac dyspnea. BNP >400 pg/mL strongly supports heart failure.',
            nextStageId: 'diagnosis',
          },
          {
            id: 'ct-chest',
            text: 'CT chest with contrast to rule out PE',
            consequence: 'CT ordered. Results pending.',
            isCorrect: false,
            feedback: 'While PE is in the differential for dyspnea, this patient has classic findings of heart failure (orthopnea, PND, edema, JVD, S3, rales) with a known history of reduced EF. CT-PE would be appropriate if the presentation were atypical.',
            nextStageId: 'diagnosis',
          },
          {
            id: 'cardiac-cath',
            text: 'Urgent cardiac catheterization',
            consequence: 'You call the cath lab.',
            isCorrect: false,
            feedback: 'Cardiac catheterization is not indicated emergently here. There\'s no clear STEMI on ECG, and this appears to be decompensated heart failure from medication non-compliance, not acute coronary syndrome.',
            nextStageId: 'diagnosis',
          },
          {
            id: 'd-dimer',
            text: 'D-dimer to rule out PE',
            consequence: 'D-dimer returns elevated at 850 ng/mL.',
            isCorrect: false,
            feedback: 'D-dimer is often elevated in heart failure due to chronic low-grade activation of coagulation. An elevated D-dimer in this context does not necessarily indicate PE. The clinical picture strongly suggests heart failure.',
            nextStageId: 'diagnosis',
          },
        ],
        correctOptionId: 'bnp-test',
        educationalExplanation: 'BNP is secreted by ventricular myocytes in response to wall stretch. It\'s highly sensitive and specific for heart failure when combined with clinical findings. BNP <100 pg/mL essentially rules out HF; >400 pg/mL makes it likely. In the "gray zone" (100-400), clinical judgment is needed. NT-proBNP is an alternative with different cutoffs.',
      },
      {
        id: 'treatment-plan',
        stageId: 'diagnosis',
        question: 'BNP is markedly elevated, CXR shows pulmonary edema, and echo confirms EF 25%. What is the cornerstone of treatment?',
        context: 'Confirmed acute decompensated heart failure in a patient with HFrEF who stopped his diuretic.',
        options: [
          {
            id: 'iv-diuretics',
            text: 'IV loop diuretics (furosemide)',
            consequence: 'Furosemide 80mg IV given. Patient begins making urine within 30 minutes.',
            isCorrect: true,
            feedback: 'Correct! IV loop diuretics are the mainstay of treatment for acute decompensated heart failure with volume overload. They relieve symptoms by reducing preload. Give IV (not oral) for faster onset and more reliable absorption. Dose is typically 1-2x the patient\'s home oral dose.',
            nextStageId: undefined,
          },
          {
            id: 'beta-blocker',
            text: 'Increase beta-blocker dose',
            consequence: 'You increase carvedilol dose.',
            isCorrect: false,
            feedback: 'Do NOT increase (or initiate) beta-blockers during acute decompensation! Beta-blockers have negative inotropic effects and can worsen acute HF. Continue home dose once stable, but don\'t increase during acute phase.',
            nextStageId: undefined,
          },
          {
            id: 'digoxin',
            text: 'Start IV digoxin',
            consequence: 'Digoxin loading dose given.',
            isCorrect: false,
            feedback: 'Digoxin is rarely used acutely anymore. It has a narrow therapeutic window and significant toxicity risk, especially with renal dysfunction. It may help with rate control in AF but is not first-line for acute decompensation.',
            nextStageId: undefined,
          },
          {
            id: 'dobutamine',
            text: 'Start inotropic support (dobutamine)',
            consequence: 'Dobutamine infusion initiated.',
            isCorrect: false,
            feedback: 'Inotropes are reserved for cardiogenic shock (low cardiac output with hypoperfusion). This patient has warm extremities and adequate blood pressure - he has "warm and wet" heart failure that responds to diuretics. Inotropes increase mortality in non-shocked patients.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'iv-diuretics',
        educationalExplanation: 'Acute decompensated HF treatment follows the "wet vs dry" and "warm vs cold" paradigm. "Warm and wet" (adequate perfusion but volume overloaded) = diuretics. "Cold and wet" (poor perfusion + volume overload) = diuretics + inotropes/vasodilators. "Cold and dry" (rare, low output without congestion) = careful fluid challenge and inotropes.',
      },
    ],

    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'Rapid recognition, appropriate supportive care, diuresis, and monitoring',
        stageSequence: ['initial', 'stabilization', 'diagnosis'],
        outcome: 'optimal',
      },
      {
        id: 'delayed',
        name: 'Delayed Diuresis',
        description: 'Focused on ruling out other diagnoses before treating obvious heart failure',
        stageSequence: ['initial', 'stabilization', 'diagnosis'],
        outcome: 'suboptimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Decompensated Heart Failure (HFrEF)',
      icdCode: 'I50.33',
      explanation: 'Acute worsening of chronic systolic heart failure (heart failure with reduced ejection fraction), precipitated by medication non-compliance and dietary indiscretion.',
      pathophysiology: 'His prior MI damaged the anterior wall of the left ventricle, reducing its pumping ability (EF 25%). Without his diuretic, fluid accumulated. Excess sodium intake worsened fluid retention. The failing left ventricle couldn\'t handle the increased preload, causing elevated left atrial pressure, which backed up into the pulmonary veins causing pulmonary edema. Right-sided pressures also rose, causing JVD, hepatic congestion, and peripheral edema.',
      epidemiology: 'Heart failure affects 6 million Americans. It\'s the leading cause of hospitalization in adults >65. Ischemic heart disease is the most common cause. 5-year mortality approaches 50%. Acute decompensation episodes are common and often preventable.',
      prognosis: 'Each hospitalization for heart failure worsens prognosis. However, with optimization of guideline-directed medical therapy, lifestyle modification, and close follow-up, many patients can remain stable for years. His declining EF (35% to 25%) is concerning and may warrant device therapy evaluation.',
    },

    diagnosticReasoning: 'This case demonstrates classic acute decompensated heart failure. The patient has multiple risk factors (prior MI, HTN, DM, AF) and known HFrEF. He presents with the cardinal symptoms: dyspnea (especially orthopnea and PND), edema, and fatigue. Physical exam shows volume overload: elevated JVP, S3 gallop, bilateral rales, and peripheral edema. The precipitant is clear: medication non-compliance (stopped diuretic) plus dietary indiscretion (high sodium). BNP confirms the diagnosis and indicates severity. Echo shows worsened EF. The key teaching point: most heart failure exacerbations are preventable with medication adherence and sodium restriction.',

    keyFindings: [
      'Paroxysmal nocturnal dyspnea (PND) and orthopnea - hallmarks of left heart failure',
      'Progressive peripheral edema with 12-pound weight gain',
      'Elevated JVP to 14 cm with hepatojugular reflux',
      'S3 gallop - pathognomonic for volume overload/heart failure',
      'Bilateral crackles (pulmonary edema)',
      'BNP 1,842 pg/mL - markedly elevated',
      'Echo showing EF 25%, worse than prior',
      'Clear precipitant: stopped diuretic + high sodium intake',
    ],

    treatment: {
      immediate: 'Oxygen supplementation, upright positioning, IV furosemide 80mg (2x home dose), continuous pulse oximetry and telemetry, strict I/O monitoring',
      medications: [
        {
          name: 'Furosemide',
          dose: '80mg IV, then 40mg IV q8-12h',
          route: 'IV',
          frequency: 'every 8-12 hours, titrated to urine output',
          rationale: 'Loop diuretic to reduce volume overload. IV for faster onset and more reliable absorption. Goal is net negative fluid balance of 1-2L per day.',
        },
        {
          name: 'Lisinopril',
          dose: 'Continue home dose 10mg daily',
          route: 'oral',
          frequency: 'daily',
          rationale: 'ACE inhibitor - cornerstone of HFrEF therapy. Reduces afterload, slows remodeling, improves survival.',
        },
        {
          name: 'Carvedilol',
          dose: 'Continue home dose 12.5mg twice daily (do not increase)',
          route: 'oral',
          frequency: 'twice daily',
          rationale: 'Beta-blocker - improves survival in HFrEF. Continue during hospitalization but do not uptitrate until euvolemic and stable.',
        },
        {
          name: 'Spironolactone',
          dose: 'Continue 25mg daily',
          route: 'oral',
          frequency: 'daily',
          rationale: 'MRA - reduces mortality in HFrEF. Monitor potassium closely with diuresis.',
        },
        {
          name: 'Apixaban',
          dose: 'Continue 5mg twice daily',
          route: 'oral',
          frequency: 'twice daily',
          rationale: 'Anticoagulation for atrial fibrillation to prevent stroke.',
        },
      ],
      procedures: 'No procedures needed acutely. Consider ICD evaluation given EF ≤35% and at least 40 days post-MI on optimal medical therapy.',
      monitoring: 'Daily weights (goal: lose 1-2 kg/day until euvolemic). Strict I/O with goal net negative 1-2L/day. Daily BMP to monitor creatinine and potassium. Telemetry for arrhythmias. Reassess volume status daily (JVP, lung exam, edema).',
      patientEducation: [
        'Your heart is weak from your prior heart attack and struggles to pump blood efficiently',
        'You got fluid overloaded because you stopped your water pill and ate too much salt',
        'Weigh yourself every day at the same time - call if you gain more than 2-3 pounds in a few days',
        'Limit sodium to less than 2 grams (2000 mg) per day',
        'Take all your medications every day - never run out',
        'Limit fluids to about 2 liters (64 oz) per day',
        'Call your doctor if you notice increased swelling, weight gain, or shortness of breath',
      ],
    },

    outcome: 'IV furosemide produced brisk diuresis with 3 liters of urine output in the first 12 hours. Oxygen requirement decreased, and by hospital day 2, patient was weaned to room air. Over 4 days, he lost 8 kg (about 18 lbs) of fluid. JVP normalized, crackles resolved, and edema improved from 3+ to trace. BNP trended down to 580 pg/mL. Renal function was monitored closely - creatinine bumped to 2.0 then stabilized. He was transitioned to oral furosemide (increased to 60mg twice daily from his prior 40mg daily). Electrophysiology was consulted for ICD evaluation given EF ≤35%. Discharged home day 5.',

    followUp: 'Cardiology follow-up in 1 week with repeat BMP. Heart failure clinic enrollment for close monitoring. Home health for daily weight monitoring initially. Repeat echocardiogram in 3 months. Nutritionist consultation for sodium-restricted diet education. ICD evaluation after 40-day waiting period on optimized medical therapy. Consider adding SGLT2 inhibitor (dapagliflozin or empagliflozin) given HFrEF with EF ≤40%.',
  },

  teachingPoints: [
    {
      topic: 'BNP: The Heart Failure Biomarker',
      content: 'BNP (B-type natriuretic peptide) is released from ventricular myocytes in response to wall stretch. BNP <100 pg/mL essentially rules out heart failure; >400 pg/mL strongly suggests it. NT-proBNP has different cutoffs (higher numbers). BNP helps distinguish cardiac from pulmonary dyspnea and tracks treatment response.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Volume Assessment: JVP is Key',
      content: 'Jugular venous pressure (JVP) is the best bedside indicator of right atrial pressure and volume status. Measure with patient at 45°. Normal is <8 cm H2O. Hepatojugular reflux increases sensitivity. JVP, lung exam, and edema together assess congestion.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'HFrEF vs HFpEF',
      content: 'Heart failure is classified by ejection fraction: HFrEF (EF ≤40%) has proven mortality-reducing therapies (ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2i). HFpEF (EF ≥50%) has fewer proven therapies but SGLT2 inhibitors show benefit. HFmrEF (EF 41-49%) is a gray zone, often treated like HFrEF.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'S3 Gallop: The Sound of Failure',
      content: 'S3 is a low-pitched sound in early diastole, caused by rapid ventricular filling against a volume-overloaded, noncompliant ventricle. Best heard with bell at apex. "Ken-TUC-ky" rhythm (S1-S2-S3). S3 in adults is nearly pathognomonic for heart failure.',
      category: 'clinical-pearl',
      importance: 'important',
    },
    {
      topic: 'Diuretic Dosing in Acute HF',
      content: 'IV loop diuretics are first-line for acute decompensated HF. Dose is typically 1-2x the patient\'s home oral dose (IV is more potent due to better bioavailability). Goal: net negative 1-2L/day. Monitor creatinine and K+. If inadequate response, double the dose or add thiazide (metolazone).',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'The "Wet/Dry, Warm/Cold" Paradigm',
      content: 'Classify acute HF patients as: Warm and Wet (adequate perfusion + congestion) = diuretics. Cold and Wet (poor perfusion + congestion) = diuretics + inotropes. Warm and Dry (compensated) = optimize oral meds. Cold and Dry (rare) = careful fluids + inotropes.',
      category: 'clinical-pearl',
      importance: 'important',
    },
    {
      topic: 'Avoiding Common Precipitants',
      content: 'Most HF exacerbations are preventable. Common precipitants: medication non-compliance (especially diuretics), dietary indiscretion (sodium), new arrhythmia (especially AF with RVR), ischemia, infection, uncontrolled hypertension, anemia, and nephrotoxic drugs (NSAIDs).',
      category: 'clinical-pearl',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Giving IV fluids to a patient who is already volume overloaded',
    'Waiting for BNP before starting treatment in obvious clinical heart failure',
    'Uptitrating beta-blockers during acute decompensation',
    'Using only clinical impression without measuring JVP to assess volume',
    'Discharging before achieving euvolemia ("a few pounds doesn\'t matter")',
    'Not identifying and addressing the precipitant',
    'Starting inotropes in "warm and wet" patients with adequate perfusion',
    'Stopping ACE inhibitors due to small creatinine bump with diuresis',
    'Not educating patients about daily weights and sodium restriction',
  ],

  relatedCases: [
    'acute-chf-hfpef',
    'cardiogenic-shock',
    'acute-pulmonary-edema-hypertensive',
    'acute-mi-stemi',
    'atrial-fibrillation-rvr',
  ],
};

// ============================================
// Case: COPD Exacerbation
// ============================================

const COPD_EXACERBATION_CASE: ClinicalCase = {
  id: 'copd-exacerbation',
  title: 'The Winter Wheeze',
  category: 'pulmonology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the clinical presentation of acute COPD exacerbation',
    'Understand the role of respiratory viruses and bacteria as triggers',
    'Learn the GOLD classification and its implications for management',
    'Master the stepwise treatment approach: bronchodilators, steroids, antibiotics',
    'Appreciate when to escalate to non-invasive ventilation (BiPAP)',
    'Understand the difference between COPD exacerbation and pneumonia',
  ],

  presentation: {
    chiefComplaint: 'Worsening shortness of breath and cough',
    demographics: {
      age: 71,
      sex: 'male',
      occupation: 'retired mechanic',
      context: 'presents to the emergency department with 4 days of worsening respiratory symptoms',
    },
    openingParagraph: `Mr. Patterson is a 71-year-old retired auto mechanic who presents to the ED with 4 days of worsening shortness of breath and productive cough. He has a long history of COPD and uses inhalers at home. He reports that his breathing has been getting progressively worse, and his sputum has changed from white to yellow-green. His grandson had a cold last week that he thinks he "caught." He's been using his albuterol inhaler every 2-3 hours with minimal relief. His wife brought him in because he couldn't walk from the bedroom to the bathroom without stopping to catch his breath.`,
    generalAppearance: 'Elderly man sitting on edge of stretcher, leaning forward with arms braced on his thighs (tripod position). Pursed-lip breathing. Speaking in short phrases. Using accessory muscles visibly. Appears fatigued and anxious.',
    vitalSigns: {
      temperature: '100.4°F (38.0°C)',
      heartRate: '108 bpm, regular',
      bloodPressure: '148/88 mmHg',
      respiratoryRate: '28/min',
      oxygenSaturation: '86% on room air',
      interpretation: 'Low-grade fever (suggests infectious trigger), tachycardia (stress response and possible hypoxia compensation), tachypnea, significant hypoxemia. Classic presentation of moderate-severe COPD exacerbation.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When did your breathing start getting worse?',
        category: 'hpi',
        response: 'It started about 4 days ago. I woke up feeling more congested than usual, and each day it\'s gotten a little harder to breathe. Today is the worst - I can barely make it across the room.',
        educationalNote: 'COPD exacerbations typically develop over days. Acute onset (minutes to hours) should raise concern for pneumothorax, PE, or cardiac cause. The gradual progression here is classic for an infectious exacerbation.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-sputum',
        question: 'Tell me about your cough and sputum.',
        category: 'hpi',
        response: 'My cough is worse than usual - more frequent and deeper. And the stuff I\'m coughing up has changed. It\'s usually white or clear, but now it\'s thick and yellow-green. There\'s more of it too.',
        educationalNote: 'The Anthonisen criteria for COPD exacerbation: (1) increased dyspnea, (2) increased sputum volume, (3) increased sputum purulence. This patient has all three - a "type 1" or severe exacerbation, which benefits from antibiotics.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-trigger',
        question: 'Any idea what triggered this?',
        category: 'hpi',
        response: 'My 6-year-old grandson was over last week and had a runny nose and cough. I\'m pretty sure I caught whatever he had. Started with a sore throat and runny nose, then moved to my chest.',
        educationalNote: 'Viral upper respiratory infections are the most common trigger for COPD exacerbations (50-70%). Rhinovirus is the most frequent culprit. Bacterial superinfection often follows the initial viral illness.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-inhalers',
        question: 'How often are you using your rescue inhaler?',
        category: 'hpi',
        response: 'I\'ve been using my albuterol every 2-3 hours, sometimes more. Usually I only need it a few times a day. It helps for about 30 minutes, then the tightness comes back.',
        educationalNote: 'Increased rescue inhaler use is a key marker of exacerbation severity. Needing bronchodilators every 2-3 hours indicates significant bronchospasm not controlled by maintenance therapy.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-baseline',
        question: 'What\'s your breathing like on a normal day?',
        category: 'hpi',
        response: 'On a good day, I can walk around the house fine. I get winded going up stairs or walking long distances, but I can do my daily activities. I use oxygen at night but not during the day usually.',
        educationalNote: 'Understanding baseline functional status is crucial. This patient has moderate COPD (GOLD 2-3) with nocturnal oxygen use. Current presentation is significantly below his baseline.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-copd',
        question: 'Tell me about your COPD history.',
        category: 'pmh',
        response: 'I was diagnosed about 12 years ago. My last lung test showed my FEV1 was about 42% of normal. I\'ve been hospitalized twice before for flare-ups - last time was 18 months ago. I\'ve never needed to be on a breathing machine.',
        educationalNote: 'FEV1 42% = GOLD Stage 3 (severe). Prior exacerbations predict future exacerbations. Never requiring intubation is reassuring but doesn\'t preclude need this time.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-smoking',
        question: 'What\'s your smoking history?',
        category: 'pmh',
        response: 'I smoked for about 45 years - started at 16, quit at 61 when I was diagnosed with COPD. About a pack a day, sometimes more when I was younger. That\'s about 50 pack-years I guess.',
        educationalNote: '50 pack-years is substantial smoking exposure. Most COPD patients have >20 pack-years. Quitting helps but damage is not fully reversible. Continued smoking accelerates decline.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-other',
        question: 'Any other medical conditions?',
        category: 'pmh',
        response: 'I have high blood pressure and had a small heart attack about 5 years ago. They said my heart is okay now but I take medicines for it. I also have acid reflux.',
        educationalNote: 'Cardiovascular disease is common in COPD patients (shared risk factor of smoking). GERD can worsen COPD through microaspiration. Important comorbidities to manage.',
        isKeyFinding: false,
      },
      {
        id: 'meds-list',
        question: 'What medications do you take?',
        category: 'medications',
        response: 'For my lungs: tiotropium once a day, fluticasone-salmeterol twice a day, and albuterol as needed. For my heart: metoprolol, lisinopril, aspirin, and atorvastatin. I also take omeprazole for reflux.',
        educationalNote: 'Good maintenance therapy: LAMA (tiotropium) + ICS/LABA (fluticasone-salmeterol) = "triple therapy." Beta-blocker (metoprolol) is generally safe in COPD despite old concerns - cardioselective beta-blockers don\'t significantly worsen bronchospasm.',
        isKeyFinding: true,
      },
      {
        id: 'allergies',
        question: 'Any allergies?',
        category: 'allergies',
        response: 'I\'m allergic to sulfa drugs - got a bad rash years ago.',
        educationalNote: 'Important to know before prescribing antibiotics. Bactrim (TMP-SMX) should be avoided.',
        isKeyFinding: false,
      },
      {
        id: 'hpi-fever',
        question: 'Any fevers or chills?',
        category: 'hpi',
        response: 'I\'ve felt warm the past two days. My wife took my temperature this morning and it was 100.2. I\'ve had some chills too, especially at night.',
        educationalNote: 'Low-grade fever is common in COPD exacerbation, especially with bacterial superinfection. High fever (>101.5°F) should increase suspicion for pneumonia.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-inspection',
            exam: 'Respiratory inspection',
            finding: 'Barrel-shaped chest. Using accessory muscles (sternocleidomastoid, scalenes). Pursed-lip breathing. Prolonged expiratory phase. Intercostal retractions visible.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Barrel chest reflects chronic hyperinflation from air trapping. Accessory muscle use indicates increased work of breathing. Pursed-lip breathing is a self-taught technique that creates back-pressure to prevent small airway collapse.',
          },
          {
            id: 'resp-auscultation',
            exam: 'Lung auscultation',
            finding: 'Diffuse expiratory wheezing bilaterally. Prolonged expiratory phase (I:E ratio approximately 1:4). Decreased breath sounds at bases. No crackles or rales. No focal consolidation.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Wheezing indicates airflow obstruction from bronchospasm and mucus. Prolonged expiration reflects air trapping. Decreased breath sounds = poor air movement (can be ominous if silent chest). Absence of crackles argues against pneumonia.',
          },
          {
            id: 'resp-percussion',
            exam: 'Chest percussion',
            finding: 'Hyperresonant throughout. Decreased diaphragmatic excursion bilaterally.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Hyperresonance reflects hyperinflation (increased air in chest). Decreased diaphragmatic excursion indicates flattened diaphragm from chronic hyperinflation.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-exam',
            exam: 'Cardiovascular examination',
            finding: 'Tachycardic at 108 bpm, regular rhythm. Normal S1, S2. No S3 or S4. No murmurs. JVP mildly elevated at 10 cm H2O.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Tachycardia is expected (hypoxia, stress, beta-agonist use). Mildly elevated JVP can be seen in COPD exacerbation due to increased intrathoracic pressure and possible cor pulmonale.',
          },
        ],
      },
      {
        system: 'General/Skin',
        findings: [
          {
            id: 'general-exam',
            exam: 'General appearance',
            finding: 'Fatigued appearing. Speaking in 2-3 word sentences. Central cyanosis of lips noted. Clubbing of fingers present.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Speaking in short phrases indicates significant respiratory distress. Central cyanosis indicates hypoxemia (SpO2 usually <85% to see cyanosis). Clubbing suggests chronic hypoxemia.',
          },
        ],
      },
      {
        system: 'Extremities',
        findings: [
          {
            id: 'ext-exam',
            exam: 'Extremity examination',
            finding: 'Trace bilateral ankle edema. Warm extremities. No calf tenderness or swelling asymmetry.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Mild edema can be seen in cor pulmonale (right heart strain from chronic lung disease). Symmetric edema without calf tenderness makes DVT less likely.',
          },
        ],
      },
    ],

    availableLabs: [
      {
        id: 'abg',
        name: 'Arterial Blood Gas',
        turnaroundTime: '15 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'pH', value: '7.32', unit: '', isAbnormal: true, flag: 'low' },
            { name: 'pCO2', value: '58', unit: 'mmHg', isAbnormal: true, flag: 'high' },
            { name: 'pO2', value: '52', unit: 'mmHg', isAbnormal: true, flag: 'low' },
            { name: 'HCO3', value: '29', unit: 'mEq/L', isAbnormal: true, flag: 'high' },
            { name: 'O2 Sat', value: '84%', unit: '', isAbnormal: true, flag: 'low' },
          ],
          interpretation: 'Acute on chronic respiratory acidosis with hypoxemia. The elevated HCO3 indicates chronic CO2 retention (metabolic compensation). The acute drop in pH indicates worsening ventilation.',
        },
        isAppropriate: true,
        educationalNote: 'ABG is essential in moderate-severe COPD exacerbation. This shows hypercapnic respiratory failure. The "chronically compensated" bicarbonate tells us this patient is a CO2 retainer at baseline. The acute pH drop indicates acute-on-chronic respiratory failure.',
      },
      {
        id: 'cbc',
        name: 'Complete Blood Count',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'WBC', value: '13.8', unit: 'K/uL', isAbnormal: true, flag: 'high' },
            { name: 'Hemoglobin', value: '16.8', unit: 'g/dL', isAbnormal: true, flag: 'high' },
            { name: 'Hematocrit', value: '52', unit: '%', isAbnormal: true, flag: 'high' },
            { name: 'Platelets', value: '268', unit: 'K/uL', isAbnormal: false },
          ],
          interpretation: 'Leukocytosis suggesting infection. Polycythemia (elevated hemoglobin/hematocrit) from chronic hypoxemia - the body makes more red blood cells to carry oxygen.',
        },
        isAppropriate: true,
        educationalNote: 'Leukocytosis supports infectious etiology. Secondary polycythemia (high Hgb/Hct) is common in chronic hypoxemic COPD - it\'s the body\'s adaptation to carry more oxygen. This increases blood viscosity and thrombosis risk.',
      },
      {
        id: 'bmp',
        name: 'Basic Metabolic Panel',
        turnaroundTime: '30 minutes',
        cost: 'low',
        result: {
          values: [
            { name: 'Sodium', value: '139', unit: 'mEq/L', isAbnormal: false },
            { name: 'Potassium', value: '4.1', unit: 'mEq/L', isAbnormal: false },
            { name: 'Chloride', value: '98', unit: 'mEq/L', isAbnormal: false },
            { name: 'CO2', value: '30', unit: 'mEq/L', isAbnormal: true, flag: 'high' },
            { name: 'BUN', value: '22', unit: 'mg/dL', isAbnormal: false },
            { name: 'Creatinine', value: '1.0', unit: 'mg/dL', isAbnormal: false },
            { name: 'Glucose', value: '142', unit: 'mg/dL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Elevated serum CO2 (bicarbonate) confirms chronic respiratory acidosis with metabolic compensation. Mild hyperglycemia may be stress response or steroid effect.',
        },
        isAppropriate: true,
        educationalNote: 'The venous CO2 (bicarbonate) correlates with ABG HCO3. Elevated level confirms chronic CO2 retention. Important to check potassium with beta-agonist use (can cause hypokalemia).',
      },
      {
        id: 'procalcitonin',
        name: 'Procalcitonin',
        turnaroundTime: '45 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'Procalcitonin', value: '0.35', unit: 'ng/mL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Mildly elevated (0.25-0.5 suggests possible bacterial infection). Supports use of antibiotics in this exacerbation.',
        },
        isAppropriate: true,
        educationalNote: 'Procalcitonin helps guide antibiotic use in COPD exacerbation. <0.1 = unlikely bacterial, antibiotics can be withheld. 0.25-0.5 = possible bacterial. >0.5 = likely bacterial. This patient\'s level supports antibiotic therapy.',
      },
      {
        id: 'bnp',
        name: 'BNP',
        turnaroundTime: '30 minutes',
        cost: 'medium',
        result: {
          values: [
            { name: 'BNP', value: '180', unit: 'pg/mL', isAbnormal: true, flag: 'high' },
          ],
          interpretation: 'Mildly elevated. Levels 100-400 are indeterminate. This mild elevation is likely from cor pulmonale (right heart strain) rather than primary heart failure.',
        },
        isAppropriate: true,
        educationalNote: 'BNP can be mildly elevated in COPD from cor pulmonale and right heart strain. It helps distinguish primary heart failure (very high BNP) from COPD exacerbation (normal or mildly elevated).',
      },
    ],

    availableImaging: [
      {
        id: 'cxr',
        name: 'Chest X-ray',
        turnaroundTime: '15 minutes',
        cost: 'low',
        result: {
          findings: 'Hyperinflated lungs with flattened diaphragms. Increased AP diameter. No focal consolidation, infiltrate, or effusion. No pneumothorax. Heart size normal. Prominent pulmonary arteries.',
          impression: 'Findings consistent with severe COPD/emphysema without evidence of pneumonia or other acute process.',
          imageDescription: 'PA and lateral chest X-ray showing hyperinflated lungs, flattened hemidiaphragms, and increased retrosternal clear space consistent with emphysema. No consolidation to suggest pneumonia.',
        },
        isAppropriate: true,
        educationalNote: 'CXR is important to exclude pneumonia, pneumothorax, and heart failure as causes of worsening dyspnea. Classic COPD findings: hyperinflation, flat diaphragms, increased AP diameter. The absence of infiltrate supports COPD exacerbation rather than pneumonia.',
      },
    ],

    otherTests: [
      {
        id: 'ecg',
        name: '12-Lead ECG',
        turnaroundTime: '5 minutes',
        result: 'Sinus tachycardia at 108 bpm. Right axis deviation. Low voltage in limb leads. P pulmonale (tall P waves in II, III, aVF). No acute ST changes.',
        isAppropriate: true,
        educationalNote: 'ECG changes in COPD: right axis deviation, P pulmonale (right atrial enlargement from cor pulmonale), low voltage (hyperinflation), sometimes multifocal atrial tachycardia. Important to rule out ischemia as cause of symptoms.',
      },
      {
        id: 'peakflow',
        name: 'Peak Expiratory Flow',
        turnaroundTime: '5 minutes',
        result: 'Peak flow: 120 L/min (predicted 450 L/min for age/height). This is 27% of predicted, indicating severe obstruction.',
        isAppropriate: true,
        educationalNote: 'Peak flow provides a quick, objective measure of airflow obstruction. This patient\'s peak flow is severely reduced. Serial measurements can track response to bronchodilator therapy.',
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial',
        name: 'Initial Assessment',
        description: 'Elderly man with known COPD presents with worsening dyspnea and productive cough.',
        availableDataIds: ['hpi-onset', 'hpi-sputum', 'hpi-trigger', 'vitals'],
        nextDecisionPointId: 'oxygen-decision',
      },
      {
        id: 'stabilization',
        name: 'Respiratory Support',
        description: 'Patient is hypoxemic and tachypneic. Need to address oxygenation while continuing evaluation.',
        availableDataIds: ['pmh-copd', 'resp-inspection', 'resp-auscultation', 'abg'],
        nextDecisionPointId: 'treatment-decision',
      },
      {
        id: 'treatment',
        name: 'Treatment Phase',
        description: 'Initiate definitive treatment for COPD exacerbation.',
        availableDataIds: ['cbc', 'procalcitonin', 'cxr', 'ecg'],
        nextDecisionPointId: 'escalation-decision',
      },
    ],

    decisionPoints: [
      {
        id: 'oxygen-decision',
        stageId: 'initial',
        question: 'Patient has SpO2 86% on room air with known COPD. What is the appropriate oxygen target and delivery method?',
        context: 'Known COPD patient with FEV1 42% (severe COPD), uses home oxygen at night. Currently hypoxemic.',
        options: [
          {
            id: 'controlled-o2',
            text: 'Controlled oxygen via nasal cannula or Venturi mask, target SpO2 88-92%',
            consequence: 'Patient started on 2L NC, SpO2 improves to 90%.',
            isCorrect: true,
            feedback: 'Correct! In COPD patients, the target SpO2 is 88-92% (not >94% like most patients). Higher oxygen levels can suppress hypoxic respiratory drive in chronic CO2 retainers, worsening hypoventilation. Controlled oxygen delivery (Venturi mask) is preferred when precise FiO2 is needed.',
            nextStageId: 'stabilization',
          },
          {
            id: 'high-flow-o2',
            text: 'High-flow oxygen via non-rebreather mask, target SpO2 >95%',
            consequence: 'Patient on 15L NRB, SpO2 now 98%. However, 30 minutes later he becomes drowsy.',
            isCorrect: false,
            feedback: 'This is dangerous in COPD! Chronic CO2 retainers (like this patient with compensated respiratory acidosis) rely partly on hypoxic drive to breathe. Giving too much oxygen removes this stimulus, causing hypoventilation, rising CO2, and CO2 narcosis. Target 88-92% in COPD.',
            nextStageId: 'stabilization',
          },
          {
            id: 'no-oxygen',
            text: 'Withhold oxygen due to concern for CO2 retention, focus on bronchodilators first',
            consequence: 'Patient remains hypoxemic at 86%.',
            isCorrect: false,
            feedback: 'Never withhold oxygen from a hypoxemic patient! Hypoxemia kills faster than hypercapnia. The solution is controlled oxygen therapy with a target of 88-92%, not withholding oxygen entirely.',
            nextStageId: 'stabilization',
          },
          {
            id: 'intubate-now',
            text: 'Immediate intubation for respiratory failure',
            consequence: 'You prepare for intubation.',
            isCorrect: false,
            feedback: 'This patient is not in extremis - he\'s speaking, alert, and has acceptable (though reduced) oxygenation. Try medical management and non-invasive support first. Intubation carries significant risks in COPD patients (difficult weaning).',
            nextStageId: 'stabilization',
          },
        ],
        correctOptionId: 'controlled-o2',
        educationalExplanation: 'Oxygen targets in COPD: SpO2 88-92%. This balances treating hypoxemia while avoiding oxygen-induced hypercapnia. Chronic CO2 retainers have blunted central chemoreceptor response to CO2 and rely more on peripheral hypoxic drive. Excess O2 suppresses this drive. Additionally, high O2 causes V/Q mismatch worsening and the Haldane effect (O2-loaded hemoglobin releases CO2).',
      },
      {
        id: 'treatment-decision',
        stageId: 'stabilization',
        question: 'ABG shows pH 7.32, pCO2 58, pO2 52, HCO3 29. What is the first-line pharmacological treatment?',
        context: 'COPD exacerbation with acute-on-chronic hypercapnic respiratory failure. All three Anthonisen criteria present (dyspnea, sputum volume, sputum purulence).',
        options: [
          {
            id: 'bronchodilators-steroids-abx',
            text: 'Nebulized bronchodilators (albuterol + ipratropium), systemic corticosteroids, and antibiotics',
            consequence: 'Treatment initiated: albuterol/ipratropium nebs, prednisone 40mg, azithromycin. Wheezing improves.',
            isCorrect: true,
            feedback: 'Correct! The triad of COPD exacerbation treatment: (1) Bronchodilators - SABA (albuterol) ± SAMA (ipratropium) nebulized or MDI. (2) Systemic corticosteroids - reduce inflammation, shorten recovery. (3) Antibiotics - for moderate-severe exacerbations with increased sputum purulence.',
            nextStageId: 'treatment',
          },
          {
            id: 'bronchodilators-only',
            text: 'Nebulized bronchodilators only',
            consequence: 'Albuterol nebulizer given. Some improvement but still significant symptoms.',
            isCorrect: false,
            feedback: 'Bronchodilators alone are insufficient for this moderate-severe exacerbation. This patient meets criteria for steroids (acute exacerbation) and antibiotics (purulent sputum, fever, significant symptoms). Withholding these prolongs recovery and increases treatment failure.',
            nextStageId: 'treatment',
          },
          {
            id: 'antibiotics-only',
            text: 'IV antibiotics for presumed respiratory infection',
            consequence: 'IV ceftriaxone started.',
            isCorrect: false,
            feedback: 'Antibiotics are important but not the only treatment. You\'re missing bronchodilators (to relieve bronchospasm) and corticosteroids (to reduce inflammation). All three components are needed for optimal management.',
            nextStageId: 'treatment',
          },
          {
            id: 'steroids-high-dose',
            text: 'High-dose IV methylprednisolone (125mg)',
            consequence: 'IV steroids given.',
            isCorrect: false,
            feedback: 'High-dose steroids (>40-60mg prednisone equivalent) have not been shown to provide additional benefit over moderate doses in COPD exacerbation. Standard dosing is prednisone 40mg daily (or equivalent) for 5 days. High doses increase side effects without improving outcomes.',
            nextStageId: 'treatment',
          },
        ],
        correctOptionId: 'bronchodilators-steroids-abx',
        educationalExplanation: 'COPD exacerbation treatment mnemonic: "ABC" - Antibiotics, Bronchodilators, Corticosteroids. Bronchodilators are always given. Steroids are given for all but the mildest exacerbations. Antibiotics are indicated for: (1) all three Anthonisen criteria, (2) requiring mechanical ventilation, or (3) two criteria if one is purulent sputum. Standard regimens: 5-day course of prednisone 40mg; azithromycin, doxycycline, or respiratory fluoroquinolone for antibiotics.',
      },
      {
        id: 'escalation-decision',
        stageId: 'treatment',
        question: 'After 2 hours of treatment, patient is still tachypneic (RR 26), using accessory muscles, and ABG shows pH 7.30, pCO2 62. What is the next step?',
        context: 'Patient received bronchodilators, steroids, and antibiotics but is not improving adequately. Showing signs of worsening respiratory acidosis.',
        options: [
          {
            id: 'bipap',
            text: 'Initiate non-invasive positive pressure ventilation (BiPAP)',
            consequence: 'BiPAP started at 12/5. Patient tolerates it well. Over next hour, RR decreases to 20, pH improves to 7.34.',
            isCorrect: true,
            feedback: 'Correct! BiPAP (non-invasive ventilation) is indicated for COPD exacerbation with respiratory acidosis (pH <7.35) not responding to initial therapy. It reduces work of breathing, improves gas exchange, and decreases intubation rates. It\'s first-line ventilatory support before intubation.',
            nextStageId: undefined,
          },
          {
            id: 'intubate',
            text: 'Proceed directly to intubation and mechanical ventilation',
            consequence: 'Patient is intubated.',
            isCorrect: false,
            feedback: 'Intubation is not indicated yet. The patient is still alert, protecting his airway, and not in extremis. Non-invasive ventilation (BiPAP) should be tried first - it has been shown to reduce intubation rates, ICU stay, and mortality in COPD exacerbation. Intubation is reserved for NIV failure or contraindications.',
            nextStageId: undefined,
          },
          {
            id: 'more-nebs',
            text: 'Continue current treatment, give more frequent nebulizers',
            consequence: 'Continuous nebulizer treatment started. Patient remains acidotic.',
            isCorrect: false,
            feedback: 'More bronchodilators alone won\'t address the ventilatory failure. The worsening pH and rising CO2 indicate the patient cannot ventilate adequately. He needs ventilatory support (BiPAP) to rest his respiratory muscles and improve CO2 clearance.',
            nextStageId: undefined,
          },
          {
            id: 'theophylline',
            text: 'Add IV aminophylline/theophylline',
            consequence: 'Aminophylline infusion started.',
            isCorrect: false,
            feedback: 'Methylxanthines (theophylline, aminophylline) are no longer recommended in acute COPD exacerbation. They have a narrow therapeutic window, many drug interactions, and no proven benefit over standard bronchodilators. Risk of toxicity (arrhythmias, seizures) outweighs potential benefit.',
            nextStageId: undefined,
          },
        ],
        correctOptionId: 'bipap',
        educationalExplanation: 'Non-invasive ventilation (NIV/BiPAP) in COPD: Indicated when pH <7.35 with elevated pCO2 despite initial treatment. Benefits: unloads respiratory muscles, improves ventilation, reduces intubation by ~50%, reduces mortality. Typical settings: IPAP 10-15, EPAP 4-6. Contraindications: decreased consciousness, inability to protect airway, facial trauma, hemodynamic instability. Monitor closely - if no improvement in 1-2 hours or worsening, intubation may be needed.',
      },
    ],

    paths: [
      {
        id: 'optimal',
        name: 'Optimal Management',
        description: 'Controlled oxygen, bronchodilators/steroids/antibiotics, BiPAP when needed',
        stageSequence: ['initial', 'stabilization', 'treatment'],
        outcome: 'optimal',
      },
      {
        id: 'suboptimal',
        name: 'Suboptimal Management',
        description: 'Delays in treatment or inappropriate oxygen therapy',
        stageSequence: ['initial', 'stabilization', 'treatment'],
        outcome: 'suboptimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Exacerbation of Chronic Obstructive Pulmonary Disease (AECOPD)',
      icdCode: 'J44.1',
      explanation: 'Acute worsening of respiratory symptoms beyond normal day-to-day variation, triggered by a viral upper respiratory infection with likely bacterial superinfection.',
      pathophysiology: 'COPD involves progressive airflow limitation from airway inflammation, mucus hypersecretion, and parenchymal destruction (emphysema). During an exacerbation, viral infection triggers increased airway inflammation, bronchospasm, and mucus production. The already-narrowed airways become further obstructed, leading to worsened gas exchange, air trapping, and respiratory muscle fatigue. In this patient, chronic CO2 retention worsened acutely, causing respiratory acidosis.',
      epidemiology: 'COPD affects ~16 million Americans (likely millions more undiagnosed). It\'s the 4th leading cause of death in the US. Exacerbations occur 1-2 times per year on average in moderate-severe COPD. Each exacerbation accelerates lung function decline. Winter months have the highest exacerbation rates due to viral infections.',
      prognosis: 'In-hospital mortality for COPD exacerbation is ~3-4%. However, each exacerbation worsens long-term prognosis. After a first hospitalization for COPD, 5-year mortality approaches 50%. Frequent exacerbators (≥2/year) have worse outcomes. This patient\'s GOLD Stage 3 and prior hospitalizations put him at high risk.',
    },

    diagnosticReasoning: 'This case illustrates a classic COPD exacerbation. The gradual onset over days, preceded by viral URI symptoms, with worsening dyspnea, increased sputum production, and sputum purulence meets all three Anthonisen criteria. The ABG showing acute-on-chronic respiratory acidosis (low pH with elevated but compensated HCO3) confirms hypercapnic respiratory failure. The absence of infiltrate on CXR distinguishes this from pneumonia. Key teaching points: (1) Controlled oxygen targeting 88-92%, (2) Triple therapy with bronchodilators, steroids, and antibiotics, (3) Early BiPAP for respiratory acidosis.',

    keyFindings: [
      'All three Anthonisen criteria: increased dyspnea, sputum volume, and sputum purulence',
      'Viral trigger (sick contact with grandson)',
      'Baseline severe COPD (FEV1 42%) with prior hospitalizations',
      'Physical exam: accessory muscle use, pursed-lip breathing, diffuse wheezing',
      'ABG showing acute-on-chronic hypercapnic respiratory failure (pH 7.32, pCO2 58)',
      'CXR showing hyperinflation without pneumonia',
      'Procalcitonin mildly elevated supporting bacterial component',
    ],

    treatment: {
      immediate: 'Controlled oxygen to target SpO2 88-92%, nebulized albuterol-ipratropium, IV/PO corticosteroids, oral antibiotics, BiPAP for respiratory acidosis',
      medications: [
        {
          name: 'Albuterol-Ipratropium (DuoNeb)',
          dose: '3mg/0.5mg',
          route: 'nebulized',
          frequency: 'every 4-6 hours initially, then as needed',
          rationale: 'Combination short-acting beta-agonist and short-acting muscarinic antagonist. Provides bronchodilation through two different mechanisms. The combination is more effective than either alone.',
        },
        {
          name: 'Prednisone',
          dose: '40mg',
          route: 'oral',
          frequency: 'daily for 5 days',
          rationale: 'Systemic corticosteroids reduce airway inflammation, shorten recovery time, and reduce treatment failure. 5-day course is as effective as 14 days with fewer side effects.',
        },
        {
          name: 'Azithromycin',
          dose: '500mg day 1, then 250mg',
          route: 'oral',
          frequency: 'daily for 5 days (Z-pack)',
          rationale: 'Covers typical respiratory pathogens (H. influenzae, M. catarrhalis, S. pneumoniae) and atypicals. Also has anti-inflammatory properties. Alternative: doxycycline 100mg BID.',
        },
        {
          name: 'Tiotropium (Spiriva)',
          dose: '18mcg',
          route: 'inhaled',
          frequency: 'daily',
          rationale: 'Continue home LAMA for baseline maintenance. Long-acting muscarinic antagonist provides sustained bronchodilation.',
        },
        {
          name: 'Fluticasone-Salmeterol (Advair)',
          dose: '250/50mcg',
          route: 'inhaled',
          frequency: 'twice daily',
          rationale: 'Continue home ICS/LABA. Inhaled corticosteroid + long-acting beta-agonist for maintenance therapy.',
        },
      ],
      procedures: 'Non-invasive positive pressure ventilation (BiPAP) for hypercapnic respiratory failure. Settings: IPAP 12 cm H2O, EPAP 5 cm H2O. Titrate to patient comfort and response. No intubation required.',
      monitoring: 'Continuous pulse oximetry (target 88-92%). Serial ABGs to monitor pH and pCO2 response to BiPAP. Respiratory rate and work of breathing assessment every 1-2 hours. Telemetry for arrhythmia monitoring. Daily weights and I/Os.',
      patientEducation: [
        'You had a flare-up of your lung disease, triggered by the cold you caught from your grandson',
        'The infection caused your airways to become more inflamed and narrow, making it hard to breathe',
        'We\'re giving you medicines to open your airways (nebulizers), reduce inflammation (steroids), and treat the infection (antibiotics)',
        'The breathing machine (BiPAP) is helping your lungs rest by doing some of the breathing work for you',
        'To prevent future flare-ups: get your flu shot and pneumonia vaccines, avoid sick contacts when possible, wash hands frequently',
        'If you notice early warning signs (more cough, colored sputum, more breathless than usual), call your doctor right away - early treatment prevents hospitalization',
      ],
    },

    outcome: 'BiPAP initiated for worsening respiratory acidosis. Over 6 hours, pH improved from 7.30 to 7.36 and pCO2 decreased from 62 to 52. Patient was able to wean off BiPAP by hospital day 2 and was transitioned to nasal cannula at 2L. Wheezing resolved with bronchodilator therapy. Completed 5-day course of prednisone and azithromycin. By discharge on day 4, oxygen saturation was 92% on room air. Peak flow improved from 120 to 280 L/min. Pulmonary rehabilitation referral placed. Smoking cessation counseling reinforced (though already quit). Vaccinations updated.',

    followUp: 'Follow-up with pulmonologist in 2 weeks with repeat spirometry. Pulmonary rehabilitation enrollment within 3 weeks. Home health for nebulizer treatment education and oxygen assessment. Consider roflumilast (PDE4 inhibitor) if frequent exacerbations continue. Ensure influenza and pneumococcal vaccinations are current. Action plan provided for early self-management of future exacerbations.',
  },

  teachingPoints: [
    {
      topic: 'Oxygen Targets in COPD: 88-92%',
      content: 'Unlike most patients where SpO2 >94% is the goal, COPD patients should target 88-92%. Higher oxygen levels can suppress the hypoxic ventilatory drive in chronic CO2 retainers, causing hypoventilation, CO2 narcosis, and worsening respiratory acidosis. Controlled oxygen delivery (Venturi mask) is preferred.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Anthonisen Criteria: When to Give Antibiotics',
      content: 'The three criteria for COPD exacerbation: (1) increased dyspnea, (2) increased sputum volume, (3) increased sputum purulence. Antibiotics are indicated when all three are present ("type 1"), or when two are present if one is purulent sputum. Procalcitonin <0.1 ng/mL may help safely withhold antibiotics.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Non-Invasive Ventilation: First-Line for Respiratory Acidosis',
      content: 'BiPAP reduces intubation rates by ~50% and mortality by ~40% in COPD exacerbation with respiratory acidosis (pH <7.35). Indications: pH <7.35 despite initial treatment, persistent severe dyspnea, impending fatigue. Start early - waiting until the patient is in extremis reduces effectiveness.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Acute-on-Chronic Respiratory Failure',
      content: 'Recognize this pattern on ABG: low pH (acute), elevated pCO2 (chronic retention), elevated HCO3 (metabolic compensation from chronic process). The elevated bicarbonate tells you the patient is a chronic CO2 retainer. An acute drop in pH indicates decompensation requiring intervention.',
      category: 'diagnostic-approach',
      importance: 'important',
    },
    {
      topic: 'The COPD Exacerbation Triad: ABC',
      content: 'A = Antibiotics (for moderate-severe exacerbations with purulence), B = Bronchodilators (always - SABA ± SAMA), C = Corticosteroids (prednisone 40mg x 5 days). Start all three promptly for moderate-severe exacerbations. Short courses of steroids are as effective as longer courses.',
      category: 'treatment',
      importance: 'important',
    },
    {
      topic: 'Exacerbation Prevention',
      content: 'Preventing exacerbations is key to COPD management. Strategies: smoking cessation, vaccinations (flu, pneumococcal, COVID), maintenance inhalers (LAMA, ICS/LABA), pulmonary rehabilitation, and action plans for early self-treatment. Frequent exacerbators (≥2/year) may benefit from azithromycin prophylaxis or roflumilast.',
      category: 'clinical-pearl',
      importance: 'important',
    },
  ],

  commonPitfalls: [
    'Giving high-flow oxygen to COPD patients (target 88-92%, not >94%)',
    'Waiting too long to start BiPAP in respiratory acidosis',
    'Withholding antibiotics when sputum is clearly purulent',
    'Using high-dose steroids (40mg prednisone equivalent is sufficient)',
    'Forgetting to continue home maintenance inhalers during exacerbation',
    'Using theophylline/aminophylline (no longer recommended)',
    'Not referring to pulmonary rehabilitation after exacerbation',
    'Intubating when BiPAP would be effective and appropriate',
    'Missing the diagnosis of pneumonia by not obtaining a CXR',
  ],

  relatedCases: [
    'asthma-acute',
    'pneumonia-cap',
    'pneumothorax',
    'pulmonary-embolism',
    'respiratory-failure',
  ],
};

// ============================================
// Case: Pulmonary Embolism
// ============================================

const PULMONARY_EMBOLISM_CASE: ClinicalCase = {
  id: 'pe-submassive',
  title: 'The Post-Flight Shortness of Breath',
  category: 'pulmonology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the varied presentations of pulmonary embolism',
    'Apply Wells criteria and D-dimer in PE evaluation',
    'Understand risk stratification in PE (massive vs submassive vs low-risk)',
    'Learn the initial anticoagulation approach for PE',
  ],

  presentation: {
    chiefComplaint: 'Shortness of breath',
    demographics: {
      age: 42,
      sex: 'female',
      occupation: 'marketing executive',
      context: 'presents to urgent care with sudden-onset dyspnea',
    },
    openingParagraph: `Ms. Rodriguez is a 42-year-old marketing executive who presents to urgent care with shortness of breath that began suddenly this morning while walking up stairs. She just returned yesterday from an 11-hour international flight. She describes the breathlessness as "different from anything I've felt before" and mentions a sharp pain in her right side when she takes a deep breath.`,
    generalAppearance: 'Well-appearing woman who appears mildly anxious. Breathing is slightly rapid but she speaks in full sentences. Occasionally winces when taking a deep breath.',
    vitalSigns: {
      temperature: '99.1°F (37.3°C)',
      heartRate: '108 bpm, regular',
      bloodPressure: '132/84 mmHg',
      respiratoryRate: '22/min',
      oxygenSaturation: '93% on room air',
      interpretation: 'Tachycardic with tachypnea and mild hypoxemia. Low-grade fever may be present with PE. The combination of recent travel, acute dyspnea, and hypoxemia is concerning for PE.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'When did the shortness of breath start?',
        category: 'hpi',
        response: 'It started suddenly this morning around 8 AM while I was walking upstairs. One moment I was fine, the next I couldn\'t catch my breath.',
        educationalNote: 'Sudden onset of dyspnea is classic for PE, unlike the gradual onset of pneumonia or CHF. The acute nature should raise suspicion.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-chest-pain',
        question: 'Tell me more about the chest pain.',
        category: 'hpi',
        response: 'It\'s on my right side, pretty sharp. It hurts more when I breathe in deeply or cough.',
        educationalNote: 'Pleuritic chest pain (worse with inspiration) occurs in 40-50% of PE cases due to pulmonary infarction irritating the pleura.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-travel',
        question: 'You mentioned a long flight. Tell me about your recent travel.',
        category: 'hpi',
        response: 'I flew back from Tokyo yesterday. It was an 11-hour flight. I didn\'t really get up much - just watched movies and slept.',
        educationalNote: 'Prolonged immobility (flights >4 hours) is a major risk factor for VTE. The risk increases with flight duration and is highest in the first 2 weeks after travel.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-leg-symptoms',
        question: 'Any pain or swelling in your legs?',
        category: 'hpi',
        response: 'Now that you mention it, my right calf has been aching since last night. I thought it was just stiff from sitting.',
        educationalNote: 'Calf pain/swelling suggests DVT as the source of PE. However, absence of leg symptoms does not rule out PE - up to 50% of PE patients have no clinical evidence of DVT.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-syncope',
        question: 'Any dizziness, fainting, or feeling like you might pass out?',
        category: 'hpi',
        response: 'I felt lightheaded when I first got short of breath, but I didn\'t actually pass out.',
        educationalNote: 'Syncope or presyncope can indicate hemodynamically significant PE with right heart strain. Its presence is a marker of severity.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-clots',
        question: 'Have you ever had blood clots before?',
        category: 'pmh',
        response: 'No, never.',
        educationalNote: 'Prior VTE is a strong risk factor for recurrence. First unprovoked PE has ~10% 1-year recurrence rate.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-cancer',
        question: 'Any history of cancer?',
        category: 'pmh',
        response: 'No cancer.',
        educationalNote: 'Malignancy is a major risk factor for VTE due to hypercoagulable state. Unprovoked VTE in appropriate patients should prompt age-appropriate cancer screening.',
        isKeyFinding: false,
      },
      {
        id: 'meds-hormones',
        question: 'Do you take any hormones like birth control or HRT?',
        category: 'medications',
        response: 'Yes, I\'ve been on birth control pills for about 10 years.',
        educationalNote: 'Estrogen-containing contraceptives increase VTE risk 2-4x. Combined with other risk factors like immobility, the risk is multiplicative.',
        isKeyFinding: true,
      },
      {
        id: 'fh-clots',
        question: 'Any family history of blood clots?',
        category: 'family',
        response: 'My mother had a "clot in her lung" after her hip surgery.',
        educationalNote: 'Family history of VTE, especially unprovoked, raises suspicion for inherited thrombophilia (Factor V Leiden, Prothrombin mutation, etc.).',
        isKeyFinding: true,
      },
      {
        id: 'sh-smoking',
        question: 'Do you smoke?',
        category: 'social',
        response: 'Occasionally, maybe 2-3 cigarettes a week socially.',
        educationalNote: 'Smoking combined with oral contraceptives synergistically increases VTE risk.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-heart-sounds',
            exam: 'Heart auscultation',
            finding: 'Tachycardic but regular rhythm. Normal S1/S2. Loud P2 component noted.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'A loud P2 (pulmonic component of S2) suggests pulmonary hypertension from PE. It indicates elevated pulmonary pressures.',
          },
          {
            id: 'cv-jvp',
            exam: 'Jugular venous pressure',
            finding: 'Mildly elevated at 10cm with prominent A wave',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Elevated JVP with prominent A wave suggests right heart strain from increased pulmonary vascular resistance.',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-lungs',
            exam: 'Lung auscultation',
            finding: 'Clear breath sounds bilaterally. No wheezes or rales. Splinting on right with deep inspiration.',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'Lungs are often clear in PE - this is a key distinguishing feature from pneumonia. The "clear lungs with hypoxemia" pattern should raise PE suspicion.',
          },
        ],
      },
      {
        system: 'Extremities',
        findings: [
          {
            id: 'ext-leg',
            exam: 'Lower extremity examination',
            finding: 'Right calf 2cm larger in circumference than left. Mild tenderness to palpation of right calf. Positive Homan sign (calf pain with dorsiflexion). No cord palpable.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Asymmetric leg swelling with >2cm difference in calf circumference is highly suggestive of DVT. Homan sign has poor sensitivity/specificity but supports clinical suspicion.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'lab-dimer',
        name: 'D-dimer',
        category: 'specialty',
        turnaroundTime: '30 minutes',
        result: {
          value: '2850 ng/mL (normal <500)',
          interpretation: 'Markedly elevated',
          isAbnormal: true,
          educationalNote: 'D-dimer is highly sensitive but not specific for PE. A negative D-dimer can rule out PE in low/intermediate probability patients. This elevated result requires imaging.',
        },
      },
      {
        id: 'lab-troponin',
        name: 'Troponin I',
        category: 'specialty',
        turnaroundTime: '45 minutes',
        result: {
          value: '0.08 ng/mL (normal <0.04)',
          interpretation: 'Mildly elevated',
          isAbnormal: true,
          educationalNote: 'Elevated troponin in PE indicates right ventricular strain and is a marker of submassive PE. It correlates with adverse outcomes.',
        },
      },
      {
        id: 'lab-bnp',
        name: 'BNP',
        category: 'specialty',
        turnaroundTime: '45 minutes',
        result: {
          value: '450 pg/mL (normal <100)',
          interpretation: 'Elevated',
          isAbnormal: true,
          educationalNote: 'Elevated BNP reflects right ventricular wall stress. Combined with elevated troponin, suggests hemodynamically significant PE.',
        },
      },
      {
        id: 'lab-abg',
        name: 'Arterial Blood Gas',
        category: 'specialty',
        turnaroundTime: '15 minutes',
        result: {
          value: 'pH 7.48, pCO2 30, pO2 68, HCO3 22, A-a gradient 42',
          interpretation: 'Respiratory alkalosis with hypoxemia and widened A-a gradient',
          isAbnormal: true,
          educationalNote: 'The classic ABG pattern in PE: respiratory alkalosis (hyperventilation response) with hypoxemia and widened A-a gradient indicating V/Q mismatch.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'img-cta',
        name: 'CT Pulmonary Angiography',
        modality: 'CT',
        turnaroundTime: '1 hour',
        result: {
          finding: 'Large filling defect in right main pulmonary artery extending into lobar branches. Smaller filling defects in left lower lobe segmental arteries. RV/LV ratio 1.3 (normal <1). Straightening of interventricular septum.',
          interpretation: 'Bilateral pulmonary embolism with evidence of right heart strain',
          isAbnormal: true,
          educationalNote: 'CTPA is the gold standard for PE diagnosis. RV dilation (RV/LV ratio >1) and septal bowing indicate right heart strain - markers of submassive PE requiring closer monitoring.',
        },
      },
      {
        id: 'img-doppler',
        name: 'Bilateral Lower Extremity Duplex Ultrasound',
        modality: 'Ultrasound',
        turnaroundTime: '1 hour',
        result: {
          finding: 'Non-compressible right popliteal vein with echogenic thrombus extending to distal femoral vein. Left side normal.',
          interpretation: 'Acute right lower extremity deep vein thrombosis',
          isAbnormal: true,
          educationalNote: 'DVT found in 50% of PE patients. Identifying the DVT source confirms VTE and is important for treatment planning (IVC filter consideration if anticoagulation contraindicated).',
        },
      },
      {
        id: 'img-echo',
        name: 'Echocardiogram',
        modality: 'Ultrasound',
        turnaroundTime: '1.5 hours',
        result: {
          finding: 'RV dilation with RV:LV ratio 1.2. Hypokinetic RV free wall with preserved apical motion (McConnell sign). Moderate TR with estimated RVSP 55 mmHg. D-shaped septum in systole. No LV dysfunction.',
          interpretation: 'Acute right heart strain consistent with submassive PE',
          isAbnormal: true,
          educationalNote: 'McConnell sign (apical sparing of RV hypokinesis) is relatively specific for acute PE. Echocardiography helps risk-stratify and guides decisions about thrombolysis.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial-assessment',
        name: 'Initial Assessment',
        description: 'Assess the patient and calculate pretest probability',
      },
      {
        id: 'diagnostic-workup',
        name: 'Diagnostic Workup',
        description: 'Choose appropriate diagnostic tests based on pretest probability',
      },
      {
        id: 'risk-stratification',
        name: 'Risk Stratification',
        description: 'Determine PE severity and treatment approach',
      },
      {
        id: 'treatment-initiation',
        name: 'Treatment Initiation',
        description: 'Initiate anticoagulation and determine disposition',
      },
    ],
    decisionPoints: [
      {
        id: 'decision-pretest',
        stageId: 'initial-assessment',
        question: 'Based on history and exam, what is your assessment of PE probability?',
        context: 'Patient with sudden dyspnea, recent long flight, leg symptoms, on OCPs.',
        options: [
          {
            id: 'low-prob',
            text: 'Low probability - check D-dimer only',
            consequence: 'Could miss significant PE if D-dimer elevated',
            isCorrect: false,
            feedback: 'This patient has multiple risk factors and classic symptoms. Wells score: DVT symptoms (3) + PE most likely diagnosis (3) + tachycardia (1.5) + immobilization (1.5) = 9 points (high probability).',
          },
          {
            id: 'high-prob',
            text: 'High probability - proceed directly to CTPA',
            consequence: 'Appropriate given high pretest probability',
            isCorrect: true,
            feedback: 'Correct. With Wells score >6, pretest probability is high. In high-probability patients, D-dimer adds little value and CTPA should be obtained directly.',
          },
        ],
        correctOptionId: 'high-prob',
        educationalExplanation: 'In high pretest probability PE (Wells >6), D-dimer is less useful because even a negative result doesn\'t sufficiently lower post-test probability. Proceed directly to definitive imaging.',
      },
    ],
    paths: [
      {
        id: 'optimal-path',
        name: 'Appropriate Diagnosis and Treatment',
        description: 'High suspicion leads to prompt diagnosis and appropriate therapy',
        stageSequence: ['initial-assessment', 'diagnostic-workup', 'risk-stratification', 'treatment-initiation'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Submassive Pulmonary Embolism',
      icdCode: 'I26.99',
      explanation: 'Bilateral pulmonary embolism with right heart strain but preserved systemic blood pressure. Provoked by travel-related immobility and estrogen use.',
      pathophysiology: 'Thrombus (likely from right leg DVT) embolized to pulmonary circulation, causing acute obstruction. This increases pulmonary vascular resistance, leading to right ventricular pressure overload. RV dilation compresses LV, reducing LV filling. Elevated troponin and BNP reflect myocardial strain.',
      epidemiology: 'PE affects 1-2 per 1000 adults annually. Risk factors present in >90% of cases. Air travel >4 hours doubles VTE risk for 2 weeks.',
      prognosis: 'With treatment, 30-day mortality for submassive PE is 3-5%. Without treatment, mortality approaches 30%. Risk of recurrence after provoked PE is lower than unprovoked.',
    },
    diagnosticReasoning: 'This case demonstrates the classic presentation of provoked PE: sudden dyspnea in a patient with identifiable risk factors (long flight, OCP use, family history). The triad of dyspnea, pleuritic chest pain, and hemoptysis (not all present here) is classic but seen in only 20% of cases. The clear lungs with hypoxemia pattern, elevated D-dimer, and positive CTPA confirm the diagnosis. Risk stratification using troponin, BNP, and RV function on imaging categorizes this as submassive PE.',
    keyFindings: [
      'Sudden-onset dyspnea after long-haul flight',
      'Pleuritic chest pain',
      'Unilateral leg swelling and calf pain',
      'Estrogen use (oral contraceptives)',
      'Family history of VTE',
      'Tachycardia with hypoxemia and clear lungs',
      'Elevated D-dimer, troponin, and BNP',
      'CTPA showing bilateral PE with RV strain',
    ],
    treatment: {
      immediate: 'Initiate anticoagulation immediately. Given submassive classification (RV dysfunction, elevated biomarkers, but stable BP), admit to monitored bed for close observation. Prepare for escalation if hemodynamic deterioration.',
      medications: [
        {
          name: 'Heparin',
          dose: '80 units/kg bolus then 18 units/kg/hour',
          route: 'IV',
          frequency: 'Continuous infusion',
          rationale: 'Immediate anticoagulation prevents clot propagation. UFH preferred in submassive PE where thrombolysis might be needed.',
        },
        {
          name: 'Rivaroxaban',
          dose: '15mg BID x 21 days, then 20mg daily',
          route: 'PO',
          frequency: 'As noted',
          rationale: 'After initial heparin, transition to DOAC for long-term anticoagulation. DOACs are preferred over warfarin for PE treatment.',
        },
      ],
      procedures: 'Systemic thrombolysis (tPA) not indicated currently due to stable hemodynamics. If deterioration occurs (hypotension, worsening oxygenation), thrombolysis or catheter-directed therapy should be considered.',
      monitoring: 'Continuous telemetry, serial troponins, reassess hemodynamics frequently. If BP drops <90 systolic, activate massive PE protocol. Duration of anticoagulation: minimum 3 months, likely extended given ongoing risk factors.',
      patientEducation: [
        'Discontinue oral contraceptives - discuss alternative contraception',
        'Compression stockings for post-thrombotic syndrome prevention',
        'Movement and hydration during future long flights',
        'Signs of bleeding while on anticoagulation',
        'Importance of medication adherence',
      ],
    },
    outcome: 'Ms. Rodriguez was admitted to a step-down unit for monitoring. She remained hemodynamically stable and was transitioned to rivaroxaban on day 2. She was discharged on day 3 with outpatient follow-up. Thrombophilia testing was deferred until after completion of anticoagulation. She was counseled to stop OCPs and switched to non-hormonal contraception.',
    followUp: 'Follow-up with hematology for duration of anticoagulation decision and thrombophilia workup. Repeat imaging in 3 months if considering stopping anticoagulation. Continue anticoagulation minimum 3 months, likely 6 months given size of PE and ongoing provocation (unclear if thrombophilia present).',
  },

  teachingPoints: [
    {
      topic: 'Wells Criteria for PE',
      content: 'Wells criteria estimate pretest probability: Clinical signs of DVT (3), PE most likely diagnosis (3), HR >100 (1.5), Immobilization or surgery (1.5), Previous VTE (1.5), Hemoptysis (1), Cancer (1). Score >6 = high probability. In high probability, proceed to CTPA; in low/moderate, D-dimer can rule out PE.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'PE Risk Stratification: The Key to Management',
      content: 'Massive PE: hypotension (SBP <90) or requiring vasopressors - consider thrombolysis. Submassive PE: normotensive but with RV dysfunction or elevated biomarkers - close monitoring, thrombolysis if deterioration. Low-risk PE: normal vitals, no RV dysfunction, negative biomarkers - may be candidates for outpatient treatment.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'The "Clear Lungs with Hypoxemia" Pattern',
      content: 'When you see a patient with significant hypoxemia but clear lung exam, think about PE, shunt, or anemia. In the right clinical context, clear lungs should raise PE suspicion, not lower it - this is the opposite of pneumonia or CHF.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'D-dimer: Know When It Helps and When It Doesn\'t',
      content: 'D-dimer is useful to RULE OUT PE in low/intermediate pretest probability patients. A negative D-dimer in a high-probability patient still has ~15% chance of PE. Also, D-dimer loses utility in patients with cancer, recent surgery, pregnancy, or hospitalized patients due to high false-positive rate.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Ruling out PE based on normal chest X-ray or lung exam',
    'Relying on D-dimer in high-probability patients',
    'Missing the diagnosis because "patient looks well"',
    'Delaying anticoagulation while waiting for imaging',
    'Not recognizing submassive PE markers (troponin, RV strain)',
    'Using fibrinolysis in submassive PE without clinical deterioration',
    'Forgetting to look for DVT as the source',
    'Not addressing modifiable risk factors (OCPs)',
  ],

  relatedCases: [
    'dvt-acute',
    'atrial-fibrillation',
    'chf-acute',
    'pneumonia-cap',
    'pneumothorax',
  ],
};

// ============================================
// Case: Acute Pancreatitis
// ============================================

const ACUTE_PANCREATITIS_CASE: ClinicalCase = {
  id: 'pancreatitis-gallstone',
  title: 'The Worst Abdominal Pain of My Life',
  category: 'gastroenterology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize the classic presentation of acute pancreatitis',
    'Understand the two most common causes: gallstones and alcohol',
    'Apply severity scoring systems to guide management',
    'Learn the principles of supportive care in acute pancreatitis',
  ],

  presentation: {
    chiefComplaint: 'Severe abdominal pain',
    demographics: {
      age: 48,
      sex: 'female',
      occupation: 'teacher',
      context: 'presents to ED via ambulance with severe abdominal pain',
    },
    openingParagraph: `Mrs. Chen is a 48-year-old teacher who presents to the emergency department via ambulance with severe abdominal pain that began suddenly after dinner about 8 hours ago. She describes it as the worst pain she's ever experienced, rating it 10/10. The pain started after eating a fatty meal at a restaurant and has been constant. She has been vomiting repeatedly and cannot find any position that provides relief.`,
    generalAppearance: 'Woman in obvious distress, lying still on the stretcher with knees drawn up. Appears uncomfortable and pale. Occasional retching into emesis basin.',
    vitalSigns: {
      temperature: '100.4°F (38°C)',
      heartRate: '112 bpm, regular',
      bloodPressure: '98/62 mmHg',
      respiratoryRate: '24/min',
      oxygenSaturation: '96% on room air',
      interpretation: 'Febrile, tachycardic, hypotensive, and tachypneic. This constellation suggests systemic inflammatory response - concerning for severe pancreatitis with third-spacing of fluids.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-location',
        question: 'Where exactly is the pain?',
        category: 'hpi',
        response: 'It started in my upper stomach area and goes straight through to my back. It\'s like someone is stabbing me in the stomach and back at the same time.',
        educationalNote: 'Epigastric pain radiating to the back is the classic description of pancreatitis. The retroperitoneal location of the pancreas explains the back pain.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-trigger',
        question: 'What were you doing when the pain started?',
        category: 'hpi',
        response: 'I had just finished a big dinner - we celebrated my sister\'s birthday. I had fried food and cake. About an hour after eating, the pain hit me like a ton of bricks.',
        educationalNote: 'Fatty meals stimulate CCK release, causing gallbladder contraction. If a stone impacts in the bile duct/pancreatic duct, this triggers gallstone pancreatitis.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-position',
        question: 'Does anything make it better or worse?',
        category: 'hpi',
        response: 'Nothing makes it better. Lying flat makes it worse. Curling up in a ball with my knees to my chest is the only position I can tolerate.',
        educationalNote: 'The fetal position/leaning forward position relieves pancreatic pain because it reduces stretch on the retroperitoneum and splanchnic nerves. Supine position worsens it.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-vomiting',
        question: 'Tell me about the vomiting.',
        category: 'hpi',
        response: 'I\'ve thrown up at least 10 times. At first it was food, now it\'s just bile. The vomiting doesn\'t make the pain better at all.',
        educationalNote: 'Unlike bowel obstruction or gastritis, vomiting does NOT relieve pancreatic pain. This helps distinguish it from other causes of abdominal pain with vomiting.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-gallstones',
        question: 'Any history of gallbladder problems?',
        category: 'pmh',
        response: 'A few years ago I was told I had gallstones on an ultrasound, but the doctor said we could just "watch" them since I wasn\'t having symptoms.',
        educationalNote: 'Key finding! Known gallstones + acute pancreatitis presentation = gallstone pancreatitis until proven otherwise. This is the most common cause of acute pancreatitis.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-prior-episodes',
        question: 'Have you had anything like this before?',
        category: 'pmh',
        response: 'I\'ve had some mild pain in my right side after eating fatty foods before, but nothing like this.',
        educationalNote: 'Prior biliary colic (symptomatic cholelithiasis) often precedes gallstone pancreatitis. Each episode of biliary colic is a warning sign.',
        isKeyFinding: true,
      },
      {
        id: 'sh-alcohol',
        question: 'How much alcohol do you drink?',
        category: 'social',
        response: 'Just socially - maybe a glass of wine once or twice a week. I had one glass at dinner tonight.',
        educationalNote: 'Alcohol is the second most common cause of pancreatitis (after gallstones). Usually requires significant chronic use (>5 drinks/day for years). Her minimal use makes this unlikely.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-triglycerides',
        question: 'Any history of high triglycerides or cholesterol?',
        category: 'pmh',
        response: 'I don\'t think so. My labs have always been normal.',
        educationalNote: 'Hypertriglyceridemia (usually >1000 mg/dL) is the third most common cause of pancreatitis. Worth checking in unclear cases.',
        isKeyFinding: false,
      },
      {
        id: 'meds-list',
        question: 'What medications do you take?',
        category: 'medications',
        response: 'Just metformin for pre-diabetes and lisinopril for blood pressure.',
        educationalNote: 'Neither of these are common causes of drug-induced pancreatitis. Notable causes include valproic acid, azathioprine, and GLP-1 agonists.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Abdominal',
        findings: [
          {
            id: 'abd-inspection',
            exam: 'Abdominal inspection',
            finding: 'Abdomen slightly distended. No visible bruising. Decreased movement with respiration.',
            isNormal: false,
            isKeyFinding: false,
            educationalNote: 'Early pancreatitis may have minimal findings. Grey-Turner sign (flank bruising) and Cullen sign (periumbilical bruising) are seen in severe necrotizing pancreatitis but take 24-48 hours to develop.',
          },
          {
            id: 'abd-palpation',
            exam: 'Abdominal palpation',
            finding: 'Severe tenderness in epigastrium. Voluntary and involuntary guarding. No rebound tenderness. Bowel sounds hypoactive.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Epigastric tenderness with guarding is classic. The lack of rebound suggests no free perforation. Hypoactive bowel sounds result from ileus.',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-perfusion',
            exam: 'Cardiovascular assessment',
            finding: 'Tachycardic. Peripheral pulses rapid but thready. Extremities cool with delayed capillary refill (4 seconds).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'These findings indicate hypovolemia/early shock from third-spacing of fluids into the retroperitoneum and abdominal cavity. Aggressive fluid resuscitation is critical.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'lab-lipase',
        name: 'Lipase',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: '2,850 U/L (normal <160)',
          interpretation: 'Markedly elevated (>3x upper limit = diagnostic)',
          isAbnormal: true,
          educationalNote: 'Lipase >3x upper limit of normal is one of the diagnostic criteria for acute pancreatitis. Lipase is more specific and remains elevated longer than amylase.',
        },
      },
      {
        id: 'lab-lfts',
        name: 'Liver Function Tests',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'AST 185, ALT 210, Alk Phos 280, T.Bili 2.8, D.Bili 1.9',
          interpretation: 'Elevated transaminases and bilirubin - cholestatic pattern',
          isAbnormal: true,
          educationalNote: 'ALT >3x ULN has positive predictive value >95% for gallstone etiology of pancreatitis. The cholestatic pattern confirms biliary involvement.',
        },
      },
      {
        id: 'lab-cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'WBC 16,500, Hgb 16.2, Hct 48%, Plt 285,000',
          interpretation: 'Leukocytosis and hemoconcentration',
          isAbnormal: true,
          educationalNote: 'Leukocytosis reflects inflammation. Elevated hematocrit (hemoconcentration) indicates significant fluid loss into third space - a marker of severity.',
        },
      },
      {
        id: 'lab-bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'Na 138, K 3.8, Cl 102, CO2 20, BUN 32, Cr 1.4, Glu 185, Ca 7.8',
          interpretation: 'Mild AKI, metabolic acidosis, hypocalcemia',
          isAbnormal: true,
          educationalNote: 'BUN elevation with low CO2 indicates dehydration with metabolic acidosis. Hypocalcemia occurs due to calcium sequestration in saponified fat - a marker of severity.',
        },
      },
      {
        id: 'lab-crp',
        name: 'C-Reactive Protein',
        category: 'specialty',
        turnaroundTime: '45 minutes',
        result: {
          value: '180 mg/L (normal <10)',
          interpretation: 'Markedly elevated inflammatory marker',
          isAbnormal: true,
          educationalNote: 'CRP >150 at 48 hours predicts severe pancreatitis. Useful for prognosis but measured later in the course.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'img-ruq-us',
        name: 'Right Upper Quadrant Ultrasound',
        modality: 'Ultrasound',
        turnaroundTime: '1 hour',
        result: {
          finding: 'Multiple gallstones identified. Gallbladder wall mildly thickened at 4mm. Common bile duct dilated at 9mm (normal <6mm). Pancreas poorly visualized due to overlying bowel gas.',
          interpretation: 'Cholelithiasis with biliary dilation suggesting recent stone passage or retained stone',
          isAbnormal: true,
          educationalNote: 'RUQ ultrasound is the initial imaging of choice for gallstone pancreatitis. CBD dilation suggests a stone has passed through or is still impacted.',
        },
      },
      {
        id: 'img-ct',
        name: 'CT Abdomen/Pelvis with IV Contrast',
        modality: 'CT',
        turnaroundTime: '1.5 hours',
        result: {
          finding: 'Enlarged, edematous pancreas with peripancreatic inflammatory stranding. No pancreatic necrosis identified. Moderate peripancreatic fluid collection. Gallstones confirmed. No evidence of walled-off necrosis or pseudocyst.',
          interpretation: 'Acute interstitial pancreatitis, moderate severity',
          isAbnormal: true,
          educationalNote: 'CT is not required for diagnosis but helps assess severity and complications. Best performed 72+ hours after onset to fully assess necrosis.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'initial-resuscitation',
        name: 'Initial Resuscitation',
        description: 'Aggressive IV fluid resuscitation and pain control',
      },
      {
        id: 'establish-diagnosis',
        name: 'Establish Diagnosis',
        description: 'Confirm pancreatitis and determine etiology',
      },
      {
        id: 'assess-severity',
        name: 'Assess Severity',
        description: 'Risk stratify using clinical criteria and imaging',
      },
      {
        id: 'definitive-management',
        name: 'Definitive Management',
        description: 'Plan for source control and ongoing care',
      },
    ],
    decisionPoints: [
      {
        id: 'decision-etiology',
        stageId: 'establish-diagnosis',
        question: 'What is the most likely cause of this patient\'s pancreatitis?',
        context: 'Patient with known gallstones, elevated LFTs, and onset after fatty meal.',
        options: [
          {
            id: 'gallstone',
            text: 'Gallstone pancreatitis',
            consequence: 'Correct - guides need for cholecystectomy',
            isCorrect: true,
            feedback: 'Correct. Known gallstones + elevated ALT >3x ULN + classic presentation = gallstone pancreatitis. This determines need for cholecystectomy during same admission once recovered.',
          },
          {
            id: 'alcohol',
            text: 'Alcoholic pancreatitis',
            consequence: 'Would miss the true cause',
            isCorrect: false,
            feedback: 'Unlikely given minimal alcohol use (1-2 glasses wine/week). Alcoholic pancreatitis typically requires heavy use over years.',
          },
        ],
        correctOptionId: 'gallstone',
        educationalExplanation: 'Gallstones and alcohol account for 80% of acute pancreatitis. In this case, known gallstones with elevated LFTs strongly suggests gallstone etiology.',
      },
    ],
    paths: [
      {
        id: 'optimal-path',
        name: 'Appropriate Diagnosis and Management',
        description: 'Early resuscitation, correct diagnosis, appropriate surgical consultation',
        stageSequence: ['initial-resuscitation', 'establish-diagnosis', 'assess-severity', 'definitive-management'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Gallstone Pancreatitis, Moderate Severity',
      icdCode: 'K85.10',
      explanation: 'Acute pancreatitis caused by gallstone impaction at the ampulla of Vater, leading to pancreatic ductal obstruction and autodigestion.',
      pathophysiology: 'When a gallstone impacts at the ampulla, it obstructs both the bile duct and pancreatic duct. Pancreatic enzymes become activated within the pancreas (normally activated in duodenum) leading to autodigestion. Trypsin activates other enzymes, creating a cascade of tissue damage, inflammation, and potentially necrosis.',
      epidemiology: 'Acute pancreatitis affects ~275,000 patients annually in the US. Gallstones cause ~40% of cases. Risk factors for gallstones (the "5 Fs"): Female, Fat, Forty, Fertile, Family history.',
      prognosis: 'Interstitial edematous pancreatitis (80% of cases) has mortality <3%. Necrotizing pancreatitis has mortality 10-30%. This patient has moderate disease - expected recovery with appropriate management.',
    },
    diagnosticReasoning: 'Diagnosis of acute pancreatitis requires 2 of 3 criteria: (1) characteristic abdominal pain, (2) lipase >3x ULN, (3) imaging findings. This patient meets all three. Gallstone etiology is confirmed by known cholelithiasis, elevated ALT, and dilated CBD on ultrasound. Severity assessment using BISAP score and imaging indicates moderate disease.',
    keyFindings: [
      'Epigastric pain radiating to back after fatty meal',
      'Known gallstones with previous biliary colic',
      'Lipase >3x upper limit of normal',
      'Elevated ALT suggesting gallstone etiology',
      'Dilated common bile duct on ultrasound',
      'Signs of hypovolemia requiring resuscitation',
      'Hypocalcemia and hemoconcentration as severity markers',
    ],
    treatment: {
      immediate: 'Aggressive IV fluid resuscitation with lactated Ringer\'s (250-500 mL/hour initially, goal-directed thereafter). IV pain control. NPO initially. IV antiemetics.',
      medications: [
        {
          name: 'Lactated Ringer\'s',
          dose: '250-500 mL/hour initially, then titrate to urine output and hemodynamics',
          route: 'IV',
          frequency: 'Continuous',
          rationale: 'Aggressive early fluid resuscitation (especially in first 12-24 hours) reduces necrosis and mortality. LR preferred over NS to avoid hyperchloremic acidosis.',
        },
        {
          name: 'Hydromorphone',
          dose: '0.5-1mg',
          route: 'IV',
          frequency: 'Every 3-4 hours PRN',
          rationale: 'Adequate pain control is essential. No evidence that opioids worsen outcomes despite theoretical sphincter of Oddi concerns.',
        },
        {
          name: 'Ondansetron',
          dose: '4mg',
          route: 'IV',
          frequency: 'Every 6-8 hours PRN',
          rationale: 'Antiemetic for symptom control.',
        },
      ],
      procedures: 'ERCP with sphincterotomy if cholangitis or persistent biliary obstruction present. Cholecystectomy during same admission once pancreatitis resolves (ideally within 72 hours of improvement) to prevent recurrence.',
      monitoring: 'Serial hemodynamics and urine output. Trending BUN, creatinine, hematocrit as markers of resuscitation adequacy. Serial lipase is not helpful. Reassess for complications if clinical worsening.',
      patientEducation: [
        'Gallbladder removal is necessary to prevent recurrent pancreatitis',
        'Low-fat diet during recovery',
        'Avoid alcohol to reduce pancreatic stress',
        'Warning signs of complications to report',
        'Recovery typically takes 1-2 weeks',
      ],
    },
    outcome: 'Mrs. Chen responded well to aggressive IV fluid resuscitation, receiving 6 liters in the first 24 hours. Her pain improved by day 3 and she began tolerating a low-fat diet. General surgery performed laparoscopic cholecystectomy on day 4 without complications. She was discharged on day 6 with outpatient follow-up.',
    followUp: 'Follow-up in 2 weeks to ensure continued recovery. Liver function tests to confirm resolution of biliary obstruction. Nutrition counseling for low-fat diet. Discuss long-term pancreatic health.',
  },

  teachingPoints: [
    {
      topic: 'The Atlanta Criteria: How to Diagnose Pancreatitis',
      content: 'Diagnosis requires 2 of 3: (1) Characteristic abdominal pain (acute onset, severe, epigastric, often radiating to back), (2) Serum lipase (or amylase) ≥3x upper limit of normal, (3) Characteristic imaging findings on CT/MRI/US. You don\'t need all three - two is sufficient.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Gallstone vs Alcoholic Pancreatitis',
      content: 'Gallstone pancreatitis: often female, ALT >3x ULN (PPV 95%), gallstones on imaging, onset after meals, LFT elevation. Alcoholic pancreatitis: often male, heavy alcohol use history, may have recurrent episodes, normal LFTs, no stones. The distinction matters because gallstone pancreatitis requires cholecystectomy.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Fluid Resuscitation is the Cornerstone',
      content: 'Early aggressive fluid resuscitation (first 12-24 hours) is the most important intervention in acute pancreatitis. Goal: restore intravascular volume lost to third-spacing. Target: urine output ≥0.5 mL/kg/hour, decreasing BUN, improving hemodynamics. Use Lactated Ringer\'s. Inadequate resuscitation increases necrosis risk.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'Early Cholecystectomy Prevents Recurrence',
      content: 'In gallstone pancreatitis, same-admission cholecystectomy (once pancreatitis improves) reduces risk of recurrence from 25-30% to <5%. Delaying surgery to "let inflammation settle" actually increases recurrence and readmission rates. Operate within 72 hours of improvement.',
      category: 'treatment',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Under-resuscitating with fluids (pancreatitis is a "fluid-eating monster")',
    'Ordering serial lipase levels (they don\'t guide management)',
    'Withholding opioids for pain control (sphincter of Oddi concern is theoretical)',
    'Keeping patient NPO too long (early enteral feeding is beneficial)',
    'Giving prophylactic antibiotics (not recommended without infection)',
    'Delaying cholecystectomy to a later admission',
    'Not recognizing gallstone etiology when ALT is elevated',
    'Missing necrotizing pancreatitis or infected necrosis',
  ],

  relatedCases: [
    'cholecystitis-acute',
    'biliary-colic',
    'chronic-pancreatitis',
    'pancreatic-pseudocyst',
    'bowel-obstruction',
  ],
};

// ============================================
// Case: Bacterial Meningitis
// ============================================

const BACTERIAL_MENINGITIS_CASE: ClinicalCase = {
  id: 'meningitis-bacterial',
  title: 'The Worst Headache with Fever',
  category: 'infectious-disease',
  complexity: 'advanced',

  learningObjectives: [
    'Recognize the classic presentation of bacterial meningitis',
    'Understand the urgency of empiric antibiotics in suspected meningitis',
    'Learn the proper approach to lumbar puncture and CSF analysis',
    'Apply appropriate empiric antibiotic coverage based on patient factors',
  ],

  presentation: {
    chiefComplaint: 'Severe headache and fever',
    demographics: {
      age: 22,
      sex: 'male',
      occupation: 'college student',
      context: 'brought to ED by roommate, confused and febrile',
    },
    openingParagraph: `Mr. Davis is a 22-year-old college student who is brought to the emergency department by his roommate. The roommate reports that Mr. Davis complained of a severe headache yesterday and didn't come out of his room this morning. When he checked on him, Mr. Davis was confused, had a high fever, and couldn't tolerate the lights being turned on. He had been healthy until 2 days ago when he mentioned feeling like he had "the flu."`,
    generalAppearance: 'Young man appearing acutely ill, lying in bed with eyes closed and hands covering his face. Responds to questions but answers are slow and sometimes inappropriate. Photophobic - asks to dim the lights.',
    vitalSigns: {
      temperature: '103.2°F (39.6°C)',
      heartRate: '118 bpm',
      bloodPressure: '136/82 mmHg',
      respiratoryRate: '20/min',
      oxygenSaturation: '98% on room air',
      interpretation: 'High fever with tachycardia. The blood pressure is maintained. Mental status changes with fever in a young person is concerning for CNS infection.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-headache',
        question: 'Can you describe the headache?',
        category: 'hpi',
        response: '(Patient responds slowly) It\'s... everywhere. The worst headache I\'ve ever had. It keeps getting worse.',
        educationalNote: 'Severe, progressive, generalized headache is typical of meningitis. "Worst headache of my life" should also prompt consideration of SAH.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-neck',
        question: 'Does your neck hurt?',
        category: 'hpi',
        response: 'Yeah, it\'s really stiff. It hurts to look down.',
        educationalNote: 'Neck stiffness (nuchal rigidity) is a classic meningeal sign present in ~70% of bacterial meningitis cases.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-light',
        question: 'Do the lights bother you?',
        category: 'hpi',
        response: '(Winces and covers eyes) Please, can you turn them off? They hurt my eyes so bad.',
        educationalNote: 'Photophobia occurs due to meningeal irritation and is part of the classic triad along with headache and neck stiffness.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-prodrome',
        question: 'What symptoms did you have before this?',
        category: 'hpi',
        response: '(Roommate answers) He said he had sore throat and runny nose a few days ago. Then yesterday the headache started.',
        educationalNote: 'Upper respiratory prodrome followed by meningitis suggests bacterial seeding from nasopharyngeal colonization, typical of meningococcal or pneumococcal infection.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-rash',
        question: 'Have you noticed any rash?',
        category: 'hpi',
        response: '(Roommate) I noticed some spots on his legs this morning. They looked like bruises.',
        educationalNote: 'Petechial or purpuric rash in the setting of fever and meningeal signs is highly concerning for meningococcemia - a medical emergency.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-general',
        question: 'Any medical problems?',
        category: 'pmh',
        response: '(Roommate) He\'s usually super healthy. No medical problems that I know of.',
        educationalNote: 'Bacterial meningitis can occur in otherwise healthy young adults, especially from N. meningitidis.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-vaccines',
        question: 'Has he had his meningitis vaccines?',
        category: 'pmh',
        response: '(Roommate) I think so? He had to get shots before college.',
        educationalNote: 'MenACWY vaccine is required for college but doesn\'t cover serogroup B (now ~40% of cases). MenB vaccine is recommended but not required everywhere.',
        isKeyFinding: true,
      },
      {
        id: 'sh-contacts',
        question: 'Has anyone around him been sick?',
        category: 'social',
        response: '(Roommate) There was some kind of virus going around the dorm last week. A lot of people had colds.',
        educationalNote: 'Close contacts in congregate settings (dorms, military barracks) are at risk for N. meningitidis transmission. Post-exposure prophylaxis may be needed.',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'Neurological',
        findings: [
          {
            id: 'neuro-mental',
            exam: 'Mental status',
            finding: 'Lethargic but arousable. Oriented to person only. Speech is slow. GCS 13 (E3V4M6).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Altered mental status occurs in 70-80% of bacterial meningitis and indicates serious disease. The combination of fever + headache + altered mental status = meningitis until proven otherwise.',
          },
          {
            id: 'neuro-neck',
            exam: 'Nuchal rigidity testing',
            finding: 'Marked resistance to passive neck flexion. Positive Kernig sign (pain with knee extension when hip is flexed). Positive Brudzinski sign (involuntary hip flexion when neck is flexed).',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Kernig and Brudzinski signs have high specificity (~95%) but low sensitivity (~5%) for meningitis. A negative test does NOT rule out meningitis, but a positive test is highly concerning.',
          },
          {
            id: 'neuro-cranial',
            exam: 'Cranial nerves',
            finding: 'Pupils equal and reactive. No papilledema on fundoscopy. No focal cranial nerve deficits.',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'Absence of papilledema suggests no significant raised ICP - LP can likely proceed without CT. Cranial nerve palsies can occur with meningitis but are absent here.',
          },
          {
            id: 'neuro-motor',
            exam: 'Motor examination',
            finding: 'Moves all extremities symmetrically. No focal weakness. Reflexes symmetric.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Lack of focal findings argues against brain abscess or stroke as the cause of altered mental status.',
          },
        ],
      },
      {
        system: 'Skin',
        findings: [
          {
            id: 'skin-rash',
            exam: 'Skin examination',
            finding: 'Scattered petechiae on lower extremities and trunk, some coalescing into larger purpuric lesions. Non-blanching.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Purpuric rash with meningeal signs = meningococcemia/meningococcal meningitis. This is a MEDICAL EMERGENCY requiring immediate antibiotics - don\'t wait for LP.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'lab-csf',
        name: 'Lumbar Puncture / CSF Analysis',
        category: 'specialty',
        turnaroundTime: '1 hour',
        result: {
          value: 'Opening pressure 32 cm H2O (elevated). WBC 2,200/μL with 95% neutrophils. Protein 280 mg/dL. Glucose 28 mg/dL (serum glucose 120). Gram stain: gram-positive diplococci.',
          interpretation: 'CSF profile diagnostic of bacterial meningitis. Gram stain suggests Streptococcus pneumoniae.',
          isAbnormal: true,
          educationalNote: 'Classic bacterial meningitis CSF: elevated WBC with neutrophil predominance, elevated protein, LOW glucose (<40 or <40% of serum). Gram stain is positive in 60-90% of untreated cases.',
        },
      },
      {
        id: 'lab-cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'WBC 22,500 with 88% neutrophils and 12% bands. Hgb 14.2. Plt 98,000.',
          interpretation: 'Leukocytosis with left shift. Thrombocytopenia concerning for DIC.',
          isAbnormal: true,
          educationalNote: 'Bandemia (>10% bands) indicates significant bacterial infection. Thrombocytopenia with meningococcemia suggests early DIC - a poor prognostic sign.',
        },
      },
      {
        id: 'lab-cultures',
        name: 'Blood Cultures x2',
        category: 'basic',
        turnaroundTime: '24-48 hours preliminary',
        result: {
          value: '(Preliminary at 18 hours): Gram-positive diplococci in both bottles.',
          interpretation: 'Consistent with S. pneumoniae bacteremia',
          isAbnormal: true,
          educationalNote: 'Blood cultures are positive in 50-90% of bacterial meningitis. Always draw before antibiotics if possible, but NEVER delay antibiotics for cultures.',
        },
      },
      {
        id: 'lab-lactate',
        name: 'Lactate',
        category: 'basic',
        turnaroundTime: '15 minutes',
        result: {
          value: '3.2 mmol/L (normal <2.0)',
          interpretation: 'Elevated, suggesting tissue hypoperfusion',
          isAbnormal: true,
          educationalNote: 'Elevated lactate in meningitis indicates sepsis and is associated with worse outcomes. Should prompt aggressive resuscitation.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'img-ct-head',
        name: 'CT Head without Contrast',
        modality: 'CT',
        turnaroundTime: '30 minutes',
        result: {
          finding: 'No acute intracranial hemorrhage. No mass effect or midline shift. Ventricles normal in size. No hydrocephalus.',
          interpretation: 'No contraindication to lumbar puncture',
          isAbnormal: false,
          educationalNote: 'CT before LP is needed only in select cases: altered mental status, immunocompromise, focal neuro signs, papilledema, seizures. A normal CT does NOT rule out elevated ICP.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'recognition',
        name: 'Recognition',
        description: 'Identify clinical syndrome and high-risk features',
      },
      {
        id: 'empiric-treatment',
        name: 'Empiric Treatment',
        description: 'Initiate empiric antibiotics immediately',
      },
      {
        id: 'diagnostic-confirmation',
        name: 'Diagnostic Confirmation',
        description: 'LP and CSF analysis to confirm diagnosis',
      },
      {
        id: 'definitive-therapy',
        name: 'Definitive Therapy',
        description: 'Narrow antibiotics based on culture and adjust treatment',
      },
    ],
    decisionPoints: [
      {
        id: 'decision-timing',
        stageId: 'empiric-treatment',
        question: 'When should antibiotics be started?',
        context: 'Patient with meningeal signs, altered mental status, and petechial rash.',
        options: [
          {
            id: 'after-lp',
            text: 'After lumbar puncture results return',
            consequence: 'Dangerous delay in life-threatening infection',
            isCorrect: false,
            feedback: 'This is a common and dangerous mistake. Every hour of antibiotic delay increases mortality by 3-4%. With petechial rash, treat immediately.',
          },
          {
            id: 'immediately',
            text: 'Immediately - do not wait for LP or CT',
            consequence: 'Appropriate urgent treatment',
            isCorrect: true,
            feedback: 'Correct! In suspected bacterial meningitis with severe features (altered mental status, rash), antibiotics should be given within minutes of recognition. LP can follow.',
          },
        ],
        correctOptionId: 'immediately',
        educationalExplanation: 'Time to antibiotics is the single most important modifiable factor in bacterial meningitis outcome. The goal is antibiotics within 1 hour of arrival. Never delay for CT or LP in severe cases.',
      },
    ],
    paths: [
      {
        id: 'optimal-path',
        name: 'Rapid Recognition and Treatment',
        description: 'Immediate antibiotics, then diagnostic workup',
        stageSequence: ['recognition', 'empiric-treatment', 'diagnostic-confirmation', 'definitive-therapy'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Bacterial Meningitis due to Streptococcus pneumoniae',
      icdCode: 'G00.1',
      explanation: 'Acute bacterial infection of the meninges caused by pneumococcus, presenting with classic meningeal syndrome plus systemic inflammatory response.',
      pathophysiology: 'Bacteria colonize the nasopharynx, then invade the bloodstream and cross the blood-brain barrier. In the subarachnoid space, bacterial components trigger intense inflammation (cytokines, neutrophil influx). This inflammation causes increased ICP, vasculitis, and neuronal injury. The exudate in meningitis impairs CSF flow and absorption.',
      epidemiology: 'S. pneumoniae is the most common cause of bacterial meningitis in adults (>50% of cases). Mortality is 20-30% even with treatment, and 30-50% of survivors have neurological sequelae.',
      prognosis: 'With appropriate treatment, survival is 70-80%. However, risk of permanent neurological deficits (hearing loss, cognitive impairment, focal deficits) is 30-50%.',
    },
    diagnosticReasoning: 'This case demonstrates the classic meningitis triad: headache, fever, and nuchal rigidity - present in only 40-50% of cases. The addition of altered mental status created a tetrad that, along with petechial rash, demanded immediate empiric treatment. CSF analysis confirmed bacterial meningitis with neutrophilic pleocytosis, elevated protein, and low glucose. Gram stain showing gram-positive diplococci identified pneumococcus.',
    keyFindings: [
      'Classic triad: severe headache, fever, neck stiffness',
      'Altered mental status',
      'Positive Kernig and Brudzinski signs',
      'Petechial/purpuric rash',
      'CSF: neutrophilic pleocytosis, high protein, low glucose',
      'Gram-positive diplococci on CSF gram stain',
      'Bacteremia with same organism',
    ],
    treatment: {
      immediate: 'Empiric antibiotics started within 15 minutes of arrival. Dexamethasone given before first antibiotic dose. IV fluids for hemodynamic support. ICU admission for close neurological monitoring.',
      medications: [
        {
          name: 'Ceftriaxone',
          dose: '2g',
          route: 'IV',
          frequency: 'Every 12 hours',
          rationale: '3rd-generation cephalosporin provides excellent CNS penetration and covers S. pneumoniae and N. meningitidis.',
        },
        {
          name: 'Vancomycin',
          dose: '15-20 mg/kg',
          route: 'IV',
          frequency: 'Every 8-12 hours',
          rationale: 'Added for drug-resistant S. pneumoniae coverage until sensitivities available. Up to 30% of pneumococci may be penicillin non-susceptible.',
        },
        {
          name: 'Dexamethasone',
          dose: '0.15 mg/kg',
          route: 'IV',
          frequency: 'Every 6 hours x 4 days',
          rationale: 'Adjunctive steroids (given before or with first antibiotic dose) reduce mortality and neurological sequelae in pneumococcal meningitis.',
        },
      ],
      procedures: 'Lumbar puncture for diagnosis. Repeat LP may be needed if clinical improvement is not observed at 48-72 hours.',
      monitoring: 'Neurological checks every 1-2 hours. Monitor for complications: seizures, cerebral edema, hydrocephalus, SIADH. Audiology evaluation before discharge.',
      patientEducation: [
        'Contact tracing and prophylaxis for close contacts (if N. meningitidis)',
        'Risk of hearing loss - follow-up audiology testing',
        'Vaccination if not previously vaccinated',
        'Signs of complications to watch for after discharge',
      ],
    },
    outcome: 'Mr. Davis was intubated on hospital day 2 due to declining mental status but was extubated on day 5 as he improved. CSF culture confirmed S. pneumoniae sensitive to penicillin, allowing de-escalation. He completed 14 days of IV ceftriaxone. Audiology testing revealed mild high-frequency hearing loss in the left ear. He was discharged to acute rehabilitation and returned to school 3 months later.',
    followUp: 'Follow-up audiology in 1 month. Neurology follow-up for cognitive assessment. Ensure pneumococcal vaccination is up to date. Long-term monitoring for late neurological complications.',
  },

  teachingPoints: [
    {
      topic: 'The Meningitis Triad and Why It\'s Not Enough',
      content: 'Classic triad (headache, fever, neck stiffness) is present in only 40-50% of bacterial meningitis. However, >95% have at least 2 of: headache, fever, neck stiffness, altered mental status. If there\'s any suspicion, treat empirically.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'NEVER Delay Antibiotics for Meningitis',
      content: 'Each hour of antibiotic delay increases mortality by 3-4%. If you suspect bacterial meningitis, give antibiotics immediately. Blood cultures can be drawn first (takes 2 minutes). LP can wait. CT can wait. Antibiotics cannot wait.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'CSF Interpretation in Meningitis',
      content: 'Bacterial: WBC 1000-10000, >80% PMNs, protein >200, glucose <40 (or <40% serum). Viral: WBC 10-500, lymphocyte predominance, protein 50-100, glucose normal. Fungal/TB: WBC 10-500, lymphocytes, very high protein, very low glucose.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Dexamethasone in Bacterial Meningitis',
      content: 'Give dexamethasone (0.15 mg/kg q6h x 4 days) BEFORE or WITH the first antibiotic dose. Reduces mortality and hearing loss in pneumococcal meningitis. Less benefit if given after antibiotics. Discontinue if non-pneumococcal cause confirmed.',
      category: 'treatment',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Waiting for CT before giving antibiotics',
    'Waiting for LP before giving antibiotics',
    'Forgetting dexamethasone or giving it after antibiotics',
    'Not covering for resistant pneumococcus (add vancomycin)',
    'Missing the diagnosis because classic triad is absent',
    'Forgetting to consider meningitis in elderly who may have atypical presentation',
    'Not arranging audiology follow-up',
    'Forgetting contact prophylaxis for meningococcal meningitis',
  ],

  relatedCases: [
    'viral-meningitis',
    'encephalitis',
    'brain-abscess',
    'sepsis-urosepsis',
    'subarachnoid-hemorrhage',
  ],
};

// ============================================
// Case: Atrial Fibrillation with RVR
// ============================================

const AFIB_RVR_CASE: ClinicalCase = {
  id: 'afib-rvr',
  title: 'The Racing Heart',
  category: 'cardiology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize atrial fibrillation on ECG and clinical presentation',
    'Understand rate control vs rhythm control strategies',
    'Apply CHA2DS2-VASc for stroke risk stratification',
    'Learn appropriate anticoagulation decision-making in AF',
  ],

  presentation: {
    chiefComplaint: 'Heart racing and shortness of breath',
    demographics: {
      age: 67,
      sex: 'female',
      occupation: 'retired nurse',
      context: 'presents to ED with palpitations and dyspnea',
    },
    openingParagraph: `Mrs. Thompson is a 67-year-old retired nurse who presents to the emergency department with the sudden onset of rapid heartbeat and shortness of breath that began about 3 hours ago while she was gardening. She describes feeling her heart "flopping around" in her chest and noticed she couldn't catch her breath with her usual activities. She feels lightheaded but has not passed out.`,
    generalAppearance: 'Alert, mildly anxious woman in mild respiratory distress. Speaking in full sentences but appears to be breathing rapidly. Skin is warm and dry.',
    vitalSigns: {
      temperature: '98.2°F (36.8°C)',
      heartRate: '142 bpm, irregularly irregular',
      bloodPressure: '118/78 mmHg',
      respiratoryRate: '22/min',
      oxygenSaturation: '94% on room air',
      interpretation: 'Tachycardia with irregular rhythm - concerning for atrial fibrillation with rapid ventricular response. Blood pressure is maintained. Mild hypoxemia likely related to decreased cardiac output.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-onset',
        question: 'Tell me exactly what happened when this started.',
        category: 'hpi',
        response: 'I was bending over planting flowers when suddenly my heart started racing. It felt like it was beating all over the place - not a regular rhythm at all. I had to sit down because I got dizzy.',
        educationalNote: 'The "irregular irregularity" description is classic for AF. Sudden onset with exertion is common. Patients often accurately describe the rhythm abnormality.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-prior',
        question: 'Has this ever happened before?',
        category: 'hpi',
        response: 'I\'ve had a few brief episodes where my heart felt like it was racing, maybe lasting a minute or two, but nothing like this. This has been going on for 3 hours.',
        educationalNote: 'Brief prior episodes suggest paroxysmal AF. Episodes lasting hours represent progression. Duration matters for cardioversion decisions (>48 hours = TEE needed or anticoagulation x 3 weeks).',
        isKeyFinding: true,
      },
      {
        id: 'hpi-chest-pain',
        question: 'Any chest pain?',
        category: 'hpi',
        response: 'No real pain, just this uncomfortable awareness of my heart pounding and the breathlessness.',
        educationalNote: 'Lack of chest pain is reassuring for absence of ischemia, though AF can cause demand ischemia in patients with CAD.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-cardiac',
        question: 'Do you have any heart problems?',
        category: 'pmh',
        response: 'I have high blood pressure, controlled with medication. No heart attacks or anything like that. My doctor mentioned my heart was slightly enlarged on an echo a couple years ago.',
        educationalNote: 'Hypertension is the most common risk factor for AF. LVH from hypertension creates substrate for AF. Both are CHA2DS2-VASc factors.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-dm',
        question: 'Do you have diabetes?',
        category: 'pmh',
        response: 'Yes, type 2 diabetes for about 10 years. Well controlled with metformin.',
        educationalNote: 'Diabetes is a CHA2DS2-VASc point and increases stroke risk. Important for anticoagulation decision.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-stroke',
        question: 'Any history of stroke or TIA?',
        category: 'pmh',
        response: 'No, thankfully.',
        educationalNote: 'Prior stroke/TIA is the strongest predictor of stroke in AF (2 CHA2DS2-VASc points). Its absence doesn\'t preclude anticoagulation.',
        isKeyFinding: false,
      },
      {
        id: 'pmh-thyroid',
        question: 'Any thyroid problems?',
        category: 'pmh',
        response: 'I had my thyroid checked a few months ago - it was normal.',
        educationalNote: 'Hyperthyroidism is a reversible cause of AF. Always check TSH in new AF.',
        isKeyFinding: false,
      },
      {
        id: 'sh-alcohol',
        question: 'How much alcohol do you drink?',
        category: 'social',
        response: 'Just wine with dinner, maybe 1-2 glasses a day.',
        educationalNote: 'Moderate alcohol consumption increases AF risk. "Holiday heart" from binge drinking is a classic precipitant. Worth discussing in any AF patient.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications are you taking?',
        category: 'medications',
        response: 'Lisinopril 20mg, metformin 1000mg twice daily, and atorvastatin 40mg at night.',
        educationalNote: 'No AV nodal blocking agents on her regimen, which explains the rapid ventricular rate. Will need rate control added.',
        isKeyFinding: false,
      },
    ],

    physicalExam: [
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-rhythm',
            exam: 'Cardiac auscultation',
            finding: 'Irregularly irregular rhythm, rate approximately 140. Variable S1 intensity. No murmurs appreciated. S2 normal.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Irregularly irregular rhythm is pathognomonic for AF (or MAT). Variable S1 intensity reflects varying diastolic filling times between beats.',
          },
          {
            id: 'cv-jvp',
            exam: 'Jugular veins',
            finding: 'JVP 8 cm, no prominent A waves (absent in AF)',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'Absent A waves in JVP confirm loss of atrial contraction. JVP not significantly elevated argues against heart failure.',
          },
          {
            id: 'cv-pulses',
            exam: 'Peripheral pulses',
            finding: 'Pulse deficit present (radial rate 120, apical rate 140). Pulses irregularly irregular.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Pulse deficit (apical rate > radial rate) occurs because some ventricular contractions don\'t generate enough pressure to be felt peripherally. Common in rapid AF.',
          },
        ],
      },
      {
        system: 'Respiratory',
        findings: [
          {
            id: 'resp-lungs',
            exam: 'Lung auscultation',
            finding: 'Clear to auscultation bilaterally. No crackles or wheezes.',
            isNormal: true,
            isKeyFinding: true,
            educationalNote: 'Clear lungs argue against heart failure. Some patients with new AF have subclinical HF that becomes apparent with loss of atrial kick.',
          },
        ],
      },
      {
        system: 'Extremities',
        findings: [
          {
            id: 'ext-edema',
            exam: 'Lower extremities',
            finding: 'No peripheral edema. Warm and well-perfused.',
            isNormal: true,
            isKeyFinding: false,
            educationalNote: 'Absence of edema supports that cardiac function is reasonably preserved despite the arrhythmia.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'lab-tsh',
        name: 'TSH',
        category: 'basic',
        turnaroundTime: '1 hour',
        result: {
          value: '2.1 mIU/L (normal 0.4-4.0)',
          interpretation: 'Normal thyroid function',
          isAbnormal: false,
          educationalNote: 'TSH should be checked in all new AF. If low, check free T4. Hyperthyroidism is a reversible cause of AF.',
        },
      },
      {
        id: 'lab-bnp',
        name: 'BNP',
        category: 'specialty',
        turnaroundTime: '30 minutes',
        result: {
          value: '320 pg/mL (normal <100)',
          interpretation: 'Mildly elevated',
          isAbnormal: true,
          educationalNote: 'BNP is often elevated in AF even without clinical HF due to atrial stretch. Moderate elevation warrants echo to assess ventricular function.',
        },
      },
      {
        id: 'lab-troponin',
        name: 'Troponin I',
        category: 'specialty',
        turnaroundTime: '45 minutes',
        result: {
          value: '0.02 ng/mL (normal <0.04)',
          interpretation: 'Normal',
          isAbnormal: false,
          educationalNote: 'Normal troponin is reassuring. Rapid AF can cause demand ischemia and mild troponin elevation even without coronary disease.',
        },
      },
      {
        id: 'lab-bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'Na 140, K 3.8, Cl 102, CO2 24, BUN 18, Cr 0.9, Glu 145',
          interpretation: 'Largely normal, mild hyperglycemia',
          isAbnormal: false,
          educationalNote: 'Electrolytes (especially K and Mg) are important - hypokalemia and hypomagnesemia can trigger/perpetuate AF.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'img-ecg',
        name: '12-Lead ECG',
        modality: 'X-ray',
        turnaroundTime: '5 minutes',
        result: {
          finding: 'Irregularly irregular rhythm, rate 145. No P waves visible. Fibrillatory baseline. Normal QRS duration. No ST changes or T wave inversions.',
          interpretation: 'Atrial fibrillation with rapid ventricular response',
          isAbnormal: true,
          educationalNote: 'Classic AF ECG: irregular R-R intervals, absent P waves, fibrillatory baseline ("f waves"). Narrow QRS suggests AV node is conducting normally.',
        },
      },
      {
        id: 'img-cxr',
        name: 'Chest X-ray',
        modality: 'X-ray',
        turnaroundTime: '30 minutes',
        result: {
          finding: 'Heart size at upper limits of normal. No pulmonary vascular congestion. Clear lung fields. No effusion.',
          interpretation: 'Mild cardiomegaly without heart failure',
          isAbnormal: false,
          educationalNote: 'Mild cardiomegaly is consistent with her history of LVH. Clear lungs are reassuring for absence of acute HF.',
        },
      },
      {
        id: 'img-echo',
        name: 'Transthoracic Echocardiogram',
        modality: 'Ultrasound',
        turnaroundTime: '1.5 hours',
        result: {
          finding: 'Dilated left atrium (4.8 cm). Mild concentric LVH. LVEF 50-55%. No significant valvular disease. No LA thrombus visualized (limited study).',
          interpretation: 'Structural heart disease predisposing to AF',
          isAbnormal: true,
          educationalNote: 'LA dilation and LVH are common findings in AF patients. They represent both cause and consequence. LVEF preservation is reassuring. TTE cannot definitively rule out LA thrombus.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'recognition',
        name: 'Recognition',
        description: 'Identify the arrhythmia and hemodynamic status',
      },
      {
        id: 'acute-management',
        name: 'Acute Management',
        description: 'Decide on rate vs rhythm control approach',
      },
      {
        id: 'stroke-risk',
        name: 'Stroke Risk Assessment',
        description: 'Calculate CHA2DS2-VASc and plan anticoagulation',
      },
      {
        id: 'long-term-plan',
        name: 'Long-term Planning',
        description: 'Establish ongoing AF management strategy',
      },
    ],
    decisionPoints: [
      {
        id: 'decision-strategy',
        stageId: 'acute-management',
        question: 'What is the initial management strategy?',
        context: 'Hemodynamically stable patient with AF and RVR, duration approximately 3 hours.',
        options: [
          {
            id: 'cardioversion-immediate',
            text: 'Immediate electrical cardioversion',
            consequence: 'Appropriate option but rate control also reasonable',
            isCorrect: false,
            feedback: 'Cardioversion is an option since duration <48 hours, but rate control is equally valid for stable patients and may be preferred initially.',
          },
          {
            id: 'rate-control',
            text: 'Rate control with beta-blocker or calcium channel blocker',
            consequence: 'Appropriate first-line approach for stable AF with RVR',
            isCorrect: true,
            feedback: 'Correct. In hemodynamically stable patients, rate control is first-line. Many will spontaneously convert with rate control alone, especially in new-onset AF.',
          },
          {
            id: 'antiarrhythmic',
            text: 'Start amiodarone for rhythm control',
            consequence: 'Overly aggressive for first episode; rate control preferred',
            isCorrect: false,
            feedback: 'Antiarrhythmics are not first-line for acute AF management. They have significant side effects and rate control is equally effective for symptom relief.',
          },
        ],
        correctOptionId: 'rate-control',
        educationalExplanation: 'AFFIRM and RACE trials showed no mortality benefit of rhythm vs rate control. Rate control is simpler, safer, and effective for symptom relief. Reserve rhythm control for patients who remain symptomatic despite adequate rate control.',
      },
    ],
    paths: [
      {
        id: 'optimal-path',
        name: 'Appropriate Rate Control and Anticoagulation',
        description: 'Rate control, stroke risk assessment, and anticoagulation initiation',
        stageSequence: ['recognition', 'acute-management', 'stroke-risk', 'long-term-plan'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Paroxysmal Atrial Fibrillation with Rapid Ventricular Response',
      icdCode: 'I48.0',
      explanation: 'New-onset atrial fibrillation with rapid ventricular rate in a patient with structural heart disease (LVH, LA dilation) and multiple risk factors.',
      pathophysiology: 'AF results from rapid, chaotic electrical activity in the atria, often originating from ectopic foci near the pulmonary veins. Risk factors like hypertension cause atrial remodeling (fibrosis, dilation) that creates the substrate for AF. Triggers (alcohol, caffeine, illness) initiate the arrhythmia. The irregular, rapid ventricular rate causes symptoms through decreased cardiac output and AV desynchrony.',
      epidemiology: 'AF affects 33 million people worldwide. Prevalence increases with age (10% in those >80). Risk factors: hypertension (most common), age, diabetes, heart failure, valvular disease, obesity, sleep apnea.',
      prognosis: 'AF is associated with 5x increased stroke risk, 2x mortality, and significant morbidity. With appropriate rate control and anticoagulation, most patients do well. Progression from paroxysmal to persistent/permanent is common.',
    },
    diagnosticReasoning: 'The diagnosis was straightforward: irregularly irregular rhythm on exam and ECG with absent P waves confirms AF. RVR is defined by rate >100. The next step was determining if this was truly new or undiagnosed longstanding AF. Her brief prior symptoms suggest paroxysmal AF that progressed. Risk stratification and management planning followed.',
    keyFindings: [
      'Irregularly irregular rhythm at 142 bpm',
      'ECG: absent P waves, fibrillatory baseline, irregular R-R',
      'Hemodynamically stable (preserved BP)',
      'Duration <48 hours',
      'Underlying structural heart disease (LVH, LA dilation)',
      'Multiple stroke risk factors (age, HTN, DM, female)',
    ],
    treatment: {
      immediate: 'IV metoprolol for rate control. Goal heart rate <110 at rest initially. Monitor for response.',
      medications: [
        {
          name: 'Metoprolol',
          dose: '5mg IV, then 25mg PO BID',
          route: 'IV then PO',
          frequency: 'BID',
          rationale: 'Beta-blockers are first-line for rate control in AF. They reduce rate by slowing AV node conduction. Titrate to effect.',
        },
        {
          name: 'Apixaban',
          dose: '5mg BID',
          route: 'PO',
          frequency: 'Twice daily',
          rationale: 'DOACs are preferred over warfarin for stroke prevention in nonvalvular AF. CHA2DS2-VASc = 4 (age, female, HTN, DM) indicates high stroke risk.',
        },
      ],
      procedures: 'Cardioversion not pursued as she converted to sinus rhythm with rate control. If she remained in AF and symptomatic, cardioversion could be considered since onset <48 hours.',
      monitoring: 'Telemetry monitoring. Follow heart rate trend. If ongoing AF, consider rhythm monitoring to assess AF burden and guide long-term strategy.',
      patientEducation: [
        'Importance of anticoagulation for stroke prevention',
        'Signs of stroke to seek emergency care',
        'Lifestyle modifications: limit alcohol, treat sleep apnea if present',
        'Rate-controlling medication adherence',
        'When to seek care (severe symptoms, chest pain, syncope)',
      ],
    },
    outcome: 'Mrs. Thompson\'s heart rate decreased to 85 bpm with IV metoprolol. She spontaneously converted to sinus rhythm about 4 hours after presentation. She was started on apixaban for stroke prevention and transitioned to oral metoprolol. She was discharged the following day with cardiology follow-up and a 2-week event monitor to assess for recurrence.',
    followUp: 'Cardiology follow-up in 2 weeks. Event monitor to assess AF recurrence and burden. If paroxysmal AF is confirmed, discussion of rhythm control strategies (cardioversion, antiarrhythmic drugs, or ablation) vs continued rate control. Continue anticoagulation indefinitely given high CHA2DS2-VASc score.',
  },

  teachingPoints: [
    {
      topic: 'CHA2DS2-VASc: Know It Cold',
      content: 'Congestive HF (1), Hypertension (1), Age ≥75 (2), Diabetes (1), Stroke/TIA (2), Vascular disease (1), Age 65-74 (1), Sex category/female (1). Score ≥2 in men or ≥3 in women indicates anticoagulation. This patient scored 4.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Rate Control: Simple and Effective',
      content: 'Rate control is first-line for most AF. Options: beta-blockers (metoprolol, atenolol), non-DHP CCBs (diltiazem, verapamil), or digoxin. Target: HR <110 at rest (RACE II trial). Tighter control (<80) for symptomatic patients. Combine agents if needed.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'DOACs vs Warfarin in AF',
      content: 'DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are preferred over warfarin for nonvalvular AF. They have better safety profiles, fixed dosing, no monitoring, and equal or superior efficacy. Warfarin reserved for mechanical valves or severe mitral stenosis.',
      category: 'treatment',
      importance: 'critical',
    },
    {
      topic: 'The 48-Hour Rule for Cardioversion',
      content: 'If AF duration <48 hours (reliably), cardioversion can proceed without prolonged anticoagulation or TEE. If duration ≥48 hours or unknown, either anticoagulate for 3 weeks pre-cardioversion OR perform TEE to rule out LA thrombus before cardioversion.',
      category: 'treatment',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Forgetting to calculate CHA2DS2-VASc and initiate anticoagulation',
    'Using rate-controlling agents in decompensated heart failure (avoid CCBs, use cautious beta-blockers)',
    'Cardioverting without considering thrombus risk if duration >48 hours',
    'Over-treating rate (very strict control offers no benefit and may cause bradycardia)',
    'Not checking TSH in new AF',
    'Assuming paroxysmal AF doesn\'t need anticoagulation',
    'Using anticoagulation based on rhythm presence rather than stroke risk score',
    'Missing underlying causes (sleep apnea, alcohol, hyperthyroidism)',
  ],

  relatedCases: [
    'chf-acute',
    'stemi-classic',
    'hypertensive-emergency',
    'stroke-acute-ischemic',
    'atrial-flutter',
  ],
};

// ============================================
// Case: Acute Kidney Injury
// ============================================

const AKI_CASE: ClinicalCase = {
  id: 'aki-prerenal',
  title: 'The Elderly Woman Who Stopped Eating',
  category: 'nephrology',
  complexity: 'intermediate',

  learningObjectives: [
    'Recognize and classify acute kidney injury using KDIGO criteria',
    'Differentiate prerenal, intrinsic, and postrenal AKI',
    'Understand the urinalysis and fractional excretion of sodium in AKI',
    'Learn appropriate fluid management in different types of AKI',
  ],

  presentation: {
    chiefComplaint: 'Weakness and confusion',
    demographics: {
      age: 82,
      sex: 'female',
      occupation: 'retired',
      context: 'brought to ED by daughter, found lethargic at home',
    },
    openingParagraph: `Mrs. Garcia is an 82-year-old woman brought to the ED by her daughter who found her mother confused and weak at home. The daughter reports that Mrs. Garcia has been eating and drinking very little over the past week after a "stomach bug" with vomiting and diarrhea. She lives alone and the daughter hadn't visited in a week. Today she found her mother barely able to get out of bed and not making sense when she talked.`,
    generalAppearance: 'Elderly woman appearing chronically and acutely ill. Thin, appears dehydrated with dry mucous membranes and sunken eyes. Lethargic but arousable. Skin tenting present.',
    vitalSigns: {
      temperature: '97.8°F (36.5°C)',
      heartRate: '102 bpm',
      bloodPressure: '94/58 mmHg lying, 78/52 sitting',
      respiratoryRate: '18/min',
      oxygenSaturation: '97% on room air',
      interpretation: 'Hypotensive with significant orthostatic change (>20 mmHg systolic drop). Tachycardic. Low-grade temperature. These findings indicate severe volume depletion.',
    },
  },

  availableData: {
    historyQuestions: [
      {
        id: 'hpi-illness',
        question: 'Tell me about the illness she had.',
        category: 'hpi',
        response: '(Daughter) She called me about a week ago saying she had diarrhea and vomiting. She said it was probably something she ate. I told her to drink fluids and rest. But when I came today, she seemed so much worse.',
        educationalNote: 'GI losses (vomiting, diarrhea) are a classic cause of prerenal AKI. In elderly, even short periods of decreased intake can cause significant volume depletion.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-intake',
        question: 'How much has she been eating and drinking?',
        category: 'hpi',
        response: '(Daughter) She said she couldn\'t keep anything down at first. Then I guess she just stopped trying. She said she hasn\'t had much of an appetite. Looking at her kitchen, there\'s hardly any food gone from the fridge.',
        educationalNote: 'Decreased oral intake compounds GI losses. Elderly are particularly vulnerable to dehydration due to decreased thirst mechanism and renal concentrating ability.',
        isKeyFinding: true,
      },
      {
        id: 'hpi-urine',
        question: 'Has she been urinating?',
        category: 'hpi',
        response: '(Daughter) She said she hasn\'t been going much. When I asked about the bathroom, she said she only went once or twice yesterday, and it was very dark colored.',
        educationalNote: 'Oliguria (<500 mL/day) with concentrated urine is classic for prerenal AKI - the kidneys are appropriately retaining fluid.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-kidney',
        question: 'Any kidney problems?',
        category: 'pmh',
        response: '(Daughter) Her doctor told her she had "mild kidney problems" - I think he called it CKD stage 3. But she\'s never been on dialysis or anything.',
        educationalNote: 'Pre-existing CKD significantly increases risk of AKI. Even "mild" CKD (stage 3) reduces renal reserve and ability to handle volume/hemodynamic stress.',
        isKeyFinding: true,
      },
      {
        id: 'pmh-cardiac',
        question: 'What other medical problems does she have?',
        category: 'pmh',
        response: '(Daughter) High blood pressure, heart problems - she had a "weak heart" they said, diabetes, and arthritis.',
        educationalNote: 'Heart failure ("weak heart"), diabetes, and hypertension all affect kidney function. This triad of comorbidities is common in elderly with CKD.',
        isKeyFinding: true,
      },
      {
        id: 'meds-list',
        question: 'What medications does she take?',
        category: 'medications',
        response: '(Daughter pulls out bag) Lisinopril, Lasix, metoprolol, metformin, and she takes ibuprofen for her arthritis - she buys it herself.',
        educationalNote: 'This medication list is a "perfect storm" for AKI: ACE inhibitor (reduces GFR), diuretic (volume depletion), and NSAID (renal vasoconstriction). Called the "triple whammy."',
        isKeyFinding: true,
      },
    ],

    physicalExam: [
      {
        system: 'General/Skin',
        findings: [
          {
            id: 'gen-hydration',
            exam: 'Assessment of hydration',
            finding: 'Dry mucous membranes. Furrowed tongue. Skin tenting over sternum (>3 seconds). Sunken eyes. No axillary moisture.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'These are classic signs of severe dehydration. Skin tenting over sternum is more reliable than over hands/arms in elderly (age-related skin changes).',
          },
        ],
      },
      {
        system: 'Cardiovascular',
        findings: [
          {
            id: 'cv-assessment',
            exam: 'Cardiovascular examination',
            finding: 'Tachycardic, regular rhythm. No murmurs. JVP flat (not visible even at 0°). Pulses thready.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Flat JVP with tachycardia and thready pulses indicates significant hypovolemia. The absence of elevated JVP helps distinguish prerenal from cardiorenal AKI.',
          },
        ],
      },
      {
        system: 'Abdominal',
        findings: [
          {
            id: 'abd-exam',
            exam: 'Abdominal examination',
            finding: 'Soft, non-distended. Mild diffuse tenderness. Hypoactive bowel sounds. No bladder distension on palpation.',
            isNormal: false,
            isKeyFinding: true,
            educationalNote: 'Lack of bladder distension argues against urinary obstruction (postrenal AKI). Hypoactive bowels may reflect ileus from hypokalemia or general debility.',
          },
        ],
      },
    ],

    labOrders: [
      {
        id: 'lab-bmp',
        name: 'Basic Metabolic Panel',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'Na 148, K 5.8, Cl 112, CO2 18, BUN 92, Cr 4.2 (baseline 1.4), Glu 245',
          interpretation: 'Severe AKI (Cr tripled), hypernatremia, hyperkalemia, metabolic acidosis',
          isAbnormal: true,
          educationalNote: 'Cr rising from 1.4 to 4.2 = KDIGO Stage 3 AKI (>3x baseline). BUN:Cr ratio >20:1 suggests prerenal. Hyperkalemia is dangerous and needs urgent treatment.',
        },
      },
      {
        id: 'lab-ua',
        name: 'Urinalysis',
        category: 'basic',
        turnaroundTime: '30 minutes',
        result: {
          value: 'Sp Gr 1.035, pH 5.0, trace protein, no blood, no WBC, no bacteria, rare hyaline casts',
          interpretation: 'Concentrated urine with benign sediment',
          isAbnormal: true,
          educationalNote: 'High specific gravity indicates kidneys CAN concentrate urine (functioning tubules). Bland sediment (no cells, no casts) favors prerenal over ATN. Hyaline casts are nonspecific.',
        },
      },
      {
        id: 'lab-fena',
        name: 'Fractional Excretion of Sodium',
        category: 'specialty',
        turnaroundTime: '30 minutes',
        result: {
          value: 'FENa 0.4%',
          interpretation: 'Low (<1%), consistent with prerenal azotemia',
          isAbnormal: true,
          educationalNote: 'FENa <1% = prerenal (kidneys avidly retaining sodium). FENa >2% = intrinsic renal (tubular damage prevents sodium reabsorption). Exception: FENa unreliable if on diuretics (use FEUrea instead).',
        },
      },
      {
        id: 'lab-cbc',
        name: 'Complete Blood Count',
        category: 'basic',
        turnaroundTime: '20 minutes',
        result: {
          value: 'WBC 12.5, Hgb 10.2, Hct 32%, Plt 285,000',
          interpretation: 'Mild leukocytosis, anemia (likely CKD-related)',
          isAbnormal: true,
          educationalNote: 'The elevated hematocrit relative to baseline would suggest hemoconcentration from dehydration. Pre-existing anemia of CKD is common.',
        },
      },
      {
        id: 'lab-lactate',
        name: 'Lactate',
        category: 'basic',
        turnaroundTime: '15 minutes',
        result: {
          value: '2.8 mmol/L (normal <2.0)',
          interpretation: 'Mildly elevated suggesting tissue hypoperfusion',
          isAbnormal: true,
          educationalNote: 'Elevated lactate confirms tissue hypoperfusion from hypovolemia. Should improve with fluid resuscitation.',
        },
      },
    ],

    imagingOrders: [
      {
        id: 'img-renal-us',
        name: 'Renal Ultrasound',
        modality: 'Ultrasound',
        turnaroundTime: '1 hour',
        result: {
          finding: 'Kidneys bilaterally small (9 cm each, lower normal). Echogenic parenchyma consistent with chronic kidney disease. No hydronephrosis. Bladder empty post-void.',
          interpretation: 'Chronic kidney disease changes; no obstruction',
          isAbnormal: true,
          educationalNote: 'Small, echogenic kidneys indicate underlying CKD. Absence of hydronephrosis rules out obstructive (postrenal) cause. Post-void residual rules out bladder outlet obstruction.',
        },
      },
    ],
  },

  caseFlow: {
    stages: [
      {
        id: 'recognize-aki',
        name: 'Recognize AKI',
        description: 'Identify acute kidney injury and classify severity',
      },
      {
        id: 'determine-etiology',
        name: 'Determine Etiology',
        description: 'Differentiate prerenal, intrinsic, and postrenal causes',
      },
      {
        id: 'immediate-management',
        name: 'Immediate Management',
        description: 'Address life-threatening complications and initiate treatment',
      },
      {
        id: 'ongoing-care',
        name: 'Ongoing Care',
        description: 'Monitor recovery and prevent future episodes',
      },
    ],
    decisionPoints: [
      {
        id: 'decision-etiology',
        stageId: 'determine-etiology',
        question: 'What is the most likely etiology of this patient\'s AKI?',
        context: 'Elderly patient with GI losses, decreased intake, dehydration on exam, FENa <1%, bland sediment.',
        options: [
          {
            id: 'prerenal',
            text: 'Prerenal azotemia from hypovolemia',
            consequence: 'Correct - guides appropriate fluid resuscitation',
            isCorrect: true,
            feedback: 'Correct. History of GI losses and poor intake, physical signs of dehydration, BUN:Cr >20, FENa <1%, concentrated urine with bland sediment all point to prerenal etiology.',
          },
          {
            id: 'atn',
            text: 'Acute tubular necrosis',
            consequence: 'Would miss opportunity for volume resuscitation',
            isCorrect: false,
            feedback: 'ATN typically shows muddy brown casts, FENa >2%, and isosthenuria (fixed specific gravity ~1.010). This patient has findings of preserved tubular function.',
          },
          {
            id: 'obstruction',
            text: 'Urinary tract obstruction',
            consequence: 'Would delay appropriate treatment',
            isCorrect: false,
            feedback: 'No hydronephrosis on ultrasound, no bladder distension, and no history suggestive of obstruction rule this out.',
          },
        ],
        correctOptionId: 'prerenal',
        educationalExplanation: 'The workup clearly supports prerenal AKI: appropriate history, clinical dehydration, FENa <1%, BUN:Cr >20:1, concentrated urine, and bland sediment. The kidneys are responding appropriately to hypovolemia by conserving sodium and water.',
      },
    ],
    paths: [
      {
        id: 'optimal-path',
        name: 'Appropriate Diagnosis and Resuscitation',
        description: 'Correct identification of prerenal AKI with aggressive fluid resuscitation',
        stageSequence: ['recognize-aki', 'determine-etiology', 'immediate-management', 'ongoing-care'],
        outcome: 'optimal',
      },
    ],
  },

  resolution: {
    diagnosis: {
      name: 'Acute Kidney Injury Stage 3 (Prerenal) on Chronic Kidney Disease Stage 3',
      icdCode: 'N17.9',
      explanation: 'Severe prerenal AKI superimposed on pre-existing CKD, caused by volume depletion from GI losses, decreased oral intake, and exacerbated by nephrotoxic medications.',
      pathophysiology: 'Prerenal AKI occurs when renal perfusion pressure falls below the threshold for autoregulation. The kidneys respond appropriately by maximally reabsorbing sodium and water (hence FENa <1%). However, if hypovolemia is severe or prolonged, it can progress to intrinsic renal injury (ATN). This patient had multiple "hits": volume depletion + ACE inhibitor (blocks compensatory efferent vasoconstriction) + NSAID (blocks afferent prostaglandin-mediated vasodilation) + diuretic (exacerbates volume loss).',
      epidemiology: 'AKI occurs in 5-7% of hospitalized patients and >50% of ICU patients. Prerenal causes account for 40-60% of AKI. Elderly with CKD and polypharmacy are at highest risk.',
      prognosis: 'Prerenal AKI, if recognized and treated early, is generally reversible. However, each episode of AKI accelerates CKD progression. This patient may not return to baseline kidney function.',
    },
    diagnosticReasoning: 'The diagnosis was systematic: (1) Confirm AKI: Cr 4.2 vs baseline 1.4 = Stage 3 AKI by KDIGO; (2) Classify etiology: prerenal vs intrinsic vs postrenal. History, exam, and labs all pointed to prerenal; (3) Identify contributing factors: the "triple whammy" of ACE + diuretic + NSAID in the setting of volume depletion.',
    keyFindings: [
      'Creatinine tripled from baseline (1.4 → 4.2)',
      'History of GI losses and poor oral intake',
      'Physical examination showing severe dehydration',
      'Orthostatic hypotension',
      'FENa <1% with concentrated urine',
      'Bland urinary sediment',
      'BUN:Cr ratio >20:1',
      'No hydronephrosis on ultrasound',
      '"Triple whammy" medications',
    ],
    treatment: {
      immediate: 'Hold all nephrotoxic medications (lisinopril, furosemide, ibuprofen, metformin). Treat hyperkalemia emergently. Aggressive IV fluid resuscitation with isotonic crystalloid. Foley catheter to monitor output.',
      medications: [
        {
          name: 'Calcium gluconate',
          dose: '1g',
          route: 'IV',
          frequency: 'Once (emergently)',
          rationale: 'Cardioprotection for hyperkalemia - stabilizes cardiac membrane without lowering K.',
        },
        {
          name: 'Insulin regular',
          dose: '10 units with D50',
          route: 'IV',
          frequency: 'Once (emergently)',
          rationale: 'Shifts potassium intracellularly. Must give dextrose to prevent hypoglycemia.',
        },
        {
          name: 'Normal Saline',
          dose: '500mL boluses, then 150-200 mL/hour',
          route: 'IV',
          frequency: 'Continuous, goal-directed',
          rationale: 'Volume resuscitation is the definitive treatment for prerenal AKI. Isotonic fluids preferred. Avoid over-resuscitation (watch for pulmonary edema given CHF history).',
        },
      ],
      procedures: 'Foley catheter for strict I/O monitoring. Central line if peripheral access inadequate. Dialysis if refractory hyperkalemia, severe acidosis, volume overload, or uremic symptoms.',
      monitoring: 'Serial electrolytes (especially potassium) every 4-6 hours initially. Strict intake/output. Daily weights. Serial creatinine to monitor recovery. Telemetry for hyperkalemia.',
      patientEducation: [
        'Avoid NSAIDs permanently',
        'Maintain hydration, especially during illness',
        'Hold ACE inhibitor and diuretic during "sick days" (vomiting, diarrhea)',
        'Follow-up kidney function monitoring',
        'May not return to baseline kidney function',
      ],
    },
    outcome: 'Mrs. Garcia received 2L NS boluses in the ED with improvement in blood pressure and mental status. Her potassium was treated and decreased to 5.0. She was admitted to the hospital and received continued IV fluids. By day 3, her creatinine had improved to 2.4 and by discharge on day 5, it was 1.9 (still above her baseline of 1.4). Her ACE inhibitor was restarted at a lower dose. She was counseled to avoid NSAIDs and given "sick day" instructions.',
    followUp: 'Nephrology follow-up in 2 weeks. Repeat BMP in 1 week to ensure continued improvement. May need adjustment of antihypertensive regimen. Consider whether ACE inhibitor should be continued long-term given recurrent AKI risk.',
  },

  teachingPoints: [
    {
      topic: 'KDIGO Criteria for AKI',
      content: 'Stage 1: Cr increase ≥0.3 mg/dL within 48h OR ≥1.5-1.9x baseline OR UO <0.5 mL/kg/h for 6-12h. Stage 2: Cr 2.0-2.9x baseline OR UO <0.5 mL/kg/h for ≥12h. Stage 3: Cr ≥3x baseline OR Cr ≥4.0 OR initiation of RRT OR UO <0.3 mL/kg/h for ≥24h.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'The Triple Whammy: ACE + Diuretic + NSAID',
      content: 'This combination is a recipe for AKI: ACE inhibitors dilate efferent arteriole, diuretics cause volume depletion, NSAIDs cause afferent arteriolar constriction. Together, they devastate GFR. This is a common and preventable cause of AKI.',
      category: 'clinical-pearl',
      importance: 'critical',
    },
    {
      topic: 'FENa: How to Use It',
      content: 'FENa = (UNa × PCr) / (PNa × UCr) × 100. FENa <1% = prerenal (kidneys retaining sodium appropriately). FENa >2% = intrinsic/ATN (tubular damage). Caveat: FENa unreliable if patient is on diuretics - use FEUrea instead (<35% prerenal, >50% ATN).',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
    {
      topic: 'Urinary Sediment in AKI',
      content: 'Prerenal: bland sediment with hyaline casts. ATN: muddy brown granular casts, renal tubular epithelial cells. GN: RBC casts, dysmorphic RBCs. AIN: WBC casts, eosinophiluria. The sediment is a "liquid biopsy" of the kidney.',
      category: 'diagnostic-approach',
      importance: 'critical',
    },
  ],

  commonPitfalls: [
    'Not checking baseline creatinine to determine if this is AKI or CKD',
    'Continuing nephrotoxic medications during acute illness',
    'Under-resuscitating prerenal AKI',
    'Over-resuscitating patients with cardiorenal syndrome',
    'Using FENa in patients on diuretics (unreliable)',
    'Not treating hyperkalemia emergently',
    'Missing the "triple whammy" medication combination',
    'Failing to give sick day instructions to at-risk patients',
  ],

  relatedCases: [
    'chf-acute',
    'hyperkalemia',
    'metabolic-acidosis',
    'uti-complicated',
    'rhabdomyolysis',
  ],
};

// ============================================
// Database Export
// ============================================

export const CLINICAL_CASES: Record<string, ClinicalCase> = {
  'stemi-classic': STEMI_CASE,
  'acute-appendicitis': APPENDICITIS_CASE,
  'dka-classic': DKA_CASE,
  'cap-elderly': PNEUMONIA_CASE,
  'acute-stroke-mca': STROKE_CASE,
  'sepsis-urosepsis': SEPSIS_CASE,
  'chf-acute': HEART_FAILURE_CASE,
  'copd-exacerbation': COPD_EXACERBATION_CASE,
  'pe-submassive': PULMONARY_EMBOLISM_CASE,
  'pancreatitis-gallstone': ACUTE_PANCREATITIS_CASE,
  'meningitis-bacterial': BACTERIAL_MENINGITIS_CASE,
  'afib-rvr': AFIB_RVR_CASE,
  'aki-prerenal': AKI_CASE,
};

// ============================================
// Helper Functions
// ============================================

export function getClinicalCase(id: string): ClinicalCase | undefined {
  return CLINICAL_CASES[id];
}

export function getCasesByCategory(category: CaseCategory): ClinicalCase[] {
  return Object.values(CLINICAL_CASES).filter(c => c.category === category);
}

export function getCasesByComplexity(complexity: CaseComplexity): ClinicalCase[] {
  return Object.values(CLINICAL_CASES).filter(c => c.complexity === complexity);
}

export function getAllClinicalCases(): ClinicalCase[] {
  return Object.values(CLINICAL_CASES);
}

export function searchCases(query: string): ClinicalCase[] {
  const lower = query.toLowerCase();
  return Object.values(CLINICAL_CASES).filter(c =>
    c.title.toLowerCase().includes(lower) ||
    c.resolution.diagnosis.name.toLowerCase().includes(lower) ||
    c.learningObjectives.some(obj => obj.toLowerCase().includes(lower))
  );
}
