/**
 * Clinical Pearls and High-Yield Content Store
 *
 * In-memory data store for clinical pearls, surgical landmarks,
 * physical exam correlations, and board exam high-yield content.
 */

import type {
  ClinicalPearl,
  SurgicalLandmark,
  PhysicalExamCorrelation,
  CommonExamQuestion,
  HighYieldFilter,
  ClinicalPearlsState,
} from './types';
import type { LearningBodySystem } from '../learning-progress/types';

/**
 * Sample clinical pearls
 */
export const sampleClinicalPearls: ClinicalPearl[] = [
  {
    pearlId: 'pearl-001',
    structureId: 'coronary-arteries',
    structureName: 'Coronary Arteries',
    system: 'cardiovascular',
    title: 'LAD Territory and "Widow Maker"',
    content:
      'The left anterior descending (LAD) artery supplies 45-55% of the left ventricular myocardium including the anterior wall, apex, and anterior 2/3 of the interventricular septum. Proximal LAD occlusion is called the "widow maker" due to high mortality.',
    clinicalContext:
      'ECG shows ST elevation in V1-V4 (anterior leads). Look for reciprocal ST depression in inferior leads. Proximal LAD occlusion may also cause RBBB and/or left anterior fascicular block.',
    relevanceCategories: ['pathology-site', 'imaging-correlation'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'very-common',
        questionTypes: ['ECG interpretation', 'Coronary anatomy'],
        sampleQuestion:
          'Which coronary artery occlusion causes ST elevation in leads V1-V4?',
        testingPoints: ['LAD territory', 'ECG lead correlation', 'Septal branches'],
      },
      {
        examType: 'USMLE-Step2',
        frequency: 'very-common',
        questionTypes: ['Clinical vignette', 'Management'],
        testingPoints: ['STEMI management', 'PCI indications', 'Complications'],
      },
    ],
    highYieldCategory: 'must-know',
    mnemonicTip:
      'LAD = "Left Anterior Descending" = Anterior wall + apex + Anterior septum',
    commonMistakes: [
      'Confusing LAD with LCx territory (lateral wall)',
      'Missing reciprocal changes in inferior leads',
      'Forgetting LAD supplies AV bundle branches',
    ],
    relatedPearls: ['pearl-002', 'pearl-003'],
    tags: ['coronary', 'MI', 'ECG', 'cardiology'],
    viewCount: 1250,
    helpfulCount: 1100,
  },
  {
    pearlId: 'pearl-002',
    structureId: 'brachial-plexus',
    structureName: 'Brachial Plexus',
    system: 'nervous',
    title: 'Erb-Duchenne vs Klumpke Palsy',
    content:
      'Upper trunk injury (C5-C6) causes Erb-Duchenne palsy with "waiter\'s tip" position (arm adducted, internally rotated, elbow extended, forearm pronated). Lower trunk injury (C8-T1) causes Klumpke palsy with "claw hand" and possible Horner syndrome.',
    clinicalContext:
      'Erb-Duchenne: common in shoulder dystocia, motorcycle accidents. Klumpke: sudden upward arm traction, birth injury with breech presentation. Both can occur with Pancoast tumor invasion.',
    relevanceCategories: ['pathology-site', 'physical-exam'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'very-common',
        questionTypes: ['Clinical vignette', 'Nerve injury'],
        sampleQuestion:
          'A newborn has arm adduction and internal rotation after difficult delivery. Which nerve roots are injured?',
        testingPoints: [
          'Root levels',
          'Motor deficits',
          'Mechanism of injury',
          'Associated findings',
        ],
      },
    ],
    highYieldCategory: 'frequently-tested',
    mnemonicTip:
      '"ERBs wait for tips" (waiter\'s tip = Erb), "KLUMPKE KLaw" (claw hand = Klumpke)',
    commonMistakes: [
      'Mixing up upper vs lower trunk injuries',
      'Forgetting Horner syndrome with Klumpke (T1 sympathetics)',
      'Missing winged scapula (long thoracic nerve, C5-7)',
    ],
    relatedPearls: ['pearl-004'],
    tags: ['brachial-plexus', 'nerve-injury', 'birth-trauma', 'neurology'],
    viewCount: 980,
    helpfulCount: 920,
  },
  {
    pearlId: 'pearl-003',
    structureId: 'circle-of-willis',
    structureName: 'Circle of Willis',
    system: 'nervous',
    title: 'Berry Aneurysm Locations',
    content:
      'Berry (saccular) aneurysms occur at arterial bifurcations in the Circle of Willis. Most common locations: (1) Anterior communicating artery (30-35%), (2) Posterior communicating artery at ICA junction (30%), (3) MCA bifurcation (20%).',
    clinicalContext:
      'Rupture causes subarachnoid hemorrhage (SAH): "worst headache of my life," neck stiffness, photophobia. CT shows blood in subarachnoid space. Lumbar puncture shows xanthochromia if CT negative.',
    relevanceCategories: ['pathology-site', 'imaging-correlation'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'very-common',
        questionTypes: ['Location identification', 'Risk factors'],
        sampleQuestion:
          'A 45-year-old woman with polycystic kidney disease presents with sudden severe headache. Where is the most likely aneurysm location?',
        testingPoints: [
          'AComm most common',
          'Associated conditions (ADPKD, Ehlers-Danlos)',
          'SAH presentation',
        ],
      },
    ],
    highYieldCategory: 'must-know',
    mnemonicTip: 'AComm Aneurysms Are #1 (both start with A)',
    commonMistakes: [
      'Saying MCA is most common (it\'s third)',
      'Forgetting association with ADPKD',
      'Missing that PComm aneurysm can cause CN III palsy',
    ],
    relatedPearls: ['pearl-001'],
    tags: ['cerebrovascular', 'aneurysm', 'SAH', 'neurology'],
    viewCount: 1100,
    helpfulCount: 1020,
  },
  {
    pearlId: 'pearl-004',
    structureId: 'thyroid-gland',
    structureName: 'Thyroid Gland',
    system: 'endocrine',
    title: 'Recurrent Laryngeal Nerve at Risk',
    content:
      'The recurrent laryngeal nerve (RLN) runs in the tracheoesophageal groove posterior to the thyroid gland. It innervates all intrinsic laryngeal muscles except cricothyroid. Injury during thyroidectomy causes hoarseness (unilateral) or airway compromise (bilateral).',
    clinicalContext:
      'Left RLN loops under aortic arch, right RLN loops under subclavian artery. Left RLN is more commonly injured due to longer course. Non-recurrent right RLN occurs with aberrant subclavian artery (0.5-1%).',
    relevanceCategories: ['surgical-landmark', 'nerve-block'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'very-common',
        questionTypes: ['Surgical complication', 'Anatomy'],
        sampleQuestion:
          'After thyroidectomy, a patient has hoarseness. Which nerve was likely injured?',
        testingPoints: [
          'RLN course',
          'Innervation pattern',
          'Cricothyroid (external branch of SLN)',
        ],
      },
      {
        examType: 'NBME-Shelf',
        frequency: 'common',
        questionTypes: ['Post-operative complication'],
        testingPoints: ['Bilateral vs unilateral injury', 'Management'],
      },
    ],
    highYieldCategory: 'must-know',
    mnemonicTip:
      '"All intrinsic laryngeal muscles except Cricothyroid" = RLN (Cricothyroid = external SLN)',
    commonMistakes: [
      'Forgetting cricothyroid is supplied by external branch of SLN',
      'Not knowing the different courses of left vs right RLN',
      'Missing that bilateral injury causes stridor, not just hoarseness',
    ],
    relatedPearls: [],
    tags: ['thyroid', 'surgery', 'nerve-injury', 'ENT'],
    viewCount: 890,
    helpfulCount: 850,
  },
  {
    pearlId: 'pearl-005',
    structureId: 'femoral-triangle',
    structureName: 'Femoral Triangle',
    system: 'musculoskeletal',
    title: 'NAVEL Mnemonic for Femoral Triangle',
    content:
      'Contents of the femoral triangle from lateral to medial: Nerve, Artery, Vein, Empty space (femoral canal), Lymphatics. The femoral nerve is outside the femoral sheath; artery and vein are within it.',
    clinicalContext:
      'Femoral artery is the site for cardiac catheterization. Femoral vein used for central line access. Femoral nerve block for hip/knee surgery. Femoral hernias occur through the femoral canal (medial to vein).',
    relevanceCategories: ['surgical-landmark', 'vascular-access', 'nerve-block'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'very-common',
        questionTypes: ['Anatomy identification', 'Clinical correlation'],
        sampleQuestion:
          'During femoral artery catheterization, which structure is immediately lateral?',
        testingPoints: ['NAVEL order', 'Femoral sheath contents', 'Femoral canal'],
      },
    ],
    highYieldCategory: 'must-know',
    mnemonicTip: 'NAVEL (lateral to medial): Nerve, Artery, Vein, Empty space, Lymphatics',
    commonMistakes: [
      'Placing nerve inside the femoral sheath (it\'s lateral to sheath)',
      'Forgetting the empty space (femoral canal) where hernias occur',
      'Confusing with inguinal canal contents',
    ],
    relatedPearls: [],
    tags: ['anatomy', 'vascular-access', 'regional-anesthesia', 'hernia'],
    viewCount: 1500,
    helpfulCount: 1450,
  },
  {
    pearlId: 'pearl-006',
    structureId: 'kidney',
    structureName: 'Kidney',
    system: 'urinary',
    title: 'Renal Hilum Order: VAP',
    content:
      'Structures at the renal hilum from anterior to posterior: Vein, Artery, Pelvis (ureter). The renal vein is most anterior, making it the first structure encountered during anterior surgical approach.',
    clinicalContext:
      'Important for nephrectomy, renal transplant, and understanding renal vascular anatomy. Left renal vein is longer (crosses aorta) and receives left gonadal vein and left suprarenal vein.',
    relevanceCategories: ['surgical-landmark', 'imaging-correlation'],
    examRelevance: [
      {
        examType: 'USMLE-Step1',
        frequency: 'common',
        questionTypes: ['Anatomical relationship', 'Imaging'],
        sampleQuestion:
          'On CT, which renal hilar structure is most anterior?',
        testingPoints: [
          'VAP order',
          'Left renal vein tributaries',
          'Nutcracker syndrome',
        ],
      },
    ],
    highYieldCategory: 'frequently-tested',
    mnemonicTip: 'VAP (anterior to posterior): Vein, Artery, Pelvis',
    commonMistakes: [
      'Reversing the order (it\'s VAP, not PAV)',
      'Forgetting left gonadal vein drains to left renal vein',
      'Missing that right gonadal vein drains directly to IVC',
    ],
    relatedPearls: [],
    tags: ['kidney', 'anatomy', 'surgery', 'radiology'],
    viewCount: 720,
    helpfulCount: 680,
  },
];

