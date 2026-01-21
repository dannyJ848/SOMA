/**
 * Symptom-to-Anatomy Mapping Data Store
 *
 * Comprehensive mappings from symptoms to anatomical sources,
 * including referred pain patterns, mechanisms, and clinical context.
 */

import type {
  SymptomAnatomyMapping,
  SymptomSearchResult,
  SymptomAnatomyHighlight,
  SymptomExplorationContext,
  SymptomQualityMapping,
  SymptomQuality,
} from './types';

/**
 * Symptom-to-anatomy mappings
 */
export const SYMPTOM_ANATOMY_MAPPINGS = new Map<string, SymptomAnatomyMapping>([
  // ============ CHEST SYMPTOMS ============
  [
    'chest-pain',
    {
      symptomId: 'chest-pain',
      symptomName: 'Chest Pain',
      aliases: ['chest discomfort', 'chest tightness', 'angina', 'precordial pain'],
      category: 'cardiovascular',
      bodyRegion: 'chest',
      description: 'Discomfort or pain in the chest area, ranging from pressure to sharp pain',
      anatomicalSources: [
        {
          structureId: 'heart',
          structureName: 'Heart (Cardiac)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Myocardial ischemia from coronary artery disease causes visceral pain via cardiac afferents',
          characteristicFeatures: ['Pressure or squeezing', 'Substernal', 'May radiate to arm/jaw'],
          aggravatingFactors: ['Exertion', 'Emotional stress', 'Cold weather'],
          relievingFactors: ['Rest', 'Nitroglycerin (within 5 min)'],
          associatedFindings: ['Dyspnea', 'Diaphoresis', 'Nausea'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'esophagus',
          structureName: 'Esophagus (GERD/Spasm)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Acid reflux or esophageal spasm stimulates visceral afferents sharing pathways with cardiac',
          characteristicFeatures: ['Burning', 'Retrosternal', 'Related to meals'],
          aggravatingFactors: ['Lying down', 'Large meals', 'Spicy/acidic foods'],
          relievingFactors: ['Antacids', 'Sitting upright'],
          associatedFindings: ['Regurgitation', 'Dysphagia', 'Sour taste'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'chest-wall',
          structureName: 'Chest Wall (Musculoskeletal)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Costochondritis, muscle strain, or rib pathology causes somatic pain via intercostal nerves',
          characteristicFeatures: ['Sharp', 'Localized', 'Reproducible with palpation'],
          aggravatingFactors: ['Movement', 'Deep breathing', 'Coughing'],
          relievingFactors: ['Rest', 'NSAIDs', 'Local heat'],
          associatedFindings: ['Tenderness to palpation', 'Recent trauma/strain'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'lungs-pleura',
          structureName: 'Lungs/Pleura',
          system: 'respiratory',
          likelihood: 'less-common',
          mechanism: 'Pleuritis, pneumonia, or PE causes pleural irritation via phrenic and intercostal nerves',
          characteristicFeatures: ['Sharp', 'Pleuritic (worse with breathing)', 'Lateral'],
          aggravatingFactors: ['Deep inspiration', 'Coughing'],
          relievingFactors: ['Shallow breathing', 'Leaning forward (pericarditis)'],
          associatedFindings: ['Cough', 'Dyspnea', 'Fever'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'aorta',
          structureName: 'Aorta (Dissection)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Aortic dissection causes sudden severe pain via adventitial nerve stimulation',
          characteristicFeatures: ['Sudden severe', 'Tearing/ripping', 'Radiates to back'],
          aggravatingFactors: ['Sudden onset at rest'],
          associatedFindings: ['BP differential between arms', 'Pulse deficit', 'New aortic regurgitation'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'pericardium',
          structureName: 'Pericardium (Pericarditis)',
          system: 'cardiovascular',
          likelihood: 'less-common',
          mechanism: 'Pericardial inflammation causes sharp pain via phrenic nerve',
          characteristicFeatures: ['Sharp', 'Positional', 'Worse lying flat'],
          aggravatingFactors: ['Lying supine', 'Deep breathing'],
          relievingFactors: ['Sitting forward'],
          associatedFindings: ['Friction rub', 'Diffuse ST elevation', 'Recent viral illness'],
          highlightColor: '#e67e22',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Heart',
          sourceLocation: 'Myocardium',
          referredTo: ['Left arm', 'Jaw', 'Neck', 'Epigastrium', 'Between shoulder blades'],
          dermatomalLevel: 'T1-T4',
          mechanism: 'Cardiac visceral afferents converge with somatic afferents at spinal cord',
          clinicalExample: 'MI presenting as jaw pain or left arm numbness',
        },
        {
          sourceOrgan: 'Gallbladder',
          sourceLocation: 'Right upper quadrant',
          referredTo: ['Right shoulder', 'Right scapula', 'Chest'],
          dermatomalLevel: 'T6-T9',
          mechanism: 'Phrenic nerve irritation from subdiaphragmatic inflammation',
          clinicalExample: 'Cholecystitis presenting as chest or shoulder pain',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Cardiac afferents travel with sympathetic nerves to T1-T4 dorsal root ganglia; somatic via intercostal nerves',
        centralProcessing: 'Convergence of visceral and somatic afferents causes referred pain and difficulty localizing',
        perceptionDescription: 'Visceral pain is diffuse, hard to localize; somatic pain is sharp, localized',
      },
      redFlags: [
        {
          finding: 'Sudden severe tearing pain radiating to back',
          concern: 'Aortic dissection',
          urgency: 'immediate',
          actionRequired: 'Call 911, emergent CT angiography',
        },
        {
          finding: 'Pressure/squeezing with dyspnea, diaphoresis',
          concern: 'Myocardial infarction',
          urgency: 'immediate',
          actionRequired: 'Call 911, aspirin, emergent ECG',
        },
        {
          finding: 'Pleuritic pain with sudden dyspnea, tachycardia',
          concern: 'Pulmonary embolism',
          urgency: 'immediate',
          actionRequired: 'Emergent evaluation, CT-PA',
        },
      ],
      relatedSymptoms: ['dyspnea', 'diaphoresis', 'palpitations', 'nausea', 'syncope'],
      differentialConsiderations: ['ACS', 'GERD', 'Musculoskeletal', 'PE', 'Pneumonia', 'Aortic dissection', 'Pericarditis'],
      explanations: {
        level1: 'Chest pain can come from your heart, lungs, muscles, or stomach area. Some causes are serious emergencies.',
        level2: 'Chest pain has many causes including heart problems, acid reflux, muscle strain, and lung conditions. Heart-related pain needs immediate attention.',
        level3: 'Chest pain differential includes cardiac (ACS, pericarditis), pulmonary (PE, pneumonia), GI (GERD, esophageal spasm), and musculoskeletal causes. Risk stratification is key.',
        level4: 'Visceral-somatic convergence at T1-T4 explains cardiac referred pain to arm/jaw. Pleuritic pain indicates parietal pleura involvement. Character, radiation, and associated symptoms guide diagnosis.',
        level5: 'Cardiac afferents travel with sympathetics via stellate ganglion to T1-T5. Viscero-somatic convergence in spinothalamic tract causes referred pain. Phrenic nerve (C3-5) involvement explains shoulder pain in subdiaphragmatic/pericardial disease.',
      },
    },
  ],
  // ============ ABDOMINAL SYMPTOMS ============
  [
    'abdominal-pain',
    {
      symptomId: 'abdominal-pain',
      symptomName: 'Abdominal Pain',
      aliases: ['stomach ache', 'belly pain', 'tummy ache', 'epigastric pain'],
      category: 'gastrointestinal',
      bodyRegion: 'abdomen',
      description: 'Pain or discomfort in the abdominal region, from epigastrium to pelvis',
      anatomicalSources: [
        {
          structureId: 'stomach',
          structureName: 'Stomach (Gastritis/Ulcer)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Mucosal inflammation or ulceration stimulates visceral afferents',
          characteristicFeatures: ['Epigastric', 'Burning', 'Related to meals'],
          aggravatingFactors: ['Fasting (duodenal ulcer)', 'Eating (gastric ulcer)', 'NSAIDs'],
          relievingFactors: ['Antacids', 'Food (duodenal)', 'PPIs'],
          associatedFindings: ['Nausea', 'Early satiety', 'H. pylori positive'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'gallbladder',
          structureName: 'Gallbladder (Biliary Colic)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Gallstone impaction causes distension and visceral pain',
          characteristicFeatures: ['RUQ', 'Colicky then constant', 'After fatty meals'],
          aggravatingFactors: ['Fatty foods', 'Large meals'],
          associatedFindings: ['Murphy sign positive', 'Nausea/vomiting'],
          highlightColor: '#27ae60',
        },
        {
          structureId: 'appendix',
          structureName: 'Appendix (Appendicitis)',
          system: 'digestive',
          likelihood: 'do-not-miss',
          mechanism: 'Appendiceal obstruction → distension → ischemia → peritoneal irritation',
          characteristicFeatures: ['Initially periumbilical', 'Migrates to RLQ', 'Constant'],
          aggravatingFactors: ['Movement', 'Coughing'],
          associatedFindings: ['McBurney point tenderness', 'Rovsing sign', 'Fever', 'Anorexia'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'small-intestine',
          structureName: 'Small Bowel (Obstruction)',
          system: 'digestive',
          likelihood: 'less-common',
          mechanism: 'Bowel distension and ischemia cause visceral and later somatic pain',
          characteristicFeatures: ['Periumbilical', 'Colicky', 'Comes in waves'],
          associatedFindings: ['Distension', 'Vomiting', 'Obstipation', 'High-pitched bowel sounds'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'pancreas',
          structureName: 'Pancreas (Pancreatitis)',
          system: 'digestive',
          likelihood: 'less-common',
          mechanism: 'Pancreatic inflammation causes severe epigastric pain radiating to back',
          characteristicFeatures: ['Epigastric', 'Radiates to back', 'Constant severe'],
          aggravatingFactors: ['Lying supine', 'Eating'],
          relievingFactors: ['Leaning forward', 'Fetal position'],
          associatedFindings: ['Elevated lipase', 'Nausea/vomiting', 'Alcohol/gallstone history'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'colon',
          structureName: 'Colon (Diverticulitis)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Diverticular inflammation causes LLQ pain with peritoneal signs',
          characteristicFeatures: ['LLQ', 'Constant', 'Tender to palpation'],
          associatedFindings: ['Fever', 'Leukocytosis', 'Change in bowel habits'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'abdominal-wall',
          structureName: 'Abdominal Wall (Muscle)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Muscle strain or rectus sheath hematoma causes somatic pain',
          characteristicFeatures: ['Localized', 'Worse with movement', 'Carnett sign positive'],
          aggravatingFactors: ['Tensing abdominal muscles', 'Movement'],
          highlightColor: '#1abc9c',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Gallbladder',
          sourceLocation: 'Right upper quadrant',
          referredTo: ['Right scapula', 'Right shoulder'],
          dermatomalLevel: 'T6-T9',
          mechanism: 'Phrenic nerve shares C3-5 roots; visceral afferents converge at T6-9',
          clinicalExample: 'Cholecystitis presenting as right shoulder pain',
        },
        {
          sourceOrgan: 'Appendix',
          sourceLocation: 'RLQ',
          referredTo: ['Periumbilical (early)'],
          dermatomalLevel: 'T10',
          mechanism: 'Visceral afferents from midgut (appendix) converge at T10',
          clinicalExample: 'Appendicitis starting as periumbilical pain before localizing',
        },
        {
          sourceOrgan: 'Pancreas',
          sourceLocation: 'Epigastrium',
          referredTo: ['Back (band-like)', 'Left shoulder'],
          dermatomalLevel: 'T5-T9',
          mechanism: 'Retroperitoneal location causes posterior radiation',
          clinicalExample: 'Pancreatitis with band-like pain wrapping to back',
        },
        {
          sourceOrgan: 'Kidney/Ureter',
          sourceLocation: 'Flank',
          referredTo: ['Groin', 'Testicle/labia', 'Inner thigh'],
          dermatomalLevel: 'T10-L1',
          mechanism: 'Ureteral afferents share pathways with genitofemoral nerve',
          clinicalExample: 'Kidney stone with flank pain radiating to groin',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'visceral',
        afferentPathway: 'Foregut (stomach, liver, pancreas) → T5-T9; Midgut (SI, appendix, ascending colon) → T10; Hindgut (descending colon, rectum) → T11-L1',
        centralProcessing: 'Visceral afferents poorly localized; pain often perceived at dermatome of embryologic origin',
        perceptionDescription: 'Visceral pain is dull, poorly localized, often midline; peritoneal involvement causes sharp, localized somatic pain',
      },
      redFlags: [
        {
          finding: 'Rigid abdomen with rebound tenderness',
          concern: 'Peritonitis (perforated viscus)',
          urgency: 'immediate',
          actionRequired: 'Emergent surgical consultation, imaging',
        },
        {
          finding: 'Severe sudden-onset pain with hypotension',
          concern: 'Ruptured AAA or ectopic pregnancy',
          urgency: 'immediate',
          actionRequired: 'Emergent evaluation, resuscitation',
        },
        {
          finding: 'Vomiting blood or bloody stool',
          concern: 'GI hemorrhage',
          urgency: 'urgent',
          actionRequired: 'IV access, GI consultation, type and screen',
        },
        {
          finding: 'Abdominal pain with fever, jaundice',
          concern: 'Cholangitis (Charcot triad)',
          urgency: 'urgent',
          actionRequired: 'Blood cultures, ERCP consideration',
        },
      ],
      relatedSymptoms: ['nausea', 'vomiting', 'diarrhea', 'constipation', 'bloating', 'fever'],
      differentialConsiderations: ['Gastritis', 'Cholecystitis', 'Appendicitis', 'Pancreatitis', 'Bowel obstruction', 'Diverticulitis', 'AAA', 'Ectopic pregnancy'],
      explanations: {
        level1: 'Belly pain can come from many organs inside your abdomen. Where it hurts and what makes it worse helps doctors figure out the cause.',
        level2: 'Abdominal pain can originate from the stomach, intestines, gallbladder, appendix, or other organs. The location and character help identify the source.',
        level3: 'Abdominal pain is categorized by location (RUQ, epigastric, periumbilical, LLQ) and character (visceral vs somatic). Migration pattern (appendicitis) and radiation (pancreatitis to back) are diagnostic clues.',
        level4: 'Embryologic origin determines referred pain location: foregut (T5-9), midgut (T10), hindgut (T11-L1). Peritoneal irritation causes somatic pain with guarding/rebound. Carnett sign distinguishes abdominal wall from visceral pain.',
        level5: 'Visceral afferents travel with sympathetics (splanchnic nerves) to dorsal horn. Convergence with somatic afferents at same spinal level causes referred pain. Parietal peritoneum is somatically innervated, explaining sharp, localized pain when involved.',
      },
    },
  ],
  // ============ HEAD SYMPTOMS ============
  [
    'headache',
    {
      symptomId: 'headache',
      symptomName: 'Headache',
      aliases: ['head pain', 'cephalalgia', 'migraine', 'tension headache'],
      category: 'neurologic',
      bodyRegion: 'head',
      description: 'Pain in any region of the head, varying from dull ache to severe throbbing',
      anatomicalSources: [
        {
          structureId: 'meninges',
          structureName: 'Meninges',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Meningeal inflammation or irritation stimulates trigeminal and upper cervical afferents',
          characteristicFeatures: ['Severe', 'Generalized', 'Worse with neck flexion'],
          associatedFindings: ['Fever', 'Neck stiffness', 'Photophobia', 'Kernig/Brudzinski signs'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'intracranial-vessels',
          structureName: 'Intracranial Vessels (Migraine)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Trigeminovascular activation causes neurogenic inflammation and vasodilation',
          characteristicFeatures: ['Unilateral', 'Throbbing/pulsating', '4-72 hours'],
          aggravatingFactors: ['Light', 'Sound', 'Physical activity'],
          relievingFactors: ['Dark quiet room', 'Triptans', 'Sleep'],
          associatedFindings: ['Aura', 'Nausea/vomiting', 'Photophobia', 'Phonophobia'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'pericranial-muscles',
          structureName: 'Pericranial Muscles (Tension)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Sustained muscle contraction of scalp/neck muscles causes myofascial pain',
          characteristicFeatures: ['Bilateral', 'Band-like pressure', 'Non-pulsating'],
          aggravatingFactors: ['Stress', 'Poor posture', 'Screen time'],
          relievingFactors: ['Rest', 'Massage', 'NSAIDs'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'trigeminal-nerve',
          structureName: 'Trigeminal Nerve (Cluster/TACs)',
          system: 'nervous',
          likelihood: 'less-common',
          mechanism: 'Trigeminal autonomic reflex activation causes severe unilateral pain',
          characteristicFeatures: ['Excruciating', 'Periorbital', 'Brief (15-180 min)', 'Circadian pattern'],
          associatedFindings: ['Lacrimation', 'Nasal congestion', 'Ptosis', 'Restlessness'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'sinuses',
          structureName: 'Paranasal Sinuses',
          system: 'respiratory',
          likelihood: 'common',
          mechanism: 'Sinus inflammation causes referred pain via trigeminal nerve branches',
          characteristicFeatures: ['Frontal/maxillary pressure', 'Worse with bending forward'],
          associatedFindings: ['Nasal congestion', 'Purulent discharge', 'Fever'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'cervical-spine',
          structureName: 'Cervical Spine (Cervicogenic)',
          system: 'musculoskeletal',
          likelihood: 'less-common',
          mechanism: 'Upper cervical pathology causes referred pain to head via trigeminocervical convergence',
          characteristicFeatures: ['Unilateral', 'Starting from neck', 'Reduced ROM'],
          aggravatingFactors: ['Neck movement', 'Sustained postures'],
          highlightColor: '#27ae60',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Cervical spine',
          sourceLocation: 'C1-C3',
          referredTo: ['Occipital region', 'Temporal region', 'Frontal region'],
          dermatomalLevel: 'C1-C3',
          mechanism: 'Trigeminocervical nucleus receives convergent input from C1-3 and trigeminal',
          clinicalExample: 'Upper cervical arthritis causing frontal headache',
        },
        {
          sourceOrgan: 'Eye',
          sourceLocation: 'Retrobulbar',
          referredTo: ['Frontal', 'Temporal'],
          mechanism: 'Ophthalmic division of trigeminal nerve',
          clinicalExample: 'Acute glaucoma presenting as headache',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Trigeminal nerve (V1, V2, V3) and upper cervical nerves (C1-3) converge in trigeminocervical nucleus',
        centralProcessing: 'Trigeminovascular system modulates by brainstem nuclei; cortical spreading depression in migraine aura',
        perceptionDescription: 'Primary headaches from trigeminal activation; secondary from structural lesion or infection',
      },
      redFlags: [
        {
          finding: 'Thunderclap headache (worst of life, sudden)',
          concern: 'Subarachnoid hemorrhage',
          urgency: 'immediate',
          actionRequired: 'CT head without contrast, LP if CT negative',
        },
        {
          finding: 'Fever, neck stiffness, altered mental status',
          concern: 'Meningitis',
          urgency: 'immediate',
          actionRequired: 'Blood cultures, LP, empiric antibiotics',
        },
        {
          finding: 'New headache >50 years old',
          concern: 'Giant cell arteritis, mass lesion',
          urgency: 'urgent',
          actionRequired: 'ESR/CRP, temporal artery exam, imaging',
        },
        {
          finding: 'Papilledema on fundoscopy',
          concern: 'Increased intracranial pressure',
          urgency: 'urgent',
          actionRequired: 'Urgent neuroimaging',
        },
        {
          finding: 'Headache worse with Valsalva/coughing',
          concern: 'Posterior fossa lesion',
          urgency: 'urgent',
          actionRequired: 'MRI brain',
        },
      ],
      relatedSymptoms: ['photophobia', 'phonophobia', 'nausea', 'visual changes', 'neck stiffness'],
      differentialConsiderations: ['Migraine', 'Tension-type', 'Cluster', 'Meningitis', 'SAH', 'Mass lesion', 'GCA', 'Sinusitis'],
      explanations: {
        level1: 'Headaches can come from blood vessels, muscles, or nerves in your head and neck. Some headaches are warning signs of serious problems.',
        level2: 'Most headaches are primary (migraine, tension) without underlying disease. Secondary headaches from serious causes need to be ruled out with red flag symptoms.',
        level3: 'Primary headaches (migraine, tension-type, cluster) involve trigeminovascular system without structural lesion. Secondary headaches require workup. SNOOP mnemonic identifies red flags.',
        level4: 'Migraine involves cortical spreading depression (aura) and trigeminovascular activation. CGRP release causes neurogenic inflammation. Cluster headaches activate trigeminal-autonomic reflex.',
        level5: 'Trigeminocervical complex convergence (C1-3 with trigeminal) explains cervicogenic headache patterns. Cortical spreading depression propagates at 3mm/min, causing aura. CGRP antagonists (gepants) and monoclonal antibodies target migraine pathophysiology.',
      },
    },
  ],
  // ============ BACK SYMPTOMS ============
  [
    'low-back-pain',
    {
      symptomId: 'low-back-pain',
      symptomName: 'Low Back Pain',
      aliases: ['lumbar pain', 'lumbago', 'backache', 'LBP'],
      category: 'musculoskeletal',
      bodyRegion: 'back',
      description: 'Pain in the lumbar region, from L1 to sacrum, with or without leg symptoms',
      anatomicalSources: [
        {
          structureId: 'lumbar-muscles',
          structureName: 'Paraspinal Muscles (Mechanical)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Muscle strain or spasm from overuse, poor posture, or acute injury',
          characteristicFeatures: ['Diffuse', 'Muscular', 'Activity-related'],
          aggravatingFactors: ['Movement', 'Prolonged sitting/standing', 'Lifting'],
          relievingFactors: ['Rest', 'Position change', 'NSAIDs', 'Heat'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'intervertebral-disc',
          structureName: 'Intervertebral Disc (Herniation)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Disc herniation compresses nerve root causing radicular pain',
          characteristicFeatures: ['Sharp', 'Radiates to leg', 'Dermatomal pattern'],
          aggravatingFactors: ['Sitting', 'Bending forward', 'Valsalva'],
          relievingFactors: ['Standing', 'Lying with knees bent'],
          associatedFindings: ['Positive SLR', 'Dermatomal sensory loss', 'Weakness'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'facet-joints',
          structureName: 'Facet Joints (Arthropathy)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Degenerative changes in facet joints cause localized axial pain',
          characteristicFeatures: ['Localized', 'Worse with extension', 'Morning stiffness'],
          aggravatingFactors: ['Extension', 'Rotation', 'Prolonged standing'],
          relievingFactors: ['Flexion', 'Sitting', 'Rest'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'spinal-canal',
          structureName: 'Spinal Canal (Stenosis)',
          system: 'musculoskeletal',
          likelihood: 'less-common',
          mechanism: 'Central canal narrowing causes neurogenic claudication',
          characteristicFeatures: ['Bilateral leg pain/weakness', 'Worse with walking', 'Pseudoclaudication'],
          aggravatingFactors: ['Walking', 'Standing upright'],
          relievingFactors: ['Sitting', 'Leaning forward', 'Pushing shopping cart'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'sacroiliac-joint',
          structureName: 'Sacroiliac Joint',
          system: 'musculoskeletal',
          likelihood: 'less-common',
          mechanism: 'SI joint dysfunction causes referred pain to buttock and posterior thigh',
          characteristicFeatures: ['Unilateral', 'Below L5', 'Buttock pain'],
          aggravatingFactors: ['Prolonged sitting', 'Climbing stairs', 'Single-leg stance'],
          associatedFindings: ['Positive FABER test', 'SI joint tenderness'],
          highlightColor: '#27ae60',
        },
        {
          structureId: 'kidney',
          structureName: 'Kidney (Pyelonephritis/Stone)',
          system: 'urinary',
          likelihood: 'do-not-miss',
          mechanism: 'Renal capsule distension or ureteral obstruction causes flank/back pain',
          characteristicFeatures: ['Flank/CVA', 'Colicky if stone', 'Constant if infection'],
          associatedFindings: ['CVA tenderness', 'Fever', 'Dysuria', 'Hematuria'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'aorta',
          structureName: 'Aorta (AAA)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Expanding or ruptured AAA causes deep constant abdominal/back pain',
          characteristicFeatures: ['Deep', 'Constant', 'May be pulsatile on exam'],
          associatedFindings: ['Pulsatile abdominal mass', 'Hypotension if ruptured'],
          highlightColor: '#c0392b',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Kidney',
          sourceLocation: 'Retroperitoneal',
          referredTo: ['Flank', 'Groin', 'Testicle'],
          dermatomalLevel: 'T10-L1',
          mechanism: 'Renal afferents share pathways with somatic nerves',
          clinicalExample: 'Kidney stone presenting as back and groin pain',
        },
        {
          sourceOrgan: 'Lumbar disc',
          sourceLocation: 'L4-L5, L5-S1',
          referredTo: ['Buttock', 'Posterior thigh', 'Lateral leg', 'Foot'],
          dermatomalLevel: 'L4, L5, S1',
          mechanism: 'Nerve root compression causes dermatomal radiculopathy',
          clinicalExample: 'L5 radiculopathy with pain to dorsum of foot',
        },
        {
          sourceOrgan: 'Aorta',
          sourceLocation: 'Abdominal',
          referredTo: ['Back', 'Flank'],
          mechanism: 'Retroperitoneal location causes posterior pain referral',
          clinicalExample: 'AAA presenting as deep back pain',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Lumbar dorsal rami innervate paraspinal muscles and facet joints; sinuvertebral nerve innervates disc',
        centralProcessing: 'Convergence of somatic and visceral afferents at lumbar levels; central sensitization in chronic pain',
        perceptionDescription: 'Mechanical pain is activity-related and localized; radicular pain is sharp and dermatomal; visceral causes are constant and associated with systemic symptoms',
      },
      redFlags: [
        {
          finding: 'Saddle anesthesia, urinary retention, bilateral leg weakness',
          concern: 'Cauda equina syndrome',
          urgency: 'immediate',
          actionRequired: 'Emergent MRI, neurosurgical consultation',
        },
        {
          finding: 'Fever, IV drug use, recent infection',
          concern: 'Epidural abscess or discitis',
          urgency: 'immediate',
          actionRequired: 'MRI with contrast, blood cultures',
        },
        {
          finding: 'History of cancer, unexplained weight loss',
          concern: 'Metastatic disease',
          urgency: 'urgent',
          actionRequired: 'MRI, oncology referral',
        },
        {
          finding: 'Age >50 with new back pain, not improving',
          concern: 'Malignancy, compression fracture',
          urgency: 'soon',
          actionRequired: 'Imaging, consider bone density',
        },
      ],
      relatedSymptoms: ['leg pain', 'numbness', 'weakness', 'urinary symptoms', 'stiffness'],
      differentialConsiderations: ['Mechanical', 'Disc herniation', 'Stenosis', 'Spondylolisthesis', 'Malignancy', 'Infection', 'AAA', 'Renal'],
      explanations: {
        level1: 'Back pain usually comes from muscles, joints, or discs in your spine. Sometimes it can be from kidneys or blood vessels.',
        level2: 'Most low back pain is mechanical (muscles, discs, joints) and improves with time. Red flags like leg weakness or bladder problems need urgent evaluation.',
        level3: 'Low back pain differential includes mechanical (90%), disc herniation with radiculopathy, spinal stenosis, and serious causes (cauda equina, infection, malignancy). Red flags guide imaging.',
        level4: 'Radiculopathy follows dermatomal patterns: L4 (anterior thigh, knee reflex), L5 (lateral leg, dorsum foot), S1 (posterior leg, ankle reflex). Central sensitization contributes to chronic pain.',
        level5: 'Sinuvertebral nerve innervates posterior annulus and PLL - source of discogenic pain without radiculopathy. Facet joint pain from medial branch of dorsal ramus, targetable with RFA. Neurogenic claudication from lumbar stenosis improves with flexion (increased canal diameter).',
      },
    },
  ],
  // ============ SHORTNESS OF BREATH ============
  [
    'dyspnea',
    {
      symptomId: 'dyspnea',
      symptomName: 'Dyspnea (Shortness of Breath)',
      aliases: ['shortness of breath', 'breathlessness', 'SOB', 'difficulty breathing', 'air hunger'],
      category: 'respiratory',
      bodyRegion: 'chest',
      description: 'Subjective sensation of difficulty breathing or breathlessness',
      anatomicalSources: [
        {
          structureId: 'lungs',
          structureName: 'Lungs (Pulmonary)',
          system: 'respiratory',
          likelihood: 'common',
          mechanism: 'Airway obstruction, parenchymal disease, or V/Q mismatch impairs gas exchange',
          characteristicFeatures: ['Variable pattern', 'Associated with cough', 'Wheeze/crackles on exam'],
          associatedFindings: ['Decreased breath sounds', 'Hypoxemia', 'Abnormal CXR'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'heart',
          structureName: 'Heart (Cardiac)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'LV dysfunction causes pulmonary congestion; reduced cardiac output limits O2 delivery',
          characteristicFeatures: ['Exertional', 'Orthopnea', 'PND'],
          aggravatingFactors: ['Exertion', 'Lying flat', 'Sodium/fluid intake'],
          relievingFactors: ['Rest', 'Upright position', 'Diuretics'],
          associatedFindings: ['JVD', 'Edema', 'S3 gallop', 'Elevated BNP'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'pulmonary-vessels',
          structureName: 'Pulmonary Vessels (PE)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Pulmonary embolism causes V/Q mismatch and increased dead space',
          characteristicFeatures: ['Sudden onset', 'Pleuritic chest pain', 'Risk factors present'],
          associatedFindings: ['Tachycardia', 'Hypoxia out of proportion', 'Unilateral leg swelling'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'diaphragm',
          structureName: 'Diaphragm',
          system: 'muscular',
          likelihood: 'less-common',
          mechanism: 'Diaphragm weakness or paralysis impairs ventilatory mechanics',
          characteristicFeatures: ['Worse lying flat', 'Paradoxical breathing'],
          associatedFindings: ['Weak cough', 'Neuromuscular disease history'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'upper-airway',
          structureName: 'Upper Airway (Obstruction)',
          system: 'respiratory',
          likelihood: 'less-common',
          mechanism: 'Airway obstruction causes stridor and respiratory distress',
          characteristicFeatures: ['Inspiratory stridor', 'Sudden onset', 'Voice changes'],
          associatedFindings: ['Drooling', 'Tripod positioning', 'Swelling visible'],
          highlightColor: '#e74c3c',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Pulmonary stretch receptors (vagal), chemoreceptors (carotid body, medulla), chest wall mechanoreceptors',
        centralProcessing: 'Dyspnea perception in insular cortex; mismatch between respiratory drive and ventilatory output',
        perceptionDescription: 'Sensation of air hunger, chest tightness, or effort; multiple mechanisms contribute to subjective experience',
      },
      redFlags: [
        {
          finding: 'Acute onset with hypoxia and hemodynamic instability',
          concern: 'Massive PE, tension pneumothorax, anaphylaxis',
          urgency: 'immediate',
          actionRequired: 'Stabilize, rapid assessment, emergent treatment',
        },
        {
          finding: 'Stridor with drooling',
          concern: 'Upper airway obstruction (epiglottitis, angioedema)',
          urgency: 'immediate',
          actionRequired: 'Prepare for emergent airway management',
        },
        {
          finding: 'Acute dyspnea with unilateral chest pain, absent breath sounds',
          concern: 'Pneumothorax',
          urgency: 'immediate',
          actionRequired: 'CXR, needle decompression if tension',
        },
        {
          finding: 'Orthopnea, PND, lower extremity edema',
          concern: 'Decompensated heart failure',
          urgency: 'urgent',
          actionRequired: 'Diuresis, cardiac workup',
        },
      ],
      relatedSymptoms: ['chest pain', 'cough', 'wheezing', 'orthopnea', 'edema', 'palpitations'],
      differentialConsiderations: ['COPD/Asthma', 'Heart failure', 'PE', 'Pneumonia', 'Pneumothorax', 'Anemia', 'Anxiety', 'Neuromuscular'],
      explanations: {
        level1: 'Shortness of breath can come from your lungs, heart, or blood. It\'s a sign your body isn\'t getting enough oxygen.',
        level2: 'Dyspnea has pulmonary (asthma, COPD, pneumonia), cardiac (heart failure), and other causes (anemia, PE). Pattern and associated symptoms guide diagnosis.',
        level3: 'Dyspnea results from increased respiratory drive, impaired mechanics, or neuromuscular weakness. BNP helps distinguish cardiac from pulmonary. Wells score assesses PE probability.',
        level4: 'Dyspnea perception involves mismatch between central motor command and afferent feedback (corollary discharge). Chemoreceptors respond to hypoxia/hypercapnia; pulmonary J-receptors to congestion.',
        level5: 'Multiple parallel afferent pathways (vagal, spinal, cortical) contribute to dyspnea. Functional MRI shows insular cortex activation. Language of dyspnea (air hunger vs. chest tightness vs. effort) may localize mechanism.',
      },
    },
  ],
  // ============ JOINT PAIN ============
  [
    'joint-pain',
    {
      symptomId: 'joint-pain',
      symptomName: 'Joint Pain (Arthralgia)',
      aliases: ['arthralgia', 'joint ache', 'joint swelling'],
      category: 'musculoskeletal',
      bodyRegion: 'generalized',
      description: 'Pain in one or more joints, with or without swelling',
      anatomicalSources: [
        {
          structureId: 'synovium',
          structureName: 'Synovial Membrane (Inflammatory)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Synovial inflammation (synovitis) causes pain, swelling, and stiffness',
          characteristicFeatures: ['Swelling', 'Warmth', 'Morning stiffness >1 hour'],
          associatedFindings: ['Elevated ESR/CRP', 'Joint effusion', 'Multiple joints'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'articular-cartilage',
          structureName: 'Articular Cartilage (Degenerative)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Cartilage degradation exposes subchondral bone, causing mechanical pain',
          characteristicFeatures: ['Use-related pain', 'Crepitus', 'Bony enlargement'],
          aggravatingFactors: ['Activity', 'Weight-bearing'],
          relievingFactors: ['Rest', 'Weight loss'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'joint-space',
          structureName: 'Joint Space (Crystal)',
          system: 'musculoskeletal',
          likelihood: 'less-common',
          mechanism: 'Crystal deposition triggers acute inflammatory response',
          characteristicFeatures: ['Acute onset', 'Severe', 'Monoarticular (often)'],
          associatedFindings: ['Redness', 'Exquisite tenderness', 'Elevated uric acid (gout)'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'periarticular',
          structureName: 'Periarticular Structures',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Bursitis, tendinitis, or enthesitis mimics joint pain',
          characteristicFeatures: ['Localized tenderness', 'Specific movement triggers'],
          highlightColor: '#f39c12',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Hip joint',
          sourceLocation: 'Hip',
          referredTo: ['Groin', 'Anterior thigh', 'Knee'],
          mechanism: 'Obturator nerve shares pathways',
          clinicalExample: 'Hip OA presenting as knee pain',
        },
        {
          sourceOrgan: 'Lumbar spine',
          sourceLocation: 'L3-L4',
          referredTo: ['Knee', 'Anterior thigh'],
          dermatomalLevel: 'L3-L4',
          mechanism: 'Radiculopathy mimics joint pain',
          clinicalExample: 'L4 radiculopathy presenting as anterior knee pain',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Joint capsule and periosteum densely innervated by A-delta and C fibers; synovium less so',
        centralProcessing: 'Inflammatory mediators (prostaglandins, cytokines) sensitize peripheral and central neurons',
        perceptionDescription: 'Inflammatory pain is constant with morning stiffness; mechanical pain is activity-related; crystal pain is sudden and severe',
      },
      redFlags: [
        {
          finding: 'Hot, swollen joint with fever',
          concern: 'Septic arthritis',
          urgency: 'immediate',
          actionRequired: 'Joint aspiration before antibiotics',
        },
        {
          finding: 'Polyarthritis with rash, fever, weight loss',
          concern: 'Systemic inflammatory disease, vasculitis',
          urgency: 'urgent',
          actionRequired: 'Rheumatology referral, workup',
        },
        {
          finding: 'Joint pain with new heart murmur',
          concern: 'Endocarditis, rheumatic fever',
          urgency: 'urgent',
          actionRequired: 'Blood cultures, echocardiogram',
        },
      ],
      relatedSymptoms: ['swelling', 'stiffness', 'redness', 'warmth', 'limited range of motion'],
      differentialConsiderations: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout/Pseudogout', 'Septic arthritis', 'Reactive arthritis', 'Psoriatic arthritis'],
      explanations: {
        level1: 'Joint pain can come from wear and tear, inflammation, infection, or crystals in the joint.',
        level2: 'Joint pain is classified as inflammatory (swelling, morning stiffness) or mechanical (worse with use). Hot swollen joints need urgent evaluation.',
        level3: 'Monoarticular: consider septic, crystal, trauma. Polyarticular: RA, viral, reactive. Inflammatory markers, synovial fluid analysis guide diagnosis.',
        level4: 'Osteoarthritis: IL-1, MMPs degrade cartilage. RA: TNF-α, IL-6 drive synovitis. Gout: MSU crystals activate NLRP3 inflammasome → IL-1β.',
        level5: 'Synovial fluid analysis: WBC <200 (normal), 200-2000 (non-inflammatory), 2000-50000 (inflammatory), >50000 (septic). Crystals: MSU (negative birefringent, needle), CPPD (positive birefringent, rhomboid).',
      },
    },
  ],
]);

/**
 * Symptom quality to anatomical source mappings
 */
export const SYMPTOM_QUALITY_MAPPINGS: SymptomQualityMapping[] = [
  {
    quality: 'sharp',
    suggestedSources: ['Pleura', 'Pericardium', 'Nerve', 'Somatic structures'],
    typicalMechanism: 'Somatic or neuropathic pain with well-localized, precise character',
  },
  {
    quality: 'dull',
    suggestedSources: ['Visceral organs', 'Muscle', 'Deep structures'],
    typicalMechanism: 'Visceral or deep somatic pain, poorly localized',
  },
  {
    quality: 'burning',
    suggestedSources: ['Nerve', 'Mucosal surface (GERD)', 'Skin'],
    typicalMechanism: 'Neuropathic or chemical irritation of sensory fibers',
  },
  {
    quality: 'throbbing',
    suggestedSources: ['Blood vessels', 'Inflamed tissue'],
    typicalMechanism: 'Vascular pulsation or inflammatory hyperemia',
  },
  {
    quality: 'colicky',
    suggestedSources: ['Hollow viscus (bowel, ureter, bile duct)'],
    typicalMechanism: 'Smooth muscle contraction against obstruction, comes in waves',
  },
  {
    quality: 'pressure',
    suggestedSources: ['Heart (ischemia)', 'Sinus', 'Tension headache'],
    typicalMechanism: 'Visceral ischemia or sustained muscle contraction',
  },
  {
    quality: 'tearing',
    suggestedSources: ['Aorta (dissection)', 'Large vessel'],
    typicalMechanism: 'Adventitial tearing of large vessel',
  },
  {
    quality: 'cramping',
    suggestedSources: ['Muscle', 'Bowel', 'Uterus'],
    typicalMechanism: 'Sustained or intermittent muscle contraction',
  },
];

// ============ API Functions ============

/**
 * Get symptom-anatomy mapping by ID
 */
export function getSymptomAnatomyMapping(symptomId: string): SymptomAnatomyMapping | undefined {
  return SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
}

/**
 * Get all symptom-anatomy mappings
 */
export function getAllSymptomAnatomyMappings(): SymptomAnatomyMapping[] {
  return Array.from(SYMPTOM_ANATOMY_MAPPINGS.values());
}

/**
 * Search symptoms by keyword
 */
export function searchSymptoms(query: string): SymptomSearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SymptomSearchResult[] = [];

  SYMPTOM_ANATOMY_MAPPINGS.forEach((mapping) => {
    // Exact match on name
    if (mapping.symptomName.toLowerCase() === lowerQuery) {
      results.push({
        symptomId: mapping.symptomId,
        symptomName: mapping.symptomName,
        matchType: 'exact',
        relevanceScore: 1.0,
      });
      return;
    }

    // Alias match
    const aliasMatch = mapping.aliases.find((a) => a.toLowerCase() === lowerQuery);
    if (aliasMatch) {
      results.push({
        symptomId: mapping.symptomId,
        symptomName: mapping.symptomName,
        matchType: 'alias',
        relevanceScore: 0.9,
      });
      return;
    }

    // Partial match
    if (
      mapping.symptomName.toLowerCase().includes(lowerQuery) ||
      mapping.aliases.some((a) => a.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        symptomId: mapping.symptomId,
        symptomName: mapping.symptomName,
        matchType: 'partial',
        relevanceScore: 0.7,
      });
    }
  });

  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Get symptoms by category
 */
export function getSymptomsByCategory(category: string): SymptomAnatomyMapping[] {
  return Array.from(SYMPTOM_ANATOMY_MAPPINGS.values()).filter(
    (m) => m.category === category
  );
}

/**
 * Get symptoms by body region
 */
export function getSymptomsByBodyRegion(region: string): SymptomAnatomyMapping[] {
  return Array.from(SYMPTOM_ANATOMY_MAPPINGS.values()).filter(
    (m) => m.bodyRegion === region
  );
}

/**
 * Get anatomical highlights for a symptom
 */
export function getSymptomAnatomyHighlights(symptomId: string): SymptomAnatomyHighlight[] {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  if (!mapping) return [];

  const highlights: SymptomAnatomyHighlight[] = [];

  // Add primary anatomical sources
  mapping.anatomicalSources.forEach((source, index) => {
    highlights.push({
      structureId: source.structureId,
      structureName: source.structureName,
      highlightColor: source.highlightColor,
      likelihood: source.likelihood,
      isPrimarySource: index === 0,
      isReferredPainSource: false,
    });
  });

  // Add referred pain sources
  mapping.referredPainPatterns.forEach((pattern) => {
    // Check if not already added
    if (!highlights.find((h) => h.structureName === pattern.sourceOrgan)) {
      highlights.push({
        structureId: pattern.sourceOrgan.toLowerCase().replace(/\s/g, '-'),
        structureName: pattern.sourceOrgan,
        highlightColor: '#ff9800',
        likelihood: 'less-common',
        isPrimarySource: false,
        isReferredPainSource: true,
      });
    }
  });

  return highlights;
}

/**
 * Get exploration context for a symptom
 */
export function getSymptomExplorationContext(symptomId: string): SymptomExplorationContext | undefined {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  if (!mapping) return undefined;

  return {
    symptom: mapping,
    highlights: getSymptomAnatomyHighlights(symptomId),
    viewSettings: {
      cameraPosition: getDefaultCameraForRegion(mapping.bodyRegion),
      visibleLayers: ['skeleton', 'organs', 'muscles'],
      focusRegion: mapping.bodyRegion,
      showReferredPainOverlay: mapping.referredPainPatterns.length > 0,
      showDermatomalMap: mapping.referredPainPatterns.some((p) => p.dermatomalLevel),
    },
  };
}

/**
 * Get default camera position for body region
 */
function getDefaultCameraForRegion(region: string): string {
  const cameraMap: Record<string, string> = {
    head: 'anterior',
    face: 'anterior',
    neck: 'anterior',
    chest: 'anterior',
    abdomen: 'anterior',
    back: 'posterior',
    'upper-extremity': 'anterior',
    'lower-extremity': 'anterior',
    pelvis: 'anterior',
    generalized: 'anterior',
  };
  return cameraMap[region] || 'anterior';
}

/**
 * Get explanation at specified complexity level
 */
export function getSymptomExplanation(
  symptomId: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  return mapping?.explanations[`level${level}`];
}

/**
 * Get red flags for a symptom
 */
export function getSymptomRedFlags(symptomId: string): SymptomAnatomyMapping['redFlags'] {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  return mapping?.redFlags ?? [];
}

/**
 * Get referred pain patterns for a symptom
 */
export function getReferredPainPatterns(symptomId: string): SymptomAnatomyMapping['referredPainPatterns'] {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  return mapping?.referredPainPatterns ?? [];
}

/**
 * Get anatomical sources by likelihood
 */
export function getSourcesByLikelihood(
  symptomId: string,
  likelihood: 'common' | 'less-common' | 'rare' | 'do-not-miss'
): SymptomAnatomyMapping['anatomicalSources'] {
  const mapping = SYMPTOM_ANATOMY_MAPPINGS.get(symptomId);
  if (!mapping) return [];
  return mapping.anatomicalSources.filter((s) => s.likelihood === likelihood);
}

/**
 * Get "do not miss" diagnoses for a symptom
 */
export function getDoNotMissDiagnoses(symptomId: string): SymptomAnatomyMapping['anatomicalSources'] {
  return getSourcesByLikelihood(symptomId, 'do-not-miss');
}

/**
 * Get quality-based suggestions
 */
export function getSuggestionsForQuality(quality: SymptomQuality): SymptomQualityMapping | undefined {
  return SYMPTOM_QUALITY_MAPPINGS.find((m) => m.quality === quality);
}

/**
 * Get all symptom categories
 */
export function getSymptomCategories(): string[] {
  const categories = new Set<string>();
  SYMPTOM_ANATOMY_MAPPINGS.forEach((m) => categories.add(m.category));
  return Array.from(categories);
}

/**
 * Get all body regions
 */
export function getBodyRegions(): string[] {
  const regions = new Set<string>();
  SYMPTOM_ANATOMY_MAPPINGS.forEach((m) => regions.add(m.bodyRegion));
  return Array.from(regions);
}
