/**
 * Differential Diagnosis Explorer Data Store
 *
 * Comprehensive differential diagnoses for common symptoms with
 * pathophysiology, anatomy, red flags, and clinical guidance.
 */

import type {
  DifferentialDiagnosis,
  SymptomDifferentialList,
  DifferentialExplorerResult,
  DifferentialEntry,
  AffectedAnatomy,
  AlarmSymptom,
  CareGuidance,
  UserSymptomInput,
} from './types';

/**
 * Educational disclaimer
 */
export const DIFFERENTIAL_DISCLAIMER = `
This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here. If you think you may have a medical emergency, call your doctor or emergency services immediately.
`.trim();

/**
 * Differential diagnoses database
 */
export const DIFFERENTIAL_DIAGNOSES = new Map<string, DifferentialDiagnosis>([
  // ============ CARDIOVASCULAR ============
  [
    'acute-coronary-syndrome',
    {
      diagnosisId: 'acute-coronary-syndrome',
      name: 'Acute Coronary Syndrome (ACS)',
      icdCode: 'I21',
      category: 'cardiovascular',
      likelihood: 'rare-but-serious',
      prevalence: '~800,000 MI/year in US',
      pathophysiology: {
        mechanism: 'Atherosclerotic plaque rupture or erosion triggers thrombus formation, causing partial or complete coronary occlusion',
        progression: [
          'Endothelial dysfunction and lipid accumulation',
          'Plaque formation with fibrous cap',
          'Plaque rupture or erosion',
          'Platelet aggregation and thrombus',
          'Coronary occlusion → myocardial ischemia/infarction',
        ],
        riskFactors: ['Hypertension', 'Diabetes', 'Smoking', 'Hyperlipidemia', 'Family history', 'Age', 'Obesity'],
        protectiveFactors: ['Exercise', 'Mediterranean diet', 'Statin therapy', 'Aspirin (secondary prevention)'],
      },
      affectedAnatomy: [
        {
          structureId: 'coronary-arteries',
          structureName: 'Coronary Arteries',
          system: 'cardiovascular',
          involvementType: 'primary',
          highlightColor: '#c0392b',
          pathologicChange: 'Atherosclerotic plaque with acute thrombus',
        },
        {
          structureId: 'myocardium',
          structureName: 'Myocardium',
          system: 'cardiovascular',
          involvementType: 'primary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Ischemia progressing to necrosis if untreated',
        },
        {
          structureId: 'left-ventricle',
          structureName: 'Left Ventricle',
          system: 'cardiovascular',
          involvementType: 'secondary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Wall motion abnormality, reduced ejection fraction',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Substernal chest pressure with radiation to arm/jaw, dyspnea, diaphoresis',
        symptoms: [
          { symptom: 'Chest pain/pressure', frequency: 'always', characteristicQuality: 'Pressure, squeezing, tightness' },
          { symptom: 'Radiation to arm/jaw/neck', frequency: 'common' },
          { symptom: 'Dyspnea', frequency: 'common' },
          { symptom: 'Diaphoresis', frequency: 'common' },
          { symptom: 'Nausea', frequency: 'sometimes' },
          { symptom: 'Lightheadedness', frequency: 'sometimes' },
        ],
        signs: [
          { sign: 'Diaphoresis', description: 'Cool, clammy skin', sensitivity: '50%' },
          { sign: 'S3/S4 gallop', description: 'Indicates LV dysfunction' },
          { sign: 'New mitral regurgitation murmur', description: 'Papillary muscle dysfunction' },
          { sign: 'Hypotension', description: 'Cardiogenic shock if severe' },
        ],
        labFindings: [
          { test: 'Troponin', expectedResult: 'Elevated (rises 3-6 hours)', diagnosticValue: 'Highly sensitive and specific' },
          { test: 'CK-MB', expectedResult: 'Elevated', diagnosticValue: 'Less specific than troponin' },
          { test: 'BNP', expectedResult: 'May be elevated', diagnosticValue: 'Indicates heart strain' },
        ],
        imagingFindings: [
          { modality: 'ECG', finding: 'ST elevation, ST depression, T wave inversion, or new LBBB', sensitivity: '~50% for initial ECG' },
          { modality: 'Echocardiogram', finding: 'Wall motion abnormality', sensitivity: 'High' },
          { modality: 'Coronary angiography', finding: 'Coronary stenosis/occlusion', sensitivity: 'Gold standard' },
        ],
      },
      redFlags: [
        { symptom: 'Ongoing chest pain >20 minutes', concern: 'Active MI', action: 'Call 911 immediately', timeframe: 'Immediate' },
        { symptom: 'Hemodynamic instability', concern: 'Cardiogenic shock', action: 'Emergency intervention', timeframe: 'Immediate' },
        { symptom: 'New arrhythmia', concern: 'VT/VF risk', action: 'Cardiac monitoring', timeframe: 'Immediate' },
      ],
      diagnosticWorkup: {
        firstLine: ['ECG (within 10 minutes)', 'Troponin', 'CBC', 'BMP', 'Coagulation studies'],
        secondLine: ['Serial troponins q3-6h', 'Echocardiogram', 'Chest X-ray'],
        goldStandard: 'Coronary angiography',
        differentiatingTests: [
          { test: 'Troponin', positiveIn: ['STEMI', 'NSTEMI'], negativeIn: ['Unstable angina (by definition)'] },
          { test: 'ST elevation on ECG', positiveIn: ['STEMI'], negativeIn: ['NSTEMI', 'Unstable angina'] },
        ],
      },
      treatmentOverview: 'Antiplatelet therapy (aspirin, P2Y12 inhibitor), anticoagulation, revascularization (PCI or CABG), secondary prevention',
      whenToSeekCare: {
        urgency: 'emergency',
        setting: 'Emergency department via ambulance (911)',
        reasoning: 'Time-sensitive condition - "time is muscle"',
        immediateActions: ['Call 911', 'Chew aspirin 325mg if available', 'Rest in comfortable position'],
      },
      prognosis: 'Mortality 5-10% with modern treatment; worse with delayed presentation, cardiogenic shock, or mechanical complications',
      explanations: {
        level1: 'A heart attack happens when blood flow to part of your heart gets blocked, usually by a blood clot.',
        level2: 'ACS occurs when a cholesterol plaque in a heart artery ruptures and forms a clot. This blocks blood flow and damages heart muscle.',
        level3: 'ACS spectrum includes unstable angina, NSTEMI, and STEMI, distinguished by troponin elevation and ECG changes. Treatment depends on classification.',
        level4: 'Plaque rupture exposes thrombogenic core, activating platelets and coagulation cascade. STEMI shows transmural ischemia (ST elevation); NSTEMI shows subendocardial injury (troponin positive, no ST elevation).',
        level5: 'Type 1 MI: spontaneous plaque rupture. Type 2: supply-demand mismatch. TIMI and GRACE scores risk-stratify. High-sensitivity troponin enables early rule-out protocols. Primary PCI within 90 minutes is goal for STEMI.',
      },
    },
  ],
  [
    'gerd',
    {
      diagnosisId: 'gerd',
      name: 'Gastroesophageal Reflux Disease (GERD)',
      icdCode: 'K21',
      category: 'gastrointestinal',
      likelihood: 'most-likely',
      prevalence: '~20% of Western population',
      pathophysiology: {
        mechanism: 'Lower esophageal sphincter dysfunction allows gastric acid to reflux into esophagus, causing mucosal injury',
        progression: [
          'LES relaxation or hypotension',
          'Acid reflux into esophagus',
          'Mucosal irritation and inflammation',
          'Possible erosive esophagitis or Barrett\'s esophagus',
        ],
        riskFactors: ['Obesity', 'Hiatal hernia', 'Pregnancy', 'Smoking', 'Large meals', 'Lying down after eating'],
        protectiveFactors: ['Weight loss', 'Elevating head of bed', 'Avoiding trigger foods'],
      },
      affectedAnatomy: [
        {
          structureId: 'esophagus',
          structureName: 'Esophagus',
          system: 'digestive',
          involvementType: 'primary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Mucosal inflammation, erosion, possible metaplasia',
        },
        {
          structureId: 'lower-esophageal-sphincter',
          structureName: 'Lower Esophageal Sphincter',
          system: 'digestive',
          involvementType: 'primary',
          highlightColor: '#c0392b',
          pathologicChange: 'Incompetence or transient relaxations',
        },
        {
          structureId: 'stomach',
          structureName: 'Stomach',
          system: 'digestive',
          involvementType: 'secondary',
          highlightColor: '#f39c12',
          pathologicChange: 'Source of refluxate',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Heartburn and regurgitation, worse after meals and lying down',
        symptoms: [
          { symptom: 'Heartburn', frequency: 'always', characteristicQuality: 'Burning, retrosternal' },
          { symptom: 'Regurgitation', frequency: 'common' },
          { symptom: 'Dysphagia', frequency: 'sometimes' },
          { symptom: 'Chest pain', frequency: 'sometimes', characteristicQuality: 'Can mimic cardiac pain' },
          { symptom: 'Chronic cough', frequency: 'sometimes' },
          { symptom: 'Hoarseness', frequency: 'rare' },
        ],
        signs: [
          { sign: 'Dental erosions', description: 'From chronic acid exposure' },
          { sign: 'Laryngeal erythema', description: 'In laryngopharyngeal reflux' },
        ],
        labFindings: [],
        imagingFindings: [
          { modality: 'Upper endoscopy', finding: 'Erosive esophagitis, Barrett\'s esophagus', sensitivity: 'Gold standard for complications' },
          { modality: 'pH monitoring', finding: 'Acid exposure time >4%', sensitivity: 'Most sensitive for GERD' },
        ],
      },
      redFlags: [
        { symptom: 'Dysphagia', concern: 'Stricture or malignancy', action: 'Endoscopy', timeframe: 'Within 2 weeks' },
        { symptom: 'Weight loss', concern: 'Malignancy', action: 'Endoscopy', timeframe: 'Within 2 weeks' },
        { symptom: 'GI bleeding', concern: 'Erosive disease or ulcer', action: 'Urgent endoscopy', timeframe: 'Within 24-48 hours' },
        { symptom: 'Age >50 with new symptoms', concern: 'Increased malignancy risk', action: 'Consider endoscopy', timeframe: 'Soon' },
      ],
      diagnosticWorkup: {
        firstLine: ['Clinical diagnosis based on symptoms', 'PPI trial (diagnostic and therapeutic)'],
        secondLine: ['Upper endoscopy if alarm features', 'pH monitoring if PPI-refractory'],
        goldStandard: 'pH monitoring with impedance',
      },
      treatmentOverview: 'Lifestyle modifications, PPI therapy (first-line), H2 blockers, surgical fundoplication for refractory cases',
      whenToSeekCare: {
        urgency: 'routine',
        setting: 'Primary care office',
        reasoning: 'Common condition often managed with lifestyle and OTC medications initially',
        immediateActions: ['Avoid trigger foods', 'Don\'t lie down after eating', 'Try OTC antacids'],
      },
      prognosis: 'Excellent with treatment; risk of Barrett\'s esophagus (precancerous) with chronic untreated GERD',
      explanations: {
        level1: 'GERD happens when stomach acid backs up into your food pipe, causing heartburn.',
        level2: 'The valve between your stomach and esophagus doesn\'t close properly, letting acid splash up and irritate the lining.',
        level3: 'LES incompetence allows acid reflux causing mucosal injury. Complications include erosive esophagitis, stricture, and Barrett\'s esophagus (intestinal metaplasia).',
        level4: 'Transient LES relaxations are the main mechanism. Hiatal hernia impairs LES function. Acid pocket forms post-prandially. PPIs block H+/K+-ATPase, reducing acid production.',
        level5: 'GERD is multifactorial: TLESRs, hiatal hernia, impaired esophageal clearance, delayed gastric emptying. Barrett\'s involves CDX2-driven intestinal metaplasia with dysplasia-carcinoma sequence risk.',
      },
    },
  ],
  [
    'tension-headache',
    {
      diagnosisId: 'tension-headache',
      name: 'Tension-Type Headache',
      icdCode: 'G44.2',
      category: 'neurologic',
      likelihood: 'most-likely',
      prevalence: 'Most common primary headache; ~40% lifetime prevalence',
      pathophysiology: {
        mechanism: 'Peripheral and central sensitization of pain pathways, often with pericranial muscle tenderness',
        progression: [
          'Trigger (stress, posture, fatigue)',
          'Pericranial muscle contraction',
          'Peripheral nociceptor activation',
          'Central sensitization in chronic form',
        ],
        riskFactors: ['Stress', 'Poor posture', 'Eye strain', 'Fatigue', 'Depression', 'Anxiety'],
        protectiveFactors: ['Regular sleep', 'Stress management', 'Ergonomic workspace'],
      },
      affectedAnatomy: [
        {
          structureId: 'pericranial-muscles',
          structureName: 'Pericranial Muscles',
          system: 'musculoskeletal',
          involvementType: 'primary',
          highlightColor: '#3498db',
          pathologicChange: 'Increased tenderness and tension',
        },
        {
          structureId: 'trigeminal-nucleus',
          structureName: 'Trigeminal Nucleus',
          system: 'nervous',
          involvementType: 'secondary',
          highlightColor: '#9b59b6',
          pathologicChange: 'Central sensitization in chronic form',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Bilateral, band-like pressure headache without significant associated features',
        symptoms: [
          { symptom: 'Bilateral headache', frequency: 'always', characteristicQuality: 'Pressing/tightening, non-pulsating' },
          { symptom: 'Mild-moderate intensity', frequency: 'always' },
          { symptom: 'Not aggravated by routine activity', frequency: 'always' },
          { symptom: 'Mild photophobia OR phonophobia (not both)', frequency: 'sometimes' },
        ],
        signs: [
          { sign: 'Pericranial tenderness', description: 'On palpation of scalp muscles' },
          { sign: 'Normal neurologic exam', description: 'Required for diagnosis' },
        ],
      },
      redFlags: [
        { symptom: 'Thunderclap onset', concern: 'SAH', action: 'Emergency evaluation', timeframe: 'Immediate' },
        { symptom: 'Focal neurologic deficits', concern: 'Mass lesion, stroke', action: 'Urgent imaging', timeframe: 'Same day' },
        { symptom: 'Fever with headache', concern: 'Meningitis', action: 'Emergency evaluation', timeframe: 'Immediate' },
        { symptom: 'New headache >50 years', concern: 'GCA, malignancy', action: 'Workup needed', timeframe: 'Soon' },
      ],
      diagnosticWorkup: {
        firstLine: ['Clinical diagnosis based on ICHD-3 criteria', 'No testing needed for typical presentation'],
        secondLine: ['Neuroimaging if red flags present'],
        goldStandard: 'Clinical diagnosis (no diagnostic test)',
      },
      treatmentOverview: 'Acute: NSAIDs, acetaminophen. Preventive (if frequent): TCAs, stress management, physical therapy',
      whenToSeekCare: {
        urgency: 'self-care',
        setting: 'Self-management initially; primary care if frequent/severe',
        reasoning: 'Common benign condition; medical attention for red flags or poor response to OTC treatment',
        immediateActions: ['Rest in quiet environment', 'OTC pain relievers', 'Apply heat or cold', 'Stress reduction'],
      },
      prognosis: 'Excellent; most are episodic. Chronic form (≥15 days/month) harder to treat',
      explanations: {
        level1: 'A tension headache feels like a tight band around your head, usually from stress or muscle tension.',
        level2: 'Tension-type headaches are the most common type, caused by muscle tension and stress. They\'re uncomfortable but not dangerous.',
        level3: 'TTH diagnostic criteria: bilateral, pressing/tightening, mild-moderate, not aggravated by activity, no nausea/vomiting. Episodic (<15 days/month) or chronic.',
        level4: 'Pathophysiology involves peripheral myofascial mechanisms (episodic) and central sensitization (chronic). Pericranial tenderness correlates with headache frequency.',
        level5: 'Chronic TTH shows decreased pain thresholds and central sensitization. TCAs work via descending pain modulation. Medication overuse headache is a risk with frequent analgesic use.',
      },
    },
  ],
  [
    'migraine',
    {
      diagnosisId: 'migraine',
      name: 'Migraine',
      icdCode: 'G43',
      category: 'neurologic',
      likelihood: 'likely',
      prevalence: '~15% of population; female predominance',
      pathophysiology: {
        mechanism: 'Trigeminovascular activation with cortical spreading depression (in aura), neurogenic inflammation, and central sensitization',
        progression: [
          'Trigger exposure',
          'Cortical spreading depression (aura)',
          'Trigeminovascular activation',
          'CGRP release → neurogenic inflammation',
          'Central sensitization',
        ],
        riskFactors: ['Female sex', 'Family history', 'Stress', 'Hormonal changes', 'Sleep disturbance', 'Certain foods/alcohol'],
        protectiveFactors: ['Regular sleep', 'Trigger avoidance', 'Preventive medications'],
      },
      affectedAnatomy: [
        {
          structureId: 'trigeminal-nerve',
          structureName: 'Trigeminal Nerve',
          system: 'nervous',
          involvementType: 'primary',
          highlightColor: '#9b59b6',
          pathologicChange: 'Activation and sensitization',
        },
        {
          structureId: 'meningeal-vessels',
          structureName: 'Meningeal Vessels',
          system: 'cardiovascular',
          involvementType: 'primary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Neurogenic inflammation, vasodilation',
        },
        {
          structureId: 'cerebral-cortex',
          structureName: 'Cerebral Cortex',
          system: 'nervous',
          involvementType: 'secondary',
          highlightColor: '#3498db',
          pathologicChange: 'Cortical spreading depression (aura)',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Unilateral, pulsating headache with nausea, photophobia, and phonophobia, lasting 4-72 hours',
        symptoms: [
          { symptom: 'Unilateral headache', frequency: 'common', characteristicQuality: 'Pulsating/throbbing' },
          { symptom: 'Moderate-severe intensity', frequency: 'always' },
          { symptom: 'Aggravated by physical activity', frequency: 'always' },
          { symptom: 'Nausea and/or vomiting', frequency: 'common' },
          { symptom: 'Photophobia', frequency: 'common' },
          { symptom: 'Phonophobia', frequency: 'common' },
          { symptom: 'Visual aura', frequency: 'sometimes', characteristicQuality: 'Scintillating scotoma, spreading' },
        ],
        signs: [
          { sign: 'Normal neurologic exam between attacks', description: 'Required' },
          { sign: 'Cutaneous allodynia', description: 'In some patients during attack' },
        ],
      },
      redFlags: [
        { symptom: 'First or worst headache', concern: 'Secondary cause', action: 'Imaging', timeframe: 'Urgent' },
        { symptom: 'Aura >60 minutes', concern: 'Migrainous infarction', action: 'Urgent evaluation', timeframe: 'Same day' },
        { symptom: 'New headache with HIV or cancer', concern: 'Opportunistic infection, metastases', action: 'Imaging', timeframe: 'Urgent' },
      ],
      diagnosticWorkup: {
        firstLine: ['Clinical diagnosis based on ICHD-3 criteria', 'Headache diary'],
        secondLine: ['MRI brain if atypical features or red flags'],
        goldStandard: 'Clinical diagnosis',
      },
      treatmentOverview: 'Acute: triptans, NSAIDs, antiemetics. Preventive (if ≥4 days/month): beta-blockers, TCAs, anticonvulsants, CGRP inhibitors',
      whenToSeekCare: {
        urgency: 'routine',
        setting: 'Primary care or neurology',
        reasoning: 'Chronic condition requiring management plan; urgent if new/different or red flags',
        immediateActions: ['Rest in dark, quiet room', 'Acute medication early in attack', 'Stay hydrated'],
      },
      prognosis: 'Chronic but manageable; frequency may decrease with age. Transformation to chronic migraine possible',
      explanations: {
        level1: 'Migraines are severe headaches that often come with nausea and sensitivity to light and sound.',
        level2: 'Migraine is a brain disorder causing severe throbbing headaches, often on one side, with nausea and light sensitivity. Some people see visual disturbances (aura) before the headache.',
        level3: 'Migraine involves trigeminovascular activation and central sensitization. Aura results from cortical spreading depression. ICHD-3 criteria define diagnosis.',
        level4: 'Trigeminovascular system releases CGRP causing neurogenic inflammation. Triptans are 5-HT1B/1D agonists that abort attacks. CGRP monoclonal antibodies provide novel prevention.',
        level5: 'CSD propagates at 3mm/min, causing aura. CGRP released from trigeminal nerve causes vasodilation and mast cell degranulation. Central sensitization leads to allodynia. Gepants block CGRP receptor; monoclonal antibodies target CGRP or its receptor.',
      },
    },
  ],
  [
    'appendicitis',
    {
      diagnosisId: 'appendicitis',
      name: 'Acute Appendicitis',
      icdCode: 'K35',
      category: 'gastrointestinal',
      likelihood: 'rare-but-serious',
      prevalence: '~7% lifetime risk',
      pathophysiology: {
        mechanism: 'Luminal obstruction (fecalith, lymphoid hyperplasia) → increased intraluminal pressure → ischemia → bacterial invasion → perforation',
        progression: [
          'Luminal obstruction',
          'Mucus accumulation, distension',
          'Visceral pain (periumbilical)',
          'Venous congestion and ischemia',
          'Bacterial invasion',
          'Transmural inflammation (RLQ pain)',
          'Perforation if untreated',
        ],
        riskFactors: ['Age 10-30', 'Low-fiber diet', 'Family history'],
      },
      affectedAnatomy: [
        {
          structureId: 'appendix',
          structureName: 'Appendix',
          system: 'digestive',
          involvementType: 'primary',
          highlightColor: '#c0392b',
          pathologicChange: 'Inflammation, edema, possible perforation',
        },
        {
          structureId: 'cecum',
          structureName: 'Cecum',
          system: 'digestive',
          involvementType: 'secondary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Adjacent inflammation',
        },
        {
          structureId: 'peritoneum',
          structureName: 'Peritoneum',
          system: 'digestive',
          involvementType: 'secondary',
          highlightColor: '#f39c12',
          pathologicChange: 'Local then diffuse peritonitis if perforated',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Periumbilical pain migrating to RLQ, anorexia, low-grade fever',
        symptoms: [
          { symptom: 'Abdominal pain', frequency: 'always', characteristicQuality: 'Initially periumbilical, then RLQ' },
          { symptom: 'Anorexia', frequency: 'common' },
          { symptom: 'Nausea/vomiting', frequency: 'common' },
          { symptom: 'Low-grade fever', frequency: 'common' },
        ],
        signs: [
          { sign: 'McBurney point tenderness', description: 'Point 1/3 from ASIS to umbilicus', sensitivity: '50-94%' },
          { sign: 'Rovsing sign', description: 'RLQ pain with LLQ palpation', specificity: '~80%' },
          { sign: 'Psoas sign', description: 'Pain with hip extension (retrocecal appendix)' },
          { sign: 'Obturator sign', description: 'Pain with internal rotation of hip (pelvic appendix)' },
          { sign: 'Guarding/rebound', description: 'Indicates peritoneal irritation' },
        ],
        labFindings: [
          { test: 'WBC', expectedResult: 'Elevated (10-18K typical)', diagnosticValue: 'Supports but not diagnostic' },
          { test: 'CRP', expectedResult: 'Elevated', diagnosticValue: 'More elevated with perforation' },
        ],
        imagingFindings: [
          { modality: 'CT abdomen', finding: 'Dilated appendix >6mm, periappendiceal fat stranding', sensitivity: '94%' },
          { modality: 'Ultrasound', finding: 'Non-compressible tubular structure >6mm', sensitivity: '86%' },
        ],
      },
      redFlags: [
        { symptom: 'Diffuse abdominal pain and rigidity', concern: 'Perforation with peritonitis', action: 'Emergency surgery', timeframe: 'Immediate' },
        { symptom: 'High fever >38.5°C', concern: 'Perforation', action: 'Urgent surgical evaluation', timeframe: 'Immediate' },
        { symptom: 'Hemodynamic instability', concern: 'Sepsis', action: 'Resuscitation and surgery', timeframe: 'Immediate' },
      ],
      diagnosticWorkup: {
        firstLine: ['CBC', 'CRP', 'Urinalysis (rule out UTI)', 'CT abdomen/pelvis'],
        secondLine: ['Ultrasound (if CT contraindicated, pediatrics, pregnancy)', 'MRI (pregnancy)'],
        goldStandard: 'CT abdomen with IV contrast',
      },
      treatmentOverview: 'Appendectomy (laparoscopic preferred); antibiotics; non-operative management an option for uncomplicated cases in select patients',
      whenToSeekCare: {
        urgency: 'emergency',
        setting: 'Emergency department',
        reasoning: 'Surgical emergency; perforation risk increases with time',
        immediateActions: ['NPO (nothing by mouth)', 'Go to emergency department', 'Do not take pain medications that mask symptoms'],
      },
      prognosis: 'Excellent with early surgery; perforation increases morbidity and mortality',
      explanations: {
        level1: 'Appendicitis is when your appendix gets infected and swollen. It needs surgery to prevent it from bursting.',
        level2: 'The appendix gets blocked and infected. Pain starts near the belly button then moves to the lower right. It requires surgery, usually laparoscopic.',
        level3: 'Luminal obstruction leads to distension, ischemia, and bacterial invasion. Classic presentation: periumbilical pain → RLQ. CT is diagnostic. Appendectomy is standard treatment.',
        level4: 'Visceral afferents explain periumbilical pain (T10); parietal peritoneum involvement causes localized RLQ pain. Alvarado score aids diagnosis. Perforation risk increases after 36-48 hours.',
        level5: 'Fecalith is most common cause of obstruction in adults; lymphoid hyperplasia in children. CT criteria: diameter >6mm, wall enhancement, periappendiceal inflammation. Antibiotic-first approach studied in uncomplicated cases.',
      },
    },
  ],
  [
    'pulmonary-embolism',
    {
      diagnosisId: 'pulmonary-embolism',
      name: 'Pulmonary Embolism',
      icdCode: 'I26',
      category: 'cardiovascular',
      likelihood: 'rare-but-serious',
      prevalence: '~600,000/year in US',
      pathophysiology: {
        mechanism: 'Thrombus (usually from DVT) embolizes to pulmonary arteries, causing V/Q mismatch and right heart strain',
        progression: [
          'DVT formation (Virchow triad)',
          'Thrombus embolization to pulmonary arteries',
          'Mechanical obstruction → V/Q mismatch',
          'Hypoxemia',
          'RV strain → possible failure',
        ],
        riskFactors: ['Recent surgery', 'Immobilization', 'Malignancy', 'Pregnancy', 'Oral contraceptives', 'Thrombophilia', 'Prior VTE'],
      },
      affectedAnatomy: [
        {
          structureId: 'pulmonary-arteries',
          structureName: 'Pulmonary Arteries',
          system: 'cardiovascular',
          involvementType: 'primary',
          highlightColor: '#c0392b',
          pathologicChange: 'Thrombotic occlusion',
        },
        {
          structureId: 'right-ventricle',
          structureName: 'Right Ventricle',
          system: 'cardiovascular',
          involvementType: 'secondary',
          highlightColor: '#e74c3c',
          pathologicChange: 'Acute pressure overload and dilation',
        },
        {
          structureId: 'deep-veins',
          structureName: 'Deep Veins (legs)',
          system: 'cardiovascular',
          involvementType: 'primary',
          highlightColor: '#9b59b6',
          pathologicChange: 'Source of embolus (DVT)',
        },
      ],
      clinicalFeatures: {
        typicalPresentation: 'Acute dyspnea, pleuritic chest pain, tachycardia; may be asymptomatic',
        symptoms: [
          { symptom: 'Dyspnea', frequency: 'common', characteristicQuality: 'Acute onset' },
          { symptom: 'Pleuritic chest pain', frequency: 'common' },
          { symptom: 'Cough', frequency: 'sometimes' },
          { symptom: 'Hemoptysis', frequency: 'rare' },
          { symptom: 'Syncope', frequency: 'rare', characteristicQuality: 'Indicates massive PE' },
          { symptom: 'Leg swelling (DVT)', frequency: 'sometimes' },
        ],
        signs: [
          { sign: 'Tachycardia', description: 'Most common sign', sensitivity: '~50%' },
          { sign: 'Tachypnea', description: 'Respiratory rate >20' },
          { sign: 'Hypoxemia', description: 'May have normal O2 sat' },
          { sign: 'Unilateral leg swelling', description: 'Suggests DVT source' },
        ],
        labFindings: [
          { test: 'D-dimer', expectedResult: 'Elevated', diagnosticValue: 'High NPV; use to rule out in low-probability' },
          { test: 'Troponin', expectedResult: 'May be elevated', diagnosticValue: 'Indicates RV strain, worse prognosis' },
          { test: 'BNP', expectedResult: 'May be elevated', diagnosticValue: 'Indicates RV strain' },
        ],
        imagingFindings: [
          { modality: 'CT pulmonary angiography', finding: 'Filling defect in pulmonary artery', sensitivity: '83%' },
          { modality: 'V/Q scan', finding: 'Perfusion defect with normal ventilation', sensitivity: 'Alternative if CT contraindicated' },
          { modality: 'Echocardiogram', finding: 'RV dilation, McConnell sign', sensitivity: 'Moderate' },
        ],
      },
      redFlags: [
        { symptom: 'Syncope', concern: 'Massive PE with hemodynamic compromise', action: 'Emergency evaluation, consider thrombolysis', timeframe: 'Immediate' },
        { symptom: 'Hypotension', concern: 'Massive PE', action: 'Thrombolysis or embolectomy', timeframe: 'Immediate' },
        { symptom: 'Severe hypoxemia', concern: 'Large clot burden', action: 'Urgent treatment', timeframe: 'Immediate' },
      ],
      diagnosticWorkup: {
        firstLine: ['Wells score or Geneva score', 'D-dimer if low probability', 'CT pulmonary angiography'],
        secondLine: ['V/Q scan', 'Lower extremity Doppler', 'Echocardiogram'],
        goldStandard: 'CT pulmonary angiography',
        differentiatingTests: [
          { test: 'D-dimer', positiveIn: ['PE', 'DVT', 'Many other conditions'], negativeIn: ['Rules out PE if low clinical probability'] },
        ],
      },
      treatmentOverview: 'Anticoagulation (heparin → warfarin or DOAC); thrombolysis for massive PE; IVC filter if anticoagulation contraindicated',
      whenToSeekCare: {
        urgency: 'emergency',
        setting: 'Emergency department',
        reasoning: 'Can be rapidly fatal; requires anticoagulation',
        immediateActions: ['Call 911', 'Remain calm, avoid exertion', 'Do not delay evaluation'],
      },
      prognosis: 'Mortality 2-8% with treatment; much higher if massive PE or delayed treatment',
      explanations: {
        level1: 'A pulmonary embolism is a blood clot that travels to your lungs and blocks blood flow.',
        level2: 'A PE occurs when a clot, usually from a leg vein, travels to the lungs. It causes sudden shortness of breath and can be life-threatening.',
        level3: 'PE causes V/Q mismatch and may cause RV failure in massive cases. Wells score guides workup. D-dimer rules out low-probability cases. Anticoagulation is mainstay treatment.',
        level4: 'Submassive PE: RV strain without hypotension. Massive PE: hypotension requiring thrombolysis or embolectomy. PESI score predicts 30-day mortality.',
        level5: 'Hypoxemia from V/Q mismatch and increased dead space. RV fails due to acute pressure overload when >30-50% of vasculature occluded. Thrombolysis indicated for massive PE; catheter-directed therapy emerging for submassive.',
      },
    },
  ],
]);

/**
 * Symptom-based differential lists
 */
export const SYMPTOM_DIFFERENTIAL_LISTS = new Map<string, SymptomDifferentialList>([
  [
    'chest-pain',
    {
      symptomId: 'chest-pain',
      symptomName: 'Chest Pain',
      differentials: [
        { diagnosisId: 'acute-coronary-syndrome', rank: 1, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Pressure/squeezing', 'Radiation to arm/jaw', 'Diaphoresis', 'Risk factors'], mustNotMiss: true },
        { diagnosisId: 'gerd', rank: 2, likelihood: 'most-likely', keyDistinguishingFeatures: ['Burning quality', 'After meals', 'Relieved by antacids', 'No exertional component'], mustNotMiss: false },
        { diagnosisId: 'pulmonary-embolism', rank: 3, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Pleuritic', 'Acute dyspnea', 'Risk factors (immobility, surgery)', 'Tachycardia'], mustNotMiss: true },
        { diagnosisId: 'musculoskeletal', rank: 4, likelihood: 'most-likely', keyDistinguishingFeatures: ['Reproducible with palpation', 'Movement-related', 'No systemic symptoms'], mustNotMiss: false },
        { diagnosisId: 'pneumonia', rank: 5, likelihood: 'likely', keyDistinguishingFeatures: ['Fever', 'Productive cough', 'Pleuritic component'], mustNotMiss: false },
      ],
      disclaimer: DIFFERENTIAL_DISCLAIMER,
    },
  ],
  [
    'headache',
    {
      symptomId: 'headache',
      symptomName: 'Headache',
      differentials: [
        { diagnosisId: 'tension-headache', rank: 1, likelihood: 'most-likely', keyDistinguishingFeatures: ['Bilateral', 'Band-like pressure', 'Mild-moderate', 'No nausea'], mustNotMiss: false },
        { diagnosisId: 'migraine', rank: 2, likelihood: 'likely', keyDistinguishingFeatures: ['Unilateral', 'Throbbing', 'Nausea', 'Photo/phonophobia', 'Aura'], mustNotMiss: false },
        { diagnosisId: 'subarachnoid-hemorrhage', rank: 3, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Thunderclap onset', 'Worst headache of life', 'Neck stiffness'], mustNotMiss: true },
        { diagnosisId: 'meningitis', rank: 4, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Fever', 'Neck stiffness', 'Photophobia', 'Altered mental status'], mustNotMiss: true },
        { diagnosisId: 'cluster-headache', rank: 5, likelihood: 'less-likely', keyDistinguishingFeatures: ['Periorbital', 'Excruciating', 'Brief attacks', 'Autonomic symptoms'], mustNotMiss: false },
      ],
      disclaimer: DIFFERENTIAL_DISCLAIMER,
    },
  ],
  [
    'abdominal-pain',
    {
      symptomId: 'abdominal-pain',
      symptomName: 'Abdominal Pain',
      differentials: [
        { diagnosisId: 'gastritis-pud', rank: 1, likelihood: 'most-likely', keyDistinguishingFeatures: ['Epigastric', 'Burning', 'Meal-related', 'NSAID use'], mustNotMiss: false },
        { diagnosisId: 'appendicitis', rank: 2, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Periumbilical → RLQ migration', 'Anorexia', 'Low-grade fever', 'McBurney tenderness'], mustNotMiss: true },
        { diagnosisId: 'cholecystitis', rank: 3, likelihood: 'likely', keyDistinguishingFeatures: ['RUQ pain', 'After fatty meal', 'Murphy sign', 'Fever'], mustNotMiss: true },
        { diagnosisId: 'bowel-obstruction', rank: 4, likelihood: 'less-likely', keyDistinguishingFeatures: ['Colicky pain', 'Distension', 'Vomiting', 'Obstipation'], mustNotMiss: true },
        { diagnosisId: 'aaa-rupture', rank: 5, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Sudden severe', 'Back pain', 'Hypotension', 'Pulsatile mass'], mustNotMiss: true },
      ],
      disclaimer: DIFFERENTIAL_DISCLAIMER,
    },
  ],
  [
    'dyspnea',
    {
      symptomId: 'dyspnea',
      symptomName: 'Shortness of Breath',
      differentials: [
        { diagnosisId: 'asthma-copd', rank: 1, likelihood: 'most-likely', keyDistinguishingFeatures: ['Wheezing', 'History of asthma/smoking', 'Episodic', 'Responsive to bronchodilators'], mustNotMiss: false },
        { diagnosisId: 'heart-failure', rank: 2, likelihood: 'likely', keyDistinguishingFeatures: ['Orthopnea', 'PND', 'Edema', 'JVD', 'S3 gallop'], mustNotMiss: true },
        { diagnosisId: 'pulmonary-embolism', rank: 3, likelihood: 'rare-but-serious', keyDistinguishingFeatures: ['Acute onset', 'Pleuritic pain', 'Risk factors', 'Tachycardia'], mustNotMiss: true },
        { diagnosisId: 'pneumonia', rank: 4, likelihood: 'likely', keyDistinguishingFeatures: ['Fever', 'Cough', 'Sputum', 'Focal findings on exam'], mustNotMiss: false },
        { diagnosisId: 'pneumothorax', rank: 5, likelihood: 'less-likely', keyDistinguishingFeatures: ['Sudden onset', 'Pleuritic', 'Decreased breath sounds', 'Young thin male or trauma'], mustNotMiss: true },
      ],
      disclaimer: DIFFERENTIAL_DISCLAIMER,
    },
  ],
]);

// ============ API Functions ============

/**
 * Get differential diagnosis by ID
 */
export function getDifferentialDiagnosis(diagnosisId: string): DifferentialDiagnosis | undefined {
  return DIFFERENTIAL_DIAGNOSES.get(diagnosisId);
}

/**
 * Get all differential diagnoses
 */
export function getAllDifferentialDiagnoses(): DifferentialDiagnosis[] {
  return Array.from(DIFFERENTIAL_DIAGNOSES.values());
}

/**
 * Get differential list for a symptom
 */
export function getDifferentialListForSymptom(symptomId: string): SymptomDifferentialList | undefined {
  return SYMPTOM_DIFFERENTIAL_LISTS.get(symptomId);
}

/**
 * Get "must not miss" diagnoses for a symptom
 */
export function getMustNotMissDiagnoses(symptomId: string): DifferentialEntry[] {
  const list = SYMPTOM_DIFFERENTIAL_LISTS.get(symptomId);
  if (!list) return [];
  return list.differentials.filter((d) => d.mustNotMiss);
}

/**
 * Get anatomy highlights for a diagnosis
 */
export function getAnatomyHighlightsForDiagnosis(diagnosisId: string): AffectedAnatomy[] {
  const diagnosis = DIFFERENTIAL_DIAGNOSES.get(diagnosisId);
  return diagnosis?.affectedAnatomy ?? [];
}

/**
 * Get red flags for a diagnosis
 */
export function getRedFlagsForDiagnosis(diagnosisId: string): AlarmSymptom[] {
  const diagnosis = DIFFERENTIAL_DIAGNOSES.get(diagnosisId);
  return diagnosis?.redFlags ?? [];
}

/**
 * Get care guidance for a diagnosis
 */
export function getCareGuidance(diagnosisId: string): CareGuidance | undefined {
  const diagnosis = DIFFERENTIAL_DIAGNOSES.get(diagnosisId);
  return diagnosis?.whenToSeekCare;
}

/**
 * Get explanation at specified complexity level
 */
export function getDiagnosisExplanation(
  diagnosisId: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const diagnosis = DIFFERENTIAL_DIAGNOSES.get(diagnosisId);
  return diagnosis?.explanations[`level${level}`];
}

/**
 * Create differential explorer result
 */
export function createDifferentialExplorerResult(
  symptomId: string,
  selectedDiagnosisId?: string
): DifferentialExplorerResult | undefined {
  const list = SYMPTOM_DIFFERENTIAL_LISTS.get(symptomId);
  if (!list) return undefined;

  const selectedDiagnosis = selectedDiagnosisId
    ? DIFFERENTIAL_DIAGNOSES.get(selectedDiagnosisId)
    : undefined;

  const anatomyHighlights = selectedDiagnosis?.affectedAnatomy ?? [];

  // Collect all red flags from must-not-miss diagnoses
  const redFlagsPresent: AlarmSymptom[] = [];
  list.differentials
    .filter((d) => d.mustNotMiss)
    .forEach((d) => {
      const diagnosis = DIFFERENTIAL_DIAGNOSES.get(d.diagnosisId);
      if (diagnosis) {
        redFlagsPresent.push(...diagnosis.redFlags);
      }
    });

  // Determine recommended action based on most serious diagnosis
  const mostSeriousDiagnosis = list.differentials.find((d) => d.mustNotMiss);
  const recommendedAction: CareGuidance = mostSeriousDiagnosis
    ? DIFFERENTIAL_DIAGNOSES.get(mostSeriousDiagnosis.diagnosisId)?.whenToSeekCare ?? {
        urgency: 'routine',
        setting: 'Primary care',
        reasoning: 'Evaluation recommended',
      }
    : {
        urgency: 'routine',
        setting: 'Primary care',
        reasoning: 'Evaluation recommended for persistent symptoms',
      };

  return {
    symptom: symptomId,
    differentialList: list.differentials,
    selectedDiagnosis,
    anatomyHighlights,
    redFlagsPresent,
    recommendedAction,
  };
}

/**
 * Get diagnoses by category
 */
export function getDiagnosesByCategory(category: string): DifferentialDiagnosis[] {
  return Array.from(DIFFERENTIAL_DIAGNOSES.values()).filter(
    (d) => d.category === category
  );
}

/**
 * Search diagnoses by keyword
 */
export function searchDiagnoses(query: string): DifferentialDiagnosis[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(DIFFERENTIAL_DIAGNOSES.values()).filter(
    (d) =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.clinicalFeatures.typicalPresentation.toLowerCase().includes(lowerQuery) ||
      d.clinicalFeatures.symptoms.some((s) => s.symptom.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Generate differential based on user input (simplified algorithm)
 */
export function generateDifferentialFromInput(input: UserSymptomInput): DifferentialEntry[] {
  // This is a simplified example - real implementation would use more sophisticated matching
  const symptomLower = input.primarySymptom.toLowerCase();

  // Find matching symptom differential list
  let matchedList: SymptomDifferentialList | undefined;

  if (symptomLower.includes('chest') && symptomLower.includes('pain')) {
    matchedList = SYMPTOM_DIFFERENTIAL_LISTS.get('chest-pain');
  } else if (symptomLower.includes('headache') || symptomLower.includes('head pain')) {
    matchedList = SYMPTOM_DIFFERENTIAL_LISTS.get('headache');
  } else if (symptomLower.includes('abdominal') || symptomLower.includes('stomach') || symptomLower.includes('belly')) {
    matchedList = SYMPTOM_DIFFERENTIAL_LISTS.get('abdominal-pain');
  } else if (symptomLower.includes('breath') || symptomLower.includes('dyspnea') || symptomLower.includes('sob')) {
    matchedList = SYMPTOM_DIFFERENTIAL_LISTS.get('dyspnea');
  }

  return matchedList?.differentials ?? [];
}

/**
 * Get all available symptoms with differential lists
 */
export function getAvailableSymptoms(): string[] {
  return Array.from(SYMPTOM_DIFFERENTIAL_LISTS.keys());
}

/**
 * Get disclaimer text
 */
export function getDisclaimer(): string {
  return DIFFERENTIAL_DISCLAIMER;
}