/**
 * Sample surgical landmarks
 */
export const sampleSurgicalLandmarks: SurgicalLandmark[] = [
  {
    landmarkId: 'landmark-001',
    structureId: 'mcburneys-point',
    structureName: "McBurney's Point",
    system: 'digestive',
    surgicalProcedures: ['Appendectomy', 'Diagnostic laparoscopy'],
    landmarkDescription:
      "Located 1/3 of the distance from the ASIS to the umbilicus on the right side. Corresponds to the base of the appendix.",
    clinicalSignificance:
      'Point of maximal tenderness in acute appendicitis. Used to localize McBurney incision for open appendectomy.',
    safetyConsiderations: [
      'Iliohypogastric and ilioinguinal nerves run nearby',
      'Inferior epigastric vessels at risk medially',
      'Cecum and ileum may be adherent in chronic cases',
    ],
    relatedStructures: ['appendix', 'cecum', 'terminal-ileum', 'right-iliac-fossa'],
    visualizationTips:
      'Draw a line from ASIS to umbilicus; mark 1/3 point from ASIS',
    commonApproaches: [
      {
        approachName: 'McBurney (muscle-splitting)',
        description:
          'Oblique incision centered on McBurney point, splitting external oblique, internal oblique, and transversus abdominis along fiber direction',
        advantages: ['Reduced muscle damage', 'Lower hernia risk', 'Less postop pain'],
        disadvantages: ['Limited exposure', 'Difficult if perforated/abscess'],
        structuresAtRisk: ['Iliohypogastric nerve', 'Ilioinguinal nerve'],
      },
      {
        approachName: 'Laparoscopic',
        description:
          'Three-port technique with umbilical camera port and two working ports',
        advantages: ['Better visualization', 'Less pain', 'Faster recovery', 'Diagnostic capability'],
        disadvantages: ['Equipment required', 'Learning curve', 'Pneumoperitoneum risks'],
        structuresAtRisk: ['Inferior epigastric vessels at port sites'],
      },
    ],
  },
  {
    landmarkId: 'landmark-002',
    structureId: 'anatomical-snuffbox',
    structureName: 'Anatomical Snuffbox',
    system: 'musculoskeletal',
    surgicalProcedures: ['Scaphoid fixation', 'Radial artery cannulation'],
    landmarkDescription:
      'Triangular depression on lateral wrist bordered by EPL tendon posteriorly and APL/EPB tendons anteriorly. Floor formed by scaphoid and trapezium.',
    clinicalSignificance:
      'Tenderness here with negative initial X-ray suggests occult scaphoid fracture. Radial artery palpable in the snuffbox.',
    safetyConsiderations: [
      'Superficial radial nerve crosses the area',
      'Radial artery runs through the floor',
      'Scaphoid blood supply is distal to proximal (AVN risk)',
    ],
    relatedStructures: ['scaphoid', 'radial-artery', 'extensor-pollicis-longus'],
    visualizationTips:
      'Have patient extend and abduct thumb to see tendons; depression appears between them',
    commonApproaches: [
      {
        approachName: 'Dorsal approach to scaphoid',
        description: 'Incision centered over snuffbox, between EPL and APL/EPB tendons',
        advantages: ['Direct access to scaphoid waist and proximal pole'],
        disadvantages: ['Risk to superficial radial nerve', 'Limited distal pole access'],
        structuresAtRisk: ['Superficial branch of radial nerve', 'Radial artery'],
      },
    ],
  },
];

