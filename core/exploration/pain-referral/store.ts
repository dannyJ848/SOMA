/**
 * Pain Referral Pattern Visualization Store
 *
 * Data for visualizing visceral referred pain patterns with
 * dermatomal mapping and animated pain pathways.
 */

import type {
  DermatomeLevel,
  DermatomeMapEntry,
  VisceralPainSource,
  ReferredPainPattern,
  PainReferralEducation,
  PainReferralExplorerResult,
  PainReferralVisualization,
} from './types';

/**
 * Dermatome map for the entire body
 */
export const dermatomeMap: Map<DermatomeLevel, DermatomeMapEntry> = new Map([
  ['C3', {
    level: 'C3',
    bodyRegions: ['neck'],
    surfaceArea: 'Lower posterior neck, upper back of head',
    landmarks: ['Supraclavicular region', 'Lower occiput'],
    highlightColor: '#FF6B6B',
    sensoryTestPoint: 'Supraclavicular fossa',
  }],
  ['C4', {
    level: 'C4',
    bodyRegions: ['shoulder-left', 'shoulder-right', 'neck'],
    surfaceArea: 'Upper shoulder, lower neck',
    landmarks: ['Tip of shoulder', 'Clavicle area'],
    highlightColor: '#FF8E72',
    sensoryTestPoint: 'Over acromioclavicular joint',
  }],
  ['C5', {
    level: 'C5',
    bodyRegions: ['shoulder-left', 'shoulder-right', 'arm-left', 'arm-right'],
    surfaceArea: 'Lateral shoulder, lateral upper arm',
    landmarks: ['Deltoid area', 'Lateral arm to elbow'],
    highlightColor: '#FFB347',
    sensoryTestPoint: 'Lateral antecubital fossa',
  }],
  ['C6', {
    level: 'C6',
    bodyRegions: ['arm-left', 'arm-right'],
    surfaceArea: 'Lateral forearm, thumb, index finger',
    landmarks: ['Radial forearm', 'Thumb', 'Index finger'],
    highlightColor: '#FFD93D',
    sensoryTestPoint: 'Dorsum of thumb',
  }],
  ['C7', {
    level: 'C7',
    bodyRegions: ['arm-left', 'arm-right'],
    surfaceArea: 'Middle finger, posterior forearm',
    landmarks: ['Middle finger', 'Back of forearm'],
    highlightColor: '#6BCB77',
    sensoryTestPoint: 'Middle finger',
  }],
  ['C8', {
    level: 'C8',
    bodyRegions: ['arm-left', 'arm-right'],
    surfaceArea: 'Medial forearm, ring and little finger',
    landmarks: ['Ulnar forearm', 'Ring finger', 'Little finger'],
    highlightColor: '#4D96FF',
    sensoryTestPoint: 'Little finger',
  }],
  ['T1', {
    level: 'T1',
    bodyRegions: ['arm-left', 'arm-right', 'chest-anterior'],
    surfaceArea: 'Medial upper arm, axilla',
    landmarks: ['Inner arm', 'Armpit area'],
    highlightColor: '#9B59B6',
    sensoryTestPoint: 'Medial antecubital fossa',
  }],
  ['T2', {
    level: 'T2',
    bodyRegions: ['chest-anterior', 'arm-left', 'arm-right'],
    surfaceArea: 'Upper inner arm, upper chest',
    landmarks: ['Apex of axilla', 'Upper chest'],
    highlightColor: '#8E44AD',
    sensoryTestPoint: 'Apex of axilla',
  }],
  ['T3', {
    level: 'T3',
    bodyRegions: ['chest-anterior', 'chest-posterior'],
    surfaceArea: 'Upper chest at third intercostal space',
    landmarks: ['Third rib area'],
    highlightColor: '#E74C3C',
    sensoryTestPoint: 'Third intercostal space, midclavicular line',
  }],
  ['T4', {
    level: 'T4',
    bodyRegions: ['chest-anterior', 'chest-posterior'],
    surfaceArea: 'Nipple line',
    landmarks: ['Nipple level', 'Fourth rib'],
    highlightColor: '#E67E22',
    sensoryTestPoint: 'Nipple level',
  }],
  ['T5', {
    level: 'T5',
    bodyRegions: ['chest-anterior', 'chest-posterior'],
    surfaceArea: 'Between nipple and xiphoid',
    landmarks: ['Fifth intercostal space'],
    highlightColor: '#F39C12',
    sensoryTestPoint: 'Fifth intercostal space, midclavicular line',
  }],
  ['T6', {
    level: 'T6',
    bodyRegions: ['chest-anterior', 'epigastrium'],
    surfaceArea: 'Xiphoid process level',
    landmarks: ['Xiphoid', 'Lower sternum'],
    highlightColor: '#27AE60',
    sensoryTestPoint: 'Xiphoid process level',
  }],
  ['T7', {
    level: 'T7',
    bodyRegions: ['epigastrium'],
    surfaceArea: 'Upper epigastric region',
    landmarks: ['Below xiphoid'],
    highlightColor: '#1ABC9C',
    sensoryTestPoint: 'Costal margin, midclavicular line',
  }],
  ['T8', {
    level: 'T8',
    bodyRegions: ['epigastrium', 'right-upper-quadrant', 'left-upper-quadrant'],
    surfaceArea: 'Mid-epigastric region',
    landmarks: ['Upper abdomen'],
    highlightColor: '#3498DB',
    sensoryTestPoint: 'Midway between xiphoid and umbilicus',
  }],
  ['T9', {
    level: 'T9',
    bodyRegions: ['right-upper-quadrant', 'left-upper-quadrant'],
    surfaceArea: 'Upper lateral abdomen',
    landmarks: ['Below costal margin'],
    highlightColor: '#2980B9',
    sensoryTestPoint: 'Upper lateral abdomen',
  }],
  ['T10', {
    level: 'T10',
    bodyRegions: ['periumbilical'],
    surfaceArea: 'Umbilicus level',
    landmarks: ['Belly button', 'Navel'],
    highlightColor: '#9B59B6',
    sensoryTestPoint: 'Umbilicus',
  }],
  ['T11', {
    level: 'T11',
    bodyRegions: ['right-lower-quadrant', 'left-lower-quadrant'],
    surfaceArea: 'Below umbilicus',
    landmarks: ['Lower lateral abdomen'],
    highlightColor: '#8E44AD',
    sensoryTestPoint: 'Below umbilicus, lateral',
  }],
  ['T12', {
    level: 'T12',
    bodyRegions: ['right-lower-quadrant', 'left-lower-quadrant', 'groin-left', 'groin-right'],
    surfaceArea: 'Suprapubic and inguinal region',
    landmarks: ['Above pubic bone', 'Inguinal area'],
    highlightColor: '#E91E63',
    sensoryTestPoint: 'Inguinal ligament midpoint',
  }],
  ['L1', {
    level: 'L1',
    bodyRegions: ['groin-left', 'groin-right', 'thigh-anterior'],
    surfaceArea: 'Inguinal region, upper anterior thigh',
    landmarks: ['Groin crease', 'Upper thigh'],
    highlightColor: '#FF5722',
    sensoryTestPoint: 'Upper anterior thigh',
  }],
  ['L2', {
    level: 'L2',
    bodyRegions: ['thigh-anterior'],
    surfaceArea: 'Anterior mid-thigh',
    landmarks: ['Front of thigh'],
    highlightColor: '#FF9800',
    sensoryTestPoint: 'Mid-anterior thigh',
  }],
  ['L3', {
    level: 'L3',
    bodyRegions: ['thigh-anterior', 'knee'],
    surfaceArea: 'Lower anterior thigh, knee',
    landmarks: ['Lower thigh', 'Knee area'],
    highlightColor: '#FFC107',
    sensoryTestPoint: 'Medial knee',
  }],
  ['L4', {
    level: 'L4',
    bodyRegions: ['knee', 'leg'],
    surfaceArea: 'Medial leg, medial ankle',
    landmarks: ['Inner calf', 'Medial malleolus'],
    highlightColor: '#CDDC39',
    sensoryTestPoint: 'Medial malleolus',
  }],
  ['L5', {
    level: 'L5',
    bodyRegions: ['leg', 'foot'],
    surfaceArea: 'Lateral leg, dorsum of foot, great toe',
    landmarks: ['Outer calf', 'Top of foot', 'Big toe'],
    highlightColor: '#8BC34A',
    sensoryTestPoint: 'Dorsum of foot at third metatarsal',
  }],
  ['S1', {
    level: 'S1',
    bodyRegions: ['thigh-posterior', 'leg', 'foot'],
    surfaceArea: 'Posterior thigh, lateral foot, little toe',
    landmarks: ['Back of thigh', 'Outer foot', 'Small toe'],
    highlightColor: '#4CAF50',
    sensoryTestPoint: 'Lateral heel',
  }],
  ['S2', {
    level: 'S2',
    bodyRegions: ['thigh-posterior'],
    surfaceArea: 'Posterior thigh, popliteal fossa',
    landmarks: ['Back of knee', 'Upper calf'],
    highlightColor: '#009688',
    sensoryTestPoint: 'Popliteal fossa',
  }],
]);

