/**
 * Body Region to Symptoms Mapping
 *
 * Maps body regions to their associated symptoms, anatomical structures,
 * and common conditions. Used for the interactive body map.
 */

import type { BodyRegion, SymptomCategory } from './types';

// ============================================
// Body Region Definitions
// ============================================

export interface BodyRegionInfo {
  id: BodyRegion;
  name: string;
  displayName: string;
  parentRegion?: BodyRegion;
  childRegions: BodyRegion[];
  anatomyIds: string[];
  systems: string[];
  commonSymptoms: RegionSymptom[];
  commonConditions: string[];
  examFindings: string[];
}

export interface RegionSymptom {
  symptomId: string;
  name: string;
  category: SymptomCategory;
  prevalence: 'very-common' | 'common' | 'uncommon' | 'rare';
  description: string;
}

// ============================================
// Head Region
// ============================================

export const HEAD_REGION: BodyRegionInfo = {
  id: 'head',
  name: 'head',
  displayName: 'Head',
  childRegions: ['face', 'eyes', 'ears', 'nose', 'mouth'],
  anatomyIds: ['brain', 'skull', 'scalp', 'meninges', 'cranial-nerves'],
  systems: ['nervous', 'musculoskeletal'],
  commonSymptoms: [
    {
      symptomId: 'headache',
      name: 'Headache',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain or discomfort in any part of the head',
    },
    {
      symptomId: 'migraine',
      name: 'Migraine',
      category: 'neurological',
      prevalence: 'common',
      description: 'Severe throbbing headache, often with nausea and light sensitivity',
    },
    {
      symptomId: 'dizziness',
      name: 'Dizziness',
      category: 'neurological',
      prevalence: 'common',
      description: 'Sensation of lightheadedness or unsteadiness',
    },
    {
      symptomId: 'vertigo',
      name: 'Vertigo',
      category: 'neurological',
      prevalence: 'common',
      description: 'Sensation of spinning or motion when stationary',
    },
    {
      symptomId: 'scalp-tenderness',
      name: 'Scalp Tenderness',
      category: 'pain',
      prevalence: 'uncommon',
      description: 'Sensitivity or pain in the scalp area',
    },
    {
      symptomId: 'head-injury',
      name: 'Head Trauma',
      category: 'pain',
      prevalence: 'uncommon',
      description: 'Injury to the head from impact or blow',
    },
  ],
  commonConditions: [
    'tension-headache', 'migraine', 'cluster-headache', 'concussion',
    'temporal-arteritis', 'brain-tumor', 'meningitis', 'sinusitis',
  ],
  examFindings: ['cranial-nerve-exam', 'fundoscopy', 'temporal-artery-palpation'],
};

// ============================================
// Face Region
// ============================================

export const FACE_REGION: BodyRegionInfo = {
  id: 'face',
  name: 'face',
  displayName: 'Face',
  parentRegion: 'head',
  childRegions: [],
  anatomyIds: ['facial-muscles', 'facial-nerve', 'trigeminal-nerve', 'maxilla', 'mandible'],
  systems: ['nervous', 'musculoskeletal'],
  commonSymptoms: [
    {
      symptomId: 'facial-pain',
      name: 'Facial Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in any part of the face',
    },
    {
      symptomId: 'facial-numbness',
      name: 'Facial Numbness',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Loss of sensation in the face',
    },
    {
      symptomId: 'facial-weakness',
      name: 'Facial Weakness',
      category: 'motor',
      prevalence: 'uncommon',
      description: 'Drooping or weakness on one side of the face',
    },
    {
      symptomId: 'jaw-pain',
      name: 'Jaw Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in the jaw joint or muscles',
    },
    {
      symptomId: 'facial-swelling',
      name: 'Facial Swelling',
      category: 'dermatological',
      prevalence: 'uncommon',
      description: 'Swelling in the face or around the eyes',
    },
  ],
  commonConditions: [
    'bells-palsy', 'tmj-disorder', 'trigeminal-neuralgia', 'sinusitis',
    'dental-infection', 'facial-cellulitis', 'stroke',
  ],
  examFindings: ['facial-symmetry', 'cranial-nerve-exam', 'jaw-opening'],
};

// ============================================
// Eyes Region
// ============================================

