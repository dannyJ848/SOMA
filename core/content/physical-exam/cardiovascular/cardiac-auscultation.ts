/**
 * Cardiac Auscultation - Physical Examination
 */

import { EducationalContent } from '../../types';

export const cardiacAuscultation: EducationalContent = {
  id: 'cardiovascular-cardiac-auscultation',
  type: 'topic',
  name: 'Cardiac Auscultation',
  alternateNames: ['Heart Sound Examination', 'Heart Auscultation', 'Cardiac Listening'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac auscultation is when doctors listen to your heart with a stethoscope to check how it is working and if the valves are opening and closing properly.',
      explanation: `## Listening to Your Heart

When a doctor listens to your heart with a stethoscope, they are checking:
- **How fast your heart beats** - Normal is 60-100 beats per minute
- **The rhythm** - Is it steady or irregular?
- **Heart sounds** - The "lub-dub" noises the heart makes
- **Extra sounds** - Any unusual clicks, whooshes, or murmurs

### Normal Heart Sounds

Your heart makes two main sounds:
- **First sound (S1)** - "Lub" - The heart valves closing between the upper and lower chambers
- **Second sound (S2)** - "Dub" - The valves closing as blood leaves the heart

These sounds happen as blood flows through your heart and valves snap shut.

### Where Doctors Listen

Doctors listen to different areas to hear each heart valve:
- **Right side of the chest** - Tricuspid valve
- **Left side of the chest** - Mitral valve
- **Upper right** - Aortic valve
- **Upper left** - Pulmonary valve

### What Doctors Look For

**Good signs:**
- Clear, regular sounds
- Steady rhythm
- No extra noises

**Signs that need more checking:**
- Heart beating too fast or too slow
- Irregular rhythm
- Whooshing sounds (murmurs)
- Extra sounds or clicks

### Why This Matters

Listening to the heart helps doctors find:
- Valve problems
- Hole in the heart
- Heart failure
- Abnormal rhythms
- Other heart conditions`,

      keyTerms: [
        { term: 'auscultation', definition: 'Listening to body sounds with a stethoscope' },
        { term: 'stethoscope', definition: 'Medical instrument used to listen to heart, lungs, and other body sounds' },
        { term: 'valve', definition: 'A door-like structure in the heart that keeps blood flowing in the right direction' },
        { term: 'murmur', definition: 'An extra whooshing sound heard when blood flows through the heart' },
        { term: 'rhythm', definition: 'The pattern of heartbeats' },
      ],

      analogies: [
        'Heart valves are like one-way doors - they open to let blood through and close to keep it from flowing backward.',
        'Listening to the heart is like listening to an engine - different sounds tell you how well it is running.',
        'A heart murmur is like a door with squeaky hinges - you hear extra noise when it moves.',
      ],

      examples: [
        'A soft whooshing sound might mean a small hole between heart chambers.',
        'An irregular heartbeat might be atrial fibrillation.',
        'A loud murmur could mean a valve is too narrow or leaky.',
      ],

      patientCounselingPoints: [
        'Heart murmurs are common and often harmless, especially in children.',
        'An irregular heartbeat does not always mean something serious.',
        'Further tests like an echocardiogram may be needed to check the heart valves.',
      ],
    },

    2: {
      level: 2,
      summary: 'Cardiac auscultation systematically evaluates heart sounds, timing, intensity, and extra sounds at specific anatomical locations to assess cardiac valve function and hemodynamics.',
      explanation: `## Auscultatory Areas

### Traditional Areas

| Area | Location | Best For Hearing |
|------|----------|------------------|
| Aortic | 2nd right intercostal space | Aortic valve |
| Pulmonic | 2nd left intercostal space | Pulmonary valve |
| Erb point | 3rd left intercostal space | Both valves, S2 splitting |
| Tricuspid | 4th-5th left intercostal space | Tricuspid valve |
| Mitral (apex) | 5th left intercostal, midclavicular | Mitral valve |

### Heart Sound Physiology

**S1 (First Sound):**
- Closure of mitral and tricuspid valves
- Marks beginning of systole
- Best heard at apex
- Louder when valves close from wide open position

**S2 (Second Sound):**
- Closure of aortic and pulmonary valves
- Marks end of systole
- Best heard at base
- A2 (aortic) precedes P2 (pulmonary)

**Physiologic Splitting of S2:**
- Widens with inspiration
- P2 delayed due to increased venous return
- Normal finding

### Sound Characteristics

| Component | Pitch | Timing | Best Location |
|-----------|-------|--------|---------------|
| S1 | Low | Systole onset | Apex |
| S2 | High | Systole end | Base |
| S3 | Low | Early diastole | Apex |
| S4 | Low | Late diastole | Apex |
| Opening snap | High | Early diastole | Apex/L sternal |
| Ejection click | High | Early systole | Base |

### Technique Tips
- Use diaphragm for high-pitched sounds (S2, murmurs)
- Use bell for low-pitched sounds (S3, S4)
- Patient positioning matters
- Listen in quiet environment`,

      keyTerms: [
        { term: 'systole', definition: 'Phase when heart contracts and pumps blood out' },
        { term: 'diastole', definition: 'Phase when heart relaxes and fills with blood' },
        { term: 'murmur', definition: 'Turbulent blood flow producing audible sound' },
        { term: 'S3 gallop', definition: 'Third heart sound indicating rapid ventricular filling' },
        { term: 'S4 gallop', definition: 'Fourth heart sound from atrial contraction against stiff ventricle' },
      ],

      analogies: [
        'S1 and S2 are like drum beats marking the beginning and end of the pumping phase.',
        'The bell and diaphragm are like different microphone settings - each picks up different frequencies.',
      ],

      examples: [
        'Fixed split S2 suggests atrial septal defect.',
        'Paradoxical split S2 suggests aortic stenosis or left bundle branch block.',
        'Wide splitting with respiratory variation suggests pulmonary stenosis.',
      ],

      clinicalNotes: 'Always identify S1 first to orient yourself to the cardiac cycle.',
    },

    3: {
      level: 3,
      summary: 'Advanced cardiac auscultation identifies pathological murmurs, gallops, and extra sounds to diagnose valvular heart disease and cardiac dysfunction.',
      explanation: `## Pathological Heart Sounds

### S3 and S4 Gallops

**S3 (Ventricular Gallop):**
- Early diastolic sound
- Causes: Normal in young, heart failure, mitral regurgitation
- Mechanism: Rapid ventricular filling
- Best heard: Apex with bell

**S4 (Atrial Gallop):**
- Late diastolic sound (presystolic)
- Causes: Hypertension, aortic stenosis, ischemia
- Mechanism: Atrial contraction against stiff ventricle
- Best heard: Apex with bell

**Summation Gallop:**
- Both S3 and S4 present with tachycardia
- Sounds like continuous gallop

### Clicks and Snaps

**Opening Snap:**
- Early diastole
- Mitral or tricuspid stenosis
- High-pitched, snapping quality
- Followed by diastolic rumble

**Ejection Clicks:**
- Early systole
- Aortic or pulmonary stenosis
- Valvular origin

**Midsystolic Clicks:**
- Mitral valve prolapse
- Variable timing
- May be followed by late systolic murmur

### Murmurs: Systematic Evaluation

**Seven Characteristics:**
1. Timing (systolic vs diastolic)
2. Intensity (Grade I-VI)
3. Pitch (high vs low)
4. Shape (crescendo, decrescendo, plateau)
5. Location (where loudest)
6. Radiation (where else heard)
7. Response to maneuvers

**Grading Scale:**
- I: Barely audible
- II: Quiet but audible
- III: Moderately loud
- IV: Loud with thrill
- V: Very loud, heard with stethoscope edge
- VI: Audible without stethoscope

### Common Pathological Murmurs

**Aortic Stenosis:**
- Harsh systolic crescendo-decrescendo
- Radiates to carotids
- Peaks in mid-systole

**Mitral Regurgitation:**
- Holosystolic blowing
- Radiates to axilla
- Constant intensity

**Aortic Regurgitation:**
- Early diastolic decrescendo
- Best heard leaning forward
- High-pitched

**Mitral Stenosis:**
- Low-pitched diastolic rumble
- Preceded by opening snap
- Best heard in left lateral position`,

      keyTerms: [
        { term: 'holosystolic', definition: 'Throughout systole' },
        { term: 'crescendo-decrescendo', definition: 'Getting louder then softer' },
        { term: 'thrill', definition: 'Palpable vibration from turbulent blood flow' },
        { term: 'valvular stenosis', definition: 'Narrowing of a valve opening' },
        { term: 'valvular regurgitation', definition: 'Valve leakage allowing backward flow' },
      ],

      analogies: [
        'A stenotic valve is like a kinked hose - the water speeds up and makes noise.',
        'A regurgitant valve is like a leaky faucet - you hear flow when there should be none.',
      ],

      examples: [
        'S3 gallop in elderly patient suggests heart failure.',
        'Opening snap with diastolic rumble confirms mitral stenosis.',
        'Midsystolic click with late systolic murmur indicates MVP.',
      ],

      clinicalNotes: 'Physiologic murmurs are common in pregnancy, anemia, and high-output states.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of auscultatory findings with dynamic maneuvers to differentiate murmurs and assess hemodynamic significance.',
      explanation: `## Dynamic Auscultation

### Maneuvers and Effects

**Inspiration:**
- Increases venous return to right heart
- Right-sided murmurs louder
- Physiologic S2 splitting widens

**Expiration:**
- Increases left heart filling
- Left-sided murmurs louder
- S2 fusion

**Valsalva (strain):**
- Phase 1-2: Murmur intensity decreases
- Phase 3-4: Murmur intensity returns
- Exception: MVP and HCM (increases)

**Standing:**
- Decreases preload
- MVP murmur lengthens
- HCM murmur louder

**Squatting:**
- Increases afterload and preload
- Most murmurs louder
- MVP and HCM murmurs softer

**Handgrip:**
- Increases afterload
- Regurgitant murmurs louder
- Stenotic murmurs softer

**Amyl Nitrite:**
- Decreases afterload
- Stenotic murmurs louder
- Regurgitant murmurs softer

### Differential Diagnosis

**Systolic Murmurs:**

| Condition | Location | Quality | Radiation | Maneuvers |
|-----------|----------|---------|-----------|-----------|
| Aortic stenosis | Base | Harsh crescendo-decrescendo | Carotids | Increases with squatting |
| Mitral regurgitation | Apex | Blowing holosystolic | Axilla | Increases with handgrip |
| HCM | LLSB | Harsh, crescendo-decrescendo | None | Increases with Valsalva |
| VSD | LLSB | Harsh holosystolic | None | Decreases with amyl nitrite |
| MVP | Apex | Late systolic | None | Longer with standing |

**Diastolic Murmurs:**

| Condition | Location | Quality | Timing |
|-----------|----------|---------|--------|
| Aortic regurg | LSB | Blowing, decrescendo | Early diastole |
| Mitral stenosis | Apex | Low rumble | Mid-diastole |
| Pulm regurg | LSB | Blowing | Early diastole |
| Tricuspid stenosis | LLSB | Low rumble | Mid-diastole |

### Prosthetic Valves

**Mechanical Valves:**
- Audible closing click
- May have mild regurgitant flow
- Lifelong anticoagulation needed

**Bioprosthetic Valves:**
- More physiologic sounds
- Limited durability (10-15 years)
- No anticoagulation required`,

      keyTerms: [
        { term: 'HCM', definition: 'Hypertrophic cardiomyopathy' },
        { term: 'VSD', definition: 'Ventricular septal defect' },
        { term: 'preload', definition: 'Ventricular filling pressure' },
        { term: 'afterload', definition: 'Resistance against which ventricle pumps' },
        { term: 'amyl nitrite', definition: 'Vasodilator used in cardiac auscultation' },
      ],

      clinicalNotes: 'Valsalva maneuver: MVP and HCM are the only conditions where murmur intensity increases.',
    },

    5: {
      level: 5,
      summary: 'Expert cardiac auscultation for complex congenital disease, post-surgical patients, and integration with advanced imaging.',
      explanation: `## Complex Auscultation

### Congenital Heart Disease

**Atrial Septal Defect:**
- Wide fixed S2 split
- Systolic ejection murmur at LUSB
- Pulmonary flow murmur
- Diastolic tricuspid rumble (large shunt)

**Ventricular Septal Defect:**
- Holosystolic murmur at LLSB
- Thrill often present
- Small VSD: harsh, loud
- Large VSD: soft or absent (equal pressures)

**Patent Ductus Arteriosus:**
- Continuous machinery murmur
- Left infraclavicular
- Peaks at S2
- Wide pulse pressure

**Tetralogy of Fallot:**
- Single S2 (absent P2)
- Systolic ejection murmur at LUSB
- Decreased with squatting

### Post-Surgical Hearts

**After Valve Replacement:**
- Closing clicks of mechanical valves
- May have physiologic regurgitation
- Baseline for comparison important

**After Repair:**
- Residual lesions common
- Conduit stenosis produces ejection murmur
- Patch leaks produce regurgitant murmur

**Fontan Circulation:**
- No subpulmonary ventricle
- Continuous venous hum common
- Changes with respiration

### Bedside Hemodynamics

**Assessment Without Echo:**
- Systolic blood pressure
- Pulse pressure
- Heart rate and rhythm
- JVP
- Auscultatory findings

**Estimating Severity:**
- Late-peaking murmur: severe AS
- Holodiastolic AR: severe regurgitation
- S3 with MR: significant regurgitation`,

      keyTerms: [
        { term: 'LUSB', definition: 'Left upper sternal border' },
        { term: 'LLSB', definition: 'Left lower sternal border' },
        { term: 'Fontan', definition: 'Palliative surgery for single ventricle physiology' },
        { term: 'conduit', definition: 'Tube connecting heart chambers or vessels' },
      ],

      clinicalNotes: 'In the modern era, echocardiography confirms auscultatory findings, but bedside auscultation remains essential for triage and monitoring.',
    },
  },

  media: [],

  citations: [
    {
      id: 'levanon-cardiac',
      type: 'textbook',
      title: 'Cardiac Auscultation',
      source: 'Clinical Methods',
    },
  ],

  crossReferences: [
    { targetId: 'cardiovascular-pulse-examination', targetType: 'topic', relationship: 'sibling', label: 'Pulse Examination' },
    { targetId: 'cardiovascular-heart-murmurs', targetType: 'concept', relationship: 'sibling', label: 'Heart Murmurs' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'cardiology'],
    keywords: ['auscultation', 'heart sounds', 'murmur', 'valve'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacAuscultation;
