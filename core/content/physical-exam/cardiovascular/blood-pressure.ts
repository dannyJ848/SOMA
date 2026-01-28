/**
 * Blood Pressure Measurement - Physical Examination
 */

import { EducationalContent } from '../../types';

export const bloodPressure: EducationalContent = {
  id: 'cardiovascular-blood-pressure',
  type: 'topic',
  name: 'Blood Pressure Measurement',
  alternateNames: ['BP Measurement', 'Blood Pressure Assessment', 'Vital Signs BP'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood pressure measurement checks how hard your blood pushes against your artery walls as your heart pumps.',
      explanation: `## What Is Blood Pressure?

Blood pressure is the force of your blood pushing against the walls of your arteries. It is measured with two numbers:

### The Two Numbers

**Top number (Systolic):**
- Pressure when your heart beats and pumps blood out
- Normal: Less than 120
- Higher numbers mean more pressure

**Bottom number (Diastolic):**
- Pressure when your heart rests between beats
- Normal: Less than 80
- Lower numbers are usually better

### How It Is Measured

A doctor or nurse wraps a cuff around your upper arm:
1. The cuff inflates and squeezes your arm
2. It slowly deflates while they listen
3. They hear when blood starts flowing again
4. The numbers show on a gauge or screen

### What the Numbers Mean

**Normal:** Less than 120/80
**Elevated:** 120-129 and less than 80
**High (Stage 1):** 130-139 or 80-89
**High (Stage 2):** 140 or higher, or 90 or higher
**Crisis:** Higher than 180 and/or 120 - call doctor immediately

### Why Blood Pressure Matters

High blood pressure can damage:
- Your heart
- Your brain
- Your kidneys
- Your eyes
- Your blood vessels

But you often cannot feel high blood pressure, which is why checking it regularly is important.`,

      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against artery walls' },
        { term: 'systolic', definition: 'Top BP number; pressure when heart beats' },
        { term: 'diastolic', definition: 'Bottom BP number; pressure when heart rests' },
        { term: 'hypertension', definition: 'High blood pressure' },
        { term: 'sphygmomanometer', definition: 'The medical device used to measure blood pressure' },
      ],

      analogies: [
        'Blood pressure is like water pressure in pipes - too high can damage the pipes over time.',
        'The heart is like a pump, and blood pressure measures how hard it is working.',
        'Arteries are like garden hoses - pressure changes based on how wide or narrow they are.',
      ],

      examples: [
        '130/85 means the pressure is 130 when the heart beats and 85 when it rests.',
        'A reading of 160/100 is high and needs medical attention.',
        'Athletes may have lower blood pressure like 105/65.',
      ],

      patientCounselingPoints: [
        'Sit quietly for 5 minutes before having your blood pressure checked.',
        'Avoid caffeine and exercise for 30 minutes before measurement.',
        'One high reading does not mean you have high blood pressure.',
        'Home monitoring helps track your blood pressure over time.',
      ],
    },

    2: {
      level: 2,
      summary: 'Blood pressure measurement uses standardized technique to accurately assess cardiovascular status and detect hypertension through proper cuff placement and Korotkoff sound interpretation.',
      explanation: `## Proper Technique

### Equipment Selection

**Cuff Size:**
| Arm Circumference | Cuff Size |
|-------------------|-----------|
| 22-26 cm | Small adult |
| 27-34 cm | Adult |
| 35-44 cm | Large adult |
| 45-52 cm | Thigh |

Incorrect cuff size causes errors:
- Too small: falsely high reading
- Too large: falsely low reading

### Patient Preparation
- Rest seated for 5 minutes
- Back supported, feet flat on floor
- Arm supported at heart level
- No talking during measurement
- Avoid caffeine, exercise, smoking for 30 minutes

### Measurement Steps

1. **Position cuff:**
   - 2-3 cm above antecubital fossa
   - Arrow over brachial artery
   - Snug but not tight

2. **Palpate systolic pressure:**
   - Inflate until radial pulse disappears
   - Note pressure
   - Deflate completely

3. **Auscultatory measurement:**
   - Inflate 20-30 mmHg above palpated pressure
   - Deflate at 2-3 mmHg/second
   - Listen with stethoscope over brachial artery

### Korotkoff Sounds

| Phase | Description | Clinical Significance |
|-------|-------------|----------------------|
| I | Clear tapping onset | Systolic pressure |
| II | Softening, swishing | (No clinical significance) |
| III | Crisper, louder | Not used |
| IV | Muffling, softer | Diastolic (in some guidelines) |
| V | Disappearance | Diastolic pressure (standard) |

### Technique Errors

| Error | Effect on Reading |
|-------|-------------------|
| Cuff too loose | Falsely high |
| Arm below heart level | Falsely high |
| Arm above heart level | Falsely low |
| Rapid deflation | Inaccurate |
| Talking | Falsely high |
| Unsupported arm | Variable |
| Cuff over clothing | Variable |

### Orthostatic Vital Signs
- Measure supine after 5 minutes
- Measure standing at 1 and 3 minutes
- Positive if SBP drops >20 or DBP drops >10
- Indicates volume depletion or autonomic dysfunction`,

      keyTerms: [
        { term: 'Korotkoff sounds', definition: 'Sounds heard when measuring blood pressure with stethoscope' },
        { term: 'orthostatic hypotension', definition: 'Drop in blood pressure when standing' },
        { term: 'auscultatory gap', definition: 'Silent interval between Korotkoff sounds' },
        { term: 'white coat hypertension', definition: 'Elevated BP only in medical settings' },
      ],

      analogies: [
        'Korotkoff sounds are like water flowing through a partially opened faucet - the sounds change as pressure changes.',
        'Using the wrong cuff size is like using the wrong size shoe - it does not fit and gives wrong results.',
      ],

      examples: [
        'Orthostatic hypotension in elderly suggests dehydration or medication side effect.',
        'White coat hypertension requires home monitoring for accurate diagnosis.',
        'Auscultatory gap may cause underestimation of systolic pressure.',
      ],

      clinicalNotes: 'Always use proper cuff size. Measure in both arms initially; persistent inter-arm difference >15 mmHg suggests subclavian stenosis.',
    },

    3: {
      level: 3,
      summary: 'Blood pressure assessment includes ambulatory monitoring, special populations considerations, and integration with cardiovascular risk stratification.',
      explanation: `## Ambulatory Blood Pressure Monitoring (ABPM)

### Indications
- White coat hypertension diagnosis
- Resistant hypertension evaluation
- Episodic hypertension
- Symptoms suggesting hypotension
- Autonomic dysfunction assessment

### Normal ABPM Values
- 24-hour average: <130/80 mmHg
- Daytime average: <135/85 mmHg
- Nighttime average: <120/70 mmHg
- Nocturnal dip: 10-20% lower than daytime

### Dipper Status
| Pattern | Definition | Significance |
|---------|------------|--------------|
| Dipper | >10% drop at night | Normal |
| Non-dipper | <10% drop | Increased CV risk |
| Reverse dipper | Higher at night | Highest CV risk |
| Extreme dipper | >20% drop | Possible over-treatment |

## Home Blood Pressure Monitoring

### Benefits
- Multiple readings over time
- Avoids white coat effect
- Improves control by 20%
- Detects masked hypertension

### Technique
- Proper cuff size essential
- Two readings, 1 minute apart
- Morning and evening for 7 days
- Discard day 1; average remaining

### Thresholds
- Home BP >135/85 suggests hypertension
- Corresponds to office >140/90

## Special Populations

### Pediatrics
- Use pediatric cuffs
- Compare to age/height/sex percentiles
- Interpretation different from adults

### Pregnancy
- Chronic hypertension: >140/90 before 20 weeks
- Gestational hypertension: >140/90 after 20 weeks
- Preeclampsia: plus proteinuria or end-organ damage
- Goal <140/90 to prevent complications

### Elderly
- Target <150/90 (JNC8) or <130/80 (ACC/AHA)
- Orthostatic hypotension common
- Systolic hypertension most common
- Frailty considerations

### CKD and Diabetes
- Target <130/80
- Multiple drug classes usually needed
- ACE-I or ARB first-line in CKD with albuminuria`,

      keyTerms: [
        { term: 'masked hypertension', definition: 'Normal office BP but elevated home/ambulatory' },
        { term: 'resistant hypertension', definition: 'BP uncontrolled despite 3 medications' },
        { term: 'ABPM', definition: 'Ambulatory blood pressure monitoring' },
        { term: 'nocturnal dipping', definition: 'Normal decrease in BP during sleep' },
      ],

      analogies: [
        'ABPM is like a 24-hour security camera - it captures what occasional checks might miss.',
        'Masked hypertension is like a student who behaves at school but misbehaves at home.',
      ],

      examples: [
        'Non-dipping pattern suggests increased cardiovascular risk.',
        'Resistant hypertension warrants evaluation for secondary causes.',
        'Home monitoring improves blood pressure control rates.',
      ],

      clinicalNotes: 'Home BP monitoring is recommended for all hypertensive patients to improve control rates.',
    },

    4: {
      level: 4,
      summary: 'Clinical application of blood pressure assessment in hypertension diagnosis, management, and target organ damage evaluation.',
      explanation: `## Hypertension Classification (ACC/AHA 2017)

| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 | and <80 |
| Elevated | 120-129 | and <80 |
| Stage 1 | 130-139 | or 80-89 |
| Stage 2 | >=140 | or >=90 |
| Hypertensive crisis | >180 | and/or >120 |

### Risk Stratification

**Calculate 10-year ASCVD risk:**
- Age, sex, race
- Total cholesterol, HDL
- Systolic BP
- Diabetes, smoking status
- On BP medication

**Risk Categories:**
- Low: <5%
- Borderline: 5-7.5%
- Intermediate: 7.5-20%
- High: >20%

### Treatment Thresholds

| Risk | Threshold |
|------|-----------|
| Low | Lifestyle, consider drug at 140/90 |
| Intermediate | Drug at 130/80 |
| High | Drug at 130/80 |
| Clinical CVD | Drug at 130/80 |

### Target Organ Damage Assessment

**Heart:**
- LVH on ECG or echo
- Heart failure
- Coronary disease

**Brain:**
- Stroke or TIA history
- Cognitive impairment
- White matter changes on MRI

**Kidneys:**
- eGFR <60
- Albuminuria
- Progressive CKD

**Eyes:**
- Hypertensive retinopathy
- AV nicking
- Hemorrhages, exudates
- Papilledema (malignant HTN)

**Arteries:**
- Increased arterial stiffness
- Carotid IMT thickening
- Aortic aneurysm
- PAD

### Secondary Hypertension Evaluation

**Renal:**
- Polycystic kidney disease
- Renal artery stenosis
- Chronic kidney disease

**Endocrine:**
- Primary aldosteronism
- Pheochromocytoma
- Cushing syndrome
- Thyroid disease
- Hyperparathyroidism

**Other:**
- Obstructive sleep apnea
- Coarctation of aorta
- Drug-induced
- Pregnancy-related`,

      keyTerms: [
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease' },
        { term: 'LVH', definition: 'Left ventricular hypertrophy' },
        { term: 'IMT', definition: 'Intima-media thickness' },
        { term: 'primary aldosteronism', definition: 'Excess aldosterone production' },
      ],

      clinicalNotes: 'Resistant hypertension requires workup for secondary causes, including primary aldosteronism, renal artery stenosis, and OSA.',
    },

    5: {
      level: 5,
      summary: 'Expert blood pressure management in complex patients, resistant hypertension, and advanced monitoring techniques.',
      explanation: `## Resistant Hypertension

**Definition:**
- BP uncontrolled despite 3 medications
- Including diuretic
- At maximum tolerated doses
- Or controlled but requiring 4+ medications

**Pseudoresistance:**
- Poor technique
- White coat effect
- Non-adherence
- Suboptimal doses
- Secondary causes

**Workup:**
- ABPM to rule out white coat
- Medication review
- Evaluation for secondary causes
- Aldosterone-renin ratio
- Renal imaging
- Sleep study

**Treatment:**
- Spironolactone (most effective 4th drug)
- Beta-blocker or alpha-blocker
- Direct vasodilators (hydralazine, minoxidil)
- Referral to hypertension specialist

## Advanced Monitoring

**Central Blood Pressure:**
- Pressure at ascending aorta
- Better predictor of outcomes
- Derived from peripheral pulse
- Augmentation index

**Arterial Tonometry:**
- Non-invasive central pressure
- Radial artery applanation
- SphygmoCor, Omron devices

**Invasive Monitoring:**
- Arterial line for ICU
- Continuous real-time data
- Waveform analysis
- For hemodynamic instability

## Special Clinical Scenarios

**Hypertensive Emergency:**
- Severe hypertension (>180/120)
- Acute target organ damage
- Requires IV therapy and ICU
- Examples: encephalopathy, acute heart failure, aortic dissection

**Hypertensive Urgency:**
- Severe hypertension
- No acute target organ damage
- Oral medications, gradual reduction
- Not an emergency

**Malignant Hypertension:**
- Severe hypertension
- Papilledema
- Renal failure
- Microangiopathic hemolysis
- Medical emergency`,

      keyTerms: [
        { term: 'central BP', definition: 'Blood pressure at the ascending aorta' },
        { term: 'applanation tonometry', definition: 'Technique for measuring arterial pressure' },
        { term: 'augmentation index', definition: 'Measure of wave reflection in arteries' },
        { term: 'microangiopathic hemolysis', definition: 'RBC destruction in small vessels' },
      ],

      clinicalNotes: 'In hypertensive emergency, reduce MAP by no more than 20-25% in first hour to prevent hypoperfusion.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aha-bp-guidelines',
      type: 'article',
      title: '2017 ACC/AHA Blood Pressure Guidelines',
      source: 'Journal of the American College of Cardiology',
    },
  ],

  crossReferences: [
    { targetId: 'cardiovascular-cardiac-auscultation', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Auscultation' },
    { targetId: 'cardiovascular-pulse-examination', targetType: 'topic', relationship: 'sibling', label: 'Pulse Examination' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'preventive-medicine'],
    keywords: ['blood pressure', 'hypertension', 'vital signs'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bloodPressure;