/**
 * Visceral pain sources (organs that cause referred pain)
 */
export const visceralPainSources: Map<string, VisceralPainSource> = new Map([
  ['heart', {
    organId: 'heart',
    organName: 'Heart',
    system: 'cardiac',
    structureId: 'cardiovascular-heart',
    innervation: {
      sympatheticLevels: ['T1', 'T2', 'T3', 'T4', 'T5'],
      parasympatheticSource: 'Vagus nerve (CN X)',
      afferentPathway: 'Cardiac plexus → sympathetic chain → T1-T5 dorsal horn',
      centralProcessing: 'Spinothalamic tract → thalamus → somatosensory cortex',
    },
    commonConditions: ['Myocardial infarction', 'Angina pectoris', 'Pericarditis'],
  }],
  ['gallbladder', {
    organId: 'gallbladder',
    organName: 'Gallbladder',
    system: 'hepatobiliary',
    structureId: 'digestive-gallbladder',
    innervation: {
      sympatheticLevels: ['T7', 'T8', 'T9'],
      parasympatheticSource: 'Vagus nerve (CN X)',
      afferentPathway: 'Greater splanchnic nerve → celiac plexus → T7-T9',
      centralProcessing: 'Visceral afferents converge with somatic afferents at T7-T9',
    },
    commonConditions: ['Cholecystitis', 'Cholelithiasis', 'Biliary colic'],
  }],
  ['diaphragm-central', {
    organId: 'diaphragm-central',
    organName: 'Diaphragm (central portion)',
    system: 'pulmonary',
    structureId: 'respiratory-diaphragm',
    innervation: {
      sympatheticLevels: ['C3', 'C4', 'C5'],
      afferentPathway: 'Phrenic nerve → C3-C5 dorsal horn',
      centralProcessing: 'C3-C5 afferents converge with shoulder dermatomes',
    },
    commonConditions: ['Subphrenic abscess', 'Liver laceration', 'Splenic rupture'],
  }],
  ['appendix', {
    organId: 'appendix',
    organName: 'Appendix',
    system: 'gastrointestinal',
    structureId: 'digestive-appendix',
    innervation: {
      sympatheticLevels: ['T10'],
      parasympatheticSource: 'Vagus nerve (CN X)',
      afferentPathway: 'Lesser splanchnic nerve → T10 dorsal horn',
      centralProcessing: 'Initial periumbilical (T10) → later localized to RLQ (somatic)',
    },
    commonConditions: ['Appendicitis'],
  }],
  ['kidney', {
    organId: 'kidney',
    organName: 'Kidney',
    system: 'urogenital',
    structureId: 'urinary-kidney',
    innervation: {
      sympatheticLevels: ['T10', 'T11', 'T12', 'L1'],
      afferentPathway: 'Renal plexus → least splanchnic nerve → T10-L1',
      centralProcessing: 'Visceral afferents converge with flank and groin dermatomes',
    },
    commonConditions: ['Nephrolithiasis', 'Pyelonephritis', 'Renal colic'],
  }],
  ['ureter', {
    organId: 'ureter',
    organName: 'Ureter',
    system: 'urogenital',
    structureId: 'urinary-ureter',
    innervation: {
      sympatheticLevels: ['T11', 'T12', 'L1', 'L2'],
      afferentPathway: 'Ureteric plexus → hypogastric plexus → T11-L2',
      centralProcessing: 'Pain migrates as stone moves: flank → groin → genitalia',
    },
    commonConditions: ['Ureteral stone', 'Ureteric obstruction'],
  }],
  ['pancreas', {
    organId: 'pancreas',
    organName: 'Pancreas',
    system: 'gastrointestinal',
    structureId: 'digestive-pancreas',
    innervation: {
      sympatheticLevels: ['T5', 'T6', 'T7', 'T8', 'T9'],
      parasympatheticSource: 'Vagus nerve (CN X)',
      afferentPathway: 'Splanchnic nerves → celiac plexus → T5-T9',
      centralProcessing: 'Retroperitoneal position causes back referral',
    },
    commonConditions: ['Acute pancreatitis', 'Chronic pancreatitis', 'Pancreatic cancer'],
  }],
  ['spleen', {
    organId: 'spleen',
    organName: 'Spleen',
    system: 'gastrointestinal',
    structureId: 'lymphatic-spleen',
    innervation: {
      sympatheticLevels: ['T6', 'T7', 'T8'],
      afferentPathway: 'Splenic plexus → celiac plexus → T6-T8',
      centralProcessing: 'Diaphragmatic irritation (phrenic C3-C5) causes Kehr sign',
    },
    commonConditions: ['Splenic rupture', 'Splenic infarct', 'Splenomegaly'],
  }],
]);

/**
 * Referred pain patterns with full visualization data
 */
