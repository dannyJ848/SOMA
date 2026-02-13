/**
 * Physical Examination Educational Content
 *
 * Comprehensive physical examination approaches teaching patients:
 * - What physicians look for during examinations
 * - What physical exam findings mean
 * - How examination findings guide diagnosis
 * - Normal vs. abnormal findings
 */

import { PhysicalExamApproach } from '../types';

/**
 * Cardiovascular Examination Approach
 */
export const CARDIOVASCULAR_EXAM: PhysicalExamApproach = {
  id: 'exam-cardiovascular',
  name: 'Cardiovascular Examination',
  bodySystem: 'cardiovascular',
  region: 'chest',

  levels: {
    1: {
      level: 1,
      summary: 'A heart exam checks how well your heart is working by listening to it and checking your pulse.',
      explanation: `When doctors examine your heart, they are checking to make sure it is pumping blood properly throughout your body.

**What the Doctor Does:**
1. **Looks** at your chest and neck for visible pulsing
2. **Feels** your pulse at different spots
3. **Listens** to your heart with a stethoscope
4. **Checks** for swelling in your legs

**Why These Things Matter:**
- Your pulse tells how fast and regular your heart beats
- Heart sounds tell if valves are opening and closing properly
- Swelling might mean your heart is having trouble pumping

**What You Might Experience:**
- The stethoscope may feel cold on your skin
- You may be asked to breathe in, breathe out, and hold your breath
- The doctor may press on your belly or legs to check for swelling

**Normal Findings:**
- Regular heartbeat around 60-100 beats per minute
- "Lub-dub" heart sounds without extra noises
- No swelling in legs or ankles`,
      keyTerms: [
        { term: 'stethoscope', definition: 'The tool doctors use to listen to your heart and lungs' },
        { term: 'pulse', definition: 'The throbbing you feel when your heart pumps blood through your body' },
        { term: 'heart murmur', definition: 'An extra sound made by blood flowing through the heart' },
      ],
      analogies: [
        'Your heart is like a pump with four doors (valves). The doctor listens to make sure the doors open and close at the right times.',
        'Checking your pulse is like checking how fast and steady a drum is beating.',
      ],
      examples: [
        'When you feel your pulse in your wrist, you are feeling blood pushed by your heart.',
        'Swollen ankles at the end of the day might mean your heart needs some help pumping blood back up from your feet.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cardiovascular exam systematically evaluates heart function through inspection, palpation, and auscultation to detect signs of heart disease.',
      explanation: `The cardiovascular examination follows a structured approach to assess heart and blood vessel function.

**Components of the Cardiovascular Exam:**

**1. General Assessment**
- Vital signs: blood pressure, heart rate, respiratory rate
- Signs of distress or discomfort
- Skin color (pallor, cyanosis)

**2. Inspection**
- Jugular venous distension (JVD): visible pulsing in neck veins
- Chest wall: visible pulsations, deformities
- Peripheral edema: swelling in legs/ankles

**3. Palpation**
- Pulse assessment: rate, rhythm, strength
- Point of maximal impulse (PMI): where the heartbeat is felt strongest
- Peripheral pulses: comparing both sides

**4. Auscultation (Listening)**
- Heart sounds: S1 (lub) and S2 (dub)
- Extra sounds: S3, S4, murmurs
- Listening in four main areas of the chest

**Key Findings and What They Mean:**

| Finding | Possible Meaning |
|---------|------------------|
| Fast heart rate (>100 bpm) | Fever, anxiety, heart conditions, dehydration |
| Irregular pulse | Arrhythmia (irregular heart rhythm) |
| Heart murmur | Blood flowing through abnormal valve |
| JVD (neck vein bulging) | Heart failure, fluid overload |
| Leg swelling | Heart failure, vein problems |

**Why Patients Should Understand This:**
Knowing what the exam involves helps you:
- Prepare for your appointment
- Understand what findings mean
- Know when to report new symptoms`,
      keyTerms: [
        { term: 'auscultation', definition: 'Listening to internal body sounds, usually with a stethoscope', pronunciation: 'aw-skul-TAY-shun' },
        { term: 'jugular venous distension', definition: 'Visible bulging of neck veins, can indicate heart problems' },
        { term: 'peripheral edema', definition: 'Swelling in the extremities (arms, legs) from fluid buildup', pronunciation: 'per-IF-er-al eh-DEE-ma' },
        { term: 'arrhythmia', definition: 'An irregular heartbeat', pronunciation: 'ah-RITH-mee-ah' },
      ],
      analogies: [
        'Heart murmurs are like hearing water rushing through a partially blocked pipe - the narrowing creates turbulence and noise.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular examination employs systematic inspection, palpation, and auscultation to evaluate cardiac anatomy and hemodynamic function, identifying valvular disease, heart failure, and arrhythmias.',
      explanation: `## Systematic Cardiovascular Examination

### Vital Signs
- Blood pressure: Both arms (>20 mmHg difference suggests coarctation or dissection)
- Heart rate: Rate, rhythm, quality
- Respiratory rate: Elevated in heart failure
- Oxygen saturation: May be low in heart failure, shunts

### Inspection

**Jugular Venous Pressure (JVP):**
- Patient at 45 degrees
- Identify internal jugular pulsation
- Measure height above sternal angle (normal <4 cm)
- Elevated JVP indicates right heart failure or fluid overload

**Chest Wall:**
- Visible apex beat (normally 5th intercostal space, midclavicular line)
- Parasternal heave (right ventricular hypertrophy)
- Precordial bulge (chronic cardiac enlargement)

**Peripheral:**
- Cyanosis (central vs. peripheral)
- Clubbing (chronic hypoxia)
- Splinter hemorrhages (endocarditis)
- Janeway lesions, Osler nodes (endocarditis)

### Palpation

**Apex Beat (PMI):**
- Location: Displacement suggests cardiomegaly
- Character:
  - Sustained: Left ventricular hypertrophy (pressure overload)
  - Diffuse: Dilated cardiomyopathy (volume overload)
  - Tapping: Mitral stenosis

**Thrills:**
- Palpable murmurs (grade 4/6 or higher)
- Location correlates with valve

**Peripheral Pulses:**
- Rate, rhythm, volume, character
- Radiofemoral delay (coarctation of aorta)
- Pulsus paradoxus (>10 mmHg drop in SBP with inspiration - tamponade)

### Auscultation

**Heart Sounds:**
- S1: Mitral (M1) and tricuspid (T1) valve closure
- S2: Aortic (A2) and pulmonic (P2) valve closure
- Splitting: Physiological (inspiration), fixed (ASD), paradoxical (LBBB)

**Extra Heart Sounds:**
- S3: Early diastole, ventricular filling - heart failure, normal in young
- S4: Late diastole, atrial contraction against stiff ventricle - hypertrophy

**Murmurs:**
- Timing: Systolic vs. diastolic
- Location: Which valve area loudest
- Radiation: Direction of sound spread
- Grade: 1-6 for systolic, 1-4 for diastolic
- Shape: Crescendo, decrescendo, plateau
- Maneuvers: Valsalva, handgrip, inspiration effects

**Auscultation Areas:**
| Area | Location | Valve |
|------|----------|-------|
| Aortic | 2nd right intercostal space | Aortic valve |
| Pulmonic | 2nd left intercostal space | Pulmonic valve |
| Tricuspid | Left lower sternal border | Tricuspid valve |
| Mitral | 5th intercostal space, MCL | Mitral valve |`,
      keyTerms: [
        { term: 'JVP', definition: 'Jugular venous pressure - indirect measure of right atrial pressure', pronunciation: 'jay-vee-pee' },
        { term: 'PMI', definition: 'Point of maximal impulse - location where heartbeat is felt strongest' },
        { term: 'thrill', definition: 'Palpable vibration from turbulent blood flow, indicates significant murmur' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated drop in systolic BP (>10 mmHg) with inspiration, seen in tamponade', pronunciation: 'PUL-sus PAIR-uh-DOX-us' },
      ],
      clinicalNotes: 'The cardiovascular exam should be performed with the patient at 45 degrees for JVP assessment, then supine for precordial examination. Left lateral decubitus position accentuates mitral murmurs.',
    },
    4: {
      level: 4,
      summary: 'The cardiovascular examination integrates findings from JVP waveform analysis, apex beat characterization, and detailed murmur assessment with hemodynamic maneuvers to determine cardiac pathophysiology.',
      explanation: `## Advanced Cardiovascular Examination

### JVP Waveform Analysis

**Normal Waveform Components:**
- a wave: Atrial contraction (presystolic)
- c wave: Tricuspid bulging during isovolumic contraction
- x descent: Atrial relaxation and descent of tricuspid annulus
- v wave: Atrial filling during ventricular systole
- y descent: Early diastolic tricuspid opening

**Abnormal Waveforms:**
| Finding | Waveform Abnormality | Cause |
|---------|---------------------|-------|
| Giant a wave | Prominent a wave | Tricuspid stenosis, RV hypertrophy, pulmonary HTN |
| Cannon a waves | Intermittent giant a waves | Complete heart block, VT (atria contract against closed tricuspid) |
| Absent a wave | No a wave | Atrial fibrillation |
| Giant v wave (cv wave) | Prominent v wave | Tricuspid regurgitation |
| Slow y descent | Gradual y descent | Tricuspid stenosis, tamponade |
| Rapid y descent | Steep y descent | Constrictive pericarditis |
| Kussmaul sign | JVP rises with inspiration | Constrictive pericarditis, RV failure |

### Apex Beat Characterization

**Character Assessment:**
- Volume: Normal, heaving (pressure overload), diffuse (volume overload)
- Force: Normal, sustained (LVH), tapping (MS)
- Timing: Normal, double impulse (HCM)

**Diagnostic Implications:**
| Apex Beat | Pathophysiology | Conditions |
|-----------|-----------------|------------|
| Sustained, non-displaced | Pressure overload | Aortic stenosis, HTN |
| Sustained, displaced | Pressure + volume | Aortic regurgitation |
| Diffuse, displaced | Volume overload | DCM, MR |
| Tapping | Small LV | Mitral stenosis |
| Double impulse | Outflow obstruction | HCM |

### Advanced Murmur Assessment

**Murmur Characterization:**

*Systolic Murmurs:*
| Murmur | Timing | Quality | Location | Radiation | Maneuvers |
|--------|--------|---------|----------|-----------|-----------|
| AS | Crescendo-decrescendo | Harsh | RUSB | Carotids | ↑ Valsalva release |
| MR | Holosystolic | Blowing | Apex | Axilla | ↑ Handgrip |
| TR | Holosystolic | Blowing | LLSB | Xiphoid | ↑ Inspiration |
| HCM | Crescendo-decrescendo | Harsh | LLSB | - | ↑ Valsalva, standing |
| VSD | Holosystolic | Harsh | LLSB | - | No change |

*Diastolic Murmurs:*
| Murmur | Timing | Quality | Location | Maneuvers |
|--------|--------|---------|----------|-----------|
| AR | Early diastolic | Blowing | LLSB | ↑ Leaning forward, expiration |
| MS | Mid-diastolic | Rumbling | Apex | ↑ Left lateral decubitus |
| PR | Early diastolic | Blowing | LUSB | - |

### Dynamic Maneuvers

| Maneuver | Hemodynamic Effect | Murmurs Increased |
|----------|-------------------|-------------------|
| Inspiration | ↑ Venous return, ↑ right heart | TR, PR, PS |
| Valsalva (strain) | ↓ Preload, ↓ afterload | HCM, MVP |
| Valsalva (release) | ↑ Preload | AS, PS |
| Standing | ↓ Preload | HCM, MVP |
| Squatting | ↑ Preload, ↑ afterload | ↓ HCM; ↑ AR, MR |
| Handgrip | ↑ Afterload | MR, AR, VSD |

### Peripheral Vascular Examination

**Pulse Character:**
- Pulsus parvus et tardus: Slow-rising, low-volume (aortic stenosis)
- Water-hammer (Corrigan pulse): Rapidly collapsing (aortic regurgitation)
- Pulsus bisferiens: Double peak (HOCM, AS + AR)
- Pulsus alternans: Alternating strong/weak (severe LV dysfunction)

**Signs of Aortic Regurgitation:**
- De Musset sign: Head bobbing
- Quincke sign: Nail bed pulsation
- Corrigan pulse: Bounding, collapsing
- Hill sign: Lower limb BP > arm BP by >40 mmHg`,
      keyTerms: [
        { term: 'Kussmaul sign', definition: 'Paradoxical rise in JVP with inspiration, classic for constrictive pericarditis', pronunciation: 'KOOS-mawl' },
        { term: 'pulsus parvus et tardus', definition: 'Slow-rising, small-volume pulse seen in aortic stenosis', pronunciation: 'PAR-vus et TAR-dus' },
        { term: 'water-hammer pulse', definition: 'Bounding, rapidly collapsing pulse seen in aortic regurgitation' },
        { term: 'HOCM', definition: 'Hypertrophic obstructive cardiomyopathy - asymmetric septal hypertrophy causing outflow obstruction' },
      ],
      clinicalNotes: 'Bedside maneuvers are underutilized in modern practice but provide valuable real-time hemodynamic assessment. Mastering maneuvers like Valsalva and handgrip significantly improves diagnostic accuracy.',
    },
    5: {
      level: 5,
      summary: 'Expert cardiovascular examination integrates inspection, palpation, auscultation, and hemodynamic assessment to construct a comprehensive physiological picture, recognizing subtle findings and atypical presentations.',
      explanation: `## Expert-Level Cardiovascular Examination

### Integrated Hemodynamic Assessment

Expert examination synthesizes findings into hemodynamic profiles:

**Heart Failure Phenotyping:**

*Wet vs. Dry (Congestion):*
- Elevated JVP
- S3 gallop
- Pulmonary rales
- Peripheral edema
- Hepatomegaly
- Hepatojugular reflux

*Warm vs. Cold (Perfusion):*
- Narrow pulse pressure
- Cool extremities
- Altered mentation
- Oliguria
- Pulsus alternans

| Profile | JVP | Perfusion | Management Focus |
|---------|-----|-----------|------------------|
| Warm & Dry | Normal | Adequate | Compensated, optimize GDMT |
| Warm & Wet | Elevated | Adequate | Diuresis |
| Cold & Wet | Elevated | Poor | Inotropes + diuretics |
| Cold & Dry | Normal/low | Poor | Fluids cautiously |

### Subtle Physical Findings

**Low-Output States:**
- Cheyne-Stokes respiration
- Peripheral vasoconstriction
- Pulsus alternans (severe)
- Proportional pulse pressure <25%

**Elevated Filling Pressures:**
- Hepatojugular reflux: Sustained JVP elevation >4 cm with abdominal pressure
- Abdominojugular reflux: Similar, with sustained pressure
- Square wave response in constrictive pericarditis

**Valvular Findings Often Missed:**

*Mitral Stenosis:*
- Opening snap (high-pitched, follows S2)
- Short S2-OS interval = severe stenosis
- Malar flush (butterfly rash from chronic pulmonary HTN)
- Tapping apex beat (palpable S1)

*Aortic Regurgitation Severity Markers:*
- Austin Flint murmur (severe AR)
- Pistol-shot femorals
- Duroziez sign (femoral bruit with distal compression)
- Widened pulse pressure (>50% of SBP)

### Examination in Special Populations

**Elderly Patients:**
- S4 may be normal (age-related diastolic dysfunction)
- Systolic murmurs common (aortic sclerosis vs. stenosis differentiation)
- JVP assessment may be limited by habitus
- Peripheral pulses may be diminished from PAD

**Obese Patients:**
- Apex beat often not palpable
- Heart sounds muffled
- JVP visualization difficult
- Focus on peripheral signs of failure

**Post-Cardiac Surgery:**
- Mediastinal shift may displace heart sounds
- Prosthetic valve sounds different from native
- Sternal click may be audible

### Technology Integration

**Point-of-Care Ultrasound (POCUS) Correlation:**
- Visual confirmation of JVP with IVC assessment
- Wall motion abnormalities vs. regional findings
- Valve anatomy when murmur etiology unclear
- Pericardial effusion when suspecting tamponade

POCUS does not replace physical examination but complements it. The expert uses examination findings to formulate hypotheses tested by ultrasound.

### Examination Documentation Pearls

**High-Quality Documentation:**
- JVP: Height in cm above sternal angle at 45 degrees
- Apex: Location (intercostal space, relation to MCL), character
- Heart sounds: S1, S2 intensity; presence of S3, S4
- Murmurs: Full characterization (timing, location, radiation, grade, shape)
- Maneuvers: Results of any dynamic testing
- Peripheral: Pulses, edema, skin findings

**Common Documentation Errors:**
- "Regular rate and rhythm" without specifying rate
- "No murmurs" without documenting all positions
- Failure to document JVP measurement
- Missing peripheral vascular examination`,
      keyTerms: [
        { term: 'Austin Flint murmur', definition: 'Low-pitched diastolic rumble at apex in severe AR due to regurgitant jet striking the mitral valve' },
        { term: 'hepatojugular reflux', definition: 'Sustained JVP elevation (>4 cm for >10 seconds) with abdominal pressure, indicates elevated filling pressures' },
        { term: 'proportional pulse pressure', definition: 'Pulse pressure divided by systolic BP; <25% suggests low cardiac output' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy - evidence-based medications for heart failure' },
      ],
      clinicalNotes: `Key expert pearls:
1. The JVP is the single most informative bedside assessment of hemodynamic status
2. S3 has high specificity (>90%) for elevated LVEDP when present
3. Murmur intensity correlates poorly with severity - other features matter more
4. Dynamic maneuvers are underutilized - mastering them improves diagnostic accuracy
5. Physical examination changes over time - serial examination is valuable for monitoring`,
    },
  },

  sequence: [
    {
      step: 1,
      technique: 'Inspection',
      description: {
        1: 'Look at the patient to see if they look comfortable or uncomfortable.',
        2: 'Observe the patient for signs of distress, skin color, and visible pulsations.',
        3: 'Systematic inspection of habitus, respiratory effort, JVP, precordium, and extremities.',
        4: 'Assessment for stigmata of cardiac disease, hemodynamic compromise, and peripheral manifestations.',
        5: 'Comprehensive visual survey integrating respiratory pattern, JVP waveform, precordial dynamics, and peripheral stigmata.',
      },
      normalFindings: 'Patient comfortable, normal skin color, no visible JVD or precordial pulsations, no peripheral edema.',
      abnormalFindings: [
        { finding: 'Cyanosis', possibleCauses: ['Hypoxia', 'Right-to-left shunt', 'Poor perfusion'], significance: 'Indicates inadequate oxygenation or perfusion' },
        { finding: 'JVD', possibleCauses: ['Right heart failure', 'Tamponade', 'Constrictive pericarditis'], significance: 'Elevated right-sided filling pressures' },
        { finding: 'Peripheral edema', possibleCauses: ['Heart failure', 'Venous insufficiency', 'Nephrotic syndrome'], significance: 'Fluid retention, often cardiac origin if bilateral' },
      ],
      patientPosition: 'Supine at 45 degrees for JVP, then supine for precordial inspection',
    },
    {
      step: 2,
      technique: 'Palpation',
      description: {
        1: 'Feel your pulse and where your heartbeat is strongest on your chest.',
        2: 'Check pulses at various sites, feel for the apex beat and any vibrations.',
        3: 'Systematic palpation of peripheral pulses, PMI, parasternal area, and carotid arteries.',
        4: 'Assessment of pulse character, PMI location and quality, presence of thrills, and pulsus paradoxus.',
        5: 'Comprehensive palpation integrating pulse character analysis, apex beat dynamics, and search for thrills and heaves.',
      },
      normalFindings: 'Peripheral pulses present and equal, PMI at 5th ICS MCL, normal size and force, no thrills.',
      abnormalFindings: [
        { finding: 'Displaced apex', possibleCauses: ['LV enlargement', 'Cardiomegaly'], significance: 'Indicates cardiac chamber enlargement' },
        { finding: 'Thrill', possibleCauses: ['Significant valvular disease'], significance: 'Palpable murmur indicating turbulent flow' },
        { finding: 'Parasternal heave', possibleCauses: ['RV hypertrophy'], significance: 'Right ventricle working against increased pressure' },
      ],
      patientPosition: 'Supine for precordial palpation',
    },
    {
      step: 3,
      technique: 'Auscultation',
      description: {
        1: 'Listen to your heart with a stethoscope to hear the heart sounds.',
        2: 'Listen to the four valve areas for normal heart sounds and any extra sounds or murmurs.',
        3: 'Systematic auscultation at all valve areas with diaphragm and bell, assessing S1, S2, and additional sounds.',
        4: 'Complete auscultation including extra heart sounds, murmur characterization, and dynamic maneuvers.',
        5: 'Expert auscultation with full murmur characterization, response to maneuvers, and correlation with hemodynamic state.',
      },
      normalFindings: 'S1 and S2 present, normal intensity, physiological splitting of S2, no murmurs.',
      abnormalFindings: [
        { finding: 'Systolic murmur', possibleCauses: ['Aortic stenosis', 'Mitral regurgitation', 'Flow murmur'], significance: 'May indicate valvular disease' },
        { finding: 'S3 gallop', possibleCauses: ['Heart failure', 'Volume overload', 'Normal in young'], significance: 'High specificity for elevated filling pressures in older adults' },
        { finding: 'S4 gallop', possibleCauses: ['LV hypertrophy', 'Diastolic dysfunction'], significance: 'Atria contracting against stiff ventricle' },
      ],
      patientPosition: 'Supine, left lateral decubitus for mitral sounds, sitting forward for aortic sounds',
      equipmentNeeded: ['Stethoscope with diaphragm and bell'],
    },
  ],

  specialTests: [
    {
      name: 'Hepatojugular Reflux',
      indication: 'Assessing for elevated left-sided filling pressures',
      technique: 'Apply firm pressure to the right upper quadrant for 10-30 seconds while observing JVP.',
      interpretation: {
        positive: 'Sustained JVP elevation >4 cm above baseline indicates elevated PCWP',
        negative: 'Transient rise or no change suggests normal filling pressures',
      },
      sensitivity: 0.66,
      specificity: 0.90,
      clinicalUtility: 'Helpful for identifying heart failure, especially when JVP baseline is borderline.',
    },
    {
      name: 'Valsalva Maneuver',
      indication: 'Differentiating murmurs, assessing heart failure',
      technique: 'Patient bears down as if having a bowel movement for 10-15 seconds, then releases.',
      interpretation: {
        positive: 'Most murmurs decrease during strain; HCM and MVP increase. Square wave response suggests HF.',
        negative: 'Normal blood pressure variation with maneuver phases.',
      },
      clinicalUtility: 'Valuable for differentiating HCM from other causes of systolic murmur.',
    },
  ],

  media: [],
  citations: [
    {
      id: 'bates-cv-exam',
      type: 'textbook',
      title: 'Bates\' Guide to Physical Examination and History Taking',
      authors: ['Bickley L'],
      source: 'Wolters Kluwer',
      chapter: 'The Cardiovascular System',
    },
    {
      id: 'sapira-cv',
      type: 'textbook',
      title: 'Sapira\'s Art and Science of Bedside Diagnosis',
      source: 'Lippincott Williams & Wilkins',
    },
  ],
  crossReferences: [
    { targetId: 'algorithm-chest-pain', targetType: 'pathway', relationship: 'related', label: 'Chest Pain Algorithm' },
    { targetId: 'red-flags-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Red Flags' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'cardiology', 'clinical-skills'],
    keywords: ['heart exam', 'auscultation', 'murmurs', 'JVP', 'cardiac examination'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

/**
 * Abdominal Examination Approach
 */
export const ABDOMINAL_EXAM: PhysicalExamApproach = {
  id: 'exam-abdominal',
  name: 'Abdominal Examination',
  bodySystem: 'gastrointestinal',
  region: 'abdomen',

  levels: {
    1: {
      level: 1,
      summary: 'A belly exam helps doctors find the cause of stomach pain by looking, listening, and feeling your abdomen.',
      explanation: `When you have belly pain, doctors examine your abdomen to figure out what is causing it.

**What Happens During a Belly Exam:**

1. **Looking (Inspection)**
   - Is your belly flat, rounded, or swollen?
   - Are there any scars from previous surgeries?
   - Is anything moving that should not be?

2. **Listening (Auscultation)**
   - Using a stethoscope to hear your bowels gurgling
   - Normal bowel sounds mean your intestines are working

3. **Feeling (Palpation)**
   - Gently pressing on different parts of your belly
   - Checking for tender spots or lumps
   - Feeling your liver and spleen size

**What the Doctor Is Looking For:**
- Where exactly does it hurt?
- Does pressing make it worse or better?
- Is your belly soft or hard?
- Are your organs the right size?

**How to Help:**
- Try to relax your stomach muscles
- Tell the doctor where it hurts most
- Say if pressing causes sharp pain`,
      keyTerms: [
        { term: 'abdomen', definition: 'Your belly area between your chest and hips' },
        { term: 'tender', definition: 'Painful when touched' },
        { term: 'bowel sounds', definition: 'The gurgling noises your intestines make as food moves through' },
      ],
      analogies: [
        'The doctor feels your belly like you might feel a balloon to check if it is filled with air or water.',
        'Bowel sounds are like hearing water move through pipes - it means things are flowing normally.',
      ],
    },
    2: {
      level: 2,
      summary: 'The abdominal examination uses a systematic approach of inspection, auscultation, percussion, and palpation to identify signs of gastrointestinal disease.',
      explanation: `The abdominal exam follows a specific order: look, listen, tap, and feel. This sequence prevents changing bowel sounds by touching first.

**1. Inspection**
- Shape: Flat, rounded, distended (swollen)
- Symmetry: Both sides should look the same
- Visible movements: Breathing, peristalsis (wave-like movement)
- Skin: Scars, stretch marks, discoloration

**2. Auscultation (Listening)**
- Bowel sounds: Normal (every 5-30 seconds), hyperactive (too frequent), hypoactive (too few), absent
- Bruits: Abnormal whooshing sounds over blood vessels

**3. Percussion (Tapping)**
- Tympany: Hollow sound (normal over bowel)
- Dullness: Solid sound (over organs, fluid, or masses)
- Helps estimate liver and spleen size

**4. Palpation (Feeling)**
- Light palpation: Checks for tenderness, guarding (muscle tightening)
- Deep palpation: Feels for organs and masses
- Specific organ assessment: Liver, spleen, kidneys

**Key Findings:**

| Finding | What It Means |
|---------|---------------|
| Guarding | Muscles tighten to protect painful area |
| Rebound tenderness | Pain when releasing pressure (possible inflammation) |
| Absent bowel sounds | Bowels not moving (possible obstruction) |
| Distension | Swelling from gas, fluid, or mass |`,
      keyTerms: [
        { term: 'guarding', definition: 'When abdominal muscles tighten involuntarily to protect a painful area' },
        { term: 'rebound tenderness', definition: 'Pain that occurs when pressure is released, suggesting inflammation' },
        { term: 'peristalsis', definition: 'Wave-like muscle contractions that move food through the digestive system', pronunciation: 'per-ih-STALL-sis' },
        { term: 'bruit', definition: 'An abnormal whooshing sound heard over blood vessels', pronunciation: 'BROO-ee' },
      ],
    },
    3: {
      level: 3,
      summary: 'Abdominal examination systematically assesses the gastrointestinal, genitourinary, and vascular systems through inspection, auscultation, percussion, and palpation to localize pathology.',
      explanation: `## Systematic Abdominal Examination

### Patient Positioning
- Supine, arms at sides, knees slightly flexed
- Adequate exposure from xiphoid to pubic symphysis
- Warm hands and stethoscope

### Anatomical Landmarks

**Quadrants:**
- Right Upper (RUQ): Liver, gallbladder, right kidney
- Left Upper (LUQ): Spleen, stomach, left kidney
- Right Lower (RLQ): Appendix, cecum, right ovary/tube
- Left Lower (LLQ): Sigmoid colon, left ovary/tube

**Regions (9-region system):**
- Epigastric: Stomach, pancreas, aorta
- Umbilical: Small bowel, aorta
- Hypogastric/Suprapubic: Bladder, uterus

### Examination Technique

**Inspection:**
- Contour: Scaphoid (concave), flat, rounded, distended
- Symmetry and visible masses
- Skin: Striae, caput medusae, ecchymosis (Grey-Turner, Cullen signs)
- Visible peristalsis (abnormal in adults)
- Scars: Document location, consider adhesions

**Auscultation:**
- Bowel sounds: Listen in each quadrant for 2 minutes before declaring absent
- Bruits: Aorta, renal arteries, iliac arteries
- Friction rubs: Over liver and spleen (suggest splenic infarct, hepatic tumor)

**Percussion:**
- Tympany vs. dullness: Map areas
- Liver span: Measure in MCL (normal 6-12 cm)
- Splenic percussion sign: Traube space (normally tympanitic)
- Shifting dullness: Assess for ascites

**Palpation:**
- Light: Tenderness, guarding
- Deep: Organomegaly, masses
- Liver: Edge, texture, tenderness
- Spleen: Normally not palpable; if palpable, significantly enlarged
- Kidneys: Bimanual palpation
- Aorta: Pulsation, width (normal <3 cm)

### Special Tests

| Test | Technique | Positive Finding | Suggests |
|------|-----------|------------------|----------|
| Murphy sign | Palpate RUQ during inspiration | Inspiratory arrest | Acute cholecystitis |
| McBurney point | Palpate 1/3 distance umbilicus to ASIS | Tenderness | Appendicitis |
| Rovsing sign | Palpate LLQ | RLQ pain | Appendicitis |
| Psoas sign | Extend right hip | RLQ pain | Retrocecal appendicitis |
| Obturator sign | Internal rotation of flexed hip | RLQ pain | Pelvic appendicitis |`,
      keyTerms: [
        { term: 'Murphy sign', definition: 'Inspiratory arrest during RUQ palpation, indicates acute cholecystitis' },
        { term: 'McBurney point', definition: 'Point one-third from umbilicus to right ASIS, tenderness suggests appendicitis' },
        { term: 'Grey-Turner sign', definition: 'Flank ecchymosis suggesting retroperitoneal hemorrhage (pancreatitis)' },
        { term: 'Cullen sign', definition: 'Periumbilical ecchymosis suggesting intraperitoneal hemorrhage' },
      ],
      clinicalNotes: 'Always examine the least painful area first and work toward the most painful area to maintain patient cooperation and obtain accurate assessment.',
    },
    4: {
      level: 4,
      summary: 'Advanced abdominal examination integrates inspection findings with auscultatory, percussive, and palpatory techniques to construct differential diagnoses, assess for peritonitis, and guide imaging selection.',
      explanation: `## Advanced Abdominal Examination

### Peritoneal Signs Assessment

**Voluntary vs. Involuntary Guarding:**
- Voluntary: Patient consciously tightens muscles; resolves with distraction
- Involuntary: Reflex muscle rigidity; does not resolve - concerning for peritonitis

**Rebound Tenderness:**
- Direct: Pain at site of release
- Referred (Rovsing): Pain at distant site suggests peritoneal irritation
- Percussion tenderness may be equivalent and less uncomfortable

**Rigidity:**
- Board-like rigidity: Diffuse peritonitis
- Localized rigidity: Focal inflammation

### Ascites Assessment

**Physical Examination Findings:**

| Test | Technique | Finding | Sensitivity |
|------|-----------|---------|-------------|
| Flank dullness | Percuss laterally | Dull flanks | 80% if >500 mL |
| Shifting dullness | Percuss, roll patient, repercuss | Dullness shifts | 83% |
| Fluid wave | Hand on midline, tap flank | Transmitted wave | Low - only large volumes |
| Bulging flanks | Inspection | Lateral fullness | Variable |

**Serum-Ascites Albumin Gradient (SAAG):**
- ≥1.1 g/dL: Portal hypertension (cirrhosis, heart failure)
- <1.1 g/dL: Non-portal hypertension (malignancy, TB, nephrotic)

### Organomegaly Assessment

**Hepatomegaly:**
- Percussion: Liver span in MCL (scratch technique alternative)
- Palpation: Edge characteristics
  - Smooth: Hepatitis, heart failure, fatty liver
  - Nodular: Cirrhosis, metastatic disease
  - Tender: Hepatitis, congestion, abscess
- Pulsatile: Tricuspid regurgitation

**Splenomegaly:**
- Percussion: Castell sign (dullness in left anterior axillary line with deep inspiration)
- Nixon method: Left lateral decubitus, percuss from costophrenic angle
- Palpation: Patient supine then right lateral decubitus
- Palpable spleen is 2-3x normal size

**Causes of Massive Splenomegaly (crosses midline):**
- Chronic myelogenous leukemia
- Myelofibrosis
- Malaria (chronic)
- Gaucher disease
- Leishmaniasis (visceral)

### Special Examination Scenarios

**Acute Abdomen Assessment:**
1. Note patient positioning (peritonitis: still; renal colic: writhing)
2. Assess vital signs for shock
3. Systematic examination with careful attention to peritoneal signs
4. Check hernial orifices
5. Digital rectal examination
6. Testicular examination in males

**Signs Suggesting Specific Diagnoses:**

| Finding | Suggests |
|---------|----------|
| Cullen sign | Hemorrhagic pancreatitis, ruptured ectopic |
| Grey-Turner sign | Hemorrhagic pancreatitis |
| Sister Mary Joseph nodule | Intraabdominal malignancy (umbilical metastasis) |
| Caput medusae | Portal hypertension |
| Carnett sign | Abdominal wall pain (tenderness increases with tensing muscles) |`,
      keyTerms: [
        { term: 'SAAG', definition: 'Serum-Ascites Albumin Gradient - helps differentiate causes of ascites' },
        { term: 'Castell sign', definition: 'Dullness to percussion in left axillary line during inspiration suggesting splenomegaly' },
        { term: 'Carnett sign', definition: 'Increased tenderness when abdominal muscles are tensed, suggests abdominal wall rather than visceral origin' },
        { term: 'Sister Mary Joseph nodule', definition: 'Umbilical metastasis indicating intraabdominal malignancy' },
      ],
      clinicalNotes: 'The combination of absence of bowel sounds, distension, and peritoneal signs strongly suggests surgical pathology requiring urgent imaging and surgical consultation.',
    },
    5: {
      level: 5,
      summary: 'Expert abdominal examination synthesizes clinical findings to generate probability-based differential diagnoses, recognize surgical emergencies, and integrate examination with laboratory and imaging findings.',
      explanation: `## Expert-Level Abdominal Examination

### Pattern Recognition in Acute Abdomen

**Classic Presentations:**

| Pattern | Key Findings | Likely Diagnoses |
|---------|--------------|------------------|
| Periumbilical → RLQ pain | McBurney point tenderness, low fever | Appendicitis |
| RUQ pain, Murphy positive | Fever, leukocytosis | Acute cholecystitis |
| Epigastric → back pain | Distension, elevated lipase | Acute pancreatitis |
| Crampy pain, distension, vomiting | High-pitched bowel sounds, distension | Small bowel obstruction |
| Left lower quadrant pain, fever | Localized tenderness, may have mass | Diverticulitis |
| Diffuse peritonitis | Board-like rigidity, absent bowel sounds | Perforated viscus |

### Pitfalls and Atypical Presentations

**Elderly Patients:**
- Diminished pain response
- Less pronounced peritoneal signs
- Higher mortality from delay in diagnosis
- Mesenteric ischemia more common

**Immunocompromised:**
- Reduced inflammatory response
- Minimal tenderness despite serious pathology
- Consider opportunistic infections

**Obese Patients:**
- Palpation limited by habitus
- May not demonstrate classic signs
- Lower threshold for imaging

### Examination-Laboratory-Imaging Integration

**Likelihood Ratios for Key Findings in Appendicitis:**

| Finding | LR+ | LR- |
|---------|-----|-----|
| RLQ tenderness | 8.0 | 0.1 |
| Rigidity | 3.8 | 0.8 |
| Migration of pain | 3.2 | 0.5 |
| Psoas sign | 2.4 | 0.9 |

**When Physical Examination Alone Is Sufficient:**
- Classic presentation with consistent labs
- Low-risk patient with clearly benign examination

**When Imaging Is Essential:**
- Elderly/immunocompromised with any abdominal complaint
- Examination inconsistent with history
- Concern for vascular emergency
- Diagnostic uncertainty

### Surgical Emergency Recognition

**Requires Immediate Surgical Consultation:**
- Peritonitis with hemodynamic instability
- Ischemic bowel findings (pain out of proportion, metabolic acidosis)
- Ruptured AAA (pulsatile mass, hypotension)
- Free air (rigid abdomen after perforation)

**Classic Triads:**
- Charcot triad (cholangitis): RUQ pain, fever, jaundice
- Reynolds pentad (severe cholangitis): Add hypotension, altered mental status
- Beck triad (tamponade): JVD, hypotension, muffled heart sounds

### Documentation Excellence

**Complete Abdominal Exam Note:**
- Inspection: Contour, scars, skin findings
- Auscultation: Bowel sounds (character and location), bruits
- Percussion: Tympany/dullness pattern, liver span, splenic percussion
- Palpation: Light (tenderness, guarding), deep (masses, organomegaly)
- Special tests: Specific findings tested and results
- Peritoneal signs: Specifically commented on
- Hernial orifices: Examined

**Red Flag Documentation:**
Always document the presence or absence of:
- Peritoneal signs
- Bowel sounds
- Organomegaly
- Masses
- Hernias`,
      keyTerms: [
        { term: 'Charcot triad', definition: 'Right upper quadrant pain, fever, and jaundice - classic for cholangitis' },
        { term: 'Reynolds pentad', definition: 'Charcot triad plus hypotension and altered mental status - severe/suppurative cholangitis' },
        { term: 'mesenteric ischemia', definition: 'Inadequate blood flow to the intestines, causes severe pain out of proportion to examination' },
        { term: 'pain out of proportion', definition: 'Severe pain with minimal examination findings, classic for mesenteric ischemia or necrotizing fasciitis' },
      ],
      clinicalNotes: `Key expert insights:
1. Pain out of proportion to examination is an ominous sign - consider mesenteric ischemia, necrotizing fasciitis
2. Absence of bowel sounds for 2 minutes in each quadrant is significant
3. Elderly patients often underreport pain and underdemonstrate peritoneal signs
4. Always check hernial orifices in bowel obstruction - incarcerated hernia is treatable
5. Examine the back - retroperitoneal pathology may have minimal anterior findings`,
    },
  },

  sequence: [
    {
      step: 1,
      technique: 'Inspection',
      description: {
        1: 'Look at your belly to see its shape and if anything looks unusual.',
        2: 'Observe the abdomen for shape, symmetry, scars, and visible movements.',
        3: 'Systematic inspection of contour, symmetry, skin findings, visible peristalsis, and scars.',
        4: 'Detailed inspection noting stigmata of liver disease, vascular abnormalities, and peritoneal signs.',
        5: 'Comprehensive visual survey integrating findings with suspected pathophysiology.',
      },
      normalFindings: 'Flat or slightly rounded, symmetric, no scars or visible peristalsis, normal skin.',
      abnormalFindings: [
        { finding: 'Distension', possibleCauses: ['Ascites', 'Bowel obstruction', 'Mass', 'Pregnancy'], significance: 'Indicates increased abdominal contents' },
        { finding: 'Caput medusae', possibleCauses: ['Portal hypertension'], significance: 'Dilated periumbilical veins suggest severe liver disease' },
        { finding: 'Visible peristalsis', possibleCauses: ['Bowel obstruction'], significance: 'Suggests intestinal obstruction' },
      ],
      patientPosition: 'Supine with knees slightly flexed, arms at sides',
    },
    {
      step: 2,
      technique: 'Auscultation',
      description: {
        1: 'Listen to your belly with a stethoscope to hear your intestines working.',
        2: 'Listen for bowel sounds in all quadrants and for abnormal sounds over blood vessels.',
        3: 'Auscultate bowel sounds (character, frequency), bruits, and friction rubs.',
        4: 'Systematic auscultation with attention to absent sounds, high-pitched sounds, and vascular abnormalities.',
        5: 'Comprehensive auscultation interpreting findings in context of clinical presentation.',
      },
      normalFindings: 'Bowel sounds present every 5-30 seconds, no bruits or friction rubs.',
      abnormalFindings: [
        { finding: 'Absent bowel sounds', possibleCauses: ['Ileus', 'Late obstruction', 'Peritonitis'], significance: 'Bowel not moving - serious finding' },
        { finding: 'High-pitched/hyperactive', possibleCauses: ['Early obstruction', 'Gastroenteritis'], significance: 'Bowel trying to push past obstruction' },
        { finding: 'Bruit', possibleCauses: ['Renal artery stenosis', 'AAA'], significance: 'Turbulent blood flow in vessel' },
      ],
      patientPosition: 'Supine',
      equipmentNeeded: ['Stethoscope'],
      clinicalPearl: 'Auscultate before palpation - touching the abdomen can stimulate bowel sounds and give false reassurance.',
    },
    {
      step: 3,
      technique: 'Percussion',
      description: {
        1: 'Tap on your belly to check for air or fluid.',
        2: 'Tap in different areas to determine if sounds are hollow (air) or dull (solid/fluid).',
        3: 'Percussion to assess tympany/dullness distribution, liver span, and presence of ascites.',
        4: 'Systematic percussion including organomegaly assessment and ascites evaluation.',
        5: 'Comprehensive percussion correlating findings with suspected pathology.',
      },
      normalFindings: 'Tympany over most of abdomen, dullness over liver. Liver span 6-12 cm.',
      abnormalFindings: [
        { finding: 'Shifting dullness', possibleCauses: ['Ascites'], significance: 'Fluid accumulation in peritoneal cavity' },
        { finding: 'Increased liver span', possibleCauses: ['Hepatomegaly', 'Congestion', 'Infiltration'], significance: 'Liver enlargement requiring further evaluation' },
        { finding: 'Loss of tympany over Traube space', possibleCauses: ['Splenomegaly'], significance: 'Spleen enlarged' },
      ],
      patientPosition: 'Supine; roll for shifting dullness',
    },
    {
      step: 4,
      technique: 'Palpation',
      description: {
        1: 'Gently press on your belly to check for pain or lumps.',
        2: 'Feel gently then deeper for tenderness, guarding, masses, and organ size.',
        3: 'Light and deep palpation assessing tenderness, peritoneal signs, organomegaly, and masses.',
        4: 'Systematic palpation with organ-specific techniques and peritoneal sign assessment.',
        5: 'Comprehensive palpation integrating findings with clinical picture to guide management.',
      },
      normalFindings: 'Soft, non-tender, no masses or organomegaly, no peritoneal signs.',
      abnormalFindings: [
        { finding: 'Involuntary guarding', possibleCauses: ['Peritonitis'], significance: 'Muscle rigidity protecting inflamed peritoneum' },
        { finding: 'Rebound tenderness', possibleCauses: ['Peritoneal inflammation'], significance: 'Movement of peritoneum causes pain' },
        { finding: 'Hepatomegaly', possibleCauses: ['Heart failure', 'Cirrhosis', 'Malignancy'], significance: 'Liver enlarged beyond normal' },
      ],
      patientPosition: 'Supine with knees flexed',
      clinicalPearl: 'Start palpation away from the area of reported pain and work toward it to maintain patient trust and cooperation.',
    },
  ],

  specialTests: [
    {
      name: 'Murphy Sign',
      indication: 'Suspected acute cholecystitis',
      technique: 'Palpate the RUQ while asking patient to take a deep breath. Positive if patient arrests inspiration due to pain when inflamed gallbladder contacts examining fingers.',
      interpretation: {
        positive: 'Inspiratory arrest with RUQ palpation suggests acute cholecystitis',
        negative: 'No inspiratory arrest makes cholecystitis less likely',
      },
      sensitivity: 0.65,
      specificity: 0.87,
      clinicalUtility: 'When positive in febrile patient with RUQ pain, strongly suggests cholecystitis.',
    },
    {
      name: 'McBurney Point Tenderness',
      indication: 'Suspected appendicitis',
      technique: 'Palpate at McBurney point (1/3 distance from ASIS to umbilicus).',
      interpretation: {
        positive: 'Maximal tenderness at McBurney point suggests appendicitis',
        negative: 'Absence of tenderness at this location does not rule out appendicitis (retrocecal appendix)',
      },
      sensitivity: 0.75,
      specificity: 0.85,
      clinicalUtility: 'Classic finding in appendicitis but location may vary.',
    },
  ],

  media: [],
  citations: [
    {
      id: 'bates-abd-exam',
      type: 'textbook',
      title: 'Bates\' Guide to Physical Examination and History Taking',
      source: 'Wolters Kluwer',
      chapter: 'The Abdomen',
    },
  ],
  crossReferences: [
    { targetId: 'algorithm-abdominal-pain', targetType: 'pathway', relationship: 'related', label: 'Abdominal Pain Algorithm' },
    { targetId: 'red-flags-gastrointestinal', targetType: 'topic', relationship: 'related', label: 'GI Red Flags' },
  ],
  tags: {
    systems: ['gastrointestinal', 'genitourinary'],
    topics: ['physical-examination', 'gastroenterology', 'surgery'],
    keywords: ['abdominal exam', 'peritonitis', 'appendicitis', 'ascites'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// Export all physical examination approaches
export const PHYSICAL_EXAM_APPROACHES = [
  CARDIOVASCULAR_EXAM,
  ABDOMINAL_EXAM,
] as const;

export default {
  CARDIOVASCULAR_EXAM,
  ABDOMINAL_EXAM,
  PHYSICAL_EXAM_APPROACHES,
};
