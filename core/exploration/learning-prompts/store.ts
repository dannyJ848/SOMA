/**
 * Symptom-Triggered Learning Prompts Store
 *
 * Data and functions for contextual educational content
 * triggered when users log symptoms.
 */

import type {
  SymptomLearningPrompt,
  LearningPromptPreferences,
  DismissedPrompt,
  PromptTriggerEvent,
  SymptomContext,
  PromptSearchResult,
  LearningPromptDisplayState,
} from './types';

/**
 * Learning prompts for common symptoms
 */
export const symptomLearningPrompts: Map<string, SymptomLearningPrompt> = new Map([
  ['headache', {
    promptId: 'learn-headache',
    symptom: 'headache',
    symptomAliases: ['head pain', 'head ache', 'cephalalgia', 'migraine', 'tension headache'],
    title: 'Understanding Your Headache',
    teaser: 'Learn what causes headaches and when they need attention',
    contentSections: [
      {
        sectionId: 'anatomy-head',
        type: 'anatomy',
        title: 'Anatomy of Head Pain',
        summary: 'The structures that can cause headaches',
        content: 'Headaches can originate from various structures: the meninges (coverings of the brain), blood vessels, muscles of the head and neck, sinuses, or the trigeminal nerve. The brain itself has no pain receptors, so headaches come from surrounding tissues.',
        visualizationId: 'head-pain-anatomy',
        interactiveElements: [
          {
            elementId: 'view-meninges',
            type: 'anatomy-highlight',
            label: 'View Meninges',
            action: 'highlight',
            targetId: 'nervous-meninges',
          },
          {
            elementId: 'view-trigeminal',
            type: 'anatomy-highlight',
            label: 'View Trigeminal Nerve',
            action: 'highlight',
            targetId: 'nervous-trigeminal',
          },
        ],
      },
      {
        sectionId: 'pathophysiology-headache',
        type: 'pathophysiology',
        title: 'Why Headaches Happen',
        summary: 'The mechanisms behind different types of headaches',
        content: 'Tension headaches involve muscle contraction and sensitization of pain pathways. Migraines involve cortical spreading depression and activation of the trigeminovascular system with release of CGRP. Sinus headaches result from inflammation and pressure in the paranasal sinuses.',
      },
      {
        sectionId: 'types-headache',
        type: 'differential',
        title: 'Types of Headaches',
        summary: 'Different headache patterns and what they mean',
        content: 'Primary headaches (tension, migraine, cluster) are the headache itself. Secondary headaches are symptoms of another condition. Location, quality, timing, and associated symptoms help distinguish types.',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'nervous-meninges',
        structureName: 'Meninges',
        system: 'Nervous',
        relevance: 'Meningeal irritation causes severe headache',
        viewSettings: {
          cameraPosition: { x: 0, y: 0.5, z: 1.5 },
          highlightColor: '#E74C3C',
          isolate: false,
        },
      },
      {
        structureId: 'musculoskeletal-cervical-muscles',
        structureName: 'Cervical Muscles',
        system: 'Musculoskeletal',
        relevance: 'Tension in neck muscles often causes headaches',
        viewSettings: {
          cameraPosition: { x: 0.5, y: 0.3, z: 1.5 },
          highlightColor: '#3498DB',
          isolate: false,
        },
      },
    ],
    relatedSymptoms: ['neck pain', 'nausea', 'light sensitivity', 'visual changes'],
    relatedConditions: [
      {
        conditionId: 'migraine',
        name: 'Migraine',
        relationship: 'causes',
        brief: 'Severe recurring headaches often with nausea and light sensitivity',
      },
      {
        conditionId: 'tension-headache',
        name: 'Tension-type Headache',
        relationship: 'causes',
        brief: 'Most common headache type, band-like pressure',
      },
      {
        conditionId: 'hypertension',
        name: 'High Blood Pressure',
        relationship: 'associated',
        brief: 'Severely elevated BP can cause headaches',
      },
    ],
    whenToSeekCare: {
      summary: 'Most headaches are benign, but certain features warrant immediate evaluation.',
      urgentSigns: [
        'Sudden severe headache ("worst headache of life")',
        'Headache with fever, stiff neck, rash',
        'Headache after head injury',
        'Headache with weakness, numbness, vision changes',
        'New headache pattern after age 50',
      ],
      routineReasons: [
        'Headaches affecting quality of life',
        'Needing pain medication more than 2-3 times per week',
        'Pattern change from usual headaches',
      ],
      selfCareOptions: [
        'Rest in a quiet, dark room',
        'Stay hydrated',
        'Over-the-counter pain relievers (use sparingly)',
        'Apply cold or warm compress',
        'Practice relaxation techniques',
      ],
      disclaimer: 'This information is educational. Consult a healthcare provider for persistent or concerning headaches.',
    },
    priority: 'medium',
    estimatedReadTime: '5 min',
    explanations: {
      level1: 'A headache is pain in your head. It can come from the muscles, blood vessels, or nerves around your brain - not the brain itself, which can\'t feel pain.',
      level2: 'Headaches happen when pain-sensitive structures around the brain are irritated. This includes muscles that get tense, blood vessels that swell, or nerves that get activated. Different causes create different types of headaches.',
      level3: 'The brain parenchyma lacks nociceptors, but the meninges, vessels, and pericranial muscles are richly innervated. Tension headaches involve peripheral and central sensitization of pain pathways. Migraines involve cortical spreading depression and trigeminovascular activation with CGRP release.',
      level4: 'Primary headaches involve distinct pathophysiological mechanisms: tension-type headaches show myofascial trigger points and central sensitization; migraines demonstrate cortical spreading depression (a wave of neuronal depolarization) followed by trigeminovascular activation; cluster headaches involve hypothalamic activation and trigeminal-autonomic reflex. Secondary headaches require excluding underlying pathology.',
      level5: 'The trigeminal nerve (V1) innervates the anterior dura and cerebral vessels. Nociceptive signals travel via the trigeminal ganglion to the trigeminal nucleus caudalis (TNC), converging with cervical afferents (C1-C3). Migraine involves CSD-mediated meningeal inflammation with CGRP, PACAP, and substance P release from trigeminal terminals. Central sensitization in the TNC and thalamus underlies allodynia. Descending modulation from PAG and RVM is dysfunctional in chronic headache.',
    },
  }],

  ['chest-pain', {
    promptId: 'learn-chest-pain',
    symptom: 'chest pain',
    symptomAliases: ['chest discomfort', 'chest tightness', 'chest pressure', 'heart pain'],
    title: 'Understanding Chest Pain',
    teaser: 'Learn about chest pain causes and when to seek help',
    contentSections: [
      {
        sectionId: 'anatomy-chest',
        type: 'anatomy',
        title: 'What Can Cause Chest Pain',
        summary: 'Many structures in the chest can cause pain',
        content: 'The chest contains the heart, lungs, esophagus, chest wall muscles, ribs, and nerves. Pain can come from any of these structures. Heart pain often radiates to the arm or jaw. Lung pain is often sharp with breathing. Muscle pain is often reproducible with movement.',
        visualizationId: 'chest-anatomy',
        interactiveElements: [
          {
            elementId: 'view-heart',
            type: 'anatomy-highlight',
            label: 'View Heart',
            action: 'highlight',
            targetId: 'cardiovascular-heart',
          },
          {
            elementId: 'view-lungs',
            type: 'anatomy-highlight',
            label: 'View Lungs',
            action: 'highlight',
            targetId: 'respiratory-lungs',
          },
        ],
      },
      {
        sectionId: 'pathophysiology-chest',
        type: 'pathophysiology',
        title: 'How Different Chest Pain Feels',
        summary: 'Pain characteristics help identify the source',
        content: 'Cardiac chest pain is often pressure-like and may radiate. Pleuritic pain is sharp and worsens with breathing. Musculoskeletal pain is often reproducible with palpation. GERD causes burning that worsens with lying down.',
      },
      {
        sectionId: 'differential-chest',
        type: 'differential',
        title: 'Causes of Chest Pain',
        summary: 'From heart attacks to muscle strain',
        content: 'Cardiac causes include angina, heart attack, and pericarditis. Pulmonary causes include pneumonia, pulmonary embolism, and pleurisy. GI causes include GERD and esophageal spasm. Musculoskeletal causes include costochondritis and muscle strain.',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'cardiovascular-heart',
        structureName: 'Heart',
        system: 'Cardiovascular',
        relevance: 'Cardiac ischemia causes chest pain',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#E74C3C',
          isolate: false,
        },
      },
      {
        structureId: 'respiratory-lungs',
        structureName: 'Lungs',
        system: 'Respiratory',
        relevance: 'Lung problems can cause chest pain',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#3498DB',
          isolate: false,
        },
      },
      {
        structureId: 'digestive-esophagus',
        structureName: 'Esophagus',
        system: 'Digestive',
        relevance: 'GERD and esophageal spasm cause chest pain',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#F39C12',
          isolate: false,
        },
      },
    ],
    relatedSymptoms: ['shortness of breath', 'arm pain', 'jaw pain', 'heartburn', 'sweating'],
    relatedConditions: [
      {
        conditionId: 'acs',
        name: 'Acute Coronary Syndrome',
        relationship: 'causes',
        brief: 'Heart attack or unstable angina - a medical emergency',
      },
      {
        conditionId: 'gerd',
        name: 'GERD',
        relationship: 'causes',
        brief: 'Acid reflux can mimic heart pain',
      },
      {
        conditionId: 'costochondritis',
        name: 'Costochondritis',
        relationship: 'causes',
        brief: 'Inflammation of rib cartilage',
      },
    ],
    whenToSeekCare: {
      summary: 'Chest pain can be serious. When in doubt, seek immediate evaluation.',
      urgentSigns: [
        'Crushing or pressure-like chest pain',
        'Pain radiating to arm, jaw, or back',
        'Shortness of breath with chest pain',
        'Chest pain with sweating, nausea, or lightheadedness',
        'Chest pain lasting more than a few minutes',
        'Any concerning chest pain with cardiac risk factors',
      ],
      routineReasons: [
        'Mild, brief chest discomfort that has resolved',
        'Chest wall tenderness after strain',
        'Known GERD with typical symptoms',
      ],
      selfCareOptions: [
        'Do NOT delay seeking care if symptoms are concerning',
        'If known GERD: antacids may help',
        'If muscular: rest and OTC pain relievers',
        'Avoid exertion until evaluated',
      ],
      disclaimer: 'Chest pain can be life-threatening. When in doubt, call emergency services or go to the ER immediately.',
    },
    priority: 'high',
    estimatedReadTime: '6 min',
    explanations: {
      level1: 'Chest pain can come from your heart, lungs, muscles, or stomach. Some chest pain is serious and needs immediate help. If you have bad chest pain, especially with trouble breathing or sweating, get help right away.',
      level2: 'The chest contains many organs, any of which can cause pain. Heart pain is often pressure-like and may spread to the arm. Lung pain is often sharp with breathing. Muscle pain hurts when you press on it. Acid reflux causes burning. Heart-related chest pain is an emergency.',
      level3: 'Chest pain requires careful evaluation because it can range from benign musculoskeletal causes to life-threatening cardiac events. Key distinguishing features include pain quality (pressure vs. sharp vs. burning), relation to exertion, radiation pattern, associated symptoms, and reproducibility with palpation. Cardiac risk factors influence the probability of ischemic causes.',
      level4: 'The differential diagnosis of chest pain includes: cardiac (ACS, stable angina, pericarditis, aortic dissection), pulmonary (PE, pneumothorax, pneumonia, pleurisy), GI (GERD, esophageal spasm, PUD), musculoskeletal (costochondritis, muscle strain), and other (herpes zoster, anxiety). Risk stratification uses HEART score or similar tools. Typical angina is substernal pressure, exertion-induced, and relieved by rest/nitroglycerin.',
      level5: 'Cardiac nociception involves unmyelinated C-fibers responding to adenosine, bradykinin, and serotonin released during ischemia. Afferents travel via cardiac plexus and sympathetic chain to T1-T5 dorsal horn, explaining referral to arm and jaw. Visceral-somatic convergence in the dorsal horn underlies the often vague localization of cardiac pain. The HEART pathway (History, ECG, Age, Risk factors, Troponin) provides evidence-based risk stratification. High-sensitivity troponin enables early rule-out protocols.',
    },
  }],

  ['fatigue', {
    promptId: 'learn-fatigue',
    symptom: 'fatigue',
    symptomAliases: ['tiredness', 'exhaustion', 'low energy', 'lethargy', 'malaise'],
    title: 'Understanding Fatigue',
    teaser: 'Why you might feel tired and what to do about it',
    contentSections: [
      {
        sectionId: 'causes-fatigue',
        type: 'differential',
        title: 'What Causes Fatigue',
        summary: 'Many conditions can make you tired',
        content: 'Fatigue can result from lifestyle factors (poor sleep, stress, inactivity), medical conditions (anemia, thyroid disorders, diabetes, infections, depression), or medications. Identifying the cause helps target treatment.',
      },
      {
        sectionId: 'physiology-energy',
        type: 'pathophysiology',
        title: 'How Your Body Makes Energy',
        summary: 'The biology of feeling energized',
        content: 'Cells produce energy (ATP) in mitochondria from glucose and oxygen. Hormones like thyroid hormone regulate metabolism. Sleep restores brain function and clears toxins. Anemia reduces oxygen delivery. Understanding these systems helps explain fatigue.',
        visualizationId: 'energy-metabolism',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'endocrine-thyroid',
        structureName: 'Thyroid Gland',
        system: 'Endocrine',
        relevance: 'Thyroid dysfunction is a common cause of fatigue',
        viewSettings: {
          cameraPosition: { x: 0, y: 0.5, z: 1.5 },
          highlightColor: '#9B59B6',
          isolate: false,
        },
      },
      {
        structureId: 'cardiovascular-bone-marrow',
        structureName: 'Bone Marrow',
        system: 'Cardiovascular',
        relevance: 'Anemia from bone marrow causes fatigue',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#E74C3C',
          isolate: false,
        },
      },
    ],
    relatedSymptoms: ['weakness', 'difficulty concentrating', 'sleepiness', 'muscle aches'],
    relatedConditions: [
      {
        conditionId: 'hypothyroidism',
        name: 'Hypothyroidism',
        relationship: 'causes',
        brief: 'Underactive thyroid slows metabolism',
      },
      {
        conditionId: 'anemia',
        name: 'Anemia',
        relationship: 'causes',
        brief: 'Low red blood cells reduce oxygen delivery',
      },
      {
        conditionId: 'depression',
        name: 'Depression',
        relationship: 'causes',
        brief: 'Mental health conditions commonly cause fatigue',
      },
      {
        conditionId: 'sleep-apnea',
        name: 'Sleep Apnea',
        relationship: 'causes',
        brief: 'Disrupted sleep from breathing pauses',
      },
    ],
    whenToSeekCare: {
      summary: 'Persistent fatigue lasting more than 2-4 weeks deserves evaluation.',
      urgentSigns: [
        'Severe fatigue with chest pain or shortness of breath',
        'Fatigue with significant weight loss',
        'Fatigue with fever that doesn\'t resolve',
        'Fatigue with severe weakness or fainting',
      ],
      routineReasons: [
        'Fatigue lasting more than 2-4 weeks',
        'Fatigue interfering with daily activities',
        'Fatigue with other symptoms (weight change, mood changes)',
        'Fatigue not improved with better sleep',
      ],
      selfCareOptions: [
        'Prioritize 7-9 hours of quality sleep',
        'Regular physical activity (even when tired)',
        'Balanced nutrition with adequate iron',
        'Manage stress through relaxation techniques',
        'Limit caffeine and alcohol',
      ],
      disclaimer: 'This information is educational. Persistent fatigue should be evaluated by a healthcare provider.',
    },
    priority: 'medium',
    estimatedReadTime: '4 min',
    explanations: {
      level1: 'Feeling tired all the time can happen for many reasons - not enough sleep, stress, or sometimes a health problem. If you\'re always tired even when you sleep well, it\'s good to see a doctor.',
      level2: 'Fatigue is more than just sleepiness - it\'s a persistent lack of energy that affects your ability to function. Common causes include poor sleep, stress, and lifestyle factors. Medical causes include anemia (low blood), thyroid problems, and depression. Blood tests can often identify treatable causes.',
      level3: 'Fatigue results from disruption of normal energy homeostasis. Cellular energy production requires adequate oxygen delivery (anemia), proper metabolic regulation (thyroid function), and glucose availability (diabetes). Sleep restores brain function through glymphatic clearance. Inflammatory cytokines cause the fatigue of infection. A systematic approach evaluates these pathways.',
      level4: 'The differential diagnosis of fatigue includes: endocrine (hypothyroidism, diabetes, adrenal insufficiency), hematologic (anemia of various etiologies), infectious (acute infection, chronic infections like EBV), sleep disorders (OSA, insomnia), psychiatric (depression, anxiety), cardiac (heart failure), and malignancy. Initial workup typically includes CBC, CMP, TSH, and possibly ferritin and vitamin levels.',
      level5: 'Fatigue pathophysiology involves multiple mechanisms: (1) Mitochondrial dysfunction reduces ATP production; (2) HPA axis dysregulation alters cortisol patterns; (3) Pro-inflammatory cytokines (IL-1, IL-6, TNF-α) activate central fatigue pathways; (4) Neurotransmitter imbalances (dopamine, serotonin) affect motivation and arousal; (5) Sleep fragmentation impairs glymphatic clearance and cognitive restoration. Central fatigue involves altered signaling in prefrontal cortex and basal ganglia circuits. The subjective experience emerges from integration of peripheral metabolic signals with central fatigue networks.',
    },
  }],

  ['abdominal-pain', {
    promptId: 'learn-abdominal-pain',
    symptom: 'abdominal pain',
    symptomAliases: ['stomach pain', 'belly pain', 'tummy ache', 'stomach ache', 'gut pain'],
    title: 'Understanding Abdominal Pain',
    teaser: 'What your belly pain might mean',
    contentSections: [
      {
        sectionId: 'anatomy-abdomen',
        type: 'anatomy',
        title: 'Organs in Your Abdomen',
        summary: 'Many organs can cause abdominal pain',
        content: 'The abdomen contains the stomach, intestines, liver, gallbladder, pancreas, spleen, and kidneys. Pain location helps identify the source: upper middle (stomach, pancreas), upper right (liver, gallbladder), lower right (appendix), lower left (colon).',
        visualizationId: 'abdominal-anatomy',
        interactiveElements: [
          {
            elementId: 'view-gi-tract',
            type: 'anatomy-highlight',
            label: 'View GI Tract',
            action: 'highlight',
            targetId: 'digestive-system',
          },
        ],
      },
      {
        sectionId: 'types-pain',
        type: 'pathophysiology',
        title: 'Types of Abdominal Pain',
        summary: 'Different pain patterns mean different things',
        content: 'Visceral pain (from organs) is vague and crampy. Somatic pain (from peritoneum) is sharp and localized. Referred pain appears distant from its source. Colicky pain comes in waves from hollow organ obstruction.',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'digestive-stomach',
        structureName: 'Stomach',
        system: 'Digestive',
        relevance: 'Gastritis and ulcers cause upper abdominal pain',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#E67E22',
          isolate: false,
        },
      },
      {
        structureId: 'digestive-appendix',
        structureName: 'Appendix',
        system: 'Digestive',
        relevance: 'Appendicitis causes right lower abdominal pain',
        viewSettings: {
          cameraPosition: { x: 0.3, y: -0.3, z: 2 },
          highlightColor: '#E74C3C',
          isolate: false,
        },
      },
      {
        structureId: 'digestive-gallbladder',
        structureName: 'Gallbladder',
        system: 'Digestive',
        relevance: 'Gallstones cause right upper abdominal pain',
        viewSettings: {
          cameraPosition: { x: 0.3, y: 0.3, z: 2 },
          highlightColor: '#27AE60',
          isolate: false,
        },
      },
    ],
    relatedSymptoms: ['nausea', 'vomiting', 'diarrhea', 'constipation', 'bloating', 'fever'],
    relatedConditions: [
      {
        conditionId: 'appendicitis',
        name: 'Appendicitis',
        relationship: 'causes',
        brief: 'Inflamed appendix - a surgical emergency',
      },
      {
        conditionId: 'gallstones',
        name: 'Gallstones',
        relationship: 'causes',
        brief: 'Stones in gallbladder causing colicky pain',
      },
      {
        conditionId: 'ibs',
        name: 'Irritable Bowel Syndrome',
        relationship: 'causes',
        brief: 'Chronic pain with altered bowel habits',
      },
    ],
    whenToSeekCare: {
      summary: 'Abdominal pain varies from minor to life-threatening. Location and associated symptoms guide urgency.',
      urgentSigns: [
        'Severe or sudden onset abdominal pain',
        'Pain with fever and vomiting',
        'Rigid or board-like abdomen',
        'Pain with bloody stool or vomit',
        'Pain with inability to pass gas or stool',
        'Pain after abdominal trauma',
        'Severe pain radiating to back (possible pancreatitis or aortic aneurysm)',
      ],
      routineReasons: [
        'Mild, intermittent pain without alarm features',
        'Pain associated with diet',
        'Chronic symptoms being evaluated',
      ],
      selfCareOptions: [
        'Clear liquids if nausea present',
        'Avoid trigger foods',
        'Over-the-counter antacids for heartburn',
        'Heating pad for cramps',
      ],
      disclaimer: 'Severe abdominal pain can indicate a surgical emergency. Do not delay seeking care for concerning symptoms.',
    },
    priority: 'high',
    estimatedReadTime: '5 min',
    explanations: {
      level1: 'Belly pain can come from your stomach, intestines, or other organs inside. Where it hurts gives clues about what\'s causing it. If the pain is really bad or you have a fever, see a doctor.',
      level2: 'The abdomen contains many organs, and pain location helps identify the problem. Upper right pain suggests gallbladder. Upper middle suggests stomach. Lower right suggests appendix. The pain quality also matters - crampy pain suggests intestines, steady pain suggests inflammation.',
      level3: 'Abdominal pain can be visceral (from stretching of organ walls), somatic (from peritoneal inflammation), or referred (perceived distant from the source). Visceral pain is poorly localized and crampy. Somatic pain is sharp and well-localized. Understanding these mechanisms helps interpret pain patterns and urgency.',
      level4: 'The differential diagnosis of abdominal pain is guided by location (quadrants), pain character (visceral vs. somatic), temporal pattern, and associated features. Right upper quadrant pain suggests hepatobiliary disease. Epigastric pain suggests gastric, pancreatic, or cardiac origin. Periumbilical-to-RLQ migration suggests appendicitis. Obstructive patterns show colicky pain with vomiting. Peritoneal signs indicate surgical urgency.',
      level5: 'Abdominal nociception involves distinct neural pathways: visceral afferents (sparse, bilateral, follow splanchnic nerves to T5-L2) produce poorly localized, referred pain; somatic afferents (from parietal peritoneum via intercostal nerves) provide precise localization. Peritoneal inflammation causes guarding through visceromotor reflexes. The transition from visceral to somatic pain in appendicitis reflects progression from visceral stretch to peritoneal involvement. Systemic inflammatory response (tachycardia, fever, leukocytosis) indicates transmural disease. CT imaging provides anatomical diagnosis in unclear cases.',
    },
  }],

  ['shortness-of-breath', {
    promptId: 'learn-dyspnea',
    symptom: 'shortness of breath',
    symptomAliases: ['dyspnea', 'breathlessness', 'difficulty breathing', 'cant breathe', 'air hunger'],
    title: 'Understanding Shortness of Breath',
    teaser: 'Why breathing might feel difficult',
    contentSections: [
      {
        sectionId: 'anatomy-respiratory',
        type: 'anatomy',
        title: 'How You Breathe',
        summary: 'The respiratory system and breathing mechanics',
        content: 'Breathing involves the lungs, airways, diaphragm, chest wall muscles, and the brain\'s respiratory center. Problems in any of these areas can cause shortness of breath. The heart and blood oxygen levels also affect breathing.',
        visualizationId: 'respiratory-anatomy',
        interactiveElements: [
          {
            elementId: 'view-lungs',
            type: 'anatomy-highlight',
            label: 'View Lungs',
            action: 'highlight',
            targetId: 'respiratory-lungs',
          },
          {
            elementId: 'view-diaphragm',
            type: 'anatomy-highlight',
            label: 'View Diaphragm',
            action: 'highlight',
            targetId: 'respiratory-diaphragm',
          },
        ],
      },
      {
        sectionId: 'causes-dyspnea',
        type: 'differential',
        title: 'Causes of Breathlessness',
        summary: 'Lung, heart, and other causes',
        content: 'Lung causes include asthma, COPD, pneumonia, and pulmonary embolism. Heart causes include heart failure and heart attacks. Other causes include anemia, anxiety, and deconditioning. Sudden severe breathlessness is always urgent.',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'respiratory-lungs',
        structureName: 'Lungs',
        system: 'Respiratory',
        relevance: 'Primary organs of gas exchange',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#3498DB',
          isolate: false,
        },
      },
      {
        structureId: 'cardiovascular-heart',
        structureName: 'Heart',
        system: 'Cardiovascular',
        relevance: 'Heart problems can cause breathlessness',
        viewSettings: {
          cameraPosition: { x: 0, y: 0, z: 2 },
          highlightColor: '#E74C3C',
          isolate: false,
        },
      },
    ],
    relatedSymptoms: ['chest pain', 'cough', 'wheezing', 'leg swelling', 'palpitations'],
    relatedConditions: [
      {
        conditionId: 'asthma',
        name: 'Asthma',
        relationship: 'causes',
        brief: 'Airway inflammation causing wheezing and breathlessness',
      },
      {
        conditionId: 'heart-failure',
        name: 'Heart Failure',
        relationship: 'causes',
        brief: 'Fluid backup causes breathlessness, especially lying down',
      },
      {
        conditionId: 'pe',
        name: 'Pulmonary Embolism',
        relationship: 'causes',
        brief: 'Blood clot in lung - a medical emergency',
      },
    ],
    whenToSeekCare: {
      summary: 'New or sudden shortness of breath should always be evaluated promptly.',
      urgentSigns: [
        'Sudden severe shortness of breath',
        'Difficulty breathing at rest',
        'Blue lips or fingernails',
        'Chest pain with breathlessness',
        'Inability to speak in full sentences',
        'Confusion or altered consciousness',
        'Recent surgery or prolonged immobility with new breathlessness',
      ],
      routineReasons: [
        'Gradual change in exercise tolerance',
        'Breathlessness with known stable condition (asthma, COPD)',
        'Mild breathlessness with exertion only',
      ],
      selfCareOptions: [
        'Sit upright to ease breathing',
        'Use prescribed inhalers as directed',
        'Pursed lip breathing for COPD',
        'Stay calm - anxiety worsens breathlessness',
      ],
      disclaimer: 'Sudden or severe shortness of breath is a medical emergency. Call emergency services immediately.',
    },
    priority: 'high',
    estimatedReadTime: '5 min',
    explanations: {
      level1: 'Feeling like you can\'t get enough air can be scary. It can happen because of your lungs, heart, or even being out of shape. If you suddenly can\'t breathe well, get help right away.',
      level2: 'Shortness of breath (dyspnea) happens when you feel you can\'t get enough air. Causes include lung problems (asthma, pneumonia), heart problems (heart failure), blood problems (anemia), and anxiety. The pattern - sudden vs. gradual, at rest vs. with activity - helps identify the cause.',
      level3: 'Dyspnea results from a mismatch between ventilatory drive and the ability to breathe. The sensation involves integration of signals from chemoreceptors (detecting CO2 and O2), mechanoreceptors (detecting lung and chest wall stretch), and higher cortical input. Cardiac dyspnea reflects pulmonary congestion; pulmonary dyspnea reflects airflow limitation or gas exchange impairment.',
      level4: 'The differential diagnosis of dyspnea includes: pulmonary (obstructive - asthma/COPD, restrictive - ILD, vascular - PE, infectious - pneumonia), cardiac (systolic/diastolic heart failure, ACS, pericardial disease), neuromuscular, metabolic (acidosis, anemia), and psychogenic causes. Key discriminators include acuity, positional changes (orthopnea, platypnea), associated symptoms, and exam findings (wheezing, crackles, JVD).',
      level5: 'Dyspnea perception involves cortical integration of multiple afferent signals: medullary chemoreceptor response to hypercapnia and hypoxia; pulmonary stretch receptor (Hering-Breuer reflex); chest wall proprioception; and airway irritant receptors. The insular cortex processes dyspnea similarly to pain. Cardiac dyspnea involves elevated PCWP causing alveolar edema and J-receptor stimulation. Obstructive lung disease causes dynamic hyperinflation and respiratory muscle fatigue. BNP elevation distinguishes cardiac from pulmonary causes. V/Q mismatch from PE causes hypoxemia disproportionate to imaging findings.',
    },
  }],

  ['joint-pain', {
    promptId: 'learn-joint-pain',
    symptom: 'joint pain',
    symptomAliases: ['arthralgia', 'knee pain', 'hip pain', 'shoulder pain', 'joint ache', 'arthritis'],
    title: 'Understanding Joint Pain',
    teaser: 'What makes your joints hurt',
    contentSections: [
      {
        sectionId: 'anatomy-joints',
        type: 'anatomy',
        title: 'Inside Your Joints',
        summary: 'The structures that can cause joint pain',
        content: 'Joints are where bones meet. They contain cartilage (cushioning), synovium (lining), ligaments, and fluid. Pain can come from any of these structures. Surrounding tendons and muscles can also cause joint-area pain.',
        visualizationId: 'joint-anatomy',
      },
      {
        sectionId: 'types-arthritis',
        type: 'differential',
        title: 'Types of Joint Problems',
        summary: 'From wear-and-tear to inflammatory arthritis',
        content: 'Osteoarthritis is wear-and-tear arthritis. Rheumatoid arthritis is autoimmune inflammation. Gout causes crystal deposits. Infectious arthritis is a medical emergency. The pattern of joints affected helps diagnosis.',
      },
    ],
    anatomyLinks: [
      {
        structureId: 'musculoskeletal-knee',
        structureName: 'Knee Joint',
        system: 'Musculoskeletal',
        relevance: 'Common site of osteoarthritis',
        viewSettings: {
          cameraPosition: { x: 0, y: -0.5, z: 1.5 },
          highlightColor: '#3498DB',
          isolate: true,
        },
      },
    ],
    relatedSymptoms: ['swelling', 'stiffness', 'redness', 'warmth', 'limited range of motion'],
    relatedConditions: [
      {
        conditionId: 'osteoarthritis',
        name: 'Osteoarthritis',
        relationship: 'causes',
        brief: 'Degenerative joint disease from cartilage breakdown',
      },
      {
        conditionId: 'rheumatoid-arthritis',
        name: 'Rheumatoid Arthritis',
        relationship: 'causes',
        brief: 'Autoimmune joint inflammation',
      },
      {
        conditionId: 'gout',
        name: 'Gout',
        relationship: 'causes',
        brief: 'Crystal arthritis causing severe sudden pain',
      },
    ],
    whenToSeekCare: {
      summary: 'Joint pain with redness and warmth needs prompt evaluation. Chronic joint pain benefits from diagnosis.',
      urgentSigns: [
        'Hot, red, swollen joint (possible infection)',
        'Fever with joint pain',
        'Unable to bear weight',
        'Sudden severe joint pain',
        'Joint deformity after injury',
      ],
      routineReasons: [
        'Chronic joint pain affecting activities',
        'Multiple joints affected',
        'Joint stiffness lasting more than 30 minutes',
        'Progressive symptoms over weeks to months',
      ],
      selfCareOptions: [
        'Rest the affected joint',
        'Ice for acute pain, heat for stiffness',
        'Over-the-counter anti-inflammatory medications',
        'Gentle range of motion exercises',
      ],
      disclaimer: 'A hot, swollen joint can indicate infection, which is a medical emergency. Seek care promptly.',
    },
    priority: 'medium',
    estimatedReadTime: '4 min',
    explanations: {
      level1: 'Joints are where your bones connect. They can hurt from being used a lot over time, from swelling inside, or from injury. If a joint is really red and hot, see a doctor quickly.',
      level2: 'Joint pain (arthralgia) comes from the cartilage, joint lining, or surrounding structures. Osteoarthritis is age-related wear. Inflammatory arthritis (like rheumatoid) involves immune system attacks on joints. Gout causes sudden severe pain from crystals. The pattern of affected joints helps determine the cause.',
      level3: 'Joint pain mechanisms differ by type: osteoarthritis involves cartilage degradation exposing subchondral bone; inflammatory arthritis involves synovial inflammation with pannus formation; crystal arthritis triggers intense neutrophilic inflammation. Distinguishing features include joint distribution, morning stiffness duration, and inflammatory markers.',
      level4: 'The differential diagnosis of arthralgia includes: degenerative (OA - asymmetric, weight-bearing joints, worse with activity), inflammatory (RA - symmetric, small joints, prolonged morning stiffness), crystal (gout - acute monoarthritis, podagra; pseudogout - chondrocalcinosis), infectious (septic arthritis - monoarticular, hot, inability to bear weight), and reactive. Synovial fluid analysis differentiates inflammatory from non-inflammatory causes. Septic arthritis is a surgical emergency.',
      level5: 'Articular pain involves nociceptors in the synovium, subchondral bone, periosteum, and periarticular ligaments. Cartilage is aneural. In OA, chondrocyte apoptosis and matrix degradation (collagen type II, aggrecan) expose subchondral bone; osteophytes form as a repair response. In RA, synovial hyperplasia with CD4+ T cells and macrophages produces TNF-α, IL-1, IL-6, driving pannus invasion of cartilage and bone. Crystal-induced inflammation (gout) involves NLRP3 inflammasome activation by monosodium urate crystals, releasing IL-1β. Septic arthritis destroys cartilage within days through bacterial enzymes and neutrophil-mediated damage.',
    },
  }],
]);