export const referredPainPatterns: Map<string, ReferredPainPattern> = new Map([
  ['cardiac-referred-pain', {
    patternId: 'cardiac-referred-pain',
    sourceName: 'Cardiac Referred Pain',
    sourceOrgan: visceralPainSources.get('heart')!,
    referralRegions: [
      {
        region: 'arm-left',
        likelihood: 'classic',
        description: 'Left arm, especially ulnar distribution',
        highlightColor: '#E74C3C',
      },
      {
        region: 'jaw',
        likelihood: 'common',
        description: 'Lower jaw, may be mistaken for dental pain',
        highlightColor: '#E74C3C',
      },
      {
        region: 'shoulder-left',
        likelihood: 'common',
        description: 'Left shoulder and upper back',
        highlightColor: '#E74C3C',
      },
      {
        region: 'chest-anterior',
        likelihood: 'classic',
        description: 'Substernal pressure, may radiate across chest',
        highlightColor: '#C0392B',
      },
      {
        region: 'epigastrium',
        likelihood: 'variant',
        description: 'Epigastric discomfort, may mimic indigestion',
        highlightColor: '#E74C3C',
      },
      {
        region: 'arm-right',
        likelihood: 'variant',
        description: 'Right arm involvement (less common)',
        highlightColor: '#E74C3C',
      },
    ],
    dermatomalBasis: ['T1', 'T2', 'T3', 'T4', 'T5', 'C8'],
    mechanism: {
      theory: 'Convergence-Projection Theory',
      convergencePoint: 'T1-T5 dorsal horn neurons',
      somaticDermatomes: ['T1', 'T2', 'C8'],
      visceralDermatomes: ['T1', 'T2', 'T3', 'T4', 'T5'],
      centralMisinterpretation: 'Brain interprets visceral cardiac afferents as originating from somatic T1-T2/C8 dermatomes (arm, chest wall)',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Heart (ischemic myocardium)',
          structureId: 'cardiovascular-heart',
          action: 'Ischemia releases adenosine, bradykinin, stimulating cardiac nociceptors',
          highlightColor: '#E74C3C',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Cardiac plexus',
          structureId: 'nervous-cardiac-plexus',
          action: 'Visceral afferent signals travel via cardiac nerves',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Sympathetic chain (T1-T5)',
          structureId: 'nervous-sympathetic-chain',
          action: 'Signals ascend via sympathetic afferents',
          highlightColor: '#F1C40F',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Dorsal horn (T1-T5)',
          structureId: 'nervous-spinal-cord',
          action: 'Visceral afferents converge with somatic afferents from arm/chest',
          highlightColor: '#2ECC71',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Spinothalamic tract',
          structureId: 'nervous-spinal-cord',
          action: 'Second-order neurons cross and ascend',
          highlightColor: '#3498DB',
          duration: 1500,
        },
        {
          stepNumber: 6,
          structure: 'Thalamus',
          structureId: 'nervous-thalamus',
          action: 'Pain signals relay to somatosensory cortex',
          highlightColor: '#9B59B6',
          duration: 1500,
        },
        {
          stepNumber: 7,
          structure: 'Somatosensory cortex',
          structureId: 'nervous-cerebral-cortex',
          action: 'Brain misinterprets visceral input as arm/jaw pain',
          highlightColor: '#E74C3C',
          duration: 2000,
        },
      ],
      totalDuration: 12000,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Pressure', 'Squeezing', 'Tightness', 'Heaviness'],
      intensity: 'Severe, often described as "elephant sitting on chest"',
      timing: 'Minutes to hours; relieved by rest or nitroglycerin in angina',
      aggravatingFactors: ['Exertion', 'Emotional stress', 'Cold weather', 'Heavy meals'],
      relievingFactors: ['Rest', 'Nitroglycerin', 'Sitting up (if pericarditis)'],
      associatedSymptoms: ['Dyspnea', 'Diaphoresis', 'Nausea', 'Lightheadedness'],
      typicalPatient: 'Middle-aged to elderly with cardiac risk factors',
    },
    explanations: {
      level1: 'When your heart hurts, you might feel pain in your arm or jaw instead of your chest. This happens because the nerves get confused about where the pain is coming from.',
      level2: 'Heart pain often feels like pain in your left arm, jaw, or shoulder. This is called referred pain - the heart shares nerve connections with these body parts, so your brain has trouble telling exactly where the pain started.',
      level3: 'Cardiac referred pain occurs because visceral afferents from the heart enter the spinal cord at the same levels (T1-T5) as somatic nerves from the arm and chest wall. When the brain receives these overlapping signals, it interprets the pain as coming from the skin and muscles rather than the heart.',
      level4: 'The convergence-projection theory explains cardiac referred pain: visceral afferents from the heart travel via the cardiac plexus and sympathetic chain to synapse in the T1-T5 dorsal horn. These second-order neurons also receive input from somatic afferents of the corresponding dermatomes (arm, chest). Because somatic input is more common, the cortex interprets the signal as originating from the arm or jaw.',
      level5: 'Cardiac nociceptors are stimulated by ischemia-induced release of adenosine, bradykinin, and prostaglandins. These unmyelinated C-fiber afferents travel via the cardiac plexus through cervical and thoracic sympathetic ganglia to reach dorsal horn laminae I and V at T1-T5. Convergence with somatic afferents from C8-T2 dermatomes (medial arm, chest wall) results in cross-modal referral. The relatively sparse representation of visceral afferents in the somatotopic cortex, compared to the well-defined representation of somatic structures, underlies the brain\'s tendency to attribute the pain to cutaneous sources.',
    },
  }],

  ['gallbladder-referred-pain', {
    patternId: 'gallbladder-referred-pain',
    sourceName: 'Gallbladder Referred Pain',
    sourceOrgan: visceralPainSources.get('gallbladder')!,
    referralRegions: [
      {
        region: 'right-upper-quadrant',
        likelihood: 'classic',
        description: 'Right upper abdominal pain, worse after fatty meals',
        highlightColor: '#27AE60',
      },
      {
        region: 'shoulder-right',
        likelihood: 'classic',
        description: 'Right shoulder tip (scapular) pain',
        highlightColor: '#27AE60',
      },
      {
        region: 'epigastrium',
        likelihood: 'common',
        description: 'Epigastric discomfort radiating rightward',
        highlightColor: '#2ECC71',
      },
      {
        region: 'back-mid',
        likelihood: 'common',
        description: 'Infrascapular back pain on the right',
        highlightColor: '#27AE60',
      },
    ],
    dermatomalBasis: ['T7', 'T8', 'T9', 'C4'],
    mechanism: {
      theory: 'Convergence-Projection Theory',
      convergencePoint: 'T7-T9 dorsal horn, plus phrenic (C3-C5) if diaphragm irritated',
      somaticDermatomes: ['T7', 'T8', 'T9'],
      visceralDermatomes: ['T7', 'T8', 'T9'],
      centralMisinterpretation: 'Biliary visceral afferents are interpreted as T7-T9 somatic pain; diaphragmatic irritation refers to shoulder via phrenic nerve',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Gallbladder (distended/inflamed)',
          structureId: 'digestive-gallbladder',
          action: 'Distension or inflammation activates visceral nociceptors',
          highlightColor: '#27AE60',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Greater splanchnic nerve',
          structureId: 'nervous-splanchnic-nerves',
          action: 'Afferent signals travel via splanchnic nerves',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Celiac plexus',
          structureId: 'nervous-celiac-plexus',
          action: 'Signals pass through celiac ganglion',
          highlightColor: '#F1C40F',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Dorsal horn (T7-T9)',
          structureId: 'nervous-spinal-cord',
          action: 'Convergence with abdominal wall somatic afferents',
          highlightColor: '#2ECC71',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Phrenic nerve (if diaphragm irritated)',
          structureId: 'nervous-phrenic-nerve',
          action: 'Inflammation spreading to diaphragm sends signals via C3-C5',
          highlightColor: '#3498DB',
          duration: 1500,
        },
        {
          stepNumber: 6,
          structure: 'Shoulder (referred)',
          structureId: 'musculoskeletal-shoulder',
          action: 'Phrenic afferents cause shoulder tip pain',
          highlightColor: '#27AE60',
          duration: 2000,
        },
      ],
      totalDuration: 10500,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Colicky', 'Cramping', 'Steady ache'],
      intensity: 'Moderate to severe, often crescendo',
      timing: '30 minutes to several hours, often postprandial',
      aggravatingFactors: ['Fatty foods', 'Large meals', 'Night time'],
      relievingFactors: ['Vomiting (sometimes)', 'Analgesics', 'Stone passage'],
      associatedSymptoms: ['Nausea', 'Vomiting', 'Fever (if cholecystitis)', 'Jaundice (if CBD obstruction)'],
      typicalPatient: 'Female, forties, fertile, family history ("Four Fs")',
    },
    explanations: {
      level1: 'When your gallbladder hurts, you might feel pain in your right shoulder or upper belly. The gallbladder shares nerve signals with these areas.',
      level2: 'Gallbladder pain is often felt in the upper right abdomen and can travel to the right shoulder blade area. This referred pain happens because the gallbladder and shoulder share some of the same nerve pathways.',
      level3: 'Biliary colic causes referred pain through two mechanisms: (1) T7-T9 dermatomal referral to the right upper quadrant and epigastrium, and (2) phrenic nerve referral to the right shoulder when inflammation irritates the diaphragm. This explains why cholecystitis often presents with shoulder tip pain.',
      level4: 'Gallbladder visceral afferents travel via the greater splanchnic nerve to the T7-T9 spinal segments, where they converge with somatic afferents from the abdominal wall. When inflammation extends to the parietal peritoneum or diaphragm, the phrenic nerve (C3-C5) carries additional signals that are referred to the shoulder tip (C4 dermatome). Murphy\'s sign tests for local peritoneal irritation.',
      level5: 'Biliary nociception involves mechanosensitive and chemosensitive afferents responding to gallbladder distension (>20 mmHg pressure) and inflammatory mediators. Visceral afferents course through the celiac plexus to enter the spinal cord via greater splanchnic nerve rami at T7-T9. Wide dynamic range neurons in lamina V receive convergent input from A-delta and C-fibers of both visceral and somatic origin. Diaphragmatic referral (Kehr\'s sign) occurs when inflammatory exudate or blood irritates the central diaphragm, stimulating phrenic afferents that share spinal segments with the C4 shoulder dermatome.',
    },
  }],

  ['diaphragm-referred-pain', {
    patternId: 'diaphragm-referred-pain',
    sourceName: 'Diaphragmatic Referred Pain (Kehr\'s Sign)',
    sourceOrgan: visceralPainSources.get('diaphragm-central')!,
    referralRegions: [
      {
        region: 'shoulder-left',
        likelihood: 'classic',
        description: 'Left shoulder tip pain (Kehr\'s sign - splenic injury)',
        highlightColor: '#9B59B6',
      },
      {
        region: 'shoulder-right',
        likelihood: 'classic',
        description: 'Right shoulder tip pain (liver injury, subphrenic abscess)',
        highlightColor: '#9B59B6',
      },
      {
        region: 'neck',
        likelihood: 'common',
        description: 'Neck and supraclavicular pain',
        highlightColor: '#8E44AD',
      },
    ],
    dermatomalBasis: ['C3', 'C4', 'C5'],
    mechanism: {
      theory: 'Phrenic Nerve Referral',
      convergencePoint: 'C3-C5 dorsal horn neurons',
      somaticDermatomes: ['C3', 'C4', 'C5'],
      visceralDermatomes: ['C3', 'C4', 'C5'],
      centralMisinterpretation: 'Phrenic afferents from diaphragm share C3-C5 with shoulder and neck dermatomes',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Diaphragm (central tendon)',
          structureId: 'respiratory-diaphragm',
          action: 'Blood, pus, or air irritates the central diaphragm',
          highlightColor: '#9B59B6',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Phrenic nerve',
          structureId: 'nervous-phrenic-nerve',
          action: 'Afferent signals travel via phrenic nerve',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Cervical spinal cord (C3-C5)',
          structureId: 'nervous-spinal-cord',
          action: 'Phrenic afferents enter dorsal horn at C3-C5',
          highlightColor: '#2ECC71',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Dorsal horn convergence',
          structureId: 'nervous-spinal-cord',
          action: 'Convergence with shoulder dermatome afferents',
          highlightColor: '#3498DB',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Shoulder (referred)',
          structureId: 'musculoskeletal-shoulder',
          action: 'Brain perceives pain at shoulder tip',
          highlightColor: '#9B59B6',
          duration: 2000,
        },
      ],
      totalDuration: 9000,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Sharp', 'Aching', 'Referred'],
      intensity: 'Variable, may be severe with acute injury',
      timing: 'Often worsens when lying flat (blood pools under diaphragm)',
      aggravatingFactors: ['Supine position', 'Deep inspiration', 'Trendelenburg position'],
      relievingFactors: ['Sitting up', 'Upright position'],
      associatedSymptoms: ['Abdominal pain', 'Signs of blood loss', 'Fever (if abscess)'],
      typicalPatient: 'Trauma patient, post-operative patient, or splenic pathology',
    },
    explanations: {
      level1: 'When something irritates the bottom of your lungs (the diaphragm), you might feel pain in your shoulder instead. This is because they share the same nerve.',
      level2: 'Kehr\'s sign is shoulder tip pain caused by irritation of the diaphragm muscle. The diaphragm and shoulder share the phrenic nerve, so your brain can get confused about where the pain is coming from. This can happen after an injury to organs near the diaphragm.',
      level3: 'The phrenic nerve (C3-C5) provides sensory innervation to the central diaphragm. When blood, pus, or air irritates this area, the brain often interprets the signal as originating from the shoulder (C4 dermatome). Kehr\'s sign - left shoulder pain worsening when supine - is a classic indicator of splenic rupture.',
      level4: 'Phrenic afferents carrying nociceptive information from the central diaphragm synapse in the C3-C5 dorsal horn, where they converge with somatic afferents from the shoulder and neck. This convergence-projection phenomenon causes shoulder tip pain when the diaphragm is irritated by hemoperitoneum (Kehr\'s sign), subphrenic abscess, or pneumoperitoneum. Right shoulder pain suggests right hemidiaphragm irritation (liver injury, subphrenic abscess).',
      level5: 'The embryological migration of the diaphragm from cervical somites (C3-C5) during development explains why its sensory innervation originates from the cervical plexus via the phrenic nerve rather than from segmentally adjacent thoracic nerves. Phrenic afferents are primarily C-fibers that respond to mechanical distension and chemical irritation. Central convergence with second-order neurons receiving A-delta input from the C4 dermatome (acromial region) results in the classic referral pattern. Positive Kehr\'s sign has high specificity (>90%) for hemoperitoneum but variable sensitivity depending on the volume of blood.',
    },
  }],

  ['appendix-referred-pain', {
    patternId: 'appendix-referred-pain',
    sourceName: 'Appendiceal Referred Pain',
    sourceOrgan: visceralPainSources.get('appendix')!,
    referralRegions: [
      {
        region: 'periumbilical',
        likelihood: 'classic',
        description: 'Initial vague periumbilical pain (visceral)',
        highlightColor: '#E67E22',
      },
      {
        region: 'right-lower-quadrant',
        likelihood: 'classic',
        description: 'Later localizes to RLQ (somatic - parietal peritoneum)',
        highlightColor: '#D35400',
      },
    ],
    dermatomalBasis: ['T10'],
    mechanism: {
      theory: 'Visceral to Somatic Pain Migration',
      convergencePoint: 'T10 dorsal horn initially, then local somatic afferents',
      somaticDermatomes: ['T10', 'T11', 'T12'],
      visceralDermatomes: ['T10'],
      centralMisinterpretation: 'Early T10 visceral referral (umbilicus); inflammation involving parietal peritoneum causes localized RLQ somatic pain',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Appendix (obstructed/inflamed)',
          structureId: 'digestive-appendix',
          action: 'Obstruction causes distension and visceral pain',
          highlightColor: '#E67E22',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Lesser splanchnic nerve',
          structureId: 'nervous-splanchnic-nerves',
          action: 'Visceral afferents travel to T10 segment',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Dorsal horn (T10)',
          structureId: 'nervous-spinal-cord',
          action: 'Convergence with umbilical dermatome afferents',
          highlightColor: '#2ECC71',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Periumbilical region (referred)',
          structureId: 'integumentary-abdomen',
          action: 'Early vague pain around umbilicus',
          highlightColor: '#F1C40F',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Parietal peritoneum (inflamed)',
          structureId: 'digestive-peritoneum',
          action: 'Inflammation spreads to involve somatic afferents',
          highlightColor: '#E74C3C',
          duration: 1500,
        },
        {
          stepNumber: 6,
          structure: 'Right lower quadrant (somatic)',
          structureId: 'integumentary-abdomen',
          action: 'Pain localizes to RLQ at McBurney\'s point',
          highlightColor: '#D35400',
          duration: 2000,
        },
      ],
      totalDuration: 10500,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Vague', 'Crampy (early)', 'Sharp', 'Well-localized (late)'],
      intensity: 'Mild to moderate initially, progressing to severe',
      timing: 'Classic sequence over 12-24 hours: periumbilical → RLQ',
      aggravatingFactors: ['Movement', 'Coughing', 'Jarring'],
      relievingFactors: ['Lying still', 'Flexing hip'],
      associatedSymptoms: ['Anorexia', 'Nausea', 'Low-grade fever', 'Rebound tenderness'],
      typicalPatient: 'Young adult, peak age 10-30 years',
    },
    explanations: {
      level1: 'Appendix pain starts around your belly button and then moves to your lower right side. This happens because the pain signals take different paths as the problem gets worse.',
      level2: 'Early appendicitis causes vague pain around the belly button because the appendix sends signals to the same nerve level (T10) as the umbilicus. As inflammation spreads to the abdominal lining, the pain moves and becomes sharp in the right lower abdomen.',
      level3: 'The classic migration of appendicitis pain reflects two distinct pain pathways: (1) Initial visceral pain from appendiceal distension refers to the T10 dermatome (periumbilical), and (2) later somatic pain occurs when inflammation involves the parietal peritoneum, activating local somatic afferents that precisely localize to McBurney\'s point.',
      level4: 'Appendiceal visceral afferents travel with sympathetic fibers through the superior mesenteric plexus to enter the spinal cord at T10, causing referred periumbilical pain. This poorly localized pain reflects the sparse visceral representation in the somatosensory cortex. When transmural inflammation involves the parietal peritoneum, A-delta fibers carry sharp, well-localized somatic pain to the RLQ. This visceral-to-somatic progression is pathognomonic for appendicitis.',
      level5: 'Appendiceal obstruction (fecalith, lymphoid hyperplasia) increases intraluminal pressure, stimulating mechanosensitive visceral afferents that course with sympathetic fibers through the mesenteric plexus to T10 dorsal horn. Wide dynamic range neurons in lamina V receive convergent input from T10 dermatome, causing periumbilical referral. As bacterial proliferation and inflammatory mediators (IL-1, TNF-alpha, PGE2) cause transmural inflammation reaching the serosa, parietal peritoneal nociceptors (A-delta fibers from intercostal nerves T11-L1) provide precise somatotopic localization. Rovsing\'s sign, psoas sign, and obturator sign test for peritoneal irritation via muscle stretch.',
    },
  }],

  ['renal-ureteral-referred-pain', {
    patternId: 'renal-ureteral-referred-pain',
    sourceName: 'Renal/Ureteral Colic Referred Pain',
    sourceOrgan: visceralPainSources.get('ureter')!,
    referralRegions: [
      {
        region: 'flank-left',
        likelihood: 'classic',
        description: 'Flank pain (costovertebral angle)',
        highlightColor: '#3498DB',
      },
      {
        region: 'flank-right',
        likelihood: 'classic',
        description: 'Flank pain (costovertebral angle)',
        highlightColor: '#3498DB',
      },
      {
        region: 'groin-left',
        likelihood: 'classic',
        description: 'Groin pain as stone descends',
        highlightColor: '#2980B9',
      },
      {
        region: 'groin-right',
        likelihood: 'classic',
        description: 'Groin pain as stone descends',
        highlightColor: '#2980B9',
      },
    ],
    dermatomalBasis: ['T10', 'T11', 'T12', 'L1', 'L2'],
    mechanism: {
      theory: 'Migratory Dermatomal Referral',
      convergencePoint: 'T10-L2 dorsal horn, migrating as stone moves',
      somaticDermatomes: ['T10', 'T11', 'T12', 'L1', 'L2'],
      visceralDermatomes: ['T10', 'T11', 'T12', 'L1', 'L2'],
      centralMisinterpretation: 'Ureteral pain follows a dermatomal pattern from flank to groin as the stone descends',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Renal pelvis/Ureter (obstructed)',
          structureId: 'urinary-ureter',
          action: 'Stone causes acute obstruction and ureteral spasm',
          highlightColor: '#3498DB',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Renal plexus afferents',
          structureId: 'nervous-renal-plexus',
          action: 'Visceral afferents activated by distension',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Dorsal horn (T10-L2)',
          structureId: 'nervous-spinal-cord',
          action: 'Signals enter at multiple spinal levels',
          highlightColor: '#2ECC71',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Flank (referred - upper ureter)',
          structureId: 'integumentary-flank',
          action: 'T10-T11 referral causes CVA tenderness',
          highlightColor: '#3498DB',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Lower abdomen (mid-ureter)',
          structureId: 'integumentary-abdomen',
          action: 'T12-L1 referral as stone descends',
          highlightColor: '#2980B9',
          duration: 1500,
        },
        {
          stepNumber: 6,
          structure: 'Groin/genitalia (referred - lower ureter)',
          structureId: 'integumentary-groin',
          action: 'L1-L2 referral to groin, labia/testicle',
          highlightColor: '#1E3A5F',
          duration: 2000,
        },
      ],
      totalDuration: 10500,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Colicky', 'Severe', 'Cramping', 'Waves of pain'],
      intensity: 'Often described as the worst pain ever experienced',
      timing: 'Comes in waves lasting 20-60 minutes',
      aggravatingFactors: ['Fluid intake', 'Activity'],
      relievingFactors: ['NSAIDs', 'Opioids', 'Stone passage'],
      associatedSymptoms: ['Hematuria', 'Nausea', 'Vomiting', 'Urinary urgency'],
      typicalPatient: 'Middle-aged male, often with dehydration or dietary risk factors',
    },
    explanations: {
      level1: 'Kidney stone pain starts in your back and moves down to your belly and groin area as the stone travels down. This is one of the most painful things you can experience.',
      level2: 'Renal colic pain follows the path of the ureter from the back (flank) to the front (groin). As the kidney stone moves down, the pain migrates too, because different sections of the ureter connect to different nerve levels.',
      level3: 'Ureteral colic produces referred pain that migrates with the stone: renal pelvis obstruction causes flank pain (T10-T11), mid-ureter obstruction causes lateral abdominal pain (T12), and lower ureter/UV junction obstruction causes groin and genital pain (L1-L2). This dermatomal migration pattern helps localize the stone.',
      level4: 'Acute ureteral obstruction causes violent smooth muscle spasm and elevated intraluminal pressure, stimulating mechanosensitive and stretch-activated nociceptors. Afferents travel via the renal and ureteric plexuses to enter the spinal cord at T10-L2. The sequential dermatomal referral pattern (flank → abdomen → groin) correlates with stone position. Genitofemoral nerve (L1-L2) involvement causes testicular or labial pain. The intensity reflects the lack of central inhibition of visceral pain signals.',
      level5: 'Ureteral obstruction generates intraluminal pressures up to 70 mmHg, activating high-threshold mechanosensitive afferents including TRPV1 and ASIC channels in ureteral mucosa. Visceral afferents course through the inferior hypogastric plexus to reach dorsal horn laminae I and V at T10-L2 in a somatotopic pattern: proximal ureter (T10-T11), mid-ureter (T12-L1), distal ureter and UVJ (L1-L2). The genital referral occurs via convergence with genitofemoral nerve afferents. Prostaglandin release (PGE2, PGF2α) sensitizes nociceptors, explaining NSAID efficacy. Stone-induced inflammation also activates C-fiber polymodal nociceptors, contributing to the severe pain intensity.',
    },
  }],

  ['pancreatic-referred-pain', {
    patternId: 'pancreatic-referred-pain',
    sourceName: 'Pancreatic Referred Pain',
    sourceOrgan: visceralPainSources.get('pancreas')!,
    referralRegions: [
      {
        region: 'epigastrium',
        likelihood: 'classic',
        description: 'Epigastric pain, often severe',
        highlightColor: '#8E44AD',
      },
      {
        region: 'back-mid',
        likelihood: 'classic',
        description: 'Pain radiating to the back (T10-T12)',
        highlightColor: '#9B59B6',
      },
      {
        region: 'left-upper-quadrant',
        likelihood: 'common',
        description: 'Left upper quadrant involvement (tail of pancreas)',
        highlightColor: '#8E44AD',
      },
    ],
    dermatomalBasis: ['T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
    mechanism: {
      theory: 'Retroperitoneal Referral Pattern',
      convergencePoint: 'T5-T10 dorsal horn via splanchnic nerves',
      somaticDermatomes: ['T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
      visceralDermatomes: ['T5', 'T6', 'T7', 'T8', 'T9'],
      centralMisinterpretation: 'Retroperitoneal location causes posterior referral; wide innervation causes band-like epigastric pain',
    },
    pathway: {
      steps: [
        {
          stepNumber: 1,
          structure: 'Pancreas (inflamed)',
          structureId: 'digestive-pancreas',
          action: 'Autodigestion causes intense visceral pain',
          highlightColor: '#8E44AD',
          duration: 2000,
        },
        {
          stepNumber: 2,
          structure: 'Splanchnic nerves (greater & lesser)',
          structureId: 'nervous-splanchnic-nerves',
          action: 'Afferents travel via celiac plexus',
          highlightColor: '#F39C12',
          duration: 1500,
        },
        {
          stepNumber: 3,
          structure: 'Celiac plexus',
          structureId: 'nervous-celiac-plexus',
          action: 'Major relay point for pancreatic pain',
          highlightColor: '#F1C40F',
          duration: 1500,
        },
        {
          stepNumber: 4,
          structure: 'Dorsal horn (T5-T10)',
          structureId: 'nervous-spinal-cord',
          action: 'Convergence with epigastric and back dermatomes',
          highlightColor: '#2ECC71',
          duration: 2000,
        },
        {
          stepNumber: 5,
          structure: 'Epigastrium (referred)',
          structureId: 'integumentary-abdomen',
          action: 'Anterior referred pain in epigastric region',
          highlightColor: '#8E44AD',
          duration: 1500,
        },
        {
          stepNumber: 6,
          structure: 'Back (referred)',
          structureId: 'musculoskeletal-spine',
          action: 'Posterior referral due to retroperitoneal location',
          highlightColor: '#9B59B6',
          duration: 2000,
        },
      ],
      totalDuration: 10500,
      loopable: true,
    },
    clinicalCharacteristics: {
      quality: ['Boring', 'Constant', 'Severe', 'Penetrating'],
      intensity: 'Often excruciating, 10/10 on pain scale',
      timing: 'Constant, may last days; worse after eating',
      aggravatingFactors: ['Eating', 'Alcohol', 'Lying supine'],
      relievingFactors: ['Leaning forward', 'Fetal position', 'NPO status'],
      associatedSymptoms: ['Nausea', 'Vomiting', 'Fever', 'Ileus', 'Hypotension'],
      typicalPatient: 'Patient with gallstones or heavy alcohol use',
    },
    explanations: {
      level1: 'Pancreas pain is felt in your upper belly and also in your back. Bending forward often helps because it takes pressure off the pancreas.',
      level2: 'Pancreatitis causes severe pain in the upper abdomen that goes straight through to the back. The pancreas sits behind the stomach near the spine, so its pain often radiates posteriorly. Leaning forward can provide some relief.',
      level3: 'Pancreatic pain characteristically radiates to the back due to the retroperitoneal position of the pancreas. Visceral afferents travel via the splanchnic nerves to T5-T10, producing a band-like pattern of epigastric pain with posterior penetration. Relief with forward leaning (knee-chest position) occurs because it decreases tension on the retroperitoneal tissues.',
      level4: 'The pancreas receives dense sensory innervation via the celiac plexus from both greater and lesser splanchnic nerves (T5-T10). In acute pancreatitis, autodigestion and inflammatory mediators intensely stimulate visceral nociceptors. The retroperitoneal location means afferent signals enter posterior spinal segments, causing the characteristic band-like radiation to the back. Celiac plexus block can provide palliative analgesia in chronic pancreatitis and pancreatic cancer.',
      level5: 'Pancreatic nociception involves multiple inflammatory pathways: trypsin activation releases bradykinin and substance P; acinar cell necrosis releases ATP activating P2X purinergic receptors; ischemia from microvascular thrombosis stimulates TRPV1 channels. Visceral afferents (predominantly C-fibers) course through the celiac plexus, which contains ~50,000 neurons receiving convergent input from upper abdominal viscera. The T5-T10 dermatomal distribution creates the epigastric-to-back referral pattern. Chronic pancreatitis leads to neuroplastic changes including increased density of nociceptive fibers and central sensitization, explaining persistent pain even after inflammation resolves.',
    },
  }],
]);