export const EYES_REGION: BodyRegionInfo = {
  id: 'eyes',
  name: 'eyes',
  displayName: 'Eyes',
  parentRegion: 'head',
  childRegions: [],
  anatomyIds: ['eye', 'retina', 'optic-nerve', 'cornea', 'lens', 'orbit'],
  systems: ['nervous', 'special-senses'],
  commonSymptoms: [
    {
      symptomId: 'eye-pain',
      name: 'Eye Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in or around the eye',
    },
    {
      symptomId: 'vision-changes',
      name: 'Vision Changes',
      category: 'sensory',
      prevalence: 'common',
      description: 'Any change in visual clarity or field',
    },
    {
      symptomId: 'blurred-vision',
      name: 'Blurred Vision',
      category: 'sensory',
      prevalence: 'very-common',
      description: 'Loss of sharpness of vision',
    },
    {
      symptomId: 'double-vision',
      name: 'Double Vision',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Seeing two images of a single object',
    },
    {
      symptomId: 'floaters',
      name: 'Floaters',
      category: 'sensory',
      prevalence: 'common',
      description: 'Small spots or threads in the visual field',
    },
    {
      symptomId: 'light-sensitivity',
      name: 'Light Sensitivity',
      category: 'sensory',
      prevalence: 'common',
      description: 'Discomfort in bright light (photophobia)',
    },
    {
      symptomId: 'red-eye',
      name: 'Red Eye',
      category: 'dermatological',
      prevalence: 'very-common',
      description: 'Redness of the white of the eye',
    },
    {
      symptomId: 'eye-discharge',
      name: 'Eye Discharge',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Discharge from the eye',
    },
  ],
  commonConditions: [
    'conjunctivitis', 'dry-eye', 'glaucoma', 'cataract', 'retinal-detachment',
    'macular-degeneration', 'uveitis', 'corneal-abrasion', 'orbital-cellulitis',
  ],
  examFindings: ['visual-acuity', 'pupil-exam', 'slit-lamp', 'fundoscopy', 'intraocular-pressure'],
};

// ============================================
// Ears Region
// ============================================

export const EARS_REGION: BodyRegionInfo = {
  id: 'ears',
  name: 'ears',
  displayName: 'Ears',
  parentRegion: 'head',
  childRegions: [],
  anatomyIds: ['external-ear', 'middle-ear', 'inner-ear', 'eardrum', 'auditory-nerve', 'vestibular-system'],
  systems: ['nervous', 'special-senses'],
  commonSymptoms: [
    {
      symptomId: 'ear-pain',
      name: 'Ear Pain',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain in or around the ear',
    },
    {
      symptomId: 'hearing-loss',
      name: 'Hearing Loss',
      category: 'sensory',
      prevalence: 'common',
      description: 'Reduction in ability to hear sounds',
    },
    {
      symptomId: 'tinnitus',
      name: 'Tinnitus',
      category: 'sensory',
      prevalence: 'common',
      description: 'Ringing or buzzing in the ears',
    },
    {
      symptomId: 'ear-fullness',
      name: 'Ear Fullness',
      category: 'sensory',
      prevalence: 'common',
      description: 'Sensation of pressure or fullness in the ear',
    },
    {
      symptomId: 'ear-discharge',
      name: 'Ear Discharge',
      category: 'dermatological',
      prevalence: 'uncommon',
      description: 'Fluid drainage from the ear',
    },
    {
      symptomId: 'vertigo',
      name: 'Vertigo',
      category: 'neurological',
      prevalence: 'common',
      description: 'Spinning sensation from inner ear problems',
    },
  ],
  commonConditions: [
    'otitis-media', 'otitis-externa', 'cerumen-impaction', 'menieres-disease',
    'bppv', 'vestibular-neuritis', 'acoustic-neuroma', 'eustachian-tube-dysfunction',
  ],
  examFindings: ['otoscopy', 'hearing-test', 'weber-test', 'rinne-test', 'dix-hallpike'],
};

// ============================================
// Nose Region
// ============================================

