/**
 * Symptom Education Database
 *
 * Attending physician-level educational content for understanding symptoms.
 * Designed to help patients deeply understand what their symptoms mean.
 */

import type { SymptomEducation, SymptomCategory } from './types.js';

// ============================================
// Chest Pain Education
// ============================================

const CHEST_PAIN: SymptomEducation = {
  id: 'chest-pain',
  name: 'Chest Pain',
  aliases: ['chest discomfort', 'chest tightness', 'angina', 'chest pressure'],
  category: 'pain',

  whatItFeelsLike: `Chest pain can present in many different ways - as sharp stabbing pain, dull pressure, burning, tightness, or aching. The character of the pain often provides clues about its source. Some people describe it as an "elephant sitting on my chest" (classic cardiac), while others feel sharp pain with breathing (often pleural) or burning behind the breastbone (often esophageal).`,

  whyItHappens: {
    simpleExplanation: `Your chest contains several structures that can cause pain: the heart, lungs, esophagus, chest wall muscles and bones, and nerves. Each has different pain receptors and pathways, which is why chest pain can feel so different depending on the cause.`,

    detailedMechanism: `Pain signals from chest structures travel through different pathways. The heart and esophagus share visceral pain fibers through the sympathetic nervous system, which is why cardiac pain and heartburn can feel similar. The chest wall and pleura have somatic pain fibers that localize well. The convergence of visceral afferents from multiple organs at the spinal cord level explains referred pain patterns - why heart attacks can cause arm or jaw pain.`,

    mechanismTypes: [
      {
        type: 'ischemic',
        name: 'Ischemic (Cardiac) Pain',
        explanation: 'When heart muscle doesn\'t get enough blood flow, oxygen deprivation triggers pain through adenosine release and unmyelinated C fiber activation.',
        examples: ['Angina pectoris', 'Myocardial infarction'],
        characteristics: ['Pressure/squeezing quality', 'Substernal location', 'Radiates to arm/jaw', 'Brought on by exertion'],
      },
      {
        type: 'inflammatory',
        name: 'Inflammatory Pain',
        explanation: 'Inflammation releases prostaglandins, bradykinin, and cytokines that sensitize and activate pain receptors.',
        examples: ['Pericarditis', 'Pleuritis', 'Costochondritis'],
        characteristics: ['Sharp quality', 'Worse with movement/breathing', 'Localized tenderness'],
      },
      {
        type: 'mechanical',
        name: 'Mechanical/Musculoskeletal Pain',
        explanation: 'Direct stimulation of somatic pain receptors in muscles, bones, and connective tissue.',
        examples: ['Muscle strain', 'Rib fracture', 'Costochondritis'],
        characteristics: ['Reproducible with palpation', 'Related to movement', 'Well-localized'],
      },
      {
        type: 'referred',
        name: 'Referred Pain',
        explanation: 'Visceral pain from internal organs is perceived at distant somatic locations due to convergence of nerve pathways at the spinal cord.',
        examples: ['Arm pain from MI', 'Back pain from aortic dissection', 'Shoulder pain from diaphragm irritation'],
        characteristics: ['Poorly localized', 'Patient can\'t point with one finger', 'Associated with visceral symptoms'],
      },
    ],

    sensoryPathway: `Chest pain signals travel through sympathetic afferents (cardiac, esophageal) or intercostal nerves (chest wall, pleura) to dorsal horn neurons in the thoracic spinal cord, then ascend via spinothalamic tracts to the thalamus and sensory cortex.`,

    localizationExplanation: `The ability to localize pain depends on receptor density and pathway specificity. Visceral structures like the heart have sparse, diffuse innervation - explaining why cardiac pain is poorly localized and often felt as pressure or tightness. Somatic structures like the chest wall have dense, specific innervation - making pain sharp and well-localized.`,
  },

  neuralPathways: {
    receptors: [
      {
        name: 'Cardiac nociceptors',
        type: 'C fibers and Aδ fibers',
        whatItDetects: 'Ischemia (through adenosine, bradykinin, H+), stretch, inflammation',
        location: 'Myocardium and epicardium',
        clinicalRelevance: 'Silent ischemia can occur when these receptors are damaged (diabetic neuropathy)',
      },
      {
        name: 'Pleural nociceptors',
        type: 'Somatic Aδ fibers',
        whatItDetects: 'Inflammation, mechanical stretch',
        location: 'Parietal pleura (visceral pleura has no pain receptors)',
        clinicalRelevance: 'Explains why pneumothorax causes sharp, localized pain',
      },
      {
        name: 'Esophageal nociceptors',
        type: 'Visceral afferents',
        whatItDetects: 'Acid, distension, spasm',
        location: 'Esophageal mucosa and muscle',
        clinicalRelevance: 'Share pathways with cardiac afferents - why heartburn mimics angina',
      },
    ],
    pathwayDescription: 'Cardiac and esophageal pain travels via sympathetic afferents through T1-T5 dorsal root ganglia, while chest wall pain travels via intercostal nerves. Both converge at the spinal cord, ascending through spinothalamic tracts.',
    processingCenters: ['Thalamus (relay)', 'Anterior cingulate cortex (suffering aspect)', 'Somatosensory cortex (localization)', 'Insula (interoception)'],
    clinicalRelevance: 'Understanding these pathways explains why cardiac pain is poorly localized (few receptors, visceral pathway) while chest wall pain is sharp and point-able (dense innervation, somatic pathway).',
    referredPainExplanation: 'Cardiac afferents enter the spinal cord at the same level as somatic afferents from the arm and jaw (T1-T4 and cervical). The brain can\'t distinguish the source, so cardiac ischemia is felt in the arm, jaw, or neck. This is called viscerosomatic convergence.',
  },

  anatomicalSources: [
    {
      structure: 'Heart',
      structureId: 'heart',
      system: 'Cardiovascular',
      mechanism: 'Myocardial ischemia triggers release of adenosine, lactate, and bradykinin that activate cardiac pain fibers. Occurs when oxygen demand exceeds supply.',
      typicalPresentation: [
        'Substernal pressure or squeezing',
        'Radiates to left arm, jaw, or back',
        'Associated with exertion or stress',
        'Relieved by rest or nitroglycerin',
        'Associated symptoms: dyspnea, diaphoresis, nausea',
      ],
      modifyingFactors: {
        aggravating: ['Exertion', 'Emotional stress', 'Cold weather', 'Heavy meals'],
        relieving: ['Rest', 'Nitroglycerin', 'Calm breathing'],
      },
      associatedSymptoms: ['Shortness of breath', 'Sweating', 'Nausea', 'Lightheadedness', 'Palpitations'],
      frequency: 'common',
      educationalNotes: 'Cardiac pain is classically described as "pressure" not "sharp pain." If you can point to the exact spot with one finger, it\'s less likely to be cardiac. However, women and diabetics may have atypical presentations.',
    },
    {
      structure: 'Esophagus',
      structureId: 'esophagus',
      system: 'Gastrointestinal',
      mechanism: 'Acid reflux, esophageal spasm, or inflammation irritates visceral afferents that share pathways with cardiac nerves, producing similar-feeling pain.',
      typicalPresentation: [
        'Burning or pressure behind breastbone',
        'Related to meals, lying down',
        'May wake from sleep',
        'Sour taste in mouth',
        'Relieved by antacids',
      ],
      modifyingFactors: {
        aggravating: ['Large meals', 'Lying down', 'Spicy/acidic foods', 'Alcohol', 'Bending over'],
        relieving: ['Antacids', 'Sitting upright', 'Small meals'],
      },
      associatedSymptoms: ['Regurgitation', 'Difficulty swallowing', 'Sour taste', 'Chronic cough'],
      frequency: 'common',
      educationalNotes: 'GERD is extremely common and can perfectly mimic cardiac pain. However, you should never assume chest pain is "just heartburn" - cardiac causes must always be considered, especially with risk factors.',
    },
    {
      structure: 'Chest Wall',
      structureId: 'chest-wall',
      system: 'Musculoskeletal',
      mechanism: 'Direct trauma, strain, or inflammation of muscles, ribs, or cartilage activates somatic pain fibers that are sharply localized.',
      typicalPresentation: [
        'Sharp, well-localized pain',
        'Reproducible with pressing on the area',
        'Worse with movement, breathing, or twisting',
        'May follow injury or unusual activity',
        'No systemic symptoms',
      ],
      modifyingFactors: {
        aggravating: ['Deep breathing', 'Movement', 'Pressing on the area', 'Coughing'],
        relieving: ['Rest', 'NSAIDs', 'Avoiding aggravating movements'],
      },
      associatedSymptoms: ['Local tenderness', 'Swelling if injury', 'Muscle spasm'],
      frequency: 'common',
      educationalNotes: 'Costochondritis (inflammation at rib-sternum joints) is one of the most common causes of chest pain in young adults. The key feature is reproducibility - if pressing on the area reproduces the exact pain, it\'s likely musculoskeletal.',
    },
    {
      structure: 'Lungs/Pleura',
      structureId: 'lungs',
      system: 'Respiratory',
      mechanism: 'The lung tissue itself has no pain receptors, but the parietal pleura does. Inflammation, pneumothorax, or pulmonary embolism causes sharp, pleuritic pain.',
      typicalPresentation: [
        'Sharp, stabbing pain',
        'Markedly worse with breathing (pleuritic)',
        'Well-localized to one side',
        'May have associated cough',
        'Dyspnea common',
      ],
      modifyingFactors: {
        aggravating: ['Deep breathing', 'Coughing', 'Movement'],
        relieving: ['Shallow breathing', 'Splinting (holding the area)'],
      },
      associatedSymptoms: ['Shortness of breath', 'Cough', 'Fever if infectious', 'Hemoptysis if PE'],
      frequency: 'less-common',
      educationalNotes: 'Pleuritic pain that is sharp and worse with breathing suggests pleural involvement. Pulmonary embolism can present this way and is a medical emergency, especially with risk factors like recent surgery, immobility, or cancer.',
    },
    {
      structure: 'Aorta',
      structureId: 'aorta',
      system: 'Cardiovascular',
      mechanism: 'Aortic dissection tears the vessel wall, causing severe, sudden pain. The pain location follows the dissection\'s progress through the vessel.',
      typicalPresentation: [
        'Sudden, severe "tearing" or "ripping" pain',
        'Radiates to back between shoulder blades',
        'Maximum at onset (not building up)',
        'Blood pressure difference between arms',
        'May have neurological symptoms',
      ],
      modifyingFactors: {
        aggravating: ['Nothing makes it better'],
        relieving: ['Nothing helps'],
      },
      associatedSymptoms: ['Syncope', 'Stroke symptoms', 'Pulse deficits', 'Hypotension'],
      frequency: 'rare',
      educationalNotes: 'Aortic dissection is rare but catastrophic. Key features: sudden onset maximal from the start (unlike MI which builds), tearing quality, radiating to back. Risk factors include hypertension and Marfan syndrome. This is a surgical emergency.',
    },
  ],

  diagnosticCharacteristics: [
    {
      characteristic: 'Quality of Pain',
      category: 'quality',
      diagnosticValue: 'The character of pain strongly suggests the source. Pressure/squeezing = cardiac. Sharp/stabbing = chest wall or pleural. Burning = esophageal or musculoskeletal. Tearing = aortic.',
      differentiatingExamples: [
        { finding: 'Pressure or squeezing', suggestsSource: 'Cardiac ischemia', explanation: 'Visceral pain from the heart is poorly localized and described as heaviness or pressure' },
        { finding: 'Sharp, stabbing', suggestsSource: 'Pleural or musculoskeletal', explanation: 'Somatic pain fibers produce well-localized, sharp sensation' },
        { finding: 'Tearing, ripping', suggestsSource: 'Aortic dissection', explanation: 'Characteristic of vessel wall separation - a red flag' },
        { finding: 'Burning', suggestsSource: 'GERD or musculoskeletal', explanation: 'Acid-related or inflammatory pain often has burning quality' },
      ],
    },
    {
      characteristic: 'Relationship to Exertion',
      category: 'modifying',
      diagnosticValue: 'Pain that comes on with exertion and resolves with rest is classic for cardiac ischemia. Pain unaffected by exertion is less likely cardiac.',
      differentiatingExamples: [
        { finding: 'Onset with exertion, relief with rest', suggestsSource: 'Stable angina', explanation: 'Exercise increases oxygen demand; rest decreases it' },
        { finding: 'Pain at rest, especially at night', suggestsSource: 'Unstable angina or GERD', explanation: 'May indicate worsening cardiac disease or acid reflux' },
        { finding: 'Pain with specific movements', suggestsSource: 'Musculoskeletal', explanation: 'Mechanical pain related to muscle/joint use' },
      ],
    },
    {
      characteristic: 'Relationship to Breathing',
      category: 'modifying',
      diagnosticValue: 'Pleuritic pain (sharp, worse with breathing) suggests pleural or chest wall involvement. Cardiac pain is typically not affected by breathing.',
      differentiatingExamples: [
        { finding: 'Markedly worse with deep breath', suggestsSource: 'Pleurisy, pneumonia, PE, chest wall', explanation: 'Breathing moves the chest wall and pleura' },
        { finding: 'Unaffected by breathing', suggestsSource: 'Cardiac, esophageal', explanation: 'Visceral pain from heart and esophagus not affected by chest wall movement' },
      ],
    },
    {
      characteristic: 'Localization',
      category: 'location',
      diagnosticValue: 'Can you point to it with one finger? Sharp localization = somatic (chest wall). Vague, diffuse = visceral (cardiac, esophageal).',
      differentiatingExamples: [
        { finding: 'Points with one finger', suggestsSource: 'Musculoskeletal', explanation: 'Somatic pain from chest wall is precisely localizable' },
        { finding: 'Uses whole hand, vague location', suggestsSource: 'Cardiac or esophageal', explanation: 'Visceral pain is diffuse and poorly localized' },
        { finding: 'Radiates to arm, jaw, back', suggestsSource: 'Cardiac', explanation: 'Classic referred pain pattern from viscerosomatic convergence' },
      ],
    },
  ],

  redFlagEducation: [
    {
      flag: 'Sudden severe "tearing" pain radiating to back',
      whyConcerning: 'This is the classic description of aortic dissection, where the wall of the main artery is tearing. Without treatment, this can be rapidly fatal.',
      possibleIndications: ['Aortic dissection', 'Aortic aneurysm rupture'],
      recommendedAction: 'Call 911 immediately. This is a surgical emergency.',
      urgency: 'emergent',
      expectedQuestions: ['Did the pain start suddenly at maximum intensity?', 'Does it radiate to your back?', 'Do you have a history of hypertension?'],
      educationalContext: 'Aortic dissection pain is maximal at onset (unlike heart attack which builds). The tearing quality and radiation to the back are classic. Risk factors include uncontrolled hypertension and connective tissue disorders.',
    },
    {
      flag: 'Chest pain with shortness of breath, sweating, nausea',
      whyConcerning: 'This combination suggests possible heart attack. The accompanying symptoms reflect widespread sympathetic activation from cardiac distress.',
      possibleIndications: ['Myocardial infarction', 'Unstable angina', 'Pulmonary embolism'],
      recommendedAction: 'Call 911 immediately. Chew aspirin if not allergic.',
      urgency: 'emergent',
      expectedQuestions: ['When did it start?', 'What were you doing?', 'Do you have heart disease risk factors?'],
      educationalContext: 'The "Hollywood heart attack" with dramatic clutching of the chest isn\'t always how it presents. Many heart attacks cause vague discomfort with accompanying symptoms. Women especially may have atypical presentations.',
    },
    {
      flag: 'Sudden chest pain after recent surgery or prolonged immobility',
      whyConcerning: 'Recent surgery or immobility are major risk factors for blood clots. Chest pain in this context could indicate pulmonary embolism.',
      possibleIndications: ['Pulmonary embolism'],
      recommendedAction: 'Seek emergency care immediately.',
      urgency: 'emergent',
      expectedQuestions: ['Any recent surgery, travel, or bed rest?', 'Any leg swelling or pain?', 'Are you short of breath?'],
      educationalContext: 'Pulmonary embolism occurs when a blood clot (usually from the legs) travels to the lungs. The classic triad is pleuritic chest pain, dyspnea, and hemoptysis, but all three are present in only a minority of cases.',
    },
    {
      flag: 'Chest pain with leg swelling',
      whyConcerning: 'Leg swelling (especially one-sided) may indicate deep vein thrombosis, which can send clots to the lungs causing pulmonary embolism.',
      possibleIndications: ['DVT with pulmonary embolism'],
      recommendedAction: 'Seek emergency evaluation same day.',
      urgency: 'urgent',
      expectedQuestions: ['Is one leg more swollen than the other?', 'Any calf pain or warmth?', 'Risk factors for clots?'],
      educationalContext: 'DVT and PE are part of the same disease - venous thromboembolism. Classic DVT signs include unilateral leg swelling, warmth, and calf tenderness. With chest pain, PE must be excluded.',
    },
  ],

  commonCauses: [
    {
      cause: 'Gastroesophageal Reflux Disease (GERD)',
      conditionId: 'gerd',
      description: 'Stomach acid flowing back into the esophagus, causing burning chest pain often mistaken for heart problems.',
      mechanism: 'The lower esophageal sphincter relaxes inappropriately, allowing acidic stomach contents to contact the sensitive esophageal lining. The esophagus shares nerve pathways with the heart, making the pain feel similar.',
      typicalPresentation: {
        onset: 'After meals, when lying down, or at night',
        character: 'Burning, sometimes pressure',
        location: 'Behind the breastbone, may radiate to throat',
        duration: 'Minutes to hours, until treated',
        associatedSymptoms: ['Sour taste', 'Regurgitation', 'Chronic cough', 'Hoarseness'],
      },
      riskFactors: ['Obesity', 'Hiatal hernia', 'Pregnancy', 'Smoking', 'Certain foods', 'Large meals', 'Eating late'],
      howDiagnosed: 'Often clinical diagnosis based on symptoms and response to acid-suppressing medication. Endoscopy if symptoms persist or red flags present.',
      treatmentOverview: 'Lifestyle modifications (weight loss, avoiding triggers, not eating late), antacids for immediate relief, H2 blockers or PPIs for ongoing control.',
      prognosis: 'Excellent with treatment. May require long-term medication. Rarely leads to Barrett\'s esophagus (precancerous changes) requiring surveillance.',
    },
    {
      cause: 'Costochondritis',
      conditionId: 'costochondritis',
      description: 'Inflammation of the cartilage connecting ribs to the breastbone, causing sharp chest pain that mimics more serious conditions.',
      mechanism: 'Inflammation of the costochondral joints causes local pain and tenderness. The cause is often unclear but may follow viral illness, strain, or trauma.',
      typicalPresentation: {
        onset: 'May follow illness, strain, or develop gradually',
        character: 'Sharp, stabbing, or aching',
        location: 'Front of chest, usually left side, at rib-sternum junction',
        duration: 'Days to weeks, can be chronic',
        associatedSymptoms: ['Tenderness to touch', 'Worse with movement or breathing'],
      },
      riskFactors: ['Recent viral illness', 'Chest wall strain', 'Physical labor', 'Persistent cough'],
      howDiagnosed: 'Clinical diagnosis - reproducible tenderness at costochondral junctions without other concerning features.',
      treatmentOverview: 'NSAIDs for pain and inflammation, heat/ice, avoiding aggravating activities. Usually self-limited.',
      prognosis: 'Excellent. Usually resolves in weeks to months though can recur.',
    },
    {
      cause: 'Anxiety/Panic Disorder',
      conditionId: 'panic-disorder',
      description: 'Anxiety can cause very real chest pain through muscle tension, hyperventilation, and heightened body awareness.',
      mechanism: 'Anxiety causes chest wall muscle tension, hyperventilation (lowering CO2, causing tingling and chest tightness), and heightened awareness of normal sensations. The fear of having a heart attack can create a cycle.',
      typicalPresentation: {
        onset: 'During periods of stress or anxiety, or unexpectedly',
        character: 'Variable - sharp, pressure, tightness',
        location: 'Often left chest, may be vague',
        duration: 'Minutes to hours during episodes',
        associatedSymptoms: ['Palpitations', 'Shortness of breath', 'Dizziness', 'Tingling', 'Sense of doom', 'Sweating'],
      },
      riskFactors: ['History of anxiety', 'Recent stressors', 'Family history', 'Caffeine', 'Sleep deprivation'],
      howDiagnosed: 'Diagnosis of exclusion after ruling out cardiac and other causes. Pattern recognition - episodes with classic panic features.',
      treatmentOverview: 'Cognitive behavioral therapy is first-line. SSRIs for persistent disorder. Learning that symptoms aren\'t dangerous helps break the cycle.',
      prognosis: 'Very good with treatment. Many people achieve significant improvement with therapy and/or medication.',
    },
  ],

  seriousCauses: [
    {
      cause: 'Acute Coronary Syndrome (Heart Attack/Unstable Angina)',
      conditionId: 'acs',
      description: 'Blocked or critically narrowed coronary arteries causing heart muscle damage or threatened damage.',
      mechanism: 'Atherosclerotic plaque ruptures, triggering clot formation that blocks coronary blood flow. Ischemic heart muscle releases metabolites that activate pain fibers. Without restoration of blood flow, muscle dies.',
      typicalPresentation: {
        onset: 'May occur with exertion or at rest, often early morning',
        character: 'Pressure, squeezing, heaviness - "elephant on chest"',
        location: 'Substernal, radiates to left arm, neck, jaw',
        duration: 'Minutes if angina, prolonged (>20 min) if MI',
        associatedSymptoms: ['Dyspnea', 'Diaphoresis', 'Nausea', 'Lightheadedness', 'Sense of doom'],
      },
      riskFactors: ['Age', 'Male sex', 'Diabetes', 'Hypertension', 'Smoking', 'High cholesterol', 'Family history', 'Obesity'],
      howDiagnosed: 'ECG changes, troponin blood tests (heart damage markers), coronary angiography.',
      treatmentOverview: 'Emergency: aspirin, nitroglycerin, often catheterization to open blocked artery. Long-term: medications, lifestyle changes, cardiac rehab.',
      prognosis: 'Depends on amount of heart muscle damaged and how quickly treated. Early treatment saves heart muscle. Many people do very well with modern treatment.',
    },
    {
      cause: 'Pulmonary Embolism',
      conditionId: 'pe',
      description: 'Blood clot lodged in the lung arteries, blocking blood flow and potentially causing lung tissue damage.',
      mechanism: 'Clots (usually from leg veins) travel to the pulmonary arteries, blocking blood flow. This causes sudden dyspnea, and if the clot causes lung infarction, pleuritic chest pain.',
      typicalPresentation: {
        onset: 'Sudden onset',
        character: 'Sharp, pleuritic (worse with breathing)',
        location: 'Often lateral, may be vague',
        duration: 'Persistent',
        associatedSymptoms: ['Sudden dyspnea', 'Tachycardia', 'Hemoptysis', 'Leg swelling', 'Syncope'],
      },
      riskFactors: ['Recent surgery', 'Immobility', 'Cancer', 'Pregnancy', 'Estrogen use', 'Prior DVT/PE', 'Clotting disorders'],
      howDiagnosed: 'CT pulmonary angiography is the gold standard. D-dimer helps rule out in low-risk patients.',
      treatmentOverview: 'Anticoagulation (blood thinners) to prevent clot growth and allow body to dissolve it. Severe cases may need clot-busting drugs or surgical removal.',
      prognosis: 'Good if diagnosed and treated promptly. Without treatment, can be fatal. With treatment, most people recover fully.',
    },
  ],

  clinicalReasoning: {
    approachOverview: `Doctors approach chest pain by first considering life-threatening causes (the "cannot miss" diagnoses: MI, PE, dissection, tension pneumothorax, esophageal rupture). The character, timing, and associated features guide initial assessment. A detailed history is often more valuable than initial tests.`,

    keyHistoryQuestions: [
      {
        question: 'Can you describe what the pain feels like?',
        whyAsked: 'The quality of pain strongly suggests the source (pressure = cardiac, sharp = pleural/musculoskeletal, burning = esophageal)',
        whatItReveals: [
          { answer: 'Pressure or squeezing', suggests: 'Cardiac origin likely' },
          { answer: 'Sharp, stabbing', suggests: 'Pleural, musculoskeletal, or pericardial' },
          { answer: 'Burning', suggests: 'GERD or musculoskeletal' },
          { answer: 'Tearing', suggests: 'Possible aortic dissection - emergency' },
        ],
      },
      {
        question: 'Does anything bring it on or make it worse?',
        whyAsked: 'Exertional pain suggests cardiac; positional/movement-related suggests musculoskeletal; meal-related suggests GERD',
        whatItReveals: [
          { answer: 'Exertion, relieved by rest', suggests: 'Classic angina' },
          { answer: 'Movement, breathing, or touching', suggests: 'Musculoskeletal or pleural' },
          { answer: 'Meals, lying down', suggests: 'GERD' },
          { answer: 'Nothing - constant', suggests: 'May indicate more serious pathology' },
        ],
      },
      {
        question: 'Can you point to exactly where it hurts?',
        whyAsked: 'Ability to localize differentiates somatic (localizable) from visceral (diffuse) pain',
        whatItReveals: [
          { answer: 'Points with one finger', suggests: 'Likely musculoskeletal - reassuring' },
          { answer: 'Uses whole hand, vague area', suggests: 'Visceral origin - cardiac or esophageal' },
        ],
      },
    ],

    physicalExamFocus: [
      {
        examination: 'Chest wall palpation',
        whatLookingFor: 'Reproducible tenderness suggesting musculoskeletal cause',
        findings: [
          { finding: 'Pressing reproduces exact pain', interpretation: 'Strongly suggests musculoskeletal cause' },
          { finding: 'No tenderness', interpretation: 'Does not rule out musculoskeletal but makes visceral causes more likely' },
        ],
      },
      {
        examination: 'Cardiac exam',
        whatLookingFor: 'Murmurs, gallops, rubs that might suggest cardiac pathology',
        findings: [
          { finding: 'Pericardial friction rub', interpretation: 'Suggests pericarditis' },
          { finding: 'New murmur', interpretation: 'May indicate MI complication or valve issue' },
          { finding: 'Normal exam', interpretation: 'Does not rule out cardiac disease' },
        ],
      },
      {
        examination: 'Lung exam',
        whatLookingFor: 'Signs of pneumonia, pneumothorax, or effusion',
        findings: [
          { finding: 'Decreased breath sounds', interpretation: 'Possible pneumothorax or effusion' },
          { finding: 'Crackles', interpretation: 'Possible pneumonia or heart failure' },
        ],
      },
    ],

    differentiationApproach: 'The key is pattern recognition: Classic ischemic cardiac pain (substernal pressure with exertion, radiating to arm/jaw, associated symptoms) vs. clearly pleuritic pain (sharp, worse with breathing) vs. reproducibly musculoskeletal (tender to touch). When patterns overlap or presentation is atypical, testing becomes essential.',

    diagnosticPathways: [
      {
        scenario: 'Concern for acute coronary syndrome',
        initialWorkup: ['ECG within 10 minutes', 'Troponin levels', 'Chest X-ray', 'Basic labs'],
        decisionPoints: [
          { ifFinding: 'ECG shows ST elevation', thenConsider: 'STEMI - emergency', nextStep: 'Immediate cardiology, cath lab activation' },
          { ifFinding: 'Troponin elevated without ST elevation', thenConsider: 'NSTEMI', nextStep: 'Admission, anticoagulation, likely cath' },
          { ifFinding: 'Normal ECG and troponin', thenConsider: 'Low-risk if low pretest probability', nextStep: 'Risk stratification, may need stress test' },
        ],
      },
    ],
  },

  evaluationEducation: {
    whatToExpect: `For chest pain, expect a focused history and physical exam, an ECG (heart tracing), and often blood tests. The evaluation is tailored to your specific presentation and risk factors. For concerning symptoms, evaluation happens quickly.`,

    commonTests: [
      {
        testName: 'Electrocardiogram (ECG/EKG)',
        whatItChecks: 'The electrical activity of your heart - can show if there\'s ischemia, arrhythmia, or damage',
        whyOrdered: 'First-line test for any chest pain that might be cardiac. Quick, painless, very informative.',
        whatToExpect: 'Stickers placed on chest and limbs connected to wires. Lies flat for 30 seconds. No pain.',
      },
      {
        testName: 'Troponin blood test',
        whatItChecks: 'Protein released when heart muscle is damaged. The most sensitive test for heart attack.',
        whyOrdered: 'To detect heart muscle damage. May be repeated over several hours since it takes time to rise.',
        whatToExpect: 'Blood draw from arm. Results in 30-60 minutes.',
      },
      {
        testName: 'Chest X-ray',
        whatItChecks: 'Heart size, lung appearance, rib fractures, pneumothorax',
        whyOrdered: 'Quick overview of chest structures. Can show pneumonia, heart failure, pneumothorax.',
        whatToExpect: 'Stand against a plate, take a deep breath and hold it for a few seconds.',
      },
    ],

    whenImagingNeeded: 'CT scan may be needed to evaluate for pulmonary embolism (CT pulmonary angiography) or aortic dissection (CT angiography). Stress testing may be needed for stable chest pain to evaluate for coronary artery disease.',

    whenSpecialistReferral: 'Cardiology referral for confirmed or suspected cardiac causes. Gastroenterology for refractory GERD. Pulmonology for lung-related causes. Many chest pain cases are managed by primary care or emergency physicians.',

    howToPrepare: [
      'Note when the pain started and what you were doing',
      'Describe the character (sharp, pressure, burning, etc.)',
      'List anything that makes it better or worse',
      'Note any associated symptoms',
      'Bring a list of medications and medical history',
      'If taking nitroglycerin, note if it helped',
    ],
  },

  selfCareEducation: {
    whenAppropriate: 'Self-care is appropriate for clearly musculoskeletal pain (reproducible with touch, related to movement) without concerning features. Any chest pain with shortness of breath, sweating, radiation to arm/jaw, or risk factors for heart disease needs medical evaluation.',

    selfCareMeasures: [
      {
        measure: 'Over-the-counter anti-inflammatories',
        howItHelps: 'Reduce inflammation in musculoskeletal causes like costochondritis',
        howToDo: 'Ibuprofen 400-800mg or naproxen 220-440mg with food. Follow package directions.',
        cautions: ['Avoid if kidney problems, GI bleeding history, or on blood thinners', 'Don\'t use if chest pain might be cardiac'],
        evidenceLevel: 'moderate',
      },
      {
        measure: 'Heat application',
        howItHelps: 'Relaxes tight muscles, increases blood flow to help healing',
        howToDo: 'Warm compress or heating pad to the area for 15-20 minutes several times daily',
        cautions: ['Avoid if area is swollen or inflamed', 'Don\'t sleep with heating pad on'],
        evidenceLevel: 'limited',
      },
      {
        measure: 'Antacids for suspected heartburn',
        howItHelps: 'Neutralize stomach acid, providing relief if pain is from GERD',
        howToDo: 'Over-the-counter antacids as directed. If helps, supports GERD as cause.',
        cautions: ['If chest pain persists despite antacids, seek evaluation', 'Don\'t assume cardiac pain is heartburn'],
        evidenceLevel: 'strong',
      },
    ],

    whenToSeekCare: [
      'Pain with shortness of breath, sweating, or nausea',
      'Pain radiating to arm, jaw, neck, or back',
      'Sudden, severe pain',
      'Pain that doesn\'t improve with rest or OTC treatment',
      'History of heart disease or multiple risk factors',
      'Any concern that it might be your heart',
    ],

    commonMisconceptions: [
      { myth: 'If I can reproduce the pain by pressing, it can\'t be my heart', truth: 'While reproducible pain makes musculoskeletal cause more likely, it doesn\'t completely rule out cardiac cause. Chest wall tenderness can coexist with cardiac problems.' },
      { myth: 'Heart attacks always cause severe, crushing pain', truth: 'Heart attacks can present with mild discomfort, or even "silent" with no pain. Women and diabetics especially may have atypical presentations.' },
      { myth: 'If the pain goes away, I don\'t need to see a doctor', truth: 'Unstable angina may come and go. A pattern of chest pain, even if resolved, should be evaluated.' },
    ],
  },

  questionsForDoctor: [
    'What do you think is causing my chest pain?',
    'Do I need any tests, and what will they show?',
    'Are there any warning signs I should watch for?',
    'Should I come back if the pain returns or changes?',
    'Is this something that needs treatment?',
    'Could this be related to my heart?',
    'When should I seek emergency care?',
  ],

  clinicalPearls: [
    'The character of pain (pressure vs. sharp vs. burning) is more diagnostically useful than location alone',
    'A normal ECG does not rule out cardiac disease - troponin and clinical assessment are also needed',
    'GERD and cardiac pain can feel nearly identical because they share nerve pathways - this is why we take chest pain seriously',
    'Reproducible chest wall tenderness strongly suggests musculoskeletal cause but doesn\'t completely rule out cardiac',
    'Women and diabetics may have atypical presentations of heart disease - maintain high suspicion with risk factors',
    'Sudden onset maximal at start = think dissection. Gradual buildup = more typical for ischemia',
    'The combination of pleuritic pain + dyspnea + risk factors for DVT = think PE until proven otherwise',
    'Anxiety-related chest pain is real and distressing, but should be a diagnosis of exclusion',
  ],
};