/**
 * Sample physical exam correlations
 */
export const samplePhysicalExamCorrelations: PhysicalExamCorrelation[] = [
  {
    correlationId: 'exam-001',
    structureId: 'liver',
    structureName: 'Liver',
    system: 'digestive',
    examTechnique:
      'Percussion: Start in right midclavicular line at 3rd intercostal space, percuss downward until dullness (upper border). Continue to resonance (lower border). Palpation: Hook fingers under right costal margin, ask patient to inspire deeply.',
    normalFindings:
      'Liver span 6-12 cm in midclavicular line. Lower border usually at or just below costal margin. Smooth, firm edge.',
    abnormalFindings: [
      {
        findingName: 'Hepatomegaly',
        description: 'Liver span >12 cm or palpable >2 cm below costal margin',
        associatedConditions: [
          'Congestive heart failure',
          'Hepatitis',
          'Cirrhosis (early)',
          'Malignancy',
          'Fatty liver',
        ],
        sensitivity: 0.7,
        specificity: 0.8,
      },
      {
        findingName: 'Nodular liver edge',
        description: 'Irregular, bumpy liver surface',
        associatedConditions: ['Cirrhosis', 'Metastatic disease'],
      },
      {
        findingName: 'Tender hepatomegaly',
        description: 'Enlarged liver with tenderness to palpation',
        associatedConditions: [
          'Acute hepatitis',
          'Congestive hepatopathy',
          'Budd-Chiari syndrome',
        ],
      },
    ],
    patientPositioning: 'Supine with knees slightly flexed, arms at sides',
    equipmentNeeded: ['None required'],
    clinicalPearls: [
      'Scratch test: Auscultate over liver while scratching abdomen to detect liver edge',
      'Riedel lobe is a normal anatomical variant (tongue-like extension of right lobe)',
      "In emphysema, liver may be displaced downward but span is normal",
    ],
  },
  {
    correlationId: 'exam-002',
    structureId: 'heart',
    structureName: 'Heart',
    system: 'cardiovascular',
    examTechnique:
      'Auscultate in 4 areas: (1) Aortic - 2nd right ICS, (2) Pulmonic - 2nd left ICS, (3) Tricuspid - left sternal border, (4) Mitral - apex/5th left ICS MCL. Listen with diaphragm for high-pitched sounds, bell for low-pitched.',
    normalFindings:
      'S1 (mitral/tricuspid closure) loudest at apex. S2 (aortic/pulmonic closure) loudest at base. S2 physiologically splits on inspiration.',
    abnormalFindings: [
      {
        findingName: 'Systolic murmur',
        description: 'Murmur occurring between S1 and S2',
        associatedConditions: [
          'Aortic stenosis (crescendo-decrescendo)',
          'Mitral regurgitation (holosystolic)',
          'VSD (holosystolic)',
          'Innocent flow murmur',
        ],
      },
      {
        findingName: 'Diastolic murmur',
        description: 'Murmur occurring between S2 and S1',
        associatedConditions: [
          'Aortic regurgitation (decrescendo)',
          'Mitral stenosis (rumbling, opening snap)',
        ],
      },
      {
        findingName: 'S3 gallop',
        description: 'Low-pitched sound after S2, during rapid ventricular filling',
        associatedConditions: [
          'Heart failure',
          'Volume overload',
          'Normal in young adults/pregnancy',
        ],
        sensitivity: 0.51,
        specificity: 0.9,
      },
      {
        findingName: 'S4 gallop',
        description: 'Low-pitched sound before S1, atrial contraction into stiff ventricle',
        associatedConditions: [
          'LVH',
          'Hypertension',
          'Aortic stenosis',
          'Acute MI',
        ],
      },
    ],
    patientPositioning:
      'Supine at 30-45 degrees. Left lateral decubitus for mitral sounds. Sitting forward for aortic regurgitation.',
    equipmentNeeded: ['Stethoscope with bell and diaphragm'],
    clinicalPearls: [
      'APT-M: Aortic, Pulmonic, Tricuspid areas then Mitral (right to left, top to bottom)',
      'Handgrip increases afterload → loudens MR, AR, VSD; softens AS, HOCM',
      'Valsalva decreases preload → softens most murmurs, loudens HOCM',
      '"PASS" for physiologic split: Pulmonic A2-P2 Split with inspiration',
    ],
  },
];