export const NOSE_REGION: BodyRegionInfo = {
  id: 'nose',
  name: 'nose',
  displayName: 'Nose',
  parentRegion: 'head',
  childRegions: [],
  anatomyIds: ['nasal-cavity', 'septum', 'turbinates', 'sinuses', 'olfactory-nerve'],
  systems: ['respiratory', 'special-senses'],
  commonSymptoms: [
    {
      symptomId: 'nasal-congestion',
      name: 'Nasal Congestion',
      category: 'respiratory',
      prevalence: 'very-common',
      description: 'Blocked or stuffy nose',
    },
    {
      symptomId: 'runny-nose',
      name: 'Runny Nose',
      category: 'respiratory',
      prevalence: 'very-common',
      description: 'Excess nasal discharge',
    },
    {
      symptomId: 'nosebleed',
      name: 'Nosebleed',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Bleeding from the nose',
    },
    {
      symptomId: 'loss-of-smell',
      name: 'Loss of Smell',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Reduced or absent sense of smell',
    },
    {
      symptomId: 'sinus-pressure',
      name: 'Sinus Pressure',
      category: 'pain',
      prevalence: 'common',
      description: 'Pressure or pain in the sinus areas',
    },
    {
      symptomId: 'postnasal-drip',
      name: 'Postnasal Drip',
      category: 'respiratory',
      prevalence: 'very-common',
      description: 'Mucus dripping down the back of the throat',
    },
  ],
  commonConditions: [
    'allergic-rhinitis', 'sinusitis', 'common-cold', 'nasal-polyps',
    'deviated-septum', 'epistaxis', 'nasal-fracture',
  ],
  examFindings: ['nasal-exam', 'sinus-tenderness', 'anterior-rhinoscopy'],
};

// ============================================
// Mouth/Throat Region
// ============================================

export const MOUTH_REGION: BodyRegionInfo = {
  id: 'mouth',
  name: 'mouth',
  displayName: 'Mouth',
  parentRegion: 'head',
  childRegions: [],
  anatomyIds: ['tongue', 'palate', 'teeth', 'gums', 'salivary-glands', 'tonsils'],
  systems: ['digestive', 'special-senses'],
  commonSymptoms: [
    {
      symptomId: 'mouth-pain',
      name: 'Mouth Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in the mouth, tongue, or gums',
    },
    {
      symptomId: 'toothache',
      name: 'Toothache',
      category: 'dental',
      prevalence: 'very-common',
      description: 'Pain in or around a tooth',
    },
    {
      symptomId: 'mouth-sores',
      name: 'Mouth Sores',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Ulcers or lesions in the mouth',
    },
    {
      symptomId: 'dry-mouth',
      name: 'Dry Mouth',
      category: 'sensory',
      prevalence: 'common',
      description: 'Reduced saliva production',
    },
    {
      symptomId: 'bad-breath',
      name: 'Bad Breath',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Unpleasant odor from the mouth',
    },
    {
      symptomId: 'taste-changes',
      name: 'Taste Changes',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Altered or absent sense of taste',
    },
    {
      symptomId: 'difficulty-swallowing',
      name: 'Difficulty Swallowing',
      category: 'gastrointestinal',
      prevalence: 'uncommon',
      description: 'Trouble swallowing food or liquids',
    },
  ],
  commonConditions: [
    'dental-caries', 'gingivitis', 'oral-thrush', 'aphthous-ulcers',
    'tonsillitis', 'oral-herpes', 'tmj-disorder', 'dry-mouth-syndrome',
  ],
  examFindings: ['oral-exam', 'dental-exam', 'tonsil-exam', 'tongue-exam'],
};

// ============================================
// Neck/Throat Region
// ============================================

export const NECK_REGION: BodyRegionInfo = {
  id: 'neck',
  name: 'neck',
  displayName: 'Neck',
  childRegions: ['throat'],
  anatomyIds: ['cervical-spine', 'thyroid', 'carotid-arteries', 'jugular-veins', 'lymph-nodes', 'esophagus', 'trachea'],
  systems: ['musculoskeletal', 'endocrine', 'lymphatic', 'digestive', 'respiratory'],
  commonSymptoms: [
    {
      symptomId: 'neck-pain',
      name: 'Neck Pain',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain in the neck area',
    },
    {
      symptomId: 'neck-stiffness',
      name: 'Neck Stiffness',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Limited range of motion in the neck',
    },
    {
      symptomId: 'swollen-lymph-nodes',
      name: 'Swollen Lymph Nodes',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Enlarged lymph nodes in the neck',
    },
    {
      symptomId: 'neck-lump',
      name: 'Neck Lump',
      category: 'dermatological',
      prevalence: 'uncommon',
      description: 'Mass or swelling in the neck',
    },
    {
      symptomId: 'throat-tightness',
      name: 'Throat Tightness',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Sensation of tightness in the throat',
    },
  ],
  commonConditions: [
    'cervical-strain', 'cervical-spondylosis', 'lymphadenopathy', 'thyroid-nodule',
    'thyroiditis', 'torticollis', 'cervical-radiculopathy', 'carotid-stenosis',
  ],
  examFindings: ['neck-rom', 'thyroid-exam', 'lymph-node-exam', 'carotid-auscultation'],
};

