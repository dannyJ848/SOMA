/**
 * Region-Based Chief Complaints Store
 *
 * Data for mapping body regions to common symptoms
 * with anatomical basis and educational content.
 */

import type {
  BodyRegion,
  RegionChiefComplaints,
  UserRegionHistory,
  RegionExplorationState,
  RegionExplorationResult,
  ChiefComplaint,
} from './types';

/**
 * Region chief complaints data
 */
export const regionChiefComplaints: Map<BodyRegion, RegionChiefComplaints> = new Map([
  ['head', {
    regionId: 'head',
    regionName: 'Head',
    regionDescription: 'The head contains the brain, skull, meninges, and associated structures',
    boundingBox: {
      min: { x: -0.15, y: 1.6, z: -0.15 },
      max: { x: 0.15, y: 1.9, z: 0.15 },
    },
    chiefComplaints: [
      {
        complaintId: 'head-headache',
        symptom: 'Headache',
        aliases: ['head pain', 'cephalalgia'],
        frequency: 'very-common',
        description: 'Pain anywhere in the head region',
        anatomicalBasis: [
          {
            structureId: 'nervous-meninges',
            structureName: 'Meninges',
            system: 'nervous',
            mechanism: 'Meningeal irritation or inflammation',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-cervical-muscles',
            structureName: 'Cervical/Cranial Muscles',
            system: 'musculoskeletal',
            mechanism: 'Muscle tension and trigger points',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'cardiovascular-cerebral-vessels',
            structureName: 'Cerebral Blood Vessels',
            system: 'cardiovascular',
            mechanism: 'Vascular dilation or inflammation',
            highlightColor: '#9B59B6',
          },
        ],
        characteristicFeatures: ['Location', 'Quality (throbbing, pressing)', 'Duration', 'Associated symptoms'],
        commonCauses: ['Tension headache', 'Migraine', 'Sinus headache', 'Cluster headache'],
        differentialDiagnoses: ['Primary headache disorders', 'Secondary headaches', 'Medication overuse'],
        relatedComplaints: ['neck-pain', 'visual-disturbance'],
        educationalContentId: 'learn-headache',
      },
      {
        complaintId: 'head-dizziness',
        symptom: 'Dizziness',
        aliases: ['lightheadedness', 'vertigo', 'unsteadiness'],
        frequency: 'common',
        description: 'Sensation of imbalance or spinning',
        anatomicalBasis: [
          {
            structureId: 'nervous-vestibular-system',
            structureName: 'Vestibular System',
            system: 'nervous',
            mechanism: 'Inner ear or vestibular nerve dysfunction',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'nervous-cerebellum',
            structureName: 'Cerebellum',
            system: 'nervous',
            mechanism: 'Central balance processing',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['True vertigo vs lightheadedness', 'Triggers', 'Duration', 'Associated symptoms'],
        commonCauses: ['BPPV', 'Vestibular neuritis', 'Orthostatic hypotension', 'Anxiety'],
        differentialDiagnoses: ['Peripheral vestibular', 'Central vestibular', 'Cardiovascular', 'Psychiatric'],
        relatedComplaints: ['head-headache', 'head-hearing-changes'],
      },
      {
        complaintId: 'head-memory-problems',
        symptom: 'Memory Problems',
        aliases: ['forgetfulness', 'cognitive changes', 'brain fog'],
        frequency: 'common',
        description: 'Difficulty with memory or concentration',
        anatomicalBasis: [
          {
            structureId: 'nervous-hippocampus',
            structureName: 'Hippocampus',
            system: 'nervous',
            mechanism: 'Memory formation center',
            highlightColor: '#9B59B6',
          },
          {
            structureId: 'nervous-prefrontal-cortex',
            structureName: 'Prefrontal Cortex',
            system: 'nervous',
            mechanism: 'Working memory and executive function',
            highlightColor: '#3498DB',
          },
        ],
        characteristicFeatures: ['Type of memory affected', 'Onset', 'Progression', 'Impact on daily life'],
        commonCauses: ['Normal aging', 'Stress', 'Sleep deprivation', 'Medications', 'Depression'],
        differentialDiagnoses: ['Age-related changes', 'MCI', 'Dementia', 'Delirium', 'Depression'],
        relatedComplaints: ['head-headache', 'sleep-problems'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'nervous',
          structures: ['Brain', 'Meninges', 'Cranial nerves'],
          structureIds: ['nervous-brain', 'nervous-meninges', 'nervous-cranial-nerves'],
          primaryFunctions: ['Cognition', 'Sensation', 'Motor control', 'Consciousness'],
        },
        {
          system: 'musculoskeletal',
          structures: ['Skull', 'Cervical muscles', 'TMJ'],
          structureIds: ['musculoskeletal-skull', 'musculoskeletal-cervical', 'musculoskeletal-tmj'],
          primaryFunctions: ['Protection', 'Support', 'Movement'],
        },
      ],
      keyStructures: [
        {
          structureId: 'nervous-brain',
          structureName: 'Brain',
          system: 'nervous',
          clinicalRelevance: 'Central processing of all neurological functions',
          commonPathologies: ['Stroke', 'Tumor', 'Infection', 'Trauma'],
        },
        {
          structureId: 'nervous-meninges',
          structureName: 'Meninges',
          system: 'nervous',
          clinicalRelevance: 'Primary source of headache - the brain has no pain receptors',
          commonPathologies: ['Meningitis', 'Hemorrhage', 'Increased ICP'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Trigeminal (V)', 'Greater occipital', 'Lesser occipital'],
        motorNerves: ['Facial (VII)', 'Accessory (XI)', 'Hypoglossal (XII)'],
        dermatomalLevels: ['V1', 'V2', 'V3', 'C2', 'C3'],
      },
      vascularSupply: {
        arterialSupply: ['Internal carotid', 'Vertebral arteries', 'Circle of Willis'],
        venousDrainage: ['Dural sinuses', 'Internal jugular veins'],
      },
    },
    differentialAnatomy: [
      {
        symptom: 'Headache',
        possibleSources: [
          {
            structureName: 'Meninges',
            structureId: 'nervous-meninges',
            likelihood: 'common',
            characteristicFeatures: ['Severe', 'Stiff neck', 'Photophobia'],
            testToDistinguish: 'Lumbar puncture if meningitis suspected',
          },
          {
            structureName: 'Cervical muscles',
            structureId: 'musculoskeletal-cervical',
            likelihood: 'common',
            characteristicFeatures: ['Band-like', 'Bilateral', 'Related to stress'],
            testToDistinguish: 'Palpation reveals tender muscles',
          },
          {
            structureName: 'Cerebral vessels',
            structureId: 'cardiovascular-cerebral-vessels',
            likelihood: 'common',
            characteristicFeatures: ['Throbbing', 'Unilateral', 'Aura possible'],
            testToDistinguish: 'Clinical diagnosis; imaging if concerned for secondary cause',
          },
        ],
        distinguishingFeatures: 'Location, quality, associated symptoms, and triggers help differentiate causes',
      },
    ],
    redFlags: [
      {
        symptom: 'Thunderclap headache',
        concern: 'Subarachnoid hemorrhage',
        associatedFindings: ['Sudden onset', 'Worst headache of life', 'Neck stiffness'],
        action: 'Emergency CT and lumbar puncture',
        urgency: 'emergency',
      },
      {
        symptom: 'Headache with fever and stiff neck',
        concern: 'Meningitis',
        associatedFindings: ['Photophobia', 'Altered mental status', 'Rash'],
        action: 'Emergency evaluation and antibiotics',
        urgency: 'emergency',
      },
      {
        symptom: 'Sudden neurological deficit',
        concern: 'Stroke',
        associatedFindings: ['Facial droop', 'Arm weakness', 'Speech difficulty'],
        action: 'Emergency stroke evaluation (F.A.S.T.)',
        urgency: 'emergency',
      },
    ],
    explanations: {
      level1: 'Your head contains your brain, which controls everything you do. Head pain usually comes from the coverings around the brain, blood vessels, or muscles - not the brain itself.',
      level2: 'The head houses the brain protected by the skull and meninges. Headaches arise from pain-sensitive structures like meninges, blood vessels, and muscles. The brain itself has no pain receptors. Different structures cause different types of headaches.',
      level3: 'The head contains the brain within the calvarium, covered by meninges (dura, arachnoid, pia). Pain sensation comes from the trigeminal nerve (face, anterior head) and upper cervical nerves (posterior head). Headaches involve activation of meningeal nociceptors, vascular changes, or muscle tension.',
      level4: 'Cephalic pain-sensitive structures include the meninges (especially dura), large cerebral vessels, venous sinuses, and pericranial muscles. The trigeminal-cervical complex at the trigeminal nucleus caudalis receives convergent input from V1 and C1-C3, explaining the distribution of headache referral. Primary headache disorders involve altered pain processing without structural lesion.',
      level5: 'The trigeminovascular system mediates most headache types. Meningeal nociceptors (C-fibers and Aδ-fibers) express TRPV1, CGRP receptors, and other nociceptive channels. Central sensitization in the trigeminal nucleus caudalis and thalamus underlies headache progression and allodynia. Descending modulation from PAG and RVM is dysfunctional in chronic headache. Neuroimaging studies show altered connectivity in pain matrix regions (insula, ACC, S1) in migraine patients.',
    },
  }],

  ['chest', {
    regionId: 'chest',
    regionName: 'Chest',
    regionDescription: 'The chest (thorax) contains the heart, lungs, and major vessels',
    boundingBox: {
      min: { x: -0.25, y: 1.0, z: -0.15 },
      max: { x: 0.25, y: 1.4, z: 0.15 },
    },
    chiefComplaints: [
      {
        complaintId: 'chest-pain',
        symptom: 'Chest Pain',
        aliases: ['chest discomfort', 'chest tightness', 'chest pressure'],
        frequency: 'very-common',
        description: 'Pain or discomfort in the chest region',
        anatomicalBasis: [
          {
            structureId: 'cardiovascular-heart',
            structureName: 'Heart',
            system: 'cardiovascular',
            mechanism: 'Cardiac ischemia, pericarditis',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'respiratory-lungs',
            structureName: 'Lungs/Pleura',
            system: 'respiratory',
            mechanism: 'Pleuritic inflammation, pneumonia',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-chest-wall',
            structureName: 'Chest Wall',
            system: 'musculoskeletal',
            mechanism: 'Costochondritis, muscle strain',
            highlightColor: '#27AE60',
          },
          {
            structureId: 'digestive-esophagus',
            structureName: 'Esophagus',
            system: 'digestive',
            mechanism: 'GERD, esophageal spasm',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Quality', 'Location', 'Radiation', 'Relation to exertion', 'Associated symptoms'],
        commonCauses: ['GERD', 'Musculoskeletal', 'Angina', 'Anxiety'],
        differentialDiagnoses: ['ACS', 'PE', 'Aortic dissection', 'Pneumothorax', 'Pericarditis'],
        relatedComplaints: ['chest-shortness-of-breath', 'chest-palpitations'],
        educationalContentId: 'learn-chest-pain',
      },
      {
        complaintId: 'chest-shortness-of-breath',
        symptom: 'Shortness of Breath',
        aliases: ['dyspnea', 'breathlessness', 'difficulty breathing'],
        frequency: 'very-common',
        description: 'Sensation of difficulty breathing or not getting enough air',
        anatomicalBasis: [
          {
            structureId: 'respiratory-lungs',
            structureName: 'Lungs',
            system: 'respiratory',
            mechanism: 'Impaired gas exchange or ventilation',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'cardiovascular-heart',
            structureName: 'Heart',
            system: 'cardiovascular',
            mechanism: 'Reduced cardiac output, pulmonary congestion',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'respiratory-diaphragm',
            structureName: 'Diaphragm',
            system: 'respiratory',
            mechanism: 'Impaired respiratory mechanics',
            highlightColor: '#9B59B6',
          },
        ],
        characteristicFeatures: ['Onset', 'Relation to exertion', 'Position (orthopnea)', 'Associated symptoms'],
        commonCauses: ['Asthma', 'COPD', 'Heart failure', 'Anxiety', 'Deconditioning'],
        differentialDiagnoses: ['Pulmonary embolism', 'Pneumonia', 'Pneumothorax', 'Cardiac tamponade'],
        relatedComplaints: ['chest-pain', 'chest-cough'],
        educationalContentId: 'learn-dyspnea',
      },
      {
        complaintId: 'chest-palpitations',
        symptom: 'Palpitations',
        aliases: ['racing heart', 'heart fluttering', 'skipped beats'],
        frequency: 'common',
        description: 'Awareness of heartbeat, often rapid or irregular',
        anatomicalBasis: [
          {
            structureId: 'cardiovascular-heart',
            structureName: 'Heart',
            system: 'cardiovascular',
            mechanism: 'Arrhythmia or increased awareness of heartbeat',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'cardiovascular-conduction-system',
            structureName: 'Cardiac Conduction System',
            system: 'cardiovascular',
            mechanism: 'Abnormal electrical activity',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Pattern (regular vs irregular)', 'Duration', 'Triggers', 'Associated symptoms'],
        commonCauses: ['Anxiety', 'Caffeine', 'PVCs', 'Atrial fibrillation', 'Thyroid disorders'],
        differentialDiagnoses: ['Benign ectopy', 'SVT', 'Atrial fibrillation', 'Ventricular arrhythmia'],
        relatedComplaints: ['chest-shortness-of-breath', 'head-dizziness'],
      },
      {
        complaintId: 'chest-cough',
        symptom: 'Cough',
        aliases: ['coughing', 'persistent cough'],
        frequency: 'very-common',
        description: 'Forceful expulsion of air from the lungs',
        anatomicalBasis: [
          {
            structureId: 'respiratory-airways',
            structureName: 'Airways',
            system: 'respiratory',
            mechanism: 'Airway irritation or inflammation',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'respiratory-lungs',
            structureName: 'Lungs',
            system: 'respiratory',
            mechanism: 'Parenchymal disease',
            highlightColor: '#2ECC71',
          },
        ],
        characteristicFeatures: ['Productive vs dry', 'Duration', 'Timing', 'Associated symptoms'],
        commonCauses: ['Upper respiratory infection', 'Asthma', 'GERD', 'ACE inhibitor', 'Post-nasal drip'],
        differentialDiagnoses: ['Pneumonia', 'Bronchitis', 'Lung cancer', 'TB', 'Heart failure'],
        relatedComplaints: ['chest-shortness-of-breath', 'chest-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'cardiovascular',
          structures: ['Heart', 'Great vessels', 'Coronary arteries'],
          structureIds: ['cardiovascular-heart', 'cardiovascular-aorta', 'cardiovascular-coronary'],
          primaryFunctions: ['Blood circulation', 'Oxygen delivery'],
        },
        {
          system: 'respiratory',
          structures: ['Lungs', 'Bronchi', 'Pleura', 'Diaphragm'],
          structureIds: ['respiratory-lungs', 'respiratory-bronchi', 'respiratory-pleura', 'respiratory-diaphragm'],
          primaryFunctions: ['Gas exchange', 'Ventilation'],
        },
        {
          system: 'digestive',
          structures: ['Esophagus'],
          structureIds: ['digestive-esophagus'],
          primaryFunctions: ['Food transport'],
        },
      ],
      keyStructures: [
        {
          structureId: 'cardiovascular-heart',
          structureName: 'Heart',
          system: 'cardiovascular',
          clinicalRelevance: 'Chest pain with cardiac origin requires urgent evaluation',
          commonPathologies: ['Coronary artery disease', 'Heart failure', 'Arrhythmias', 'Valvular disease'],
        },
        {
          structureId: 'respiratory-lungs',
          structureName: 'Lungs',
          system: 'respiratory',
          clinicalRelevance: 'Primary organs of gas exchange',
          commonPathologies: ['Asthma', 'COPD', 'Pneumonia', 'Cancer', 'PE'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Intercostal nerves', 'Phrenic nerve', 'Vagus nerve'],
        motorNerves: ['Phrenic nerve (diaphragm)', 'Intercostal nerves'],
        dermatomalLevels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
      },
      vascularSupply: {
        arterialSupply: ['Aorta', 'Coronary arteries', 'Bronchial arteries', 'Intercostal arteries'],
        venousDrainage: ['Superior vena cava', 'Pulmonary veins', 'Azygos system'],
      },
    },
    differentialAnatomy: [
      {
        symptom: 'Chest pain',
        possibleSources: [
          {
            structureName: 'Heart',
            structureId: 'cardiovascular-heart',
            likelihood: 'common',
            characteristicFeatures: ['Pressure-like', 'Exertional', 'Radiates to arm/jaw'],
            testToDistinguish: 'ECG, troponin',
          },
          {
            structureName: 'Chest wall',
            structureId: 'musculoskeletal-chest-wall',
            likelihood: 'common',
            characteristicFeatures: ['Reproducible with palpation', 'Positional'],
            testToDistinguish: 'Physical exam - tender to palpation',
          },
          {
            structureName: 'Esophagus',
            structureId: 'digestive-esophagus',
            likelihood: 'common',
            characteristicFeatures: ['Burning', 'Worse lying down', 'After meals'],
            testToDistinguish: 'Response to antacids, pH monitoring',
          },
          {
            structureName: 'Lungs/Pleura',
            structureId: 'respiratory-lungs',
            likelihood: 'less-common',
            characteristicFeatures: ['Sharp', 'Worse with breathing', 'Pleuritic'],
            testToDistinguish: 'Chest X-ray, CT',
          },
        ],
        distinguishingFeatures: 'Pain quality, relation to exertion/breathing, and reproducibility help distinguish causes',
      },
    ],
    redFlags: [
      {
        symptom: 'Chest pain with radiation, diaphoresis',
        concern: 'Acute coronary syndrome',
        associatedFindings: ['Arm/jaw pain', 'Nausea', 'Dyspnea'],
        action: 'Emergency evaluation, call 911',
        urgency: 'emergency',
      },
      {
        symptom: 'Sudden severe chest/back pain, tearing quality',
        concern: 'Aortic dissection',
        associatedFindings: ['BP differential between arms', 'Pulse deficit'],
        action: 'Emergency CT angiography',
        urgency: 'emergency',
      },
      {
        symptom: 'Sudden dyspnea with pleuritic pain',
        concern: 'Pulmonary embolism',
        associatedFindings: ['Recent immobility', 'Leg swelling', 'Tachycardia'],
        action: 'Emergency CT pulmonary angiography',
        urgency: 'emergency',
      },
    ],
    explanations: {
      level1: 'Your chest holds your heart and lungs. Chest pain can come from the heart, lungs, muscles, or even your stomach. Some chest pain needs emergency care, especially if it\'s with trouble breathing or sweating.',
      level2: 'The chest contains vital organs - the heart pumps blood, the lungs exchange oxygen. Chest pain has many causes: heart problems (serious), lung issues, muscle strain (common), or acid reflux. Location, quality, and associated symptoms help determine the cause.',
      level3: 'The thorax houses the mediastinum (heart, great vessels, esophagus, trachea) and bilateral lungs within the pleural cavities. Chest pain can be cardiac (pressure, exertional), pleuritic (sharp, respiratory), musculoskeletal (positional, reproducible), or visceral (GI). Risk stratification guides workup urgency.',
      level4: 'Thoracic pain transmission involves: cardiac (T1-T5 sympathetic afferents causing referred arm/jaw pain), pleural (phrenic C3-C5 and intercostal T1-T12), esophageal (vagal and sympathetic), and chest wall (intercostal somatic nerves). The wide dermatomal overlap creates diagnostic challenges. Clinical decision rules (HEART score) aid risk stratification for ACS.',
      level5: 'Cardiac nociception involves unmyelinated C-fibers responding to adenosine, bradykinin, and protons released during ischemia. Visceral afferents travel via cardiac sympathetic nerves to dorsal horn neurons at T1-T5, where convergence with somatic afferents underlies referral patterns. Pleural pain involves parietal pleura innervation by intercostal and phrenic nerves. Esophageal pain uses both vagal (poorly localizing) and spinal (better localization) pathways. High-sensitivity troponin assays enable rapid ACS rule-out protocols.',
    },
  }],

  ['abdomen-upper', {
    regionId: 'abdomen-upper',
    regionName: 'Upper Abdomen',
    regionDescription: 'The upper abdomen contains the stomach, liver, gallbladder, spleen, and pancreas',
    boundingBox: {
      min: { x: -0.2, y: 0.7, z: -0.15 },
      max: { x: 0.2, y: 1.0, z: 0.15 },
    },
    chiefComplaints: [
      {
        complaintId: 'upper-abdomen-pain',
        symptom: 'Upper Abdominal Pain',
        aliases: ['stomach pain', 'epigastric pain'],
        frequency: 'very-common',
        description: 'Pain in the upper portion of the abdomen',
        anatomicalBasis: [
          {
            structureId: 'digestive-stomach',
            structureName: 'Stomach',
            system: 'digestive',
            mechanism: 'Gastritis, ulcer, dyspepsia',
            highlightColor: '#E67E22',
          },
          {
            structureId: 'digestive-gallbladder',
            structureName: 'Gallbladder',
            system: 'digestive',
            mechanism: 'Biliary colic, cholecystitis',
            highlightColor: '#27AE60',
          },
          {
            structureId: 'digestive-pancreas',
            structureName: 'Pancreas',
            system: 'digestive',
            mechanism: 'Pancreatitis',
            highlightColor: '#9B59B6',
          },
          {
            structureId: 'digestive-liver',
            structureName: 'Liver',
            system: 'digestive',
            mechanism: 'Hepatitis, congestion',
            highlightColor: '#C0392B',
          },
        ],
        characteristicFeatures: ['Location (RUQ, epigastric, LUQ)', 'Relation to meals', 'Quality', 'Radiation'],
        commonCauses: ['Dyspepsia', 'GERD', 'Gastritis', 'Biliary colic'],
        differentialDiagnoses: ['Peptic ulcer', 'Pancreatitis', 'Cholecystitis', 'Cardiac (inferior MI)'],
        relatedComplaints: ['nausea-vomiting', 'chest-pain'],
        educationalContentId: 'learn-abdominal-pain',
      },
      {
        complaintId: 'nausea-vomiting',
        symptom: 'Nausea/Vomiting',
        aliases: ['upset stomach', 'throwing up', 'feeling sick'],
        frequency: 'very-common',
        description: 'Sensation of needing to vomit or actual vomiting',
        anatomicalBasis: [
          {
            structureId: 'nervous-vomiting-center',
            structureName: 'Vomiting Center (Brainstem)',
            system: 'nervous',
            mechanism: 'Central coordination of emesis',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'digestive-stomach',
            structureName: 'Stomach',
            system: 'digestive',
            mechanism: 'GI irritation or obstruction',
            highlightColor: '#E67E22',
          },
        ],
        characteristicFeatures: ['Timing', 'Relation to meals', 'Associated symptoms', 'Vomitus characteristics'],
        commonCauses: ['Gastroenteritis', 'Motion sickness', 'Medication', 'Pregnancy'],
        differentialDiagnoses: ['Obstruction', 'Pancreatitis', 'Increased ICP', 'MI'],
        relatedComplaints: ['upper-abdomen-pain', 'head-dizziness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'digestive',
          structures: ['Stomach', 'Liver', 'Gallbladder', 'Pancreas', 'Spleen', 'Duodenum'],
          structureIds: ['digestive-stomach', 'digestive-liver', 'digestive-gallbladder', 'digestive-pancreas', 'lymphatic-spleen', 'digestive-duodenum'],
          primaryFunctions: ['Digestion', 'Absorption', 'Detoxification', 'Bile production'],
        },
      ],
      keyStructures: [
        {
          structureId: 'digestive-gallbladder',
          structureName: 'Gallbladder',
          system: 'digestive',
          clinicalRelevance: 'Common cause of RUQ pain, especially after fatty meals',
          commonPathologies: ['Gallstones', 'Cholecystitis', 'Biliary colic'],
        },
        {
          structureId: 'digestive-pancreas',
          structureName: 'Pancreas',
          system: 'digestive',
          clinicalRelevance: 'Pancreatitis causes severe epigastric pain radiating to back',
          commonPathologies: ['Acute pancreatitis', 'Chronic pancreatitis', 'Pancreatic cancer'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Greater splanchnic nerve', 'Vagus nerve'],
        motorNerves: ['Vagus nerve (parasympathetic)'],
        dermatomalLevels: ['T5', 'T6', 'T7', 'T8', 'T9'],
        autonomicSupply: 'Celiac plexus',
      },
      vascularSupply: {
        arterialSupply: ['Celiac trunk', 'Superior mesenteric artery'],
        venousDrainage: ['Portal vein', 'Hepatic veins'],
      },
    },
    differentialAnatomy: [
      {
        symptom: 'Epigastric pain',
        possibleSources: [
          {
            structureName: 'Stomach',
            structureId: 'digestive-stomach',
            likelihood: 'common',
            characteristicFeatures: ['Related to meals', 'Burning', 'Antacid relief'],
            testToDistinguish: 'H. pylori testing, EGD if indicated',
          },
          {
            structureName: 'Pancreas',
            structureId: 'digestive-pancreas',
            likelihood: 'less-common',
            characteristicFeatures: ['Severe', 'Radiates to back', 'Worse lying flat'],
            testToDistinguish: 'Lipase, CT abdomen',
          },
          {
            structureName: 'Heart',
            structureId: 'cardiovascular-heart',
            likelihood: 'less-common',
            characteristicFeatures: ['Risk factors', 'Diaphoresis', 'Atypical presentation'],
            testToDistinguish: 'ECG, troponin',
          },
        ],
        distinguishingFeatures: 'Meal relation, radiation pattern, and associated symptoms help differentiate',
      },
    ],
    redFlags: [
      {
        symptom: 'Severe epigastric pain radiating to back',
        concern: 'Acute pancreatitis',
        associatedFindings: ['Vomiting', 'Unable to get comfortable'],
        action: 'Emergency evaluation, lipase',
        urgency: 'emergency',
      },
      {
        symptom: 'RUQ pain with fever',
        concern: 'Acute cholecystitis',
        associatedFindings: ['Murphy\'s sign', 'Jaundice'],
        action: 'Emergency evaluation, ultrasound',
        urgency: 'urgent',
      },
    ],
    explanations: {
      level1: 'Your upper belly has important organs that help digest food: the stomach, liver, gallbladder, and pancreas. Pain here can come from any of these organs.',
      level2: 'The upper abdomen contains digestive organs: the stomach processes food, the liver detoxifies blood, the gallbladder stores bile, and the pancreas makes enzymes. Pain location helps identify which organ might be involved.',
      level3: 'The upper abdomen houses the foregut structures innervated by the celiac plexus. Epigastric pain suggests stomach, pancreas, or gallbladder. RUQ pain suggests hepatobiliary origin. The visceral pain is poorly localized initially, becoming more localized if peritoneum is involved.',
      level4: 'Upper abdominal visceral afferents travel via the greater splanchnic nerve to T5-T9 spinal segments. Referred pain from the gallbladder occurs at the right scapula (phrenic nerve if diaphragm irritated). Pancreatic pain radiates to the back due to retroperitoneal location. Murphy\'s sign tests for focal peritoneal inflammation over the gallbladder.',
      level5: 'Upper GI pain involves two pathways: vagal afferents (poorly localizing, mediated by 5-HT3, substance P) and spinal afferents via splanchnic nerves (better localization, dermatomal pattern). Pancreatic pain involves dense celiac plexus innervation with both sympathetic and parasympathetic components. Visceral sensitization in functional dyspepsia involves altered chemosensitivity and mechanosensitivity. Gastric accommodation testing reveals impaired relaxation in some patients with postprandial symptoms.',
    },
  }],

  ['thoracic-spine', {
    regionId: 'thoracic-spine',
    regionName: 'Thoracic Spine',
    regionDescription: 'The thoracic spine (T1-T12) forms the mid-back and provides attachment for ribs',
    boundingBox: {
      min: { x: -0.2, y: 0.9, z: -0.1 },
      max: { x: 0.2, y: 1.3, z: 0.2 },
    },
    chiefComplaints: [
      {
        complaintId: 'thoracic-back-pain',
        symptom: 'Mid-Back Pain',
        aliases: ['thoracic pain', 'upper back pain', 'between shoulder blades'],
        frequency: 'common',
        description: 'Pain in the thoracic spine region',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-thoracic-vertebrae',
            structureName: 'Thoracic Vertebrae',
            system: 'musculoskeletal',
            mechanism: 'Mechanical stress, postural strain',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-rhomboids',
            structureName: 'Rhomboid Muscles',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain from posture or overuse',
            highlightColor: '#27AE60',
          },
          {
            structureId: 'musculoskeletal-thoracic-facets',
            structureName: 'Thoracic Facet Joints',
            system: 'musculoskeletal',
            mechanism: 'Facet joint dysfunction',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Location', 'Postural relationship', 'Radiation pattern'],
        commonCauses: ['Poor posture', 'Muscle strain', 'Facet dysfunction', 'Scoliosis'],
        differentialDiagnoses: ['Thoracic disc herniation', 'Compression fracture', 'Scoliosis', 'Costochondritis'],
        relatedComplaints: ['neck-pain', 'chest-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Thoracic vertebrae T1-T12', 'Ribs', 'Intercostal muscles'],
          structureIds: ['musculoskeletal-thoracic-spine', 'musculoskeletal-ribs', 'musculoskeletal-intercostals'],
          primaryFunctions: ['Protect thoracic organs', 'Support posture', 'Enable breathing mechanics'],
        },
        {
          system: 'nervous',
          structures: ['Spinal cord', 'Thoracic nerve roots'],
          structureIds: ['nervous-spinal-cord', 'nervous-thoracic-roots'],
          primaryFunctions: ['Upper body sensation', 'Intercostal muscle innervation'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-thoracic-spine',
          structureName: 'Thoracic Vertebrae',
          system: 'musculoskeletal',
          clinicalRelevance: 'Stabilizes rib cage; limited mobility compared to cervical/lumbar',
          commonPathologies: ['Postural pain', 'Scheuermann disease', 'Compression fractures'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Thoracic dorsal rami', 'Intercostal nerves'],
        motorNerves: ['T1-T12 spinal nerves'],
        dermatomalLevels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
      },
      vascularSupply: {
        arterialSupply: ['Intercostal arteries', 'Supreme intercostal artery'],
        venousDrainage: ['Intercostal veins', 'Azygos system'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Back pain with fever, weight loss',
        concern: 'Spinal infection or malignancy',
        associatedFindings: ['Night pain', 'History of cancer'],
        action: 'Urgent imaging',
        urgency: 'urgent',
      },
    ],
    relatedModules: ['orthopedics', 'neurology'],
    explanations: {
      level1: 'Your thoracic spine is your mid-back. It connects your neck to your lower back and attaches to your ribs.',
      level2: 'The thoracic spine consists of 12 vertebrae (T1-T12). It is less mobile than the neck and lower back because it attaches to the rib cage.',
      level3: 'The thoracic spine provides stability and protection for the heart and lungs. The ribs attach to the thoracic vertebrae via costovertebral joints.',
      level4: 'Thoracic pain often originates from postural strain or facet joints. Disc herniations are less common than in the lumbar spine.',
      level5: 'Thoracic vertebral anatomy includes heart-shaped vertebral bodies and downward-sloping spinous processes. The sympathetic trunk runs along the costovertebral junctions.',
    },
  }],

  ['lumbar-spine', {
    regionId: 'lumbar-spine',
    regionName: 'Lumbar Spine',
    regionDescription: 'The lumbar spine (L1-L5) bears body weight and enables trunk movement',
    boundingBox: {
      min: { x: -0.2, y: 0.5, z: 0.0 },
      max: { x: 0.2, y: 0.9, z: 0.2 },
    },
    chiefComplaints: [
      {
        complaintId: 'lumbar-back-pain',
        symptom: 'Low Back Pain',
        aliases: ['lumbar pain', 'LBP', 'lumbago'],
        frequency: 'very-common',
        description: 'Pain in the lumbar region',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-lumbar-muscles',
            structureName: 'Lumbar Muscles',
            system: 'musculoskeletal',
            mechanism: 'Strain, spasm, trigger points',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-lumbar-disc',
            structureName: 'Intervertebral Discs',
            system: 'musculoskeletal',
            mechanism: 'Herniation, degeneration',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-facet-joints',
            structureName: 'Facet Joints',
            system: 'musculoskeletal',
            mechanism: 'Arthropathy, inflammation',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Location', 'Radiation', 'Aggravating factors', 'Associated symptoms'],
        commonCauses: ['Muscle strain', 'Disc degeneration', 'Facet arthropathy', 'Spinal stenosis'],
        differentialDiagnoses: ['Disc herniation', 'Stenosis', 'Spondylolisthesis', 'Kidney disease', 'Malignancy'],
        relatedComplaints: ['sciatica', 'leg-weakness'],
      },
      {
        complaintId: 'sciatica',
        symptom: 'Sciatica',
        aliases: ['leg pain from back', 'radiating leg pain', 'radiculopathy'],
        frequency: 'common',
        description: 'Pain radiating down the leg from the back',
        anatomicalBasis: [
          {
            structureId: 'nervous-sciatic-nerve',
            structureName: 'Sciatic Nerve',
            system: 'nervous',
            mechanism: 'Nerve root compression or irritation',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-lumbar-disc',
            structureName: 'Lumbar Disc',
            system: 'musculoskeletal',
            mechanism: 'Disc herniation compressing nerve root',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Dermatomal distribution', 'Associated weakness/numbness', 'Provocative maneuvers'],
        commonCauses: ['Disc herniation', 'Spinal stenosis', 'Piriformis syndrome'],
        differentialDiagnoses: ['L4-S1 radiculopathy', 'Vascular claudication', 'Hip pathology'],
        relatedComplaints: ['low-back-pain', 'leg-numbness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Lumbar vertebrae', 'Intervertebral discs', 'Paraspinal muscles', 'Facet joints'],
          structureIds: ['musculoskeletal-lumbar-spine', 'musculoskeletal-lumbar-disc', 'musculoskeletal-paraspinal', 'musculoskeletal-facet'],
          primaryFunctions: ['Support', 'Mobility', 'Protection of spinal cord'],
        },
        {
          system: 'nervous',
          structures: ['Lumbar nerve roots', 'Cauda equina', 'Sciatic nerve'],
          structureIds: ['nervous-lumbar-roots', 'nervous-cauda-equina', 'nervous-sciatic'],
          primaryFunctions: ['Lower extremity sensation', 'Lower extremity motor', 'Bladder/bowel function'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-lumbar-disc',
          structureName: 'Lumbar Intervertebral Disc',
          system: 'musculoskeletal',
          clinicalRelevance: 'Common cause of back and leg pain through herniation',
          commonPathologies: ['Herniation', 'Degeneration', 'Annular tear'],
        },
        {
          structureId: 'nervous-cauda-equina',
          structureName: 'Cauda Equina',
          system: 'nervous',
          clinicalRelevance: 'Compression causes emergency - bladder/bowel dysfunction',
          commonPathologies: ['Cauda equina syndrome (surgical emergency)'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Lumbar dorsal rami', 'Lumbar nerve roots'],
        motorNerves: ['L2-S2 nerve roots'],
        dermatomalLevels: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Lumbar arteries', 'Iliolumbar artery'],
        venousDrainage: ['Lumbar veins', 'Internal vertebral venous plexus'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Saddle anesthesia, bladder/bowel dysfunction',
        concern: 'Cauda equina syndrome',
        associatedFindings: ['Bilateral leg symptoms', 'Progressive weakness', 'Urinary retention'],
        action: 'Emergency MRI and surgical consultation',
        urgency: 'emergency',
      },
      {
        symptom: 'Back pain with fever, weight loss',
        concern: 'Spinal infection or malignancy',
        associatedFindings: ['Night pain', 'History of cancer', 'Immunosuppression'],
        action: 'Urgent imaging (MRI)',
        urgency: 'urgent',
      },
    ],
    relatedModules: ['orthopedics', 'neurology'],
    explanations: {
      level1: 'Your lumbar spine is your lower back. It supports your body weight and allows you to bend and twist.',
      level2: 'The lumbar spine consists of 5 vertebrae (L1-L5) and bears most of your body weight. It is the most common source of back pain.',
      level3: 'The lumbar spine provides support and flexibility. The discs between vertebrae can herniate and press on nerves, causing leg pain (sciatica).',
      level4: 'The cauda equina (nerve roots below L1-L2) exits through neural foramina. Disc herniation at L4-L5 and L5-S1 are most common.',
      level5: 'Lumbar pain transmission involves the sinuvertebral nerve and dorsal rami. Discogenic pain, facet pain, and radicular pain have distinct mechanisms.',
    },
  }],

  ['back-lower', {
    regionId: 'back-lower',
    regionName: 'Lower Back',
    regionDescription: 'The lower back (lumbar region) contains the lumbar spine, muscles, and associated nerves',
    boundingBox: {
      min: { x: -0.2, y: 0.5, z: 0.0 },
      max: { x: 0.2, y: 0.8, z: 0.2 },
    },
    chiefComplaints: [
      {
        complaintId: 'low-back-pain',
        symptom: 'Low Back Pain',
        aliases: ['lumbar pain', 'backache', 'LBP'],
        frequency: 'very-common',
        description: 'Pain in the lumbar region',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-lumbar-muscles',
            structureName: 'Lumbar Muscles',
            system: 'musculoskeletal',
            mechanism: 'Strain, spasm, trigger points',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-lumbar-disc',
            structureName: 'Intervertebral Discs',
            system: 'musculoskeletal',
            mechanism: 'Herniation, degeneration',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-facet-joints',
            structureName: 'Facet Joints',
            system: 'musculoskeletal',
            mechanism: 'Arthropathy, inflammation',
            highlightColor: '#F39C12',
          },
          {
            structureId: 'musculoskeletal-si-joint',
            structureName: 'Sacroiliac Joint',
            system: 'musculoskeletal',
            mechanism: 'SI joint dysfunction',
            highlightColor: '#9B59B6',
          },
        ],
        characteristicFeatures: ['Location', 'Radiation', 'Aggravating factors', 'Associated symptoms'],
        commonCauses: ['Muscle strain', 'Disc degeneration', 'Facet arthropathy', 'Spinal stenosis'],
        differentialDiagnoses: ['Disc herniation', 'Stenosis', 'Spondylolisthesis', 'Kidney disease', 'Malignancy'],
        relatedComplaints: ['sciatica', 'leg-weakness'],
      },
      {
        complaintId: 'sciatica',
        symptom: 'Sciatica',
        aliases: ['leg pain from back', 'radiating leg pain', 'radiculopathy'],
        frequency: 'common',
        description: 'Pain radiating down the leg from the back',
        anatomicalBasis: [
          {
            structureId: 'nervous-sciatic-nerve',
            structureName: 'Sciatic Nerve',
            system: 'nervous',
            mechanism: 'Nerve root compression or irritation',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-lumbar-disc',
            structureName: 'Lumbar Disc',
            system: 'musculoskeletal',
            mechanism: 'Disc herniation compressing nerve root',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Dermatomal distribution', 'Associated weakness/numbness', 'Provocative maneuvers'],
        commonCauses: ['Disc herniation', 'Spinal stenosis', 'Piriformis syndrome'],
        differentialDiagnoses: ['L4-S1 radiculopathy', 'Vascular claudication', 'Hip pathology'],
        relatedComplaints: ['low-back-pain', 'leg-numbness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Lumbar vertebrae', 'Intervertebral discs', 'Paraspinal muscles', 'Facet joints', 'SI joints'],
          structureIds: ['musculoskeletal-lumbar-spine', 'musculoskeletal-lumbar-disc', 'musculoskeletal-paraspinal', 'musculoskeletal-facet', 'musculoskeletal-si-joint'],
          primaryFunctions: ['Support', 'Mobility', 'Protection of spinal cord'],
        },
        {
          system: 'nervous',
          structures: ['Lumbar nerve roots', 'Cauda equina', 'Sciatic nerve'],
          structureIds: ['nervous-lumbar-roots', 'nervous-cauda-equina', 'nervous-sciatic'],
          primaryFunctions: ['Lower extremity sensation', 'Lower extremity motor', 'Bladder/bowel function'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-lumbar-disc',
          structureName: 'Lumbar Intervertebral Disc',
          system: 'musculoskeletal',
          clinicalRelevance: 'Common cause of back and leg pain through herniation',
          commonPathologies: ['Herniation', 'Degeneration', 'Annular tear'],
        },
        {
          structureId: 'nervous-cauda-equina',
          structureName: 'Cauda Equina',
          system: 'nervous',
          clinicalRelevance: 'Compression causes emergency - bladder/bowel dysfunction, saddle anesthesia',
          commonPathologies: ['Cauda equina syndrome (surgical emergency)'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Lumbar dorsal rami', 'Lumbar nerve roots'],
        motorNerves: ['L2-S2 nerve roots'],
        dermatomalLevels: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Lumbar arteries', 'Iliolumbar artery'],
        venousDrainage: ['Lumbar veins', 'Internal vertebral venous plexus'],
      },
    },
    differentialAnatomy: [
      {
        symptom: 'Low back pain',
        possibleSources: [
          {
            structureName: 'Lumbar muscles',
            structureId: 'musculoskeletal-lumbar-muscles',
            likelihood: 'common',
            characteristicFeatures: ['Localized', 'Muscle spasm', 'Activity-related'],
            testToDistinguish: 'Exam - tender muscles without neurological signs',
          },
          {
            structureName: 'Disc',
            structureId: 'musculoskeletal-lumbar-disc',
            likelihood: 'common',
            characteristicFeatures: ['Radiating pain', 'Worse with flexion', 'Dermatomal pattern'],
            testToDistinguish: 'MRI if persistent or neurological signs',
          },
          {
            structureName: 'Facet joints',
            structureId: 'musculoskeletal-facet-joints',
            likelihood: 'common',
            characteristicFeatures: ['Worse with extension', 'Localized', 'Morning stiffness'],
            testToDistinguish: 'Facet injection (diagnostic)',
          },
        ],
        distinguishingFeatures: 'Radiation pattern, aggravating factors, and neurological findings help differentiate',
      },
    ],
    redFlags: [
      {
        symptom: 'Saddle anesthesia, bladder/bowel dysfunction',
        concern: 'Cauda equina syndrome',
        associatedFindings: ['Bilateral leg symptoms', 'Progressive weakness', 'Urinary retention'],
        action: 'Emergency MRI and surgical consultation',
        urgency: 'emergency',
      },
      {
        symptom: 'Back pain with fever, weight loss',
        concern: 'Spinal infection or malignancy',
        associatedFindings: ['Night pain', 'History of cancer', 'Immunosuppression'],
        action: 'Urgent imaging (MRI)',
        urgency: 'urgent',
      },
      {
        symptom: 'Progressive neurological deficit',
        concern: 'Compressive lesion',
        associatedFindings: ['Foot drop', 'Weakness', 'Sensory loss'],
        action: 'Urgent MRI',
        urgency: 'urgent',
      },
    ],
    explanations: {
      level1: 'Your lower back has bones (spine), cushions between bones (discs), muscles, and nerves. Back pain usually comes from muscles or discs. If pain goes down your leg, a nerve might be irritated.',
      level2: 'The lower back supports your body and protects nerves going to your legs. Pain can come from muscles (strain), discs (herniation), joints (arthritis), or nerves (sciatica). Most back pain improves with time, but leg weakness or bladder problems need immediate attention.',
      level3: 'The lumbar spine comprises L1-L5 vertebrae with intervertebral discs, facet joints, supporting ligaments, and paraspinal muscles. The cauda equina (nerve roots below L1-L2) exits through neural foramina. Pain generators include discogenic, facetogenic, muscular, and SI joint sources. Radiculopathy indicates nerve root involvement.',
      level4: 'Lumbar pain transmission involves the sinuvertebral nerve (disc, posterior longitudinal ligament), medial branch of dorsal ramus (facet joints), and lateral branches (paraspinal muscles). Disc herniation most commonly affects L4-L5 and L5-S1, causing L5 or S1 radiculopathy respectively. Red flags for cauda equina syndrome include saddle anesthesia, urinary retention, and bilateral weakness.',
      level5: 'Discogenic pain involves sensitized nociceptors in the annulus fibrosus responding to mechanical and chemical stimuli (PGE2, IL-1β from nucleus pulposus). Facet joint pain involves capsular mechanoreceptors and nociceptors. Radicular pain results from mechanical compression and chemical irritation of the DRG by inflammatory mediators. Central sensitization explains the transition from acute to chronic low back pain. Neuroimaging findings must correlate with clinical presentation, as asymptomatic disc herniations are common.',
    },
  }],

  ['neck', {
    regionId: 'neck',
    regionName: 'Neck',
    latinName: 'Collum',
    regionDescription: 'The neck connects the head to the torso and contains the cervical spine, trachea, and major vessels',
    boundingBox: {
      min: { x: -0.1, y: 1.3, z: -0.1 },
      max: { x: 0.1, y: 1.6, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'neck-pain',
        symptom: 'Neck Pain',
        aliases: ['cervical pain', 'neck ache', 'stiff neck'],
        frequency: 'very-common',
        description: 'Pain or discomfort in the neck region',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-cervical-spine',
            structureName: 'Cervical Spine',
            system: 'musculoskeletal',
            mechanism: 'Disc degeneration, muscle strain, or facet joint dysfunction',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-cervical-muscles',
            structureName: 'Cervical Muscles',
            system: 'musculoskeletal',
            mechanism: 'Muscle tension, strain, or trigger points',
            highlightColor: '#27AE60',
          },
        ],
        characteristicFeatures: ['Location', 'Range of motion limitation', 'Radiation to arms', 'Associated headache'],
        commonCauses: ['Muscle strain', 'Poor posture', 'Cervical spondylosis', 'Whiplash'],
        differentialDiagnoses: ['Cervical disc herniation', 'Spinal stenosis', 'Radiculopathy', 'Myofascial pain'],
        relatedComplaints: ['neck-stiffness', 'arm-pain', 'headache'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Cervical vertebrae C1-C7', 'Intervertebral discs', 'Ligaments', 'Muscles'],
          structureIds: ['musculoskeletal-cervical-spine', 'musculoskeletal-cervical-discs', 'musculoskeletal-cervical-muscles'],
          primaryFunctions: ['Support head', 'Enable head movement', 'Protect spinal cord'],
        },
        {
          system: 'nervous',
          structures: ['Spinal cord', 'Cervical nerve roots', 'Brachial plexus'],
          structureIds: ['nervous-spinal-cord', 'nervous-cervical-roots', 'nervous-brachial-plexus'],
          primaryFunctions: ['Transmit signals', 'Upper limb innervation'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-cervical-spine',
          structureName: 'Cervical Vertebrae',
          system: 'musculoskeletal',
          clinicalRelevance: 'Common source of neck pain and radiculopathy',
          commonPathologies: ['Disc herniation', 'Spondylosis', 'Fracture'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Cervical plexus', 'Cervical dorsal rami'],
        motorNerves: ['C1-C8 spinal nerves'],
        dermatomalLevels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Vertebral arteries', 'Carotid arteries'],
        venousDrainage: ['Jugular veins', 'Vertebral veins'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Neck pain with fever and stiff neck',
        concern: 'Meningitis',
        associatedFindings: ['Photophobia', 'Altered mental status', 'Rash'],
        action: 'Emergency evaluation',
        urgency: 'emergency',
      },
      {
        symptom: 'Neck pain after trauma with neuro deficits',
        concern: 'Cervical spine fracture',
        associatedFindings: ['Weakness', 'Numbness', 'Incontinence'],
        action: 'Immobilize and emergency imaging',
        urgency: 'emergency',
      },
    ],
    relatedModules: ['orthopedics', 'neurology'],
    explanations: {
      level1: 'Your neck connects your head to your body. It has bones, muscles, and nerves that can get sore from poor posture or overuse.',
      level2: 'The neck contains 7 cervical vertebrae that support the head and allow movement. Muscles and ligaments provide stability. Pain often comes from muscle strain or disc problems.',
      level3: 'The cervical spine consists of seven vertebrae with discs between them. The spinal cord runs through the vertebral canal, and nerve roots exit through foramina. Common pain sources include discs, facet joints, and muscles.',
      level4: 'Cervical biomechanics involve complex coupled motions. Disc herniations at C5-C6 and C6-C7 are most common. Radiculopathy follows dermatomal patterns. The vertebral arteries traverse the transverse foramina.',
      level5: 'Cervical pain involves nociceptors in discs, facet joints, and muscles. Disc herniation causes radiculopathy via mechanical compression and chemical irritation. Central sensitization plays a role in chronic neck pain.',
    },
  }],

  ['shoulder-left', {
    regionId: 'shoulder-left',
    regionName: 'Left Shoulder',
    latinName: 'Articulatio glenohumeralis sinistra',
    regionDescription: 'The shoulder is a ball-and-socket joint connecting the arm to the torso',
    boundingBox: {
      min: { x: -0.45, y: 0.95, z: -0.1 },
      max: { x: -0.25, y: 1.15, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'shoulder-pain',
        symptom: 'Shoulder Pain',
        aliases: ['shoulder ache', 'painful shoulder', 'stiff shoulder'],
        frequency: 'very-common',
        description: 'Pain in or around the shoulder joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-rotator-cuff',
            structureName: 'Rotator Cuff',
            system: 'musculoskeletal',
            mechanism: 'Tendon inflammation or tear',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-glenohumeral-joint',
            structureName: 'Glenohumeral Joint',
            system: 'musculoskeletal',
            mechanism: 'Joint inflammation or degeneration',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-subacromial-bursa',
            structureName: 'Subacromial Bursa',
            system: 'musculoskeletal',
            mechanism: 'Bursal inflammation',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Location', 'Range of motion limitation', 'Night pain', 'Weakness'],
        commonCauses: ['Rotator cuff tendinopathy', 'Impingement', 'Bursitis', 'Arthritis'],
        differentialDiagnoses: ['Rotator cuff tear', 'Frozen shoulder', 'AC joint pathology', 'Referred pain'],
        relatedComplaints: ['shoulder-stiffness', 'arm-weakness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Humerus', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
          structureIds: ['musculoskeletal-humerus', 'musculoskeletal-scapula', 'musculoskeletal-rotator-cuff'],
          primaryFunctions: ['Wide range of motion', 'Arm positioning'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-rotator-cuff',
          structureName: 'Rotator Cuff',
          system: 'musculoskeletal',
          clinicalRelevance: 'Primary stabilizer of the shoulder; common tear site',
          commonPathologies: ['Supraspinatus tear', 'Tendinopathy', 'Calcific tendinitis'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Axillary nerve', 'Suprascapular nerve'],
        motorNerves: ['Axillary nerve', 'Suprascapular nerve'],
        dermatomalLevels: ['C4', 'C5', 'C6'],
      },
      vascularSupply: {
        arterialSupply: ['Axillary artery branches'],
        venousDrainage: ['Axillary vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Shoulder pain with chest pain and shortness of breath',
        concern: 'Cardiac referred pain',
        associatedFindings: ['Diaphoresis', 'Nausea', 'Jaw/arm pain'],
        action: 'Emergency cardiac evaluation',
        urgency: 'emergency',
      },
    ],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your shoulder is a ball-and-socket joint that lets you move your arm in many directions. It can get painful from overuse or injury.',
      level2: 'The shoulder is the most mobile joint in the body. It relies on muscles (rotator cuff) for stability. Pain often comes from tendon inflammation or tears.',
      level3: 'The glenohumeral joint has a shallow socket that allows great mobility but requires dynamic stabilization by the rotator cuff. Impingement occurs when tendons are compressed under the acromion.',
      level4: 'Rotator cuff tendons (supraspinatus most commonly) pass through the subacromial space. Degenerative changes and mechanical impingement lead to tendinopathy. Full-thickness tears cause weakness and may require surgical repair.',
      level5: 'Shoulder pain involves subacromial bursa inflammation and rotator cuff tendinopathy. Cellular changes in tendinopathy include collagen disorganization and neovascularization. Biomechanical factors and overuse contribute to pathology.',
    },
  }],

  ['shoulder-right', {
    regionId: 'shoulder-right',
    regionName: 'Right Shoulder',
    latinName: 'Articulatio glenohumeralis dextra',
    regionDescription: 'The shoulder is a ball-and-socket joint connecting the arm to the torso',
    boundingBox: {
      min: { x: 0.25, y: 0.95, z: -0.1 },
      max: { x: 0.45, y: 1.15, z: 0.1 },
    },
    chiefComplaints: [], // Uses same as left shoulder
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Axillary nerve', 'Suprascapular nerve'],
        motorNerves: ['Axillary nerve', 'Suprascapular nerve'],
        dermatomalLevels: ['C4', 'C5', 'C6'],
      },
      vascularSupply: {
        arterialSupply: ['Axillary artery branches'],
        venousDrainage: ['Axillary vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your shoulder is a ball-and-socket joint that lets you move your arm.',
      level2: 'The shoulder is the most mobile joint in the body, relying on muscles for stability.',
      level3: 'The glenohumeral joint has a shallow socket requiring dynamic stabilization.',
      level4: 'Rotator cuff tendons pass through the subacromial space.',
      level5: 'Shoulder pain involves bursa inflammation and rotator cuff tendinopathy.',
    },
  }],

  ['arm-left', {
    regionId: 'arm-left',
    regionName: 'Left Arm',
    latinName: 'Brachium sinistrum',
    regionDescription: 'The arm (brachium) extends from shoulder to elbow, containing the humerus and major muscles',
    boundingBox: {
      min: { x: -0.52, y: 0.4, z: -0.1 },
      max: { x: -0.38, y: 0.9, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'arm-pain',
        symptom: 'Arm Pain',
        aliases: ['upper arm pain', 'bicep pain', 'tricep pain'],
        frequency: 'common',
        description: 'Pain in the upper arm between shoulder and elbow',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-biceps',
            structureName: 'Biceps Brachii',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain or tendonitis',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-triceps',
            structureName: 'Triceps Brachii',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain or tendonitis',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-humerus',
            structureName: 'Humerus',
            system: 'musculoskeletal',
            mechanism: 'Fracture or bone pathology',
            highlightColor: '#27AE60',
          },
        ],
        characteristicFeatures: ['Location (anterior/posterior)', 'Movement-related pain', 'Swelling', 'Weakness'],
        commonCauses: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain', 'Muscle contusion'],
        differentialDiagnoses: ['Biceps tendon rupture', 'Humeral fracture', 'Radial neuropathy', 'Referred neck pain'],
        relatedComplaints: ['shoulder-pain', 'elbow-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Humerus', 'Biceps brachii', 'Triceps brachii', 'Brachialis'],
          structureIds: ['musculoskeletal-humerus', 'musculoskeletal-biceps', 'musculoskeletal-triceps'],
          primaryFunctions: ['Elbow flexion and extension', 'Forearm supination'],
        },
        {
          system: 'cardiovascular',
          structures: ['Brachial artery', 'Basilic vein', 'Cephalic vein'],
          structureIds: ['cardiovascular-brachial-artery', 'cardiovascular-arm-veins'],
          primaryFunctions: ['Blood supply to arm', 'Venous drainage'],
        },
        {
          system: 'nervous',
          structures: ['Median nerve', 'Ulnar nerve', 'Radial nerve', 'Musculocutaneous nerve'],
          structureIds: ['nervous-median', 'nervous-ulnar', 'nervous-radial'],
          primaryFunctions: ['Motor control', 'Sensation'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-humerus',
          structureName: 'Humerus',
          system: 'musculoskeletal',
          clinicalRelevance: 'Common fracture site, especially in elderly',
          commonPathologies: ['Proximal humerus fracture', 'Humeral shaft fracture', 'Pathologic fracture'],
        },
        {
          structureId: 'musculoskeletal-biceps',
          structureName: 'Biceps Brachii',
          system: 'musculoskeletal',
          clinicalRelevance: 'Common site of tendonitis and rupture',
          commonPathologies: ['Biceps tendonitis', 'Distal biceps rupture', 'Popeye deformity'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Musculocutaneous nerve', 'Radial nerve (posterior arm)'],
        motorNerves: ['Musculocutaneous nerve', 'Radial nerve (triceps)'],
        dermatomalLevels: ['C5', 'C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Brachial artery', 'Profunda brachii artery'],
        venousDrainage: ['Basilic vein', 'Cephalic vein', 'Brachial veins'],
        lymphaticDrainage: ['Axillary lymph nodes'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Severe arm pain with pulselessness or pallor',
        concern: 'Vascular compromise',
        associatedFindings: ['Cold extremity', 'Absent pulse', 'Delayed capillary refill'],
        action: 'Emergency vascular evaluation',
        urgency: 'emergency',
      },
      {
        symptom: 'Arm pain after trauma with deformity',
        concern: 'Fracture with displacement',
        associatedFindings: ['Obvious deformity', 'Inability to move', 'Numbness'],
        action: 'Imaging and orthopedic consultation',
        urgency: 'urgent',
      },
    ],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your arm has one big bone (humerus) and muscles that bend and straighten your elbow. Pain usually comes from muscle strain or injury.',
      level2: 'The arm contains the humerus bone with biceps (front) and triceps (back) muscles. The brachial artery and major nerves run through this region.',
      level3: 'The brachium contains the humerus with flexor (biceps, brachialis) and extensor (triceps) compartments. The musculocutaneous and radial nerves innervate these muscles.',
      level4: 'The humerus has distinct anatomical regions: proximal (surgical/anatomic necks), shaft, and distal (condyles). The radial nerve spirals around the posterior humerus, making it vulnerable in shaft fractures.',
      level5: 'Arm pain mechanisms include muscle strain (sarcomere disruption), tendon inflammation (collagen breakdown), and nerve compression. The brachial plexus origins explain referred pain patterns from the neck.',
    },
  }],

  ['arm-right', {
    regionId: 'arm-right',
    regionName: 'Right Arm',
    latinName: 'Brachium dextrum',
    regionDescription: 'The arm (brachium) extends from shoulder to elbow, containing the humerus and major muscles',
    boundingBox: {
      min: { x: 0.38, y: 0.4, z: -0.1 },
      max: { x: 0.52, y: 0.9, z: 0.1 },
    },
    chiefComplaints: [], // Uses same as left arm
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Musculocutaneous nerve', 'Radial nerve'],
        motorNerves: ['Musculocutaneous nerve', 'Radial nerve'],
        dermatomalLevels: ['C5', 'C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Brachial artery'],
        venousDrainage: ['Basilic vein', 'Cephalic vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your arm has one big bone and muscles that move your elbow.',
      level2: 'The arm contains the humerus with biceps and triceps muscles.',
      level3: 'The brachium has flexor and extensor muscle compartments.',
      level4: 'The humerus has distinct anatomical regions and nerve courses.',
      level5: 'Arm pain involves muscle, tendon, and nerve structures.',
    },
  }],

  ['elbow-left', {
    regionId: 'elbow-left',
    regionName: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    regionDescription: 'The elbow is a hinge joint connecting the upper arm to the forearm',
    boundingBox: {
      min: { x: -0.55, y: 0.25, z: -0.08 },
      max: { x: -0.4, y: 0.4, z: 0.08 },
    },
    chiefComplaints: [
      {
        complaintId: 'elbow-pain',
        symptom: 'Elbow Pain',
        aliases: ['elbow ache', 'sore elbow'],
        frequency: 'common',
        description: 'Pain in or around the elbow joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-lateral-epicondyle',
            structureName: 'Lateral Epicondyle',
            system: 'musculoskeletal',
            mechanism: 'Extensor tendon origin inflammation',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-medial-epicondyle',
            structureName: 'Medial Epicondyle',
            system: 'musculoskeletal',
            mechanism: 'Flexor tendon origin inflammation',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-olecranon-bursa',
            structureName: 'Olecranon Bursa',
            system: 'musculoskeletal',
            mechanism: 'Bursal inflammation',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Location (medial/lateral/posterior)', 'Grip-related pain', 'Swelling'],
        commonCauses: ['Lateral epicondylitis', 'Medial epicondylitis', 'Bursitis', 'Arthritis'],
        differentialDiagnoses: ['Tennis elbow', 'Golfer\'s elbow', 'Olecranon bursitis', 'Radial tunnel syndrome'],
        relatedComplaints: ['forearm-pain', 'wrist-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Humerus', 'Radius', 'Ulna', 'Joint capsule', 'Ligaments'],
          structureIds: ['musculoskeletal-elbow-joint', 'musculoskeletal-elbow-ligaments'],
          primaryFunctions: ['Flexion and extension', 'Forearm rotation'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-lateral-epicondyle',
          structureName: 'Lateral Epicondyle',
          system: 'musculoskeletal',
          clinicalRelevance: 'Origin of wrist extensors; common site of overuse injury',
          commonPathologies: ['Lateral epicondylitis (tennis elbow)', 'Extensor tendon tear'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Radial nerve', 'Ulnar nerve', 'Median nerve'],
        motorNerves: ['Radial nerve', 'Musculocutaneous nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery', 'Brachial artery'],
        venousDrainage: ['Cephalic vein', 'Basilic vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your elbow is a hinge that lets you bend and straighten your arm. It can get sore from repetitive activities like sports or computer work.',
      level2: 'The elbow joint connects the upper arm to the forearm. It allows bending, straightening, and rotation. Common problems include tendon inflammation from overuse.',
      level3: 'The elbow is a synovial hinge joint with humeroulnar, humeroradial, and proximal radioulnar articulations. The ulnar nerve passes behind the medial epicondyle.',
      level4: 'Epicondylitis involves microtears at tendon origins. Lateral epicondylitis affects extensor carpi radialis brevis. Ulnar nerve compression at the cubital tunnel causes medial elbow symptoms.',
      level5: 'Elbow pain involves extensor or flexor tendon microtrauma with failed healing response. Eccentric loading and repetitive strain contribute to pathology. Ultrasound and MRI guide treatment.',
    },
  }],

  ['elbow-right', {
    regionId: 'elbow-right',
    regionName: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    regionDescription: 'The elbow is a hinge joint connecting the upper arm to the forearm',
    boundingBox: {
      min: { x: 0.4, y: 0.25, z: -0.08 },
      max: { x: 0.55, y: 0.4, z: 0.08 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Radial nerve', 'Ulnar nerve'],
        motorNerves: ['Radial nerve', 'Musculocutaneous nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery'],
        venousDrainage: ['Cephalic vein', 'Basilic vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your elbow is a hinge that lets you bend and straighten your arm.',
      level2: 'The elbow joint connects the upper arm to the forearm.',
      level3: 'The elbow is a synovial hinge joint with multiple articulations.',
      level4: 'Epicondylitis involves microtears at tendon origins.',
      level5: 'Elbow pain involves tendon microtrauma with failed healing.',
    },
  }],

  ['forearm-left', {
    regionId: 'forearm-left',
    regionName: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    regionDescription: 'The forearm extends from elbow to wrist, containing radius and ulna',
    boundingBox: {
      min: { x: -0.55, y: -0.15, z: -0.08 },
      max: { x: -0.4, y: 0.25, z: 0.08 },
    },
    chiefComplaints: [
      {
        complaintId: 'forearm-pain',
        symptom: 'Forearm Pain',
        aliases: ['forearm ache', 'wrist pain'],
        frequency: 'common',
        description: 'Pain in the forearm between elbow and wrist',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-radius',
            structureName: 'Radius',
            system: 'musculoskeletal',
            mechanism: 'Fracture or stress injury',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-ulna',
            structureName: 'Ulna',
            system: 'musculoskeletal',
            mechanism: 'Fracture or stress injury',
            highlightColor: '#27AE60',
          },
        ],
        characteristicFeatures: ['Location', 'Swelling', 'Deformity'],
        commonCauses: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
        differentialDiagnoses: ['Radius fracture', 'Ulna fracture', 'Nerve compression'],
        relatedComplaints: ['elbow-pain', 'wrist-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Radius', 'Ulna', 'Forearm muscles'],
          structureIds: ['musculoskeletal-radius', 'musculoskeletal-ulna'],
          primaryFunctions: ['Wrist and finger movement', 'Forearm rotation'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Radial nerve', 'Median nerve', 'Ulnar nerve'],
        motorNerves: ['Radial nerve', 'Median nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery'],
        venousDrainage: ['Radial vein', 'Ulnar vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your forearm has two bones and muscles that move your wrist and fingers.',
      level2: 'The forearm contains the radius and ulna with flexor and extensor muscles.',
      level3: 'The forearm allows wrist movement and rotation (pronation/supination).',
      level4: 'The interosseous membrane connects radius and ulna.',
      level5: 'Forearm pathology involves bones, muscles, and nerves.',
    },
  }],

  ['forearm-right', {
    regionId: 'forearm-right',
    regionName: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    regionDescription: 'The forearm extends from elbow to wrist, containing radius and ulna',
    boundingBox: {
      min: { x: 0.4, y: -0.15, z: -0.08 },
      max: { x: 0.55, y: 0.25, z: 0.08 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Radial nerve', 'Median nerve', 'Ulnar nerve'],
        motorNerves: ['Radial nerve', 'Median nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery'],
        venousDrainage: ['Radial vein', 'Ulnar vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your forearm has two bones and muscles that move your wrist.',
      level2: 'The forearm contains the radius and ulna.',
      level3: 'The forearm allows wrist movement and rotation.',
      level4: 'The interosseous membrane connects the bones.',
      level5: 'Forearm pathology involves bones and nerves.',
    },
  }],

  ['wrist-left', {
    regionId: 'wrist-left',
    regionName: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    regionDescription: 'The wrist is a complex joint connecting the forearm to the hand',
    boundingBox: {
      min: { x: -0.58, y: -0.3, z: -0.06 },
      max: { x: -0.42, y: -0.15, z: 0.06 },
    },
    chiefComplaints: [
      {
        complaintId: 'wrist-pain',
        symptom: 'Wrist Pain',
        aliases: ['wrist ache', 'sore wrist'],
        frequency: 'common',
        description: 'Pain in the wrist joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-carpal-bones',
            structureName: 'Carpal Bones',
            system: 'musculoskeletal',
            mechanism: 'Fracture or ligament injury',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-wrist-ligaments',
            structureName: 'Wrist Ligaments',
            system: 'musculoskeletal',
            mechanism: 'Sprain or tear',
            highlightColor: '#E74C3C',
          },
        ],
        characteristicFeatures: ['Swelling', 'Range of motion limitation', 'Deformity'],
        commonCauses: ['Sprain', 'Fracture', 'Arthritis', 'Tendonitis'],
        differentialDiagnoses: ['Carpal tunnel syndrome', 'Fracture', 'Sprain', 'Arthritis'],
        relatedComplaints: ['hand-pain', 'forearm-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Radius', 'Ulna', 'Carpal bones', 'Ligaments'],
          structureIds: ['musculoskeletal-wrist-joint', 'musculoskeletal-carpal-bones'],
          primaryFunctions: ['Wrist movement', 'Stability'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Median nerve', 'Ulnar nerve', 'Radial nerve'],
        motorNerves: ['Median nerve', 'Ulnar nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery'],
        venousDrainage: ['Radial vein', 'Ulnar vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'rheumatology'],
    explanations: {
      level1: 'Your wrist connects your forearm to your hand. It can get sprained or develop arthritis.',
      level2: 'The wrist contains multiple small bones (carpals) and ligaments. It allows movement in multiple directions.',
      level3: 'The wrist has proximal and distal carpal rows with complex ligamentous support.',
      level4: 'Carpal anatomy includes scaphoid, lunate, triquetrum, pisiform, trapezium, trapezoid, capitate, and hamate.',
      level5: 'Wrist biomechanics involve radiocarpal and midcarpal joints with complex kinematics.',
    },
  }],

  ['wrist-right', {
    regionId: 'wrist-right',
    regionName: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    regionDescription: 'The wrist is a complex joint connecting the forearm to the hand',
    boundingBox: {
      min: { x: 0.42, y: -0.3, z: -0.06 },
      max: { x: 0.58, y: -0.15, z: 0.06 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Median nerve', 'Ulnar nerve', 'Radial nerve'],
        motorNerves: ['Median nerve', 'Ulnar nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8'],
      },
      vascularSupply: {
        arterialSupply: ['Radial artery', 'Ulnar artery'],
        venousDrainage: ['Radial vein', 'Ulnar vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'rheumatology'],
    explanations: {
      level1: 'Your wrist connects your forearm to your hand.',
      level2: 'The wrist contains multiple small bones and ligaments.',
      level3: 'The wrist has proximal and distal carpal rows.',
      level4: 'Carpal anatomy includes eight small bones.',
      level5: 'Wrist biomechanics involve complex joint kinematics.',
    },
  }],

  ['hand-left', {
    regionId: 'hand-left',
    regionName: 'Left Hand',
    latinName: 'Manus sinistra',
    regionDescription: 'The hand contains 27 bones for fine manipulation and grip',
    boundingBox: {
      min: { x: -0.6, y: -0.45, z: -0.05 },
      max: { x: -0.4, y: -0.3, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'hand-pain',
        symptom: 'Hand Pain',
        aliases: ['hand ache', 'finger pain'],
        frequency: 'common',
        description: 'Pain in the hand or fingers',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-carpal-bones',
            structureName: 'Carpal Bones',
            system: 'musculoskeletal',
            mechanism: 'Fracture or dislocation',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-finger-joints',
            structureName: 'Finger Joints',
            system: 'musculoskeletal',
            mechanism: 'Arthritis or injury',
            highlightColor: '#E74C3C',
          },
        ],
        characteristicFeatures: ['Location', 'Swelling', 'Stiffness', 'Numbness'],
        commonCauses: ['Trigger finger', 'Arthritis', 'De Quervain\'s', 'Fracture'],
        differentialDiagnoses: ['Osteoarthritis', 'Rheumatoid arthritis', 'Carpal tunnel syndrome', 'Trigger finger'],
        relatedComplaints: ['wrist-pain', 'finger-stiffness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Muscles'],
          structureIds: ['musculoskeletal-hand-bones', 'musculoskeletal-hand-muscles'],
          primaryFunctions: ['Fine manipulation', 'Grip', 'Sensation'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Median nerve', 'Ulnar nerve', 'Radial nerve'],
        motorNerves: ['Median nerve', 'Ulnar nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8', 'T1'],
      },
      vascularSupply: {
        arterialSupply: ['Superficial palmar arch', 'Deep palmar arch'],
        venousDrainage: ['Palmar venous plexus'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'rheumatology'],
    explanations: {
      level1: 'Your hand has many small bones that let you grip and feel things.',
      level2: 'The hand contains 27 bones including carpals, metacarpals, and phalanges.',
      level3: 'Hand function involves intrinsic and extrinsic muscles with complex innervation.',
      level4: 'The hand has arches (longitudinal and transverse) for grip function.',
      level5: 'Hand biomechanics involve complex tendon systems and joint mechanics.',
    },
  }],

  ['hand-right', {
    regionId: 'hand-right',
    regionName: 'Right Hand',
    latinName: 'Manus dextra',
    regionDescription: 'The hand contains 27 bones for fine manipulation and grip',
    boundingBox: {
      min: { x: 0.4, y: -0.45, z: -0.05 },
      max: { x: 0.6, y: -0.3, z: 0.1 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Median nerve', 'Ulnar nerve', 'Radial nerve'],
        motorNerves: ['Median nerve', 'Ulnar nerve'],
        dermatomalLevels: ['C6', 'C7', 'C8', 'T1'],
      },
      vascularSupply: {
        arterialSupply: ['Superficial palmar arch', 'Deep palmar arch'],
        venousDrainage: ['Palmar venous plexus'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'rheumatology'],
    explanations: {
      level1: 'Your hand has many small bones for gripping.',
      level2: 'The hand contains 27 bones.',
      level3: 'Hand function involves complex muscles.',
      level4: 'The hand has arches for grip function.',
      level5: 'Hand biomechanics involve complex systems.',
    },
  }],

  ['hip-left', {
    regionId: 'hip-left',
    regionName: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    regionDescription: 'The hip is a ball-and-socket joint connecting the leg to the pelvis',
    boundingBox: {
      min: { x: -0.28, y: -0.45, z: -0.1 },
      max: { x: -0.12, y: -0.25, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'hip-pain',
        symptom: 'Hip Pain',
        aliases: ['hip ache', 'groin pain'],
        frequency: 'common',
        description: 'Pain in or around the hip joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-femoral-head',
            structureName: 'Femoral Head',
            system: 'musculoskeletal',
            mechanism: 'Degeneration or avascular necrosis',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-acetabulum',
            structureName: 'Acetabulum',
            system: 'musculoskeletal',
            mechanism: 'Degeneration or labral tear',
            highlightColor: '#3498DB',
          },
        ],
        characteristicFeatures: ['Groin pain', 'Limited range of motion', 'Weight-bearing pain'],
        commonCauses: ['Osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
        differentialDiagnoses: ['OA', 'Trochanteric bursitis', 'Femoroacetabular impingement', 'Fracture'],
        relatedComplaints: ['thigh-pain', 'knee-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Femoral head', 'Acetabulum', 'Ligaments', 'Muscles'],
          structureIds: ['musculoskeletal-hip-joint'],
          primaryFunctions: ['Weight bearing', 'Locomotion'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve', 'Obturator nerve', 'Sciatic nerve'],
        motorNerves: ['Femoral nerve', 'Obturator nerve'],
        dermatomalLevels: ['L2', 'L3', 'L4', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Medial femoral circumflex', 'Lateral femoral circumflex'],
        venousDrainage: ['Femoral vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Hip pain after fall in elderly',
        concern: 'Hip fracture',
        associatedFindings: ['Inability to bear weight', 'Leg shortening', 'External rotation'],
        action: 'Emergency imaging and orthopedic consultation',
        urgency: 'emergency',
      },
    ],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your hip is a ball-and-socket joint that supports your body weight when standing and walking.',
      level2: 'The hip joint connects the leg to the pelvis. It is very stable but can develop arthritis with age.',
      level3: 'The hip is a ball-and-socket synovial joint with the femoral head articulating with the acetabulum.',
      level4: 'Hip pathology includes osteoarthritis, labral tears, and femoroacetabular impingement.',
      level5: 'Hip biomechanics involve complex loading patterns and joint reaction forces.',
    },
  }],

  ['hip-right', {
    regionId: 'hip-right',
    regionName: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    regionDescription: 'The hip is a ball-and-socket joint connecting the leg to the pelvis',
    boundingBox: {
      min: { x: 0.12, y: -0.45, z: -0.1 },
      max: { x: 0.28, y: -0.25, z: 0.1 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve', 'Obturator nerve'],
        motorNerves: ['Femoral nerve', 'Obturator nerve'],
        dermatomalLevels: ['L2', 'L3', 'L4', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Medial femoral circumflex'],
        venousDrainage: ['Femoral vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your hip supports your body weight when walking.',
      level2: 'The hip joint connects the leg to the pelvis.',
      level3: 'The hip is a ball-and-socket synovial joint.',
      level4: 'Hip pathology includes osteoarthritis and labral tears.',
      level5: 'Hip biomechanics involve complex loading patterns.',
    },
  }],

  ['thigh-left', {
    regionId: 'thigh-left',
    regionName: 'Left Thigh',
    latinName: 'Femur sinistrum',
    regionDescription: 'The thigh contains the femur and major muscle groups for locomotion',
    boundingBox: {
      min: { x: -0.25, y: -1.0, z: -0.1 },
      max: { x: -0.12, y: -0.45, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'thigh-pain',
        symptom: 'Thigh Pain',
        aliases: ['thigh ache', 'quad pain', 'hamstring pain'],
        frequency: 'common',
        description: 'Pain in the upper leg',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-quadriceps',
            structureName: 'Quadriceps',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain or contusion',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-hamstrings',
            structureName: 'Hamstrings',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain or tear',
            highlightColor: '#3498DB',
          },
        ],
        characteristicFeatures: ['Location', 'Swelling', 'Bruising', 'Weakness'],
        commonCauses: ['Quadriceps strain', 'Hamstring tear', 'Contusion', 'Compartment syndrome'],
        differentialDiagnoses: ['Muscle strain', 'Tear', 'Referred back pain', 'DVT'],
        relatedComplaints: ['hip-pain', 'knee-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Femur', 'Quadriceps', 'Hamstrings', 'Adductors'],
          structureIds: ['musculoskeletal-femur', 'musculoskeletal-thigh-muscles'],
          primaryFunctions: ['Locomotion', 'Stability'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve', 'Sciatic nerve'],
        motorNerves: ['Femoral nerve', 'Sciatic nerve'],
        dermatomalLevels: ['L2', 'L3', 'L4', 'S1', 'S2'],
      },
      vascularSupply: {
        arterialSupply: ['Femoral artery', 'Profunda femoris'],
        venousDrainage: ['Femoral vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Thigh swelling with calf pain and warmth',
        concern: 'Deep vein thrombosis (DVT)',
        associatedFindings: ['Swollen calf', 'Tenderness', 'Risk factors for clotting'],
        action: 'Urgent ultrasound and anticoagulation evaluation',
        urgency: 'urgent',
      },
    ],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your thigh has your biggest bone (femur) and strong muscles for walking and running.',
      level2: 'The thigh contains the femur with quadriceps (front) and hamstrings (back) muscle groups.',
      level3: 'The femur is the longest and strongest bone. The thigh muscles power locomotion.',
      level4: 'Thigh pathology includes muscle strains, contusions, and femoral fractures.',
      level5: 'Thigh muscle injuries involve sarcomere disruption and hematoma formation.',
    },
  }],

  ['thigh-right', {
    regionId: 'thigh-right',
    regionName: 'Right Thigh',
    latinName: 'Femur dextrum',
    regionDescription: 'The thigh contains the femur and major muscle groups for locomotion',
    boundingBox: {
      min: { x: 0.12, y: -1.0, z: -0.1 },
      max: { x: 0.25, y: -0.45, z: 0.1 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve', 'Sciatic nerve'],
        motorNerves: ['Femoral nerve', 'Sciatic nerve'],
        dermatomalLevels: ['L2', 'L3', 'L4', 'S1', 'S2'],
      },
      vascularSupply: {
        arterialSupply: ['Femoral artery'],
        venousDrainage: ['Femoral vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your thigh has strong muscles for walking.',
      level2: 'The thigh contains the femur with quadriceps and hamstrings.',
      level3: 'The femur is the longest bone.',
      level4: 'Thigh pathology includes muscle strains.',
      level5: 'Thigh muscle injuries involve tissue disruption.',
    },
  }],

  ['leg-left', {
    regionId: 'leg-left',
    regionName: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    regionDescription: 'The lower leg contains the tibia and fibula with calf muscles',
    boundingBox: {
      min: { x: -0.22, y: -1.5, z: -0.08 },
      max: { x: -0.1, y: -1.0, z: 0.08 },
    },
    chiefComplaints: [
      {
        complaintId: 'leg-pain',
        symptom: 'Lower Leg Pain',
        aliases: ['calf pain', 'shin pain'],
        frequency: 'common',
        description: 'Pain in the lower leg between knee and ankle',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-tibia',
            structureName: 'Tibia',
            system: 'musculoskeletal',
            mechanism: 'Stress fracture or periostitis',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-gastrocnemius',
            structureName: 'Gastrocnemius',
            system: 'musculoskeletal',
            mechanism: 'Muscle strain or tear',
            highlightColor: '#E74C3C',
          },
        ],
        characteristicFeatures: ['Location', 'Swelling', 'Warmth'],
        commonCauses: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
        differentialDiagnoses: ['Stress fracture', 'Compartment syndrome', 'DVT', 'Achilles pathology'],
        relatedComplaints: ['knee-pain', 'ankle-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus'],
          structureIds: ['musculoskeletal-tibia', 'musculoskeletal-calf-muscles'],
          primaryFunctions: ['Locomotion', 'Ankle movement'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Common peroneal nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1', 'S2'],
      },
      vascularSupply: {
        arterialSupply: ['Anterior tibial artery', 'Posterior tibial artery'],
        venousDrainage: ['Tibial veins'],
      },
    },
    differentialAnatomy: [],
    redFlags: [
      {
        symptom: 'Severe calf pain with swelling and warmth',
        concern: 'Deep vein thrombosis (DVT)',
        associatedFindings: ['Swelling', 'Tenderness', 'Risk factors'],
        action: 'Urgent ultrasound',
        urgency: 'urgent',
      },
    ],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your lower leg has two bones and calf muscles that help you walk and run.',
      level2: 'The lower leg contains the tibia and fibula with calf muscles.',
      level3: 'The tibia bears most of the weight; the fibula provides muscle attachment.',
      level4: 'Lower leg pathology includes stress fractures and compartment syndrome.',
      level5: 'Lower leg injuries involve bone, muscle, and vascular structures.',
    },
  }],

  ['leg-right', {
    regionId: 'leg-right',
    regionName: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    regionDescription: 'The lower leg contains the tibia and fibula with calf muscles',
    boundingBox: {
      min: { x: 0.1, y: -1.5, z: -0.08 },
      max: { x: 0.22, y: -1.0, z: 0.08 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Common peroneal nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1', 'S2'],
      },
      vascularSupply: {
        arterialSupply: ['Anterior tibial artery', 'Posterior tibial artery'],
        venousDrainage: ['Tibial veins'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics'],
    explanations: {
      level1: 'Your lower leg has calf muscles for walking.',
      level2: 'The lower leg contains the tibia and fibula.',
      level3: 'The tibia bears most of the weight.',
      level4: 'Lower leg pathology includes fractures.',
      level5: 'Lower leg injuries involve multiple structures.',
    },
  }],

  ['ankle-left', {
    regionId: 'ankle-left',
    regionName: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    regionDescription: 'The ankle connects the lower leg to the foot',
    boundingBox: {
      min: { x: -0.25, y: -1.75, z: -0.06 },
      max: { x: -0.1, y: -1.5, z: 0.06 },
    },
    chiefComplaints: [
      {
        complaintId: 'ankle-pain',
        symptom: 'Ankle Pain',
        aliases: ['ankle ache', 'twisted ankle'],
        frequency: 'very-common',
        description: 'Pain in or around the ankle joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-lateral-ligaments',
            structureName: 'Lateral Ligaments',
            system: 'musculoskeletal',
            mechanism: 'Ligament sprain or tear',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-achilles-tendon',
            structureName: 'Achilles Tendon',
            system: 'musculoskeletal',
            mechanism: 'Tendonitis or rupture',
            highlightColor: '#3498DB',
          },
        ],
        characteristicFeatures: ['Swelling', 'Bruising', 'Instability', 'Limited motion'],
        commonCauses: ['Sprain', 'Achilles tendonitis', 'Fracture', 'Arthritis'],
        differentialDiagnoses: ['Ligament sprain', 'Fracture', 'Achilles rupture'],
        relatedComplaints: ['foot-pain', 'leg-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Tibia', 'Fibula', 'Talus', 'Ligaments'],
          structureIds: ['musculoskeletal-ankle-joint'],
          primaryFunctions: ['Stability', 'Movement'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Superficial peroneal nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Anterior tibial artery', 'Posterior tibial artery'],
        venousDrainage: ['Tibial veins'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your ankle connects your leg to your foot. It can get sprained easily.',
      level2: 'The ankle joint allows up and down movement. It is stabilized by ligaments.',
      level3: 'The ankle is a hinge joint with medial and lateral ligament complexes.',
      level4: 'Ankle sprains most commonly affect the lateral ligaments.',
      level5: 'Ankle biomechanics involve complex joint mechanics during gait.',
    },
  }],

  ['ankle-right', {
    regionId: 'ankle-right',
    regionName: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    regionDescription: 'The ankle connects the lower leg to the foot',
    boundingBox: {
      min: { x: 0.1, y: -1.75, z: -0.06 },
      max: { x: 0.25, y: -1.5, z: 0.06 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Superficial peroneal nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Anterior tibial artery', 'Posterior tibial artery'],
        venousDrainage: ['Tibial veins'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your ankle connects your leg to your foot.',
      level2: 'The ankle joint allows up and down movement.',
      level3: 'The ankle is a hinge joint with ligament complexes.',
      level4: 'Ankle sprains affect the lateral ligaments.',
      level5: 'Ankle biomechanics involve complex mechanics.',
    },
  }],

  ['foot-left', {
    regionId: 'foot-left',
    regionName: 'Left Foot',
    latinName: 'Pes sinister',
    regionDescription: 'The foot contains 26 bones for weight-bearing and locomotion',
    boundingBox: {
      min: { x: -0.3, y: -2.0, z: -0.05 },
      max: { x: -0.08, y: -1.75, z: 0.15 },
    },
    chiefComplaints: [
      {
        complaintId: 'foot-pain',
        symptom: 'Foot Pain',
        aliases: ['foot ache', 'heel pain'],
        frequency: 'very-common',
        description: 'Pain in the foot or heel',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-plantar-fascia',
            structureName: 'Plantar Fascia',
            system: 'musculoskeletal',
            mechanism: 'Fascial inflammation',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-calcaneus',
            structureName: 'Calcaneus',
            system: 'musculoskeletal',
            mechanism: 'Heel spur or fracture',
            highlightColor: '#3498DB',
          },
        ],
        characteristicFeatures: ['Heel pain', 'Morning pain', 'Swelling'],
        commonCauses: ['Plantar fasciitis', 'Heel spur', 'Sprain', 'Bunion'],
        differentialDiagnoses: ['Plantar fasciitis', 'Calcaneal fracture', 'Achilles pathology'],
        relatedComplaints: ['ankle-pain', 'toe-pain'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
          structureIds: ['musculoskeletal-foot-bones'],
          primaryFunctions: ['Weight bearing', 'Locomotion', 'Balance'],
        },
      ],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Superficial peroneal nerve', 'Sural nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Dorsalis pedis artery', 'Posterior tibial artery'],
        venousDrainage: ['Dorsal venous arch'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your foot has many bones that support your weight when standing and walking.',
      level2: 'The foot contains 26 bones with arches for shock absorption.',
      level3: 'The foot has longitudinal and transverse arches.',
      level4: 'Foot pathology includes plantar fasciitis and metatarsalgia.',
      level5: 'Foot biomechanics involve complex arch mechanics during gait.',
    },
  }],

  ['foot-right', {
    regionId: 'foot-right',
    regionName: 'Right Foot',
    latinName: 'Pes dexter',
    regionDescription: 'The foot contains 26 bones for weight-bearing and locomotion',
    boundingBox: {
      min: { x: 0.08, y: -2.0, z: -0.05 },
      max: { x: 0.3, y: -1.75, z: 0.15 },
    },
    chiefComplaints: [],
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Tibial nerve', 'Superficial peroneal nerve'],
        motorNerves: ['Tibial nerve'],
        dermatomalLevels: ['L4', 'L5', 'S1'],
      },
      vascularSupply: {
        arterialSupply: ['Dorsalis pedis artery'],
        venousDrainage: ['Dorsal venous arch'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    relatedModules: ['orthopedics', 'sports-medicine'],
    explanations: {
      level1: 'Your foot supports your weight when walking.',
      level2: 'The foot contains 26 bones with arches.',
      level3: 'The foot has arches for shock absorption.',
      level4: 'Foot pathology includes plantar fasciitis.',
      level5: 'Foot biomechanics involve complex mechanics.',
    },
  }],

  ['knee-left', {
    regionId: 'knee-left',
    regionName: 'Left Knee',
    regionDescription: 'The knee joint connects the thigh and leg, allowing flexion and extension',
    boundingBox: {
      min: { x: -0.15, y: -0.1, z: -0.1 },
      max: { x: 0.0, y: 0.1, z: 0.1 },
    },
    chiefComplaints: [
      {
        complaintId: 'knee-pain',
        symptom: 'Knee Pain',
        aliases: ['knee ache', 'knee hurt'],
        frequency: 'very-common',
        description: 'Pain in or around the knee joint',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-knee-cartilage',
            structureName: 'Knee Cartilage',
            system: 'musculoskeletal',
            mechanism: 'Osteoarthritis, degeneration',
            highlightColor: '#3498DB',
          },
          {
            structureId: 'musculoskeletal-meniscus',
            structureName: 'Meniscus',
            system: 'musculoskeletal',
            mechanism: 'Tear, degeneration',
            highlightColor: '#27AE60',
          },
          {
            structureId: 'musculoskeletal-knee-ligaments',
            structureName: 'Knee Ligaments',
            system: 'musculoskeletal',
            mechanism: 'Sprain, tear',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-patella',
            structureName: 'Patella (Kneecap)',
            system: 'musculoskeletal',
            mechanism: 'Patellofemoral syndrome',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Location', 'Mechanism of injury', 'Swelling', 'Instability', 'Locking'],
        commonCauses: ['Osteoarthritis', 'Meniscus injury', 'Ligament injury', 'Patellofemoral pain'],
        differentialDiagnoses: ['OA', 'Meniscal tear', 'ACL/MCL injury', 'Patellar tendinitis', 'Bursitis'],
        relatedComplaints: ['knee-swelling', 'knee-instability'],
        educationalContentId: 'learn-joint-pain',
      },
      {
        complaintId: 'knee-swelling',
        symptom: 'Knee Swelling',
        aliases: ['knee effusion', 'swollen knee', 'water on the knee'],
        frequency: 'common',
        description: 'Fluid accumulation in or around the knee',
        anatomicalBasis: [
          {
            structureId: 'musculoskeletal-knee-synovium',
            structureName: 'Synovium',
            system: 'musculoskeletal',
            mechanism: 'Inflammation producing excess fluid',
            highlightColor: '#E74C3C',
          },
          {
            structureId: 'musculoskeletal-knee-bursa',
            structureName: 'Bursae',
            system: 'musculoskeletal',
            mechanism: 'Bursitis',
            highlightColor: '#F39C12',
          },
        ],
        characteristicFeatures: ['Onset (rapid vs gradual)', 'Warmth', 'Redness', 'Distribution'],
        commonCauses: ['Injury', 'Osteoarthritis', 'Inflammatory arthritis', 'Gout', 'Infection'],
        differentialDiagnoses: ['Traumatic effusion', 'OA', 'RA', 'Crystal arthritis', 'Septic arthritis'],
        relatedComplaints: ['knee-pain', 'knee-stiffness'],
      },
    ],
    regionalAnatomy: {
      systems: [
        {
          system: 'musculoskeletal',
          structures: ['Femur', 'Tibia', 'Patella', 'Menisci', 'Cruciate ligaments', 'Collateral ligaments'],
          structureIds: ['musculoskeletal-femur', 'musculoskeletal-tibia', 'musculoskeletal-patella', 'musculoskeletal-meniscus', 'musculoskeletal-acl', 'musculoskeletal-mcl'],
          primaryFunctions: ['Weight bearing', 'Flexion/extension', 'Stability'],
        },
      ],
      keyStructures: [
        {
          structureId: 'musculoskeletal-meniscus',
          structureName: 'Meniscus',
          system: 'musculoskeletal',
          clinicalRelevance: 'Shock absorber; tears cause pain and mechanical symptoms',
          commonPathologies: ['Tears (medial > lateral)', 'Degeneration'],
        },
        {
          structureId: 'musculoskeletal-acl',
          structureName: 'ACL',
          system: 'musculoskeletal',
          clinicalRelevance: 'Primary restraint to anterior tibial translation',
          commonPathologies: ['Complete tear', 'Partial tear'],
        },
      ],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve branches', 'Tibial nerve branches', 'Common peroneal branches'],
        motorNerves: ['Femoral nerve (quadriceps)', 'Tibial nerve (hamstrings)'],
        dermatomalLevels: ['L3', 'L4'],
      },
      vascularSupply: {
        arterialSupply: ['Genicular arteries', 'Popliteal artery'],
        venousDrainage: ['Popliteal vein'],
      },
    },
    differentialAnatomy: [
      {
        symptom: 'Knee pain',
        possibleSources: [
          {
            structureName: 'Articular cartilage',
            structureId: 'musculoskeletal-knee-cartilage',
            likelihood: 'common',
            characteristicFeatures: ['Worse with activity', 'Morning stiffness', 'Crepitus'],
            testToDistinguish: 'X-ray (joint space narrowing)',
          },
          {
            structureName: 'Meniscus',
            structureId: 'musculoskeletal-meniscus',
            likelihood: 'common',
            characteristicFeatures: ['Locking', 'Catching', 'Joint line tenderness'],
            testToDistinguish: 'MRI, McMurray test',
          },
          {
            structureName: 'Patellofemoral joint',
            structureId: 'musculoskeletal-patella',
            likelihood: 'common',
            characteristicFeatures: ['Anterior knee pain', 'Worse with stairs', 'Theater sign'],
            testToDistinguish: 'Patellar grind test',
          },
        ],
        distinguishingFeatures: 'Pain location, mechanical symptoms, and physical exam maneuvers help differentiate',
      },
    ],
    redFlags: [
      {
        symptom: 'Hot, red, swollen knee',
        concern: 'Septic arthritis',
        associatedFindings: ['Fever', 'Unable to bear weight', 'Severe pain with any motion'],
        action: 'Emergency joint aspiration and antibiotics',
        urgency: 'emergency',
      },
      {
        symptom: 'Knee gives way with swelling after injury',
        concern: 'ACL rupture',
        associatedFindings: ['Heard/felt pop', 'Rapid swelling', 'Instability'],
        action: 'Orthopedic evaluation, MRI',
        urgency: 'urgent',
      },
    ],
    explanations: {
      level1: 'Your knee is a joint that lets you bend and straighten your leg. It has bones, cushions (cartilage), and bands (ligaments) that hold it together. Knee pain can come from any of these parts.',
      level2: 'The knee joint connects your thigh bone (femur) to your shin bone (tibia). Cartilage cushions the bones, menisci absorb shock, and ligaments provide stability. Pain can come from arthritis (cartilage wear), meniscus tears, ligament injuries, or the kneecap.',
      level3: 'The knee is a modified hinge joint with tibiofemoral and patellofemoral articulations. The menisci distribute load and provide stability. The ACL and PCL control anterior-posterior motion; the MCL and LCL control varus-valgus stability. Pain generators include articular cartilage, menisci, synovium, and periarticular structures.',
      level4: 'Knee pain evaluation involves assessing mechanism of injury, mechanical symptoms (locking, catching, giving way), swelling characteristics (effusion location, timing), and specific physical exam maneuvers (Lachman, McMurray, valgus/varus stress). OA typically shows medial compartment joint space narrowing on weight-bearing X-ray. MRI is gold standard for soft tissue evaluation.',
      level5: 'Knee joint nociception involves free nerve endings in the joint capsule, synovium, periosteum, and meniscal periphery. Articular cartilage is aneural. Osteoarthritis pain involves subchondral bone microfractures, synovitis, and central sensitization. Meniscal tears in the vascular peripheral zone may heal; tears in the avascular central zone typically do not. ACL mechanoreceptors contribute to proprioception; ACL-deficient knees show altered neuromuscular control. Inflammatory arthritides show pannus invasion with cytokine-mediated cartilage destruction.',
    },
  }],

  ['knee-right', {
    regionId: 'knee-right',
    regionName: 'Right Knee',
    regionDescription: 'The knee joint connects the thigh and leg, allowing flexion and extension',
    boundingBox: {
      min: { x: 0.0, y: -0.1, z: -0.1 },
      max: { x: 0.15, y: 0.1, z: 0.1 },
    },
    chiefComplaints: [], // Uses same complaints as left knee
    regionalAnatomy: {
      systems: [],
      keyStructures: [],
      neuralInnervation: {
        sensoryNerves: ['Femoral nerve branches', 'Tibial nerve branches', 'Common peroneal branches'],
        motorNerves: ['Femoral nerve (quadriceps)', 'Tibial nerve (hamstrings)'],
        dermatomalLevels: ['L3', 'L4'],
      },
      vascularSupply: {
        arterialSupply: ['Genicular arteries', 'Popliteal artery'],
        venousDrainage: ['Popliteal vein'],
      },
    },
    differentialAnatomy: [],
    redFlags: [],
    explanations: {
      level1: 'Your knee is a joint that lets you bend and straighten your leg.',
      level2: 'The knee joint connects your thigh bone to your shin bone.',
      level3: 'The knee is a modified hinge joint with tibiofemoral and patellofemoral articulations.',
      level4: 'Knee pain evaluation involves assessing mechanism, mechanical symptoms, and swelling.',
      level5: 'Knee joint nociception involves free nerve endings in the capsule and synovium.',
    },
  }],
]);

// Copy knee-left data to knee-right (except bounding box)
const leftKnee = regionChiefComplaints.get('knee-left')!;
const rightKnee = regionChiefComplaints.get('knee-right')!;
rightKnee.chiefComplaints = leftKnee.chiefComplaints;
rightKnee.regionalAnatomy = leftKnee.regionalAnatomy;
rightKnee.differentialAnatomy = leftKnee.differentialAnatomy;
rightKnee.redFlags = leftKnee.redFlags;
rightKnee.explanations = leftKnee.explanations;

// Copy shoulder-left data to shoulder-right
const leftShoulder = regionChiefComplaints.get('shoulder-left')!;
const rightShoulder = regionChiefComplaints.get('shoulder-right')!;
rightShoulder.chiefComplaints = leftShoulder.chiefComplaints;
rightShoulder.regionalAnatomy = leftShoulder.regionalAnatomy;
rightShoulder.differentialAnatomy = leftShoulder.differentialAnatomy;
rightShoulder.redFlags = leftShoulder.redFlags;
rightShoulder.explanations = leftShoulder.explanations;

// Copy arm-left data to arm-right (CORRECTED: no DVT, carpal tunnel, tennis elbow in arm conditions)
const leftArm = regionChiefComplaints.get('arm-left')!;
const rightArm = regionChiefComplaints.get('arm-right')!;
rightArm.chiefComplaints = leftArm.chiefComplaints;
rightArm.regionalAnatomy = leftArm.regionalAnatomy;
rightArm.differentialAnatomy = leftArm.differentialAnatomy;
rightArm.redFlags = leftArm.redFlags;
rightArm.explanations = leftArm.explanations;

// Copy elbow-left data to elbow-right
const leftElbow = regionChiefComplaints.get('elbow-left')!;
const rightElbow = regionChiefComplaints.get('elbow-right')!;
rightElbow.chiefComplaints = leftElbow.chiefComplaints;
rightElbow.regionalAnatomy = leftElbow.regionalAnatomy;
rightElbow.differentialAnatomy = leftElbow.differentialAnatomy;
rightElbow.redFlags = leftElbow.redFlags;
rightElbow.explanations = leftElbow.explanations;

// Copy forearm-left data to forearm-right
const leftForearm = regionChiefComplaints.get('forearm-left')!;
const rightForearm = regionChiefComplaints.get('forearm-right')!;
rightForearm.chiefComplaints = leftForearm.chiefComplaints;
rightForearm.regionalAnatomy = leftForearm.regionalAnatomy;
rightForearm.differentialAnatomy = leftForearm.differentialAnatomy;
rightForearm.redFlags = leftForearm.redFlags;
rightForearm.explanations = leftForearm.explanations;

// Copy wrist-left data to wrist-right
const leftWrist = regionChiefComplaints.get('wrist-left')!;
const rightWrist = regionChiefComplaints.get('wrist-right')!;
rightWrist.chiefComplaints = leftWrist.chiefComplaints;
rightWrist.regionalAnatomy = leftWrist.regionalAnatomy;
rightWrist.differentialAnatomy = leftWrist.differentialAnatomy;
rightWrist.redFlags = leftWrist.redFlags;
rightWrist.explanations = leftWrist.explanations;

// Copy hand-left data to hand-right
const leftHand = regionChiefComplaints.get('hand-left')!;
const rightHand = regionChiefComplaints.get('hand-right')!;
rightHand.chiefComplaints = leftHand.chiefComplaints;
rightHand.regionalAnatomy = leftHand.regionalAnatomy;
rightHand.differentialAnatomy = leftHand.differentialAnatomy;
rightHand.redFlags = leftHand.redFlags;
rightHand.explanations = leftHand.explanations;

// Copy hip-left data to hip-right
const leftHip = regionChiefComplaints.get('hip-left')!;
const rightHip = regionChiefComplaints.get('hip-right')!;
rightHip.chiefComplaints = leftHip.chiefComplaints;
rightHip.regionalAnatomy = leftHip.regionalAnatomy;
rightHip.differentialAnatomy = leftHip.differentialAnatomy;
rightHip.redFlags = leftHip.redFlags;
rightHip.explanations = leftHip.explanations;

// Copy thigh-left data to thigh-right
const leftThigh = regionChiefComplaints.get('thigh-left')!;
const rightThigh = regionChiefComplaints.get('thigh-right')!;
rightThigh.chiefComplaints = leftThigh.chiefComplaints;
rightThigh.regionalAnatomy = leftThigh.regionalAnatomy;
rightThigh.differentialAnatomy = leftThigh.differentialAnatomy;
rightThigh.redFlags = leftThigh.redFlags;
rightThigh.explanations = leftThigh.explanations;

// Copy leg-left data to leg-right
const leftLeg = regionChiefComplaints.get('leg-left')!;
const rightLeg = regionChiefComplaints.get('leg-right')!;
rightLeg.chiefComplaints = leftLeg.chiefComplaints;
rightLeg.regionalAnatomy = leftLeg.regionalAnatomy;
rightLeg.differentialAnatomy = leftLeg.differentialAnatomy;
rightLeg.redFlags = leftLeg.redFlags;
rightLeg.explanations = leftLeg.explanations;

// Copy ankle-left data to ankle-right
const leftAnkle = regionChiefComplaints.get('ankle-left')!;
const rightAnkle = regionChiefComplaints.get('ankle-right')!;
rightAnkle.chiefComplaints = leftAnkle.chiefComplaints;
rightAnkle.regionalAnatomy = leftAnkle.regionalAnatomy;
rightAnkle.differentialAnatomy = leftAnkle.differentialAnatomy;
rightAnkle.redFlags = leftAnkle.redFlags;
rightAnkle.explanations = leftAnkle.explanations;

// Copy foot-left data to foot-right
const leftFoot = regionChiefComplaints.get('foot-left')!;
const rightFoot = regionChiefComplaints.get('foot-right')!;
rightFoot.chiefComplaints = leftFoot.chiefComplaints;
rightFoot.regionalAnatomy = leftFoot.regionalAnatomy;
rightFoot.differentialAnatomy = leftFoot.differentialAnatomy;
rightFoot.redFlags = leftFoot.redFlags;
rightFoot.explanations = leftFoot.explanations;

/**
 * Get all region chief complaints
 */
export function getAllRegionComplaints(): RegionChiefComplaints[] {
  return Array.from(regionChiefComplaints.values());
}

/**
 * Get complaints for a specific region
 */
export function getRegionComplaints(regionId: BodyRegion): RegionChiefComplaints | undefined {
  return regionChiefComplaints.get(regionId);
}

/**
 * Get top complaints for a region
 */
export function getTopComplaintsForRegion(
  regionId: BodyRegion,
  limit: number = 5
): ChiefComplaint[] {
  const region = regionChiefComplaints.get(regionId);
  if (!region) return [];

  return region.chiefComplaints
    .sort((a, b) => {
      const freqOrder = { 'very-common': 0, 'common': 1, 'less-common': 2, 'uncommon': 3 };
      return freqOrder[a.frequency] - freqOrder[b.frequency];
    })
    .slice(0, limit);
}

/**
 * Find region by 3D coordinates
 */
export function findRegionByCoordinates(
  x: number,
  y: number,
  z: number
): BodyRegion | null {
  for (const [regionId, region] of regionChiefComplaints) {
    const { min, max } = region.boundingBox;
    if (
      x >= min.x && x <= max.x &&
      y >= min.y && y <= max.y &&
      z >= min.z && z <= max.z
    ) {
      return regionId;
    }
  }
  return null;
}

/**
 * Create exploration result for a region
 */
export function createRegionExplorationResult(
  regionId: BodyRegion,
  userHistory: UserRegionHistory | null = null
): RegionExplorationResult | null {
  const region = regionChiefComplaints.get(regionId);
  if (!region) return null;

  const topComplaints = getTopComplaintsForRegion(regionId, 5);
  const anatomyHighlights = topComplaints.flatMap((c) => c.anatomicalBasis);

  return {
    region,
    userHistory,
    topComplaints,
    anatomyHighlights,
    educationalContent: {
      overview: region.explanations.level2,
      anatomy: `Key structures: ${region.regionalAnatomy.keyStructures.map((s) => s.structureName).join(', ')}`,
      commonIssues: `Common complaints: ${topComplaints.map((c) => c.symptom).join(', ')}`,
    },
    viewSettings: {
      cameraPosition: {
        x: (region.boundingBox.min.x + region.boundingBox.max.x) / 2,
        y: (region.boundingBox.min.y + region.boundingBox.max.y) / 2,
        z: 2.5,
      },
      highlightedIds: region.regionalAnatomy.keyStructures.map((s) => s.structureId),
      isolateRegion: false,
    },
  };
}

/**
 * Create initial exploration state
 */
export function createInitialExplorationState(): RegionExplorationState {
  return {
    selectedRegion: null,
    regionData: null,
    userHistory: null,
    expandedComplaint: null,
    showingAnatomy: false,
    highlightedStructures: [],
  };
}

/**
 * Educational disclaimer
 */
export const REGION_COMPLAINTS_DISCLAIMER = `
This region-based symptom information is for educational purposes only. It helps
understand what structures may be involved when symptoms occur in a specific body
area. This information does not constitute medical advice or diagnosis. If you
are experiencing symptoms, please consult a qualified healthcare provider for
proper evaluation and treatment.
`;