/**
 * Sample common exam questions
 */
export const sampleCommonQuestions: CommonExamQuestion[] = [
  {
    questionId: 'cq-001',
    structureId: 'coronary-sinus',
    structureName: 'Coronary Sinus',
    system: 'cardiovascular',
    examTypes: ['USMLE-Step1'],
    questionStem:
      'A cardiac catheterization shows deoxygenated blood draining into a structure that empties into the right atrium. This structure is derived from which embryonic vessel?',
    correctConcept: 'Left horn of the sinus venosus → coronary sinus',
    wrongAnswerTraps: [
      'Right horn of sinus venosus (→ smooth part of RA)',
      'Left common cardinal vein (→ oblique vein of LA)',
      'Truncus arteriosus (→ aorta and pulmonary trunk)',
    ],
    keyDistinction:
      'The left horn gives rise to coronary sinus; the right horn is incorporated into the right atrium',
    relatedTopics: ['cardiac-embryology', 'sinus-venosus', 'great-vessels'],
    difficulty: 3,
  },
  {
    questionId: 'cq-002',
    structureId: 'thoracic-duct',
    structureName: 'Thoracic Duct',
    system: 'lymphatic',
    examTypes: ['USMLE-Step1', 'NBME-Shelf'],
    questionStem:
      'A patient develops chylothorax after esophagectomy. The thoracic duct was injured. Into which vessel does the thoracic duct normally drain?',
    correctConcept:
      'Junction of left internal jugular and left subclavian veins (left venous angle)',
    wrongAnswerTraps: [
      'Right lymphatic duct (drains right upper body only)',
      'Superior vena cava (too distal)',
      'Azygos vein (thoracic duct crosses anterior to it)',
    ],
    keyDistinction:
      'Thoracic duct drains everything except right arm, right thorax, and right head/neck',
    relatedTopics: ['lymphatic-drainage', 'chylothorax', 'thoracic-surgery'],
    difficulty: 2,
  },
  {
    questionId: 'cq-003',
    structureId: 'internal-capsule',
    structureName: 'Internal Capsule',
    system: 'nervous',
    examTypes: ['USMLE-Step1', 'USMLE-Step2'],
    questionStem:
      'A patient presents with pure motor hemiparesis affecting face, arm, and leg equally. MRI shows a small lacunar infarct. Where is the lesion most likely located?',
    correctConcept:
      'Posterior limb of internal capsule (contains corticospinal and corticobulbar tracts)',
    wrongAnswerTraps: [
      'Corona radiata (would cause more variable weakness)',
      'Thalamus (would include sensory symptoms)',
      'Anterior limb of internal capsule (contains frontopontine fibers)',
    ],
    keyDistinction:
      'Posterior limb = motor; Genu = corticobulbar; Anterior limb = frontopontine',
    relatedTopics: ['lacunar-stroke', 'motor-pathways', 'basal-ganglia'],
    difficulty: 3,
  },
];