export const THROAT_REGION: BodyRegionInfo = {
  id: 'throat',
  name: 'throat',
  displayName: 'Throat',
  parentRegion: 'neck',
  childRegions: [],
  anatomyIds: ['pharynx', 'larynx', 'vocal-cords', 'epiglottis', 'tonsils'],
  systems: ['respiratory', 'digestive'],
  commonSymptoms: [
    {
      symptomId: 'sore-throat',
      name: 'Sore Throat',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain or irritation in the throat',
    },
    {
      symptomId: 'hoarseness',
      name: 'Hoarseness',
      category: 'respiratory',
      prevalence: 'common',
      description: 'Changes in voice quality',
    },
    {
      symptomId: 'difficulty-swallowing',
      name: 'Difficulty Swallowing',
      category: 'gastrointestinal',
      prevalence: 'uncommon',
      description: 'Trouble swallowing food or liquids',
    },
    {
      symptomId: 'lump-in-throat',
      name: 'Lump in Throat Sensation',
      category: 'sensory',
      prevalence: 'common',
      description: 'Feeling of something stuck in the throat',
    },
  ],
  commonConditions: [
    'pharyngitis', 'tonsillitis', 'strep-throat', 'laryngitis',
    'gerd', 'globus-sensation', 'epiglottitis', 'peritonsillar-abscess',
  ],
  examFindings: ['throat-exam', 'tonsil-exam', 'laryngoscopy'],
};

// ============================================
// Chest Region
// ============================================

export const CHEST_REGION: BodyRegionInfo = {
  id: 'chest',
  name: 'chest',
  displayName: 'Chest',
  childRegions: ['breast'],
  anatomyIds: ['heart', 'lungs', 'ribs', 'sternum', 'pectorals', 'esophagus', 'aorta', 'mediastinum'],
  systems: ['cardiovascular', 'respiratory', 'musculoskeletal', 'digestive'],
  commonSymptoms: [
    {
      symptomId: 'chest-pain',
      name: 'Chest Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain or discomfort in the chest area',
    },
    {
      symptomId: 'shortness-of-breath',
      name: 'Shortness of Breath',
      category: 'respiratory',
      prevalence: 'common',
      description: 'Difficulty breathing or feeling breathless',
    },
    {
      symptomId: 'palpitations',
      name: 'Palpitations',
      category: 'cardiac',
      prevalence: 'common',
      description: 'Awareness of heartbeat, racing, or skipping',
    },
    {
      symptomId: 'cough',
      name: 'Cough',
      category: 'respiratory',
      prevalence: 'very-common',
      description: 'Sudden expulsion of air from the lungs',
    },
    {
      symptomId: 'wheezing',
      name: 'Wheezing',
      category: 'respiratory',
      prevalence: 'common',
      description: 'High-pitched whistling sound when breathing',
    },
    {
      symptomId: 'chest-tightness',
      name: 'Chest Tightness',
      category: 'sensory',
      prevalence: 'common',
      description: 'Sensation of pressure or constriction in the chest',
    },
    {
      symptomId: 'heartburn',
      name: 'Heartburn',
      category: 'gastrointestinal',
      prevalence: 'very-common',
      description: 'Burning sensation in the chest from acid reflux',
    },
  ],
  commonConditions: [
    'angina', 'myocardial-infarction', 'pneumonia', 'bronchitis', 'asthma',
    'gerd', 'costochondritis', 'pulmonary-embolism', 'pneumothorax', 'pericarditis',
  ],
  examFindings: ['heart-sounds', 'lung-sounds', 'chest-palpation', 'pmi', 'jvp'],
};

// ============================================
// Back Regions
// ============================================

export const UPPER_BACK_REGION: BodyRegionInfo = {
  id: 'upper-back',
  name: 'upper-back',
  displayName: 'Upper Back',
  childRegions: [],
  anatomyIds: ['thoracic-spine', 'scapula', 'trapezius', 'rhomboids', 'paraspinal-muscles'],
  systems: ['musculoskeletal', 'nervous'],
  commonSymptoms: [
    {
      symptomId: 'upper-back-pain',
      name: 'Upper Back Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain between the shoulder blades or upper spine',
    },
    {
      symptomId: 'shoulder-blade-pain',
      name: 'Shoulder Blade Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain around or under the shoulder blades',
    },
    {
      symptomId: 'upper-back-stiffness',
      name: 'Upper Back Stiffness',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Tightness or limited movement in the upper back',
    },
  ],
  commonConditions: [
    'thoracic-strain', 'poor-posture-syndrome', 'thoracic-outlet-syndrome',
    'shingles', 'scoliosis', 'kyphosis',
  ],
  examFindings: ['spine-palpation', 'range-of-motion', 'neurologic-exam'],
};

