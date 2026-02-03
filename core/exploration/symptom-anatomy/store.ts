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
  // ============ FATIGUE ============
  [
    'fatigue',
    {
      symptomId: 'fatigue',
      symptomName: 'Fatigue',
      aliases: ['tiredness', 'exhaustion', 'lethargy', 'lack of energy', 'weakness', 'malaise'],
      category: 'constitutional',
      bodyRegion: 'generalized',
      description: 'Persistent feeling of tiredness, lack of energy, or exhaustion not relieved by rest',
      anatomicalSources: [
        {
          structureId: 'thyroid',
          structureName: 'Thyroid Gland (Hypothyroidism)',
          system: 'endocrine',
          likelihood: 'common',
          mechanism: 'Low thyroid hormone reduces basal metabolic rate and cellular energy production',
          characteristicFeatures: ['Gradual onset', 'Cold intolerance', 'Weight gain'],
          associatedFindings: ['Bradycardia', 'Dry skin', 'Constipation', 'Elevated TSH'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'bone-marrow',
          structureName: 'Bone Marrow (Anemia)',
          system: 'lymphatic',
          likelihood: 'common',
          mechanism: 'Reduced oxygen-carrying capacity from low hemoglobin causes tissue hypoxia',
          characteristicFeatures: ['Exertional fatigue', 'Pallor', 'Dyspnea on exertion'],
          associatedFindings: ['Low hemoglobin', 'Pallor', 'Tachycardia', 'Koilonychia (iron deficiency)'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'adrenal-glands',
          structureName: 'Adrenal Glands (Insufficiency)',
          system: 'endocrine',
          likelihood: 'do-not-miss',
          mechanism: 'Cortisol deficiency impairs stress response and energy metabolism',
          characteristicFeatures: ['Profound fatigue', 'Worse with stress', 'Hyperpigmentation'],
          associatedFindings: ['Hypotension', 'Hyponatremia', 'Hyperkalemia', 'Weight loss'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'heart',
          structureName: 'Heart (Heart Failure)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Reduced cardiac output limits oxygen delivery to tissues',
          characteristicFeatures: ['Exertional', 'Progressive', 'Associated dyspnea'],
          aggravatingFactors: ['Exertion', 'Lying flat'],
          associatedFindings: ['Edema', 'JVD', 'Dyspnea', 'Elevated BNP'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'liver',
          structureName: 'Liver (Hepatic Disease)',
          system: 'digestive',
          likelihood: 'less-common',
          mechanism: 'Impaired metabolic function and toxin clearance causes systemic fatigue',
          characteristicFeatures: ['Associated GI symptoms', 'Pruritus', 'Easy bruising'],
          associatedFindings: ['Elevated LFTs', 'Jaundice', 'Ascites', 'Coagulopathy'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'pancreas',
          structureName: 'Pancreas (Diabetes)',
          system: 'endocrine',
          likelihood: 'common',
          mechanism: 'Glucose dysregulation impairs cellular energy utilization',
          characteristicFeatures: ['Polydipsia', 'Polyuria', 'Weight changes'],
          associatedFindings: ['Elevated glucose', 'HbA1c elevated', 'Glycosuria'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'brain',
          structureName: 'Brain (Depression/Sleep Disorders)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Neurotransmitter imbalance or sleep fragmentation impairs restorative processes',
          characteristicFeatures: ['Morning fatigue', 'Non-restorative sleep', 'Mood changes'],
          associatedFindings: ['Depressed mood', 'Anhedonia', 'Sleep disturbance', 'Cognitive changes'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'skeletal-muscle',
          structureName: 'Skeletal Muscle (Myopathy)',
          system: 'musculoskeletal',
          likelihood: 'less-common',
          mechanism: 'Muscle fiber dysfunction causes weakness and exercise intolerance',
          characteristicFeatures: ['Proximal weakness', 'Difficulty climbing stairs', 'Myalgia'],
          associatedFindings: ['Elevated CK', 'Muscle tenderness', 'Gower sign'],
          highlightColor: '#27ae60',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Multiple afferent systems signal energy deficit: metabolic sensors, immune cytokines, hypothalamic circuits',
        centralProcessing: 'Fatigue perception involves prefrontal cortex, limbic system, and hypothalamus integration',
        perceptionDescription: 'Fatigue is a complex symptom integrating physical, cognitive, and emotional components',
      },
      redFlags: [
        {
          finding: 'Fatigue with unexplained weight loss, night sweats',
          concern: 'Malignancy, lymphoma, TB',
          urgency: 'urgent',
          actionRequired: 'Complete workup including CBC, CMP, imaging',
        },
        {
          finding: 'Profound fatigue with hypotension, hyperpigmentation',
          concern: 'Adrenal insufficiency',
          urgency: 'urgent',
          actionRequired: 'Morning cortisol, ACTH stimulation test',
        },
        {
          finding: 'Fatigue with fever, lymphadenopathy',
          concern: 'Infection (EBV, HIV, TB), malignancy',
          urgency: 'urgent',
          actionRequired: 'CBC with diff, mono spot, HIV testing',
        },
        {
          finding: 'New fatigue in patient with cancer history',
          concern: 'Recurrence, paraneoplastic syndrome',
          urgency: 'urgent',
          actionRequired: 'Oncology evaluation, imaging',
        },
      ],
      relatedSymptoms: ['weakness', 'dyspnea', 'weight changes', 'sleep disturbance', 'depression'],
      differentialConsiderations: ['Hypothyroidism', 'Anemia', 'Depression', 'Sleep apnea', 'Heart failure', 'Diabetes', 'Malignancy', 'Chronic fatigue syndrome'],
      explanations: {
        level1: 'Feeling tired all the time can come from your thyroid, blood, heart, or even depression. It\'s important to find the cause.',
        level2: 'Fatigue has many causes including thyroid problems, anemia, diabetes, depression, and sleep disorders. Blood tests help identify the cause.',
        level3: 'Fatigue workup includes TSH, CBC, CMP, glucose. Consider depression screening (PHQ-9), sleep study if sleep apnea suspected. Red flags warrant expanded evaluation.',
        level4: 'Central fatigue involves serotonin, dopamine pathways. Peripheral fatigue from metabolic (ATP depletion) or neuromuscular dysfunction. Cytokines (IL-1, IL-6, TNF) induce sickness behavior including fatigue.',
        level5: 'HPA axis dysregulation contributes to chronic fatigue. Mitochondrial dysfunction implicated in CFS/ME. Inflammatory cytokines signal via vagal afferents and circumventricular organs to alter central fatigue perception.',
      },
    },
  ],
  // ============ DIZZINESS ============
  [
    'dizziness',
    {
      symptomId: 'dizziness',
      symptomName: 'Dizziness',
      aliases: ['lightheadedness', 'vertigo', 'unsteadiness', 'presyncope', 'disequilibrium'],
      category: 'neurologic',
      bodyRegion: 'head',
      description: 'Sensation of altered spatial orientation, including vertigo, lightheadedness, or imbalance',
      anatomicalSources: [
        {
          structureId: 'inner-ear',
          structureName: 'Inner Ear (Vestibular - BPPV)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Otolith displacement in semicircular canals causes false rotational sensation',
          characteristicFeatures: ['Brief episodes (<1 min)', 'Position-triggered', 'True spinning vertigo'],
          aggravatingFactors: ['Head position changes', 'Rolling in bed', 'Looking up'],
          relievingFactors: ['Staying still', 'Epley maneuver'],
          associatedFindings: ['Nystagmus with Dix-Hallpike', 'No hearing loss'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'vestibular-nerve',
          structureName: 'Vestibular Nerve (Vestibular Neuritis)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Viral inflammation of vestibular nerve causes acute vertigo',
          characteristicFeatures: ['Acute onset', 'Constant vertigo', 'Days to weeks duration'],
          associatedFindings: ['Horizontal nystagmus', 'Positive head impulse test', 'No hearing loss'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'cochlea',
          structureName: 'Cochlea (Meniere\'s Disease)',
          system: 'nervous',
          likelihood: 'less-common',
          mechanism: 'Endolymphatic hydrops causes episodic vertigo with hearing/tinnitus',
          characteristicFeatures: ['Episodic vertigo (20 min-hours)', 'Fluctuating hearing', 'Tinnitus', 'Aural fullness'],
          associatedFindings: ['Low-frequency hearing loss', 'Unilateral symptoms'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'heart',
          structureName: 'Heart (Cardiac Arrhythmia)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Arrhythmia causes transient cerebral hypoperfusion',
          characteristicFeatures: ['Sudden onset', 'Presyncope', 'Palpitations'],
          associatedFindings: ['Irregular pulse', 'Abnormal ECG', 'May have syncope'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'brainstem',
          structureName: 'Brainstem (Central Vertigo)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Brainstem or cerebellar lesion disrupts central vestibular processing',
          characteristicFeatures: ['Severe imbalance', 'Vertical or direction-changing nystagmus', 'Other neuro signs'],
          associatedFindings: ['Dysarthria', 'Diplopia', 'Ataxia', 'Weakness', 'Cranial nerve deficits'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'carotid-arteries',
          structureName: 'Carotid/Vertebral Arteries (Vascular)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Vertebrobasilar insufficiency or carotid stenosis causes transient ischemia',
          characteristicFeatures: ['Brief episodes', 'Associated with head turning', 'Risk factors present'],
          associatedFindings: ['Carotid bruit', 'TIA symptoms', 'Vascular risk factors'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'autonomic-nervous-system',
          structureName: 'Autonomic System (Orthostatic)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Impaired baroreceptor response causes positional hypotension',
          characteristicFeatures: ['On standing', 'Lightheadedness', 'Improves with sitting/lying'],
          aggravatingFactors: ['Standing quickly', 'Dehydration', 'Medications'],
          associatedFindings: ['Orthostatic vital signs positive', 'Tachycardia'],
          highlightColor: '#f39c12',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Vestibular apparatus (semicircular canals, otoliths) → vestibular nerve → vestibular nuclei → thalamus → cortex',
        centralProcessing: 'Integration with visual and proprioceptive inputs in vestibular nuclei and cerebellum',
        perceptionDescription: 'Vertigo is spinning sensation; presyncope is "about to faint"; disequilibrium is unsteadiness',
      },
      redFlags: [
        {
          finding: 'Acute vertigo with headache, neck pain, neurologic deficits',
          concern: 'Posterior circulation stroke, cerebellar hemorrhage',
          urgency: 'immediate',
          actionRequired: 'Emergent CT/MRI, stroke protocol',
        },
        {
          finding: 'Vertigo with HINTS exam suggesting central cause',
          concern: 'Brainstem stroke',
          urgency: 'immediate',
          actionRequired: 'Emergent MRI, neurology consultation',
        },
        {
          finding: 'Dizziness with syncope or near-syncope',
          concern: 'Cardiac arrhythmia, structural heart disease',
          urgency: 'urgent',
          actionRequired: 'ECG, cardiac monitoring, echocardiogram',
        },
        {
          finding: 'New-onset vertigo with unilateral hearing loss',
          concern: 'Acoustic neuroma, labyrinthitis',
          urgency: 'urgent',
          actionRequired: 'Audiometry, MRI IAC',
        },
      ],
      relatedSymptoms: ['nausea', 'vomiting', 'hearing loss', 'tinnitus', 'syncope', 'headache'],
      differentialConsiderations: ['BPPV', 'Vestibular neuritis', 'Meniere\'s', 'Orthostatic hypotension', 'Cardiac arrhythmia', 'Posterior stroke', 'Anxiety'],
      explanations: {
        level1: 'Dizziness can come from your inner ear balance system, heart, or brain. Spinning dizziness is different from feeling faint.',
        level2: 'Vertigo (spinning) usually comes from the inner ear. Lightheadedness may be from blood pressure or heart. Central dizziness from the brain is more serious.',
        level3: 'HINTS exam distinguishes peripheral (BPPV, vestibular neuritis) from central vertigo. Dix-Hallpike for BPPV. Orthostatic vitals for presyncope. Cardiac evaluation if arrhythmia suspected.',
        level4: 'BPPV: posterior canal most common, treated with Epley. Vestibular neuritis: VOR deficit on head impulse test. Central lesions: HINTS (Head Impulse, Nystagmus, Test of Skew) predicts stroke.',
        level5: 'VOR gain reduced in peripheral lesions (positive head impulse). Central lesions show direction-changing nystagmus, skew deviation, normal VOR. MRI DWI detects acute posterior circulation stroke missed by CT.',
      },
    },
  ],
  // ============ PALPITATIONS ============
  [
    'palpitations',
    {
      symptomId: 'palpitations',
      symptomName: 'Palpitations',
      aliases: ['heart racing', 'heart pounding', 'skipped beats', 'fluttering', 'irregular heartbeat'],
      category: 'cardiovascular',
      bodyRegion: 'chest',
      description: 'Awareness of heartbeat, whether fast, slow, irregular, or forceful',
      anatomicalSources: [
        {
          structureId: 'heart-atria',
          structureName: 'Atria (Atrial Arrhythmias)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Abnormal atrial electrical activity causes irregular or rapid rhythm',
          characteristicFeatures: ['Irregular rhythm (AFib)', 'Sudden onset/offset (SVT)', 'Rapid rate'],
          associatedFindings: ['Irregularly irregular pulse (AFib)', 'Abnormal ECG'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'heart-ventricles',
          structureName: 'Ventricles (Ventricular Ectopy)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Premature ventricular contractions cause sensation of skipped or extra beats',
          characteristicFeatures: ['Skipped beats', 'Forceful beats', 'Pause then thump'],
          associatedFindings: ['PVCs on ECG', 'Usually benign if structurally normal heart'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'sa-node',
          structureName: 'Sinus Node (Sinus Tachycardia)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Appropriate or inappropriate sinus tachycardia from various triggers',
          characteristicFeatures: ['Gradual onset/offset', 'Regular rhythm', 'Often with exertion or stress'],
          aggravatingFactors: ['Exercise', 'Caffeine', 'Stress', 'Fever', 'Anemia'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'thyroid',
          structureName: 'Thyroid (Hyperthyroidism)',
          system: 'endocrine',
          likelihood: 'common',
          mechanism: 'Excess thyroid hormone increases cardiac sensitivity to catecholamines',
          characteristicFeatures: ['Constant awareness', 'Heat intolerance', 'Weight loss'],
          associatedFindings: ['Tremor', 'Weight loss', 'Goiter', 'Low TSH'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'adrenal-medulla',
          structureName: 'Adrenal Medulla (Pheochromocytoma)',
          system: 'endocrine',
          likelihood: 'do-not-miss',
          mechanism: 'Catecholamine excess causes episodic hypertension and tachycardia',
          characteristicFeatures: ['Episodic', 'Triad: headache, sweating, palpitations', 'Hypertensive episodes'],
          associatedFindings: ['Paroxysmal hypertension', 'Elevated metanephrines'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'cardiac-conduction',
          structureName: 'Conduction System (Accessory Pathway)',
          system: 'cardiovascular',
          likelihood: 'less-common',
          mechanism: 'Accessory pathway enables re-entry tachycardia (WPW, AVNRT)',
          characteristicFeatures: ['Sudden onset/offset', 'Very fast rate', 'Young patient'],
          associatedFindings: ['Delta wave on ECG (WPW)', 'Short PR interval'],
          highlightColor: '#e74c3c',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'visceral',
        afferentPathway: 'Cardiac mechanoreceptors and chemoreceptors travel via vagal and sympathetic afferents to brainstem and cortex',
        centralProcessing: 'Heightened interoceptive awareness in insular cortex; anxiety amplifies perception',
        perceptionDescription: 'Palpitations represent conscious awareness of cardiac activity that is normally subconscious',
      },
      redFlags: [
        {
          finding: 'Palpitations with syncope or near-syncope',
          concern: 'Ventricular tachycardia, complete heart block',
          urgency: 'immediate',
          actionRequired: 'ECG, cardiac monitoring, cardiology consultation',
        },
        {
          finding: 'Palpitations with chest pain and dyspnea',
          concern: 'Myocardial ischemia, pulmonary embolism',
          urgency: 'urgent',
          actionRequired: 'ECG, troponin, evaluate for ACS/PE',
        },
        {
          finding: 'Family history of sudden cardiac death',
          concern: 'Inherited arrhythmia syndrome (LQTS, HCM, ARVC)',
          urgency: 'urgent',
          actionRequired: 'ECG, echo, genetic counseling',
        },
        {
          finding: 'Palpitations in patient with structural heart disease',
          concern: 'Life-threatening arrhythmia',
          urgency: 'urgent',
          actionRequired: 'Holter monitor, electrophysiology evaluation',
        },
      ],
      relatedSymptoms: ['chest pain', 'dyspnea', 'syncope', 'anxiety', 'sweating'],
      differentialConsiderations: ['PVCs', 'PACs', 'Atrial fibrillation', 'SVT', 'Sinus tachycardia', 'Hyperthyroidism', 'Anxiety', 'Pheochromocytoma'],
      explanations: {
        level1: 'Palpitations are when you notice your heart beating. Usually harmless, but sometimes a sign of heart rhythm problems.',
        level2: 'Palpitations can be from extra beats (PVCs), fast rhythms (SVT, AFib), or just heightened awareness. Most are benign but some need evaluation.',
        level3: 'Workup: ECG, TSH, electrolytes, CBC. Holter/event monitor for intermittent symptoms. Echo if structural disease suspected. Red flags: syncope, family history SCD.',
        level4: 'PVCs are common and usually benign if <10% burden and normal echo. AFib increases stroke risk; CHA2DS2-VASc guides anticoagulation. SVT: AVNRT > AVRT > AT.',
        level5: 'Interoception involves insular cortex processing of cardiac afferent signals. Anxiety disorders show heightened cardiac interoception. Vagal maneuvers terminate AVNRT by blocking AV node.',
      },
    },
  ],
  // ============ EDEMA/SWELLING ============
  [
    'edema',
    {
      symptomId: 'edema',
      symptomName: 'Edema (Swelling)',
      aliases: ['swelling', 'fluid retention', 'puffy', 'swollen legs', 'ankle swelling', 'peripheral edema'],
      category: 'cardiovascular',
      bodyRegion: 'lower-extremity',
      description: 'Abnormal accumulation of fluid in tissues, commonly in dependent areas',
      anatomicalSources: [
        {
          structureId: 'heart',
          structureName: 'Heart (Right Heart Failure)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Elevated right atrial pressure causes venous congestion and fluid transudation',
          characteristicFeatures: ['Bilateral', 'Dependent', 'Pitting', 'Worse at end of day'],
          aggravatingFactors: ['Sodium intake', 'Standing', 'Non-compliance with medications'],
          relievingFactors: ['Leg elevation', 'Diuretics'],
          associatedFindings: ['JVD', 'Hepatomegaly', 'Dyspnea', 'Elevated BNP'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'kidneys',
          structureName: 'Kidneys (Nephrotic/Nephritic)',
          system: 'urinary',
          likelihood: 'common',
          mechanism: 'Protein loss (nephrotic) or sodium retention (nephritic) causes edema',
          characteristicFeatures: ['Periorbital (especially morning)', 'Generalized', 'Rapid onset'],
          associatedFindings: ['Proteinuria', 'Hypoalbuminemia', 'Hyperlipidemia (nephrotic)', 'Hematuria (nephritic)'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'liver',
          structureName: 'Liver (Cirrhosis)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Portal hypertension and hypoalbuminemia cause ascites and peripheral edema',
          characteristicFeatures: ['Ascites prominent', 'Lower extremity edema', 'History of liver disease'],
          associatedFindings: ['Ascites', 'Jaundice', 'Spider angiomata', 'Low albumin'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'lymphatic-vessels',
          structureName: 'Lymphatic System (Lymphedema)',
          system: 'lymphatic',
          likelihood: 'less-common',
          mechanism: 'Lymphatic obstruction or damage impairs fluid drainage',
          characteristicFeatures: ['Non-pitting', 'Unilateral (often)', 'Progressive'],
          associatedFindings: ['Stemmer sign positive', 'Skin thickening', 'History of surgery/radiation'],
          highlightColor: '#27ae60',
        },
        {
          structureId: 'deep-veins',
          structureName: 'Deep Veins (DVT)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Venous obstruction causes unilateral leg swelling',
          characteristicFeatures: ['Unilateral', 'Acute onset', 'Calf pain', 'Warmth'],
          associatedFindings: ['Calf tenderness', 'Warmth', 'Risk factors (immobility, cancer, surgery)'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'venous-system',
          structureName: 'Venous System (CVI)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Venous valve incompetence causes chronic venous hypertension',
          characteristicFeatures: ['Bilateral', 'Worse with standing', 'Varicose veins'],
          associatedFindings: ['Varicose veins', 'Skin changes (hemosiderin)', 'Venous stasis ulcers'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'soft-tissue',
          structureName: 'Soft Tissue (Drug-Induced)',
          system: 'generalized',
          likelihood: 'common',
          mechanism: 'Medications cause fluid retention (CCBs, NSAIDs, steroids)',
          characteristicFeatures: ['Bilateral', 'Temporal association with medication'],
          aggravatingFactors: ['Calcium channel blockers', 'NSAIDs', 'Steroids', 'Pioglitazone'],
          highlightColor: '#1abc9c',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Tissue stretch receptors signal fluid accumulation; systemic fluid status monitored by cardiopulmonary receptors',
        centralProcessing: 'RAAS activation, ANP release, and ADH regulate sodium/water balance in response to volume status',
        perceptionDescription: 'Edema perception varies; may be noticed as tight shoes/rings, weight gain, or visible swelling',
      },
      redFlags: [
        {
          finding: 'Unilateral leg swelling with pain, warmth',
          concern: 'Deep vein thrombosis',
          urgency: 'urgent',
          actionRequired: 'Compression ultrasound, Wells score, D-dimer',
        },
        {
          finding: 'Rapid-onset generalized edema with dyspnea',
          concern: 'Acute heart failure, nephrotic syndrome',
          urgency: 'urgent',
          actionRequired: 'BNP, urinalysis, renal function, echo',
        },
        {
          finding: 'Edema with anasarca, low albumin',
          concern: 'Nephrotic syndrome, cirrhosis, protein-losing enteropathy',
          urgency: 'urgent',
          actionRequired: 'Albumin, 24-hr urine protein, liver workup',
        },
        {
          finding: 'Unilateral arm swelling with history of breast cancer',
          concern: 'Lymphedema, tumor recurrence',
          urgency: 'soon',
          actionRequired: 'Imaging, oncology evaluation',
        },
      ],
      relatedSymptoms: ['dyspnea', 'weight gain', 'decreased urine output', 'abdominal distension'],
      differentialConsiderations: ['Heart failure', 'Nephrotic syndrome', 'Cirrhosis', 'DVT', 'CVI', 'Lymphedema', 'Drug-induced', 'Hypoalbuminemia'],
      explanations: {
        level1: 'Swelling happens when fluid leaks from blood vessels into tissues. It can be from heart, kidney, liver problems, or blocked veins.',
        level2: 'Edema causes: cardiac (heart failure), renal (nephrotic syndrome), hepatic (cirrhosis), venous (DVT, CVI), lymphatic. Distribution and pitting help identify cause.',
        level3: 'Bilateral pitting edema suggests systemic cause (CHF, renal, hepatic). Unilateral suggests local (DVT, lymphedema). Labs: BNP, albumin, creatinine, LFTs, urinalysis.',
        level4: 'Starling forces: edema from increased capillary pressure (CHF), decreased oncotic pressure (hypoalbuminemia), or increased permeability (inflammation). RAAS activation worsens sodium retention.',
        level5: 'Capillary Kf (filtration coefficient) × [(Pc - Pi) - σ(πc - πi)] = net filtration. CHF: elevated Pc. Nephrotic: reduced πc. Lymphedema: impaired lymphatic drainage exceeds filtration.',
      },
    },
  ],
  // ============ NAUSEA/VOMITING ============
  [
    'nausea-vomiting',
    {
      symptomId: 'nausea-vomiting',
      symptomName: 'Nausea and Vomiting',
      aliases: ['nausea', 'vomiting', 'queasy', 'sick to stomach', 'throwing up', 'emesis'],
      category: 'gastrointestinal',
      bodyRegion: 'abdomen',
      description: 'Unpleasant sensation of impending vomiting (nausea) and/or forceful expulsion of gastric contents (vomiting)',
      anatomicalSources: [
        {
          structureId: 'stomach',
          structureName: 'Stomach (Gastritis/Gastroparesis)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Gastric mucosal irritation or delayed emptying triggers vagal afferents',
          characteristicFeatures: ['Postprandial', 'Early satiety', 'Epigastric discomfort'],
          aggravatingFactors: ['Eating', 'NSAIDs', 'Alcohol'],
          associatedFindings: ['Epigastric tenderness', 'Bloating'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'small-intestine',
          structureName: 'Small Bowel (Obstruction)',
          system: 'digestive',
          likelihood: 'do-not-miss',
          mechanism: 'Bowel distension activates vagal afferents causing reflex vomiting',
          characteristicFeatures: ['Bilious vomiting', 'Colicky pain', 'Distension'],
          associatedFindings: ['Abdominal distension', 'High-pitched bowel sounds', 'Obstipation'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'inner-ear',
          structureName: 'Inner Ear (Vestibular)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Vestibular dysfunction activates vomiting center via vestibular nuclei',
          characteristicFeatures: ['Associated vertigo', 'Motion-related', 'Positional'],
          associatedFindings: ['Vertigo', 'Nystagmus', 'Tinnitus (Meniere\'s)'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'brain',
          structureName: 'Brain (Increased ICP)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Elevated intracranial pressure stimulates vomiting center in medulla',
          characteristicFeatures: ['Projectile', 'Morning predominance', 'With headache'],
          associatedFindings: ['Headache', 'Papilledema', 'Altered consciousness', 'Focal neuro signs'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'liver-gallbladder',
          structureName: 'Liver/Gallbladder (Hepatobiliary)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Biliary distension or hepatic dysfunction causes visceral nausea',
          characteristicFeatures: ['RUQ pain', 'After fatty meals', 'Jaundice'],
          associatedFindings: ['Murphy sign', 'Elevated LFTs', 'Jaundice'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'chemoreceptor-trigger-zone',
          structureName: 'Chemoreceptor Trigger Zone (Metabolic/Drug)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'CTZ in area postrema detects toxins, drugs, metabolic derangements',
          characteristicFeatures: ['Medication-related', 'Uremia', 'DKA'],
          associatedFindings: ['Recent medication start', 'Renal failure', 'Metabolic acidosis'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'heart',
          structureName: 'Heart (Inferior MI)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Vagal stimulation from inferior MI causes nausea/vomiting',
          characteristicFeatures: ['With chest discomfort', 'Diaphoresis', 'Risk factors'],
          associatedFindings: ['Chest pain', 'ECG changes', 'Elevated troponin'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'pregnancy-uterus',
          structureName: 'Uterus (Pregnancy)',
          system: 'reproductive',
          likelihood: 'common',
          mechanism: 'hCG and hormonal changes trigger CTZ and alter gastric motility',
          characteristicFeatures: ['Morning predominance', 'First trimester', 'Food aversions'],
          associatedFindings: ['Positive pregnancy test', 'Amenorrhea'],
          highlightColor: '#27ae60',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'mixed',
        afferentPathway: 'Vagal afferents (GI), vestibular nuclei (inner ear), CTZ (chemoreceptors), cortex (psychogenic) → vomiting center in medulla',
        centralProcessing: 'Nucleus tractus solitarius coordinates inputs; pattern generator activates coordinated vomiting reflex',
        perceptionDescription: 'Nausea is conscious awareness of impending vomiting; involves autonomic symptoms (salivation, pallor, tachycardia)',
      },
      redFlags: [
        {
          finding: 'Vomiting with severe headache, stiff neck',
          concern: 'Meningitis, subarachnoid hemorrhage, increased ICP',
          urgency: 'immediate',
          actionRequired: 'CT head, LP if indicated, emergent evaluation',
        },
        {
          finding: 'Bilious vomiting with abdominal distension, obstipation',
          concern: 'Bowel obstruction',
          urgency: 'immediate',
          actionRequired: 'Abdominal X-ray/CT, surgical consultation',
        },
        {
          finding: 'Hematemesis or coffee-ground emesis',
          concern: 'Upper GI bleeding',
          urgency: 'immediate',
          actionRequired: 'IV access, type and screen, GI consultation',
        },
        {
          finding: 'Intractable vomiting with altered mental status',
          concern: 'DKA, uremia, toxic ingestion',
          urgency: 'immediate',
          actionRequired: 'BMP, glucose, toxicology screen',
        },
      ],
      relatedSymptoms: ['abdominal pain', 'diarrhea', 'fever', 'headache', 'vertigo'],
      differentialConsiderations: ['Gastroenteritis', 'Gastroparesis', 'Bowel obstruction', 'Pregnancy', 'Medication effect', 'Vestibular', 'Increased ICP', 'MI'],
      explanations: {
        level1: 'Nausea and vomiting can come from stomach problems, inner ear, brain, or many other causes. Persistent vomiting needs medical attention.',
        level2: 'GI causes (gastritis, obstruction), vestibular (inner ear), CNS (increased pressure), metabolic (DKA), and medications all cause nausea. Pattern and associated symptoms guide diagnosis.',
        level3: 'Vomiting center in medulla receives inputs from GI (vagal), vestibular, CTZ (toxins/drugs), and cortex. Bilious = distal to ampulla. Feculent = distal obstruction. Projectile = high pressure.',
        level4: 'CTZ in area postrema (outside BBB) detects circulating toxins, drugs (opioids, chemo), uremia. 5-HT3 receptors (chemo-induced) and NK1 receptors (delayed) are antiemetic targets.',
        level5: 'Coordinated vomiting reflex: retroperistalsis, pyloric relaxation, gastric fundus contraction, diaphragm/abdominal muscle contraction, laryngeal closure. Central pattern generator in reticular formation orchestrates sequence.',
      },
    },
  ],
  // ============ COUGH ============
  [
    'cough',
    {
      symptomId: 'cough',
      symptomName: 'Cough',
      aliases: ['coughing', 'hacking', 'dry cough', 'productive cough', 'chronic cough'],
      category: 'respiratory',
      bodyRegion: 'chest',
      description: 'Sudden, forceful expulsion of air from the lungs, protective reflex or symptom of disease',
      anatomicalSources: [
        {
          structureId: 'upper-airway',
          structureName: 'Upper Airway (Post-nasal Drip)',
          system: 'respiratory',
          likelihood: 'common',
          mechanism: 'Mucus drainage irritates pharyngeal cough receptors',
          characteristicFeatures: ['Throat clearing', 'Worse at night/lying down', 'Nasal congestion'],
          associatedFindings: ['Rhinorrhea', 'Cobblestone pharynx', 'Allergic shiners'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'bronchi',
          structureName: 'Bronchi (Asthma/COPD)',
          system: 'respiratory',
          likelihood: 'common',
          mechanism: 'Airway inflammation and bronchoconstriction stimulate cough receptors',
          characteristicFeatures: ['Wheezing', 'Episodic', 'Triggers (allergens, exercise, cold)'],
          aggravatingFactors: ['Exercise', 'Allergens', 'Cold air', 'Infections'],
          relievingFactors: ['Bronchodilators', 'Steroids'],
          associatedFindings: ['Wheezing', 'Prolonged expiration', 'Decreased peak flow'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'esophagus',
          structureName: 'Esophagus (GERD)',
          system: 'digestive',
          likelihood: 'common',
          mechanism: 'Acid reflux stimulates esophageal-bronchial reflex or microaspiration',
          characteristicFeatures: ['Worse after meals', 'Lying down', 'May lack heartburn'],
          aggravatingFactors: ['Large meals', 'Lying down', 'Acidic foods'],
          relievingFactors: ['PPIs', 'Elevating head of bed'],
          associatedFindings: ['Heartburn', 'Regurgitation', 'Hoarseness'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'lungs',
          structureName: 'Lungs (Pneumonia)',
          system: 'respiratory',
          likelihood: 'common',
          mechanism: 'Alveolar inflammation and secretions stimulate cough reflex',
          characteristicFeatures: ['Productive', 'Fever', 'Dyspnea'],
          associatedFindings: ['Fever', 'Crackles', 'Infiltrate on CXR', 'Elevated WBC'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'heart',
          structureName: 'Heart (Heart Failure)',
          system: 'cardiovascular',
          likelihood: 'common',
          mechanism: 'Pulmonary congestion stimulates J-receptors causing dry cough',
          characteristicFeatures: ['Dry cough', 'Worse lying flat', 'Nocturnal'],
          aggravatingFactors: ['Lying flat', 'Exertion'],
          associatedFindings: ['Dyspnea', 'Orthopnea', 'Edema', 'Elevated BNP'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'lung-mass',
          structureName: 'Lung (Malignancy)',
          system: 'respiratory',
          likelihood: 'do-not-miss',
          mechanism: 'Tumor irritation of airways or invasion causes persistent cough',
          characteristicFeatures: ['Persistent', 'Change in chronic cough', 'Hemoptysis'],
          associatedFindings: ['Hemoptysis', 'Weight loss', 'Smoking history', 'Mass on imaging'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'medications',
          structureName: 'Drug-Induced (ACE Inhibitor)',
          system: 'generalized',
          likelihood: 'common',
          mechanism: 'ACE inhibitors cause bradykinin accumulation irritating airways',
          characteristicFeatures: ['Dry, tickling', 'Started after ACE inhibitor', 'Persistent'],
          associatedFindings: ['Temporal relationship to ACE inhibitor start'],
          highlightColor: '#1abc9c',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Vagal afferents (C-fibers, rapidly adapting receptors) from larynx, trachea, bronchi → nucleus tractus solitarius → cough center',
        centralProcessing: 'Cough center in medulla generates coordinated inspiratory and expulsive phases',
        perceptionDescription: 'Urge to cough precedes reflex; can be voluntarily suppressed or initiated',
      },
      redFlags: [
        {
          finding: 'Hemoptysis, especially with weight loss, smoking history',
          concern: 'Lung cancer, TB, pulmonary embolism',
          urgency: 'urgent',
          actionRequired: 'CT chest, bronchoscopy consideration',
        },
        {
          finding: 'Cough with fever, dyspnea, hypoxia',
          concern: 'Pneumonia, COVID-19, influenza',
          urgency: 'urgent',
          actionRequired: 'CXR, O2 saturation, respiratory panel',
        },
        {
          finding: 'Chronic cough >8 weeks with weight loss',
          concern: 'Malignancy, TB, interstitial lung disease',
          urgency: 'urgent',
          actionRequired: 'Chest imaging, TB testing, pulmonology referral',
        },
        {
          finding: 'Cough with stridor or respiratory distress',
          concern: 'Upper airway obstruction',
          urgency: 'immediate',
          actionRequired: 'Emergent airway evaluation',
        },
      ],
      relatedSymptoms: ['dyspnea', 'wheezing', 'sputum production', 'hemoptysis', 'fever', 'heartburn'],
      differentialConsiderations: ['Upper airway cough syndrome', 'Asthma', 'GERD', 'ACE inhibitor', 'Pneumonia', 'COPD', 'Lung cancer', 'Heart failure'],
      explanations: {
        level1: 'Cough protects your lungs but can also be caused by allergies, acid reflux, asthma, infections, or some medications.',
        level2: 'Chronic cough (>8 weeks) most commonly from upper airway cough syndrome, asthma, or GERD. ACE inhibitors are a common medication cause. Persistent cough needs evaluation.',
        level3: 'Cough triad (UACS, asthma, GERD) causes >90% of chronic cough in non-smokers with normal CXR. Empiric sequential treatment often diagnostic. Consider ACE-I, ILD, malignancy.',
        level4: 'Cough reflex arc: vagal afferents (RARs in epithelium, C-fibers in mucosa) → NTS → cough pattern generator → expiratory muscles. TRPV1 channels on C-fibers respond to capsaicin, acid.',
        level5: 'Cough hypersensitivity syndrome: peripheral and central sensitization lowers cough threshold. ATP, prostaglandins, and nerve growth factor sensitize peripheral receptors. Central sensitization involves NTS plasticity.',
      },
    },
  ],
  // ============ NUMBNESS/TINGLING ============
  [
    'numbness-tingling',
    {
      symptomId: 'numbness-tingling',
      symptomName: 'Numbness and Tingling',
      aliases: ['paresthesia', 'pins and needles', 'numbness', 'tingling', 'neuropathy', 'loss of sensation'],
      category: 'neurologic',
      bodyRegion: 'generalized',
      description: 'Abnormal sensations including numbness (loss of feeling) or tingling (pins and needles)',
      anatomicalSources: [
        {
          structureId: 'peripheral-nerves',
          structureName: 'Peripheral Nerves (Neuropathy)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Nerve damage from diabetes, toxins, or other causes impairs sensory transmission',
          characteristicFeatures: ['Stocking-glove distribution', 'Symmetric', 'Distal > proximal'],
          associatedFindings: ['Decreased vibration sense', 'Absent ankle reflexes', 'Diabetic history'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'nerve-roots',
          structureName: 'Nerve Roots (Radiculopathy)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Nerve root compression causes dermatomal sensory changes',
          characteristicFeatures: ['Dermatomal pattern', 'Associated pain', 'Unilateral'],
          aggravatingFactors: ['Neck/back movement', 'Coughing', 'Valsalva'],
          associatedFindings: ['Neck/back pain', 'Weakness in myotome', 'Reflex changes'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'median-nerve',
          structureName: 'Median Nerve (Carpal Tunnel)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Median nerve compression at wrist causes hand paresthesias',
          characteristicFeatures: ['Thumb, index, middle fingers', 'Worse at night', 'Wrist symptoms'],
          aggravatingFactors: ['Repetitive wrist use', 'Pregnancy', 'Hypothyroidism'],
          relievingFactors: ['Shaking hand', 'Wrist splinting'],
          associatedFindings: ['Positive Tinel\'s', 'Positive Phalen\'s', 'Thenar atrophy (late)'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'spinal-cord',
          structureName: 'Spinal Cord (Myelopathy)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Spinal cord compression or lesion causes sensory level and tract signs',
          characteristicFeatures: ['Sensory level', 'Bilateral symptoms', 'Upper motor neuron signs'],
          associatedFindings: ['Hyperreflexia', 'Babinski positive', 'Gait disturbance', 'Bladder dysfunction'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'brain',
          structureName: 'Brain (Stroke/MS)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'CNS lesion in sensory pathways causes contralateral or pattern-specific numbness',
          characteristicFeatures: ['Sudden onset (stroke)', 'Facial involvement', 'Hemibody pattern'],
          associatedFindings: ['Other focal deficits', 'Risk factors', 'MRI lesions (MS)'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'ulnar-nerve',
          structureName: 'Ulnar Nerve (Cubital Tunnel)',
          system: 'nervous',
          likelihood: 'common',
          mechanism: 'Ulnar nerve compression at elbow causes 4th/5th digit symptoms',
          characteristicFeatures: ['4th and 5th digits', 'Medial hand', 'Elbow symptoms'],
          aggravatingFactors: ['Elbow flexion', 'Leaning on elbow'],
          associatedFindings: ['Positive Tinel\'s at elbow', 'Intrinsic hand weakness (late)'],
          highlightColor: '#27ae60',
        },
        {
          structureId: 'vitamins',
          structureName: 'Vitamin Deficiency (B12)',
          system: 'nervous',
          likelihood: 'less-common',
          mechanism: 'B12 deficiency causes demyelination of peripheral and central nervous system',
          characteristicFeatures: ['Symmetric', 'May have myelopathy signs', 'Cognitive changes'],
          associatedFindings: ['Macrocytic anemia', 'Low B12', 'Elevated MMA', 'Ataxia'],
          highlightColor: '#f39c12',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Cervical spine',
          sourceLocation: 'C5-T1',
          referredTo: ['Arm', 'Hand'],
          dermatomalLevel: 'C5-T1',
          mechanism: 'Cervical radiculopathy causes dermatomal paresthesias',
          clinicalExample: 'C6 radiculopathy with thumb/index numbness',
        },
        {
          sourceOrgan: 'Lumbar spine',
          sourceLocation: 'L4-S1',
          referredTo: ['Leg', 'Foot'],
          dermatomalLevel: 'L4-S1',
          mechanism: 'Lumbar radiculopathy causes dermatomal paresthesias',
          clinicalExample: 'L5 radiculopathy with dorsal foot numbness',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Peripheral nerve → dorsal root ganglion → dorsal column (vibration, position) or spinothalamic tract (pain, temp) → thalamus → cortex',
        centralProcessing: 'Somatosensory cortex localizes and characterizes sensation; abnormal signals perceived as paresthesias',
        perceptionDescription: 'Numbness = loss of sensation; tingling = spontaneous abnormal discharge; both indicate nerve dysfunction',
      },
      redFlags: [
        {
          finding: 'Acute onset with facial droop, arm weakness',
          concern: 'Stroke',
          urgency: 'immediate',
          actionRequired: 'Emergent CT, stroke protocol',
        },
        {
          finding: 'Ascending numbness/weakness over days',
          concern: 'Guillain-Barré syndrome',
          urgency: 'immediate',
          actionRequired: 'LP, nerve conduction, ICU monitoring for respiratory compromise',
        },
        {
          finding: 'Saddle anesthesia with bladder dysfunction',
          concern: 'Cauda equina syndrome',
          urgency: 'immediate',
          actionRequired: 'Emergent MRI, neurosurgical consultation',
        },
        {
          finding: 'Numbness with sensory level on trunk',
          concern: 'Spinal cord compression',
          urgency: 'immediate',
          actionRequired: 'Emergent MRI spine, neurosurgery',
        },
      ],
      relatedSymptoms: ['weakness', 'pain', 'gait disturbance', 'bladder dysfunction'],
      differentialConsiderations: ['Diabetic neuropathy', 'Carpal tunnel', 'Radiculopathy', 'B12 deficiency', 'Stroke', 'MS', 'Guillain-Barré'],
      explanations: {
        level1: 'Numbness and tingling happen when nerves are damaged or compressed. It can be from diabetes, pinched nerves, or problems in the brain or spinal cord.',
        level2: 'Pattern helps diagnosis: stocking-glove = peripheral neuropathy; dermatomal = nerve root; focal = nerve entrapment; sudden hemibody = stroke. Diabetes is the most common cause.',
        level3: 'Workup: glucose, HbA1c, B12, TSH, SPEP. EMG/NCS for peripheral causes. MRI spine for radiculopathy/myelopathy. MRI brain for central causes. Pattern and tempo guide testing.',
        level4: 'Large fiber neuropathy: vibration, position sense loss, absent reflexes. Small fiber: pain, temperature affected first. Demyelinating: conduction block on NCS. Axonal: reduced amplitudes.',
        level5: 'Peripheral nerve: Schwann cell dysfunction (demyelinating) vs axonal degeneration (axonal). Wallerian degeneration distal to injury. Dorsal column-medial lemniscus vs spinothalamic tract lesions produce different sensory patterns.',
      },
    },
  ],
  // ============ URINARY SYMPTOMS ============
  [
    'urinary-symptoms',
    {
      symptomId: 'urinary-symptoms',
      symptomName: 'Urinary Symptoms',
      aliases: ['frequent urination', 'dysuria', 'urinary frequency', 'burning urination', 'painful urination', 'urgency'],
      category: 'urologic',
      bodyRegion: 'pelvis',
      description: 'Abnormalities in urination including frequency, urgency, dysuria, hesitancy, or incontinence',
      anatomicalSources: [
        {
          structureId: 'bladder',
          structureName: 'Bladder (UTI/Cystitis)',
          system: 'urinary',
          likelihood: 'common',
          mechanism: 'Bacterial infection causes bladder wall inflammation and irritation',
          characteristicFeatures: ['Dysuria', 'Frequency', 'Urgency', 'Suprapubic pain'],
          associatedFindings: ['Positive urinalysis', 'Pyuria', 'Bacteriuria', 'Hematuria'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'prostate',
          structureName: 'Prostate (BPH/Prostatitis)',
          system: 'reproductive',
          likelihood: 'common',
          mechanism: 'Prostatic enlargement obstructs urethra; prostatitis causes irritative symptoms',
          characteristicFeatures: ['Hesitancy', 'Weak stream', 'Nocturia', 'Incomplete emptying'],
          associatedFindings: ['Enlarged prostate on DRE', 'Elevated post-void residual', 'Elevated PSA (prostatitis)'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'kidney',
          structureName: 'Kidney (Pyelonephritis)',
          system: 'urinary',
          likelihood: 'do-not-miss',
          mechanism: 'Ascending infection causes kidney parenchymal inflammation',
          characteristicFeatures: ['Flank pain', 'Fever', 'Chills', 'Lower urinary symptoms'],
          associatedFindings: ['CVA tenderness', 'Fever', 'Elevated WBC', 'Positive cultures'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'ureter',
          structureName: 'Ureter (Nephrolithiasis)',
          system: 'urinary',
          likelihood: 'common',
          mechanism: 'Stone passage causes ureteral spasm and irritation',
          characteristicFeatures: ['Colicky flank pain', 'Radiates to groin', 'Hematuria'],
          associatedFindings: ['Hematuria', 'Stone on CT', 'Nausea/vomiting'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'bladder-neck',
          structureName: 'Bladder Neck/Urethra (Overactive Bladder)',
          system: 'urinary',
          likelihood: 'common',
          mechanism: 'Detrusor overactivity causes involuntary contractions',
          characteristicFeatures: ['Urgency', 'Frequency', 'Urge incontinence', 'Nocturia'],
          associatedFindings: ['Negative urinalysis', 'Normal post-void residual'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'bladder-cancer',
          structureName: 'Bladder (Malignancy)',
          system: 'urinary',
          likelihood: 'do-not-miss',
          mechanism: 'Tumor causes irritative symptoms and hematuria',
          characteristicFeatures: ['Painless hematuria', 'Irritative symptoms', 'Smoking history'],
          associatedFindings: ['Gross or microscopic hematuria', 'Mass on cystoscopy', 'Risk factors'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'pelvic-floor',
          structureName: 'Pelvic Floor (Stress Incontinence)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Pelvic floor weakness allows urine leakage with increased abdominal pressure',
          characteristicFeatures: ['Leakage with cough/sneeze/exercise', 'No urgency'],
          aggravatingFactors: ['Coughing', 'Sneezing', 'Heavy lifting', 'Exercise'],
          highlightColor: '#27ae60',
        },
      ],
      referredPainPatterns: [
        {
          sourceOrgan: 'Kidney/Ureter',
          sourceLocation: 'Flank',
          referredTo: ['Groin', 'Testicle/labia', 'Inner thigh'],
          dermatomalLevel: 'T10-L1',
          mechanism: 'Ureteral afferents share pathways with genitofemoral nerve',
          clinicalExample: 'Kidney stone with flank-to-groin pain',
        },
      ],
      mechanismOfGeneration: {
        pathwayType: 'visceral',
        afferentPathway: 'Bladder stretch receptors via pelvic nerve (S2-S4) → sacral cord → pontine micturition center → cortex for voluntary control',
        centralProcessing: 'Pontine micturition center coordinates detrusor contraction and sphincter relaxation; cortex provides voluntary control',
        perceptionDescription: 'Urgency from detrusor afferents; dysuria from mucosal inflammation; outlet symptoms from obstruction',
      },
      redFlags: [
        {
          finding: 'Fever with flank pain and urinary symptoms',
          concern: 'Pyelonephritis, urosepsis',
          urgency: 'urgent',
          actionRequired: 'Urinalysis, cultures, imaging, IV antibiotics if toxic',
        },
        {
          finding: 'Painless gross hematuria',
          concern: 'Bladder or renal malignancy',
          urgency: 'urgent',
          actionRequired: 'Cystoscopy, CT urogram, urology referral',
        },
        {
          finding: 'Acute urinary retention',
          concern: 'BPH, stricture, neurologic cause',
          urgency: 'urgent',
          actionRequired: 'Bladder catheterization, urology consultation',
        },
        {
          finding: 'Urinary symptoms with new neurologic deficits',
          concern: 'Cauda equina, spinal cord lesion',
          urgency: 'immediate',
          actionRequired: 'Emergent MRI, neurosurgical consultation',
        },
      ],
      relatedSymptoms: ['flank pain', 'fever', 'hematuria', 'incontinence', 'pelvic pain'],
      differentialConsiderations: ['UTI', 'BPH', 'Overactive bladder', 'Nephrolithiasis', 'Pyelonephritis', 'Bladder cancer', 'Prostatitis', 'Interstitial cystitis'],
      explanations: {
        level1: 'Urinary problems can come from infections, prostate issues in men, or bladder conditions. Burning or blood in urine needs medical attention.',
        level2: 'UTI causes burning/frequency; BPH causes weak stream/hesitancy; overactive bladder causes urgency. Painless blood in urine is concerning for cancer.',
        level3: 'Irritative symptoms (dysuria, frequency, urgency) suggest infection or inflammation. Obstructive symptoms (hesitancy, weak stream) suggest BPH. AUA symptom score quantifies BPH severity.',
        level4: 'Lower UTI: cystitis with dysuria, frequency, pyuria. Upper UTI: pyelonephritis adds fever, flank pain. BPH: prostatic hyperplasia obstructs bladder outlet, causes detrusor hypertrophy.',
        level5: 'Micturition reflex: bladder distension activates stretch receptors → sacral cord → pontine micturition center coordinates detrusor contraction + sphincter relaxation. Voluntary control via frontal cortex inhibition of reflex. Alpha-blockers (BPH) relax prostatic smooth muscle; antimuscarinics (OAB) reduce detrusor contractions.',
      },
    },
  ],
  // ============ VISION CHANGES ============
  [
    'vision-changes',
    {
      symptomId: 'vision-changes',
      symptomName: 'Vision Changes',
      aliases: ['blurry vision', 'vision loss', 'double vision', 'visual disturbance', 'floaters', 'flashing lights'],
      category: 'neurologic',
      bodyRegion: 'head',
      description: 'Any alteration in visual perception including acuity, field, or quality of vision',
      anatomicalSources: [
        {
          structureId: 'lens',
          structureName: 'Lens (Refractive Error/Cataract)',
          system: 'special-senses',
          likelihood: 'common',
          mechanism: 'Lens opacity or shape changes cause blurred vision',
          characteristicFeatures: ['Gradual onset', 'Bilateral', 'Glare sensitivity (cataract)'],
          associatedFindings: ['Reduced visual acuity', 'Lens opacity on exam'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'retina',
          structureName: 'Retina (Detachment/Macular Degeneration)',
          system: 'special-senses',
          likelihood: 'do-not-miss',
          mechanism: 'Retinal pathology causes photoreceptor dysfunction',
          characteristicFeatures: ['Sudden floaters/flashes (detachment)', 'Central vision loss (AMD)', 'Distortion'],
          associatedFindings: ['Curtain over vision (detachment)', 'Drusen on fundoscopy (AMD)'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'optic-nerve',
          structureName: 'Optic Nerve (Neuritis/Glaucoma)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Optic nerve inflammation or compression impairs visual transmission',
          characteristicFeatures: ['Painful eye movement (neuritis)', 'Peripheral vision loss (glaucoma)', 'Afferent pupil defect'],
          associatedFindings: ['Reduced color vision', 'Central scotoma (neuritis)', 'Cupped disc (glaucoma)'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'extraocular-muscles',
          structureName: 'Extraocular Muscles (Diplopia)',
          system: 'musculoskeletal',
          likelihood: 'common',
          mechanism: 'Cranial nerve palsy or muscle dysfunction causes misalignment',
          characteristicFeatures: ['Double vision', 'Worse in certain gaze directions', 'May be horizontal/vertical'],
          associatedFindings: ['Strabismus', 'Limited eye movement', 'Ptosis (CN III)'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'visual-cortex',
          structureName: 'Visual Cortex (Stroke/Migraine)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Cortical lesion or dysfunction causes field deficits or positive phenomena',
          characteristicFeatures: ['Homonymous field cut (stroke)', 'Scintillating scotoma (migraine)'],
          associatedFindings: ['Other stroke symptoms', 'Headache following visual aura (migraine)'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'retinal-vessels',
          structureName: 'Retinal Vessels (Vascular Occlusion)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Arterial or venous occlusion causes sudden retinal ischemia',
          characteristicFeatures: ['Sudden painless vision loss', 'Unilateral', 'Vascular risk factors'],
          associatedFindings: ['Cherry red spot (CRAO)', 'Flame hemorrhages (CRVO)', 'Emboli visible'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'anterior-chamber',
          structureName: 'Anterior Chamber (Acute Glaucoma)',
          system: 'special-senses',
          likelihood: 'do-not-miss',
          mechanism: 'Acute angle closure causes rapid IOP rise and corneal edema',
          characteristicFeatures: ['Sudden onset', 'Severe eye pain', 'Halos around lights', 'Red eye'],
          associatedFindings: ['Fixed mid-dilated pupil', 'Corneal haze', 'Elevated IOP'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'vitreous',
          structureName: 'Vitreous (Hemorrhage/Floaters)',
          system: 'special-senses',
          likelihood: 'common',
          mechanism: 'Vitreous changes cause floaters; hemorrhage causes vision loss',
          characteristicFeatures: ['New floaters', 'Flashing lights', 'Sudden red/dark vision (hemorrhage)'],
          associatedFindings: ['Posterior vitreous detachment', 'Diabetic retinopathy', 'Trauma'],
          highlightColor: '#f39c12',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Retina → optic nerve → optic chiasm → optic tract → lateral geniculate → optic radiations → visual cortex',
        centralProcessing: 'Primary visual cortex (V1) processes basic features; association areas (V2-V5) process motion, color, form',
        perceptionDescription: 'Vision loss patterns localize lesion: monocular = eye/optic nerve; bitemporal = chiasm; homonymous = post-chiasmal',
      },
      redFlags: [
        {
          finding: 'Sudden painless vision loss',
          concern: 'Retinal artery/vein occlusion, vitreous hemorrhage',
          urgency: 'immediate',
          actionRequired: 'Emergent ophthalmology evaluation',
        },
        {
          finding: 'New floaters with flashing lights',
          concern: 'Retinal detachment',
          urgency: 'immediate',
          actionRequired: 'Urgent dilated fundoscopy',
        },
        {
          finding: 'Painful red eye with visual loss, halos',
          concern: 'Acute angle-closure glaucoma',
          urgency: 'immediate',
          actionRequired: 'Emergent IOP measurement, ophthalmology',
        },
        {
          finding: 'Painful vision loss with eye movement',
          concern: 'Optic neuritis, consider MS',
          urgency: 'urgent',
          actionRequired: 'MRI brain/orbits, neurology referral',
        },
        {
          finding: 'Homonymous visual field deficit',
          concern: 'Stroke, mass lesion',
          urgency: 'immediate',
          actionRequired: 'Emergent CT/MRI, stroke protocol if acute',
        },
      ],
      relatedSymptoms: ['eye pain', 'headache', 'eye redness', 'photophobia', 'neurologic deficits'],
      differentialConsiderations: ['Refractive error', 'Cataract', 'Glaucoma', 'Macular degeneration', 'Retinal detachment', 'Optic neuritis', 'Stroke', 'Migraine aura'],
      explanations: {
        level1: 'Vision problems can come from the eye itself (like cataracts or glaucoma) or from the brain and nerves. Sudden vision changes need immediate attention.',
        level2: 'Gradual blurring often from cataracts or refractive error. Sudden vision loss can be from retinal detachment, vessel blockage, or stroke. Pattern of loss helps localize cause.',
        level3: 'Monocular vision loss: eye or optic nerve. Bitemporal hemianopia: chiasm (pituitary). Homonymous hemianopia: post-chiasmal pathway (stroke). Positive phenomena (flashes, aura) vs negative (field loss).',
        level4: 'RAPD (Marcus Gunn pupil) indicates optic nerve lesion. IOP >21 mmHg concerning for glaucoma. Fundoscopy essential: papilledema, cupping, hemorrhages, emboli, detachment.',
        level5: 'Visual pathway retinotopy maintained throughout: nasal retina (temporal field) crosses at chiasm, temporal retina stays ipsilateral. Meyer\'s loop (temporal lobe) carries inferior field → "pie in the sky" deficit with temporal lesion.',
      },
    },
  ],
  // ============ SKIN RASH ============
  [
    'skin-rash',
    {
      symptomId: 'skin-rash',
      symptomName: 'Skin Rash',
      aliases: ['rash', 'skin lesion', 'hives', 'dermatitis', 'skin eruption', 'itchy skin'],
      category: 'dermatologic',
      bodyRegion: 'generalized',
      description: 'Visible change in skin color, texture, or appearance, with or without itching',
      anatomicalSources: [
        {
          structureId: 'epidermis',
          structureName: 'Epidermis (Contact Dermatitis)',
          system: 'integumentary',
          likelihood: 'common',
          mechanism: 'Allergic or irritant reaction causes epidermal inflammation',
          characteristicFeatures: ['Localized to contact area', 'Vesicles (allergic)', 'Erythema', 'Pruritus'],
          aggravatingFactors: ['Continued exposure', 'Scratching'],
          relievingFactors: ['Removing trigger', 'Topical steroids'],
          associatedFindings: ['Well-demarcated borders', 'Linear pattern suggests plant'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'dermis',
          structureName: 'Dermis (Urticaria)',
          system: 'integumentary',
          likelihood: 'common',
          mechanism: 'Mast cell degranulation causes wheals and angioedema',
          characteristicFeatures: ['Raised wheals', 'Migratory', 'Resolves <24 hours', 'Very pruritic'],
          associatedFindings: ['Dermatographism', 'Angioedema if severe'],
          highlightColor: '#9b59b6',
        },
        {
          structureId: 'skin-infection',
          structureName: 'Skin (Infection)',
          system: 'integumentary',
          likelihood: 'common',
          mechanism: 'Bacterial, viral, or fungal infection causes inflammatory response',
          characteristicFeatures: ['Varied appearance', 'May have fever (cellulitis)', 'Pattern specific to organism'],
          associatedFindings: ['Warmth (cellulitis)', 'Vesicles (herpes)', 'Annular scaling (tinea)'],
          highlightColor: '#f39c12',
        },
        {
          structureId: 'immune-system',
          structureName: 'Immune System (Autoimmune)',
          system: 'lymphatic',
          likelihood: 'less-common',
          mechanism: 'Autoimmune reaction causes specific cutaneous manifestations',
          characteristicFeatures: ['Systemic symptoms', 'Specific patterns (butterfly rash, heliotrope)'],
          associatedFindings: ['Joint pain', 'Fever', 'Positive autoantibodies'],
          highlightColor: '#3498db',
        },
        {
          structureId: 'blood-vessels',
          structureName: 'Blood Vessels (Vasculitis)',
          system: 'cardiovascular',
          likelihood: 'do-not-miss',
          mechanism: 'Vessel inflammation causes palpable purpura and necrosis',
          characteristicFeatures: ['Palpable purpura', 'Non-blanching', 'Lower extremity predominant'],
          associatedFindings: ['Systemic symptoms', 'Renal involvement', 'Arthralgias'],
          highlightColor: '#c0392b',
        },
        {
          structureId: 'drug-reaction',
          structureName: 'Drug Reaction',
          system: 'integumentary',
          likelihood: 'common',
          mechanism: 'Medication triggers immune-mediated skin reaction',
          characteristicFeatures: ['Temporal relation to drug start', 'Symmetric', 'Morbilliform pattern common'],
          associatedFindings: ['New medication history', 'May have fever', 'Mucosal involvement (severe)'],
          highlightColor: '#e74c3c',
        },
        {
          structureId: 'systemic-infection',
          structureName: 'Systemic (Viral Exanthem)',
          system: 'lymphatic',
          likelihood: 'common',
          mechanism: 'Systemic viral infection causes diffuse rash',
          characteristicFeatures: ['Preceded by prodrome', 'Diffuse', 'May have fever'],
          associatedFindings: ['Fever', 'Lymphadenopathy', 'Pharyngitis'],
          highlightColor: '#27ae60',
        },
        {
          structureId: 'meninges',
          structureName: 'Meninges (Meningococcemia)',
          system: 'nervous',
          likelihood: 'do-not-miss',
          mechanism: 'Systemic infection causes petechial/purpuric rash with DIC',
          characteristicFeatures: ['Petechiae → purpura rapidly', 'Ill-appearing', 'Fever'],
          associatedFindings: ['High fever', 'Altered mental status', 'Meningismus', 'Shock'],
          highlightColor: '#c0392b',
        },
      ],
      referredPainPatterns: [],
      mechanismOfGeneration: {
        pathwayType: 'somatic',
        afferentPathway: 'Cutaneous receptors (itch: C-fibers; pain: A-delta, C-fibers) → dorsal horn → spinothalamic tract → thalamus → somatosensory cortex',
        centralProcessing: 'Itch-specific neurons in dorsal horn; central sensitization can amplify pruritus; scratch-itch cycle',
        perceptionDescription: 'Rash perception includes visual (appearance) and somatosensory (itch, pain) components',
      },
      redFlags: [
        {
          finding: 'Rash with fever, hypotension, mucous membrane involvement',
          concern: 'SJS/TEN, drug reaction with eosinophilia and systemic symptoms (DRESS)',
          urgency: 'immediate',
          actionRequired: 'Discontinue all new medications, emergent dermatology, consider ICU',
        },
        {
          finding: 'Petechiae/purpura with fever and ill appearance',
          concern: 'Meningococcemia, DIC, Rocky Mountain spotted fever',
          urgency: 'immediate',
          actionRequired: 'Blood cultures, empiric antibiotics, emergent evaluation',
        },
        {
          finding: 'Rapidly spreading erythema with systemic symptoms',
          concern: 'Necrotizing fasciitis, severe cellulitis',
          urgency: 'immediate',
          actionRequired: 'Surgical consultation, IV antibiotics',
        },
        {
          finding: 'New rash with joint pain, fever, systemic symptoms',
          concern: 'Systemic lupus, vasculitis, adult-onset Still\'s',
          urgency: 'urgent',
          actionRequired: 'Rheumatology referral, autoimmune workup',
        },
      ],
      relatedSymptoms: ['itching', 'fever', 'joint pain', 'swelling', 'systemic symptoms'],
      differentialConsiderations: ['Contact dermatitis', 'Urticaria', 'Drug eruption', 'Viral exanthem', 'Psoriasis', 'Eczema', 'Cellulitis', 'Vasculitis', 'SJS/TEN'],
      explanations: {
        level1: 'Rashes can come from allergies, infections, medications, or immune problems. Some rashes with fever are emergencies.',
        level2: 'Common rashes: eczema (dry, itchy), hives (raised, migratory), contact dermatitis (localized to exposure). Drug rashes and infections can be serious.',
        level3: 'Morphology guides diagnosis: maculopapular (drug, viral), vesicular (herpes, contact), purpuric (vasculitis), urticarial (allergy). Distribution pattern and associated symptoms narrow differential.',
        level4: 'Type I hypersensitivity (urticaria): IgE-mediated mast cell degranulation. Type IV (contact): T-cell mediated delayed response. SJS/TEN: keratinocyte apoptosis from drug-specific T-cells.',
        level5: 'Itch transduction: pruritogenic mediators (histamine, IL-31, bile salts) activate specific receptors on C-fibers (TRPV1, PAR-2). Gastrin-releasing peptide receptor (GRPR) neurons in dorsal horn specific for itch. Central sensitization in chronic pruritus.',
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
