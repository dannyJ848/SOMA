/**
 * Abdominal Percussion and Auscultation - Physical Examination
 */

import { EducationalContent } from '../../types';

export const percussionAuscultation: EducationalContent = {
  id: 'abdominal-percussion-auscultation',
  type: 'topic',
  name: 'Abdominal Percussion and Auscultation',
  alternateNames: ['Abdominal Sound Exam', 'Abdominal Percussion'],

  levels: {
    1: {
      level: 1,
      summary: 'Abdominal percussion and auscultation use tapping and listening to check what is inside the belly and how the intestines are working.',
      explanation: `## What Are Percussion and Auscultation?

These are two more ways doctors check your abdomen:

### Percussion (Tapping)
The doctor taps on your belly with their fingers, like drumming. This helps them:
- **Find organ sizes** - Solid organs sound different than air
- **Detect fluid** - Fluid sounds dull when tapped
- **Locate gas** - Air-filled areas sound hollow
- **Check for masses** - Lumps sound different than normal tissue

Different sounds mean different things:
- **Tympanic** (like a drum) - Air is present (normal in most of belly)
- **Dull** (like a thud) - Solid organ or fluid
- **Resonant** - More air than normal

### Auscultation (Listening)
The doctor listens to your belly with a stethoscope to:
- **Hear bowel sounds** - The gurgling of digestion
- **Check blood flow** - Sometimes can hear blood moving through vessels
- **Detect abnormal sounds** - Sounds that should not be there

Normal bowel sounds are gurgles and clicks every few seconds. The doctor listens for:
- **Too active** - Could mean early blockage or diarrhea
- **Too quiet** - Could mean blockage or inflammation
- **High-pitched** - Could mean serious blockage
- **Absent** - Could mean no movement in intestines

### Why These Tests Matter

These simple tests help doctors find:
- Blocked intestines
- Fluid in the belly
- Enlarged organs
- Blood vessel problems
- Need for further tests`,

      keyTerms: [
        { term: 'percussion', definition: 'Tapping the body to determine what is underneath based on sound' },
        { term: 'auscultation', definition: 'Listening to body sounds with a stethoscope' },
        { term: 'tympanic', definition: 'Drum-like sound heard over air-filled spaces' },
        { term: 'dullness', definition: 'Thud-like sound heard over solid organs or fluid' },
        { term: 'bowel sounds', definition: 'Gurgling noises made by intestines moving food and gas' },
      ],

      analogies: [
        'Percussion is like tapping a watermelon to check if it is ripe - different sounds mean different contents.',
        'Auscultation is like listening to a car engine to diagnose problems.',
        'Tympanic sound is like tapping an empty box, dullness is like tapping a box full of books.',
      ],

      examples: [
        'Tapping over the stomach and hearing tympanic sounds means air is present.',
        'Hearing no bowel sounds after surgery might mean the intestines are still waking up.',
        'High-pitched tinkling sounds can mean a blocked intestine.',
      ],

      patientCounselingPoints: [
        'Your belly may be tapped in many places during this exam.',
        'The stethoscope may feel cold but the exam is painless.',
        'Do not be embarrassed by gurgling sounds - they are normal.',
      ],
    },

    2: {
      level: 2,
      summary: 'Abdominal percussion and auscultation assess organ borders, detect fluid or air abnormalities, and evaluate bowel function through sound interpretation.',
      explanation: `## Percussion Techniques

### Basic Percussion
- Hyperextend middle finger (pleximeter) on abdomen
- Tap middle phalanx with opposite middle finger (plexor)
- Use wrist action, not arm
- Compare symmetric areas

### Percussion Notes

| Sound | Characteristics | Indicates |
|-------|-----------------|-----------|
| Tympany | High-pitched, musical, drum-like | Gas (normal) |
| Dullness | Short, thud-like, high-pitched | Solid organ, fluid, mass |
| Resonance | Hollow, loud, low-pitched | Excess air |
| Flatness | Very dull, brief | Dense tissue, large fluid |

### Clinical Applications

**Liver Percussion:**
- Percuss from lung resonance to liver dullness
- Upper border: 5th-7th intercostal space
- Lower border: midclavicular line
- Normal span: 6-12 cm

**Spleen Percussion:**
- Percuss left anterior axillary line to midaxillary line
- Traube space: tympanic area over gastric air bubble
- Dullness suggests splenomegaly

**Bladder Percussion:**
- Suprapubic area
- Dullness when bladder full
- Tympany after voiding

## Auscultation Techniques

### Bowel Sound Assessment
- Listen in all four quadrants
- Minimum 1-2 minutes before calling absent
- Rate: normally 5-35 sounds per minute

### Classification

| Type | Description | Clinical Significance |
|------|-------------|----------------------|
| Normal | Gurgles, clicks, irregular | Healthy bowel function |
| Hyperactive | Loud, frequent, high-pitched | Gastroenteritis, early obstruction |
| Hypoactive | Fewer than normal | Ileus, peritonitis, post-op |
| Absent | No sounds for 2+ minutes | Paralytic ileus, peritonitis |
| Borborygmi | Loud gurgling | Hyperperistalsis, diarrhea |

### Vascular Sounds
- Listen over aorta, renal arteries, iliac arteries
- Bruits indicate turbulent flow
- Suggests stenosis or aneurysm`,

      keyTerms: [
        { term: 'pleximeter', definition: 'Finger placed on body to receive percussion tap' },
        { term: 'plexor', definition: 'Finger used to strike the pleximeter' },
        { term: 'Traube space', definition: 'Tympanic area over gastric air bubble on left side' },
        { term: 'borborygmi', definition: 'Audible abdominal sounds from gas moving through intestines' },
        { term: 'bruit', definition: 'Abnormal sound heard over blood vessels indicating turbulent flow' },
        { term: 'ileus', definition: 'Lack of intestinal movement' },
      ],

      analogies: [
        'Percussion mapping is like sonar - using sound waves to map internal structures.',
        'Different percussion notes are like different musical instruments - each has its own sound.',
      ],

      examples: [
        'Shifting dullness on percussion confirms ascites.',
        'High-pitched tinkling suggests early bowel obstruction.',
        'A systolic bruit over the aorta suggests aneurysm or stenosis.',
      ],

      clinicalNotes: 'Always auscultate before percussion or palpation to avoid altering bowel sounds.',
    },

    3: {
      level: 3,
      summary: 'Systematic percussion and auscultation techniques map organ borders, detect pathological conditions, and differentiate normal from abnormal abdominal findings.',
      explanation: `## Detailed Percussion Methods

### Organ Mapping

**Liver Span Measurement:**
1. Start percussing at right midclavicular line at nipple level
2. Move downward until note changes from resonant to dull (upper border)
3. Continue to tympanic area at costal margin (lower border)
4. Measure distance between borders

**Spleen Assessment:**
- Castell point: intersection of left midaxillary line and costal margin
- Dullness with inspiration suggests splenomegaly
- Nace method: percuss from lower left anterior chest

**Kidney Percussion:**
- Posterior percussion over costovertebral angles
- Tenderness suggests pyelonephritis or obstruction

### Detecting Ascites

**Shifting Dullness:**
1. Patient supine - percuss from mid-abdomen to flank
2. Note where dullness begins (usually lateral)
3. Roll patient toward side
4. Percuss again - dullness shifts to dependent side
5. Sensitivity: ~83% for moderate ascites

**Fluid Wave:**
1. Patient or assistant presses hand firmly on mid-abdomen
2. Tap one flank sharply
3. Feel opposite flank for transmitted impulse
4. Prevents transmission through fat

## Advanced Auscultation

### Intestinal Obstruction Patterns

**Early (Partial) Obstruction:**
- Hyperactive, high-pitched sounds
- Tinkling quality
- Rush of fluid with peristalsis

**Late (Complete) Obstruction:**
- Decreased then absent sounds
- Silent abdomen ominous
- Indicates ischemia risk

**Paralytic Ileus:**
- Absent or hypoactive sounds
- Distended, tympanic abdomen
- No peristaltic activity

### Special Tests

**Succussion Splash:**
- Shake patient at level of stomach
- Listen with stethoscope
- Indicates gastric outlet obstruction
- Also normal immediately after eating

**Friction Rubs:**
- Grating sound with respiration
- Suggests perisplenitis or perihepatitis
- Rare but important finding`,

      keyTerms: [
        { term: 'Castell point', definition: 'Location for splenic percussion at left midaxillary line' },
        { term: 'succussion splash', definition: 'Splashing sound indicating fluid and air in stomach' },
        { term: 'costovertebral angle', definition: 'Area between ribs and spine overlying kidneys' },
        { term: 'perisplenitis', definition: 'Inflammation of the capsule surrounding the spleen' },
      ],

      analogies: [
        'Shifting dullness is like the tide coming in - the fluid (dullness) moves with gravity.',
        'Listening for bowel sounds is like listening for traffic - silence can be as meaningful as noise.',
      ],

      examples: [
        'A fluid wave with shifting dullness confirms significant ascites.',
        'High-pitched tinkling with distension suggests mechanical obstruction.',
        'Dullness over Traube space indicates splenomegaly.',
      ],

      clinicalNotes: 'Succussion splash is only valid if patient has not eaten for at least 2-4 hours.',
    },

    4: {
      level: 4,
      summary: 'Advanced percussion and auscultation integrate with clinical findings to diagnose complex conditions and guide management decisions.',
      explanation: `## Clinical Applications

### Ascites Quantification

**Physical Exam vs Imaging:**
- Physical exam detects >1500 mL
- Ultrasound detects <100 mL
- CT most sensitive

**Classification:**
| Grade | Amount | Clinical Finding |
|-------|--------|------------------|
| Minimal | <500 mL | Imaging only |
| Mild | 500-1500 mL | Shifting dullness |
| Moderate | 1500-3000 mL | Fluid wave positive |
| Massive | >3000 mL | Tense, bulging flanks |

### Obstruction Diagnosis

**Mechanical vs Paralytic:**
- Mechanical: High-pitched, hyperactive early, absent late
- Paralytic: Absent throughout

**Strangulation Indicators:**
- Fever, tachycardia, leukocytosis
- Constant severe pain
- Peritoneal signs
- Bloody stool

### Vascular Assessment

**Aortic Bruit:**
- Suggests stenosis, aneurysm, or tortuosity
- In young: coarctation or fibromuscular dysplasia
- In elderly: atherosclerotic disease

**Renal Artery Bruit:**
- Heard in epigastrium or flanks
- Suggests renal artery stenosis
- Associated with hypertension

### Special Populations

**Post-Operative:**
- Normal ileus lasts 24-72 hours
- Prolonged ileus: consider complication
- Early feeding often stimulates return of function

**Pregnancy:**
- Bowel sounds may be altered by uterus
- Ascites detection more difficult
- Listen higher in abdomen`,

      keyTerms: [
        { term: 'paracentesis', definition: 'Removal of fluid from peritoneal cavity' },
        { term: 'spontaneous bacterial peritonitis', definition: 'Infection of ascitic fluid' },
        { term: 'hepatic hydrothorax', definition: 'Pleural effusion due to liver disease' },
        { term: 'pseudo-obstruction', definition: 'Obstruction symptoms without mechanical blockage' },
      ],

      clinicalNotes: 'Always consider diagnostic paracentesis in new-onset ascites or when infection suspected.',
    },

    5: {
      level: 5,
      summary: 'Expert-level interpretation of percussion and auscultation findings for complex diagnostic challenges and critical care applications.',
      explanation: `## Evidence-Based Physical Diagnosis

### Diagnostic Accuracy

| Finding | Condition | Sensitivity | Specificity |
|---------|-----------|-------------|-------------|
| Shifting dullness | Ascites | 83% | 56% |
| Fluid wave | Ascites | 53% | 90% |
| Absent bowel sounds | Ileus | 38% | 94% |
| High-pitched sounds | Obstruction | 41% | 88% |

### Complex Scenarios

**Cirrhotic Ascites:**
- Transudate: low protein, low LDH
- Risk of SBP (spontaneous bacterial peritonitis)
- Hepatorenal syndrome with worsening

**Malignant Ascites:**
- Exudate: high protein, cells
- Peritoneal carcinomatosis
- Ovarian cancer common cause

**Chylous Ascites:**
- Milky appearance
- Triglycerides >110 mg/dL
- Trauma or malignancy related

### Critical Care Applications

**Abdominal Compartment Syndrome:**
- Intra-abdominal pressure >20 mmHg
- Bladder pressure measurement
- Decreased bowel sounds
- Tense, distended abdomen

**Necrotizing Enterocolitis:**
- High-pitched bowel sounds early
- Absent sounds late
- Pneumatosis on imaging
- Portal venous gas

### Teaching Points
- Physical exam less sensitive than imaging
- Clinical context essential
- Trend changes over time
- Combine with other findings`,

      keyTerms: [
        { term: 'transudate', definition: 'Low-protein fluid due to pressure changes' },
        { term: 'exudate', definition: 'High-protein fluid due to inflammation' },
        { term: 'pneumatosis', definition: 'Gas in bowel wall indicating ischemia' },
      ],

      clinicalNotes: 'Bedside ultrasound has largely replaced physical exam for ascites detection in modern practice.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-percussion',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'abdominal-inspection-palpation', targetType: 'topic', relationship: 'sibling', label: 'Inspection and Palpation' },
    { targetId: 'abdominal-liver-spleen', targetType: 'topic', relationship: 'sibling', label: 'Liver and Spleen Exam' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['physical-examination'],
    keywords: ['percussion', 'auscultation', 'bowel sounds', 'ascites'],
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

export default percussionAuscultation;