// ============================================
// Headache Education
// ============================================

const HEADACHE: SymptomEducation = {
  id: 'headache',
  name: 'Headache',
  aliases: ['head pain', 'cephalalgia', 'migraine', 'tension headache'],
  category: 'pain',

  whatItFeelsLike: `Headaches vary tremendously - from dull pressure across the forehead to throbbing one-sided pain to sharp stabbing sensations. The pattern, location, and associated features often tell us what type of headache it is.`,

  whyItHappens: {
    simpleExplanation: `Interestingly, your brain itself has no pain receptors. Headache pain comes from surrounding structures - blood vessels, meninges (brain coverings), muscles, and nerves in the head and neck. Different headache types involve different mechanisms.`,

    detailedMechanism: `Primary headaches (migraine, tension, cluster) involve dysfunction of pain-sensing and pain-modulating pathways without structural disease. Migraines involve cortical spreading depression and trigeminovascular activation. Tension headaches involve peripheral and central sensitization of pericranial muscles. Secondary headaches result from underlying conditions affecting pain-sensitive structures.`,

    mechanismTypes: [
      {
        type: 'nociceptive',
        name: 'Meningeal/Vascular',
        explanation: 'The meninges and blood vessels have pain receptors. Stretching, inflammation, or vascular changes activate them.',
        examples: ['Meningitis', 'Subarachnoid hemorrhage', 'Intracranial pressure changes'],
        characteristics: ['Often severe', 'May be worse lying down (high pressure) or standing (low pressure)', 'Associated with neck stiffness if meninges involved'],
      },
      {
        type: 'central',
        name: 'Migraine Mechanism',
        explanation: 'Cortical spreading depression triggers trigeminovascular system, causing inflammation around meningeal blood vessels and central sensitization.',
        examples: ['Migraine with and without aura'],
        characteristics: ['Throbbing', 'One-sided (often)', 'Nausea/photophobia', 'Made worse by activity'],
      },
      {
        type: 'mechanical',
        name: 'Musculoskeletal',
        explanation: 'Sustained muscle contraction and myofascial trigger points in head and neck muscles cause pain.',
        examples: ['Tension-type headache'],
        characteristics: ['Band-like pressure', 'Bilateral', 'Not worsened by activity', 'Associated muscle tenderness'],
      },
    ],

    sensoryPathway: `Pain signals from intracranial structures travel via the trigeminal nerve (cranial nerve V) and upper cervical nerves (C1-C3) to the trigeminal nucleus caudalis, then to the thalamus and sensory cortex.`,

    localizationExplanation: `Headache location provides clues but isn't perfect. Frontal headaches often involve the frontal sinus or tension. Temporal headaches may be migraine or temporal arteritis. Occipital headaches often involve cervicogenic causes or occipital neuralgia.`,
  },

  anatomicalSources: [
    {
      structure: 'Meninges',
      structureId: 'meninges',
      system: 'Nervous System',
      mechanism: 'The dura mater is richly innervated with pain fibers. Inflammation, infection, or bleeding irritates these fibers.',
      typicalPresentation: ['Severe, often described as worst headache ever', 'Neck stiffness', 'Photophobia', 'Nausea/vomiting'],
      modifyingFactors: {
        aggravating: ['Neck flexion', 'Light', 'Movement'],
        relieving: ['Dark, quiet room', 'Stillness'],
      },
      associatedSymptoms: ['Neck stiffness', 'Fever (if infection)', 'Altered consciousness', 'Focal neurological signs'],
      frequency: 'rare',
      educationalNotes: 'Meningeal irritation causes the classic triad of headache, neck stiffness, and photophobia. The "jolt accentuation" test (pain with quick head rotation) has high sensitivity for meningitis.',
    },
    {
      structure: 'Pericranial Muscles',
      structureId: 'scalp-muscles',
      system: 'Musculoskeletal',
      mechanism: 'Sustained contraction of frontalis, temporalis, and neck muscles causes local pain through accumulated metabolites and mechanical stress.',
      typicalPresentation: ['Band-like pressure or tightness', 'Bilateral', 'Mild to moderate intensity', 'Not throbbing'],
      modifyingFactors: {
        aggravating: ['Stress', 'Poor posture', 'Prolonged screen time', 'Jaw clenching'],
        relieving: ['Massage', 'Relaxation', 'Heat', 'OTC pain relievers'],
      },
      associatedSymptoms: ['Muscle tenderness', 'Mild light or sound sensitivity', 'Neck discomfort'],
      frequency: 'common',
      educationalNotes: 'Tension-type headache is the most common primary headache. The bilateral "band-like" quality and lack of severe nausea or throbbing help distinguish it from migraine.',
    },
    {
      structure: 'Trigeminovascular System',
      structureId: 'trigeminal-nerve',
      system: 'Nervous System',
      mechanism: 'In migraine, cortical spreading depression activates trigeminal afferents, causing release of CGRP and neurogenic inflammation around meningeal vessels.',
      typicalPresentation: ['Unilateral (often)', 'Throbbing/pulsating', 'Moderate to severe', 'Made worse by activity'],
      modifyingFactors: {
        aggravating: ['Physical activity', 'Light', 'Sound', 'Certain foods', 'Hormonal changes', 'Stress'],
        relieving: ['Dark, quiet room', 'Sleep', 'Triptans', 'Cold compress'],
      },
      associatedSymptoms: ['Nausea/vomiting', 'Photophobia', 'Phonophobia', 'Aura (visual, sensory)'],
      frequency: 'common',
      educationalNotes: 'Migraine is a neurovascular disorder, not just a "bad headache." The prodrome, aura, headache, and postdrome phases reflect complex brain changes. Understanding this helps patients recognize and manage episodes.',
    },
  ],

  diagnosticCharacteristics: [
    {
      characteristic: 'Onset pattern',
      category: 'timing',
      diagnosticValue: 'Sudden "thunderclap" onset is an emergency (SAH until proven otherwise). Gradual onset is more typical of primary headaches.',
      differentiatingExamples: [
        { finding: 'Thunderclap (maximal in seconds)', suggestsSource: 'Subarachnoid hemorrhage', explanation: 'Sudden arterial bleeding causes instant severe pain - emergency' },
        { finding: 'Gradual build over hours', suggestsSource: 'Migraine or tension', explanation: 'Primary headaches typically build rather than explode' },
        { finding: 'Present on awakening', suggestsSource: 'Sleep apnea, hypertension, brain tumor, or medication overuse', explanation: 'Morning headaches have specific differential' },
      ],
    },
    {
      characteristic: 'Quality',
      category: 'quality',
      diagnosticValue: 'Throbbing suggests vascular component (migraine). Band-like pressure suggests tension. Stabbing may be neuralgia.',
      differentiatingExamples: [
        { finding: 'Throbbing/pulsating', suggestsSource: 'Migraine', explanation: 'Correlates with trigeminovascular activation' },
        { finding: 'Band-like pressure', suggestsSource: 'Tension-type', explanation: 'Reflects muscular component' },
        { finding: 'Sharp, stabbing, brief', suggestsSource: 'Trigeminal neuralgia or ice-pick headache', explanation: 'Neuralgic pattern' },
      ],
    },
  ],

  redFlagEducation: [
    {
      flag: '"Worst headache of my life" with sudden onset',
      whyConcerning: 'This is the classic presentation of subarachnoid hemorrhage (brain bleed) until proven otherwise. Even if it resolves, it requires emergent evaluation.',
      possibleIndications: ['Subarachnoid hemorrhage', 'Other intracranial hemorrhage'],
      recommendedAction: 'Call 911 immediately. Do not drive yourself.',
      urgency: 'emergent',
      expectedQuestions: ['Did the headache reach maximum intensity in seconds?', 'Did you lose consciousness?', 'Any neck stiffness?'],
      educationalContext: 'SAH from a ruptured aneurysm causes thunderclap headache. About 10% of people with SAH are initially misdiagnosed. A CT scan (and possibly lumbar puncture) is essential to rule this out.',
    },
    {
      flag: 'Headache with fever and stiff neck',
      whyConcerning: 'This triad suggests meningitis - infection of the brain coverings. Bacterial meningitis can progress rapidly to death without treatment.',
      possibleIndications: ['Bacterial meningitis', 'Viral meningitis', 'Subarachnoid hemorrhage'],
      recommendedAction: 'Seek emergency care immediately.',
      urgency: 'emergent',
      expectedQuestions: ['Any rash?', 'Have you been around anyone sick?', 'Any recent infections or travel?'],
      educationalContext: 'The classic meningitis triad (headache, fever, neck stiffness) is actually present in only 44% of cases. With two of three features, meningitis should still be considered.',
    },
    {
      flag: 'New headache after age 50',
      whyConcerning: 'New-onset headaches in older adults are more likely to have secondary causes including temporal arteritis, intracranial mass, or medication effects.',
      possibleIndications: ['Temporal arteritis', 'Brain tumor', 'Subdural hematoma', 'Medication-related'],
      recommendedAction: 'Prompt medical evaluation (same week).',
      urgency: 'prompt',
      expectedQuestions: ['Any scalp tenderness or jaw pain with chewing?', 'Any visual changes?', 'Any recent head trauma?'],
      educationalContext: 'Temporal arteritis (giant cell arteritis) is important to recognize in elderly patients because it can cause irreversible blindness if untreated. ESR/CRP and possibly temporal artery biopsy are key tests.',
    },
  ],

  commonCauses: [
    {
      cause: 'Tension-Type Headache',
      conditionId: 'tension-headache',
      description: 'The most common type of headache, characterized by bilateral pressure without the severe features of migraine.',
      mechanism: 'Involves peripheral muscle tension and central pain sensitization. Stress, posture, and fatigue contribute to sustained pericranial muscle contraction.',
      typicalPresentation: {
        onset: 'Gradual, often in afternoon',
        character: 'Pressing or tightening, "band around head"',
        location: 'Bilateral, forehead and/or temporal regions',
        duration: '30 minutes to 7 days',
        associatedSymptoms: ['Mild light OR sound sensitivity (not both)', 'Muscle tenderness'],
      },
      riskFactors: ['Stress', 'Poor posture', 'Inadequate sleep', 'Skipped meals', 'Eye strain'],
      howDiagnosed: 'Clinical diagnosis based on headache features. No imaging typically needed unless atypical features.',
      treatmentOverview: 'OTC analgesics for acute episodes. Prevention focuses on stress management, regular sleep/meals, posture correction. Chronic tension headache may need preventive medication.',
      prognosis: 'Generally excellent. Most people have episodic headaches that respond well to simple measures.',
    },
    {
      cause: 'Migraine',
      conditionId: 'migraine',
      description: 'A neurovascular disorder causing recurrent attacks of throbbing headache with associated symptoms.',
      mechanism: 'Involves cortical spreading depression, trigeminovascular system activation, CGRP release, and central sensitization. There is a genetic component in many cases.',
      typicalPresentation: {
        onset: 'Often with prodrome (mood changes, cravings), may have aura',
        character: 'Throbbing, pulsating, moderate to severe',
        location: 'Unilateral (60%), may switch sides',
        duration: '4-72 hours untreated',
        associatedSymptoms: ['Nausea/vomiting', 'Photophobia', 'Phonophobia', 'Aura (visual, sensory, speech)'],
      },
      riskFactors: ['Family history', 'Female sex', 'Hormonal changes', 'Stress', 'Certain foods/alcohol', 'Weather changes', 'Sleep disturbances'],
      howDiagnosed: 'Clinical diagnosis using ICHD criteria. Imaging only if red flags present.',
      treatmentOverview: 'Acute: triptans, NSAIDs, antiemetics. Prevention: various medications if frequent (beta-blockers, antidepressants, CGRP inhibitors). Lifestyle: trigger identification, regular sleep, hydration.',
      prognosis: 'Chronic but manageable. Many people achieve good control with proper treatment. Frequency often decreases with age.',
    },
  ],

  seriousCauses: [
    {
      cause: 'Subarachnoid Hemorrhage',
      conditionId: 'sah',
      description: 'Bleeding into the space between the brain and its protective covering, usually from a ruptured aneurysm.',
      mechanism: 'Cerebral aneurysm ruptures, releasing arterial blood under pressure into the subarachnoid space. Blood irritates pain-sensitive meninges and increases intracranial pressure.',
      typicalPresentation: {
        onset: 'Sudden, maximal at onset (thunderclap)',
        character: 'Severe, often described as worst headache ever',
        location: 'Often diffuse or occipital',
        duration: 'Persists, may fluctuate',
        associatedSymptoms: ['Loss of consciousness (50%)', 'Neck stiffness', 'Nausea/vomiting', 'Photophobia', 'Seizures'],
      },
      riskFactors: ['Hypertension', 'Smoking', 'Family history of aneurysm', 'Polycystic kidney disease', 'Connective tissue disorders'],
      howDiagnosed: 'CT head (sensitive in first 6 hours). If CT negative but suspicion high, lumbar puncture to look for blood products. CT angiography to identify aneurysm.',
      treatmentOverview: 'Neurosurgical or endovascular treatment to secure aneurysm. ICU monitoring. Management of complications (vasospasm, hydrocephalus).',
      prognosis: 'Serious - about 50% mortality, many survivors have neurological deficits. Outcomes better with early diagnosis and treatment.',
    },
    {
      cause: 'Brain Tumor',
      conditionId: 'brain-tumor',
      description: 'Abnormal tissue growth in the brain that can cause headaches through increased pressure or local effects.',
      mechanism: 'Tumors cause headache by displacing or stretching pain-sensitive structures (meninges, blood vessels), obstructing CSF flow, or causing edema with increased intracranial pressure.',
      typicalPresentation: {
        onset: 'Progressive over weeks to months',
        character: 'Variable, often dull and constant',
        location: 'May be localized to tumor area or diffuse',
        duration: 'Persistent, progressively worsening',
        associatedSymptoms: ['Worse in morning/lying flat', 'Nausea without GI symptoms', 'Progressive neurological deficits', 'Seizures', 'Personality changes'],
      },
      riskFactors: ['Family history of brain tumors', 'Prior radiation', 'Certain genetic syndromes', 'Immunosuppression'],
      howDiagnosed: 'MRI brain with contrast is the gold standard. CT if MRI not available.',
      treatmentOverview: 'Depends on tumor type - may include surgery, radiation, chemotherapy, or combination. Some tumors are curable, others are managed long-term.',
      prognosis: 'Varies widely depending on tumor type, location, and grade. Many benign tumors have excellent outcomes. Malignant tumors have variable prognosis.',
    },
  ],

  clinicalReasoning: {
    approachOverview: `Headache evaluation starts with identifying red flags that suggest secondary (dangerous) causes. Most headaches are primary (migraine, tension, cluster) and diagnosed clinically. The pattern of headache over time, associated features, and triggers guide diagnosis.`,

    keyHistoryQuestions: [
      {
        question: 'Is this the worst headache of your life?',
        whyAsked: 'Identifies possible subarachnoid hemorrhage - medical emergency',
        whatItReveals: [
          { answer: 'Yes, sudden and severe', suggests: 'Possible SAH - needs immediate CT' },
          { answer: 'No, similar to my usual headaches', suggests: 'More likely primary headache' },
        ],
      },
      {
        question: 'How long have you had headaches like this?',
        whyAsked: 'New-onset headaches need different workup than long-standing patterns',
        whatItReveals: [
          { answer: 'Years, similar pattern', suggests: 'Established primary headache disorder' },
          { answer: 'New in past weeks/months', suggests: 'Secondary cause should be considered' },
        ],
      },
    ],

    physicalExamFocus: [
      {
        examination: 'Neurological exam',
        whatLookingFor: 'Focal deficits suggesting structural lesion',
        findings: [
          { finding: 'Papilledema (swollen optic nerves)', interpretation: 'Increased intracranial pressure - urgent imaging needed' },
          { finding: 'Focal weakness or sensory changes', interpretation: 'May indicate structural lesion or stroke' },
        ],
      },
    ],

    differentiationApproach: 'Primary headaches are diagnosed by their characteristic patterns: migraine (throbbing, unilateral, nausea, photophobia, worse with activity), tension (bilateral, pressing, no severe features), cluster (orbital, severe, autonomic symptoms). Secondary headaches are identified by red flags and require appropriate investigation.',

    diagnosticPathways: [
      {
        scenario: 'Thunderclap headache',
        initialWorkup: ['Emergent CT head', 'If CT negative, lumbar puncture'],
        decisionPoints: [
          { ifFinding: 'Blood on CT or LP', thenConsider: 'SAH', nextStep: 'CT angiography, neurosurgical consult' },
          { ifFinding: 'Normal CT and LP', thenConsider: 'Primary thunderclap syndromes', nextStep: 'May need further vascular imaging, follow-up' },
        ],
      },
    ],
  },

  evaluationEducation: {
    whatToExpect: `For most headaches, evaluation is primarily history and physical exam. The doctor will ask detailed questions about your headache pattern. If there are concerning features, imaging (CT or MRI) may be ordered.`,

    commonTests: [
      {
        testName: 'CT Head (without contrast)',
        whatItChecks: 'Bleeding, major structural abnormalities, fractures',
        whyOrdered: 'First-line for emergent evaluation (suspected SAH, trauma)',
        whatToExpect: 'Lie flat on a table that slides through a donut-shaped scanner. Takes about 5 minutes.',
      },
      {
        testName: 'MRI Brain',
        whatItChecks: 'Detailed brain structure, tumors, white matter disease, vascular malformations',
        whyOrdered: 'Better for non-emergent structural evaluation. More sensitive for most pathology.',
        whatToExpect: 'Lie in a tube-shaped scanner for 30-60 minutes. Loud banging sounds (earplugs provided).',
      },
    ],

    whenImagingNeeded: 'Red flags that warrant imaging: thunderclap onset, new headache after age 50, neurological symptoms, change in established headache pattern, systemic symptoms, papilledema, or failure to respond to treatment.',

    whenSpecialistReferral: 'Neurology referral for frequent migraines not controlled with initial treatment, uncertain diagnosis, cluster headaches, or other complex headache disorders.',

    howToPrepare: [
      'Keep a headache diary noting frequency, duration, triggers, and associated symptoms',
      'Note what treatments you\'ve tried and their effectiveness',
      'Bring a list of all medications (headaches can be medication-related)',
      'Be ready to describe your typical headache and this headache',
    ],
  },

  selfCareEducation: {
    whenAppropriate: 'Self-care is appropriate for mild to moderate headaches without red flag features, especially if you have a known headache pattern that responds to OTC treatment.',

    selfCareMeasures: [
      {
        measure: 'OTC analgesics',
        howItHelps: 'Acetaminophen, ibuprofen, or aspirin block pain pathways',
        howToDo: 'Take at first sign of headache. Follow package directions. Avoid combining multiple analgesics.',
        cautions: ['Limit to <15 days/month to prevent medication overuse headache', 'NSAIDs can worsen GI/kidney issues'],
        evidenceLevel: 'strong',
      },
      {
        measure: 'Rest in dark, quiet room',
        howItHelps: 'Reduces sensory input that can worsen migraine',
        howToDo: 'Find a dark, quiet space. Close eyes. Apply cool compress if helpful.',
        cautions: ['Prolonged bed rest not recommended for tension headaches'],
        evidenceLevel: 'moderate',
      },
      {
        measure: 'Hydration',
        howItHelps: 'Dehydration can trigger headaches',
        howToDo: 'Drink water or electrolyte drinks. Aim for 8+ glasses daily.',
        cautions: [],
        evidenceLevel: 'limited',
      },
    ],

    whenToSeekCare: [
      'Worst headache of your life, sudden onset',
      'Headache with fever, stiff neck, rash',
      'Headache with neurological symptoms (weakness, confusion, vision changes)',
      'New-onset headache after age 50',
      'Headache pattern significantly changing',
      'Headache not responding to OTC treatment',
    ],

    commonMisconceptions: [
      { myth: 'All bad headaches are migraines', truth: 'Migraine has specific features (throbbing, nausea, light sensitivity). "Migraine" isn\'t just a severe headache - it\'s a specific disorder.' },
      { myth: 'You need a CT scan for every headache', truth: 'Most headaches are diagnosed clinically. Imaging is reserved for headaches with red flag features.' },
      { myth: 'Taking pain relievers whenever you have a headache is fine', truth: 'Using pain medications more than 15 days per month can cause "medication overuse headache" - a vicious cycle.' },
    ],
  },

  questionsForDoctor: [
    'What type of headache do I have?',
    'Do I need any imaging or tests?',
    'What should I take for acute headaches?',
    'Should I be on preventive medication?',
    'What triggers should I avoid?',
    'When should I seek emergency care?',
  ],

  clinicalPearls: [
    'The most important question in headache evaluation: "Is this the worst headache of your life?"',
    'Headache that wakes someone from sleep needs explanation - either migraine, cluster, or secondary cause',
    'Papilledema on exam = increased intracranial pressure until proven otherwise',
    'New daily persistent headache (NDPH) is a specific diagnosis where people remember exactly when daily headache began',
    'Medication overuse headache is extremely common - always ask about analgesic frequency',
    'Migraine aura typically develops over 5-20 minutes and lasts less than 60 minutes. Sudden onset suggests TIA.',
  ],
};

// ============================================
// Export Database
// ============================================

export const SYMPTOM_EDUCATION: Record<string, SymptomEducation> = {
  'chest-pain': CHEST_PAIN,
  'headache': HEADACHE,
};

// ============================================
// Helper Functions
// ============================================

export function getSymptomEducation(id: string): SymptomEducation | undefined {
  return SYMPTOM_EDUCATION[id];
}

export function getSymptomEducationByName(name: string): SymptomEducation | undefined {
  const lower = name.toLowerCase();
  return Object.values(SYMPTOM_EDUCATION).find(
    s => s.name.toLowerCase() === lower || s.aliases.some(a => a.toLowerCase() === lower)
  );
}

export function getAllSymptomEducation(): SymptomEducation[] {
  return Object.values(SYMPTOM_EDUCATION);
}

export function getSymptomsByCategory(category: SymptomCategory): SymptomEducation[] {
  return Object.values(SYMPTOM_EDUCATION).filter(s => s.category === category);
}
