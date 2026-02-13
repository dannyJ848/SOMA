/**
 * USMLE Step 1 Anatomy - High-Yield Anatomy for Medical Licensing
 *
 * Educational content covering essential anatomy concepts tested on USMLE Step 1.
 */

import { EducationalContent } from '../../types';

export const step1Anatomy: EducationalContent = {
  id: 'education-usmle-step1-anatomy',
  type: 'concept',
  name: 'USMLE Step 1 Anatomy',
  alternateNames: ['Step 1 Anatomy', 'Medical Anatomy', 'Clinical Anatomy', 'Board Anatomy'],

  levels: {
    1: {
      level: 1,
      summary: 'Anatomy for USMLE Step 1 includes learning about the structure of the human body - bones, muscles, organs, and how they all connect together.',
      explanation: `## What Is Anatomy for Step 1?

Anatomy is the study of body structure. For USMLE Step 1, you need to know how the body is put together and how different parts relate to each other.

## Why Is Anatomy Important?

Doctors need to know anatomy because:
- They need to examine patients properly
- Surgery requires knowing where things are
- Symptoms often relate to body structure
- Tests like X-rays show anatomy

## Main Areas to Study

**Bones and Muscles:**
- Where major bones are located
- How muscles attach and move
- Important spaces and passages

**Organs and Systems:**
- Where organs sit in the body
- How they connect to each other
- Blood supply and nerve connections

**Body Regions:**
- Head and neck anatomy
- Chest and heart area
- Belly and digestive organs
- Pelvis and reproductive organs
- Arms and legs

## How Anatomy Questions Look

Step 1 might ask:
- "What nerve controls this muscle?"
- "What artery supplies this organ?"
- "What structure passes through this opening?"
- "What would be damaged in this injury?"

## Study Tips

1. Use anatomy atlases with pictures
2. Study with diagrams and models
3. Learn the clinical importance
4. Focus on common questions
5. Practice with anatomy questions

## Common Clinical Connections

- Knowing where the appendix is helps diagnose appendicitis
- Understanding blood vessels helps interpret CT scans
- Nerve knowledge explains why injuries cause specific symptoms`,
      keyTerms: [
        { term: 'anatomy', definition: 'The study of the structure of the body and its parts' },
        { term: 'artery', definition: 'A blood vessel that carries blood away from the heart' },
        { term: 'nerve', definition: 'A bundle of fibers that carries signals between the body and brain' },
        { term: 'organ', definition: 'A part of the body made of different tissues that performs specific functions' },
      ],
      analogies: [
        'Learning anatomy is like learning the map of a city - you need to know where everything is and how to get there.',
        'Anatomy is the foundation of medicine, like knowing the parts of a car before you can fix it.',
      ],
      examples: [
        'The femoral artery runs in the groin area and is where doctors often feel for a pulse.',
        'The ulnar nerve at the elbow (funny bone) causes tingling when bumped because it is close to the skin.',
      ],
      patientCounselingPoints: [
        'Doctors study anatomy extensively to understand how your body works',
        'Understanding anatomy helps doctors interpret symptoms and choose the right tests',
      ],
    },

    2: {
      level: 2,
      summary: 'USMLE Step 1 anatomy emphasizes clinically relevant structural relationships, neurovascular anatomy, and embryological correlations. High-yield topics include cross-sectional anatomy, anatomical spaces, and common injury patterns.',
      explanation: `## Step 1 Anatomy Overview

Anatomy comprises approximately 10-15% of USMLE Step 1 content, focusing on clinically relevant structural relationships and functional anatomy.

## High-Yield Anatomical Regions

**Head and Neck:**
- Cranial nerves (origins, pathways, functions)
- Carotid artery and jugular venous systems
- Triangles of the neck
- Salivary glands and ducts
- Lymphatic drainage

**Thorax:**
- Mediastinal compartments
- Heart anatomy and coronary circulation
- Lung segments and bronchopulmonary segments
- Great vessel relationships
- Diaphragm and esophageal hiatus

**Abdomen:**
- Peritoneal spaces and recesses
- Portal venous system
- Retroperitoneal structures
- Inguinal canal anatomy
- Gut rotation and mesenteries

**Pelvis and Perineum:**
- Pelvic diaphragm and floor
- Urogenital triangle
- Anal triangle
- Vascular and nerve supply

**Extremities:**
- Brachial and lumbosacral plexuses
- Major compartments and fascial spaces
- Nerve entrapment sites
- Vascular anastomoses

## Cross-Sectional Anatomy

**CT and MRI Correlation:**
- Axial, sagittal, and coronal planes
- Identifying structures on imaging
- Common imaging landmarks
- Radiological anatomy

## Embryological Correlations

**Developmental Origins:**
| Structure | Embryological Origin |
|-----------|---------------------|
| Foregut | Pharynx to duodenum |
| Midgut | Duodenum to transverse colon |
| Hindgut | Distal colon to rectum |
| Branchial arches | Face, neck structures |
| Neural crest | PNS, adrenal medulla |

## Common Clinical Correlations

**Nerve Injuries:**
- Erb-Duchenne palsy (C5-C6)
- Klumpke paralysis (C8-T1)
- Carpal tunnel syndrome
- Common peroneal nerve palsy

**Vascular Compressions:**
- Thoracic outlet syndrome
- Popliteal artery entrapment
- Nutcracker syndrome
- May-Thurner syndrome

## Study Resources

**Atlases:**
- Netter\'s Atlas of Human Anatomy
- Rohen\'s Photographic Anatomy
- Gray\'s Atlas of Anatomy

**Question Banks:**
- UWorld anatomy questions
- Kaplan Qbank anatomy
- Gray\'s Anatomy Review

**Supplementary:**
- Anatomy recall books
- Flashcards (Anatomy sections)
- Cadaver images`,
      keyTerms: [
        { term: 'cross-sectional anatomy', definition: 'Anatomy as viewed in slices, corresponding to CT and MRI imaging planes' },
        { term: 'neurovascular bundle', definition: 'A grouping of nerves and blood vessels that travel together' },
        { term: 'anastomosis', definition: 'A connection between two blood vessels or tubular structures' },
        { term: 'retroperitoneal', definition: 'Located behind the peritoneum, the membrane lining the abdominal cavity' },
      ],
      analogies: [
        'Cross-sectional anatomy is like looking at slices of bread to understand the whole loaf - each slice shows different structures.',
        'Neurovascular bundles are like bundled cables in a computer - nerves and vessels travel together in protective pathways.',
      ],
      examples: [
        'The celiac trunk branches into three arteries supplying the liver, spleen, and stomach - high yield for Step 1.',
        'The inguinal canal contains the spermatic cord in males and round ligament in females - site of common hernias.',
      ],
      patientCounselingPoints: [
        'Anatomical knowledge helps doctors locate problems and plan treatments',
        'Modern imaging like CT scans shows cross-sectional anatomy that doctors must interpret',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 1 anatomy requires mastery of clinically relevant structural relationships, three-dimensional spatial understanding, and integration with pathology and clinical presentation. Embryological basis of anomalies and common clinical correlations are high-yield.',
      explanation: `## Comprehensive Step 1 Anatomy Framework

Anatomy on Step 1 integrates structural knowledge with clinical application, embryological understanding, and imaging interpretation.

## Detailed Regional Anatomy

**Thoracic Anatomy:**

**Mediastinal Compartments:**
| Compartment | Contents | Clinical Relevance |
|-------------|----------|-------------------|
| Superior | Thymus, great vessels, trachea | Substernal thyroid |
| Anterior | Thymus, lymph nodes | Thymoma location |
| Middle | Heart, pericardium | Cardiac tamponade |
| Posterior | Esophagus, thoracic aorta | Esophageal rupture |

**Coronary Anatomy:**
- Left main: LAD and circumflex
- RCA: SA/AV nodal arteries
- Coronary dominance patterns
- Collateral circulation

**Abdominal Anatomy:**

**Portal System:**
- Formation behind pancreatic neck
- Tributaries: splenic, SMV, IMV
- Portosystemic anastomoses:
  * Esophageal (left gastric)
  * Rectal (superior rectal)
  * Paraumbilical
  * Retroperitoneal

**Inguinal Canal:**
- Anterior: External oblique
- Posterior: Transversalis fascia
- Roof: Internal oblique, transversus
- Floor: Inguinal ligament
- Deep ring: Transversalis fascia
- Superficial ring: External oblique

**Neuroanatomy:**

**Brachial Plexus:**
| Root | Trunk | Division | Cord | Terminal |
|------|-------|----------|------|----------|
| C5-T1 | Upper, Middle, Lower | Anterior, Posterior | Lateral, Medial, Posterior | Peripheral nerves |

**Key Relationships:**
- Lateral cord + Medial cord = Median nerve
- Posterior cord = Axillary, Radial
- Medial cord = Ulnar, part Median

## Embryology Integration

**Branchial Apparatus:**
| Arch | Nerve | Artery | Structures |
|------|-------|--------|------------|
| 1 | V | Maxillary | Mandible, incus, malleus |
| 2 | VII | Stapedial | Stapes, styloid |
| 3 | IX | Common carotid | Hyoid, thymus |
| 4 | X | R subclavian | Laryngeal cartilages |
| 6 | X | Ductus arteriosus | Laryngeal muscles |

**Derivatives:**
- Branchial clefts: External auditory canal
- Branchial pouches: Middle ear, tonsils, thymus, parathyroids
- Branchial membranes: Tympanic membrane

## Clinical Anatomy Integration

**Common Injuries and Sequelae:**

**Rotator Cuff:**
| Muscle | Nerve | Action | Test |
|--------|-------|--------|------|
| Supraspinatus | Suprascapular | Abduction | Empty can |
| Infraspinatus | Suprascapular | External rotation | - |
| Teres minor | Axillary | External rotation | - |
| Subscapularis | Upper/lower subscapular | Internal rotation | Lift-off |

**Nerve Entrapments:**
| Nerve | Location | Symptoms |
|-------|----------|----------|
| Median | Carpal tunnel | Thenar weakness, numbness |
| Ulnar | Cubital tunnel | Interossei weakness |
| Radial | Spiral groove | Wrist drop |
| Common peroneal | Fibular head | Foot drop |

## Imaging Anatomy

**CT Windows:**
- Lung window: Airways, parenchyma
- Mediastinal window: Vessels, lymph nodes
- Bone window: Skeletal structures
- Soft tissue: Organs, muscles

**MRI Sequences:**
- T1: Fat bright, fluid dark
- T2: Fluid bright, fat intermediate
- FLAIR: CSF dark, lesions bright
- Contrast enhancement patterns

## Study Strategies

**Spatial Learning:**
- Use 3D anatomy apps
- Study cross-sections
- Correlate with imaging
- Draw relationships

**Clinical Correlation:**
- Link anatomy to disease
- Understand surgical approaches
- Interpret imaging findings
- Predict injury patterns

**Active Recall Methods:**
- Label blank diagrams
- Describe relationships
- Teach others
- Practice questions`,
      keyTerms: [
        { term: 'portosystemic anastomosis', definition: 'Connections between portal and systemic venous systems that become important in portal hypertension' },
        { term: 'coronary dominance', definition: 'Determination of which coronary artery gives rise to the posterior descending artery' },
        { term: 'branchial apparatus', definition: 'Embryonic structures that develop into head and neck structures' },
        { term: 'rotator cuff', definition: 'Group of four muscles and tendons that stabilize the shoulder joint' },
      ],
      analogies: [
        'The portal system is like a highway bypass that can create traffic jams and force traffic onto side roads when blocked.',
        'Branchial arches are like construction phases - each phase builds different structures in the head and neck.',
      ],
      examples: [
        'Portal hypertension causes esophageal varices at the gastroesophageal junction, a site of portosystemic anastomosis.',
        'Damage to the radial nerve in the spiral groove of the humerus causes wrist drop, affecting wrist and finger extension.',
      ],
      patientCounselingPoints: [
        'Anatomical variations are common and can affect symptoms and treatment approaches',
        'Understanding blood supply helps doctors plan surgeries and predict complications',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 1 anatomy requires three-dimensional spatial reasoning, embryological-clinical correlations, and integrated understanding of anatomical variations. Expert preparation combines detailed structural knowledge with clinical pattern recognition and imaging interpretation skills.',
      explanation: `## Advanced Step 1 Anatomy Concepts

Professional-level anatomy preparation integrates detailed structural knowledge, embryological mechanisms, clinical correlations, and imaging interpretation.

## Complex Anatomical Relationships

**Retroperitoneal Anatomy:**

**Completely Retroperitoneal:**
- Adrenal glands
- Aorta and IVC
- Duodenum (2nd-4th parts)
- Pancreas (except tail)
- Ureters
- Colon (ascending, descending)
- Kidneys

**Secondarily Retroperitoneal:**
- Duodenum
- Ascending colon
- Descending colon
- Pancreas

**Peritoneal Ligaments:**
| Ligament | Contents | Clinical |
|----------|----------|----------|
| Hepatoduodenal | Portal triad | Pringle maneuver |
| Gastrohepatic | Gastric vessels | Access to lesser sac |
| Gastrocolic | - | Access to stomach |
| Splenorenal | Splenic vessels | Splenectomy |

**Neurovascular Anatomy:**

**Posterior Abdominal Wall:**
| Structure | Origin/Path | Branches |
|-----------|-------------|----------|
| Celiac trunk | T12-L1 | Left gastric, splenic, common hepatic |
| SMA | L1 | Multiple visceral branches |
| Renal arteries | L1-L2 | Segmental arteries |
| Gonadal arteries | Aorta | Descend retroperitoneally |

**Pelvic Autonomics:**
| Division | Function | Innervation |
|----------|----------|-------------|
| Sympathetic | Ejaculation | Lumbar splanchnics |
| Parasympathetic | Erection | Pelvic splanchnics (S2-S4) |

## Developmental Anatomy

**Pharyngeal Pouch Derivatives:**
| Pouch | Structure | Defect |
|-------|-----------|--------|
| 1 | Middle ear, eustachian tube | - |
| 2 | Palatine tonsil | - |
| 3 | Inferior parathyroids, thymus | DiGeorge syndrome |
| 4 | Superior parathyroids, C cells | - |

**Gut Rotation:**
- Counter-clockwise 270 degrees
- Duodenal C-loop
- Cecal descent
- Mesenteric fixation
- Malrotation complications

**Diaphragm Development:**
| Component | Derivative | Defect |
|-----------|------------|--------|
| Septum transversum | Central tendon | - |
| Pleuroperitoneal folds | Peripheral muscle | Congenital hernia |
| Dorsal mesentery | Crura | - |
| Body wall | Peripheral rim | - |

## Clinical Anatomy Patterns

**Compartment Syndromes:**
| Compartment | Contents | Critical Finding |
|-------------|----------|------------------|
| Anterior leg | Tibialis anterior, EHL, EDL | Anterior syndrome |
| Deep posterior | Tibialis posterior, FHL, FDL | Pain with toe flexion |
| Superficial posterior | Gastrocnemius, soleus | Less critical |
| Lateral | Peroneals | - |

**Fascial Spaces:**
| Space | Location | Infection Spread |
|-------|----------|------------------|
| Submandibular | Below mylohyoid | Ludwig angina |
| Masticator | Around masseter | Dental infections |
| Lateral pharyngeal | Beside pharynx | Deep neck infection |
| Prevertebral | Behind esophagus | Danger space |

**Surgical Anatomy:**

**Triangle of Auscultation:**
- Boundaries: Trapezius, latissimus dorsi, scapula
- Floor: 6th rib
- Site for lung auscultation

**Calot Triangle:**
- Boundaries: Cystic duct, common hepatic duct, liver
- Contents: Cystic artery, right hepatic artery
- Critical in cholecystectomy

## Imaging Integration

**Ultrasound Windows:**
| Window | Structures | Applications |
|--------|------------|--------------|
| Subcostal | Liver, gallbladder, IVC | GB disease, IVC assessment |
| Intercostal | Kidneys, pleural space | Hydronephrosis, effusions |
| Suprapubic | Bladder, uterus, prostate | Urinary retention, OB |
| Cardiac | Heart, pericardium | Function, effusion |

**Angiographic Anatomy:**
- Coronary artery dominance
- Circle of Willis variants
- Bronchial artery supply
- Common variant anatomy

## High-Yield Clinical Scenarios

**Injury Patterns:**
- Scaphoid fracture: Anatomical snuffbox
- Boxer\'s fracture: 5th metacarpal neck
- Gamekeeper\'s thumb: UCL of thumb
- Jones fracture: 5th metatarsal base

**Nerve Compression:**
- Suprascapular: Spinoglenoid notch
- Axillary: Quadrangular space
- Obturator: Obturator canal
- Piriformis: Greater sciatic foramen

## Integration with Pathology

**Anatomical Basis of Disease:**
- Berry aneurysms: Circle of Willis
- Varicocele: Left gonadal vein drainage
- BPH: Prostatic urethra compression
- Ectopic pregnancy: Fallopian tube implantation`,
      keyTerms: [
        { term: 'ligament of Treitz', definition: 'The suspensory muscle that marks the duodenojejunal junction' },
        { term: 'Pringle maneuver', definition: 'Temporary clamping of the hepatoduodenal ligament to control hepatic bleeding' },
        { term: 'Danger space', definition: 'The prevertebral space behind the esophagus where infection can spread to mediastinum' },
        { term: 'Ludwig angina', definition: 'Serious infection of the submandibular space that can compromise the airway' },
      ],
      analogies: [
        'Retroperitoneal structures are like houses built behind the main street - they are there but not directly visible from the front.',
        'The diaphragm is like a custom-built dome with different sections constructed by different contractors (embryological origins).',
      ],
      examples: [
        'Left-sided varicocele that does not decompress when supine suggests renal vein thrombosis due to the anatomical drainage pattern.',
        'Parathyroid hormone elevation with normal calcium suggests familial hypocalciuric hypercalcemia, not tertiary hyperparathyroidism.',
      ],
      patientCounselingPoints: [
        'Anatomical knowledge helps surgeons plan operations and minimize complications',
        'Understanding nerve pathways explains why some injuries cause specific patterns of numbness or weakness',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 1 anatomy mastery integrates comprehensive structural knowledge, embryological mechanisms, surgical anatomy, and advanced imaging interpretation. Professional understanding requires appreciating anatomical variations, predicting clinical presentations from anatomical principles, and teaching anatomical concepts effectively.',
      explanation: `## Expert Step 1 Anatomy Framework

Professional-level anatomy mastery for Step 1 encompasses sophisticated understanding of structural-functional relationships, anatomical variations, and clinical integration.

## Comprehensive Regional Mastery

**Thoracic Surgical Anatomy:**

**Root of the Neck:**
| Structure | Relationship | Surgical Risk |
|-----------|--------------|---------------|
| Phrenic nerve | Anterior to subclavian artery | Injury during node dissection |
| Thoracic duct | Left side, behind esophagus | Chyle leak if injured |
| Recurrent laryngeal | Loop under subclavian/aorta | Voice hoarsen if injured |
| Stellate ganglion | C7-T1 level | Horner syndrome if injured |

**Mediastinal Surgery:**
- Transhiatal esophagectomy route
- VATS access points
- Sternotomy landmarks
- Cardiac cannulation sites

**Abdominal Surgical Anatomy:**

**Portal Dissection:**
- Triangle of Calot boundaries
- Variations in hepatic artery
- Portal vein formation
- Biliary duct confluence

**Vascular Relationships:**
| Structure | Anterior | Posterior |
|-----------|----------|-----------|
| IVC | Duodenum, pancreas, bile duct | Vertebral column |
| Aorta | Pancreas, splenic vein, left renal vein | Vertebral column |
| Portal vein | Bile duct, hepatic artery | IVC |

**Pelvic Anatomy:**

**Fascial Support of Uterus:**
| Ligament | Attachment | Function |
|----------|------------|----------|
| Transverse cervical | Cervix to side wall | Main support |
| Uterosacral | Cervix to sacrum | Posterior support |
| Round | Uterus to labia | Anteversion |
| Broad | Lateral uterus | Minor support |

**Ureter Relationships:**
| Location | Relationship | Surgical Risk |
|----------|--------------|---------------|
| Pelvic brim | Crossed by gonadal vessels | - |
| Broad ligament | Under uterine artery | "Water under bridge" |
| Ischial spine | Turns medially | - |
| Bladder base | Enters bladder | Injury during hysterectomy |

## Embryological Mechanisms

**Neural Crest Derivatives:**
| System | Derivatives |
|--------|-------------|
| PNS | Sensory, autonomic ganglia |
| Adrenal | Medulla |
| Head | Facial bones, cartilage |
| Heart | Aorticopulmonary septum |
| Skin | Melanocytes |

**Defects and Associations:**
- DiGeorge: 3rd/4th pouch
- Hirschsprung: Neural crest migration
- CHARGE: Neural crest related
- Neuroblastoma: Neural crest origin

**Intestinal Rotation:**
1. Herniation of midgut
2. 90-degree counter-clockwise
3. Return to abdomen
4. 180-degree rotation
5. Fixation of mesentery

**Malrotation Consequences:**
- Ladd bands
- Volvulus risk
- Abnormal position
- Vascular compromise

## Advanced Clinical Integration

**Anatomical Variants:**

**Vascular Variants:**
| Variant | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Accessory renal artery | 30% | Preserved in donation |
| Bifid renal artery | 10% | Partial preservation |
| Replaced hepatic artery | 15% | Surgical landmark |
| Aberrant subclavian | 1% | Dysphagia lusoria |

**Biliary Variants:**
- Variations in hepatic ducts
- Accessory bile ducts
- Low insertion of cystic duct
- Parallel bile duct/cystic duct

**Teaching Anatomy:**

**Effective Instruction:**
| Principle | Application |
|-----------|-------------|
| Spatial orientation | Consistent anatomical position |
| Functional context | Structure-function relationships |
| Clinical relevance | Common pathology correlation |
| Layered complexity | Build from basic to advanced |

**Common Student Errors:**
- Left-right confusion
- Superior-inferior reversal
- Failure to appreciate 3D relationships
- Memorization without understanding
- Neglecting embryology

## Research and Innovation

**Surgical Navigation:**
- 3D printing for surgical planning
- Augmented reality overlays
- Intraoperative navigation
- Patient-specific anatomy

**Educational Technology:**
- Virtual dissection
- Haptic feedback
- Adaptive learning
- Competency assessment

**Future Directions:**
| Area | Development |
|------|-------------|
| Imaging | AI-assisted interpretation |
| Surgery | Robotic integration |
| Education | Immersive VR |
| Variation | Big data mapping |`,
      keyTerms: [
        { term: 'Ladd bands', definition: 'Fibrous bands in intestinal malrotation that can cause duodenal obstruction' },
        { term: 'dysphagia lusoria', definition: 'Difficulty swallowing due to an aberrant right subclavian artery compressing the esophagus' },
        { term: 'Water under the bridge', definition: 'Anatomical mnemonic for the ureter passing under the uterine artery' },
        { term: 'Triangle of Calot', definition: 'Anatomical space bounded by the cystic duct, common hepatic duct, and liver edge' },
      ],
      clinicalNotes: `Expert perspective on Step 1 anatomy:

1. **Integration Over Memorization:** Focus on relationships and clinical correlations rather than isolated facts. "Why does this matter clinically?" is the key question.

2. **Embryology is High-Yield:** Many congenital anomalies and their associations are tested through embryological understanding. Know your branchial arches and pharyngeal pouches cold.

3. **Cross-Sections are Essential:** Modern medicine relies on imaging. Practice identifying structures on CT and MRI in all planes.

4. **Anatomical Variations Matter:** Know common variations that affect clinical practice: retroaortic left renal vein, accessory renal arteries, replaced hepatic arteries.

5. **Surgical Anatomy:** Understanding surgical approaches helps you appreciate anatomical relationships. Know what surgeons see when they operate.

6. **Spaces and Compartments:** Know anatomical spaces and how infection or blood spreads between them. Retroperitoneal, mediastinal, fascial spaces.

7. **Neurovascular Bundles:** Nerves and vessels travel together. Know the relationships and you can predict injury patterns.

8. **Clinical Correlation:** Every anatomical fact should connect to a clinical scenario. If you cannot think of a clinical application, it may be low yield.

9. **3D Reasoning:** Build mental 3D models. Use apps, draw diagrams, teach others. Anatomy is inherently spatial.

10. **Embryology Integration:** Many anatomy questions test embryology indirectly. The "why" behind structural relationships often lies in development.`,
    },
  },

  media: [
    {
      id: 'anatomy-cross-section',
      type: 'diagram',
      filename: 'anatomy-cross-section.svg',
      title: 'Cross-Sectional Anatomy',
      description: 'Cross-section showing abdominal structures at the L1 level',
    },
    {
      id: 'brachial-plexus',
      type: 'diagram',
      filename: 'brachial-plexus.svg',
      title: 'Brachial Plexus Anatomy',
      description: 'Detailed diagram of the brachial plexus with roots, trunks, divisions, cords, and branches',
    },
  ],

  citations: [
    {
      id: 'netter-atlas',
      type: 'textbook',
      title: 'Atlas of Human Anatomy',
      authors: ['Netter, F.H.'],
      source: 'Elsevier',
      accessedDate: '2025-01-28',
    },
    {
      id: 'first-aid-2024',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 1 2024',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'parent', label: 'Step 1 Overview' },
    { targetId: 'education-usmle-step1-physiology', targetType: 'concept', relationship: 'related', label: 'Step 1 Physiology' },
    { targetId: 'anatomy-basics', targetType: 'concept', relationship: 'related', label: 'Anatomy Basics' },
  ],

  tags: {
    systems: ['medical-education', 'anatomy'],
    topics: ['USMLE Step 1', 'anatomy', 'medical licensing'],
    keywords: ['USMLE', 'Step 1', 'anatomy', 'gross anatomy', 'clinical anatomy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default step1Anatomy;