export const MID_BACK_REGION: BodyRegionInfo = {
  id: 'mid-back',
  name: 'mid-back',
  displayName: 'Middle Back',
  childRegions: [],
  anatomyIds: ['thoracic-spine', 'paraspinal-muscles', 'intercostal-muscles'],
  systems: ['musculoskeletal', 'nervous'],
  commonSymptoms: [
    {
      symptomId: 'mid-back-pain',
      name: 'Middle Back Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in the middle portion of the back',
    },
  ],
  commonConditions: [
    'thoracic-strain', 'osteoarthritis', 'spinal-stenosis', 'compression-fracture',
  ],
  examFindings: ['spine-palpation', 'range-of-motion'],
};

export const LOWER_BACK_REGION: BodyRegionInfo = {
  id: 'lower-back',
  name: 'lower-back',
  displayName: 'Lower Back',
  childRegions: [],
  anatomyIds: ['lumbar-spine', 'sacrum', 'paraspinal-muscles', 'intervertebral-discs', 'spinal-nerves'],
  systems: ['musculoskeletal', 'nervous'],
  commonSymptoms: [
    {
      symptomId: 'lower-back-pain',
      name: 'Lower Back Pain',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain in the lower spine or lumbar region',
    },
    {
      symptomId: 'sciatica',
      name: 'Sciatica',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain radiating down the leg from the lower back',
    },
    {
      symptomId: 'leg-numbness',
      name: 'Leg Numbness',
      category: 'sensory',
      prevalence: 'uncommon',
      description: 'Numbness or tingling in the leg from back problem',
    },
    {
      symptomId: 'back-stiffness',
      name: 'Back Stiffness',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Difficulty bending or moving the lower back',
    },
  ],
  commonConditions: [
    'lumbar-strain', 'herniated-disc', 'degenerative-disc-disease', 'spinal-stenosis',
    'spondylolisthesis', 'sacroiliac-dysfunction', 'ankylosing-spondylitis',
  ],
  examFindings: ['straight-leg-raise', 'spine-palpation', 'neurologic-exam', 'gait-assessment'],
};

// ============================================
// Abdominal Regions
// ============================================

export const ABDOMEN_UPPER_REGION: BodyRegionInfo = {
  id: 'abdomen-upper',
  name: 'abdomen-upper',
  displayName: 'Upper Abdomen',
  childRegions: [],
  anatomyIds: ['stomach', 'liver', 'gallbladder', 'pancreas', 'spleen', 'duodenum'],
  systems: ['digestive', 'hepatobiliary'],
  commonSymptoms: [
    {
      symptomId: 'epigastric-pain',
      name: 'Upper Abdominal Pain',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Pain in the upper middle abdomen',
    },
    {
      symptomId: 'nausea',
      name: 'Nausea',
      category: 'gastrointestinal',
      prevalence: 'very-common',
      description: 'Feeling of wanting to vomit',
    },
    {
      symptomId: 'vomiting',
      name: 'Vomiting',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Forceful expulsion of stomach contents',
    },
    {
      symptomId: 'bloating',
      name: 'Bloating',
      category: 'gastrointestinal',
      prevalence: 'very-common',
      description: 'Feeling of fullness or swelling in the abdomen',
    },
    {
      symptomId: 'indigestion',
      name: 'Indigestion',
      category: 'gastrointestinal',
      prevalence: 'very-common',
      description: 'Discomfort after eating',
    },
  ],
  commonConditions: [
    'gastritis', 'peptic-ulcer', 'gerd', 'cholecystitis', 'pancreatitis',
    'hepatitis', 'gastroenteritis',
  ],
  examFindings: ['abdominal-palpation', 'murphy-sign', 'liver-percussion', 'bowel-sounds'],
};