/**
 * Educational content for pain referral patterns
 */
export const painReferralEducation: Map<string, PainReferralEducation> = new Map([
  ['cardiac-referred-pain', {
    patternId: 'cardiac-referred-pain',
    clinicalRelevance: 'Recognition of cardiac referred pain is critical for rapid MI diagnosis. Atypical presentations (jaw, epigastrium) may delay treatment.',
    diagnosticImportance: 'Left arm/jaw pain with chest discomfort highly specific for cardiac ischemia; epigastric presentation may mimic GI disease.',
    classicPresentation: 'Substernal pressure radiating to left arm and jaw, with diaphoresis and dyspnea.',
    atypicalPresentations: [
      {
        description: 'Isolated jaw or dental pain',
        population: 'Women, elderly, diabetics',
        frequency: '~20% of MIs in women',
        clinicalPearl: 'New jaw pain with exertion warrants cardiac workup',
      },
      {
        description: 'Epigastric discomfort only',
        population: 'Elderly, diabetics (neuropathy)',
        frequency: '~10% of acute coronary syndromes',
        clinicalPearl: '"Indigestion" unresponsive to antacids in cardiac risk patient needs ECG',
      },
      {
        description: 'Isolated dyspnea without chest pain',
        population: 'Elderly, women',
        frequency: '~15% of MIs',
        clinicalPearl: 'Sudden dyspnea in elderly may be "anginal equivalent"',
      },
    ],
    differentialConsiderations: ['GERD', 'Esophageal spasm', 'Costochondritis', 'Aortic dissection', 'Pulmonary embolism'],
    redFlags: ['Pain at rest >20 minutes', 'Associated diaphoresis', 'New heart failure symptoms', 'Hypotension'],
    relatedPatterns: ['diaphragm-referred-pain'],
  }],
  ['gallbladder-referred-pain', {
    patternId: 'gallbladder-referred-pain',
    clinicalRelevance: 'Right shoulder pain after fatty meals is classic for biliary disease; shoulder-only presentation may be missed.',
    diagnosticImportance: 'Shoulder tip pain (positive Kehr\'s sign) with RUQ pain strongly suggests hepatobiliary pathology.',
    classicPresentation: 'RUQ colicky pain after fatty meal, radiating to right scapula, with nausea.',
    atypicalPresentations: [
      {
        description: 'Isolated right shoulder pain',
        population: 'May occur without abdominal symptoms',
        frequency: 'Uncommon as sole symptom',
        clinicalPearl: 'Consider RUQ ultrasound if no orthopedic cause found',
      },
      {
        description: 'Epigastric pain only',
        population: 'Common variant',
        frequency: '~40% of biliary colic',
        clinicalPearl: 'May be mistaken for peptic ulcer disease',
      },
    ],
    differentialConsiderations: ['Peptic ulcer disease', 'Hepatitis', 'Pancreatitis', 'Right lower lobe pneumonia', 'Fitz-Hugh-Curtis syndrome'],
    redFlags: ['Fever >38.5°C', 'Jaundice', 'Palpable gallbladder', 'Peritoneal signs'],
    relatedPatterns: ['diaphragm-referred-pain', 'pancreatic-referred-pain'],
  }],
  ['diaphragm-referred-pain', {
    patternId: 'diaphragm-referred-pain',
    clinicalRelevance: 'Kehr\'s sign (left shoulder pain) in trauma patient is highly specific for splenic injury and hemoperitoneum.',
    diagnosticImportance: 'Shoulder tip pain following abdominal trauma or surgery suggests diaphragmatic irritation - urgent evaluation needed.',
    classicPresentation: 'Left shoulder tip pain worsening when supine, following blunt abdominal trauma.',
    atypicalPresentations: [
      {
        description: 'Right shoulder pain post-surgery',
        population: 'Post-laparoscopic surgery (CO2 irritation)',
        frequency: 'Common (50-80% post-laparoscopy)',
        clinicalPearl: 'Usually benign and self-limited; resolves in 24-48h',
      },
      {
        description: 'Bilateral shoulder pain',
        population: 'Large hemoperitoneum or pneumoperitoneum',
        frequency: 'Uncommon',
        clinicalPearl: 'Suggests significant intraperitoneal pathology',
      },
    ],
    differentialConsiderations: ['Rotator cuff injury', 'Cervical radiculopathy', 'Acute coronary syndrome', 'Pleural effusion'],
    redFlags: ['Hypotension', 'Tachycardia', 'History of trauma', 'Rigid abdomen'],
    relatedPatterns: ['cardiac-referred-pain', 'gallbladder-referred-pain'],
  }],
  ['appendix-referred-pain', {
    patternId: 'appendix-referred-pain',
    clinicalRelevance: 'The classic migration from periumbilical to RLQ pain is pathognomonic for appendicitis.',
    diagnosticImportance: 'Understanding the sequence helps differentiate appendicitis from other causes of abdominal pain.',
    classicPresentation: 'Periumbilical pain for 12-24h, then localizing to McBurney\'s point with anorexia and low-grade fever.',
    atypicalPresentations: [
      {
        description: 'Retrocecal appendix presentation',
        population: 'Any patient with retrocecal appendix (~30%)',
        frequency: 'Common anatomical variant',
        clinicalPearl: 'May present with flank or back pain; less peritoneal signs',
      },
      {
        description: 'Pelvic appendix presentation',
        population: 'Patients with pelvic appendix',
        frequency: '~5% of appendixes',
        clinicalPearl: 'May have suprapubic pain, urinary symptoms, or tenesmus',
      },
      {
        description: 'Pain starting in RLQ',
        population: 'Variable',
        frequency: 'Up to 50% skip periumbilical phase',
        clinicalPearl: 'Lack of migration doesn\'t rule out appendicitis',
      },
    ],
    differentialConsiderations: ['Mesenteric lymphadenitis', 'Meckel\'s diverticulum', 'Ovarian pathology', 'Ectopic pregnancy', 'Crohn\'s disease'],
    redFlags: ['Rebound tenderness', 'Guarding', 'High fever', 'Rigid abdomen'],
    relatedPatterns: ['renal-ureteral-referred-pain'],
  }],
  ['renal-ureteral-referred-pain', {
    patternId: 'renal-ureteral-referred-pain',
    clinicalRelevance: 'The migratory pattern of renal colic helps localize the stone and predict passage.',
    diagnosticImportance: 'Flank-to-groin migration with hematuria is classic for ureteral stone.',
    classicPresentation: 'Severe colicky flank pain radiating to groin, with hematuria and nausea.',
    atypicalPresentations: [
      {
        description: 'Testicular or labial pain only',
        population: 'Distal ureteral stone',
        frequency: 'Common with UVJ stones',
        clinicalPearl: 'Always consider ureteral stone in unexplained testicular pain with normal exam',
      },
      {
        description: 'Isolated flank pain',
        population: 'Renal pelvis or proximal ureteral stone',
        frequency: 'Common early presentation',
        clinicalPearl: 'May mimic musculoskeletal pain; check urinalysis',
      },
    ],
    differentialConsiderations: ['Pyelonephritis', 'Abdominal aortic aneurysm', 'Ovarian torsion', 'Appendicitis', 'Musculoskeletal strain'],
    redFlags: ['Fever (suggests infection)', 'Single kidney', 'Bilateral obstruction', 'Anuria'],
    relatedPatterns: ['appendix-referred-pain'],
  }],
  ['pancreatic-referred-pain', {
    patternId: 'pancreatic-referred-pain',
    clinicalRelevance: 'Back radiation and relief with forward leaning are key features distinguishing pancreatitis from other causes of epigastric pain.',
    diagnosticImportance: 'Band-like epigastric pain radiating to back suggests pancreatic origin.',
    classicPresentation: 'Severe epigastric pain boring through to the back, worse supine, better leaning forward.',
    atypicalPresentations: [
      {
        description: 'Isolated back pain',
        population: 'May occur in chronic pancreatitis',
        frequency: 'Uncommon as sole symptom',
        clinicalPearl: 'Check lipase in unexplained mid-back pain with GI risk factors',
      },
      {
        description: 'Left upper quadrant predominant',
        population: 'Tail of pancreas pathology',
        frequency: 'Anatomical variant presentation',
        clinicalPearl: 'May mimic splenic pathology',
      },
    ],
    differentialConsiderations: ['Peptic ulcer disease', 'Biliary colic', 'Abdominal aortic aneurysm', 'Mesenteric ischemia', 'Inferior MI'],
    redFlags: ['Cullen\'s sign (periumbilical ecchymosis)', 'Grey Turner\'s sign (flank ecchymosis)', 'Hypotension', 'Hypocalcemia'],
    relatedPatterns: ['gallbladder-referred-pain'],
  }],
]);

