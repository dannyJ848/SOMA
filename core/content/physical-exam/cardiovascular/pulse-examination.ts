/**
 * Pulse Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const pulseExamination: EducationalContent = {
  id: 'cardiovascular-pulse-examination',
  type: 'process',
  name: 'Pulse Examination',
  alternateNames: ['Peripheral Pulse Assessment', 'Vital Signs Pulse', 'Arterial Pulse Check'],

  levels: {
    1: {
      level: 1,
      summary: 'Pulse examination is when doctors feel your heartbeat at different points on your body to check blood flow and heart health.',
      explanation: `## Checking Your Pulse

Your pulse is the feeling of blood moving through your arteries as your heart beats. Doctors check it to learn about your heart and circulation.

### Where Doctors Check Your Pulse

**Common places:**
- **Wrist (radial)** - Most common location
- **Neck (carotid)** - Near your windpipe
- **Groin (femoral)** - Where leg meets body
- **Inside elbow (brachial)** - Used for blood pressure
- **Behind knee (popliteal)** - Back of the leg
- **Top of foot (dorsalis pedis)** - Near the ankle
- **Inner ankle (posterior tibial)** - Behind the bone

### What Doctors Check

**Rate:**
- How many beats per minute
- Normal for adults: 60-100 beats
- Athletes may have slower pulses

**Rhythm:**
- Is it steady like a drumbeat?
- Or irregular with skipped beats?

**Strength:**
- Strong and full, or weak and thin?
- Does it feel the same on both sides?

### Why Check Different Locations?

Checking pulses in different places helps doctors:
- Compare blood flow to both arms and legs
- Find blocked arteries
- Check for circulation problems
- Assess heart strength

### Warning Signs

- **Very fast pulse** - Could be fever, stress, or heart problems
- **Very slow pulse** - Could be from medications or heart block
- **Irregular pulse** - Could be atrial fibrillation
- **Weak pulses in legs** - Could mean blocked leg arteries
- **No pulse** - Emergency situation`,

      keyTerms: [
        { term: 'pulse', definition: 'The heartbeat felt in arteries as blood is pumped from the heart' },
        { term: 'artery', definition: 'Blood vessel that carries blood away from the heart' },
        { term: 'radial pulse', definition: 'Pulse felt at the wrist on the thumb side' },
        { term: 'carotid pulse', definition: 'Pulse felt in the neck on either side of the windpipe' },
        { term: 'circulation', definition: 'The movement of blood through the body' },
      ],

      analogies: [
        'Your arteries are like rivers, and your pulse is the current you can feel flowing through them.',
        'Checking pulses in different places is like checking water pressure at different faucets in your house.',
        'A strong pulse is like a fire hose; a weak pulse is like a dripping faucet.',
      ],

      examples: [
        'A runner might have a pulse of 50 beats per minute, which is normal for them.',
        'Missing pulses in one foot might mean a blocked artery in that leg.',
        'A bounding pulse might happen after exercise or with anxiety.',
      ],

      patientCounselingPoints: [
        'Learn to check your own pulse at your wrist.',
        'Tell your doctor if you notice your heart racing or skipping beats.',
        'Cold fingers can make pulses harder to feel.',
      ],
    },

    2: {
      level: 2,
      summary: 'Pulse examination systematically evaluates arterial blood flow through rate, rhythm, character, and symmetry assessment at multiple peripheral sites.',
      explanation: `## Pulse Assessment Sites

### Central Pulses

**Carotid Arteries:**
- Location: Lateral to trachea, medial to sternocleidomastoid
- Technique: Gentle pressure with two fingers
- Caution: Never both sides simultaneously
- Assess: Rate, rhythm, upstroke, volume

**Femoral Arteries:**
- Location: Below inguinal ligament, midway between ASIS and pubic symphysis
- Technique: Deep palpation with two hands
- Assess: Presence, character, bruits

### Upper Extremity Pulses

**Brachial Artery:**
- Location: Medial aspect of antecubital fossa
- Technique: Palpate with thumb or fingers
- Use: Blood pressure measurement

**Radial Artery:**
- Location: Lateral wrist, proximal to thenar eminence
- Technique: Two-finger palpation
- Most commonly assessed pulse

**Ulnar Artery:**
- Location: Medial wrist
- Technique: Deep palpation
- Assess: Adequacy for arterial line

### Lower Extremity Pulses

**Popliteal Artery:**
- Location: Popliteal fossa (behind knee)
- Technique: Flex knee, deep bilateral palpation
- Often difficult to feel

**Dorsalis Pedis:**
- Location: Midfoot, lateral to extensor hallucis longus tendon
- Technique: Light palpation
- Variable anatomical position

**Posterior Tibial:**
- Location: Posterior to medial malleolus
- Technique: Palpate behind inner ankle bone
- Most reliable foot pulse

### Pulse Characteristics

**Rate:**
- Normal: 60-100 bpm (adults)
- Tachycardia: >100 bpm
- Bradycardia: <60 bpm

**Rhythm:**
- Regular: Consistent intervals
- Regularly irregular: Pattern to irregularity
- Irregularly irregular: No pattern (AFib)

**Volume/Amplitude:**
- Bounding: Large volume (aortic regurgitation)
- Normal: Moderate, easily palpable
- Diminished: Weak, difficult to feel
- Absent: No palpable pulse

**Contour:**
- Normal: Rapid upstroke, brief peak, gradual decline
- Pulsus parvus et tardus: Weak and delayed (AS)
- Pulsus bisferiens: Double peak (HCM, AR)
- Pulsus alternans: Alternating strong and weak (heart failure)`,

      keyTerms: [
        { term: 'tachycardia', definition: 'Heart rate greater than 100 beats per minute' },
        { term: 'bradycardia', definition: 'Heart rate less than 60 beats per minute' },
        { term: 'pulsus paradoxus', definition: 'Excessive drop in systolic pressure with inspiration' },
        { term: 'water-hammer pulse', definition: 'Bounding pulse with rapid upstroke and collapse' },
        { term: 'pulsus alternans', definition: 'Alternating strong and weak pulses' },
      ],

      analogies: [
        'Pulse contour is like a roller coaster - some are steep and fast, others are gradual.',
        'Checking all pulses is like checking all the exits on a building - you need to know they all work.',
      ],

      examples: [
        'Absent femoral pulses suggest aortic coarctation.',
        'Weak dorsalis pedis with strong posterior tibial is anatomically variant.',
        'Radio-femoral delay suggests coarctation of aorta.',
      ],

      clinicalNotes: 'Absent or asymmetrical pulses warrant further evaluation for peripheral artery disease.',
    },

    3: {
      level: 3,
      summary: 'Advanced pulse examination techniques assess cardiovascular hemodynamics and detect peripheral vascular disease through detailed pulse waveform analysis.',
      explanation: `## Pulse Waveform Analysis

### Normal Pulse Contour

**Components:**
1. Anacrotic shoulder - initial upstroke
2. Percussion wave - main forward flow
3. Dicrotic notch - aortic valve closure
4. Diastolic decline - runoff into periphery

### Abnormal Pulse Contours

**Pulsus Parvus et Tardus:**
- Weak amplitude
- Delayed upstroke
- Indicates aortic stenosis
- Palpable at carotid

**Pulsus Bisferiens:**
- Double-peaked pulse
- Seen in HCM and aortic regurgitation
- First peak: percussion wave
- Second peak: tidal wave

**Water-Hammer (Corrigan) Pulse:**
- Bounding, collapsing quality
- Rapid upstroke and descent
- Seen in aortic regurgitation, PDA
- Best felt with arm elevated

**Pulsus Alternans:**
- Regular rhythm, alternating amplitude
- Indicates severe left ventricular dysfunction
- May only be detectable with sphygmomanometer

**Pulsus Paradoxus:**
- Excessive inspiratory drop in systolic BP (>10 mmHg)
- Seen in cardiac tamponade, severe asthma, COPD
- Check with BP cuff and stethoscope

### Peripheral Artery Disease Assessment

**Ankle-Brachial Index (ABI):**
- Ratio of ankle to brachial systolic pressure
- Normal: 1.0-1.4
- Mild PAD: 0.7-0.9
- Moderate: 0.4-0.7
- Severe: <0.4

**Pulse Grading:**
| Grade | Description |
|-------|-------------|
| 0 | Absent |
| 1 | Diminished |
| 2 | Normal |
| 3 | Bounding |

### Special Techniques

**Allen Test:**
- Assesses collateral circulation to hand
- Occlude both radial and ulnar arteries
- Release ulnar, assess hand color return
- >5 seconds abnormal

**Radio-Radial Delay:**
- Suggests subclavian stenosis
- Compare both radial pulses simultaneously
- May see inter-arm BP difference

**Radio-Femoral Delay:**
- Suggests aortic coarctation
- Palpate radial and femoral together
- Femoral pulse delayed relative to radial`,

      keyTerms: [
        { term: 'ABI', definition: 'Ankle-brachial index for PAD screening' },
        { term: 'dicrotic notch', definition: 'Brief pressure increase from aortic valve closure' },
        { term: 'collateral circulation', definition: 'Alternative blood flow pathways' },
        { term: 'subclavian stenosis', definition: 'Narrowing of subclavian artery' },
      ],

      analogies: [
        'Pulsus paradoxus is like squeezing a water balloon - external pressure affects the pulse.',
        'Pulsus alternans is like a car sputtering - the engine is struggling to maintain power.',
      ],

      examples: [
        'Pulsus paradoxus >20 mmHg suggests cardiac tamponade.',
        'ABI <0.9 warrants vascular surgery referral.',
        'Radio-femoral delay in young adult suggests coarctation.',
      ],

      clinicalNotes: 'Pulsus paradoxus is measured by noting when Korotkoff sounds first appear during expiration, then when they appear throughout respiratory cycle.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of pulse findings with cardiovascular disease diagnosis and hemodynamic assessment.',
      explanation: `## Clinical Applications

### Shock Assessment

**Pulse Characteristics by Shock Type:**

| Type | Pulse | Other Signs |
|------|-------|-------------|
| Hypovolemic | Weak, thready | Tachycardia, hypotension |
| Cardiogenic | Weak, may alternate | Cool, clammy, JVD |
| Septic | Bounding initially | Warm skin, fever |
| Anaphylactic | Weak, rapid | Urticaria, bronchospasm |
| Obstructive | Pulsus paradoxus | JVD, tamponade signs |

### Valvular Disease

**Aortic Stenosis:**
- Pulsus parvus et tardus
- Delayed carotid upstroke
- Narrow pulse pressure

**Aortic Regurgitation:**
- Water-hammer pulse
- Wide pulse pressure
- Quincke pulses (capillary pulsation)

**Hypertrophic Cardiomyopathy:**
- Pulsus bisferiens
- Jerky carotid upstroke
- Double impulse at apex

### Arrhythmia Diagnosis

**Atrial Fibrillation:**
- Irregularly irregular rhythm
- Variable pulse volume
- Pulse deficit (apex faster than radial)

**Heart Block:**
- Regular bradycardia
- May have cannon A waves in JVP
- Atrial rate faster than ventricular

### Vascular Emergencies

**Acute Limb Ischemia:**
- Six Ps: Pain, Pallor, Pulseless, Paresthesia, Paralysis, Poikilothermia
- Surgical emergency
- Document time of onset

**Aortic Dissection:**
- Pulse deficits between limbs
- New neurologic deficits
- Tearing chest pain
- Inter-arm BP difference >20 mmHg

### Chronic Conditions

**Hypertension:**
- Bounding pulses
- May have radio-femoral delay if coarctation
- Assess for target organ damage

**Atherosclerosis:**
- Diminished peripheral pulses
- Bruits over major arteries
- ABI abnormalities`,

      keyTerms: [
        { term: 'pulse deficit', definition: 'Difference between apical and radial heart rate' },
        { term: 'poikilothermia', definition: 'Limb temperature same as environment' },
        { term: 'paresthesia', definition: 'Abnormal sensation like tingling or numbness' },
        { term: 'Quincke pulse', definition: 'Visible capillary pulsation in nail bed' },
      ],

      clinicalNotes: 'Document specific pulses absent or diminished. Asymmetry is always abnormal and requires explanation.',
    },

    5: {
      level: 5,
      summary: 'Expert pulse examination in critical care, complex congenital disease, and advanced hemodynamic monitoring.',
      explanation: `## Advanced Applications

### Hemodynamic Monitoring

**Arterial Line Waveform:**
- Systolic upstroke slope
- Dicrotic notch position
- Diastolic runoff
- MAP calculation

**Factors Affecting Waveform:**
- Damping (air bubbles, clots)
- Overshoot (underdamped)
- Catheter position
- Patient position

### Complex Congenital Disease

**Single Ventricle Physiology:**
- Aortopulmonary shunt pulses
- Glenn/Fontan circulation
- Saturations balanced with pulmonary blood flow

**Coarctation of Aorta:**
- Radio-femoral delay
- Hypertension in arms
- Leg claudication
- Collateral circulation pulses

**Transposition of Great Arteries:**
- Single loud S2
- Depends on associated lesions
- Post-surgical changes

### Critical Care

**VA ECMO:**
- Native pulse may be absent
- Pulse pressure correlates with native function
- Weaning assessment

**Intra-aortic Balloon Pump:**
- Augmented diastolic pressure
- Reduced afterload in systole
- Timing crucial for effectiveness

**Ventricular Assist Devices:**
- Continuous flow: no pulse or weak pulse
- Pulsatile: artificial pulse
- RPMs correlate with flow

### Research Applications

**Pulse Wave Velocity:**
- Measures arterial stiffness
- Predicts cardiovascular events
- Non-invasive assessment

**Augmentation Index:**
- Reflection of pulse wave
- Measure of arterial stiffness
- Derived from arterial waveform`,

      keyTerms: [
        { term: 'MAP', definition: 'Mean arterial pressure' },
        { term: 'damping', definition: 'Attenuation of pressure waveform' },
        { term: 'augmentation index', definition: 'Measure of arterial stiffness from waveform' },
      ],

      clinicalNotes: 'In continuous flow VAD patients, traditional pulse examination is not useful; focus on device parameters and perfusion assessment.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-pulse',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'cardiovascular-cardiac-auscultation', targetType: 'process', relationship: 'sibling', label: 'Cardiac Auscultation' },
    { targetId: 'cardiovascular-blood-pressure', targetType: 'process', relationship: 'sibling', label: 'Blood Pressure' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination'],
    keywords: ['pulse', 'artery', 'circulation', 'peripheral'],
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

export default pulseExamination;
