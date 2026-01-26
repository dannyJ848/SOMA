/**
 * Anatomical Variants - Common Anatomical Variations
 *
 * Frequently occurring normal anatomical variations that distinguish
 * individual anatomy while maintaining normal function.
 */

import { EducationalContent } from '../../types';

export const ANATOMICAL_VARIANTS: EducationalContent = {
  id: 'anatomy-anomalies-anatomical-variants',
  type: 'topic',
  name: 'Anatomical Variants',
  alternateNames: ['Normal Variants', 'Anatomical Variations', 'Normal Anatomical Variation'],

  levels: {
    1: {
      level: 1,
      summary: 'Anatomical variants are normal differences in body structure that make each person unique, like having different fingerprint patterns or eye colors.',
      explanation: `**What Are Anatomical Variants?**

Anatomical variants are natural differences in how bodies are put together. Just like everyone has different fingerprints, eye colors, or heights, people also have differences inside their bodies.

**Important Points:**

- These are **normal** variations, not diseases
- They usually don't cause any health problems
- Most people have at least one anatomical variant
- Doctors need to know about them so they don't confuse them with problems

**Common Examples:**

**Heart:**
- Heart can be positioned slightly differently
- Extra small blood vessels
- Different branching patterns

**Digestive System:**
- Liver can have different shapes
- Gallbladder might be in different positions
- Intestines can have different lengths

**Bones:**
- Extra ribs
- Bones that fuse together
- Different numbers of small bones in hands and feet

**Other Organs:**
- Kidneys in different positions
- Different spleen sizes and shapes
- Uterus can have different shapes

**Why Do They Happen?**

Anatomical variants happen because:
- Small differences in how babies develop before birth
- Genetics passed from parents
- Natural variation like height or eye color

**When Do They Matter?**

Doctors need to know about anatomical variants when:
- Planning surgery
- Reading X-rays or scans
- Understanding why someone might have symptoms
- Making sure they don't confuse normal variation with disease`,

      keyTerms: [
        { term: 'anatomical variant', definition: 'A normal difference in body structure that doesn\'t affect health' },
        { term: 'normal', definition: 'Typical, healthy, or not causing problems' },
        { term: 'congenital', definition: 'Present from birth' },
      ],

      analogies: [
        'Anatomical variants are like different editions of the same book - the content is the same but the layout might vary.',
        'Think of anatomical variants like different ice cream flavors - they\'re all ice cream, just with slight variations.',
      ],

      examples: [
        'Some people have an extra rib at the bottom of their neck.',
        'The liver can have an extra lobe in some people.',
        'Many people have slightly different arrangements of the veins in their arms.',
      ],

      patientCounselingPoints: [
        'Having an anatomical variant is completely normal and usually doesn\'t affect your health.',
        'Your doctor will note any variants in your record to help with future care if needed.',
      ],
    },

    2: {
      level: 2,
      summary: 'Anatomical variants are normal structural variations present in a significant proportion of the population that do not cause pathology but must be recognized to avoid misdiagnosis and for appropriate clinical management.',
      explanation: `**Definition and Significance**

Anatomical variants represent the spectrum of normal human anatomy. These variations are:
- Present from birth (congenital)
- Do not cause disease or dysfunction
- Occur in a measurable percentage of the population
- Must be distinguished from pathological conditions

**Why Recognition Is Important:**

1. **Avoid Misdiagnosis**: Variants can mimic disease on imaging
2. **Surgical Planning**: Alters surgical approach and technique
3. **Procedure Safety**: Prevents complications during interventions
4. **Patient Education**: Reassures patients about incidental findings
5. **Medical Documentation**: Proper recording for future reference

**Classification by System:**

**Cardiovascular Variants:**

| Variant | Frequency | Clinical Significance |
|---------|-----------|----------------------|
| Left coronary dominance | 8-10% | Affects bypass grafting |
| Coronary artery anomalies | 1% | Some cause sudden death |
| Duplicated SVC | 0.3% | Important for line placement |
| Aberrant subclavian artery | 0.5% | Usually asymptomatic |
| Circumflex aorta | Rare | May compress esophagus |

**Respiratory System Variants:**

| Variant | Frequency | Clinical Significance |
|---------|-----------|----------------------|
| Azygos lobe | 1% | Usually asymptomatic |
| Accessory cardiac bronchus | 0.1-0.5% | Usually asymptomatic |
| Tracheal bronchus | 0.1-2% | May affect intubation |
| Apical segmental bronchus variants | Common | Recognized on bronchoscopy |

**Digestive System Variants:**

| Variant | Frequency | Clinical Significance |
|---------|-----------|----------------------|
| Replaced hepatic artery | 20-30% | Surgical planning |
| Accessory spleen | 10-30% | Malignancy mimic |
| Meckel's diverticulum | 2% | Bleeding, obstruction |
| Gallbladder variations | Variable | Surgical anatomy |
| Pancreas divisum | 5-10% | Pancreatitis risk |

**Musculoskeletal Variants:**

| Variant | Frequency | Clinical Significance |
|---------|-----------|----------------------|
| Cervical rib | 0.5-1% | Thoracic outlet |
| Accessory navicular | 10-25% | Foot pain possible |
| Bipartite patella | 2-3% | Fracture mimic |
| Os acromiale | 1-15% | Impingement |
| Wormian bones | Common | Usually normal |`,

      keyTerms: [
        { term: 'anatomical variant', definition: 'Normal structural variation occurring in a significant portion of population without causing disease' },
        { term: 'incidental finding', definition: 'Unexpected finding discovered while investigating an unrelated condition' },
        { term: 'dominance', definition: 'In cardiology, which coronary artery gives rise to the posterior descending artery' },
        { term: 'SVC', definition: 'Superior vena cava; major vein returning blood to heart from upper body' },
        { term: 'pancreas divisum', definition: 'Congenital failure of pancreatic ducts to fuse, affecting drainage' },
      ],

      analogies: [
        'Coronary dominance is like different highways to the same destination - the routes vary but reach the same place.',
        'The azygos lobe is like a separate room in a house - it\'s unusual but functions perfectly.',
      ],

      clinicalNotes: 'Anatomical variants are most commonly identified incidentally on imaging studies. Recognition prevents unnecessary intervention. Some variants become clinically relevant only during surgery or when they cause symptoms.',
    },

    3: {
      level: 3,
      summary: 'Anatomical variants result from normal variations in embryological development patterns, representing alternative morphological endpoints that maintain normal physiological function despite structural differences from typical anatomy.',
      explanation: `**Embryological Basis of Variants:**

The development of anatomical variants follows normal embryological processes but with variations in:
- Timing of developmental events
- Degree of tissue fusion or regression
- Positional relationships during organogenesis
- Branching patterns of vascular and nervous structures

**Vascular System Variants:**

*Aortic Arch Patterns:*

**Normal (Type A):** 70-80%
- Brachiocephalic trunk
- Left common carotid
- Left subclavian

**Bovine Arch:** 10-27%
- Common origin of brachiocephalic and left common carotid
- Not actually common in cattle; misnomer
- No functional significance

**Aberrant Right Subclavian:** 0.5-2%
- Last branch of aortic arch
- Passes posterior to esophagus
- May cause dysphagia lusoria

**Coronary Dominance:**

| Pattern | Definition | Frequency |
|---------|-----------|-----------|
| Right dominant | PDA from RCA | 60-70% |
| Left dominant | PDA from LCX | 8-10% |
| Codominant | PDA from both | 20-30% |

**Hepatic Artery Variants (Michels Classification):**

**Most Common Types:**
- Type I (Normal): 55%
- Type II (Replaced left from LGA): 10%
- Type III (Replaced right from SMA): 11%
- Type V (Accessory left from LGA): 8%
- Type VI (Accessory right from SMA): 7%

**Lung and Airway Variants:**

*Bronchial Anomalies:*

**Tracheal Bronchus:**
- Originates directly from trachea
- Usually to right upper lobe apical segment
- 0.1-2% prevalence
- May cause ventilation issues

**Cardiac Bronchus:**
- Supernumerary bronchus from intermediate bronchus
- Ventral, medial direction
- Usually non-functioning
- Identified on bronchoscopy

**Azygos Lobe:**
- Created by aberrant azygos vein course
- 1% prevalence
- Right-sided predominance
- Mesoazygos fissure separates lobe

**Musculoskeletal Variants:**

*Vertebral Anomalies:*

**Transitional Vertebrae:**
- Lumbarization of S1
- Sacralization of L5
- 5-15% prevalence
- Alters biomechanics, may accelerate degeneration

**Spina Bifida Occulta:**
- Incomplete posterior arch fusion
- 5-10% prevalence
- Usually no neural involvement
- Distinguish from spina bifida cystica

*Foot Variants:*

**Accessory Navicular (Type II):**
- Secondary ossification center
- 10-25% prevalence
- Synchondrosis with navicular
- May become painful

**Os Trigonum:**
- Posterior talus accessory bone
- 5-15% prevalence
- Posterior impingement syndrome possible
- Stedella's process (alternative name)

**Sesamoid Bones:**

| Location | Normal | Variation |
|----------|--------|-----------|
| 1st MCP (hand) | 2 | 1-3 possible |
| 1st MTP (foot) | 2 | Common bipartite |
| Other MCP/MTP | 0 | Occasionally present |
| Knee (fabella) | Variable | 10-30% |`,

      keyTerms: [
        { term: 'bovine arch', definition: 'Aortic arch variant with common origin of brachiocephalic and left common carotid' },
        { term: 'dysphagia lusoria', definition: 'Difficulty swallowing caused by aberrant subclavian artery compression' },
        { term: 'PDA', definition: 'Posterior descending artery; determines coronary dominance' },
        { term: 'lumbarization', definition: 'First sacral segment with lumbar characteristics' },
        { term: 'sacralization', definition: 'Fifth lumbar segment fused to sacrum' },
        { term: 'synchondrosis', definition: 'Cartilaginous joint between bones; accessory navicular attachment' },
      ],

      analogies: [
        'Coronary dominance is like different road systems reaching the same destination - the routes vary but serve the same function.',
        'Transitional vertebrae are like border cities with characteristics of both neighboring states.',
      ],

      clinicalNotes: 'The "bovine arch" is a misnomer as cattle actually have a single brachiocephalic trunk giving rise to both subclavians and carotids. Accessory navicular can become symptomatic with flatfoot deformity or trauma. Os trigonum syndrome causes posterior ankle pain in plantar flexion.',
    },

    4: {
      level: 4,
      summary: 'Anatomical variants represent alternative morphological endpoints of normal developmental processes, with specific patterns that reflect embryological mechanisms and have varying degrees of clinical significance depending on the system and specific variant.',
      explanation: `**Advanced Classification Systems:**

*Hepatic Artery Variants - Complete Michels Classification:*

| Type | Pattern | Frequency | Surgical Impact |
|------|---------|-----------|-----------------|
| I | Standard anatomy | 55% | Reference |
| II | Replaced LHA from LGA | 10% | Recognize during dissection |
| III | Replaced RHA from SMA | 11% | Avoid injury during gastrectomy |
| IV | Replaced LHA + RHA | 1% | Complex reconstruction |
| V | Accessory LHA from LGA | 8% | Preserve during hepatectomy |
| VI | Accessory RHA from SMA | 7% | Identify in pancreas surgery |
| VII | Accessory LHA + RHA | 1% | Rare, complex |
| VIII | Replaced + accessory | Rare | Very complex |
| IX | Common hepatic from SMA | 2-4% | Identify before mobilization |
| X | Other combinations | Rare | Individualize |

**Renal Vascular Variants:**

*Arterial Patterns:*
- **Single renal artery each side**: 70%
- **Multiple arteries**: 25-30% (more common on left)
- **Early branching (<1.5 cm)**: Common
- **Hilar vs. extrahilar entry**: Variable

*Venous Patterns:*
- **Single renal vein**: Standard
- **Multiple right renal veins**: Common
- **Retroaortic left renal vein**: 1.7-3.4%
- **Circumaortic left renal vein**: 1.2-8.7%

**Spleen Variants:**

*Accessory Spleens:*
- Single: 10-30%
- Multiple: Variable
- Locations in order of frequency:
  1. Splenic hilum
  2. Tail of pancreas
  3. Splenocolic ligament
  4. Greater omentum
  5. Mesentery

*Clinical Significance:*
- May hypertrophy after splenectomy
- Can mimic lymphadenopathy on imaging
- Must be removed for hematologic diseases

**Pancreatic Variants:**

*Pancreas Divisum:*
- **Embryology**: Failure of dorsal/ventral duct fusion
- **Anatomy**: Separate drainage systems
  - Major papilla: Ventral duct only
  - Minor papilla: Dorsal duct (majority of gland)
- **Clinical**: 5-10% population
- **Symptoms**: Recurrent pancreatitis in subset
- **Diagnosis**: MRCP, ERCP
- **Treatment**: Minor papilla sphincterotomy

*Anular Pancreas:*
- **Embryology**: Abnormal ventral bud rotation
- **Anatomy**: Pancreatic tissue encircles duodenum
- **Clinical**: May cause duodenal obstruction
- **Treatment**: Bypass surgery (duodenoduodenostomy)

**Complex Skeletal Variants:**

*Os Acromiale Types:*
- **Preacromion**: Anterior fragment
- **Mesoacromion**: Most common, middle fragment
- **Meta-acromion**: Posterior fragment
- **Basi-acromion**: Rare, base fragment
- **Significance**: Impingement, rotator cuff tears

*Cervical Rib Types:*
- **Type I**: Complete, forms true rib
- **Type II**: Incomplete, free end
- **Type III**: Small, rudimentary
- **Clinical**: Thoracic outlet syndrome when complete`,

      keyTerms: [
        { term: 'ERCP', definition: 'Endoscopic retrograde cholangiopancreatography; imaging of pancreaticobiliary tree' },
        { term: 'MRCP', definition: 'Magnetic resonance cholangiopancreatography; non-invasive pancreaticobiliary imaging' },
        { term: 'thoracic outlet syndrome', definition: 'Compression of brachial plexus, subclavian vessels at thoracic outlet' },
        { term: 'retroaortic left renal vein', definition: 'Left renal vein passing posterior rather than anterior to aorta' },
        { term: 'circumaortic left renal vein', definition: 'Left renal vein both anterior and posterior to aorta (complete collar)' },
      ],

      clinicalNotes: 'Hepatic artery variants require careful identification during hepatobiliary surgery to avoid ischemia. Accessory spleens must be removed for hematologic conditions like ITP. Pancreas divisum is the most common congenital pancreatic anomaly but requires treatment only in symptomatic patients.',
    },

    5: {
      level: 5,
      summary: 'Anatomical variants represent the spectrum of normal human morphology resulting from genetic, epigenetic, and environmental influences on developmental processes, with clinical implications extending from recognition to management decisions.',
      explanation: `**Advanced Concepts in Anatomical Variation:**

*Population Genetics of Variants:*

**Ethnic and Geographic Variation:**
- **Hepatic artery variants**: Higher in some populations
- **Renal artery variants**: Ethnic differences documented
- **Skeletal variants**: Geographic clustering
- **Coronary dominance**: Slight ethnic variations

**Sexual Dimorphism:**
- **Uterine variants**: Female-specific
- **Prostatic variations**: Male-specific
- **Coronary artery size**: Sexual dimorphism
- **Pelvic inlet shape**: Sex differences

**Developmental Biology Perspectives:**

*Mechanisms of Variant Formation:*
1. **Altered Gene Expression**: Modified developmental timing
2. **Epigenetic Modification**: Heritable expression changes
3. **Mechanical Factors**: In utero position, movement
4. **Vascular Flow Patterns**: Hemodynamic influences
5. **Cellular Migration**: Altered pathways

**Molecular Pathways:**

*Laterality Determination:*
- **Nodal signaling cascade**: Left-right asymmetry
- **Pitx2**: Left-sided morphogenesis
- **Lefty**: Inhibition of left signaling on right
- **Randomization**: Situs ambiguous in heterotaxy

*Organogenesis Genes:*
- **Hox genes**: Axial patterning
- **Shh**: Midline development
- **BMP**: Organ size and shape
- **FGF**: Branching morphogenesis

**Clinical Decision-Making:**

*Preoperative Imaging:*
- **Indications**: Known variant possibility, complex surgery
- **Modalities**: CT angiography, MR angiography
- **3D reconstruction**: Enhanced visualization
- **Planning**: Virtual surgery simulation

*Intraoperative Recognition:*
- **Variant suspicion**: Discrepancy from expected anatomy
- **Identification**: Careful dissection, intraoperative imaging
- **Documentation**: Photographs, descriptions
- **Adaptation**: Modify technique as needed

**Ethical and Legal Considerations:**

*Informed Consent:*
- **Disclosure**: Known variants, possibility of unknown
- **Risk assessment**: Variant-related complications
- **Alternative approaches**: When variant alters plan
- **Documentation**: Clear consent documentation

*Medicolegal Implications:*
- **Standard of care**: Recognize and manage variants
- **Complications**: Variant-related injury
- **Documentation**: Critical for defense
- **Communication**: Clear documentation in records

**Future Directions:**

*Precision Medicine:*
- **Genetic testing**: Predict variant likelihood
- **Phenotype databases**: Large-scale variant catalogs
- **AI-assisted detection**: Automated variant recognition
- **Personalized planning**: Individualized approaches

*Research Frontiers:*
- **Developmental biology**: Mechanism elucidation
- **Population studies**: Variant epidemiology
- **Outcome studies**: Impact on surgical results
- **Educational tools**: Enhanced variant recognition`,

      keyTerms: [
        { term: 'sexual dimorphism', definition: 'Phenotypic differences between males and females of same species' },
        { term: 'laterality determination', definition: 'Embryological process establishing left-right asymmetry' },
        { term: 'heterotaxy', definition: 'Abnormal arrangement of thoracoabdominal organs across left-right axis' },
        { term: 'precision medicine', definition: 'Medical approach customized to individual characteristics' },
      ],

      clinicalNotes: 'Preoperative recognition of anatomical variants is essential for surgical safety. Accessory spleens must be removed for hematologic diseases. Pancreas divisum requires MRCP for diagnosis; treatment indicated only for symptomatic patients. Ethnic variations in prevalence should be considered in preoperative assessment.',
    },
  },

  media: [
    {
      id: 'anatomical-variants-1',
      type: 'diagram',
      filename: 'coronary-dominance.svg',
      title: 'Coronary Artery Dominance Patterns',
      description: 'Illustration of right dominant, left dominant, and codominant patterns',
    },
    {
      id: 'anatomical-variants-2',
      type: 'diagram',
      filename: 'hepatic-artery-variants.svg',
      title: 'Hepatic Artery Variants (Michels)',
      description: 'Complete classification of hepatic artery anatomical variants',
    },
    {
      id: 'anatomical-variants-3',
      type: 'diagram',
      filename: 'lung-anomalies.svg',
      title: 'Bronchial Anomalies',
      description: 'Tracheal bronchus, cardiac bronchus, and azygos lobe',
    },
  ],

  citations: [
    {
      id: 'standring-variants',
      type: 'textbook',
      title: 'Anatomical Variants',
      source: 'Gray\'s Anatomy, 42nd Edition',
      chapter: 'Clinical Anatomy',
      license: 'Copyrighted',
    },
    {
      id: 'moore-clinical',
      type: 'textbook',
      title: 'Clinical Anatomy',
      source: 'Clinically Oriented Anatomy, Moore, 9th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-anomalies-common-congenital', targetType: 'topic', relationship: 'related', label: 'Common Congenital Anomalies' },
    { targetId: 'anatomy-variations-vascular', targetType: 'topic', relationship: 'related', label: 'Vascular Variations' },
    { targetId: 'anatomy-variations-organ', targetType: 'topic', relationship: 'related', label: 'Organ Variations' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['anatomy', 'anatomical variants', 'surgical anatomy', 'radiology'],
    keywords: ['variants', 'anatomical variations', 'normal variants', 'congenital', 'surgical planning'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'radiology', 'anatomy'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