/**
 * Get all dermatome entries
 */
export function getAllDermatomes(): DermatomeMapEntry[] {
  return Array.from(dermatomeMap.values());
}

/**
 * Get dermatome by level
 */
export function getDermatome(level: DermatomeLevel): DermatomeMapEntry | undefined {
  return dermatomeMap.get(level);
}

/**
 * Get dermatomes for specific body region
 */
export function getDermatomesForRegion(region: string): DermatomeMapEntry[] {
  return Array.from(dermatomeMap.values()).filter((d) =>
    d.bodyRegions.includes(region as any)
  );
}

/**
 * Get all referred pain patterns
 */
export function getAllReferredPainPatterns(): ReferredPainPattern[] {
  return Array.from(referredPainPatterns.values());
}

/**
 * Get referred pain pattern by ID
 */
export function getReferredPainPattern(patternId: string): ReferredPainPattern | undefined {
  return referredPainPatterns.get(patternId);
}

/**
 * Get pain patterns by source organ
 */
export function getPainPatternsByOrgan(organId: string): ReferredPainPattern[] {
  return Array.from(referredPainPatterns.values()).filter(
    (p) => p.sourceOrgan.organId === organId
  );
}

/**
 * Get educational content for a pattern
 */
export function getPainReferralEducation(patternId: string): PainReferralEducation | undefined {
  return painReferralEducation.get(patternId);
}