/**
 * Get initial clinical pearls state
 */
export function getInitialClinicalPearlsState(): ClinicalPearlsState {
  const pearls = new Map<string, ClinicalPearl>();
  sampleClinicalPearls.forEach((p) => pearls.set(p.pearlId, p));

  const surgicalLandmarks = new Map<string, SurgicalLandmark>();
  sampleSurgicalLandmarks.forEach((l) => surgicalLandmarks.set(l.landmarkId, l));

  const physicalExamCorrelations = new Map<string, PhysicalExamCorrelation>();
  samplePhysicalExamCorrelations.forEach((e) =>
    physicalExamCorrelations.set(e.correlationId, e)
  );

  const commonQuestions = new Map<string, CommonExamQuestion>();
  sampleCommonQuestions.forEach((q) => commonQuestions.set(q.questionId, q));

  return {
    pearls,
    surgicalLandmarks,
    physicalExamCorrelations,
    commonQuestions,
    highYieldStructures: new Map(),
    currentFilter: {},
    isLoaded: true,
  };
}

/**
 * Get clinical pearls by system
 */
export function getClinicalPearlsBySystem(
  pearls: Map<string, ClinicalPearl>,
  system: LearningBodySystem
): ClinicalPearl[] {
  return Array.from(pearls.values()).filter((p) => p.system === system);
}