export const ABDOMEN_LOWER_REGION: BodyRegionInfo = {
  id: 'abdomen-lower',
  name: 'abdomen-lower',
  displayName: 'Lower Abdomen',
  childRegions: [],
  anatomyIds: ['small-intestine', 'large-intestine', 'appendix', 'bladder', 'uterus', 'ovaries'],
  systems: ['digestive', 'urological', 'reproductive'],
  commonSymptoms: [
    {
      symptomId: 'lower-abdominal-pain',
      name: 'Lower Abdominal Pain',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Pain in the lower belly',
    },
    {
      symptomId: 'constipation',
      name: 'Constipation',
      category: 'gastrointestinal',
      prevalence: 'very-common',
      description: 'Difficulty passing stool or infrequent bowel movements',
    },
    {
      symptomId: 'diarrhea',
      name: 'Diarrhea',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Loose or watery stools',
    },
    {
      symptomId: 'abdominal-cramps',
      name: 'Abdominal Cramps',
      category: 'gastrointestinal',
      prevalence: 'common',
      description: 'Cramping pain in the abdomen',
    },
    {
      symptomId: 'urinary-symptoms',
      name: 'Urinary Symptoms',
      category: 'urological',
      prevalence: 'common',
      description: 'Frequent urination, burning, or urgency',
    },
  ],
  commonConditions: [
    'appendicitis', 'diverticulitis', 'ibs', 'ibd', 'uti',
    'kidney-stones', 'ovarian-cyst', 'ectopic-pregnancy',
  ],
  examFindings: ['abdominal-palpation', 'psoas-sign', 'obturator-sign', 'rebound-tenderness'],
};

// ============================================
// Extremity Regions
// ============================================

export const SHOULDER_REGION: BodyRegionInfo = {
  id: 'shoulder',
  name: 'shoulder',
  displayName: 'Shoulder',
  childRegions: [],
  anatomyIds: ['glenohumeral-joint', 'rotator-cuff', 'acromion', 'clavicle', 'deltoid', 'biceps'],
  systems: ['musculoskeletal'],
  commonSymptoms: [
    {
      symptomId: 'shoulder-pain',
      name: 'Shoulder Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in the shoulder joint or surrounding area',
    },
    {
      symptomId: 'shoulder-stiffness',
      name: 'Shoulder Stiffness',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Limited range of motion in the shoulder',
    },
    {
      symptomId: 'shoulder-weakness',
      name: 'Shoulder Weakness',
      category: 'motor',
      prevalence: 'uncommon',
      description: 'Reduced strength in the shoulder',
    },
  ],
  commonConditions: [
    'rotator-cuff-injury', 'frozen-shoulder', 'shoulder-impingement',
    'bursitis', 'arthritis', 'labral-tear', 'shoulder-dislocation',
  ],
  examFindings: ['shoulder-rom', 'rotator-cuff-tests', 'hawkins-test', 'neers-test'],
};

export const KNEE_REGION: BodyRegionInfo = {
  id: 'knee',
  name: 'knee',
  displayName: 'Knee',
  childRegions: [],
  anatomyIds: ['knee-joint', 'patella', 'meniscus', 'acl', 'pcl', 'mcl', 'lcl', 'quadriceps', 'hamstrings'],
  systems: ['musculoskeletal'],
  commonSymptoms: [
    {
      symptomId: 'knee-pain',
      name: 'Knee Pain',
      category: 'pain',
      prevalence: 'very-common',
      description: 'Pain in or around the knee joint',
    },
    {
      symptomId: 'knee-swelling',
      name: 'Knee Swelling',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Swelling in or around the knee',
    },
    {
      symptomId: 'knee-instability',
      name: 'Knee Instability',
      category: 'musculoskeletal',
      prevalence: 'uncommon',
      description: 'Feeling of the knee giving way',
    },
    {
      symptomId: 'knee-locking',
      name: 'Knee Locking',
      category: 'musculoskeletal',
      prevalence: 'uncommon',
      description: 'Knee catching or locking in position',
    },
  ],
  commonConditions: [
    'osteoarthritis', 'meniscus-tear', 'acl-tear', 'patellofemoral-syndrome',
    'bursitis', 'tendinitis', 'gout',
  ],
  examFindings: ['knee-rom', 'mcmurray-test', 'lachman-test', 'valgus-varus-stress'],
};

export const ANKLE_REGION: BodyRegionInfo = {
  id: 'ankle',
  name: 'ankle',
  displayName: 'Ankle',
  childRegions: [],
  anatomyIds: ['ankle-joint', 'talus', 'tibia', 'fibula', 'achilles-tendon', 'ankle-ligaments'],
  systems: ['musculoskeletal'],
  commonSymptoms: [
    {
      symptomId: 'ankle-pain',
      name: 'Ankle Pain',
      category: 'pain',
      prevalence: 'common',
      description: 'Pain in the ankle joint',
    },
    {
      symptomId: 'ankle-swelling',
      name: 'Ankle Swelling',
      category: 'musculoskeletal',
      prevalence: 'common',
      description: 'Swelling around the ankle',
    },
    {
      symptomId: 'ankle-instability',
      name: 'Ankle Instability',
      category: 'musculoskeletal',
      prevalence: 'uncommon',
      description: 'Ankle giving way or feeling unstable',
    },
  ],
  commonConditions: [
    'ankle-sprain', 'achilles-tendinitis', 'ankle-fracture',
    'osteoarthritis', 'gout', 'posterior-tibial-tendinitis',
  ],
  examFindings: ['ottawa-ankle-rules', 'anterior-drawer', 'squeeze-test'],
};