/**
 * Create visualization state for a pattern
 */
export function createPainReferralVisualization(
  patternId: string
): PainReferralVisualization | null {
  const pattern = referredPainPatterns.get(patternId);
  if (!pattern) return null;

  return {
    activePattern: pattern,
    dermatomalOverlay: {
      dermatomes: pattern.dermatomalBasis.map((level) => dermatomeMap.get(level)!).filter(Boolean),
      displayMode: 'relevant-only',
      opacity: 0.6,
      selectedLevels: pattern.dermatomalBasis,
    },
    pathwayAnimation: {
      isPlaying: false,
      currentStep: 0,
      speed: 1.0,
    },
    sourceHighlight: {
      organId: pattern.sourceOrgan.structureId,
      color: '#E74C3C',
      opacity: 0.8,
    },
    referralHighlights: pattern.referralRegions,
  };
}

/**
 * Create explorer result for a pattern
 */
export function createPainReferralExplorerResult(
  patternId: string
): PainReferralExplorerResult | null {
  const pattern = referredPainPatterns.get(patternId);
  const education = painReferralEducation.get(patternId);
  if (!pattern || !education) return null;

  const dermatomes = pattern.dermatomalBasis
    .map((level) => dermatomeMap.get(level)!)
    .filter(Boolean);

  return {
    sourceOrgan: pattern.sourceOrgan.organName,
    referralPattern: pattern,
    dermatomalMap: dermatomes,
    educationalContent: education,
    animationPath: pattern.pathway,
    viewSettings: {
      cameraPosition: { x: 0, y: 0, z: 2.5 },
      showDermatomes: true,
      animationSpeed: 1.0,
    },
  };
}

/**
 * Get patterns that refer to a specific body region
 */
export function getPatternsReferringToRegion(region: string): ReferredPainPattern[] {
  return Array.from(referredPainPatterns.values()).filter((pattern) =>
    pattern.referralRegions.some((r) => r.region === region)
  );
}

/**
 * Educational disclaimer
 */
export const PAIN_REFERRAL_DISCLAIMER = `
This educational content about pain referral patterns is for informational purposes only
and does not constitute medical advice. Understanding referred pain patterns is important
for general health literacy, but any concerning symptoms should be evaluated by a
qualified healthcare provider. Do not use this information to self-diagnose or delay
seeking appropriate medical care.
`;