/**
 * Get clinical pearls by structure
 */
export function getClinicalPearlsByStructure(
  pearls: Map<string, ClinicalPearl>,
  structureId: string
): ClinicalPearl[] {
  return Array.from(pearls.values()).filter((p) => p.structureId === structureId);
}

/**
 * Filter high-yield content
 */
export function filterHighYieldContent(
  pearls: Map<string, ClinicalPearl>,
  filter: HighYieldFilter
): ClinicalPearl[] {
  let results = Array.from(pearls.values());

  if (filter.systems && filter.systems.length > 0) {
    results = results.filter((p) => filter.systems!.includes(p.system));
  }

  if (filter.examTypes && filter.examTypes.length > 0) {
    results = results.filter((p) =>
      p.examRelevance.some((er) => filter.examTypes!.includes(er.examType))
    );
  }

  if (filter.relevanceCategories && filter.relevanceCategories.length > 0) {
    results = results.filter((p) =>
      p.relevanceCategories.some((rc) => filter.relevanceCategories!.includes(rc))
    );
  }

  if (filter.highYieldCategories && filter.highYieldCategories.length > 0) {
    results = results.filter((p) =>
      filter.highYieldCategories!.includes(p.highYieldCategory)
    );
  }

  return results;
}

/**
 * Get surgical landmarks by system
 */