// ============================================
// General/Skin Region
// ============================================

export const SKIN_GENERAL_REGION: BodyRegionInfo = {
  id: 'skin-general',
  name: 'skin-general',
  displayName: 'Skin',
  childRegions: [],
  anatomyIds: ['epidermis', 'dermis', 'subcutaneous-tissue', 'hair-follicles', 'sweat-glands'],
  systems: ['integumentary'],
  commonSymptoms: [
    {
      symptomId: 'rash',
      name: 'Rash',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Area of irritated or swollen skin',
    },
    {
      symptomId: 'itching',
      name: 'Itching',
      category: 'dermatological',
      prevalence: 'very-common',
      description: 'Uncomfortable sensation causing desire to scratch',
    },
    {
      symptomId: 'hives',
      name: 'Hives',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Raised, itchy welts on the skin',
    },
    {
      symptomId: 'skin-lesion',
      name: 'Skin Lesion',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Any abnormal growth or area on the skin',
    },
    {
      symptomId: 'skin-color-change',
      name: 'Skin Color Change',
      category: 'dermatological',
      prevalence: 'common',
      description: 'Changes in skin pigmentation',
    },
    {
      symptomId: 'dry-skin',
      name: 'Dry Skin',
      category: 'dermatological',
      prevalence: 'very-common',
      description: 'Rough, scaly, or flaky skin',
    },
  ],
  commonConditions: [
    'eczema', 'psoriasis', 'contact-dermatitis', 'urticaria',
    'fungal-infection', 'cellulitis', 'acne', 'skin-cancer',
  ],
  examFindings: ['skin-inspection', 'lesion-description', 'dermoscopy'],
};

// ============================================
// Whole Body/Constitutional
// ============================================

export const WHOLE_BODY_REGION: BodyRegionInfo = {
  id: 'whole-body',
  name: 'whole-body',
  displayName: 'General/Whole Body',
  childRegions: [],
  anatomyIds: [],
  systems: ['systemic'],
  commonSymptoms: [
    {
      symptomId: 'fatigue',
      name: 'Fatigue',
      category: 'constitutional',
      prevalence: 'very-common',
      description: 'Persistent tiredness or exhaustion',
    },
    {
      symptomId: 'fever',
      name: 'Fever',
      category: 'constitutional',
      prevalence: 'common',
      description: 'Elevated body temperature',
    },
    {
      symptomId: 'chills',
      name: 'Chills',
      category: 'constitutional',
      prevalence: 'common',
      description: 'Feeling of cold with shivering',
    },
    {
      symptomId: 'night-sweats',
      name: 'Night Sweats',
      category: 'constitutional',
      prevalence: 'uncommon',
      description: 'Excessive sweating during sleep',
    },
    {
      symptomId: 'weight-loss',
      name: 'Unintentional Weight Loss',
      category: 'constitutional',
      prevalence: 'uncommon',
      description: 'Losing weight without trying',
    },
    {
      symptomId: 'weight-gain',
      name: 'Weight Gain',
      category: 'constitutional',
      prevalence: 'common',
      description: 'Gaining weight unexpectedly',
    },
    {
      symptomId: 'weakness',
      name: 'Generalized Weakness',
      category: 'motor',
      prevalence: 'common',
      description: 'Overall feeling of weakness',
    },
    {
      symptomId: 'malaise',
      name: 'Malaise',
      category: 'constitutional',
      prevalence: 'common',
      description: 'General feeling of being unwell',
    },
  ],
  commonConditions: [
    'viral-infection', 'anemia', 'thyroid-disorder', 'diabetes',
    'depression', 'chronic-fatigue', 'cancer', 'autoimmune-disease',
  ],
  examFindings: ['vital-signs', 'general-appearance', 'lymph-node-exam'],
};

// ============================================
// Complete Regions Map
// ============================================