/**
 * Default user preferences
 */
export const defaultLearningPromptPreferences: LearningPromptPreferences = {
  enabled: true,
  autoShowLevel: 'new-symptoms',
  preferredComplexity: 2,
  dismissedPrompts: [],
  exploredPrompts: [],
  showAfterDismissDays: 30,
};

/**
 * Get all learning prompts
 */
export function getAllLearningPrompts(): SymptomLearningPrompt[] {
  return Array.from(symptomLearningPrompts.values());
}

/**
 * Get learning prompt by symptom
 */
export function getLearningPromptForSymptom(
  symptom: string
): SymptomLearningPrompt | undefined {
  const normalized = symptom.toLowerCase().trim();

  // Direct match
  const direct = symptomLearningPrompts.get(normalized);
  if (direct) return direct;

  // Check aliases
  for (const prompt of symptomLearningPrompts.values()) {
    if (prompt.symptomAliases.some((alias) =>
      alias.toLowerCase().includes(normalized) ||
      normalized.includes(alias.toLowerCase())
    )) {
      return prompt;
    }
  }

  return undefined;
}

/**
 * Search for matching prompts
 */
export function searchLearningPrompts(
  query: string,
  preferences: LearningPromptPreferences
): PromptSearchResult[] {
  const normalized = query.toLowerCase().trim();
  const results: PromptSearchResult[] = [];

  for (const prompt of symptomLearningPrompts.values()) {
    let matchScore = 0;
    let matchedTerm = '';

    // Check main symptom
    if (prompt.symptom.toLowerCase().includes(normalized)) {
      matchScore = 1.0;
      matchedTerm = prompt.symptom;
    }

    // Check aliases
    if (matchScore === 0) {
      for (const alias of prompt.symptomAliases) {
        if (alias.toLowerCase().includes(normalized)) {
          matchScore = 0.8;
          matchedTerm = alias;
          break;
        }
      }
    }

    // Check title
    if (matchScore === 0 && prompt.title.toLowerCase().includes(normalized)) {
      matchScore = 0.5;
      matchedTerm = prompt.title;
    }

    if (matchScore > 0) {
      results.push({
        prompt,
        matchScore,
        matchedTerm,
        alreadyDismissed: preferences.dismissedPrompts.some(
          (d) => d.promptId === prompt.promptId
        ),
        alreadyExplored: preferences.exploredPrompts.includes(prompt.promptId),
      });
    }
  }

  return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Create trigger event for a symptom
 */
export function createPromptTriggerEvent(
  symptom: string,
  context: SymptomContext,
  preferences: LearningPromptPreferences
): PromptTriggerEvent {
  const matchedPrompts = searchLearningPrompts(symptom, preferences)
    .filter((r) => !r.alreadyDismissed || shouldShowAgain(
      preferences.dismissedPrompts.find((d) => d.promptId === r.prompt.promptId)!,
      preferences
    ))
    .map((r) => r.prompt);

  // Select the best prompt based on context
  let selectedPrompt: SymptomLearningPrompt | null = null;
  if (matchedPrompts.length > 0) {
    // Prioritize high priority prompts
    selectedPrompt = matchedPrompts.find((p) => p.priority === 'high') ||
      matchedPrompts[0];
  }

  return {
    triggerId: `trigger-${Date.now()}`,
    symptom,
    timestamp: new Date(),
    context,
    matchedPrompts,
    selectedPrompt,
  };
}

/**
 * Check if dismissed prompt should be shown again
 */
function shouldShowAgain(
  dismissed: DismissedPrompt,
  preferences: LearningPromptPreferences
): boolean {
  if (dismissed.showAgainAfter && dismissed.showAgainAfter > new Date()) {
    return false;
  }
  const daysSinceDismissed = (Date.now() - dismissed.dismissedAt.getTime()) /
    (1000 * 60 * 60 * 24);
  return daysSinceDismissed >= preferences.showAfterDismissDays;
}

/**
 * Create initial display state
 */
export function createInitialDisplayState(): LearningPromptDisplayState {
  return {
    isVisible: false,
    currentPrompt: null,
    triggerEvent: null,
    displayMode: 'teaser',
    currentSection: null,
    interactionHistory: [],
  };
}

/**
 * Get explanation at preferred complexity level
 */
export function getExplanationAtLevel(
  prompt: SymptomLearningPrompt,
  level: 1 | 2 | 3 | 4 | 5
): string {
  return prompt.explanations[`level${level}` as keyof typeof prompt.explanations];
}

/**
 * Educational disclaimer
 */
export const LEARNING_PROMPT_DISCLAIMER = `
These learning prompts provide educational health information. They are not intended
to diagnose, treat, cure, or prevent any disease. The information is general in nature
and may not apply to your specific situation. Always consult a qualified healthcare
provider for medical advice, diagnosis, and treatment. Do not disregard professional
medical advice or delay seeking care because of information in these prompts.
`;