export function getSurgicalLandmarksBySystem(
  landmarks: Map<string, SurgicalLandmark>,
  system: LearningBodySystem
): SurgicalLandmark[] {
  return Array.from(landmarks.values()).filter((l) => l.system === system);
}

/**
 * Get physical exam correlations by system
 */
export function getPhysicalExamBySystem(
  correlations: Map<string, PhysicalExamCorrelation>,
  system: LearningBodySystem
): PhysicalExamCorrelation[] {
  return Array.from(correlations.values()).filter((c) => c.system === system);
}

/**
 * Get common exam questions by exam type
 */
export function getQuestionsByExamType(
  questions: Map<string, CommonExamQuestion>,
  examType: 'USMLE-Step1' | 'USMLE-Step2' | 'COMLEX-Level1' | 'COMLEX-Level2' | 'NBME-Shelf' | 'MCAT' | 'PANCE' | 'NCLEX'
): CommonExamQuestion[] {
  return Array.from(questions.values()).filter((q) =>
    q.examTypes.includes(examType)
  );
}

/**
 * Get must-know pearls only
 */
export function getMustKnowPearls(pearls: Map<string, ClinicalPearl>): ClinicalPearl[] {
  return Array.from(pearls.values()).filter(
    (p) => p.highYieldCategory === 'must-know'
  );
}

/**
 * Get pearls by exam frequency
 */
export function getPearlsByExamFrequency(
  pearls: Map<string, ClinicalPearl>,
  frequency: 'very-common' | 'common' | 'occasional' | 'rare'
): ClinicalPearl[] {
  return Array.from(pearls.values()).filter((p) =>
    p.examRelevance.some((er) => er.frequency === frequency)
  );
}

/**
 * Mark pearl as helpful
 */
export function markPearlHelpful(
  pearls: Map<string, ClinicalPearl>,
  pearlId: string
): void {
  const pearl = pearls.get(pearlId);
  if (pearl) {
    pearl.helpfulCount++;
    pearl.viewCount++;
  }
}

/**
 * Record pearl view
 */
export function recordPearlView(
  pearls: Map<string, ClinicalPearl>,
  pearlId: string
): void {
  const pearl = pearls.get(pearlId);
  if (pearl) {
    pearl.viewCount++;
  }
}

/**
 * Search pearls by keyword
 */
export function searchPearls(
  pearls: Map<string, ClinicalPearl>,
  query: string
): ClinicalPearl[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(pearls.values()).filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.content.toLowerCase().includes(lowerQuery) ||
      p.structureName.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get related pearls
 */
export function getRelatedPearls(
  pearls: Map<string, ClinicalPearl>,
  pearlId: string
): ClinicalPearl[] {
  const pearl = pearls.get(pearlId);
  if (!pearl) return [];

  return pearl.relatedPearls
    .map((id) => pearls.get(id))
    .filter((p): p is ClinicalPearl => p !== undefined);
}