export const BODY_REGIONS_MAP: Record<BodyRegion, BodyRegionInfo> = {
  'head': HEAD_REGION,
  'face': FACE_REGION,
  'eyes': EYES_REGION,
  'ears': EARS_REGION,
  'nose': NOSE_REGION,
  'mouth': MOUTH_REGION,
  'neck': NECK_REGION,
  'throat': THROAT_REGION,
  'chest': CHEST_REGION,
  'breast': { ...CHEST_REGION, id: 'breast', name: 'breast', displayName: 'Breast' },
  'upper-back': UPPER_BACK_REGION,
  'mid-back': MID_BACK_REGION,
  'lower-back': LOWER_BACK_REGION,
  'abdomen-upper': ABDOMEN_UPPER_REGION,
  'abdomen-lower': ABDOMEN_LOWER_REGION,
  'abdomen-right': { ...ABDOMEN_LOWER_REGION, id: 'abdomen-right', name: 'abdomen-right', displayName: 'Right Abdomen' },
  'abdomen-left': { ...ABDOMEN_LOWER_REGION, id: 'abdomen-left', name: 'abdomen-left', displayName: 'Left Abdomen' },
  'pelvis': { ...ABDOMEN_LOWER_REGION, id: 'pelvis', name: 'pelvis', displayName: 'Pelvis' },
  'groin': { ...ABDOMEN_LOWER_REGION, id: 'groin', name: 'groin', displayName: 'Groin' },
  'shoulder': SHOULDER_REGION,
  'upper-arm': { ...SHOULDER_REGION, id: 'upper-arm', name: 'upper-arm', displayName: 'Upper Arm' },
  'elbow': { ...SHOULDER_REGION, id: 'elbow', name: 'elbow', displayName: 'Elbow' },
  'forearm': { ...SHOULDER_REGION, id: 'forearm', name: 'forearm', displayName: 'Forearm' },
  'wrist': { ...SHOULDER_REGION, id: 'wrist', name: 'wrist', displayName: 'Wrist' },
  'hand': { ...SHOULDER_REGION, id: 'hand', name: 'hand', displayName: 'Hand' },
  'fingers': { ...SHOULDER_REGION, id: 'fingers', name: 'fingers', displayName: 'Fingers' },
  'hip': { ...KNEE_REGION, id: 'hip', name: 'hip', displayName: 'Hip' },
  'thigh': { ...KNEE_REGION, id: 'thigh', name: 'thigh', displayName: 'Thigh' },
  'knee': KNEE_REGION,
  'lower-leg': { ...ANKLE_REGION, id: 'lower-leg', name: 'lower-leg', displayName: 'Lower Leg' },
  'ankle': ANKLE_REGION,
  'foot': { ...ANKLE_REGION, id: 'foot', name: 'foot', displayName: 'Foot' },
  'toes': { ...ANKLE_REGION, id: 'toes', name: 'toes', displayName: 'Toes' },
  'skin-general': SKIN_GENERAL_REGION,
  'whole-body': WHOLE_BODY_REGION,
};

// ============================================
// Lookup Functions
// ============================================

/**
 * Get body region info
 */
export function getBodyRegionInfo(region: BodyRegion): BodyRegionInfo | undefined {
  return BODY_REGIONS_MAP[region];
}

/**
 * Get all symptoms for a body region
 */
export function getSymptomsForRegion(region: BodyRegion): RegionSymptom[] {
  const regionInfo = BODY_REGIONS_MAP[region];
  return regionInfo?.commonSymptoms || [];
}

/**
 * Get all conditions for a body region
 */
export function getConditionsForRegion(region: BodyRegion): string[] {
  const regionInfo = BODY_REGIONS_MAP[region];
  return regionInfo?.commonConditions || [];
}

/**
 * Get anatomy structures for a body region
 */
export function getAnatomyForRegion(region: BodyRegion): string[] {
  const regionInfo = BODY_REGIONS_MAP[region];
  return regionInfo?.anatomyIds || [];
}

/**
 * Get all body regions as array
 */
export function getAllBodyRegions(): BodyRegionInfo[] {
  return Object.values(BODY_REGIONS_MAP);
}

/**
 * Search symptoms across all regions
 */
export function searchSymptomsAcrossRegions(query: string): Array<{
  symptom: RegionSymptom;
  region: BodyRegion;
  regionName: string;
}> {
  const results: Array<{ symptom: RegionSymptom; region: BodyRegion; regionName: string }> = [];
  const lowerQuery = query.toLowerCase();

  for (const [region, info] of Object.entries(BODY_REGIONS_MAP)) {
    for (const symptom of info.commonSymptoms) {
      if (
        symptom.name.toLowerCase().includes(lowerQuery) ||
        symptom.description.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          symptom,
          region: region as BodyRegion,
          regionName: info.displayName,
        });
      }
    }
  }

  return results;
}
