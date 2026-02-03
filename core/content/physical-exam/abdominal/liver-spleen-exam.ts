/**
 * Liver and Spleen Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const liverSpleenExam: EducationalContent = {
  id: 'abdominal-liver-spleen-exam',
  type: 'topic',
  name: 'Liver and Spleen Examination',
  alternateNames: ['Hepatosplenic Exam', 'Liver Palpation', 'Spleen Palpation'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors check the liver and spleen by feeling the upper belly to see if these organs are enlarged or tender.',
      explanation: `## Checking the Liver and Spleen

The liver and spleen are two important organs in your upper belly. Doctors check them to make sure they are healthy.

### The Liver
**Where it is:** Right upper belly, under the ribs
**What it does:**
- Filters blood
- Makes bile for digestion
- Stores energy
- Processes medicines

**How doctors check it:**
- They press under your right ribs while you breathe in
- They feel for the bottom edge of the liver
- They tap on your belly to map the liver size
- A healthy liver edge feels smooth and firm

### The Spleen
**Where it is:** Left upper belly, under the ribs
**What it does:**
- Filters blood
- Fights infections
- Stores blood cells

**How doctors check it:**
- They press under your left ribs while you breathe in
- A normal spleen is usually too small to feel
- If they can feel it, that usually means it is enlarged

### Why This Matters

An enlarged liver or spleen can mean:
- Infection (like mono or hepatitis)
- Liver disease
- Blood problems
- Cancer
- Heart problems

Finding these problems early helps doctors treat them better.`,

      keyTerms: [
        { term: 'liver', definition: 'Large organ in the right upper belly that filters blood and makes bile' },
        { term: 'spleen', definition: 'Organ in the left upper belly that filters blood and fights infection' },
        { term: 'enlarged', definition: 'Bigger than normal size' },
        { term: 'tender', definition: 'Painful when touched' },
        { term: 'organ', definition: 'A part of the body that does a specific job' },
      ],

      analogies: [
        'The liver is like a water filter for your blood - it cleans out toxins and waste.',
        'The spleen is like a security guard - it removes bad cells and fights invaders.',
        'Feeling for the liver edge is like finding the bottom of a balloon under a blanket.',
      ],

      examples: [
        'Mono can make the spleen enlarged and tender.',
        'Drinking too much alcohol can make the liver enlarged.',
        'Heart failure can cause both organs to enlarge due to backed-up blood.',
      ],

      patientCounselingPoints: [
        'You may feel pressure but this should not be painful - tell your doctor if it hurts.',
        'Deep breathing helps the doctor feel the organs better.',
        'An enlarged organ does not always mean something serious.',
      ],
    },

    2: {
      level: 2,
      summary: 'Liver and spleen examination uses palpation and percussion to assess organ size, consistency, and tenderness, detecting hepatomegaly and splenomegaly.',
      explanation: `## Liver Examination

### Anatomy Review
- Largest solid organ in the body
- Located in right upper quadrant
- Extends from 5th intercostal space to costal margin
- Protected by ribs 7-11

### Palpation Techniques

**Standard Method:**
1. Place right hand parallel to costal margin
2. Start in right lower quadrant
3. Press firmly upward
4. Ask patient to take deep breath
5. Feel for liver edge descending with diaphragm

**Hooking Method:**
- Stand facing patient\'s head
- Hook fingers over costal margin
- Feel for liver edge during inspiration
- Useful for obese patients

**Scratch Test:**
- Place stethoscope over liver area
- Scratch abdomen starting from below
- Sound becomes louder over liver
- Maps liver border

### Assessment Criteria

| Feature | Normal | Abnormal Findings |
|---------|--------|-------------------|
| Size | 6-12 cm span | >12 cm hepatomegaly |
| Edge | Sharp, smooth | Blunt, irregular, nodular |
| Surface | Smooth | Nodular, irregular |
| Consistency | Soft, firm | Hard, rock-like |
| Tenderness | Non-tender | Tender |

## Spleen Examination

### Anatomy
- Located in left upper quadrant
- Protected by ribs 9-11
- Normally not palpable
- Weighs 150-200 grams

### Palpation Methods

**Standard Method:**
1. Start in right lower quadrant
2. Move toward left upper quadrant
3. Press under left costal margin
4. Feel during deep inspiration
5. Palpate with patient in right lateral decubitus if needed

**Bimanual Method:**
- One hand behind left lower ribs
- Other hand anterior under costal margin
- Compress during inspiration

### Interpretation
- **Not palpable:** Normal or slightly enlarged
- **Palpable:** Always abnormal (except very thin athletes)
- Record as number of cm below costal margin

### Percussion
- Castell technique: percuss at left anterior axillary line
- Dullness with inspiration suggests splenomegaly`,

      keyTerms: [
        { term: 'hepatomegaly', definition: 'Enlarged liver beyond normal size' },
        { term: 'splenomegaly', definition: 'Enlarged spleen' },
        { term: 'consistency', definition: 'How firm or soft tissue feels' },
        { term: 'nodular', definition: 'Having lumps or bumps on the surface' },
        { term: 'diaphragm', definition: 'Muscle separating chest from abdomen that moves during breathing' },
      ],

      analogies: [
        'Palpating the liver is like catching a ball - you need to time it with the breath.',
        'The spleen is like a shy animal - normally hidden but visible when it grows.',
      ],

      examples: [
        'Smooth, tender hepatomegaly suggests hepatitis or congestion.',
        'Nodular liver edge suggests cirrhosis.',
        'Massive splenomegaly suggests malaria or myelofibrosis.',
      ],

      clinicalNotes: 'Never palpate a spleen known to be massively enlarged - risk of rupture.',
    },

    3: {
      level: 3,
      summary: 'Comprehensive hepatosplenic examination includes specialized techniques to assess organ characteristics and identify causes of enlargement.',
      explanation: `## Advanced Liver Assessment

### Percussion Mapping

**Liver Span Measurement:**
1. Right midclavicular line
2. Percuss from lung to liver dullness (top)
3. Percuss to tympany at costal margin (bottom)
4. Measure distance: 6-12 cm normal

**Factors Affecting Span:**
- Height (taller = larger span)
- Body habitus
- COPD (liver pushed down)
- Pleural effusion (liver pushed down)

### Texture and Surface

**Causes of Smooth Hepatomegaly:**
- Hepatitis (viral, alcoholic, drug-induced)
- Congestive heart failure
- Fatty liver disease
- Early cirrhosis

**Causes of Nodular/Rough Liver:**
- Cirrhosis (macronodular or micronodular)
- Metastatic cancer
- Polycystic liver disease
- Hydatid cysts

**Pulsatile Liver:**
- Tricuspid regurgitation
- Severe tricuspid stenosis

## Spleen Assessment

### Grading Splenomegaly

| Grade | Description | Approximate Size |
|-------|-------------|------------------|
| Mild | Just palpable | 2-3x normal |
| Moderate | To umbilicus | 3-5x normal |
| Massive | Below umbilicus | >5x normal |

### Differential Diagnosis by Size

**Mild Splenomegaly:**
- Infections (mono, viral hepatitis)
- Early portal hypertension
- Hemolytic anemia
- Autoimmune diseases

**Moderate Splenomegaly:**
- Cirrhosis with portal hypertension
- Lymphoma
- Leukemia
- Hemolytic anemias

**Massive Splenomegaly:**
- Myelofibrosis
- Chronic malaria
- Leishmaniasis (kala-azar)
- Gaucher disease
- Chronic lymphocytic leukemia

### Special Techniques

**Spleen Percussion:**
- Traube space: tympany to dullness
- Nixon method: percuss from lower left chest
- Both lose sensitivity with obesity or COPD`,

      keyTerms: [
        { term: 'portal hypertension', definition: 'Increased pressure in portal vein system' },
        { term: 'congestive hepatopathy', definition: 'Liver damage from venous congestion' },
        { term: 'hypersplenism', definition: 'Overactive spleen causing blood cell destruction' },
        { term: 'cirrhosis', definition: 'Scarring of the liver' },
      ],

      analogies: [
        'Portal hypertension is like a traffic jam - blood backs up and enlarges the spleen.',
        'Different liver textures are like different road surfaces - smooth highway vs bumpy gravel.',
      ],

      examples: [
        'Tricuspid regurgitation causes a pulsatile liver that beats with the heart.',
        'Myelofibrosis can cause massive splenomegaly extending to the pelvis.',
        'Budd-Chiari syndrome causes tender hepatomegaly with ascites.',
      ],

      clinicalNotes: 'Massive splenomegaly is defined as spleen palpable below the umbilicus or crossing midline.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of liver and spleen findings to diagnose hepatobiliary disease, hematologic disorders, and systemic conditions.',
      explanation: `## Clinical Patterns

### Hepatomegaly Patterns

**Congestive Pattern:**
- Smooth, tender, pulsatile
- Jugular venous distension
- Peripheral edema
- Causes: Right heart failure, constrictive pericarditis

**Inflammatory Pattern:**
- Smooth, tender, soft
- May have bruit
- Causes: Viral hepatitis, alcohol, drugs

**Neoplastic Pattern:**
- Nodular, firm or hard
- May be tender
- Causes: Primary HCC, metastases

**Infiltrative Pattern:**
- Smooth, firm, non-tender
- Hepatomegaly out of proportion to dysfunction
- Causes: Fatty liver, amyloidosis, leukemia

### Splenomegaly Workup

**Laboratory Evaluation:**
- CBC with smear (hemolysis, infiltration)
- LFTs (liver disease)
- Infectious serologies (EBV, CMV, HIV)
- Peripheral smear morphology

**Imaging:**
- Ultrasound: size, texture, portal vein
- CT: characterize masses, assess for lymphoma
- MRI: iron overload, lesions

**Indications for Splenectomy:**
- Traumatic rupture
- Refractory ITP
- Hereditary spherocytosis
- Diagnostic (lymphoma staging)

### Special Considerations

**Cirrhosis Assessment:**
- Shrunken liver (late) vs enlarged (early/compensated)
- Splenomegaly from portal hypertension
- Ascites common
- Risk of hepatocellular carcinoma

**Infectious Causes:**
- EBV: mild hepatosplenomegaly, atypical lymphocytes
- CMV: similar, common in immunocompromised
- Malaria: massive splenomegaly, cyclic fevers
- Schistosomiasis: pipe-stem fibrosis, portal hypertension`,

      keyTerms: [
        { term: 'hepatocellular carcinoma', definition: 'Primary liver cancer' },
        { term: 'Budd-Chiari syndrome', definition: 'Hepatic vein thrombosis' },
        { term: 'amyloidosis', definition: 'Protein deposition disease' },
        { term: 'ITP', definition: 'Immune thrombocytopenic purpura' },
      ],

      clinicalNotes: 'New-onset massive splenomegaly in adults warrants workup for hematologic malignancy.',
    },

    5: {
      level: 5,
      summary: 'Expert-level hepatosplenic examination for complex cases, rare conditions, and integration with advanced diagnostic techniques.',
      explanation: `## Advanced Diagnostic Integration

### Complex Presentations

**Portal Hypertension Evaluation:**
- Splenomegaly + ascites + varices
- Caput medusae
- Cruveilhier-Baumgarten murmur
- Hepatic encephalopathy

**Budd-Chiari Syndrome:**
- Acute: painful hepatomegaly, ascites
- Chronic: cirrhosis picture
- Risk factors: hypercoagulable states, myeloproliferative disorders

**Hepatic Masses:**
- Hepatic bruit over tumor
- Friction rub with surface lesions
- Hepatomegaly with focal lesion vs diffuse

### Rare Conditions

**Hereditary Hemorrhagic Telangiectasia:**
- Pulmonary AV fistulas
- Hepatic AV shunts
- High-output cardiac failure
- Enlarged, pulsatile liver

**Gaucher Disease:**
- Massive splenomegaly
- Hypersplenism
- Bone pain, fractures
- Enzyme replacement available

**Polycystic Liver Disease:**
- Massive hepatomegaly
- Preserved liver function
- Complications: cyst hemorrhage, infection

### Evidence-Based Approach

**Diagnostic Accuracy:**
- Physical exam for splenomegaly: sensitivity 56-78%
- Ultrasound gold standard for size
- CT/MRI for characterization

**When to Image:**
- Any palpable spleen in adults
- Changing liver size
- New hepatomegaly with abnormal LFTs
- Evaluation for transplant`,

      keyTerms: [
        { term: 'Cruveilhier-Baumgarten murmur', definition: 'Venous hum from portal-systemic collateral' },
        { term: 'AV fistula', definition: 'Abnormal connection between artery and vein' },
        { term: 'myeloproliferative disorder', definition: 'Bone marrow overproduction syndromes' },
      ],

      clinicalNotes: 'In cirrhosis, shrinking liver with rising AFP suggests HCC development.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-hepatosplenic',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'abdominal-inspection-palpation', targetType: 'topic', relationship: 'sibling', label: 'Inspection and Palpation' },
    { targetId: 'abdominal-percussion-auscultation', targetType: 'topic', relationship: 'sibling', label: 'Percussion and Auscultation' },
    { targetId: 'gastroenterology-cirrhosis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hematologic'],
    topics: ['physical-examination'],
    keywords: ['liver', 'spleen', 'hepatomegaly', 'splenomegaly'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default liverSpleenExam;
